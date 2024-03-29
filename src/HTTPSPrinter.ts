import * as Epson from './functions/enums'
import Builder from './Builder'
import { responseCodeToText } from './functions/conversions'

export default class HTTPSPrinter {
    private address: string

    constructor(ip: string, device_id = 'local_printer', timeout = 10000) {

        this.address = `https://${ip}/cgi-bin/epos/service.cgi?devid=${device_id}&timeout=${timeout}`

    }

    private toSoap(content: string) {

        return `<?xml version="1.0" encoding="utf-8"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"><s:Body>${content}</s:Body></s:Envelope>`

    }

    async send(build: Builder): Promise<{ ok: true } | { ok: false, message: string }> {

        const content = build.toString()

        const soap = this.toSoap(content)

        const controller = new AbortController()

        let timed_out = false
        const timeout = setTimeout(() => {
            timed_out = true
            controller.abort()
        }, 5000)

        try {

            const res = await fetch(this.address, {
                method: 'POST',
                signal: controller.signal,
                body: soap,
                headers: {
                    'Content-Type': 'text/xml; charset=utf-8',
                    'If-Modified-Since': 'Thu, 01 Jun 1970 00:00:00 GMT',
                    'SOAPAction': '""',
                },
            })

            clearTimeout(timeout)

            let text: string
            try {

                text = await res.text()

            } catch (e) {

                return { ok: false, message: 'Failed to parse body content' }

            }

            let collection: HTMLCollectionOf<Element>
            try {

                collection = new DOMParser()
                    .parseFromString(text, 'text/xml')
                    .getElementsByTagName('response')

                if (!collection.length)
                    throw new Error('No response element found')

            } catch (e) {

                return { ok: false, message: 'Failed to read response' }

            }

            const response = collection[0]

            const success = response.hasAttribute('status') ? /^(1|true)$/.test(response.getAttribute('success') ?? '') : null
            const code = response.hasAttribute('code') ? response.getAttribute('code') as Epson.ResponseCode : null

            // const status = response.hasAttribute('status') ? parseInt(response.getAttribute('status') ?? '') : null
            // const battery = response.hasAttribute('battery') ? parseInt(response.getAttribute('battery') ?? '') : null

            if (success === null || code === null)
                return { ok: false, message: 'Response data has invalid fields' }

            if (!success)
                return { ok: false, message: responseCodeToText(code) }

            return { ok: true }

        } catch (e) {

            if (timed_out)
                return { ok: false, message: 'Network timeout' }

            return { ok: false, message: 'Network error' }

        }

    }

    async ping() {

        return this.send(new Builder())

    }

}
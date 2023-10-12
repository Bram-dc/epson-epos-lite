import Builder from './Builder'

export default class USBPrinter {
    private id: number

    constructor(id: number) {

        this.id = id

    }

    async getDevice() {

        const devices = await navigator.usb.getDevices()

        const device = devices.find(device => device.productId === this.id)

        if (!device)
            throw new Error('Device not found')

        if (device.opened)
            return device

        try {

            await device.open()
            await device.selectConfiguration(device.configurations[0].configurationValue)
            if (device.configuration)
                await device.claimInterface(device.configuration.interfaces[0].interfaceNumber)

        } catch {

            throw new Error('Failed to open device')

        }

        return device

    }

    async send(build: Builder): Promise<{ ok: true } | { ok: false, message: string }> {

        const data = build.toBuffer()

        let device
        try {

            device = await this.getDevice()

        } catch (e) {

            return { ok: false, message: (e as any).message } // eslint-disable-line @typescript-eslint/no-explicit-any

        }

        try {

            await device.transferOut(1, data)

        } catch {

            return { ok: false, message: 'Failed to send data' }

        }

        return { ok: true }

    }

    async ping() {

        return this.send(new Builder())

    }

}
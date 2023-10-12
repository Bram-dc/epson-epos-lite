import Builder from './Builder';
export default class HTTPSPrinter {
    private address;
    constructor(ip: string, device_id?: string, timeout?: number);
    private toSoap;
    send(build: Builder): Promise<{
        ok: true;
    } | {
        ok: false;
        message: string;
    }>;
    ping(): Promise<{
        ok: true;
    } | {
        ok: false;
        message: string;
    }>;
}

import Builder from './Builder';
export default class Printer {
    private address;
    constructor(ip: string, device_id?: string, timeout?: number);
    private toSoap;
    sendRaw(content: string, printjob_id?: string): Promise<{
        ok: true;
    } | {
        ok: false;
        message: string;
    }>;
    send(build: Builder, printjob_id?: string): Promise<{
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

/// <reference types="w3c-web-usb" />
import Builder from './Builder';
export default class USBPrinter {
    private id;
    constructor(id: number);
    getDevice(): Promise<USBDevice>;
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

export declare const toHexBinary: (s: string) => string;
export declare const toBase64Binary: (s: string) => string;
export declare const toMonoImage: (imgdata: {
    data: number[];
    width: number;
    height: number;
}, s: number, g: number) => string;
export declare const toGrayImage: (imgdata: {
    data: number[];
    width: number;
    height: number;
}, g: number) => string;
export declare const escapeMarkup: (s: string) => string;
export declare const escapeControl: (s: string) => string;
export declare const getEnumAttr: (name: string, value: string, regex: RegExp) => string;
export declare const getBoolAttr: (name: string, value: boolean) => string;
export declare const getIntAttr: (name: string, value: number, min: number, max: number) => string;
export declare const getUByteAttr: (name: string, value: number) => string;
export declare const getUShortAttr: (name: string, value: number) => string;
export declare const getShortAttr: (name: string, value: number) => string;
export declare const getEnumIntAttr: (name: string, value: string | number, regex: RegExp, min: number, max: number) => string;

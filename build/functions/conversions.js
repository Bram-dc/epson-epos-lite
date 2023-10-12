export const responseCodeToText = (code) => {
    switch (code) {
        case "EPTR_AUTOMATICAL" /* EPTR_AUTOMATICAL */: return 'Automatic recovery error occurred';
        case "EPTR_BATTERY_LOW" /* EPTR_BATTERY_LOW */: return 'Battery has run out';
        case "EPTR_COVER_OPEN" /* EPTR_COVER_OPEN */: return 'Cover open error occurred';
        case "EPTR_CUTTER" /* EPTR_CUTTER */: return 'Auto cutter error occurred';
        case "EPTR_MECHANICAL" /* EPTR_MECHANICAL */: return 'Mechanical error occurred';
        case "EPTR_REC_EMPTY" /* EPTR_REC_EMPTY */: return 'No paper is left in the roll paper end detector';
        case "EPTR_UNRECOVERABLE" /* EPTR_UNRECOVERABLE */: return 'Unrecoverable error occurred';
        case "SchemaError" /* SchemaError */: return 'Error exists in the requested document syntax';
        case "DeviceNotFound" /* DeviceNotFound */: return 'Printer specified by the device ID does not exist';
        case "PrintSystemError" /* PrintSystemError */: return 'Error occurred with the printing system';
        case "EX_BADPORT" /* EX_BADPORT */: return 'An error occurred with the communication port';
        case "EX_TIMEOUT" /* EX_TIMEOUT */: return 'Print timeout occurred';
        case "EX_SPOOLER" /* EX_SPOOLER */: return 'Print queue is full';
        case "JobNotFound" /* JobNotFound */: return 'Specified job ID does not exist';
        case "Printing" /* Printing */: return 'Printing in progress';
        case "JobSpooling" /* JobSpooling */: return 'Job is spooling.';
        case "TooManyRequests" /* TooManyRequests */: return 'The number of print jobs sent to the printer has exceeded the allowable limit.';
        case "RequestEntityTooLarge" /* RequestEntityTooLarge */: return 'The size of the print job data exceeds the capacity of the printer.';
        case "ERROR_WAIT_EJECT" /* ERROR_WAIT_EJECT */: return 'Waiting for paper removal.';
        default: return 'Unknown error';
    }
};
//# sourceMappingURL=conversions.js.map
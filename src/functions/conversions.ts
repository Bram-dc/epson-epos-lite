export const responseCodeToText = (code: ResponseCode) => {

    switch (code) {

        case ResponseCode.EPTR_AUTOMATICAL: return 'Automatic recovery error occurred'
        case ResponseCode.EPTR_BATTERY_LOW: return 'Battery has run out'
        case ResponseCode.EPTR_COVER_OPEN: return 'Cover open error occurred'
        case ResponseCode.EPTR_CUTTER: return 'Auto cutter error occurred'
        case ResponseCode.EPTR_MECHANICAL: return 'Mechanical error occurred'
        case ResponseCode.EPTR_REC_EMPTY: return 'No paper is left in the roll paper end detector'
        case ResponseCode.EPTR_UNRECOVERABLE: return 'Unrecoverable error occurred'
        case ResponseCode.SchemaError: return 'Error exists in the requested document syntax'
        case ResponseCode.DeviceNotFound: return 'Printer specified by the device ID does not exist'
        case ResponseCode.PrintSystemError: return 'Error occurred with the printing system'
        case ResponseCode.EX_BADPORT: return 'An error occurred with the communication port'
        case ResponseCode.EX_TIMEOUT: return 'Print timeout occurred'
        case ResponseCode.EX_SPOOLER: return 'Print queue is full'
        case ResponseCode.JobNotFound: return 'Specified job ID does not exist'
        case ResponseCode.Printing: return 'Printing in progress'
        case ResponseCode.JobSpooling: return 'Job is spooling.'
        case ResponseCode.TooManyRequests: return 'The number of print jobs sent to the printer has exceeded the allowable limit.'
        case ResponseCode.RequestEntityTooLarge: return 'The size of the print job data exceeds the capacity of the printer.'
        case ResponseCode.ERROR_WAIT_EJECT: return 'Waiting for paper removal.'
        default: return 'Unknown error'

    }

}
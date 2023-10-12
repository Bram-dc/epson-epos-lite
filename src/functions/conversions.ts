import * as Epson from './enums'

export const responseCodeToText = (code: Epson.ResponseCode) => {

    switch (code) {

        case Epson.ResponseCode.EPTR_AUTOMATICAL: return 'Automatic recovery error occurred'
        case Epson.ResponseCode.EPTR_BATTERY_LOW: return 'Battery has run out'
        case Epson.ResponseCode.EPTR_COVER_OPEN: return 'Cover open error occurred'
        case Epson.ResponseCode.EPTR_CUTTER: return 'Auto cutter error occurred'
        case Epson.ResponseCode.EPTR_MECHANICAL: return 'Mechanical error occurred'
        case Epson.ResponseCode.EPTR_REC_EMPTY: return 'No paper is left in the roll paper end detector'
        case Epson.ResponseCode.EPTR_UNRECOVERABLE: return 'Unrecoverable error occurred'
        case Epson.ResponseCode.SchemaError: return 'Error exists in the requested document syntax'
        case Epson.ResponseCode.DeviceNotFound: return 'Printer specified by the device ID does not exist'
        case Epson.ResponseCode.PrintSystemError: return 'Error occurred with the printing system'
        case Epson.ResponseCode.EX_BADPORT: return 'An error occurred with the communication port'
        case Epson.ResponseCode.EX_TIMEOUT: return 'Print timeout occurred'
        case Epson.ResponseCode.EX_SPOOLER: return 'Print queue is full'
        case Epson.ResponseCode.JobNotFound: return 'Specified job ID does not exist'
        case Epson.ResponseCode.Printing: return 'Printing in progress'
        case Epson.ResponseCode.JobSpooling: return 'Job is spooling.'
        case Epson.ResponseCode.TooManyRequests: return 'The number of print jobs sent to the printer has exceeded the allowable limit.'
        case Epson.ResponseCode.RequestEntityTooLarge: return 'The size of the print job data exceeds the capacity of the printer.'
        case Epson.ResponseCode.ERROR_WAIT_EJECT: return 'Waiting for paper removal.'
        default: return 'Unknown error'

    }

}
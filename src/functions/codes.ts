export const uint8 = (int: number) => {

    if (int > 255)
        throw new Error(`${int} is not a valid uint8`)

    return int

}

export const uint3 = (int: number) => {

    if (int > 7)
        throw new Error(`${int} is not a valid uint8`)

    return int

}

export const encodeCharacter = (character: string) => character.charCodeAt(0)
const _ = encodeCharacter

export const selectSpecialCharacter = (table: number, code: number) => [ESC, _('t'), table, code, ESC, _('t'), 0]

export const escapeCharacter = (character: string) => {

    const code = encodeCharacter(character)

    if (code > 255) switch (code) {

        case 8364: return selectSpecialCharacter(19, 213)

        default: throw new Error(`${character} is not a valid character`)

    }

    return [code]

}

export const encodeString = (string: string) => string.split('').reduce((array, character) => { array.push(...escapeCharacter(character)); return array }, [] as number[])

export const NULL = 0x00
export const SOH = 0x01
export const STX = 0x02
export const ETX = 0x03
export const EOT = 0x04
export const ENQ = 0x05
export const ACK = 0x06
export const BEL = 0x07
export const BS = 0x08
export const HT = 0x09
export const LF = 0x0a
export const VT = 0x0b
export const FF = 0x0c
export const CR = 0x0d
export const SO = 0x0e
export const SI = 0x0f
export const DLE = 0x10
export const DC1 = 0x11
export const DC2 = 0x12
export const DC3 = 0x13
export const DC4 = 0x14
export const NAK = 0x15
export const SYN = 0x16
export const ETB = 0x17
export const CAN = 0x18
export const EM = 0x19
export const SUB = 0x1a
export const ESC = 0x1b
export const FS = 0x1c
export const GS = 0x1d
export const RS = 0x1e
export const US = 0x1f
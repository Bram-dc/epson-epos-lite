import * as Epson from './functions/enums'
import { regexAlign, regexBarcode, regexColor, regexCut, regexDirection, regexDrawer, regexFeed, regexFont, regexHri, regexLayout, regexLevel, regexLine, regexMode, regexPattern, regexPulse, regexSymbol } from './constants/regex'
import { escapeControl, escapeMarkup, getBoolAttr, getEnumAttr, getEnumIntAttr, getIntAttr, getShortAttr, getUByteAttr, getUShortAttr, toBase64Binary, toGrayImage, toHexBinary, toMonoImage } from './functions/misc'
import { encodeCharacter as _, encodeString, ESC, GS, LF, uint3 } from './functions/codes'

export default class Builder {
    private message = ''
    private commands: number[] = []
    halftone = Epson.Halftone.DITHER
    brightness = 1
    force = false

    constructor() {

        this.addReset()

    }

    addText(data: string) {

        this.commands.push(...encodeString(data))

        this.message += '<text>' + escapeMarkup(data) + '</text>'

        return this

    }

    addTextLang(lang: string) {

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<text lang="' + lang + '"/>'

        return this

    }

    addTextAlign(align: Epson.Align) {

        let n
        switch (align) {
            case Epson.Align.LEFT: n = 0; break
            case Epson.Align.CENTER: n = 1; break
            case Epson.Align.RIGHT: n = 2; break
        }

        this.commands.push(ESC, _('a'), n)

        let s = ''
        s += getEnumAttr('align', align, regexAlign)

        this.message += '<text' + s + '/>'

        return this

    }

    addTextRotate(rotate: boolean) {

        let s = ''
        s += getBoolAttr('rotate', rotate)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<text' + s + '/>'

        return this

    }

    addTextLineSpace(linespc: number) {

        let s = ''
        s += getUByteAttr('linespc', linespc)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<text' + s + '/>'

        return this

    }

    addTextFont(font: Epson.Font) {

        let s = ''
        s += getEnumAttr('font', font, regexFont)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<text' + s + '/>'

        return this

    }

    addTextSmooth(smooth: boolean) {

        this.commands.push(GS, _('b'), Number(smooth))

        let s = ''
        s += getBoolAttr('smooth', smooth)

        this.message += '<text' + s + '/>'

        return this

    }

    addTextDouble(dw?: boolean, dh?: boolean) {

        let s = ''
        if (dw !== undefined)
            s += getBoolAttr('dw', dw)

        if (dh !== undefined)
            s += getBoolAttr('dh', dh)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<text' + s + '/>'

        return this

    }

    addTextSize(width = 1, height = 1) {

        this.commands.push(GS, _('!'), (uint3(width - 1) << 4) + uint3(height - 1))

        let s = ''
        if (width !== undefined)
            s += getIntAttr('width', width, 1, 8)

        if (height !== undefined)
            s += getIntAttr('height', height, 1, 8)

        this.message += '<text' + s + '/>'

        return this

    }

    addTextStyle(reverse?: boolean, ul?: boolean, em?: boolean, color?: Epson.Color) {

        let s = ''
        if (reverse !== undefined)
            s += getBoolAttr('reverse', reverse)

        if (ul !== undefined)
            s += getBoolAttr('ul', ul)

        if (em !== undefined)
            s += getBoolAttr('em', em)

        if (color !== undefined)
            s += getEnumAttr('color', color, regexColor)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<text' + s + '/>'

        return this

    }

    addTextPosition(x: number) {

        this.commands.push(ESC, _('\\'), x, 0)

        let s = ''
        s += getUShortAttr('x', x)

        this.message += '<text' + s + '/>'

        return this

    }

    addTextVPosition(y: number) {

        let s = ''
        s += getUShortAttr('y', y)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<text' + s + '/>'

        return this

    }

    addFeedUnit(unit: number) {

        let s = ''
        s += getUByteAttr('unit', unit)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<feed' + s + '/>'

        return this

    }

    addFeedLine(line: number) {

        this.commands.push(ESC, _('d'), uint3(line))

        let s = ''
        s += getUByteAttr('line', line)

        this.message += '<feed' + s + '/>'

        return this

    }

    addFeed() {

        this.commands.push(LF)

        this.message += '<feed/>'

        return this

    }

    addFeedPosition(pos: Epson.Feed) {

        let s = ''
        s += getEnumAttr('pos', pos, regexFeed)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<feed' + s + '/>'

        return this

    }

    addImage(context: any, x: number, y: number, width: number, height: number, color?: Epson.Color, mode?: Epson.Mode) { // eslint-disable-line @typescript-eslint/no-explicit-any

        let s = ''

        const ht = this.halftone
        const br = this.brightness

        getUShortAttr('x', x)
        getUShortAttr('y', y)

        s += getUShortAttr('width', width)
        s += getUShortAttr('height', height)

        if (color !== undefined)
            s += getEnumAttr('color', color, regexColor)

        if (mode !== undefined)
            s += getEnumAttr('mode', mode, regexMode)

        if (isNaN(ht) || ht < 0 || ht > 2)
            throw new Error('Property "halftone" is invalid')

        if (isNaN(br) || br < 0.1 || br > 10)
            throw new Error('Property "brightness" is invalid')

        const imgdata = context.getImageData(x, y, width, height)

        const raster = (mode === Epson.Mode.GRAY16) ? toGrayImage(imgdata, br) : toMonoImage(imgdata, ht, br)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<image' + s + '>' + toBase64Binary(raster) + '</image>'

        return this

    }

    addLogo(key1: number, key2: number) {

        let s = ''

        s += getUByteAttr('key1', key1)
        s += getUByteAttr('key2', key2)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<logo' + s + '/>'

        return this

    }

    addBarcode(data: string, type: Epson.BarcodeType, hri?: Epson.BarcodeHRI, font?: Epson.Font, width?: number, height?: number) {

        let s = ''

        s += getEnumAttr('type', type, regexBarcode)

        if (hri !== undefined)
            s += getEnumAttr('hri', hri, regexHri)

        if (font !== undefined)
            s += getEnumAttr('font', font, regexFont)

        if (width !== undefined)
            s += getUByteAttr('width', width)

        if (height !== undefined)
            s += getUByteAttr('height', height)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<barcode' + s + '>' + escapeControl(escapeMarkup(data)) + '</barcode>'

        return this

    }

    addSymbol(data: string, type: Epson.BarcodeSymbol, level?: Epson.SymbolLevel, width?: number, height?: number, size?: number) {

        let s = ''

        s += getEnumAttr('type', type, regexSymbol)

        if (level !== undefined)
            s += getEnumIntAttr('level', level, regexLevel, 0, 255)

        if (width !== undefined)
            s += getUByteAttr('width', width)

        if (height !== undefined)
            s += getUByteAttr('height', height)

        if (size !== undefined)
            s += getUShortAttr('size', size)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<symbol' + s + '>' + escapeControl(escapeMarkup(data)) + '</symbol>'

        return this

    }

    addHLine(x1: number, x2: number, style?: Epson.Line) {

        let s = ''

        s += getUShortAttr('x1', x1)

        s += getUShortAttr('x2', x2)

        if (style !== undefined)
            s += getEnumAttr('style', style, regexLine)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<hline' + s + '/>'

        return this

    }

    addVLineBegin(x: number, style?: Epson.Line) {

        let s = ''

        s += getUShortAttr('x', x)

        if (style !== undefined)
            s += getEnumAttr('style', style, regexLine)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<vline-begin' + s + '/>'

        return this

    }

    addVLineEnd(x: number, style?: Epson.Line) {

        let s = ''
        s += getUShortAttr('x', x)

        if (style !== undefined)
            s += getEnumAttr('style', style, regexLine)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<vline-end' + s + '/>'

        return this

    }

    addPageBegin() {

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<page>'

        return this

    }

    addPageEnd() {

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '</page>'

        return this

    }

    addPageArea(x: number, y: number, width: number, height: number) {

        let s = ''

        s += getUShortAttr('x', x)
        s += getUShortAttr('y', y)
        s += getUShortAttr('width', width)
        s += getUShortAttr('height', height)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<area' + s + '/>'

        return this

    }

    addPageDirection(dir: Epson.PageDirection) {

        let s = ''

        s += getEnumAttr('dir', dir, regexDirection)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<direction' + s + '/>'

        return this

    }

    addPagEpsonition(x: number, y: number) {

        let s = ''

        s += getUShortAttr('x', x)
        s += getUShortAttr('y', y)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<position' + s + '/>'

        return this

    }

    addPageLine(x1: number, y1: number, x2: number, y2: number, style?: Epson.Line) {

        let s = ''

        s += getUShortAttr('x1', x1)
        s += getUShortAttr('y1', y1)
        s += getUShortAttr('x2', x2)
        s += getUShortAttr('y2', y2)

        if (style !== undefined)
            s += getEnumAttr('style', style, regexLine)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<line' + s + '/>'

        return this

    }

    addPageRectangle(x1: number, y1: number, x2: number, y2: number, style?: Epson.Line) {

        let s = ''

        s += getUShortAttr('x1', x1)
        s += getUShortAttr('y1', y1)
        s += getUShortAttr('x2', x2)
        s += getUShortAttr('y2', y2)

        if (style !== undefined)
            s += getEnumAttr('style', style, regexLine)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<rectangle' + s + '/>'

        return this

    }

    addRotateBegin() {

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<rotate-begin/>'

        return this

    }

    addRotateEnd() {

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<rotate-end/>'

        return this

    }

    addCut(type: Epson.Cut = Epson.Cut.NO_FEED) {

        let n
        switch (type) {
            case Epson.Cut.NO_FEED: n = 1; break
            case Epson.Cut.FEED: n = 66; break
            case Epson.Cut.RESERVE: n = 104; break
        }

        this.commands.push(GS, _('V'), n)

        let s = ''

        if (type !== undefined)
            s += getEnumAttr('type', type, regexCut)

        this.message += '<cut' + s + '/>'

        return this

    }

    addPulse(drawer?: Epson.Drawer, time?: Epson.Pulse) {

        let s = ''

        if (drawer !== undefined)
            s += getEnumAttr('drawer', drawer, regexDrawer)

        if (time !== undefined)
            s += getEnumAttr('time', time, regexPulse)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<pulse' + s + '/>'

        return this

    }

    addSound(pattern?: Epson.SoundPattern, repeat?: number, cycle?: number) {

        let s = ''

        if (pattern !== undefined)
            s += getEnumAttr('pattern', pattern, regexPattern)

        if (repeat !== undefined)
            s += getUByteAttr('repeat', repeat)

        if (cycle !== undefined)
            s += getUShortAttr('cycle', cycle)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<sound' + s + '/>'

        return this

    }

    addLayout(type: Epson.PaperType, width?: number, height?: number, margin_top?: number, margin_bottom?: number, offset_cut?: number, offset_label?: number) {

        let s = ''

        s += getEnumAttr('type', type, regexLayout)

        if (width !== undefined)
            s += getUShortAttr('width', width)

        if (height !== undefined)
            s += getUShortAttr('height', height)

        if (margin_top !== undefined)
            s += getShortAttr('margin-top', margin_top)

        if (margin_bottom !== undefined)
            s += getShortAttr('margin-bottom', margin_bottom)

        if (offset_cut !== undefined)
            s += getShortAttr('offset-cut', offset_cut)

        if (offset_label !== undefined)
            s += getShortAttr('offset-label', offset_label)

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<layout' + s + '/>'

        return this

    }

    addRecovery() {

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<recovery/>'

        return this

    }

    addReset() {

        this.commands.push(ESC, _('@'))

        this.message += '<reset/>'

        return this

    }

    addCommand(data: string) {

        throw new Error('Not implemented')
        this.commands.push()

        this.message += '<command>' + toHexBinary(data) + '</command>'

        return this

    }

    addRaw(data: number[]) {

        this.commands.push(...data)

        this.message += ''

        return this

    }

    toString() {

        let s = ''

        if (this.force)
            s += getBoolAttr('force', true)

        return '<epos-print xmlns="http://www.epson-pos.com/schemas/2011/03/epos-print"' + s + '>' + this.message + '</epos-print>'

    }

    toBuffer() {

        return new Uint8Array(this.commands)

    }

}
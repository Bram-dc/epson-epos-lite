const enum Font {
    A = 'font_a',
    B = 'font_b',
    C = 'font_c',
    D = 'font_d',
    E = 'font_e',
    SPECIAL_A = 'special_a',
    SPECIAL_B = 'special_b',
}

const enum Align {
    LEFT = 'left',
    CENTER = 'center',
    RIGHT = 'right',
}

const enum Color {
    NONE = 'none',
    ONE = 'color_1',
    TWO = 'color_2',
    THREE = 'color_3',
    FOUR = 'color_4',
}

const enum Feed {
    PEELING = 'peeling',
    CUTTING = 'cutting',
    CURRENT_TOF = 'current_tof',
    NEXT_TOF = 'next_tof',
}

const enum Mode {
    MONO = 'mono',
    GRAY16 = 'gray16',
}

const enum BarcodeType {
    UPC_A = 'upc_a',
    UPC_E = 'upc_e',
    EAN13 = 'ean13',
    JAN13 = 'jan13',
    EAN8 = 'ean8',
    JAN8 = 'jan8',
    CODE39 = 'code39',
    ITF = 'itf',
    CODABAR = 'codabar',
    CODE93 = 'code93',
    CODE128 = 'code128',
    GS1_128 = 'gs1_128',
    GS1_DATABAR_OMNIDIRECTIONAL = 'gs1_databar_omnidirectional',
    GS1_DATABAR_TRUNCATED = 'gs1_databar_truncated',
    GS1_DATABAR_LIMITED = 'gs1_databar_limited',
    GS1_DATABAR_EXPANDED = 'gs1_databar_expanded',
    CODE128_AUTO = 'code128_auto',
}

const enum BarcodeHRI {
    NONE = 'none',
    ABOVE = 'above',
    BELOW = 'below',
    BOTH = 'both',
}

const enum BarcodeSymbol {
    PDF417_STANDARD = 'pdf417_standard',
    PDF417_TRUNCATED = 'pdf417_truncated',
    QRCODE_MODEL_1 = 'qrcode_model_1',
    QRCODE_MODEL_2 = 'qrcode_model_2',
    QRCODE_MICRO = 'qrcode_micro',
    MAXICODE_MODE_2 = 'maxicode_mode_2',
    MAXICODE_MODE_3 = 'maxicode_mode_3',
    MAXICODE_MODE_4 = 'maxicode_mode_4',
    MAXICODE_MODE_5 = 'maxicode_mode_5',
    MAXICODE_MODE_6 = 'maxicode_mode_6',
    GS1_DATABAR_STACKED = 'gs1_databar_stacked',
    GS1_DATABAR_STACKED_OMNIDIRECTIONAL = 'gs1_databar_stacked_omnidirectional',
    GS1_DATABAR_EXPANDED_STACKED = 'gs1_databar_expanded_stacked',
    AZTECCODE_FULLRANGE = 'azteccode_fullrange',
    AZTECCODE_COMPACT = 'azteccode_compact',
    DATAMATRIX_SQUARE = 'datamatrix_square',
    DATAMATRIX_RECTANGLE_8 = 'datamatrix_rectangle_8',
    DATAMATRIX_RECTANGLE_12 = 'datamatrix_rectangle_12',
    DATAMATRIX_RECTANGLE_16 = 'datamatrix_rectangle_16',
}

const enum SymbolLevel {
    LEVEL_0 = 'level_0',
    LEVEL_1 = 'level_1',
    LEVEL_2 = 'level_2',
    LEVEL_3 = 'level_3',
    LEVEL_4 = 'level_4',
    LEVEL_5 = 'level_5',
    LEVEL_6 = 'level_6',
    LEVEL_7 = 'level_7',
    LEVEL_8 = 'level_8',
    LEVEL_L = 'level_l',
    LEVEL_M = 'level_m',
    LEVEL_Q = 'level_q',
    LEVEL_H = 'level_h',
    LEVEL_DEFAULT = 'default',
}

const enum Line {
    THIN = 'thin',
    MEDIUM = 'medium',
    THICK = 'thick',
    THIN_DOUBLE = 'thin_double',
    MEDIUM_DOUBLE = 'medium_double',
    THICK_DOUBLE = 'thick_double',
}

const enum PageDirection {
    LEFT_TO_RIGHT = 'left_to_right',
    BOTTOM_TO_TOP = 'bottom_to_top',
    RIGHT_TO_LEFT = 'right_to_left',
    TOP_TO_BOTTOM = 'top_to_bottom',
}

const enum Cut {
    NO_FEED = 'no_feed',
    FEED = 'feed',
    RESERVE = 'reserve',
}

const enum Drawer {
    DRAWER_1 = 'drawer_1',
    DRAWER_2 = 'drawer_2',
}

const enum Pulse {
    PULSE_100 = 'pulse_100',
    PULSE_200 = 'pulse_200',
    PULSE_300 = 'pulse_300',
    PULSE_400 = 'pulse_400',
    PULSE_500 = 'pulse_500',
}

const enum SoundPattern {
    NONE = 'none',
    PATTERN_0 = 'pattern_0',
    PATTERN_1 = 'pattern_1',
    PATTERN_2 = 'pattern_2',
    PATTERN_3 = 'pattern_3',
    PATTERN_4 = 'pattern_4',
    PATTERN_5 = 'pattern_5',
    PATTERN_6 = 'pattern_6',
    PATTERN_7 = 'pattern_7',
    PATTERN_8 = 'pattern_8',
    PATTERN_9 = 'pattern_9',
    PATTERN_10 = 'pattern_10',
    PATTERN_A = 'pattern_a',
    PATTERN_B = 'pattern_b',
    PATTERN_C = 'pattern_c',
    PATTERN_D = 'pattern_d',
    PATTERN_E = 'pattern_e',
    ERROR = 'error',
    PAPER_END = 'paper_end',
}

const enum PaperType {
    RECEIPT = 'receipt',
    RECEIPT_BM = 'receipt_bm',
    LABEL = 'label',
    LABEL_BM = 'label_bm',
}

const enum Halftone {
    DITHER = 0,
    ERROR_DIFFUSION = 1,
    THRESHOLD = 2,
}
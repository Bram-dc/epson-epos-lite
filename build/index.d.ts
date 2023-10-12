import Builder from './Builder';
import HTTPSPrinter from './HTTPSPrinter';
import USBPrinter from './USBPrinter';
declare const ePOS: {
    Builder: typeof Builder;
    HTTPSPrinter: typeof HTTPSPrinter;
    USBPrinter: typeof USBPrinter;
};
export default ePOS;

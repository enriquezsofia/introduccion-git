module.exports = class SaludoArgs {
    static get nombre() {
        return ProcessingInstruction.argv[2];
    }
}
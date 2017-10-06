module.exports = class APIResponse {
    constructor() {
        this.data = null,
        this.type = null,
        this.tags = []
    }
    prepare() {
        return JSON.stringify(this);
    }
}
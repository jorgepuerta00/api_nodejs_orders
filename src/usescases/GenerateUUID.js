'use strict';

class GenerateUUID {
    constructor() {
    }

    setBytes(bytes) {
        this.bytes = bytes;
    }

    execute() {
        const crypto = require("crypto");
        const id = crypto.randomBytes(this.bytes).toString("hex");
        return id;
    }
}

module.exports = GenerateUUID;

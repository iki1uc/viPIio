export const viPIio = {

    founder() {
        return {
            id: "viPIio",
            role: "GRÜNDER",
            seed: "RAWATOR-SEED",
            status: "READY",
            info: "viPIio → Gründer aktiviert"
        };
    },

    rawator() {
        return {
            id: "RAWATOR",
            mode: "LOS",
            block: "RAW-BLOCK-0",
            status: "PLANT",
            info: "RAWATOR pflanzt ersten Block"
        };
    },

    vec92() {
        return 92;
    },

    start() {
        return {
            founder: this.founder(),
            rawator: this.rawator(),
            vec92: this.vec92()
        };
    }
};

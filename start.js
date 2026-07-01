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
        console.log("RAWATOR → START");
        return {
            id: "RAWATOR",
            mode: "LOS",
            block: "RAW-BLOCK-0",
            status: "PLANT",
            info: "RAWATOR pflanzt ersten Block"
        };
    },

    start() {
        const f = this.founder();
        const r = this.rawator();
        return { founder: f, rawator: r };
    }
};


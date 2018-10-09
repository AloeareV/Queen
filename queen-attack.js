export default class Queens {
    constructor(placement) {
        if (placement === undefined) {
            placement = { white: [0, 3], black: [7, 3] }
        }
        this.white = placement.white;
        this.black = placement.black;
        if (String(this.white) === String(this.black)) {
            throw new Error("Queens cannot share the same space");
        }
    }
    canAttack() {
        let yDiff = this.white[0] - this.black[0];
        let xDiff = this.white[1] - this.black[1];
        if (Math.abs(yDiff) === Math.abs(xDiff)
        || xDiff === 0 || yDiff === 0) {
            return true;
        }
        return false;
    }
}
Queens.prototype.toString = function QueensToString() {
    let ret = [];
    for (let y = 0; y < 8; y++) {
        ret.push("");
        for (let x = 0; x < 8; x++) {
            if (this.white[0] === y && this.white[1] === x) {
                ret[y] += "W "
            } else {
                if (this.black[0] === y && this.black[1] === x) {
                    ret[y] += "B "
                } else {
                    if (x === 7) {
                        ret[y] += "_";
                    } else {
                        ret[y] += "_ ";
                    }
                }
            }
        }
    }
    ret[ret.length - 1] += "\n";
    return ret.join("\n");
}


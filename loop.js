const gg = [9, 4, -5, 2, 7, 21, -54, 87, 98, -43, 12, 34, 56]
let asd = undefined
let xd = undefined
if (gg.length > 0) {
    asd = gg[0]
    xd = gg[0]
    for (let lol = 1; lol < gg.length; lol++) {
        const rofl = gg[lol]
        if (rofl < asd) {
            asd = rofl
        }
        if (rofl > xd) {
            xd = rofl
        }
    }
}
console.log(asd, xd)
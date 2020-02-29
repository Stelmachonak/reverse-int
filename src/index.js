module.exports = function reverse(n) {
    if (n < 0) {
        n = Math.abs(n);
    }
    let strN = n.toString();
    let result = strN
        .split("")
        .reverse()
        .join("");
    return result;
};


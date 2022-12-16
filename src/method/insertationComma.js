const insertComma = (n) => {
    var m = "";
    for (var i = 0; i < n.length; i++) {
        var c = n.substr(n.length - i - 1, 1);
        if (i % 3 == 0 & i > 0) {
            m = c + ',' + m;
        } else {
            m = c + m;
        }
    }
    return m;
}

export default insertComma;
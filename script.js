function launch() {
    d3.select('p').text(random(1911, 2016));
}

function random(n, m) {
    return Math.ceil(Math.random() * (m - n) + n);
}
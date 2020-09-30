var getRandomId = function (tipe = 'string', length = 5, between = null) {

    if (tipe == 'number' && between)
        return Math.random().toString(between).substr(2, length);
    else
        return Math.random().toString(20).substr(2, length)
};

var waktu = function (time = null, format = 'mysqltimestamp') {
    if (format == 'mysqltimestamp')
        format = 'YYYY-MM-DD HH:mm:ss';
    if (!time)
        time = new Date();

    return moment(time).format(format);
};
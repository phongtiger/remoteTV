let Remote = function (code,volume,) {
    this.code = code;
    this.volume = volume;
    this.getCode = function () {
        return this.code;
    };
    this.setCode = function (code) {
        this.code = code;
    };
    this.upVolume = function (tivi,a) {
        tivi.volumetang(a);
    };
    this.downVolume = function (tivi,a) {
        tivi.volumegiam(a);
    };
    this.turn = function (tivi,a) {
        tivi.setStatus(a)
    }
};
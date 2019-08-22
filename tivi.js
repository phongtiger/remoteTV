let Tivi = function (chanel,volume,status) {
    this.chanel = chanel;
    this.volume = volume;
    this.status = status;
    this.getChanel = function () {
        return this.chanel;
    };
    this.getVolume = function () {
        return this.volume;
    };
    this.getStatus = function () {
        return this.status;
    };
    this.setChanel = function (chanel) {
        this.chanel = chanel;
    };
    this.setVolume = function (volume) {
        this.chanel = volume;
    };
    this.volumetang =function (a) {
        this.volume += a
    };
    this.volumegiam =function (a) {
        this.volume -= a
    };
    this.setStatus = function (a) {
        this.status = a;
    };
    this.remoteChanel = function (remote) {
        if (this.status){
            for (let i = 1; i <= 100; i++) {
                if (remote.getCode() == i) {
                    return this.chanel = i;
                }
            }
        }
    };

};
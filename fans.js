class Fan {
    constructor(maxlevel=3) {
        this._maxlevel = maxlevel
        this._level = ''
    }
    control(level) {
        level === 0 ? console.log('off') :
        console.log('level: ' + level)
    }
    increaseLevel() {
        ++this._level > this._maxlevel ? console.log('max, can\'t increase') : this.control(this._level)
        this._level = this._level > this._maxlevel ? this._maxlevel : this._level
    }
    decreaseLevel() {
        --this._level < 0 ? console.log('min, can\'t decrease') : this.control(this._level)
        this._level = this._level < 0 ? 0 :this._level
    }
}
class TeleControlFan extends Fan {
    constructor(maxlevel) {
        super(maxlevel)
    }
    jumptoLevel(level=1) {
        level > -1 && level < this._maxlevel ? this.control(level) : console.log('beyond the fan\'s level')
        this._level = level
    }
}
var thefan = new Fan()
thefan.decreaseLevel()
thefan.increaseLevel()
thefan.decreaseLevel()
thefan.increaseLevel()
thefan.increaseLevel()
thefan.increaseLevel()
thefan.increaseLevel()

var theTeleControlFan = new TeleControlFan(100)
theTeleControlFan.jumptoLevel(-1)
theTeleControlFan.jumptoLevel(20)
theTeleControlFan.decreaseLevel()
theTeleControlFan.increaseLevel()
theTeleControlFan.jumptoLevel()
theTeleControlFan.jumptoLevel(0)




class Fan {
    constructor(maxlevel=3) {
        this._maxlevel = maxlevel
        this._level = ''
    }
    control(level) {
        level === 0 ? console.log('Turn off the fan') :
        console.log('Adjust the fans\'s speed to ' + level * 100 + 'r/min')
    }
    increaseLevel() {
        ++this._level > this._maxlevel ? console.log('Can\' be increased.') : this.control(this._level)
        this._level = this._level > this._maxlevel ? this._maxlevel : this._level
    }
    decreaseLevel() {
        --this._level < 0 ? console.log('Can\' be decreased.') : this.control(this._level)
        this._level = this._level < 0 ? 0 :this._level
    }
}
class TeleControlFan extends Fan {
    constructor() {
        super()
    }
    jumptoLevel(level) {
        this._level = level
        this.control(this._level)
    }
}
var thefan = new Fan(5)
thefan.decreaseLevel()
thefan.increaseLevel()
thefan.decreaseLevel()
thefan.decreaseLevel()
thefan.increaseLevel()
thefan.increaseLevel()
thefan.increaseLevel()
thefan.increaseLevel()
var theTeleControlFan = new TeleControlFan()
theTeleControlFan.jumptoLevel(2)
theTeleControlFan.jumptoLevel(0)
theTeleControlFan.increaseLevel()




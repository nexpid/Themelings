// app/modules/screen/useWindowDimensions.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = {};
    var6 = false;
    var4['ignoreKeyboard'] = var6;
    var _closure1_slot1 = var4;
    var4 = function WINDOW_DIMENSIONS_GETTER(arg1) {
        var1 = arg1;
        var1 = var1.windowDimensions;
        return var1;
    };
    var _closure1_slot2 = var4;
    var4 = function WINDOW_DIMENSIONS_GETTER_IGNORING_KEYBOARD(arg1) {
        var1 = arg1;
        var1 = var1.windowDimensionsIgnoringKeyboard;
        return var1;
    };
    var _closure1_slot3 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/useWindowDimensions.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useWindowDimensions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arguments[0];
            var3 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 16; continue _fun0001 }
 9:
            var1 = _closure1_slot1;
 16:
            var1 = var1.ignoreKeyboard;
            if(!(var1 === var3)) { _fun0001_ip = 28; continue _fun0001 }
 26:
            var1 = false;
 28:
            var2 = _closure1_slot0;
            if(var1) { _fun0001_ip = 44; continue _fun0001 }
 38:
            var1 = _closure1_slot2;
            _fun0001_ip = 48; continue _fun0001;
 44:
            var1 = _closure1_slot3;
 48:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getWindowDimensions() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arguments[0];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0002_ip = 16; continue _fun0002 }
 9:
            var1 = _closure1_slot1;
 16:
            var1 = var1.ignoreKeyboard;
            if(!(var1 === var2)) { _fun0002_ip = 28; continue _fun0002 }
 26:
            var1 = false;
 28:
            var3 = _closure1_slot0;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            if(var1) { _fun0002_ip = 56; continue _fun0002 }
 48:
            var1 = var2.windowDimensions;
            _fun0002_ip = 62; continue _fun0002;
 56:
            var1 = var2.windowDimensionsIgnoringKeyboard;
 62:
            return var1;
        }
    };
    var3['getWindowDimensions'] = var2;
    return var1;
})();
// app/modules/screen/useWindowDimensions.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
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
    var4 = metroImportDefault;
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
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/useWindowDimensions.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useWindowDimensions() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var3 = undefined;
            if(!(var1 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot1;
case 2:
            var1 = var1.ignoreKeyboard;
            if(!(var1 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
case 4:
            var2 = _closure1_slot0;
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot2;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var1 = _closure1_slot3;
case 8:
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getWindowDimensions() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arguments[0];
            var2 = undefined;
            if(!(var1 === var2)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var1 = _closure1_slot1;
case 2:
            var1 = var1.ignoreKeyboard;
            if(!(var1 === var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = false;
case 4:
            var3 = _closure1_slot0;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 8:
            var1 = var2.windowDimensions;
            _fun0002_ip = 10; continue _fun0002;
case 9:
            var1 = var2.windowDimensionsIgnoringKeyboard;
case 10:
            return var1;
        }
    };
    var3['getWindowDimensions'] = var2;
    return var1;
})();
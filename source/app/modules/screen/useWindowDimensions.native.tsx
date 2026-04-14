// app/modules/screen/useWindowDimensions.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = false;
    var4['ignoreKeyboard'] = var7;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
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
            var1 = _closure1_slot4;
case 2:
            var8 = var1.ignoreKeyboard;
            if(!(var8 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = false;
case 4:
            var _closure2_slot0 = var8;
            var4 = var1.appEntryKey;
            var _closure2_slot1 = var3;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 2;
            var5 = var7[var5];
            var6 = var6.bind(var3)(var5);
            var5 = var6.useAppEntryKey;
            var7 = var5.bind(var6)();
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var4;
case 6:
            _closure2_slot1 = var7;
            var6 = _closure1_slot2;
            var5 = var6.useMemo;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 8:
                    var5 = _closure2_slot1;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.byAppEntry;
                            var1 = _closure4_slot0;
                            var1 = var2[var1];
                            var1 = var1.windowDimensions;
                            return var1;
                        };
                        return var1;
                    };
                    var1 = undefined;
                    var1 = var4.bind(var1)(var5);
                    _fun0002_ip = 9; continue _fun0002;
case 4:
                    var4 = _closure2_slot1;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var _closure4_slot0 = var2;
                        var1 = function(arg1) {
                            var1 = arg1;
                            var2 = var1.byAppEntry;
                            var1 = _closure4_slot0;
                            var1 = var2[var1];
                            var1 = var1.windowDimensionsIgnoringKeyboard;
                            return var1;
                        };
                        return var1;
                    };
                    var2 = undefined;
                    var1 = var3.bind(var2)(var4);
case 9:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var2, var4);
            var1 = _closure1_slot3;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var3['default'] = var4;
    var2 = function getWindowDimensions() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arguments[0];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot4;
case 10:
            var1 = var3.ignoreKeyboard;
            if(!(var1 === var2)) { _fun0003_ip = 5; continue _fun0003 }
case 12:
            var1 = false;
case 5:
            var3 = var3.appEntryKey;
            if(!(var3 === var2)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var3 = 'main';
case 13:
            var4 = _closure1_slot3;
            var2 = var4.getState;
            var2 = var2.bind(var4)();
            var2 = var2.byAppEntry;
            var2 = var2[var3];
            if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = var2.windowDimensions;
            _fun0003_ip = 6; continue _fun0003;
case 15:
            var1 = var2.windowDimensionsIgnoringKeyboard;
case 6:
            return var1;
        }
    };
    var3['getWindowDimensions'] = var2;
    return var1;
})();
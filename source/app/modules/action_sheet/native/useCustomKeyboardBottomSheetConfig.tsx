// app/modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/useCustomKeyboardBottomSheetConfig.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCustomKeyboardBottomSheetConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var13 = var2.forceMaxHeight;
            var7 = undefined;
            if(!(var13 === var7)) { _fun0001_ip = 19; continue _fun0001 }
 17:
            var13 = false;
 19:
            var _closure2_slot0 = var13;
            var _closure2_slot1 = var7;
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var7;
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var4 = var3.bind(var7)(var2);
            var2 = {};
            var5 = true;
            var2['ignoreKeyboard'] = var5;
            var4 = var4.bind(var7)(var2);
            _closure2_slot1 = var4;
            var2 = 7;
            var2 = var9[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.bind(var7)();
            var12 = var2.minimum;
            _closure2_slot2 = var12;
            var5 = var2.maximum;
            _closure2_slot3 = var5;
            var2 = 8;
            var2 = var9[var2];
            var3 = var3.bind(var7)(var2);
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var2 = var2.height;
                    var1 = _closure2_slot2;
                    var1 = var2 - var1;
                    var5 = {};
                    var5['initialPosition'] = var1;
                    var1 = false;
                    var5['animateOnMount'] = var1;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 2;
                    var1 = var4[var1];
                    var7 = undefined;
                    var2 = var2.bind(var7)(var1);
                    var1 = var2.isAndroid;
                    var2 = var1.bind(var2)();
                    var1 = var5;
                    if(var2) { _fun0002_ip = 208; continue _fun0002 }
 77:
                    var2 = _closure1_slot4;
                    var2 = var2.useReducedMotion;
                    var1 = var5;
                    if(var2) { _fun0002_ip = 208; continue _fun0002 }
 93:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 3;
                    var2 = var6[var2];
                    var4 = var4.bind(var7)(var2);
                    var2 = var4.getSystemKeyboardHeight;
                    var6 = var2.bind(var4)();
                    var4 = 0;
                    var2 = var5;
                    if(!(var4 === var6)) { _fun0002_ip = 205; continue _fun0002 }
 132:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 4;
                    var3 = var8[var3];
                    var4 = var6.bind(var7)(var3);
                    var3 = var4.getKeyboardTypePrevious;
                    var4 = var3.bind(var4)();
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var6.bind(var7)(var3);
                    var3 = var3.KeyboardTypes;
                    var3 = var3.SYSTEM;
                    var2 = var5;
                    if(!(var4 === var3)) { _fun0002_ip = 205; continue _fun0002 }
 193:
                    var3 = {};
                    var4 = true;
                    var3['animateOnMount'] = var4;
                    var2 = var3;
 205:
                    var1 = var2;
 208:
                    return var1;
                }
            };
            var2 = var3.bind(var7)(var2);
            var3 = var2.initialPosition;
            var8 = var2.animateOnMount;
            var11 = _closure1_slot3;
            var10 = var11.useMemo;
            var2 = new Array(3);
            var2[0] = var13;
            var2[1] = var5;
            var2[2] = var12;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot0;
                    if(var1) { _fun0003_ip = 32; continue _fun0003 }
 10:
                    var2 = _closure2_slot2;
                    var1 = new Array(2);
                    var1[0] = var2;
                    var2 = _closure2_slot3;
                    var1[1] = var2;
                    _fun0003_ip = 55; continue _fun0003;
 32:
                    var4 = _closure2_slot3;
                    var2 = new Array(2);
                    var2[0] = var4;
                    var3 = _closure2_slot3;
                    var2[1] = var3;
                    var1 = var2;
 55:
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var1, var2);
            var1 = {};
            var1['animateOnMount'] = var8;
            var8 = _closure1_slot0;
            var6 = 2;
            var6 = var9[var6];
            var8 = var8.bind(var7)(var6);
            var6 = var8.isAndroid;
            var6 = var6.bind(var8)();
            var8 = !var6;
            var6 = !var8;
            if(var8) { _fun0001_ip = 229; continue _fun0001 }
 227:
            var6 = undefined;
 229:
            var1['accessible'] = var6;
            var1['contentHeight'] = var5;
            var4 = var4.height;
            var1['containerHeight'] = var4;
            var4 = false;
            var1['enableDynamicSizing'] = var4;
            var1['initialPosition'] = var3;
            var3 = 'extend';
            var1['keyboardBehavior'] = var3;
            var1['snapPoints'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/chat_input/native/useChatInputMaxHeight.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getChatInputMaxHeight() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.getChatInputMaxHeightIsClamped;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot6;
            return var2;
case 2:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var3 = var7.bind(var5)(var2);
            var2 = var3.getSystemKeyboardHeight;
            var3 = var2.bind(var3)();
            var2 = 5;
            var2 = var8[var2];
            var4 = var7.bind(var5)(var2);
            var2 = var4.getCustomKeyboardHeight;
            var2 = var2.bind(var4)();
            var4 = 6;
            var4 = var8[var4];
            var6 = var7.bind(var5)(var4);
            var4 = var6.getKeyboardType;
            var6 = var4.bind(var6)();
            var4 = 7;
            var4 = var8[var4];
            var4 = var7.bind(var5)(var4);
            var4 = var4.KeyboardTypes;
            var4 = var4.SYSTEM;
            if(!(var6 !== var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2;
case 4:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 8;
            var2 = var6[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.getWindowDimensions;
            var2 = {};
            var6 = true;
            var2['ignoreKeyboard'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.height;
            var5 = var2 - var3;
            var6 = global;
            var4 = var6.Math;
            var3 = var4.min;
            var2 = _closure1_slot6;
            var7 = var6.Math;
            var6 = var7.max;
            var1 = _closure1_slot6;
            var5 = var5 - var1;
            var1 = 76;
            var1 = var6.bind(var7)(var1, var5);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var8 = var6.bind(var1)(var5);
    var5 = var8.getChatInputMaxHeightExperimentValue;
    var5 = var5.bind(var8)();
    var _closure1_slot6 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/chat_input/native/useChatInputMaxHeight.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useChatInputMaxHeight(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot4;
        var4 = var5.useState;
        var3 = _closure1_slot7;
        var7 = var4.bind(var5)(var3);
        var4 = _closure1_slot3;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var7, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot1 = var3;
        var4 = var5.useEffect;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function() {
            var4 = function maybeUpdateMaxHeight() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = arg1;
                        var2 = _closure1_slot7;
                        var4 = undefined;
                        var2 = var2.bind(var4)();
                        if(!(var1 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var6 = _closure2_slot0;
                        var5 = null;
                        var1 = var2;
                        if(!(var5 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                        var3 = _closure2_slot0;
                        var3 = var3.bind(var4)();
                        var1 = var2;
case 6:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 9;
            var5 = var5[var3];
            var3 = undefined;
            var5 = var6.bind(var3)(var5);
            var5 = var5.bind(var3)(var4);
            var _closure3_slot0 = var5;
            var2 = _closure1_slot5;
            var2 = var2.bind(var3)(var4);
            var _closure3_slot1 = var2;
            var1 = function() {
                var3 = _closure3_slot0;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure3_slot1;
                var2 = var2.bind(var1)();
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var5;
    var5 = function getChatInputMinHeight() {
        var1 = 38;
        return var1;
    };
    var3['getChatInputMinHeight'] = var5;
    var3['getChatInputMaxHeight'] = var4;
    var2 = function getChatInputHeightAnimationTiming(arg1) {
        var1 = global;
        var5 = var1.Math;
        var4 = var5.min;
        var2 = _closure1_slot7;
        var7 = undefined;
        var3 = var2.bind(var7)();
        var2 = arg1;
        var4 = var4.bind(var5)(var2, var3);
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 10;
        var1 = var8[var1];
        var3 = var6.bind(var7)(var1);
        var2 = var3.withTiming;
        var1 = {};
        var5 = 11;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.timingFastDuration;
        var1['duration'] = var5;
        var5 = 12;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.Easing;
        var5 = var5.linear;
        var1['easing'] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['getChatInputHeightAnimationTiming'] = var2;
    return var1;
})();
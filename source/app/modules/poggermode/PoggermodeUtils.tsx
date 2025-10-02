// app/modules/poggermode/PoggermodeUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.ShakeLevel;
    var _closure1_slot0 = var7;
    var7 = var4.SHAKE_STEPS;
    var _closure1_slot1 = var7;
    var4 = var4.SHAKE_STEP_DIVIDER;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Color;
    var _closure1_slot3 = var4;
    var4 = function getStepwiseValue(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = arguments[2];
            var3 = var1.multiplier;
            var1 = var1.value;
            var10 = arg2;
            var7 = var10[Symbol.iterator];
            var10 = var7().next;
            var9 = var10().value;
            var4 = var7;
            var6 = undefined;
            var8 = var4 === var6;
            var4 = undefined;
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var9;
case 2:
            var _closure2_slot0 = var4;
            var9 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = var10().value;
            var10 = var7;
            var10 = var10 === var6;
            var9 = undefined;
            var8 = var10;
            if(var10) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var9 = var11;
            var8 = var10;
case 4:
            var _closure2_slot1 = var9;
            if(var8) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7.return();
case 7:
            if(!(var5 === var6)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = 1;
case 9:
            var _closure2_slot2 = var6;
            var3 = var1 * var3;
            _closure2_slot2 = var3;
            var1 = 0;
            if(!(!(var3 <= var1))) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var4.reduce;
            var2 = function(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = arg1;
                    var7 = arg2;
                    var2 = arg3;
                    var4 = _closure2_slot2;
                    if(!(!(var4 > var7))) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var4 = _closure2_slot2;
                    if(!(var4 === var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var4 = _closure2_slot1;
                    var3 = var4[var2];
case 15:
                    return var3;
case 13:
                    var3 = _closure2_slot1;
                    var4 = var3[var2];
                    var3 = 1;
                    var6 = var2 + var3;
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    if(!(var6 !== var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var6 = _closure2_slot0;
                    var5 = var2 + var3;
                    var5 = var6[var5];
                    var6 = _closure2_slot1;
                    var3 = var2 + var3;
                    var3 = var6[var3];
                    var6 = _closure2_slot2;
                    var6 = var6 - var7;
                    var5 = var5 - var7;
                    var5 = var6 / var5;
                    var3 = var3 - var4;
                    var3 = var5 * var3;
                    var3 = var3 + var4;
                    return var3;
case 17:
                    var1 = _closure2_slot1;
                    var1 = var1[var2];
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2, var1);
            var2 = global;
            var3 = var2.Math;
            var2 = var3.min;
            var2 = var2.bind(var3)(var5, var4);
            return var2;
case 11:
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var8 = new Array(7);
    var4 = [1, 0.001];
    var8[0] = var4;
    var4 = [25, 0.3];
    var8[1] = var4;
    var4 = [100, 0.5];
    var8[2] = var4;
    var4 = [250, 0.8];
    var8[3] = var4;
    var4 = [500, 0.9];
    var8[4] = var4;
    var4 = [2500, 0.95];
    var8[5] = var4;
    var4 = [9001, 1];
    var8[6] = var4;
    var7 = var8.map;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1[Symbol.iterator];
            var1 = var2().next;
            var4 = var1().value;
            var3 = var2;
            var1 = undefined;
            var3 = var3 === var1;
            if(var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = var4;
case 19:
            if(var3) { _fun0003_ip = 21; continue _fun0003 }
case 16:
            var2.return();
case 21:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var7 = var8.map;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var2 = var4[Symbol.iterator];
            var4 = var2().next;
            var1 = var4().value;
            var1 = var2;
            var6 = undefined;
            var3 = var1 === var6;
            var1 = undefined;
            if(var3) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var5 = var4().value;
            var4 = var2;
            var4 = var4 === var6;
            var1 = undefined;
            var3 = var4;
            if(var4) { _fun0004_ip = 22; continue _fun0004 }
case 3:
            var1 = var5;
            var3 = var4;
case 22:
            if(var3) { _fun0004_ip = 5; continue _fun0004 }
case 24:
            var2.return();
case 5:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/poggermode/PoggermodeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0005_ip = 20; continue _fun0005 }
case 25:
            var1 = _closure1_slot0;
            var2 = var1.LEVEL_3;
case 20:
            var4 = _closure1_slot4;
            var3 = _closure1_slot1;
            var6 = var3[var2];
            var3 = new Array(2);
            var3[0] = var6;
            var1 = _closure1_slot2;
            var1 = var1[var2];
            var3[1] = var1;
            var2 = arg1;
            var1 = 100000;
            var1 = var4.bind(var5)(var2, var3, var1);
            return var1;
        }
    };
    var3['getComboShakeIntensity'] = var4;
    var4 = function(arg1) {
        var5 = _closure1_slot4;
        var2 = _closure1_slot5;
        var4 = new Array(2);
        var4[0] = var2;
        var1 = _closure1_slot6;
        var4[1] = var1;
        var3 = undefined;
        var2 = arg1;
        var1 = 1;
        var1 = var5.bind(var3)(var2, var4, var1);
        return var1;
    };
    var3['getComboPercentage'] = var4;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = 1;
            if(!(var1 !== var2)) { _fun0006_ip = 26; continue _fun0006 }
case 27:
            var1 = 2;
            if(!(var1 !== var2)) { _fun0006_ip = 28; continue _fun0006 }
case 14:
            var1 = 3;
            if(!(var1 !== var2)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
            var1 = 4;
            if(!(var1 !== var2)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
            var1 = 5;
            if(!(var1 !== var2)) { _fun0006_ip = 30; continue _fun0006 }
case 32:
            var1 = 6;
            if(!(var1 !== var2)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var1 = {};
            var2 = _closure1_slot3;
            var2 = var2.ORANGE_345;
            var1['color'] = var2;
            var2 = true;
            var1['flair'] = var2;
            _fun0006_ip = 35; continue _fun0006;
case 33:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.RED_400;
            var2['color'] = var3;
            var3 = true;
            var2['square'] = var3;
            var1 = var2;
case 35:
            _fun0006_ip = 36; continue _fun0006;
case 30:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.YELLOW_300;
            var2['color'] = var3;
            var3 = true;
            var2['square'] = var3;
            var1 = var2;
case 36:
            _fun0006_ip = 37; continue _fun0006;
case 28:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.GREEN_360;
            var2['color'] = var3;
            var1 = var2;
case 37:
            _fun0006_ip = 38; continue _fun0006;
case 26:
            var2 = {};
            var3 = _closure1_slot3;
            var3 = var3.BRAND_500;
            var2['color'] = var3;
            var1 = var2;
case 38:
            return var1;
        }
    };
    var3['getComboStyles'] = var4;
    var2 = function getComboScore(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var2 = var1.value;
            var3 = var1.multiplier;
            var1 = null;
            var4 = var1 != var3;
            var1 = 1;
            if(!var4) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var1 = var3;
case 39:
            var1 = var2 * var1;
            return var1;
        }
    };
    var3['getComboScore'] = var2;
    return var1;
})();
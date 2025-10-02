// app/modules/user_profile/UserProfileGradientUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var11;
    var8 = function getProfileTheme(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.getDarkness;
            var4 = var2.bind(var4)(var5);
            var2 = 0.5;
            if(!(!(var4 > var2))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot4;
            var2 = var2.LIGHT;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var3 = _closure1_slot4;
            var2 = var3.DARK;
case 6:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot5 = var8;
    var7 = function getValueInColorGradientByPercentage(arg1, arg2, arg3) {
        var5 = arg1;
        var7 = arg2;
        var2 = arg3;
        var1 = 100;
        var6 = var2 / var1;
        var3 = 1;
        var8 = var3 - var6;
        var2 = global;
        var9 = var2.Math;
        var4 = var9.round;
        var1 = 0;
        var10 = var5[var1];
        var10 = var10 * var8;
        var1 = var7[var1];
        var1 = var1 * var6;
        var1 = var10 + var1;
        var4 = var4.bind(var9)(var1);
        var1 = new Array(3);
        var1[0] = var4;
        var9 = var2.Math;
        var4 = var9.round;
        var10 = var5[var3];
        var10 = var10 * var8;
        var3 = var7[var3];
        var3 = var3 * var6;
        var3 = var10 + var3;
        var3 = var4.bind(var9)(var3);
        var1[1] = var3;
        var4 = var2.Math;
        var3 = var4.round;
        var2 = 2;
        var5 = var5[var2];
        var5 = var5 * var8;
        var2 = var7[var2];
        var2 = var2 * var6;
        var2 = var5 + var2;
        var2 = var3.bind(var4)(var2);
        var1[2] = var2;
        return var1;
    };
    var _closure1_slot6 = var7;
    var4 = function getGradientPercentageColorInRgb(arg1, arg2, arg3) {
        var5 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var2 = arg2;
        var1 = arg3;
        var2 = var5.bind(var4)(var3, var2, var1);
        var1 = 0;
        var13 = var2[var1];
        var1 = 1;
        var11 = var2[var1];
        var1 = 2;
        var9 = var2[var1];
        var1 = global;
        var1 = var1.HermesInternal;
        var4 = var1.concat;
        var14 = 'rgba(';
        var2 = ', ';
        var8 = ', 1)';
        var12 = var2;
        var10 = var2;
        var1 = var14[var4](var13, var12, var11, var10, var9, var8, var7);
        return var1;
    };
    var _closure1_slot7 = var4;
    var1 = global;
    var12 = var1.Object;
    var9 = var12.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var5);
    var1 = 0;
    var5 = var11[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot4 = var5;
    var5 = 4;
    var6 = var11[var5];
    var13 = var10.bind(var1)(var6);
    var12 = var13.memoize;
    var9 = function(arg1) {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 5;
        var3 = var5[var1];
        var2 = undefined;
        var7 = var4.bind(var2)(var3);
        var6 = var7.getContrastingColor;
        var3 = {};
        var8 = '#ffffff';
        var3['base'] = var8;
        var1 = var5[var1];
        var1 = var4.bind(var2)(var1);
        var1 = var1.WCAGContrastRatios;
        var1 = var1.HighContrastText;
        var3['contrastRatio'] = var1;
        var1 = arg1;
        var3 = var6.bind(var7)(var1, var3);
        var1 = 2;
        var1 = var5[var1];
        var2 = var4.bind(var2)(var1);
        var1 = var2.hex2int;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var6 = function(arg1) {
        var1 = arg1;
        return var1;
    };
    var6 = var12.bind(var13)(var9, var6);
    var5 = var11[var5];
    var13 = var10.bind(var1)(var5);
    var12 = var13.memoize;
    var9 = function(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var9 = arg1;
            var6 = arg3;
            var1 = null;
            if(!(var1 == var6)) { _fun0002_ip = 7; continue _fun0002 }
case 3:
            var2 = _closure1_slot5;
            var1 = undefined;
            var6 = var2.bind(var1)(var9);
case 7:
            var2 = _closure1_slot4;
            var3 = var2.LIGHT;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var7 = 6;
            var8 = var2[var7];
            var5 = undefined;
            var11 = var4.bind(var5)(var8);
            var10 = var11.mix;
            var8 = var2[var7];
            var8 = var4.bind(var5)(var8);
            var9 = var8.bind(var5)(var9);
            var2 = var2[var7];
            var4 = var4.bind(var5)(var2);
            var2 = arg2;
            var14 = var4.bind(var5)(var2);
            var13 = 0.5;
            var12 = 'lab';
            var16 = var11;
            var15 = var9;
            var2 = var16[var10](var15, var14, var13, var12, var11);
            var4 = global;
            var11 = var4.Math;
            var10 = var11.round;
            var8 = var2.get;
            var4 = 'hsl.l';
            var8 = var8.bind(var2)(var4);
            var9 = 100;
            var8 = var9 * var8;
            var8 = var10.bind(var11)(var8);
            var11 = var8 / var9;
            if(!(var6 === var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var3 = var8[var3];
            var9 = var6.bind(var5)(var3);
            var8 = var9.clamp;
            var6 = 0.8;
            var3 = 1;
            var3 = var8.bind(var9)(var11, var6, var3);
            _fun0002_ip = 10; continue _fun0002;
case 8:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 4;
            var6 = var9[var6];
            var10 = var8.bind(var5)(var6);
            var9 = var10.clamp;
            var8 = 0;
            var6 = 0.1;
            var3 = var9.bind(var10)(var11, var8, var6);
case 10:
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var6.bind(var5)(var1);
            var2 = var1.bind(var5)(var2);
            var1 = var2.set;
            var2 = var1.bind(var2)(var4, var3);
            var1 = var2.num;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var5 = function(arg1, arg2, arg3) {
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var12 = '';
        var11 = arg1;
        var3 = '-';
        var9 = arg2;
        var7 = arg3;
        var10 = var3;
        var8 = var3;
        var1 = var12[var6](var11, var10, var9, var8, var7, var6);
        return var1;
    };
    var5 = var12.bind(var13)(var9, var5);
    var9 = 7;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/user_profile/UserProfileGradientUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getProfileTheme'] = var8;
    var3['getValueInColorGradientByPercentage'] = var7;
    var7 = function calculateOverlayedColor(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var9 = arg2;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var4 = 2;
            var5 = var3[var4];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.int2rgbArray;
            var5 = arg1;
            var11 = var6.bind(var7)(var5);
            var5 = null;
            if(!(var5 != var9)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var8 = 3;
            var6 = var6[var8];
            var7 = var7.bind(var3)(var6);
            var6 = var7.parseString;
            var7 = var6.bind(var7)(var9);
            if(!(var5 != var7)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var5 = var7.red;
            var9 = new Array(3);
            var9[0] = var5;
            var5 = var7.green;
            var9[1] = var5;
            var5 = var7.blue;
            var9[2] = var5;
            var6 = 0;
            var5 = var11[var6];
            var10 = new Array(3);
            var10[0] = var5;
            var5 = 1;
            var12 = var11[var5];
            var10[1] = var12;
            var11 = var11[var4];
            var10[2] = var11;
            var _closure2_slot0 = var10;
            var7 = var7.alpha;
            var _closure2_slot1 = var7;
            var7 = var9.map;
            var2 = function(arg1, arg2) {
                var1 = global;
                var3 = var1.Math;
                var2 = var3.floor;
                var5 = _closure2_slot1;
                var4 = arg1;
                var4 = var5 * var4;
                var6 = _closure2_slot1;
                var5 = 1;
                var5 = var5 - var6;
                var6 = _closure2_slot0;
                var1 = arg2;
                var1 = var6[var1];
                var1 = var5 * var1;
                var1 = var4 + var1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var7.bind(var9)(var2);
            var2 = _closure1_slot3;
            var2 = var2.bind(var3)(var7, var8);
            var9 = var2[var6];
            var16 = var2[var5];
            var14 = var2[var4];
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var4];
            var3 = var2.bind(var3)(var1);
            var2 = var3.rgb2int;
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var19 = 'rgba(';
            var4 = ', ';
            var13 = ')';
            var18 = var9;
            var17 = var4;
            var15 = var4;
            var1 = var19[var6](var18, var17, var16, var15, var14, var13, var12);
            var1 = var2.bind(var3)(var1);
            return var1;
case 13:
            var1 = 0;
            return var1;
case 11:
            var1 = 0;
            return var1;
        }
    };
    var3['calculateOverlayedColor'] = var7;
    var3['calculateButtonColor'] = var6;
    var3['calculateModalV2BackgroundColor'] = var5;
    var3['getGradientPercentageColorInRgb'] = var4;
    var4 = function calculateGradientSplitColors(arg1, arg2, arg3, arg4, arg5) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arg3;
            var1 = 0;
            if(!(var1 !== var7)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 2;
            var5 = var4[var2];
            var6 = undefined;
            var9 = var3.bind(var6)(var5);
            var8 = var9.int2rgbArray;
            var5 = arg1;
            var5 = var8.bind(var9)(var5);
            var2 = var4[var2];
            var4 = var3.bind(var6)(var2);
            var3 = var4.int2rgbArray;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = _closure1_slot7;
            var8 = 100;
            var1 = arg4;
            var1 = var8 * var1;
            var1 = var1 / var7;
            var2 = var3.bind(var6)(var5, var4, var1);
            var1 = new Array(2);
            var1[0] = var2;
            var2 = arg5;
            var2 = var8 * var2;
            var2 = var2 / var7;
            var2 = var3.bind(var6)(var5, var4, var2);
            var1[1] = var2;
            return var1;
case 15:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['calculateGradientSplitColors'] = var4;
    var2 = function getUserProfileGradientContainerColors(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var7 = arg2;
            var3 = arg3;
            var2 = 'string';
            var1 = typeof var3;
            if(!(var2 !== var1)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
            var2 = null;
            if(!(var2 == var9)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var1 = 0;
            var4 = var3[var1];
            _fun0005_ip = 21; continue _fun0005;
case 19:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 2;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.int2rgba;
            var1 = 1;
            var4 = var5.bind(var6)(var9, var1);
case 21:
            var1 = new Array(2);
            var1[0] = var4;
            if(!(var2 == var7)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = 1;
            var2 = var3[var2];
            _fun0005_ip = 24; continue _fun0005;
case 22:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.int2rgba;
            var4 = 1;
            var2 = var5.bind(var6)(var7, var4);
case 24:
            var1[1] = var2;
            _fun0005_ip = 25; continue _fun0005;
case 17:
            var4 = null;
            var5 = var3;
            if(!(var4 != var9)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 2;
            var6 = var6[var2];
            var2 = undefined;
            var8 = var8.bind(var2)(var6);
            var6 = var8.int2rgba;
            var2 = 1;
            var5 = var6.bind(var8)(var9, var2);
case 26:
            var2 = new Array(2);
            var2[0] = var5;
            if(!(var4 != var7)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 2;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.int2rgba;
            var4 = 1;
            var3 = var5.bind(var6)(var7, var4);
case 28:
            var2[1] = var3;
            var1 = var2;
case 25:
            return var1;
        }
    };
    var3['getUserProfileGradientContainerColors'] = var2;
    return var1;
})();
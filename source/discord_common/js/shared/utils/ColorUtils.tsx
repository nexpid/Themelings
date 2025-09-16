// discord_common/js/shared/utils/ColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = function pad2(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var3 = var4.length;
            var2 = 1;
            var1 = var4;
            if(!(var2 === var3)) { _fun0001_ip = 42; continue _fun0001 }
 18:
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '0';
            var1 = var3.bind(var2)(var4);
 42:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var6 = function int2hslRaw(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = 16;
            var4 = var1 >> var2;
            var2 = 8;
            var3 = var1 >> var2;
            var2 = 255;
            var1 = var2 & var1;
            var4 = var4 & var2;
            var11 = var4 / var2;
            var3 = var3 & var2;
            var9 = var3 / var2;
            var8 = var1 / var2;
            var6 = global;
            var2 = var6.Math;
            var1 = var2.min;
            var2 = var1.bind(var2)(var11, var9, var8);
            var3 = var6.Math;
            var1 = var3.max;
            var1 = var1.bind(var3)(var11, var9, var8);
            var5 = var1 - var2;
            var4 = 0;
            var7 = var4 === var5;
            var10 = 0;
            if(var7) { _fun0002_ip = 157; continue _fun0002 }
 97:
            if(!(var1 !== var11)) { _fun0002_ip = 139; continue _fun0002 }
 101:
            if(!(var1 !== var9)) { _fun0002_ip = 122; continue _fun0002 }
 105:
            var3 = var11 - var9;
            var12 = var3 / var5;
            var3 = 4;
            var3 = var12 + var3;
            _fun0002_ip = 137; continue _fun0002;
 122:
            var11 = var8 - var11;
            var12 = var11 / var5;
            var11 = 2;
            var3 = var12 + var11;
 137:
            _fun0002_ip = 154; continue _fun0002;
 139:
            var8 = var9 - var8;
            var9 = var8 / var5;
            var8 = 6;
            var3 = var9 % var8;
 154:
            var10 = var3;
 157:
            var9 = var6.Math;
            var8 = var9.round;
            var3 = 60;
            var3 = var3 * var10;
            var9 = var8.bind(var9)(var3);
            var8 = var9;
            if(!(var8 < var4)) { _fun0002_ip = 197; continue _fun0002 }
 187:
            var3 = 360;
            var8 = var9 + var3;
 197:
            var1 = var1 + var2;
            var2 = 2;
            var3 = var1 / var2;
            var1 = {};
            var1['h'] = var8;
            var4 = 0;
            if(var7) { _fun0002_ip = 255; continue _fun0002 }
 219:
            var8 = var6.Math;
            var7 = var8.abs;
            var2 = var2 * var3;
            var6 = 1;
            var2 = var2 - var6;
            var2 = var7.bind(var8)(var2);
            var2 = var6 - var2;
            var4 = var5 / var2;
 255:
            var2 = 100;
            var6 = var2 * var4;
            var5 = var6.toFixed;
            var4 = 1;
            var5 = var5.bind(var6)(var4);
            var5 = var5 - 0;
            var1['s'] = var5;
            var3 = var2 * var3;
            var2 = var3.toFixed;
            var2 = var2.bind(var3)(var4);
            var2 = var2 - 0;
            var1['l'] = var2;
            return var1;
        }
    };
    var _closure1_slot4 = var6;
    var5 = function int2rgbArray(arg1) {
        var3 = arg1;
        var1 = 16;
        var4 = var3 >> var1;
        var1 = new Array(3);
        var2 = 255;
        var4 = var4 & var2;
        var1[0] = var4;
        var4 = 8;
        var4 = var3 >> var4;
        var4 = var4 & var2;
        var1[1] = var4;
        var2 = var2 & var3;
        var1[2] = var2;
        return var1;
    };
    var _closure1_slot5 = var5;
    var4 = function getLuminance(arg1, arg2, arg3) {
        var3 = new Array(3);
        var1 = arg1;
        var3[0] = var1;
        var1 = arg2;
        var3[1] = var1;
        var1 = arg3;
        var3[2] = var1;
        var2 = var3.map;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = 255;
                var3 = var2 / var1;
                var1 = 0.03928;
                if(!(!(var3 <= var1))) { _fun0003_ip = 84; continue _fun0003 }
 24:
                var1 = global;
                var5 = var1.Math;
                var4 = var5.pow;
                var1 = 0.055;
                var2 = var3 + var1;
                var1 = 1.055;
                var2 = var2 / var1;
                var1 = 2.4;
                var1 = var4.bind(var5)(var2, var1);
                _fun0003_ip = 98; continue _fun0003;
 84:
                var2 = 12.92;
                var1 = var3 / var2;
 98:
                return var1;
            }
        };
        var4 = var2.bind(var3)(var1);
        var1 = 0;
        var2 = var4[var1];
        var1 = 0.2126;
        var3 = var1 * var2;
        var1 = 1;
        var2 = var4[var1];
        var1 = 0.7152;
        var1 = var1 * var2;
        var2 = 2;
        var4 = var4[var2];
        var2 = 0.0722;
        var2 = var2 * var4;
        var1 = var3 + var1;
        var1 = var1 + var2;
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d*)?)\))?/;
    var _closure1_slot2 = var1;
    var1 = 1;
    var8 = var7[var1];
    var7 = require;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/shared/utils/ColorUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var7 = function hex2int(arg1) {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 0;
        var1 = var3[var1];
        var3 = undefined;
        var2 = var2.bind(var3)(var1);
        var1 = arg1;
        var2 = var2.bind(var3)(var1);
        var1 = var2.num;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['hex2int'] = var7;
    var7 = function int2hex(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var1 = 16777215;
            if(!(!(var7 <= var1))) { _fun0004_ip = 129; continue _fun0004 }
 13:
            var3 = _closure1_slot3;
            var1 = 24;
            var1 = var7 >> var1;
            var6 = 255;
            var2 = var1 & var6;
            var1 = var2.toString;
            var8 = 16;
            var1 = var1.bind(var2)(var8);
            var2 = undefined;
            var5 = var3.bind(var2)(var1);
            var1 = var7 >> var8;
            var4 = var1 & var6;
            var1 = var4.toString;
            var1 = var1.bind(var4)(var8);
            var4 = var3.bind(var2)(var1);
            var1 = 8;
            var1 = var7 >> var1;
            var6 = var1 & var6;
            var1 = var6.toString;
            var1 = var1.bind(var6)(var8);
            var3 = var3.bind(var2)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '#';
            var1 = var2.bind(var1)(var5, var4, var3);
            _fun0004_ip = 236; continue _fun0004;
 129:
            var4 = _closure1_slot3;
            var8 = 16;
            var3 = var7 >> var8;
            var2 = 255;
            var5 = var3 & var2;
            var3 = var5.toString;
            var5 = var3.bind(var5)(var8);
            var3 = undefined;
            var6 = var4.bind(var3)(var5);
            var5 = 8;
            var5 = var7 >> var5;
            var9 = var5 & var2;
            var5 = var9.toString;
            var5 = var5.bind(var9)(var8);
            var5 = var4.bind(var3)(var5);
            var7 = var2 & var7;
            var2 = var7.toString;
            var2 = var2.bind(var7)(var8);
            var4 = var4.bind(var3)(var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = '#';
            var1 = var3.bind(var2)(var6, var5, var4);
 236:
            return var1;
        }
    };
    var3['int2hex'] = var7;
    var3['int2hslRaw'] = var6;
    var6 = function int2hsl(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arguments[1];
            var2 = arguments[2];
            var11 = arguments[3];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0005_ip = 17; continue _fun0005 }
 15:
            var1 = false;
 17:
            if(!(var2 === var5)) { _fun0005_ip = 23; continue _fun0005 }
 21:
            var2 = null;
 23:
            if(!(var11 === var5)) { _fun0005_ip = 30; continue _fun0005 }
 27:
            var11 = 1;
 30:
            var4 = _closure1_slot4;
            var3 = arg1;
            var3 = var4.bind(var5)(var3);
            var10 = var3.h;
            var9 = var3.s;
            var8 = var3.l;
            if(var1) { _fun0005_ip = 191; continue _fun0005 }
 66:
            var1 = null;
            if(!(var1 == var2)) { _fun0005_ip = 131; continue _fun0005 }
 72:
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var20 = 'hsla(';
            var18 = ', ';
            var3 = '%, ';
            var12 = ')';
            var19 = var10;
            var17 = var9;
            var16 = var3;
            var15 = var8;
            var14 = var3;
            var13 = var11;
            var1 = var20[var6](var19, var18, var17, var16, var15, var14, var13, var12, var11);
            _fun0005_ip = 189; continue _fun0005;
 131:
            var17 = var2 * var9;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var20 = 'hsla(';
            var18 = ', ';
            var3 = '%, ';
            var12 = ')';
            var19 = var10;
            var16 = var3;
            var15 = var8;
            var14 = var3;
            var13 = var11;
            var1 = var20[var6](var19, var18, var17, var16, var15, var14, var13, var12, var11);
 189:
            _fun0005_ip = 248; continue _fun0005;
 191:
            var2 = global;
            var2 = var2.HermesInternal;
            var7 = var2.concat;
            var20 = 'hsla(';
            var18 = ', calc(var(--saturation-factor, 1) * ';
            var16 = '%), ';
            var14 = '%, ';
            var12 = ')';
            var19 = var10;
            var17 = var9;
            var15 = var8;
            var13 = var11;
            var1 = var20[var7](var19, var18, var17, var16, var15, var14, var13, var12, var11);
 248:
            return var1;
        }
    };
    var3['int2hsl'] = var6;
    var6 = function hex2rgb(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var3 = arguments[1];
            var2 = undefined;
            if(!(var3 === var2)) { _fun0006_ip = 14; continue _fun0006 }
 12:
            var3 = null;
 14:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var6 = 0;
            var5 = var5[var6];
            var7 = var7.bind(var2)(var5);
            var5 = var7.valid;
            var5 = var5.bind(var7)(var4);
            if(var5) { _fun0006_ip = 54; continue _fun0006 }
 50:
            var5 = null;
            return var5;
 54:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var6];
            var1 = var5.bind(var2)(var1);
            var2 = var1.bind(var2)(var4);
            var1 = var2.alpha;
            var4 = null;
            if(!(var4 == var3)) { _fun0006_ip = 98; continue _fun0006 }
 88:
            var4 = var2.alpha;
            var3 = var4.bind(var2)();
 98:
            var2 = var1.bind(var2)(var3);
            var1 = var2.css;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['hex2rgb'] = var6;
    var6 = function int2rgba(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var8 = arg2;
            var1 = null;
            if(!(var1 == var8)) { _fun0007_ip = 30; continue _fun0007 }
 12:
            var1 = 24;
            var1 = var4 >> var1;
            var2 = 255;
            var1 = var1 & var2;
            var8 = var1 / var2;
 30:
            var1 = 16;
            var3 = var4 >> var1;
            var1 = 8;
            var2 = var4 >> var1;
            var1 = 255;
            var12 = var1 & var4;
            var4 = global;
            var4 = var4.HermesInternal;
            var6 = var4.concat;
            var17 = 'rgba(';
            var16 = var3 & var1;
            var3 = ', ';
            var14 = var2 & var1;
            var9 = ')';
            var15 = var3;
            var13 = var3;
            var11 = var3;
            var10 = var8;
            var1 = var17[var6](var16, var15, var14, var13, var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var3['int2rgba'] = var6;
    var6 = function rgb2int(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = arg1;
            var2 = var3.match;
            var1 = _closure1_slot2;
            var6 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 == var6)) { _fun0008_ip = 39; continue _fun0008 }
 27:
            var2 = {'red': 0, 'green': 0, 'blue': 0};
            _fun0008_ip = 117; continue _fun0008;
 39:
            var1 = {};
            var3 = global;
            var7 = var3.parseInt;
            var4 = 1;
            var4 = var6[var4];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var1['red'] = var4;
            var7 = var3.parseInt;
            var4 = 2;
            var4 = var6[var4];
            var4 = var7.bind(var5)(var4);
            var1['green'] = var4;
            var4 = var3.parseInt;
            var3 = 3;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var1['blue'] = var3;
            var2 = var1;
 117:
            var3 = var2.red;
            var1 = 16;
            var3 = var3 << var1;
            var4 = var2.green;
            var1 = 8;
            var1 = var4 << var1;
            var2 = var2.blue;
            var1 = var3 + var1;
            var1 = var1 + var2;
            return var1;
        }
    };
    var3['rgb2int'] = var6;
    var6 = function int2hsv(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var1 = 16;
            var1 = var2 >> var1;
            var3 = 255;
            var1 = var1 & var3;
            var1 = var1 / var3;
            var4 = 8;
            var4 = var2 >> var4;
            var4 = var4 & var3;
            var8 = var4 / var3;
            var2 = var3 & var2;
            var7 = var2 / var3;
            var3 = global;
            var4 = var3.Math;
            var2 = var4.max;
            var2 = var2.bind(var4)(var1, var8, var7);
            var4 = var3.Math;
            var3 = var4.min;
            var5 = var3.bind(var4)(var1, var8, var7);
            var9 = var2 - var5;
            var6 = 0;
            var3 = 0;
            if(!(var6 !== var2)) { _fun0009_ip = 98; continue _fun0009 }
 94:
            var3 = var9 / var2;
 98:
            var4 = 0;
            if(!(var2 !== var5)) { _fun0009_ip = 181; continue _fun0009 }
 104:
            if(!(var1 !== var2)) { _fun0009_ip = 153; continue _fun0009 }
 108:
            if(!(var8 !== var2)) { _fun0009_ip = 136; continue _fun0009 }
 112:
            var5 = var2;
            if(!(var7 === var5)) { _fun0009_ip = 174; continue _fun0009 }
 119:
            var10 = var1 - var8;
            var11 = var10 / var9;
            var10 = 4;
            var5 = var11 + var10;
            _fun0009_ip = 174; continue _fun0009;
 136:
            var1 = var7 - var1;
            var10 = var1 / var9;
            var1 = 2;
            var5 = var10 + var1;
            _fun0009_ip = 174; continue _fun0009;
 153:
            var1 = var8 - var7;
            var1 = var1 / var9;
            var6 = 0;
            if(!(var8 < var7)) { _fun0009_ip = 170; continue _fun0009 }
 167:
            var6 = 6;
 170:
            var5 = var1 + var6;
 174:
            var1 = 60;
            var4 = var5 * var1;
 181:
            var1 = {};
            var1['h'] = var4;
            var1['s'] = var3;
            var1['v'] = var2;
            return var1;
        }
    };
    var3['int2hsv'] = var6;
    var6 = function getDarkness(arg1) {
        var2 = arg1;
        var1 = 16;
        var4 = var2 >> var1;
        var1 = 8;
        var1 = var2 >> var1;
        var3 = 255;
        var5 = var3 & var2;
        var2 = 1;
        var6 = 0.299;
        var4 = var4 & var3;
        var4 = var6 * var4;
        var6 = 0.587;
        var1 = var1 & var3;
        var1 = var6 * var1;
        var4 = var4 + var1;
        var1 = 0.114;
        var1 = var1 * var5;
        var1 = var4 + var1;
        var1 = var1 / var3;
        var1 = var2 - var1;
        return var1;
    };
    var3['getDarkness'] = var6;
    var6 = function isValidHex(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.valid;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isValidHex'] = var6;
    var3['int2rgbArray'] = var5;
    var3['getLuminance'] = var4;
    var4 = function getContrast(arg1, arg2) {
        var3 = _closure1_slot5;
        var5 = undefined;
        var2 = arg1;
        var6 = var3.bind(var5)(var2);
        var2 = arg2;
        var7 = var3.bind(var5)(var2);
        var4 = _closure1_slot6;
        var3 = 0;
        var9 = var6[var3];
        var2 = 1;
        var8 = var6[var2];
        var1 = 2;
        var6 = var6[var1];
        var6 = var4.bind(var5)(var9, var8, var6);
        var3 = var7[var3];
        var2 = var7[var2];
        var1 = var7[var1];
        var5 = var4.bind(var5)(var3, var2, var1);
        var1 = global;
        var3 = var1.Math;
        var2 = var3.max;
        var2 = var2.bind(var3)(var6, var5);
        var3 = 0.05;
        var2 = var2 + var3;
        var4 = var1.Math;
        var1 = var4.min;
        var1 = var1.bind(var4)(var6, var5);
        var1 = var1 + var3;
        var1 = var2 / var1;
        return var1;
    };
    var3['getContrast'] = var4;
    var2 = function hsv2int(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var9 = arg2;
            var7 = arg3;
            var2 = arg1;
            var1 = 360;
            var1 = var2 / var1;
            var4 = global;
            var3 = var4.Math;
            var2 = var3.floor;
            var6 = 6;
            var1 = var6 * var1;
            var3 = var2.bind(var3)(var1);
            var5 = var1 - var3;
            var1 = 1;
            var2 = var1 - var9;
            var2 = var7 * var2;
            var8 = var5 * var9;
            var8 = var1 - var8;
            var8 = var7 * var8;
            var5 = var1 - var5;
            var5 = var5 * var9;
            var5 = var1 - var5;
            var5 = var7 * var5;
            var10 = var3 % var6;
            var6 = 0;
            if(!(var6 !== var10)) { _fun0010_ip = 191; continue _fun0010 }
 98:
            if(!(var1 !== var10)) { _fun0010_ip = 180; continue _fun0010 }
 102:
            var1 = 2;
            if(!(var1 !== var10)) { _fun0010_ip = 169; continue _fun0010 }
 109:
            var1 = 3;
            if(!(var1 !== var10)) { _fun0010_ip = 158; continue _fun0010 }
 116:
            var1 = 4;
            if(!(var1 !== var10)) { _fun0010_ip = 147; continue _fun0010 }
 123:
            var9 = 5;
            var3 = 0;
            var1 = 0;
            var6 = 0;
            if(!(var9 === var10)) { _fun0010_ip = 200; continue _fun0010 }
 136:
            var3 = var7;
            var1 = var2;
            var6 = var8;
            _fun0010_ip = 200; continue _fun0010;
 147:
            var3 = var5;
            var1 = var2;
            var6 = var7;
            _fun0010_ip = 200; continue _fun0010;
 158:
            var3 = var2;
            var1 = var8;
            var6 = var7;
            _fun0010_ip = 200; continue _fun0010;
 169:
            var3 = var2;
            var1 = var7;
            var6 = var5;
            _fun0010_ip = 200; continue _fun0010;
 180:
            var3 = var8;
            var1 = var7;
            var6 = var2;
            _fun0010_ip = 200; continue _fun0010;
 191:
            var3 = var7;
            var1 = var5;
            var6 = var2;
 200:
            var7 = var4.Math;
            var5 = var7.round;
            var2 = 255;
            var3 = var2 * var3;
            var5 = var5.bind(var7)(var3);
            var3 = 16;
            var3 = var5 << var3;
            var7 = var4.Math;
            var5 = var7.round;
            var1 = var2 * var1;
            var5 = var5.bind(var7)(var1);
            var1 = 8;
            var1 = var5 << var1;
            var5 = var4.Math;
            var4 = var5.round;
            var2 = var2 * var6;
            var2 = var4.bind(var5)(var2);
            var1 = var3 + var1;
            var1 = var1 + var2;
            return var1;
        }
    };
    var3['hsv2int'] = var2;
    return var1;
})();
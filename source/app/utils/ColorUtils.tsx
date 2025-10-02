// app/utils/ColorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var15;
    var11 = function hexToRgb(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = arg1;
        var4 = var4.bind(var5)(var3);
        var3 = var4.rgb;
        var4 = var3.bind(var4)();
        var3 = _closure1_slot3;
        var1 = 3;
        var3 = var3.bind(var5)(var4, var1);
        var1 = {};
        var4 = 0;
        var4 = var3[var4];
        var1['r'] = var4;
        var2 = var3[var2];
        var1['g'] = var2;
        var2 = 2;
        var2 = var3[var2];
        var1['b'] = var2;
        return var1;
    };
    var _closure1_slot7 = var11;
    var10 = function hexToRgba(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 1;
        var3 = var3[var2];
        var5 = undefined;
        var4 = var4.bind(var5)(var3);
        var3 = arg1;
        var4 = var4.bind(var5)(var3);
        var3 = var4.rgba;
        var4 = var3.bind(var4)();
        var3 = _closure1_slot3;
        var1 = 4;
        var3 = var3.bind(var5)(var4, var1);
        var1 = {};
        var4 = 0;
        var4 = var3[var4];
        var1['r'] = var4;
        var2 = var3[var2];
        var1['g'] = var2;
        var2 = 2;
        var2 = var3[var2];
        var1['b'] = var2;
        var2 = 3;
        var2 = var3[var2];
        var1['a'] = var2;
        return var1;
    };
    var _closure1_slot8 = var10;
    var8 = function rgbToHslObject(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = 255;
            var11 = var1 / var2;
            var1 = arg2;
            var9 = var1 / var2;
            var1 = arg3;
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
            if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var1 !== var11)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var1 !== var9)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = var11 - var9;
            var12 = var3 / var5;
            var3 = 4;
            var3 = var12 + var3;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var11 = var8 - var11;
            var12 = var11 / var5;
            var11 = 2;
            var3 = var12 + var11;
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var8 = var9 - var8;
            var9 = var8 / var5;
            var8 = 6;
            var3 = var9 % var8;
case 9:
            var10 = var3;
case 2:
            var9 = var6.Math;
            var8 = var9.round;
            var3 = 60;
            var3 = var3 * var10;
            var9 = var8.bind(var9)(var3);
            var8 = var9;
            if(!(var8 < var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = 360;
            var8 = var9 + var3;
case 10:
            var1 = var1 + var2;
            var2 = 2;
            var3 = var1 / var2;
            var1 = {};
            var1['h'] = var8;
            var4 = 0;
            if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var6.Math;
            var7 = var8.abs;
            var2 = var2 * var3;
            var6 = 1;
            var2 = var2 - var6;
            var2 = var7.bind(var8)(var2);
            var2 = var6 - var2;
            var4 = var5 / var2;
case 12:
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
    var _closure1_slot9 = var8;
    var7 = function hslToString(arg1, arg2, arg3) {
        var1 = global;
        var1 = var1.HermesInternal;
        var8 = var1.concat;
        var15 = 'hsl(';
        var14 = arg1;
        var13 = ', ';
        var12 = arg2;
        var11 = '%, ';
        var10 = arg3;
        var9 = '%)';
        var1 = var15[var8](var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var _closure1_slot10 = var7;
    var6 = function hslToHex(arg1, arg2, arg3) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg3;
        var4 = 100;
        var7 = var1 / var4;
        var _closure2_slot1 = var7;
        var1 = global;
        var6 = var1.Math;
        var5 = var6.min;
        var3 = 1;
        var3 = var3 - var7;
        var5 = var5.bind(var6)(var7, var3);
        var3 = arg2;
        var3 = var3 * var5;
        var3 = var3 / var4;
        var _closure2_slot2 = var3;
        var6 = function f(arg1) {
            var3 = _closure2_slot0;
            var2 = 30;
            var3 = var3 / var2;
            var2 = arg1;
            var3 = var2 + var3;
            var2 = 12;
            var5 = var3 % var2;
            var3 = _closure2_slot1;
            var4 = _closure2_slot2;
            var1 = global;
            var7 = var1.Math;
            var6 = var7.max;
            var10 = var1.Math;
            var9 = var10.min;
            var2 = 3;
            var8 = var5 - var2;
            var2 = 9;
            var5 = var2 - var5;
            var2 = 1;
            var5 = var9.bind(var10)(var8, var5, var2);
            var2 = -1;
            var2 = var6.bind(var7)(var5, var2);
            var2 = var4 * var2;
            var4 = var3 - var2;
            var3 = var1.Math;
            var2 = var3.round;
            var1 = 255;
            var1 = var1 * var4;
            var3 = var2.bind(var3)(var1);
            var2 = var3.toString;
            var1 = 16;
            var4 = var2.bind(var3)(var1);
            var3 = var4.padStart;
            var2 = 2;
            var1 = '0';
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = undefined;
        var2 = 0;
        var5 = var6.bind(var3)(var2);
        var2 = 8;
        var4 = var6.bind(var3)(var2);
        var2 = 4;
        var3 = var6.bind(var3)(var2);
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '#';
        var1 = var2.bind(var1)(var5, var4, var3);
        return var1;
    };
    var _closure1_slot11 = var6;
    var5 = function hex2rgb2hsv(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
            var2 = var3.exec;
            var1 = arg1;
            var11 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var11)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = global;
            var6 = var3.parseInt;
            var9 = 1;
            var2 = var11[var9];
            var5 = undefined;
            var10 = 16;
            var2 = var6.bind(var5)(var2, var10);
            var6 = 255;
            var16 = var2 / var6;
            var7 = var3.parseInt;
            var2 = 2;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2, var10);
            var8 = var2 / var6;
            var7 = var3.parseInt;
            var2 = 3;
            var2 = var11[var2];
            var2 = var7.bind(var5)(var2, var10);
            var14 = var2 / var6;
            var6 = var3.Math;
            var2 = var6.max;
            var6 = var2.bind(var6)(var16, var8, var14);
            var _closure2_slot0 = var6;
            var7 = var3.Math;
            var2 = var7.min;
            var2 = var2.bind(var7)(var16, var8, var14);
            var2 = var6 - var2;
            var _closure2_slot1 = var2;
            var12 = function diffc(arg1) {
                var3 = _closure2_slot0;
                var2 = arg1;
                var3 = var3 - var2;
                var2 = _closure2_slot1;
                var1 = 6;
                var1 = var3 / var1;
                var2 = var1 / var2;
                var1 = 0.5;
                var1 = var2 + var1;
                return var1;
            };
            var4 = function percentRoundFn(arg1) {
                var1 = global;
                var4 = var1.Math;
                var3 = var4.round;
                var2 = 100;
                var1 = arg1;
                var1 = var2 * var1;
                var1 = var3.bind(var4)(var1);
                var1 = var1 / var2;
                return var1;
            };
            var11 = 0;
            var10 = 0;
            var7 = 0;
            if(!(var7 !== var2)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = var2 / var6;
            var15 = var12.bind(var5)(var16);
            var13 = var12.bind(var5)(var8);
            var12 = var12.bind(var5)(var14);
            if(!(var16 !== var6)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            if(!(var8 !== var6)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var8 = 0;
            if(!(var14 === var6)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var14 = 0.6666666666666666;
            var14 = var14 + var13;
            var8 = var14 - var15;
case 22:
            _fun0002_ip = 24; continue _fun0002;
case 20:
            var14 = 0.3333333333333333;
            var14 = var14 + var15;
            var8 = var14 - var12;
case 24:
            _fun0002_ip = 25; continue _fun0002;
case 18:
            var8 = var12 - var13;
case 25:
            if(!(!(var8 < var11))) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var7 = var2;
            var10 = var8;
            if(!(var10 > var9)) { _fun0002_ip = 16; continue _fun0002 }
case 28:
            var10 = var8 - var9;
            var7 = var2;
            _fun0002_ip = 16; continue _fun0002;
case 26:
            var10 = var8 + var9;
            var7 = var2;
case 16:
            var2 = {};
            var9 = var3.Math;
            var8 = var9.round;
            var3 = 360;
            var3 = var3 * var10;
            var3 = var8.bind(var9)(var3);
            var2['h'] = var3;
            var3 = 100;
            var7 = var3 * var7;
            var7 = var4.bind(var5)(var7);
            var2['s'] = var7;
            var3 = var3 * var6;
            var3 = var4.bind(var5)(var3);
            var2['v'] = var3;
            return var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot12 = var5;
    var1 = function hslToRgb(arg1, arg2, arg3) {
        var3 = _closure1_slot7;
        var6 = _closure1_slot11;
        var2 = undefined;
        var5 = arg1;
        var4 = arg2;
        var1 = arg3;
        var1 = var6.bind(var2)(var5, var4, var1);
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot13 = var1;
    var4 = function rawRgbToHsl(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = 255;
            var4 = var1 / var2;
            var1 = arg2;
            var10 = var1 / var2;
            var1 = arg3;
            var9 = var1 / var2;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var12 = var2.bind(var3)(var4, var10, var9);
            var2 = var1.Math;
            var1 = var2.min;
            var13 = var1.bind(var2)(var4, var10, var9);
            var1 = var12 + var13;
            var11 = 2;
            var2 = var1 / var11;
            var5 = 0;
            var3 = 0;
            if(!(var12 !== var13)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var8 = var12 - var13;
            var1 = 0.5;
            if(!(!(var2 > var1))) { _fun0003_ip = 31; continue _fun0003 }
case 6:
            var1 = var12 + var13;
            var1 = var8 / var1;
            _fun0003_ip = 32; continue _fun0003;
case 31:
            var6 = var11 - var12;
            var6 = var6 - var13;
            var1 = var8 / var6;
case 32:
            if(!(var4 !== var12)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            if(!(var10 !== var12)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var6 = undefined;
            if(!(var9 === var12)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var12 = var4 - var10;
            var13 = var12 / var8;
            var12 = 4;
            var6 = var13 + var12;
            _fun0003_ip = 37; continue _fun0003;
case 35:
            var4 = var9 - var4;
            var4 = var4 / var8;
            var6 = var4 + var11;
            _fun0003_ip = 37; continue _fun0003;
case 33:
            var4 = var10 - var9;
            var8 = var4 / var8;
            var4 = 0;
            if(!(var10 < var9)) { _fun0003_ip = 17; continue _fun0003 }
case 39:
            var4 = 6;
case 17:
            var6 = var8 + var4;
case 37:
            var4 = null;
            var5 = 0;
            var3 = var1;
            if(!(var4 != var6)) { _fun0003_ip = 29; continue _fun0003 }
case 40:
            var4 = 6;
            var5 = var6 / var4;
            var3 = var1;
case 29:
            var1 = {};
            var4 = 360;
            var4 = var4 * var5;
            var1['hue'] = var4;
            var1['saturation'] = var3;
            var1['lightness'] = var2;
            var2 = 1;
            var1['alpha'] = var2;
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = function rawHslToRgb(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg2;
            var2 = arg3;
            var3 = arg1;
            var1 = 360;
            var11 = var3 / var1;
            var1 = 0;
            var4 = var2;
            var3 = var4;
            var7 = var3;
            if(!(var1 !== var5)) { _fun0004_ip = 36; continue _fun0004 }
case 41:
            var10 = function hue2rgb(arg1, arg2, arg3) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var2 = arg2;
                    var4 = arg3;
                    var1 = 0;
                    var5 = var4;
                    if(!(var5 < var1)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                    var1 = 1;
                    var5 = var4 + var1;
case 42:
                    var1 = 1;
                    var4 = var5;
                    if(!(var4 > var1)) { _fun0005_ip = 15; continue _fun0005 }
case 44:
                    var4 = var5 - var1;
case 15:
                    var1 = 0.16666666666666666;
                    if(!(!(var4 < var1))) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var5 = 0.5;
                    var1 = var2;
                    if(!(!(var4 < var5))) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var6 = 0.6666666666666666;
                    var5 = var3;
                    if(!(var4 < var6)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                    var7 = var2 - var3;
                    var6 = var6 - var4;
                    var7 = var7 * var6;
                    var6 = 6;
                    var6 = var7 * var6;
                    var5 = var3 + var6;
case 49:
                    var1 = var5;
case 47:
                    _fun0005_ip = 9; continue _fun0005;
case 45:
                    var5 = var2 - var3;
                    var2 = 6;
                    var2 = var2 * var5;
                    var2 = var2 * var4;
                    var1 = var3 + var2;
case 9:
                    return var1;
                }
            };
            var1 = 0.5;
            if(!(!(var2 < var1))) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var6 = var2 + var5;
            var1 = var2 * var5;
            var9 = var6 - var1;
            _fun0004_ip = 53; continue _fun0004;
case 51:
            var1 = 1;
            var1 = var1 + var5;
            var9 = var2 * var1;
case 53:
            var1 = 2;
            var1 = var1 * var2;
            var8 = var1 - var9;
            var6 = undefined;
            var1 = 0.3333333333333333;
            var2 = var11 + var1;
            var4 = var10.bind(var6)(var8, var9, var2);
            var3 = var10.bind(var6)(var8, var9, var11);
            var1 = var11 - var1;
            var7 = var10.bind(var6)(var8, var9, var1);
case 36:
            var5 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var2);
            var2 = global;
            var8 = var2.Math;
            var5 = var8.round;
            var1 = 255;
            var4 = var1 * var4;
            var5 = var5.bind(var8)(var4);
            var8 = var2.Math;
            var4 = var8.round;
            var3 = var1 * var3;
            var14 = var4.bind(var8)(var3);
            var3 = var2.Math;
            var2 = var3.round;
            var1 = var1 * var7;
            var13 = var2.bind(var3)(var1);
            var1 = var6.prototype;
            var2 = Object.create(var1, {constructor: {value: var6}});
            var12 = 1;
            var16 = var2;
            var15 = var5;
            var1 = new var16[var6](var15, var14, var13, var12, var11);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function sortColors(arg1, arg2) {
        var1 = arg1;
        var1 = var1.hsv;
        var2 = arg2;
        var2 = var2.hsv;
        var3 = var2.s;
        var2 = var2.v;
        var2 = var3 + var2;
        var3 = var1.s;
        var1 = var1.v;
        var1 = var3 + var1;
        var1 = var2 - var1;
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var16 = var1.Object;
    var13 = var16.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var16)(var3, var1, var9);
    var1 = 0;
    var9 = var15[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = {};
    var12 = "function hexWithOpacity_ColorUtilsTsx1(color,value){if(color.length===7){const alpha=value*255|0;return color+alpha.toString(16).padStart(2,'0').toUpperCase();}const hex=color.charAt(0)==='#'?color.slice(1):color;let r;let g;let b;let a;switch(hex.length){case 3:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);r+=r;g+=g;b+=b;a=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+a;case 4:r=hex.charAt(0);g=hex.charAt(1);b=hex.charAt(2);a=hex.charAt(3);r+=r;g+=g;b+=b;a+=a;const alpha4=parseInt(a,16)/255*value;const alpha4Hex=(alpha4*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+r+g+b+alpha4Hex;case 6:const alpha6=(value*255|0).toString(16).padStart(2,'0').toUpperCase();return'#'+hex+alpha6;case 8:const baseColor='#'+hex.slice(0,6);const existingAlpha=parseInt(hex.slice(6),16)/255;const alpha8=(existingAlpha*value*255|0).toString(16).padStart(2,'0').toUpperCase();return baseColor+alpha8;default:throw new Error('Invalid hex color format');}}";
    var9['code'] = var12;
    var _closure1_slot4 = var9;
    var9 = function() {
        var1 = function hexWithOpacity(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var3 = arg2;
                var4 = var2.length;
                var1 = 7;
                if(!(var1 !== var4)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
                var1 = var2.charAt;
                var4 = 0;
                var1 = var1.bind(var2)(var4);
                var7 = '#';
                var6 = var2;
                if(!(var7 === var1)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
                var5 = var2.slice;
                var1 = 1;
                var6 = var5.bind(var2)(var1);
case 56:
                var5 = var6.length;
                var10 = 3;
                if(!(var10 !== var5)) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                var1 = 4;
                if(!(var1 !== var5)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
                var8 = 6;
                if(!(var8 !== var5)) { _fun0006_ip = 62; continue _fun0006 }
case 63:
                var1 = 8;
                if(!(var1 !== var5)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                var1 = global;
                var9 = var1.Error;
                var1 = var9.prototype;
                var5 = Object.create(var1, {constructor: {value: var9}});
                var15 = 'Invalid hex color format';
                var16 = var5;
                var1 = new var16[var9](var15, var14);
                var1 = var1 instanceof Object ? var1 : var5;
                throw var1;
case 64:
                var1 = var6.slice;
                var1 = var1.bind(var6)(var4, var8);
                var5 = var7 + var1;
                var1 = global;
                var11 = var1.parseInt;
                var1 = var6.slice;
                var8 = var1.bind(var6)(var8);
                var1 = undefined;
                var9 = 16;
                var1 = var11.bind(var1)(var8, var9);
                var8 = 255;
                var1 = var1 / var8;
                var1 = var1 * var3;
                var1 = var1 * var8;
                var8 = var1 | 0;
                var1 = var8.toString;
                var11 = var1.bind(var8)(var9);
                var9 = var11.padStart;
                var8 = 2;
                var1 = '0';
                var8 = var9.bind(var11)(var8, var1);
                var1 = var8.toUpperCase;
                var1 = var1.bind(var8)();
                var1 = var5 + var1;
                return var1;
case 62:
                var5 = var7 + var6;
                var1 = 255;
                var1 = var1 * var3;
                var9 = var1 | 0;
                var8 = var9.toString;
                var1 = 16;
                var11 = var8.bind(var9)(var1);
                var9 = var11.padStart;
                var8 = 2;
                var1 = '0';
                var8 = var9.bind(var11)(var8, var1);
                var1 = var8.toUpperCase;
                var1 = var1.bind(var8)();
                var1 = var5 + var1;
                return var1;
case 60:
                var1 = var6.charAt;
                var1 = var1.bind(var6)(var4);
                var8 = var6.charAt;
                var5 = 1;
                var8 = var8.bind(var6)(var5);
                var5 = var6.charAt;
                var12 = 2;
                var5 = var5.bind(var6)(var12);
                var9 = var6.charAt;
                var9 = var9.bind(var6)(var10);
                var13 = var9 + var9;
                var1 = var1 + var1;
                var9 = var8 + var8;
                var8 = var5 + var5;
                var5 = global;
                var10 = var5.parseInt;
                var5 = undefined;
                var11 = 16;
                var5 = var10.bind(var5)(var13, var11);
                var10 = 255;
                var5 = var5 / var10;
                var5 = var5 * var3;
                var5 = var10 * var5;
                var10 = var5 | 0;
                var5 = var10.toString;
                var11 = var5.bind(var10)(var11);
                var10 = var11.padStart;
                var5 = '0';
                var10 = var10.bind(var11)(var12, var5);
                var5 = var10.toUpperCase;
                var5 = var5.bind(var10)();
                var1 = var7 + var1;
                var1 = var1 + var9;
                var1 = var1 + var8;
                var1 = var1 + var5;
                return var1;
case 58:
                var1 = var6.charAt;
                var1 = var1.bind(var6)(var4);
                var5 = var6.charAt;
                var4 = 1;
                var5 = var5.bind(var6)(var4);
                var4 = var6.charAt;
                var10 = 2;
                var4 = var4.bind(var6)(var10);
                var1 = var1 + var1;
                var6 = var5 + var5;
                var5 = var4 + var4;
                var4 = 255;
                var4 = var4 * var3;
                var9 = var4 | 0;
                var8 = var9.toString;
                var4 = 16;
                var9 = var8.bind(var9)(var4);
                var8 = var9.padStart;
                var4 = '0';
                var8 = var8.bind(var9)(var10, var4);
                var4 = var8.toUpperCase;
                var4 = var4.bind(var8)();
                var1 = var7 + var1;
                var1 = var1 + var6;
                var1 = var1 + var5;
                var1 = var1 + var4;
                return var1;
case 54:
                var1 = 255;
                var1 = var1 * var3;
                var4 = var1 | 0;
                var3 = var4.toString;
                var1 = 16;
                var5 = var3.bind(var4)(var1);
                var4 = var5.padStart;
                var3 = 2;
                var1 = '0';
                var3 = var4.bind(var5)(var3, var1);
                var1 = var3.toUpperCase;
                var1 = var1.bind(var3)();
                var1 = var2 + var1;
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 1677228068105.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot4;
        var1['__initData'] = var2;
        return var1;
    };
    var12 = var9.bind(var1)();
    var9 = {};
    var13 = 'function hexToRgbaString_ColorUtilsTsx2(hex,opacity){const{hexToRgba}=this.__closure;const{r:r,g:g,b:b,a:a}=hexToRgba(hex);return"rgba("+r+", "+g+", "+b+", "+(opacity!==null&&opacity!==void 0?opacity:a)+")";}';
    var9['code'] = var13;
    var _closure1_slot5 = var9;
    var9 = function() {
        var1 = function hexToRgbaString(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg2;
                var4 = _closure1_slot8;
                var3 = undefined;
                var2 = arg1;
                var2 = var4.bind(var3)(var2);
                var8 = var2.r;
                var7 = var2.g;
                var6 = var2.b;
                var5 = var2.a;
                var2 = null;
                if(!(var2 != var1)) { _fun0007_ip = 66; continue _fun0007 }
case 67:
                var5 = var1;
case 66:
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var17 = 'rgba(';
                var2 = ', ';
                var9 = ')';
                var16 = var8;
                var15 = var2;
                var14 = var7;
                var13 = var2;
                var12 = var6;
                var11 = var2;
                var10 = var5;
                var1 = var17[var4](var16, var15, var14, var13, var12, var11, var10, var9, var8);
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot8;
        var3['hexToRgba'] = var4;
        var1['__closure'] = var3;
        var3 = 8956046161224.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot5;
        var1['__initData'] = var2;
        return var1;
    };
    var9 = var9.bind(var1)();
    var13 = {};
    var16 = {};
    var17 = function #1abc9c() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.fBawRk;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#1abc9c'] = var17;
    var17 = function #2ecc71() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.hvv3QU;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#2ecc71'] = var17;
    var17 = function #3498db() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.JwX6JS;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#3498db'] = var17;
    var17 = function #9b59b6() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.H3xljo;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#9b59b6'] = var17;
    var17 = function #e91e63() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.X9izyc;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#e91e63'] = var17;
    var17 = function #11806a() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Kw7K29;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#11806a'] = var17;
    var17 = function #1f8b4c() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.z5AZKS;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#1f8b4c'] = var17;
    var17 = function #206694() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.JqBqKy;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#206694'] = var17;
    var17 = function #71368a() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.edPgnJ;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#71368a'] = var17;
    var17 = function #ad1457() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.ti7gsb;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#ad1457'] = var17;
    var17 = function #f1c40f() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.H9jz+f;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#f1c40f'] = var17;
    var17 = function #e67e22() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.UmsfHB;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#e67e22'] = var17;
    var17 = function #e74c3c() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.GoDlAA;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#e74c3c'] = var17;
    var17 = function #95a5a6() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.9GpDYG;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#95a5a6'] = var17;
    var17 = function #607d8b() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.lwrNQE;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#607d8b'] = var17;
    var17 = function #c27c0e() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Lf10GB;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#c27c0e'] = var17;
    var17 = function #a84300() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.H+AjY2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#a84300'] = var17;
    var17 = function #992d22() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.XTkde3;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#992d22'] = var17;
    var17 = function #979c9f() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Ve0Lio;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#979c9f'] = var17;
    var17 = function #546e7a() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.BwbOAA;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#546e7a'] = var17;
    var17 = function #99aab5() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1./po5rK;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16['#99aab5'] = var17;
    var20 = var13;
    var19 = var16;
    var16 = copyDataProperties(var20, var19);
    var17 = function #5865f2() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 2;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.Cn/LJy;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var16 = '#5865f2';
    var13[var16] = var17;
    var _closure1_slot6 = var13;
    var13 = 5;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'utils/ColorUtils.tsx';
    var13 = var14.bind(var15)(var13);
    var3['hexWithOpacity'] = var12;
    var3['hexToRgb'] = var11;
    var11 = function hexToRgbArray(arg1) {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var3 = var2.r;
        var1 = new Array(3);
        var1[0] = var3;
        var3 = var2.g;
        var1[1] = var3;
        var2 = var2.b;
        var1[2] = var2;
        return var1;
    };
    var3['hexToRgbArray'] = var11;
    var3['hexToRgba'] = var10;
    var3['hexToRgbaString'] = var9;
    var9 = function hexOpacityToRgba(arg1, arg2) {
        var3 = _closure1_slot7;
        var2 = undefined;
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        var16 = var1.r;
        var14 = var1.g;
        var12 = var1.b;
        var1 = global;
        var1 = var1.HermesInternal;
        var5 = var1.concat;
        var17 = 'rgba(';
        var3 = ', ';
        var10 = arg2;
        var9 = ')';
        var15 = var3;
        var13 = var3;
        var11 = var3;
        var1 = var17[var5](var16, var15, var14, var13, var12, var11, var10, var9, var8);
        return var1;
    };
    var3['hexOpacityToRgba'] = var9;
    var3['rgbToHslObject'] = var8;
    var3['hslToString'] = var7;
    var7 = function rgbToHsl(arg1, arg2, arg3) {
        var6 = _closure1_slot9;
        var5 = undefined;
        var4 = arg1;
        var3 = arg2;
        var1 = arg3;
        var1 = var6.bind(var5)(var4, var3, var1);
        var4 = _closure1_slot10;
        var3 = var1.h;
        var2 = var1.s;
        var1 = var1.l;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var3['rgbToHsl'] = var7;
    var7 = function rgbToHex(arg1, arg2, arg3) {
        var1 = arg1;
        var3 = 16;
        var4 = var1 << var3;
        var2 = arg2;
        var1 = 8;
        var2 = var2 << var1;
        var1 = 16777216;
        var1 = var1 + var4;
        var2 = var1 + var2;
        var1 = arg3;
        var2 = var2 + var1;
        var1 = var2.toString;
        var3 = var1.bind(var2)(var3);
        var2 = var3.slice;
        var1 = 1;
        var2 = var2.bind(var3)(var1);
        var1 = '#';
        var1 = var1 + var2;
        return var1;
    };
    var3['rgbToHex'] = var7;
    var7 = function rgbaToHex(arg1, arg2, arg3, arg4) {
        var3 = 256;
        var1 = arg1;
        var2 = var3 + var1;
        var1 = var2.toString;
        var5 = 16;
        var2 = var1.bind(var2)(var5);
        var1 = var2.slice;
        var4 = 1;
        var2 = var1.bind(var2)(var4);
        var1 = '#';
        var2 = var1 + var2;
        var1 = arg2;
        var6 = var3 + var1;
        var1 = var6.toString;
        var6 = var1.bind(var6)(var5);
        var1 = var6.slice;
        var1 = var1.bind(var6)(var4);
        var2 = var2 + var1;
        var1 = arg3;
        var6 = var3 + var1;
        var1 = var6.toString;
        var6 = var1.bind(var6)(var5);
        var1 = var6.slice;
        var1 = var1.bind(var6)(var4);
        var2 = var2 + var1;
        var1 = arg4;
        var3 = var3 + var1;
        var1 = var3.toString;
        var3 = var1.bind(var3)(var5);
        var1 = var3.slice;
        var1 = var1.bind(var3)(var4);
        var1 = var2 + var1;
        return var1;
    };
    var3['rgbaToHex'] = var7;
    var3['hslToHex'] = var6;
    var6 = function hexToColorName(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot6;
            var2 = var1[var7];
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var1 = undefined;
            var1 = var2.bind(var1)();
            _fun0008_ip = 40; continue _fun0008;
case 68:
            var2 = arg2;
            if(var2) { _fun0008_ip = 36; continue _fun0008 }
case 70:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var11 = 'ColorUtils';
            var12 = var4;
            var2 = new var12[var5](var11, var10);
            var5 = var2 instanceof Object ? var2 : var4;
            var4 = var5.warn;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var6 = 'Role color ';
            var2 = ' has not been localized!';
            var2 = var8.bind(var6)(var7, var2);
            var2 = var4.bind(var5)(var2);
            var2 = 'undefined';
            _fun0008_ip = 71; continue _fun0008;
case 36:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 2;
            var5 = var9[var3];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var9[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.7BFCRU;
            var3 = {};
            var3['color'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 71:
            var1 = var2;
case 40:
            return var1;
        }
    };
    var3['hexToColorName'] = var6;
    var6 = function mixColors(arg1, arg2) {
        var1 = arg1;
        var3 = arg2;
        var8 = var1.alpha;
        var7 = 1;
        var4 = var7 - var8;
        var2 = var3.red;
        var4 = var4 * var2;
        var2 = var1.red;
        var2 = var8 * var2;
        var6 = var4 + var2;
        var4 = var7 - var8;
        var2 = var3.green;
        var4 = var4 * var2;
        var2 = var1.green;
        var2 = var8 * var2;
        var11 = var4 + var2;
        var4 = var7 - var8;
        var2 = var3.blue;
        var4 = var4 * var2;
        var2 = var1.blue;
        var2 = var8 * var2;
        var10 = var4 + var2;
        var2 = var1.alpha;
        var3 = var3.alpha;
        var1 = var1.alpha;
        var1 = var7 - var1;
        var1 = var3 * var1;
        var9 = var2 + var1;
        var7 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var7.bind(var1)(var2);
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var13 = var2;
        var12 = var6;
        var1 = new var13[var1](var12, var11, var10, var9, var8);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['mixColors'] = var6;
    var3['hex2rgb2hsv'] = var5;
    var5 = function getComplimentaryPaletteForColor(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var11 = arguments[1];
            var10 = undefined;
            if(!(var11 === var10)) { _fun0009_ip = 72; continue _fun0009 }
case 73:
            var11 = 3;
case 72:
            var1 = new Array(0);
            var5 = _closure1_slot9;
            var8 = 0;
            var4 = var6[var8];
            var7 = 1;
            var3 = var6[var7];
            var2 = 2;
            var2 = var6[var2];
            var2 = var5.bind(var10)(var4, var3, var2);
            var6 = var2.h;
            var3 = var2.s;
            var4 = var2.l;
            var2 = 30;
            var5 = var3;
            if(!(var5 < var2)) { _fun0009_ip = 74; continue _fun0009 }
case 75:
            var5 = var3 + var2;
case 74:
            var2 = 80;
            var3 = var4;
            if(!(var3 > var2)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var2 = 40;
            var3 = var4 - var2;
case 76:
            var2 = 20;
            var4 = var3;
            if(!(var4 < var2)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var2 = 15;
            var4 = var3 + var2;
case 78:
            var2 = var1.length;
            var3 = 360;
            if(!(var2 < var11)) { _fun0009_ip = 23; continue _fun0009 }
case 80:
            var2 = var11 + var7;
            var2 = var3 / var2;
            var2 = var6 - var2;
            var12 = var2;
            if(!(var12 < var8)) { _fun0009_ip = 81; continue _fun0009 }
case 82:
            var12 = var2 + var3;
case 81:
            var2 = _closure1_slot13;
            var2 = var2.bind(var10)(var12, var5, var4);
            var16 = var2.r;
            var15 = var2.g;
            var14 = var2.b;
            var13 = var1.push;
            var2 = new Array(3);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var14;
            var2 = var13.bind(var1)(var2);
            var2 = var1.length;
            var6 = var12;
            if(var2 < var11) { _fun0009_ip = 80; continue _fun0009 }
case 23:
            return var1;
        }
    };
    var3['getComplimentaryPaletteForColor'] = var5;
    var3['rawRgbToHsl'] = var4;
    var4 = function getColorLightnessAdjusted(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var7 = arg2;
            var3 = arguments[2];
            var5 = undefined;
            if(!(var3 === var5)) { _fun0010_ip = 83; continue _fun0010 }
case 72:
            var3 = false;
case 83:
            var8 = _closure1_slot14;
            var6 = var1.red;
            var4 = var1.green;
            var1 = var1.blue;
            var1 = var8.bind(var5)(var6, var4, var1);
            var4 = var1.lightness;
            if(var3) { _fun0010_ip = 84; continue _fun0010 }
case 56:
            var8 = var4 - var7;
            var3 = 0.1;
            var6 = 0;
            if(!(!(var8 < var6))) { _fun0010_ip = 85; continue _fun0010 }
case 75:
            var6 = var1.lightness;
            var3 = var6 - var7;
case 85:
            _fun0010_ip = 32; continue _fun0010;
case 84:
            var8 = var4 + var7;
            var4 = 0.9;
            var6 = 1;
            if(!(!(var8 > var6))) { _fun0010_ip = 86; continue _fun0010 }
case 87:
            var6 = var1.lightness;
            var4 = var6 + var7;
case 86:
            var3 = var4;
case 32:
            var1['lightness'] = var3;
            var4 = _closure1_slot15;
            var3 = var1.hue;
            var2 = var1.saturation;
            var1 = var1.lightness;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var3['getColorLightnessAdjusted'] = var4;
    var4 = function getAccessibleForegroundColor(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = var1.foreground;
            var8 = var1.background;
            var14 = var1.ratio;
            var13 = undefined;
            if(!(var14 === var13)) { _fun0011_ip = 88; continue _fun0011 }
case 89:
            var14 = 5;
case 88:
            var9 = var1.saturationFactor;
            if(!(var9 === var13)) { _fun0011_ip = 90; continue _fun0011 }
case 91:
            var9 = 1;
case 90:
            var3 = 1;
            var2 = var6;
            var4 = var8;
            if(!(var9 < var3)) { _fun0011_ip = 31; continue _fun0011 }
case 92:
            var5 = var6.set;
            var1 = var6.get;
            var7 = 'hsl.s';
            var1 = var1.bind(var6)(var7);
            var1 = var1 * var9;
            var2 = var5.bind(var6)(var7, var1);
            var6 = var8.set;
            var1 = var8.get;
            var1 = var1.bind(var8)(var7);
            var1 = var1 * var9;
            var4 = var6.bind(var8)(var7, var1);
case 31:
            var1 = var4.luminance;
            var5 = var1.bind(var4)();
            var1 = 0.5;
            var12 = var5 <= var1;
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var5 = var5.bind(var13)(var1);
            var1 = var5.contrast;
            var1 = var1.bind(var5)(var2, var4);
            var1 = var1 < var14;
            var9 = 10;
            var8 = 0.05;
            var7 = 'hsl.l';
            var6 = 0.95;
            var5 = var4;
            var4 = var2;
            var10 = 0;
            var2 = var4;
            if(!var1) { _fun0011_ip = 93; continue _fun0011 }
case 94:
            var1 = var4.get;
            var1 = var1.bind(var4)(var7);
            var17 = var4;
            if(var12) { _fun0011_ip = 95; continue _fun0011 }
case 96:
            var2 = var17;
            if(!(var1 > var8)) { _fun0011_ip = 93; continue _fun0011 }
case 97:
            var16 = var17.set;
            var15 = var1 - var8;
            var15 = var16.bind(var17)(var7, var15);
            _fun0011_ip = 28; continue _fun0011;
case 95:
            var2 = var17;
            if(!(var1 < var6)) { _fun0011_ip = 93; continue _fun0011 }
case 98:
            var16 = var17.set;
            var1 = var1 + var8;
            var15 = var16.bind(var17)(var7, var1);
case 28:
            var16 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var16 = var16.bind(var13)(var1);
            var1 = var16.contrast;
            var1 = var1.bind(var16)(var15, var5);
            var10 = var10 + 1;
            var2 = var15;
            if(!(var10 < var9)) { _fun0011_ip = 93; continue _fun0011 }
case 99:
            var4 = var15;
            var2 = var4;
            if(var1 < var14) { _fun0011_ip = 94; continue _fun0011 }
case 93:
            var1 = var2.alpha;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var3['getAccessibleForegroundColor'] = var4;
    var4 = function findColorByHsv(arg1) {
        var4 = arg1;
        var3 = var4.slice;
        var2 = 0;
        var1 = 3;
        var4 = var3.bind(var4)(var2, var1);
        var3 = var4.map;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var1 = {};
                var1['hex'] = var4;
                var3 = _closure1_slot12;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var3 = null;
                if(!(var3 == var2)) { _fun0012_ip = 90; continue _fun0012 }
case 100:
                var2 = {'h': 0, 's': 0, 'v': 0};
case 90:
                var1['hsv'] = var2;
                return var1;
            }
        };
        var4 = var3.bind(var4)(var1);
        var3 = var4.sort;
        var1 = _closure1_slot16;
        var1 = var3.bind(var4)(var1);
        var1 = var1[var2];
        var1 = var1.hex;
        return var1;
    };
    var3['findColorByHsv'] = var4;
    var4 = function getSaturatedColorHex(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var1 = var2.colorRGB;
            var8 = var2.saturationFactor;
            var3 = undefined;
            if(!(var8 === var3)) { _fun0013_ip = 101; continue _fun0013 }
case 55:
            var8 = 1;
case 101:
            var4 = null;
            if(!(var4 != var1)) { _fun0013_ip = 102; continue _fun0013 }
case 103:
            var9 = _closure1_slot14;
            var6 = var1.get;
            var2 = 'rgb.r';
            var7 = var6.bind(var1)(var2);
            var6 = var1.get;
            var2 = 'rgb.g';
            var6 = var6.bind(var1)(var2);
            var10 = var1.get;
            var2 = 'rgb.b';
            var2 = var10.bind(var1)(var2);
            var2 = var9.bind(var3)(var7, var6, var2);
            if(!(var4 != var2)) { _fun0013_ip = 104; continue _fun0013 }
case 76:
            var7 = _closure1_slot15;
            var6 = var2.hue;
            var5 = var2.saturation;
            var5 = var5 * var8;
            var2 = var2.lightness;
            var6 = var7.bind(var3)(var6, var5, var2);
            var5 = var4 == var6;
            var2 = undefined;
            if(var5) { _fun0013_ip = 105; continue _fun0013 }
case 106:
            var5 = var6.toHexString;
            var2 = var5.bind(var6)();
case 105:
            _fun0013_ip = 107; continue _fun0013;
case 104:
            var4 = var4 == var1;
            var3 = undefined;
            if(var4) { _fun0013_ip = 108; continue _fun0013 }
case 109:
            var4 = var1.hex;
            var3 = var4.bind(var1)();
case 108:
            var2 = var3;
case 107:
            return var2;
case 102:
            return var1;
        }
    };
    var3['getSaturatedColorHex'] = var4;
    var2 = function interpolateColor(arg1, arg2, arg3) {
        var10 = arg1;
        var14 = arg2;
        var11 = arg3;
        var1 = global;
        var3 = var1.parseInt;
        var2 = var10.substring;
        var4 = 1;
        var5 = 3;
        var2 = var2.bind(var10)(var4, var5);
        var6 = undefined;
        var8 = 16;
        var7 = var3.bind(var6)(var2, var8);
        var3 = var1.parseInt;
        var2 = var10.substring;
        var13 = 5;
        var2 = var2.bind(var10)(var5, var13);
        var12 = var3.bind(var6)(var2, var8);
        var3 = var1.parseInt;
        var2 = var10.substring;
        var9 = 7;
        var2 = var2.bind(var10)(var13, var9);
        var10 = var3.bind(var6)(var2, var8);
        var3 = var1.parseInt;
        var2 = var14.substring;
        var2 = var2.bind(var14)(var4, var5);
        var4 = var3.bind(var6)(var2, var8);
        var3 = var1.parseInt;
        var2 = var14.substring;
        var2 = var2.bind(var14)(var5, var13);
        var3 = var3.bind(var6)(var2, var8);
        var5 = var1.parseInt;
        var2 = var14.substring;
        var2 = var2.bind(var14)(var13, var9);
        var2 = var5.bind(var6)(var2, var8);
        var6 = var1.Math;
        var5 = var6.round;
        var4 = var4 - var7;
        var4 = var4 * var11;
        var4 = var7 + var4;
        var5 = var5.bind(var6)(var4);
        var4 = var5.toString;
        var5 = var4.bind(var5)(var8);
        var4 = var5.padStart;
        var7 = 2;
        var6 = '0';
        var5 = var4.bind(var5)(var7, var6);
        var9 = var1.Math;
        var4 = var9.round;
        var3 = var3 - var12;
        var3 = var3 * var11;
        var3 = var12 + var3;
        var4 = var4.bind(var9)(var3);
        var3 = var4.toString;
        var4 = var3.bind(var4)(var8);
        var3 = var4.padStart;
        var4 = var3.bind(var4)(var7, var6);
        var9 = var1.Math;
        var3 = var9.round;
        var2 = var2 - var10;
        var2 = var2 * var11;
        var2 = var10 + var2;
        var3 = var3.bind(var9)(var2);
        var2 = var3.toString;
        var3 = var2.bind(var3)(var8);
        var2 = var3.padStart;
        var3 = var2.bind(var3)(var7, var6);
        var1 = var1.HermesInternal;
        var2 = var1.concat;
        var1 = '#';
        var1 = var2.bind(var1)(var5, var4, var3);
        return var1;
    };
    var3['interpolateColor'] = var2;
    return var1;
})();
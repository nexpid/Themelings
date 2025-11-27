// app/utils/Color.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var2 = function hslToRgb(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = var2.hue;
            var5 = var2.saturation;
            var4 = var2.lightness;
            var2 = var2.alpha;
            var3 = 255;
            var8 = var5 / var3;
            var10 = var4 / var3;
            var3 = global;
            var11 = var3.Math;
            var9 = var11.abs;
            var4 = 2;
            var7 = var4 * var10;
            var5 = 1;
            var7 = var7 - var5;
            var7 = var9.bind(var11)(var7);
            var7 = var5 - var7;
            var8 = var7 * var8;
            var11 = var3.Math;
            var9 = var11.abs;
            var3 = 60;
            var7 = var6 / var3;
            var7 = var7 % var4;
            var7 = var7 - var5;
            var7 = var9.bind(var11)(var7);
            var7 = var5 - var7;
            var7 = var8 * var7;
            var9 = var8 / var4;
            var9 = var10 - var9;
            var _closure2_slot0 = var9;
            if(!(!(var6 < var3))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 120;
            if(!(!(var6 < var3))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 180;
            if(!(!(var6 < var3))) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 240;
            if(!(!(var6 < var3))) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = 300;
            if(!(!(var6 < var3))) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = new Array(3);
            var6[0] = var8;
            var3 = 0;
            var6[1] = var3;
            var6[2] = var7;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var3 = new Array(3);
            var3[0] = var7;
            var9 = 0;
            var3[1] = var9;
            var3[2] = var8;
            var6 = var3;
case 12:
            _fun0001_ip = 13; continue _fun0001;
case 8:
            var3 = [0];
            var3[1] = var7;
            var3[2] = var8;
            var6 = var3;
case 13:
            _fun0001_ip = 14; continue _fun0001;
case 6:
            var3 = [0];
            var3[1] = var8;
            var3[2] = var7;
            var6 = var3;
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 4:
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var8;
            var9 = 0;
            var3[2] = var9;
            var6 = var3;
case 15:
            _fun0001_ip = 16; continue _fun0001;
case 2:
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var7 = 0;
            var3[2] = var7;
            var6 = var3;
case 16:
            var3 = var6.map;
            var1 = function(arg1) {
                var1 = global;
                var3 = var1.Math;
                var2 = var3.round;
                var4 = _closure2_slot0;
                var1 = arg1;
                var4 = var1 + var4;
                var1 = 255;
                var1 = var1 * var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var3.bind(var6)(var1);
            var1 = {};
            var6 = 0;
            var6 = var3[var6];
            var1['red'] = var6;
            var5 = var3[var5];
            var1['green'] = var5;
            var3 = var3[var4];
            var1['blue'] = var3;
            var1['alpha'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var6[var1];
    var1 = undefined;
    var5 = var7.bind(var1)(var5);
    var _closure1_slot0 = var5;
    var5 = 1;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot1 = var5;
    var5 = 2;
    var5 = var6[var5];
    var5 = var7.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = /^#[0-9a-f]{3,8}$/i;
    var _closure1_slot3 = var5;
    var5 = /^((?:rgb|hsl)a?)\s*\(([^)]*)\)/i;
    var _closure1_slot4 = var5;
    var4 = function() {
        var5 = function Color(arg1, arg2, arg3, arg4) {
            var3 = this;
            var4 = _closure1_slot1;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['red'] = var2;
            var2 = arg2;
            var3['green'] = var2;
            var2 = arg3;
            var3['blue'] = var2;
            var2 = arg4;
            var3['alpha'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var1 = {};
        var2 = 'toHexString';
        var1['key'] = var2;
        var2 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = this;
                var2 = global;
                var5 = var2.Math;
                var4 = var5.round;
                var3 = var1.red;
                var5 = var4.bind(var5)(var3);
                var3 = var5.toString;
                var4 = 16;
                var6 = var3.bind(var5)(var4);
                var7 = var2.Math;
                var5 = var7.round;
                var3 = var1.green;
                var5 = var5.bind(var7)(var3);
                var3 = var5.toString;
                var7 = var3.bind(var5)(var4);
                var5 = var2.Math;
                var3 = var5.round;
                var2 = var1.blue;
                var3 = var3.bind(var5)(var2);
                var2 = var3.toString;
                var4 = var2.bind(var3)(var4);
                var2 = var1.red;
                var5 = 15.5;
                var3 = var6;
                if(!(!(var2 > var5))) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var2 = '0';
                var3 = var2 + var6;
case 17:
                var2 = '#';
                var3 = var2 + var3;
                var6 = var1.green;
                var2 = var7;
                if(!(!(var6 > var5))) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var6 = '0';
                var2 = var6 + var7;
case 19:
                var2 = var3 + var2;
                var3 = var1.blue;
                var1 = var4;
                if(!(!(var3 > var5))) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var3 = '0';
                var1 = var3 + var4;
case 21:
                var1 = var2 + var1;
                return var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(3);
        var3[0] = var1;
        var1 = {};
        var2 = 'toHSL';
        var1['key'] = var2;
        var2 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = this;
                var1 = {};
                var3 = var2.red;
                var1['red'] = var3;
                var3 = var2.green;
                var1['green'] = var3;
                var3 = var2.blue;
                var1['blue'] = var3;
                var2 = var2.alpha;
                var1['alpha'] = var2;
                var5 = var1.red;
                var4 = var1.green;
                var2 = var1.blue;
                var3 = var1.alpha;
                var1 = 255;
                var9 = var5 / var1;
                var8 = var4 / var1;
                var1 = var2 / var1;
                var7 = global;
                var4 = var7.Math;
                var2 = var4.max;
                var11 = var2.bind(var4)(var9, var8, var1);
                var4 = var7.Math;
                var2 = var4.min;
                var4 = var2.bind(var4)(var9, var8, var1);
                var2 = var11 - var4;
                var4 = var11 + var4;
                var10 = 2;
                var4 = var4 / var10;
                var6 = 0;
                var5 = 0;
                if(!(var2 > var6)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                var14 = var7.Math;
                var13 = var14.abs;
                var7 = var10 * var4;
                var12 = 1;
                var7 = var7 - var12;
                var7 = var13.bind(var14)(var7);
                var7 = var12 - var7;
                var5 = var2 / var7;
case 22:
                if(!(var6 !== var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                if(!(var9 !== var11)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                if(!(var8 !== var11)) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                var7 = 0;
                if(!(var1 === var11)) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                var11 = var8 - var1;
                var12 = var11 / var2;
                var11 = 4;
                var7 = var12 + var11;
                _fun0003_ip = 30; continue _fun0003;
case 28:
                var9 = var1 - var9;
                var9 = var9 / var2;
                var7 = var9 + var10;
                _fun0003_ip = 30; continue _fun0003;
case 26:
                var1 = var8 - var1;
                var2 = var1 / var2;
                var1 = 6;
                var7 = var2 % var1;
case 30:
                var1 = {};
                var2 = 60;
                var2 = var2 * var7;
                var1['hue'] = var2;
                var1['saturation'] = var5;
                var1['lightness'] = var4;
                var1['alpha'] = var3;
                _fun0003_ip = 32; continue _fun0003;
case 24:
                var2 = {};
                var2['hue'] = var6;
                var2['saturation'] = var5;
                var2['lightness'] = var4;
                var2['alpha'] = var3;
                var1 = var2;
case 32:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var1 = {};
        var2 = 'getRelativeLuminance';
        var1['key'] = var2;
        var2 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = this;
                var3 = var1.red;
                var2 = 255;
                var4 = var3 / var2;
                var3 = var1.green;
                var6 = var3 / var2;
                var1 = var1.blue;
                var5 = var1 / var2;
                var2 = 0.03928;
                if(!(!(var4 <= var2))) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var1 = global;
                var8 = var1.Math;
                var7 = var8.pow;
                var1 = 0.055;
                var3 = var4 + var1;
                var1 = 1.055;
                var3 = var3 / var1;
                var1 = 2.4;
                var3 = var7.bind(var8)(var3, var1);
                _fun0004_ip = 35; continue _fun0004;
case 33:
                var1 = 12.92;
                var3 = var4 / var1;
case 35:
                var1 = 0.2126;
                var3 = var1 * var3;
                if(!(!(var6 <= var2))) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                var1 = global;
                var8 = var1.Math;
                var7 = var8.pow;
                var1 = 0.055;
                var4 = var6 + var1;
                var1 = 1.055;
                var4 = var4 / var1;
                var1 = 2.4;
                var4 = var7.bind(var8)(var4, var1);
                _fun0004_ip = 38; continue _fun0004;
case 36:
                var1 = 12.92;
                var4 = var6 / var1;
case 38:
                var1 = 0.7152;
                var1 = var1 * var4;
                if(!(!(var5 <= var2))) { _fun0004_ip = 39; continue _fun0004 }
case 26:
                var2 = global;
                var7 = var2.Math;
                var6 = var7.pow;
                var2 = 0.055;
                var4 = var5 + var2;
                var2 = 1.055;
                var4 = var4 / var2;
                var2 = 2.4;
                var4 = var6.bind(var7)(var4, var2);
                _fun0004_ip = 40; continue _fun0004;
case 39:
                var2 = 12.92;
                var4 = var5 / var2;
case 40:
                var2 = 0.0722;
                var2 = var2 * var4;
                var1 = var3 + var1;
                var1 = var1 + var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var1 = {};
        var2 = 'parseString';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var3 = this;
                var5 = var4.match;
                var2 = _closure1_slot4;
                var5 = var5.bind(var4)(var2);
                var2 = null;
                if(!(var2 == var5)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var5 = var4.match;
                var1 = _closure1_slot3;
                var1 = var5.bind(var4)(var1);
                var2 = var2 != var1;
                var1 = undefined;
                if(!var2) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var2 = var3.parseHexString;
                var1 = var2.bind(var3)(var4);
case 43:
                _fun0005_ip = 45; continue _fun0005;
case 41:
                var2 = var3.parseColorFnString;
                var1 = var2.bind(var3)(var4);
case 45:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = {};
        var7 = 'parseRgbString';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = 'transparent';
                if(!(var1 !== var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var1 = var2.parseColorFnString;
                var1 = var1.bind(var2)(var3);
                _fun0006_ip = 48; continue _fun0006;
case 46:
                var4 = _closure2_slot0;
                var2 = var4.prototype;
                var3 = Object.create(var2, {constructor: {value: var4}});
                var9 = var3;
                var8 = 0;
                var7 = 0;
                var6 = 0;
                var5 = 0;
                var2 = new var9[var4](var8, var7, var6, var5, var4);
                var1 = var2 instanceof Object ? var2 : var3;
case 48:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'parseHexString';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var3 = var5.match;
                var2 = _closure1_slot3;
                var2 = var3.bind(var5)(var2);
                var12 = null;
                if(!(var12 != var2)) { _fun0007_ip = 49; continue _fun0007 }
case 42:
                var4 = [6, 8];
                var3 = var4.includes;
                var2 = var5.length;
                var2 = var3.bind(var4)(var2);
                if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var4 = var5.replace;
                var3 = '#';
                var2 = '';
                var5 = var4.bind(var5)(var3, var2);
                var4 = var5.length;
                var2 = 6;
                var3 = var5;
                if(!(var4 < var2)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var4 = _closure1_slot0;
                var2 = undefined;
                var1 = 4;
                var6 = var4.bind(var2)(var5, var1);
                var1 = 0;
                var2 = var6[var1];
                var1 = 1;
                var5 = var6[var1];
                var1 = 2;
                var4 = var6[var1];
                var1 = 3;
                var1 = var6[var1];
                var2 = var2 + var2;
                var2 = var2 + var5;
                var2 = var2 + var5;
                var2 = var2 + var4;
                var2 = var2 + var4;
                var3 = var2;
                if(!(var12 != var1)) { _fun0007_ip = 51; continue _fun0007 }
case 53:
                var1 = var1 + var1;
                var3 = var2 + var1;
case 51:
                var2 = var3.match;
                var1 = /.{1,2}/g;
                var10 = var2.bind(var3)(var1);
                if(!(var12 != var10)) { _fun0007_ip = 49; continue _fun0007 }
case 54:
                var6 = _closure2_slot0;
                var7 = global;
                var2 = var7.parseInt;
                var1 = 0;
                var1 = var10[var1];
                var9 = undefined;
                var8 = 16;
                var5 = var2.bind(var9)(var1, var8);
                var2 = var7.parseInt;
                var4 = 1;
                var1 = var10[var4];
                var3 = var2.bind(var9)(var1, var8);
                var2 = var7.parseInt;
                var1 = 2;
                var1 = var10[var1];
                var1 = var2.bind(var9)(var1, var8);
                var2 = 3;
                var11 = var10[var2];
                var11 = var12 != var11;
                if(!var11) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                var7 = var7.parseInt;
                var2 = var10[var2];
                var7 = var7.bind(var9)(var2, var8);
                var2 = 255;
                var4 = var7 / var2;
case 55:
                var2 = var6.prototype;
                var2 = Object.create(var2, {constructor: {value: var6}});
                var17 = var2;
                var16 = var5;
                var15 = var3;
                var14 = var1;
                var13 = var4;
                var1 = new var17[var6](var16, var15, var14, var13, var12);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var7;
        var2[2] = var1;
        var1 = {};
        var7 = 'parseColorFnString';
        var1['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var4 = var5.match;
                var3 = _closure1_slot4;
                var7 = var4.bind(var5)(var3);
                var4 = null;
                if(!(var4 == var7)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                var7 = new Array(0);
case 57:
                var6 = _closure1_slot0;
                var3 = undefined;
                var5 = 3;
                var8 = var6.bind(var3)(var7, var5);
                var7 = 1;
                var9 = var8[var7];
                var _closure3_slot0 = var9;
                var6 = 2;
                var10 = var8[var6];
                if(!(var4 != var9)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                if(!(var4 == var10)) { _fun0008_ip = 61; continue _fun0008 }
case 59:
                return var3;
case 61:
                var8 = var10.split;
                var4 = /\s*[,\/\s]\s*/;
                var10 = var8.bind(var10)(var4);
                var8 = var10.map;
                var4 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.replace;
                    var2 = ',';
                    var1 = '';
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = var2.trim;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var10 = var8.bind(var10)(var4);
                var8 = var10.filter;
                var4 = function(arg1) {
                    var2 = '';
                    var1 = arg1;
                    var1 = var2 !== var1;
                    return var1;
                };
                var8 = var8.bind(var10)(var4);
                var4 = var8.map;
                var2 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var5 = arg1;
                        var3 = arg2;
                        var1 = _closure3_slot0;
                        var4 = /%$/;
                        var2 = var4.test;
                        var2 = var2.bind(var4)(var5);
                        if(var2) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                        var2 = var1[var3];
                        var1 = 'h';
                        if(!(var1 === var2)) { _fun0009_ip = 64; continue _fun0009 }
case 65:
                        var2 = /turn$/;
                        var1 = var2.test;
                        var1 = var1.bind(var2)(var5);
                        if(var1) { _fun0009_ip = 66; continue _fun0009 }
case 67:
                        var2 = /rad$/;
                        var1 = var2.test;
                        var1 = var1.bind(var2)(var5);
                        if(var1) { _fun0009_ip = 68; continue _fun0009 }
case 64:
                        var1 = global;
                        var2 = var1.parseFloat;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var5);
                        _fun0009_ip = 69; continue _fun0009;
case 68:
                        var2 = global;
                        var4 = var2.parseFloat;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var5);
                        var2 = 57.3;
                        var1 = var2 * var4;
                        _fun0009_ip = 69; continue _fun0009;
case 66:
                        var2 = global;
                        var4 = var2.parseFloat;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var5);
                        var2 = 360;
                        var1 = var2 * var4;
                        _fun0009_ip = 69; continue _fun0009;
case 62:
                        var2 = 3;
                        if(!(var2 !== var3)) { _fun0009_ip = 70; continue _fun0009 }
case 10:
                        var2 = global;
                        var3 = var2.parseFloat;
                        var2 = undefined;
                        var3 = var3.bind(var2)(var5);
                        var2 = 255;
                        var3 = var2 * var3;
                        var2 = 100;
                        var2 = var3 / var2;
                        _fun0009_ip = 71; continue _fun0009;
case 70:
                        var3 = global;
                        var4 = var3.parseFloat;
                        var3 = undefined;
                        var4 = var4.bind(var3)(var5);
                        var3 = 100;
                        var2 = var4 / var3;
case 71:
                        var1 = var2;
case 69:
                        return var1;
                    }
                };
                var4 = var4.bind(var8)(var2);
                var2 = var9.substr;
                var8 = 0;
                var9 = var2.bind(var9)(var8, var5);
                var2 = 'hsl';
                if(!(var2 !== var9)) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                var13 = _closure2_slot0;
                var12 = var4[var8];
                var11 = var4[var7];
                var10 = var4[var6];
                var2 = var4[var5];
                var14 = 'number';
                var9 = typeof var2;
                var2 = var7;
                if(!(var14 === var9)) { _fun0008_ip = 74; continue _fun0008 }
case 54:
                var2 = var4[var5];
case 74:
                var9 = var13.prototype;
                var9 = Object.create(var9, {constructor: {value: var13}});
                var19 = var9;
                var18 = var12;
                var17 = var11;
                var16 = var10;
                var15 = var2;
                var2 = new var19[var13](var18, var17, var16, var15, var14);
                var2 = var2 instanceof Object ? var2 : var9;
                return var2;
case 72:
                var2 = _closure1_slot5;
                var1 = {};
                var8 = var4[var8];
                var1['hue'] = var8;
                var7 = var4[var7];
                var1['saturation'] = var7;
                var6 = var4[var6];
                var1['lightness'] = var6;
                var4 = var4[var5];
                var1['alpha'] = var4;
                var1 = var2.bind(var3)(var1);
                var6 = _closure2_slot0;
                var18 = var1.red;
                var17 = var1.green;
                var16 = var1.blue;
                var15 = var1.alpha;
                var2 = var6.prototype;
                var2 = Object.create(var2, {constructor: {value: var6}});
                var19 = var2;
                var1 = new var19[var6](var18, var17, var16, var15, var14);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = 3;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/Color.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['hslToRgb'] = var2;
    return var1;
})();
// app/utils/Color.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var2 = function hslToRgb(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(!(var6 < var3))) { _fun0001_ip = 283; continue _fun0001 }
 140:
            var3 = 120;
            if(!(!(var6 < var3))) { _fun0001_ip = 260; continue _fun0001 }
 147:
            var3 = 180;
            if(!(!(var6 < var3))) { _fun0001_ip = 237; continue _fun0001 }
 154:
            var3 = 240;
            if(!(!(var6 < var3))) { _fun0001_ip = 214; continue _fun0001 }
 161:
            var3 = 300;
            if(!(!(var6 < var3))) { _fun0001_ip = 191; continue _fun0001 }
 171:
            var6 = new Array(3);
            var6[0] = var8;
            var3 = 0;
            var6[1] = var3;
            var6[2] = var7;
            _fun0001_ip = 212; continue _fun0001;
 191:
            var3 = new Array(3);
            var3[0] = var7;
            var9 = 0;
            var3[1] = var9;
            var3[2] = var8;
            var6 = var3;
 212:
            _fun0001_ip = 235; continue _fun0001;
 214:
            var3 = [0];
            var3[1] = var7;
            var3[2] = var8;
            var6 = var3;
 235:
            _fun0001_ip = 258; continue _fun0001;
 237:
            var3 = [0];
            var3[1] = var8;
            var3[2] = var7;
            var6 = var3;
 258:
            _fun0001_ip = 281; continue _fun0001;
 260:
            var3 = new Array(3);
            var3[0] = var7;
            var3[1] = var8;
            var9 = 0;
            var3[2] = var9;
            var6 = var3;
 281:
            _fun0001_ip = 304; continue _fun0001;
 283:
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var7 = 0;
            var3[2] = var7;
            var6 = var3;
 304:
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
 0:
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
                if(!(!(var2 > var5))) { _fun0002_ip = 137; continue _fun0002 }
 127:
                var2 = '0';
                var3 = var2 + var6;
 137:
                var2 = '#';
                var3 = var2 + var3;
                var6 = var1.green;
                var2 = var7;
                if(!(!(var6 > var5))) { _fun0002_ip = 168; continue _fun0002 }
 158:
                var6 = '0';
                var2 = var6 + var7;
 168:
                var2 = var3 + var2;
                var3 = var1.blue;
                var1 = var4;
                if(!(!(var3 > var5))) { _fun0002_ip = 195; continue _fun0002 }
 185:
                var3 = '0';
                var1 = var3 + var4;
 195:
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
 0:
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
                if(!(var2 > var6)) { _fun0003_ip = 185; continue _fun0003 }
 149:
                var14 = var7.Math;
                var13 = var14.abs;
                var7 = var10 * var4;
                var12 = 1;
                var7 = var7 - var12;
                var7 = var13.bind(var14)(var7);
                var7 = var12 - var7;
                var5 = var2 / var7;
 185:
                if(!(var6 !== var2)) { _fun0003_ip = 280; continue _fun0003 }
 189:
                if(!(var9 !== var11)) { _fun0003_ip = 234; continue _fun0003 }
 193:
                if(!(var8 !== var11)) { _fun0003_ip = 220; continue _fun0003 }
 197:
                var7 = 0;
                if(!(var1 === var11)) { _fun0003_ip = 249; continue _fun0003 }
 203:
                var11 = var8 - var1;
                var12 = var11 / var2;
                var11 = 4;
                var7 = var12 + var11;
                _fun0003_ip = 249; continue _fun0003;
 220:
                var9 = var1 - var9;
                var9 = var9 / var2;
                var7 = var9 + var10;
                _fun0003_ip = 249; continue _fun0003;
 234:
                var1 = var8 - var1;
                var2 = var1 / var2;
                var1 = 6;
                var7 = var2 % var1;
 249:
                var1 = {};
                var2 = 60;
                var2 = var2 * var7;
                var1['hue'] = var2;
                var1['saturation'] = var5;
                var1['lightness'] = var4;
                var1['alpha'] = var3;
                _fun0003_ip = 305; continue _fun0003;
 280:
                var2 = {};
                var2['hue'] = var6;
                var2['saturation'] = var5;
                var2['lightness'] = var4;
                var2['alpha'] = var3;
                var1 = var2;
 305:
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
 0:
                var1 = this;
                var3 = var1.red;
                var2 = 255;
                var4 = var3 / var2;
                var3 = var1.green;
                var6 = var3 / var2;
                var1 = var1.blue;
                var5 = var1 / var2;
                var2 = 0.03928;
                if(!(!(var4 <= var2))) { _fun0004_ip = 110; continue _fun0004 }
 50:
                var1 = global;
                var8 = var1.Math;
                var7 = var8.pow;
                var1 = 0.055;
                var3 = var4 + var1;
                var1 = 1.055;
                var3 = var3 / var1;
                var1 = 2.4;
                var3 = var7.bind(var8)(var3, var1);
                _fun0004_ip = 124; continue _fun0004;
 110:
                var1 = 12.92;
                var3 = var4 / var1;
 124:
                var1 = 0.2126;
                var3 = var1 * var3;
                if(!(!(var6 <= var2))) { _fun0004_ip = 202; continue _fun0004 }
 142:
                var1 = global;
                var8 = var1.Math;
                var7 = var8.pow;
                var1 = 0.055;
                var4 = var6 + var1;
                var1 = 1.055;
                var4 = var4 / var1;
                var1 = 2.4;
                var4 = var7.bind(var8)(var4, var1);
                _fun0004_ip = 216; continue _fun0004;
 202:
                var1 = 12.92;
                var4 = var6 / var1;
 216:
                var1 = 0.7152;
                var1 = var1 * var4;
                if(!(!(var5 <= var2))) { _fun0004_ip = 294; continue _fun0004 }
 234:
                var2 = global;
                var7 = var2.Math;
                var6 = var7.pow;
                var2 = 0.055;
                var4 = var5 + var2;
                var2 = 1.055;
                var4 = var4 / var2;
                var2 = 2.4;
                var4 = var6.bind(var7)(var4, var2);
                _fun0004_ip = 308; continue _fun0004;
 294:
                var2 = 12.92;
                var4 = var5 / var2;
 308:
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
 0:
                var4 = arg1;
                var3 = this;
                var5 = var4.match;
                var2 = _closure1_slot4;
                var5 = var5.bind(var4)(var2);
                var2 = null;
                if(!(var2 == var5)) { _fun0005_ip = 69; continue _fun0005 }
 30:
                var5 = var4.match;
                var1 = _closure1_slot3;
                var1 = var5.bind(var4)(var1);
                var2 = var2 != var1;
                var1 = undefined;
                if(!var2) { _fun0005_ip = 67; continue _fun0005 }
 54:
                var2 = var3.parseHexString;
                var1 = var2.bind(var3)(var4);
 67:
                _fun0005_ip = 80; continue _fun0005;
 69:
                var2 = var3.parseColorFnString;
                var1 = var2.bind(var3)(var4);
 80:
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
 0:
                var3 = arg1;
                var2 = this;
                var1 = 'transparent';
                if(!(var1 !== var3)) { _fun0006_ip = 27; continue _fun0006 }
 14:
                var1 = var2.parseColorFnString;
                var1 = var1.bind(var2)(var3);
                _fun0006_ip = 62; continue _fun0006;
 27:
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
 62:
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
 0:
                var5 = arg1;
                var3 = var5.match;
                var2 = _closure1_slot3;
                var2 = var3.bind(var5)(var2);
                var12 = null;
                if(!(var12 != var2)) { _fun0007_ip = 345; continue _fun0007 }
 30:
                var4 = [6, 8];
                var3 = var4.includes;
                var2 = var5.length;
                var2 = var3.bind(var4)(var2);
                if(var2) { _fun0007_ip = 345; continue _fun0007 }
 61:
                var4 = var5.replace;
                var3 = '#';
                var2 = '';
                var5 = var4.bind(var5)(var3, var2);
                var4 = var5.length;
                var2 = 6;
                var3 = var5;
                if(!(var4 < var2)) { _fun0007_ip = 172; continue _fun0007 }
 95:
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
                if(!(var12 != var1)) { _fun0007_ip = 172; continue _fun0007 }
 164:
                var1 = var1 + var1;
                var3 = var2 + var1;
 172:
                var2 = var3.match;
                var1 = /.{1,2}/g;
                var10 = var2.bind(var3)(var1);
                if(!(var12 != var10)) { _fun0007_ip = 345; continue _fun0007 }
 204:
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
                if(!var11) { _fun0007_ip = 311; continue _fun0007 }
 288:
                var7 = var7.parseInt;
                var2 = var10[var2];
                var7 = var7.bind(var9)(var2, var8);
                var2 = 255;
                var4 = var7 / var2;
 311:
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
 345:
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
 0:
                var5 = arg1;
                var4 = var5.match;
                var3 = _closure1_slot4;
                var7 = var4.bind(var5)(var3);
                var4 = null;
                if(!(var4 == var7)) { _fun0008_ip = 33; continue _fun0008 }
 29:
                var7 = new Array(0);
 33:
                var6 = _closure1_slot0;
                var3 = undefined;
                var5 = 3;
                var8 = var6.bind(var3)(var7, var5);
                var7 = 1;
                var9 = var8[var7];
                var _closure3_slot0 = var9;
                var6 = 2;
                var10 = var8[var6];
                if(!(var4 != var9)) { _fun0008_ip = 74; continue _fun0008 }
 70:
                if(!(var4 == var10)) { _fun0008_ip = 76; continue _fun0008 }
 74:
                return var3;
 76:
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
 0:
                        var5 = arg1;
                        var3 = arg2;
                        var1 = _closure3_slot0;
                        var4 = /%$/;
                        var2 = var4.test;
                        var2 = var2.bind(var4)(var5);
                        if(var2) { _fun0009_ip = 184; continue _fun0009 }
 43:
                        var2 = var1[var3];
                        var1 = 'h';
                        if(!(var1 === var2)) { _fun0009_ip = 109; continue _fun0009 }
 55:
                        var2 = /turn$/;
                        var1 = var2.test;
                        var1 = var1.bind(var2)(var5);
                        if(var1) { _fun0009_ip = 157; continue _fun0009 }
 82:
                        var2 = /rad$/;
                        var1 = var2.test;
                        var1 = var1.bind(var2)(var5);
                        if(var1) { _fun0009_ip = 126; continue _fun0009 }
 109:
                        var1 = global;
                        var2 = var1.parseFloat;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var5);
                        _fun0009_ip = 247; continue _fun0009;
 126:
                        var2 = global;
                        var4 = var2.parseFloat;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var5);
                        var2 = 57.3;
                        var1 = var2 * var4;
                        _fun0009_ip = 247; continue _fun0009;
 157:
                        var2 = global;
                        var4 = var2.parseFloat;
                        var2 = undefined;
                        var4 = var4.bind(var2)(var5);
                        var2 = 360;
                        var1 = var2 * var4;
                        _fun0009_ip = 247; continue _fun0009;
 184:
                        var2 = 3;
                        if(!(var2 !== var3)) { _fun0009_ip = 222; continue _fun0009 }
 191:
                        var2 = global;
                        var3 = var2.parseFloat;
                        var2 = undefined;
                        var3 = var3.bind(var2)(var5);
                        var2 = 255;
                        var3 = var2 * var3;
                        var2 = 100;
                        var2 = var3 / var2;
                        _fun0009_ip = 244; continue _fun0009;
 222:
                        var3 = global;
                        var4 = var3.parseFloat;
                        var3 = undefined;
                        var4 = var4.bind(var3)(var5);
                        var3 = 100;
                        var2 = var4 / var3;
 244:
                        var1 = var2;
 247:
                        return var1;
                    }
                };
                var4 = var4.bind(var8)(var2);
                var2 = var9.substr;
                var8 = 0;
                var9 = var2.bind(var9)(var8, var5);
                var2 = 'hsl';
                if(!(var2 !== var9)) { _fun0008_ip = 242; continue _fun0008 }
 167:
                var13 = _closure2_slot0;
                var12 = var4[var8];
                var11 = var4[var7];
                var10 = var4[var6];
                var2 = var4[var5];
                var14 = 'number';
                var9 = typeof var2;
                var2 = var7;
                if(!(var14 === var9)) { _fun0008_ip = 208; continue _fun0008 }
 204:
                var2 = var4[var5];
 208:
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
 242:
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
    var5 = native2;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/Color.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['hslToRgb'] = var2;
    return var1;
})();
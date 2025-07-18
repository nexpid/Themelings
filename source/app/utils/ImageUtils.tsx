// app/utils/ImageUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var10 = native3;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function fit(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var4 = var2.width;
            var14 = var2.height;
            var6 = var2.maxWidth;
            var5 = var2.maxHeight;
            var9 = var2.minWidth;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0001_ip = 39; continue _fun0001 }
 37:
            var9 = 0;
 39:
            var7 = var2.minHeight;
            if(!(var7 === var1)) { _fun0001_ip = 51; continue _fun0001 }
 49:
            var7 = 0;
 51:
            if(!(var4 === var6)) { _fun0001_ip = 68; continue _fun0001 }
 55:
            var3 = var4;
            var2 = var14;
            if(!(var2 !== var5)) { _fun0001_ip = 246; continue _fun0001 }
 68:
            var8 = var4 > var6;
            var10 = 1;
            var1 = var10;
            if(!var8) { _fun0001_ip = 85; continue _fun0001 }
 81:
            var1 = var6 / var4;
 85:
            var8 = global;
            var11 = var8.Math;
            var6 = var11.max;
            var13 = var8.Math;
            var12 = var13.round;
            var4 = var4 * var1;
            var4 = var12.bind(var13)(var4);
            var4 = var6.bind(var11)(var4, var9);
            var11 = var8.Math;
            var6 = var11.max;
            var13 = var8.Math;
            var12 = var13.round;
            var1 = var14 * var1;
            var1 = var12.bind(var13)(var1);
            var1 = var6.bind(var11)(var1, var7);
            var6 = var1 > var5;
            if(!var6) { _fun0001_ip = 172; continue _fun0001 }
 168:
            var10 = var5 / var1;
 172:
            var6 = var8.Math;
            var5 = var6.max;
            var12 = var8.Math;
            var11 = var12.round;
            var4 = var4 * var10;
            var4 = var11.bind(var12)(var4);
            var3 = var5.bind(var6)(var4, var9);
            var6 = var8.Math;
            var5 = var6.max;
            var9 = var8.Math;
            var8 = var9.round;
            var1 = var1 * var10;
            var1 = var8.bind(var9)(var1);
            var2 = var5.bind(var6)(var1, var7);
 246:
            var1 = {};
            var1['width'] = var3;
            var1['height'] = var2;
            return var1;
        }
    };
    var _closure1_slot5 = var6;
    var5 = function getPalette(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var13 = arg3;
            var1 = global;
            var3 = var1.document;
            var2 = var3.createElement;
            var1 = 'canvas';
            var3 = var2.bind(var3)(var1);
            var2 = var3.getContext;
            var1 = '2d';
            var4 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var4)) { _fun0002_ip = 352; continue _fun0002 }
 55:
            var6 = var5.width;
            var2 = 128;
            var12 = 0;
            var1 = var2;
            if(!(var12 !== var6)) { _fun0002_ip = 77; continue _fun0002 }
 72:
            var1 = var5.width;
 77:
            var3['width'] = var1;
            var6 = var5.height;
            if(!(var12 !== var6)) { _fun0002_ip = 97; continue _fun0002 }
 92:
            var2 = var5.height;
 97:
            var3['height'] = var2;
            var3 = var4.drawImage;
            var25 = var4;
            var24 = var5;
            var23 = 0;
            var22 = 0;
            var21 = var1;
            var20 = var2;
            var3 = var25[var3](var24, var23, var22, var21, var20, var19);
            var3 = var4.getImageData;
            var25 = var4;
            var24 = 0;
            var22 = var1;
            var21 = var2;
            var3 = var25[var3](var24, var23, var22, var21, var20);
            var11 = var3.data;
            var10 = var1 * var2;
            var5 = new Array(0);
            var9 = 250;
            var8 = 125;
            var7 = 4;
            var6 = 1;
            var3 = 2;
            var2 = 3;
            var4 = undefined;
            var1 = 0;
            if(!(var1 < var10)) { _fun0002_ip = 294; continue _fun0002 }
 189:
            var14 = var7 * var1;
            var15 = var12 + var14;
            var18 = var11[var15];
            var15 = var14 + var6;
            var17 = var11[var15];
            var15 = var14 + var3;
            var16 = var11[var15];
            var14 = var14 + var2;
            var15 = var11[var14];
            var14 = var4 === var15;
            if(var14) { _fun0002_ip = 236; continue _fun0002 }
 232:
            var14 = var15 >= var8;
 236:
            if(!var14) { _fun0002_ip = 286; continue _fun0002 }
 239:
            var14 = var18 > var9;
            if(!var14) { _fun0002_ip = 250; continue _fun0002 }
 246:
            var14 = var17 > var9;
 250:
            if(!var14) { _fun0002_ip = 257; continue _fun0002 }
 253:
            var14 = var16 > var9;
 257:
            if(var14) { _fun0002_ip = 286; continue _fun0002 }
 260:
            var15 = var5.push;
            var14 = new Array(3);
            var14[0] = var18;
            var14[1] = var17;
            var14[2] = var16;
            var14 = var15.bind(var5)(var14);
 286:
            var1 = var1 + var13;
            if(var1 < var10) { _fun0002_ip = 189; continue _fun0002 }
 294:
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var3 = var3.bind(var4)(var1);
            var1 = arg2;
            var3 = var3.bind(var4)(var5, var1);
            var4 = 'boolean';
            var1 = typeof var3;
            if(!(var4 !== var1)) { _fun0002_ip = 346; continue _fun0002 }
 334:
            var1 = var3.palette;
            var1 = var1.bind(var3)();
            _fun0002_ip = 350; continue _fun0002;
 346:
            var1 = _closure1_slot4;
 350:
            return var1;
 352:
            var1 = _closure1_slot4;
            return var1;
        }
    };
    var _closure1_slot6 = var5;
    var1 = function _dataUrlToFile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 104; continue _fun0003 }
 7:
                    var4 = _closure1_slot8;
                    var3 = undefined;
                    var2 = arg1;
                    var3 = var4.bind(var3)(var2);
                    var2 = var3.arrayBuffer;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=38);
 36:
                    return var2;
 38:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 101; continue _fun0003 }
 44:
                    var3 = global;
                    var7 = var3.File;
                    var6 = new Array(1);
                    var6[0] = var2;
                    var5 = {};
                    var3 = arg3;
                    var5['type'] = var3;
                    var3 = var7.prototype;
                    var4 = Object.create(var3, {constructor: {value: var7}});
                    var9 = arg2;
                    var11 = var4;
                    var10 = var6;
                    var8 = var5;
                    var3 = new var11[var7](var10, var9, var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
 101:
                    return var2;
 104:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function dataUrlToBlob(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var1 = var3.split;
            var2 = ',';
            var1 = var1.bind(var3)(var2);
            var6 = 0;
            var5 = var1[var6];
            var4 = var5.indexOf;
            var1 = 'base64';
            var1 = var4.bind(var5)(var1);
            if(!(!(var1 >= var6))) { _fun0004_ip = 76; continue _fun0004 }
 42:
            var1 = global;
            var5 = var1.btoa;
            var1 = var3.split;
            var4 = var1.bind(var3)(var2);
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            _fun0004_ip = 108; continue _fun0004;
 76:
            var1 = global;
            var7 = var1.atob;
            var1 = var3.split;
            var4 = var1.bind(var3)(var2);
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var7.bind(var1)(var4);
 108:
            var1 = var3.split;
            var1 = var1.bind(var3)(var2);
            var3 = var1[var6];
            var2 = var3.split;
            var1 = ':';
            var2 = var2.bind(var3)(var1);
            var1 = 1;
            var3 = var2[var1];
            var2 = var3.split;
            var1 = ';';
            var1 = var2.bind(var3)(var1);
            var2 = var1[var6];
            var3 = global;
            var7 = var3.Uint8Array;
            var9 = var5.length;
            var4 = var7.prototype;
            var4 = Object.create(var4, {constructor: {value: var7}});
            var10 = var4;
            var1 = new var10[var7](var9, var8);
            var1 = var1 instanceof Object ? var1 : var4;
            var4 = var5.length;
            var4 = var6 < var4;
            var6 = 0;
            if(!var4) { _fun0004_ip = 235; continue _fun0004 }
 208:
            var4 = var5.charCodeAt;
            var4 = var4.bind(var5)(var6);
            var1[var6] = var4;
            var6 = var6 + 1;
            var4 = var5.length;
            if(var6 < var4) { _fun0004_ip = 208; continue _fun0004 }
 235:
            var4 = var3.Blob;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = {};
            var1['type'] = var2;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var10 = var2;
            var9 = var3;
            var8 = var1;
            var1 = new var10[var4](var9, var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function _isPNGAnimated() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 183; continue _fun0005 }
 13:
                    var6 = var3.type;
                    var2 = null;
                    var2 = var2 == var6;
                    var4 = undefined;
                    if(var2) { _fun0005_ip = 49; continue _fun0005 }
 29:
                    var5 = var6.split;
                    var2 = ';';
                    var5 = var5.bind(var6)(var2);
                    var2 = 0;
                    var4 = var5[var2];
 49:
                    var2 = 'image/png';
                    if(!(var2 === var4)) { _fun0005_ip = 147; continue _fun0005 }
 59:
                    var2 = var3.text;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=72);
 70:
                    return var2;
 72:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 144; continue _fun0005 }
 78:
                    var4 = var2.indexOf;
                    var3 = 'IDAT';
                    var6 = var4.bind(var2)(var3);
                    var5 = 0;
                    var3 = var6 > var5;
                    if(!var3) { _fun0005_ip = 141; continue _fun0005 }
 104:
                    var4 = var2.substring;
                    var6 = var4.bind(var2)(var5, var6);
                    var5 = var6.indexOf;
                    var4 = 'acTL';
                    var5 = var5.bind(var6)(var4);
                    var4 = -1;
                    var3 = var4 !== var5;
 141:
                    return var3;
 144:
                    return var2;
 147:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var8 = 'File is not a PNG';
                    var9 = var3;
                    var2 = new var9[var4](var8, var7);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 183:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = new Array(1);
    var11 = [0, 0, 0];
    var7[0] = var11;
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var9[var7];
    var11 = var10.bind(var1)(var7);
    var10 = var11.memoize;
    var7 = function(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = global;
            var2 = var2.Image;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var4 = var3;
            var2 = new var4[var2](var3);
            var3 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot2 = var3;
            var2 = 'Anonymous';
            var3['crossOrigin'] = var2;
            var2 = function(arg1) {
                var4 = _closure3_slot1;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var2);
                var4 = _closure3_slot2;
                var2 = null;
                var4['onload'] = var2;
                var4['onerror'] = var2;
                _closure3_slot2 = var2;
                return var1;
            };
            var3['onerror'] = var2;
            var3 = _closure3_slot2;
            var2 = function() {
                var4 = _closure3_slot0;
                var7 = _closure1_slot6;
                var6 = _closure3_slot2;
                var1 = undefined;
                var5 = 5;
                var2 = 10;
                var2 = var7.bind(var1)(var6, var5, var2);
                var2 = var4.bind(var1)(var2);
                var4 = _closure3_slot2;
                var2 = null;
                var4['onload'] = var2;
                var4['onerror'] = var2;
                _closure3_slot2 = var2;
                return var1;
            };
            var3['onload'] = var2;
            var2 = _closure3_slot2;
            var1 = _closure2_slot0;
            var2['src'] = var1;
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var7 = var10.bind(var11)(var7);
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/ImageUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['fit'] = var6;
    var6 = 2000;
    var3['IMAGE_MAX_ZOOM'] = var6;
    var6 = function zoomFit(arg1, arg2) {
        var4 = global;
        var5 = var4.Math;
        var3 = var5.min;
        var6 = var4.Math;
        var2 = var6.round;
        var1 = var4.window;
        var7 = var1.innerHeight;
        var1 = 0.65;
        var1 = var1 * var7;
        var2 = var2.bind(var6)(var1);
        var7 = var4.Math;
        var6 = var7.round;
        var1 = var4.window;
        var1 = var1.innerHeight;
        var1 = var6.bind(var7)(var1);
        var3 = var3.bind(var5)(var2, var1);
        var6 = var4.Math;
        var5 = var6.min;
        var7 = var4.Math;
        var2 = var7.round;
        var1 = var4.window;
        var8 = var1.innerWidth;
        var1 = 0.75;
        var1 = var1 * var8;
        var2 = var2.bind(var7)(var1);
        var8 = var4.Math;
        var7 = var8.round;
        var1 = var4.window;
        var1 = var1.innerWidth;
        var1 = var7.bind(var8)(var1);
        var7 = var5.bind(var6)(var2, var1);
        var2 = var4.Math;
        var1 = var2.min;
        var6 = 2000;
        var1 = var1.bind(var2)(var3, var6);
        var3 = _closure1_slot5;
        var2 = {};
        var5 = arg1;
        var2['width'] = var5;
        var5 = arg2;
        var2['height'] = var5;
        var5 = var4.Math;
        var4 = var5.min;
        var4 = var4.bind(var5)(var7, var6);
        var2['maxWidth'] = var4;
        var2['maxHeight'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var3['zoomFit'] = var6;
    var6 = function zoomScale(arg1, arg2, arg3, arg4) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var9 = arg2;
            var8 = arg3;
            var3 = arg4;
            var1 = global;
            var7 = var1.Math;
            var6 = var7.max;
            var2 = null;
            var11 = var2 != var4;
            var10 = 0;
            var5 = 0;
            if(!var11) { _fun0006_ip = 63; continue _fun0006 }
 38:
            var5 = 0;
            if(!(var10 !== var4)) { _fun0006_ip = 63; continue _fun0006 }
 44:
            var11 = var2 != var9;
            var5 = 0;
            if(!var11) { _fun0006_ip = 63; continue _fun0006 }
 53:
            var5 = 0;
            if(!(var5 !== var9)) { _fun0006_ip = 63; continue _fun0006 }
 59:
            var5 = var4 / var8;
 63:
            var4 = 2;
            var7 = var6.bind(var7)(var4, var5);
            var5 = var2 != var8;
            if(!var5) { _fun0006_ip = 113; continue _fun0006 }
 79:
            var9 = var8 * var7;
            var6 = var1.window;
            var10 = var6.innerWidth;
            var6 = 1.6;
            var6 = var10 * var6;
            var5 = var9 > var6;
 113:
            var6 = var4;
            if(!var5) { _fun0006_ip = 149; continue _fun0006 }
 119:
            var5 = var1.window;
            var9 = var5.innerWidth;
            var5 = 1.6;
            var5 = var9 * var5;
            var6 = var5 / var8;
 149:
            var2 = var2 != var3;
            if(!var2) { _fun0006_ip = 190; continue _fun0006 }
 156:
            var8 = var3 * var7;
            var5 = var1.window;
            var9 = var5.innerHeight;
            var5 = 1.6;
            var5 = var9 * var5;
            var2 = var8 > var5;
 190:
            var5 = var4;
            if(!var2) { _fun0006_ip = 226; continue _fun0006 }
 196:
            var2 = var1.window;
            var8 = var2.innerHeight;
            var2 = 1.6;
            var2 = var8 * var2;
            var5 = var2 / var3;
 226:
            var3 = var1.Math;
            var2 = var3.min;
            var2 = var2.bind(var3)(var7, var6, var5);
            var3 = var1.parseFloat;
            var1 = var2.toFixed;
            var2 = var1.bind(var2)(var4);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['zoomScale'] = var6;
    var6 = function getRatio(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var4 = arg1;
            var3 = var4.width;
            var1 = var4.height;
            var2 = var4.maxWidth;
            var6 = var4.maxHeight;
            var7 = var3 > var2;
            var4 = 1;
            var5 = var4;
            if(!var7) { _fun0007_ip = 42; continue _fun0007 }
 38:
            var5 = var2 / var3;
 42:
            var2 = global;
            var8 = var2.Math;
            var7 = var8.round;
            var3 = var3 * var5;
            var3 = var7.bind(var8)(var3);
            var7 = var2.Math;
            var3 = var7.round;
            var1 = var1 * var5;
            var3 = var3.bind(var7)(var1);
            var7 = var3 > var6;
            var1 = var4;
            if(!var7) { _fun0007_ip = 98; continue _fun0007 }
 94:
            var1 = var6 / var3;
 98:
            var3 = var2.Math;
            var2 = var3.min;
            var1 = var5 * var1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['getRatio'] = var6;
    var6 = function getCoverRatio(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = var1.width;
            var6 = var1.height;
            var3 = var1.maxWidth;
            var2 = var1.maxHeight;
            if(!(var7 !== var6)) { _fun0008_ip = 78; continue _fun0008 }
 29:
            var1 = global;
            var5 = var1.Math;
            var4 = var5.max;
            var3 = var3 / var7;
            var2 = var2 / var6;
            var4 = var4.bind(var5)(var3, var2);
            var3 = var1.Math;
            var2 = var3.min;
            var1 = 1;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
 78:
            var1 = 1;
            return var1;
        }
    };
    var3['getCoverRatio'] = var6;
    var6 = function hasDimensions(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var5 = var1.width;
            var3 = var1.height;
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0009_ip = 28; continue _fun0009 }
 22:
            var4 = 0;
            var1 = var4 !== var5;
 28:
            if(!var1) { _fun0009_ip = 35; continue _fun0009 }
 31:
            var1 = var2 != var3;
 35:
            if(!var1) { _fun0009_ip = 44; continue _fun0009 }
 38:
            var2 = 0;
            var1 = var2 !== var3;
 44:
            return var1;
        }
    };
    var3['hasDimensions'] = var6;
    var6 = function makeCssUrlString(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 == var5;
            var3 = 'none';
            var1 = var3;
            if(var2) { _fun0010_ip = 59; continue _fun0010 }
 19:
            var2 = '';
            var1 = var3;
            if(!(var2 !== var5)) { _fun0010_ip = 59; continue _fun0010 }
 30:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = 'url(';
            var2 = ')';
            var1 = var4.bind(var3)(var5, var2);
 59:
            return var1;
        }
    };
    var3['makeCssUrlString'] = var6;
    var3['getPalette'] = var5;
    var5 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.default;
        var2 = var3.getPaletteForAvatarMobile;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getPaletteForAvatar'] = var5;
    var5 = function readFileAsBase64(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = global;
            var2 = var2.FileReader;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var6 = var3;
            var2 = new var6[var2](var5);
            var2 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot2 = var2;
            var4 = var2.readAsDataURL;
            var3 = _closure2_slot0;
            var3 = var4.bind(var2)(var3);
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var2 = _closure3_slot2;
                var4 = var2.result;
                var5 = 'string';
                var4 = typeof var4;
                var5 = var5 === var4;
                var4 = 'Result must be a string';
                var4 = var6.bind(var1)(var5, var4);
                var3 = _closure3_slot0;
                var2 = var2.result;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2['onload'] = var3;
            var1 = function(arg1) {
                var3 = _closure3_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var2['onerror'] = var1;
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['readFileAsBase64'] = var5;
    var5 = function dataUriFileSize(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = ';base64,';
        var4 = var2.bind(var3)(var1);
        var2 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var1 = var3[var1];
        var3 = undefined;
        var5 = var2.bind(var3)(var1);
        var2 = var4.length;
        var1 = 2;
        var2 = var1 === var2;
        var1 = 'Input data is not a valid image.';
        var1 = var5.bind(var3)(var2, var1);
        var1 = global;
        var2 = var1.atob;
        var1 = 1;
        var1 = var4[var1];
        var1 = var2.bind(var3)(var1);
        var1 = var1.length;
        return var1;
    };
    var3['dataUriFileSize'] = var5;
    var5 = function dataUrlToFile() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['dataUrlToFile'] = var5;
    var3['dataUrlToBlob'] = var4;
    var2 = function isPNGAnimated() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['isPNGAnimated'] = var2;
    return var1;
})();
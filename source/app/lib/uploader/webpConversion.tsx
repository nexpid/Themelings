// app/lib/uploader/webpConversion.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var9;
    var1 = function _hasSrgbIccProfile() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 367; continue _fun0001 }
 10:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 3;
                    var2 = var5[var2];
                    var15 = undefined;
                    var7 = var3.bind(var15)(var2);
                    var6 = var7.load;
                    var3 = true;
                    var5 = arg1;
                    var2 = {'async': true, 'expanded': true, 'includeUnknown': true};
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=70);
 68:
                    return var2;
 70:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 364; continue _fun0001 }
 79:
                    var5 = var2.icc;
                    var14 = null;
                    if(!(var14 != var5)) { _fun0001_ip = 340; continue _fun0001 }
 94:
                    var10 = var2.icc;
                    var6 = global;
                    var7 = var6.Object;
                    var5 = var7.keys;
                    var13 = var5.bind(var7)(var10);
                    var5 = var13.length;
                    var12 = 0;
                    var5 = var12 < var5;
                    var11 = '';
                    var8 = 'ICC Description';
                    var7 = undefined;
                    if(!var5) { _fun0001_ip = 205; continue _fun0001 }
 144:
                    var9 = var13[var12];
                    if(!(var8 === var9)) { _fun0001_ip = 193; continue _fun0001 }
 152:
                    var16 = var10[var9];
                    var17 = var14 == var16;
                    var5 = undefined;
                    if(var17) { _fun0001_ip = 170; continue _fun0001 }
 165:
                    var5 = var16.description;
 170:
                    var7 = var16;
                    if(!(var14 != var5)) { _fun0001_ip = 193; continue _fun0001 }
 177:
                    var5 = var10[var9];
                    var5 = var5.description;
                    var7 = var16;
                    if(!(var11 === var5)) { _fun0001_ip = 231; continue _fun0001 }
 193:
                    var12 = var12 + 1;
                    var5 = var13.length;
                    if(var12 < var5) { _fun0001_ip = 144; continue _fun0001 }
 205:
                    var8 = _closure1_slot4;
                    var7 = var8.verbose;
                    var5 = '[webp] ICC profile detected but could not parse description - assuming non-sRGB';
                    var5 = var7.bind(var8)(var5);
                    var5 = false;
                    return var5;
 231:
                    var5 = var10[var9];
                    var7 = var5.description;
                    var5 = var7.toLowerCase;
                    var8 = var5.bind(var7)();
                    var7 = var8.includes;
                    var5 = 'srgb';
                    var5 = var7.bind(var8)(var5);
                    var8 = _closure1_slot4;
                    var7 = var8.verbose;
                    var9 = var10[var9];
                    var10 = var9.description;
                    var6 = var6.HermesInternal;
                    var9 = var6.concat;
                    if(var5) { _fun0001_ip = 319; continue _fun0001 }
 299:
                    var5 = '[webp] non sRGB ICC profile description found: ';
                    var5 = var9.bind(var5)(var10);
                    var5 = var7.bind(var8)(var5);
                    var5 = false;
                    _fun0001_ip = 337; continue _fun0001;
 319:
                    var6 = '[webp] sRGB ICC profile description found: ';
                    var6 = var9.bind(var6)(var10);
                    var6 = var7.bind(var8)(var6);
                    var5 = true;
 337:
                    return var5;
 340:
                    var6 = _closure1_slot4;
                    var5 = var6.verbose;
                    var4 = '[webp] no ICC profile detected - assuming sRGB';
                    var4 = var5.bind(var6)(var4);
                    return var3;
 364:
                    return var2;
 367:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var5 = function _shouldConvertToWebP() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var5;
    var1 = function _shouldConvertToWebP2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 707; continue _fun0002 }
 15:
                    var2 = var3;
                    var _closure4_slot0 = var3;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var8 = var3.type;
                    var3 = 'image/webp';
                    if(!(var3 !== var8)) { _fun0002_ip = 670; continue _fun0002 }
 46:
                    var9 = ['image/png'];
                    var8 = var9.includes;
                    var3 = var2;
                    var3 = var3.type;
                    var3 = var8.bind(var9)(var3);
                    if(var3) { _fun0002_ip = 140; continue _fun0002 }
 77:
                    var10 = _closure1_slot4;
                    var9 = var10.verbose;
                    var8 = var2;
                    var12 = var8.type;
                    var8 = global;
                    var8 = var8.HermesInternal;
                    var11 = var8.concat;
                    var8 = '[WebP] Unsupported format: ';
                    var8 = var11.bind(var8)(var12);
                    var8 = var9.bind(var10)(var8);
                    var3 = _closure1_slot5;
                    var3 = var3.UNSUPPORTED_FORMAT;
                    return var3;
 140: // try_start_0
                    var3 = var2;
                    var3 = var3.arrayBuffer;
                    var8 = 'function';
                    var3 = typeof var3;
                    if(!(var8 !== var3)) { _fun0002_ip = 212; continue _fun0002 }
 160:
                    var3 = global;
                    var9 = var3.Promise;
                    var3 = var9.prototype;
                    var8 = Object.create(var3, {constructor: {value: var9}});
                    var17 = function(arg1, arg2) {
                        var2 = arg1;
                        var _closure5_slot0 = var2;
                        var2 = arg2;
                        var _closure5_slot1 = var2;
                        var2 = global;
                        var2 = var2.FileReader;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {constructor: {value: var2}});
                        var5 = var3;
                        var2 = new var5[var2](var4);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var _closure5_slot2 = var3;
                        var2 = function() {
                            var3 = _closure5_slot0;
                            var1 = _closure5_slot2;
                            var2 = var1.result;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3['onload'] = var2;
                        var1 = function() {
                            var3 = _closure5_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = 'Failed to read file as ArrayBuffer';
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3['onerror'] = var1;
                        var2 = var3.readAsArrayBuffer;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var18 = var8;
                    var3 = new var18[var9](var17, var16);
                    var8 = var3 instanceof Object ? var3 : var8;
                    SaveGenerator(address=197);
 195:
                    return var8;
 197:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=2);
                    var9 = var3;
                    var3 = var8;
                    if(!var9) { _fun0002_ip = 241; continue _fun0002 }
 209: // try_end0
                    return var8;
 212: // try_start_1
                    var8 = var2;
                    var2 = var8.arrayBuffer;
                    var2 = var2.bind(var8)();
                    SaveGenerator(address=229);
 227:
                    return var2;
 229:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    var3 = var2;
                    if(var8) { _fun0002_ip = 628; continue _fun0002 }
 241:
                    var6 = var3;
 244: // try_start_2 // try_end1
                    var9 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var12 = 2;
                    var8 = var8[var12];
                    var10 = var9.bind(var7)(var8);
                    var9 = var10.decode;
                    var8 = var6;
                    var11 = var9.bind(var10)(var8);
                    var5 = var11;
                    var8 = var11.ctype;
                    var15 = 4;
                    if(!(var15 !== var8)) { _fun0002_ip = 312; continue _fun0002 }
 297:
                    var10 = var11.ctype;
                    var9 = 6;
                    var8 = false;
                    if(!(var9 === var10)) { _fun0002_ip = 419; continue _fun0002 }
 312:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var12];
                    var10 = var10.bind(var7)(var9);
                    var9 = var10.toRGBA8;
                    var17 = var9.bind(var10)(var11);
                    var9 = global;
                    var9 = var9.Uint8Array;
                    var10 = var9.prototype;
                    var10 = Object.create(var10, {constructor: {value: var9}});
                    var18 = var10;
                    var9 = new var18[var9](var17, var16);
                    var14 = var9 instanceof Object ? var9 : var10;
                    var9 = var14.length;
                    var13 = 3;
                    var9 = var13 < var9;
                    var11 = 255;
                    var8 = false;
                    if(!var9) { _fun0002_ip = 419; continue _fun0002 }
 388:
                    var9 = var14[var13];
                    var9 = var9 < var11;
                    var8 = true;
                    if(var9) { _fun0002_ip = 419; continue _fun0002 }
 401:
                    var13 = var13 + var15;
                    var9 = var14.length;
                    var9 = var13 < var9;
                    var8 = false;
                    if(var9) { _fun0002_ip = 388; continue _fun0002 }
 419:
                    if(var8) { _fun0002_ip = 555; continue _fun0002 }
 425:
                    var5 = var5.tabs;
                    var8 = var5.acTL;
                    var5 = null;
                    if(!(var5 == var8)) { _fun0002_ip = 521; continue _fun0002 }
 443: // try_start_3 // try_end2
                    var4 = function hasSrgbIccProfile() {
                        var1 = undefined;
                        var4 = _closure1_slot6;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var4 = var4.bind(var7)(var6);
                    SaveGenerator(address=457);
 455:
                    return var4;
 457:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 482; continue _fun0002 }
 463:
                    if(var4) { _fun0002_ip = 479; continue _fun0002 }
 466:
                    var6 = _closure1_slot5;
                    var6 = var6.ICC_NON_SRGB_PROFILE;
 476: // try_end3
                    return var6;
 479:
                    return var5;
 482:
                    return var4;
 485: // catch_target3
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot4;
                    var5 = var6.warn;
                    var4 = '[WebP] ICC profile detection failed:';
                    var4 = var5.bind(var6)(var4, var7);
                    var4 = _closure1_slot5;
                    var4 = var4.ICC_DETECTION_FAILED;
                    return var4;
 521: // try_start_4
                    var6 = _closure1_slot4;
                    var5 = var6.verbose;
                    var4 = '[webp] png is animated (apng) - skipping conversion';
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure1_slot5;
                    var4 = var4.ANIMATED_IMAGE;
 552: // try_end4
                    return var4;
 555: // try_start_5
                    var6 = _closure1_slot4;
                    var5 = var6.verbose;
                    var4 = '[webp] png uses actual transparency - skipping conversion';
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure1_slot5;
                    var3 = var3.HAS_TRANSPARENCY;
 586: // try_end5
                    return var3;
 589: // catch_target2 // catch_target4 // catch_target5
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot4;
                    var5 = var6.warn;
                    var4 = '[WebP] PNG analysis failed:';
                    var4 = var5.bind(var6)(var4, var7);
                    var3 = _closure1_slot5;
                    var3 = var3.CORRUPTED_FILE;
                    return var3;
 628:
                    return var2;
 631: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot4;
                    var4 = var5.warn;
                    var3 = '[WebP] Failed to read file data:';
                    var3 = var4.bind(var5)(var3, var6);
                    var2 = _closure1_slot5;
                    var2 = var2.CONVERSION_FAILED;
                    return var2;
 670:
                    var5 = _closure1_slot4;
                    var4 = var5.verbose;
                    var3 = '[WebP] File already WebP format';
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot5;
                    var2 = var2.ALREADY_WEBP;
                    return var2;
 707:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function hashImageData(arg1) {
        var1 = global;
        var3 = var1.Uint8Array;
        var1 = arg1;
        var1 = var1.data;
        var5 = var1.buffer;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var3 = var1 instanceof Object ? var1 : var2;
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var3 = var1.bind(var2)(var3);
        var2 = var3.toString;
        var1 = 16;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function convertToWebP() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _convertToWebP() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 1771; continue _fun0003 }
 15:
                    var9 = var2;
                    var _closure4_slot0 = var2;
                    var4 = undefined;
                    var19 = undefined;
                    var18 = undefined;
                    var _closure4_slot1 = var4;
                    var3 = undefined;
                    var7 = undefined;
                    var15 = undefined;
                    var _closure4_slot2 = var4;
                    var22 = undefined;
                    var11 = undefined;
                    var _closure4_slot3 = var4;
                    var10 = undefined;
                    var _closure4_slot4 = var4;
                    var16 = undefined;
                    var25 = undefined;
                    var26 = undefined;
                    var23 = undefined;
                    var _closure4_slot5 = var4;
                    var14 = undefined;
                    var _closure4_slot6 = var4;
                    var20 = undefined;
                    var17 = undefined;
                    var21 = undefined;
                    var12 = null;
                    if(!(var12 != var2)) { _fun0003_ip = 1735; continue _fun0003 }
 89:
                    var24 = _closure1_slot4;
                    var8 = var24.verbose;
                    var5 = var9;
                    var28 = var5.name;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var27 = var6.concat;
                    var6 = '[WebP] Starting conversion for: ';
                    var6 = var27.bind(var6)(var28);
                    var6 = var8.bind(var24)(var6);
                    var8 = var5.performance;
                    var6 = var8.now;
                    var6 = var6.bind(var8)();
                    var18 = var6;
                    _closure4_slot1 = var6;
                    var3 = function createFailedResult(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var5 = arguments[1];
                            var1 = undefined;
                            if(!(var5 === var1)) { _fun0004_ip = 21; continue _fun0004 }
 9:
                            var1 = _closure4_slot0;
                            var5 = var1.size;
 21:
                            var1 = {};
                            var2 = false;
                            var1['success'] = var2;
                            var3 = _closure4_slot0;
                            var1['originalFile'] = var3;
                            var4 = var3.size;
                            var1['sizeBefore'] = var4;
                            var1['sizeAfter'] = var5;
                            var4 = var3.size;
                            var3 = 0;
                            var4 = var4 > var3;
                            var3 = 1;
                            if(!var4) { _fun0004_ip = 87; continue _fun0004 }
 74:
                            var4 = _closure4_slot0;
                            var4 = var4.size;
                            var3 = var5 / var4;
 87:
                            var1['compressionRatio'] = var3;
                            var3 = arg1;
                            var1['reason'] = var3;
                            var5 = global;
                            var4 = var5.Math;
                            var3 = var4.round;
                            var6 = var5.performance;
                            var5 = var6.now;
                            var5 = var5.bind(var6)();
                            var2 = _closure4_slot1;
                            var2 = var5 - var2;
                            var2 = var3.bind(var4)(var2);
                            var1['compressTimeMs'] = var2;
                            return var1;
                        }
                    };
 166: // try_start_2
                    var8 = _closure1_slot7;
                    var6 = var9;
                    var6 = var8.bind(var4)(var6);
                    SaveGenerator(address=182);
 180:
                    return var6;
 182:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(var8) { _fun0003_ip = 1665; continue _fun0003 }
 191:
                    var7 = var6;
                    if(!(var12 == var6)) { _fun0003_ip = 1614; continue _fun0003 }
 201:
                    var27 = var5.document;
                    var24 = var27.createElement;
                    var8 = 'canvas';
                    var27 = var24.bind(var27)(var8);
                    var15 = var27;
                    _closure4_slot2 = var27;
                    var24 = var27.getContext;
                    var8 = '2d';
                    var8 = var24.bind(var27)(var8);
                    var22 = var8;
                    if(!(var12 != var8)) { _fun0003_ip = 1580; continue _fun0003 }
 256:
                    var8 = var5.Image;
                    var24 = var8.prototype;
                    var24 = Object.create(var24, {constructor: {value: var8}});
                    var61 = var24;
                    var8 = new var61[var8](var60);
                    var8 = var8 instanceof Object ? var8 : var24;
                    var11 = var8;
                    _closure4_slot3 = var8;
                    var27 = var5.URL;
                    var24 = var27.createObjectURL;
                    var8 = var9;
                    var8 = var24.bind(var27)(var8);
                    var10 = var8;
                    _closure4_slot4 = var8;
 316: // try_start_0
                    var27 = var5.Promise;
                    var8 = var27.prototype;
                    var24 = Object.create(var8, {constructor: {value: var27}});
                    var60 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure4_slot3;
                        var3 = function() {
                            var2 = _closure5_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            return var1;
                        };
                        var4['onload'] = var3;
                        var3 = _closure4_slot3;
                        var2 = function() {
                            var3 = _closure5_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = 'failed to load image';
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3['onerror'] = var2;
                        var2 = _closure4_slot3;
                        var1 = _closure4_slot4;
                        var2['src'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var61 = var24;
                    var8 = new var61[var27](var60, var59);
                    var8 = var8 instanceof Object ? var8 : var24;
                    SaveGenerator(address=351);
 349:
                    return var8;
 351:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=23);
                    if(var24) { _fun0003_ip = 1536; continue _fun0003 }
 360:
                    var24 = var15;
                    var28 = var11;
                    var11 = var28.width;
                    var24['width'] = var11;
                    var11 = var28.height;
                    var24['height'] = var11;
                    var27 = var22;
                    var11 = var27.drawImage;
                    var24 = 0;
                    var11 = var11.bind(var27)(var28, var24, var24);
 406: // try_end0
                    var28 = var5.URL;
                    var27 = var28.revokeObjectURL;
                    var11 = var10;
                    var11 = var27.bind(var28)(var11);
                    var28 = var5.Promise;
                    var11 = var28.prototype;
                    var27 = Object.create(var11, {constructor: {value: var28}});
                    var60 = function(arg1) {
                        var5 = _closure4_slot2;
                        var4 = var5.toBlob;
                        var3 = arg1;
                        var2 = 'image/webp';
                        var1 = 1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var61 = var27;
                    var11 = new var61[var28](var60, var59);
                    var11 = var11 instanceof Object ? var11 : var27;
                    SaveGenerator(address=461);
 459:
                    return var11;
 461:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=26);
                    if(var27) { _fun0003_ip = 1533; continue _fun0003 }
 470:
                    var16 = var11;
                    if(!(var12 != var11)) { _fun0003_ip = 1499; continue _fun0003 }
 480:
                    var27 = var5.performance;
                    var12 = var27.now;
                    var25 = var12.bind(var27)();
                    var29 = var22;
                    var28 = var29.getImageData;
                    var12 = var15;
                    var58 = var12.width;
                    var57 = var12.height;
                    var61 = var29;
                    var60 = 0;
                    var59 = 0;
                    var12 = var61[var28](var60, var59, var58, var57, var56);
                    SaveGenerator(address=532);
 530:
                    return var12;
 532:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=26);
                    if(var27) { _fun0003_ip = 1496; continue _fun0003 }
 541:
                    var26 = var12;
                    var30 = var22;
                    var29 = var30.clearRect;
                    var27 = var15;
                    var58 = var27.width;
                    var57 = var27.height;
                    var61 = var30;
                    var60 = 0;
                    var59 = 0;
                    var27 = var61[var29](var60, var59, var58, var57, var56);
                    var27 = var5.Image;
                    var28 = var27.prototype;
                    var28 = Object.create(var28, {constructor: {value: var27}});
                    var61 = var28;
                    var27 = new var61[var27](var60);
                    var27 = var27 instanceof Object ? var27 : var28;
                    var23 = var27;
                    _closure4_slot5 = var27;
                    var29 = var5.URL;
                    var28 = var29.createObjectURL;
                    var27 = var16;
                    var27 = var28.bind(var29)(var27);
                    var14 = var27;
                    _closure4_slot6 = var27;
 637: // try_start_1
                    var28 = var5.Promise;
                    var27 = var28.prototype;
                    var27 = Object.create(var27, {constructor: {value: var28}});
                    var60 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure4_slot5;
                        var3 = function() {
                            var2 = _closure5_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            return var1;
                        };
                        var4['onload'] = var3;
                        var3 = _closure4_slot5;
                        var2 = function() {
                            var3 = _closure5_slot1;
                            var1 = global;
                            var4 = var1.Error;
                            var1 = var4.prototype;
                            var2 = Object.create(var1, {constructor: {value: var4}});
                            var5 = 'failed to load image';
                            var6 = var2;
                            var1 = new var6[var4](var5, var4);
                            var2 = var1 instanceof Object ? var1 : var2;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var3['onerror'] = var2;
                        var2 = _closure4_slot5;
                        var1 = _closure4_slot6;
                        var2['src'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var61 = var27;
                    var13 = new var61[var28](var60, var59);
                    var13 = var13 instanceof Object ? var13 : var27;
                    SaveGenerator(address=672);
 670:
                    return var13;
 672:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=26);
                    if(var27) { _fun0003_ip = 1452; continue _fun0003 }
 681:
                    var29 = var22;
                    var28 = var29.drawImage;
                    var27 = var23;
                    var27 = var28.bind(var29)(var27, var24, var24);
 700: // try_end1
                    var29 = var5.URL;
                    var28 = var29.revokeObjectURL;
                    var27 = var14;
                    var27 = var28.bind(var29)(var27);
                    var28 = var22;
                    var27 = var28.getImageData;
                    var58 = var15.width;
                    var57 = var15.height;
                    var61 = var28;
                    var60 = 0;
                    var59 = 0;
                    var15 = var61[var27](var60, var59, var58, var57, var56);
                    SaveGenerator(address=754);
 752:
                    return var15;
 754:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=21);
                    if(var22) { _fun0003_ip = 1449; continue _fun0003 }
 763:
                    var22 = _closure1_slot9;
                    var43 = var22.bind(var4)(var26);
                    var42 = var22.bind(var4)(var15);
                    var22 = var43 === var42;
                    var27 = var5.performance;
                    var26 = var27.now;
                    var26 = var26.bind(var27)();
                    var28 = var26 - var25;
                    var19 = var28;
                    var26 = _closure1_slot4;
                    var25 = var26.verbose;
                    var27 = var9;
                    var41 = var27.name;
                    var58 = var27.size;
                    var56 = var23.width;
                    var54 = var23.height;
                    var23 = var16;
                    var50 = var23.size;
                    var27 = var5.Math;
                    var23 = var27.round;
                    var44 = var23.bind(var27)(var28);
                    var23 = var5.HermesInternal;
                    var35 = var23.concat;
                    var61 = '[WebP] Pixel hash results: fileName=';
                    var59 = ' fileLength={';
                    var57 = '} width=';
                    var55 = ' height=';
                    var53 = ' pixelHash=';
                    var51 = ' mezzanineFileLength={';
                    var49 = '} mezzaninePixelHash=';
                    var47 = ' match=';
                    var45 = ' elapsed_ms=';
                    var60 = var41;
                    var52 = var43;
                    var48 = var42;
                    var46 = var22;
                    var23 = var61[var35](var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43);
                    var23 = var25.bind(var26)(var23);
                    if(var22) { _fun0003_ip = 970; continue _fun0003 }
 949:
                    var23 = var3;
                    var22 = _closure1_slot5;
                    var22 = var22.PIXEL_HASH_MISMATCH;
                    var22 = var23.bind(var4)(var22);
 967: // try_end2
                    return var22;
 970: // try_start_3
                    var22 = var9;
                    var22 = var22.size;
                    var25 = var22 > var24;
                    var23 = 1;
                    var22 = var23;
                    if(!var25) { _fun0003_ip = 1011; continue _fun0003 }
 991:
                    var25 = var16;
                    var26 = var25.size;
                    var25 = var9;
                    var25 = var25.size;
                    var22 = var26 / var25;
 1011:
                    var20 = var22;
                    var22 = var23 - var22;
                    var17 = var22;
                    if(!(!(var22 < var24))) { _fun0003_ip = 1352; continue _fun0003 }
 1028:
                    var22 = var9;
                    var25 = var22.name;
                    var23 = var25.lastIndexOf;
                    var22 = '.';
                    var23 = var23.bind(var25)(var22);
                    var21 = var23;
                    var22 = -1;
                    if(!(var22 !== var23)) { _fun0003_ip = 1086; continue _fun0003 }
 1064:
                    var22 = var9;
                    var23 = var22.name;
                    var22 = var23.substring;
                    var25 = var22.bind(var23)(var24, var21);
                    _fun0003_ip = 1094; continue _fun0003;
 1086:
                    var21 = var9;
                    var25 = var21.name;
 1094:
                    var27 = var5.File;
                    var22 = var16;
                    var26 = new Array(1);
                    var26[0] = var22;
                    var21 = var5.HermesInternal;
                    var24 = var21.concat;
                    var23 = '';
                    var21 = '.webp';
                    var59 = var24.bind(var23)(var25, var21);
                    var21 = {};
                    var23 = 'image/webp';
                    var21['type'] = var23;
                    var23 = var9;
                    var24 = var23.lastModified;
                    var21['lastModified'] = var24;
                    var24 = var27.prototype;
                    var24 = Object.create(var24, {constructor: {value: var27}});
                    var61 = var24;
                    var60 = var26;
                    var58 = var21;
                    var21 = new var61[var27](var60, var59, var58, var57);
                    var24 = var21 instanceof Object ? var21 : var24;
                    var25 = var5.performance;
                    var21 = var25.now;
                    var21 = var21.bind(var25)();
                    var21 = var21 - var18;
                    var26 = _closure1_slot4;
                    var25 = var26.verbose;
                    var31 = var24.name;
                    var27 = var5.Math;
                    var18 = var27.round;
                    var58 = var18.bind(var27)(var21);
                    var18 = var5.HermesInternal;
                    var29 = var18.concat;
                    var61 = '[WebP] Conversion successful: ';
                    var59 = ' in ';
                    var57 = 'ms';
                    var60 = var31;
                    var18 = var61[var29](var60, var59, var58, var57, var56);
                    var18 = var25.bind(var26)(var18);
                    var18 = {};
                    var25 = true;
                    var18['success'] = var25;
                    var18['originalFile'] = var23;
                    var18['convertedFile'] = var24;
                    var23 = var23.size;
                    var18['sizeBefore'] = var23;
                    var22 = var22.size;
                    var18['sizeAfter'] = var22;
                    var18['compressionRatio'] = var20;
                    var18['hashTimeMs'] = var19;
                    var20 = var5.Math;
                    var19 = var20.round;
                    var19 = var19.bind(var20)(var21);
                    var18['compressTimeMs'] = var19;
 1349: // try_end3
                    return var18;
 1352: // try_start_4
                    var19 = _closure1_slot4;
                    var18 = var19.verbose;
                    var21 = var5.Math;
                    var20 = var21.round;
                    var22 = var17;
                    var17 = 100;
                    var17 = var17 * var22;
                    var22 = var20.bind(var21)(var17);
                    var17 = var5.HermesInternal;
                    var21 = var17.concat;
                    var20 = '[WebP] Insufficient savings: ';
                    var17 = '% < 0%';
                    var17 = var21.bind(var20)(var22, var17);
                    var17 = var18.bind(var19)(var17);
                    var18 = var3;
                    var17 = _closure1_slot5;
                    var17 = var17.INSUFFICIENT_SAVINGS;
                    var16 = var16.size;
                    var16 = var18.bind(var4)(var17, var16);
 1446: // try_end4
                    return var16;
 1449:
                    return var15;
 1452: // try_start_5
                    var17 = var5.URL;
                    var16 = var17.revokeObjectURL;
                    var15 = var14;
                    var15 = var16.bind(var17)(var15);
 1472: // try_end5
                    return var13;
 1475: // try_start_6 // catch_target1
                    CatchBlockStart(arg_register=12);
                    var16 = var5.URL;
                    var15 = var16.revokeObjectURL;
                    var14 = var15.bind(var16)(var14);
                    throw var13;
 1496: // try_end6
                    return var12;
 1499: // try_start_7
                    var14 = var5.Error;
                    var12 = var14.prototype;
                    var13 = Object.create(var12, {constructor: {value: var14}});
                    var60 = 'failed to convert to webp';
                    var61 = var13;
                    var12 = new var61[var14](var60, var59);
                    var12 = var12 instanceof Object ? var12 : var13;
                    throw var12;
 1533: // try_end7
                    return var11;
 1536: // try_start_8
                    var13 = var5.URL;
                    var12 = var13.revokeObjectURL;
                    var11 = var10;
                    var11 = var12.bind(var13)(var11);
 1556: // try_end8
                    return var8;
 1559: // try_start_9 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var12 = var5.URL;
                    var11 = var12.revokeObjectURL;
                    var10 = var11.bind(var12)(var10);
                    throw var8;
 1580:
                    var11 = var5.Error;
                    var8 = var11.prototype;
                    var10 = Object.create(var8, {constructor: {value: var11}});
                    var60 = 'could not get canvas context';
                    var61 = var10;
                    var8 = new var61[var11](var60, var59);
                    var8 = var8 instanceof Object ? var8 : var10;
                    throw var8;
 1614:
                    var11 = _closure1_slot4;
                    var10 = var11.verbose;
                    var8 = var7;
                    var7 = var5.HermesInternal;
                    var12 = var7.concat;
                    var7 = '[WebP] Conversion rejected: ';
                    var7 = var12.bind(var7)(var8);
                    var7 = var10.bind(var11)(var7);
                    var7 = var3;
                    var7 = var7.bind(var4)(var8);
 1662: // try_end9
                    return var7;
 1665:
                    return var6;
 1668: // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6 // catch_target7 // catch_target8 // catch_target9
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot4;
                    var6 = var7.error;
                    var11 = var9.name;
                    var5 = var5.HermesInternal;
                    var10 = var5.concat;
                    var9 = '[WebP] Conversion failed for ';
                    var5 = ':';
                    var5 = var10.bind(var9)(var11, var5);
                    var5 = var6.bind(var7)(var5, var8);
                    var2 = _closure1_slot5;
                    var2 = var2.CONVERSION_FAILED;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 1735:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var60 = 'file is null or undefined';
                    var61 = var3;
                    var2 = new var61[var4](var60, var59);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 1771:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _convertFilesToWebP() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 188; continue _fun0005 }
 15:
                    var8 = _closure1_slot4;
                    var7 = var8.verbose;
                    var11 = var6.length;
                    var3 = global;
                    var2 = var3.HermesInternal;
                    var10 = var2.concat;
                    var9 = '[WebP] Converting ';
                    var2 = ' files to WebP...';
                    var2 = var10.bind(var9)(var11, var2);
                    var2 = var7.bind(var8)(var2);
                    var8 = var3.Promise;
                    var7 = var8.all;
                    var9 = var6.map;
                    var2 = function(arg1) {
                        var3 = _closure1_slot10;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var3.bind(var2)(var1);
                        return var1;
                    };
                    var2 = var9.bind(var6)(var2);
                    var2 = var7.bind(var8)(var2);
                    SaveGenerator(address=105);
 103:
                    return var2;
 105:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(var7) { _fun0005_ip = 185; continue _fun0005 }
 111:
                    var7 = var2.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.success;
                        return var1;
                    };
                    var5 = var7.bind(var2)(var5);
                    var15 = var5.length;
                    var5 = _closure1_slot4;
                    var4 = var5.verbose;
                    var13 = var6.length;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var16 = '[WebP] Batch conversion complete: ';
                    var14 = '/';
                    var12 = ' successful';
                    var3 = var16[var8](var15, var14, var13, var12, var11);
                    var3 = var4.bind(var5)(var3);
                    return var2;
 185:
                    return var2;
 188:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var10 = var7.bind(var1)(var6);
    var6 = var10.prototype;
    var7 = Object.create(var6, {constructor: {value: var10}});
    var14 = 'WebP';
    var15 = var7;
    var6 = new var15[var10](var14, var13);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot4 = var6;
    var6 = {};
    var7 = 'already_webp';
    var6['ALREADY_WEBP'] = var7;
    var7 = 'unsupported_format';
    var6['UNSUPPORTED_FORMAT'] = var7;
    var7 = 'animated_image';
    var6['ANIMATED_IMAGE'] = var7;
    var7 = 'has_transparency';
    var6['HAS_TRANSPARENCY'] = var7;
    var7 = 'insufficient_savings';
    var6['INSUFFICIENT_SAVINGS'] = var7;
    var7 = 'conversion_failed';
    var6['CONVERSION_FAILED'] = var7;
    var7 = 'corrupted_file';
    var6['CORRUPTED_FILE'] = var7;
    var7 = 'pixel_hash_mismatch';
    var6['PIXEL_HASH_MISMATCH'] = var7;
    var7 = 'icc_non_srgb_profile';
    var6['ICC_NON_SRGB_PROFILE'] = var7;
    var7 = 'icc_detection_failed';
    var6['ICC_DETECTION_FAILED'] = var7;
    var _closure1_slot5 = var6;
    var7 = 5;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'lib/uploader/webpConversion.tsx';
    var7 = var8.bind(var9)(var7);
    var3['ConversionFailureReason'] = var6;
    var3['_shouldConvertToWebP'] = var5;
    var3['convertToWebP'] = var4;
    var4 = function convertFilesToWebP() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['convertFilesToWebP'] = var4;
    var2 = function getBestFileForUpload(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var1 = var2.success;
            if(!var1) { _fun0006_ip = 24; continue _fun0006 }
 12:
            var3 = var2.convertedFile;
            var1 = null;
            if(!(var1 == var3)) { _fun0006_ip = 32; continue _fun0006 }
 24:
            var1 = var2.originalFile;
            _fun0006_ip = 38; continue _fun0006;
 32:
            var1 = var2.convertedFile;
 38:
            return var1;
        }
    };
    var3['getBestFileForUpload'] = var2;
    return var1;
})();
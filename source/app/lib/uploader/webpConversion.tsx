// app/lib/uploader/webpConversion.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var1 = function isValidChunkType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var8 = var7.length;
            var5 = 4;
            var4 = 122;
            var3 = 97;
            var2 = 90;
            var1 = 65;
            var6 = 0;
            if(!(var5 === var8)) { _fun0001_ip = 74; continue _fun0001 }
 29:
            var8 = var7.charCodeAt;
            var9 = var8.bind(var7)(var6);
            var8 = var6;
            if(!(var9 >= var1)) { _fun0001_ip = 51; continue _fun0001 }
 47:
            if(!(!(var9 <= var2))) { _fun0001_ip = 63; continue _fun0001 }
 51:
            if(!(var9 >= var3)) { _fun0001_ip = 59; continue _fun0001 }
 55:
            if(!(!(var9 <= var4))) { _fun0001_ip = 63; continue _fun0001 }
 59:
            var9 = false;
            return var9;
 63:
            var6 = var8 + 1;
            if(var6 < var5) { _fun0001_ip = 29; continue _fun0001 }
 70:
            var1 = true;
            return var1;
 74:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var6 = function _isAnimatedPNG() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var6;
    var1 = function _isAnimatedPNG2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    var19 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 465; continue _fun0002 }
 15:
                    var _closure4_slot0 = var19;
                    var2 = function() {
                        var4 = _closure1_slot2;
                        var3 = undefined;
                        var2 = function* (arg1, arg2) {
                            var1 = function* anon_0_(arg1, arg2) {
                                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                                    StartGenerator();
                                    var6 = arg1;
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                    if(var3) { _fun0003_ip = 125; continue _fun0003 }
 12:
                                    var3 = undefined;
                                    var _closure7_slot0 = var3;
                                    var5 = _closure4_slot0;
                                    var4 = var5.slice;
                                    var3 = arg2;
                                    var3 = var6 + var3;
                                    var3 = var4.bind(var5)(var6, var3);
                                    _closure7_slot0 = var3;
                                    var3 = global;
                                    var5 = var3.Promise;
                                    var4 = var5.prototype;
                                    var4 = Object.create(var4, {constructor: {value: var5}});
                                    var8 = function(arg1, arg2) {
                                        var2 = arg1;
                                        var _closure8_slot0 = var2;
                                        var2 = arg2;
                                        var _closure8_slot1 = var2;
                                        var2 = global;
                                        var2 = var2.FileReader;
                                        var3 = var2.prototype;
                                        var3 = Object.create(var3, {constructor: {value: var2}});
                                        var5 = var3;
                                        var2 = new var5[var2](var4);
                                        var3 = var2 instanceof Object ? var2 : var3;
                                        var _closure8_slot2 = var3;
                                        var2 = function() {
                                            var3 = _closure8_slot0;
                                            var1 = _closure8_slot2;
                                            var2 = var1.result;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
                                            return var1;
                                        };
                                        var3['onload'] = var2;
                                        var1 = function() {
                                            var3 = _closure8_slot1;
                                            var1 = global;
                                            var4 = var1.Error;
                                            var1 = var4.prototype;
                                            var2 = Object.create(var1, {constructor: {value: var4}});
                                            var5 = 'Failed to read file';
                                            var6 = var2;
                                            var1 = new var6[var4](var5, var4);
                                            var2 = var1 instanceof Object ? var1 : var2;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
                                            return var1;
                                        };
                                        var3['onerror'] = var1;
                                        var2 = var3.readAsArrayBuffer;
                                        var1 = _closure7_slot0;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        return var1;
                                    };
                                    var9 = var4;
                                    var2 = new var9[var5](var8, var7);
                                    var2 = var2 instanceof Object ? var2 : var4;
                                    SaveGenerator(address=84);
 82:
                                    return var2;
 84:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                    if(var4) { _fun0003_ip = 122; continue _fun0003 }
 90:
                                    var3 = var3.Uint8Array;
                                    var4 = var3.prototype;
                                    var4 = Object.create(var4, {constructor: {value: var3}});
                                    var9 = var4;
                                    var8 = var2;
                                    var3 = new var9[var3](var8, var7);
                                    var3 = var3 instanceof Object ? var3 : var4;
                                    return var3;
 122:
                                    return var2;
 125:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure5_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure5_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var18 = undefined;
                    var17 = var2.bind(var18)();
                    var16 = 0;
                    var15 = 8;
                    var2 = var17.bind(var18)(var16, var15);
                    SaveGenerator(address=45);
 43:
                    return var2;
 45:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 462; continue _fun0002 }
 54:
                    var4 = var2.every;
                    var3 = function(arg1, arg2) {
                        var2 = _closure1_slot5;
                        var1 = arg2;
                        var2 = var2[var1];
                        var1 = arg1;
                        var1 = var1 === var2;
                        return var1;
                    };
                    var3 = var4.bind(var2)(var3);
                    if(var3) { _fun0002_ip = 78; continue _fun0002 }
 73:
                    var3 = false;
                    return var3;
 78:
                    var3 = var19.size;
                    if(!(var15 < var3)) { _fun0002_ip = 457; continue _fun0002 }
 90:
                    var4 = var19.size;
                    var3 = 16;
                    var3 = var3 > var4;
                    var14 = 4;
                    var13 = 'IDAT';
                    var12 = 'acTL';
                    var5 = global;
                    var11 = 5;
                    var10 = 6;
                    var9 = 7;
                    var8 = var15;
                    if(var3) { _fun0002_ip = 457; continue _fun0002 }
 138:
                    var3 = var17.bind(var18)(var8, var15);
                    var7 = var8;
                    SaveGenerator(address=151);
 149:
                    return var3;
 151:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 454; continue _fun0002 }
 160:
                    var21 = var5.DataView;
                    var29 = var3.buffer;
                    var20 = var21.prototype;
                    var20 = Object.create(var20, {constructor: {value: var21}});
                    var30 = var20;
                    var6 = new var30[var21](var29, var28);
                    var20 = var6 instanceof Object ? var6 : var20;
                    var6 = var20.getUint32;
                    var6 = var6.bind(var20)(var16);
                    var25 = var5.String;
                    var24 = var25.fromCharCode;
                    var29 = var3[var14];
                    var28 = var3[var11];
                    var27 = var3[var10];
                    var26 = var3[var9];
                    var30 = var25;
                    var20 = var30[var24](var29, var28, var27, var26, var25);
                    var21 = _closure1_slot6;
                    var21 = var21.bind(var18)(var20);
                    if(var21) { _fun0002_ip = 284; continue _fun0002 }
 250:
                    var23 = var5.Error;
                    var21 = var23.prototype;
                    var22 = Object.create(var21, {constructor: {value: var23}});
                    var29 = 'Corrupted PNG: invalid chunk type detected';
                    var30 = var22;
                    var21 = new var30[var23](var29, var28);
                    var21 = var21 instanceof Object ? var21 : var22;
                    throw var21;
 284:
                    if(!(var12 !== var20)) { _fun0002_ip = 428; continue _fun0002 }
 291:
                    if(!(var13 !== var20)) { _fun0002_ip = 423; continue _fun0002 }
 298:
                    var20 = var19.size;
                    if(!(!(var6 > var20))) { _fun0002_ip = 389; continue _fun0002 }
 307:
                    var6 = var15 + var6;
                    var6 = var6 + var14;
                    var8 = var7 + var6;
                    var6 = var19.size;
                    if(!(!(var8 > var6))) { _fun0002_ip = 355; continue _fun0002 }
 328:
                    var6 = var19.size;
                    if(!(var8 < var6)) { _fun0002_ip = 457; continue _fun0002 }
 337:
                    var7 = var19.size;
                    var6 = var8 + var15;
                    if(!(!(var6 > var7))) { _fun0002_ip = 457; continue _fun0002 }
 350:
                    _fun0002_ip = 138; continue _fun0002;
 355:
                    var8 = var5.Error;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {constructor: {value: var8}});
                    var29 = 'Corrupted PNG: invalid chunk length detected';
                    var30 = var7;
                    var6 = new var30[var8](var29, var28);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
 389:
                    var7 = var5.Error;
                    var5 = var7.prototype;
                    var6 = Object.create(var5, {constructor: {value: var7}});
                    var29 = 'Corrupted PNG: invalid chunk length detected';
                    var30 = var6;
                    var5 = new var30[var7](var29, var28);
                    var5 = var5 instanceof Object ? var5 : var6;
                    throw var5;
 423:
                    var5 = false;
                    return var5;
 428:
                    var6 = _closure1_slot3;
                    var5 = var6.verbose;
                    var4 = '[webp] found acTL chunk - png is animated';
                    var4 = var5.bind(var6)(var4);
                    var4 = true;
                    return var4;
 454:
                    return var3;
 457:
                    var3 = false;
                    return var3;
 462:
                    return var2;
 465:
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
    var5 = function _shouldConvertFile() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var5;
    var1 = function _shouldConvertFile2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 606; continue _fun0004 }
 13:
                    var3 = arg1;
                    var7 = undefined;
                    if(!(var4 === var7)) { _fun0004_ip = 24; continue _fun0004 }
 22:
                    var4 = {};
 24:
                    SaveGenerator(address=28);
 26:
                    return var7;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 603; continue _fun0004 }
 37:
                    var4 = var4.minFileSizeBytes;
                    var5 = null;
                    var5 = var5 != var4;
                    var10 = 102400;
                    if(!var5) { _fun0004_ip = 61; continue _fun0004 }
 58:
                    var10 = var4;
 61:
                    var4 = var3;
                    var4 = var4.size;
                    if(!(!(var4 < var10))) { _fun0004_ip = 521; continue _fun0004 }
 76:
                    var4 = var3;
                    var5 = var4.type;
                    var4 = 'image/webp';
                    if(!(var4 !== var5)) { _fun0004_ip = 470; continue _fun0004 }
 97:
                    var6 = ['image/png'];
                    var5 = var6.includes;
                    var4 = var3;
                    var4 = var4.type;
                    var4 = var5.bind(var6)(var4);
                    if(var4) { _fun0004_ip = 205; continue _fun0004 }
 128:
                    var8 = _closure1_slot3;
                    var6 = var8.verbose;
                    var4 = var3;
                    var12 = var4.type;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var11 = var4.concat;
                    var4 = '[WebP] Unsupported format: ';
                    var4 = var11.bind(var4)(var12);
                    var4 = var6.bind(var8)(var4);
                    var4 = {};
                    var6 = false;
                    var4['should'] = var6;
                    var5 = _closure1_slot4;
                    var5 = var5.UNSUPPORTED_FORMAT;
                    var4['reason'] = var5;
                    return var4;
 205: // try_start_0
                    var5 = _closure1_slot7;
                    var4 = var3;
                    var4 = var5.bind(var7)(var4);
                    SaveGenerator(address=224);
 222:
                    return var4;
 224:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0004_ip = 293; continue _fun0004 }
 230:
                    if(var4) { _fun0004_ip = 245; continue _fun0004 }
 233: // try_end0
                    var5 = {};
                    var7 = true;
                    var5['should'] = var7;
                    return var5;
 245: // try_start_1
                    var8 = _closure1_slot3;
                    var7 = var8.verbose;
                    var5 = '[webp] png is animated (apng) - skipping conversion';
                    var5 = var7.bind(var8)(var5);
                    var5 = {};
                    var7 = false;
                    var5['should'] = var7;
                    var6 = _closure1_slot4;
                    var6 = var6.ANIMATED_IMAGE;
                    var5['reason'] = var6;
 290: // try_end1
                    return var5;
 293:
                    return var4;
 296: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var9 = var6;
                    var5 = global;
                    var4 = var5.Error;
                    var4 = var6 instanceof var4;
                    if(!var4) { _fun0004_ip = 343; continue _fun0004 }
 316:
                    var4 = var9;
                    var7 = var4.message;
                    var6 = var7.includes;
                    var4 = 'Corrupted PNG';
                    var4 = var6.bind(var7)(var4);
                    if(var4) { _fun0004_ip = 396; continue _fun0004 }
 343:
                    var11 = _closure1_slot3;
                    var8 = var11.warn;
                    var7 = var9;
                    var4 = '[WebP] Unexpected error during PNG analysis:';
                    var4 = var8.bind(var11)(var4, var7);
                    var4 = {};
                    var7 = false;
                    var4['should'] = var7;
                    var6 = _closure1_slot4;
                    var6 = var6.CONVERSION_FAILED;
                    var4['reason'] = var6;
                    _fun0004_ip = 467; continue _fun0004;
 396:
                    var8 = _closure1_slot3;
                    var7 = var8.warn;
                    var11 = var9.message;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var5 = '[WebP] PNG corruption detected: ';
                    var5 = var9.bind(var5)(var11);
                    var5 = var7.bind(var8)(var5);
                    var5 = {};
                    var7 = false;
                    var5['should'] = var7;
                    var6 = _closure1_slot4;
                    var6 = var6.CORRUPTED_FILE;
                    var5['reason'] = var6;
                    var4 = var5;
 467:
                    return var4;
 470:
                    var7 = _closure1_slot3;
                    var6 = var7.verbose;
                    var4 = '[WebP] File already WebP format';
                    var4 = var6.bind(var7)(var4);
                    var4 = {};
                    var6 = false;
                    var4['should'] = var6;
                    var5 = _closure1_slot4;
                    var5 = var5.ALREADY_WEBP;
                    var4['reason'] = var5;
                    return var4;
 521:
                    var6 = _closure1_slot3;
                    var5 = var6.verbose;
                    var9 = var3.size;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var7 = '[WebP] File too small: ';
                    var3 = ' < ';
                    var3 = var8.bind(var7)(var9, var3, var10);
                    var3 = var5.bind(var6)(var3);
                    var3 = {};
                    var5 = false;
                    var3['should'] = var5;
                    var4 = _closure1_slot4;
                    var4 = var4.FILE_TOO_SMALL;
                    var3['reason'] = var4;
                    return var3;
 603:
                    return var2;
 606:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var3 = var1.bind(var2)(var3);
        var2 = var3.toString;
        var1 = 16;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function convertToWebP() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var4;
    var1 = function _convertToWebP() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 1827; continue _fun0005 }
 18:
                    var10 = var5;
                    var _closure4_slot0 = var5;
                    var5 = undefined;
                    if(!(var2 === var5)) { _fun0005_ip = 33; continue _fun0005 }
 31:
                    var2 = {};
 33:
                    var24 = var2;
                    var19 = undefined;
                    var18 = undefined;
                    var4 = undefined;
                    var23 = undefined;
                    var8 = undefined;
                    var15 = undefined;
                    var _closure4_slot1 = var5;
                    var27 = undefined;
                    var11 = undefined;
                    var _closure4_slot2 = var5;
                    var9 = undefined;
                    var _closure4_slot3 = var5;
                    var16 = undefined;
                    var29 = undefined;
                    var30 = undefined;
                    var28 = undefined;
                    var _closure4_slot4 = var5;
                    var14 = undefined;
                    var _closure4_slot5 = var5;
                    var21 = undefined;
                    var20 = undefined;
                    var17 = undefined;
                    var22 = undefined;
                    SaveGenerator(address=96);
 94:
                    return var5;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 1824; continue _fun0005 }
 105:
                    var3 = var10;
                    var26 = null;
                    if(!(var26 != var3)) { _fun0005_ip = 1788; continue _fun0005 }
 117:
                    var25 = _closure1_slot3;
                    var12 = var25.verbose;
                    var6 = var10;
                    var32 = var6.name;
                    var6 = global;
                    var7 = var6.HermesInternal;
                    var31 = var7.concat;
                    var7 = '[WebP] Starting conversion for: ';
                    var7 = var31.bind(var7)(var32);
                    var7 = var12.bind(var25)(var7);
                    var12 = var6.performance;
                    var7 = var12.now;
                    var18 = var7.bind(var12)();
                    var4 = function createFailedResult(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var4 = arguments[1];
                            var1 = undefined;
                            if(!(var4 === var1)) { _fun0006_ip = 21; continue _fun0006 }
 9:
                            var1 = _closure4_slot0;
                            var4 = var1.size;
 21:
                            var1 = {};
                            var2 = false;
                            var1['success'] = var2;
                            var2 = _closure4_slot0;
                            var1['originalFile'] = var2;
                            var5 = var2.size;
                            var1['sizeBefore'] = var5;
                            var1['sizeAfter'] = var4;
                            var5 = var2.size;
                            var2 = 0;
                            var5 = var5 > var2;
                            var2 = 1;
                            if(!var5) { _fun0006_ip = 87; continue _fun0006 }
 74:
                            var3 = _closure4_slot0;
                            var3 = var3.size;
                            var2 = var4 / var3;
 87:
                            var1['compressionRatio'] = var2;
                            var2 = arg1;
                            var1['reason'] = var2;
                            return var1;
                        }
                    };
 187: // try_start_2
                    var25 = _closure1_slot9;
                    var12 = var10;
                    var7 = var24;
                    var7 = var25.bind(var5)(var12, var7);
                    SaveGenerator(address=207);
 205:
                    return var7;
 207:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 1718; continue _fun0005 }
 216:
                    var8 = var7;
                    var12 = var7.should;
                    if(var12) { _fun0005_ip = 288; continue _fun0005 }
 228:
                    var31 = _closure1_slot3;
                    var25 = var31.verbose;
                    var33 = var8.reason;
                    var12 = var6.HermesInternal;
                    var32 = var12.concat;
                    var12 = '[WebP] Conversion rejected: ';
                    var12 = var32.bind(var12)(var33);
                    var12 = var25.bind(var31)(var12);
                    var12 = var4;
                    var8 = var8.reason;
                    var8 = var12.bind(var5)(var8);
 285: // try_end2
                    return var8;
 288: // try_start_3
                    var25 = var6.document;
                    var12 = var25.createElement;
                    var8 = 'canvas';
                    var25 = var12.bind(var25)(var8);
                    var15 = var25;
                    _closure4_slot1 = var25;
                    var12 = var25.getContext;
                    var8 = '2d';
                    var8 = var12.bind(var25)(var8);
                    var27 = var8;
                    if(!(var26 != var8)) { _fun0005_ip = 1684; continue _fun0005 }
 343:
                    var8 = var6.Image;
                    var12 = var8.prototype;
                    var12 = Object.create(var12, {constructor: {value: var8}});
                    var65 = var12;
                    var8 = new var65[var8](var64);
                    var8 = var8 instanceof Object ? var8 : var12;
                    var11 = var8;
                    _closure4_slot2 = var8;
                    var25 = var6.URL;
                    var12 = var25.createObjectURL;
                    var8 = var10;
                    var8 = var12.bind(var25)(var8);
                    var9 = var8;
                    _closure4_slot3 = var8;
 403: // try_start_0
                    var25 = var6.Promise;
                    var8 = var25.prototype;
                    var12 = Object.create(var8, {constructor: {value: var25}});
                    var64 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure4_slot2;
                        var3 = function() {
                            var2 = _closure5_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            return var1;
                        };
                        var4['onload'] = var3;
                        var3 = _closure4_slot2;
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
                        var2 = _closure4_slot2;
                        var1 = _closure4_slot3;
                        var2['src'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var65 = var12;
                    var8 = new var65[var25](var64, var63);
                    var8 = var8 instanceof Object ? var8 : var12;
                    SaveGenerator(address=438);
 436:
                    return var8;
 438:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 1640; continue _fun0005 }
 447:
                    var12 = var15;
                    var31 = var11;
                    var11 = var31.width;
                    var12['width'] = var11;
                    var11 = var31.height;
                    var12['height'] = var11;
                    var12 = var27;
                    var11 = var12.drawImage;
                    var25 = 0;
                    var11 = var11.bind(var12)(var31, var25, var25);
 493: // try_end0
                    var31 = var6.URL;
                    var12 = var31.revokeObjectURL;
                    var11 = var9;
                    var11 = var12.bind(var31)(var11);
                    var31 = var6.Promise;
                    var11 = var31.prototype;
                    var12 = Object.create(var11, {constructor: {value: var31}});
                    var64 = function(arg1) {
                        var5 = _closure4_slot1;
                        var4 = var5.toBlob;
                        var3 = arg1;
                        var2 = 'image/webp';
                        var1 = 1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var65 = var12;
                    var11 = new var65[var31](var64, var63);
                    var11 = var11 instanceof Object ? var11 : var12;
                    SaveGenerator(address=548);
 546:
                    return var11;
 548:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 1637; continue _fun0005 }
 557:
                    var16 = var11;
                    if(!(var26 != var11)) { _fun0005_ip = 1603; continue _fun0005 }
 567:
                    var31 = var6.performance;
                    var12 = var31.now;
                    var29 = var12.bind(var31)();
                    var33 = var27;
                    var32 = var33.getImageData;
                    var12 = var15;
                    var62 = var12.width;
                    var61 = var12.height;
                    var65 = var33;
                    var64 = 0;
                    var63 = 0;
                    var12 = var65[var32](var64, var63, var62, var61, var60);
                    SaveGenerator(address=619);
 617:
                    return var12;
 619:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=30);
                    if(var31) { _fun0005_ip = 1600; continue _fun0005 }
 628:
                    var30 = var12;
                    var34 = var27;
                    var33 = var34.clearRect;
                    var31 = var15;
                    var62 = var31.width;
                    var61 = var31.height;
                    var65 = var34;
                    var64 = 0;
                    var63 = 0;
                    var31 = var65[var33](var64, var63, var62, var61, var60);
                    var31 = var6.Image;
                    var32 = var31.prototype;
                    var32 = Object.create(var32, {constructor: {value: var31}});
                    var65 = var32;
                    var31 = new var65[var31](var64);
                    var31 = var31 instanceof Object ? var31 : var32;
                    var28 = var31;
                    _closure4_slot4 = var31;
                    var33 = var6.URL;
                    var32 = var33.createObjectURL;
                    var31 = var16;
                    var31 = var32.bind(var33)(var31);
                    var14 = var31;
                    _closure4_slot5 = var31;
 724: // try_start_1
                    var32 = var6.Promise;
                    var31 = var32.prototype;
                    var31 = Object.create(var31, {constructor: {value: var32}});
                    var64 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure4_slot4;
                        var3 = function() {
                            var2 = _closure5_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            return var1;
                        };
                        var4['onload'] = var3;
                        var3 = _closure4_slot4;
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
                        var2 = _closure4_slot4;
                        var1 = _closure4_slot5;
                        var2['src'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var65 = var31;
                    var13 = new var65[var32](var64, var63);
                    var13 = var13 instanceof Object ? var13 : var31;
                    SaveGenerator(address=759);
 757:
                    return var13;
 759:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=30);
                    if(var31) { _fun0005_ip = 1556; continue _fun0005 }
 768:
                    var33 = var27;
                    var32 = var33.drawImage;
                    var31 = var28;
                    var31 = var32.bind(var33)(var31, var25, var25);
 787: // try_end1
                    var33 = var6.URL;
                    var32 = var33.revokeObjectURL;
                    var31 = var14;
                    var31 = var32.bind(var33)(var31);
                    var32 = var27;
                    var31 = var32.getImageData;
                    var62 = var15.width;
                    var61 = var15.height;
                    var65 = var32;
                    var64 = 0;
                    var63 = 0;
                    var15 = var65[var31](var64, var63, var62, var61, var60);
                    SaveGenerator(address=841);
 839:
                    return var15;
 841:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=26);
                    if(var27) { _fun0005_ip = 1553; continue _fun0005 }
 850:
                    var27 = _closure1_slot11;
                    var47 = var27.bind(var5)(var30);
                    var46 = var27.bind(var5)(var15);
                    var27 = var47 === var46;
                    var31 = var6.performance;
                    var30 = var31.now;
                    var30 = var30.bind(var31)();
                    var32 = var30 - var29;
                    var19 = var32;
                    var30 = _closure1_slot3;
                    var29 = var30.verbose;
                    var31 = var10;
                    var45 = var31.name;
                    var62 = var31.size;
                    var60 = var28.width;
                    var58 = var28.height;
                    var28 = var16;
                    var54 = var28.size;
                    var31 = var6.Math;
                    var28 = var31.round;
                    var48 = var28.bind(var31)(var32);
                    var28 = var6.HermesInternal;
                    var39 = var28.concat;
                    var65 = '[WebP] Pixel hash results: fileName=';
                    var63 = ' fileLength={';
                    var61 = '} width=';
                    var59 = ' height=';
                    var57 = ' pixelHash=';
                    var55 = ' mezzanineFileLength={';
                    var53 = '} mezzaninePixelHash=';
                    var51 = ' match=';
                    var49 = ' elapsed_ms=';
                    var64 = var45;
                    var56 = var47;
                    var52 = var46;
                    var50 = var27;
                    var28 = var65[var39](var64, var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47);
                    var28 = var29.bind(var30)(var28);
                    if(var27) { _fun0005_ip = 1057; continue _fun0005 }
 1036:
                    var28 = var4;
                    var27 = _closure1_slot4;
                    var27 = var27.PIXEL_HASH_MISMATCH;
                    var27 = var28.bind(var5)(var27);
 1054: // try_end3
                    return var27;
 1057: // try_start_4
                    var27 = var10;
                    var27 = var27.size;
                    var29 = var27 > var25;
                    var28 = 1;
                    var27 = var28;
                    if(!var29) { _fun0005_ip = 1098; continue _fun0005 }
 1078:
                    var29 = var16;
                    var30 = var29.size;
                    var29 = var10;
                    var29 = var29.size;
                    var27 = var30 / var29;
 1098:
                    var21 = var27;
                    var20 = var28 - var27;
                    var24 = var24.minSizeReductionPercent;
                    var23 = var24;
                    var26 = var26 != var24;
                    var24 = 0.1;
                    if(!var26) { _fun0005_ip = 1134; continue _fun0005 }
 1131:
                    var24 = var23;
 1134:
                    var17 = var24;
                    var23 = var20;
                    if(!(!(var23 < var24))) { _fun0005_ip = 1450; continue _fun0005 }
 1147:
                    var23 = var10;
                    var26 = var23.name;
                    var24 = var26.lastIndexOf;
                    var23 = '.';
                    var24 = var24.bind(var26)(var23);
                    var22 = var24;
                    var23 = -1;
                    if(!(var23 !== var24)) { _fun0005_ip = 1205; continue _fun0005 }
 1183:
                    var23 = var10;
                    var24 = var23.name;
                    var23 = var24.substring;
                    var26 = var23.bind(var24)(var25, var22);
                    _fun0005_ip = 1213; continue _fun0005;
 1205:
                    var22 = var10;
                    var26 = var22.name;
 1213:
                    var28 = var6.File;
                    var22 = var16;
                    var27 = new Array(1);
                    var27[0] = var22;
                    var23 = var6.HermesInternal;
                    var25 = var23.concat;
                    var24 = '';
                    var23 = '.webp';
                    var63 = var25.bind(var24)(var26, var23);
                    var24 = {};
                    var23 = 'image/webp';
                    var24['type'] = var23;
                    var23 = var10;
                    var25 = var23.lastModified;
                    var24['lastModified'] = var25;
                    var25 = var28.prototype;
                    var25 = Object.create(var25, {constructor: {value: var28}});
                    var65 = var25;
                    var64 = var27;
                    var62 = var24;
                    var24 = new var65[var28](var64, var63, var62, var61);
                    var24 = var24 instanceof Object ? var24 : var25;
                    var26 = var6.performance;
                    var25 = var26.now;
                    var25 = var25.bind(var26)();
                    var28 = var25 - var18;
                    var26 = _closure1_slot3;
                    var25 = var26.verbose;
                    var31 = var24.name;
                    var27 = var6.Math;
                    var18 = var27.round;
                    var62 = var18.bind(var27)(var28);
                    var18 = var6.HermesInternal;
                    var29 = var18.concat;
                    var65 = '[WebP] Conversion successful: ';
                    var63 = ' in ';
                    var61 = 'ms';
                    var64 = var31;
                    var18 = var65[var29](var64, var63, var62, var61, var60);
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
                    var18['compressionRatio'] = var21;
                    var18['hashTimeMs'] = var19;
 1447: // try_end4
                    return var18;
 1450: // try_start_5
                    var19 = _closure1_slot3;
                    var18 = var19.verbose;
                    var23 = var6.Math;
                    var22 = var23.round;
                    var21 = var20;
                    var20 = 100;
                    var21 = var20 * var21;
                    var64 = var22.bind(var23)(var21);
                    var62 = var20 * var17;
                    var17 = var6.HermesInternal;
                    var22 = var17.concat;
                    var65 = '[WebP] Insufficient savings: ';
                    var63 = '% < ';
                    var61 = '%';
                    var17 = var65[var22](var64, var63, var62, var61, var60);
                    var17 = var18.bind(var19)(var17);
                    var18 = var4;
                    var17 = _closure1_slot4;
                    var17 = var17.INSUFFICIENT_SAVINGS;
                    var16 = var16.size;
                    var16 = var18.bind(var5)(var17, var16);
 1550: // try_end5
                    return var16;
 1553:
                    return var15;
 1556: // try_start_6
                    var17 = var6.URL;
                    var16 = var17.revokeObjectURL;
                    var15 = var14;
                    var15 = var16.bind(var17)(var15);
 1576: // try_end6
                    return var13;
 1579: // try_start_7 // catch_target1
                    CatchBlockStart(arg_register=12);
                    var16 = var6.URL;
                    var15 = var16.revokeObjectURL;
                    var14 = var15.bind(var16)(var14);
                    throw var13;
 1600: // try_end7
                    return var12;
 1603: // try_start_8
                    var14 = var6.Error;
                    var12 = var14.prototype;
                    var13 = Object.create(var12, {constructor: {value: var14}});
                    var64 = 'failed to convert to webp';
                    var65 = var13;
                    var12 = new var65[var14](var64, var63);
                    var12 = var12 instanceof Object ? var12 : var13;
                    throw var12;
 1637: // try_end8
                    return var11;
 1640: // try_start_9
                    var13 = var6.URL;
                    var12 = var13.revokeObjectURL;
                    var11 = var9;
                    var11 = var12.bind(var13)(var11);
 1660: // try_end9
                    return var8;
 1663: // try_start_10 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var12 = var6.URL;
                    var11 = var12.revokeObjectURL;
                    var9 = var11.bind(var12)(var9);
                    throw var8;
 1684:
                    var11 = var6.Error;
                    var8 = var11.prototype;
                    var9 = Object.create(var8, {constructor: {value: var11}});
                    var64 = 'could not get canvas context';
                    var65 = var9;
                    var8 = new var65[var11](var64, var63);
                    var8 = var8 instanceof Object ? var8 : var9;
                    throw var8;
 1718: // try_end10
                    return var7;
 1721: // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6 // catch_target7 // catch_target8 // catch_target9 // catch_target10
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot3;
                    var7 = var8.error;
                    var12 = var10.name;
                    var6 = var6.HermesInternal;
                    var11 = var6.concat;
                    var10 = '[WebP] Conversion failed for ';
                    var6 = ':';
                    var6 = var11.bind(var10)(var12, var6);
                    var6 = var7.bind(var8)(var6, var9);
                    var3 = _closure1_slot4;
                    var3 = var3.CONVERSION_FAILED;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 1788:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var64 = 'file is null or undefined';
                    var65 = var4;
                    var3 = new var65[var5](var64, var63);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 1824:
                    return var2;
 1827:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _convertFilesToWebP() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot2;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    var4 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 219; continue _fun0007 }
 18:
                    var2 = undefined;
                    if(!(var4 === var2)) { _fun0007_ip = 26; continue _fun0007 }
 24:
                    var4 = {};
 26:
                    var _closure4_slot0 = var4;
                    SaveGenerator(address=34);
 32:
                    return var2;
 34:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 216; continue _fun0007 }
 43:
                    var9 = _closure1_slot3;
                    var8 = var9.verbose;
                    var12 = var7.length;
                    var4 = global;
                    var3 = var4.HermesInternal;
                    var11 = var3.concat;
                    var10 = '[WebP] Converting ';
                    var3 = ' files to WebP...';
                    var3 = var11.bind(var10)(var12, var3);
                    var3 = var8.bind(var9)(var3);
                    var9 = var4.Promise;
                    var8 = var9.all;
                    var10 = var7.map;
                    var3 = function(arg1) {
                        var4 = _closure1_slot12;
                        var3 = _closure4_slot0;
                        var2 = undefined;
                        var1 = arg1;
                        var1 = var4.bind(var2)(var1, var3);
                        return var1;
                    };
                    var3 = var10.bind(var7)(var3);
                    var3 = var8.bind(var9)(var3);
                    SaveGenerator(address=133);
 131:
                    return var3;
 133:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0007_ip = 213; continue _fun0007 }
 139:
                    var8 = var3.filter;
                    var6 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.success;
                        return var1;
                    };
                    var6 = var8.bind(var3)(var6);
                    var16 = var6.length;
                    var6 = _closure1_slot3;
                    var5 = var6.verbose;
                    var14 = var7.length;
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var17 = '[WebP] Batch conversion complete: ';
                    var15 = '/';
                    var13 = ' successful';
                    var4 = var17[var9](var16, var15, var14, var13, var12);
                    var4 = var5.bind(var6)(var4);
                    return var3;
 213:
                    return var3;
 216:
                    return var2;
 219:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var8 = global;
    var12 = var8.Object;
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
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var9[var7];
    var11 = var10.bind(var1)(var7);
    var7 = var11.prototype;
    var10 = Object.create(var7, {constructor: {value: var11}});
    var15 = 'WebP';
    var16 = var10;
    var7 = new var16[var11](var15, var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot3 = var7;
    var7 = {};
    var10 = 'file_too_small';
    var7['FILE_TOO_SMALL'] = var10;
    var10 = 'already_webp';
    var7['ALREADY_WEBP'] = var10;
    var10 = 'unsupported_format';
    var7['UNSUPPORTED_FORMAT'] = var10;
    var10 = 'animated_image';
    var7['ANIMATED_IMAGE'] = var10;
    var10 = 'insufficient_savings';
    var7['INSUFFICIENT_SAVINGS'] = var10;
    var10 = 'conversion_failed';
    var7['CONVERSION_FAILED'] = var10;
    var10 = 'corrupted_file';
    var7['CORRUPTED_FILE'] = var10;
    var10 = 'pixel_hash_mismatch';
    var7['PIXEL_HASH_MISMATCH'] = var10;
    var _closure1_slot4 = var7;
    var11 = var8.Uint8Array;
    var8 = var11.prototype;
    var10 = Object.create(var8, {constructor: {value: var11}});
    var15 = [137, 80, 78, 71, 13, 10, 26, 10];
    var16 = var10;
    var8 = new var16[var11](var15, var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot5 = var8;
    var8 = 3;
    var9 = var9[var8];
    var8 = require;
    var10 = var8.bind(var1)(var9);
    var9 = var10.fileFinishedImporting;
    var8 = 'lib/uploader/webpConversion.tsx';
    var8 = var9.bind(var10)(var8);
    var3['ConversionFailureReason'] = var7;
    var3['_isAnimatedPNG'] = var6;
    var3['_shouldConvertFile'] = var5;
    var3['convertToWebP'] = var4;
    var4 = function convertFilesToWebP() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['convertFilesToWebP'] = var4;
    var2 = function getBestFileForUpload(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = var2.success;
            if(!var1) { _fun0008_ip = 24; continue _fun0008 }
 12:
            var3 = var2.convertedFile;
            var1 = null;
            if(!(var1 == var3)) { _fun0008_ip = 32; continue _fun0008 }
 24:
            var1 = var2.originalFile;
            _fun0008_ip = 38; continue _fun0008;
 32:
            var1 = var2.convertedFile;
 38:
            return var1;
        }
    };
    var3['getBestFileForUpload'] = var2;
    return var1;
})();
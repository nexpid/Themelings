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
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 460; continue _fun0004 }
 13:
                    var2 = var3;
                    var4 = var3.type;
                    var3 = 'image/webp';
                    if(!(var3 !== var4)) { _fun0004_ip = 409; continue _fun0004 }
 34:
                    var5 = ['image/png'];
                    var4 = var5.includes;
                    var3 = var2;
                    var3 = var3.type;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0004_ip = 142; continue _fun0004 }
 65:
                    var6 = _closure1_slot3;
                    var5 = var6.verbose;
                    var3 = var2;
                    var9 = var3.type;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var3 = '[WebP] Unsupported format: ';
                    var3 = var8.bind(var3)(var9);
                    var3 = var5.bind(var6)(var3);
                    var3 = {};
                    var5 = false;
                    var3['should'] = var5;
                    var4 = _closure1_slot4;
                    var4 = var4.UNSUPPORTED_FORMAT;
                    var3['reason'] = var4;
                    return var3;
 142: // try_start_0
                    var5 = _closure1_slot7;
                    var3 = var2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    SaveGenerator(address=163);
 161:
                    return var2;
 163:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 232; continue _fun0004 }
 169:
                    if(var2) { _fun0004_ip = 184; continue _fun0004 }
 172: // try_end0
                    var3 = {};
                    var5 = true;
                    var3['should'] = var5;
                    return var3;
 184: // try_start_1
                    var6 = _closure1_slot3;
                    var5 = var6.verbose;
                    var3 = '[webp] png is animated (apng) - skipping conversion';
                    var3 = var5.bind(var6)(var3);
                    var3 = {};
                    var5 = false;
                    var3['should'] = var5;
                    var4 = _closure1_slot4;
                    var4 = var4.ANIMATED_IMAGE;
                    var3['reason'] = var4;
 229: // try_end1
                    return var3;
 232:
                    return var2;
 235: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var7 = var4;
                    var3 = global;
                    var2 = var3.Error;
                    var2 = var4 instanceof var2;
                    if(!var2) { _fun0004_ip = 282; continue _fun0004 }
 255:
                    var2 = var7;
                    var5 = var2.message;
                    var4 = var5.includes;
                    var2 = 'Corrupted PNG';
                    var2 = var4.bind(var5)(var2);
                    if(var2) { _fun0004_ip = 335; continue _fun0004 }
 282:
                    var8 = _closure1_slot3;
                    var6 = var8.warn;
                    var5 = var7;
                    var2 = '[WebP] Unexpected error during PNG analysis:';
                    var2 = var6.bind(var8)(var2, var5);
                    var2 = {};
                    var5 = false;
                    var2['should'] = var5;
                    var4 = _closure1_slot4;
                    var4 = var4.CONVERSION_FAILED;
                    var2['reason'] = var4;
                    _fun0004_ip = 406; continue _fun0004;
 335:
                    var6 = _closure1_slot3;
                    var5 = var6.warn;
                    var8 = var7.message;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var3 = '[WebP] PNG corruption detected: ';
                    var3 = var7.bind(var3)(var8);
                    var3 = var5.bind(var6)(var3);
                    var3 = {};
                    var5 = false;
                    var3['should'] = var5;
                    var4 = _closure1_slot4;
                    var4 = var4.CORRUPTED_FILE;
                    var3['reason'] = var4;
                    var2 = var3;
 406:
                    return var2;
 409:
                    var5 = _closure1_slot3;
                    var4 = var5.verbose;
                    var2 = '[WebP] File already WebP format';
                    var2 = var4.bind(var5)(var2);
                    var2 = {};
                    var4 = false;
                    var2['should'] = var4;
                    var3 = _closure1_slot4;
                    var3 = var3.ALREADY_WEBP;
                    var2['reason'] = var3;
                    return var2;
 460:
                    return var1;
                }
            };
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
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 1782; continue _fun0005 }
 15:
                    var9 = var2;
                    var _closure4_slot0 = var2;
                    var4 = undefined;
                    var18 = undefined;
                    var17 = undefined;
                    var _closure4_slot1 = var4;
                    var3 = undefined;
                    var7 = undefined;
                    var14 = undefined;
                    var _closure4_slot2 = var4;
                    var21 = undefined;
                    var10 = undefined;
                    var _closure4_slot3 = var4;
                    var8 = undefined;
                    var _closure4_slot4 = var4;
                    var15 = undefined;
                    var24 = undefined;
                    var25 = undefined;
                    var22 = undefined;
                    var _closure4_slot5 = var4;
                    var13 = undefined;
                    var _closure4_slot6 = var4;
                    var19 = undefined;
                    var16 = undefined;
                    var20 = undefined;
                    var11 = null;
                    if(!(var11 != var2)) { _fun0005_ip = 1746; continue _fun0005 }
 89:
                    var26 = _closure1_slot3;
                    var23 = var26.verbose;
                    var5 = var9;
                    var28 = var5.name;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var27 = var6.concat;
                    var6 = '[WebP] Starting conversion for: ';
                    var6 = var27.bind(var6)(var28);
                    var6 = var23.bind(var26)(var6);
                    var23 = var5.performance;
                    var6 = var23.now;
                    var6 = var6.bind(var23)();
                    var17 = var6;
                    _closure4_slot1 = var6;
                    var3 = function createFailedResult(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var5 = arguments[1];
                            var1 = undefined;
                            if(!(var5 === var1)) { _fun0006_ip = 21; continue _fun0006 }
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
                            if(!var4) { _fun0006_ip = 87; continue _fun0006 }
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
                    var23 = _closure1_slot9;
                    var6 = var9;
                    var6 = var23.bind(var4)(var6);
                    SaveGenerator(address=182);
 180:
                    return var6;
 182:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=22);
                    if(var23) { _fun0005_ip = 1676; continue _fun0005 }
 191:
                    var7 = var6;
                    var23 = var6.should;
                    if(var23) { _fun0005_ip = 263; continue _fun0005 }
 203:
                    var27 = _closure1_slot3;
                    var26 = var27.verbose;
                    var29 = var7.reason;
                    var23 = var5.HermesInternal;
                    var28 = var23.concat;
                    var23 = '[WebP] Conversion rejected: ';
                    var23 = var28.bind(var23)(var29);
                    var23 = var26.bind(var27)(var23);
                    var23 = var3;
                    var7 = var7.reason;
                    var7 = var23.bind(var4)(var7);
 260: // try_end2
                    return var7;
 263: // try_start_3
                    var26 = var5.document;
                    var23 = var26.createElement;
                    var7 = 'canvas';
                    var26 = var23.bind(var26)(var7);
                    var14 = var26;
                    _closure4_slot2 = var26;
                    var23 = var26.getContext;
                    var7 = '2d';
                    var7 = var23.bind(var26)(var7);
                    var21 = var7;
                    if(!(var11 != var7)) { _fun0005_ip = 1642; continue _fun0005 }
 318:
                    var7 = var5.Image;
                    var23 = var7.prototype;
                    var23 = Object.create(var23, {constructor: {value: var7}});
                    var60 = var23;
                    var7 = new var60[var7](var59);
                    var7 = var7 instanceof Object ? var7 : var23;
                    var10 = var7;
                    _closure4_slot3 = var7;
                    var26 = var5.URL;
                    var23 = var26.createObjectURL;
                    var7 = var9;
                    var7 = var23.bind(var26)(var7);
                    var8 = var7;
                    _closure4_slot4 = var7;
 378: // try_start_0
                    var26 = var5.Promise;
                    var7 = var26.prototype;
                    var23 = Object.create(var7, {constructor: {value: var26}});
                    var59 = function(arg1, arg2) {
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
                    var60 = var23;
                    var7 = new var60[var26](var59, var58);
                    var7 = var7 instanceof Object ? var7 : var23;
                    SaveGenerator(address=413);
 411:
                    return var7;
 413:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=22);
                    if(var23) { _fun0005_ip = 1598; continue _fun0005 }
 422:
                    var23 = var14;
                    var27 = var10;
                    var10 = var27.width;
                    var23['width'] = var10;
                    var10 = var27.height;
                    var23['height'] = var10;
                    var26 = var21;
                    var10 = var26.drawImage;
                    var23 = 0;
                    var10 = var10.bind(var26)(var27, var23, var23);
 468: // try_end0
                    var27 = var5.URL;
                    var26 = var27.revokeObjectURL;
                    var10 = var8;
                    var10 = var26.bind(var27)(var10);
                    var27 = var5.Promise;
                    var10 = var27.prototype;
                    var26 = Object.create(var10, {constructor: {value: var27}});
                    var59 = function(arg1) {
                        var5 = _closure4_slot2;
                        var4 = var5.toBlob;
                        var3 = arg1;
                        var2 = 'image/webp';
                        var1 = 1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var60 = var26;
                    var10 = new var60[var27](var59, var58);
                    var10 = var10 instanceof Object ? var10 : var26;
                    SaveGenerator(address=523);
 521:
                    return var10;
 523:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=25);
                    if(var26) { _fun0005_ip = 1595; continue _fun0005 }
 532:
                    var15 = var10;
                    if(!(var11 != var10)) { _fun0005_ip = 1561; continue _fun0005 }
 542:
                    var26 = var5.performance;
                    var11 = var26.now;
                    var24 = var11.bind(var26)();
                    var28 = var21;
                    var27 = var28.getImageData;
                    var11 = var14;
                    var57 = var11.width;
                    var56 = var11.height;
                    var60 = var28;
                    var59 = 0;
                    var58 = 0;
                    var11 = var60[var27](var59, var58, var57, var56, var55);
                    SaveGenerator(address=594);
 592:
                    return var11;
 594:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=25);
                    if(var26) { _fun0005_ip = 1558; continue _fun0005 }
 603:
                    var25 = var11;
                    var29 = var21;
                    var28 = var29.clearRect;
                    var26 = var14;
                    var57 = var26.width;
                    var56 = var26.height;
                    var60 = var29;
                    var59 = 0;
                    var58 = 0;
                    var26 = var60[var28](var59, var58, var57, var56, var55);
                    var26 = var5.Image;
                    var27 = var26.prototype;
                    var27 = Object.create(var27, {constructor: {value: var26}});
                    var60 = var27;
                    var26 = new var60[var26](var59);
                    var26 = var26 instanceof Object ? var26 : var27;
                    var22 = var26;
                    _closure4_slot5 = var26;
                    var28 = var5.URL;
                    var27 = var28.createObjectURL;
                    var26 = var15;
                    var26 = var27.bind(var28)(var26);
                    var13 = var26;
                    _closure4_slot6 = var26;
 699: // try_start_1
                    var27 = var5.Promise;
                    var26 = var27.prototype;
                    var26 = Object.create(var26, {constructor: {value: var27}});
                    var59 = function(arg1, arg2) {
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
                    var60 = var26;
                    var12 = new var60[var27](var59, var58);
                    var12 = var12 instanceof Object ? var12 : var26;
                    SaveGenerator(address=734);
 732:
                    return var12;
 734:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=25);
                    if(var26) { _fun0005_ip = 1514; continue _fun0005 }
 743:
                    var28 = var21;
                    var27 = var28.drawImage;
                    var26 = var22;
                    var26 = var27.bind(var28)(var26, var23, var23);
 762: // try_end1
                    var28 = var5.URL;
                    var27 = var28.revokeObjectURL;
                    var26 = var13;
                    var26 = var27.bind(var28)(var26);
                    var27 = var21;
                    var26 = var27.getImageData;
                    var57 = var14.width;
                    var56 = var14.height;
                    var60 = var27;
                    var59 = 0;
                    var58 = 0;
                    var14 = var60[var26](var59, var58, var57, var56, var55);
                    SaveGenerator(address=816);
 814:
                    return var14;
 816:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=20);
                    if(var21) { _fun0005_ip = 1511; continue _fun0005 }
 825:
                    var21 = _closure1_slot11;
                    var42 = var21.bind(var4)(var25);
                    var41 = var21.bind(var4)(var14);
                    var21 = var42 === var41;
                    var26 = var5.performance;
                    var25 = var26.now;
                    var25 = var25.bind(var26)();
                    var27 = var25 - var24;
                    var18 = var27;
                    var25 = _closure1_slot3;
                    var24 = var25.verbose;
                    var26 = var9;
                    var40 = var26.name;
                    var57 = var26.size;
                    var55 = var22.width;
                    var53 = var22.height;
                    var22 = var15;
                    var49 = var22.size;
                    var26 = var5.Math;
                    var22 = var26.round;
                    var43 = var22.bind(var26)(var27);
                    var22 = var5.HermesInternal;
                    var34 = var22.concat;
                    var60 = '[WebP] Pixel hash results: fileName=';
                    var58 = ' fileLength={';
                    var56 = '} width=';
                    var54 = ' height=';
                    var52 = ' pixelHash=';
                    var50 = ' mezzanineFileLength={';
                    var48 = '} mezzaninePixelHash=';
                    var46 = ' match=';
                    var44 = ' elapsed_ms=';
                    var59 = var40;
                    var51 = var42;
                    var47 = var41;
                    var45 = var21;
                    var22 = var60[var34](var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46, var45, var44, var43, var42);
                    var22 = var24.bind(var25)(var22);
                    if(var21) { _fun0005_ip = 1032; continue _fun0005 }
 1011:
                    var22 = var3;
                    var21 = _closure1_slot4;
                    var21 = var21.PIXEL_HASH_MISMATCH;
                    var21 = var22.bind(var4)(var21);
 1029: // try_end3
                    return var21;
 1032: // try_start_4
                    var21 = var9;
                    var21 = var21.size;
                    var24 = var21 > var23;
                    var22 = 1;
                    var21 = var22;
                    if(!var24) { _fun0005_ip = 1073; continue _fun0005 }
 1053:
                    var24 = var15;
                    var25 = var24.size;
                    var24 = var9;
                    var24 = var24.size;
                    var21 = var25 / var24;
 1073:
                    var19 = var21;
                    var21 = var22 - var21;
                    var16 = var21;
                    if(!(!(var21 < var23))) { _fun0005_ip = 1414; continue _fun0005 }
 1090:
                    var21 = var9;
                    var24 = var21.name;
                    var22 = var24.lastIndexOf;
                    var21 = '.';
                    var22 = var22.bind(var24)(var21);
                    var20 = var22;
                    var21 = -1;
                    if(!(var21 !== var22)) { _fun0005_ip = 1148; continue _fun0005 }
 1126:
                    var21 = var9;
                    var22 = var21.name;
                    var21 = var22.substring;
                    var24 = var21.bind(var22)(var23, var20);
                    _fun0005_ip = 1156; continue _fun0005;
 1148:
                    var20 = var9;
                    var24 = var20.name;
 1156:
                    var26 = var5.File;
                    var21 = var15;
                    var25 = new Array(1);
                    var25[0] = var21;
                    var20 = var5.HermesInternal;
                    var23 = var20.concat;
                    var22 = '';
                    var20 = '.webp';
                    var58 = var23.bind(var22)(var24, var20);
                    var20 = {};
                    var22 = 'image/webp';
                    var20['type'] = var22;
                    var22 = var9;
                    var23 = var22.lastModified;
                    var20['lastModified'] = var23;
                    var23 = var26.prototype;
                    var23 = Object.create(var23, {constructor: {value: var26}});
                    var60 = var23;
                    var59 = var25;
                    var57 = var20;
                    var20 = new var60[var26](var59, var58, var57, var56);
                    var23 = var20 instanceof Object ? var20 : var23;
                    var24 = var5.performance;
                    var20 = var24.now;
                    var20 = var20.bind(var24)();
                    var20 = var20 - var17;
                    var25 = _closure1_slot3;
                    var24 = var25.verbose;
                    var30 = var23.name;
                    var26 = var5.Math;
                    var17 = var26.round;
                    var57 = var17.bind(var26)(var20);
                    var17 = var5.HermesInternal;
                    var28 = var17.concat;
                    var60 = '[WebP] Conversion successful: ';
                    var58 = ' in ';
                    var56 = 'ms';
                    var59 = var30;
                    var17 = var60[var28](var59, var58, var57, var56, var55);
                    var17 = var24.bind(var25)(var17);
                    var17 = {};
                    var24 = true;
                    var17['success'] = var24;
                    var17['originalFile'] = var22;
                    var17['convertedFile'] = var23;
                    var22 = var22.size;
                    var17['sizeBefore'] = var22;
                    var21 = var21.size;
                    var17['sizeAfter'] = var21;
                    var17['compressionRatio'] = var19;
                    var17['hashTimeMs'] = var18;
                    var19 = var5.Math;
                    var18 = var19.round;
                    var18 = var18.bind(var19)(var20);
                    var17['compressTimeMs'] = var18;
 1411: // try_end4
                    return var17;
 1414: // try_start_5
                    var18 = _closure1_slot3;
                    var17 = var18.verbose;
                    var20 = var5.Math;
                    var19 = var20.round;
                    var21 = var16;
                    var16 = 100;
                    var16 = var16 * var21;
                    var21 = var19.bind(var20)(var16);
                    var16 = var5.HermesInternal;
                    var20 = var16.concat;
                    var19 = '[WebP] Insufficient savings: ';
                    var16 = '% < 0%';
                    var16 = var20.bind(var19)(var21, var16);
                    var16 = var17.bind(var18)(var16);
                    var17 = var3;
                    var16 = _closure1_slot4;
                    var16 = var16.INSUFFICIENT_SAVINGS;
                    var15 = var15.size;
                    var15 = var17.bind(var4)(var16, var15);
 1508: // try_end5
                    return var15;
 1511:
                    return var14;
 1514: // try_start_6
                    var16 = var5.URL;
                    var15 = var16.revokeObjectURL;
                    var14 = var13;
                    var14 = var15.bind(var16)(var14);
 1534: // try_end6
                    return var12;
 1537: // try_start_7 // catch_target1
                    CatchBlockStart(arg_register=11);
                    var15 = var5.URL;
                    var14 = var15.revokeObjectURL;
                    var13 = var14.bind(var15)(var13);
                    throw var12;
 1558: // try_end7
                    return var11;
 1561: // try_start_8
                    var13 = var5.Error;
                    var11 = var13.prototype;
                    var12 = Object.create(var11, {constructor: {value: var13}});
                    var59 = 'failed to convert to webp';
                    var60 = var12;
                    var11 = new var60[var13](var59, var58);
                    var11 = var11 instanceof Object ? var11 : var12;
                    throw var11;
 1595: // try_end8
                    return var10;
 1598: // try_start_9
                    var12 = var5.URL;
                    var11 = var12.revokeObjectURL;
                    var10 = var8;
                    var10 = var11.bind(var12)(var10);
 1618: // try_end9
                    return var7;
 1621: // try_start_10 // catch_target0
                    CatchBlockStart(arg_register=6);
                    var11 = var5.URL;
                    var10 = var11.revokeObjectURL;
                    var8 = var10.bind(var11)(var8);
                    throw var7;
 1642:
                    var10 = var5.Error;
                    var7 = var10.prototype;
                    var8 = Object.create(var7, {constructor: {value: var10}});
                    var59 = 'could not get canvas context';
                    var60 = var8;
                    var7 = new var60[var10](var59, var58);
                    var7 = var7 instanceof Object ? var7 : var8;
                    throw var7;
 1676: // try_end10
                    return var6;
 1679: // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6 // catch_target7 // catch_target8 // catch_target9 // catch_target10
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot3;
                    var6 = var7.error;
                    var11 = var9.name;
                    var5 = var5.HermesInternal;
                    var10 = var5.concat;
                    var9 = '[WebP] Conversion failed for ';
                    var5 = ':';
                    var5 = var10.bind(var9)(var11, var5);
                    var5 = var6.bind(var7)(var5, var8);
                    var2 = _closure1_slot4;
                    var2 = var2.CONVERSION_FAILED;
                    var2 = var3.bind(var4)(var2);
                    return var2;
 1746:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var59 = 'file is null or undefined';
                    var60 = var3;
                    var2 = new var60[var4](var59, var58);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
 1782:
                    return var1;
                }
            };
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
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 188; continue _fun0007 }
 15:
                    var8 = _closure1_slot3;
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
                        var3 = _closure1_slot12;
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
                    if(var7) { _fun0007_ip = 185; continue _fun0007 }
 111:
                    var7 = var2.filter;
                    var5 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.success;
                        return var1;
                    };
                    var5 = var7.bind(var2)(var5);
                    var15 = var5.length;
                    var5 = _closure1_slot3;
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
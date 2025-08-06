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
                    if(var3) { _fun0005_ip = 1817; continue _fun0005 }
 18:
                    var10 = var5;
                    var _closure4_slot0 = var5;
                    var5 = undefined;
                    if(!(var2 === var5)) { _fun0005_ip = 33; continue _fun0005 }
 31:
                    var2 = {};
 33:
                    var23 = var2;
                    var18 = undefined;
                    var4 = undefined;
                    var22 = undefined;
                    var8 = undefined;
                    var15 = undefined;
                    var _closure4_slot1 = var5;
                    var26 = undefined;
                    var11 = undefined;
                    var _closure4_slot2 = var5;
                    var9 = undefined;
                    var _closure4_slot3 = var5;
                    var16 = undefined;
                    var28 = undefined;
                    var29 = undefined;
                    var27 = undefined;
                    var _closure4_slot4 = var5;
                    var14 = undefined;
                    var _closure4_slot5 = var5;
                    var19 = undefined;
                    var20 = undefined;
                    var17 = undefined;
                    var21 = undefined;
                    SaveGenerator(address=94);
 92:
                    return var5;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 1814; continue _fun0005 }
 103:
                    var3 = var10;
                    var25 = null;
                    if(!(var25 != var3)) { _fun0005_ip = 1778; continue _fun0005 }
 115:
                    var24 = _closure1_slot3;
                    var12 = var24.verbose;
                    var6 = var10;
                    var31 = var6.name;
                    var6 = global;
                    var7 = var6.HermesInternal;
                    var30 = var7.concat;
                    var7 = '[WebP] Starting conversion for: ';
                    var7 = var30.bind(var7)(var31);
                    var7 = var12.bind(var24)(var7);
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
 185: // try_start_2
                    var24 = _closure1_slot9;
                    var12 = var10;
                    var7 = var23;
                    var7 = var24.bind(var5)(var12, var7);
                    SaveGenerator(address=205);
 203:
                    return var7;
 205:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 1708; continue _fun0005 }
 214:
                    var8 = var7;
                    var12 = var7.should;
                    if(var12) { _fun0005_ip = 286; continue _fun0005 }
 226:
                    var30 = _closure1_slot3;
                    var24 = var30.verbose;
                    var32 = var8.reason;
                    var12 = var6.HermesInternal;
                    var31 = var12.concat;
                    var12 = '[WebP] Conversion rejected: ';
                    var12 = var31.bind(var12)(var32);
                    var12 = var24.bind(var30)(var12);
                    var12 = var4;
                    var8 = var8.reason;
                    var8 = var12.bind(var5)(var8);
 283: // try_end2
                    return var8;
 286: // try_start_3
                    var24 = var6.document;
                    var12 = var24.createElement;
                    var8 = 'canvas';
                    var24 = var12.bind(var24)(var8);
                    var15 = var24;
                    _closure4_slot1 = var24;
                    var12 = var24.getContext;
                    var8 = '2d';
                    var8 = var12.bind(var24)(var8);
                    var26 = var8;
                    if(!(var25 != var8)) { _fun0005_ip = 1674; continue _fun0005 }
 341:
                    var8 = var6.Image;
                    var12 = var8.prototype;
                    var12 = Object.create(var12, {constructor: {value: var8}});
                    var64 = var12;
                    var8 = new var64[var8](var63);
                    var8 = var8 instanceof Object ? var8 : var12;
                    var11 = var8;
                    _closure4_slot2 = var8;
                    var24 = var6.URL;
                    var12 = var24.createObjectURL;
                    var8 = var10;
                    var8 = var12.bind(var24)(var8);
                    var9 = var8;
                    _closure4_slot3 = var8;
 401: // try_start_0
                    var24 = var6.Promise;
                    var8 = var24.prototype;
                    var12 = Object.create(var8, {constructor: {value: var24}});
                    var63 = function(arg1, arg2) {
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
                    var64 = var12;
                    var8 = new var64[var24](var63, var62);
                    var8 = var8 instanceof Object ? var8 : var12;
                    SaveGenerator(address=436);
 434:
                    return var8;
 436:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 1630; continue _fun0005 }
 445:
                    var12 = var15;
                    var30 = var11;
                    var11 = var30.width;
                    var12['width'] = var11;
                    var11 = var30.height;
                    var12['height'] = var11;
                    var12 = var26;
                    var11 = var12.drawImage;
                    var24 = 0;
                    var11 = var11.bind(var12)(var30, var24, var24);
 491: // try_end0
                    var30 = var6.URL;
                    var12 = var30.revokeObjectURL;
                    var11 = var9;
                    var11 = var12.bind(var30)(var11);
                    var30 = var6.Promise;
                    var11 = var30.prototype;
                    var12 = Object.create(var11, {constructor: {value: var30}});
                    var63 = function(arg1) {
                        var5 = _closure4_slot1;
                        var4 = var5.toBlob;
                        var3 = arg1;
                        var2 = 'image/webp';
                        var1 = 1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var64 = var12;
                    var11 = new var64[var30](var63, var62);
                    var11 = var11 instanceof Object ? var11 : var12;
                    SaveGenerator(address=546);
 544:
                    return var11;
 546:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0005_ip = 1627; continue _fun0005 }
 555:
                    var16 = var11;
                    if(!(var25 != var11)) { _fun0005_ip = 1593; continue _fun0005 }
 565:
                    var30 = var6.performance;
                    var12 = var30.now;
                    var28 = var12.bind(var30)();
                    var32 = var26;
                    var31 = var32.getImageData;
                    var12 = var15;
                    var61 = var12.width;
                    var60 = var12.height;
                    var64 = var32;
                    var63 = 0;
                    var62 = 0;
                    var12 = var64[var31](var63, var62, var61, var60, var59);
                    SaveGenerator(address=617);
 615:
                    return var12;
 617:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=29);
                    if(var30) { _fun0005_ip = 1590; continue _fun0005 }
 626:
                    var29 = var12;
                    var33 = var26;
                    var32 = var33.clearRect;
                    var30 = var15;
                    var61 = var30.width;
                    var60 = var30.height;
                    var64 = var33;
                    var63 = 0;
                    var62 = 0;
                    var30 = var64[var32](var63, var62, var61, var60, var59);
                    var30 = var6.Image;
                    var31 = var30.prototype;
                    var31 = Object.create(var31, {constructor: {value: var30}});
                    var64 = var31;
                    var30 = new var64[var30](var63);
                    var30 = var30 instanceof Object ? var30 : var31;
                    var27 = var30;
                    _closure4_slot4 = var30;
                    var32 = var6.URL;
                    var31 = var32.createObjectURL;
                    var30 = var16;
                    var30 = var31.bind(var32)(var30);
                    var14 = var30;
                    _closure4_slot5 = var30;
 722: // try_start_1
                    var31 = var6.Promise;
                    var30 = var31.prototype;
                    var30 = Object.create(var30, {constructor: {value: var31}});
                    var63 = function(arg1, arg2) {
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
                    var64 = var30;
                    var13 = new var64[var31](var63, var62);
                    var13 = var13 instanceof Object ? var13 : var30;
                    SaveGenerator(address=757);
 755:
                    return var13;
 757:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=29);
                    if(var30) { _fun0005_ip = 1546; continue _fun0005 }
 766:
                    var32 = var26;
                    var31 = var32.drawImage;
                    var30 = var27;
                    var30 = var31.bind(var32)(var30, var24, var24);
 785: // try_end1
                    var32 = var6.URL;
                    var31 = var32.revokeObjectURL;
                    var30 = var14;
                    var30 = var31.bind(var32)(var30);
                    var31 = var26;
                    var30 = var31.getImageData;
                    var61 = var15.width;
                    var60 = var15.height;
                    var64 = var31;
                    var63 = 0;
                    var62 = 0;
                    var15 = var64[var30](var63, var62, var61, var60, var59);
                    SaveGenerator(address=839);
 837:
                    return var15;
 839:
                    ResumeGenerator(result_out_reg=14, return_bool_out_reg=25);
                    if(var26) { _fun0005_ip = 1543; continue _fun0005 }
 848:
                    var26 = _closure1_slot11;
                    var46 = var26.bind(var5)(var29);
                    var45 = var26.bind(var5)(var15);
                    var26 = var46 === var45;
                    var30 = var6.performance;
                    var29 = var30.now;
                    var29 = var29.bind(var30)();
                    var31 = var29 - var28;
                    var29 = _closure1_slot3;
                    var28 = var29.verbose;
                    var30 = var10;
                    var44 = var30.name;
                    var61 = var30.size;
                    var59 = var27.width;
                    var57 = var27.height;
                    var27 = var16;
                    var53 = var27.size;
                    var30 = var6.Math;
                    var27 = var30.round;
                    var47 = var27.bind(var30)(var31);
                    var27 = var6.HermesInternal;
                    var38 = var27.concat;
                    var64 = '[WebP] Pixel hash results: fileName=';
                    var62 = ' fileLength={';
                    var60 = '} width=';
                    var58 = ' height=';
                    var56 = ' pixelHash=';
                    var54 = ' mezzanineFileLength={';
                    var52 = '} mezzaninePixelHash=';
                    var50 = ' match=';
                    var48 = ' elapsed_ms=';
                    var63 = var44;
                    var55 = var46;
                    var51 = var45;
                    var49 = var26;
                    var27 = var64[var38](var63, var62, var61, var60, var59, var58, var57, var56, var55, var54, var53, var52, var51, var50, var49, var48, var47, var46);
                    var27 = var28.bind(var29)(var27);
                    if(var26) { _fun0005_ip = 1052; continue _fun0005 }
 1031:
                    var27 = var4;
                    var26 = _closure1_slot4;
                    var26 = var26.PIXEL_HASH_MISMATCH;
                    var26 = var27.bind(var5)(var26);
 1049: // try_end3
                    return var26;
 1052: // try_start_4
                    var26 = var10;
                    var26 = var26.size;
                    var28 = var26 > var24;
                    var27 = 1;
                    var26 = var27;
                    if(!var28) { _fun0005_ip = 1093; continue _fun0005 }
 1073:
                    var28 = var16;
                    var29 = var28.size;
                    var28 = var10;
                    var28 = var28.size;
                    var26 = var29 / var28;
 1093:
                    var19 = var26;
                    var20 = var27 - var26;
                    var23 = var23.minSizeReductionPercent;
                    var22 = var23;
                    var25 = var25 != var23;
                    var23 = 0.1;
                    if(!var25) { _fun0005_ip = 1129; continue _fun0005 }
 1126:
                    var23 = var22;
 1129:
                    var17 = var23;
                    var22 = var20;
                    if(!(!(var22 < var23))) { _fun0005_ip = 1440; continue _fun0005 }
 1142:
                    var22 = var10;
                    var25 = var22.name;
                    var23 = var25.lastIndexOf;
                    var22 = '.';
                    var23 = var23.bind(var25)(var22);
                    var21 = var23;
                    var22 = -1;
                    if(!(var22 !== var23)) { _fun0005_ip = 1200; continue _fun0005 }
 1178:
                    var22 = var10;
                    var23 = var22.name;
                    var22 = var23.substring;
                    var25 = var22.bind(var23)(var24, var21);
                    _fun0005_ip = 1208; continue _fun0005;
 1200:
                    var21 = var10;
                    var25 = var21.name;
 1208:
                    var27 = var6.File;
                    var21 = var16;
                    var26 = new Array(1);
                    var26[0] = var21;
                    var22 = var6.HermesInternal;
                    var24 = var22.concat;
                    var23 = '';
                    var22 = '.webp';
                    var62 = var24.bind(var23)(var25, var22);
                    var23 = {};
                    var22 = 'image/webp';
                    var23['type'] = var22;
                    var22 = var10;
                    var24 = var22.lastModified;
                    var23['lastModified'] = var24;
                    var24 = var27.prototype;
                    var24 = Object.create(var24, {constructor: {value: var27}});
                    var64 = var24;
                    var63 = var26;
                    var61 = var23;
                    var23 = new var64[var27](var63, var62, var61, var60);
                    var23 = var23 instanceof Object ? var23 : var24;
                    var25 = var6.performance;
                    var24 = var25.now;
                    var24 = var24.bind(var25)();
                    var27 = var24 - var18;
                    var25 = _closure1_slot3;
                    var24 = var25.verbose;
                    var30 = var23.name;
                    var26 = var6.Math;
                    var18 = var26.round;
                    var61 = var18.bind(var26)(var27);
                    var18 = var6.HermesInternal;
                    var28 = var18.concat;
                    var64 = '[WebP] Conversion successful: ';
                    var62 = ' in ';
                    var60 = 'ms';
                    var63 = var30;
                    var18 = var64[var28](var63, var62, var61, var60, var59);
                    var18 = var24.bind(var25)(var18);
                    var18 = {};
                    var24 = true;
                    var18['success'] = var24;
                    var18['originalFile'] = var22;
                    var18['convertedFile'] = var23;
                    var22 = var22.size;
                    var18['sizeBefore'] = var22;
                    var21 = var21.size;
                    var18['sizeAfter'] = var21;
                    var18['compressionRatio'] = var19;
 1437: // try_end4
                    return var18;
 1440: // try_start_5
                    var19 = _closure1_slot3;
                    var18 = var19.verbose;
                    var23 = var6.Math;
                    var22 = var23.round;
                    var21 = var20;
                    var20 = 100;
                    var21 = var20 * var21;
                    var63 = var22.bind(var23)(var21);
                    var61 = var20 * var17;
                    var17 = var6.HermesInternal;
                    var22 = var17.concat;
                    var64 = '[WebP] Insufficient savings: ';
                    var62 = '% < ';
                    var60 = '%';
                    var17 = var64[var22](var63, var62, var61, var60, var59);
                    var17 = var18.bind(var19)(var17);
                    var18 = var4;
                    var17 = _closure1_slot4;
                    var17 = var17.INSUFFICIENT_SAVINGS;
                    var16 = var16.size;
                    var16 = var18.bind(var5)(var17, var16);
 1540: // try_end5
                    return var16;
 1543:
                    return var15;
 1546: // try_start_6
                    var17 = var6.URL;
                    var16 = var17.revokeObjectURL;
                    var15 = var14;
                    var15 = var16.bind(var17)(var15);
 1566: // try_end6
                    return var13;
 1569: // try_start_7 // catch_target1
                    CatchBlockStart(arg_register=12);
                    var16 = var6.URL;
                    var15 = var16.revokeObjectURL;
                    var14 = var15.bind(var16)(var14);
                    throw var13;
 1590: // try_end7
                    return var12;
 1593: // try_start_8
                    var14 = var6.Error;
                    var12 = var14.prototype;
                    var13 = Object.create(var12, {constructor: {value: var14}});
                    var63 = 'failed to convert to webp';
                    var64 = var13;
                    var12 = new var64[var14](var63, var62);
                    var12 = var12 instanceof Object ? var12 : var13;
                    throw var12;
 1627: // try_end8
                    return var11;
 1630: // try_start_9
                    var13 = var6.URL;
                    var12 = var13.revokeObjectURL;
                    var11 = var9;
                    var11 = var12.bind(var13)(var11);
 1650: // try_end9
                    return var8;
 1653: // try_start_10 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var12 = var6.URL;
                    var11 = var12.revokeObjectURL;
                    var9 = var11.bind(var12)(var9);
                    throw var8;
 1674:
                    var11 = var6.Error;
                    var8 = var11.prototype;
                    var9 = Object.create(var8, {constructor: {value: var11}});
                    var63 = 'could not get canvas context';
                    var64 = var9;
                    var8 = new var64[var11](var63, var62);
                    var8 = var8 instanceof Object ? var8 : var9;
                    throw var8;
 1708: // try_end10
                    return var7;
 1711: // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6 // catch_target7 // catch_target8 // catch_target9 // catch_target10
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
 1778:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var63 = 'file is null or undefined';
                    var64 = var4;
                    var3 = new var64[var5](var63, var62);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 1814:
                    return var2;
 1817:
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
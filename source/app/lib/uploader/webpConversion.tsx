// app/lib/uploader/webpConversion.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var10 = native3;
    var3 = native6;
    var9 = native7;
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
    var _closure1_slot4 = var1;
    var6 = function _isAnimatedPNG() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var6;
    var1 = function _isAnimatedPNG2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
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
                        var4 = _closure1_slot0;
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
                        var2 = _closure1_slot3;
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
                    var21 = _closure1_slot4;
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
                    var6 = _closure1_slot1;
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
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var5 = function _shouldConvertFile() {
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
    var1 = function _shouldConvertFile2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
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
                    var8 = _closure1_slot1;
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
                    var5 = _closure1_slot2;
                    var5 = var5.UNSUPPORTED_FORMAT;
                    var4['reason'] = var5;
                    return var4;
 205: // try_start_0
                    var5 = _closure1_slot5;
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
                    var8 = _closure1_slot1;
                    var7 = var8.verbose;
                    var5 = '[webp] png is animated (apng) - skipping conversion';
                    var5 = var7.bind(var8)(var5);
                    var5 = {};
                    var7 = false;
                    var5['should'] = var7;
                    var6 = _closure1_slot2;
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
                    var11 = _closure1_slot1;
                    var8 = var11.warn;
                    var7 = var9;
                    var4 = '[WebP] Unexpected error during PNG analysis:';
                    var4 = var8.bind(var11)(var4, var7);
                    var4 = {};
                    var7 = false;
                    var4['should'] = var7;
                    var6 = _closure1_slot2;
                    var6 = var6.CONVERSION_FAILED;
                    var4['reason'] = var6;
                    _fun0004_ip = 467; continue _fun0004;
 396:
                    var8 = _closure1_slot1;
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
                    var6 = _closure1_slot2;
                    var6 = var6.CORRUPTED_FILE;
                    var5['reason'] = var6;
                    var4 = var5;
 467:
                    return var4;
 470:
                    var7 = _closure1_slot1;
                    var6 = var7.verbose;
                    var4 = '[WebP] File already WebP format';
                    var4 = var6.bind(var7)(var4);
                    var4 = {};
                    var6 = false;
                    var4['should'] = var6;
                    var5 = _closure1_slot2;
                    var5 = var5.ALREADY_WEBP;
                    var4['reason'] = var5;
                    return var4;
 521:
                    var6 = _closure1_slot1;
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
                    var4 = _closure1_slot2;
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
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var4 = function convertToWebP() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = function _convertToWebP() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    var2 = arguments[1];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 1261; continue _fun0005 }
 18:
                    var10 = var5;
                    var _closure4_slot0 = var5;
                    var5 = undefined;
                    if(!(var2 === var5)) { _fun0005_ip = 33; continue _fun0005 }
 31:
                    var2 = {};
 33:
                    var19 = var2;
                    var14 = undefined;
                    var4 = undefined;
                    var18 = undefined;
                    var8 = undefined;
                    var23 = undefined;
                    var _closure4_slot1 = var5;
                    var20 = undefined;
                    var22 = undefined;
                    var _closure4_slot2 = var5;
                    var9 = undefined;
                    var _closure4_slot3 = var5;
                    var12 = undefined;
                    var15 = undefined;
                    var16 = undefined;
                    var13 = undefined;
                    var17 = undefined;
                    SaveGenerator(address=78);
 76:
                    return var5;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 1258; continue _fun0005 }
 87:
                    var3 = var10;
                    var21 = null;
                    if(!(var21 != var3)) { _fun0005_ip = 1222; continue _fun0005 }
 99:
                    var25 = _closure1_slot1;
                    var24 = var25.verbose;
                    var6 = var10;
                    var27 = var6.name;
                    var6 = global;
                    var7 = var6.HermesInternal;
                    var26 = var7.concat;
                    var7 = '[WebP] Starting conversion for: ';
                    var7 = var26.bind(var7)(var27);
                    var7 = var24.bind(var25)(var7);
                    var24 = var6.performance;
                    var7 = var24.now;
                    var14 = var7.bind(var24)();
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
 169: // try_start_1
                    var25 = _closure1_slot7;
                    var24 = var10;
                    var7 = var19;
                    var7 = var25.bind(var5)(var24, var7);
                    SaveGenerator(address=189);
 187:
                    return var7;
 189:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=23);
                    if(var24) { _fun0005_ip = 1152; continue _fun0005 }
 198:
                    var8 = var7;
                    var24 = var7.should;
                    if(var24) { _fun0005_ip = 270; continue _fun0005 }
 210:
                    var26 = _closure1_slot1;
                    var25 = var26.verbose;
                    var28 = var8.reason;
                    var24 = var6.HermesInternal;
                    var27 = var24.concat;
                    var24 = '[WebP] Conversion rejected: ';
                    var24 = var27.bind(var24)(var28);
                    var24 = var25.bind(var26)(var24);
                    var24 = var4;
                    var8 = var8.reason;
                    var8 = var24.bind(var5)(var8);
 267: // try_end1
                    return var8;
 270: // try_start_2
                    var25 = var6.document;
                    var24 = var25.createElement;
                    var8 = 'canvas';
                    var25 = var24.bind(var25)(var8);
                    var23 = var25;
                    _closure4_slot1 = var25;
                    var24 = var25.getContext;
                    var8 = '2d';
                    var8 = var24.bind(var25)(var8);
                    var20 = var8;
                    if(!(var21 != var8)) { _fun0005_ip = 1118; continue _fun0005 }
 325:
                    var8 = var6.Image;
                    var24 = var8.prototype;
                    var24 = Object.create(var24, {constructor: {value: var8}});
                    var33 = var24;
                    var8 = new var33[var8](var32);
                    var8 = var8 instanceof Object ? var8 : var24;
                    var22 = var8;
                    _closure4_slot2 = var8;
                    var25 = var6.URL;
                    var24 = var25.createObjectURL;
                    var8 = var10;
                    var8 = var24.bind(var25)(var8);
                    var9 = var8;
                    _closure4_slot3 = var8;
 385: // try_start_0
                    var25 = var6.Promise;
                    var8 = var25.prototype;
                    var24 = Object.create(var8, {constructor: {value: var25}});
                    var32 = function(arg1, arg2) {
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
                    var33 = var24;
                    var8 = new var33[var25](var32, var31);
                    var8 = var8 instanceof Object ? var8 : var24;
                    SaveGenerator(address=420);
 418:
                    return var8;
 420:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=23);
                    if(var24) { _fun0005_ip = 1074; continue _fun0005 }
 429:
                    var24 = var22;
                    var22 = var24.width;
                    var23['width'] = var22;
                    var22 = var24.height;
                    var23['height'] = var22;
                    var23 = var20;
                    var22 = var23.drawImage;
                    var20 = 0;
                    var22 = var22.bind(var23)(var24, var20, var20);
 472: // try_end0
                    var24 = var6.URL;
                    var23 = var24.revokeObjectURL;
                    var22 = var9;
                    var22 = var23.bind(var24)(var22);
                    var23 = var6.Promise;
                    var22 = var23.prototype;
                    var22 = Object.create(var22, {constructor: {value: var23}});
                    var32 = function(arg1) {
                        var5 = _closure4_slot1;
                        var4 = var5.toBlob;
                        var3 = arg1;
                        var2 = 'image/webp';
                        var1 = 1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var33 = var22;
                    var11 = new var33[var23](var32, var31);
                    var11 = var11 instanceof Object ? var11 : var22;
                    SaveGenerator(address=527);
 525:
                    return var11;
 527:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=21);
                    if(var22) { _fun0005_ip = 1071; continue _fun0005 }
 536:
                    var12 = var11;
                    if(!(var21 != var11)) { _fun0005_ip = 1037; continue _fun0005 }
 546:
                    var22 = var10;
                    var22 = var22.size;
                    var24 = var22 > var20;
                    var23 = 1;
                    var22 = var23;
                    if(!var24) { _fun0005_ip = 587; continue _fun0005 }
 567:
                    var24 = var12;
                    var25 = var24.size;
                    var24 = var10;
                    var24 = var24.size;
                    var22 = var25 / var24;
 587:
                    var15 = var22;
                    var16 = var23 - var22;
                    var19 = var19.minSizeReductionPercent;
                    var18 = var19;
                    var21 = var21 != var19;
                    var19 = 0.1;
                    if(!var21) { _fun0005_ip = 623; continue _fun0005 }
 620:
                    var19 = var18;
 623:
                    var13 = var19;
                    var18 = var16;
                    if(!(!(var18 < var19))) { _fun0005_ip = 934; continue _fun0005 }
 636:
                    var18 = var10;
                    var21 = var18.name;
                    var19 = var21.lastIndexOf;
                    var18 = '.';
                    var19 = var19.bind(var21)(var18);
                    var17 = var19;
                    var18 = -1;
                    if(!(var18 !== var19)) { _fun0005_ip = 694; continue _fun0005 }
 672:
                    var18 = var10;
                    var19 = var18.name;
                    var18 = var19.substring;
                    var21 = var18.bind(var19)(var20, var17);
                    _fun0005_ip = 702; continue _fun0005;
 694:
                    var17 = var10;
                    var21 = var17.name;
 702:
                    var23 = var6.File;
                    var17 = var12;
                    var22 = new Array(1);
                    var22[0] = var17;
                    var18 = var6.HermesInternal;
                    var20 = var18.concat;
                    var19 = '';
                    var18 = '.webp';
                    var31 = var20.bind(var19)(var21, var18);
                    var19 = {};
                    var18 = 'image/webp';
                    var19['type'] = var18;
                    var18 = var10;
                    var20 = var18.lastModified;
                    var19['lastModified'] = var20;
                    var20 = var23.prototype;
                    var20 = Object.create(var20, {constructor: {value: var23}});
                    var33 = var20;
                    var32 = var22;
                    var30 = var19;
                    var19 = new var33[var23](var32, var31, var30, var29);
                    var19 = var19 instanceof Object ? var19 : var20;
                    var21 = var6.performance;
                    var20 = var21.now;
                    var20 = var20.bind(var21)();
                    var23 = var20 - var14;
                    var21 = _closure1_slot1;
                    var20 = var21.verbose;
                    var26 = var19.name;
                    var22 = var6.Math;
                    var14 = var22.round;
                    var30 = var14.bind(var22)(var23);
                    var14 = var6.HermesInternal;
                    var24 = var14.concat;
                    var33 = '[WebP] Conversion successful: ';
                    var31 = ' in ';
                    var29 = 'ms';
                    var32 = var26;
                    var14 = var33[var24](var32, var31, var30, var29, var28);
                    var14 = var20.bind(var21)(var14);
                    var14 = {};
                    var20 = true;
                    var14['success'] = var20;
                    var14['originalFile'] = var18;
                    var14['convertedFile'] = var19;
                    var18 = var18.size;
                    var14['sizeBefore'] = var18;
                    var17 = var17.size;
                    var14['sizeAfter'] = var17;
                    var14['compressionRatio'] = var15;
 931: // try_end2
                    return var14;
 934: // try_start_3
                    var15 = _closure1_slot1;
                    var14 = var15.verbose;
                    var19 = var6.Math;
                    var18 = var19.round;
                    var17 = var16;
                    var16 = 100;
                    var17 = var16 * var17;
                    var32 = var18.bind(var19)(var17);
                    var30 = var16 * var13;
                    var13 = var6.HermesInternal;
                    var18 = var13.concat;
                    var33 = '[WebP] Insufficient savings: ';
                    var31 = '% < ';
                    var29 = '%';
                    var13 = var33[var18](var32, var31, var30, var29, var28);
                    var13 = var14.bind(var15)(var13);
                    var14 = var4;
                    var13 = _closure1_slot2;
                    var13 = var13.INSUFFICIENT_SAVINGS;
                    var12 = var12.size;
                    var12 = var14.bind(var5)(var13, var12);
 1034: // try_end3
                    return var12;
 1037: // try_start_4
                    var14 = var6.Error;
                    var12 = var14.prototype;
                    var13 = Object.create(var12, {constructor: {value: var14}});
                    var32 = 'failed to convert to webp';
                    var33 = var13;
                    var12 = new var33[var14](var32, var31);
                    var12 = var12 instanceof Object ? var12 : var13;
                    throw var12;
 1071: // try_end4
                    return var11;
 1074: // try_start_5
                    var13 = var6.URL;
                    var12 = var13.revokeObjectURL;
                    var11 = var9;
                    var11 = var12.bind(var13)(var11);
 1094: // try_end5
                    return var8;
 1097: // try_start_6 // catch_target0
                    CatchBlockStart(arg_register=7);
                    var12 = var6.URL;
                    var11 = var12.revokeObjectURL;
                    var9 = var11.bind(var12)(var9);
                    throw var8;
 1118:
                    var11 = var6.Error;
                    var8 = var11.prototype;
                    var9 = Object.create(var8, {constructor: {value: var11}});
                    var32 = 'could not get canvas context';
                    var33 = var9;
                    var8 = new var33[var11](var32, var31);
                    var8 = var8 instanceof Object ? var8 : var9;
                    throw var8;
 1152: // try_end6
                    return var7;
 1155: // catch_target1 // catch_target2 // catch_target3 // catch_target4 // catch_target5 // catch_target6
                    CatchBlockStart(arg_register=8);
                    var8 = _closure1_slot1;
                    var7 = var8.error;
                    var12 = var10.name;
                    var6 = var6.HermesInternal;
                    var11 = var6.concat;
                    var10 = '[WebP] Conversion failed for ';
                    var6 = ':';
                    var6 = var11.bind(var10)(var12, var6);
                    var6 = var7.bind(var8)(var6, var9);
                    var3 = _closure1_slot2;
                    var3 = var3.CONVERSION_FAILED;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 1222:
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var32 = 'file is null or undefined';
                    var33 = var4;
                    var3 = new var33[var5](var32, var31);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
 1258:
                    return var2;
 1261:
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
    var1 = function _convertFilesToWebP() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot0;
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
                    var9 = _closure1_slot1;
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
                        var4 = _closure1_slot9;
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
                    var6 = _closure1_slot1;
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
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
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
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var9[var7];
    var11 = var10.bind(var1)(var7);
    var7 = var11.prototype;
    var10 = Object.create(var7, {constructor: {value: var11}});
    var15 = 'WebP';
    var16 = var10;
    var7 = new var16[var11](var15, var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot1 = var7;
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
    var _closure1_slot2 = var7;
    var11 = var8.Uint8Array;
    var8 = var11.prototype;
    var10 = Object.create(var8, {constructor: {value: var11}});
    var15 = [137, 80, 78, 71, 13, 10, 26, 10];
    var16 = var10;
    var8 = new var16[var11](var15, var14);
    var8 = var8 instanceof Object ? var8 : var10;
    var _closure1_slot3 = var8;
    var8 = 2;
    var9 = var9[var8];
    var8 = native2;
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
        var4 = _closure1_slot11;
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
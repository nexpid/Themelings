// app/lib/uploader/webpConversion.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
    var4 = function _shouldConvertToWebP() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var4;
    var1 = function _shouldConvertToWebP2() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = var6;
                    var _closure4_slot0 = var6;
                    var8 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    var7 = var6.type;
                    var6 = 'image/webp';
                    if(!(var6 !== var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var9 = ['image/png'];
                    var7 = var9.includes;
                    var6 = var2;
                    var6 = var6.type;
                    var6 = var7.bind(var9)(var6);
                    if(var6) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var10 = _closure1_slot4;
                    var9 = var10.verbose;
                    var7 = var2;
                    var12 = var7.type;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var11 = var7.concat;
                    var7 = '[WebP] Unsupported format: ';
                    var7 = var11.bind(var7)(var12);
                    var7 = var9.bind(var10)(var7);
                    var6 = _closure1_slot5;
                    var6 = var6.UNSUPPORTED_FORMAT;
                    return var6;
case 6: // try_start_0
                    var6 = var2;
                    var6 = var6.arrayBuffer;
                    var7 = 'function';
                    var6 = typeof var6;
                    if(!(var7 !== var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var6 = global;
                    var7 = var6.Promise;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var14 = function(arg1, arg2) {
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
                    var15 = var6;
                    var3 = new var15[var7](var14, var13);
                    var6 = var3 instanceof Object ? var3 : var6;
                    SaveGenerator(address=197);
case 10:
                    return var6;
case 11:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=2);
                    var7 = var3;
                    var3 = var6;
                    if(!var7) { _fun0001_ip = 12; continue _fun0001 }
case 13: // try_end0
                    return var6;
case 8: // try_start_1
                    var6 = var2;
                    var2 = var6.arrayBuffer;
                    var2 = var2.bind(var6)();
                    SaveGenerator(address=229);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    var3 = var2;
                    if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 12:
                    var5 = var3;
case 17: // try_start_2 // try_end1
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 2;
                    var6 = var9[var6];
                    var6 = var7.bind(var8)(var6);
                    var7 = var6.DiscordImageFactory;
                    var6 = var7.create;
                    var6 = var6.bind(var7)(var5);
                    var4 = var6;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var7 = var4;
                    var6 = var7.hasTransparency;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    var7 = var4;
                    var6 = var7.isAnimated;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0001_ip = 22; continue _fun0001 }
case 23:
                    var7 = var4;
                    var6 = var7.isPng8;
                    var6 = var6.bind(var7)();
                    if(var6) { _fun0001_ip = 24; continue _fun0001 }
case 25: // try_start_3 // try_end2
                    var6 = var4;
                    var4 = var6.hasSrgbIccProfile;
                    var4 = var4.bind(var6)();
                    SaveGenerator(address=372);
case 26:
                    return var4;
case 27:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 28; continue _fun0001 }
case 29:
                    if(var4) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var6 = _closure1_slot5;
                    var6 = var6.ICC_NON_SRGB_PROFILE;
case 32: // try_end3
                    return var6;
case 30:
                    return var5;
case 28:
                    return var4;
case 33: // catch_target3
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot4;
                    var5 = var6.warn;
                    var4 = '[WebP] ICC profile detection failed:';
                    var4 = var5.bind(var6)(var4, var7);
                    var4 = _closure1_slot5;
                    var4 = var4.ICC_DETECTION_FAILED;
                    return var4;
case 24: // try_start_4
                    var6 = _closure1_slot4;
                    var5 = var6.verbose;
                    var4 = '[webp] png is PNG8 format (indexed color) - skipping conversion';
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure1_slot5;
                    var4 = var4.PNG8_FORMAT;
case 34: // try_end4
                    return var4;
case 22: // try_start_5
                    var6 = _closure1_slot4;
                    var5 = var6.verbose;
                    var4 = '[webp] png is animated (apng) - skipping conversion';
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure1_slot5;
                    var4 = var4.ANIMATED_IMAGE;
case 35: // try_end5
                    return var4;
case 20: // try_start_6
                    var6 = _closure1_slot4;
                    var5 = var6.verbose;
                    var4 = '[webp] png uses actual transparency - skipping conversion';
                    var4 = var5.bind(var6)(var4);
                    var3 = _closure1_slot5;
                    var3 = var3.HAS_TRANSPARENCY;
case 36: // try_end6
                    return var3;
case 18: // try_start_7
                    var3 = global;
                    var5 = var3.Error;
                    var3 = var5.prototype;
                    var4 = Object.create(var3, {constructor: {value: var5}});
                    var14 = 'DiscordImage.create returned null';
                    var15 = var4;
                    var3 = new var15[var5](var14, var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    throw var3;
case 37: // try_end7 // catch_target2 // catch_target4 // catch_target5 // catch_target6 // catch_target7
                    CatchBlockStart(arg_register=6);
                    var6 = _closure1_slot4;
                    var5 = var6.warn;
                    var4 = '[WebP] PNG analysis failed:';
                    var4 = var5.bind(var6)(var4, var7);
                    var3 = _closure1_slot5;
                    var3 = var3.CORRUPTED_FILE;
                    return var3;
case 16:
                    return var2;
case 38: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=5);
                    var5 = _closure1_slot4;
                    var4 = var5.warn;
                    var3 = '[WebP] Failed to read file data:';
                    var3 = var4.bind(var5)(var3, var6);
                    var2 = _closure1_slot5;
                    var2 = var2.CONVERSION_FAILED;
                    return var2;
case 4:
                    var5 = _closure1_slot4;
                    var4 = var5.verbose;
                    var3 = '[WebP] File already WebP format';
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot5;
                    var2 = var2.ALREADY_WEBP;
                    return var2;
case 2:
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
        var1 = 3;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var3 = var1.bind(var2)(var3);
        var2 = var3.toString;
        var1 = 16;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _performWebPConversion() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 39; continue _fun0002 }
case 40:
                    var17 = arg1;
                    var16 = undefined;
                    var9 = undefined;
                    var _closure4_slot0 = var16;
                    var10 = undefined;
                    var5 = undefined;
                    var _closure4_slot1 = var16;
                    var4 = undefined;
                    var _closure4_slot2 = var16;
                    var13 = undefined;
                    var15 = undefined;
                    var18 = undefined;
                    var11 = undefined;
                    var _closure4_slot3 = var16;
                    var8 = undefined;
                    var _closure4_slot4 = var16;
                    var12 = undefined;
                    var2 = global;
                    var14 = var2.document;
                    var6 = var14.createElement;
                    var3 = 'canvas';
                    var14 = var6.bind(var14)(var3);
                    var9 = var14;
                    _closure4_slot0 = var14;
                    var6 = var14.getContext;
                    var3 = '2d';
                    var3 = var6.bind(var14)(var3);
                    var10 = var3;
                    var6 = null;
                    if(!(var6 != var3)) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var3 = var2.Image;
                    var14 = var3.prototype;
                    var14 = Object.create(var14, {constructor: {value: var3}});
                    var51 = var14;
                    var3 = new var51[var3](var50);
                    var3 = var3 instanceof Object ? var3 : var14;
                    var5 = var3;
                    _closure4_slot1 = var3;
                    var19 = var2.URL;
                    var14 = var19.createObjectURL;
                    var3 = var17;
                    var3 = var14.bind(var19)(var3);
                    var4 = var3;
                    _closure4_slot2 = var3;
case 43: // try_start_0
                    var19 = var2.Promise;
                    var3 = var19.prototype;
                    var14 = Object.create(var3, {constructor: {value: var19}});
                    var50 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var4 = _closure4_slot1;
                        var3 = function() {
                            var2 = _closure5_slot0;
                            var1 = undefined;
                            var1 = var2.bind(var1)();
                            return var1;
                        };
                        var4['onload'] = var3;
                        var3 = _closure4_slot1;
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
                        var2 = _closure4_slot1;
                        var1 = _closure4_slot2;
                        var2['src'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var51 = var14;
                    var3 = new var51[var19](var50, var49);
                    var3 = var3 instanceof Object ? var3 : var14;
                    SaveGenerator(address=211);
case 13:
                    return var3;
case 44:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=13);
                    if(var14) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var14 = var9;
                    var19 = var5;
                    var5 = var19.width;
                    var14['width'] = var5;
                    var5 = var19.height;
                    var14['height'] = var5;
                    var14 = var10;
                    var5 = var14.drawImage;
                    var20 = 0;
                    var5 = var5.bind(var14)(var19, var20, var20);
case 47: // try_end0
                    var19 = var2.URL;
                    var14 = var19.revokeObjectURL;
                    var5 = var4;
                    var5 = var14.bind(var19)(var5);
                    var19 = var2.Promise;
                    var5 = var19.prototype;
                    var14 = Object.create(var5, {constructor: {value: var19}});
                    var50 = function(arg1) {
                        var5 = _closure4_slot0;
                        var4 = var5.toBlob;
                        var3 = arg1;
                        var2 = 'image/webp';
                        var1 = 1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var51 = var14;
                    var5 = new var51[var19](var50, var49);
                    var5 = var5 instanceof Object ? var5 : var14;
                    SaveGenerator(address=321);
case 48:
                    return var5;
case 49:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(var14) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var13 = var5;
                    if(!(var6 != var5)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
                    var14 = var2.performance;
                    var6 = var14.now;
                    var15 = var6.bind(var14)();
                    var21 = var10;
                    var19 = var21.getImageData;
                    var6 = var9;
                    var48 = var6.width;
                    var47 = var6.height;
                    var51 = var21;
                    var50 = 0;
                    var49 = 0;
                    var6 = var51[var19](var50, var49, var48, var47, var46);
                    SaveGenerator(address=392);
case 54:
                    return var6;
case 55:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=13);
                    if(var14) { _fun0002_ip = 56; continue _fun0002 }
case 57:
                    var18 = var6;
                    var22 = var10;
                    var21 = var22.clearRect;
                    var14 = var9;
                    var48 = var14.width;
                    var47 = var14.height;
                    var51 = var22;
                    var50 = 0;
                    var49 = 0;
                    var14 = var51[var21](var50, var49, var48, var47, var46);
                    var14 = var2.Image;
                    var19 = var14.prototype;
                    var19 = Object.create(var19, {constructor: {value: var14}});
                    var51 = var19;
                    var14 = new var51[var14](var50);
                    var14 = var14 instanceof Object ? var14 : var19;
                    var11 = var14;
                    _closure4_slot3 = var14;
                    var21 = var2.URL;
                    var19 = var21.createObjectURL;
                    var14 = var13;
                    var14 = var19.bind(var21)(var14);
                    var8 = var14;
                    _closure4_slot4 = var14;
case 58: // try_start_1
                    var19 = var2.Promise;
                    var14 = var19.prototype;
                    var14 = Object.create(var14, {constructor: {value: var19}});
                    var50 = function(arg1, arg2) {
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
                    var51 = var14;
                    var7 = new var51[var19](var50, var49);
                    var7 = var7 instanceof Object ? var7 : var14;
                    SaveGenerator(address=532);
case 59:
                    return var7;
case 60:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=13);
                    if(var14) { _fun0002_ip = 61; continue _fun0002 }
case 62:
                    var21 = var10;
                    var19 = var21.drawImage;
                    var14 = var11;
                    var14 = var19.bind(var21)(var14, var20, var20);
case 63: // try_end1
                    var21 = var2.URL;
                    var19 = var21.revokeObjectURL;
                    var14 = var8;
                    var14 = var19.bind(var21)(var14);
                    var19 = var10;
                    var14 = var19.getImageData;
                    var48 = var9.width;
                    var47 = var9.height;
                    var51 = var19;
                    var50 = 0;
                    var49 = 0;
                    var9 = var51[var14](var50, var49, var48, var47, var46);
                    SaveGenerator(address=614);
case 64:
                    return var9;
case 65:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 66; continue _fun0002 }
case 67:
                    var14 = _closure1_slot8;
                    var33 = var14.bind(var16)(var18);
                    var32 = var14.bind(var16)(var9);
                    var14 = var33 === var32;
                    var18 = var2.performance;
                    var16 = var18.now;
                    var16 = var16.bind(var18)();
                    var18 = var16 - var15;
                    var12 = var18;
                    var16 = _closure1_slot4;
                    var15 = var16.verbose;
                    var31 = var17.name;
                    var48 = var17.size;
                    var46 = var11.width;
                    var44 = var11.height;
                    var11 = var13;
                    var40 = var11.size;
                    var17 = var2.Math;
                    var11 = var17.round;
                    var34 = var11.bind(var17)(var18);
                    var11 = var2.HermesInternal;
                    var25 = var11.concat;
                    var51 = '[WebP] Pixel hash results: fileName=';
                    var49 = ' fileLength={';
                    var47 = '} width=';
                    var45 = ' height=';
                    var43 = ' pixelHash=';
                    var41 = ' mezzanineFileLength={';
                    var39 = '} mezzaninePixelHash=';
                    var37 = ' match=';
                    var35 = ' elapsed_ms=';
                    var50 = var31;
                    var42 = var33;
                    var38 = var32;
                    var36 = var14;
                    var11 = var51[var25](var50, var49, var48, var47, var46, var45, var44, var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33);
                    var11 = var15.bind(var16)(var11);
                    var11 = {};
                    if(var14) { _fun0002_ip = 68; continue _fun0002 }
case 69:
                    var14 = false;
                    var11['success'] = var14;
                    var10 = _closure1_slot5;
                    var10 = var10.PIXEL_HASH_MISMATCH;
                    var11['reason'] = var10;
                    var10 = var12;
                    var11['pixelHashTimeMs'] = var10;
                    var10 = var11;
                    _fun0002_ip = 70; continue _fun0002;
case 68:
                    var14 = true;
                    var11['success'] = var14;
                    var11['webpBlob'] = var13;
                    var11['pixelHashTimeMs'] = var12;
                    var10 = var11;
case 70:
                    return var10;
case 66:
                    return var9;
case 61:
                    var11 = var2.URL;
                    var10 = var11.revokeObjectURL;
                    var9 = var8;
                    var9 = var10.bind(var11)(var9);
                    return var7;
case 71: // catch_target1
                    CatchBlockStart(arg_register=6);
                    var10 = var2.URL;
                    var9 = var10.revokeObjectURL;
                    var8 = var9.bind(var10)(var8);
                    throw var7;
case 56:
                    return var6;
case 52:
                    var8 = var2.Error;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {constructor: {value: var8}});
                    var50 = 'failed to convert to webp';
                    var51 = var7;
                    var6 = new var51[var8](var50, var49);
                    var6 = var6 instanceof Object ? var6 : var7;
                    throw var6;
case 50:
                    return var5;
case 45:
                    var7 = var2.URL;
                    var6 = var7.revokeObjectURL;
                    var5 = var4;
                    var5 = var6.bind(var7)(var5);
                    return var3;
case 72: // catch_target0
                    CatchBlockStart(arg_register=2);
                    var6 = var2.URL;
                    var5 = var6.revokeObjectURL;
                    var4 = var5.bind(var6)(var4);
                    throw var3;
case 41:
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var50 = 'could not get canvas context';
                    var51 = var3;
                    var2 = new var51[var4](var50, var49);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 39:
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
    var1 = function _maybeConvertToWebP() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 73; continue _fun0003 }
case 3:
                    var9 = var2;
                    var _closure4_slot0 = var2;
                    var4 = undefined;
                    var11 = undefined;
                    var _closure4_slot1 = var4;
                    var3 = undefined;
                    var7 = undefined;
                    var12 = undefined;
                    var10 = undefined;
                    var14 = undefined;
                    var16 = undefined;
                    var15 = undefined;
                    var13 = null;
                    if(!(var13 != var2)) { _fun0003_ip = 74; continue _fun0003 }
case 75:
                    var18 = _closure1_slot4;
                    var17 = var18.verbose;
                    var5 = var9;
                    var20 = var5.name;
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var19 = var6.concat;
                    var6 = '[WebP] Starting conversion for: ';
                    var6 = var19.bind(var6)(var20);
                    var6 = var17.bind(var18)(var6);
                    var17 = var5.performance;
                    var6 = var17.now;
                    var6 = var6.bind(var17)();
                    var11 = var6;
                    _closure4_slot1 = var6;
                    var3 = function createFailedResult(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var5 = arguments[1];
                            var1 = undefined;
                            if(!(var5 === var1)) { _fun0004_ip = 76; continue _fun0004 }
case 77:
                            var1 = _closure4_slot0;
                            var5 = var1.size;
case 76:
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
                            if(!var4) { _fun0004_ip = 78; continue _fun0004 }
case 79:
                            var4 = _closure4_slot0;
                            var4 = var4.size;
                            var3 = var5 / var4;
case 78:
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
case 80: // try_start_0
                    var17 = _closure1_slot6;
                    var6 = var9;
                    var6 = var17.bind(var4)(var6);
                    SaveGenerator(address=146);
case 81:
                    return var6;
case 82:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=16);
                    if(var17) { _fun0003_ip = 83; continue _fun0003 }
case 84:
                    var7 = var6;
                    if(!(var13 == var6)) { _fun0003_ip = 85; continue _fun0003 }
case 86:
                    var17 = var9;
                    var8 = function performWebPConversion() {
                        var1 = undefined;
                        var4 = _closure1_slot9;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var8 = var8.bind(var4)(var17);
                    SaveGenerator(address=182);
case 87:
                    return var8;
case 88:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=16);
                    if(var17) { _fun0003_ip = 89; continue _fun0003 }
case 90:
                    var10 = var8;
                    var17 = var8.success;
                    if(!var17) { _fun0003_ip = 91; continue _fun0003 }
case 92:
                    var17 = var10;
                    var17 = var17.webpBlob;
                    if(!(var13 != var17)) { _fun0003_ip = 91; continue _fun0003 }
case 93:
                    var17 = var10;
                    var14 = var17.webpBlob;
                    var17 = var9;
                    var17 = var17.size;
                    var18 = 0;
                    var20 = var17 > var18;
                    var19 = 1;
                    var17 = var19;
                    if(!var20) { _fun0003_ip = 94; continue _fun0003 }
case 95:
                    var20 = var14;
                    var21 = var20.size;
                    var20 = var9;
                    var20 = var20.size;
                    var17 = var21 / var20;
case 94:
                    var16 = var17;
                    var17 = var19 - var17;
                    var15 = var17;
                    if(!(!(var17 < var18))) { _fun0003_ip = 34; continue _fun0003 }
case 96:
                    var18 = var5.performance;
                    var17 = var18.now;
                    var17 = var17.bind(var18)();
                    var18 = var17 - var11;
                    var20 = _closure1_slot4;
                    var17 = var20.verbose;
                    var19 = var9;
                    var25 = var19.name;
                    var21 = var5.Math;
                    var11 = var21.round;
                    var29 = var11.bind(var21)(var18);
                    var11 = var5.HermesInternal;
                    var23 = var11.concat;
                    var32 = '[WebP] Conversion successful: ';
                    var30 = ' to WebP in ';
                    var28 = 'ms';
                    var31 = var25;
                    var11 = var32[var23](var31, var30, var29, var28, var27);
                    var11 = var17.bind(var20)(var11);
                    var11 = {};
                    var17 = true;
                    var11['success'] = var17;
                    var11['originalFile'] = var19;
                    var17 = var14;
                    var11['convertedBlob'] = var17;
                    var19 = var19.size;
                    var11['sizeBefore'] = var19;
                    var17 = var17.size;
                    var11['sizeAfter'] = var17;
                    var11['compressionRatio'] = var16;
                    var16 = var10;
                    var16 = var16.pixelHashTimeMs;
                    var11['hashTimeMs'] = var16;
                    var17 = var5.Math;
                    var16 = var17.round;
                    var16 = var16.bind(var17)(var18);
                    var11['compressTimeMs'] = var16;
                    _fun0003_ip = 97; continue _fun0003;
case 34:
                    var17 = _closure1_slot4;
                    var16 = var17.verbose;
                    var19 = var5.Math;
                    var18 = var19.round;
                    var20 = var15;
                    var15 = 100;
                    var15 = var15 * var20;
                    var31 = var18.bind(var19)(var15);
                    var15 = var9;
                    var29 = var15.size;
                    var27 = var14.size;
                    var15 = var5.HermesInternal;
                    var21 = var15.concat;
                    var32 = '[WebP] Insufficient savings: ';
                    var30 = '% < 0% (';
                    var28 = ' -> ';
                    var26 = ' bytes)';
                    var15 = var32[var21](var31, var30, var29, var28, var27, var26, var25);
                    var15 = var16.bind(var17)(var15);
                    var16 = var3;
                    var15 = _closure1_slot5;
                    var15 = var15.INSUFFICIENT_SAVINGS;
                    var14 = var14.size;
                    var11 = var16.bind(var4)(var15, var14);
case 97: // try_end0
                    return var11;
case 91: // try_start_1
                    var11 = var3;
                    var10 = var10.reason;
                    var12 = var10;
                    if(!(var13 == var10)) { _fun0003_ip = 98; continue _fun0003 }
case 99:
                    var10 = _closure1_slot5;
                    var10 = var10.UNKNOWN_ERROR;
                    _fun0003_ip = 100; continue _fun0003;
case 98:
                    var10 = var12;
case 100:
                    var10 = var11.bind(var4)(var10);
case 67: // try_end1
                    return var10;
case 89:
                    return var8;
case 85: // try_start_2
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
case 101: // try_end2
                    return var7;
case 83:
                    return var6;
case 102: // catch_target0 // catch_target1 // catch_target2
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
case 74:
                    var2 = global;
                    var4 = var2.Error;
                    var2 = var4.prototype;
                    var3 = Object.create(var2, {constructor: {value: var4}});
                    var31 = 'file is null or undefined';
                    var32 = var3;
                    var2 = new var32[var4](var31, var30);
                    var2 = var2 instanceof Object ? var2 : var3;
                    throw var2;
case 73:
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
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var9 = var6.bind(var1)(var5);
    var5 = var9.prototype;
    var6 = Object.create(var5, {constructor: {value: var9}});
    var13 = 'WebP';
    var14 = var6;
    var5 = new var14[var9](var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot4 = var5;
    var5 = {};
    var6 = 'already_webp';
    var5['ALREADY_WEBP'] = var6;
    var6 = 'unsupported_format';
    var5['UNSUPPORTED_FORMAT'] = var6;
    var6 = 'animated_image';
    var5['ANIMATED_IMAGE'] = var6;
    var6 = 'has_transparency';
    var5['HAS_TRANSPARENCY'] = var6;
    var6 = 'png8_format';
    var5['PNG8_FORMAT'] = var6;
    var6 = 'insufficient_savings';
    var5['INSUFFICIENT_SAVINGS'] = var6;
    var6 = 'conversion_failed';
    var5['CONVERSION_FAILED'] = var6;
    var6 = 'corrupted_file';
    var5['CORRUPTED_FILE'] = var6;
    var6 = 'pixel_hash_mismatch';
    var5['PIXEL_HASH_MISMATCH'] = var6;
    var6 = 'icc_non_srgb_profile';
    var5['ICC_NON_SRGB_PROFILE'] = var6;
    var6 = 'icc_detection_failed';
    var5['ICC_DETECTION_FAILED'] = var6;
    var6 = 'unknown_error';
    var5['UNKNOWN_ERROR'] = var6;
    var _closure1_slot5 = var5;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'lib/uploader/webpConversion.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ConversionFailureReason'] = var5;
    var3['_shouldConvertToWebP'] = var4;
    var2 = function maybeConvertToWebP() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['maybeConvertToWebP'] = var2;
    return var1;
})();
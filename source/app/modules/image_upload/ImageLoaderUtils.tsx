// app/modules/image_upload/ImageLoaderUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var7;
    var1 = function loadImageAsset(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var1 = global;
        var1 = var1.Image;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var8 = var3;
        var1 = new var8[var1](var7);
        var3 = var1 instanceof Object ? var1 : var3;
        var _closure2_slot1 = var3;
        var5 = function getOnError(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var3 = arg2;
                var _closure3_slot1 = var3;
                var4 = var2.backoff;
                var3 = null;
                if(!(var3 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var7 = var4;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var4;
                var2['backoff'] = var3;
case 2:
                var2 = var2.backoff;
                var _closure3_slot2 = var2;
                var3 = _closure1_slot4;
                var2 = undefined;
                var1 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                            var4 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var7 = 5;
                            var2 = var2[var7];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.isOnline;
                            var2 = var2.bind(var4)();
                            SaveGenerator(address=46);
case 6:
                            return var2;
case 7:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                            var6 = _closure3_slot2;
                            var6 = var6.fails;
                            if(!(!(var6 < var7))) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                            var8 = _closure1_slot12;
                            var7 = _closure3_slot0;
                            var6 = _closure3_slot1;
                            var5 = true;
                            var5 = var8.bind(var3)(var5, var7, var6);
                            _fun0002_ip = 12; continue _fun0002;
case 10:
                            var6 = _closure3_slot2;
                            var5 = var6.fail;
                            var4 = function() {
                                var3 = _closure1_slot11;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var4 = var5.bind(var6)(var4);
case 12:
                            return var3;
case 8:
                            return var2;
case 4:
                            return var1;
                        }
                    };
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            }
        };
        var1 = undefined;
        var5 = var5.bind(var1)(var2, var3);
        var3['onerror'] = var5;
        var4 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot0;
                var3 = var2.backoff;
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var2 = var3.succeed;
                var2 = var2.bind(var3)();
case 13:
                var5 = _closure1_slot12;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = false;
                var2 = var5.bind(var1)(var2, var4, var3);
                return var1;
            }
        };
        var3['onload'] = var4;
        var2 = var2.url;
        var3['src'] = var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function handleImageLoad(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var5 = arg2;
            var2 = arg3;
            var _closure2_slot0 = var4;
            var _closure2_slot1 = var5;
            var3 = var5.callbacks;
            var5 = var5.url;
            if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = var2.width;
            var2 = var2.height;
            var6 = {};
            var6['url'] = var5;
            var7 = true;
            var6['loaded'] = var7;
            var6['width'] = var4;
            var6['height'] = var2;
            _closure2_slot1 = var6;
            var4 = _closure1_slot10;
            var2 = var4.set;
            var2 = var2.bind(var4)(var5, var6);
            _fun0004_ip = 17; continue _fun0004;
case 15:
            var4 = _closure1_slot10;
            var2 = var4.del;
            var2 = var2.bind(var4)(var5);
case 17:
            var2 = null;
            if(!(var2 != var3)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 18:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function splitURL(arg1) {
        var3 = arg1;
        var2 = var3.split;
        var1 = '?';
        var4 = var2.bind(var3)(var1);
        var3 = _closure1_slot3;
        var5 = undefined;
        var1 = 2;
        var4 = var3.bind(var5)(var4, var1);
        var1 = 0;
        var3 = var4[var1];
        var1 = 1;
        var4 = var4[var1];
        var1 = new Array(2);
        var1[0] = var3;
        var3 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 6;
        var2 = var6[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.parse;
        var2 = var2.bind(var3)(var4);
        var1[1] = var2;
        return var1;
    };
    var _closure1_slot13 = var1;
    var4 = function getSrcWithWidthAndHeight(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var1 = var3.src;
            var8 = var3.sourceWidth;
            var9 = var3.sourceHeight;
            var12 = var3.targetWidth;
            var11 = var3.targetHeight;
            var14 = var3.format;
            var7 = undefined;
            if(!(var14 === var7)) { _fun0005_ip = 7; continue _fun0005 }
case 6:
            var14 = null;
case 7:
            var10 = var3.quality;
            if(!(var10 === var7)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var10 = null;
case 20:
            var2 = var3.animated;
            if(!(var2 === var7)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = false;
case 22:
            var5 = var3.srcIsAnimated;
            if(!(var5 === var7)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var5 = false;
case 24:
            var4 = var1.startsWith;
            var3 = 'data:image';
            var3 = var4.bind(var1)(var3);
            if(var3) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var4 = 7;
            var4 = var13[var4];
            var6 = var6.bind(var7)(var4);
            var4 = var6.isDiscordCdnUrl;
            var4 = var4.bind(var6)(var1);
            if(var4) { _fun0005_ip = 26; continue _fun0005 }
case 28:
            var4 = _closure1_slot13;
            var13 = var4.bind(var7)(var1);
            var6 = _closure1_slot3;
            var4 = 2;
            var13 = var6.bind(var7)(var13, var4);
            var4 = 0;
            var4 = var13[var4];
            var6 = 1;
            var6 = var13[var6];
            var13 = null;
            if(!(var13 != var14)) { _fun0005_ip = 29; continue _fun0005 }
case 30:
            var6['format'] = var14;
case 29:
            if(!(var13 != var10)) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var6['quality'] = var10;
case 31:
            if(!var2) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var2 = var5;
case 33:
            if(!var2) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var10 = _closure1_slot7;
            var5 = var10.test;
            var5 = var5.bind(var10)(var1);
            if(var5) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var13 = _closure1_slot8;
            var10 = var13.test;
            var5 = var10.bind(var13)(var1);
case 37:
            var2 = var5;
case 35:
            if(!var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = true;
            var6['animated'] = var2;
case 39:
            var5 = _closure1_slot8;
            var2 = var5.test;
            var2 = var2.bind(var5)(var1);
            if(!var2) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var2 = 'webp';
            var6['format'] = var2;
case 41:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var10 = var5.bind(var7)(var2);
            var5 = var10.fit;
            var2 = {};
            var2['width'] = var12;
            var2['height'] = var11;
            var11 = _closure1_slot6;
            var2['maxWidth'] = var11;
            var11 = _closure1_slot6;
            var2['maxHeight'] = var11;
            var2 = var5.bind(var10)(var2);
            var5 = var2.width;
            var2 = var2.height;
            var8 = var5 === var8;
            if(!var8) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var8 = var2 === var9;
case 43:
            if(var8) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var5 = var5 | 0;
            var6['width'] = var5;
            var2 = var2 | 0;
            var6['height'] = var2;
case 45:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var5 = var5.bind(var7)(var2);
            var2 = var5.isEmpty;
            var5 = var2.bind(var5)(var6);
            var2 = var4;
            if(var5) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 6;
            var3 = var8[var3];
            var5 = var5.bind(var7)(var3);
            var3 = var5.stringify;
            var5 = var3.bind(var5)(var6);
            var3 = '?';
            var3 = var3 + var5;
            var2 = var4 + var3;
case 47:
            return var2;
case 26:
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var9 = var5.NOOP;
    var _closure1_slot5 = var9;
    var5 = var5.MEDIA_PROXY_MAX_TARGET_RESOLUTION;
    var _closure1_slot6 = var5;
    var5 = /\.webp($|\?|#)/i;
    var _closure1_slot7 = var5;
    var5 = /\.avif($|\?|#)/i;
    var _closure1_slot8 = var5;
    var5 = [16, 20, 22, 24, 28, 32, 40, 44, 48, 56, 60, 64, 80, 96, 100, 128, 160, 240, 256, 300, 320, 480, 512, 600, 640, 1024, 1280, 1536, 2048, 3072, 4096];
    var _closure1_slot9 = var5;
    var5 = 3;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var5 = {};
    var9 = 1000;
    var5['max'] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var14 = var9;
    var13 = var5;
    var5 = new var14[var10](var13, var12);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot10 = var5;
    var5 = 11;
    var5 = var7[var5];
    var9 = var8.bind(var1)(var5);
    var8 = var9.fileFinishedImporting;
    var5 = 'modules/image_upload/ImageLoaderUtils.tsx';
    var5 = var8.bind(var9)(var5);
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var3['getDevicePixelRatio'] = var5;
    var5 = function isImageLoaded(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot10;
            var2 = var3.get;
            var1 = arg1;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0006_ip = 49; continue _fun0006 }
case 13:
            var1 = var2.loaded;
case 49:
            return var1;
        }
    };
    var3['isImageLoaded'] = var5;
    var5 = function loadImage(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var9 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var9;
            var4 = _closure1_slot10;
            var1 = var4.get;
            var1 = var1.bind(var4)(var9);
            var _closure2_slot2 = var1;
            var4 = null;
            if(!(var4 != var1)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
            var6 = var1.loaded;
            if(var6) { _fun0007_ip = 30; continue _fun0007 }
case 50:
            if(!(var4 == var1)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var6 = {};
            var6['url'] = var9;
            var7 = false;
            var6['loaded'] = var7;
            _closure2_slot2 = var6;
            var8 = _closure1_slot10;
            var7 = var8.set;
            var7 = var7.bind(var8)(var9, var6);
            var8 = _closure1_slot11;
            var7 = undefined;
            var7 = var8.bind(var7)(var6);
            var1 = var6;
case 52:
            if(!(var4 != var5)) { _fun0007_ip = 54; continue _fun0007 }
case 27:
            var6 = var5.bind;
            var7 = var6.bind(var5)(var4);
            var _closure2_slot1 = var7;
            var6 = var1.callbacks;
            if(!(var4 == var6)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
            var6 = global;
            var6 = var6.Set;
            var8 = var6.prototype;
            var8 = Object.create(var8, {constructor: {value: var6}});
            var12 = var8;
            var6 = new var12[var6](var11);
            var6 = var6 instanceof Object ? var6 : var8;
            var1['callbacks'] = var6;
case 55:
            var6 = var1.callbacks;
            var1 = var6.add;
            var1 = var1.bind(var6)(var7);
case 54:
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var4 = _closure2_slot2;
                    var2 = var3 != var4;
case 57:
                    if(!var2) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var2 = _closure2_slot2;
                    var2 = var2.callbacks;
                    if(!(var3 != var2)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var2 = _closure2_slot2;
                    var5 = var2.callbacks;
                    var4 = var5.delete;
                    var2 = _closure2_slot1;
                    var2 = var4.bind(var5)(var2);
case 61:
                    var2 = _closure2_slot2;
                    var2 = var2.backoff;
                    if(!(var3 != var2)) { _fun0008_ip = 59; continue _fun0008 }
case 2:
                    var1 = _closure2_slot2;
                    var2 = var1.backoff;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
case 59:
                    var1 = undefined;
                    return var1;
                }
            };
            _fun0007_ip = 63; continue _fun0007;
case 30:
            if(!(var4 != var5)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 5;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var4 = var5.awaitOnline;
            var5 = var4.bind(var5)();
            var4 = var5.then;
            var3 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0009_ip = 66; continue _fun0009 }
case 58:
                    var3 = _closure2_slot2;
                    var3 = var3.callbacks;
                    var2 = var4 != var3;
case 66:
                    if(!var2) { _fun0009_ip = 67; continue _fun0009 }
case 16:
                    var1 = _closure2_slot2;
                    var3 = var1.callbacks;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var4 = arg1;
                            var3 = _closure2_slot2;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0010_ip = 68; continue _fun0010 }
case 58:
                            var5 = {};
                            var2 = _closure2_slot0;
                            var5['url'] = var2;
                            var3 = true;
                            var5['loaded'] = var3;
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3, var5);
                            _fun0010_ip = 69; continue _fun0010;
case 68:
                            var3 = _closure2_slot2;
                            var2 = undefined;
                            var1 = false;
                            var1 = var4.bind(var2)(var1, var3);
case 69:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
case 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var5)(var3);
case 64:
            var1 = _closure1_slot5;
case 63:
            return var1;
        }
    };
    var3['loadImage'] = var5;
    var5 = function getBestMediaProxySize(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var3 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var1 === var4)) { _fun0011_ip = 70; continue _fun0011 }
case 71:
            var1 = false;
case 70:
            if(!var1) { _fun0011_ip = 2; continue _fun0011 }
case 72:
            var5 = _closure1_slot9;
            var4 = var5.filter;
            var1 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var1 <= var2;
                return var1;
            };
            var4 = var4.bind(var5)(var1);
            var1 = var4.pop;
            var1 = var1.bind(var4)();
            var4 = null;
            if(!(var4 != var1)) { _fun0011_ip = 2; continue _fun0011 }
case 73:
            var4 = var3 / var1;
            var3 = 1.25;
            if(!(!(var4 <= var3))) { _fun0011_ip = 74; continue _fun0011 }
case 2:
            var5 = _closure1_slot9;
            var4 = var5.find;
            var2 = function(arg1) {
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var2 <= var1;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var4 = null;
            if(!(var4 == var2)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var4 = _closure1_slot9;
            var5 = var4.length;
            var3 = 1;
            var3 = var5 - var3;
            var2 = var4[var3];
case 75:
            return var2;
case 74:
            return var1;
        }
    };
    var3['getBestMediaProxySize'] = var5;
    var3['getSrcWithWidthAndHeight'] = var4;
    var4 = function getSizedImageSrc(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var7 = arguments[3];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
            var7 = 'webp';
case 77:
            var3 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 10;
            var1 = var10[var1];
            var1 = var3.bind(var4)(var1);
            var11 = var1.bind(var4)();
            var1 = global;
            var8 = var1.Math;
            var6 = var8.ceil;
            var5 = arg2;
            var5 = var5 * var11;
            var8 = var6.bind(var8)(var5);
            var9 = var1.Math;
            var6 = var9.ceil;
            var5 = arg3;
            var5 = var5 * var11;
            var6 = var6.bind(var9)(var5);
            var9 = _closure1_slot13;
            var5 = arg1;
            var9 = var9.bind(var4)(var5);
            var5 = _closure1_slot3;
            var2 = 2;
            var9 = var5.bind(var4)(var9, var2);
            var2 = 0;
            var5 = var9[var2];
            var2 = 1;
            var13 = var9[var2];
            var2 = 6;
            var2 = var10[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.stringify;
            var2 = {};
            var14 = var2;
            var9 = copyDataProperties(var14, var13);
            var9 = var8 | 0;
            var8 = 'width';
            var2[var8] = var9;
            var8 = var6 | 0;
            var6 = 'height';
            var2[var6] = var8;
            var6 = 'format';
            var2[var6] = var7;
            var4 = var3.bind(var4)(var2);
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '?';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        }
    };
    var3['getSizedImageSrc'] = var4;
    var2 = function getImageSrc(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var13 = var2.src;
            var12 = var2.width;
            var11 = var2.height;
            var16 = var2.maxWidth;
            var14 = var2.maxHeight;
            var1 = var2.ratio;
            var3 = undefined;
            if(!(var1 === var3)) { _fun0013_ip = 7; continue _fun0013 }
case 68:
            var1 = 1;
case 7:
            var7 = var2.format;
            if(!(var7 === var3)) { _fun0013_ip = 69; continue _fun0013 }
case 53:
            var7 = null;
case 69:
            var6 = var2.quality;
            if(!(var6 === var3)) { _fun0013_ip = 11; continue _fun0013 }
case 79:
            var6 = null;
case 11:
            var5 = var2.animated;
            if(!(var5 === var3)) { _fun0013_ip = 80; continue _fun0013 }
case 2:
            var5 = false;
case 80:
            var4 = var2.srcIsAnimated;
            if(!(var4 === var3)) { _fun0013_ip = 81; continue _fun0013 }
case 82:
            var4 = false;
case 81:
            var2 = 1;
            var15 = var12;
            var8 = var11;
            if(!(var1 < var2)) { _fun0013_ip = 83; continue _fun0013 }
case 17:
            var9 = global;
            var17 = var9.Math;
            var10 = var17.round;
            var2 = var12 * var1;
            var15 = var10.bind(var17)(var2);
            var10 = var9.Math;
            var9 = var10.round;
            var1 = var11 * var1;
            var8 = var9.bind(var10)(var1);
case 83:
            var1 = null;
            var10 = var15;
            if(!(var1 != var16)) { _fun0013_ip = 84; continue _fun0013 }
case 85:
            var2 = global;
            var9 = var2.Math;
            var2 = var9.min;
            var10 = var2.bind(var9)(var15, var16);
case 84:
            var9 = var8;
            if(!(var1 != var14)) { _fun0013_ip = 31; continue _fun0013 }
case 86:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.min;
            var9 = var1.bind(var2)(var8, var14);
case 31:
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var2 = 10;
            var2 = var14[var2];
            var2 = var8.bind(var3)(var2);
            var8 = var2.bind(var3)();
            var2 = _closure1_slot14;
            var1 = {};
            var1['src'] = var13;
            var1['sourceWidth'] = var12;
            var1['sourceHeight'] = var11;
            var10 = var10 * var8;
            var1['targetWidth'] = var10;
            var8 = var9 * var8;
            var1['targetHeight'] = var8;
            var1['format'] = var7;
            var1['quality'] = var6;
            var1['animated'] = var5;
            var1['srcIsAnimated'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getImageSrc'] = var2;
    return var1;
})();
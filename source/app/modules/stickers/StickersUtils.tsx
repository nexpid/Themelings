// app/modules/stickers/StickersUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function getStickerPackPreviewSticker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = var2.cover_sticker_id;
            var3 = null;
            if(!(var3 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.stickers;
            var4 = var5.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var1.cover_sticker_id;
                var1 = var2 === var1;
                return var1;
            };
            var1 = var4.bind(var5)(var1);
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var3 = var2.stickers;
            var2 = 0;
            var2 = var3[var2];
            return var2;
case 4:
            return var1;
        }
    };
    var _closure1_slot18 = var6;
    var5 = function getStickerExtensionFromFormatType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 6;
            var1 = var1[var5];
            var4 = undefined;
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.PNG;
            if(!(var1 !== var7)) { _fun0002_ip = 5; continue _fun0002 }
case 2:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.APNG;
            if(!(var1 !== var7)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.LOTTIE;
            if(!(var1 !== var7)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.GIF;
            if(!(var1 !== var7)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = global;
            var6 = var1.Error;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = 'Unexpected format type: ';
            var8 = var3.bind(var1)(var7);
            var3 = var6.prototype;
            var3 = Object.create(var3, {constructor: {value: var6}});
            var9 = var3;
            var1 = new var9[var6](var8, var7);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
case 10:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerExtensions;
            var1 = var1.GIF;
            return var1;
case 8:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerExtensions;
            var1 = var1.LOTTIE;
            return var1;
case 6:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerExtensions;
            var1 = var1.APNG;
            return var1;
case 5:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 7;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.SUPPORTS_WEBP;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.StickerExtensions;
            if(var1) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var1 = var2.PNG;
            _fun0002_ip = 14; continue _fun0002;
case 12:
            var1 = var2.WEBP;
case 14:
            return var1;
        }
    };
    var _closure1_slot19 = var5;
    var4 = function getFavoriteStickerIds() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot2;
            var1 = var1.frecencyWithoutFetchingLatest;
            var4 = var1.favoriteStickers;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = var4.stickerIds;
case 15:
            if(!(var3 == var1)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var1 = _closure1_slot17;
case 17:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var7 = global;
    var13 = var7.Object;
    var12 = var13.defineProperty;
    var10 = {};
    var1 = true;
    var10['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var10);
    var1 = 0;
    var10 = var9[var1];
    var1 = undefined;
    var10 = var11.bind(var1)(var10);
    var _closure1_slot2 = var10;
    var10 = 1;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot3 = var10;
    var10 = 2;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot4 = var10;
    var10 = 3;
    var10 = var9[var10];
    var10 = var11.bind(var1)(var10);
    var _closure1_slot5 = var10;
    var10 = 4;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var11 = var10.DEFAULT_STICKER_DIMENSIONS;
    var _closure1_slot6 = var11;
    var11 = var10.STICKER_APPLICATION_ID;
    var _closure1_slot7 = var11;
    var10 = var10.StickerAnimationSettings;
    var _closure1_slot8 = var10;
    var10 = 5;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var14 = var10.Endpoints;
    var _closure1_slot9 = var14;
    var10 = var7.window;
    var10 = var10.GLOBAL_ENV;
    var17 = var10.API_ENDPOINT;
    var _closure1_slot10 = var17;
    var21 = var10.MEDIA_PROXY_ENDPOINT;
    var _closure1_slot11 = var21;
    var11 = var10.PROJECT_ENV;
    var _closure1_slot12 = var11;
    var20 = var10.ASSET_ENDPOINT;
    var _closure1_slot13 = var20;
    var10 = var10.CDN_HOST;
    var _closure1_slot14 = var10;
    var12 = var7.Object;
    var11 = var12.values;
    var10 = 6;
    var10 = var9[var10];
    var10 = var8.bind(var1)(var10);
    var10 = var10.StickerExtensions;
    var12 = var11.bind(var12)(var10);
    var11 = var7.decodeURIComponent;
    var13 = var14.STICKER_ASSET;
    var10 = var12.join;
    var19 = '|';
    var12 = var10.bind(var12)(var19);
    var10 = var7.HermesInternal;
    var10 = var10.concat;
    var16 = '(';
    var15 = ')';
    var12 = var10.bind(var16)(var12, var15);
    var10 = '[\\d]+';
    var10 = var13.bind(var14)(var10, var12);
    var14 = var11.bind(var1)(var10);
    var13 = var7.RegExp;
    var10 = var7.location;
    var29 = var10.protocol;
    var10 = var7.location;
    var26 = var10.protocol;
    var10 = var7.HermesInternal;
    var11 = var10.concat;
    var24 = ')(';
    var30 = var16;
    var28 = var20;
    var27 = var19;
    var25 = var21;
    var23 = var14;
    var22 = var15;
    var29 = var30[var11](var29, var28, var27, var26, var25, var24, var23, var22, var21);
    var11 = var13.prototype;
    var11 = Object.create(var11, {constructor: {value: var13}});
    var12 = 'ig';
    var30 = var11;
    var28 = var12;
    var10 = new var30[var13](var29, var28, var27);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot15 = var10;
    var11 = var7.RegExp;
    var10 = var7.location;
    var29 = var10.protocol;
    var7 = var7.HermesInternal;
    var10 = var7.concat;
    var30 = '';
    var28 = var17;
    var27 = var16;
    var26 = var14;
    var25 = var15;
    var29 = var30[var10](var29, var28, var27, var26, var25, var24);
    var10 = var11.prototype;
    var10 = Object.create(var10, {constructor: {value: var11}});
    var30 = var10;
    var28 = var12;
    var7 = new var30[var11](var29, var28, var27);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot16 = var7;
    var7 = new Array(0);
    var _closure1_slot17 = var7;
    var7 = 12;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/stickers/StickersUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getStickerPackPreviewSticker'] = var6;
    var3['getStickerExtensionFromFormatType'] = var5;
    var5 = function getStickerFormatTypeFromFileType(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = 'application/json';
            if(!(var1 !== var4)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var1 = 'image/apng';
            if(!(var1 !== var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var1 = 'image/png';
            if(!(var1 !== var4)) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var1 = 'image/webp';
            if(!(var1 !== var4)) { _fun0004_ip = 23; continue _fun0004 }
case 2:
            var1 = 'image/gif';
            if(!(var1 !== var4)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var1 = global;
            var3 = var1.Error;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Unexpected file type: ';
            var5 = var2.bind(var1)(var4);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
case 25:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.StickerFormat;
            var1 = var1.GIF;
            return var1;
case 23:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.StickerFormat;
            var1 = var1.PNG;
            return var1;
case 21:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.StickerFormat;
            var1 = var1.APNG;
            return var1;
case 19:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.StickerFormat;
            var1 = var1.LOTTIE;
            return var1;
        }
    };
    var3['getStickerFormatTypeFromFileType'] = var5;
    var5 = function getFilenameForSticker(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var6 = var2.name;
            var4 = _closure1_slot19;
            var3 = var2.format_type;
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '.';
            var1 = var4.bind(var3)(var6, var2, var5);
case 27:
            return var1;
        }
    };
    var3['getFilenameForSticker'] = var5;
    var5 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arguments[1];
            var9 = arg1;
            var16 = undefined;
            if(!(var1 === var16)) { _fun0006_ip = 20; continue _fun0006 }
case 28:
            var1 = {};
case 20:
            var4 = var1.isPreview;
            if(!(var4 === var16)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var4 = false;
case 29:
            var2 = var4;
            var1 = var1.size;
            if(!(var1 === var16)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var1 = _closure1_slot6;
case 31:
            var8 = var1;
            var6 = undefined;
            var11 = undefined;
            var3 = undefined;
            var10 = undefined;
            var5 = undefined;
            var7 = undefined;
            var13 = undefined;
            var1 = var9;
            var4 = var1.format_type;
            var1 = null;
            if(!(var1 != var4)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
            var4 = var9;
            var6 = var4.format_type;
            var15 = var4.format_type;
            var17 = _closure1_slot0;
            var14 = _closure1_slot1;
            var12 = 6;
            var14 = var14[var12];
            var14 = var17.bind(var16)(var14);
            var14 = var14.StickerFormat;
            var14 = var14.GIF;
            var14 = var15 === var14;
            if(!var14) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var14 = var2;
case 35:
            if(!var14) { _fun0006_ip = 37; continue _fun0006 }
case 38:
            var15 = _closure1_slot0;
            var14 = _closure1_slot1;
            var14 = var14[var12];
            var14 = var15.bind(var16)(var14);
            var14 = var14.StickerFormat;
            var6 = var14.PNG;
case 37:
            var14 = _closure1_slot19;
            var17 = var14.bind(var16)(var6);
            var11 = var17;
            var15 = _closure1_slot9;
            var14 = var15.STICKER_ASSET;
            var6 = var9;
            var6 = var6.id;
            var3 = var14.bind(var15)(var6, var17);
            var10 = false;
case 39: // try_start_0
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var6 = 8;
            var6 = var15[var6];
            var6 = var14.bind(var16)(var6);
            var14 = var6.getForceSdrEmojisStickersConfig;
            var6 = {};
            var15 = 'sticker_url';
            var6['location'] = var15;
            var6 = var14.bind(var16)(var6);
            var10 = var6.enabled;
case 40: // try_end0
            _fun0006_ip = 41; continue _fun0006;
case 42: // catch_target0
            CatchBlockStart(arg_register=5);
case 41:
            var15 = var10;
            var6 = '';
            var14 = var6;
            if(!var15) { _fun0006_ip = 43; continue _fun0006 }
case 44:
            var14 = '&force_sdr=true';
case 43:
            var5 = var14;
            var15 = var11;
            var14 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var12];
            var11 = var14.bind(var16)(var11);
            var11 = var11.StickerExtensions;
            var14 = var11.WEBP;
            var11 = var6;
            if(!(var15 === var14)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var11 = '&quality=lossless';
case 45:
            var7 = var11;
            var14 = _closure1_slot12;
            var11 = 'development';
            if(!(var11 === var14)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var11 = var9;
            var14 = var11.format_type;
            var15 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var12];
            var11 = var15.bind(var16)(var11);
            var11 = var11.StickerFormat;
            var11 = var11.LOTTIE;
            if(!(var14 === var11)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var11 = 9;
            var11 = var15[var11];
            var14 = var14.bind(var16)(var11);
            var11 = var14.isWeb;
            var11 = var11.bind(var14)();
            if(var11) { _fun0006_ip = 51; continue _fun0006 }
case 49:
            var11 = global;
            var14 = var11.location;
            var18 = var14.protocol;
            var17 = _closure1_slot11;
            var15 = var3;
            var14 = var11.HermesInternal;
            var14 = var14.concat;
            var13 = var14.bind(var6)(var18, var17, var15);
            var14 = var13;
            if(var10) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var10 = var14;
            _fun0006_ip = 54; continue _fun0006;
case 52:
            var11 = var11.HermesInternal;
            var13 = var11.concat;
            var11 = '?force_sdr=true';
            var10 = var13.bind(var6)(var14, var11);
case 54:
            return var10;
case 51:
            var10 = var3;
            return var10;
case 47:
            var10 = var9;
            var11 = var10.format_type;
            var13 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var12];
            var10 = var13.bind(var16)(var10);
            var10 = var10.StickerFormat;
            var10 = var10.LOTTIE;
            if(!(var11 !== var10)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var10 = var9.format_type;
            var11 = _closure1_slot0;
            var9 = _closure1_slot1;
            var9 = var9[var12];
            var9 = var11.bind(var16)(var9);
            var9 = var9.StickerFormat;
            var9 = var9.APNG;
            var13 = var6;
            if(!(var10 === var9)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var13 = var6;
            if(!var2) { _fun0006_ip = 57; continue _fun0006 }
case 59:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 9;
            var2 = var10[var2];
            var9 = var9.bind(var16)(var2);
            var2 = var9.isAndroid;
            var2 = var2.bind(var9)();
            var13 = var6;
            if(var2) { _fun0006_ip = 57; continue _fun0006 }
case 60:
            var13 = '&passthrough=false';
case 57:
            var2 = global;
            var15 = var2.Math;
            var12 = var15.min;
            var14 = _closure1_slot0;
            var17 = _closure1_slot1;
            var9 = 10;
            var10 = var17[var9];
            var11 = var14.bind(var16)(var10);
            var10 = var11.getDevicePixelRatio;
            var11 = var10.bind(var11)();
            var10 = 2;
            var15 = var12.bind(var15)(var10, var11);
            var10 = var2.location;
            var12 = var10.protocol;
            var25 = _closure1_slot11;
            var24 = var3;
            var9 = var17[var9];
            var14 = var14.bind(var16)(var9);
            var9 = var14.getBestMediaProxySize;
            var8 = var8 * var15;
            var22 = var9.bind(var14)(var8);
            var20 = var7;
            var19 = var5;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var23 = '?size=';
            var27 = var6;
            var26 = var12;
            var21 = var13;
            var2 = var27[var5](var26, var25, var24, var23, var22, var21, var20, var19, var18);
            return var2;
case 55:
            var2 = global;
            var5 = var2.location;
            var5 = var5.protocol;
            var4 = _closure1_slot13;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var6)(var5, var4, var3);
            return var2;
case 33:
            return var1;
        }
    };
    var3['getStickerAssetUrl'] = var5;
    var5 = function(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg2;
            var1 = arg1;
            var14 = var1.banner_asset_id;
            var1 = null;
            if(!(var1 != var14)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 7;
            var2 = var5[var2];
            var7 = undefined;
            var2 = var4.bind(var7)(var2);
            var2 = var2.SUPPORTS_WEBP;
            var13 = 'png';
            if(!var2) { _fun0007_ip = 63; continue _fun0007 }
case 4:
            var13 = 'webp';
case 63:
            var2 = _closure1_slot14;
            if(!(var1 == var2)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var2 = global;
            var4 = var2.location;
            var9 = var4.protocol;
            var8 = _closure1_slot10;
            var10 = _closure1_slot9;
            var5 = var10.STORE_ASSET;
            var4 = _closure1_slot7;
            var5 = var5.bind(var10)(var4, var14, var13);
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var2 = '';
            var4 = var4.bind(var2)(var9, var8, var5);
            _fun0007_ip = 66; continue _fun0007;
case 64:
            var21 = _closure1_slot14;
            var19 = _closure1_slot7;
            var2 = global;
            var2 = var2.HermesInternal;
            var10 = var2.concat;
            var22 = 'https://';
            var20 = '/app-assets/';
            var18 = '/store/';
            var16 = '.';
            var17 = var14;
            var15 = var13;
            var4 = var22[var10](var21, var20, var19, var18, var17, var16, var15, var14);
case 66:
            var2 = var4;
            if(!(var1 != var6)) { _fun0007_ip = 67; continue _fun0007 }
case 68:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 10;
            var3 = var8[var3];
            var5 = var5.bind(var7)(var3);
            var3 = var5.getBestMediaProxySize;
            var6 = var3.bind(var5)(var6);
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var3 = '?size=';
            var3 = var5.bind(var3)(var6);
            var2 = var4 + var3;
case 67:
            return var2;
case 61:
            return var1;
        }
    };
    var3['getStickerPackBannerAssetUrl'] = var5;
    var5 = function isStickerAssetUrl(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var5 = _closure1_slot12;
            var1 = 'development';
            if(!(var1 === var5)) { _fun0008_ip = 69; continue _fun0008 }
case 29:
            var1 = _closure1_slot16;
            _fun0008_ip = 15; continue _fun0008;
case 69:
            var1 = _closure1_slot15;
case 15:
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        }
    };
    var3['isStickerAssetUrl'] = var5;
    var5 = function isStickerPackAnimated(arg1) {
        var1 = arg1;
        var3 = var1.stickers;
        var2 = var3.some;
        var1 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var3 = var1.format_type;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 6;
                var1 = var1[var6];
                var5 = undefined;
                var1 = var4.bind(var5)(var1);
                var1 = var1.StickerFormat;
                var1 = var1.APNG;
                var1 = var3 === var1;
                if(var1) { _fun0009_ip = 70; continue _fun0009 }
case 71:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.StickerFormat;
                var4 = var4.LOTTIE;
                var1 = var3 === var4;
case 70:
                if(var1) { _fun0009_ip = 72; continue _fun0009 }
case 73:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.StickerFormat;
                var2 = var2.GIF;
                var1 = var3 === var2;
case 72:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isStickerPackAnimated'] = var5;
    var5 = function createStickerPackCategory(arg1) {
        var4 = arg1;
        var1 = {};
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var3 = 6;
        var5 = var5[var3];
        var3 = undefined;
        var5 = var6.bind(var3)(var5);
        var5 = var5.StickerCategoryTypes;
        var5 = var5.PACK;
        var1['type'] = var5;
        var5 = var4.id;
        var1['id'] = var5;
        var5 = var4.name;
        var1['name'] = var5;
        var5 = var4.stickers;
        var1['stickers'] = var5;
        var2 = _closure1_slot18;
        var2 = var2.bind(var3)(var4);
        var1['previewSticker'] = var2;
        return var1;
    };
    var3['createStickerPackCategory'] = var5;
    var5 = function shouldAnimateSticker(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var4 = _closure1_slot8;
            var4 = var4.ANIMATE_ON_INTERACTION;
            if(!(var3 !== var4)) { _fun0010_ip = 24; continue _fun0010 }
case 62:
            var2 = _closure1_slot8;
            var2 = var2.NEVER_ANIMATE;
            var1 = var3 !== var2;
case 24:
            return var1;
        }
    };
    var3['shouldAnimateSticker'] = var5;
    var5 = function shouldAttachSticker(arg1, arg2, arg3, arg4) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var2 = arg2;
            var8 = arg3;
            var7 = arg4;
            var4 = _closure1_slot4;
            var3 = var4.getUploadCount;
            var3 = var3.bind(var4)(var8, var7);
            var4 = 0;
            if(!(!(var3 > var4))) { _fun0011_ip = 74; continue _fun0011 }
case 18:
            var6 = _closure1_slot5;
            var3 = var6.getStickerPreview;
            var3 = var3.bind(var6)(var8, var7);
            var6 = null;
            if(!(var6 != var3)) { _fun0011_ip = 75; continue _fun0011 }
case 76:
            var3 = var3.length;
            if(!(!(var3 > var4))) { _fun0011_ip = 77; continue _fun0011 }
case 75:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var6 = 6;
            var3 = var3[var6];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var3 = var3.StickerSelectLocation;
            var3 = var3.STICKER_PICKER;
            if(!(var3 !== var5)) { _fun0011_ip = 78; continue _fun0011 }
case 79:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var7.bind(var4)(var3);
            var3 = var3.StickerSelectLocation;
            var3 = var3.AUTOCOMPLETE;
            if(!(var3 !== var5)) { _fun0011_ip = 80; continue _fun0011 }
case 81:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var4)(var3);
            var3 = var3.StickerSelectLocation;
            var3 = var3.BUILT_IN_INTEGRATION;
            var3 = false;
            return var3;
case 80:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 11;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getQueriesFromUserInput;
            var1 = var1.bind(var3)(var2);
            var3 = var1.length;
            var1 = 1;
            var1 = var3 > var1;
            return var1;
case 78:
            var1 = var2.trim;
            var2 = var1.bind(var2)();
            var1 = '';
            var1 = var1 !== var2;
            return var1;
case 77:
            var1 = true;
            return var1;
case 74:
            var1 = true;
            return var1;
        }
    };
    var3['shouldAttachSticker'] = var5;
    var5 = function isGuildSticker(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.MetaStickerType;
        var1 = var1.GUILD;
        var1 = var2 === var1;
        return var1;
    };
    var3['isGuildSticker'] = var5;
    var5 = function isStandardSticker(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.MetaStickerType;
        var1 = var1.STANDARD;
        var1 = var2 === var1;
        return var1;
    };
    var3['isStandardSticker'] = var5;
    var5 = function getMessageStickers(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = var2.stickerItems;
            var1 = var1.length;
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0012_ip = 82; continue _fun0012 }
case 83:
            var1 = var2.stickers;
            var1 = var1.length;
            if(!(!(var1 > var3))) { _fun0012_ip = 84; continue _fun0012 }
case 85:
            var1 = new Array(0);
            _fun0012_ip = 2; continue _fun0012;
case 84:
            var1 = var2.stickers;
case 2:
            _fun0012_ip = 86; continue _fun0012;
case 82:
            var1 = var2.stickerItems;
case 86:
            return var1;
        }
    };
    var3['getMessageStickers'] = var5;
    var5 = function isAvailableGuildSticker(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 !== var1)) { _fun0013_ip = 18; continue _fun0013 }
case 87:
            var3 = var1.guild_id;
            var2 = _closure1_slot3;
            var1 = var2.getGuild;
            var2 = var1.bind(var2)(var3);
            var1 = undefined;
            var1 = var1 !== var2;
            return var1;
case 18:
            var1 = false;
            return var1;
        }
    };
    var3['isAvailableGuildSticker'] = var5;
    var3['getFavoriteStickerIds'] = var4;
    var2 = function isFavoriteSticker(arg1) {
        var2 = _closure1_slot20;
        var1 = undefined;
        var3 = var2.bind(var1)();
        var2 = var3.includes;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isFavoriteSticker'] = var2;
    return var1;
})();
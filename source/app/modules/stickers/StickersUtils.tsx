// app/modules/stickers/StickersUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var4 = function getFavoriteStickerIds() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot2;
            var1 = var1.frecencyWithoutFetchingLatest;
            var4 = var1.favoriteStickers;
            var3 = null;
            var5 = var3 == var4;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var4.stickerIds;
case 2:
            if(!(var3 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = _closure1_slot19;
case 4:
            return var1;
        }
    };
    var _closure1_slot20 = var4;
    var5 = global;
    var11 = var5.Object;
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
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var7.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var7 = var6.DEFAULT_STICKER_DIMENSIONS;
    var _closure1_slot6 = var7;
    var7 = var6.STICKER_APPLICATION_ID;
    var _closure1_slot7 = var7;
    var6 = var6.StickerAnimationSettings;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var12 = var6.Endpoints;
    var _closure1_slot9 = var12;
    var6 = var5.window;
    var6 = var6.GLOBAL_ENV;
    var15 = var6.API_ENDPOINT;
    var _closure1_slot10 = var15;
    var19 = var6.MEDIA_PROXY_ENDPOINT;
    var _closure1_slot11 = var19;
    var7 = var6.PROJECT_ENV;
    var _closure1_slot12 = var7;
    var18 = var6.ASSET_ENDPOINT;
    var _closure1_slot13 = var18;
    var6 = var6.CDN_HOST;
    var _closure1_slot14 = var6;
    var10 = var5.Object;
    var7 = var10.values;
    var6 = 6;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.StickerExtensions;
    var10 = var7.bind(var10)(var6);
    var7 = var5.decodeURIComponent;
    var11 = var12.STICKER_ASSET;
    var6 = var10.join;
    var17 = '|';
    var10 = var6.bind(var10)(var17);
    var6 = var5.HermesInternal;
    var6 = var6.concat;
    var14 = '(';
    var13 = ')';
    var10 = var6.bind(var14)(var10, var13);
    var6 = '[\\d]+';
    var6 = var11.bind(var12)(var6, var10);
    var12 = var7.bind(var1)(var6);
    var11 = var5.RegExp;
    var6 = var5.location;
    var27 = var6.protocol;
    var6 = var5.location;
    var24 = var6.protocol;
    var6 = var5.HermesInternal;
    var7 = var6.concat;
    var22 = ')(';
    var28 = var14;
    var26 = var18;
    var25 = var17;
    var23 = var19;
    var21 = var12;
    var20 = var13;
    var27 = var28[var7](var27, var26, var25, var24, var23, var22, var21, var20, var19);
    var7 = var11.prototype;
    var7 = Object.create(var7, {constructor: {value: var11}});
    var10 = 'ig';
    var28 = var7;
    var26 = var10;
    var6 = new var28[var11](var27, var26, var25);
    var6 = var6 instanceof Object ? var6 : var7;
    var _closure1_slot15 = var6;
    var7 = var5.RegExp;
    var6 = var5.location;
    var27 = var6.protocol;
    var5 = var5.HermesInternal;
    var6 = var5.concat;
    var28 = '';
    var26 = var15;
    var25 = var14;
    var24 = var12;
    var23 = var13;
    var27 = var28[var6](var27, var26, var25, var24, var23, var22);
    var6 = var7.prototype;
    var6 = Object.create(var6, {constructor: {value: var7}});
    var28 = var6;
    var26 = var10;
    var5 = new var28[var7](var27, var26, var25);
    var5 = var5 instanceof Object ? var5 : var6;
    var _closure1_slot16 = var5;
    var6 = function getStickerPackPreviewSticker(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var4 = var2.cover_sticker_id;
            var3 = null;
            if(!(var3 != var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
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
            if(!(var3 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var3 = var2.stickers;
            var2 = 0;
            var2 = var3[var2];
            return var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot17 = var6;
    var5 = function getStickerExtensionFromFormatType(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(!(var1 !== var7)) { _fun0003_ip = 9; continue _fun0003 }
case 6:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.APNG;
            if(!(var1 !== var7)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.LOTTIE;
            if(!(var1 !== var7)) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerFormat;
            var1 = var1.GIF;
            if(!(var1 !== var7)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
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
case 14:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerExtensions;
            var1 = var1.GIF;
            return var1;
case 12:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerExtensions;
            var1 = var1.LOTTIE;
            return var1;
case 10:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.StickerExtensions;
            var1 = var1.APNG;
            return var1;
case 9:
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
            if(var1) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = var2.PNG;
            _fun0003_ip = 18; continue _fun0003;
case 16:
            var1 = var2.WEBP;
case 18:
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var7 = new Array(0);
    var _closure1_slot19 = var7;
    var7 = 11;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/stickers/StickersUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getStickerPackPreviewSticker'] = var6;
    var3['getStickerExtensionFromFormatType'] = var5;
    var5 = function(arg1) {
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
case 6:
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
    var5 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
            var6 = var2.name;
            var4 = _closure1_slot18;
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
            var4 = arg1;
            var1 = arguments[1];
            var14 = undefined;
            if(!(var1 === var14)) { _fun0006_ip = 20; continue _fun0006 }
case 28:
            var1 = {};
case 20:
            var2 = var1.isPreview;
            if(!(var2 === var14)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var2 = false;
case 29:
            var13 = var1.size;
            if(!(var13 === var14)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var13 = _closure1_slot6;
case 31:
            var3 = var4.format_type;
            var1 = null;
            if(!(var1 != var3)) { _fun0006_ip = 33; continue _fun0006 }
case 26:
            var6 = var4.format_type;
            var7 = var4.format_type;
            var8 = _closure1_slot0;
            var5 = _closure1_slot1;
            var9 = 6;
            var5 = var5[var9];
            var5 = var8.bind(var14)(var5);
            var5 = var5.StickerFormat;
            var5 = var5.GIF;
            var5 = var7 === var5;
            if(!var5) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var5 = var2;
case 34:
            if(!var5) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var5 = var7.bind(var14)(var5);
            var5 = var5.StickerFormat;
            var6 = var5.PNG;
case 36:
            var5 = _closure1_slot18;
            var8 = var5.bind(var14)(var6);
            var7 = _closure1_slot9;
            var6 = var7.STICKER_ASSET;
            var5 = var4.id;
            var6 = var6.bind(var7)(var5, var8);
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var9];
            var5 = var7.bind(var14)(var5);
            var5 = var5.StickerExtensions;
            var7 = var5.WEBP;
            var5 = '';
            var11 = var5;
            if(!(var8 === var7)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
            var11 = '&quality=lossless';
case 38:
            var8 = _closure1_slot12;
            var7 = 'development';
            if(!(var7 === var8)) { _fun0006_ip = 40; continue _fun0006 }
case 41:
            var7 = global;
            var8 = var7.location;
            var10 = var8.protocol;
            var8 = _closure1_slot10;
            var7 = var7.HermesInternal;
            var7 = var7.concat;
            var7 = var7.bind(var5)(var10, var8, var6);
            return var7;
case 40:
            var8 = var4.format_type;
            var10 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var9];
            var7 = var10.bind(var14)(var7);
            var7 = var7.StickerFormat;
            var7 = var7.LOTTIE;
            if(!(var8 !== var7)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var7 = var4.format_type;
            var8 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var9];
            var4 = var8.bind(var14)(var4);
            var4 = var4.StickerFormat;
            var4 = var4.APNG;
            var10 = var5;
            if(!(var7 === var4)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var10 = var5;
            if(!var2) { _fun0006_ip = 44; continue _fun0006 }
case 46:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 8;
            var2 = var7[var2];
            var4 = var4.bind(var14)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            var10 = var5;
            if(var2) { _fun0006_ip = 44; continue _fun0006 }
case 47:
            var10 = '&passthrough=false';
case 44:
            var2 = global;
            var16 = var2.Math;
            var9 = var16.min;
            var12 = _closure1_slot0;
            var15 = _closure1_slot1;
            var7 = 9;
            var4 = var15[var7];
            var8 = var12.bind(var14)(var4);
            var4 = var8.getDevicePixelRatio;
            var8 = var4.bind(var8)();
            var4 = 2;
            var4 = var9.bind(var16)(var4, var8);
            var8 = var2.location;
            var9 = var8.protocol;
            var22 = _closure1_slot11;
            var7 = var15[var7];
            var12 = var12.bind(var14)(var7);
            var7 = var12.getBestMediaProxySize;
            var4 = var13 * var4;
            var19 = var7.bind(var12)(var4);
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var20 = '?size=';
            var24 = var5;
            var23 = var9;
            var21 = var6;
            var18 = var10;
            var17 = var11;
            var2 = var24[var4](var23, var22, var21, var20, var19, var18, var17, var16);
            return var2;
case 42:
            var2 = global;
            var4 = var2.location;
            var4 = var4.protocol;
            var3 = _closure1_slot13;
            var2 = var2.HermesInternal;
            var2 = var2.concat;
            var2 = var2.bind(var5)(var4, var3, var6);
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
            if(!(var1 != var14)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 7;
            var2 = var5[var2];
            var7 = undefined;
            var2 = var4.bind(var7)(var2);
            var2 = var2.SUPPORTS_WEBP;
            var13 = 'png';
            if(!var2) { _fun0007_ip = 27; continue _fun0007 }
case 8:
            var13 = 'webp';
case 27:
            var2 = _closure1_slot14;
            if(!(var1 == var2)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
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
            _fun0007_ip = 52; continue _fun0007;
case 50:
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
case 52:
            var2 = var4;
            if(!(var1 != var6)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var5 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 9;
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
case 53:
            return var2;
case 48:
            return var1;
        }
    };
    var3['getStickerPackBannerAssetUrl'] = var5;
    var5 = function(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var2 = var3.match;
            var5 = _closure1_slot12;
            var1 = 'development';
            if(!(var1 === var5)) { _fun0008_ip = 3; continue _fun0008 }
case 30:
            var1 = _closure1_slot16;
            _fun0008_ip = 55; continue _fun0008;
case 3:
            var1 = _closure1_slot15;
case 55:
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        }
    };
    var3['isStickerAssetUrl'] = var5;
    var5 = function(arg1) {
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
                if(var1) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var6];
                var4 = var7.bind(var5)(var4);
                var4 = var4.StickerFormat;
                var4 = var4.LOTTIE;
                var1 = var3 === var4;
case 56:
                if(var1) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var6];
                var2 = var4.bind(var5)(var2);
                var2 = var2.StickerFormat;
                var2 = var2.GIF;
                var1 = var3 === var2;
case 58:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['isStickerPackAnimated'] = var5;
    var5 = function(arg1) {
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
        var2 = _closure1_slot17;
        var2 = var2.bind(var3)(var4);
        var1['previewSticker'] = var2;
        return var1;
    };
    var3['createStickerPackCategory'] = var5;
    var5 = function(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var4 = _closure1_slot8;
            var4 = var4.ANIMATE_ON_INTERACTION;
            if(!(var3 !== var4)) { _fun0010_ip = 24; continue _fun0010 }
case 49:
            var2 = _closure1_slot8;
            var2 = var2.NEVER_ANIMATE;
            var1 = var3 !== var2;
case 24:
            return var1;
        }
    };
    var3['shouldAnimateSticker'] = var5;
    var5 = function(arg1, arg2, arg3, arg4) {
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
            if(!(!(var3 > var4))) { _fun0011_ip = 60; continue _fun0011 }
case 5:
            var6 = _closure1_slot5;
            var3 = var6.getStickerPreview;
            var3 = var3.bind(var6)(var8, var7);
            var6 = null;
            if(!(var6 != var3)) { _fun0011_ip = 61; continue _fun0011 }
case 62:
            var3 = var3.length;
            if(!(!(var3 > var4))) { _fun0011_ip = 63; continue _fun0011 }
case 61:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var6 = 6;
            var3 = var3[var6];
            var4 = undefined;
            var3 = var7.bind(var4)(var3);
            var3 = var3.StickerSelectLocation;
            var3 = var3.STICKER_PICKER;
            if(!(var3 !== var5)) { _fun0011_ip = 64; continue _fun0011 }
case 34:
            var7 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var7.bind(var4)(var3);
            var3 = var3.StickerSelectLocation;
            var3 = var3.AUTOCOMPLETE;
            if(!(var3 !== var5)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var6];
            var3 = var5.bind(var4)(var3);
            var3 = var3.StickerSelectLocation;
            var3 = var3.BUILT_IN_INTEGRATION;
            var3 = false;
            return var3;
case 65:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.getQueriesFromUserInput;
            var1 = var1.bind(var3)(var2);
            var3 = var1.length;
            var1 = 1;
            var1 = var3 > var1;
            return var1;
case 64:
            var1 = var2.trim;
            var2 = var1.bind(var2)();
            var1 = '';
            var1 = var1 !== var2;
            return var1;
case 63:
            var1 = true;
            return var1;
case 60:
            var1 = true;
            return var1;
        }
    };
    var3['shouldAttachSticker'] = var5;
    var5 = function(arg1) {
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
    var5 = function(arg1) {
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
    var5 = function(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = var2.stickerItems;
            var1 = var1.length;
            var3 = 0;
            if(!(!(var1 > var3))) { _fun0012_ip = 67; continue _fun0012 }
case 68:
            var1 = var2.stickers;
            var1 = var1.length;
            if(!(!(var1 > var3))) { _fun0012_ip = 69; continue _fun0012 }
case 32:
            var1 = new Array(0);
            _fun0012_ip = 6; continue _fun0012;
case 69:
            var1 = var2.stickers;
case 6:
            _fun0012_ip = 70; continue _fun0012;
case 67:
            var1 = var2.stickerItems;
case 70:
            return var1;
        }
    };
    var3['getMessageStickers'] = var5;
    var5 = function(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 !== var1)) { _fun0013_ip = 71; continue _fun0013 }
case 72:
            var3 = var1.guild_id;
            var2 = _closure1_slot3;
            var1 = var2.getGuild;
            var2 = var1.bind(var2)(var3);
            var1 = undefined;
            var1 = var1 !== var2;
            return var1;
case 71:
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
// app/modules/recent_avatars/RecentAvatarUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var8;
    var5 = function getImageFormat(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = var2.storageHash;
            var1 = var2.canAnimate;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var5 = var2.allowWebp;
            if(!(var5 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = true;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 1;
            var1 = var1[var7];
            var2 = var2.bind(var6)(var1);
            var1 = var2.isAnimatedIconHash;
            var1 = var1.bind(var2)(var4);
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var1 = global;
            var1 = var1.window;
            var1 = var1.GLOBAL_ENV;
            var2 = var1.CDN_HOST;
            var1 = null;
            var2 = var1 == var2;
            var1 = 'jpg';
            if(var2) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var8 = 'png';
            var2 = var8;
            if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 1;
            var4 = var10[var4];
            var4 = var9.bind(var6)(var4);
            var4 = var4.SUPPORTS_WEBP;
            var2 = var8;
            if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var2 = 'webp';
case 11:
            var1 = var2;
case 9:
            _fun0001_ip = 14; continue _fun0001;
case 8:
            var4 = 'gif';
            var2 = var4;
            if(!var5) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = var3.SUPPORTS_WEBP;
            var2 = var4;
            if(!var3) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var2 = 'webp';
case 15:
            var1 = var2;
case 14:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function getArchivedAvatarURL(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.userId;
            var10 = var1.avatarId;
            var9 = var1.storageHash;
            var5 = var1.canAnimate;
            var7 = undefined;
            if(!(var5 === var7)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var5 = false;
case 18:
            var8 = var1.allowWebp;
            if(!(var8 === var7)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var8 = true;
case 20:
            var14 = var1.size;
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var4 = var2.CDN_HOST;
            var2 = null;
            if(!(var2 == var4)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var2 = var1.location;
            var3 = var2.protocol;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.API_ENDPOINT;
            var6 = var3 + var2;
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var2 = var1.HermesInternal;
            var3 = var2.concat;
            var2 = 'https://';
            var6 = var3.bind(var2)(var4);
case 24:
            var4 = _closure1_slot4;
            var3 = {};
            var3['storageHash'] = var9;
            var3['canAnimate'] = var5;
            var3['allowWebp'] = var8;
            var8 = var4.bind(var7)(var3);
            var4 = {};
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 2;
            var12 = var16[var3];
            var13 = var15.bind(var7)(var12);
            var12 = var13.getBestMediaProxySize;
            var3 = var16[var3];
            var15 = var15.bind(var7)(var3);
            var3 = var15.getDevicePixelRatio;
            var3 = var3.bind(var15)();
            var3 = var14 * var3;
            var3 = var12.bind(var13)(var3);
            var4['size'] = var3;
            var3 = 'webp';
            var3 = var3 === var8;
            if(!var3) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var3 = var5;
case 25:
            if(!var3) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 1;
            var5 = var13[var5];
            var12 = var12.bind(var7)(var5);
            var5 = var12.isAnimatedIconHash;
            var3 = var5.bind(var12)(var9);
case 27:
            if(!var3) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var3 = true;
            var4['animated'] = var3;
case 29:
            var5 = _closure1_slot3;
            var3 = var5.ARCHIVED_AVATAR;
            var21 = var5;
            var20 = var11;
            var19 = var10;
            var18 = var9;
            var17 = var8;
            var19 = var21[var3](var20, var19, var18, var17, var16);
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 3;
            var2 = var8[var2];
            var3 = var3.bind(var7)(var2);
            var2 = var3.stringify;
            var17 = var2.bind(var3)(var4);
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var21 = '';
            var18 = '?';
            var20 = var6;
            var1 = var21[var3](var20, var19, var18, var17, var16);
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = function getFileTypeFromExtension(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = 'gif';
            if(!(var1 !== var4)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var1 = 'png';
            if(!(var1 !== var4)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var1 = 'jpg';
            if(!(var1 !== var4)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var1 = 'webp';
            if(!(var1 !== var4)) { _fun0003_ip = 6; continue _fun0003 }
case 37:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var1;
case 6:
            var1 = 'image/webp';
            return var1;
case 35:
            var1 = 'image/jpeg';
            return var1;
case 33:
            var1 = 'image/png';
            return var1;
case 31:
            var1 = 'image/gif';
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var7.bind(var1)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot3 = var6;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/recent_avatars/RecentAvatarUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['getImageFormat'] = var5;
    var3['getArchivedAvatarURL'] = var4;
    var4 = function generateAvatarDescription(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 == var1)) { _fun0004_ip = 32; continue _fun0004 }
case 38:
            var1 = {};
case 32:
            var6 = var1.filename;
            var7 = var1.assetOrigin;
            var8 = undefined;
            if(!(var8 === var7)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var3.bind(var8)(var1);
            var1 = var1.AssetOriginTypes;
            var7 = var1.NEW_ASSET;
case 39:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 5;
            var3 = var3[var11];
            var3 = var4.bind(var8)(var3);
            var3 = var3.AssetOriginTypes;
            var3 = var3.ARCHIVED_ASSET;
            if(!(var7 === var3)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            return var8;
case 41:
            if(!(var2 == var6)) { _fun0004_ip = 8; continue _fun0004 }
case 43:
            var5 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 4;
            var3 = var9[var2];
            var3 = var5.bind(var8)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var9[var2];
            var2 = var5.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.lqaIxI;
            var6 = var3.bind(var4)(var2);
case 8:
            var2 = global;
            var2 = var2.Date;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var15 = var3;
            var2 = new var15[var2](var14);
            var12 = var2 instanceof Object ? var2 : var3;
            var5 = var12.toLocaleString;
            var10 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 4;
            var3 = var2[var9];
            var3 = var10.bind(var8)(var3);
            var3 = var3.intl;
            var4 = var3.currentLocale;
            var3 = {'year': 'numeric', 'day': 'numeric', 'month': 'long', 'hour': 'numeric', 'minute': 'numeric'};
            var5 = var5.bind(var12)(var4, var3);
            var3 = var2[var9];
            var3 = var10.bind(var8)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var2 = var2[var11];
            var2 = var10.bind(var8)(var2);
            var2 = var2.AssetOriginTypes;
            var2 = var2.EDITED_ARCHIVED_ASSET;
            if(!(var7 !== var2)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.DYil93;
            _fun0004_ip = 46; continue _fun0004;
case 44:
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var7.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.eC2sZi;
case 46:
            var1 = {};
            var1['name'] = var6;
            var1['dateTime'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['generateAvatarDescription'] = var4;
    var4 = function generateRecentAvatarFileDetails(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg2;
            var3 = _closure1_slot4;
            var1 = {};
            var4 = arg1;
            var1['storageHash'] = var4;
            var4 = true;
            var1['canAnimate'] = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 1;
            var5 = var5[var4];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var5 = var5.SUPPORTS_WEBP;
            var1['allowWebp'] = var5;
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var5 = null;
            if(!(var5 != var7)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var6 = var7.split;
            var5 = ',';
            var6 = var6.bind(var7)(var5);
            var5 = 0;
            var8 = var6[var5];
            _fun0005_ip = 49; continue _fun0005;
case 47:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var6 = var10[var5];
            var6 = var9.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.lqaIxI;
            var8 = var6.bind(var7)(var5);
case 49:
            var5 = global;
            var5 = var5.HermesInternal;
            var7 = var5.concat;
            var6 = '';
            var5 = '.';
            var5 = var7.bind(var6)(var8, var5, var3);
            var1['filename'] = var5;
            var2 = _closure1_slot6;
            var2 = var2.bind(var4)(var3);
            var1['type'] = var2;
            return var1;
        }
    };
    var3['generateRecentAvatarFileDetails'] = var4;
    var4 = function createPendingImage(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var5 = var2.assetOrigin;
            var1 = undefined;
            if(!(var5 === var1)) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 5;
            var3 = var6[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.AssetOriginTypes;
            var5 = var3.NEW_ASSET;
case 50:
            var4 = var2.imageUri;
            var3 = var2.description;
            var6 = var2.originalAsset;
            var2 = var2.originalMd5;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = 5;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.AssetOriginTypes;
            var8 = var8.NEW_ASSET;
            if(!(var8 !== var5)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.AssetOriginTypes;
            var8 = var8.EDITED_ARCHIVED_ASSET;
            if(!(var8 !== var5)) { _fun0006_ip = 54; continue _fun0006 }
case 55:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var1)(var8);
            var8 = var8.AssetOriginTypes;
            var8 = var8.ARCHIVED_ASSET;
            if(!(var8 !== var5)) { _fun0006_ip = 56; continue _fun0006 }
case 57:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 6;
            var7 = var9[var7];
            var8 = var8.bind(var1)(var7);
            var7 = var8.assertNever;
            var7 = var7.bind(var8)(var5);
            return var1;
case 56:
            var1 = {};
            var1['assetOrigin'] = var5;
            var1['imageUri'] = var4;
            var1['originalAsset'] = var6;
            return var1;
case 54:
            var1 = {};
            var1['assetOrigin'] = var5;
            var1['imageUri'] = var4;
            var1['description'] = var3;
            var1['originalAsset'] = var6;
            var1['originalMd5'] = var2;
            return var1;
case 52:
            var1 = {};
            var1['assetOrigin'] = var5;
            var1['imageUri'] = var4;
            var1['description'] = var3;
            var1['originalMd5'] = var2;
            return var1;
        }
    };
    var3['createPendingImage'] = var4;
    var2 = function getPendingAvatarSrc(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var9 = var1.userId;
            var8 = var1.image;
            var7 = var1.size;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0007_ip = 58; continue _fun0007 }
case 59:
            var7 = 80;
case 58:
            var6 = var1.canAnimate;
            if(!(var6 === var5)) { _fun0007_ip = 60; continue _fun0007 }
case 7:
            var6 = true;
case 60:
            var2 = null;
            var1 = var8;
            if(!(var2 != var8)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var3 = 'string';
            var2 = typeof var8;
            var1 = var8;
            if(!(var3 !== var2)) { _fun0007_ip = 61; continue _fun0007 }
case 63:
            var4 = var8.assetOrigin;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.AssetOriginTypes;
            var2 = var2.ARCHIVED_ASSET;
            if(!(var4 !== var2)) { _fun0007_ip = 64; continue _fun0007 }
case 65:
            var2 = var8.imageUri;
            _fun0007_ip = 66; continue _fun0007;
case 64:
            var4 = _closure1_slot5;
            var3 = {};
            var3['userId'] = var9;
            var9 = var8.originalAsset;
            var9 = var9.id;
            var3['avatarId'] = var9;
            var8 = var8.originalAsset;
            var8 = var8.storageHash;
            var3['storageHash'] = var8;
            var3['size'] = var7;
            var3['canAnimate'] = var6;
            var2 = var4.bind(var5)(var3);
case 66:
            var1 = var2;
case 61:
            return var1;
        }
    };
    var3['getPendingAvatarSrc'] = var2;
    return var1;
})();
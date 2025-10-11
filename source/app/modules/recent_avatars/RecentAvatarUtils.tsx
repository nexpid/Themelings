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
            var3 = var2.storageHash;
            var1 = var2.canAnimate;
            var7 = undefined;
            if(!(var1 === var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var4 = var2.allowWebp;
            if(!(var4 === var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = true;
case 4:
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 1;
            var1 = var5[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.isAnimatedIconHash;
            var2 = var1.bind(var2)(var3);
            var1 = 'gif';
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 6:
            var2 = global;
            var2 = var2.window;
            var2 = var2.GLOBAL_ENV;
            var3 = var2.CDN_HOST;
            var2 = null;
            var3 = var2 == var3;
            var2 = 'jpg';
            if(var3) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = 'png';
            var3 = var5;
            if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 1;
            var4 = var8[var4];
            var4 = var6.bind(var7)(var4);
            var4 = var4.SUPPORTS_WEBP;
            var3 = var5;
            if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var3 = 'webp';
case 11:
            var2 = var3;
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function getArchivedAvatarURL(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var9 = var1.userId;
            var8 = var1.avatarId;
            var7 = var1.storageHash;
            var10 = var1.canAnimate;
            var16 = undefined;
            if(!(var10 === var16)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var10 = false;
case 14:
            var6 = var1.allowWebp;
            if(!(var6 === var16)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var6 = true;
case 16:
            var14 = var1.size;
            var1 = global;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var4 = var2.CDN_HOST;
            var2 = null;
            if(!(var2 == var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var2 = var1.location;
            var3 = var2.protocol;
            var2 = var1.window;
            var2 = var2.GLOBAL_ENV;
            var2 = var2.API_ENDPOINT;
            var5 = var3 + var2;
            _fun0002_ip = 20; continue _fun0002;
case 18:
            var2 = var1.HermesInternal;
            var3 = var2.concat;
            var2 = 'https://';
            var5 = var3.bind(var2)(var4);
case 20:
            var4 = _closure1_slot4;
            var3 = {};
            var3['storageHash'] = var7;
            var3['canAnimate'] = var10;
            var3['allowWebp'] = var6;
            var18 = var4.bind(var16)(var3);
            var4 = _closure1_slot1;
            var17 = _closure1_slot2;
            var3 = 2;
            var3 = var17[var3];
            var10 = var4.bind(var16)(var3);
            var4 = var10.stringify;
            var3 = {};
            var15 = _closure1_slot0;
            var11 = 3;
            var12 = var17[var11];
            var13 = var15.bind(var16)(var12);
            var12 = var13.getBestMediaProxySize;
            var11 = var17[var11];
            var15 = var15.bind(var16)(var11);
            var11 = var15.getDevicePixelRatio;
            var11 = var11.bind(var15)();
            var11 = var14 * var11;
            var11 = var12.bind(var13)(var11);
            var3['size'] = var11;
            var10 = var4.bind(var10)(var3);
            var3 = var1.HermesInternal;
            var4 = var3.concat;
            var3 = '?';
            var4 = var4.bind(var3)(var10);
            var3 = _closure1_slot3;
            var2 = var3.ARCHIVED_AVATAR;
            var22 = var3;
            var21 = var9;
            var20 = var8;
            var19 = var7;
            var3 = var22[var2](var21, var20, var19, var18, var17);
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = '';
            var1 = var2.bind(var1)(var5, var3, var4);
            return var1;
        }
    };
    var _closure1_slot5 = var4;
    var1 = function getFileTypeFromExtension(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = 'gif';
            if(!(var1 !== var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var1 = 'png';
            if(!(var1 !== var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var1 = 'jpg';
            if(!(var1 !== var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.assertNever;
            var2 = var2.bind(var3)(var4);
            return var1;
case 25:
            var1 = 'image/jpeg';
            return var1;
case 23:
            var1 = 'image/png';
            return var1;
case 21:
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
            if(!(var2 == var1)) { _fun0004_ip = 22; continue _fun0004 }
case 27:
            var1 = {};
case 22:
            var6 = var1.filename;
            var7 = var1.assetOrigin;
            var8 = undefined;
            if(!(var8 === var7)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var3.bind(var8)(var1);
            var1 = var1.AssetOriginTypes;
            var7 = var1.NEW_ASSET;
case 28:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var11 = 5;
            var3 = var3[var11];
            var3 = var4.bind(var8)(var3);
            var3 = var3.AssetOriginTypes;
            var3 = var3.ARCHIVED_ASSET;
            if(!(var7 === var3)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
            return var8;
case 30:
            if(!(var2 == var6)) { _fun0004_ip = 9; continue _fun0004 }
case 32:
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
            var2 = var2.lqaIxM;
            var6 = var3.bind(var4)(var2);
case 9:
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
            if(!(var7 !== var2)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var9];
            var2 = var7.bind(var8)(var2);
            var2 = var2.t;
            var2 = var2.DYil9/;
            _fun0004_ip = 35; continue _fun0004;
case 33:
            var7 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var9];
            var1 = var7.bind(var8)(var1);
            var1 = var1.t;
            var2 = var1.eC2sZm;
case 35:
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
            var1 = {'storageHash': null, 'canAnimate': true, 'allowWebp': false};
            var4 = arg1;
            var1['storageHash'] = var4;
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = {};
            var5 = null;
            if(!(var5 != var7)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var6 = var7.split;
            var5 = ',';
            var6 = var6.bind(var7)(var5);
            var5 = 0;
            var8 = var6[var5];
            _fun0005_ip = 38; continue _fun0005;
case 36:
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
            var5 = var5.lqaIxM;
            var8 = var6.bind(var7)(var5);
case 38:
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
            var5 = arg1;
            var4 = var5.assetOrigin;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 5;
            var2 = var6[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.AssetOriginTypes;
            var4 = var2.NEW_ASSET;
case 39:
            var3 = var5.imageUri;
            var2 = var5.description;
            var5 = var5.originalAsset;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var9 = 5;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.AssetOriginTypes;
            var7 = var7.NEW_ASSET;
            if(!(var7 !== var4)) { _fun0006_ip = 41; continue _fun0006 }
case 32:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.AssetOriginTypes;
            var7 = var7.EDITED_ARCHIVED_ASSET;
            if(!(var7 !== var4)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var7 = var8.bind(var1)(var7);
            var7 = var7.AssetOriginTypes;
            var7 = var7.ARCHIVED_ASSET;
            if(!(var7 !== var4)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 6;
            var6 = var8[var6];
            var7 = var7.bind(var1)(var6);
            var6 = var7.assertNever;
            var6 = var6.bind(var7)(var4);
            return var1;
case 44:
            var1 = {};
            var1['assetOrigin'] = var4;
            var1['imageUri'] = var3;
            var1['originalAsset'] = var5;
            return var1;
case 42:
            var1 = {};
            var1['assetOrigin'] = var4;
            var1['imageUri'] = var3;
            var1['description'] = var2;
            var1['originalAsset'] = var5;
            return var1;
case 41:
            var1 = {};
            var1['assetOrigin'] = var4;
            var1['imageUri'] = var3;
            var1['description'] = var2;
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
            if(!(var7 === var5)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var7 = 80;
case 46:
            var6 = var1.canAnimate;
            if(!(var6 === var5)) { _fun0007_ip = 48; continue _fun0007 }
case 7:
            var6 = true;
case 48:
            var2 = null;
            var1 = var8;
            if(!(var2 != var8)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
            var3 = 'string';
            var2 = typeof var8;
            var1 = var8;
            if(!(var3 !== var2)) { _fun0007_ip = 49; continue _fun0007 }
case 51:
            var4 = var8.assetOrigin;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.AssetOriginTypes;
            var2 = var2.ARCHIVED_ASSET;
            if(!(var4 !== var2)) { _fun0007_ip = 52; continue _fun0007 }
case 53:
            var2 = var8.imageUri;
            _fun0007_ip = 54; continue _fun0007;
case 52:
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
            var6 = false;
            var3['allowWebp'] = var6;
            var2 = var4.bind(var5)(var3);
case 54:
            var1 = var2;
case 49:
            return var1;
        }
    };
    var3['getPendingAvatarSrc'] = var2;
    return var1;
})();
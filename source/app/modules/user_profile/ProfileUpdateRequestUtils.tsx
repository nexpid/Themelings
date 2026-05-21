// app/modules/user_profile/ProfileUpdateRequestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/ProfileUpdateRequestUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getProfileChangesForUpdateRequest(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var1 = {};
            var2 = var5.pendingBanner;
            var4 = undefined;
            if(!(var4 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var5.pendingBanner;
            var1['banner'] = var2;
            var3 = var5.pendingBanner;
            var2 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var5.pendingBannerOriginalMd5;
            var6 = var2 != var3;
            var2 = null;
            if(!var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = var3;
case 5:
            var1['bannerOriginalMd5'] = var2;
case 2:
            var2 = var5.pendingBio;
            var3 = null;
            if(!(var3 != var2)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = var5.pendingBio;
            var1['bio'] = var2;
case 7:
            var2 = var5.pendingPronouns;
            if(!(var3 != var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var2 = var5.pendingPronouns;
            var1['pronouns'] = var2;
case 9:
            var2 = var5.pendingAccentColor;
            if(!(var4 !== var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var5.pendingAccentColor;
            var1['accent_color'] = var2;
case 11:
            var2 = var5.pendingThemeColors;
            if(!(var4 !== var2)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var5.pendingThemeColors;
            var1['theme_colors'] = var2;
case 13:
            var3 = function getCollectiblesChangesForUpdateRequest(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var10 = var1.pendingProfileEffect;
                    var5 = var1.pendingProfileFrame;
                    var1 = undefined;
                    if(!(var1 === var10)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    if(!(var1 !== var5)) { _fun0002_ip = 17; continue _fun0002 }
case 15:
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 1;
                    var3 = var6[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = arg2;
                    var4 = var4.bind(var1)(var3);
                    var3 = null;
                    var7 = var3 == var4;
                    var6 = undefined;
                    if(var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var6 = var4.collectibles;
case 18:
                    if(!(var3 == var6)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var6 = new Array(0);
case 20:
                    var8 = new Array(0);
                    var12 = 0;
                    var14 = var8;
                    var13 = var6;
                    var4 = arraySpread(var14, var13, var12);
                    var7 = var8;
                    if(!(var1 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var6 = var8.filter;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.CollectiblesItemType;
                        var1 = var1.PROFILE_EFFECT;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var4 = var6.bind(var8)(var4);
                    var7 = var4;
                    if(!(var3 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
                    var8 = var4.push;
                    var6 = {};
                    var10 = var10.skuId;
                    var6['skuId'] = var10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 2;
                    var9 = var11[var9];
                    var9 = var10.bind(var1)(var9);
                    var9 = var9.CollectiblesItemType;
                    var9 = var9.PROFILE_EFFECT;
                    var6['type'] = var9;
                    var6 = var8.bind(var4)(var6);
                    var7 = var4;
case 22:
                    var4 = var7;
                    if(!(var1 !== var5)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var6 = var7.filter;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.CollectiblesItemType;
                        var1 = var1.PROFILE_FRAME;
                        var1 = var2 !== var1;
                        return var1;
                    };
                    var1 = var6.bind(var7)(var1);
                    var4 = var1;
                    if(!(var3 !== var5)) { _fun0002_ip = 25; continue _fun0002 }
case 27:
                    var3 = var1.push;
                    var3 = var3.bind(var1)(var5);
                    var4 = var1;
case 25:
                    var1 = {};
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.skuId;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1['collectibles_sku_ids'] = var2;
                    return var1;
case 17:
                    var1 = {};
                    return var1;
                }
            };
            var2 = arg2;
            var2 = var3.bind(var4)(var5, var2);
            var3 = var2.collectibles_sku_ids;
            if(!(var4 !== var3)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var2 = var2.collectibles_sku_ids;
            var1['collectibles_sku_ids'] = var2;
case 28:
            return var1;
        }
    };
    var3['getProfileChangesForUpdateRequest'] = var4;
    var4 = function getAccountUpdateForUpdateRequest(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.pendingGlobalName;
            var4 = undefined;
            if(!(var4 !== var3)) { _fun0003_ip = 30; continue _fun0003 }
case 3:
            var3 = var2.pendingGlobalName;
            var1['globalName'] = var3;
case 30:
            var3 = var2.pendingNameplate;
            if(!(var4 !== var3)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var3 = var2.pendingNameplate;
            var1['nameplate'] = var3;
case 31:
            var3 = var2.pendingAvatar;
            if(!(var4 !== var3)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var5 = var2.pendingAvatar;
            var3 = null;
            if(!(var3 !== var5)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var7 = var5.assetOrigin;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 0;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.AssetOriginTypes;
            var6 = var6.ARCHIVED_ASSET;
            if(!(var7 !== var6)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var6 = var5.imageUri;
            var1['avatar'] = var6;
            var6 = var5.description;
            var1['avatarDescription'] = var6;
            var6 = var5.originalMd5;
            var1['avatarOriginalMd5'] = var6;
            _fun0003_ip = 33; continue _fun0003;
case 37:
            var5 = var5.originalAsset;
            var5 = var5.id;
            var1['avatarId'] = var5;
            _fun0003_ip = 33; continue _fun0003;
case 35:
            var1['avatar'] = var3;
case 33:
            var3 = var2.pendingAvatarDecoration;
            if(!(var4 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var3 = var2.pendingAvatarDecoration;
            var1['avatarDecoration'] = var3;
case 39:
            var3 = var2.pendingDisplayNameStyles;
            if(!(var4 !== var3)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var2 = var2.pendingDisplayNameStyles;
            var1['displayNameStyles'] = var2;
case 41:
            return var1;
        }
    };
    var3['getAccountUpdateForUpdateRequest'] = var4;
    var4 = function getGuildMemberChangesForUpdateRequest(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.pendingAvatar;
            var4 = undefined;
            if(!(var4 !== var3)) { _fun0004_ip = 43; continue _fun0004 }
case 3:
            var5 = var2.pendingAvatar;
            var3 = null;
            if(!(var3 !== var5)) { _fun0004_ip = 44; continue _fun0004 }
case 30:
            var7 = var5.assetOrigin;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 0;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.AssetOriginTypes;
            var6 = var6.ARCHIVED_ASSET;
            if(!(var7 !== var6)) { _fun0004_ip = 45; continue _fun0004 }
case 36:
            var6 = var5.imageUri;
            var1['avatar'] = var6;
            var6 = var5.description;
            var1['avatarDescription'] = var6;
            var6 = var5.originalMd5;
            var1['avatarOriginalMd5'] = var6;
            _fun0004_ip = 43; continue _fun0004;
case 45:
            var5 = var5.originalAsset;
            var5 = var5.id;
            var1['avatarId'] = var5;
            _fun0004_ip = 43; continue _fun0004;
case 44:
            var1['avatar'] = var3;
case 43:
            var3 = var2.pendingNickname;
            if(!(var4 !== var3)) { _fun0004_ip = 35; continue _fun0004 }
case 46:
            var5 = var2.pendingNickname;
            var3 = null;
            var6 = var3 != var5;
            var3 = '';
            if(!var6) { _fun0004_ip = 47; continue _fun0004 }
case 48:
            var3 = var5;
case 47:
            var1['nick'] = var3;
case 35:
            var3 = var2.pendingAvatarDecoration;
            if(!(var4 !== var3)) { _fun0004_ip = 49; continue _fun0004 }
case 50:
            var3 = var2.pendingAvatarDecoration;
            var1['avatarDecoration'] = var3;
case 49:
            var3 = var2.pendingNameplate;
            if(!(var4 !== var3)) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var3 = var2.pendingNameplate;
            var1['nameplate'] = var3;
case 51:
            var3 = var2.pendingDisplayNameStyles;
            if(!(var4 !== var3)) { _fun0004_ip = 53; continue _fun0004 }
case 54:
            var2 = var2.pendingDisplayNameStyles;
            var1['displayNameStyles'] = var2;
case 53:
            return var1;
        }
    };
    var3['getGuildMemberChangesForUpdateRequest'] = var4;
    var2 = function getPrimaryGuildChangesForUpdateRequest(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.pendingPrimaryGuildId;
            var3 = undefined;
            if(!(var3 !== var4)) { _fun0005_ip = 30; continue _fun0005 }
case 3:
            var2 = var2.pendingPrimaryGuildId;
            var1['primaryGuildId'] = var2;
case 30:
            return var1;
        }
    };
    var3['getPrimaryGuildChangesForUpdateRequest'] = var2;
    return var1;
})();
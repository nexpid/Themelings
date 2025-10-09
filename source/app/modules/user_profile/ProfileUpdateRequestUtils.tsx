// app/modules/user_profile/ProfileUpdateRequestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/ProfileUpdateRequestUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getProfileChangesForUpdateRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var2 = var4.pendingBanner;
            var3 = undefined;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var4.pendingBanner;
            var1['banner'] = var2;
case 2:
            var5 = var4.pendingBio;
            var2 = null;
            if(!(var2 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var4.pendingBio;
            var1['bio'] = var5;
case 4:
            var5 = var4.pendingPronouns;
            if(!(var2 != var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var4.pendingPronouns;
            var1['pronouns'] = var5;
case 6:
            var5 = var4.pendingAccentColor;
            if(!(var3 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var4.pendingAccentColor;
            var1['accent_color'] = var5;
case 8:
            var5 = var4.pendingThemeColors;
            if(!(var3 !== var5)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = var4.pendingThemeColors;
            var1['theme_colors'] = var5;
case 10:
            var5 = var4.pendingProfileEffect;
            if(!(var3 !== var5)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = var4.pendingProfileEffect;
            var5 = var2 == var4;
            var3 = undefined;
            if(var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var3 = var4.skuId;
case 14:
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var2 = var3;
case 16:
            var1['profile_effect_sku_id'] = var2;
case 12:
            return var1;
        }
    };
    var3['getProfileChangesForUpdateRequest'] = var4;
    var4 = function getAccountUpdateForUpdateRequest(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.pendingGlobalName;
            var4 = undefined;
            if(!(var4 !== var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = var2.pendingGlobalName;
            var1['globalName'] = var3;
case 2:
            var3 = var2.pendingNameplate;
            if(!(var4 !== var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var3 = var2.pendingNameplate;
            var1['nameplate'] = var3;
case 18:
            var3 = var2.pendingAvatar;
            if(!(var4 !== var3)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var5 = var2.pendingAvatar;
            var3 = null;
            if(!(var3 !== var5)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = var5.assetOrigin;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 0;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.AssetOriginTypes;
            var6 = var6.ARCHIVED_ASSET;
            if(!(var7 !== var6)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var6 = var5.imageUri;
            var1['avatar'] = var6;
            var6 = var5.description;
            var1['avatarDescription'] = var6;
            _fun0002_ip = 20; continue _fun0002;
case 24:
            var5 = var5.originalAsset;
            var5 = var5.id;
            var1['avatarId'] = var5;
            _fun0002_ip = 20; continue _fun0002;
case 22:
            var1['avatar'] = var3;
case 20:
            var3 = var2.pendingAvatarDecoration;
            if(!(var4 !== var3)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var3 = var2.pendingAvatarDecoration;
            var1['avatarDecoration'] = var3;
case 26:
            var3 = var2.pendingDisplayNameStyles;
            if(!(var4 !== var3)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var2 = var2.pendingDisplayNameStyles;
            var1['displayNameStyles'] = var2;
case 28:
            return var1;
        }
    };
    var3['getAccountUpdateForUpdateRequest'] = var4;
    var4 = function getGuildMemberChangesForUpdateRequest(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.pendingAvatar;
            var4 = undefined;
            if(!(var4 !== var3)) { _fun0003_ip = 30; continue _fun0003 }
case 3:
            var5 = var2.pendingAvatar;
            var3 = null;
            if(!(var3 !== var5)) { _fun0003_ip = 25; continue _fun0003 }
case 2:
            var7 = var5.assetOrigin;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 0;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.AssetOriginTypes;
            var6 = var6.ARCHIVED_ASSET;
            if(!(var7 !== var6)) { _fun0003_ip = 31; continue _fun0003 }
case 23:
            var6 = var5.imageUri;
            var1['avatar'] = var6;
            var6 = var5.description;
            var1['avatarDescription'] = var6;
            _fun0003_ip = 30; continue _fun0003;
case 31:
            var5 = var5.originalAsset;
            var5 = var5.id;
            var1['avatarId'] = var5;
            _fun0003_ip = 30; continue _fun0003;
case 25:
            var1['avatar'] = var3;
case 30:
            var3 = var2.pendingNickname;
            if(!(var4 !== var3)) { _fun0003_ip = 22; continue _fun0003 }
case 32:
            var5 = var2.pendingNickname;
            var3 = null;
            var6 = var3 != var5;
            var3 = '';
            if(!var6) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var3 = var5;
case 33:
            var1['nick'] = var3;
case 22:
            var3 = var2.pendingAvatarDecoration;
            if(!(var4 !== var3)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var3 = var2.pendingAvatarDecoration;
            var1['avatarDecoration'] = var3;
case 35:
            var3 = var2.pendingNameplate;
            if(!(var4 !== var3)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var3 = var2.pendingNameplate;
            var1['nameplate'] = var3;
case 37:
            var3 = var2.pendingDisplayNameStyles;
            if(!(var4 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var2 = var2.pendingDisplayNameStyles;
            var1['displayNameStyles'] = var2;
case 39:
            return var1;
        }
    };
    var3['getGuildMemberChangesForUpdateRequest'] = var4;
    var2 = function getPrimaryGuildChangesForUpdateRequest(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.pendingPrimaryGuildId;
            var3 = undefined;
            if(!(var3 !== var4)) { _fun0004_ip = 2; continue _fun0004 }
case 3:
            var2 = var2.pendingPrimaryGuildId;
            var1['primaryGuildId'] = var2;
case 2:
            return var1;
        }
    };
    var3['getPrimaryGuildChangesForUpdateRequest'] = var2;
    return var1;
})();
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
 0:
            var3 = arg1;
            var1 = {};
            var2 = var3.pendingBanner;
            var5 = undefined;
            if(!(var5 !== var2)) { _fun0001_ip = 29; continue _fun0001 }
 17:
            var2 = var3.pendingBanner;
            var1['banner'] = var2;
 29:
            var4 = var3.pendingBio;
            var2 = null;
            if(!(var2 != var4)) { _fun0001_ip = 53; continue _fun0001 }
 41:
            var4 = var3.pendingBio;
            var1['bio'] = var4;
 53:
            var4 = var3.pendingPronouns;
            if(!(var2 != var4)) { _fun0001_ip = 75; continue _fun0001 }
 63:
            var4 = var3.pendingPronouns;
            var1['pronouns'] = var4;
 75:
            var4 = var3.pendingAccentColor;
            if(!(var5 !== var4)) { _fun0001_ip = 97; continue _fun0001 }
 85:
            var4 = var3.pendingAccentColor;
            var1['accent_color'] = var4;
 97:
            var4 = var3.pendingThemeColors;
            if(!(var5 !== var4)) { _fun0001_ip = 119; continue _fun0001 }
 107:
            var4 = var3.pendingThemeColors;
            var1['theme_colors'] = var4;
 119:
            var4 = var3.pendingProfileEffect;
            if(!(var5 !== var4)) { _fun0001_ip = 161; continue _fun0001 }
 129:
            var4 = var3.pendingProfileEffect;
            var4 = var2 != var4;
            var2 = null;
            if(!var4) { _fun0001_ip = 155; continue _fun0001 }
 144:
            var3 = var3.pendingProfileEffect;
            var2 = var3.id;
 155:
            var1['profile_effect_id'] = var2;
 161:
            return var1;
        }
    };
    var3['getProfileChangesForUpdateRequest'] = var4;
    var4 = function getAccountUpdateForUpdateRequest(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.pendingGlobalName;
            var4 = undefined;
            if(!(var4 !== var3)) { _fun0002_ip = 29; continue _fun0002 }
 17:
            var3 = var2.pendingGlobalName;
            var1['globalName'] = var3;
 29:
            var3 = var2.pendingNameplate;
            if(!(var4 !== var3)) { _fun0002_ip = 51; continue _fun0002 }
 39:
            var3 = var2.pendingNameplate;
            var1['nameplate'] = var3;
 51:
            var3 = var2.pendingAvatar;
            if(!(var4 !== var3)) { _fun0002_ip = 167; continue _fun0002 }
 61:
            var5 = var2.pendingAvatar;
            var3 = null;
            if(!(var3 !== var5)) { _fun0002_ip = 161; continue _fun0002 }
 73:
            var7 = var5.assetOrigin;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 0;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.AssetOriginTypes;
            var6 = var6.ARCHIVED_ASSET;
            if(!(var7 !== var6)) { _fun0002_ip = 142; continue _fun0002 }
 117:
            var6 = var5.imageUri;
            var1['avatar'] = var6;
            var6 = var5.description;
            var1['avatarDescription'] = var6;
            _fun0002_ip = 167; continue _fun0002;
 142:
            var5 = var5.originalAsset;
            var5 = var5.id;
            var1['avatarId'] = var5;
            _fun0002_ip = 167; continue _fun0002;
 161:
            var1['avatar'] = var3;
 167:
            var3 = var2.pendingAvatarDecoration;
            if(!(var4 !== var3)) { _fun0002_ip = 189; continue _fun0002 }
 177:
            var3 = var2.pendingAvatarDecoration;
            var1['avatarDecoration'] = var3;
 189:
            var3 = var2.pendingDisplayNameStyles;
            if(!(var4 !== var3)) { _fun0002_ip = 211; continue _fun0002 }
 199:
            var2 = var2.pendingDisplayNameStyles;
            var1['displayNameStyles'] = var2;
 211:
            return var1;
        }
    };
    var3['getAccountUpdateForUpdateRequest'] = var4;
    var4 = function getGuildMemberChangesForUpdateRequest(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.pendingAvatar;
            var4 = undefined;
            if(!(var4 !== var3)) { _fun0003_ip = 123; continue _fun0003 }
 17:
            var5 = var2.pendingAvatar;
            var3 = null;
            if(!(var3 !== var5)) { _fun0003_ip = 117; continue _fun0003 }
 29:
            var7 = var5.assetOrigin;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var6 = 0;
            var6 = var9[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.AssetOriginTypes;
            var6 = var6.ARCHIVED_ASSET;
            if(!(var7 !== var6)) { _fun0003_ip = 98; continue _fun0003 }
 73:
            var6 = var5.imageUri;
            var1['avatar'] = var6;
            var6 = var5.description;
            var1['avatarDescription'] = var6;
            _fun0003_ip = 123; continue _fun0003;
 98:
            var5 = var5.originalAsset;
            var5 = var5.id;
            var1['avatarId'] = var5;
            _fun0003_ip = 123; continue _fun0003;
 117:
            var1['avatar'] = var3;
 123:
            var3 = var2.pendingNickname;
            if(!(var4 !== var3)) { _fun0003_ip = 161; continue _fun0003 }
 133:
            var5 = var2.pendingNickname;
            var3 = null;
            var6 = var3 != var5;
            var3 = '';
            if(!var6) { _fun0003_ip = 155; continue _fun0003 }
 152:
            var3 = var5;
 155:
            var1['nick'] = var3;
 161:
            var3 = var2.pendingAvatarDecoration;
            if(!(var4 !== var3)) { _fun0003_ip = 183; continue _fun0003 }
 171:
            var3 = var2.pendingAvatarDecoration;
            var1['avatarDecoration'] = var3;
 183:
            var3 = var2.pendingNameplate;
            if(!(var4 !== var3)) { _fun0003_ip = 205; continue _fun0003 }
 193:
            var3 = var2.pendingNameplate;
            var1['nameplate'] = var3;
 205:
            var3 = var2.pendingDisplayNameStyles;
            if(!(var4 !== var3)) { _fun0003_ip = 227; continue _fun0003 }
 215:
            var2 = var2.pendingDisplayNameStyles;
            var1['displayNameStyles'] = var2;
 227:
            return var1;
        }
    };
    var3['getGuildMemberChangesForUpdateRequest'] = var4;
    var2 = function getPrimaryGuildChangesForUpdateRequest(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.pendingPrimaryGuildId;
            var3 = undefined;
            if(!(var3 !== var4)) { _fun0004_ip = 29; continue _fun0004 }
 17:
            var2 = var2.pendingPrimaryGuildId;
            var1['primaryGuildId'] = var2;
 29:
            return var1;
        }
    };
    var3['getPrimaryGuildChangesForUpdateRequest'] = var2;
    return var1;
})();
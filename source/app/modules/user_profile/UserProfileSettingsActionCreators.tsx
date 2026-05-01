// app/modules/user_profile/UserProfileSettingsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileSettingsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var5 = var4.guildId;
            var3 = null;
            var2 = Object.create(var3);
            var10 = 0;
            var2['guildId'] = var10;
            var17 = {};
            var16 = var4;
            var15 = var2;
            var2 = copyDataProperties(var17, var16, var15);
            var6 = _closure1_slot3;
            var4 = var6.getCurrentUser;
            var7 = var4.bind(var6)();
            if(!(var3 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!(var3 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot4;
            var6 = var8.getGuildMemberProfile;
            var4 = var7.id;
            var8 = var6.bind(var8)(var4, var5);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var9 = _closure1_slot4;
            var6 = var9.getUserProfile;
            var4 = var7.id;
            var8 = var6.bind(var9)(var4);
case 6:
            var4 = var3 != var5;
            var12 = null;
            if(!var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var9 = _closure1_slot2;
            var6 = var9.getMember;
            var4 = var7.id;
            var12 = var6.bind(var9)(var5, var4);
case 7:
            var4 = {};
            var6 = 'globalName';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = var2.globalName;
            var6 = var7.globalName;
            if(!(var9 !== var6)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = var2.globalName;
            var6 = '';
            if(!(var6 === var9)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var7.globalName;
            if(!(var3 !== var6)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var6 = var2.globalName;
            var4['pendingGlobalName'] = var6;
            _fun0001_ip = 9; continue _fun0001;
case 11:
            var6 = undefined;
            var4['pendingGlobalName'] = var6;
case 9:
            var6 = 'nickname';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = var2.nickname;
            var13 = var3 == var12;
            var6 = undefined;
            var9 = undefined;
            if(var13) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var9 = var12.nick;
case 17:
            if(!(var11 !== var9)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var11 = var2.nickname;
            var9 = '';
            if(!(var9 === var11)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = var3 == var12;
            var9 = undefined;
            if(var11) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var9 = var12.nick;
case 23:
            if(!(var3 !== var9)) { _fun0001_ip = 19; continue _fun0001 }
case 21:
            var9 = var2.nickname;
            var4['pendingNickname'] = var9;
            _fun0001_ip = 15; continue _fun0001;
case 19:
            var4['pendingNickname'] = var6;
case 15:
            var6 = 'displayNameStyles';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var6 = var2.displayNameStyles;
            var4['pendingDisplayNameStyles'] = var6;
case 25:
            var6 = 'pronouns';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var11 = var2.pronouns;
            var13 = var3 == var8;
            var6 = undefined;
            var9 = undefined;
            if(var13) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var9 = var8.pronouns;
case 29:
            if(!(var11 !== var9)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var9 = var2.pronouns;
            var4['pendingPronouns'] = var9;
            _fun0001_ip = 27; continue _fun0001;
case 31:
            var4['pendingPronouns'] = var6;
case 27:
            var6 = 'avatar';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            if(!(var3 != var5)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var11 = var2.avatar;
            var13 = var3 == var11;
            var6 = undefined;
            if(var13) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var6 = var11.imageUri;
case 37:
            var11 = var3 == var12;
            var9 = undefined;
            if(var11) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var9 = var12.avatar;
case 39:
            if(!(var6 !== var9)) { _fun0001_ip = 41; continue _fun0001 }
case 35:
            if(!(var3 == var5)) { _fun0001_ip = 42; continue _fun0001 }
case 43:
            var6 = var2.avatar;
            var11 = var3 == var6;
            var9 = undefined;
            if(var11) { _fun0001_ip = 44; continue _fun0001 }
case 45:
            var9 = var6.imageUri;
case 44:
            var6 = var7.avatar;
            if(!(var9 !== var6)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var6 = var2.avatar;
            var4['pendingAvatar'] = var6;
            _fun0001_ip = 33; continue _fun0001;
case 41:
            var6 = undefined;
            var4['pendingAvatar'] = var6;
case 33:
            var6 = 'avatarDecoration';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 46; continue _fun0001 }
case 47:
            if(!(var3 != var5)) { _fun0001_ip = 48; continue _fun0001 }
case 49:
            var6 = var2.avatarDecoration;
            var11 = var3 == var6;
            var9 = undefined;
            if(var11) { _fun0001_ip = 50; continue _fun0001 }
case 51:
            var9 = var6.skuId;
case 50:
            var11 = var3 == var12;
            var6 = undefined;
            if(var11) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var11 = var12.avatarDecoration;
            var13 = var3 == var11;
            var6 = undefined;
            if(var13) { _fun0001_ip = 52; continue _fun0001 }
case 54:
            var6 = var11.skuId;
case 52:
            if(!(var9 !== var6)) { _fun0001_ip = 55; continue _fun0001 }
case 48:
            if(!(var3 == var5)) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            var11 = var2.avatarDecoration;
            var13 = var3 == var11;
            var6 = undefined;
            if(var13) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var6 = var11.skuId;
case 58:
            var11 = var7.avatarDecoration;
            var13 = var3 == var11;
            var9 = undefined;
            if(var13) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var9 = var11.skuId;
case 60:
            if(!(var6 !== var9)) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var6 = var2.avatarDecoration;
            var4['pendingAvatarDecoration'] = var6;
            _fun0001_ip = 46; continue _fun0001;
case 55:
            var6 = undefined;
            var4['pendingAvatarDecoration'] = var6;
case 46:
            var6 = 'nameplate';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            if(!(var3 != var5)) { _fun0001_ip = 64; continue _fun0001 }
case 65:
            var6 = var2.nameplate;
            var11 = var3 == var6;
            var9 = undefined;
            if(var11) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var9 = var6.skuId;
case 66:
            var11 = var3 == var12;
            var6 = undefined;
            if(var11) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var11 = var12.collectibles;
            var13 = var3 == var11;
            var6 = undefined;
            if(var13) { _fun0001_ip = 68; continue _fun0001 }
case 70:
            var11 = var11.nameplate;
            var13 = var3 == var11;
            var6 = undefined;
            if(var13) { _fun0001_ip = 68; continue _fun0001 }
case 71:
            var6 = var11.skuId;
case 68:
            if(!(var9 !== var6)) { _fun0001_ip = 72; continue _fun0001 }
case 64:
            if(!(var3 == var5)) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            var6 = var2.nameplate;
            var11 = var3 == var6;
            var9 = undefined;
            if(var11) { _fun0001_ip = 75; continue _fun0001 }
case 76:
            var9 = var6.skuId;
case 75:
            var11 = var7.collectibles;
            var13 = var3 == var11;
            var6 = undefined;
            if(var13) { _fun0001_ip = 77; continue _fun0001 }
case 78:
            var11 = var11.nameplate;
            var13 = var3 == var11;
            var6 = undefined;
            if(var13) { _fun0001_ip = 77; continue _fun0001 }
case 79:
            var6 = var11.skuId;
case 77:
            if(!(var9 !== var6)) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var6 = var2.nameplate;
            var4['pendingNameplate'] = var6;
            _fun0001_ip = 62; continue _fun0001;
case 72:
            var6 = undefined;
            var4['pendingNameplate'] = var6;
case 62:
            var6 = 'profileEffect';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var9 = var2.profileEffect;
            var13 = var3 == var9;
            var6 = undefined;
            var11 = undefined;
            if(var13) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var11 = var9.skuId;
case 82:
            var13 = var3 == var8;
            var9 = undefined;
            if(var13) { _fun0001_ip = 84; continue _fun0001 }
case 85:
            var13 = var8.profileEffect;
            var14 = var3 == var13;
            var9 = undefined;
            if(var14) { _fun0001_ip = 84; continue _fun0001 }
case 86:
            var9 = var13.skuId;
case 84:
            if(!(var11 !== var9)) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var9 = var2.profileEffect;
            var4['pendingProfileEffect'] = var9;
            _fun0001_ip = 80; continue _fun0001;
case 87:
            var4['pendingProfileEffect'] = var6;
case 80:
            var6 = 'profileFrame';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 89; continue _fun0001 }
case 90:
            var9 = var2.profileFrame;
            var13 = var3 == var9;
            var6 = undefined;
            var11 = undefined;
            if(var13) { _fun0001_ip = 91; continue _fun0001 }
case 92:
            var11 = var9.skuId;
case 91:
            var13 = var3 == var8;
            var9 = undefined;
            if(var13) { _fun0001_ip = 93; continue _fun0001 }
case 94:
            var13 = var8.profileFrame;
            var14 = var3 == var13;
            var9 = undefined;
            if(var14) { _fun0001_ip = 93; continue _fun0001 }
case 95:
            var9 = var13.skuId;
case 93:
            if(!(var11 !== var9)) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var9 = var2.profileFrame;
            var4['pendingProfileFrame'] = var9;
            _fun0001_ip = 89; continue _fun0001;
case 96:
            var4['pendingProfileFrame'] = var6;
case 89:
            var6 = 'banner';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            if(!(var3 != var5)) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var11 = var2.banner;
            var13 = var3 == var12;
            var6 = undefined;
            var9 = undefined;
            if(var13) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var9 = var12.banner;
case 102:
            if(!(var11 !== var9)) { _fun0001_ip = 104; continue _fun0001 }
case 100:
            if(!(var3 == var5)) { _fun0001_ip = 105; continue _fun0001 }
case 106:
            var9 = var2.banner;
            var7 = var7.banner;
            if(!(var9 !== var7)) { _fun0001_ip = 107; continue _fun0001 }
case 105:
            var7 = var2.banner;
            var4['pendingBanner'] = var7;
            var9 = var2.bannerOriginalMd5;
            var11 = var3 != var9;
            var7 = null;
            if(!var11) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var7 = var9;
case 108:
            var4['pendingBannerOriginalMd5'] = var7;
            _fun0001_ip = 98; continue _fun0001;
case 107:
            var7 = undefined;
            var4['pendingBanner'] = var7;
            var4['pendingBannerOriginalMd5'] = var7;
            _fun0001_ip = 98; continue _fun0001;
case 104:
            var4['pendingBanner'] = var6;
            var4['pendingBannerOriginalMd5'] = var6;
case 98:
            var6 = 'accentColor';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 110; continue _fun0001 }
case 111:
            var6 = var2.accentColor;
            var4['pendingAccentColor'] = var6;
case 110:
            var6 = 'themeColors';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var9 = var2.themeColors;
            var11 = var3 == var9;
            var6 = undefined;
            var7 = undefined;
            if(var11) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var7 = var9[var10];
case 114:
            if(!(var3 != var7)) { _fun0001_ip = 116; continue _fun0001 }
case 117:
            var10 = var2.themeColors;
            var9 = var3 == var10;
            var7 = undefined;
            if(var9) { _fun0001_ip = 118; continue _fun0001 }
case 119:
            var9 = 1;
            var7 = var10[var9];
case 118:
            if(!(var3 == var7)) { _fun0001_ip = 120; continue _fun0001 }
case 116:
            var9 = var3 == var8;
            var7 = undefined;
            if(var9) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            var7 = var8.themeColors;
case 121:
            if(!(var3 == var7)) { _fun0001_ip = 120; continue _fun0001 }
case 123:
            var4['pendingThemeColors'] = var6;
            _fun0001_ip = 112; continue _fun0001;
case 120:
            var6 = var2.themeColors;
            var4['pendingThemeColors'] = var6;
case 112:
            var6 = 'bio';
            var6 = var6 in var2;
            if(!var6) { _fun0001_ip = 124; continue _fun0001 }
case 125:
            var7 = var2.bio;
            var9 = var3 == var8;
            var3 = undefined;
            var6 = undefined;
            if(var9) { _fun0001_ip = 126; continue _fun0001 }
case 127:
            var6 = var8.bio;
case 126:
            if(!(var7 !== var6)) { _fun0001_ip = 128; continue _fun0001 }
case 129:
            var6 = var2.bio;
            var4['pendingBio'] = var6;
            _fun0001_ip = 124; continue _fun0001;
case 128:
            var4['pendingBio'] = var3;
case 124:
            var3 = 'primaryGuildId';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 130; continue _fun0001 }
case 131:
            var3 = var2.primaryGuildId;
            var4['pendingPrimaryGuildId'] = var3;
case 130:
            var3 = 'legacyUsernameDisabled';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 132; continue _fun0001 }
case 133:
            var2 = var2.legacyUsernameDisabled;
            var4['pendingLegacyUsernameDisabled'] = var2;
case 132:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 3;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'USER_PROFILE_SETTINGS_SET_PENDING_CHANGES';
            var1['type'] = var6;
            var1['guildId'] = var5;
            var17 = var1;
            var16 = var4;
            var4 = copyDataProperties(var17, var16);
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['setPendingChanges'] = var2;
    return var1;
})();
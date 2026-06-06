// app/modules/user_profile/UserProfileSettingsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileSettingsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var5 = var3.guildId;
            var7 = null;
            var2 = Object.create(var7);
            var1 = 0;
            var2['guildId'] = var1;
            var19 = {};
            var18 = var3;
            var17 = var2;
            var2 = copyDataProperties(var19, var18, var17);
            var4 = _closure1_slot4;
            var3 = var4.getCurrentUser;
            var6 = var3.bind(var4)();
            if(!(var7 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot5;
            var4 = var8.getUserProfile;
            var3 = var6.id;
            var11 = var4.bind(var8)(var3);
            var10 = var11;
            if(!(var7 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot5;
            var4 = var8.getGuildMemberProfile;
            var3 = var6.id;
            var10 = var4.bind(var8)(var3, var5);
case 4:
            var3 = var7 != var5;
            var9 = null;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = _closure1_slot3;
            var4 = var8.getMember;
            var3 = var6.id;
            var9 = var4.bind(var8)(var5, var3);
case 6:
            var4 = {};
            var3 = 'globalName';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var2.globalName;
            var3 = var6.globalName;
            if(!(var8 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var2.globalName;
            var3 = '';
            if(!(var3 === var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var3 = var6.globalName;
            if(!(var7 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var3 = var2.globalName;
            var4['pendingGlobalName'] = var3;
            _fun0001_ip = 8; continue _fun0001;
case 10:
            var3 = undefined;
            var4['pendingGlobalName'] = var3;
case 8:
            var3 = 'nickname';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var12 = var2.nickname;
            var13 = var7 == var9;
            var3 = undefined;
            var8 = undefined;
            if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var9.nick;
case 16:
            if(!(var12 !== var8)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var12 = var2.nickname;
            var8 = '';
            if(!(var8 === var12)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var12 = var7 == var9;
            var8 = undefined;
            if(var12) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = var9.nick;
case 22:
            if(!(var7 !== var8)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var8 = var2.nickname;
            var4['pendingNickname'] = var8;
            _fun0001_ip = 14; continue _fun0001;
case 18:
            var4['pendingNickname'] = var3;
case 14:
            var3 = 'displayNameStyles';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var8 = var2.displayNameStyles;
            if(!(var7 == var5)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var15 = var6.displayNameStyles;
            _fun0001_ip = 28; continue _fun0001;
case 26:
            var12 = var7 == var9;
            var3 = undefined;
            if(var12) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var3 = var9.displayNameStyles;
case 29:
            var15 = var3;
case 28:
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 3;
            var12 = var12[var3];
            var3 = undefined;
            var14 = var13.bind(var3)(var12);
            var12 = var7 != var8;
            var13 = null;
            if(!var12) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var13 = var8;
case 31:
            var16 = var7 != var15;
            var12 = null;
            if(!var16) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var12 = var15;
case 33:
            var12 = var14.bind(var3)(var13, var12);
            if(var12) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var4['pendingDisplayNameStyles'] = var8;
            _fun0001_ip = 24; continue _fun0001;
case 35:
            var4['pendingDisplayNameStyles'] = var3;
case 24:
            var3 = 'pronouns';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var12 = var2.pronouns;
            var13 = var7 == var10;
            var3 = undefined;
            var8 = undefined;
            if(var13) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var8 = var10.pronouns;
case 39:
            if(!(var12 !== var8)) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var8 = var2.pronouns;
            var4['pendingPronouns'] = var8;
            _fun0001_ip = 37; continue _fun0001;
case 41:
            var4['pendingPronouns'] = var3;
case 37:
            var3 = 'avatar';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            if(!(var7 != var5)) { _fun0001_ip = 45; continue _fun0001 }
case 46:
            var12 = var2.avatar;
            var13 = var7 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 47; continue _fun0001 }
case 48:
            var3 = var12.imageUri;
case 47:
            var12 = var7 == var9;
            var8 = undefined;
            if(var12) { _fun0001_ip = 49; continue _fun0001 }
case 50:
            var8 = var9.avatar;
case 49:
            if(!(var3 !== var8)) { _fun0001_ip = 51; continue _fun0001 }
case 45:
            if(!(var7 == var5)) { _fun0001_ip = 52; continue _fun0001 }
case 53:
            var3 = var2.avatar;
            var12 = var7 == var3;
            var8 = undefined;
            if(var12) { _fun0001_ip = 54; continue _fun0001 }
case 55:
            var8 = var3.imageUri;
case 54:
            var3 = var6.avatar;
            if(!(var8 !== var3)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var3 = var2.avatar;
            var4['pendingAvatar'] = var3;
            _fun0001_ip = 43; continue _fun0001;
case 51:
            var3 = undefined;
            var4['pendingAvatar'] = var3;
case 43:
            var3 = 'avatarDecoration';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 56; continue _fun0001 }
case 57:
            if(!(var7 != var5)) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var3 = var2.avatarDecoration;
            var12 = var7 == var3;
            var8 = undefined;
            if(var12) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var8 = var3.skuId;
case 60:
            var12 = var7 == var9;
            var3 = undefined;
            if(var12) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var12 = var9.avatarDecoration;
            var13 = var7 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 62; continue _fun0001 }
case 64:
            var3 = var12.skuId;
case 62:
            if(!(var8 !== var3)) { _fun0001_ip = 65; continue _fun0001 }
case 58:
            if(!(var7 == var5)) { _fun0001_ip = 66; continue _fun0001 }
case 67:
            var12 = var2.avatarDecoration;
            var13 = var7 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 68; continue _fun0001 }
case 69:
            var3 = var12.skuId;
case 68:
            var12 = var6.avatarDecoration;
            var13 = var7 == var12;
            var8 = undefined;
            if(var13) { _fun0001_ip = 70; continue _fun0001 }
case 71:
            var8 = var12.skuId;
case 70:
            if(!(var3 !== var8)) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var3 = var2.avatarDecoration;
            var4['pendingAvatarDecoration'] = var3;
            _fun0001_ip = 56; continue _fun0001;
case 65:
            var3 = undefined;
            var4['pendingAvatarDecoration'] = var3;
case 56:
            var3 = 'nameplate';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            if(!(var7 != var5)) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var3 = var2.nameplate;
            var12 = var7 == var3;
            var8 = undefined;
            if(var12) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var8 = var3.skuId;
case 76:
            var12 = var7 == var9;
            var3 = undefined;
            if(var12) { _fun0001_ip = 78; continue _fun0001 }
case 79:
            var12 = var9.collectibles;
            var13 = var7 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 78; continue _fun0001 }
case 80:
            var12 = var12.nameplate;
            var13 = var7 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 78; continue _fun0001 }
case 81:
            var3 = var12.skuId;
case 78:
            if(!(var8 !== var3)) { _fun0001_ip = 82; continue _fun0001 }
case 74:
            if(!(var7 == var5)) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var3 = var2.nameplate;
            var12 = var7 == var3;
            var8 = undefined;
            if(var12) { _fun0001_ip = 85; continue _fun0001 }
case 86:
            var8 = var3.skuId;
case 85:
            var12 = var6.collectibles;
            var13 = var7 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 87; continue _fun0001 }
case 88:
            var12 = var12.nameplate;
            var13 = var7 == var12;
            var3 = undefined;
            if(var13) { _fun0001_ip = 87; continue _fun0001 }
case 89:
            var3 = var12.skuId;
case 87:
            if(!(var8 !== var3)) { _fun0001_ip = 82; continue _fun0001 }
case 83:
            var3 = var2.nameplate;
            var4['pendingNameplate'] = var3;
            _fun0001_ip = 72; continue _fun0001;
case 82:
            var3 = undefined;
            var4['pendingNameplate'] = var3;
case 72:
            var3 = 'profileEffect';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var8 = var2.profileEffect;
            var13 = var7 == var8;
            var3 = undefined;
            var12 = undefined;
            if(var13) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var12 = var8.skuId;
case 92:
            var13 = var7 == var10;
            var8 = undefined;
            if(var13) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var13 = var10.profileEffect;
            var14 = var7 == var13;
            var8 = undefined;
            if(var14) { _fun0001_ip = 94; continue _fun0001 }
case 96:
            var8 = var13.skuId;
case 94:
            if(!(var12 !== var8)) { _fun0001_ip = 97; continue _fun0001 }
case 98:
            var8 = var2.profileEffect;
            var4['pendingProfileEffect'] = var8;
            _fun0001_ip = 90; continue _fun0001;
case 97:
            var4['pendingProfileEffect'] = var3;
case 90:
            var3 = 'profileFrame';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 99; continue _fun0001 }
case 100:
            var8 = var2.profileFrame;
            var13 = var7 == var8;
            var3 = undefined;
            var12 = undefined;
            if(var13) { _fun0001_ip = 101; continue _fun0001 }
case 102:
            var12 = var8.skuId;
case 101:
            var13 = var7 == var10;
            var8 = undefined;
            if(var13) { _fun0001_ip = 103; continue _fun0001 }
case 104:
            var13 = var10.profileFrame;
            var14 = var7 == var13;
            var8 = undefined;
            if(var14) { _fun0001_ip = 103; continue _fun0001 }
case 105:
            var8 = var13.skuId;
case 103:
            if(!(var12 !== var8)) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var8 = var2.profileFrame;
            var4['pendingProfileFrame'] = var8;
            _fun0001_ip = 99; continue _fun0001;
case 106:
            var4['pendingProfileFrame'] = var3;
case 99:
            var3 = 'banner';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var3 = var2.banner;
            var12 = var7 != var3;
            var8 = null;
            if(!var12) { _fun0001_ip = 110; continue _fun0001 }
case 111:
            var8 = var3;
case 110:
            if(!(var7 == var5)) { _fun0001_ip = 112; continue _fun0001 }
case 113:
            var12 = var6.banner;
            var13 = var7 != var12;
            var3 = null;
            if(!var13) { _fun0001_ip = 114; continue _fun0001 }
case 115:
            var3 = var12;
case 114:
            _fun0001_ip = 116; continue _fun0001;
case 112:
            var13 = var7 == var9;
            var12 = undefined;
            if(var13) { _fun0001_ip = 117; continue _fun0001 }
case 118:
            var12 = var9.banner;
case 117:
            var13 = var7 != var12;
            var9 = null;
            if(!var13) { _fun0001_ip = 119; continue _fun0001 }
case 120:
            var9 = var12;
case 119:
            var3 = var9;
case 116:
            if(!(var8 !== var3)) { _fun0001_ip = 121; continue _fun0001 }
case 122:
            var3 = var2.banner;
            var4['pendingBanner'] = var3;
            var8 = var2.bannerOriginalMd5;
            var9 = var7 != var8;
            var3 = null;
            if(!var9) { _fun0001_ip = 123; continue _fun0001 }
case 124:
            var3 = var8;
case 123:
            var4['pendingBannerOriginalMd5'] = var3;
            _fun0001_ip = 108; continue _fun0001;
case 121:
            var3 = undefined;
            var4['pendingBanner'] = var3;
            var4['pendingBannerOriginalMd5'] = var3;
case 108:
            var3 = 'accentColor';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 125; continue _fun0001 }
case 126:
            var3 = var2.accentColor;
            var9 = var7 != var3;
            var8 = null;
            if(!var9) { _fun0001_ip = 127; continue _fun0001 }
case 128:
            var8 = var3;
case 127:
            var9 = var7 == var10;
            var12 = undefined;
            if(var9) { _fun0001_ip = 129; continue _fun0001 }
case 130:
            var12 = var10.accentColor;
case 129:
            var13 = var7 != var12;
            var9 = null;
            if(!var13) { _fun0001_ip = 131; continue _fun0001 }
case 132:
            var9 = var12;
case 131:
            var3 = undefined;
            if(!(var8 !== var9)) { _fun0001_ip = 133; continue _fun0001 }
case 134:
            var3 = var8;
case 133:
            var4['pendingAccentColor'] = var3;
case 125:
            var3 = 'themeColors';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 135; continue _fun0001 }
case 136:
            var8 = var2.themeColors;
            if(!(var7 == var5)) { _fun0001_ip = 137; continue _fun0001 }
case 138:
            var3 = var7 == var10;
            var13 = undefined;
            if(var3) { _fun0001_ip = 139; continue _fun0001 }
case 140:
            var13 = var10.themeColors;
case 139:
            _fun0001_ip = 141; continue _fun0001;
case 137:
            var12 = var7 == var10;
            var3 = undefined;
            if(var12) { _fun0001_ip = 142; continue _fun0001 }
case 143:
            var3 = var10.themeColors;
case 142:
            if(!(var7 == var3)) { _fun0001_ip = 144; continue _fun0001 }
case 145:
            var12 = var7 == var11;
            var9 = undefined;
            if(var12) { _fun0001_ip = 146; continue _fun0001 }
case 147:
            var9 = var11.themeColors;
case 146:
            var3 = var9;
case 144:
            var13 = var3;
case 141:
            var11 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 3;
            var9 = var9[var3];
            var3 = undefined;
            var12 = var11.bind(var3)(var9);
            var9 = var7 != var8;
            var11 = null;
            if(!var9) { _fun0001_ip = 148; continue _fun0001 }
case 149:
            var11 = var8;
case 148:
            var14 = var7 != var13;
            var9 = null;
            if(!var14) { _fun0001_ip = 150; continue _fun0001 }
case 151:
            var9 = var13;
case 150:
            var9 = var12.bind(var3)(var11, var9);
            if(var9) { _fun0001_ip = 152; continue _fun0001 }
case 153:
            var4['pendingThemeColors'] = var8;
            _fun0001_ip = 135; continue _fun0001;
case 152:
            var4['pendingThemeColors'] = var3;
case 135:
            var3 = 'bio';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 154; continue _fun0001 }
case 155:
            var9 = var2.bio;
            var11 = var7 == var10;
            var3 = undefined;
            var8 = undefined;
            if(var11) { _fun0001_ip = 156; continue _fun0001 }
case 157:
            var8 = var10.bio;
case 156:
            if(!(var9 !== var8)) { _fun0001_ip = 158; continue _fun0001 }
case 159:
            var8 = var2.bio;
            var4['pendingBio'] = var8;
            _fun0001_ip = 154; continue _fun0001;
case 158:
            var4['pendingBio'] = var3;
case 154:
            var3 = 'primaryGuildId';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 160; continue _fun0001 }
case 161:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 4;
            var8 = var8[var3];
            var3 = undefined;
            var9 = var9.bind(var3)(var8);
            var8 = var9.getUserPrimaryGuild;
            var6 = var6.primaryGuild;
            var6 = var8.bind(var9)(var6);
            var6 = var6.guildId;
            var8 = var7 != var6;
            var7 = null;
            if(!var8) { _fun0001_ip = 162; continue _fun0001 }
case 163:
            var7 = var6;
case 162:
            var6 = var2.primaryGuildId;
            if(!(var6 !== var7)) { _fun0001_ip = 164; continue _fun0001 }
case 165:
            var6 = var2.primaryGuildId;
            var4['pendingPrimaryGuildId'] = var6;
            _fun0001_ip = 160; continue _fun0001;
case 164:
            var4['pendingPrimaryGuildId'] = var3;
case 160:
            var3 = 'legacyUsernameDisabled';
            var3 = var3 in var2;
            if(!var3) { _fun0001_ip = 166; continue _fun0001 }
case 167:
            var2 = var2.legacyUsernameDisabled;
            var4['pendingLegacyUsernameDisabled'] = var2;
case 166:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.dispatch;
            var1 = {};
            var6 = 'USER_PROFILE_SETTINGS_SET_PENDING_CHANGES';
            var1['type'] = var6;
            var1['guildId'] = var5;
            var19 = var1;
            var18 = var4;
            var4 = copyDataProperties(var19, var18);
            var1 = var2.bind(var3)(var1);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['setPendingChanges'] = var2;
    return var1;
})();
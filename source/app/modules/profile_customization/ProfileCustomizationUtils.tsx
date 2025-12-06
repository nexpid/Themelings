// app/modules/profile_customization/ProfileCustomizationUtils.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/ProfileCustomizationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useAvatarsWithGuilds(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = var2.getMutableAllGuildsAndMembers;
                var10 = var1.bind(var2)();
                var3 = {};
                var8 = var10;
                var4 = null;
                for(var5 in var8)
case 2:
                {
case 3:
                    var13 = var5;
                    var12 = var10[var13];
                    var11 = _closure2_slot0;
                    var12 = var12[var11];
                    var14 = var4 == var12;
                    var11 = undefined;
                    if(var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var11 = var12.avatar;
case 4:
                    if(var4 == var11) { _fun0001_ip = 2; continue _fun0001 }
case 6:
                    var12 = var3[var11];
                    if(!(var4 == var12)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var12 = new Array(0);
                    var3[var11] = var12;
case 7:
                    var12 = var3[var11];
                    var11 = var12.push;
                    var11 = var11.bind(var12)(var13);
                    _fun0001_ip = 2; continue _fun0001;
                }
case 9:
                var1 = global;
                var2 = var1.Object;
                var1 = var2.entries;
                var3 = var1.bind(var2)(var3);
                var2 = var3.map;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = 0;
                    var1 = var2[var1];
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useAvatarsWithGuilds'] = var4;
    var4 = function useGuildMemberAndUserPendingNameplate(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 6;
            var4 = var10[var7];
            var11 = undefined;
            var12 = var8.bind(var11)(var4);
            var9 = var12.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var6, var4);
            var4 = var2.nameplate;
            var2 = var10[var7];
            var13 = var8.bind(var11)(var2);
            var12 = var13.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot7;
                var2 = var3.getPendingNameplate;
                var2 = var2.bind(var3)();
                var1['pendingUserNameplate'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.nameplate;
                var1['userErrors'] = var2;
                return var1;
            };
            var2 = var12.bind(var13)(var6, var2);
            var6 = var2.pendingUserNameplate;
            var2 = var2.userErrors;
            var7 = var10[var7];
            var8 = var8.bind(var11)(var7);
            var7 = var8.useStateFromStoresObject;
            var10 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var10;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getPendingNameplate;
                var2 = var2.bind(var3)();
                var1['pendingGuildNameplate'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.nameplate;
                var1['guildErrors'] = var2;
                return var1;
            };
            var1 = var7.bind(var8)(var3, var1);
            var7 = var1.pendingGuildNameplate;
            var3 = var1.guildErrors;
            var1 = {};
            var1['userNameplate'] = var4;
            var4 = null;
            var10 = var4 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var9 = var9.collectibles;
            var10 = var4 == var9;
            var8 = undefined;
            if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var8 = var9.nameplate;
case 12:
            var1['guildNameplate'] = var8;
            if(!(var4 != var5)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var6 = var7;
case 15:
            var1['pendingNameplate'] = var6;
            if(!(var4 != var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var2 = var3;
case 17:
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberAndUserPendingNameplate'] = var4;
    var4 = function useGuildMemberOrUserPendingDisplayNameStyles(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var12 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var12;
            var _closure2_slot1 = var5;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 6;
            var2 = var11[var4];
            var9 = undefined;
            var10 = var6.bind(var9)(var2);
            var8 = var10.useStateFromStores;
            var2 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var4 = null;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var3 = _closure2_slot0;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0005_ip = 19; continue _fun0005 }
case 21:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 19:
                    return var1;
                }
            };
            var10 = var8.bind(var10)(var7, var2);
            var2 = var11[var4];
            var14 = var6.bind(var9)(var2);
            var8 = var14.useStateFromStoresObject;
            var13 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var13;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot7;
                var2 = var3.getPendingDisplayNameStyles;
                var2 = var2.bind(var3)();
                var1['pendingUserDisplayNameStyles'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.displayNameStyles;
                var1['userErrors'] = var2;
                return var1;
            };
            var2 = var8.bind(var14)(var7, var2);
            var7 = var2.pendingUserDisplayNameStyles;
            var2 = var2.userErrors;
            var8 = var11[var4];
            var15 = var6.bind(var9)(var8);
            var14 = var15.useStateFromStoresObject;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getPendingDisplayNameStyles;
                var2 = var2.bind(var3)();
                var1['pendingGuildDisplayNameStyles'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.displayNameStyles;
                var1['guildErrors'] = var2;
                return var1;
            };
            var3 = var14.bind(var15)(var8, var3);
            var8 = var3.pendingGuildDisplayNameStyles;
            var3 = var3.guildErrors;
            var4 = var11[var4];
            var11 = var6.bind(var9)(var4);
            var6 = var11.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var13;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getTryItOutDisplayNameStyles;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var11)(var4, var1);
            var1 = {};
            var4 = null;
            var13 = var4 == var12;
            var11 = undefined;
            if(var13) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var11 = var12.displayNameStyles;
case 22:
            var1['userDisplayNameStyles'] = var11;
            var11 = var4 == var10;
            var9 = undefined;
            if(var11) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var9 = var10.displayNameStyles;
case 24:
            var1['guildDisplayNameStyles'] = var9;
            if(!(var4 != var5)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
            var7 = var8;
case 26:
            var1['pendingDisplayNameStyles'] = var7;
            var1['tryItOutDisplayNameStyles'] = var6;
            if(!(var4 != var5)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
            var2 = var3;
case 28:
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberOrUserPendingDisplayNameStyles'] = var4;
    var4 = function useUserAvatarDecoration(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var1 = var2.user;
            var _closure2_slot0 = var1;
            var5 = var2.guildId;
            var _closure2_slot1 = var5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 6;
            var6 = var6[var2];
            var2 = undefined;
            var7 = var7.bind(var2)(var6);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 30:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var4, var3);
            var4 = null;
            if(!(var4 == var5)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var1 = var1.avatarDecoration;
            _fun0006_ip = 34; continue _fun0006;
case 32:
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var2 = var3.avatarDecoration;
case 35:
            var1 = var2;
case 34:
            return var1;
        }
    };
    var3['useUserAvatarDecoration'] = var4;
    var4 = function useUserProfileEffect(arg1) {
        var2 = arg1;
        var3 = var2.user;
        var _closure2_slot0 = var3;
        var2 = var2.guildId;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 6;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var1)) { _fun0008_ip = 19; continue _fun0008 }
case 37:
                var6 = _closure1_slot5;
                var5 = var6.getGuildMemberProfile;
                var1 = _closure2_slot0;
                var4 = var1.id;
                var1 = _closure2_slot1;
                var4 = var5.bind(var6)(var4, var1);
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                var1 = var4.profileEffect;
case 38:
                _fun0008_ip = 40; continue _fun0008;
case 19:
                var5 = _closure1_slot5;
                var4 = var5.getUserProfile;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                var2 = var3.profileEffect;
case 41:
                var1 = var2;
case 40:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useUserProfileEffect'] = var4;
    var4 = function useAvatarDecorationSettings(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var1 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStoresObject;
            var1 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot7;
                var2 = var3.getPendingAvatarDecoration;
                var2 = var2.bind(var3)();
                var1['pendingAvatarDecoration'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.avatarDecoration;
                var1['errors'] = var2;
                return var1;
            };
            var1 = var9.bind(var10)(var8, var1);
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.useStateFromStoresObject;
            var6 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getPendingAvatarDecoration;
                var2 = var2.bind(var3)();
                var1['pendingAvatarDecoration'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.avatarDecoration;
                var1['errors'] = var2;
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var4 = null;
            var3 = arg1;
            if(!(var4 != var3)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            var1 = var2;
case 43:
            return var1;
        }
    };
    var3['useAvatarDecorationSettings'] = var4;
    var4 = function useProfileEffectSettings(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 6;
            var1 = var7[var4];
            var5 = undefined;
            var10 = var6.bind(var5)(var1);
            var9 = var10.useStateFromStoresObject;
            var1 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var1;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot7;
                var2 = var3.getPendingProfileEffect;
                var2 = var2.bind(var3)();
                var1['pendingProfileEffect'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.profileEffect;
                var1['errors'] = var2;
                return var1;
            };
            var1 = var9.bind(var10)(var8, var1);
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.useStateFromStoresObject;
            var6 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getPendingProfileEffect;
                var2 = var2.bind(var3)();
                var1['pendingProfileEffect'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.profileEffect;
                var1['errors'] = var2;
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var4 = null;
            var3 = arg1;
            if(!(var4 != var3)) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var1 = var2;
case 43:
            return var1;
        }
    };
    var3['useProfileEffectSettings'] = var4;
    var4 = function setNewPendingUserBio(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingBio;
            var6 = arg2;
            var2 = undefined;
            if(!(var5 !== var6)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
            var2 = var5;
case 45:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingUserBio'] = var4;
    var4 = function setNewPendingUserPronouns(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingPronouns;
            var6 = arg2;
            var2 = undefined;
            if(!(var5 !== var6)) { _fun0012_ip = 45; continue _fun0012 }
case 46:
            var2 = var5;
case 45:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingUserPronouns'] = var4;
    var4 = function setNewPendingAvatar(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingAvatar;
            var2 = null;
            var2 = var2 == var5;
            var7 = undefined;
            if(var2) { _fun0013_ip = 47; continue _fun0013 }
case 48:
            var7 = var5.imageUri;
case 47:
            var6 = arg2;
            var2 = undefined;
            if(!(var7 !== var6)) { _fun0013_ip = 49; continue _fun0013 }
case 38:
            var2 = var5;
case 49:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingAvatar'] = var4;
    var4 = function setNewPendingAvatarDecoration(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var3 = _closure1_slot8;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var8 = var5.bind(var1)(var4);
            var7 = null;
            var5 = var7 != var3;
            var4 = 'user cannot be null';
            var4 = var8.bind(var1)(var5, var4);
            if(!(var7 != var9)) { _fun0014_ip = 50; continue _fun0014 }
case 51:
            var8 = _closure1_slot6;
            var5 = var8.getMember;
            var4 = var3.id;
            var4 = var5.bind(var8)(var9, var4);
            var5 = var7 == var4;
            var9 = undefined;
            if(var5) { _fun0014_ip = 35; continue _fun0014 }
case 36:
            var9 = var4.avatarDecoration;
case 35:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 11;
            var4 = var12[var4];
            var8 = var11.bind(var1)(var4);
            var5 = var8.setPendingCollectiblesItem;
            var4 = {};
            var10 = 10;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.CollectiblesItemType;
            var10 = var10.AVATAR_DECORATION;
            var4['type'] = var10;
            var10 = var7 == var6;
            var11 = undefined;
            if(var10) { _fun0014_ip = 52; continue _fun0014 }
case 53:
            var11 = var6.skuId;
case 52:
            var12 = var7 == var9;
            var10 = undefined;
            if(var12) { _fun0014_ip = 54; continue _fun0014 }
case 55:
            var10 = var9.skuId;
case 54:
            var9 = undefined;
            if(!(var11 !== var10)) { _fun0014_ip = 56; continue _fun0014 }
case 57:
            var9 = var6;
case 56:
            var4['value'] = var9;
            var4 = var5.bind(var8)(var4);
            _fun0014_ip = 58; continue _fun0014;
case 50:
            var5 = var3.avatarDecoration;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var4 = var9.bind(var1)(var2);
            var3 = var4.setPendingCollectiblesItem;
            var2 = {};
            var8 = 10;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.CollectiblesItemType;
            var8 = var8.AVATAR_DECORATION;
            var2['type'] = var8;
            var9 = var7 == var6;
            var8 = undefined;
            if(var9) { _fun0014_ip = 59; continue _fun0014 }
case 60:
            var8 = var6.skuId;
case 59:
            var9 = var7 == var5;
            var7 = undefined;
            if(var9) { _fun0014_ip = 61; continue _fun0014 }
case 62:
            var7 = var5.skuId;
case 61:
            var5 = undefined;
            if(!(var8 !== var7)) { _fun0014_ip = 63; continue _fun0014 }
case 64:
            var5 = var6;
case 63:
            var2['value'] = var5;
            var2 = var3.bind(var4)(var2);
case 58:
            return var1;
        }
    };
    var3['setNewPendingAvatarDecoration'] = var4;
    var4 = function setNewPendingProfileEffect(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var3 = _closure1_slot8;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var8 = var5.bind(var1)(var4);
            var7 = null;
            var5 = var7 != var3;
            var4 = 'user cannot be null';
            var4 = var8.bind(var1)(var5, var4);
            if(!(var7 != var9)) { _fun0015_ip = 12; continue _fun0015 }
case 51:
            var8 = _closure1_slot5;
            var5 = var8.getGuildMemberProfile;
            var4 = var3.id;
            var4 = var5.bind(var8)(var4, var9);
            var5 = var7 == var4;
            var9 = undefined;
            if(var5) { _fun0015_ip = 35; continue _fun0015 }
case 36:
            var9 = var4.profileEffect;
case 35:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 11;
            var4 = var12[var4];
            var8 = var11.bind(var1)(var4);
            var5 = var8.setPendingCollectiblesItem;
            var4 = {};
            var10 = 10;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.CollectiblesItemType;
            var10 = var10.PROFILE_EFFECT;
            var4['type'] = var10;
            var10 = var7 == var6;
            var11 = undefined;
            if(var10) { _fun0015_ip = 52; continue _fun0015 }
case 53:
            var11 = var6.skuId;
case 52:
            var12 = var7 == var9;
            var10 = undefined;
            if(var12) { _fun0015_ip = 54; continue _fun0015 }
case 55:
            var10 = var9.skuId;
case 54:
            var9 = undefined;
            if(!(var11 !== var10)) { _fun0015_ip = 56; continue _fun0015 }
case 57:
            var9 = var6;
case 56:
            var4['value'] = var9;
            var4 = var5.bind(var8)(var4);
            _fun0015_ip = 65; continue _fun0015;
case 12:
            var5 = _closure1_slot5;
            var4 = var5.getUserProfile;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            var4 = var7 == var3;
            var5 = undefined;
            if(var4) { _fun0015_ip = 66; continue _fun0015 }
case 24:
            var5 = var3.profileEffect;
case 66:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var4 = var9.bind(var1)(var2);
            var3 = var4.setPendingCollectiblesItem;
            var2 = {};
            var8 = 10;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.CollectiblesItemType;
            var8 = var8.PROFILE_EFFECT;
            var2['type'] = var8;
            var9 = var7 == var6;
            var8 = undefined;
            if(var9) { _fun0015_ip = 67; continue _fun0015 }
case 68:
            var8 = var6.skuId;
case 67:
            var9 = var7 == var5;
            var7 = undefined;
            if(var9) { _fun0015_ip = 69; continue _fun0015 }
case 70:
            var7 = var5.skuId;
case 69:
            var5 = undefined;
            if(!(var8 !== var7)) { _fun0015_ip = 71; continue _fun0015 }
case 72:
            var5 = var6;
case 71:
            var2['value'] = var5;
            var2 = var3.bind(var4)(var2);
case 65:
            return var1;
        }
    };
    var3['setNewPendingProfileEffect'] = var4;
    var4 = function setNewPendingNameplate(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var6 = arg1;
            var9 = arg2;
            var3 = _closure1_slot8;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var8 = var5.bind(var1)(var4);
            var7 = null;
            var5 = var7 != var3;
            var4 = 'user cannot be null';
            var4 = var8.bind(var1)(var5, var4);
            if(!(var7 != var9)) { _fun0016_ip = 73; continue _fun0016 }
case 51:
            var8 = _closure1_slot6;
            var5 = var8.getMember;
            var4 = var3.id;
            var4 = var5.bind(var8)(var9, var4);
            var5 = var7 == var4;
            var9 = undefined;
            if(var5) { _fun0016_ip = 74; continue _fun0016 }
case 36:
            var4 = var4.collectibles;
            var5 = var7 == var4;
            var9 = undefined;
            if(var5) { _fun0016_ip = 74; continue _fun0016 }
case 75:
            var9 = var4.nameplate;
case 74:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 11;
            var4 = var12[var4];
            var8 = var11.bind(var1)(var4);
            var5 = var8.setPendingCollectiblesItem;
            var4 = {};
            var10 = 10;
            var10 = var12[var10];
            var10 = var11.bind(var1)(var10);
            var10 = var10.CollectiblesItemType;
            var10 = var10.NAMEPLATE;
            var4['type'] = var10;
            var10 = var7 == var6;
            var11 = undefined;
            if(var10) { _fun0016_ip = 54; continue _fun0016 }
case 55:
            var11 = var6.skuId;
case 54:
            var12 = var7 == var9;
            var10 = undefined;
            if(var12) { _fun0016_ip = 76; continue _fun0016 }
case 56:
            var10 = var9.skuId;
case 76:
            var9 = undefined;
            if(!(var11 !== var10)) { _fun0016_ip = 23; continue _fun0016 }
case 77:
            var9 = var6;
case 23:
            var4['value'] = var9;
            var4 = var5.bind(var8)(var4);
            _fun0016_ip = 78; continue _fun0016;
case 73:
            var3 = var3.collectibles;
            var4 = var7 == var3;
            var5 = undefined;
            if(var4) { _fun0016_ip = 79; continue _fun0016 }
case 80:
            var5 = var3.nameplate;
case 79:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 8;
            var2 = var10[var2];
            var4 = var9.bind(var1)(var2);
            var3 = var4.setPendingCollectiblesItem;
            var2 = {};
            var8 = 10;
            var8 = var10[var8];
            var8 = var9.bind(var1)(var8);
            var8 = var8.CollectiblesItemType;
            var8 = var8.NAMEPLATE;
            var2['type'] = var8;
            var9 = var7 == var6;
            var8 = undefined;
            if(var9) { _fun0016_ip = 58; continue _fun0016 }
case 81:
            var8 = var6.skuId;
case 58:
            var9 = var7 == var5;
            var7 = undefined;
            if(var9) { _fun0016_ip = 82; continue _fun0016 }
case 83:
            var7 = var5.skuId;
case 82:
            var5 = undefined;
            if(!(var8 !== var7)) { _fun0016_ip = 84; continue _fun0016 }
case 85:
            var5 = var6;
case 84:
            var2['value'] = var5;
            var2 = var3.bind(var4)(var2);
case 78:
            return var1;
        }
    };
    var3['setNewPendingNameplate'] = var4;
    var4 = function getProfilePreviewValue(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var3 = var2.userValue;
            var5 = var2.guildValue;
            var1 = var2.pendingValue;
            var4 = var2.guildId;
            var7 = '';
            if(!(var7 !== var1)) { _fun0017_ip = 86; continue _fun0017 }
case 87:
            var6 = null;
            if(!(var6 !== var1)) { _fun0017_ip = 86; continue _fun0017 }
case 88:
            if(!(var7 !== var1)) { _fun0017_ip = 30; continue _fun0017 }
case 3:
            if(!(var6 == var1)) { _fun0017_ip = 89; continue _fun0017 }
case 30:
            var2 = var3;
            if(!(var6 != var4)) { _fun0017_ip = 90; continue _fun0017 }
case 91:
            var2 = var3;
            if(!(var7 !== var5)) { _fun0017_ip = 90; continue _fun0017 }
case 19:
            var2 = var3;
            if(!(var6 != var5)) { _fun0017_ip = 90; continue _fun0017 }
case 51:
            var2 = var5;
case 90:
            var1 = var2;
case 89:
            _fun0017_ip = 92; continue _fun0017;
case 86:
            var2 = null;
            var4 = var2 != var4;
            if(!var4) { _fun0017_ip = 93; continue _fun0017 }
case 8:
            var2 = var3;
case 93:
            var1 = var2;
case 92:
            return var1;
        }
    };
    var3['getProfilePreviewValue'] = var4;
    var4 = function showRemoveAvatar(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0018_ip = 20; continue _fun0018 }
case 94:
            var1 = null;
            var1 = var1 != var2;
            _fun0018_ip = 95; continue _fun0018;
case 20:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 95:
            return var1;
        }
    };
    var3['showRemoveAvatar'] = var4;
    var2 = function showRemoveBanner(arg1, arg2) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0019_ip = 20; continue _fun0019 }
case 94:
            var1 = null;
            var1 = var1 != var2;
            _fun0019_ip = 95; continue _fun0019;
case 20:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 95:
            return var1;
        }
    };
    var3['showRemoveBanner'] = var2;
    return var1;
})();
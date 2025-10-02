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
    var4 = 11;
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
    var4 = function useGuildMemberAndUserPendingAvatarDecoration(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 5;
            var4 = var11[var7];
            var8 = undefined;
            var12 = var10.bind(var8)(var4);
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
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var6, var4);
            var6 = _closure1_slot1;
            var4 = 6;
            var4 = var11[var4];
            var4 = var6.bind(var8)(var4);
            var2 = var2.avatarDecoration;
            var4 = var4.bind(var8)(var2);
            var2 = var11[var7];
            var13 = var10.bind(var8)(var2);
            var12 = var13.useStateFromStoresObject;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var1 = {};
                var3 = _closure1_slot7;
                var2 = var3.getPendingAvatarDecoration;
                var2 = var2.bind(var3)();
                var1['pendingUserAvatarDecoration'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.avatarDecoration;
                var1['userErrors'] = var2;
                return var1;
            };
            var2 = var12.bind(var13)(var6, var2);
            var6 = var2.pendingUserAvatarDecoration;
            var2 = var2.userErrors;
            var7 = var11[var7];
            var10 = var10.bind(var8)(var7);
            var7 = var10.useStateFromStoresObject;
            var11 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function() {
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getPendingAvatarDecoration;
                var2 = var2.bind(var3)();
                var1['pendingGuildAvatarDecoration'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.avatarDecoration;
                var1['guildErrors'] = var2;
                return var1;
            };
            var1 = var7.bind(var10)(var3, var1);
            var7 = var1.pendingGuildAvatarDecoration;
            var3 = var1.guildErrors;
            var1 = {};
            var1['userAvatarDecoration'] = var4;
            var4 = null;
            var10 = var4 == var9;
            if(var10) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = var9.avatarDecoration;
case 12:
            var1['guildAvatarDecoration'] = var8;
            if(!(var4 != var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var7;
case 14:
            var1['pendingAvatarDecoration'] = var6;
            if(!(var4 != var5)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var2 = var3;
case 16:
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberAndUserPendingAvatarDecoration'] = var4;
    var4 = function useGuildMemberAndUserPendingNameplate(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var5;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 5;
            var4 = var10[var7];
            var11 = undefined;
            var12 = var8.bind(var11)(var4);
            var9 = var12.useStateFromStores;
            var4 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var4;
            var4 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0005_ip = 18; continue _fun0005 }
case 11:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 18:
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
            if(var10) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var9 = var9.collectibles;
            var10 = var4 == var9;
            var8 = undefined;
            if(var10) { _fun0004_ip = 19; continue _fun0004 }
case 21:
            var8 = var9.nameplate;
case 19:
            var1['guildNameplate'] = var8;
            if(!(var4 != var5)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            var6 = var7;
case 22:
            var1['pendingNameplate'] = var6;
            if(!(var4 != var5)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
            var2 = var3;
case 24:
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberAndUserPendingNameplate'] = var4;
    var4 = function useGuildMemberOrUserPendingDisplayNameStyles(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var11 = arg1;
            var7 = arg2;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var7;
            var9 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 7;
            var1 = var12[var1];
            var8 = undefined;
            var1 = var9.bind(var8)(var1);
            var4 = var1.DisplayNameStylesGaExperiment;
            var3 = var4.useConfig;
            var1 = {};
            var6 = 'useGuildMemberOrUserPendingDisplayNameStyles';
            var1['location'] = var6;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            var6 = 5;
            var3 = var12[var6];
            var13 = var9.bind(var8)(var3);
            var10 = var13.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var4 = null;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var3 = _closure2_slot0;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0007_ip = 26; continue _fun0007 }
case 28:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 26:
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var4, var3);
            var3 = var12[var6];
            var14 = var9.bind(var8)(var3);
            var13 = var14.useStateFromStoresObject;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
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
            var3 = var13.bind(var14)(var4, var3);
            var4 = var3.pendingUserDisplayNameStyles;
            var3 = var3.userErrors;
            var6 = var12[var6];
            var9 = var9.bind(var8)(var6);
            var6 = var9.useStateFromStoresObject;
            var12 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var12;
            var2 = function() {
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
            var2 = var6.bind(var9)(var5, var2);
            var6 = var2.pendingGuildDisplayNameStyles;
            var2 = var2.guildErrors;
            var9 = null;
            var12 = var9 == var11;
            var5 = undefined;
            if(var12) { _fun0006_ip = 14; continue _fun0006 }
case 29:
            var5 = var11.displayNameStyles;
case 14:
            var11 = var9 == var10;
            var8 = undefined;
            if(var11) { _fun0006_ip = 30; continue _fun0006 }
case 17:
            var8 = var10.displayNameStyles;
case 30:
            if(!(var9 != var7)) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            if(!var1) { _fun0006_ip = 31; continue _fun0006 }
case 33:
            if(!(var9 == var8)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            if(!(var9 != var6)) { _fun0006_ip = 31; continue _fun0006 }
case 34:
            var1 = {};
            var7 = var5;
            if(!(var9 != var8)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var7 = var8;
case 36:
            var1['currentDisplayNameStyles'] = var7;
            var1['pendingDisplayNameStyles'] = var6;
            var1['pendingErrors'] = var2;
            _fun0006_ip = 38; continue _fun0006;
case 31:
            var2 = {};
            var2['currentDisplayNameStyles'] = var5;
            var2['pendingDisplayNameStyles'] = var4;
            var2['pendingErrors'] = var3;
            var1 = var2;
case 38:
            return var1;
        }
    };
    var3['useGuildMemberOrUserPendingDisplayNameStyles'] = var4;
    var4 = function useGlobalOrGuildIdentityProfileEffect(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
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
                if(!(var2 != var1)) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                var6 = _closure1_slot5;
                var5 = var6.getGuildMemberProfile;
                var1 = _closure2_slot0;
                var4 = var1.id;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var4 = var5.bind(var6)(var4, var1);
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                var1 = var4.profileEffect;
case 41:
                _fun0008_ip = 43; continue _fun0008;
case 39:
                var5 = _closure1_slot5;
                var4 = var5.getUserProfile;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                var2 = var3.profileEffect;
case 44:
                var1 = var2;
case 43:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useGlobalOrGuildIdentityProfileEffect'] = var4;
    var4 = function useGlobalOrGuildIdentityPendingProfileEffect(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot7;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 46; continue _fun0009 }
case 40:
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getPendingProfileEffect;
                var2 = var2.bind(var3)();
                var1['pendingProfileEffect'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.profileEffect;
                var1['errors'] = var2;
                _fun0009_ip = 47; continue _fun0009;
case 46:
                var2 = {};
                var4 = _closure1_slot7;
                var3 = var4.getPendingProfileEffect;
                var3 = var3.bind(var4)();
                var2['pendingProfileEffect'] = var3;
                var3 = var4.getErrors;
                var3 = var3.bind(var4)();
                var3 = var3.profileEffect;
                var2['errors'] = var3;
                var1 = var2;
case 47:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGlobalOrGuildIdentityPendingProfileEffect'] = var4;
    var4 = function setNewPendingUserBio(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingBio;
            var6 = arg2;
            var2 = undefined;
            if(!(var5 !== var6)) { _fun0010_ip = 48; continue _fun0010 }
case 49:
            var2 = var5;
case 48:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingUserBio'] = var4;
    var4 = function setNewPendingUserPronouns(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingPronouns;
            var6 = arg2;
            var2 = undefined;
            if(!(var5 !== var6)) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            var2 = var5;
case 48:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingUserPronouns'] = var4;
    var4 = function setNewPendingAvatar(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPendingAvatar;
            var2 = null;
            var2 = var2 == var5;
            var7 = undefined;
            if(var2) { _fun0012_ip = 50; continue _fun0012 }
case 51:
            var7 = var5.imageUri;
case 50:
            var6 = arg2;
            var2 = undefined;
            if(!(var7 !== var6)) { _fun0012_ip = 52; continue _fun0012 }
case 46:
            var2 = var5;
case 52:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingAvatar'] = var4;
    var4 = function setNewPendingAvatarDecoration(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = null;
            var1 = arg1;
            if(!(var2 == var1)) { _fun0013_ip = 53; continue _fun0013 }
case 54:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.setPendingAvatarDecoration;
            _fun0013_ip = 55; continue _fun0013;
case 53:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var3 = var1.setPendingAvatarDecoration;
case 55:
            var1 = undefined;
            var2 = arg2;
            var2 = var3.bind(var1)(var2);
            var2 = !var2;
            return var1;
        }
    };
    var3['setNewPendingAvatarDecoration'] = var4;
    var4 = function setNewPendingProfileEffect(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var7 = arg2;
            var3 = arg3;
            var2 = null;
            var5 = var2 == var4;
            var1 = undefined;
            var6 = undefined;
            if(var5) { _fun0014_ip = 56; continue _fun0014 }
case 57:
            var6 = var4.skuId;
case 56:
            var8 = var2 == var7;
            var5 = undefined;
            if(var8) { _fun0014_ip = 49; continue _fun0014 }
case 58:
            var5 = var7.skuId;
case 49:
            if(!(var6 === var5)) { _fun0014_ip = 59; continue _fun0014 }
case 18:
            if(!(var2 != var3)) { _fun0014_ip = 60; continue _fun0014 }
case 50:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 10;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.setPendingProfileEffect;
            var5 = var5.bind(var6)(var1);
            _fun0014_ip = 61; continue _fun0014;
case 60:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 9;
            var5 = var7[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.setPendingProfileEffect;
            var5 = var5.bind(var6)(var1);
            _fun0014_ip = 61; continue _fun0014;
case 59:
            if(!(var2 != var3)) { _fun0014_ip = 62; continue _fun0014 }
case 63:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingProfileEffect;
            var2 = var2.bind(var3)(var4);
            _fun0014_ip = 61; continue _fun0014;
case 62:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 9;
            var2 = var5[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.setPendingProfileEffect;
            var2 = var2.bind(var3)(var4);
case 61:
            return var1;
        }
    };
    var3['setNewPendingProfileEffect'] = var4;
    var4 = function getProfilePreviewField(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var5 = arg3;
            var6 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0015_ip = 64; continue _fun0015 }
case 65:
            var6 = false;
case 64:
            var4 = null;
            if(!(var4 == var3)) { _fun0015_ip = 66; continue _fun0015 }
case 67:
            if(!(var4 != var2)) { _fun0015_ip = 68; continue _fun0015 }
case 28:
            var7 = 'string';
            var1 = typeof var2;
            if(!(var7 === var1)) { _fun0015_ip = 69; continue _fun0015 }
case 70:
            var1 = '';
            if(!(var1 !== var2)) { _fun0015_ip = 68; continue _fun0015 }
case 69:
            var1 = {};
            var1['value'] = var2;
            var2 = true;
            var1['isUsingGuildValue'] = var2;
            _fun0015_ip = 71; continue _fun0015;
case 68:
            var2 = {};
            var2['value'] = var5;
            var7 = false;
            var2['isUsingGuildValue'] = var7;
            var1 = var2;
case 71:
            _fun0015_ip = 72; continue _fun0015;
case 66:
            var7 = 'string';
            var2 = typeof var3;
            if(!(var7 === var2)) { _fun0015_ip = 73; continue _fun0015 }
case 74:
            var2 = '';
            if(!(var2 !== var3)) { _fun0015_ip = 75; continue _fun0015 }
case 73:
            var2 = {};
            var2['value'] = var3;
            var2['isUsingGuildValue'] = var6;
            _fun0015_ip = 76; continue _fun0015;
case 75:
            var3 = {};
            var4 = null;
            if(!var6) { _fun0015_ip = 77; continue _fun0015 }
case 78:
            var4 = var5;
case 77:
            var3['value'] = var4;
            var4 = false;
            var3['isUsingGuildValue'] = var4;
            var2 = var3;
case 76:
            var1 = var2;
case 72:
            return var1;
        }
    };
    var3['getProfilePreviewField'] = var4;
    var4 = function getPreviewProfileEffect(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.pendingProfileEffect;
            var5 = var1.displayProfile;
            var6 = null;
            var2 = var6 == var5;
            var1 = undefined;
            if(var2) { _fun0016_ip = 18; continue _fun0016 }
case 67:
            var2 = var5._userProfile;
            var7 = var6 == var2;
            var1 = undefined;
            if(var7) { _fun0016_ip = 18; continue _fun0016 }
case 70:
            var1 = var2.profileEffect;
case 18:
            var7 = var6 == var5;
            var2 = undefined;
            if(var7) { _fun0016_ip = 79; continue _fun0016 }
case 80:
            var7 = var5._guildMemberProfile;
            var8 = var6 == var7;
            var2 = undefined;
            if(var8) { _fun0016_ip = 79; continue _fun0016 }
case 81:
            var2 = var7.profileEffect;
case 79:
            var7 = var6 === var3;
            if(!var7) { _fun0016_ip = 82; continue _fun0016 }
case 83:
            if(!(var6 == var2)) { _fun0016_ip = 78; continue _fun0016 }
case 82:
            var2 = null;
            if(var7) { _fun0016_ip = 84; continue _fun0016 }
case 74:
            if(!(var6 == var3)) { _fun0016_ip = 85; continue _fun0016 }
case 86:
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0016_ip = 43; continue _fun0016 }
case 87:
            var4 = var5.profileEffect;
case 43:
            var3 = var4;
case 85:
            var2 = var3;
case 84:
            var1 = var2;
case 78:
            return var1;
        }
    };
    var3['getPreviewProfileEffect'] = var4;
    var4 = function showRemoveAvatar(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0017_ip = 27; continue _fun0017 }
case 54:
            var1 = null;
            var1 = var1 != var2;
            _fun0017_ip = 67; continue _fun0017;
case 27:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 67:
            return var1;
        }
    };
    var3['showRemoveAvatar'] = var4;
    var2 = function showRemoveBanner(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0018_ip = 27; continue _fun0018 }
case 54:
            var1 = null;
            var1 = var1 != var2;
            _fun0018_ip = 67; continue _fun0018;
case 27:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 67:
            return var1;
        }
    };
    var3['showRemoveBanner'] = var2;
    return var1;
})();
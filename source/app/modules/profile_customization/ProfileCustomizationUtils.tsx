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
 0:
                var2 = _closure1_slot6;
                var1 = var2.getMutableAllGuildsAndMembers;
                var10 = var1.bind(var2)();
                var3 = {};
                var8 = var10;
                var4 = null;
                for(var5 in var8)
 35:
                {
 44:
                    var13 = var5;
                    var12 = var10[var13];
                    var11 = _closure2_slot0;
                    var12 = var12[var11];
                    var14 = var4 == var12;
                    var11 = undefined;
                    if(var14) { _fun0001_ip = 74; continue _fun0001 }
 68:
                    var11 = var12.avatar;
 74:
                    if(var4 == var11) { _fun0001_ip = 35; continue _fun0001 }
 78:
                    var12 = var3[var11];
                    if(!(var4 == var12)) { _fun0001_ip = 94; continue _fun0001 }
 86:
                    var12 = new Array(0);
                    var3[var11] = var12;
 94:
                    var12 = var3[var11];
                    var11 = var12.push;
                    var11 = var11.bind(var12)(var13);
                    _fun0001_ip = 35; continue _fun0001;
                }
 110:
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
 0:
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
 0:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0003_ip = 52; continue _fun0003 }
 15:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var3 = var3.id;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 52:
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
            if(var10) { _fun0002_ip = 218; continue _fun0002 }
 212:
            var8 = var9.avatarDecoration;
 218:
            var1['guildAvatarDecoration'] = var8;
            if(!(var4 != var5)) { _fun0002_ip = 232; continue _fun0002 }
 229:
            var6 = var7;
 232:
            var1['pendingAvatarDecoration'] = var6;
            if(!(var4 != var5)) { _fun0002_ip = 244; continue _fun0002 }
 241:
            var2 = var3;
 244:
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberAndUserPendingAvatarDecoration'] = var4;
    var4 = function useGuildMemberAndUserPendingNameplate(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
 0:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0005_ip = 47; continue _fun0005 }
 15:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 47:
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
            if(var10) { _fun0004_ip = 216; continue _fun0004 }
 195:
            var9 = var9.collectibles;
            var10 = var4 == var9;
            var8 = undefined;
            if(var10) { _fun0004_ip = 216; continue _fun0004 }
 210:
            var8 = var9.nameplate;
 216:
            var1['guildNameplate'] = var8;
            if(!(var4 != var5)) { _fun0004_ip = 230; continue _fun0004 }
 227:
            var6 = var7;
 230:
            var1['pendingNameplate'] = var6;
            if(!(var4 != var5)) { _fun0004_ip = 242; continue _fun0004 }
 239:
            var2 = var3;
 242:
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberAndUserPendingNameplate'] = var4;
    var4 = function useGuildMemberOrUserPendingDisplayNameStyles(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var11 = arg1;
            var9 = arg2;
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var9;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 7;
            var3 = var12[var3];
            var7 = undefined;
            var3 = var6.bind(var7)(var3);
            var5 = var3.DisplayNameStylesPerServerExperiment;
            var4 = var5.useConfig;
            var3 = {};
            var8 = 'useGuildMemberOrUserPendingDisplayNameStyles';
            var3['location'] = var8;
            var3 = var4.bind(var5)(var3);
            var8 = var3.enabled;
            var5 = 5;
            var3 = var12[var5];
            var13 = var6.bind(var7)(var3);
            var10 = var13.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var5 = _closure2_slot1;
                    var4 = null;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0007_ip = 62; continue _fun0007 }
 17:
                    var3 = _closure2_slot0;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0007_ip = 62; continue _fun0007 }
 30:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 62:
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var4, var3);
            var3 = var12[var5];
            var14 = var6.bind(var7)(var3);
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
            var5 = var12[var5];
            var6 = var6.bind(var7)(var5);
            var5 = var6.useStateFromStoresObject;
            var12 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
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
            var1 = var5.bind(var6)(var2, var1);
            var6 = var1.pendingGuildDisplayNameStyles;
            var2 = var1.guildErrors;
            var1 = null;
            var12 = var1 == var11;
            var5 = undefined;
            if(var12) { _fun0006_ip = 232; continue _fun0006 }
 226:
            var5 = var11.displayNameStyles;
 232:
            var11 = var1 == var10;
            var7 = undefined;
            if(var11) { _fun0006_ip = 247; continue _fun0006 }
 241:
            var7 = var10.displayNameStyles;
 247:
            if(!(var1 != var9)) { _fun0006_ip = 281; continue _fun0006 }
 251:
            if(!var8) { _fun0006_ip = 281; continue _fun0006 }
 254:
            if(!(var1 == var7)) { _fun0006_ip = 262; continue _fun0006 }
 258:
            if(!(var1 != var6)) { _fun0006_ip = 281; continue _fun0006 }
 262:
            var1 = {};
            var1['currentDisplayNameStyles'] = var7;
            var1['pendingDisplayNameStyles'] = var6;
            var1['pendingErrors'] = var2;
            _fun0006_ip = 301; continue _fun0006;
 281:
            var2 = {};
            var2['currentDisplayNameStyles'] = var5;
            var2['pendingDisplayNameStyles'] = var4;
            var2['pendingErrors'] = var3;
            var1 = var2;
 301:
            return var1;
        }
    };
    var3['useGuildMemberOrUserPendingDisplayNameStyles'] = var4;
    var4 = function useGlobalOrGuildIdentityProfileEffect(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 5;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var1 = _closure2_slot1;
                var4 = null;
                if(!(var4 != var1)) { _fun0008_ip = 81; continue _fun0008 }
 13:
                var6 = _closure1_slot5;
                var5 = var6.getGuildMemberProfile;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var3 = var5.bind(var6)(var3, var1);
                var5 = var4 == var3;
                var1 = undefined;
                if(var5) { _fun0008_ip = 79; continue _fun0008 }
 59:
                var3 = var3.profileEffect;
                var5 = var4 == var3;
                var1 = undefined;
                if(var5) { _fun0008_ip = 79; continue _fun0008 }
 74:
                var1 = var3.id;
 79:
                _fun0008_ip = 140; continue _fun0008;
 81:
                var5 = _closure1_slot5;
                var3 = var5.getUserProfile;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var3 = var3.bind(var5)(var2);
                var6 = var4 == var3;
                var2 = undefined;
                if(var6) { _fun0008_ip = 137; continue _fun0008 }
 117:
                var3 = var3.profileEffect;
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0008_ip = 137; continue _fun0008 }
 132:
                var2 = var3.id;
 137:
                var1 = var2;
 140:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
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
 0:
                var2 = _closure2_slot0;
                var1 = null;
                if(!(var1 != var2)) { _fun0009_ip = 60; continue _fun0009 }
 13:
                var1 = {};
                var3 = _closure1_slot4;
                var2 = var3.getPendingProfileEffectId;
                var2 = var2.bind(var3)();
                var1['pendingProfileEffectId'] = var2;
                var2 = var3.getErrors;
                var2 = var2.bind(var3)();
                var2 = var2.profileEffect;
                var1['errors'] = var2;
                _fun0009_ip = 108; continue _fun0009;
 60:
                var2 = {};
                var4 = _closure1_slot7;
                var3 = var4.getPendingProfileEffectId;
                var3 = var3.bind(var4)();
                var2['pendingProfileEffectId'] = var3;
                var3 = var4.getErrors;
                var3 = var3.bind(var4)();
                var3 = var3.profileEffect;
                var2['errors'] = var3;
                var1 = var2;
 108:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGlobalOrGuildIdentityPendingProfileEffect'] = var4;
    var4 = function setNewPendingUserBio(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
            if(!(var5 !== var6)) { _fun0010_ip = 46; continue _fun0010 }
 43:
            var2 = var5;
 46:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingUserBio'] = var4;
    var4 = function setNewPendingUserPronouns(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
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
            if(!(var5 !== var6)) { _fun0011_ip = 46; continue _fun0011 }
 43:
            var2 = var5;
 46:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingUserPronouns'] = var4;
    var4 = function setNewPendingAvatar(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
            if(var2) { _fun0012_ip = 51; continue _fun0012 }
 45:
            var7 = var5.imageUri;
 51:
            var6 = arg2;
            var2 = undefined;
            if(!(var7 !== var6)) { _fun0012_ip = 63; continue _fun0012 }
 60:
            var2 = var5;
 63:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['setNewPendingAvatar'] = var4;
    var4 = function setNewPendingAvatarDecoration(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var2 = null;
            var1 = arg1;
            if(!(var2 == var1)) { _fun0013_ip = 42; continue _fun0013 }
 9:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.setPendingAvatarDecoration;
            _fun0013_ip = 73; continue _fun0013;
 42:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var3 = var1.setPendingAvatarDecoration;
 73:
            var1 = undefined;
            var2 = arg2;
            var2 = var3.bind(var1)(var2);
            var2 = !var2;
            return var1;
        }
    };
    var3['setNewPendingAvatarDecoration'] = var4;
    var4 = function setNewPendingProfileEffectId(arg1, arg2, arg3) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var2 = arg3;
            var1 = arg2;
            if(!(var3 === var1)) { _fun0014_ip = 95; continue _fun0014 }
 13:
            var1 = null;
            if(!(var1 != var2)) { _fun0014_ip = 57; continue _fun0014 }
 19:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.setPendingProfileEffectId;
            var1 = var1.bind(var4)(var5);
            _fun0014_ip = 175; continue _fun0014;
 57:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.setPendingProfileEffectId;
            var1 = var1.bind(var4)(var5);
            _fun0014_ip = 175; continue _fun0014;
 95:
            var1 = null;
            if(!(var1 != var2)) { _fun0014_ip = 139; continue _fun0014 }
 101:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.setPendingProfileEffectId;
            var1 = var1.bind(var2)(var3);
            _fun0014_ip = 175; continue _fun0014;
 139:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var1 = var2.setPendingProfileEffectId;
            var1 = var1.bind(var2)(var3);
 175:
            var1 = undefined;
            return var1;
        }
    };
    var3['setNewPendingProfileEffectId'] = var4;
    var4 = function getProfilePreviewField(arg1, arg2, arg3) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var3 = arg1;
            var2 = arg2;
            var5 = arg3;
            var6 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0015_ip = 20; continue _fun0015 }
 18:
            var6 = false;
 20:
            var4 = null;
            if(!(var4 == var3)) { _fun0015_ip = 82; continue _fun0015 }
 26:
            if(!(var4 != var2)) { _fun0015_ip = 64; continue _fun0015 }
 30:
            var7 = 'string';
            var1 = typeof var2;
            if(!(var7 === var1)) { _fun0015_ip = 49; continue _fun0015 }
 41:
            var1 = '';
            if(!(var1 !== var2)) { _fun0015_ip = 64; continue _fun0015 }
 49:
            var1 = {};
            var1['value'] = var2;
            var2 = true;
            var1['isUsingGuildValue'] = var2;
            _fun0015_ip = 80; continue _fun0015;
 64:
            var2 = {};
            var2['value'] = var5;
            var7 = false;
            var2['isUsingGuildValue'] = var7;
            var1 = var2;
 80:
            _fun0015_ip = 141; continue _fun0015;
 82:
            var7 = 'string';
            var2 = typeof var3;
            if(!(var7 === var2)) { _fun0015_ip = 101; continue _fun0015 }
 93:
            var2 = '';
            if(!(var2 !== var3)) { _fun0015_ip = 114; continue _fun0015 }
 101:
            var2 = {};
            var2['value'] = var3;
            var2['isUsingGuildValue'] = var6;
            _fun0015_ip = 138; continue _fun0015;
 114:
            var3 = {};
            var4 = null;
            if(!var6) { _fun0015_ip = 124; continue _fun0015 }
 121:
            var4 = var5;
 124:
            var3['value'] = var4;
            var4 = false;
            var3['isUsingGuildValue'] = var4;
            var2 = var3;
 138:
            var1 = var2;
 141:
            return var1;
        }
    };
    var3['getProfilePreviewField'] = var4;
    var4 = function getPreviewProfileEffectId(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var1 = arg1;
            var3 = var1.pendingProfileEffectId;
            var5 = var1.displayProfile;
            var6 = null;
            var2 = var6 == var5;
            var1 = undefined;
            if(var2) { _fun0016_ip = 61; continue _fun0016 }
 26:
            var2 = var5._userProfile;
            var4 = var6 == var2;
            var1 = undefined;
            if(var4) { _fun0016_ip = 61; continue _fun0016 }
 41:
            var2 = var2.profileEffect;
            var4 = var6 == var2;
            var1 = undefined;
            if(var4) { _fun0016_ip = 61; continue _fun0016 }
 56:
            var1 = var2.id;
 61:
            var4 = var6 == var5;
            var2 = undefined;
            if(var4) { _fun0016_ip = 105; continue _fun0016 }
 70:
            var4 = var5._guildMemberProfile;
            var8 = var6 == var4;
            var2 = undefined;
            if(var8) { _fun0016_ip = 105; continue _fun0016 }
 85:
            var4 = var4.profileEffect;
            var8 = var6 == var4;
            var2 = undefined;
            if(var8) { _fun0016_ip = 105; continue _fun0016 }
 100:
            var2 = var4.id;
 105:
            var4 = var6 === var3;
            if(!var4) { _fun0016_ip = 116; continue _fun0016 }
 112:
            if(!(var6 == var2)) { _fun0016_ip = 163; continue _fun0016 }
 116:
            var2 = null;
            if(var4) { _fun0016_ip = 160; continue _fun0016 }
 121:
            if(!(var6 == var3)) { _fun0016_ip = 157; continue _fun0016 }
 125:
            var8 = var6 == var5;
            var4 = undefined;
            if(var8) { _fun0016_ip = 154; continue _fun0016 }
 134:
            var5 = var5.profileEffect;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0016_ip = 154; continue _fun0016 }
 149:
            var4 = var5.id;
 154:
            var3 = var4;
 157:
            var2 = var3;
 160:
            var1 = var2;
 163:
            return var1;
        }
    };
    var3['getPreviewProfileEffectId'] = var4;
    var4 = function showRemoveAvatar(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0017_ip = 17; continue _fun0017 }
 9:
            var1 = null;
            var1 = var1 != var2;
            _fun0017_ip = 26; continue _fun0017;
 17:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
 26:
            return var1;
        }
    };
    var3['showRemoveAvatar'] = var4;
    var2 = function showRemoveBanner(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0018_ip = 17; continue _fun0018 }
 9:
            var1 = null;
            var1 = var1 != var2;
            _fun0018_ip = 26; continue _fun0018;
 17:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
 26:
            return var1;
        }
    };
    var3['showRemoveBanner'] = var2;
    return var1;
})();
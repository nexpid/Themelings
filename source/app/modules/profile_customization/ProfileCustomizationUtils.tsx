// app/modules/profile_customization/ProfileCustomizationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getProfilePreviewValue(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.userValue;
            var5 = var2.guildValue;
            var1 = var2.pendingValue;
            var4 = var2.guildId;
            var7 = '';
            if(!(var7 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = null;
            if(!(var6 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            if(!(var7 !== var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!(var6 == var1)) { _fun0001_ip = 7; continue _fun0001 }
case 5:
            var2 = var3;
            if(!(var6 != var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3;
            if(!(var7 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var2 = var3;
            if(!(var6 != var5)) { _fun0001_ip = 8; continue _fun0001 }
case 11:
            var2 = var5;
case 8:
            var1 = var2;
case 7:
            _fun0001_ip = 12; continue _fun0001;
case 2:
            var2 = null;
            var4 = var2 != var4;
            if(!var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var2 = var3;
case 13:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot6 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var9 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/profile_customization/ProfileCustomizationUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useAvatarsWithGuilds(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.getMutableAllGuildsAndMembers;
                var10 = var1.bind(var2)();
                var4 = {};
                var8 = var10;
                var1 = null;
                for(var5 in var8)
case 15:
                {
case 6:
                    var13 = var5;
                    var12 = var10[var13];
                    var11 = _closure2_slot0;
                    var12 = var12[var11];
                    var14 = var1 == var12;
                    var11 = undefined;
                    if(var14) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var11 = var12.avatar;
case 16:
                    if(var1 == var11) { _fun0002_ip = 15; continue _fun0002 }
case 18:
                    var12 = var4[var11];
                    if(!(var1 == var12)) { _fun0002_ip = 19; continue _fun0002 }
case 14:
                    var12 = new Array(0);
                    var4[var11] = var12;
case 19:
                    var12 = var4[var11];
                    var11 = var12.push;
                    var11 = var11.bind(var12)(var13);
                    _fun0002_ip = 15; continue _fun0002;
                }
case 20:
                if(!(var1 == var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var1 = new Array(0);
                _fun0002_ip = 23; continue _fun0002;
case 21:
                var2 = global;
                var3 = var2.Object;
                var2 = var3.entries;
                var4 = var2.bind(var3)(var4);
                var3 = var4.map;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = 1;
                    var2 = var2[var1];
                    var1 = 0;
                    var1 = var2[var1];
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
case 23:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useAvatarsWithGuilds'] = var5;
    var5 = function useGuildMemberAndUserPendingNameplate(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 4;
            var5 = var8[var3];
            var7 = undefined;
            var11 = var6.bind(var7)(var5);
            var10 = var11.useStateFromStores;
            var5 = _closure1_slot5;
            var9 = new Array(1);
            var9[0] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 24:
                    return var1;
                }
            };
            var5 = var10.bind(var11)(var9, var5);
            var3 = var8[var3];
            var6 = var6.bind(var7)(var3);
            var3 = var6.useStateFromStoresObject;
            var8 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot3;
                var2 = var4.getPendingChanges;
                var3 = _closure2_slot1;
                var2 = var2.bind(var4)(var3);
                var2 = var2.pendingNameplate;
                var1['pendingNameplate'] = var2;
                var2 = var4.getErrors;
                var2 = var2.bind(var4)(var3);
                var2 = var2.nameplate;
                var1['pendingErrors'] = var2;
                return var1;
            };
            var1 = var3.bind(var6)(var2, var1);
            var3 = var1.pendingNameplate;
            var2 = var1.pendingErrors;
            var1 = {};
            var4 = var4.nameplate;
            var1['userNameplate'] = var4;
            var6 = null;
            var8 = var6 == var5;
            var4 = undefined;
            if(var8) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var5 = var5.collectibles;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0003_ip = 26; continue _fun0003 }
case 28:
            var4 = var5.nameplate;
case 26:
            var1['guildNameplate'] = var4;
            var1['pendingNameplate'] = var3;
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberAndUserPendingNameplate'] = var5;
    var5 = function useGuildMemberOrUserPendingDisplayNameStyles(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var _closure2_slot0 = var9;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 4;
            var6 = var7[var3];
            var5 = undefined;
            var11 = var4.bind(var5)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var4 = null;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0006_ip = 10; continue _fun0006 }
case 29:
                    var3 = _closure2_slot0;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0006_ip = 10; continue _fun0006 }
case 30:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 10:
                    return var1;
                }
            };
            var6 = var10.bind(var11)(var8, var6);
            var3 = var7[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.useStateFromStoresObject;
            var7 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                var1 = {};
                var4 = _closure1_slot3;
                var2 = var4.getPendingChanges;
                var3 = _closure2_slot1;
                var2 = var2.bind(var4)(var3);
                var2 = var2.pendingDisplayNameStyles;
                var1['pendingDisplayNameStyles'] = var2;
                var2 = var4.getTryItOutChanges;
                var2 = var2.bind(var4)();
                var2 = var2.tryItOutDisplayNameStyles;
                var1['tryItOutDisplayNameStyles'] = var2;
                var2 = var4.getErrors;
                var2 = var2.bind(var4)(var3);
                var2 = var2.displayNameStyles;
                var1['pendingErrors'] = var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var4 = var1.pendingDisplayNameStyles;
            var3 = var1.tryItOutDisplayNameStyles;
            var2 = var1.pendingErrors;
            var1 = {};
            var7 = null;
            var10 = var7 == var9;
            var8 = undefined;
            if(var10) { _fun0005_ip = 31; continue _fun0005 }
case 32:
            var8 = var9.displayNameStyles;
case 31:
            var1['userDisplayNameStyles'] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0005_ip = 33; continue _fun0005 }
case 34:
            var5 = var6.displayNameStyles;
case 33:
            var1['guildDisplayNameStyles'] = var5;
            var1['pendingDisplayNameStyles'] = var4;
            var1['tryItOutDisplayNameStyles'] = var3;
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberOrUserPendingDisplayNameStyles'] = var5;
    var5 = function useUserAvatarDecoration(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var1 = var2.user;
            var _closure2_slot0 = var1;
            var5 = var2.guildId;
            var _closure2_slot1 = var5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var6 = var6[var2];
            var2 = undefined;
            var7 = var7.bind(var2)(var6);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var8;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0008_ip = 5; continue _fun0008 }
case 35:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 5:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var4, var3);
            var4 = null;
            if(!(var4 == var5)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
            var1 = var1.avatarDecoration;
            _fun0007_ip = 38; continue _fun0007;
case 36:
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0007_ip = 39; continue _fun0007 }
case 40:
            var2 = var3.avatarDecoration;
case 39:
            var1 = var2;
case 38:
            return var1;
        }
    };
    var3['useUserAvatarDecoration'] = var5;
    var5 = function useUserProfileEffect(arg1) {
        var2 = arg1;
        var3 = var2.user;
        var _closure2_slot0 = var3;
        var2 = var2.guildId;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var1)) { _fun0009_ip = 10; continue _fun0009 }
case 41:
                var6 = _closure1_slot4;
                var5 = var6.getGuildMemberProfile;
                var1 = _closure2_slot0;
                var4 = var1.id;
                var1 = _closure2_slot1;
                var4 = var5.bind(var6)(var4, var1);
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                var1 = var4.profileEffect;
case 42:
                _fun0009_ip = 44; continue _fun0009;
case 10:
                var5 = _closure1_slot4;
                var4 = var5.getUserProfile;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0009_ip = 45; continue _fun0009 }
case 46:
                var2 = var3.profileEffect;
case 45:
                var1 = var2;
case 44:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useUserProfileEffect'] = var5;
    var5 = function useUserProfileFrame(arg1) {
        var2 = arg1;
        var3 = var2.user;
        var _closure2_slot0 = var3;
        var2 = var2.guildId;
        var _closure2_slot1 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot4;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var1)) { _fun0010_ip = 10; continue _fun0010 }
case 41:
                var6 = _closure1_slot4;
                var5 = var6.getGuildMemberProfile;
                var1 = _closure2_slot0;
                var4 = var1.id;
                var1 = _closure2_slot1;
                var4 = var5.bind(var6)(var4, var1);
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                var1 = var4.profileFrame;
case 42:
                _fun0010_ip = 44; continue _fun0010;
case 10:
                var5 = _closure1_slot4;
                var4 = var5.getUserProfile;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0010_ip = 45; continue _fun0010 }
case 46:
                var2 = var3.profileFrame;
case 45:
                var1 = var2;
case 44:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useUserProfileFrame'] = var5;
    var5 = function useAvatarDecorationSettings(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var4 = _closure1_slot3;
            var2 = var4.getPendingChanges;
            var3 = _closure2_slot0;
            var2 = var2.bind(var4)(var3);
            var2 = var2.pendingAvatarDecoration;
            var1['pendingAvatarDecoration'] = var2;
            var2 = var4.getErrors;
            var2 = var2.bind(var4)(var3);
            var2 = var2.avatarDecoration;
            var1['errors'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useAvatarDecorationSettings'] = var5;
    var5 = function useProfileEffectSettings(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var4 = _closure1_slot3;
            var2 = var4.getPendingChanges;
            var3 = _closure2_slot0;
            var2 = var2.bind(var4)(var3);
            var2 = var2.pendingProfileEffect;
            var1['pendingProfileEffect'] = var2;
            var2 = var4.getErrors;
            var2 = var2.bind(var4)(var3);
            var2 = var2.profileEffect;
            var1['errors'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useProfileEffectSettings'] = var5;
    var5 = function useProfileFrameSettings(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStoresObject;
        var5 = _closure1_slot3;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var1 = {};
            var4 = _closure1_slot3;
            var2 = var4.getPendingChanges;
            var3 = _closure2_slot0;
            var2 = var2.bind(var4)(var3);
            var2 = var2.pendingProfileFrame;
            var1['pendingProfileFrame'] = var2;
            var2 = var4.getErrors;
            var2 = var2.bind(var4)(var3);
            var2 = var2.profileFrame;
            var1['errors'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useProfileFrameSettings'] = var5;
    var3['getProfilePreviewValue'] = var4;
    var4 = function resolveCollectiblesOverride(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var5 = var1.pendingValue;
            var7 = var1.userValue;
            var6 = var1.guildValue;
            var4 = var1.guildId;
            var3 = undefined;
            if(!(var3 === var5)) { _fun0011_ip = 3; continue _fun0011 }
case 47:
            return var3;
case 3:
            var2 = _closure1_slot6;
            var1 = {};
            var1['userValue'] = var7;
            var1['guildValue'] = var6;
            var1['pendingValue'] = var5;
            var1['guildId'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var3['resolveCollectiblesOverride'] = var4;
    var4 = function showRemoveAvatar(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0012_ip = 29; continue _fun0012 }
case 50:
            var1 = null;
            var1 = var1 != var2;
            _fun0012_ip = 51; continue _fun0012;
case 29:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 51:
            return var1;
        }
    };
    var3['showRemoveAvatar'] = var4;
    var4 = function showRemoveBanner(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0013_ip = 29; continue _fun0013 }
case 50:
            var1 = null;
            var1 = var1 != var2;
            _fun0013_ip = 51; continue _fun0013;
case 29:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 51:
            return var1;
        }
    };
    var3['showRemoveBanner'] = var4;
    var2 = function announcePendingAvatarChange(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var2 = arg1;
            var1 = 'set';
            if(!(var1 !== var2)) { _fun0014_ip = 52; continue _fun0014 }
case 53:
            var1 = 'remove';
            if(!(var1 !== var2)) { _fun0014_ip = 54; continue _fun0014 }
case 55:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 5;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 6;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1["/b5nqj"];
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            _fun0014_ip = 56; continue _fun0014;
case 54:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 5;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 6;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.f1+oNk;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            _fun0014_ip = 56; continue _fun0014;
case 52:
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 5;
            var1 = var8[var1];
            var6 = undefined;
            var1 = var7.bind(var6)(var1);
            var3 = var1.AccessibilityAnnouncer;
            var2 = var3.announce;
            var1 = 6;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.dyU5c5;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
case 56:
            var1 = undefined;
            return var1;
        }
    };
    var3['announcePendingAvatarChange'] = var2;
    return var1;
})();
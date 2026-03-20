// app/modules/profile_customization/ProfileCustomizationUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_customization/ProfileCustomizationUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useAvatarsWithGuilds(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot5;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var4)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
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
            if(var8) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var5 = var5.collectibles;
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var4 = var5.nameplate;
case 12:
            var1['guildNameplate'] = var4;
            var1['pendingNameplate'] = var3;
            var1['pendingErrors'] = var2;
            return var1;
        }
    };
    var3['useGuildMemberAndUserPendingNameplate'] = var4;
    var4 = function useGuildMemberOrUserPendingDisplayNameStyles(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure2_slot1;
                    var4 = null;
                    var3 = undefined;
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                    var3 = _closure2_slot0;
                    var3 = var4 == var3;
                    var1 = null;
                    if(var3) { _fun0005_ip = 15; continue _fun0005 }
case 17:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 15:
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
            if(var10) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var8 = var9.displayNameStyles;
case 18:
            var1['userDisplayNameStyles'] = var8;
            var7 = var7 == var6;
            var5 = undefined;
            if(var7) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var5 = var6.displayNameStyles;
case 20:
            var1['guildDisplayNameStyles'] = var5;
            var1['pendingDisplayNameStyles'] = var4;
            var1['tryItOutDisplayNameStyles'] = var3;
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
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 22; continue _fun0007 }
case 23:
                    var5 = _closure1_slot5;
                    var4 = var5.getMember;
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 22:
                    return var1;
                }
            };
            var3 = var6.bind(var7)(var4, var3);
            var4 = null;
            if(!(var4 == var5)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
            var1 = var1.avatarDecoration;
            _fun0006_ip = 26; continue _fun0006;
case 24:
            var4 = var4 == var3;
            var2 = undefined;
            if(var4) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var2 = var3.avatarDecoration;
case 27:
            var1 = var2;
case 26:
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure2_slot1;
                var2 = null;
                if(!(var2 != var1)) { _fun0008_ip = 15; continue _fun0008 }
case 29:
                var6 = _closure1_slot4;
                var5 = var6.getGuildMemberProfile;
                var1 = _closure2_slot0;
                var4 = var1.id;
                var1 = _closure2_slot1;
                var4 = var5.bind(var6)(var4, var1);
                var5 = var2 == var4;
                var1 = undefined;
                if(var5) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var1 = var4.profileEffect;
case 30:
                _fun0008_ip = 32; continue _fun0008;
case 15:
                var5 = _closure1_slot4;
                var4 = var5.getUserProfile;
                var3 = _closure2_slot0;
                var3 = var3.id;
                var3 = var4.bind(var5)(var3);
                var4 = var2 == var3;
                var2 = undefined;
                if(var4) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                var2 = var3.profileEffect;
case 33:
                var1 = var2;
case 32:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useUserProfileEffect'] = var4;
    var4 = function useAvatarDecorationSettings(arg1) {
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
    var3['useAvatarDecorationSettings'] = var4;
    var4 = function useProfileEffectSettings(arg1) {
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
    var3['useProfileEffectSettings'] = var4;
    var4 = function getProfilePreviewValue(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var3 = var2.userValue;
            var5 = var2.guildValue;
            var1 = var2.pendingValue;
            var4 = var2.guildId;
            var7 = '';
            if(!(var7 !== var1)) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var6 = null;
            if(!(var6 !== var1)) { _fun0009_ip = 35; continue _fun0009 }
case 37:
            if(!(var7 !== var1)) { _fun0009_ip = 22; continue _fun0009 }
case 3:
            if(!(var6 == var1)) { _fun0009_ip = 38; continue _fun0009 }
case 22:
            var2 = var3;
            if(!(var6 != var4)) { _fun0009_ip = 39; continue _fun0009 }
case 40:
            var2 = var3;
            if(!(var7 !== var5)) { _fun0009_ip = 39; continue _fun0009 }
case 15:
            var2 = var3;
            if(!(var6 != var5)) { _fun0009_ip = 39; continue _fun0009 }
case 41:
            var2 = var5;
case 39:
            var1 = var2;
case 38:
            _fun0009_ip = 42; continue _fun0009;
case 35:
            var2 = null;
            var4 = var2 != var4;
            if(!var4) { _fun0009_ip = 43; continue _fun0009 }
case 8:
            var2 = var3;
case 43:
            var1 = var2;
case 42:
            return var1;
        }
    };
    var3['getProfilePreviewValue'] = var4;
    var4 = function showRemoveAvatar(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0010_ip = 16; continue _fun0010 }
case 44:
            var1 = null;
            var1 = var1 != var2;
            _fun0010_ip = 45; continue _fun0010;
case 16:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 45:
            return var1;
        }
    };
    var3['showRemoveAvatar'] = var4;
    var4 = function showRemoveBanner(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var2 = arg1;
            var1 = undefined;
            if(!(var1 !== var2)) { _fun0011_ip = 16; continue _fun0011 }
case 44:
            var1 = null;
            var1 = var1 != var2;
            _fun0011_ip = 45; continue _fun0011;
case 16:
            var3 = null;
            var2 = arg2;
            var1 = var3 != var2;
case 45:
            return var1;
        }
    };
    var3['showRemoveBanner'] = var4;
    var2 = function announcePendingAvatarChange(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var2 = null;
            var1 = arg1;
            if(!(var2 != var1)) { _fun0012_ip = 46; continue _fun0012 }
case 44:
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
            var1 = var1.NstziV;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
            _fun0012_ip = 47; continue _fun0012;
case 46:
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
case 47:
            var1 = undefined;
            return var1;
        }
    };
    var3['announcePendingAvatarChange'] = var2;
    return var1;
})();
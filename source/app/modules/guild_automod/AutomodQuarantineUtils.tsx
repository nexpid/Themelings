// app/modules/guild_automod/AutomodQuarantineUtils.tsx
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
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Permissions;
    var _closure1_slot8 = var7;
    var4 = var4.UserSettingsSections;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildMemberFlags;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ProfileCustomizationSubsection;
    var _closure1_slot11 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/AutomodQuarantineUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCurrentUserHasAutomodQuarantinedProfile(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 9;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStores;
        var7 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var7;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot0;
                var2 = null;
                if(!(var2 != var3)) { _fun0001_ip = 85; continue _fun0001 }
 13:
                var3 = _closure1_slot3;
                var2 = var3.getId;
                var6 = var2.bind(var3)();
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.hasAutomodQuarantinedProfile;
                var5 = _closure1_slot4;
                var4 = var5.getMember;
                var1 = _closure2_slot0;
                var1 = var4.bind(var5)(var1, var6);
                var1 = var2.bind(var3)(var1);
                return var1;
 85:
                var1 = false;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useCurrentUserHasAutomodQuarantinedProfile'] = var4;
    var4 = function useGuildAutomodProfileQuarantineErrors(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 9;
        var4 = var4[var3];
        var3 = undefined;
        var5 = var5.bind(var3)(var4);
        var4 = var5.useStateFromStoresObject;
        var7 = _closure1_slot3;
        var3 = new Array(4);
        var3[0] = var7;
        var7 = _closure1_slot4;
        var3[1] = var7;
        var7 = _closure1_slot7;
        var3[2] = var7;
        var2 = _closure1_slot5;
        var3[3] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = {};
                var6 = undefined;
                var1['nick'] = var6;
                var1['bio'] = var6;
                var4 = _closure1_slot7;
                var3 = var4.getGuildId;
                var4 = var3.bind(var4)();
                var5 = _closure2_slot0;
                var10 = null;
                if(!(var10 != var5)) { _fun0002_ip = 48; continue _fun0002 }
 44:
                var4 = _closure2_slot0;
 48:
                var7 = _closure1_slot5;
                var5 = var7.getGuild;
                var11 = var5.bind(var7)(var4);
                var8 = var4;
                if(!(var10 != var11)) { _fun0002_ip = 468; continue _fun0002 }
 72:
                if(!(var10 != var8)) { _fun0002_ip = 468; continue _fun0002 }
 79:
                var5 = _closure1_slot3;
                var4 = var5.getId;
                var7 = var4.bind(var5)();
                var5 = _closure1_slot4;
                var4 = var5.getMember;
                var8 = var4.bind(var5)(var8, var7);
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 10;
                var4 = var7[var4];
                var7 = var5.bind(var6)(var4);
                var5 = var7.getAutomodQuarantinedProfileFlags;
                var9 = var10 == var8;
                var4 = undefined;
                if(var9) { _fun0002_ip = 149; continue _fun0002 }
 144:
                var4 = var8.flags;
 149:
                var5 = var5.bind(var7)(var4);
                var7 = var5.size;
                var4 = 0;
                if(!(var4 !== var7)) { _fun0002_ip = 466; continue _fun0002 }
 168:
                var7 = var5.has;
                var4 = _closure1_slot10;
                var4 = var4.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME;
                var4 = var7.bind(var5)(var4);
                if(!var4) { _fun0002_ip = 370; continue _fun0002 }
 194:
                var3 = _closure2_slot0;
                if(!(var10 != var3)) { _fun0002_ip = 269; continue _fun0002 }
 202:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 11;
                var4 = var9[var3];
                var4 = var8.bind(var6)(var4);
                var7 = var4.intl;
                var4 = var7.string;
                var3 = var9[var3];
                var3 = var8.bind(var6)(var3);
                var3 = var3.t;
                var3 = var3.EPZCrK;
                var4 = var4.bind(var7)(var3);
                var3 = new Array(1);
                var3[0] = var4;
                _fun0002_ip = 364; continue _fun0002;
 269:
                var7 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 11;
                var8 = var12[var4];
                var8 = var7.bind(var6)(var8);
                var9 = var8.intl;
                var8 = var9.formatToPlainString;
                var4 = var12[var4];
                var4 = var7.bind(var6)(var4);
                var4 = var4.t;
                var7 = var4.WBUh3N;
                var4 = {};
                var11 = var11.name;
                var12 = var10 != var11;
                var10 = '';
                if(!var12) { _fun0002_ip = 342; continue _fun0002 }
 339:
                var10 = var11;
 342:
                var4['guildName'] = var10;
                var7 = var8.bind(var9)(var7, var4);
                var4 = new Array(1);
                var4[0] = var7;
                var3 = var4;
 364:
                var1['nick'] = var3;
 370:
                var4 = var5.has;
                var3 = _closure1_slot10;
                var3 = var3.AUTOMOD_QUARANTINED_BIO;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0002_ip = 464; continue _fun0002 }
 393:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 11;
                var3 = var7[var2];
                var3 = var5.bind(var6)(var3);
                var4 = var3.intl;
                var3 = var4.string;
                var2 = var7[var2];
                var2 = var5.bind(var6)(var2);
                var2 = var2.t;
                var2 = var2.dZh1v7;
                var3 = var3.bind(var4)(var2);
                var2 = new Array(1);
                var2[0] = var3;
                var1['bio'] = var2;
 464:
                return var1;
 466:
                return var1;
 468:
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGuildAutomodProfileQuarantineErrors'] = var4;
    var2 = function useOpenFixQuarantinedProfileModal(arg1) {
        var2 = arg1;
        var6 = var2.guildId;
        var _closure2_slot0 = var6;
        var10 = var2.scrollPosition;
        var9 = var2.analyticsLocation;
        var8 = var2.analyticsLocations;
        var7 = var2.openWithoutBackstack;
        var5 = _closure1_slot0;
        var11 = _closure1_slot1;
        var2 = 9;
        var12 = var11[var2];
        var4 = undefined;
        var15 = var5.bind(var4)(var12);
        var14 = var15.useStateFromStores;
        var12 = _closure1_slot5;
        var13 = new Array(1);
        var13[0] = var12;
        var12 = new Array(1);
        var12[0] = var6;
        var6 = function() {
            var3 = _closure1_slot5;
            var2 = var3.getGuild;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var14.bind(var15)(var13, var6, var12);
        var _closure2_slot1 = var6;
        var2 = var11[var2];
        var12 = var5.bind(var4)(var2);
        var11 = var12.useStateFromStores;
        var2 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var2;
        var4 = new Array(1);
        var4[0] = var6;
        var2 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot1;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0003_ip = 49; continue _fun0003 }
 16:
                var5 = _closure1_slot6;
                var4 = var5.can;
                var3 = _closure1_slot8;
                var3 = var3.CHANGE_NICKNAME;
                var2 = _closure2_slot1;
                var1 = var4.bind(var5)(var3, var2);
 49:
                return var1;
            }
        };
        var2 = var11.bind(var12)(var5, var2, var4);
        var _closure2_slot2 = var2;
        var5 = _closure1_slot2;
        var4 = var5.useCallback;
        var3 = new Array(6);
        var3[0] = var2;
        var3[1] = var10;
        var3[2] = var9;
        var3[3] = var8;
        var3[4] = var7;
        var3[5] = var6;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = null;
                if(!(var1 != var2)) { _fun0004_ip = 143; continue _fun0004 }
 16:
                var2 = _closure1_slot9;
                var5 = var2.PROFILE_CUSTOMIZATION;
                var2 = _closure1_slot11;
                var2 = var2.GUILD;
                var4 = _closure2_slot2;
                if(var4) { _fun0004_ip = 58; continue _fun0004 }
 46:
                var4 = _closure1_slot11;
                var4 = var4.USER_PROFILE;
                _fun0004_ip = 98; continue _fun0004;
 58:
                var8 = _closure1_slot0;
                var7 = _closure1_slot1;
                var6 = 12;
                var7 = var7[var6];
                var6 = undefined;
                var7 = var8.bind(var6)(var7);
                var6 = var7.initGuildIdentitySettings;
                var3 = _closure2_slot1;
                var3 = var6.bind(var7)(var3);
                var4 = var2;
 98:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 13;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.openUserSettings;
                var1 = {};
                var1['screen'] = var5;
                var1['subsection'] = var4;
                var1 = var2.bind(var3)(var1);
 143:
                var1 = undefined;
                return var1;
            }
        };
        var3 = var4.bind(var5)(var1, var3);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['useOpenFixQuarantinedProfileModal'] = var2;
    return var1;
})();
// app/modules/guild_tag/GuildTagCoachmarkUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function useShouldShowAvailableCoachmark(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 6;
            var2 = var9[var2];
            var6 = undefined;
            var8 = var4.bind(var6)(var2);
            var5 = var8.useIsContentDismissed;
            var2 = 7;
            var2 = var9[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.DismissibleGuildContent;
            var4 = var2.ADOPT_CLAN_IDENTITY_NOTICE;
            var9 = null;
            var2 = var7;
            if(!(var9 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot8;
case 2:
            var2 = var5.bind(var8)(var4, var2);
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 8;
            var4 = var8[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.useStateFromStores;
            var8 = _closure1_slot5;
            var4 = new Array(3);
            var4[0] = var8;
            var8 = _closure1_slot6;
            var4[1] = var8;
            var3 = _closure1_slot4;
            var4[2] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 !== var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot5;
                    var5 = var6.getGuild;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var6)(var2);
                    var6 = undefined;
                    if(!(var6 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var7 = var7.bind(var6)(var2);
                    var2 = var7.guildSupportsTags;
                    var2 = var2.bind(var7)(var5);
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var2 = var5.profile;
                    if(!(var1 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 9:
                    var2 = var5.profile;
                    var2 = var2.tag;
                    if(!(var1 !== var2)) { _fun0002_ip = 6; continue _fun0002 }
case 10:
                    var7 = _closure1_slot6;
                    var2 = var7.getCurrentUser;
                    var2 = var2.bind(var7)();
                    if(!(var6 !== var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var7 = var2.primaryGuild;
                    var9 = var1 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var8 = var7.identityGuildId;
case 13:
                    var7 = var5.id;
                    if(!(var8 === var7)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var7 = var2.primaryGuild;
                    var8 = var1 == var7;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var6 = var7.tag;
case 17:
                    var5 = var5.profile;
                    var5 = var5.tag;
                    if(!(var6 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 15:
                    var5 = _closure1_slot4;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var2 = var2.isPending;
                    var1 = !var2;
case 19:
                    return var1;
case 11:
                    var1 = false;
                    return var1;
case 6:
                    var1 = false;
                    return var1;
case 4:
                    var1 = false;
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var4, var1, var3);
            if(!var1) { _fun0001_ip = 21; continue _fun0001 }
case 16:
            var1 = !var2;
case 21:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function useShouldShowChangedCoachmark(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var4 = undefined;
            var8 = var5.bind(var4)(var2);
            var6 = var8.useIsContentDismissed;
            var2 = 7;
            var2 = var7[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.DismissibleGuildContent;
            var5 = var2.ADOPT_CLAN_IDENTITY_NOTICE;
            var7 = null;
            var2 = var3;
            if(!(var7 == var2)) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var2 = _closure1_slot8;
case 2:
            var2 = var6.bind(var8)(var5, var2);
            var _closure2_slot1 = var2;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 8;
            var6 = var11[var5];
            var13 = var10.bind(var4)(var6);
            var12 = var13.useStateFromStores;
            var6 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 !== var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuildLastSeenInfo;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 22:
                    return var1;
                }
            };
            var6 = var12.bind(var13)(var8, var6);
            var _closure2_slot2 = var6;
            var8 = var11[var5];
            var14 = var10.bind(var4)(var8);
            var13 = var14.useStateFromStores;
            var8 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var8;
            var8 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot6;
                    var1 = var2.getCurrentUser;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var1 = var2.primaryGuild;
case 24:
                    return var1;
                }
            };
            var8 = var13.bind(var14)(var12, var8);
            var5 = var11[var5];
            var12 = var10.bind(var4)(var5);
            var11 = var12.useStateFromStores;
            var5 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var3 = null;
                    var5 = var3 == var2;
                    var1 = undefined;
                    if(var5) { _fun0006_ip = 26; continue _fun0006 }
case 27:
                    var2 = var2.profile;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0006_ip = 26; continue _fun0006 }
case 28:
                    var1 = var2.tag;
case 26:
                    return var1;
                }
            };
            var5 = var11.bind(var12)(var10, var5);
            var _closure2_slot3 = var5;
            var11 = _closure1_slot3;
            var10 = var11.useEffect;
            var9 = new Array(4);
            var9[0] = var3;
            var9[1] = var5;
            var9[2] = var2;
            var9[3] = var6;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = _closure2_slot1;
                    if(!var1) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                    var3 = _closure2_slot2;
                    var2 = null;
                    var1 = var2 === var3;
case 29:
                    if(!var1) { _fun0007_ip = 24; continue _fun0007 }
case 31:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var1 = var2 != var3;
case 24:
                    if(!var1) { _fun0007_ip = 7; continue _fun0007 }
case 32:
                    var3 = _closure2_slot3;
                    var2 = null;
                    var1 = var2 != var3;
case 7:
                    if(!var1) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'GUILD_TAG_CHANGED_COACHMARK_SEEN';
                    var1['type'] = var4;
                    var4 = _closure2_slot0;
                    var1['guildId'] = var4;
                    var4 = {};
                    var5 = _closure2_slot3;
                    var4['tag'] = var5;
                    var1['lastSeenInfo'] = var4;
                    var1 = var2.bind(var3)(var1);
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var1, var9);
            if(!(var7 != var5)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var9 = var7 == var8;
            var1 = undefined;
            if(var9) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var1 = var8.identityGuildId;
case 37:
            if(!(var1 === var3)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var9 = var7 == var8;
            var1 = undefined;
            if(var9) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var1 = var8.tag;
case 41:
            if(!(var1 !== var5)) { _fun0003_ip = 43; continue _fun0003 }
case 39:
            var9 = var7 == var8;
            var1 = undefined;
            if(var9) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var1 = var8.identityGuildId;
case 44:
            var1 = var1 === var3;
            if(!var1) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var9 = var7 == var8;
            var3 = undefined;
            if(var9) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var3 = var8.tag;
case 48:
            var1 = var7 === var3;
case 46:
            var3 = var7 === var6;
            if(var3) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var7 = var7 == var6;
            var4 = undefined;
            if(var7) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var4 = var6.tag;
case 52:
            var3 = var4 === var5;
case 50:
            if(!var1) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var1 = !var3;
case 54:
            if(!var1) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var1 = var2;
case 56:
            return var1;
case 43:
            var1 = false;
            return var1;
case 35:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function useGuildTagCoachmarkType(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot9;
            var2 = undefined;
            var3 = var3.bind(var2)(var4);
            var1 = _closure1_slot10;
            var2 = var1.bind(var2)(var4);
            var1 = 'changed';
            if(var2) { _fun0008_ip = 58; continue _fun0008 }
case 24:
            var2 = null;
            if(!var3) { _fun0008_ip = 59; continue _fun0008 }
case 60:
            var2 = 'available';
case 59:
            var1 = var2;
case 58:
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var11 = var9[var1];
    var7 = metroImportAll;
    var1 = undefined;
    var7 = var7.bind(var1)(var11);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot8 = var7;
    var7 = 11;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_tag/GuildTagCoachmarkUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['useShouldShowAvailableCoachmark'] = var6;
    var3['useShouldShowChangedCoachmark'] = var5;
    var3['useGuildTagCoachmarkType'] = var4;
    var2 = function useCanSeeGuildTagCoachmark(arg1) {
        var3 = _closure1_slot11;
        var2 = undefined;
        var1 = arg1;
        var2 = var3.bind(var2)(var1);
        var1 = null;
        var1 = var1 !== var2;
        return var1;
    };
    var3['useCanSeeGuildTagCoachmark'] = var2;
    return var1;
})();
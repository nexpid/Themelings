// app/modules/guild_tag/GuildTagCoachmarkUtils.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot6 = var7;
    var4 = var4.NULL_STRING_GUILD_ID;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_tag/GuildTagCoachmarkUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useGuildTagAvailableDismissibleContent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = arguments[1];
            var _closure2_slot0 = var4;
            var8 = undefined;
            if(!(var1 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var1 = var1.shouldShow;
            var7 = var8 === var1;
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var1;
case 4:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var6 = 5;
            var6 = var1[var6];
            var11 = var3.bind(var8)(var6);
            var10 = var11.useIsContentDismissed;
            var9 = 6;
            var1 = var1[var9];
            var1 = var3.bind(var8)(var1);
            var1 = var1.DismissibleGuildContent;
            var3 = var1.ADOPT_CLAN_IDENTITY_NOTICE;
            var6 = null;
            var1 = var4;
            if(!(var6 == var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = _closure1_slot6;
case 6:
            var1 = var10.bind(var11)(var3, var1);
            var3 = _closure1_slot0;
            var11 = _closure1_slot1;
            var10 = 7;
            var10 = var11[var10];
            var14 = var3.bind(var8)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot3;
            var12 = new Array(3);
            var12[0] = var10;
            var10 = _closure1_slot4;
            var12[1] = var10;
            var10 = _closure1_slot2;
            var12[2] = var10;
            var10 = new Array(1);
            var10[0] = var4;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = _closure1_slot3;
                    var5 = var6.getGuild;
                    var2 = _closure2_slot0;
                    var5 = var5.bind(var6)(var2);
                    var6 = undefined;
                    if(!(var6 !== var5)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 8;
                    var2 = var8[var2];
                    var7 = var7.bind(var6)(var2);
                    var2 = var7.guildSupportsTags;
                    var2 = var2.bind(var7)(var5);
                    if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 12:
                    var2 = var5.profile;
                    if(!(var1 != var2)) { _fun0002_ip = 10; continue _fun0002 }
case 13:
                    var2 = var5.profile;
                    var2 = var2.tag;
                    if(!(var1 !== var2)) { _fun0002_ip = 10; continue _fun0002 }
case 14:
                    var7 = _closure1_slot4;
                    var2 = var7.getCurrentUser;
                    var2 = var2.bind(var7)();
                    if(!(var6 !== var2)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var7 = var2.primaryGuild;
                    var9 = var1 == var7;
                    var8 = undefined;
                    if(var9) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var8 = var7.identityGuildId;
case 17:
                    var7 = var5.id;
                    if(!(var8 === var7)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var7 = var2.primaryGuild;
                    var8 = var1 == var7;
                    var6 = undefined;
                    if(var8) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var6 = var7.tag;
case 21:
                    var5 = var5.profile;
                    var5 = var5.tag;
                    if(!(var6 !== var5)) { _fun0002_ip = 15; continue _fun0002 }
case 19:
                    var5 = _closure1_slot2;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var3, var2);
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var2 = var2.isPending;
                    var1 = !var2;
case 23:
                    return var1;
case 15:
                    var1 = false;
                    return var1;
case 10:
                    var1 = false;
                    return var1;
case 8:
                    var1 = false;
                    return var1;
                }
            };
            var10 = var13.bind(var14)(var12, var2, var10);
            var2 = 9;
            var2 = var11[var2];
            var3 = var3.bind(var8)(var2);
            var2 = var3.useSelectedSingleUseGuildDismissibleContent;
            if(!var10) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            if(!var7) { _fun0001_ip = 25; continue _fun0001 }
case 27:
            if(var1) { _fun0001_ip = 25; continue _fun0001 }
case 28:
            var7 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var9];
            var1 = var7.bind(var8)(var1);
            var1 = var1.DismissibleContent;
            var7 = var1.GUILD_TAG_AVAILABLE_COACHMARK_V2;
            var1 = new Array(1);
            var1[0] = var7;
            _fun0001_ip = 29; continue _fun0001;
case 25:
            var1 = new Array(0);
case 29:
            if(!(var6 == var4)) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var4 = _closure1_slot7;
case 30:
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['useGuildTagAvailableDismissibleContent'] = var4;
    var2 = function useGuildTagUpdatedDismissibleContent(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var3 = arguments[1];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0003_ip = 9; continue _fun0003 }
case 32:
            var3 = {};
case 9:
            var _closure2_slot0 = var6;
            var3 = var3.shouldShow;
            var5 = var6 === var3;
            if(var5) { _fun0003_ip = 4; continue _fun0003 }
case 5:
            var5 = var3;
case 4:
            var7 = null;
            var3 = var7 == var1;
            var8 = undefined;
            if(var3) { _fun0003_ip = 33; continue _fun0003 }
case 11:
            var8 = var1.primaryGuild;
case 33:
            var3 = var7 == var8;
            var1 = undefined;
            if(var3) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            var1 = var8.identityGuildId;
case 34:
            var3 = var7 != var1;
            var10 = null;
            if(!var3) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var10 = var1;
case 36:
            _closure2_slot0 = var10;
            var9 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 7;
            var4 = var11[var3];
            var14 = var9.bind(var6)(var4);
            var13 = var14.useStateFromStores;
            var4 = _closure1_slot5;
            var12 = new Array(1);
            var12[0] = var4;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 !== var3)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                    var4 = _closure1_slot5;
                    var3 = var4.getGuildLastSeenInfo;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 38:
                    return var1;
                }
            };
            var4 = var13.bind(var14)(var12, var4);
            var3 = var11[var3];
            var11 = var9.bind(var6)(var3);
            var9 = var11.useStateFromStores;
            var12 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure1_slot3;
                    var2 = var3.getGuild;
                    var1 = _closure2_slot0;
                    var2 = var2.bind(var3)(var1);
                    var3 = null;
                    var5 = var3 == var2;
                    var1 = undefined;
                    if(var5) { _fun0005_ip = 40; continue _fun0005 }
case 4:
                    var2 = var2.profile;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var1 = var2.tag;
case 40:
                    return var1;
                }
            };
            var3 = var9.bind(var11)(var3, var2);
            var9 = var7 != var3;
            if(!var9) { _fun0003_ip = 42; continue _fun0003 }
case 43:
            var11 = var7 == var8;
            var2 = undefined;
            if(var11) { _fun0003_ip = 44; continue _fun0003 }
case 45:
            var2 = var8.identityGuildId;
case 44:
            var9 = var2 === var10;
case 42:
            if(!var9) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var11 = var7 == var8;
            var2 = undefined;
            if(var11) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var2 = var8.tag;
case 48:
            var9 = var7 === var2;
case 46:
            var8 = var7 != var10;
            if(!var8) { _fun0003_ip = 8; continue _fun0003 }
case 50:
            var11 = var7 == var4;
            var2 = undefined;
            if(var11) { _fun0003_ip = 10; continue _fun0003 }
case 51:
            var2 = var4.tag;
case 10:
            var8 = var2 === var3;
case 8:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 9;
            var2 = var4[var2];
            var4 = var3.bind(var6)(var2);
            var3 = var4.useSelectedTimeRecurringDismissibleContent;
            var2 = null;
            if(!(var7 !== var10)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var2 = null;
            if(!var9) { _fun0003_ip = 52; continue _fun0003 }
case 54:
            var2 = null;
            if(var8) { _fun0003_ip = 52; continue _fun0003 }
case 55:
            var2 = null;
            if(!var5) { _fun0003_ip = 52; continue _fun0003 }
case 56:
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 6;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.DismissibleContent;
            var2 = var1.GUILD_TAG_UPDATED_COACHMARK;
case 52:
            var1 = {};
            var5 = 86400000;
            var1['cooldownDurationMs'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useGuildTagUpdatedDismissibleContent'] = var2;
    return var1;
})();
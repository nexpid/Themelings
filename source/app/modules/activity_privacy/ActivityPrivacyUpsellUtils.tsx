// app/modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var7 = function getPermissiveness(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var5 = 4;
            var3 = var3[var5];
            var4 = undefined;
            var3 = var6.bind(var4)(var3);
            var3 = var3.GuildActivityStatusRestrictionDefaultV2;
            var3 = var3.ACTIVITY_STATUS_OFF;
            if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.GuildActivityStatusRestrictionDefaultV2;
            var3 = var3.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
            if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var5];
            var1 = var3.bind(var4)(var1);
            var1 = var1.GuildActivityStatusRestrictionDefaultV2;
            var1 = var1.ACTIVITY_STATUS_ON;
            if(!(var1 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var1 = -1;
            return var1;
case 6:
            var1 = 0;
            return var1;
case 4:
            var1 = 1;
            return var1;
case 2:
            var1 = 2;
            return var1;
        }
    };
    var _closure1_slot8 = var7;
    var6 = function profileVisibilityToActivityRestriction(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot7;
            var3 = var4.get;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 == var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.GuildActivityStatusRestrictionDefaultV2;
            var1 = var2.ACTIVITY_STATUS_OFF;
case 8:
            return var1;
        }
    };
    var _closure1_slot9 = var6;
    var5 = function computeAffectedGuilds(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var13 = arg1;
            var8 = arg2;
            if(!(var13 !== var8)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = _closure1_slot8;
            var11 = undefined;
            var3 = var1.bind(var11)(var13);
            var1 = var1.bind(var11)(var8);
            var6 = 0;
            if(!(!(var3 < var6))) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            if(!(!(var1 < var6))) { _fun0003_ip = 12; continue _fun0003 }
case 14:
            if(!(!(var1 < var3))) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var1 = _closure1_slot6;
            var3 = var1.EXPANDING;
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var1 = _closure1_slot6;
            var3 = var1.RESTRICTING;
case 17:
            var _closure2_slot0 = var3;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var5 = 5;
            var5 = var1[var5];
            var9 = var4.bind(var11)(var5);
            var5 = var9.getSanitizedActivityRestrictedGuilds;
            var5 = var5.bind(var9)();
            var _closure2_slot1 = var5;
            var9 = _closure1_slot5;
            var5 = var9.getFlattenedGuildIds;
            var5 = var5.bind(var9)();
            var12 = 4;
            var1 = var1[var12];
            var1 = var4.bind(var11)(var1);
            var1 = var1.GuildActivityStatusRestrictionDefaultV2;
            var1 = var1.ACTIVITY_STATUS_OFF;
            if(!(var13 === var1)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var12];
            var1 = var4.bind(var11)(var1);
            var1 = var1.GuildActivityStatusRestrictionDefaultV2;
            var4 = var1.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
            var1 = 'large_only';
            if(!(var8 !== var4)) { _fun0003_ip = 20; continue _fun0003 }
case 18:
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var12];
            var4 = var9.bind(var11)(var4);
            var4 = var4.GuildActivityStatusRestrictionDefaultV2;
            var4 = var4.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
            if(!(var13 === var4)) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var12];
            var4 = var9.bind(var11)(var4);
            var4 = var4.GuildActivityStatusRestrictionDefaultV2;
            var4 = var4.ACTIVITY_STATUS_OFF;
            var1 = 'large_only';
            if(!(var8 !== var4)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var12];
            var4 = var9.bind(var11)(var4);
            var4 = var4.GuildActivityStatusRestrictionDefaultV2;
            var4 = var4.ACTIVITY_STATUS_ON;
            if(!(var13 === var4)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var12];
            var4 = var9.bind(var11)(var4);
            var4 = var4.GuildActivityStatusRestrictionDefaultV2;
            var4 = var4.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
            if(!(var8 !== var4)) { _fun0003_ip = 25; continue _fun0003 }
case 23:
            var9 = _closure1_slot0;
            var4 = _closure1_slot1;
            var4 = var4[var12];
            var4 = var9.bind(var11)(var4);
            var4 = var4.GuildActivityStatusRestrictionDefaultV2;
            var10 = var4.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
            var9 = 'all';
            var4 = var9;
            if(!(var13 === var10)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var10 = _closure1_slot0;
            var7 = _closure1_slot1;
            var7 = var7[var12];
            var7 = var10.bind(var11)(var7);
            var7 = var7.GuildActivityStatusRestrictionDefaultV2;
            var7 = var7.ACTIVITY_STATUS_ON;
            var4 = var9;
            if(!(var8 === var7)) { _fun0003_ip = 26; continue _fun0003 }
case 25:
            var4 = 'small_only';
case 26:
            var1 = var4;
case 20:
            var _closure2_slot2 = var1;
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var6 = arg1;
                    var3 = _closure1_slot4;
                    var1 = var3.getGuild;
                    var3 = var1.bind(var3)(var6);
                    var1 = null;
                    if(!(var1 != var3)) { _fun0004_ip = 28; continue _fun0004 }
case 29:
                    var5 = _closure2_slot1;
                    var4 = var5.has;
                    var4 = var4.bind(var5)(var6);
                    var7 = _closure2_slot0;
                    var5 = _closure1_slot6;
                    var5 = var5.RESTRICTING;
                    if(!(var7 === var5)) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    if(var4) { _fun0004_ip = 32; continue _fun0004 }
case 30:
                    var7 = _closure2_slot0;
                    var5 = _closure1_slot6;
                    var5 = var5.EXPANDING;
                    if(!(var7 === var5)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    if(var4) { _fun0004_ip = 33; continue _fun0004 }
case 35:
                    var4 = false;
                    return var4;
case 33:
                    var5 = _closure2_slot2;
                    var4 = 'all';
                    if(!(var4 !== var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
                    var5 = _closure1_slot3;
                    var4 = var5.getMemberCount;
                    var5 = var4.bind(var5)(var6);
                    if(!(var1 != var5)) { _fun0004_ip = 19; continue _fun0004 }
case 38:
                    var4 = _closure2_slot2;
                    var1 = 'large_only';
                    if(!(var1 !== var4)) { _fun0004_ip = 39; continue _fun0004 }
case 40:
                    var1 = 200;
                    var1 = var5 <= var1;
                    _fun0004_ip = 41; continue _fun0004;
case 39:
                    var4 = 200;
                    var1 = var5 > var4;
case 41:
                    _fun0004_ip = 42; continue _fun0004;
case 19:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot6;
                    var2 = var2.RESTRICTING;
                    var1 = var3 === var2;
case 42:
                    return var1;
case 36:
                    var1 = true;
                    return var1;
case 32:
                    var1 = false;
                    return var1;
case 28:
                    var1 = false;
                    return var1;
                }
            };
            var4 = var4.bind(var5)(var1);
            var5 = var4.length;
            var1 = null;
            if(!(var6 !== var5)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var5 = var4.sort;
            var2 = function(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var4 = _closure1_slot4;
                    var3 = var4.getGuild;
                    var2 = arg1;
                    var4 = var3.bind(var4)(var2);
                    var3 = _closure1_slot4;
                    var2 = var3.getGuild;
                    var1 = arg2;
                    var5 = var2.bind(var3)(var1);
                    var6 = null;
                    var2 = var6 == var4;
                    var1 = undefined;
                    if(var2) { _fun0005_ip = 45; continue _fun0005 }
case 14:
                    var1 = var4.joinedAt;
case 45:
                    if(!(var6 == var1)) { _fun0005_ip = 46; continue _fun0005 }
case 8:
                    var2 = var6 == var5;
                    var1 = undefined;
                    if(var2) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var1 = var5.joinedAt;
case 47:
                    var2 = var6 == var1;
                    var1 = 0;
                    if(var2) { _fun0005_ip = 49; continue _fun0005 }
case 46:
                    var7 = var6 == var4;
                    var2 = undefined;
                    if(var7) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                    var2 = var4.joinedAt;
case 50:
                    var7 = var6 == var2;
                    var2 = 1;
                    if(var7) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var7 = var6 == var5;
                    var3 = undefined;
                    if(var7) { _fun0005_ip = 2; continue _fun0005 }
case 54:
                    var3 = var5.joinedAt;
case 2:
                    var6 = var6 == var3;
                    var3 = -1;
                    if(var6) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                    var6 = global;
                    var8 = var6.Date;
                    var9 = var5.joinedAt;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var5 = new var10[var8](var9, var8);
                    var7 = var5 instanceof Object ? var5 : var7;
                    var5 = var7.getTime;
                    var5 = var5.bind(var7)();
                    var7 = var6.Date;
                    var9 = var4.joinedAt;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var10 = var6;
                    var4 = new var10[var7](var9, var8);
                    var6 = var4 instanceof Object ? var4 : var6;
                    var4 = var6.getTime;
                    var4 = var4.bind(var6)();
                    var3 = var5 - var4;
case 55:
                    var2 = var3;
case 52:
                    var1 = var2;
case 49:
                    return var1;
                }
            };
            var2 = var5.bind(var4)(var2);
            var2 = {};
            var2['affectedGuildIds'] = var4;
            var2['direction'] = var3;
            var1 = var2;
case 43:
            return var1;
case 12:
            var1 = null;
            return var1;
case 10:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot10 = var5;
    var4 = function getProfileVisibilitySettingName(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 4;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.ProfileVisibility;
            var2 = var2.FRIENDS_AND_ALL_GUILDS;
            if(!(var2 !== var3)) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ProfileVisibility;
            var2 = var2.FRIENDS_AND_SMALL_GUILDS;
            if(!(var2 !== var3)) { _fun0006_ip = 59; continue _fun0006 }
case 60:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ProfileVisibility;
            var2 = var2.FRIENDS_ONLY;
            if(!(var2 !== var3)) { _fun0006_ip = 61; continue _fun0006 }
case 62:
            var2 = '';
            return var2;
case 61:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.u0nlJv;
            var3 = var3.bind(var4)(var2);
            var2 = var3.toLowerCase;
            var2 = var2.bind(var3)();
            return var2;
case 59:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.YOIKBt;
            var3 = var3.bind(var4)(var2);
            var2 = var3.toLowerCase;
            var2 = var2.bind(var3)();
            return var2;
case 57:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 6;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.Boxc8R;
            var2 = var2.bind(var3)(var1);
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var9 = global;
    var14 = var9.Object;
    var13 = var14.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var8);
    var1 = 0;
    var8 = var11[var1];
    var1 = undefined;
    var8 = var12.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var11[var8];
    var8 = var12.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = {};
    var12 = 'restricting';
    var8['RESTRICTING'] = var12;
    var12 = 'expanding';
    var8['EXPANDING'] = var12;
    var _closure1_slot6 = var8;
    var13 = var9.Map;
    var14 = 4;
    var9 = var11[var14];
    var9 = var10.bind(var1)(var9);
    var9 = var9.ProfileVisibility;
    var9 = var9.FRIENDS_AND_ALL_GUILDS;
    var12 = new Array(2);
    var12[0] = var9;
    var9 = var11[var14];
    var9 = var10.bind(var1)(var9);
    var9 = var9.GuildActivityStatusRestrictionDefaultV2;
    var9 = var9.ACTIVITY_STATUS_OFF;
    var12[1] = var9;
    var9 = new Array(3);
    var9[0] = var12;
    var12 = var11[var14];
    var12 = var10.bind(var1)(var12);
    var12 = var12.ProfileVisibility;
    var15 = var12.FRIENDS_AND_SMALL_GUILDS;
    var12 = new Array(2);
    var12[0] = var15;
    var15 = var11[var14];
    var15 = var10.bind(var1)(var15);
    var15 = var15.GuildActivityStatusRestrictionDefaultV2;
    var15 = var15.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
    var12[1] = var15;
    var9[1] = var12;
    var12 = var11[var14];
    var12 = var10.bind(var1)(var12);
    var12 = var12.ProfileVisibility;
    var15 = var12.FRIENDS_ONLY;
    var12 = new Array(2);
    var12[0] = var15;
    var14 = var11[var14];
    var14 = var10.bind(var1)(var14);
    var14 = var14.GuildActivityStatusRestrictionDefaultV2;
    var14 = var14.ACTIVITY_STATUS_ON;
    var12[1] = var14;
    var9[2] = var12;
    var12 = var13.prototype;
    var12 = Object.create(var12, {constructor: {value: var13}});
    var19 = var12;
    var18 = var9;
    var9 = new var19[var13](var18, var17);
    var9 = var9 instanceof Object ? var9 : var12;
    var _closure1_slot7 = var9;
    var9 = 8;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/activity_privacy/ActivityPrivacyUpsellUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['ChangeDirection'] = var8;
    var3['getPermissiveness'] = var7;
    var3['profileVisibilityToActivityRestriction'] = var6;
    var3['computeAffectedGuilds'] = var5;
    var5 = function getActivityRestrictionSettingName(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 4;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.GuildActivityStatusRestrictionDefaultV2;
            var2 = var2.ACTIVITY_STATUS_OFF;
            if(!(var2 !== var3)) { _fun0007_ip = 57; continue _fun0007 }
case 58:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.GuildActivityStatusRestrictionDefaultV2;
            var2 = var2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS;
            if(!(var2 !== var3)) { _fun0007_ip = 59; continue _fun0007 }
case 60:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.GuildActivityStatusRestrictionDefaultV2;
            var2 = var2.ACTIVITY_STATUS_ON;
            if(!(var2 !== var3)) { _fun0007_ip = 61; continue _fun0007 }
case 62:
            var2 = '';
            return var2;
case 61:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.fQc5la;
            var3 = var3.bind(var4)(var2);
            var2 = var3.toLowerCase;
            var2 = var2.bind(var3)();
            return var2;
case 59:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 6;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["1hvuGH"];
            var3 = var3.bind(var4)(var2);
            var2 = var3.toLowerCase;
            var2 = var2.bind(var3)();
            return var2;
case 57:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 6;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.FzgQna;
            var2 = var2.bind(var3)(var1);
            var1 = var2.toLowerCase;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var3['getActivityRestrictionSettingName'] = var5;
    var3['getProfileVisibilitySettingName'] = var4;
    var4 = function getProfileToActivityUpsellStrings(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var8 = 6;
            var3 = var3[var8];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var9 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var9 = var3.t;
            if(var2) { _fun0008_ip = 47; continue _fun0008 }
case 31:
            var3 = var9["9jYwjo"];
            _fun0008_ip = 63; continue _fun0008;
case 47:
            var3 = var9.eYDA7D;
case 63:
            var3 = var4.bind(var6)(var3);
            var1['title'] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var9 = var3.intl;
            var6 = var9.format;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            if(var2) { _fun0008_ip = 41; continue _fun0008 }
case 64:
            var4 = var3.ajzh8S;
            _fun0008_ip = 65; continue _fun0008;
case 41:
            var4 = var3.c5/jDc;
case 65:
            var3 = {};
            var10 = arg2;
            var3['settingName'] = var10;
            var3 = var6.bind(var9)(var4, var3);
            var1['subtitle'] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var9 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var9 = var3.t;
            if(var2) { _fun0008_ip = 66; continue _fun0008 }
case 67:
            var3 = var9.a9PIyD;
            _fun0008_ip = 57; continue _fun0008;
case 66:
            var3 = var9["6uPZV1"];
case 57:
            var3 = var4.bind(var6)(var3);
            var1['confirmText'] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.t;
            if(var2) { _fun0008_ip = 68; continue _fun0008 }
case 69:
            var2 = var5.Q7E+QF;
            _fun0008_ip = 70; continue _fun0008;
case 68:
            var2 = var5.AdpgML;
case 70:
            var2 = var3.bind(var4)(var2);
            var1['toastContent'] = var2;
            return var1;
        }
    };
    var3['getProfileToActivityUpsellStrings'] = var4;
    var4 = function getUpsellStrings(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var8 = 6;
            var3 = var3[var8];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var9 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var9 = var3.t;
            if(var2) { _fun0009_ip = 47; continue _fun0009 }
case 31:
            var3 = var9.S0Y0bh;
            _fun0009_ip = 63; continue _fun0009;
case 47:
            var3 = var9.jRx1Aa;
case 63:
            var3 = var4.bind(var6)(var3);
            var1['title'] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var9 = var3.intl;
            var6 = var9.format;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            if(var2) { _fun0009_ip = 41; continue _fun0009 }
case 64:
            var4 = var3.GcoYX8;
            _fun0009_ip = 65; continue _fun0009;
case 41:
            var4 = var3.Fs96LO;
case 65:
            var3 = {};
            var10 = arg2;
            var3['settingName'] = var10;
            var3 = var6.bind(var9)(var4, var3);
            var1['subtitle'] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var6 = var3.intl;
            var4 = var6.string;
            var9 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var9.bind(var7)(var3);
            var9 = var3.t;
            if(var2) { _fun0009_ip = 66; continue _fun0009 }
case 67:
            var3 = var9.WRrDtI;
            _fun0009_ip = 57; continue _fun0009;
case 66:
            var3 = var9["4DM5HJ"];
case 57:
            var3 = var4.bind(var6)(var3);
            var1['confirmText'] = var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var8];
            var3 = var4.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.t;
            if(var2) { _fun0009_ip = 68; continue _fun0009 }
case 69:
            var2 = var5.Q7E+QF;
            _fun0009_ip = 70; continue _fun0009;
case 68:
            var2 = var5.AdpgML;
case 70:
            var2 = var3.bind(var4)(var2);
            var1['toastContent'] = var2;
            return var1;
        }
    };
    var3['getUpsellStrings'] = var4;
    var4 = function computeProfileToActivityUpsell(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var6 = arg2;
            var1 = _closure1_slot9;
            var4 = undefined;
            var3 = var1.bind(var4)(var6);
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 7;
            var1 = var7[var1];
            var1 = var5.bind(var4)(var1);
            var5 = var1.DefaultGuildsActivityRestrictedV2;
            var1 = var5.getSetting;
            var5 = var1.bind(var5)();
            if(!(var5 !== var3)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
            var1 = _closure1_slot8;
            var8 = _closure1_slot9;
            var7 = arg1;
            var7 = var8.bind(var4)(var7);
            var8 = var1.bind(var4)(var7);
            var7 = var1.bind(var4)(var3);
            var7 = var8 > var7;
            var8 = var1.bind(var4)(var5);
            var1 = var1.bind(var4)(var3);
            var1 = var8 > var1;
            if(!(var7 === var1)) { _fun0010_ip = 73; continue _fun0010 }
case 37:
            var1 = _closure1_slot10;
            var5 = var1.bind(var4)(var5, var3);
            var1 = null;
            if(!(var1 != var5)) { _fun0010_ip = 74; continue _fun0010 }
case 54:
            var2 = _closure1_slot11;
            var4 = var2.bind(var4)(var6);
            var2 = {};
            var6 = var5.affectedGuildIds;
            var2['affectedGuildIds'] = var6;
            var5 = var5.direction;
            var2['direction'] = var5;
            var2['settingName'] = var4;
            var2['mappedActivityValue'] = var3;
            return var2;
case 74:
            return var1;
case 73:
            var1 = null;
            return var1;
case 71:
            var1 = null;
            return var1;
        }
    };
    var3['computeProfileToActivityUpsell'] = var4;
    var4 = function sortGuildIdsByFrecency(arg1) {
        var3 = new Array(0);
        var5 = arg1;
        var4 = 0;
        var6 = var3;
        var1 = arraySpread(var6, var5, var4);
        var2 = var3.sort;
        var1 = function(arg1, arg2) {
            var4 = _closure1_slot2;
            var2 = var4.getScoreWithoutFetchingLatest;
            var1 = arg2;
            var2 = var2.bind(var4)(var1);
            var3 = var4.getScoreWithoutFetchingLatest;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = var2 - var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['sortGuildIdsByFrecency'] = var4;
    var2 = function applyBulkGuildRestrictionChange(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getSanitizedActivityRestrictedGuilds;
            var4 = var3.bind(var4)();
            var3 = global;
            var8 = var3.Set;
            var6 = var8.prototype;
            var7 = Object.create(var6, {constructor: {value: var8}});
            var12 = arg2;
            var13 = var7;
            var6 = new var13[var8](var12, var11);
            var7 = var6 instanceof Object ? var6 : var7;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot6;
            var8 = var6.RESTRICTING;
            var6 = arg1;
            if(!(var6 !== var8)) { _fun0011_ip = 75; continue _fun0011 }
case 35:
            var8 = new Array(0);
            var10 = 0;
            var12 = var8;
            var11 = var4;
            var6 = arraySpread(var12, var11, var10);
            var6 = var8.filter;
            var5 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var8 = var6.bind(var8)(var5);
            var6 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 7;
            var5 = var9[var5];
            var5 = var6.bind(var1)(var5);
            var6 = var5.ActivityRestrictedGuilds;
            var5 = var6.updateSetting;
            var5 = var5.bind(var6)(var8);
            _fun0011_ip = 76; continue _fun0011;
case 75:
            var5 = var3.Set;
            var3 = new Array(0);
            var12 = var3;
            var11 = var4;
            var10 = 0;
            var10 = arraySpread(var12, var11, var10);
            var12 = var3;
            var11 = var7;
            var4 = arraySpread(var12, var11, var10);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var13 = var4;
            var12 = var3;
            var3 = new var13[var5](var12, var11);
            var11 = var3 instanceof Object ? var3 : var4;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var4 = var2.ActivityRestrictedGuilds;
            var3 = var4.updateSetting;
            var2 = new Array(0);
            var12 = var2;
            var10 = 0;
            var5 = arraySpread(var12, var11, var10);
            var2 = var3.bind(var4)(var2);
case 76:
            return var1;
        }
    };
    var3['applyBulkGuildRestrictionChange'] = var2;
    return var1;
})();
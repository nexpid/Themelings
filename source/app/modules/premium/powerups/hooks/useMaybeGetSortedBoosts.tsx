// app/modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx
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
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useMaybeGetSortedBoosts.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useMaybeGetSortedBoosts(arg1, arg2) {
        var8 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var1;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var4 = 5;
        var5 = var10[var4];
        var7 = undefined;
        var13 = var9.bind(var7)(var5);
        var12 = var13.useStateFromStoresArray;
        var5 = _closure1_slot4;
        var11 = new Array(1);
        var11[0] = var5;
        var6 = new Array(1);
        var6[0] = var8;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot4;
                var2 = var3.getAppliedGuildBoostsForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = new Array(0);
case 2:
                return var1;
            }
        };
        var6 = var12.bind(var13)(var11, var5, var6);
        var _closure2_slot2 = var6;
        var5 = _closure1_slot3;
        var12 = var5.useMemo;
        var11 = new Array(2);
        var11[0] = var6;
        var11[1] = var1;
        var1 = function() {
            var7 = _closure2_slot2;
            var5 = new Array(0);
            var4 = 0;
            var8 = var5;
            var6 = 0;
            var2 = arraySpread(var8, var7, var6);
            var3 = var5.sort;
            var2 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 6;
                    var2 = var5[var1];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.extractTimestamp;
                    var2 = arg1;
                    var2 = var2.id;
                    var2 = var6.bind(var7)(var2);
                    var1 = var5[var1];
                    var4 = var4.bind(var3)(var1);
                    var3 = var4.extractTimestamp;
                    var1 = arg2;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
                    var2 = var2 < var1;
                    var1 = -1;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = 1;
case 4:
                    return var1;
                }
            };
            var3 = var3.bind(var5)(var2);
            var2 = var3.slice;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        };
        var1 = var12.bind(var5)(var1, var11);
        var _closure2_slot3 = var1;
        var11 = var10[var4];
        var15 = var9.bind(var7)(var11);
        var14 = var15.useStateFromStoresArray;
        var11 = _closure1_slot6;
        var13 = new Array(1);
        var13[0] = var11;
        var12 = new Array(2);
        var12[0] = var8;
        var12[1] = var1;
        var11 = function() {
            var1 = global;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var _closure3_slot0 = var3;
            var5 = _closure2_slot3;
            var4 = var5.forEach;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot0;
                    var2 = var1.userId;
                    var3 = var4.bind(var5)(var3, var2);
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var3 = _closure3_slot0;
                    var2 = var3.add;
                    var1 = var1.userId;
                    var1 = var2.bind(var3)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var2 = var1.Array;
            var1 = var2.from;
            var1 = var1.bind(var2)(var3);
            return var1;
        };
        var11 = var14.bind(var15)(var13, var11, var12);
        var _closure2_slot4 = var11;
        var14 = var5.useEffect;
        var13 = new Array(2);
        var13[0] = var8;
        var13[1] = var11;
        var12 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot4;
                var3 = var2.length;
                var2 = 0;
                if(!(var3 > var2)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                var3 = _closure2_slot4;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var4 = _closure1_slot5;
                    var3 = var4.requestMember;
                    var2 = _closure2_slot0;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 8:
                var1 = undefined;
                return var1;
            }
        };
        var12 = var14.bind(var5)(var12, var13);
        var13 = var5.useMemo;
        var12 = new Array(2);
        var12[0] = var8;
        var12[1] = var11;
        var11 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = _closure2_slot4;
                var4 = var5.slice;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var2);
                var2 = var1.MAX_GUILD_MEMBER_SUBSCRIPTIONS;
                var1 = 2;
                var1 = var2 / var1;
                var2 = 0;
                var4 = var4.bind(var5)(var2, var1);
                var1 = var4.length;
                if(!(!(var1 > var2))) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                var1 = {};
                _fun0005_ip = 5; continue _fun0005;
case 10:
                var2 = {};
                var3 = _closure2_slot0;
                var2[var3] = var4;
                var1 = var2;
case 5:
                return var1;
            }
        };
        var14 = var13.bind(var5)(var11, var12);
        var11 = 7;
        var11 = var10[var11];
        var13 = var9.bind(var7)(var11);
        var12 = var13.useSubscribeGuildMembers;
        var11 = 'GuildPowerupsRecentActivity';
        var11 = var12.bind(var13)(var14, var11);
        var4 = var10[var4];
        var9 = var9.bind(var7)(var4);
        var7 = var9.useStateFromStores;
        var3 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0006_ip = 8; continue _fun0006 }
case 2:
                var1 = var2.premiumSubscriberCount;
case 8:
                return var1;
            }
        };
        var7 = var7.bind(var9)(var4, var3);
        var _closure2_slot5 = var7;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var6 = var6.length;
        var3[2] = var6;
        var2 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure2_slot5;
                var2 = _closure2_slot2;
                var2 = var2.length;
                if(!(var3 !== var2)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.fetchAppliedGuildBoostsForGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
case 12:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useGetBoostUserConfig(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var2 = global;
        var5 = var2.Date;
        var4 = _closure1_slot1;
        var8 = _closure1_slot2;
        var3 = 6;
        var3 = var8[var3];
        var6 = undefined;
        var9 = var4.bind(var6)(var3);
        var4 = var9.extractTimestamp;
        var3 = var7.id;
        var12 = var4.bind(var9)(var3);
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var13 = var4;
        var3 = new var13[var5](var12, var11);
        var3 = var3 instanceof Object ? var3 : var4;
        var5 = _closure1_slot0;
        var4 = 5;
        var4 = var8[var4];
        var6 = var5.bind(var6)(var4);
        var5 = var6.useStateFromStoresObject;
        var2 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = new Array(1);
        var2[0] = var7;
        var1 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var7 = _closure1_slot6;
                var4 = var7.getMember;
                var2 = _closure2_slot0;
                var3 = var2.guildId;
                var1 = var2.userId;
                var4 = var4.bind(var7)(var3, var1);
                var1 = {};
                var6 = var7.getNick;
                var3 = var2.guildId;
                var2 = var2.userId;
                var3 = var6.bind(var7)(var3, var2);
                var2 = null;
                if(!(var2 == var3)) { _fun0008_ip = 14; continue _fun0008 }
case 15:
                var5 = _closure2_slot0;
                var6 = var5.user;
                var7 = var2 == var6;
                var5 = undefined;
                if(var7) { _fun0008_ip = 16; continue _fun0008 }
case 17:
                var5 = var6.username;
case 16:
                var3 = var5;
case 14:
                var1['username'] = var3;
                var5 = var2 == var4;
                var6 = undefined;
                if(var5) { _fun0008_ip = 18; continue _fun0008 }
case 19:
                var6 = var4.colorString;
case 18:
                var7 = var2 != var6;
                var5 = null;
                if(!var7) { _fun0008_ip = 20; continue _fun0008 }
case 21:
                var5 = var6;
case 20:
                var1['roleColor'] = var5;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0008_ip = 22; continue _fun0008 }
case 23:
                var3 = var4.colorStrings;
case 22:
                var4 = var2 != var3;
                var2 = null;
                if(!var4) { _fun0008_ip = 24; continue _fun0008 }
case 25:
                var2 = var3;
case 24:
                var1['roleColorStrings'] = var2;
                return var1;
            }
        };
        var2 = var5.bind(var6)(var4, var1, var2);
        var1 = {};
        var1['timestamp'] = var3;
        var3 = var2.username;
        var1['username'] = var3;
        var3 = var2.roleColor;
        var1['roleColor'] = var3;
        var2 = var2.roleColorStrings;
        var1['roleColorStrings'] = var2;
        return var1;
    };
    var3['useGetBoostUserConfig'] = var2;
    return var1;
})();
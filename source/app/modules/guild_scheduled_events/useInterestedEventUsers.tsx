// app/modules/guild_scheduled_events/useInterestedEventUsers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.useMemo;
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildScheduledEventUserResponses;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useInterestedEventUsers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useInterestedEventUsers(arg1, arg2) {
        var10 = arg1;
        var3 = arg2;
        var _closure2_slot0 = var10;
        var _closure2_slot1 = var3;
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var7 = 3;
        var5 = var9[var7];
        var4 = undefined;
        var14 = var8.bind(var4)(var5);
        var13 = var14.useStateFromStoresArray;
        var5 = _closure1_slot3;
        var12 = new Array(1);
        var12[0] = var5;
        var11 = new Array(1);
        var11[0] = var10;
        var6 = function() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var6 = _closure1_slot3;
            var5 = var6.getUsersForGuildEvent;
            var4 = _closure2_slot0;
            var1 = null;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var13.bind(var14)(var12, var6, var11);
        var _closure2_slot2 = var6;
        var7 = var9[var7];
        var9 = var8.bind(var4)(var7);
        var8 = var9.useStateFromStoresArray;
        var7 = new Array(1);
        var7[0] = var5;
        var5 = new Array(2);
        var5[0] = var10;
        var5[1] = var3;
        var3 = function() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var6 = _closure1_slot3;
            var5 = var6.getUsersForGuildEvent;
            var4 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var8.bind(var9)(var7, var3, var5);
        var _closure2_slot3 = var5;
        var3 = _closure1_slot2;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            var4 = _closure2_slot3;
            var6 = var4.reduce;
            var5 = function(arg1, arg2) {
                var1 = arg1;
                var3 = arg2;
                var2 = var3.user_id;
                var1[var2] = var3;
                return var1;
            };
            var3 = {};
            var3 = var6.bind(var4)(var5, var3);
            var _closure3_slot0 = var3;
            var5 = _closure2_slot2;
            var3 = var5.filter;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var1.user_id;
                    var2 = var2[var1];
                    var1 = null;
                    var1 = var1 == var2;
                    if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = var2.response;
                    var2 = _closure1_slot4;
                    var2 = var2.INTERESTED;
                    var1 = var3 === var2;
case 2:
                    return var1;
                }
            };
            var5 = var3.bind(var5)(var1);
            var3 = var4.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.response;
                var1 = _closure1_slot4;
                var1 = var1.INTERESTED;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var3.bind(var4)(var1);
            var1 = global;
            var1 = var1.Set;
            var3 = var1.prototype;
            var3 = Object.create(var3, {constructor: {value: var1}});
            var9 = var3;
            var1 = new var9[var1](var8);
            var1 = var1 instanceof Object ? var1 : var3;
            var _closure3_slot1 = var1;
            var1 = new Array(0);
            var _closure3_slot2 = var1;
            var3 = function addUserToAllInterested(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var5 = _closure3_slot1;
                    var4 = var5.has;
                    var3 = var1.user_id;
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                    var4 = _closure3_slot2;
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var1);
                    var3 = _closure3_slot1;
                    var2 = var3.add;
                    var1 = var1.user_id;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var5.forEach;
            var2 = var2.bind(var5)(var3);
            var2 = var4.forEach;
            var2 = var2.bind(var4)(var3);
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
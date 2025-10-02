// app/modules/guild_member_verification/hooks/useSortedMemberApplications.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/hooks/useSortedMemberApplications.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useSortedMemberApplications(arg1) {
        var3 = arg1;
        var1 = var3.guildId;
        var _closure2_slot0 = var1;
        var9 = var3.applicationStatus;
        var _closure2_slot1 = var9;
        var7 = var3.sortOrder;
        var _closure2_slot2 = var7;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var4 = 2;
        var5 = var5[var4];
        var4 = undefined;
        var8 = var6.bind(var4)(var5);
        var6 = var8.useStateFromStores;
        var4 = _closure1_slot3;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = new Array(2);
        var4[0] = var9;
        var4[1] = var1;
        var1 = function() {
            var4 = _closure1_slot3;
            var3 = var4.getRequests;
            var2 = _closure2_slot0;
            var1 = _closure2_slot1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var6.bind(var8)(var5, var1, var4);
        var _closure2_slot3 = var6;
        var1 = {};
        var5 = _closure1_slot2;
        var4 = var5.useMemo;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var1 = var5.bind(var1)(var4);
                var1 = var1.GuildJoinRequestSortOrders;
                var1 = var1.TIMESTAMP_DESC;
                if(!(var3 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot3;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var7 = _closure2_slot3;
                var3 = new Array(0);
                var6 = 0;
                var8 = var3;
                var2 = arraySpread(var8, var7, var6);
                var2 = var3.reverse;
                var1 = var2.bind(var3)();
case 4:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['guildJoinRequests'] = var2;
        return var1;
    };
    var3['useSortedMemberApplications'] = var2;
    return var1;
})();
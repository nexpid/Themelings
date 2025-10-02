// app/modules/guild_mod_dash_member_safety/SortUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_mod_dash_member_safety/SortUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getSortValueForMember(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var1 = var6[var1];
            var4 = undefined;
            var9 = var8.bind(var4)(var1);
            var7 = var9.getJoinedAtTimestamp;
            var1 = var2.joinedAt;
            var1 = var7.bind(var9)(var1);
            var7 = 1;
            var6 = var6[var7];
            var6 = var8.bind(var4)(var6);
            var6 = var6.OrderBy;
            var6 = var6.ORDER_BY_GUILD_JOINED_AT_ASC;
            if(!(var6 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var7];
            var6 = var8.bind(var4)(var6);
            var6 = var6.OrderBy;
            var6 = var6.ORDER_BY_GUILD_JOINED_AT_DESC;
            if(!(var6 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var7];
            var6 = var8.bind(var4)(var6);
            var6 = var6.OrderBy;
            var6 = var6.ORDER_BY_USER_ID_ASC;
            if(!(var6 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var3 = var3.OrderBy;
            var3 = var3.ORDER_BY_USER_ID_DESC;
            if(!(var3 !== var5)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = -var1;
            return var3;
case 8:
            var3 = global;
            var5 = var3.parseInt;
            var3 = var2.userId;
            var3 = var5.bind(var4)(var3);
            var3 = -var3;
            return var3;
case 6:
            var3 = global;
            var3 = var3.parseInt;
            var2 = var2.userId;
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            var2 = -var1;
            return var2;
case 2:
            return var1;
        }
    };
    var3['getSortValueForMember'] = var2;
    return var1;
})();
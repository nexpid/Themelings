// app/modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var7 = 0;
    var4 = var6[var7];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var4);
    var2 = var2.Millis;
    var2 = var2.DAY;
    var8 = 2;
    var4 = var8 * var2;
    var2 = {};
    var2['ORDER_BY_UNSPECIFIED'] = var7;
    var5 = 'ORDER_BY_UNSPECIFIED';
    var2[var7] = var5;
    var5 = 1;
    var2['ORDER_BY_GUILD_JOINED_AT_DESC'] = var5;
    var7 = 'ORDER_BY_GUILD_JOINED_AT_DESC';
    var2[var5] = var7;
    var2['ORDER_BY_GUILD_JOINED_AT_ASC'] = var8;
    var7 = 'ORDER_BY_GUILD_JOINED_AT_ASC';
    var2[var8] = var7;
    var8 = 3;
    var2['ORDER_BY_USER_ID_DESC'] = var8;
    var7 = 'ORDER_BY_USER_ID_DESC';
    var2[var8] = var7;
    var8 = 4;
    var2['ORDER_BY_USER_ID_ASC'] = var8;
    var7 = 'ORDER_BY_USER_ID_ASC';
    var2[var8] = var7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_mod_dash_member_safety/MemberSafetyElasticSearchQueryTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var3['UNUSUAL_DM_COMPARISON_DELTA'] = var4;
    var4 = function createMemberSearchCursor(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.joinedAt;
            var3 = var1.userId;
            var1 = null;
            var2 = var1 == var6;
            if(var2) { _fun0001_ip = 81; continue _fun0001 }
 23:
            var2 = {};
            var4 = global;
            var4 = var4.Date;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var7 = var6;
            var4 = new var8[var4](var7, var6);
            var5 = var4 instanceof Object ? var4 : var5;
            var4 = var5.getTime;
            var4 = var4.bind(var5)();
            var2['guild_joined_at'] = var4;
            var2['user_id'] = var3;
            var1 = var2;
 81:
            return var1;
        }
    };
    var3['createMemberSearchCursor'] = var4;
    var3['OrderBy'] = var2;
    return var1;
})();
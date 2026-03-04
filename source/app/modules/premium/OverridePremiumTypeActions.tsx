// app/modules/premium/OverridePremiumTypeActions.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/OverridePremiumTypeActions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg2;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var2 = 1;
            var3 = var1[var2];
            var1 = undefined;
            var6 = var4.bind(var1)(var3);
            var4 = var6.dispatch;
            var3 = {};
            var8 = 'SET_PREMIUM_TYPE_OVERRIDE';
            var3['type'] = var8;
            var8 = arg1;
            var3['premiumType'] = var8;
            var3 = var4.bind(var6)(var3);
            var3 = null;
            if(!(var3 == var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot3;
            var4 = var6.getCurrentUser;
            var7 = var4.bind(var6)();
case 2:
            if(!(var3 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = var8[var2];
            var9 = var3.bind(var1)(var4);
            var6 = var9.dispatch;
            var4 = {};
            var10 = 'UPDATE_CLIENT_PREMIUM_TYPE';
            var4['type'] = var10;
            var4['user'] = var7;
            var4 = var6.bind(var9)(var4);
            var2 = var8[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var6 = 'CURRENT_USER_UPDATE';
            var2['type'] = var6;
            var6 = _closure1_slot0;
            var5 = 2;
            var5 = var8[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.userRecordToServer;
            var5 = var5.bind(var6)(var7);
            var2['user'] = var5;
            var2 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['updateClientPremiumTypeOverride'] = var4;
    var2 = function(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_CREATED_AT_OVERRIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['createdAt'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateClientCreatedAtOverride'] = var2;
    return var1;
})();
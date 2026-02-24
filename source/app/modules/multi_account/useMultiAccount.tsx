// app/modules/multi_account/useMultiAccount.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MultiAccountTokenStatus;
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/multi_account/useMultiAccount.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMultiAccountUsers() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var1 = 3;
        var4 = var4[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.useStateFromStoresObject;
        var1 = _closure1_slot6;
        var4 = new Array(2);
        var4[0] = var1;
        var1 = _closure1_slot5;
        var4[1] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot6;
                var2 = var3.getUsers;
                var3 = var2.bind(var3)();
                var5 = _closure1_slot5;
                var2 = var5.getCurrentUser;
                var6 = var2.bind(var5)();
                var _closure3_slot0 = var6;
                var2 = null;
                if(!(var2 != var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = var3.some;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var1.id;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var5.bind(var3)(var1);
                if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var1 = {};
                var7 = _closure1_slot6;
                var5 = var7.getIsValidatingUsers;
                var5 = var5.bind(var7)();
                var1['isLoading'] = var5;
                var5 = {};
                var7 = var6.id;
                var5['id'] = var7;
                var7 = var6.avatar;
                var5['avatar'] = var7;
                var7 = var6.username;
                var5['username'] = var7;
                var6 = var6.discriminator;
                var5['discriminator'] = var6;
                var6 = _closure1_slot7;
                var6 = var6.VALID;
                var5['tokenStatus'] = var6;
                var5['pushSyncToken'] = var2;
                var2 = new Array(1);
                var2[0] = var5;
                var8 = 1;
                var10 = var2;
                var9 = var3;
                var5 = arraySpread(var10, var9, var8);
                var1['multiAccountUsers'] = var2;
                _fun0001_ip = 5; continue _fun0001;
case 2:
                var2 = {};
                var5 = _closure1_slot6;
                var4 = var5.getIsValidatingUsers;
                var4 = var4.bind(var5)();
                var2['isLoading'] = var4;
                var2['multiAccountUsers'] = var3;
                var1 = var2;
case 5:
                return var1;
            }
        };
        var1 = var5.bind(var6)(var4, var1);
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.wait;
            var2 = function() {
                var3 = _closure1_slot2;
                var2 = _closure1_slot3;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.validateMultiAccountTokens;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var3['useMultiAccountUsers'] = var2;
    return var1;
})();
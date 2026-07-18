// app/modules/premium/powerups/hooks/useCanPurchaseOrTransferBoost.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FractionalPremiumStates;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/hooks/useCanPurchaseOrTransferBoost.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanPurchaseOrTransferBoost() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 3;
            var3 = var8[var3];
            var7 = undefined;
            var3 = var4.bind(var7)(var3);
            var3 = var3.bind(var7)();
            var4 = var3.fractionalState;
            var6 = _closure1_slot0;
            var5 = 4;
            var3 = var8[var5];
            var11 = var6.bind(var7)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure1_slot3;
                    var1 = var2.getCurrentUser;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    var1 = var1 == var3;
                    var2 = undefined;
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var3.isPremiumGroupMember;
                    var2 = var1.bind(var3)();
case 2:
                    var1 = true;
                    var1 = var1 === var2;
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var9, var3);
            var5 = var8[var5];
            var7 = var6.bind(var7)(var5);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot4;
            var5 = new Array(1);
            var5[0] = var8;
            var1 = function() {
                var1 = global;
                var3 = var1.Object;
                var2 = var3.values;
                var1 = _closure1_slot4;
                var1 = var1.boostSlots;
                var3 = var2.bind(var3)(var1);
                var2 = var3.some;
                var1 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isAvailable;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var6.bind(var7)(var5, var1);
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot5;
            var2 = var2.NONE;
            var2 = var4 === var2;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = !var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
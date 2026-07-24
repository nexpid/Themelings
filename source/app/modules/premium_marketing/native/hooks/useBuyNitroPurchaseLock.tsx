// app/modules/premium_marketing/native/hooks/useBuyNitroPurchaseLock.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportDefault;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.create;
    var2 = function() {
        var1 = {'isLocked': false, 'hasCompletedInitialLoad': false};
        return var1;
    };
    var2 = var5.bind(var8)(var2);
    var _closure1_slot3 = var2;
    var2 = {};
    var5 = function begin() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot3;
            var1 = var3.getState;
            var1 = var1.bind(var3)();
            var3 = var1.isLocked;
            var1 = var1.hasCompletedInitialLoad;
            var1 = !var1;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var3;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot2;
            var3 = var4.isBusy;
            var1 = var3.bind(var4)();
case 4:
            var1 = !var1;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot3;
            var4 = var5.setState;
            var3 = {};
            var2 = true;
            var3['isLocked'] = var2;
            var3 = var4.bind(var5)(var3);
            var1 = true;
case 6:
            return var1;
        }
    };
    var2['begin'] = var5;
    var5 = function end() {
        var3 = _closure1_slot3;
        var2 = var3.setState;
        var1 = {};
        var4 = false;
        var1['isLocked'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['end'] = var5;
    var5 = function setInitialLoadComplete(arg1) {
        var3 = _closure1_slot3;
        var2 = var3.setState;
        var1 = {};
        var4 = arg1;
        var1['hasCompletedInitialLoad'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['setInitialLoadComplete'] = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium_marketing/native/hooks/useBuyNitroPurchaseLock.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useIsBuyNitroPurchaseBlocked() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot3;
            var6 = undefined;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.hasCompletedInitialLoad;
                    var1 = !var1;
                    if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var1 = var2.isLocked;
case 8:
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var1);
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 2;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                var2 = _closure1_slot2;
                var1 = var2.isBusy;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['useIsBuyNitroPurchaseBlocked'] = var4;
    var3['BuyNitroPurchaseLock'] = var2;
    return var1;
})();
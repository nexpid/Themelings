// app/modules/checkout/native/NativeCheckoutStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
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
    var2 = 0;
    var5 = var7[var2];
    var1 = undefined;
    var10 = var11.bind(var1)(var5);
    var8 = 1;
    var5 = var7[var8];
    var5 = var11.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var9 = 2;
    var5 = var7[var9];
    var5 = var11.bind(var1)(var5);
    var5 = var5.bind(var1)();
    var5 = var10.bind(var1)(var5, var9);
    var2 = var5[var2];
    var5 = var5[var8];
    var _closure1_slot3 = var5;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/checkout/native/NativeCheckoutStore.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function useNativeCheckoutStore(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var5 = _closure1_slot1;
            var1 = 3;
            var1 = var5[var1];
            var1 = var2.bind(var3)(var1);
            var4 = var1.shallow;
case 2:
            var1 = _closure1_slot3;
            var2 = var1.bind(var3)();
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['useNativeCheckoutStore'] = var5;
    var4 = function createNativeStore(arg1) {
        var2 = arg1;
        var3 = var2.order;
        var _closure2_slot0 = var3;
        var3 = var2.checkoutInitParameters;
        var _closure2_slot1 = var3;
        var2 = var2.contextMetadata;
        var _closure2_slot2 = var2;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 4;
        var2 = var7[var2];
        var5 = undefined;
        var4 = var6.bind(var5)(var2);
        var3 = var4.createWithEqualityFn;
        var2 = 3;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.shallow;
        var1 = function(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var1 = {};
                var5 = _closure2_slot0;
                var4 = null;
                var5 = var4 != var5;
                if(!var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var7 = _closure1_slot2;
                var6 = var7.createFromServer;
                var5 = _closure2_slot0;
                var4 = var6.bind(var7)(var5);
case 4:
                var1['orderRecord'] = var4;
                var4 = function setOrder(arg1) {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var5 = _closure1_slot2;
                    var4 = var5.createFromServer;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var1);
                    var2['orderRecord'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['setOrder'] = var4;
                var3 = function getCheckoutContextRecord() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure3_slot1;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var2 = var1.orderRecord;
                        var1 = null;
                        var3 = var1 != var2;
                        if(!var3) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                        var1 = var2.checkoutContextRecord;
case 5:
                        return var1;
                    }
                };
                var1['getCheckoutContextRecord'] = var3;
                var3 = _closure2_slot1;
                var1['checkoutInitParameters'] = var3;
                var2 = _closure2_slot2;
                var1['contextMetadata'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createNativeStore'] = var4;
    var3['NativeCheckoutStoreContext'] = var2;
    return var1;
})();
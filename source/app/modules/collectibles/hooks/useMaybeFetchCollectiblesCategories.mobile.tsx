// app/modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
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
    var4 = 'modules/collectibles/hooks/useMaybeFetchCollectiblesCategories.mobile.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMaybeFetchCollectiblesCategories(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = null;
            var3 = var6 == var1;
            var2 = undefined;
            var7 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var1.paymentGateway;
case 2:
            var8 = _closure1_slot1;
            var5 = _closure1_slot2;
            var4 = 0;
            var4 = var5[var4];
            var8 = var8.bind(var2)(var4);
            var4 = 'shop_include_unpublished';
            var8 = var8.bind(var2)(var4);
            var4 = _closure1_slot0;
            var3 = 1;
            var3 = var5[var3];
            var5 = var4.bind(var2)(var3);
            var4 = var5.useMaybeFetchCollectiblesCategoriesShared;
            var3 = {};
            var3['includeUnpublished'] = var8;
            var3['paymentGateway'] = var7;
            var8 = var6 == var1;
            var7 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var1.countryCode;
case 4:
            var3['countryCode'] = var7;
            var7 = true;
            var3['includeBundles'] = var7;
            var3['includeNameplatesOnMobile'] = var7;
            var8 = var6 == var1;
            var7 = undefined;
            if(var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var1.logPerf;
case 6:
            var3['logPerf'] = var7;
            var6 = var6 == var1;
            var2 = undefined;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var1.noOp;
case 8:
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/billing/utils/StoreCountryUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/billing/utils/StoreCountryUtils.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = function parseStoreCountry(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var1 = var5;
            if(!(var3 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var4 = var5.country;
            var2['country'] = var4;
            var6 = var5.set_at;
            if(!(var3 == var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var5.setAt;
case 4:
            var7 = var3 != var6;
            var4 = null;
            if(!var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var6;
case 6:
            var2['setAt'] = var4;
            var4 = var5.is_locked;
            if(!(var3 == var4)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = var5.isLocked;
case 8:
            var3 = var3 != var4;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var4;
case 10:
            var2['isLocked'] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['parseStoreCountry'] = var2;
    return var1;
})();
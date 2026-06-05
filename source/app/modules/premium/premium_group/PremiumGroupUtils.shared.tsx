// app/modules/premium/premium_group/PremiumGroupUtils.shared.tsx
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/premium_group/PremiumGroupUtils.shared.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = {};
case 2:
            var4 = var3.withIntervals;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var2.hasAnyPremiumGroup;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var10 = var2.planIdFromItems;
            if(!(var1 != var10)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = _closure1_slot2;
            var3 = var5.get;
            var3 = var3.bind(var5)(var10);
            if(!(var1 != var3)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var9 = _closure1_slot0;
            var6 = _closure1_slot1;
            var5 = 1;
            var5 = var6[var5];
            var7 = undefined;
            var8 = var9.bind(var7)(var5);
            var5 = var8.getPrice;
            var5 = var5.bind(var8)(var10);
            var8 = 2;
            var6 = var6[var8];
            var10 = var9.bind(var7)(var6);
            var9 = var10.formatPrice;
            var6 = var5.amount;
            var5 = var5.currency;
            var6 = var9.bind(var10)(var6, var5);
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            return var6;
case 11:
            var5 = var3.interval;
            var4 = var3.intervalCount;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var8];
            var3 = var3.bind(var7)(var2);
            var2 = var3.formatRate;
            var2 = var2.bind(var3)(var6, var5, var4);
            return var2;
case 9:
            return var1;
case 7:
            return var1;
case 4:
            return var1;
        }
    };
    var3['getPriceString'] = var2;
    return var1;
})();
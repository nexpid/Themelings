// app/modules/virtual_currency/experiments/VirtualCurrencyExperimentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/virtual_currency/experiments/VirtualCurrencyExperimentUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot2;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var1 = null;
            var1 = var1 == var4;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.isStaff;
            var3 = var3.bind(var4)();
            var1 = !var3;
case 2:
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getCurrentConfig;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var3['shouldHoldoutVirtualCurrencyFeatures'] = var2;
    return var1;
})();
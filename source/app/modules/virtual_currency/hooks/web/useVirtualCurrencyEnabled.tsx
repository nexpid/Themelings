// app/modules/virtual_currency/hooks/web/useVirtualCurrencyEnabled.tsx
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
    var4 = 'modules/virtual_currency/hooks/web/useVirtualCurrencyEnabled.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 0;
            var2 = var5[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.shouldHoldoutVirtualCurrencyFeatures;
            var3 = var2.bind(var3)(var4);
            var2 = {};
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.getCurrentConfig;
            var1 = var1.bind(var3)(var4);
            var1 = var1.enabled;
            var2['enabled'] = var1;
            var1 = var2;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = false;
            var2['enabled'] = var3;
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['isVirtualCurrencyEnabled'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 1;
            var1 = var6[var1];
            var5 = undefined;
            var3 = var3.bind(var5)(var1);
            var1 = var3.useExperiment;
            var1 = var1.bind(var3)(var4);
            var3 = _closure1_slot0;
            var2 = 0;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.shouldHoldoutVirtualCurrencyFeatures;
            var3 = var2.bind(var3)(var4);
            var2 = {};
            if(var3) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var1 = var1.enabled;
            var2['enabled'] = var1;
            var1 = var2;
            _fun0002_ip = 7; continue _fun0002;
case 5:
            var3 = false;
            var2['enabled'] = var3;
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['useVirtualCurrencyEnabled'] = var2;
    return var1;
})();
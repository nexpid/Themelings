// app/modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var2 = function useVirtualCurrencyMobileEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(var3) { _fun0001_ip = 84; continue _fun0001 }
 70:
            var1 = var1.enabled;
            var2['enabled'] = var1;
            var1 = var2;
            _fun0001_ip = 93; continue _fun0001;
 84:
            var3 = false;
            var2['enabled'] = var3;
            var1 = var2;
 93:
            return var1;
        }
    };
    var _closure1_slot3 = var2;
    var1 = 3;
    var5 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/virtual_currency/hooks/native/useVirtualCurrencyMobileEnabled.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
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
            if(var3) { _fun0002_ip = 88; continue _fun0002 }
 43:
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
            _fun0002_ip = 97; continue _fun0002;
 88:
            var3 = false;
            var2['enabled'] = var3;
            var1 = var2;
 97:
            return var1;
        }
    };
    var3['isVirtualCurrencyEnabled'] = var5;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var2 = _closure1_slot3;
            var5 = undefined;
            var2 = var2.bind(var5)(var4);
            var2 = var2.enabled;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 2;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useConfig;
            var1 = var1.bind(var3)(var4);
            var3 = var1.enabled;
            var1 = {};
            if(!var2) { _fun0003_ip = 66; continue _fun0003 }
 63:
            var2 = var3;
 66:
            var1['enabled'] = var2;
            return var1;
        }
    };
    var3['useVirtualCurrencyOnboardingEnabled'] = var4;
    var3['useVirtualCurrencyMobileEnabled'] = var2;
    return var1;
})();
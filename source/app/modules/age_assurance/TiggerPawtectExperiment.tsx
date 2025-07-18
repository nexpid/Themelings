// app/modules/age_assurance/TiggerPawtectExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-02_tigger_pawtect', 'label': 'Tigger pawtect'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Tigger pawtect'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/age_assurance/TiggerPawtectExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['TiggerPawtectExperiment'] = var4;
    var4 = function isEligibleForTiggerPawtect(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.location;
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var7 = true;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.enabled;
            if(var1) { _fun0001_ip = 83; continue _fun0001 }
 50:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isEligibleForSettingsDefaultsAggregate;
            var1 = var2.bind(var3)(var4);
 83:
            return var1;
        }
    };
    var3['isEligibleForTiggerPawtect'] = var4;
    var2 = function useIsTiggerPawtectEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = var1.location;
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var7 = true;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.useIsEligibleForSettingsDefaultsAggregate;
            var2 = var2.bind(var3)(var4);
            var1 = var1.enabled;
            if(var1) { _fun0002_ip = 86; continue _fun0002 }
 83:
            var1 = var2;
 86:
            return var1;
        }
    };
    var3['useIsTiggerPawtectEnabled'] = var2;
    return var1;
})();
// app/modules/age_assurance/AgeVerificationCommandsTogglesExperiment.tsx
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
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2025-11-age-verification-commands-toggles'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/age_assurance/AgeVerificationCommandsTogglesExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.useConfig;
            var2 = {};
            var5 = arg1;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var6.bind(var4)(var1);
            var1 = var3.useIsEligibleForSettingsDefaultsAggregate;
            var5 = 'AgeVerificationCommandsTogglesExperiment';
            var3 = var1.bind(var3)(var5);
            var1 = 2;
            var1 = var7[var1];
            var4 = var6.bind(var4)(var1);
            var1 = var4.useIsGidgetPawtectEnabled;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useIsAgeVerificationCommandsTogglesEnabled'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var2 = {};
            var5 = arg1;
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.enabled;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 1;
            var1 = var7[var1];
            var4 = undefined;
            var3 = var6.bind(var4)(var1);
            var1 = var3.isEligibleForSettingsDefaultsAggregate;
            var5 = 'AgeVerificationCommandsTogglesExperiment';
            var3 = var1.bind(var3)(var5);
            var1 = 2;
            var1 = var7[var1];
            var4 = var6.bind(var4)(var1);
            var1 = var4.getIsGidgetPawtectEnabled;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = var3;
case 4:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['isAgeVerificationCommandsTogglesEnabled'] = var2;
    return var1;
})();
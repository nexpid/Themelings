// app/modules/explicit_media_redaction/ExplicitMediaNewTeenDefaults.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var8[var4];
    var1 = undefined;
    var10 = var7.bind(var1)(var5);
    var9 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-01_sensitive_content_defaults', 'label': 'Sensitive Content Defaults'};
    var6 = {'enabled': false, 'allBlur': false, 'mixed': false};
    var5['defaultConfig'] = var6;
    var6 = {'id': 1, 'label': 'Mixed'};
    var11 = {'enabled': true, 'mixed': true, 'allBlur': false};
    var6['config'] = var11;
    var11 = new Array(2);
    var11[0] = var6;
    var12 = {'id': 2, 'label': 'Blur Default'};
    var6 = 2;
    var13 = {'enabled': true, 'mixed': false, 'allBlur': true};
    var12['config'] = var13;
    var11[1] = var12;
    var5['treatments'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot2 = var5;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var9 = var10.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-01_sensitive_content_defaults_new_users', 'label': 'Sensitive Content Defaults - New Users'};
    var11 = {'enabled': false, 'allBlur': false, 'mixed': false};
    var4['defaultConfig'] = var11;
    var12 = {'id': 1, 'label': 'Mixed'};
    var11 = {'enabled': true, 'mixed': true, 'allBlur': false};
    var12['config'] = var11;
    var11 = new Array(2);
    var11[0] = var12;
    var12 = {'id': 2, 'label': 'Blur Default'};
    var13 = {'enabled': true, 'mixed': false, 'allBlur': true};
    var12['config'] = var13;
    var11[1] = var12;
    var4['treatments'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot3 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/explicit_media_redaction/ExplicitMediaNewTeenDefaults.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SensitiveContentDefault'] = var5;
    var3['SensitiveContentDefaultNewUser'] = var4;
    var4 = function isEligibleForSensitiveContentDefaults(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.enabled;
            var7 = _closure1_slot3;
            var6 = var7.getCurrentConfig;
            var5 = {};
            var5['location'] = var4;
            var3 = {};
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var5, var3);
            var3 = var3.enabled;
            if(var1) { _fun0001_ip = 82; continue _fun0001 }
 79:
            var1 = var3;
 82:
            if(var1) { _fun0001_ip = 118; continue _fun0001 }
 85:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isEligibleForSettingsDefaultsAggregate;
            var1 = var2.bind(var3)(var4);
 118:
            return var1;
        }
    };
    var3['isEligibleForSensitiveContentDefaults'] = var4;
    var4 = function useIsEligibleForSensitiveContentDefaults(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var6 = _closure1_slot2;
            var4 = var6.useExperiment;
            var3 = {};
            var3['location'] = var5;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var6)(var3, var1);
            var1 = var1.enabled;
            var7 = _closure1_slot3;
            var6 = var7.useExperiment;
            var4 = {};
            var4['location'] = var5;
            var3 = {};
            var3['autoTrackExposure'] = var8;
            var3 = var6.bind(var7)(var4, var3);
            var3 = var3.enabled;
            var6 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.useIsEligibleForSettingsDefaultsAggregate;
            var2 = var2.bind(var4)(var5);
            if(var1) { _fun0002_ip = 115; continue _fun0002 }
 112:
            var1 = var3;
 115:
            if(var1) { _fun0002_ip = 121; continue _fun0002 }
 118:
            var1 = var2;
 121:
            return var1;
        }
    };
    var3['useIsEligibleForSensitiveContentDefaults'] = var4;
    var4 = function isEligibleForSensitiveContentDefaultsAllBlur(arg1) {
        var4 = _closure1_slot2;
        var3 = var4.getCurrentConfig;
        var2 = {};
        var1 = arg1;
        var2['location'] = var1;
        var1 = {};
        var5 = false;
        var1['autoTrackExposure'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        var1 = var1.allBlur;
        return var1;
    };
    var3['isEligibleForSensitiveContentDefaultsAllBlur'] = var4;
    var2 = function isEligibleForSensitiveContentDefaultsMixed(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var3 = {};
            var3['location'] = var4;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var3, var1);
            var1 = var1.mixed;
            if(var1) { _fun0003_ip = 79; continue _fun0003 }
 46:
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.isEligibleForSettingsDefaultsAggregate;
            var1 = var2.bind(var3)(var4);
 79:
            return var1;
        }
    };
    var3['isEligibleForSensitiveContentDefaultsMixed'] = var2;
    return var1;
})();
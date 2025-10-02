// app/modules/user_settings/DefaultGuildActivityExperiment.tsx
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
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var8[var4];
    var1 = undefined;
    var9 = var7.bind(var1)(var5);
    var6 = var9.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-01_default_activity_status', 'label': 'Guild activity status defaults'};
    var10 = {};
    var11 = false;
    var10['enabled'] = var11;
    var5['defaultConfig'] = var10;
    var13 = {'id': 1, 'label': 'Enable new defaults'};
    var10 = {};
    var10['enabled'] = var12;
    var13['config'] = var10;
    var10 = new Array(1);
    var10[0] = var13;
    var5['treatments'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot2 = var5;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-01_default_activity_status_new_users', 'label': 'Guild activity status defaults'};
    var10 = {};
    var10['enabled'] = var11;
    var4['defaultConfig'] = var10;
    var11 = {'id': 1, 'label': 'Enable new defaults'};
    var10 = {};
    var10['enabled'] = var12;
    var11['config'] = var10;
    var10 = new Array(1);
    var10[0] = var11;
    var4['treatments'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot3 = var4;
    var6 = 2;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/DefaultGuildActivityExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['DefaultGuildActivityExperiment'] = var5;
    var3['DefaultGuildActivityExperimentNewUsers'] = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var6 = _closure1_slot2;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var4['location'] = var3;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var1.enabled;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot3;
            var5 = var6.getCurrentConfig;
            var4 = {};
            var4['location'] = var3;
            var3 = {};
            var3['autoTrackExposure'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var1 = var3.enabled;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.isEligibleForSettingsDefaultsAggregate;
            var2 = 'DefaultGuildActivityExperiment';
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['isEligibleForDefaultGuildActivity'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var6 = _closure1_slot2;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var3;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var1.enabled;
            var6 = _closure1_slot3;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var3;
            var3 = {};
            var3['autoTrackExposure'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var3 = var3.enabled;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var4 = var4[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var4);
            var4 = var5.useIsEligibleForSettingsDefaultsAggregate;
            var2 = 'DefaultGuildActivityExperiment';
            var2 = var4.bind(var5)(var2);
            if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var1 = var3;
case 4:
            if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['useIsEligibleForDefaultGuildActivity'] = var2;
    return var1;
})();
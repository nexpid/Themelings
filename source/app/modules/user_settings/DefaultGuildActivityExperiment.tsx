// app/modules/user_settings/DefaultGuildActivityExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var14 = true;
    var4['value'] = var14;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var5 = 0;
    var4 = var9[var5];
    var1 = undefined;
    var10 = var8.bind(var1)(var4);
    var7 = var10.createExperiment;
    var6 = {'kind': 'user', 'id': '2025-01_default_activity_status', 'label': 'Guild activity status defaults'};
    var4 = {};
    var13 = false;
    var4['enabled'] = var13;
    var6['defaultConfig'] = var4;
    var12 = {'id': 1, 'label': 'Enable new defaults'};
    var4 = 1;
    var11 = {};
    var11['enabled'] = var14;
    var12['config'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var6['treatments'] = var11;
    var6 = var7.bind(var10)(var6);
    var _closure1_slot2 = var6;
    var5 = var9[var5];
    var10 = var8.bind(var1)(var5);
    var7 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-01_default_activity_status_new_users', 'label': 'Guild activity status defaults'};
    var11 = {};
    var11['enabled'] = var13;
    var5['defaultConfig'] = var11;
    var12 = {'id': 1, 'label': 'Enable new defaults'};
    var11 = {};
    var11['enabled'] = var14;
    var12['config'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var5['treatments'] = var11;
    var5 = var7.bind(var10)(var5);
    var _closure1_slot3 = var5;
    var4 = var9[var4];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createApexExperiment;
    var4 = {'name': '2025-11-guild-activity-aggregate-carve-out', 'kind': 'user'};
    var11 = {};
    var11['aggregateDefaultEnabled'] = var14;
    var4['defaultConfig'] = var11;
    var11 = {};
    var12 = {};
    var12['aggregateDefaultEnabled'] = var14;
    var11[0] = var12;
    var12 = {};
    var12['aggregateDefaultEnabled'] = var13;
    var11[1] = var12;
    var4['variations'] = var11;
    var4 = var7.bind(var10)(var4);
    var _closure1_slot4 = var4;
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/user_settings/DefaultGuildActivityExperiment.tsx';
    var7 = var8.bind(var9)(var7);
    var3['DefaultGuildActivityExperiment'] = var6;
    var3['DefaultGuildActivityExperimentNewUsers'] = var5;
    var3['GuildActivityAggregateCarveOut'] = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.getCurrentConfig;
            var2 = {};
            var2['location'] = var6;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var5)(var2, var1);
            var1 = var1.enabled;
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot3;
            var5 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var6;
            var2 = {};
            var2['autoTrackExposure'] = var8;
            var2 = var5.bind(var7)(var4, var2);
            var1 = var2.enabled;
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot4;
            var4 = var5.getConfig;
            var2 = {};
            var2['location'] = var6;
            var2 = var4.bind(var5)(var2);
            var2 = var2.aggregateDefaultEnabled;
            if(!var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 2;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.isEligibleForSettingsDefaultsAggregate;
            var3 = 'DefaultGuildActivityExperiment';
            var2 = var4.bind(var5)(var3);
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['isEligibleForDefaultGuildActivity'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var2 = {};
            var2['location'] = var7;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var5)(var2, var1);
            var1 = var1.enabled;
            var6 = _closure1_slot3;
            var5 = var6.useExperiment;
            var4 = {};
            var4['location'] = var7;
            var2 = {};
            var2['autoTrackExposure'] = var8;
            var2 = var5.bind(var6)(var4, var2);
            var4 = var2.enabled;
            var6 = _closure1_slot4;
            var5 = var6.useConfig;
            var2 = {};
            var2['location'] = var7;
            var2 = var5.bind(var6)(var2);
            var2 = var2.aggregateDefaultEnabled;
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 2;
            var5 = var5[var3];
            var3 = undefined;
            var6 = var6.bind(var3)(var5);
            var5 = var6.useIsEligibleForSettingsDefaultsAggregate;
            var3 = 'DefaultGuildActivityExperiment';
            var3 = var5.bind(var6)(var3);
            if(var1) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var4;
case 8:
            if(var1) { _fun0002_ip = 10; continue _fun0002 }
case 6:
            if(!var2) { _fun0002_ip = 11; continue _fun0002 }
case 4:
            var2 = var3;
case 11:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var3['useIsEligibleForDefaultGuildActivity'] = var2;
    return var1;
})();
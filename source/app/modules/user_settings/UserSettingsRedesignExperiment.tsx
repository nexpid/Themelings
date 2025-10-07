// app/modules/user_settings/UserSettingsRedesignExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var10[var4];
    var1 = undefined;
    var7 = var9.bind(var1)(var5);
    var6 = var7.createApexExperiment;
    var5 = {'name': '2025-09-user-settings-redesign-1', 'kind': 'user'};
    var8 = {'enabled': false, 'showLegacyOpen': false};
    var5['defaultConfig'] = var8;
    var8 = {};
    var11 = {'enabled': false, 'showLegacyOpen': false};
    var8[0] = var11;
    var11 = {'enabled': true, 'showLegacyOpen': false};
    var8[1] = var11;
    var11 = {'enabled': true, 'showLegacyOpen': true};
    var8[2] = var11;
    var5['variations'] = var8;
    var7 = var6.bind(var7)(var5);
    var _closure1_slot0 = var7;
    var4 = var10[var4];
    var6 = var9.bind(var1)(var4);
    var5 = var6.createApexExperiment;
    var4 = {'name': '2025-09-user-settings-redesign-2a', 'kind': 'user'};
    var8 = {'showRedesignedNotifications': false, 'showRedesignedVoiceAndVideo': false};
    var4['defaultConfig'] = var8;
    var8 = {};
    var11 = {'showRedesignedNotifications': false, 'showRedesignedVoiceAndVideo': false};
    var8[0] = var11;
    var11 = {'showRedesignedNotifications': true, 'showRedesignedVoiceAndVideo': true};
    var8[1] = var11;
    var4['variations'] = var8;
    var6 = var5.bind(var6)(var4);
    var _closure1_slot1 = var6;
    var5 = function isEligibleForUserSettingsRedesignExperiment(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot2 = var5;
    var4 = function useIsEligibleForUserSettingsRedesignExperiment(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enabled;
        return var1;
    };
    var _closure1_slot3 = var4;
    var8 = 1;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/user_settings/UserSettingsRedesignExperiment.tsx';
    var8 = var9.bind(var10)(var8);
    var3['UserSettingsRedesignMilestone1Experiment'] = var7;
    var3['UserSettingsRedesign2aExperiment'] = var6;
    var3['isEligibleForUserSettingsRedesignExperiment'] = var5;
    var3['useIsEligibleForUserSettingsRedesignExperiment'] = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot3;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var4 = _closure1_slot1;
            var3 = var4.useConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.showRedesignedNotifications;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useShowRedesignedNotifications'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot1;
            var3 = var4.getConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.showRedesignedNotifications;
case 4:
            return var1;
        }
    };
    var3['getShowRedesignedNotifications'] = var4;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot3;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var4 = _closure1_slot1;
            var3 = var4.useConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var2 = var2.showRedesignedVoiceAndVideo;
            if(!var1) { _fun0003_ip = 2; continue _fun0003 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['useShowRedesignedVoiceAndVideo'] = var4;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot2;
            var1 = undefined;
            var1 = var3.bind(var1)(var5);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0004_ip = 4; continue _fun0004 }
case 5:
            var4 = _closure1_slot1;
            var3 = var4.getConfig;
            var2 = {};
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var1 = var2.showRedesignedVoiceAndVideo;
case 4:
            return var1;
        }
    };
    var3['getShowRedesignedVoiceAndVideo'] = var4;
    var2 = function(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.showLegacyOpen;
        return var1;
    };
    var3['useShowLegacyOpen'] = var2;
    return var1;
})();
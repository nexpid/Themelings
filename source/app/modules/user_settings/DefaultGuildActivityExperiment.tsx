// app/modules/user_settings/DefaultGuildActivityExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var3 = native6;
    var8 = native7;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = 0;
    var5 = var8[var4];
    var1 = undefined;
    var10 = var7.bind(var1)(var5);
    var9 = var10.createExperiment;
    var5 = {'kind': 'user', 'id': '2025-01_default_activity_status', 'label': 'Guild activity status defaults'};
    var6 = {};
    var12 = false;
    var6['enabled'] = var12;
    var5['defaultConfig'] = var6;
    var14 = {'id': 1, 'label': 'Enable new defaults'};
    var6 = 1;
    var11 = {};
    var11['enabled'] = var13;
    var14['config'] = var11;
    var11 = new Array(1);
    var11[0] = var14;
    var5['treatments'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot0 = var5;
    var4 = var8[var4];
    var10 = var7.bind(var1)(var4);
    var9 = var10.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-01_default_activity_status_new_users', 'label': 'Guild activity status defaults'};
    var11 = {};
    var11['enabled'] = var12;
    var4['defaultConfig'] = var11;
    var12 = {'id': 1, 'label': 'Enable new defaults'};
    var11 = {};
    var11['enabled'] = var13;
    var12['config'] = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var4['treatments'] = var11;
    var4 = var9.bind(var10)(var4);
    var _closure1_slot1 = var4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/user_settings/DefaultGuildActivityExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['DefaultGuildActivityExperiment'] = var5;
    var3['DefaultGuildActivityExperimentNewUsers'] = var4;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = _closure1_slot0;
            var5 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var2;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var5.bind(var7)(var4, var1);
            var1 = var1.enabled;
            if(var1) { _fun0001_ip = 79; continue _fun0001 }
 45:
            var5 = _closure1_slot1;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var1 = var2.enabled;
 79:
            return var1;
        }
    };
    var3['isEligibleForDefaultGuildActivity'] = var4;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var7 = _closure1_slot0;
            var5 = var7.useExperiment;
            var4 = {};
            var4['location'] = var2;
            var1 = {};
            var6 = false;
            var1['autoTrackExposure'] = var6;
            var1 = var5.bind(var7)(var4, var1);
            var1 = var1.enabled;
            var5 = _closure1_slot1;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var2;
            var2 = {};
            var2['autoTrackExposure'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            var2 = var2.enabled;
            if(var1) { _fun0002_ip = 82; continue _fun0002 }
 79:
            var1 = var2;
 82:
            return var1;
        }
    };
    var3['useIsEligibleForDefaultGuildActivity'] = var2;
    return var1;
})();
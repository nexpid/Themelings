// app/modules/user_settings/native/notifications/stores/AndroidNotificationSettingsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _initializeAndroidNotificationSettingsStore() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var _closure4_slot2 = var2;
                    var _closure4_slot3 = var2;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 2;
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.isAndroid;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5: // try_start_0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var10 = 3;
                    var3 = var3[var10];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getLightsEnabled;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=102);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    _closure4_slot0 = var3;
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var10];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.getVibrationsEnabled;
                    var4 = var4.bind(var5)();
                    SaveGenerator(address=146);
case 10:
                    return var4;
case 11:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    _closure4_slot1 = var4;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getSoundsEnabled;
                    var5 = var5.bind(var6)();
                    SaveGenerator(address=190);
case 14:
                    return var5;
case 15:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    _closure4_slot2 = var5;
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var10];
                    var9 = var9.bind(var2)(var6);
                    var6 = var9.shouldAndroidNotifyEveryTime;
                    var6 = var6.bind(var9)();
                    SaveGenerator(address=231);
case 18:
                    return var6;
case 19:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=8);
                    if(var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
                    _closure4_slot3 = var6;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 4;
                    var8 = var10[var8];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.batchUpdates;
                    var7 = function() {
                        var3 = _closure1_slot4;
                        var2 = var3.setState;
                        var1 = {};
                        var5 = _closure4_slot0;
                        var1['isLightsEnabled'] = var5;
                        var5 = _closure4_slot1;
                        var1['isVibrationsEnabled'] = var5;
                        var5 = _closure4_slot2;
                        var1['isSoundsEnabled'] = var5;
                        var4 = _closure4_slot3;
                        var1['isNotifyEveryTime'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var7 = var8.bind(var9)(var7);
case 22: // try_end0
                    _fun0001_ip = 4; continue _fun0001;
case 20:
                    return var6;
case 16:
                    return var5;
case 12:
                    return var4;
case 8:
                    return var3;
case 23: // catch_target0
                    CatchBlockStart(arg_register=2);
case 4:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot5 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createWithEqualityFn;
    var4 = function() {
        var1 = {};
        var2 = undefined;
        var1['isLightsEnabled'] = var2;
        var1['isVibrationsEnabled'] = var2;
        var1['isSoundsEnabled'] = var2;
        var1['isNotifyEveryTime'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/notifications/stores/AndroidNotificationSettingsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function initializeAndroidNotificationSettingsStore() {
        var1 = undefined;
        var4 = _closure1_slot5;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['initializeAndroidNotificationSettingsStore'] = var4;
    var4 = function useAndroidNotificationLightsEnabled() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isLightsEnabled;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useAndroidNotificationLightsEnabled'] = var4;
    var4 = function setAndroidNotificationLightsEnabled(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 4;
        var6 = var5[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var6);
        var6 = var7.batchUpdates;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['isLightsEnabled'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot1;
        var2 = 3;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.setLightsEnabled;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['setAndroidNotificationLightsEnabled'] = var4;
    var4 = function useAndroidNotificationVibrationsEnabled() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isVibrationsEnabled;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useAndroidNotificationVibrationsEnabled'] = var4;
    var4 = function setAndroidNotificationVibrationsEnabled(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 4;
        var6 = var5[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var6);
        var6 = var7.batchUpdates;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['isVibrationsEnabled'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot1;
        var2 = 3;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.setVibrationsEnabled;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['setAndroidNotificationVibrationsEnabled'] = var4;
    var4 = function useAndroidNotificationSoundsEnabled() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isSoundsEnabled;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useAndroidNotificationSoundsEnabled'] = var4;
    var4 = function setAndroidNotificationSoundsEnabled(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 4;
        var6 = var5[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var6);
        var6 = var7.batchUpdates;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['isSoundsEnabled'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot1;
        var2 = 3;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.setSoundsEnabled;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['setAndroidNotificationSoundsEnabled'] = var4;
    var4 = function useAndroidMessageNotificationsEnabled() {
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 5;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.shallow;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.isNotifyEveryTime;
            return var1;
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useAndroidMessageNotificationsEnabled'] = var4;
    var2 = function setAndroidMessageNotificationsEnabled(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 4;
        var6 = var5[var1];
        var1 = undefined;
        var7 = var7.bind(var1)(var6);
        var6 = var7.batchUpdates;
        var3 = function() {
            var3 = _closure1_slot4;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['isNotifyEveryTime'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = var6.bind(var7)(var3);
        var3 = _closure1_slot1;
        var2 = 3;
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.setAndroidNotifyEveryTime;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var3['setAndroidMessageNotificationsEnabled'] = var2;
    return var1;
})();
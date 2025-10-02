// app/modules/user_settings/UserSettingDefinitions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function makeUpdateSettingFunction(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var3 = _closure2_slot1;
                var6 = 'function';
                var4 = typeof var5;
                var2 = var5;
                if(!(var6 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)();
                var2 = var5.bind(var4)(var1);
case 2:
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        return var1;
    };
    var _closure1_slot6 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserSettingsDelay;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/UserSettingDefinitions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function defineProtoSetting(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arguments[4];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var3 = arg3;
            var _closure2_slot2 = var3;
            var3 = arg4;
            var _closure2_slot3 = var3;
            var6 = undefined;
            if(!(var1 === var6)) { _fun0002_ip = 4; continue _fun0002 }
case 2:
            var1 = {};
case 4:
            var3 = var1.delay;
            if(!(var3 === var6)) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var4 = _closure1_slot5;
            var3 = var4.INFREQUENT_USER_ACTION;
case 5:
            var _closure2_slot4 = var3;
            var1 = var1.comparator;
            if(!(var1 === var6)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = function o(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 === var1;
                return var1;
            };
case 7:
            var _closure2_slot5 = var1;
            var5 = function getSetting() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var1 = _closure1_slot4;
                    var2 = var1.settings;
                    var1 = _closure2_slot0;
                    var5 = var2[var1];
                    var1 = null;
                    var6 = var1 == var5;
                    var2 = undefined;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 9; continue _fun0003 }
case 4:
                    var4 = _closure2_slot1;
                    var1 = var5[var4];
case 9:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var _closure2_slot6 = var5;
            var1 = {};
            var1['getSetting'] = var5;
            var4 = _closure1_slot6;
            var3 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var5 = var2.PreloadedUserSettingsActionCreators;
                var4 = var5.updateAsync;
                var3 = _closure2_slot0;
                var2 = _closure2_slot4;
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = _closure2_slot1;
                    var6 = _closure2_slot3;
                    var5 = _closure3_slot0;
                    var2 = var4[var3];
                    var1 = undefined;
                    var2 = var6.bind(var1)(var5, var2);
                    var4[var3] = var2;
                    return var1;
                };
                var1 = var4.bind(var5)(var3, var1, var2);
                return var1;
            };
            var3 = var4.bind(var6)(var5, var3);
            var1['updateSetting'] = var3;
            var2 = function useSetting() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var4 = var5.useStateFromStores;
                var1 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var1;
                var9 = _closure2_slot6;
                var7 = _closure2_slot5;
                var11 = var5;
                var10 = var3;
                var8 = undefined;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            };
            var1['useSetting'] = var2;
            return var1;
        }
    };
    var3['defineProtoSetting'] = var4;
    var4 = function wrapSettingWithSelectiveSyncing(arg1, arg2, arg3) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var5 = function getSetting() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot3;
                var1 = var2.getState;
                var3 = var1.bind(var2)();
                var1 = _closure2_slot1;
                var4 = var3[var1];
                var3 = null;
                var5 = var3 == var4;
                var1 = undefined;
                if(var5) { _fun0004_ip = 10; continue _fun0004 }
case 2:
                var5 = var4.settings;
                var4 = _closure2_slot2;
                var1 = var5[var4];
case 10:
                if(!(var3 == var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = _closure2_slot0;
                var2 = var3.getSetting;
                var1 = var2.bind(var3)();
case 11:
                return var1;
            }
        };
        var1 = {};
        var1['getSetting'] = var5;
        var3 = function useSetting() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = var2.useSetting;
                var1 = var1.bind(var2)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 4;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.useStateFromStores;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure1_slot3;
                        var1 = var2.getState;
                        var3 = var1.bind(var2)();
                        var1 = _closure2_slot1;
                        var3 = var3[var1];
                        var1 = null;
                        var4 = var1 == var3;
                        var1 = undefined;
                        if(var4) { _fun0006_ip = 10; continue _fun0006 }
case 2:
                        var3 = var3.settings;
                        var2 = _closure2_slot2;
                        var1 = var3[var2];
case 10:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                var3 = null;
                if(!(var3 != var2)) { _fun0005_ip = 13; continue _fun0005 }
case 8:
                var1 = var2;
case 13:
                return var1;
            }
        };
        var1['useSetting'] = var3;
        var4 = _closure1_slot6;
        var3 = undefined;
        var2 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var6 = _closure1_slot3;
                var5 = var6.shouldSync;
                var3 = _closure2_slot1;
                var3 = var5.bind(var6)(var3);
                if(var3) { _fun0007_ip = 14; continue _fun0007 }
case 15:
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 5;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.dispatch;
                var1 = {};
                var6 = 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE';
                var1['type'] = var6;
                var6 = {};
                var8 = _closure2_slot1;
                var7 = {};
                var9 = {};
                var10 = _closure2_slot2;
                var9[var10] = var4;
                var7['settings'] = var9;
                var6[var8] = var7;
                var1['changes'] = var6;
                var1 = var3.bind(var5)(var1);
                var1 = global;
                var3 = var1.Promise;
                var1 = var3.resolve;
                var1 = var1.bind(var3)();
                _fun0007_ip = 16; continue _fun0007;
case 14:
                var3 = _closure2_slot0;
                var2 = var3.updateSetting;
                var1 = var2.bind(var3)(var4);
case 16:
                return var1;
            }
        };
        var2 = var4.bind(var3)(var5, var2);
        var1['updateSetting'] = var2;
        return var1;
    };
    var3['wrapSettingWithSelectiveSyncing'] = var4;
    var4 = function wrapSettingWithOverride(arg1, arg2, arg3, arg4) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = arg4;
        var _closure2_slot3 = var1;
        var5 = function getSetting() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = _closure2_slot2;
                var1 = undefined;
                var1 = var3.bind(var1)();
                var3 = null;
                if(!(var3 == var1)) { _fun0008_ip = 17; continue _fun0008 }
case 18:
                var3 = _closure2_slot0;
                var2 = var3.getSetting;
                var1 = var2.bind(var3)();
case 17:
                return var1;
            }
        };
        var1 = {};
        var1['getSetting'] = var5;
        var3 = function useSetting() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = var3.useSetting;
                var1 = var1.bind(var3)();
                var3 = _closure2_slot3;
                var2 = undefined;
                var2 = var3.bind(var2)();
                var3 = null;
                if(!(var3 != var2)) { _fun0009_ip = 19; continue _fun0009 }
case 17:
                var1 = var2;
case 19:
                return var1;
            }
        };
        var1['useSetting'] = var3;
        var4 = _closure1_slot6;
        var3 = undefined;
        var2 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var1 = 'USER_SETTINGS_OVERRIDE_CLEAR';
            var2['type'] = var1;
            var6 = _closure2_slot1;
            var5 = new Array(1);
            var5[0] = var6;
            var2['settings'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = _closure2_slot0;
            var2 = var3.updateSetting;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var4.bind(var3)(var5, var2);
        var1['updateSetting'] = var2;
        return var1;
    };
    var3['wrapSettingWithOverride'] = var4;
    var2 = function wrapSettingWithExperimentDefaults(arg1) {
        var1 = arg1;
        var3 = var1.baseSetting;
        var _closure2_slot0 = var3;
        var3 = var1.isEligible;
        var _closure2_slot1 = var3;
        var3 = var1.useIsEligible;
        var _closure2_slot2 = var3;
        var3 = var1.eligibleDefault;
        var _closure2_slot3 = var3;
        var3 = var1.ineligibleDefault;
        var _closure2_slot4 = var3;
        var1 = var1.onUseDefault;
        var _closure2_slot5 = var1;
        var1 = {};
        var3 = function getSetting() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = var2.getSetting;
                var1 = var1.bind(var2)();
                var4 = null;
                if(!(var4 == var1)) { _fun0010_ip = 11; continue _fun0010 }
case 20:
                var2 = _closure2_slot5;
                if(!(var4 != var2)) { _fun0010_ip = 4; continue _fun0010 }
case 15:
                var4 = _closure2_slot5;
                var2 = undefined;
                var2 = var4.bind(var2)();
case 4:
                var2 = _closure2_slot1;
                var4 = undefined;
                var2 = var2.bind(var4)();
                if(var2) { _fun0010_ip = 21; continue _fun0010 }
case 22:
                var2 = _closure2_slot4;
                _fun0010_ip = 23; continue _fun0010;
case 21:
                var3 = _closure2_slot3;
                var2 = var3.bind(var4)();
case 23:
                var1 = var2;
case 11:
                return var1;
            }
        };
        var1['getSetting'] = var3;
        var3 = function useSetting() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = var2.useSetting;
                var1 = var1.bind(var2)();
                var2 = _closure2_slot2;
                var4 = undefined;
                var2 = var2.bind(var4)();
                var6 = null;
                if(!(var6 == var1)) { _fun0011_ip = 24; continue _fun0011 }
case 17:
                var5 = _closure2_slot5;
                if(!(var6 != var5)) { _fun0011_ip = 9; continue _fun0011 }
case 4:
                var5 = _closure2_slot5;
                var5 = var5.bind(var4)();
case 9:
                if(var2) { _fun0011_ip = 25; continue _fun0011 }
case 26:
                var2 = _closure2_slot4;
                _fun0011_ip = 27; continue _fun0011;
case 25:
                var3 = _closure2_slot3;
                var2 = var3.bind(var4)();
case 27:
                var1 = var2;
case 24:
                return var1;
            }
        };
        var1['useSetting'] = var3;
        var2 = function updateSetting(arg1) {
            var3 = _closure2_slot0;
            var2 = var3.updateSetting;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['updateSetting'] = var2;
        return var1;
    };
    var3['wrapSettingWithExperimentDefaults'] = var2;
    return var1;
})();
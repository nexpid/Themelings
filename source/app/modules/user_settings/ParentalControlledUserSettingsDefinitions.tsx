// app/modules/user_settings/ParentalControlledUserSettingsDefinitions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/ParentalControlledUserSettingsDefinitions.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function defineParentalControlledSetting(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[4];
            var1 = arg1;
            var _closure2_slot0 = var1;
            var1 = arg2;
            var _closure2_slot1 = var1;
            var1 = arg3;
            var _closure2_slot2 = var1;
            var1 = arg4;
            var _closure2_slot3 = var1;
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 41; continue _fun0001 }
 39:
            var3 = {};
 41:
            var3 = var3.comparator;
            if(!(var3 === var1)) { _fun0001_ip = 58; continue _fun0001 }
 51:
            var3 = function a(arg1, arg2) {
                var2 = arg1;
                var1 = arg2;
                var1 = var2 === var1;
                return var1;
            };
 58:
            var _closure2_slot4 = var3;
            var _closure2_slot5 = var1;
            var _closure2_slot6 = var1;
            var3 = function getControlledSetting(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var5 = _closure1_slot3;
                    var2 = var5.getSettings;
                    var1 = arg1;
                    var7 = var2.bind(var5)(var1);
                    var6 = null;
                    var5 = var6 == var7;
                    var2 = undefined;
                    var1 = undefined;
                    if(var5) { _fun0002_ip = 66; continue _fun0002 }
 41:
                    var5 = _closure2_slot0;
                    var5 = var7[var5];
                    var6 = var6 == var5;
                    var1 = undefined;
                    if(var6) { _fun0002_ip = 66; continue _fun0002 }
 58:
                    var4 = _closure2_slot1;
                    var1 = var5[var4];
 66:
                    var1 = var3.bind(var2)(var1);
                    return var1;
                }
            };
            var _closure2_slot7 = var3;
            var1 = {};
            var1['getControlledSetting'] = var3;
            _closure2_slot5 = var3;
            var3 = function S(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var2 = arg2;
                    var _closure3_slot0 = var2;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 72; continue _fun0003 }
 18:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 1;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.updateTeenSettings;
                    var2 = _closure2_slot0;
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
                    var1 = var3.bind(var4)(var5, var2, var1);
                    _fun0003_ip = 90; continue _fun0003;
 72:
                    var2 = global;
                    var3 = var2.Promise;
                    var2 = var3.resolve;
                    var1 = var2.bind(var3)();
 90:
                    return var1;
                }
            };
            _closure2_slot6 = var3;
            var3 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var4 = arg1;
                    var6 = arg2;
                    var3 = _closure2_slot6;
                    var7 = 'function';
                    var5 = typeof var6;
                    var2 = var6;
                    if(!(var7 === var5)) { _fun0004_ip = 43; continue _fun0004 }
 27:
                    var1 = _closure2_slot5;
                    var5 = undefined;
                    var1 = var1.bind(var5)(var4);
                    var2 = var6.bind(var5)(var1);
 43:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var4, var2);
                    return var1;
                }
            };
            var1['updateControlledSetting'] = var3;
            var2 = function useControlledSetting(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 2;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.useStateFromStores;
                var3 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = new Array(1);
                var3[0] = var2;
                var7 = _closure2_slot4;
                var9 = function() {
                    var3 = _closure2_slot7;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var11 = var6;
                var10 = var4;
                var8 = var3;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var1['useControlledSetting'] = var2;
            return var1;
        }
    };
    var3['defineParentalControlledSetting'] = var4;
    var2 = function wrapParentalControlledSettingWithExperimentDefaults(arg1) {
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
        var3 = function getControlledSetting(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = _closure2_slot0;
                var2 = var4.getControlledSetting;
                var1 = arg1;
                var1 = var2.bind(var4)(var1);
                var4 = null;
                if(!(var4 == var1)) { _fun0005_ip = 75; continue _fun0005 }
 27:
                var2 = _closure2_slot5;
                if(!(var4 != var2)) { _fun0005_ip = 45; continue _fun0005 }
 35:
                var4 = _closure2_slot5;
                var2 = undefined;
                var2 = var4.bind(var2)();
 45:
                var2 = _closure2_slot1;
                var4 = undefined;
                var2 = var2.bind(var4)();
                if(var2) { _fun0005_ip = 64; continue _fun0005 }
 58:
                var2 = _closure2_slot4;
                _fun0005_ip = 72; continue _fun0005;
 64:
                var3 = _closure2_slot3;
                var2 = var3.bind(var4)();
 72:
                var1 = var2;
 75:
                return var1;
            }
        };
        var1['getControlledSetting'] = var3;
        var3 = function useControlledSetting(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = _closure2_slot0;
                var2 = var4.useControlledSetting;
                var1 = arg1;
                var1 = var2.bind(var4)(var1);
                var2 = _closure2_slot2;
                var4 = undefined;
                var2 = var2.bind(var4)();
                var6 = null;
                if(!(var6 == var1)) { _fun0006_ip = 73; continue _fun0006 }
 37:
                var5 = _closure2_slot5;
                if(!(var6 != var5)) { _fun0006_ip = 53; continue _fun0006 }
 45:
                var5 = _closure2_slot5;
                var5 = var5.bind(var4)();
 53:
                if(var2) { _fun0006_ip = 62; continue _fun0006 }
 56:
                var2 = _closure2_slot4;
                _fun0006_ip = 70; continue _fun0006;
 62:
                var3 = _closure2_slot3;
                var2 = var3.bind(var4)();
 70:
                var1 = var2;
 73:
                return var1;
            }
        };
        var1['useControlledSetting'] = var3;
        var2 = function updateControlledSetting(arg1, arg2) {
            var4 = _closure2_slot0;
            var3 = var4.updateControlledSetting;
            var2 = arg1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['updateControlledSetting'] = var2;
        return var1;
    };
    var3['wrapParentalControlledSettingWithExperimentDefaults'] = var2;
    return var1;
})();
// app/modules/regional_feature_config/RegionalFeatureConfigModels.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function SettingsConfig(arg1) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['teenByDefault'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isFeatureTeenByDefault';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var2 = var1.teenByDefault;
            var1 = arg1;
            var1 = var2 & var1;
            var1 = !var1;
            var1 = !var1;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'hasTeenDefaults';
        var1['key'] = var6;
        var5 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = this;
                var3 = var1.teenByDefault;
                var1 = null;
                var4 = var1 != var3;
                var2 = 0;
                var1 = 0;
                if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var3;
case 2:
                var1 = var2 !== var1;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var5 = var4.bind(var1)();
    var _closure1_slot2 = var5;
    var4 = function() {
        var4 = _closure1_slot1;
        var3 = function AgeVerificationConfig(arg1) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['gatedFeatures'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'isFeatureAgeGated';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var2 = var1.gatedFeatures;
            var1 = arg1;
            var1 = var2 & var1;
            var1 = !var1;
            var1 = !var1;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(2);
        var2[0] = var1;
        var1 = {};
        var6 = 'hasAgeGatedFeatures';
        var1['key'] = var6;
        var5 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = this;
                var3 = var1.gatedFeatures;
                var1 = null;
                var4 = var1 != var3;
                var2 = 0;
                var1 = 0;
                if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = var3;
case 2:
                var1 = var2 !== var1;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[1] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot3 = var4;
    var2 = function() {
        var5 = function RegionalFeatureConfig(arg1, arg2) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['settings'] = var2;
            var2 = arg2;
            var3['ageVerification'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot1;
        var1 = {};
        var3 = 'isFeatureAgeGated';
        var1['key'] = var3;
        var3 = function value(arg1) {
            var1 = this;
            var3 = var1.ageVerification;
            var2 = var3.isFeatureAgeGated;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var3;
        var3 = new Array(4);
        var3[0] = var1;
        var1 = {};
        var6 = 'isFeatureTeenByDefault';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.settings;
            var2 = var3.isFeatureTeenByDefault;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'hasAgeGatedFeatures';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.ageVerification;
            var1 = var2.hasAgeGatedFeatures;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'hasTeenDefaults';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.settings;
            var1 = var2.hasTeenDefaults;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'fromConnectionOpen';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var1 = arg1;
            var4 = _closure2_slot0;
            var6 = _closure1_slot2;
            var8 = var1.teen_by_default_settings;
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var9 = var5;
            var3 = new var9[var6](var8, var7);
            var3 = var3 instanceof Object ? var3 : var5;
            var5 = _closure1_slot3;
            var8 = var1.age_gated_features;
            var2 = var5.prototype;
            var2 = Object.create(var2, {constructor: {value: var5}});
            var9 = var2;
            var1 = new var9[var5](var8, var7);
            var7 = var1 instanceof Object ? var1 : var2;
            var2 = var4.prototype;
            var2 = Object.create(var2, {constructor: {value: var4}});
            var9 = var2;
            var8 = var3;
            var1 = new var9[var4](var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var6 = 2;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/regional_feature_config/RegionalFeatureConfigModels.tsx';
    var6 = var7.bind(var8)(var6);
    var3['SettingsConfig'] = var5;
    var3['AgeVerificationConfig'] = var4;
    var3['RegionalFeatureConfig'] = var2;
    return var1;
})();
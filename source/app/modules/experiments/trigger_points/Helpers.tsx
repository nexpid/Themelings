// app/modules/experiments/trigger_points/Helpers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CommonTriggerPoints;
    var2 = function() {
        var4 = _closure1_slot1;
        var3 = function CommonTriggerPointConfiguration(arg1, arg2, arg3) {
            var3 = this;
            var4 = _closure1_slot0;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['experiments'] = var2;
            var2 = arg2;
            var3['triggerPoint'] = var2;
            var2 = arg3;
            var3['params'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'registeredExperimentIds';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var3 = var1.experiments;
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.definition;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'trigger';
        var1['key'] = var6;
        var6 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0001_ip = 14; continue _fun0001 }
 12:
                var3 = {};
 14:
                var4 = var2.triggerPoint;
                var5 = var2.experiments;
                var4 = {};
                var8 = var2.params;
                var9 = var4;
                var6 = copyDataProperties(var9, var8);
                var9 = var4;
                var8 = var3;
                var3 = copyDataProperties(var9, var8);
                var3 = function triggerCommonExperiments(arg1, arg2, arg3) {
                    var3 = arg2;
                    var2 = arg3;
                    var _closure4_slot0 = var2;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.trackExposure;
                        var1 = _closure4_slot0;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var3 = var3.bind(var1)(var1, var5, var4);
                var4 = _closure1_slot2;
                var3 = var4.trackCommonTriggerPointExposures;
                var2 = var2.params;
                var2 = var2.location;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'getExperiments';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1.experiments;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/experiments/trigger_points/Helpers.tsx';
    var4 = var5.bind(var6)(var4);
    var3['CommonTriggerPointConfiguration'] = var2;
    return var1;
})();
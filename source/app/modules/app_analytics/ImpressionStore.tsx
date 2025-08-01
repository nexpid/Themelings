// app/modules/app_analytics/ImpressionStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var8.bind(var9)(var3, var4, var5);
    var5 = var1.Object;
    var4 = var5.freeze;
    var1 = {};
    var8 = null;
    var1['debugTrackedData'] = var8;
    var8 = new Array(0);
    var1['impressions'] = var8;
    var1 = var4.bind(var5)(var1);
    var _closure1_slot2 = var1;
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createWithEqualityFn;
    var4 = function() {
        var1 = _closure1_slot2;
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_analytics/ImpressionStore.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var6 = var2.impressions;
                var2 = new Array(1);
                var5 = 0;
                var7 = var2;
                var4 = arraySpread(var7, var6, var5);
                var3 = _closure2_slot0;
                var2[var4] = var3;
                var3 = 1;
                var3 = var4 + var3;
                var1['impressions'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setCurrentImpression'] = var5;
    var5 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = function(arg1) {
                var1 = {};
                var2 = arg1;
                var4 = var2.impressions;
                var3 = var4.filter;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.sequenceId;
                    var1 = _closure2_slot0;
                    var1 = var1.sequenceId;
                    var1 = var2 !== var1;
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var1['impressions'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['cleanupImpression'] = var5;
    var5 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 1;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = function() {
                var1 = {};
                var2 = {};
                var4 = _closure2_slot0;
                var2['name'] = var4;
                var5 = _closure2_slot1;
                var6 = var2;
                var3 = copyDataProperties(var6, var5);
                var1['debugTrackedData'] = var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setDebugTrackedData'] = var5;
    var3['useImpressionStore'] = var4;
    var4 = function getLocation() {
        var1 = {};
        var _closure2_slot0 = var1;
        var4 = _closure1_slot3;
        var3 = var4.getState;
        var3 = var3.bind(var4)();
        var4 = var3.impressions;
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var4 = var2.type;
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var3 = var3.ImpressionTypes;
                var3 = var3.PAGE;
                if(!(var4 !== var3)) { _fun0001_ip = 69; continue _fun0001 }
 49:
                var4 = _closure2_slot0;
                var3 = var2.name;
                var4['section'] = var3;
                _fun0001_ip = 87; continue _fun0001;
 69:
                var3 = _closure2_slot0;
                var2 = var2.name;
                var3['page'] = var2;
 87:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['getLocation'] = var4;
    var2 = function getImpressionStack() {
        var2 = _closure1_slot3;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.impressions;
        return var1;
    };
    var3['getImpressionStack'] = var2;
    return var1;
})();
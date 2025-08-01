// app/modules/visual_effect_view/native/overrides/VEVOOStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = {};
    var _closure1_slot2 = var1;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.create;
    var4 = function() {
        var1 = _closure1_slot2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/visual_effect_view/native/overrides/VEVOOStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useVisualEffectViewOverrides() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var1 = var2.bind(var1)();
        return var1;
    };
    var3['useVisualEffectViewOverrides'] = var4;
    var4 = function getVisualEffectViewOverrides() {
        var2 = _closure1_slot3;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        return var1;
    };
    var3['getVisualEffectViewOverrides'] = var4;
    var4 = function setVisualEffectViewOverides(arg1) {
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
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setVisualEffectViewOverides'] = var4;
    var2 = function clearVisualEffectViewOverrides() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = _closure1_slot2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearVisualEffectViewOverrides'] = var2;
    return var1;
})();
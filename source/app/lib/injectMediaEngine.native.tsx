// app/lib/injectMediaEngine.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = require;
    var4 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var4;
    var1 = 0;
    var2 = var4[var1];
    var1 = undefined;
    var6 = var3.bind(var1)(var2);
    var5 = var6.inject;
    var2 = {};
    var8 = function supported() {
        var1 = true;
        return var1;
    };
    var2['supported'] = var8;
    var8 = function supportsFeature(arg1) {
        var2 = this;
        var1 = var2.getVoiceEngine;
        var3 = var1.bind(var2)();
        var2 = var3.supportsFeature;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['supportsFeature'] = var8;
    var8 = function setProcessPriority() {
        var1 = undefined;
        return var1;
    };
    var2['setProcessPriority'] = var8;
    var8 = function getVoiceEngine() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var1 = var1.default;
        return var1;
    };
    var2['getVoiceEngine'] = var8;
    var7 = function getVoiceFilters() {
        var1 = {};
        return var1;
    };
    var2['getVoiceFilters'] = var7;
    var2 = var5.bind(var6)(var2);
    var2 = 2;
    var2 = var4[var2];
    var4 = var3.bind(var1)(var2);
    var3 = var4.fileFinishedImporting;
    var2 = 'lib/injectMediaEngine.native.tsx';
    var2 = var3.bind(var4)(var2);
    return var1;
})();
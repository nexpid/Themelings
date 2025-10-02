// app/modules/app_startup/awaitExperiments.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Future;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var12 = var7;
    var4 = new var12[var4](var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot0 = var4;
    var4 = null;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_startup/awaitExperiments.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function beginLoadedExperimentsTimeout() {
        var1 = global;
        var4 = var1.setTimeout;
        var1 = undefined;
        var3 = function() {
            var3 = _closure1_slot0;
            var1 = var3.resolve;
            var1 = var1.bind(var3)();
            var1 = null;
            _closure1_slot1 = var1;
            var1 = undefined;
            return var1;
        };
        var2 = 1000;
        var3 = var4.bind(var1)(var3, var2);
        _closure1_slot1 = var3;
        return var1;
    };
    var3['beginLoadedExperimentsTimeout'] = var4;
    var4 = function onExperimentsLoaded() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var2 = null;
            if(!(var2 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = var3.resolve;
            var2 = var2.bind(var3)();
            var2 = global;
            var3 = var2.clearTimeout;
            var2 = _closure1_slot1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var3['onExperimentsLoaded'] = var4;
    var2 = function getPromise() {
        var1 = _closure1_slot0;
        var1 = var1.promise;
        return var1;
    };
    var3['getPromise'] = var2;
    return var1;
})();
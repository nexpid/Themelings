// app/modules/safety_flows/SafetyFlowsTaskContext.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var5 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var7)(var3, var1, var4);
    var1 = 0;
    var5 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var5);
    var _closure1_slot0 = var7;
    var5 = var7.createContext;
    var4 = null;
    var4 = var5.bind(var7)(var4);
    var _closure1_slot1 = var4;
    var5 = 1;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_flows/SafetyFlowsTaskContext.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SafetyFlowTaskContext'] = var4;
    var2 = function useSafetyFlowTask() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = var3.useContext;
            var1 = _closure1_slot1;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 30; continue _fun0001 }
 28:
            return var1;
 30:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var4 = 'useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider';
            var5 = var2;
            var1 = new var5[var3](var4, var3);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var3['useSafetyFlowTask'] = var2;
    return var1;
})();
// app/modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot0 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot1 = var4;
    var7 = var8.createContext;
    var4 = null;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/hooks/useAwaitAnimationComplete.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function AwaitAnimationContext(arg1) {
        var2 = arg1;
        var1 = var2.children;
        var7 = var2.handleQueuedCallback;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot0;
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function() {
            var1 = {};
            var2 = _closure2_slot0;
            var1['handleQueuedCallback'] = var2;
            return var1;
        };
        var5 = var5.bind(var6)(var3, var4);
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var3 = var2.Provider;
        var2 = {};
        var2['value'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['AwaitAnimationContext'] = var4;
    var2 = function useAwaitAnimationCompletion() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = var3.useContext;
            var1 = _closure1_slot2;
            var1 = var2.bind(var3)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0001_ip = 36; continue _fun0001 }
 28:
            var1 = var1.handleQueuedCallback;
            _fun0001_ip = 45; continue _fun0001;
 36:
            var1 = function(arg1) {
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
 45:
            return var1;
        }
    };
    var3['useAwaitAnimationCompletion'] = var2;
    return var1;
})();
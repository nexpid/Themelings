// app/hooks/useLeadingEdgeDebounce.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var6 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot1 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'hooks/useLeadingEdgeDebounce.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1, arg2) {
        var7 = arg1;
        var6 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot1;
        var4 = var5.useRef;
        var3 = true;
        var3 = var4.bind(var5)(var3);
        var _closure2_slot2 = var3;
        var3 = var5.useState;
        var8 = var3.bind(var5)(var7);
        var4 = _closure1_slot0;
        var3 = undefined;
        var1 = 2;
        var4 = var4.bind(var3)(var8, var1);
        var1 = 0;
        var1 = var4[var1];
        var3 = 1;
        var3 = var4[var3];
        var _closure2_slot3 = var3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = global;
                var6 = var2.setTimeout;
                var4 = _closure2_slot1;
                var5 = undefined;
                var3 = function() {
                    var4 = _closure2_slot3;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot2;
                    var2 = true;
                    var3['current'] = var2;
                    return var1;
                };
                var3 = var6.bind(var5)(var3, var4);
                var _closure3_slot0 = var3;
                var3 = _closure2_slot2;
                var3 = var3.current;
                if(!var3) { _fun0001_ip = 61; continue _fun0001 }
 48:
                var4 = _closure2_slot3;
                var3 = _closure2_slot0;
                var3 = var4.bind(var5)(var3);
 61:
                var3 = _closure2_slot2;
                var2 = false;
                var3['current'] = var2;
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useLeadingEdgeDebounce'] = var2;
    return var1;
})();
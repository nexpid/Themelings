// app/design/components/Navigator/native/useFocusRefOnNavigation.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/useFocusRefOnNavigation.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFocusRefOnNavigation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.inputRef;
            var _closure2_slot0 = var7;
            var8 = var1.enabled;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = true;
case 2:
            var _closure2_slot1 = var8;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 1;
            var4 = var6[var4];
            var5 = var5.bind(var1)(var4);
            var4 = var5.useIsFocused;
            var6 = var4.bind(var5)();
            _closure2_slot2 = var6;
            var5 = _closure1_slot2;
            var4 = var5.useEffect;
            var3 = new Array(3);
            var3[0] = var8;
            var3[1] = var7;
            var3[2] = var6;
            var2 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 2;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.runAfterInteractions;
                var2 = function() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var2 = _closure2_slot1;
                        if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = _closure2_slot2;
case 4:
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var1 = _closure2_slot0;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                        var1 = var2.focus;
                        var1 = var1.bind(var2)();
case 6:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
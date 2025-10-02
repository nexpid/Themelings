// app/design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BackHandler;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/useNavigatorBackPressHandler.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useNavigatorBackPressHandler(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var7 = _closure1_slot2;
        var3 = var7.useRef;
        var3 = var3.bind(var7)(var4);
        var _closure2_slot1 = var3;
        var4 = var7.useLayoutEffect;
        var3 = function() {
            var2 = _closure2_slot1;
            var1 = _closure2_slot0;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var3 = var4.bind(var7)(var3);
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.useFocusEffect;
        var6 = var7.useCallback;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isIOS;
                var4 = var4.bind(var5)();
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = _closure1_slot3;
                var5 = var6.addEventListener;
                var4 = 'hardwareBackPress';
                var3 = function() {
                    var2 = _closure2_slot1;
                    var1 = var2.current;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var5.bind(var6)(var4, var3);
                var _closure3_slot0 = var3;
                var2 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.remove;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var2;
case 2:
                return var1;
            }
        };
        var2 = new Array(0);
        var2 = var6.bind(var7)(var5, var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['useNavigatorBackPressHandler'] = var2;
    return var1;
})();
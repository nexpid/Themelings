// app/modules/routing/native/useBackPressHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var5 = var7[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.BackHandler;
    var _closure1_slot3 = var5;
    var2 = var2.NativeModules;
    var _closure1_slot4 = var2;
    var2 = {};
    var5 = function minimize() {
        var1 = _closure1_slot4;
        var2 = var1.MinimizeApp;
        var1 = var2.minimizeApp;
        var1 = var1.bind(var2)();
        var1 = true;
        return var1;
    };
    var2['minimize'] = var5;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/routing/native/useBackPressHandler.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function useBackPressHandler(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arguments[1];
            var _closure2_slot0 = var4;
            var1 = undefined;
            if(!(var6 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = true;
case 2:
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var1;
            var5 = _closure1_slot2;
            var3 = var5.useRef;
            var3 = var3.bind(var5)(var4);
            _closure2_slot2 = var3;
            var4 = var5.useLayoutEffect;
            var3 = function() {
                var2 = _closure2_slot2;
                var1 = _closure2_slot0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
            var4 = var5.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 2;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.isIOS;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot1;
                    if(!var4) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var6 = _closure1_slot3;
                    var5 = var6.addEventListener;
                    var4 = 'hardwareBackPress';
                    var3 = function() {
                        var2 = _closure2_slot2;
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
case 4:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['BackPressHandler'] = var2;
    return var1;
})();
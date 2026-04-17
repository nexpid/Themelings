// app/modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx
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
    var4 = var4.NOOP;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var7 = {};
    var4 = function registerDismiss() {
        var1 = _closure1_slot1;
        return var1;
    };
    var7['registerDismiss'] = var4;
    var7['handleDismissCoachmarkOnScroll'] = var1;
    var4 = var8.createContext;
    var4 = var4.bind(var8)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/CollectiblesCoachmarkScrollDismissContext.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useCollectiblesCoachmarkScrollDismissContext() {
        var3 = _closure1_slot0;
        var2 = var3.useContext;
        var1 = _closure1_slot3;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useCollectiblesCoachmarkScrollDismissContext'] = var4;
    var2 = function CollectiblesCoachmarkScrollDismissProvider(arg1) {
        var1 = arg1;
        var1 = var1.children;
        var6 = _closure1_slot0;
        var4 = var6.useRef;
        var5 = null;
        var4 = var4.bind(var6)(var5);
        var _closure2_slot0 = var4;
        var4 = var6.useRef;
        var4 = var4.bind(var6)(var5);
        var _closure2_slot1 = var4;
        var7 = var6.useCallback;
        var5 = function(arg1) {
            var4 = arg1;
            var _closure3_slot0 = var4;
            var3 = _closure2_slot0;
            var3['current'] = var4;
            var3 = _closure2_slot1;
            var2 = null;
            var3['current'] = var2;
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.current;
                    var2 = _closure3_slot0;
                    if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = null;
                    var3['current'] = var2;
                    var1 = _closure2_slot1;
                    var1['current'] = var2;
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var4 = new Array(0);
        var8 = var7.bind(var6)(var5, var4);
        var _closure2_slot2 = var8;
        var7 = var6.useCallback;
        var5 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var2 = var2.current;
                var3 = null;
                if(!(var3 != var2)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var4 = arg1;
                var4 = var4.nativeEvent;
                var4 = var4.contentOffset;
                var5 = _closure2_slot1;
                var5 = var5.current;
                if(!(var3 == var5)) { _fun0002_ip = 6; continue _fun0002 }
case 2:
                var6 = _closure2_slot1;
                var5 = var4.x;
                var6['current'] = var5;
                _fun0002_ip = 4; continue _fun0002;
case 6:
                var5 = global;
                var6 = var5.Math;
                var5 = var6.abs;
                var7 = var4.x;
                var4 = _closure2_slot1;
                var4 = var4.current;
                var4 = var7 - var4;
                var5 = var5.bind(var6)(var4);
                var4 = 16;
                if(!(var5 >= var4)) { _fun0002_ip = 4; continue _fun0002 }
case 7:
                var4 = _closure2_slot0;
                var4['current'] = var3;
                var1 = _closure2_slot1;
                var1['current'] = var3;
                var1 = undefined;
                var1 = var2.bind(var1)();
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var4 = new Array(0);
        var7 = var7.bind(var6)(var5, var4);
        var _closure2_slot3 = var7;
        var5 = var6.useMemo;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var7;
        var3 = function() {
            var1 = {};
            var3 = _closure2_slot2;
            var1['registerDismiss'] = var3;
            var2 = _closure2_slot3;
            var1['handleDismissCoachmarkOnScroll'] = var2;
            return var1;
        };
        var5 = var5.bind(var6)(var3, var4);
        var4 = _closure1_slot2;
        var2 = _closure1_slot3;
        var3 = var2.Provider;
        var2 = {};
        var2['value'] = var5;
        var2['children'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['CollectiblesCoachmarkScrollDismissProvider'] = var2;
    return var1;
})();
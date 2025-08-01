// app/design/components/Sheet/native/useBottomSheetRef.tsx
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Sheet/native/useBottomSheetRef.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useBottomSheetRef() {
        var5 = _closure1_slot0;
        var3 = var5.useRef;
        var2 = null;
        var3 = var3.bind(var5)(var2);
        var _closure2_slot0 = var3;
        var4 = var5.useCallback;
        var2 = new Array(1);
        var2[0] = var3;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var2 = var1.current;
                var1 = null;
                if(!(var1 != var2)) { _fun0001_ip = 28; continue _fun0001 }
 18:
                var1 = var2.closeActionSheet;
                var1 = var1.bind(var2)();
 28:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = {};
        var1['bottomSheetRef'] = var3;
        var1['bottomSheetClose'] = var2;
        return var1;
    };
    var3['useBottomSheetRef'] = var2;
    return var1;
})();
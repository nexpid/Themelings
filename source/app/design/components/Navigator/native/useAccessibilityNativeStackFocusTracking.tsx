// app/design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Navigator/native/useAccessibilityNativeStackFocusTracking.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAccessibilityNativeStackFocusTracking() {
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = function() {
            var1 = false;
            var _closure3_slot0 = var1;
            var1 = {};
            var3 = function transitionStart(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.data;
                    var1 = var1.closing;
                    if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var1 = _closure3_slot0;
                    if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var1 = false;
                    _closure3_slot0 = var1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 2;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
                    _fun0001_ip = 4; continue _fun0001;
case 2:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 1;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.bind(var2)();
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['transitionStart'] = var3;
            var2 = function beforeRemove() {
                var1 = true;
                _closure3_slot0 = var1;
                var1 = undefined;
                return var1;
            };
            var1['beforeRemove'] = var2;
            return var1;
        };
        var1 = new Array(0);
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useAccessibilityNativeStackFocusTracking'] = var2;
    return var1;
})();
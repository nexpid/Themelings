// app/utils/web/WindowInteractingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = null;
    var _closure1_slot0 = var1;
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/web/WindowInteractingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = ['click', 'mousedown', 'mouseup', 'keydown', 'keyup', 'keypress', 'contextmenu'];
    var3['INTERACTION_EVENTS'] = var4;
    var4 = function getCurrentlyInteractingWindowId() {
        var1 = _closure1_slot0;
        return var1;
    };
    var3['getCurrentlyInteractingWindowId'] = var4;
    var4 = function setCurrentlyInteractingWindowId(arg1) {
        var1 = arg1;
        _closure1_slot0 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setCurrentlyInteractingWindowId'] = var4;
    var2 = function clearCurrentlyInteractingWindowId(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot0;
            var1 = arg1;
            if(!(var3 === var1)) { _fun0001_ip = 20; continue _fun0001 }
 14:
            var1 = null;
            _closure1_slot0 = var1;
 20:
            var1 = undefined;
            return var1;
        }
    };
    var3['clearCurrentlyInteractingWindowId'] = var2;
    return var1;
})();
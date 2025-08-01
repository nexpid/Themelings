// app/modules/modals/native/SimpleLoadingModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/modals/native/SimpleLoadingModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showSimpleLoadingModal(arg1, arg2) {
        var7 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var8;
        var6 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 0;
        var5 = var3[var1];
        var1 = undefined;
        var6 = var6.bind(var1)(var5);
        var5 = var6.pushLazy;
        var9 = _closure1_slot0;
        var4 = 2;
        var4 = var3[var4];
        var9 = var9.bind(var1)(var4);
        var4 = 1;
        var4 = var3[var4];
        var3 = var3.paths;
        var4 = var9.bind(var1)(var4, var3);
        var3 = {};
        var13 = var3;
        var12 = var8;
        var8 = copyDataProperties(var13, var12);
        var8 = function onDismissed() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.popWithKey;
                var3 = _closure2_slot0;
                var3 = var4.bind(var5)(var3);
                var3 = _closure2_slot1;
                var4 = var3.onDismissed;
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 72; continue _fun0001 }
 58:
                var3 = _closure2_slot1;
                var2 = var3.onDismissed;
                var2 = var2.bind(var3)();
 72:
                return var1;
            }
        };
        var2 = 'onDismissed';
        var3[var2] = var8;
        var2 = {};
        var8 = 'none';
        var2['animation'] = var8;
        var14 = var6;
        var13 = var4;
        var12 = var3;
        var11 = var7;
        var10 = var2;
        var2 = var14[var5](var13, var12, var11, var10, var9);
        return var1;
    };
    var3['showSimpleLoadingModal'] = var2;
    return var1;
})();
// app/modules/dismissible_content/native/DismissibleActionSheet.tsx
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
    var4 = 'modules/dismissible_content/native/DismissibleActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DismissibleActionSheet(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var6 = _closure1_slot1;
        var3 = 1;
        var3 = var6[var3];
        var6 = undefined;
        var4 = var4.bind(var6)(var3);
        var3 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var6 = var3.bind(var1)(var2);
            var5 = var6.openLazy;
            var7 = _closure2_slot0;
            var2 = var7.importer;
            var4 = var2.bind(var7)();
            var3 = var7.actionSheetKey;
            var2 = {};
            var11 = var2;
            var10 = var7;
            var7 = copyDataProperties(var11, var10);
            var8 = function markAsDismissed(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.hideActionSheet;
                var4 = _closure2_slot0;
                var2 = var4.actionSheetKey;
                var2 = var3.bind(var5)(var2);
                var3 = var4.markAsDismissed;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var7 = 'markAsDismissed';
            var2[var7] = var8;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var3 = var4.bind(var6)(var3);
        var4 = _closure1_slot2;
        var3 = var4.useEffect;
        var6 = var5.actionSheetKey;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = var5.hideSheetOnUnmount;
        var2[1] = var5;
        var1 = function() {
            var1 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var3 = var2.hideSheetOnUnmount;
                    var2 = null;
                    var2 = var2 != var3;
                    if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot0;
                    var2 = var3.hideSheetOnUnmount;
case 2:
                    if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.hideActionSheet;
                    var1 = _closure2_slot0;
                    var1 = var1.actionSheetKey;
                    var1 = var2.bind(var3)(var1);
case 4:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = null;
        return var1;
    };
    var3['DismissibleActionSheet'] = var2;
    return var1;
})();
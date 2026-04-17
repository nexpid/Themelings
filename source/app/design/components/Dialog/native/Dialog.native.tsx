// app/design/components/Dialog/native/Dialog.native.tsx
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
    var4 = var4.StyleSheet;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Dialog/native/Dialog.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Dialog(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var7 = var3.dialogKey;
            var9 = var3.onDismiss;
            var12 = var3.zIndex;
            var2 = {'dialogKey': 0, 'onDismiss': 0, 'zIndex': 0};
            var8 = null;
            var15 = var2;
            var14 = null;
            var1 = silentSetPrototypeOf(var15, var14);
            var15 = {};
            var14 = var3;
            var13 = var2;
            var5 = copyDataProperties(var15, var14, var13);
            var2 = _closure1_slot2;
            var1 = var2.useId;
            var6 = var1.bind(var2)();
            var4 = _closure1_slot4;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 3;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.AccessibilityView;
            var1 = {};
            var10 = _closure1_slot3;
            var11 = var10.absoluteFill;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {};
            var11['zIndex'] = var12;
            var10[1] = var11;
            var1['style'] = var10;
            var10 = true;
            var1['accessibilityViewIsModal'] = var10;
            var1['onAccessibilityEscape'] = var9;
            if(!(var8 != var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var7;
case 2:
            var1['nativeID'] = var6;
            var15 = var1;
            var14 = var5;
            var5 = copyDataProperties(var15, var14);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['Dialog'] = var2;
    return var1;
})();
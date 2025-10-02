// app/modules/expression_picker/native/useExpressionPickerListWidth.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.PADDING_HORIZONTAL;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ACTION_SHEET_MAX_WIDTH;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/expression_picker/native/useExpressionPickerListWidth.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useExpressionPickerListWidth(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 2;
            var1 = var7[var4];
            var3 = undefined;
            var1 = var6.bind(var3)(var1);
            var1 = var1.bind(var3)();
            var5 = var1.width;
            var1 = 3;
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var1 = var1.bind(var3)();
            var3 = var1.left;
            var3 = var5 - var3;
            var1 = var1.right;
            var3 = var3 - var1;
            var1 = _closure1_slot2;
            var1 = var4 * var1;
            var5 = var3 - var1;
            var3 = arg1;
            var1 = var5;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = arg2;
            var1 = var5;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.min;
            var2 = _closure1_slot3;
            var1 = var3.bind(var4)(var5, var2);
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
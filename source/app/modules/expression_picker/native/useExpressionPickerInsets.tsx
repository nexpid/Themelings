// app/modules/expression_picker/native/useExpressionPickerInsets.tsx
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot3 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/expression_picker/native/useExpressionPickerInsets.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useExpressionPickerInsets(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.hasCategories;
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var1 = 2;
            var1 = var7[var1];
            var5 = undefined;
            var1 = var4.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var10 = var1.bottom;
            var _closure2_slot0 = var10;
            var1 = 3;
            var1 = var7[var1];
            var4 = var4.bind(var5)(var1);
            var1 = {'includeKeyboardHeightAndroid': true, 'includeKeyboardHeightIOS': true, 'includeCustomKeyboardHeightIOS': false};
            var1 = var4.bind(var5)(var1);
            var1 = var1.insets;
            var4 = var1.bottom;
            var1 = {};
            var9 = _closure1_slot2;
            var8 = var9.useMemo;
            var7 = new Array(1);
            var7[0] = var10;
            var3 = function() {
                var1 = {};
                var2 = _closure2_slot0;
                var1['paddingBottom'] = var2;
                return var1;
            };
            var3 = var8.bind(var9)(var3, var7);
            var1['safeAreaStyle'] = var3;
            var3 = 0;
            if(!var6) { _fun0001_ip = 137; continue _fun0001 }
 133:
            var3 = _closure1_slot3;
 137:
            var3 = var4 + var3;
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 4;
            var2 = var6[var2];
            var2 = var4.bind(var5)(var2);
            var2 = var2.spacing;
            var2 = var2.PX_16;
            var2 = var3 + var2;
            var1['safeAreaBottomKeyboardAware'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
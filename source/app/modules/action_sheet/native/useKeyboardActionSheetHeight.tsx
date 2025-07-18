// app/modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = function computeKeyboardActionSheetHeight(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = arg2;
            var4 = var2.height;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 0;
            var2 = var7[var3];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var2 = var2.NAV_BAR_HEIGHT_MULTILINE;
            var4 = var4 - var2;
            var2 = var1.top;
            var2 = var4 - var2;
            var4 = 1;
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(!var4) { _fun0001_ip = 83; continue _fun0001 }
 78:
            var3 = var1.bottom;
 83:
            var1 = arg3;
            var3 = var1 + var3;
            if(!(var3 >= var2)) { _fun0001_ip = 97; continue _fun0001 }
 94:
            var2 = var3;
 97:
            var1 = {};
            var1['minimum'] = var3;
            var1['maximum'] = var2;
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 5;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/useKeyboardActionSheetHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useKeyboardActionSheetHeight() {
        var5 = _closure1_slot3;
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var1 = 2;
        var1 = var7[var1];
        var4 = undefined;
        var1 = var6.bind(var4)(var1);
        var3 = var1.bind(var4)();
        var1 = 3;
        var1 = var7[var1];
        var2 = var6.bind(var4)(var1);
        var1 = {};
        var8 = true;
        var1['ignoreKeyboard'] = var8;
        var2 = var2.bind(var4)(var1);
        var1 = 4;
        var1 = var7[var1];
        var1 = var6.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getKeyboardActionSheetHeight() {
        var5 = _closure1_slot3;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 2;
        var1 = var7[var1];
        var4 = undefined;
        var2 = var6.bind(var4)(var1);
        var1 = var2.getSafeAreaInsets;
        var3 = var1.bind(var2)();
        var1 = 3;
        var1 = var7[var1];
        var8 = var6.bind(var4)(var1);
        var2 = var8.getWindowDimensions;
        var1 = {};
        var9 = true;
        var1['ignoreKeyboard'] = var9;
        var2 = var2.bind(var8)(var1);
        var1 = 4;
        var1 = var7[var1];
        var6 = var6.bind(var4)(var1);
        var1 = var6.getCustomKeyboardHeight;
        var1 = var1.bind(var6)();
        var1 = var5.bind(var4)(var3, var2, var1);
        return var1;
    };
    var3['getKeyboardActionSheetHeight'] = var2;
    return var1;
})();
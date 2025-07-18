// app/modules/safe_area/useSafeAreaInsets.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = function STORE_GETTER(arg1) {
        var1 = arg1;
        var1 = var1.safeAreaInsets;
        return var1;
    };
    var _closure1_slot2 = var1;
    var1 = 1;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/safe_area/useSafeAreaInsets.native.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useSafeAreaInsets() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 0;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var4.bind(var3)(var2);
        var1 = _closure1_slot2;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var4;
    var2 = function getSafeAreaInsets() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.safeAreaInsets;
        return var1;
    };
    var3['getSafeAreaInsets'] = var2;
    return var1;
})();
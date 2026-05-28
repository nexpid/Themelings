// app/modules/screen/native/useScaledTextLineHeight.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var5 = function scaleLineHeight(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot3;
            var1 = var2.get;
            var1 = var1.bind(var2)(var5);
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 0;
            var4 = var4[var2];
            var2 = undefined;
            var4 = var6.bind(var2)(var4);
            var2 = var4.getScaledHeightForText;
            var2 = var2.bind(var4)(var5);
            var4 = _closure1_slot3;
            var3 = var4.set;
            var3 = var3.bind(var4)(var5, var2);
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot4 = var5;
    var4 = function scaleTextLineHeight(arg1, arg2) {
        var3 = _closure1_slot4;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 1;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var4.bind(var2)(var1);
        var4 = var1.TextStyleSheet;
        var1 = arg1;
        var1 = var4[var1];
        var1 = var1.lineHeight;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot5 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var8 = true;
    var9['value'] = var8;
    var8 = '__esModule';
    var8 = var10.bind(var11)(var3, var8, var9);
    var1 = var1.Map;
    var8 = var1.prototype;
    var8 = Object.create(var8, {constructor: {value: var1}});
    var15 = var8;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var8;
    var _closure1_slot3 = var1;
    var1 = 3;
    var6 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/screen/native/useScaledTextLineHeight.android.tsx';
    var6 = var7.bind(var8)(var6);
    var3['scaleLineHeight'] = var5;
    var3['scaleTextLineHeight'] = var4;
    var2 = function useScaledTextLineHeight(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var4 = var4.bind(var3)(var2);
        var2 = var4.useFontScale;
        var2 = var2.bind(var4)();
        var2 = _closure1_slot5;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['useScaledTextLineHeight'] = var2;
    return var1;
})();
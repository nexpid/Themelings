// app/modules/stickers/native/StickerPickerStore.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var4);
    var4 = var7.create;
    var2 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var3 = null;
        var1['packToScrollTo'] = var3;
        var2 = function setPackToScrollTo(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.packToScrollTo;
                        var2 = _closure3_slot0;
                        if(!(var4 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var2 = {};
                        var3 = _closure3_slot0;
                        var2['packToScrollTo'] = var3;
                        var1 = var2;
case 2:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['setPackToScrollTo'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/stickers/native/StickerPickerStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['useStickerPickerStore'] = var2;
    return var1;
})();
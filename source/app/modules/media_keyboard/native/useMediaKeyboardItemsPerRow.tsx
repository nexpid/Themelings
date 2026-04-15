// app/modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/useMediaKeyboardItemsPerRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useMediaKeyboardItemsPerRow() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = 1;
            var4 = var3[var8];
            var6 = undefined;
            var4 = var5.bind(var6)(var4);
            var7 = var4.bind(var6)();
            var4 = _closure1_slot0;
            var3 = var3[var8];
            var3 = var4.bind(var6)(var3);
            var3 = var3.WindowSizeClassifier;
            var3 = var3.XLARGE;
            var4 = 8;
            if(!(var3 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var5.bind(var6)(var3);
            var3 = var3.WindowSizeClassifier;
            var3 = var3.LARGE;
            var4 = 6;
            if(!(var3 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var5.bind(var6)(var3);
            var3 = var3.WindowSizeClassifier;
            var3 = var3.NORMAL;
            var4 = 4;
            if(!(var3 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var8];
            var3 = var5.bind(var6)(var3);
            var3 = var3.WindowSizeClassifier;
            var3 = var3.SMALL;
            var4 = 3;
            if(!(var3 !== var7)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var3 = global;
            var6 = var3.Error;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var3 = 'Unknown window size classifier: ';
            var10 = var5.bind(var3)(var7);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var11 = var5;
            var3 = new var11[var6](var10, var9);
            var3 = var3 instanceof Object ? var3 : var5;
            throw var3;
case 2:
            var _closure2_slot0 = var4;
            var7 = _closure1_slot3;
            var2 = var7.useRef;
            var3 = 17;
            var3 = var3 * var4;
            var2 = var2.bind(var7)(var3);
            var _closure2_slot1 = var2;
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var4;
            var1 = function() {
                var2 = _closure2_slot1;
                var3 = _closure2_slot0;
                var1 = 17;
                var1 = var1 * var3;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = {};
            var1['itemsPerRow'] = var4;
            var1['itemsPageSize'] = var3;
            var1['itemsPageSizeRef'] = var2;
            return var1;
        }
    };
    var3['useMediaKeyboardItemsPerRow'] = var2;
    return var1;
})();
// app/modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var4 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getFastestListSectionsWithErrorChecking(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.itemSizes;
            var2 = var2.length;
            var4 = 1000;
            var2 = var2 > var4;
            if(var2) { _fun0001_ip = 42; continue _fun0001 }
 27:
            var3 = var1.itemKeys;
            var3 = var3.length;
            var2 = var3 > var4;
 42:
            if(!var2) { _fun0001_ip = 147; continue _fun0001 }
 45:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 0;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var4.bind(var2)(var3);
            var4 = var5.logFastestListError;
            var3 = {};
            var2 = var1.itemSizes;
            var2 = var2.length;
            var3['itemSizesLength'] = var2;
            var2 = var1.itemKeys;
            var2 = var2.length;
            var3['itemKeysLength'] = var2;
            var2 = var1.listId;
            var3['listId'] = var2;
            var2 = 'Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration.';
            var3['detail'] = var2;
            var2 = 'Non-uniform configuration with large data set detected.';
            var2 = var4.bind(var5)(var2, var3);
 147:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
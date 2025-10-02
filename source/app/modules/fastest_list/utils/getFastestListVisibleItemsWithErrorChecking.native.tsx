// app/modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
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
    var4 = 'modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getFastestListVisibleItemsWithErrorChecking(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var2 = arg3;
            var4 = var1.sectionStart;
            var3 = var2.length;
            var3 = var4 > var3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var1.sectionEnd;
            var4 = var2.length;
            var3 = var5 > var4;
case 2:
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var7 = var5.bind(var3)(var4);
            var5 = var7.logFastestListError;
            var4 = {};
            var4['listId'] = var6;
            var4['sections'] = var2;
            var4['visibleItems'] = var1;
            var3 = 'Visible items `sectionStart/End` is greater than the number of sections';
            var3 = var5.bind(var7)(var3, var4);
case 4:
            var4 = var1.itemStart;
            var3 = var1.sectionStart;
            var3 = var2[var3];
            var3 = var4 > var3;
            if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5 = var1.itemEnd;
            var4 = var1.sectionEnd;
            var4 = var2[var4];
            var3 = var5 > var4;
case 6:
            if(!var3) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.logFastestListError;
            var3 = {};
            var3['listId'] = var6;
            var3['sections'] = var2;
            var3['visibleItems'] = var1;
            var2 = 'Visible items `itemStart/End` is greater than the number of items in the first section';
            var2 = var4.bind(var5)(var2, var3);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
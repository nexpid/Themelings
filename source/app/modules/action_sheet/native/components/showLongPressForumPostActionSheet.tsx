// app/modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 3;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/action_sheet/native/components/showLongPressForumPostActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function showLongPressForumPostActionSheet(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arguments[2];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 0;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var2 = var3.hideActionSheet;
case 2:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 0;
            var5 = var3[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.openLazy;
            var7 = _closure1_slot0;
            var4 = 2;
            var4 = var3[var4];
            var7 = var7.bind(var1)(var4);
            var4 = 1;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var7.bind(var1)(var4, var3);
            var3 = {};
            var7 = arg1;
            var3['thread'] = var7;
            var7 = arg2;
            var3['parentChannel'] = var7;
            var3['onClose'] = var2;
            var2 = 'ForumPostLongPressActionSheet';
            var2 = var5.bind(var6)(var4, var2, var3);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
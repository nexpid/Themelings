// app/modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/showMediaKeyboardActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function hideMediaKeyboardActionSheet() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.hideActionSheet;
        var2 = 'MEDIA_KEYBOARD_ACTION_SHEET';
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['hideMediaKeyboardActionSheet'] = var4;
    var4 = function showMediaKeyboardActionSheet(arg1) {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var4 = var2[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = _closure1_slot0;
        var3 = 3;
        var3 = var2[var3];
        var4 = var4.bind(var1)(var3);
        var3 = 2;
        var3 = var2[var3];
        var2 = var2.paths;
        var4 = var4.bind(var1)(var3, var2);
        var3 = 'MEDIA_KEYBOARD_ACTION_SHEET';
        var2 = arg1;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var3['showMediaKeyboardActionSheet'] = var4;
    var2 = function presentLimitedLibraryPicker() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot3;
            var4 = var1.NativePermissionManager;
            var2 = null;
            var3 = var2 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.presentLimitedLibraryPicker;
            var3 = var2 == var3;
            var1 = undefined;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var4.presentLimitedLibraryPicker;
            var1 = var3.bind(var4)();
case 2:
            if(!(var2 == var1)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var1 = var2.bind(var3)();
case 5:
            return var1;
        }
    };
    var3['presentLimitedLibraryPicker'] = var2;
    return var1;
})();
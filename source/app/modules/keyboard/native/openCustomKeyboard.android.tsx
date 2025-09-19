// app/modules/keyboard/native/openCustomKeyboard.android.tsx
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
    var1 = 4;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/keyboard/native/openCustomKeyboard.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openCustomKeyboard(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var _closure2_slot0 = var3;
        var3 = var1.chatInputRef;
        var _closure2_slot1 = var3;
        var3 = var1.chatInputNativeRef;
        var _closure2_slot2 = var3;
        var7 = var1.keyboardParams;
        var _closure2_slot3 = var7;
        var1 = var1.secondaryTextFieldRef;
        var _closure2_slot4 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 0;
        var3 = var5[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var3 = var6.setKeyboardType;
        var3 = var3.bind(var6)(var7);
        var3 = 1;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.runAfterInteractions;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot1;
                var3 = var1.current;
                var1 = var3.blur;
                var1 = var1.bind(var3)();
                var1 = _closure2_slot4;
                var6 = null;
                var3 = var6 == var1;
                var1 = undefined;
                var4 = undefined;
                if(var3) { _fun0001_ip = 55; continue _fun0001 }
 39:
                var5 = _closure2_slot4;
                var5 = var5.current;
                var3 = var6 == var5;
                var4 = var5;
 55:
                if(var3) { _fun0001_ip = 68; continue _fun0001 }
 58:
                var3 = var4.blur;
                var3 = var3.bind(var4)();
 68:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 2;
                var4 = var5[var4];
                var9 = var6.bind(var1)(var4);
                var8 = var9.openPortalKeyboard;
                var4 = _closure2_slot3;
                var7 = var4.type;
                var6 = _closure2_slot0;
                var4 = _closure2_slot1;
                var4 = var8.bind(var9)(var7, var6, var4);
                var4 = _closure1_slot1;
                var3 = 3;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.openCustomKeyboard;
                var2 = _closure2_slot2;
                var2 = var2.current;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
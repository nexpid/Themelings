// app/utils/native/KeyboardManagerUtils.tsx
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
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/native/KeyboardManagerUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function dismissGlobalKeyboard() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot3;
            var4 = var3.KeyboardManager;
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var3 = var3.bind(var1)(var2);
            var2 = var3.dismissGlobalKeyboard;
            var2 = var2.bind(var3)();
case 4:
            return var1;
        }
    };
    var3['dismissGlobalKeyboard'] = var4;
    var4 = function clearCurrentFocusAndDismissKeyboard() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 3:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var3 = var3.bind(var1)(var2);
            var2 = var3.clearCurrentFocusAndDismissKeyboard;
            var2 = var2.bind(var3)();
case 6:
            return var1;
        }
    };
    var3['clearCurrentFocusAndDismissKeyboard'] = var4;
    var2 = function onKeyboardChanged(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 3:
            var3 = _closure1_slot3;
            var3 = var3.KeyboardManager;
            var4 = var3.onKeyboardChanged;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 8; continue _fun0003 }
case 2:
            var3 = _closure1_slot3;
            var5 = var3.KeyboardManager;
            var4 = var5.onKeyboardChanged;
            var3 = global;
            var3 = var3.open;
            var3 = var4.bind(var5)(var3);
            _fun0003_ip = 8; continue _fun0003;
case 6:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.onKeyboardChanged;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
case 8:
            return var1;
        }
    };
    var3['onKeyboardChanged'] = var2;
    return var1;
})();
// app/utils/native/KeyboardManagerUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0001_ip = 59; continue _fun0001 }
 37:
            var3 = _closure1_slot3;
            var4 = var3.KeyboardManager;
            var3 = var4.dismissGlobalKeyboard;
            var3 = var3.bind(var4)();
            _fun0001_ip = 112; continue _fun0001;
 59:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var5)) { _fun0001_ip = 112; continue _fun0001 }
 85:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var3 = var3.bind(var1)(var2);
            var2 = var3.dismissGlobalKeyboard;
            var2 = var2.bind(var3)();
 112:
            return var1;
        }
    };
    var3['dismissGlobalKeyboard'] = var4;
    var4 = function clearCurrentFocusAndDismissKeyboard() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0002_ip = 90; continue _fun0002 }
 37:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var5)) { _fun0002_ip = 90; continue _fun0002 }
 63:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var3 = var3.bind(var1)(var2);
            var2 = var3.clearCurrentFocusAndDismissKeyboard;
            var2 = var2.bind(var3)();
 90:
            return var1;
        }
    };
    var3['clearCurrentFocusAndDismissKeyboard'] = var4;
    var2 = function onKeyboardChanged(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 1;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.isAndroid;
            var3 = var3.bind(var4)();
            if(var3) { _fun0003_ip = 90; continue _fun0003 }
 37:
            var3 = _closure1_slot3;
            var3 = var3.KeyboardManager;
            var4 = var3.onKeyboardChanged;
            var3 = null;
            if(!(var3 != var4)) { _fun0003_ip = 147; continue _fun0003 }
 59:
            var3 = _closure1_slot3;
            var5 = var3.KeyboardManager;
            var4 = var5.onKeyboardChanged;
            var3 = global;
            var3 = var3.open;
            var3 = var4.bind(var5)(var3);
            _fun0003_ip = 147; continue _fun0003;
 90:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var4 = 2;
            var3 = var3[var4];
            var5 = var5.bind(var1)(var3);
            var3 = null;
            if(!(var3 != var5)) { _fun0003_ip = 147; continue _fun0003 }
 116:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var4];
            var4 = var3.bind(var1)(var2);
            var3 = var4.onKeyboardChanged;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
 147:
            return var1;
        }
    };
    var3['onKeyboardChanged'] = var2;
    return var1;
})();
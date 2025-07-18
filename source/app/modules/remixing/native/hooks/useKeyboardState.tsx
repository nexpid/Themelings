// app/modules/remixing/native/hooks/useKeyboardState.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Keyboard;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingEditorStore;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RemixMode;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/hooks/useKeyboardState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useKeyboardState(arg1) {
        var1 = arg1;
        var8 = var1.isOnAndroid;
        var _closure2_slot0 = var8;
        var6 = var1.setIsKeyboardVisible;
        var _closure2_slot1 = var6;
        var5 = _closure1_slot2;
        var1 = undefined;
        var4 = function(arg1) {
            var1 = arg1;
            var1 = var1.setCurrentMode;
            return var1;
        };
        var7 = var5.bind(var1)(var4);
        var _closure2_slot2 = var7;
        var5 = _closure1_slot0;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            var5 = _closure1_slot1;
            var4 = var5.addListener;
            var3 = 'keyboardDidShow';
            var2 = function() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0001_ip = 23; continue _fun0001 }
 10:
                    var3 = _closure2_slot1;
                    var2 = undefined;
                    var1 = true;
                    var1 = var3.bind(var2)(var1);
 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot0 = var2;
            var4 = var5.addListener;
            var3 = 'keyboardDidHide';
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot0;
                    if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 10:
                    var4 = _closure2_slot1;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot2;
                    var1 = _closure1_slot3;
                    var1 = var1.DEFAULT_MODE;
                    var1 = var2.bind(var3)(var1);
 45:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot1 = var2;
            var4 = var5.addListener;
            var3 = 'keyboardWillShow';
            var2 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot2 = var2;
            var4 = var5.addListener;
            var3 = 'keyboardWillHide';
            var2 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot3 = var2;
            var1 = function() {
                var3 = _closure3_slot1;
                var2 = var3.remove;
                var2 = var2.bind(var3)();
                var3 = _closure3_slot0;
                var2 = var3.remove;
                var2 = var2.bind(var3)();
                var3 = _closure3_slot3;
                var2 = var3.remove;
                var2 = var2.bind(var3)();
                var2 = _closure3_slot2;
                var1 = var2.remove;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useKeyboardState'] = var2;
    return var1;
})();
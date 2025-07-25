// app/modules/chat_input/native/accessories/ChatInputCover.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.StyleSheet;
    var _closure1_slot3 = var8;
    var8 = var4.TouchableWithoutFeedback;
    var _closure1_slot4 = var8;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.keyboardType;
            var _closure2_slot0 = var7;
            var10 = var2.onSelectKeyboard;
            var _closure2_slot1 = var10;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var2 = var4[var2];
            var5 = undefined;
            var6 = var3.bind(var5)(var2);
            var2 = var6.useIsScreenReaderEnabled;
            var2 = var2.bind(var6)();
            var _closure2_slot2 = var2;
            var11 = _closure1_slot2;
            var9 = var11.useMemo;
            var6 = new Array(3);
            var6[0] = var2;
            var6[1] = var7;
            var6[2] = var10;
            var1 = function() {
                var1 = {};
                var3 = function imperativeHandle() {
                    var1 = {};
                    var2 = function focused(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var1 = arg1;
                            if(!var1) { _fun0002_ip = 54; continue _fun0002 }
 6:
                            var3 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 4;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.KeyboardTypes;
                            var2 = var2.SYSTEM;
                            var1 = var3 !== var2;
 54:
                            if(!var1) { _fun0002_ip = 64; continue _fun0002 }
 57:
                            var1 = _closure2_slot2;
 64:
                            if(!var1) { _fun0002_ip = 122; continue _fun0002 }
 67:
                            var3 = _closure2_slot1;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 4;
                            var4 = var4[var1];
                            var1 = undefined;
                            var4 = var5.bind(var1)(var4);
                            var4 = var4.KeyboardTypes;
                            var4 = var4.SYSTEM;
                            var2['type'] = var4;
                            var1 = var3.bind(var1)(var2);
 122:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['focused'] = var2;
                    return var1;
                };
                var1['imperativeHandle'] = var3;
                var2 = function openSystemKeyboard() {
                    var3 = _closure2_slot1;
                    var2 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 4;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.KeyboardTypes;
                    var4 = var4.SYSTEM;
                    var2['type'] = var4;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1['openSystemKeyboard'] = var2;
                return var1;
            };
            var1 = var9.bind(var11)(var1, var6);
            var10 = var1.imperativeHandle;
            var6 = var1.openSystemKeyboard;
            var9 = var11.useImperativeHandle;
            var1 = arg2;
            var1 = var9.bind(var11)(var1, var10);
            var1 = 4;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.KeyboardTypes;
            var4 = var1.SYSTEM;
            var1 = null;
            if(!(var7 !== var4)) { _fun0001_ip = 222; continue _fun0001 }
 159:
            var1 = null;
            if(var2) { _fun0001_ip = 222; continue _fun0001 }
 164:
            var4 = _closure1_slot6;
            var3 = _closure1_slot4;
            var2 = {'accessible': false, 'accessibilityRole': 'none'};
            var2['onPress'] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var8 = _closure1_slot3;
            var8 = var8.absoluteFill;
            var6['style'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 222:
            return var1;
        }
    };
    var4 = var4.bind(var7)(var2);
    var2 = 'ChatInputCover';
    var4['displayName'] = var2;
    var2 = var7.memo;
    var2 = var2.bind(var7)(var4);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/chat_input/native/accessories/ChatInputCover.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/chat_input/native/accessories/ChatInputCover.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportAll;
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
case 0:
            var2 = arg1;
            var4 = var2.enabled;
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = true;
case 2:
            var _closure2_slot0 = var4;
            var7 = var2.keyboardType;
            var _closure2_slot1 = var7;
            var9 = var2.onSelectKeyboard;
            var _closure2_slot2 = var9;
            var _closure2_slot3 = var5;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.useIsScreenReaderEnabled;
            var2 = var2.bind(var3)();
            _closure2_slot3 = var2;
            var10 = _closure1_slot2;
            var6 = var10.useMemo;
            var3 = new Array(4);
            var3[0] = var4;
            var3[1] = var2;
            var3[2] = var7;
            var3[3] = var9;
            var1 = function() {
                var1 = {};
                var3 = function imperativeHandle() {
                    var1 = {};
                    var2 = function focused(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                            var3 = arg1;
                            var2 = _closure2_slot0;
                            if(!var2) { _fun0002_ip = 3; continue _fun0002 }
case 4:
                            var2 = var3;
case 3:
                            if(!var2) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                            var4 = _closure2_slot1;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 4;
                            var5 = var5[var3];
                            var3 = undefined;
                            var3 = var6.bind(var3)(var5);
                            var3 = var3.KeyboardTypes;
                            var3 = var3.SYSTEM;
                            var2 = var4 !== var3;
case 5:
                            if(!var2) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                            var2 = _closure2_slot3;
case 7:
                            if(!var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                            var3 = _closure2_slot2;
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
case 9:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['focused'] = var2;
                    return var1;
                };
                var1['imperativeHandle'] = var3;
                var2 = function openSystemKeyboard() {
                    var3 = _closure2_slot2;
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
            var1 = var6.bind(var10)(var1, var3);
            var9 = var1.imperativeHandle;
            var6 = var1.openSystemKeyboard;
            var3 = var10.useImperativeHandle;
            var1 = arg2;
            var1 = var3.bind(var10)(var1, var9);
            var1 = null;
            if(!var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var4 = 4;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.KeyboardTypes;
            var4 = var4.SYSTEM;
            var1 = null;
            if(!(var7 !== var4)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var1 = null;
            if(var2) { _fun0001_ip = 11; continue _fun0001 }
case 14:
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
case 11:
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
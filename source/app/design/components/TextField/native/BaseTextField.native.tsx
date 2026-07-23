// app/design/components/TextField/native/BaseTextField.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function collapseNewlines(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var2 = null;
            var1 = var5;
            if(!(var2 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.replace;
            var3 = /\r\n?|\n/g;
            var2 = ' ';
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
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
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 3;
            var1 = var8[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = 'InputFieldContainer';
            var11 = var3.bind(var4)(var1);
            var7 = _closure1_slot0;
            var1 = 4;
            var3 = var8[var1];
            var10 = var7.bind(var4)(var3);
            var9 = var10.useInputStyles;
            var3 = {};
            var6 = var5.size;
            var3['size'] = var6;
            var6 = var5.isRound;
            var3['isRound'] = var6;
            var12 = var5.leadingIcon;
            var6 = null;
            var12 = var6 != var12;
            var3['hasLeadingIcon'] = var12;
            var3['isRefreshEnabled'] = var11;
            var10 = var9.bind(var10)(var3);
            var3 = 5;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = var7.useFocus;
            var3 = var3.bind(var7)();
            var19 = var3.focusProps;
            var7 = var3.isFocused;
            var8 = _closure1_slot3;
            var3 = var8.useRef;
            var14 = var3.bind(var8)(var6);
            var _closure2_slot0 = var14;
            var3 = var5.enableAndroidSanitizedInputWorkaround;
            var11 = null;
            if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var9 = var5.secureTextEntry;
            var8 = var5.keyboardType;
            var13 = var5.autoComplete;
            if(!(var9 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var9 = false;
case 6:
            if(!(var8 === var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var8 = 'default';
case 8:
            var3 = {};
            var16 = _closure1_slot0;
            var6 = _closure1_slot2;
            var12 = 2;
            var6 = var6[var12];
            var16 = var16.bind(var4)(var6);
            var6 = var16.isAndroid;
            var16 = var6.bind(var16)();
            var6 = 'off';
            if(var16) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var13;
case 10:
            var3['autoComplete'] = var6;
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var13 = var13.bind(var4)(var6);
            var6 = var13.isAndroid;
            var6 = var6.bind(var13)();
            var13 = !var6;
            var6 = !var13;
            if(!var13) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var6 = var9;
case 12:
            var3['secureTextEntry'] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var9 = var9.bind(var4)(var6);
            var6 = var9.isAndroid;
            var9 = var6.bind(var9)();
            var6 = 'visible-password';
            if(var9) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var6 = var8;
case 14:
            var3['keyboardType'] = var6;
            var11 = var3;
case 4:
            var9 = var5.onChangeText;
            var _closure2_slot1 = var9;
            var8 = _closure1_slot3;
            var6 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure1_slot6;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    if(!(var3 !== var2)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                    var2 = _closure2_slot0;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0003_ip = 16; continue _fun0003 }
case 18:
                    var4 = var5.setNativeProps;
                    var2 = {};
                    var2['text'] = var3;
                    var2 = var4.bind(var5)(var2);
case 16:
                    var5 = _closure2_slot1;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)(var3);
case 19:
                    return var1;
                }
            };
            var16 = var6.bind(var8)(var2, var3);
            var3 = _closure1_slot5;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = var13[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.InputFieldContainer;
            var1 = {};
            var21 = var1;
            var20 = var5;
            var6 = copyDataProperties(var21, var20);
            var6 = 'isFocused';
            var1[5] = var7;
            var7 = var5.leading;
            var6 = new Array(3);
            var6[0] = var7;
            var9 = _closure1_slot4;
            var7 = 6;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.NativeTextInput;
            var7 = {};
            var21 = var7;
            var20 = var11;
            var11 = copyDataProperties(var21, var20);
            var11 = 7;
            var17 = var13[var11];
            var18 = var12.bind(var4)(var17);
            var17 = var18.mergeProps;
            var20 = var17.bind(var18)(var5, var19);
            var21 = var7;
            var17 = copyDataProperties(var21, var20);
            var17 = _closure1_slot6;
            var15 = var5.value;
            var18 = var17.bind(var4)(var15);
            var15 = 'value';
            var7[14] = var18;
            var15 = var5.defaultValue;
            var17 = var17.bind(var4)(var15);
            var15 = 'defaultValue';
            var7[14] = var17;
            var15 = 'onChangeText';
            var7[14] = var16;
            var11 = var13[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.mergeRefs;
            var11 = arg2;
            var12 = var12.bind(var13)(var14, var11);
            var11 = 'ref';
            var7[10] = var12;
            var11 = var10.padding;
            var12 = new Array(3);
            var12[0] = var11;
            var11 = var10.text;
            var12[1] = var11;
            var11 = var5.inputStyle;
            var12[2] = var11;
            var11 = 'style';
            var7[10] = var12;
            var10 = var10.placeholderText;
            var11 = var10.color;
            var10 = 'placeholderTextColor';
            var7[9] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5 = var5.trailing;
            var6[2] = var5;
            var5 = 'children';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextField/native/BaseTextField.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BaseTextField'] = var2;
    return var1;
})();
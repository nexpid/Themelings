// app/design/components/TextField/native/BaseTextField.native.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot2 = var8;
    var4 = var4.jsxs;
    var _closure1_slot3 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var2 = var6[var1];
            var4 = undefined;
            var9 = var3.bind(var4)(var2);
            var8 = var9.useInputStyles;
            var2 = {};
            var10 = var5.size;
            var2['size'] = var10;
            var10 = var5.isRound;
            var2['isRound'] = var10;
            var10 = var5.leadingIcon;
            var11 = null;
            var10 = var11 != var10;
            var2['hasLeadingIcon'] = var10;
            var10 = var8.bind(var9)(var2);
            var2 = 4;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useFocus;
            var2 = var2.bind(var3)();
            var13 = var2.focusProps;
            var8 = var2.isFocused;
            var2 = var5.enableAndroidSanitizedInputWorkaround;
            if(!var2) { _fun0001_ip = 291; continue _fun0001 }
 124:
            var9 = var5.secureTextEntry;
            var6 = var5.keyboardType;
            var14 = var5.autoComplete;
            if(!(var9 === var4)) { _fun0001_ip = 148; continue _fun0001 }
 146:
            var9 = false;
 148:
            if(!(var6 === var4)) { _fun0001_ip = 156; continue _fun0001 }
 152:
            var6 = 'default';
 156:
            var2 = {};
            var15 = _closure1_slot0;
            var3 = _closure1_slot1;
            var12 = 2;
            var3 = var3[var12];
            var15 = var15.bind(var4)(var3);
            var3 = var15.isAndroid;
            var15 = var3.bind(var15)();
            var3 = 'off';
            if(var15) { _fun0001_ip = 197; continue _fun0001 }
 194:
            var3 = var14;
 197:
            var2['autoComplete'] = var3;
            var14 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var14 = var14.bind(var4)(var3);
            var3 = var14.isAndroid;
            var3 = var3.bind(var14)();
            var14 = !var3;
            var3 = !var14;
            if(!var14) { _fun0001_ip = 240; continue _fun0001 }
 237:
            var3 = var9;
 240:
            var2['secureTextEntry'] = var3;
            var9 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var12];
            var9 = var9.bind(var4)(var3);
            var3 = var9.isAndroid;
            var9 = var3.bind(var9)();
            var3 = 'visible-password';
            if(var9) { _fun0001_ip = 283; continue _fun0001 }
 280:
            var3 = var6;
 283:
            var2['keyboardType'] = var3;
            var11 = var2;
 291:
            var3 = _closure1_slot3;
            var12 = _closure1_slot0;
            var14 = _closure1_slot1;
            var1 = var14[var1];
            var1 = var12.bind(var4)(var1);
            var2 = var1.InputFieldContainer;
            var1 = {};
            var17 = var1;
            var16 = var5;
            var6 = copyDataProperties(var17, var16);
            var6 = 'isFocused';
            var1[var6] = var8;
            var8 = var5.leading;
            var6 = new Array(3);
            var6[0] = var8;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var14[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.NativeTextInput;
            var7 = {};
            var17 = var7;
            var16 = var11;
            var11 = copyDataProperties(var17, var16);
            var11 = 6;
            var11 = var14[var11];
            var12 = var12.bind(var4)(var11);
            var11 = var12.mergeProps;
            var16 = var11.bind(var12)(var5, var13);
            var17 = var7;
            var11 = copyDataProperties(var17, var16);
            var12 = arg2;
            var11 = 'ref';
            var7[var11] = var12;
            var11 = var10.padding;
            var12 = new Array(3);
            var12[0] = var11;
            var11 = var10.text;
            var12[1] = var11;
            var11 = var5.inputStyle;
            var12[2] = var11;
            var11 = 'style';
            var7[var11] = var12;
            var10 = var10.placeholderText;
            var11 = var10.color;
            var10 = 'placeholderTextColor';
            var7[var10] = var11;
            var7 = var9.bind(var4)(var8, var7);
            var6[1] = var7;
            var5 = var5.trailing;
            var6[2] = var5;
            var5 = 'children';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/TextField/native/BaseTextField.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['BaseTextField'] = var2;
    return var1;
})();
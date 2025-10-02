// app/uikit-native/refresh/form/FormInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.KeyboardThemes;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'paddingVertical': 13, 'paddingHorizontal': 15};
    var4['inputViewContainer'] = var10;
    var10 = {};
    var11 = 4;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.INPUT_PLACEHOLDER_TEXT;
    var10['color'] = var13;
    var4['placeholderText'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_NORMAL;
    var10['color'] = var11;
    var4['inputText'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var10 = arg1;
            var20 = var10.onChange;
            var19 = var10.keyboardAppearance;
            var5 = var10.keyboardType;
            var27 = var10.style;
            var24 = var10.inputTextStyle;
            var9 = var10.value;
            var30 = var10.title;
            var6 = undefined;
            if(!(var30 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var30 = '';
case 2:
            var23 = var10.helpText;
            if(!(var23 === var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var23 = '';
case 4:
            var7 = var10.error;
            var16 = var10.placeholder;
            if(!(var16 === var6)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = '';
case 6:
            var21 = var10.secureTextEntry;
            if(!(var21 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var21 = false;
case 8:
            var14 = var10.disabled;
            if(!(var14 === var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var14 = false;
case 10:
            var22 = var10.multiline;
            if(!(var22 === var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var22 = false;
case 12:
            var13 = var10.autoFocus;
            if(!(var13 === var6)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = false;
case 14:
            var29 = var10.numberOfLines;
            if(!(var29 === var6)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var29 = 1;
case 16:
            var4 = var10.clearButtonVisibility;
            var12 = var10.autoCapitalize;
            var11 = var10.autoCorrect;
            var28 = var10.showBorder;
            if(!(var28 === var6)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.isAndroid;
            var28 = var1.bind(var2)();
case 18:
            var26 = var10.showCharactersRemaining;
            if(!(var26 === var6)) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var26 = false;
case 20:
            var18 = var10.enableAndroidSanitizedInputWorkaround;
            if(!(var18 === var6)) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var18 = false;
case 22:
            var15 = var10.allowRedesignTextInput;
            if(!(var15 === var6)) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var15 = true;
case 24:
            var2 = {'onChange': 0, 'keyboardAppearance': 0, 'keyboardType': 0, 'style': 0, 'inputTextStyle': 0, 'value': 0, 'title': 0, 'helpText': 0, 'error': 0, 'placeholder': 0, 'secureTextEntry': 0, 'disabled': 0, 'multiline': 0, 'autoFocus': 0, 'numberOfLines': 0, 'clearButtonVisibility': 0, 'autoCapitalize': 0, 'autoCorrect': 0, 'showBorder': 0, 'showCharactersRemaining': 0, 'enableAndroidSanitizedInputWorkaround': 0, 'allowRedesignTextInput': 0};
            var8 = null;
            var36 = var2;
            var35 = null;
            var1 = silentSetPrototypeOf(var36, var35);
            var36 = {};
            var35 = var10;
            var34 = var2;
            var10 = copyDataProperties(var36, var35, var34);
            var _closure2_slot0 = var6;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var6;
            var1 = _closure1_slot6;
            var17 = var1.bind(var6)();
            var25 = _closure1_slot0;
            var31 = _closure1_slot2;
            var1 = 6;
            var1 = var31[var1];
            var25 = var25.bind(var6)(var1);
            var1 = var25.useThemeContext;
            var1 = var1.bind(var25)();
            var31 = var1.theme;
            if(!(var8 == var19)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var25 = _closure1_slot0;
            var32 = _closure1_slot2;
            var1 = 7;
            var1 = var32[var1];
            var25 = var25.bind(var6)(var1);
            var1 = var25.isThemeDark;
            var1 = var1.bind(var25)(var31);
            var25 = _closure1_slot4;
            if(var1) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var1 = var25.LIGHT;
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var1 = var25.DARK;
case 30:
            var19 = var1;
case 26:
            var31 = _closure1_slot3;
            var25 = var31.useContext;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var1 = 8;
            var1 = var33[var1];
            var1 = var32.bind(var6)(var1);
            var1 = var1.RedesignCompatContext;
            var1 = var25.bind(var31)(var1);
            if(!var1) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var1 = var15;
case 31:
            _closure2_slot0 = var1;
            var25 = !var18;
            if(var25) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var15 = 5;
            var15 = var32[var15];
            var31 = var31.bind(var6)(var15);
            var15 = var31.isAndroid;
            var15 = var15.bind(var31)();
            var25 = !var15;
case 33:
            var15 = !var25;
            if(!var25) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var15 = var21;
case 35:
            if(!var18) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 5;
            var18 = var25[var18];
            var21 = var21.bind(var6)(var18);
            var18 = var21.isAndroid;
            var21 = var18.bind(var21)();
            var18 = 'visible-password';
            if(var21) { _fun0001_ip = 39; continue _fun0001 }
case 37:
            var18 = var5;
case 39:
            var32 = _closure1_slot3;
            var5 = var32.useRef;
            var21 = var5.bind(var32)(var8);
            _closure2_slot1 = var21;
            var5 = var32.useRef;
            var31 = var5.bind(var32)(var8);
            _closure2_slot2 = var31;
            var25 = var32.useImperativeHandle;
            var5 = arg2;
            var3 = function() {
                var1 = {};
                var3 = function isFocused() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0002_ip = 42; continue _fun0002;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var3 = var1.current;
                        var1 = null;
                        var1 = var1 == var3;
                        var2 = undefined;
                        if(var1) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                        var1 = var3.isFocused;
                        var2 = var1.bind(var3)();
case 43:
                        var1 = true;
                        var1 = var1 === var2;
                        return var1;
                    }
                };
                var1['isFocused'] = var3;
                var3 = function focus() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0003_ip = 40; continue _fun0003 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0003_ip = 42; continue _fun0003;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
                        var1 = var2.focus;
                        var1 = var1.bind(var2)();
case 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['focus'] = var3;
                var3 = function blur() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0004_ip = 42; continue _fun0004;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                        var1 = var2.blur;
                        var1 = var1.bind(var2)();
case 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['blur'] = var3;
                var3 = function setText(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0005_ip = 42; continue _fun0005;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 47; continue _fun0005 }
case 46:
                        var2 = var3.setText;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
case 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['setText'] = var3;
                var3 = function getText() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0006_ip = 42; continue _fun0006;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var4 = var1.current;
                        var1 = null;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if(var3) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                        var3 = var4.getText;
                        var2 = var3.bind(var4)();
case 43:
                        var3 = var1 != var2;
                        var1 = '';
                        if(!var3) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                        var1 = var2;
case 48:
                        return var1;
                    }
                };
                var1['getText'] = var3;
                var3 = function measure(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0007_ip = 42; continue _fun0007;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0007_ip = 47; continue _fun0007 }
case 46:
                        var2 = var3.measure;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
case 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measure'] = var3;
                var3 = function measureInWindow(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0008_ip = 42; continue _fun0008;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0008_ip = 47; continue _fun0008 }
case 46:
                        var2 = var3.measureInWindow;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
case 47:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureInWindow'] = var3;
                var2 = function measureLayout(arg1, arg2, arg3) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                        var1 = _closure2_slot2;
                        _fun0009_ip = 42; continue _fun0009;
case 40:
                        var1 = _closure2_slot1;
case 42:
                        var5 = var1.current;
                        var1 = null;
                        if(!(var1 != var5)) { _fun0009_ip = 50; continue _fun0009 }
case 46:
                        var4 = var5.measureLayout;
                        var3 = arg1;
                        var2 = arg2;
                        var1 = arg3;
                        var1 = var4.bind(var5)(var3, var2, var1);
case 50:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureLayout'] = var2;
                return var1;
            };
            var3 = var25.bind(var32)(var5, var3);
            var5 = _closure1_slot5;
            if(var1) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var3 = _closure1_slot1;
            var1 = _closure1_slot2;
            var25 = 11;
            var1 = var1[var25];
            var3 = var3.bind(var6)(var1);
            var1 = {};
            var1['ref'] = var31;
            var31 = var17.inputText;
            var31 = var31.color;
            var1['inputTextColor'] = var31;
            var1['multiline'] = var22;
            var31 = var10.returnKeyType;
            if(!(var8 == var31)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var31 = 'done';
            if(!var22) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var31 = 'default';
case 55:
            _fun0001_ip = 57; continue _fun0001;
case 53:
            var31 = var10.returnKeyType;
case 57:
            var1['returnKeyType'] = var31;
            var1['onChangeText'] = var20;
            var1['keyboardAppearance'] = var19;
            var1['keyboardType'] = var18;
            var31 = var17.placeholderText;
            var31 = var31.color;
            var1['placeholderTextColor'] = var31;
            var1['title'] = var30;
            var1['helpText'] = var23;
            var31 = var8 != var7;
            var23 = '';
            var30 = var23;
            if(!var31) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var30 = var7;
case 58:
            var1['error'] = var30;
            var1['placeholder'] = var16;
            var1['secureTextEntry'] = var15;
            var1['disabled'] = var14;
            var1['autoFocus'] = var13;
            var1['numberOfLines'] = var29;
            var1['autoCapitalize'] = var12;
            var1['autoCorrect'] = var11;
            var1['showBorder'] = var28;
            var1['showCharactersRemaining'] = var26;
            var28 = var17.inputViewContainer;
            var26 = new Array(2);
            var26[0] = var28;
            var26[1] = var27;
            var1['style'] = var26;
            var1['inputTextStyle'] = var24;
            var24 = var8 != var9;
            if(!var24) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var23 = var9;
case 60:
            var1['value'] = var23;
            if(!var22) { _fun0001_ip = 62; continue _fun0001 }
case 63:
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var25];
            var23 = var24.bind(var6)(var23);
            var23 = var23.ClearButtonVisibility;
            var4 = var23.NEVER;
case 62:
            var1['clearButtonVisibility'] = var4;
            var36 = var1;
            var35 = var10;
            var4 = copyDataProperties(var36, var35);
            var1 = var5.bind(var6)(var3, var1);
            _fun0001_ip = 64; continue _fun0001;
case 51:
            var4 = _closure1_slot0;
            var23 = _closure1_slot2;
            if(var22) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var2 = 10;
            var2 = var23[var2];
            var2 = var4.bind(var6)(var2);
            var3 = var2.TextInput;
            var2 = {};
            var2['ref'] = var21;
            var24 = 'done';
            if(!var22) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var24 = 'default';
case 67:
            var2['returnKeyType'] = var24;
            var2['onChange'] = var20;
            var2['keyboardAppearance'] = var19;
            var2['keyboardType'] = var18;
            var24 = var17.placeholderText;
            var24 = var24.color;
            var2['placeholderTextColor'] = var24;
            var2['placeholder'] = var16;
            var2['secureTextEntry'] = var15;
            var2['isDisabled'] = var14;
            var2['autoFocus'] = var13;
            var2['autoCapitalize'] = var12;
            var2['autoCorrect'] = var11;
            var24 = var10.onEndEditing;
            var2['onEndEditing'] = var24;
            var25 = var8 != var9;
            var24 = undefined;
            if(!var25) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var24 = var9;
case 69:
            var2['value'] = var24;
            var2['errorMessage'] = var7;
            var2 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 71; continue _fun0001;
case 65:
            var3 = 9;
            var3 = var23[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.TextArea;
            var3 = {};
            var3['ref'] = var21;
            var21 = 'done';
            if(!var22) { _fun0001_ip = 72; continue _fun0001 }
case 73:
            var21 = 'default';
case 72:
            var3['returnKeyType'] = var21;
            var3['onChange'] = var20;
            var3['keyboardAppearance'] = var19;
            var3['keyboardType'] = var18;
            var17 = var17.placeholderText;
            var17 = var17.color;
            var3['placeholderTextColor'] = var17;
            var3['placeholder'] = var16;
            var3['secureTextEntry'] = var15;
            var3['isDisabled'] = var14;
            var3['autoFocus'] = var13;
            var3['autoCapitalize'] = var12;
            var3['autoCorrect'] = var11;
            var11 = var10.maxLength;
            var3['maxLength'] = var11;
            var10 = var10.onEndEditing;
            var3['onEndEditing'] = var10;
            var10 = var8 != var9;
            var8 = undefined;
            if(!var10) { _fun0001_ip = 74; continue _fun0001 }
case 75:
            var8 = var9;
case 74:
            var3['value'] = var8;
            var3['errorMessage'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 71:
            var1 = var2;
case 64:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/refresh/form/FormInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
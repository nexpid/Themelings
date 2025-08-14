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
 0:
            var10 = arg1;
            var20 = var10.onChange;
            var19 = var10.keyboardAppearance;
            var5 = var10.keyboardType;
            var27 = var10.style;
            var24 = var10.inputTextStyle;
            var9 = var10.value;
            var30 = var10.title;
            var6 = undefined;
            if(!(var30 === var6)) { _fun0001_ip = 54; continue _fun0001 }
 50:
            var30 = '';
 54:
            var23 = var10.helpText;
            if(!(var23 === var6)) { _fun0001_ip = 68; continue _fun0001 }
 64:
            var23 = '';
 68:
            var7 = var10.error;
            var16 = var10.placeholder;
            if(!(var16 === var6)) { _fun0001_ip = 87; continue _fun0001 }
 83:
            var16 = '';
 87:
            var21 = var10.secureTextEntry;
            if(!(var21 === var6)) { _fun0001_ip = 99; continue _fun0001 }
 97:
            var21 = false;
 99:
            var14 = var10.disabled;
            if(!(var14 === var6)) { _fun0001_ip = 110; continue _fun0001 }
 108:
            var14 = false;
 110:
            var22 = var10.multiline;
            if(!(var22 === var6)) { _fun0001_ip = 122; continue _fun0001 }
 120:
            var22 = false;
 122:
            var13 = var10.autoFocus;
            if(!(var13 === var6)) { _fun0001_ip = 134; continue _fun0001 }
 132:
            var13 = false;
 134:
            var29 = var10.numberOfLines;
            if(!(var29 === var6)) { _fun0001_ip = 147; continue _fun0001 }
 144:
            var29 = 1;
 147:
            var4 = var10.clearButtonVisibility;
            var12 = var10.autoCapitalize;
            var11 = var10.autoCorrect;
            var28 = var10.showBorder;
            if(!(var28 === var6)) { _fun0001_ip = 207; continue _fun0001 }
 175:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.isAndroid;
            var28 = var1.bind(var2)();
 207:
            var26 = var10.showCharactersRemaining;
            if(!(var26 === var6)) { _fun0001_ip = 219; continue _fun0001 }
 217:
            var26 = false;
 219:
            var18 = var10.enableAndroidSanitizedInputWorkaround;
            if(!(var18 === var6)) { _fun0001_ip = 231; continue _fun0001 }
 229:
            var18 = false;
 231:
            var15 = var10.allowRedesignTextInput;
            if(!(var15 === var6)) { _fun0001_ip = 243; continue _fun0001 }
 241:
            var15 = true;
 243:
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
            if(!(var8 == var19)) { _fun0001_ip = 398; continue _fun0001 }
 343:
            var25 = _closure1_slot0;
            var32 = _closure1_slot2;
            var1 = 7;
            var1 = var32[var1];
            var25 = var25.bind(var6)(var1);
            var1 = var25.isThemeDark;
            var1 = var1.bind(var25)(var31);
            var25 = _closure1_slot4;
            if(var1) { _fun0001_ip = 389; continue _fun0001 }
 381:
            var1 = var25.LIGHT;
            _fun0001_ip = 395; continue _fun0001;
 389:
            var1 = var25.DARK;
 395:
            var19 = var1;
 398:
            var31 = _closure1_slot3;
            var25 = var31.useContext;
            var32 = _closure1_slot0;
            var33 = _closure1_slot2;
            var1 = 8;
            var1 = var33[var1];
            var1 = var32.bind(var6)(var1);
            var1 = var1.RedesignCompatContext;
            var1 = var25.bind(var31)(var1);
            if(!var1) { _fun0001_ip = 445; continue _fun0001 }
 442:
            var1 = var15;
 445:
            _closure2_slot0 = var1;
            var25 = !var18;
            if(var25) { _fun0001_ip = 487; continue _fun0001 }
 455:
            var31 = _closure1_slot0;
            var32 = _closure1_slot2;
            var15 = 5;
            var15 = var32[var15];
            var31 = var31.bind(var6)(var15);
            var15 = var31.isAndroid;
            var15 = var15.bind(var31)();
            var25 = !var15;
 487:
            var15 = !var25;
            if(!var25) { _fun0001_ip = 496; continue _fun0001 }
 493:
            var15 = var21;
 496:
            if(!var18) { _fun0001_ip = 537; continue _fun0001 }
 499:
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var18 = 5;
            var18 = var25[var18];
            var21 = var21.bind(var6)(var18);
            var18 = var21.isAndroid;
            var21 = var18.bind(var21)();
            var18 = 'visible-password';
            if(var21) { _fun0001_ip = 540; continue _fun0001 }
 537:
            var18 = var5;
 540:
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
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0002_ip = 16; continue _fun0002 }
 10:
                        var1 = _closure2_slot2;
                        _fun0002_ip = 20; continue _fun0002;
 16:
                        var1 = _closure2_slot1;
 20:
                        var3 = var1.current;
                        var1 = null;
                        var1 = var1 == var3;
                        var2 = undefined;
                        if(var1) { _fun0002_ip = 46; continue _fun0002 }
 36:
                        var1 = var3.isFocused;
                        var2 = var1.bind(var3)();
 46:
                        var1 = true;
                        var1 = var1 === var2;
                        return var1;
                    }
                };
                var1['isFocused'] = var3;
                var3 = function focus() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0003_ip = 16; continue _fun0003 }
 10:
                        var1 = _closure2_slot2;
                        _fun0003_ip = 20; continue _fun0003;
 16:
                        var1 = _closure2_slot1;
 20:
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0003_ip = 41; continue _fun0003 }
 31:
                        var1 = var2.focus;
                        var1 = var1.bind(var2)();
 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['focus'] = var3;
                var3 = function blur() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0004_ip = 16; continue _fun0004 }
 10:
                        var1 = _closure2_slot2;
                        _fun0004_ip = 20; continue _fun0004;
 16:
                        var1 = _closure2_slot1;
 20:
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0004_ip = 41; continue _fun0004 }
 31:
                        var1 = var2.blur;
                        var1 = var1.bind(var2)();
 41:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['blur'] = var3;
                var3 = function setText(arg1) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0005_ip = 16; continue _fun0005 }
 10:
                        var1 = _closure2_slot2;
                        _fun0005_ip = 20; continue _fun0005;
 16:
                        var1 = _closure2_slot1;
 20:
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0005_ip = 45; continue _fun0005 }
 31:
                        var2 = var3.setText;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['setText'] = var3;
                var3 = function getText() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0006_ip = 16; continue _fun0006 }
 10:
                        var1 = _closure2_slot2;
                        _fun0006_ip = 20; continue _fun0006;
 16:
                        var1 = _closure2_slot1;
 20:
                        var4 = var1.current;
                        var1 = null;
                        var3 = var1 == var4;
                        var2 = undefined;
                        if(var3) { _fun0006_ip = 46; continue _fun0006 }
 36:
                        var3 = var4.getText;
                        var2 = var3.bind(var4)();
 46:
                        var3 = var1 != var2;
                        var1 = '';
                        if(!var3) { _fun0006_ip = 60; continue _fun0006 }
 57:
                        var1 = var2;
 60:
                        return var1;
                    }
                };
                var1['getText'] = var3;
                var3 = function measure(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0007_ip = 16; continue _fun0007 }
 10:
                        var1 = _closure2_slot2;
                        _fun0007_ip = 20; continue _fun0007;
 16:
                        var1 = _closure2_slot1;
 20:
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0007_ip = 45; continue _fun0007 }
 31:
                        var2 = var3.measure;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measure'] = var3;
                var3 = function measureInWindow(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0008_ip = 16; continue _fun0008 }
 10:
                        var1 = _closure2_slot2;
                        _fun0008_ip = 20; continue _fun0008;
 16:
                        var1 = _closure2_slot1;
 20:
                        var3 = var1.current;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0008_ip = 45; continue _fun0008 }
 31:
                        var2 = var3.measureInWindow;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
 45:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureInWindow'] = var3;
                var2 = function measureLayout(arg1, arg2, arg3) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var1 = _closure2_slot0;
                        if(var1) { _fun0009_ip = 16; continue _fun0009 }
 10:
                        var1 = _closure2_slot2;
                        _fun0009_ip = 20; continue _fun0009;
 16:
                        var1 = _closure2_slot1;
 20:
                        var5 = var1.current;
                        var1 = null;
                        if(!(var1 != var5)) { _fun0009_ip = 53; continue _fun0009 }
 31:
                        var4 = var5.measureLayout;
                        var3 = arg1;
                        var2 = arg2;
                        var1 = arg3;
                        var1 = var4.bind(var5)(var3, var2, var1);
 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['measureLayout'] = var2;
                return var1;
            };
            var3 = var25.bind(var32)(var5, var3);
            var5 = _closure1_slot5;
            if(var1) { _fun0001_ip = 887; continue _fun0001 }
 602:
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
            if(!(var8 == var31)) { _fun0001_ip = 672; continue _fun0001 }
 659:
            var31 = 'done';
            if(!var22) { _fun0001_ip = 670; continue _fun0001 }
 666:
            var31 = 'default';
 670:
            _fun0001_ip = 678; continue _fun0001;
 672:
            var31 = var10.returnKeyType;
 678:
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
            if(!var31) { _fun0001_ip = 740; continue _fun0001 }
 737:
            var30 = var7;
 740:
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
            if(!var24) { _fun0001_ip = 825; continue _fun0001 }
 822:
            var23 = var9;
 825:
            var1['value'] = var23;
            if(!var22) { _fun0001_ip = 861; continue _fun0001 }
 832:
            var24 = _closure1_slot0;
            var23 = _closure1_slot2;
            var23 = var23[var25];
            var23 = var24.bind(var6)(var23);
            var23 = var23.ClearButtonVisibility;
            var4 = var23.NEVER;
 861:
            var1['clearButtonVisibility'] = var4;
            var36 = var1;
            var35 = var10;
            var4 = copyDataProperties(var36, var35);
            var1 = var5.bind(var6)(var3, var1);
            _fun0001_ip = 1198; continue _fun0001;
 887:
            var4 = _closure1_slot0;
            var23 = _closure1_slot2;
            if(var22) { _fun0001_ip = 1045; continue _fun0001 }
 901:
            var2 = 10;
            var2 = var23[var2];
            var2 = var4.bind(var6)(var2);
            var3 = var2.TextInput;
            var2 = {};
            var2['ref'] = var21;
            var24 = 'done';
            if(!var22) { _fun0001_ip = 936; continue _fun0001 }
 932:
            var24 = 'default';
 936:
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
            if(!var25) { _fun0001_ip = 1025; continue _fun0001 }
 1022:
            var24 = var9;
 1025:
            var2['value'] = var24;
            var2['errorMessage'] = var7;
            var2 = var5.bind(var6)(var3, var2);
            _fun0001_ip = 1195; continue _fun0001;
 1045:
            var3 = 9;
            var3 = var23[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.TextArea;
            var3 = {};
            var3['ref'] = var21;
            var21 = 'done';
            if(!var22) { _fun0001_ip = 1080; continue _fun0001 }
 1076:
            var21 = 'default';
 1080:
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
            if(!var10) { _fun0001_ip = 1180; continue _fun0001 }
 1177:
            var8 = var9;
 1180:
            var3['value'] = var8;
            var3['errorMessage'] = var7;
            var2 = var5.bind(var6)(var4, var3);
 1195:
            var1 = var2;
 1198:
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
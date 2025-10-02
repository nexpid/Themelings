// app/modules/phone/native/FormPhoneOrEmail.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function CountryCodeSelector(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.show;
            var3 = var1.alpha2;
            var8 = var1.countryCode;
            var14 = var1.onPress;
            var1 = _closure1_slot7;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var1 = null;
            var4 = var1 != var3;
            var7 = '';
            var6 = var7;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var3;
case 2:
            var3 = global;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = ' ';
            var17 = var4.bind(var7)(var6, var3, var8);
            var1 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var13.selectorOuterContainer;
            var2['style'] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var13.selectorContainer;
            var6['style'] = var9;
            var12 = _closure1_slot5;
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 5;
            var9 = var18[var9];
            var9 = var15.bind(var5)(var9);
            var11 = var9.PressableOpacity;
            var9 = {};
            var9['onPress'] = var14;
            var14 = var13.selectorPressable;
            var9['style'] = var14;
            var14 = {};
            var16 = true;
            var14['borderless'] = var16;
            var9['androidRippleConfig'] = var14;
            var14 = 'button';
            var9['accessibilityRole'] = var14;
            var9['accessibilityLabel'] = var17;
            var14 = 6;
            var16 = var18[var14];
            var16 = var15.bind(var5)(var16);
            var19 = var16.intl;
            var16 = var19.string;
            var14 = var18[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.GwAW3t;
            var14 = var16.bind(var19)(var14);
            var9['accessibilityHint'] = var14;
            var16 = _closure1_slot5;
            var14 = 7;
            var14 = var18[var14];
            var14 = var15.bind(var5)(var14);
            var15 = var14.Text;
            var14 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var18 = var13.selectorText;
            var14['style'] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var5)(var15, var14);
            var9['children'] = var14;
            var11 = var12.bind(var5)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var12 = _closure1_slot5;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var13.separator;
            var10['style'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var8 = var4.bind(var1)(var7);
    var _closure1_slot3 = var8;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var9 = var10.createStyles;
    var7 = {};
    var4 = {};
    var11 = 8;
    var4['marginBottom'] = var11;
    var7['label'] = var4;
    var4 = {'flexGrow': 1, 'marginBottom': 8};
    var7['input'] = var4;
    var4 = {};
    var4['marginBottom'] = var11;
    var7['error'] = var4;
    var4 = {};
    var4['marginBottom'] = var11;
    var7['hint'] = var4;
    var4 = {};
    var11 = 'hidden';
    var4['overflow'] = var11;
    var7['selectorOuterContainer'] = var4;
    var4 = {'flex': 1, 'flexDirection': 'row'};
    var7['selectorContainer'] = var4;
    var4 = {};
    var11 = 'center';
    var4['justifyContent'] = var11;
    var7['selectorPressable'] = var4;
    var4 = {};
    var4['alignSelf'] = var11;
    var7['selectorText'] = var4;
    var11 = {'borderLeftWidth': 1, 'borderLeftColor': null, 'marginHorizontal': 12, 'marginVertical': 4294967292};
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var4 = var4.colors;
    var4 = var4.BACKGROUND_MODIFIER_SELECTED;
    var11['borderLeftColor'] = var4;
    var4 = 12;
    var7['separator'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot7 = var7;
    var7 = var8.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var5 = var4.style;
            var16 = var4.textInputStyle;
            var15 = var4.label;
            var14 = var4.error;
            var21 = var4.value;
            var10 = var4.hint;
            var1 = var4.onChangeText;
            var _closure2_slot0 = var1;
            var1 = var4.alpha2;
            var _closure2_slot1 = var1;
            var1 = var4.countryCode;
            var _closure2_slot2 = var1;
            var2 = var4.onPressCountrySelector;
            var _closure2_slot3 = var2;
            var17 = var4.forceMode;
            var _closure2_slot4 = var17;
            var3 = {'style': 0, 'textInputStyle': 0, 'label': 0, 'error': 0, 'value': 0, 'hint': 0, 'onChangeText': 0, 'alpha2': 0, 'countryCode': 0, 'onPressCountrySelector': 0, 'forceMode': 0};
            var6 = null;
            var25 = var3;
            var24 = null;
            var2 = silentSetPrototypeOf(var25, var24);
            var25 = {};
            var24 = var4;
            var23 = var3;
            var22 = copyDataProperties(var25, var24, var23);
            var19 = function handleChangeText(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.shouldShowCountryCodeSelector;
                    var3 = _closure2_slot4;
                    var5 = var5.bind(var6)(var3, var4);
                    var3 = '';
                    if(!var5) { _fun0003_ip = 2; continue _fun0003 }
case 6:
                    var3 = _closure2_slot2;
case 2:
                    var6 = _closure2_slot0;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var4, var3);
case 7:
                    return var1;
                }
            };
            var2 = _closure1_slot7;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var18 = 8;
            var2 = var2[var18];
            var3 = var3.bind(var4)(var2);
            var2 = var3.shouldShowCountryCodeSelector;
            var2 = var2.bind(var3)(var17, var21);
            var _closure2_slot5 = var2;
            var3 = {};
            var3['handleChangeText'] = var19;
            var3['value'] = var21;
            var _closure2_slot6 = var3;
            var8 = _closure1_slot3;
            var2 = var8.useRef;
            var2 = var2.bind(var8)(var3);
            var _closure2_slot7 = var2;
            var3 = var8.useEffect;
            var2 = function() {
                var2 = _closure2_slot7;
                var1 = _closure2_slot6;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var8)(var2);
            var3 = var8.useEffect;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure2_slot7;
                var1 = var1.current;
                var3 = var1.value;
                var2 = var1.handleChangeText;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var1['style'] = var5;
            var5 = var6 != var15;
            var8 = null;
            if(!var5) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var12 = _closure1_slot5;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var5 = 9;
            var5 = var13[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var13 = var11.label;
            var5['style'] = var13;
            var5['children'] = var15;
            var8 = var12.bind(var4)(var9, var5);
case 9:
            var5 = new Array(4);
            var5[0] = var8;
            var12 = _closure1_slot5;
            var9 = _closure1_slot1;
            var13 = _closure1_slot2;
            var8 = 10;
            var8 = var13[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var25 = var8;
            var24 = var22;
            var22 = copyDataProperties(var25, var24);
            var22 = function renderLeadingComponent() {
                var4 = _closure1_slot5;
                var3 = _closure1_slot8;
                var2 = {};
                var5 = _closure2_slot5;
                var2['show'] = var5;
                var5 = _closure2_slot1;
                var2['alpha2'] = var5;
                var5 = _closure2_slot2;
                var2['countryCode'] = var5;
                var1 = _closure2_slot3;
                var2['onPress'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var20 = 'renderLeadingComponent';
            var8[var20] = var22;
            var22 = var6 != var14;
            var20 = 'error';
            var8[var20] = var22;
            var22 = arg2;
            var20 = 'ref';
            var8[var20] = var22;
            var20 = 'value';
            var8[var20] = var21;
            var21 = var11.input;
            var20 = new Array(2);
            var20[0] = var21;
            var20[1] = var16;
            var16 = 'style';
            var8[var16] = var20;
            var16 = 'onChangeText';
            var8[var16] = var19;
            var16 = _closure1_slot0;
            var13 = var13[var18];
            var13 = var16.bind(var4)(var13);
            var13 = var13.PhoneOrEmailSelectorForceMode;
            var13 = var13.PHONE;
            var16 = 'emailAddress';
            if(!(var17 === var13)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var16 = 'telephoneNumber';
case 11:
            var13 = 'textContentType';
            var8[var13] = var16;
            var16 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var18];
            var13 = var16.bind(var4)(var13);
            var13 = var13.PhoneOrEmailSelectorForceMode;
            var13 = var13.PHONE;
            var16 = 'email-address';
            if(!(var17 === var13)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var16 = 'phone-pad';
case 13:
            var13 = 'keyboardType';
            var8[var13] = var16;
            var13 = 'accessibilityLabel';
            var8[var13] = var15;
            var13 = 'accessibilityHint';
            var8[var13] = var10;
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            var9 = var6 != var14;
            var8 = null;
            if(!var9) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var13 = _closure1_slot5;
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var9 = 11;
            var9 = var15[var9];
            var12 = var12.bind(var4)(var9);
            var9 = {};
            var15 = var11.error;
            var9['style'] = var15;
            var9['children'] = var14;
            var8 = var13.bind(var4)(var12, var9);
case 15:
            var5[2] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var7 = 7;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var11 = var11.hint;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 17:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var7.bind(var8)(var2);
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/phone/native/FormPhoneOrEmail.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
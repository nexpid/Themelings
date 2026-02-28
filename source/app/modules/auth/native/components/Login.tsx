// app/modules/auth/native/components/Login.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var7;
    var1 = function handlePressPasswordManagerHint() {
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 14;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var8 = _closure1_slot0;
        var5 = 13;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.lzsy7t;
        var6 = var7.bind(var10)(var6);
        var2['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.TYqh/t;
        var6 = var7.bind(var10)(var6);
        var2['body'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.9x0iKe;
        var6 = var7.bind(var10)(var6);
        var2['confirmText'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.ETE/oC;
        var5 = var6.bind(var7)(var5);
        var2['cancelText'] = var5;
        var5 = function onConfirm() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.openAccessibilitySettings;
                var2 = var2.bind(var3)();
case 2:
                return var1;
            }
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var12.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var5 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var5);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var10 = 4;
    var2 = var7[var10];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AuthStates;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot10 = var5;
    var2 = var2.jsxs;
    var _closure1_slot11 = var2;
    var2 = 8;
    var2 = var7[var2];
    var8 = var6.bind(var1)(var2);
    var5 = var8.createStyles;
    var2 = {};
    var9 = {};
    var11 = 32;
    var9['marginTop'] = var11;
    var2['login'] = var9;
    var9 = {};
    var11 = 24;
    var9['marginTop'] = var11;
    var2['password'] = var9;
    var9 = {'width': '100%', 'marginTop': 16};
    var2['button'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var2['hint'] = var9;
    var9 = {'alignSelf': 'flex-start', 'paddingVertical': 4};
    var2['link'] = var9;
    var9 = {'paddingTop': 24, 'paddingBottom': 8};
    var2['forgotPasswordLinkButtonContainer'] = var9;
    var9 = {'display': 'flex', 'borderRadius': null, 'flexDirection': 'row', 'padding': 12, 'marginTop': 16};
    var11 = 9;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var13 = var7[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_FEEDBACK_CRITICAL;
    var9['backgroundColor'] = var13;
    var2['errorContainer'] = var9;
    var9 = {'textDecorationLine': 'underline', 'textDecorationColor': null, 'flexShrink': 1};
    var11 = var7[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_DEFAULT;
    var9['textDecorationColor'] = var11;
    var2['errorLink'] = var9;
    var9 = {'display': 'flex', 'marginLeft': 8, 'flexDirection': 'row', 'flexWrap': 'wrap', 'width': '100%'};
    var2['errorTextContainer'] = var9;
    var9 = {};
    var9['marginRight'] = var10;
    var2['incorrectText'] = var9;
    var9 = {'paddingHorizontal': 16, 'paddingVertical': 4};
    var2['separator'] = var9;
    var2 = var5.bind(var8)(var2);
    var _closure1_slot12 = var2;
    var2 = function LinkButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var5 = var1.onPress;
            var7 = var1.text;
            var13 = var1.containerStyle;
            var10 = var1.textStyle;
            var9 = var1.variant;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var9 = 'text-xs/medium';
case 4:
            var8 = var1.textColor;
            if(!(var8 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var8 = 'text-link';
case 6:
            var3 = _closure1_slot10;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 10;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var12 = new Array(1);
            var12[0] = var13;
            var1['style'] = var12;
            var12 = {'top': 8, 'right': 8, 'bottom': 8};
            var1['hitSlop'] = var12;
            var12 = 'button';
            var1['accessibilityRole'] = var12;
            var1['onPress'] = var5;
            var5 = 11;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var5['style'] = var10;
            var5['variant'] = var9;
            var5['color'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var5 = function ErrorBanner(arg1) {
        var1 = arg1;
        var13 = var1.onPress;
        var1 = _closure1_slot12;
        var4 = undefined;
        var17 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var17.errorContainer;
        var1['style'] = var5;
        var10 = _closure1_slot10;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var5 = 12;
        var5 = var15[var5];
        var5 = var14.bind(var4)(var5);
        var6 = var5.CircleErrorIcon;
        var5 = {'color': 'icon-feedback-critical', 'size': 'sm'};
        var6 = var10.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var7 = var17.errorTextContainer;
        var6['style'] = var7;
        var7 = 11;
        var7 = var15[var7];
        var7 = var14.bind(var4)(var7);
        var9 = var7.Text;
        var7 = {'style': null, 'color': 'text-default', 'variant': 'text-sm/medium'};
        var11 = var17.incorrectText;
        var7['style'] = var11;
        var16 = 'text-default';
        var12 = 'text-sm/medium';
        var11 = 13;
        var18 = var15[var11];
        var18 = var14.bind(var4)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var15[var11];
        var18 = var14.bind(var4)(var18);
        var18 = var18.t;
        var18 = var18.ayvCBh;
        var18 = var19.bind(var20)(var18);
        var7['children'] = var18;
        var9 = var10.bind(var4)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var9 = _closure1_slot13;
        var8 = {};
        var17 = var17.errorLink;
        var8['textStyle'] = var17;
        var8['textColor'] = var16;
        var8['onPress'] = var13;
        var8['variant'] = var12;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.1q02lR;
        var11 = var12.bind(var13)(var11);
        var8['text'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var7[1] = var8;
        var6['children'] = var7;
        var6 = var3.bind(var4)(var2, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var5;
    var5 = 44;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/native/components/Login.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function Login(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var30 = var1.isMultiAccount;
            var4 = undefined;
            if(!(var30 === var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var30 = false;
case 8:
            var _closure2_slot0 = var30;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var1 = _closure1_slot12;
            var11 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 17;
            var2 = var1[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useNavigation;
            var20 = var2.bind(var3)();
            _closure2_slot1 = var20;
            var2 = 18;
            var2 = var1[var2];
            var8 = var5.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCountryCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var6.bind(var8)(var3, var2);
            var6 = var24.code;
            var3 = var6.split;
            var2 = ' ';
            var2 = var3.bind(var6)(var2);
            var19 = _closure1_slot4;
            var13 = 1;
            var2 = var19.bind(var4)(var2, var13);
            var15 = 0;
            var22 = var2[var15];
            var14 = _closure1_slot5;
            var2 = var14.useRef;
            var12 = null;
            var29 = var2.bind(var14)(var12);
            _closure2_slot2 = var29;
            var2 = var14.useState;
            var28 = false;
            var2 = var2.bind(var14)(var28);
            var17 = 2;
            var2 = var19.bind(var4)(var2, var17);
            var21 = var2[var15];
            var2 = var2[var13];
            _closure2_slot3 = var2;
            var2 = var14.useState;
            var2 = var2.bind(var14)(var28);
            var2 = var19.bind(var4)(var2, var17);
            var16 = var2[var15];
            var2 = var2[var13];
            _closure2_slot4 = var2;
            var3 = var14.useState;
            var2 = {};
            var2 = var3.bind(var14)(var2);
            var2 = var19.bind(var4)(var2, var17);
            var10 = var2[var15];
            var2 = var2[var13];
            _closure2_slot5 = var2;
            var2 = 19;
            var2 = var1[var2];
            var6 = var5.bind(var4)(var2);
            var3 = var6.useMobilePasswordRecoveryExperiment;
            var2 = {};
            var8 = 'Login.tsx';
            var2['location'] = var8;
            var2 = var3.bind(var6)(var2);
            var8 = var2.hasNewLandingPage;
            var6 = var2.hasNewErrorState;
            var3 = var2.showNudgeModal;
            _closure2_slot6 = var3;
            var2 = var14.useState;
            var9 = '';
            var2 = var2.bind(var14)(var9);
            var2 = var19.bind(var4)(var2, var17);
            var27 = var2[var15];
            _closure2_slot7 = var27;
            var2 = var2[var13];
            _closure2_slot8 = var2;
            var2 = var14.useState;
            var2 = var2.bind(var14)(var9);
            var2 = var19.bind(var4)(var2, var17);
            var25 = var2[var15];
            _closure2_slot9 = var25;
            var23 = var2[var13];
            var2 = var14.useState;
            var2 = var2.bind(var14)(var15);
            var2 = var19.bind(var4)(var2, var17);
            var18 = var2[var15];
            _closure2_slot10 = var18;
            var2 = var2[var13];
            _closure2_slot11 = var2;
            var2 = var14.useState;
            var2 = var2.bind(var14)(var28);
            var2 = var19.bind(var4)(var2, var17);
            var17 = var2[var15];
            _closure2_slot12 = var17;
            var2 = var2[var13];
            _closure2_slot13 = var2;
            var2 = var14.useRef;
            var2 = var2.bind(var14)(var4);
            _closure2_slot14 = var2;
            var15 = var14.useEffect;
            var13 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot14;
                    var2 = var1.current;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var15.bind(var14)(var13, var2);
            var15 = var14.useCallback;
            var13 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var5 = var2.retry_after;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
                    var4 = global;
                    var6 = var4.clearTimeout;
                    var5 = _closure2_slot14;
                    var5 = var5.current;
                    var5 = var6.bind(var1)(var5);
                    var6 = _closure2_slot13;
                    var5 = true;
                    var5 = var6.bind(var1)(var5);
                    var3 = _closure2_slot14;
                    var5 = var4.setTimeout;
                    var4 = var2.retry_after;
                    var2 = 1000;
                    var4 = var2 * var4;
                    var2 = function() {
                        var3 = _closure2_slot13;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var5.bind(var1)(var2, var4);
                    var3['current'] = var2;
case 10:
                    return var1;
                }
            };
            var2 = new Array(0);
            var28 = var15.bind(var14)(var13, var2);
            _closure2_slot15 = var28;
            var2 = 20;
            var2 = var1[var2];
            var13 = var5.bind(var4)(var2);
            var5 = var13.useFocusEffect;
            var19 = var14.useCallback;
            var15 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var19.bind(var14)(var15, var2);
            var2 = var5.bind(var13)(var2);
            var15 = var14.useCallback;
            var5 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                        var6 = undefined;
                        if(!(var2 === var6)) { _fun0005_ip = 14; continue _fun0005 }
case 8:
                        var2 = false;
case 14:
                        var8 = var2;
                        var9 = undefined;
                        SaveGenerator(address=30);
case 15:
                        return var6;
case 16:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var5 = _closure2_slot4;
                        var3 = true;
                        var3 = var5.bind(var6)(var3);
                        var5 = _closure2_slot5;
                        var3 = {};
                        var3 = var5.bind(var6)(var3);
case 19: // try_start_0 // try_start_1
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var3 = 21;
                        var3 = var10[var3];
                        var10 = var7.bind(var6)(var3);
                        var7 = var10.forgotPassword;
                        var3 = _closure2_slot7;
                        var3 = var7.bind(var10)(var3);
                        SaveGenerator(address=106);
case 20:
                        return var3;
case 21:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(var7) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                        var9 = var3;
                        var7 = false;
                        if(!(var7 !== var3)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                        var10 = var9;
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var9 = 22;
                        var9 = var12[var9];
                        var9 = var11.bind(var6)(var9);
                        var9 = var9.PasswordResetMethods;
                        var9 = var9.ONE_TIME_LOGIN;
                        if(!(var10 !== var9)) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                        if(var8) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                        var9 = _closure1_slot1;
                        var15 = _closure1_slot2;
                        var8 = 14;
                        var8 = var15[var8];
                        var10 = var9.bind(var6)(var8);
                        var9 = var10.show;
                        var8 = {};
                        var12 = _closure1_slot0;
                        var11 = 13;
                        var13 = var15[var11];
                        var13 = var12.bind(var6)(var13);
                        var16 = var13.intl;
                        var14 = var16.string;
                        var13 = var15[var11];
                        var13 = var12.bind(var6)(var13);
                        var13 = var13.t;
                        var13 = var13.f5Pi7A;
                        var13 = var14.bind(var16)(var13);
                        var8['title'] = var13;
                        var13 = var15[var11];
                        var13 = var12.bind(var6)(var13);
                        var14 = var13.intl;
                        var13 = var14.format;
                        var11 = var15[var11];
                        var11 = var12.bind(var6)(var11);
                        var11 = var11.t;
                        var12 = var11.6u5hQ9;
                        var11 = {};
                        var15 = _closure2_slot7;
                        var11['email'] = var15;
                        var11 = var13.bind(var14)(var12, var11);
                        var8['body'] = var11;
                        var8 = var9.bind(var10)(var8);
                        _fun0005_ip = 30; continue _fun0005;
case 28:
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var8 = 23;
                        var8 = var13[var8];
                        var11 = var9.bind(var6)(var8);
                        var10 = var11.openAlert;
                        var12 = _closure1_slot10;
                        var9 = _closure1_slot1;
                        var8 = 25;
                        var8 = var13[var8];
                        var9 = var9.bind(var6)(var8);
                        var8 = {};
                        var13 = _closure2_slot7;
                        var8['email'] = var13;
                        var9 = var12.bind(var6)(var9, var8);
                        var8 = 'reset-password-confirm';
                        var8 = var10.bind(var11)(var8, var9);
                        _fun0005_ip = 30; continue _fun0005;
case 26:
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var8 = 23;
                        var8 = var12[var8];
                        var10 = var9.bind(var6)(var8);
                        var9 = var10.openAlert;
                        var11 = _closure1_slot10;
                        var8 = _closure1_slot1;
                        var5 = 24;
                        var5 = var12[var5];
                        var8 = var8.bind(var6)(var5);
                        var5 = {};
                        var8 = var11.bind(var6)(var8, var5);
                        var5 = 'one-time-login-forgot-password-confirm';
                        var5 = var9.bind(var10)(var5, var8);
case 30: // try_end0
                        _fun0005_ip = 31; continue _fun0005;
case 24: // try_end1
                        var5 = _closure2_slot4;
                        var5 = var5.bind(var6)(var7);
                        return var6;
case 22:
                        var7 = _closure2_slot4;
                        var5 = false;
                        var5 = var7.bind(var6)(var5);
                        return var3;
case 32: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 26;
                        var3 = var8[var3];
                        var5 = var5.bind(var6)(var3);
                        var3 = var5.getAuthenticationErrorsFromV6OrEarlierAPIError;
                        var5 = var3.bind(var5)(var7);
                        var3 = _closure2_slot15;
                        var3 = var3.bind(var6)(var5);
case 31: // try_end2
                        var5 = _closure2_slot4;
                        var3 = false;
                        var3 = var5.bind(var6)(var3);
                        return var6;
case 33: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
case 17:
                        return var2;
case 12:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var13 = var5.bind(var4)(var2);
            var2 = new Array(2);
            var2[0] = var28;
            var2[1] = var27;
            var2 = var15.bind(var14)(var13, var2);
            _closure2_slot16 = var2;
            var15 = var14.useCallback;
            var13 = new Array(1);
            var13[0] = var2;
            var2 = function() {
                var3 = _closure2_slot16;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var15.bind(var14)(var2, var13);
            _closure2_slot17 = var2;
            var15 = var14.useCallback;
            var13 = new Array(2);
            var13[0] = var2;
            var13[1] = var27;
            var2 = function() {
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 23;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.openAlert;
                var6 = _closure1_slot10;
                var3 = _closure1_slot1;
                var2 = 27;
                var2 = var7[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var8 = _closure2_slot17;
                var2['onConfirm'] = var8;
                var7 = _closure2_slot7;
                var2['login'] = var7;
                var3 = var6.bind(var1)(var3, var2);
                var2 = 'reset-password-nudge';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var19 = var15.bind(var14)(var2, var13);
            _closure2_slot18 = var19;
            var15 = var14.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            StartGenerator();
                            var2 = arguments[2];
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0006_ip = 34; continue _fun0006 }
case 13:
                            var10 = arg1;
                            var9 = arg2;
                            var3 = undefined;
                            if(!(var2 === var3)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
                            var2 = false;
case 35:
                            var12 = var2;
                            var4 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=38);
case 5:
                            return var3;
case 3:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                            var8 = _closure2_slot4;
                            var6 = true;
                            var6 = var8.bind(var3)(var6);
                            var8 = _closure2_slot5;
                            var6 = {};
                            var6 = var8.bind(var3)(var6);
case 39: // try_start_0
                            var8 = _closure1_slot1;
                            var11 = _closure1_slot2;
                            var6 = 21;
                            var6 = var11[var6];
                            var11 = var8.bind(var3)(var6);
                            var8 = var11.login;
                            var6 = {};
                            var13 = var10;
                            var6['login'] = var13;
                            var13 = var9;
                            var6['password'] = var13;
                            var6['undelete'] = var12;
                            var12 = _closure2_slot0;
                            var6['isMultiAccount'] = var12;
                            var6 = var8.bind(var11)(var6);
                            SaveGenerator(address=142);
case 40:
                            return var6;
case 41:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0006_ip = 42; continue _fun0006 }
case 43: // try_end0
                            _fun0006_ip = 44; continue _fun0006;
case 42:
                            return var6;
case 45: // catch_target0
                            CatchBlockStart(arg_register=12);
                            var8 = _closure2_slot4;
                            var6 = false;
                            var6 = var8.bind(var3)(var6);
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 26;
                            var6 = var11[var6];
                            var12 = var12.bind(var3)(var6);
                            var6 = var12.getAuthenticationErrorsFromV6OrEarlierAPIError;
                            var14 = var6.bind(var12)(var13);
                            var4 = var14;
                            var12 = _closure1_slot1;
                            var13 = 28;
                            var11 = var11[var13];
                            var12 = var12.bind(var3)(var11);
                            var11 = 'login';
                            var12 = var12.bind(var3)(var11, var14);
                            var11 = null;
                            var12 = var11 != var12;
                            var6 = var12;
                            if(!var12) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                            var12 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var8 = var8[var13];
                            var13 = var12.bind(var3)(var8);
                            var12 = var4;
                            var8 = 'password';
                            var8 = var13.bind(var3)(var8, var12);
                            var6 = var11 != var8;
case 46:
                            var7 = var6;
                            var11 = var10;
                            var10 = '';
                            var11 = var10 !== var11;
                            var8 = var11;
                            if(!var11) { _fun0006_ip = 48; continue _fun0006 }
case 49:
                            var8 = var10 !== var9;
case 48:
                            var6 = var8;
                            if(!var8) { _fun0006_ip = 50; continue _fun0006 }
case 51:
                            var6 = var7;
case 50:
                            if(!var6) { _fun0006_ip = 52; continue _fun0006 }
case 53:
                            var7 = _closure2_slot11;
                            var6 = function(arg1) {
                                var2 = arg1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var1;
                            };
                            var6 = var7.bind(var3)(var6);
case 52:
                            var5 = _closure2_slot15;
                            var4 = var5.bind(var3)(var4);
case 44:
                            return var3;
case 37:
                            return var2;
case 34:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var13 = var2.bind(var4)();
            var2 = new Array(2);
            var2[0] = var28;
            var2[1] = var30;
            var13 = var15.bind(var14)(var13, var2);
            _closure2_slot19 = var13;
            var15 = var14.useCallback;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 44; continue _fun0007 }
case 54:
                        var2 = undefined;
                        var9 = undefined;
                        var5 = _closure2_slot12;
                        if(var5) { _fun0007_ip = 55; continue _fun0007 }
case 35:
                        var7 = _closure1_slot8;
                        var6 = var7.getIsPasswordlessActive;
                        var6 = var6.bind(var7)();
                        if(var6) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 29;
                        var6 = var8[var6];
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.getPasskeyAuthenticator;
                        var9 = var6.bind(var7)();
                        var7 = _closure2_slot4;
                        var6 = true;
                        var6 = var7.bind(var2)(var6);
                        var7 = _closure2_slot5;
                        var6 = {};
                        var6 = var7.bind(var2)(var6);
case 57: // try_start_0 // try_start_1
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 21;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.authenticatePasswordless;
                        var6 = {};
                        var6['authenticateFunc'] = var9;
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address=144);
case 41:
                        return var6;
case 58:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0007_ip = 59; continue _fun0007 }
case 60: // try_end0
                        _fun0007_ip = 51; continue _fun0007;
case 59: // try_end1
                        var8 = _closure2_slot4;
                        var7 = false;
                        var7 = var8.bind(var2)(var7);
                        return var6;
case 27: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        var3 = var7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 30;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.APIError;
                        var6 = var7 instanceof var6;
                        if(var6) { _fun0007_ip = 61; continue _fun0007 }
case 62:
                        var7 = var3;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 31;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.IgnorableWebAuthnError;
                        var6 = var7 instanceof var6;
                        if(var6) { _fun0007_ip = 51; continue _fun0007 }
case 63:
                        var7 = _closure2_slot5;
                        var6 = {};
                        var8 = var3;
                        var8 = var8.message;
                        var6['message'] = var8;
                        var6 = var7.bind(var2)(var6);
                        _fun0007_ip = 51; continue _fun0007;
case 61:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 26;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.getAuthenticationErrorsFromAPIError;
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure2_slot15;
                        var3 = var3.bind(var2)(var5);
case 51: // try_end2
                        var5 = _closure2_slot4;
                        var3 = false;
                        var3 = var5.bind(var2)(var3);
                        _fun0007_ip = 55; continue _fun0007;
case 64: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var2)(var4);
                        throw var3;
case 55:
                        return var2;
case 44:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var5.bind(var4)(var2);
            var2 = new Array(2);
            var2[0] = var28;
            var2[1] = var17;
            var15 = var15.bind(var14)(var5, var2);
            var2 = _closure1_slot1;
            var5 = 32;
            var5 = var1[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var5 = 33;
            var5 = var1[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)(var20, var13);
            var13 = var14.useEffect;
            var5 = new Array(3);
            var5[0] = var19;
            var5[1] = var18;
            var5[2] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = 2;
                    var2 = var2 === var3;
                    if(!var2) { _fun0008_ip = 14; continue _fun0008 }
case 9:
                    var2 = _closure2_slot6;
case 14:
                    if(!var2) { _fun0008_ip = 65; continue _fun0008 }
case 66:
                    var2 = _closure2_slot18;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
case 65:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var13.bind(var14)(var3, var5);
            var3 = 28;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var28 = 'password';
            var1 = var1.bind(var4)(var28, var10);
            var5 = var12 != var1;
            if(!var5) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'login';
            var1 = var2.bind(var4)(var1, var10);
            var5 = var12 != var1;
case 67:
            if(!var6) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            if(var5) { _fun0003_ip = 71; continue _fun0003 }
case 69:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'login';
            var30 = var2.bind(var4)(var1, var10);
            if(!(var12 == var30)) { _fun0003_ip = 72; continue _fun0003 }
case 73:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'email';
            var30 = var2.bind(var4)(var1, var10);
case 72:
            _fun0003_ip = 74; continue _fun0003;
case 71:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'email';
            var30 = var2.bind(var4)(var1, var10);
case 74:
            var18 = null;
            if(var6) { _fun0003_ip = 75; continue _fun0003 }
case 76:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var18 = var1.bind(var4)(var28, var10);
case 75:
            var3 = _closure1_slot11;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 34;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var31 = _closure1_slot0;
            var20 = 13;
            var14 = var13[var20];
            var14 = var31.bind(var4)(var14);
            var19 = var14.intl;
            var14 = var19.string;
            var13 = var13[var20];
            var13 = var31.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.7fNJgA;
            var13 = var14.bind(var19)(var13);
            var1['headerText'] = var13;
            var13 = null;
            if(var8) { _fun0003_ip = 77; continue _fun0003 }
case 78:
            var31 = _closure1_slot10;
            var35 = _closure1_slot0;
            var32 = _closure1_slot2;
            var14 = 11;
            var14 = var32[var14];
            var14 = var35.bind(var4)(var14);
            var19 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var33 = var32[var20];
            var33 = var35.bind(var4)(var33);
            var34 = var33.intl;
            var33 = var34.string;
            var32 = var32[var20];
            var32 = var35.bind(var4)(var32);
            var32 = var32.t;
            var32 = var32.euS7r4;
            var32 = var33.bind(var34)(var32);
            var14['children'] = var32;
            var13 = var31.bind(var4)(var19, var14);
case 77:
            var1['subHeader'] = var13;
            if(!var6) { _fun0003_ip = 79; continue _fun0003 }
case 80:
            var6 = var5;
case 79:
            if(!var6) { _fun0003_ip = 81; continue _fun0003 }
case 82:
            var14 = _closure1_slot10;
            var13 = _closure1_slot14;
            var5 = {};
            var19 = function onPress() {
                var2 = _closure2_slot16;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var5['onPress'] = var19;
            var6 = var14.bind(var4)(var13, var5);
case 81:
            var5 = new Array(11);
            var5[0] = var6;
            var14 = _closure1_slot10;
            var13 = _closure1_slot1;
            var19 = _closure1_slot2;
            var6 = 35;
            var6 = var19[var6];
            var13 = var13.bind(var4)(var6);
            var6 = {};
            var31 = var11.login;
            var6['containerStyle'] = var31;
            var31 = !var8;
            var6['autoFocus'] = var31;
            var31 = 'emailAddress';
            var6['textContentType'] = var31;
            var31 = 'email-address';
            var6['keyboardType'] = var31;
            var24 = var24.alpha2;
            var6['alpha2'] = var24;
            var6['countryCode'] = var22;
            var22 = function onChange(arg1, arg2) {
                var4 = _closure2_slot11;
                var1 = undefined;
                var3 = 0;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot8;
                var4 = arg2;
                var2 = arg1;
                var2 = var4 + var2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var6['onChange'] = var22;
            var22 = function onSubmitEditing() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 83; continue _fun0009 }
case 84:
                    var2 = var3.focus;
                    var1 = var2.bind(var3)();
case 83:
                    return var1;
                }
            };
            var6['onSubmitEditing'] = var22;
            var22 = 'next';
            var6['returnKeyType'] = var22;
            var22 = 'none';
            var6['autoCapitalize'] = var22;
            var24 = _closure1_slot0;
            var31 = var19[var20];
            var31 = var24.bind(var4)(var31);
            var33 = var31.intl;
            var32 = var33.string;
            var31 = var19[var20];
            var31 = var24.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.tUjnxr;
            var31 = var32.bind(var33)(var31);
            var6['label'] = var31;
            var6['errorMessage'] = var30;
            var30 = 'login_login_input';
            var6['testID'] = var30;
            var30 = function onPressCountrySelector() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot9;
                var1 = var1.COUNTRY_SELECT;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var6['onPressCountrySelector'] = var30;
            var30 = true;
            var6['isClearable'] = var30;
            var30 = 'username';
            var6['autoComplete'] = var30;
            var6 = var14.bind(var4)(var13, var6);
            var5[1] = var6;
            var6 = 36;
            var6 = var19[var6];
            var6 = var24.bind(var4)(var6);
            var13 = var6.TextInput;
            var6 = {};
            var30 = var11.password;
            var6['containerStyle'] = var30;
            var6['ref'] = var29;
            var6['textContentType'] = var28;
            var28 = !var21;
            var6['secureTextEntry'] = var28;
            var6['onChange'] = var23;
            var6['autoCapitalize'] = var22;
            var22 = function onSubmitEditing() {
                var4 = _closure2_slot19;
                var3 = _closure2_slot7;
                var2 = _closure2_slot9;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['onSubmitEditing'] = var22;
            var22 = var19[var20];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var19 = var19[var20];
            var19 = var24.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.CIGa+7;
            var19 = var22.bind(var23)(var19);
            var6['label'] = var19;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            if(var21) { _fun0003_ip = 85; continue _fun0003 }
case 86:
            var19 = 38;
            var19 = var24[var19];
            var19 = var23.bind(var4)(var19);
            var19 = var19.EyeIcon;
            _fun0003_ip = 87; continue _fun0003;
case 85:
            var22 = 37;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var19 = var22.EyeSlashIcon;
case 87:
            var6['trailingIcon'] = var19;
            var19 = {};
            var28 = _closure1_slot0;
            var22 = _closure1_slot2;
            var23 = var22[var20];
            var23 = var28.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var22 = var22[var20];
            var22 = var28.bind(var4)(var22);
            var22 = var22.t;
            if(var21) { _fun0003_ip = 88; continue _fun0003 }
case 89:
            var21 = var22.nFzpM5;
            var21 = var23.bind(var24)(var21);
            _fun0003_ip = 90; continue _fun0003;
case 88:
            var22 = var22.Nusip4;
            var21 = var23.bind(var24)(var22);
case 90:
            var19['accessibilityLabel'] = var21;
            var21 = function onPress() {
                var3 = _closure2_slot3;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var19['onPress'] = var21;
            var21 = {'top': 8, 'bottom': 8};
            var19['hitSlop'] = var21;
            var6['trailingPressableProps'] = var19;
            var19 = 'done';
            var6['returnKeyType'] = var19;
            var6['errorMessage'] = var18;
            var18 = 'login_password_input';
            var6['testID'] = var18;
            var18 = 'current-password';
            var6['autoComplete'] = var18;
            var6 = var14.bind(var4)(var13, var6);
            var5[2] = var6;
            var6 = !var8;
            if(!var6) { _fun0003_ip = 91; continue _fun0003 }
case 92:
            var18 = _closure1_slot10;
            var14 = _closure1_slot13;
            var13 = {};
            var19 = var11.link;
            var13['containerStyle'] = var19;
            var19 = function onPress() {
                var2 = _closure2_slot16;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var13['onPress'] = var19;
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var21 = var19[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var19[var20];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.wWIufs;
            var19 = var21.bind(var22)(var19);
            var13['text'] = var19;
            var6 = var18.bind(var4)(var14, var13);
case 91:
            var5[3] = var6;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 15;
            var6 = var14[var6];
            var13 = var13.bind(var4)(var6);
            var6 = var13.isAndroid;
            var13 = var6.bind(var13)();
            var6 = null;
            if(!var13) { _fun0003_ip = 93; continue _fun0003 }
case 94:
            var18 = _closure1_slot10;
            var14 = _closure1_slot13;
            var13 = {};
            var19 = var11.link;
            var13['containerStyle'] = var19;
            var19 = _closure1_slot15;
            var13['onPress'] = var19;
            var23 = _closure1_slot0;
            var19 = _closure1_slot2;
            var21 = var19[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var19[var20];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.RL5Fy2;
            var19 = var21.bind(var22)(var19);
            var13['text'] = var19;
            var19 = 'text-link';
            if(!var8) { _fun0003_ip = 95; continue _fun0003 }
case 96:
            var19 = 'text-brand';
case 95:
            var13['textColor'] = var19;
            var6 = var18.bind(var4)(var14, var13);
case 93:
            var5[4] = var6;
            var6 = null;
            if(!var8) { _fun0003_ip = 97; continue _fun0003 }
case 98:
            var13 = var10.message;
            var13 = var12 != var13;
            var6 = null;
            if(!var13) { _fun0003_ip = 97; continue _fun0003 }
case 99:
            var13 = var10.message;
            var6 = null;
            if(!(var9 !== var13)) { _fun0003_ip = 97; continue _fun0003 }
case 100:
            var18 = _closure1_slot10;
            var14 = _closure1_slot1;
            var19 = _closure1_slot2;
            var13 = 39;
            var13 = var19[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var19 = var11.hint;
            var13['style'] = var19;
            var19 = var10.message;
            var13['children'] = var19;
            var6 = var18.bind(var4)(var14, var13);
case 97:
            var5[5] = var6;
            var18 = _closure1_slot10;
            var14 = _closure1_slot6;
            var13 = {};
            var19 = var11.button;
            var6 = new Array(2);
            var6[0] = var19;
            var19 = var8;
            if(!var19) { _fun0003_ip = 101; continue _fun0003 }
case 102:
            var21 = {};
            var22 = 24;
            var21['marginTop'] = var22;
            var19 = var21;
case 101:
            var6[1] = var19;
            var13['style'] = var6;
            var22 = _closure1_slot10;
            var21 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 40;
            var19 = var19[var6];
            var19 = var21.bind(var4)(var19);
            var21 = var19.Button;
            var19 = {};
            var23 = 'lg';
            var19['size'] = var23;
            var23 = var17;
            if(!var8) { _fun0003_ip = 103; continue _fun0003 }
case 104:
            var24 = var17;
            if(var17) { _fun0003_ip = 105; continue _fun0003 }
case 106:
            var24 = var9 === var27;
case 105:
            if(var24) { _fun0003_ip = 107; continue _fun0003 }
case 108:
            var24 = var9 === var25;
case 107:
            var23 = var24;
case 103:
            var19['disabled'] = var23;
            var19['loading'] = var16;
            var27 = _closure1_slot0;
            var23 = _closure1_slot2;
            var24 = var23[var20];
            var24 = var27.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var20];
            var23 = var27.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.dKhVQN;
            var23 = var24.bind(var25)(var23);
            var19['text'] = var23;
            var23 = function onPress() {
                var4 = _closure2_slot19;
                var3 = _closure2_slot7;
                var2 = _closure2_slot9;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var19['onPress'] = var23;
            var19 = var22.bind(var4)(var21, var19);
            var13['children'] = var19;
            var13 = var18.bind(var4)(var14, var13);
            var5[6] = var13;
            var13 = null;
            if(!var8) { _fun0003_ip = 109; continue _fun0003 }
case 110:
            var19 = _closure1_slot10;
            var18 = _closure1_slot6;
            var14 = {};
            var28 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 41;
            var21 = var25[var21];
            var21 = var28.bind(var4)(var21);
            var22 = var21.Stack;
            var21 = {'direction': 'horizontal', 'align': 'center', 'justify': 'center'};
            var23 = var11.forgotPasswordLinkButtonContainer;
            var21['style'] = var23;
            var24 = _closure1_slot13;
            var23 = {};
            var26 = function onPress() {
                var2 = _closure2_slot16;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var23['onPress'] = var26;
            var26 = var25[var20];
            var26 = var28.bind(var4)(var26);
            var27 = var26.intl;
            var26 = var27.string;
            var25 = var25[var20];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.+/6Nv9;
            var25 = var26.bind(var27)(var25);
            var23['text'] = var25;
            var25 = 'text-md/medium';
            var23['variant'] = var25;
            var25 = 'text-brand';
            var23['textColor'] = var25;
            var23 = var19.bind(var4)(var24, var23);
            var21['children'] = var23;
            var21 = var19.bind(var4)(var22, var21);
            var14['children'] = var21;
            var13 = var19.bind(var4)(var18, var14);
case 109:
            var5[7] = var13;
            var14 = _closure1_slot10;
            var19 = _closure1_slot0;
            var21 = _closure1_slot2;
            var13 = 41;
            var13 = var21[var13];
            var13 = var19.bind(var4)(var13);
            var18 = var13.Stack;
            var13 = {};
            var22 = var11.separator;
            var13['style'] = var22;
            var22 = 42;
            var22 = var21[var22];
            var22 = var19.bind(var4)(var22);
            var23 = var22.OrSeparator;
            var22 = {};
            var22 = var14.bind(var4)(var23, var22);
            var13['children'] = var22;
            var13 = var14.bind(var4)(var18, var13);
            var5[8] = var13;
            var6 = var21[var6];
            var6 = var19.bind(var4)(var6);
            var13 = var6.Button;
            var6 = {'icon': null, 'size': 'lg', 'variant': 'tertiary'};
            var18 = 43;
            var18 = var21[var18];
            var18 = var19.bind(var4)(var18);
            var19 = var18.KeyIcon;
            var18 = {};
            var18 = var14.bind(var4)(var19, var18);
            var6['icon'] = var18;
            if(var16) { _fun0003_ip = 111; continue _fun0003 }
case 112:
            var16 = var17;
case 111:
            var6['disabled'] = var16;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.EiwJkN;
            var16 = var17.bind(var18)(var16);
            var6['text'] = var16;
            var6['onPress'] = var15;
            var6 = var14.bind(var4)(var13, var6);
            var5[9] = var6;
            var6 = null;
            if(var8) { _fun0003_ip = 113; continue _fun0003 }
case 114:
            var8 = var10.message;
            var8 = var12 == var8;
            var6 = null;
            if(var8) { _fun0003_ip = 113; continue _fun0003 }
case 115:
            var8 = var10.message;
            var6 = null;
            if(!(var9 !== var8)) { _fun0003_ip = 113; continue _fun0003 }
case 116:
            var9 = _closure1_slot10;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 39;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var11.hint;
            var7['style'] = var11;
            var10 = var10.message;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 113:
            var5[10] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['LinkButton'] = var2;
    return var1;
})();
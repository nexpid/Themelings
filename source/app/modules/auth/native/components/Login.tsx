// app/modules/auth/native/components/Login.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
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
        var6 = var6.lzsy7u;
        var6 = var7.bind(var10)(var6);
        var2['title'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.TYqh/v;
        var6 = var7.bind(var10)(var6);
        var2['body'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var10 = var6.intl;
        var7 = var10.string;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.9x0iKS;
        var6 = var7.bind(var10)(var6);
        var2['confirmText'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var1)(var5);
        var5 = var5.t;
        var5 = var5.ETE/oK;
        var5 = var6.bind(var7)(var5);
        var2['cancelText'] = var5;
        var5 = function onConfirm() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 69; continue _fun0001 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 16;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.openAccessibilitySettings;
                var2 = var2.bind(var3)();
 69:
                return var1;
            }
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot16 = var1;
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
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot6 = var7;
    var4 = var4.NativeModules;
    var _closure1_slot7 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AuthStates;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 32;
    var9['marginTop'] = var10;
    var4['login'] = var9;
    var9 = {};
    var10 = 24;
    var9['marginTop'] = var10;
    var4['password'] = var9;
    var10 = 16;
    var9 = {'width': '100%', 'marginTop': 16};
    var4['button'] = var9;
    var9 = {};
    var9['marginTop'] = var11;
    var4['hint'] = var9;
    var9 = {'alignSelf': 'flex-start', 'paddingVertical': 4};
    var4['link'] = var9;
    var12 = 12;
    var9 = {'paddingTop': 24, 'paddingBottom': 12};
    var4['forgotPasswordLinkButtonContainer'] = var9;
    var9 = {};
    var9['marginTop'] = var12;
    var4['passkeyButton'] = var9;
    var9 = {'display': 'flex', 'borderRadius': null, 'flexDirection': 'row', 'padding': 12, 'marginTop': 16};
    var12 = 9;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var14 = var6[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.INFO_DANGER_BACKGROUND;
    var9['backgroundColor'] = var14;
    var4['errorContainer'] = var9;
    var9 = {'textDecorationLine': 'underline', 'textDecorationColor': null, 'flexShrink': 1};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.TEXT_NORMAL;
    var9['textDecorationColor'] = var12;
    var4['errorLink'] = var9;
    var9 = {'display': 'flex', 'marginLeft': 8, 'flexDirection': 'row', 'flexWrap': 'wrap', 'width': '100%'};
    var4['errorTextContainer'] = var9;
    var9 = {};
    var9['marginRight'] = var11;
    var4['incorrectText'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var10;
    var4['separator'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = function LinkButton(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var5 = var1.onPress;
            var7 = var1.text;
            var13 = var1.containerStyle;
            var10 = var1.textStyle;
            var9 = var1.variant;
            var4 = undefined;
            if(!(var9 === var4)) { _fun0002_ip = 40; continue _fun0002 }
 36:
            var9 = 'text-xs/medium';
 40:
            var8 = var1.textColor;
            if(!(var8 === var4)) { _fun0002_ip = 56; continue _fun0002 }
 50:
            var8 = 'text-link';
 56:
            var3 = _closure1_slot11;
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
    var _closure1_slot14 = var4;
    var4 = function ErrorBanner(arg1) {
        var1 = arg1;
        var13 = var1.onPress;
        var1 = _closure1_slot13;
        var4 = undefined;
        var17 = var1.bind(var4)();
        var3 = _closure1_slot12;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var17.errorContainer;
        var1['style'] = var5;
        var10 = _closure1_slot11;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var5 = 12;
        var5 = var15[var5];
        var5 = var14.bind(var4)(var5);
        var6 = var5.CircleErrorIcon;
        var5 = {'color': 'info-danger-foreground', 'size': 'sm'};
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
        var7 = {'style': null, 'color': 'text-normal', 'variant': 'text-sm/medium'};
        var11 = var17.incorrectText;
        var7['style'] = var11;
        var16 = 'text-normal';
        var12 = 'text-sm/medium';
        var11 = 13;
        var18 = var15[var11];
        var18 = var14.bind(var4)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var15[var11];
        var18 = var14.bind(var4)(var18);
        var18 = var18.t;
        var18 = var18.ayvCBg;
        var18 = var19.bind(var20)(var18);
        var7['children'] = var18;
        var9 = var10.bind(var4)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var9 = _closure1_slot14;
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
        var11 = var11.1q02lZ;
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
    var _closure1_slot15 = var4;
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/Login.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Login(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var25 = var1.isMultiAccount;
            var4 = undefined;
            if(!(var25 === var4)) { _fun0003_ip = 19; continue _fun0003 }
 17:
            var25 = false;
 19:
            var _closure2_slot0 = var25;
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
            var20 = function handlePasskeyLogin() {
                var1 = undefined;
                var4 = _closure2_slot19;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var1 = function _handlePasskeyLogin() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0004_ip = 239; continue _fun0004 }
 10:
                            var2 = undefined;
                            var8 = undefined;
                            var4 = _closure2_slot11;
                            if(var4) { _fun0004_ip = 236; continue _fun0004 }
 27:
                            var6 = _closure1_slot9;
                            var5 = var6.getIsPasswordlessActive;
                            var5 = var5.bind(var6)();
                            if(var5) { _fun0004_ip = 236; continue _fun0004 }
 50:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 27;
                            var5 = var7[var5];
                            var5 = var6.bind(var2)(var5);
                            var5 = var5.hasAndroidPasskeySupport;
                            var6 = _closure1_slot7;
                            var6 = var6.DCDSecurityKeyManager;
                            if(var5) { _fun0004_ip = 99; continue _fun0004 }
 91:
                            var5 = var6.authenticate;
                            _fun0004_ip = 105; continue _fun0004;
 99:
                            var5 = var6.authenticatePasskey;
 105:
                            var8 = var5;
                            var6 = _closure2_slot4;
                            var5 = true;
                            var5 = var6.bind(var2)(var5);
                            var6 = _closure2_slot5;
                            var5 = {};
                            var5 = var6.bind(var2)(var5);
 130: // try_start_0
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 21;
                            var5 = var7[var5];
                            var7 = var6.bind(var2)(var5);
                            var6 = var7.authenticatePasswordless;
                            var5 = {};
                            var5['authenticateFunc'] = var8;
                            var5 = var6.bind(var7)(var5);
                            SaveGenerator(address=172);
 170:
                            return var5;
 172:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0004_ip = 180; continue _fun0004 }
 178: // try_end0
                            _fun0004_ip = 236; continue _fun0004;
 180:
                            return var5;
 183: // catch_target0
                            CatchBlockStart(arg_register=5);
                            var7 = _closure2_slot4;
                            var5 = false;
                            var5 = var7.bind(var2)(var5);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 24;
                            var4 = var7[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.getAuthenticationErrorsFromAPIError;
                            var4 = var4.bind(var5)(var6);
                            var3 = _closure2_slot14;
                            var3 = var3.bind(var2)(var4);
 236:
                            return var2;
 239:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot19 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot19 = var1;
            var1 = _closure1_slot13;
            var11 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 17;
            var2 = var1[var2];
            var3 = var5.bind(var4)(var2);
            var2 = var3.useNavigation;
            var17 = var2.bind(var3)();
            _closure2_slot1 = var17;
            var2 = 18;
            var2 = var1[var2];
            var8 = var5.bind(var4)(var2);
            var6 = var8.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCountryCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var29 = var6.bind(var8)(var3, var2);
            var6 = var29.code;
            var3 = var6.split;
            var2 = ' ';
            var2 = var3.bind(var6)(var2);
            var26 = _closure1_slot4;
            var13 = 1;
            var2 = var26.bind(var4)(var2, var13);
            var16 = 0;
            var24 = var2[var16];
            var14 = _closure1_slot5;
            var2 = var14.useRef;
            var12 = null;
            var27 = var2.bind(var14)(var12);
            _closure2_slot2 = var27;
            var2 = var14.useState;
            var30 = false;
            var2 = var2.bind(var14)(var30);
            var23 = 2;
            var2 = var26.bind(var4)(var2, var23);
            var18 = var2[var16];
            var2 = var2[var13];
            _closure2_slot3 = var2;
            var2 = var14.useState;
            var2 = var2.bind(var14)(var30);
            var2 = var26.bind(var4)(var2, var23);
            var22 = var2[var16];
            var2 = var2[var13];
            _closure2_slot4 = var2;
            var3 = var14.useState;
            var2 = {};
            var2 = var3.bind(var14)(var2);
            var2 = var26.bind(var4)(var2, var23);
            var10 = var2[var16];
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
            var6 = var2.hasNewLandingPage;
            var8 = var2.hasNewErrorState;
            var3 = var2.showNudgeModal;
            _closure2_slot6 = var3;
            var2 = var14.useState;
            var2 = var2.bind(var14)(var16);
            var2 = var26.bind(var4)(var2, var23);
            var15 = var2[var16];
            _closure2_slot7 = var15;
            var2 = var2[var13];
            _closure2_slot8 = var2;
            var2 = var14.useRef;
            var9 = '';
            var2 = var2.bind(var14)(var9);
            _closure2_slot9 = var2;
            var21 = var14.useCallback;
            var19 = function(arg1, arg2) {
                var4 = _closure2_slot8;
                var1 = undefined;
                var3 = 0;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot9;
                var4 = arg2;
                var2 = arg1;
                var2 = var4 + var2;
                var3['current'] = var2;
                return var1;
            };
            var2 = new Array(0);
            var19 = var21.bind(var14)(var19, var2);
            var2 = var14.useRef;
            var2 = var2.bind(var14)(var9);
            _closure2_slot10 = var2;
            var31 = var14.useCallback;
            var21 = function(arg1) {
                var2 = _closure2_slot10;
                var1 = arg1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var21 = var31.bind(var14)(var21, var2);
            var2 = var14.useState;
            var2 = var2.bind(var14)(var30);
            var2 = var26.bind(var4)(var2, var23);
            var23 = var2[var16];
            _closure2_slot11 = var23;
            var2 = var2[var13];
            _closure2_slot12 = var2;
            var2 = var14.useRef;
            var2 = var2.bind(var14)(var4);
            _closure2_slot13 = var2;
            var16 = var14.useEffect;
            var13 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot13;
                    var2 = var1.current;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var16.bind(var14)(var13, var2);
            var16 = var14.useCallback;
            var13 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var5 = var2.retry_after;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0005_ip = 109; continue _fun0005 }
 29:
                    var4 = global;
                    var6 = var4.clearTimeout;
                    var5 = _closure2_slot13;
                    var5 = var5.current;
                    var5 = var6.bind(var1)(var5);
                    var6 = _closure2_slot12;
                    var5 = true;
                    var5 = var6.bind(var1)(var5);
                    var3 = _closure2_slot13;
                    var5 = var4.setTimeout;
                    var4 = var2.retry_after;
                    var2 = 1000;
                    var4 = var2 * var4;
                    var2 = function() {
                        var3 = _closure2_slot12;
                        var1 = undefined;
                        var2 = false;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var5.bind(var1)(var2, var4);
                    var3['current'] = var2;
 109:
                    return var1;
                }
            };
            var2 = new Array(0);
            var26 = var16.bind(var14)(var13, var2);
            _closure2_slot14 = var26;
            var2 = 20;
            var2 = var1[var2];
            var13 = var5.bind(var4)(var2);
            var5 = var13.useFocusEffect;
            var30 = var14.useCallback;
            var16 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var30.bind(var14)(var16, var2);
            var2 = var5.bind(var13)(var2);
            var13 = var14.useCallback;
            var5 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 469; continue _fun0006 }
 13:
                        var6 = undefined;
                        if(!(var2 === var6)) { _fun0006_ip = 21; continue _fun0006 }
 19:
                        var2 = false;
 21:
                        var7 = var2;
                        SaveGenerator(address=28);
 26:
                        return var6;
 28:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0006_ip = 466; continue _fun0006 }
 37:
                        var5 = _closure2_slot4;
                        var3 = true;
                        var3 = var5.bind(var6)(var3);
                        var5 = _closure2_slot5;
                        var3 = {};
                        var3 = var5.bind(var6)(var3);
 62: // try_start_0 // try_start_2
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 21;
                        var3 = var9[var3];
                        var9 = var8.bind(var6)(var3);
                        var8 = var9.forgotPassword;
                        var3 = _closure2_slot9;
                        var3 = var3.current;
                        var3 = var8.bind(var9)(var3);
                        SaveGenerator(address=109);
 107:
                        return var3;
 109:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                        if(var8) { _fun0006_ip = 378; continue _fun0006 }
 118:
                        if(var3) { _fun0006_ip = 135; continue _fun0006 }
 121: // try_end0 // try_end2
                        var9 = _closure2_slot4;
                        var8 = false;
                        var8 = var9.bind(var6)(var8);
                        return var6;
 135: // try_start_1 // try_start_3
                        if(var7) { _fun0006_ip = 296; continue _fun0006 }
 141:
                        var8 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var7 = 14;
                        var7 = var14[var7];
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.show;
                        var7 = {};
                        var11 = _closure1_slot0;
                        var10 = 13;
                        var12 = var14[var10];
                        var12 = var11.bind(var6)(var12);
                        var15 = var12.intl;
                        var13 = var15.string;
                        var12 = var14[var10];
                        var12 = var11.bind(var6)(var12);
                        var12 = var12.t;
                        var12 = var12.f5Pi7O;
                        var12 = var13.bind(var15)(var12);
                        var7['title'] = var12;
                        var12 = var14[var10];
                        var12 = var11.bind(var6)(var12);
                        var13 = var12.intl;
                        var12 = var13.format;
                        var10 = var14[var10];
                        var10 = var11.bind(var6)(var10);
                        var10 = var10.t;
                        var11 = var10.6u5hQ0;
                        var10 = {};
                        var14 = _closure2_slot9;
                        var14 = var14.current;
                        var10['email'] = var14;
                        var10 = var12.bind(var13)(var11, var10);
                        var7['body'] = var10;
                        var7 = var8.bind(var9)(var7);
                        _fun0006_ip = 376; continue _fun0006;
 296:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 22;
                        var7 = var11[var7];
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.openAlert;
                        var10 = _closure1_slot11;
                        var7 = _closure1_slot1;
                        var5 = 23;
                        var5 = var11[var5];
                        var7 = var7.bind(var6)(var5);
                        var5 = {};
                        var11 = _closure2_slot9;
                        var11 = var11.current;
                        var5['email'] = var11;
                        var7 = var10.bind(var6)(var7, var5);
                        var5 = 'reset-password-confirm';
                        var5 = var8.bind(var9)(var5, var7);
 376: // try_end1
                        _fun0006_ip = 437; continue _fun0006;
 378: // try_end3
                        var7 = _closure2_slot4;
                        var5 = false;
                        var5 = var7.bind(var6)(var5);
                        return var3;
 392: // try_start_4 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=6);
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 24;
                        var3 = var8[var3];
                        var5 = var5.bind(var6)(var3);
                        var3 = var5.getAuthenticationErrorsFromV6OrEarlierAPIError;
                        var5 = var3.bind(var5)(var7);
                        var3 = _closure2_slot14;
                        var3 = var3.bind(var6)(var5);
 437: // try_end4
                        var5 = _closure2_slot4;
                        var3 = false;
                        var3 = var5.bind(var6)(var3);
                        return var6;
 451: // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var6)(var4);
                        throw var3;
 466:
                        return var2;
 469:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = var5.bind(var4)(var2);
            var2 = new Array(1);
            var2[0] = var26;
            var2 = var13.bind(var14)(var5, var2);
            _closure2_slot15 = var2;
            var13 = var14.useCallback;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure2_slot15;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var13.bind(var14)(var2, var5);
            _closure2_slot16 = var2;
            var13 = var14.useCallback;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 22;
                var3 = var7[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.openAlert;
                var6 = _closure1_slot11;
                var3 = _closure1_slot1;
                var2 = 25;
                var2 = var7[var2];
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var8 = _closure2_slot16;
                var2['onConfirm'] = var8;
                var7 = _closure2_slot9;
                var7 = var7.current;
                var2['login'] = var7;
                var3 = var6.bind(var1)(var3, var2);
                var2 = 'reset-password-nudge';
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var16 = var13.bind(var14)(var2, var5);
            _closure2_slot17 = var16;
            var13 = var14.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            StartGenerator();
                            var2 = arguments[2];
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0007_ip = 347; continue _fun0007 }
 13:
                            var10 = arg1;
                            var9 = arg2;
                            var3 = undefined;
                            if(!(var2 === var3)) { _fun0007_ip = 27; continue _fun0007 }
 25:
                            var2 = false;
 27:
                            var12 = var2;
                            var4 = undefined;
                            var7 = undefined;
                            SaveGenerator(address=38);
 36:
                            return var3;
 38:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0007_ip = 344; continue _fun0007 }
 47:
                            var8 = _closure2_slot4;
                            var6 = true;
                            var6 = var8.bind(var3)(var6);
                            var8 = _closure2_slot5;
                            var6 = {};
                            var6 = var8.bind(var3)(var6);
 72: // try_start_0
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
 140:
                            return var6;
 142:
                            ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                            if(var8) { _fun0007_ip = 153; continue _fun0007 }
 148: // try_end0
                            _fun0007_ip = 341; continue _fun0007;
 153:
                            return var6;
 156: // catch_target0
                            CatchBlockStart(arg_register=12);
                            var8 = _closure2_slot4;
                            var6 = false;
                            var6 = var8.bind(var3)(var6);
                            var12 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var6 = 24;
                            var6 = var11[var6];
                            var12 = var12.bind(var3)(var6);
                            var6 = var12.getAuthenticationErrorsFromV6OrEarlierAPIError;
                            var14 = var6.bind(var12)(var13);
                            var4 = var14;
                            var12 = _closure1_slot1;
                            var13 = 26;
                            var11 = var11[var13];
                            var12 = var12.bind(var3)(var11);
                            var11 = 'login';
                            var12 = var12.bind(var3)(var11, var14);
                            var11 = null;
                            var12 = var11 != var12;
                            var6 = var12;
                            if(!var12) { _fun0007_ip = 278; continue _fun0007 }
 244:
                            var12 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var8 = var8[var13];
                            var13 = var12.bind(var3)(var8);
                            var12 = var4;
                            var8 = 'password';
                            var8 = var13.bind(var3)(var8, var12);
                            var6 = var11 != var8;
 278:
                            var7 = var6;
                            var11 = var10;
                            var10 = '';
                            var11 = var10 !== var11;
                            var8 = var11;
                            if(!var11) { _fun0007_ip = 302; continue _fun0007 }
 298:
                            var8 = var10 !== var9;
 302:
                            var6 = var8;
                            if(!var8) { _fun0007_ip = 311; continue _fun0007 }
 308:
                            var6 = var7;
 311:
                            if(!var6) { _fun0007_ip = 332; continue _fun0007 }
 314:
                            var7 = _closure2_slot8;
                            var6 = function(arg1) {
                                var2 = arg1;
                                var1 = 1;
                                var1 = var2 + var1;
                                return var1;
                            };
                            var6 = var7.bind(var3)(var6);
 332:
                            var5 = _closure2_slot14;
                            var4 = var5.bind(var3)(var4);
 341:
                            return var3;
 344:
                            return var2;
 347:
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
            var5 = var2.bind(var4)();
            var2 = new Array(2);
            var2[0] = var26;
            var2[1] = var25;
            var13 = var13.bind(var14)(var5, var2);
            _closure2_slot18 = var13;
            var2 = _closure1_slot1;
            var5 = 28;
            var5 = var1[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var5 = 29;
            var5 = var1[var5];
            var5 = var2.bind(var4)(var5);
            var5 = var5.bind(var4)(var17, var13);
            var13 = var14.useEffect;
            var5 = new Array(3);
            var5[0] = var16;
            var5[1] = var15;
            var5[2] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot7;
                    var2 = 2;
                    var2 = var2 === var3;
                    if(!var2) { _fun0008_ip = 21; continue _fun0008 }
 17:
                    var2 = _closure2_slot6;
 21:
                    if(!var2) { _fun0008_ip = 34; continue _fun0008 }
 24:
                    var2 = _closure2_slot17;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var13.bind(var14)(var3, var5);
            var3 = 26;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var26 = 'password';
            var1 = var1.bind(var4)(var26, var10);
            var5 = var12 != var1;
            if(!var5) { _fun0003_ip = 922; continue _fun0003 }
 891:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'login';
            var1 = var2.bind(var4)(var1, var10);
            var5 = var12 != var1;
 922:
            if(!var8) { _fun0003_ip = 928; continue _fun0003 }
 925:
            if(var5) { _fun0003_ip = 988; continue _fun0003 }
 928:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'login';
            var17 = var2.bind(var4)(var1, var10);
            if(!(var12 == var17)) { _fun0003_ip = 986; continue _fun0003 }
 959:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'email';
            var17 = var2.bind(var4)(var1, var10);
 986:
            _fun0003_ip = 1015; continue _fun0003;
 988:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var2 = var2.bind(var4)(var1);
            var1 = 'email';
            var17 = var2.bind(var4)(var1, var10);
 1015:
            var15 = null;
            if(var8) { _fun0003_ip = 1043; continue _fun0003 }
 1020:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var3];
            var1 = var2.bind(var4)(var1);
            var15 = var1.bind(var4)(var26, var10);
 1043:
            var3 = _closure1_slot12;
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 30;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var30 = _closure1_slot0;
            var25 = 13;
            var14 = var13[var25];
            var14 = var30.bind(var4)(var14);
            var16 = var14.intl;
            var14 = var16.string;
            var13 = var13[var25];
            var13 = var30.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.7fNJgI;
            var13 = var14.bind(var16)(var13);
            var1['headerText'] = var13;
            var13 = null;
            if(var6) { _fun0003_ip = 1231; continue _fun0003 }
 1132:
            var30 = _closure1_slot11;
            var34 = _closure1_slot0;
            var31 = _closure1_slot2;
            var14 = 11;
            var14 = var31[var14];
            var14 = var34.bind(var4)(var14);
            var16 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var32 = var31[var25];
            var32 = var34.bind(var4)(var32);
            var33 = var32.intl;
            var32 = var33.string;
            var31 = var31[var25];
            var31 = var34.bind(var4)(var31);
            var31 = var31.t;
            var31 = var31.euS7r6;
            var31 = var32.bind(var33)(var31);
            var14['children'] = var31;
            var13 = var30.bind(var4)(var16, var14);
 1231:
            var1['subHeader'] = var13;
            if(!var8) { _fun0003_ip = 1242; continue _fun0003 }
 1239:
            var8 = var5;
 1242:
            if(!var8) { _fun0003_ip = 1272; continue _fun0003 }
 1245:
            var14 = _closure1_slot11;
            var13 = _closure1_slot15;
            var5 = {};
            var16 = function onPress() {
                var2 = _closure2_slot15;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var5['onPress'] = var16;
            var8 = var14.bind(var4)(var13, var5);
 1272:
            var5 = new Array(8);
            var5[0] = var8;
            var14 = _closure1_slot11;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var8 = 31;
            var8 = var16[var8];
            var13 = var13.bind(var4)(var8);
            var8 = {};
            var30 = var11.login;
            var8['containerStyle'] = var30;
            var30 = !var6;
            var8['autoFocus'] = var30;
            var30 = 'emailAddress';
            var8['textContentType'] = var30;
            var30 = 'email-address';
            var8['keyboardType'] = var30;
            var29 = var29.alpha2;
            var8['alpha2'] = var29;
            var8['countryCode'] = var24;
            var8['onChange'] = var19;
            var19 = function onSubmitEditing() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 33; continue _fun0009 }
 23:
                    var2 = var3.focus;
                    var1 = var2.bind(var3)();
 33:
                    return var1;
                }
            };
            var8['onSubmitEditing'] = var19;
            var19 = 'next';
            var8['returnKeyType'] = var19;
            var19 = 'none';
            var8['autoCapitalize'] = var19;
            var24 = _closure1_slot0;
            var29 = var16[var25];
            var29 = var24.bind(var4)(var29);
            var31 = var29.intl;
            var30 = var31.string;
            var29 = var16[var25];
            var29 = var24.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.tUjnxs;
            var29 = var30.bind(var31)(var29);
            var8['label'] = var29;
            var8['errorMessage'] = var17;
            var17 = 'login_login_input';
            var8['testID'] = var17;
            var17 = function onPressCountrySelector() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot10;
                var1 = var1.COUNTRY_SELECT;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8['onPressCountrySelector'] = var17;
            var17 = true;
            var8['isClearable'] = var17;
            var29 = 'username';
            var8['autoComplete'] = var29;
            var8 = var14.bind(var4)(var13, var8);
            var5[1] = var8;
            var8 = 32;
            var8 = var16[var8];
            var8 = var24.bind(var4)(var8);
            var13 = var8.TextInput;
            var8 = {};
            var29 = var11.password;
            var8['containerStyle'] = var29;
            var8['ref'] = var27;
            var8['textContentType'] = var26;
            var26 = !var18;
            var8['secureTextEntry'] = var26;
            var8['onChange'] = var21;
            var8['autoCapitalize'] = var19;
            var19 = function onSubmitEditing() {
                var4 = _closure2_slot18;
                var2 = _closure2_slot9;
                var3 = var2.current;
                var1 = _closure2_slot10;
                var2 = var1.current;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var8['onSubmitEditing'] = var19;
            var19 = var16[var25];
            var19 = var24.bind(var4)(var19);
            var21 = var19.intl;
            var19 = var21.string;
            var16 = var16[var25];
            var16 = var24.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.CIGa+/;
            var16 = var19.bind(var21)(var16);
            var8['label'] = var16;
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            if(var18) { _fun0003_ip = 1655; continue _fun0003 }
 1635:
            var16 = 34;
            var16 = var24[var16];
            var16 = var21.bind(var4)(var16);
            var16 = var16.EyeIcon;
            _fun0003_ip = 1673; continue _fun0003;
 1655:
            var19 = 33;
            var19 = var24[var19];
            var19 = var21.bind(var4)(var19);
            var16 = var19.EyeSlashIcon;
 1673:
            var8['trailingIcon'] = var16;
            var16 = {};
            var26 = _closure1_slot0;
            var19 = _closure1_slot2;
            var21 = var19[var25];
            var21 = var26.bind(var4)(var21);
            var24 = var21.intl;
            var21 = var24.string;
            var19 = var19[var25];
            var19 = var26.bind(var4)(var19);
            var19 = var19.t;
            if(var18) { _fun0003_ip = 1737; continue _fun0003 }
 1724:
            var18 = var19.nFzpMz;
            var18 = var21.bind(var24)(var18);
            _fun0003_ip = 1748; continue _fun0003;
 1737:
            var19 = var19.Nusip6;
            var18 = var21.bind(var24)(var19);
 1748:
            var16['accessibilityLabel'] = var18;
            var18 = function onPress() {
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
            var16['onPress'] = var18;
            var18 = {'top': 8, 'bottom': 8};
            var16['hitSlop'] = var18;
            var8['trailingPressableProps'] = var16;
            var16 = 'done';
            var8['returnKeyType'] = var16;
            var8['errorMessage'] = var15;
            var15 = 'login_password_input';
            var8['testID'] = var15;
            var15 = 'current-password';
            var8['autoComplete'] = var15;
            var8 = var14.bind(var4)(var13, var8);
            var5[2] = var8;
            var8 = !var6;
            if(!var8) { _fun0003_ip = 1933; continue _fun0003 }
 1837:
            var15 = _closure1_slot11;
            var14 = _closure1_slot14;
            var13 = {};
            var16 = var11.link;
            var13['containerStyle'] = var16;
            var16 = function onPress() {
                var2 = _closure2_slot15;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var13['onPress'] = var16;
            var21 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var25];
            var18 = var21.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var16[var25];
            var16 = var21.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.wWIufn;
            var16 = var18.bind(var19)(var16);
            var13['text'] = var16;
            var8 = var15.bind(var4)(var14, var13);
 1933:
            var5[3] = var8;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 15;
            var8 = var14[var8];
            var13 = var13.bind(var4)(var8);
            var8 = var13.isAndroid;
            var13 = var8.bind(var13)();
            var8 = null;
            if(!var13) { _fun0003_ip = 2084; continue _fun0003 }
 1971:
            var15 = _closure1_slot11;
            var14 = _closure1_slot14;
            var13 = {};
            var16 = var11.link;
            var13['containerStyle'] = var16;
            var16 = _closure1_slot16;
            var13['onPress'] = var16;
            var21 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var25];
            var18 = var21.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var16 = var16[var25];
            var16 = var21.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.RL5Fy8;
            var16 = var18.bind(var19)(var16);
            var13['text'] = var16;
            var16 = 'text-link';
            if(!var6) { _fun0003_ip = 2073; continue _fun0003 }
 2067:
            var16 = 'text-brand';
 2073:
            var13['textColor'] = var16;
            var8 = var15.bind(var4)(var14, var13);
 2084:
            var5[4] = var8;
            var14 = _closure1_slot11;
            var13 = _closure1_slot6;
            var8 = {};
            var16 = var11.button;
            var15 = new Array(2);
            var15[0] = var16;
            var16 = var6;
            if(!var16) { _fun0003_ip = 2130; continue _fun0003 }
 2118:
            var18 = {};
            var19 = 24;
            var18['marginTop'] = var19;
            var16 = var18;
 2130:
            var15[1] = var16;
            var8['style'] = var15;
            var19 = _closure1_slot11;
            var27 = _closure1_slot0;
            var21 = _closure1_slot2;
            var18 = 35;
            var15 = var21[var18];
            var15 = var27.bind(var4)(var15);
            var16 = var15.Button;
            var15 = {};
            var24 = 'lg';
            var15['size'] = var24;
            var15['disabled'] = var23;
            var15['loading'] = var22;
            var24 = var21[var25];
            var24 = var27.bind(var4)(var24);
            var26 = var24.intl;
            var24 = var26.string;
            var21 = var21[var25];
            var21 = var27.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.dKhVQE;
            var21 = var24.bind(var26)(var21);
            var15['text'] = var21;
            var21 = function onPress() {
                var4 = _closure2_slot18;
                var2 = _closure2_slot9;
                var3 = var2.current;
                var1 = _closure2_slot10;
                var2 = var1.current;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var15['onPress'] = var21;
            var15 = var19.bind(var4)(var16, var15);
            var8['children'] = var15;
            var8 = var14.bind(var4)(var13, var8);
            var5[5] = var8;
            if(var6) { _fun0003_ip = 2458; continue _fun0003 }
 2272:
            var13 = _closure1_slot11;
            var16 = _closure1_slot1;
            var14 = _closure1_slot2;
            var15 = 39;
            var6 = var14[var15];
            var8 = var16.bind(var4)(var6);
            var6 = {};
            var6['shrink'] = var17;
            var17 = var14[var15];
            var17 = var16.bind(var4)(var17);
            var17 = var17.Looks;
            var17 = var17.LINK;
            var6['look'] = var17;
            var17 = var14[var15];
            var17 = var16.bind(var4)(var17);
            var17 = var17.Colors;
            var17 = var17.LINK;
            var6['color'] = var17;
            var15 = var14[var15];
            var15 = var16.bind(var4)(var15);
            var15 = var15.Sizes;
            var15 = var15.MEDIUM;
            var6['size'] = var15;
            var15 = var11.button;
            var6['style'] = var15;
            var17 = _closure1_slot0;
            var15 = var14[var25];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var25];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14./kpMDg;
            var14 = var15.bind(var16)(var14);
            var6['text'] = var14;
            var6['onPress'] = var20;
            var6 = var13.bind(var4)(var8, var6);
            _fun0003_ip = 2865; continue _fun0003;
 2458:
            var14 = _closure1_slot12;
            var13 = _closure1_slot6;
            var8 = {};
            var17 = _closure1_slot11;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var16 = 36;
            var15 = var21[var16];
            var15 = var24.bind(var4)(var15);
            var19 = var15.Stack;
            var15 = {'direction': 'horizontal', 'align': 'center', 'justify': 'center'};
            var26 = var11.forgotPasswordLinkButtonContainer;
            var15['style'] = var26;
            var27 = _closure1_slot14;
            var26 = {};
            var28 = function onPress() {
                var2 = _closure2_slot15;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var26['onPress'] = var28;
            var28 = var21[var25];
            var28 = var24.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var21[var25];
            var28 = var24.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.+/6Nv7;
            var28 = var29.bind(var30)(var28);
            var26['text'] = var28;
            var28 = 'text-md/medium';
            var26['variant'] = var28;
            var28 = 'text-brand';
            var26['textColor'] = var28;
            var26 = var17.bind(var4)(var27, var26);
            var15['children'] = var26;
            var19 = var17.bind(var4)(var19, var15);
            var15 = new Array(3);
            var15[0] = var19;
            var16 = var21[var16];
            var16 = var24.bind(var4)(var16);
            var19 = var16.Stack;
            var16 = {};
            var26 = var11.separator;
            var16['style'] = var26;
            var26 = 37;
            var26 = var21[var26];
            var26 = var24.bind(var4)(var26);
            var27 = var26.OrSeparator;
            var26 = {};
            var26 = var17.bind(var4)(var27, var26);
            var16['children'] = var26;
            var16 = var17.bind(var4)(var19, var16);
            var15[1] = var16;
            var16 = {};
            var19 = var11.passkeyButton;
            var16['style'] = var19;
            var18 = var21[var18];
            var18 = var24.bind(var4)(var18);
            var19 = var18.Button;
            var18 = {'icon': null, 'size': 'lg', 'variant': 'tertiary'};
            var26 = 38;
            var26 = var21[var26];
            var26 = var24.bind(var4)(var26);
            var27 = var26.KeyIcon;
            var26 = {};
            var26 = var17.bind(var4)(var27, var26);
            var18['icon'] = var26;
            var18['disabled'] = var23;
            var18['loading'] = var22;
            var22 = var21[var25];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var25];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.EiwJkJ;
            var21 = var22.bind(var23)(var21);
            var18['text'] = var21;
            var18['onPress'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var16['children'] = var18;
            var16 = var17.bind(var4)(var13, var16);
            var15[2] = var16;
            var8['children'] = var15;
            var6 = var14.bind(var4)(var13, var8);
 2865:
            var5[6] = var6;
            var6 = var10.message;
            var8 = var12 != var6;
            var6 = null;
            if(!var8) { _fun0003_ip = 2945; continue _fun0003 }
 2883:
            var8 = var10.message;
            var6 = null;
            if(!(var9 !== var8)) { _fun0003_ip = 2945; continue _fun0003 }
 2894:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 40;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var11.hint;
            var7['style'] = var11;
            var10 = var10.message;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 2945:
            var5[7] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
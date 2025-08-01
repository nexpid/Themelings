// app/modules/auth/native/components/Login.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function handlePressPasswordManagerHint() {
        var3 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 11;
        var2 = var9[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var8 = _closure1_slot0;
        var5 = 12;
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
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 69; continue _fun0001 }
 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
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
    var _closure1_slot15 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.NativeModules;
    var _closure1_slot7 = var4;
    var11 = 4;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {};
    var4 = 32;
    var10['marginTop'] = var4;
    var7['login'] = var10;
    var10 = {};
    var12 = 24;
    var10['marginTop'] = var12;
    var7['password'] = var10;
    var10 = {'width': '100%', 'marginTop': 16};
    var7['button'] = var10;
    var10 = {};
    var10['marginTop'] = var11;
    var7['hint'] = var10;
    var10 = {'alignSelf': 'flex-start', 'paddingVertical': 4};
    var7['link'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var7 = function HelpLink(arg1) {
        var1 = arg1;
        var5 = var1.onPress;
        var7 = var1.text;
        var2 = _closure1_slot13;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var3 = _closure1_slot11;
        var6 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 9;
        var1 = var8[var1];
        var1 = var6.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {};
        var9 = var9.link;
        var1['style'] = var9;
        var9 = {'top': 8, 'right': 8, 'bottom': 8};
        var1['hitSlop'] = var9;
        var9 = 'button';
        var1['accessibilityRole'] = var9;
        var1['onPress'] = var5;
        var5 = 10;
        var5 = var8[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-xs/medium', 'color': 'text-link'};
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot14 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/Login.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Login(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var13 = var1.isMultiAccount;
            var4 = undefined;
            if(!(var13 === var4)) { _fun0002_ip = 19; continue _fun0002 }
 17:
            var13 = false;
 19:
            var _closure2_slot0 = var13;
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
            var1 = function _handlePressForgotPassword() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 371; continue _fun0003 }
 10:
                            var4 = _closure2_slot4;
                            var5 = undefined;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
                            var4 = _closure2_slot5;
                            var2 = {};
                            var2 = var4.bind(var5)(var2);
 37: // try_start_0 // try_start_2
                            var4 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var2 = 18;
                            var2 = var6[var2];
                            var6 = var4.bind(var5)(var2);
                            var4 = var6.forgotPassword;
                            var2 = _closure2_slot6;
                            var2 = var2.current;
                            var2 = var4.bind(var6)(var2);
                            SaveGenerator(address=84);
 82:
                            return var2;
 84:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0003_ip = 281; continue _fun0003 }
 93:
                            if(var2) { _fun0003_ip = 110; continue _fun0003 }
 96: // try_end0 // try_end2
                            var6 = _closure2_slot4;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var5;
 110: // try_start_1 // try_start_3
                            var6 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var4 = 11;
                            var4 = var12[var4];
                            var7 = var6.bind(var5)(var4);
                            var6 = var7.show;
                            var4 = {};
                            var9 = _closure1_slot0;
                            var8 = 12;
                            var10 = var12[var8];
                            var10 = var9.bind(var5)(var10);
                            var13 = var10.intl;
                            var11 = var13.string;
                            var10 = var12[var8];
                            var10 = var9.bind(var5)(var10);
                            var10 = var10.t;
                            var10 = var10.f5Pi7O;
                            var10 = var11.bind(var13)(var10);
                            var4['title'] = var10;
                            var10 = var12[var8];
                            var10 = var9.bind(var5)(var10);
                            var11 = var10.intl;
                            var10 = var11.format;
                            var8 = var12[var8];
                            var8 = var9.bind(var5)(var8);
                            var8 = var8.t;
                            var9 = var8.6u5hQ0;
                            var8 = {};
                            var12 = _closure2_slot6;
                            var12 = var12.current;
                            var8['email'] = var12;
                            var8 = var10.bind(var11)(var9, var8);
                            var4['body'] = var8;
                            var4 = var6.bind(var7)(var4);
 267: // try_end1 // try_end3
                            var6 = _closure2_slot4;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var5;
 281:
                            var6 = _closure2_slot4;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            return var2;
 295: // try_start_4 // catch_target0 // catch_target1
                            CatchBlockStart(arg_register=5);
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 19;
                            var2 = var7[var2];
                            var4 = var4.bind(var5)(var2);
                            var2 = var4.getAuthenticationErrorsFromV6OrEarlierAPIError;
                            var4 = var2.bind(var4)(var6);
                            var2 = _closure2_slot11;
                            var2 = var2.bind(var5)(var4);
 340: // try_end4
                            var6 = _closure2_slot4;
                            var4 = false;
                            var4 = var6.bind(var5)(var4);
                            var2 = undefined;
                            return var2;
 356: // catch_target2 // catch_target3 // catch_target4
                            CatchBlockStart(arg_register=1);
                            var4 = _closure2_slot4;
                            var3 = false;
                            var3 = var4.bind(var5)(var3);
                            throw var2;
 371:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot13 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot13 = var1;
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
                            var4 = _closure2_slot8;
                            if(var4) { _fun0004_ip = 236; continue _fun0004 }
 27:
                            var6 = _closure1_slot9;
                            var5 = var6.getIsPasswordlessActive;
                            var5 = var5.bind(var6)();
                            if(var5) { _fun0004_ip = 236; continue _fun0004 }
 50:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 20;
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
                            var5 = 18;
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
                            var4 = 19;
                            var4 = var7[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.getAuthenticationErrorsFromAPIError;
                            var4 = var4.bind(var5)(var6);
                            var3 = _closure2_slot11;
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
                _closure2_slot14 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot14 = var1;
            var1 = _closure1_slot13;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = 15;
            var2 = var1[var2];
            var5 = var3.bind(var4)(var2);
            var2 = var5.useNavigation;
            var6 = var2.bind(var5)();
            _closure2_slot1 = var6;
            var2 = 16;
            var2 = var1[var2];
            var9 = var3.bind(var4)(var2);
            var8 = var9.useStateFromStores;
            var2 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var2 = _closure1_slot8;
                var1 = var2.getCountryCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var27 = var8.bind(var9)(var5, var2);
            var8 = var27.code;
            var5 = var8.split;
            var2 = ' ';
            var2 = var5.bind(var8)(var2);
            var19 = _closure1_slot4;
            var5 = 1;
            var2 = var19.bind(var4)(var2, var5);
            var15 = 0;
            var26 = var2[var15];
            var8 = _closure1_slot5;
            var2 = var8.useRef;
            var12 = null;
            var17 = var2.bind(var8)(var12);
            _closure2_slot2 = var17;
            var2 = var8.useState;
            var20 = false;
            var2 = var2.bind(var8)(var20);
            var16 = 2;
            var2 = var19.bind(var4)(var2, var16);
            var18 = var2[var15];
            var2 = var2[var5];
            _closure2_slot3 = var2;
            var2 = var8.useState;
            var2 = var2.bind(var8)(var20);
            var2 = var19.bind(var4)(var2, var16);
            var21 = var2[var15];
            var2 = var2[var5];
            _closure2_slot4 = var2;
            var9 = var8.useState;
            var2 = {};
            var2 = var9.bind(var8)(var2);
            var2 = var19.bind(var4)(var2, var16);
            var10 = var2[var15];
            var2 = var2[var5];
            _closure2_slot5 = var2;
            var2 = var8.useRef;
            var9 = '';
            var2 = var2.bind(var8)(var9);
            _closure2_slot6 = var2;
            var23 = var8.useCallback;
            var22 = function(arg1, arg2) {
                var2 = _closure2_slot6;
                var3 = arg2;
                var1 = arg1;
                var1 = var3 + var1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var23 = var23.bind(var8)(var22, var2);
            var2 = var8.useRef;
            var2 = var2.bind(var8)(var9);
            _closure2_slot7 = var2;
            var24 = var8.useCallback;
            var22 = function(arg1) {
                var2 = _closure2_slot7;
                var1 = arg1;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = new Array(0);
            var24 = var24.bind(var8)(var22, var2);
            var2 = var8.useState;
            var2 = var2.bind(var8)(var20);
            var2 = var19.bind(var4)(var2, var16);
            var22 = var2[var15];
            _closure2_slot8 = var22;
            var2 = var2[var5];
            _closure2_slot9 = var2;
            var2 = var8.useRef;
            var2 = var2.bind(var8)(var4);
            _closure2_slot10 = var2;
            var15 = var8.useEffect;
            var5 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot10;
                    var2 = var1.current;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var15.bind(var8)(var5, var2);
            var15 = var8.useCallback;
            var5 = function(arg1) {
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
                    var5 = _closure2_slot10;
                    var5 = var5.current;
                    var5 = var6.bind(var1)(var5);
                    var6 = _closure2_slot9;
                    var5 = true;
                    var5 = var6.bind(var1)(var5);
                    var3 = _closure2_slot10;
                    var5 = var4.setTimeout;
                    var4 = var2.retry_after;
                    var2 = 1000;
                    var4 = var2 * var4;
                    var2 = function() {
                        var3 = _closure2_slot9;
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
            var15 = var15.bind(var8)(var5, var2);
            _closure2_slot11 = var15;
            var2 = 17;
            var2 = var1[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.useFocusEffect;
            var19 = var8.useCallback;
            var16 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var2 = var19.bind(var8)(var16, var2);
            var2 = var3.bind(var5)(var2);
            var5 = var8.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            StartGenerator();
                            var2 = arguments[2];
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0006_ip = 205; continue _fun0006 }
 13:
                            var10 = arg1;
                            var9 = arg2;
                            var3 = undefined;
                            if(!(var2 === var3)) { _fun0006_ip = 27; continue _fun0006 }
 25:
                            var2 = false;
 27:
                            var8 = var2;
                            SaveGenerator(address=34);
 32:
                            return var3;
 34:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0006_ip = 202; continue _fun0006 }
 43:
                            var6 = _closure2_slot4;
                            var5 = true;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure2_slot5;
                            var5 = {};
                            var5 = var6.bind(var3)(var5);
 68: // try_start_0
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 18;
                            var5 = var7[var5];
                            var7 = var6.bind(var3)(var5);
                            var6 = var7.login;
                            var5 = {};
                            var5['login'] = var10;
                            var5['password'] = var9;
                            var5['undelete'] = var8;
                            var8 = _closure2_slot0;
                            var5['isMultiAccount'] = var8;
                            var5 = var6.bind(var7)(var5);
                            SaveGenerator(address=132);
 130:
                            return var5;
 132:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0006_ip = 140; continue _fun0006 }
 138: // try_end0
                            _fun0006_ip = 199; continue _fun0006;
 140:
                            return var5;
 143: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var6 = _closure2_slot4;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 19;
                            var5 = var8[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.getAuthenticationErrorsFromV6OrEarlierAPIError;
                            var5 = var5.bind(var6)(var7);
                            var4 = _closure2_slot11;
                            var4 = var4.bind(var3)(var5);
 199:
                            return var3;
 202:
                            return var2;
 205:
                            return var1;
                        }
                    };
                    var2 = var1.next;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function(arg1, arg2) {
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
            var3 = var2.bind(var4)();
            var2 = new Array(2);
            var2[0] = var15;
            var2[1] = var13;
            var5 = var5.bind(var8)(var3, var2);
            _closure2_slot12 = var5;
            var2 = _closure1_slot1;
            var3 = 21;
            var3 = var1[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = 22;
            var3 = var1[var3];
            var3 = var2.bind(var4)(var3);
            var3 = var3.bind(var4)(var6, var5);
            var16 = 23;
            var1 = var1[var16];
            var2 = var2.bind(var4)(var1);
            var1 = 'login';
            var8 = var2.bind(var4)(var1, var10);
            if(!(var12 == var8)) { _fun0002_ip = 673; continue _fun0002 }
 646:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var16];
            var2 = var2.bind(var4)(var1);
            var1 = 'email';
            var8 = var2.bind(var4)(var1, var10);
 673:
            var3 = _closure1_slot12;
            var6 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 24;
            var1 = var13[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var25 = _closure1_slot0;
            var19 = 12;
            var5 = var13[var19];
            var5 = var25.bind(var4)(var5);
            var20 = var5.intl;
            var15 = var20.string;
            var5 = var13[var19];
            var5 = var25.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.7fNJgI;
            var5 = var15.bind(var20)(var5);
            var1['headerText'] = var5;
            var15 = _closure1_slot11;
            var5 = 10;
            var5 = var13[var5];
            var5 = var25.bind(var4)(var5);
            var20 = var5.Text;
            var5 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var28 = var13[var19];
            var28 = var25.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var13[var19];
            var28 = var25.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.euS7r6;
            var28 = var29.bind(var30)(var28);
            var5['children'] = var28;
            var5 = var15.bind(var4)(var20, var5);
            var1['subHeader'] = var5;
            var5 = 25;
            var5 = var13[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {'containerStyle': null, 'autoFocus': true, 'textContentType': 'emailAddress', 'keyboardType': 'email-address'};
            var20 = var11.login;
            var5['containerStyle'] = var20;
            var20 = true;
            var27 = var27.alpha2;
            var5['alpha2'] = var27;
            var5['countryCode'] = var26;
            var5['onChange'] = var23;
            var23 = function onSubmitEditing() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0007_ip = 33; continue _fun0007 }
 23:
                    var2 = var3.focus;
                    var1 = var2.bind(var3)();
 33:
                    return var1;
                }
            };
            var5['onSubmitEditing'] = var23;
            var23 = 'next';
            var5['returnKeyType'] = var23;
            var23 = 'none';
            var5['autoCapitalize'] = var23;
            var26 = var13[var19];
            var26 = var25.bind(var4)(var26);
            var28 = var26.intl;
            var27 = var28.string;
            var26 = var13[var19];
            var26 = var25.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.tUjnxs;
            var26 = var27.bind(var28)(var26);
            var5['label'] = var26;
            var5['errorMessage'] = var8;
            var8 = 'login_login_input';
            var5['testID'] = var8;
            var8 = function onPressCountrySelector() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot10;
                var1 = var1.COUNTRY_SELECT;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['onPressCountrySelector'] = var8;
            var5['isClearable'] = var20;
            var6 = var15.bind(var4)(var6, var5);
            var5 = new Array(7);
            var5[0] = var6;
            var6 = 26;
            var6 = var13[var6];
            var6 = var25.bind(var4)(var6);
            var8 = var6.TextInput;
            var6 = {};
            var26 = var11.password;
            var6['containerStyle'] = var26;
            var6['ref'] = var17;
            var17 = 'password';
            var6['textContentType'] = var17;
            var26 = !var18;
            var6['secureTextEntry'] = var26;
            var6['onChange'] = var24;
            var6['autoCapitalize'] = var23;
            var23 = function onSubmitEditing() {
                var4 = _closure2_slot12;
                var2 = _closure2_slot6;
                var3 = var2.current;
                var1 = _closure2_slot7;
                var2 = var1.current;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['onSubmitEditing'] = var23;
            var23 = var13[var19];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var13 = var13[var19];
            var13 = var25.bind(var4)(var13);
            var13 = var13.t;
            var13 = var13.CIGa+/;
            var13 = var23.bind(var24)(var13);
            var6['label'] = var13;
            var24 = _closure1_slot0;
            var25 = _closure1_slot2;
            if(var18) { _fun0002_ip = 1194; continue _fun0002 }
 1174:
            var13 = 28;
            var13 = var25[var13];
            var13 = var24.bind(var4)(var13);
            var13 = var13.EyeIcon;
            _fun0002_ip = 1212; continue _fun0002;
 1194:
            var23 = 27;
            var23 = var25[var23];
            var23 = var24.bind(var4)(var23);
            var13 = var23.EyeSlashIcon;
 1212:
            var6['trailingIcon'] = var13;
            var13 = {};
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var24 = var23[var19];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var19];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            if(var18) { _fun0002_ip = 1276; continue _fun0002 }
 1263:
            var18 = var23.nFzpMz;
            var18 = var24.bind(var25)(var18);
            _fun0002_ip = 1287; continue _fun0002;
 1276:
            var23 = var23.Nusip6;
            var18 = var24.bind(var25)(var23);
 1287:
            var13['accessibilityLabel'] = var18;
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
            var13['onPress'] = var18;
            var18 = {'top': 8, 'bottom': 8};
            var13['hitSlop'] = var18;
            var6['trailingPressableProps'] = var13;
            var13 = 'done';
            var6['returnKeyType'] = var13;
            var18 = _closure1_slot1;
            var13 = _closure1_slot2;
            var16 = var13[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.bind(var4)(var17, var10);
            var6['errorMessage'] = var16;
            var16 = 'login_password_input';
            var6['testID'] = var16;
            var6 = var15.bind(var4)(var8, var6);
            var5[1] = var6;
            var16 = _closure1_slot11;
            var15 = _closure1_slot14;
            var6 = {};
            var8 = function handlePressForgotPassword() {
                var1 = undefined;
                var4 = _closure2_slot13;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var6['onPress'] = var8;
            var8 = _closure1_slot0;
            var17 = var13[var19];
            var17 = var8.bind(var4)(var17);
            var23 = var17.intl;
            var18 = var23.string;
            var17 = var13[var19];
            var17 = var8.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.wWIufn;
            var17 = var18.bind(var23)(var17);
            var6['text'] = var17;
            var6 = var16.bind(var4)(var15, var6);
            var5[2] = var6;
            var6 = 13;
            var6 = var13[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isAndroid;
            var8 = var6.bind(var8)();
            var6 = null;
            if(!var8) { _fun0002_ip = 1577; continue _fun0002 }
 1495:
            var15 = _closure1_slot11;
            var13 = _closure1_slot14;
            var8 = {};
            var16 = _closure1_slot15;
            var8['onPress'] = var16;
            var23 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var19];
            var17 = var23.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var19];
            var16 = var23.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.RL5Fy8;
            var16 = var17.bind(var18)(var16);
            var8['text'] = var16;
            var6 = var15.bind(var4)(var13, var8);
 1577:
            var5[3] = var6;
            var13 = _closure1_slot11;
            var8 = _closure1_slot6;
            var6 = {};
            var15 = var11.button;
            var6['style'] = var15;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var16 = 29;
            var16 = var15[var16];
            var16 = var18.bind(var4)(var16);
            var17 = var16.Button;
            var16 = {};
            var23 = 'lg';
            var16['size'] = var23;
            var16['disabled'] = var22;
            var16['loading'] = var21;
            var21 = var15[var19];
            var21 = var18.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var15[var19];
            var21 = var18.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.dKhVQE;
            var21 = var22.bind(var23)(var21);
            var16['text'] = var21;
            var21 = function onPress() {
                var4 = _closure2_slot12;
                var2 = _closure2_slot6;
                var3 = var2.current;
                var1 = _closure2_slot7;
                var2 = var1.current;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var16['onPress'] = var21;
            var16 = var13.bind(var4)(var17, var16);
            var6['children'] = var16;
            var6 = var13.bind(var4)(var8, var6);
            var5[4] = var6;
            var17 = _closure1_slot1;
            var16 = 30;
            var6 = var15[var16];
            var8 = var17.bind(var4)(var6);
            var6 = {};
            var6['shrink'] = var20;
            var20 = var15[var16];
            var20 = var17.bind(var4)(var20);
            var20 = var20.Looks;
            var20 = var20.LINK;
            var6['look'] = var20;
            var20 = var15[var16];
            var20 = var17.bind(var4)(var20);
            var20 = var20.Colors;
            var20 = var20.LINK;
            var6['color'] = var20;
            var16 = var15[var16];
            var16 = var17.bind(var4)(var16);
            var16 = var16.Sizes;
            var16 = var16.MEDIUM;
            var6['size'] = var16;
            var16 = var11.button;
            var6['style'] = var16;
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15./kpMDg;
            var15 = var16.bind(var17)(var15);
            var6['text'] = var15;
            var14 = function handlePasskeyLogin() {
                var1 = undefined;
                var4 = _closure2_slot14;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var6['onPress'] = var14;
            var6 = var13.bind(var4)(var8, var6);
            var5[5] = var6;
            var6 = var10.message;
            var8 = var12 != var6;
            var6 = null;
            if(!var8) { _fun0002_ip = 1981; continue _fun0002 }
 1919:
            var8 = var10.message;
            var6 = null;
            if(!(var9 !== var8)) { _fun0002_ip = 1981; continue _fun0002 }
 1930:
            var9 = _closure1_slot11;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 31;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var11 = var11.hint;
            var7['style'] = var11;
            var10 = var10.message;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 1981:
            var5[6] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
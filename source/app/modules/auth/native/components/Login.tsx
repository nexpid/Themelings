// app/modules/auth/native/components/Login.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
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
        var6 = var6["9x0iKe"];
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
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
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
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var8 = var7[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var8);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var10 = 4;
    var2 = var7[var10];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
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
            var1 = 9;
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
            var5 = 10;
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
    var5 = 41;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/native/components/Login.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function Login(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var16 = var1.isMultiAccount;
            var4 = undefined;
            if(!(var16 === var4)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var16 = false;
case 8:
            var _closure2_slot0 = var16;
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
            var1 = _closure1_slot12;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 15;
            var1 = var2[var1];
            var5 = var3.bind(var4)(var1);
            var1 = var5.useNavigation;
            var6 = var1.bind(var5)();
            _closure2_slot1 = var6;
            var1 = 16;
            var1 = var2[var1];
            var9 = var3.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var5 = new Array(1);
            var5[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCountryCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var28 = var8.bind(var9)(var5, var1);
            var8 = var28.code;
            var5 = var8.split;
            var1 = ' ';
            var1 = var5.bind(var8)(var1);
            var20 = _closure1_slot4;
            var5 = 1;
            var1 = var20.bind(var4)(var1, var5);
            var8 = 0;
            var21 = var1[var8];
            var13 = _closure1_slot5;
            var1 = var13.useRef;
            var12 = null;
            var26 = var1.bind(var13)(var12);
            _closure2_slot2 = var26;
            var1 = var13.useState;
            var22 = false;
            var1 = var1.bind(var13)(var22);
            var14 = 2;
            var1 = var20.bind(var4)(var1, var14);
            var18 = var1[var8];
            var1 = var1[var5];
            _closure2_slot3 = var1;
            var1 = var13.useState;
            var1 = var1.bind(var13)(var22);
            var1 = var20.bind(var4)(var1, var14);
            var17 = var1[var8];
            var1 = var1[var5];
            _closure2_slot4 = var1;
            var9 = var13.useState;
            var1 = {};
            var1 = var9.bind(var13)(var1);
            var1 = var20.bind(var4)(var1, var14);
            var10 = var1[var8];
            var1 = var1[var5];
            _closure2_slot5 = var1;
            var1 = var13.useState;
            var9 = '';
            var1 = var1.bind(var13)(var9);
            var1 = var20.bind(var4)(var1, var14);
            var19 = var1[var8];
            _closure2_slot6 = var19;
            var1 = var1[var5];
            _closure2_slot7 = var1;
            var1 = var13.useState;
            var1 = var1.bind(var13)(var9);
            var1 = var20.bind(var4)(var1, var14);
            var23 = var1[var8];
            _closure2_slot8 = var23;
            var23 = var1[var5];
            var1 = var13.useState;
            var1 = var1.bind(var13)(var22);
            var1 = var20.bind(var4)(var1, var14);
            var22 = var1[var8];
            _closure2_slot9 = var22;
            var1 = var1[var5];
            _closure2_slot10 = var1;
            var1 = var13.useRef;
            var1 = var1.bind(var13)(var4);
            _closure2_slot11 = var1;
            var8 = var13.useEffect;
            var5 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot11;
                    var2 = var1.current;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var8.bind(var13)(var5, var1);
            var8 = var13.useCallback;
            var5 = function(arg1) {
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
                    var5 = _closure2_slot11;
                    var5 = var5.current;
                    var5 = var6.bind(var1)(var5);
                    var6 = _closure2_slot10;
                    var5 = true;
                    var5 = var6.bind(var1)(var5);
                    var3 = _closure2_slot11;
                    var5 = var4.setTimeout;
                    var4 = var2.retry_after;
                    var2 = 1000;
                    var4 = var2 * var4;
                    var2 = function() {
                        var3 = _closure2_slot10;
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
            var1 = new Array(0);
            var14 = var8.bind(var13)(var5, var1);
            _closure2_slot12 = var14;
            var1 = 17;
            var1 = var2[var1];
            var5 = var3.bind(var4)(var1);
            var3 = var5.useFocusEffect;
            var20 = var13.useCallback;
            var8 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var20.bind(var13)(var8, var1);
            var1 = var3.bind(var5)(var1);
            var8 = var13.useCallback;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 12; continue _fun0005 }
case 13:
                        var5 = undefined;
                        var7 = undefined;
                        var4 = _closure2_slot4;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure2_slot5;
                        var2 = {};
                        var2 = var4.bind(var5)(var2);
case 14: // try_start_0 // try_start_1
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 18;
                        var2 = var8[var2];
                        var8 = var6.bind(var5)(var2);
                        var6 = var8.forgotPassword;
                        var2 = _closure2_slot6;
                        var2 = var6.bind(var8)(var2);
                        SaveGenerator(address=81);
case 15:
                        return var2;
case 16:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var7 = var2;
                        var6 = false;
                        if(!(var6 !== var2)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var8 = var7;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 19;
                        var7 = var10[var7];
                        var7 = var9.bind(var5)(var7);
                        var7 = var7.PasswordResetMethods;
                        var7 = var7.ONE_TIME_LOGIN;
                        if(!(var8 !== var7)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                        var8 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var7 = 11;
                        var7 = var14[var7];
                        var9 = var8.bind(var5)(var7);
                        var8 = var9.show;
                        var7 = {};
                        var11 = _closure1_slot0;
                        var10 = 12;
                        var12 = var14[var10];
                        var12 = var11.bind(var5)(var12);
                        var15 = var12.intl;
                        var13 = var15.string;
                        var12 = var14[var10];
                        var12 = var11.bind(var5)(var12);
                        var12 = var12.t;
                        var12 = var12.f5Pi7A;
                        var12 = var13.bind(var15)(var12);
                        var7['title'] = var12;
                        var12 = var14[var10];
                        var12 = var11.bind(var5)(var12);
                        var13 = var12.intl;
                        var12 = var13.format;
                        var10 = var14[var10];
                        var10 = var11.bind(var5)(var10);
                        var10 = var10.t;
                        var11 = var10["6u5hQ9"];
                        var10 = {};
                        var14 = _closure2_slot6;
                        var10['email'] = var14;
                        var10 = var12.bind(var13)(var11, var10);
                        var7['body'] = var10;
                        var7 = var8.bind(var9)(var7);
                        _fun0005_ip = 23; continue _fun0005;
case 21:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 20;
                        var7 = var11[var7];
                        var9 = var8.bind(var5)(var7);
                        var8 = var9.openAlert;
                        var10 = _closure1_slot10;
                        var7 = _closure1_slot1;
                        var4 = 21;
                        var4 = var11[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = {};
                        var7 = var10.bind(var5)(var7, var4);
                        var4 = 'one-time-login-forgot-password-confirm';
                        var4 = var8.bind(var9)(var4, var7);
case 23: // try_end0
                        _fun0005_ip = 24; continue _fun0005;
case 19: // try_end1
                        var4 = _closure2_slot4;
                        var4 = var4.bind(var5)(var6);
                        return var5;
case 17:
                        var6 = _closure2_slot4;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 25: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=5);
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 22;
                        var2 = var7[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.getAuthenticationErrorsFromV6OrEarlierAPIError;
                        var4 = var2.bind(var4)(var6);
                        var2 = _closure2_slot12;
                        var2 = var2.bind(var5)(var4);
case 24: // try_end2
                        var4 = _closure2_slot4;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 26: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot4;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 12:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var3.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var14;
            var1[1] = var19;
            var1 = var8.bind(var13)(var5, var1);
            _closure2_slot13 = var1;
            var8 = var13.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            StartGenerator();
                            var2 = arguments[2];
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                            var10 = arg1;
                            var9 = arg2;
                            var3 = undefined;
                            if(!(var2 === var3)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                            var2 = false;
case 29:
                            var8 = var2;
                            SaveGenerator(address=34);
case 31:
                            return var3;
case 32:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                            var6 = _closure2_slot4;
                            var5 = true;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure2_slot5;
                            var5 = {};
                            var5 = var6.bind(var3)(var5);
case 35: // try_start_0
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
case 36:
                            return var5;
case 37:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0006_ip = 38; continue _fun0006 }
case 39: // try_end0
                            _fun0006_ip = 40; continue _fun0006;
case 38:
                            return var5;
case 41: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var6 = _closure2_slot4;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 22;
                            var5 = var8[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.getAuthenticationErrorsFromV6OrEarlierAPIError;
                            var5 = var5.bind(var6)(var7);
                            var4 = _closure2_slot12;
                            var4 = var4.bind(var3)(var5);
case 40:
                            return var3;
case 33:
                            return var2;
case 27:
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
            var5 = var1.bind(var4)();
            var1 = new Array(2);
            var1[0] = var14;
            var1[1] = var16;
            var5 = var8.bind(var13)(var5, var1);
            _closure2_slot14 = var5;
            var8 = var13.useCallback;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 42; continue _fun0007 }
case 13:
                        var2 = undefined;
                        var9 = undefined;
                        var5 = _closure2_slot9;
                        if(var5) { _fun0007_ip = 43; continue _fun0007 }
case 29:
                        var7 = _closure1_slot8;
                        var6 = var7.getIsPasswordlessActive;
                        var6 = var6.bind(var7)();
                        if(var6) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 23;
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
case 20: // try_start_0 // try_start_1
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 18;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.authenticatePasswordless;
                        var6 = {};
                        var6['authenticateFunc'] = var9;
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address=144);
case 45:
                        return var6;
case 22:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0007_ip = 46; continue _fun0007 }
case 47: // try_end0
                        _fun0007_ip = 48; continue _fun0007;
case 46: // try_end1
                        var8 = _closure2_slot4;
                        var7 = false;
                        var7 = var8.bind(var2)(var7);
                        return var6;
case 49: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        var3 = var7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 24;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.APIError;
                        var6 = var7 instanceof var6;
                        if(var6) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                        var7 = var3;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 25;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.IgnorableWebAuthnError;
                        var6 = var7 instanceof var6;
                        if(var6) { _fun0007_ip = 48; continue _fun0007 }
case 52:
                        var7 = _closure2_slot5;
                        var6 = {};
                        var8 = var3;
                        var8 = var8.message;
                        var6['message'] = var8;
                        var6 = var7.bind(var2)(var6);
                        _fun0007_ip = 48; continue _fun0007;
case 50:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 22;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.getAuthenticationErrorsFromAPIError;
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure2_slot12;
                        var3 = var3.bind(var2)(var5);
case 48: // try_end2
                        var5 = _closure2_slot4;
                        var3 = false;
                        var3 = var5.bind(var2)(var3);
                        _fun0007_ip = 43; continue _fun0007;
case 53: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var2)(var4);
                        throw var3;
case 43:
                        return var2;
case 42:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var14;
            var1[1] = var22;
            var19 = var8.bind(var13)(var3, var1);
            var3 = _closure1_slot1;
            var1 = 26;
            var1 = var2[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = 27;
            var1 = var2[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var6, var5);
            var1 = 28;
            var2 = var2[var1];
            var3 = var3.bind(var4)(var2);
            var2 = 'login';
            var27 = var3.bind(var4)(var2, var10);
            if(!(var12 == var27)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var1];
            var3 = var3.bind(var4)(var2);
            var2 = 'email';
            var27 = var3.bind(var4)(var2, var10);
case 54:
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = var16[var1];
            var1 = var6.bind(var4)(var1);
            var25 = 'password';
            var14 = var1.bind(var4)(var25, var10);
            var3 = _closure1_slot11;
            var1 = 29;
            var1 = var16[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var24 = _closure1_slot0;
            var20 = 12;
            var5 = var16[var20];
            var5 = var24.bind(var4)(var5);
            var13 = var5.intl;
            var8 = var13.string;
            var5 = var16[var20];
            var5 = var24.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["7fNJgA"];
            var5 = var8.bind(var13)(var5);
            var1['headerText'] = var5;
            var13 = _closure1_slot10;
            var5 = 10;
            var5 = var16[var5];
            var5 = var24.bind(var4)(var5);
            var8 = var5.Text;
            var5 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var29 = var16[var20];
            var29 = var24.bind(var4)(var29);
            var31 = var29.intl;
            var30 = var31.string;
            var29 = var16[var20];
            var29 = var24.bind(var4)(var29);
            var29 = var29.t;
            var29 = var29.euS7r4;
            var29 = var30.bind(var31)(var29);
            var5['children'] = var29;
            var5 = var13.bind(var4)(var8, var5);
            var1['subHeader'] = var5;
            var5 = 30;
            var5 = var16[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {'containerStyle': null, 'autoFocus': true, 'textContentType': 'emailAddress', 'keyboardType': 'email-address'};
            var8 = var11.login;
            var5['containerStyle'] = var8;
            var8 = true;
            var28 = var28.alpha2;
            var5['alpha2'] = var28;
            var5['countryCode'] = var21;
            var21 = function onChange(arg1, arg2) {
                var3 = _closure2_slot7;
                var2 = arg2;
                var1 = arg1;
                var2 = var2 + var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onChange'] = var21;
            var21 = function onSubmitEditing() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var2 = var3.focus;
                    var1 = var2.bind(var3)();
case 56:
                    return var1;
                }
            };
            var5['onSubmitEditing'] = var21;
            var21 = 'next';
            var5['returnKeyType'] = var21;
            var21 = 'none';
            var5['autoCapitalize'] = var21;
            var28 = var16[var20];
            var28 = var24.bind(var4)(var28);
            var30 = var28.intl;
            var29 = var30.string;
            var28 = var16[var20];
            var28 = var24.bind(var4)(var28);
            var28 = var28.t;
            var28 = var28.tUjnxr;
            var28 = var29.bind(var30)(var28);
            var5['label'] = var28;
            var5['errorMessage'] = var27;
            var27 = 'login_login_input';
            var5['testID'] = var27;
            var27 = function onPressCountrySelector() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot9;
                var1 = var1.COUNTRY_SELECT;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['onPressCountrySelector'] = var27;
            var5['isClearable'] = var8;
            var8 = 'username';
            var5['autoComplete'] = var8;
            var6 = var13.bind(var4)(var6, var5);
            var5 = new Array(9);
            var5[0] = var6;
            var6 = 31;
            var6 = var16[var6];
            var6 = var24.bind(var4)(var6);
            var8 = var6.TextInput;
            var6 = {};
            var27 = var11.password;
            var6['containerStyle'] = var27;
            var6['ref'] = var26;
            var6['textContentType'] = var25;
            var25 = !var18;
            var6['secureTextEntry'] = var25;
            var6['onChange'] = var23;
            var6['autoCapitalize'] = var21;
            var21 = function onSubmitEditing() {
                var4 = _closure2_slot14;
                var3 = _closure2_slot6;
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['onSubmitEditing'] = var21;
            var21 = var16[var20];
            var21 = var24.bind(var4)(var21);
            var23 = var21.intl;
            var21 = var23.string;
            var16 = var16[var20];
            var16 = var24.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.CIGa+7;
            var16 = var21.bind(var23)(var16);
            var6['label'] = var16;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            if(var18) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var16 = 33;
            var16 = var24[var16];
            var16 = var23.bind(var4)(var16);
            var16 = var16.EyeIcon;
            _fun0003_ip = 60; continue _fun0003;
case 58:
            var21 = 32;
            var21 = var24[var21];
            var21 = var23.bind(var4)(var21);
            var16 = var21.EyeSlashIcon;
case 60:
            var6['trailingIcon'] = var16;
            var16 = {};
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var23 = var21[var20];
            var23 = var25.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.string;
            var21 = var21[var20];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            if(var18) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var18 = var21.nFzpM5;
            var18 = var23.bind(var24)(var18);
            _fun0003_ip = 63; continue _fun0003;
case 61:
            var21 = var21.Nusip4;
            var18 = var23.bind(var24)(var21);
case 63:
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
            var6['trailingPressableProps'] = var16;
            var16 = 'done';
            var6['returnKeyType'] = var16;
            var6['errorMessage'] = var14;
            var14 = 'login_password_input';
            var6['testID'] = var14;
            var14 = 'current-password';
            var6['autoComplete'] = var14;
            var6 = var13.bind(var4)(var8, var6);
            var5[1] = var6;
            var16 = _closure1_slot10;
            var14 = _closure1_slot13;
            var6 = {};
            var8 = var11.link;
            var6['containerStyle'] = var8;
            var8 = function onPress() {
                var2 = _closure2_slot13;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var6['onPress'] = var8;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var18 = var13[var20];
            var18 = var8.bind(var4)(var18);
            var23 = var18.intl;
            var21 = var23.string;
            var18 = var13[var20];
            var18 = var8.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.wWIufs;
            var18 = var21.bind(var23)(var18);
            var6['text'] = var18;
            var6 = var16.bind(var4)(var14, var6);
            var5[2] = var6;
            var6 = 13;
            var6 = var13[var6];
            var8 = var8.bind(var4)(var6);
            var6 = var8.isAndroid;
            var8 = var6.bind(var8)();
            var6 = null;
            if(!var8) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 34;
            var8 = var14[var8];
            var13 = var13.bind(var4)(var8);
            var8 = var13.isMetaQuest;
            var8 = var8.bind(var13)();
            var6 = null;
            if(var8) { _fun0003_ip = 64; continue _fun0003 }
case 66:
            var14 = _closure1_slot10;
            var13 = _closure1_slot13;
            var8 = {};
            var16 = var11.link;
            var8['containerStyle'] = var16;
            var16 = _closure1_slot14;
            var8['onPress'] = var16;
            var23 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var20];
            var18 = var23.bind(var4)(var18);
            var21 = var18.intl;
            var18 = var21.string;
            var16 = var16[var20];
            var16 = var23.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.RL5Fy2;
            var16 = var18.bind(var21)(var16);
            var8['text'] = var16;
            var16 = 'text-link';
            var8['textColor'] = var16;
            var6 = var14.bind(var4)(var13, var8);
case 64:
            var5[3] = var6;
            var18 = _closure1_slot10;
            var16 = _closure1_slot6;
            var14 = {};
            var6 = var11.button;
            var14['style'] = var6;
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var8 = 35;
            var21 = var6[var8];
            var21 = var13.bind(var4)(var21);
            var23 = var21.Button;
            var21 = {};
            var24 = 'lg';
            var21['size'] = var24;
            var21['disabled'] = var22;
            var21['loading'] = var17;
            var24 = var6[var20];
            var24 = var13.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var6[var20];
            var24 = var13.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.dKhVQN;
            var24 = var25.bind(var26)(var24);
            var21['text'] = var24;
            var24 = function onPress() {
                var4 = _closure2_slot14;
                var3 = _closure2_slot6;
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var21['onPress'] = var24;
            var21 = var18.bind(var4)(var23, var21);
            var14['children'] = var21;
            var14 = var18.bind(var4)(var16, var14);
            var5[4] = var14;
            var14 = 36;
            var14 = var6[var14];
            var14 = var13.bind(var4)(var14);
            var16 = var14.Stack;
            var14 = {};
            var21 = var11.separator;
            var14['style'] = var21;
            var21 = 37;
            var21 = var6[var21];
            var21 = var13.bind(var4)(var21);
            var23 = var21.OrSeparator;
            var21 = {};
            var21 = var18.bind(var4)(var23, var21);
            var14['children'] = var21;
            var14 = var18.bind(var4)(var16, var14);
            var5[5] = var14;
            var14 = 34;
            var6 = var6[var14];
            var13 = var13.bind(var4)(var6);
            var6 = var13.isMetaQuest;
            var13 = var6.bind(var13)();
            var6 = null;
            if(var13) { _fun0003_ip = 67; continue _fun0003 }
case 68:
            var18 = _closure1_slot10;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var13 = var24[var8];
            var13 = var23.bind(var4)(var13);
            var16 = var13.Button;
            var13 = {'icon': null, 'size': 'lg', 'variant': 'tertiary'};
            var21 = 38;
            var21 = var24[var21];
            var21 = var23.bind(var4)(var21);
            var23 = var21.KeyIcon;
            var21 = {};
            var21 = var18.bind(var4)(var23, var21);
            var13['icon'] = var21;
            var21 = var17;
            if(var21) { _fun0003_ip = 69; continue _fun0003 }
case 70:
            var21 = var22;
case 69:
            var13['disabled'] = var21;
            var24 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = var21[var20];
            var22 = var24.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var21[var20];
            var21 = var24.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.EiwJkN;
            var21 = var22.bind(var23)(var21);
            var13['text'] = var21;
            var13['onPress'] = var19;
            var6 = var18.bind(var4)(var16, var13);
case 67:
            var5[6] = var6;
            var13 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var14];
            var13 = var13.bind(var4)(var6);
            var6 = var13.isMetaQuest;
            var13 = var6.bind(var13)();
            var6 = null;
            if(!var13) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var14 = _closure1_slot10;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = var16[var8];
            var8 = var19.bind(var4)(var8);
            var13 = var8.Button;
            var8 = {'icon': null, 'size': 'lg', 'variant': 'tertiary'};
            var18 = 39;
            var18 = var16[var18];
            var18 = var19.bind(var4)(var18);
            var21 = var18.LaptopPhoneIcon;
            var18 = {};
            var18 = var14.bind(var4)(var21, var18);
            var8['icon'] = var18;
            var8['disabled'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Cc4Mc9;
            var16 = var17.bind(var18)(var16);
            var8['text'] = var16;
            var15 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot9;
                var1 = var1.COMPANION_REMOTE_AUTH;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8['onPress'] = var15;
            var6 = var14.bind(var4)(var13, var8);
case 71:
            var5[7] = var6;
            var6 = var10.message;
            var8 = var12 != var6;
            var6 = null;
            if(!var8) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var8 = var10.message;
            var6 = null;
            if(!(var9 !== var8)) { _fun0003_ip = 73; continue _fun0003 }
case 75:
            var9 = _closure1_slot10;
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
case 73:
            var5[8] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['LinkButton'] = var2;
    return var1;
})();
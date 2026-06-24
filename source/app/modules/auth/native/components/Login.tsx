// app/modules/auth/native/components/Login.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function LinkButton(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.onPress;
            var8 = var1.text;
            var14 = var1.containerStyle;
            var11 = var1.textStyle;
            var10 = var1.variant;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = 'text-xs/medium';
case 2:
            var9 = var1.textColor;
            if(!(var9 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = 'text-link';
case 4:
            var3 = _closure1_slot10;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 9;
            var1 = var12[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.PressableOpacity;
            var1 = {};
            var13 = new Array(1);
            var13[0] = var14;
            var1['style'] = var13;
            var13 = {'top': 8, 'right': 8, 'bottom': 8};
            var1['hitSlop'] = var13;
            var13 = 'button';
            var1['accessibilityRole'] = var13;
            var1['onPress'] = var7;
            var7 = _closure1_slot10;
            var5 = 10;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var5['style'] = var11;
            var5['variant'] = var10;
            var5['color'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot13 = var2;
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
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 13;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.isAndroid;
                var3 = var3.bind(var4)();
                if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.openAccessibilitySettings;
                var2 = var2.bind(var3)();
case 6:
                return var1;
            }
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var9 = var7[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var9);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.AuthStates;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot10 = var8;
    var5 = var5.jsxs;
    var _closure1_slot11 = var5;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var2 = {};
            var3 = 24;
            var2['marginTop'] = var3;
            var1['password'] = var2;
            var2 = {'width': '100%', 'marginTop': 16};
            var1['button'] = var2;
            var2 = {};
            var3 = 4;
            var2['marginTop'] = var3;
            var1['hint'] = var2;
            var2 = {'alignSelf': 'flex-start', 'paddingVertical': 4};
            var1['link'] = var2;
            var2 = {'paddingHorizontal': 16, 'paddingVertical': 4};
            var1['separator'] = var2;
            var2 = {};
            var3 = 32;
            var2['marginTop'] = var3;
            var4 = arg1;
            var3 = 0;
            if(!var4) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = 12;
case 8:
            var2['marginBottom'] = var3;
            var1['content'] = var2;
            return var1;
        }
    };
    var5 = var8.bind(var9)(var5);
    var _closure1_slot12 = var5;
    var5 = 45;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/auth/native/components/Login.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function Login(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var18 = var1.isMultiAccount;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var18 = false;
case 10:
            var _closure2_slot0 = var18;
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
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 15;
            var1 = var2[var1];
            var1 = var3.bind(var4)(var1);
            var5 = var1.bind(var4)();
            var1 = _closure1_slot12;
            var14 = var1.bind(var4)(var5);
            var5 = _closure1_slot0;
            var1 = 16;
            var1 = var2[var1];
            var6 = var5.bind(var4)(var1);
            var1 = var6.useNavigation;
            var7 = var1.bind(var6)();
            _closure2_slot1 = var7;
            var1 = 17;
            var1 = var2[var1];
            var9 = var5.bind(var4)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getCountryCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var8.bind(var9)(var6, var1);
            var8 = var24.code;
            var6 = var8.split;
            var1 = ' ';
            var1 = var6.bind(var8)(var1);
            var17 = _closure1_slot4;
            var6 = 1;
            var1 = var17.bind(var4)(var1, var6);
            var9 = 0;
            var19 = var1[var9];
            var11 = _closure1_slot5;
            var1 = var11.useRef;
            var15 = null;
            var28 = var1.bind(var11)(var15);
            _closure2_slot2 = var28;
            var1 = var11.useState;
            var21 = false;
            var1 = var1.bind(var11)(var21);
            var16 = 2;
            var1 = var17.bind(var4)(var1, var16);
            var22 = var1[var9];
            var1 = var1[var6];
            _closure2_slot3 = var1;
            var1 = var11.useState;
            var1 = var1.bind(var11)(var21);
            var1 = var17.bind(var4)(var1, var16);
            var8 = var1[var9];
            var1 = var1[var6];
            _closure2_slot4 = var1;
            var12 = var11.useState;
            var1 = {};
            var1 = var12.bind(var11)(var1);
            var1 = var17.bind(var4)(var1, var16);
            var13 = var1[var9];
            var1 = var1[var6];
            _closure2_slot5 = var1;
            var1 = var11.useState;
            var12 = '';
            var1 = var1.bind(var11)(var12);
            var1 = var17.bind(var4)(var1, var16);
            var20 = var1[var9];
            _closure2_slot6 = var20;
            var1 = var1[var6];
            _closure2_slot7 = var1;
            var1 = var11.useState;
            var1 = var1.bind(var11)(var12);
            var1 = var17.bind(var4)(var1, var16);
            var25 = var1[var9];
            _closure2_slot8 = var25;
            var25 = var1[var6];
            var1 = var11.useState;
            var1 = var1.bind(var11)(var21);
            var1 = var17.bind(var4)(var1, var16);
            var16 = var1[var9];
            _closure2_slot9 = var16;
            var1 = var1[var6];
            _closure2_slot10 = var1;
            var1 = var11.useRef;
            var1 = var1.bind(var11)(var4);
            _closure2_slot11 = var1;
            var9 = var11.useEffect;
            var6 = function() {
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
            var1 = var9.bind(var11)(var6, var1);
            var9 = var11.useCallback;
            var6 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot5;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var5 = var2.retry_after;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0005_ip = 12; continue _fun0005 }
case 13:
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
case 12:
                    return var1;
                }
            };
            var1 = new Array(0);
            var17 = var9.bind(var11)(var6, var1);
            _closure2_slot12 = var17;
            var1 = 18;
            var1 = var2[var1];
            var6 = var5.bind(var4)(var1);
            var5 = var6.useFocusEffect;
            var21 = var11.useCallback;
            var9 = function() {
                var3 = _closure2_slot4;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var21.bind(var11)(var9, var1);
            var1 = var5.bind(var6)(var1);
            var9 = var11.useCallback;
            var6 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0006_ip = 14; continue _fun0006 }
case 15:
                        var5 = undefined;
                        var7 = undefined;
                        var4 = _closure2_slot4;
                        var2 = true;
                        var2 = var4.bind(var5)(var2);
                        var4 = _closure2_slot5;
                        var2 = {};
                        var2 = var4.bind(var5)(var2);
case 16: // try_start_0 // try_start_1
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 19;
                        var2 = var8[var2];
                        var8 = var6.bind(var5)(var2);
                        var6 = var8.forgotPassword;
                        var2 = _closure2_slot6;
                        var2 = var6.bind(var8)(var2);
                        SaveGenerator(address=81);
case 17:
                        return var2;
case 18:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                        if(var6) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                        var7 = var2;
                        var6 = false;
                        if(!(var6 !== var2)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                        var8 = var7;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 20;
                        var7 = var10[var7];
                        var7 = var9.bind(var5)(var7);
                        var7 = var7.PasswordResetMethods;
                        var7 = var7.ONE_TIME_LOGIN;
                        if(!(var8 !== var7)) { _fun0006_ip = 23; continue _fun0006 }
case 24:
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
                        _fun0006_ip = 25; continue _fun0006;
case 23:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var7 = 21;
                        var7 = var11[var7];
                        var9 = var8.bind(var5)(var7);
                        var8 = var9.openAlert;
                        var10 = _closure1_slot10;
                        var7 = _closure1_slot1;
                        var4 = 22;
                        var4 = var11[var4];
                        var7 = var7.bind(var5)(var4);
                        var4 = {};
                        var7 = var10.bind(var5)(var7, var4);
                        var4 = 'one-time-login-forgot-password-confirm';
                        var4 = var8.bind(var9)(var4, var7);
case 25: // try_end0
                        _fun0006_ip = 26; continue _fun0006;
case 21: // try_end1
                        var4 = _closure2_slot4;
                        var4 = var4.bind(var5)(var6);
                        return var5;
case 19:
                        var6 = _closure2_slot4;
                        var4 = false;
                        var4 = var6.bind(var5)(var4);
                        return var2;
case 27: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=5);
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 23;
                        var2 = var7[var2];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.getAuthenticationErrorsFromV6OrEarlierAPIError;
                        var4 = var2.bind(var4)(var6);
                        var2 = _closure2_slot12;
                        var2 = var2.bind(var5)(var4);
case 26: // try_end2
                        var4 = _closure2_slot4;
                        var2 = false;
                        var2 = var4.bind(var5)(var2);
                        return var5;
case 28: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=1);
                        var4 = _closure2_slot4;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
case 14:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var6.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var17;
            var1[1] = var20;
            var1 = var9.bind(var11)(var5, var1);
            _closure2_slot13 = var1;
            var9 = var11.useCallback;
            var1 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1, arg2) {
                    var1 = function* anon_0_(arg1, arg2) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            StartGenerator();
                            var2 = arguments[2];
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                            var10 = arg1;
                            var9 = arg2;
                            var3 = undefined;
                            if(!(var2 === var3)) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                            var2 = false;
case 31:
                            var8 = var2;
                            SaveGenerator(address=34);
case 33:
                            return var3;
case 34:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                            var6 = _closure2_slot4;
                            var5 = true;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure2_slot5;
                            var5 = {};
                            var5 = var6.bind(var3)(var5);
case 37: // try_start_0
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 19;
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
case 38:
                            return var5;
case 39:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0007_ip = 40; continue _fun0007 }
case 41: // try_end0
                            _fun0007_ip = 42; continue _fun0007;
case 40:
                            return var5;
case 43: // catch_target0
                            CatchBlockStart(arg_register=6);
                            var6 = _closure2_slot4;
                            var5 = false;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 23;
                            var5 = var8[var5];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.getAuthenticationErrorsFromV6OrEarlierAPIError;
                            var5 = var5.bind(var6)(var7);
                            var4 = _closure2_slot12;
                            var4 = var4.bind(var3)(var5);
case 42:
                            return var3;
case 35:
                            return var2;
case 29:
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
            var1[0] = var17;
            var1[1] = var18;
            var5 = var9.bind(var11)(var5, var1);
            _closure2_slot14 = var5;
            var9 = var11.useCallback;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0008_ip = 44; continue _fun0008 }
case 15:
                        var2 = undefined;
                        var9 = undefined;
                        var5 = _closure2_slot9;
                        if(var5) { _fun0008_ip = 45; continue _fun0008 }
case 31:
                        var7 = _closure1_slot8;
                        var6 = var7.getIsPasswordlessActive;
                        var6 = var6.bind(var7)();
                        if(var6) { _fun0008_ip = 45; continue _fun0008 }
case 5:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 24;
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
case 9: // try_start_0 // try_start_1
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var6 = 19;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.authenticatePasswordless;
                        var6 = {};
                        var6['authenticateFunc'] = var9;
                        var6 = var7.bind(var8)(var6);
                        SaveGenerator(address=146);
case 24:
                        return var6;
case 46:
                        ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                        if(var7) { _fun0008_ip = 47; continue _fun0008 }
case 48: // try_end0
                        _fun0008_ip = 49; continue _fun0008;
case 47: // try_end1
                        var8 = _closure2_slot4;
                        var7 = false;
                        var7 = var8.bind(var2)(var7);
                        return var6;
case 50: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register=6);
                        var3 = var7;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 25;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.APIError;
                        var6 = var7 instanceof var6;
                        if(var6) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                        var7 = var3;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 26;
                        var6 = var9[var6];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.IgnorableWebAuthnError;
                        var6 = var7 instanceof var6;
                        if(var6) { _fun0008_ip = 49; continue _fun0008 }
case 53:
                        var7 = _closure2_slot5;
                        var6 = {};
                        var8 = var3;
                        var8 = var8.message;
                        var6['message'] = var8;
                        var6 = var7.bind(var2)(var6);
                        _fun0008_ip = 49; continue _fun0008;
case 51:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 23;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.getAuthenticationErrorsFromAPIError;
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure2_slot12;
                        var3 = var3.bind(var2)(var5);
case 49: // try_end2
                        var5 = _closure2_slot4;
                        var3 = false;
                        var3 = var5.bind(var2)(var3);
                        _fun0008_ip = 45; continue _fun0008;
case 54: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register=2);
                        var5 = _closure2_slot4;
                        var4 = false;
                        var4 = var5.bind(var2)(var4);
                        throw var3;
case 45:
                        return var2;
case 44:
                        return var1;
                    }
                };
                return var1;
            };
            var6 = var6.bind(var4)(var1);
            var1 = new Array(2);
            var1[0] = var17;
            var1[1] = var16;
            var6 = var9.bind(var11)(var6, var1);
            var1 = 27;
            var1 = var2[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var1 = 28;
            var1 = var2[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.bind(var4)(var7, var5);
            var1 = 29;
            var2 = var2[var1];
            var3 = var3.bind(var4)(var2);
            var2 = 'login';
            var29 = var3.bind(var4)(var2, var13);
            if(!(var15 == var29)) { _fun0004_ip = 55; continue _fun0004 }
case 56:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var1];
            var3 = var3.bind(var4)(var2);
            var2 = 'email';
            var29 = var3.bind(var4)(var2, var13);
case 55:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var27 = 'password';
            var20 = var1.bind(var4)(var27, var13);
            var1 = 30;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useConfig;
            var1 = {};
            var5 = 'Login';
            var1['location'] = var5;
            var1 = var2.bind(var3)(var1);
            var17 = var1.newButton;
            var7 = var1.canDisable;
            if(!var7) { _fun0004_ip = 57; continue _fun0004 }
case 58:
            var1 = var8;
            if(var1) { _fun0004_ip = 59; continue _fun0004 }
case 60:
            var1 = var16;
case 59:
            var7 = var1;
case 57:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 31;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.hasWebAuthn;
            var9 = null;
            if(!var1) { _fun0004_ip = 61; continue _fun0004 }
case 62:
            var5 = _closure1_slot10;
            var21 = _closure1_slot0;
            var26 = _closure1_slot2;
            if(var17) { _fun0004_ip = 63; continue _fun0004 }
case 64:
            var3 = 34;
            var1 = var26[var3];
            var1 = var21.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {};
            var11 = true;
            var1['shrink'] = var11;
            var11 = var26[var3];
            var11 = var21.bind(var4)(var11);
            var11 = var11.Button;
            var11 = var11.Looks;
            var11 = var11.LINK;
            var1['look'] = var11;
            var11 = var26[var3];
            var11 = var21.bind(var4)(var11);
            var11 = var11.Button;
            var11 = var11.Colors;
            var11 = var11.LINK;
            var1['color'] = var11;
            var3 = var26[var3];
            var3 = var21.bind(var4)(var3);
            var3 = var3.Button;
            var3 = var3.Sizes;
            var3 = var3.MEDIUM;
            var1['size'] = var3;
            var3 = var14.button;
            var1['style'] = var3;
            var3 = 12;
            var11 = var26[var3];
            var11 = var21.bind(var4)(var11);
            var18 = var11.intl;
            var11 = var18.string;
            var3 = var26[var3];
            var3 = var21.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["/kpMDt"];
            var3 = var11.bind(var18)(var3);
            var1['text'] = var3;
            var1['onPress'] = var6;
            var1['disabled'] = var7;
            var1 = var5.bind(var4)(var2, var1);
            _fun0004_ip = 65; continue _fun0004;
case 63:
            var2 = 32;
            var2 = var26[var2];
            var2 = var21.bind(var4)(var2);
            var3 = var2.Button;
            var2 = {'icon': null, 'size': 'lg', 'variant': 'tertiary'};
            var30 = _closure1_slot10;
            var11 = 33;
            var11 = var26[var11];
            var11 = var21.bind(var4)(var11);
            var18 = var11.KeyIcon;
            var11 = {};
            var11 = var30.bind(var4)(var18, var11);
            var2['icon'] = var11;
            var2['disabled'] = var7;
            var7 = 12;
            var11 = var26[var7];
            var11 = var21.bind(var4)(var11);
            var18 = var11.intl;
            var11 = var18.string;
            var7 = var26[var7];
            var7 = var21.bind(var4)(var7);
            var7 = var7.t;
            var7 = var7.EiwJkN;
            var7 = var11.bind(var18)(var7);
            var2['text'] = var7;
            var2['onPress'] = var6;
            var1 = var5.bind(var4)(var3, var2);
case 65:
            var9 = var1;
case 61:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var18 = 35;
            var1 = var1[var18];
            var2 = var2.bind(var4)(var1);
            var1 = var2.isMetaQuest;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var3 = _closure1_slot10;
            var11 = _closure1_slot0;
            var21 = _closure1_slot2;
            var1 = 32;
            var1 = var21[var1];
            var1 = var11.bind(var4)(var1);
            var2 = var1.Button;
            var1 = {'icon': null, 'size': 'lg', 'variant': 'primary'};
            var7 = _closure1_slot10;
            var5 = 36;
            var5 = var21[var5];
            var5 = var11.bind(var4)(var5);
            var6 = var5.MobilePhoneIcon;
            var5 = {};
            var26 = 'control-primary-text-default';
            var5['color'] = var26;
            var5 = var7.bind(var4)(var6, var5);
            var1['icon'] = var5;
            var1['disabled'] = var8;
            var5 = 12;
            var6 = var21[var5];
            var6 = var11.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var21[var5];
            var5 = var11.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.Cc4Mc9;
            var5 = var6.bind(var7)(var5);
            var1['text'] = var5;
            var5 = function onPress() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot9;
                var1 = var1.COMPANION_REMOTE_AUTH;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['onPress'] = var5;
            var9 = var3.bind(var4)(var2, var1);
case 66:
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var7 = _closure1_slot10;
            var6 = _closure1_slot1;
            var21 = _closure1_slot2;
            var5 = 37;
            var5 = var21[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {'autoFocus': true, 'textContentType': 'emailAddress', 'keyboardType': 'email-address'};
            var11 = true;
            var24 = var24.alpha2;
            var5['alpha2'] = var24;
            var5['countryCode'] = var19;
            var19 = function onChange(arg1, arg2) {
                var3 = _closure2_slot7;
                var2 = arg2;
                var1 = arg1;
                var2 = var2 + var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5['onChange'] = var19;
            var19 = function onSubmitEditing() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot2;
                    var3 = var1.current;
                    var1 = null;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if(var2) { _fun0009_ip = 68; continue _fun0009 }
case 69:
                    var2 = var3.focus;
                    var1 = var2.bind(var3)();
case 68:
                    return var1;
                }
            };
            var5['onSubmitEditing'] = var19;
            var19 = 'next';
            var5['returnKeyType'] = var19;
            var24 = 'none';
            var5['autoCapitalize'] = var24;
            var26 = _closure1_slot0;
            var19 = 12;
            var30 = var21[var19];
            var30 = var26.bind(var4)(var30);
            var32 = var30.intl;
            var31 = var32.string;
            var30 = var21[var19];
            var30 = var26.bind(var4)(var30);
            var30 = var30.t;
            var30 = var30.tUjnxr;
            var30 = var31.bind(var32)(var30);
            var5['label'] = var30;
            var5['errorMessage'] = var29;
            var29 = 'login_login_input';
            var5['testID'] = var29;
            var29 = function onPressCountrySelector() {
                var3 = _closure2_slot1;
                var2 = var3.push;
                var1 = _closure1_slot9;
                var1 = var1.COUNTRY_SELECT;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var5['onPressCountrySelector'] = var29;
            var5['isClearable'] = var11;
            var11 = 'username';
            var5['autoComplete'] = var11;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(5);
            var5[0] = var6;
            var11 = _closure1_slot10;
            var6 = 38;
            var6 = var21[var6];
            var6 = var26.bind(var4)(var6);
            var7 = var6.TextInput;
            var6 = {};
            var29 = var14.password;
            var6['containerStyle'] = var29;
            var6['ref'] = var28;
            var6['textContentType'] = var27;
            var27 = !var22;
            var6['secureTextEntry'] = var27;
            var6['onChange'] = var25;
            var6['autoCapitalize'] = var24;
            var24 = function onSubmitEditing() {
                var4 = _closure2_slot14;
                var3 = _closure2_slot6;
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6['onSubmitEditing'] = var24;
            var24 = var21[var19];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var21[var19];
            var21 = var26.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.CIGa+7;
            var21 = var24.bind(var25)(var21);
            var6['label'] = var21;
            var25 = _closure1_slot0;
            var26 = _closure1_slot2;
            if(var22) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var21 = 40;
            var21 = var26[var21];
            var21 = var25.bind(var4)(var21);
            var21 = var21.EyeIcon;
            _fun0004_ip = 72; continue _fun0004;
case 70:
            var24 = 39;
            var24 = var26[var24];
            var24 = var25.bind(var4)(var24);
            var21 = var24.EyeSlashIcon;
case 72:
            var6['trailingIcon'] = var21;
            var21 = {};
            var27 = _closure1_slot0;
            var24 = _closure1_slot2;
            var25 = var24[var19];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var19];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            if(var22) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var22 = var24.nFzpM5;
            var22 = var25.bind(var26)(var22);
            _fun0004_ip = 75; continue _fun0004;
case 73:
            var24 = var24.Nusip4;
            var22 = var25.bind(var26)(var24);
case 75:
            var21['accessibilityLabel'] = var22;
            var22 = function onPress() {
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
            var21['onPress'] = var22;
            var22 = {'top': 8, 'bottom': 8};
            var21['hitSlop'] = var22;
            var6['trailingPressableProps'] = var21;
            var21 = 'done';
            var6['returnKeyType'] = var21;
            var6['errorMessage'] = var20;
            var20 = 'login_password_input';
            var6['testID'] = var20;
            var20 = 'current-password';
            var6['autoComplete'] = var20;
            var6 = var11.bind(var4)(var7, var6);
            var5[1] = var6;
            var21 = _closure1_slot10;
            var20 = _closure1_slot13;
            var6 = {};
            var7 = var14.link;
            var6['containerStyle'] = var7;
            var7 = function onPress() {
                var2 = _closure2_slot13;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var6['onPress'] = var7;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var22 = var11[var19];
            var22 = var7.bind(var4)(var22);
            var25 = var22.intl;
            var24 = var25.string;
            var22 = var11[var19];
            var22 = var7.bind(var4)(var22);
            var22 = var22.t;
            var22 = var22.wWIufs;
            var22 = var24.bind(var25)(var22);
            var6['text'] = var22;
            var6 = var21.bind(var4)(var20, var6);
            var5[2] = var6;
            var6 = 13;
            var6 = var11[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.isAndroid;
            var7 = var6.bind(var7)();
            var6 = null;
            if(!var7) { _fun0004_ip = 76; continue _fun0004 }
case 77:
            var11 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var18];
            var11 = var11.bind(var4)(var7);
            var7 = var11.isMetaQuest;
            var7 = var7.bind(var11)();
            var6 = null;
            if(var7) { _fun0004_ip = 76; continue _fun0004 }
case 78:
            var20 = _closure1_slot10;
            var11 = _closure1_slot13;
            var7 = {};
            var21 = var14.link;
            var7['containerStyle'] = var21;
            var21 = _closure1_slot14;
            var7['onPress'] = var21;
            var25 = _closure1_slot0;
            var21 = _closure1_slot2;
            var22 = var21[var19];
            var22 = var25.bind(var4)(var22);
            var24 = var22.intl;
            var22 = var24.string;
            var21 = var21[var19];
            var21 = var25.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.RL5Fy2;
            var21 = var22.bind(var24)(var21);
            var7['text'] = var21;
            var21 = 'text-link';
            var7['textColor'] = var21;
            var6 = var20.bind(var4)(var11, var7);
case 76:
            var5[3] = var6;
            var11 = _closure1_slot10;
            var7 = _closure1_slot6;
            var6 = {};
            var20 = var14.button;
            var6['style'] = var20;
            var22 = _closure1_slot10;
            var25 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 32;
            var20 = var24[var20];
            var20 = var25.bind(var4)(var20);
            var21 = var20.Button;
            var20 = {};
            var26 = 'lg';
            var20['size'] = var26;
            var24 = var24[var18];
            var25 = var25.bind(var4)(var24);
            var24 = var25.isMetaQuest;
            var25 = var24.bind(var25)();
            var24 = 'primary';
            if(!var25) { _fun0004_ip = 79; continue _fun0004 }
case 80:
            var24 = 'tertiary';
case 79:
            var20['variant'] = var24;
            var20['disabled'] = var16;
            var20['loading'] = var8;
            var16 = _closure1_slot0;
            var8 = _closure1_slot2;
            var24 = var8[var19];
            var24 = var16.bind(var4)(var24);
            var26 = var24.intl;
            var25 = var26.string;
            var24 = var8[var19];
            var24 = var16.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.dKhVQN;
            var24 = var25.bind(var26)(var24);
            var20['text'] = var24;
            var23 = function onPress() {
                var4 = _closure2_slot14;
                var3 = _closure2_slot6;
                var2 = _closure2_slot8;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var20['onPress'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var6['children'] = var20;
            var6 = var11.bind(var4)(var7, var6);
            var5[4] = var6;
            var1['children'] = var5;
            var11 = var3.bind(var4)(var2, var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot1;
            var1 = 41;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = var8[var19];
            var5 = var16.bind(var4)(var5);
            var7 = var5.intl;
            var6 = var7.string;
            var5 = var8[var19];
            var5 = var16.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5["7fNJgA"];
            var5 = var6.bind(var7)(var5);
            var1['headerText'] = var5;
            var7 = _closure1_slot10;
            var5 = 10;
            var5 = var8[var5];
            var5 = var16.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var20 = var8[var19];
            var20 = var16.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var8[var19];
            var19 = var16.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.euS7r4;
            var19 = var20.bind(var21)(var19);
            var5['children'] = var19;
            var5 = var7.bind(var4)(var6, var5);
            var1['subHeader'] = var5;
            var7 = _closure1_slot11;
            var6 = _closure1_slot6;
            var5 = {};
            var19 = var14.content;
            var5['style'] = var19;
            var8 = var8[var18];
            var16 = var16.bind(var4)(var8);
            var8 = var16.isMetaQuest;
            var8 = var8.bind(var16)();
            var16 = var11;
            if(!var8) { _fun0004_ip = 81; continue _fun0004 }
case 82:
            var16 = var9;
case 81:
            var8 = new Array(4);
            var8[0] = var16;
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var18];
            var19 = var19.bind(var4)(var16);
            var16 = var19.isMetaQuest;
            var16 = var16.bind(var19)();
            if(var16) { _fun0004_ip = 83; continue _fun0004 }
case 84:
            var16 = null;
            if(!var17) { _fun0004_ip = 85; continue _fun0004 }
case 83:
            var20 = _closure1_slot10;
            var22 = _closure1_slot0;
            var24 = _closure1_slot2;
            var17 = 42;
            var17 = var24[var17];
            var17 = var22.bind(var4)(var17);
            var19 = var17.Stack;
            var17 = {};
            var21 = var14.separator;
            var17['style'] = var21;
            var23 = _closure1_slot10;
            var21 = 43;
            var21 = var24[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.OrSeparator;
            var21 = {};
            var21 = var23.bind(var4)(var22, var21);
            var17['children'] = var21;
            var16 = var20.bind(var4)(var19, var17);
case 85:
            var8[1] = var16;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var18];
            var17 = var17.bind(var4)(var16);
            var16 = var17.isMetaQuest;
            var16 = var16.bind(var17)();
            if(!var16) { _fun0004_ip = 86; continue _fun0004 }
case 87:
            var9 = var11;
case 86:
            var8[2] = var9;
            var9 = var13.message;
            var11 = var15 != var9;
            var9 = null;
            if(!var11) { _fun0004_ip = 88; continue _fun0004 }
case 89:
            var11 = var13.message;
            var9 = null;
            if(!(var12 !== var11)) { _fun0004_ip = 88; continue _fun0004 }
case 90:
            var12 = _closure1_slot10;
            var11 = _closure1_slot1;
            var15 = _closure1_slot2;
            var10 = 44;
            var10 = var15[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var14 = var14.hint;
            var10['style'] = var14;
            var13 = var13.message;
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 88:
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['LinkButton'] = var2;
    return var1;
})();
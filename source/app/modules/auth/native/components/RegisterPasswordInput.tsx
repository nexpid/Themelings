// app/modules/auth/native/components/RegisterPasswordInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function PasswordStrength(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.password;
            var6 = var1.isPasswordFocused;
            var2 = var1.passwordError;
            var3 = var1.passwordScore;
            var1 = _closure1_slot13;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var1 = null;
            if(!(var1 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(!var6) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = var4.length;
            var4 = 0;
            if(!(var4 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            if(!(var1 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 9;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.PasswordScore;
            var2 = var2.WEAK;
            if(!(!(var3 <= var2))) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.PasswordScore;
            var2 = var2.MEDIUM;
            if(!(var3 !== var2)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.PasswordScore;
            var2 = var2.STRONG;
            var6 = '';
            var7 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var3 = var11[var2];
            var3 = var10.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Xraqqa;
            var6 = var3.bind(var4)(var2);
            var7 = var8.strong;
            _fun0001_ip = 11; continue _fun0001;
case 9:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var3 = var11[var2];
            var3 = var10.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.2fmTpa;
            var6 = var3.bind(var4)(var2);
            var7 = var8.medium;
            _fun0001_ip = 11; continue _fun0001;
case 7:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 10;
            var3 = var11[var2];
            var3 = var10.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.w/8Tub;
            var6 = var3.bind(var4)(var2);
            var7 = var8.weak;
case 11:
            var4 = _closure1_slot10;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 11;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var13 = _closure1_slot14;
            var14 = var2;
            var12 = copyDataProperties(var14, var13);
            var13 = _closure1_slot15;
            var14 = var2;
            var9 = copyDataProperties(var14, var13);
            var12 = 'text-xs/medium';
            var9 = 'variant';
            var2[var9] = var12;
            var9 = var8.passwordStrength;
            var8 = new Array(2);
            var8[0] = var9;
            var8[1] = var7;
            var7 = 'style';
            var2[var7] = var8;
            var8 = true;
            var7 = 'animated';
            var2[var7] = var8;
            var7 = 10;
            var8 = var11[var7];
            var8 = var10.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.5gbdUV;
            var8 = var8.bind(var9)(var7);
            var7 = new Array(3);
            var7[0] = var8;
            var8 = ': ';
            var7[1] = var8;
            var7[2] = var6;
            var6 = 'children';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = ['password'];
    var _closure1_slot3 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.setRegistrationErrors;
    var _closure1_slot8 = var8;
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsxs;
    var _closure1_slot10 = var8;
    var8 = var4.jsx;
    var _closure1_slot11 = var8;
    var4 = var4.Fragment;
    var _closure1_slot12 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_DANGER;
    var10['color'] = var13;
    var4['weak'] = var10;
    var10 = {};
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.TEXT_WARNING;
    var10['color'] = var13;
    var4['medium'] = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_POSITIVE;
    var10['color'] = var11;
    var4['strong'] = var10;
    var10 = {'marginTop': 4, 'marginBottom': 4};
    var4['passwordStrength'] = var10;
    var10 = {};
    var11 = '100%';
    var10['width'] = var11;
    var4['inputHint'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 8;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.FadeIn;
    var9 = var11.duration;
    var10 = 300;
    var9 = var9.bind(var11)(var10);
    var4['entering'] = var9;
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.FadeOut;
    var9 = var11.duration;
    var9 = var9.bind(var11)(var10);
    var4['exiting'] = var9;
    var _closure1_slot14 = var4;
    var4 = {};
    var9 = var6[var8];
    var9 = var5.bind(var1)(var9);
    var11 = var9.LinearTransition;
    var9 = var11.easing;
    var12 = var6[var8];
    var12 = var5.bind(var1)(var12);
    var13 = var12.Easing;
    var12 = var13.inOut;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.Easing;
    var8 = var8.quad;
    var8 = var12.bind(var13)(var8);
    var9 = var9.bind(var11)(var8);
    var8 = var9.duration;
    var8 = var8.bind(var9)(var10);
    var4['layout'] = var8;
    var _closure1_slot15 = var4;
    var4 = var7.forwardRef;
    var2 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot13;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var16 = var2.password;
            var13 = var2.onPasswordChange;
            var _closure2_slot0 = var13;
            var20 = var2.onSubmitEditing;
            var14 = var2.passwordScore;
            var22 = var2.returnKeyType;
            var6 = var2.autoFocus;
            var3 = _closure1_slot6;
            var2 = var3.useRef;
            var8 = null;
            var28 = var2.bind(var3)(var8);
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['inputRef'] = var28;
            var5 = var8 != var6;
            if(!var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var5 = var6;
case 13:
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
            var5 = _closure1_slot6;
            var2 = var5.useState;
            var15 = false;
            var2 = var2.bind(var5)(var15);
            var11 = _closure1_slot5;
            var9 = 2;
            var2 = var11.bind(var4)(var2, var9);
            var7 = 0;
            var18 = var2[var7];
            var3 = 1;
            var6 = var2[var3];
            var _closure2_slot1 = var6;
            var2 = var5.useState;
            var2 = var2.bind(var5)(var15);
            var2 = var11.bind(var4)(var2, var9);
            var15 = var2[var7];
            var _closure2_slot2 = var15;
            var2 = var2[var3];
            var _closure2_slot3 = var2;
            var7 = _closure1_slot9;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var3 = var7.bind(var4)(var3);
            var _closure2_slot4 = var3;
            var9 = _closure1_slot1;
            var21 = _closure1_slot2;
            var7 = 13;
            var7 = var21[var7];
            var9 = var9.bind(var4)(var7);
            var7 = 'password';
            var7 = var9.bind(var4)(var7, var3);
            var11 = var5.useCallback;
            var9 = new Array(2);
            var9[0] = var13;
            var9[1] = var3;
            var3 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.password;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                    var2 = _closure2_slot4;
                    var2 = var2.password;
                    var6 = _closure1_slot4;
                    var5 = _closure2_slot4;
                    var3 = _closure1_slot3;
                    var4 = undefined;
                    var3 = var6.bind(var4)(var5, var3);
                    var2 = _closure1_slot8;
                    var2 = var2.bind(var4)(var3);
case 15:
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var23 = var11.bind(var5)(var3, var9);
            var26 = _closure1_slot0;
            var3 = 14;
            var3 = var21[var3];
            var13 = var26.bind(var4)(var3);
            var11 = var13.useStateFromStores;
            var3 = _closure1_slot7;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 15;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var2 = var2.CountryCodesSets;
                    var3 = var2.FRANCE_AND_FRENCH_REGION;
                    var2 = var3.has;
                    var4 = _closure1_slot7;
                    var1 = var4.getCountryCode;
                    var1 = var1.bind(var4)();
                    var1 = var1.alpha2;
                    var2 = var2.bind(var3)(var1);
                    var1 = 8;
                    if(!var2) { _fun0004_ip = 6; continue _fun0004 }
case 17:
                    var1 = 12;
case 6:
                    return var1;
                }
            };
            var3 = var11.bind(var13)(var9, var3);
            var _closure2_slot5 = var3;
            var11 = var5.useMemo;
            var9 = new Array(2);
            var9[0] = var15;
            var9[1] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                    var1 = undefined;
                    return var1;
case 18:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 10;
                    var3 = var7[var1];
                    var2 = undefined;
                    var3 = var6.bind(var2)(var3);
                    var4 = var3.intl;
                    var3 = var4.format;
                    var1 = var7[var1];
                    var1 = var6.bind(var2)(var1);
                    var1 = var1.t;
                    var2 = var1.VUUJ6e;
                    var1 = {};
                    var5 = _closure2_slot5;
                    var1['minimumLength'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var11 = var11.bind(var5)(var3, var9);
            var13 = var5.useCallback;
            var9 = new Array(1);
            var9[0] = var2;
            var3 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var19 = var13.bind(var5)(var3, var9);
            var9 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure2_slot3;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var13 = var9.bind(var5)(var2, var3);
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure2_slot1;
                var1 = undefined;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = !var1;
                    return var1;
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var17 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot12;
            var1 = {};
            var9 = _closure1_slot11;
            var5 = 16;
            var5 = var21[var5];
            var5 = var26.bind(var4)(var5);
            var6 = var5.TextInput;
            var5 = {'ref': null, 'textContentType': 'newPassword', 'autoComplete': 'new-password'};
            var24 = 17;
            var24 = var21[var24];
            var27 = var26.bind(var4)(var24);
            var25 = var27.mergeRefs;
            var24 = arg2;
            var24 = var25.bind(var27)(var24, var28);
            var5['ref'] = var24;
            var5['onChange'] = var23;
            var5['value'] = var16;
            var23 = 10;
            var24 = var21[var23];
            var24 = var26.bind(var4)(var24);
            var27 = var24.intl;
            var25 = var27.string;
            var24 = var21[var23];
            var24 = var26.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.CIGa+/;
            var24 = var25.bind(var27)(var24);
            var5['label'] = var24;
            var24 = var21[var23];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var21 = var21[var23];
            var21 = var26.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.cUVsEB;
            var21 = var24.bind(var25)(var21);
            var5['accessibilityHint'] = var21;
            var21 = !var18;
            var5['secureTextEntry'] = var21;
            var24 = var8 != var22;
            var21 = 'next';
            if(!var24) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var21 = var22;
case 20:
            var5['returnKeyType'] = var21;
            var21 = 'none';
            var5['autoCapitalize'] = var21;
            var5['onSubmitEditing'] = var20;
            var5['onFocus'] = var19;
            var5['onBlur'] = var13;
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            if(var18) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var13 = 19;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var13 = var13.EyeIcon;
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var19 = 18;
            var19 = var21[var19];
            var19 = var20.bind(var4)(var19);
            var13 = var19.EyeSlashIcon;
case 24:
            var5['trailingIcon'] = var13;
            var13 = {};
            var22 = _closure1_slot0;
            var19 = _closure1_slot2;
            var20 = var19[var23];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var19[var23];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            if(var18) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var18 = var19.nFzpMz;
            var18 = var20.bind(var21)(var18);
            _fun0002_ip = 27; continue _fun0002;
case 25:
            var19 = var19.Nusip6;
            var18 = var20.bind(var21)(var19);
case 27:
            var13['accessibilityLabel'] = var18;
            var13['onPress'] = var17;
            var17 = {'top': 8, 'bottom': 8};
            var13['hitSlop'] = var17;
            var5['trailingPressableProps'] = var13;
            var5['errorMessage'] = var7;
            var17 = var8 != var7;
            var13 = undefined;
            if(!var17) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var13 = 'error';
case 28:
            var5['status'] = var13;
            var6 = var9.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var13 = _closure1_slot11;
            var9 = _closure1_slot16;
            var6 = {};
            var6['password'] = var16;
            var6['isPasswordFocused'] = var15;
            var6['passwordError'] = var7;
            var6['passwordScore'] = var14;
            var6 = var13.bind(var4)(var9, var6);
            var5[1] = var6;
            var9 = var8 != var11;
            var6 = null;
            if(!var9) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var7 = var8 == var7;
            var6 = null;
            if(!var7) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var9 = _closure1_slot11;
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 11;
            var7 = var13[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var29 = _closure1_slot14;
            var30 = var7;
            var13 = copyDataProperties(var30, var29);
            var29 = _closure1_slot15;
            var30 = var7;
            var12 = copyDataProperties(var30, var29);
            var12 = var10.inputHint;
            var10 = 'style';
            var7[var10] = var12;
            var12 = 'text-xs/medium';
            var10 = 'variant';
            var7[var10] = var12;
            var12 = 'text-muted';
            var10 = 'color';
            var7[var10] = var12;
            var12 = true;
            var10 = 'animated';
            var7[var10] = var12;
            var10 = 'children';
            var7[var10] = var11;
            var6 = var9.bind(var4)(var8, var7);
case 30:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/RegisterPasswordInput.tsx';
    var4 = var5.bind(var6)(var4);
    var3['RegisterPasswordInput'] = var2;
    return var1;
})();
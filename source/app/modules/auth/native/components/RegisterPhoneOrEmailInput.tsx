// app/modules/auth/native/components/RegisterPhoneOrEmailInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setRegistrationErrors;
    var _closure1_slot5 = var7;
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/RegisterPhoneOrEmailInput.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RegisterPhoneOrEmailInput(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var14 = var1.loginPhone;
            var _closure2_slot0 = var14;
            var20 = var1.loginEmail;
            var _closure2_slot1 = var20;
            var21 = var1.setLoginPhone;
            var _closure2_slot2 = var21;
            var10 = var1.setLoginEmail;
            var _closure2_slot3 = var10;
            var9 = var1.inputMode;
            var _closure2_slot4 = var9;
            var15 = var1.onSubmit;
            var6 = var1.inputError;
            var11 = var1.submitBehavior;
            var13 = var1.autoFocus;
            var4 = undefined;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var2 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 4;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useNavigation;
            var8 = var1.bind(var2)();
            var _closure2_slot5 = var8;
            var2 = _closure1_slot3;
            var1 = var2.useRef;
            var5 = null;
            var19 = var1.bind(var2)(var5);
            var _closure2_slot6 = var19;
            var2 = _closure1_slot1;
            var1 = 5;
            var1 = var12[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['inputRef'] = var19;
            var12 = var5 != var13;
            if(!var12) { _fun0001_ip = 183; continue _fun0001 }
 180:
            var12 = var13;
 183:
            var1['enabled'] = var12;
            var1 = var2.bind(var4)(var1);
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var12 = 6;
            var12 = var1[var12];
            var17 = var2.bind(var4)(var12);
            var16 = var17.useStateFromStores;
            var12 = _closure1_slot4;
            var13 = new Array(1);
            var13[0] = var12;
            var12 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getCountryCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var16.bind(var17)(var13, var12);
            var17 = var18.code;
            var13 = _closure1_slot6;
            var12 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var12 = var13.bind(var4)(var12);
            _closure2_slot7 = var12;
            var13 = _closure1_slot3;
            var22 = var13.useCallback;
            var16 = new Array(1);
            var16[0] = var12;
            var12 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = arg1;
                    var3 = _closure2_slot7;
                    var4 = var3[var1];
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 51; continue _fun0002 }
 20:
                    var3 = {};
                    var5 = _closure2_slot7;
                    var6 = var3;
                    var2 = copyDataProperties(var6, var5);
                    var1 = delete var3[var1];
                    var2 = _closure1_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 51:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var22.bind(var13)(var12, var16);
            _closure2_slot8 = var22;
            var16 = var13.useCallback;
            var12 = new Array(4);
            var12[0] = var9;
            var12[1] = var22;
            var12[2] = var21;
            var12[3] = var10;
            var10 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = arg1;
                    var5 = _closure2_slot4;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var6.bind(var1)(var3);
                    var3 = var3.PhoneOrEmailSelectorForceMode;
                    var3 = var3.PHONE;
                    if(!(var5 !== var3)) { _fun0003_ip = 75; continue _fun0003 }
 51:
                    var5 = _closure2_slot8;
                    var3 = 'email';
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)(var4);
                    _fun0003_ip = 101; continue _fun0003;
 75:
                    var5 = _closure2_slot8;
                    var3 = 'phone';
                    var3 = var5.bind(var1)(var3);
                    var3 = _closure2_slot2;
                    var2 = arg2;
                    var2 = var3.bind(var1)(var4, var2);
 101:
                    return var1;
                }
            };
            var16 = var16.bind(var13)(var10, var12);
            var12 = var13.useCallback;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var4 = _closure2_slot5;
                var3 = var4.push;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var2.AuthStates;
                var2 = var2.COUNTRY_SELECT;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var12 = var12.bind(var13)(var8, var10);
            var8 = var13.useRef;
            var8 = var8.bind(var13)(var9);
            _closure2_slot9 = var8;
            var10 = var13.useLayoutEffect;
            var8 = new Array(3);
            var8[0] = var9;
            var8[1] = var20;
            var8[2] = var14;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot9;
                    var3 = var2.current;
                    var2 = _closure2_slot4;
                    if(!(var3 !== var2)) { _fun0004_ip = 137; continue _fun0004 }
 20:
                    var2 = _closure2_slot9;
                    var3 = _closure2_slot4;
                    var2['current'] = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 7;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var2 = var2.PhoneOrEmailSelectorForceMode;
                    var2 = var2.PHONE;
                    if(!(var3 !== var2)) { _fun0004_ip = 107; continue _fun0004 }
 75:
                    var2 = _closure2_slot6;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 137; continue _fun0004 }
 90:
                    var3 = var4.setText;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var4)(var2);
                    _fun0004_ip = 137; continue _fun0004;
 107:
                    var2 = _closure2_slot6;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 137; continue _fun0004 }
 122:
                    var2 = var3.setText;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
 137:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var13)(var3, var8);
            var10 = 7;
            var1 = var1[var10];
            var1 = var2.bind(var4)(var1);
            var1 = var1.PhoneOrEmailSelectorForceMode;
            var1 = var1.PHONE;
            if(!(var9 !== var1)) { _fun0001_ip = 499; continue _fun0001 }
 442:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 9;
            var2 = var13[var1];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var13[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.dI4d4e;
            var13 = var2.bind(var3)(var1);
            _fun0001_ip = 554; continue _fun0001;
 499:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 9;
            var2 = var14[var1];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var14[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.eJnn09;
            var13 = var2.bind(var3)(var1);
 554:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var2.bind(var4)(var1);
            var1 = var1.PhoneOrEmailSelectorForceMode;
            var1 = var1.PHONE;
            if(!(var9 !== var1)) { _fun0001_ip = 646; continue _fun0001 }
 587:
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 9;
            var2 = var14[var1];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var14[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.a17rBg;
            var14 = var2.bind(var3)(var1);
            _fun0001_ip = 703; continue _fun0001;
 646:
            var8 = _closure1_slot0;
            var20 = _closure1_slot2;
            var1 = 9;
            var2 = var20[var1];
            var2 = var8.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var20[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.wpJ1dX;
            var14 = var2.bind(var3)(var1);
 703:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 10;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['ref'] = var19;
            var18 = var18.alpha2;
            var1['alpha2'] = var18;
            var1['countryCode'] = var17;
            var1['onChange'] = var16;
            var1['onSubmitEditing'] = var15;
            var1['placeholder'] = var13;
            var15 = 'next';
            var1['returnKeyType'] = var15;
            var15 = 'none';
            var1['autoCapitalize'] = var15;
            var1['accessibilityHint'] = var14;
            var1['label'] = var13;
            var1['errorMessage'] = var6;
            var1['onPressCountrySelector'] = var12;
            var1['forceMode'] = var9;
            var1['submitBehavior'] = var11;
            var11 = _closure1_slot0;
            var8 = var8[var10];
            var8 = var11.bind(var4)(var8);
            var8 = var8.PhoneOrEmailSelectorForceMode;
            var11 = var8.PHONE;
            var8 = 'email';
            if(!(var9 === var11)) { _fun0001_ip = 848; continue _fun0001 }
 844:
            var8 = 'tel';
 848:
            var1['autoComplete'] = var8;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var7 = var8.bind(var4)(var7);
            var7 = var7.PhoneOrEmailSelectorForceMode;
            var8 = var7.PHONE;
            var7 = 'email-address';
            if(!(var9 === var8)) { _fun0001_ip = 898; continue _fun0001 }
 892:
            var7 = 'number-pad';
 898:
            var1['keyboardType'] = var7;
            var7 = true;
            var1['isClearable'] = var7;
            var6 = var5 != var6;
            var5 = undefined;
            if(!var6) { _fun0001_ip = 923; continue _fun0001 }
 919:
            var5 = 'error';
 923:
            var1['status'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RegisterPhoneOrEmailInput'] = var2;
    return var1;
})();
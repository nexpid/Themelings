// app/modules/auth/native/components/utils/useIdentityRegistrationStep.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.setRegistrationErrors;
    var _closure1_slot6 = var7;
    var7 = var4.updateRegistrationOptions;
    var _closure1_slot7 = var7;
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.authStateToRegisterTransitionStep;
    var _closure1_slot9 = var7;
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot10 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AbortCodes;
    var _closure1_slot12 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/utils/useIdentityRegistrationStep.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIdentityRegistrationStep(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var19 = arg1;
            var2 = arg2;
            var _closure2_slot0 = var19;
            var _closure2_slot1 = var2;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 6;
            var3 = var12[var3];
            var14 = undefined;
            var5 = var11.bind(var14)(var3);
            var3 = var5.useNavigation;
            var17 = var3.bind(var5)();
            var _closure2_slot2 = var17;
            var16 = _closure1_slot5;
            var5 = var16.useContext;
            var3 = 7;
            var3 = var12[var3];
            var3 = var11.bind(var14)(var3);
            var3 = var3.TrackRegistrationContext;
            var18 = var5.bind(var16)(var3);
            var _closure2_slot3 = var18;
            var3 = var16.useState;
            var13 = '';
            var3 = var3.bind(var16)(var13);
            var8 = _closure1_slot4;
            var7 = 2;
            var3 = var8.bind(var14)(var3, var7);
            var6 = 0;
            var10 = var3[var6];
            var _closure2_slot4 = var10;
            var5 = 1;
            var9 = var3[var5];
            var3 = var16.useRef;
            var3 = var3.bind(var16)(var13);
            var _closure2_slot5 = var3;
            var3 = var16.useState;
            var3 = var3.bind(var16)(var13);
            var3 = var8.bind(var14)(var3, var7);
            var8 = var3[var6];
            var _closure2_slot6 = var8;
            var3 = var3[var5];
            var _closure2_slot7 = var3;
            var6 = var16.useCallback;
            var5 = function(arg1, arg2) {
                var4 = _closure2_slot7;
                var1 = undefined;
                var3 = arg1;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot5;
                var2 = arg2;
                var3['current'] = var2;
                return var1;
            };
            var3 = new Array(0);
            var7 = var6.bind(var16)(var5, var3);
            var5 = _closure1_slot8;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var13 = var5.bind(var14)(var3);
            var _closure2_slot8 = var13;
            var6 = var16.useMemo;
            var5 = new Array(1);
            var5[0] = var13;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot8;
                    var4 = var1.error_code;
                    var3 = _closure1_slot12;
                    var3 = var3.PHONE_CARRIER_TYPE_NOT_MOBILE;
                    if(!(var4 !== var3)) { _fun0002_ip = 58; continue _fun0002 }
 30:
                    var2 = _closure2_slot8;
                    var3 = var2.error_code;
                    var2 = _closure1_slot12;
                    var2 = var2.INVALID_PHONE_NUMBER;
                    if(!(var3 !== var2)) { _fun0002_ip = 58; continue _fun0002 }
 54:
                    var2 = undefined;
                    return var2;
 58:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 8;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.F8UYVV;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var6 = var6.bind(var16)(var3, var5);
            var15 = var16.useCallback;
            var3 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0003_ip = 792; continue _fun0003 }
 12:
                            var2 = arg1;
                            var _closure5_slot0 = var2;
                            var2 = undefined;
                            var15 = undefined;
                            var _closure5_slot1 = var2;
                            var8 = undefined;
                            var7 = undefined;
                            var6 = undefined;
                            var9 = _closure2_slot5;
                            var10 = var9.current;
                            var9 = _closure2_slot6;
                            var12 = var10 + var9;
                            var15 = var12;
                            _closure5_slot1 = var12;
                            var11 = _closure1_slot7;
                            var10 = {};
                            var10['email'] = var2;
                            var10['phone'] = var12;
                            var10 = var11.bind(var2)(var10);
                            var11 = _closure1_slot9;
                            var10 = _closure2_slot0;
                            var8 = var11.bind(var2)(var10);
 97: // try_start_0
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 9;
                            var10 = var12[var10];
                            var12 = var11.bind(var2)(var10);
                            var11 = var12.registerPhone;
                            var10 = {};
                            var13 = var15;
                            var10['phone'] = var13;
                            var10 = var11.bind(var12)(var10);
                            SaveGenerator(address=142);
 140:
                            return var10;
 142:
                            ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                            if(var11) { _fun0003_ip = 401; continue _fun0003 }
 151:
                            var12 = _closure2_slot3;
                            var11 = {};
                            var13 = var8;
                            var11['step'] = var13;
                            var13 = _closure1_slot10;
                            var13 = var13.PHONE_VERIFICATION;
                            var11['toStep'] = var13;
                            var13 = _closure1_slot11;
                            var13 = var13.SUCCESS;
                            var11['actionType'] = var13;
                            var11 = var12.bind(var2)(var11);
 200: // try_end0
                            var14 = _closure2_slot2;
                            var13 = var14.push;
                            var17 = _closure1_slot0;
                            var20 = _closure1_slot2;
                            var11 = 13;
                            var11 = var20[var11];
                            var11 = var17.bind(var2)(var11);
                            var11 = var11.AuthStates;
                            var12 = var11.VERIFY_PHONE;
                            var11 = {};
                            var16 = 8;
                            var18 = var20[var16];
                            var18 = var17.bind(var2)(var18);
                            var21 = var18.intl;
                            var19 = var21.string;
                            var18 = var20[var16];
                            var18 = var17.bind(var2)(var18);
                            var18 = var18.t;
                            var18 = var18.h7hdQk;
                            var18 = var19.bind(var21)(var18);
                            var11['title'] = var18;
                            var18 = var20[var16];
                            var18 = var17.bind(var2)(var18);
                            var19 = var18.intl;
                            var18 = var19.formatToPlainString;
                            var16 = var20[var16];
                            var16 = var17.bind(var2)(var16);
                            var16 = var16.t;
                            var17 = var16.e5WzVV;
                            var16 = {};
                            var16['phone'] = var15;
                            var16 = var18.bind(var19)(var17, var16);
                            var11['description'] = var16;
                            var11['phone'] = var15;
                            var15 = _closure2_slot0;
                            var11['sourceState'] = var15;
                            var15 = function onPhoneTokenReceived(arg1) {
                                var3 = _closure1_slot7;
                                var2 = {};
                                var1 = undefined;
                                var2['email'] = var1;
                                var4 = _closure5_slot1;
                                var2['phone'] = var4;
                                var4 = arg1;
                                var2['phoneToken'] = var4;
                                var2 = var3.bind(var1)(var2);
                                var8 = _closure2_slot3;
                                var7 = {};
                                var3 = _closure1_slot10;
                                var3 = var3.PHONE_VERIFICATION;
                                var7['step'] = var3;
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 14;
                                var5 = var6[var3];
                                var11 = var4.bind(var1)(var5);
                                var10 = var11.getNextRegistrationTransitionStep;
                                var5 = _closure2_slot0;
                                var10 = var10.bind(var11)(var5);
                                var7['toStep'] = var10;
                                var9 = _closure1_slot11;
                                var9 = var9.SUCCESS;
                                var7['actionType'] = var9;
                                var7 = var8.bind(var1)(var7);
                                var3 = var6[var3];
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.getNextAuthState;
                                var4 = var3.bind(var4)(var5);
                                var3 = _closure2_slot2;
                                var2 = var3.replace;
                                var2 = var2.bind(var3)(var4);
                                return var1;
                            };
                            var11['onPhoneTokenReceived'] = var15;
                            var15 = function onBail() {
                                var4 = _closure2_slot7;
                                var1 = undefined;
                                var3 = '';
                                var3 = var4.bind(var1)(var3);
                                var3 = _closure2_slot2;
                                var2 = var3.pop;
                                var2 = var2.bind(var3)();
                                var2 = _closure5_slot0;
                                var2 = var2.bind(var1)();
                                return var1;
                            };
                            var11['onBail'] = var15;
                            var11 = var13.bind(var14)(var12, var11);
                            return var2;
 401:
                            return var10;
 404: // catch_target0
                            CatchBlockStart(arg_register=10);
                            var5 = var11;
                            var12 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var10 = 10;
                            var10 = var13[var10];
                            var10 = var12.bind(var2)(var10);
                            var10 = var10.CaptchaCancelError;
                            var10 = var11 instanceof var10;
                            if(var10) { _fun0003_ip = 789; continue _fun0003 }
 445:
                            var11 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var10 = 11;
                            var10 = var12[var10];
                            var11 = var11.bind(var2)(var10);
                            var10 = var11.getAuthenticationErrorsFromAPIError;
                            var11 = var10.bind(var11)(var5);
                            var7 = var11;
                            var5 = _closure1_slot6;
                            var5 = var5.bind(var2)(var11);
                            var5 = global;
                            var10 = var5.Object;
                            var5 = var10.keys;
                            var10 = var5.bind(var10)(var11);
                            var5 = var10.filter;
                            var3 = function(arg1) {
                                var3 = ['phone'];
                                var2 = var3.includes;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var3 = var5.bind(var10)(var3);
                            var6 = var3;
                            var3 = var3.length;
                            var10 = 0;
                            if(!(var3 > var10)) { _fun0003_ip = 555; continue _fun0003 }
 537:
                            var3 = var7;
                            var5 = var3.error_code;
                            var3 = null;
                            if(!(var3 == var5)) { _fun0003_ip = 683; continue _fun0003 }
 555:
                            var11 = var7;
                            var11 = var11.error_code;
                            var12 = null;
                            var11 = var12 != var11;
                            var5 = var11;
                            if(!var11) { _fun0003_ip = 588; continue _fun0003 }
 576:
                            var11 = var7;
                            var11 = var11.message;
                            var5 = var12 != var11;
 588:
                            var3 = var5;
                            if(!var5) { _fun0003_ip = 681; continue _fun0003 }
 594:
                            var11 = _closure2_slot3;
                            var5 = {};
                            var12 = var8;
                            var5['step'] = var12;
                            var12 = _closure1_slot11;
                            var12 = var12.RESPONSE_ERROR;
                            var5['actionType'] = var12;
                            var13 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var12 = 12;
                            var12 = var14[var12];
                            var14 = var13.bind(var2)(var12);
                            var13 = var14.getCommonErrorDetails;
                            var12 = var7;
                            var12 = var12.error_code;
                            var13 = var13.bind(var14)(var12);
                            var12 = new Array(1);
                            var12[0] = var13;
                            var5['details'] = var12;
                            var3 = var11.bind(var2)(var5);
 681:
                            _fun0003_ip = 784; continue _fun0003;
 683:
                            var5 = _closure2_slot3;
                            var4 = {};
                            var4['step'] = var8;
                            var8 = _closure1_slot11;
                            var8 = var8.RESPONSE_ERROR;
                            var4['actionType'] = var8;
                            var23 = var6;
                            var6 = new Array(1);
                            var24 = var6;
                            var22 = 0;
                            var8 = arraySpread(var24, var23, var22);
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 12;
                            var9 = var11[var9];
                            var10 = var10.bind(var2)(var9);
                            var9 = var10.getCommonErrorDetails;
                            var7 = var7.error_code;
                            var7 = var9.bind(var10)(var7);
                            var6[var8] = var7;
                            var7 = 1;
                            var7 = var8 + var7;
                            var4['details'] = var6;
                            var3 = var5.bind(var2)(var4);
 784:
                            var3 = undefined;
                            return var3;
 789:
                            return var2;
 792:
                            return var1;
                        }
                    };
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
            var5 = var3.bind(var14)();
            var3 = new Array(4);
            var3[0] = var19;
            var3[1] = var8;
            var3[2] = var18;
            var3[3] = var17;
            var5 = var15.bind(var16)(var5, var3);
            var3 = 15;
            var3 = var12[var3];
            var3 = var11.bind(var14)(var3);
            var3 = var3.PhoneOrEmailSelectorForceMode;
            var3 = var3.PHONE;
            if(!(var2 !== var3)) { _fun0001_ip = 352; continue _fun0001 }
 320:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var3 = 16;
            var3 = var12[var3];
            var11 = var11.bind(var14)(var3);
            var3 = 'email';
            var3 = var11.bind(var14)(var3, var13);
            _fun0001_ip = 382; continue _fun0001;
 352:
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 16;
            var11 = var15[var11];
            var12 = var12.bind(var14)(var11);
            var11 = 'phone';
            var3 = var12.bind(var14)(var11, var13);
 382:
            var _closure2_slot9 = var3;
            var12 = _closure1_slot5;
            var11 = var12.useMemo;
            var4 = new Array(4);
            var4[0] = var2;
            var4[1] = var8;
            var4[2] = var10;
            var4[3] = var3;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var1 = var1.PhoneOrEmailSelectorForceMode;
                    var1 = var1.PHONE;
                    if(!(var3 !== var1)) { _fun0004_ip = 54; continue _fun0004 }
 48:
                    var5 = _closure2_slot4;
                    _fun0004_ip = 58; continue _fun0004;
 54:
                    var5 = _closure2_slot6;
 58:
                    var3 = null;
                    var1 = var3 == var5;
                    if(var1) { _fun0004_ip = 75; continue _fun0004 }
 67:
                    var4 = '';
                    var1 = var4 === var5;
 75:
                    if(var1) { _fun0004_ip = 86; continue _fun0004 }
 78:
                    var2 = _closure2_slot9;
                    var1 = var3 != var2;
 86:
                    return var1;
                }
            };
            var4 = var11.bind(var12)(var2, var4);
            var11 = var12.useCallback;
            var2 = new Array(1);
            var2[0] = var10;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 17;
                    var1 = var4[var1];
                    var6 = undefined;
                    var4 = var3.bind(var6)(var1);
                    var3 = var4.isEmail;
                    var1 = _closure2_slot4;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    if(var3) { _fun0005_ip = 105; continue _fun0005 }
 48:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 8;
                    var3 = var7[var2];
                    var3 = var5.bind(var6)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var2 = var2.t;
                    var2 = var2.nr0MVV;
                    var1 = var3.bind(var4)(var2);
 105:
                    return var1;
                }
            };
            var2 = var11.bind(var12)(var1, var2);
            var1 = {};
            var1['loginEmail'] = var10;
            var1['setLoginEmail'] = var9;
            var1['loginPhone'] = var8;
            var1['updateLoginPhone'] = var7;
            var1['identityErrorMessage'] = var6;
            var1['registerAndVerifyPhone'] = var5;
            var1['preventSubmitIdentity'] = var4;
            var1['identityError'] = var3;
            var1['validateEmail'] = var2;
            return var1;
        }
    };
    var3['useIdentityRegistrationStep'] = var2;
    return var1;
})();
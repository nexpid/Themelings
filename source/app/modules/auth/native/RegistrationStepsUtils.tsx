// app/modules/auth/native/RegistrationStepsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var11;
    var1 = function headerTitle() {
        var1 = null;
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = function _handleNextOrSubmitRegistration() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var5 = arg2;
                    var6 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure1_slot9;
                    var2 = undefined;
                    var3 = var3.bind(var2)();
                    var3 = _closure1_slot18;
                    var4 = var3.bind(var2)(var9);
                    var3 = null;
                    if(!(var3 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = _closure1_slot23;
                    var3 = var3.bind(var2)(var9, var5, var6);
                    SaveGenerator(address=59);
case 6:
                    return var3;
case 7:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(!var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    return var3;
case 4:
                    var3 = {};
                    var8 = _closure1_slot10;
                    var8 = var8.bind(var2)(var9);
                    var3['step'] = var8;
                    var8 = _closure1_slot10;
                    var8 = var8.bind(var2)(var4);
                    var3['toStep'] = var8;
                    var7 = _closure1_slot13;
                    var7 = var7.SUCCESS;
                    var3['actionType'] = var7;
                    var3 = var6.bind(var2)(var3);
                    var3 = var5.push;
                    var3 = var3.bind(var5)(var4);
case 8:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var2 = function handleRegistrationSubmit() {
        var1 = undefined;
        var4 = _closure1_slot24;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot23 = var2;
    var1 = function _handleRegistrationSubmit() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var8 = arg1;
                    var6 = arg2;
                    var5 = arg3;
                    var2 = undefined;
                    var14 = undefined;
                    var4 = undefined;
                    var3 = undefined;
                    var11 = _closure1_slot4;
                    var9 = var11.registrationUsernameSuggestion;
                    var15 = var9.bind(var11)();
                    var11 = _closure1_slot8;
                    var9 = var11.getState;
                    var9 = var9.bind(var11)();
                    var12 = var9.registrationOptions;
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var9 = 23;
                    var9 = var13[var9];
                    var11 = var11.bind(var2)(var9);
                    var9 = var11.isNullOrEmpty;
                    var11 = var9.bind(var11)(var15);
                    var9 = null;
                    var13 = null;
                    if(var11) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var11 = var12.username;
                    var13 = var11 === var15;
case 12:
                    var11 = {};
                    var20 = var11;
                    var19 = var12;
                    var12 = copyDataProperties(var20, var19);
                    var12 = 'usedUsernameSuggestion';
                    var11[var12] = var13;
                    var14 = var11;
                    var12 = _closure1_slot5;
                    var11 = var12.getState;
                    var12 = var11.bind(var12)();
                    var11 = var12.required;
                    if(!var11) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var11 = var14;
                    var11['promoEmailConsent'] = var12;
case 14:
                    var12 = _closure1_slot7;
                    var11 = true;
                    var11 = var12.bind(var2)(var11);
                    var12 = _closure1_slot6;
                    var11 = {};
                    var11 = var12.bind(var2)(var11);
case 16: // try_start_0
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 24;
                    var11 = var13[var11];
                    var13 = var12.bind(var2)(var11);
                    var12 = var13.registerFull;
                    var11 = var14;
                    var11 = var12.bind(var13)(var11);
                    SaveGenerator(address=229);
case 17:
                    return var11;
case 18:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(var12) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                    var13 = var5;
                    var12 = {};
                    var16 = _closure1_slot10;
                    var15 = var8;
                    var15 = var16.bind(var2)(var15);
                    var12['step'] = var15;
                    var15 = _closure1_slot13;
                    var15 = var15.SUCCESS;
                    var12['actionType'] = var15;
                    var12['overrideRegistrationOptions'] = var14;
                    var12 = var13.bind(var2)(var12);
                    var12 = {};
                    var15 = _closure1_slot11;
                    var15 = var15.REGISTER;
                    var12['step'] = var15;
                    var15 = _closure1_slot13;
                    var15 = var15.SUCCESS;
                    var12['actionType'] = var15;
                    var12['overrideRegistrationOptions'] = var14;
                    var12 = var13.bind(var2)(var12);
case 21: // try_end0
                    _fun0002_ip = 22; continue _fun0002;
case 19:
                    return var11;
case 23: // catch_target0
                    CatchBlockStart(arg_register=11);
                    var10 = var12;
                    var13 = _closure1_slot7;
                    var11 = false;
                    var11 = var13.bind(var2)(var11);
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var11 = 25;
                    var11 = var14[var11];
                    var11 = var13.bind(var2)(var11);
                    var11 = var11.APIError;
                    var11 = var12 instanceof var11;
                    if(var11) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    return var2;
case 24:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var11 = 26;
                    var11 = var13[var11];
                    var12 = var12.bind(var2)(var11);
                    var11 = var12.getAuthenticationErrorsFromAPIError;
                    var11 = var11.bind(var12)(var10);
                    var4 = var11;
                    var10 = _closure1_slot6;
                    var10 = var10.bind(var2)(var11);
                    var10 = _closure1_slot10;
                    var8 = var10.bind(var2)(var8);
                    var3 = var8;
                    if(!(var9 != var8)) { _fun0002_ip = 22; continue _fun0002 }
case 26:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 27;
                    var7 = var9[var7];
                    var7 = var8.bind(var2)(var7);
                    var20 = var6;
                    var19 = var5;
                    var18 = var4;
                    var17 = var3;
                    var21 = undefined;
                    var3 = var21[var7](var20, var19, var18, var17, var16);
case 22:
                    return var2;
case 10:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot24 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var5);
    var1 = 0;
    var5 = var11[var1];
    var1 = undefined;
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var7 = var11[var5];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var7);
    var5 = 2;
    var5 = var11[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var5 = var5.usePromoEmailConsentStore;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var6 = var5.setRegistrationErrors;
    var _closure1_slot6 = var6;
    var6 = var5.setSubmitting;
    var _closure1_slot7 = var6;
    var6 = var5.useRegistrationUIStore;
    var _closure1_slot8 = var6;
    var5 = var5.clearRegistrationErrorMessage;
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var6 = var5.authStateToRegisterTransitionStep;
    var _closure1_slot10 = var6;
    var6 = var5.RegisterTransitionSteps;
    var _closure1_slot11 = var6;
    var6 = var5.RegistrationSteps;
    var _closure1_slot12 = var6;
    var5 = var5.RegistrationTransitionActionTypes;
    var _closure1_slot13 = var5;
    var5 = 6;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var6 = var5.AuthStates;
    var _closure1_slot14 = var6;
    var5 = 7;
    var5 = var11[var5];
    var5 = var10.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot15 = var5;
    var7 = var6.WELCOME;
    var5 = new Array(5);
    var5[0] = var7;
    var7 = var6.REGISTER_IDENTITY;
    var5[1] = var7;
    var7 = var6.REGISTER_DISPLAY_NAME;
    var5[2] = var7;
    var7 = var6.REGISTER_ACCOUNT_INFORMATION;
    var5[3] = var7;
    var6 = var6.AGE_GATE;
    var5[4] = var6;
    var _closure1_slot16 = var5;
    var8 = function getRegistrationSteps() {
        var1 = _closure1_slot16;
        return var1;
    };
    var _closure1_slot17 = var8;
    var7 = function getNextAuthState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = _closure1_slot17;
            var4 = undefined;
            var2 = var1.bind(var4)();
            var3 = var2.indexOf;
            var1 = arg1;
            var3 = var3.bind(var2)(var1);
            var1 = -1;
            if(!(var1 !== var3)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var5 = var2.length;
            var1 = 1;
            var5 = var5 - var1;
            if(!(var3 === var5)) { _fun0003_ip = 29; continue _fun0003 }
case 27:
            return var4;
case 29:
            var1 = var3 + var1;
            var1 = var2[var1];
            return var1;
        }
    };
    var _closure1_slot18 = var7;
    var6 = function getPreviousAuthState(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot17;
            var1 = undefined;
            var2 = var2.bind(var1)();
            var4 = var2.indexOf;
            var3 = arg1;
            var3 = var4.bind(var2)(var3);
            var4 = -1;
            if(!(var4 !== var3)) { _fun0004_ip = 30; continue _fun0004 }
case 28:
            var4 = 0;
            if(!(var4 === var3)) { _fun0004_ip = 31; continue _fun0004 }
case 30:
            return var1;
case 31:
            var1 = 1;
            var1 = var3 - var1;
            var1 = var2[var1];
            return var1;
        }
    };
    var _closure1_slot19 = var6;
    var5 = function getPreviousRegistrationTransitionStep(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot19;
            var3 = undefined;
            var2 = arg1;
            var2 = var4.bind(var3)(var2);
            var4 = null;
            if(!(var4 == var2)) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            return var3;
case 32:
            var1 = _closure1_slot10;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var _closure1_slot20 = var5;
    var9 = 28;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/auth/native/RegistrationStepsUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getRegistrationSteps'] = var8;
    var8 = function getAllAuthScreens() {
        var1 = {};
        var2 = _closure1_slot14;
        var10 = var2.WELCOME;
        var3 = {'ignoreKeyboard': true, 'fullscreen': true, 'impressionName': null, 'headerTitle': null, 'headerShown': false};
        var11 = true;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var6 = 8;
        var5 = var9[var6];
        var7 = undefined;
        var5 = var8.bind(var7)(var5);
        var5 = var5.ImpressionNames;
        var5 = var5.USER_WELCOME;
        var3['impressionName'] = var5;
        var5 = _closure1_slot21;
        var3['headerTitle'] = var5;
        var12 = function render() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.REGISTER_IDENTITY;
        var3 = {'ignoreKeyboard': true, 'fullscreen': true};
        var12 = var9[var6];
        var12 = var8.bind(var7)(var12);
        var12 = var12.ImpressionNames;
        var12 = var12.USER_REGISTRATION;
        var3['impressionName'] = var12;
        var12 = {};
        var14 = var9[var6];
        var14 = var8.bind(var7)(var14);
        var14 = var14.ImpressionGroups;
        var14 = var14.USER_REGISTRATION_FLOW;
        var12['impression_group'] = var14;
        var13 = _closure1_slot12;
        var14 = var13.IDENTITY;
        var12['step'] = var14;
        var3['impressionProperties'] = var12;
        var3['headerTitle'] = var5;
        var12 = function headerLeft(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BackButtonWithTracking;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var6 = copyDataProperties(var8, var7);
            var6 = _closure1_slot20;
            var5 = _closure1_slot14;
            var5 = var5.REGISTER_IDENTITY;
            var6 = var6.bind(var3)(var5);
            var5 = 'destinationStep';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['headerLeft'] = var12;
        var12 = function render() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.RegisterIdentity;
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.REGISTER_DISPLAY_NAME;
        var3 = {'ignoreKeyboard': true, 'fullscreen': true};
        var12 = var9[var6];
        var12 = var8.bind(var7)(var12);
        var12 = var12.ImpressionNames;
        var12 = var12.USER_REGISTRATION;
        var3['impressionName'] = var12;
        var12 = {};
        var14 = var9[var6];
        var14 = var8.bind(var7)(var14);
        var14 = var14.ImpressionGroups;
        var14 = var14.USER_REGISTRATION_FLOW;
        var12['impression_group'] = var14;
        var14 = var13.DISPLAY_NAME;
        var12['step'] = var14;
        var3['impressionProperties'] = var12;
        var3['headerTitle'] = var5;
        var12 = function headerLeft(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BackButtonWithTracking;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var6 = copyDataProperties(var8, var7);
            var6 = _closure1_slot20;
            var5 = _closure1_slot14;
            var5 = var5.REGISTER_DISPLAY_NAME;
            var6 = var6.bind(var3)(var5);
            var5 = 'destinationStep';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['headerLeft'] = var12;
        var12 = function render() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.REGISTER_ACCOUNT_INFORMATION;
        var3 = {'ignoreKeyboard': true, 'fullscreen': true};
        var12 = var9[var6];
        var12 = var8.bind(var7)(var12);
        var12 = var12.ImpressionNames;
        var12 = var12.USER_REGISTRATION;
        var3['impressionName'] = var12;
        var12 = {};
        var14 = var9[var6];
        var14 = var8.bind(var7)(var14);
        var14 = var14.ImpressionGroups;
        var14 = var14.USER_REGISTRATION_FLOW;
        var12['impression_group'] = var14;
        var13 = var13.ACCOUNT_INFORMATION;
        var12['step'] = var13;
        var3['impressionProperties'] = var12;
        var3['headerTitle'] = var5;
        var12 = function headerLeft(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BackButtonWithTracking;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var6 = copyDataProperties(var8, var7);
            var6 = _closure1_slot20;
            var5 = _closure1_slot14;
            var5 = var5.REGISTER_ACCOUNT_INFORMATION;
            var6 = var6.bind(var3)(var5);
            var5 = 'destinationStep';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['headerLeft'] = var12;
        var12 = function render() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 13;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.VERIFY_PHONE;
        var3 = {};
        var3['ignoreKeyboard'] = var11;
        var12 = var9[var6];
        var12 = var8.bind(var7)(var12);
        var12 = var12.ImpressionNames;
        var12 = var12.USER_VERIFY_PHONE;
        var3['impressionName'] = var12;
        var12 = {};
        var13 = var9[var6];
        var13 = var8.bind(var7)(var13);
        var13 = var13.ImpressionGroups;
        var13 = var13.USER_REGISTRATION_FLOW;
        var12['impression_group'] = var13;
        var3['impressionProperties'] = var12;
        var3['headerTitle'] = var5;
        var12 = function headerLeft(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BackButtonWithTracking;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var6 = copyDataProperties(var8, var7);
            var5 = _closure1_slot11;
            var6 = var5.ACCOUNT_IDENTITY;
            var5 = 'destinationStep';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['headerLeft'] = var12;
        var12 = function render(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = arg1;
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.LOGIN;
        var3 = {'ignoreKeyboard': true, 'fullscreen': true};
        var12 = var9[var6];
        var12 = var8.bind(var7)(var12);
        var12 = var12.ImpressionNames;
        var12 = var12.USER_LOGIN;
        var3['impressionName'] = var12;
        var12 = {};
        var13 = var9[var6];
        var13 = var8.bind(var7)(var13);
        var13 = var13.ImpressionGroups;
        var13 = var13.USER_LOGIN_FLOW;
        var12['impression_group'] = var13;
        var3['impressionProperties'] = var12;
        var3['headerTitle'] = var5;
        var12 = function render() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.MFA;
        var3 = {'fullscreen': true, 'ignoreKeyboard': true, 'headerTitle': null, 'headerShown': false};
        var3['headerTitle'] = var5;
        var12 = function render() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 16;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.ACCOUNT_DISABLED_OR_DELETION_SCHEDULED;
        var3 = {'ignoreKeyboard': true, 'fullscreen': true};
        var3['headerTitle'] = var5;
        var12 = function render(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = arg1;
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.COUNTRY_SELECT;
        var3 = {};
        var3['ignoreKeyboard'] = var11;
        var3['headerTitle'] = var5;
        var12 = function render(arg1, arg2) {
            var1 = arg2;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = function onClose() {
                var2 = _closure3_slot0;
                var1 = var2.pop;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['onClose'] = var6;
            var5 = function onCountrySelected(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.setCountryCode;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1['onCountrySelected'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var12;
        var1[var10] = var3;
        var10 = var2.EXTERNAL_LINK;
        var3 = {};
        var3['ignoreKeyboard'] = var11;
        var3['headerTitle'] = var5;
        var11 = function render(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 20;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var6 = arg1;
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var11;
        var1[var10] = var3;
        var10 = var2.AGE_GATE;
        var3 = {'ignoreKeyboard': true, 'fullscreen': true};
        var11 = var9[var6];
        var11 = var8.bind(var7)(var11);
        var11 = var11.ImpressionNames;
        var11 = var11.USER_AGE_GATE;
        var3['impressionName'] = var11;
        var3['headerTitle'] = var5;
        var11 = function headerLeft(arg1) {
            var4 = _closure1_slot15;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.BackButtonWithTracking;
            var1 = {};
            var7 = arg1;
            var8 = var1;
            var6 = copyDataProperties(var8, var7);
            var6 = _closure1_slot20;
            var5 = _closure1_slot14;
            var5 = var5.AGE_GATE;
            var6 = var6.bind(var3)(var5);
            var5 = 'destinationStep';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['headerLeft'] = var11;
        var11 = function render() {
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 21;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var3['render'] = var11;
        var1[var10] = var3;
        var3 = var2.AGE_GATE_UNDERAGE;
        var2 = {'ignoreKeyboard': true, 'fullscreen': true};
        var6 = var9[var6];
        var6 = var8.bind(var7)(var6);
        var6 = var6.ImpressionNames;
        var6 = var6.USER_AGE_GATE_UNDERAGE;
        var2['impressionName'] = var6;
        var6 = function impressionProperties(arg1) {
            var1 = arg1;
            var2 = var1.existingUser;
            var1 = {};
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 8;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var3 = var3.ImpressionGroups;
            var3 = var3.USER_REGISTRATION_FLOW;
            var1['impression_group'] = var3;
            var1['existing_user'] = var2;
            return var1;
        };
        var2['impressionProperties'] = var6;
        var2['headerTitle'] = var5;
        var4 = function render(arg1, arg2) {
            var1 = arg2;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot15;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 22;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var5 = function onClose() {
                var2 = _closure3_slot0;
                var1 = var2.popToTop;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1['onClose'] = var5;
            var6 = arg1;
            var7 = var1;
            var5 = copyDataProperties(var7, var6);
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var2['render'] = var4;
        var1[var3] = var2;
        return var1;
    };
    var3['getAllAuthScreens'] = var8;
    var3['getNextAuthState'] = var7;
    var3['getPreviousAuthState'] = var6;
    var3['getPreviousRegistrationTransitionStep'] = var5;
    var5 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot18;
            var3 = undefined;
            var2 = arg1;
            var2 = var4.bind(var3)(var2);
            var4 = null;
            if(!(var4 == var2)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            return var3;
case 32:
            var1 = _closure1_slot10;
            var1 = var1.bind(var3)(var2);
            return var1;
        }
    };
    var3['getNextRegistrationTransitionStep'] = var5;
    var4 = function handleNextOrSubmitRegistration() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleNextOrSubmitRegistration'] = var4;
    var3['handleRegistrationSubmit'] = var2;
    return var1;
})();
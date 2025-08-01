// app/modules/auth/native/components/RegisterIdentity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function RegisterIdentityBase(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var19 = var2.inputMode;
            var _closure2_slot0 = var19;
            var3 = var2.setInputMode;
            var _closure2_slot1 = var3;
            var9 = var2.headerText;
            var12 = var2.controlComponent;
            var8 = var2.subheader;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var22 = function handleSubmit() {
                var1 = undefined;
                var4 = _closure2_slot10;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var2 = function _handleSubmit() {
                var4 = undefined;
                var1 = undefined;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 377; continue _fun0002 }
 10:
                            var3 = _closure1_slot9;
                            var5 = undefined;
                            var2 = {};
                            var2 = var3.bind(var5)(var2);
                            var4 = _closure2_slot9;
                            var2 = {};
                            var7 = _closure1_slot12;
                            var7 = var7.ACCOUNT_IDENTITY;
                            var2['step'] = var7;
                            var7 = _closure1_slot13;
                            var7 = var7.SUBMITTED;
                            var2['actionType'] = var7;
                            var2 = var4.bind(var5)(var2);
                            var4 = _closure2_slot0;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var2 = 16;
                            var2 = var8[var2];
                            var2 = var7.bind(var5)(var2);
                            var2 = var2.PhoneOrEmailSelectorForceMode;
                            var2 = var2.EMAIL;
                            if(!(var4 !== var2)) { _fun0002_ip = 192; continue _fun0002 }
 110: // try_start_0
                            var4 = _closure2_slot8;
                            var2 = true;
                            var2 = var4.bind(var5)(var2);
                            var4 = _closure2_slot6;
                            var2 = function() {
                                var3 = _closure2_slot1;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 16;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var4.bind(var1)(var2);
                                var2 = var2.PhoneOrEmailSelectorForceMode;
                                var2 = var2.EMAIL;
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = var4.bind(var5)(var2);
                            SaveGenerator(address=143);
 141:
                            return var2;
 143:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                            if(var4) { _fun0002_ip = 163; continue _fun0002 }
 149: // try_end0
                            var7 = _closure2_slot8;
                            var4 = false;
                            var4 = var7.bind(var5)(var4);
                            return var5;
 163:
                            var7 = _closure2_slot8;
                            var4 = false;
                            var4 = var7.bind(var5)(var4);
                            return var2;
 177: // catch_target0
                            CatchBlockStart(arg_register=1);
                            var7 = _closure2_slot8;
                            var4 = false;
                            var4 = var7.bind(var5)(var4);
                            throw var2;
 192:
                            var4 = _closure1_slot10;
                            var2 = {};
                            var7 = _closure2_slot4;
                            var2['email'] = var7;
                            var2['phoneToken'] = var5;
                            var2 = var4.bind(var5)(var2);
                            var2 = _closure2_slot7;
                            var8 = var2.bind(var5)();
                            var2 = null;
                            if(!(var2 == var8)) { _fun0002_ip = 300; continue _fun0002 }
 231:
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 14;
                            var2 = var7[var2];
                            var10 = var4.bind(var5)(var2);
                            var9 = var10.handleNextOrSubmitRegistration;
                            var2 = 10;
                            var2 = var7[var2];
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.AuthStates;
                            var7 = var2.REGISTER_IDENTITY;
                            var4 = _closure2_slot2;
                            var2 = _closure2_slot9;
                            var2 = var9.bind(var10)(var7, var4, var2);
                            var2 = undefined;
                            _fun0002_ip = 374; continue _fun0002;
 300:
                            var7 = _closure1_slot9;
                            var4 = {};
                            var4['email'] = var8;
                            var4 = var7.bind(var5)(var4);
                            var4 = _closure2_slot9;
                            var3 = {};
                            var7 = _closure1_slot12;
                            var7 = var7.ACCOUNT_IDENTITY;
                            var3['step'] = var7;
                            var6 = _closure1_slot13;
                            var6 = var6.INPUT_ERROR;
                            var3['actionType'] = var6;
                            var6 = ['email'];
                            var3['details'] = var6;
                            var3 = var4.bind(var5)(var3);
                            var2 = undefined;
 374:
                            return var2;
 377:
                            return var1;
                        }
                    };
                    return var1;
                };
                var4 = var3.bind(var4)(var2);
                _closure2_slot10 = var4;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var _closure2_slot10 = var2;
            var2 = _closure1_slot16;
            var17 = var2.bind(var4)();
            var26 = _closure1_slot0;
            var27 = _closure1_slot2;
            var2 = 8;
            var2 = var27[var2];
            var3 = var26.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            _closure2_slot2 = var2;
            var3 = _closure1_slot11;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.errors;
                return var1;
            };
            var5 = var3.bind(var4)(var2);
            var _closure2_slot3 = var5;
            var2 = 9;
            var2 = var27[var2];
            var7 = var26.bind(var4)(var2);
            var6 = var7.useIdentityRegistrationStep;
            var2 = 10;
            var3 = var27[var2];
            var3 = var26.bind(var4)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_IDENTITY;
            var6 = var6.bind(var7)(var3, var19);
            var25 = var6.loginEmail;
            _closure2_slot4 = var25;
            var20 = var6.setLoginEmail;
            var28 = var6.loginPhone;
            var24 = var6.updateLoginPhone;
            var3 = var6.identityErrorMessage;
            var _closure2_slot5 = var3;
            var7 = var6.registerAndVerifyPhone;
            _closure2_slot6 = var7;
            var21 = var6.preventSubmitIdentity;
            var18 = var6.identityError;
            var6 = var6.validateEmail;
            _closure2_slot7 = var6;
            var10 = _closure1_slot5;
            var7 = var10.useState;
            var6 = false;
            var10 = var7.bind(var10)(var6);
            var7 = _closure1_slot4;
            var6 = 2;
            var7 = var7.bind(var4)(var10, var6);
            var6 = 0;
            var23 = var7[var6];
            var6 = 1;
            var6 = var7[var6];
            _closure2_slot8 = var6;
            var10 = _closure1_slot5;
            var7 = var10.useContext;
            var6 = 11;
            var6 = var27[var6];
            var6 = var26.bind(var4)(var6);
            var6 = var6.TrackRegistrationContext;
            var6 = var7.bind(var10)(var6);
            _closure2_slot9 = var6;
            var7 = _closure1_slot5;
            var6 = var7.useMemo;
            var10 = var5.message;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot5;
                    var1 = null;
                    if(!(var1 == var3)) { _fun0003_ip = 24; continue _fun0003 }
 13:
                    var1 = _closure2_slot3;
                    var1 = var1.message;
                    _fun0003_ip = 28; continue _fun0003;
 24:
                    var1 = _closure2_slot5;
 28:
                    return var1;
                }
            };
            var16 = var6.bind(var7)(var3, var5);
            var6 = _closure1_slot1;
            var3 = 12;
            var3 = var27[var3];
            var5 = var6.bind(var4)(var3);
            var3 = var27[var2];
            var3 = var26.bind(var4)(var3);
            var3 = var3.AuthStates;
            var3 = var3.REGISTER_IDENTITY;
            var3 = var5.bind(var4)(var3);
            var3 = 13;
            var3 = var27[var3];
            var3 = var6.bind(var4)(var3);
            var5 = 14;
            var5 = var27[var5];
            var7 = var26.bind(var4)(var5);
            var5 = var7.getPreviousRegistrationTransitionStep;
            var2 = var27[var2];
            var2 = var26.bind(var4)(var2);
            var2 = var2.AuthStates;
            var2 = var2.REGISTER_IDENTITY;
            var2 = var5.bind(var7)(var2);
            var2 = var3.bind(var4)(var2);
            var2 = 15;
            var2 = var27[var2];
            var2 = var6.bind(var4)(var2);
            var1 = function() {
                var3 = _closure2_slot9;
                var2 = {};
                var4 = _closure1_slot12;
                var4 = var4.ACCOUNT_IDENTITY;
                var2['step'] = var4;
                var1 = _closure1_slot13;
                var1 = var1.VIEWED;
                var2['actionType'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var3 = _closure1_slot14;
            var1 = 17;
            var1 = var27[var1];
            var2 = var6.bind(var4)(var1);
            var1 = {};
            var5 = var17.page;
            var1['style'] = var5;
            var7 = _closure1_slot14;
            var5 = 18;
            var5 = var27[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['headerText'] = var9;
            var5['subHeader'] = var8;
            var10 = _closure1_slot15;
            var9 = _closure1_slot7;
            var8 = {};
            var11 = var17.container;
            var8['style'] = var11;
            var11 = var17.scrollContent;
            var8['contentContainerStyle'] = var11;
            var11 = 'handled';
            var8['keyboardShouldPersistTaps'] = var11;
            var11 = new Array(4);
            var11[0] = var12;
            var15 = _closure1_slot14;
            var12 = 19;
            var12 = var27[var12];
            var12 = var26.bind(var4)(var12);
            var14 = var12.RegisterPhoneOrEmailInput;
            var12 = {};
            var12['loginPhone'] = var28;
            var12['loginEmail'] = var25;
            var12['setLoginPhone'] = var24;
            var12['setLoginEmail'] = var20;
            var12['inputMode'] = var19;
            var12['onSubmit'] = var22;
            var12['inputError'] = var18;
            var18 = true;
            var12['autoFocus'] = var18;
            var12 = var15.bind(var4)(var14, var12);
            var11[1] = var12;
            var15 = _closure1_slot14;
            var14 = _closure1_slot6;
            var12 = {};
            var18 = var17.button;
            var12['style'] = var18;
            var20 = _closure1_slot14;
            var18 = 20;
            var18 = var27[var18];
            var18 = var26.bind(var4)(var18);
            var19 = var18.Button;
            var18 = {};
            var18['loading'] = var23;
            var23 = 'lg';
            var18['size'] = var23;
            var23 = 21;
            var24 = var27[var23];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var27[var23];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.PDTjLC;
            var23 = var24.bind(var25)(var23);
            var18['text'] = var23;
            var18['onPress'] = var22;
            var18['disabled'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var12['children'] = var18;
            var12 = var15.bind(var4)(var14, var12);
            var11[2] = var12;
            var15 = null;
            var14 = var15 != var16;
            var12 = null;
            if(!var14) { _fun0001_ip = 901; continue _fun0001 }
 845:
            var14 = '';
            var12 = null;
            if(!(var14 !== var16)) { _fun0001_ip = 901; continue _fun0001 }
 855:
            var15 = _closure1_slot14;
            var14 = _closure1_slot1;
            var18 = _closure1_slot2;
            var13 = 22;
            var13 = var18[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var17 = var17.errors;
            var13['style'] = var17;
            var13['children'] = var16;
            var12 = var15.bind(var4)(var14, var13);
 901:
            var11[3] = var12;
            var8['children'] = var11;
            var8 = var10.bind(var4)(var9, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function RegisterIdentityTabs() {
        var2 = _closure1_slot16;
        var4 = undefined;
        var12 = var2.bind(var4)();
        var5 = _closure1_slot5;
        var3 = var5.useState;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 16;
        var2 = var9[var2];
        var2 = var8.bind(var4)(var2);
        var2 = var2.PhoneOrEmailSelectorForceMode;
        var2 = var2.PHONE;
        var5 = var3.bind(var5)(var2);
        var3 = _closure1_slot4;
        var2 = 2;
        var3 = var3.bind(var4)(var5, var2);
        var2 = 0;
        var7 = var3[var2];
        var2 = 1;
        var2 = var3[var2];
        var _closure2_slot0 = var2;
        var5 = 21;
        var3 = var9[var5];
        var3 = var8.bind(var4)(var3);
        var10 = var3.intl;
        var6 = var10.string;
        var3 = var9[var5];
        var3 = var8.bind(var4)(var3);
        var3 = var3.t;
        var3 = var3.dEYpSk;
        var3 = var6.bind(var10)(var3);
        var14 = new Array(2);
        var14[0] = var3;
        var3 = var9[var5];
        var3 = var8.bind(var4)(var3);
        var10 = var3.intl;
        var6 = var10.string;
        var3 = var9[var5];
        var3 = var8.bind(var4)(var3);
        var3 = var3.t;
        var3 = var3.w/qqKC;
        var3 = var6.bind(var10)(var3);
        var14[1] = var3;
        var10 = _closure1_slot5;
        var6 = var10.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure1_slot8;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure2_slot0;
                var5 = 0;
                var2 = arg1;
                if(!(var5 !== var2)) { _fun0004_ip = 63; continue _fun0004 }
 29:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 16;
                var2 = var6[var2];
                var2 = var5.bind(var1)(var2);
                var2 = var2.PhoneOrEmailSelectorForceMode;
                var2 = var2.EMAIL;
                _fun0004_ip = 95; continue _fun0004;
 63:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 16;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var4 = var4.PhoneOrEmailSelectorForceMode;
                var2 = var4.PHONE;
 95:
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var10 = var6.bind(var10)(var2, var3);
        var2 = 23;
        var2 = var9[var2];
        var6 = var8.bind(var4)(var2);
        var3 = var6.useSegmentedControlState;
        var2 = {'pageWidth': 0, 'defaultIndex': 0};
        var2['onSetActiveIndex'] = var10;
        var13 = var14.map;
        var10 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var1['id'] = var2;
            var1['label'] = var2;
            var2 = null;
            var1['page'] = var2;
            return var1;
        };
        var10 = var13.bind(var14)(var10);
        var2['items'] = var10;
        var14 = var3.bind(var6)(var2);
        var _closure2_slot1 = var14;
        var6 = _closure1_slot5;
        var3 = var6.useCallback;
        var2 = new Array(1);
        var2[0] = var14;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var5 = _closure2_slot1;
                var4 = var5.setActiveIndex;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 16;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var2 = var2.PhoneOrEmailSelectorForceMode;
                var6 = var2.PHONE;
                var3 = 1;
                var2 = arg1;
                if(!(var2 === var6)) { _fun0005_ip = 62; continue _fun0005 }
 60:
                var3 = 0;
 62:
                var2 = false;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            }
        };
        var6 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot14;
        var2 = _closure1_slot17;
        var1 = {};
        var1['inputMode'] = var7;
        var1['setInputMode'] = var6;
        var10 = _closure1_slot14;
        var7 = _closure1_slot6;
        var6 = {};
        var12 = var12.segmentedControl;
        var6['style'] = var12;
        var13 = _closure1_slot14;
        var11 = 24;
        var11 = var9[var11];
        var11 = var8.bind(var4)(var11);
        var12 = var11.SegmentedControl;
        var11 = {};
        var11['state'] = var14;
        var14 = 'handled';
        var11['keyboardShouldPersistTaps'] = var14;
        var11 = var13.bind(var4)(var12, var11);
        var6['children'] = var11;
        var6 = var10.bind(var4)(var7, var6);
        var1['controlComponent'] = var6;
        var6 = var9[var5];
        var6 = var8.bind(var4)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.WEdDgo;
        var5 = var6.bind(var7)(var5);
        var1['headerText'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function RegisterIdentityToggle(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var4 = var2.initialMode;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var5 = var2.bind(var3)(var4);
            var3 = _closure1_slot4;
            var4 = undefined;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var9 = var3[var2];
            var _closure2_slot0 = var9;
            var2 = 1;
            var5 = var3[var2];
            var _closure2_slot1 = var5;
            var6 = _closure1_slot5;
            var3 = var6.useCallback;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = _closure1_slot8;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure2_slot1;
                    var5 = _closure2_slot0;
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 16;
                    var2 = var2[var6];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.PhoneOrEmailSelectorForceMode;
                    var2 = var2.PHONE;
                    if(!(var5 !== var2)) { _fun0007_ip = 91; continue _fun0007 }
 60:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.PhoneOrEmailSelectorForceMode;
                    var2 = var2.PHONE;
                    _fun0007_ip = 120; continue _fun0007;
 91:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.PhoneOrEmailSelectorForceMode;
                    var2 = var4.EMAIL;
 120:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot14;
            var2 = _closure1_slot17;
            var1 = {};
            var1['inputMode'] = var9;
            var1['setInputMode'] = var5;
            var7 = _closure1_slot14;
            var15 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 25;
            var5 = var14[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.PressableOpacity;
            var5 = {'onPress': null, 'accessibilityRole': 'button', 'hitSlop': 12};
            var5['onPress'] = var10;
            var13 = _closure1_slot14;
            var10 = 26;
            var10 = var14[var10];
            var10 = var15.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/medium', 'color': 'text-brand'};
            var12 = 16;
            var14 = var14[var12];
            var14 = var15.bind(var4)(var14);
            var14 = var14.PhoneOrEmailSelectorForceMode;
            var14 = var14.PHONE;
            if(!(var9 !== var14)) { _fun0006_ip = 284; continue _fun0006 }
 227:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 21;
            var15 = var18[var14];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.lnOfAg;
            var14 = var15.bind(var16)(var14);
            _fun0006_ip = 339; continue _fun0006;
 284:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 21;
            var16 = var19[var15];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.qLzvmp;
            var14 = var16.bind(var17)(var15);
 339:
            var10['children'] = var14;
            var10 = var13.bind(var4)(var11, var10);
            var5['children'] = var10;
            var5 = var7.bind(var4)(var6, var5);
            var1['subheader'] = var5;
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = 21;
            var6 = var5[var10];
            var6 = var11.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var5[var12];
            var5 = var11.bind(var4)(var5);
            var5 = var5.PhoneOrEmailSelectorForceMode;
            var5 = var5.PHONE;
            if(!(var9 !== var5)) { _fun0006_ip = 451; continue _fun0006 }
 419:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var10];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.ZLRYGR;
            _fun0006_ip = 481; continue _fun0006;
 451:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var8 = var9.bind(var4)(var8);
            var8 = var8.t;
            var5 = var8.j2MWLi;
 481:
            var5 = var6.bind(var7)(var5);
            var1['headerText'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
    var11 = 1;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
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
    var4 = var4.ScrollView;
    var _closure1_slot7 = var4;
    var10 = 4;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.clearRegistrationErrorMessage;
    var _closure1_slot8 = var7;
    var7 = var4.setRegistrationErrors;
    var _closure1_slot9 = var7;
    var7 = var4.updateRegistrationOptions;
    var _closure1_slot10 = var7;
    var4 = var4.useRegistrationUIStore;
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot12 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot13 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'marginTop': 24, 'flex': 1};
    var4['container'] = var9;
    var9 = {};
    var9['flex'] = var11;
    var4['page'] = var9;
    var9 = {'width': '100%', 'marginTop': 24};
    var4['button'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['errors'] = var9;
    var9 = {'paddingRight': 16, 'marginTop': 16};
    var4['marketingOptInCheckbox'] = var9;
    var9 = {'height': 45, 'marginBottom': 24};
    var4['segmentedControl'] = var9;
    var9 = {};
    var10 = 128;
    var9['paddingBottom'] = var10;
    var4['scrollContent'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/RegisterIdentity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function RegisterIdentity() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = _closure1_slot11;
            var4 = undefined;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.registrationVariant;
                return var1;
            };
            var2 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var6 = 27;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ExperimentVariants;
            var1 = var1.EMAIL_PHONE_TOGGLE;
            if(!(var1 !== var2)) { _fun0008_ip = 165; continue _fun0008 }
 59:
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var6];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ExperimentVariants;
            var1 = var1.EMAIL_PHONE_TOGGLE_EMAIL_FIRST;
            if(!(var1 !== var2)) { _fun0008_ip = 110; continue _fun0008 }
 92:
            var3 = _closure1_slot14;
            var2 = _closure1_slot18;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 110:
            var3 = _closure1_slot14;
            var2 = _closure1_slot19;
            var1 = {};
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 16;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.PhoneOrEmailSelectorForceMode;
            var6 = var6.EMAIL;
            var1['initialMode'] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 165:
            var3 = _closure1_slot14;
            var2 = _closure1_slot19;
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 16;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.PhoneOrEmailSelectorForceMode;
            var5 = var5.PHONE;
            var1['initialMode'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['RegisterIdentity'] = var2;
    return var1;
})();
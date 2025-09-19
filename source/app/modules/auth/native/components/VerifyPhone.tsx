// app/modules/auth/native/components/VerifyPhone.tsx
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
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.doesRegistrationHaveIdentityType;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.authStateToRegisterTransitionStep;
    var _closure1_slot7 = var7;
    var7 = var4.RegisterTransitionSteps;
    var _closure1_slot8 = var7;
    var4 = var4.RegistrationTransitionActionTypes;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Links;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/VerifyPhone.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VerifyPhone(arg1) {
        var1 = arg1;
        var14 = var1.title;
        var13 = var1.description;
        var19 = var1.phone;
        var _closure2_slot0 = var19;
        var18 = var1.onPhoneTokenReceived;
        var _closure2_slot1 = var18;
        var2 = var1.onClose;
        var _closure2_slot2 = var2;
        var16 = var1.onBail;
        var _closure2_slot3 = var16;
        var11 = var1.sourceState;
        var15 = _closure1_slot5;
        var2 = var15.useState;
        var7 = false;
        var2 = var2.bind(var15)(var7);
        var10 = _closure1_slot4;
        var4 = undefined;
        var9 = 2;
        var2 = var10.bind(var4)(var2, var9);
        var6 = 0;
        var5 = var2[var6];
        var8 = 1;
        var2 = var2[var8];
        var _closure2_slot4 = var2;
        var12 = var15.useState;
        var2 = null;
        var2 = var12.bind(var15)(var2);
        var2 = var10.bind(var4)(var2, var9);
        var12 = var2[var6];
        var2 = var2[var8];
        var _closure2_slot5 = var2;
        var2 = var15.useState;
        var2 = var2.bind(var15)(var7);
        var2 = var10.bind(var4)(var2, var9);
        var6 = var2[var6];
        var2 = var2[var8];
        var _closure2_slot6 = var2;
        var2 = var15.useRef;
        var2 = var2.bind(var15)(var7);
        var _closure2_slot7 = var2;
        var7 = var15.useContext;
        var9 = _closure1_slot0;
        var10 = _closure1_slot2;
        var2 = 7;
        var2 = var10[var2];
        var2 = var9.bind(var4)(var2);
        var2 = var2.TrackRegistrationContext;
        var17 = var7.bind(var15)(var2);
        var _closure2_slot8 = var17;
        var2 = _closure1_slot1;
        var7 = 8;
        var7 = var10[var7];
        var8 = var2.bind(var4)(var7);
        var7 = _closure1_slot7;
        var7 = var7.bind(var4)(var11);
        var7 = var8.bind(var4)(var7);
        var11 = var15.useEffect;
        var8 = new Array(1);
        var8[0] = var17;
        var7 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = undefined;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0001_ip = 60; continue _fun0001 }
 16:
                var3 = _closure2_slot8;
                var2 = {};
                var5 = _closure1_slot8;
                var5 = var5.PHONE_VERIFICATION;
                var2['step'] = var5;
                var4 = _closure1_slot9;
                var4 = var4.VIEWED;
                var2['actionType'] = var4;
                var2 = var3.bind(var1)(var2);
 60:
                return var1;
            }
        };
        var7 = var11.bind(var15)(var7, var8);
        var7 = 9;
        var7 = var10[var7];
        var8 = var2.bind(var4)(var7);
        var7 = function() {
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot2;
                    var1 = null;
                    var3 = var1 == var3;
                    var4 = undefined;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 38; continue _fun0002 }
 20:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot7;
                    var2 = var2.current;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var4)(var7);
        var11 = var15.useCallback;
        var7 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0003_ip = 367; continue _fun0003 }
 10:
                        var4 = arg1;
                        var2 = undefined;
                        var6 = undefined;
                        var7 = _closure2_slot4;
                        var9 = true;
                        var7 = var7.bind(var2)(var9);
 31: // try_start_0
                        var8 = _closure1_slot6;
                        var8 = var8.bind(var2)();
                        if(!var8) { _fun0003_ip = 86; continue _fun0003 }
 45:
                        var10 = _closure2_slot8;
                        var8 = {};
                        var11 = _closure1_slot8;
                        var11 = var11.PHONE_VERIFICATION;
                        var8['step'] = var11;
                        var11 = _closure1_slot9;
                        var11 = var11.SUBMITTED;
                        var8['actionType'] = var11;
                        var8 = var10.bind(var2)(var8);
 86:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 10;
                        var7 = var10[var7];
                        var11 = var8.bind(var2)(var7);
                        var10 = var11.verifyPhone;
                        var8 = _closure2_slot0;
                        var7 = var4;
                        var4 = false;
                        var4 = var10.bind(var11)(var8, var7, var4);
                        SaveGenerator(address=132);
 130:
                        return var4;
 132:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0003_ip = 168; continue _fun0003 }
 138:
                        var8 = var4.token;
                        var7 = _closure2_slot7;
                        var7['current'] = var9;
                        var7 = _closure2_slot1;
                        var7 = var7.bind(var2)(var8);
 163: // try_end0
                        _fun0003_ip = 364; continue _fun0003;
 168:
                        return var4;
 171: // catch_target0
                        CatchBlockStart(arg_register=4);
                        var7 = _closure2_slot4;
                        var4 = false;
                        var4 = var7.bind(var2)(var4);
                        var4 = _closure1_slot6;
                        var4 = var4.bind(var2)();
                        if(!var4) { _fun0003_ip = 252; continue _fun0003 }
 198:
                        var7 = _closure2_slot8;
                        var4 = {};
                        var8 = _closure1_slot8;
                        var8 = var8.PHONE_VERIFICATION;
                        var4['step'] = var8;
                        var8 = _closure1_slot9;
                        var8 = var8.RESPONSE_ERROR;
                        var4['actionType'] = var8;
                        var8 = ['code'];
                        var4['details'] = var8;
                        var4 = var7.bind(var2)(var4);
 252:
                        var4 = _closure2_slot5;
                        var7 = var5.body;
                        var6 = var7;
                        var5 = null;
                        var7 = var5 == var7;
                        var5 = undefined;
                        if(var7) { _fun0003_ip = 280; continue _fun0003 }
 275:
                        var5 = var6.message;
 280:
                        var3 = var5;
                        if(var5) { _fun0003_ip = 359; continue _fun0003 }
 286:
                        var6 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var5 = 11;
                        var7 = var10[var5];
                        var7 = var6.bind(var2)(var7);
                        var8 = var7.intl;
                        var7 = var8.format;
                        var5 = var10[var5];
                        var5 = var6.bind(var2)(var5);
                        var5 = var5.t;
                        var6 = var5.aTVNen;
                        var5 = {};
                        var9 = _closure1_slot10;
                        var9 = var9.STATUS;
                        var5['statusPageURL'] = var9;
                        var3 = var7.bind(var8)(var6, var5);
 359:
                        var3 = var4.bind(var2)(var3);
 364:
                        return var2;
 367:
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
        var8 = var7.bind(var4)();
        var7 = new Array(3);
        var7[0] = var19;
        var7[1] = var18;
        var7[2] = var17;
        var11 = var11.bind(var15)(var8, var7);
        var _closure2_slot9 = var11;
        var17 = var15.useCallback;
        var7 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 62; continue _fun0004 }
 7:
                        var5 = _closure2_slot6;
                        var3 = undefined;
                        var2 = true;
                        var2 = var5.bind(var3)(var2);
                        var5 = _closure2_slot9;
                        var2 = arg1;
                        var2 = var5.bind(var3)(var2);
                        SaveGenerator(address=39);
 37:
                        return var2;
 39:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                        if(var5) { _fun0004_ip = 59; continue _fun0004 }
 45:
                        var5 = _closure2_slot6;
                        var4 = false;
                        var4 = var5.bind(var3)(var4);
                        return var3;
 59:
                        return var2;
 62:
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
        var8 = var7.bind(var4)();
        var7 = new Array(1);
        var7[0] = var11;
        var8 = var17.bind(var15)(var8, var7);
        var7 = 12;
        var7 = var10[var7];
        var7 = var2.bind(var4)(var7);
        var7 = var7.bind(var4)(var8);
        var8 = var15.useMemo;
        var7 = new Array(1);
        var7[0] = var16;
        var3 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = _closure2_slot3;
                var1 = null;
                var2 = var1 != var2;
                if(!var2) { _fun0005_ip = 62; continue _fun0005 }
 16:
                var5 = _closure1_slot11;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = _closure2_slot3;
                var2['onBail'] = var6;
                var1 = var5.bind(var4)(var3, var2);
 62:
                return var1;
            }
        };
        var7 = var8.bind(var15)(var3, var7);
        var3 = _closure1_slot11;
        var8 = 14;
        var1 = var10[var8];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var1['title'] = var14;
        var1['description'] = var13;
        var1['error'] = var12;
        var1['onCodeEntered'] = var11;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.CodeType;
        var8 = var8.NUMERIC;
        var1['codeType'] = var8;
        var1['footer'] = var7;
        var1['disabled'] = var6;
        var1['loading'] = var5;
        var5 = true;
        var1['disableKeyboardAvoidingView'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
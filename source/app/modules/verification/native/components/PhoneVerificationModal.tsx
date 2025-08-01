// app/modules/verification/native/components/PhoneVerificationModal.tsx
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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerificationModalScenes;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PHONE_VERIFICATION_MODAL_KEY;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/verification/native/components/PhoneVerificationModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PhoneVerificationModal(arg1) {
        var13 = arg1;
        var4 = _closure1_slot6;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 12;
        var1 = var9[var1];
        var3 = undefined;
        var1 = var8.bind(var3)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var _closure2_slot0 = var13;
        var6 = {};
        var5 = _closure1_slot4;
        var10 = var5.ADD_PHONE;
        var7 = {};
        var12 = 5;
        var14 = var9[var12];
        var15 = var8.bind(var3)(var14);
        var14 = var15.getHeaderNoTitle;
        var14 = var14.bind(var15)();
        var7['headerTitle'] = var14;
        var14 = var9[var12];
        var15 = var8.bind(var3)(var14);
        var14 = var15.getHeaderCloseButton;
        var13 = var13.onClose;
        var13 = var14.bind(var15)(var13);
        var7['headerLeft'] = var13;
        var13 = function render(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var7 = arg1;
                var _closure3_slot0 = var7;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var4 = _closure1_slot6;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var11 = var1;
                var10 = var7;
                var6 = copyDataProperties(var11, var10);
                var6 = null;
                var9 = var6 == var7;
                var8 = undefined;
                if(var9) { _fun0001_ip = 74; continue _fun0001 }
 68:
                var8 = var7.reason;
 74:
                if(!(var6 == var8)) { _fun0001_ip = 91; continue _fun0001 }
 78:
                var7 = _closure2_slot0;
                var8 = var7.reason;
 91:
                var7 = 'reason';
                var1[var7] = var8;
                var8 = function onComplete(arg1) {
                    var4 = _closure3_slot1;
                    var3 = var4.push;
                    var1 = _closure1_slot4;
                    var2 = var1.VERIFY_PHONE;
                    var1 = {};
                    var5 = arg1;
                    var1['phone'] = var5;
                    var5 = function onVerified(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var4 = _closure3_slot1;
                        var3 = var4.push;
                        var1 = _closure1_slot4;
                        var2 = var1.VERIFY_PASSWORD;
                        var1 = {};
                        var6 = true;
                        var1['hideUnverifiedBanner'] = var6;
                        var6 = function onSubmit(arg1) {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 7;
                                var1 = var2[var1];
                                var2 = undefined;
                                var5 = var3.bind(var2)(var1);
                                var4 = var5.addPhone;
                                var3 = _closure5_slot0;
                                var7 = _closure3_slot0;
                                var1 = null;
                                var7 = var1 == var7;
                                if(var7) { _fun0002_ip = 64; continue _fun0002 }
 54:
                                var6 = _closure3_slot0;
                                var2 = var6.reason;
 64:
                                if(!(var1 == var2)) { _fun0002_ip = 81; continue _fun0002 }
 68:
                                var1 = _closure2_slot0;
                                var2 = var1.reason;
 81:
                                var1 = arg1;
                                var1 = var4.bind(var5)(var3, var1, var2);
                                return var1;
                            }
                        };
                        var1['onSubmit'] = var6;
                        var5 = function onSuccess() {
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 8;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.popWithKey;
                            var2 = _closure1_slot5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var1['onSuccess'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var1['onVerified'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var7 = 'onComplete';
                var1[var7] = var8;
                var7 = _closure2_slot0;
                var7 = var7.allowDeletePhone;
                var6 = null;
                if(!var7) { _fun0001_ip = 137; continue _fun0001 }
 132:
                var6 = function() {
                    var4 = _closure3_slot1;
                    var3 = var4.push;
                    var1 = _closure1_slot4;
                    var2 = var1.VERIFY_PASSWORD;
                    var1 = {};
                    var6 = true;
                    var1['hideUnverifiedBanner'] = var6;
                    var6 = function onSubmit(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.removePhone;
                            var6 = _closure3_slot0;
                            var1 = null;
                            var6 = var1 == var6;
                            if(var6) { _fun0003_ip = 57; continue _fun0003 }
 47:
                            var5 = _closure3_slot0;
                            var2 = var5.reason;
 57:
                            if(!(var1 == var2)) { _fun0003_ip = 74; continue _fun0003 }
 61:
                            var1 = _closure2_slot0;
                            var2 = var1.reason;
 74:
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        }
                    };
                    var1['onSubmit'] = var6;
                    var5 = function onSuccess() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 8;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.pop;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    var1['onSuccess'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
 137:
                var5 = 'onDeletePhone';
                var1[var5] = var6;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            }
        };
        var7['render'] = var13;
        var6[var10] = var7;
        var10 = var5.VERIFY_PHONE;
        var7 = {};
        var13 = var9[var12];
        var14 = var8.bind(var3)(var13);
        var13 = var14.getHeaderNoTitle;
        var13 = var13.bind(var14)();
        var7['headerTitle'] = var13;
        var13 = 9;
        var13 = var9[var13];
        var13 = var8.bind(var3)(var13);
        var13 = var13.ImpressionNames;
        var13 = var13.USER_VERIFY_PHONE;
        var7['impressionName'] = var13;
        var13 = function render(arg1, arg2) {
            var1 = arg2;
            var _closure3_slot0 = var1;
            var4 = _closure1_slot6;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var1 = {};
            var8 = arg1;
            var9 = var1;
            var6 = copyDataProperties(var9, var8);
            var7 = true;
            var6 = 'disableKeyboardAvoidingView';
            var1[var6] = var7;
            var6 = function onVerified(arg1) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var5 = _closure3_slot0;
                var4 = var5.push;
                var2 = _closure1_slot4;
                var3 = var2.VERIFY_PASSWORD;
                var2 = {};
                var7 = true;
                var2['hideUnverifiedBanner'] = var7;
                var8 = _closure1_slot3;
                var1 = undefined;
                var7 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 92; continue _fun0004 }
 7:
                            var2 = arg1;
 10: // try_start_0
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var3 = 7;
                            var4 = var4[var3];
                            var3 = undefined;
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.addPhone;
                            var4 = _closure4_slot0;
                            var3 = var2;
                            var2 = _closure2_slot0;
                            var2 = var2.reason;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            SaveGenerator(address=75);
 73:
                            return var2;
 75:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0004_ip = 84; continue _fun0004 }
 81: // try_end0
                            return var2;
 84:
                            return var2;
 87: // catch_target0
                            CatchBlockStart(arg_register=1);
                            return var2;
 92:
                            return var1;
                        }
                    };
                    return var1;
                };
                var7 = var8.bind(var1)(var7);
                var _closure4_slot1 = var7;
                var7 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot1;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var2['onSubmit'] = var7;
                var6 = function onSuccess() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 8;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.popWithKey;
                    var2 = _closure1_slot5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2['onSuccess'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5 = 'onVerified';
            var1[var5] = var6;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        };
        var7['render'] = var13;
        var6[var10] = var7;
        var10 = var5.VERIFY_PASSWORD;
        var7 = {};
        var12 = var9[var12];
        var13 = var8.bind(var3)(var12);
        var12 = var13.getHeaderNoTitle;
        var12 = var12.bind(var13)();
        var7['headerTitle'] = var12;
        var11 = function render(arg1) {
            var4 = _closure1_slot6;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 11;
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
        var7['render'] = var11;
        var6[var10] = var7;
        var1['screens'] = var6;
        var5 = var5.ADD_PHONE;
        var1['initialRouteName'] = var5;
        var5 = 13;
        var6 = var9[var5];
        var6 = var8.bind(var3)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var5 = var9[var5];
        var5 = var8.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5.13/7kZ;
        var5 = var6.bind(var7)(var5);
        var1['headerBackTitle'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
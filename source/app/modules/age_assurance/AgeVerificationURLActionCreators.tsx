// app/modules/age_assurance/AgeVerificationURLActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function _initiateVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 3;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot5;
                    var5 = var5.VERIFY_AGE;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['method'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=88);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var2.body;
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot6 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _getAgeVerificationMethods() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 4;
                    var5 = var7[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var9 = 'AGE_VERIFICATION_METHODS_LOAD_START';
                    var5['type'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var6 = _closure1_slot0;
                    var5 = 5;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.isCurrentUserSuspended;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 5:
                    var5 = _closure1_slot8;
                    var6 = var5.bind(var2)();
                    _fun0002_ip = 11; continue _fun0002;
case 10:
                    var4 = _closure1_slot9;
                    var6 = var4.bind(var2)();
case 11:
                    var4 = null;
                    var4 = var4 == var6;
                    var2 = undefined;
                    if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'AGE_VERIFICATION_METHODS_LOAD_SUCCESS';
                        var2['type'] = var5;
                        var5 = arg1;
                        var5 = var5.body;
                        var5 = var5.methods;
                        var2['methods'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var3 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'AGE_VERIFICATION_METHODS_LOAD_FAILURE';
                        var2['type'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2 = var4.bind(var5)(var3);
case 12:
                    SaveGenerator(address=152);
case 14:
                    return var2;
case 15:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    return var2;
case 16:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function fetchAgeVerificationMethods() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var4 = _closure1_slot5;
        var4 = var4.AGE_VERIFICATION_METHODS;
        var1['url'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var4;
    var2 = function fetchAgeVerificationMethodsSuspendedUser() {
        var2 = _closure1_slot4;
        var1 = var2.getSuspendedUserToken;
        var5 = var1.bind(var2)();
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot5;
        var4 = var4.SAFETY_HUB_GET_SUSPENDED_AGE_VERIFICATION_METHODS;
        var1['url'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var4 = {};
        var4['token'] = var5;
        var1['body'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot9 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot5 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/age_assurance/AgeVerificationURLActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function initiateVerification() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['initiateVerification'] = var6;
    var5 = function getAgeVerificationMethods() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getAgeVerificationMethods'] = var5;
    var3['fetchAgeVerificationMethods'] = var4;
    var3['fetchAgeVerificationMethodsSuspendedUser'] = var2;
    return var1;
})();
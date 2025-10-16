// app/modules/age_assurance/AgeVerificationURLActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var1 = function _requestAgeVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = var2.method;
                    var8 = var2.classificationId;
                    var6 = undefined;
                    SaveGenerator(address=31);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var4 = 3;
                    var4 = var9[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.isCurrentUserSuspended;
                    var4 = var4.bind(var5)();
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot7;
                    var5 = var4.bind(var6)(var7);
                    SaveGenerator(address=86);
case 10:
                    return var5;
case 11:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=3);
                    var9 = var4;
                    var4 = var5;
                    if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    return var5;
case 8:
                    var5 = _closure1_slot9;
                    var3 = {};
                    var3['classificationId'] = var8;
                    var3['method'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=126);
case 14:
                    return var3;
case 15:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    var4 = var3;
                    if(var5) { _fun0001_ip = 16; continue _fun0001 }
case 12:
                    return var4;
case 16:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
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
    var7 = function initiateAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var7;
    var1 = function _initiateAgeVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 4;
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
case 11:
                    return var2;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var3 = var2.body;
                    return var3;
case 20:
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var6 = function initiateSuspendedUserAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var6;
    var1 = function _initiateSuspendedUserAgeVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 22; continue _fun0003 }
case 3:
                    var8 = var2.classificationId;
                    var7 = var2.method;
                    var5 = undefined;
                    SaveGenerator(address=31);
case 4:
                    return var5;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 23; continue _fun0003 }
case 7:
                    var4 = _closure1_slot4;
                    var3 = var4.getSuspendedUserToken;
                    var9 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 4;
                    var3 = var10[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var6 = _closure1_slot5;
                    var6 = var6.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
                    var3['url'] = var6;
                    var6 = {};
                    var6['token'] = var9;
                    var6['from_classification_id'] = var8;
                    var6['method'] = var7;
                    var3['body'] = var6;
                    var6 = true;
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=137);
case 12:
                    return var3;
case 24:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 25; continue _fun0003 }
case 26:
                    var4 = var3.body;
                    return var4;
case 25:
                    return var3;
case 23:
                    return var2;
case 22:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _getAgeVerificationMethods() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 5;
                    var5 = var7[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var9 = 'AGE_VERIFICATION_METHODS_LOAD_START';
                    var5['type'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var6 = _closure1_slot0;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.isCurrentUserSuspended;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0004_ip = 13; continue _fun0004 }
case 19:
                    var5 = _closure1_slot12;
                    var6 = var5.bind(var2)();
                    _fun0004_ip = 29; continue _fun0004;
case 13:
                    var4 = _closure1_slot13;
                    var6 = var4.bind(var2)();
case 29:
                    var4 = null;
                    var4 = var4 == var6;
                    var2 = undefined;
                    if(var4) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
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
                        var1 = 5;
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
case 30:
                    SaveGenerator(address=152);
case 32:
                    return var2;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    return var2;
case 34:
                    return var2;
case 27:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var4 = function fetchAgeVerificationMethods() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
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
    var _closure1_slot12 = var4;
    var2 = function fetchAgeVerificationMethodsSuspendedUser() {
        var2 = _closure1_slot4;
        var1 = var2.getSuspendedUserToken;
        var5 = var1.bind(var2)();
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
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
    var _closure1_slot13 = var2;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.Endpoints;
    var _closure1_slot5 = var8;
    var8 = 6;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/age_assurance/AgeVerificationURLActionCreators.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function requestAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestAgeVerification'] = var8;
    var3['initiateAgeVerification'] = var7;
    var3['initiateSuspendedUserAgeVerification'] = var6;
    var5 = function getAgeVerificationMethods() {
        var1 = undefined;
        var4 = _closure1_slot11;
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
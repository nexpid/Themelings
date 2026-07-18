// app/modules/age_assurance/AgeVerificationURLActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
    var8 = function requestAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var8;
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
                    var5 = var2.vendor;
                    var6 = undefined;
                    SaveGenerator(address=37);
case 4:
                    return var6;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 4;
                    var4 = var10[var4];
                    var9 = var9.bind(var6)(var4);
                    var4 = var9.isCurrentUserSuspended;
                    var4 = var4.bind(var9)();
                    if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var4 = _closure1_slot10;
                    var5 = var4.bind(var6)(var7, var5);
                    SaveGenerator(address=93);
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
                    var5 = _closure1_slot12;
                    var3 = {};
                    var3['classificationId'] = var8;
                    var3['method'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=133);
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
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function _requestIncodeMethodSession() {
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
                    var4 = _closure1_slot7;
                    var3 = {};
                    var5 = arg1;
                    var3['method'] = var5;
                    var2 = _closure1_slot5;
                    var2 = var2.INCODE;
                    var3['vendor'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    SaveGenerator(address=53);
case 19:
                    return var2;
case 20:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var3 = var2.incode_parameters;
                    var9 = null;
                    if(!(var9 == var3)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                    var3 = {};
case 23:
                    var8 = var3.api_url;
                    var7 = var3.session_token;
                    var6 = var3.consent_id;
                    var5 = var3.interview_id;
                    var4 = var9 == var8;
                    var3 = null;
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 26:
                    var4 = var9 == var7;
                    var3 = null;
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 27:
                    var4 = var9 == var6;
                    var3 = null;
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 28:
                    var4 = var9 == var5;
                    var3 = null;
                    if(var4) { _fun0002_ip = 25; continue _fun0002 }
case 29:
                    var4 = {};
                    var4['apiUrl'] = var8;
                    var4['sessionToken'] = var7;
                    var4['consentId'] = var6;
                    var4['interviewId'] = var5;
                    var3 = var4;
case 25:
                    return var3;
case 21:
                    return var2;
case 17:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var7 = function initiateAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var7;
    var1 = function _initiateAgeVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 30; continue _fun0003 }
case 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var5 = _closure1_slot6;
                    var5 = var5.VERIFY_AGE;
                    var2['url'] = var5;
                    var5 = {};
                    var6 = arg1;
                    var5['method'] = var6;
                    var6 = arg2;
                    var5['vendor'] = var6;
                    var2['body'] = var5;
                    var5 = true;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=96);
case 32:
                    return var2;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0003_ip = 26; continue _fun0003 }
case 34:
                    var3 = var2.body;
                    return var3;
case 26:
                    return var2;
case 30:
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
    var6 = function initiateSuspendedUserAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var6;
    var1 = function _initiateSuspendedUserAgeVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 35; continue _fun0004 }
case 3:
                    var8 = var2.classificationId;
                    var7 = var2.method;
                    var5 = undefined;
                    SaveGenerator(address=31);
case 36:
                    return var5;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 38; continue _fun0004 }
case 5:
                    var4 = _closure1_slot4;
                    var3 = var4.getSuspendedUserToken;
                    var9 = var3.bind(var4)();
                    var4 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var3 = 5;
                    var3 = var10[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var6 = _closure1_slot6;
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
case 39:
                    return var3;
case 29:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 2; continue _fun0004 }
case 40:
                    var4 = var3.body;
                    return var4;
case 2:
                    return var3;
case 38:
                    return var2;
case 35:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _registerIncodeInterview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 41; continue _fun0005 }
case 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 5;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var6 = _closure1_slot6;
                    var6 = var6.REGISTER_INCODE_INTERVIEW;
                    var2['url'] = var6;
                    var6 = {};
                    var7 = arg1;
                    var6['interview_id'] = var7;
                    var2['body'] = var6;
                    var6 = true;
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=88);
case 42:
                    return var2;
case 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 44; continue _fun0005 }
case 32:
                    return var3;
case 44:
                    return var2;
case 41:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _requestIncodeSessionBootstrap() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    var8 = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 45; continue _fun0006 }
case 3:
                    var6 = undefined;
                    if(!(var8 === var6)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var8 = {};
case 46:
                    SaveGenerator(address=25);
case 48:
                    return var6;
case 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 50; continue _fun0006 }
case 37:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var3 = var5[var3];
                    var3 = var4.bind(var6)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.post;
                    var3 = {};
                    var7 = _closure1_slot6;
                    var7 = var7.CREATE_INCODE_SESSION;
                    var3['url'] = var7;
                    var9 = var8.previousInterviewId;
                    var7 = null;
                    var7 = var7 != var9;
                    var6 = undefined;
                    if(!var7) { _fun0006_ip = 51; continue _fun0006 }
case 52:
                    var7 = {};
                    var8 = var8.previousInterviewId;
                    var7['previous_interview_id'] = var8;
                    var6 = var7;
case 51:
                    var3['body'] = var6;
                    var6 = true;
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=135);
case 15:
                    return var3;
case 39:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 53; continue _fun0006 }
case 54:
                    var4 = var3.body;
                    return var4;
case 53:
                    return var3;
case 50:
                    return var2;
case 45:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _getAgeVerificationMethods() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var2 = 6;
                    var5 = var7[var2];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var5);
                    var6 = var8.dispatch;
                    var5 = {};
                    var9 = 'AGE_VERIFICATION_METHODS_LOAD_START';
                    var5['type'] = var9;
                    var5 = var6.bind(var8)(var5);
                    var6 = _closure1_slot0;
                    var5 = 4;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.isCurrentUserSuspended;
                    var5 = var5.bind(var6)();
                    if(var5) { _fun0007_ip = 52; continue _fun0007 }
case 43:
                    var5 = _closure1_slot17;
                    var6 = var5.bind(var2)();
                    _fun0007_ip = 57; continue _fun0007;
case 52:
                    var4 = _closure1_slot18;
                    var6 = var4.bind(var2)();
case 57:
                    var4 = null;
                    var4 = var4 == var6;
                    var2 = undefined;
                    if(var4) { _fun0007_ip = 6; continue _fun0007 }
case 58:
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 6;
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
                        var1 = 6;
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
case 6:
                    SaveGenerator(address=152);
case 59:
                    return var2;
case 50:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 60; continue _fun0007 }
case 61:
                    return var2;
case 60:
                    return var2;
case 55:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var4 = function fetchAgeVerificationMethods() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.get;
        var1 = {};
        var4 = _closure1_slot6;
        var4 = var4.AGE_VERIFICATION_METHODS;
        var1['url'] = var4;
        var4 = true;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot17 = var4;
    var2 = function fetchAgeVerificationMethodsSuspendedUser() {
        var2 = _closure1_slot4;
        var1 = var2.getSuspendedUserToken;
        var5 = var1.bind(var2)();
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var4 = _closure1_slot6;
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
    var _closure1_slot18 = var2;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.VerificationVendorName;
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.Endpoints;
    var _closure1_slot6 = var9;
    var9 = 7;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/age_assurance/AgeVerificationURLActionCreators.tsx';
    var9 = var10.bind(var11)(var9);
    var3['requestAgeVerification'] = var8;
    var8 = function requestIncodeMethodSession() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestIncodeMethodSession'] = var8;
    var3['initiateAgeVerification'] = var7;
    var3['initiateSuspendedUserAgeVerification'] = var6;
    var6 = function registerIncodeInterview() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['registerIncodeInterview'] = var6;
    var6 = function requestIncodeSessionBootstrap() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestIncodeSessionBootstrap'] = var6;
    var5 = function getAgeVerificationMethods() {
        var1 = undefined;
        var4 = _closure1_slot16;
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
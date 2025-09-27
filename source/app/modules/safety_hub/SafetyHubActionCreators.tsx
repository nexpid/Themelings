// app/modules/safety_hub/SafetyHubActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _getSafetyHubData() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 264; continue _fun0001 }
 12:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var8 = 'SAFETY_HUB_FETCH_START';
                    var5['type'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var6 = _closure1_slot4;
                    var5 = var6.getSuspendedUserToken;
                    var9 = var5.bind(var6)();
                    var5 = null;
                    if(!(var5 == var9)) { _fun0001_ip = 91; continue _fun0001 }
 79:
                    var6 = _closure1_slot8;
                    var8 = var6.SAFETY_HUB;
                    _fun0001_ip = 101; continue _fun0001;
 91:
                    var6 = _closure1_slot8;
                    var8 = var6.SAFETY_HUB_SUSPENDED;
 101:
                    if(!(var5 == var9)) { _fun0001_ip = 154; continue _fun0001 }
 105:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.get;
                    var5 = {};
                    var5['url'] = var8;
                    var10 = false;
                    var5['rejectWithError'] = var10;
                    var6 = var6.bind(var7)(var5);
                    _fun0001_ip = 213; continue _fun0001;
 154:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var5.bind(var3)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.post;
                    var4 = {};
                    var4['url'] = var8;
                    var8 = {};
                    var8['token'] = var9;
                    var4['body'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var6 = var5.bind(var7)(var4);
 213:
                    var5 = var6.then;
                    var4 = function(arg1) {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.body;
                            var3 = var1.classifications;
                            var13 = var1.guild_classifications;
                            var10 = var1.account_standing;
                            var9 = var1.is_dsa_eligible;
                            var8 = var1.username;
                            var7 = var1.is_appeal_eligible;
                            var5 = var1.appeal_eligibility;
                            var2 = var3.map;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var3 = _closure1_slot11;
                                var2 = undefined;
                                var2 = var3.bind(var2)(var1);
                                return var1;
                            };
                            var12 = var2.bind(var3)(var1);
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'SAFETY_HUB_FETCH_SUCCESS';
                            var2['type'] = var6;
                            var11 = var12.concat;
                            var6 = null;
                            if(!(var6 == var13)) { _fun0002_ip = 129; continue _fun0002 }
 125:
                            var13 = new Array(0);
 129:
                            var11 = var11.bind(var12)(var13);
                            var2['classifications'] = var11;
                            var2['accountStanding'] = var10;
                            var2['isDsaEligible'] = var9;
                            var2['username'] = var8;
                            var2['isAppealEligible'] = var7;
                            if(!(var6 == var5)) { _fun0002_ip = 166; continue _fun0002 }
 162:
                            var5 = new Array(0);
 166:
                            var2['appealEligibility'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var2 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                            var7 = arg1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'SAFETY_HUB_FETCH_FAILURE';
                            var2['type'] = var5;
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0003_ip = 75; continue _fun0003 }
 56:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0003_ip = 75; continue _fun0003 }
 70:
                            var6 = var7.message;
 75:
                            var7 = var5 != var6;
                            var5 = 'Unknown error';
                            if(!var7) { _fun0003_ip = 91; continue _fun0003 }
 88:
                            var5 = var6;
 91:
                            var2['error'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=252);
 250:
                    return var2;
 252:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 261; continue _fun0001 }
 258:
                    return var3;
 261:
                    return var2;
 264:
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
    var1 = function _getSafetyHubDataForClassification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 276; continue _fun0004 }
 15:
                    var _closure4_slot0 = var8;
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var5 = var5[var3];
                    var3 = undefined;
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.dispatch;
                    var5 = {};
                    var9 = 'SAFETY_HUB_FETCH_CLASSIFICATION_START';
                    var5['type'] = var9;
                    var5['classificationId'] = var8;
                    var5 = var6.bind(var7)(var5);
                    var6 = _closure1_slot4;
                    var5 = var6.getSuspendedUserToken;
                    var9 = var5.bind(var6)();
                    var5 = null;
                    if(!(var5 == var9)) { _fun0004_ip = 103; continue _fun0004 }
 91:
                    var6 = _closure1_slot8;
                    var8 = var6.SAFETY_HUB;
                    _fun0004_ip = 113; continue _fun0004;
 103:
                    var6 = _closure1_slot8;
                    var8 = var6.SAFETY_HUB_SUSPENDED;
 113:
                    if(!(var5 == var9)) { _fun0004_ip = 166; continue _fun0004 }
 117:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 6;
                    var5 = var7[var5];
                    var5 = var6.bind(var3)(var5);
                    var7 = var5.HTTP;
                    var6 = var7.get;
                    var5 = {};
                    var5['url'] = var8;
                    var10 = false;
                    var5['rejectWithError'] = var10;
                    var6 = var6.bind(var7)(var5);
                    _fun0004_ip = 225; continue _fun0004;
 166:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 6;
                    var4 = var7[var4];
                    var4 = var5.bind(var3)(var4);
                    var7 = var4.HTTP;
                    var5 = var7.post;
                    var4 = {};
                    var4['url'] = var8;
                    var8 = {};
                    var8['token'] = var9;
                    var4['body'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var6 = var5.bind(var7)(var4);
 225:
                    var5 = var6.then;
                    var4 = function(arg1) {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.body;
                            var3 = var1.classifications;
                            var7 = var1.account_standing;
                            var6 = var1.is_dsa_eligible;
                            var5 = var1.username;
                            var4 = var1.is_appeal_eligible;
                            var2 = var3.find;
                            var1 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var8 = var2.bind(var3)(var1);
                            var1 = null;
                            if(!(var1 == var8)) { _fun0005_ip = 126; continue _fun0005 }
 63:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.dispatch;
                            var1 = {'type': 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE', 'error': 'Classification not found.'};
                            var9 = _closure4_slot0;
                            var1['classificationId'] = var9;
                            var1 = var2.bind(var3)(var1);
                            _fun0005_ip = 206; continue _fun0005;
 126:
                            var2 = _closure1_slot11;
                            var3 = undefined;
                            var2 = var2.bind(var3)(var8);
                            var2 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var1 = 5;
                            var1 = var9[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var9 = 'SAFETY_HUB_FETCH_CLASSIFICATION_SUCCESS';
                            var1['type'] = var9;
                            var1['classification'] = var8;
                            var1['accountStanding'] = var7;
                            var1['isDsaEligible'] = var6;
                            var1['username'] = var5;
                            var1['isAppealEligible'] = var4;
                            var1 = var2.bind(var3)(var1);
 206:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var7 = arg1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'SAFETY_HUB_FETCH_CLASSIFICATION_FAILURE';
                            var2['type'] = var5;
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0006_ip = 75; continue _fun0006 }
 56:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0006_ip = 75; continue _fun0006 }
 70:
                            var6 = var7.message;
 75:
                            var7 = var5 != var6;
                            var5 = 'Unknown error';
                            if(!var7) { _fun0006_ip = 91; continue _fun0006 }
 88:
                            var5 = var6;
 91:
                            var2['error'] = var5;
                            var5 = _closure4_slot0;
                            var2['classificationId'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=264);
 262:
                    return var2;
 264:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 273; continue _fun0004 }
 270:
                    return var3;
 273:
                    return var2;
 276:
                    return var1;
                }
            };
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
    var1 = function _setClassificationFlaggedContent(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var3 = var2.flagged_content;
            var1 = null;
            if(!(var1 != var3)) { _fun0007_ip = 132; continue _fun0007 }
 15:
            var1 = var2.flagged_content;
            var1 = var1.length;
            var3 = 0;
            if(!(var1 > var3)) { _fun0007_ip = 132; continue _fun0007 }
 32:
            var1 = var2.flagged_content;
            var3 = var1[var3];
            var5 = var3.attachments;
            var4 = var5.filter;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = arg1;
                    var4 = var1.filename;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 7;
                    var1 = var1[var6];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var1);
                    var1 = var3.isImageFile;
                    var1 = var1.bind(var3)(var4);
                    if(var1) { _fun0008_ip = 76; continue _fun0008 }
 48:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.isVideoFile;
                    var1 = var2.bind(var3)(var4);
 76:
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var1);
            var3['attachments'] = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.isFlaggedContentEmpty;
            var1 = var1.bind(var4)(var3);
            if(var1) { _fun0007_ip = 122; continue _fun0007 }
 112:
            var1 = new Array(1);
            var1[0] = var3;
            _fun0007_ip = 126; continue _fun0007;
 122:
            var1 = new Array(0);
 126:
            var2['flagged_content'] = var1;
 132:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _requestReview() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    var7 = arg1;
                    var11 = arg2;
                    var10 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 318; continue _fun0009 }
 21:
                    var _closure4_slot0 = var7;
                    var5 = _closure1_slot4;
                    var4 = var5.getSuspendedUserToken;
                    var9 = var4.bind(var5)();
                    var4 = null;
                    if(!(var4 == var9)) { _fun0009_ip = 65; continue _fun0009 }
 48:
                    var6 = _closure1_slot8;
                    var5 = var6.SAFETY_HUB_REQUEST_REVIEW;
                    var8 = var5.bind(var6)(var7);
                    _fun0009_ip = 80; continue _fun0009;
 65:
                    var6 = _closure1_slot8;
                    var5 = var6.SAFETY_HUB_REQUEST_SUSPENDED_USER_REVIEW;
                    var8 = var5.bind(var6)(var7);
 80:
                    if(!(var4 == var9)) { _fun0009_ip = 152; continue _fun0009 }
 84:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 6;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var6.bind(var4)(var5);
                    var6 = var4.HTTP;
                    var5 = var6.put;
                    var4 = {};
                    var4['url'] = var8;
                    var7 = {};
                    var7['signal'] = var11;
                    var7['user_input'] = var10;
                    var4['body'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var6 = var5.bind(var6)(var4);
                    _fun0009_ip = 223; continue _fun0009;
 152:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 6;
                    var5 = var5[var4];
                    var4 = undefined;
                    var4 = var7.bind(var4)(var5);
                    var7 = var4.HTTP;
                    var5 = var7.put;
                    var4 = {};
                    var4['url'] = var8;
                    var8 = {};
                    var8['signal'] = var11;
                    var8['user_input'] = var10;
                    var8['token'] = var9;
                    var4['body'] = var8;
                    var8 = false;
                    var4['rejectWithError'] = var8;
                    var6 = var5.bind(var7)(var4);
 223:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 5;
                    var4 = var4[var3];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var4);
                    var5 = var7.dispatch;
                    var4 = {};
                    var8 = 'SAFETY_HUB_REQUEST_REVIEW_START';
                    var4['type'] = var8;
                    var4 = var5.bind(var7)(var4);
                    var5 = var6.then;
                    var4 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'SAFETY_HUB_REQUEST_REVIEW_SUCCESS';
                        var2['type'] = var5;
                        var5 = _closure4_slot0;
                        var2['classificationId'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var2 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 5;
                            var2 = var4[var2];
                            var9 = undefined;
                            var4 = var3.bind(var9)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'SAFETY_HUB_REQUEST_REVIEW_FAILURE';
                            var2['type'] = var5;
                            var5 = null;
                            var7 = var5 == var1;
                            var6 = undefined;
                            if(var7) { _fun0010_ip = 75; continue _fun0010 }
 56:
                            var7 = var1.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0010_ip = 75; continue _fun0010 }
 70:
                            var6 = var7.message;
 75:
                            var7 = var5 != var6;
                            var5 = 'Unknown error';
                            if(!var7) { _fun0010_ip = 91; continue _fun0010 }
 88:
                            var5 = var6;
 91:
                            var2['error'] = var5;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=306);
 304:
                    return var2;
 306:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 315; continue _fun0009 }
 312:
                    return var3;
 315:
                    return var2;
 318:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _requestSuspendedUserAgeVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 199; continue _fun0011 }
 12:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 5;
                    var5 = var6[var3];
                    var3 = undefined;
                    var8 = var7.bind(var3)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var9 = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_START';
                    var5['type'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var7 = _closure1_slot4;
                    var5 = var7.getSuspendedUserToken;
                    var8 = var5.bind(var7)();
                    var5 = _closure1_slot8;
                    var7 = var5.SAFETY_HUB_REQUEST_SUSPENDED_AGE_VERIFICATION;
                    var5 = _closure1_slot0;
                    var4 = 6;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var4['url'] = var7;
                    var7 = {};
                    var7['token'] = var8;
                    var8 = arg1;
                    var7['from_classification_id'] = var8;
                    var4['body'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.body;
                        var6 = var1.verification_request_id;
                        var5 = var1.verification_webview_url;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 5;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                        var2['type'] = var7;
                        var2['verificationRequestId'] = var6;
                        var2['verificationWebviewUrl'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var2 = function(arg1) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var7 = arg1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'SAFETY_HUB_REQUEST_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                            var2['type'] = var5;
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0012_ip = 75; continue _fun0012 }
 56:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0012_ip = 75; continue _fun0012 }
 70:
                            var6 = var7.message;
 75:
                            var7 = var5 != var6;
                            var5 = 'Unknown error';
                            if(!var7) { _fun0012_ip = 91; continue _fun0012 }
 88:
                            var5 = var6;
 91:
                            var2['error'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=187);
 185:
                    return var2;
 187:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 196; continue _fun0011 }
 193:
                    return var3;
 196:
                    return var2;
 199:
                    return var1;
                }
            };
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
    var2 = function checkSuspendedUserAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var2;
    var1 = function _checkSuspendedUserAgeVerification() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0013_ip = 213; continue _fun0013 }
 12:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 5;
                    var5 = var6[var5];
                    var8 = var7.bind(var3)(var5);
                    var7 = var8.dispatch;
                    var5 = {};
                    var9 = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_START';
                    var5['type'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var7 = _closure1_slot4;
                    var5 = var7.getSuspendedUserToken;
                    var8 = var5.bind(var7)();
                    var7 = _closure1_slot5;
                    var5 = var7.getAgeCheckAttempts;
                    var5 = var5.bind(var7)();
                    _closure4_slot0 = var5;
                    var5 = _closure1_slot8;
                    var7 = var5.SAFETY_HUB_CHECK_SUSPENDED_AGE_VERIFICATION;
                    var5 = _closure1_slot0;
                    var4 = 6;
                    var4 = var6[var4];
                    var4 = var5.bind(var3)(var4);
                    var6 = var4.HTTP;
                    var5 = var6.post;
                    var4 = {};
                    var4['url'] = var7;
                    var7 = {};
                    var7['token'] = var8;
                    var4['body'] = var7;
                    var7 = false;
                    var4['rejectWithError'] = var7;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.then;
                    var4 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var1 = arg1;
                            var1 = var1.body;
                            var5 = var1.success;
                            var1 = !var5;
                            if(!var1) { _fun0014_ip = 38; continue _fun0014 }
 20:
                            var3 = _closure4_slot0;
                            var2 = _closure1_slot7;
                            var1 = var3 < var2;
 38:
                            if(!var1) { _fun0014_ip = 73; continue _fun0014 }
 41:
                            var1 = global;
                            var4 = var1.setTimeout;
                            var3 = _closure1_slot6;
                            var2 = undefined;
                            var1 = function() {
                                var2 = _closure1_slot14;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
                                return var1;
                            };
                            var1 = var4.bind(var2)(var1, var3);
 73:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var6 = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_SUCCESS';
                            var2['type'] = var6;
                            var2['success'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.catch;
                    var2 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var7 = arg1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 5;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.dispatch;
                            var2 = {};
                            var5 = 'SAFETY_HUB_CHECK_AUTOMATED_UNDERAGE_APPEAL_FAILURE';
                            var2['type'] = var5;
                            var5 = null;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0015_ip = 75; continue _fun0015 }
 56:
                            var7 = var7.body;
                            var8 = var5 == var7;
                            var6 = undefined;
                            if(var8) { _fun0015_ip = 75; continue _fun0015 }
 70:
                            var6 = var7.message;
 75:
                            var7 = var5 != var6;
                            var5 = 'Unknown error';
                            if(!var7) { _fun0015_ip = 91; continue _fun0015 }
 88:
                            var5 = var6;
 91:
                            var2['error'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=201);
 199:
                    return var2;
 201:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 210; continue _fun0013 }
 207:
                    return var3;
 210:
                    return var2;
 213:
                    return var1;
                }
            };
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
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AGE_CHECK_POLL_INTERVAL_MS;
    var _closure1_slot6 = var8;
    var5 = var5.AGE_CHECK_MAX_POLL_ATTEMPTS;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot8 = var5;
    var5 = 9;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/safety_hub/SafetyHubActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function getSafetyHubData() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getSafetyHubData'] = var5;
    var5 = function getSafetyHubDataForClassification() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getSafetyHubDataForClassification'] = var5;
    var5 = function requestReview() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestReview'] = var5;
    var4 = function requestSuspendedUserAgeVerification() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['requestSuspendedUserAgeVerification'] = var4;
    var3['checkSuspendedUserAgeVerification'] = var2;
    return var1;
})();
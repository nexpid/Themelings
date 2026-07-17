// app/modules/creator_monetization_eligibility/CreatorMonetizationEligibilityActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createCreatorMonetizationEnableRequest() {
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
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.CREATOR_MONETIZATION_ENABLE_REQUESTS;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=99);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
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
    var1 = function _getCreatorMonetizationEligibility() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.CREATOR_MONETIZATION_ELIGIBILITY;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=98);
case 9:
                    return var2;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var3 = var2.body;
                    return var3;
case 11:
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
    var1 = function _acceptCreatorMonetizationTerms() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 8; continue _fun0003 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var12 = _closure1_slot4;
                    var11 = var12.CREATOR_MONETIZATION_ACCEPT_TERMS;
                    var10 = arg1;
                    var9 = arg2;
                    var9 = var11.bind(var12)(var10, var9);
                    var2['url'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=103);
case 13:
                    return var2;
case 14:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 11; continue _fun0003 }
case 15:
                    return var3;
case 11:
                    return var2;
case 8:
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
    var1 = function _acceptCreatorMonetizationTermsV() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 2; continue _fun0004 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.CREATOR_MONETIZATION_ACCEPT_TERMS_V2;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=99);
case 4:
                    return var2;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 6; continue _fun0004 }
case 7:
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
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _getCreatorMonetizationOnboardingMarketing() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 8; continue _fun0005 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 3;
                    var2 = var8[var5];
                    var6 = undefined;
                    var2 = var7.bind(var6)(var2);
                    var4 = var2.HTTP;
                    var3 = var4.get;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.CREATOR_MONETIZATION_MARKETING_ONBOARDING;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var5 = var8[var5];
                    var6 = var7.bind(var6)(var5);
                    var5 = var6.rejectWithMigratedError;
                    var5 = var5.bind(var6)();
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=98);
case 9:
                    return var2;
case 10:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var3 = var2.body;
                    return var3;
case 11:
                    return var2;
case 8:
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
    var1 = function _ownershipTransferOnboard() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 16; continue _fun0006 }
case 17:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var7 = 3;
                    var2 = var9[var7];
                    var6 = undefined;
                    var2 = var8.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.post;
                    var2 = {};
                    var12 = _closure1_slot4;
                    var11 = var12.CREATOR_MONETIZATION_OWNERSHIP_TRANSFER_ONBOARD;
                    var10 = arg1;
                    var10 = var11.bind(var12)(var10);
                    var2['url'] = var10;
                    var10 = {};
                    var11 = arg2;
                    var10['team_id'] = var11;
                    var2['body'] = var10;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.rejectWithMigratedError;
                    var7 = var7.bind(var8)();
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=116);
case 18:
                    return var2;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                    var3 = var2.body;
                    var7 = var3.application;
                    var5 = null;
                    if(!(var5 != var7)) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 4;
                    var4 = var7[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'APPLICATION_FETCH_SUCCESS';
                    var4['type'] = var7;
                    var7 = var3.application;
                    var4['application'] = var7;
                    var4 = var5.bind(var6)(var4);
case 22:
                    return var3;
case 20:
                    return var2;
case 16:
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
    var1 = function _requestRemoveMonetization() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 24; continue _fun0007 }
case 3:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 3;
                    var2 = var8[var6];
                    var3 = undefined;
                    var2 = var7.bind(var3)(var2);
                    var5 = var2.HTTP;
                    var4 = var5.post;
                    var2 = {};
                    var11 = _closure1_slot4;
                    var10 = var11.CREATOR_MONETIZATION_REMOVE_MONETIZATION;
                    var9 = arg1;
                    var9 = var10.bind(var11)(var9);
                    var2['url'] = var9;
                    var9 = {};
                    var2['body'] = var9;
                    var6 = var8[var6];
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.rejectWithMigratedError;
                    var6 = var6.bind(var7)();
                    var2['rejectWithError'] = var6;
                    var2 = var4.bind(var5)(var2);
                    SaveGenerator(address=105);
case 14:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0007_ip = 18; continue _fun0007 }
case 2:
                    return var3;
case 18:
                    return var2;
case 24:
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
    var1 = function _removeMonetization() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var6 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 25; continue _fun0008 }
case 17:
                    var2 = function requestRemoveMonetization() {
                        var1 = undefined;
                        var4 = _closure1_slot12;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var5 = undefined;
                    var2 = var2.bind(var5)(var6);
                    SaveGenerator(address=30);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var4 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.getApplicationsForGuild;
                    var3 = {};
                    var7 = _closure1_slot5;
                    var7 = var7.GUILD_ROLE_SUBSCRIPTIONS;
                    var3['type'] = var7;
                    var7 = true;
                    var3['includeTeam'] = var7;
                    var3 = var4.bind(var5)(var6, var3);
                    SaveGenerator(address=98);
case 9:
                    return var3;
case 10:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 30; continue _fun0008 }
case 12:
                    return var3;
case 30:
                    return var3;
case 28:
                    return var2;
case 25:
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationTypes;
    var _closure1_slot5 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/creator_monetization_eligibility/CreatorMonetizationEligibilityActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createCreatorMonetizationEnableRequest() {
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createCreatorMonetizationEnableRequest'] = var4;
    var4 = function getCreatorMonetizationEligibility() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getCreatorMonetizationEligibility'] = var4;
    var4 = function acceptCreatorMonetizationTerms() {
        var1 = undefined;
        var4 = _closure1_slot8;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['acceptCreatorMonetizationTerms'] = var4;
    var4 = function acceptCreatorMonetizationTermsV2() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['acceptCreatorMonetizationTermsV2'] = var4;
    var4 = function getCreatorMonetizationOnboardingMarketing() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['getCreatorMonetizationOnboardingMarketing'] = var4;
    var4 = function ownershipTransferOnboard() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['ownershipTransferOnboard'] = var4;
    var4 = function acceptNewTerms(arg1) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 3;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var10 = _closure1_slot4;
        var9 = var10.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['acceptNewTerms'] = var4;
    var4 = function acceptNewTermsDemonetized(arg1) {
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var4 = 3;
        var1 = var7[var4];
        var5 = undefined;
        var1 = var6.bind(var5)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var10 = _closure1_slot4;
        var9 = var10.CREATOR_MONETIZATION_ACCEPT_NEW_TERMS_DEMONETIZED;
        var8 = arg1;
        var8 = var9.bind(var10)(var8);
        var1['url'] = var8;
        var4 = var7[var4];
        var5 = var6.bind(var5)(var4);
        var4 = var5.rejectWithMigratedError;
        var4 = var4.bind(var5)();
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['acceptNewTermsDemonetized'] = var4;
    var2 = function removeMonetization() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['removeMonetization'] = var2;
    return var1;
})();
// app/modules/unique_usernames/UniqueUsernamesActionCreators.tsx
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
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AnalyticEvents;
    var _closure1_slot4 = var7;
    var2 = var2.Endpoints;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function resetSuggestions() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 3;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'UNIQUE_USERNAME_SUGGESTIONS_RESET';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['resetSuggestions'] = var7;
    var7 = function fetchSuggestionsRegistration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 1500;
case 2:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var2 = undefined;
                        var10 = undefined;
                        var8 = undefined;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 3;
                        var3 = var3[var6];
                        var7 = var5.bind(var2)(var3);
                        var5 = var7.dispatch;
                        var3 = {};
                        var9 = 'UNIQUE_USERNAME_SUGGESTIONS_RESET';
                        var3['type'] = var9;
                        var3 = var5.bind(var7)(var3);
case 6: // try_start_0
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 4;
                        var3 = var7[var3];
                        var3 = var5.bind(var2)(var3);
                        var11 = var3.HTTP;
                        var5 = var11.get;
                        var3 = {};
                        var7 = _closure1_slot5;
                        var7 = var7.POMELO_SUGGESTIONS_UNAUTHED;
                        var3['url'] = var7;
                        var12 = _closure2_slot0;
                        var9 = null;
                        var13 = var9 == var12;
                        var12 = undefined;
                        if(var13) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                        var13 = {};
                        var14 = _closure2_slot0;
                        var13['global_name'] = var14;
                        var12 = var13;
case 7:
                        var3['query'] = var12;
                        var12 = _closure2_slot1;
                        var3['timeout'] = var12;
                        var12 = true;
                        var3['rejectWithError'] = var12;
                        var3['failImmediatelyWhenRateLimited'] = var12;
                        var3 = var5.bind(var11)(var3);
                        SaveGenerator(address=173);
case 9:
                        return var3;
case 10:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                        var8 = var3;
                        var5 = var3.ok;
                        if(!var5) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var5 = var8;
                        var5 = var5.body;
                        var10 = var5;
                        var11 = var9 == var5;
                        var5 = undefined;
                        if(var11) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                        var5 = var10.username;
case 15:
                        if(!(var9 == var5)) { _fun0002_ip = 17; continue _fun0002 }
case 13: // try_end0
                        _fun0002_ip = 18; continue _fun0002;
case 17: // try_start_1
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var6];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var9 = 'UNIQUE_USERNAME_REGISTRATION_SUGGESTIONS_SUCCESS';
                        var4['type'] = var9;
                        var8 = var8.body;
                        var4['suggestion'] = var8;
                        var7 = _closure2_slot0;
                        var4['source'] = var7;
                        var4 = var5.bind(var6)(var4);
case 19: // try_end1
                        return var4;
case 11:
                        return var3;
case 20: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
case 18:
                        return var2;
case 4:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['fetchSuggestionsRegistration'] = var7;
    var4 = function attemptUsername(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[1];
            var4 = arguments[2];
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0003_ip = 21; continue _fun0003 }
case 2:
            var5 = 'modal';
case 21:
            var _closure2_slot1 = var5;
            if(!(var4 === var2)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var4 = false;
case 22:
            var _closure2_slot2 = var4;
            if(!(var3 === var2)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var3 = false;
case 24:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 26; continue _fun0004 }
case 5:
                        var4 = undefined;
                        var13 = undefined;
                        var3 = undefined;
                        var8 = undefined;
                        var10 = undefined;
                        var2 = _closure2_slot0;
                        var7 = /^[A-Za-z0-9_.]*$/;
                        var5 = var7.test;
                        var5 = var5.bind(var7)(var2);
                        var14 = false;
                        if(!(var14 !== var5)) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                        var7 = var2.includes;
                        var5 = '..';
                        var5 = var7.bind(var2)(var5);
                        if(var5) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                        var5 = var2.length;
                        var12 = 2;
                        if(!(!(var5 < var12))) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                        var5 = var2.length;
                        var2 = 32;
                        var2 = var5 > var2;
                        var5 = undefined;
                        if(!var2) { _fun0004_ip = 33; continue _fun0004 }
case 31:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = var2[var12];
                        var9 = var7.bind(var4)(var9);
                        var11 = var9.intl;
                        var9 = var11.formatToPlainString;
                        var2 = var2[var12];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.t;
                        var7 = var2.IpijXA;
                        var2 = {'maxNum': 32, 'minNum': 2};
                        var5 = var9.bind(var11)(var7, var2);
case 33:
                        _fun0004_ip = 34; continue _fun0004;
case 29:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 2;
                        var7 = var12[var2];
                        var7 = var11.bind(var4)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var2 = var12[var2];
                        var2 = var11.bind(var4)(var2);
                        var2 = var2.t;
                        var2 = var2.C7G+gr;
                        var5 = var7.bind(var9)(var2);
case 34:
                        _fun0004_ip = 35; continue _fun0004;
case 27:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 2;
                        var7 = var12[var2];
                        var7 = var11.bind(var4)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var2 = var12[var2];
                        var2 = var11.bind(var4)(var2);
                        var2 = var2.t;
                        var2 = var2.z7c4bP;
                        var5 = var7.bind(var9)(var2);
case 35:
                        var11 = null;
                        if(!(var11 == var5)) { _fun0004_ip = 36; continue _fun0004 }
case 37: // try_start_0
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 6;
                        var2 = var12[var2];
                        var12 = var9.bind(var4)(var2);
                        var9 = var12.post;
                        var2 = {};
                        var15 = _closure2_slot2;
                        var16 = _closure1_slot5;
                        if(var15) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                        var15 = var16.POMELO_ATTEMPT;
                        _fun0004_ip = 40; continue _fun0004;
case 38:
                        var15 = var16.POMELO_ATTEMPT_UNAUTHED;
case 40:
                        var2['url'] = var15;
                        var15 = {};
                        var17 = _closure2_slot0;
                        var15['username'] = var17;
                        var2['body'] = var15;
                        var15 = {};
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var16 = 7;
                        var16 = var19[var16];
                        var16 = var18.bind(var4)(var16);
                        var16 = var16.NetworkActionNames;
                        var16 = var16.POMELO_ATTEMPT;
                        var15['event'] = var16;
                        var16 = {};
                        var16['requested_username'] = var17;
                        var15['properties'] = var16;
                        var2['trackedActionData'] = var15;
                        var2['rejectWithError'] = var14;
                        var2 = var9.bind(var12)(var2);
                        SaveGenerator(address=457);
case 41:
                        return var2;
case 42:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                        if(var9) { _fun0004_ip = 43; continue _fun0004 }
case 44:
                        var13 = var2;
                        var9 = var2.body;
                        var9 = var9.taken;
                        if(!var9) { _fun0004_ip = 45; continue _fun0004 }
case 46:
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var9 = 5;
                        var9 = var14[var9];
                        var15 = var12.bind(var4)(var9);
                        var14 = var15.track;
                        var9 = _closure1_slot4;
                        var12 = var9.POMELO_ERRORS;
                        var9 = {'reason': 'already_taken', 'username_error': true};
                        var16 = _closure2_slot1;
                        var9['location'] = var16;
                        var16 = _closure2_slot3;
                        var9['one_click_flow'] = var16;
                        var9 = var14.bind(var15)(var12, var9);
case 45:
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 3;
                        var7 = var12[var7];
                        var12 = var9.bind(var4)(var7);
                        var9 = var12.dispatch;
                        var7 = {};
                        var14 = 'UNIQUE_USERNAME_ATTEMPT_SUCCESS';
                        var7['type'] = var14;
                        var14 = _closure2_slot0;
                        var7['username'] = var14;
                        var13 = var13.body;
                        var13 = var13.taken;
                        var7['taken'] = var13;
                        var7 = var9.bind(var12)(var7);
case 47: // try_end0
                        _fun0004_ip = 48; continue _fun0004;
case 43:
                        return var2;
case 49: // catch_target0
                        CatchBlockStart(arg_register=11);
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 8;
                        var7 = var13[var7];
                        var7 = var9.bind(var4)(var7);
                        var7 = var7.APIError;
                        var9 = var7.prototype;
                        var9 = Object.create(var9, {constructor: {value: var7}});
                        var22 = var9;
                        var21 = var12;
                        var7 = new var22[var7](var21, var20);
                        var9 = var7 instanceof Object ? var7 : var9;
                        var8 = var9;
                        var7 = var9.getAnyErrorMessage;
                        var7 = var7.bind(var9)();
                        var3 = var7;
                        var7 = var11 != var7;
                        var14 = undefined;
                        if(!var7) { _fun0004_ip = 50; continue _fun0004 }
case 51:
                        var14 = var3;
case 50:
                        var10 = var14;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var9 = 5;
                        var9 = var7[var9];
                        var13 = var3.bind(var4)(var9);
                        var12 = var13.track;
                        var2 = _closure1_slot4;
                        var9 = var2.POMELO_ERRORS;
                        var2 = {};
                        var2['reason'] = var14;
                        var14 = true;
                        var2['username_error'] = var14;
                        var14 = _closure2_slot1;
                        var2['location'] = var14;
                        var14 = _closure2_slot3;
                        var2['one_click_flow'] = var14;
                        var2 = var12.bind(var13)(var9, var2);
                        var2 = 3;
                        var2 = var7[var2];
                        var7 = var3.bind(var4)(var2);
                        var3 = var7.dispatch;
                        var2 = {};
                        var9 = _closure2_slot0;
                        var2['username'] = var9;
                        var9 = 'UNIQUE_USERNAME_ATTEMPT_FAILURE';
                        var2['type'] = var9;
                        var9 = var8;
                        var9 = var9.status;
                        var11 = var11 != var9;
                        var9 = undefined;
                        if(!var11) { _fun0004_ip = 52; continue _fun0004 }
case 53:
                        var11 = var8;
                        var12 = var11.status;
                        var11 = 500;
                        var11 = var12 < var11;
                        var9 = undefined;
                        if(!var11) { _fun0004_ip = 52; continue _fun0004 }
case 54:
                        var11 = var8;
                        var12 = var11.status;
                        var11 = 401;
                        var9 = undefined;
                        if(!(var11 !== var12)) { _fun0004_ip = 52; continue _fun0004 }
case 55:
                        var9 = var10;
case 52:
                        var2['error'] = var9;
                        var9 = var8.status;
                        var2['statusCode'] = var9;
                        var8 = var8.retryAfter;
                        var2['retryAfter'] = var8;
                        var2 = var3.bind(var7)(var2);
case 48:
                        return var4;
case 36:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var8 = 5;
                        var8 = var7[var8];
                        var10 = var3.bind(var4)(var8);
                        var9 = var10.track;
                        var2 = _closure1_slot4;
                        var8 = var2.POMELO_ERRORS;
                        var2 = {};
                        var2['reason'] = var5;
                        var11 = true;
                        var2['username_error'] = var11;
                        var11 = _closure2_slot1;
                        var2['location'] = var11;
                        var11 = _closure2_slot3;
                        var2['one_click_flow'] = var11;
                        var2 = var9.bind(var10)(var8, var2);
                        var2 = 3;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'UNIQUE_USERNAME_ATTEMPT_FAILURE';
                        var2['type'] = var7;
                        var6 = _closure2_slot0;
                        var2['username'] = var6;
                        var2['error'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var2;
case 26:
                        return var1;
                    }
                };
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var2['attemptUsername'] = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/unique_usernames/UniqueUsernamesActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
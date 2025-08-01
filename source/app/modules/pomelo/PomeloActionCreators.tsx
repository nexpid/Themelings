// app/modules/pomelo/PomeloActionCreators.tsx
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
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = {};
    var7 = function resetSuggestions() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'POMELO_SUGGESTIONS_RESET';
        var1['type'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['resetSuggestions'] = var7;
    var7 = function fetchSuggestionsRegistration(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0001_ip = 24; continue _fun0001 }
 18:
            var3 = 1500;
 24:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 289; continue _fun0002 }
 10:
                        var2 = undefined;
                        var10 = undefined;
                        var8 = undefined;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var6 = 4;
                        var3 = var3[var6];
                        var7 = var5.bind(var2)(var3);
                        var5 = var7.dispatch;
                        var3 = {};
                        var9 = 'POMELO_SUGGESTIONS_RESET';
                        var3['type'] = var9;
                        var3 = var5.bind(var7)(var3);
 61: // try_start_0
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 5;
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
                        if(var13) { _fun0002_ip = 139; continue _fun0002 }
 125:
                        var13 = {};
                        var14 = _closure2_slot0;
                        var13['global_name'] = var14;
                        var12 = var13;
 139:
                        var3['query'] = var12;
                        var12 = _closure2_slot1;
                        var3['timeout'] = var12;
                        var12 = true;
                        var3['rejectWithError'] = var12;
                        var3['failImmediatelyWhenRateLimited'] = var12;
                        var3 = var5.bind(var11)(var3);
                        SaveGenerator(address=172);
 170:
                        return var3;
 172:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 281; continue _fun0002 }
 178:
                        var8 = var3;
                        var5 = var3.ok;
                        if(!var5) { _fun0002_ip = 219; continue _fun0002 }
 190:
                        var5 = var8;
                        var5 = var5.body;
                        var10 = var5;
                        var11 = var9 == var5;
                        var5 = undefined;
                        if(var11) { _fun0002_ip = 215; continue _fun0002 }
 210:
                        var5 = var10.username;
 215:
                        if(!(var9 == var5)) { _fun0002_ip = 221; continue _fun0002 }
 219: // try_end0
                        _fun0002_ip = 286; continue _fun0002;
 221: // try_start_1
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var6];
                        var6 = var5.bind(var2)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var9 = 'POMELO_REGISTRATION_SUGGESTIONS_SUCCESS';
                        var4['type'] = var9;
                        var8 = var8.body;
                        var4['suggestion'] = var8;
                        var7 = _closure2_slot0;
                        var4['source'] = var7;
                        var4 = var5.bind(var6)(var4);
 278: // try_end1
                        return var4;
 281:
                        return var3;
 284: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=2);
 286:
                        return var2;
 289:
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
    var7 = function fetchSuggestions(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 279; continue _fun0003 }
 10:
                    var2 = undefined;
                    var9 = undefined;
                    var7 = undefined;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var3 = var6[var3];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.isInPomeloSuggestionsExperiment;
                    var3 = var3.bind(var5)();
                    if(!var3) { _fun0003_ip = 276; continue _fun0003 }
 55: // try_start_0
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 4;
                    var3 = var8[var6];
                    var11 = var5.bind(var2)(var3);
                    var5 = var11.dispatch;
                    var10 = true;
                    var3 = {'type': 'POMELO_SUGGESTIONS_FETCH', 'usernameSuggestionLoading': true};
                    var3 = var5.bind(var11)(var3);
                    var5 = _closure1_slot0;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var5.bind(var2)(var3);
                    var8 = var3.HTTP;
                    var5 = var8.get;
                    var3 = {};
                    var11 = _closure1_slot5;
                    var11 = var11.POMELO_SUGGESTIONS;
                    var3['url'] = var11;
                    var11 = _closure2_slot0;
                    var3['timeout'] = var11;
                    var3['rejectWithError'] = var10;
                    var3 = var5.bind(var8)(var3);
                    SaveGenerator(address=168);
 166:
                    return var3;
 168:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 271; continue _fun0003 }
 174:
                    var7 = var3;
                    var5 = var3.ok;
                    if(!var5) { _fun0003_ip = 217; continue _fun0003 }
 186:
                    var5 = var7;
                    var5 = var5.body;
                    var9 = var5;
                    var8 = null;
                    var10 = var8 == var5;
                    var5 = undefined;
                    if(var10) { _fun0003_ip = 213; continue _fun0003 }
 208:
                    var5 = var9.username;
 213:
                    if(!(var8 == var5)) { _fun0003_ip = 219; continue _fun0003 }
 217: // try_end0
                    _fun0003_ip = 276; continue _fun0003;
 219: // try_start_1
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'POMELO_SUGGESTIONS_SUCCESS';
                    var4['type'] = var8;
                    var7 = var7.body;
                    var4['suggestion'] = var7;
                    var4 = var5.bind(var6)(var4);
 268: // try_end1
                    return var4;
 271:
                    return var3;
 274: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=2);
 276:
                    return var2;
 279:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['fetchSuggestions'] = var7;
    var7 = function attemptPomelo(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arguments[1];
            var4 = arguments[2];
            var3 = arguments[3];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var5 === var2)) { _fun0004_ip = 28; continue _fun0004 }
 24:
            var5 = 'modal';
 28:
            var _closure2_slot1 = var5;
            if(!(var4 === var2)) { _fun0004_ip = 38; continue _fun0004 }
 36:
            var4 = false;
 38:
            var _closure2_slot2 = var4;
            if(!(var3 === var2)) { _fun0004_ip = 48; continue _fun0004 }
 46:
            var3 = false;
 48:
            var _closure2_slot3 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0005_ip = 1043; continue _fun0005 }
 10:
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
                        if(!(var14 !== var5)) { _fun0005_ip = 245; continue _fun0005 }
 60:
                        var7 = var2.includes;
                        var5 = '..';
                        var5 = var7.bind(var2)(var5);
                        if(var5) { _fun0005_ip = 183; continue _fun0005 }
 79:
                        var7 = var2.length;
                        var5 = 2;
                        if(!(!(var7 < var5))) { _fun0005_ip = 108; continue _fun0005 }
 91:
                        var5 = var2.length;
                        var2 = 32;
                        var2 = var5 > var2;
                        var5 = undefined;
                        if(!var2) { _fun0005_ip = 181; continue _fun0005 }
 108:
                        var7 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 3;
                        var9 = var12[var2];
                        var9 = var7.bind(var4)(var9);
                        var11 = var9.intl;
                        var9 = var11.formatToPlainString;
                        var2 = var12[var2];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.t;
                        var7 = var2.IpijXF;
                        var2 = {'maxNum': 32, 'minNum': 2};
                        var5 = var9.bind(var11)(var7, var2);
 181:
                        _fun0005_ip = 243; continue _fun0005;
 183:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 3;
                        var7 = var12[var2];
                        var7 = var11.bind(var4)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var2 = var12[var2];
                        var2 = var11.bind(var4)(var2);
                        var2 = var2.t;
                        var2 = var2.C7G+go;
                        var5 = var7.bind(var9)(var2);
 243:
                        _fun0005_ip = 303; continue _fun0005;
 245:
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 3;
                        var7 = var12[var2];
                        var7 = var11.bind(var4)(var7);
                        var9 = var7.intl;
                        var7 = var9.string;
                        var2 = var12[var2];
                        var2 = var11.bind(var4)(var2);
                        var2 = var2.t;
                        var2 = var2.z7c4bG;
                        var5 = var7.bind(var9)(var2);
 303:
                        var11 = null;
                        if(!(var11 == var5)) { _fun0005_ip = 919; continue _fun0005 }
 312: // try_start_0
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var2 = 8;
                        var2 = var12[var2];
                        var12 = var9.bind(var4)(var2);
                        var9 = var12.post;
                        var2 = {};
                        var15 = _closure2_slot2;
                        var16 = _closure1_slot5;
                        if(var15) { _fun0005_ip = 362; continue _fun0005 }
 354:
                        var15 = var16.POMELO_ATTEMPT;
                        _fun0005_ip = 368; continue _fun0005;
 362:
                        var15 = var16.POMELO_ATTEMPT_UNAUTHED;
 368:
                        var2['url'] = var15;
                        var15 = {};
                        var17 = _closure2_slot0;
                        var15['username'] = var17;
                        var2['body'] = var15;
                        var15 = {};
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot2;
                        var16 = 9;
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
 455:
                        return var2;
 457:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=8);
                        if(var9) { _fun0005_ip = 626; continue _fun0005 }
 466:
                        var13 = var2;
                        var9 = var2.body;
                        var9 = var9.taken;
                        if(!var9) { _fun0005_ip = 555; continue _fun0005 }
 483:
                        var12 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var9 = 7;
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
 555:
                        var9 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 4;
                        var7 = var12[var7];
                        var12 = var9.bind(var4)(var7);
                        var9 = var12.dispatch;
                        var7 = {};
                        var14 = 'POMELO_ATTEMPT_SUCCESS';
                        var7['type'] = var14;
                        var14 = _closure2_slot0;
                        var7['username'] = var14;
                        var13 = var13.body;
                        var13 = var13.taken;
                        var7['taken'] = var13;
                        var7 = var9.bind(var12)(var7);
 621: // try_end0
                        _fun0005_ip = 916; continue _fun0005;
 626:
                        return var2;
 629: // catch_target0
                        CatchBlockStart(arg_register=11);
                        var9 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var7 = 10;
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
                        if(!var7) { _fun0005_ip = 711; continue _fun0005 }
 708:
                        var14 = var3;
 711:
                        var10 = var14;
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var9 = 7;
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
                        var2 = 4;
                        var2 = var7[var2];
                        var7 = var3.bind(var4)(var2);
                        var3 = var7.dispatch;
                        var2 = {};
                        var9 = _closure2_slot0;
                        var2['username'] = var9;
                        var9 = 'POMELO_ATTEMPT_FAILURE';
                        var2['type'] = var9;
                        var9 = var8;
                        var9 = var9.status;
                        var11 = var11 != var9;
                        var9 = undefined;
                        if(!var11) { _fun0005_ip = 886; continue _fun0005 }
 840:
                        var11 = var8;
                        var12 = var11.status;
                        var11 = 500;
                        var11 = var12 < var11;
                        var9 = undefined;
                        if(!var11) { _fun0005_ip = 886; continue _fun0005 }
 863:
                        var11 = var8;
                        var12 = var11.status;
                        var11 = 401;
                        var9 = undefined;
                        if(!(var11 !== var12)) { _fun0005_ip = 886; continue _fun0005 }
 883:
                        var9 = var10;
 886:
                        var2['error'] = var9;
                        var9 = var8.status;
                        var2['statusCode'] = var9;
                        var8 = var8.retryAfter;
                        var2['retryAfter'] = var8;
                        var2 = var3.bind(var7)(var2);
 916:
                        return var4;
 919:
                        var3 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var8 = 7;
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
                        var2 = 4;
                        var2 = var7[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var7 = 'POMELO_ATTEMPT_FAILURE';
                        var2['type'] = var7;
                        var6 = _closure2_slot0;
                        var2['username'] = var6;
                        var2['error'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var2;
 1043:
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
    var2['attemptPomelo'] = var7;
    var4 = function createPomelo(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arguments[1];
            var2 = arg1;
            var _closure2_slot0 = var2;
            var2 = undefined;
            if(!(var3 === var2)) { _fun0006_ip = 20; continue _fun0006 }
 18:
            var3 = false;
 20:
            var _closure2_slot1 = var3;
            var3 = _closure1_slot3;
            var1 = function* () {
                var1 = function* anon_0_() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0007_ip = 205; continue _fun0007 }
 10:
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var2 = 8;
                        var2 = var11[var2];
                        var5 = undefined;
                        var6 = var4.bind(var5)(var2);
                        var4 = var6.post;
                        var2 = {};
                        var7 = _closure2_slot0;
                        var2['body'] = var7;
                        var7 = _closure1_slot5;
                        var7 = var7.POMELO_CREATE;
                        var2['url'] = var7;
                        var7 = {};
                        var10 = _closure1_slot0;
                        var8 = 9;
                        var8 = var11[var8];
                        var8 = var10.bind(var5)(var8);
                        var8 = var8.NetworkActionNames;
                        var8 = var8.POMELO_CREATE;
                        var7['event'] = var8;
                        var8 = {};
                        var9 = _closure2_slot1;
                        var8['one_click_flow'] = var9;
                        var7['properties'] = var8;
                        var2['trackedActionData'] = var7;
                        var7 = false;
                        var2['rejectWithError'] = var7;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address=139);
 137:
                        return var2;
 139:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(var4) { _fun0007_ip = 202; continue _fun0007 }
 145:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var3 = 4;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'CURRENT_USER_UPDATE';
                        var3['type'] = var6;
                        var6 = var2.body;
                        var3['user'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var3 = var2.body;
                        return var3;
 202:
                        return var2;
 205:
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
    var2['createPomelo'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/PomeloActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
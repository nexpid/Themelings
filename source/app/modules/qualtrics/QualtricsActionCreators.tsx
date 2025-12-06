// app/modules/qualtrics/QualtricsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var5 = function fetchSurveyDetails() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _fetchSurveyDetails() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var7 = arg1;
case 4: // try_start_0
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 6;
                    var2 = var5[var2];
                    var6 = undefined;
                    var2 = var3.bind(var6)(var2);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var10 = _closure1_slot9;
                    var9 = var10.EMBEDDED_SURVEY;
                    var8 = var7;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var8 = true;
                    var2['rejectWithError'] = var8;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=87);
case 5:
                    return var2;
case 6:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var3 = var2.body;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 7;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var8 = 'QUALTRICS_SURVEY_FETCH_SUCCESS';
                    var4['type'] = var8;
                    var4['surveyId'] = var7;
                    var4['surveyDetails'] = var3;
                    var4 = var5.bind(var6)(var4);
case 9: // try_end0
                    return var3;
case 7:
                    return var2;
case 10: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 8;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.captureException;
                    var2 = var2.bind(var3)(var4);
                    var2 = null;
                    return var2;
case 2:
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
    var4 = function submitSurveyResponse() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _submitSurveyResponse() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 11; continue _fun0002 }
case 4:
                    var8 = var10;
                    var5 = undefined;
                    var9 = undefined;
                    var4 = _closure1_slot5;
                    var3 = var4.getState;
                    var4 = var3.bind(var4)();
                    var3 = var4.getDisplayedQuestions;
                    var7 = var3.bind(var4)(var10);
                    var4 = null;
                    if(!(var4 == var7)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var7 = new Array(0);
case 12:
                    var6 = function parseSurveyResponses(arg1, arg2, arg3) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var7 = arg2;
                            var5 = arg3;
                            var4 = _closure1_slot6;
                            var2 = var4.getSurvey;
                            var1 = arg1;
                            var20 = var2.bind(var4)(var1);
                            var _closure5_slot0 = var20;
                            var1 = null;
                            if(!(var1 != var20)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                            var2 = {};
                            var _closure5_slot1 = var2;
                            var4 = global;
                            var8 = var4.Object;
                            var6 = var8.entries;
                            var19 = var6.bind(var8)(var7);
                            var6 = var19.length;
                            var18 = 0;
                            var6 = var18 < var6;
                            var17 = '';
                            var16 = '_DO';
                            var15 = ',';
                            var14 = ':TEXT:';
                            var13 = 2;
                            var12 = 1;
                            var11 = undefined;
                            var10 = '_';
                            var9 = '_TEXT';
                            var8 = 0;
                            if(!var6) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var22 = var19[var8];
                            var6 = _closure1_slot3;
                            var6 = var6.bind(var11)(var22, var13);
                            var23 = var6[var18];
                            var24 = var6[var12];
                            var6 = var20.Questions;
                            var6 = var6[var23];
                            if(!(var1 != var6)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                            var25 = var6.QuestionType;
                            var22 = _closure1_slot8;
                            var22 = var22.MULTIPLE_CHOICE;
                            if(!(var25 === var22)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                            var25 = var6.Selector;
                            var22 = _closure1_slot7;
                            var22 = var22.MULTIPLE_ANSWER;
                            if(!(var25 !== var22)) { _fun0003_ip = 22; continue _fun0003 }
case 20:
                            var25 = var6.QuestionType;
                            var22 = _closure1_slot8;
                            var22 = var22.MULTIPLE_CHOICE;
                            if(!(var25 === var22)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                            var25 = var6.Selector;
                            var22 = _closure1_slot7;
                            var22 = var22.SINGLE_ANSWER;
                            if(!(var25 !== var22)) { _fun0003_ip = 25; continue _fun0003 }
case 23:
                            var25 = var6.QuestionType;
                            var22 = _closure1_slot8;
                            var22 = var22.TEXT_ENTRY;
                            if(!(var25 !== var22)) { _fun0003_ip = 11; continue _fun0003 }
case 26:
                            var2[var23] = var24;
                            _fun0003_ip = 18; continue _fun0003;
case 11:
                            var22 = var4.HermesInternal;
                            var22 = var22.concat;
                            var22 = var22.bind(var17)(var23, var9);
                            var2[var22] = var24;
                            _fun0003_ip = 18; continue _fun0003;
case 25:
                            var22 = var24.includes;
                            var22 = var22.bind(var24)(var14);
                            if(var22) { _fun0003_ip = 27; continue _fun0003 }
case 28:
                            var22 = var4.parseInt;
                            var22 = var22.bind(var11)(var24);
                            var2[var23] = var22;
                            _fun0003_ip = 29; continue _fun0003;
case 27:
                            var22 = var24.split;
                            var22 = var22.bind(var24)(var14, var13);
                            var26 = var22[var18];
                            var22 = var24.split;
                            var22 = var22.bind(var24)(var14, var13);
                            var25 = var22[var12];
                            var22 = var4.parseInt;
                            var22 = var22.bind(var11)(var26);
                            var2[var23] = var22;
                            var22 = var4.HermesInternal;
                            var22 = var22.concat;
                            var31 = var17;
                            var30 = var23;
                            var29 = var10;
                            var28 = var26;
                            var27 = var9;
                            var22 = var31[var22](var30, var29, var28, var27, var26);
                            var2[var22] = var25;
case 29:
                            var22 = var6.ChoiceOrder;
                            if(!(var1 != var22)) { _fun0003_ip = 18; continue _fun0003 }
case 30:
                            var22 = var4.HermesInternal;
                            var22 = var22.concat;
                            var25 = var22.bind(var17)(var23, var16);
                            var22 = var6.ChoiceOrder;
                            var2[var25] = var22;
                            _fun0003_ip = 18; continue _fun0003;
case 22:
                            var22 = var24.split;
                            var22 = var22.bind(var24)(var15);
                            var2[var23] = var22;
                            var22 = var6.ChoiceOrder;
                            if(!(var1 != var22)) { _fun0003_ip = 18; continue _fun0003 }
case 31:
                            var22 = var4.HermesInternal;
                            var22 = var22.concat;
                            var22 = var22.bind(var17)(var23, var16);
                            var6 = var6.ChoiceOrder;
                            var2[var22] = var6;
case 18:
                            var8 = var8 + 1;
                            var6 = var19.length;
                            if(var8 < var6) { _fun0003_ip = 17; continue _fun0003 }
case 16:
                            var6 = var4.Object;
                            var4 = var6.keys;
                            var4 = var4.bind(var6)(var7);
                            var _closure5_slot2 = var4;
                            var4 = var5.forEach;
                            var3 = function(arg1) {
                                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                    var6 = arg1;
                                    var3 = _closure5_slot2;
                                    var1 = var3.includes;
                                    var1 = var1.bind(var3)(var6);
                                    if(var1) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                                    var1 = _closure5_slot0;
                                    var1 = var1.Questions;
                                    var1 = var1[var6];
                                    var4 = null;
                                    if(!(var4 != var1)) { _fun0004_ip = 19; continue _fun0004 }
case 34:
                                    var3 = var1.ChoiceOrder;
                                    var3 = var4 != var3;
                                    if(!var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
                                    var5 = var1.QuestionType;
                                    var4 = _closure1_slot8;
                                    var4 = var4.MULTIPLE_CHOICE;
                                    var3 = var5 === var4;
case 35:
                                    if(!var3) { _fun0004_ip = 32; continue _fun0004 }
case 5:
                                    var4 = var1.Selector;
                                    var3 = _closure1_slot7;
                                    var3 = var3.MULTIPLE_ANSWER;
                                    if(!(var4 === var3)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
                                    var4 = _closure5_slot1;
                                    var3 = new Array(0);
                                    var4[var6] = var3;
case 37:
                                    var3 = _closure5_slot1;
                                    var2 = global;
                                    var2 = var2.HermesInternal;
                                    var5 = var2.concat;
                                    var4 = '';
                                    var2 = '_DO';
                                    var2 = var5.bind(var4)(var6, var2);
                                    var1 = var1.ChoiceOrder;
                                    var3[var2] = var1;
                                    _fun0004_ip = 32; continue _fun0004;
case 19:
                                    var1 = undefined;
                                    return var1;
case 32:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var3 = var4.bind(var5)(var3);
                            return var2;
case 14:
                            return var1;
                        }
                    };
                    var3 = arg2;
                    var3 = var6.bind(var5)(var10, var3, var7);
                    var9 = var3;
                    if(!(var4 != var3)) { _fun0002_ip = 39; continue _fun0002 }
case 6: // try_start_0
                    var4 = {};
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 6;
                    var3 = var7[var3];
                    var3 = var6.bind(var5)(var3);
                    var7 = var3.HTTP;
                    var6 = var7.post;
                    var3 = {};
                    var11 = _closure1_slot9;
                    var10 = var11.EMBEDDED_SURVEY_RESPONSE;
                    var8 = var10.bind(var11)(var8);
                    var3['url'] = var8;
                    var8 = {};
                    var10 = global;
                    var11 = var10.JSON;
                    var10 = var11.stringify;
                    var9 = var10.bind(var11)(var9);
                    var8['values_json'] = var9;
                    var3['body'] = var8;
                    var8 = true;
                    var3['rejectWithError'] = var8;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=188);
case 40:
                    return var3;
case 41:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var6 = var3.body;
                    var6 = var6.responseId;
                    var4['responseId'] = var6;
case 44: // try_end0
                    return var4;
case 42:
                    return var3;
case 45: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 8;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.captureException;
                    var2 = var2.bind(var3)(var4);
                    var2 = {};
                    var3 = 'null';
                    var2['responseId'] = var3;
                    return var2;
case 39:
                    var2 = {};
                    var3 = 'null';
                    var2['responseId'] = var3;
                    return var2;
case 11:
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
    var2 = function fireSurveyAction() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _fireSurveyAction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 46; continue _fun0005 }
case 4:
                    var10 = var5;
                    var2 = undefined;
                    var8 = undefined;
                    var9 = undefined;
                    var4 = var5.startsWith;
                    var3 = 'quest_completed_';
                    var3 = var4.bind(var5)(var3);
                    if(var3) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var4 = var5.bind(var2)(var4);
                    var6 = var4.EmbeddedSurveyExperiment;
                    var5 = var6.getConfig;
                    var4 = {};
                    var7 = 'qualtrics action creator';
                    var4['location'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var3 = var4.enableNitroUnsubSurvey;
case 47:
                    if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 50: // try_start_0
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 6;
                    var3 = var6[var3];
                    var3 = var5.bind(var2)(var3);
                    var6 = var3.HTTP;
                    var5 = var6.post;
                    var3 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.EMBEDDED_SURVEY_ACTION;
                    var3['url'] = var7;
                    var7 = {};
                    var7['action_type'] = var10;
                    var3['body'] = var7;
                    var7 = true;
                    var3['rejectWithError'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=182);
case 51:
                    return var3;
case 52:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0005_ip = 53; continue _fun0005 }
case 41:
                    var9 = var3;
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 7;
                    var4 = var6[var4];
                    var6 = var5.bind(var2)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var7 = 'SURVEY_FETCHED';
                    var4['type'] = var7;
                    var10 = null;
                    var11 = var10 == var3;
                    var7 = undefined;
                    if(var11) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                    var9 = var9.body;
                    var8 = var9;
                    var9 = var10 == var9;
                    var7 = undefined;
                    if(var9) { _fun0005_ip = 54; continue _fun0005 }
case 56:
                    var7 = var8.survey;
case 54:
                    var4['survey'] = var7;
                    var4 = var5.bind(var6)(var4);
case 57: // try_end0
                    _fun0005_ip = 49; continue _fun0005;
case 53:
                    return var3;
case 11: // catch_target0
                    CatchBlockStart(arg_register=2);
case 49:
                    return var2;
case 46:
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
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var6);
    var1 = 0;
    var6 = var9[var1];
    var1 = undefined;
    var6 = var10.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.useQualtricsResponseStore;
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var9[var6];
    var6 = var10.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var10 = var6.QuestionSelectorEnum;
    var _closure1_slot7 = var10;
    var6 = var6.QuestionTypeEnum;
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var6 = var6.Endpoints;
    var _closure1_slot9 = var6;
    var6 = {};
    var6['fetchSurveyDetails'] = var5;
    var6['submitSurveyResponse'] = var4;
    var6['fireSurveyAction'] = var2;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/qualtrics/QualtricsActionCreators.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['fetchSurveyDetails'] = var5;
    var3['submitSurveyResponse'] = var4;
    var3['fireSurveyAction'] = var2;
    return var1;
})();
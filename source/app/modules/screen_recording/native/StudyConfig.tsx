// app/modules/screen_recording/native/StudyConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var7[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.useScreenRecordingStore;
    var _closure1_slot2 = var4;
    var4 = {};
    var5 = {'id': 'icymi', 'title': 'ICYMI Feedback Survey'};
    var8 = function predicate() {
        var1 = true;
        return var1;
    };
    var5['predicate'] = var8;
    var8 = new Array(2);
    var9 = {'title': 'Step 1/2', 'instructions': 'Browse ICYMI, and talk out loud what you think of the cards that you see.\n\n- Please scroll through at least 15 items.\n\nPress Next when you are done.'};
    var8[0] = var9;
    var9 = {'title': 'Step 2/2', 'instructions': 'In your own words, how would you describe what kind of content is in ICYMI?\n\nPress Next when you are done.'};
    var8[1] = var9;
    var5['steps'] = var8;
    var8 = function isStepCompleted(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 1;
            if(!(var1 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = false;
            return var1;
case 4:
            var2 = _closure1_slot2;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var3 = var1.stepStartedTime;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var3 = var2 - var3;
            var2 = 3000;
            var1 = var3 >= var2;
case 6:
            return var1;
case 2:
            var2 = _closure1_slot2;
            var1 = var2.getState;
            var1 = var1.bind(var2)();
            var1 = var1.isICYMIScrolled;
            return var1;
        }
    };
    var5['isStepCompleted'] = var8;
    var8 = function useIsStepCompleted(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var5 = _closure1_slot2;
            var6 = undefined;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.isICYMIScrolled;
                return var1;
            };
            var1 = var5.bind(var6)(var1);
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.stepStartedTime;
                return var1;
            };
            var5 = var5.bind(var6)(var4);
            var4 = function useTimer() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var6 = 100;
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var6 = 1000;
case 8:
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var1;
                    var5 = _closure1_slot1;
                    var8 = var5.useReducer;
                    var7 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var4 = 0;
                    var7 = var8.bind(var5)(var7, var4);
                    var4 = _closure1_slot0;
                    var3 = 2;
                    var4 = var4.bind(var1)(var7, var3);
                    var3 = 1;
                    var3 = var4[var3];
                    _closure3_slot1 = var3;
                    var4 = var5.useEffect;
                    var3 = new Array(1);
                    var3[0] = var6;
                    var2 = function() {
                        var2 = global;
                        var5 = var2.setInterval;
                        var4 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        var2 = var5.bind(var2)(var4, var3);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearInterval;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var4.bind(var5)(var2, var3);
                    return var1;
                }
            };
            var2 = 100;
            var2 = var4.bind(var6)(var2);
            var2 = 0;
            if(!(var2 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = 1;
            var2 = var2 === var3;
            if(!var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = null;
            var3 = var3 != var5;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = global;
            var6 = var4.Date;
            var4 = var6.now;
            var4 = var4.bind(var6)();
            var5 = var4 - var5;
            var4 = 3000;
            var3 = var5 >= var4;
case 14:
            var2 = var3;
case 12:
            var1 = var2;
case 10:
            return var1;
        }
    };
    var5['useIsStepCompleted'] = var8;
    var8 = 'Complete';
    var5['completedTitle'] = var8;
    var8 = 'Thanks for your feedback! Press Done to conclude this session and upload your recording.';
    var5['completedInstructions'] = var8;
    var8 = {'featureName': 'ICYMI', 'squadName': 'In case you missed it', 'reportTitle': 'Screen Recording Test', 'reportDescription': 'test of user testing', 'successTitle': 'Survey result uploaded', 'successMessage': 'Thanks for your feedback! The ICYMI team appreciates your help.', 'priority': 2};
    var5['uploadConfig'] = var8;
    var4['icymi'] = var5;
    var _closure1_slot3 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/screen_recording/native/StudyConfig.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SURVEY_CONFIGS'] = var4;
    var4 = function getSurveyConfig(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = _closure1_slot3;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['getSurveyConfig'] = var4;
    var4 = function getSurveyConfigSafe(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var3 = var2 == var4;
            var1 = null;
            if(var3) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var3 = '';
            var1 = null;
            if(!(var3 !== var4)) { _fun0005_ip = 18; continue _fun0005 }
case 20:
            var3 = _closure1_slot3;
            var3 = var3[var4];
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var2 = var3;
case 21:
            var1 = var2;
case 18:
            return var1;
        }
    };
    var3['getSurveyConfigSafe'] = var4;
    var2 = function getAvailableSurveys() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot3;
        var3 = var2.bind(var3)(var1);
        var2 = var3.filter;
        var1 = function(arg1) {
            var2 = arg1;
            var1 = var2.predicate;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getAvailableSurveys'] = var2;
    return var1;
})();
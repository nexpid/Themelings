// app/modules/qualtrics/QualtricsResponseStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var4 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var7)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var2);
    var4 = var7.create;
    var2 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var3 = {};
        var1['responses'] = var3;
        var3 = {};
        var1['displayedQuestions'] = var3;
        var3 = function setResponse(arg1, arg2, arg3) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var1 = arg3;
            var _closure3_slot2 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                var6 = arg1;
                var1 = {};
                var2 = {};
                var7 = var6.responses;
                var8 = var2;
                var3 = copyDataProperties(var8, var7);
                var4 = _closure3_slot0;
                var3 = {};
                var6 = var6.responses;
                var7 = var6[var4];
                var8 = var3;
                var6 = copyDataProperties(var8, var7);
                var6 = _closure3_slot1;
                var5 = _closure3_slot2;
                var3[var6] = var5;
                var2[var4] = var3;
                var1['responses'] = var2;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['setResponse'] = var3;
        var3 = function getSurveyResponses(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = var1.responses;
                var1 = arg1;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = {};
case 2:
                return var1;
            }
        };
        var1['getSurveyResponses'] = var3;
        var3 = function clearSurveyResponses(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                var4 = arg1;
                var3 = {};
                var5 = var4.responses;
                var6 = var3;
                var1 = copyDataProperties(var6, var5);
                var1 = _closure3_slot0;
                var2 = delete var3[var1];
                var2 = {};
                var5 = var4.displayedQuestions;
                var6 = var2;
                var4 = copyDataProperties(var6, var5);
                var1 = delete var2[var1];
                var1 = {};
                var1['responses'] = var3;
                var1['displayedQuestions'] = var2;
                return var1;
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['clearSurveyResponses'] = var3;
        var3 = function trackDisplayedQuestions(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var4 = var5.displayedQuestions;
                    var2 = _closure3_slot0;
                    var6 = var4[var2];
                    var2 = null;
                    if(!(var2 == var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = global;
                    var2 = var2.Set;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var9 = var4;
                    var2 = new var9[var2](var8);
                    var6 = var2 instanceof Object ? var2 : var4;
case 4:
                    var2 = global;
                    var2 = var2.Set;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var9 = var4;
                    var8 = var6;
                    var2 = new var9[var2](var8, var7);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var _closure4_slot0 = var4;
                    var6 = _closure3_slot1;
                    var2 = var6.forEach;
                    var1 = function(arg1) {
                        var3 = _closure4_slot0;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var6)(var1);
                    var1 = {};
                    var2 = {};
                    var7 = var5.displayedQuestions;
                    var8 = var2;
                    var5 = copyDataProperties(var8, var7);
                    var3 = _closure3_slot0;
                    var2[var3] = var4;
                    var1['displayedQuestions'] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['trackDisplayedQuestions'] = var3;
        var2 = function getDisplayedQuestions(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var2 = var1.displayedQuestions;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                if(!(var1 == var4)) { _fun0003_ip = 6; continue _fun0003 }
case 3:
                var1 = new Array(0);
                _fun0003_ip = 4; continue _fun0003;
case 6:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.from;
                var1 = var2.bind(var3)(var4);
case 4:
                return var1;
            }
        };
        var1['getDisplayedQuestions'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/qualtrics/QualtricsResponseStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['useQualtricsResponseStore'] = var2;
    return var1;
})();
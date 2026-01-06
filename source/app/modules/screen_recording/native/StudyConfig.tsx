// app/modules/screen_recording/native/StudyConfig.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = {};
    var _closure1_slot0 = var4;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/screen_recording/native/StudyConfig.tsx';
    var5 = var6.bind(var7)(var5);
    var3['SURVEY_CONFIGS'] = var4;
    var4 = function getSurveyConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot0;
            var1 = arg1;
            var2 = var2[var1];
            var1 = null;
            var3 = var1 != var2;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var3['getSurveyConfig'] = var4;
    var4 = function getSurveyConfigSafe(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = null;
            var3 = var2 == var4;
            var1 = null;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = '';
            var1 = null;
            if(!(var3 !== var4)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
            var3 = _closure1_slot0;
            var3 = var3[var4];
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var2 = var3;
case 7:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getSurveyConfigSafe'] = var4;
    var2 = function getAvailableSurveys() {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.values;
        var1 = _closure1_slot0;
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
// app/modules/feedback/StreamSurveyTaxonomyRefreshExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var11 = {};
    var1 = false;
    var11['showRefreshedStreamTaxonomy'] = var1;
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'kind': 'user', 'id': '2025-07_stream_survey_taxonomy_refresh', 'label': 'Stream survey taxonomy refresh'};
    var4['defaultConfig'] = var11;
    var10 = {'id': 1, 'label': 'Show refreshed stream taxonomy'};
    var9 = {};
    var15 = var9;
    var14 = var11;
    var11 = copyDataProperties(var15, var14);
    var11 = 'showRefreshedStreamTaxonomy';
    var9[var11] = var12;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/feedback/StreamSurveyTaxonomyRefreshExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getStreamSurveyTaxonomyRefreshExperimentConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var7 = var3.AVHoldoutExperimentH22025;
            var6 = var7.getCurrentConfig;
            var4 = {};
            var4['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var5;
            var3 = var6.bind(var7)(var4, var3);
            var6 = var3.isInHoldout;
            var4 = _closure1_slot2;
            var3 = var4.getCurrentConfig;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['disable'] = var6;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getStreamSurveyTaxonomyRefreshExperimentConfig'] = var4;
    var2 = function useStreamSurveyTaxonomyRefreshExperiment(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.location;
            var5 = var2.autoTrackExposure;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var5 = true;
case 2:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var3 = var4.bind(var6)(var3);
            var7 = var3.AVHoldoutExperimentH22025;
            var6 = var7.useExperiment;
            var4 = {};
            var4['location'] = var1;
            var3 = {};
            var3['autoTrackExposure'] = var5;
            var3 = var6.bind(var7)(var4, var3);
            var6 = var3.isInHoldout;
            var4 = _closure1_slot2;
            var3 = var4.useExperiment;
            var2 = {};
            var2['location'] = var1;
            var1 = {};
            var1['disable'] = var6;
            var1['autoTrackExposure'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['useStreamSurveyTaxonomyRefreshExperiment'] = var2;
    return var1;
})();
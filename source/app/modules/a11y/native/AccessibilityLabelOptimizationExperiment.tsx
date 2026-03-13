// app/modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var8 = var6.bind(var1)(var4);
    var5 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-03-mobile-accessibility-label-optimization'};
    var9 = {'enabled': false, 'shouldTrackExposure': false};
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {'enabled': true, 'shouldTrackExposure': true};
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var8 = var4.getConfig;
    var5 = {};
    var9 = 'default';
    var5['location'] = var9;
    var5 = var8.bind(var4)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/a11y/native/AccessibilityLabelOptimizationExperiment.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function shouldSkipAccessibilityLabels() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot3;
            var1 = var1.shouldTrackExposure;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
            var3 = var4.getConfig;
            var1 = {};
            var5 = 'live';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
case 2:
            var1 = _closure1_slot3;
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.getIsScreenReaderEnabled;
            var2 = var2.bind(var3)();
            var1 = !var2;
case 4:
            return var1;
        }
    };
    var3['shouldSkipAccessibilityLabels'] = var2;
    return var1;
})();
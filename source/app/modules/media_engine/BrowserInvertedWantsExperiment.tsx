// app/modules/media_engine/BrowserInvertedWantsExperiment.tsx
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
    var11 = true;
    var4['value'] = var11;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var7 = var5.bind(var1)(var4);
    var4 = var7.getFirefoxVersion;
    var7 = var4.bind(var7)();
    var4 = -1;
    var4 = var4 !== var7;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'kind': 'user', 'name': '2026-03-browser-inverted-wants'};
    var9 = {};
    var10 = false;
    var9['invertWants'] = var10;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['invertWants'] = var11;
    var9[1] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_engine/BrowserInvertedWantsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getBrowserInvertedWantsConfig(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.isDesktop;
            var2 = var2.bind(var3)();
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot2;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = _closure1_slot3;
            var2 = var3.getConfig;
            var1 = {};
            var4 = arg1;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            _fun0001_ip = 5; continue _fun0001;
case 2:
            var2 = {};
            var3 = false;
            var2['invertWants'] = var3;
            var1 = var2;
case 5:
            return var1;
        }
    };
    var3['getBrowserInvertedWantsConfig'] = var2;
    return var1;
})();
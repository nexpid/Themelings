// app/modules/clips/ClipsV3RuntimeExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var4 = function isClipsV3Enabled(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.getConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableClipsV3;
        return var1;
    };
    var _closure1_slot2 = var4;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var9 = var7.bind(var1)(var5);
    var6 = var9.createApexExperiment;
    var5 = {'kind': 'user', 'name': '2026-04-clips-v3-runtime'};
    var10 = {'enableClipsV3': false, 'enableClipsV3ML': false};
    var5['defaultConfig'] = var10;
    var10 = {};
    var11 = {'enableClipsV3': true, 'enableClipsV3ML': false};
    var10[1] = var11;
    var11 = {'enableClipsV3': true, 'enableClipsV3ML': true};
    var10[2] = var11;
    var5['variations'] = var10;
    var5 = var6.bind(var9)(var5);
    var _closure1_slot0 = var5;
    var6 = null;
    var _closure1_slot1 = var6;
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/clips/ClipsV3RuntimeExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['ClipsV3RuntimeExperiment'] = var5;
    var3['isClipsV3Enabled'] = var4;
    var4 = function useIsClipsV3Enabled(arg1) {
        var3 = _closure1_slot0;
        var2 = var3.useConfig;
        var1 = {};
        var4 = arg1;
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var1 = var1.enableClipsV3;
        return var1;
    };
    var3['useIsClipsV3Enabled'] = var4;
    var4 = function setActiveClipsRuntime(arg1) {
        var1 = arg1;
        _closure1_slot1 = var1;
        var1 = undefined;
        return var1;
    };
    var3['setActiveClipsRuntime'] = var4;
    var4 = function getClipsRuntime(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot1;
            var1 = null;
            if(!(var1 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot2;
            var3 = undefined;
            var1 = arg1;
            var3 = var4.bind(var3)(var1);
            var1 = 'v1';
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1 = 'v3';
case 4:
            _fun0001_ip = 6; continue _fun0001;
case 2:
            var1 = _closure1_slot1;
case 6:
            return var1;
        }
    };
    var3['getClipsRuntime'] = var4;
    var4 = function isClipsV3MLEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = var3.getConfig;
            var1 = {};
            var4 = arg1;
            var1['location'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = var2.enableClipsV3;
            var2 = var2.enableClipsV3ML;
            if(!var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['isClipsV3MLEnabled'] = var4;
    var2 = function useIsClipsV3MLEnabled(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot0;
            var2 = var3.useConfig;
            var1 = {};
            var4 = arg1;
            var1['location'] = var4;
            var2 = var2.bind(var3)(var1);
            var1 = var2.enableClipsV3;
            var2 = var2.enableClipsV3ML;
            if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = var2;
case 7:
            return var1;
        }
    };
    var3['useIsClipsV3MLEnabled'] = var2;
    return var1;
})();
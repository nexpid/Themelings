// app/modules/media_uploads/experiments/KestrelExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2026-04-kestrel', 'kind': 'user'};
    var9 = {'enabled': false, 'threshold': 0};
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {'enabled': false, 'threshold': 0};
    var9[0] = var10;
    var10 = {'enabled': true, 'threshold': 15};
    var9[1] = var10;
    var10 = {'enabled': true, 'threshold': 20};
    var9[2] = var10;
    var10 = {'enabled': true, 'threshold': 25};
    var9[3] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/experiments/KestrelExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getKestrelConfig(arg1) {
        var1 = arg1;
        var4 = var1.location;
        var3 = _closure1_slot0;
        var2 = var3.getConfig;
        var1 = {};
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['getKestrelConfig'] = var4;
    var4 = function getEffectiveKestrelLimit(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = var2.enabled;
            var1 = var5;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var4 = var3.Math;
            var3 = var4.max;
            var6 = var2.threshold;
            var2 = 1048576;
            var2 = var2 * var6;
            var1 = var3.bind(var4)(var2, var5);
case 2:
            return var1;
        }
    };
    var3['getEffectiveKestrelLimit'] = var4;
    var2 = function getKestrelVariantName(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var2 = var4.enabled;
            var1 = 'control';
            if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = var4.threshold;
            var2 = 'kestrel_a';
            var3 = 15;
            if(!(var3 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var4.threshold;
            var3 = 'kestrel_b';
            var5 = 20;
            if(!(var5 !== var6)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var6 = var4.threshold;
            var4 = 'unknown';
            var5 = 25;
            if(!(var5 === var6)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = 'kestrel_c';
case 10:
            var3 = var4;
case 8:
            var2 = var3;
case 6:
            var1 = var2;
case 4:
            return var1;
        }
    };
    var3['getKestrelVariantName'] = var2;
    return var1;
})();
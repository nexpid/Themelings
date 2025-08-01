// app/modules/perceptual_volume/PerceptualVolumeUtils.tsx
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
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/perceptual_volume/PerceptualVolumeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function perceptualToAmplitude(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0001_ip = 15; continue _fun0001 }
 12:
            var3 = 100;
 15:
            var1 = 0;
            if(!(var1 !== var2)) { _fun0001_ip = 111; continue _fun0001 }
 21:
            var7 = var2 / var3;
            var2 = 1;
            if(!(!(var7 < var2))) { _fun0001_ip = 75; continue _fun0001 }
 32:
            var4 = global;
            var6 = var4.Math;
            var5 = var6.pow;
            var8 = var7 - var2;
            var4 = 10;
            var2 = 6;
            var8 = var2 * var8;
            var2 = 20;
            var2 = var8 / var2;
            var2 = var5.bind(var6)(var4, var2);
            _fun0001_ip = 105; continue _fun0001;
 75:
            var4 = global;
            var6 = var4.Math;
            var5 = var6.pow;
            var4 = 2.8;
            var2 = var5.bind(var6)(var7, var4);
 105:
            var2 = var2 * var3;
            return var2;
 111:
            return var1;
        }
    };
    var3['perceptualToAmplitude'] = var4;
    var2 = function amplitudeToPerceptual(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 15; continue _fun0002 }
 12:
            var3 = 100;
 15:
            var1 = 0;
            if(!(var1 !== var2)) { _fun0002_ip = 107; continue _fun0002 }
 21:
            var7 = var2 / var3;
            var4 = 1;
            if(!(!(var7 < var4))) { _fun0002_ip = 71; continue _fun0002 }
 32:
            var2 = global;
            var5 = var2.Math;
            var2 = var5.log10;
            var5 = var2.bind(var5)(var7);
            var2 = 20;
            var5 = var2 * var5;
            var2 = 6;
            var2 = var5 / var2;
            var2 = var2 + var4;
            _fun0002_ip = 101; continue _fun0002;
 71:
            var4 = global;
            var6 = var4.Math;
            var5 = var6.pow;
            var4 = 0.35714285714285715;
            var2 = var5.bind(var6)(var7, var4);
 101:
            var2 = var2 * var3;
            return var2;
 107:
            return var1;
        }
    };
    var3['amplitudeToPerceptual'] = var2;
    return var1;
})();
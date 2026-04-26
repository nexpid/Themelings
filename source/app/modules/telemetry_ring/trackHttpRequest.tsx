// app/modules/telemetry_ring/trackHttpRequest.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/telemetry_ring/trackHttpRequest.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackHttpRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var6 = {};
            var9 = var6;
            var8 = var1;
            var2 = copyDataProperties(var9, var8);
            var4 = var1.url;
            var1 = null;
            var2 = var4;
            if(!(var1 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var4.split;
            var1 = /[?#]/;
            var3 = var3.bind(var4)(var1);
            var1 = 0;
            var5 = var3[var1];
            var4 = var5.replace;
            var3 = /\d+/g;
            var1 = '#';
            var2 = var4.bind(var5)(var3, var1);
case 2:
            var1 = 'url';
            var6[0] = var2;
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 2;
            var3 = var7[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var3 = var3.bind(var1)(var6);
            var3 = global;
            var4 = var3.Math;
            var3 = var4.random;
            var4 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var3 = 1;
            var3 = var7[var3];
            var5 = var5.bind(var1)(var3);
            var3 = var5.getHttpRequestSampleRate;
            var3 = var3.bind(var5)();
            if(!(var4 < var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 3;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.track;
            var2 = _closure1_slot3;
            var3 = var2.HTTP_REQUEST;
            var2 = {};
            var9 = var2;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var7 = 'sample';
            var6 = 'source';
            var2[5] = var7;
            var2 = var4.bind(var5)(var3, var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
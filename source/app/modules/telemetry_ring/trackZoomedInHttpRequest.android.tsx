// app/modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/telemetry_ring/trackZoomedInHttpRequest.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function trackZoomedInHttpRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
case 2: // try_start_0
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.append;
            var1 = _closure1_slot2;
            var2 = var1.HTTP_REQUEST;
            var1 = {};
            var7 = var5;
            var8 = var1;
            var5 = copyDataProperties(var8, var7);
            var6 = 'zoomed_in';
            var5 = 'source';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=0);
case 4:
            var1 = undefined;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
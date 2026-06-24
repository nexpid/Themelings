// app/modules/devtools/native/components/screens/performance/startFrameMonitor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var2 = dependencyMap;
    var1 = 0;
    var4 = var2[var1];
    var2 = require;
    var1 = undefined;
    var5 = var2.bind(var1)(var4);
    var4 = var5.fileFinishedImporting;
    var2 = 'modules/devtools/native/components/screens/performance/startFrameMonitor.tsx';
    var2 = var4.bind(var5)(var2);
    var2 = 16.666666666666668;
    var3['FRAME_BUDGET_MS'] = var2;
    var2 = function startFrameMonitor() {
        var4 = 0;
        var _closure2_slot0 = var4;
        var1 = global;
        var5 = var1.performance;
        var3 = var5.now;
        var3 = var3.bind(var5)();
        var _closure2_slot1 = var3;
        var3 = false;
        var _closure2_slot2 = var3;
        var _closure2_slot3 = var4;
        var _closure2_slot4 = var4;
        var _closure2_slot5 = var4;
        var _closure2_slot6 = var4;
        var _closure2_slot7 = var3;
        var4 = var1.requestAnimationFrame;
        var3 = function tick() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = global;
                var3 = var1.performance;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var4 = _closure2_slot2;
                if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = true;
                _closure2_slot2 = var4;
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var4 = _closure2_slot1;
                var6 = var2 - var4;
                var4 = _closure2_slot3;
                var5 = 1;
                var4 = var4 + var5;
                _closure2_slot3 = var4;
                var4 = _closure2_slot6;
                var4 = var4 + var6;
                _closure2_slot6 = var4;
                var4 = _closure2_slot5;
                if(!(var6 > var4)) { _fun0001_ip = 5; continue _fun0001 }
case 6:
                _closure2_slot5 = var6;
case 5:
                var4 = 16.666666666666668;
                if(!(var6 > var4)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
                var4 = _closure2_slot4;
                var4 = var4 + var5;
                _closure2_slot4 = var4;
case 4:
                _closure2_slot1 = var2;
                var4 = var1.requestAnimationFrame;
                var2 = _closure2_slot8;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                _closure2_slot0 = var2;
                return var1;
            }
        };
        var _closure2_slot8 = var3;
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        _closure2_slot0 = var1;
        var1 = {};
        var2 = function stop() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot7;
                if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 8:
                var1 = global;
                var4 = var1.cancelAnimationFrame;
                var3 = _closure2_slot0;
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = true;
                _closure2_slot7 = var1;
case 2:
                var1 = {};
                var3 = _closure2_slot3;
                var1['frames'] = var3;
                var3 = _closure2_slot4;
                var1['dropped'] = var3;
                var4 = _closure2_slot3;
                var3 = 0;
                var4 = var4 > var3;
                if(!var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var5 = _closure2_slot6;
                var4 = _closure2_slot3;
                var3 = var5 / var4;
case 9:
                var1['meanMs'] = var3;
                var2 = _closure2_slot5;
                var1['worstMs'] = var2;
                return var1;
            }
        };
        var1['stop'] = var2;
        return var1;
    };
    var3['startFrameMonitor'] = var2;
    return var1;
})();
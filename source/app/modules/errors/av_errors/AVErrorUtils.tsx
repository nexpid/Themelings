// app/modules/errors/av_errors/AVErrorUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Millis;
    var7 = var4.SECOND;
    var4 = 10;
    var4 = var4 * var7;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/errors/av_errors/AVErrorUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function getReportInboundErrors() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 2;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var3 = var1.WindowVisibilityVideoManager;
            var1 = var3.isIncomingVideoEnabled;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = global;
            var4 = var3.performance;
            var3 = var4.now;
            var4 = var3.bind(var4)();
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var5 = var3.WindowVisibilityVideoManager;
            var3 = var5.lastIncomingVideoEnabledChangeTime;
            var3 = var3.bind(var5)();
            var3 = var4 - var3;
            var2 = _closure1_slot3;
            var1 = var3 > var2;
case 2:
            return var1;
        }
    };
    var3['getReportInboundErrors'] = var4;
    var4 = function getAccumulatedStatsWithMinDatapoints(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var5 = arg2;
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var6 = 15;
case 4:
            var3 = _closure1_slot2;
            var2 = var3.getAccumulatedPerformanceStats;
            var1 = 'short';
            var4 = var2.bind(var3)(var7, var5, var1);
            var2 = var3.getAccumulatedPerformanceStats;
            var1 = 'long';
            var3 = var2.bind(var3)(var7, var5, var1);
            var5 = null;
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var5 == var3;
            var1 = null;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = var4.numDatapoints;
            var2 = var2 < var6;
            var1 = null;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 9:
            var2 = var3.numDatapoints;
            var2 = var2 < var6;
            var1 = null;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 10:
            var2 = {};
            var2['short'] = var4;
            var2['long'] = var3;
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['getAccumulatedStatsWithMinDatapoints'] = var4;
    var2 = function getWarningFrameRate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var5 = 30;
case 11:
            var1 = 5;
            var2 = var5 <= var1;
            var1 = 3;
            if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = 15;
            var3 = var5 <= var4;
            var2 = 8;
            if(var3) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = 30;
            var5 = var5 <= var3;
            if(!var5) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = var4;
case 17:
            var2 = var3;
case 15:
            var1 = var2;
case 13:
            return var1;
        }
    };
    var3['getWarningFrameRate'] = var2;
    return var1;
})();
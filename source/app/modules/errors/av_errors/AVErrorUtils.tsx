// app/modules/errors/av_errors/AVErrorUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
            var3 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 2;
            var1 = var1[var7];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var3 = var1.WindowVisibilityVideoManager;
            var1 = var3.isIncomingVideoEnabled;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0001_ip = 108; continue _fun0001 }
 44:
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
 108:
            return var1;
        }
    };
    var3['getReportInboundErrors'] = var4;
    var4 = function getAccumulatedStatsWithMinDatapoints(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var7 = arg1;
            var5 = arg2;
            var6 = arguments[2];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0002_ip = 18; continue _fun0002 }
 15:
            var6 = 15;
 18:
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
            if(var2) { _fun0002_ip = 124; continue _fun0002 }
 70:
            var2 = var5 == var3;
            var1 = null;
            if(var2) { _fun0002_ip = 124; continue _fun0002 }
 79:
            var2 = var4.numDatapoints;
            var2 = var2 < var6;
            var1 = null;
            if(var2) { _fun0002_ip = 124; continue _fun0002 }
 94:
            var2 = var3.numDatapoints;
            var2 = var2 < var6;
            var1 = null;
            if(var2) { _fun0002_ip = 124; continue _fun0002 }
 109:
            var2 = {};
            var2['short'] = var4;
            var2['long'] = var3;
            var1 = var2;
 124:
            return var1;
        }
    };
    var3['getAccumulatedStatsWithMinDatapoints'] = var4;
    var2 = function getWarningFrameRate() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arguments[0];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0003_ip = 12; continue _fun0003 }
 9:
            var5 = 30;
 12:
            var1 = 5;
            var2 = var5 <= var1;
            var1 = 3;
            if(var2) { _fun0003_ip = 57; continue _fun0003 }
 25:
            var4 = 15;
            var3 = var5 <= var4;
            var2 = 8;
            if(var3) { _fun0003_ip = 54; continue _fun0003 }
 38:
            var3 = 30;
            var5 = var5 <= var3;
            if(!var5) { _fun0003_ip = 51; continue _fun0003 }
 48:
            var3 = var4;
 51:
            var2 = var3;
 54:
            var1 = var2;
 57:
            return var1;
        }
    };
    var3['getWarningFrameRate'] = var2;
    return var1;
})();
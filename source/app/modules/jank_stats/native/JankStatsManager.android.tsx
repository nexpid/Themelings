// app/modules/jank_stats/native/JankStatsManager.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.AppStates;
    var _closure1_slot8 = var8;
    var4 = var4.AnalyticEvents;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function JankStatsManager(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var5 = this;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var8 = _closure1_slot3;
                var2 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var5, var2);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot10;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 86; continue _fun0002 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0002_ip = 120; continue _fun0002;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var2.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = null;
                var1['_timeoutId'] = var2;
                var2 = false;
                var1['_isScheduledReportSent'] = var2;
                var2 = true;
                var1['_isStartup'] = var2;
                var2 = {};
                var4 = function APP_STATE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleAppStateUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2['APP_STATE_UPDATE'] = var4;
                var3 = function CONNECTION_OPEN_SUPPLEMENTAL() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpenSupplemental;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var2['CONNECTION_OPEN_SUPPLEMENTAL'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'handleAppStateUpdate';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = this;
                var1 = arg1;
                var2 = var1.state;
                var4 = _closure1_slot8;
                var4 = var4.ACTIVE;
                if(!(var2 === var4)) { _fun0003_ip = 49; continue _fun0003 }
 28:
                var4 = var3._isStartup;
                if(var4) { _fun0003_ip = 49; continue _fun0003 }
 37:
                var4 = var3.scheduleReport;
                var4 = var4.bind(var3)();
                _fun0003_ip = 119; continue _fun0003;
 49:
                var1 = _closure1_slot8;
                var1 = var1.BACKGROUND;
                var1 = var2 !== var1;
                if(var1) { _fun0003_ip = 72; continue _fun0003 }
 66:
                var1 = var3._isScheduledReportSent;
 72:
                if(var1) { _fun0003_ip = 119; continue _fun0003 }
 75:
                var1 = global;
                var4 = var1.clearTimeout;
                var2 = var3._timeoutId;
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var1 = null;
                var3['_timeoutId'] = var1;
                var2 = var3.sendReport;
                var1 = 'background';
                var1 = var2.bind(var3)(var1);
 119:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'handleConnectionOpenSupplemental';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = global;
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                var2 = _closure3_slot0;
                var3 = var2.sendReport;
                var1 = 'startup';
                var1 = var3.bind(var2)(var1);
                var1 = false;
                var2['_isStartup'] = var1;
                var1 = var2.scheduleReport;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2 = 0;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'scheduleReport';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var4 = var2._timeoutId;
                var3 = null;
                if(!(var3 == var4)) { _fun0004_ip = 64; continue _fun0004 }
 21:
                var3 = false;
                var2['_isScheduledReportSent'] = var3;
                var3 = global;
                var5 = var3.setTimeout;
                var4 = undefined;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var2 = _closure3_slot0;
                        var5 = null;
                        var2['_timeoutId'] = var5;
                        var3 = var2.sendReport;
                        var1 = 'timer';
                        var1 = var3.bind(var2)(var1);
                        var1 = true;
                        var2['_isScheduledReportSent'] = var1;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var4 = 6;
                        var3 = var1[var4];
                        var1 = undefined;
                        var3 = var6.bind(var1)(var3);
                        if(!(var5 != var3)) { _fun0005_ip = 94; continue _fun0005 }
 67:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var2 = var2[var4];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.stopTracking;
                        var2 = var2.bind(var3)();
 94:
                        return var1;
                    }
                };
                var1 = 300000;
                var1 = var5.bind(var4)(var3, var1);
                var2['_timeoutId'] = var1;
 64:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'sendReport';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var5 = 6;
                var2 = var1[var5];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = null;
                var3 = var2 == var3;
                var6 = undefined;
                if(var3) { _fun0006_ip = 63; continue _fun0006 }
 36:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var4 = var4.bind(var1)(var3);
                var3 = var4.requestReport;
                var6 = var3.bind(var4)();
 63:
                var2 = var2 != var6;
                if(!var2) { _fun0006_ip = 82; continue _fun0006 }
 70:
                var4 = var6.totalFrameCount;
                var3 = 0;
                var2 = var3 !== var4;
 82:
                if(!var2) { _fun0006_ip = 224; continue _fun0006 }
 88:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 7;
                var2 = var9[var2];
                var5 = var3.bind(var1)(var2);
                var4 = var5.track;
                var2 = _closure1_slot9;
                var3 = var2.ANDROID_JANK_STATS;
                var2 = {};
                var8 = _closure1_slot0;
                var7 = 8;
                var7 = var9[var7];
                var8 = var8.bind(var1)(var7);
                var7 = var8.getDeviceMetadata;
                var10 = var7.bind(var8)();
                var11 = var2;
                var7 = copyDataProperties(var11, var10);
                var8 = 1;
                var7 = 'version';
                var2[var7] = var8;
                var8 = var6.totalFrameCount;
                var7 = 'total_frame_count';
                var2[var7] = var8;
                var7 = var6.jankFrameCount;
                var6 = 'jank_frame_count';
                var2[var6] = var7;
                var7 = arg1;
                var6 = 'trigger';
                var2[var6] = var7;
                var2 = var4.bind(var5)(var3, var2);
 224:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/jank_stats/native/JankStatsManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
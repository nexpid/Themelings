// app/modules/video_player/useVideoSegmentAnalytics.tsx
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
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var8 = var6[var4];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useRef;
    var _closure1_slot4 = var7;
    var7 = var4.useCallback;
    var _closure1_slot5 = var7;
    var4 = var4.useEffect;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_player/useVideoSegmentAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVideoSegmentAnalytics(arg1) {
        var1 = arg1;
        var3 = var1.getCurrentVideoTime;
        var _closure2_slot0 = var3;
        var6 = var1.onAnalytics;
        var _closure2_slot1 = var6;
        var15 = var1.emitIntervalMs;
        var _closure2_slot2 = var15;
        var10 = var1.minSegmentDurationMs;
        var _closure2_slot3 = var10;
        var18 = _closure1_slot3;
        var1 = var18.useState;
        var7 = null;
        var1 = var1.bind(var18)(var7);
        var17 = _closure1_slot2;
        var5 = undefined;
        var16 = 2;
        var1 = var17.bind(var5)(var1, var16);
        var12 = 0;
        var8 = var1[var12];
        var _closure2_slot4 = var8;
        var11 = 1;
        var1 = var1[var11];
        var _closure2_slot5 = var1;
        var1 = var18.useState;
        var4 = false;
        var1 = var1.bind(var18)(var4);
        var1 = var17.bind(var5)(var1, var16);
        var14 = var1[var12];
        var _closure2_slot6 = var14;
        var1 = var1[var11];
        var _closure2_slot7 = var1;
        var1 = var18.useState;
        var1 = var1.bind(var18)(var4);
        var1 = var17.bind(var5)(var1, var16);
        var13 = var1[var12];
        var _closure2_slot8 = var13;
        var1 = var1[var11];
        var _closure2_slot9 = var1;
        var1 = var18.useState;
        var1 = var1.bind(var18)(var4);
        var1 = var17.bind(var5)(var1, var16);
        var12 = var1[var12];
        var _closure2_slot10 = var12;
        var1 = var1[var11];
        var _closure2_slot11 = var1;
        var1 = _closure1_slot4;
        var7 = var1.bind(var5)(var7);
        var _closure2_slot12 = var7;
        var7 = global;
        var11 = var7.Date;
        var7 = var11.now;
        var7 = var7.bind(var11)();
        var7 = var1.bind(var5)(var7);
        var _closure2_slot13 = var7;
        var4 = var1.bind(var5)(var4);
        var _closure2_slot14 = var4;
        var4 = _closure1_slot5;
        var7 = new Array(1);
        var7[0] = var6;
        var6 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var1 = arg1;
                var3 = var1.segmentEndSec;
                var2 = var1.segmentStartSec;
                if(!(!(var3 < var2))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var2 = {};
                var4 = var1.startTimeMs;
                var2['start_time'] = var4;
                var4 = var1.endTimeMs;
                var2['end_time'] = var4;
                var5 = var1.endTimeMs;
                var4 = var1.startTimeMs;
                var4 = var5 - var4;
                var2['duration'] = var4;
                var4 = var1.segmentStartSec;
                var2['segment_start_sec'] = var4;
                var4 = var1.segmentEndSec;
                var2['segment_end_sec'] = var4;
                var4 = var1.segmentEndSec;
                var1 = var1.segmentStartSec;
                var1 = var4 - var1;
                var2['segment_duration_sec'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var4.bind(var5)(var6, var7);
        var _closure2_slot15 = var7;
        var11 = new Array(3);
        var11[0] = var3;
        var11[1] = var13;
        var11[2] = var12;
        var6 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                var5 = var3.bind(var1)();
                var3 = null;
                if(!(var3 != var5)) { _fun0002_ip = 4; continue _fun0002 }
case 3:
                var3 = _closure2_slot8;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure2_slot10;
                if(!var3) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var6 = var3.bind(var4)();
                var4 = _closure2_slot5;
                var3 = {};
                var3['startTimeMs'] = var6;
                var3['endTimeMs'] = var6;
                var3['segmentStartSec'] = var5;
                var3['segmentEndSec'] = var5;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot14;
                var2 = true;
                var3['current'] = var2;
case 4:
                return var1;
            }
        };
        var6 = var4.bind(var5)(var6, var11);
        var _closure2_slot16 = var6;
        var11 = new Array(5);
        var11[0] = var8;
        var11[1] = var7;
        var11[2] = var15;
        var11[3] = var10;
        var11[4] = var3;
        var10 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                var6 = var3.bind(var1)();
                var4 = null;
                if(!(var4 != var6)) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                var3 = _closure2_slot4;
                if(!(var4 != var3)) { _fun0003_ip = 7; continue _fun0003 }
case 6:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = _closure2_slot13;
                var4 = var4.current;
                var5 = var3 - var4;
                var4 = _closure2_slot2;
                var4 = var5 < var4;
                if(var4) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var5 = _closure2_slot4;
                var5 = var5.segmentStartSec;
                var7 = var6 - var5;
                var8 = _closure2_slot3;
                var5 = 1000;
                var5 = var8 / var5;
                var4 = var7 < var5;
case 9:
                if(var4) { _fun0003_ip = 7; continue _fun0003 }
case 11:
                var5 = _closure2_slot15;
                var4 = {};
                var9 = _closure2_slot4;
                var10 = var4;
                var7 = copyDataProperties(var10, var9);
                var7 = 'endTimeMs';
                var4[6] = var3;
                var7 = 'segmentEndSec';
                var4[6] = var6;
                var4 = var5.bind(var1)(var4);
                var5 = _closure2_slot5;
                var4 = {};
                var4['startTimeMs'] = var3;
                var4['endTimeMs'] = var3;
                var4['segmentStartSec'] = var6;
                var4['segmentEndSec'] = var6;
                var4 = var5.bind(var1)(var4);
                var2 = _closure2_slot13;
                var2['current'] = var3;
case 7:
                return var1;
            }
        };
        var11 = var4.bind(var5)(var10, var11);
        var _closure2_slot17 = var11;
        var10 = _closure1_slot6;
        var15 = new Array(2);
        var15[0] = var13;
        var15[1] = var12;
        var9 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot8;
                if(!var2) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                var2 = _closure2_slot10;
case 12:
                if(var2) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var4 = _closure2_slot5;
                var3 = undefined;
                var2 = null;
                var2 = var4.bind(var3)(var2);
                var2 = _closure2_slot14;
                var1 = false;
                var2['current'] = var1;
case 14:
                var1 = undefined;
                return var1;
            }
        };
        var9 = var10.bind(var5)(var9, var15);
        var9 = new Array(8);
        var9[0] = var14;
        var9[1] = var13;
        var9[2] = var12;
        var9[3] = var8;
        var9[4] = var11;
        var9[5] = var7;
        var9[6] = var6;
        var9[7] = var3;
        var6 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure2_slot6;
                if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var3 = _closure2_slot8;
                if(!var3) { _fun0005_ip = 16; continue _fun0005 }
case 3:
                var3 = _closure2_slot10;
                if(var3) { _fun0005_ip = 18; continue _fun0005 }
case 16:
                var3 = _closure2_slot0;
                var7 = undefined;
                var8 = var3.bind(var7)();
                var3 = _closure2_slot4;
                var4 = null;
                if(!(var4 != var3)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                if(!(var4 != var8)) { _fun0005_ip = 19; continue _fun0005 }
case 21:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var9 = var3.bind(var5)();
                var3 = _closure2_slot4;
                var3 = var3.segmentStartSec;
                var5 = var8 - var3;
                var3 = 0.2;
                if(!(var5 > var3)) { _fun0005_ip = 19; continue _fun0005 }
case 22:
                var5 = _closure2_slot15;
                var3 = {};
                var10 = _closure2_slot4;
                var11 = var3;
                var6 = copyDataProperties(var11, var10);
                var6 = 'endTimeMs';
                var3[5] = var9;
                var6 = 'segmentEndSec';
                var3[5] = var8;
                var3 = var5.bind(var7)(var3);
case 19:
                var3 = _closure2_slot5;
                var3 = var3.bind(var7)(var4);
                var5 = _closure2_slot14;
                var3 = false;
                var5['current'] = var3;
                var3 = _closure2_slot12;
                var3 = var3.current;
                if(!(var4 != var3)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var3 = global;
                var6 = var3.clearInterval;
                var3 = _closure2_slot12;
                var5 = var3.current;
                var5 = var6.bind(var7)(var5);
                var3['current'] = var4;
                _fun0005_ip = 23; continue _fun0005;
case 18:
                var3 = _closure2_slot14;
                var3 = var3.current;
                if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var4 = _closure2_slot16;
                var3 = undefined;
                var3 = var4.bind(var3)();
case 25:
                var3 = _closure2_slot12;
                var2 = global;
                var6 = var2.window;
                var5 = var6.setInterval;
                var4 = function() {
                    var2 = _closure2_slot17;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = 200;
                var2 = var5.bind(var6)(var4, var2);
                var3['current'] = var2;
case 23:
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure2_slot12;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                        var3 = global;
                        var5 = var3.clearInterval;
                        var1 = _closure2_slot12;
                        var4 = var1.current;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1['current'] = var2;
case 27:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var6 = var10.bind(var5)(var6, var9);
        var6 = new Array(3);
        var6[0] = var8;
        var6[1] = var7;
        var6[2] = var3;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                var7 = var3.bind(var1)();
                var3 = _closure2_slot4;
                var4 = null;
                if(!(var4 != var3)) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                if(!(var4 != var7)) { _fun0007_ip = 29; continue _fun0007 }
case 31:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var8 = var3.bind(var5)();
                var3 = _closure2_slot4;
                var3 = var3.segmentStartSec;
                var5 = var7 - var3;
                var3 = 0.2;
                if(!(var5 > var3)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var5 = _closure2_slot15;
                var3 = {};
                var9 = _closure2_slot4;
                var10 = var3;
                var6 = copyDataProperties(var10, var9);
                var6 = 'endTimeMs';
                var3[5] = var8;
                var6 = 'segmentEndSec';
                var3[5] = var7;
                var3 = var5.bind(var1)(var3);
case 32:
                var3 = _closure2_slot5;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot14;
                var2 = false;
                var3['current'] = var2;
case 29:
                return var1;
            }
        };
        var3 = var4.bind(var5)(var3, var6);
        var1 = var1.bind(var5)(var3);
        var _closure2_slot18 = var1;
        var1['current'] = var3;
        var1 = {};
        var6 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 2;
                var4 = var1[var5];
                var1 = undefined;
                var4 = var6.bind(var1)(var4);
                var4 = var4.VideoPlayerState;
                var4 = var4.PLAYING;
                if(!(var4 !== var3)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var4 = var4[var5];
                var4 = var6.bind(var1)(var4);
                var4 = var4.VideoPlayerState;
                var4 = var4.PAUSED;
                if(!(var4 !== var3)) { _fun0008_ip = 36; continue _fun0008 }
case 37:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.VideoPlayerState;
                var2 = var2.ENDED;
                if(!(var2 === var3)) { _fun0008_ip = 38; continue _fun0008 }
case 36:
                var4 = _closure2_slot18;
                var3 = var4.current;
                var3 = var3.bind(var4)();
                var3 = _closure2_slot7;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                _fun0008_ip = 38; continue _fun0008;
case 34:
                var3 = _closure2_slot7;
                var2 = true;
                var2 = var3.bind(var1)(var2);
case 38:
                return var1;
            }
        };
        var3 = new Array(0);
        var3 = var4.bind(var5)(var6, var3);
        var1['handlePlayerStateChange'] = var3;
        var6 = function() {
            var3 = _closure2_slot9;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var3 = var4.bind(var5)(var6, var3);
        var1['handleLoadEnd'] = var3;
        var6 = function() {
            var3 = _closure2_slot11;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var3 = new Array(0);
        var3 = var4.bind(var5)(var6, var3);
        var1['handleFirstFrame'] = var3;
        var3 = function() {
            var2 = _closure2_slot18;
            var1 = var2.current;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        var1['handleSeek'] = var2;
        return var1;
    };
    var3['default'] = var2;
    var2 = 4000;
    var3['SEGMENT_ANALYTICS_EMIT_INTERVAL_MS'] = var2;
    var2 = 2000;
    var3['SEGMENT_ANALYTICS_MIN_DURATION_MS'] = var2;
    return var1;
})();
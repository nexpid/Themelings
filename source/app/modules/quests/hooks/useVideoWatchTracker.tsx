// app/modules/quests/hooks/useVideoWatchTracker.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var8 = var6[var4];
    var7 = native4;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot1 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useRef;
    var _closure1_slot2 = var7;
    var7 = var4.useCallback;
    var _closure1_slot3 = var7;
    var4 = var4.useEffect;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/hooks/useVideoWatchTracker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVideoWatchTracker(arg1) {
        var2 = arg1;
        var7 = var2.getCurrentVideoTime;
        var _closure2_slot0 = var7;
        var14 = var2.isPlaying;
        var _closure2_slot1 = var14;
        var13 = var2.isMetadataLoaded;
        var _closure2_slot2 = var13;
        var12 = var2.isInitialSeekComplete;
        var _closure2_slot3 = var12;
        var1 = var2.onAnalytics;
        var _closure2_slot4 = var1;
        var15 = var2.emitIntervalMs;
        var _closure2_slot5 = var15;
        var10 = var2.minSegmentDurationMs;
        var _closure2_slot6 = var10;
        var6 = _closure1_slot1;
        var5 = var6.useState;
        var2 = null;
        var9 = var5.bind(var6)(var2);
        var8 = _closure1_slot0;
        var6 = undefined;
        var5 = 2;
        var8 = var8.bind(var6)(var9, var5);
        var5 = 0;
        var9 = var8[var5];
        var _closure2_slot7 = var9;
        var5 = 1;
        var5 = var8[var5];
        var _closure2_slot8 = var5;
        var5 = _closure1_slot2;
        var2 = var5.bind(var6)(var2);
        var _closure2_slot9 = var2;
        var2 = global;
        var8 = var2.Date;
        var2 = var8.now;
        var2 = var2.bind(var8)();
        var2 = var5.bind(var6)(var2);
        var _closure2_slot10 = var2;
        var2 = false;
        var2 = var5.bind(var6)(var2);
        var _closure2_slot11 = var2;
        var5 = _closure1_slot3;
        var8 = new Array(1);
        var8[0] = var1;
        var1 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var3 = var1.segmentEndSec;
                var2 = var1.segmentStartSec;
                if(!(!(var3 < var2))) { _fun0001_ip = 124; continue _fun0001 }
 19:
                var3 = _closure2_slot4;
                var2 = {};
                var4 = var1.startTime;
                var2['start_time'] = var4;
                var4 = var1.endTime;
                var2['end_time'] = var4;
                var5 = var1.endTime;
                var4 = var1.startTime;
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
 124:
                var1 = undefined;
                return var1;
            }
        };
        var8 = var5.bind(var6)(var1, var8);
        var _closure2_slot12 = var8;
        var11 = new Array(3);
        var11[0] = var7;
        var11[1] = var13;
        var11[2] = var12;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                var5 = var3.bind(var1)();
                var3 = null;
                if(!(var3 != var5)) { _fun0002_ip = 93; continue _fun0002 }
 19:
                var3 = _closure2_slot2;
                if(!var3) { _fun0002_ip = 93; continue _fun0002 }
 26:
                var3 = _closure2_slot3;
                if(!var3) { _fun0002_ip = 93; continue _fun0002 }
 33:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var6 = var3.bind(var4)();
                var4 = _closure2_slot8;
                var3 = {};
                var3['startTime'] = var6;
                var3['endTime'] = var6;
                var3['segmentStartSec'] = var5;
                var3['segmentEndSec'] = var5;
                var3 = var4.bind(var1)(var3);
                var3 = _closure2_slot11;
                var2 = true;
                var3['current'] = var2;
 93:
                return var1;
            }
        };
        var1 = var5.bind(var6)(var1, var11);
        var _closure2_slot13 = var1;
        var11 = new Array(5);
        var11[0] = var9;
        var11[1] = var8;
        var11[2] = var15;
        var11[3] = var10;
        var11[4] = var7;
        var10 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                var6 = var3.bind(var1)();
                var4 = null;
                if(!(var4 != var6)) { _fun0003_ip = 190; continue _fun0003 }
 22:
                var3 = _closure2_slot7;
                if(!(var4 != var3)) { _fun0003_ip = 190; continue _fun0003 }
 33:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = _closure2_slot10;
                var4 = var4.current;
                var5 = var3 - var4;
                var4 = _closure2_slot5;
                var4 = var5 < var4;
                if(var4) { _fun0003_ip = 106; continue _fun0003 }
 74:
                var5 = _closure2_slot7;
                var5 = var5.segmentStartSec;
                var7 = var6 - var5;
                var8 = _closure2_slot6;
                var5 = 1000;
                var5 = var8 / var5;
                var4 = var7 < var5;
 106:
                if(var4) { _fun0003_ip = 190; continue _fun0003 }
 109:
                var5 = _closure2_slot12;
                var4 = {};
                var9 = _closure2_slot7;
                var10 = var4;
                var7 = copyDataProperties(var10, var9);
                var7 = 'endTime';
                var4[var7] = var3;
                var7 = 'segmentEndSec';
                var4[var7] = var6;
                var4 = var5.bind(var1)(var4);
                var5 = _closure2_slot8;
                var4 = {};
                var4['startTime'] = var3;
                var4['endTime'] = var3;
                var4['segmentStartSec'] = var6;
                var4['segmentEndSec'] = var6;
                var4 = var5.bind(var1)(var4);
                var2 = _closure2_slot10;
                var2['current'] = var3;
 190:
                return var1;
            }
        };
        var11 = var5.bind(var6)(var10, var11);
        var _closure2_slot14 = var11;
        var10 = _closure1_slot4;
        var15 = new Array(2);
        var15[0] = var13;
        var15[1] = var12;
        var4 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot2;
                if(!var2) { _fun0004_ip = 14; continue _fun0004 }
 10:
                var2 = _closure2_slot3;
 14:
                if(var2) { _fun0004_ip = 42; continue _fun0004 }
 17:
                var4 = _closure2_slot8;
                var3 = undefined;
                var2 = null;
                var2 = var4.bind(var3)(var2);
                var2 = _closure2_slot11;
                var1 = false;
                var2['current'] = var1;
 42:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var10.bind(var6)(var4, var15);
        var4 = new Array(8);
        var4[0] = var14;
        var4[1] = var13;
        var4[2] = var12;
        var4[3] = var9;
        var4[4] = var11;
        var4[5] = var8;
        var4[6] = var1;
        var4[7] = var7;
        var1 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure2_slot1;
                if(!var3) { _fun0005_ip = 29; continue _fun0005 }
 12:
                var3 = _closure2_slot2;
                if(!var3) { _fun0005_ip = 29; continue _fun0005 }
 19:
                var3 = _closure2_slot3;
                if(var3) { _fun0005_ip = 202; continue _fun0005 }
 29:
                var3 = _closure2_slot0;
                var7 = undefined;
                var8 = var3.bind(var7)();
                var3 = _closure2_slot7;
                var4 = null;
                if(!(var4 != var3)) { _fun0005_ip = 138; continue _fun0005 }
 49:
                if(!(var4 != var8)) { _fun0005_ip = 138; continue _fun0005 }
 53:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var9 = var3.bind(var5)();
                var3 = _closure2_slot7;
                var3 = var3.segmentStartSec;
                var5 = var8 - var3;
                var3 = 0.2;
                if(!(var5 > var3)) { _fun0005_ip = 138; continue _fun0005 }
 98:
                var5 = _closure2_slot12;
                var3 = {};
                var10 = _closure2_slot7;
                var11 = var3;
                var6 = copyDataProperties(var11, var10);
                var6 = 'endTime';
                var3[var6] = var9;
                var6 = 'segmentEndSec';
                var3[var6] = var8;
                var3 = var5.bind(var7)(var3);
 138:
                var3 = _closure2_slot8;
                var3 = var3.bind(var7)(var4);
                var5 = _closure2_slot11;
                var3 = false;
                var5['current'] = var3;
                var3 = _closure2_slot9;
                var3 = var3.current;
                if(!(var4 != var3)) { _fun0005_ip = 264; continue _fun0005 }
 172:
                var3 = global;
                var6 = var3.clearInterval;
                var3 = _closure2_slot9;
                var5 = var3.current;
                var5 = var6.bind(var7)(var5);
                var3['current'] = var4;
                _fun0005_ip = 264; continue _fun0005;
 202:
                var3 = _closure2_slot11;
                var3 = var3.current;
                if(var3) { _fun0005_ip = 224; continue _fun0005 }
 214:
                var4 = _closure2_slot13;
                var3 = undefined;
                var3 = var4.bind(var3)();
 224:
                var3 = _closure2_slot9;
                var2 = global;
                var6 = var2.window;
                var5 = var6.setInterval;
                var4 = function() {
                    var2 = _closure2_slot14;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = 200;
                var2 = var5.bind(var6)(var4, var2);
                var3['current'] = var2;
 264:
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure2_slot9;
                        var3 = var2.current;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 48; continue _fun0006 }
 18:
                        var3 = global;
                        var5 = var3.clearInterval;
                        var1 = _closure2_slot9;
                        var4 = var1.current;
                        var3 = undefined;
                        var3 = var5.bind(var3)(var4);
                        var1['current'] = var2;
 48:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var1 = var10.bind(var6)(var1, var4);
        var1 = {};
        var4 = new Array(3);
        var4[0] = var9;
        var4[1] = var8;
        var4[2] = var7;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = undefined;
                var7 = var3.bind(var1)();
                var3 = _closure2_slot7;
                var4 = null;
                if(!(var4 != var3)) { _fun0007_ip = 133; continue _fun0007 }
 23:
                if(!(var4 != var7)) { _fun0007_ip = 133; continue _fun0007 }
 27:
                var3 = global;
                var5 = var3.Date;
                var3 = var5.now;
                var8 = var3.bind(var5)();
                var3 = _closure2_slot7;
                var3 = var3.segmentStartSec;
                var5 = var7 - var3;
                var3 = 0.2;
                if(!(var5 > var3)) { _fun0007_ip = 112; continue _fun0007 }
 72:
                var5 = _closure2_slot12;
                var3 = {};
                var9 = _closure2_slot7;
                var10 = var3;
                var6 = copyDataProperties(var10, var9);
                var6 = 'endTime';
                var3[var6] = var8;
                var6 = 'segmentEndSec';
                var3[var6] = var7;
                var3 = var5.bind(var1)(var3);
 112:
                var3 = _closure2_slot8;
                var3 = var3.bind(var1)(var4);
                var3 = _closure2_slot11;
                var2 = false;
                var3['current'] = var2;
 133:
                return var1;
            }
        };
        var3 = var5.bind(var6)(var3, var4);
        var1['forceSendCurrentSegment'] = var3;
        var2 = var2.current;
        var1['isInitialized'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AppState;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = new Array(4);
    var7 = -1000;
    var4[0] = var7;
    var7 = -1003;
    var4[1] = var7;
    var7 = -1004;
    var4[2] = var7;
    var7 = -1008;
    var4[3] = var7;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/hooks/useVideoQuestPlayerAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useVideoQuestPlayerAnalytics(arg1) {
        var1 = arg1;
        var18 = var1.duration;
        var _closure2_slot0 = var18;
        var3 = var1.isQuestCompleted;
        var _closure2_slot1 = var3;
        var16 = var1.playerState;
        var _closure2_slot2 = var16;
        var12 = var1.questId;
        var _closure2_slot3 = var12;
        var9 = var1.sourceQuestContent;
        var _closure2_slot4 = var9;
        var2 = var1.videoAssetId;
        var _closure2_slot5 = var2;
        var11 = var1.videoSessionId;
        var _closure2_slot6 = var11;
        var8 = _closure1_slot4;
        var4 = var8.useState;
        var17 = false;
        var4 = var4.bind(var8)(var17);
        var15 = _closure1_slot3;
        var6 = undefined;
        var13 = 2;
        var4 = var15.bind(var6)(var4, var13);
        var10 = 0;
        var14 = var4[var10];
        var7 = 1;
        var4 = var4[var7];
        var _closure2_slot7 = var4;
        var4 = var8.useState;
        var4 = var4.bind(var8)(var17);
        var4 = var15.bind(var6)(var4, var13);
        var13 = var4[var10];
        var4 = var4[var7];
        var _closure2_slot8 = var4;
        var7 = var8.useRef;
        var4 = null;
        var7 = var7.bind(var8)(var4);
        var _closure2_slot9 = var7;
        var7 = var8.useRef;
        var7 = var7.bind(var8)(var4);
        var _closure2_slot10 = var7;
        var17 = _closure1_slot0;
        var19 = _closure1_slot2;
        var7 = 6;
        var7 = var19[var7];
        var10 = var17.bind(var6)(var7);
        var7 = var10.useQuestImpression;
        var10 = var7.bind(var10)();
        var _closure2_slot11 = var10;
        var20 = var8.useEffect;
        var15 = function() {
            var2 = _closure2_slot10;
            var1 = global;
            var3 = var1.Date;
            var1 = var3.now;
            var1 = var1.bind(var3)();
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var7 = new Array(0);
        var7 = var20.bind(var8)(var15, var7);
        var20 = var8.useEffect;
        var15 = new Array(5);
        var15[0] = var12;
        var15[1] = var11;
        var15[2] = var16;
        var15[3] = var10;
        var15[4] = var9;
        var7 = function() {
            var5 = _closure1_slot5;
            var4 = var5.addEventListener;
            var3 = 'change';
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = _closure2_slot9;
                    var1 = var1.current;
                    var8 = null;
                    if(!(var8 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var1 = var3[var1];
                    var6 = undefined;
                    var3 = var2.bind(var6)(var1);
                    var2 = var3.trackQuestEvent;
                    var1 = {};
                    var5 = _closure2_slot3;
                    var1['questId'] = var5;
                    var9 = 'active';
                    var5 = arg1;
                    if(!(var9 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var5 = _closure1_slot7;
                    var5 = var5.QUEST_VIDEO_APP_UNFOCUSED;
                    _fun0001_ip = 6; continue _fun0001;
case 4:
                    var7 = _closure1_slot7;
                    var5 = var7.QUEST_VIDEO_APP_FOCUSED;
case 6:
                    var1['event'] = var5;
                    var5 = {};
                    var7 = _closure2_slot9;
                    var7 = var7.current;
                    var5['video_timestamp_seconds'] = var7;
                    var7 = _closure2_slot2;
                    var5['video_state'] = var7;
                    var7 = _closure2_slot6;
                    var5['video_session_id'] = var7;
                    var7 = _closure2_slot11;
                    var7 = var8 == var7;
                    var6 = undefined;
                    if(var7) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                    var8 = _closure2_slot11;
                    var7 = var8.getId;
                    var6 = var7.bind(var8)();
case 7:
                    var5['impression_id'] = var6;
                    var1['properties'] = var5;
                    var4 = _closure2_slot4;
                    var1['sourceQuestContent'] = var4;
                    var1 = var2.bind(var3)(var1);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var2 = _closure3_slot0;
                var1 = var2.remove;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var7 = var20.bind(var8)(var7, var15);
        var15 = var8.useCallback;
        var7 = new Array(7);
        var7[0] = var12;
        var7[1] = var2;
        var7[2] = var3;
        var7[3] = var11;
        var7[4] = var18;
        var7[5] = var10;
        var7[6] = var9;
        var3 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = arg1;
                var1 = _closure2_slot9;
                var1 = var1.current;
                var8 = null;
                if(!(var8 != var1)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 7;
                var1 = var11[var1];
                var7 = undefined;
                var3 = var10.bind(var7)(var1);
                var2 = var3.trackQuestEvent;
                var1 = {};
                var9 = _closure2_slot3;
                var1['questId'] = var9;
                var5 = _closure1_slot7;
                var5 = var5.QUEST_VIDEO_SEGMENT_WATCHED;
                var1['event'] = var5;
                var5 = {};
                var14 = var5;
                var13 = var6;
                var9 = copyDataProperties(var14, var13);
                var12 = _closure2_slot5;
                var9 = 'video_asset_id';
                var5[var9] = var12;
                var12 = _closure2_slot1;
                var9 = 'quest_completed';
                var5[var9] = var12;
                var12 = _closure2_slot0;
                var9 = 'video_duration_sec';
                var5[var9] = var12;
                var9 = 8;
                var9 = var11[var9];
                var11 = var10.bind(var7)(var9);
                var10 = var11.formatVideoProgressRatio;
                var9 = var6.segment_end_sec;
                var6 = _closure2_slot9;
                var6 = var6.current;
                var9 = var10.bind(var11)(var9, var6);
                var6 = 'video_progress';
                var5[var6] = var9;
                var9 = _closure2_slot6;
                var6 = 'video_session_id';
                var5[var6] = var9;
                var6 = _closure2_slot11;
                var6 = var8 == var6;
                if(var6) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var8 = _closure2_slot11;
                var6 = var8.getId;
                var7 = var6.bind(var8)();
case 11:
                var6 = 'impression_id';
                var5[var6] = var7;
                var1['properties'] = var5;
                var4 = _closure2_slot4;
                var1['sourceQuestContent'] = var4;
                var1 = var2.bind(var3)(var1);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var7 = var15.bind(var8)(var3, var7);
        var20 = var8.useCallback;
        var15 = function() {
            var1 = _closure2_slot9;
            var1 = var1.current;
            return var1;
        };
        var3 = new Array(0);
        var15 = var20.bind(var8)(var15, var3);
        var3 = _closure1_slot1;
        var1 = 9;
        var1 = var19[var1];
        var3 = var3.bind(var6)(var1);
        var1 = {};
        var1['getCurrentVideoTime'] = var15;
        var15 = 10;
        var15 = var19[var15];
        var15 = var17.bind(var6)(var15);
        var15 = var15.PlayerState;
        var15 = var15.PLAYING;
        var15 = var16 === var15;
        var1['isPlaying'] = var15;
        var1['isMetadataLoaded'] = var14;
        var1['isInitialSeekComplete'] = var13;
        var1['onAnalytics'] = var7;
        var7 = 4000;
        var1['emitIntervalMs'] = var7;
        var7 = 2000;
        var1['minSegmentDurationMs'] = var7;
        var1 = var3.bind(var6)(var1);
        var1 = var1.forceSendCurrentSegment;
        var _closure2_slot12 = var1;
        var3 = var8.useRef;
        var3 = var3.bind(var8)(var4);
        var _closure2_slot13 = var3;
        var7 = var8.useCallback;
        var6 = new Array(5);
        var6[0] = var12;
        var6[1] = var2;
        var6[2] = var11;
        var6[3] = var10;
        var6[4] = var9;
        var3 = function() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = _closure2_slot7;
                var1 = undefined;
                var3 = true;
                var2 = var2.bind(var1)(var3);
                var2 = _closure2_slot8;
                var2 = var2.bind(var1)(var3);
                var2 = _closure2_slot13;
                var2 = var2.current;
                var8 = null;
                var2 = var8 != var2;
                var7 = null;
                if(!var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = _closure2_slot13;
                var2 = var2.current;
                var7 = var3 - var2;
case 13:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackQuestEvent;
                var2 = {};
                var6 = _closure2_slot3;
                var2['questId'] = var6;
                var6 = _closure1_slot7;
                var6 = var6.QUEST_VIDEO_LOADING_ENDED;
                var2['event'] = var6;
                var6 = {};
                var10 = _closure2_slot5;
                var6['video_asset_id'] = var10;
                var10 = _closure1_slot6;
                var9 = var10.getEffectiveConnectionSpeed;
                var9 = var9.bind(var10)();
                var6['network_connection_speed'] = var9;
                var6['duration'] = var7;
                var7 = _closure2_slot6;
                var6['video_session_id'] = var7;
                var7 = _closure2_slot11;
                var8 = var8 == var7;
                var7 = undefined;
                if(var8) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var9 = _closure2_slot11;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 15:
                var6['impression_id'] = var7;
                var2['properties'] = var6;
                var5 = _closure2_slot4;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var13 = var7.bind(var8)(var3, var6);
        var7 = var8.useCallback;
        var6 = new Array(1);
        var6[0] = var1;
        var3 = function() {
            var2 = _closure2_slot12;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var15 = var7.bind(var8)(var3, var6);
        var7 = var8.useCallback;
        var6 = new Array(5);
        var6[0] = var12;
        var6[1] = var11;
        var6[2] = var2;
        var6[3] = var10;
        var6[4] = var9;
        var3 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure2_slot13;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackQuestEvent;
                var2 = {};
                var6 = _closure2_slot3;
                var2['questId'] = var6;
                var6 = _closure1_slot7;
                var6 = var6.QUEST_VIDEO_LOADING_STARTED;
                var2['event'] = var6;
                var6 = {};
                var8 = _closure2_slot5;
                var6['video_asset_id'] = var8;
                var8 = _closure1_slot6;
                var7 = var8.getEffectiveConnectionSpeed;
                var7 = var7.bind(var8)();
                var6['network_connection_speed'] = var7;
                var7 = _closure2_slot6;
                var6['video_session_id'] = var7;
                var7 = true;
                var6['is_hls_supported'] = var7;
                var8 = _closure2_slot11;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                var9 = _closure2_slot11;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 7:
                var6['impression_id'] = var7;
                var2['properties'] = var6;
                var5 = _closure2_slot4;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var7 = var7.bind(var8)(var3, var6);
        var3 = var8.useRef;
        var3 = var3.bind(var8)(var4);
        var _closure2_slot14 = var3;
        var4 = var8.useRef;
        var3 = -1;
        var3 = var4.bind(var8)(var3);
        var _closure2_slot15 = var3;
        var6 = var8.useCallback;
        var4 = new Array(5);
        var4[0] = var12;
        var4[1] = var2;
        var4[2] = var11;
        var4[3] = var10;
        var4[4] = var9;
        var3 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = var2.getEffectiveConnectionSpeed;
                var8 = var1.bind(var2)();
                var2 = _closure2_slot14;
                var1 = arg1;
                if(var1) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = var2.current;
                var11 = null;
                var1 = var11 != var1;
                var10 = null;
                if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var3 = var1.bind(var3)();
                var1 = _closure2_slot14;
                var1 = var1.current;
                var10 = var3 - var1;
case 19:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 7;
                var1 = var6[var1];
                var9 = undefined;
                var6 = var3.bind(var9)(var1);
                var3 = var6.trackQuestEvent;
                var1 = {};
                var7 = _closure2_slot3;
                var1['questId'] = var7;
                var7 = _closure1_slot7;
                var7 = var7.QUEST_VIDEO_BUFFERING_ENDED;
                var1['event'] = var7;
                var7 = {};
                var12 = _closure2_slot5;
                var7['video_asset_id'] = var12;
                var7['network_connection_speed'] = var8;
                var7['duration'] = var10;
                var10 = _closure2_slot15;
                var10 = var10.current;
                var7['buffer_index'] = var10;
                var10 = _closure2_slot6;
                var7['video_session_id'] = var10;
                var10 = _closure2_slot11;
                var10 = var11 == var10;
                if(var10) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var11 = _closure2_slot11;
                var10 = var11.getId;
                var9 = var10.bind(var11)();
case 21:
                var7['impression_id'] = var9;
                var1['properties'] = var7;
                var7 = _closure2_slot4;
                var1['sourceQuestContent'] = var7;
                var1 = var3.bind(var6)(var1);
                _fun0005_ip = 23; continue _fun0005;
case 17:
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['current'] = var1;
                var7 = _closure2_slot15;
                var2 = var7.current;
                var1 = 1;
                var1 = var2 + var1;
                var7['current'] = var1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var2 = var3.trackQuestEvent;
                var1 = {};
                var9 = _closure2_slot3;
                var1['questId'] = var9;
                var5 = _closure1_slot7;
                var5 = var5.QUEST_VIDEO_BUFFERING_STARTED;
                var1['event'] = var5;
                var5 = {};
                var9 = _closure2_slot5;
                var5['video_asset_id'] = var9;
                var5['network_connection_speed'] = var8;
                var7 = var7.current;
                var5['buffer_index'] = var7;
                var7 = _closure2_slot6;
                var5['video_session_id'] = var7;
                var8 = _closure2_slot11;
                var7 = null;
                var7 = var7 == var8;
                if(var7) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var8 = _closure2_slot11;
                var7 = var8.getId;
                var6 = var7.bind(var8)();
case 24:
                var5['impression_id'] = var6;
                var1['properties'] = var5;
                var4 = _closure2_slot4;
                var1['sourceQuestContent'] = var4;
                var1 = var2.bind(var3)(var1);
case 23:
                var1 = undefined;
                return var1;
            }
        };
        var16 = var6.bind(var8)(var3, var4);
        var6 = var8.useCallback;
        var4 = new Array(5);
        var4[0] = var12;
        var4[1] = var11;
        var4[2] = var2;
        var4[3] = var10;
        var4[4] = var9;
        var3 = function() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure2_slot10;
                var1 = var1.current;
                var8 = null;
                if(!(var8 != var1)) { _fun0006_ip = 26; continue _fun0006 }
case 3:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var6 = undefined;
                var3 = var2.bind(var6)(var1);
                var2 = var3.trackQuestEvent;
                var1 = {};
                var7 = _closure2_slot3;
                var1['questId'] = var7;
                var5 = _closure1_slot7;
                var5 = var5.QUEST_VIDEO_TIME_TO_FIRST_FRAME;
                var1['event'] = var5;
                var5 = {};
                var7 = global;
                var9 = var7.Date;
                var7 = var9.now;
                var9 = var7.bind(var9)();
                var7 = _closure2_slot10;
                var7 = var7.current;
                var7 = var9 - var7;
                var5['duration_ms'] = var7;
                var7 = _closure2_slot6;
                var5['video_session_id'] = var7;
                var7 = _closure2_slot5;
                var5['video_asset_id'] = var7;
                var7 = _closure2_slot11;
                var7 = var8 == var7;
                if(var7) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                var8 = _closure2_slot11;
                var7 = var8.getId;
                var6 = var7.bind(var8)();
case 27:
                var5['impression_id'] = var6;
                var1['properties'] = var5;
                var4 = _closure2_slot4;
                var1['sourceQuestContent'] = var4;
                var1 = var2.bind(var3)(var1);
case 26:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var6.bind(var8)(var3, var4);
        var14 = var8.useCallback;
        var6 = new Array(4);
        var6[0] = var12;
        var6[1] = var11;
        var6[2] = var10;
        var6[3] = var9;
        var3 = function() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var2 = var9[var1];
                var1 = undefined;
                var4 = var8.bind(var1)(var2);
                var3 = var4.trackQuestEvent;
                var2 = {};
                var7 = _closure2_slot3;
                var2['questId'] = var7;
                var6 = _closure1_slot7;
                var6 = var6.QUEST_VIDEO_RESUMED;
                var2['event'] = var6;
                var6 = {};
                var7 = _closure2_slot9;
                var7 = var7.current;
                var6['video_timestamp_seconds'] = var7;
                var7 = 11;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.VideoPauseReason;
                var7 = var7.PAUSE_BUTTON;
                var6['pause_reason'] = var7;
                var7 = _closure2_slot6;
                var6['video_session_id'] = var7;
                var8 = _closure2_slot11;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                var9 = _closure2_slot11;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 29:
                var6['impression_id'] = var7;
                var2['properties'] = var6;
                var5 = _closure2_slot4;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var3 = var14.bind(var8)(var3, var6);
        var17 = var8.useCallback;
        var14 = new Array(5);
        var14[0] = var12;
        var14[1] = var11;
        var14[2] = var1;
        var14[3] = var10;
        var14[4] = var9;
        var6 = function() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var1 = 7;
                var2 = var9[var1];
                var1 = undefined;
                var5 = var8.bind(var1)(var2);
                var4 = var5.trackQuestEvent;
                var3 = {};
                var7 = _closure2_slot3;
                var3['questId'] = var7;
                var6 = _closure1_slot7;
                var6 = var6.QUEST_VIDEO_PAUSED;
                var3['event'] = var6;
                var6 = {};
                var7 = _closure2_slot9;
                var7 = var7.current;
                var6['video_timestamp_seconds'] = var7;
                var7 = 11;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var7 = var7.VideoPauseReason;
                var7 = var7.PAUSE_BUTTON;
                var6['reason'] = var7;
                var7 = _closure2_slot6;
                var6['video_session_id'] = var7;
                var8 = _closure2_slot11;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0008_ip = 29; continue _fun0008 }
case 30:
                var9 = _closure2_slot11;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 29:
                var6['impression_id'] = var7;
                var3['properties'] = var6;
                var6 = _closure2_slot4;
                var3['sourceQuestContent'] = var6;
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot12;
                var2 = var2.bind(var1)();
                return var1;
            }
        };
        var6 = var17.bind(var8)(var6, var14);
        var17 = var8.useCallback;
        var14 = new Array(6);
        var14[0] = var18;
        var14[1] = var12;
        var14[2] = var2;
        var14[3] = var11;
        var14[4] = var10;
        var14[5] = var9;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 7;
                var3 = var11[var1];
                var1 = undefined;
                var8 = var10.bind(var1)(var3);
                var7 = var8.trackQuestEvent;
                var4 = {};
                var3 = _closure2_slot3;
                var4['questId'] = var3;
                var3 = _closure1_slot7;
                var3 = var3.QUEST_VIDEO_ERROR;
                var4['event'] = var3;
                var9 = {};
                var3 = 8;
                var3 = var11[var3];
                var13 = var10.bind(var1)(var3);
                var12 = var13.formatVideoProgressRatio;
                var11 = _closure2_slot0;
                var3 = _closure2_slot9;
                var14 = var3.current;
                var3 = null;
                var15 = var3 != var14;
                var10 = 0;
                if(!var15) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                var10 = var14;
case 31:
                var10 = var12.bind(var13)(var11, var10);
                var9['video_progress'] = var10;
                var9['video_error_type'] = var3;
                var10 = _closure2_slot5;
                var9['video_asset_id'] = var10;
                var9['network_connection_speed'] = var3;
                var10 = _closure2_slot6;
                var9['video_session_id'] = var10;
                var11 = var3 == var2;
                var10 = undefined;
                if(var11) { _fun0009_ip = 33; continue _fun0009 }
case 34:
                var11 = var2.error;
                var10 = var11.code;
case 33:
                var9['video_error_code'] = var10;
                var11 = var3 == var2;
                var10 = undefined;
                if(var11) { _fun0009_ip = 35; continue _fun0009 }
case 16:
                var11 = var2.error;
                var10 = var11.localizedDescription;
case 35:
                if(!(var3 == var10)) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                var12 = var3 == var2;
                var11 = undefined;
                if(var12) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                var12 = var2.error;
                var11 = var12.errorString;
case 38:
                var10 = var11;
case 36:
                var9['video_error_message'] = var10;
                var9['video_network_state'] = var3;
                var10 = _closure2_slot11;
                var11 = var3 == var10;
                var10 = undefined;
                if(var11) { _fun0009_ip = 40; continue _fun0009 }
case 41:
                var12 = _closure2_slot11;
                var11 = var12.getId;
                var10 = var11.bind(var12)();
case 40:
                var9['impression_id'] = var10;
                var4['properties'] = var9;
                var9 = _closure2_slot4;
                var4['sourceQuestContent'] = var9;
                var4 = var7.bind(var8)(var4);
                var4 = var3 == var2;
                var9 = undefined;
                if(var4) { _fun0009_ip = 42; continue _fun0009 }
case 43:
                var4 = var2.error;
                var9 = var4.code;
case 42:
                var4 = var3 == var2;
                var8 = undefined;
                if(var4) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                var2 = var2.error;
                var8 = var2.errorException;
case 44:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var7 = 5;
                var2 = var2[var7];
                var4 = var4.bind(var1)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if(var2) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var4 = var4.bind(var1)(var2);
                var2 = var4.isIOS;
                var2 = var2.bind(var4)();
                var4 = !var2;
                var2 = !var4;
                if(var4) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                var2 = var3 != var9;
case 48:
                if(!var2) { _fun0009_ip = 50; continue _fun0009 }
case 51:
                var7 = _closure1_slot8;
                var4 = var7.includes;
                var2 = var4.bind(var7)(var9);
case 50:
                _fun0009_ip = 52; continue _fun0009;
case 46:
                var3 = var3 == var8;
                if(var3) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                var7 = var8.includes;
                var4 = 'Source error';
                var4 = var7.bind(var8)(var4);
                var3 = !var4;
case 53:
                var2 = !var3;
case 52:
                if(!var2) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 12;
                var2 = var8[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.increment;
                var2 = {};
                var7 = _closure1_slot0;
                var6 = 13;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.MetricEvents;
                var6 = var6.QUEST_VIDEO_ERROR;
                var2['name'] = var6;
                var7 = _closure2_slot3;
                var5 = global;
                var5 = var5.HermesInternal;
                var6 = var5.concat;
                var5 = 'quest_id:';
                var6 = var6.bind(var5)(var7);
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 'error_type:SOURCE_ERROR';
                var5[1] = var6;
                var2['tags'] = var5;
                var2 = var3.bind(var4)(var2);
case 55:
                return var1;
            }
        };
        var14 = var17.bind(var8)(var2, var14);
        var17 = var8.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure2_slot12;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var2 = var17.bind(var8)(var1, var2);
        var1 = {};
        var1['handleBufferAnalytics'] = var16;
        var1['handleEndAnalytics'] = var15;
        var1['handleErrorAnalytics'] = var14;
        var1['handleLoadAnalytics'] = var13;
        var1['handleLoadStartAnalytics'] = var7;
        var1['handlePausePlaybackAnalytics'] = var6;
        var7 = var8.useCallback;
        var6 = new Array(4);
        var6[0] = var12;
        var6[1] = var11;
        var6[2] = var10;
        var6[3] = var9;
        var5 = function(arg1, arg2, arg3) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure2_slot9;
                var1 = arg3;
                var2['current'] = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.trackQuestEvent;
                var2 = {};
                var7 = _closure2_slot3;
                var2['questId'] = var7;
                var6 = _closure1_slot7;
                var6 = var6.QUEST_VIDEO_PROGRESSED;
                var2['event'] = var6;
                var6 = {};
                var7 = arg1;
                var6['progress'] = var7;
                var7 = arg2;
                var6['video_timestamp_seconds'] = var7;
                var7 = _closure2_slot6;
                var6['video_session_id'] = var7;
                var8 = _closure2_slot11;
                var7 = null;
                var8 = var7 == var8;
                var7 = undefined;
                if(var8) { _fun0010_ip = 30; continue _fun0010 }
case 57:
                var9 = _closure2_slot11;
                var8 = var9.getId;
                var7 = var8.bind(var9)();
case 30:
                var6['impression_id'] = var7;
                var2['properties'] = var6;
                var5 = _closure2_slot4;
                var2['sourceQuestContent'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5 = var7.bind(var8)(var5, var6);
        var1['handleProgressAnalytics'] = var5;
        var1['handleReadyForDisplayAnalytics'] = var4;
        var1['handleResumePlaybackAnalytics'] = var3;
        var1['handleSeekAnalytics'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
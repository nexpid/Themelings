// app/modules/quests/native/VideoQuestModal/VideoQuestPlayerRefactor.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var31 = var1.style;
            var23 = var1.onLoad;
            var _closure2_slot0 = var23;
            var20 = var1.onEnd;
            var _closure2_slot1 = var20;
            var38 = var1.onToggleFullscreen;
            var _closure2_slot2 = var38;
            var4 = var1.orientation;
            var _closure2_slot3 = var4;
            var28 = var1.contentInsets;
            var _closure2_slot4 = var28;
            var8 = var1.handleToggleCaptions;
            var7 = var1.handleOpenTranscript;
            var30 = var1.isFullscreen;
            var29 = var1.externallyPaused;
            var10 = var1.captionsEnabled;
            var5 = undefined;
            if(!(var10 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = false;
case 2:
            var _closure2_slot5 = var10;
            var17 = var1.sourceQuestContent;
            var12 = var1.hasCaptionAsset;
            if(!(var12 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var12 = true;
case 4:
            var11 = var1.hasTranscriptAsset;
            if(!(var11 === var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = true;
case 6:
            var _closure2_slot6 = var5;
            var _closure2_slot7 = var5;
            var _closure2_slot8 = var5;
            var _closure2_slot9 = var5;
            var _closure2_slot10 = var5;
            var _closure2_slot11 = var5;
            var _closure2_slot12 = var5;
            var _closure2_slot13 = var5;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var _closure2_slot16 = var5;
            var _closure2_slot17 = var5;
            var _closure2_slot18 = var5;
            var _closure2_slot19 = var5;
            var _closure2_slot20 = var5;
            var _closure2_slot21 = var5;
            var _closure2_slot22 = var5;
            var _closure2_slot23 = var5;
            var _closure2_slot24 = var5;
            var _closure2_slot25 = var5;
            var _closure2_slot26 = var5;
            var _closure2_slot27 = var5;
            var _closure2_slot28 = var5;
            var _closure2_slot29 = var5;
            var _closure2_slot30 = var5;
            var _closure2_slot31 = var5;
            var _closure2_slot32 = var5;
            var _closure2_slot33 = var5;
            var _closure2_slot34 = var5;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 5;
            var1 = var13[var1];
            var9 = var6.bind(var5)(var1);
            var1 = var9.useVideoQuestModalContext;
            var1 = var1.bind(var9)();
            var9 = var1.quest;
            _closure2_slot6 = var9;
            var19 = var1.videoSessionId;
            var1 = 6;
            var1 = var13[var1];
            var6 = var6.bind(var5)(var1);
            var1 = var6.useQuestTaskDetails;
            var41 = var1.bind(var6)(var9);
            _closure2_slot7 = var41;
            var13 = var9.userStatus;
            var1 = null;
            var14 = var1 == var13;
            var6 = undefined;
            if(var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var13.completedAt;
case 8:
            var32 = var1 != var6;
            var16 = _closure1_slot4;
            var14 = var16.useMemo;
            var13 = new Array(1);
            var13[0] = var9;
            var6 = function() {
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var3 = var7[var1];
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var4 = var5.getQuestAsset;
                var3 = _closure2_slot6;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.QuestAssetType;
                var10 = var1.VIDEO_PLAYER_VIDEO;
                var8 = true;
                var12 = var5;
                var11 = var3;
                var9 = undefined;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                return var1;
            };
            var6 = var14.bind(var16)(var6, var13);
            _closure2_slot8 = var6;
            var15 = var16.useMemo;
            var14 = new Array(1);
            var14[0] = var9;
            var13 = function() {
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var3 = var7[var1];
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var4 = var5.getQuestAsset;
                var3 = _closure2_slot6;
                var1 = var7[var1];
                var1 = var2.bind(var6)(var1);
                var1 = var1.QuestAssetType;
                var10 = var1.VIDEO_PLAYER_VIDEO_HLS;
                var8 = true;
                var12 = var5;
                var11 = var3;
                var9 = undefined;
                var1 = var12[var4](var11, var10, var9, var8, var7);
                return var1;
            };
            var39 = var15.bind(var16)(var13, var14);
            _closure2_slot9 = var39;
            var14 = var1 == var39;
            var13 = undefined;
            if(var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = var39.url;
case 10:
            if(!(var1 == var13)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 7;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.QuestAssetType;
            var18 = var13.VIDEO_PLAYER_VIDEO;
            _fun0001_ip = 14; continue _fun0001;
case 12:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var13 = 7;
            var13 = var15[var13];
            var13 = var14.bind(var5)(var13);
            var13 = var13.QuestAssetType;
            var18 = var13.VIDEO_PLAYER_VIDEO_HLS;
case 14:
            var25 = _closure1_slot4;
            var14 = var25.useState;
            var13 = var41.targetSeconds;
            var13 = var14.bind(var25)(var13);
            var24 = _closure1_slot3;
            var21 = 2;
            var13 = var24.bind(var5)(var13, var21);
            var26 = 0;
            var35 = var13[var26];
            _closure2_slot10 = var35;
            var15 = 1;
            var13 = var13[var15];
            _closure2_slot11 = var13;
            var33 = var41.targetSeconds;
            _closure2_slot12 = var33;
            var27 = _closure1_slot5;
            var13 = function(arg1) {
                var1 = arg1;
                var1 = var1.setVideoProgress;
                return var1;
            };
            var16 = var27.bind(var5)(var13);
            _closure2_slot13 = var16;
            var37 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 8;
            var13 = var22[var13];
            var13 = var37.bind(var5)(var13);
            var14 = var13.shallow;
            var13 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.videoProgress;
                    var1 = _closure2_slot6;
                    var1 = var1.id;
                    var1 = var2[var1];
                    var2 = null;
                    if(!(var2 == var1)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                    var2 = {};
                    var4 = _closure2_slot7;
                    var4 = var4.progressSeconds;
                    var2['timestampSec'] = var4;
                    var4 = _closure2_slot10;
                    var2['duration'] = var4;
                    var3 = _closure2_slot7;
                    var3 = var3.progressSeconds;
                    var2['maxTimestampSec'] = var3;
                    var1 = var2;
case 15:
                    return var1;
                }
            };
            var34 = var27.bind(var5)(var13, var14);
            var13 = var25.useRef;
            var13 = var13.bind(var25)(var1);
            _closure2_slot14 = var13;
            var27 = var25.useState;
            var36 = 9;
            var14 = var22[var36];
            var14 = var37.bind(var5)(var14);
            var14 = var14.PlayerState;
            var14 = var14.LOADING;
            var14 = var27.bind(var25)(var14);
            var14 = var24.bind(var5)(var14, var21);
            var21 = var14[var26];
            var14 = var14[var15];
            _closure2_slot15 = var14;
            var15 = var25.useRef;
            var14 = var41.progressSeconds;
            var14 = var15.bind(var25)(var14);
            _closure2_slot16 = var14;
            var15 = _closure1_slot1;
            var14 = 10;
            var14 = var22[var14];
            var15 = var15.bind(var5)(var14);
            var14 = {};
            var14['duration'] = var35;
            var14['isQuestCompleted'] = var32;
            var14['playerState'] = var21;
            var21 = var9.id;
            var14['questId'] = var21;
            var14['videoSessionId'] = var19;
            var14['videoAssetId'] = var18;
            var14['sourceQuestContent'] = var17;
            var19 = var15.bind(var5)(var14);
            var22 = var19.handleBufferAnalytics;
            _closure2_slot17 = var22;
            var27 = var19.handleEndAnalytics;
            _closure2_slot18 = var27;
            var14 = var19.handleErrorAnalytics;
            _closure2_slot19 = var14;
            var43 = var19.handleLoadAnalytics;
            _closure2_slot20 = var43;
            var15 = var19.handleLoadStartAnalytics;
            _closure2_slot21 = var15;
            var17 = var19.handlePausePlaybackAnalytics;
            _closure2_slot22 = var17;
            var40 = var19.handleProgressAnalytics;
            _closure2_slot23 = var40;
            var24 = var19.handleReadyForDisplayAnalytics;
            _closure2_slot24 = var24;
            var18 = var19.handleResumePlaybackAnalytics;
            _closure2_slot25 = var18;
            var21 = var19.handleSeekAnalytics;
            _closure2_slot26 = var21;
            var19 = var25.useRef;
            var19 = var19.bind(var25)(var1);
            _closure2_slot27 = var19;
            var47 = var9.id;
            _closure2_slot28 = var47;
            var19 = var9.config;
            var19 = var19.messages;
            var46 = var19.gameTitle;
            _closure2_slot29 = var46;
            var19 = var1 == var39;
            var45 = undefined;
            if(var19) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var45 = var39.url;
case 17:
            if(!(var1 == var45)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var25 = var1 == var6;
            var19 = undefined;
            if(var25) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var19 = var6.url;
case 21:
            var45 = var19;
case 19:
            _closure2_slot30 = var45;
            var25 = _closure1_slot0;
            var37 = _closure1_slot2;
            var19 = 11;
            var19 = var37[var19];
            var37 = var25.bind(var5)(var19);
            var25 = var37.getDefaultWatchVideoTask;
            var19 = var9.config;
            var19 = var25.bind(var37)(var19);
            var25 = var1 == var19;
            var44 = undefined;
            if(var25) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var19 = var19.messages;
            var44 = var19.videoTitle;
case 23:
            _closure2_slot31 = var44;
            var25 = var1 == var39;
            var19 = undefined;
            if(var25) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var19 = var39.url;
case 25:
            var25 = var1 != var19;
            var19 = 'mp4';
            if(!var25) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var19 = 'hls';
case 27:
            _closure2_slot32 = var19;
            var37 = _closure1_slot4;
            var42 = var37.useEffect;
            var25 = new Array(6);
            var25[0] = var47;
            var25[1] = var46;
            var25[2] = var33;
            var25[3] = var45;
            var25[4] = var44;
            var25[5] = var19;
            var19 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot30;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
                    var2 = _closure2_slot30;
                    var4 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var4)) { _fun0003_ip = 29; continue _fun0003 }
case 31:
                    var2 = _closure2_slot14;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0003_ip = 29; continue _fun0003 }
case 32:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 12;
                    var3 = var3[var7];
                    var6 = undefined;
                    var5 = var4.bind(var6)(var3);
                    var4 = var5.getVideoQoEMetricsConfig;
                    var3 = {};
                    var8 = _closure1_slot6;
                    var8 = var8.VIDEO_MODAL_MOBILE;
                    var3['location'] = var8;
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.externalAnalyticsEnabled;
                    if(var3) { _fun0003_ip = 33; continue _fun0003 }
case 29:
                    var3 = undefined;
                    return var3;
case 33:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 13;
                    var3 = var2[var3];
                    var5 = var4.bind(var6)(var3);
                    var3 = var5.getConstants;
                    var3 = var3.bind(var5)();
                    var5 = {};
                    var8 = _closure2_slot14;
                    var8 = var8.current;
                    var5['videoRef'] = var8;
                    var8 = 'quests';
                    var5['feature'] = var8;
                    var9 = var3.Version;
                    var5['appVersion'] = var9;
                    var3 = var3.ReleaseChannel;
                    var5['releaseChannel'] = var3;
                    var3 = {};
                    var9 = _closure2_slot30;
                    var3['contentId'] = var9;
                    var9 = _closure2_slot32;
                    var3['videoStreamType'] = var9;
                    var3['contentType'] = var8;
                    var9 = _closure2_slot12;
                    var8 = 1000;
                    var8 = var8 * var9;
                    var3['durationMs'] = var8;
                    var8 = _closure2_slot31;
                    var3['title'] = var8;
                    var8 = _closure2_slot28;
                    var3['questId'] = var8;
                    var8 = _closure2_slot29;
                    var3['gameName'] = var8;
                    var5['contentMetadata'] = var3;
                    var3 = _closure2_slot27;
                    var2 = var2[var7];
                    var2 = var4.bind(var6)(var2);
                    var2 = var2.MobileMuxWrapper;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {constructor: {value: var2}});
                    var11 = var4;
                    var10 = var5;
                    var2 = new var11[var2](var10, var9);
                    var2 = var2 instanceof Object ? var2 : var4;
                    var3['current'] = var2;
                    var1 = _closure2_slot27;
                    var2 = var1.current;
                    var1 = var2.initialize;
                    var1 = var1.bind(var2)();
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = _closure2_slot27;
                            var3 = var2.current;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                            var3 = _closure2_slot27;
                            var5 = var3.current;
                            var4 = var5.onProgress;
                            var3 = _closure2_slot16;
                            var3 = var3.current;
                            var3 = var4.bind(var5)(var3);
                            var3 = _closure2_slot27;
                            var4 = var3.current;
                            var3 = var4.destroy;
                            var3 = var3.bind(var4)();
                            var1 = _closure2_slot27;
                            var1['current'] = var2;
case 34:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var19 = var42.bind(var37)(var19, var25);
            var42 = var37.useCallback;
            var25 = function(arg1) {
                var3 = _closure2_slot15;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var19 = new Array(0);
            var19 = var42.bind(var37)(var25, var19);
            var42 = var37.useCallback;
            var25 = new Array(1);
            var25[0] = var24;
            var24 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot24;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var2 = _closure2_slot27;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0005_ip = 36; continue _fun0005 }
case 31:
                    var2 = var3.onReadyForDisplay;
                    var2 = var2.bind(var3)();
case 36:
                    return var1;
                }
            };
            var24 = var42.bind(var37)(var24, var25);
            var42 = var37.useCallback;
            var25 = new Array(2);
            var25[0] = var43;
            var25[1] = var23;
            var23 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = arg1;
                    var10 = var3.duration;
                    var8 = var3.videoTracks;
                    var7 = var3.trackId;
                    var4 = var3.naturalSize;
                    var5 = _closure2_slot11;
                    var1 = undefined;
                    var5 = var5.bind(var1)(var10);
                    var5 = _closure2_slot20;
                    var5 = var5.bind(var1)();
                    var5 = _closure2_slot27;
                    var9 = var5.current;
                    var5 = null;
                    if(!(var5 != var9)) { _fun0006_ip = 15; continue _fun0006 }
case 37:
                    var6 = var9.onLoad;
                    var6 = var6.bind(var9)(var10);
case 15:
                    if(!(var5 != var4)) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var6 = _closure2_slot27;
                    var10 = var6.current;
                    if(!(var5 != var10)) { _fun0006_ip = 38; continue _fun0006 }
case 40:
                    var9 = var10.updateVideoSourceDimensions;
                    var6 = var4.width;
                    var4 = var4.height;
                    var4 = var9.bind(var10)(var6, var4);
case 38:
                    var4 = var5 != var8;
                    if(!var4) { _fun0006_ip = 41; continue _fun0006 }
case 4:
                    var9 = var8.length;
                    var6 = 0;
                    var4 = var9 > var6;
case 41:
                    if(!var4) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var4 = var5 != var7;
case 42:
                    if(!var4) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                    var9 = var7.length;
                    var6 = 0;
                    var4 = var9 > var6;
case 44:
                    if(!var4) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = _closure2_slot27;
                    var6 = var4.current;
                    if(!(var5 != var6)) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                    var4 = var6.onVideoTrackChange;
                    var4 = var4.bind(var6)(var7, var8);
case 46:
                    var4 = _closure2_slot0;
                    if(!(var5 != var4)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
                    var2 = _closure2_slot0;
                    var2 = var2.bind(var1)(var3);
case 49:
                    return var1;
                }
            };
            var25 = var42.bind(var37)(var23, var25);
            var42 = var37.useCallback;
            var23 = new Array(4);
            var23[0] = var35;
            var23[1] = var21;
            var21 = var9.id;
            var23[2] = var21;
            var23[3] = var16;
            var21 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var4 = arg1;
                    var6 = var4.fromTimeSec;
                    var2 = _closure2_slot16;
                    var1 = var4.currentTime;
                    var2['current'] = var1;
                    var2 = _closure2_slot10;
                    var1 = 0;
                    if(!(var2 > var1)) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var8 = _closure2_slot13;
                    var1 = _closure2_slot6;
                    var7 = var1.id;
                    var5 = var4.currentTime;
                    var2 = _closure2_slot10;
                    var1 = undefined;
                    var1 = var8.bind(var1)(var7, var5, var2);
case 51:
                    var5 = _closure2_slot26;
                    var2 = var4.currentTime;
                    var1 = undefined;
                    var2 = var5.bind(var1)(var6, var2);
                    var2 = _closure2_slot27;
                    var6 = var2.current;
                    var2 = null;
                    if(!(var2 != var6)) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                    var5 = var6.updatePlayheadTime;
                    var4 = var4.currentTime;
                    var4 = var5.bind(var6)(var4);
case 53:
                    var3 = _closure2_slot27;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                    var2 = var3.onSeek;
                    var2 = var2.bind(var3)();
case 55:
                    return var1;
                }
            };
            var23 = var42.bind(var37)(var21, var23);
            var21 = var37.useRef;
            var21 = var21.bind(var37)(var26);
            _closure2_slot33 = var21;
            var21 = var37.useRef;
            var21 = var21.bind(var37)(var26);
            _closure2_slot34 = var21;
            var26 = var37.useCallback;
            var21 = new Array(4);
            var21[0] = var9;
            var41 = var41.taskType;
            var21[1] = var41;
            var21[2] = var40;
            var21[3] = var16;
            var16 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot16;
                    var1 = var2.currentTime;
                    var4['current'] = var1;
                    var4 = var2.currentTime;
                    var1 = _closure2_slot33;
                    var1 = var1.current;
                    if(!(var4 >= var1)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 14;
                    var1 = var5[var1];
                    var7 = undefined;
                    var6 = var4.bind(var7)(var1);
                    var5 = var6.sendVideoProgress;
                    var4 = _closure2_slot6;
                    var1 = var2.currentTime;
                    var1 = var5.bind(var6)(var4, var1);
                    var6 = _closure2_slot23;
                    var5 = var2.progress;
                    var4 = var2.seekableDuration;
                    var1 = var2.currentTime;
                    var1 = var6.bind(var7)(var5, var4, var1);
                    var4 = _closure2_slot33;
                    var5 = var2.currentTime;
                    var1 = 6;
                    var5 = var5 + var1;
                    var1 = global;
                    var6 = var1.Math;
                    var1 = var6.random;
                    var6 = var1.bind(var6)();
                    var1 = 2;
                    var1 = var1 * var6;
                    var1 = var5 + var1;
                    var4['current'] = var1;
case 57:
                    var4 = var2.currentTime;
                    var1 = _closure2_slot34;
                    var1 = var1.current;
                    if(!(var4 >= var1)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 15;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var5.bind(var1)(var4);
                    var6 = var7.updateOptimisticProgress;
                    var1 = _closure2_slot6;
                    var5 = var1.id;
                    var1 = _closure2_slot7;
                    var4 = var1.taskType;
                    var1 = var2.currentTime;
                    var1 = var6.bind(var7)(var5, var4, var1);
                    var4 = _closure2_slot34;
                    var5 = var2.currentTime;
                    var1 = 1;
                    var1 = var5 + var1;
                    var4['current'] = var1;
case 59:
                    var7 = _closure2_slot13;
                    var1 = _closure2_slot6;
                    var6 = var1.id;
                    var5 = var2.currentTime;
                    var4 = var2.seekableDuration;
                    var1 = undefined;
                    var4 = var7.bind(var1)(var6, var5, var4);
                    var3 = _closure2_slot27;
                    var4 = var3.current;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var3 = var4.onProgress;
                    var2 = var2.currentTime;
                    var2 = var3.bind(var4)(var2);
case 61:
                    return var1;
                }
            };
            var16 = var26.bind(var37)(var16, var21);
            var26 = var37.useCallback;
            var21 = new Array(4);
            var21[0] = var35;
            var21[1] = var9;
            var21[2] = var27;
            var21[3] = var20;
            var20 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.sendVideoProgress;
                    var4 = _closure2_slot6;
                    var3 = _closure2_slot10;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = _closure2_slot18;
                    var3 = var3.bind(var1)();
                    var3 = _closure2_slot27;
                    var6 = var3.current;
                    var4 = null;
                    if(!(var4 != var6)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var5 = var6.onProgress;
                    var3 = _closure2_slot10;
                    var3 = var5.bind(var6)(var3);
case 63:
                    var3 = _closure2_slot27;
                    var5 = var3.current;
                    if(!(var4 != var5)) { _fun0009_ip = 65; continue _fun0009 }
case 66:
                    var3 = var5.onEnd;
                    var3 = var3.bind(var5)();
case 65:
                    var3 = _closure2_slot1;
                    if(!(var4 != var3)) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var2 = _closure2_slot1;
                    var2 = var2.bind(var1)();
case 67:
                    return var1;
                }
            };
            var20 = var26.bind(var37)(var20, var21);
            var26 = var37.useCallback;
            var21 = new Array(1);
            var21[0] = var15;
            var15 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot21;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var2 = _closure2_slot27;
                    var5 = var2.current;
                    var2 = null;
                    if(!(var2 != var5)) { _fun0010_ip = 36; continue _fun0010 }
case 31:
                    var4 = var5.onLoadStart;
                    var4 = var4.bind(var5)();
case 36:
                    var3 = _closure2_slot27;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var2 = var3.onPlay;
                    var2 = var2.bind(var3)();
case 69:
                    return var1;
                }
            };
            var26 = var26.bind(var37)(var15, var21);
            var21 = var37.useCallback;
            var15 = new Array(1);
            var15[0] = var14;
            var14 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot19;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var2 = _closure2_slot27;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0011_ip = 71; continue _fun0011 }
case 72:
                    var2 = var3.onError;
                    var2 = var2.bind(var3)(var4);
case 71:
                    return var1;
                }
            };
            var21 = var21.bind(var37)(var14, var15);
            var27 = var37.useCallback;
            var15 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.videoTracks;
                    var3 = var1.selectedVideoTrackId;
                    var1 = null;
                    var2 = var1 != var4;
                    if(!var2) { _fun0012_ip = 73; continue _fun0012 }
case 74:
                    var6 = var4.length;
                    var5 = 0;
                    var2 = var6 > var5;
case 73:
                    if(!var2) { _fun0012_ip = 75; continue _fun0012 }
case 36:
                    var2 = var1 != var3;
case 75:
                    if(!var2) { _fun0012_ip = 76; continue _fun0012 }
case 77:
                    var6 = var3.length;
                    var5 = 0;
                    var2 = var6 > var5;
case 76:
                    if(!var2) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var2 = _closure2_slot27;
                    var2 = var2.current;
                    if(!(var1 != var2)) { _fun0012_ip = 78; continue _fun0012 }
case 80:
                    var1 = var2.onVideoTrackChange;
                    var1 = var1.bind(var2)(var3, var4);
case 78:
                    var1 = undefined;
                    return var1;
                }
            };
            var14 = new Array(0);
            var15 = var27.bind(var37)(var15, var14);
            var35 = var37.useCallback;
            var27 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var3 = arg1;
                    var2 = null;
                    var5 = var2 == var3;
                    var1 = undefined;
                    var4 = undefined;
                    if(var5) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                    var5 = var3.nativeEvent;
                    var6 = var2 == var5;
                    var4 = undefined;
                    if(var6) { _fun0013_ip = 81; continue _fun0013 }
case 16:
                    var4 = var5.layout;
case 81:
                    if(!(var2 != var4)) { _fun0013_ip = 83; continue _fun0013 }
case 32:
                    var3 = var3.nativeEvent;
                    var3 = var3.layout;
                    var5 = var3.width;
                    var4 = var3.height;
                    var3 = 0;
                    if(!(var5 > var3)) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                    if(!(var4 > var3)) { _fun0013_ip = 83; continue _fun0013 }
case 85:
                    var3 = _closure2_slot27;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0013_ip = 83; continue _fun0013 }
case 86:
                    var2 = var3.updateVideoDimensions;
                    var2 = var2.bind(var3)(var5, var4);
case 83:
                    return var1;
                }
            };
            var14 = new Array(0);
            var14 = var35.bind(var37)(var27, var14);
            var35 = var37.useCallback;
            var27 = new Array(1);
            var27[0] = var18;
            var18 = function() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var3 = _closure2_slot25;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var2 = _closure2_slot27;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0014_ip = 36; continue _fun0014 }
case 31:
                    var2 = var3.onPlay;
                    var2 = var2.bind(var3)();
case 36:
                    return var1;
                }
            };
            var18 = var35.bind(var37)(var18, var27);
            var35 = var37.useCallback;
            var27 = new Array(1);
            var27[0] = var17;
            var17 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure2_slot22;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var2 = _closure2_slot27;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 36; continue _fun0015 }
case 31:
                    var2 = var3.onPause;
                    var2 = var2.bind(var3)();
case 36:
                    return var1;
                }
            };
            var17 = var35.bind(var37)(var17, var27);
            var35 = var37.useCallback;
            var27 = new Array(1);
            var27[0] = var22;
            var22 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var4 = arg1;
                    var3 = _closure2_slot17;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4);
                    var2 = _closure2_slot27;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0016_ip = 71; continue _fun0016 }
case 72:
                    var2 = var3.onBuffer;
                    var2 = var2.bind(var3)(var4);
case 71:
                    return var1;
                }
            };
            var22 = var35.bind(var37)(var22, var27);
            var35 = var37.useCallback;
            var27 = new Array(3);
            var27[0] = var9;
            var27[1] = var10;
            var27[2] = var28;
            var9 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var4 = _closure1_slot7;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 16;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.VideoQuestCaptions;
                    var1 = {};
                    var5 = _closure2_slot6;
                    var1['quest'] = var5;
                    var5 = arg1;
                    var1['currentTime'] = var5;
                    var5 = _closure2_slot5;
                    var1['visible'] = var5;
                    var5 = {};
                    var6 = _closure2_slot4;
                    var8 = null;
                    var6 = var8 == var6;
                    var10 = undefined;
                    if(var6) { _fun0017_ip = 87; continue _fun0017 }
case 88:
                    var6 = _closure2_slot4;
                    var10 = var6.top;
case 87:
                    var11 = var8 != var10;
                    var7 = 0;
                    if(!var11) { _fun0017_ip = 89; continue _fun0017 }
case 83:
                    var7 = var10;
case 89:
                    var5['top'] = var7;
                    var7 = _closure2_slot4;
                    var7 = var8 == var7;
                    var10 = undefined;
                    if(var7) { _fun0017_ip = 7; continue _fun0017 }
case 90:
                    var7 = _closure2_slot4;
                    var10 = var7.bottom;
case 7:
                    var11 = var8 != var10;
                    var7 = 0;
                    if(!var11) { _fun0017_ip = 91; continue _fun0017 }
case 92:
                    var7 = var10;
case 91:
                    var5['bottom'] = var7;
                    var7 = _closure2_slot4;
                    var7 = var8 == var7;
                    var10 = undefined;
                    if(var7) { _fun0017_ip = 48; continue _fun0017 }
case 93:
                    var7 = _closure2_slot4;
                    var10 = var7.left;
case 48:
                    var11 = var8 != var10;
                    var7 = 0;
                    if(!var11) { _fun0017_ip = 46; continue _fun0017 }
case 94:
                    var7 = var10;
case 46:
                    var5['left'] = var7;
                    var7 = _closure2_slot4;
                    var10 = var8 == var7;
                    var7 = undefined;
                    if(var10) { _fun0017_ip = 95; continue _fun0017 }
case 49:
                    var9 = _closure2_slot4;
                    var7 = var9.right;
case 95:
                    var8 = var8 != var7;
                    var6 = 0;
                    if(!var8) { _fun0017_ip = 96; continue _fun0017 }
case 97:
                    var6 = var7;
case 96:
                    var5['right'] = var6;
                    var1['style'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var27 = var35.bind(var37)(var9, var27);
            var35 = var37.useMemo;
            var9 = new Array(2);
            var9[0] = var39;
            var9[1] = var6;
            var6 = function() {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var1 = _closure2_slot8;
                    var5 = null;
                    var2 = var5 == var1;
                    var1 = null;
                    if(var2) { _fun0018_ip = 98; continue _fun0018 }
case 35:
                    var2 = {};
                    var3 = _closure2_slot9;
                    var6 = var5 == var3;
                    var3 = undefined;
                    if(var6) { _fun0018_ip = 75; continue _fun0018 }
case 99:
                    var6 = _closure2_slot9;
                    var3 = var6.url;
case 75:
                    if(!(var5 == var3)) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                    var4 = _closure2_slot8;
                    var3 = var4.url;
case 100:
                    var2['uri'] = var3;
                    var1 = var2;
case 98:
                    return var1;
                }
            };
            var35 = var35.bind(var37)(var6, var9);
            var9 = var37.useCallback;
            var6 = new Array(2);
            var6[0] = var38;
            var6[1] = var4;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0019_ip = 73; continue _fun0019 }
case 30:
                    var3 = _closure2_slot2;
                    var2 = {};
                    var1 = _closure2_slot3;
                    var2['orientation'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var9.bind(var37)(var3, var6);
            if(!(var1 != var35)) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var3 = 'landscape';
            var9 = var3 === var4;
            var4 = _closure1_slot7;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var36];
            var2 = var3.bind(var5)(var2);
            var3 = var2.AdVideoPlayer;
            var2 = {};
            var2['source'] = var35;
            var2['initialProgress'] = var34;
            var2['contentDuration'] = var33;
            var2['allowUnrestrictedSeeking'] = var32;
            var2['disableResumeOnLoad'] = var32;
            var2['style'] = var31;
            var2['isFullscreen'] = var30;
            var2['externallyPaused'] = var29;
            var2['contentInsets'] = var28;
            var2['renderCaptions'] = var27;
            var2['onLoadStart'] = var26;
            var2['onLoad'] = var25;
            var2['onReadyForDisplay'] = var24;
            var2['onSeek'] = var23;
            var2['onBuffer'] = var22;
            var2['onError'] = var21;
            var2['onEnd'] = var20;
            var2['onPlayerStateChange'] = var19;
            var2['onResumePlayback'] = var18;
            var2['onPausePlayback'] = var17;
            var2['onProgress'] = var16;
            var2['onVideoTracks'] = var15;
            var2['onVideoLayout'] = var14;
            var2['videoRef'] = var13;
            var13 = 'top-left';
            if(!var9) { _fun0001_ip = 104; continue _fun0001 }
case 105:
            var13 = 'center';
case 104:
            var2['bufferingSpinnerPlacement'] = var13;
            var2['captionsEnabled'] = var10;
            var10 = var9;
            if(!var9) { _fun0001_ip = 106; continue _fun0001 }
case 107:
            var10 = var12;
case 106:
            var2['showCaptionsButton'] = var10;
            var10 = var9;
            if(!var10) { _fun0001_ip = 108; continue _fun0001 }
case 109:
            var10 = var11;
case 108:
            var2['showTranscriptButton'] = var10;
            var2['showFullscreenButton'] = var9;
            var2['showProgress'] = var9;
            var2['onToggleCaptions'] = var8;
            var2['onOpenTranscript'] = var7;
            var2['onToggleFullscreen'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 102:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 17;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'modules/quests/native/VideoQuestModal/VideoQuestPlayerRefactor.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PlayerState;
    var3['PlayerState'] = var4;
    var3['VideoQuestPlayer'] = var2;
    return var1;
})();
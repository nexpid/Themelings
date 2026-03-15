// app/modules/quests/utils/VideoQuestUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function sendVideoProgress(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 4;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isQuestExpired;
            var4 = var4.bind(var5)(var2);
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var2.userStatus;
            var6 = null;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = var7.enrolledAt;
case 4:
            var4 = var6 == var5;
case 2:
            if(var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var2.userStatus;
            var6 = null;
            var8 = var6 == var7;
            var5 = undefined;
            if(var8) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = var7.completedAt;
case 8:
            var4 = var6 != var5;
case 6:
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 5;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.updateVideoProgress;
            var3 = var2.id;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var _closure1_slot6 = var6;
    var5 = function formatVideoProgressRatio(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var7 = arg1;
            var3 = arg2;
            var4 = 0;
            var2 = var7 <= var4;
            var1 = 0;
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var3 <= var4;
            var1 = 0;
            if(var2) { _fun0002_ip = 12; continue _fun0002 }
case 14:
            var4 = var7 >= var3;
            var6 = 1;
            var2 = var6;
            if(var4) { _fun0002_ip = 9; continue _fun0002 }
case 15:
            var8 = global;
            var5 = var8.Math;
            var4 = var5.min;
            var9 = var8.Math;
            var8 = var9.round;
            var3 = var7 / var3;
            var7 = 100;
            var3 = var3 * var7;
            var3 = var8.bind(var9)(var3);
            var3 = var3 / var7;
            var2 = var4.bind(var5)(var6, var3);
case 9:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var _closure1_slot7 = var5;
    var4 = function getVideoQuestModalKey(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = 'VIDEO-QUEST-';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = 10;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/utils/VideoQuestUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['sendVideoProgress'] = var6;
    var6 = function getVideoOrientation(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var1 = var1.assets;
            var3 = var1.video;
            var5 = null;
            var4 = var5 == var3;
            var2 = 'portrait';
            var1 = var2;
            if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = var3.width;
            var4 = var5 == var4;
            var1 = var2;
            if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 18:
            var4 = var3.height;
            var4 = var5 == var4;
            var1 = var2;
            if(var4) { _fun0003_ip = 16; continue _fun0003 }
case 19:
            var4 = var3.width;
            var3 = var3.height;
            var3 = var4 > var3;
            if(!var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var2 = 'landscape';
case 20:
            var1 = var2;
case 16:
            return var1;
        }
    };
    var3['getVideoOrientation'] = var6;
    var6 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var1 = var6.percentComplete;
            var3 = 0;
            var1 = var1 > var3;
            var5 = _closure1_slot0;
            var7 = _closure1_slot1;
            var4 = 6;
            var4 = var7[var4];
            var7 = undefined;
            var5 = var5.bind(var7)(var4);
            var4 = var5.getRemainingTaskTime;
            var4 = var4.bind(var5)(var6);
            var10 = var4.minutes;
            var9 = var4.seconds;
            if(!(var10 > var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
            if(!(!(var9 > var3))) { _fun0004_ip = 24; continue _fun0004 }
case 22:
            if(!(!(var10 > var3))) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var4 = _closure1_slot0;
            var8 = _closure1_slot1;
            var3 = 7;
            var5 = var8[var3];
            var5 = var4.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.0BZpdi;
            var3 = {};
            var3['count'] = var9;
            var6 = var5.bind(var6)(var4, var3);
            _fun0004_ip = 27; continue _fun0004;
case 25:
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 7;
            var5 = var11[var3];
            var5 = var4.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.SxnF/O;
            var3 = {};
            var3['count'] = var10;
            var6 = var5.bind(var8)(var4, var3);
case 27:
            _fun0004_ip = 28; continue _fun0004;
case 24:
            var4 = _closure1_slot0;
            var11 = _closure1_slot1;
            var3 = 7;
            var5 = var11[var3];
            var5 = var4.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var3 = var11[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var4 = var3.lW/66D;
            var3 = {};
            var3['minutes'] = var10;
            var3['seconds'] = var9;
            var6 = var5.bind(var8)(var4, var3);
case 28:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var2 = 7;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            if(var1) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var3 = var2.GNsKiW;
            var1 = {};
            var1['remainTime'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0004_ip = 31; continue _fun0004;
case 29:
            var3 = var2.c59/Tp;
            var2 = {};
            var2['remainTime'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 31:
            return var1;
        }
    };
    var3['getVideoQuestWatchCtaAccessibilityLabel'] = var6;
    var6 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg1;
            var2 = var8.percentComplete;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var7 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 7;
            var2 = var9[var1];
            var6 = undefined;
            var2 = var7.bind(var6)(var2);
            var4 = var2.intl;
            var3 = var4.formatToPlainString;
            var1 = var9[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.GNsKiW;
            var1 = {};
            var5 = 6;
            var5 = var9[var5];
            var6 = var7.bind(var6)(var5);
            var5 = var6.formatWatchTaskRemainingTime;
            var5 = var5.bind(var6)(var8);
            var1['remainTime'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0005_ip = 34; continue _fun0005;
case 32:
            var9 = _closure1_slot0;
            var10 = _closure1_slot1;
            var2 = 7;
            var3 = var10[var2];
            var7 = undefined;
            var3 = var9.bind(var7)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var2 = var10[var2];
            var2 = var9.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.c59/Tp;
            var2 = {};
            var6 = 6;
            var6 = var10[var6];
            var7 = var9.bind(var7)(var6);
            var6 = var7.formatWatchTaskRemainingTime;
            var6 = var6.bind(var7)(var8);
            var2['remainTime'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 34:
            return var1;
        }
    };
    var3['getVideoQuestWatchCtaText'] = var6;
    var3['formatVideoProgressRatio'] = var5;
    var5 = function getVideoQuestEndCardCtaText(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var1 = var1.ctaConfig;
            var1 = var1.buttonLabel;
            var2 = null;
            if(!(var2 == var1)) { _fun0006_ip = 35; continue _fun0006 }
case 36:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 7;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.iiTtpJ;
            var1 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var3['getVideoQuestEndCardCtaText'] = var5;
    var5 = function handleVideoQuestModalClose(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var9 = var1.questId;
            var4 = var1.sourceQuestContent;
            var7 = var1.videoSessionId;
            var2 = _closure1_slot4;
            var1 = var2.getState;
            var2 = var1.bind(var2)();
            var1 = var2.getVideoProgress;
            var15 = var1.bind(var2)(var9);
            var3 = null;
            if(!(var3 != var15)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var2 = _closure1_slot3;
            var1 = var2.getQuest;
            var5 = var1.bind(var2)(var9);
            var1 = var3 != var5;
            if(!var1) { _fun0007_ip = 39; continue _fun0007 }
case 21:
            var8 = var5.userStatus;
            var10 = var3 == var8;
            var2 = undefined;
            if(var10) { _fun0007_ip = 40; continue _fun0007 }
case 8:
            var2 = var8.enrolledAt;
case 40:
            var1 = var3 != var2;
case 39:
            if(!var1) { _fun0007_ip = 41; continue _fun0007 }
case 32:
            var8 = var5.userStatus;
            var10 = var3 == var8;
            var2 = undefined;
            if(var10) { _fun0007_ip = 42; continue _fun0007 }
case 43:
            var2 = var8.completedAt;
case 42:
            var1 = var3 == var2;
case 41:
            if(!var1) { _fun0007_ip = 44; continue _fun0007 }
case 45:
            var3 = _closure1_slot6;
            var2 = var15.maxTimestampSec;
            var1 = undefined;
            var1 = var3.bind(var1)(var5, var2);
case 44:
            var5 = _closure1_slot7;
            var2 = var15.maxTimestampSec;
            var1 = var15.duration;
            var3 = undefined;
            var8 = var5.bind(var3)(var2, var1);
            var2 = _closure1_slot0;
            var10 = _closure1_slot1;
            var1 = 8;
            var5 = var10[var1];
            var13 = var2.bind(var3)(var5);
            var12 = var13.trackQuestEvent;
            var11 = {};
            var11['questId'] = var9;
            var5 = _closure1_slot5;
            var14 = var5.QUEST_VIDEO_PROGRESSED;
            var11['event'] = var14;
            var14 = {};
            var14['progress'] = var8;
            var15 = var15.maxTimestampSec;
            var14['video_timestamp_seconds'] = var15;
            var14['video_session_id'] = var7;
            var11['properties'] = var14;
            var11['sourceQuestContent'] = var4;
            var11 = var12.bind(var13)(var11);
            var1 = var10[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.trackQuestEvent;
            var1 = {};
            var1['questId'] = var9;
            var5 = var5.QUEST_VIDEO_MODAL_CLOSED;
            var1['event'] = var5;
            var5 = {};
            var5['video_progress'] = var8;
            var5['video_session_id'] = var7;
            var7 = _closure1_slot2;
            var6 = var7.getEffectiveConnectionSpeed;
            var6 = var6.bind(var7)();
            var5['network_connection_speed'] = var6;
            var1['properties'] = var5;
            var1['sourceQuestContent'] = var4;
            var1 = var2.bind(var3)(var1);
case 37:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleVideoQuestModalClose'] = var5;
    var3['getVideoQuestModalKey'] = var4;
    var2 = function isVideoQuestProgressing(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 6;
            var1 = var4[var1];
            var4 = undefined;
            var3 = var3.bind(var4)(var1);
            var1 = var3.hasWatchVideoTasks;
            var1 = var1.bind(var3)(var2);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0008_ip = 46; continue _fun0008 }
case 18:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 9;
            var3 = var7[var3];
            var3 = var6.bind(var4)(var3);
            var3 = var3.isModalOpen;
            var5 = _closure1_slot8;
            var2 = var2.id;
            var2 = var5.bind(var4)(var2);
            var1 = var3.bind(var4)(var2);
case 46:
            return var1;
        }
    };
    var3['isVideoQuestProgressing'] = var2;
    return var1;
})();
// app/lib/VideoHealthManager.tsx
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VideoToggleState;
    var _closure1_slot5 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function VideoHealthManager(arg1, arg2, arg3, arg4) {
            var7 = arg1;
            var12 = arg4;
            var5 = this;
            var4 = _closure1_slot3;
            var3 = _closure2_slot0;
            var1 = undefined;
            var3 = var4.bind(var1)(var5, var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 3;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var19 = 'VideoHealthManager';
            var20 = var3;
            var2 = new var20[var4](var19, var18);
            var2 = var2 instanceof Object ? var2 : var3;
            var5['logger'] = var2;
            var2 = false;
            var5['disabled'] = var2;
            var2 = {};
            var5['perUserFpsWindow'] = var2;
            var2 = {};
            var5['prevFramesCodec'] = var2;
            var2 = {};
            var5['prevTimestamp'] = var2;
            var2 = global;
            var3 = var2.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var20 = var4;
            var3 = new var20[var3](var19);
            var3 = var3 instanceof Object ? var3 : var4;
            var5['streamDisabledUsers'] = var3;
            var3 = {};
            var5['retryBackoffCache'] = var3;
            var3 = {};
            var5['timeoutIdCache'] = var3;
            var3 = {};
            var5['currentVideoAutoToggleState'] = var3;
            var3 = new Array(0);
            var5['enableQueue'] = var3;
            var5['windowLength'] = var7;
            var3 = arg3;
            var5['fpsThreshold'] = var3;
            var6 = var2.Math;
            var4 = var6.ceil;
            var3 = arg2;
            var3 = var7 * var3;
            var3 = var4.bind(var6)(var3);
            var5['fpsWindowBorderlineCount'] = var3;
            var5['backoffTimeSec'] = var12;
            var4 = var5.logger;
            var3 = var4.info;
            var19 = var5.windowLength;
            var17 = var5.fpsWindowBorderlineCount;
            var15 = var5.fpsThreshold;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var20 = 'constructor with windowLength = ';
            var18 = ',\n      fpsWindowBorderlineCount = ';
            var16 = ',\n      fpsThreshold = ';
            var14 = ',\n      backoffTimeSec = ';
            var13 = var12;
            var2 = var20[var8](var19, var18, var17, var16, var15, var14, var13, var12);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'calculateFps';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var5 = arg2;
                var4 = arg3;
                var1 = this;
                var2 = var1.prevFramesCodec;
                var6 = var2[var3];
                var2 = -1;
                if(!(var2 !== var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var1.prevFramesCodec;
                var2 = var2[var3];
                if(!(!(var5 < var2))) { _fun0001_ip = 2; continue _fun0001 }
case 4:
                var2 = var1.prevTimestamp;
                var2 = var2[var3];
                if(!(!(var4 < var2))) { _fun0001_ip = 2; continue _fun0001 }
case 5:
                var2 = var1.prevTimestamp;
                var6 = var2[var3];
                var7 = var1.windowLength;
                var2 = 1000;
                var2 = var2 * var7;
                var2 = var6 + var2;
                if(!(!(var4 > var2))) { _fun0001_ip = 2; continue _fun0001 }
case 6:
                var2 = var1.prevTimestamp;
                var6 = var2[var3];
                var2 = 900;
                var2 = var6 + var2;
                if(!(!(var4 < var2))) { _fun0001_ip = 7; continue _fun0001 }
case 8:
                var6 = var1.elapsedSeconds;
                var2 = var1.prevTimestamp;
                var2 = var2[var3];
                var6 = var6.bind(var1)(var4, var2);
                var2 = var1.prevTimestamp;
                var2[var3] = var4;
                var2 = var1.prevFramesCodec;
                var2 = var2[var3];
                var2 = var5 - var2;
                var2 = var2 / var6;
                var6 = var1.prevFramesCodec;
                var6[var3] = var5;
                return var2;
case 7:
                var2 = global;
                var2 = var2.NaN;
                return var2;
case 2:
                var2 = var1.prevFramesCodec;
                var2[var3] = var5;
                var2 = var1.prevTimestamp;
                var2[var3] = var4;
                var2 = var1.perUserFpsWindow;
                var1 = new Array(0);
                var2[var3] = var1;
                var1 = global;
                var1 = var1.NaN;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(12);
        var2[0] = var1;
        var1 = {};
        var6 = 'updateFps';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = var2.disabled;
                if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var5 = var2.streamDisabledUsers;
                var1 = var5.has;
                var1 = var1.bind(var5)(var3);
                if(var1) { _fun0002_ip = 9; continue _fun0002 }
case 11:
                var6 = var2.calculateFps;
                var5 = arg2;
                var1 = arg3;
                var7 = var6.bind(var2)(var3, var5, var1);
                var1 = 0;
                if(!(!(var7 < var1))) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var1 = global;
                var6 = var1.Number;
                var5 = var6.isFinite;
                var5 = var5.bind(var6)(var7);
                if(!var5) { _fun0002_ip = 12; continue _fun0002 }
case 14:
                var5 = var2.perUserFpsWindow;
                var6 = var5[var3];
                var5 = var6.push;
                var5 = var5.bind(var6)(var7);
                var5 = var2.perUserFpsWindow;
                var5 = var5[var3];
                var6 = var5.length;
                var5 = var2.windowLength;
                if(!(!(var6 < var5))) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var5 = var2.perUserFpsWindow;
                var5 = var5[var3];
                var6 = var5.length;
                var5 = var2.windowLength;
                if(!(var6 > var5)) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                var5 = var2.perUserFpsWindow;
                var6 = var5[var3];
                var5 = var6.shift;
                var5 = var5.bind(var6)();
case 17:
                var5 = var2.perUserFpsWindow;
                var6 = var5[var3];
                var5 = var6.filter;
                var4 = function(arg1) {
                    var1 = _closure3_slot0;
                    var2 = var1.fpsThreshold;
                    var1 = arg1;
                    var1 = var1 < var2;
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var5 = var4.length;
                var4 = var2.fpsWindowBorderlineCount;
                if(!(!(var5 >= var4))) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var4 = var2.currentVideoAutoToggleState;
                var6 = var4[var3];
                var4 = _closure1_slot5;
                var4 = var4.AUTO_PROBING;
                if(!(var6 === var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var7 = var2.currentVideoAutoToggleState;
                var4 = _closure1_slot5;
                var6 = var4.AUTO_ENABLED;
                var7[var3] = var6;
                var8 = var2.logger;
                var7 = var8.info;
                var6 = var1.HermesInternal;
                var9 = var6.concat;
                var6 = 'acceptable conditions reached, will reset and send a AUTO_ENABLED for user ';
                var6 = var9.bind(var6)(var3);
                var6 = var7.bind(var8)(var6);
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 4;
                var5 = var6[var5];
                var6 = undefined;
                var5 = var7.bind(var6)(var5);
                var4 = var4.AUTO_ENABLED;
                var4 = var5.bind(var6)(var3, var4);
                _fun0002_ip = 21; continue _fun0002;
case 19:
                var5 = var2.logger;
                var4 = var5.info;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = '';
                var1 = ': detected poor network quality, turning off video';
                var1 = var7.bind(var6)(var3, var1);
                var1 = var4.bind(var5)(var1);
                var4 = var2.streamDisabledUsers;
                var1 = var4.add;
                var1 = var1.bind(var4)(var3);
                var6 = var2.currentVideoAutoToggleState;
                var1 = _closure1_slot5;
                var5 = var1.DISABLED;
                var6[var3] = var5;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 4;
                var4 = var5[var4];
                var5 = undefined;
                var4 = var6.bind(var5)(var4);
                var1 = var1.DISABLED;
                var1 = var4.bind(var5)(var3, var1);
                var1 = var2.startReenableBackoffTimer;
                var1 = var1.bind(var2)(var3);
case 21:
                var1 = var2.probingUserId;
                if(!(var1 === var3)) { _fun0002_ip = 9; continue _fun0002 }
case 23:
                var1 = undefined;
                var2['probingUserId'] = var1;
                var1 = var2.tryReenableQueue;
                var1 = var1.bind(var2)();
                _fun0002_ip = 9; continue _fun0002;
case 15:
                var1 = undefined;
                return var1;
case 12:
                var1 = undefined;
                return var1;
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'startReenableBackoffTimer';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var3;
                var4 = var2.disabled;
                if(var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                var7 = var2.logger;
                var6 = var7.info;
                var4 = global;
                var5 = var4.HermesInternal;
                var8 = var5.concat;
                var5 = 'startReenableBackoffTimer for user ';
                var5 = var8.bind(var5)(var3);
                var5 = var6.bind(var7)(var5);
                var5 = var2.retryBackoffCache;
                var5 = var5[var3];
                var10 = var5.lastBackoffTime;
                var6 = var5.expBackoffFactor;
                var7 = 1;
                var5 = null;
                var8 = var7;
                if(!(var5 !== var10)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                var5 = 16;
                var5 = var6 > var5;
                var8 = var7;
                if(var5) { _fun0003_ip = 26; continue _fun0003 }
case 28:
                var9 = var2.elapsedSeconds;
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 5;
                var11 = var11[var5];
                var5 = undefined;
                var11 = var12.bind(var5)(var11);
                var5 = var11.now;
                var5 = var5.bind(var11)();
                var9 = var9.bind(var2)(var5, var10);
                var5 = 600;
                var5 = var9 > var5;
                var8 = var7;
                if(var5) { _fun0003_ip = 26; continue _fun0003 }
case 29:
                var5 = 2;
                var8 = var6 * var5;
case 26:
                var10 = var2.retryBackoffCache;
                var7 = {};
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 5;
                var11 = var9[var6];
                var6 = undefined;
                var12 = var12.bind(var6)(var11);
                var11 = var12.now;
                var11 = var11.bind(var12)();
                var7['lastBackoffTime'] = var11;
                var7['expBackoffFactor'] = var8;
                var10[var3] = var7;
                var7 = var2.backoffTimeSec;
                var7 = var8 * var7;
                var8 = _closure1_slot1;
                var5 = 6;
                var5 = var9[var5];
                var5 = var8.bind(var6)(var5);
                var5 = var5.Millis;
                var5 = var5.SECOND;
                var5 = var7 * var5;
                var9 = var2.logger;
                var8 = var9.info;
                var7 = var4.HermesInternal;
                var11 = var7.concat;
                var10 = 'starting backoff timer with time = ';
                var7 = ' milliseconds';
                var7 = var11.bind(var10)(var5, var7);
                var7 = var8.bind(var9)(var7);
                var2 = var2.timeoutIdCache;
                var4 = var4.setTimeout;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var2 = var3.queueReenable;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var4.bind(var6)(var1, var5);
                var2[var3] = var1;
case 24:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'queueReenable';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var2 = this;
            var4 = var2.enableQueue;
            var3 = var4.push;
            var1 = arg1;
            var1 = var3.bind(var4)(var1);
            var1 = var2.tryReenableQueue;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'tryReenableQueue';
        var1['key'] = var6;
        var6 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var1 = var4.disabled;
                if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                var1 = var4.probingUserId;
                var3 = null;
                if(!(var3 != var1)) { _fun0004_ip = 32; continue _fun0004 }
case 10:
                var2 = var4.probingUserId;
                var1 = var4.perUserFpsWindow;
                var1 = var2 in var1;
                if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 32:
                var2 = var4.enableQueue;
                var1 = var2.shift;
                var2 = var1.bind(var2)();
                if(!(var3 != var2)) { _fun0004_ip = 30; continue _fun0004 }
case 33:
                var1 = var4.reenableVideo;
                var1 = var1.bind(var4)(var2);
                if(var1) { _fun0004_ip = 30; continue _fun0004 }
case 34:
                if(!(var3 != var2)) { _fun0004_ip = 30; continue _fun0004 }
case 35:
                var1 = var4.reenableVideo;
                var1 = var1.bind(var4)(var2);
                if(!var1) { _fun0004_ip = 34; continue _fun0004 }
case 30:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'reenableVideo';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var6 = this;
                var1 = var6.perUserFpsWindow;
                var1 = var5 in var1;
                if(!var1) { _fun0005_ip = 18; continue _fun0005 }
case 36:
                var9 = var6.logger;
                var8 = var9.info;
                var10 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 5;
                var2 = var7[var2];
                var4 = undefined;
                var10 = var10.bind(var4)(var2);
                var2 = var10.now;
                var12 = var2.bind(var10)();
                var2 = global;
                var2 = var2.HermesInternal;
                var11 = var2.concat;
                var10 = 'reenableVideo called for user ';
                var2 = ' - time = ';
                var2 = var11.bind(var10)(var5, var2, var12);
                var2 = var8.bind(var9)(var2);
                var2 = var6.stateCleanupBeforeEnable;
                var2 = var2.bind(var6)(var5);
                var9 = var6.currentVideoAutoToggleState;
                var2 = _closure1_slot5;
                var8 = var2.AUTO_PROBING;
                var9[var5] = var8;
                var6['probingUserId'] = var5;
                var6 = _closure1_slot1;
                var3 = 4;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var2 = var2.AUTO_PROBING;
                var2 = var3.bind(var4)(var5, var2);
                var1 = true;
case 18:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'elapsedSeconds';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var2 = arg1;
            var1 = arg2;
            var2 = var2 - var1;
            var1 = 1000;
            var1 = var2 / var1;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'stateCleanupBeforeEnable';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = arg1;
            var1 = this;
            var5 = var1.logger;
            var4 = var5.info;
            var2 = 'VideoHealthManager::stateCleanupBeforeEnable';
            var2 = var4.bind(var5)(var2);
            var4 = var1.perUserFpsWindow;
            var2 = new Array(0);
            var4[var3] = var2;
            var4 = var1.prevFramesCodec;
            var2 = -1;
            var4[var3] = var2;
            var2 = var1.streamDisabledUsers;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getCurrentVideoToggleState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var2 = var1.currentVideoAutoToggleState;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'createUser';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var5 = var1.logger;
                var4 = var5.info;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var2 = 'VideoHealthManager::createUser ';
                var2 = var6.bind(var2)(var3);
                var2 = var4.bind(var5)(var2);
                var2 = var1.perUserFpsWindow;
                var2 = var3 in var2;
                if(var2) { _fun0006_ip = 37; continue _fun0006 }
case 38:
                var4 = var1.perUserFpsWindow;
                var2 = new Array(0);
                var4[var3] = var2;
                var4 = var1.prevFramesCodec;
                var2 = -1;
                var4[var3] = var2;
                var4 = var1.currentVideoAutoToggleState;
                var2 = _closure1_slot5;
                var2 = var2.NONE;
                var4[var3] = var2;
                var2 = var1.retryBackoffCache;
                var1 = {'lastBackoffTime': null, 'expBackoffFactor': 1};
                var2[var3] = var1;
case 37:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'deleteUser';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var6 = var2.logger;
                var5 = var6.info;
                var1 = global;
                var4 = var1.HermesInternal;
                var7 = var4.concat;
                var4 = 'VideoHealthManager::deleteUser ';
                var4 = var7.bind(var4)(var3);
                var4 = var5.bind(var6)(var4);
                var4 = var2.perUserFpsWindow;
                var4 = delete var4[var3];
                var4 = var2.prevFramesCodec;
                var4 = delete var4[var3];
                var4 = var2.retryBackoffCache;
                var4 = delete var4[var3];
                var4 = var2.currentVideoAutoToggleState;
                var4 = delete var4[var3];
                var5 = var2.streamDisabledUsers;
                var4 = var5.delete;
                var4 = var4.bind(var5)(var3);
                var4 = var2.probingUserId;
                if(!(var3 === var4)) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var4 = undefined;
                var2['probingUserId'] = var4;
                var4 = var2.tryReenableQueue;
                var4 = var4.bind(var2)();
case 39:
                var5 = var1.clearTimeout;
                var1 = var2.timeoutIdCache;
                var4 = var1[var3];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var2 = var2.timeoutIdCache;
                var2 = delete var2[var3];
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'disable';
        var1['key'] = var6;
        var5 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var6 = this;
                var1 = true;
                var6['disabled'] = var1;
                var4 = var6.perUserFpsWindow;
                for(var1 in var4)
case 41:
                {
case 42:
                    var8 = var1;
                    var7 = var6.deleteUser;
                    var7 = var7.bind(var6)(var8);
                    _fun0008_ip = 41; continue _fun0008;
                }
case 43:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var5;
        var2[11] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = {'featureEnabled': null, 'windowLength': 5, 'allowedPoorFpsRatio': 1, 'fpsThreshold': 5, 'backoffTimeSec': 15};
    var7 = 7;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.isMobile;
    var4['featureEnabled'] = var7;
    var2['defaultConfig'] = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'lib/VideoHealthManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['VideoHealthManager'] = var2;
    return var1;
})();
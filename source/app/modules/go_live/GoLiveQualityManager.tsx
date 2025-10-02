// app/modules/go_live/GoLiveQualityManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
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
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function assert(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.captureMessage;
            var4 = 'Assert failed in GoLiveQualityManager: ';
            var1 = arg2;
            var1 = var4 + var1;
            var1 = var2.bind(var3)(var1);
case 6:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var5 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var9)(var3, var1, var2);
    var10 = 0;
    var2 = var7[var10];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var13 = 1;
    var2 = var7[var13];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var12 = 2;
    var2 = var7[var12];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var11 = 3;
    var2 = var7[var11];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.SimulcastOverrideQuality;
    var _closure1_slot9 = var2;
    var2 = 7;
    var5 = var7[var2];
    var5 = var8.bind(var1)(var5);
    var5 = var5.Millis;
    var9 = var5.SECOND;
    var5 = 10;
    var9 = var5 * var9;
    var _closure1_slot10 = var9;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var2 = var2.Millis;
    var2 = var2.SECOND;
    var2 = var5 * var2;
    var _closure1_slot11 = var2;
    var2 = {};
    var5 = 'requested-ssrcs-update';
    var2['RequestedSSRCsUpdate'] = var5;
    var5 = 'requested-streams-update';
    var2['RequestedStreamsUpdate'] = var5;
    var _closure1_slot12 = var2;
    var5 = {};
    var5['Ready'] = var10;
    var9 = 'Ready';
    var5[var10] = var9;
    var5['Pending'] = var13;
    var9 = 'Pending';
    var5[var13] = var9;
    var5['PendingSeamless'] = var12;
    var9 = 'PendingSeamless';
    var5[var12] = var9;
    var5['Finalizing'] = var11;
    var9 = 'Finalizing';
    var5[var11] = var9;
    var _closure1_slot13 = var5;
    var5 = {};
    var5['None'] = var10;
    var9 = 'None';
    var5[var10] = var9;
    var10 = 60;
    var5['Low'] = var10;
    var9 = 'Low';
    var5[var10] = var9;
    var10 = 100;
    var5['High'] = var10;
    var9 = 'High';
    var5[var10] = var9;
    var _closure1_slot14 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var4 = function(arg1) {
        var4 = function GoLiveQualityManager(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot3;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var1 = _closure1_slot6;
                var11 = var1.bind(var5)(var4);
                var4 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var5)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot6;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 10:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = arg1;
                var1['supportsSeamless'] = var4;
                var4 = null;
                var1['streamId'] = var4;
                var4 = 0;
                var1['resolutionWidth'] = var4;
                var1['resolutionHeight'] = var4;
                var6 = new Array(0);
                var1['videoStreams'] = var6;
                var1['audioSSRC'] = var4;
                var1['hqSSRC'] = var4;
                var1['lqSSRC'] = var4;
                var4 = _closure1_slot13;
                var4 = var4.Ready;
                var1['switchState'] = var4;
                var4 = -1;
                var1['pendingSSRC'] = var4;
                var1['currentSSRC'] = var4;
                var4 = false;
                var1['downgraded'] = var4;
                var4 = true;
                var1['throttleDowngradeChanges'] = var4;
                var1['lastDowngradeChangeTime'] = var5;
                var6 = global;
                var6 = var6.Set;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var15 = var7;
                var6 = new var15[var6](var14);
                var6 = var6 instanceof Object ? var6 : var7;
                var1['otherUsers'] = var6;
                var6 = _closure1_slot9;
                var6 = var6.NO_OVERRIDE;
                var1['debugQualityOverride'] = var6;
                var1['incomingVideoEnabled'] = var4;
                var4 = function() {
                    var1 = _closure3_slot0;
                    var2 = var1.delayedCall;
                    var1 = var2.delay;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['delayedUpdate'] = var4;
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var8 = var7.bind(var5)(var4);
                var4 = var8.prototype;
                var7 = Object.create(var4, {constructor: {value: var8}});
                var14 = 'GoLiveQualityManager';
                var15 = var7;
                var4 = new var15[var8](var14, var13);
                var4 = var4 instanceof Object ? var4 : var7;
                var1['logger'] = var4;
                var4 = _closure1_slot0;
                var3 = 10;
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.DelayedCall;
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var14 = 500;
                var13 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.update;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var15 = var3;
                var2 = new var15[var5](var14, var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['delayedCall'] = var2;
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
        var1 = 'setUserID';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['userId'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(34);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserID';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.userId;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'updateAudioAndVideoStreamInfo';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg2;
                var2 = this;
                var3 = var4.filter;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.active;
                    return var1;
                };
                var1 = var3.bind(var4)(var1);
                var3 = var2.videoStreams;
                var4 = var3.length;
                var3 = var1.length;
                var5 = var4 !== var3;
                var3 = arg1;
                var2['audioSSRC'] = var3;
                var2['videoStreams'] = var1;
                var1 = var2.videoStreams;
                var3 = var1.length;
                var1 = 1;
                if(!(!(var3 > var1))) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                if(!var5) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var1 = var2.reset;
                var1 = var1.bind(var2)();
case 13:
                var1 = var2.update;
                var1 = var1.bind(var2)();
                _fun0004_ip = 15; continue _fun0004;
case 11:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var10 = 11;
                var1 = var1[var10];
                var4 = undefined;
                var9 = var3.bind(var4)(var1);
                var6 = var9.minBy;
                var3 = var2.videoStreams;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.quality;
                    return var1;
                };
                var1 = var6.bind(var9)(var3, var1);
                var6 = null;
                var3 = var6 == var1;
                var9 = undefined;
                if(var3) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var9 = var1.ssrc;
case 16:
                var11 = var6 != var9;
                var3 = 0;
                if(!var11) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = var9;
case 18:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var10];
                var10 = var9.bind(var4)(var8);
                var9 = var10.maxBy;
                var8 = var2.videoStreams;
                var7 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.quality;
                    return var1;
                };
                var7 = var9.bind(var10)(var8, var7);
                var8 = var6 == var7;
                var4 = undefined;
                if(var8) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var4 = var7.ssrc;
case 20:
                var6 = var6 != var4;
                var1 = 0;
                if(!var6) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                var1 = var4;
case 22:
                var4 = var2.lqSSRC;
                var4 = var3 !== var4;
                if(var4) { _fun0004_ip = 24; continue _fun0004 }
case 25:
                var6 = var2.hqSSRC;
                var4 = var1 !== var6;
case 24:
                if(var4) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var4 = var5;
case 26:
                if(!var4) { _fun0004_ip = 15; continue _fun0004 }
case 28:
                var2['lqSSRC'] = var3;
                var2['hqSSRC'] = var1;
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                var1 = var2.update;
                var1 = var1.bind(var2)();
case 15:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'setGoLiveStreamDowngraded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.senderSupportsSimulcast;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var4 = var2.isOneToOneCall;
                var4 = var4.bind(var2)();
                var1 = !var4;
case 29:
                if(!var1) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                var5 = var2.debugQualityOverride;
                var4 = _closure1_slot9;
                var4 = var4.NO_OVERRIDE;
                var1 = var5 === var4;
case 31:
                if(!var1) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                var4 = var2.downgraded;
                var1 = var3 !== var4;
case 33:
                if(!var1) { _fun0005_ip = 35; continue _fun0005 }
case 5:
                var4 = var2.isDowngradeChangeAllowed;
                var1 = var4.bind(var2)(var3);
case 35:
                if(!var1) { _fun0005_ip = 17; continue _fun0005 }
case 36:
                var6 = var2.logger;
                var5 = var6.info;
                var1 = global;
                var4 = var1.HermesInternal;
                var7 = var4.concat;
                var4 = 'Setting downgraded to ';
                var4 = var7.bind(var4)(var3);
                var4 = var5.bind(var6)(var4);
                var2['downgraded'] = var3;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2['lastDowngradeChangeTime'] = var1;
                var1 = var2.update;
                var1 = var1.bind(var2)();
case 17:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isDowngraded';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.downgraded;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'setSimulcastDebugOverride';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.senderSupportsSimulcast;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0006_ip = 37; continue _fun0006 }
case 30:
                var4 = var2.debugQualityOverride;
                var3 = var1 !== var4;
case 37:
                if(!var3) { _fun0006_ip = 38; continue _fun0006 }
case 29:
                var2['debugQualityOverride'] = var1;
                var1 = var2.update;
                var1 = var1.bind(var2)();
case 38:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'setFirstFrameReceived';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var10 = arg1;
                var2 = this;
                var2['currentSSRC'] = var10;
                var1 = var2.senderSupportsSimulcast;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                var4 = var2.switchState;
                var3 = _closure1_slot13;
                var3 = var3.Pending;
                if(!(var4 !== var3)) { _fun0007_ip = 41; continue _fun0007 }
case 9:
                var4 = var2.switchState;
                var3 = _closure1_slot13;
                var3 = var3.PendingSeamless;
                if(!(var4 !== var3)) { _fun0007_ip = 41; continue _fun0007 }
case 33:
                var5 = var2.logger;
                var4 = var5.warn;
                var8 = var2.switchState;
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var6 = 'Received the first frame of ssrc ';
                var3 = ' while switchState is ';
                var3 = var7.bind(var6)(var10, var3, var8);
                var3 = var4.bind(var5)(var3);
                _fun0007_ip = 39; continue _fun0007;
case 41:
                var3 = var2.pendingSSRC;
                if(!(var3 !== var10)) { _fun0007_ip = 42; continue _fun0007 }
case 43:
                var5 = var2.logger;
                var4 = var5.warn;
                var14 = var2.pendingSSRC;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var15 = 'Pending to switch to ssrc: ';
                var13 = ' but received the first frame of ';
                var11 = ', noop';
                var12 = var10;
                var3 = var15[var8](var14, var13, var12, var11, var10);
                var3 = var4.bind(var5)(var3);
                _fun0007_ip = 39; continue _fun0007;
case 42:
                var3 = -1;
                var2['pendingSSRC'] = var3;
                var4 = var2.switchState;
                var3 = _closure1_slot13;
                var3 = var3.PendingSeamless;
                if(!(var4 !== var3)) { _fun0007_ip = 44; continue _fun0007 }
case 45:
                var3 = _closure1_slot13;
                var3 = var3.Ready;
                var2['switchState'] = var3;
                _fun0007_ip = 39; continue _fun0007;
case 44:
                var1 = _closure1_slot13;
                var1 = var1.Finalizing;
                var2['switchState'] = var1;
                var1 = var2.update;
                var1 = var1.bind(var2)();
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'setThrottleStreamDowngradeChanges';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['throttleDowngradeChanges'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'senderSupportsSimulcast';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.videoStreams;
            var2 = var1.length;
            var1 = 1;
            var1 = var2 > var1;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'updateCallUserIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = this;
            var1 = global;
            var4 = var1.Set;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var6 = arg1;
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2['otherUsers'] = var1;
            var4 = var2.otherUsers;
            var3 = var4.delete;
            var5 = _closure1_slot8;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var3.bind(var4)(var1);
            var1 = var2.update;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'onIncomingVideoEnabled';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.incomingVideoEnabled;
                if(!(var3 !== var1)) { _fun0008_ip = 29; continue _fun0008 }
case 46:
                var2['incomingVideoEnabled'] = var1;
                var1 = var2.update;
                var1 = var1.bind(var2)();
case 29:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'update';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = this;
                var2 = var3.userId;
                var1 = undefined;
                var2 = var1 !== var2;
                if(!var2) { _fun0009_ip = 40; continue _fun0009 }
case 47:
                var5 = var3.userId;
                var4 = null;
                var2 = var4 !== var5;
case 40:
                if(!var2) { _fun0009_ip = 38; continue _fun0009 }
case 48:
                var4 = var3.videoStreams;
                var5 = var4.length;
                var4 = 0;
                var2 = var4 !== var5;
case 38:
                if(!var2) { _fun0009_ip = 49; continue _fun0009 }
case 9:
                var2 = var3.senderSupportsSimulcast;
                var2 = var2.bind(var3)();
                if(var2) { _fun0009_ip = 12; continue _fun0009 }
case 8:
                var2 = var3.singleCastUpdate;
                var2 = var2.bind(var3)();
                _fun0009_ip = 49; continue _fun0009;
case 12:
                var2 = var3.supportsSeamless;
                if(var2) { _fun0009_ip = 50; continue _fun0009 }
case 35:
                var2 = var3.directUpdate;
                var2 = var2.bind(var3)();
                _fun0009_ip = 49; continue _fun0009;
case 50:
                var2 = var3.seamlessUpdate;
                var2 = var2.bind(var3)();
case 49:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'seamlessUpdate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = this;
                var1 = var2.getQuality;
                var4 = var1.bind(var2)();
                var3 = _closure1_slot14;
                var3 = var3.None;
                if(!(var4 === var3)) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                var3 = var2.isReceiving;
                var3 = var3.bind(var2)();
                if(var3) { _fun0010_ip = 53; continue _fun0010 }
case 51:
                var5 = var2.switchState;
                var3 = _closure1_slot13;
                var3 = var3.Ready;
                if(!(var3 !== var5)) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                var3 = _closure1_slot13;
                var3 = var3.PendingSeamless;
                if(!(var3 !== var5)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                var3 = _closure1_slot13;
                var3 = var3.Pending;
                if(!(var3 !== var5)) { _fun0010_ip = 26; continue _fun0010 }
case 58:
                var3 = _closure1_slot13;
                var3 = var3.Finalizing;
                if(!(var3 === var5)) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                var7 = _closure1_slot16;
                var3 = var2.isReceiving;
                var6 = var3.bind(var2)();
                var5 = undefined;
                var3 = 'Should be receiving a stream in Finalizing state';
                var3 = var7.bind(var5)(var6, var3);
                var6 = var2.logger;
                var5 = var6.info;
                var3 = _closure1_slot14;
                var3 = var3.High;
                var7 = 'LQ';
                if(!(var4 === var3)) { _fun0010_ip = 18; continue _fun0010 }
case 61:
                var7 = 'HQ';
case 18:
                var3 = 'Finalizing seamless transition to ';
                var3 = var3 + var7;
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot14;
                var3 = var3.High;
                if(!(var4 !== var3)) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                var3 = _closure1_slot14;
                var3 = var3.Low;
                if(!(var4 === var3)) { _fun0010_ip = 44; continue _fun0010 }
case 64:
                var3 = var2.requestLQ;
                var3 = var3.bind(var2)();
                _fun0010_ip = 44; continue _fun0010;
case 62:
                var3 = var2.requestHQ;
                var3 = var3.bind(var2)();
case 44:
                var3 = _closure1_slot13;
                var3 = var3.Ready;
                var2['switchState'] = var3;
                var3 = -1;
                var2['pendingSSRC'] = var3;
                _fun0010_ip = 59; continue _fun0010;
case 26:
                var7 = _closure1_slot16;
                var5 = var2.pendingSSRC;
                var6 = undefined;
                var3 = -1;
                var5 = var3 !== var5;
                var3 = 'Pending state should have a pendingSSRC';
                var3 = var7.bind(var6)(var5, var3);
                var3 = _closure1_slot14;
                var3 = var3.Low;
                if(!(var4 === var3)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                var3 = var2.pendingHQ;
                var3 = var3.bind(var2)();
                if(var3) { _fun0010_ip = 67; continue _fun0010 }
case 65:
                var3 = _closure1_slot14;
                var3 = var3.High;
                var3 = var4 === var3;
                if(!var3) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                var5 = var2.pendingLQ;
                var3 = var5.bind(var2)();
case 68:
                if(!var3) { _fun0010_ip = 59; continue _fun0010 }
case 70:
                var6 = var2.logger;
                var5 = var6.info;
                var9 = var2.hqSSRC;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = 'Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ';
                var3 = ')';
                var3 = var8.bind(var7)(var9, var3);
                var3 = var5.bind(var6)(var3);
                var3 = var2.hqSSRC;
                var2['pendingSSRC'] = var3;
                var3 = var2.requestHQ;
                var3 = var3.bind(var2)();
                _fun0010_ip = 59; continue _fun0010;
case 67:
                var6 = var2.logger;
                var5 = var6.info;
                var9 = var2.lqSSRC;
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = 'Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ';
                var3 = ')';
                var3 = var8.bind(var7)(var9, var3);
                var3 = var5.bind(var6)(var3);
                var3 = var2.lqSSRC;
                var2['pendingSSRC'] = var3;
                var3 = var2.requestLQ;
                var3 = var3.bind(var2)();
                _fun0010_ip = 59; continue _fun0010;
case 56:
                var8 = _closure1_slot16;
                var5 = var2.pendingSSRC;
                var7 = undefined;
                var3 = -1;
                var6 = var3 !== var5;
                var5 = 'PendingSeamless state should have a pendingSSRC';
                var5 = var8.bind(var7)(var6, var5);
                var5 = _closure1_slot14;
                var5 = var5.Low;
                if(!(var4 === var5)) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                var5 = var2.pendingHQ;
                var5 = var5.bind(var2)();
                if(var5) { _fun0010_ip = 73; continue _fun0010 }
case 71:
                var5 = _closure1_slot14;
                var5 = var5.High;
                var5 = var4 === var5;
                if(!var5) { _fun0010_ip = 74; continue _fun0010 }
case 75:
                var6 = var2.pendingLQ;
                var5 = var6.bind(var2)();
case 74:
                if(!var5) { _fun0010_ip = 59; continue _fun0010 }
case 76:
                var7 = var2.logger;
                var6 = var7.info;
                var10 = var2.hqSSRC;
                var5 = global;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var8 = 'Cancelling seamless transition from HQ to LQ, re-requesting HQ (ssrc ';
                var5 = ')';
                var5 = var9.bind(var8)(var10, var5);
                var5 = var6.bind(var7)(var5);
                var5 = _closure1_slot13;
                var5 = var5.Ready;
                var2['switchState'] = var5;
                var2['pendingSSRC'] = var3;
                var5 = var2.requestHQ;
                var5 = var5.bind(var2)();
                _fun0010_ip = 59; continue _fun0010;
case 73:
                var7 = var2.logger;
                var6 = var7.info;
                var10 = var2.lqSSRC;
                var5 = global;
                var5 = var5.HermesInternal;
                var9 = var5.concat;
                var8 = 'Cancelling seamless transition from LQ to HQ, re-requesting LQ (ssrc ';
                var5 = ')';
                var5 = var9.bind(var8)(var10, var5);
                var5 = var6.bind(var7)(var5);
                var5 = _closure1_slot13;
                var5 = var5.Ready;
                var2['switchState'] = var5;
                var2['pendingSSRC'] = var3;
                var3 = var2.requestLQ;
                var3 = var3.bind(var2)();
                _fun0010_ip = 59; continue _fun0010;
case 54:
                var7 = _closure1_slot16;
                var5 = var2.pendingSSRC;
                var6 = undefined;
                var3 = -1;
                var5 = var3 === var5;
                var3 = 'Ready state should not have a pendingSSRC';
                var3 = var7.bind(var6)(var5, var3);
                var3 = var2.shouldSeamlessTransition;
                var7 = var3.bind(var2)(var4);
                var6 = var2.logger;
                var5 = var6.info;
                var3 = _closure1_slot14;
                var3 = var3.High;
                var11 = 'LQ';
                if(var7) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                var13 = var11;
                if(!(var4 === var3)) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                var13 = 'HQ';
case 79:
                var7 = _closure1_slot14;
                var7 = var7.High;
                if(!(var4 !== var7)) { _fun0010_ip = 81; continue _fun0010 }
case 82:
                var12 = var2.lqSSRC;
                _fun0010_ip = 83; continue _fun0010;
case 81:
                var12 = var2.hqSSRC;
case 83:
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var18 = 'Starting non-seamless transition to ';
                var16 = ' (ssrc ';
                var14 = ')';
                var17 = var13;
                var15 = var12;
                var7 = var18[var10](var17, var16, var15, var14, var13);
                var7 = var5.bind(var6)(var7);
                var7 = _closure1_slot14;
                var7 = var7.High;
                if(!(var4 !== var7)) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                var7 = var2.lqSSRC;
                _fun0010_ip = 86; continue _fun0010;
case 84:
                var7 = var2.hqSSRC;
case 86:
                var2['pendingSSRC'] = var7;
                var7 = _closure1_slot13;
                var7 = var7.Pending;
                var2['switchState'] = var7;
                var7 = _closure1_slot14;
                var7 = var7.High;
                if(!(var4 !== var7)) { _fun0010_ip = 87; continue _fun0010 }
case 88:
                var7 = var2.requestLQ;
                var7 = var7.bind(var2)();
                _fun0010_ip = 59; continue _fun0010;
case 87:
                var7 = var2.requestHQ;
                var7 = var7.bind(var2)();
                _fun0010_ip = 59; continue _fun0010;
case 77:
                if(!(var4 === var3)) { _fun0010_ip = 89; continue _fun0010 }
case 90:
                var11 = 'HQ';
case 89:
                var3 = _closure1_slot14;
                var3 = var3.High;
                if(!(var4 !== var3)) { _fun0010_ip = 91; continue _fun0010 }
case 92:
                var10 = var2.lqSSRC;
                _fun0010_ip = 93; continue _fun0010;
case 91:
                var10 = var2.hqSSRC;
case 93:
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var18 = 'Starting seamless transition to ';
                var16 = ' (ssrc ';
                var14 = ')';
                var17 = var11;
                var15 = var10;
                var3 = var18[var9](var17, var16, var15, var14, var13);
                var3 = var5.bind(var6)(var3);
                var3 = _closure1_slot14;
                var3 = var3.High;
                if(!(var4 !== var3)) { _fun0010_ip = 94; continue _fun0010 }
case 95:
                var3 = var2.lqSSRC;
                _fun0010_ip = 96; continue _fun0010;
case 94:
                var3 = var2.hqSSRC;
case 96:
                var2['pendingSSRC'] = var3;
                var1 = _closure1_slot13;
                var1 = var1.PendingSeamless;
                var2['switchState'] = var1;
                var1 = var2.requestBoth;
                var1 = var1.bind(var2)();
case 59:
                var1 = undefined;
                return var1;
case 53:
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                var1 = var2.stopStreams;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'directUpdate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = this;
                var1 = var2.getQuality;
                var3 = var1.bind(var2)();
                var4 = _closure1_slot14;
                var4 = var4.None;
                if(!(var3 === var4)) { _fun0011_ip = 51; continue _fun0011 }
case 52:
                var4 = var2.isReceiving;
                var4 = var4.bind(var2)();
                if(var4) { _fun0011_ip = 97; continue _fun0011 }
case 51:
                var6 = var2.logger;
                var5 = var6.info;
                var4 = _closure1_slot14;
                var4 = var4.High;
                var11 = 'LQ';
                if(!(var3 === var4)) { _fun0011_ip = 98; continue _fun0011 }
case 99:
                var11 = 'HQ';
case 98:
                var4 = _closure1_slot14;
                var4 = var4.High;
                if(!(var3 !== var4)) { _fun0011_ip = 100; continue _fun0011 }
case 101:
                var10 = var2.lqSSRC;
                _fun0011_ip = 102; continue _fun0011;
case 100:
                var10 = var2.hqSSRC;
case 102:
                var4 = global;
                var4 = var4.HermesInternal;
                var9 = var4.concat;
                var16 = 'Starting direct transition to ';
                var14 = ' (ssrc ';
                var12 = ')';
                var15 = var11;
                var13 = var10;
                var4 = var16[var9](var15, var14, var13, var12, var11);
                var4 = var5.bind(var6)(var4);
                var1 = _closure1_slot14;
                var1 = var1.Low;
                if(!(var3 !== var1)) { _fun0011_ip = 103; continue _fun0011 }
case 104:
                var1 = var2.requestHQ;
                var1 = var1.bind(var2)();
                _fun0011_ip = 105; continue _fun0011;
case 103:
                var1 = var2.requestLQ;
                var1 = var1.bind(var2)();
case 105:
                var1 = undefined;
                return var1;
case 97:
                var1 = var2.reset;
                var1 = var1.bind(var2)();
                var1 = var2.stopStreams;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'singleCastUpdate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = this;
                var5 = _closure1_slot16;
                var1 = var3.videoStreams;
                var6 = var1.length;
                var1 = undefined;
                var4 = 1;
                var6 = var4 === var6;
                var4 = 'singleCastUpdate should only be called when there is exactly one video stream';
                var4 = var5.bind(var1)(var6, var4);
                var4 = var3.switchState;
                var2 = _closure1_slot13;
                var2 = var2.Ready;
                var4 = var4 === var2;
                var2 = 'Switch state should not be set for non-simulcast streams';
                var2 = var5.bind(var1)(var4, var2);
                var4 = var3.pendingSSRC;
                var2 = -1;
                var4 = var2 === var4;
                var2 = 'Pending SSRC should not be set for non-simulcast streams';
                var2 = var5.bind(var1)(var4, var2);
                var2 = var3.incomingVideoEnabled;
                if(var2) { _fun0012_ip = 106; continue _fun0012 }
case 102:
                var2 = var3.stopDefaultStream;
                var2 = var2.bind(var3)();
                _fun0012_ip = 107; continue _fun0012;
case 106:
                var2 = var3.requestDefaultStream;
                var2 = var2.bind(var3)();
case 107:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'pendingHQ';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = this;
                var3 = var2.switchState;
                var1 = _closure1_slot13;
                var1 = var1.Pending;
                var1 = var3 === var1;
                if(!var1) { _fun0013_ip = 108; continue _fun0013 }
case 37:
                var3 = var2.pendingSSRC;
                var2 = var2.hqSSRC;
                var1 = var3 === var2;
case 108:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'pendingLQ';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = this;
                var3 = var2.switchState;
                var1 = _closure1_slot13;
                var1 = var1.Pending;
                var1 = var3 === var1;
                if(!var1) { _fun0014_ip = 108; continue _fun0014 }
case 37:
                var3 = var2.pendingSSRC;
                var2 = var2.lqSSRC;
                var1 = var3 === var2;
case 108:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'receivingHQ';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.currentSSRC;
            var1 = var1.hqSSRC;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'receivingLQ';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.currentSSRC;
            var1 = var1.lqSSRC;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'isReceiving';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var2 = var1.currentSSRC;
            var1 = -1;
            var1 = var1 !== var2;
            return var1;
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isDowngradeChangeAllowed';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var1 = var2.throttleDowngradeChanges;
                var1 = !var1;
                if(var1) { _fun0015_ip = 109; continue _fun0015 }
case 110:
                var4 = var2.lastDowngradeChangeTime;
                var3 = undefined;
                var1 = var3 === var4;
case 109:
                if(var1) { _fun0015_ip = 35; continue _fun0015 }
case 52:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var2 = var2.lastDowngradeChangeTime;
                var4 = var3 - var2;
                var2 = arg1;
                if(var2) { _fun0015_ip = 4; continue _fun0015 }
case 111:
                var2 = _closure1_slot10;
                var2 = var4 >= var2;
                _fun0015_ip = 112; continue _fun0015;
case 4:
                var3 = _closure1_slot11;
                var2 = var4 >= var3;
case 112:
                var1 = var2;
case 35:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'shouldSeamlessTransition';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var8 = arg1;
                var7 = this;
                var1 = var7.supportsSeamless;
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0016_ip = 113; continue _fun0016 }
case 114:
                var2 = var7.isReceiving;
                var2 = var2.bind(var7)();
                var3 = !var2;
                var2 = !var3;
                if(var3) { _fun0016_ip = 97; continue _fun0016 }
case 51:
                var3 = var7.receivingHQ;
                var3 = var3.bind(var7)();
                if(!var3) { _fun0016_ip = 12; continue _fun0016 }
case 34:
                var4 = _closure1_slot14;
                var4 = var4.High;
                var3 = var8 === var4;
case 12:
                if(var3) { _fun0016_ip = 115; continue _fun0016 }
case 14:
                var4 = var7.receivingLQ;
                var4 = var4.bind(var7)();
                if(!var4) { _fun0016_ip = 102; continue _fun0016 }
case 116:
                var5 = _closure1_slot14;
                var5 = var5.Low;
                var4 = var8 === var5;
case 102:
                var3 = var4;
case 115:
                var3 = !var3;
                if(!var3) { _fun0016_ip = 117; continue _fun0016 }
case 60:
                var4 = _closure1_slot14;
                var4 = var4.Low;
                var4 = var8 !== var4;
                if(!var4) { _fun0016_ip = 118; continue _fun0016 }
case 119:
                var5 = var7.receivingLQ;
                var5 = var5.bind(var7)();
                var5 = !var5;
                if(var5) { _fun0016_ip = 120; continue _fun0016 }
case 121:
                var6 = _closure1_slot14;
                var6 = var6.High;
                var5 = var8 !== var6;
case 120:
                if(var5) { _fun0016_ip = 122; continue _fun0016 }
case 16:
                var6 = var7.isOneToOneCall;
                var6 = var6.bind(var7)();
                var5 = !var6;
case 122:
                var4 = var5;
case 118:
                var3 = var4;
case 117:
                var2 = var3;
case 97:
                var1 = var2;
case 113:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'isOneToOneCall';
        var5['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.otherUsers;
            var2 = var1.size;
            var1 = 1;
            var1 = var1 === var2;
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'reset';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var1 = -1;
            var3['pendingSSRC'] = var1;
            var3['currentSSRC'] = var1;
            var1 = undefined;
            var3['lastDowngradeChangeTime'] = var1;
            var2 = _closure1_slot13;
            var2 = var2.Ready;
            var3['switchState'] = var2;
            var2 = null;
            var3['streamId'] = var2;
            var2 = 0;
            var3['resolutionWidth'] = var2;
            var3['resolutionHeight'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'request';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var5 = arg1;
                var9 = arg2;
                var4 = this;
                var _closure3_slot0 = var4;
                var3 = var4.userId;
                var1 = undefined;
                if(!(var1 !== var3)) { _fun0017_ip = 100; continue _fun0017 }
case 123:
                var _closure3_slot1 = var5;
                var3 = var9.forEach;
                var2 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var3 = arg1;
                        var2 = _closure3_slot1;
                        var4 = var2.pixelCounts;
                        var2 = null;
                        if(!(var2 == var4)) { _fun0018_ip = 124; continue _fun0018 }
case 125:
                        var4 = _closure3_slot1;
                        var2 = {};
                        var4['pixelCounts'] = var2;
case 124:
                        var2 = _closure3_slot1;
                        var4 = var2[var3];
                        var2 = 0;
                        if(!(var4 > var2)) { _fun0018_ip = 126; continue _fun0018 }
case 38:
                        var2 = _closure3_slot1;
                        var2 = var2.pixelCounts;
                        var1 = _closure3_slot0;
                        var4 = var1.resolutionWidth;
                        var1 = var1.resolutionHeight;
                        var1 = var4 * var1;
                        var2[var3] = var1;
case 126:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var9)(var2);
                var8 = var4.emit;
                var2 = _closure1_slot12;
                var13 = var2.RequestedSSRCsUpdate;
                var12 = var4.userId;
                var11 = var4.audioSSRC;
                var14 = var4;
                var10 = var9;
                var3 = var14[var8](var13, var12, var11, var10, var9);
                var3 = var4.emit;
                var2 = var2.RequestedStreamsUpdate;
                var2 = var3.bind(var4)(var2, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'requestDefaultStream';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var6 = _closure1_slot16;
            var1 = var5.videoStreams;
            var4 = var1.length;
            var1 = undefined;
            var3 = 1;
            var4 = var3 === var4;
            var3 = 'requestDefaultStream should only be called when there is exactly one video stream';
            var3 = var6.bind(var1)(var4, var3);
            var4 = {};
            var6 = var5.videoStreams;
            var3 = 0;
            var6 = var6[var3];
            var6 = var6.ssrc;
            var2 = _closure1_slot14;
            var2 = var2.High;
            var4[var6] = var2;
            var2 = var5.videoStreams;
            var2 = var2[var3];
            var2 = var2.ssrc;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = var5.request;
            var2 = var2.bind(var5)(var4, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'stopDefaultStream';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var6 = _closure1_slot16;
            var1 = var5.videoStreams;
            var4 = var1.length;
            var1 = undefined;
            var3 = 1;
            var4 = var3 === var4;
            var3 = 'stopDefaultStream should only be called when there is exactly one video stream';
            var3 = var6.bind(var1)(var4, var3);
            var4 = {};
            var6 = var5.videoStreams;
            var3 = 0;
            var3 = var6[var3];
            var3 = var3.ssrc;
            var2 = _closure1_slot14;
            var2 = var2.None;
            var4[var3] = var2;
            var3 = var5.request;
            var2 = new Array(0);
            var2 = var3.bind(var5)(var4, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'requestBoth';
        var5['key'] = var7;
        var7 = function value() {
            var6 = this;
            var _closure3_slot0 = var6;
            var7 = _closure1_slot16;
            var1 = var6.videoStreams;
            var5 = var1.length;
            var1 = undefined;
            var4 = 2;
            var5 = var4 === var5;
            var4 = 'requestBoth should only be called when there are two video streams';
            var4 = var7.bind(var1)(var5, var4);
            var8 = var6.videoStreams;
            var5 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.hqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var8)(var4);
            var5 = var1 !== var4;
            var4 = 'requestBoth called with invalid hqSSRC';
            var4 = var7.bind(var1)(var5, var4);
            var8 = var6.videoStreams;
            var5 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.lqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var5.bind(var8)(var4);
            var5 = var1 !== var4;
            var4 = 'requestBoth called with invalid lqSSRC';
            var4 = var7.bind(var1)(var5, var4);
            var5 = {};
            var7 = var6.lqSSRC;
            var3 = _closure1_slot14;
            var4 = var3.Low;
            var5[var7] = var4;
            var4 = var6.hqSSRC;
            var3 = var3.High;
            var5[var4] = var3;
            var3 = var6.lqSSRC;
            var4 = new Array(2);
            var4[0] = var3;
            var3 = var6.hqSSRC;
            var4[1] = var3;
            var3 = var6.request;
            var3 = var3.bind(var6)(var5, var4);
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var2 = _closure3_slot0;
                    var3 = var2.switchState;
                    var2 = _closure1_slot13;
                    var2 = var2.PendingSeamless;
                    if(!(var3 === var2)) { _fun0019_ip = 127; continue _fun0019 }
case 52:
                    var2 = _closure3_slot0;
                    var4 = var2.logger;
                    var3 = var4.warn;
                    var1 = 'Seamless transition timeout, forcing switch';
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.reset;
                    var1 = var1.bind(var2)();
                    var1 = var2.update;
                    var1 = var1.bind(var2)();
case 127:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 2000;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'requestHQ';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot16;
            var1 = var5.videoStreams;
            var7 = var1.length;
            var1 = undefined;
            var4 = 2;
            var7 = var4 === var7;
            var4 = 'requestHQ should only be called when there are two video streams';
            var4 = var6.bind(var1)(var7, var4);
            var8 = var5.videoStreams;
            var7 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.hqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            var7 = var1 !== var4;
            var4 = 'requestHQ called with invalid hqSSRC';
            var4 = var6.bind(var1)(var7, var4);
            var7 = var5.videoStreams;
            var4 = var7.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.lqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var7)(var3);
            var4 = var1 !== var3;
            var3 = 'requestHQ called with invalid lqSSRC';
            var3 = var6.bind(var1)(var4, var3);
            var4 = {};
            var6 = var5.lqSSRC;
            var2 = _closure1_slot14;
            var3 = var2.None;
            var4[var6] = var3;
            var3 = var5.hqSSRC;
            var2 = var2.High;
            var4[var3] = var2;
            var2 = var5.hqSSRC;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = var5.request;
            var2 = var2.bind(var5)(var4, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'requestLQ';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot16;
            var1 = var5.videoStreams;
            var7 = var1.length;
            var1 = undefined;
            var4 = 2;
            var7 = var4 === var7;
            var4 = 'requestLQ should only be called when there are two video streams';
            var4 = var6.bind(var1)(var7, var4);
            var8 = var5.videoStreams;
            var7 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.hqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            var7 = var1 !== var4;
            var4 = 'requestLQ called with invalid hqSSRC';
            var4 = var6.bind(var1)(var7, var4);
            var7 = var5.videoStreams;
            var4 = var7.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.lqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var7)(var3);
            var4 = var1 !== var3;
            var3 = 'requestLQ called with invalid lqSSRC';
            var3 = var6.bind(var1)(var4, var3);
            var4 = {};
            var6 = var5.lqSSRC;
            var2 = _closure1_slot14;
            var3 = var2.Low;
            var4[var6] = var3;
            var3 = var5.hqSSRC;
            var2 = var2.None;
            var4[var3] = var2;
            var2 = var5.lqSSRC;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = var5.request;
            var2 = var2.bind(var5)(var4, var3);
            return var1;
        };
        var5['value'] = var7;
        var1[29] = var5;
        var5 = {};
        var7 = 'stopStreams';
        var5['key'] = var7;
        var7 = function value() {
            var5 = this;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot16;
            var1 = var5.videoStreams;
            var7 = var1.length;
            var1 = undefined;
            var4 = 2;
            var7 = var4 === var7;
            var4 = 'stopStreams should only be called when there are two video streams';
            var4 = var6.bind(var1)(var7, var4);
            var8 = var5.videoStreams;
            var7 = var8.find;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.hqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var7.bind(var8)(var4);
            var7 = var1 !== var4;
            var4 = 'stopStreams called with invalid hqSSRC';
            var4 = var6.bind(var1)(var7, var4);
            var7 = var5.videoStreams;
            var4 = var7.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.ssrc;
                var1 = _closure3_slot0;
                var1 = var1.lqSSRC;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var4.bind(var7)(var3);
            var4 = var1 !== var3;
            var3 = 'stopStreams called with invalid lqSSRC';
            var3 = var6.bind(var1)(var4, var3);
            var4 = var5.pendingSSRC;
            var3 = -1;
            var4 = var3 === var4;
            var3 = 'pendingSSRC should be reset before stopping streams';
            var3 = var6.bind(var1)(var4, var3);
            var4 = {};
            var6 = var5.lqSSRC;
            var2 = _closure1_slot14;
            var3 = var2.None;
            var4[var6] = var3;
            var3 = var5.hqSSRC;
            var2 = var2.None;
            var4[var3] = var2;
            var3 = var5.request;
            var2 = new Array(0);
            var2 = var3.bind(var5)(var4, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[30] = var5;
        var5 = {};
        var7 = 'getQuality';
        var5['key'] = var7;
        var7 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var4 = this;
                var1 = var4.incomingVideoEnabled;
                if(var1) { _fun0020_ip = 52; continue _fun0020 }
case 110:
                var1 = _closure1_slot14;
                var1 = var1.None;
                _fun0020_ip = 128; continue _fun0020;
case 52:
                var5 = var4.debugQualityOverride;
                var2 = _closure1_slot9;
                var2 = var2.LOW;
                if(!(var5 !== var2)) { _fun0020_ip = 129; continue _fun0020 }
case 130:
                var5 = var4.debugQualityOverride;
                var2 = _closure1_slot9;
                var2 = var2.HIGH;
                if(!(var5 !== var2)) { _fun0020_ip = 41; continue _fun0020 }
case 131:
                var2 = var4.isOneToOneCall;
                var2 = var2.bind(var4)();
                if(var2) { _fun0020_ip = 41; continue _fun0020 }
case 98:
                var2 = var4.downgraded;
                if(!var2) { _fun0020_ip = 100; continue _fun0020 }
case 132:
                var2 = var4.senderSupportsSimulcast;
                var2 = var2.bind(var4)();
                if(var2) { _fun0020_ip = 133; continue _fun0020 }
case 100:
                var2 = _closure1_slot14;
                var2 = var2.High;
                _fun0020_ip = 134; continue _fun0020;
case 133:
                var4 = _closure1_slot14;
                var2 = var4.Low;
case 134:
                _fun0020_ip = 43; continue _fun0020;
case 41:
                var4 = _closure1_slot14;
                var2 = var4.High;
case 43:
                _fun0020_ip = 135; continue _fun0020;
case 129:
                var3 = _closure1_slot14;
                var2 = var3.Low;
case 135:
                var1 = var2;
case 128:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[31] = var5;
        var5 = {};
        var7 = 'setVideoSize';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var2 = this;
                var3 = var2.streamId;
                var1 = arg1;
                if(!(var3 === var1)) { _fun0021_ip = 136; continue _fun0021 }
case 46:
                var1 = arg2;
                var2['resolutionWidth'] = var1;
                var1 = arg3;
                var2['resolutionHeight'] = var1;
                var1 = var2.delayedUpdate;
                var1 = var1.bind(var2)();
case 136:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[32] = var5;
        var5 = {};
        var7 = 'setStreamId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = arg1;
                var2 = this;
                var3 = var2.streamId;
                if(!(var3 !== var1)) { _fun0022_ip = 51; continue _fun0022 }
case 46:
                var2['streamId'] = var1;
                var1 = 0;
                var2['resolutionWidth'] = var1;
                var2['resolutionHeight'] = var1;
                var1 = var2.delayedUpdate;
                var1 = var1.bind(var2)();
case 51:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[33] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/go_live/GoLiveQualityManager.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['GoLiveQualityManagerEvent'] = var2;
    return var1;
})();
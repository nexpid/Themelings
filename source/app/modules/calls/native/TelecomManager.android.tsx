// app/modules/calls/native/TelecomManager.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var13 = true;
    var4['value'] = var13;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var12 = 0;
    var4 = var6[var12];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var4 = var6[var11];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var10 = 2;
    var4 = var6[var10];
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.DeviceEventEmitter;
    var _closure1_slot9 = var8;
    var9 = var4.NativeEventEmitter;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot15 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ApplicationStreamStates;
    var _closure1_slot21 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaEngineContextTypes;
    var _closure1_slot22 = var4;
    var4 = 20;
    var4 = var6[var4];
    var14 = var7.bind(var1)(var4);
    var4 = var14.prototype;
    var8 = Object.create(var4, {constructor: {value: var14}});
    var17 = 'TelecomManager';
    var18 = var8;
    var4 = new var18[var14](var17, var16);
    var8 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot23 = var8;
    var4 = var8.enableNativeLogger;
    var4 = var4.bind(var8)(var13);
    var4 = {};
    var4['Ringing'] = var12;
    var8 = 'Ringing';
    var4[var12] = var8;
    var4['Connecting'] = var11;
    var8 = 'Connecting';
    var4[var11] = var8;
    var4['Connected'] = var10;
    var8 = 'Connected';
    var4[var10] = var8;
    var _closure1_slot24 = var4;
    var4 = 21;
    var4 = var6[var4];
    var17 = var7.bind(var1)(var4);
    var8 = var9.prototype;
    var8 = Object.create(var8, {constructor: {value: var9}});
    var18 = var8;
    var4 = new var18[var9](var17, var16);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot25 = var4;
    var4 = 32;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function TelecomManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot2;
                var5 = undefined;
                var8 = var8.bind(var5)(var6, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var5)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot28;
                var1 = var1.bind(var5)();
                if(var1) { _fun0005_ip = 9; continue _fun0005 }
case 40:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0005_ip = 41; continue _fun0005;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var5)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 41:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var5 = global;
                var4 = var5.Map;
                var6 = var4.prototype;
                var6 = Object.create(var6, {constructor: {value: var4}});
                var15 = var6;
                var4 = new var15[var4](var14);
                var8 = var4 instanceof Object ? var4 : var6;
                var7 = var8.set;
                var6 = _closure1_slot17;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.reconcileTelecomState;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var8 = var7.bind(var8)(var6, var4);
                var7 = var8.set;
                var6 = _closure1_slot15;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleMuteStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var8 = var7.bind(var8)(var6, var4);
                var7 = var8.set;
                var6 = _closure1_slot11;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleScreenShareStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = var7.bind(var8)(var6, var4);
                var6 = var7.set;
                var4 = _closure1_slot13;
                var3 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleIncomingCallStoreChange;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var3 = var6.bind(var7)(var4, var3);
                var1['stores'] = var3;
                var3 = {};
                var4 = function CALL_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleCallCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CALL_CREATE'] = var4;
                var4 = function CALL_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleCallUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CALL_UPDATE'] = var4;
                var4 = function CALL_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleCallDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3['CALL_DELETE'] = var4;
                var1['actions'] = var3;
                var3 = null;
                var1['currentCall'] = var3;
                var4 = false;
                var1['isInitialized'] = var4;
                var1['lastMuteState'] = var3;
                var5 = var5.Set;
                var6 = var5.prototype;
                var6 = Object.create(var6, {constructor: {value: var5}});
                var15 = var6;
                var5 = new var15[var5](var14);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['registeredIncomingCallIds'] = var5;
                var1['lastScreenShareActive'] = var3;
                var1['pendingScreenShareOffSyncTimeout'] = var3;
                var1['reconcilePromise'] = var3;
                var1['needsReconcile'] = var4;
                var1['hostDestroySubscription'] = var3;
                var1['pendingMutePreference'] = var3;
                var1['ringtone'] = var3;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.isEnabled;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0006_ip = 42; continue _fun0006 }
case 29:
                        var2 = _closure3_slot0;
                        var3 = var2.currentCall;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                        var2 = _closure3_slot0;
                        var2 = var2.currentCall;
                        var4 = var2.state;
                        var3 = _closure1_slot24;
                        var3 = var3.Ringing;
                        if(!(var4 !== var3)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                        var5 = _closure1_slot23;
                        var4 = var5.info;
                        var3 = 'Activity destroyed with active call, disconnecting from voice channel';
                        var3 = var4.bind(var5)(var3);
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 22;
                        var4 = var4[var3];
                        var3 = undefined;
                        var4 = var5.bind(var3)(var4);
                        var3 = var4.disconnect;
                        var3 = var3.bind(var4)();
case 42:
                        var3 = undefined;
                        return var3;
case 44:
                        var4 = _closure1_slot23;
                        var3 = var4.info;
                        var2 = 'Activity destroyed with ringing call, cancelling incoming call';
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot0;
                        var2 = var3.cancelIncomingCall;
                        var1 = var3.currentCall;
                        var1 = var1.channelId;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleHostDestroy'] = var3;
                var3 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = arg1;
                        var6 = _closure1_slot23;
                        var5 = var6.info;
                        var4 = var1.callId;
                        var3 = 'Received end call request from Call Bar:';
                        var3 = var5.bind(var6)(var3, var4);
                        var4 = _closure3_slot0;
                        var5 = var4.currentCall;
                        var4 = null;
                        if(!(var4 != var5)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
                        var4 = var1.callId;
                        var1 = _closure3_slot0;
                        var1 = var1.currentCall;
                        var1 = var1.channelId;
                        if(!(var4 !== var1)) { _fun0007_ip = 48; continue _fun0007 }
case 46:
                        var1 = undefined;
                        return var1;
case 48:
                        var1 = _closure3_slot0;
                        var1 = var1.currentCall;
                        var4 = var1.state;
                        var1 = _closure1_slot24;
                        var1 = var1.Ringing;
                        if(!(var4 !== var1)) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 22;
                        var4 = var4[var1];
                        var1 = undefined;
                        var4 = var5.bind(var1)(var4);
                        var1 = var4.disconnect;
                        var1 = var1.bind(var4)();
                        var1 = undefined;
                        _fun0007_ip = 51; continue _fun0007;
case 49:
                        var7 = _closure1_slot23;
                        var6 = var7.info;
                        var4 = _closure3_slot0;
                        var3 = var4.currentCall;
                        var5 = var3.channelId;
                        var3 = 'Rejecting ringing call from Call Bar:';
                        var3 = var6.bind(var7)(var3, var5);
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 23;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var5.bind(var2)(var3);
                        var3 = var5.stopRinging;
                        var2 = var4.currentCall;
                        var2 = var2.channelId;
                        var2 = var3.bind(var5)(var2);
                        var3 = var4.clearCall;
                        var2 = var4.currentCall;
                        var2 = var2.channelId;
                        var2 = var3.bind(var4)(var2);
                        var1 = undefined;
case 51:
                        return var1;
                    }
                };
                var1['handleEndCallRequested'] = var3;
                var3 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var4 = _closure1_slot23;
                        var3 = var4.info;
                        var2 = 'Received set foreground request from Call Bar';
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot0;
                        var4 = var2.currentCall;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                        var4 = arg1;
                        var5 = var4.callId;
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var4 = var4.channelId;
                        if(!(var5 === var4)) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                        var5 = _closure1_slot14;
                        var4 = var5.getChannel;
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var3 = var3.channelId;
                        var4 = var4.bind(var5)(var3);
                        if(!(var2 != var4)) { _fun0008_ip = 52; continue _fun0008 }
case 55:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.navigateToVoiceChannel;
                        var1 = 'Call Bar';
                        var1 = var2.bind(var3)(var4, var1);
case 52:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleSetForegroundRequested'] = var3;
                var3 = function(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = arg1;
                        var8 = _closure1_slot23;
                        var7 = var8.info;
                        var11 = var2.callId;
                        var9 = var2.isMuted;
                        var12 = 'Received mic mute request from Call Bar:';
                        var10 = 'isMuted:';
                        var13 = var8;
                        var3 = var13[var7](var12, var11, var10, var9, var8);
                        var4 = _closure3_slot0;
                        var5 = var4.currentCall;
                        var4 = null;
                        var4 = var4 != var5;
                        if(!var4) { _fun0009_ip = 56; continue _fun0009 }
case 57:
                        var6 = var2.callId;
                        var5 = _closure3_slot0;
                        var5 = var5.currentCall;
                        var5 = var5.channelId;
                        var4 = var6 === var5;
case 56:
                        if(!var4) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var5 = var4.state;
                        var4 = _closure1_slot24;
                        var4 = var4.Ringing;
                        var4 = var5 !== var4;
                        if(!var4) { _fun0009_ip = 60; continue _fun0009 }
case 61:
                        var5 = _closure3_slot0;
                        var5 = var5.currentCall;
                        var6 = var5.state;
                        var5 = _closure1_slot24;
                        var5 = var5.Connecting;
                        var4 = var6 !== var5;
case 60:
                        if(var4) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                        var4 = _closure3_slot0;
                        var3 = var2.isMuted;
                        var4['pendingMutePreference'] = var3;
case 62:
                        var4 = _closure1_slot15;
                        var3 = var4.isSelfMute;
                        var4 = var3.bind(var4)();
                        var3 = var2.isMuted;
                        if(!(var4 !== var3)) { _fun0009_ip = 58; continue _fun0009 }
case 64:
                        var5 = _closure1_slot23;
                        var4 = var5.info;
                        var3 = var2.isMuted;
                        var2 = 'Updating Call Bar -> Discord mute state:';
                        var2 = var4.bind(var5)(var2, var3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 25;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.toggleSelfMute;
                        var1 = var1.bind(var2)();
case 58:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleMicMuteRequested'] = var3;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var2 = arg1;
                        var8 = _closure1_slot23;
                        var7 = var8.info;
                        var12 = var2.callId;
                        var10 = var2.isEnabled;
                        var13 = 'Received screen share request from Call Bar:';
                        var11 = 'isEnabled:';
                        var14 = var8;
                        var3 = var14[var7](var13, var12, var11, var10, var9);
                        var3 = _closure3_slot0;
                        var5 = var3.currentCall;
                        var3 = null;
                        if(!(var3 != var5)) { _fun0010_ip = 65; continue _fun0010 }
case 57:
                        var6 = var2.callId;
                        var5 = _closure3_slot0;
                        var5 = var5.currentCall;
                        var5 = var5.channelId;
                        if(!(var6 === var5)) { _fun0010_ip = 65; continue _fun0010 }
case 66:
                        var6 = _closure1_slot14;
                        var5 = var6.getChannel;
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var4 = var4.channelId;
                        var9 = var5.bind(var6)(var4);
                        if(!(var3 != var9)) { _fun0010_ip = 65; continue _fun0010 }
case 67:
                        var5 = _closure1_slot11;
                        var4 = var5.getCurrentUserActiveStream;
                        var4 = var4.bind(var5)();
                        var3 = var3 != var4;
                        if(!var3) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                        var5 = var4.state;
                        var4 = _closure1_slot21;
                        var4 = var4.ACTIVE;
                        var3 = var5 === var4;
case 68:
                        var4 = var2.isEnabled;
                        if(!var4) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                        if(var3) { _fun0010_ip = 70; continue _fun0010 }
case 72:
                        var8 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 26;
                        var4 = var5[var4];
                        var6 = undefined;
                        var7 = var8.bind(var6)(var4);
                        var4 = var7.getVideoPermission;
                        var4 = var4.bind(var7)(var9);
                        var7 = 27;
                        var5 = var5[var7];
                        var8 = var8.bind(var6)(var5);
                        var5 = var8.getOSRequirement;
                        var5 = var5.bind(var8)();
                        var8 = _closure1_slot23;
                        if(var5) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                        var9 = var8.warn;
                        var5 = 'Cannot start screen share from Call Bar: OS version does not meet requirements';
                        var5 = var9.bind(var8)(var5);
                        var5 = undefined;
                        return var5;
case 73:
                        if(var4) { _fun0010_ip = 75; continue _fun0010 }
case 76:
                        var5 = var8.warn;
                        var4 = 'Cannot start screen share from Call Bar: user lacks streaming permission in this channel';
                        var4 = var5.bind(var8)(var4);
                        var4 = undefined;
                        return var4;
case 75:
                        var5 = var8.info;
                        var4 = 'Starting screen share from Call Bar';
                        var4 = var5.bind(var8)(var4);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var5 = var5.bind(var6)(var4);
                        var4 = var5.startStream;
                        var4 = var4.bind(var5)();
                        _fun0010_ip = 65; continue _fun0010;
case 70:
                        var2 = var2.isEnabled;
                        var2 = !var2;
                        if(!var2) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                        var2 = var3;
case 77:
                        if(!var2) { _fun0010_ip = 65; continue _fun0010 }
case 79:
                        var4 = _closure1_slot23;
                        var3 = var4.info;
                        var2 = 'Stopping screen share from Call Bar';
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.stopScreenshare;
                        var1 = var1.bind(var2)();
case 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleScreenShareRequested'] = var3;
                var3 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var4 = arg1;
                        var6 = _closure1_slot23;
                        var5 = var6.info;
                        var3 = var4.callId;
                        var1 = 'Received answer call request from Call Bar:';
                        var1 = var5.bind(var6)(var1, var3);
                        var3 = _closure3_slot0;
                        var5 = var3.currentCall;
                        var3 = null;
                        var3 = var3 != var5;
                        if(!var3) { _fun0011_ip = 80; continue _fun0011 }
case 28:
                        var5 = var4.callId;
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var4 = var4.channelId;
                        var3 = var5 === var4;
case 80:
                        if(!var3) { _fun0011_ip = 81; continue _fun0011 }
case 82:
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var4 = var3.state;
                        var3 = _closure1_slot24;
                        var3 = var3.Ringing;
                        if(!(var4 !== var3)) { _fun0011_ip = 69; continue _fun0011 }
case 83:
                        var6 = _closure1_slot23;
                        var5 = var6.warn;
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var4 = var3.state;
                        var3 = 'Answer requested but call is not ringing:';
                        var3 = var5.bind(var6)(var3, var4);
                        _fun0011_ip = 81; continue _fun0011;
case 69:
                        var1 = _closure3_slot0;
                        var3 = var1.stopRingtone;
                        var3 = var3.bind(var1)();
                        var4 = var1.currentCall;
                        var3 = _closure1_slot24;
                        var3 = var3.Connecting;
                        var4['state'] = var3;
                        var6 = _closure1_slot23;
                        var5 = var6.info;
                        var3 = var1.currentCall;
                        var4 = var3.channelId;
                        var3 = 'Answering incoming call, joining voice channel:';
                        var3 = var5.bind(var6)(var3, var4);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 22;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var4.bind(var2)(var3);
                        var2 = var3.selectVoiceChannel;
                        var1 = var1.currentCall;
                        var1 = var1.channelId;
                        var1 = var2.bind(var3)(var1);
case 81:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleAnswerCallRequested'] = var3;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.isEnabled;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0012_ip = 84; continue _fun0012 }
case 31:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 28;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.isMetaQuest;
                        var3 = var4.bind(var5)();
case 84:
                        if(!var3) { _fun0012_ip = 85; continue _fun0012 }
case 7:
                        var4 = _closure3_slot0;
                        var3 = var4.processIncomingRing;
                        var2 = var1.channelId;
                        var1 = var1.ongoingRings;
                        var1 = var3.bind(var4)(var2, var1);
case 85:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallCreate'] = var3;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.isEnabled;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0013_ip = 84; continue _fun0013 }
case 31:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 28;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.isMetaQuest;
                        var3 = var4.bind(var5)();
case 84:
                        if(!var3) { _fun0013_ip = 85; continue _fun0013 }
case 7:
                        var4 = _closure3_slot0;
                        var3 = var4.processIncomingRing;
                        var2 = var1.channelId;
                        var1 = var1.ongoingRings;
                        var1 = var3.bind(var4)(var2, var1);
case 85:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallUpdate'] = var3;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var4 = _closure3_slot0;
                        var3 = var4.isEnabled;
                        var3 = var3.bind(var4)();
                        if(!var3) { _fun0014_ip = 84; continue _fun0014 }
case 31:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 28;
                        var5 = var5[var4];
                        var4 = undefined;
                        var5 = var6.bind(var4)(var5);
                        var4 = var5.isMetaQuest;
                        var3 = var4.bind(var5)();
case 84:
                        if(!var3) { _fun0014_ip = 11; continue _fun0014 }
case 7:
                        var4 = _closure3_slot0;
                        var4 = var4.currentCall;
                        var5 = null;
                        var6 = var5 == var4;
                        var5 = undefined;
                        if(var6) { _fun0014_ip = 82; continue _fun0014 }
case 48:
                        var5 = var4.channelId;
case 82:
                        var4 = var1.channelId;
                        var3 = var5 === var4;
case 11:
                        if(!var3) { _fun0014_ip = 41; continue _fun0014 }
case 86:
                        var6 = _closure3_slot0;
                        var5 = var6.isPendingIncomingCall;
                        var4 = var6.currentCall;
                        var3 = var5.bind(var6)(var4);
case 41:
                        if(!var3) { _fun0014_ip = 68; continue _fun0014 }
case 87:
                        var6 = _closure1_slot23;
                        var5 = var6.info;
                        var4 = var1.channelId;
                        var3 = 'Pending incoming call deleted, cancelling incoming call:';
                        var3 = var5.bind(var6)(var3, var4);
                        var3 = _closure3_slot0;
                        var2 = var3.cancelIncomingCall;
                        var1 = var1.channelId;
                        var1 = var2.bind(var3)(var1);
case 68:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCallDelete'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var6 = _closure1_slot23;
                    var5 = var6.info;
                    var4 = var2.callId;
                    var3 = 'Received incoming call answered from telecom:';
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = _closure3_slot0;
                    var5 = var3.registeredIncomingCallIds;
                    var4 = var5.delete;
                    var3 = var2.callId;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 29;
                    var3 = var5[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var6 = var7.endCall;
                    var3 = var2.callId;
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.catch;
                    var3 = function(arg1) {
                        var4 = _closure1_slot23;
                        var3 = var4.warn;
                        var2 = 'Failed to end answered telecom call:';
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var6.bind(var7)(var3);
                    var3 = 22;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.selectVoiceChannel;
                    var2 = var2.callId;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleIncomingCallAnswered'] = var3;
                var2 = function(arg1) {
                    var2 = arg1;
                    var6 = _closure1_slot23;
                    var5 = var6.info;
                    var4 = var2.callId;
                    var3 = 'Received incoming call rejected from telecom:';
                    var3 = var5.bind(var6)(var3, var4);
                    var3 = _closure3_slot0;
                    var5 = var3.registeredIncomingCallIds;
                    var4 = var5.delete;
                    var3 = var2.callId;
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 23;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.stopRinging;
                    var2 = var2.callId;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.catch;
                    var2 = function(arg1) {
                        var4 = _closure1_slot23;
                        var3 = var4.warn;
                        var2 = 'Failed to stop ringing after telecom reject:';
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleIncomingCallRejected'] = var2;
                return var1;
            }
        };
        var _closure2_slot2 = var4;
        var2 = _closure1_slot8;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                var1 = !var1;
                if(!var1) { _fun0015_ip = 88; continue _fun0015 }
case 89:
                var3 = var2.isSupported;
                var1 = var3.bind(var2)();
case 88:
                if(!var1) { _fun0015_ip = 90; continue _fun0015 }
case 91:
                var5 = _closure1_slot23;
                var4 = var5.info;
                var3 = 'Initializing CallKitManager using Telecom framework';
                var3 = var4.bind(var5)(var3);
                var4 = var2.hostDestroySubscription;
                var3 = null;
                if(!(var3 != var4)) { _fun0015_ip = 92; continue _fun0015 }
case 30:
                var3 = var4.remove;
                var3 = var3.bind(var4)();
case 92:
                var6 = _closure1_slot25;
                var5 = var6.addListener;
                var4 = var2.handleHostDestroy;
                var3 = 'onHostDestroy';
                var3 = var5.bind(var6)(var3, var4);
                var2['hostDestroySubscription'] = var3;
                var5 = _closure1_slot9;
                var4 = var5.addListener;
                var3 = var2.handleEndCallRequested;
                var1 = 'telecom-end-call-requested';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleSetForegroundRequested;
                var1 = 'telecom-set-foreground-requested';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleMicMuteRequested;
                var1 = 'telecom-mic-mute-requested';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleScreenShareRequested;
                var1 = 'telecom-screen-share-requested';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleIncomingCallAnswered;
                var1 = 'telecom-incoming-call-answered';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleIncomingCallRejected;
                var1 = 'telecom-incoming-call-rejected';
                var1 = var4.bind(var5)(var1, var3);
                var4 = var5.addListener;
                var3 = var2.handleAnswerCallRequested;
                var1 = 'telecom-answer-call-requested';
                var1 = var4.bind(var5)(var1, var3);
                var1 = true;
                var2['isInitialized'] = var1;
case 90:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(23);
        var1[0] = var5;
        var5 = {};
        var8 = '_terminate';
        var5['key'] = var8;
        var8 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = this;
                var1 = var2.isInitialized;
                if(!var1) { _fun0016_ip = 93; continue _fun0016 }
case 94:
                var4 = var2.hostDestroySubscription;
                var1 = null;
                if(!(var1 != var4)) { _fun0016_ip = 95; continue _fun0016 }
case 96:
                var3 = var4.remove;
                var3 = var3.bind(var4)();
case 95:
                var2['hostDestroySubscription'] = var1;
                var5 = _closure1_slot9;
                var4 = var5.removeAllListeners;
                var3 = 'telecom-end-call-requested';
                var3 = var4.bind(var5)(var3);
                var4 = var5.removeAllListeners;
                var3 = 'telecom-set-foreground-requested';
                var3 = var4.bind(var5)(var3);
                var4 = var5.removeAllListeners;
                var3 = 'telecom-mic-mute-requested';
                var3 = var4.bind(var5)(var3);
                var4 = var5.removeAllListeners;
                var3 = 'telecom-screen-share-requested';
                var3 = var4.bind(var5)(var3);
                var4 = var5.removeAllListeners;
                var3 = 'telecom-incoming-call-answered';
                var3 = var4.bind(var5)(var3);
                var4 = var5.removeAllListeners;
                var3 = 'telecom-incoming-call-rejected';
                var3 = var4.bind(var5)(var3);
                var4 = var5.removeAllListeners;
                var3 = 'telecom-answer-call-requested';
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot26;
                var3 = var2.registeredIncomingCallIds;
                var7 = undefined;
                var6 = var4.bind(var7)(var3);
                var4 = var6.bind(var7)();
                var3 = var4.done;
                var5 = 29;
                if(var3) { _fun0016_ip = 97; continue _fun0016 }
case 98:
                var11 = var4.value;
                var10 = _closure1_slot1;
                var3 = _closure1_slot2;
                var3 = var3[var5];
                var10 = var10.bind(var7)(var3);
                var3 = var10.endCall;
                var11 = var3.bind(var10)(var11);
                var10 = var11.catch;
                var3 = function(arg1) {
                    var4 = _closure1_slot23;
                    var3 = var4.warn;
                    var2 = 'Failed to end telecom incoming call on terminate:';
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var3 = var10.bind(var11)(var3);
                var10 = var6.bind(var7)();
                var3 = var10.done;
                var4 = var10;
                if(!var3) { _fun0016_ip = 98; continue _fun0016 }
case 97:
                var4 = var2.registeredIncomingCallIds;
                var3 = var4.clear;
                var3 = var3.bind(var4)();
                var3 = var2.clearPendingScreenShareOffSync;
                var3 = var3.bind(var2)();
                var3 = var2.stopRingtone;
                var3 = var3.bind(var2)();
                var3 = var2.reportCallEnded;
                var3 = var3.bind(var2)();
                var2['reconcilePromise'] = var1;
                var1 = false;
                var2['needsReconcile'] = var1;
                var2['isInitialized'] = var1;
case 93:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'isSupported';
        var5['key'] = var8;
        var8 = function value() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 29;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'isEnabled';
        var5['key'] = var8;
        var8 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = this;
                var1 = var2.isSupported;
                var1 = var1.bind(var2)();
                if(!var1) { _fun0017_ip = 99; continue _fun0017 }
case 100:
                var1 = var2.isInitialized;
case 99:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'processIncomingRing';
        var5['key'] = var8;
        var8 = function value(arg1, arg2) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var4 = arg1;
                var5 = arg2;
                var3 = this;
                var6 = _closure1_slot12;
                var1 = var6.getId;
                var1 = var1.bind(var6)();
                var6 = var1 in var5;
                if(!var6) { _fun0018_ip = 53; continue _fun0018 }
case 33:
                var1 = var5[var1];
                var5 = null;
                if(!(var5 == var1)) { _fun0018_ip = 101; continue _fun0018 }
case 53:
                var6 = var3.currentCall;
                var1 = null;
                var7 = var1 == var6;
                var1 = undefined;
                if(var7) { _fun0018_ip = 102; continue _fun0018 }
case 103:
                var1 = var6.channelId;
case 102:
                var1 = var1 === var4;
                if(!var1) { _fun0018_ip = 66; continue _fun0018 }
case 37:
                var6 = var3.currentCall;
                var7 = var6.state;
                var6 = _closure1_slot24;
                var6 = var6.Ringing;
                var1 = var7 === var6;
case 66:
                if(!var1) { _fun0018_ip = 12; continue _fun0018 }
case 104:
                var7 = _closure1_slot23;
                var6 = var7.info;
                var1 = 'Call no longer ringing, cancelling incoming call:';
                var1 = var6.bind(var7)(var1, var4);
                var1 = var3.cancelIncomingCall;
                var1 = var1.bind(var3)(var4);
                _fun0018_ip = 12; continue _fun0018;
case 101:
                var7 = var3.currentCall;
                var8 = var5 == var7;
                var1 = undefined;
                var6 = undefined;
                if(var8) { _fun0018_ip = 14; continue _fun0018 }
case 15:
                var6 = var7.channelId;
case 14:
                if(!(var6 === var4)) { _fun0018_ip = 105; continue _fun0018 }
case 106:
                var6 = var3.currentCall;
                var7 = var6.state;
                var6 = _closure1_slot24;
                var6 = var6.Ringing;
                if(!(var7 === var6)) { _fun0018_ip = 107; continue _fun0018 }
case 105:
                var7 = _closure1_slot17;
                var6 = var7.getChannelId;
                var6 = var6.bind(var7)();
                if(!(var5 == var6)) { _fun0018_ip = 76; continue _fun0018 }
case 108:
                var6 = var3.currentCall;
                var7 = var5 == var6;
                var5 = undefined;
                if(var7) { _fun0018_ip = 109; continue _fun0018 }
case 110:
                var5 = var6.channelId;
case 109:
                if(!(var5 === var4)) { _fun0018_ip = 111; continue _fun0018 }
case 21:
                var5 = var3.currentCall;
                var5 = var5.state;
                var2 = _closure1_slot24;
                var2 = var2.Ringing;
                if(!(var5 !== var2)) { _fun0018_ip = 112; continue _fun0018 }
case 111:
                var2 = var3.reportIncomingCall;
                var2 = var2.bind(var3)(var4);
case 12:
                var2 = undefined;
                return var2;
case 112:
                return var1;
case 76:
                return var1;
case 107:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = 'reportIncomingCall';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var6 = arg1;
                var9 = this;
                var _closure3_slot0 = var9;
                var _closure3_slot1 = var6;
                var4 = _closure1_slot14;
                var3 = var4.getChannel;
                var8 = var3.bind(var4)(var6);
                var5 = null;
                if(!(var5 == var8)) { _fun0019_ip = 102; continue _fun0019 }
case 95:
                var7 = _closure1_slot23;
                var4 = var7.warn;
                var3 = 'Cannot report incoming call: channel not found:';
                var3 = var4.bind(var7)(var3, var6);
                _fun0019_ip = 113; continue _fun0019;
case 102:
                var3 = var9.currentCall;
                var3 = var5 != var3;
                if(!var3) { _fun0019_ip = 114; continue _fun0019 }
case 46:
                var4 = var9.currentCall;
                var4 = var4.channelId;
                var3 = var4 !== var6;
case 114:
                if(!var3) { _fun0019_ip = 115; continue _fun0019 }
case 11:
                var7 = var9.isPendingIncomingCall;
                var4 = var9.currentCall;
                var3 = var7.bind(var9)(var4);
case 115:
                if(!var3) { _fun0019_ip = 116; continue _fun0019 }
case 83:
                var4 = var9.cancelIncomingCall;
                var3 = var9.currentCall;
                var3 = var3.channelId;
                var3 = var4.bind(var9)(var3);
case 116:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 30;
                var3 = var7[var3];
                var7 = undefined;
                var11 = var4.bind(var7)(var3);
                var10 = var11.computeChannelName;
                var4 = _closure1_slot20;
                var3 = _closure1_slot18;
                var4 = var10.bind(var11)(var8, var4, var3);
                var3 = var8.getGuildId;
                var3 = var3.bind(var8)();
                var10 = var5 != var3;
                var8 = null;
                if(!var10) { _fun0019_ip = 98; continue _fun0019 }
case 117:
                var8 = var3;
case 98:
                var3 = {};
                var3['channelId'] = var6;
                var3['guildId'] = var8;
                var3['channelName'] = var4;
                var10 = _closure1_slot24;
                var10 = var10.Ringing;
                var3['state'] = var10;
                var9['currentCall'] = var3;
                var12 = _closure1_slot23;
                var11 = var12.info;
                var16 = 'Reporting incoming call to Telecom:';
                var14 = 'callerName:';
                var17 = var12;
                var15 = var6;
                var13 = var4;
                var3 = var17[var11](var16, var15, var14, var13, var12);
                var3 = var9.startRingtone;
                var3 = var3.bind(var9)();
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 29;
                var2 = var9[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.reportIncomingCall;
                var7 = var5 != var8;
                var5 = null;
                if(!var7) { _fun0019_ip = 118; continue _fun0019 }
case 119:
                var7 = {};
                var7['guildId'] = var8;
                var5 = var7;
case 118:
                var4 = var2.bind(var3)(var6, var4, var5);
                var3 = var4.then;
                var2 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var1 = arg1;
                        if(var1) { _fun0020_ip = 120; continue _fun0020 }
case 121:
                        var3 = _closure1_slot23;
                        var2 = var3.warn;
                        var1 = 'Failed to report incoming call: resolved false';
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.clearCall;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
case 120:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg1) {
                    var4 = _closure1_slot23;
                    var3 = var4.warn;
                    var2 = 'Failed to report incoming call:';
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var3 = _closure3_slot0;
                    var2 = var3.clearCall;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
case 113:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[5] = var5;
        var5 = {};
        var8 = 'cancelIncomingCall';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var4 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var4;
            var6 = _closure1_slot23;
            var5 = var6.info;
            var3 = 'Cancelling incoming call:';
            var3 = var5.bind(var6)(var3, var4);
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 29;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.cancelIncomingCall;
            var4 = var2.bind(var3)(var4);
            var3 = var4.then;
            var2 = function() {
                var3 = _closure3_slot0;
                var2 = var3.clearCall;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = true;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var4 = _closure1_slot23;
                var3 = var4.warn;
                var2 = 'Failed to cancel incoming call:';
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var3 = _closure3_slot0;
                var2 = var3.clearCall;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = false;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var8;
        var1[6] = var5;
        var5 = {};
        var8 = 'isPendingIncomingCall';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var3 = arg1;
                var4 = var3.state;
                var1 = _closure1_slot24;
                var1 = var1.Ringing;
                var1 = var4 === var1;
                if(var1) { _fun0021_ip = 122; continue _fun0021 }
case 34:
                var3 = var3.state;
                var2 = _closure1_slot24;
                var2 = var2.Connecting;
                var1 = var3 === var2;
case 122:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[7] = var5;
        var5 = {};
        var8 = 'reconcileTelecomState';
        var5['key'] = var8;
        var8 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = var2.isEnabled;
                var3 = var3.bind(var2)();
                if(!var3) { _fun0022_ip = 123; continue _fun0022 }
case 99:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 28;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.isMetaQuest;
                var3 = var4.bind(var5)();
case 123:
                if(!var3) { _fun0022_ip = 124; continue _fun0022 }
case 103:
                var4 = var2.reconcilePromise;
                var3 = null;
                if(!(var3 != var4)) { _fun0022_ip = 48; continue _fun0022 }
case 37:
                var3 = true;
                var2['needsReconcile'] = var3;
                _fun0022_ip = 124; continue _fun0022;
case 48:
                var3 = var2.doReconcile;
                var4 = var3.bind(var2)();
                var3 = var4.finally;
                var1 = function() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var3 = null;
                        var2['reconcilePromise'] = var3;
                        var2 = var2.needsReconcile;
                        if(!var2) { _fun0023_ip = 2; continue _fun0023 }
case 125:
                        var2 = _closure3_slot0;
                        var1 = false;
                        var2['needsReconcile'] = var1;
                        var1 = var2.reconcileTelecomState;
                        var1 = var1.bind(var2)();
case 2:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1);
                var2['reconcilePromise'] = var1;
case 124:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[8] = var5;
        var5 = {};
        var8 = 'doReconcile';
        var5['key'] = var8;
        var8 = _closure1_slot3;
        var7 = function* () {
            var1 = function* anon_0_() {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                    StartGenerator();
                    var4 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0024_ip = 126; continue _fun0024 }
case 127:
                    var5 = _closure1_slot17;
                    var3 = var5.getChannelId;
                    var17 = var3.bind(var5)();
                    var3 = var5.isConnected;
                    var16 = var3.bind(var5)();
                    var8 = null;
                    var3 = null;
                    if(!var16) { _fun0024_ip = 128; continue _fun0024 }
case 122:
                    var5 = var8 != var17;
                    var3 = null;
                    if(!var5) { _fun0024_ip = 128; continue _fun0024 }
case 28:
                    var3 = var17;
case 128:
                    var15 = _closure1_slot23;
                    var14 = var15.info;
                    var5 = var4.currentCall;
                    var7 = var8 == var5;
                    var6 = undefined;
                    var13 = undefined;
                    if(var7) { _fun0024_ip = 129; continue _fun0024 }
case 9:
                    var13 = var5.channelId;
case 129:
                    var5 = var4.currentCall;
                    var7 = var8 == var5;
                    var12 = undefined;
                    if(var7) { _fun0024_ip = 50; continue _fun0024 }
case 130:
                    var12 = var5.state;
case 50:
                    var27 = 'Reconcile: rtc=';
                    var25 = 'connected=';
                    var23 = 'target=';
                    var21 = 'current=';
                    var19 = 'state=';
                    var28 = var15;
                    var26 = var17;
                    var24 = var16;
                    var22 = var3;
                    var20 = var13;
                    var18 = var12;
                    var5 = var28[var14](var27, var26, var25, var24, var23, var22, var21, var20, var19, var18, var17);
                    if(!(var8 == var3)) { _fun0024_ip = 24; continue _fun0024 }
case 106:
                    var5 = var4.currentCall;
                    var5 = var8 != var5;
                    if(!var5) { _fun0024_ip = 22; continue _fun0024 }
case 62:
                    var7 = var4.currentCall;
                    var9 = var7.state;
                    var7 = _closure1_slot24;
                    var7 = var7.Ringing;
                    var5 = var9 !== var7;
case 22:
                    if(!var5) { _fun0024_ip = 131; continue _fun0024 }
case 132:
                    var7 = var4.currentCall;
                    var9 = var7.state;
                    var7 = _closure1_slot24;
                    var7 = var7.Connecting;
                    var5 = var9 !== var7;
case 131:
                    if(!var5) { _fun0024_ip = 133; continue _fun0024 }
case 134:
                    var5 = var4.reportCallEnded;
                    var5 = var5.bind(var4)();
                    SaveGenerator(address=253);
case 135:
                    return var5;
case 74:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(!var7) { _fun0024_ip = 133; continue _fun0024 }
case 136:
                    return var5;
case 24:
                    var7 = var4.currentCall;
                    var9 = var8 == var7;
                    var5 = undefined;
                    if(var9) { _fun0024_ip = 137; continue _fun0024 }
case 138:
                    var5 = var7.channelId;
case 137:
                    if(!(var5 === var3)) { _fun0024_ip = 139; continue _fun0024 }
case 25:
                    var5 = var4.currentCall;
                    var7 = var5.state;
                    var5 = _closure1_slot24;
                    var5 = var5.Connected;
                    if(!(var7 !== var5)) { _fun0024_ip = 133; continue _fun0024 }
case 139:
                    var7 = var4.currentCall;
                    var9 = var8 == var7;
                    var5 = undefined;
                    if(var9) { _fun0024_ip = 140; continue _fun0024 }
case 141:
                    var5 = var7.channelId;
case 140:
                    if(!(var5 === var3)) { _fun0024_ip = 142; continue _fun0024 }
case 143:
                    var5 = var4.currentCall;
                    var7 = var5.state;
                    var5 = _closure1_slot24;
                    var5 = var5.Ringing;
                    if(!(var7 !== var5)) { _fun0024_ip = 144; continue _fun0024 }
case 145:
                    var5 = var4.currentCall;
                    var7 = var5.state;
                    var5 = _closure1_slot24;
                    var5 = var5.Connecting;
                    if(!(var7 !== var5)) { _fun0024_ip = 144; continue _fun0024 }
case 142:
                    var5 = var4.currentCall;
                    var5 = var8 != var5;
                    if(!var5) { _fun0024_ip = 146; continue _fun0024 }
case 147:
                    var7 = var4.currentCall;
                    var7 = var7.channelId;
                    var5 = var7 !== var3;
case 146:
                    if(!var5) { _fun0024_ip = 148; continue _fun0024 }
case 149:
                    var7 = var4.isPendingIncomingCall;
                    var5 = var4.currentCall;
                    var5 = var7.bind(var4)(var5);
                    if(var5) { _fun0024_ip = 150; continue _fun0024 }
case 151:
                    var7 = var4.endCall;
                    var5 = var4.currentCall;
                    var5 = var7.bind(var4)(var5);
                    SaveGenerator(address=469);
case 152:
                    return var5;
case 153:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(!var7) { _fun0024_ip = 148; continue _fun0024 }
case 154:
                    return var5;
case 150:
                    var7 = var4.cancelIncomingCall;
                    var5 = var4.currentCall;
                    var5 = var5.channelId;
                    var5 = var7.bind(var4)(var5);
                    SaveGenerator(address=504);
case 155:
                    return var5;
case 156:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(var7) { _fun0024_ip = 157; continue _fun0024 }
case 148:
                    var9 = var4.currentCall;
                    var10 = var8 == var9;
                    var7 = undefined;
                    if(var10) { _fun0024_ip = 158; continue _fun0024 }
case 159:
                    var7 = var9.channelId;
case 158:
                    if(!(var7 !== var3)) { _fun0024_ip = 160; continue _fun0024 }
case 161:
                    var9 = _closure1_slot14;
                    var7 = var9.getChannel;
                    var13 = var7.bind(var9)(var3);
                    if(!(var8 != var13)) { _fun0024_ip = 162; continue _fun0024 }
case 163:
                    var7 = {};
                    var7['channelId'] = var3;
                    var10 = _closure1_slot17;
                    var9 = var10.getGuildId;
                    var10 = var9.bind(var10)();
                    var11 = var8 != var10;
                    var9 = null;
                    if(!var11) { _fun0024_ip = 164; continue _fun0024 }
case 165:
                    var9 = var10;
case 164:
                    var7['guildId'] = var9;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var9 = 30;
                    var9 = var11[var9];
                    var12 = var10.bind(var6)(var9);
                    var11 = var12.computeChannelName;
                    var10 = _closure1_slot20;
                    var9 = _closure1_slot18;
                    var9 = var11.bind(var12)(var13, var10, var9);
                    var7['channelName'] = var9;
                    var9 = _closure1_slot24;
                    var9 = var9.Connecting;
                    var7['state'] = var9;
                    var4['currentCall'] = var7;
case 160:
                    var7 = var4.currentCall;
                    var9 = var7.state;
                    var7 = _closure1_slot24;
                    var7 = var7.Connecting;
                    if(!(var9 === var7)) { _fun0024_ip = 133; continue _fun0024 }
case 166:
                    var7 = var4.currentCall;
                    var10 = var7.channelId;
                    var9 = var4.startCall;
                    var7 = {};
                    var11 = var4.currentCall;
                    var11 = var11.channelId;
                    var7['channelId'] = var11;
                    var11 = var4.currentCall;
                    var11 = var11.guildId;
                    var7['guildId'] = var11;
                    var7 = var9.bind(var4)(var7);
                    SaveGenerator(address=749);
case 167:
                    return var7;
case 168:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=8);
                    if(var9) { _fun0024_ip = 169; continue _fun0024 }
case 170:
                    if(!var7) { _fun0024_ip = 133; continue _fun0024 }
case 171:
                    var9 = var4.currentCall;
                    var11 = var8 == var9;
                    var8 = undefined;
                    if(var11) { _fun0024_ip = 172; continue _fun0024 }
case 173:
                    var8 = var9.channelId;
case 172:
                    if(!(var8 === var10)) { _fun0024_ip = 174; continue _fun0024 }
case 175:
                    var9 = _closure1_slot17;
                    var8 = var9.isConnected;
                    var8 = var8.bind(var9)();
                    if(!var8) { _fun0024_ip = 176; continue _fun0024 }
case 177:
                    var9 = _closure1_slot17;
                    var8 = var9.getChannelId;
                    var8 = var8.bind(var9)();
                    if(!(var8 === var10)) { _fun0024_ip = 176; continue _fun0024 }
case 178:
                    var9 = var4.currentCall;
                    var8 = _closure1_slot24;
                    var8 = var8.Connected;
                    var9['state'] = var8;
                    var8 = var4.setCallActive;
                    var8 = var8.bind(var4)(var10);
case 133:
                    return var6;
case 176:
                    var11 = _closure1_slot23;
                    var9 = var11.info;
                    var8 = 'RTCConnectionStore indicates disconnect after startCall, ending call:';
                    var8 = var9.bind(var11)(var8, var10);
                    var8 = var4.reportCallEnded;
                    var8 = var8.bind(var4)();
                    SaveGenerator(address=895);
case 179:
                    return var8;
case 180:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(var9) { _fun0024_ip = 181; continue _fun0024 }
case 182:
                    var9 = undefined;
                    return var9;
case 181:
                    return var8;
case 174:
                    var11 = _closure1_slot23;
                    var9 = var11.info;
                    var8 = 'Call state changed during startCall, ending orphaned native call:';
                    var8 = var9.bind(var11)(var8, var10);
                    var9 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var8 = 29;
                    var8 = var11[var8];
                    var9 = var9.bind(var6)(var8);
                    var8 = var9.endCall;
                    var10 = var8.bind(var9)(var10);
                    var9 = var10.catch;
                    var8 = function(arg1) {
                        var4 = _closure1_slot23;
                        var3 = var4.warn;
                        var2 = 'Failed to end orphaned call:';
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var8 = var9.bind(var10)(var8);
                    var8 = undefined;
                    return var8;
case 169:
                    return var7;
case 162:
                    return var6;
case 157:
                    return var5;
case 144:
                    var7 = _closure1_slot23;
                    var6 = var7.info;
                    var5 = 'Incoming call answered, transitioning to active:';
                    var5 = var6.bind(var7)(var5, var3);
                    var5 = var4.stopRingtone;
                    var5 = var5.bind(var4)();
                    var5 = var4.currentCall;
                    var2 = _closure1_slot24;
                    var2 = var2.Connected;
                    var5['state'] = var2;
                    var2 = var4.setIncomingCallActive;
                    var2 = var2.bind(var4)(var3);
                    var2 = undefined;
                    return var2;
case 126:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot1 = var7;
        var7 = function doReconcile() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleIncomingCallStoreChange';
        var5['key'] = var7;
        var7 = function value() {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var9 = this;
                var _closure3_slot0 = var9;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 28;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var3);
                var3 = var5.isMetaQuest;
                var3 = var3.bind(var5)();
                if(var3) { _fun0025_ip = 183; continue _fun0025 }
case 184:
                var3 = var9.isEnabled;
                var3 = var3.bind(var9)();
                if(!var3) { _fun0025_ip = 183; continue _fun0025 }
case 185:
                var5 = _closure1_slot12;
                var3 = var5.getId;
                var8 = var3.bind(var5)();
                var3 = global;
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var13 = var5;
                var3 = new var13[var3](var12);
                var3 = var3 instanceof Object ? var3 : var5;
                var6 = _closure1_slot26;
                var7 = _closure1_slot13;
                var5 = var7.getCalls;
                var5 = var5.bind(var7)();
                var7 = var6.bind(var1)(var5);
                var6 = var7.bind(var1)();
                var5 = var6.done;
                if(var5) { _fun0025_ip = 186; continue _fun0025 }
case 187:
                var5 = var6.value;
                var11 = var5.ringing;
                var10 = var11.includes;
                var10 = var10.bind(var11)(var8);
                if(!var10) { _fun0025_ip = 188; continue _fun0025 }
case 106:
                var10 = var3.add;
                var5 = var5.channelId;
                var5 = var10.bind(var3)(var5);
case 188:
                var10 = var7.bind(var1)();
                var5 = var10.done;
                var6 = var10;
                if(!var5) { _fun0025_ip = 187; continue _fun0025 }
case 186:
                var6 = _closure1_slot26;
                var5 = var9.registeredIncomingCallIds;
                var8 = var6.bind(var1)(var5);
                var6 = var8.bind(var1)();
                var5 = var6.done;
                var7 = 29;
                if(var5) { _fun0025_ip = 189; continue _fun0025 }
case 190:
                var11 = var6.value;
                var5 = var3.has;
                var5 = var5.bind(var3)(var11);
                if(var5) { _fun0025_ip = 191; continue _fun0025 }
case 192:
                var10 = var9.registeredIncomingCallIds;
                var5 = var10.delete;
                var5 = var5.bind(var10)(var11);
                var10 = _closure1_slot1;
                var5 = _closure1_slot2;
                var5 = var5[var7];
                var10 = var10.bind(var1)(var5);
                var5 = var10.endCall;
                var11 = var5.bind(var10)(var11);
                var10 = var11.catch;
                var5 = function(arg1) {
                    var4 = _closure1_slot23;
                    var3 = var4.warn;
                    var2 = 'Failed to end telecom call:';
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var5 = var10.bind(var11)(var5);
case 191:
                var10 = var8.bind(var1)();
                var5 = var10.done;
                var6 = var10;
                if(!var5) { _fun0025_ip = 190; continue _fun0025 }
case 189:
                var5 = function _loop(arg1) {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var4 = arg1;
                        var _closure4_slot0 = var4;
                        var3 = _closure3_slot0;
                        var5 = var3.registeredIncomingCallIds;
                        var3 = var5.has;
                        var3 = var3.bind(var5)(var4);
                        if(var3) { _fun0026_ip = 193; continue _fun0026 }
case 194:
                        var2 = _closure3_slot0;
                        var3 = var2.registeredIncomingCallIds;
                        var2 = var3.add;
                        var2 = var2.bind(var3)(var4);
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 29;
                        var3 = var3[var2];
                        var2 = undefined;
                        var3 = var5.bind(var2)(var3);
                        var2 = var3.registerIncomingCall;
                        var4 = var2.bind(var3)(var4);
                        var3 = var4.then;
                        var2 = function(arg1) {
                            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                                var1 = arg1;
                                if(var1) { _fun0027_ip = 128; continue _fun0027 }
case 121:
                                var3 = _closure1_slot23;
                                var2 = var3.warn;
                                var1 = 'Failed to register incoming call with telecom: resolved false';
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot0;
                                var3 = var1.registeredIncomingCallIds;
                                var2 = var3.delete;
                                var1 = _closure4_slot0;
                                var1 = var2.bind(var3)(var1);
case 128:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.catch;
                        var1 = function(arg1) {
                            var4 = _closure1_slot23;
                            var3 = var4.warn;
                            var2 = 'Failed to register incoming call with telecom:';
                            var1 = arg1;
                            var1 = var3.bind(var4)(var2, var1);
                            var1 = _closure3_slot0;
                            var3 = var1.registeredIncomingCallIds;
                            var2 = var3.delete;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 193:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = _closure1_slot26;
                var4 = var2.bind(var1)(var3);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0025_ip = 183; continue _fun0025 }
case 195:
                var2 = var3.value;
                var2 = var5.bind(var1)(var2);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0025_ip = 195; continue _fun0025 }
case 183:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'startCall';
        var5['key'] = var7;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    var6 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0028_ip = 196; continue _fun0028 }
case 100:
                    var9 = undefined;
                    var2 = undefined;
                    var12 = undefined;
                    var7 = undefined;
                    var2 = var3.channelId;
                    var12 = var3.guildId;
                    var3 = var6.currentCall;
                    var10 = null;
                    var5 = var10 == var3;
                    var4 = undefined;
                    if(var5) { _fun0028_ip = 28; continue _fun0028 }
case 120:
                    var4 = var3.channelId;
case 28:
                    var3 = var2;
                    if(!(var4 === var3)) { _fun0028_ip = 56; continue _fun0028 }
case 197:
                    var3 = var6.currentCall;
                    var5 = var3.state;
                    var4 = _closure1_slot24;
                    var4 = var4.Connected;
                    if(!(var5 !== var4)) { _fun0028_ip = 76; continue _fun0028 }
case 56:
                    var13 = _closure1_slot23;
                    var11 = var13.info;
                    var8 = var2;
                    var5 = 'Starting Telecom call:';
                    var5 = var11.bind(var13)(var5, var8);
case 198: // try_start_0
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 29;
                    var5 = var11[var5];
                    var9 = var8.bind(var9)(var5);
                    var8 = var9.startCall;
                    var5 = var2;
                    var11 = var12;
                    var11 = var10 != var11;
                    var10 = null;
                    if(!var11) { _fun0028_ip = 199; continue _fun0028 }
case 14:
                    var11 = {};
                    var11['guildId'] = var12;
                    var10 = var11;
case 199:
                    var5 = var8.bind(var9)(var5, var10);
                    SaveGenerator(address=182);
case 62:
                    return var5;
case 188:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(var8) { _fun0028_ip = 200; continue _fun0028 }
case 201:
                    var7 = var5;
                    if(var5) { _fun0028_ip = 202; continue _fun0028 }
case 203:
                    var10 = _closure1_slot23;
                    var9 = var10.warn;
                    var8 = 'Native startCall returned false, clearing call state';
                    var8 = var9.bind(var10)(var8);
                    var9 = var6.clearCall;
                    var8 = var2;
                    var8 = var9.bind(var6)(var8);
case 202: // try_end0
                    return var7;
case 200:
                    return var5;
case 21: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var7 = _closure1_slot23;
                    var5 = var7.warn;
                    var4 = 'Failed to register call with Telecom:';
                    var4 = var5.bind(var7)(var4, var8);
                    var5 = var6.clearCall;
                    var4 = var2;
                    var4 = var5.bind(var6)(var4);
                    var4 = false;
                    return var4;
case 76:
                    var5 = _closure1_slot23;
                    var4 = var5.info;
                    var3 = var2;
                    var2 = 'Call already active for channel:';
                    var2 = var4.bind(var5)(var2, var3);
                    var2 = true;
                    return var2;
case 196:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var7 = function startCall(arg1) {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'endCall';
        var5['key'] = var7;
        var7 = function endCall(arg1) {
            var2 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var2;
            var7 = _closure1_slot23;
            var6 = var7.info;
            var5 = var2.channelId;
            var4 = 'Ending call:';
            var4 = var6.bind(var7)(var4, var5);
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 29;
            var4 = var4[var3];
            var3 = undefined;
            var4 = var5.bind(var3)(var4);
            var3 = var4.endCall;
            var2 = var2.channelId;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.clearCall;
                var1 = _closure3_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                var1 = arg1;
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var4 = _closure1_slot23;
                var3 = var4.warn;
                var2 = 'Failed to end call:';
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                var3 = _closure3_slot0;
                var2 = var3.clearCall;
                var1 = _closure3_slot1;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
                var1 = false;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'reportCallEnded';
        var5['key'] = var7;
        var7 = function reportCallEnded() {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var4 = this;
                var5 = _closure1_slot23;
                var3 = var5.info;
                var2 = 'Reporting call ended';
                var2 = var3.bind(var5)(var2);
                var3 = var4.currentCall;
                var2 = null;
                if(!(var2 != var3)) { _fun0029_ip = 204; continue _fun0029 }
case 95:
                var2 = var4.currentCall;
                var2 = var2.state;
                var1 = _closure1_slot24;
                var1 = var1.Ringing;
                if(!(var2 !== var1)) { _fun0029_ip = 205; continue _fun0029 }
case 206:
                var2 = var4.endCall;
                var1 = var4.currentCall;
                var1 = var2.bind(var4)(var1);
                _fun0029_ip = 207; continue _fun0029;
case 205:
                var3 = var4.cancelIncomingCall;
                var2 = var4.currentCall;
                var2 = var2.channelId;
                var1 = var3.bind(var4)(var2);
case 207:
                _fun0029_ip = 208; continue _fun0029;
case 204:
                var2 = global;
                var4 = var2.Promise;
                var3 = var4.resolve;
                var2 = true;
                var1 = var3.bind(var4)(var2);
case 208:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'setCallActive';
        var5['key'] = var7;
        var7 = function setCallActive(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var4 = var3.currentCall;
                var1 = null;
                var5 = var1 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var5) { _fun0030_ip = 3; continue _fun0030 }
case 88:
                var2 = var4.channelId;
case 3:
                if(!(var2 !== var6)) { _fun0030_ip = 103; continue _fun0030 }
case 209:
                var5 = _closure1_slot23;
                var4 = var5.warn;
                var2 = 'setCallActive called for unknown channel:';
                var2 = var4.bind(var5)(var2, var6);
                _fun0030_ip = 210; continue _fun0030;
case 103:
                var7 = _closure1_slot23;
                var5 = var7.info;
                var2 = 'Setting call active:';
                var2 = var5.bind(var7)(var2, var6);
                var5 = _closure1_slot15;
                var2 = var5.isSelfMute;
                var2 = var2.bind(var5)();
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 29;
                var4 = var7[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.setCallActive;
                var4 = var4.bind(var5)(var6, var2);
                var3['lastMuteState'] = var2;
                var2 = false;
                var3['lastScreenShareActive'] = var2;
case 210:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'setIncomingCallActive';
        var5['key'] = var7;
        var7 = function setIncomingCallActive(arg1) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var4 = var3.currentCall;
                var8 = null;
                var5 = var8 == var4;
                var1 = undefined;
                var2 = undefined;
                if(var5) { _fun0031_ip = 3; continue _fun0031 }
case 88:
                var2 = var4.channelId;
case 3:
                if(!(var2 !== var6)) { _fun0031_ip = 197; continue _fun0031 }
case 209:
                var5 = _closure1_slot23;
                var4 = var5.warn;
                var2 = 'setIncomingCallActive called for unknown channel:';
                var2 = var4.bind(var5)(var2, var6);
                _fun0031_ip = 211; continue _fun0031;
case 197:
                var7 = _closure1_slot23;
                var5 = var7.info;
                var2 = 'Setting incoming call active:';
                var2 = var5.bind(var7)(var2, var6);
                var5 = _closure1_slot15;
                var2 = var5.isSelfMute;
                var7 = var2.bind(var5)();
                var5 = var3.pendingMutePreference;
                var2 = var7;
                if(!(var8 != var5)) { _fun0031_ip = 64; continue _fun0031 }
case 212:
                var5 = var3.pendingMutePreference;
                var3['pendingMutePreference'] = var8;
                var2 = var7;
                if(!(var7 !== var5)) { _fun0031_ip = 64; continue _fun0031 }
case 213:
                var9 = _closure1_slot23;
                var8 = var9.info;
                var7 = 'Re-applying Telecom Bar ringing-state mute preference:';
                var7 = var8.bind(var9)(var7, var5);
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var7 = 25;
                var7 = var9[var7];
                var10 = var8.bind(var1)(var7);
                var9 = var10.setSelfMute;
                var7 = _closure1_slot22;
                var8 = var7.DEFAULT;
                var7 = false;
                var7 = var9.bind(var10)(var8, var5, var7);
                var2 = var5;
case 64:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 29;
                var4 = var7[var4];
                var5 = var5.bind(var1)(var4);
                var4 = var5.setIncomingCallActive;
                var4 = var4.bind(var5)(var6, var2);
                var3['lastMuteState'] = var2;
                var2 = false;
                var3['lastScreenShareActive'] = var2;
case 211:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'clearScreenShareState';
        var5['key'] = var7;
        var7 = function clearScreenShareState() {
            var2 = null;
            var1 = this;
            var1['lastScreenShareActive'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'clearPendingScreenShareOffSync';
        var5['key'] = var7;
        var7 = function clearPendingScreenShareOffSync() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var2 = this;
                var3 = var2.pendingScreenShareOffSyncTimeout;
                var1 = null;
                if(!(var1 != var3)) { _fun0032_ip = 214; continue _fun0032 }
case 89:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.pendingScreenShareOffSyncTimeout;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['pendingScreenShareOffSyncTimeout'] = var1;
case 214:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'clearCall';
        var5['key'] = var7;
        var7 = function clearCall(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var3 = this;
                var4 = var3.currentCall;
                var2 = null;
                var6 = var2 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var6) { _fun0033_ip = 215; continue _fun0033 }
case 99:
                var5 = var4.channelId;
case 215:
                var4 = arg1;
                if(!(var5 === var4)) { _fun0033_ip = 216; continue _fun0033 }
case 209:
                var4 = var3.stopRingtone;
                var4 = var4.bind(var3)();
                var3['currentCall'] = var2;
                var3['lastMuteState'] = var2;
                var3['pendingMutePreference'] = var2;
                var2 = var3.clearScreenShareState;
                var2 = var2.bind(var3)();
                var2 = var3.clearPendingScreenShareOffSync;
                var2 = var2.bind(var3)();
case 216:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'startRingtone';
        var5['key'] = var7;
        var7 = function startRingtone() {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 28;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.isMetaQuest;
                var4 = var4.bind(var5)();
                if(!var4) { _fun0034_ip = 47; continue _fun0034 }
case 217:
                var6 = var2.ringtone;
                var5 = null;
                var4 = var5 == var6;
case 47:
                if(!var4) { _fun0034_ip = 14; continue _fun0034 }
case 28:
                var4 = _closure1_slot19;
                var4 = var4.disableSounds;
                if(var4) { _fun0034_ip = 85; continue _fun0034 }
case 57:
                var7 = _closure1_slot16;
                var6 = var7.isSoundDisabled;
                var5 = 'call_ringing';
                var4 = var6.bind(var7)(var5);
case 85:
                if(var4) { _fun0034_ip = 14; continue _fun0034 }
case 129:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 31;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.createSoundForPack;
                var4 = _closure1_slot10;
                var3 = var4.getSoundpack;
                var4 = var3.bind(var4)();
                var3 = 'call_ringing';
                var3 = var5.bind(var6)(var3, var4);
                var2['ringtone'] = var3;
                var3 = var2.ringtone;
                var2 = var3.loop;
                var2 = var2.bind(var3)();
case 14:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'stopRingtone';
        var5['key'] = var7;
        var7 = function stopRingtone() {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var3 = this;
                var2 = var3.ringtone;
                var1 = null;
                if(!(var1 != var2)) { _fun0035_ip = 91; continue _fun0035 }
case 89:
                var3['ringtone'] = var1;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
case 91:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'handleMuteStoreChange';
        var5['key'] = var7;
        var7 = function handleMuteStoreChange() {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var1 = this;
                var2 = var1.isEnabled;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0036_ip = 60; continue _fun0036 }
case 218:
                var3 = var1.currentCall;
                var2 = null;
                if(!(var2 != var3)) { _fun0036_ip = 60; continue _fun0036 }
case 209:
                var2 = var1.currentCall;
                var4 = var2.state;
                var3 = _closure1_slot24;
                var3 = var3.Connected;
                if(!(var4 === var3)) { _fun0036_ip = 60; continue _fun0036 }
case 219:
                var4 = _closure1_slot15;
                var3 = var4.isSelfMute;
                var4 = var3.bind(var4)();
                var3 = var1.lastMuteState;
                if(!(var3 !== var4)) { _fun0036_ip = 60; continue _fun0036 }
case 9:
                var1['lastMuteState'] = var4;
                var6 = _closure1_slot23;
                var5 = var6.info;
                var3 = 'Syncing Discord -> Call Bar mute state:';
                var3 = var5.bind(var6)(var3, var4);
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 29;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var5.bind(var2)(var3);
                var2 = var3.setMicMuted;
                var1 = var1.currentCall;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1, var4);
case 60:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'handleScreenShareStoreChange';
        var5['key'] = var7;
        var6 = function handleScreenShareStoreChange() {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var1 = this;
                var _closure3_slot0 = var1;
                var2 = var1.isEnabled;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0037_ip = 58; continue _fun0037 }
case 88:
                var2 = var1.currentCall;
                var4 = null;
                if(!(var4 != var2)) { _fun0037_ip = 58; continue _fun0037 }
case 220:
                var2 = var1.currentCall;
                var6 = var2.state;
                var5 = _closure1_slot24;
                var5 = var5.Connected;
                if(!(var6 === var5)) { _fun0037_ip = 58; continue _fun0037 }
case 54:
                var6 = _closure1_slot11;
                var5 = var6.getCurrentUserActiveStream;
                var5 = var5.bind(var6)();
                var4 = var4 != var5;
                if(!var4) { _fun0037_ip = 50; continue _fun0037 }
case 221:
                var6 = var5.state;
                var5 = _closure1_slot21;
                var5 = var5.ACTIVE;
                var4 = var6 === var5;
case 50:
                var5 = var1.lastScreenShareActive;
                if(!(var5 !== var4)) { _fun0037_ip = 58; continue _fun0037 }
case 222:
                var1['lastScreenShareActive'] = var4;
                var5 = var1.clearPendingScreenShareOffSync;
                var5 = var5.bind(var1)();
                if(var4) { _fun0037_ip = 20; continue _fun0037 }
case 187:
                var4 = var1.currentCall;
                var4 = var4.channelId;
                var _closure3_slot1 = var4;
                var4 = global;
                var6 = var4.setTimeout;
                var5 = undefined;
                var4 = function() {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var4 = null;
                        var3['pendingScreenShareOffSyncTimeout'] = var4;
                        var2 = var3.isEnabled;
                        var2 = var2.bind(var3)();
                        if(!var2) { _fun0038_ip = 103; continue _fun0038 }
case 34:
                        var3 = _closure3_slot0;
                        var3 = var3.currentCall;
                        var5 = var4 == var3;
                        var4 = undefined;
                        if(var5) { _fun0038_ip = 223; continue _fun0038 }
case 122:
                        var4 = var3.channelId;
case 223:
                        var3 = _closure3_slot1;
                        var2 = var4 === var3;
case 103:
                        if(!var2) { _fun0038_ip = 224; continue _fun0038 }
case 197:
                        var5 = _closure1_slot23;
                        var4 = var5.info;
                        var3 = 'Syncing Discord -> Call Bar screen share state: false (delayed)';
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 29;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.setScreenShareState;
                        var3 = _closure3_slot1;
                        var2 = true;
                        var1 = false;
                        var1 = var4.bind(var5)(var3, var2, var1);
case 224:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = 400;
                var3 = var6.bind(var5)(var4, var3);
                var1['pendingScreenShareOffSyncTimeout'] = var3;
                _fun0037_ip = 58; continue _fun0037;
case 20:
                var5 = _closure1_slot23;
                var4 = var5.info;
                var3 = 'Syncing Discord -> Call Bar screen share state: true';
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 29;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.setScreenShareState;
                var1 = var1.currentCall;
                var2 = var1.channelId;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1, var1);
case 58:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[22] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var18 = var4;
    var2 = new var18[var2](var17);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/calls/native/TelecomManager.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
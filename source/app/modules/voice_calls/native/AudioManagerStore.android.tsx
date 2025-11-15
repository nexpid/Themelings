// app/modules/voice_calls/native/AudioManagerStore.android.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var1 = function setActiveAudioDevice(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isString;
            var2 = var2.bind(var3)(var6);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = 8;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var2 = var5.setActiveAudioDevice;
            var2 = var2.bind(var5)(var6);
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var2 = 10;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.captureMessage;
            var3 = {};
            var2 = {};
            var2['deviceString'] = var6;
            var3['extra'] = var2;
            var2 = 'AudioManagerStore received a string for an android audio device';
            var2 = var4.bind(var5)(var2, var3);
case 8:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var10 = var2.NativeEventEmitter;
    var2 = 6;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.RTCConnectionStates;
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.MediaEngineContextTypes;
    var _closure1_slot9 = var2;
    var2 = 8;
    var8 = var6[var2];
    var13 = var7.bind(var1)(var8);
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var14 = var9;
    var8 = new var14[var10](var13, var12);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot10 = var8;
    var8 = new Array(0);
    var _closure1_slot11 = var8;
    var8 = var6[var2];
    var9 = var5.bind(var1)(var8);
    var8 = var9.getInvalidAndroidDevice;
    var8 = var8.bind(var9)();
    var _closure1_slot12 = var8;
    var2 = var6[var2];
    var8 = var5.bind(var1)(var2);
    var2 = var8.getInvalidAndroidDevice;
    var2 = var2.bind(var8)();
    var _closure1_slot13 = var2;
    var2 = false;
    var _closure1_slot14 = var2;
    var2 = 11;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function AudioManagerStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 11; continue _fun0003;
case 9:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 11:
                var1 = var2.bind(var3)(var4, var1);
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var1 = this;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
            var6 = var4[var2];
            var1 = undefined;
            var7 = var3.bind(var1)(var6);
            var6 = var7.getAudioDevices;
            var8 = var6.bind(var7)();
            var7 = var8.then;
            var6 = function(arg1) {
                var2 = arg1;
                _closure1_slot11 = var2;
                var3 = _closure3_slot0;
                var2 = var3.emitChange;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot10;
                var3 = var4.addListener;
                var2 = 'android-audio-devices-updated';
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.devices;
                    _closure1_slot11 = var2;
                    var2 = _closure3_slot0;
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var6 = var4[var2];
            var7 = var3.bind(var1)(var6);
            var6 = var7.getActiveAudioDevice;
            var7 = var6.bind(var7)();
            var6 = var7.then;
            var5 = function(arg1) {
                var2 = arg1;
                _closure1_slot12 = var2;
                var3 = _closure3_slot0;
                var2 = var3.emitChange;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot10;
                var3 = var4.addListener;
                var2 = 'android-active-audio-device-changed';
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.device;
                    _closure1_slot12 = var2;
                    var2 = _closure3_slot0;
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.setSCORetryCount;
            var2 = 4;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getAudioDevices';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getActiveAudioDevice';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getRequestedActiveAudioDevice';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot13;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'AudioManagerStore';
    var8['displayName'] = var2;
    var2 = 12;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleRTCConnectionStateUpdate(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = var2.context;
            var3 = _closure1_slot9;
            var3 = var3.DEFAULT;
            if(!(var4 === var3)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            var4 = var2.state;
            var3 = _closure1_slot8;
            var3 = var3.CONNECTING;
            if(!(var3 !== var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
            var3 = _closure1_slot8;
            var3 = var3.DISCONNECTED;
            if(!(var3 === var4)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var2 = var2.willReconnect;
            if(var2) { _fun0004_ip = 16; continue _fun0004 }
case 18:
            var4 = false;
            _closure1_slot14 = var4;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var2 = var3.setCommunicationModeOn;
            var2 = var2.bind(var3)(var4);
            _fun0004_ip = 16; continue _fun0004;
case 14:
            var5 = true;
            _closure1_slot14 = var5;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var7 = 8;
            var2 = var2[var7];
            var3 = undefined;
            var4 = var4.bind(var3)(var2);
            var2 = var4.setCommunicationModeOn;
            var2 = var2.bind(var4)(var5);
            var4 = _closure1_slot12;
            var2 = _closure1_slot13;
            var2 = var4 !== var2;
            if(!var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var4 = _closure1_slot13;
            var5 = var4.simpleDeviceType;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.AudioDeviceType;
            var4 = var4.INVALID;
            var2 = var5 !== var4;
case 19:
            if(!var2) { _fun0004_ip = 16; continue _fun0004 }
case 21:
            var2 = _closure1_slot16;
            var1 = _closure1_slot13;
            var1 = var2.bind(var3)(var1);
case 16:
            var1 = undefined;
            return var1;
case 12:
            var1 = false;
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var9;
    var4 = function handleSetActiveAudioDevice(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var3 = var1.device;
            _closure1_slot13 = var3;
            var2 = _closure1_slot14;
            if(!var2) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var2 = _closure1_slot16;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
case 22:
            var1 = undefined;
            return var1;
        }
    };
    var2['NATIVE_AUDIO_SET_OUTPUT_DEVICE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_calls/native/AudioManagerStore.android.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
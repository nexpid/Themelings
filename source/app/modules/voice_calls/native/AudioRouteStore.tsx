// app/modules/voice_calls/native/AudioRouteStore.tsx
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function handleAudioRouteChanged(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var3 = arguments[1];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0002_ip = 19; continue _fun0002 }
 12:
            var3 = _closure1_slot12;
 19:
            var2 = null;
            if(!(var2 != var6)) { _fun0002_ip = 137; continue _fun0002 }
 25:
            var2 = '';
            if(!(var2 !== var6)) { _fun0002_ip = 137; continue _fun0002 }
 33:
            var4 = var6.includes;
            var2 = 'Bluetooth';
            var4 = var4.bind(var6)(var2);
            if(var4) { _fun0002_ip = 125; continue _fun0002 }
 55:
            var5 = var6.includes;
            var4 = 'Speaker';
            var4 = var5.bind(var6)(var4);
            if(var4) { _fun0002_ip = 113; continue _fun0002 }
 74:
            var5 = var6.includes;
            var4 = 'Receiver';
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot10;
            if(var4) { _fun0002_ip = 105; continue _fun0002 }
 97:
            var4 = var5.UNKNOWN;
            _fun0002_ip = 111; continue _fun0002;
 105:
            var4 = var5.RECEIVER;
 111:
            _fun0002_ip = 123; continue _fun0002;
 113:
            var5 = _closure1_slot10;
            var4 = var5.SPEAKER;
 123:
            _fun0002_ip = 135; continue _fun0002;
 125:
            var2 = _closure1_slot10;
            var4 = var2.BLUETOOTH;
 135:
            _fun0002_ip = 150; continue _fun0002;
 137:
            var2 = _closure1_slot10;
            var4 = var2.UNKNOWN;
 150:
            _closure1_slot11 = var4;
            _closure1_slot12 = var3;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function resetState() {
        var1 = _closure1_slot10;
        var1 = var1.UNKNOWN;
        _closure1_slot11 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var4 = var2.NativeModules;
    var _closure1_slot8 = var4;
    var10 = var2.NativeEventEmitter;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = {};
    var9 = 'unknown';
    var2['UNKNOWN'] = var9;
    var9 = 'bluetooth';
    var2['BLUETOOTH'] = var9;
    var9 = 'speaker';
    var2['SPEAKER'] = var9;
    var9 = 'receiver';
    var2['RECEIVER'] = var9;
    var _closure1_slot10 = var2;
    var9 = var2.UNKNOWN;
    var _closure1_slot11 = var9;
    var9 = false;
    var _closure1_slot12 = var9;
    var9 = null;
    var _closure1_slot13 = var9;
    var13 = var4.AudioRouteEmitter;
    var9 = var10.prototype;
    var9 = Object.create(var9, {constructor: {value: var10}});
    var14 = var9;
    var4 = new var14[var10](var13, var12);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot14 = var4;
    var4 = function handleConnectionStatusChanged() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot9;
            var2 = var4.isConnected;
            var2 = var2.bind(var4)();
            var4 = _closure1_slot13;
            var5 = null;
            if(!(var5 === var4)) { _fun0003_ip = 32; continue _fun0003 }
 29:
            if(var2) { _fun0003_ip = 108; continue _fun0003 }
 32:
            var4 = _closure1_slot13;
            if(!(var5 != var4)) { _fun0003_ip = 321; continue _fun0003 }
 43:
            if(var2) { _fun0003_ip = 321; continue _fun0003 }
 49:
            var2 = _closure1_slot8;
            var4 = var2.AudioRoutePicker;
            if(!(var5 != var4)) { _fun0003_ip = 75; continue _fun0003 }
 63:
            var2 = var4.resetPortOverride;
            var2 = var2.bind(var4)();
 75:
            var4 = _closure1_slot19;
            var2 = undefined;
            var2 = var4.bind(var2)();
            var4 = _closure1_slot13;
            var2 = var4.remove;
            var2 = var2.bind(var4)();
            _closure1_slot13 = var5;
            _fun0003_ip = 321; continue _fun0003;
 108:
            var2 = _closure1_slot19;
            var6 = undefined;
            var2 = var2.bind(var6)();
            var2 = _closure1_slot14;
            var4 = var5 == var2;
            var2 = undefined;
            if(var4) { _fun0003_ip = 158; continue _fun0003 }
 131:
            var9 = _closure1_slot14;
            var8 = var9.addListener;
            var7 = 'audio-route-changed';
            var4 = function(arg1) {
                var1 = arg1;
                var5 = var1.routeType;
                var4 = var1.multipleRoutesAvailable;
                var3 = _closure1_slot18;
                var1 = undefined;
                var3 = var3.bind(var1)(var5, var4);
                var3 = _closure1_slot16;
                var2 = var3.emitChange;
                var2 = var2.bind(var3)();
                return var1;
            };
            var2 = var8.bind(var9)(var7, var4);
 158:
            _closure1_slot13 = var2;
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isAndroid;
            var2 = var2.bind(var4)();
            if(var2) { _fun0003_ip = 216; continue _fun0003 }
 194:
            var2 = _closure1_slot8;
            var4 = var2.AudioRouteEmitter;
            var2 = var4.getCurrentRoute;
            var4 = var2.bind(var4)();
            _fun0003_ip = 275; continue _fun0003;
 216:
            var8 = _closure1_slot1;
            var2 = _closure1_slot2;
            var7 = 8;
            var2 = var2[var7];
            var2 = var8.bind(var6)(var2);
            var5 = var5 == var2;
            var2 = undefined;
            if(var5) { _fun0003_ip = 272; continue _fun0003 }
 245:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var5 = var5.bind(var6)(var3);
            var3 = var5.getCurrentRoute;
            var2 = var3.bind(var5)();
 272:
            var4 = var2;
 275:
            var3 = var4.then;
            var2 = function(arg1) {
                var1 = arg1;
                var4 = var1.routeType;
                var3 = var1.multipleRoutesAvailable;
                var2 = _closure1_slot18;
                var1 = undefined;
                var2 = var2.bind(var1)(var4, var3);
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot16;
                    var1 = null;
                    var3 = var1 == var3;
                    var1 = undefined;
                    if(var3) { _fun0004_ip = 32; continue _fun0004 }
 18:
                    var3 = _closure1_slot16;
                    var2 = var3.emitChange;
                    var1 = var2.bind(var3)();
 32:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function() {
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 321:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function AudioRouteStoreClass() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 69; continue _fun0005 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0005_ip = 105; continue _fun0005;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
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
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.subscribe;
            var3 = _closure1_slot15;
            var2 = 'RTC_CONNECTION_STATE';
            var2 = var4.bind(var5)(var2, var3);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCurrentRouteType';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMultipleRoutesAvailable';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var4.bind(var1)(var9);
    var4 = 'AudioRouteStore';
    var10['displayName'] = var4;
    var4 = 9;
    var4 = var7[var4];
    var13 = var8.bind(var1)(var4);
    var4 = var10.prototype;
    var8 = Object.create(var4, {constructor: {value: var10}});
    var12 = {};
    var14 = var8;
    var4 = new var14[var10](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot16 = var4;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_calls/native/AudioRouteStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['RouteTypes'] = var2;
    return var1;
})();
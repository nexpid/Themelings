// app/modules/game_console/GameConsoleStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot16;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot16;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var2 = global;
    var9 = var2.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = null;
    var _closure1_slot7 = var7;
    var _closure1_slot8 = var7;
    var7 = var2.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot9 = var7;
    var7 = {};
    var _closure1_slot10 = var7;
    var7 = {};
    var _closure1_slot11 = var7;
    var7 = var2.Set;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var13 = var8;
    var7 = new var13[var7](var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot12 = var7;
    var8 = var2.Object;
    var7 = var8.freeze;
    var2 = {};
    var2 = var7.bind(var8)(var2);
    var _closure1_slot13 = var2;
    var2 = 7;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.DeviceSettingsStore;
    var2 = function(arg1) {
        var4 = function GameConsoleStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot14;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var4 = this;
                var2 = null;
                if(!(var2 != var1)) { _fun0006_ip = 25; continue _fun0006 }
 12:
                var2 = var1.lastSelectedDeviceByPlatform;
                _closure1_slot11 = var2;
 25:
                var3 = var4.waitFor;
                var2 = _closure1_slot5;
                var1 = _closure1_slot6;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getUserAgnosticState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = {};
            var2 = _closure1_slot11;
            var1['lastSelectedDeviceByPlatform'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getDevicesForPlatform';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = _closure1_slot10;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0007_ip = 24; continue _fun0007 }
 20:
                var1 = _closure1_slot13;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastSelectedDeviceByPlatform';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getDevice';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot10;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var2 = var1 == var3;
                var1 = undefined;
                if(var2) { _fun0008_ip = 32; continue _fun0008 }
 25:
                var2 = arg2;
                var1 = var3[var2];
 32:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getFetchingDevices';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getPendingDeviceCommands';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getRemoteSessionId';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getAwaitingRemoteSessionInfo';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GameConsoleStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var12 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleRemoteSessionConnect(arg1) {
        var1 = arg1;
        var1 = var1.sessionId;
        _closure1_slot7 = var1;
        var1 = null;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['REMOTE_SESSION_CONNECT'] = var8;
    var8 = function handleRemoteSessionDisconnect() {
        var1 = null;
        _closure1_slot7 = var1;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['REMOTE_SESSION_DISCONNECT'] = var8;
    var8 = function handleWaitForRemoteSession(arg1) {
        var1 = arg1;
        var6 = var1.sessionType;
        var5 = var1.nonce;
        var4 = var1.channelId;
        var3 = var1.deviceId;
        var1 = var1.commandId;
        var2 = {};
        var2['type'] = var6;
        var2['nonce'] = var5;
        var2['channelId'] = var4;
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var2['startedAt'] = var4;
        var2['deviceId'] = var3;
        var2['commandId'] = var1;
        _closure1_slot8 = var2;
        var1 = undefined;
        return var1;
    };
    var2['WAIT_FOR_REMOTE_SESSION'] = var8;
    var8 = function handleFetchDevicesStart(arg1) {
        var1 = arg1;
        var3 = var1.platform;
        var2 = _closure1_slot12;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GAME_CONSOLE_FETCH_DEVICES_START'] = var8;
    var8 = function handleFetchDevicesSuccess(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var8 = var1.platform;
            var5 = var1.devices;
            var2 = _closure1_slot12;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var8);
            var1 = _closure1_slot10;
            var7 = {};
            var1[var8] = var7;
            var2 = {};
            var4 = _closure1_slot15;
            var1 = undefined;
            var6 = var4.bind(var1)(var5);
            var5 = var6.bind(var1)();
            var4 = var5.done;
            if(var4) { _fun0009_ip = 122; continue _fun0009 }
 67:
            var4 = var5.value;
            var9 = var4.id;
            var7[var9] = var4;
            var9 = _closure1_slot11;
            var10 = var9[var8];
            var9 = var4.id;
            if(!(var10 === var9)) { _fun0009_ip = 107; continue _fun0009 }
 98:
            var4 = var4.id;
            var2[var8] = var4;
 107:
            var9 = var6.bind(var1)();
            var4 = var9.done;
            var5 = var9;
            if(!var4) { _fun0009_ip = 67; continue _fun0009 }
 122:
            _closure1_slot11 = var2;
            return var1;
        }
    };
    var2['GAME_CONSOLE_FETCH_DEVICES_SUCCESS'] = var8;
    var8 = function handleFetchDevicesFail(arg1) {
        var1 = arg1;
        var3 = var1.platform;
        var2 = _closure1_slot12;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['GAME_CONSOLE_FETCH_DEVICES_FAIL'] = var8;
    var4 = function handleSelectDevice(arg1) {
        var1 = arg1;
        var3 = var1.platform;
        var2 = var1.deviceId;
        var1 = _closure1_slot11;
        var1[var3] = var2;
        var1 = undefined;
        return var1;
    };
    var2['GAME_CONSOLE_SELECT_DEVICE'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var7](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_console/GameConsoleStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
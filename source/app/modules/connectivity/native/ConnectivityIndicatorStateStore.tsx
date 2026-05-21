// app/modules/connectivity/native/ConnectivityIndicatorStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
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
            _closure1_slot29 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function getShowWaitingForNetworkDelayMs() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot7;
            var1 = var3.hasCache;
            var1 = var1.bind(var3)();
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = _closure1_slot17;
            _fun0002_ip = 8; continue _fun0002;
case 6:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.getConfig;
            var2 = {};
            var5 = 'ConnectivityIndicatorStateStore';
            var2['location'] = var5;
            var2 = var3.bind(var4)(var2);
            var3 = var2.timeoutMs;
            var2 = null;
            var4 = var2 != var3;
            var2 = 10000;
            if(!var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var2 = var3;
case 9:
            var1 = var2;
case 8:
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function nextState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot24;
            if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var3 = _closure1_slot11;
            var1 = var3.getState;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot12;
            var1 = var1.BACKGROUND;
            if(!(var3 !== var1)) { _fun0003_ip = 11; continue _fun0003 }
case 13:
            var1 = _closure1_slot21;
            var3 = null;
            if(!(var3 != var1)) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var1 = _closure1_slot20;
            if(!(var3 != var1)) { _fun0003_ip = 14; continue _fun0003 }
case 16:
            var1 = _closure1_slot21;
            if(var1) { _fun0003_ip = 17; continue _fun0003 }
case 5:
            var1 = _closure1_slot20;
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var1 = _closure1_slot22;
            if(!var1) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = _closure1_slot23;
            if(var1) { _fun0003_ip = 20; continue _fun0003 }
case 18:
            var1 = _closure1_slot15;
            var3 = var1.ONLINE;
            _fun0003_ip = 22; continue _fun0003;
case 20:
            var1 = _closure1_slot15;
            var3 = var1.CONNECTING;
case 22:
            _fun0003_ip = 23; continue _fun0003;
case 17:
            var1 = _closure1_slot15;
            var3 = var1.OFFLINE;
case 23:
            _fun0003_ip = 24; continue _fun0003;
case 14:
            var1 = _closure1_slot15;
            var3 = var1.UNKNOWN;
case 24:
            var1 = _closure1_slot14;
            var1 = var1.HIDDEN;
            if(!(var1 !== var4)) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var1 = _closure1_slot14;
            var1 = var1.BACK_ONLINE;
            if(!(var1 !== var4)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var1 = _closure1_slot14;
            var1 = var1.WAITING_FOR_NETWORK;
            if(!(var1 !== var4)) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var1 = _closure1_slot14;
            var1 = var1.NO_CONNECTION;
            if(!(var1 !== var4)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var1 = undefined;
            return var1;
case 31:
            var1 = _closure1_slot15;
            var1 = var1.CONNECTING;
            if(!(var1 !== var3)) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var1 = _closure1_slot15;
            var1 = var1.ONLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 35; continue _fun0003 }
case 36:
            var1 = _closure1_slot15;
            var1 = var1.OFFLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var1 = _closure1_slot15;
            var1 = var1.UNKNOWN;
case 37:
            var1 = {};
            return var1;
case 35:
            var1 = {};
            var4 = _closure1_slot14;
            var4 = var4.BACK_ONLINE;
            var1['immediate'] = var4;
            var4 = {};
            var5 = _closure1_slot14;
            var5 = var5.HIDDEN;
            var4['state'] = var5;
            var5 = _closure1_slot16;
            var4['delayMs'] = var5;
            var1['delayed'] = var4;
            return var1;
case 33:
            var1 = {};
            var4 = _closure1_slot14;
            var4 = var4.WAITING_FOR_NETWORK;
            var1['immediate'] = var4;
            return var1;
case 29:
            var1 = _closure1_slot15;
            var1 = var1.OFFLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var1 = _closure1_slot15;
            var1 = var1.ONLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var1 = _closure1_slot15;
            var1 = var1.CONNECTING;
            if(!(var1 !== var3)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var1 = _closure1_slot15;
            var1 = var1.UNKNOWN;
case 43:
            var1 = {};
            return var1;
case 41:
            var1 = {};
            var4 = _closure1_slot14;
            var4 = var4.BACK_ONLINE;
            var1['immediate'] = var4;
            var4 = {};
            var5 = _closure1_slot14;
            var5 = var5.HIDDEN;
            var4['state'] = var5;
            var5 = _closure1_slot16;
            var4['delayMs'] = var5;
            var1['delayed'] = var4;
            return var1;
case 39:
            var1 = {};
            var4 = _closure1_slot14;
            var4 = var4.NO_CONNECTION;
            var1['immediate'] = var4;
            return var1;
case 27:
            var1 = _closure1_slot15;
            var1 = var1.OFFLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 45; continue _fun0003 }
case 46:
            var1 = _closure1_slot15;
            var1 = var1.CONNECTING;
            if(!(var1 !== var3)) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var1 = _closure1_slot15;
            var1 = var1.ONLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 49; continue _fun0003 }
case 50:
            var1 = _closure1_slot15;
            var1 = var1.UNKNOWN;
            if(!(var1 !== var3)) { _fun0003_ip = 49; continue _fun0003 }
case 51:
            var1 = {};
            return var1;
case 49:
            var1 = {};
            var4 = {};
            var5 = _closure1_slot14;
            var5 = var5.HIDDEN;
            var4['state'] = var5;
            var5 = _closure1_slot16;
            var4['delayMs'] = var5;
            var1['delayed'] = var4;
            return var1;
case 47:
            var1 = {};
            var4 = {};
            var5 = _closure1_slot14;
            var5 = var5.WAITING_FOR_NETWORK;
            var4['state'] = var5;
            var6 = _closure1_slot30;
            var5 = undefined;
            var5 = var6.bind(var5)();
            var4['delayMs'] = var5;
            var1['delayed'] = var4;
            return var1;
case 45:
            var1 = {};
            var4 = {};
            var5 = _closure1_slot14;
            var5 = var5.NO_CONNECTION;
            var4['state'] = var5;
            var5 = _closure1_slot17;
            var4['delayMs'] = var5;
            var1['delayed'] = var4;
            return var1;
case 25:
            var1 = _closure1_slot15;
            var1 = var1.OFFLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var1 = _closure1_slot15;
            var1 = var1.CONNECTING;
            if(!(var1 !== var3)) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var1 = _closure1_slot15;
            var1 = var1.ONLINE;
            if(!(var1 !== var3)) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var1 = _closure1_slot15;
            var1 = var1.UNKNOWN;
case 56:
            var1 = {};
            return var1;
case 54:
            var1 = {};
            var3 = {};
            var4 = _closure1_slot14;
            var4 = var4.WAITING_FOR_NETWORK;
            var3['state'] = var4;
            var5 = _closure1_slot30;
            var4 = undefined;
            var4 = var5.bind(var4)();
            var3['delayMs'] = var4;
            var1['delayed'] = var3;
            return var1;
case 52:
            var1 = {};
            var3 = {};
            var4 = _closure1_slot14;
            var4 = var4.NO_CONNECTION;
            var3['state'] = var4;
            var4 = _closure1_slot17;
            var3['delayMs'] = var4;
            var1['delayed'] = var3;
            return var1;
case 11:
            var1 = {};
            var2 = _closure1_slot14;
            var2 = var2.HIDDEN;
            var1['immediate'] = var2;
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function clearPendingDelayed() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = _closure1_slot26;
            var1 = null;
            if(!(var1 != var3)) { _fun0004_ip = 15; continue _fun0004 }
case 58:
            var5 = _closure1_slot13;
            var4 = var5.verbose;
            var3 = 'clearing pending state update timer';
            var3 = var4.bind(var5)(var3);
            var3 = global;
            var5 = var3.clearTimeout;
            var4 = _closure1_slot26;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            _closure1_slot26 = var1;
case 15:
            _closure1_slot19 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function updateState() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var12 = _closure1_slot18;
            var4 = _closure1_slot31;
            var1 = undefined;
            var4 = var4.bind(var1)(var12);
            var5 = var4.immediate;
            var7 = null;
            if(!(var7 != var5)) { _fun0005_ip = 26; continue _fun0005 }
case 59:
            var5 = var4.immediate;
            _closure1_slot18 = var5;
            var5 = _closure1_slot19;
            var5 = var7 !== var5;
            if(!var5) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            var8 = _closure1_slot19;
            var6 = _closure1_slot18;
            var5 = var8 === var6;
case 60:
            if(!var5) { _fun0005_ip = 19; continue _fun0005 }
case 62:
            var5 = _closure1_slot32;
            var5 = var5.bind(var1)();
case 19:
            var5 = _closure1_slot18;
            if(!(var12 !== var5)) { _fun0005_ip = 26; continue _fun0005 }
case 63:
            var8 = _closure1_slot13;
            var6 = var8.verbose;
            var11 = _closure1_slot18;
            var5 = global;
            var5 = var5.HermesInternal;
            var10 = var5.concat;
            var9 = 'state changed immediately from ';
            var5 = ' to ';
            var5 = var10.bind(var9)(var12, var5, var11);
            var5 = var6.bind(var8)(var5);
            var6 = _closure1_slot28;
            if(!(var7 != var6)) { _fun0005_ip = 26; continue _fun0005 }
case 64:
            var5 = var6.emitChange;
            var5 = var5.bind(var6)();
case 26:
            var5 = var4.delayed;
            if(!(var7 == var5)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var5 = _closure1_slot32;
            var5 = var5.bind(var1)();
            _fun0005_ip = 67; continue _fun0005;
case 65:
            var5 = var4.delayed;
            var4 = var5.state;
            var _closure2_slot0 = var4;
            var5 = var5.delayMs;
            var6 = _closure1_slot19;
            if(!(var6 === var4)) { _fun0005_ip = 68; continue _fun0005 }
case 69:
            var6 = _closure1_slot26;
            if(!(var7 == var6)) { _fun0005_ip = 70; continue _fun0005 }
case 68:
            var6 = _closure1_slot26;
            if(!(var7 != var6)) { _fun0005_ip = 71; continue _fun0005 }
case 72:
            var8 = _closure1_slot13;
            var7 = var8.verbose;
            var6 = "clearing existing state update timer because we're scheduling a new one";
            var6 = var7.bind(var8)(var6);
            var6 = global;
            var7 = var6.clearTimeout;
            var6 = _closure1_slot26;
            var6 = var7.bind(var1)(var6);
case 71:
            _closure1_slot19 = var4;
            var4 = global;
            var4 = var4.setTimeout;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = null;
                    _closure1_slot26 = var1;
                    _closure1_slot19 = var1;
                    var9 = _closure1_slot18;
                    var3 = _closure2_slot0;
                    _closure1_slot18 = var3;
                    if(!(var9 !== var3)) { _fun0006_ip = 73; continue _fun0006 }
case 74:
                    var5 = _closure1_slot13;
                    var4 = var5.verbose;
                    var8 = _closure1_slot18;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var7 = var3.concat;
                    var6 = 'state changed after a delay from ';
                    var3 = ' to ';
                    var3 = var7.bind(var6)(var9, var3, var8);
                    var3 = var4.bind(var5)(var3);
                    var2 = _closure1_slot28;
                    if(!(var1 != var2)) { _fun0006_ip = 73; continue _fun0006 }
case 75:
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
case 73:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var1)(var2, var5);
            _closure1_slot26 = var2;
case 67:
            return var1;
case 70:
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var8 = function handleConnectionClosed() {
        var1 = false;
        _closure1_slot22 = var1;
        var3 = _closure1_slot33;
        var2 = undefined;
        var2 = var3.bind(var2)();
        return var1;
    };
    var1 = function handleLoadingMessagesChanged() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot10;
            var2 = var3.getChannelId;
            var4 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var4)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var3 = _closure1_slot9;
            var2 = var3.isLoadingMessages;
            var2 = var2.bind(var3)(var4);
            var3 = _closure1_slot23;
            if(!(var2 !== var3)) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            _closure1_slot23 = var2;
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 78:
            var1 = false;
            return var1;
case 76:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function handleAuthStoreChanged() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = _closure1_slot8;
            var2 = var3.isAuthenticated;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot20;
            if(!(var3 !== var2)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            _closure1_slot20 = var2;
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)();
case 80:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function handleAppStateUpdate() {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var3 = _closure1_slot11;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var3 = _closure1_slot12;
            var3 = var3.ACTIVE;
            if(!(var3 !== var2)) { _fun0009_ip = 10; continue _fun0009 }
case 82:
            var3 = _closure1_slot12;
            var3 = var3.BACKGROUND;
            if(!(var3 !== var2)) { _fun0009_ip = 15; continue _fun0009 }
case 83:
            var3 = _closure1_slot12;
            var3 = var3.INACTIVE;
            _fun0009_ip = 84; continue _fun0009;
case 15:
            var4 = _closure1_slot27;
            var3 = null;
            if(!(var3 != var4)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var4 = global;
            var6 = var4.clearTimeout;
            var5 = _closure1_slot27;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            _closure1_slot27 = var3;
            _fun0009_ip = 84; continue _fun0009;
case 10:
            var4 = _closure1_slot25;
            var3 = _closure1_slot12;
            var3 = var3.BACKGROUND;
            if(!(var4 === var3)) { _fun0009_ip = 84; continue _fun0009 }
case 86:
            var3 = true;
            _closure1_slot24 = var3;
            var4 = _closure1_slot27;
            var3 = null;
            if(!(var3 != var4)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var3 = global;
            var5 = var3.clearTimeout;
            var4 = _closure1_slot27;
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
case 87:
            var3 = global;
            var6 = var3.setTimeout;
            var5 = undefined;
            var4 = function() {
                var2 = false;
                _closure1_slot24 = var2;
                var2 = null;
                _closure1_slot27 = var2;
                var2 = _closure1_slot33;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = 5000;
            var3 = var6.bind(var5)(var4, var3);
            _closure1_slot27 = var3;
case 84:
            _closure1_slot25 = var2;
            var2 = _closure1_slot33;
            var1 = undefined;
            var1 = var2.bind(var1)();
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = global;
    var10 = var1.Object;
    var4 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 9;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.AppStates;
    var _closure1_slot12 = var2;
    var2 = 11;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var4 = var2.prototype;
    var10 = Object.create(var4, {constructor: {value: var2}});
    var4 = 'ConnectivityIndicatorStateStore';
    var16 = var10;
    var15 = var4;
    var2 = new var16[var2](var15, var14);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot13 = var2;
    var2 = {};
    var10 = 'hidden';
    var2['HIDDEN'] = var10;
    var10 = 'waiting_for_network';
    var2['WAITING_FOR_NETWORK'] = var10;
    var10 = 'no_connection';
    var2['NO_CONNECTION'] = var10;
    var10 = 'back_online';
    var2['BACK_ONLINE'] = var10;
    var _closure1_slot14 = var2;
    var10 = {};
    var11 = 'unknown';
    var10['UNKNOWN'] = var11;
    var11 = 'online';
    var10['ONLINE'] = var11;
    var11 = 'offline';
    var10['OFFLINE'] = var11;
    var11 = 'connecting';
    var10['CONNECTING'] = var11;
    var _closure1_slot15 = var10;
    var10 = 2000;
    var _closure1_slot16 = var10;
    var10 = 1000;
    var _closure1_slot17 = var10;
    var10 = var2.HIDDEN;
    var _closure1_slot18 = var10;
    var10 = null;
    var _closure1_slot19 = var10;
    var _closure1_slot20 = var10;
    var _closure1_slot21 = var10;
    var11 = false;
    var _closure1_slot22 = var11;
    var _closure1_slot23 = var11;
    var _closure1_slot24 = var11;
    var _closure1_slot25 = var10;
    var _closure1_slot26 = var10;
    var _closure1_slot27 = var10;
    var _closure1_slot28 = var10;
    var10 = 14;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var11 = var10.Store;
    var10 = function(arg1) {
        var4 = function ConnectivityIndicatorStateStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot29;
                var1 = var1.bind(var3)();
                if(var1) { _fun0010_ip = 89; continue _fun0010 }
case 90:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 20; continue _fun0010;
case 89:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 20:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var9 = var5.waitFor;
            var14 = _closure1_slot8;
            var13 = _closure1_slot7;
            var12 = _closure1_slot9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot11;
            var15 = var5;
            var1 = var15[var9](var14, var13, var12, var11, var10, var9);
            var4 = var5.syncWith;
            var1 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = _closure1_slot34;
            var1 = var4.bind(var5)(var3, var1);
            var4 = var5.syncWith;
            var1 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = _closure1_slot35;
            var1 = var4.bind(var5)(var3, var1);
            var4 = var5.syncWith;
            var1 = _closure1_slot11;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = _closure1_slot36;
            var1 = var4.bind(var5)(var3, var1);
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 13;
            var7 = var5[var3];
            var1 = undefined;
            var9 = var4.bind(var1)(var7);
            var8 = var9.addOfflineCallback;
            var7 = function() {
                var2 = true;
                _closure1_slot21 = var2;
                var2 = _closure1_slot33;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var7 = var8.bind(var9)(var7);
            var7 = var5[var3];
            var8 = var4.bind(var1)(var7);
            var7 = var8.addOnlineCallback;
            var6 = function() {
                var2 = false;
                _closure1_slot21 = var2;
                var2 = _closure1_slot33;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.isOnline;
            var3 = var3.bind(var4)();
            var3 = !var3;
            _closure1_slot21 = var3;
            var4 = _closure1_slot8;
            var3 = var4.isAuthenticated;
            var3 = var3.bind(var4)();
            _closure1_slot20 = var3;
            var2 = _closure1_slot33;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var10.bind(var1)(var11);
    var10['displayName'] = var4;
    var4 = 15;
    var4 = var7[var4];
    var15 = var9.bind(var1)(var4);
    var4 = {};
    var11 = function handleConnectionOpen() {
        var2 = true;
        _closure1_slot22 = var2;
        var2 = _closure1_slot33;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var11;
    var11 = function handleConnectionResumed() {
        var2 = true;
        _closure1_slot22 = var2;
        var2 = _closure1_slot33;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var4['CONNECTION_RESUMED'] = var11;
    var4['CONNECTION_CLOSED'] = var8;
    var4['CONNECTION_INTERRUPTED'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var16 = var8;
    var14 = var4;
    var4 = new var16[var10](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    _closure1_slot28 = var4;
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/connectivity/native/ConnectivityIndicatorStateStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ConnectivityIndicatorState'] = var2;
    return var1;
})();
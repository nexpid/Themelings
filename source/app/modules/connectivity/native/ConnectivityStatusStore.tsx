// app/modules/connectivity/native/ConnectivityStatusStore.tsx
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
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function getStateActiveMillis() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot18;
            var1 = null;
            var3 = var1 != var3;
            var1 = 0;
            if(!var3) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot18;
            var3 = -var2;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 + var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function updateConnectivityState() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot21;
            var6 = null;
            if(!(var6 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 7:
            var3 = _closure1_slot20;
            if(!(var6 != var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = _closure1_slot21;
            if(var3) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot20;
            if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var3 = _closure1_slot22;
            if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var3 = _closure1_slot23;
            if(var3) { _fun0003_ip = 14; continue _fun0003 }
case 12:
            var3 = _closure1_slot13;
            var4 = var3.ONLINE;
            _fun0003_ip = 16; continue _fun0003;
case 14:
            var3 = _closure1_slot13;
            var4 = var3.CONNECTING;
case 16:
            _fun0003_ip = 17; continue _fun0003;
case 10:
            var3 = _closure1_slot13;
            var4 = var3.OFFLINE;
case 17:
            var _closure2_slot0 = var4;
            var3 = _closure1_slot15;
            var3 = var3 === var4;
            if(!var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var5 = _closure1_slot18;
            var3 = var6 != var5;
case 18:
            if(var3) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            _closure1_slot18 = var3;
            var8 = _closure1_slot15;
            var3 = _closure1_slot13;
            var5 = var3.ONLINE;
            var3 = 0;
            if(!(var5 !== var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var5 = _closure1_slot13;
            var5 = var5.OFFLINE;
            var7 = 1000;
            var3 = var7;
            if(!(var5 !== var4)) { _fun0003_ip = 22; continue _fun0003 }
case 24:
            var5 = _closure1_slot13;
            var5 = var5.CONNECTING;
            var3 = undefined;
            if(!(var5 === var4)) { _fun0003_ip = 22; continue _fun0003 }
case 25:
            var5 = _closure1_slot13;
            var6 = var5.OFFLINE;
            var5 = var7;
            if(!(var8 !== var6)) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            var8 = _closure1_slot7;
            var6 = var8.hasCache;
            var6 = var6.bind(var8)();
            var5 = var7;
            if(!var6) { _fun0003_ip = 26; continue _fun0003 }
case 28:
            var5 = 10000;
case 26:
            var3 = var5;
case 22:
            _closure1_slot19 = var3;
case 20:
            var5 = _closure1_slot19;
            var6 = _closure1_slot26;
            var3 = undefined;
            var3 = var6.bind(var3)();
            var7 = var5 - var3;
            var3 = global;
            var8 = var3.Math;
            var5 = var8.round;
            var6 = 100;
            var5 = var5.bind(var8)(var6);
            var5 = var7 / var5;
            var7 = var5 * var6;
            var6 = var3.Math;
            var5 = var6.max;
            var3 = 0;
            var3 = var5.bind(var6)(var7, var3);
            var5 = _closure1_slot15;
            var5 = var5 === var4;
            if(!var5) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var6 = _closure1_slot16;
            var5 = var6 === var3;
case 29:
            if(var5) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            _closure1_slot15 = var4;
            _closure1_slot16 = var3;
            var5 = _closure1_slot12;
            var4 = var5.verbose;
            var6 = _closure1_slot15;
            var3 = 'State set to ';
            var7 = var3 + var6;
            var6 = _closure1_slot16;
            var3 = ', with delay: ';
            var3 = var7 + var3;
            var3 = var3 + var6;
            var3 = var4.bind(var5)(var3);
            var5 = _closure1_slot14;
            var4 = var5.start;
            var3 = _closure1_slot16;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot15;
                    if(!(var3 !== var2)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                    var5 = _closure1_slot12;
                    var4 = var5.verbose;
                    var3 = _closure1_slot15;
                    var2 = 'New connectivity state published:';
                    var2 = var4.bind(var5)(var2, var3);
                    var2 = _closure2_slot0;
                    _closure1_slot17 = var2;
                    var2 = _closure1_slot24;
                    var1 = var2.emitChange;
                    var1 = var1.bind(var2)();
case 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = true;
            var1 = var4.bind(var5)(var3, var2, var1);
case 31:
            var1 = false;
            return var1;
case 8:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var8 = function handleConnectionClosed() {
        var1 = false;
        _closure1_slot22 = var1;
        var5 = _closure1_slot12;
        var4 = var5.verbose;
        var3 = 'Connection closed';
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot27;
        var2 = undefined;
        var2 = var3.bind(var2)();
        return var1;
    };
    var1 = function handleLoadingMessagesChanged() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot10;
            var1 = var3.getChannelId;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
            var3 = _closure1_slot9;
            var1 = var3.isLoadingMessages;
            var3 = var1.bind(var3)(var4);
            var1 = _closure1_slot23;
            var1 = var3 !== var1;
            if(!var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            _closure1_slot23 = var3;
            var6 = _closure1_slot12;
            var5 = var6.verbose;
            var4 = _closure1_slot23;
            var3 = 'Loading messages: ';
            var3 = var5.bind(var6)(var3, var4);
            var3 = _closure1_slot27;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = false;
case 37:
            return var1;
case 35:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function handleAuthStoreChanged() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = _closure1_slot8;
            var1 = var3.isAuthenticated;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot20;
            var1 = var1 !== var3;
            if(!var1) { _fun0006_ip = 39; continue _fun0006 }
case 40:
            _closure1_slot20 = var3;
            var6 = _closure1_slot12;
            var5 = var6.verbose;
            var4 = _closure1_slot20;
            var3 = 'Is authenticated: ';
            var3 = var5.bind(var6)(var3, var4);
            var3 = _closure1_slot27;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = false;
case 39:
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = global;
    var10 = var1.Object;
    var4 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var10)(var3, var1, var2);
    var11 = 0;
    var2 = var7[var11];
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
    var2 = var6.bind(var1)(var2);
    var2 = var2.AppStates;
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var7[var2];
    var2 = var9.bind(var1)(var2);
    var4 = var2.prototype;
    var10 = Object.create(var4, {constructor: {value: var2}});
    var4 = 'ConnectivityStatusStore';
    var16 = var10;
    var15 = var4;
    var2 = new var16[var2](var15, var14);
    var2 = var2 instanceof Object ? var2 : var10;
    var _closure1_slot12 = var2;
    var2 = {};
    var10 = 'ONLINE';
    var2['ONLINE'] = var10;
    var10 = 'OFFLINE';
    var2['OFFLINE'] = var10;
    var10 = 'CONNECTING';
    var2['CONNECTING'] = var10;
    var _closure1_slot13 = var2;
    var10 = 11;
    var10 = var7[var10];
    var10 = var6.bind(var1)(var10);
    var10 = var10.Timeout;
    var12 = var10.prototype;
    var12 = Object.create(var12, {constructor: {value: var10}});
    var16 = var12;
    var10 = new var16[var10](var15);
    var10 = var10 instanceof Object ? var10 : var12;
    var _closure1_slot14 = var10;
    var10 = null;
    var _closure1_slot15 = var10;
    var _closure1_slot16 = var11;
    var11 = var2.ONLINE;
    var _closure1_slot17 = var11;
    var _closure1_slot18 = var10;
    var11 = 10000;
    var _closure1_slot19 = var11;
    var _closure1_slot20 = var10;
    var _closure1_slot21 = var10;
    var10 = false;
    var _closure1_slot22 = var10;
    var _closure1_slot23 = var10;
    var10 = 13;
    var10 = var7[var10];
    var10 = var9.bind(var1)(var10);
    var11 = var10.Store;
    var10 = function(arg1) {
        var4 = function ConnectivityStatusStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                var1 = _closure1_slot25;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 14; continue _fun0007 }
case 38:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 41; continue _fun0007;
case 14:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 41:
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
            var4 = this;
            var5 = var4.syncWith;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = _closure1_slot28;
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot29;
            var1 = var3.bind(var4)(var2, var1);
            var2 = function handleInitialize() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 12;
                var7 = var5[var3];
                var1 = undefined;
                var9 = var4.bind(var1)(var7);
                var8 = var9.addOfflineCallback;
                var7 = function() {
                    var2 = true;
                    _closure1_slot21 = var2;
                    var2 = _closure1_slot27;
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
                    var2 = _closure1_slot27;
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
                var2 = _closure1_slot27;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'isConnected';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot17;
            var1 = _closure1_slot13;
            var1 = var1.ONLINE;
            var1 = var2 === var1;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var10 = var10.bind(var1)(var11);
    var10['displayName'] = var4;
    var4 = 14;
    var4 = var7[var4];
    var15 = var9.bind(var1)(var4);
    var4 = {};
    var11 = function handleConnectionOpen() {
        var2 = true;
        _closure1_slot22 = var2;
        var4 = _closure1_slot12;
        var3 = var4.verbose;
        var2 = 'Connection open.';
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot27;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var4['CONNECTION_OPEN'] = var11;
    var11 = function handleConnectionResumed() {
        var2 = true;
        _closure1_slot22 = var2;
        var4 = _closure1_slot12;
        var3 = var4.verbose;
        var2 = 'Connection resumed.';
        var2 = var3.bind(var4)(var2);
        var2 = _closure1_slot27;
        var1 = undefined;
        var1 = var2.bind(var1)();
        var1 = false;
        return var1;
    };
    var4['CONNECTION_RESUMED'] = var11;
    var4['CONNECTION_CLOSED'] = var8;
    var4['CONNECTION_INTERRUPTED'] = var8;
    var8 = function handleAppStateUpdate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var4 = var3.state;
            var1 = _closure1_slot11;
            var1 = var1.INACTIVE;
            var1 = var4 !== var1;
            if(!var1) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var5 = var3.state;
            var4 = _closure1_slot11;
            var4 = var4.BACKGROUND;
            if(!(var5 === var4)) { _fun0008_ip = 3; continue _fun0008 }
case 15:
            var5 = _closure1_slot19;
            var6 = _closure1_slot26;
            var4 = undefined;
            var4 = var6.bind(var4)();
            var4 = var5 - var4;
            _closure1_slot19 = var4;
case 3:
            var5 = var3.state;
            var4 = _closure1_slot11;
            var4 = var4.ACTIVE;
            var4 = var5 === var4;
            if(!var4) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var6 = _closure1_slot18;
            var5 = null;
            var4 = var5 != var6;
case 44:
            if(!var4) { _fun0008_ip = 46; continue _fun0008 }
case 47:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            _closure1_slot18 = var4;
case 46:
            var6 = _closure1_slot12;
            var5 = var6.verbose;
            var4 = var3.state;
            var3 = 'App state updated: ';
            var3 = var5.bind(var6)(var3, var4);
            var3 = _closure1_slot27;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = false;
case 42:
            return var1;
        }
    };
    var4['APP_STATE_UPDATE'] = var8;
    var8 = var10.prototype;
    var8 = Object.create(var8, {constructor: {value: var10}});
    var16 = var8;
    var14 = var4;
    var4 = new var16[var10](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot24 = var4;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/connectivity/native/ConnectivityStatusStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ConnectivityState'] = var2;
    return var1;
})();
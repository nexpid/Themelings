// app/modules/connectivity/native/ConnectivityStatusStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var9 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
 0:
            var3 = _closure1_slot18;
            var1 = null;
            var3 = var1 != var3;
            var1 = 0;
            if(!var3) { _fun0002_ip = 46; continue _fun0002 }
 18:
            var2 = _closure1_slot18;
            var3 = -var2;
            var2 = global;
            var4 = var2.Date;
            var2 = var4.now;
            var2 = var2.bind(var4)();
            var1 = var3 + var2;
 46:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function updateConnectivityState() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot21;
            var6 = null;
            if(!(var6 != var3)) { _fun0003_ip = 426; continue _fun0003 }
 18:
            var3 = _closure1_slot20;
            if(!(var6 != var3)) { _fun0003_ip = 426; continue _fun0003 }
 29:
            var3 = _closure1_slot21;
            if(var3) { _fun0003_ip = 81; continue _fun0003 }
 36:
            var3 = _closure1_slot20;
            if(!var3) { _fun0003_ip = 57; continue _fun0003 }
 43:
            var3 = _closure1_slot22;
            if(!var3) { _fun0003_ip = 69; continue _fun0003 }
 50:
            var3 = _closure1_slot23;
            if(var3) { _fun0003_ip = 69; continue _fun0003 }
 57:
            var3 = _closure1_slot13;
            var4 = var3.ONLINE;
            _fun0003_ip = 79; continue _fun0003;
 69:
            var3 = _closure1_slot13;
            var4 = var3.CONNECTING;
 79:
            _fun0003_ip = 91; continue _fun0003;
 81:
            var3 = _closure1_slot13;
            var4 = var3.OFFLINE;
 91:
            var _closure2_slot0 = var4;
            var3 = _closure1_slot15;
            var3 = var3 === var4;
            if(!var3) { _fun0003_ip = 114; continue _fun0003 }
 106:
            var5 = _closure1_slot18;
            var3 = var6 != var5;
 114:
            if(var3) { _fun0003_ip = 250; continue _fun0003 }
 120:
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var3 = var3.bind(var5)();
            _closure1_slot18 = var3;
            var8 = _closure1_slot15;
            var3 = _closure1_slot13;
            var5 = var3.ONLINE;
            var3 = 0;
            if(!(var5 !== var4)) { _fun0003_ip = 246; continue _fun0003 }
 161:
            var5 = _closure1_slot13;
            var5 = var5.OFFLINE;
            var7 = 1000;
            var3 = var7;
            if(!(var5 !== var4)) { _fun0003_ip = 246; continue _fun0003 }
 184:
            var5 = _closure1_slot13;
            var5 = var5.CONNECTING;
            var3 = undefined;
            if(!(var5 === var4)) { _fun0003_ip = 246; continue _fun0003 }
 200:
            var5 = _closure1_slot13;
            var6 = var5.OFFLINE;
            var5 = var7;
            if(!(var8 !== var6)) { _fun0003_ip = 243; continue _fun0003 }
 217:
            var8 = _closure1_slot7;
            var6 = var8.hasCache;
            var6 = var6.bind(var8)();
            var5 = var7;
            if(!var6) { _fun0003_ip = 243; continue _fun0003 }
 237:
            var5 = 10000;
 243:
            var3 = var5;
 246:
            _closure1_slot19 = var3;
 250:
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
            if(!var5) { _fun0003_ip = 335; continue _fun0003 }
 327:
            var6 = _closure1_slot16;
            var5 = var6 === var3;
 335:
            if(var5) { _fun0003_ip = 422; continue _fun0003 }
 338:
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
 0:
                    var3 = _closure1_slot17;
                    var2 = _closure1_slot15;
                    if(!(var3 !== var2)) { _fun0004_ip = 66; continue _fun0004 }
 15:
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
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = true;
            var1 = var4.bind(var5)(var3, var2, var1);
 422:
            var1 = false;
            return var1;
 426:
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
 0:
            var3 = _closure1_slot10;
            var1 = var3.getChannelId;
            var4 = var1.bind(var3)();
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 95; continue _fun0005 }
 23:
            var3 = _closure1_slot9;
            var1 = var3.isLoadingMessages;
            var3 = var1.bind(var3)(var4);
            var1 = _closure1_slot23;
            var1 = var3 !== var1;
            if(!var1) { _fun0005_ip = 93; continue _fun0005 }
 51:
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
 93:
            return var1;
 95:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot28 = var1;
    var1 = function handleAuthStoreChanged() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = _closure1_slot8;
            var1 = var3.isAuthenticated;
            var3 = var1.bind(var3)();
            var1 = _closure1_slot20;
            var1 = var1 !== var3;
            if(!var1) { _fun0006_ip = 70; continue _fun0006 }
 28:
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
 70:
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
 0:
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
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
 0:
            var3 = arg1;
            var4 = var3.state;
            var1 = _closure1_slot11;
            var1 = var1.INACTIVE;
            var1 = var4 !== var1;
            if(!var1) { _fun0008_ip = 167; continue _fun0008 }
 31:
            var5 = var3.state;
            var4 = _closure1_slot11;
            var4 = var4.BACKGROUND;
            if(!(var5 === var4)) { _fun0008_ip = 72; continue _fun0008 }
 50:
            var5 = _closure1_slot19;
            var6 = _closure1_slot26;
            var4 = undefined;
            var4 = var6.bind(var4)();
            var4 = var5 - var4;
            _closure1_slot19 = var4;
 72:
            var5 = var3.state;
            var4 = _closure1_slot11;
            var4 = var4.ACTIVE;
            var4 = var5 === var4;
            if(!var4) { _fun0008_ip = 104; continue _fun0008 }
 94:
            var6 = _closure1_slot18;
            var5 = null;
            var4 = var5 != var6;
 104:
            if(!var4) { _fun0008_ip = 128; continue _fun0008 }
 107:
            var4 = global;
            var5 = var4.Date;
            var4 = var5.now;
            var4 = var4.bind(var5)();
            _closure1_slot18 = var4;
 128:
            var6 = _closure1_slot12;
            var5 = var6.verbose;
            var4 = var3.state;
            var3 = 'App state updated: ';
            var3 = var5.bind(var6)(var3, var4);
            var3 = _closure1_slot27;
            var2 = undefined;
            var2 = var3.bind(var2)();
            var1 = false;
 167:
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
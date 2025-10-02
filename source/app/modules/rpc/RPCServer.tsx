// app/modules/rpc/RPCServer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TransportTypes;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.RPCCloseCodes;
    var _closure1_slot7 = var7;
    var7 = var4.RPCCommands;
    var _closure1_slot8 = var7;
    var7 = var4.RPCErrors;
    var _closure1_slot9 = var7;
    var4 = var4.RPCEvents;
    var _closure1_slot10 = var4;
    var4 = new Array(0);
    var _closure1_slot11 = var4;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function RPCServer(arg1) {
            var3 = this;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var5.bind(var1)(var3, var4);
            var4 = function() {
                var1 = null;
                return var1;
            };
            var3['getCurrentUser'] = var4;
            var4 = function() {
                var1 = undefined;
                return var1;
            };
            var3['onConnect'] = var4;
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var3['onDisconnect'] = var2;
            var2 = {};
            var3['events'] = var2;
            var2 = {};
            var3['commands'] = var2;
            var2 = global;
            var4 = var2.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {constructor: {value: var4}});
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3['sockets'] = var4;
            var4 = new Array(0);
            var3['subscriptions'] = var4;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['isSubscribedListeners'] = var2;
            var2 = arg1;
            var3['getJoi'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'registerTransport';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var4 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = var4.on;
            var3 = 'connect';
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.handleConnect;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var5.bind(var4)(var3, var2);
            var5 = var4.on;
            var3 = 'request';
            var2 = function(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleRequest;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.on;
            var2 = 'disconnect';
            var1 = function(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleDisconnect;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(18);
        var2[0] = var1;
        var1 = {};
        var6 = 'handleConnect';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var4 = arg1;
                var8 = this;
                var2 = var8.sockets;
                var1 = var2.add;
                var1 = var1.bind(var2)(var4);
                var1 = var8.onConnect;
                var1 = var1.bind(var8)(var4);
                var7 = {};
                var1 = var4.version;
                var7['v'] = var1;
                var1 = {};
                var2 = global;
                var3 = var2.window;
                var3 = var3.GLOBAL_ENV;
                var3 = var3.CDN_HOST;
                var1['cdn_host'] = var3;
                var2 = var2.window;
                var2 = var2.GLOBAL_ENV;
                var2 = var2.API_ENDPOINT;
                var1['api_endpoint'] = var2;
                var2 = 'production';
                var1['environment'] = var2;
                var7['config'] = var1;
                var3 = var4.transport;
                var2 = _closure1_slot5;
                var2 = var2.IPC;
                if(!(var3 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = var8.getCurrentUser;
                var5 = var2.bind(var8)();
                var2 = null;
                if(!(var2 != var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 6;
                var2 = var3[var2];
                var3 = undefined;
                var2 = var6.bind(var3)(var2);
                var2 = var2.bind(var3)(var5);
                var7['user'] = var2;
case 2:
                var6 = var8.dispatch;
                var2 = _closure1_slot8;
                var11 = var2.DISPATCH;
                var2 = _closure1_slot10;
                var10 = var2.READY;
                var12 = null;
                var14 = var8;
                var13 = var4;
                var9 = var7;
                var2 = var14[var6](var13, var12, var11, var10, var9, var8);
                var2 = undefined;
                return var2;
case 4:
                var3 = var4.close;
                var1 = _closure1_slot7;
                var2 = var1.CLOSE_NORMAL;
                var1 = 'User logged out';
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'handleDisconnect';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var4 = arg1;
            var3 = this;
            var5 = var4.abortController;
            var2 = var5.abort;
            var1 = 'DISCONNECTED';
            var1 = var2.bind(var5)(var1);
            var1 = var3.removeSubscriptions;
            var1 = var1.bind(var3)(var4);
            var2 = var3.sockets;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var4);
            var2 = var3.onDisconnect;
            var1 = arg2;
            var1 = var2.bind(var3)(var4, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'handleRequest';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg1;
            var _closure3_slot1 = var3;
            var3 = arg2;
            var _closure3_slot2 = var3;
            var _closure3_slot3 = var2;
            var2 = global;
            var4 = var2.Promise;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var5 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure3_slot2;
                    var3 = var2.nonce;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure3_slot2;
                    var4 = var3.nonce;
                    var3 = '';
                    if(!(var3 !== var4)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                    var3 = _closure3_slot2;
                    var8 = var3.cmd;
                    var3 = _closure3_slot0;
                    var3 = var3.commands;
                    var4 = var3[var8];
                    if(!(var2 != var4)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 8;
                    var5 = var5[var2];
                    var2 = undefined;
                    var7 = var6.bind(var2)(var5);
                    var5 = _closure3_slot1;
                    var5 = var5.authorization;
                    var6 = var5.scopes;
                    var5 = var4.scope;
                    var5 = var7.bind(var2)(var6, var5);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    if(var5) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var5 = 7;
                    var5 = var7[var5];
                    var11 = var6.bind(var2)(var5);
                    var10 = {};
                    var5 = _closure1_slot9;
                    var5 = var5.INVALID_PERMISSIONS;
                    var10['errorCode'] = var5;
                    var5 = var11.prototype;
                    var9 = Object.create(var5, {constructor: {value: var11}});
                    var12 = 'Not authenticated or invalid scope';
                    var14 = var9;
                    var13 = var10;
                    var5 = new var14[var11](var13, var12, var11);
                    var5 = var5 instanceof Object ? var5 : var9;
                    throw var5;
case 11:
                    var5 = 9;
                    var5 = var7[var5];
                    var7 = var6.bind(var2)(var5);
                    var6 = var7.track;
                    var3 = _closure1_slot6;
                    var5 = var3.RPC_COMMAND_SENT;
                    var3 = {};
                    var3['command'] = var8;
                    var8 = var4.scope;
                    var9 = 'object';
                    var8 = typeof var8;
                    if(!(var9 !== var8)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var8 = var4.scope;
                    _fun0002_ip = 15; continue _fun0002;
case 13:
                    var9 = global;
                    var11 = var9.JSON;
                    var10 = var11.stringify;
                    var9 = var4.scope;
                    var8 = var10.bind(var11)(var9);
case 15:
                    var3['scope'] = var8;
                    var8 = _closure3_slot1;
                    var9 = var8.application;
                    var9 = var9.id;
                    var3['application_id'] = var9;
                    var8 = var8.authorization;
                    var9 = var8.scopes;
                    var8 = var9.toString;
                    var8 = var8.bind(var9)();
                    var3['socket_scope'] = var8;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = arg1;
                    var3 = var3.bind(var2)(var4);
                    return var2;
case 9:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 7;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = {};
                    var2 = _closure1_slot9;
                    var2 = var2.INVALID_COMMAND;
                    var3['errorCode'] = var2;
                    var1 = _closure3_slot2;
                    var5 = var1.cmd;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'Invalid command: ';
                    var12 = var2.bind(var1)(var5);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {constructor: {value: var4}});
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
case 6:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = {};
                    var1 = _closure1_slot9;
                    var1 = var1.INVALID_PAYLOAD;
                    var3['errorCode'] = var1;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var12 = 'Payload requires a nonce';
                    var14 = var2;
                    var13 = var3;
                    var1 = new var14[var4](var13, var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var6 = var3;
            var2 = new var6[var4](var5, var4);
            var4 = var2 instanceof Object ? var2 : var3;
            var3 = var4.then;
            var2 = function(arg1) {
                var2 = arg1;
                var _closure4_slot0 = var2;
                var2 = global;
                var3 = var2.Promise;
                var2 = function() {
                    var4 = _closure1_slot2;
                    var3 = undefined;
                    var2 = function* (arg1, arg2) {
                        var1 = function* anon_0_(arg1, arg2) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                StartGenerator();
                                var6 = arg1;
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                                var _closure7_slot0 = var6;
                                var2 = arg2;
                                var _closure7_slot1 = var2;
                                var2 = _closure4_slot0;
                                var2 = var2.validation;
                                var7 = null;
                                if(!(var7 == var2)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                                var4 = _closure4_slot0;
                                var2 = undefined;
                                var2 = var6.bind(var2)(var4);
                                _fun0003_ip = 20; continue _fun0003;
case 18:
                                var6 = _closure3_slot3;
                                var2 = var6.getJoi;
                                var2 = var2.bind(var6)();
                                SaveGenerator(address=82);
case 21:
                                return var2;
case 22:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                                if(var6) { _fun0003_ip = 23; continue _fun0003 }
case 24:
                                var8 = _closure1_slot0;
                                var9 = _closure1_slot1;
                                var6 = 10;
                                var6 = var9[var6];
                                var9 = undefined;
                                var8 = var8.bind(var9)(var6);
                                var5 = _closure4_slot0;
                                var6 = var5.validation;
                                var7 = var7 != var6;
                                var6 = 'command.validation must not be null';
                                var6 = var8.bind(var9)(var7, var6);
                                var7 = var2.validate;
                                var4 = _closure3_slot2;
                                var6 = var4.args;
                                var4 = var5.validation;
                                var12 = var4.bind(var5)(var2);
                                var4 = {};
                                var8 = false;
                                var4['convert'] = var8;
                                var10 = function(arg1) {
                                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                        var1 = arg1;
                                        var2 = null;
                                        if(!(var2 != var1)) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                                        var3 = _closure7_slot1;
                                        var6 = _closure1_slot0;
                                        var5 = _closure1_slot1;
                                        var2 = 7;
                                        var5 = var5[var2];
                                        var2 = undefined;
                                        var6 = var6.bind(var2)(var5);
                                        var5 = {};
                                        var4 = _closure1_slot9;
                                        var4 = var4.INVALID_PAYLOAD;
                                        var5['errorCode'] = var4;
                                        var7 = var1.message;
                                        var4 = var6.prototype;
                                        var4 = Object.create(var4, {constructor: {value: var6}});
                                        var9 = var4;
                                        var8 = var5;
                                        var1 = new var9[var6](var8, var7, var6);
                                        var1 = var1 instanceof Object ? var1 : var4;
                                        var1 = var3.bind(var2)(var1);
                                        _fun0004_ip = 27; continue _fun0004;
case 25:
                                        var3 = _closure7_slot0;
                                        var2 = _closure4_slot0;
                                        var1 = undefined;
                                        var1 = var3.bind(var1)(var2);
case 27:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var14 = var2;
                                var13 = var6;
                                var11 = var4;
                                var3 = var14[var7](var13, var12, var11, var10, var9);
case 20:
                                var3 = undefined;
                                return var3;
case 23:
                                return var2;
case 16:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var2 = var4.bind(var3)(var2);
                    var _closure5_slot0 = var2;
                    var1 = function() {
                        var1 = undefined;
                        var4 = _closure5_slot0;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = undefined;
                var4 = var2.bind(var1)();
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var2 = var3.handler;
                    var1 = {};
                    var5 = _closure3_slot1;
                    var1['socket'] = var5;
                    var5 = _closure3_slot0;
                    var1['server'] = var5;
                    var5 = _closure3_slot2;
                    var6 = var5.cmd;
                    var1['cmd'] = var6;
                    var6 = var5.evt;
                    var1['evt'] = var6;
                    var6 = var5.nonce;
                    var1['nonce'] = var6;
                    var5 = var5.args;
                    var6 = null;
                    if(!(var6 == var5)) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var5 = {};
case 28:
                    var1['args'] = var5;
                    var5 = function isSocketConnected() {
                        var2 = _closure3_slot0;
                        var3 = var2.sockets;
                        var2 = var3.has;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1['isSocketConnected'] = var5;
                    var4 = _closure3_slot1;
                    var4 = var4.abortController;
                    var4 = var4.signal;
                    var1['signal'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                var7 = _closure3_slot0;
                var6 = var7.dispatch;
                var12 = _closure3_slot1;
                var1 = _closure3_slot2;
                var11 = var1.nonce;
                var10 = var1.cmd;
                var9 = null;
                var8 = arg1;
                var13 = var7;
                var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.catch;
            var1 = function(arg1) {
                var1 = arg1;
                var9 = var1.code;
                var8 = var1.message;
                var5 = _closure3_slot0;
                var4 = var5.error;
                var12 = _closure3_slot1;
                var1 = _closure3_slot2;
                var11 = var1.nonce;
                var10 = var1.cmd;
                var13 = var5;
                var1 = var13[var4](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'setCommandHandler';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var3 = var1.commands;
            var2 = arg2;
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'setEventHandler';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var3 = var1.events;
            var2 = arg2;
            var1 = arg1;
            var3[var1] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'dispatch';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var5 = arguments[1];
                var8 = arguments[2];
                var6 = arguments[3];
                var7 = arguments[4];
                var1 = undefined;
                if(!(var5 === var1)) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                var5 = null;
case 30:
                if(!(var8 === var1)) { _fun0006_ip = 32; continue _fun0006 }
case 33:
                var2 = _closure1_slot8;
                var8 = var2.DISPATCH;
case 32:
                if(!(var6 === var1)) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                var6 = null;
case 34:
                if(!(var7 === var1)) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                var7 = null;
case 36:
                var3 = var4.send;
                var2 = {};
                var2['cmd'] = var8;
                var2['data'] = var7;
                var2['evt'] = var6;
                var2['nonce'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'error';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var8 = arguments[1];
                var7 = arguments[2];
                var9 = arguments[3];
                var2 = arguments[4];
                var6 = this;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                var8 = null;
case 30:
                if(!(var7 === var1)) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                var3 = _closure1_slot8;
                var7 = var3.DISPATCH;
case 32:
                if(!(var9 === var1)) { _fun0007_ip = 38; continue _fun0007 }
case 35:
                var3 = _closure1_slot9;
                var9 = var3.UNKNOWN_ERROR;
case 38:
                if(!(var2 === var1)) { _fun0007_ip = 39; continue _fun0007 }
case 18:
                var2 = 'Unknown Error';
case 39:
                var5 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 9;
                var4 = var10[var4];
                var11 = var5.bind(var1)(var4);
                var10 = var11.track;
                var4 = _closure1_slot6;
                var5 = var4.RPC_SERVER_ERROR_CAUGHT;
                var4 = {};
                var4['command'] = var7;
                var4['code'] = var9;
                var4['message'] = var2;
                var4 = var10.bind(var11)(var5, var4);
                var5 = var6.dispatch;
                var3 = _closure1_slot10;
                var14 = var3.ERROR;
                var3 = {};
                var3['code'] = var9;
                var3['message'] = var2;
                var17 = arg1;
                var18 = var6;
                var16 = var8;
                var15 = var7;
                var13 = var3;
                var2 = var18[var5](var17, var16, var15, var14, var13, var12);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'listenIsSubscribed';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var4;
            var3 = var2.isSubscribedListeners;
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var2 = _closure3_slot0;
                var3 = var2.isSubscribedListeners;
                var2 = var3.delete;
                var1 = _closure3_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'dispatchIsSubscribedUpdate';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.isSubscribedListeners;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'isSubscribed';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = this;
            var3 = var2.subscriptions;
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.socket;
                    var1 = var1.application;
                    var4 = var1.id;
                    var1 = _closure3_slot0;
                    var1 = var4 === var1;
                    if(!var1) { _fun0008_ip = 40; continue _fun0008 }
case 41:
                    var3 = var3.evt;
                    var2 = _closure3_slot1;
                    var1 = var3 === var2;
case 40:
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = undefined;
            var1 = var1 !== var2;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getSubscription';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = arg3;
            var _closure3_slot2 = var2;
            var2 = this;
            var3 = var2.subscriptions;
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.socket;
                    var1 = _closure3_slot0;
                    var1 = var4 === var1;
                    if(!var1) { _fun0009_ip = 42; continue _fun0009 }
case 30:
                    var5 = var3.evt;
                    var4 = _closure3_slot1;
                    var1 = var5 === var4;
case 42:
                    if(!var1) { _fun0009_ip = 43; continue _fun0009 }
case 32:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.isEqual;
                    var3 = var3.args;
                    var2 = _closure3_slot2;
                    var1 = var4.bind(var5)(var3, var2);
case 43:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'addSubscription';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var8 = arg1;
                var7 = arg2;
                var6 = arg3;
                var11 = arguments[3];
                var3 = this;
                var1 = undefined;
                if(!(var11 === var1)) { _fun0010_ip = 30; continue _fun0010 }
case 31:
                var11 = null;
case 30:
                var5 = var3.dispatch;
                var4 = var5.bind;
                var2 = _closure1_slot8;
                var15 = var2.DISPATCH;
                var13 = null;
                var19 = var5;
                var18 = var3;
                var17 = var8;
                var16 = null;
                var14 = var7;
                var12 = var19[var4](var18, var17, var16, var15, var14, var13);
                var2 = var3.getSubscription;
                var2 = var2.bind(var3)(var8, var7, var6);
                if(!(var13 == var2)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                var5 = var3.subscriptions;
                var4 = var5.push;
                var2 = {};
                var2['update'] = var11;
                var2['dispatch'] = var12;
                var9 = null;
                if(!var11) { _fun0010_ip = 46; continue _fun0010 }
case 47:
                var10 = {};
                var10['prevState'] = var13;
                var10['dispatch'] = var12;
                var9 = var11.bind(var1)(var10);
case 46:
                var2['prevState'] = var9;
                var2['socket'] = var8;
                var2['evt'] = var7;
                var2['args'] = var6;
                var2 = var4.bind(var5)(var2);
                var2 = var3.dispatchIsSubscribedUpdate;
                var2 = var2.bind(var3)();
case 44:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'removeSubscription';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var3 = this;
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var1 = arg3;
            var _closure3_slot2 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.remove;
            var4 = var3.subscriptions;
            var2 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.socket;
                    var1 = _closure3_slot0;
                    var1 = var4 === var1;
                    if(!var1) { _fun0011_ip = 42; continue _fun0011 }
case 30:
                    var5 = var3.evt;
                    var4 = _closure3_slot1;
                    var1 = var5 === var4;
case 42:
                    if(!var1) { _fun0011_ip = 43; continue _fun0011 }
case 32:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var4 = 5;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.isEqual;
                    var3 = var3.args;
                    var2 = _closure3_slot2;
                    var1 = var4.bind(var5)(var3, var2);
case 43:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.dispatchIsSubscribedUpdate;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'removeSubscriptions';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.remove;
            var4 = var3.subscriptions;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.socket;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            var2 = var3.dispatchIsSubscribedUpdate;
            var2 = var2.bind(var3)();
            return var1;
        };
        var1['value'] = var6;
        var2[14] = var1;
        var1 = {};
        var6 = 'dispatchToSubscriptions';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = arg4;
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = arg1;
                var _closure3_slot1 = var3;
                var3 = arg2;
                var _closure3_slot2 = var3;
                var3 = arg3;
                var _closure3_slot3 = var3;
                var3 = null;
                var3 = var3 != var6;
                if(!var3) { _fun0012_ip = 37; continue _fun0012 }
case 48:
                var4 = '';
                var3 = var4 !== var6;
case 37:
                if(!var3) { _fun0012_ip = 49; continue _fun0012 }
case 50:
                var7 = _closure1_slot11;
                var4 = var7.includes;
                var4 = var4.bind(var7)(var6);
                var7 = !var4;
                var4 = !var7;
                if(!var7) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                var7 = _closure1_slot11;
                var5 = var7.unshift;
                var5 = var5.bind(var7)(var6);
                var6 = var7.splice;
                var5 = 50;
                var5 = var6.bind(var7)(var5);
                var4 = false;
case 51:
                var3 = var4;
case 49:
                if(var3) { _fun0012_ip = 53; continue _fun0012 }
case 54:
                var3 = var2.subscriptions;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arg1;
                        var4 = var2.evt;
                        var3 = _closure3_slot1;
                        if(!(var4 === var3)) { _fun0013_ip = 55; continue _fun0013 }
case 30:
                        var3 = _closure3_slot2;
                        var4 = 'function';
                        var3 = typeof var3;
                        var3 = var4 === var3;
                        if(!var3) { _fun0013_ip = 56; continue _fun0013 }
case 57:
                        var6 = _closure3_slot2;
                        var5 = undefined;
                        var5 = var6.bind(var5)(var2);
                        var3 = !var5;
case 56:
                        if(var3) { _fun0013_ip = 58; continue _fun0013 }
case 59:
                        var5 = _closure3_slot2;
                        var6 = 'object';
                        var5 = typeof var5;
                        var5 = var6 === var5;
                        if(!var5) { _fun0013_ip = 60; continue _fun0013 }
case 61:
                        var9 = _closure3_slot2;
                        var12 = var2.args;
                        var6 = null;
                        if(!(var6 == var12)) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                        var12 = {};
case 62:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var6 = 5;
                        var7 = var13[var6];
                        var10 = undefined;
                        var8 = var11.bind(var10)(var7);
                        var7 = var8.isEqual;
                        var6 = var13[var6];
                        var11 = var11.bind(var10)(var6);
                        var10 = var11.pick;
                        var6 = global;
                        var13 = var6.Object;
                        var6 = var13.keys;
                        var6 = var6.bind(var13)(var9);
                        var6 = var10.bind(var11)(var12, var6);
                        var6 = var7.bind(var8)(var9, var6);
                        var5 = !var6;
case 60:
                        var3 = var5;
case 58:
                        if(var3) { _fun0013_ip = 55; continue _fun0013 }
case 64:
                        var3 = _closure3_slot3;
                        var3 = typeof var3;
                        if(!(var4 === var3)) { _fun0013_ip = 65; continue _fun0013 }
case 66:
                        var4 = _closure3_slot3;
                        var3 = undefined;
                        var3 = var4.bind(var3)(var2);
                        _closure3_slot3 = var3;
case 65:
                        var7 = _closure3_slot0;
                        var6 = var7.dispatch;
                        var18 = var2.socket;
                        var3 = _closure1_slot8;
                        var16 = var3.DISPATCH;
                        var15 = var2.evt;
                        var14 = _closure3_slot3;
                        var17 = null;
                        var19 = var7;
                        var1 = var19[var6](var18, var17, var16, var15, var14, var13);
case 55:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
case 53:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[15] = var1;
        var1 = {};
        var6 = 'updateSubscriptions';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.subscriptions;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.update;
                    if(!var1) { _fun0014_ip = 67; continue _fun0014 }
case 68:
                    var1 = var2.update;
                    var1 = var1.bind(var2)(var2);
                    var2['prevState'] = var1;
case 67:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'storeWait';
        var1['key'] = var6;
        var5 = function value(arg1, arg2, arg3) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = arg2;
                var4 = arg3;
                var3 = this;
                var _closure3_slot0 = var3;
                var3 = arg1;
                var _closure3_slot1 = var3;
                var _closure3_slot2 = var2;
                var _closure3_slot3 = var4;
                var5 = undefined;
                var3 = var2.bind(var5)();
                if(var3) { _fun0015_ip = 69; continue _fun0015 }
case 70:
                var2 = 0;
                if(!(var2 !== var4)) { _fun0015_ip = 69; continue _fun0015 }
case 19:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 5;
                var2 = var6[var2];
                var4 = var4.bind(var5)(var2);
                var2 = var4.uniqueId;
                var2 = var2.bind(var4)();
                var _closure3_slot4 = var2;
                var2 = function removeSubscription() {
                    var5 = _closure3_slot0;
                    var4 = var5.removeSubscription;
                    var3 = _closure3_slot1;
                    var2 = {};
                    var1 = _closure3_slot4;
                    var2['uniqueId'] = var1;
                    var1 = 'RPC_STORE_WAIT';
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var1;
                };
                var _closure3_slot5 = var2;
                var2 = global;
                var5 = var2.Promise;
                var2 = var5.prototype;
                var4 = Object.create(var2, {constructor: {value: var5}});
                var7 = function(arg1, arg2) {
                    var1 = arg1;
                    var _closure4_slot0 = var1;
                    var1 = arg2;
                    var _closure4_slot1 = var1;
                    var1 = global;
                    var6 = var1.setTimeout;
                    var5 = _closure3_slot3;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 11;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var4 = var4.Millis;
                    var4 = var4.SECOND;
                    var5 = var5 * var4;
                    var4 = function() {
                        var2 = _closure3_slot5;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure4_slot1;
                        var2 = global;
                        var5 = var2.Error;
                        var2 = var5.prototype;
                        var4 = Object.create(var2, {constructor: {value: var5}});
                        var6 = 'timeout';
                        var7 = var4;
                        var2 = new var7[var5](var6, var5);
                        var2 = var2 instanceof Object ? var2 : var4;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = var6.bind(var1)(var4, var5);
                    var _closure4_slot2 = var4;
                    var7 = _closure3_slot0;
                    var6 = var7.addSubscription;
                    var11 = _closure3_slot1;
                    var4 = {};
                    var3 = _closure3_slot4;
                    var4['uniqueId'] = var3;
                    var10 = 'RPC_STORE_WAIT';
                    var8 = function() {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                            var2 = _closure3_slot2;
                            var1 = undefined;
                            var3 = var2.bind(var1)();
                            if(!var3) { _fun0016_ip = 19; continue _fun0016 }
case 71:
                            var2 = global;
                            var5 = var2.clearTimeout;
                            var4 = _closure4_slot2;
                            var4 = var5.bind(var1)(var4);
                            var2 = _closure4_slot0;
                            var2 = var2.bind(var1)(var3);
case 19:
                            return var1;
                        }
                    };
                    var12 = var7;
                    var9 = var4;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
                    return var1;
                };
                var8 = var4;
                var2 = new var8[var5](var7, var6);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = var4.then;
                var1 = function(arg1) {
                    var2 = _closure3_slot5;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    var1 = arg1;
                    return var1;
                };
                var1 = var2.bind(var4)(var1);
                return var1;
case 69:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var1['value'] = var5;
        var2[17] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/RPCServer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
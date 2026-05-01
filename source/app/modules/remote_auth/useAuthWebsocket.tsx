// app/modules/remote_auth/useAuthWebsocket.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ComponentActions;
    var _closure1_slot6 = var8;
    var4 = var4.Endpoints;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'useAuthWebsocket';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remote_auth/useAuthWebsocket.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAuthWebsocket(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var11 = arg1;
            var14 = arg2;
            var7 = arguments[2];
            var _closure2_slot0 = var11;
            var _closure2_slot1 = var14;
            var8 = undefined;
            if(!(var7 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = false;
case 2:
            var _closure2_slot2 = var7;
            var _closure2_slot3 = var8;
            var _closure2_slot4 = var8;
            var _closure2_slot5 = var8;
            var _closure2_slot6 = var8;
            var _closure2_slot7 = var8;
            var _closure2_slot8 = var8;
            var _closure2_slot9 = var8;
            var _closure2_slot10 = var8;
            var _closure2_slot11 = var8;
            var6 = _closure1_slot5;
            var4 = var6.useState;
            var3 = 0;
            var4 = var4.bind(var6)(var3);
            var16 = _closure1_slot4;
            var15 = 2;
            var4 = var16.bind(var8)(var4, var15);
            var10 = var4[var3];
            var9 = 1;
            var4 = var4[var9];
            _closure2_slot3 = var4;
            var5 = var6.useState;
            var4 = false;
            var4 = var5.bind(var6)(var4);
            var4 = var16.bind(var8)(var4, var15);
            var13 = var4[var3];
            _closure2_slot4 = var13;
            var4 = var4[var9];
            _closure2_slot5 = var4;
            var17 = var6.useState;
            var5 = {};
            var19 = _closure1_slot0;
            var12 = _closure1_slot2;
            var18 = 5;
            var18 = var12[var18];
            var18 = var19.bind(var8)(var18);
            var18 = var18.RemoteAuthStep;
            var18 = var18.INITIALIZING;
            var5['step'] = var18;
            var5 = var17.bind(var6)(var5);
            var5 = var16.bind(var8)(var5, var15);
            var3 = var5[var3];
            _closure2_slot6 = var3;
            var5 = var5[var9];
            _closure2_slot7 = var5;
            var9 = var6.useRef;
            var5 = null;
            var5 = var9.bind(var6)(var5);
            _closure2_slot8 = var5;
            var15 = var6.useMemo;
            var9 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var6 = 1500;
                var5 = 30000;
                var7 = var2;
                var1 = new var7[var4](var6, var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var5 = new Array(0);
            var9 = var15.bind(var6)(var9, var5);
            _closure2_slot9 = var9;
            var5 = _closure1_slot1;
            var2 = 7;
            var2 = var12[var2];
            var5 = var5.bind(var8)(var2);
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure2_slot7;
                    var4 = {};
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var6 = var6[var1];
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.RemoteAuthStep;
                    var6 = var6.INITIALIZING;
                    var4['step'] = var6;
                    var4 = var5.bind(var1)(var4);
                    var4 = _closure2_slot1;
                    if(var4) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot8;
                    var4 = var5.info;
                    var3 = 'document is not visible, will defer reconnection when document becomes visible.';
                    var3 = var4.bind(var5)(var3);
                    var4 = _closure2_slot5;
                    var3 = true;
                    var3 = var4.bind(var1)(var3);
                    _fun0002_ip = 6; continue _fun0002;
case 4:
                    var3 = _closure2_slot3;
                    var2 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
case 6:
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var2);
            _closure2_slot10 = var2;
            var12 = var6.useCallback;
            var8 = new Array(2);
            var8[0] = var2;
            var8[1] = var9;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var4 = _closure1_slot8;
                    var3 = var4.error;
                    var2 = 'Could not complete Remote Auth login, trying to restart with a new Remote Auth session.';
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot7;
                    var3 = {};
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 5;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var5 = var5.RemoteAuthStep;
                    var5 = var5.INITIALIZING;
                    var3['step'] = var5;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot9;
                    var3 = var3.pending;
                    if(var3) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var4 = _closure2_slot9;
                    var3 = var4.fail;
                    var2 = _closure2_slot10;
                    var2 = var3.bind(var4)(var2);
case 7:
                    return var1;
                }
            };
            var8 = var12.bind(var6)(var5, var8);
            _closure2_slot11 = var8;
            var12 = var6.useEffect;
            var5 = new Array(4);
            var5[0] = var3;
            var5[1] = var14;
            var5[2] = var13;
            var5[3] = var4;
            var4 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                    var2 = _closure2_slot4;
case 9:
                    if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                    var3 = _closure2_slot6;
                    var4 = var3.step;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 5;
                    var5 = var5[var3];
                    var3 = undefined;
                    var3 = var6.bind(var3)(var5);
                    var3 = var3.RemoteAuthStep;
                    var3 = var3.INITIALIZING;
                    var2 = var4 === var3;
case 11:
                    if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var4 = _closure1_slot8;
                    var3 = var4.info;
                    var2 = 'reconnecting, now that document is visible';
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure2_slot5;
                    var3 = undefined;
                    var2 = false;
                    var2 = var4.bind(var3)(var2);
                    var2 = _closure2_slot3;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var12.bind(var6)(var4, var5);
            var5 = var6.useEffect;
            var4 = new Array(6);
            var4[0] = var2;
            var4[1] = var11;
            var4[2] = var10;
            var4[3] = var9;
            var4[4] = var8;
            var4[5] = var7;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = function getKeyPair() {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var3 = _closure3_slot4;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                            var2 = global;
                            var4 = var2.Error;
                            var2 = var4.prototype;
                            var3 = Object.create(var2, {constructor: {value: var4}});
                            var5 = 'No key pair set';
                            var6 = var3;
                            var2 = new var6[var4](var5, var4);
                            var2 = var2 instanceof Object ? var2 : var3;
                            throw var2;
case 15:
                            var1 = _closure3_slot4;
                            return var1;
                        }
                    };
                    var _closure3_slot14 = var2;
                    var2 = global;
                    var4 = var2.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var _closure3_slot0 = var3;
                    var3 = function _fmt(arg1) {
                        var1 = global;
                        var3 = var1.Date;
                        var2 = var3.now;
                        var3 = var2.bind(var3)();
                        var2 = _closure3_slot0;
                        var2 = var3 - var2;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var4 = '[';
                        var1 = 'ms';
                        var3 = var2 + var1;
                        var2 = '] ';
                        var1 = arg1;
                        var1 = var5.bind(var4)(var3, var2, var1);
                        return var1;
                    };
                    var _closure3_slot1 = var3;
                    var3 = function info(arg1) {
                        var3 = _closure1_slot8;
                        var2 = var3.info;
                        var5 = _closure3_slot1;
                        var4 = undefined;
                        var1 = arg1;
                        var1 = var5.bind(var4)(var1);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var _closure3_slot2 = var3;
                    var3 = var2.window;
                    var3 = var3.GLOBAL_ENV;
                    var6 = var3.REMOTE_AUTH_ENDPOINT;
                    var3 = var2.HermesInternal;
                    var5 = var3.concat;
                    var4 = '';
                    var3 = '/?v=2';
                    var5 = var5.bind(var4)(var6, var3);
                    var4 = var5.startsWith;
                    var3 = '//';
                    var3 = var4.bind(var5)(var3);
                    var8 = var5;
                    if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                    var3 = var2.HermesInternal;
                    var4 = var3.concat;
                    var3 = 'wss:';
                    var8 = var4.bind(var3)(var5);
case 17:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 8;
                    var5 = var5[var3];
                    var3 = undefined;
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.bind(var3)(var8);
                    var _closure3_slot3 = var5;
                    var6 = _closure1_slot8;
                    var4 = var6.info;
                    var2 = var2.HermesInternal;
                    var7 = var2.concat;
                    var2 = '[0ms] connecting to ';
                    var2 = var7.bind(var2)(var8);
                    var2 = var4.bind(var6)(var2);
                    var2 = null;
                    var _closure3_slot4 = var2;
                    var _closure3_slot5 = var2;
                    var _closure3_slot6 = var2;
                    var _closure3_slot7 = var2;
                    var2 = true;
                    var _closure3_slot8 = var2;
                    var2 = function doHeartbeat() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var2 = _closure3_slot8;
                            if(var2) { _fun0007_ip = 19; continue _fun0007 }
case 10:
                            var4 = _closure3_slot2;
                            var3 = undefined;
                            var2 = 'heartbeat timeout, reconnecting.';
                            var2 = var4.bind(var3)(var2);
                            var4 = _closure3_slot3;
                            var2 = var4.close;
                            var2 = var2.bind(var4)();
                            var2 = _closure2_slot11;
                            var2 = var2.bind(var3)();
                            _fun0007_ip = 20; continue _fun0007;
case 19:
                            var2 = false;
                            _closure3_slot8 = var2;
                            var3 = _closure3_slot3;
                            var2 = var3.send;
                            var1 = global;
                            var5 = var1.JSON;
                            var4 = var5.stringify;
                            var1 = {};
                            var6 = 'heartbeat';
                            var1['op'] = var6;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
case 20:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var _closure3_slot9 = var2;
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* (arg1) {
                            var1 = function* anon_0_(arg1) {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                                    var2 = arg1;
                                    var7 = var2.data;
                                    var8 = undefined;
                                    var _closure6_slot0 = var8;
                                    SaveGenerator(address=30);
case 23:
                                    return var8;
case 24:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0008_ip = 25; continue _fun0008 }
case 26:
                                    var4 = global;
                                    var6 = var4.JSON;
                                    var3 = var6.parse;
                                    var3 = var3.bind(var6)(var7);
                                    var7 = var3.op;
                                    var9 = 'nonce_proof';
                                    if(!(var9 !== var7)) { _fun0008_ip = 27; continue _fun0008 }
case 28:
                                    var6 = 'pending_remote_init';
                                    if(!(var6 !== var7)) { _fun0008_ip = 29; continue _fun0008 }
case 8:
                                    var6 = 'pending_login';
                                    if(!(var6 !== var7)) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                                    var6 = 'pending_ticket';
                                    if(!(var6 !== var7)) { _fun0008_ip = 32; continue _fun0008 }
case 6:
                                    var6 = 'cancel';
                                    if(!(var6 !== var7)) { _fun0008_ip = 33; continue _fun0008 }
case 13:
                                    var6 = 'hello';
                                    if(!(var6 !== var7)) { _fun0008_ip = 34; continue _fun0008 }
case 35:
                                    var6 = 'heartbeat_ack';
                                    if(!(var6 !== var7)) { _fun0008_ip = 36; continue _fun0008 }
case 17:
                                    var10 = _closure1_slot8;
                                    var7 = var10.warn;
                                    var11 = _closure3_slot1;
                                    var6 = 'received unsupported message';
                                    var6 = var11.bind(var8)(var6);
                                    var6 = var7.bind(var10)(var6);
                                    return var8;
case 36:
                                    var6 = true;
                                    _closure3_slot8 = var6;
                                    return var8;
case 34:
                                    var10 = _closure3_slot2;
                                    var13 = var3.timeout_ms;
                                    var6 = var4.HermesInternal;
                                    var12 = var6.concat;
                                    var11 = 'got hello, auth timeout=';
                                    var6 = 'ms';
                                    var6 = var12.bind(var11)(var13, var6);
                                    var6 = var10.bind(var8)(var6);
                                    var13 = var3.heartbeat_interval;
                                    _closure6_slot0 = var13;
                                    var11 = var4.setTimeout;
                                    var12 = var4.Math;
                                    var10 = var12.floor;
                                    var14 = var4.Math;
                                    var6 = var14.random;
                                    var6 = var6.bind(var14)();
                                    var6 = var13 * var6;
                                    var10 = var10.bind(var12)(var6);
                                    var6 = function() {
                                        var1 = null;
                                        _closure3_slot7 = var1;
                                        var2 = _closure3_slot9;
                                        var1 = undefined;
                                        var2 = var2.bind(var1)();
                                        var2 = global;
                                        var5 = var2.setInterval;
                                        var4 = _closure3_slot9;
                                        var2 = _closure6_slot0;
                                        var2 = var5.bind(var1)(var4, var2);
                                        _closure3_slot6 = var2;
                                        return var1;
                                    };
                                    var6 = var11.bind(var8)(var6, var10);
                                    _closure3_slot7 = var6;
                                    var6 = undefined;
                                    return var6;
case 33:
                                    var7 = _closure3_slot2;
                                    var6 = 'remote auth handshake cancelled.';
                                    var6 = var7.bind(var8)(var6);
                                    var6 = _closure2_slot10;
                                    var6 = var6.bind(var8)();
                                    var6 = undefined;
                                    return var6;
case 32:
                                    var10 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var6 = 10;
                                    var6 = var13[var6];
                                    var6 = var10.bind(var8)(var6);
                                    var12 = var6.ComponentDispatch;
                                    var7 = var12.dispatch;
                                    var6 = _closure1_slot6;
                                    var6 = var6.WAVE_EMPHASIZE;
                                    var6 = var7.bind(var12)(var6);
                                    var12 = _closure3_slot2;
                                    var7 = 'remote auth handshake started, awaiting ticket/cancel.';
                                    var7 = var12.bind(var8)(var7);
                                    var12 = var3.encrypted_user_payload;
                                    var7 = 13;
                                    var7 = var13[var7];
                                    var10 = var10.bind(var8)(var7);
                                    var7 = var10.decodeEncodedUserRecord;
                                    var6 = _closure3_slot14;
                                    var6 = var6.bind(var8)();
                                    var6 = var7.bind(var10)(var6, var12);
                                    SaveGenerator(address=461);
case 37:
                                    return var6;
case 38:
                                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                                    if(var7) { _fun0008_ip = 39; continue _fun0008 }
case 40:
                                    var10 = _closure2_slot7;
                                    var7 = {};
                                    var12 = _closure1_slot0;
                                    var13 = _closure1_slot2;
                                    var11 = 5;
                                    var11 = var13[var11];
                                    var11 = var12.bind(var8)(var11);
                                    var11 = var11.RemoteAuthStep;
                                    var11 = var11.PENDING_TICKET;
                                    var7['step'] = var11;
                                    var7['user'] = var6;
                                    var7 = var10.bind(var8)(var7);
                                    var7 = undefined;
                                    return var7;
case 39:
                                    return var6;
case 30:
                                    var12 = var3.ticket;
                                    var6 = null;
                                    if(!(var6 != var12)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                                    var13 = _closure2_slot7;
                                    var6 = {};
                                    var7 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var14 = 5;
                                    var14 = var10[var14];
                                    var14 = var7.bind(var8)(var14);
                                    var14 = var14.RemoteAuthStep;
                                    var14 = var14.PENDING_LOGIN;
                                    var6['step'] = var14;
                                    var6['ticket'] = var12;
                                    var6 = var13.bind(var8)(var6);
                                    var6 = 11;
                                    var6 = var10[var6];
                                    var6 = var7.bind(var8)(var6);
                                    var10 = var6.HTTP;
                                    var7 = var10.post;
                                    var6 = {};
                                    var11 = _closure1_slot7;
                                    var11 = var11.REMOTE_AUTH_LOGIN;
                                    var6['url'] = var11;
                                    var11 = {};
                                    var11['ticket'] = var12;
                                    var6['body'] = var11;
                                    var11 = true;
                                    var6['oldFormErrors'] = var11;
                                    var6['rejectWithError'] = var11;
                                    var10 = var7.bind(var10)(var6);
                                    var7 = var10.then;
                                    var6 = function() {
                                        var4 = _closure1_slot3;
                                        var3 = undefined;
                                        var2 = function* (arg1) {
                                            var1 = function* anon_0_(arg1) {
                                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                                    StartGenerator();
                                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                                    if(var2) { _fun0009_ip = 43; continue _fun0009 }
case 10:
                                                    var2 = _closure2_slot8;
                                                    var3 = var2.current;
                                                    var2 = null;
                                                    if(!(var2 == var3)) { _fun0009_ip = 44; continue _fun0009 }
case 23:
                                                    var3 = _closure2_slot11;
                                                    var2 = undefined;
                                                    var2 = var3.bind(var2)();
                                                    _fun0009_ip = 45; continue _fun0009;
case 44:
                                                    var3 = _closure1_slot1;
                                                    var2 = _closure1_slot2;
                                                    var8 = 9;
                                                    var2 = var2[var8];
                                                    var6 = undefined;
                                                    var9 = var3.bind(var6)(var2);
                                                    var4 = var9.decryptEncodedCiphertext;
                                                    var2 = _closure2_slot8;
                                                    var3 = var2.current;
                                                    var2 = arg1;
                                                    var2 = var2.body;
                                                    var2 = var2.encrypted_token;
                                                    var2 = var4.bind(var9)(var3, var2);
                                                    SaveGenerator(address=109);
case 46:
                                                    return var2;
case 47:
                                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                                    if(var3) { _fun0009_ip = 48; continue _fun0009 }
case 49:
                                                    var4 = _closure1_slot1;
                                                    var3 = _closure1_slot2;
                                                    var3 = var3[var8];
                                                    var8 = var4.bind(var6)(var3);
                                                    var4 = var8.publicKeyFingerprint;
                                                    var3 = _closure2_slot8;
                                                    var3 = var3.current;
                                                    var3 = var4.bind(var8)(var3);
                                                    SaveGenerator(address=159);
case 50:
                                                    return var3;
case 51:
                                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                                                    if(var4) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                                                    var4 = _closure2_slot2;
                                                    var8 = _closure1_slot1;
                                                    var9 = _closure1_slot2;
                                                    var7 = 12;
                                                    var7 = var9[var7];
                                                    var7 = var8.bind(var6)(var7);
                                                    if(var4) { _fun0009_ip = 54; continue _fun0009 }
case 55:
                                                    var8 = var7.loginToken;
                                                    var4 = false;
                                                    var4 = var8.bind(var7)(var2, var4);
                                                    SaveGenerator(address=210);
case 56:
                                                    return var4;
case 57:
                                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                                                    if(!var8) { _fun0009_ip = 58; continue _fun0009 }
case 59:
                                                    return var4;
case 54:
                                                    var4 = var7.switchAccountToken;
                                                    var4 = var4.bind(var7)(var2);
                                                    SaveGenerator(address=234);
case 60:
                                                    return var4;
case 61:
                                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                                                    if(var7) { _fun0009_ip = 62; continue _fun0009 }
case 58:
                                                    var5 = _closure2_slot0;
                                                    var5 = var5.bind(var6)(var3);
case 45:
                                                    var5 = undefined;
                                                    return var5;
case 62:
                                                    return var4;
case 52:
                                                    return var3;
case 48:
                                                    return var2;
case 43:
                                                    return var1;
                                                }
                                            };
                                            return var1;
                                        };
                                        var2 = var4.bind(var3)(var2);
                                        var _closure7_slot0 = var2;
                                        var1 = function() {
                                            var1 = undefined;
                                            var4 = _closure7_slot0;
                                            var3 = var4.apply;
                                            var1 = arguments;
                                            var2 = var1;
                                            var1 = this;
                                            var1 = var3.bind(var4)(var1, var2);
                                            return var1;
                                        };
                                        return var1;
                                    };
                                    var6 = var6.bind(var8)();
                                    var7 = var7.bind(var10)(var6);
                                    var6 = var7.catch;
                                    var5 = function() {
                                        var2 = _closure2_slot11;
                                        var1 = undefined;
                                        var1 = var2.bind(var1)();
                                        return var1;
                                    };
                                    var5 = var6.bind(var7)(var5);
                                    var5 = undefined;
                                    _fun0008_ip = 63; continue _fun0008;
case 41:
                                    var6 = _closure2_slot11;
                                    var6 = var6.bind(var8)();
                                    var5 = undefined;
case 63:
                                    return var5;
case 29:
                                    var7 = _closure2_slot9;
                                    var5 = var7.succeed;
                                    var5 = var5.bind(var7)();
                                    var7 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var5 = 10;
                                    var5 = var11[var5];
                                    var5 = var7.bind(var8)(var5);
                                    var12 = var5.ComponentDispatch;
                                    var7 = var12.dispatch;
                                    var5 = _closure1_slot6;
                                    var5 = var5.WAVE_EMPHASIZE;
                                    var5 = var7.bind(var12)(var5);
                                    var7 = _closure1_slot1;
                                    var5 = 9;
                                    var5 = var11[var5];
                                    var12 = var7.bind(var8)(var5);
                                    var11 = var12.publicKeyFingerprint;
                                    var5 = _closure3_slot14;
                                    var5 = var5.bind(var8)();
                                    var5 = var11.bind(var12)(var5);
                                    SaveGenerator(address=837);
case 64:
                                    return var5;
case 65:
                                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=10);
                                    if(var11) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                                    var11 = var3.fingerprint;
                                    if(!(var5 === var11)) { _fun0008_ip = 68; continue _fun0008 }
case 69:
                                    var11 = _closure3_slot2;
                                    var7 = 'handshake complete awaiting remote auth.';
                                    var7 = var11.bind(var8)(var7);
                                    var7 = _closure2_slot7;
                                    var6 = {};
                                    var11 = _closure1_slot0;
                                    var12 = _closure1_slot2;
                                    var10 = 5;
                                    var10 = var12[var10];
                                    var10 = var11.bind(var8)(var10);
                                    var10 = var10.RemoteAuthStep;
                                    var10 = var10.PENDING_REMOTE_INIT;
                                    var6['step'] = var10;
                                    var6['fingerprint'] = var5;
                                    var6 = var7.bind(var8)(var6);
                                    var6 = undefined;
                                    return var6;
case 68:
                                    var10 = var4.Error;
                                    var12 = var3.fingerprint;
                                    var6 = var4.HermesInternal;
                                    var11 = var6.concat;
                                    var7 = 'bad fingerprint ';
                                    var6 = ' !== ';
                                    var17 = var11.bind(var7)(var5, var6, var12);
                                    var7 = var10.prototype;
                                    var7 = Object.create(var7, {constructor: {value: var10}});
                                    var18 = var7;
                                    var6 = new var18[var10](var17, var16);
                                    var6 = var6 instanceof Object ? var6 : var7;
                                    throw var6;
case 66:
                                    return var5;
case 27:
                                    var10 = var3.encrypted_nonce;
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 9;
                                    var3 = var6[var3];
                                    var7 = var5.bind(var8)(var3);
                                    var6 = var7.decryptNonce;
                                    var3 = _closure3_slot14;
                                    var3 = var3.bind(var8)();
                                    var3 = var6.bind(var7)(var3, var10);
                                    SaveGenerator(address=1056);
case 70:
                                    return var3;
case 71:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                                    if(var6) { _fun0008_ip = 72; continue _fun0008 }
case 73:
                                    var7 = _closure3_slot2;
                                    var6 = 'computed nonce proof';
                                    var6 = var7.bind(var8)(var6);
                                    var6 = _closure3_slot3;
                                    var5 = var6.send;
                                    var8 = var4.JSON;
                                    var7 = var8.stringify;
                                    var4 = {};
                                    var4['op'] = var9;
                                    var4['nonce'] = var3;
                                    var4 = var7.bind(var8)(var4);
                                    var4 = var5.bind(var6)(var4);
                                    var4 = undefined;
                                    return var4;
case 72:
                                    return var3;
case 25:
                                    return var2;
case 21:
                                    return var1;
                                }
                            };
                            var2 = var1.next;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var7 = var2.bind(var3)();
                    var _closure3_slot10 = var7;
                    var2 = function() {
                        var4 = _closure1_slot3;
                        var3 = undefined;
                        var2 = function* () {
                            var1 = function* anon_0_() {
                                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                    if(var2) { _fun0010_ip = 74; continue _fun0010 }
case 10:
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var8 = 9;
                                    var2 = var2[var8];
                                    var5 = undefined;
                                    var3 = var3.bind(var5)(var2);
                                    var2 = var3.generateRsaKeyPair;
                                    var2 = var2.bind(var3)();
                                    SaveGenerator(address=51);
case 15:
                                    return var2;
case 75:
                                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                                    if(var3) { _fun0010_ip = 76; continue _fun0010 }
case 77:
                                    _closure3_slot4 = var2;
                                    var7 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var3 = var3[var8];
                                    var9 = var7.bind(var5)(var3);
                                    var7 = var9.serializePublicKey;
                                    var3 = _closure3_slot4;
                                    var3 = var7.bind(var9)(var3);
                                    SaveGenerator(address=105);
case 78:
                                    return var3;
case 79:
                                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                                    if(var7) { _fun0010_ip = 80; continue _fun0010 }
case 81:
                                    _closure3_slot5 = var3;
                                    var7 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var4 = var4[var8];
                                    var8 = var7.bind(var5)(var4);
                                    var7 = var8.publicKeyFingerprint;
                                    var4 = _closure3_slot4;
                                    var4 = var7.bind(var8)(var4);
                                    SaveGenerator(address=154);
case 82:
                                    return var4;
case 83:
                                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                                    if(var7) { _fun0010_ip = 84; continue _fun0010 }
case 85:
                                    var9 = _closure3_slot2;
                                    var7 = global;
                                    var8 = var7.HermesInternal;
                                    var10 = var8.concat;
                                    var8 = 'connected, handshaking with fingerprint: ';
                                    var8 = var10.bind(var8)(var4);
                                    var8 = var9.bind(var5)(var8);
                                    var9 = _closure3_slot3;
                                    var8 = var9.send;
                                    var11 = var7.JSON;
                                    var10 = var11.stringify;
                                    var7 = {};
                                    var12 = 'init';
                                    var7['op'] = var12;
                                    var12 = _closure3_slot5;
                                    var7['encoded_public_key'] = var12;
                                    var7 = var10.bind(var11)(var7);
                                    var7 = var8.bind(var9)(var7);
                                    var7 = _closure2_slot8;
                                    var6 = _closure3_slot4;
                                    var7['current'] = var6;
                                    return var5;
case 84:
                                    return var4;
case 80:
                                    return var3;
case 76:
                                    return var2;
case 74:
                                    return var1;
                                }
                            };
                            return var1;
                        };
                        var2 = var4.bind(var3)(var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = undefined;
                            var4 = _closure4_slot0;
                            var3 = var4.apply;
                            var1 = arguments;
                            var2 = var1;
                            var1 = this;
                            var1 = var3.bind(var4)(var1, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var8 = var2.bind(var3)();
                    var _closure3_slot11 = var8;
                    var6 = function onclose(arg1) {
                        var1 = arg1;
                        var3 = _closure3_slot2;
                        var6 = var1.code;
                        var5 = var1.reason;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var4 = var1.concat;
                        var2 = 'disconnected, code: ';
                        var1 = ' ';
                        var2 = var4.bind(var2)(var6, var1, var5);
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = _closure2_slot11;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var _closure3_slot12 = var6;
                    var4 = function onerror(arg1) {
                        var3 = _closure3_slot2;
                        var1 = global;
                        var5 = var1.JSON;
                        var4 = var5.stringify;
                        var2 = arg1;
                        var4 = var4.bind(var5)(var2);
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'disconnected, error: ';
                        var2 = var2.bind(var1)(var4);
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = _closure2_slot11;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var _closure3_slot13 = var4;
                    var3 = var5.addEventListener;
                    var2 = 'open';
                    var2 = var3.bind(var5)(var2, var8);
                    var3 = var5.addEventListener;
                    var2 = 'message';
                    var2 = var3.bind(var5)(var2, var7);
                    var3 = var5.addEventListener;
                    var2 = 'close';
                    var2 = var3.bind(var5)(var2, var6);
                    var3 = var5.addEventListener;
                    var2 = 'error';
                    var2 = var3.bind(var5)(var2, var4);
                    var1 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var4 = _closure3_slot2;
                            var1 = undefined;
                            var3 = 'cleaning up';
                            var3 = var4.bind(var1)(var3);
                            var6 = _closure3_slot3;
                            var5 = var6.removeEventListener;
                            var4 = _closure3_slot11;
                            var3 = 'open';
                            var3 = var5.bind(var6)(var3, var4);
                            var6 = _closure3_slot3;
                            var5 = var6.removeEventListener;
                            var4 = _closure3_slot10;
                            var3 = 'message';
                            var3 = var5.bind(var6)(var3, var4);
                            var6 = _closure3_slot3;
                            var5 = var6.removeEventListener;
                            var4 = _closure3_slot12;
                            var3 = 'close';
                            var3 = var5.bind(var6)(var3, var4);
                            var6 = _closure3_slot3;
                            var5 = var6.removeEventListener;
                            var4 = _closure3_slot13;
                            var3 = 'error';
                            var3 = var5.bind(var6)(var3, var4);
                            var5 = _closure3_slot3;
                            var4 = var5.close;
                            var3 = 1000;
                            var3 = var4.bind(var5)(var3);
                            var4 = _closure2_slot9;
                            var3 = var4.cancel;
                            var3 = var3.bind(var4)();
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var3 = 9;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.release;
                            var3 = var3.bind(var4)();
                            var3 = _closure3_slot7;
                            var4 = null;
                            if(!(var4 != var3)) { _fun0011_ip = 86; continue _fun0011 }
case 87:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure3_slot7;
                            var3 = var5.bind(var1)(var3);
case 86:
                            var3 = _closure3_slot6;
                            if(!(var4 != var3)) { _fun0011_ip = 88; continue _fun0011 }
case 89:
                            var3 = global;
                            var3 = var3.clearInterval;
                            var2 = _closure3_slot6;
                            var2 = var3.bind(var1)(var2);
case 88:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var5.bind(var6)(var1, var4);
            var1 = {};
            var1['state'] = var3;
            var1['cancel'] = var2;
            return var1;
        }
    };
    var3['useAuthWebsocket'] = var2;
    return var1;
})();
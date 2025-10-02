// app/modules/rpc/transports/PostMessageTransport.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var9;
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
            _closure1_slot20 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var9.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.RPC_EMBEDDED_APP_SCOPE;
    var _closure1_slot11 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.AnalyticEvents;
    var _closure1_slot12 = var8;
    var8 = var7.ComponentActions;
    var _closure1_slot13 = var8;
    var8 = var7.RPCCloseCodes;
    var _closure1_slot14 = var8;
    var7 = var7.RPCErrors;
    var _closure1_slot15 = var7;
    var8 = 10;
    var7 = var6[var8];
    var7 = var9.bind(var1)(var7);
    var7 = var7.Millis;
    var7 = var7.SECOND;
    var7 = var8 * var7;
    var _closure1_slot16 = var7;
    var7 = var4.Map;
    var8 = var7.prototype;
    var8 = Object.create(var8, {constructor: {value: var7}});
    var14 = var8;
    var7 = new var14[var7](var13);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot17 = var7;
    var4 = var4.Set;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var14 = var7;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot18 = var4;
    var4 = function postClose(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var2 = var2.CLOSE;
        var4 = new Array(2);
        var4[0] = var2;
        var2 = arg2;
        var4[1] = var2;
        var3 = arg3;
        var2 = arg1;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot19 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EventEmitter;
    var2 = function(arg1) {
        var4 = function PostMessageTransport(arg1, arg2, arg3, arg4) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var6 = this;
                var1 = _closure1_slot5;
                var4 = _closure2_slot0;
                var5 = undefined;
                var1 = var1.bind(var5)(var6, var4);
                var1 = _closure1_slot8;
                var11 = var1.bind(var5)(var4);
                var4 = _closure1_slot7;
                var1 = _closure1_slot20;
                var1 = var1.bind(var5)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var11.apply;
                var1 = var1.bind(var11)(var6, var5);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var10 = var7.Reflect;
                var9 = var10.construct;
                var7 = _closure1_slot8;
                var7 = var7.bind(var5)(var6);
                var8 = var7.constructor;
                var7 = new Array(0);
                var1 = var9.bind(var10)(var11, var7, var8);
case 8:
                var1 = var4.bind(var5)(var6, var1);
                var _closure3_slot0 = var1;
                var4 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var7 = arg1;
                        var2 = arg2;
                        var3 = arguments[2];
                        var _closure4_slot0 = var7;
                        var1 = undefined;
                        if(!(var3 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = false;
case 9:
                        var8 = _closure3_slot0;
                        var6 = var8.emit;
                        var5 = undefined;
                        if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var5 = var2;
case 11:
                        var3 = 'disconnect';
                        var3 = var6.bind(var8)(var3, var7, var5);
                        var6 = var7.close;
                        var5 = var2.code;
                        var8 = var2.message;
                        var3 = null;
                        var9 = var3 != var8;
                        var2 = 'Unknown';
                        if(!var9) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var2 = var8;
case 13:
                        var2 = var6.bind(var7)(var5, var2);
                        var2 = global;
                        var7 = var2.Array;
                        var6 = var7.from;
                        var8 = _closure1_slot17;
                        var5 = var8.entries;
                        var5 = var5.bind(var8)();
                        var6 = var6.bind(var7)(var5);
                        var5 = var6.find;
                        var4 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var4 = arg1;
                                var1 = var4[Symbol.iterator];
                                var4 = var1().next;
                                var2 = var4().value;
                                var2 = var1;
                                var6 = undefined;
                                var3 = var2 === var6;
                                var2 = undefined;
                                if(var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                                var5 = var4().value;
                                var4 = var1;
                                var4 = var4 === var6;
                                var2 = undefined;
                                var3 = var4;
                                if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 17:
                                var2 = var5;
                                var3 = var4;
case 15:
                                if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                                var1.return();
case 18:
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            }
                        };
                        var6 = var5.bind(var6)(var4);
                        if(!(var3 == var6)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
                        var6 = [null, null];
case 20:
                        var5 = _closure1_slot4;
                        var4 = 1;
                        var5 = var5.bind(var1)(var6, var4);
                        var4 = 0;
                        var4 = var5[var4];
                        if(!(var3 != var4)) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                        var3 = _closure1_slot17;
                        var2 = var3.delete;
                        var2 = var2.bind(var3)(var4);
case 22:
                        return var1;
                    }
                };
                var1['disconnectSocket'] = var4;
                var4 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.id;
                    var3 = _closure1_slot18;
                    var2 = var3.add;
                    var2 = var2.bind(var3)(var4);
                    var3 = _closure3_slot0;
                    var2 = global;
                    var5 = var2.setTimeout;
                    var4 = _closure1_slot16;
                    var1 = undefined;
                    var2 = function() {
                        var1 = global;
                        var3 = var1.Array;
                        var2 = var3.from;
                        var4 = _closure1_slot10;
                        var1 = var4.getSelfEmbeddedActivities;
                        var4 = var1.bind(var4)();
                        var1 = var4.entries;
                        var1 = var1.bind(var4)();
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.forEach;
                        var1 = function(arg1) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4[Symbol.iterator];
                                var4 = var2().next;
                                var5 = var4().value;
                                var3 = var2;
                                var1 = undefined;
                                var3 = var3 === var1;
                                var8 = undefined;
                                if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 16:
                                var8 = var5;
case 24:
                                var7 = undefined;
                                if(var3) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                                var5 = var4().value;
                                var4 = var2;
                                var4 = var4 === var1;
                                var7 = undefined;
                                var3 = var4;
                                if(var4) { _fun0005_ip = 25; continue _fun0005 }
case 7:
                                var7 = var5;
                                var3 = var4;
case 25:
                                if(var3) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                                var2.return();
case 27:
                                var3 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var2 = 12;
                                var2 = var10[var2];
                                var5 = var3.bind(var1)(var2);
                                var4 = var5.track;
                                var2 = _closure1_slot12;
                                var3 = var2.ACTIVITY_HANDSHAKE_TIMED_OUT;
                                var2 = {};
                                var2['application_id'] = var8;
                                var9 = _closure1_slot0;
                                var8 = 13;
                                var11 = var10[var8];
                                var13 = var9.bind(var1)(var11);
                                var12 = var13.getEmbeddedActivityLocationChannelId;
                                var11 = var7.location;
                                var11 = var12.bind(var13)(var11);
                                var2['channel_id'] = var11;
                                var8 = var10[var8];
                                var9 = var9.bind(var1)(var8);
                                var8 = var9.getEmbeddedActivityLocationGuildId;
                                var7 = var7.location;
                                var7 = var8.bind(var9)(var7);
                                var2['guild_id'] = var7;
                                var6 = _closure1_slot16;
                                var2['timeout_ms'] = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = var5.bind(var1)(var2, var4);
                    var3['handshakeFailureTimeoutId'] = var2;
                    return var1;
                };
                var1['handleIFrameMount'] = var4;
                var4 = function(arg1) {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = arg1;
                        var5 = var2.id;
                        var _closure4_slot0 = var5;
                        var4 = _closure1_slot18;
                        var3 = var4.delete;
                        var3 = var3.bind(var4)(var5);
                        var3 = global;
                        var5 = var3.Array;
                        var4 = var5.from;
                        var6 = _closure1_slot17;
                        var3 = var6.entries;
                        var3 = var3.bind(var6)();
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.find;
                        var1 = function(arg1) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var4 = arg1;
                                var2 = var4[Symbol.iterator];
                                var4 = var2().next;
                                var1 = var4().value;
                                var1 = var2;
                                var6 = undefined;
                                var3 = var1 === var6;
                                var1 = undefined;
                                if(var3) { _fun0007_ip = 15; continue _fun0007 }
case 16:
                                var5 = var4().value;
                                var4 = var2;
                                var4 = var4 === var6;
                                var1 = undefined;
                                var3 = var4;
                                if(var4) { _fun0007_ip = 15; continue _fun0007 }
case 17:
                                var1 = var5;
                                var3 = var4;
case 15:
                                if(var3) { _fun0007_ip = 18; continue _fun0007 }
case 19:
                                var2.return();
case 18:
                                var2 = var1.frameId;
                                var1 = _closure4_slot0;
                                var1 = var2 === var1;
                                return var1;
                            }
                        };
                        var6 = var3.bind(var4)(var1);
                        var5 = null;
                        if(!(var5 == var6)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                        var6 = [null, null];
case 29:
                        var4 = _closure1_slot4;
                        var1 = undefined;
                        var3 = 2;
                        var6 = var4.bind(var1)(var6, var3);
                        var3 = 0;
                        var4 = var6[var3];
                        var3 = 1;
                        var8 = var6[var3];
                        var3 = var5 != var8;
                        if(!var3) { _fun0006_ip = 31; continue _fun0006 }
case 32:
                        var3 = var5 != var4;
case 31:
                        if(!var3) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                        var7 = _closure3_slot0;
                        var6 = var7.disconnectSocket;
                        var5 = {};
                        var3 = _closure1_slot14;
                        var3 = var3.CLOSE_NORMAL;
                        var5['code'] = var3;
                        var3 = 'iFrame gone';
                        var5['message'] = var3;
                        var3 = true;
                        var3 = var6.bind(var7)(var8, var5, var3);
                        var3 = _closure1_slot17;
                        var2 = var3.delete;
                        var2 = var2.bind(var3)(var4);
case 33:
                        return var1;
                    }
                };
                var1['handleIFrameUnmount'] = var4;
                var4 = function(arg1, arg2, arg3) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var10 = arg2;
                        var7 = arg1;
                        var5 = var10;
                        var4 = arg3;
                        var2 = undefined;
                        var3 = undefined;
                        var9 = _closure1_slot17;
                        var8 = var9.get;
                        var3 = var8.bind(var9)(var10);
case 35: // try_start_0
                        var12 = _closure3_slot0;
                        var11 = var12.routeEvent;
                        var16 = var3;
                        var15 = var5;
                        var14 = var7;
                        var13 = var4;
                        var17 = var12;
                        var7 = var17[var11](var16, var15, var14, var13, var12);
case 36: // try_end0
                        _fun0008_ip = 37; continue _fun0008;
case 5: // catch_target0
                        CatchBlockStart(arg_register=7);
                        var1 = var8;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var7 = 14;
                        var7 = var10[var7];
                        var7 = var9.bind(var2)(var7);
                        var7 = var8 instanceof var7;
                        if(!var7) { _fun0008_ip = 38; continue _fun0008 }
case 39:
                        var7 = var1;
                        var8 = var7.errorCode;
                        var7 = _closure1_slot15;
                        var7 = var7.INVALID_PAYLOAD;
                        if(!(var8 !== var7)) { _fun0008_ip = 40; continue _fun0008 }
case 38:
                        var8 = var3;
                        var7 = null;
                        if(!(var7 == var8)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                        var7 = _closure1_slot19;
                        var6 = var5;
                        var5 = {};
                        var8 = var1;
                        var9 = var8.code;
                        var5['code'] = var9;
                        var8 = var8.message;
                        var5['message'] = var8;
                        var4 = var7.bind(var2)(var6, var5, var4);
                        _fun0008_ip = 37; continue _fun0008;
case 41:
                        var7 = _closure3_slot0;
                        var6 = var7.disconnectSocket;
                        var5 = var3;
                        var4 = {};
                        var3 = var1;
                        var8 = var3.code;
                        var4['code'] = var8;
                        var3 = var3.message;
                        var4['message'] = var3;
                        var3 = true;
                        var3 = var6.bind(var7)(var5, var4, var3);
case 37:
                        return var2;
case 40:
                        throw var1;
                    }
                };
                var1['handleMessage'] = var4;
                var4 = function(arg1, arg2, arg3) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = arg2;
                        var2 = var3;
                        var5 = arg3;
                        var4 = undefined;
                        var1 = undefined;
                        var6 = var3.origin;
                        var3 = arg1;
                        if(!(var3 === var6)) { _fun0009_ip = 43; continue _fun0009 }
case 44: // try_start_0
                        var3 = var5;
                        var6 = 'string';
                        var3 = typeof var3;
                        if(!(var6 !== var3)) { _fun0009_ip = 45; continue _fun0009 }
case 17:
                        var3 = var5;
                        _fun0009_ip = 36; continue _fun0009;
case 45:
                        var6 = global;
                        var7 = var6.JSON;
                        var6 = var7.parse;
                        var3 = var6.bind(var7)(var5);
case 36:
                        var1 = var3;
case 3: // try_end0
                        var5 = _closure3_slot0;
                        var6 = var5.onFrameHandled;
                        var5 = null;
                        if(!(var5 != var6)) { _fun0009_ip = 46; continue _fun0009 }
case 47:
                        var9 = _closure3_slot0;
                        var8 = var9.onFrameHandled;
                        var7 = var1;
                        var6 = var9.logger;
                        var5 = var2;
                        var5 = var8.bind(var9)(var7, var6, var5);
case 46:
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var3 = var2;
                        var2 = var1;
                        var1 = 'request';
                        var1 = var5.bind(var6)(var1, var3, var2);
                        return var4;
case 48: // catch_target0
                        CatchBlockStart(arg_register=0);
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 14;
                        var2 = var5[var2];
                        var5 = var3.bind(var4)(var2);
                        var3 = {};
                        var1 = _closure1_slot14;
                        var1 = var1.CLOSE_UNSUPPORTED;
                        var3['closeCode'] = var1;
                        var1 = var5.prototype;
                        var2 = Object.create(var1, {constructor: {value: var5}});
                        var11 = 'Payload not recognized encoding';
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var5](var12, var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
case 43:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 14;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = {};
                        var1 = _closure1_slot14;
                        var1 = var1.INVALID_ORIGIN;
                        var3['closeCode'] = var1;
                        var1 = var4.prototype;
                        var2 = Object.create(var1, {constructor: {value: var4}});
                        var11 = 'Origin has changed';
                        var13 = var2;
                        var12 = var3;
                        var1 = new var13[var4](var12, var11, var10);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    }
                };
                var1['handleFrame'] = var4;
                var4 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1, arg2, arg3) {
                        var1 = function* anon_0_(arg1, arg2, arg3) {
                            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0010_ip = 49; continue _fun0010 }
case 50:
                                var8 = arg1;
                                var11 = arg2;
                                var6 = arg3;
                                var7 = undefined;
                                var12 = undefined;
                                var10 = undefined;
                                var3 = undefined;
                                var9 = undefined;
                                var15 = undefined;
                                var2 = _closure3_slot0;
                                var2 = var2.handshakeFailureTimeoutId;
                                var17 = null;
                                if(!(var17 != var2)) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                                var2 = global;
                                var4 = var2.clearTimeout;
                                var2 = _closure3_slot0;
                                var2 = var2.handshakeFailureTimeoutId;
                                var2 = var4.bind(var7)(var2);
case 51:
                                var14 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var13 = 16;
                                var13 = var2[var13];
                                var14 = var14.bind(var7)(var13);
                                var13 = 15;
                                var13 = var2[var13];
                                var2 = var2.paths;
                                var2 = var14.bind(var7)(var13, var2);
                                SaveGenerator(address=118);
case 53:
                                return var2;
case 54:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=12);
                                if(var13) { _fun0010_ip = 55; continue _fun0010 }
case 38:
                                var12 = var2.default;
case 56: // try_start_0
                                var18 = var12;
                                var16 = var18.assert;
                                var13 = var11;
                                var14 = _closure1_slot1;
                                var19 = _closure1_slot2;
                                var12 = 17;
                                var12 = var19[var12];
                                var12 = var14.bind(var7)(var12);
                                var14 = var12.bind(var7)(var18);
                                var12 = var14.required;
                                var20 = var12.bind(var14)();
                                var19 = var20.keys;
                                var12 = {};
                                var14 = var18.number;
                                var21 = var14.bind(var18)();
                                var14 = var21.min;
                                var22 = 1;
                                var21 = var14.bind(var21)(var22);
                                var14 = var21.max;
                                var21 = var14.bind(var21)(var22);
                                var14 = var21.required;
                                var14 = var14.bind(var21)();
                                var12['v'] = var14;
                                var14 = var18.string;
                                var22 = var14.bind(var18)();
                                var21 = var22.equal;
                                var14 = 'json';
                                var22 = var21.bind(var22)(var14);
                                var21 = var22.optional;
                                var21 = var21.bind(var22)();
                                var12['encoding'] = var21;
                                var21 = var18.string;
                                var22 = var21.bind(var18)();
                                var21 = var22.required;
                                var21 = var21.bind(var22)();
                                var12['client_id'] = var21;
                                var21 = var18.string;
                                var22 = var21.bind(var18)();
                                var21 = var22.required;
                                var21 = var21.bind(var22)();
                                var12['frame_id'] = var21;
                                var21 = var18.string;
                                var22 = var21.bind(var18)();
                                var21 = var22.optional;
                                var21 = var21.bind(var22)();
                                var12['sdk_version'] = var21;
                                var12 = var19.bind(var20)(var12);
                                var12 = var16.bind(var18)(var13, var12);
case 57: // try_end0
                                var3 = var11;
                                var13 = var11.frame_id;
                                var9 = var13;
                                var12 = _closure1_slot18;
                                var11 = var12.has;
                                var11 = var11.bind(var12)(var13);
                                if(var11) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                                var11 = _closure3_slot0;
                                var19 = var11.logger;
                                var16 = var19.error;
                                var18 = var9;
                                var11 = global;
                                var12 = var11.HermesInternal;
                                var13 = var12.concat;
                                var12 = 'Unrecognized frame ID ';
                                var13 = var13.bind(var12)(var18);
                                var13 = var16.bind(var19)(var13);
                                var16 = _closure1_slot1;
                                var19 = _closure1_slot2;
                                var13 = 14;
                                var13 = var19[var13];
                                var16 = var16.bind(var7)(var13);
                                var13 = {};
                                var19 = _closure1_slot14;
                                var19 = var19.CLOSE_UNSUPPORTED;
                                var13['closeCode'] = var19;
                                var11 = var11.HermesInternal;
                                var11 = var11.concat;
                                var24 = var11.bind(var12)(var18);
                                var12 = var16.prototype;
                                var12 = Object.create(var12, {constructor: {value: var16}});
                                var26 = var12;
                                var25 = var13;
                                var11 = new var26[var16](var25, var24, var23);
                                var11 = var11 instanceof Object ? var11 : var12;
                                throw var11;
case 58:
                                var11 = var3;
                                var11 = var11.sdk_version;
                                if(!(var17 != var11)) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                                var12 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var11 = 12;
                                var11 = var13[var11];
                                var16 = var12.bind(var7)(var11);
                                var13 = var16.track;
                                var11 = _closure1_slot12;
                                var12 = var11.ACTIVITY_HANDSHAKE;
                                var11 = {};
                                var18 = var3;
                                var19 = var18.client_id;
                                var11['application_id'] = var19;
                                var18 = var18.sdk_version;
                                var11['sdk_version'] = var18;
                                var11 = var13.bind(var16)(var12, var11);
case 60: // try_start_1
                                var13 = _closure3_slot0;
                                var12 = var13.createPostMessageProxySocket;
                                var11 = {};
                                var16 = var8;
                                var11['origin'] = var16;
                                var11['postMessageToRPCClient'] = var6;
                                var6 = var9;
                                var11['frameId'] = var6;
                                var6 = global;
                                var19 = var6.Number;
                                var16 = var3;
                                var18 = var16.v;
                                var18 = var19.bind(var7)(var18);
                                var11['version'] = var18;
                                var18 = var13.logger;
                                var11['logger'] = var18;
                                var18 = _closure1_slot19;
                                var11['postClose'] = var18;
                                var16 = var16.encoding;
                                var15 = var16;
                                var16 = var17 != var16;
                                if(!var16) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                                var14 = var15;
case 62:
                                var11['encoding'] = var14;
                                var10 = var12.bind(var13)(var11);
case 64: // try_end1
                                var11 = _closure3_slot0;
                                var13 = var11.logger;
                                var12 = var13.info;
                                var11 = var10;
                                var15 = var11.id;
                                var11 = var6.HermesInternal;
                                var14 = var11.concat;
                                var11 = 'Socket Opened: ';
                                var11 = var14.bind(var11)(var15);
                                var11 = var12.bind(var13)(var11);
case 65: // try_start_2
                                var14 = _closure3_slot0;
                                var13 = var14.validateSocketClient;
                                var12 = var10;
                                var11 = var8;
                                var3 = var3.client_id;
                                var3 = var13.bind(var14)(var12, var11, var3);
                                SaveGenerator(address=781);
case 66:
                                return var3;
case 67:
                                ResumeGenerator(result_out_reg=2, return_bool_out_reg=10);
                                if(var11) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                                var13 = _closure1_slot18;
                                var12 = var13.has;
                                var11 = var9;
                                var11 = var12.bind(var13)(var11);
                                if(var11) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                                var11 = _closure3_slot0;
                                var13 = var11.logger;
                                var12 = var13.error;
                                var15 = var9;
                                var11 = var6.HermesInternal;
                                var16 = var11.concat;
                                var14 = 'Frame ID ';
                                var11 = ' no longer exists';
                                var11 = var16.bind(var14)(var15, var11);
                                var11 = var12.bind(var13)(var11);
                                var12 = _closure1_slot1;
                                var13 = _closure1_slot2;
                                var11 = 14;
                                var11 = var13[var11];
                                var14 = var12.bind(var7)(var11);
                                var13 = {};
                                var11 = _closure1_slot14;
                                var11 = var11.CLOSE_UNSUPPORTED;
                                var13['closeCode'] = var11;
                                var11 = var6.HermesInternal;
                                var12 = var11.concat;
                                var11 = 'Unrecognized frame ID ';
                                var24 = var12.bind(var11)(var15);
                                var12 = var14.prototype;
                                var12 = Object.create(var12, {constructor: {value: var14}});
                                var26 = var12;
                                var25 = var13;
                                var11 = new var26[var14](var25, var24, var23);
                                var11 = var11 instanceof Object ? var11 : var12;
                                throw var11;
case 70:
                                var13 = _closure1_slot17;
                                var12 = var13.set;
                                var11 = var8;
                                var8 = var10;
                                var11 = var12.bind(var13)(var11, var8);
                                var12 = _closure1_slot18;
                                var11 = var12.delete;
                                var9 = var11.bind(var12)(var9);
                                var9 = var8.authorization;
                                var12 = var9.scopes;
                                var11 = var12.push;
                                var9 = _closure1_slot11;
                                var9 = var11.bind(var12)(var9);
                                var9 = _closure3_slot0;
                                var12 = var9.emit;
                                var11 = 'connect';
                                var11 = var12.bind(var9)(var11, var8);
                                var11 = var9.logger;
                                var9 = var11.info;
                                var13 = var8.id;
                                var8 = var6.HermesInternal;
                                var12 = var8.concat;
                                var8 = 'Socket Validated: ';
                                var8 = var12.bind(var8)(var13);
                                var8 = var9.bind(var11)(var8);
case 72: // try_end2
                                return var7;
case 68:
                                return var3;
case 73: // catch_target2
                                CatchBlockStart(arg_register=2);
                                var8 = _closure3_slot0;
                                var9 = var8.logger;
                                var8 = var9.info;
                                var13 = var10.id;
                                var12 = var3.message;
                                var6 = var6.HermesInternal;
                                var11 = var6.concat;
                                var10 = 'Socket Closed: ';
                                var6 = ', ';
                                var6 = var11.bind(var10)(var13, var6, var12);
                                var6 = var8.bind(var9)(var6);
                                throw var3;
case 74: // catch_target1
                                CatchBlockStart(arg_register=2);
                                var5 = _closure3_slot0;
                                var8 = var5.logger;
                                var6 = var8.error;
                                var5 = global;
                                var5 = var5.HermesInternal;
                                var9 = var5.concat;
                                var5 = 'Error opening window socket ';
                                var5 = var9.bind(var5)(var3);
                                var5 = var6.bind(var8)(var5);
                                throw var3;
case 75: // catch_target0
                                CatchBlockStart(arg_register=2);
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 14;
                                var5 = var8[var5];
                                var6 = var6.bind(var7)(var5);
                                var5 = {};
                                var4 = _closure1_slot14;
                                var4 = var4.CLOSE_UNSUPPORTED;
                                var5['closeCode'] = var4;
                                var24 = var3.message;
                                var4 = var6.prototype;
                                var4 = Object.create(var4, {constructor: {value: var6}});
                                var26 = var4;
                                var25 = var5;
                                var3 = new var26[var6](var25, var24, var23);
                                var3 = var3 instanceof Object ? var3 : var4;
                                throw var3;
case 55:
                                return var2;
case 49:
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
                var4 = var4.bind(var5)();
                var1['handleHandshake'] = var4;
                var3 = function() {
                    var4 = _closure1_slot3;
                    var3 = undefined;
                    var2 = function* (arg1, arg2) {
                        var1 = function* anon_0_(arg1, arg2) {
                            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0011_ip = 76; continue _fun0011 }
case 50:
                                var5 = arg1;
                                var3 = arg2;
                                var7 = undefined;
                                var6 = undefined;
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var8 = 16;
                                var8 = var2[var8];
                                var9 = var9.bind(var7)(var8);
                                var8 = 15;
                                var8 = var2[var8];
                                var2 = var2.paths;
                                var2 = var9.bind(var7)(var8, var2);
                                SaveGenerator(address=65);
case 27:
                                return var2;
case 77:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                                if(var8) { _fun0011_ip = 78; continue _fun0011 }
case 4:
                                var6 = var2.default;
case 79: // try_start_0
                                var10 = var6;
                                var9 = var10.assert;
                                var8 = var3;
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var6 = 17;
                                var6 = var12[var6];
                                var6 = var11.bind(var7)(var6);
                                var11 = var6.bind(var7)(var10);
                                var6 = var11.required;
                                var12 = var6.bind(var11)();
                                var11 = var12.keys;
                                var6 = {};
                                var13 = var10.number;
                                var15 = var13.bind(var10)();
                                var14 = var15.valid;
                                var13 = global;
                                var17 = var13.Object;
                                var16 = var17.values;
                                var13 = _closure1_slot14;
                                var13 = var16.bind(var17)(var13);
                                var14 = var14.bind(var15)(var13);
                                var13 = var14.required;
                                var13 = var13.bind(var14)();
                                var6['code'] = var13;
                                var13 = var10.string;
                                var14 = var13.bind(var10)();
                                var13 = var14.optional;
                                var13 = var13.bind(var14)();
                                var6['message'] = var13;
                                var6 = var11.bind(var12)(var6);
                                var6 = var9.bind(var10)(var8, var6);
case 80: // try_end0
                                var8 = _closure3_slot0;
                                var6 = var8.disconnectSocket;
                                var3 = var6.bind(var8)(var5, var3);
                                return var7;
case 81: // catch_target0
                                CatchBlockStart(arg_register=2);
                                var6 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 14;
                                var5 = var8[var5];
                                var6 = var6.bind(var7)(var5);
                                var5 = {};
                                var4 = _closure1_slot14;
                                var4 = var4.CLOSE_UNSUPPORTED;
                                var5['closeCode'] = var4;
                                var18 = var3.message;
                                var4 = var6.prototype;
                                var4 = Object.create(var4, {constructor: {value: var6}});
                                var20 = var4;
                                var19 = var5;
                                var3 = new var20[var6](var19, var18, var17);
                                var3 = var3 instanceof Object ? var3 : var4;
                                throw var3;
case 78:
                                return var2;
case 76:
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
                var3 = var3.bind(var5)();
                var1['handleClose'] = var3;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 18;
                var7 = var6[var3];
                var7 = var4.bind(var5)(var7);
                var10 = var7.ComponentDispatch;
                var9 = var10.subscribe;
                var2 = _closure1_slot13;
                var8 = var2.IFRAME_MOUNT;
                var7 = var1.handleIFrameMount;
                var7 = var9.bind(var10)(var8, var7);
                var3 = var6[var3];
                var3 = var4.bind(var5)(var3);
                var5 = var3.ComponentDispatch;
                var4 = var5.subscribe;
                var3 = var2.IFRAME_UNMOUNT;
                var2 = var1.handleIFrameUnmount;
                var2 = var4.bind(var5)(var3, var2);
                var2 = arg1;
                var1['validateSocketClient'] = var2;
                var2 = arg2;
                var1['logger'] = var2;
                var2 = arg3;
                var1['createPostMessageProxySocket'] = var2;
                var2 = arg4;
                var1['onFrameHandled'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot9;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot6;
        var5 = {};
        var6 = 'routeEvent';
        var5['key'] = var6;
        var1 = function value(arg1, arg2, arg3, arg4) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var3 = arg1;
                var7 = arg2;
                var8 = arg3;
                var6 = this;
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var8);
                var4 = undefined;
                if(var1) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                return var4;
case 82:
                var5 = _closure1_slot4;
                var2 = 2;
                var5 = var5.bind(var4)(var8, var2);
                var2 = 0;
                var8 = var5[var2];
                var2 = 1;
                var5 = var5[var2];
                var9 = _closure1_slot1;
                var2 = _closure1_slot2;
                var10 = 11;
                var2 = var2[var10];
                var2 = var9.bind(var4)(var2);
                var2 = var2.HANDSHAKE;
                if(!(var2 !== var8)) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                var9 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var2 = var9.bind(var4)(var2);
                var2 = var2.FRAME;
                if(!(var2 !== var8)) { _fun0012_ip = 86; continue _fun0012 }
case 87:
                var9 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var10];
                var2 = var9.bind(var4)(var2);
                var2 = var2.CLOSE;
                if(!(var2 !== var8)) { _fun0012_ip = 80; continue _fun0012 }
case 88:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 14;
                var2 = var9[var2];
                var10 = var8.bind(var4)(var2);
                var9 = {};
                var2 = _closure1_slot14;
                var2 = var2.CLOSE_UNSUPPORTED;
                var9['closeCode'] = var2;
                var2 = var10.prototype;
                var8 = Object.create(var2, {constructor: {value: var10}});
                var12 = 'Invalid opcode';
                var14 = var8;
                var13 = var9;
                var2 = new var14[var10](var13, var12, var11);
                var2 = var2 instanceof Object ? var2 : var8;
                throw var2;
case 80:
                var2 = null;
                if(!(var2 != var3)) { _fun0012_ip = 89; continue _fun0012 }
case 90:
                var2 = var6.handleClose;
                var2 = var2.bind(var6)(var3, var5);
                return var2;
case 89:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 14;
                var2 = var9[var2];
                var10 = var8.bind(var4)(var2);
                var9 = {};
                var2 = _closure1_slot14;
                var2 = var2.CLOSE_UNSUPPORTED;
                var9['closeCode'] = var2;
                var2 = var10.prototype;
                var8 = Object.create(var2, {constructor: {value: var10}});
                var12 = 'Not connected';
                var14 = var8;
                var13 = var9;
                var2 = new var14[var10](var13, var12, var11);
                var2 = var2 instanceof Object ? var2 : var8;
                throw var2;
case 86:
                var2 = null;
                if(!(var2 != var3)) { _fun0012_ip = 91; continue _fun0012 }
case 76:
                var2 = var6.handleFrame;
                var2 = var2.bind(var6)(var7, var3, var5);
                return var2;
case 91:
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 14;
                var2 = var9[var2];
                var10 = var8.bind(var4)(var2);
                var9 = {};
                var2 = _closure1_slot14;
                var2 = var2.CLOSE_UNSUPPORTED;
                var9['closeCode'] = var2;
                var2 = var10.prototype;
                var8 = Object.create(var2, {constructor: {value: var10}});
                var12 = 'Not connected';
                var14 = var8;
                var13 = var9;
                var2 = new var14[var10](var13, var12, var11);
                var2 = var2 instanceof Object ? var2 : var8;
                throw var2;
case 84:
                var2 = null;
                if(!(var2 == var3)) { _fun0012_ip = 92; continue _fun0012 }
case 93:
                var3 = var6.handleHandshake;
                var2 = arg4;
                var2 = var3.bind(var6)(var7, var5, var2);
                return var2;
case 92:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 14;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = {};
                var1 = _closure1_slot14;
                var1 = var1.CLOSE_UNSUPPORTED;
                var3['closeCode'] = var1;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var12 = 'Already connected';
                var14 = var2;
                var13 = var3;
                var1 = new var14[var4](var13, var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rpc/transports/PostMessageTransport.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
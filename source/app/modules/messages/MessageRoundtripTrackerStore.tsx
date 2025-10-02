// app/modules/messages/MessageRoundtripTrackerStore.tsx
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
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function isCompleted(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.apiResponseTimestamp;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var2.gatewaySeenTimestamp;
            var1 = var3 != var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function trackRoundtrip(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot8;
            var2 = var3.getBasicChannel;
            var1 = var6.channelId;
            var9 = var2.bind(var3)(var1);
            var5 = null;
            if(!(var5 == var9)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var3 = _closure1_slot12;
            var2 = var3.warn;
            var10 = var6.channelId;
            var1 = global;
            var1 = var1.HermesInternal;
            var7 = var1.concat;
            var4 = 'Ignoring a messageData for channel ';
            var1 = " because we can't find that channel.";
            var1 = var7.bind(var4)(var10, var1);
            var1 = var2.bind(var3)(var1);
            _fun0003_ip = 10; continue _fun0003;
case 8:
            var1 = global;
            var2 = var1.Math;
            var1 = var2.random;
            var2 = var1.bind(var2)();
            var1 = 0.1;
            if(!(!(var2 > var1))) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var1 = var6.apiResponseTimestamp;
            var1 = var5 == var1;
            var12 = null;
            if(var1) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var6.apiResponseTimestamp;
            var1 = var6.initialSendTimestamp;
            var12 = var2 - var1;
case 12:
            var1 = var6.gatewaySeenTimestamp;
            var1 = var5 == var1;
            var11 = null;
            if(var1) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var2 = var6.gatewaySeenTimestamp;
            var1 = var6.initialSendTimestamp;
            var11 = var2 - var1;
case 14:
            var2 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 10;
            var1 = var15[var1];
            var13 = undefined;
            var2 = var2.bind(var13)(var1);
            var1 = var2.getSignalStrength;
            var7 = var1.bind(var2)();
            var14 = _closure1_slot1;
            var1 = 11;
            var1 = var15[var1];
            var4 = var14.bind(var13)(var1);
            var3 = var4.track;
            var1 = _closure1_slot11;
            var2 = var1.SEND_MESSAGE_ROUNDTRIP;
            var1 = {};
            var10 = 12;
            var10 = var15[var10];
            var10 = var14.bind(var13)(var10);
            var16 = var10.bind(var13)();
            var17 = var1;
            var10 = copyDataProperties(var17, var16);
            var10 = 'api_latency_ms';
            var1[var10] = var12;
            var10 = 'gateway_latency_ms';
            var1[var10] = var11;
            var11 = var9.id;
            var10 = 'channel_id';
            var1[var10] = var11;
            var11 = var9.type;
            var10 = 'channel_type';
            var1[var10] = var11;
            var11 = var9.guild_id;
            var10 = 'guild_id';
            var1[var10] = var11;
            var11 = _closure1_slot9;
            var10 = var11.getMemberCount;
            var9 = var9.guild_id;
            var10 = var10.bind(var11)(var9);
            var9 = 'guild_size';
            var1[var9] = var10;
            var9 = _closure1_slot10;
            var8 = var9.getType;
            var9 = var8.bind(var9)();
            var8 = 'mobile_network_type';
            var1[var8] = var9;
            var8 = var6.attachmentCount;
            var6 = 'num_attachments';
            var1[var6] = var8;
            var5 = var5 != var7;
            if(!var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var6 = {};
            var6['mobile_signal_strength_level'] = var7;
            var5 = var6;
case 16:
            var17 = var1;
            var16 = var5;
            var5 = copyDataProperties(var17, var16);
            var1 = var3.bind(var4)(var2, var1);
case 10:
            var1 = undefined;
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.AnalyticEvents;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var9 = var7.bind(var1)(var2);
    var2 = var9.prototype;
    var8 = Object.create(var2, {constructor: {value: var9}});
    var12 = 'MessageRoundtripTrackerStore';
    var13 = var8;
    var2 = new var13[var9](var12, var11);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot12 = var2;
    var2 = 13;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function MessageRoundtripTrackerStoreClass(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0004_ip = 20; continue _fun0004;
case 18:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
case 20:
                var1 = var2.bind(var3)(var4, var1);
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var13 = var3;
                var2 = new var13[var2](var12);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['pendingMessages'] = var2;
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
        var1 = 'recordMessageSendAttempt';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var7 = arg2;
                var6 = arguments[2];
                var4 = this;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var7;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var6 = {};
case 21:
                var3 = var6.attachments;
                var8 = null;
                var5 = var8 == var3;
                var9 = undefined;
                if(var5) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var9 = var3.length;
case 23:
                var10 = var8 != var9;
                var3 = 0;
                if(!var10) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var3 = var9;
case 25:
                var9 = var6.attachmentsToUpload;
                var10 = var8 == var9;
                var6 = undefined;
                if(var10) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                var6 = var9.length;
case 27:
                var8 = var8 != var6;
                var5 = 0;
                if(!var8) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                var5 = var6;
case 29:
                var5 = var3 + var5;
                var6 = {'initialSendTimestamp': null, 'apiResponseTimestamp': null, 'gatewaySeenTimestamp': null};
                var3 = global;
                var9 = var3.Date;
                var8 = var9.now;
                var8 = var8.bind(var9)();
                var6['initialSendTimestamp'] = var8;
                var8 = arg1;
                var6['channelId'] = var8;
                var6['attachmentCount'] = var5;
                var5 = var4.pendingMessages;
                var4 = var5.set;
                var4 = var4.bind(var5)(var7, var6);
                var4 = var3.setTimeout;
                var3 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var4 = var2.pendingMessages;
                        var3 = var4.get;
                        var2 = _closure3_slot1;
                        var4 = var3.bind(var4)(var2);
                        var2 = null;
                        if(!(var2 != var4)) { _fun0006_ip = 19; continue _fun0006 }
case 31:
                        var3 = _closure1_slot16;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var4);
                        var2 = _closure3_slot0;
                        var3 = var2.pendingMessages;
                        var2 = var3.delete;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
case 19:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 30000;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'recordMessageSendApiResponse';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.pendingMessages;
                var2 = var4.get;
                var2 = var2.bind(var4)(var3);
                var4 = null;
                if(!(var4 != var2)) { _fun0007_ip = 32; continue _fun0007 }
case 6:
                var5 = {};
                var9 = var5;
                var8 = var2;
                var2 = copyDataProperties(var9, var8);
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var4 = var2.bind(var4)();
                var2 = 'apiResponseTimestamp';
                var5[var2] = var4;
                var6 = _closure1_slot15;
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                if(var6) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                var7 = var1.pendingMessages;
                var6 = var7.set;
                var6 = var6.bind(var7)(var3, var5);
                _fun0007_ip = 32; continue _fun0007;
case 33:
                var2 = _closure1_slot16;
                var2 = var2.bind(var4)(var5);
                var2 = var1.pendingMessages;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 32:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'recordGatewayResponse';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.pendingMessages;
                var2 = var4.get;
                var2 = var2.bind(var4)(var3);
                var4 = null;
                if(!(var4 != var2)) { _fun0008_ip = 32; continue _fun0008 }
case 6:
                var5 = {};
                var9 = var5;
                var8 = var2;
                var2 = copyDataProperties(var9, var8);
                var2 = global;
                var4 = var2.Date;
                var2 = var4.now;
                var4 = var2.bind(var4)();
                var2 = 'gatewaySeenTimestamp';
                var5[var2] = var4;
                var6 = _closure1_slot15;
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                if(var6) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                var7 = var1.pendingMessages;
                var6 = var7.set;
                var6 = var6.bind(var7)(var3, var5);
                _fun0008_ip = 32; continue _fun0008;
case 33:
                var2 = _closure1_slot16;
                var2 = var2.bind(var4)(var5);
                var2 = var1.pendingMessages;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 32:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var8);
    var2 = 14;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var7 = function handleMessageCreate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var1 = var2.optimistic;
            var2 = var2.message;
            var3 = var2.nonce;
            if(var1) { _fun0009_ip = 35; continue _fun0009 }
case 36:
            var2 = null;
            var1 = var2 == var3;
case 35:
            if(var1) { _fun0009_ip = 37; continue _fun0009 }
case 9:
            var2 = _closure1_slot13;
            var1 = var2.recordGatewayResponse;
            var1 = var1.bind(var2)(var3);
case 37:
            var1 = undefined;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var13 = var7;
    var11 = var2;
    var2 = new var13[var9](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot13 = var2;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageRoundtripTrackerStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/messages/MessageRoundtripTrackerStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var1 = function isCompleted(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.apiResponseTimestamp;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0002_ip = 28; continue _fun0002 }
 18:
            var2 = var2.gatewaySeenTimestamp;
            var1 = var3 != var2;
 28:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function trackRoundtrip(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot8;
            var3 = var4.getBasicChannel;
            var2 = var1.channelId;
            var8 = var3.bind(var4)(var2);
            var5 = null;
            if(!(var5 == var8)) { _fun0003_ip = 87; continue _fun0003 }
 32:
            var4 = _closure1_slot12;
            var3 = var4.warn;
            var10 = var1.channelId;
            var2 = global;
            var2 = var2.HermesInternal;
            var9 = var2.concat;
            var7 = 'Ignoring a messageData for channel ';
            var2 = " because we can't find that channel.";
            var2 = var9.bind(var7)(var10, var2);
            var2 = var3.bind(var4)(var2);
            _fun0003_ip = 423; continue _fun0003;
 87:
            var2 = global;
            var3 = var2.Math;
            var2 = var3.random;
            var3 = var2.bind(var3)();
            var2 = 0.1;
            if(!(!(var3 > var2))) { _fun0003_ip = 423; continue _fun0003 }
 122:
            var2 = var1.apiResponseTimestamp;
            var2 = var5 == var2;
            var11 = null;
            if(var2) { _fun0003_ip = 153; continue _fun0003 }
 137:
            var3 = var1.apiResponseTimestamp;
            var2 = var1.initialSendTimestamp;
            var11 = var3 - var2;
 153:
            var2 = var1.gatewaySeenTimestamp;
            var2 = var5 == var2;
            var10 = null;
            if(var2) { _fun0003_ip = 184; continue _fun0003 }
 168:
            var2 = var1.gatewaySeenTimestamp;
            var1 = var1.initialSendTimestamp;
            var10 = var2 - var1;
 184:
            var2 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 10;
            var1 = var14[var1];
            var12 = undefined;
            var2 = var2.bind(var12)(var1);
            var1 = var2.getSignalStrength;
            var7 = var1.bind(var2)();
            var13 = _closure1_slot1;
            var1 = 11;
            var1 = var14[var1];
            var4 = var13.bind(var12)(var1);
            var3 = var4.track;
            var1 = _closure1_slot11;
            var2 = var1.SEND_MESSAGE_ROUNDTRIP;
            var1 = {};
            var9 = 12;
            var9 = var14[var9];
            var9 = var13.bind(var12)(var9);
            var15 = var9.bind(var12)();
            var16 = var1;
            var9 = copyDataProperties(var16, var15);
            var9 = 'api_latency_ms';
            var1[var9] = var11;
            var9 = 'gateway_latency_ms';
            var1[var9] = var10;
            var10 = var8.id;
            var9 = 'channel_id';
            var1[var9] = var10;
            var10 = var8.type;
            var9 = 'channel_type';
            var1[var9] = var10;
            var10 = var8.guild_id;
            var9 = 'guild_id';
            var1[var9] = var10;
            var10 = _closure1_slot9;
            var9 = var10.getMemberCount;
            var8 = var8.guild_id;
            var9 = var9.bind(var10)(var8);
            var8 = 'guild_size';
            var1[var8] = var9;
            var8 = _closure1_slot10;
            var6 = var8.getType;
            var8 = var6.bind(var8)();
            var6 = 'mobile_network_type';
            var1[var6] = var8;
            var5 = var5 != var7;
            if(!var5) { _fun0003_ip = 407; continue _fun0003 }
 397:
            var6 = {};
            var6['mobile_signal_strength_level'] = var7;
            var5 = var6;
 407:
            var16 = var1;
            var15 = var5;
            var5 = copyDataProperties(var16, var15);
            var1 = var3.bind(var4)(var2, var1);
 423:
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
 0:
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
                if(var1) { _fun0004_ip = 84; continue _fun0004 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0004_ip = 118; continue _fun0004;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
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
            var6 = arg2;
            var3 = this;
            var _closure3_slot0 = var3;
            var _closure3_slot1 = var6;
            var5 = {'initialSendTimestamp': null, 'apiResponseTimestamp': null, 'gatewaySeenTimestamp': null};
            var1 = global;
            var7 = var1.Date;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var5['initialSendTimestamp'] = var4;
            var4 = arg1;
            var5['channelId'] = var4;
            var4 = var3.pendingMessages;
            var3 = var4.set;
            var3 = var3.bind(var4)(var6, var5);
            var4 = var1.setTimeout;
            var1 = undefined;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var2 = _closure3_slot0;
                    var4 = var2.pendingMessages;
                    var3 = var4.get;
                    var2 = _closure3_slot1;
                    var4 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var4)) { _fun0005_ip = 71; continue _fun0005 }
 33:
                    var3 = _closure1_slot16;
                    var2 = undefined;
                    var2 = var3.bind(var2)(var4);
                    var2 = _closure3_slot0;
                    var3 = var2.pendingMessages;
                    var2 = var3.delete;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
 71:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = 30000;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'recordMessageSendApiResponse';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.pendingMessages;
                var2 = var4.get;
                var2 = var2.bind(var4)(var3);
                var4 = null;
                if(!(var4 != var2)) { _fun0006_ip = 127; continue _fun0006 }
 28:
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
                if(var6) { _fun0006_ip = 102; continue _fun0006 }
 83:
                var7 = var1.pendingMessages;
                var6 = var7.set;
                var6 = var6.bind(var7)(var3, var5);
                _fun0006_ip = 127; continue _fun0006;
 102:
                var2 = _closure1_slot16;
                var2 = var2.bind(var4)(var5);
                var2 = var1.pendingMessages;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
 127:
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.pendingMessages;
                var2 = var4.get;
                var2 = var2.bind(var4)(var3);
                var4 = null;
                if(!(var4 != var2)) { _fun0007_ip = 127; continue _fun0007 }
 28:
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
                if(var6) { _fun0007_ip = 102; continue _fun0007 }
 83:
                var7 = var1.pendingMessages;
                var6 = var7.set;
                var6 = var6.bind(var7)(var3, var5);
                _fun0007_ip = 127; continue _fun0007;
 102:
                var2 = _closure1_slot16;
                var2 = var2.bind(var4)(var5);
                var2 = var1.pendingMessages;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
 127:
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
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = var2.optimistic;
            var2 = var2.message;
            var3 = var2.nonce;
            if(var1) { _fun0008_ip = 29; continue _fun0008 }
 23:
            var2 = null;
            var1 = var2 == var3;
 29:
            if(var1) { _fun0008_ip = 52; continue _fun0008 }
 32:
            var2 = _closure1_slot13;
            var1 = var2.recordGatewayResponse;
            var1 = var1.bind(var2)(var3);
 52:
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
// app/stores/CallStore.tsx
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
    var1 = function callConnect() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arguments[0];
            var4 = arguments[1];
            var3 = undefined;
            if(!(var2 === var3)) { _fun0002_ip = 14; continue _fun0002 }
 12:
            var2 = false;
 14:
            if(!(var4 === var3)) { _fun0002_ip = 35; continue _fun0002 }
 18:
            var5 = _closure1_slot9;
            var1 = var5.getChannelId;
            var4 = var1.bind(var5)();
 35:
            var6 = _closure1_slot8;
            var5 = var6.getChannel;
            var7 = var5.bind(var6)(var4);
            var6 = null;
            if(!(var6 != var7)) { _fun0002_ip = 91; continue _fun0002 }
 58:
            var5 = var7.getGuildId;
            var5 = var5.bind(var7)();
            if(!(var6 == var5)) { _fun0002_ip = 91; continue _fun0002 }
 72:
            if(!(var6 != var4)) { _fun0002_ip = 91; continue _fun0002 }
 76:
            var5 = _closure1_slot12;
            var5 = var5[var4];
            if(!(var6 != var5)) { _fun0002_ip = 95; continue _fun0002 }
 88:
            if(var2) { _fun0002_ip = 95; continue _fun0002 }
 91:
            var2 = false;
            return var2;
 95:
            var5 = _closure1_slot12;
            var2 = var5[var4];
            if(!(var6 == var2)) { _fun0002_ip = 125; continue _fun0002 }
 107:
            var6 = {};
            var6['channelId'] = var4;
            var7 = new Array(0);
            var6['ringing'] = var7;
            var2 = var6;
 125:
            var5[var4] = var2;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var3 = var2.bind(var3)(var1);
            var2 = var3.dispatch;
            var1 = {};
            var5 = 'CALL_CONNECT';
            var1['type'] = var5;
            var1['channelId'] = var4;
            var1 = var2.bind(var3)(var1);
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var2 = var2.Endpoints;
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = {};
    var _closure1_slot13 = var2;
    var2 = 12;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function CallStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
                var1 = _closure1_slot14;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 69; continue _fun0003 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 105; continue _fun0003;
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
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot10;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCall';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getCalls';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot12;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var2 = var3.getCall;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0004_ip = 31; continue _fun0004 }
 26:
                var1 = var2.messageId;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'isCallActive';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg2;
                var2 = _closure1_slot12;
                var1 = arg1;
                var3 = var2[var1];
                var5 = null;
                var1 = var5 != var3;
                if(!var1) { _fun0005_ip = 35; continue _fun0005 }
 26:
                var2 = var3.unavailable;
                var1 = !var2;
 35:
                if(!var1) { _fun0005_ip = 66; continue _fun0005 }
 38:
                if(!(var5 == var4)) { _fun0005_ip = 54; continue _fun0005 }
 42:
                var2 = var3.region;
                var2 = var5 != var2;
                _fun0005_ip = 63; continue _fun0005;
 54:
                var3 = var3.messageId;
                var2 = var3 === var4;
 63:
                var1 = var2;
 66:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isCallUnavailable';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = _closure1_slot12;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 29; continue _fun0006 }
 23:
                var1 = var2.unavailable;
 29:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getInternalState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = {};
            var3 = _closure1_slot12;
            var1['calls'] = var3;
            var2 = _closure1_slot13;
            var1['enqueuedRings'] = var2;
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'CallStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleConnectionOpen() {
        var3 = _closure1_slot15;
        var2 = undefined;
        var1 = true;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['CONNECTION_OPEN'] = var9;
    var9 = function handleConnectionClosed() {
        var1 = {};
        _closure1_slot12 = var1;
        var1 = {};
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_CLOSED'] = var9;
    var9 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.callStoreInternalState;
        var1 = {};
        var4 = var3.calls;
        var5 = var1;
        var2 = copyDataProperties(var5, var4);
        _closure1_slot12 = var1;
        var1 = {};
        var4 = var3.enqueuedRings;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot13 = var1;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var9;
    var9 = function handleConnectionResumed() {
        var3 = _closure1_slot15;
        var2 = undefined;
        var1 = true;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var2['CONNECTION_RESUMED'] = var9;
    var9 = function handleChannelSelect(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = _closure1_slot15;
        var2 = undefined;
        var1 = false;
        var1 = var3.bind(var2)(var1, var4);
        return var1;
    };
    var2['CHANNEL_SELECT'] = var9;
    var9 = function handleChannelDelete(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = _closure1_slot13;
            var3 = var1.id;
            var3 = var4[var3];
            var4 = null;
            if(!(var4 != var3)) { _fun0007_ip = 43; continue _fun0007 }
 30:
            var5 = _closure1_slot13;
            var3 = var1.id;
            var3 = delete var5[var3];
 43:
            var5 = _closure1_slot12;
            var3 = var1.id;
            var3 = var5[var3];
            if(!(var4 != var3)) { _fun0007_ip = 77; continue _fun0007 }
 60:
            var2 = _closure1_slot12;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
 77:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleCallCreate(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var6 = var1.messageId;
            var5 = var1.region;
            var3 = var1.ringing;
            var2 = _closure1_slot12;
            var1 = {};
            var1['channelId'] = var7;
            var1['messageId'] = var6;
            var1['region'] = var5;
            var1['ringing'] = var3;
            var3 = false;
            var1['unavailable'] = var3;
            var1['regionUpdated'] = var3;
            var2[var7] = var1;
            var1 = _closure1_slot13;
            var2 = var1[var7];
            var1 = null;
            if(!(var1 != var2)) { _fun0008_ip = 206; continue _fun0008 }
 85:
            var2 = _closure1_slot13;
            var5 = var2[var7];
            var2 = _closure1_slot13;
            var2 = delete var2[var7];
            var3 = var5.indexOf;
            var2 = 'all';
            var3 = var3.bind(var5)(var2);
            var2 = 1;
            if(!(var2 !== var3)) { _fun0008_ip = 125; continue _fun0008 }
 123:
            var5 = null;
 125:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {};
            var6 = _closure1_slot11;
            var4 = var6.CALL_RING;
            var4 = var4.bind(var6)(var7);
            var1['url'] = var4;
            var4 = {};
            var4['recipients'] = var5;
            var1['body'] = var4;
            var4 = true;
            var1['oldFormErrors'] = var4;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
 206:
            var1 = undefined;
            return var1;
        }
    };
    var2['CALL_CREATE'] = var9;
    var9 = function handleCallUpdate(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var3 = var1.channelId;
            var8 = var1.messageId;
            var7 = var1.region;
            var6 = var1.ringing;
            var2 = _closure1_slot12;
            var4 = var2[var3];
            var2 = null;
            var5 = var2 != var4;
            if(!var5) { _fun0009_ip = 67; continue _fun0009 }
 45:
            var2 = var4.regionUpdated;
            if(var2) { _fun0009_ip = 64; continue _fun0009 }
 54:
            var4 = var4.region;
            var2 = var4 !== var7;
 64:
            var5 = var2;
 67:
            var2 = _closure1_slot12;
            var1 = {};
            var10 = var2[var3];
            var11 = var1;
            var4 = copyDataProperties(var11, var10);
            var4 = 'messageId';
            var1[var4] = var8;
            var4 = 'region';
            var1[var4] = var7;
            var4 = 'ringing';
            var1[var4] = var6;
            var4 = 'regionUpdated';
            var1[var4] = var5;
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var2['CALL_UPDATE'] = var9;
    var9 = function handleCallDelete(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var7 = var1.unavailable;
            var3 = _closure1_slot12;
            var6 = var3[var2];
            var4 = _closure1_slot12;
            var3 = true;
            if(!(var3 === var7)) { _fun0010_ip = 41; continue _fun0010 }
 35:
            var3 = null;
            if(!(var3 == var6)) { _fun0010_ip = 78; continue _fun0010 }
 41:
            var3 = {'channelId': null, 'ringing': null, 'messageId': null, 'region': null, 'regionUpdated': false};
            var3['channelId'] = var2;
            var5 = new Array(0);
            var3['ringing'] = var5;
            var3['unavailable'] = var7;
            _fun0010_ip = 102; continue _fun0010;
 78:
            var5 = {};
            var9 = var5;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var6 = 'unavailable';
            var5[var6] = var7;
            var3 = var5;
 102:
            var4[var2] = var3;
            var3 = _closure1_slot13;
            var4 = var3[var2];
            var3 = null;
            if(!(var3 != var4)) { _fun0010_ip = 128; continue _fun0010 }
 120:
            var1 = _closure1_slot13;
            var1 = delete var1[var2];
 128:
            var1 = undefined;
            return var1;
        }
    };
    var2['CALL_DELETE'] = var9;
    var9 = function handleCallEnqueueRing(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var7 = var1.recipients;
            var3 = _closure1_slot13;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 11;
            var5 = var5[var1];
            var1 = undefined;
            var6 = var6.bind(var1)(var5);
            var5 = var6.union;
            var2 = _closure1_slot13;
            var2 = var2[var4];
            var8 = null;
            if(!(var8 == var2)) { _fun0011_ip = 67; continue _fun0011 }
 63:
            var2 = new Array(0);
 67:
            if(!(var8 == var7)) { _fun0011_ip = 81; continue _fun0011 }
 71:
            var7 = ['all'];
 81:
            var2 = var5.bind(var6)(var2, var7);
            var3[var4] = var2;
            return var1;
        }
    };
    var2['CALL_ENQUEUE_RING'] = var9;
    var4 = function handleVoiceChannelSelect(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var1 = null;
            if(!(var1 == var2)) { _fun0012_ip = 23; continue _fun0012 }
 14:
            var1 = {};
            _closure1_slot13 = var1;
 23:
            var1 = undefined;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/CallStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
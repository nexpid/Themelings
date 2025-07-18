// app/modules/rtc/SecureFramesVerifiedStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
            var9 = _closure1_slot19;
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
            var7 = _closure1_slot19;
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
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var1 = function computeStreamVerifications() {
        var2 = _closure1_slot9;
        var1 = var2.getAllActiveStreamKeys;
        var4 = var1.bind(var2)();
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg1;
                var6 = arg2;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 12;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.decodeStreamKey;
                var3 = var3.bind(var4)(var6);
                var5 = var3.ownerId;
                var4 = _closure1_slot13;
                var3 = var4.get;
                var4 = var3.bind(var4)(var5);
                var3 = true;
                var5 = var3 === var4;
                var4 = _closure1_slot14;
                var3 = var4.get;
                var3 = var3.bind(var4)(var6);
                var3 = var3 !== var5;
                var4 = _closure1_slot14;
                var1 = var4.set;
                var1 = var1.bind(var4)(var6, var5);
                var1 = !var3;
                var1 = !var1;
                if(var3) { _fun0005_ip = 113; continue _fun0005 }
 110:
                var1 = var2;
 113:
                return var1;
            }
        };
        var1 = false;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function computeCallVerification() {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = _closure1_slot8;
            var1 = var2.getUserIds;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!(var1 == var2)) { _fun0006_ip = 51; continue _fun0006 }
 23:
            var1 = global;
            var1 = var1.Set;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var13 = var4;
            var1 = new var13[var1](var12);
            var2 = var1 instanceof Object ? var1 : var4;
 51:
            var4 = _closure1_slot7;
            var1 = var4.getId;
            var9 = var1.bind(var4)();
            var1 = _closure1_slot18;
            var8 = undefined;
            var7 = var1.bind(var8)(var2);
            var2 = var7.bind(var8)();
            var1 = var2.done;
            var6 = true;
            var4 = var2;
            var2 = true;
            if(var1) { _fun0006_ip = 141; continue _fun0006 }
 95:
            var11 = var4.value;
            if(!(var9 !== var11)) { _fun0006_ip = 124; continue _fun0006 }
 104:
            var10 = _closure1_slot13;
            var1 = var10.get;
            var1 = var1.bind(var10)(var11);
            var2 = false;
            if(!(var6 === var1)) { _fun0006_ip = 141; continue _fun0006 }
 124:
            var10 = var7.bind(var8)();
            var1 = var10.done;
            var4 = var10;
            var2 = true;
            if(!var1) { _fun0006_ip = 95; continue _fun0006 }
 141:
            var1 = _closure1_slot15;
            _closure1_slot15 = var2;
            var1 = var2 !== var1;
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var4 = function handleUserUpdate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var7 = var1.userId;
            var3 = _closure1_slot7;
            var1 = var3.getId;
            var1 = var1.bind(var3)();
            if(!(var1 !== var7)) { _fun0007_ip = 252; continue _fun0007 }
 32:
            var3 = _closure1_slot8;
            var1 = var3.getSecureFramesRosterMapEntry;
            var5 = var1.bind(var3)(var7);
            var1 = null;
            var3 = var1 == var5;
            var1 = false;
            if(var3) { _fun0007_ip = 220; continue _fun0007 }
 61:
            var3 = global;
            var3 = var3.Uint8Array;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var11 = var4;
            var10 = var5;
            var3 = new var11[var3](var10, var9);
            var5 = var3 instanceof Object ? var3 : var4;
            var4 = _closure1_slot11;
            var3 = var4.isKeyVerified;
            var6 = var3.bind(var4)(var7, var5);
            if(var6) { _fun0007_ip = 127; continue _fun0007 }
 111:
            var4 = _closure1_slot10;
            var3 = var4.isKeyVerified;
            var6 = var3.bind(var4)(var7, var5);
 127:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 11;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.getIsSecureFramesKeyInconsistent;
            var8 = _closure1_slot8;
            var3 = new Array(2);
            var3[0] = var8;
            var8 = _closure1_slot9;
            var3[1] = var8;
            var3 = var4.bind(var5)(var7, var3);
            if(!var6) { _fun0007_ip = 187; continue _fun0007 }
 184:
            var6 = !var3;
 187:
            var4 = _closure1_slot13;
            var3 = var4.get;
            var3 = var3.bind(var4)(var7);
            var1 = var6 !== var3;
            var5 = _closure1_slot13;
            var4 = var5.set;
            var4 = var4.bind(var5)(var7, var6);
 220:
            var3 = _closure1_slot20;
            var4 = undefined;
            var3 = var3.bind(var4)();
            var2 = _closure1_slot21;
            var2 = var2.bind(var4)();
            if(var1) { _fun0007_ip = 244; continue _fun0007 }
 241:
            var1 = var3;
 244:
            if(var1) { _fun0007_ip = 250; continue _fun0007 }
 247:
            var1 = var2;
 250:
            return var1;
 252:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var10 = function handleReset() {
        var3 = _closure1_slot13;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot14;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = false;
        _closure1_slot15 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot23 = var10;
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RTCConnectionStates;
    var _closure1_slot12 = var8;
    var8 = var2.Map;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var16 = var11;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot13 = var8;
    var2 = var2.Map;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot14 = var2;
    var2 = false;
    var _closure1_slot15 = var2;
    var2 = null;
    var _closure1_slot16 = var2;
    var2 = 14;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function SecureFramesVerifiedStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot17;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 69; continue _fun0008 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 105; continue _fun0008;
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
            var6 = this;
            var5 = var6.waitFor;
            var10 = _closure1_slot10;
            var9 = _closure1_slot11;
            var8 = _closure1_slot8;
            var7 = _closure1_slot9;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'isCallVerified';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isStreamVerified';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot14;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isUserVerified';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot13;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'SecureFramesVerifiedStore';
    var8['displayName'] = var2;
    var2 = 15;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleVoiceChannelSelect(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var2 = var1.channelId;
            var3 = _closure1_slot16;
            if(!(var2 !== var3)) { _fun0009_ip = 35; continue _fun0009 }
 19:
            _closure1_slot16 = var2;
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 35:
            var1 = false;
            return var1;
        }
    };
    var2['VOICE_CHANNEL_SELECT'] = var10;
    var10 = function handleRtcConnectionState(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var1 = arg1;
            var6 = var1.streamKey;
            var3 = var1.state;
            var4 = var1.context;
            var1 = _closure1_slot12;
            var1 = var1.DISCONNECTED;
            if(!(var3 === var1)) { _fun0010_ip = 150; continue _fun0010 }
 36:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var7 = 13;
            var1 = var1[var7];
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            var1 = var1.MediaEngineContextTypes;
            var1 = var1.STREAM;
            if(!(var1 !== var4)) { _fun0010_ip = 117; continue _fun0010 }
 74:
            var5 = _closure1_slot0;
            var1 = _closure1_slot1;
            var1 = var1[var7];
            var1 = var5.bind(var3)(var1);
            var1 = var1.MediaEngineContextTypes;
            var1 = var1.DEFAULT;
            if(!(var1 === var4)) { _fun0010_ip = 115; continue _fun0010 }
 107:
            var1 = _closure1_slot23;
            var1 = var1.bind(var3)();
 115:
            return var3;
 117:
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0010_ip = 148; continue _fun0010 }
 126:
            var5 = _closure1_slot14;
            var4 = var5.delete;
            var4 = var4.bind(var5)(var6);
            var2 = _closure1_slot21;
            var1 = var2.bind(var3)();
 148:
            return var1;
 150:
            var1 = false;
            return var1;
        }
    };
    var2['RTC_CONNECTION_STATE'] = var10;
    var9 = function handleBulkUserUpdate(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var5 = var2.userIds;
            var4 = _closure1_slot7;
            var3 = var4.getId;
            var3 = var3.bind(var4)();
            var _closure2_slot0 = var3;
            var4 = var5.reduce;
            var3 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var3 = arg1;
                    var2 = arg2;
                    var4 = _closure2_slot0;
                    var1 = var3;
                    if(!(var4 !== var2)) { _fun0012_ip = 55; continue _fun0012 }
 20:
                    var5 = _closure1_slot22;
                    var4 = {};
                    var4['userId'] = var2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var4 = !var2;
                    var2 = !var4;
                    if(!var4) { _fun0012_ip = 52; continue _fun0012 }
 49:
                    var2 = var3;
 52:
                    var1 = var2;
 55:
                    return var1;
                }
            };
            var1 = false;
            var1 = var4.bind(var5)(var3, var1);
            var3 = _closure1_slot20;
            var4 = undefined;
            var3 = var3.bind(var4)();
            var2 = _closure1_slot21;
            var2 = var2.bind(var4)();
            if(var1) { _fun0011_ip = 75; continue _fun0011 }
 72:
            var1 = var3;
 75:
            if(var1) { _fun0011_ip = 81; continue _fun0011 }
 78:
            var1 = var2;
 81:
            return var1;
        }
    };
    var2['RTC_CONNECTION_ROSTER_MAP_UPDATE'] = var9;
    var2['SECURE_FRAMES_TRANSIENT_KEY_CREATE'] = var4;
    var2['SECURE_FRAMES_TRANSIENT_KEY_DELETE'] = var4;
    var2['SECURE_FRAMES_VERIFIED_KEY_CREATE'] = var4;
    var2['SECURE_FRAMES_VERIFIED_KEY_DELETE'] = var4;
    var2['SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/rtc/SecureFramesVerifiedStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
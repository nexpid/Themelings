// app/stores/SlowmodeStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
            var9 = _closure1_slot15;
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
            var7 = _closure1_slot15;
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
    var _closure1_slot14 = var1;
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
    var _closure1_slot15 = var1;
    var1 = function setCooldown(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var4 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var4;
            var5 = _closure1_slot12;
            var6 = var5[var4];
            var5 = var2.id;
            var6 = var6[var5];
            var5 = null;
            if(!(var5 != var6)) { _fun0005_ip = 95; continue _fun0005 }
 45:
            var5 = _closure1_slot12;
            var6 = var5[var4];
            var5 = var2.id;
            var5 = var6[var5];
            var6 = var5.timer;
            var5 = var6.stop;
            var5 = var5.bind(var6)();
            var5 = _closure1_slot12;
            var6 = var5[var4];
            var5 = var2.id;
            var5 = delete var6[var5];
 95:
            var5 = _closure1_slot11;
            var5 = var5.SendMessage;
            if(!(var4 !== var5)) { _fun0005_ip = 137; continue _fun0005 }
 109:
            var7 = _closure1_slot9;
            var6 = var7.can;
            var5 = _closure1_slot10;
            var5 = var5.MANAGE_THREADS;
            var5 = var6.bind(var7)(var5, var2);
            _fun0005_ip = 195; continue _fun0005;
 137:
            var8 = _closure1_slot9;
            var7 = var8.can;
            var6 = _closure1_slot10;
            var6 = var6.MANAGE_CHANNELS;
            var6 = var7.bind(var8)(var6, var2);
            if(var6) { _fun0005_ip = 192; continue _fun0005 }
 166:
            var10 = _closure1_slot9;
            var8 = var10.can;
            var7 = _closure1_slot10;
            var7 = var7.MANAGE_MESSAGES;
            var6 = var8.bind(var10)(var7, var2);
 192:
            var5 = var6;
 195:
            if(var5) { _fun0005_ip = 378; continue _fun0005 }
 201:
            var5 = 0;
            if(!(!(var9 <= var5))) { _fun0005_ip = 378; continue _fun0005 }
 210:
            var5 = global;
            var6 = var5.Date;
            var5 = var6.now;
            var5 = var5.bind(var6)();
            var8 = var9 + var5;
            var _closure2_slot2 = var8;
            var5 = _closure1_slot12;
            var7 = var5[var4];
            var6 = var2.id;
            var5 = {};
            var10 = var2.rateLimitPerUser;
            var5['rateLimitPerUser'] = var10;
            var5['cooldownMs'] = var9;
            var5['cooldownEndTimestamp'] = var8;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var8 = 8;
            var9 = var9[var8];
            var8 = undefined;
            var8 = var10.bind(var8)(var9);
            var8 = var8.Timeout;
            var9 = var8.prototype;
            var9 = Object.create(var9, {constructor: {value: var8}});
            var14 = var9;
            var8 = new var14[var8](var13);
            var8 = var8 instanceof Object ? var8 : var9;
            var5['timer'] = var8;
            var7[var6] = var5;
            var3 = _closure1_slot12;
            var3 = var3[var4];
            var2 = var2.id;
            var2 = var3[var2];
            var5 = var2.timer;
            var4 = var5.start;
            var3 = 1000;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'SLOWMODE_SET_COOLDOWN';
                var2['type'] = var5;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var5 = _closure2_slot1;
                var2['slowmodeType'] = var5;
                var5 = global;
                var8 = var5.Math;
                var7 = var8.max;
                var6 = _closure2_slot2;
                var9 = var5.Date;
                var5 = var9.now;
                var5 = var5.bind(var9)();
                var6 = var6 - var5;
                var5 = 0;
                var5 = var7.bind(var8)(var6, var5);
                var2['cooldownMs'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = true;
            var1 = var4.bind(var5)(var3, var2, var1);
 378:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function resetCooldown(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0006_ip = 107; continue _fun0006 }
 26:
            var4 = _closure1_slot16;
            var2 = var5.rateLimitPerUser;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0006_ip = 93; continue _fun0006 }
 42:
            var2 = var5.rateLimitPerUser;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 10;
            var6 = var6[var1];
            var1 = undefined;
            var1 = var7.bind(var1)(var6);
            var1 = var1.Millis;
            var1 = var1.SECOND;
            var2 = var2 * var1;
            var1 = 100;
            var3 = var2 + var1;
 93:
            var1 = undefined;
            var2 = arg2;
            var2 = var4.bind(var1)(var5, var2, var3);
            return var1;
 107:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var10 = function handleUploadCancel(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = var3.getChannel;
            var6 = var1.bind(var3)(var4);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0007_ip = 61; continue _fun0007 }
 34:
            var5 = _closure1_slot16;
            var2 = _closure1_slot11;
            var4 = var2.SendMessage;
            var2 = undefined;
            var3 = 0;
            var3 = var5.bind(var2)(var6, var4, var3);
            var1 = undefined;
 61:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var4 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var9)(var3, var1, var2);
    var11 = 0;
    var2 = var7[var11];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var9 = 1;
    var2 = var7[var9];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.Permissions;
    var _closure1_slot10 = var2;
    var2 = {};
    var2['SendMessage'] = var11;
    var4 = 'SendMessage';
    var2[var11] = var4;
    var2['CreateThread'] = var9;
    var4 = 'CreateThread';
    var2[var9] = var4;
    var _closure1_slot11 = var2;
    var4 = {};
    var11 = var2.SendMessage;
    var9 = {};
    var4[var11] = var9;
    var11 = var2.CreateThread;
    var9 = {};
    var4[var11] = var9;
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function SlowmodeStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                var1 = _closure1_slot13;
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
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'getSlowmodeCooldownGuess';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg2;
                var2 = _closure1_slot12;
                var1 = null;
                if(!(var1 == var3)) { _fun0009_ip = 26; continue _fun0009 }
 16:
                var4 = _closure1_slot11;
                var3 = var4.SendMessage;
 26:
                var3 = var2[var3];
                var2 = arg1;
                var2 = var3[var2];
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0009_ip = 52; continue _fun0009 }
 46:
                var1 = var2.cooldownMs;
 52:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isChannelOnCooldown';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var4 = var5.getSlowmodeCooldownGuess;
                var3 = var2.id;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var1);
                var3 = 0;
                var1 = var1 > var3;
                if(!var1) { _fun0010_ip = 45; continue _fun0010 }
 35:
                var2 = var2.rateLimitPerUser;
                var1 = var2 > var3;
 45:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SlowmodeStore';
    var9['displayName'] = var4;
    var4 = 9;
    var4 = var7[var4];
    var14 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleSlowmodeResetCooldown(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.slowmodeType;
        var2 = _closure1_slot17;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var4['SLOWMODE_RESET_COOLDOWN'] = var11;
    var11 = function handleSlowmodeSetCooldown(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.slowmodeType;
            var6 = var1.cooldownMs;
            var3 = _closure1_slot8;
            var2 = var3.getChannel;
            var4 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var4)) { _fun0011_ip = 71; continue _fun0011 }
 43:
            var3 = _closure1_slot16;
            var2 = 0;
            if(!(var2 !== var6)) { _fun0011_ip = 60; continue _fun0011 }
 53:
            var1 = 100;
            var2 = var6 + var1;
 60:
            var1 = undefined;
            var2 = var3.bind(var1)(var4, var5, var2);
            return var1;
 71:
            var1 = false;
            return var1;
        }
    };
    var4['SLOWMODE_SET_COOLDOWN'] = var11;
    var11 = function handleUploadStart(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = _closure1_slot17;
        var1 = _closure1_slot11;
        var2 = var1.SendMessage;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4['UPLOAD_START'] = var11;
    var4['UPLOAD_FAIL'] = var10;
    var4['UPLOAD_CANCEL_REQUEST'] = var10;
    var10 = function handleUpdateCooldown(arg1) {
        var2 = arg1;
        var2 = var2.channels;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot11;
        var4 = var3.SendMessage;
        var3 = new Array(2);
        var3[0] = var4;
        var2 = _closure1_slot11;
        var2 = var2.CreateThread;
        var3[1] = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var11 = arg1;
                var3 = _closure1_slot14;
                var2 = _closure2_slot0;
                var1 = undefined;
                var9 = var3.bind(var1)(var2);
                var3 = var9.bind(var1)();
                var2 = var3.done;
                var8 = 10;
                var7 = null;
                var5 = global;
                var4 = var3;
                var3 = undefined;
                if(var2) { _fun0012_ip = 211; continue _fun0012 }
 51:
                var15 = var4.value;
                var2 = _closure1_slot12;
                var12 = var2[var11];
                var2 = var15.id;
                var13 = var12[var2];
                var19 = var15.rateLimitPerUser;
                var12 = var3;
                if(!(var7 != var13)) { _fun0012_ip = 190; continue _fun0012 }
 86:
                var2 = var13.rateLimitPerUser;
                var12 = var3;
                if(!(var2 !== var19)) { _fun0012_ip = 190; continue _fun0012 }
 99:
                var14 = _closure1_slot16;
                var18 = var5.Math;
                var17 = var18.min;
                var16 = var7 == var13;
                var2 = undefined;
                if(var16) { _fun0012_ip = 129; continue _fun0012 }
 123:
                var2 = var13.cooldownMs;
 129:
                var13 = var7 != var2;
                var16 = 0;
                if(!var13) { _fun0012_ip = 141; continue _fun0012 }
 138:
                var16 = var2;
 141:
                var20 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var8];
                var13 = var20.bind(var1)(var13);
                var13 = var13.Millis;
                var13 = var13.SECOND;
                var13 = var19 * var13;
                var13 = var17.bind(var18)(var16, var13);
                var13 = var14.bind(var1)(var15, var11, var13);
                var12 = var2;
 190:
                var13 = var9.bind(var1)();
                var2 = var13.done;
                var3 = var12;
                var4 = var13;
                if(!var2) { _fun0012_ip = 51; continue _fun0012 }
 211:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['CHANNEL_UPDATES'] = var10;
    var5 = function clear() {
        var2 = _closure1_slot11;
        var2 = var2.SendMessage;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot11;
        var1 = var1.CreateThread;
        var3[1] = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var _closure3_slot0 = var3;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.keys;
            var4 = _closure1_slot12;
            var4 = var4[var3];
            var5 = var5.bind(var6)(var4);
            var4 = var5.forEach;
            var2 = function(arg1) {
                var2 = _closure1_slot12;
                var1 = _closure3_slot0;
                var2 = var2[var1];
                var1 = arg1;
                var1 = var2[var1];
                var2 = var1.timer;
                var1 = var2.stop;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var2 = _closure1_slot12;
            var1 = {};
            var2[var3] = var1;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var15 = var5;
    var13 = var4;
    var4 = new var15[var9](var14, var13, var12);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/SlowmodeStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['SlowmodeType'] = var2;
    return var1;
})();
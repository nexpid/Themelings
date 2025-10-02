// app/stores/SlowmodeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
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
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot14;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot14;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function setCooldown(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var10 = arg3;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var5;
            var1 = _closure1_slot11;
            var6 = var1[var5];
            var1 = var3.id;
            var6 = var6[var1];
            var1 = null;
            if(!(var1 != var6)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var1 = _closure1_slot11;
            var6 = var1[var5];
            var1 = var3.id;
            var1 = var6[var1];
            var6 = var1.timer;
            var1 = var6.stop;
            var1 = var1.bind(var6)();
            var1 = _closure1_slot11;
            var6 = var1[var5];
            var1 = var3.id;
            var1 = delete var6[var1];
case 39:
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var6 = var6[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var6);
            var6 = var7.canBypassSlowmode;
            var6 = var6.bind(var7)(var3, var5);
            if(var6) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var6 = 0;
            if(!(!(var10 <= var6))) { _fun0005_ip = 41; continue _fun0005 }
case 43:
            var6 = global;
            var7 = var6.Date;
            var6 = var7.now;
            var6 = var6.bind(var7)();
            var9 = var10 + var6;
            var _closure2_slot2 = var9;
            var6 = _closure1_slot11;
            var8 = var6[var5];
            var7 = var3.id;
            var6 = {};
            var11 = var3.rateLimitPerUser;
            var6['rateLimitPerUser'] = var11;
            var6['cooldownMs'] = var10;
            var6['cooldownEndTimestamp'] = var9;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 8;
            var9 = var11[var9];
            var9 = var10.bind(var1)(var9);
            var9 = var9.Timeout;
            var10 = var9.prototype;
            var10 = Object.create(var10, {constructor: {value: var9}});
            var15 = var10;
            var9 = new var15[var9](var14);
            var9 = var9 instanceof Object ? var9 : var10;
            var6['timer'] = var9;
            var8[var7] = var6;
            var4 = _closure1_slot11;
            var4 = var4[var5];
            var3 = var3.id;
            var3 = var4[var3];
            var6 = var3.timer;
            var5 = var6.start;
            var4 = 1000;
            var3 = function() {
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
            var2 = true;
            var2 = var5.bind(var6)(var4, var3, var2);
case 41:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function resetCooldown(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var4 = _closure1_slot8;
            var3 = var4.getChannel;
            var2 = arg1;
            var5 = var3.bind(var4)(var2);
            var2 = null;
            if(!(var2 != var5)) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var4 = _closure1_slot15;
            var2 = var5.rateLimitPerUser;
            var3 = 0;
            if(!(var3 !== var2)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
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
case 46:
            var1 = undefined;
            var2 = arg2;
            var2 = var4.bind(var1)(var5, var2, var3);
            return var1;
case 44:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var10 = function handleUploadCancel(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = _closure1_slot8;
            var1 = var3.getChannel;
            var6 = var1.bind(var3)(var4);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0007_ip = 11; continue _fun0007 }
case 48:
            var5 = _closure1_slot15;
            var2 = _closure1_slot10;
            var4 = var2.SendMessage;
            var2 = undefined;
            var3 = 0;
            var3 = var5.bind(var2)(var6, var4, var3);
            var1 = undefined;
case 11:
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
    var2 = {};
    var2['SendMessage'] = var11;
    var4 = 'SendMessage';
    var2[var11] = var4;
    var2['CreateThread'] = var9;
    var4 = 'CreateThread';
    var2[var9] = var4;
    var _closure1_slot10 = var2;
    var4 = {};
    var11 = var2.SendMessage;
    var9 = {};
    var4[var11] = var9;
    var11 = var2.CreateThread;
    var9 = {};
    var4[var11] = var9;
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function SlowmodeStore() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0008_ip = 51; continue _fun0008;
case 49:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 51:
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
            var2 = _closure1_slot8;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
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
case 0:
                var3 = arg2;
                var2 = _closure1_slot11;
                var1 = null;
                if(!(var1 == var3)) { _fun0009_ip = 45; continue _fun0009 }
case 52:
                var4 = _closure1_slot10;
                var3 = var4.SendMessage;
case 45:
                var3 = var2[var3];
                var2 = arg1;
                var2 = var3[var2];
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0009_ip = 53; continue _fun0009 }
case 6:
                var1 = var2.cooldownMs;
case 53:
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
case 0:
                var2 = arg1;
                var5 = this;
                var4 = var5.getSlowmodeCooldownGuess;
                var3 = var2.id;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var1);
                var3 = 0;
                var1 = var1 > var3;
                if(!var1) { _fun0010_ip = 40; continue _fun0010 }
case 54:
                var2 = var2.rateLimitPerUser;
                var1 = var2 > var3;
case 40:
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
        var2 = _closure1_slot16;
        var1 = undefined;
        var1 = var2.bind(var1)(var4, var3);
        return var1;
    };
    var4['SLOWMODE_RESET_COOLDOWN'] = var11;
    var11 = function handleSlowmodeSetCooldown(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.slowmodeType;
            var6 = var1.cooldownMs;
            var3 = _closure1_slot8;
            var2 = var3.getChannel;
            var4 = var2.bind(var3)(var4);
            var2 = null;
            if(!(var2 != var4)) { _fun0011_ip = 55; continue _fun0011 }
case 56:
            var3 = _closure1_slot15;
            var2 = 0;
            if(!(var2 !== var6)) { _fun0011_ip = 57; continue _fun0011 }
case 58:
            var1 = 100;
            var2 = var6 + var1;
case 57:
            var1 = undefined;
            var2 = var3.bind(var1)(var4, var5, var2);
            return var1;
case 55:
            var1 = false;
            return var1;
        }
    };
    var4['SLOWMODE_SET_COOLDOWN'] = var11;
    var11 = function handleUploadStart(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = _closure1_slot16;
        var1 = _closure1_slot10;
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
        var3 = _closure1_slot10;
        var4 = var3.SendMessage;
        var3 = new Array(2);
        var3[0] = var4;
        var2 = _closure1_slot10;
        var2 = var2.CreateThread;
        var3[1] = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var11 = arg1;
                var3 = _closure1_slot13;
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
                if(var2) { _fun0012_ip = 59; continue _fun0012 }
case 50:
                var15 = var4.value;
                var2 = _closure1_slot11;
                var12 = var2[var11];
                var2 = var15.id;
                var13 = var12[var2];
                var19 = var15.rateLimitPerUser;
                var12 = var3;
                if(!(var7 != var13)) { _fun0012_ip = 60; continue _fun0012 }
case 13:
                var2 = var13.rateLimitPerUser;
                var12 = var3;
                if(!(var2 !== var19)) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                var14 = _closure1_slot15;
                var18 = var5.Math;
                var17 = var18.min;
                var16 = var7 == var13;
                var2 = undefined;
                if(var16) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                var2 = var13.cooldownMs;
case 62:
                var13 = var7 != var2;
                var16 = 0;
                if(!var13) { _fun0012_ip = 64; continue _fun0012 }
case 65:
                var16 = var2;
case 64:
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
case 60:
                var13 = var9.bind(var1)();
                var2 = var13.done;
                var3 = var12;
                var4 = var13;
                if(!var2) { _fun0012_ip = 50; continue _fun0012 }
case 59:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var4['CHANNEL_UPDATES'] = var10;
    var5 = function clear() {
        var2 = _closure1_slot10;
        var2 = var2.SendMessage;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot10;
        var1 = var1.CreateThread;
        var3[1] = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = arg1;
            var _closure3_slot0 = var3;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.keys;
            var4 = _closure1_slot11;
            var4 = var4[var3];
            var5 = var5.bind(var6)(var4);
            var4 = var5.forEach;
            var2 = function(arg1) {
                var2 = _closure1_slot11;
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
            var2 = _closure1_slot11;
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
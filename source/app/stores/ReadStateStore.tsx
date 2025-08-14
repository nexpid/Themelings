// app/stores/ReadStateStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var8;
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
            _closure1_slot81 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot81 = var1;
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
            var9 = _closure1_slot83;
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
            var7 = _closure1_slot83;
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
    var _closure1_slot82 = var1;
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
    var _closure1_slot83 = var1;
    var1 = function generateOldThreadCutoff() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 40;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.fromTimestamp;
        var4 = global;
        var5 = var4.Date;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var1 = _closure1_slot73;
        var1 = var4 - var1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot84 = var1;
    var9 = function setDecayedReadStateTimer() {
        var5 = global;
        var2 = var5.Date;
        var1 = var2.now;
        var8 = var1.bind(var2)();
        var4 = _closure1_slot1;
        var6 = _closure1_slot2;
        var2 = 41;
        var7 = var6[var2];
        var1 = undefined;
        var7 = var4.bind(var1)(var7);
        var7 = var7.Millis;
        var9 = var7.DAY;
        var7 = 7;
        var7 = var7 * var9;
        var7 = var8 - var7;
        _closure1_slot74 = var7;
        var8 = var5.Date;
        var7 = var8.now;
        var8 = var7.bind(var8)();
        var7 = var6[var2];
        var7 = var4.bind(var1)(var7);
        var7 = var7.Millis;
        var9 = var7.DAY;
        var7 = 3;
        var7 = var7 * var9;
        var7 = var8 - var7;
        _closure1_slot75 = var7;
        var8 = var5.clearTimeout;
        var7 = _closure1_slot76;
        var7 = var8.bind(var1)(var7);
        var5 = var5.setTimeout;
        var2 = var6[var2];
        var2 = var4.bind(var1)(var2);
        var2 = var2.Millis;
        var4 = var2.HOUR;
        var2 = 1;
        var4 = var2 * var4;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 42;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'DECAY_READ_STATES';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var5.bind(var1)(var2, var4);
        _closure1_slot76 = var2;
        return var1;
    };
    var _closure1_slot85 = var9;
    var1 = function parseTimestamp(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 51; continue _fun0005 }
 9:
            var1 = global;
            var3 = var1.Date;
            var2 = var3.parse;
            var2 = var2.bind(var3)(var4);
            var3 = var1.isNaN;
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var1 = 0;
            if(var3) { _fun0005_ip = 49; continue _fun0005 }
 46:
            var1 = var2;
 49:
            return var1;
 51:
            var1 = 0;
            return var1;
        }
    };
    var _closure1_slot86 = var1;
    var4 = function shouldBadgeMessage(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var8 = arg1;
            var3 = _closure1_slot29;
            var2 = var3.getChannel;
            var1 = var8.channel_id;
            var6 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var6;
            if(!var1) { _fun0006_ip = 186; continue _fun0006 }
 37:
            var3 = _closure1_slot36;
            var2 = var3.isBlockedOrIgnoredForMessage;
            var2 = var2.bind(var3)(var8);
            var2 = !var2;
            if(!var2) { _fun0006_ip = 183; continue _fun0006 }
 61:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 43;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var7.bind(var5)(var3);
            var3 = {};
            var3['message'] = var8;
            var8 = arg2;
            var8 = var8.id;
            var3['userId'] = var8;
            var10 = _closure1_slot38;
            var9 = var10.isSuppressEveryoneEnabled;
            var8 = var6.guild_id;
            var8 = var9.bind(var10)(var8);
            var3['suppressEveryone'] = var8;
            var10 = _closure1_slot38;
            var9 = var10.isSuppressRolesEnabled;
            var8 = var6.guild_id;
            var8 = var9.bind(var10)(var8);
            var3['suppressRoles'] = var8;
            var3 = var7.bind(var5)(var3);
            var7 = !var3;
            var3 = !var7;
            if(!var7) { _fun0006_ip = 180; continue _fun0006 }
 165:
            var4 = _closure1_slot88;
            var4 = var4.bind(var5)(var6);
            var4 = !var4;
            var3 = !var4;
 180:
            var2 = var3;
 183:
            var1 = var2;
 186:
            return var1;
        }
    };
    var _closure1_slot87 = var4;
    var1 = function isNonMutedPrivateMessage(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0007_ip = 22; continue _fun0007 }
 12:
            var3 = var2.isPrivate;
            var1 = var3.bind(var2)();
 22:
            if(!var1) { _fun0007_ip = 57; continue _fun0007 }
 25:
            var5 = _closure1_slot38;
            var4 = var5.isGuildOrCategoryOrChannelMuted;
            var3 = var2.guild_id;
            var2 = var2.id;
            var2 = var4.bind(var5)(var3, var2);
            var1 = !var2;
 57:
            return var1;
        }
    };
    var _closure1_slot88 = var1;
    var1 = function processBulkAckQueue() {
        var1 = undefined;
        var4 = _closure1_slot90;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot89 = var1;
    var1 = function _processBulkAckQueue() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    StartGenerator();
                    var4 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 181; continue _fun0008 }
 15:
                    var3 = undefined;
                    var _closure4_slot0 = var3;
                    var6 = _closure1_slot68;
                    var6 = var6.length;
                    var9 = 0;
                    if(!(var9 !== var6)) { _fun0008_ip = 157; continue _fun0008 }
 39:
                    var6 = true;
                    _closure1_slot69 = var6;
                    var8 = _closure1_slot68;
                    var7 = var8.splice;
                    var6 = 100;
                    var6 = var7.bind(var8)(var9, var6);
                    _closure4_slot0 = var6;
                    var6 = _closure1_slot91;
                    var2 = function() {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 44;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot44;
                        var4 = var4.BULK_ACK;
                        var1['url'] = var4;
                        var4 = {};
                        var5 = _closure4_slot0;
                        var4['read_states'] = var5;
                        var1['body'] = var4;
                        var4 = true;
                        var1['oldFormErrors'] = var4;
                        var4 = false;
                        var1['rejectWithError'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var6.bind(var3)(var2);
                    SaveGenerator(address=86);
 84:
                    return var2;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0008_ip = 154; continue _fun0008 }
 92:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var6 = 45;
                    var6 = var8[var6];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.timeoutPromise;
                    var6 = 1000;
                    var6 = var7.bind(var8)(var6);
                    SaveGenerator(address=133);
 131:
                    return var6;
 133:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(var7) { _fun0008_ip = 151; continue _fun0008 }
 139:
                    var7 = _closure1_slot89;
                    var7 = var7.bind(var3)(var4);
                    return var3;
 151:
                    return var6;
 154:
                    return var2;
 157:
                    var2 = false;
                    _closure1_slot69 = var2;
                    var2 = null;
                    var2 = var2 == var4;
                    if(var2) { _fun0008_ip = 176; continue _fun0008 }
 172:
                    var2 = var4.bind(var3)();
 176:
                    var2 = undefined;
                    return var2;
 181:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot90 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot90 = var1;
    var1 = function retry() {
        var1 = undefined;
        var4 = _closure1_slot92;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot91 = var1;
    var1 = function _retry() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot6;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 300; continue _fun0009 }
 10:
                    var13 = arg1;
                    var4 = undefined;
                    var14 = undefined;
                    var15 = undefined;
                    var3 = _closure1_slot27;
                    var2 = var3.getId;
                    var14 = var2.bind(var3)();
                    var15 = 0;
                    var11 = 3;
                    var10 = 46;
                    var9 = 45;
                    var8 = 1;
                    var7 = 2000;
                    var6 = '';
 60: // try_start_0
                    var2 = var13;
                    var2 = var2.bind(var4)();
                    SaveGenerator(address=71);
 69:
                    return var2;
 71:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 80; continue _fun0009 }
 77: // try_end0
                    return var2;
 80:
                    return var2;
 83: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var3 = _closure1_slot62;
                    var2 = var3.error;
                    var2 = var2.bind(var3)(var6, var5);
                    var2 = var15;
                    var2 = var2 + var8;
                    if(!(var2 < var11)) { _fun0009_ip = 221; continue _fun0009 }
 111:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var9];
                    var5 = var3.bind(var4)(var2);
                    var3 = var5.timeoutPromise;
                    var2 = var15;
                    var2 = var2 + var8;
                    var2 = var7 * var2;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=154);
 152:
                    return var2;
 154:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0009_ip = 297; continue _fun0009 }
 163:
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var10];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.awaitOnline;
                    var3 = var3.bind(var5)();
                    SaveGenerator(address=194);
 192:
                    return var3;
 194:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0009_ip = 294; continue _fun0009 }
 200:
                    var16 = var14;
                    var17 = _closure1_slot27;
                    var5 = var17.getId;
                    var5 = var5.bind(var17)();
                    if(!(var16 === var5)) { _fun0009_ip = 240; continue _fun0009 }
 221:
                    var5 = var15;
                    var5 = var5 + 1;
                    var15 = var5;
                    if(var5 < var11) { _fun0009_ip = 60; continue _fun0009 }
 237:
                    return var4;
 240:
                    var4 = global;
                    var6 = var4.Promise;
                    var5 = var6.reject;
                    var8 = var4.Error;
                    var4 = var8.prototype;
                    var7 = Object.create(var4, {constructor: {value: var8}});
                    var19 = 'User changed.';
                    var20 = var7;
                    var4 = new var20[var8](var19, var18);
                    var4 = var4 instanceof Object ? var4 : var7;
                    var4 = var5.bind(var6)(var4);
                    return var4;
 294:
                    return var3;
 297:
                    return var2;
 300:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot92 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot92 = var1;
    var1 = function staffLog(arg1, arg2) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
            var3 = _closure1_slot39;
            var2 = var3.getCurrentUser;
            var4 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0010_ip = 35; continue _fun0010 }
 25:
            var3 = var4.isStaff;
            var2 = var3.bind(var4)();
 35:
            if(!var2) { _fun0010_ip = 72; continue _fun0010 }
 38:
            var5 = _closure1_slot62;
            var4 = var5.log;
            var1 = arg1;
            var3 = var1.channelId;
            var2 = 'STAFF-ACK-LOG:';
            var1 = arg2;
            var1 = var4.bind(var5)(var2, var1, var3);
 72:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot93 = var1;
    var1 = function shouldAutomaticallyAck(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var4 = arg1;
            var5 = _closure1_slot93;
            var3 = undefined;
            var2 = 'shouldAutomaticallyAck called';
            var2 = var5.bind(var3)(var4, var2);
            var5 = var4.type;
            var2 = _closure1_slot60;
            var2 = var2.CHANNEL;
            if(!(var5 === var2)) { _fun0011_ip = 717; continue _fun0011 }
 46:
            var6 = _closure1_slot29;
            var5 = var6.getChannel;
            var2 = var4.channelId;
            var9 = var5.bind(var6)(var2);
            var7 = null;
            var2 = var7 != var9;
            if(!var2) { _fun0011_ip = 84; continue _fun0011 }
 74:
            var5 = var9.isForumPost;
            var2 = var5.bind(var9)();
 84:
            var6 = _closure1_slot10;
            var5 = var6.getConnectedActivityLocation;
            var5 = var5.bind(var6)();
            if(!(var7 != var5)) { _fun0011_ip = 161; continue _fun0011 }
 102:
            var6 = _closure1_slot10;
            var5 = var6.getActivityPanelMode;
            var6 = var5.bind(var6)();
            var5 = _closure1_slot55;
            var5 = var5.PANEL;
            if(!(var6 === var5)) { _fun0011_ip = 161; continue _fun0011 }
 130:
            var6 = _closure1_slot10;
            var5 = var6.getFocusedLayout;
            var6 = var5.bind(var6)();
            var5 = _closure1_slot56;
            var5 = var5.NO_CHAT;
            if(!(var6 !== var5)) { _fun0011_ip = 697; continue _fun0011 }
 161:
            var6 = _closure1_slot33;
            var5 = var6.isIdle;
            var5 = var5.bind(var6)();
            if(var5) { _fun0011_ip = 677; continue _fun0011 }
 181:
            var5 = var4.canTrackUnreads;
            var5 = var5.bind(var4)();
            if(var5) { _fun0011_ip = 214; continue _fun0011 }
 194:
            var6 = _closure1_slot93;
            var5 = 'Cannot track unreads';
            var5 = var6.bind(var3)(var4, var5);
            var5 = false;
            return var5;
 214:
            var5 = var7 == var9;
            var6 = undefined;
            if(var5) { _fun0011_ip = 233; continue _fun0011 }
 223:
            var5 = var9.isForumLikeChannel;
            var6 = var5.bind(var9)();
 233:
            var5 = true;
            if(!(var5 !== var6)) { _fun0011_ip = 264; continue _fun0011 }
 239:
            var10 = _closure1_slot72;
            var8 = var10.has;
            var6 = var4.channelId;
            var6 = var8.bind(var10)(var6);
            if(var6) { _fun0011_ip = 657; continue _fun0011 }
 264:
            if(!var2) { _fun0011_ip = 294; continue _fun0011 }
 267:
            var6 = var4._persisted;
            if(var6) { _fun0011_ip = 294; continue _fun0011 }
 276:
            var8 = _closure1_slot93;
            var6 = 'unpersisted forum post';
            var6 = var8.bind(var3)(var4, var6);
            return var5;
 294:
            var6 = var4.hasUnreadOrMentions;
            var6 = var6.bind(var4)();
            if(var6) { _fun0011_ip = 327; continue _fun0011 }
 307:
            var8 = _closure1_slot93;
            var6 = 'No unread or mentions';
            var6 = var8.bind(var3)(var4, var6);
            var6 = false;
            return var6;
 327:
            var8 = var7 == var9;
            var6 = undefined;
            if(var8) { _fun0011_ip = 346; continue _fun0011 }
 336:
            var8 = var9.isForumLikeChannel;
            var6 = var8.bind(var9)();
 346:
            if(!(var5 !== var6)) { _fun0011_ip = 637; continue _fun0011 }
 353:
            if(!var2) { _fun0011_ip = 365; continue _fun0011 }
 356:
            var2 = var4._isJoinedThread;
            if(!var2) { _fun0011_ip = 408; continue _fun0011 }
 365:
            var8 = _closure1_slot30;
            var6 = var8.isAtBottom;
            var2 = var4.channelId;
            var2 = var6.bind(var8)(var2);
            if(var2) { _fun0011_ip = 408; continue _fun0011 }
 388:
            var6 = _closure1_slot93;
            var2 = 'Not at bottom';
            var2 = var6.bind(var3)(var4, var2);
            var2 = false;
            return var2;
 408:
            var8 = _closure1_slot11;
            var6 = var8.getLayout;
            var2 = var4.channelId;
            var8 = var6.bind(var8)(var2);
            var9 = _closure1_slot11;
            var6 = var9.getChatOpen;
            var2 = var4.channelId;
            var2 = var6.bind(var9)(var2);
            if(var2) { _fun0011_ip = 499; continue _fun0011 }
 451:
            var6 = _closure1_slot45;
            var6 = var6.NO_CHAT;
            if(!(var8 !== var6)) { _fun0011_ip = 479; continue _fun0011 }
 465:
            var6 = _closure1_slot45;
            var6 = var6.FULL_SCREEN;
            if(!(var8 === var6)) { _fun0011_ip = 499; continue _fun0011 }
 479:
            var8 = _closure1_slot93;
            var6 = 'Fullscreen video';
            var6 = var8.bind(var3)(var4, var6);
            var6 = false;
            return var6;
 499:
            var9 = _closure1_slot34;
            var8 = var9.getMessages;
            var6 = var4.channelId;
            var6 = var8.bind(var9)(var6);
            if(!(var7 != var6)) { _fun0011_ip = 617; continue _fun0011 }
 523:
            var7 = var6.ready;
            if(!var7) { _fun0011_ip = 617; continue _fun0011 }
 532:
            var6 = var6.loadingMore;
            if(var6) { _fun0011_ip = 617; continue _fun0011 }
 541:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 47;
            var6 = var8[var6];
            var7 = var7.bind(var3)(var6);
            var6 = var7.isChannelFocused;
            var6 = var6.bind(var7)();
            if(var6) { _fun0011_ip = 597; continue _fun0011 }
 574:
            if(var2) { _fun0011_ip = 597; continue _fun0011 }
 577:
            var6 = _closure1_slot93;
            var2 = 'Chat not focused';
            var2 = var6.bind(var3)(var4, var2);
            var2 = false;
            _fun0011_ip = 615; continue _fun0011;
 597:
            var7 = _closure1_slot93;
            var6 = 'Acked';
            var6 = var7.bind(var3)(var4, var6);
            var2 = true;
 615:
            _fun0011_ip = 635; continue _fun0011;
 617:
            var6 = _closure1_slot93;
            var5 = 'Still loading messages';
            var5 = var6.bind(var3)(var4, var5);
            var2 = false;
 635:
            return var2;
 637:
            var5 = _closure1_slot93;
            var2 = 'Forum-like channel';
            var2 = var5.bind(var3)(var4, var2);
            var2 = false;
            return var2;
 657:
            var5 = _closure1_slot93;
            var2 = 'mobile auto ack disabled';
            var2 = var5.bind(var3)(var4, var2);
            var2 = false;
            return var2;
 677:
            var5 = _closure1_slot93;
            var2 = 'Is idle';
            var2 = var5.bind(var3)(var4, var2);
            var2 = false;
            return var2;
 697:
            var5 = _closure1_slot93;
            var2 = 'In activity';
            var2 = var5.bind(var3)(var4, var2);
            var2 = false;
            return var2;
 717:
            var2 = _closure1_slot93;
            var1 = 'not channel read state';
            var1 = var2.bind(var3)(var4, var1);
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot94 = var1;
    var1 = function mergeChannels(arg1) {
        var3 = arg1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = arg1;
                var5 = _closure1_slot22;
                var3 = var2.type;
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                if(!var3) { _fun0012_ip = 150; continue _fun0012 }
 28:
                var6 = _closure1_slot78;
                var5 = var6.get;
                var3 = var2.id;
                var3 = var5.bind(var6)(var3);
                var5 = var2.guild_id;
                var3['_guildId'] = var5;
                var5 = var2.lastMessageId;
                var3['lastMessageId'] = var5;
                var6 = _closure1_slot86;
                var5 = var2.lastPinTimestamp;
                var5 = var6.bind(var1)(var5);
                var3['lastPinTimestamp'] = var5;
                var6 = var2.hasFlag;
                var5 = _closure1_slot57;
                var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
                var5 = var6.bind(var2)(var5);
                var3['_isResourceChannel'] = var5;
                var5 = _closure1_slot26;
                var4 = var5.has;
                var2 = var2.type;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0012_ip = 150; continue _fun0012 }
 140:
                var2 = var3.syncThreadSettings;
                var2 = var2.bind(var3)();
 150:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot95 = var1;
    var1 = function mergeServerChannels(arg1) {
        var3 = arg1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = arg1;
                var5 = _closure1_slot22;
                var3 = var2.type;
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                if(!var3) { _fun0013_ip = 179; continue _fun0013 }
 28:
                var6 = _closure1_slot78;
                var5 = var6.get;
                var3 = var2.id;
                var3 = var5.bind(var6)(var3);
                var5 = var2.last_message_id;
                var3['lastMessageId'] = var5;
                var6 = _closure1_slot86;
                var5 = var2.last_pin_timestamp;
                var5 = var6.bind(var1)(var5);
                var3['lastPinTimestamp'] = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 54;
                var5 = var7[var5];
                var8 = var6.bind(var1)(var5);
                var7 = var8.hasFlag;
                var5 = var2.flags;
                var6 = null;
                var9 = var6 != var5;
                var6 = 0;
                if(!var9) { _fun0013_ip = 125; continue _fun0013 }
 122:
                var6 = var5;
 125:
                var5 = _closure1_slot57;
                var5 = var5.IS_GUILD_RESOURCE_CHANNEL;
                var5 = var7.bind(var8)(var6, var5);
                var3['_isResourceChannel'] = var5;
                var5 = _closure1_slot26;
                var4 = var5.has;
                var2 = var2.type;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0013_ip = 179; continue _fun0013 }
 169:
                var2 = var3.syncThreadSettings;
                var2 = var2.bind(var3)();
 179:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot96 = var1;
    var1 = function mergeForGuild(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var4 = function mergeActiveJoinedThreads(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var3 = var2.threads;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0015_ip = 36; continue _fun0015 }
 21:
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                            var1 = arg1;
                            var5 = _closure1_slot25;
                            var4 = var5.has;
                            var2 = var1.type;
                            var2 = var4.bind(var5)(var2);
                            if(!var2) { _fun0016_ip = 234; continue _fun0016 }
 31:
                            var5 = _closure1_slot78;
                            var4 = var5.get;
                            var2 = var1.id;
                            var2 = var4.bind(var5)(var2);
                            var4 = var1.lastMessageId;
                            var2['lastMessageId'] = var4;
                            var6 = _closure1_slot86;
                            var4 = var1.lastPinTimestamp;
                            var5 = undefined;
                            var4 = var6.bind(var5)(var4);
                            var2['lastPinTimestamp'] = var4;
                            var4 = true;
                            var2['_isThread'] = var4;
                            var2['_isActiveThread'] = var4;
                            var4 = var1.member;
                            var6 = null;
                            var4 = var6 != var4;
                            var2['_isJoinedThread'] = var4;
                            var4 = var2.ackMessageId;
                            if(!(var6 == var4)) { _fun0016_ip = 191; continue _fun0016 }
 127:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var4 = 40;
                            var4 = var8[var4];
                            var8 = var7.bind(var5)(var4);
                            var7 = var8.fromTimestamp;
                            var10 = _closure1_slot99;
                            var4 = _closure3_slot0;
                            var9 = var4.id;
                            var4 = var1.id;
                            var4 = var10.bind(var5)(var9, var4);
                            var4 = var7.bind(var8)(var4);
                            var2['ackMessageId'] = var4;
 191:
                            var4 = var2.ackPinTimestamp;
                            if(!(var6 == var4)) { _fun0016_ip = 234; continue _fun0016 }
 201:
                            var4 = _closure1_slot99;
                            var3 = _closure3_slot0;
                            var3 = var3.id;
                            var1 = var1.id;
                            var1 = var4.bind(var5)(var3, var1);
                            var2['ackPinTimestamp'] = var1;
 234:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var2 = function mergeGuildEvents(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var4 = arg1;
                    var5 = var4.guild_scheduled_events;
                    var7 = null;
                    var6 = var7 == var5;
                    var1 = undefined;
                    var3 = undefined;
                    if(var6) { _fun0017_ip = 29; continue _fun0017 }
 24:
                    var3 = var5.length;
 29:
                    var5 = 0;
                    if(!(var5 === var3)) { _fun0017_ip = 76; continue _fun0017 }
 35:
                    var9 = _closure1_slot78;
                    var8 = var9.getIfExists;
                    var6 = var4.id;
                    var3 = _closure1_slot60;
                    var3 = var3.GUILD_EVENT;
                    var3 = var8.bind(var9)(var6, var3);
                    if(!(var7 != var3)) { _fun0017_ip = 226; continue _fun0017 }
 76:
                    var10 = _closure1_slot78;
                    var9 = var10.get;
                    var8 = var4.id;
                    var3 = _closure1_slot60;
                    var3 = var3.GUILD_EVENT;
                    var3 = var9.bind(var10)(var8, var3);
                    var8 = var4.id;
                    var3['_guildId'] = var8;
                    var _closure3_slot0 = var5;
                    var _closure3_slot1 = var7;
                    var5 = var3._ackMessageId;
                    if(!(var7 == var5)) { _fun0017_ip = 179; continue _fun0017 }
 138:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 40;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.fromTimestamp;
                    var6 = var3.getAckTimestamp;
                    var6 = var6.bind(var3)();
                    var5 = var7.bind(var8)(var6);
 179:
                    var _closure3_slot2 = var5;
                    var6 = var4.guild_scheduled_events;
                    var5 = var6.forEach;
                    var4 = function(arg1) {
                        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                            var2 = arg1;
                            var4 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var7 = 40;
                            var3 = var1[var7];
                            var1 = undefined;
                            var9 = var4.bind(var1)(var3);
                            var8 = var9.compare;
                            var6 = var2.id;
                            var4 = _closure3_slot1;
                            var6 = var8.bind(var9)(var6, var4);
                            var4 = 0;
                            if(!(var6 > var4)) { _fun0018_ip = 67; continue _fun0018 }
 58:
                            var6 = var2.id;
                            _closure3_slot1 = var6;
 67:
                            var6 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.compare;
                            var5 = var2.id;
                            var2 = _closure3_slot2;
                            var2 = var6.bind(var7)(var5, var2);
                            if(!(var2 > var4)) { _fun0018_ip = 120; continue _fun0018 }
 109:
                            var2 = _closure3_slot0;
                            var2 = var2 + 1;
                            _closure3_slot0 = var2;
 120:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var6)(var4);
                    var4 = _closure3_slot1;
                    var3['lastMessageId'] = var4;
                    var2 = _closure3_slot0;
                    var3['mentionCount'] = var2;
                    return var1;
 226:
                    return var1;
                }
            };
            var2 = var2.bind(var1)(var3);
            var7 = _closure1_slot78;
            var6 = var7.get;
            var5 = var3.id;
            var4 = _closure1_slot60;
            var4 = var4.GUILD_HOME;
            var5 = var6.bind(var7)(var5, var4);
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 40;
            var4 = var9[var4];
            var7 = var8.bind(var1)(var4);
            var6 = var7.fromTimestamp;
            var4 = 55;
            var4 = var9[var4];
            var8 = var8.bind(var1)(var4);
            var4 = global;
            var9 = var4.Date;
            var4 = var9.now;
            var4 = var4.bind(var9)();
            var10 = var8.bind(var1)(var4);
            var9 = var10.subtract;
            var8 = 24;
            var4 = 'h';
            var8 = var9.bind(var10)(var8, var4);
            var4 = var8.valueOf;
            var4 = var4.bind(var8)();
            var4 = var6.bind(var7)(var4);
            var5['lastMessageId'] = var4;
            var5 = _closure1_slot32;
            var4 = var5.getGuild;
            var3 = var3.id;
            var4 = var4.bind(var5)(var3);
            var5 = null;
            if(!(var5 != var4)) { _fun0014_ip = 250; continue _fun0014 }
 184:
            var6 = var5 == var4;
            var3 = undefined;
            if(var6) { _fun0014_ip = 199; continue _fun0014 }
 193:
            var3 = var4.latestOnboardingQuestionId;
 199:
            if(!(var5 != var3)) { _fun0014_ip = 250; continue _fun0014 }
 203:
            var7 = _closure1_slot78;
            var6 = var7.get;
            var5 = var4.id;
            var2 = _closure1_slot60;
            var2 = var2.GUILD_ONBOARDING_QUESTION;
            var2 = var6.bind(var7)(var5, var2);
            var4 = var4.id;
            var2['_guildId'] = var4;
            var2['lastMessageId'] = var3;
 250:
            return var1;
        }
    };
    var _closure1_slot97 = var1;
    var1 = function mergeRelationships(arg1) {
        var3 = function mergeNotificationCenter(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                var3 = arg1;
                var5 = _closure1_slot39;
                var4 = var5.getCurrentUser;
                var4 = var4.bind(var5)();
                var5 = null;
                if(!(var5 != var4)) { _fun0019_ip = 80; continue _fun0019 }
 27:
                var6 = _closure1_slot78;
                var5 = var6.get;
                var4 = var4.id;
                var2 = _closure1_slot60;
                var2 = var2.NOTIFICATION_CENTER;
                var2 = var5.bind(var6)(var4, var2);
                var _closure3_slot0 = var2;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.since;
                        var5 = null;
                        if(!(var5 != var1)) { _fun0020_ip = 218; continue _fun0020 }
 18:
                        var4 = var2.type;
                        var3 = _closure1_slot51;
                        var3 = var3.PENDING_INCOMING;
                        if(!(var4 === var3)) { _fun0020_ip = 218; continue _fun0020 }
 43:
                        var3 = global;
                        var4 = var3.Date;
                        var8 = var2.since;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var9 = var3;
                        var2 = new var9[var4](var8, var7);
                        var3 = var2 instanceof Object ? var2 : var3;
                        var2 = var3.getTime;
                        var4 = var2.bind(var3)();
                        var3 = _closure3_slot0;
                        var3 = var3.ackMessageId;
                        var5 = var5 != var3;
                        var3 = 0;
                        if(!var5) { _fun0020_ip = 152; continue _fun0020 }
 109:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var5 = 40;
                        var6 = var6[var5];
                        var5 = undefined;
                        var7 = var7.bind(var5)(var6);
                        var6 = var7.extractTimestamp;
                        var5 = _closure3_slot0;
                        var5 = var5.ackMessageId;
                        var3 = var6.bind(var7)(var5);
 152:
                        if(!(var3 < var4)) { _fun0020_ip = 218; continue _fun0020 }
 156:
                        var5 = _closure3_slot0;
                        var3 = var5.mentionCount;
                        var3 = var3 + 1;
                        var5['mentionCount'] = var3;
                        var2 = _closure3_slot0;
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 40;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var1 = var3.fromTimestamp;
                        var1 = var1.bind(var3)(var4);
                        var2['lastMessageId'] = var1;
 218:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
 80:
                var1 = false;
                return var1;
            }
        };
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot98 = var1;
    var1 = function getThreadAckMessageTimestamp(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
            var3 = arg1;
            var8 = arg2;
            var2 = _closure1_slot29;
            var1 = var2.getChannel;
            var7 = var1.bind(var2)(var8);
            var2 = _closure1_slot32;
            var1 = var2.getGuild;
            var4 = null;
            if(!(var4 == var3)) { _fun0021_ip = 55; continue _fun0021 }
 38:
            var9 = var4 == var7;
            var5 = undefined;
            if(var9) { _fun0021_ip = 52; continue _fun0021 }
 47:
            var5 = var7.guild_id;
 52:
            var3 = var5;
 55:
            var3 = var1.bind(var2)(var3);
            if(!(var4 != var7)) { _fun0021_ip = 79; continue _fun0021 }
 64:
            var1 = var7.isForumPost;
            var1 = var1.bind(var7)();
            var5 = 0;
            if(var1) { _fun0021_ip = 90; continue _fun0021 }
 79:
            var2 = _closure1_slot100;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
 90:
            var2 = _closure1_slot20;
            var1 = var2.joinTimestamp;
            var9 = var1.bind(var2)(var8);
            var1 = var4 == var9;
            var3 = undefined;
            var2 = undefined;
            if(var1) { _fun0021_ip = 126; continue _fun0021 }
 116:
            var1 = var9.getTime;
            var2 = var1.bind(var9)();
 126:
            var10 = var4 != var2;
            var1 = 0;
            var9 = 0;
            if(!var10) { _fun0021_ip = 140; continue _fun0021 }
 137:
            var9 = var2;
 140:
            var2 = 5000;
            var10 = var9 - var2;
            var2 = global;
            var9 = var2.isNaN;
            var9 = var9.bind(var3)(var10);
            if(!var9) { _fun0021_ip = 172; continue _fun0021 }
 166:
            var10 = -5000;
 172:
            var9 = var4 == var7;
            var11 = undefined;
            if(var9) { _fun0021_ip = 202; continue _fun0021 }
 181:
            var7 = var7.threadMetadata;
            var9 = var4 == var7;
            var11 = undefined;
            if(var9) { _fun0021_ip = 202; continue _fun0021 }
 196:
            var11 = var7.archiveTimestamp;
 202:
            var4 = var4 != var11;
            var7 = 0;
            if(!var4) { _fun0021_ip = 257; continue _fun0021 }
 211:
            var4 = var2.Date;
            var9 = var4.prototype;
            var9 = Object.create(var9, {constructor: {value: var4}});
            var14 = var9;
            var13 = var11;
            var4 = new var14[var4](var13, var12);
            var9 = var4 instanceof Object ? var4 : var9;
            var4 = var9.getTime;
            var9 = var4.bind(var9)();
            var4 = 1;
            var7 = var9 - var4;
 257:
            var4 = var2.isNaN;
            var4 = var4.bind(var3)(var7);
            var9 = var7;
            if(!var4) { _fun0021_ip = 276; continue _fun0021 }
 274:
            var9 = 0;
 276:
            var7 = var2.Math;
            var4 = var7.max;
            var4 = var4.bind(var7)(var10, var9);
            if(!(var4 <= var1)) { _fun0021_ip = 335; continue _fun0021 }
 297:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 40;
            var6 = var9[var6];
            var7 = var7.bind(var3)(var6);
            var6 = var7.extractTimestamp;
            var7 = var6.bind(var7)(var8);
            var6 = 1;
            var4 = var7 - var6;
 335:
            var6 = var2.isNaN;
            var6 = var6.bind(var3)(var4);
            if(var6) { _fun0021_ip = 353; continue _fun0021 }
 349:
            var6 = var4 <= var1;
 353:
            if(!var6) { _fun0021_ip = 358; continue _fun0021 }
 356:
            var4 = 0;
 358:
            var1 = var2.isNaN;
            var3 = var1.bind(var3)(var5);
            var1 = var4;
            if(var3) { _fun0021_ip = 392; continue _fun0021 }
 375:
            var3 = var2.Math;
            var2 = var3.max;
            var1 = var2.bind(var3)(var5, var4);
 392:
            return var1;
        }
    };
    var _closure1_slot99 = var1;
    var1 = function getGuildJoinedAtTime(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
            var1 = arg1;
            var3 = null;
            if(!(var3 != var1)) { _fun0022_ip = 198; continue _fun0022 }
 12:
            var2 = var1.joinedAt;
            if(!(var3 != var2)) { _fun0022_ip = 198; continue _fun0022 }
 25:
            var4 = var1.joinedAt;
            var2 = global;
            var3 = var2.Date;
            var4 = var4 instanceof var3;
            var3 = var1.joinedAt;
            if(var4) { _fun0022_ip = 170; continue _fun0022 }
 52:
            var5 = 'string';
            var4 = typeof var3;
            if(!(var5 !== var4)) { _fun0022_ip = 110; continue _fun0022 }
 63:
            var4 = var1.joinedAt;
            var5 = 'number';
            var4 = typeof var4;
            if(!(var5 === var4)) { _fun0022_ip = 198; continue _fun0022 }
 80:
            var6 = var2.isNaN;
            var5 = var1.joinedAt;
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            if(var4) { _fun0022_ip = 198; continue _fun0022 }
 102:
            var4 = var1.joinedAt;
            return var4;
 110:
            var5 = var2.Date;
            var7 = var1.joinedAt;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var1 = new var8[var5](var7, var6);
            var4 = var1 instanceof Object ? var1 : var4;
            var1 = var4.getTime;
            var1 = var1.bind(var4)();
            var5 = var2.isNaN;
            var4 = undefined;
            var4 = var5.bind(var4)(var1);
            if(var4) { _fun0022_ip = 198; continue _fun0022 }
 168:
            return var1;
 170:
            var1 = var3.getTime;
            var1 = var1.bind(var3)();
            var3 = var2.isNaN;
            var2 = undefined;
            var2 = var3.bind(var2)(var1);
            if(var2) { _fun0022_ip = 198; continue _fun0022 }
 196:
            return var1;
 198:
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot100 = var1;
    var1 = function isOldReadState(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
            var5 = arg1;
            var9 = arg2;
            var1 = var5.mentionCount;
            var6 = 0;
            var1 = var1 > var6;
            if(var1) { _fun0023_ip = 197; continue _fun0023 }
 24:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var11 = 40;
            var2 = var2[var11];
            var10 = undefined;
            var4 = var3.bind(var10)(var2);
            var3 = var4.compare;
            var2 = var5.channelId;
            var2 = var3.bind(var4)(var2, var9);
            var3 = var2 > var6;
            var2 = !var3;
            if(var3) { _fun0023_ip = 194; continue _fun0023 }
 76:
            var3 = var5._ackMessageId;
            var8 = null;
            var4 = var8 != var3;
            if(!var4) { _fun0023_ip = 130; continue _fun0023 }
 91:
            var12 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var11];
            var13 = var12.bind(var10)(var3);
            var12 = var13.compare;
            var3 = var5._ackMessageId;
            var3 = var12.bind(var13)(var3, var9);
            var4 = var3 > var6;
 130:
            var3 = !var4;
            if(var4) { _fun0023_ip = 191; continue _fun0023 }
 136:
            var4 = var5._lastMessageId;
            var4 = var8 != var4;
            if(!var4) { _fun0023_ip = 188; continue _fun0023 }
 149:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var11];
            var8 = var8.bind(var10)(var7);
            var7 = var8.compare;
            var5 = var5._lastMessageId;
            var5 = var7.bind(var8)(var5, var9);
            var4 = var5 > var6;
 188:
            var3 = !var4;
 191:
            var2 = var3;
 194:
            var1 = var2;
 197:
            return var1;
        }
    };
    var _closure1_slot101 = var1;
    var1 = function tryAck(arg1, arg2) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
            var4 = arg2;
            var1 = null;
            if(!(var1 != var4)) { _fun0024_ip = 75; continue _fun0024 }
 9:
            var3 = _closure1_slot78;
            var2 = var3.get;
            var4 = var2.bind(var3)(var4);
            var2 = _closure1_slot94;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var1 = !var2;
            var1 = !var1;
            if(!var2) { _fun0024_ip = 73; continue _fun0024 }
 46:
            var3 = var4.ack;
            var2 = {};
            var5 = true;
            var2['trackAnalytics'] = var5;
            var5 = arg1;
            var2['location'] = var5;
            var1 = var3.bind(var4)(var2);
 73:
            return var1;
 75:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot102 = var1;
    var1 = function tryAckParentForumChannel(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
            var6 = arg1;
            var3 = null;
            if(!(var3 != var6)) { _fun0025_ip = 297; continue _fun0025 }
 14:
            var4 = _closure1_slot78;
            var1 = var4.get;
            var1 = var1.bind(var4)(var6);
            var6 = var1.type;
            var4 = _closure1_slot60;
            var4 = var4.CHANNEL;
            if(!(var6 === var4)) { _fun0025_ip = 297; continue _fun0025 }
 53:
            var6 = _closure1_slot29;
            var4 = var6.getChannel;
            var1 = var1.channelId;
            var4 = var4.bind(var6)(var1);
            if(!(var3 != var4)) { _fun0025_ip = 297; continue _fun0025 }
 79:
            var1 = var4.isForumPost;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0025_ip = 297; continue _fun0025 }
 95:
            var1 = var4.parent_id;
            if(!(var3 != var1)) { _fun0025_ip = 297; continue _fun0025 }
 108:
            var10 = var4.parent_id;
            var3 = _closure1_slot78;
            var1 = var3.get;
            var3 = var1.bind(var3)(var10);
            var _closure2_slot0 = var3;
            var7 = _closure1_slot19;
            var6 = var7.hasLoaded;
            var1 = var4.guild_id;
            var1 = var6.bind(var7)(var1);
            if(!var1) { _fun0025_ip = 224; continue _fun0025 }
 155:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 40;
            var7 = var7[var6];
            var6 = undefined;
            var7 = var8.bind(var6)(var7);
            var6 = var7.keys;
            var9 = _closure1_slot19;
            var8 = var9.getThreadsForParent;
            var4 = var4.guild_id;
            var4 = var8.bind(var9)(var4, var10);
            var6 = var6.bind(var7)(var4);
            var4 = var6.every;
            var2 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                    var5 = arg1;
                    var3 = _closure1_slot80;
                    var1 = var3.hasOpenedThread;
                    var1 = var1.bind(var3)(var5);
                    if(var1) { _fun0026_ip = 77; continue _fun0026 }
 24:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.compare;
                    var2 = _closure2_slot0;
                    var2 = var2.ackMessageId;
                    var3 = var3.bind(var4)(var5, var2);
                    var2 = 0;
                    var1 = var3 < var2;
 77:
                    return var1;
                }
            };
            var1 = var4.bind(var6)(var2);
 224:
            if(!var1) { _fun0025_ip = 297; continue _fun0025 }
 227:
            var2 = var3.ack;
            var1 = {};
            var4 = true;
            var1['trackAnalytics'] = var4;
            var4 = {};
            var6 = _closure1_slot43;
            var6 = var6.CHANNEL;
            var4['section'] = var6;
            var6 = _closure1_slot42;
            var6 = var6.ACK_FORUM_CHANNEL_NO_UNREAD_POSTS;
            var4['object'] = var6;
            var5 = _closure1_slot41;
            var5 = var5.ACK_AUTOMATIC;
            var4['objectType'] = var5;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
 297:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot103 = var1;
    var18 = function clearDeleteOldReadStatesTimer() {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
            var3 = _closure1_slot70;
            var2 = null;
            if(!(var2 != var3)) { _fun0027_ip = 32; continue _fun0027 }
 13:
            var2 = global;
            var3 = var2.clearTimeout;
            var2 = _closure1_slot70;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 32:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot104 = var18;
    var1 = function mergeChannelTimestampUpdates(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
            var3 = _closure1_slot82;
            var1 = undefined;
            var2 = arg1;
            var5 = var3.bind(var1)(var2);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = null;
            if(var2) { _fun0028_ip = 123; continue _fun0028 }
 31:
            var2 = var3.value;
            var9 = _closure1_slot78;
            var8 = var9.get;
            var7 = var2.id;
            var7 = var8.bind(var9)(var7);
            var8 = var2.last_message_id;
            if(!(var4 != var8)) { _fun0028_ip = 77; continue _fun0028 }
 65:
            var8 = var2.last_message_id;
            var7['lastMessageId'] = var8;
 77:
            var8 = var2.last_pin_timestamp;
            if(!(var4 != var8)) { _fun0028_ip = 108; continue _fun0028 }
 87:
            var8 = _closure1_slot86;
            var2 = var2.last_pin_timestamp;
            var2 = var8.bind(var1)(var2);
            var7['lastPinTimestamp'] = var2;
 108:
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0028_ip = 31; continue _fun0028 }
 123:
            return var1;
        }
    };
    var _closure1_slot105 = var1;
    var17 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot78;
        var1 = var2.get;
        var2 = var1.bind(var2)(var3);
        var1 = var2.rebuildChannelState;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var15 = function handleLoadArchivedThreadsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = _closure1_slot96;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var14 = function handleSearchMessagesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.data;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = var1.messages;
            var3 = var1.threads;
            var2 = var4.forEach;
            var1 = function(arg1) {
                var5 = arg1;
                var3 = _closure1_slot96;
                var4 = var5.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.thread;
                    return var1;
                };
                var5 = var4.bind(var5)(var2);
                var4 = var5.filter;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 57;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var6.bind(var1)(var2);
                var2 = var2.isNotNullish;
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var2 = _closure1_slot96;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var1 = function currentUserIsEventCreator(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot39;
            var1 = var2.getCurrentUser;
            var2 = var1.bind(var2)();
            var1 = var3.creator_id;
            var4 = null;
            var1 = var4 != var1;
            if(!var1) { _fun0029_ip = 38; continue _fun0029 }
 34:
            var1 = var4 != var2;
 38:
            if(!var1) { _fun0029_ip = 56; continue _fun0029 }
 41:
            var3 = var3.creator_id;
            var2 = var2.id;
            var1 = var3 === var2;
 56:
            return var1;
        }
    };
    var _closure1_slot106 = var1;
    var13 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = _closure1_slot78;
        var2 = var3.clear;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1 = function handleChannelSectionStoreUpdate() {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
            var3 = _closure1_slot28;
            var2 = var3.getCurrentSidebarChannelId;
            var1 = _closure1_slot64;
            var3 = var2.bind(var3)(var1);
            var1 = _closure1_slot65;
            if(!(var1 === var3)) { _fun0030_ip = 95; continue _fun0030 }
 30:
            var5 = _closure1_slot102;
            var2 = {};
            var1 = _closure1_slot43;
            var1 = var1.CHANNEL;
            var2['section'] = var1;
            var1 = _closure1_slot42;
            var1 = var1.ACK_CHANNEL_SECTION_STORE_UPDATE;
            var2['object'] = var1;
            var1 = _closure1_slot41;
            var1 = var1.ACK_AUTOMATIC;
            var2['objectType'] = var1;
            var1 = undefined;
            var1 = var5.bind(var1)(var2, var3);
            if(var1) { _fun0030_ip = 93; continue _fun0030 }
 91:
            var1 = false;
 93:
            _fun0030_ip = 114; continue _fun0030;
 95:
            var6 = _closure1_slot109;
            var5 = _closure1_slot65;
            var2 = undefined;
            var1 = var6.bind(var2)(var5);
            _closure1_slot65 = var3;
 114:
            return var1;
        }
    };
    var _closure1_slot107 = var1;
    var1 = function clearManualAck(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
            var3 = arg1;
            var1 = null;
            if(!(var1 != var3)) { _fun0031_ip = 34; continue _fun0031 }
 9:
            var2 = _closure1_slot78;
            var1 = var2.get;
            var2 = var1.bind(var2)(var3);
            var1 = false;
            var2['isManualAck'] = var1;
 34:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot108 = var1;
    var1 = function clearOldestUnreadMessageId(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
            var4 = arg1;
            var3 = null;
            if(!(var3 != var4)) { _fun0032_ip = 52; continue _fun0032 }
 9:
            var2 = _closure1_slot78;
            var1 = var2.get;
            var2 = var1.bind(var2)(var4);
            var1 = var2.hasUnread;
            var1 = var1.bind(var2)();
            var1 = !var1;
            if(!var1) { _fun0032_ip = 50; continue _fun0032 }
 42:
            var2['oldestUnreadMessageId'] = var3;
            var1 = true;
 50:
            return var1;
 52:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot109 = var1;
    var16 = function handleMessageAck(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
            var2 = arg1;
            var4 = var2.channelId;
            var6 = var2.messageId;
            var1 = var2.manual;
            var5 = var2.newMentionCount;
            var3 = _closure1_slot78;
            var2 = var3.get;
            var4 = var2.bind(var3)(var4);
            if(var1) { _fun0033_ip = 87; continue _fun0033 }
 45:
            var1 = var4._ackMessageId;
            var1 = var6 !== var1;
            if(!var1) { _fun0033_ip = 85; continue _fun0033 }
 58:
            var3 = var4.ack;
            var2 = {'messageId': null, 'local': true, 'trackAnalytics': false};
            var2['messageId'] = var6;
            var1 = var3.bind(var4)(var2);
 85:
            _fun0033_ip = 114; continue _fun0033;
 87:
            var3 = var4.rebuildChannelState;
            var2 = true;
            var3 = var3.bind(var4)(var6, var2, var5);
            var3 = var4.clearOutgoingAck;
            var3 = var3.bind(var4)();
            var1 = true;
 114:
            return var1;
        }
    };
    var _closure1_slot110 = var16;
    var12 = function handleGuildFeatureAck(arg1) {
        var1 = arg1;
        var10 = var1.id;
        var9 = var1.ackType;
        var8 = var1.ackedId;
        var7 = var1.local;
        var2 = _closure1_slot112;
        var11 = undefined;
        var1 = var11[var2](var10, var9, var8, var7, var6);
        return var1;
    };
    var _closure1_slot111 = var12;
    var1 = function handleNonChannelAck(arg1, arg2, arg3, arg4) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
            var8 = arg3;
            var7 = arg4;
            var5 = _closure1_slot78;
            var4 = var5.get;
            var2 = arg1;
            var1 = arg2;
            var5 = var4.bind(var5)(var2, var1);
            var1 = var5.ackMessageId;
            var1 = var8 !== var1;
            if(!var1) { _fun0034_ip = 59; continue _fun0034 }
 43:
            var4 = var5.lastMessageId;
            var2 = var5.ackMessageId;
            var1 = var4 !== var2;
 59:
            if(!var1) { _fun0034_ip = 194; continue _fun0034 }
 65:
            var2 = var5.lastMessageId;
            var6 = null;
            var2 = var6 != var2;
            if(var2) { _fun0034_ip = 92; continue _fun0034 }
 80:
            var9 = var5.mentionCount;
            var4 = 0;
            var2 = var4 !== var9;
 92:
            if(!var2) { _fun0034_ip = 191; continue _fun0034 }
 95:
            if(!(var6 == var8)) { _fun0034_ip = 105; continue _fun0034 }
 99:
            var8 = var5.lastMessageId;
 105:
            if(!(var6 == var8)) { _fun0034_ip = 152; continue _fun0034 }
 109:
            var9 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 40;
            var4 = var4[var3];
            var3 = undefined;
            var9 = var9.bind(var3)(var4);
            var4 = var9.fromTimestamp;
            var3 = var5.getAckTimestamp;
            var3 = var3.bind(var5)();
            var8 = var4.bind(var9)(var3);
 152:
            var4 = var5.ack;
            var3 = {};
            var3['messageId'] = var8;
            var6 = var6 == var7;
            if(var6) { _fun0034_ip = 174; continue _fun0034 }
 171:
            var6 = var7;
 174:
            var3['local'] = var6;
            var6 = false;
            var3['trackAnalytics'] = var6;
            var2 = var4.bind(var5)(var3);
 191:
            var1 = var2;
 194:
            return var1;
        }
    };
    var _closure1_slot112 = var1;
    var11 = global;
    var19 = var11.Object;
    var5 = var19.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var19)(var3, var1, var2);
    var19 = 0;
    var2 = var8[var19];
    var1 = undefined;
    var2 = var10.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var22 = 1;
    var2 = var8[var22];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var21 = 2;
    var2 = var8[var21];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var20 = 4;
    var2 = var8[var20];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot12 = var2;
    var2 = 10;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot13 = var2;
    var2 = 11;
    var5 = var8[var2];
    var5 = var10.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.isEventUpcoming;
    var _closure1_slot15 = var2;
    var2 = 12;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot16 = var2;
    var2 = 13;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot17 = var2;
    var2 = 14;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot18 = var2;
    var2 = 15;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot19 = var2;
    var2 = 16;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot20 = var2;
    var2 = 17;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot21 = var2;
    var2 = 18;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var5 = var2.isReadableType;
    var _closure1_slot22 = var5;
    var5 = var2.isThread;
    var _closure1_slot23 = var5;
    var5 = var2.isPrivate;
    var _closure1_slot24 = var5;
    var5 = var2.ALL_CHANNEL_TYPES;
    var _closure1_slot25 = var5;
    var2 = var2.THREAD_CHANNEL_TYPES;
    var _closure1_slot26 = var2;
    var2 = 19;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot27 = var2;
    var2 = 20;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot28 = var2;
    var2 = 21;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot29 = var2;
    var2 = 22;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot30 = var2;
    var2 = 23;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot31 = var2;
    var2 = 24;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot32 = var2;
    var2 = 25;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot33 = var2;
    var2 = 26;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot34 = var2;
    var2 = 27;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot35 = var2;
    var2 = 28;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot36 = var2;
    var2 = 29;
    var2 = var8[var2];
    var23 = var10.bind(var1)(var2);
    var _closure1_slot37 = var23;
    var24 = 30;
    var2 = var8[var24];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot38 = var2;
    var2 = 31;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot39 = var2;
    var2 = 32;
    var2 = var8[var2];
    var2 = var10.bind(var1)(var2);
    var _closure1_slot40 = var2;
    var2 = 33;
    var2 = var8[var2];
    var5 = var7.bind(var1)(var2);
    var2 = var5.AnalyticsObjectTypes;
    var _closure1_slot41 = var2;
    var2 = var5.AnalyticsObjects;
    var _closure1_slot42 = var2;
    var2 = var5.AnalyticsSections;
    var _closure1_slot43 = var2;
    var2 = var5.Endpoints;
    var _closure1_slot44 = var2;
    var2 = var5.ChannelLayouts;
    var _closure1_slot45 = var2;
    var2 = var5.OverlayWidgets;
    var2 = var5.CURRENT_APP_CONTEXT;
    var _closure1_slot46 = var2;
    var2 = var5.ChannelTypes;
    var _closure1_slot47 = var2;
    var2 = var5.BasicPermissions;
    var _closure1_slot48 = var2;
    var25 = var5.Permissions;
    var _closure1_slot49 = var25;
    var25 = var5.MessageTypes;
    var _closure1_slot50 = var25;
    var25 = var5.RelationshipTypes;
    var _closure1_slot51 = var25;
    var25 = var5.ChannelTypesSets;
    var _closure1_slot52 = var25;
    var25 = var5.UserNotificationSettings;
    var _closure1_slot53 = var25;
    var5 = var5.MessageTypesSets;
    var _closure1_slot54 = var5;
    var5 = 34;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var25 = var5.ActivityPanelModes;
    var _closure1_slot55 = var25;
    var5 = var5.FocusedActivityLayouts;
    var _closure1_slot56 = var5;
    var5 = 35;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var25 = var5.ChannelFlags;
    var _closure1_slot57 = var25;
    var5 = var5.isStaticChannelRoute;
    var _closure1_slot58 = var5;
    var5 = 36;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.GuildScheduledEventStatus;
    var _closure1_slot59 = var5;
    var5 = 37;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.ReadStateTypes;
    var _closure1_slot60 = var5;
    var5 = 38;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.ThreadMemberFlags;
    var _closure1_slot61 = var5;
    var5 = 39;
    var5 = var8[var5];
    var25 = var10.bind(var1)(var5);
    var5 = var25.prototype;
    var26 = Object.create(var5, {constructor: {value: var25}});
    var5 = 'ReadStateStore';
    var30 = var26;
    var29 = var5;
    var25 = new var30[var25](var29, var28);
    var25 = var25 instanceof Object ? var25 : var26;
    var _closure1_slot62 = var25;
    var25 = var2.VIEW_CHANNEL;
    var2 = var2.READ_MESSAGE_HISTORY;
    var2 = var25 | var2;
    var _closure1_slot63 = var2;
    var2 = var23.getChannelId;
    var2 = var2.bind(var23)();
    var _closure1_slot64 = var2;
    var2 = null;
    var _closure1_slot65 = var2;
    var _closure1_slot66 = var2;
    var23 = false;
    var _closure1_slot67 = var23;
    var25 = new Array(0);
    var _closure1_slot68 = var25;
    var _closure1_slot69 = var23;
    var _closure1_slot70 = var2;
    var23 = function() {
        var4 = _closure1_slot9;
        var3 = function AutoAckableChannelTracker() {
            var3 = this;
            var4 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = {};
            var3['channelWindowIds'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'addWindowId';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.channelWindowIds;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0035_ip = 60; continue _fun0035 }
 22:
                var4 = var1.channelWindowIds;
                var3 = global;
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var7 = var5;
                var3 = new var7[var3](var6);
                var3 = var3 instanceof Object ? var3 : var5;
                var4[var2] = var3;
 60:
                var1 = var1.channelWindowIds;
                var3 = var1[var2];
                var2 = var3.add;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'hasWindowId';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.channelWindowIds;
                var4 = var1[var3];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0036_ip = 48; continue _fun0036 }
 25:
                var2 = var2.channelWindowIds;
                var4 = var2[var3];
                var3 = var4.has;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
 48:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isChannelAckable';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.channelWindowIds;
                var4 = var1[var3];
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0037_ip = 46; continue _fun0037 }
 25:
                var2 = var2.channelWindowIds;
                var2 = var2[var3];
                var3 = var2.size;
                var2 = 0;
                var1 = var3 > var2;
 46:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getAllWindowIds';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                var4 = arg1;
                var1 = this;
                var2 = var1.channelWindowIds;
                var3 = var2[var4];
                var2 = null;
                if(!(var2 != var3)) { _fun0038_ip = 52; continue _fun0038 }
 22:
                var2 = global;
                var3 = var2.Array;
                var2 = var3.from;
                var1 = var1.channelWindowIds;
                var1 = var1[var4];
                var1 = var2.bind(var3)(var1);
                _fun0038_ip = 56; continue _fun0038;
 52:
                var1 = new Array(0);
 56:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getAllChannelIdsForWindowId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                var11 = arg1;
                var1 = global;
                var2 = var1.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var16 = var3;
                var2 = new var16[var2](var15);
                var3 = var2 instanceof Object ? var2 : var3;
                var4 = _closure1_slot82;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 40;
                var2 = var6[var2];
                var9 = undefined;
                var6 = var5.bind(var9)(var2);
                var5 = var6.entries;
                var2 = this;
                var2 = var2.channelWindowIds;
                var2 = var5.bind(var6)(var2);
                var8 = var4.bind(var9)(var2);
                var4 = var8.bind(var9)();
                var2 = var4.done;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                if(var2) { _fun0039_ip = 166; continue _fun0039 }
 105:
                var12 = var4.value;
                var2 = _closure1_slot7;
                var2 = var2.bind(var9)(var12, var7);
                var12 = var2[var6];
                var13 = var2[var5];
                var2 = var13.has;
                var2 = var2.bind(var13)(var11);
                if(!var2) { _fun0039_ip = 151; continue _fun0039 }
 141:
                var2 = var3.add;
                var2 = var2.bind(var3)(var12);
 151:
                var12 = var8.bind(var9)();
                var2 = var12.done;
                var4 = var12;
                if(!var2) { _fun0039_ip = 105; continue _fun0039 }
 166:
                var2 = var1.Array;
                var1 = var2.from;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'isAnyWindowFocused';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                var1 = this;
                var2 = var1.channelWindowIds;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                if(!(var1 != var2)) { _fun0040_ip = 96; continue _fun0040 }
 22:
                var1 = _closure1_slot82;
                var4 = undefined;
                var3 = var1.bind(var4)(var2);
                var2 = var3.bind(var4)();
                var1 = var2.done;
                if(var1) { _fun0040_ip = 92; continue _fun0040 }
 48:
                var7 = var2.value;
                var6 = _closure1_slot40;
                var1 = var6.isFocused;
                var1 = var1.bind(var6)(var7);
                if(var1) { _fun0040_ip = 88; continue _fun0040 }
 71:
                var6 = var3.bind(var4)();
                var1 = var6.done;
                var2 = var6;
                if(var1) { _fun0040_ip = 92; continue _fun0040 }
 86:
                _fun0040_ip = 48; continue _fun0040;
 88:
                var1 = true;
                return var1;
 92:
                var1 = false;
                return var1;
 96:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'removeWindowId';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.channelWindowIds;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 != var4)) { _fun0041_ip = 76; continue _fun0041 }
 22:
                var3 = var1.channelWindowIds;
                var5 = var3[var2];
                var4 = var5.delete;
                var3 = arg2;
                var3 = var4.bind(var5)(var3);
                var3 = var1.channelWindowIds;
                var3 = var3[var2];
                var4 = var3.size;
                var3 = 0;
                if(!(var3 === var4)) { _fun0041_ip = 76; continue _fun0041 }
 66:
                var1 = var1.channelWindowIds;
                var1 = delete var1[var2];
 76:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'forEachChannel';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                var9 = arg1;
                var3 = _closure1_slot82;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 40;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var2);
                var4 = var5.entries;
                var2 = this;
                var2 = var2.channelWindowIds;
                var2 = var4.bind(var5)(var2);
                var7 = var3.bind(var1)(var2);
                var3 = var7.bind(var1)();
                var2 = var3.done;
                var6 = 2;
                var5 = 0;
                var4 = 1;
                if(var2) { _fun0042_ip = 121; continue _fun0042 }
 77:
                var10 = var3.value;
                var2 = _closure1_slot7;
                var2 = var2.bind(var1)(var10, var6);
                var10 = var2[var5];
                var2 = var2[var4];
                var2 = var9.bind(var1)(var10, var2);
                var10 = var7.bind(var1)();
                var2 = var10.done;
                var3 = var10;
                if(!var2) { _fun0042_ip = 77; continue _fun0042 }
 121:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var23 = var23.bind(var1)();
    var25 = var23.prototype;
    var25 = Object.create(var25, {constructor: {value: var23}});
    var30 = var25;
    var23 = new var30[var23](var29);
    var23 = var23 instanceof Object ? var23 : var25;
    var _closure1_slot71 = var23;
    var23 = var11.Set;
    var25 = var23.prototype;
    var25 = Object.create(var25, {constructor: {value: var23}});
    var30 = var25;
    var23 = new var30[var23](var29);
    var23 = var23 instanceof Object ? var23 : var25;
    var _closure1_slot72 = var23;
    var23 = 41;
    var23 = var8[var23];
    var23 = var10.bind(var1)(var23);
    var23 = var23.Millis;
    var23 = var23.DAY;
    var23 = var24 * var23;
    var _closure1_slot73 = var23;
    var _closure1_slot74 = var19;
    var _closure1_slot75 = var19;
    var _closure1_slot76 = var2;
    var2 = {};
    var2['IS_GUILD_CHANNEL'] = var22;
    var19 = 'IS_GUILD_CHANNEL';
    var2[var22] = var19;
    var2['IS_THREAD'] = var21;
    var19 = 'IS_THREAD';
    var2[var21] = var19;
    var2['IS_MENTION_LOW_IMPORTANCE'] = var20;
    var19 = 'IS_MENTION_LOW_IMPORTANCE';
    var2[var20] = var19;
    var _closure1_slot77 = var2;
    var2 = function() {
        var5 = function ReadState(arg1) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                var4 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0043_ip = 25; continue _fun0043 }
 12:
                var2 = _closure1_slot60;
                var4 = var2.CHANNEL;
 25:
                var6 = _closure1_slot8;
                var5 = _closure2_slot0;
                var5 = var6.bind(var1)(var3, var5);
                var2 = _closure1_slot60;
                var2 = var2.CHANNEL;
                var3['type'] = var2;
                var2 = null;
                var3['outgoingAckTimer'] = var2;
                var3['ackMessageIdAtChannelSelect'] = var2;
                var3['ackedWhileCached'] = var1;
                var5 = arg1;
                var3['channelId'] = var5;
                var3['type'] = var4;
                var3['_guildId'] = var2;
                var5 = false;
                var3['_isThread'] = var5;
                var3['_isActiveThread'] = var5;
                var3['_isJoinedThread'] = var5;
                var3['_isResourceChannel'] = var5;
                var3['_persisted'] = var5;
                var3['loadedMessages'] = var5;
                var3['_lastMessageId'] = var2;
                var4 = 0;
                var3['_lastMessageTimestamp'] = var4;
                var3['_ackMessageId'] = var2;
                var3['_ackMessageTimestamp'] = var4;
                var3['isManualAck'] = var5;
                var3['ackPinTimestamp'] = var4;
                var3['lastPinTimestamp'] = var4;
                var3['_oldestUnreadMessageId'] = var2;
                var3['oldestUnreadMessageIdStale'] = var5;
                var3['estimated'] = var5;
                var3['_unreadCount'] = var4;
                var3['_mentionCount'] = var4;
                var3['outgoingAck'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot9;
        var1 = {};
        var2 = 'serialize';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                var1 = this;
                var22 = var1.channelId;
                var21 = var1.type;
                var20 = var1._guildId;
                var19 = var1._isThread;
                var18 = var1._isActiveThread;
                var17 = var1._isJoinedThread;
                var16 = var1._persisted;
                var15 = var1.loadedMessages;
                var14 = var1._lastMessageId;
                var13 = var1._lastMessageTimestamp;
                var12 = var1._ackMessageId;
                var11 = var1._ackMessageTimestamp;
                var10 = var1.ackPinTimestamp;
                var9 = var1.isManualAck;
                var8 = var1.lastPinTimestamp;
                var7 = var1._oldestUnreadMessageId;
                var6 = var1.oldestUnreadMessageIdStale;
                var5 = var1.estimated;
                var4 = var1._mentionCount;
                var3 = var1.flags;
                var2 = var1.lastViewed;
                var1 = arg1;
                if(var1) { _fun0044_ip = 238; continue _fun0044 }
 132:
                var1 = {};
                var1['channelId'] = var22;
                var1['type'] = var21;
                var1['_guildId'] = var20;
                var1['_persisted'] = var16;
                var1['_lastMessageId'] = var14;
                var1['_lastMessageTimestamp'] = var13;
                var1['_ackMessageId'] = var12;
                var1['_ackMessageTimestamp'] = var11;
                var1['ackPinTimestamp'] = var10;
                var1['lastPinTimestamp'] = var8;
                var1['_mentionCount'] = var4;
                var1['flags'] = var3;
                var23 = null;
                var23 = var23 != var2;
                if(!var23) { _fun0044_ip = 206; continue _fun0044 }
 200:
                var24 = 0;
                var23 = var2 > var24;
 206:
                if(!var23) { _fun0044_ip = 215; continue _fun0044 }
 209:
                var1['lastViewed'] = var2;
 215:
                if(!var19) { _fun0044_ip = 236; continue _fun0044 }
 218:
                var1['_isThread'] = var19;
                var1['_isActiveThread'] = var18;
                var1['_isJoinedThread'] = var17;
 236:
                return var1;
 238:
                var1 = {};
                var1['channelId'] = var22;
                var1['type'] = var21;
                var1['_guildId'] = var20;
                var1['_isThread'] = var19;
                var1['_isActiveThread'] = var18;
                var1['_isJoinedThread'] = var17;
                var1['_persisted'] = var16;
                var1['loadedMessages'] = var15;
                var1['_lastMessageId'] = var14;
                var1['_lastMessageTimestamp'] = var13;
                var1['_ackMessageId'] = var12;
                var1['_ackMessageTimestamp'] = var11;
                var1['ackPinTimestamp'] = var10;
                var1['isManualAck'] = var9;
                var1['lastPinTimestamp'] = var8;
                var1['_oldestUnreadMessageId'] = var7;
                var1['oldestUnreadMessageIdStale'] = var6;
                var1['estimated'] = var5;
                var1['_mentionCount'] = var4;
                var1['flags'] = var3;
                var1['lastViewed'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3 = new Array(39);
        var3[0] = var1;
        var1 = {};
        var2 = 'deserializeForOverlay';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var4 = var2.channelId;
                var24 = var2.type;
                var20 = var2._guildId;
                var23 = var2._isThread;
                var17 = var2._isActiveJoinedThread;
                var22 = var2._isActiveThread;
                var21 = var2._isJoinedThread;
                var19 = var2._persisted;
                var18 = var2.loadedMessages;
                var16 = var2._lastMessageId;
                var15 = var2._lastMessageTimestamp;
                var14 = var2._ackMessageId;
                var13 = var2._ackMessageTimestamp;
                var11 = var2.ackPinTimestamp;
                var12 = var2.isManualAck;
                var10 = var2.lastPinTimestamp;
                var6 = var2._oldestUnreadMessageId;
                var9 = var2.oldestUnreadMessageIdStale;
                var8 = var2.estimated;
                var7 = var2._unreadCount;
                var5 = var2._mentionCount;
                var3 = var2.flags;
                var2 = var2.lastViewed;
                var1['channelId'] = var4;
                var4 = null;
                if(!(var4 == var24)) { _fun0045_ip = 168; continue _fun0045 }
 155:
                var25 = _closure1_slot60;
                var24 = var25.CHANNEL;
 168:
                var1['type'] = var24;
                var1['_guildId'] = var20;
                var20 = var4 != var23;
                if(!var20) { _fun0045_ip = 190; continue _fun0045 }
 187:
                var20 = var23;
 190:
                var1['_isThread'] = var20;
                if(!(var4 == var17)) { _fun0045_ip = 234; continue _fun0045 }
 200:
                var20 = var4 != var22;
                if(!var20) { _fun0045_ip = 210; continue _fun0045 }
 207:
                var20 = var22;
 210:
                var1['_isActiveThread'] = var20;
                var20 = var4 != var21;
                if(!var20) { _fun0045_ip = 226; continue _fun0045 }
 223:
                var20 = var21;
 226:
                var1['_isJoinedThread'] = var20;
                _fun0045_ip = 246; continue _fun0045;
 234:
                var1['_isActiveThread'] = var17;
                var1['_isJoinedThread'] = var17;
 246:
                var17 = false;
                var17 = var17 !== var19;
                var1['_persisted'] = var17;
                var17 = var4 != var18;
                if(!var17) { _fun0045_ip = 268; continue _fun0045 }
 265:
                var17 = var18;
 268:
                var1['loadedMessages'] = var17;
                var1['_lastMessageId'] = var16;
                var1['_lastMessageTimestamp'] = var15;
                var1['_ackMessageId'] = var14;
                var1['_ackMessageTimestamp'] = var13;
                var1['ackPinTimestamp'] = var11;
                var11 = var4 != var12;
                if(!var11) { _fun0045_ip = 314; continue _fun0045 }
 311:
                var11 = var12;
 314:
                var1['isManualAck'] = var11;
                var1['lastPinTimestamp'] = var10;
                var1['_oldestUnreadMessageId'] = var6;
                var6 = var4 != var9;
                if(!var6) { _fun0045_ip = 342; continue _fun0045 }
 339:
                var6 = var9;
 342:
                var1['oldestUnreadMessageIdStale'] = var6;
                var6 = var4 != var8;
                if(!var6) { _fun0045_ip = 358; continue _fun0045 }
 355:
                var6 = var8;
 358:
                var1['estimated'] = var6;
                var8 = var4 != var7;
                var4 = 0;
                var6 = 0;
                if(!var8) { _fun0045_ip = 378; continue _fun0045 }
 375:
                var6 = var7;
 378:
                var1['_unreadCount'] = var6;
                var1['_mentionCount'] = var5;
                var1['flags'] = var3;
                var1['lastViewed'] = var2;
                var3 = _closure2_slot0;
                var6 = var3._mentionChannels;
                var5 = var6.delete;
                var3 = var1.channelId;
                var3 = var5.bind(var6)(var3);
                var3 = var1._mentionCount;
                var3 = var3 > var4;
                if(!var3) { _fun0045_ip = 453; continue _fun0045 }
 443:
                var4 = var1.canHaveMentions;
                var3 = var4.bind(var1)();
 453:
                if(!var3) { _fun0045_ip = 481; continue _fun0045 }
 456:
                var2 = _closure2_slot0;
                var3 = var2._mentionChannels;
                var2 = var3.add;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
 481:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var1 = {};
        var2 = 'incrementGuildUnreadsSentinel';
        var1['key'] = var2;
        var2 = function value() {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                var1 = this;
                var3 = var1._guildId;
                var2 = null;
                if(!(var2 != var3)) { _fun0046_ip = 54; continue _fun0046 }
 15:
                var3 = _closure2_slot0;
                var2 = var3.getGuildSentinels;
                var1 = var1._guildId;
                var2 = var2.bind(var3)(var1);
                var1 = var2.unreadsSentinel;
                var1 = var1 + 1;
                var2['unreadsSentinel'] = var1;
 54:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var1 = {};
        var2 = 'oldestUnreadMessageId';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._oldestUnreadMessageId;
            return var1;
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            var2 = this;
            var1 = arg1;
            var2['_oldestUnreadMessageId'] = var1;
            var1 = false;
            var2['oldestUnreadMessageIdStale'] = var1;
            var1 = undefined;
            return var1;
        };
        var1['set'] = var2;
        var3[3] = var1;
        var1 = {};
        var2 = 'lastMessageId';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._lastMessageId;
            return var1;
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                var5 = arg1;
                var2 = this;
                var2['_lastMessageId'] = var5;
                var1 = null;
                var3 = var1 != var5;
                var1 = 0;
                if(!var3) { _fun0047_ip = 59; continue _fun0047 }
 23:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 40;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.extractTimestamp;
                var1 = var3.bind(var4)(var5);
 59:
                var2['_lastMessageTimestamp'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['set'] = var2;
        var3[4] = var1;
        var1 = {};
        var2 = 'lastMessageTimestamp';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._lastMessageTimestamp;
            return var1;
        };
        var1['get'] = var2;
        var3[5] = var1;
        var1 = {};
        var2 = 'ackMessageId';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._ackMessageId;
            return var1;
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                var5 = arg1;
                var2 = this;
                var2['_ackMessageId'] = var5;
                var1 = null;
                var3 = var1 != var5;
                var1 = 0;
                if(!var3) { _fun0048_ip = 59; continue _fun0048 }
 23:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 40;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var6.bind(var3)(var4);
                var3 = var4.extractTimestamp;
                var1 = var3.bind(var4)(var5);
 59:
                var2['_ackMessageTimestamp'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['set'] = var2;
        var3[6] = var1;
        var1 = {};
        var2 = 'unreadCount';
        var1['key'] = var2;
        var2 = function get() {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                var1 = this;
                var2 = var1._unreadCount;
                var1 = null;
                var3 = var1 != var2;
                var1 = 0;
                if(!var3) { _fun0049_ip = 23; continue _fun0049 }
 20:
                var1 = var2;
 23:
                return var1;
            }
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                var3 = arg1;
                var2 = this;
                var4 = var2._unreadCount;
                var1 = undefined;
                var4 = var1 !== var4;
                if(!var4) { _fun0050_ip = 33; continue _fun0050 }
 21:
                var6 = var2._unreadCount;
                var5 = 0;
                var4 = var5 !== var6;
 33:
                if(!var4) { _fun0050_ip = 42; continue _fun0050 }
 36:
                var5 = 0;
                var4 = var5 !== var3;
 42:
                if(var4) { _fun0050_ip = 55; continue _fun0050 }
 45:
                var4 = var2.incrementGuildUnreadsSentinel;
                var4 = var4.bind(var2)();
 55:
                var2['_unreadCount'] = var3;
                return var1;
            }
        };
        var1['set'] = var2;
        var3[7] = var1;
        var1 = {};
        var2 = 'mentionCount';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1._mentionCount;
            return var1;
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1._mentionCount;
                var4 = 0;
                var3 = var4 !== var3;
                if(!var3) { _fun0051_ip = 25; continue _fun0051 }
 21:
                var3 = var4 !== var2;
 25:
                if(var3) { _fun0051_ip = 38; continue _fun0051 }
 28:
                var5 = var1._mentionCount;
                var3 = var5 === var2;
 38:
                if(var3) { _fun0051_ip = 51; continue _fun0051 }
 41:
                var3 = var1.incrementGuildUnreadsSentinel;
                var3 = var3.bind(var1)();
 51:
                var1['_mentionCount'] = var2;
                var3 = _closure2_slot0;
                var6 = var3._mentionChannels;
                var5 = var6.delete;
                var3 = var1.channelId;
                var3 = var5.bind(var6)(var3);
                var3 = var1._mentionCount;
                var3 = var3 > var4;
                if(!var3) { _fun0051_ip = 108; continue _fun0051 }
 98:
                var4 = var1.canHaveMentions;
                var3 = var4.bind(var1)();
 108:
                if(!var3) { _fun0051_ip = 136; continue _fun0051 }
 111:
                var2 = _closure2_slot0;
                var3 = var2._mentionChannels;
                var2 = var3.add;
                var1 = var1.channelId;
                var1 = var2.bind(var3)(var1);
 136:
                var1 = undefined;
                return var1;
            }
        };
        var1['set'] = var2;
        var3[8] = var1;
        var1 = {};
        var2 = 'isMentionLowImportance';
        var1['key'] = var2;
        var2 = function get() {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                var2 = this;
                var3 = var2.flags;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0052_ip = 49; continue _fun0052 }
 17:
                var4 = var2.flags;
                var2 = _closure1_slot77;
                var3 = var2.IS_MENTION_LOW_IMPORTANCE;
                var3 = var4 & var3;
                var2 = var2.IS_MENTION_LOW_IMPORTANCE;
                var1 = var3 === var2;
 49:
                return var1;
            }
        };
        var1['get'] = var2;
        var2 = function set(arg1) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                var2 = this;
                var1 = arg1;
                if(var1) { _fun0053_ip = 70; continue _fun0053 }
 9:
                var3 = var2.flags;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0053_ip = 34; continue _fun0053 }
 23:
                var4 = var2.flags;
                var3 = 0;
                var1 = var3 !== var4;
 34:
                if(!var1) { _fun0053_ip = 124; continue _fun0053 }
 37:
                var3 = var2.flags;
                var1 = _closure1_slot77;
                var1 = var1.IS_MENTION_LOW_IMPORTANCE;
                var1 = ~var1;
                var1 = var3 & var1;
                var2['flags'] = var1;
                _fun0053_ip = 124; continue _fun0053;
 70:
                var1 = var2._mentionCount;
                var3 = 0;
                if(!(var3 === var1)) { _fun0053_ip = 124; continue _fun0053 }
 82:
                var1 = var2.flags;
                var4 = null;
                var4 = var4 != var1;
                var3 = 0;
                if(!var4) { _fun0053_ip = 101; continue _fun0053 }
 98:
                var3 = var1;
 101:
                var1 = _closure1_slot77;
                var1 = var1.IS_MENTION_LOW_IMPORTANCE;
                var1 = var3 | var1;
                var2['flags'] = var1;
 124:
                var1 = undefined;
                return var1;
            }
        };
        var1['set'] = var2;
        var3[9] = var1;
        var1 = {};
        var2 = 'guessAckMessageId';
        var1['key'] = var2;
        var2 = function value() {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                var1 = this;
                var6 = _closure1_slot34;
                var5 = var6.getMessages;
                var4 = var1.channelId;
                var6 = var5.bind(var6)(var4);
                var5 = var1.ackMessageId;
                var4 = null;
                if(!(var4 == var5)) { _fun0054_ip = 139; continue _fun0054 }
 40:
                var5 = var1.isPrivate;
                var5 = var5.bind(var1)();
                if(!var5) { _fun0054_ip = 139; continue _fun0054 }
 53:
                var5 = var6.hasMoreAfter;
                if(var5) { _fun0054_ip = 139; continue _fun0054 }
 62:
                var5 = var1.hasMentions;
                var5 = var5.bind(var1)();
                if(var5) { _fun0054_ip = 83; continue _fun0054 }
 75:
                var5 = var1.lastMessageId;
                return var5;
 83:
                var _closure3_slot0 = var4;
                var4 = var1.mentionCount;
                var _closure3_slot1 = var4;
                var4 = _closure1_slot39;
                var3 = var4.getCurrentUser;
                var3 = var3.bind(var4)();
                var _closure3_slot2 = var3;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                        var1 = arg1;
                        var3 = _closure3_slot1;
                        var4 = 0;
                        if(!(var3 > var4)) { _fun0055_ip = 55; continue _fun0055 }
 16:
                        var3 = var1.author;
                        var5 = var3.id;
                        var6 = _closure3_slot2;
                        var3 = null;
                        var6 = var3 == var6;
                        var3 = undefined;
                        if(var6) { _fun0055_ip = 51; continue _fun0055 }
 42:
                        var6 = _closure3_slot2;
                        var3 = var6.id;
 51:
                        if(!(var5 === var3)) { _fun0055_ip = 76; continue _fun0055 }
 55:
                        var3 = _closure3_slot1;
                        if(!(var4 === var3)) { _fun0055_ip = 87; continue _fun0055 }
 63:
                        var1 = var1.id;
                        _closure3_slot0 = var1;
                        var1 = false;
                        return var1;
 76:
                        var1 = _closure3_slot1;
                        var1 = var1 - 1;
                        _closure3_slot1 = var1;
 87:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = true;
                var3 = var5.bind(var6)(var4, var1, var3);
                var2 = _closure3_slot0;
                return var2;
 139:
                var1 = var1.ackMessageId;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[10] = var1;
        var1 = {};
        var2 = 'guildId';
        var1['key'] = var2;
        var2 = function get() {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                var1 = this;
                var3 = var1._guildId;
                var2 = null;
                if(!(var2 == var3)) { _fun0056_ip = 64; continue _fun0056 }
 15:
                var5 = _closure1_slot29;
                var4 = var5.getChannel;
                var3 = var1.channelId;
                var4 = var4.bind(var5)(var3);
                var3 = var2 != var4;
                var2 = null;
                if(!var3) { _fun0056_ip = 56; continue _fun0056 }
 46:
                var3 = var4.getGuildId;
                var2 = var3.bind(var4)();
 56:
                var1['_guildId'] = var2;
                return var2;
 64:
                var1 = var1._guildId;
                return var1;
            }
        };
        var1['get'] = var2;
        var3[11] = var1;
        var1 = {};
        var2 = 'isPrivate';
        var1['key'] = var2;
        var2 = function value() {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                var1 = this;
                var4 = var1.type;
                var3 = _closure1_slot60;
                var3 = var3.CHANNEL;
                if(!(var4 === var3)) { _fun0057_ip = 65; continue _fun0057 }
 25:
                var3 = _closure1_slot29;
                var2 = var3.getChannel;
                var1 = var1.channelId;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0057_ip = 63; continue _fun0057 }
 53:
                var2 = var3.isPrivate;
                var1 = var2.bind(var3)();
 63:
                return var1;
 65:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[12] = var1;
        var1 = {};
        var2 = 'rebuildChannelState';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
 0:
                var5 = arg1;
                var8 = arguments[1];
                var3 = arguments[2];
                var2 = this;
                var _closure3_slot0 = var2;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0058_ip = 26; continue _fun0058 }
 24:
                var8 = false;
 26:
                var _closure3_slot1 = var8;
                var _closure3_slot2 = var1;
                var _closure3_slot3 = var1;
                var _closure3_slot4 = var1;
                var _closure3_slot5 = var1;
                var _closure3_slot6 = var1;
                var4 = null;
                var7 = var5;
                if(!(var4 == var7)) { _fun0058_ip = 65; continue _fun0058 }
 59:
                var7 = var2._ackMessageId;
 65:
                if(!(var4 == var7)) { _fun0058_ip = 81; continue _fun0058 }
 69:
                var9 = var2.guessAckMessageId;
                var7 = var9.bind(var2)();
 81:
                var2['ackMessageId'] = var7;
                var5 = var4 != var5;
                var2['isManualAck'] = var5;
                var2['oldestUnreadMessageId'] = var4;
                var7 = false;
                var2['estimated'] = var7;
                var5 = 0;
                var2['unreadCount'] = var5;
                if(!var8) { _fun0058_ip = 128; continue _fun0058 }
 122:
                var2['mentionCount'] = var5;
 128:
                var5 = var2.hasUnread;
                var5 = var5.bind(var2)();
                if(!var5) { _fun0058_ip = 303; continue _fun0058 }
 144:
                var9 = _closure1_slot39;
                var8 = var9.getCurrentUser;
                var8 = var8.bind(var9)();
                _closure3_slot2 = var8;
                var8 = var2.getAckTimestamp;
                var8 = var8.bind(var2)();
                _closure3_slot3 = var8;
                _closure3_slot4 = var7;
                _closure3_slot5 = var7;
                _closure3_slot6 = var4;
                var8 = _closure1_slot34;
                var7 = var8.getMessages;
                var5 = var2.channelId;
                var8 = var7.bind(var8)(var5);
                var7 = var8.forAll;
                var5 = function(arg1) {
                    _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
 0:
                        var2 = arg1;
                        var1 = _closure3_slot4;
                        if(var1) { _fun0059_ip = 38; continue _fun0059 }
 13:
                        var4 = var2.id;
                        var1 = _closure3_slot0;
                        var1 = var1._ackMessageId;
                        var1 = var4 === var1;
                        _closure3_slot4 = var1;
                        _fun0059_ip = 65; continue _fun0059;
 38:
                        var4 = _closure3_slot0;
                        var1 = var4._oldestUnreadMessageId;
                        var5 = null;
                        if(!(var5 == var1)) { _fun0059_ip = 59; continue _fun0059 }
 54:
                        var1 = var2.id;
 59:
                        var4['oldestUnreadMessageId'] = var1;
 65:
                        var6 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var1 = 40;
                        var4 = var4[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var4);
                        var6 = var7.extractTimestamp;
                        var4 = var2.id;
                        var6 = var6.bind(var7)(var4);
                        var4 = _closure3_slot3;
                        if(!(!(var6 > var4))) { _fun0059_ip = 122; continue _fun0059 }
 114:
                        var4 = true;
                        _closure3_slot5 = var4;
                        _fun0059_ip = 209; continue _fun0059;
 122:
                        var6 = _closure3_slot0;
                        var4 = var6.unreadCount;
                        var4 = var4 + 1;
                        var6['unreadCount'] = var4;
                        var4 = _closure3_slot1;
                        if(!var4) { _fun0059_ip = 162; continue _fun0059 }
 148:
                        var6 = _closure1_slot87;
                        var5 = _closure3_slot2;
                        var4 = var6.bind(var1)(var2, var5);
 162:
                        if(!var4) { _fun0059_ip = 184; continue _fun0059 }
 165:
                        var5 = _closure3_slot0;
                        var4 = var5.mentionCount;
                        var4 = var4 + 1;
                        var5['mentionCount'] = var4;
 184:
                        var5 = _closure3_slot6;
                        var4 = null;
                        if(!(var4 == var5)) { _fun0059_ip = 201; continue _fun0059 }
 194:
                        var2 = var2.id;
                        _fun0059_ip = 205; continue _fun0059;
 201:
                        var2 = _closure3_slot6;
 205:
                        _closure3_slot6 = var2;
 209:
                        return var1;
                    }
                };
                var5 = var7.bind(var8)(var5);
                var5 = var8.hasPresent;
                var5 = var5.bind(var8)();
                var5 = !var5;
                if(var5) { _fun0058_ip = 277; continue _fun0058 }
 242:
                var9 = _closure3_slot4;
                if(var9) { _fun0058_ip = 253; continue _fun0058 }
 249:
                var9 = _closure3_slot5;
 253:
                var7 = !var9;
                if(var9) { _fun0058_ip = 274; continue _fun0058 }
 259:
                var9 = var8.length;
                var8 = var2.unreadCount;
                var7 = var9 === var8;
 274:
                var5 = var7;
 277:
                var2['estimated'] = var5;
                var5 = var2._oldestUnreadMessageId;
                if(!(var4 == var5)) { _fun0058_ip = 297; continue _fun0058 }
 293:
                var5 = _closure3_slot6;
 297:
                var2['oldestUnreadMessageId'] = var5;
 303:
                if(!(var4 != var3)) { _fun0058_ip = 313; continue _fun0058 }
 307:
                var2['mentionCount'] = var3;
 313:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[13] = var1;
        var1 = {};
        var2 = 'handleGuildEventRemoval';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
 0:
                var3 = this;
                var5 = _closure1_slot1;
                var1 = _closure1_slot2;
                var11 = 40;
                var4 = var1[var11];
                var1 = undefined;
                var7 = var5.bind(var1)(var4);
                var6 = var7.compare;
                var5 = var3.ackMessageId;
                var4 = arg2;
                var5 = var6.bind(var7)(var5, var4);
                var4 = 0;
                if(!(!(var5 >= var4))) { _fun0060_ip = 191; continue _fun0060 }
 60:
                var7 = _closure1_slot14;
                var6 = var7.getGuildScheduledEventsForGuild;
                var5 = arg1;
                var6 = var6.bind(var7)(var5);
                var5 = var3.getAckTimestamp;
                var10 = var5.bind(var3)();
                var5 = global;
                var5 = var5.isNaN;
                var5 = var5.bind(var1)(var10);
                if(var5) { _fun0060_ip = 191; continue _fun0060 }
 104:
                var7 = var3._ackMessageId;
                var5 = null;
                if(!(var5 == var7)) { _fun0060_ip = 144; continue _fun0060 }
 116:
                var9 = _closure1_slot1;
                var8 = _closure1_slot2;
                var8 = var8[var11];
                var9 = var9.bind(var1)(var8);
                var8 = var9.fromTimestamp;
                var7 = var8.bind(var9)(var10);
 144:
                var _closure3_slot0 = var7;
                var _closure3_slot1 = var5;
                var _closure3_slot2 = var4;
                var5 = var6.forEach;
                var4 = function(arg1) {
                    _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
 0:
                        var2 = arg1;
                        var3 = _closure1_slot15;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        if(!var3) { _fun0061_ip = 132; continue _fun0061 }
 20:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var7 = 40;
                        var3 = var3[var7];
                        var9 = var4.bind(var1)(var3);
                        var8 = var9.compare;
                        var6 = var2.id;
                        var4 = _closure3_slot1;
                        var6 = var8.bind(var9)(var6, var4);
                        var4 = 0;
                        if(!(var6 > var4)) { _fun0061_ip = 79; continue _fun0061 }
 70:
                        var6 = var2.id;
                        _closure3_slot1 = var6;
 79:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var5 = var5[var7];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.compare;
                        var5 = var2.id;
                        var2 = _closure3_slot0;
                        var2 = var6.bind(var7)(var5, var2);
                        if(!(var2 > var4)) { _fun0061_ip = 132; continue _fun0061 }
 121:
                        var2 = _closure3_slot2;
                        var2 = var2 + 1;
                        _closure3_slot2 = var2;
 132:
                        return var1;
                    }
                };
                var4 = var5.bind(var6)(var4);
                var4 = _closure3_slot1;
                var3['lastMessageId'] = var4;
                var2 = _closure3_slot2;
                var3['mentionCount'] = var2;
 191:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[14] = var1;
        var1 = {};
        var2 = 'canTrackUnreads';
        var1['key'] = var2;
        var2 = function value() {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
 0:
                var2 = this;
                var4 = var2.type;
                var1 = _closure1_slot60;
                var1 = var1.CHANNEL;
                if(!(var4 === var1)) { _fun0062_ip = 223; continue _fun0062 }
 28:
                var1 = var2._isThread;
                if(!var1) { _fun0062_ip = 50; continue _fun0062 }
 37:
                var1 = var2._isActiveThread;
                if(var1) { _fun0062_ip = 50; continue _fun0062 }
 46:
                var1 = false;
                return var1;
 50:
                var1 = var2._isResourceChannel;
                if(var1) { _fun0062_ip = 219; continue _fun0062 }
 62:
                var5 = _closure1_slot29;
                var4 = var5.getBasicChannel;
                var1 = var2.channelId;
                var4 = var4.bind(var5)(var1);
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0062_ip = 217; continue _fun0062 }
 94:
                var5 = 'basicPermissions';
                var5 = var5 in var4;
                if(var5) { _fun0062_ip = 165; continue _fun0062 }
 105:
                var7 = _closure1_slot12;
                var6 = var7.isChannelGated;
                var5 = var2.guildId;
                var2 = var2.channelId;
                var2 = var6.bind(var7)(var5, var2);
                var2 = !var2;
                if(var2) { _fun0062_ip = 163; continue _fun0062 }
 137:
                var7 = _closure1_slot35;
                var6 = var7.can;
                var5 = _closure1_slot49;
                var5 = var5.VIEW_CHANNEL;
                var2 = var6.bind(var7)(var5, var4);
 163:
                _fun0062_ip = 214; continue _fun0062;
 165:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 48;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.has;
                var4 = var4.basicPermissions;
                var3 = _closure1_slot48;
                var3 = var3.VIEW_CHANNEL;
                var2 = var5.bind(var6)(var4, var3);
 214:
                var1 = var2;
 217:
                return var1;
 219:
                var1 = false;
                return var1;
 223:
                var1 = true;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[15] = var1;
        var1 = {};
        var2 = 'canBeUnread';
        var1['key'] = var2;
        var2 = function value() {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
 0:
                var2 = this;
                var1 = var2._isThread;
                if(!var1) { _fun0063_ip = 25; continue _fun0063 }
 12:
                var1 = var2._isJoinedThread;
                if(var1) { _fun0063_ip = 25; continue _fun0063 }
 21:
                var1 = false;
                return var1;
 25:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 49;
                var3 = var5[var3];
                var5 = undefined;
                var7 = var4.bind(var5)(var3);
                var6 = var7.isMessageRequestOrSpamRequest;
                var4 = var2.channelId;
                var8 = _closure1_slot16;
                var3 = new Array(2);
                var3[0] = var8;
                var8 = _closure1_slot17;
                var3[1] = var8;
                var3 = var6.bind(var7)(var4, var3);
                if(var3) { _fun0063_ip = 232; continue _fun0063 }
 93:
                var3 = var2._isThread;
                if(var3) { _fun0063_ip = 220; continue _fun0063 }
 102:
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 50;
                var3 = var6[var3];
                var5 = var4.bind(var5)(var3);
                var4 = var5.isOptInEnabledForGuild;
                var3 = var2._guildId;
                var3 = var4.bind(var5)(var3);
                if(!var3) { _fun0063_ip = 220; continue _fun0063 }
 142:
                var4 = var2._lastMessageTimestamp;
                var3 = _closure1_slot74;
                if(!(!(var4 < var3))) { _fun0063_ip = 216; continue _fun0063 }
 156:
                var5 = _closure1_slot38;
                var4 = var5.isChannelOrParentOptedIn;
                var3 = var2._guildId;
                var1 = var2.channelId;
                var1 = var4.bind(var5)(var3, var1);
                if(var1) { _fun0063_ip = 220; continue _fun0063 }
 186:
                var1 = var2.hasRecentlyVisitedAndRead;
                var1 = var1.bind(var2)();
                if(var1) { _fun0063_ip = 220; continue _fun0063 }
 199:
                var1 = var2.hasMentions;
                var1 = var1.bind(var2)();
                if(var1) { _fun0063_ip = 220; continue _fun0063 }
 212:
                var1 = false;
                return var1;
 216:
                var1 = false;
                return var1;
 220:
                var1 = var2.canTrackUnreads;
                var1 = var1.bind(var2)();
                return var1;
 232:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[16] = var1;
        var1 = {};
        var2 = 'canHaveMentions';
        var1['key'] = var2;
        var2 = function value() {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
 0:
                var6 = this;
                var2 = var6.mentionCount;
                var1 = 0;
                var1 = var1 !== var2;
                if(!var1) { _fun0064_ip = 195; continue _fun0064 }
 21:
                var2 = var6._isThread;
                if(!var2) { _fun0064_ip = 39; continue _fun0064 }
 30:
                var3 = var6._isJoinedThread;
                var2 = !var3;
 39:
                var2 = !var2;
                if(!var2) { _fun0064_ip = 192; continue _fun0064 }
 48:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 49;
                var3 = var7[var3];
                var8 = undefined;
                var9 = var4.bind(var8)(var3);
                var7 = var9.isMessageRequestOrSpamRequest;
                var4 = var6.channelId;
                var10 = _closure1_slot16;
                var3 = new Array(2);
                var3[0] = var10;
                var10 = _closure1_slot17;
                var3[1] = var10;
                var3 = var7.bind(var9)(var4, var3);
                var3 = !var3;
                if(!var3) { _fun0064_ip = 189; continue _fun0064 }
 116:
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var4 = 50;
                var4 = var9[var4];
                var8 = var7.bind(var8)(var4);
                var7 = var8.isOptInEnabledForGuild;
                var4 = var6._guildId;
                var4 = var7.bind(var8)(var4);
                if(!var4) { _fun0064_ip = 170; continue _fun0064 }
 156:
                var7 = var6._lastMessageTimestamp;
                var5 = _closure1_slot74;
                var4 = var7 < var5;
 170:
                var4 = !var4;
                if(!var4) { _fun0064_ip = 186; continue _fun0064 }
 176:
                var5 = var6.canTrackUnreads;
                var4 = var5.bind(var6)();
 186:
                var3 = var4;
 189:
                var2 = var3;
 192:
                var1 = var2;
 195:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[17] = var1;
        var1 = {};
        var2 = 'getGuildChannelUnreadState';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3, arg4, arg5) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
 0:
                var2 = arg1;
                var3 = this;
                var1 = arg2;
                if(!var1) { _fun0065_ip = 91; continue _fun0065 }
 12:
                var5 = var3._lastMessageTimestamp;
                var4 = _closure1_slot74;
                if(!(!(var5 < var4))) { _fun0065_ip = 346; continue _fun0065 }
 32:
                var4 = _closure1_slot38;
                var1 = var4.isChannelRecordOrParentOptedIn;
                var1 = var1.bind(var4)(var2);
                if(var1) { _fun0065_ip = 91; continue _fun0065 }
 50:
                var1 = var3.hasRecentlyVisitedAndRead;
                var1 = var1.bind(var3)();
                if(var1) { _fun0065_ip = 91; continue _fun0065 }
 63:
                var4 = var3.mentionCount;
                var1 = 0;
                if(!(var4 <= var1)) { _fun0065_ip = 91; continue _fun0065 }
 75:
                var1 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                return var1;
 91:
                var1 = 'basicPermissions';
                var4 = var1 in var2;
                if(var4) { _fun0065_ip = 179; continue _fun0065 }
 105:
                var7 = _closure1_slot12;
                var6 = var7.isChannelGated;
                var5 = var3.guildId;
                var4 = var3.channelId;
                var4 = var6.bind(var7)(var5, var4);
                if(!var4) { _fun0065_ip = 247; continue _fun0065 }
 134:
                var6 = _closure1_slot35;
                var5 = var6.can;
                var4 = _closure1_slot49;
                var4 = var4.VIEW_CHANNEL;
                var4 = var5.bind(var6)(var4, var2);
                if(var4) { _fun0065_ip = 247; continue _fun0065 }
 163:
                var4 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                return var4;
 179:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 48;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.has;
                var2 = var2.basicPermissions;
                var1 = _closure1_slot48;
                var1 = var1.VIEW_CHANNEL;
                var1 = var4.bind(var5)(var2, var1);
                if(var1) { _fun0065_ip = 247; continue _fun0065 }
 231:
                var1 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                return var1;
 247:
                var1 = arg4;
                if(var1) { _fun0065_ip = 310; continue _fun0065 }
 253:
                var1 = arg5;
                if(var1) { _fun0065_ip = 310; continue _fun0065 }
 259:
                var1 = {};
                var2 = var3.mentionCount;
                var1['mentionCount'] = var2;
                var2 = var3.getAckTimestamp;
                var4 = var2.bind(var3)();
                var2 = var3._lastMessageTimestamp;
                var2 = var4 < var2;
                var1['unread'] = var2;
                var2 = var3.isMentionLowImportance;
                var1['isMentionLowImportance'] = var2;
                _fun0065_ip = 344; continue _fun0065;
 310:
                var2 = {};
                var4 = var3.mentionCount;
                var2['mentionCount'] = var4;
                var4 = false;
                var2['unread'] = var4;
                var3 = var3.isMentionLowImportance;
                var2['isMentionLowImportance'] = var3;
                var1 = var2;
 344:
                return var1;
 346:
                var1 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
                return var1;
            }
        };
        var1['value'] = var2;
        var3[18] = var1;
        var1 = {};
        var2 = 'hasUnread';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = var1.getAckTimestamp;
            var2 = var2.bind(var1)();
            var1 = var1._lastMessageTimestamp;
            var1 = var2 < var1;
            return var1;
        };
        var1['value'] = var2;
        var3[19] = var1;
        var1 = {};
        var2 = 'hasRecentlyVisitedAndRead';
        var1['key'] = var2;
        var2 = function value() {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
 0:
                var4 = this;
                var2 = var4._lastMessageTimestamp;
                var1 = 0;
                var1 = var2 > var1;
                if(!var1) { _fun0066_ip = 30; continue _fun0066 }
 18:
                var3 = var4._ackMessageId;
                var2 = null;
                var1 = var2 != var3;
 30:
                if(!var1) { _fun0066_ip = 54; continue _fun0066 }
 33:
                var2 = var4.getAckTimestamp;
                var3 = var2.bind(var4)();
                var2 = _closure1_slot75;
                var1 = var3 > var2;
 54:
                if(!var1) { _fun0066_ip = 95; continue _fun0066 }
 57:
                var5 = _closure1_slot21;
                var3 = var5.getGuildRecentsDismissedAt;
                var2 = var4._guildId;
                var3 = var3.bind(var5)(var2);
                var2 = var4.getAckTimestamp;
                var2 = var2.bind(var4)();
                var1 = var3 < var2;
 95:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[20] = var1;
        var1 = {};
        var2 = 'isForumPostUnread';
        var1['key'] = var2;
        var2 = function value() {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
 0:
                var3 = this;
                var1 = var3._isActiveThread;
                var2 = !var1;
                var1 = !var2;
                if(var2) { _fun0067_ip = 28; continue _fun0067 }
 18:
                var2 = var3.hasUnread;
                var1 = var2.bind(var3)();
 28:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[21] = var1;
        var1 = {};
        var2 = 'hasMentions';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = var2.getMentionCount;
            var2 = var1.bind(var2)();
            var1 = 0;
            var1 = var2 > var1;
            return var1;
        };
        var1['value'] = var2;
        var3[22] = var1;
        var1 = {};
        var2 = 'getMentionCount';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.mentionCount;
            return var1;
        };
        var1['value'] = var2;
        var3[23] = var1;
        var1 = {};
        var2 = 'hasUnreadOrMentions';
        var1['key'] = var2;
        var2 = function value() {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
 0:
                var3 = this;
                var1 = var3.hasMentions;
                var1 = var1.bind(var3)();
                if(var1) { _fun0068_ip = 26; continue _fun0068 }
 16:
                var2 = var3.hasUnread;
                var1 = var2.bind(var3)();
 26:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[24] = var1;
        var1 = {};
        var2 = 'ackPins';
        var1['key'] = var2;
        var2 = function value() {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
 0:
                var4 = arguments[0];
                var2 = this;
                var _closure3_slot0 = var2;
                var3 = undefined;
                if(!(var4 === var3)) { _fun0069_ip = 20; continue _fun0069 }
 18:
                var4 = null;
 20:
                var7 = var2.type;
                var6 = _closure1_slot60;
                var6 = var6.CHANNEL;
                if(!(var7 === var6)) { _fun0069_ip = 138; continue _fun0069 }
 42:
                var6 = var2.canTrackUnreads;
                var6 = var6.bind(var2)();
                if(var6) { _fun0069_ip = 59; continue _fun0069 }
 55:
                var6 = false;
                return var6;
 59:
                var6 = null;
                if(!(var6 == var4)) { _fun0069_ip = 103; continue _fun0069 }
 65:
                var7 = var2.lastPinTimestamp;
                var6 = var2.ackPinTimestamp;
                if(!(var7 !== var6)) { _fun0069_ip = 134; continue _fun0069 }
 81:
                var6 = true;
                var2['_persisted'] = var6;
                var6 = _closure1_slot91;
                var5 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.HTTP;
                    var2 = var3.post;
                    var1 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    var6 = _closure1_slot44;
                    var5 = var6.PINS_ACK;
                    var4 = _closure3_slot0;
                    var4 = var4.channelId;
                    var4 = var5.bind(var6)(var4);
                    var1['url'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var6.bind(var3)(var5);
 103:
                var1 = _closure1_slot86;
                var1 = var1.bind(var3)(var4);
                var3 = 0;
                if(!(var3 === var1)) { _fun0069_ip = 124; continue _fun0069 }
 118:
                var1 = var2.lastPinTimestamp;
 124:
                var2['ackPinTimestamp'] = var1;
                var1 = true;
                return var1;
 134:
                var1 = false;
                return var1;
 138:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[25] = var1;
        var1 = {};
        var2 = 'ack';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
 0:
                var2 = arg1;
                var4 = this;
                var _closure3_slot0 = var4;
                var5 = var2.messageId;
                var1 = var2.location;
                var _closure3_slot1 = var1;
                var1 = var2.trackAnalytics;
                var _closure3_slot2 = var1;
                var8 = var2.local;
                var9 = undefined;
                if(!(var8 === var9)) { _fun0070_ip = 50; continue _fun0070 }
 48:
                var8 = false;
 50:
                var11 = var2.immediate;
                if(!(var11 === var9)) { _fun0070_ip = 62; continue _fun0070 }
 60:
                var11 = false;
 62:
                var1 = var2.force;
                if(!(var1 === var9)) { _fun0070_ip = 74; continue _fun0070 }
 72:
                var1 = false;
 74:
                var3 = var2.isExplicitUserAction;
                if(!(var3 === var9)) { _fun0070_ip = 86; continue _fun0070 }
 84:
                var3 = false;
 86:
                var2 = var4._shouldAck;
                var2 = var2.bind(var4)(var1, var8, var3);
                if(var2) { _fun0070_ip = 108; continue _fun0070 }
 104:
                var2 = false;
                return var2;
 108:
                if(var1) { _fun0070_ip = 128; continue _fun0070 }
 111:
                var1 = var4.canTrackUnreads;
                var1 = var1.bind(var4)();
                if(var1) { _fun0070_ip = 128; continue _fun0070 }
 124:
                var1 = false;
                return var1;
 128:
                var1 = var4.hasMentions;
                var7 = var1.bind(var4)();
                var2 = false;
                var4['estimated'] = var2;
                var1 = var4.takeSnapshot;
                var1 = var1.bind(var4)();
                var4['snapshot'] = var1;
                var10 = 0;
                var4['unreadCount'] = var10;
                var4['mentionCount'] = var10;
                var4['isMentionLowImportance'] = var2;
                var3 = null;
                var1 = var3 != var5;
                if(var1) { _fun0070_ip = 204; continue _fun0070 }
 191:
                var12 = var4.lastMessageId;
                var1 = var3 != var12;
                var5 = var12;
 204:
                if(!var1) { _fun0070_ip = 327; continue _fun0070 }
 207:
                var4['ackMessageId'] = var5;
                var4['isManualAck'] = var2;
                var2 = true;
                var4['_persisted'] = var2;
                var13 = _closure1_slot67;
                if(!var13) { _fun0070_ip = 243; continue _fun0070 }
 237:
                var4['ackedWhileCached'] = var2;
 243:
                var13 = _closure1_slot103;
                var12 = var4.channelId;
                var12 = var13.bind(var9)(var12);
                if(var8) { _fun0070_ip = 319; continue _fun0070 }
 260:
                var8 = var4.outgoingAck;
                if(!(var3 == var8)) { _fun0070_ip = 309; continue _fun0070 }
 270:
                var8 = global;
                var8 = var8.setTimeout;
                if(var7) { _fun0070_ip = 290; continue _fun0070 }
 281:
                var7 = 3000;
                if(!var11) { _fun0070_ip = 292; continue _fun0070 }
 290:
                var7 = 0;
 292:
                var6 = function() {
                    _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
 0:
                        var2 = _closure3_slot0;
                        var3 = var2.type;
                        var2 = _closure1_slot60;
                        var2 = var2.CHANNEL;
                        if(!(var3 !== var2)) { _fun0071_ip = 47; continue _fun0071 }
 29:
                        var3 = _closure3_slot0;
                        var2 = var3._nonChannelAck;
                        var2 = var2.bind(var3)();
                        _fun0071_ip = 73; continue _fun0071;
 47:
                        var5 = _closure3_slot0;
                        var4 = var5._ack;
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot2;
                        var2 = var4.bind(var5)(var3, var2);
 73:
                        var2 = _closure3_slot0;
                        var1 = null;
                        var2['outgoingAck'] = var1;
                        var2['outgoingAckTimer'] = var1;
                        var1 = undefined;
                        return var1;
                    }
                };
                var6 = var8.bind(var9)(var6, var7);
                var4['outgoingAckTimer'] = var6;
 309:
                var4['outgoingAck'] = var5;
                var1 = true;
                _fun0070_ip = 327; continue _fun0070;
 319:
                var4['oldestUnreadMessageId'] = var3;
                var1 = true;
 327:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[26] = var1;
        var1 = {};
        var2 = 'takeSnapshot';
        var1['key'] = var2;
        var2 = function value() {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
 0:
                var2 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 51;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var5 = var1.default;
                var4 = var2.guildId;
                var1 = {};
                var3 = var2.hasUnread;
                var3 = var3.bind(var2)();
                var1['unread'] = var3;
                var2 = var2.mentionCount;
                var1['mentionCount'] = var2;
                var2 = null;
                var6 = var2 == var4;
                var3 = null;
                if(var6) { _fun0072_ip = 88; continue _fun0072 }
 77:
                var6 = var5.hasUnread;
                var3 = var6.bind(var5)(var4);
 88:
                var1['guildUnread'] = var3;
                var3 = var2 == var4;
                var2 = null;
                if(var3) { _fun0072_ip = 113; continue _fun0072 }
 102:
                var3 = var5.getMentionCount;
                var2 = var3.bind(var5)(var4);
 113:
                var1['guildMentionCount'] = var2;
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var1['takenAt'] = var2;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[27] = var1;
        var1 = {};
        var2 = 'clearOutgoingAck';
        var1['key'] = var2;
        var2 = function value() {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
 0:
                var2 = this;
                var1 = null;
                var2['outgoingAck'] = var1;
                var3 = var2.outgoingAckTimer;
                if(!(var1 != var3)) { _fun0073_ip = 48; continue _fun0073 }
 21:
                var3 = global;
                var5 = var3.clearTimeout;
                var4 = var2.outgoingAckTimer;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var2['outgoingAckTimer'] = var1;
 48:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[28] = var1;
        var1 = {};
        var2 = '_shouldAck';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3) {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
 0:
                var6 = this;
                var1 = arg1;
                var2 = !var1;
                var1 = !var2;
                if(!var2) { _fun0074_ip = 144; continue _fun0074 }
 18:
                var2 = arg3;
                var3 = !var2;
                var2 = !var3;
                if(!var3) { _fun0074_ip = 141; continue _fun0074 }
 30:
                var3 = arg2;
                var4 = !var3;
                var3 = !var4;
                if(!var4) { _fun0074_ip = 138; continue _fun0074 }
 42:
                var4 = var6.isManualAck;
                var4 = !var4;
                if(!var4) { _fun0074_ip = 135; continue _fun0074 }
 54:
                var8 = var6.type;
                var5 = _closure1_slot60;
                var5 = var5.CHANNEL;
                var5 = var8 !== var5;
                if(var5) { _fun0074_ip = 85; continue _fun0074 }
 79:
                var5 = var6.loadedMessages;
 85:
                if(var5) { _fun0074_ip = 129; continue _fun0074 }
 88:
                var8 = _closure1_slot29;
                var7 = var8.getChannel;
                var6 = var6.channelId;
                var8 = var7.bind(var8)(var6);
                var6 = null;
                var6 = var6 != var8;
                if(!var6) { _fun0074_ip = 126; continue _fun0074 }
 116:
                var7 = var8.isForumLikeChannel;
                var6 = var7.bind(var8)();
 126:
                var5 = var6;
 129:
                var5 = !var5;
                var4 = !var5;
 135:
                var3 = var4;
 138:
                var2 = var3;
 141:
                var1 = var2;
 144:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[29] = var1;
        var1 = {};
        var2 = '_ack';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var2 = arg1;
                var _closure3_slot1 = var2;
                var2 = arg2;
                var _closure3_slot2 = var2;
                var4 = var3.outgoingAck;
                var _closure3_slot3 = var4;
                var2 = null;
                if(!(var2 != var4)) { _fun0075_ip = 137; continue _fun0075 }
 39:
                var5 = _closure1_slot27;
                var4 = var5.getId;
                var4 = var4.bind(var5)();
                var _closure3_slot4 = var4;
                var4 = _closure1_slot66;
                var _closure3_slot5 = var4;
                var4 = true;
                var3['_persisted'] = var4;
                var4 = var3.recalculateFlags;
                var5 = var4.bind(var3)();
                var6 = var3.flags;
                var4 = undefined;
                var3 = undefined;
                if(!(var5 !== var6)) { _fun0075_ip = 104; continue _fun0075 }
 101:
                var3 = var5;
 104:
                var _closure3_slot6 = var3;
                var3 = _closure1_slot91;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.HTTP;
                    var2 = var3.post;
                    var1 = {};
                    var10 = _closure1_slot44;
                    var9 = var10.MESSAGE_ACK;
                    var6 = _closure3_slot0;
                    var8 = var6.channelId;
                    var4 = _closure3_slot3;
                    var4 = var9.bind(var10)(var8, var4);
                    var1['url'] = var4;
                    var4 = {};
                    var7 = _closure1_slot66;
                    var4['token'] = var7;
                    var6 = var6.lastViewed;
                    var4['last_viewed'] = var6;
                    var5 = _closure3_slot6;
                    var4['flags'] = var5;
                    var1['body'] = var4;
                    var4 = true;
                    var1['oldFormErrors'] = var4;
                    var1['rejectWithError'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.then;
                var1 = function(arg1) {
                    _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
 0:
                        var3 = arg1;
                        var1 = null;
                        if(!(var1 != var3)) { _fun0076_ip = 179; continue _fun0076 }
 12:
                        var5 = _closure1_slot66;
                        var4 = _closure3_slot5;
                        var4 = var5 === var4;
                        if(!var4) { _fun0076_ip = 55; continue _fun0076 }
 33:
                        var6 = _closure3_slot4;
                        var7 = _closure1_slot27;
                        var5 = var7.getId;
                        var5 = var5.bind(var7)();
                        var4 = var6 === var5;
 55:
                        if(!var4) { _fun0076_ip = 73; continue _fun0076 }
 58:
                        var3 = var3.body;
                        var3 = var3.token;
                        _closure1_slot66 = var3;
 73:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var3 = 42;
                        var3 = var4[var3];
                        var4 = undefined;
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'MESSAGE_ACKED';
                        var3['type'] = var7;
                        var3 = var5.bind(var6)(var3);
                        var2 = _closure3_slot2;
                        if(!var2) { _fun0076_ip = 179; continue _fun0076 }
 124:
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 53;
                        var2 = var1[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = 52;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var3 = var3.bind(var4)(var2, var1);
                        var2 = var3.then;
                        var1 = function(arg1) {
                            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
 0:
                                var1 = arg1;
                                var4 = var1.default;
                                var2 = _closure3_slot0;
                                var3 = var2.channelId;
                                var5 = _closure3_slot1;
                                var2 = null;
                                if(!(var2 == var5)) { _fun0077_ip = 34; continue _fun0077 }
 30:
                                var2 = {};
                                _fun0077_ip = 38; continue _fun0077;
 34:
                                var2 = _closure3_slot1;
 38:
                                var1 = undefined;
                                var2 = var4.bind(var1)(var3, var2);
                                return var1;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
 179:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
 137:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[30] = var1;
        var1 = {};
        var2 = 'recalculateFlags';
        var1['key'] = var2;
        var2 = function value() {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
 0:
                var1 = this;
                var4 = var1.type;
                var3 = _closure1_slot60;
                var3 = var3.CHANNEL;
                if(!(var4 === var3)) { _fun0078_ip = 50; continue _fun0078 }
 25:
                var4 = _closure1_slot29;
                var3 = var4.getChannel;
                var1 = var1.channelId;
                var1 = var3.bind(var4)(var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0078_ip = 54; continue _fun0078 }
 50:
                var4 = undefined;
                return var4;
 54:
                var4 = var1.isThread;
                var4 = var4.bind(var1)();
                if(var4) { _fun0078_ip = 93; continue _fun0078 }
 67:
                var1 = var1.guild_id;
                var3 = var3 != var1;
                var1 = 0;
                if(!var3) { _fun0078_ip = 91; continue _fun0078 }
 81:
                var3 = _closure1_slot77;
                var1 = var3.IS_GUILD_CHANNEL;
 91:
                _fun0078_ip = 103; continue _fun0078;
 93:
                var2 = _closure1_slot77;
                var1 = var2.IS_THREAD;
 103:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[31] = var1;
        var1 = {};
        var2 = '_nonChannelAck';
        var1['key'] = var2;
        var2 = function value() {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
 0:
                var4 = this;
                var8 = var4.outgoingAck;
                var7 = var4.channelId;
                var6 = var4.type;
                var2 = null;
                if(!(var2 != var8)) { _fun0079_ip = 174; continue _fun0079 }
 30:
                var3 = _closure1_slot60;
                var3 = var3.GUILD_HOME;
                if(!(var3 !== var6)) { _fun0079_ip = 129; continue _fun0079 }
 47:
                var3 = _closure1_slot60;
                var3 = var3.GUILD_EVENT;
                if(!(var3 !== var6)) { _fun0079_ip = 129; continue _fun0079 }
 61:
                var3 = _closure1_slot60;
                var3 = var3.GUILD_ONBOARDING_QUESTION;
                if(!(var3 !== var6)) { _fun0079_ip = 129; continue _fun0079 }
 75:
                var3 = _closure1_slot60;
                var3 = var3.NOTIFICATION_CENTER;
                if(!(var3 !== var6)) { _fun0079_ip = 107; continue _fun0079 }
 89:
                var3 = _closure1_slot60;
                var3 = var3.MESSAGE_REQUESTS;
                if(!(var3 !== var6)) { _fun0079_ip = 107; continue _fun0079 }
 103:
                var3 = undefined;
                return var3;
 107:
                var5 = _closure1_slot44;
                var3 = var5.USER_NON_CHANNEL_ACK;
                var3 = var3.bind(var5)(var8, var6);
                var _closure3_slot0 = var3;
                _fun0079_ip = 150; continue _fun0079;
 129:
                var5 = _closure1_slot44;
                var3 = var5.GUILD_FEATURE_ACK;
                var3 = var3.bind(var5)(var7, var8, var6);
                _closure3_slot0 = var3;
 150:
                var3 = true;
                var4['_persisted'] = var3;
                var3 = _closure1_slot91;
                var2 = undefined;
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 44;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.HTTP;
                    var2 = var3.post;
                    var1 = {};
                    var4 = _closure3_slot0;
                    var1['url'] = var4;
                    var4 = {};
                    var1['body'] = var4;
                    var4 = true;
                    var1['oldFormErrors'] = var4;
                    var1['rejectWithError'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
 174:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[32] = var1;
        var1 = {};
        var2 = 'delete';
        var1['key'] = var2;
        var2 = function value() {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
 0:
                var3 = arguments[0];
                var2 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0080_ip = 14; continue _fun0080 }
 12:
                var3 = true;
 14:
                var6 = _closure1_slot29;
                var5 = var6.getBasicChannel;
                var4 = var2.channelId;
                var12 = var5.bind(var6)(var4);
                var11 = _closure1_slot62;
                var10 = var11.log;
                var9 = var2.channelId;
                var8 = var2.type;
                var6 = {};
                var6['remote'] = var3;
                var4 = var2._persisted;
                var6['persisted'] = var4;
                var4 = null;
                var5 = var4 == var12;
                var6['channelMissing'] = var5;
                var13 = _closure1_slot101;
                var5 = _closure1_slot84;
                var5 = var5.bind(var1)();
                var5 = var13.bind(var1)(var2, var5);
                var6['isOld'] = var5;
                var5 = var4 != var12;
                if(!var5) { _fun0080_ip = 141; continue _fun0080 }
 122:
                var15 = _closure1_slot25;
                var14 = var15.has;
                var13 = var12.type;
                var5 = var14.bind(var15)(var13);
 141:
                var6['validType'] = var5;
                var5 = var4 != var12;
                if(!var5) { _fun0080_ip = 169; continue _fun0080 }
 155:
                var13 = _closure1_slot22;
                var12 = var12.type;
                var5 = var13.bind(var1)(var12);
 169:
                var6['readableType'] = var5;
                var5 = _closure1_slot84;
                var5 = var5.bind(var1)();
                var6['oldThreadCutoff'] = var5;
                var5 = var2.mentionCount;
                var6['mentionCount'] = var5;
                var5 = var2.channelId;
                var6['channelId'] = var5;
                var5 = var2._ackMessageId;
                var6['ackMessageId'] = var5;
                var5 = var2._lastMessageId;
                var6['lastMessageId'] = var5;
                var19 = 'Deleting ReadState';
                var20 = var11;
                var18 = var9;
                var17 = var8;
                var16 = var6;
                var5 = var20[var10](var19, var18, var17, var16, var15);
                if(!var3) { _fun0080_ip = 264; continue _fun0080 }
 258:
                var3 = var2._persisted;
 264:
                if(!var3) { _fun0080_ip = 364; continue _fun0080 }
 267:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 44;
                var3 = var6[var3];
                var3 = var5.bind(var1)(var3);
                var6 = var3.HTTP;
                var5 = var6.del;
                var3 = {};
                var9 = _closure1_slot44;
                var8 = var9.CHANNEL_ACK;
                var7 = var2.channelId;
                var7 = var8.bind(var9)(var7);
                var3['url'] = var7;
                var7 = {};
                var8 = 2;
                var7['version'] = var8;
                var8 = var2.type;
                var7['read_state_type'] = var8;
                var3['body'] = var7;
                var7 = true;
                var3['oldFormErrors'] = var7;
                var3['rejectWithError'] = var7;
                var3 = var5.bind(var6)(var3);
 364:
                var5 = _closure2_slot0;
                var7 = var5._readStates;
                var6 = var7.get;
                var5 = var2.type;
                var6 = var6.bind(var7)(var5);
                if(!(var4 != var6)) { _fun0080_ip = 411; continue _fun0080 }
 396:
                var5 = var6.delete;
                var4 = var2.channelId;
                var4 = var5.bind(var6)(var4);
 411:
                var3 = _closure2_slot0;
                var4 = var3._mentionChannels;
                var3 = var4.delete;
                var2 = var2.channelId;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var2;
        var3[33] = var1;
        var1 = {};
        var2 = 'shouldDeleteReadState';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
 0:
                var7 = arg1;
                var2 = this;
                var1 = _closure1_slot31;
                var1 = var1.totalUnavailableGuilds;
                var10 = 0;
                if(!(var10 === var1)) { _fun0081_ip = 487; continue _fun0081 }
 28:
                var1 = var2.type;
                var3 = null;
                if(!(var3 != var1)) { _fun0081_ip = 61; continue _fun0081 }
 39:
                var5 = var2.type;
                var1 = _closure1_slot60;
                var1 = var1.CHANNEL;
                if(!(var5 === var1)) { _fun0081_ip = 327; continue _fun0081 }
 61:
                var6 = _closure1_slot29;
                var5 = var6.getBasicChannel;
                var1 = var2.channelId;
                var13 = var5.bind(var6)(var1);
                if(!(var3 != var13)) { _fun0081_ip = 307; continue _fun0081 }
 88:
                var6 = _closure1_slot25;
                var5 = var6.has;
                var1 = var13.type;
                var1 = var5.bind(var6)(var1);
                var5 = !var1;
                var1 = !var5;
                if(var5) { _fun0081_ip = 305; continue _fun0081 }
 119:
                var6 = _closure1_slot22;
                var5 = var13.type;
                var12 = undefined;
                var5 = var6.bind(var12)(var5);
                var5 = !var5;
                if(var5) { _fun0081_ip = 302; continue _fun0081 }
 144:
                var8 = _closure1_slot24;
                var6 = var13.type;
                var6 = var8.bind(var12)(var6);
                var6 = !var6;
                if(!var6) { _fun0081_ip = 299; continue _fun0081 }
 167:
                var11 = _closure1_slot26;
                var9 = var11.has;
                var8 = var13.type;
                var8 = var9.bind(var11)(var8);
                var9 = !var8;
                if(var9) { _fun0081_ip = 251; continue _fun0081 }
 192:
                var17 = var2.guildId;
                var8 = var3 != var17;
                if(!var8) { _fun0081_ip = 232; continue _fun0081 }
 204:
                var16 = _closure1_slot19;
                var15 = var16.isActive;
                var14 = var13.parent_id;
                var11 = var2.channelId;
                var8 = var15.bind(var16)(var17, var14, var11);
 232:
                var8 = !var8;
                if(!var8) { _fun0081_ip = 248; continue _fun0081 }
 238:
                var11 = _closure1_slot101;
                var8 = var11.bind(var12)(var2, var7);
 248:
                var9 = !var8;
 251:
                var8 = !var9;
                if(!var9) { _fun0081_ip = 296; continue _fun0081 }
 257:
                var9 = var2.mentionCount;
                var9 = var9 > var10;
                if(!var9) { _fun0081_ip = 293; continue _fun0081 }
 270:
                var12 = _closure1_slot35;
                var11 = var12.canBasicChannel;
                var10 = _closure1_slot63;
                var10 = var11.bind(var12)(var10, var13);
                var9 = !var10;
 293:
                var8 = var9;
 296:
                var6 = var8;
 299:
                var5 = var6;
 302:
                var1 = var5;
 305:
                _fun0081_ip = 325; continue _fun0081;
 307:
                var6 = _closure1_slot101;
                var5 = undefined;
                var5 = var6.bind(var5)(var2, var7);
                var5 = !var5;
                var1 = !var5;
 325:
                return var1;
 327:
                var6 = var2.type;
                var1 = _closure1_slot60;
                var1 = var1.GUILD_HOME;
                if(!(var1 !== var6)) { _fun0081_ip = 459; continue _fun0081 }
 346:
                var1 = _closure1_slot60;
                var1 = var1.GUILD_EVENT;
                if(!(var1 !== var6)) { _fun0081_ip = 459; continue _fun0081 }
 360:
                var1 = _closure1_slot60;
                var1 = var1.GUILD_ONBOARDING_QUESTION;
                if(!(var1 !== var6)) { _fun0081_ip = 459; continue _fun0081 }
 374:
                var1 = _closure1_slot60;
                var5 = var1.NOTIFICATION_CENTER;
                var1 = true;
                if(!(var5 === var6)) { _fun0081_ip = 482; continue _fun0081 }
 390:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 40;
                var6 = var6[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.cast;
                var9 = _closure1_slot39;
                var8 = var9.getCurrentUser;
                var8 = var8.bind(var9)();
                var9 = var3 == var8;
                if(var9) { _fun0081_ip = 443; continue _fun0081 }
 438:
                var5 = var8.id;
 443:
                var6 = var6.bind(var7)(var5);
                var5 = var2.channelId;
                var1 = var6 === var5;
                _fun0081_ip = 482; continue _fun0081;
 459:
                var5 = _closure1_slot32;
                var4 = var5.getGuild;
                var2 = var2.channelId;
                var2 = var4.bind(var5)(var2);
                var1 = var3 != var2;
 482:
                var1 = !var1;
                return var1;
 487:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[34] = var1;
        var1 = {};
        var2 = 'getAckTimestamp';
        var1['key'] = var2;
        var2 = function value() {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
 0:
                var1 = this;
                var3 = var1._ackMessageTimestamp;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0082_ip = 47; continue _fun0082 }
 15:
                var2 = global;
                var4 = var2.isNaN;
                var3 = var1._ackMessageTimestamp;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                if(var2) { _fun0082_ip = 47; continue _fun0082 }
 39:
                var2 = var1._ackMessageTimestamp;
                return var2;
 47:
                var3 = var1._isThread;
                if(var3) { _fun0082_ip = 335; continue _fun0082 }
 62:
                var4 = var1.type;
                var3 = _closure1_slot60;
                var3 = var3.GUILD_EVENT;
                if(!(var4 !== var3)) { _fun0082_ip = 196; continue _fun0082 }
 81:
                var4 = var1.type;
                var3 = _closure1_slot60;
                var3 = var3.GUILD_ONBOARDING_QUESTION;
                if(!(var4 !== var3)) { _fun0082_ip = 196; continue _fun0082 }
 100:
                var4 = _closure1_slot58;
                var3 = var1.channelId;
                var5 = undefined;
                var3 = var4.bind(var5)(var3);
                if(var3) { _fun0082_ip = 175; continue _fun0082 }
 119:
                var6 = _closure1_slot29;
                var4 = var6.getChannel;
                var3 = var1.channelId;
                var4 = var4.bind(var6)(var3);
                var3 = null;
                var3 = var3 != var4;
                var5 = undefined;
                if(!var3) { _fun0082_ip = 215; continue _fun0082 }
 149:
                var3 = var4.getGuildId;
                var6 = var3.bind(var4)();
                var4 = _closure1_slot32;
                var3 = var4.getGuild;
                var5 = var3.bind(var4)(var6);
                _fun0082_ip = 215; continue _fun0082;
 175:
                var6 = _closure1_slot32;
                var4 = var6.getGuild;
                var3 = var1.guildId;
                var5 = var4.bind(var6)(var3);
                _fun0082_ip = 215; continue _fun0082;
 196:
                var6 = _closure1_slot32;
                var4 = var6.getGuild;
                var3 = var1.channelId;
                var5 = var4.bind(var6)(var3);
 215:
                var3 = null;
                if(!(var3 == var5)) { _fun0082_ip = 261; continue _fun0082 }
 221:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 40;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var4);
                var4 = var6.extractTimestamp;
                var3 = var1.channelId;
                var3 = var4.bind(var6)(var3);
                _fun0082_ip = 327; continue _fun0082;
 261:
                var4 = _closure1_slot100;
                var6 = undefined;
                var5 = var4.bind(var6)(var5);
                var4 = global;
                var4 = var4.isNaN;
                var4 = var4.bind(var6)(var5);
                var3 = var5;
                if(!var4) { _fun0082_ip = 327; continue _fun0082 }
 291:
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 40;
                var4 = var7[var4];
                var6 = var5.bind(var6)(var4);
                var5 = var6.extractTimestamp;
                var4 = var1.channelId;
                var3 = var5.bind(var6)(var4);
 327:
                var1['_ackMessageTimestamp'] = var3;
                return var3;
 335:
                var6 = _closure1_slot99;
                var5 = var1.guildId;
                var3 = var1.channelId;
                var4 = undefined;
                var3 = var6.bind(var4)(var5, var3);
                var1['_ackMessageTimestamp'] = var3;
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 40;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.fromTimestamp;
                var2 = var1._ackMessageTimestamp;
                var2 = var3.bind(var4)(var2);
                var1['_ackMessageId'] = var2;
                var1 = var1._ackMessageTimestamp;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[35] = var1;
        var1 = {};
        var2 = 'oldestUnreadTimestamp';
        var1['key'] = var2;
        var2 = function get() {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
 0:
                var2 = this;
                var3 = var2.oldestUnreadMessageId;
                var1 = null;
                var3 = var1 != var3;
                var1 = 0;
                if(!var3) { _fun0083_ip = 62; continue _fun0083 }
 20:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 40;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.extractTimestamp;
                var2 = var2.oldestUnreadMessageId;
                var1 = var3.bind(var4)(var2);
 62:
                return var1;
            }
        };
        var1['get'] = var2;
        var3[36] = var1;
        var1 = {};
        var2 = 'syncThreadSettings';
        var1['key'] = var2;
        var2 = function value() {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
 0:
                var1 = this;
                var4 = true;
                var1['_isThread'] = var4;
                var6 = _closure1_slot29;
                var5 = var6.getChannel;
                var3 = var1.channelId;
                var3 = var5.bind(var6)(var3);
                var5 = null;
                if(!(var5 != var3)) { _fun0084_ip = 141; continue _fun0084 }
 39:
                var9 = var1.guildId;
                var6 = var5 != var9;
                if(!var6) { _fun0084_ip = 79; continue _fun0084 }
 51:
                var8 = _closure1_slot19;
                var7 = var8.isActive;
                var5 = var3.parent_id;
                var3 = var1.channelId;
                var6 = var7.bind(var8)(var9, var5, var3);
 79:
                var7 = _closure1_slot20;
                var5 = var7.hasJoined;
                var3 = var1.channelId;
                var5 = var5.bind(var7)(var3);
                var3 = var1._isActiveThread;
                var3 = var3 !== var6;
                if(var3) { _fun0084_ip = 122; continue _fun0084 }
 112:
                var7 = var1._isJoinedThread;
                var3 = var7 !== var5;
 122:
                if(!var3) { _fun0084_ip = 139; continue _fun0084 }
 125:
                var1['_isActiveThread'] = var6;
                var1['_isJoinedThread'] = var5;
                var3 = true;
 139:
                return var3;
 141:
                var3 = _closure1_slot62;
                var2 = var3.warn;
                var5 = var1.channelId;
                var1 = global;
                var1 = var1.HermesInternal;
                var4 = var1.concat;
                var1 = 'syncThreadSettings called with channel not in memory ';
                var1 = var4.bind(var1)(var5);
                var1 = var2.bind(var3)(var1);
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[37] = var1;
        var1 = {};
        var2 = 'recordLastViewedTime';
        var1['key'] = var2;
        var2 = function value() {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
 0:
                var4 = this;
                var1 = global;
                var5 = var1.Math;
                var3 = var5.ceil;
                var2 = var1.Date;
                var1 = var2.now;
                var7 = var1.bind(var2)();
                var9 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 40;
                var6 = var8[var1];
                var1 = undefined;
                var6 = var9.bind(var1)(var6);
                var6 = var6.DISCORD_EPOCH;
                var6 = var7 - var6;
                var7 = _closure1_slot1;
                var2 = 41;
                var2 = var8[var2];
                var2 = var7.bind(var1)(var2);
                var2 = var2.Millis;
                var2 = var2.DAY;
                var2 = var6 / var2;
                var2 = var3.bind(var5)(var2);
                var3 = var4.lastViewed;
                if(!(var2 !== var3)) { _fun0085_ip = 170; continue _fun0085 }
 114:
                var4['lastViewed'] = var2;
                var2 = var4.canTrackUnreads;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0085_ip = 146; continue _fun0085 }
 133:
                var3 = var4.hasUnread;
                var3 = var3.bind(var4)();
                var2 = !var3;
 146:
                if(!var2) { _fun0085_ip = 170; continue _fun0085 }
 149:
                var3 = var4.ack;
                var2 = {'force': true, 'trackAnalytics': false};
                var2 = var3.bind(var4)(var2);
 170:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[38] = var1;
        var1 = {};
        var2 = 'forEach';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
 0:
                var7 = arg1;
                var3 = _closure1_slot82;
                var1 = _closure2_slot0;
                var2 = var1._readStates;
                var1 = var2.values;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = false;
                if(var2) { _fun0086_ip = 132; continue _fun0086 }
 53:
                var8 = _closure1_slot82;
                var9 = var3.value;
                var2 = var9.values;
                var2 = var2.bind(var9)();
                var9 = var8.bind(var1)(var2);
                var8 = var9.bind(var1)();
                var2 = var8.done;
                if(var2) { _fun0086_ip = 117; continue _fun0086 }
 88:
                var2 = var8.value;
                var2 = var7.bind(var1)(var2);
                if(!(var4 !== var2)) { _fun0086_ip = 117; continue _fun0086 }
 102:
                var10 = var9.bind(var1)();
                var2 = var10.done;
                var8 = var10;
                if(!var2) { _fun0086_ip = 88; continue _fun0086 }
 117:
                var8 = var5.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0086_ip = 53; continue _fun0086 }
 132:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(9);
        var2[0] = var1;
        var1 = {};
        var7 = 'get';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
 0:
                var7 = arg1;
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0087_ip = 25; continue _fun0087 }
 12:
                var2 = _closure1_slot60;
                var6 = var2.CHANNEL;
 25:
                var2 = _closure2_slot0;
                var4 = var2._readStates;
                var2 = var4.get;
                var5 = var2.bind(var4)(var6);
                var4 = null;
                var2 = var4 == var5;
                var1 = undefined;
                if(var2) { _fun0087_ip = 69; continue _fun0087 }
 59:
                var2 = var5.get;
                var1 = var2.bind(var5)(var7);
 69:
                if(!(var4 == var1)) { _fun0087_ip = 215; continue _fun0087 }
 76:
                var5 = _closure2_slot0;
                var2 = var5.prototype;
                var8 = Object.create(var2, {constructor: {value: var5}});
                var11 = var8;
                var10 = var7;
                var9 = var6;
                var2 = new var11[var5](var10, var9, var8);
                var2 = var2 instanceof Object ? var2 : var8;
                var8 = var5._readStates;
                var5 = var8.get;
                var5 = var5.bind(var8)(var6);
                if(!(var4 == var5)) { _fun0087_ip = 154; continue _fun0087 }
 126:
                var4 = global;
                var4 = var4.Map;
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var11 = var8;
                var4 = new var11[var4](var10);
                var5 = var4 instanceof Object ? var4 : var8;
 154:
                var4 = var5.set;
                var4 = var4.bind(var5)(var7, var2);
                var4 = _closure2_slot0;
                var7 = var4._readStates;
                var4 = var7.has;
                var4 = var4.bind(var7)(var6);
                var1 = var2;
                if(var4) { _fun0087_ip = 215; continue _fun0087 }
 191:
                var3 = _closure2_slot0;
                var4 = var3._readStates;
                var3 = var4.set;
                var3 = var3.bind(var4)(var6, var5);
                var1 = var2;
 215:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'getGuildSentinels';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1._guildReadStateSentinels;
                var4 = var3[var2];
                var3 = null;
                if(!(var3 == var4)) { _fun0088_ip = 41; continue _fun0088 }
 22:
                var4 = var1._guildReadStateSentinels;
                var3 = {};
                var5 = 0;
                var3['unreadsSentinel'] = var5;
                var4[var2] = var3;
 41:
                var1 = var1._guildReadStateSentinels;
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var7;
        var2[2] = var1;
        var1 = {};
        var7 = 'resetGuildSentinels';
        var1['key'] = var7;
        var7 = function value() {
            var2 = {};
            var1 = this;
            var1['_guildReadStateSentinels'] = var2;
            var1 = undefined;
            return var1;
        };
        var1['value'] = var7;
        var2[3] = var1;
        var1 = {};
        var7 = 'getIfExists';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
 0:
                var4 = arguments[1];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0089_ip = 22; continue _fun0089 }
 9:
                var2 = _closure1_slot60;
                var4 = var2.CHANNEL;
 22:
                var2 = _closure2_slot0;
                var3 = var2._readStates;
                var2 = var3.get;
                var4 = var2.bind(var3)(var4);
                var2 = null;
                var2 = var2 == var4;
                var1 = undefined;
                if(var2) { _fun0089_ip = 69; continue _fun0089 }
 56:
                var3 = var4.get;
                var2 = arg1;
                var1 = var3.bind(var4)(var2);
 69:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[4] = var1;
        var1 = {};
        var7 = 'getMentionChannelIds';
        var1['key'] = var7;
        var7 = function value() {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
 0:
                var1 = new Array(0);
                var3 = _closure1_slot82;
                var2 = _closure2_slot0;
                var2 = var2._mentionChannels;
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0090_ip = 129; continue _fun0090 }
 45:
                var8 = var3.value;
                var9 = _closure2_slot0;
                var2 = var9.getIfExists;
                var9 = var2.bind(var9)(var8);
                if(!(var4 != var9)) { _fun0090_ip = 82; continue _fun0090 }
 69:
                var2 = var9.canHaveMentions;
                var2 = var2.bind(var9)();
                if(var2) { _fun0090_ip = 104; continue _fun0090 }
 82:
                var2 = _closure2_slot0;
                var9 = var2._mentionChannels;
                var2 = var9.delete;
                var2 = var2.bind(var9)(var8);
                _fun0090_ip = 114; continue _fun0090;
 104:
                var2 = var1.push;
                var2 = var2.bind(var1)(var8);
 114:
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0090_ip = 45; continue _fun0090 }
 129:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[5] = var1;
        var1 = {};
        var7 = 'getValue';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
 0:
                var6 = arguments[1];
                var1 = arguments[3];
                var5 = this;
                var4 = undefined;
                if(!(var6 === var4)) { _fun0091_ip = 28; continue _fun0091 }
 15:
                var2 = _closure1_slot60;
                var6 = var2.CHANNEL;
 28:
                var3 = var5.getIfExists;
                var2 = arg1;
                var3 = var3.bind(var5)(var2, var6);
                var2 = null;
                if(!(var2 != var3)) { _fun0091_ip = 57; continue _fun0091 }
 49:
                var2 = arguments[2];
                var1 = var2.bind(var4)(var3);
 57:
                return var1;
            }
        };
        var1['value'] = var7;
        var2[6] = var1;
        var1 = {};
        var7 = 'clear';
        var1['key'] = var7;
        var7 = function value(arg1) {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
 0:
                var4 = arg1;
                var5 = arguments[1];
                var1 = undefined;
                if(!(var5 === var1)) { _fun0092_ip = 25; continue _fun0092 }
 12:
                var1 = _closure1_slot60;
                var5 = var1.CHANNEL;
 25:
                var1 = _closure2_slot0;
                var3 = var1._readStates;
                var1 = var3.get;
                var3 = var1.bind(var3)(var5);
                var1 = null;
                if(!(var1 != var3)) { _fun0092_ip = 89; continue _fun0092 }
 54:
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                if(!var1) { _fun0092_ip = 87; continue _fun0092 }
 67:
                var2 = _closure2_slot0;
                var3 = var2._mentionChannels;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
 87:
                return var1;
 89:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var7;
        var2[7] = var1;
        var1 = {};
        var7 = 'clearAll';
        var1['key'] = var7;
        var6 = function value() {
            var1 = _closure2_slot0;
            var3 = var1._readStates;
            var2 = var3.clear;
            var2 = var2.bind(var3)();
            var2 = var1._mentionChannels;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot78 = var2;
    var19 = {};
    var2['_guildReadStateSentinels'] = var19;
    var19 = var11.Map;
    var20 = var19.prototype;
    var20 = Object.create(var20, {constructor: {value: var19}});
    var30 = var20;
    var19 = new var30[var19](var29);
    var19 = var19 instanceof Object ? var19 : var20;
    var2['_readStates'] = var19;
    var11 = var11.Set;
    var19 = var11.prototype;
    var19 = Object.create(var19, {constructor: {value: var11}});
    var30 = var19;
    var11 = new var30[var11](var29);
    var11 = var11 instanceof Object ? var11 : var19;
    var2['_mentionChannels'] = var11;
    var11 = 56;
    var11 = var8[var11];
    var21 = var7.bind(var1)(var11);
    var20 = var21.throttle;
    var19 = function(arg1) {
        var2 = arg1;
        var1 = var2.delete;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var11 = 100;
    var11 = var20.bind(var21)(var19, var11);
    var _closure1_slot79 = var11;
    var11 = 63;
    var11 = var8[var11];
    var11 = var10.bind(var1)(var11);
    var19 = var11.Store;
    var11 = function(arg1) {
        var4 = function ReadStateStoreClass() {
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot8;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot81;
                var1 = var1.bind(var3)();
                if(var1) { _fun0093_ip = 69; continue _fun0093 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0093_ip = 105; continue _fun0093;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
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
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot9;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var24 = var4.waitFor;
            var45 = _closure1_slot30;
            var44 = _closure1_slot39;
            var43 = _closure1_slot32;
            var42 = _closure1_slot31;
            var41 = _closure1_slot29;
            var40 = _closure1_slot37;
            var39 = _closure1_slot34;
            var38 = _closure1_slot35;
            var37 = _closure1_slot11;
            var36 = _closure1_slot19;
            var35 = _closure1_slot20;
            var34 = _closure1_slot28;
            var33 = _closure1_slot14;
            var32 = _closure1_slot13;
            var31 = _closure1_slot12;
            var30 = _closure1_slot38;
            var29 = _closure1_slot40;
            var28 = _closure1_slot18;
            var27 = _closure1_slot16;
            var26 = _closure1_slot21;
            var25 = _closure1_slot17;
            var46 = var4;
            var2 = var46[var24](var45, var44, var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24);
            var3 = var4.syncWith;
            var5 = _closure1_slot28;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot107;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(30);
        var1[0] = var5;
        var5 = {};
        var7 = 'getReadStatesByChannel';
        var5['key'] = var7;
        var7 = function value() {
            _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
 0:
                var2 = _closure1_slot78;
                var3 = var2._readStates;
                var2 = var3.get;
                var1 = _closure1_slot60;
                var1 = var1.CHANNEL;
                var1 = var2.bind(var3)(var1);
                var2 = null;
                if(!(var2 == var1)) { _fun0094_ip = 67; continue _fun0094 }
 39:
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var5 = var3;
                var2 = new var5[var2](var4);
                var1 = var2 instanceof Object ? var2 : var3;
 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getForDebugging';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
 0:
                var4 = arguments[1];
                var1 = undefined;
                if(!(var4 === var1)) { _fun0095_ip = 22; continue _fun0095 }
 9:
                var1 = _closure1_slot60;
                var4 = var1.CHANNEL;
 22:
                var3 = _closure1_slot78;
                var2 = var3.getIfExists;
                var1 = arg1;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getNotifCenterReadState';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = _closure1_slot78;
            var3 = var4.getIfExists;
            var1 = _closure1_slot60;
            var2 = var1.NOTIFICATION_CENTER;
            var1 = arg1;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasUnread';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0096_ip = 22; continue _fun0096 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.canBeUnread;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0097_ip = 26; continue _fun0097 }
 16:
                        var2 = var3.hasUnread;
                        var1 = var2.bind(var3)();
 26:
                        return var1;
                    }
                };
                var7 = false;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasUnreadOrMentions';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0098_ip = 22; continue _fun0098 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.canBeUnread;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0099_ip = 26; continue _fun0099 }
 16:
                        var2 = var3.hasUnreadOrMentions;
                        var1 = var2.bind(var3)();
 26:
                        return var1;
                    }
                };
                var7 = false;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasTrackedUnread';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0100_ip = 22; continue _fun0100 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.canTrackUnreads;
                        var1 = var1.bind(var3)();
                        if(!var1) { _fun0101_ip = 26; continue _fun0101 }
 16:
                        var2 = var3.hasUnread;
                        var1 = var2.bind(var3)();
 26:
                        return var1;
                    }
                };
                var7 = false;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isForumPostUnread';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0102_ip = 22; continue _fun0102 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.isForumPostUnread;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = false;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getUnreadCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0103_ip = 22; continue _fun0103 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.canBeUnread;
                        var3 = var1.bind(var2)();
                        var1 = 0;
                        if(!var3) { _fun0104_ip = 24; continue _fun0104 }
 18:
                        var1 = var2.unreadCount;
 24:
                        return var1;
                    }
                };
                var7 = 0;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'getMentionCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
 0:
                var5 = arg1;
                var8 = arguments[1];
                var4 = undefined;
                if(!(var8 === var4)) { _fun0105_ip = 25; continue _fun0105 }
 12:
                var1 = _closure1_slot60;
                var8 = var1.CHANNEL;
 25:
                var7 = _closure1_slot78;
                var6 = var7.getValue;
                var10 = function(arg1) {
                    _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
 0:
                        var3 = arg1;
                        var1 = var3.canHaveMentions;
                        var2 = var1.bind(var3)();
                        var1 = 0;
                        if(!var2) { _fun0106_ip = 28; continue _fun0106 }
 18:
                        var2 = var3.getMentionCount;
                        var1 = var2.bind(var3)();
 28:
                        return var1;
                    }
                };
                var1 = 0;
                var13 = var7;
                var12 = var5;
                var11 = var8;
                var9 = 0;
                var2 = var13[var6](var12, var11, var10, var9, var8);
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 62;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)(var5);
                if(!var3) { _fun0105_ip = 100; continue _fun0105 }
 90:
                var3 = var2 > var1;
                var1 = 1;
                if(var3) { _fun0105_ip = 103; continue _fun0105 }
 100:
                var1 = var2;
 103:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'getIsMentionLowImportance';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
 0:
                var7 = arguments[1];
                var1 = undefined;
                if(!(var7 === var1)) { _fun0107_ip = 22; continue _fun0107 }
 9:
                var1 = _closure1_slot60;
                var7 = var1.CHANNEL;
 22:
                var1 = _closure1_slot60;
                var1 = var1.CHANNEL;
                var1 = var7 === var1;
                if(!var1) { _fun0107_ip = 74; continue _fun0107 }
 42:
                var6 = _closure1_slot78;
                var5 = var6.getValue;
                var11 = arg1;
                var9 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.isMentionLowImportance;
                    return var1;
                };
                var8 = false;
                var12 = var6;
                var10 = var7;
                var1 = var12[var5](var11, var10, var9, var8, var7);
 74:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'getGuildChannelUnreadState';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4, arg5) {
            var3 = arg1;
            var _closure3_slot0 = var3;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = arg3;
            var _closure3_slot2 = var2;
            var2 = arg4;
            var _closure3_slot3 = var2;
            var2 = arg5;
            var _closure3_slot4 = var2;
            var6 = _closure1_slot78;
            var5 = var6.getValue;
            var10 = var3.id;
            var2 = _closure1_slot60;
            var9 = var2.CHANNEL;
            var8 = function(arg1) {
                var7 = arg1;
                var6 = var7.getGuildChannelUnreadState;
                var12 = _closure3_slot0;
                var11 = _closure3_slot1;
                var10 = _closure3_slot2;
                var9 = _closure3_slot3;
                var8 = _closure3_slot4;
                var13 = var7;
                var1 = var13[var6](var12, var11, var10, var9, var8, var7);
                return var1;
            };
            var7 = {'mentionCount': 0, 'unread': false, 'isMentionLowImportance': false};
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'hasRecentlyVisitedAndRead';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0108_ip = 22; continue _fun0108 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.hasRecentlyVisitedAndRead;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = false;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'ackMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0109_ip = 22; continue _fun0109 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.canBeUnread;
                        var3 = var1.bind(var2)();
                        var1 = null;
                        if(!var3) { _fun0110_ip = 24; continue _fun0110 }
 18:
                        var1 = var2.ackMessageId;
 24:
                        return var1;
                    }
                };
                var7 = null;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'getTrackedAckMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0111_ip = 22; continue _fun0111 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.canTrackUnreads;
                        var3 = var1.bind(var2)();
                        var1 = null;
                        if(!var3) { _fun0112_ip = 24; continue _fun0112 }
 18:
                        var1 = var2._ackMessageId;
 24:
                        return var1;
                    }
                };
                var7 = null;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'lastMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0113_ip = 22; continue _fun0113 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.lastMessageId;
                    return var1;
                };
                var7 = null;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'lastMessageTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0114_ip = 22; continue _fun0114 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.lastMessageTimestamp;
                    return var1;
                };
                var7 = 0;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'lastPinTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var6 = _closure1_slot78;
            var5 = var6.getValue;
            var1 = _closure1_slot60;
            var9 = var1.CHANNEL;
            var10 = arg1;
            var8 = function(arg1) {
                var1 = arg1;
                var1 = var1.lastPinTimestamp;
                return var1;
            };
            var7 = null;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getOldestUnreadMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0115_ip = 22; continue _fun0115 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.canTrackUnreads;
                        var3 = var1.bind(var2)();
                        var1 = null;
                        if(!var3) { _fun0116_ip = 24; continue _fun0116 }
 18:
                        var1 = var2.oldestUnreadMessageId;
 24:
                        return var1;
                    }
                };
                var7 = null;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[18] = var5;
        var5 = {};
        var7 = 'getOldestUnreadTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0117_ip = 22; continue _fun0117 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
 0:
                        var2 = arg1;
                        var1 = var2.canTrackUnreads;
                        var3 = var1.bind(var2)();
                        var1 = 0;
                        if(!var3) { _fun0118_ip = 24; continue _fun0118 }
 18:
                        var1 = var2.oldestUnreadTimestamp;
 24:
                        return var1;
                    }
                };
                var7 = 0;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[19] = var5;
        var5 = {};
        var7 = 'isEstimated';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0119_ip = 22; continue _fun0119 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.estimated;
                    return var1;
                };
                var7 = false;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[20] = var5;
        var5 = {};
        var7 = 'hasOpenedThread';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
 0:
                var6 = arguments[1];
                var1 = undefined;
                if(!(var6 === var1)) { _fun0120_ip = 22; continue _fun0120 }
 9:
                var1 = _closure1_slot60;
                var6 = var1.CHANNEL;
 22:
                var5 = _closure1_slot78;
                var4 = var5.getValue;
                var10 = arg1;
                var8 = function(arg1) {
                    var1 = arg1;
                    var1 = var1._persisted;
                    return var1;
                };
                var7 = false;
                var11 = var5;
                var9 = var6;
                var1 = var11[var4](var10, var9, var8, var7, var6);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[21] = var5;
        var5 = {};
        var7 = 'hasUnreadPins';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var6 = _closure1_slot78;
            var5 = var6.getValue;
            var1 = _closure1_slot60;
            var9 = var1.CHANNEL;
            var10 = arg1;
            var8 = function(arg1) {
                _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
 0:
                    var2 = arg1;
                    var1 = var2.canBeUnread;
                    var1 = var1.bind(var2)();
                    if(!var1) { _fun0121_ip = 32; continue _fun0121 }
 16:
                    var3 = var2.lastPinTimestamp;
                    var2 = var2.ackPinTimestamp;
                    var1 = var3 > var2;
 32:
                    return var1;
                }
            };
            var7 = false;
            var11 = var6;
            var1 = var11[var5](var10, var9, var8, var7, var6);
            return var1;
        };
        var5['value'] = var7;
        var1[22] = var5;
        var5 = {};
        var7 = 'isNewForumThread';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot78;
                var3 = var5.get;
                var2 = arg2;
                var2 = var3.bind(var5)(var2);
                var5 = _closure1_slot78;
                var3 = var5.get;
                var3 = var3.bind(var5)(var4);
                var5 = var3._persisted;
                var3 = true;
                if(!(var3 !== var5)) { _fun0122_ip = 153; continue _fun0122 }
 49:
                var5 = var2.ackMessageIdAtChannelSelect;
                var3 = null;
                if(!(var3 != var5)) { _fun0122_ip = 153; continue _fun0122 }
 61:
                var7 = _closure1_slot1;
                var3 = _closure1_slot2;
                var6 = 40;
                var3 = var3[var6];
                var5 = undefined;
                var7 = var7.bind(var5)(var3);
                var3 = var7.compare;
                var2 = var2.ackMessageIdAtChannelSelect;
                var3 = var3.bind(var7)(var4, var2);
                var2 = 0;
                if(!(!(var3 <= var2))) { _fun0122_ip = 153; continue _fun0122 }
 107:
                var3 = _closure1_slot100;
                var2 = arg3;
                var2 = var3.bind(var5)(var2);
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var6];
                var3 = var3.bind(var5)(var1);
                var1 = var3.extractTimestamp;
                var1 = var1.bind(var3)(var4);
                var1 = var1 > var2;
                return var1;
 153:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[23] = var5;
        var5 = {};
        var7 = 'getAllReadStates';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = new Array(0);
            var _closure3_slot1 = var1;
            var4 = _closure1_slot78;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
 0:
                    var5 = arg1;
                    var3 = var5.type;
                    var2 = _closure1_slot60;
                    var2 = var2.GUILD_HOME;
                    if(!(var2 !== var3)) { _fun0123_ip = 230; continue _fun0123 }
 28:
                    var2 = _closure1_slot60;
                    var2 = var2.GUILD_EVENT;
                    if(!(var2 !== var3)) { _fun0123_ip = 230; continue _fun0123 }
 45:
                    var2 = _closure1_slot60;
                    var2 = var2.GUILD_ONBOARDING_QUESTION;
                    if(!(var2 !== var3)) { _fun0123_ip = 230; continue _fun0123 }
 62:
                    var2 = _closure1_slot60;
                    var2 = var2.NOTIFICATION_CENTER;
                    if(!(var2 !== var3)) { _fun0123_ip = 127; continue _fun0123 }
 76:
                    var2 = _closure1_slot60;
                    var2 = var2.MESSAGE_REQUESTS;
                    if(!(var2 !== var3)) { _fun0123_ip = 127; continue _fun0123 }
 90:
                    var4 = _closure3_slot1;
                    var3 = var4.push;
                    var6 = var5.serialize;
                    var2 = _closure3_slot0;
                    var2 = var6.bind(var5)(var2);
                    var2 = var3.bind(var4)(var2);
                    _fun0123_ip = 287; continue _fun0123;
 127:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 40;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.cast;
                    var7 = _closure1_slot39;
                    var6 = var7.getCurrentUser;
                    var6 = var6.bind(var7)();
                    var7 = null;
                    var7 = var7 == var6;
                    if(var7) { _fun0123_ip = 182; continue _fun0123 }
 177:
                    var2 = var6.id;
 182:
                    var3 = var3.bind(var4)(var2);
                    var2 = var5.channelId;
                    if(!(var3 === var2)) { _fun0123_ip = 287; continue _fun0123 }
 196:
                    var4 = _closure3_slot1;
                    var3 = var4.push;
                    var6 = var5.serialize;
                    var2 = _closure3_slot0;
                    var2 = var6.bind(var5)(var2);
                    var2 = var3.bind(var4)(var2);
                    _fun0123_ip = 287; continue _fun0123;
 230:
                    var3 = _closure1_slot32;
                    var2 = var3.getGuild;
                    var1 = var5.channelId;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    if(!(var1 != var2)) { _fun0123_ip = 287; continue _fun0123 }
 255:
                    var3 = _closure3_slot1;
                    var2 = var3.push;
                    var4 = var5.serialize;
                    var1 = _closure3_slot0;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
 287:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[24] = var5;
        var5 = {};
        var7 = 'getGuildUnreadsSentinel';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot78;
            var2 = var3.getGuildSentinels;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.unreadsSentinel;
            return var1;
        };
        var5['value'] = var7;
        var1[25] = var5;
        var5 = {};
        var7 = 'getMentionChannelIds';
        var5['key'] = var7;
        var7 = function value() {
            var2 = _closure1_slot78;
            var1 = var2.getMentionChannelIds;
            var1 = var1.bind(var2)();
            return var1;
        };
        var5['value'] = var7;
        var1[26] = var5;
        var5 = {};
        var7 = 'getNonChannelAckId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
 0:
                var3 = _closure1_slot39;
                var1 = var3.getCurrentUser;
                var3 = var1.bind(var3)();
                var1 = null;
                var4 = var1 == var3;
                var5 = undefined;
                if(var4) { _fun0124_ip = 32; continue _fun0124 }
 27:
                var5 = var3.id;
 32:
                var3 = var1 == var5;
                var1 = null;
                if(var3) { _fun0124_ip = 65; continue _fun0124 }
 41:
                var4 = _closure1_slot78;
                var3 = var4.get;
                var2 = arg1;
                var2 = var3.bind(var4)(var5, var2);
                var1 = var2.ackMessageId;
 65:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[27] = var5;
        var5 = {};
        var7 = 'getSnapshot';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
 0:
                var3 = _closure1_slot78;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = var3.snapshot;
                var1 = null;
                if(!(var1 != var2)) { _fun0125_ip = 80; continue _fun0125 }
 32:
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var2 = var1.bind(var2)();
                var1 = var3.snapshot;
                var1 = var1.takenAt;
                var2 = var2 - var1;
                var1 = arg2;
                if(!(!(var2 > var1))) { _fun0125_ip = 80; continue _fun0125 }
 72:
                var1 = var3.snapshot;
                _fun0125_ip = 90; continue _fun0125;
 80:
                var2 = var3.takeSnapshot;
                var1 = var2.bind(var3)();
 90:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[28] = var5;
        var5 = {};
        var7 = 'getChannelIdsForWindowId';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot71;
            var2 = var3.getAllChannelIdsForWindowId;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[29] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var11 = var11.bind(var1)(var19);
    var11['displayName'] = var5;
    var5 = 42;
    var5 = var8[var5];
    var29 = var10.bind(var1)(var5);
    var5 = {};
    var19 = function handleBackgroundSync(arg1) {
        _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
 0:
            var1 = arg1;
            var24 = var1.changesByChannelId;
            var22 = var24;
            var1 = undefined;
            var17 = 57;
            var16 = 40;
            var15 = 1;
            var14 = null;
            var13 = 0;
            var12 = undefined;
            var11 = undefined;
            var10 = undefined;
            var9 = undefined;
            var8 = undefined;
            for(var19 in var22)
 51:
            {
 63:
                var5 = var19;
                var2 = var24[var5];
                var4 = _closure1_slot78;
                var3 = var4.getIfExists;
                var7 = var3.bind(var4)(var5);
                if(var14 == var7) { _fun0126_ip = 51; continue _fun0126 }
 89:
                var3 = _closure1_slot82;
                var6 = var2.new_messages;
                var5 = var14 == var6;
                var4 = undefined;
                if(var5) { _fun0126_ip = 112; continue _fun0126 }
 108:
                var4 = var6[var13];
 112:
                var25 = new Array(1);
                var25[0] = var4;
                var4 = var25.concat;
                var5 = var2.modified_messages;
                var2 = var5;
                if(!(var14 == var2)) { _fun0126_ip = 142; continue _fun0126 }
 138:
                var2 = new Array(0);
 142:
                var25 = var4.bind(var25)(var2);
                var4 = var25.filter;
                var26 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var17];
                var2 = var26.bind(var1)(var2);
                var2 = var2.isNotNullish;
                var2 = var4.bind(var25)(var2);
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                var12 = var6;
                var11 = var5;
                var10 = var3;
                var9 = var4;
                var3 = var10;
                if(var2) { _fun0126_ip = 51; continue _fun0126 }
 215:
                var8 = var3.value;
                var25 = _closure1_slot1;
                var2 = _closure1_slot2;
                var2 = var2[var16];
                var27 = var25.bind(var1)(var2);
                var26 = var27.compare;
                var25 = var8.id;
                var2 = var7.lastMessageId;
                var2 = var26.bind(var27)(var25, var2);
                if(!(var15 === var2)) { _fun0126_ip = 275; continue _fun0126 }
 264:
                var2 = var8.id;
                var7['lastMessageId'] = var2;
 275:
                var25 = var4.bind(var1)();
                var2 = var25.done;
                var12 = var6;
                var11 = var5;
                var10 = var25;
                var9 = var4;
                var3 = var10;
                if(var2) { _fun0126_ip = 51; continue _fun0126 }
 305:
                _fun0126_ip = 215; continue _fun0126;
            }
 307:
            return var1;
        }
    };
    var5['BACKGROUND_SYNC_CHANNEL_MESSAGES'] = var19;
    var19 = function handleConnectionOpen(arg1) {
        _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
 0:
            var1 = arg1;
            var5 = var1.guilds;
            var7 = var1.relationships;
            var6 = var1.initialPrivateChannels;
            var4 = var1.readState;
            var _closure2_slot0 = var4;
            var8 = _closure1_slot85;
            var1 = undefined;
            var8 = var8.bind(var1)();
            var8 = null;
            _closure1_slot66 = var8;
            var9 = _closure1_slot67;
            if(var9) { _fun0127_ip = 65; continue _fun0127 }
 59:
            var9 = var4.partial;
 65:
            if(var9) { _fun0127_ip = 82; continue _fun0127 }
 68:
            var10 = _closure1_slot78;
            var9 = var10.clearAll;
            var9 = var9.bind(var10)();
 82:
            var9 = false;
            _closure1_slot67 = var9;
            var10 = var4.entries;
            var9 = var10.forEach;
            var4 = function(arg1) {
                _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
 0:
                    var2 = arg1;
                    var6 = var2.read_state_type;
                    var7 = null;
                    if(!(var7 == var6)) { _fun0128_ip = 28; continue _fun0128 }
 15:
                    var1 = _closure1_slot60;
                    var6 = var1.CHANNEL;
 28:
                    var1 = _closure1_slot60;
                    var1 = var1.CHANNEL;
                    var4 = var2;
                    if(!(var6 !== var1)) { _fun0128_ip = 99; continue _fun0128 }
 48:
                    var1 = {};
                    var5 = var2.id;
                    var1['id'] = var5;
                    var5 = var2.read_state_type;
                    var1['read_state_type'] = var5;
                    var5 = var2.badge_count;
                    var1['mention_count'] = var5;
                    var2 = var2.last_acked_id;
                    var1['last_message_id'] = var2;
                    var4 = var1;
 99:
                    var5 = _closure1_slot78;
                    var2 = var5.get;
                    var1 = var4.id;
                    var2 = var2.bind(var5)(var1, var6);
                    var1 = true;
                    var2['_persisted'] = var1;
                    var6 = var4.mention_count;
                    var8 = var7 != var6;
                    var5 = 0;
                    var1 = 0;
                    if(!var8) { _fun0128_ip = 147; continue _fun0128 }
 144:
                    var1 = var6;
 147:
                    var2['_mentionCount'] = var1;
                    var1 = var4.flags;
                    var2['flags'] = var1;
                    var1 = var4.last_viewed;
                    var2['lastViewed'] = var1;
                    var8 = _closure1_slot29;
                    var6 = var8.getBasicChannel;
                    var1 = var4.id;
                    var1 = var6.bind(var8)(var1);
                    if(!(var7 != var1)) { _fun0128_ip = 298; continue _fun0128 }
 200:
                    var8 = _closure1_slot23;
                    var6 = var1.type;
                    var10 = undefined;
                    var6 = var8.bind(var10)(var6);
                    if(!var6) { _fun0128_ip = 298; continue _fun0128 }
 219:
                    var6 = var4.last_message_id;
                    if(!(var7 != var6)) { _fun0128_ip = 239; continue _fun0128 }
 229:
                    var6 = var4.last_message_id;
                    if(!(var5 === var6)) { _fun0128_ip = 298; continue _fun0128 }
 239:
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 40;
                    var6 = var8[var6];
                    var7 = var7.bind(var10)(var6);
                    var6 = var7.fromTimestamp;
                    var9 = _closure1_slot99;
                    var8 = var1.guild_id;
                    var1 = var1.id;
                    var1 = var9.bind(var10)(var8, var1);
                    var1 = var6.bind(var7)(var1);
                    var2['ackMessageId'] = var1;
                    _fun0128_ip = 389; continue _fun0128;
 298:
                    var1 = var2.ackedWhileCached;
                    if(var1) { _fun0128_ip = 321; continue _fun0128 }
 307:
                    var1 = var4.last_message_id;
                    var2['ackMessageId'] = var1;
                    _fun0128_ip = 389; continue _fun0128;
 321:
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 40;
                    var6 = var6[var1];
                    var1 = undefined;
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.compare;
                    var6 = var2.ackMessageId;
                    var1 = var4.last_message_id;
                    var6 = var7.bind(var8)(var6, var1);
                    var1 = -1;
                    if(!(var1 === var6)) { _fun0128_ip = 389; continue _fun0128 }
 377:
                    var1 = var4.last_message_id;
                    var2['ackMessageId'] = var1;
 389:
                    var1 = undefined;
                    var2['ackedWhileCached'] = var1;
                    var6 = _closure1_slot86;
                    var4 = var4.last_pin_timestamp;
                    var4 = var6.bind(var1)(var4);
                    var2['ackPinTimestamp'] = var4;
                    var4 = _closure1_slot78;
                    var7 = var4._mentionChannels;
                    var6 = var7.delete;
                    var4 = var2.channelId;
                    var4 = var6.bind(var7)(var4);
                    var4 = var2._mentionCount;
                    var4 = var4 > var5;
                    if(!var4) { _fun0128_ip = 466; continue _fun0128 }
 456:
                    var5 = var2.canHaveMentions;
                    var4 = var5.bind(var2)();
 466:
                    if(!var4) { _fun0128_ip = 494; continue _fun0128 }
 469:
                    var3 = _closure1_slot78;
                    var4 = var3._mentionChannels;
                    var3 = var4.add;
                    var2 = var2.channelId;
                    var2 = var3.bind(var4)(var2);
 494:
                    return var1;
                }
            };
            var4 = var9.bind(var10)(var4);
            var9 = _closure1_slot78;
            var4 = var9.resetGuildSentinels;
            var4 = var4.bind(var9)();
            var9 = _closure1_slot39;
            var4 = var9.getCurrentUser;
            var4 = var4.bind(var9)();
            var9 = var8 == var4;
            var11 = undefined;
            if(var9) { _fun0127_ip = 152; continue _fun0127 }
 147:
            var11 = var4.id;
 152:
            if(!(var8 != var11)) { _fun0127_ip = 235; continue _fun0127 }
 156:
            var10 = _closure1_slot78;
            var9 = var10.get;
            var4 = _closure1_slot60;
            var4 = var4.NOTIFICATION_CENTER;
            var9 = var9.bind(var10)(var11, var4);
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var4 = 40;
            var4 = var11[var4];
            var11 = var10.bind(var1)(var4);
            var10 = var11.fromTimestamp;
            var4 = global;
            var12 = var4.Date;
            var4 = var12.now;
            var4 = var4.bind(var12)();
            var4 = var10.bind(var11)(var4);
            var9['lastMessageId'] = var4;
 235:
            var4 = _closure1_slot98;
            var4 = var4.bind(var1)(var7);
            var4 = _closure1_slot95;
            var4 = var4.bind(var1)(var6);
            var4 = _closure1_slot82;
            var7 = var4.bind(var1)(var5);
            var5 = var7.bind(var1)();
            var4 = var5.done;
            var6 = 'full_sync';
            if(var4) { _fun0127_ip = 384; continue _fun0127 }
 280:
            var9 = var5.value;
            var10 = _closure1_slot95;
            var4 = var9.channels;
            var4 = var4.op;
            if(!(var6 !== var4)) { _fun0127_ip = 318; continue _fun0127 }
 304:
            var4 = var9.channels;
            var4 = var4.writes;
            _fun0127_ip = 330; continue _fun0127;
 318:
            var11 = var9.channels;
            var4 = var11.items;
 330:
            var4 = var10.bind(var1)(var4);
            var4 = var9.channelTimestampUpdates;
            if(!(var8 != var4)) { _fun0127_ip = 360; continue _fun0127 }
 345:
            var10 = _closure1_slot105;
            var4 = var9.channelTimestampUpdates;
            var4 = var10.bind(var1)(var4);
 360:
            var4 = _closure1_slot97;
            var4 = var4.bind(var1)(var9);
            var9 = var7.bind(var1)();
            var4 = var9.done;
            var5 = var9;
            if(!var4) { _fun0127_ip = 280; continue _fun0127 }
 384:
            var4 = _closure1_slot104;
            var4 = var4.bind(var1)();
            var4 = global;
            var5 = var4.setTimeout;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 41;
            var4 = var7[var4];
            var4 = var6.bind(var1)(var4);
            var4 = var4.Millis;
            var6 = var4.SECOND;
            var4 = 10;
            var4 = var4 * var6;
            var2 = function() {
                _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
 0:
                    var1 = _closure2_slot0;
                    var3 = var1.entries;
                    var2 = _closure1_slot84;
                    var1 = undefined;
                    var6 = var2.bind(var1)();
                    var2 = _closure1_slot82;
                    var5 = var2.bind(var1)(var3);
                    var3 = var5.bind(var1)();
                    var2 = var3.done;
                    var4 = null;
                    if(var2) { _fun0129_ip = 132; continue _fun0129 }
 49:
                    var2 = var3.value;
                    var10 = var2.read_state_type;
                    if(!(var4 == var10)) { _fun0129_ip = 74; continue _fun0129 }
 64:
                    var8 = _closure1_slot60;
                    var10 = var8.CHANNEL;
 74:
                    var9 = _closure1_slot78;
                    var8 = var9.get;
                    var2 = var2.id;
                    var8 = var8.bind(var9)(var2, var10);
                    var2 = var8.shouldDeleteReadState;
                    var2 = var2.bind(var8)(var6);
                    if(!var2) { _fun0129_ip = 117; continue _fun0129 }
 108:
                    var2 = _closure1_slot79;
                    var2 = var2.bind(var1)(var8);
 117:
                    var8 = var5.bind(var1)();
                    var2 = var8.done;
                    var3 = var8;
                    if(!var2) { _fun0129_ip = 49; continue _fun0129 }
 132:
                    return var1;
                }
            };
            var2 = var5.bind(var1)(var2, var4);
            _closure1_slot70 = var2;
            return var1;
        }
    };
    var5['CONNECTION_OPEN'] = var19;
    var19 = function handleConnectionOpenSupplemental(arg1) {
        var1 = arg1;
        var3 = var1.lazyPrivateChannels;
        var2 = _closure1_slot95;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var5['CONNECTION_OPEN_SUPPLEMENTAL'] = var19;
    var5['LOGOUT'] = var18;
    var18 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var4 = var1.readStates;
        var3 = var1.selectedChannelId;
        var5 = _closure1_slot85;
        var1 = undefined;
        var5 = var5.bind(var1)();
        var5 = null;
        _closure1_slot66 = var5;
        _closure1_slot64 = var3;
        var6 = _closure1_slot28;
        var5 = var6.getCurrentSidebarChannelId;
        var3 = _closure1_slot64;
        var3 = var5.bind(var6)(var3);
        _closure1_slot65 = var3;
        var3 = _closure1_slot78;
        var2 = var3.clearAll;
        var2 = var2.bind(var3)();
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
 0:
                var4 = arg1;
                var5 = _closure1_slot78;
                var3 = var5.get;
                var2 = var4.channelId;
                var2 = var3.bind(var5)(var2);
                var3 = var2.deserializeForOverlay;
                var3 = var3.bind(var2)(var4);
                var3 = var2.type;
                var1 = _closure1_slot60;
                var1 = var1.CHANNEL;
                if(!(var3 === var1)) { _fun0130_ip = 67; continue _fun0130 }
 57:
                var1 = var2.rebuildChannelState;
                var1 = var1.bind(var2)();
 67:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var5['OVERLAY_INITIALIZE'] = var18;
    var18 = function handleCacheLoaded(arg1) {
        var1 = arg1;
        var4 = var1.readStates;
        var2 = true;
        _closure1_slot67 = var2;
        var2 = _closure1_slot85;
        var1 = undefined;
        var2 = var2.bind(var1)();
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
 0:
                var10 = arg1;
                var4 = var10.type;
                var1 = null;
                if(!(var1 == var4)) { _fun0131_ip = 27; continue _fun0131 }
 14:
                var2 = _closure1_slot60;
                var4 = var2.CHANNEL;
 27:
                var10['type'] = var4;
                var3 = _closure1_slot78;
                var5 = var3._readStates;
                var3 = var5.get;
                var3 = var3.bind(var5)(var4);
                var5 = var4;
                var4 = var3;
                if(!(var1 == var4)) { _fun0131_ip = 94; continue _fun0131 }
 66:
                var1 = global;
                var1 = var1.Map;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var13 = var3;
                var1 = new var13[var1](var12);
                var4 = var1 instanceof Object ? var1 : var3;
 94:
                var7 = var4.set;
                var6 = var10.channelId;
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 61;
                var3 = var3[var1];
                var1 = undefined;
                var9 = var8.bind(var1)(var3);
                var8 = var9.dangerouslyCast;
                var3 = _closure1_slot78;
                var3 = var8.bind(var9)(var10, var3);
                var3 = var7.bind(var4)(var6, var3);
                var3 = _closure1_slot78;
                var6 = var3._readStates;
                var3 = var6.has;
                var3 = var3.bind(var6)(var5);
                if(var3) { _fun0131_ip = 192; continue _fun0131 }
 171:
                var2 = _closure1_slot78;
                var3 = var2._readStates;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var4);
 192:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var5['CACHE_LOADED'] = var18;
    var18 = function handleGuildCreate(arg1) {
        _fun0132: for(var _fun0132_ip = 0; ; ) switch(_fun0132_ip) {
 0:
            var1 = arg1;
            var3 = var1.guild;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot84;
            var1 = undefined;
            var5 = var5.bind(var1)();
            var _closure2_slot1 = var5;
            var6 = _closure1_slot78;
            var5 = var6.forEach;
            var4 = function(arg1) {
                _fun0133: for(var _fun0133_ip = 0; ; ) switch(_fun0133_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.guildId;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var4 === var1;
                    if(!var1) { _fun0133_ip = 42; continue _fun0133 }
 27:
                    var4 = var3.shouldDeleteReadState;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var3)(var2);
 42:
                    if(!var1) { _fun0133_ip = 57; continue _fun0133 }
 45:
                    var2 = var3.delete;
                    var1 = false;
                    var1 = var2.bind(var3)(var1);
 57:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = var5.bind(var6)(var4);
            var5 = _closure1_slot95;
            var4 = var3.channels;
            var6 = var4.op;
            var4 = 'full_sync';
            if(!(var4 !== var6)) { _fun0132_ip = 89; continue _fun0132 }
 75:
            var4 = var3.channels;
            var4 = var4.writes;
            _fun0132_ip = 101; continue _fun0132;
 89:
            var6 = var3.channels;
            var4 = var6.items;
 101:
            var4 = var5.bind(var1)(var4);
            var5 = var3.channelTimestampUpdates;
            var4 = null;
            if(!(var4 != var5)) { _fun0132_ip = 133; continue _fun0132 }
 118:
            var5 = _closure1_slot105;
            var4 = var3.channelTimestampUpdates;
            var4 = var5.bind(var1)(var4);
 133:
            var2 = _closure1_slot97;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var5['GUILD_CREATE'] = var18;
    var18 = function handleLoadMessages(arg1) {
        _fun0134: for(var _fun0134_ip = 0; ; ) switch(_fun0134_ip) {
 0:
            var1 = arg1;
            var7 = var1.channelId;
            var2 = var1.isAfter;
            var5 = var1.messages;
            var4 = _closure1_slot78;
            var3 = var4.get;
            var3 = var3.bind(var4)(var7);
            var9 = true;
            var3['loadedMessages'] = var9;
            var6 = _closure1_slot34;
            var4 = var6.getMessages;
            var8 = var4.bind(var6)(var7);
            var4 = null;
            if(!(var4 != var8)) { _fun0134_ip = 264; continue _fun0134 }
 69:
            var6 = var5.length;
            var7 = 0;
            if(!(var6 > var7)) { _fun0134_ip = 146; continue _fun0134 }
 80:
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 40;
            var10 = var10[var6];
            var6 = undefined;
            var12 = var11.bind(var6)(var10);
            var11 = var12.compare;
            var6 = var5[var7];
            var10 = var6.id;
            var6 = var3.ackMessageId;
            var10 = var11.bind(var12)(var10, var6);
            var6 = 1;
            if(!(var6 === var10)) { _fun0134_ip = 146; continue _fun0134 }
 136:
            var6 = var3.unreadCount;
            if(!(var7 !== var6)) { _fun0134_ip = 254; continue _fun0134 }
 146:
            var6 = var8.hasPresent;
            var6 = var6.bind(var8)();
            if(var6) { _fun0134_ip = 254; continue _fun0134 }
 159:
            var7 = var8.jumpTargetId;
            var6 = var3.ackMessageId;
            if(!(var7 !== var6)) { _fun0134_ip = 254; continue _fun0134 }
 175:
            if(!var2) { _fun0134_ip = 188; continue _fun0134 }
 178:
            var6 = var3.ackMessageId;
            var2 = var4 != var6;
 188:
            if(!var2) { _fun0134_ip = 208; continue _fun0134 }
 191:
            var7 = var8.has;
            var6 = var3.ackMessageId;
            var2 = var7.bind(var8)(var6, var9);
 208:
            if(!var2) { _fun0134_ip = 264; continue _fun0134 }
 211:
            var6 = var3.unreadCount;
            var2 = var5.length;
            var2 = var6 + var2;
            var3['unreadCount'] = var2;
            var2 = var3.oldestUnreadMessageId;
            if(!(var4 == var2)) { _fun0134_ip = 264; continue _fun0134 }
 242:
            var2 = var3.rebuildChannelState;
            var2 = var2.bind(var3)();
            _fun0134_ip = 264; continue _fun0134;
 254:
            var2 = var3.rebuildChannelState;
            var2 = var2.bind(var3)();
 264:
            var3 = _closure1_slot96;
            var4 = var5.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.thread;
                return var1;
            };
            var5 = var4.bind(var5)(var2);
            var4 = var5.filter;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 57;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var2 = var2.isNotNullish;
            var2 = var4.bind(var5)(var2);
            var2 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var5['LOAD_MESSAGES_SUCCESS'] = var18;
    var18 = function handleIncomingMessage(arg1) {
        _fun0135: for(var _fun0135_ip = 0; ; ) switch(_fun0135_ip) {
 0:
            var1 = arg1;
            var11 = var1.channelId;
            var4 = var1.message;
            var10 = var1.isPushNotification;
            var3 = _closure1_slot78;
            var1 = var3.get;
            var7 = var1.bind(var3)(var11);
            var1 = var7.hasUnread;
            var9 = var1.bind(var7)();
            var1 = var7.lastMessageId;
            var5 = null;
            var8 = var5 != var1;
            if(!var8) { _fun0135_ip = 76; continue _fun0135 }
 61:
            var3 = var7.lastMessageId;
            var1 = var4.id;
            var8 = var3 >= var1;
 76:
            var1 = var4.id;
            var7['lastMessageId'] = var1;
            var3 = _closure1_slot39;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var6 = _closure1_slot29;
            var1 = var6.getBasicChannel;
            var6 = var1.bind(var6)(var11);
            var1 = var4.author;
            if(!(var5 != var1)) { _fun0135_ip = 232; continue _fun0135 }
 125:
            if(!(var5 != var3)) { _fun0135_ip = 232; continue _fun0135 }
 129:
            var1 = var4.author;
            var12 = var1.id;
            var1 = var3.id;
            if(!(var12 === var1)) { _fun0135_ip = 232; continue _fun0135 }
 149:
            var1 = _closure1_slot54;
            var13 = var1.SELF_MENTIONABLE_SYSTEM;
            var12 = var13.has;
            var1 = var4.type;
            var1 = var12.bind(var13)(var1);
            if(var1) { _fun0135_ip = 232; continue _fun0135 }
 177:
            var1 = var7.outgoingAck;
            if(!(var5 != var1)) { _fun0135_ip = 197; continue _fun0135 }
 187:
            var1 = var7.clearOutgoingAck;
            var1 = var1.bind(var7)();
 197:
            var13 = _closure1_slot110;
            var12 = {};
            var12['channelId'] = var11;
            var1 = var4.id;
            var12['messageId'] = var1;
            var1 = false;
            var12['manual'] = var1;
            var1 = undefined;
            var1 = var13.bind(var1)(var12);
            return var1;
 232:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 58;
            var12 = var12[var1];
            var1 = undefined;
            var13 = var13.bind(var1)(var12);
            var12 = var13.getRootNavigationRef;
            var16 = var12.bind(var13)();
            var13 = var5 == var16;
            var12 = undefined;
            if(var13) { _fun0135_ip = 283; continue _fun0135 }
 273:
            var13 = var16.isReady;
            var12 = var13.bind(var16)();
 283:
            var13 = true;
            if(!(var13 !== var12)) { _fun0135_ip = 340; continue _fun0135 }
 289:
            var15 = var5 == var16;
            var12 = undefined;
            var14 = undefined;
            if(!var15) { _fun0135_ip = 470; continue _fun0135 }
 303:
            var17 = _closure1_slot37;
            var15 = var17.getChannelId;
            var17 = var15.bind(var17)();
            var18 = _closure1_slot28;
            var15 = var18.getCurrentSidebarChannelId;
            var14 = var15.bind(var18)(var17);
            var12 = var17;
            _fun0135_ip = 470; continue _fun0135;
 340:
            var15 = var16.getCurrentRoute;
            var15 = var15.bind(var16)();
            var18 = _closure1_slot11;
            var17 = var18.getChatOpen;
            var16 = var7.channelId;
            var16 = var17.bind(var18)(var16);
            if(var16) { _fun0135_ip = 463; continue _fun0135 }
 373:
            var16 = var5 == var15;
            var17 = undefined;
            if(var16) { _fun0135_ip = 387; continue _fun0135 }
 382:
            var17 = var15.name;
 387:
            var16 = 'channel';
            if(!(var16 !== var17)) { _fun0135_ip = 448; continue _fun0135 }
 395:
            var16 = var5 == var15;
            var17 = undefined;
            if(var16) { _fun0135_ip = 409; continue _fun0135 }
 404:
            var17 = var15.name;
 409:
            var16 = 'guilds';
            var12 = undefined;
            var14 = undefined;
            if(!(var16 === var17)) { _fun0135_ip = 470; continue _fun0135 }
 421:
            var17 = var15.params;
            var18 = var5 == var17;
            var16 = undefined;
            if(var18) { _fun0135_ip = 441; continue _fun0135 }
 436:
            var16 = var17.channelId;
 441:
            var12 = var16;
            var14 = undefined;
            _fun0135_ip = 470; continue _fun0135;
 448:
            var15 = var15.params;
            var12 = var15.channelId;
            var14 = undefined;
            _fun0135_ip = 470; continue _fun0135;
 463:
            var12 = var7.channelId;
            var14 = undefined;
 470:
            var12 = var12 === var11;
            if(var12) { _fun0135_ip = 481; continue _fun0135 }
 477:
            var12 = var14 === var11;
 481:
            if(!var12) { _fun0135_ip = 578; continue _fun0135 }
 484:
            var12 = _closure1_slot94;
            var12 = var12.bind(var1)(var7);
            if(!var12) { _fun0135_ip = 578; continue _fun0135 }
 496:
            if(var10) { _fun0135_ip = 578; continue _fun0135 }
 499:
            var12 = var7.ack;
            var10 = {};
            var14 = var4.id;
            var10['messageId'] = var14;
            var10['trackAnalytics'] = var13;
            var13 = {};
            var14 = _closure1_slot43;
            var14 = var14.CHANNEL;
            var13['section'] = var14;
            var14 = _closure1_slot42;
            var14 = var14.ACK_INCOMING_MESSAGE;
            var13['object'] = var14;
            var14 = _closure1_slot41;
            var14 = var14.ACK_AUTOMATIC;
            var13['objectType'] = var14;
            var10['location'] = var13;
            var10 = var12.bind(var7)(var10);
            return var10;
 578:
            var10 = var7.oldestUnreadMessageId;
            if(!(var5 != var10)) { _fun0135_ip = 650; continue _fun0135 }
 588:
            var10 = var7.oldestUnreadMessageIdStale;
            if(var10) { _fun0135_ip = 650; continue _fun0135 }
 597:
            if(var9) { _fun0135_ip = 634; continue _fun0135 }
 600:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 47;
            var10 = var13[var10];
            var12 = var12.bind(var1)(var10);
            var10 = var12.getFocusedChannelId;
            var10 = var10.bind(var12)();
            var9 = var10 === var11;
 634:
            if(var9) { _fun0135_ip = 661; continue _fun0135 }
 637:
            var9 = var4.id;
            var7['oldestUnreadMessageId'] = var9;
            _fun0135_ip = 661; continue _fun0135;
 650:
            var9 = var4.id;
            var7['oldestUnreadMessageId'] = var9;
 661:
            if(var8) { _fun0135_ip = 679; continue _fun0135 }
 664:
            var8 = var7.unreadCount;
            var8 = var8 + 1;
            var7['unreadCount'] = var8;
 679:
            var9 = _closure1_slot36;
            var8 = var9.isBlockedOrIgnoredForMessage;
            var8 = var8.bind(var9)(var4);
            if(var8) { _fun0135_ip = 1246; continue _fun0135 }
 700:
            var9 = var4.type;
            var8 = _closure1_slot50;
            var8 = var8.RECIPIENT_REMOVE;
            if(!(var9 === var8)) { _fun0135_ip = 750; continue _fun0135 }
 719:
            var9 = var5 == var6;
            var8 = undefined;
            if(var9) { _fun0135_ip = 733; continue _fun0135 }
 728:
            var8 = var6.type;
 733:
            var6 = _closure1_slot47;
            var6 = var6.GROUP_DM;
            if(!(var8 !== var6)) { _fun0135_ip = 1246; continue _fun0135 }
 750:
            if(!(var5 != var3)) { _fun0135_ip = 857; continue _fun0135 }
 754:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 43;
            var6 = var9[var6];
            var9 = var8.bind(var1)(var6);
            var8 = var9.isRawMessageMentioned;
            var6 = {};
            var6['rawMessage'] = var4;
            var10 = var3.id;
            var6['userId'] = var10;
            var12 = _closure1_slot38;
            var11 = var12.isSuppressEveryoneEnabled;
            var10 = var7.guildId;
            var10 = var11.bind(var12)(var10);
            var6['suppressEveryone'] = var10;
            var12 = _closure1_slot38;
            var11 = var12.isSuppressRolesEnabled;
            var10 = var7.guildId;
            var10 = var11.bind(var12)(var10);
            var6['suppressRoles'] = var10;
            var6 = var8.bind(var9)(var6);
            if(var6) { _fun0135_ip = 1109; continue _fun0135 }
 857:
            var9 = _closure1_slot29;
            var8 = var9.getChannel;
            var6 = var4.channel_id;
            var10 = var8.bind(var9)(var6);
            var6 = _closure1_slot88;
            var6 = var6.bind(var1)(var10);
            if(var6) { _fun0135_ip = 1093; continue _fun0135 }
 891:
            var6 = _closure1_slot38;
            var6 = var6.mentionOnAllMessages;
            if(!var6) { _fun0135_ip = 1061; continue _fun0135 }
 909:
            if(!(var5 != var10)) { _fun0135_ip = 1061; continue _fun0135 }
 916:
            var6 = var10.isThread;
            var6 = var6.bind(var10)();
            if(var6) { _fun0135_ip = 1016; continue _fun0135 }
 929:
            var6 = var10.isVocal;
            var6 = var6.bind(var10)();
            if(var6) { _fun0135_ip = 1061; continue _fun0135 }
 942:
            var11 = _closure1_slot38;
            var9 = var11.isChannelMuted;
            var8 = var10.guild_id;
            var6 = var10.id;
            var6 = var9.bind(var11)(var8, var6);
            if(var6) { _fun0135_ip = 1061; continue _fun0135 }
 971:
            var8 = _closure1_slot38;
            var6 = var8.resolvedMessageNotifications;
            var8 = var6.bind(var8)(var10);
            var6 = _closure1_slot53;
            var6 = var6.ALL_MESSAGES;
            if(!(var8 === var6)) { _fun0135_ip = 1061; continue _fun0135 }
 1000:
            var6 = {'shouldMention': true, 'isMentionLowImportance': true};
            _fun0135_ip = 1123; continue _fun0135;
 1016:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var8 = 59;
            var8 = var11[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.computeThreadNotificationSetting;
            var9 = var8.bind(var9)(var10);
            var8 = _closure1_slot61;
            var8 = var8.ALL_MESSAGES;
            if(!(var9 !== var8)) { _fun0135_ip = 1077; continue _fun0135 }
 1061:
            var6 = {'shouldMention': false, 'isMentionLowImportance': false};
            _fun0135_ip = 1123; continue _fun0135;
 1077:
            var6 = {'shouldMention': true, 'isMentionLowImportance': true};
            _fun0135_ip = 1123; continue _fun0135;
 1093:
            var6 = {'shouldMention': true, 'isMentionLowImportance': false};
            _fun0135_ip = 1123; continue _fun0135;
 1109:
            var6 = {'shouldMention': true, 'isMentionLowImportance': false};
 1123:
            var8 = var6.shouldMention;
            var6 = var6.isMentionLowImportance;
            if(!var8) { _fun0135_ip = 1246; continue _fun0135 }
 1138:
            var7['isMentionLowImportance'] = var6;
            var6 = var7.mentionCount;
            var6 = var6 + 1;
            var7['mentionCount'] = var6;
            if(!(var5 != var3)) { _fun0135_ip = 1246; continue _fun0135 }
 1163:
            var8 = _closure1_slot78;
            var7 = var8.get;
            var6 = var3.id;
            var5 = _closure1_slot60;
            var5 = var5.NOTIFICATION_CENTER;
            var5 = var7.bind(var8)(var6, var5);
            var4 = var4.id;
            var5['lastMessageId'] = var4;
            var4 = _closure1_slot18;
            var4 = var4.tabFocused;
            if(!var4) { _fun0135_ip = 1246; continue _fun0135 }
 1217:
            var5 = _closure1_slot112;
            var22 = var3.id;
            var2 = _closure1_slot60;
            var21 = var2.NOTIFICATION_CENTER;
            var19 = false;
            var23 = undefined;
            var20 = undefined;
            var2 = var23[var5](var22, var21, var20, var19, var18);
 1246:
            return var1;
        }
    };
    var5['MESSAGE_CREATE'] = var18;
    var5['MESSAGE_DELETE'] = var17;
    var5['MESSAGE_DELETE_BULK'] = var17;
    var5['MESSAGE_ACK'] = var16;
    var16 = function handleChannelAck(arg1) {
        _fun0136: for(var _fun0136_ip = 0; ; ) switch(_fun0136_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.messageId;
            var7 = var1.immediate;
            var3 = undefined;
            if(!(var7 === var3)) { _fun0136_ip = 27; continue _fun0136 }
 25:
            var7 = false;
 27:
            var2 = var1.force;
            if(!(var2 === var3)) { _fun0136_ip = 39; continue _fun0136 }
 37:
            var2 = false;
 39:
            var9 = var1.context;
            var6 = var1.location;
            var3 = _closure1_slot78;
            var1 = var3.get;
            var4 = var1.bind(var3)(var4);
            var3 = var4.ack;
            var1 = {};
            var1['messageId'] = var5;
            var8 = _closure1_slot46;
            var8 = var9 !== var8;
            var1['local'] = var8;
            var1['immediate'] = var7;
            var1['force'] = var2;
            var2 = true;
            var1['isExplicitUserAction'] = var2;
            var1['location'] = var6;
            var1['trackAnalytics'] = var2;
            var1 = var3.bind(var4)(var1);
            var3 = null;
            if(!(var3 != var5)) { _fun0136_ip = 140; continue _fun0136 }
 128:
            var3 = var4.rebuildChannelState;
            var3 = var3.bind(var4)();
            var1 = true;
 140:
            return var1;
        }
    };
    var5['CHANNEL_ACK'] = var16;
    var16 = function handleChannelLocalAck(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot78;
        var1 = var2.get;
        var3 = var1.bind(var2)(var3);
        var2 = var3.ack;
        var1 = {'messageId': null, 'local': true, 'immediate': null, 'force': null, 'isExplicitUserAction': true, 'trackAnalytics': false};
        var4 = undefined;
        var1['messageId'] = var4;
        var1['immediate'] = var4;
        var1['force'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var5['CHANNEL_LOCAL_ACK'] = var16;
    var16 = function handleChannelPinsAck(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.timestamp;
        var2 = _closure1_slot78;
        var1 = var2.get;
        var2 = var1.bind(var2)(var4);
        var1 = var2.ackPins;
        var1 = var1.bind(var2)(var3);
        return var1;
    };
    var5['CHANNEL_PINS_ACK'] = var16;
    var16 = function handleChannelPinsUpdate(arg1) {
        _fun0137: for(var _fun0137_ip = 0; ; ) switch(_fun0137_ip) {
 0:
            var1 = arg1;
            var5 = var1.channelId;
            var4 = var1.lastPinTimestamp;
            var3 = _closure1_slot78;
            var2 = var3.get;
            var3 = var2.bind(var3)(var5);
            var2 = _closure1_slot86;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            var1 = var3.lastPinTimestamp;
            var1 = var1 !== var2;
            if(!var1) { _fun0137_ip = 63; continue _fun0137 }
 55:
            var3['lastPinTimestamp'] = var2;
            var1 = true;
 63:
            return var1;
        }
    };
    var5['CHANNEL_PINS_UPDATE'] = var16;
    var16 = function handleChannelSelect(arg1) {
        _fun0138: for(var _fun0138_ip = 0; ; ) switch(_fun0138_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var2 = _closure1_slot28;
            var1 = var2.getCurrentSidebarChannelId;
            var2 = var1.bind(var2)(var4);
            var5 = _closure1_slot29;
            var1 = var5.getChannel;
            var7 = var1.bind(var5)(var4);
            var9 = null;
            if(!(var9 != var7)) { _fun0138_ip = 136; continue _fun0138 }
 46:
            var6 = _closure1_slot78;
            var5 = var6.get;
            var1 = var7.id;
            var5 = var5.bind(var6)(var1);
            var1 = var5.ackMessageId;
            if(!(var9 == var1)) { _fun0138_ip = 118; continue _fun0138 }
 75:
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 40;
            var8 = var8[var6];
            var6 = undefined;
            var10 = var10.bind(var6)(var8);
            var8 = var10.fromTimestamp;
            var6 = var5.getAckTimestamp;
            var6 = var6.bind(var5)();
            var1 = var8.bind(var10)(var6);
 118:
            var5['ackMessageIdAtChannelSelect'] = var1;
            var1 = var5.recordLastViewedTime;
            var1 = var1.bind(var5)();
 136:
            var5 = _closure1_slot108;
            var1 = _closure1_slot64;
            var8 = undefined;
            var1 = var5.bind(var8)(var1);
            var1 = _closure1_slot65;
            var1 = var5.bind(var8)(var1);
            var6 = _closure1_slot64;
            var5 = false;
            if(!(var6 !== var4)) { _fun0138_ip = 210; continue _fun0138 }
 170:
            var10 = _closure1_slot109;
            var6 = _closure1_slot64;
            var6 = var10.bind(var8)(var6);
            if(var6) { _fun0138_ip = 188; continue _fun0138 }
 186:
            var6 = false;
 188:
            var10 = _closure1_slot109;
            var1 = _closure1_slot65;
            var1 = var10.bind(var8)(var1);
            if(var1) { _fun0138_ip = 207; continue _fun0138 }
 204:
            var1 = var6;
 207:
            var5 = var1;
 210:
            var1 = _closure1_slot64;
            var1 = var1 === var4;
            if(var1) { _fun0138_ip = 270; continue _fun0138 }
 221:
            var10 = var9 == var7;
            var6 = undefined;
            if(var10) { _fun0138_ip = 235; continue _fun0138 }
 230:
            var6 = var7.type;
 235:
            var6 = var9 != var6;
            if(!var6) { _fun0138_ip = 267; continue _fun0138 }
 242:
            var9 = _closure1_slot52;
            var10 = var9.GUILD_THREADS_ONLY;
            var9 = var10.has;
            var7 = var7.type;
            var6 = var9.bind(var10)(var7);
 267:
            var1 = var6;
 270:
            var6 = var5;
            if(!var1) { _fun0138_ip = 341; continue _fun0138 }
 276:
            var7 = _closure1_slot102;
            var1 = {};
            var9 = _closure1_slot43;
            var9 = var9.CHANNEL;
            var1['section'] = var9;
            var9 = _closure1_slot42;
            var9 = var9.ACK_CHANNEL_SELECT_SAME_CHANNEL;
            var1['object'] = var9;
            var9 = _closure1_slot41;
            var9 = var9.ACK_AUTOMATIC;
            var1['objectType'] = var9;
            var1 = var7.bind(var8)(var1, var4);
            if(var1) { _fun0138_ip = 338; continue _fun0138 }
 335:
            var1 = var5;
 338:
            var6 = var1;
 341:
            var5 = _closure1_slot64;
            var1 = var6;
            if(!(var5 === var4)) { _fun0138_ip = 417; continue _fun0138 }
 352:
            var7 = _closure1_slot102;
            var5 = {};
            var9 = _closure1_slot43;
            var9 = var9.CHANNEL;
            var5['section'] = var9;
            var9 = _closure1_slot42;
            var9 = var9.ACK_CHANNEL_SELECT_SAME_CHANNEL_SIDEBAR;
            var5['object'] = var9;
            var9 = _closure1_slot41;
            var9 = var9.ACK_AUTOMATIC;
            var5['objectType'] = var9;
            var5 = var7.bind(var8)(var5, var2);
            if(var5) { _fun0138_ip = 414; continue _fun0138 }
 411:
            var5 = var6;
 414:
            var1 = var5;
 417:
            _closure1_slot64 = var4;
            _closure1_slot65 = var2;
            return var1;
        }
    };
    var5['CHANNEL_SELECT'] = var16;
    var16 = function handleVoiceChannelSelect(arg1) {
        _fun0139: for(var _fun0139_ip = 0; ; ) switch(_fun0139_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var1 = null;
            if(!(var1 != var4)) { _fun0139_ip = 127; continue _fun0139 }
 14:
            var3 = _closure1_slot78;
            var2 = var3.get;
            var3 = var2.bind(var3)(var4);
            var2 = var3.hasMentions;
            var2 = var2.bind(var3)();
            if(var2) { _fun0139_ip = 127; continue _fun0139 }
 44:
            var3['oldestUnreadMessageId'] = var1;
            var2 = var3.ack;
            var1 = {'isExplicitUserAction': true, 'trackAnalytics': true};
            var4 = {};
            var6 = _closure1_slot43;
            var6 = var6.CHANNEL;
            var4['section'] = var6;
            var6 = _closure1_slot42;
            var6 = var6.ACK_VOICE_CHANNEL_SELECT;
            var4['object'] = var6;
            var5 = _closure1_slot41;
            var5 = var5.ACK_SEMI_AUTOMATIC;
            var4['objectType'] = var5;
            var1['location'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
 127:
            var1 = undefined;
            return var1;
        }
    };
    var5['VOICE_CHANNEL_SELECT'] = var16;
    var16 = function handleChannelCreate(arg1) {
        _fun0140: for(var _fun0140_ip = 0; ; ) switch(_fun0140_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var5 = _closure1_slot22;
            var3 = var2.type;
            var1 = undefined;
            var3 = var5.bind(var1)(var3);
            if(var3) { _fun0140_ip = 34; continue _fun0140 }
 30:
            var3 = false;
            return var3;
 34:
            var6 = _closure1_slot78;
            var5 = var6.get;
            var3 = var2.id;
            var3 = var5.bind(var6)(var3);
            var5 = var2.lastMessageId;
            var3['lastMessageId'] = var5;
            var4 = _closure1_slot86;
            var2 = var2.lastPinTimestamp;
            var2 = var4.bind(var1)(var2);
            var3['lastPinTimestamp'] = var2;
            return var1;
        }
    };
    var5['CHANNEL_CREATE'] = var16;
    var16 = function handleThreadCreate(arg1) {
        _fun0141: for(var _fun0141_ip = 0; ; ) switch(_fun0141_ip) {
 0:
            var1 = arg1;
            var4 = var1.channel;
            var5 = _closure1_slot25;
            var3 = var5.has;
            var1 = var4.type;
            var1 = var3.bind(var5)(var1);
            if(!var1) { _fun0141_ip = 129; continue _fun0141 }
 33:
            var5 = _closure1_slot78;
            var3 = var5.get;
            var1 = var4.id;
            var3 = var3.bind(var5)(var1);
            var1 = var4.lastMessageId;
            var3['lastMessageId'] = var1;
            var6 = _closure1_slot86;
            var5 = var4.lastPinTimestamp;
            var1 = undefined;
            var1 = var6.bind(var1)(var5);
            var3['lastPinTimestamp'] = var1;
            var1 = var3.syncThreadSettings;
            var1 = var1.bind(var3)();
            var5 = var4.ownerId;
            var6 = _closure1_slot27;
            var1 = var6.getId;
            var1 = var1.bind(var6)();
            if(!(var5 === var1)) { _fun0141_ip = 129; continue _fun0141 }
 121:
            var1 = true;
            var3['loadedMessages'] = var1;
 129:
            var5 = var4.parent_id;
            var3 = _closure1_slot78;
            var1 = var3.get;
            var3 = var1.bind(var3)(var5);
            var1 = var4.id;
            var3['lastMessageId'] = var1;
            var3 = _closure1_slot39;
            var1 = var3.getCurrentUser;
            var7 = var1.bind(var3)();
            var6 = var4.ownerId;
            var1 = null;
            var8 = var1 == var7;
            var1 = undefined;
            var3 = undefined;
            if(var8) { _fun0141_ip = 197; continue _fun0141 }
 192:
            var3 = var7.id;
 197:
            if(!(var6 === var3)) { _fun0141_ip = 259; continue _fun0141 }
 201:
            var7 = _closure1_slot78;
            var6 = var7.get;
            var3 = var4.id;
            var6 = var6.bind(var7)(var3);
            var3 = true;
            var6['_persisted'] = var3;
            var3 = _closure1_slot110;
            var2 = {};
            var2['channelId'] = var5;
            var4 = var4.id;
            var2['messageId'] = var4;
            var4 = false;
            var2['manual'] = var4;
            var2 = var3.bind(var1)(var2);
 259:
            return var1;
        }
    };
    var5['THREAD_CREATE'] = var16;
    var16 = function handleThreadUpdate(arg1) {
        _fun0142: for(var _fun0142_ip = 0; ; ) switch(_fun0142_ip) {
 0:
            var1 = arg1;
            var2 = var1.channel;
            var5 = _closure1_slot25;
            var4 = var5.has;
            var1 = var2.type;
            var1 = var4.bind(var5)(var1);
            var4 = !var1;
            var1 = !var4;
            if(var4) { _fun0142_ip = 68; continue _fun0142 }
 39:
            var4 = _closure1_slot78;
            var3 = var4.get;
            var2 = var2.id;
            var3 = var3.bind(var4)(var2);
            var2 = var3.syncThreadSettings;
            var1 = var2.bind(var3)();
 68:
            return var1;
        }
    };
    var5['THREAD_UPDATE'] = var16;
    var16 = function handleThreadListSync(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0143: for(var _fun0143_ip = 0; ; ) switch(_fun0143_ip) {
 0:
                var1 = arg1;
                var5 = _closure1_slot25;
                var4 = var5.has;
                var2 = var1.type;
                var2 = var4.bind(var5)(var2);
                if(!var2) { _fun0143_ip = 218; continue _fun0143 }
 31:
                var5 = _closure1_slot78;
                var4 = var5.get;
                var2 = var1.id;
                var4 = var4.bind(var5)(var2);
                var2 = var1.lastMessageId;
                var4['lastMessageId'] = var2;
                var6 = _closure1_slot86;
                var2 = var1.lastPinTimestamp;
                var5 = undefined;
                var2 = var6.bind(var5)(var2);
                var4['lastPinTimestamp'] = var2;
                var2 = true;
                var4['_isThread'] = var2;
                var4['_isActiveThread'] = var2;
                var7 = _closure1_slot20;
                var6 = var7.hasJoined;
                var2 = var1.id;
                var2 = var6.bind(var7)(var2);
                var4['_isJoinedThread'] = var2;
                var2 = var1.isForumPost;
                var2 = var2.bind(var1)();
                if(!var2) { _fun0143_ip = 218; continue _fun0143 }
 138:
                var6 = _closure1_slot78;
                var4 = var6.get;
                var2 = var1.parent_id;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 40;
                var3 = var6[var3];
                var6 = var4.bind(var5)(var3);
                var5 = var6.compare;
                var4 = var2.lastMessageId;
                var3 = var1.id;
                var4 = var5.bind(var6)(var4, var3);
                var3 = 0;
                if(!(var4 < var3)) { _fun0143_ip = 218; continue _fun0143 }
 207:
                var1 = var1.id;
                var2['lastMessageId'] = var1;
 218:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var5['THREAD_LIST_SYNC'] = var16;
    var5['LOAD_THREADS_SUCCESS'] = var15;
    var5['LOAD_ARCHIVED_THREADS_SUCCESS'] = var15;
    var5['SEARCH_MESSAGES_SUCCESS'] = var14;
    var5['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var14;
    var14 = function handleThreadMemberUpdate(arg1) {
        var1 = arg1;
        var3 = var1.id;
        var2 = _closure1_slot78;
        var1 = var2.get;
        var2 = var1.bind(var2)(var3);
        var1 = var2.syncThreadSettings;
        var1 = var1.bind(var2)();
        return var1;
    };
    var5['THREAD_MEMBER_UPDATE'] = var14;
    var14 = function handleThreadMembersUpdate(arg1) {
        _fun0144: for(var _fun0144_ip = 0; ; ) switch(_fun0144_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 60;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var1 = var4.doesThreadMembersActionAffectMe;
            var1 = var1.bind(var4)(var2);
            if(!var1) { _fun0144_ip = 71; continue _fun0144 }
 42:
            var4 = _closure1_slot78;
            var3 = var4.get;
            var2 = var2.id;
            var3 = var3.bind(var4)(var2);
            var2 = var3.syncThreadSettings;
            var1 = var2.bind(var3)();
 71:
            return var1;
        }
    };
    var5['THREAD_MEMBERS_UPDATE'] = var14;
    var5['CHANNEL_DELETE'] = var13;
    var5['THREAD_DELETE'] = var13;
    var13 = function handleWindowFocus(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = false;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot71;
        var3 = var4.forEachChannel;
        var2 = function(arg1, arg2) {
            _fun0145: for(var _fun0145_ip = 0; ; ) switch(_fun0145_ip) {
 0:
                var6 = arg1;
                var4 = arg2;
                var3 = var4.has;
                var1 = _closure2_slot0;
                var1 = var1.windowId;
                var1 = var3.bind(var4)(var1);
                if(!var1) { _fun0145_ip = 166; continue _fun0145 }
 35:
                var1 = _closure2_slot0;
                var4 = var1.focused;
                var1 = null;
                var3 = var1 == var6;
                var1 = false;
                if(var3) { _fun0145_ip = 155; continue _fun0145 }
 56:
                var7 = _closure1_slot78;
                var5 = var7.get;
                var5 = var5.bind(var7)(var6);
                if(var4) { _fun0145_ip = 86; continue _fun0145 }
 76:
                var7 = var5.hasUnread;
                var4 = var7.bind(var5)();
 86:
                if(var4) { _fun0145_ip = 97; continue _fun0145 }
 89:
                var4 = true;
                var5['oldestUnreadMessageIdStale'] = var4;
 97:
                var5 = _closure1_slot102;
                var4 = {};
                var7 = _closure1_slot43;
                var7 = var7.CHANNEL;
                var4['section'] = var7;
                var7 = _closure1_slot42;
                var7 = var7.ACK_WINDOW_FOCUS;
                var4['object'] = var7;
                var3 = _closure1_slot41;
                var3 = var3.ACK_AUTOMATIC;
                var4['objectType'] = var3;
                var3 = undefined;
                var1 = var5.bind(var3)(var4, var6);
 155:
                if(var1) { _fun0145_ip = 162; continue _fun0145 }
 158:
                var1 = _closure2_slot1;
 162:
                _closure2_slot1 = var1;
 166:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot1;
        return var1;
    };
    var5['WINDOW_FOCUS'] = var13;
    var13 = function handleScroll(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = _closure1_slot102;
        var2 = {};
        var5 = _closure1_slot43;
        var5 = var5.CHANNEL;
        var2['section'] = var5;
        var5 = _closure1_slot42;
        var5 = var5.ACK_CHANNEL_SCROLL;
        var2['object'] = var5;
        var1 = _closure1_slot41;
        var1 = var1.ACK_AUTOMATIC;
        var2['objectType'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var5['UPDATE_CHANNEL_DIMENSIONS'] = var13;
    var13 = function handleCurrentUserUpdate() {
        var1 = null;
        _closure1_slot66 = var1;
        var1 = undefined;
        return var1;
    };
    var5['CURRENT_USER_UPDATE'] = var13;
    var13 = function handleBulkAck(arg1) {
        var2 = arg1;
        var6 = var2.channels;
        var5 = var2.context;
        var4 = var2.onFinished;
        var3 = var6.filter;
        var2 = function(arg1) {
            _fun0146: for(var _fun0146_ip = 0; ; ) switch(_fun0146_ip) {
 0:
                var2 = arg1;
                var3 = var2.messageId;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0146_ip = 47; continue _fun0146 }
 17:
                var5 = _closure1_slot80;
                var4 = var5.hasUnreadOrMentions;
                var3 = var2.channelId;
                var2 = var2.readStateType;
                var1 = var4.bind(var5)(var3, var2);
 47:
                return var1;
            }
        };
        var3 = var3.bind(var6)(var2);
        var2 = function _handleBulkAck(arg1, arg2, arg3) {
            _fun0147: for(var _fun0147_ip = 0; ; ) switch(_fun0147_ip) {
 0:
                var6 = arg1;
                var3 = var6.forEach;
                var1 = function(arg1) {
                    var2 = arg1;
                    var5 = var2.channelId;
                    var1 = var2.messageId;
                    var4 = var2.readStateType;
                    var3 = _closure1_slot78;
                    var2 = var3.get;
                    var4 = var2.bind(var3)(var5, var4);
                    var3 = var4.ack;
                    var2 = {'messageId': null, 'local': true, 'immediate': null, 'force': null, 'isExplicitUserAction': true, 'trackAnalytics': false};
                    var2['messageId'] = var1;
                    var1 = undefined;
                    var2['immediate'] = var1;
                    var2['force'] = var1;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1 = var3.bind(var6)(var1);
                var4 = _closure1_slot46;
                var3 = arg2;
                if(!(var3 === var4)) { _fun0147_ip = 105; continue _fun0147 }
 34:
                var4 = _closure1_slot68;
                var3 = var4.push;
                var5 = var6.map;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = {};
                    var3 = var2.channelId;
                    var1['channel_id'] = var3;
                    var3 = var2.messageId;
                    var1['message_id'] = var3;
                    var2 = var2.readStateType;
                    var1['read_state_type'] = var2;
                    return var1;
                };
                var8 = var5.bind(var6)(var2);
                var2 = new Array(0);
                var7 = 0;
                var9 = var2;
                var5 = arraySpread(var9, var8, var7);
                var9 = var3;
                var8 = var2;
                var7 = var4;
                var2 = apply(var9, var8, var7);
                var2 = _closure1_slot69;
                if(var2) { _fun0147_ip = 105; continue _fun0147 }
 91:
                var3 = _closure1_slot89;
                var2 = undefined;
                var1 = arg3;
                var1 = var3.bind(var2)(var1);
 105:
                var1 = undefined;
                return var1;
            }
        };
        var1 = undefined;
        var2 = var2.bind(var1)(var3, var5, var4);
        return var1;
    };
    var5['BULK_ACK'] = var13;
    var13 = function handleEnableAutomaticAck(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var1 = var1.windowId;
        var3 = _closure1_slot72;
        var2 = var3.delete;
        var2 = var2.bind(var3)(var4);
        var3 = _closure1_slot102;
        var2 = {};
        var5 = _closure1_slot43;
        var5 = var5.CHANNEL;
        var2['section'] = var5;
        var5 = _closure1_slot42;
        var5 = var5.ENABLE_AUTOMATIC_ACK;
        var2['object'] = var5;
        var1 = _closure1_slot41;
        var1 = var1.ACK_AUTOMATIC;
        var2['objectType'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var5['ENABLE_AUTOMATIC_ACK'] = var13;
    var13 = function handleDisableAutomaticAck(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var1 = var1.windowId;
        var2 = _closure1_slot72;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = false;
        return var1;
    };
    var5['DISABLE_AUTOMATIC_ACK'] = var13;
    var5['GUILD_FEATURE_ACK'] = var12;
    var12 = function handleGuildScheduledEventCreate(arg1) {
        _fun0148: for(var _fun0148_ip = 0; ; ) switch(_fun0148_ip) {
 0:
            var1 = arg1;
            var4 = var1.guildScheduledEvent;
            var6 = var4.guild_id;
            var7 = _closure1_slot78;
            var3 = var7.get;
            var2 = var4.guild_id;
            var1 = _closure1_slot60;
            var1 = var1.GUILD_EVENT;
            var3 = var3.bind(var7)(var2, var1);
            var1 = var4.id;
            var3['lastMessageId'] = var1;
            var2 = _closure1_slot106;
            var1 = undefined;
            var2 = var2.bind(var1)(var4);
            if(var2) { _fun0148_ip = 107; continue _fun0148 }
 72:
            var7 = _closure1_slot38;
            var2 = var7.isMuteScheduledEventsEnabled;
            var2 = var2.bind(var7)(var6);
            if(var2) { _fun0148_ip = 162; continue _fun0148 }
 90:
            var2 = var3.mentionCount;
            var2 = var2 + 1;
            var3['mentionCount'] = var2;
            _fun0148_ip = 162; continue _fun0148;
 107:
            var3 = _closure1_slot111;
            var2 = {};
            var7 = 'GUILD_FEATURE_ACK';
            var2['type'] = var7;
            var2['id'] = var6;
            var5 = _closure1_slot60;
            var5 = var5.GUILD_EVENT;
            var2['ackType'] = var5;
            var4 = var4.id;
            var2['ackedId'] = var4;
            var4 = false;
            var2['local'] = var4;
            var2 = var3.bind(var1)(var2);
 162:
            return var1;
        }
    };
    var5['GUILD_SCHEDULED_EVENT_CREATE'] = var12;
    var12 = function handleGuildScheduledEventUpdate(arg1) {
        _fun0149: for(var _fun0149_ip = 0; ; ) switch(_fun0149_ip) {
 0:
            var1 = arg1;
            var3 = var1.guildScheduledEvent;
            var6 = var3.guild_id;
            var2 = _closure1_slot106;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = !var2;
            if(var2) { _fun0149_ip = 133; continue _fun0149 }
 34:
            var2 = _closure1_slot59;
            var5 = var2.CANCELED;
            var7 = new Array(2);
            var7[0] = var5;
            var2 = var2.COMPLETED;
            var7[1] = var2;
            var5 = var7.includes;
            var2 = var3.status;
            var2 = var5.bind(var7)(var2);
            var5 = !var2;
            var2 = !var5;
            if(var5) { _fun0149_ip = 130; continue _fun0149 }
 86:
            var7 = _closure1_slot78;
            var5 = var7.get;
            var4 = _closure1_slot60;
            var4 = var4.GUILD_EVENT;
            var5 = var5.bind(var7)(var6, var4);
            var4 = var5.handleGuildEventRemoval;
            var3 = var3.id;
            var3 = var4.bind(var5)(var6, var3);
            var2 = undefined;
 130:
            var1 = var2;
 133:
            return var1;
        }
    };
    var5['GUILD_SCHEDULED_EVENT_UPDATE'] = var12;
    var12 = function handleGuildScheduledEventDelete(arg1) {
        _fun0150: for(var _fun0150_ip = 0; ; ) switch(_fun0150_ip) {
 0:
            var1 = arg1;
            var2 = var1.guildScheduledEvent;
            var5 = var2.guild_id;
            var4 = _closure1_slot106;
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            if(var4) { _fun0150_ip = 80; continue _fun0150 }
 31:
            var7 = _closure1_slot78;
            var6 = var7.get;
            var4 = var2.guild_id;
            var3 = _closure1_slot60;
            var3 = var3.GUILD_EVENT;
            var4 = var6.bind(var7)(var4, var3);
            var3 = var4.handleGuildEventRemoval;
            var2 = var2.id;
            var2 = var3.bind(var4)(var5, var2);
            return var1;
 80:
            var1 = false;
            return var1;
        }
    };
    var5['GUILD_SCHEDULED_EVENT_DELETE'] = var12;
    var12 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var2 = var1.guild;
        var4 = _closure1_slot78;
        var3 = var4.clear;
        var2 = var2.id;
        var1 = _closure1_slot60;
        var1 = var1.GUILD_EVENT;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var5['GUILD_DELETE'] = var12;
    var12 = function handleGuildUpdate(arg1) {
        _fun0151: for(var _fun0151_ip = 0; ; ) switch(_fun0151_ip) {
 0:
            var1 = arg1;
            var3 = var1.guild;
            var2 = var3.latest_onboarding_question_id;
            var1 = null;
            if(!(var1 != var2)) { _fun0151_ip = 70; continue _fun0151 }
 20:
            var6 = _closure1_slot78;
            var5 = var6.get;
            var4 = var3.id;
            var1 = _closure1_slot60;
            var1 = var1.GUILD_ONBOARDING_QUESTION;
            var1 = var5.bind(var6)(var4, var1);
            var3 = var3.id;
            var1['_guildId'] = var3;
            var1['lastMessageId'] = var2;
 70:
            var1 = undefined;
            return var1;
        }
    };
    var5['GUILD_UPDATE'] = var12;
    var12 = function handleResortThreads(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = _closure1_slot102;
        var2 = {};
        var5 = _closure1_slot43;
        var5 = var5.CHANNEL;
        var2['section'] = var5;
        var5 = _closure1_slot42;
        var5 = var5.ACK_RESORT_THREADS;
        var2['object'] = var5;
        var1 = _closure1_slot41;
        var1 = var1.ACK_AUTOMATIC;
        var2['objectType'] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var2, var4);
        return var1;
    };
    var5['RESORT_THREADS'] = var12;
    var12 = function handleUpdateChatOpen(arg1) {
        _fun0152: for(var _fun0152_ip = 0; ; ) switch(_fun0152_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var1 = var1.chatOpen;
            if(var1) { _fun0152_ip = 21; continue _fun0152 }
 17:
            var1 = undefined;
            return var1;
 21:
            var3 = _closure1_slot102;
            var2 = {};
            var5 = _closure1_slot43;
            var5 = var5.CHANNEL;
            var2['section'] = var5;
            var5 = _closure1_slot42;
            var5 = var5.ACK_CHANNEL_RTC_UPDATE_CHAT_OPEN;
            var2['object'] = var5;
            var1 = _closure1_slot41;
            var1 = var1.ACK_AUTOMATIC;
            var2['objectType'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2, var4);
            return var1;
        }
    };
    var5['CHANNEL_RTC_UPDATE_CHAT_OPEN'] = var12;
    var5['DECAY_READ_STATES'] = var9;
    var9 = function handleNotificationCenterItemCreate(arg1) {
        _fun0153: for(var _fun0153_ip = 0; ; ) switch(_fun0153_ip) {
 0:
            var1 = arg1;
            var2 = var1.item;
            var4 = _closure1_slot39;
            var1 = var4.getCurrentUser;
            var5 = var1.bind(var4)();
            var4 = null;
            var7 = var4 == var5;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0153_ip = 42; continue _fun0153 }
 37:
            var6 = var5.id;
 42:
            if(!(var4 != var6)) { _fun0153_ip = 144; continue _fun0153 }
 46:
            var7 = _closure1_slot78;
            var5 = var7.get;
            var4 = _closure1_slot60;
            var4 = var4.NOTIFICATION_CENTER;
            var5 = var5.bind(var7)(var6, var4);
            var4 = var2.id;
            var5['lastMessageId'] = var4;
            var4 = _closure1_slot18;
            var4 = var4.tabFocused;
            if(var4) { _fun0153_ip = 112; continue _fun0153 }
 95:
            var4 = var5.mentionCount;
            var4 = var4 + 1;
            var5['mentionCount'] = var4;
            _fun0153_ip = 142; continue _fun0153;
 112:
            var5 = _closure1_slot112;
            var3 = _closure1_slot60;
            var10 = var3.NOTIFICATION_CENTER;
            var9 = var2.id;
            var8 = false;
            var12 = undefined;
            var11 = var6;
            var2 = var12[var5](var11, var10, var9, var8, var7);
 142:
            return var1;
 144:
            var1 = false;
            return var1;
        }
    };
    var5['NOTIFICATION_CENTER_ITEM_CREATE'] = var9;
    var9 = function handleRelationshipAdd(arg1) {
        _fun0154: for(var _fun0154_ip = 0; ; ) switch(_fun0154_ip) {
 0:
            var7 = arg1;
            var3 = _closure1_slot39;
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            var5 = null;
            if(!(var5 != var2)) { _fun0154_ip = 437; continue _fun0154 }
 28:
            var3 = var7.relationship;
            var3 = var3.since;
            if(!(var5 != var3)) { _fun0154_ip = 433; continue _fun0154 }
 47:
            var3 = var7.relationship;
            var4 = var3.type;
            var3 = _closure1_slot51;
            var3 = var3.PENDING_INCOMING;
            if(!(var4 !== var3)) { _fun0154_ip = 100; continue _fun0154 }
 72:
            var3 = var7.relationship;
            var4 = var3.type;
            var3 = _closure1_slot51;
            var3 = var3.FRIEND;
            if(!(var4 === var3)) { _fun0154_ip = 429; continue _fun0154 }
 100:
            var8 = _closure1_slot78;
            var6 = var8.get;
            var4 = var2.id;
            var3 = _closure1_slot60;
            var3 = var3.NOTIFICATION_CENTER;
            var4 = var6.bind(var8)(var4, var3);
            var3 = var7.relationship;
            var6 = var3.type;
            var3 = _closure1_slot51;
            var3 = var3.FRIEND;
            var6 = var6 === var3;
            var3 = global;
            var9 = var3.Date;
            if(var6) { _fun0154_ip = 210; continue _fun0154 }
 166:
            var7 = var7.relationship;
            var13 = var7.since;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var14 = var8;
            var7 = new var14[var9](var13, var12);
            var8 = var7 instanceof Object ? var7 : var8;
            var7 = var8.getTime;
            var8 = var7.bind(var8)();
            _fun0154_ip = 255; continue _fun0154;
 210:
            var7 = var3.Date;
            var3 = var7.now;
            var13 = var3.bind(var7)();
            var7 = var9.prototype;
            var7 = Object.create(var7, {constructor: {value: var9}});
            var14 = var7;
            var3 = new var14[var9](var13, var12);
            var7 = var3 instanceof Object ? var3 : var7;
            var3 = var7.getTime;
            var8 = var3.bind(var7)();
 255:
            var3 = var4.ackMessageId;
            var5 = var5 != var3;
            var3 = 0;
            if(!var5) { _fun0154_ip = 309; continue _fun0154 }
 270:
            var9 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 40;
            var7 = var7[var5];
            var5 = undefined;
            var9 = var9.bind(var5)(var7);
            var7 = var9.extractTimestamp;
            var5 = var4.ackMessageId;
            var3 = var7.bind(var9)(var5);
 309:
            if(!(var3 < var8)) { _fun0154_ip = 425; continue _fun0154 }
 313:
            var7 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 40;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var7.bind(var5)(var3);
            var3 = var7.fromTimestamp;
            var3 = var3.bind(var7)(var8);
            var4['lastMessageId'] = var3;
            var3 = _closure1_slot18;
            var3 = var3.tabFocused;
            if(var3) { _fun0154_ip = 396; continue _fun0154 }
 365:
            var3 = var4.mentionCount;
            if(var6) { _fun0154_ip = 385; continue _fun0154 }
 374:
            var6 = var3 + 1;
            var4['mentionCount'] = var6;
            _fun0154_ip = 425; continue _fun0154;
 385:
            var3 = var3 - 1;
            var4['mentionCount'] = var3;
            _fun0154_ip = 425; continue _fun0154;
 396:
            var4 = _closure1_slot112;
            var13 = var2.id;
            var1 = _closure1_slot60;
            var12 = var1.NOTIFICATION_CENTER;
            var10 = false;
            var14 = undefined;
            var11 = undefined;
            var1 = var14[var4](var13, var12, var11, var10, var9);
 425:
            var1 = undefined;
            return var1;
 429:
            var1 = false;
            return var1;
 433:
            var1 = false;
            return var1;
 437:
            var1 = false;
            return var1;
        }
    };
    var5['RELATIONSHIP_ADD'] = var9;
    var9 = function handleRelationshipRemove(arg1) {
        _fun0155: for(var _fun0155_ip = 0; ; ) switch(_fun0155_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot39;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            var5 = null;
            if(!(var5 != var1)) { _fun0155_ip = 263; continue _fun0155 }
 28:
            var2 = var3.relationship;
            var2 = var2.since;
            if(!(var5 != var2)) { _fun0155_ip = 259; continue _fun0155 }
 47:
            var2 = var3.relationship;
            var4 = var2.type;
            var2 = _closure1_slot51;
            var2 = var2.PENDING_INCOMING;
            if(!(var4 === var2)) { _fun0155_ip = 255; continue _fun0155 }
 75:
            var7 = _closure1_slot78;
            var4 = var7.get;
            var2 = var1.id;
            var1 = _closure1_slot60;
            var1 = var1.NOTIFICATION_CENTER;
            var2 = var4.bind(var7)(var2, var1);
            var1 = global;
            var7 = var1.Date;
            var3 = var3.relationship;
            var10 = var3.since;
            var4 = var7.prototype;
            var4 = Object.create(var4, {constructor: {value: var7}});
            var11 = var4;
            var3 = new var11[var7](var10, var9);
            var4 = var3 instanceof Object ? var3 : var4;
            var3 = var4.getTime;
            var4 = var3.bind(var4)();
            var3 = var2.ackMessageId;
            var7 = var5 != var3;
            var5 = 0;
            var3 = 0;
            if(!var7) { _fun0155_ip = 211; continue _fun0155 }
 172:
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 40;
            var7 = var7[var6];
            var6 = undefined;
            var8 = var8.bind(var6)(var7);
            var7 = var8.extractTimestamp;
            var6 = var2.ackMessageId;
            var3 = var7.bind(var8)(var6);
 211:
            if(!(var3 <= var4)) { _fun0155_ip = 251; continue _fun0155 }
 215:
            var4 = var1.Math;
            var3 = var4.max;
            var6 = var2.mentionCount;
            var1 = 1;
            var1 = var6 - var1;
            var1 = var3.bind(var4)(var5, var1);
            var2['mentionCount'] = var1;
 251:
            var1 = undefined;
            return var1;
 255:
            var1 = false;
            return var1;
 259:
            var1 = false;
            return var1;
 263:
            var1 = false;
            return var1;
        }
    };
    var5['RELATIONSHIP_REMOVE'] = var9;
    var9 = function handleNotificationCenterItemAck(arg1) {
        _fun0156: for(var _fun0156_ip = 0; ; ) switch(_fun0156_ip) {
 0:
            var1 = arg1;
            var4 = var1.ids;
            var3 = var1.optimistic;
            var1 = undefined;
            var _closure2_slot0 = var1;
            if(var3) { _fun0156_ip = 125; continue _fun0156 }
 26:
            var5 = _closure1_slot18;
            var5 = var5.active;
            if(var5) { _fun0156_ip = 125; continue _fun0156 }
 42:
            var6 = _closure1_slot39;
            var5 = var6.getCurrentUser;
            var6 = var5.bind(var6)();
            var5 = null;
            var8 = var5 == var6;
            var7 = undefined;
            if(var8) { _fun0156_ip = 71; continue _fun0156 }
 66:
            var7 = var6.id;
 71:
            if(!(var5 != var7)) { _fun0156_ip = 121; continue _fun0156 }
 75:
            var6 = _closure1_slot78;
            var5 = var6.get;
            var3 = _closure1_slot60;
            var3 = var3.NOTIFICATION_CENTER;
            var3 = var5.bind(var6)(var7, var3);
            _closure2_slot0 = var3;
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0157: for(var _fun0157_ip = 0; ; ) switch(_fun0157_ip) {
 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 40;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.compare;
                    var3 = _closure2_slot0;
                    var4 = var3.ackMessageId;
                    var3 = arg1;
                    var3 = var5.bind(var6)(var4, var3);
                    var6 = 0;
                    if(!(var3 < var6)) { _fun0157_ip = 105; continue _fun0157 }
 59:
                    var3 = _closure2_slot0;
                    var4 = global;
                    var5 = var4.Math;
                    var4 = var5.max;
                    var2 = _closure2_slot0;
                    var7 = var2.mentionCount;
                    var2 = 1;
                    var2 = var7 - var2;
                    var2 = var4.bind(var5)(var2, var6);
                    var3['mentionCount'] = var2;
 105:
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
            return var1;
 121:
            var1 = false;
            return var1;
 125:
            var1 = false;
            return var1;
        }
    };
    var5['NOTIFICATION_CENTER_ITEMS_ACK'] = var9;
    var9 = function handleUserNonChannelAck(arg1) {
        _fun0158: for(var _fun0158_ip = 0; ; ) switch(_fun0158_ip) {
 0:
            var1 = arg1;
            var7 = var1.ackType;
            var6 = var1.ackedId;
            var5 = var1.local;
            var3 = _closure1_slot39;
            var1 = var3.getCurrentUser;
            var8 = var1.bind(var3)();
            var1 = null;
            var9 = var1 == var8;
            var3 = undefined;
            if(var9) { _fun0158_ip = 53; continue _fun0158 }
 48:
            var3 = var8.id;
 53:
            var1 = var1 != var3;
            if(!var1) { _fun0158_ip = 82; continue _fun0158 }
 60:
            var2 = _closure1_slot112;
            var14 = undefined;
            var13 = var3;
            var12 = var7;
            var11 = var6;
            var10 = var5;
            var1 = var14[var2](var13, var12, var11, var10, var9);
 82:
            return var1;
        }
    };
    var5['USER_NON_CHANNEL_ACK'] = var9;
    var9 = function handlePassiveUpdateV2(arg1) {
        _fun0159: for(var _fun0159_ip = 0; ; ) switch(_fun0159_ip) {
 0:
            var2 = _closure1_slot82;
            var1 = arg1;
            var1 = var1.channels;
            var7 = undefined;
            var6 = var2.bind(var7)(var1);
            var3 = var6.bind(var7)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0159_ip = 151; continue _fun0159 }
 42:
            var10 = var4.value;
            var11 = _closure1_slot78;
            var9 = var11.get;
            var2 = var10.id;
            var9 = var9.bind(var11)(var2);
            var11 = _closure1_slot86;
            var2 = var10.lastPinTimestamp;
            var2 = var11.bind(var7)(var2);
            var12 = var9.lastMessageId;
            var11 = var10.lastMessageId;
            var11 = var12 === var11;
            if(!var11) { _fun0159_ip = 110; continue _fun0159 }
 100:
            var12 = var9.lastPinTimestamp;
            var11 = var12 === var2;
 110:
            if(var11) { _fun0159_ip = 133; continue _fun0159 }
 113:
            var10 = var10.lastMessageId;
            var9['lastMessageId'] = var10;
            var9['lastPinTimestamp'] = var2;
            var3 = true;
 133:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0159_ip = 42; continue _fun0159 }
 151:
            return var1;
        }
    };
    var5['PASSIVE_UPDATE_V2'] = var9;
    var9 = function handleClearOldestUnreadMessage(arg1) {
        var1 = arg1;
        var3 = var1.channelId;
        var2 = _closure1_slot109;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var5['CLEAR_OLDEST_UNREAD_MESSAGE'] = var9;
    var9 = function handleTryAck(arg1) {
        var1 = arg1;
        var4 = var1.channelId;
        var3 = var1.location;
        var2 = _closure1_slot102;
        var1 = undefined;
        var1 = var2.bind(var1)(var3, var4);
        return var1;
    };
    var5['TRY_ACK'] = var9;
    var9 = function handleMessageRequestAck(arg1) {
        _fun0160: for(var _fun0160_ip = 0; ; ) switch(_fun0160_ip) {
 0:
            var1 = arg1;
            var5 = var1.ackedId;
            var3 = _closure1_slot39;
            var1 = var3.getCurrentUser;
            var4 = var1.bind(var3)();
            var3 = null;
            var7 = var3 == var4;
            var1 = undefined;
            var6 = undefined;
            if(var7) { _fun0160_ip = 43; continue _fun0160 }
 38:
            var6 = var4.id;
 43:
            if(!(var3 != var6)) { _fun0160_ip = 125; continue _fun0160 }
 47:
            var4 = _closure1_slot78;
            var3 = var4.get;
            var2 = _closure1_slot60;
            var2 = var2.MESSAGE_REQUESTS;
            var4 = var3.bind(var4)(var6, var2);
            var2 = var4.ackMessageId;
            if(!(var5 !== var2)) { _fun0160_ip = 121; continue _fun0160 }
 82:
            var4['ackMessageId'] = var5;
            var3 = var4.ack;
            var2 = {'messageId': null, 'isExplicitUserAction': true, 'trackAnalytics': false};
            var2['messageId'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
 121:
            var1 = false;
            return var1;
 125:
            var1 = false;
            return var1;
        }
    };
    var5['MESSAGE_REQUEST_ACK'] = var9;
    var9 = function handleMessageRequestClearAck() {
        _fun0161: for(var _fun0161_ip = 0; ; ) switch(_fun0161_ip) {
 0:
            var3 = _closure1_slot39;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var4 = null;
            var5 = var4 == var3;
            var1 = undefined;
            var6 = undefined;
            if(var5) { _fun0161_ip = 34; continue _fun0161 }
 29:
            var6 = var3.id;
 34:
            if(!(var4 != var6)) { _fun0161_ip = 85; continue _fun0161 }
 38:
            var5 = _closure1_slot78;
            var3 = var5.get;
            var2 = _closure1_slot60;
            var2 = var2.MESSAGE_REQUESTS;
            var2 = var3.bind(var5)(var6, var2);
            var3 = var2.ackMessageId;
            if(!(var4 != var3)) { _fun0161_ip = 81; continue _fun0161 }
 73:
            var2['ackMessageId'] = var1;
            return var1;
 81:
            var1 = false;
            return var1;
 85:
            var1 = false;
            return var1;
        }
    };
    var5['MESSAGE_REQUEST_CLEAR_ACK'] = var9;
    var9 = var11.prototype;
    var9 = Object.create(var9, {constructor: {value: var11}});
    var30 = var9;
    var28 = var5;
    var5 = new var30[var11](var29, var28, var27);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot80 = var5;
    var6 = 64;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'stores/ReadStateStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['shouldBadgeMessage'] = var4;
    var3['ReadState'] = var2;
    return var1;
})();
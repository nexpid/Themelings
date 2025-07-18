// app/stores/GuildMemberRequesterStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
            var9 = _closure1_slot12;
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
            var7 = _closure1_slot12;
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
    var _closure1_slot11 = var1;
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
    var _closure1_slot12 = var1;
    var10 = function handleConnectionReset() {
        var2 = _closure1_slot9;
        var1 = var2.reset;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var1 = function _requestMember(arg1, arg2) {
        var4 = _closure1_slot9;
        var3 = var4.request;
        var2 = arg1;
        var1 = arg2;
        var1 = var3.bind(var4)(var2, var1);
        var1 = false;
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function requestFromMessages(arg1, arg2) {
        var3 = arg2;
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = var3.forEach;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var2 = var1.author;
                var3 = var1.mentions;
                var1 = null;
                if(!(var1 != var2)) { _fun0005_ip = 48; continue _fun0005 }
 21:
                var6 = _closure1_slot13;
                var5 = _closure2_slot0;
                var4 = var2.id;
                var2 = undefined;
                var2 = var6.bind(var2)(var5, var4);
 48:
                if(!(var1 != var3)) { _fun0005_ip = 69; continue _fun0005 }
 52:
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var4 = _closure1_slot13;
                    var3 = _closure2_slot0;
                    var1 = arg1;
                    var2 = var1.id;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    var1 = false;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 69:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = false;
        return var1;
    };
    var _closure1_slot14 = var1;
    var8 = function handleLoadMessages(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.messages;
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var4);
            var6 = null;
            var1 = var6 != var2;
            if(!var1) { _fun0006_ip = 49; continue _fun0006 }
 40:
            var4 = var2.guild_id;
            var1 = var6 != var4;
 49:
            if(!var1) { _fun0006_ip = 71; continue _fun0006 }
 52:
            var4 = _closure1_slot14;
            var3 = var2.guild_id;
            var2 = undefined;
            var2 = var4.bind(var2)(var3, var5);
            var1 = false;
 71:
            return var1;
        }
    };
    var9 = function handleLoadSearchResults(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var7 = var1.messages;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0007_ip = 71; continue _fun0007 }
 23:
            var4 = _closure1_slot14;
            var6 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 9;
            var2 = var3[var2];
            var3 = undefined;
            var6 = var6.bind(var3)(var2);
            var2 = var6.flatten;
            var2 = var2.bind(var6)(var7);
            var2 = var4.bind(var3)(var5, var2);
            var1 = false;
 71:
            return var1;
        }
    };
    var1 = global;
    var11 = var1.Object;
    var7 = var11.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var11)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var7 = 7;
    var7 = var5[var7];
    var12 = var6.bind(var1)(var7);
    var15 = var2.isMember;
    var2 = var12.prototype;
    var7 = Object.create(var2, {constructor: {value: var12}});
    var14 = function(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'GUILD_MEMBERS_REQUEST';
        var2['type'] = var5;
        var5 = new Array(1);
        var6 = arg1;
        var5[0] = var6;
        var2['guildIds'] = var5;
        var5 = arg2;
        var2['userIds'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var16 = var7;
    var2 = new var16[var12](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot9 = var2;
    var2 = 10;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function GuildMemberRequesterStore() {
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
                var1 = _closure1_slot10;
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
        var1 = function initialize() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var1 = _closure1_slot8;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = 'requestMember';
        var5['key'] = var7;
        var6 = function requestMember(arg1, arg2) {
            var4 = _closure1_slot13;
            var1 = undefined;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GuildMemberRequesterStore';
    var7['displayName'] = var2;
    var2 = 8;
    var2 = var5[var2];
    var15 = var6.bind(var1)(var2);
    var2 = {};
    var2['CONNECTION_CLOSED'] = var10;
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleConnectionResumed() {
        var2 = _closure1_slot9;
        var1 = var2.requestUnacknowledged;
        var1 = var1.bind(var2)();
        var1 = false;
        return var1;
    };
    var2['CONNECTION_RESUMED'] = var10;
    var10 = function handleGuildMembersChunkBatch(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var2 = var1.chunks;
            var5 = function _loop(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var5 = var2.members;
                    var4 = var5.forEach;
                    var3 = function(arg1) {
                        var4 = _closure1_slot9;
                        var3 = var4.acknowledge;
                        var1 = _closure3_slot0;
                        var2 = var1.guildId;
                        var1 = arg1;
                        var1 = var1.user;
                        var1 = var1.id;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = undefined;
                        return var1;
                    };
                    var3 = var4.bind(var5)(var3);
                    var4 = var2.notFound;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0010_ip = 63; continue _fun0010 }
 42:
                    var3 = var2.notFound;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var4 = _closure1_slot9;
                        var3 = var4.acknowledge;
                        var1 = _closure3_slot0;
                        var2 = var1.guildId;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
 63:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = _closure1_slot11;
            var4 = undefined;
            var3 = var1.bind(var4)(var2);
            var2 = var3.bind(var4)();
            var1 = var2.done;
            if(var1) { _fun0009_ip = 67; continue _fun0009 }
 42:
            var1 = var2.value;
            var1 = var5.bind(var4)(var1);
            var6 = var3.bind(var4)();
            var1 = var6.done;
            var2 = var6;
            if(!var1) { _fun0009_ip = 42; continue _fun0009 }
 67:
            var1 = false;
            return var1;
        }
    };
    var2['GUILD_MEMBERS_CHUNK_BATCH'] = var10;
    var2['SEARCH_FINISH'] = var9;
    var2['MOD_VIEW_SEARCH_FINISH'] = var9;
    var2['LOCAL_MESSAGES_LOADED'] = var8;
    var2['LOAD_MESSAGES_SUCCESS'] = var8;
    var2['LOAD_MESSAGES_AROUND_SUCCESS'] = var8;
    var2['LOAD_RECENT_MENTIONS_SUCCESS'] = var8;
    var4 = function handleLoadPinnedMessages(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var6 = var1.pins;
            var4 = var1.channelId;
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var2 = var1.bind(var2)(var4);
            var5 = null;
            var1 = var5 != var2;
            if(!var1) { _fun0011_ip = 49; continue _fun0011 }
 40:
            var4 = var2.guild_id;
            var1 = var5 != var4;
 49:
            if(!var1) { _fun0011_ip = 88; continue _fun0011 }
 52:
            var5 = _closure1_slot14;
            var4 = var2.guild_id;
            var3 = var6.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.message;
                return var1;
            };
            var3 = var3.bind(var6)(var2);
            var2 = undefined;
            var2 = var5.bind(var2)(var4, var3);
            var1 = false;
 88:
            return var1;
        }
    };
    var2['LOAD_PINNED_MESSAGES_SUCCESS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var7](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/GuildMemberRequesterStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
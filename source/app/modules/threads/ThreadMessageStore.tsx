// app/modules/threads/ThreadMessageStore.tsx
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
            _closure1_slot19 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot19 = var1;
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
            var9 = _closure1_slot21;
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
            var7 = _closure1_slot21;
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
    var _closure1_slot20 = var1;
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
case 39:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 39; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function updateState(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot8;
            var4 = var5.has;
            var3 = var1.type;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0005_ip = 40; continue _fun0005 }
case 38:
            var4 = _closure1_slot23;
            var5 = var1.id;
            var3 = _closure1_slot17;
            var3 = var5 in var3;
            if(var3) { _fun0005_ip = 41; continue _fun0005 }
case 9:
            var6 = _closure1_slot17;
            var5 = var1.id;
            var3 = {};
            var7 = var1.guild_id;
            var3['guildId'] = var7;
            var7 = var1.parent_id;
            var3['parentId'] = var7;
            var9 = var1.messageCount;
            var7 = null;
            var10 = var7 != var9;
            var8 = 0;
            if(!var10) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var8 = var9;
case 42:
            var3['count'] = var8;
            var3['mostRecentRawMessage'] = var7;
            var3['mostRecentMessage'] = var7;
            var6[var5] = var3;
case 41:
            var2 = _closure1_slot17;
            var1 = var1.id;
            var3 = var2[var1];
            var2 = undefined;
            var1 = arg2;
            var1 = var4.bind(var2)(var3, var1);
case 40:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function updateWithState(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot18;
            var2 = var3.parentId;
            var2 = var4[var2];
            var4 = null;
            var5 = var4 != var2;
            var4 = 0;
            if(!var5) { _fun0006_ip = 44; continue _fun0006 }
case 45:
            var4 = var2;
case 44:
            var2 = 1;
            var4 = var4 + var2;
            var2 = _closure1_slot18;
            var1 = var3.parentId;
            var2[var1] = var4;
            var2 = arg2;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function updateFromGuild(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var5 = var2.threads;
            var1 = null;
            if(!(var1 != var5)) { _fun0007_ip = 46; continue _fun0007 }
case 47:
            var4 = var5.forEach;
            var3 = _closure1_slot26;
            var3 = var4.bind(var5)(var3);
case 46:
            var3 = var2.threadMessages;
            if(!(var1 != var3)) { _fun0007_ip = 48; continue _fun0007 }
case 49:
            var2 = var3.forEach;
            var1 = _closure1_slot25;
            var1 = var2.bind(var3)(var1);
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function updateFromThreadMessages(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = var3.type;
            var4 = _closure1_slot15;
            var4 = var4.THREAD_STARTER_MESSAGE;
            if(!(var5 !== var4)) { _fun0008_ip = 50; continue _fun0008 }
case 45:
            var5 = _closure1_slot12;
            var4 = var5.getChannel;
            var3 = var3.channel_id;
            var4 = var4.bind(var5)(var3);
            var3 = null;
            if(!(var3 != var4)) { _fun0008_ip = 50; continue _fun0008 }
case 32:
            var3 = _closure1_slot22;
            var2 = undefined;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = _closure2_slot0;
                var2['mostRecentRawMessage'] = var1;
                var1 = null;
                var2['mostRecentMessage'] = var1;
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var2)(var4, var1);
case 50:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function updateFromThread(arg1) {
        var4 = arg1;
        var _closure2_slot0 = var4;
        var3 = _closure1_slot22;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var1 = _closure2_slot0;
                var3 = var1.messageCount;
                var1 = null;
                if(!(var1 != var3)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                var3 = _closure2_slot0;
                var3 = var3.messageCount;
                var2['count'] = var3;
case 51:
                var6 = var2.mostRecentRawMessage;
                if(!(var1 == var6)) { _fun0009_ip = 8; continue _fun0009 }
case 9:
                var6 = var2.mostRecentMessage;
case 8:
                var3 = _closure2_slot0;
                var3 = var3.lastMessageId;
                var3 = var1 != var3;
                if(!var3) { _fun0009_ip = 42; continue _fun0009 }
case 53:
                var7 = var1 == var6;
                var5 = undefined;
                if(var7) { _fun0009_ip = 13; continue _fun0009 }
case 54:
                var5 = var6.id;
case 13:
                var4 = _closure2_slot0;
                var4 = var4.lastMessageId;
                var3 = var5 !== var4;
case 42:
                if(!var3) { _fun0009_ip = 55; continue _fun0009 }
case 56:
                var2['mostRecentRawMessage'] = var1;
                var2['mostRecentMessage'] = var1;
case 55:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot26 = var1;
    var1 = function updateFromServerThread(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0010_ip = 57; continue _fun0010 }
case 58:
            var5 = var3.id;
            var4 = _closure1_slot17;
            var4 = var5 in var4;
            if(var4) { _fun0010_ip = 57; continue _fun0010 }
case 38:
            var5 = _closure1_slot12;
            var4 = var5.getChannel;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            if(!(var2 != var3)) { _fun0010_ip = 57; continue _fun0010 }
case 59:
            var2 = _closure1_slot26;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            var1 = true;
            return var1;
case 57:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var12 = function handleThreadCreateOrUpdate(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var2 = _closure1_slot26;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var11 = function handleLoadArchivedThreadsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = _closure1_slot27;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var9 = function handleSearchMessagesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.data;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = var1.messages;
            var3 = var1.threads;
            var2 = var4.forEach;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure1_slot27;
                    var1 = arg1;
                    var2 = var1.thread;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var4)(var1);
            var2 = var3.forEach;
            var1 = _closure1_slot27;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var10 = function handleRelationshipUpdate() {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var8 = _closure1_slot17;
            var1 = undefined;
            var3 = null;
            var2 = undefined;
            for(var4 in var8)
case 60:
            {
case 7:
                var14 = var4;
                var10 = _closure1_slot17;
                var11 = var10[var14];
                if(var3 == var11) { _fun0011_ip = 60; continue _fun0011 }
case 6:
                var10 = var11.mostRecentMessage;
                if(var3 == var10) { _fun0011_ip = 60; continue _fun0011 }
case 39:
                var13 = _closure1_slot13;
                var12 = var13.getMessage;
                var10 = var11.mostRecentMessage;
                var10 = var10.id;
                var10 = var12.bind(var13)(var14, var10);
                var2 = var10;
                if(var3 == var10) { _fun0011_ip = 60; continue _fun0011 }
case 61:
                var11['mostRecentMessage'] = var10;
                var2 = var10;
                _fun0011_ip = 60; continue _fun0011;
            }
case 62:
            return var1;
        }
    };
    var2 = global;
    var14 = var2.Object;
    var13 = var14.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var13 = var8.ALL_CHANNEL_TYPES;
    var _closure1_slot8 = var13;
    var8 = var8.THREAD_CHANNEL_TYPES;
    var _closure1_slot9 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.MAX_THREAD_MESSAGE_COUNT;
    var _closure1_slot14 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.MessageTypes;
    var _closure1_slot15 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var18 = var8;
    var2 = new var18[var2](var17);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot16 = var2;
    var2 = {};
    var _closure1_slot17 = var2;
    var2 = {};
    var _closure1_slot18 = var2;
    var2 = 15;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ThreadMessageStore() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
                var1 = _closure1_slot19;
                var1 = var1.bind(var3)();
                if(var1) { _fun0012_ip = 63; continue _fun0012 }
case 59:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0012_ip = 64; continue _fun0012;
case 63:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 64:
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
            var2 = _closure1_slot12;
            var1 = _closure1_slot13;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'getCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = _closure1_slot17;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 45; continue _fun0013 }
case 65:
                var2 = var3.count;
case 45:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0013_ip = 66; continue _fun0013 }
case 67:
                var1 = var2;
case 66:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMostRecentMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var7 = arg1;
                var1 = _closure1_slot17;
                var2 = var1[var7];
                var1 = null;
                if(!(var1 != var2)) { _fun0014_ip = 68; continue _fun0014 }
case 35:
                var3 = var2.mostRecentMessage;
                var3 = var1 == var3;
                if(!var3) { _fun0014_ip = 69; continue _fun0014 }
case 70:
                var5 = var2.mostRecentRawMessage;
                var3 = var1 != var5;
case 69:
                if(!var3) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                var6 = _closure1_slot13;
                var5 = var6.getMessage;
                var3 = var2.mostRecentRawMessage;
                var3 = var3.id;
                var3 = var5.bind(var6)(var7, var3);
                if(!(var1 == var3)) { _fun0014_ip = 73; continue _fun0014 }
case 54:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 14;
                var5 = var5[var4];
                var4 = undefined;
                var6 = var6.bind(var4)(var5);
                var5 = var6.createMessageRecord;
                var4 = var2.mostRecentRawMessage;
                var3 = var5.bind(var6)(var4);
case 73:
                var2['mostRecentMessage'] = var3;
                var2['mostRecentRawMessage'] = var1;
case 71:
                var3 = var2.mostRecentMessage;
                var4 = var1 != var3;
                var2 = null;
                if(!var4) { _fun0014_ip = 74; continue _fun0014 }
case 75:
                var2 = var3;
case 74:
                return var2;
case 68:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getChannelThreadsVersion';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot18;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getInitialOverlayState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot17;
            return var1;
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ThreadMessageStore';
    var8['displayName'] = var2;
    var2 = 16;
    var2 = var6[var2];
    var17 = var7.bind(var1)(var2);
    var2 = {};
    var13 = function handleConnectionOpen(arg1) {
        var2 = {};
        _closure1_slot18 = var2;
        var3 = _closure1_slot16;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var2 = arg1;
        var3 = var2.guilds;
        var2 = var3.forEach;
        var1 = _closure1_slot24;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var13;
    var13 = function handleOverlayInitialize(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var9 = var1.threadMessages;
            var1 = {};
            var17 = var1;
            var16 = var9;
            var2 = copyDataProperties(var17, var16);
            _closure1_slot17 = var1;
            var7 = var1;
            var2 = 'author';
            var1 = null;
            for(var3 in var7)
case 6:
            {
case 8:
                var10 = var3;
                var11 = var9[var10];
                var12 = var11.mostRecentMessage;
                if(var1 == var12) { _fun0015_ip = 6; continue _fun0015 }
case 53:
                var11 = var9[var10];
                var13 = _closure1_slot10;
                var10 = {};
                var17 = var10;
                var16 = var12;
                var14 = copyDataProperties(var17, var16);
                var15 = _closure1_slot11;
                var17 = var12.author;
                var14 = var15.prototype;
                var14 = Object.create(var14, {constructor: {value: var15}});
                var18 = var14;
                var12 = new var18[var15](var17, var16);
                var12 = var12 instanceof Object ? var12 : var14;
                var10[var2] = var12;
                var12 = var13.prototype;
                var12 = Object.create(var12, {constructor: {value: var13}});
                var18 = var12;
                var17 = var10;
                var10 = new var18[var13](var17, var16);
                var10 = var10 instanceof Object ? var10 : var12;
                var11['mostRecentMessage'] = var10;
                _fun0015_ip = 6; continue _fun0015;
            }
case 19:
            var1 = undefined;
            return var1;
        }
    };
    var2['OVERLAY_INITIALIZE'] = var13;
    var13 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var2 = _closure1_slot24;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_CREATE'] = var13;
    var13 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = var1.id;
        var2 = function deleteForGuild(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 12;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.omitBy;
            var4 = _closure1_slot17;
            var2 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.guildId;
                    var1 = _closure3_slot0;
                    var1 = var3 === var1;
                    if(!var1) { _fun0016_ip = 76; continue _fun0016 }
case 52:
                    var3 = _closure1_slot18;
                    var2 = var2.parentId;
                    var2 = delete var3[var2];
case 76:
                    return var1;
                }
            };
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot17 = var2;
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_DELETE'] = var13;
    var2['THREAD_CREATE'] = var12;
    var2['THREAD_UPDATE'] = var12;
    var12 = function handleThreadListSync(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var4 = var1.threads;
            var3 = var1.mostRecentMessages;
            var2 = var4.forEach;
            var1 = _closure1_slot26;
            var1 = var2.bind(var4)(var1);
            var1 = null;
            if(!(var1 != var3)) { _fun0017_ip = 39; continue _fun0017 }
case 51:
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var5 = arg1;
                    var _closure3_slot0 = var5;
                    var6 = _closure1_slot12;
                    var4 = var6.getChannel;
                    var3 = var5.channel_id;
                    var4 = var4.bind(var6)(var3);
                    var3 = null;
                    var3 = var3 != var4;
                    if(!var3) { _fun0018_ip = 48; continue _fun0018 }
case 67:
                    var6 = var5.type;
                    var5 = _closure1_slot15;
                    var5 = var5.THREAD_STARTER_MESSAGE;
                    var3 = var6 !== var5;
case 48:
                    if(!var3) { _fun0018_ip = 77; continue _fun0018 }
case 78:
                    var3 = _closure1_slot22;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var2 = arg1;
                        var1 = _closure3_slot0;
                        var2['mostRecentRawMessage'] = var1;
                        var1 = null;
                        var2['mostRecentMessage'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var4, var1);
case 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
case 39:
            var1 = undefined;
            return var1;
        }
    };
    var2['THREAD_LIST_SYNC'] = var12;
    var2['LOAD_THREADS_SUCCESS'] = var11;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var11;
    var2['RELATIONSHIP_ADD'] = var10;
    var2['RELATIONSHIP_UPDATE'] = var10;
    var2['RELATIONSHIP_REMOVE'] = var10;
    var2['SEARCH_MESSAGES_SUCCESS'] = var9;
    var2['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var9;
    var9 = function handleThreadDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var2 = _closure1_slot17;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['THREAD_DELETE'] = var9;
    var9 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = var1.id;
        var2 = function deleteForChannel(arg1) {
            var3 = arg1;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 12;
            var5 = var5[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var5);
            var6 = var7.omitBy;
            var5 = _closure1_slot17;
            var4 = function(arg1) {
                var1 = arg1;
                var2 = var1.parentId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var6.bind(var7)(var5, var4);
            _closure1_slot17 = var4;
            var2 = _closure1_slot18;
            var2 = delete var2[var3];
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var9;
    var9 = function handleMessageCreate(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var2 = arg1;
            var7 = var2.message;
            var _closure2_slot0 = var7;
            var3 = var2.optimistic;
            var1 = var2.isPushNotification;
            var2 = var2.sendMessageOptions;
            if(var3) { _fun0019_ip = 79; continue _fun0019 }
case 51:
            if(var1) { _fun0019_ip = 79; continue _fun0019 }
case 80:
            var1 = null;
            if(!(var1 == var2)) { _fun0019_ip = 79; continue _fun0019 }
case 81:
            var6 = _closure1_slot12;
            var5 = var6.getChannel;
            var2 = var7.channel_id;
            var6 = var5.bind(var6)(var2);
            var2 = var1 == var6;
            if(var2) { _fun0019_ip = 82; continue _fun0019 }
case 83:
            var8 = _closure1_slot9;
            var5 = var8.has;
            var1 = var6.type;
            var1 = var5.bind(var8)(var1);
            var2 = !var1;
case 82:
            var1 = !var2;
            if(var2) { _fun0019_ip = 84; continue _fun0019 }
case 85:
            var5 = var7.type;
            var2 = _closure1_slot15;
            var2 = var2.THREAD_STARTER_MESSAGE;
            var5 = var5 !== var2;
            if(!var5) { _fun0019_ip = 86; continue _fun0019 }
case 87:
            var2 = var6.isForumPost;
            var2 = var2.bind(var6)();
            var2 = !var2;
            if(var2) { _fun0019_ip = 88; continue _fun0019 }
case 89:
            var8 = var7.id;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 13;
            var9 = var9[var7];
            var7 = undefined;
            var10 = var10.bind(var7)(var9);
            var9 = var10.castChannelIdAsMessageId;
            var7 = var6.id;
            var7 = var9.bind(var10)(var7);
            var2 = var8 !== var7;
case 88:
            var5 = var2;
case 86:
            var2 = !var5;
            var2 = !var2;
            if(!var5) { _fun0019_ip = 90; continue _fun0019 }
case 91:
            var5 = _closure1_slot22;
            var3 = undefined;
            var4 = function(arg1) {
                var2 = arg1;
                var1 = global;
                var5 = var1.Math;
                var4 = var5.min;
                var3 = var2.count;
                var1 = 1;
                var3 = var3 + var1;
                var1 = _closure1_slot14;
                var1 = var4.bind(var5)(var3, var1);
                var2['count'] = var1;
                var1 = _closure2_slot0;
                var2['mostRecentRawMessage'] = var1;
                var1 = null;
                var2['mostRecentMessage'] = var1;
                var1 = undefined;
                return var1;
            };
            var4 = var5.bind(var3)(var6, var4);
            var2 = undefined;
case 90:
            var1 = var2;
case 84:
            return var1;
case 79:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var9;
    var9 = function handleMessageUpdate(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var5 = var1.message;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot17;
            var1 = var5.channel_id;
            var4 = var4[var1];
            var7 = null;
            var8 = var7 == var4;
            var1 = undefined;
            var6 = undefined;
            if(var8) { _fun0020_ip = 72; continue _fun0020 }
case 66:
            var6 = var4.mostRecentRawMessage;
case 72:
            if(!(var7 == var6)) { _fun0020_ip = 53; continue _fun0020 }
case 81:
            var9 = var7 == var4;
            var8 = undefined;
            if(var9) { _fun0020_ip = 92; continue _fun0020 }
case 78:
            var8 = var4.mostRecentMessage;
case 92:
            var6 = var8;
case 53:
            if(!(var7 != var4)) { _fun0020_ip = 85; continue _fun0020 }
case 93:
            if(!(var7 != var6)) { _fun0020_ip = 85; continue _fun0020 }
case 77:
            var6 = var6.id;
            var5 = var5.id;
            if(!(var6 === var5)) { _fun0020_ip = 85; continue _fun0020 }
case 94:
            var3 = _closure1_slot23;
            var2 = function(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.mostRecentMessage;
                    var3 = null;
                    if(!(var3 != var1)) { _fun0021_ip = 53; continue _fun0021 }
case 47:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 14;
                    var4 = var4[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.updateMessageRecord;
                    var4 = var2.mostRecentMessage;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var6)(var4, var1);
                    var2['mostRecentMessage'] = var1;
case 53:
                    var1 = var2.mostRecentRawMessage;
                    if(!(var3 != var1)) { _fun0021_ip = 95; continue _fun0021 }
case 96:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.updateServerMessage;
                    var3 = var2.mostRecentRawMessage;
                    var1 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var1);
                    var2['mostRecentRawMessage'] = var1;
case 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var4, var2);
            return var1;
case 85:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var9;
    var9 = function handleMessageDelete(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var7 = var1.id;
            var _closure2_slot0 = var7;
            var8 = var1.channelId;
            var1 = undefined;
            var _closure2_slot1 = var1;
            var _closure2_slot2 = var1;
            var4 = _closure1_slot17;
            var4 = var4[var8];
            var5 = null;
            if(!(var5 != var4)) { _fun0022_ip = 97; continue _fun0022 }
case 69:
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 13;
            var5 = var9[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.castChannelIdAsMessageId;
            var5 = var5.bind(var6)(var8);
            var5 = var5 !== var7;
            _closure2_slot1 = var5;
            var6 = _closure1_slot16;
            var5 = var6.has;
            var5 = var5.bind(var6)(var7);
            var5 = !var5;
            _closure2_slot2 = var5;
            var3 = _closure1_slot23;
            var2 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.mostRecentRawMessage;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0023_ip = 60; continue _fun0023 }
case 47:
                    var4 = var3.mostRecentMessage;
case 60:
                    var2 = var1 != var4;
                    if(!var2) { _fun0023_ip = 80; continue _fun0023 }
case 38:
                    var5 = var4.id;
                    var4 = _closure2_slot0;
                    var2 = var5 === var4;
case 80:
                    if(!var2) { _fun0023_ip = 48; continue _fun0023 }
case 98:
                    var3['mostRecentMessage'] = var1;
                    var3['mostRecentRawMessage'] = var1;
case 48:
                    var2 = _closure2_slot1;
                    if(!var2) { _fun0023_ip = 99; continue _fun0023 }
case 63:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0023_ip = 100; continue _fun0023 }
case 99:
                    var2 = var3.count;
                    _fun0023_ip = 41; continue _fun0023;
case 100:
                    var4 = global;
                    var7 = var4.Math;
                    var6 = var7.max;
                    var5 = var3.count;
                    var4 = 1;
                    var5 = var5 - var4;
                    var4 = 0;
                    var2 = var6.bind(var7)(var5, var4);
case 41:
                    var3['count'] = var2;
                    var3 = _closure1_slot16;
                    var2 = var3.add;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var4, var2);
            return var1;
case 97:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var9;
    var9 = function handleMessageDeleteBulk(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var7 = var1.ids;
            var _closure2_slot0 = var7;
            var5 = var1.channelId;
            var _closure2_slot1 = var5;
            var1 = undefined;
            var _closure2_slot2 = var1;
            var4 = _closure1_slot17;
            var4 = var4[var5];
            var5 = null;
            if(!(var5 != var4)) { _fun0024_ip = 101; continue _fun0024 }
case 98:
            var6 = var7.filter;
            var5 = function(arg1) {
                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var3);
                    var3 = var5.castChannelIdAsMessageId;
                    var1 = _closure2_slot1;
                    var1 = var3.bind(var5)(var1);
                    var1 = var1 !== var4;
                    var3 = _closure1_slot16;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var4);
                    var2 = !var2;
                    if(!var1) { _fun0025_ip = 50; continue _fun0025 }
case 3:
                    var1 = var2;
case 50:
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var6 = var5.length;
            _closure2_slot2 = var6;
            var5 = 0;
            if(!(var6 > var5)) { _fun0024_ip = 102; continue _fun0024 }
case 103:
            var3 = _closure1_slot23;
            var2 = function(arg1) {
                _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                    var3 = arg1;
                    var4 = var3.mostRecentRawMessage;
                    var1 = null;
                    if(!(var1 == var4)) { _fun0026_ip = 60; continue _fun0026 }
case 47:
                    var4 = var3.mostRecentMessage;
case 60:
                    var2 = var1 != var4;
                    if(!var2) { _fun0026_ip = 104; continue _fun0026 }
case 38:
                    var6 = _closure2_slot0;
                    var5 = var6.includes;
                    var4 = var4.id;
                    var2 = var5.bind(var6)(var4);
case 104:
                    if(!var2) { _fun0026_ip = 105; continue _fun0026 }
case 81:
                    var3['mostRecentMessage'] = var1;
                    var3['mostRecentRawMessage'] = var1;
case 105:
                    var4 = var3.count;
                    var2 = _closure2_slot2;
                    var2 = var4 - var2;
                    var3['count'] = var2;
                    var3 = _closure2_slot0;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var3 = _closure1_slot16;
                        var2 = var3.add;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var4, var2);
case 102:
            return var1;
case 101:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE_BULK'] = var9;
    var4 = function handleLoadMessagesSuccess(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot20;
            var1 = var5.messages;
            var2 = undefined;
            var9 = var6.bind(var2)(var1);
            var7 = var9.bind(var2)();
            var6 = var7.done;
            var8 = var7;
            var7 = false;
            var1 = false;
            if(var6) { _fun0027_ip = 15; continue _fun0027 }
case 9:
            var10 = _closure1_slot27;
            var6 = var8.value;
            var6 = var6.thread;
            var10 = var10.bind(var2)(var6);
            if(var10) { _fun0027_ip = 4; continue _fun0027 }
case 53:
            var10 = var7;
case 4:
            var11 = var9.bind(var2)();
            var6 = var11.done;
            var7 = var10;
            var8 = var11;
            var1 = var7;
            if(!var6) { _fun0027_ip = 9; continue _fun0027 }
case 15:
            var6 = var5.isAfter;
            if(var6) { _fun0027_ip = 106; continue _fun0027 }
case 82:
            var6 = var5.isBefore;
            if(var6) { _fun0027_ip = 106; continue _fun0027 }
case 107:
            var6 = var5.hasMoreAfter;
            if(var6) { _fun0027_ip = 106; continue _fun0027 }
case 108:
            var7 = _closure1_slot12;
            var6 = var7.getChannel;
            var5 = var5.channelId;
            var5 = var6.bind(var7)(var5);
            var6 = null;
            if(!(var6 != var5)) { _fun0027_ip = 23; continue _fun0027 }
case 109:
            var8 = _closure1_slot9;
            var7 = var8.has;
            var6 = var5.type;
            var6 = var7.bind(var8)(var6);
            if(!var6) { _fun0027_ip = 23; continue _fun0027 }
case 110:
            var4 = _closure1_slot22;
            var3 = function(arg1) {
                _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                    var2 = arg1;
                    var1 = _closure2_slot0;
                    var1 = var1.messages;
                    var3 = var1.length;
                    var1 = 0;
                    if(!(var1 !== var3)) { _fun0028_ip = 111; continue _fun0028 }
case 112:
                    var3 = _closure2_slot0;
                    var3 = var3.messages;
                    var6 = var3[var1];
                    var3 = null;
                    var7 = var3 != var6;
                    var4 = null;
                    if(!var7) { _fun0028_ip = 39; continue _fun0028 }
case 113:
                    var4 = var6;
case 39:
                    var5 = _closure2_slot0;
                    var5 = var5.messages;
                    var7 = var5.length;
                    var6 = _closure1_slot14;
                    if(!(!(var7 >= var6))) { _fun0028_ip = 61; continue _fun0028 }
case 96:
                    var6 = var2.count;
                    _fun0028_ip = 94; continue _fun0028;
case 61:
                    var6 = _closure1_slot14;
case 94:
                    var2['count'] = var6;
                    var7 = var3 == var4;
                    var6 = undefined;
                    if(var7) { _fun0028_ip = 107; continue _fun0028 }
case 114:
                    var6 = var4.type;
case 107:
                    var5 = _closure1_slot15;
                    var5 = var5.THREAD_STARTER_MESSAGE;
                    if(!(var6 !== var5)) { _fun0028_ip = 115; continue _fun0028 }
case 116:
                    var2['mostRecentRawMessage'] = var4;
                    var2['mostRecentMessage'] = var3;
                    _fun0028_ip = 115; continue _fun0028;
case 111:
                    var3 = null;
                    var2['mostRecentRawMessage'] = var3;
                    var2['mostRecentMessage'] = var3;
                    var2['count'] = var1;
case 115:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var4.bind(var2)(var5, var3);
            return var2;
case 23:
            return var1;
case 106:
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var18 = var4;
    var16 = var2;
    var2 = new var18[var8](var17, var16, var15);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadMessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
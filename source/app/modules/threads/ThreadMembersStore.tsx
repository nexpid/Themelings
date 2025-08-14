// app/modules/threads/ThreadMembersStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
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
    var1 = function updateFromGuild(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.threads;
            var1 = null;
            if(!(var1 != var3)) { _fun0005_ip = 32; continue _fun0005 }
 15:
            var2 = var3.forEach;
            var1 = _closure1_slot14;
            var1 = var2.bind(var3)(var1);
 32:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function updateFromThread(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot7;
            var4 = var5.has;
            var3 = var1.type;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0006_ip = 32; continue _fun0006 }
 28:
            var3 = false;
            return var3;
 32:
            var4 = var1.id;
            var3 = _closure1_slot9;
            var3 = var4 in var3;
            if(var3) { _fun0006_ip = 127; continue _fun0006 }
 48:
            var5 = _closure1_slot9;
            var4 = var1.id;
            var3 = {};
            var6 = var1.guild_id;
            var3['guildId'] = var6;
            var6 = var1.parent_id;
            var3['parentId'] = var6;
            var8 = var1.memberCount;
            var7 = null;
            var9 = var7 != var8;
            var6 = 0;
            if(!var9) { _fun0006_ip = 99; continue _fun0006 }
 96:
            var6 = var8;
 99:
            var3['memberCount'] = var6;
            var6 = var1.memberIdsPreview;
            if(!(var7 == var6)) { _fun0006_ip = 118; continue _fun0006 }
 114:
            var6 = new Array(0);
 118:
            var3['memberIdsPreview'] = var6;
            var5[var4] = var3;
 127:
            var3 = _closure1_slot9;
            var2 = var1.id;
            var2 = var3[var2];
            var3 = var1.memberCount;
            var4 = null;
            if(!(var4 != var3)) { _fun0006_ip = 164; continue _fun0006 }
 152:
            var3 = var1.memberCount;
            var2['memberCount'] = var3;
 164:
            var3 = var1.memberIdsPreview;
            if(!(var4 != var3)) { _fun0006_ip = 186; continue _fun0006 }
 174:
            var1 = var1.memberIdsPreview;
            var2['memberIdsPreview'] = var1;
 186:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var11 = function handleThreadCreateOrUpdate(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var2 = _closure1_slot14;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var9 = function handleLoadArchivedThreadsSuccess(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = _closure1_slot15;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var10 = function handleSearchMessagesSuccess(arg1) {
        var2 = arg1;
        var4 = var2.data;
        var2 = false;
        var _closure2_slot0 = var2;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var2 = arg1;
            var3 = var2.threads;
            var5 = var2.messages;
            var4 = var5.forEach;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure1_slot15;
                        var1 = arg1;
                        var2 = var1.thread;
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        if(var3) { _fun0007_ip = 33; continue _fun0007 }
 26:
                        var3 = _closure2_slot0;
 33:
                        _closure2_slot0 = var3;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure1_slot15;
                    var1 = undefined;
                    var2 = arg1;
                    var3 = var3.bind(var1)(var2);
                    if(var3) { _fun0008_ip = 27; continue _fun0008 }
 20:
                    var3 = _closure2_slot0;
 27:
                    _closure2_slot0 = var3;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var1 = function updateFromServerThread(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var3 = arg1;
            var2 = null;
            if(!(var2 != var3)) { _fun0009_ip = 66; continue _fun0009 }
 9:
            var5 = var3.id;
            var4 = _closure1_slot9;
            var4 = var5 in var4;
            if(var4) { _fun0009_ip = 66; continue _fun0009 }
 28:
            var5 = _closure1_slot8;
            var4 = var5.getChannel;
            var3 = var3.id;
            var3 = var4.bind(var5)(var3);
            if(!(var2 != var3)) { _fun0009_ip = 66; continue _fun0009 }
 51:
            var2 = _closure1_slot14;
            var1 = undefined;
            var1 = var2.bind(var1)(var3);
            var1 = true;
            return var1;
 66:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = {};
    var _closure1_slot9 = var2;
    var2 = 8;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ThreadMembersStore() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                if(var1) { _fun0010_ip = 69; continue _fun0010 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0010_ip = 105; continue _fun0010;
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
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMemberCount';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0011_ip = 31; continue _fun0011 }
 25:
                var2 = var3.memberCount;
 31:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0011_ip = 43; continue _fun0011 }
 40:
                var1 = var2;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMemberIdsPreview';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var3 = var2[var1];
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0012_ip = 31; continue _fun0012 }
 25:
                var2 = var3.memberIdsPreview;
 31:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0012_ip = 43; continue _fun0012 }
 40:
                var1 = var2;
 43:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getInitialOverlayState';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ThreadMembersStore';
    var8['displayName'] = var2;
    var2 = 9;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var12 = function handleConnectionOpen(arg1) {
        var2 = {};
        _closure1_slot9 = var2;
        var2 = arg1;
        var3 = var2.guilds;
        var2 = var3.forEach;
        var1 = _closure1_slot13;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var12;
    var12 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var3 = var1.threadMembers;
        var2 = {};
        var4 = var2;
        var1 = copyDataProperties(var4, var3);
        _closure1_slot9 = var2;
        var1 = undefined;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var12;
    var12 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var2 = _closure1_slot13;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_CREATE'] = var12;
    var12 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = var1.id;
        var2 = function deleteForGuild(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.omitBy;
            var4 = _closure1_slot9;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.guildId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot9 = var2;
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_DELETE'] = var12;
    var12 = function handleChannelDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var3 = var1.id;
        var2 = function deleteForChannel(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 7;
            var4 = var4[var1];
            var1 = undefined;
            var6 = var5.bind(var1)(var4);
            var5 = var6.omitBy;
            var4 = _closure1_slot9;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.parentId;
                var1 = _closure3_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot9 = var2;
            return var1;
        };
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['CHANNEL_DELETE'] = var12;
    var2['THREAD_CREATE'] = var11;
    var2['THREAD_UPDATE'] = var11;
    var11 = function handleThreadListSync(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var2 = var3.forEach;
        var1 = _closure1_slot14;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['THREAD_LIST_SYNC'] = var11;
    var11 = function handleThreadMembersUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var3 = _closure1_slot9;
            var2 = var1.id;
            var2 = var3[var2];
            var4 = null;
            if(!(var4 != var2)) { _fun0013_ip = 63; continue _fun0013 }
 25:
            var3 = var1.memberIdsPreview;
            if(!(var4 != var3)) { _fun0013_ip = 47; continue _fun0013 }
 35:
            var3 = var1.memberIdsPreview;
            var2['memberIdsPreview'] = var3;
 47:
            var1 = var1.memberCount;
            var2['memberCount'] = var1;
            var1 = undefined;
            return var1;
 63:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_MEMBERS_UPDATE'] = var11;
    var2['SEARCH_MESSAGES_SUCCESS'] = var10;
    var2['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var10;
    var2['LOAD_THREADS_SUCCESS'] = var9;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var9;
    var9 = function handleThreadDelete(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var2 = _closure1_slot9;
        var1 = var1.id;
        var1 = delete var2[var1];
        var1 = undefined;
        return var1;
    };
    var2['THREAD_DELETE'] = var9;
    var4 = function handleLoadMessagesSuccess(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var2 = _closure1_slot11;
            var1 = arg1;
            var1 = var1.messages;
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var3 = var5.bind(var6)();
            var2 = var3.done;
            var4 = var3;
            var3 = false;
            var1 = false;
            if(var2) { _fun0014_ip = 89; continue _fun0014 }
 42:
            var8 = _closure1_slot15;
            var2 = var4.value;
            var2 = var2.thread;
            var8 = var8.bind(var6)(var2);
            if(var8) { _fun0014_ip = 68; continue _fun0014 }
 65:
            var8 = var3;
 68:
            var9 = var5.bind(var6)();
            var2 = var9.done;
            var3 = var8;
            var4 = var9;
            var1 = var3;
            if(!var2) { _fun0014_ip = 42; continue _fun0014 }
 89:
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ThreadMembersStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
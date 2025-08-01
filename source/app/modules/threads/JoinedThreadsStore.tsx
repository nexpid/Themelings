// app/modules/threads/JoinedThreadsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var8;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function deleteGuildThreads(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 8;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = _closure1_slot9;
        var5 = var5.bind(var1)(var4);
        var4 = var5.reject;
        var2 = function(arg1) {
            var1 = arg1;
            var2 = var1.guildId;
            var1 = _closure2_slot0;
            var1 = var2 === var1;
            return var1;
        };
        var5 = var4.bind(var5)(var2);
        var4 = var5.keyBy;
        var2 = 'threadId';
        var4 = var4.bind(var5)(var2);
        var2 = var4.value;
        var2 = var2.bind(var4)();
        _closure1_slot9 = var2;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function storeThreads(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.threads;
            var1 = null;
            if(!(var1 != var3)) { _fun0002_ip = 32; continue _fun0002 }
 15:
            var2 = var3.forEach;
            var1 = _closure1_slot16;
            var1 = var2.bind(var3)(var1);
 32:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function storeThread(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot7;
            var4 = var5.has;
            var3 = var1.type;
            var3 = var4.bind(var5)(var3);
            if(!var3) { _fun0003_ip = 40; continue _fun0003 }
 28:
            var5 = var1.member;
            var4 = null;
            var3 = var4 != var5;
 40:
            if(!var3) { _fun0003_ip = 190; continue _fun0003 }
 46:
            var5 = _closure1_slot9;
            var4 = var1.id;
            var3 = {};
            var6 = var1.id;
            var3['threadId'] = var6;
            var6 = var1.guild_id;
            var3['guildId'] = var6;
            var6 = var1.member;
            var6 = var6.flags;
            var3['flags'] = var6;
            var6 = var1.member;
            var6 = var6.muted;
            var3['muted'] = var6;
            var6 = var1.member;
            var6 = var6.muteConfig;
            var3['muteConfig'] = var6;
            var6 = global;
            var8 = var6.Date;
            var6 = var1.member;
            var9 = var6.joinTimestamp;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var6 = new var10[var8](var9, var8);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['joinTimestamp'] = var6;
            var5[var4] = var3;
            var3 = _closure1_slot17;
            var2 = var1.id;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
 190:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function handleMutedChange(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = _closure1_slot9;
            var5 = var2[var3];
            var6 = _closure1_slot10;
            var2 = var6.clearTimer;
            var2 = var2.bind(var6)(var3);
            var6 = var5.muted;
            var2 = true;
            if(!(var2 !== var6)) { _fun0004_ip = 98; continue _fun0004 }
 47:
            var2 = global;
            var7 = var2.Set;
            var11 = _closure1_slot11;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var2 = new var12[var7](var11, var10);
            var6 = var2 instanceof Object ? var2 : var6;
            _closure1_slot11 = var6;
            var2 = var6.delete;
            var2 = var2.bind(var6)(var3);
            _fun0004_ip = 235; continue _fun0004;
 98:
            var2 = global;
            var8 = var2.Set;
            var11 = _closure1_slot11;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var12 = var7;
            var6 = new var12[var8](var11, var10);
            var7 = var6 instanceof Object ? var6 : var7;
            _closure1_slot11 = var7;
            var6 = var7.add;
            var6 = var6.bind(var7)(var3);
            var7 = _closure1_slot10;
            var6 = var7.setTimer;
            var5 = var5.muteConfig;
            var4 = function() {
                var2 = _closure1_slot9;
                var4 = _closure2_slot0;
                var3 = var2[var4];
                var2 = false;
                var3['muted'] = var2;
                var2 = global;
                var5 = var2.Set;
                var6 = _closure1_slot11;
                var3 = var5.prototype;
                var3 = Object.create(var3, {constructor: {value: var5}});
                var7 = var3;
                var2 = new var7[var5](var6, var5);
                var3 = var2 instanceof Object ? var2 : var3;
                _closure1_slot11 = var3;
                var2 = var3.delete;
                var2 = var2.bind(var3)(var4);
                var2 = _closure1_slot12;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var4 = var6.bind(var7)(var3, var5, var4);
            if(!var4) { _fun0004_ip = 235; continue _fun0004 }
 175:
            var4 = _closure1_slot9;
            var5 = var4[var3];
            var4 = false;
            var5['muted'] = var4;
            var5 = var2.Set;
            var11 = _closure1_slot11;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var2 = new var12[var5](var11, var10);
            var2 = var2 instanceof Object ? var2 : var4;
            _closure1_slot11 = var2;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var3);
 235:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var7 = function handleThreadListSyncOrSearchFinish(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var2 = var3.guildId;
            var _closure2_slot0 = var2;
            var3 = var3.members;
            var4 = null;
            var2 = var4 != var2;
            if(!var2) { _fun0005_ip = 33; continue _fun0005 }
 29:
            var2 = var4 != var3;
 33:
            if(!var2) { _fun0005_ip = 51; continue _fun0005 }
 36:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot9;
                var4 = var1.id;
                var3 = {};
                var6 = var1.id;
                var3['threadId'] = var6;
                var6 = _closure2_slot0;
                var3['guildId'] = var6;
                var6 = var1.flags;
                var3['flags'] = var6;
                var6 = var1.muted;
                var3['muted'] = var6;
                var6 = var1.muteConfig;
                var3['muteConfig'] = var6;
                var6 = global;
                var8 = var6.Date;
                var9 = var1.joinTimestamp;
                var7 = var8.prototype;
                var7 = Object.create(var7, {constructor: {value: var8}});
                var10 = var7;
                var6 = new var10[var8](var9, var8);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['joinTimestamp'] = var6;
                var5[var4] = var3;
                var3 = _closure1_slot17;
                var2 = var1.id;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 51:
            var1 = undefined;
            return var1;
        }
    };
    var10 = function handleSearchMessagesSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var2 = arg1;
            var4 = var2.guildId;
            var _closure2_slot0 = var4;
            var3 = var2.data;
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 40; continue _fun0006 }
 25:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var1 = arg1;
                var3 = var1.members;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var1 = arg1;
                    var5 = _closure1_slot9;
                    var4 = var1.id;
                    var3 = {};
                    var6 = var1.id;
                    var3['threadId'] = var6;
                    var6 = _closure2_slot0;
                    var3['guildId'] = var6;
                    var6 = var1.flags;
                    var3['flags'] = var6;
                    var6 = var1.muted;
                    var3['muted'] = var6;
                    var6 = var1.muteConfig;
                    var3['muteConfig'] = var6;
                    var6 = global;
                    var8 = var6.Date;
                    var9 = var1.joinTimestamp;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {constructor: {value: var8}});
                    var10 = var7;
                    var6 = new var10[var8](var9, var8);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var3['joinTimestamp'] = var6;
                    var5[var4] = var3;
                    var3 = _closure1_slot17;
                    var2 = var1.id;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 40:
            var1 = undefined;
            return var1;
        }
    };
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var9);
    var1 = 0;
    var9 = var6[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot2 = var9;
    var9 = 1;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 2;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 3;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 4;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 5;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var9 = var9.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = var9;
    var9 = 6;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = {};
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var8.bind(var1)(var9);
    var11 = var9.prototype;
    var11 = Object.create(var11, {constructor: {value: var9}});
    var16 = var11;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot10 = var9;
    var2 = var2.Set;
    var9 = var2.prototype;
    var9 = Object.create(var9, {constructor: {value: var2}});
    var16 = var9;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var9;
    var _closure1_slot11 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var8.bind(var1)(var2);
    var9 = var2.Store;
    var2 = function(arg1) {
        var4 = function JoinedThreadsStoreClass() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                var1 = _closure1_slot13;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 69; continue _fun0007 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 105; continue _fun0007;
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
        var1 = 'hasJoined';
        var5['key'] = var1;
        var1 = function value(arg1) {
            var2 = _closure1_slot9;
            var1 = arg1;
            var1 = var1 in var2;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'joinTimestamp';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0008_ip = 31; continue _fun0008 }
 25:
                var1 = var2.joinTimestamp;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'flags';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0009_ip = 30; continue _fun0009 }
 25:
                var1 = var2.flags;
 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getInitialOverlayState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = _closure1_slot9;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getMuteConfig';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure1_slot9;
                var1 = arg1;
                var2 = var2[var1];
                var1 = null;
                var3 = var1 == var2;
                var1 = undefined;
                if(var3) { _fun0010_ip = 31; continue _fun0010 }
 25:
                var1 = var2.muteConfig;
 31:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getMutedThreads';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isMuted';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var2.bind(var1)(var9);
    var2 = 'JoinedThreadsStore';
    var9['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var15 = var8.bind(var1)(var2);
    var2 = {};
    var11 = function handleConnectionOpen(arg1) {
        var3 = _closure1_slot10;
        var1 = var3.reset;
        var1 = var1.bind(var3)();
        var1 = global;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot11 = var1;
        var1 = {};
        _closure1_slot9 = var1;
        var1 = arg1;
        var3 = var1.guilds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot15;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var11;
    var11 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var4 = var1.joinedThreads;
        var5 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 8;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var5 = var2.bind(var1)(var4);
        var4 = var5.map;
        var2 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var6 = var1;
            var5 = var2;
            var3 = copyDataProperties(var6, var5);
            var3 = global;
            var4 = var3.Date;
            var6 = var2.joinTimestamp;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var2 = new var7[var4](var6, var5);
            var3 = var2 instanceof Object ? var2 : var3;
            var2 = 'joinTimestamp';
            var1[var2] = var3;
            return var1;
        };
        var5 = var4.bind(var5)(var2);
        var4 = var5.keyBy;
        var2 = 'threadId';
        var4 = var4.bind(var5)(var2);
        var2 = var4.value;
        var2 = var2.bind(var4)();
        _closure1_slot9 = var2;
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var11;
    var11 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var5 = _closure1_slot14;
        var4 = var3.id;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var2 = _closure1_slot15;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_CREATE'] = var11;
    var11 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot14;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_DELETE'] = var11;
    var11 = function handleThreadCreate(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var2 = _closure1_slot16;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['THREAD_CREATE'] = var11;
    var2['THREAD_LIST_SYNC'] = var7;
    var2['SEARCH_MESSAGES_SUCCESS'] = var10;
    var2['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var10;
    var2['LOAD_THREADS_SUCCESS'] = var7;
    var2['LOAD_ARCHIVED_THREADS_SUCCESS'] = var7;
    var7 = function handleThreadDelete(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var4 = var1.id;
            var2 = _closure1_slot9;
            var2 = var4 in var2;
            if(var2) { _fun0011_ip = 31; continue _fun0011 }
 27:
            var2 = false;
            return var2;
 31:
            var2 = {};
            var5 = _closure1_slot9;
            var6 = var2;
            var4 = copyDataProperties(var6, var5);
            _closure1_slot9 = var2;
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
        }
    };
    var2['THREAD_DELETE'] = var7;
    var7 = function handleThreadMemberUpdate(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot8;
            var3 = var4.getId;
            var4 = var3.bind(var4)();
            var3 = var1.userId;
            if(!(var4 === var3)) { _fun0012_ip = 154; continue _fun0012 }
 32:
            var5 = _closure1_slot9;
            var4 = var1.id;
            var3 = {};
            var6 = var1.id;
            var3['threadId'] = var6;
            var6 = var1.guildId;
            var3['guildId'] = var6;
            var6 = var1.flags;
            var3['flags'] = var6;
            var6 = var1.muted;
            var3['muted'] = var6;
            var6 = var1.muteConfig;
            var3['muteConfig'] = var6;
            var6 = global;
            var8 = var6.Date;
            var9 = var1.joinTimestamp;
            var7 = var8.prototype;
            var7 = Object.create(var7, {constructor: {value: var8}});
            var10 = var7;
            var6 = new var10[var8](var9, var8);
            var6 = var6 instanceof Object ? var6 : var7;
            var3['joinTimestamp'] = var6;
            var5[var4] = var3;
            var3 = _closure1_slot17;
            var2 = var1.id;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 154:
            var1 = false;
            return var1;
        }
    };
    var2['THREAD_MEMBER_UPDATE'] = var7;
    var7 = function handleThreadMemberLocalUpdate(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var6 = var1.id;
            var2 = var1.userId;
            var7 = var1.guildId;
            var3 = var1.isJoining;
            var5 = _closure1_slot8;
            var1 = var5.getId;
            var1 = var1.bind(var5)();
            var1 = var1 === var2;
            if(!var1) { _fun0013_ip = 153; continue _fun0013 }
 48:
            var2 = null;
            var2 = var2 !== var7;
            if(!var2) { _fun0013_ip = 150; continue _fun0013 }
 57:
            var5 = _closure1_slot9;
            if(var3) { _fun0013_ip = 70; continue _fun0013 }
 64:
            var3 = delete var5[var6];
            _fun0013_ip = 148; continue _fun0013;
 70:
            var4 = {};
            var4['threadId'] = var6;
            var4['guildId'] = var7;
            var7 = 0;
            var4['flags'] = var7;
            var7 = true;
            var4['muted'] = var7;
            var7 = {};
            var8 = undefined;
            var7['end_time'] = var8;
            var4['muteConfig'] = var7;
            var7 = global;
            var7 = var7.Date;
            var8 = var7.prototype;
            var8 = Object.create(var8, {constructor: {value: var7}});
            var9 = var8;
            var7 = new var9[var7](var8);
            var7 = var7 instanceof Object ? var7 : var8;
            var4['joinTimestamp'] = var7;
            var5[var6] = var4;
            var3 = var4;
 148:
            var2 = undefined;
 150:
            var1 = var2;
 153:
            return var1;
        }
    };
    var2['THREAD_MEMBER_LOCAL_UPDATE'] = var7;
    var7 = function handleThreadMembersUpdate(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var2 = false;
            var _closure2_slot1 = var2;
            var7 = var3.removedMemberIds;
            var2 = null;
            var4 = var2 != var7;
            if(!var4) { _fun0014_ip = 57; continue _fun0014 }
 30:
            var6 = var7.includes;
            var8 = _closure1_slot8;
            var5 = var8.getId;
            var5 = var5.bind(var8)();
            var4 = var6.bind(var7)(var5);
 57:
            if(!var4) { _fun0014_ip = 76; continue _fun0014 }
 60:
            var6 = var3.id;
            var5 = _closure1_slot9;
            var4 = var6 in var5;
 76:
            if(!var4) { _fun0014_ip = 114; continue _fun0014 }
 79:
            var5 = {};
            var9 = _closure1_slot9;
            var10 = var5;
            var6 = copyDataProperties(var10, var9);
            _closure1_slot9 = var5;
            var4 = var3.id;
            var4 = delete var5[var4];
            var4 = true;
            _closure2_slot1 = var4;
 114:
            var4 = var3.addedMembers;
            if(!(var2 != var4)) { _fun0014_ip = 139; continue _fun0014 }
 124:
            var3 = var4.forEach;
            var2 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var7 = arg1;
                    var2 = var7.userId;
                    var4 = _closure1_slot8;
                    var1 = var4.getId;
                    var1 = var1.bind(var4)();
                    if(!(var2 === var1)) { _fun0015_ip = 178; continue _fun0015 }
 32:
                    var6 = {};
                    var10 = _closure1_slot9;
                    var11 = var6;
                    var1 = copyDataProperties(var11, var10);
                    _closure1_slot9 = var6;
                    var1 = _closure2_slot0;
                    var5 = var1.id;
                    var4 = {};
                    var8 = var1.id;
                    var4['threadId'] = var8;
                    var8 = var1.guildId;
                    var4['guildId'] = var8;
                    var8 = var7.flags;
                    var4['flags'] = var8;
                    var8 = var7.muted;
                    var4['muted'] = var8;
                    var8 = var7.muteConfig;
                    var4['muteConfig'] = var8;
                    var8 = global;
                    var9 = var8.Date;
                    var11 = var7.joinTimestamp;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {constructor: {value: var9}});
                    var12 = var8;
                    var7 = new var12[var9](var11, var10);
                    var7 = var7 instanceof Object ? var7 : var8;
                    var4['joinTimestamp'] = var7;
                    var6[var5] = var4;
                    var4 = _closure1_slot17;
                    var3 = var1.id;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var1 = true;
                    _closure2_slot1 = var1;
 178:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var3.bind(var4)(var2);
 139:
            var1 = _closure2_slot1;
            return var1;
        }
    };
    var2['THREAD_MEMBERS_UPDATE'] = var7;
    var7 = var9.prototype;
    var7 = Object.create(var7, {constructor: {value: var9}});
    var16 = var7;
    var14 = var2;
    var2 = new var16[var9](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot12 = var2;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/JoinedThreadsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
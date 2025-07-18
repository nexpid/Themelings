// app/modules/threads/ActiveThreadsStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function threadStateFromChannel(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.id;
        var1['id'] = var3;
        var2 = var2.parent_id;
        var1['parentId'] = var2;
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function deleteGuildThreads(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot10;
            var3 = var2 in var3;
            if(!var3) { _fun0002_ip = 25; continue _fun0002 }
 17:
            var1 = _closure1_slot10;
            var1 = delete var1[var2];
 25:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function storeThreads(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var4 = var1.threads;
            var3 = null;
            var3 = var3 != var4;
            if(!var3) { _fun0003_ip = 41; continue _fun0003 }
 24:
            var4 = var1.threads;
            var5 = var4.length;
            var4 = 0;
            var3 = var5 > var4;
 41:
            if(!var3) { _fun0003_ip = 98; continue _fun0003 }
 44:
            var5 = _closure1_slot10;
            var4 = var1.id;
            var3 = {};
            var5[var4] = var3;
            var5 = var1.threads;
            var4 = var5.filter;
            var3 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.type;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = _closure1_slot17;
                var1 = _closure2_slot0;
                var3 = var1.id;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 98:
            var2 = var1.hasThreadsSubscription;
            if(!var2) { _fun0003_ip = 129; continue _fun0003 }
 107:
            var3 = _closure1_slot11;
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
 129:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function storeThread(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var5 = arg2;
            var2 = _closure1_slot10;
            var6 = var2[var4];
            var3 = var5.parent_id;
            var2 = var3 in var6;
            if(var2) { _fun0004_ip = 36; continue _fun0004 }
 30:
            var2 = {};
            var6[var3] = var2;
 36:
            var2 = _closure1_slot10;
            var2 = var2[var4];
            var4 = var2[var3];
            var3 = var5.id;
            var2 = _closure1_slot14;
            var1 = undefined;
            var2 = var2.bind(var1)(var5);
            var4[var3] = var2;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var9 = function handleThreadCreateOrUpdate(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var3 = var1.channel;
            var5 = _closure1_slot7;
            var4 = var5.has;
            var2 = var3.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0005_ip = 37; continue _fun0005 }
 33:
            var2 = false;
            return var2;
 37:
            var5 = var3.threadMetadata;
            var4 = null;
            var7 = var4 == var5;
            var2 = undefined;
            var6 = undefined;
            if(var7) { _fun0005_ip = 62; continue _fun0005 }
 56:
            var6 = var5.archived;
 62:
            var5 = true;
            if(!(var5 !== var6)) { _fun0005_ip = 163; continue _fun0005 }
 68:
            var6 = _closure1_slot10;
            var5 = var3.guild_id;
            var10 = var6[var5];
            if(!(var4 == var10)) { _fun0005_ip = 87; continue _fun0005 }
 85:
            var10 = {};
 87:
            var6 = _closure1_slot10;
            var5 = var3.guild_id;
            var4 = {};
            var12 = var4;
            var11 = var10;
            var7 = copyDataProperties(var12, var11);
            var8 = var3.parent_id;
            var7 = {};
            var9 = var3.parent_id;
            var11 = var10[var9];
            var12 = var7;
            var9 = copyDataProperties(var12, var11);
            var10 = var3.id;
            var9 = _closure1_slot14;
            var9 = var9.bind(var2)(var3);
            var7[var10] = var9;
            var4[var8] = var7;
            var6[var5] = var4;
            return var2;
 163:
            var1 = _closure1_slot18;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var1 = function deleteThread(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var8 = var1.guild_id;
            var7 = var1.parent_id;
            var9 = var1.id;
            var2 = null;
            var1 = var2 != var8;
            if(!var1) { _fun0006_ip = 32; continue _fun0006 }
 28:
            var1 = var2 != var7;
 32:
            if(!var1) { _fun0006_ip = 229; continue _fun0006 }
 38:
            var2 = _closure1_slot10;
            var2 = var8 in var2;
            if(!var2) { _fun0006_ip = 226; continue _fun0006 }
 55:
            var3 = _closure1_slot10;
            var3 = var3[var8];
            var3 = var7 in var3;
            if(!var3) { _fun0006_ip = 223; continue _fun0006 }
 73:
            var4 = _closure1_slot10;
            var4 = var4[var8];
            var4 = var4[var7];
            var4 = var9 in var4;
            if(!var4) { _fun0006_ip = 220; continue _fun0006 }
 95:
            var10 = _closure1_slot10;
            var5 = {};
            var13 = var10[var8];
            var14 = var5;
            var11 = copyDataProperties(var14, var13);
            var11 = {};
            var12 = _closure1_slot10;
            var12 = var12[var8];
            var13 = var12[var7];
            var14 = var11;
            var12 = copyDataProperties(var14, var13);
            var5[var7] = var11;
            var10[var8] = var5;
            var5 = _closure1_slot10;
            var5 = var5[var8];
            var5 = var5[var7];
            var5 = delete var5[var9];
            var10 = _closure1_slot0;
            var9 = _closure1_slot1;
            var5 = 7;
            var9 = var9[var5];
            var5 = undefined;
            var10 = var10.bind(var5)(var9);
            var9 = var10.isEmpty;
            var5 = _closure1_slot10;
            var5 = var5[var8];
            var5 = var5[var7];
            var5 = var9.bind(var10)(var5);
            if(!var5) { _fun0006_ip = 218; continue _fun0006 }
 206:
            var6 = _closure1_slot10;
            var6 = var6[var8];
            var5 = delete var6[var7];
 218:
            var4 = undefined;
 220:
            var3 = var4;
 223:
            var2 = var3;
 226:
            var1 = var2;
 229:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var8);
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
    var8 = var5.bind(var1)(var8);
    var10 = var8.ALL_CHANNEL_TYPES;
    var _closure1_slot7 = var10;
    var8 = var8.THREAD_CHANNEL_TYPES;
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = {};
    var _closure1_slot10 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var15 = var8;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot11 = var2;
    var2 = {};
    var _closure1_slot12 = var2;
    var2 = 9;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ActiveThreadsStore() {
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot9;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'isActive';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var6 = arg1;
                var5 = this;
                var3 = null;
                var1 = var3 != var6;
                if(!var1) { _fun0008_ip = 41; continue _fun0008 }
 15:
                var4 = var5.getThreadsForParent;
                var2 = arg2;
                var4 = var4.bind(var5)(var6, var2);
                var2 = arg3;
                var2 = var4[var2];
                var1 = var3 != var2;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getThreadsForGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = _closure1_slot10;
                var1 = arg1;
                var1 = var3[var1];
                var3 = null;
                if(!(var3 == var1)) { _fun0009_ip = 24; continue _fun0009 }
 20:
                var1 = _closure1_slot12;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getThreadsForParent';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = this;
                var2 = var3.getThreadsForGuild;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = arg2;
                var1 = var2[var1];
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 37; continue _fun0010 }
 30:
                var1 = _closure1_slot12;
 37:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasThreadsForChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var6 = this;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.isEmpty;
            var5 = var6.getThreadsForParent;
            var4 = arg1;
            var1 = arg2;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'forEachGuild';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 8;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.keys;
            var3 = _closure1_slot10;
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var4 = arg1;
                var3 = _closure3_slot0;
                var1 = _closure1_slot10;
                var2 = var1[var4];
                var1 = undefined;
                var2 = var3.bind(var1)(var4, var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'hasLoaded';
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
    var8 = var2.bind(var1)(var8);
    var2 = 'ActiveThreadsStore';
    var8['displayName'] = var2;
    var2 = 10;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleConnectionOpen(arg1) {
        var2 = {};
        _closure1_slot10 = var2;
        var2 = _closure1_slot11;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = arg1;
        var3 = var1.guilds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var3 = _closure1_slot16;
            var1 = undefined;
            var2 = arg1;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['CONNECTION_OPEN'] = var10;
    var10 = function handleOverlayInitialize(arg1) {
        var1 = arg1;
        var4 = var1.channels;
        var3 = {};
        _closure1_slot10 = var3;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 7;
        var3 = var3[var1];
        var1 = undefined;
        var3 = var5.bind(var1)(var3);
        var5 = var3.bind(var1)(var4);
        var4 = var5.filter;
        var3 = function(arg1) {
            var3 = _closure1_slot8;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.type;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var4.bind(var5)(var3);
        var4 = var5.groupBy;
        var3 = 'guild_id';
        var4 = var4.bind(var5)(var3);
        var3 = var4.forEach;
        var2 = function(arg1, arg2) {
            var3 = arg1;
            var5 = arg2;
            var _closure3_slot0 = var5;
            var4 = _closure1_slot10;
            var2 = {};
            var4[var5] = var2;
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = _closure1_slot17;
                var3 = _closure3_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['OVERLAY_INITIALIZE'] = var10;
    var10 = function handleGuildCreate(arg1) {
        var1 = arg1;
        var3 = var1.guild;
        var5 = _closure1_slot15;
        var4 = var3.id;
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var2 = _closure1_slot16;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['GUILD_CREATE'] = var10;
    var10 = function handleGuildDelete(arg1) {
        var1 = arg1;
        var1 = var1.guild;
        var3 = _closure1_slot15;
        var2 = var1.id;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['GUILD_DELETE'] = var10;
    var2['THREAD_CREATE'] = var9;
    var2['THREAD_UPDATE'] = var9;
    var9 = function handleThreadListSync(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
            var2 = arg1;
            var9 = var2.guildId;
            var _closure2_slot0 = var9;
            var3 = var2.threads;
            var4 = var2.channelIds;
            var2 = null;
            if(!(var2 == var4)) { _fun0011_ip = 49; continue _fun0011 }
 32:
            var4 = _closure1_slot11;
            var2 = var4.add;
            var2 = var2.bind(var4)(var9);
 49:
            var10 = _closure1_slot10;
            var2 = {};
            var14 = var10[var9];
            var15 = var2;
            var11 = copyDataProperties(var15, var14);
            var10[var9] = var2;
            var2 = _closure1_slot10;
            var7 = var2[var9];
            for(var2 in var7)
 89:
            {
 98:
                var12 = var2;
                var10 = _closure1_slot10;
                var11 = var10[var9];
                var10 = {};
                var13 = _closure1_slot10;
                var13 = var13[var9];
                var14 = var13[var12];
                var15 = var10;
                var13 = copyDataProperties(var15, var14);
                var11[var12] = var10;
                _fun0011_ip = 89; continue _fun0011;
            }
 136:
            var2 = var3.forEach;
            var1 = function(arg1) {
                var4 = _closure1_slot17;
                var3 = _closure2_slot0;
                var1 = undefined;
                var2 = arg1;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var2['THREAD_LIST_SYNC'] = var9;
    var9 = function handleThreadDelete(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var2 = _closure1_slot18;
        var1 = undefined;
        var1 = var2.bind(var1)(var3);
        return var1;
    };
    var2['THREAD_DELETE'] = var9;
    var4 = function handleChannelDelete(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var1 = var1.channel;
            var3 = var1.guild_id;
            var2 = null;
            if(!(var2 != var3)) { _fun0012_ip = 99; continue _fun0012 }
 19:
            var4 = var1.guild_id;
            var3 = _closure1_slot10;
            var3 = var4 in var3;
            if(!var3) { _fun0012_ip = 99; continue _fun0012 }
 38:
            var5 = _closure1_slot10;
            var4 = var1.guild_id;
            var3 = {};
            var7 = _closure1_slot10;
            var6 = var1.guild_id;
            var8 = var7[var6];
            var9 = var3;
            var6 = copyDataProperties(var9, var8);
            var5[var4] = var3;
            var3 = _closure1_slot10;
            var2 = var1.guild_id;
            var2 = var3[var2];
            var1 = var1.id;
            var1 = delete var2[var1];
            var1 = undefined;
            return var1;
 99:
            var1 = false;
            return var1;
        }
    };
    var2['CHANNEL_DELETE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/ActiveThreadsStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
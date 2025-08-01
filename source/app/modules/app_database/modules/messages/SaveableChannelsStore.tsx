// app/modules/app_database/modules/messages/SaveableChannelsStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
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
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
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
                    _fun0002_ip = 67; continue _fun0002;
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
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function handleSelectedChannelStoreChanged() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = _closure1_slot9;
            var2 = var3.getChannelId;
            var3 = var2.bind(var3)();
            var2 = null;
            if(!(var2 != var3)) { _fun0005_ip = 38; continue _fun0005 }
 23:
            var2 = _closure1_slot15;
            var1 = var2.recordChannel;
            var1 = var1.bind(var2)(var3);
 38:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function handleConnectionOpenSupplemental() {
        var3 = _closure1_slot15;
        var1 = var3.dropUnreachableChannels;
        var1 = var1.bind(var3)();
        var4 = _closure1_slot15;
        var3 = var4.replaceLru;
        var6 = _closure1_slot0;
        var5 = _closure1_slot1;
        var1 = 15;
        var5 = var5[var1];
        var1 = undefined;
        var7 = var6.bind(var1)(var5);
        var6 = var7.withFallbacks;
        var5 = _closure1_slot12;
        var2 = 1250;
        var2 = var6.bind(var7)(var5, var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var1 = function handleChannelUpdate(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var6 = arg1;
            var4 = var6.id;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 13;
            var3 = var3[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.isReadableChannel;
            var3 = var3.bind(var5)(var6);
            var6 = _closure1_slot9;
            var5 = var6.getChannelId;
            var6 = var5.bind(var6)();
            var5 = var3;
            if(!var5) { _fun0006_ip = 68; continue _fun0006 }
 64:
            var5 = var4 === var6;
 68:
            if(!var5) { _fun0006_ip = 86; continue _fun0006 }
 71:
            var6 = _closure1_slot15;
            var5 = var6.recordChannel;
            var5 = var5.bind(var6)(var4);
 86:
            if(var3) { _fun0006_ip = 104; continue _fun0006 }
 89:
            var3 = _closure1_slot15;
            var2 = var3.deleteChannel;
            var2 = var2.bind(var3)(var4);
 104:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function handleChannelUpdates(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var3 = _closure1_slot16;
            var1 = arg1;
            var2 = var1.channels;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0007_ip = 64; continue _fun0007 }
 35:
            var6 = _closure1_slot21;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0007_ip = 35; continue _fun0007 }
 64:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function handleChannelDelete(arg1) {
        var3 = _closure1_slot15;
        var2 = var3.deleteChannel;
        var1 = arg1;
        var1 = var1.channel;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function handleThreadUpdate(arg1) {
        var3 = _closure1_slot21;
        var1 = arg1;
        var2 = var1.channel;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function handleThreadDelete(arg1) {
        var3 = _closure1_slot15;
        var2 = var3.deleteChannel;
        var1 = arg1;
        var1 = var1.channel;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function handleGuildDelete(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var2 = arg1;
            var1 = var2.guild;
            var1 = var1.unavailable;
            var1 = !var1;
            if(!var1) { _fun0008_ip = 50; continue _fun0008 }
 20:
            var4 = _closure1_slot15;
            var3 = var4.deleteGuild;
            var2 = var2.guild;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            var1 = true;
 50:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function handleLoginSuccess() {
        var3 = _closure1_slot12;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var3 = _closure1_slot13;
        var1 = var3.clear;
        var1 = var1.bind(var3)();
        var1 = false;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function handleCacheLoadedLazyNoCache() {
        var1 = true;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var2 = global;
    var10 = var2.Object;
    var5 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var9[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var5 = var9[var4];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 7;
    var5 = var9[var5];
    var10 = var6.bind(var1)(var5);
    var5 = 8;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var5 = 9;
    var5 = var9[var5];
    var5 = var6.bind(var1)(var5);
    var _closure1_slot10 = var5;
    var6 = var2.Math;
    var2 = var6.max;
    var5 = 25;
    var2 = var2.bind(var6)(var5, var5, var4);
    var6 = null;
    var _closure1_slot11 = var6;
    var6 = 10;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var13 = var6.ExtendedMemoryLru;
    var6 = var13.prototype;
    var11 = Object.create(var6, {constructor: {value: var13}});
    var16 = 750;
    var15 = 500;
    var17 = var11;
    var6 = new var17[var13](var16, var15, var14);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot12 = var6;
    var6 = 11;
    var6 = var9[var6];
    var6 = var8.bind(var1)(var6);
    var12 = var6.Lru;
    var6 = var12.prototype;
    var11 = Object.create(var6, {constructor: {value: var12}});
    var16 = 15;
    var17 = var11;
    var6 = new var17[var12](var16, var15);
    var6 = var6 instanceof Object ? var6 : var11;
    var _closure1_slot13 = var6;
    var6 = false;
    var _closure1_slot14 = var6;
    var6 = function(arg1) {
        var5 = function SaveableChannelsStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = this;
                var1 = _closure1_slot2;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = {};
                var7 = _closure1_slot28;
                var1['CACHE_LOADED_LAZY_NO_CACHE'] = var7;
                var7 = function CACHE_LOADED_LAZY() {
                    var2 = _closure3_slot0;
                    var1 = var2.loadCache;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1['CACHE_LOADED_LAZY'] = var7;
                var7 = _closure1_slot23;
                var1['CHANNEL_DELETE'] = var7;
                var7 = _closure1_slot22;
                var1['CHANNEL_UPDATES'] = var7;
                var7 = _closure1_slot20;
                var1['CONNECTION_OPEN_SUPPLEMENTAL'] = var7;
                var7 = _closure1_slot26;
                var1['GUILD_DELETE'] = var7;
                var7 = _closure1_slot27;
                var1['LOGIN_SUCCESS'] = var7;
                var7 = _closure1_slot25;
                var1['THREAD_DELETE'] = var7;
                var7 = _closure1_slot24;
                var1['THREAD_UPDATE'] = var7;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = _closure1_slot5;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot4;
                var1 = _closure1_slot18;
                var1 = var1.bind(var4)();
                if(var1) { _fun0009_ip = 156; continue _fun0009 }
 143:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0009_ip = 190; continue _fun0009;
 156:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 190:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot6;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'initialize';
        var1['key'] = var2;
        var2 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot7;
            var2 = var3.bind(var4)(var2);
            var3 = var4.waitFor;
            var2 = _closure1_slot9;
            var2 = var3.bind(var4)(var2);
            var3 = var4.waitFor;
            var2 = _closure1_slot8;
            var2 = var3.bind(var4)(var2);
            var5 = var4.syncWith;
            var2 = _closure1_slot10;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = true;
                return var1;
            };
            var2 = var5.bind(var4)(var3, var2);
            var3 = var4.syncWith;
            var5 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = _closure1_slot19;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'loadCache';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = this;
                var3 = var4.readSnapshot;
                var2 = _closure2_slot0;
                var2 = var2.LATEST_SNAPSHOT_VERSION;
                var3 = var3.bind(var4)(var2);
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 59; continue _fun0010 }
 33:
                var2 = true;
                _closure1_slot14 = var2;
                var2 = _closure2_slot0;
                var1 = var2.mergeSnapshot;
                var1 = var1.bind(var2)(var3);
 59:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'canEvictOrphans';
        var1['key'] = var6;
        var6 = function value() {
            var1 = _closure1_slot14;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'saveLimit';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = arg1;
                var3 = _closure1_slot7;
                var1 = var3.getBasicChannel;
                var3 = var1.bind(var3)(var5);
                var1 = null;
                if(!(var1 != var3)) { _fun0011_ip = 63; continue _fun0011 }
 27:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 12;
                var6 = var6[var4];
                var4 = undefined;
                var6 = var7.bind(var4)(var6);
                var4 = var6.isPrivateChannel;
                var4 = var4.bind(var6)(var3);
                if(var4) { _fun0011_ip = 96; continue _fun0011 }
 63:
                var4 = var1 != var3;
                var3 = 1;
                var1 = var3;
                if(!var4) { _fun0011_ip = 99; continue _fun0011 }
 76:
                var4 = _closure1_slot12;
                var2 = var4.has;
                var2 = var2.bind(var4)(var5);
                var1 = var3;
                if(!var2) { _fun0011_ip = 99; continue _fun0011 }
 96:
                var1 = 25;
 99:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getSaveableChannels';
        var1['key'] = var6;
        var6 = function value() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var2 = _closure1_slot7;
                var1 = var2.getChannelIds;
                var5 = null;
                var3 = var1.bind(var2)(var5);
                var2 = var3.map;
                var1 = function(arg1) {
                    var1 = {};
                    var2 = null;
                    var1['guildId'] = var2;
                    var2 = arg1;
                    var1['channelId'] = var2;
                    return var1;
                };
                var6 = var2.bind(var3)(var1);
                var1 = _closure1_slot10;
                var1 = var1.isLowDisk;
                if(var1) { _fun0012_ip = 88; continue _fun0012 }
 50:
                var1 = new Array(0);
                var8 = 0;
                var10 = var1;
                var9 = var6;
                var8 = arraySpread(var10, var9, var8);
                var7 = _closure1_slot12;
                var2 = var7.values;
                var9 = var2.bind(var7)();
                var10 = var1;
                var2 = arraySpread(var10, var9, var8);
                _fun0012_ip = 137; continue _fun0012;
 88:
                var3 = _closure1_slot11;
                var2 = var6;
                if(!(var5 != var3)) { _fun0012_ip = 134; continue _fun0012 }
 99:
                var3 = new Array(1);
                var8 = 0;
                var10 = var3;
                var9 = var6;
                var5 = arraySpread(var10, var9, var8);
                var4 = _closure1_slot11;
                var3[var5] = var4;
                var4 = 1;
                var4 = var5 + var4;
                var2 = var3;
 134:
                var1 = var2;
 137:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'takeSnapshot';
        var1['key'] = var6;
        var6 = function value() {
            var1 = {};
            var2 = _closure2_slot0;
            var2 = var2.LATEST_SNAPSHOT_VERSION;
            var1['version'] = var2;
            var2 = {};
            var5 = _closure1_slot12;
            var4 = var5.allValues;
            var9 = var4.bind(var5)();
            var7 = new Array(0);
            var10 = var7;
            var8 = 0;
            var4 = arraySpread(var10, var9, var8);
            var5 = var7.filter;
            var4 = function(arg1) {
                var1 = arg1;
                var1 = var1.fallback;
                var1 = !var1;
                return var1;
            };
            var4 = var5.bind(var7)(var4);
            var2['channels'] = var4;
            var5 = _closure1_slot13;
            var4 = var5.keys;
            var9 = var4.bind(var5)();
            var4 = new Array(0);
            var10 = var4;
            var5 = arraySpread(var10, var9, var8);
            var2['penalized'] = var4;
            var3 = _closure1_slot11;
            var2['lastChannel'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var6 = {};
        var1 = 'mergeSnapshot';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var2 = arg1;
                var4 = _closure1_slot12;
                var7 = _closure1_slot13;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var1 = 10;
                var3 = var8[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var11 = var3.ExtendedMemoryLru;
                var3 = _closure1_slot12;
                var17 = var3.primaryCapacity;
                var3 = _closure1_slot12;
                var16 = var3.extendedCapacity;
                var9 = var11.prototype;
                var9 = Object.create(var9, {constructor: {value: var11}});
                var18 = var9;
                var3 = new var18[var11](var17, var16, var15);
                var3 = var3 instanceof Object ? var3 : var9;
                _closure1_slot12 = var3;
                var3 = 11;
                var3 = var8[var3];
                var3 = var5.bind(var1)(var3);
                var8 = var3.Lru;
                var3 = _closure1_slot13;
                var17 = var3.capacity;
                var5 = var8.prototype;
                var5 = Object.create(var5, {constructor: {value: var8}});
                var18 = var5;
                var3 = new var18[var8](var17, var16);
                var3 = var3 instanceof Object ? var3 : var5;
                _closure1_slot13 = var3;
                var3 = _closure1_slot11;
                var5 = null;
                if(!(var5 == var3)) { _fun0013_ip = 156; continue _fun0013 }
 148:
                var3 = var2.lastChannel;
                _fun0013_ip = 160; continue _fun0013;
 156:
                var3 = _closure1_slot11;
 160:
                _closure1_slot11 = var3;
                var3 = var2.channels;
                var10 = new Array(2);
                var10[0] = var3;
                var3 = var4.values;
                var3 = var3.bind(var4)();
                var10[1] = var3;
                var3 = var10.length;
                var4 = 0;
                var3 = var4 < var3;
                var9 = 0;
                var8 = undefined;
                if(!var3) { _fun0013_ip = 299; continue _fun0013 }
 209:
                var11 = _closure1_slot16;
                var3 = var10[var9];
                var12 = var11.bind(var1)(var3);
                var11 = var12.bind(var1)();
                var3 = var11.done;
                if(var3) { _fun0013_ip = 287; continue _fun0013 }
 234:
                var13 = var11.value;
                var3 = var13.fallback;
                if(var3) { _fun0013_ip = 269; continue _fun0013 }
 248:
                var15 = _closure1_slot12;
                var14 = var15.put;
                var3 = var13.channelId;
                var3 = var14.bind(var15)(var3, var13);
 269:
                var14 = var12.bind(var1)();
                var3 = var14.done;
                var11 = var14;
                var8 = var13;
                if(!var3) { _fun0013_ip = 234; continue _fun0013 }
 287:
                var9 = var9 + 1;
                var3 = var10.length;
                if(var9 < var3) { _fun0013_ip = 209; continue _fun0013 }
 299:
                var2 = var2.penalized;
                var3 = new Array(2);
                var3[0] = var2;
                var2 = var7.keys;
                var2 = var2.bind(var7)();
                var3[1] = var2;
                var2 = var3.length;
                var2 = var4 < var2;
                var4 = 0;
                if(!var2) { _fun0013_ip = 413; continue _fun0013 }
 340:
                var7 = _closure1_slot16;
                var2 = var3[var4];
                var8 = var7.bind(var1)(var2);
                var7 = var8.bind(var1)();
                var2 = var7.done;
                if(var2) { _fun0013_ip = 401; continue _fun0013 }
 365:
                var10 = var7.value;
                var9 = _closure1_slot13;
                var2 = var9.put;
                var2 = var2.bind(var9)(var10, var5);
                var9 = var8.bind(var1)();
                var2 = var9.done;
                var7 = var9;
                if(!var2) { _fun0013_ip = 365; continue _fun0013 }
 401:
                var4 = var4 + 1;
                var2 = var3.length;
                if(var4 < var2) { _fun0013_ip = 340; continue _fun0013 }
 413:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(7);
        var1[0] = var6;
        var6 = {};
        var8 = 'recordChannel';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var3 = arg1;
                var4 = _closure1_slot7;
                var2 = var4.getBasicChannel;
                var6 = var2.bind(var4)(var3);
                var4 = null;
                if(!(var4 != var6)) { _fun0014_ip = 194; continue _fun0014 }
 30:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 13;
                var2 = var7[var2];
                var7 = undefined;
                var5 = var5.bind(var7)(var2);
                var2 = var5.isReadableChannel;
                var2 = var2.bind(var5)(var6);
                if(!var2) { _fun0014_ip = 194; continue _fun0014 }
 69:
                var8 = {};
                var5 = var6.guild_id;
                var9 = var4 != var5;
                var2 = null;
                if(!var9) { _fun0014_ip = 88; continue _fun0014 }
 85:
                var2 = var5;
 88:
                var8['guildId'] = var2;
                var8['channelId'] = var3;
                var2 = var6.type;
                var8['channelType'] = var2;
                _closure1_slot11 = var8;
                var5 = _closure1_slot12;
                var2 = var5.put;
                var2 = var2.bind(var5)(var3, var8);
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 14;
                var2 = var8[var2];
                var5 = var5.bind(var7)(var2);
                var2 = var5.isLimitedChannel;
                var2 = var2.bind(var5)(var6);
                if(!var2) { _fun0014_ip = 194; continue _fun0014 }
 160:
                var5 = _closure1_slot13;
                var2 = var5.put;
                var2 = var2.bind(var5)(var3, var4);
                if(!(var4 != var2)) { _fun0014_ip = 194; continue _fun0014 }
 180:
                var2 = _closure1_slot12;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
 194:
                var1 = undefined;
                return var1;
            }
        };
        var6['value'] = var8;
        var1[1] = var6;
        var6 = {};
        var8 = 'deleteChannel';
        var6['key'] = var8;
        var8 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var6['value'] = var8;
        var1[2] = var6;
        var6 = {};
        var8 = 'deleteGuild';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var6 = arg1;
                var3 = _closure1_slot16;
                var2 = _closure1_slot12;
                var1 = var2.allValues;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0015_ip = 91; continue _fun0015 }
 43:
                var2 = var3.value;
                var7 = var2.guildId;
                if(!(var7 === var6)) { _fun0015_ip = 76; continue _fun0015 }
 57:
                var8 = _closure1_slot12;
                var7 = var8.delete;
                var2 = var2.channelId;
                var2 = var7.bind(var8)(var2);
 76:
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0015_ip = 43; continue _fun0015 }
 91:
                return var1;
            }
        };
        var6['value'] = var8;
        var1[3] = var6;
        var6 = {};
        var8 = 'dropUnreachableChannels';
        var6['key'] = var8;
        var8 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = _closure1_slot16;
                var2 = _closure1_slot12;
                var1 = var2.keys;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var3 = var6.bind(var1)();
                var2 = var3.done;
                var4 = 13;
                if(var2) { _fun0016_ip = 126; continue _fun0016 }
 45:
                var9 = var3.value;
                var8 = _closure1_slot7;
                var2 = var8.getBasicChannel;
                var10 = var2.bind(var8)(var9);
                var8 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var8 = var8.bind(var1)(var2);
                var2 = var8.isReadableChannel;
                var2 = var2.bind(var8)(var10);
                if(var2) { _fun0016_ip = 111; continue _fun0016 }
 96:
                var8 = _closure2_slot0;
                var2 = var8.deleteChannel;
                var2 = var2.bind(var8)(var9);
 111:
                var8 = var6.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0016_ip = 45; continue _fun0016 }
 126:
                return var1;
            }
        };
        var6['value'] = var8;
        var1[4] = var6;
        var6 = {};
        var8 = 'deleteUnreadableGuildChannels';
        var6['key'] = var8;
        var8 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var8 = arg1;
                var3 = _closure1_slot16;
                var2 = _closure1_slot12;
                var1 = var2.values;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var3 = var6.bind(var1)();
                var2 = var3.done;
                var4 = 13;
                if(var2) { _fun0017_ip = 136; continue _fun0017 }
 48:
                var2 = var3.value;
                var9 = var2.guildId;
                var9 = var8 !== var9;
                if(var9) { _fun0017_ip = 98; continue _fun0017 }
 65:
                var11 = _closure1_slot0;
                var10 = _closure1_slot1;
                var10 = var10[var4];
                var12 = var11.bind(var1)(var10);
                var11 = var12.isReadableChannelId;
                var10 = var2.channelId;
                var9 = var11.bind(var12)(var10);
 98:
                if(var9) { _fun0017_ip = 121; continue _fun0017 }
 101:
                var10 = _closure2_slot0;
                var9 = var10.deleteChannel;
                var2 = var2.channelId;
                var2 = var9.bind(var10)(var2);
 121:
                var9 = var6.bind(var1)();
                var2 = var9.done;
                var3 = var9;
                if(!var2) { _fun0017_ip = 48; continue _fun0017 }
 136:
                return var1;
            }
        };
        var6['value'] = var8;
        var1[5] = var6;
        var6 = {};
        var8 = 'replaceLru';
        var6['key'] = var8;
        var7 = function value(arg1) {
            var1 = arg1;
            _closure1_slot12 = var1;
            var1 = undefined;
            return var1;
        };
        var6['value'] = var7;
        var1[6] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var6 = var6.bind(var1)(var10);
    var _closure1_slot15 = var6;
    var7 = 'SaveableChannelsStore';
    var6['displayName'] = var7;
    var6['LATEST_SNAPSHOT_VERSION'] = var4;
    var7 = var6.prototype;
    var7 = Object.create(var7, {constructor: {value: var6}});
    var17 = var7;
    var6 = new var17[var6](var16);
    var6 = var6 instanceof Object ? var6 : var7;
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/app_database/modules/messages/SaveableChannelsStore.tsx';
    var7 = var8.bind(var9)(var7);
    var3['default'] = var6;
    var3['MAXIMUM_MESSAGES_PER_CHANNEL_DM'] = var5;
    var3['MAXIMUM_MESSAGES_PER_CHANNEL_NON_DM'] = var5;
    var3['MAXIMUM_MESSAGES_PER_CHANNEL_DEFAULT'] = var4;
    var3['MAXIMUM_MESSAGES_PER_CHANNEL_EVER'] = var2;
    return var1;
})();
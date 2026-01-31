// app/modules/replies/ReferencedMessageStore.tsx
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
            var9 = _closure1_slot20;
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
            var7 = _closure1_slot20;
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
    var _closure1_slot19 = var1;
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
    var _closure1_slot20 = var1;
    var1 = function processMessage(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot17;
            var1 = var2.updateExistingMessageIfCached;
            var2 = var1.bind(var2)(var3);
            var1 = false;
            if(!var2) { _fun0005_ip = 7; continue _fun0005 }
case 38:
            var1 = true;
case 7:
            var6 = _closure1_slot12;
            var5 = var6.has;
            var2 = var3.type;
            var5 = var5.bind(var6)(var2);
            var2 = var1;
            if(!var5) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var6 = var3.message_reference;
            var5 = null;
            if(!(var5 != var6)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var10 = var6.message_id;
            if(!(var5 != var10)) { _fun0005_ip = 43; continue _fun0005 }
case 13:
            var7 = 'referenced_message';
            var7 = var7 in var3;
            if(var7) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var9 = _closure1_slot10;
            var8 = var9.getMessage;
            var7 = var6.channel_id;
            var11 = var8.bind(var9)(var7, var10);
            if(!(var5 == var11)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var12 = _closure1_slot17;
            var9 = var12.set;
            var8 = var6.channel_id;
            var7 = _closure1_slot14;
            var7 = var9.bind(var12)(var8, var10, var7);
            var2 = true;
            _fun0005_ip = 39; continue _fun0005;
case 46:
            var9 = _closure1_slot17;
            var8 = var9.set;
            var7 = var6.channel_id;
            var6 = {};
            var12 = _closure1_slot13;
            var12 = var12.LOADED;
            var6['state'] = var12;
            var6['message'] = var11;
            var6 = var8.bind(var9)(var7, var10, var6);
            var2 = true;
            _fun0005_ip = 39; continue _fun0005;
case 44:
            var6 = var3.referenced_message;
            if(!(var5 == var6)) { _fun0005_ip = 48; continue _fun0005 }
case 49:
            var9 = _closure1_slot17;
            var8 = var9.set;
            var7 = var3.channel_id;
            var5 = {};
            var11 = _closure1_slot13;
            var11 = var11.DELETED;
            var5['state'] = var11;
            var5 = var8.bind(var9)(var7, var10, var5);
            var2 = true;
            _fun0005_ip = 39; continue _fun0005;
case 48:
            var11 = _closure1_slot17;
            var10 = var11.set;
            var9 = var6.channel_id;
            var8 = var6.id;
            var7 = {};
            var5 = _closure1_slot13;
            var5 = var5.LOADED;
            var7['state'] = var5;
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 10;
            var12 = var12[var5];
            var5 = undefined;
            var13 = var13.bind(var5)(var12);
            var12 = var13.createMessageRecord;
            var12 = var12.bind(var13)(var6);
            var7['message'] = var12;
            var7 = var10.bind(var11)(var9, var8, var7);
            var8 = var3.type;
            var3 = _closure1_slot11;
            var7 = var3.THREAD_STARTER_MESSAGE;
            var2 = true;
            if(!(var8 === var7)) { _fun0005_ip = 39; continue _fun0005 }
case 50:
            var4 = _closure1_slot21;
            var4 = var4.bind(var5)(var6);
            var2 = true;
case 39:
            return var2;
case 43:
            return var1;
case 41:
            return var1;
        }
    };
    var _closure1_slot21 = var1;
    var1 = function anyChanged(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arg2;
            var2 = _closure1_slot19;
            var7 = undefined;
            var1 = arg1;
            var6 = var2.bind(var7)(var1);
            var1 = var6.bind(var7)();
            var2 = var1.done;
            var5 = false;
            var4 = var1;
            var3 = false;
            var1 = false;
            if(var2) { _fun0006_ip = 51; continue _fun0006 }
case 52:
            var2 = var4.value;
            var2 = var8.bind(var7)(var2);
            var9 = var5 !== var2;
            if(var9) { _fun0006_ip = 11; continue _fun0006 }
case 40:
            var9 = var3;
case 11:
            var10 = var6.bind(var7)();
            var2 = var10.done;
            var3 = var9;
            var4 = var10;
            var1 = var3;
            if(!var2) { _fun0006_ip = 52; continue _fun0006 }
case 51:
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var14 = function handleLoadMessages(arg1) {
        var1 = arg1;
        var4 = var1.messages;
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = function(arg1) {
            var3 = _closure1_slot21;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var13 = function handleSearchMessagesSuccess(arg1) {
        var1 = arg1;
        var4 = var1.data;
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var4 = var1.messages;
            var3 = _closure1_slot22;
            var2 = undefined;
            var1 = function(arg1) {
                var4 = _closure1_slot22;
                var3 = undefined;
                var2 = arg1;
                var1 = function(arg1) {
                    var3 = _closure1_slot21;
                    var2 = undefined;
                    var1 = arg1;
                    var1 = var3.bind(var2)(var1);
                    return var1;
                };
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var2)(var4, var1);
            return var1;
        };
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var11 = function handleChannelDelete(arg1) {
        var3 = _closure1_slot17;
        var2 = var3.deleteChannelCache;
        var1 = arg1;
        var1 = var1.channel;
        var1 = var1.id;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1 = function unsetDeletedMessage(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var2 = _closure1_slot17;
            var1 = var2.has;
            var1 = var1.bind(var2)(var5, var4);
            if(var1) { _fun0007_ip = 53; continue _fun0007 }
case 54:
            var1 = false;
            return var1;
case 53:
            var3 = _closure1_slot17;
            var2 = var3.set;
            var1 = {};
            var6 = _closure1_slot13;
            var6 = var6.DELETED;
            var1['state'] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var5 = function resetState() {
        var2 = _closure1_slot17;
        var1 = var2.clear;
        var1 = var1.bind(var2)();
        var1 = undefined;
        return var1;
    };
    var12 = function handleLoadThreadsSuccess(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var5 = var1.firstMessages;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0008_ip = 55; continue _fun0008 }
case 56:
            var4 = _closure1_slot22;
            var3 = undefined;
            var2 = function(arg1) {
                var3 = _closure1_slot21;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var4.bind(var3)(var5, var2);
case 55:
            return var1;
        }
    };
    var4 = global;
    var15 = var4.Object;
    var9 = var15.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var15)(var3, var1, var2);
    var17 = 0;
    var2 = var7[var17];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var16 = 1;
    var2 = var7[var16];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var15 = 2;
    var2 = var7[var15];
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
    var2 = var8.bind(var1)(var2);
    var _closure1_slot10 = var2;
    var2 = 8;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.MessageTypes;
    var _closure1_slot11 = var9;
    var2 = var2.MessageTypesWithLazyLoadedReferences;
    var _closure1_slot12 = var2;
    var2 = {};
    var2['LOADED'] = var17;
    var9 = 'LOADED';
    var2[var17] = var9;
    var2['NOT_LOADED'] = var16;
    var9 = 'NOT_LOADED';
    var2[var16] = var9;
    var2['DELETED'] = var15;
    var9 = 'DELETED';
    var2[var15] = var9;
    var _closure1_slot13 = var2;
    var16 = var4.Object;
    var15 = var16.freeze;
    var9 = {};
    var17 = var2.NOT_LOADED;
    var9['state'] = var17;
    var9 = var15.bind(var16)(var9);
    var _closure1_slot14 = var9;
    var4 = var4.Set;
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var21 = var9;
    var4 = new var21[var4](var20);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot15 = var4;
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = function ChannelReferencedMessageCache() {
            var3 = this;
            var _closure3_slot0 = var3;
            var6 = _closure1_slot7;
            var5 = _closure2_slot0;
            var1 = undefined;
            var5 = var6.bind(var1)(var3, var5);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var5 = var5.bind(var1)(var2);
            var2 = {};
            var6 = 100;
            var2['max'] = var6;
            var4 = function dispose(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleCacheDisposed;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['dispose'] = var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var8 = var2;
            var2 = new var9[var5](var8, var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_cachedMessages'] = var2;
            var2 = global;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_cachedMessageIds'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'handleCacheDisposed';
        var1['key'] = var2;
        var2 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1._cachedMessageIds;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(!var2) { _fun0009_ip = 57; continue _fun0009 }
case 58:
                var2 = global;
                var5 = var2.Set;
                var6 = var1._cachedMessageIds;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var7 = var4;
                var2 = new var7[var5](var6, var5);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['_cachedMessageIds'] = var2;
                var2 = var1._cachedMessageIds;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 57:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(5);
        var2[0] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var5 = var1._cachedMessages;
                var4 = var5.set;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
                var4 = var1._cachedMessageIds;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                var2 = global;
                var5 = var2.Set;
                var7 = var1._cachedMessageIds;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var8 = var4;
                var2 = new var8[var5](var7, var6);
                var2 = var2 instanceof Object ? var2 : var4;
                var1['_cachedMessageIds'] = var2;
                var2 = var1._cachedMessageIds;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
case 59:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'has';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._cachedMessageIds;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._cachedMessages;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getCachedMessageIds';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var1 = var1._cachedMessageIds;
            return var1;
        };
        var1['value'] = var5;
        var2[4] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot16 = var4;
    var4 = function() {
        var4 = _closure1_slot8;
        var3 = function ReferencedMessageCache() {
            var3 = this;
            var4 = _closure1_slot7;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var7 = var4;
            var2 = new var7[var2](var6);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['_channelCaches'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'has';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = this;
                var3 = var1._channelCaches;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0011_ip = 6; continue _fun0011 }
case 37:
                var4 = var5.has;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 6:
                var1 = var1 != var2;
                if(!var1) { _fun0011_ip = 32; continue _fun0011 }
case 61:
                var1 = var2;
case 32:
                return var1;
            }
        };
        var1['value'] = var2;
        var2 = new Array(8);
        var2[0] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = this;
                var3 = var1._channelCaches;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var4;
                var1 = undefined;
                if(var2) { _fun0012_ip = 6; continue _fun0012 }
case 37:
                var3 = var4.get;
                var2 = arg2;
                var1 = var3.bind(var4)(var2);
case 6:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'set';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = arg1;
                var2 = this;
                var3 = var2._channelCaches;
                var1 = var3.get;
                var4 = var1.bind(var3)(var5);
                var1 = null;
                if(!(var1 == var4)) { _fun0013_ip = 62; continue _fun0013 }
case 38:
                var1 = _closure1_slot16;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var8 = var3;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = var2._channelCaches;
                var2 = var3.set;
                var2 = var2.bind(var3)(var5, var1);
                var4 = var1;
case 62:
                var3 = var4.set;
                var2 = arg2;
                var1 = arg3;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'updateExistingMessageIfCached';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var9 = arg1;
                var1 = this;
                var3 = var1._channelCaches;
                var2 = var3.get;
                var1 = var9.channel_id;
                var6 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var6;
                if(!var1) { _fun0014_ip = 63; continue _fun0014 }
case 64:
                var3 = var6.has;
                var2 = var9.id;
                var2 = var3.bind(var6)(var2);
                var3 = !var2;
                var2 = !var3;
                if(var3) { _fun0014_ip = 65; continue _fun0014 }
case 66:
                var5 = var6.set;
                var4 = var9.id;
                var3 = {};
                var8 = _closure1_slot13;
                var8 = var8.LOADED;
                var3['state'] = var8;
                var10 = _closure1_slot0;
                var8 = _closure1_slot2;
                var7 = 10;
                var8 = var8[var7];
                var7 = undefined;
                var8 = var10.bind(var7)(var8);
                var7 = var8.createMessageRecord;
                var7 = var7.bind(var8)(var9);
                var3['message'] = var7;
                var3 = var5.bind(var6)(var4, var3);
                var2 = true;
case 65:
                var1 = var2;
case 63:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'deleteChannelCache';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1._channelCaches;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'retainWhere';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var10 = arg1;
                var4 = this;
                var1 = new Array(0);
                var3 = _closure1_slot19;
                var2 = var4._channelCaches;
                var8 = undefined;
                var7 = var3.bind(var8)(var2);
                var5 = var7.bind(var8)();
                var2 = var5.done;
                var6 = 1;
                var3 = 0;
                if(var2) { _fun0015_ip = 67; continue _fun0015 }
case 68:
                var11 = var5.value;
                var2 = _closure1_slot6;
                var2 = var2.bind(var8)(var11, var6);
                var11 = var2[var3];
                var2 = var10.bind(var8)(var11);
                if(var2) { _fun0015_ip = 69; continue _fun0015 }
case 4:
                var2 = var1.push;
                var2 = var2.bind(var1)(var11);
case 69:
                var11 = var7.bind(var8)();
                var2 = var11.done;
                var5 = var11;
                if(!var2) { _fun0015_ip = 68; continue _fun0015 }
case 67:
                var2 = var1.length;
                var2 = var3 < var2;
                var3 = 0;
                if(!var2) { _fun0015_ip = 70; continue _fun0015 }
case 71:
                var5 = var1[var3];
                var2 = var4.deleteChannelCache;
                var2 = var2.bind(var4)(var5);
                var3 = var3 + 1;
                var2 = var1.length;
                if(var3 < var2) { _fun0015_ip = 71; continue _fun0015 }
case 70:
                var1 = var1.length;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getCachedMessageIdsForChannel';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = this;
                var3 = var1._channelCaches;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var2 = var1 == var3;
                if(var2) { _fun0016_ip = 72; continue _fun0016 }
case 53:
                var2 = var3.getCachedMessageIds;
                var1 = var2.bind(var3)();
case 72:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'clear';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1._channelCaches;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[7] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var9 = var4.prototype;
    var9 = Object.create(var9, {constructor: {value: var4}});
    var21 = var9;
    var4 = new var21[var4](var20);
    var4 = var4 instanceof Object ? var4 : var9;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function ReferencedMessageStore() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot7;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot4;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot3;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0017_ip = 73; continue _fun0017 }
case 74:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0017_ip = 75; continue _fun0017;
case 73:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot4;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 75:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot5;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot8;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.waitFor;
            var2 = _closure1_slot10;
            var1 = _closure1_slot9;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMessageByReference';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = arg1;
                var2 = null;
                var4 = var2 != var3;
                var1 = undefined;
                if(!var4) { _fun0018_ip = 72; continue _fun0018 }
case 36:
                var6 = _closure1_slot17;
                var5 = var6.get;
                var4 = var3.channel_id;
                var3 = var3.message_id;
                var1 = var5.bind(var6)(var4, var3);
case 72:
                if(!(var2 == var1)) { _fun0018_ip = 76; continue _fun0018 }
case 68:
                var1 = _closure1_slot14;
case 76:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var5 = _closure1_slot17;
                var4 = var5.get;
                var3 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var1);
                var3 = null;
                if(!(var3 == var1)) { _fun0019_ip = 77; continue _fun0019 }
case 7:
                var1 = _closure1_slot14;
case 77:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getReplyIdsForChannel';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var2 = null;
                var3 = var2 != var5;
                var1 = undefined;
                if(!var3) { _fun0020_ip = 77; continue _fun0020 }
case 36:
                var4 = _closure1_slot17;
                var3 = var4.getCachedMessageIdsForChannel;
                var1 = var3.bind(var4)(var5);
case 77:
                if(!(var2 == var1)) { _fun0020_ip = 60; continue _fun0020 }
case 78:
                var1 = _closure1_slot15;
case 60:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'ReferencedMessageStore';
    var9['displayName'] = var4;
    var4 = 13;
    var4 = var7[var4];
    var20 = var8.bind(var1)(var4);
    var4 = {};
    var15 = function handleCacheLoaded(arg1) {
        var1 = arg1;
        var3 = var1.messages;
        var4 = _closure1_slot22;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = var1.bind(var2)(var3);
        var2 = undefined;
        var1 = function(arg1) {
            var4 = _closure1_slot22;
            var1 = global;
            var3 = var1.Object;
            var2 = var3.values;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = undefined;
            var1 = function(arg1) {
                var3 = _closure1_slot21;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var4['CACHE_LOADED'] = var15;
    var4['LOCAL_MESSAGES_LOADED'] = var14;
    var4['LOAD_MESSAGES_SUCCESS'] = var14;
    var4['LOAD_MESSAGES_AROUND_SUCCESS'] = var14;
    var4['SEARCH_MESSAGES_SUCCESS'] = var13;
    var4['MOD_VIEW_SEARCH_MESSAGES_SUCCESS'] = var13;
    var4['LOAD_THREADS_SUCCESS'] = var12;
    var4['LOAD_ARCHIVED_THREADS_SUCCESS'] = var12;
    var12 = function handleMessageExplicitContentScanTimeout(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var6 = var1.messageId;
            var5 = var1.channelId;
            var3 = _closure1_slot17;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5, var6);
            if(var2) { _fun0021_ip = 78; continue _fun0021 }
case 77:
            var2 = false;
            return var2;
case 78:
            var3 = _closure1_slot17;
            var2 = var3.get;
            var7 = var2.bind(var3)(var5, var6);
            var2 = null;
            if(!(var2 != var7)) { _fun0021_ip = 46; continue _fun0021 }
case 79:
            var3 = var7.state;
            var2 = _closure1_slot13;
            var2 = var2.LOADED;
            if(!(var3 === var2)) { _fun0021_ip = 46; continue _fun0021 }
case 80:
            var4 = _closure1_slot17;
            var3 = var4.set;
            var2 = {};
            var8 = _closure1_slot13;
            var8 = var8.LOADED;
            var2['state'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 11;
            var8 = var8[var1];
            var1 = undefined;
            var9 = var9.bind(var1)(var8);
            var8 = var9.handleExplicitMediaScanTimeoutForMessage;
            var7 = var7.message;
            var7 = var8.bind(var9)(var7);
            var2['message'] = var7;
            var2 = var3.bind(var4)(var5, var6, var2);
            return var1;
case 46:
            var1 = false;
            return var1;
        }
    };
    var4['MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT'] = var12;
    var12 = function handleLoadForumPosts(arg1) {
        var1 = arg1;
        var3 = var1.threads;
        var4 = _closure1_slot22;
        var1 = global;
        var2 = var1.Object;
        var1 = var2.values;
        var3 = var1.bind(var2)(var3);
        var2 = undefined;
        var1 = function(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = arg1;
                var4 = var1.first_message;
                var1 = null;
                var1 = var1 != var4;
                if(!var1) { _fun0022_ip = 81; continue _fun0022 }
case 56:
                var3 = _closure1_slot21;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
case 81:
                return var1;
            }
        };
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var4['LOAD_FORUM_POSTS'] = var12;
    var12 = function handleMessageCreate(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var4 = var1.message;
            var5 = _closure1_slot10;
            var3 = var5.getMessages;
            var1 = var4.channel_id;
            var1 = var3.bind(var5)(var1);
            var1 = var1.ready;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0023_ip = 82; continue _fun0023 }
case 6:
            var3 = _closure1_slot21;
            var2 = undefined;
            var1 = var3.bind(var2)(var4);
case 82:
            return var1;
        }
    };
    var4['MESSAGE_CREATE'] = var12;
    var12 = function handleMessageUpdate(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var10 = var1.message;
            var6 = var10.id;
            var5 = var10.channel_id;
            var3 = _closure1_slot17;
            var2 = var3.has;
            var2 = var2.bind(var3)(var5, var6);
            if(var2) { _fun0024_ip = 72; continue _fun0024 }
case 83:
            var2 = false;
            return var2;
case 72:
            var3 = _closure1_slot17;
            var2 = var3.get;
            var7 = var2.bind(var3)(var5, var6);
            var2 = null;
            if(!(var2 != var7)) { _fun0024_ip = 84; continue _fun0024 }
case 85:
            var3 = var7.state;
            var2 = _closure1_slot13;
            var2 = var2.LOADED;
            if(!(var3 === var2)) { _fun0024_ip = 84; continue _fun0024 }
case 86:
            var4 = _closure1_slot17;
            var3 = var4.set;
            var2 = {};
            var8 = _closure1_slot13;
            var8 = var8.LOADED;
            var2['state'] = var8;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 10;
            var8 = var8[var1];
            var1 = undefined;
            var9 = var9.bind(var1)(var8);
            var8 = var9.updateMessageRecord;
            var7 = var7.message;
            var7 = var8.bind(var9)(var7, var10);
            var2['message'] = var7;
            var2 = var3.bind(var4)(var5, var6, var2);
            return var1;
case 84:
            var1 = false;
            return var1;
        }
    };
    var4['MESSAGE_UPDATE'] = var12;
    var12 = function handleMessageDelete(arg1) {
        var1 = arg1;
        var4 = var1.id;
        var3 = var1.channelId;
        var2 = _closure1_slot23;
        var1 = undefined;
        var1 = var2.bind(var1)(var3, var4);
        return var1;
    };
    var4['MESSAGE_DELETE'] = var12;
    var12 = function handleMessageDeleteBulk(arg1) {
        var2 = arg1;
        var4 = var2.ids;
        var2 = var2.channelId;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot22;
        var2 = undefined;
        var1 = function(arg1) {
            var4 = _closure1_slot23;
            var3 = _closure2_slot0;
            var2 = undefined;
            var1 = arg1;
            var1 = var4.bind(var2)(var3, var1);
            return var1;
        };
        var1 = var3.bind(var2)(var4, var1);
        return var1;
    };
    var4['MESSAGE_DELETE_BULK'] = var12;
    var12 = function handleCreatePendingReply(arg1) {
        var1 = arg1;
        var6 = var1.message;
        var5 = _closure1_slot17;
        var4 = var5.set;
        var3 = var6.channel_id;
        var2 = var6.id;
        var1 = {};
        var7 = _closure1_slot13;
        var7 = var7.LOADED;
        var1['state'] = var7;
        var1['message'] = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        var1 = undefined;
        return var1;
    };
    var4['CREATE_PENDING_REPLY'] = var12;
    var4['CHANNEL_DELETE'] = var11;
    var4['THREAD_DELETE'] = var11;
    var10 = function handleGenericCleanup() {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = _closure1_slot17;
            var2 = var3.retainWhere;
            var1 = function(arg1) {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var1 = arg1;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = 0;
            if(!(var1 !== var2)) { _fun0025_ip = 87; continue _fun0025 }
case 37:
            var1 = undefined;
            return var1;
case 87:
            var1 = false;
            return var1;
        }
    };
    var4['GUILD_DELETE'] = var10;
    var4['CONNECTION_OPEN'] = var5;
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var21 = var5;
    var19 = var4;
    var4 = new var21[var9](var20, var19, var18);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/replies/ReferencedMessageStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['ReferencedMessageState'] = var2;
    return var1;
})();
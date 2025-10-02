// app/modules/message_previews/MessagePreviewStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 37: // try_end0
            _fun0004_ip = 38; continue _fun0004;
case 39: // catch_target0
            CatchBlockStart(arg_register=1);
case 38:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'MessagePreviewStore';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot11 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function MessagePreviewStore() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot4;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 9;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var10 = new Array(2);
                var10[0] = var1;
                var1 = {};
                var7 = function CONNECTION_OPEN(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleConnectionOpen;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['CONNECTION_OPEN'] = var7;
                var7 = function GUILD_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['GUILD_CREATE'] = var7;
                var7 = function GUILD_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleGuildDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['GUILD_DELETE'] = var7;
                var7 = function LOAD_MESSAGES_SUCCESS(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLoadMessagesSuccess;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['LOAD_MESSAGES_SUCCESS'] = var7;
                var7 = function LOCAL_MESSAGES_LOADED(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLocalMessagesLoaded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['LOCAL_MESSAGES_LOADED'] = var7;
                var7 = function LOGOUT(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleLogout;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['LOGOUT'] = var7;
                var7 = function MESSAGE_CREATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessageCreate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['MESSAGE_CREATE'] = var7;
                var7 = function MESSAGE_DELETE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessageDelete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['MESSAGE_DELETE'] = var7;
                var7 = function MESSAGE_PREVIEWS_LOADED(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessagePreviewsLoaded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['MESSAGE_PREVIEWS_LOADED'] = var7;
                var7 = function MESSAGE_PREVIEWS_LOCALLY_LOADED(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessagePreviewsLocallyLoaded;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['MESSAGE_PREVIEWS_LOCALLY_LOADED'] = var7;
                var7 = function MESSAGE_UPDATE(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleMessageUpdate;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['MESSAGE_UPDATE'] = var7;
                var7 = function THREAD_LIST_SYNC(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleThreadListSync;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1['THREAD_LIST_SYNC'] = var7;
                var10[1] = var1;
                var1 = _closure1_slot7;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot6;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 42; continue _fun0005;
case 40:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 42:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var14 = var3;
                var2 = new var14[var2](var13);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['guilds'] = var2;
                var2 = 0;
                var1['generation'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'isLatest';
        var5['key'] = var1;
        var1 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg1;
                var3 = this;
                var5 = var3.guilds;
                var4 = var5.get;
                var1 = null;
                var7 = var1 != var6;
                var2 = null;
                if(!var7) { _fun0006_ip = 43; continue _fun0006 }
case 34:
                var2 = var6;
case 43:
                var6 = var4.bind(var5)(var2);
                var4 = var1 == var6;
                var2 = undefined;
                if(var4) { _fun0006_ip = 44; continue _fun0006 }
case 45:
                var5 = var6.isLatest;
                var4 = var3.generation;
                var3 = arg2;
                var2 = var5.bind(var6)(var3, var4);
case 44:
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 38; continue _fun0006 }
case 46:
                var1 = var2;
case 38:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(17);
        var1[0] = var5;
        var5 = {};
        var7 = 'isLocalFetchNeeded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = this;
                var3 = var1.guilds;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0007_ip = 47; continue _fun0007 }
case 33:
                var2 = var3.localNeeded;
case 47:
                var1 = var1 == var2;
                if(var1) { _fun0007_ip = 5; continue _fun0007 }
case 2:
                var1 = var2;
case 5:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'message';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = this;
                var3 = var1.guilds;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0008_ip = 5; continue _fun0008 }
case 33:
                var4 = var5.messageRecord;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
case 5:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0008_ip = 7; continue _fun0008 }
case 48:
                var1 = var2;
case 7:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'data';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.guilds;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0009_ip = 49; continue _fun0009 }
case 50:
                var5 = var1.guilds;
                var4 = var5.set;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 10;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var6);
                var2 = var2.PreviewData;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var10 = var6;
                var2 = new var10[var2](var9);
                var2 = var2 instanceof Object ? var2 : var6;
                var2 = var4.bind(var5)(var3, var2);
case 49:
                var2 = var1.guilds;
                var1 = var2.get;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleOneGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var3 = var4.data;
                var2 = var1.id;
                var2 = var3.bind(var4)(var2);
                var7 = var2.putMany;
                var6 = var1.lastMessages;
                var3 = null;
                if(!(var3 == var6)) { _fun0010_ip = 51; continue _fun0010 }
case 47:
                var6 = new Array(0);
case 51:
                var5 = var4.generation;
                var5 = var7.bind(var2)(var6, var5);
                var6 = var2.putMany;
                var5 = var1.threadMessages;
                if(!(var3 == var5)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var5 = new Array(0);
case 52:
                var4 = var4.generation;
                var4 = var6.bind(var2)(var5, var4);
                var1 = var1.lastMessages;
                if(!(var3 != var1)) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                var1 = false;
                var2['localNeeded'] = var1;
case 54:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleConnectionOpen';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = this;
                var2 = var5.generation;
                var1 = 1;
                var1 = var2 + var1;
                var5['generation'] = var1;
                var3 = _closure1_slot12;
                var1 = arg1;
                var2 = var1.guilds;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0011_ip = 56; continue _fun0011 }
case 57:
                var6 = var3.value;
                var2 = var5.handleOneGuildCreate;
                var2 = var2.bind(var5)(var6);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0011_ip = 57; continue _fun0011 }
case 56:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleGuildCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = this;
            var2 = var3.handleOneGuildCreate;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var3 = var1.guilds;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var1.guild;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleMessageCreate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var3 = var2.optimistic;
                if(var3) { _fun0012_ip = 58; continue _fun0012 }
case 59:
                var3 = var2.isPushNotification;
                if(var3) { _fun0012_ip = 58; continue _fun0012 }
case 60:
                var4 = var1.data;
                var5 = var2.guildId;
                var3 = null;
                var6 = var3 != var5;
                if(!var6) { _fun0012_ip = 2; continue _fun0012 }
case 51:
                var3 = var5;
case 2:
                var5 = var4.bind(var1)(var3);
                var4 = var5.put;
                var3 = var2.message;
                var3 = var3.channel_id;
                var2 = var2.message;
                var1 = var1.generation;
                var1 = var4.bind(var5)(var3, var2, var1);
                var1 = undefined;
                return var1;
case 58:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleMessageDelete';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = var3.guildId;
                var4 = null;
                var6 = var4 != var1;
                var5 = null;
                if(!var6) { _fun0013_ip = 50; continue _fun0013 }
case 61:
                var5 = var1;
case 50:
                var1 = var2.data;
                var9 = var1.bind(var2)(var5);
                var6 = var4 == var9;
                var1 = undefined;
                var7 = undefined;
                if(var6) { _fun0013_ip = 7; continue _fun0013 }
case 2:
                var8 = var9.messageId;
                var6 = var3.channelId;
                var7 = var8.bind(var9)(var6);
case 7:
                var6 = var3.id;
                if(!(var7 === var6)) { _fun0013_ip = 16; continue _fun0013 }
case 35:
                var8 = _closure1_slot10;
                var7 = var8.getMessages;
                var6 = var3.channelId;
                var8 = var7.bind(var8)(var6);
                var7 = var8.hasMoreAfter;
                var6 = null;
                if(var7) { _fun0013_ip = 62; continue _fun0013 }
case 63:
                var7 = var8.last;
                var6 = var7.bind(var8)();
case 62:
                if(!(var4 == var6)) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                var4 = var2.data;
                var8 = var4.bind(var2)(var5);
                var7 = var8.delete;
                var4 = var3.channelId;
                var4 = var7.bind(var8)(var4);
                _fun0013_ip = 16; continue _fun0013;
case 64:
                var4 = var2.data;
                var5 = var4.bind(var2)(var5);
                var4 = var5.put;
                var3 = var3.channelId;
                var2 = var2.generation;
                var2 = var4.bind(var5)(var3, var6, var2);
case 16:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'handleMessageUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var1 = var2.guildId;
                var3 = null;
                var6 = var3 != var1;
                var4 = null;
                if(!var6) { _fun0014_ip = 50; continue _fun0014 }
case 61:
                var4 = var1;
case 50:
                var1 = var2.message;
                var8 = var1.channel_id;
                var1 = var2.message;
                var6 = var1.id;
                if(!(var3 != var8)) { _fun0014_ip = 62; continue _fun0014 }
case 5:
                if(!(var3 != var6)) { _fun0014_ip = 62; continue _fun0014 }
case 66:
                var1 = var5.data;
                var4 = var1.bind(var5)(var4);
                var7 = var3 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0014_ip = 67; continue _fun0014 }
case 39:
                var7 = var4.messageId;
                var5 = var7.bind(var4)(var8);
case 67:
                if(!(var5 === var6)) { _fun0014_ip = 13; continue _fun0014 }
case 56:
                if(!(var3 != var4)) { _fun0014_ip = 68; continue _fun0014 }
case 69:
                var3 = var4.update;
                var2 = var2.message;
                var2 = var3.bind(var4)(var2);
case 68:
                return var1;
case 13:
                var1 = false;
                return var1;
case 62:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'handleThreadListSync';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = arg1;
                var1 = this;
                var4 = var1.data;
                var3 = var2.guildId;
                var4 = var4.bind(var1)(var3);
                var3 = var4.putMany;
                var2 = var2.mostRecentMessages;
                var5 = null;
                if(!(var5 == var2)) { _fun0015_ip = 51; continue _fun0015 }
case 47:
                var2 = new Array(0);
case 51:
                var1 = var1.generation;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'handleLoadMessagesSuccess';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var7 = arg1;
                var2 = this;
                var5 = _closure1_slot9;
                var4 = var5.getBasicChannel;
                var3 = var7.channelId;
                var3 = var4.bind(var5)(var3);
                var6 = null;
                if(!(var6 != var3)) { _fun0016_ip = 21; continue _fun0016 }
case 70:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var8 = var5.bind(var1)(var4);
                var5 = var8.requireSortedDescending;
                var4 = var7.messages;
                var4 = var5.bind(var8)(var4);
                var4 = var7.isAfter;
                if(var4) { _fun0016_ip = 17; continue _fun0016 }
case 9:
                var4 = var7.isBefore;
                if(var4) { _fun0016_ip = 17; continue _fun0016 }
case 71:
                var4 = var7.hasMoreAfter;
                if(var4) { _fun0016_ip = 17; continue _fun0016 }
case 63:
                var5 = var2.data;
                var4 = var3.guild_id;
                var10 = var5.bind(var2)(var4);
                var9 = var10.put;
                var8 = var7.channelId;
                var5 = var7.messages;
                var4 = 0;
                var4 = var5[var4];
                var11 = var6 != var4;
                var5 = null;
                if(!var11) { _fun0016_ip = 72; continue _fun0016 }
case 73:
                var5 = var4;
case 72:
                var4 = var2.generation;
                var4 = var9.bind(var10)(var8, var5, var4);
                _fun0016_ip = 74; continue _fun0016;
case 17:
                var4 = var2.data;
                var3 = var3.guild_id;
                var5 = var4.bind(var2)(var3);
                var4 = var5.putNew;
                var3 = var7.channelId;
                var8 = var7.messages;
                var7 = 0;
                var7 = var8[var7];
                var8 = var6 != var7;
                var6 = null;
                if(!var8) { _fun0016_ip = 75; continue _fun0016 }
case 76:
                var6 = var7;
case 75:
                var2 = var2.generation;
                var2 = var4.bind(var5)(var3, var6, var2);
case 74:
                return var1;
case 21:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'handleLocalMessagesLoaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var6 = _closure1_slot9;
                var5 = var6.getBasicChannel;
                var2 = var1.channelId;
                var2 = var5.bind(var6)(var2);
                var5 = null;
                if(!(var5 != var2)) { _fun0017_ip = 77; continue _fun0017 }
case 78:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 11;
                var6 = var6[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var6);
                var6 = var7.requireSortedDescending;
                var3 = var1.messages;
                var3 = var6.bind(var7)(var3);
                var3 = var4.data;
                var2 = var2.guild_id;
                var4 = var3.bind(var4)(var2);
                var3 = var4.putNew;
                var2 = var1.channelId;
                var6 = var1.messages;
                var1 = 0;
                var1 = var6[var1];
                var6 = var5 != var1;
                var5 = null;
                if(!var6) { _fun0017_ip = 79; continue _fun0017 }
case 80:
                var5 = var1;
case 79:
                var1 = -inf;
                var1 = var3.bind(var4)(var2, var5, var1);
case 77:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'handleMessagePreviewsLoaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var1 = arg1;
                var6 = this;
                var5 = _closure1_slot11;
                var4 = var5.verbose;
                var15 = var1.guildId;
                var3 = var1.messages;
                var13 = var3.length;
                var3 = global;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var16 = 'adding remote previews (guildId: ';
                var14 = ', messages: ';
                var12 = ')';
                var3 = var16[var9](var15, var14, var13, var12, var11);
                var3 = var4.bind(var5)(var3);
                var4 = var6.data;
                var3 = var1.guildId;
                var5 = var4.bind(var6)(var3);
                var3 = _closure1_slot12;
                var2 = var1.messages;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0018_ip = 19; continue _fun0018 }
case 81:
                var9 = var3.value;
                var8 = var5.isLatest;
                var7 = var9.channel_id;
                var2 = var6.generation;
                var2 = var8.bind(var5)(var7, var2);
                if(var2) { _fun0018_ip = 82; continue _fun0018 }
case 83:
                var8 = var5.put;
                var7 = var9.channel_id;
                var2 = var6.generation;
                var2 = var8.bind(var5)(var7, var9, var2);
case 82:
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0018_ip = 81; continue _fun0018 }
case 19:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'handleMessagePreviewsLocallyLoaded';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var5 = _closure1_slot11;
                var3 = var5.verbose;
                var16 = var1.guildId;
                var2 = var1.messages;
                var14 = var2.length;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var17 = 'adding local previews (guildId: ';
                var15 = ', messages: ';
                var13 = ')';
                var2 = var17[var8](var16, var15, var14, var13, var12);
                var2 = var3.bind(var5)(var2);
                var3 = var4.data;
                var2 = var1.guildId;
                var3 = var3.bind(var4)(var2);
                var4 = _closure1_slot12;
                var2 = var1.messages;
                var1 = undefined;
                var9 = var4.bind(var1)(var2);
                var4 = var9.bind(var1)();
                var2 = var4.done;
                var8 = -inf;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                if(var2) { _fun0019_ip = 84; continue _fun0019 }
case 85:
                var11 = var4.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var1)(var11, var7);
                var12 = var2[var6];
                var11 = var2[var5];
                var2 = var3.has;
                var2 = var2.bind(var3)(var12);
                if(var2) { _fun0019_ip = 86; continue _fun0019 }
case 87:
                var2 = var3.put;
                var2 = var2.bind(var3)(var12, var11, var8);
case 86:
                var11 = var9.bind(var1)();
                var2 = var11.done;
                var4 = var11;
                if(!var2) { _fun0019_ip = 85; continue _fun0019 }
case 84:
                var2 = false;
                var3['localNeeded'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'handleLogout';
        var5['key'] = var7;
        var6 = function value() {
            var1 = this;
            var2 = var1.guilds;
            var1 = var2.clear;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var6;
        var1[16] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_previews/MessagePreviewStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
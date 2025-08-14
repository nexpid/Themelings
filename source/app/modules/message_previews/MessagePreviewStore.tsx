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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot13;
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
            var7 = _closure1_slot13;
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
 344:
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
    var _closure1_slot13 = var1;
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
 72: // try_end0
            _fun0004_ip = 76; continue _fun0004;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
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
 0:
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
                if(var1) { _fun0005_ip = 244; continue _fun0005 }
 231:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0005_ip = 278; continue _fun0005;
 244:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot7;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 278:
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
 0:
                var6 = arg1;
                var3 = this;
                var5 = var3.guilds;
                var4 = var5.get;
                var1 = null;
                var7 = var1 != var6;
                var2 = null;
                if(!var7) { _fun0006_ip = 31; continue _fun0006 }
 28:
                var2 = var6;
 31:
                var6 = var4.bind(var5)(var2);
                var4 = var1 == var6;
                var2 = undefined;
                if(var4) { _fun0006_ip = 66; continue _fun0006 }
 45:
                var5 = var6.isLatest;
                var4 = var3.generation;
                var3 = arg2;
                var2 = var5.bind(var6)(var3, var4);
 66:
                var1 = var1 != var2;
                if(!var1) { _fun0006_ip = 76; continue _fun0006 }
 73:
                var1 = var2;
 76:
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
 0:
                var1 = this;
                var3 = var1.guilds;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0007_ip = 39; continue _fun0007 }
 33:
                var2 = var3.localNeeded;
 39:
                var1 = var1 == var2;
                if(var1) { _fun0007_ip = 49; continue _fun0007 }
 46:
                var1 = var2;
 49:
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
 0:
                var1 = this;
                var3 = var1.guilds;
                var2 = var3.get;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0008_ip = 49; continue _fun0008 }
 33:
                var4 = var5.messageRecord;
                var3 = arg2;
                var2 = var4.bind(var5)(var3);
 49:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0008_ip = 61; continue _fun0008 }
 58:
                var1 = var2;
 61:
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
 0:
                var3 = arg1;
                var1 = this;
                var4 = var1.guilds;
                var2 = var4.has;
                var2 = var2.bind(var4)(var3);
                if(var2) { _fun0009_ip = 93; continue _fun0009 }
 25:
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
 93:
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
 0:
                var1 = arg1;
                var4 = this;
                var3 = var4.data;
                var2 = var1.id;
                var2 = var3.bind(var4)(var2);
                var7 = var2.putMany;
                var6 = var1.lastMessages;
                var3 = null;
                if(!(var3 == var6)) { _fun0010_ip = 43; continue _fun0010 }
 39:
                var6 = new Array(0);
 43:
                var5 = var4.generation;
                var5 = var7.bind(var2)(var6, var5);
                var6 = var2.putMany;
                var5 = var1.threadMessages;
                if(!(var3 == var5)) { _fun0010_ip = 75; continue _fun0010 }
 71:
                var5 = new Array(0);
 75:
                var4 = var4.generation;
                var4 = var6.bind(var2)(var5, var4);
                var1 = var1.lastMessages;
                if(!(var3 != var1)) { _fun0010_ip = 105; continue _fun0010 }
 97:
                var1 = false;
                var2['localNeeded'] = var1;
 105:
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
 0:
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
                if(var2) { _fun0011_ip = 88; continue _fun0011 }
 57:
                var6 = var3.value;
                var2 = var5.handleOneGuildCreate;
                var2 = var2.bind(var5)(var6);
                var6 = var4.bind(var1)();
                var2 = var6.done;
                var3 = var6;
                if(!var2) { _fun0011_ip = 57; continue _fun0011 }
 88:
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
 0:
                var2 = arg1;
                var1 = this;
                var3 = var2.optimistic;
                if(var3) { _fun0012_ip = 89; continue _fun0012 }
 15:
                var3 = var2.isPushNotification;
                if(var3) { _fun0012_ip = 89; continue _fun0012 }
 24:
                var4 = var1.data;
                var5 = var2.guildId;
                var3 = null;
                var6 = var3 != var5;
                if(!var6) { _fun0012_ip = 46; continue _fun0012 }
 43:
                var3 = var5;
 46:
                var5 = var4.bind(var1)(var3);
                var4 = var5.put;
                var3 = var2.message;
                var3 = var3.channel_id;
                var2 = var2.message;
                var1 = var1.generation;
                var1 = var4.bind(var5)(var3, var2, var1);
                var1 = undefined;
                return var1;
 89:
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
 0:
                var3 = arg1;
                var2 = this;
                var1 = var3.guildId;
                var4 = null;
                var6 = var4 != var1;
                var5 = null;
                if(!var6) { _fun0013_ip = 25; continue _fun0013 }
 22:
                var5 = var1;
 25:
                var1 = var2.data;
                var9 = var1.bind(var2)(var5);
                var6 = var4 == var9;
                var1 = undefined;
                var7 = undefined;
                if(var6) { _fun0013_ip = 61; continue _fun0013 }
 46:
                var8 = var9.messageId;
                var6 = var3.channelId;
                var7 = var8.bind(var9)(var6);
 61:
                var6 = var3.id;
                if(!(var7 === var6)) { _fun0013_ip = 179; continue _fun0013 }
 70:
                var8 = _closure1_slot10;
                var7 = var8.getMessages;
                var6 = var3.channelId;
                var8 = var7.bind(var8)(var6);
                var7 = var8.hasMoreAfter;
                var6 = null;
                if(var7) { _fun0013_ip = 114; continue _fun0013 }
 104:
                var7 = var8.last;
                var6 = var7.bind(var8)();
 114:
                if(!(var4 == var6)) { _fun0013_ip = 145; continue _fun0013 }
 118:
                var4 = var2.data;
                var8 = var4.bind(var2)(var5);
                var7 = var8.delete;
                var4 = var3.channelId;
                var4 = var7.bind(var8)(var4);
                _fun0013_ip = 179; continue _fun0013;
 145:
                var4 = var2.data;
                var5 = var4.bind(var2)(var5);
                var4 = var5.put;
                var3 = var3.channelId;
                var2 = var2.generation;
                var2 = var4.bind(var5)(var3, var6, var2);
 179:
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
 0:
                var2 = arg1;
                var5 = this;
                var1 = var2.guildId;
                var3 = null;
                var6 = var3 != var1;
                var4 = null;
                if(!var6) { _fun0014_ip = 25; continue _fun0014 }
 22:
                var4 = var1;
 25:
                var1 = var2.message;
                var8 = var1.channel_id;
                var1 = var2.message;
                var6 = var1.id;
                if(!(var3 != var8)) { _fun0014_ip = 114; continue _fun0014 }
 49:
                if(!(var3 != var6)) { _fun0014_ip = 114; continue _fun0014 }
 53:
                var1 = var5.data;
                var4 = var1.bind(var5)(var4);
                var7 = var3 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0014_ip = 84; continue _fun0014 }
 74:
                var7 = var4.messageId;
                var5 = var7.bind(var4)(var8);
 84:
                if(!(var5 === var6)) { _fun0014_ip = 110; continue _fun0014 }
 88:
                if(!(var3 != var4)) { _fun0014_ip = 108; continue _fun0014 }
 92:
                var3 = var4.update;
                var2 = var2.message;
                var2 = var3.bind(var4)(var2);
 108:
                return var1;
 110:
                var1 = false;
                return var1;
 114:
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
 0:
                var2 = arg1;
                var1 = this;
                var4 = var1.data;
                var3 = var2.guildId;
                var4 = var4.bind(var1)(var3);
                var3 = var4.putMany;
                var2 = var2.mostRecentMessages;
                var5 = null;
                if(!(var5 == var2)) { _fun0015_ip = 43; continue _fun0015 }
 39:
                var2 = new Array(0);
 43:
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
 0:
                var7 = arg1;
                var2 = this;
                var5 = _closure1_slot9;
                var4 = var5.getBasicChannel;
                var3 = var7.channelId;
                var3 = var4.bind(var5)(var3);
                var6 = null;
                if(!(var6 != var3)) { _fun0016_ip = 234; continue _fun0016 }
 38:
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
                if(var4) { _fun0016_ip = 169; continue _fun0016 }
 86:
                var4 = var7.isBefore;
                if(var4) { _fun0016_ip = 169; continue _fun0016 }
 95:
                var4 = var7.hasMoreAfter;
                if(var4) { _fun0016_ip = 169; continue _fun0016 }
 104:
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
                if(!var11) { _fun0016_ip = 154; continue _fun0016 }
 151:
                var5 = var4;
 154:
                var4 = var2.generation;
                var4 = var9.bind(var10)(var8, var5, var4);
                _fun0016_ip = 232; continue _fun0016;
 169:
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
                if(!var8) { _fun0016_ip = 219; continue _fun0016 }
 216:
                var6 = var7;
 219:
                var2 = var2.generation;
                var2 = var4.bind(var5)(var3, var6, var2);
 232:
                return var1;
 234:
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
 0:
                var1 = arg1;
                var4 = this;
                var6 = _closure1_slot9;
                var5 = var6.getBasicChannel;
                var2 = var1.channelId;
                var2 = var5.bind(var6)(var2);
                var5 = null;
                if(!(var5 != var2)) { _fun0017_ip = 141; continue _fun0017 }
 35:
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
                if(!var6) { _fun0017_ip = 124; continue _fun0017 }
 121:
                var5 = var1;
 124:
                var1 = -inf;
                var1 = var3.bind(var4)(var2, var5, var1);
 141:
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
 0:
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
                if(var2) { _fun0018_ip = 187; continue _fun0018 }
 117:
                var9 = var3.value;
                var8 = var5.isLatest;
                var7 = var9.channel_id;
                var2 = var6.generation;
                var2 = var8.bind(var5)(var7, var2);
                if(var2) { _fun0018_ip = 172; continue _fun0018 }
 148:
                var8 = var5.put;
                var7 = var9.channel_id;
                var2 = var6.generation;
                var2 = var8.bind(var5)(var7, var9, var2);
 172:
                var7 = var4.bind(var1)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0018_ip = 117; continue _fun0018 }
 187:
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
 0:
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
                if(var2) { _fun0019_ip = 199; continue _fun0019 }
 135:
                var11 = var4.value;
                var2 = _closure1_slot3;
                var2 = var2.bind(var1)(var11, var7);
                var12 = var2[var6];
                var11 = var2[var5];
                var2 = var3.has;
                var2 = var2.bind(var3)(var12);
                if(var2) { _fun0019_ip = 184; continue _fun0019 }
 171:
                var2 = var3.put;
                var2 = var2.bind(var3)(var12, var11, var8);
 184:
                var11 = var9.bind(var1)();
                var2 = var11.done;
                var4 = var11;
                if(!var2) { _fun0019_ip = 135; continue _fun0019 }
 199:
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
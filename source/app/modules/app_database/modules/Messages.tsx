// app/modules/app_database/modules/Messages.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var8;
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
    var2 = function isLikelyNotDelta(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var1 = var2.author;
            var3 = null;
            var1 = var3 != var1;
            if(!var1) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = var2.content;
            var1 = var3 != var4;
case 36:
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 3:
            var4 = var2.mentions;
            var1 = var3 != var4;
case 38:
            if(!var1) { _fun0004_ip = 39; continue _fun0004 }
case 40:
            var2 = var2.timestamp;
            var1 = var3 != var2;
case 39:
            return var1;
        }
    };
    var _closure1_slot14 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var8[var4];
    var9 = var6.bind(var1)(var4);
    var4 = var9.prototype;
    var6 = Object.create(var4, {constructor: {value: var9}});
    var13 = 'Messages';
    var14 = var6;
    var4 = new var14[var9](var13, var12);
    var4 = var4 instanceof Object ? var4 : var6;
    var _closure1_slot10 = var4;
    var4 = function() {
        var5 = _closure1_slot6;
        var4 = function ChannelHistory(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var8 = _closure1_slot5;
                var7 = _closure2_slot0;
                var1 = undefined;
                var7 = var8.bind(var1)(var3, var7);
                var7 = null;
                var3['connectionId'] = var7;
                var8 = new Array(0);
                var3['users'] = var8;
                var8 = new Array(0);
                var3['members'] = var8;
                var8 = new Array(0);
                var3['messages'] = var8;
                var8 = var5.length;
                var9 = 0;
                if(!(var8 > var9)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var8 = var5[var9];
                var10 = var7 == var8;
                var7 = undefined;
                if(var10) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var7 = var8.connectionId;
case 43:
                var _closure3_slot0 = var7;
                var8 = _closure2_slot0;
                var6 = var8.computeUsersAndMembers;
                var8 = var6.bind(var8)(var5);
                var6 = _closure1_slot4;
                var4 = 2;
                var8 = var6.bind(var1)(var8, var4);
                var6 = var8[var9];
                var4 = 1;
                var4 = var8[var4];
                var8 = var5.length;
                var8 = var8 > var9;
                if(!var8) { _fun0005_ip = 45; continue _fun0005 }
case 15:
                var10 = var5.every;
                var9 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.connectionId;
                    var1 = _closure3_slot0;
                    var1 = var2 === var1;
                    return var1;
                };
                var8 = var10.bind(var5)(var9);
case 45:
                if(!var8) { _fun0005_ip = 46; continue _fun0005 }
case 47:
                var3['connectionId'] = var7;
case 46:
                var3['users'] = var6;
                var3['members'] = var4;
                var4 = var5.map;
                var2 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.message;
                    return var1;
                };
                var2 = var4.bind(var5)(var2);
                var3['messages'] = var2;
case 41:
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var3 = 'computeUsersAndMembers';
        var1['key'] = var3;
        var3 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = arg1;
                var8 = this;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 8;
                var2 = var5[var2];
                var7 = undefined;
                var4 = var4.bind(var7)(var2);
                var2 = var4.requireSortedDescending;
                var2 = var2.bind(var4)(var3);
                var2 = global;
                var4 = var2.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var16 = var5;
                var4 = new var16[var4](var15);
                var6 = var4 instanceof Object ? var4 : var5;
                var4 = var2.Map;
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var16 = var5;
                var4 = new var16[var4](var15);
                var5 = var4 instanceof Object ? var4 : var5;
                var1 = _closure1_slot12;
                var4 = var1.bind(var7)(var3);
                var3 = var4.bind(var7)();
                var1 = var3.done;
                if(var1) { _fun0006_ip = 19; continue _fun0006 }
case 48:
                var1 = var3.value;
                var12 = var8.addIntoMap;
                var11 = var1.users;
                var10 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.id;
                    return var1;
                };
                var10 = var12.bind(var8)(var6, var11, var10);
                var11 = var8.addIntoMap;
                var10 = var1.members;
                var1 = function(arg1) {
                    var1 = arg1;
                    var1 = var1.userId;
                    return var1;
                };
                var1 = var11.bind(var8)(var5, var10, var1);
                var10 = var4.bind(var7)();
                var1 = var10.done;
                var3 = var10;
                if(!var1) { _fun0006_ip = 48; continue _fun0006 }
case 19:
                var4 = var2.Array;
                var3 = var4.from;
                var1 = var6.values;
                var1 = var1.bind(var6)();
                var3 = var3.bind(var4)(var1);
                var1 = new Array(2);
                var1[0] = var3;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var2 = var3.bind(var4)(var2);
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(2);
        var3[0] = var1;
        var1 = {};
        var6 = 'addIntoMap';
        var1['key'] = var6;
        var2 = function value(arg1, arg2, arg3) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var7 = arg1;
                var6 = arg3;
                var3 = _closure1_slot12;
                var1 = undefined;
                var2 = arg2;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = null;
                if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var9 = var3.value;
                var8 = var6.bind(var1)(var9);
                var2 = var7.get;
                var10 = var2.bind(var7)(var8);
                var2 = var4 == var10;
                if(var2) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                var10 = var10.incomplete;
                if(!var10) { _fun0007_ip = 42; continue _fun0007 }
case 53:
                var11 = var9.incomplete;
                var10 = !var11;
case 42:
                var2 = var10;
case 51:
                if(!var2) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                var2 = var7.set;
                var2 = var2.bind(var7)(var8, var9);
case 54:
                var8 = var5.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0007_ip = 50; continue _fun0007 }
case 49:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot11 = var4;
    var5 = function() {
        var4 = _closure1_slot6;
        var3 = function Messages() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot5;
            var2 = _closure2_slot3;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var5 = function CHANNEL_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleChannelDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['CHANNEL_DELETE'] = var5;
            var5 = function GUILD_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleGuildDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['GUILD_DELETE'] = var5;
            var5 = function LOAD_MESSAGES_SUCCESS(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleLoadMessagesSuccess;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['LOAD_MESSAGES_SUCCESS'] = var5;
            var5 = function MESSAGE_CREATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleMessageCreate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['MESSAGE_CREATE'] = var5;
            var5 = function MESSAGE_DELETE_BULK(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleMessageDeleteBulk;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['MESSAGE_DELETE_BULK'] = var5;
            var5 = function MESSAGE_DELETE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleMessageDelete;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['MESSAGE_DELETE'] = var5;
            var5 = function MESSAGE_PREVIEWS_LOADED(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleMessagePreviewsLoaded;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['MESSAGE_PREVIEWS_LOADED'] = var5;
            var4 = function MESSAGE_UPDATE(arg1, arg2) {
                var4 = _closure3_slot0;
                var3 = var4.handleMessageUpdate;
                var2 = arg1;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var2['MESSAGE_UPDATE'] = var4;
            var3['actions'] = var2;
            return var1;
        };
        var _closure2_slot3 = var3;
        var5 = {};
        var2 = 'startupLoad';
        var5['key'] = var2;
        var8 = _closure1_slot3;
        var2 = undefined;
        var1 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 56; continue _fun0008 }
case 57:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 9;
                    var4 = var4[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.messages;
                    var2 = arg1;
                    var7 = var4.bind(var5)(var2);
                    var6 = var7.getLatest;
                    var5 = arg2;
                    var4 = arg3;
                    var2 = arg4;
                    var2 = var6.bind(var7)(var5, var4, var2);
                    SaveGenerator(address=72);
case 35:
                    return var2;
case 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var3 = _closure1_slot11;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var11 = var4;
                    var10 = var2;
                    var3 = new var11[var3](var10, var9);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
case 59:
                    return var2;
case 56:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var2)(var1);
        var _closure2_slot2 = var1;
        var1 = function startupLoad() {
            var1 = undefined;
            var4 = _closure2_slot2;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'load';
        var5['key'] = var7;
        var7 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    StartGenerator();
                    var7 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 61; continue _fun0009 }
case 62:
                    var4 = _closure1_slot8;
                    var2 = var4.getBasicChannel;
                    var2 = var2.bind(var4)(var7);
                    var4 = null;
                    if(!(var4 != var7)) { _fun0009_ip = 63; continue _fun0009 }
case 50:
                    if(!(var4 != var2)) { _fun0009_ip = 63; continue _fun0009 }
case 64:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.isReadableChannel;
                    var4 = var4.bind(var5)(var2);
                    if(var4) { _fun0009_ip = 59; continue _fun0009 }
case 63:
                    var8 = _closure1_slot11;
                    var4 = var8.prototype;
                    var5 = Object.create(var4, {constructor: {value: var8}});
                    var11 = new Array(0);
                    var12 = var5;
                    var4 = new var12[var8](var11, var10);
                    var4 = var4 instanceof Object ? var4 : var5;
                    return var4;
case 59:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 9;
                    var4 = var8[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.messages;
                    var4 = arg1;
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.getLatest;
                    var4 = var2.guild_id;
                    var2 = arg3;
                    var2 = var5.bind(var6)(var4, var7, var2);
                    SaveGenerator(address=167);
case 65:
                    return var2;
case 66:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0009_ip = 67; continue _fun0009 }
case 68:
                    var3 = _closure1_slot11;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var12 = var4;
                    var11 = var2;
                    var3 = new var12[var3](var11, var10);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
case 67:
                    return var2;
case 61:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot1 = var7;
        var7 = function load() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'handleMessageCreate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = arg1;
                var6 = this;
                var2 = var1.optimistic;
                if(var2) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                var2 = var1.isPushNotification;
case 69:
                if(var2) { _fun0010_ip = 71; continue _fun0010 }
case 72:
                var4 = var1.sendMessageOptions;
                var3 = null;
                var2 = var3 != var4;
case 71:
                if(var2) { _fun0010_ip = 49; continue _fun0010 }
case 73:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isReadableChannelId;
                var2 = var1.channelId;
                var2 = var3.bind(var4)(var2);
                if(!var2) { _fun0010_ip = 49; continue _fun0010 }
case 74:
                var5 = var6.upsertOne;
                var10 = var1.guildId;
                var9 = var1.channelId;
                var8 = var1.message;
                var7 = arg2;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
case 49:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'handleMessageUpdate';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var5 = this;
                var2 = var1.message;
                var2 = var2.id;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0011_ip = 75; continue _fun0011 }
case 34:
                var3 = var1.message;
                var3 = var3.channel_id;
                var2 = var4 != var3;
case 75:
                if(!var2) { _fun0011_ip = 76; continue _fun0011 }
case 77:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var4);
                var4 = var7.isReadableChannelId;
                var3 = var1.message;
                var3 = var3.channel_id;
                var2 = var4.bind(var7)(var3);
case 76:
                if(!var2) { _fun0011_ip = 78; continue _fun0011 }
case 79:
                var4 = _closure1_slot14;
                var3 = var1.message;
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                if(var2) { _fun0011_ip = 80; continue _fun0011 }
case 81:
                var7 = var5.updateOne;
                var11 = var1.guildId;
                var2 = var1.message;
                var10 = var2.channel_id;
                var9 = var1.message;
                var12 = var5;
                var8 = var6;
                var2 = var12[var7](var11, var10, var9, var8, var7);
                _fun0011_ip = 78; continue _fun0011;
case 80:
                var4 = var5.upsertOne;
                var11 = var1.guildId;
                var2 = var1.message;
                var10 = var2.channel_id;
                var9 = var1.message;
                var12 = var5;
                var8 = var6;
                var1 = var12[var4](var11, var10, var9, var8, var7);
case 78:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'handleMessagePreviewsLoaded';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var9 = arg1;
                var8 = arg2;
                var7 = this;
                var3 = _closure1_slot12;
                var2 = var9.messages;
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var3 = var5.bind(var1)();
                var2 = var3.done;
                var4 = 10;
                if(var2) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                var12 = var3.value;
                var10 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var4];
                var11 = var10.bind(var1)(var2);
                var10 = var11.isReadableChannelId;
                var2 = var12.channel_id;
                var2 = var10.bind(var11)(var2);
                if(!var2) { _fun0012_ip = 81; continue _fun0012 }
case 51:
                var11 = var7.insertStale;
                var16 = var9.guildId;
                var15 = var12.channel_id;
                var17 = var7;
                var14 = var12;
                var13 = var8;
                var2 = var17[var11](var16, var15, var14, var13, var12);
case 81:
                var10 = var5.bind(var1)();
                var2 = var10.done;
                var3 = var10;
                if(!var2) { _fun0012_ip = 83; continue _fun0012 }
case 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'handleLoadMessagesSuccess';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var1 = arg1;
                var6 = arg2;
                var5 = this;
                var7 = _closure1_slot8;
                var4 = var7.getBasicChannel;
                var2 = var1.channelId;
                var2 = var4.bind(var7)(var2);
                var4 = null;
                if(!(var4 != var2)) { _fun0013_ip = 84; continue _fun0013 }
case 64:
                var7 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 10;
                var4 = var4[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var4);
                var4 = var7.isReadableChannelId;
                var3 = var1.channelId;
                var3 = var4.bind(var7)(var3);
                if(!var3) { _fun0013_ip = 84; continue _fun0013 }
case 42:
                var3 = var1.isAfter;
                if(var3) { _fun0013_ip = 85; continue _fun0013 }
case 76:
                var3 = var1.isBefore;
                if(var3) { _fun0013_ip = 85; continue _fun0013 }
case 86:
                var3 = var1.hasMoreAfter;
                if(var3) { _fun0013_ip = 85; continue _fun0013 }
case 87:
                var4 = var1.limit;
                var3 = 5;
                if(!(var4 > var3)) { _fun0013_ip = 85; continue _fun0013 }
case 88:
                var8 = var5.replaceAll;
                var12 = var2.guild_id;
                var11 = var1.channelId;
                var10 = var1.messages;
                var13 = var5;
                var9 = var6;
                var3 = var13[var8](var12, var11, var10, var9, var8);
                _fun0013_ip = 84; continue _fun0013;
case 85:
                var4 = var5.upsertMany;
                var12 = var2.guild_id;
                var11 = var1.channelId;
                var10 = var1.messages;
                var13 = var5;
                var9 = var6;
                var1 = var13[var4](var12, var11, var10, var9, var8);
case 84:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'handleMessageDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = arg1;
                var6 = this;
                var3 = var1.id;
                var2 = null;
                if(!(var2 != var3)) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                var5 = var6.deleteOne;
                var10 = var1.guildId;
                var9 = var1.channelId;
                var8 = var1.id;
                var7 = arg2;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
case 89:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'handleMessageDeleteBulk';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var5 = this;
                var3 = _closure1_slot12;
                var2 = var7.ids;
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0015_ip = 91; continue _fun0015 }
case 64:
                var12 = var3.value;
                var9 = var5.deleteOne;
                var14 = var7.guildId;
                var13 = var7.channelId;
                var15 = var5;
                var11 = var6;
                var2 = var15[var9](var14, var13, var12, var11, var10);
                var8 = var4.bind(var1)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0015_ip = 64; continue _fun0015 }
case 91:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'handleChannelDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = arg1;
            var5 = this;
            var4 = var5.deleteChannel;
            var2 = var1.channel;
            var3 = var2.guild_id;
            var1 = var1.channel;
            var2 = var1.id;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'handleGuildDelete';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = arg1;
                var4 = this;
                var2 = var1.guild;
                var2 = var2.unavailable;
                if(var2) { _fun0016_ip = 77; continue _fun0016 }
case 29:
                var3 = var4.deleteGuild;
                var1 = var1.guild;
                var2 = var1.id;
                var1 = arg2;
                var1 = var3.bind(var4)(var2, var1);
case 77:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'resetInMemoryState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'insertStale';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            var7 = arg1;
            var6 = arg2;
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 9;
            var3 = var9[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var3);
            var4 = var5.messagesTransaction;
            var3 = arg4;
            var5 = var4.bind(var5)(var3);
            var4 = _closure1_slot7;
            var3 = var4.lastTimeConnectedChanged;
            var12 = var3.bind(var4)();
            var4 = var5.put;
            var8 = _closure1_slot0;
            var2 = 11;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var10 = var2.KvMessage;
            var3 = var10.fromMessage;
            var13 = arg3;
            var16 = var10;
            var15 = var7;
            var14 = var6;
            var13 = var16[var3](var15, var14, var13, var12, var11);
            var2 = 12;
            var2 = var9[var2];
            var2 = var8.bind(var1)(var2);
            var2 = var2.ConflictOptions;
            var12 = var2.Skip;
            var16 = var5;
            var15 = var7;
            var14 = var6;
            var2 = var16[var4](var15, var14, var13, var12, var11);
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'upsertOne';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            var6 = arg1;
            var5 = arg2;
            var4 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 9;
            var3 = var10[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var4 = var7.messagesTransaction;
            var3 = arg4;
            var4 = var4.bind(var7)(var3);
            var7 = _closure1_slot7;
            var3 = var7.lastTimeConnectedChanged;
            var13 = var3.bind(var7)();
            var8 = var4.put;
            var9 = _closure1_slot0;
            var3 = 11;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var11 = var3.KvMessage;
            var7 = var11.fromMessage;
            var14 = arg3;
            var17 = var11;
            var16 = var6;
            var15 = var5;
            var14 = var17[var7](var16, var15, var14, var13, var12);
            var3 = 12;
            var3 = var10[var3];
            var3 = var9.bind(var1)(var3);
            var3 = var3.ConflictOptions;
            var13 = var3.Replace;
            var17 = var4;
            var16 = var6;
            var15 = var5;
            var3 = var17[var8](var16, var15, var14, var13, var12);
            var3 = var4.trimChannel;
            var7 = _closure1_slot9;
            var2 = var7.saveLimit;
            var2 = var2.bind(var7)(var5);
            var2 = var3.bind(var4)(var6, var5, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'upsertMany';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var4 = var7.messagesTransaction;
                var3 = arg4;
                var4 = var4.bind(var7)(var3);
                var7 = _closure1_slot7;
                var3 = var7.lastTimeConnectedChanged;
                var10 = var3.bind(var7)();
                var7 = _closure1_slot12;
                var3 = arg3;
                var9 = var7.bind(var1)(var3);
                var7 = var9.bind(var1)();
                var3 = var7.done;
                var8 = 11;
                if(var3) { _fun0017_ip = 92; continue _fun0017 }
case 9:
                var15 = var7.value;
                var11 = var4.put;
                var12 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var12.bind(var1)(var3);
                var12 = var3.KvMessage;
                var3 = var12.fromMessage;
                var18 = var12;
                var17 = var6;
                var16 = var5;
                var14 = var10;
                var3 = var18[var3](var17, var16, var15, var14, var13);
                var3 = var11.bind(var4)(var6, var5, var3);
                var11 = var9.bind(var1)();
                var3 = var11.done;
                var7 = var11;
                if(!var3) { _fun0017_ip = 9; continue _fun0017 }
case 92:
                var3 = var4.trimChannel;
                var7 = _closure1_slot9;
                var2 = var7.saveLimit;
                var2 = var2.bind(var7)(var5);
                var2 = var3.bind(var4)(var6, var5, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'replaceAll';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var6 = arg1;
                var5 = arg2;
                var10 = arg3;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var5;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 9;
                var4 = var4[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var4);
                var7 = var8.messagesTransaction;
                var4 = arg4;
                var4 = var7.bind(var8)(var4);
                var8 = _closure1_slot7;
                var7 = var8.lastTimeConnectedChanged;
                var7 = var7.bind(var8)();
                var _closure3_slot2 = var7;
                var8 = _closure1_slot9;
                var7 = var8.saveLimit;
                var11 = var7.bind(var8)(var5);
                var7 = var10.length;
                var8 = var10;
                if(!(var7 > var11)) { _fun0018_ip = 93; continue _fun0018 }
case 94:
                var9 = var10.slice;
                var7 = var10.length;
                var7 = var7 - var11;
                var8 = var9.bind(var10)(var7);
case 93:
                var7 = var8.map;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var6 = var1.KvMessage;
                    var5 = var6.fromMessage;
                    var10 = _closure3_slot0;
                    var9 = _closure3_slot1;
                    var7 = _closure3_slot2;
                    var8 = arg1;
                    var11 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var1;
                };
                var7 = var7.bind(var8)(var3);
                var3 = var4.replaceAll;
                var3 = var3.bind(var4)(var6, var5, var7);
                var3 = var4.trimChannel;
                var7 = _closure1_slot9;
                var2 = var7.saveLimit;
                var2 = var2.bind(var7)(var5);
                var2 = var3.bind(var4)(var6, var5, var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'updateOne';
        var5['key'] = var7;
        var7 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    var7 = arg1;
                    var6 = arg2;
                    var11 = arg3;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0019_ip = 95; continue _fun0019 }
case 96:
                    var2 = var11.id;
                    var4 = null;
                    if(!(var4 == var2)) { _fun0019_ip = 97; continue _fun0019 }
case 3:
                    var5 = _closure1_slot10;
                    var3 = var5.warn;
                    var2 = 'updateOne: message.id is null; cannot update a message if we do not know its id.';
                    var2 = var3.bind(var5)(var2);
                    _fun0019_ip = 98; continue _fun0019;
case 97:
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var2 = 9;
                    var2 = var8[var2];
                    var9 = undefined;
                    var8 = var5.bind(var9)(var2);
                    var5 = var8.messages;
                    var2 = arg4;
                    var2 = var2.database;
                    var5 = var5.bind(var8)(var2);
                    var8 = var5.get;
                    var2 = var11.id;
                    var2 = var8.bind(var5)(var7, var6, var2);
                    SaveGenerator(address=124);
case 93:
                    return var2;
case 99:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=7);
                    if(var8) { _fun0019_ip = 100; continue _fun0019 }
case 101:
                    var10 = _closure1_slot7;
                    var8 = var10.lastTimeConnectedChanged;
                    var10 = var8.bind(var10)();
                    if(!(var4 != var2)) { _fun0019_ip = 98; continue _fun0019 }
case 102:
                    var4 = var5.put;
                    var8 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var3 = 11;
                    var3 = var12[var3];
                    var3 = var8.bind(var9)(var3);
                    var9 = var3.KvMessage;
                    var8 = var9.fromMessage;
                    var3 = {};
                    var15 = var2.message;
                    var16 = var3;
                    var12 = copyDataProperties(var16, var15);
                    var16 = var3;
                    var15 = var11;
                    var11 = copyDataProperties(var16, var15);
                    var17 = var9;
                    var16 = var7;
                    var15 = var6;
                    var14 = var3;
                    var13 = var10;
                    var3 = var17[var8](var16, var15, var14, var13, var12);
                    var3 = var4.bind(var5)(var7, var6, var3);
case 98:
                    var3 = undefined;
                    return var3;
case 100:
                    return var2;
case 95:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var2)(var7);
        var _closure2_slot0 = var7;
        var7 = function updateOne() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'deleteOne';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.messagesTransaction;
            var2 = arg4;
            var6 = var3.bind(var4)(var2);
            var5 = var6.deleteMessage;
            var4 = arg1;
            var3 = arg2;
            var2 = arg3;
            var2 = var5.bind(var6)(var4, var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'deleteChannel';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.messagesTransaction;
            var2 = arg3;
            var5 = var3.bind(var4)(var2);
            var4 = var5.deleteChannel;
            var3 = arg1;
            var2 = arg2;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'deleteGuild';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.messagesTransaction;
            var2 = arg2;
            var4 = var3.bind(var4)(var2);
            var3 = var4.deleteGuild;
            var2 = arg1;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var6;
        var1[18] = var5;
        var1 = var4.bind(var2)(var3, var1);
        return var1;
    };
    var5 = var5.bind(var1)();
    var6 = var5.prototype;
    var6 = Object.create(var6, {constructor: {value: var5}});
    var14 = var6;
    var5 = new var14[var5](var13);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/app_database/modules/Messages.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['ChannelHistory'] = var4;
    var3['isLikelyNotDelta'] = var2;
    return var1;
})();
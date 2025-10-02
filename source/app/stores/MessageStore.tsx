// app/stores/MessageStore.tsx
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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
            var9 = _closure1_slot30;
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
            var7 = _closure1_slot30;
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
    var _closure1_slot29 = var1;
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
    var _closure1_slot30 = var1;
    var13 = function handleConnectionOpen() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.forEach;
        var3 = function(arg1) {
            var6 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.commit;
            var5 = var6.mutate;
            var2 = {'ready': false, 'loadingMore': false};
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot25;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        return var1;
    };
    var11 = function handleCleanup() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 21;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = var1.channelId;
                var4 = _closure1_slot12;
                var2 = var4.getChannel;
                var4 = var2.bind(var4)(var3);
                var2 = null;
                if(!(var2 == var4)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.clear;
                var1 = var1.bind(var2)(var3);
case 39:
                var1 = undefined;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var10 = function handleRelationshipUpdate() {
        var2 = false;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 21;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            var6 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.commit;
            var5 = var6.reset;
            var7 = var6.map;
            var2 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = arg1;
                    var4 = var6.blocked;
                    var3 = _closure1_slot18;
                    var1 = var3.isBlockedForMessage;
                    var3 = var1.bind(var3)(var6);
                    var1 = var6;
                    if(!(var4 !== var3)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                    var3 = true;
                    _closure2_slot0 = var3;
                    var5 = var6.set;
                    var4 = _closure1_slot18;
                    var3 = var4.isBlockedForMessage;
                    var4 = var3.bind(var4)(var6);
                    var3 = 'blocked';
                    var1 = var5.bind(var6)(var3, var4);
case 41:
                    var4 = var1.ignored;
                    var5 = _closure1_slot18;
                    var3 = var5.isIgnoredForMessage;
                    var3 = var3.bind(var5)(var1);
                    var5 = var1;
                    var1 = var5;
                    if(!(var4 !== var3)) { _fun0006_ip = 43; continue _fun0006 }
case 44:
                    var3 = true;
                    _closure2_slot0 = var3;
                    var4 = var5.set;
                    var3 = _closure1_slot18;
                    var2 = var3.isIgnoredForMessage;
                    var3 = var2.bind(var3)(var5);
                    var2 = 'ignored';
                    var1 = var4.bind(var5)(var2, var3);
case 43:
                    return var1;
                }
            };
            var2 = var7.bind(var6)(var2);
            var2 = var5.bind(var6)(var2);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var1 = _closure2_slot0;
        return var1;
    };
    var1 = function performAuthorUpdate(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.forEach;
        var2 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arg1;
                var5 = _closure1_slot12;
                var4 = var5.getChannel;
                var1 = var6.channelId;
                var4 = var4.bind(var5)(var1);
                var1 = null;
                var7 = var1 == var4;
                var1 = undefined;
                var5 = undefined;
                if(var7) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var5 = var4.guild_id;
case 45:
                var4 = _closure2_slot0;
                if(!(var5 === var4)) { _fun0007_ip = 47; continue _fun0007 }
case 32:
                var5 = new Array(0);
                var _closure3_slot0 = var5;
                var4 = false;
                var _closure3_slot1 = var4;
                var7 = var6.forEach;
                var4 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var6 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 27;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getMessageAuthor;
                        var2 = var2.bind(var3)(var6);
                        var8 = var2.nick;
                        var7 = var2.colorString;
                        var2 = var6.nick;
                        if(!(var8 === var2)) { _fun0008_ip = 48; continue _fun0008 }
case 11:
                        var2 = var6.colorString;
                        if(!(var7 === var2)) { _fun0008_ip = 48; continue _fun0008 }
case 49:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var6);
                        _fun0008_ip = 50; continue _fun0008;
case 48:
                        var3 = true;
                        _closure3_slot1 = var3;
                        var4 = _closure3_slot0;
                        var3 = var4.push;
                        var5 = var6.merge;
                        var2 = {};
                        var2['nick'] = var8;
                        var2['colorString'] = var7;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
case 50:
                        return var1;
                    }
                };
                var4 = var7.bind(var6)(var4);
                var3 = _closure3_slot1;
                if(!var3) { _fun0007_ip = 47; continue _fun0007 }
case 51:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 21;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.commit;
                var2 = var6.reset;
                var2 = var2.bind(var6)(var5);
                var2 = var3.bind(var4)(var2);
case 47:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var9 = function handleReaction(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var10 = arg1;
            var _closure2_slot0 = var10;
            var1 = var10.type;
            var _closure2_slot1 = var1;
            var9 = var10.channelId;
            var7 = var10.messageId;
            var8 = var10.userId;
            var1 = var10.emoji;
            var _closure2_slot2 = var1;
            var1 = var10.reactionType;
            var _closure2_slot3 = var1;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.get;
            var6 = var4.bind(var6)(var9);
            var4 = null;
            if(!(var4 != var6)) { _fun0009_ip = 52; continue _fun0009 }
case 53:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 28;
            var4 = var11[var4];
            var9 = var9.bind(var1)(var4);
            var4 = var9.shouldApplyReaction;
            var4 = var4.bind(var9)(var10);
            if(var4) { _fun0009_ip = 54; continue _fun0009 }
case 55:
            var4 = false;
            return var4;
case 54:
            var9 = _closure1_slot11;
            var4 = var9.getId;
            var4 = var4.bind(var9)();
            var4 = var4 === var8;
            var _closure2_slot4 = var4;
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var7 = arg1;
                    var3 = _closure2_slot1;
                    var1 = 'MESSAGE_REACTION_ADD';
                    if(!(var1 !== var3)) { _fun0010_ip = 45; continue _fun0010 }
case 56:
                    var5 = var7.removeReaction;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var1 = var5.bind(var7)(var4, var3, var1);
                    _fun0010_ip = 57; continue _fun0010;
case 45:
                    var6 = var7.addReaction;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot4;
                    var3 = _closure2_slot0;
                    var9 = var3.colors;
                    var8 = _closure2_slot3;
                    var12 = var7;
                    var1 = var12[var6](var11, var10, var9, var8, var7);
case 57:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 52:
            var1 = false;
            return var1;
        }
    };
    var12 = function handleMessageSendFailedAutomod(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var2 = var1.type;
            var _closure2_slot0 = var2;
            var8 = var1.messageData;
            var5 = var8.message;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 29;
            var6 = var4[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var6);
            var6 = var7.getFailedMessageId;
            var7 = var6.bind(var7)(var8);
            var8 = var5.channelId;
            var6 = _closure1_slot1;
            var5 = 21;
            var4 = var4[var5];
            var6 = var6.bind(var1)(var4);
            var4 = var6.getOrCreate;
            var6 = var4.bind(var6)(var8);
            var4 = var6.has;
            var4 = var4.bind(var6)(var7);
            if(var4) { _fun0011_ip = 17; continue _fun0011 }
case 58:
            var4 = false;
            return var4;
case 17:
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var4 = arg1;
                    var5 = var4.embeds;
                    var1 = null;
                    var1 = var1 == var5;
                    var7 = undefined;
                    var2 = undefined;
                    if(var1) { _fun0012_ip = 59; continue _fun0012 }
case 60:
                    var3 = var5.filter;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 30;
                    var1 = var8[var1];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.isNotAutomodEmbed;
                    var1 = var3.bind(var5)(var1);
                    var2 = var1.length;
case 59:
                    var1 = 0;
                    var5 = var4;
                    if(!(var2 > var1)) { _fun0012_ip = 61; continue _fun0012 }
case 62:
                    var3 = var4.set;
                    var2 = 'embeds';
                    var1 = new Array(0);
                    var5 = var3.bind(var4)(var2, var1);
case 61:
                    var3 = _closure2_slot0;
                    var2 = 'MESSAGE_SEND_FAILED_AUTOMOD';
                    var1 = var5;
                    if(!(var2 === var3)) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                    var4 = var5.set;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 23;
                    var3 = var8[var3];
                    var7 = var6.bind(var7)(var3);
                    var6 = var7.addFlag;
                    var3 = var5.flags;
                    var2 = _closure1_slot22;
                    var2 = var2.EPHEMERAL;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = 'flags';
                    var1 = var4.bind(var5)(var2, var3);
case 63:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var2 = global;
    var15 = var2.Object;
    var14 = var15.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var14.bind(var15)(var3, var1, var8);
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
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 12;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 13;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot16 = var8;
    var8 = 14;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot17 = var8;
    var8 = 15;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot18 = var8;
    var8 = 16;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot19 = var8;
    var8 = 17;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot20 = var8;
    var8 = 18;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot21 = var8;
    var8 = 19;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var14 = var8.MessageFlags;
    var _closure1_slot22 = var14;
    var14 = var8.MessageStates;
    var _closure1_slot23 = var14;
    var8 = var8.Permissions;
    var _closure1_slot24 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var19 = var8;
    var2 = new var19[var2](var18);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot25 = var2;
    var2 = 20;
    var2 = var6[var2];
    var8 = var7.bind(var1)(var2);
    var2 = var8.prototype;
    var14 = Object.create(var2, {constructor: {value: var8}});
    var2 = 'MessageStore';
    var19 = var14;
    var18 = var2;
    var8 = new var19[var8](var18, var17);
    var8 = var8 instanceof Object ? var8 : var14;
    var _closure1_slot26 = var8;
    var8 = false;
    var _closure1_slot27 = var8;
    var8 = 34;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var14 = var8.Store;
    var8 = function(arg1) {
        var4 = function MessageStore() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
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
                var1 = _closure1_slot28;
                var1 = var1.bind(var3)();
                if(var1) { _fun0013_ip = 65; continue _fun0013 }
case 66:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 67; continue _fun0013;
case 65:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 67:
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
            var13 = var4.waitFor;
            var23 = _closure1_slot21;
            var22 = _closure1_slot12;
            var21 = _closure1_slot13;
            var20 = _closure1_slot15;
            var19 = _closure1_slot10;
            var18 = _closure1_slot19;
            var17 = _closure1_slot20;
            var16 = _closure1_slot16;
            var15 = _closure1_slot18;
            var14 = _closure1_slot14;
            var24 = var4;
            var2 = var24[var13](var23, var22, var21, var20, var19, var18, var17, var16, var15, var14, var13);
            var3 = var4.syncWith;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(15);
        var1[0] = var5;
        var5 = {};
        var7 = 'getMessages';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot9;
                var2 = var4.hasViewingRoles;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0014_ip = 68; continue _fun0014 }
case 38:
                var4 = _closure1_slot12;
                var2 = var4.getChannel;
                var7 = var2.bind(var4)(var3);
                var2 = null;
                var2 = var2 == var7;
                var5 = undefined;
                var6 = undefined;
                if(var2) { _fun0014_ip = 69; continue _fun0014 }
case 8:
                var2 = var7.getGuildId;
                var6 = var2.bind(var7)();
case 69:
                var4 = _closure1_slot9;
                var2 = var4.isViewingRoles;
                var2 = var2.bind(var4)(var6);
                if(!var2) { _fun0014_ip = 68; continue _fun0014 }
case 70:
                var6 = _closure1_slot17;
                var4 = var6.can;
                var2 = _closure1_slot24;
                var2 = var2.VIEW_CHANNEL;
                var2 = var4.bind(var6)(var2, var7);
                if(var2) { _fun0014_ip = 68; continue _fun0014 }
case 64:
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 21;
                var2 = var6[var2];
                var2 = var4.bind(var5)(var2);
                var4 = var2.prototype;
                var4 = Object.create(var4, {constructor: {value: var2}});
                var10 = var4;
                var9 = var3;
                var2 = new var10[var2](var9, var8);
                var2 = var2 instanceof Object ? var2 : var4;
                return var2;
case 68:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.getOrCreate;
                var1 = var1.bind(var2)(var3);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getMessage';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getOrCreate;
            var1 = arg1;
            var3 = var2.bind(var3)(var1);
            var2 = var3.get;
            var1 = arg2;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getLastEditableMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var6 = this;
            var4 = _closure1_slot21;
            var3 = var4.getCurrentUser;
            var3 = var3.bind(var4)();
            var _closure3_slot0 = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 24;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var5 = var6.getMessages;
            var2 = arg1;
            var5 = var5.bind(var6)(var2);
            var2 = var5.toArray;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var3.reverse;
            var3 = var2.bind(var3)();
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 32;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var5 = _closure3_slot0;
                    var2 = null;
                    var5 = var2 == var5;
                    var2 = undefined;
                    if(var5) { _fun0015_ip = 71; continue _fun0015 }
case 72:
                    var1 = _closure3_slot0;
                    var2 = var1.id;
case 71:
                    var1 = arg1;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getLastChatCommandMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = _closure1_slot21;
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            var _closure3_slot0 = var2;
            var3 = var4.getMessages;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = var3.toArray;
            var3 = var2.bind(var3)();
            var2 = var3.reverse;
            var3 = var2.bind(var3)();
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = arg1;
                    var1 = var3.interaction;
                    var6 = null;
                    var4 = var6 == var1;
                    var2 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0016_ip = 73; continue _fun0016 }
case 60:
                    var5 = var1.type;
case 73:
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 33;
                    var1 = var1[var8];
                    var1 = var7.bind(var2)(var1);
                    var1 = var1.InteractionTypes;
                    var1 = var1.APPLICATION_COMMAND;
                    var1 = var5 === var1;
                    if(!var1) { _fun0016_ip = 74; continue _fun0016 }
case 65:
                    var7 = var3.interactionData;
                    var9 = var6 == var7;
                    var5 = undefined;
                    if(var9) { _fun0016_ip = 75; continue _fun0016 }
case 76:
                    var5 = var7.type;
case 75:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.ApplicationCommandType;
                    var4 = var4.CHAT;
                    var1 = var5 === var4;
case 74:
                    if(!var1) { _fun0016_ip = 77; continue _fun0016 }
case 78:
                    var3 = var3.interaction;
                    var3 = var3.user;
                    var3 = var3.id;
                    var5 = _closure3_slot0;
                    var5 = var6 == var5;
                    var2 = undefined;
                    if(var5) { _fun0016_ip = 79; continue _fun0016 }
case 68:
                    var4 = _closure3_slot0;
                    var2 = var4.id;
case 79:
                    var1 = var3 === var2;
case 77:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getLastMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var5 = this;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 24;
            var1 = var3[var1];
            var3 = undefined;
            var2 = var2.bind(var3)(var1);
            var4 = var5.getMessages;
            var1 = arg1;
            var4 = var4.bind(var5)(var1);
            var1 = var4.toArray;
            var1 = var1.bind(var4)();
            var2 = var2.bind(var3)(var1);
            var1 = var2.reverse;
            var3 = var1.bind(var2)();
            var2 = var3.get;
            var1 = 0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getLastNonCurrentUserMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var6 = this;
            var4 = _closure1_slot21;
            var3 = var4.getCurrentUser;
            var3 = var3.bind(var4)();
            var _closure3_slot0 = var3;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 24;
            var2 = var4[var2];
            var4 = undefined;
            var3 = var3.bind(var4)(var2);
            var5 = var6.getMessages;
            var2 = arg1;
            var5 = var5.bind(var6)(var2);
            var2 = var5.toArray;
            var2 = var2.bind(var5)();
            var3 = var3.bind(var4)(var2);
            var2 = var3.reverse;
            var3 = var2.bind(var3)();
            var2 = var3.find;
            var1 = function(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.author;
                    var2 = var1.id;
                    var4 = _closure3_slot0;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0017_ip = 80; continue _fun0017 }
case 81:
                    var3 = _closure3_slot0;
                    var1 = var3.id;
case 80:
                    var1 = var2 !== var1;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'jumpedMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.get;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                var3 = var3 == var2;
                if(var3) { _fun0018_ip = 82; continue _fun0018 }
case 83:
                var1 = var2.jumpTargetId;
case 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'focusedMessageId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.get;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                var3 = var3 == var2;
                if(var3) { _fun0019_ip = 82; continue _fun0019 }
case 83:
                var1 = var2.focusTargetId;
case 82:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'hasPresent';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0020_ip = 82; continue _fun0020 }
case 83:
                var1 = var3.ready;
case 82:
                if(!var1) { _fun0020_ip = 59; continue _fun0020 }
case 32:
                var2 = var3.hasPresent;
                var1 = var2.bind(var3)();
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isReady';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getOrCreate;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.ready;
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'whenReady';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = arg2;
            var _closure3_slot2 = var2;
            var2 = var3.addConditionalChangeListener;
            var1 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    var4 = _closure3_slot0;
                    var3 = var4.isReady;
                    var2 = _closure3_slot1;
                    var2 = var3.bind(var4)(var2);
                    var3 = undefined;
                    if(var2) { _fun0021_ip = 84; continue _fun0021 }
case 73:
                    return var3;
case 84:
                    var2 = global;
                    var2 = var2.setImmediate;
                    var1 = _closure3_slot2;
                    var1 = var2.bind(var3)(var1);
                    var1 = false;
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'isLoadingMessages';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.getOrCreate;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = var1.loadingMore;
            return var1;
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'hasCurrentUserSentMessage';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var3 = _closure1_slot21;
            var2 = var3.getCurrentUser;
            var2 = var2.bind(var3)();
            var _closure3_slot0 = var2;
            var3 = var4.getMessages;
            var2 = arg1;
            var3 = var3.bind(var4)(var2);
            var2 = var3.findNewest;
            var1 = function(arg1) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.author;
                    var2 = var1.id;
                    var4 = _closure3_slot0;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0022_ip = 80; continue _fun0022 }
case 81:
                    var3 = _closure3_slot0;
                    var1 = var3.id;
case 80:
                    var1 = var2 === var1;
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hasCurrentUserSentMessageSinceAppStart';
        var5['key'] = var7;
        var6 = function value() {
            var1 = _closure1_slot27;
            return var1;
        };
        var5['value'] = var6;
        var1[14] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var8.bind(var1)(var14);
    var8['displayName'] = var2;
    var2 = 35;
    var2 = var6[var2];
    var18 = var7.bind(var1)(var2);
    var2 = {};
    var14 = function handleBackgroundSyncChannelMessages(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var18 = var1.changesByChannelId;
            var16 = var18;
            var1 = undefined;
            var11 = global;
            var10 = 'Skipping background message sync for ';
            var9 = ' cached:';
            var8 = ' ready:';
            var7 = ' hasMoreAfter:';
            var6 = ' isConnected:';
            var5 = 22;
            var4 = 21;
            var3 = null;
            var2 = undefined;
            for(var13 in var16)
case 3:
            {
case 85:
                var20 = var13;
                var21 = _closure1_slot1;
                var19 = _closure1_slot2;
                var19 = var19[var4];
                var21 = var21.bind(var1)(var19);
                var19 = var21.get;
                var24 = var19.bind(var21)(var20);
                if(var3 == var24) { _fun0023_ip = 3; continue _fun0023 }
case 86:
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var5];
                var19 = var21.bind(var1)(var19);
                var21 = var19.default;
                var19 = var21.isConnected;
                var19 = var19.bind(var21)();
                var21 = var24.cached;
                if(var21) { _fun0023_ip = 87; continue _fun0023 }
case 68:
                if(!var19) { _fun0023_ip = 87; continue _fun0023 }
case 88:
                var23 = _closure1_slot26;
                var22 = var23.log;
                var34 = var24.cached;
                var32 = var24.ready;
                var30 = var24.hasMoreAfter;
                var21 = var11.HermesInternal;
                var21 = var21.concat;
                var37 = var10;
                var36 = var20;
                var35 = var9;
                var33 = var8;
                var31 = var7;
                var29 = var6;
                var28 = var19;
                var21 = var37[var21](var36, var35, var34, var33, var32, var31, var30, var29, var28, var27);
                var21 = var22.bind(var23)(var21);
                var2 = var19;
                _fun0023_ip = 3; continue _fun0023;
case 87:
                var23 = var24.mergeDelta;
                var21 = var18[var20];
                var22 = var21.new_messages;
                var21 = var18[var20];
                var21 = var21.modified_messages;
                var20 = var18[var20];
                var20 = var20.deleted_message_ids;
                var20 = var23.bind(var24)(var22, var21, var20);
                var2 = var19;
                _fun0023_ip = 3; continue _fun0023;
            }
case 89:
            return var1;
        }
    };
    var2['BACKGROUND_SYNC_CHANNEL_MESSAGES'] = var14;
    var2['CONNECTION_OPEN'] = var13;
    var2['OVERLAY_INITIALIZE'] = var13;
    var13 = function handleCacheLoaded(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var3 = _closure1_slot29;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 31;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var4.bind(var1)(var2);
            var4 = var5.entries;
            var2 = arg1;
            var2 = var2.messages;
            var2 = var4.bind(var5)(var2);
            var9 = var3.bind(var1)(var2);
            var3 = var9.bind(var1)();
            var2 = var3.done;
            var8 = 2;
            var7 = 0;
            var6 = 1;
            var5 = 21;
            var4 = true;
            if(var2) { _fun0024_ip = 63; continue _fun0024 }
case 57:
            var11 = var3.value;
            var2 = _closure1_slot8;
            var2 = var2.bind(var1)(var11, var8);
            var15 = var2[var7];
            var14 = var2[var6];
            var11 = _closure1_slot1;
            var2 = _closure1_slot2;
            var12 = var2[var5];
            var13 = var11.bind(var1)(var12);
            var12 = var13.getOrCreate;
            var13 = var12.bind(var13)(var15);
            var12 = var13.addCachedMessages;
            var12 = var12.bind(var13)(var14, var4);
            var2 = var2[var5];
            var11 = var11.bind(var1)(var2);
            var2 = var11.commit;
            var2 = var2.bind(var11)(var12);
            var11 = var9.bind(var1)();
            var2 = var11.done;
            var3 = var11;
            if(!var2) { _fun0024_ip = 57; continue _fun0024 }
case 63:
            return var1;
        }
    };
    var2['CACHE_LOADED'] = var13;
    var13 = function handleLoadMessages() {
        var1 = true;
        return var1;
    };
    var2['LOAD_MESSAGES'] = var13;
    var13 = function handleLoadMessagesSuccess(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var9 = var1.channelId;
            var8 = var1.isBefore;
            var7 = var1.isAfter;
            var14 = var1.jump;
            var13 = var1.hasMoreBefore;
            var12 = var1.hasMoreAfter;
            var15 = var1.messages;
            var11 = var1.isStale;
            var4 = var1.truncate;
            var10 = var1.avoidInitialScroll;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var3 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var3);
            var3 = var6.getOrCreate;
            var9 = var3.bind(var6)(var9);
            var6 = var9.loadComplete;
            var3 = {};
            var3['newMessages'] = var15;
            var3['isBefore'] = var8;
            var3['isAfter'] = var7;
            var3['jump'] = var14;
            var3['hasMoreBefore'] = var13;
            var3['hasMoreAfter'] = var12;
            var3['cached'] = var11;
            var11 = true;
            var3['hasFetched'] = var11;
            var3['avoidInitialScroll'] = var10;
            var6 = var6.bind(var9)(var3);
            var3 = null;
            var3 = var3 == var4;
            if(var3) { _fun0025_ip = 20; continue _fun0025 }
case 90:
            var4 = !var8;
            if(!var4) { _fun0025_ip = 91; continue _fun0025 }
case 92:
            var4 = !var7;
case 91:
            var3 = var4;
case 20:
            if(var3) { _fun0025_ip = 93; continue _fun0025 }
case 94:
            var4 = var8;
            if(!var4) { _fun0025_ip = 95; continue _fun0025 }
case 96:
            var4 = var7;
case 95:
            var3 = var4;
case 93:
            var4 = var6;
            if(var3) { _fun0025_ip = 97; continue _fun0025 }
case 52:
            var3 = var6.truncate;
            var4 = var3.bind(var6)(var8, var7);
case 97:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS'] = var13;
    var13 = function handleLoadMessagesFailure(arg1) {
        var1 = arg1;
        var7 = var1.channelId;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 21;
        var5 = var4[var2];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.getOrCreate;
        var6 = var5.bind(var6)(var7);
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.commit;
        var5 = var6.mutate;
        var2 = {'loadingMore': false, 'error': true};
        var2 = var5.bind(var6)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['LOAD_MESSAGES_FAILURE'] = var13;
    var13 = function handleLoadMessagesSuccessCached(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var1 = arg1;
            var10 = var1.channelId;
            var12 = var1.jump;
            var7 = var1.focus;
            var6 = var1.before;
            var9 = var1.after;
            var11 = var1.limit;
            var4 = var1.truncate;
            var8 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var3 = var1[var5];
            var1 = undefined;
            var8 = var8.bind(var1)(var3);
            var3 = var8.getOrCreate;
            var10 = var3.bind(var8)(var10);
            var3 = null;
            if(!(var3 != var12)) { _fun0026_ip = 98; continue _fun0026 }
case 99:
            var8 = var12.present;
            if(var8) { _fun0026_ip = 25; continue _fun0026 }
case 98:
            var13 = var3 == var7;
            var8 = undefined;
            if(var13) { _fun0026_ip = 100; continue _fun0026 }
case 58:
            var8 = var7.messageId;
case 100:
            if(!(var3 == var8)) { _fun0026_ip = 101; continue _fun0026 }
case 102:
            var13 = var3 == var12;
            var8 = undefined;
            if(var13) { _fun0026_ip = 103; continue _fun0026 }
case 104:
            var8 = var12.messageId;
case 103:
            if(!(var3 == var8)) { _fun0026_ip = 77; continue _fun0026 }
case 105:
            var13 = var3 == var6;
            if(!var13) { _fun0026_ip = 106; continue _fun0026 }
case 107:
            var13 = var3 == var9;
case 106:
            var8 = var10;
            if(var13) { _fun0026_ip = 108; continue _fun0026 }
case 109:
            var14 = var10.loadFromCache;
            var13 = var3 != var6;
            var8 = var14.bind(var10)(var13, var11);
            _fun0026_ip = 108; continue _fun0026;
case 77:
            var17 = var10.jumpToMessage;
            var22 = var12.messageId;
            var21 = var12.flash;
            var20 = var12.offset;
            var19 = var12.returnMessageId;
            var18 = var12.jumpType;
            var23 = var10;
            var8 = var23[var17](var22, var21, var20, var19, var18, var17);
            _fun0026_ip = 108; continue _fun0026;
case 101:
            var12 = var10.focusOnMessage;
            var7 = var7.messageId;
            var8 = var12.bind(var10)(var7);
            _fun0026_ip = 108; continue _fun0026;
case 25:
            var7 = var10.jumpToPresent;
            var8 = var7.bind(var10)(var11);
case 108:
            var7 = var3 == var4;
            if(var7) { _fun0026_ip = 110; continue _fun0026 }
case 111:
            var4 = var3 == var6;
            if(!var4) { _fun0026_ip = 112; continue _fun0026 }
case 113:
            var4 = var3 == var9;
case 112:
            var7 = var4;
case 110:
            if(var7) { _fun0026_ip = 14; continue _fun0026 }
case 114:
            var4 = var3 != var6;
            if(!var4) { _fun0026_ip = 115; continue _fun0026 }
case 116:
            var4 = var3 != var9;
case 115:
            var7 = var4;
case 14:
            var4 = var8;
            if(var7) { _fun0026_ip = 117; continue _fun0026 }
case 29:
            var7 = var8.truncate;
            var6 = var3 != var6;
            var3 = var3 != var9;
            var4 = var7.bind(var8)(var6, var3);
case 117:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
        }
    };
    var2['LOAD_MESSAGES_SUCCESS_CACHED'] = var13;
    var13 = function handleLocalMessagesLoaded(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg1;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var7 = var6.bind(var1)(var4);
            var6 = var7.getOrCreate;
            var4 = var2.channelId;
            var7 = var6.bind(var7)(var4);
            var4 = var7.cached;
            var4 = !var4;
            if(!var4) { _fun0027_ip = 118; continue _fun0027 }
case 32:
            var4 = var7.ready;
case 118:
            if(var4) { _fun0027_ip = 119; continue _fun0027 }
case 69:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var4 = var4.bind(var1)(var3);
            var3 = var4.commit;
            var6 = var7.addCachedMessages;
            var5 = var2.messages;
            var2 = var2.stale;
            var2 = var6.bind(var7)(var5, var2);
            var2 = var3.bind(var4)(var2);
case 119:
            return var1;
        }
    };
    var2['LOCAL_MESSAGES_LOADED'] = var13;
    var13 = function handleLoadMessageInteractionDataSuccess(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = var1.messageId;
            var8 = var1.channelId;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.get;
            var6 = var4.bind(var6)(var8);
            var4 = null;
            if(!(var4 != var6)) { _fun0028_ip = 120; continue _fun0028 }
case 121:
            var4 = var6.has;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0028_ip = 120; continue _fun0028 }
case 41:
            var4 = var6.update;
            var3 = function(arg1) {
                var4 = arg1;
                var3 = var4.set;
                var1 = _closure2_slot0;
                var2 = var1.interactionData;
                var1 = 'interactionData';
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 120:
            var1 = false;
            return var1;
        }
    };
    var2['LOAD_MESSAGE_INTERACTION_DATA_SUCCESS'] = var13;
    var13 = function handleTruncateMessages(arg1) {
        var1 = arg1;
        var9 = var1.channelId;
        var8 = var1.truncateBottom;
        var7 = var1.truncateTop;
        var4 = _closure1_slot26;
        var3 = var4.log;
        var2 = global;
        var2 = var2.HermesInternal;
        var10 = var2.concat;
        var16 = 'Truncating messages for ';
        var14 = ' bottom:';
        var12 = ' top:';
        var15 = var9;
        var13 = var8;
        var11 = var7;
        var2 = var16[var10](var15, var14, var13, var12, var11, var10);
        var2 = var3.bind(var4)(var2);
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 21;
        var4 = var5[var2];
        var1 = undefined;
        var6 = var3.bind(var1)(var4);
        var4 = var6.getOrCreate;
        var6 = var4.bind(var6)(var9);
        var4 = var6.truncate;
        var4 = var4.bind(var6)(var8, var7);
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.commit;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['TRUNCATE_MESSAGES'] = var13;
    var13 = function handleClearMessages(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var4 = _closure1_slot26;
        var3 = var4.log;
        var1 = global;
        var1 = var1.HermesInternal;
        var6 = var1.concat;
        var1 = 'Clearing messages for ';
        var1 = var6.bind(var1)(var5);
        var1 = var3.bind(var4)(var1);
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.clear;
        var3 = var3.bind(var4)(var5);
        var3 = _closure1_slot25;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['CLEAR_MESSAGES'] = var13;
    var13 = function handleIncomingMessage(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var1 = arg1;
            var11 = var1.channelId;
            var6 = var1.message;
            var1 = var1.isPushNotification;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 21;
            var3 = var3[var7];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.getOrCreate;
            var5 = var3.bind(var5)(var11);
            if(var1) { _fun0029_ip = 122; continue _fun0029 }
case 11:
            var1 = var5.ready;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0029_ip = 123; continue _fun0029 }
case 57:
            var8 = var6.nonce;
            var3 = null;
            var3 = var3 != var8;
            if(!var3) { _fun0029_ip = 124; continue _fun0029 }
case 61:
            var9 = var6.state;
            var8 = _closure1_slot23;
            var8 = var8.SENDING;
            var3 = var9 !== var8;
case 124:
            if(!var3) { _fun0029_ip = 50; continue _fun0029 }
case 86:
            var10 = _closure1_slot25;
            var9 = var10.has;
            var8 = var6.nonce;
            var3 = var9.bind(var10)(var8);
case 50:
            var9 = var5;
            if(!var3) { _fun0029_ip = 20; continue _fun0029 }
case 125:
            var8 = var5.remove;
            var3 = var6.nonce;
            var9 = var8.bind(var5)(var3);
            var12 = _closure1_slot25;
            var10 = var12.delete;
            var8 = var6.nonce;
            var8 = var10.bind(var12)(var8);
case 20:
            var8 = var9.receiveMessage;
            var10 = _closure1_slot13;
            var3 = var10.isAtBottom;
            var10 = var3.bind(var10)(var11);
            var3 = true;
            var3 = var3 === var10;
            var9 = var8.bind(var9)(var6, var3);
            var8 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var8 = var8.bind(var4)(var3);
            var3 = var8.commit;
            var3 = var3.bind(var8)(var9);
            var1 = undefined;
case 123:
            _fun0029_ip = 126; continue _fun0029;
case 122:
            var11 = _closure1_slot26;
            var10 = var11.log;
            var9 = var6.id;
            var8 = var6.channel_id;
            var3 = 'Inserting message tapped on from a push notification';
            var3 = var10.bind(var11)(var3, var9, var8);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var7];
            var4 = var3.bind(var4)(var2);
            var3 = var4.commit;
            var2 = var5.receivePushNotification;
            var2 = var2.bind(var5)(var6);
            var2 = var3.bind(var4)(var2);
            var1 = undefined;
case 126:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var13;
    var13 = function handleSendFailed(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var7 = var1.messageId;
            var1 = var1.reason;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.getOrCreate;
            var6 = var4.bind(var6)(var8);
            var4 = null;
            if(!(var4 != var6)) { _fun0030_ip = 91; continue _fun0030 }
case 34:
            var8 = var6.has;
            var8 = var8.bind(var6)(var7);
            if(!var8) { _fun0030_ip = 91; continue _fun0030 }
case 127:
            var9 = var6.get;
            var8 = true;
            var10 = var9.bind(var6)(var7, var8);
            var9 = var4 == var10;
            var4 = undefined;
            if(var9) { _fun0030_ip = 64; continue _fun0030 }
case 128:
            var9 = var10.isPoll;
            var4 = var9.bind(var10)();
case 64:
            if(!(var8 !== var4)) { _fun0030_ip = 129; continue _fun0030 }
case 86:
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var5 = arg1;
                    var4 = var5.set;
                    var1 = _closure1_slot23;
                    var3 = var1.SEND_FAILED;
                    var1 = 'state';
                    var6 = var4.bind(var5)(var1, var3);
                    var1 = var6.isCommandType;
                    var1 = var1.bind(var6)();
                    if(var1) { _fun0031_ip = 130; continue _fun0031 }
case 83:
                    var4 = _closure2_slot0;
                    var5 = null;
                    var1 = var6;
                    if(!(var5 != var4)) { _fun0031_ip = 131; continue _fun0031 }
case 132:
                    var7 = var6.set;
                    var4 = _closure2_slot0;
                    var4 = var5 != var4;
                    var5 = '';
                    if(!var4) { _fun0031_ip = 133; continue _fun0031 }
case 70:
                    var5 = _closure2_slot0;
case 133:
                    var4 = 'interactionError';
                    var1 = var7.bind(var6)(var4, var5);
                    _fun0031_ip = 131; continue _fun0031;
case 130:
                    var5 = var6.set;
                    var7 = _closure2_slot0;
                    var4 = null;
                    var7 = var4 != var7;
                    var4 = '';
                    if(!var7) { _fun0031_ip = 78; continue _fun0031 }
case 134:
                    var4 = _closure2_slot0;
case 78:
                    var3 = 'interactionError';
                    var5 = var5.bind(var6)(var3, var4);
                    var4 = var5.set;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 23;
                    var6 = var6[var3];
                    var3 = undefined;
                    var7 = var7.bind(var3)(var6);
                    var6 = var7.addFlag;
                    var3 = var5.flags;
                    var2 = _closure1_slot22;
                    var2 = var2.EPHEMERAL;
                    var3 = var6.bind(var7)(var3, var2);
                    var2 = 'flags';
                    var1 = var4.bind(var5)(var2, var3);
case 131:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var7, var3);
            _fun0030_ip = 135; continue _fun0030;
case 129:
            var3 = var6.remove;
            var4 = var3.bind(var6)(var7);
case 135:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 91:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_SEND_FAILED'] = var13;
    var2['MESSAGE_SEND_FAILED_AUTOMOD'] = var12;
    var2['MESSAGE_EDIT_FAILED_AUTOMOD'] = var12;
    var12 = function handleMessageUpdate(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var2 = var1.message;
            var7 = var2.id;
            var1 = var1.message;
            var8 = var1.channel_id;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.getOrCreate;
            var6 = var4.bind(var6)(var8);
            var4 = null;
            if(!(var4 != var6)) { _fun0032_ip = 54; continue _fun0032 }
case 49:
            var4 = var6.has;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0032_ip = 54; continue _fun0032 }
case 76:
            var4 = var6.update;
            var3 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 25;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.updateMessageRecord;
                var1 = _closure2_slot0;
                var2 = var1.message;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 54:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var12;
    var12 = function handleMessageExplicitContentScanTimeout(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var1 = arg1;
            var8 = var1.messageId;
            var6 = var1.channelId;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var2 = var1[var5];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.get;
            var7 = var2.bind(var4)(var6);
            var2 = null;
            if(!(var2 != var7)) { _fun0033_ip = 54; continue _fun0033 }
case 136:
            var2 = var7.has;
            var2 = var2.bind(var7)(var8);
            if(!var2) { _fun0033_ip = 54; continue _fun0033 }
case 34:
            var6 = var7.update;
            var9 = _closure1_slot0;
            var2 = _closure1_slot2;
            var4 = 26;
            var4 = var2[var4];
            var4 = var9.bind(var1)(var4);
            var4 = var4.handleExplicitMediaScanTimeoutForMessage;
            var4 = var6.bind(var7)(var8, var4);
            var3 = _closure1_slot1;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 54:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT'] = var12;
    var12 = function handleMessageDelete(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var1 = arg1;
            var4 = var1.id;
            var6 = var1.channelId;
            var5 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 21;
            var3 = var1[var7];
            var1 = undefined;
            var5 = var5.bind(var1)(var3);
            var3 = var5.getOrCreate;
            var9 = var3.bind(var5)(var6);
            var8 = null;
            if(!(var8 != var9)) { _fun0034_ip = 97; continue _fun0034 }
case 137:
            var3 = var9.has;
            var3 = var3.bind(var9)(var4);
            if(!var3) { _fun0034_ip = 97; continue _fun0034 }
case 4:
            var3 = var9.revealedMessageId;
            var5 = var9;
            if(!(var3 === var4)) { _fun0034_ip = 68; continue _fun0034 }
case 133:
            var3 = var9.getAfter;
            var10 = var3.bind(var9)(var4);
            if(!(var8 != var10)) { _fun0034_ip = 100; continue _fun0034 }
case 128:
            var3 = var10.blocked;
            if(var3) { _fun0034_ip = 54; continue _fun0034 }
case 100:
            var6 = var9.mutate;
            var3 = {};
            var3['revealedMessageId'] = var8;
            var3 = var6.bind(var9)(var3);
            _fun0034_ip = 138; continue _fun0034;
case 54:
            var8 = var9.mutate;
            var6 = {};
            var10 = var10.id;
            var6['revealedMessageId'] = var10;
            var3 = var8.bind(var9)(var6);
case 138:
            var5 = var3;
case 68:
            var3 = var5.remove;
            var6 = var3.bind(var5)(var4);
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var5 = var5.bind(var1)(var3);
            var3 = var5.commit;
            var3 = var3.bind(var5)(var6);
            var3 = _closure1_slot25;
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
            return var1;
case 97:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var12;
    var12 = function handleMessageDeleteBulk(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var1 = arg1;
            var4 = var1.ids;
            var8 = var1.channelId;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var7 = 21;
            var5 = var5[var7];
            var6 = var6.bind(var1)(var5);
            var5 = var6.getOrCreate;
            var5 = var5.bind(var6)(var8);
            var9 = null;
            if(!(var9 != var5)) { _fun0035_ip = 139; continue _fun0035 }
case 69:
            var6 = var5.removeMany;
            var10 = var6.bind(var5)(var4);
            _closure2_slot0 = var10;
            if(!(var5 !== var10)) { _fun0035_ip = 140; continue _fun0035 }
case 133:
            var5 = var10.revealedMessageId;
            var6 = var10;
            if(!(var9 != var5)) { _fun0035_ip = 141; continue _fun0035 }
case 142:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 24;
            var5 = var11[var5];
            var11 = var8.bind(var1)(var5);
            var8 = var11.some;
            var5 = function(arg1) {
                var1 = _closure2_slot0;
                var2 = var1.revealedMessageId;
                var1 = arg1;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var8.bind(var11)(var4, var5);
            var6 = var10;
            if(!var5) { _fun0035_ip = 141; continue _fun0035 }
case 135:
            var8 = var10.getAfter;
            var5 = var10.revealedMessageId;
            var11 = var8.bind(var10)(var5);
            if(!(var9 != var11)) { _fun0035_ip = 91; continue _fun0035 }
case 90:
            var5 = var11.blocked;
            if(var5) { _fun0035_ip = 143; continue _fun0035 }
case 91:
            var8 = var10.mutate;
            var5 = {};
            var5['revealedMessageId'] = var9;
            var5 = var8.bind(var10)(var5);
            _fun0035_ip = 144; continue _fun0035;
case 143:
            var9 = var10.mutate;
            var8 = {};
            var11 = var11.id;
            var8['revealedMessageId'] = var11;
            var5 = var9.bind(var10)(var8);
case 144:
            _closure2_slot0 = var5;
            var6 = var5;
case 141:
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var5 = var5.bind(var1)(var3);
            var3 = var5.commit;
            var3 = var3.bind(var5)(var6);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot25;
                var2 = var3.delete;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
case 140:
            var1 = false;
            return var1;
case 139:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE_BULK'] = var12;
    var12 = function handleMessageReveal(arg1) {
        var1 = arg1;
        var8 = var1.channelId;
        var7 = var1.messageId;
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 21;
        var5 = var4[var2];
        var1 = undefined;
        var6 = var3.bind(var1)(var5);
        var5 = var6.getOrCreate;
        var6 = var5.bind(var6)(var8);
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.commit;
        var5 = var6.mutate;
        var2 = {};
        var2['revealedMessageId'] = var7;
        var2 = var5.bind(var6)(var2);
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['MESSAGE_REVEAL'] = var12;
    var12 = function handleThreadCreateLocal(arg1) {
        var1 = arg1;
        var7 = var1.channelId;
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var2 = 21;
        var4 = var5[var2];
        var1 = undefined;
        var6 = var3.bind(var1)(var4);
        var4 = var6.getOrCreate;
        var7 = var4.bind(var6)(var7);
        var6 = var7.loadComplete;
        var4 = {'newMessages': null, 'hasMoreAfter': false, 'hasMoreBefore': false};
        var8 = new Array(0);
        var4['newMessages'] = var8;
        var4 = var6.bind(var7)(var4);
        var2 = var5[var2];
        var3 = var3.bind(var1)(var2);
        var2 = var3.commit;
        var2 = var2.bind(var3)(var4);
        return var1;
    };
    var2['THREAD_CREATE_LOCAL'] = var12;
    var2['CHANNEL_DELETE'] = var11;
    var2['THREAD_DELETE'] = var11;
    var2['GUILD_DELETE'] = var11;
    var2['RELATIONSHIP_ADD'] = var10;
    var2['RELATIONSHIP_UPDATE'] = var10;
    var2['RELATIONSHIP_REMOVE'] = var10;
    var10 = function handleGuildMembersChunkBatch(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var3 = _closure1_slot29;
            var1 = arg1;
            var2 = var1.chunks;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0036_ip = 65; continue _fun0036 }
case 145:
            var6 = _closure1_slot31;
            var2 = var3.value;
            var2 = var2.guildId;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0036_ip = 145; continue _fun0036 }
case 65:
            return var1;
        }
    };
    var2['GUILD_MEMBERS_CHUNK_BATCH'] = var10;
    var10 = function handleThreadMemberListUpdate(arg1) {
        var3 = _closure1_slot31;
        var1 = arg1;
        var2 = var1.guildId;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2['THREAD_MEMBER_LIST_UPDATE'] = var10;
    var2['MESSAGE_REACTION_ADD'] = var9;
    var10 = function handleReactionBatch(arg1) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var7 = var1.messageId;
            var1 = var1.reactions;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.get;
            var6 = var4.bind(var6)(var8);
            var4 = null;
            if(!(var4 != var6)) { _fun0037_ip = 124; continue _fun0037 }
case 59:
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                    var4 = arg1;
                    var3 = var4.addReactionBatch;
                    var2 = _closure2_slot0;
                    var5 = _closure1_slot21;
                    var1 = var5.getCurrentUser;
                    var5 = var1.bind(var5)();
                    var1 = null;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if(var6) { _fun0038_ip = 146; continue _fun0038 }
case 72:
                    var1 = var5.id;
case 146:
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 124:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var10;
    var2['MESSAGE_REACTION_REMOVE'] = var9;
    var9 = function handleRemoveAllReactions(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channelId;
            var7 = var1.messageId;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var3 = var1[var5];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.get;
            var6 = var3.bind(var4)(var6);
            var3 = null;
            if(!(var3 != var6)) { _fun0039_ip = 142; continue _fun0039 }
case 136:
            var4 = var6.update;
            var3 = function(arg1) {
                var4 = arg1;
                var3 = var4.set;
                var2 = 'reactions';
                var1 = new Array(0);
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 142:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var9;
    var9 = function handleRemoveEmojiReactions(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var7 = var1.messageId;
            var1 = var1.emoji;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.get;
            var6 = var4.bind(var6)(var8);
            var4 = null;
            if(!(var4 != var6)) { _fun0040_ip = 64; continue _fun0040 }
case 69:
            var4 = var6.update;
            var3 = function(arg1) {
                var3 = arg1;
                var2 = var3.removeReactionsForEmoji;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var6)(var7, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 64:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_EMOJI'] = var9;
    var9 = function handleLogout() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 21;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.forEach;
        var3 = function(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 21;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.clear;
            var2 = arg1;
            var2 = var2.channelId;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var3 = _closure1_slot25;
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleUploadStart(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var2 = var1.message;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0041_ip = 73; continue _fun0041 }
case 147:
            var3 = var2.nonce;
case 73:
            if(!(var4 != var3)) { _fun0041_ip = 136; continue _fun0041 }
case 40:
            var4 = _closure1_slot25;
            var3 = var4.add;
            var2 = var2.nonce;
            var2 = var3.bind(var4)(var2);
case 136:
            return var1;
        }
    };
    var2['UPLOAD_START'] = var9;
    var9 = function handleUploadFail(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var7 = var1.messageId;
            var3 = null;
            if(!(var3 != var7)) { _fun0042_ip = 148; continue _fun0042 }
case 60:
            var4 = _closure1_slot25;
            var1 = var4.has;
            var1 = var1.bind(var4)(var7);
            if(var1) { _fun0042_ip = 6; continue _fun0042 }
case 149:
            var1 = false;
            return var1;
case 6:
            var6 = _closure1_slot1;
            var1 = _closure1_slot2;
            var5 = 21;
            var4 = var1[var5];
            var1 = undefined;
            var6 = var6.bind(var1)(var4);
            var4 = var6.getOrCreate;
            var4 = var4.bind(var6)(var8);
            var6 = var4.get;
            var8 = var6.bind(var4)(var7);
            if(!(var3 != var8)) { _fun0042_ip = 90; continue _fun0042 }
case 53:
            var3 = var4.remove;
            var6 = var3.bind(var4)(var7);
            var4 = var6.merge;
            var3 = new Array(1);
            var3[0] = var8;
            var4 = var4.bind(var6)(var3);
            var6 = _closure1_slot25;
            var3 = var6.delete;
            var3 = var3.bind(var6)(var7);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
case 90:
            var1 = false;
            return var1;
case 148:
            var1 = false;
            return var1;
        }
    };
    var2['UPLOAD_FAIL'] = var9;
    var4 = function handleLocalIncomingMesssage(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var1 = arg1;
            var4 = var1.message;
            var3 = _closure1_slot21;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var5 = null;
            var1 = var5 != var4;
            if(!var1) { _fun0043_ip = 72; continue _fun0043 }
case 37:
            var6 = var4.author;
            var1 = var5 != var6;
case 72:
            if(!var1) { _fun0043_ip = 150; continue _fun0043 }
case 6:
            var1 = var5 != var3;
case 150:
            if(!var1) { _fun0043_ip = 41; continue _fun0043 }
case 82:
            var4 = var4.author;
            var4 = var4.id;
            var3 = var3.id;
            var1 = var4 === var3;
case 41:
            if(!var1) { _fun0043_ip = 85; continue _fun0043 }
case 151:
            var1 = true;
            _closure1_slot27 = var1;
case 85:
            var1 = undefined;
            return var1;
        }
    };
    var2['LOCAL_MESSAGE_CREATE'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var19 = var4;
    var17 = var2;
    var2 = new var19[var8](var18, var17, var16);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 36;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/MessageStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/stores/MessageStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot28 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot28 = var1;
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
            var9 = _closure1_slot30;
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
            var7 = _closure1_slot30;
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
    var _closure1_slot29 = var1;
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
 0:
                var1 = arg1;
                var3 = var1.channelId;
                var4 = _closure1_slot12;
                var2 = var4.getChannel;
                var4 = var2.bind(var4)(var3);
                var2 = null;
                if(!(var2 == var4)) { _fun0005_ip = 64; continue _fun0005 }
 31:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.clear;
                var1 = var1.bind(var2)(var3);
 64:
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
 0:
                    var6 = arg1;
                    var4 = var6.blocked;
                    var3 = _closure1_slot18;
                    var1 = var3.isBlockedForMessage;
                    var3 = var1.bind(var3)(var6);
                    var1 = var6;
                    if(!(var4 !== var3)) { _fun0006_ip = 73; continue _fun0006 }
 34:
                    var3 = true;
                    _closure2_slot0 = var3;
                    var5 = var6.set;
                    var4 = _closure1_slot18;
                    var3 = var4.isBlockedForMessage;
                    var4 = var3.bind(var4)(var6);
                    var3 = 'blocked';
                    var1 = var5.bind(var6)(var3, var4);
 73:
                    var4 = var1.ignored;
                    var5 = _closure1_slot18;
                    var3 = var5.isIgnoredForMessage;
                    var3 = var3.bind(var5)(var1);
                    var5 = var1;
                    var1 = var5;
                    if(!(var4 !== var3)) { _fun0006_ip = 143; continue _fun0006 }
 104:
                    var3 = true;
                    _closure2_slot0 = var3;
                    var4 = var5.set;
                    var3 = _closure1_slot18;
                    var2 = var3.isIgnoredForMessage;
                    var3 = var2.bind(var3)(var5);
                    var2 = 'ignored';
                    var1 = var4.bind(var5)(var2, var3);
 143:
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
 0:
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
 40:
                var5 = var4.guild_id;
 45:
                var4 = _closure2_slot0;
                if(!(var5 === var4)) { _fun0007_ip = 134; continue _fun0007 }
 56:
                var5 = new Array(0);
                var _closure3_slot0 = var5;
                var4 = false;
                var _closure3_slot1 = var4;
                var7 = var6.forEach;
                var4 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
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
                        if(!(var8 === var2)) { _fun0008_ip = 90; continue _fun0008 }
 61:
                        var2 = var6.colorString;
                        if(!(var7 === var2)) { _fun0008_ip = 90; continue _fun0008 }
 71:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var6);
                        _fun0008_ip = 136; continue _fun0008;
 90:
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
 136:
                        return var1;
                    }
                };
                var4 = var7.bind(var6)(var4);
                var3 = _closure3_slot1;
                if(!var3) { _fun0007_ip = 134; continue _fun0007 }
 92:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 21;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.commit;
                var2 = var6.reset;
                var2 = var2.bind(var6)(var5);
                var2 = var3.bind(var4)(var2);
 134:
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var9 = function handleReaction(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
            if(!(var4 != var6)) { _fun0009_ip = 201; continue _fun0009 }
 94:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 28;
            var4 = var11[var4];
            var9 = var9.bind(var1)(var4);
            var4 = var9.shouldApplyReaction;
            var4 = var4.bind(var9)(var10);
            if(var4) { _fun0009_ip = 132; continue _fun0009 }
 128:
            var4 = false;
            return var4;
 132:
            var9 = _closure1_slot11;
            var4 = var9.getId;
            var4 = var4.bind(var9)();
            var4 = var4 === var8;
            var _closure2_slot4 = var4;
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var7 = arg1;
                    var3 = _closure2_slot1;
                    var1 = 'MESSAGE_REACTION_ADD';
                    if(!(var1 !== var3)) { _fun0010_ip = 45; continue _fun0010 }
 18:
                    var5 = var7.removeReaction;
                    var4 = _closure2_slot2;
                    var3 = _closure2_slot4;
                    var1 = _closure2_slot3;
                    var1 = var5.bind(var7)(var4, var3, var1);
                    _fun0010_ip = 79; continue _fun0010;
 45:
                    var6 = var7.addReaction;
                    var11 = _closure2_slot2;
                    var10 = _closure2_slot4;
                    var3 = _closure2_slot0;
                    var9 = var3.colors;
                    var8 = _closure2_slot3;
                    var12 = var7;
                    var1 = var12[var6](var11, var10, var9, var8, var7);
 79:
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
 201:
            var1 = false;
            return var1;
        }
    };
    var12 = function handleMessageSendFailedAutomod(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
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
            if(var4) { _fun0011_ip = 110; continue _fun0011 }
 106:
            var4 = false;
            return var4;
 110:
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var4 = arg1;
                    var5 = var4.embeds;
                    var1 = null;
                    var1 = var1 == var5;
                    var7 = undefined;
                    var2 = undefined;
                    if(var1) { _fun0012_ip = 66; continue _fun0012 }
 22:
                    var3 = var5.filter;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 30;
                    var1 = var8[var1];
                    var1 = var6.bind(var7)(var1);
                    var1 = var1.isNotAutomodEmbed;
                    var1 = var3.bind(var5)(var1);
                    var2 = var1.length;
 66:
                    var1 = 0;
                    var5 = var4;
                    if(!(var2 > var1)) { _fun0012_ip = 94; continue _fun0012 }
 75:
                    var3 = var4.set;
                    var2 = 'embeds';
                    var1 = new Array(0);
                    var5 = var3.bind(var4)(var2, var1);
 94:
                    var3 = _closure2_slot0;
                    var2 = 'MESSAGE_SEND_FAILED_AUTOMOD';
                    var1 = var5;
                    if(!(var2 === var3)) { _fun0012_ip = 177; continue _fun0012 }
 112:
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
 177:
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
 0:
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
                if(var1) { _fun0013_ip = 69; continue _fun0013 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0013_ip = 105; continue _fun0013;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
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
 0:
                var3 = arg1;
                var4 = _closure1_slot9;
                var2 = var4.hasViewingRoles;
                var2 = var2.bind(var4)();
                if(!var2) { _fun0014_ip = 157; continue _fun0014 }
 28:
                var4 = _closure1_slot12;
                var2 = var4.getChannel;
                var7 = var2.bind(var4)(var3);
                var2 = null;
                var2 = var2 == var7;
                var5 = undefined;
                var6 = undefined;
                if(var2) { _fun0014_ip = 65; continue _fun0014 }
 55:
                var2 = var7.getGuildId;
                var6 = var2.bind(var7)();
 65:
                var4 = _closure1_slot9;
                var2 = var4.isViewingRoles;
                var2 = var2.bind(var4)(var6);
                if(!var2) { _fun0014_ip = 157; continue _fun0014 }
 83:
                var6 = _closure1_slot17;
                var4 = var6.can;
                var2 = _closure1_slot24;
                var2 = var2.VIEW_CHANNEL;
                var2 = var4.bind(var6)(var2, var7);
                if(var2) { _fun0014_ip = 157; continue _fun0014 }
 112:
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
 157:
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
 0:
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
                    if(var5) { _fun0015_ip = 52; continue _fun0015 }
 43:
                    var1 = _closure3_slot0;
                    var2 = var1.id;
 52:
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
 0:
                    var3 = arg1;
                    var1 = var3.interaction;
                    var6 = null;
                    var4 = var6 == var1;
                    var2 = undefined;
                    var5 = undefined;
                    if(var4) { _fun0016_ip = 27; continue _fun0016 }
 22:
                    var5 = var1.type;
 27:
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var8 = 33;
                    var1 = var1[var8];
                    var1 = var7.bind(var2)(var1);
                    var1 = var1.InteractionTypes;
                    var1 = var1.APPLICATION_COMMAND;
                    var1 = var5 === var1;
                    if(!var1) { _fun0016_ip = 122; continue _fun0016 }
 69:
                    var7 = var3.interactionData;
                    var9 = var6 == var7;
                    var5 = undefined;
                    if(var9) { _fun0016_ip = 89; continue _fun0016 }
 84:
                    var5 = var7.type;
 89:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var8];
                    var4 = var7.bind(var2)(var4);
                    var4 = var4.ApplicationCommandType;
                    var4 = var4.CHAT;
                    var1 = var5 === var4;
 122:
                    if(!var1) { _fun0016_ip = 170; continue _fun0016 }
 125:
                    var3 = var3.interaction;
                    var3 = var3.user;
                    var3 = var3.id;
                    var5 = _closure3_slot0;
                    var5 = var6 == var5;
                    var2 = undefined;
                    if(var5) { _fun0016_ip = 166; continue _fun0016 }
 157:
                    var4 = _closure3_slot0;
                    var2 = var4.id;
 166:
                    var1 = var3 === var2;
 170:
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
 0:
                    var1 = arg1;
                    var1 = var1.author;
                    var2 = var1.id;
                    var4 = _closure3_slot0;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0017_ip = 41; continue _fun0017 }
 32:
                    var3 = _closure3_slot0;
                    var1 = var3.id;
 41:
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
 0:
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
                if(var3) { _fun0018_ip = 53; continue _fun0018 }
 47:
                var1 = var2.jumpTargetId;
 53:
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
 0:
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
                if(var3) { _fun0019_ip = 53; continue _fun0019 }
 47:
                var1 = var2.focusTargetId;
 53:
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
 0:
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
                if(!var1) { _fun0020_ip = 53; continue _fun0020 }
 47:
                var1 = var3.ready;
 53:
                if(!var1) { _fun0020_ip = 66; continue _fun0020 }
 56:
                var2 = var3.hasPresent;
                var1 = var2.bind(var3)();
 66:
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
 0:
                    var4 = _closure3_slot0;
                    var3 = var4.isReady;
                    var2 = _closure3_slot1;
                    var2 = var3.bind(var4)(var2);
                    var3 = undefined;
                    if(var2) { _fun0021_ip = 29; continue _fun0021 }
 27:
                    return var3;
 29:
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
 0:
                    var1 = arg1;
                    var1 = var1.author;
                    var2 = var1.id;
                    var4 = _closure3_slot0;
                    var1 = null;
                    var4 = var1 == var4;
                    var1 = undefined;
                    if(var4) { _fun0022_ip = 41; continue _fun0022 }
 32:
                    var3 = _closure3_slot0;
                    var1 = var3.id;
 41:
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
 0:
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
 70:
            {
 82:
                var20 = var13;
                var21 = _closure1_slot1;
                var19 = _closure1_slot2;
                var19 = var19[var4];
                var21 = var21.bind(var1)(var19);
                var19 = var21.get;
                var24 = var19.bind(var21)(var20);
                if(var3 == var24) { _fun0023_ip = 70; continue _fun0023 }
 116:
                var21 = _closure1_slot0;
                var19 = _closure1_slot2;
                var19 = var19[var5];
                var19 = var21.bind(var1)(var19);
                var21 = var19.default;
                var19 = var21.isConnected;
                var19 = var19.bind(var21)();
                var21 = var24.cached;
                if(var21) { _fun0023_ip = 237; continue _fun0023 }
 157:
                if(!var19) { _fun0023_ip = 237; continue _fun0023 }
 160:
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
                _fun0023_ip = 70; continue _fun0023;
 237:
                var23 = var24.mergeDelta;
                var21 = var18[var20];
                var22 = var21.new_messages;
                var21 = var18[var20];
                var21 = var21.modified_messages;
                var20 = var18[var20];
                var20 = var20.deleted_message_ids;
                var20 = var23.bind(var24)(var22, var21, var20);
                var2 = var19;
                _fun0023_ip = 70; continue _fun0023;
            }
 290:
            return var1;
        }
    };
    var2['BACKGROUND_SYNC_CHANNEL_MESSAGES'] = var14;
    var2['CONNECTION_OPEN'] = var13;
    var2['OVERLAY_INITIALIZE'] = var13;
    var13 = function handleCacheLoaded(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
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
            if(var2) { _fun0024_ip = 177; continue _fun0024 }
 79:
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
            if(!var2) { _fun0024_ip = 79; continue _fun0024 }
 177:
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
 0:
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
            if(var3) { _fun0025_ip = 179; continue _fun0025 }
 167:
            var4 = !var8;
            if(!var4) { _fun0025_ip = 176; continue _fun0025 }
 173:
            var4 = !var7;
 176:
            var3 = var4;
 179:
            if(var3) { _fun0025_ip = 194; continue _fun0025 }
 182:
            var4 = var8;
            if(!var4) { _fun0025_ip = 191; continue _fun0025 }
 188:
            var4 = var7;
 191:
            var3 = var4;
 194:
            var4 = var6;
            if(var3) { _fun0025_ip = 212; continue _fun0025 }
 200:
            var3 = var6.truncate;
            var4 = var3.bind(var6)(var8, var7);
 212:
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
 0:
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
 86:
            var8 = var12.present;
            if(var8) { _fun0026_ip = 235; continue _fun0026 }
 98:
            var13 = var3 == var7;
            var8 = undefined;
            if(var13) { _fun0026_ip = 112; continue _fun0026 }
 107:
            var8 = var7.messageId;
 112:
            if(!(var3 == var8)) { _fun0026_ip = 215; continue _fun0026 }
 116:
            var13 = var3 == var12;
            var8 = undefined;
            if(var13) { _fun0026_ip = 130; continue _fun0026 }
 125:
            var8 = var12.messageId;
 130:
            if(!(var3 == var8)) { _fun0026_ip = 171; continue _fun0026 }
 134:
            var13 = var3 == var6;
            if(!var13) { _fun0026_ip = 145; continue _fun0026 }
 141:
            var13 = var3 == var9;
 145:
            var8 = var10;
            if(var13) { _fun0026_ip = 246; continue _fun0026 }
 151:
            var14 = var10.loadFromCache;
            var13 = var3 != var6;
            var8 = var14.bind(var10)(var13, var11);
            _fun0026_ip = 246; continue _fun0026;
 171:
            var17 = var10.jumpToMessage;
            var22 = var12.messageId;
            var21 = var12.flash;
            var20 = var12.offset;
            var19 = var12.returnMessageId;
            var18 = var12.jumpType;
            var23 = var10;
            var8 = var23[var17](var22, var21, var20, var19, var18, var17);
            _fun0026_ip = 246; continue _fun0026;
 215:
            var12 = var10.focusOnMessage;
            var7 = var7.messageId;
            var8 = var12.bind(var10)(var7);
            _fun0026_ip = 246; continue _fun0026;
 235:
            var7 = var10.jumpToPresent;
            var8 = var7.bind(var10)(var11);
 246:
            var7 = var3 == var4;
            if(var7) { _fun0026_ip = 267; continue _fun0026 }
 253:
            var4 = var3 == var6;
            if(!var4) { _fun0026_ip = 264; continue _fun0026 }
 260:
            var4 = var3 == var9;
 264:
            var7 = var4;
 267:
            if(var7) { _fun0026_ip = 284; continue _fun0026 }
 270:
            var4 = var3 != var6;
            if(!var4) { _fun0026_ip = 281; continue _fun0026 }
 277:
            var4 = var3 != var9;
 281:
            var7 = var4;
 284:
            var4 = var8;
            if(var7) { _fun0026_ip = 310; continue _fun0026 }
 290:
            var7 = var8.truncate;
            var6 = var3 != var6;
            var3 = var3 != var9;
            var4 = var7.bind(var8)(var6, var3);
 310:
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
 0:
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
            if(!var4) { _fun0027_ip = 62; continue _fun0027 }
 56:
            var4 = var7.ready;
 62:
            if(var4) { _fun0027_ip = 117; continue _fun0027 }
 65:
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
 117:
            return var1;
        }
    };
    var2['LOCAL_MESSAGES_LOADED'] = var13;
    var13 = function handleLoadMessageInteractionDataSuccess(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
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
 60:
            var4 = var6.has;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0028_ip = 120; continue _fun0028 }
 73:
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
 120:
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
 0:
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
            if(var1) { _fun0029_ip = 244; continue _fun0029 }
 61:
            var1 = var5.ready;
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0029_ip = 242; continue _fun0029 }
 79:
            var8 = var6.nonce;
            var3 = null;
            var3 = var3 != var8;
            if(!var3) { _fun0029_ip = 113; continue _fun0029 }
 94:
            var9 = var6.state;
            var8 = _closure1_slot23;
            var8 = var8.SENDING;
            var3 = var9 !== var8;
 113:
            if(!var3) { _fun0029_ip = 136; continue _fun0029 }
 116:
            var10 = _closure1_slot25;
            var9 = var10.has;
            var8 = var6.nonce;
            var3 = var9.bind(var10)(var8);
 136:
            var9 = var5;
            if(!var3) { _fun0029_ip = 179; continue _fun0029 }
 142:
            var8 = var5.remove;
            var3 = var6.nonce;
            var9 = var8.bind(var5)(var3);
            var12 = _closure1_slot25;
            var10 = var12.delete;
            var8 = var6.nonce;
            var8 = var10.bind(var12)(var8);
 179:
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
 242:
            _fun0029_ip = 320; continue _fun0029;
 244:
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
 320:
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var13;
    var13 = function handleSendFailed(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
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
            if(!(var4 != var6)) { _fun0030_ip = 176; continue _fun0030 }
 67:
            var8 = var6.has;
            var8 = var8.bind(var6)(var7);
            if(!var8) { _fun0030_ip = 176; continue _fun0030 }
 80:
            var9 = var6.get;
            var8 = true;
            var10 = var9.bind(var6)(var7, var8);
            var9 = var4 == var10;
            var4 = undefined;
            if(var9) { _fun0030_ip = 112; continue _fun0030 }
 102:
            var9 = var10.isPoll;
            var4 = var9.bind(var10)();
 112:
            if(!(var8 !== var4)) { _fun0030_ip = 135; continue _fun0030 }
 116:
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                    var5 = arg1;
                    var4 = var5.set;
                    var1 = _closure1_slot23;
                    var3 = var1.SEND_FAILED;
                    var1 = 'state';
                    var6 = var4.bind(var5)(var1, var3);
                    var1 = var6.isCommandType;
                    var1 = var1.bind(var6)();
                    if(var1) { _fun0031_ip = 99; continue _fun0031 }
 47:
                    var4 = _closure2_slot0;
                    var5 = null;
                    var1 = var6;
                    if(!(var5 != var4)) { _fun0031_ip = 199; continue _fun0031 }
 63:
                    var7 = var6.set;
                    var4 = _closure2_slot0;
                    var4 = var5 != var4;
                    var5 = '';
                    if(!var4) { _fun0031_ip = 87; continue _fun0031 }
 83:
                    var5 = _closure2_slot0;
 87:
                    var4 = 'interactionError';
                    var1 = var7.bind(var6)(var4, var5);
                    _fun0031_ip = 199; continue _fun0031;
 99:
                    var5 = var6.set;
                    var7 = _closure2_slot0;
                    var4 = null;
                    var7 = var4 != var7;
                    var4 = '';
                    if(!var7) { _fun0031_ip = 125; continue _fun0031 }
 121:
                    var4 = _closure2_slot0;
 125:
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
 199:
                    return var1;
                }
            };
            var4 = var4.bind(var6)(var7, var3);
            _fun0030_ip = 146; continue _fun0030;
 135:
            var3 = var6.remove;
            var4 = var3.bind(var6)(var7);
 146:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var3 = var3.bind(var1)(var2);
            var2 = var3.commit;
            var2 = var2.bind(var3)(var4);
            return var1;
 176:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_SEND_FAILED'] = var13;
    var2['MESSAGE_SEND_FAILED_AUTOMOD'] = var12;
    var2['MESSAGE_EDIT_FAILED_AUTOMOD'] = var12;
    var12 = function handleMessageUpdate(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
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
            if(!(var4 != var6)) { _fun0032_ip = 131; continue _fun0032 }
 71:
            var4 = var6.has;
            var4 = var4.bind(var6)(var7);
            if(!var4) { _fun0032_ip = 131; continue _fun0032 }
 84:
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
 131:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_UPDATE'] = var12;
    var12 = function handleMessageExplicitContentScanTimeout(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
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
            if(!(var2 != var7)) { _fun0033_ip = 131; continue _fun0033 }
 54:
            var2 = var7.has;
            var2 = var2.bind(var7)(var8);
            if(!var2) { _fun0033_ip = 131; continue _fun0033 }
 67:
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
 131:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT'] = var12;
    var12 = function handleMessageDelete(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
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
            if(!(var8 != var9)) { _fun0034_ip = 212; continue _fun0034 }
 58:
            var3 = var9.has;
            var3 = var3.bind(var9)(var4);
            if(!var3) { _fun0034_ip = 212; continue _fun0034 }
 74:
            var3 = var9.revealedMessageId;
            var5 = var9;
            if(!(var3 === var4)) { _fun0034_ip = 157; continue _fun0034 }
 87:
            var3 = var9.getAfter;
            var10 = var3.bind(var9)(var4);
            if(!(var8 != var10)) { _fun0034_ip = 111; continue _fun0034 }
 102:
            var3 = var10.blocked;
            if(var3) { _fun0034_ip = 131; continue _fun0034 }
 111:
            var6 = var9.mutate;
            var3 = {};
            var3['revealedMessageId'] = var8;
            var3 = var6.bind(var9)(var3);
            _fun0034_ip = 154; continue _fun0034;
 131:
            var8 = var9.mutate;
            var6 = {};
            var10 = var10.id;
            var6['revealedMessageId'] = var10;
            var3 = var8.bind(var9)(var6);
 154:
            var5 = var3;
 157:
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
 212:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_DELETE'] = var12;
    var12 = function handleMessageDeleteBulk(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
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
            if(!(var9 != var5)) { _fun0035_ip = 275; continue _fun0035 }
 65:
            var6 = var5.removeMany;
            var10 = var6.bind(var5)(var4);
            _closure2_slot0 = var10;
            if(!(var5 !== var10)) { _fun0035_ip = 271; continue _fun0035 }
 87:
            var5 = var10.revealedMessageId;
            var6 = var10;
            if(!(var9 != var5)) { _fun0035_ip = 226; continue _fun0035 }
 103:
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
            if(!var5) { _fun0035_ip = 226; continue _fun0035 }
 146:
            var8 = var10.getAfter;
            var5 = var10.revealedMessageId;
            var11 = var8.bind(var10)(var5);
            if(!(var9 != var11)) { _fun0035_ip = 176; continue _fun0035 }
 167:
            var5 = var11.blocked;
            if(var5) { _fun0035_ip = 196; continue _fun0035 }
 176:
            var8 = var10.mutate;
            var5 = {};
            var5['revealedMessageId'] = var9;
            var5 = var8.bind(var10)(var5);
            _fun0035_ip = 219; continue _fun0035;
 196:
            var9 = var10.mutate;
            var8 = {};
            var11 = var11.id;
            var8['revealedMessageId'] = var11;
            var5 = var9.bind(var10)(var8);
 219:
            _closure2_slot0 = var5;
            var6 = var5;
 226:
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
 271:
            var1 = false;
            return var1;
 275:
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
 0:
            var3 = _closure1_slot29;
            var1 = arg1;
            var2 = var1.chunks;
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0036_ip = 69; continue _fun0036 }
 35:
            var6 = _closure1_slot31;
            var2 = var3.value;
            var2 = var2.guildId;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0036_ip = 35; continue _fun0036 }
 69:
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
 0:
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
            if(!(var4 != var6)) { _fun0037_ip = 113; continue _fun0037 }
 66:
            var4 = var6.update;
            var3 = function(arg1) {
                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                    var4 = arg1;
                    var3 = var4.addReactionBatch;
                    var2 = _closure2_slot0;
                    var5 = _closure1_slot21;
                    var1 = var5.getCurrentUser;
                    var5 = var1.bind(var5)();
                    var1 = null;
                    var6 = var1 == var5;
                    var1 = undefined;
                    if(var6) { _fun0038_ip = 48; continue _fun0038 }
 43:
                    var1 = var5.id;
 48:
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
 113:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_ADD_MANY'] = var10;
    var2['MESSAGE_REACTION_REMOVE'] = var9;
    var9 = function handleRemoveAllReactions(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
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
            if(!(var3 != var6)) { _fun0039_ip = 103; continue _fun0039 }
 54:
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
 103:
            var1 = false;
            return var1;
        }
    };
    var2['MESSAGE_REACTION_REMOVE_ALL'] = var9;
    var9 = function handleRemoveEmojiReactions(arg1) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
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
            if(!(var4 != var6)) { _fun0040_ip = 113; continue _fun0040 }
 66:
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
 113:
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
 0:
            var1 = arg1;
            var2 = var1.message;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0041_ip = 27; continue _fun0041 }
 21:
            var3 = var2.nonce;
 27:
            if(!(var4 != var3)) { _fun0041_ip = 54; continue _fun0041 }
 31:
            var4 = _closure1_slot25;
            var3 = var4.add;
            var2 = var2.nonce;
            var2 = var3.bind(var4)(var2);
 54:
            return var1;
        }
    };
    var2['UPLOAD_START'] = var9;
    var9 = function handleUploadFail(arg1) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
            var1 = arg1;
            var8 = var1.channelId;
            var7 = var1.messageId;
            var3 = null;
            if(!(var3 != var7)) { _fun0042_ip = 171; continue _fun0042 }
 22:
            var4 = _closure1_slot25;
            var1 = var4.has;
            var1 = var1.bind(var4)(var7);
            if(var1) { _fun0042_ip = 46; continue _fun0042 }
 42:
            var1 = false;
            return var1;
 46:
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
            if(!(var3 != var8)) { _fun0042_ip = 167; continue _fun0042 }
 93:
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
 167:
            var1 = false;
            return var1;
 171:
            var1 = false;
            return var1;
        }
    };
    var2['UPLOAD_FAIL'] = var9;
    var4 = function handleLocalIncomingMesssage(arg1) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
            var1 = arg1;
            var4 = var1.message;
            var3 = _closure1_slot21;
            var1 = var3.getCurrentUser;
            var3 = var1.bind(var3)();
            var5 = null;
            var1 = var5 != var4;
            if(!var1) { _fun0043_ip = 43; continue _fun0043 }
 33:
            var6 = var4.author;
            var1 = var5 != var6;
 43:
            if(!var1) { _fun0043_ip = 50; continue _fun0043 }
 46:
            var1 = var5 != var3;
 50:
            if(!var1) { _fun0043_ip = 73; continue _fun0043 }
 53:
            var4 = var4.author;
            var4 = var4.id;
            var3 = var3.id;
            var1 = var4 === var3;
 73:
            if(!var1) { _fun0043_ip = 82; continue _fun0043 }
 76:
            var1 = true;
            _closure1_slot27 = var1;
 82:
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
// app/modules/polls/PollsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var11;
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
    var8 = function generateLocalCreationAnswerId() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 7;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = var2.v4;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot14 = var8;
    var7 = function isAnswerFilled(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var4 = var1.text;
            var1 = null;
            var3 = var1 == var4;
            var2 = undefined;
            if(var3) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var3 = var4.trim;
            var2 = var3.bind(var4)();
case 36:
            var1 = var1 != var2;
            if(!var1) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
case 38:
            return var1;
        }
    };
    var _closure1_slot15 = var7;
    var6 = function createPollExpiryTimestamp(arg1) {
        var1 = global;
        var3 = var1.Date;
        var2 = var1.Date;
        var1 = var2.now;
        var2 = var1.bind(var2)();
        var5 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 10;
        var4 = var4[var1];
        var1 = undefined;
        var1 = var5.bind(var1)(var4);
        var1 = var1.Millis;
        var4 = var1.HOUR;
        var1 = arg1;
        var1 = var1 * var4;
        var6 = var2 + var1;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var7 = var2;
        var1 = new var7[var3](var6, var5);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.toISOString;
        var1 = var1.bind(var2)();
        return var1;
    };
    var _closure1_slot16 = var6;
    var1 = function getPollResultsPollName(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg2;
            var1 = arg1;
            var2 = var1.embeds;
            var1 = 0;
            var3 = var2[var1];
            var2 = null;
            var4 = var2 == var3;
            var6 = undefined;
            var1 = undefined;
            if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var7 = var3.fields;
            var3 = var2 == var7;
            var1 = undefined;
            if(var3) { _fun0005_ip = 40; continue _fun0005 }
case 2:
            var4 = var7.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.rawName;
                var1 = 'poll_question_text';
                var1 = var1 === var2;
                return var1;
            };
            var3 = var4.bind(var7)(var3);
            var4 = var2 == var3;
            var1 = undefined;
            if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 42:
            var1 = var3.rawValue;
case 40:
            var3 = var2 != var1;
            var4 = '';
            if(!var3) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var4 = var1;
case 43:
            var1 = var4;
            if(!(var2 != var5)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var3 = var3.bind(var6)(var2);
            var2 = var3.truncateText;
            var1 = var2.bind(var3)(var4, var5);
case 45:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var5 = function getSampleOfVoterUsernamesForAnswer(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var3 = arg1;
            var2 = var3.getChannelId;
            var6 = var2.bind(var3)();
            var10 = _closure1_slot4;
            var9 = var10.getReactions;
            var15 = var3.id;
            var7 = {'id': null, 'name': '', 'animated': false};
            var3 = arg2;
            var7['id'] = var3;
            var13 = _closure1_slot9;
            var11 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 14;
            var3 = var5[var3];
            var5 = undefined;
            var3 = var11.bind(var5)(var3);
            var3 = var3.ReactionTypes;
            var12 = var3.VOTE;
            var17 = var10;
            var16 = var6;
            var14 = var7;
            var10 = var17[var9](var16, var15, var14, var13, var12, var11);
            var4 = _closure1_slot3;
            var3 = var4.getChannel;
            var6 = var3.bind(var4)(var6);
            var _closure2_slot0 = var6;
            var8 = null;
            var4 = var8 == var6;
            var3 = null;
            if(var4) { _fun0006_ip = 47; continue _fun0006 }
case 48:
            var4 = var6.isPrivate;
            var4 = var4.bind(var6)();
            var3 = null;
            if(var4) { _fun0006_ip = 47; continue _fun0006 }
case 49:
            var4 = var6.getGuildId;
            var3 = var4.bind(var6)();
case 47:
            var _closure2_slot1 = var3;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 15;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var3 = global;
            var7 = var3.Array;
            var6 = var7.from;
            var9 = var8 == var10;
            var3 = undefined;
            if(var9) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var9 = var10.values;
            var3 = var9.bind(var10)();
case 50:
            if(!(var8 == var3)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var3 = new Array(0);
case 52:
            var3 = var6.bind(var7)(var3);
            var5 = var4.bind(var5)(var3);
            var4 = var5.reject;
            var3 = function(arg1) {
                var3 = _closure1_slot7;
                var2 = var3.isBlockedOrIgnored;
                var1 = arg1;
                var1 = var1.id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var4.bind(var5)(var3);
            var3 = var4.take;
            var2 = _closure1_slot9;
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var1 = var2[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var1);
                    var4 = var5.getName;
                    var3 = _closure2_slot1;
                    var7 = _closure2_slot0;
                    var6 = null;
                    var6 = var6 == var7;
                    if(var6) { _fun0007_ip = 54; continue _fun0007 }
case 55:
                    var1 = _closure2_slot0;
                    var2 = var1.id;
case 54:
                    var1 = arg1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                }
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.value;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot18 = var5;
    var4 = function formatVoterTooltipText(arg1, arg2) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var9 = arg1;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.max;
            var4 = var9.length;
            var1 = arg2;
            var1 = var1 - var4;
            var7 = 0;
            var8 = var2.bind(var3)(var7, var1);
            var1 = var9.length;
            var10 = 1;
            if(!(var10 !== var1)) { _fun0008_ip = 56; continue _fun0008 }
case 55:
            var1 = var9.length;
            var11 = 2;
            if(!(var11 !== var1)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
            var2 = var9.length;
            var1 = 3;
            if(!(var1 !== var2)) { _fun0008_ip = 14; continue _fun0008 }
case 59:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 13;
            var3 = var6[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var6[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.yVX6kJ;
            var1 = {};
            var5 = var8.toLocaleString;
            var5 = var5.bind(var8)();
            var1['n'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0008_ip = 60; continue _fun0008;
case 14:
            if(!(!(var8 > var7))) { _fun0008_ip = 61; continue _fun0008 }
case 62:
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 13;
            var4 = var12[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var12[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.0UzBMz;
            var2 = {};
            var6 = var9[var7];
            var2['a'] = var6;
            var6 = var9[var10];
            var2['b'] = var6;
            var6 = var9[var11];
            var2['c'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            _fun0008_ip = 63; continue _fun0008;
case 61:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var3 = 13;
            var5 = var13[var3];
            var4 = undefined;
            var5 = var12.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var13[var3];
            var3 = var12.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.ThXp+P;
            var3 = {};
            var12 = var9[var7];
            var3['a'] = var12;
            var12 = var9[var10];
            var3['b'] = var12;
            var11 = var9[var11];
            var3['c'] = var11;
            var11 = var8.toLocaleString;
            var11 = var11.bind(var8)();
            var3['n'] = var11;
            var2 = var5.bind(var6)(var4, var3);
case 63:
            var1 = var2;
case 60:
            _fun0008_ip = 64; continue _fun0008;
case 57:
            if(!(!(var8 > var7))) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 13;
            var4 = var11[var2];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var11[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.O5+f5e;
            var2 = {};
            var6 = var9[var7];
            var2['a'] = var6;
            var6 = var9[var10];
            var2['b'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            _fun0008_ip = 67; continue _fun0008;
case 65:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 13;
            var5 = var12[var3];
            var4 = undefined;
            var5 = var11.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var12[var3];
            var3 = var11.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.YBnZKy;
            var3 = {};
            var11 = var9[var7];
            var3['a'] = var11;
            var10 = var9[var10];
            var3['b'] = var10;
            var10 = var8.toLocaleString;
            var10 = var10.bind(var8)();
            var3['n'] = var10;
            var2 = var5.bind(var6)(var4, var3);
case 67:
            var1 = var2;
case 64:
            _fun0008_ip = 68; continue _fun0008;
case 56:
            if(!(!(var8 > var7))) { _fun0008_ip = 69; continue _fun0008 }
case 70:
            var2 = var9[var7];
            _fun0008_ip = 71; continue _fun0008;
case 69:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 13;
            var5 = var11[var3];
            var4 = undefined;
            var5 = var10.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.t;
            var4 = var3.SV/iZm;
            var3 = {};
            var7 = var9[var7];
            var3['a'] = var7;
            var7 = var8.toLocaleString;
            var7 = var7.bind(var8)();
            var3['n'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 71:
            var1 = var2;
case 68:
            return var1;
        }
    };
    var _closure1_slot19 = var4;
    var1 = global;
    var14 = var1.Object;
    var13 = var14.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var13.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var11[var1];
    var1 = undefined;
    var9 = var12.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 1;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 2;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var11[var9];
    var9 = var12.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.POLL_RESULT_MESSAGE_POLL_TITLE_MAX_VISIBLE_CHARS;
    var _closure1_slot8 = var12;
    var9 = var9.VOTES_TOOLTIP_MAX_USERS;
    var _closure1_slot9 = var9;
    var9 = 6;
    var9 = var11[var9];
    var9 = var10.bind(var1)(var9);
    var12 = var9.ChannelTypesSets;
    var _closure1_slot10 = var12;
    var9 = var9.Permissions;
    var _closure1_slot11 = var9;
    var9 = 17;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/polls/PollsUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var9 = function generateEmptyPollAnswer() {
        var1 = {};
        var3 = undefined;
        var1['text'] = var3;
        var1['image'] = var3;
        var2 = _closure1_slot14;
        var2 = var2.bind(var3)();
        var1['localCreationAnswerId'] = var2;
        return var1;
    };
    var3['generateEmptyPollAnswer'] = var9;
    var3['generateLocalCreationAnswerId'] = var8;
    var8 = function filterOutUUID(arg1) {
        var4 = arg1;
        var3 = var4.replace;
        var2 = /\b[a-f\d]{8}-(?:[a-f\d]{4}-){3}[a-f\d]{12}-\b/i;
        var1 = '';
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['filterOutUUID'] = var8;
    var8 = function hasNonVoteReactions(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = _closure1_slot12;
            var1 = arg1;
            var1 = var1.reactions;
            var5 = undefined;
            var4 = var2.bind(var5)(var1);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = null;
            if(var1) { _fun0009_ip = 42; continue _fun0009 }
case 72:
            var1 = var2.value;
            var1 = var1.me_vote;
            if(!(var3 != var1)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var6 = var4.bind(var5)();
            var1 = var6.done;
            var2 = var6;
            if(var1) { _fun0009_ip = 42; continue _fun0009 }
case 30:
            _fun0009_ip = 72; continue _fun0009;
case 73:
            var1 = true;
            return var1;
case 42:
            var1 = false;
            return var1;
        }
    };
    var3['hasNonVoteReactions'] = var8;
    var8 = function useCanPostPollsInChannel(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var2;
                if(!var1) { _fun0010_ip = 54; continue _fun0010 }
case 75:
                var2 = _closure2_slot0;
                var3 = var2.id;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 9;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var4);
                var2 = var2.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID;
                var1 = var3 !== var2;
case 54:
                if(!var1) { _fun0010_ip = 76; continue _fun0010 }
case 58:
                var2 = _closure1_slot10;
                var4 = var2.POLLS;
                var3 = var4.has;
                var2 = _closure2_slot0;
                var2 = var2.type;
                var2 = var3.bind(var4)(var2);
                var3 = !var2;
                var2 = !var3;
                if(var3) { _fun0010_ip = 77; continue _fun0010 }
case 78:
                var4 = _closure2_slot0;
                var3 = var4.isPrivate;
                var3 = var3.bind(var4)();
                var4 = !var3;
                var3 = !var4;
                if(!var4) { _fun0010_ip = 79; continue _fun0010 }
case 80:
                var9 = _closure1_slot6;
                var8 = var9.can;
                var4 = _closure1_slot11;
                var7 = var4.SEND_MESSAGES;
                var4 = _closure2_slot0;
                var4 = var8.bind(var9)(var7, var4);
                if(!var4) { _fun0010_ip = 81; continue _fun0010 }
case 14:
                var8 = _closure1_slot6;
                var7 = var8.can;
                var6 = _closure1_slot11;
                var6 = var6.SEND_POLLS;
                var5 = _closure2_slot0;
                var4 = var7.bind(var8)(var6, var5);
case 81:
                var3 = var4;
case 79:
                var2 = var3;
case 77:
                var1 = var2;
case 76:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanPostPollsInChannel'] = var8;
    var8 = function isPollCreationEmpty(arg1, arg2) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var4 = arg2;
            var1 = arg1;
            var2 = var1.length;
            var1 = 0;
            var1 = var1 === var2;
            if(!var1) { _fun0011_ip = 82; continue _fun0011 }
case 29:
            var3 = var4.find;
            var2 = function(arg1) {
                var3 = _closure1_slot15;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var3 = var3.bind(var4)(var2);
            var2 = null;
            var1 = var2 == var3;
case 82:
            return var1;
        }
    };
    var3['isPollCreationEmpty'] = var8;
    var3['isAnswerFilled'] = var7;
    var7 = function isIncompleteAnswer(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var5 = var1.text;
            var2 = null;
            var4 = var2 == var5;
            var3 = undefined;
            if(var4) { _fun0012_ip = 36; continue _fun0012 }
case 37:
            var4 = var5.trim;
            var3 = var4.bind(var5)();
case 36:
            var1 = var1.image;
            var1 = var2 != var1;
            if(!var1) { _fun0012_ip = 83; continue _fun0012 }
case 84:
            var2 = var2 == var3;
            if(var2) { _fun0012_ip = 54; continue _fun0012 }
case 5:
            var4 = var3.length;
            var3 = 0;
            var2 = var3 === var4;
case 54:
            var1 = var2;
case 83:
            return var1;
        }
    };
    var3['isIncompleteAnswer'] = var7;
    var3['createPollExpiryTimestamp'] = var6;
    var6 = function createPollServerDataFromCreateRequest(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            if(!(var4 == var2)) { _fun0013_ip = 85; continue _fun0013 }
case 86:
            var1 = undefined;
            return var1;
case 85:
            var1 = var4 == var2;
            var6 = undefined;
            var3 = undefined;
            if(var1) { _fun0013_ip = 28; continue _fun0013 }
case 87:
            var7 = var2.answers;
            var1 = var4 == var7;
            var3 = undefined;
            if(var1) { _fun0013_ip = 28; continue _fun0013 }
case 88:
            var5 = var7.map;
            var1 = function(arg1, arg2) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.poll_media;
                    var5 = null;
                    var3 = var5 == var1;
                    var6 = undefined;
                    if(var3) { _fun0014_ip = 89; continue _fun0014 }
case 29:
                    var6 = var1.emoji;
case 89:
                    var3 = {};
                    var8 = var2.poll_media;
                    var9 = var3;
                    var1 = copyDataProperties(var9, var8);
                    var1 = var5 != var6;
                    var4 = undefined;
                    if(!var1) { _fun0014_ip = 9; continue _fun0014 }
case 5:
                    var1 = {};
                    var7 = var6.id;
                    var1['id'] = var7;
                    var6 = var6.name;
                    var7 = var5 != var6;
                    var5 = '';
                    if(!var7) { _fun0014_ip = 40; continue _fun0014 }
case 90:
                    var5 = var6;
case 40:
                    var1['name'] = var5;
                    var4 = var1;
case 9:
                    var1 = 'emoji';
                    var3[var1] = var4;
                    var1 = {};
                    var9 = var1;
                    var8 = var2;
                    var2 = copyDataProperties(var9, var8);
                    var4 = arg2;
                    var2 = 1;
                    var4 = var4 + var2;
                    var2 = 'answer_id';
                    var1[var2] = var4;
                    var2 = 'poll_media';
                    var1[var2] = var3;
                    return var1;
                }
            };
            var3 = var5.bind(var7)(var1);
case 28:
            var5 = var4 == var2;
            var1 = undefined;
            if(var5) { _fun0013_ip = 35; continue _fun0013 }
case 91:
            var1 = var2.duration;
case 35:
            var1 = var4 != var1;
            var4 = '0';
            if(!var1) { _fun0013_ip = 46; continue _fun0013 }
case 92:
            var5 = _closure1_slot16;
            var1 = var2.duration;
            var4 = var5.bind(var6)(var1);
case 46:
            var1 = {};
            var9 = var1;
            var8 = var2;
            var2 = copyDataProperties(var9, var8);
            var2 = 'expiry';
            var1[var2] = var4;
            var2 = 'answers';
            var1[var2] = var3;
            return var1;
        }
    };
    var3['createPollServerDataFromCreateRequest'] = var6;
    var6 = function getPollReplyPreview(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var3 = var1.poll;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0015_ip = 93; continue _fun0015 }
case 29:
            var3 = var3.question;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0015_ip = 93; continue _fun0015 }
case 94:
            var2 = var3.text;
case 93:
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0015_ip = 95; continue _fun0015 }
case 55:
            var1 = var2;
case 95:
            return var1;
        }
    };
    var3['getPollReplyPreview'] = var6;
    var6 = function getPollResultsReplyPreview(arg1) {
        var4 = arg1;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var2 = 12;
        var3 = var8[var2];
        var2 = undefined;
        var5 = var7.bind(var2)(var3);
        var3 = var5.getMessageAuthor;
        var6 = var3.bind(var5)(var4);
        var3 = _closure1_slot17;
        var1 = _closure1_slot8;
        var5 = var3.bind(var2)(var4, var1);
        var1 = 13;
        var3 = var8[var1];
        var3 = var7.bind(var2)(var3);
        var4 = var3.intl;
        var3 = var4.format;
        var1 = var8[var1];
        var1 = var7.bind(var2)(var1);
        var1 = var1.t;
        var2 = var1.Vn97KS;
        var1 = {};
        var6 = var6.nick;
        var1['username'] = var6;
        var1['title'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getPollResultsReplyPreview'] = var6;
    var6 = function getPollResultsReplyPreviewMobile(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var4 = arg1;
            var1 = 'author';
            var1 = var1 in var4;
            if(var1) { _fun0016_ip = 96; continue _fun0016 }
case 32:
            var1 = null;
            return var1;
case 96:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 12;
            var3 = var8[var2];
            var2 = undefined;
            var5 = var7.bind(var2)(var3);
            var3 = var5.getMessageAuthor;
            var6 = var3.bind(var5)(var4);
            var3 = _closure1_slot17;
            var1 = _closure1_slot8;
            var5 = var3.bind(var2)(var4, var1);
            var1 = 13;
            var3 = var8[var1];
            var3 = var7.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToParts;
            var1 = var8[var1];
            var1 = var7.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.Vn97KS;
            var1 = {};
            var6 = var6.nick;
            var1['username'] = var6;
            var1['title'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getPollResultsReplyPreviewMobile'] = var6;
    var6 = function getTotalVotes(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg2;
                var3 = var1.count_details;
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0017_ip = 97; continue _fun0017 }
case 29:
                var1 = var3.vote;
case 97:
                var3 = var2 != var1;
                var2 = 0;
                if(!var3) { _fun0017_ip = 98; continue _fun0017 }
case 94:
                var2 = var1;
case 98:
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            }
        };
        var1 = 0;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['getTotalVotes'] = var6;
    var3['getSampleOfVoterUsernamesForAnswer'] = var5;
    var3['formatVoterTooltipText'] = var4;
    var4 = function getPollAnswerVotesTooltipText(arg1, arg2, arg3) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var8 = arg3;
            var5 = _closure1_slot5;
            var4 = var5.getMessage;
            var3 = arg2;
            var1 = arg1;
            var6 = var4.bind(var5)(var3, var1);
            var4 = null;
            if(!(var4 != var6)) { _fun0018_ip = 99; continue _fun0018 }
case 100:
            var5 = var6.getReaction;
            var3 = {'id': null, 'name': '', 'animated': false};
            var3['id'] = var8;
            var1 = '';
            var7 = var5.bind(var6)(var3);
            var9 = var4 == var7;
            var5 = undefined;
            var3 = undefined;
            if(var9) { _fun0018_ip = 101; continue _fun0018 }
case 102:
            var7 = var7.count_details;
            var9 = var4 == var7;
            var3 = undefined;
            if(var9) { _fun0018_ip = 101; continue _fun0018 }
case 103:
            var3 = var7.vote;
case 101:
            var9 = var4 != var3;
            var7 = 0;
            var4 = 0;
            if(!var9) { _fun0018_ip = 104; continue _fun0018 }
case 105:
            var4 = var3;
case 104:
            var3 = _closure1_slot18;
            var3 = var3.bind(var5)(var6, var8);
            var6 = var3.length;
            if(!(var7 !== var6)) { _fun0018_ip = 106; continue _fun0018 }
case 48:
            var2 = _closure1_slot19;
            var1 = var2.bind(var5)(var3, var4);
case 106:
            return var1;
case 99:
            var1 = '';
            return var1;
        }
    };
    var3['getPollAnswerVotesTooltipText'] = var4;
    var2 = function formatPollResultNotificationCenterText(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var1 = arg1;
            var6 = var1.questionText;
            var7 = var1.victorAnswerText;
            var4 = var1.victorAnswerVotes;
            var2 = var1.victorAnswerId;
            var3 = var1.totalVotes;
            var5 = var1.totalVotes;
            var1 = 0;
            var5 = var5 > var1;
            var10 = 0;
            if(!var5) { _fun0019_ip = 40; continue _fun0019 }
case 107:
            var5 = global;
            var8 = var5.Math;
            var5 = var8.round;
            var9 = var4 / var3;
            var4 = 100;
            var4 = var9 * var4;
            var10 = var5.bind(var8)(var4);
case 40:
            if(!(var1 !== var3)) { _fun0019_ip = 108; continue _fun0019 }
case 9:
            var1 = null;
            if(!(var1 == var2)) { _fun0019_ip = 79; continue _fun0019 }
case 109:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 13;
            var3 = var8[var1];
            var2 = undefined;
            var3 = var5.bind(var2)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var5.bind(var2)(var1);
            var1 = var1.t;
            var2 = var1.XVk6Zm;
            var1 = {};
            var1['questionText'] = var6;
            var5 = global;
            var5 = var5.HermesInternal;
            var9 = var5.concat;
            var8 = '';
            var5 = '%';
            var5 = var9.bind(var8)(var10, var5);
            var1['percentage'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            _fun0019_ip = 110; continue _fun0019;
case 79:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 13;
            var4 = var9[var2];
            var3 = undefined;
            var4 = var8.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var9[var2];
            var2 = var8.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.8yEgvL;
            var2 = {};
            var2['questionText'] = var6;
            var2['victorAnswerText'] = var7;
            var7 = global;
            var7 = var7.HermesInternal;
            var9 = var7.concat;
            var8 = '';
            var7 = '%';
            var7 = var9.bind(var8)(var10, var7);
            var2['percentage'] = var7;
            var1 = var4.bind(var5)(var3, var2);
case 110:
            _fun0019_ip = 111; continue _fun0019;
case 108:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 13;
            var4 = var8[var2];
            var3 = undefined;
            var4 = var7.bind(var3)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var8[var2];
            var2 = var7.bind(var3)(var2);
            var2 = var2.t;
            var3 = var2.8anM0t;
            var2 = {};
            var2['questionText'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 111:
            return var1;
        }
    };
    var3['formatPollResultNotificationCenterText'] = var2;
    return var1;
})();
// app/modules/polls/PollsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var7;
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
            var9 = _closure1_slot18;
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
            var7 = _closure1_slot18;
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
    var _closure1_slot17 = var1;
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
    var _closure1_slot18 = var1;
    var1 = function getPollVoteEventProperties(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var3 = new Array(0);
            var8 = arg2;
            var4 = 0;
            var9 = var3;
            var7 = 0;
            var1 = arraySpread(var9, var8, var7);
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var6 = function _loop(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var _closure3_slot0 = var1;
                    var1 = _closure2_slot0;
                    var4 = null;
                    var6 = var4 == var1;
                    var1 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var7 = _closure2_slot0;
                    var6 = var7.find;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.answer_id;
                        var1 = global;
                        var4 = var1.parseInt;
                        var3 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var2 === var1;
                        return var1;
                    };
                    var2 = var6.bind(var7)(var2);
                    var6 = var4 == var2;
                    var5 = undefined;
                    if(var6) { _fun0005_ip = 36; continue _fun0005 }
case 38:
                    var5 = var2.poll_media;
case 36:
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var2 = var5.text;
case 39:
                    if(!(var4 != var2)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                    var6 = _closure2_slot1;
                    var2 = 1;
                    var2 = var6 + var2;
                    _closure2_slot1 = var2;
case 41:
                    var6 = var4 == var5;
                    var2 = undefined;
                    if(var6) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                    var2 = var5.emoji;
case 43:
                    if(!(var4 != var2)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                    var4 = _closure2_slot2;
                    var2 = 1;
                    var2 = var4 + var2;
                    _closure2_slot2 = var2;
case 45:
                    return var1;
                }
            };
            var1 = var3.length;
            var1 = var4 < var1;
            var5 = undefined;
            if(!var1) { _fun0004_ip = 47; continue _fun0004 }
case 28:
            var1 = var3[var4];
            var1 = var6.bind(var5)(var1);
            var4 = var4 + 1;
            var1 = var3.length;
            if(var4 < var1) { _fun0004_ip = 28; continue _fun0004 }
case 47:
            var1 = {};
            var1['analyticsSelectedAnswerIds'] = var3;
            var3 = _closure2_slot1;
            var1['selectedTextAnswersCount'] = var3;
            var2 = _closure2_slot2;
            var1['selectedEmojiAnswersCount'] = var2;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function showLurkingAlert(arg1) {
        var1 = arg1;
        var2 = var1.guildId;
        var _closure2_slot0 = var2;
        var8 = var1.title;
        var7 = var1.body;
        var3 = _closure1_slot1;
        var10 = _closure1_slot3;
        var1 = 12;
        var2 = var10[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.show;
        var2 = {};
        var2['title'] = var8;
        var2['body'] = var7;
        var9 = _closure1_slot0;
        var6 = 13;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var11 = var7.intl;
        var8 = var11.string;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var7 = var7.t;
        var7 = var7.9VLmlZ;
        var7 = var8.bind(var11)(var7);
        var2['confirmText'] = var7;
        var7 = var10[var6];
        var7 = var9.bind(var1)(var7);
        var8 = var7.intl;
        var7 = var8.string;
        var6 = var10[var6];
        var6 = var9.bind(var1)(var6);
        var6 = var6.t;
        var6 = var6.2m+Sqq;
        var6 = var7.bind(var8)(var6);
        var2['cancelText'] = var6;
        var5 = function onConfirm() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 14;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.joinGuild;
            var3 = _closure2_slot0;
            var2 = {};
            var6 = _closure1_slot16;
            var6 = var6.POLL_ALERT;
            var2['source'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var2['onConfirm'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var _closure1_slot20 = var1;
    var2 = function handleShowVotesForAnswer(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var8 = var1.channelId;
            var7 = var1.messageId;
            var6 = var1.answerId;
            var3 = _closure1_slot8;
            var2 = var3.getChannel;
            var4 = var2.bind(var3)(var8);
            var2 = null;
            if(!(var2 != var4)) { _fun0006_ip = 48; continue _fun0006 }
case 49:
            var9 = _closure1_slot5;
            var5 = var9.isLurking;
            var3 = var4.guild_id;
            var3 = var5.bind(var9)(var3);
            if(var3) { _fun0006_ip = 50; continue _fun0006 }
case 51:
            var5 = _closure1_slot11;
            var3 = var5.getMessage;
            var7 = var3.bind(var5)(var8, var7);
            if(!(var2 != var7)) { _fun0006_ip = 48; continue _fun0006 }
case 52:
            var3 = var7.poll;
            if(!(var2 != var3)) { _fun0006_ip = 48; continue _fun0006 }
case 53:
            var3 = var7.poll;
            var3 = var3.answers;
            var5 = var3.length;
            var3 = 0;
            if(!(var3 !== var5)) { _fun0006_ip = 48; continue _fun0006 }
case 54:
            if(!(var2 == var6)) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var2 = global;
            var5 = var2.String;
            var2 = var7.poll;
            var2 = var2.answers;
            var2 = var2[var3];
            var3 = var2.answer_id;
            var2 = undefined;
            var6 = var5.bind(var2)(var3);
case 55:
            var5 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = 15;
            var3 = var3[var2];
            var2 = undefined;
            var5 = var5.bind(var2)(var3);
            var3 = var5.showVotesForAnswer;
            var2 = {};
            var2['message'] = var7;
            var2['initialAnswerId'] = var6;
            var2 = var3.bind(var5)(var2);
            _fun0006_ip = 48; continue _fun0006;
case 50:
            var3 = _closure1_slot20;
            var2 = {};
            var4 = var4.guild_id;
            var2['guildId'] = var4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var4 = 13;
            var5 = var8[var4];
            var1 = undefined;
            var5 = var7.bind(var1)(var5);
            var9 = var5.intl;
            var6 = var9.string;
            var5 = var8[var4];
            var5 = var7.bind(var1)(var5);
            var5 = var5.t;
            var5 = var5.7LpysL;
            var5 = var6.bind(var9)(var5);
            var2['title'] = var5;
            var5 = var8[var4];
            var5 = var7.bind(var1)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var8[var4];
            var4 = var7.bind(var1)(var4);
            var4 = var4.t;
            var4 = var4.5sHHo6;
            var4 = var5.bind(var6)(var4);
            var2['body'] = var4;
            var1 = var3.bind(var1)(var2);
case 48:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot21 = var2;
    var8 = function handleUpdateVoteEditingState(arg1) {
        var1 = arg1;
        var5 = var1.channelId;
        var _closure2_slot0 = var5;
        var4 = var1.messageId;
        var1 = var1.isEditing;
        var _closure2_slot1 = var1;
        var3 = _closure1_slot14;
        var1 = undefined;
        var2 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var4 = arg1;
                var1 = {};
                var3 = _closure2_slot0;
                var1['channelId'] = var3;
                var3 = global;
                var3 = var3.Set;
                var5 = var3.prototype;
                var5 = Object.create(var5, {constructor: {value: var3}});
                var6 = var5;
                var3 = new var6[var3](var5);
                var3 = var3 instanceof Object ? var3 : var5;
                var1['selectedAnswerIds'] = var3;
                var3 = false;
                var1['submitting'] = var3;
                var2 = _closure2_slot1;
                var1['editing'] = var2;
                var2 = null;
                var5 = var2 == var4;
                var3 = undefined;
                if(var5) { _fun0007_ip = 57; continue _fun0007 }
case 58:
                var3 = var4.showResults;
case 57:
                var2 = var2 != var3;
                if(!var2) { _fun0007_ip = 59; continue _fun0007 }
case 60:
                var2 = var3;
case 59:
                var1['showResults'] = var2;
                return var1;
            }
        };
        var2 = var3.bind(var1)(var5, var4, var2);
        return var1;
    };
    var _closure1_slot22 = var8;
    var1 = function getCurrentAnswerIds(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var3 = var1.messageId;
            var2 = _closure1_slot11;
            var1 = var2.getMessage;
            var1 = var1.bind(var2)(var4, var3);
            var2 = null;
            if(!(var2 != var1)) { _fun0008_ip = 36; continue _fun0008 }
case 61:
            var3 = var1.reactions;
            var2 = var3.flatMap;
            var1 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var2 = arg1;
                    var3 = var2.me_vote;
                    var1 = true;
                    if(!(var1 !== var3)) { _fun0009_ip = 62; continue _fun0009 }
case 63:
                    var1 = new Array(0);
                    _fun0009_ip = 64; continue _fun0009;
case 62:
                    var2 = var2.emoji;
                    var1 = var2.name;
case 64:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0008_ip = 35; continue _fun0008;
case 36:
            var1 = new Array(0);
case 35:
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function optimisticallySetAnswers() {
        var1 = undefined;
        var4 = _closure1_slot25;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot24 = var1;
    var1 = function _optimisticallySetAnswers() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0010_ip = 65; continue _fun0010 }
case 63:
                    var9 = var2.channelId;
                    var _closure4_slot0 = var9;
                    var8 = var2.messageId;
                    var _closure4_slot1 = var8;
                    var12 = var2.answerIds;
                    var4 = undefined;
                    var _closure4_slot2 = var4;
                    var _closure4_slot3 = var4;
                    SaveGenerator(address=53);
case 66:
                    return var4;
case 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 68; continue _fun0010 }
case 69:
                    var7 = _closure1_slot23;
                    var6 = {};
                    var6['channelId'] = var9;
                    var6['messageId'] = var8;
                    var11 = var7.bind(var4)(var6);
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var8 = 18;
                    var9 = var7[var8];
                    var10 = var6.bind(var4)(var9);
                    var9 = var10.difference;
                    var9 = var9.bind(var10)(var11, var12);
                    var8 = var7[var8];
                    var10 = var6.bind(var4)(var8);
                    var8 = var10.difference;
                    var11 = var8.bind(var10)(var12, var11);
                    var8 = _closure1_slot7;
                    var5 = var8.getId;
                    var5 = var5.bind(var8)();
                    _closure4_slot2 = var5;
                    var8 = var9.map;
                    var5 = function(arg1) {
                        var1 = {};
                        var2 = 'MESSAGE_REACTION_REMOVE';
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['id'] = var2;
                        return var1;
                    };
                    var14 = var8.bind(var9)(var5);
                    var5 = new Array(0);
                    var13 = 0;
                    var15 = var5;
                    var13 = arraySpread(var15, var14, var13);
                    var10 = var11.map;
                    var8 = function(arg1) {
                        var1 = {};
                        var2 = 'MESSAGE_REACTION_ADD';
                        var1['type'] = var2;
                        var2 = arg1;
                        var1['id'] = var2;
                        return var1;
                    };
                    var14 = var10.bind(var11)(var8);
                    var15 = var5;
                    var8 = arraySpread(var15, var14, var13);
                    _closure4_slot3 = var5;
                    var5 = 19;
                    var5 = var7[var5];
                    var5 = var6.bind(var4)(var5);
                    var6 = var5.Emitter;
                    var5 = var6.batched;
                    var3 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                            var9 = _closure4_slot3;
                            var1 = var9.length;
                            var8 = 0;
                            var2 = var8 < var1;
                            var7 = undefined;
                            var5 = 20;
                            var4 = true;
                            var3 = 21;
                            var1 = undefined;
                            if(!var2) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                            var2 = var9[var8];
                            var15 = var2.id;
                            var14 = var2.type;
                            var11 = _closure1_slot1;
                            var13 = _closure1_slot3;
                            var2 = var13[var5];
                            var12 = var11.bind(var7)(var2);
                            var11 = var12.dispatch;
                            var2 = {};
                            var2['type'] = var14;
                            var14 = _closure4_slot0;
                            var2['channelId'] = var14;
                            var14 = _closure4_slot1;
                            var2['messageId'] = var14;
                            var14 = {};
                            var14['id'] = var15;
                            var14['name'] = var15;
                            var2['emoji'] = var14;
                            var14 = _closure4_slot2;
                            var2['userId'] = var14;
                            var2['optimistic'] = var4;
                            var14 = _closure1_slot0;
                            var13 = var13[var3];
                            var13 = var14.bind(var7)(var13);
                            var13 = var13.ReactionTypes;
                            var13 = var13.VOTE;
                            var2['reactionType'] = var13;
                            var1 = var11.bind(var12)(var2);
                            var8 = var8 + 1;
                            var2 = var9.length;
                            if(var8 < var2) { _fun0011_ip = 71; continue _fun0011 }
case 70:
                            return var1;
                        }
                    };
                    var3 = var5.bind(var6)(var3);
                    var5 = null;
                    if(!(var5 != var3)) { _fun0010_ip = 24; continue _fun0010 }
case 72:
                    SaveGenerator(address=259);
case 73:
                    return var3;
case 74:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0010_ip = 75; continue _fun0010 }
case 24:
                    return var4;
case 75:
                    return var3;
case 68:
                    return var2;
case 65:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot25 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot25 = var1;
    var9 = function handlePollSubmitVote() {
        var1 = undefined;
        var4 = _closure1_slot27;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot26 = var9;
    var1 = function _handlePollSubmitVote() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0012_ip = 76; continue _fun0012 }
case 63:
                    var9 = var2.channelId;
                    var8 = var2.messageId;
                    var3 = undefined;
                    var4 = undefined;
                    var11 = undefined;
                    var12 = undefined;
                    var14 = undefined;
                    var16 = undefined;
                    SaveGenerator(address=41);
case 71:
                    return var3;
case 77:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(var6) { _fun0012_ip = 78; continue _fun0012 }
case 79:
                    var15 = _closure1_slot8;
                    var10 = var15.getChannel;
                    var7 = var9;
                    var7 = var10.bind(var15)(var7);
                    var15 = null;
                    if(!(var15 != var7)) { _fun0012_ip = 80; continue _fun0012 }
case 81:
                    var18 = _closure1_slot5;
                    var17 = var18.isLurking;
                    var10 = var7.guild_id;
                    var10 = var17.bind(var18)(var10);
                    if(var10) { _fun0012_ip = 82; continue _fun0012 }
case 83:
                    var18 = _closure1_slot10;
                    var17 = var18.canChatInGuild;
                    var10 = var7.guild_id;
                    var10 = var17.bind(var18)(var10);
                    if(var10) { _fun0012_ip = 84; continue _fun0012 }
case 85:
                    var17 = _closure1_slot1;
                    var23 = _closure1_slot3;
                    var10 = 12;
                    var10 = var23[var10];
                    var18 = var17.bind(var3)(var10);
                    var17 = var18.show;
                    var10 = {};
                    var22 = _closure1_slot0;
                    var19 = 13;
                    var20 = var23[var19];
                    var20 = var22.bind(var3)(var20);
                    var24 = var20.intl;
                    var21 = var24.string;
                    var20 = var23[var19];
                    var20 = var22.bind(var3)(var20);
                    var20 = var20.t;
                    var20 = var20.p245ws;
                    var20 = var21.bind(var24)(var20);
                    var10['title'] = var20;
                    var20 = var23[var19];
                    var20 = var22.bind(var3)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var23[var19];
                    var19 = var22.bind(var3)(var19);
                    var19 = var19.t;
                    var19 = var19.U/uodn;
                    var19 = var20.bind(var21)(var19);
                    var10['body'] = var19;
                    var10 = var17.bind(var18)(var10);
                    _fun0012_ip = 80; continue _fun0012;
case 84:
                    var10 = _closure1_slot13;
                    var19 = var9;
                    var18 = var8;
                    var10 = var10.bind(var3)(var19, var18);
                    var4 = var10;
                    var20 = _closure1_slot1;
                    var21 = _closure1_slot3;
                    var17 = 11;
                    var17 = var21[var17];
                    var20 = var20.bind(var3)(var17);
                    var17 = var15 != var10;
                    var10 = 'Must not be able to vote without existing state!';
                    var10 = var20.bind(var3)(var17, var10);
                    var17 = _closure1_slot23;
                    var10 = {};
                    var10['channelId'] = var19;
                    var10['messageId'] = var18;
                    var11 = var17.bind(var3)(var10);
case 86: // try_start_0
                    var10 = var4.selectedAnswerIds;
                    var4 = var10.values;
                    var26 = var4.bind(var10)();
                    var17 = new Array(0);
                    var19 = 0;
                    var27 = var17;
                    var25 = 0;
                    var4 = arraySpread(var27, var26, var25);
                    var12 = var17;
                    var10 = _closure1_slot14;
                    var20 = var9;
                    var18 = var8;
                    var4 = function(arg1) {
                        var2 = arg1;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 11;
                        var1 = var4[var1];
                        var5 = undefined;
                        var4 = var3.bind(var5)(var1);
                        var1 = null;
                        var3 = var1 != var2;
                        var1 = 'Must not be able to vote without existing state!';
                        var1 = var4.bind(var5)(var3, var1);
                        var1 = {};
                        var7 = var1;
                        var6 = var2;
                        var2 = copyDataProperties(var7, var6);
                        var3 = true;
                        var2 = 'submitting';
                        var1[var2] = var3;
                        var3 = false;
                        var2 = 'editing';
                        var1[var2] = var3;
                        return var1;
                    };
                    var4 = var10.bind(var3)(var20, var18, var4);
                    var10 = _closure1_slot24;
                    var4 = {};
                    var4['channelId'] = var20;
                    var4['messageId'] = var18;
                    var4['answerIds'] = var17;
                    var4 = var10.bind(var3)(var4);
                    SaveGenerator(address=435);
case 87:
                    return var4;
case 88:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0012_ip = 89; continue _fun0012 }
case 90:
                    var17 = _closure1_slot2;
                    var18 = _closure1_slot3;
                    var10 = 22;
                    var10 = var18[var10];
                    var18 = var17.bind(var3)(var10);
                    var17 = var18.submitPollVote;
                    var10 = {};
                    var20 = var9;
                    var10['channelId'] = var20;
                    var20 = var8;
                    var10['messageId'] = var20;
                    var20 = var12;
                    var10['answerIds'] = var20;
                    var10 = var17.bind(var18)(var10);
                    SaveGenerator(address=503);
case 91:
                    return var10;
case 92:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=16);
                    if(var17) { _fun0012_ip = 93; continue _fun0012 }
case 94:
                    var21 = _closure1_slot14;
                    var20 = var9;
                    var18 = var8;
                    var17 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    var17 = var21.bind(var3)(var20, var18, var17);
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot3;
                    var17 = 23;
                    var17 = var20[var17];
                    var17 = var18.bind(var3)(var17);
                    var18 = var17.AccessibilityAnnouncer;
                    var17 = var18.announce;
                    var12 = var12.length;
                    if(!(var19 !== var12)) { _fun0012_ip = 95; continue _fun0012 }
case 96:
                    var21 = _closure1_slot0;
                    var22 = _closure1_slot3;
                    var12 = 13;
                    var19 = var22[var12];
                    var19 = var21.bind(var3)(var19);
                    var20 = var19.intl;
                    var19 = var20.string;
                    var12 = var22[var12];
                    var12 = var21.bind(var3)(var12);
                    var12 = var12.t;
                    var12 = var12.o20GSk;
                    var12 = var19.bind(var20)(var12);
                    _fun0012_ip = 97; continue _fun0012;
case 95:
                    var22 = _closure1_slot0;
                    var23 = _closure1_slot3;
                    var19 = 13;
                    var20 = var23[var19];
                    var20 = var22.bind(var3)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var23[var19];
                    var19 = var22.bind(var3)(var19);
                    var19 = var19.t;
                    var19 = var19.xcvy+/;
                    var12 = var20.bind(var21)(var19);
case 97:
                    var12 = var17.bind(var18)(var12);
case 98: // try_end0
                    _fun0012_ip = 80; continue _fun0012;
case 93:
                    return var10;
case 89:
                    return var4;
case 99: // catch_target0
                    CatchBlockStart(arg_register=16);
                    var13 = var17;
                    var10 = _closure1_slot1;
                    var19 = _closure1_slot3;
                    var4 = 12;
                    var4 = var19[var4];
                    var12 = var10.bind(var3)(var4);
                    var10 = var12.show;
                    var4 = {};
                    var22 = _closure1_slot0;
                    var18 = 13;
                    var20 = var19[var18];
                    var20 = var22.bind(var3)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var19 = var19[var18];
                    var19 = var22.bind(var3)(var19);
                    var19 = var19.t;
                    var19 = var19.iufib2;
                    var19 = var20.bind(var21)(var19);
                    var4['title'] = var19;
                    var17 = var17.getAnyErrorMessage;
                    var19 = var15 == var17;
                    var17 = undefined;
                    if(var19) { _fun0012_ip = 100; continue _fun0012 }
case 101:
                    var20 = var13;
                    var19 = var20.getAnyErrorMessage;
                    var17 = var19.bind(var20)();
case 100:
                    var16 = var17;
                    if(!(var15 == var17)) { _fun0012_ip = 102; continue _fun0012 }
case 103:
                    var13 = var13.message;
                    _fun0012_ip = 104; continue _fun0012;
case 102:
                    var13 = var16;
case 104:
                    var14 = var13;
                    if(!(var15 == var13)) { _fun0012_ip = 105; continue _fun0012 }
case 106:
                    var17 = _closure1_slot0;
                    var13 = _closure1_slot3;
                    var15 = var13[var18];
                    var15 = var17.bind(var3)(var15);
                    var16 = var15.intl;
                    var15 = var16.string;
                    var13 = var13[var18];
                    var13 = var17.bind(var3)(var13);
                    var13 = var13.t;
                    var13 = var13.eAn6z8;
                    var13 = var15.bind(var16)(var13);
                    _fun0012_ip = 107; continue _fun0012;
case 105:
                    var13 = var14;
case 107:
                    var4['body'] = var13;
                    var4 = var10.bind(var12)(var4);
                    var10 = _closure1_slot24;
                    var4 = {};
                    var12 = var9;
                    var4['channelId'] = var12;
                    var12 = var8;
                    var4['messageId'] = var12;
                    var4['answerIds'] = var11;
                    var4 = var10.bind(var3)(var4);
                    SaveGenerator(address=949);
case 108:
                    return var4;
case 109:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=9);
                    if(var10) { _fun0012_ip = 110; continue _fun0012 }
case 111:
                    var10 = _closure1_slot14;
                    var5 = function(arg1) {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var2 = arg1;
                            var1 = null;
                            if(!(var1 == var2)) { _fun0013_ip = 112; continue _fun0013 }
case 113:
                            var1 = undefined;
                            return var1;
case 112:
                            var1 = {};
                            var5 = var1;
                            var4 = var2;
                            var2 = copyDataProperties(var5, var4);
                            var3 = false;
                            var2 = 'submitting';
                            var1[var2] = var3;
                            var2 = 'editing';
                            var1[var2] = var3;
                            return var1;
                        }
                    };
                    var5 = var10.bind(var3)(var9, var8, var5);
                    _fun0012_ip = 80; continue _fun0012;
case 110:
                    return var4;
case 82:
                    var5 = _closure1_slot20;
                    var4 = {};
                    var7 = var7.guild_id;
                    var4['guildId'] = var7;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 13;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.Qic1FB;
                    var7 = var8.bind(var11)(var7);
                    var4['title'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.5sHHo6;
                    var6 = var7.bind(var8)(var6);
                    var4['body'] = var6;
                    var4 = var5.bind(var3)(var4);
case 80:
                    return var3;
case 78:
                    return var2;
case 76:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot27 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var1 = function _handleClearPollVote() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0014_ip = 10; continue _fun0014 }
case 63:
                    var9 = var2.channelId;
                    var _closure4_slot0 = var9;
                    var8 = var2.messageId;
                    var3 = undefined;
                    SaveGenerator(address=35);
case 33:
                    return var3;
case 114:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 115; continue _fun0014 }
case 116:
                    var7 = _closure1_slot8;
                    var5 = var7.getChannel;
                    var7 = var5.bind(var7)(var9);
                    var5 = null;
                    if(!(var5 != var7)) { _fun0014_ip = 117; continue _fun0014 }
case 35:
                    var11 = _closure1_slot5;
                    var10 = var11.isLurking;
                    var5 = var7.guild_id;
                    var5 = var10.bind(var11)(var5);
                    if(var5) { _fun0014_ip = 118; continue _fun0014 }
case 119:
                    var5 = _closure1_slot14;
                    var4 = function(arg1) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var4 = arg1;
                            var1 = {};
                            var2 = _closure4_slot0;
                            var1['channelId'] = var2;
                            var2 = global;
                            var2 = var2.Set;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var6 = var3;
                            var2 = new var6[var2](var5);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var1['selectedAnswerIds'] = var2;
                            var2 = false;
                            var1['submitting'] = var2;
                            var1['editing'] = var2;
                            var2 = null;
                            var5 = var2 == var4;
                            var3 = undefined;
                            if(var5) { _fun0015_ip = 120; continue _fun0015 }
case 121:
                            var3 = var4.showResults;
case 120:
                            var2 = var2 != var3;
                            if(!var2) { _fun0015_ip = 122; continue _fun0015 }
case 123:
                            var2 = var3;
case 122:
                            var1['showResults'] = var2;
                            return var1;
                        }
                    };
                    var4 = var5.bind(var3)(var9, var8, var4);
                    var5 = _closure1_slot26;
                    var4 = {};
                    var4['channelId'] = var9;
                    var4['messageId'] = var8;
                    var4 = var5.bind(var3)(var4);
                    SaveGenerator(address=134);
case 45:
                    return var4;
case 124:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(var5) { _fun0014_ip = 125; continue _fun0014 }
case 126:
                    return var4;
case 125:
                    return var4;
case 118:
                    var5 = _closure1_slot20;
                    var4 = {};
                    var7 = var7.guild_id;
                    var4['guildId'] = var7;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 13;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var11 = var7.intl;
                    var8 = var11.string;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var7 = var7.t;
                    var7 = var7.B9QnBg;
                    var7 = var8.bind(var11)(var7);
                    var4['title'] = var7;
                    var7 = var10[var6];
                    var7 = var9.bind(var3)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var3)(var6);
                    var6 = var6.t;
                    var6 = var6.BVZCTk;
                    var6 = var7.bind(var8)(var6);
                    var4['body'] = var6;
                    var4 = var5.bind(var3)(var4);
case 117:
                    return var3;
case 115:
                    return var2;
case 10:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot28 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot28 = var1;
    var1 = function _handlePollActionTapped() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(var4) { _fun0016_ip = 127; continue _fun0016 }
case 63:
                    var7 = var2.channelId;
                    var6 = var2.messageId;
                    var10 = var2.type;
                    var4 = undefined;
                    SaveGenerator(address=36);
case 128:
                    return var4;
case 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 130; continue _fun0016 }
case 49:
                    var5 = 'submit';
                    if(!(var5 !== var10)) { _fun0016_ip = 131; continue _fun0016 }
case 28:
                    var5 = 'remove';
                    if(!(var5 !== var10)) { _fun0016_ip = 132; continue _fun0016 }
case 30:
                    var5 = 'cancel';
                    if(!(var5 !== var10)) { _fun0016_ip = 133; continue _fun0016 }
case 120:
                    var5 = 'showVotes';
                    if(!(var5 !== var10)) { _fun0016_ip = 134; continue _fun0016 }
case 122:
                    var5 = 'showVoterDetails';
                    if(!(var5 !== var10)) { _fun0016_ip = 15; continue _fun0016 }
case 135:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var5 = 11;
                    var5 = var9[var5];
                    var9 = var8.bind(var4)(var5);
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var8 = var5.concat;
                    var5 = 'Unknown poll action type: ';
                    var8 = var8.bind(var5)(var10);
                    var5 = false;
                    var5 = var9.bind(var4)(var5, var8);
                    _fun0016_ip = 136; continue _fun0016;
case 15:
                    var8 = _closure1_slot21;
                    var5 = {};
                    var5['channelId'] = var7;
                    var5['messageId'] = var6;
                    var5 = var8.bind(var4)(var5);
                    _fun0016_ip = 136; continue _fun0016;
case 134:
                    var8 = {};
                    var8['channelId'] = var7;
                    var8['messageId'] = var6;
                    var5 = function handleShowVotes(arg1) {
                        var1 = arg1;
                        var5 = var1.channelId;
                        var _closure5_slot0 = var5;
                        var4 = var1.messageId;
                        var _closure5_slot1 = var4;
                        var3 = _closure1_slot14;
                        var1 = undefined;
                        var2 = function(arg1) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                                var5 = arg1;
                                var3 = null;
                                var2 = var3 == var5;
                                if(var2) { _fun0017_ip = 62; continue _fun0017 }
case 137:
                                var1 = var5.showResults;
                                var2 = !var1;
case 62:
                                var8 = _closure1_slot11;
                                var7 = var8.getMessage;
                                var6 = _closure5_slot0;
                                var4 = _closure5_slot1;
                                var4 = var7.bind(var8)(var6, var4);
                                var6 = var3 != var4;
                                var8 = 0;
                                var10 = 0;
                                if(!var6) { _fun0017_ip = 60; continue _fun0017 }
case 69:
                                var7 = var4.reactions;
                                var6 = var7.reduce;
                                var4 = function(arg1, arg2) {
                                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                                        var1 = arg2;
                                        var3 = var1.count_details;
                                        var2 = null;
                                        var4 = var2 == var3;
                                        var1 = undefined;
                                        if(var4) { _fun0018_ip = 138; continue _fun0018 }
case 29:
                                        var1 = var3.vote;
case 138:
                                        var3 = var2 != var1;
                                        var2 = 0;
                                        if(!var3) { _fun0018_ip = 61; continue _fun0018 }
case 114:
                                        var2 = var1;
case 61:
                                        var1 = arg1;
                                        var1 = var1 + var2;
                                        return var1;
                                    }
                                };
                                var10 = var6.bind(var7)(var4, var8);
case 60:
                                var7 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var4 = 17;
                                var6 = var6[var4];
                                var4 = undefined;
                                var9 = var7.bind(var4)(var6);
                                var8 = var9.trackWithMetadata;
                                var1 = _closure1_slot15;
                                var7 = var1.POLL_SHOW_RESULTS_CLICKED;
                                var1 = {};
                                var6 = _closure5_slot0;
                                var1['channel_id'] = var6;
                                var11 = _closure5_slot1;
                                var1['message_id'] = var11;
                                var1['show_results'] = var2;
                                var1['votes_count'] = var10;
                                var1 = var8.bind(var9)(var7, var1);
                                var1 = {};
                                var1['channelId'] = var6;
                                var6 = global;
                                var6 = var6.Set;
                                var7 = var6.prototype;
                                var7 = Object.create(var7, {constructor: {value: var6}});
                                var15 = var7;
                                var6 = new var15[var6](var14);
                                var6 = var6 instanceof Object ? var6 : var7;
                                var1['selectedAnswerIds'] = var6;
                                var6 = var3 == var5;
                                var7 = undefined;
                                if(var6) { _fun0017_ip = 139; continue _fun0017 }
case 140:
                                var7 = var5.submitting;
case 139:
                                var6 = var3 != var7;
                                if(!var6) { _fun0017_ip = 141; continue _fun0017 }
case 142:
                                var6 = var7;
case 141:
                                var1['submitting'] = var6;
                                var6 = var3 == var5;
                                var4 = undefined;
                                if(var6) { _fun0017_ip = 143; continue _fun0017 }
case 144:
                                var4 = var5.submitting;
case 143:
                                var3 = var3 != var4;
                                if(!var3) { _fun0017_ip = 145; continue _fun0017 }
case 73:
                                var3 = var4;
case 145:
                                var1['editing'] = var3;
                                var1['showResults'] = var2;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var1)(var5, var4, var2);
                        return var1;
                    };
                    var5 = var5.bind(var4)(var8);
                    _fun0016_ip = 136; continue _fun0016;
case 133:
                    var8 = _closure1_slot22;
                    var5 = {};
                    var5['channelId'] = var7;
                    var5['messageId'] = var6;
                    var9 = false;
                    var5['isEditing'] = var9;
                    var5 = var8.bind(var4)(var5);
                    _fun0016_ip = 136; continue _fun0016;
case 132:
                    var5 = {};
                    var5['channelId'] = var7;
                    var5['messageId'] = var6;
                    var3 = function handleClearPollVote() {
                        var1 = undefined;
                        var4 = _closure1_slot28;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var4)(var5);
                    SaveGenerator(address=263);
case 146:
                    return var3;
case 147:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(!var5) { _fun0016_ip = 136; continue _fun0016 }
case 148:
                    return var3;
case 131:
                    var5 = _closure1_slot26;
                    var3 = {};
                    var3['channelId'] = var7;
                    var3['messageId'] = var6;
                    var3 = var5.bind(var4)(var3);
                    SaveGenerator(address=298);
case 149:
                    return var3;
case 150:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0016_ip = 151; continue _fun0016 }
case 136:
                    return var4;
case 151:
                    return var3;
case 130:
                    return var2;
case 127:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot29 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot29 = var1;
    var1 = function _createPoll() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0019_ip = 152; continue _fun0019 }
case 63:
                    var6 = var2.channel;
                    var8 = var6;
                    var _closure4_slot0 = var6;
                    var17 = var2.question;
                    var9 = var2.answers;
                    var14 = var2.allowMultiSelect;
                    var11 = var2.duration;
                    var6 = var2.layout;
                    var10 = var6;
                    var _closure4_slot1 = var6;
                    var7 = var2.onClose;
                    var6 = undefined;
                    var13 = undefined;
                    var _closure4_slot2 = var6;
                    var4 = undefined;
                    SaveGenerator(address=83);
case 153:
                    return var6;
case 154:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0019_ip = 155; continue _fun0019 }
case 59:
                    var19 = _closure1_slot12;
                    var18 = var19.getUploads;
                    var15 = var8;
                    var16 = var15.id;
                    var15 = _closure1_slot9;
                    var15 = var15.Poll;
                    var15 = var18.bind(var19)(var16, var15);
                    var13 = var15;
                    _closure4_slot2 = var15;
                    var16 = var9;
                    var15 = var16.map;
                    var9 = function(arg1) {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var3 = _closure4_slot2;
                            var4 = null;
                            var6 = var4 == var3;
                            var3 = undefined;
                            var9 = undefined;
                            if(var6) { _fun0020_ip = 66; continue _fun0020 }
case 37:
                            var7 = _closure4_slot2;
                            var6 = var7.findIndex;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.id;
                                var1 = _closure5_slot0;
                                var1 = var1.localCreationAnswerId;
                                var1 = var2 === var1;
                                return var1;
                            };
                            var9 = var6.bind(var7)(var2);
case 66:
                            var2 = {};
                            var7 = -1;
                            var6 = undefined;
                            if(!(var7 !== var9)) { _fun0020_ip = 135; continue _fun0020 }
case 156:
                            var7 = global;
                            var7 = var7.HermesInternal;
                            var8 = var7.concat;
                            var7 = '';
                            var8 = var8.bind(var7)(var9);
                            var7 = new Array(1);
                            var7[0] = var8;
                            var6 = var7;
case 135:
                            var2['attachment_ids'] = var6;
                            var6 = _closure4_slot1;
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var5 = 24;
                            var5 = var8[var5];
                            var5 = var7.bind(var3)(var5);
                            var5 = var5.PollLayoutTypes;
                            var5 = var5.DEFAULT;
                            if(!(var6 === var5)) { _fun0020_ip = 157; continue _fun0020 }
case 118:
                            var7 = var1.text;
                            var6 = var4 == var7;
                            var5 = undefined;
                            if(var6) { _fun0020_ip = 158; continue _fun0020 }
case 159:
                            var6 = var7.trim;
                            var5 = var6.bind(var7)();
case 158:
                            var2['text'] = var5;
case 157:
                            var1 = var1.image;
                            var5 = var4 == var1;
                            var3 = undefined;
                            if(var5) { _fun0020_ip = 160; continue _fun0020 }
case 161:
                            var3 = var1.emoji;
case 160:
                            if(!(var4 != var3)) { _fun0020_ip = 162; continue _fun0020 }
case 163:
                            var1 = var3.id;
                            if(!(var4 == var1)) { _fun0020_ip = 164; continue _fun0020 }
case 165:
                            var1 = var3.optionallyDiverseSequence;
                            if(!(var4 != var1)) { _fun0020_ip = 162; continue _fun0020 }
case 166:
                            var1 = {};
                            var4 = var3.optionallyDiverseSequence;
                            var1['name'] = var4;
                            var2['emoji'] = var1;
                            _fun0020_ip = 162; continue _fun0020;
case 164:
                            var1 = {};
                            var3 = var3.id;
                            var1['id'] = var3;
                            var3 = '';
                            var1['name'] = var3;
                            var2['emoji'] = var1;
case 162:
                            var1 = {};
                            var1['poll_media'] = var2;
                            return var1;
                        }
                    };
                    var15 = var15.bind(var16)(var9);
                    var9 = {};
                    var16 = {};
                    var18 = var17;
                    var17 = var18.trim;
                    var17 = var17.bind(var18)();
                    var16['text'] = var17;
                    var9['question'] = var16;
                    var9['answers'] = var15;
                    var9['allow_multiselect'] = var14;
                    var9['duration'] = var11;
                    var9['layout_type'] = var10;
                    var4 = var9;
case 167: // try_start_0
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var9 = 25;
                    var9 = var11[var9];
                    var11 = var10.bind(var6)(var9);
                    var10 = var11.sendPollMessage;
                    var9 = var8.id;
                    var8 = var4;
                    var4 = {};
                    var4['attachmentsToUpload'] = var13;
                    var12 = function onAttachmentUploadError(arg1, arg2, arg3) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleUploadMessageAttachmentsErrors;
                        var2 = {};
                        var5 = arg1;
                        var2['file'] = var5;
                        var6 = _closure4_slot0;
                        var5 = var6.getGuildId;
                        var5 = var5.bind(var6)();
                        var2['guildId'] = var5;
                        var5 = new Array(0);
                        var2['analyticsLocations'] = var5;
                        var5 = arg2;
                        var2['code'] = var5;
                        var5 = arg3;
                        var2['reason'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var4['onAttachmentUploadError'] = var12;
                    var4 = var10.bind(var11)(var9, var8, var4);
                    SaveGenerator(address=268);
case 168:
                    return var4;
case 75:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    if(var8) { _fun0019_ip = 169; continue _fun0019 }
case 65:
                    var9 = var7;
                    var8 = null;
                    if(!(var8 != var9)) { _fun0019_ip = 170; continue _fun0019 }
case 10:
                    var7 = var7.bind(var6)();
case 170: // try_end0
                    return var6;
case 169:
                    return var4;
case 171: // catch_target0
                    CatchBlockStart(arg_register=7);
                    var5 = var8;
                    var9 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var7 = 27;
                    var4 = var4[var7];
                    var4 = var9.bind(var6)(var4);
                    var4 = var4.APIError;
                    var4 = var8 instanceof var4;
                    if(var4) { _fun0019_ip = 172; continue _fun0019 }
case 173:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var7];
                    var3 = var4.bind(var6)(var3);
                    var6 = var3.APIError;
                    var22 = var5;
                    var4 = var6.prototype;
                    var4 = Object.create(var4, {constructor: {value: var6}});
                    var23 = var4;
                    var3 = new var23[var6](var22, var21);
                    var4 = var3 instanceof Object ? var3 : var4;
                    _fun0019_ip = 174; continue _fun0019;
case 172:
                    var4 = var5;
case 174:
                    var3 = var4.getAnyErrorMessage;
                    var4 = var3.bind(var4)();
                    var3 = 'poll';
                    if(!(var3 === var4)) { _fun0019_ip = 175; continue _fun0019 }
case 176:
                    var3 = var5;
                    var4 = var3.text;
                    var3 = null;
                    if(!(var3 == var4)) { _fun0019_ip = 177; continue _fun0019 }
case 175:
                    var3 = var5;
                    _fun0019_ip = 178; continue _fun0019;
case 177:
                    var4 = {};
                    var22 = var4;
                    var21 = var5;
                    var6 = copyDataProperties(var22, var21);
                    var6 = global;
                    var7 = var6.JSON;
                    var6 = var7.parse;
                    var5 = var5.text;
                    var6 = var6.bind(var7)(var5);
                    var5 = 'body';
                    var4[var5] = var6;
                    var3 = var4;
case 178:
                    throw var3;
case 155:
                    return var2;
case 152:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot30 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot30 = var1;
    var1 = function _endPollEarly() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 73; continue _fun0021 }
case 112:
                    var9 = var2.channelId;
                    var8 = var2.messageId;
                    var5 = undefined;
                    SaveGenerator(address=29);
case 179:
                    return var5;
case 37:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0021_ip = 180; continue _fun0021 }
case 61:
                    var6 = _closure1_slot1;
                    var14 = _closure1_slot3;
                    var3 = 12;
                    var3 = var14[var3];
                    var7 = var6.bind(var5)(var3);
                    var6 = var7.confirm;
                    var3 = {};
                    var13 = _closure1_slot0;
                    var10 = 13;
                    var11 = var14[var10];
                    var11 = var13.bind(var5)(var11);
                    var15 = var11.intl;
                    var12 = var15.string;
                    var11 = var14[var10];
                    var11 = var13.bind(var5)(var11);
                    var11 = var11.t;
                    var11 = var11.+rfkTE;
                    var11 = var12.bind(var15)(var11);
                    var3['title'] = var11;
                    var11 = var14[var10];
                    var11 = var13.bind(var5)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var5)(var10);
                    var10 = var10.t;
                    var10 = var10.H2I1gI;
                    var10 = var11.bind(var12)(var10);
                    var3['body'] = var10;
                    var3 = var6.bind(var7)(var3);
                    SaveGenerator(address=185);
case 181:
                    return var3;
case 182:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0021_ip = 183; continue _fun0021 }
case 161:
                    if(!var3) { _fun0021_ip = 184; continue _fun0021 }
case 185:
                    var6 = _closure1_slot2;
                    var7 = _closure1_slot3;
                    var4 = 22;
                    var4 = var7[var4];
                    var7 = var6.bind(var5)(var4);
                    var6 = var7.endPollEarly;
                    var4 = {};
                    var4['channelId'] = var9;
                    var4['messageId'] = var8;
                    var4 = var6.bind(var7)(var4);
                    SaveGenerator(address=239);
case 132:
                    return var4;
case 164:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(var6) { _fun0021_ip = 186; continue _fun0021 }
case 184:
                    return var5;
case 186:
                    return var4;
case 183:
                    return var3;
case 180:
                    return var2;
case 73:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot31 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot31 = var1;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.DraftType;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var7[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var10 = var4.getPollState;
    var _closure1_slot13 = var10;
    var4 = var4.updatePollState;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var10 = var4.AnalyticEvents;
    var _closure1_slot15 = var10;
    var4 = var4.JoinGuildSources;
    var _closure1_slot16 = var4;
    var4 = {};
    var10 = function handlePollAnswerTapped(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var4 = arg1;
            var10 = var4.answerId;
            var _closure2_slot0 = var10;
            var6 = null;
            var3 = Object.create(var6);
            var1 = 0;
            var3['answerId'] = var1;
            var15 = {};
            var14 = var4;
            var13 = var3;
            var3 = copyDataProperties(var15, var14, var13);
            var1 = undefined;
            var _closure2_slot4 = var1;
            var8 = var3.channelId;
            var5 = var3.messageId;
            var7 = _closure1_slot11;
            var4 = var7.getMessage;
            var9 = var4.bind(var7)(var8, var5);
            if(!(var6 == var9)) { _fun0022_ip = 187; continue _fun0022 }
case 120:
            var7 = _closure1_slot6;
            var4 = var7.getMessage;
            var4 = var4.bind(var7)(var8, var5);
            var7 = var4.message;
            if(!(var6 == var7)) { _fun0022_ip = 17; continue _fun0022 }
case 188:
            var11 = _closure1_slot1;
            var12 = _closure1_slot3;
            var7 = 11;
            var7 = var12[var7];
            var12 = var11.bind(var1)(var7);
            var11 = var6 != var9;
            var7 = 'Tapped on a non-existent poll message';
            var7 = var12.bind(var1)(var11, var7);
            var7 = global;
            var7 = var7.Error;
            var11 = var7.prototype;
            var11 = Object.create(var11, {constructor: {value: var7}});
            var16 = var11;
            var7 = new var16[var7](var15);
            var7 = var7 instanceof Object ? var7 : var11;
            throw var7;
case 17:
            var7 = {};
            var7['channelId'] = var8;
            var7['messageId'] = var5;
            var4 = var4.message;
            var7['message'] = var4;
            _fun0022_ip = 189; continue _fun0022;
case 187:
            var4 = {};
            var4['message'] = var9;
            var4['channelId'] = var8;
            var4['messageId'] = var5;
            var7 = var4;
case 189:
            var5 = var7.channelId;
            var _closure2_slot1 = var5;
            var4 = var7.messageId;
            var _closure2_slot2 = var4;
            var7 = var7.message;
            var _closure2_slot3 = var7;
            var9 = _closure1_slot0;
            var11 = _closure1_slot3;
            var8 = 16;
            var8 = var11[var8];
            var9 = var9.bind(var1)(var8);
            var8 = var9.computeBasicPollChatData;
            var8 = var8.bind(var9)(var7);
            if(!(var6 == var8)) { _fun0022_ip = 68; continue _fun0022 }
case 148:
            var8 = {};
case 68:
            var9 = var8.tapShouldOpenVotersModal;
            var8 = true;
            if(!(var8 === var9)) { _fun0022_ip = 190; continue _fun0022 }
case 10:
            var9 = _closure1_slot21;
            var8 = {};
            var8['channelId'] = var5;
            var8['messageId'] = var4;
            var8['answerId'] = var10;
            var8 = var9.bind(var1)(var8);
            _fun0022_ip = 191; continue _fun0022;
case 190:
            var7 = var7.poll;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0022_ip = 26; continue _fun0022 }
case 192:
            var6 = var7.allow_multiselect;
case 26:
            _closure2_slot4 = var6;
            var3 = _closure1_slot14;
            var2 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                    var2 = arg1;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0023_ip = 127; continue _fun0023 }
case 137:
                    var1 = {};
                    var13 = var1;
                    var12 = var2;
                    var2 = copyDataProperties(var13, var12);
                    var2 = global;
                    var5 = var2.Set;
                    var13 = var1.selectedAnswerIds;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {constructor: {value: var5}});
                    var14 = var4;
                    var2 = new var14[var5](var13, var12);
                    var7 = var2 instanceof Object ? var2 : var4;
                    var1['selectedAnswerIds'] = var7;
                    var4 = var7.has;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var7)(var2);
                    if(var2) { _fun0023_ip = 14; continue _fun0023 }
case 42:
                    var2 = _closure2_slot4;
                    if(var2) { _fun0023_ip = 193; continue _fun0023 }
case 194:
                    var2 = _closure1_slot17;
                    var6 = undefined;
                    var5 = var2.bind(var6)(var7);
                    var4 = var5.bind(var6)();
                    var2 = var4.done;
                    if(var2) { _fun0023_ip = 193; continue _fun0023 }
case 46:
                    var8 = var4.value;
                    var2 = var7.delete;
                    var2 = var2.bind(var7)(var8);
                    var8 = var5.bind(var6)();
                    var2 = var8.done;
                    var4 = var8;
                    if(!var2) { _fun0023_ip = 46; continue _fun0023 }
case 193:
                    var4 = var7.add;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var7)(var2);
                    _fun0023_ip = 195; continue _fun0023;
case 14:
                    var4 = var7.delete;
                    var2 = _closure2_slot0;
                    var2 = var4.bind(var7)(var2);
case 195:
                    var5 = _closure1_slot19;
                    var4 = _closure2_slot3;
                    var8 = var4.poll;
                    var9 = var3 == var8;
                    var6 = undefined;
                    var4 = undefined;
                    if(var9) { _fun0023_ip = 196; continue _fun0023 }
case 22:
                    var4 = var8.answers;
case 196:
                    var4 = var5.bind(var6)(var4, var7);
                    var9 = var4.analyticsSelectedAnswerIds;
                    var8 = var4.selectedTextAnswersCount;
                    var7 = var4.selectedEmojiAnswersCount;
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot3;
                    var4 = 17;
                    var4 = var11[var4];
                    var6 = var5.bind(var6)(var4);
                    var5 = var6.trackWithMetadata;
                    var2 = _closure1_slot15;
                    var4 = var2.POLL_VOTE_SELECTED;
                    var2 = {};
                    var11 = _closure2_slot1;
                    var2['channel_id'] = var11;
                    var10 = _closure2_slot2;
                    var2['message_id'] = var10;
                    var2['selected_answer_ids'] = var9;
                    var2['selected_text_answers_count'] = var8;
                    var2['selected_emoji_answers_count'] = var7;
                    var2 = var5.bind(var6)(var4, var2);
                    return var1;
case 127:
                    var1 = global;
                    var4 = var1.Set;
                    var2 = _closure2_slot0;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {constructor: {value: var4}});
                    var14 = var2;
                    var13 = var1;
                    var1 = new var14[var4](var13, var12);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var4 = _closure1_slot19;
                    var5 = _closure2_slot3;
                    var6 = var5.poll;
                    var7 = var3 == var6;
                    var5 = undefined;
                    var3 = undefined;
                    if(var7) { _fun0023_ip = 197; continue _fun0023 }
case 198:
                    var3 = var6.answers;
case 197:
                    var3 = var4.bind(var5)(var3, var2);
                    var9 = var3.analyticsSelectedAnswerIds;
                    var8 = var3.selectedTextAnswersCount;
                    var7 = var3.selectedEmojiAnswersCount;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot3;
                    var3 = 17;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.trackWithMetadata;
                    var1 = _closure1_slot15;
                    var4 = var1.POLL_VOTE_SELECTED;
                    var1 = {};
                    var3 = _closure2_slot1;
                    var1['channel_id'] = var3;
                    var10 = _closure2_slot2;
                    var1['message_id'] = var10;
                    var1['selected_answer_ids'] = var9;
                    var1['selected_text_answers_count'] = var8;
                    var1['selected_emoji_answers_count'] = var7;
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = {'channelId': null, 'selectedAnswerIds': null, 'submitting': false, 'editing': false, 'showResults': false};
                    var1['channelId'] = var3;
                    var1['selectedAnswerIds'] = var2;
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var5, var4, var2);
case 191:
            return var1;
        }
    };
    var4['handlePollAnswerTapped'] = var10;
    var4['handlePollSubmitVote'] = var9;
    var4['handleUpdateVoteEditingState'] = var8;
    var8 = function handlePollActionTapped() {
        var1 = undefined;
        var4 = _closure1_slot29;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var4['handlePollActionTapped'] = var8;
    var8 = function createPoll() {
        var1 = undefined;
        var4 = _closure1_slot30;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var4['createPoll'] = var8;
    var5 = function endPollEarly() {
        var1 = undefined;
        var4 = _closure1_slot31;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var4['endPollEarly'] = var5;
    var5 = 28;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/polls/PollsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['handleShowVotesForAnswer'] = var2;
    return var1;
})();
// app/modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx
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
            var9 = _closure1_slot25;
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
            var7 = _closure1_slot25;
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
    var _closure1_slot24 = var1;
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
    var _closure1_slot25 = var1;
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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _superPropGet(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arg1;
            var7 = arg3;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot8;
            var4 = _closure1_slot7;
            var1 = 1;
            var3 = 3;
            var8 = var1 & var3;
            var1 = var5;
            if(!var8) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var1 = var5.prototype;
case 40:
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = arg2;
            var5 = var6.bind(var5)(var4, var1, var7);
            var _closure2_slot1 = var5;
            var1 = 2;
            var3 = var1 & var3;
            var1 = var5;
            if(!var3) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var4 = 'function';
            var3 = typeof var5;
            var1 = var5;
            if(!(var4 === var3)) { _fun0005_ip = 42; continue _fun0005 }
case 44:
            var1 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
case 42:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.useChannelDetailsStore;
    var _closure1_slot12 = var8;
    var4 = var4.getIsChannelDetailsSearchActive;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isTextChannel;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot17 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot18 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot19 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot20 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageStates;
    var _closure1_slot21 = var4;
    var4 = function log(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = 0;
            var1 = copyRestArgs(var6);
            var3 = _closure1_slot22;
            var1 = null;
            if(!(var1 == var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 18;
            var3 = var3[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var3 = var4.getQuestLogger;
            var1 = {};
            var5 = 'QuestMobileEmbedVisibilityManager';
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            _fun0006_ip = 35; continue _fun0006;
case 45:
            var1 = _closure1_slot22;
case 35:
            var _closure1_slot22 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot23 = var4;
    var4 = 29;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function QuestMobileEmbedVisibilityManager(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var5 = _closure2_slot0;
                var4 = undefined;
                var8 = var8.bind(var4)(var6, var5);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var4)(var5);
                var5 = _closure1_slot6;
                var1 = _closure1_slot26;
                var1 = var1.bind(var4)();
                if(var1) { _fun0007_ip = 9; continue _fun0007 }
case 47:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0007_ip = 48; continue _fun0007;
case 9:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var4)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 48:
                var1 = var5.bind(var4)(var6, var1);
                var _closure3_slot0 = var1;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 19;
                var5 = var7[var5];
                var7 = var6.bind(var4)(var5);
                var5 = {};
                var6 = 50;
                var5['max'] = var6;
                var6 = var7.prototype;
                var6 = Object.create(var6, {constructor: {value: var7}});
                var15 = var6;
                var14 = var5;
                var5 = new var15[var7](var14, var13);
                var5 = var5 instanceof Object ? var5 : var6;
                var1['impressionCache'] = var5;
                var5 = {};
                var1['questStatuses'] = var5;
                var1['chatChannelId'] = var4;
                var1['previousChatChannelId'] = var4;
                var4 = {};
                var1['channelsWithChatOpen'] = var4;
                var4 = function(arg1) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.payload;
                        var3 = var1.visibleMessages;
                        var1 = var1.source;
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var5 = new Array(0);
                        var2 = _closure1_slot24;
                        var10 = var2.bind(var1)(var3);
                        var4 = var10.bind(var1)();
                        var3 = var4.done;
                        var9 = 0;
                        var8 = global;
                        var7 = 100;
                        var6 = 20;
                        if(var3) { _fun0008_ip = 49; continue _fun0008 }
case 39:
                        var3 = var4.value;
                        var14 = var3.message;
                        var12 = var3.percentVisible;
                        var16 = var3.state;
                        var3 = var14.codedLinks;
                        var3 = var3.length;
                        var3 = var3 <= var9;
                        if(var3) { _fun0008_ip = 50; continue _fun0008 }
case 51:
                        var13 = _closure1_slot21;
                        var17 = var13.SENDING;
                        var15 = new Array(2);
                        var15[0] = var17;
                        var13 = var13.SEND_FAILED;
                        var15[1] = var13;
                        var13 = var15.includes;
                        var3 = var13.bind(var15)(var16);
case 50:
                        if(var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                        var13 = _closure1_slot23;
                        var3 = var14.id;
                        var3 = var14.content;
                        var16 = var8.Math;
                        var15 = var16.round;
                        var3 = var7 * var12;
                        var3 = var15.bind(var16)(var3);
                        var3 = var13.bind(var1)(var3);
                        var13 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var6];
                        var3 = var13.bind(var1)(var3);
                        var3 = var3.MIN_QUEST_CONTENT_VISIBILITY_PERCENTAGE;
                        if(!(var12 > var3)) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                        var12 = var5.push;
                        var13 = _closure3_slot0;
                        var3 = var13.findQuestEmbedsInMessage;
                        var19 = var3.bind(var13)(var14);
                        var3 = new Array(0);
                        var20 = var3;
                        var18 = 0;
                        var13 = arraySpread(var20, var19, var18);
                        var20 = var12;
                        var19 = var3;
                        var18 = var5;
                        var3 = apply(var20, var19, var18);
case 52:
                        var12 = var10.bind(var1)();
                        var3 = var12.done;
                        var4 = var12;
                        if(!var3) { _fun0008_ip = 39; continue _fun0008 }
case 49:
                        var4 = _closure3_slot0;
                        var3 = var4.updateImpressionsForVisibleEmbeds;
                        var2 = {};
                        var2['visibleEmbeds'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['handleVisibleMessagesChanged'] = var4;
                var4 = function(arg1) {
                    var3 = arg1;
                    var _closure4_slot0 = var3;
                    var1 = new Array(0);
                    var _closure4_slot1 = var1;
                    var4 = global;
                    var4 = var4.Set;
                    var5 = var4.prototype;
                    var5 = Object.create(var5, {constructor: {value: var4}});
                    var7 = var5;
                    var4 = new var7[var4](var6);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var _closure4_slot2 = var4;
                    var4 = var3.codedLinks;
                    var3 = var4.forEach;
                    var2 = function(arg1, arg2) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var4 = var2.type;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 21;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var5.bind(var1)(var3);
                            var3 = var3.CodedLinkType;
                            var3 = var3.QUESTS_EMBED;
                            if(!(var4 === var3)) { _fun0009_ip = 55; continue _fun0009 }
case 5:
                            var4 = var2.code;
                            var5 = _closure4_slot2;
                            var3 = var5.has;
                            var3 = var3.bind(var5)(var4);
                            if(var3) { _fun0009_ip = 55; continue _fun0009 }
case 39:
                            var6 = _closure4_slot1;
                            var5 = var6.push;
                            var3 = {};
                            var3['questId'] = var4;
                            var7 = arg2;
                            var3['questContentPosition'] = var7;
                            var7 = _closure4_slot0;
                            var8 = var7.id;
                            var3['messageId'] = var8;
                            var7 = var7.channel_id;
                            var3['channelId'] = var7;
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure4_slot2;
                            var2 = var3.add;
                            var2 = var2.bind(var3)(var4);
case 55:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['findQuestEmbedsInMessage'] = var4;
                var4 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var5 = var1.visibleEmbeds;
                        var2 = _closure1_slot24;
                        var1 = undefined;
                        var9 = var2.bind(var1)(var5);
                        var4 = var9.bind(var1)();
                        var3 = var4.done;
                        var8 = 22;
                        var7 = false;
                        var6 = null;
                        if(var3) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                        var3 = var4.value;
                        var12 = var3.questId;
                        var18 = var3.questContentPosition;
                        var16 = var3.messageId;
                        var17 = var3.channelId;
                        var11 = _closure1_slot20;
                        var3 = var11.getQuest;
                        var15 = var3.bind(var11)(var12);
                        if(!(var6 != var15)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                        var12 = _closure3_slot0;
                        var11 = var12.ensureImpression;
                        var3 = {};
                        var3['quest'] = var15;
                        var14 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var19 = var13[var8];
                        var19 = var14.bind(var1)(var19);
                        var19 = var19.QuestContent;
                        var19 = var19.QUEST_EMBED_MOBILE;
                        var3['questContent'] = var19;
                        var3['triggeredByStatusChange'] = var7;
                        var3['questContentPosition'] = var18;
                        var3['channelId'] = var17;
                        var3['messageId'] = var16;
                        var15 = var15.id;
                        var3['questId'] = var15;
                        var15 = _closure1_slot20;
                        var15 = var15.questEnrollmentBlockedUntil;
                        var15 = var6 != var15;
                        var3['isQuestEnrollmentBlocked'] = var15;
                        var13 = var13[var8];
                        var13 = var14.bind(var1)(var13);
                        var13 = var13.QuestContent;
                        var13 = var13.QUEST_EMBED_MOBILE;
                        var3['sourceQuestContent'] = var13;
                        var3 = var11.bind(var12)(var3);
case 58:
                        var11 = var9.bind(var1)();
                        var3 = var11.done;
                        var4 = var11;
                        if(!var3) { _fun0010_ip = 57; continue _fun0010 }
case 56:
                        var4 = _closure3_slot0;
                        var3 = var4.stopMany;
                        var2 = {};
                        var2['visibleEmbeds'] = var5;
                        var5 = true;
                        var2['shouldDeleteHiddenEmbeds'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    }
                };
                var1['updateImpressionsForVisibleEmbeds'] = var4;
                var4 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var4 = arg1;
                        var8 = var4.quest;
                        var3 = null;
                        var2 = Object.create(var3);
                        var1 = 0;
                        var2['quest'] = var1;
                        var14 = {};
                        var13 = var4;
                        var12 = var2;
                        var6 = copyDataProperties(var14, var13, var12);
                        var1 = _closure3_slot0;
                        var4 = var1.getCacheKey;
                        var5 = var4.bind(var1)(var6);
                        var4 = var1.impressionCache;
                        var1 = var4.get;
                        var10 = var1.bind(var4)(var5);
                        var4 = var3 != var10;
                        var1 = undefined;
                        var7 = undefined;
                        if(!var4) { _fun0011_ip = 60; continue _fun0011 }
case 43:
                        var4 = var3 != var10;
                        var7 = var10;
case 60:
                        if(!var4) { _fun0011_ip = 61; continue _fun0011 }
case 62:
                        var4 = var7.isRunning;
case 61:
                        if(var4) { _fun0011_ip = 63; continue _fun0011 }
case 64:
                        var4 = var10;
                        if(!(var3 != var4)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                        var9 = var10.clone;
                        var7 = {};
                        var11 = var6.triggeredByStatusChange;
                        var7['triggeredByStatusChange'] = var11;
                        var4 = var9.bind(var10)(var7);
case 65:
                        if(!(var3 == var4)) { _fun0011_ip = 67; continue _fun0011 }
case 68:
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 20;
                        var3 = var9[var3];
                        var3 = var7.bind(var1)(var3);
                        var7 = var3.QuestContentImpression;
                        var3 = {};
                        var3['questOrQuests'] = var8;
                        var14 = var3;
                        var13 = var6;
                        var6 = copyDataProperties(var14, var13);
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var15 = var6;
                        var14 = var3;
                        var3 = new var15[var7](var14, var13);
                        var4 = var3 instanceof Object ? var3 : var6;
case 67:
                        var3 = _closure3_slot0;
                        var3 = var3.isChatViewable;
                        if(!var3) { _fun0011_ip = 58; continue _fun0011 }
case 69:
                        var6 = var4.isRunning;
                        var3 = !var6;
case 58:
                        if(!var3) { _fun0011_ip = 70; continue _fun0011 }
case 71:
                        var3 = var4.start;
                        var3 = var3.bind(var4)();
case 70:
                        var2 = _closure3_slot0;
                        var3 = var2.impressionCache;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var5, var4);
case 63:
                        return var1;
                    }
                };
                var1['ensureImpression'] = var4;
                var4 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.key;
                        var3 = var1.shouldDelete;
                        var1 = _closure3_slot0;
                        var5 = var1.impressionCache;
                        var1 = var5.get;
                        var7 = var1.bind(var5)(var4);
                        var6 = null;
                        var1 = var6 == var7;
                        var5 = undefined;
                        var8 = undefined;
                        if(var1) { _fun0012_ip = 28; continue _fun0012 }
case 72:
                        var8 = var7.isRunning;
case 28:
                        var1 = var6 != var8;
                        if(!var1) { _fun0012_ip = 45; continue _fun0012 }
case 73:
                        var1 = var8;
case 45:
                        if(!(var6 != var7)) { _fun0012_ip = 74; continue _fun0012 }
case 35:
                        var6 = var7.stop;
                        var6 = var6.bind(var7)();
case 74:
                        if(!var3) { _fun0012_ip = 75; continue _fun0012 }
case 76:
                        var3 = _closure1_slot23;
                        var3 = var3.bind(var5)();
                        var2 = _closure3_slot0;
                        var3 = var2.impressionCache;
                        var2 = var3.del;
                        var2 = var2.bind(var3)(var4);
case 75:
                        return var1;
                    }
                };
                var1['stopOne'] = var4;
                var4 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0013_ip = 3; continue _fun0013 }
case 77:
                        var3 = {};
                        var4 = new Array(0);
                        var3['visibleEmbeds'] = var4;
                        var4 = false;
                        var3['shouldDeleteHiddenEmbeds'] = var4;
                        var2 = var3;
case 3:
                        var5 = var2.visibleEmbeds;
                        if(!(var5 === var1)) { _fun0013_ip = 40; continue _fun0013 }
case 78:
                        var5 = new Array(0);
case 40:
                        var7 = var2.shouldDeleteHiddenEmbeds;
                        if(!(var7 === var1)) { _fun0013_ip = 28; continue _fun0013 }
case 79:
                        var7 = false;
case 28:
                        var2 = global;
                        var4 = var2.Set;
                        var3 = var5.map;
                        var2 = function(arg1) {
                            var3 = _closure3_slot0;
                            var2 = var3.getCacheKey;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var11 = var3.bind(var5)(var2);
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var12 = var3;
                        var2 = new var12[var4](var11, var10);
                        var6 = var2 instanceof Object ? var2 : var3;
                        var3 = _closure1_slot24;
                        var2 = _closure3_slot0;
                        var4 = var2.impressionCache;
                        var2 = var4.keys;
                        var2 = var2.bind(var4)();
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.bind(var1)();
                        var2 = var3.done;
                        if(var2) { _fun0013_ip = 80; continue _fun0013 }
case 81:
                        var10 = var3.value;
                        var2 = var6.has;
                        var2 = var2.bind(var6)(var10);
                        if(var2) { _fun0013_ip = 82; continue _fun0013 }
case 83:
                        var9 = _closure3_slot0;
                        var8 = var9.stopOne;
                        var2 = {};
                        var2['key'] = var10;
                        var2['shouldDelete'] = var7;
                        var2 = var8.bind(var9)(var2);
case 82:
                        var8 = var4.bind(var1)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0013_ip = 81; continue _fun0013 }
case 80:
                        return var1;
                    }
                };
                var1['stopMany'] = var4;
                var4 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.channelId;
                    var4 = var2.messageId;
                    var2 = var2.questId;
                    var3 = ':';
                    var1 = var1 + var3;
                    var1 = var1 + var4;
                    var1 = var1 + var3;
                    var1 = var1 + var2;
                    return var1;
                };
                var1['getCacheKey'] = var4;
                var4 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.split;
                    var1 = ':';
                    var4 = var2.bind(var3)(var1);
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = 3;
                    var3 = var3.bind(var2)(var4, var1);
                    var1 = {};
                    var2 = 0;
                    var2 = var3[var2];
                    var1['channelId'] = var2;
                    var2 = 1;
                    var2 = var3[var2];
                    var1['messageId'] = var2;
                    var2 = 2;
                    var2 = var3[var2];
                    var1['questId'] = var2;
                    return var1;
                };
                var1['parseCacheKey'] = var4;
                var4 = function() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 23;
                        var1 = var5[var1];
                        var3 = undefined;
                        var2 = var4.bind(var3)(var1);
                        var1 = var2.isChannelFocused;
                        var1 = var1.bind(var2)();
                        var2 = 24;
                        var2 = var5[var2];
                        var3 = var4.bind(var3)(var2);
                        var2 = var3.getCurrentNavigationRouteName;
                        var3 = var2.bind(var3)();
                        if(!var1) { _fun0014_ip = 84; continue _fun0014 }
case 85:
                        var2 = 'channel';
                        var1 = var2 === var3;
case 84:
                        return var1;
                    }
                };
                var1['isOnChannelNavigationRoute'] = var4;
                var4 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var3 = var1.chatChannelId;
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0015_ip = 2; continue _fun0015 }
case 86:
                        var4 = _closure1_slot13;
                        var2 = _closure3_slot0;
                        var3 = var2.chatChannelId;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
case 2:
                        return var1;
                    }
                };
                var1['isSearchShowing'] = var4;
                var4 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.chatChannelId;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0016_ip = 87; continue _fun0016 }
case 86:
                        var5 = _closure1_slot10;
                        var3 = var5.isOpen;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0016_ip = 88; continue _fun0016 }
case 89:
                        var5 = _closure1_slot19;
                        var3 = var5.getState;
                        var6 = var3.bind(var5)();
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 25;
                        var5 = var5[var3];
                        var3 = undefined;
                        var5 = var7.bind(var3)(var5);
                        var5 = var5.AppStates;
                        var5 = var5.ACTIVE;
                        if(!(var6 === var5)) { _fun0016_ip = 90; continue _fun0016 }
case 64:
                        var7 = _closure1_slot16;
                        var6 = var7.getChannel;
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        var5 = var6.bind(var7)(var5);
                        var6 = var2 == var5;
                        var8 = undefined;
                        if(var6) { _fun0016_ip = 91; continue _fun0016 }
case 92:
                        var8 = var5.type;
case 91:
                        var7 = _closure1_slot11;
                        var6 = var7.getChatOpen;
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        var7 = var6.bind(var7)(var5);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var10 = 26;
                        var5 = var5[var10];
                        var5 = var6.bind(var3)(var5);
                        var5 = var5.ChannelTypes;
                        var5 = var5.GUILD_STAGE_VOICE;
                        var6 = var8 === var5;
                        if(!var6) { _fun0016_ip = 22; continue _fun0016 }
case 93:
                        var6 = var7;
case 22:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 24;
                        var5 = var11[var5];
                        var9 = var9.bind(var3)(var5);
                        var5 = var9.getOpenModalKey;
                        var9 = var5.bind(var9)();
                        var5 = _closure3_slot0;
                        var12 = var5.chatChannelId;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var11 = var5.concat;
                        var5 = 'voice-channel-';
                        var5 = var11.bind(var5)(var12);
                        if(!(var2 != var9)) { _fun0016_ip = 25; continue _fun0016 }
case 94:
                        if(!(var9 !== var5)) { _fun0016_ip = 25; continue _fun0016 }
case 95:
                        var5 = _closure1_slot23;
                        var5 = var5.bind(var3)();
                        var5 = false;
                        return var5;
case 25:
                        var9 = _closure3_slot0;
                        var5 = var9.isSearchShowing;
                        var5 = var5.bind(var9)();
                        if(var5) { _fun0016_ip = 96; continue _fun0016 }
case 97:
                        var9 = _closure1_slot18;
                        var5 = var9.getAlert;
                        var5 = var5.bind(var9)();
                        if(!(var2 == var5)) { _fun0016_ip = 98; continue _fun0016 }
case 26:
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var10];
                        var5 = var9.bind(var3)(var5);
                        var5 = var5.ChannelTypes;
                        var5 = var5.GUILD_VOICE;
                        var5 = var8 === var5;
                        if(!var5) { _fun0016_ip = 99; continue _fun0016 }
case 100:
                        var5 = var7;
case 99:
                        var2 = var2 != var8;
                        if(!var2) { _fun0016_ip = 101; continue _fun0016 }
case 102:
                        var7 = _closure1_slot15;
                        var2 = var7.bind(var3)(var8);
case 101:
                        var8 = _closure1_slot14;
                        var7 = var8.getState;
                        var8 = var7.bind(var8)();
                        var7 = var8.isAnyVoicePanelOpen;
                        var7 = var7.bind(var8)();
                        var9 = _closure3_slot0;
                        var8 = var9.isOnChannelNavigationRoute;
                        var8 = var8.bind(var9)();
                        if(!var2) { _fun0016_ip = 103; continue _fun0016 }
case 104:
                        var2 = var8;
case 103:
                        if(!var2) { _fun0016_ip = 105; continue _fun0016 }
case 106:
                        var2 = !var7;
case 105:
                        if(!var2) { _fun0016_ip = 107; continue _fun0016 }
case 108:
                        var2 = !var6;
case 107:
                        if(!var2) { _fun0016_ip = 109; continue _fun0016 }
case 110:
                        var2 = !var5;
case 109:
                        if(var2) { _fun0016_ip = 111; continue _fun0016 }
case 112:
                        var2 = var6;
case 111:
                        if(var2) { _fun0016_ip = 113; continue _fun0016 }
case 114:
                        var2 = var5;
case 113:
                        var5 = _closure1_slot23;
                        var4 = _closure3_slot0;
                        var4 = var4.chatChannelId;
                        var4 = var5.bind(var3)(var4);
                        return var2;
case 98:
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var3)();
                        var2 = false;
                        return var2;
case 96:
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var3)();
                        var2 = false;
                        return var2;
case 90:
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var3)();
                        var2 = false;
                        return var2;
case 88:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var1 = false;
                        return var1;
case 87:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var1 = false;
                        return var1;
                    }
                };
                var1['getIsChatViewable'] = var4;
                var4 = function() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure1_slot24;
                        var2 = _closure3_slot0;
                        var4 = var2.impressionCache;
                        var2 = var4.keys;
                        var2 = var2.bind(var4)();
                        var7 = var3.bind(var1)(var2);
                        var3 = var7.bind(var1)();
                        var2 = var3.done;
                        var6 = false;
                        var5 = null;
                        var4 = var3;
                        var3 = undefined;
                        if(var2) { _fun0017_ip = 115; continue _fun0017 }
case 84:
                        var13 = var4.value;
                        var2 = _closure3_slot0;
                        var10 = var2.impressionCache;
                        var2 = var10.get;
                        var14 = var2.bind(var10)(var13);
                        if(!(var5 != var14)) { _fun0017_ip = 116; continue _fun0017 }
case 64:
                        var10 = _closure3_slot0;
                        var2 = var10.parseCacheKey;
                        var2 = var2.bind(var10)(var13);
                        var2 = var2.channelId;
                        var10 = var14.isRunning;
                        if(!var10) { _fun0017_ip = 117; continue _fun0017 }
case 118:
                        var11 = _closure1_slot23;
                        var12 = _closure3_slot0;
                        var10 = var12.chatChannelId;
                        var10 = var11.bind(var1)(var10);
                        var11 = var12.stopOne;
                        var10 = {};
                        var10['key'] = var13;
                        var10['shouldDelete'] = var6;
                        var10 = var11.bind(var12)(var10);
case 117:
                        var10 = _closure3_slot0;
                        var10 = var10.chatChannelId;
                        var3 = var2;
                        if(!(var3 === var10)) { _fun0017_ip = 116; continue _fun0017 }
case 19:
                        var12 = _closure1_slot23;
                        var10 = _closure3_slot0;
                        var11 = var10.chatChannelId;
                        var11 = var12.bind(var1)(var11);
                        var12 = var14.clone;
                        var11 = {};
                        var11['triggeredByStatusChange'] = var6;
                        var12 = var12.bind(var14)(var11);
                        var11 = var12.start;
                        var11 = var11.bind(var12)();
                        var11 = var10.impressionCache;
                        var10 = var11.set;
                        var10 = var10.bind(var11)(var13, var12);
                        var3 = var2;
case 116:
                        var10 = var7.bind(var1)();
                        var2 = var10.done;
                        var4 = var10;
                        if(!var2) { _fun0017_ip = 84; continue _fun0017 }
case 115:
                        return var1;
                    }
                };
                var1['updateImpressionsForChatBecameViewable'] = var4;
                var4 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.isChatViewable;
                        if(var2) { _fun0018_ip = 89; continue _fun0018 }
case 119:
                        var3 = _closure1_slot23;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var3 = _closure3_slot0;
                        var2 = var3.stopMany;
                        var2 = var2.bind(var3)();
                        _fun0018_ip = 120; continue _fun0018;
case 89:
                        var2 = _closure3_slot0;
                        var1 = var2.updateImpressionsForChatBecameViewable;
                        var1 = var1.bind(var2)();
case 120:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['refreshImpressions'] = var4;
                var4 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.getIsChatViewable;
                        var2 = var2.bind(var1)();
                        var1 = var1.isChatViewable;
                        var1 = var2 !== var1;
                        if(!var1) { _fun0019_ip = 121; continue _fun0019 }
case 3:
                        var5 = _closure1_slot23;
                        var4 = undefined;
                        var4 = var5.bind(var4)();
                        var3 = _closure3_slot0;
                        var3['isChatViewable'] = var2;
                        var2 = var3.refreshImpressions;
                        var2 = var2.bind(var3)();
                        var1 = true;
case 121:
                        return var1;
                    }
                };
                var1['checkChatViewable'] = var4;
                var4 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.isOnChannelNavigationRoute;
                        var2 = var2.bind(var3)();
                        var3 = var3.wasOnChannelNavigationRoute;
                        if(!(var2 !== var3)) { _fun0020_ip = 85; continue _fun0020 }
case 122:
                        var4 = _closure1_slot23;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        var1 = _closure3_slot0;
                        var3 = var1.checkChatViewable;
                        var3 = var3.bind(var1)();
                        var1['wasOnChannelNavigationRoute'] = var2;
case 85:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['checkIsOnChannelNavigationRoute'] = var4;
                var4 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var2 = var3.isSearchShowing;
                        var2 = var2.bind(var3)();
                        var3 = var3.wasSearchShowing;
                        if(!(var2 !== var3)) { _fun0021_ip = 85; continue _fun0021 }
case 122:
                        var4 = _closure1_slot23;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        var1 = _closure3_slot0;
                        var3 = var1.checkChatViewable;
                        var3 = var3.bind(var1)();
                        var1['wasSearchShowing'] = var2;
case 85:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['checkSearchShowing'] = var4;
                var4 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                        var4 = _closure3_slot0;
                        var1 = var4.chatChannelId;
                        var4['previousChatChannelId'] = var1;
                        var1 = arg1;
                        var4['chatChannelId'] = var1;
                        var5 = _closure1_slot23;
                        var1 = var4.previousChatChannelId;
                        var3 = var4.chatChannelId;
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var5 = var4.stopMany;
                        var3 = {};
                        var6 = true;
                        var3['shouldDeleteHiddenEmbeds'] = var6;
                        var3 = var5.bind(var4)(var3);
                        var3 = var4.checkChatViewable;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0022_ip = 123; continue _fun0022 }
case 124:
                        var3 = _closure3_slot0;
                        var2 = var3.refreshImpressions;
                        var2 = var2.bind(var3)();
case 123:
                        return var1;
                    }
                };
                var1['onChannelChanged'] = var4;
                var4 = function() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getOpenModalKey;
                        var3 = var2.bind(var3)();
                        var5 = _closure3_slot0;
                        var5 = var5.previouslyOpenModalKey;
                        if(!(var3 !== var5)) { _fun0023_ip = 124; continue _fun0023 }
case 125:
                        var5 = _closure1_slot23;
                        var2 = _closure3_slot0;
                        var4 = var2.previouslyOpenModalKey;
                        var4 = var5.bind(var1)(var4);
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['previouslyOpenModalKey'] = var3;
case 124:
                        return var1;
                    }
                };
                var1['checkOpenModalKey'] = var4;
                var4 = function() {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var2 = _closure1_slot20;
                        var14 = var2.quests;
                        var2 = global;
                        var4 = var2.Set;
                        var2 = var14.keys;
                        var26 = var2.bind(var14)();
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {constructor: {value: var4}});
                        var27 = var3;
                        var2 = new var27[var4](var26, var25);
                        var13 = var2 instanceof Object ? var2 : var3;
                        var3 = _closure1_slot24;
                        var2 = _closure3_slot0;
                        var4 = var2.impressionCache;
                        var2 = var4.keys;
                        var2 = var2.bind(var4)();
                        var11 = var3.bind(var1)(var2);
                        var3 = var11.bind(var1)();
                        var2 = var3.done;
                        var10 = true;
                        var9 = null;
                        var8 = 27;
                        var7 = var3;
                        var6 = undefined;
                        var5 = undefined;
                        var4 = undefined;
                        var3 = undefined;
                        if(var2) { _fun0024_ip = 126; continue _fun0024 }
case 127:
                        var23 = var7.value;
                        var16 = _closure3_slot0;
                        var2 = var16.parseCacheKey;
                        var20 = var2.bind(var16)(var23);
                        var16 = var13.has;
                        var2 = var20.questId;
                        var2 = var16.bind(var13)(var2);
                        var16 = var3;
                        if(!var2) { _fun0024_ip = 128; continue _fun0024 }
case 17:
                        var17 = var14.get;
                        var2 = var20.questId;
                        var19 = var17.bind(var14)(var2);
                        var2 = _closure3_slot0;
                        var17 = var2.questStatuses;
                        var2 = var20.questId;
                        var18 = var17[var2];
                        var2 = var9 != var19;
                        var17 = null;
                        if(!var2) { _fun0024_ip = 129; continue _fun0024 }
case 130:
                        var21 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var8];
                        var21 = var21.bind(var1)(var2);
                        var2 = var21.getQuestStatus;
                        var17 = var2.bind(var21)(var19);
case 129:
                        var6 = var19;
                        var16 = var3;
                        var4 = var17;
                        var5 = var18;
                        if(!(var4 !== var5)) { _fun0024_ip = 128; continue _fun0024 }
case 131:
                        var2 = _closure3_slot0;
                        var21 = var2.questStatuses;
                        var20 = var20.questId;
                        var21[var20] = var17;
                        var2 = var2.isChatViewable;
                        var6 = var19;
                        var5 = var18;
                        var4 = var17;
                        var16 = var3;
                        if(!var2) { _fun0024_ip = 128; continue _fun0024 }
case 132:
                        var2 = _closure3_slot0;
                        var20 = var2.impressionCache;
                        var2 = var20.get;
                        var2 = var2.bind(var20)(var23);
                        var21 = var9 == var2;
                        var20 = undefined;
                        if(var21) { _fun0024_ip = 133; continue _fun0024 }
case 134:
                        var20 = var2.isRunning;
case 133:
                        var6 = var19;
                        var5 = var18;
                        var4 = var17;
                        var16 = var2;
                        if(!(var10 === var20)) { _fun0024_ip = 128; continue _fun0024 }
case 135:
                        if(!(var9 == var19)) { _fun0024_ip = 136; continue _fun0024 }
case 137:
                        var22 = _closure3_slot0;
                        var21 = var22.stopOne;
                        var20 = {};
                        var20['key'] = var23;
                        var20['shouldDelete'] = var10;
                        var20 = var21.bind(var22)(var20);
                        var6 = var19;
                        var5 = var18;
                        var4 = var17;
                        var16 = var2;
                        _fun0024_ip = 128; continue _fun0024;
case 136:
                        var21 = var2.clone;
                        var20 = {};
                        var20['triggeredByStatusChange'] = var10;
                        var22 = var21.bind(var2)(var20);
                        var20 = var22.start;
                        var20 = var20.bind(var22)();
                        var20 = _closure3_slot0;
                        var21 = var20.impressionCache;
                        var20 = var21.set;
                        var20 = var20.bind(var21)(var23, var22);
                        var6 = var19;
                        var5 = var18;
                        var4 = var17;
                        var16 = var2;
case 128:
                        var17 = var11.bind(var1)();
                        var2 = var17.done;
                        var3 = var16;
                        var7 = var17;
                        if(!var2) { _fun0024_ip = 127; continue _fun0024 }
case 126:
                        return var1;
                    }
                };
                var1['handleQuestStoreChanged'] = var4;
                var4 = function() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var4 = _closure1_slot17;
                        var2 = var4.getChannelId;
                        var4 = var2.bind(var4)();
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        if(!(var4 !== var5)) { _fun0025_ip = 138; continue _fun0025 }
case 139:
                        var7 = _closure1_slot16;
                        var6 = var7.getChannel;
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        var10 = var6.bind(var7)(var5);
                        var7 = null;
                        var6 = var7 == var10;
                        var5 = undefined;
                        if(var6) { _fun0025_ip = 124; continue _fun0025 }
case 140:
                        var5 = var10.type;
case 124:
                        var6 = var7 != var5;
                        if(!var6) { _fun0025_ip = 141; continue _fun0025 }
case 61:
                        var8 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var5 = 26;
                        var9 = var11[var5];
                        var9 = var8.bind(var1)(var9);
                        var9 = var9.ChannelTypes;
                        var12 = var9.GUILD_STAGE_VOICE;
                        var9 = new Array(2);
                        var9[0] = var12;
                        var5 = var11[var5];
                        var5 = var8.bind(var1)(var5);
                        var5 = var5.ChannelTypes;
                        var5 = var5.GUILD_VOICE;
                        var9[1] = var5;
                        var8 = var9.includes;
                        var11 = var7 == var10;
                        var5 = undefined;
                        if(var11) { _fun0025_ip = 142; continue _fun0025 }
case 143:
                        var5 = var10.type;
case 142:
                        var6 = var8.bind(var9)(var5);
case 141:
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        var5 = var7 != var5;
                        if(!var5) { _fun0025_ip = 144; continue _fun0025 }
case 145:
                        var5 = var6;
case 144:
                        if(var5) { _fun0025_ip = 138; continue _fun0025 }
case 146:
                        var5 = _closure1_slot23;
                        var3 = _closure3_slot0;
                        var2 = var3.chatChannelId;
                        var2 = var5.bind(var1)(var2);
                        var2 = var3.onChannelChanged;
                        var2 = var2.bind(var3)(var4);
case 138:
                        return var1;
                    }
                };
                var1['handleSelectedChannelStoreChanged'] = var4;
                var4 = function() {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure1_slot10;
                        var2 = var3.isOpen;
                        var3 = var2.bind(var3)();
                        var5 = _closure3_slot0;
                        var5 = var5.wasActionSheetOpen;
                        if(!(var3 !== var5)) { _fun0026_ip = 37; continue _fun0026 }
case 40:
                        var4 = _closure1_slot23;
                        var4 = var4.bind(var1)();
                        var2 = _closure3_slot0;
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['wasActionSheetOpen'] = var3;
case 37:
                        return var1;
                    }
                };
                var1['handleActionSheetStoreChanged'] = var4;
                var4 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure1_slot19;
                        var2 = var3.getState;
                        var3 = var2.bind(var3)();
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 25;
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.AppStates;
                        var2 = var2.ACTIVE;
                        var3 = var3 === var2;
                        var5 = _closure3_slot0;
                        var5 = var5.wasAppActive;
                        if(!(var5 !== var3)) { _fun0027_ip = 147; continue _fun0027 }
case 74:
                        var4 = _closure1_slot23;
                        var4 = var4.bind(var1)();
                        var2 = _closure3_slot0;
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['wasAppActive'] = var3;
case 147:
                        return var1;
                    }
                };
                var1['handleAppStateStoreChanged'] = var4;
                var4 = function() {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure1_slot14;
                        var2 = var3.getState;
                        var3 = var2.bind(var3)();
                        var2 = var3.isAnyVoicePanelOpen;
                        var3 = var2.bind(var3)();
                        var5 = _closure3_slot0;
                        var5 = var5.wasAnyVoicePanelOpen;
                        if(!(var3 !== var5)) { _fun0028_ip = 140; continue _fun0028 }
case 79:
                        var4 = _closure1_slot23;
                        var4 = var4.bind(var1)();
                        var2 = _closure3_slot0;
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['wasAnyVoicePanelOpen'] = var3;
case 140:
                        return var1;
                    }
                };
                var1['handleVoicePanelStoreChanged'] = var4;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.checkSearchShowing;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                var1['handleChannelDetailsStoreChanged'] = var4;
                var4 = function() {
                    _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure1_slot11;
                        var2 = var3.getAllChatOpen;
                        var4 = var2.bind(var3)();
                        var5 = _closure1_slot24;
                        var6 = global;
                        var7 = var6.Set;
                        var9 = var6.Object;
                        var8 = var9.keys;
                        var3 = _closure3_slot0;
                        var3 = var3.channelsWithChatOpen;
                        var24 = var8.bind(var9)(var3);
                        var3 = new Array(0);
                        var23 = 0;
                        var25 = var3;
                        var23 = arraySpread(var25, var24, var23);
                        var9 = var6.Object;
                        var6 = var9.keys;
                        var24 = var6.bind(var9)(var4);
                        var25 = var3;
                        var6 = arraySpread(var25, var24, var23);
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {constructor: {value: var7}});
                        var26 = var6;
                        var25 = var3;
                        var3 = new var26[var7](var25, var24);
                        var3 = var3 instanceof Object ? var3 : var6;
                        var14 = var5.bind(var1)(var3);
                        var5 = var14.bind(var1)();
                        var3 = var5.done;
                        var13 = null;
                        var12 = 26;
                        var11 = var5;
                        var10 = undefined;
                        var9 = undefined;
                        var8 = undefined;
                        var7 = undefined;
                        if(var3) { _fun0029_ip = 148; continue _fun0029 }
case 149:
                        var6 = var11.value;
                        var5 = _closure1_slot16;
                        var3 = var5.getChannel;
                        var21 = var3.bind(var5)(var6);
                        var5 = var13 == var21;
                        var3 = undefined;
                        if(var5) { _fun0029_ip = 150; continue _fun0029 }
case 82:
                        var3 = var21.type;
case 150:
                        var19 = var10;
                        var18 = var9;
                        var17 = var8;
                        var16 = var7;
                        if(!(var13 != var3)) { _fun0029_ip = 151; continue _fun0029 }
case 69:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var20 = var3[var12];
                        var20 = var5.bind(var1)(var20);
                        var20 = var20.ChannelTypes;
                        var22 = var20.GUILD_STAGE_VOICE;
                        var20 = new Array(2);
                        var20[0] = var22;
                        var3 = var3[var12];
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.ChannelTypes;
                        var3 = var3.GUILD_VOICE;
                        var20[1] = var3;
                        var5 = var20.includes;
                        var22 = var13 == var21;
                        var3 = undefined;
                        if(var22) { _fun0029_ip = 152; continue _fun0029 }
case 153:
                        var3 = var21.type;
case 152:
                        var3 = var5.bind(var20)(var3);
                        var19 = var10;
                        var18 = var9;
                        var17 = var8;
                        var16 = var7;
                        if(!var3) { _fun0029_ip = 151; continue _fun0029 }
case 154:
                        var3 = _closure3_slot0;
                        var3 = var3.channelsWithChatOpen;
                        var21 = var3[var6];
                        var5 = var13 != var21;
                        if(!var5) { _fun0029_ip = 155; continue _fun0029 }
case 156:
                        var5 = var21;
case 155:
                        var20 = var4[var6];
                        var3 = var13 != var20;
                        if(!var3) { _fun0029_ip = 135; continue _fun0029 }
case 157:
                        var3 = var20;
case 135:
                        var19 = var21;
                        var18 = var20;
                        var17 = var5;
                        var16 = var3;
                        if(!(var17 === var16)) { _fun0029_ip = 158; continue _fun0029 }
case 151:
                        var20 = var14.bind(var1)();
                        var5 = var20.done;
                        var10 = var19;
                        var9 = var18;
                        var8 = var17;
                        var7 = var16;
                        var11 = var20;
                        if(var5) { _fun0029_ip = 148; continue _fun0029 }
case 159:
                        _fun0029_ip = 149; continue _fun0029;
case 158:
                        if(!var3) { _fun0029_ip = 160; continue _fun0029 }
case 161:
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        if(!(var6 === var5)) { _fun0029_ip = 162; continue _fun0029 }
case 160:
                        if(var3) { _fun0029_ip = 163; continue _fun0029 }
case 164:
                        var3 = _closure3_slot0;
                        var5 = var3.previousChatChannelId;
                        var3 = var3.chatChannelId;
                        if(!(var5 !== var3)) { _fun0029_ip = 163; continue _fun0029 }
case 110:
                        var7 = _closure3_slot0;
                        var5 = var7.onChannelChanged;
                        var3 = var7.previousChatChannelId;
                        var3 = var5.bind(var7)(var3);
                        _fun0029_ip = 148; continue _fun0029;
case 163:
                        var5 = _closure3_slot0;
                        var3 = var5.checkChatViewable;
                        var3 = var3.bind(var5)();
                        _fun0029_ip = 148; continue _fun0029;
case 162:
                        var5 = _closure3_slot0;
                        var3 = var5.onChannelChanged;
                        var3 = var3.bind(var5)(var6);
case 148:
                        var3 = _closure3_slot0;
                        var2 = {};
                        var25 = var2;
                        var24 = var4;
                        var4 = copyDataProperties(var25, var24);
                        var3['channelsWithChatOpen'] = var2;
                        return var1;
                    }
                };
                var1['handleChannelRTCStoreChanged'] = var4;
                var4 = function() {
                    var2 = _closure1_slot23;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var3 = _closure3_slot0;
                    var2 = var3.checkIsOnChannelNavigationRoute;
                    var2 = var2.bind(var3)();
                    var2 = var3.checkOpenModalKey;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var1['handleNavigationStateChanged'] = var4;
                var4 = function() {
                    _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                        var2 = _closure1_slot18;
                        var1 = var2.getAlert;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        var2 = var1 != var2;
                        var4 = _closure3_slot0;
                        var4 = var4.wasAlertOpen;
                        if(!(var2 !== var4)) { _fun0030_ip = 35; continue _fun0030 }
case 78:
                        var4 = _closure1_slot23;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        var1 = _closure3_slot0;
                        var3 = var1.checkChatViewable;
                        var3 = var3.bind(var1)();
                        var1['wasAlertOpen'] = var2;
case 35:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleAlertStoreChanged'] = var4;
                var4 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1['unsubscribeFromVoicePanelStore'] = var4;
                var3 = function() {
                    var1 = undefined;
                    return var1;
                };
                var1['unsubscribeFromChannelDetailsStore'] = var3;
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var15 = var4;
                var3 = new var15[var3](var14);
                var6 = var3 instanceof Object ? var3 : var4;
                var5 = var6.set;
                var4 = _closure1_slot20;
                var3 = var1.handleQuestStoreChanged;
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.set;
                var4 = _closure1_slot17;
                var3 = var1.handleSelectedChannelStoreChanged;
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.set;
                var4 = _closure1_slot10;
                var3 = var1.handleActionSheetStoreChanged;
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.set;
                var4 = _closure1_slot19;
                var3 = var1.handleAppStateStoreChanged;
                var6 = var5.bind(var6)(var4, var3);
                var5 = var6.set;
                var4 = _closure1_slot11;
                var3 = var1.handleChannelRTCStoreChanged;
                var5 = var5.bind(var6)(var4, var3);
                var4 = var5.set;
                var3 = _closure1_slot18;
                var2 = var1.handleAlertStoreChanged;
                var2 = var4.bind(var5)(var3, var2);
                var1['stores'] = var2;
                var2 = {};
                var3 = var1.handleVisibleMessagesChanged;
                var2['QUESTS_VISIBLE_MOBILE_MESSAGES_CHANGED'] = var3;
                var1['actions'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot9;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = '_initialize';
        var5['key'] = var1;
        var1 = function value() {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var6 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 28;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getRootNavigationRef;
                var7 = var3.bind(var4)();
                var3 = null;
                if(!(var3 != var7)) { _fun0031_ip = 45; continue _fun0031 }
case 40:
                var5 = var7.addListener;
                var4 = var6.handleNavigationStateChanged;
                var3 = 'state';
                var3 = var5.bind(var7)(var3, var4);
case 45:
                var5 = _closure1_slot14;
                var4 = var5.subscribe;
                var3 = var6.handleVoicePanelStoreChanged;
                var3 = var4.bind(var5)(var3);
                var6['unsubscribeFromVoicePanelStore'] = var3;
                var5 = _closure1_slot12;
                var4 = var5.subscribe;
                var3 = var6.handleChannelDetailsStoreChanged;
                var3 = var4.bind(var5)(var3);
                var6['unsubscribeFromChannelDetailsStore'] = var3;
                var5 = _closure1_slot27;
                var11 = _closure2_slot0;
                var10 = '_initialize';
                var8 = 3;
                var12 = undefined;
                var9 = var6;
                var3 = var12[var5](var11, var10, var9, var8, var7);
                var2 = new Array(0);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var6 = function value() {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var6 = this;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 28;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.getRootNavigationRef;
                var7 = var3.bind(var4)();
                var3 = null;
                if(!(var3 != var7)) { _fun0032_ip = 45; continue _fun0032 }
case 40:
                var5 = var7.removeListener;
                var4 = var6.handleNavigationStateChanged;
                var3 = 'state';
                var3 = var5.bind(var7)(var3, var4);
case 45:
                var3 = var6.unsubscribeFromVoicePanelStore;
                var3 = var3.bind(var6)();
                var3 = var6.unsubscribeFromChannelDetailsStore;
                var3 = var3.bind(var6)();
                var5 = _closure1_slot27;
                var11 = _closure2_slot0;
                var10 = '_terminate';
                var8 = 3;
                var12 = undefined;
                var9 = var6;
                var3 = var12[var5](var11, var10, var9, var8, var7);
                var2 = new Array(0);
                var2 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[1] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/managers/QuestMobileEmbedVisibilityManager.native.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
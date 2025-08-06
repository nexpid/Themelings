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
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
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
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
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
 345:
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
    var _closure1_slot25 = var1;
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
            _closure1_slot26 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _superPropGet(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arg1;
            var7 = arg3;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot8;
            var4 = _closure1_slot7;
            var1 = 1;
            var3 = 3;
            var8 = var1 & var3;
            var1 = var5;
            if(!var8) { _fun0005_ip = 44; continue _fun0005 }
 39:
            var1 = var5.prototype;
 44:
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = arg2;
            var5 = var6.bind(var5)(var4, var1, var7);
            var _closure2_slot1 = var5;
            var1 = 2;
            var3 = var1 & var3;
            var1 = var5;
            if(!var3) { _fun0005_ip = 99; continue _fun0005 }
 78:
            var4 = 'function';
            var3 = typeof var5;
            var1 = var5;
            if(!(var4 === var3)) { _fun0005_ip = 99; continue _fun0005 }
 92:
            var1 = function(arg1) {
                var4 = _closure2_slot1;
                var3 = var4.apply;
                var2 = _closure2_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
 99:
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
 0:
            var6 = 0;
            var1 = copyRestArgs(var6);
            var3 = _closure1_slot22;
            var1 = null;
            if(!(var1 == var3)) { _fun0006_ip = 66; continue _fun0006 }
 19:
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
            _fun0006_ip = 70; continue _fun0006;
 66:
            var1 = _closure1_slot22;
 70:
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
 0:
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
                if(var1) { _fun0007_ip = 86; continue _fun0007 }
 73:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var6, var11);
                _fun0007_ip = 120; continue _fun0007;
 86:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var4)(var6);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
 120:
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
 0:
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
                        if(var3) { _fun0008_ip = 284; continue _fun0008 }
 74:
                        var3 = var4.value;
                        var14 = var3.message;
                        var12 = var3.percentVisible;
                        var16 = var3.state;
                        var3 = var14.codedLinks;
                        var3 = var3.length;
                        var3 = var3 <= var9;
                        if(var3) { _fun0008_ip = 151; continue _fun0008 }
 113:
                        var13 = _closure1_slot21;
                        var17 = var13.SENDING;
                        var15 = new Array(2);
                        var15[0] = var17;
                        var13 = var13.SEND_FAILED;
                        var15[1] = var13;
                        var13 = var15.includes;
                        var3 = var13.bind(var15)(var16);
 151:
                        if(var3) { _fun0008_ip = 266; continue _fun0008 }
 154:
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
                        if(!(var12 > var3)) { _fun0008_ip = 266; continue _fun0008 }
 220:
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
 266:
                        var12 = var10.bind(var1)();
                        var3 = var12.done;
                        var4 = var12;
                        if(!var3) { _fun0008_ip = 74; continue _fun0008 }
 284:
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
 0:
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
                            if(!(var4 === var3)) { _fun0009_ip = 139; continue _fun0009 }
 49:
                            var4 = var2.code;
                            var5 = _closure4_slot2;
                            var3 = var5.has;
                            var3 = var3.bind(var5)(var4);
                            if(var3) { _fun0009_ip = 139; continue _fun0009 }
 74:
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
 139:
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['findQuestEmbedsInMessage'] = var4;
                var4 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
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
                        if(var3) { _fun0010_ip = 244; continue _fun0010 }
 48:
                        var3 = var4.value;
                        var12 = var3.questId;
                        var18 = var3.questContentPosition;
                        var16 = var3.messageId;
                        var17 = var3.channelId;
                        var11 = _closure1_slot20;
                        var3 = var11.getQuest;
                        var15 = var3.bind(var11)(var12);
                        if(!(var6 != var15)) { _fun0010_ip = 226; continue _fun0010 }
 97:
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
 226:
                        var11 = var9.bind(var1)();
                        var3 = var11.done;
                        var4 = var11;
                        if(!var3) { _fun0010_ip = 48; continue _fun0010 }
 244:
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
 0:
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
                        if(!var4) { _fun0011_ip = 85; continue _fun0011 }
 78:
                        var4 = var3 != var10;
                        var7 = var10;
 85:
                        if(!var4) { _fun0011_ip = 94; continue _fun0011 }
 88:
                        var4 = var7.isRunning;
 94:
                        if(var4) { _fun0011_ip = 259; continue _fun0011 }
 100:
                        var4 = var10;
                        if(!(var3 != var4)) { _fun0011_ip = 131; continue _fun0011 }
 107:
                        var9 = var10.clone;
                        var7 = {};
                        var11 = var6.triggeredByStatusChange;
                        var7['triggeredByStatusChange'] = var11;
                        var4 = var9.bind(var10)(var7);
 131:
                        if(!(var3 == var4)) { _fun0011_ip = 204; continue _fun0011 }
 135:
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
 204:
                        var3 = _closure3_slot0;
                        var3 = var3.isChatViewable;
                        if(!var3) { _fun0011_ip = 226; continue _fun0011 }
 217:
                        var6 = var4.isRunning;
                        var3 = !var6;
 226:
                        if(!var3) { _fun0011_ip = 238; continue _fun0011 }
 229:
                        var3 = var4.start;
                        var3 = var3.bind(var4)();
 238:
                        var2 = _closure3_slot0;
                        var3 = var2.impressionCache;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var5, var4);
 259:
                        return var1;
                    }
                };
                var1['ensureImpression'] = var4;
                var4 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
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
                        if(var1) { _fun0012_ip = 56; continue _fun0012 }
 50:
                        var8 = var7.isRunning;
 56:
                        var1 = var6 != var8;
                        if(!var1) { _fun0012_ip = 66; continue _fun0012 }
 63:
                        var1 = var8;
 66:
                        if(!(var6 != var7)) { _fun0012_ip = 80; continue _fun0012 }
 70:
                        var6 = var7.stop;
                        var6 = var6.bind(var7)();
 80:
                        if(!var3) { _fun0012_ip = 115; continue _fun0012 }
 83:
                        var3 = _closure1_slot23;
                        var3 = var3.bind(var5)();
                        var2 = _closure3_slot0;
                        var3 = var2.impressionCache;
                        var2 = var3.del;
                        var2 = var2.bind(var3)(var4);
 115:
                        return var1;
                    }
                };
                var1['stopOne'] = var4;
                var4 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0013_ip = 30; continue _fun0013 }
 9:
                        var3 = {};
                        var4 = new Array(0);
                        var3['visibleEmbeds'] = var4;
                        var4 = false;
                        var3['shouldDeleteHiddenEmbeds'] = var4;
                        var2 = var3;
 30:
                        var5 = var2.visibleEmbeds;
                        if(!(var5 === var1)) { _fun0013_ip = 44; continue _fun0013 }
 40:
                        var5 = new Array(0);
 44:
                        var7 = var2.shouldDeleteHiddenEmbeds;
                        if(!(var7 === var1)) { _fun0013_ip = 56; continue _fun0013 }
 54:
                        var7 = false;
 56:
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
                        if(var2) { _fun0013_ip = 208; continue _fun0013 }
 149:
                        var10 = var3.value;
                        var2 = var6.has;
                        var2 = var2.bind(var6)(var10);
                        if(var2) { _fun0013_ip = 193; continue _fun0013 }
 167:
                        var9 = _closure3_slot0;
                        var8 = var9.stopOne;
                        var2 = {};
                        var2['key'] = var10;
                        var2['shouldDelete'] = var7;
                        var2 = var8.bind(var9)(var2);
 193:
                        var8 = var4.bind(var1)();
                        var2 = var8.done;
                        var3 = var8;
                        if(!var2) { _fun0013_ip = 149; continue _fun0013 }
 208:
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
 0:
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
                        if(!var1) { _fun0014_ip = 68; continue _fun0014 }
 60:
                        var2 = 'channel';
                        var1 = var2 === var3;
 68:
                        return var1;
                    }
                };
                var1['isOnChannelNavigationRoute'] = var4;
                var4 = function() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var1 = _closure3_slot0;
                        var3 = var1.chatChannelId;
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0015_ip = 46; continue _fun0015 }
 22:
                        var4 = _closure1_slot13;
                        var2 = _closure3_slot0;
                        var3 = var2.chatChannelId;
                        var2 = undefined;
                        var1 = var4.bind(var2)(var3);
 46:
                        return var1;
                    }
                };
                var1['isSearchShowing'] = var4;
                var4 = function() {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var1 = _closure3_slot0;
                        var1 = var1.chatChannelId;
                        var2 = null;
                        if(!(var2 != var1)) { _fun0016_ip = 530; continue _fun0016 }
 22:
                        var5 = _closure1_slot10;
                        var3 = var5.isOpen;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0016_ip = 516; continue _fun0016 }
 45:
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
                        if(!(var6 === var5)) { _fun0016_ip = 504; continue _fun0016 }
 100:
                        var7 = _closure1_slot16;
                        var6 = var7.getChannel;
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        var5 = var6.bind(var7)(var5);
                        var6 = var2 == var5;
                        var8 = undefined;
                        if(var6) { _fun0016_ip = 138; continue _fun0016 }
 133:
                        var8 = var5.type;
 138:
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
                        if(!var6) { _fun0016_ip = 205; continue _fun0016 }
 202:
                        var6 = var7;
 205:
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
                        if(!(var2 != var9)) { _fun0016_ip = 289; continue _fun0016 }
 273:
                        if(!(var9 !== var5)) { _fun0016_ip = 289; continue _fun0016 }
 277:
                        var5 = _closure1_slot23;
                        var5 = var5.bind(var3)();
                        var5 = false;
                        return var5;
 289:
                        var9 = _closure3_slot0;
                        var5 = var9.isSearchShowing;
                        var5 = var5.bind(var9)();
                        if(var5) { _fun0016_ip = 492; continue _fun0016 }
 309:
                        var9 = _closure1_slot18;
                        var5 = var9.getAlert;
                        var5 = var5.bind(var9)();
                        if(!(var2 == var5)) { _fun0016_ip = 480; continue _fun0016 }
 330:
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var10];
                        var5 = var9.bind(var3)(var5);
                        var5 = var5.ChannelTypes;
                        var5 = var5.GUILD_VOICE;
                        var5 = var8 === var5;
                        if(!var5) { _fun0016_ip = 369; continue _fun0016 }
 366:
                        var5 = var7;
 369:
                        var2 = var2 != var8;
                        if(!var2) { _fun0016_ip = 385; continue _fun0016 }
 376:
                        var7 = _closure1_slot15;
                        var2 = var7.bind(var3)(var8);
 385:
                        var8 = _closure1_slot14;
                        var7 = var8.getState;
                        var8 = var7.bind(var8)();
                        var7 = var8.isAnyVoicePanelOpen;
                        var7 = var7.bind(var8)();
                        var9 = _closure3_slot0;
                        var8 = var9.isOnChannelNavigationRoute;
                        var8 = var8.bind(var9)();
                        if(!var2) { _fun0016_ip = 429; continue _fun0016 }
 426:
                        var2 = var8;
 429:
                        if(!var2) { _fun0016_ip = 435; continue _fun0016 }
 432:
                        var2 = !var7;
 435:
                        if(!var2) { _fun0016_ip = 441; continue _fun0016 }
 438:
                        var2 = !var6;
 441:
                        if(!var2) { _fun0016_ip = 447; continue _fun0016 }
 444:
                        var2 = !var5;
 447:
                        if(var2) { _fun0016_ip = 453; continue _fun0016 }
 450:
                        var2 = var6;
 453:
                        if(var2) { _fun0016_ip = 459; continue _fun0016 }
 456:
                        var2 = var5;
 459:
                        var5 = _closure1_slot23;
                        var4 = _closure3_slot0;
                        var4 = var4.chatChannelId;
                        var4 = var5.bind(var3)(var4);
                        return var2;
 480:
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var3)();
                        var2 = false;
                        return var2;
 492:
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var3)();
                        var2 = false;
                        return var2;
 504:
                        var2 = _closure1_slot23;
                        var2 = var2.bind(var3)();
                        var2 = false;
                        return var2;
 516:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
                        var1 = false;
                        return var1;
 530:
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
 0:
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
                        if(var2) { _fun0017_ip = 271; continue _fun0017 }
 68:
                        var13 = var4.value;
                        var2 = _closure3_slot0;
                        var10 = var2.impressionCache;
                        var2 = var10.get;
                        var14 = var2.bind(var10)(var13);
                        if(!(var5 != var14)) { _fun0017_ip = 253; continue _fun0017 }
 100:
                        var10 = _closure3_slot0;
                        var2 = var10.parseCacheKey;
                        var2 = var2.bind(var10)(var13);
                        var2 = var2.channelId;
                        var10 = var14.isRunning;
                        if(!var10) { _fun0017_ip = 170; continue _fun0017 }
 129:
                        var11 = _closure1_slot23;
                        var12 = _closure3_slot0;
                        var10 = var12.chatChannelId;
                        var10 = var11.bind(var1)(var10);
                        var11 = var12.stopOne;
                        var10 = {};
                        var10['key'] = var13;
                        var10['shouldDelete'] = var6;
                        var10 = var11.bind(var12)(var10);
 170:
                        var10 = _closure3_slot0;
                        var10 = var10.chatChannelId;
                        var3 = var2;
                        if(!(var3 === var10)) { _fun0017_ip = 253; continue _fun0017 }
 187:
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
 253:
                        var10 = var7.bind(var1)();
                        var2 = var10.done;
                        var4 = var10;
                        if(!var2) { _fun0017_ip = 68; continue _fun0017 }
 271:
                        return var1;
                    }
                };
                var1['updateImpressionsForChatBecameViewable'] = var4;
                var4 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var2 = _closure3_slot0;
                        var2 = var2.isChatViewable;
                        if(var2) { _fun0018_ip = 45; continue _fun0018 }
 16:
                        var3 = _closure1_slot23;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var3 = _closure3_slot0;
                        var2 = var3.stopMany;
                        var2 = var2.bind(var3)();
                        _fun0018_ip = 59; continue _fun0018;
 45:
                        var2 = _closure3_slot0;
                        var1 = var2.updateImpressionsForChatBecameViewable;
                        var1 = var1.bind(var2)();
 59:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['refreshImpressions'] = var4;
                var4 = function() {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var1 = _closure3_slot0;
                        var2 = var1.getIsChatViewable;
                        var2 = var2.bind(var1)();
                        var1 = var1.isChatViewable;
                        var1 = var2 !== var1;
                        if(!var1) { _fun0019_ip = 65; continue _fun0019 }
 30:
                        var5 = _closure1_slot23;
                        var4 = undefined;
                        var4 = var5.bind(var4)();
                        var3 = _closure3_slot0;
                        var3['isChatViewable'] = var2;
                        var2 = var3.refreshImpressions;
                        var2 = var2.bind(var3)();
                        var1 = true;
 65:
                        return var1;
                    }
                };
                var1['checkChatViewable'] = var4;
                var4 = function() {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = var3.isOnChannelNavigationRoute;
                        var2 = var2.bind(var3)();
                        var3 = var3.wasOnChannelNavigationRoute;
                        if(!(var2 !== var3)) { _fun0020_ip = 60; continue _fun0020 }
 27:
                        var4 = _closure1_slot23;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        var1 = _closure3_slot0;
                        var3 = var1.checkChatViewable;
                        var3 = var3.bind(var1)();
                        var1['wasOnChannelNavigationRoute'] = var2;
 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['checkIsOnChannelNavigationRoute'] = var4;
                var4 = function() {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var3 = _closure3_slot0;
                        var2 = var3.isSearchShowing;
                        var2 = var2.bind(var3)();
                        var3 = var3.wasSearchShowing;
                        if(!(var2 !== var3)) { _fun0021_ip = 60; continue _fun0021 }
 27:
                        var4 = _closure1_slot23;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        var1 = _closure3_slot0;
                        var3 = var1.checkChatViewable;
                        var3 = var3.bind(var1)();
                        var1['wasSearchShowing'] = var2;
 60:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['checkSearchShowing'] = var4;
                var4 = function(arg1) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
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
                        if(var3) { _fun0022_ip = 101; continue _fun0022 }
 87:
                        var3 = _closure3_slot0;
                        var2 = var3.refreshImpressions;
                        var2 = var2.bind(var3)();
 101:
                        return var1;
                    }
                };
                var1['onChannelChanged'] = var4;
                var4 = function() {
                    _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
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
                        if(!(var3 !== var5)) { _fun0023_ip = 87; continue _fun0023 }
 52:
                        var5 = _closure1_slot23;
                        var2 = _closure3_slot0;
                        var4 = var2.previouslyOpenModalKey;
                        var4 = var5.bind(var1)(var4);
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['previouslyOpenModalKey'] = var3;
 87:
                        return var1;
                    }
                };
                var1['checkOpenModalKey'] = var4;
                var4 = function() {
                    _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
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
                        if(var2) { _fun0024_ip = 481; continue _fun0024 }
 124:
                        var23 = var7.value;
                        var16 = _closure3_slot0;
                        var2 = var16.parseCacheKey;
                        var20 = var2.bind(var16)(var23);
                        var16 = var13.has;
                        var2 = var20.questId;
                        var2 = var16.bind(var13)(var2);
                        var16 = var3;
                        if(!var2) { _fun0024_ip = 460; continue _fun0024 }
 169:
                        var17 = var14.get;
                        var2 = var20.questId;
                        var19 = var17.bind(var14)(var2);
                        var2 = _closure3_slot0;
                        var17 = var2.questStatuses;
                        var2 = var20.questId;
                        var18 = var17[var2];
                        var2 = var9 != var19;
                        var17 = null;
                        if(!var2) { _fun0024_ip = 242; continue _fun0024 }
 214:
                        var21 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var2 = var2[var8];
                        var21 = var21.bind(var1)(var2);
                        var2 = var21.getQuestStatus;
                        var17 = var2.bind(var21)(var19);
 242:
                        var6 = var19;
                        var16 = var3;
                        var4 = var17;
                        var5 = var18;
                        if(!(var4 !== var5)) { _fun0024_ip = 460; continue _fun0024 }
 261:
                        var2 = _closure3_slot0;
                        var21 = var2.questStatuses;
                        var20 = var20.questId;
                        var21[var20] = var17;
                        var2 = var2.isChatViewable;
                        var6 = var19;
                        var5 = var18;
                        var4 = var17;
                        var16 = var3;
                        if(!var2) { _fun0024_ip = 460; continue _fun0024 }
 305:
                        var2 = _closure3_slot0;
                        var20 = var2.impressionCache;
                        var2 = var20.get;
                        var2 = var2.bind(var20)(var23);
                        var21 = var9 == var2;
                        var20 = undefined;
                        if(var21) { _fun0024_ip = 340; continue _fun0024 }
 334:
                        var20 = var2.isRunning;
 340:
                        var6 = var19;
                        var5 = var18;
                        var4 = var17;
                        var16 = var2;
                        if(!(var10 === var20)) { _fun0024_ip = 460; continue _fun0024 }
 356:
                        if(!(var9 == var19)) { _fun0024_ip = 400; continue _fun0024 }
 360:
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
                        _fun0024_ip = 460; continue _fun0024;
 400:
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
 460:
                        var17 = var11.bind(var1)();
                        var2 = var17.done;
                        var3 = var16;
                        var7 = var17;
                        if(!var2) { _fun0024_ip = 124; continue _fun0024 }
 481:
                        return var1;
                    }
                };
                var1['handleQuestStoreChanged'] = var4;
                var4 = function() {
                    _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var4 = _closure1_slot17;
                        var2 = var4.getChannelId;
                        var4 = var2.bind(var4)();
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        if(!(var4 !== var5)) { _fun0025_ip = 236; continue _fun0025 }
 47:
                        var7 = _closure1_slot16;
                        var6 = var7.getChannel;
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        var10 = var6.bind(var7)(var5);
                        var7 = null;
                        var6 = var7 == var10;
                        var5 = undefined;
                        if(var6) { _fun0025_ip = 87; continue _fun0025 }
 82:
                        var5 = var10.type;
 87:
                        var6 = var7 != var5;
                        if(!var6) { _fun0025_ip = 183; continue _fun0025 }
 94:
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
                        if(var11) { _fun0025_ip = 178; continue _fun0025 }
 173:
                        var5 = var10.type;
 178:
                        var6 = var8.bind(var9)(var5);
 183:
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        var5 = var7 != var5;
                        if(!var5) { _fun0025_ip = 203; continue _fun0025 }
 200:
                        var5 = var6;
 203:
                        if(var5) { _fun0025_ip = 236; continue _fun0025 }
 206:
                        var5 = _closure1_slot23;
                        var3 = _closure3_slot0;
                        var2 = var3.chatChannelId;
                        var2 = var5.bind(var1)(var2);
                        var2 = var3.onChannelChanged;
                        var2 = var2.bind(var3)(var4);
 236:
                        return var1;
                    }
                };
                var1['handleSelectedChannelStoreChanged'] = var4;
                var4 = function() {
                    _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                        var2 = _closure1_slot23;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        var3 = _closure1_slot10;
                        var2 = var3.isOpen;
                        var3 = var2.bind(var3)();
                        var5 = _closure3_slot0;
                        var5 = var5.wasActionSheetOpen;
                        if(!(var3 !== var5)) { _fun0026_ip = 72; continue _fun0026 }
 44:
                        var4 = _closure1_slot23;
                        var4 = var4.bind(var1)();
                        var2 = _closure3_slot0;
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['wasActionSheetOpen'] = var3;
 72:
                        return var1;
                    }
                };
                var1['handleActionSheetStoreChanged'] = var4;
                var4 = function() {
                    _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
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
                        if(!(var5 !== var3)) { _fun0027_ip = 108; continue _fun0027 }
 80:
                        var4 = _closure1_slot23;
                        var4 = var4.bind(var1)();
                        var2 = _closure3_slot0;
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['wasAppActive'] = var3;
 108:
                        return var1;
                    }
                };
                var1['handleAppStateStoreChanged'] = var4;
                var4 = function() {
                    _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
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
                        if(!(var3 !== var5)) { _fun0028_ip = 82; continue _fun0028 }
 54:
                        var4 = _closure1_slot23;
                        var4 = var4.bind(var1)();
                        var2 = _closure3_slot0;
                        var4 = var2.checkChatViewable;
                        var4 = var4.bind(var2)();
                        var2['wasAnyVoicePanelOpen'] = var3;
 82:
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
 0:
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
                        if(var3) { _fun0029_ip = 498; continue _fun0029 }
 165:
                        var6 = var11.value;
                        var5 = _closure1_slot16;
                        var3 = var5.getChannel;
                        var21 = var3.bind(var5)(var6);
                        var5 = var13 == var21;
                        var3 = undefined;
                        if(var5) { _fun0029_ip = 198; continue _fun0029 }
 193:
                        var3 = var21.type;
 198:
                        var19 = var10;
                        var18 = var9;
                        var17 = var8;
                        var16 = var7;
                        if(!(var13 != var3)) { _fun0029_ip = 372; continue _fun0029 }
 217:
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
                        if(var22) { _fun0029_ip = 298; continue _fun0029 }
 293:
                        var3 = var21.type;
 298:
                        var3 = var5.bind(var20)(var3);
                        var19 = var10;
                        var18 = var9;
                        var17 = var8;
                        var16 = var7;
                        if(!var3) { _fun0029_ip = 372; continue _fun0029 }
 318:
                        var3 = _closure3_slot0;
                        var3 = var3.channelsWithChatOpen;
                        var21 = var3[var6];
                        var5 = var13 != var21;
                        if(!var5) { _fun0029_ip = 342; continue _fun0029 }
 339:
                        var5 = var21;
 342:
                        var20 = var4[var6];
                        var3 = var13 != var20;
                        if(!var3) { _fun0029_ip = 356; continue _fun0029 }
 353:
                        var3 = var20;
 356:
                        var19 = var21;
                        var18 = var20;
                        var17 = var5;
                        var16 = var3;
                        if(!(var17 === var16)) { _fun0029_ip = 404; continue _fun0029 }
 372:
                        var20 = var14.bind(var1)();
                        var5 = var20.done;
                        var10 = var19;
                        var9 = var18;
                        var8 = var17;
                        var7 = var16;
                        var11 = var20;
                        if(var5) { _fun0029_ip = 498; continue _fun0029 }
 399:
                        _fun0029_ip = 165; continue _fun0029;
 404:
                        if(!var3) { _fun0029_ip = 421; continue _fun0029 }
 407:
                        var5 = _closure3_slot0;
                        var5 = var5.chatChannelId;
                        if(!(var6 === var5)) { _fun0029_ip = 483; continue _fun0029 }
 421:
                        if(var3) { _fun0029_ip = 467; continue _fun0029 }
 424:
                        var3 = _closure3_slot0;
                        var5 = var3.previousChatChannelId;
                        var3 = var3.chatChannelId;
                        if(!(var5 !== var3)) { _fun0029_ip = 467; continue _fun0029 }
 444:
                        var7 = _closure3_slot0;
                        var5 = var7.onChannelChanged;
                        var3 = var7.previousChatChannelId;
                        var3 = var5.bind(var7)(var3);
                        _fun0029_ip = 498; continue _fun0029;
 467:
                        var5 = _closure3_slot0;
                        var3 = var5.checkChatViewable;
                        var3 = var3.bind(var5)();
                        _fun0029_ip = 498; continue _fun0029;
 483:
                        var5 = _closure3_slot0;
                        var3 = var5.onChannelChanged;
                        var3 = var3.bind(var5)(var6);
 498:
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
 0:
                        var2 = _closure1_slot18;
                        var1 = var2.getAlert;
                        var2 = var1.bind(var2)();
                        var1 = null;
                        var2 = var1 != var2;
                        var4 = _closure3_slot0;
                        var4 = var4.wasAlertOpen;
                        if(!(var2 !== var4)) { _fun0030_ip = 70; continue _fun0030 }
 40:
                        var4 = _closure1_slot23;
                        var3 = undefined;
                        var3 = var4.bind(var3)();
                        var1 = _closure3_slot0;
                        var3 = var1.checkChatViewable;
                        var3 = var3.bind(var1)();
                        var1['wasAlertOpen'] = var2;
 70:
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
 0:
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
                if(!(var3 != var7)) { _fun0031_ip = 66; continue _fun0031 }
 44:
                var5 = var7.addListener;
                var4 = var6.handleNavigationStateChanged;
                var3 = 'state';
                var3 = var5.bind(var7)(var3, var4);
 66:
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
 0:
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
                if(!(var3 != var7)) { _fun0032_ip = 66; continue _fun0032 }
 44:
                var5 = var7.removeListener;
                var4 = var6.handleNavigationStateChanged;
                var3 = 'state';
                var3 = var5.bind(var7)(var3, var4);
 66:
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
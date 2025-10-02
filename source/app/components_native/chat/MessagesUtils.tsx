// app/components_native/chat/MessagesUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
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
            var9 = _closure1_slot23;
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
            var7 = _closure1_slot23;
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
    var _closure1_slot22 = var1;
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
    var _closure1_slot23 = var1;
    var7 = function getVisibleMessages(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var15 = var1.firstVisibleMessageRowIndex;
            var14 = var1.lastVisibleMessageRowIndex;
            var13 = var1.firstVisibleMessagePercentVisible;
            var12 = var1.lastVisibleMessagePercentVisible;
            var11 = var1.chatManager;
            var10 = var1.channelId;
            var9 = null;
            if(!(var9 != var15)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            if(!(var9 != var14)) { _fun0004_ip = 36; continue _fun0004 }
case 38:
            var1 = 0;
            if(!(!(var15 < var1))) { _fun0004_ip = 36; continue _fun0004 }
case 39:
            if(!(!(var14 < var1))) { _fun0004_ip = 36; continue _fun0004 }
case 35:
            var1 = var11._rows;
            if(!(var9 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 40:
            var1 = var11._messages;
            if(!(var9 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 11:
            var1 = new Array(0);
            var16 = var15 >= var14;
            var6 = 1;
            var5 = var15;
            var4 = undefined;
            var3 = undefined;
            var2 = undefined;
            if(!var16) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var16 = var11._rows;
            var19 = var16[var5];
            var18 = var4;
            var17 = var3;
            var16 = var2;
            if(!(var9 != var19)) { _fun0004_ip = 8; continue _fun0004 }
case 43:
            var21 = var19.type;
            var20 = _closure1_slot19;
            var20 = var20.MESSAGE;
            var18 = var4;
            var17 = var3;
            var16 = var2;
            if(!(var21 === var20)) { _fun0004_ip = 8; continue _fun0004 }
case 44:
            var21 = var19.message;
            var22 = var9 == var21;
            var20 = undefined;
            if(var22) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var20 = var21.id;
case 45:
            var18 = var21;
            var17 = var3;
            var16 = var2;
            if(!(var9 != var20)) { _fun0004_ip = 8; continue _fun0004 }
case 47:
            if(!(var5 === var15)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var20 = var13;
            if(!(var9 == var20)) { _fun0004_ip = 50; continue _fun0004 }
case 48:
            var22 = var5 === var14;
            if(!var22) { _fun0004_ip = 51; continue _fun0004 }
case 52:
            var22 = var9 != var12;
case 51:
            var20 = var6;
            if(!var22) { _fun0004_ip = 50; continue _fun0004 }
case 53:
            var20 = var12;
case 50:
            var19 = var19.message;
            var23 = var19.id;
            var22 = _closure1_slot9;
            var19 = var22.getMessage;
            var19 = var19.bind(var22)(var10, var23);
            var18 = var21;
            var17 = var20;
            var16 = var19;
            if(!(var9 != var16)) { _fun0004_ip = 8; continue _fun0004 }
case 54:
            var23 = var1.push;
            var22 = {};
            var22['message'] = var19;
            var22['percentVisible'] = var20;
            var24 = var19.state;
            var22['state'] = var24;
            var22 = var23.bind(var1)(var22);
            var18 = var21;
            var17 = var20;
            var16 = var19;
case 8:
            var5 = var5 - 1;
            var4 = var18;
            var3 = var17;
            var2 = var16;
            if(var5 >= var14) { _fun0004_ip = 42; continue _fun0004 }
case 41:
            return var1;
case 36:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot24 = var7;
    var6 = function shouldJumpToOriginalPost(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var1 = var2.isForumPost;
            var1 = var1.bind(var2)();
            if(!var1) { _fun0005_ip = 55; continue _fun0005 }
case 56:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 33;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.castChannelIdAsMessageId;
            var2 = arg2;
            var3 = var3.bind(var4)(var2);
            var2 = arg3;
            var2 = var2.jumpTargetId;
            var1 = var3 === var2;
case 55:
            if(!var1) { _fun0005_ip = 57; continue _fun0005 }
case 58:
            var2 = arg4;
            var1 = !var2;
case 57:
            return var1;
        }
    };
    var _closure1_slot25 = var6;
    var5 = function recordTimings(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 36;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var4.bind(var1)(var3);
            var6 = var7.recordMessageRender;
            var4 = var2.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var5 = var4.bind(var2)(var3);
            var4 = var2.hasFetched;
            if(var4) { _fun0006_ip = 40; continue _fun0006 }
case 59:
            var3 = var2.ready;
            if(!var3) { _fun0006_ip = 60; continue _fun0006 }
case 58:
            var8 = var2.cached;
            var3 = !var8;
case 60:
            var4 = var3;
case 40:
            var9 = var2.hasMoreAfter;
            var12 = arg1;
            var13 = var7;
            var11 = var5;
            var10 = var4;
            var2 = var13[var6](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot26 = var5;
    var4 = function getMessage(arg1, arg2) {
        var5 = arg1;
        var2 = arg2;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var2 = 37;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.find;
        var2 = var5.toArray;
        var2 = var2.bind(var5)();
        var1 = function(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arg1;
                var4 = var1.id;
                var3 = var1.nonce;
                var1 = _closure2_slot0;
                var1 = var4 === var1;
                if(var1) { _fun0007_ip = 61; continue _fun0007 }
case 34:
                var2 = _closure2_slot0;
                var1 = var3 === var2;
case 61:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot27 = var4;
    var1 = function _handleTapNavBar() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var3 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 62; continue _fun0008 }
case 63:
                    var2 = undefined;
                    var _closure4_slot0 = var2;
                    var _closure4_slot1 = var2;
                    var9 = var3.channel;
                    var11 = var3.useReducedMotion;
                    _closure4_slot0 = var11;
                    var5 = var3.isNearTop;
                    var10 = var3.messages;
                    var8 = var3.findMessageIndex;
                    var6 = var3.scrollToTop;
                    _closure4_slot1 = var6;
                    var3 = var3.chatRef;
                    var6 = var9.isForumPost;
                    var6 = var6.bind(var9)();
                    if(!var6) { _fun0008_ip = 64; continue _fun0008 }
case 65:
                    if(var5) { _fun0008_ip = 64; continue _fun0008 }
case 11:
                    var6 = _closure1_slot27;
                    var13 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var12 = 33;
                    var5 = var5[var12];
                    var14 = var13.bind(var2)(var5);
                    var13 = var14.castChannelIdAsMessageId;
                    var5 = var9.id;
                    var5 = var13.bind(var14)(var5);
                    var5 = var6.bind(var2)(var10, var5);
                    var6 = null;
                    if(!(var6 != var5)) { _fun0008_ip = 66; continue _fun0008 }
case 67:
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var12];
                    var12 = var10.bind(var2)(var5);
                    var10 = var12.castChannelIdAsMessageId;
                    var5 = var9.id;
                    var5 = var10.bind(var12)(var5);
                    var5 = var8.bind(var2)(var5);
                    if(!(var6 != var5)) { _fun0008_ip = 68; continue _fun0008 }
case 46:
                    var8 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var6 = 44;
                    var6 = var10[var6];
                    var10 = var8.bind(var2)(var6);
                    var8 = var10.scrollTo;
                    var6 = var3.current;
                    var3 = {};
                    var11 = !var11;
                    var3['animated'] = var11;
                    var3 = var8.bind(var10)(var6, var5, var3);
                    var3 = global;
                    var6 = var3.setTimeout;
                    var3 = 10;
                    var5 = var3 * var5;
                    var3 = function() {
                        var3 = _closure4_slot1;
                        var1 = _closure4_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3 = var6.bind(var2)(var3, var5);
                    _fun0008_ip = 64; continue _fun0008;
case 68:
                    return var2;
case 66:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 45;
                    var3 = var6[var3];
                    var6 = var5.bind(var2)(var3);
                    var5 = var6.fetchMessages;
                    var3 = {};
                    var8 = var9.id;
                    var3['channelId'] = var8;
                    var8 = {};
                    var9 = var9.id;
                    var8['messageId'] = var9;
                    var9 = false;
                    var8['flash'] = var9;
                    var3['jump'] = var8;
                    var7 = _closure1_slot18;
                    var3['limit'] = var7;
                    var3 = var5.bind(var6)(var3);
                    SaveGenerator(address=354);
case 69:
                    return var3;
case 70:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0008_ip = 71; continue _fun0008 }
case 72:
                    var5 = global;
                    var6 = var5.setTimeout;
                    var5 = function() {
                        var3 = _closure4_slot1;
                        var1 = _closure4_slot0;
                        var2 = !var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var4 = 50;
                    var4 = var6.bind(var2)(var5, var4);
                    _fun0008_ip = 64; continue _fun0008;
case 71:
                    return var3;
case 64:
                    return var2;
case 62:
                    return var1;
                }
            };
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
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var10[var1];
    var1 = undefined;
    var8 = var11.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.updateShouldShowJumpToPresentButton;
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 9;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 10;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 11;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.AnalyticEvents;
    var _closure1_slot14 = var11;
    var11 = var8.MessageEmbedTypes;
    var _closure1_slot15 = var11;
    var11 = var8.MessageTypes;
    var _closure1_slot16 = var11;
    var11 = var8.Permissions;
    var _closure1_slot17 = var11;
    var8 = var8.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot18 = var8;
    var8 = 12;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var11 = var8.RowType;
    var _closure1_slot19 = var11;
    var11 = var8.Changeset;
    var _closure1_slot20 = var11;
    var8 = var8.SeparatorType;
    var _closure1_slot21 = var8;
    var8 = 51;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'components_native/chat/MessagesUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = function getLongPressSelectedMedia(arg1, arg2, arg3, arg4, arg5) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var9 = arg1;
            var6 = arg2;
            var1 = arg3;
            var12 = arg4;
            var7 = arg5;
            var4 = var9.type;
            var2 = _closure1_slot16;
            var3 = var2.THREAD_STARTER_MESSAGE;
            var2 = var9;
            if(!(var4 === var3)) { _fun0009_ip = 73; continue _fun0009 }
case 74:
            var3 = var9.messageReference;
            var4 = null;
            var2 = var9;
            if(!(var4 != var3)) { _fun0009_ip = 73; continue _fun0009 }
case 75:
            var11 = _closure1_slot5;
            var10 = var11.getMessageByReference;
            var3 = var9.messageReference;
            var3 = var10.bind(var11)(var3);
            var3 = var3.message;
            var2 = var9;
            if(!(var4 != var3)) { _fun0009_ip = 73; continue _fun0009 }
case 65:
            var2 = var3;
case 73:
            var3 = 'attachment';
            if(!(var3 !== var1)) { _fun0009_ip = 76; continue _fun0009 }
case 77:
            var4 = 'embed';
            if(!(var4 !== var1)) { _fun0009_ip = 78; continue _fun0009 }
case 79:
            var10 = 'component';
            if(!(var10 !== var1)) { _fun0009_ip = 80; continue _fun0009 }
case 81:
            var1 = null;
            return var1;
case 80:
            var1 = null;
            if(!(var1 != var12)) { _fun0009_ip = 82; continue _fun0009 }
case 83:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 14;
            var4 = var11[var4];
            var11 = undefined;
            var13 = var9.bind(var11)(var4);
            var9 = var13.flattenComponents;
            var4 = var2.components;
            var9 = var9.bind(var13)(var4);
            var4 = var9.get;
            var9 = var4.bind(var9)(var12);
            if(!(var1 != var9)) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var12 = var9.type;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var4 = 15;
            var4 = var14[var4];
            var4 = var13.bind(var11)(var4);
            var4 = var4.ComponentType;
            var4 = var4.MEDIA_GALLERY;
            if(!(var12 !== var4)) { _fun0009_ip = 86; continue _fun0009 }
case 87:
            return var1;
case 86:
            if(!(var1 != var7)) { _fun0009_ip = 88; continue _fun0009 }
case 89:
            var4 = var9.items;
            var4 = var4[var7];
            if(!(var1 != var4)) { _fun0009_ip = 90; continue _fun0009 }
case 91:
            var7 = var4.media;
            var4 = {};
            var4['sourceType'] = var10;
            var4['source'] = var9;
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 13;
            var9 = var12[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.isVideoContentType;
            var9 = var7.contentType;
            var10 = var10.bind(var11)(var9);
            var9 = 'image';
            if(!var10) { _fun0009_ip = 92; continue _fun0009 }
case 93:
            var9 = 'video';
case 92:
            var4['mediaType'] = var9;
            var7 = var7.url;
            var4['mediaUrl'] = var7;
            return var4;
case 90:
            return var1;
case 88:
            return var1;
case 84:
            return var1;
case 82:
            return var1;
case 78:
            var1 = var2.embeds;
            var4 = var1[var6];
            var _closure2_slot0 = var4;
            var1 = null;
            if(!(var1 != var4)) { _fun0009_ip = 94; continue _fun0009 }
case 95:
            var9 = function getEmbedMedia(arg1, arg2, arg3) {
                var1 = {};
                var2 = 'embed';
                var1['sourceType'] = var2;
                var2 = _closure2_slot0;
                var1['source'] = var2;
                var2 = arg1;
                var1['mediaType'] = var2;
                var2 = arg2;
                var1['mediaUrl'] = var2;
                var2 = arg3;
                var1['contentType'] = var2;
                return var1;
            };
            var7 = var4.type;
            var5 = _closure1_slot15;
            var5 = var5.IMAGE;
            if(!(var7 === var5)) { _fun0009_ip = 96; continue _fun0009 }
case 62:
            var5 = var4.url;
            if(!(var1 == var5)) { _fun0009_ip = 97; continue _fun0009 }
case 96:
            var7 = var4.type;
            var5 = _closure1_slot15;
            var5 = var5.GIFV;
            if(!(var7 === var5)) { _fun0009_ip = 98; continue _fun0009 }
case 99:
            var5 = var4.url;
            if(!(var1 == var5)) { _fun0009_ip = 100; continue _fun0009 }
case 98:
            var7 = var4.type;
            var5 = _closure1_slot15;
            var5 = var5.RICH;
            if(!(var7 === var5)) { _fun0009_ip = 101; continue _fun0009 }
case 102:
            var7 = var4.image;
            var10 = var1 == var7;
            var11 = undefined;
            var5 = undefined;
            if(var10) { _fun0009_ip = 103; continue _fun0009 }
case 104:
            var5 = var7.url;
case 103:
            if(!(var1 == var5)) { _fun0009_ip = 105; continue _fun0009 }
case 106:
            var7 = var4.video;
            var10 = var1 == var7;
            var5 = undefined;
            if(var10) { _fun0009_ip = 107; continue _fun0009 }
case 108:
            var5 = var7.url;
case 107:
            if(!(var1 == var5)) { _fun0009_ip = 109; continue _fun0009 }
case 101:
            return var1;
case 109:
            var5 = var4.video;
            var10 = var5.url;
            var5 = var4.video;
            var7 = var5.contentType;
            var5 = 'video';
            var5 = var9.bind(var11)(var5, var10, var7);
            return var5;
case 105:
            var5 = var4.image;
            var10 = var5.url;
            var5 = var4.image;
            var7 = var5.contentType;
            var5 = 'image';
            var5 = var9.bind(var11)(var5, var10, var7);
            return var5;
case 100:
            var10 = var4.url;
            var7 = undefined;
            var5 = 'video';
            var5 = var9.bind(var7)(var5, var10);
            return var5;
case 97:
            var7 = var4.url;
            var5 = undefined;
            var4 = 'image';
            var4 = var9.bind(var5)(var4, var7);
            return var4;
case 94:
            return var1;
case 76:
            var1 = var2.attachments;
            var4 = var1[var6];
            var5 = null;
            if(!(var5 == var4)) { _fun0009_ip = 110; continue _fun0009 }
case 111:
            var1 = var2.getContentMessage;
            var2 = var1.bind(var2)();
            var7 = var5 == var2;
            var1 = undefined;
            if(var7) { _fun0009_ip = 112; continue _fun0009 }
case 113:
            var2 = var2.attachments;
            var1 = var2[var6];
case 112:
            var4 = var1;
case 110:
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0009_ip = 114; continue _fun0009 }
case 115:
            var2 = {};
            var2['sourceType'] = var3;
            var2['source'] = var4;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var10 = 13;
            var6 = var3[var10];
            var3 = undefined;
            var9 = var7.bind(var3)(var6);
            var7 = var9.isVideoFile;
            var6 = var4.filename;
            var7 = var7.bind(var9)(var6);
            var6 = 'video';
            if(var7) { _fun0009_ip = 116; continue _fun0009 }
case 117:
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var10];
            var11 = var9.bind(var3)(var7);
            var9 = var11.isAudioFile;
            var7 = var4.filename;
            var9 = var9.bind(var11)(var7);
            var7 = 'audio';
            if(var9) { _fun0009_ip = 118; continue _fun0009 }
case 119:
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var10];
            var10 = var9.bind(var3)(var8);
            var9 = var10.isImageFile;
            var8 = var4.filename;
            var9 = var9.bind(var10)(var8);
            var8 = 'file';
            if(!var9) { _fun0009_ip = 120; continue _fun0009 }
case 121:
            var8 = 'image';
case 120:
            var7 = var8;
case 118:
            var6 = var7;
case 116:
            var2['mediaType'] = var6;
            var6 = var4.url;
            var2['mediaUrl'] = var6;
            var4 = var4.content_type;
            var5 = var5 != var4;
            var3 = undefined;
            if(!var5) { _fun0009_ip = 122; continue _fun0009 }
case 123:
            var3 = var4;
case 122:
            var2['contentType'] = var3;
            var1 = var2;
case 114:
            return var1;
        }
    };
    var3['getLongPressSelectedMedia'] = var8;
    var8 = function toObscuredMedia(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var3 = arg1;
            var2 = var3.sourceType;
            var1 = 'attachment';
            if(!(var1 !== var2)) { _fun0010_ip = 124; continue _fun0010 }
case 125:
            var4 = var3.sourceType;
            var2 = 'embed';
            var1 = null;
            if(!(var2 === var4)) { _fun0010_ip = 126; continue _fun0010 }
case 33:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 16;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ObscuredMediaTypes;
            var4 = var4.Embed;
            var2['type'] = var4;
            var4 = var3.source;
            var2['media'] = var4;
            var1 = var2;
case 126:
            _fun0010_ip = 127; continue _fun0010;
case 124:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var4 = 16;
            var5 = var5[var4];
            var4 = undefined;
            var4 = var6.bind(var4)(var5);
            var4 = var4.ObscuredMediaTypes;
            var4 = var4.Attachment;
            var2['type'] = var4;
            var3 = var3.source;
            var2['media'] = var3;
            var1 = var2;
case 127:
            return var1;
        }
    };
    var3['toObscuredMedia'] = var8;
    var8 = function handleAddOrRemoveReaction(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var10 = arg1;
            var7 = arg2;
            var9 = arg3;
            var8 = arguments[3];
            var6 = arguments[4];
            var1 = undefined;
            if(!(var8 === var1)) { _fun0011_ip = 31; continue _fun0011 }
case 128:
            var8 = false;
case 31:
            if(!(var6 === var1)) { _fun0011_ip = 59; continue _fun0011 }
case 129:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 17;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ReactionLocations;
            var6 = var2.MESSAGE;
case 59:
            var2 = var7.getGuildId;
            var16 = var2.bind(var7)();
            var3 = _closure1_slot13;
            var2 = var3.getCurrentUser;
            var14 = var2.bind(var3)();
            var2 = null;
            var3 = var2 == var14;
            var15 = undefined;
            if(var3) { _fun0011_ip = 77; continue _fun0011 }
case 130:
            var15 = var14.id;
case 77:
            var11 = var2 != var16;
            if(!var11) { _fun0011_ip = 131; continue _fun0011 }
case 132:
            var4 = _closure1_slot8;
            var3 = var4.canChatInGuild;
            var11 = var3.bind(var4)(var16);
case 131:
            var3 = var2 != var16;
            if(!var3) { _fun0011_ip = 133; continue _fun0011 }
case 134:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 18;
            var4 = var13[var4];
            var12 = var12.bind(var1)(var4);
            var4 = var12.shouldShowMembershipVerificationGate;
            var3 = var4.bind(var12)(var16);
case 133:
            var4 = var2 != var16;
            var13 = null;
            if(!var4) { _fun0011_ip = 135; continue _fun0011 }
case 136:
            var4 = var2 != var15;
            var13 = null;
            if(!var4) { _fun0011_ip = 135; continue _fun0011 }
case 44:
            var12 = _closure1_slot7;
            var4 = var12.getMember;
            var13 = var4.bind(var12)(var16, var15);
case 135:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 19;
            var4 = var15[var4];
            var12 = var12.bind(var1)(var4);
            var4 = var12.isMemberCommunicationDisabled;
            var4 = var4.bind(var12)(var13);
            var12 = var7.isArchivedLockedThread;
            var12 = var12.bind(var7)();
            if(var12) { _fun0011_ip = 137; continue _fun0011 }
case 50:
            if(!(var2 == var9)) { _fun0011_ip = 138; continue _fun0011 }
case 18:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 23;
            var12 = var15[var12];
            var15 = var13.bind(var1)(var12);
            var13 = var15.handleAddNewReactions;
            var12 = {};
            var12['burst'] = var8;
            var22 = var15;
            var21 = var7;
            var20 = var10;
            var19 = var6;
            var18 = var12;
            var12 = var22[var13](var21, var20, var19, var18, var17);
            _fun0011_ip = 139; continue _fun0011;
case 138:
            if(!var8) { _fun0011_ip = 140; continue _fun0011 }
case 141:
            var12 = var9.me_burst;
            var13 = !var12;
            var12 = true;
            if(!(var12 === var13)) { _fun0011_ip = 140; continue _fun0011 }
case 142:
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var12 = 24;
            var12 = var15[var12];
            var13 = var13.bind(var1)(var12);
            var12 = var13.isPremium;
            var12 = var12.bind(var13)(var14);
            if(var12) { _fun0011_ip = 140; continue _fun0011 }
case 143:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 23;
            var12 = var14[var12];
            var13 = var13.bind(var1)(var12);
            var12 = var13.handleOutOfSuperReactions;
            var12 = var12.bind(var13)();
            return var12;
case 140:
            var12 = var9.me;
            var13 = true;
            if(!(var13 !== var12)) { _fun0011_ip = 144; continue _fun0011 }
case 145:
            if(!var8) { _fun0011_ip = 146; continue _fun0011 }
case 147:
            var12 = var9.me_burst;
            if(!(var13 !== var12)) { _fun0011_ip = 144; continue _fun0011 }
case 146:
            if(var3) { _fun0011_ip = 148; continue _fun0011 }
case 149:
            var12 = var7.isPrivate;
            var12 = var12.bind(var7)();
            if(var12) { _fun0011_ip = 150; continue _fun0011 }
case 151:
            if(!var11) { _fun0011_ip = 148; continue _fun0011 }
case 150:
            if(var4) { _fun0011_ip = 148; continue _fun0011 }
case 152:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 17;
            var4 = var12[var4];
            var14 = var11.bind(var1)(var4);
            var13 = var14.addReaction;
            var21 = var7.id;
            var19 = var9.emoji;
            var4 = {};
            var4['burst'] = var8;
            var22 = var14;
            var20 = var10;
            var18 = var6;
            var17 = var4;
            var4 = var22[var13](var21, var20, var19, var18, var17, var16);
            var4 = var8;
            if(var4) { _fun0011_ip = 153; continue _fun0011 }
case 154:
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 25;
            var11 = var15[var11];
            var13 = var12.bind(var1)(var11);
            var12 = var13.triggerHapticFeedback;
            var14 = _closure1_slot1;
            var11 = 26;
            var11 = var15[var11];
            var11 = var14.bind(var1)(var11);
            var11 = var11.IMPACT_LIGHT;
            var4 = var12.bind(var13)(var11);
case 153:
            var4 = undefined;
            return var4;
case 148:
            if(!var3) { _fun0011_ip = 139; continue _fun0011 }
case 155:
            var3 = var7.getGuildId;
            var4 = var3.bind(var7)();
            if(!(var2 != var4)) { _fun0011_ip = 139; continue _fun0011 }
case 97:
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 27;
            var2 = var11[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.openMemberVerificationModal;
            var2 = var2.bind(var3)(var4);
            return var2;
case 144:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 25;
            var2 = var4[var2];
            var12 = var3.bind(var1)(var2);
            var11 = var12.triggerHapticFeedback;
            var13 = _closure1_slot1;
            var2 = 26;
            var2 = var4[var2];
            var2 = var13.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            var2 = var11.bind(var12)(var2);
            var2 = 17;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.removeReaction;
            var2 = {};
            var11 = var7.id;
            var2['channelId'] = var11;
            var2['messageId'] = var10;
            var9 = var9.emoji;
            var2['emoji'] = var9;
            var2['location'] = var6;
            var6 = {};
            var6['burst'] = var8;
            var2['options'] = var6;
            var2 = var3.bind(var4)(var2);
            var2 = undefined;
            return var2;
case 137:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 20;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.open;
            var2 = {};
            var6 = 'ARCHIVED_POST_REACTIONS_DISABLED_TOAST';
            var2['key'] = var6;
            var6 = var7.isForumPost;
            var6 = var6.bind(var7)();
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 21;
            var8 = var11[var7];
            var8 = var10.bind(var1)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var1)(var7);
            var7 = var7.t;
            if(var6) { _fun0011_ip = 156; continue _fun0011 }
case 157:
            var6 = var7.X2L3OT;
            var6 = var8.bind(var9)(var6);
            _fun0011_ip = 158; continue _fun0011;
case 156:
            var7 = var7.EJQrFh;
            var6 = var8.bind(var9)(var7);
case 158:
            var2['content'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 22;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var2['icon'] = var5;
            var2 = var3.bind(var4)(var2);
case 139:
            return var1;
        }
    };
    var3['handleAddOrRemoveReaction'] = var8;
    var8 = function handleToggleFollowForumPost(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 25;
            var3 = var4[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var3);
            var6 = var7.triggerHapticFeedback;
            var3 = _closure1_slot1;
            var2 = 26;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            var2 = var6.bind(var7)(var2);
            var2 = 28;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var2 = arg2;
            if(var2) { _fun0012_ip = 130; continue _fun0012 }
case 159:
            var3 = var4.joinThread;
            var2 = 'iOS Forum Toolbar';
            var2 = var3.bind(var4)(var5, var2);
            _fun0012_ip = 160; continue _fun0012;
case 130:
            var3 = var4.leaveThread;
            var2 = 'iOS Forum Toolbar';
            var2 = var3.bind(var4)(var5, var2);
case 160:
            return var1;
        }
    };
    var3['handleToggleFollowForumPost'] = var8;
    var8 = function handleCopyLinkForumPost(arg1, arg2, arg3) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var9 = arg2;
            var6 = _closure1_slot6;
            var1 = var6.getChannel;
            var8 = var1.bind(var6)(var9);
            var5 = var6.getChannel;
            var3 = null;
            var7 = var3 == var8;
            var1 = undefined;
            var4 = undefined;
            if(var7) { _fun0013_ip = 161; continue _fun0013 }
case 162:
            var4 = var8.parent_id;
case 161:
            var7 = var5.bind(var6)(var4);
            var5 = var3 == var7;
            var4 = undefined;
            if(var5) { _fun0013_ip = 55; continue _fun0013 }
case 163:
            var5 = var7.isMediaChannel;
            var4 = var5.bind(var7)();
case 55:
            var10 = var3 != var4;
            if(!var10) { _fun0013_ip = 164; continue _fun0013 }
case 165:
            var10 = var4;
case 164:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 29;
            var4 = var6[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.trackForumPostLinkCopied;
            var4 = {};
            var4['postId'] = var9;
            var11 = arg3;
            var4['location'] = var11;
            var4 = var5.bind(var6)(var4);
            if(!var10) { _fun0013_ip = 166; continue _fun0013 }
case 131:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 30;
            var4 = var6[var4];
            var11 = var5.bind(var1)(var4);
            var6 = var11.trackWithMetadata;
            var4 = _closure1_slot14;
            var5 = var4.MEDIA_POST_SHARE_PROMPT_CLICKED;
            var4 = {};
            var4['media_post_id'] = var9;
            var4 = var6.bind(var11)(var5, var4);
case 166:
            var5 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 25;
            var4 = var12[var4];
            var6 = var5.bind(var1)(var4);
            var5 = var6.triggerHapticFeedback;
            var11 = _closure1_slot1;
            var4 = 26;
            var4 = var12[var4];
            var4 = var11.bind(var1)(var4);
            var4 = var4.IMPACT_LIGHT;
            var4 = var5.bind(var6)(var4);
            if(!(var3 != var8)) { _fun0013_ip = 25; continue _fun0013 }
case 52:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 31;
            var3 = var11[var3];
            var5 = var6.bind(var1)(var3);
            var4 = var5.copy;
            var3 = 32;
            var3 = var11[var3];
            var6 = var6.bind(var1)(var3);
            var3 = var6.getChannelLinkToCopy;
            var3 = var3.bind(var6)(var8, var7);
            var3 = var4.bind(var5)(var3);
            _fun0013_ip = 167; continue _fun0013;
case 25:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 31;
            var3 = var7[var3];
            var5 = var6.bind(var1)(var3);
            var4 = var5.copy;
            var3 = 32;
            var3 = var7[var3];
            var8 = var6.bind(var1)(var3);
            var7 = var8.getChannelPermalink;
            var3 = true;
            var6 = undefined;
            if(!(var3 === var10)) { _fun0013_ip = 168; continue _fun0013 }
case 82:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 33;
            var3 = var11[var3];
            var10 = var10.bind(var1)(var3);
            var3 = var10.castChannelIdAsMessageId;
            var6 = var3.bind(var10)(var9);
case 168:
            var3 = arg1;
            var3 = var7.bind(var8)(var3, var9, var6);
            var3 = var4.bind(var5)(var3);
case 167:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 34;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.presentLinkCopied;
            var2 = var2.bind(var3)();
            return var1;
        }
    };
    var3['handleCopyLinkForumPost'] = var8;
    var8 = function findMessageIndex(arg1, arg2) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg2;
            var1 = null;
            if(!(var1 == var4)) { _fun0014_ip = 169; continue _fun0014 }
case 170:
            var1 = undefined;
            return var1;
case 169:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 35;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.findMessageRowIndex;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['findMessageIndex'] = var8;
    var3['getVisibleMessages'] = var7;
    var3['shouldJumpToOriginalPost'] = var6;
    var3['recordTimings'] = var5;
    var5 = function findMessageIndexInRows(arg1, arg2) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            if(!(var1 == var4)) { _fun0015_ip = 169; continue _fun0015 }
case 170:
            var1 = undefined;
            return var1;
case 169:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 35;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.findMessageRowIndex;
            var1 = arg2;
            var1 = var2.bind(var3)(var1, var4);
            return var1;
        }
    };
    var3['findMessageIndexInRows'] = var5;
    var3['getMessage'] = var4;
    var4 = function isLoadingAtTop(arg1, arg2) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg2;
            if(var1) { _fun0016_ip = 171; continue _fun0016 }
case 172:
            var1 = false;
            return var1;
case 171:
            var2 = _closure1_slot22;
            var5 = undefined;
            var1 = arg1;
            var4 = var2.bind(var5)(var1);
            var2 = var4.bind(var5)();
            var1 = var2.done;
            var3 = var2;
            if(var1) { _fun0016_ip = 173; continue _fun0016 }
case 74:
            var1 = var3.value;
            var7 = var1.changeType;
            var2 = _closure1_slot20;
            var2 = var2.INSERT;
            if(!(var7 !== var2)) { _fun0016_ip = 174; continue _fun0016 }
case 30:
            var7 = var4.bind(var5)();
            var2 = var7.done;
            var3 = var7;
            if(var2) { _fun0016_ip = 173; continue _fun0016 }
case 175:
            _fun0016_ip = 74; continue _fun0016;
case 174:
            var2 = var1.index;
            var1 = 1;
            var1 = var2 <= var1;
            return var1;
case 173:
            var1 = false;
            return var1;
        }
    };
    var3['isLoadingAtTop'] = var4;
    var4 = function handleTapTableView(arg1, arg2) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 38;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var4.bind(var1)(var2);
            var2 = var4.isIOS;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0017_ip = 57; continue _fun0017 }
case 162:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 39;
            var3 = var5[var3];
            var3 = var4.bind(var1)(var3);
            var3 = var3.KeyboardTypes;
            var4 = var3.SYSTEM;
            var3 = arg2;
            var2 = var3 !== var4;
case 57:
            if(!var2) { _fun0017_ip = 77; continue _fun0017 }
case 60:
            var2 = arg1;
            var3 = var2.current;
            var2 = null;
            if(!(var2 != var3)) { _fun0017_ip = 77; continue _fun0017 }
case 176:
            var2 = var3.closeCustomKeyboard;
            var2 = var2.bind(var3)();
case 77:
            return var1;
        }
    };
    var3['handleTapTableView'] = var4;
    var4 = function handleTapShowAltText(arg1) {
        var5 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 40;
        var4 = var2[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var4);
        var5 = var6.openLazy;
        var4 = _closure1_slot0;
        var3 = 42;
        var3 = var2[var3];
        var4 = var4.bind(var1)(var3);
        var3 = 41;
        var3 = var2[var3];
        var2 = var2.paths;
        var4 = var4.bind(var1)(var3, var2);
        var3 = {};
        var2 = arg1;
        var3['description'] = var2;
        var2 = true;
        var3['showBackdrop'] = var2;
        var2 = 'MediaViewerAltTextSheet';
        var2 = var5.bind(var6)(var4, var2, var3);
        return var1;
    };
    var3['handleTapShowAltText'] = var4;
    var4 = function handleMediaPlayFinishedAnalytics(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 43;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot14;
            var3 = var2.MEDIA_PLAY_FINISHED;
            var2 = {};
            var8 = var7.playWallTimeMs;
            var2['play_time_sec'] = var8;
            var8 = var7.playWallTimeMs;
            var2['play_wall_time_ms'] = var8;
            var8 = var7.firstPlayWaitingMs;
            var2['first_play_waiting_ms'] = var8;
            var8 = var7.stallCount;
            var2['stall_count'] = var8;
            var8 = var7.stallMs;
            var2['stall_ms'] = var8;
            var8 = var7.seekCount;
            var2['seek_count'] = var8;
            var8 = null;
            var2['seek_waiting_ms'] = var8;
            var9 = var7.mediaSource;
            var2['media_source'] = var9;
            var10 = var7.mimeType;
            var11 = var8 != var10;
            var9 = 'video';
            if(!var11) { _fun0018_ip = 177; continue _fun0018 }
case 178:
            var9 = var10;
case 177:
            var2['mime_type'] = var9;
            var2['file_size'] = var8;
            var7 = var7.fileDurationSec;
            var2['file_duration_sec'] = var7;
            var7 = _closure1_slot10;
            var6 = var7.getType;
            var6 = var6.bind(var7)();
            var2['connection_type'] = var6;
            var6 = var7.getEffectiveConnectionSpeed;
            var6 = var6.bind(var7)();
            var2['effective_connection_speed'] = var6;
            var6 = var7.getServiceProvider;
            var6 = var6.bind(var7)();
            var2['service_provider'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['handleMediaPlayFinishedAnalytics'] = var4;
    var4 = function scrollToBottom(arg1, arg2, arg3) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var5 = arguments[3];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0019_ip = 179; continue _fun0019 }
case 170:
            var5 = true;
case 179:
            var3 = {};
            var2 = true;
            var3['isAtBottom'] = var2;
            var2 = arg3;
            var2 = var2.bind(var1)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.scrollToBottom;
            var2 = arg1;
            var2 = var2.current;
            if(!var5) { _fun0019_ip = 180; continue _fun0019 }
case 55:
            var6 = arg2;
            var5 = !var6;
case 180:
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['scrollToBottom'] = var4;
    var4 = function scrollToTop(arg1, arg2) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var5 = arguments[2];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0020_ip = 179; continue _fun0020 }
case 170:
            var5 = true;
case 179:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.scrollToTop;
            var2 = arg1;
            var2 = var2.current;
            if(!var5) { _fun0020_ip = 75; continue _fun0020 }
case 181:
            var6 = arg2;
            var5 = !var6;
case 75:
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var3['scrollToTop'] = var4;
    var4 = function scrollToRelativeOffset(arg1, arg2, arg3) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var6 = arguments[3];
            var1 = undefined;
            if(!(var6 === var1)) { _fun0021_ip = 179; continue _fun0021 }
case 170:
            var6 = true;
case 179:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 44;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.scrollToRelativeOffset;
            var2 = arg1;
            var3 = var2.current;
            if(!var6) { _fun0021_ip = 75; continue _fun0021 }
case 181:
            var2 = arg2;
            var6 = !var2;
case 75:
            var2 = arg3;
            var2 = var4.bind(var5)(var3, var2, var6);
            return var1;
        }
    };
    var3['scrollToRelativeOffset'] = var4;
    var4 = function scrollToTopMessage(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var2 = arg2;
            var1 = var2.getPreviousRows;
            var1 = var1.bind(var2)();
            var3 = var1.length;
            var2 = 0;
            if(!(var3 > var2)) { _fun0022_ip = 182; continue _fun0022 }
case 183:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 44;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.scrollTo;
            var2 = arg1;
            var2 = var2.current;
            var5 = var1.length;
            var1 = 1;
            var1 = var5 - var1;
            var1 = var3.bind(var4)(var2, var1);
case 182:
            var1 = undefined;
            return var1;
        }
    };
    var3['scrollToTopMessage'] = var4;
    var4 = function canAddNewReactions(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            if(!var1) { _fun0023_ip = 162; continue _fun0023 }
case 170:
            var5 = _closure1_slot11;
            var4 = var5.can;
            var2 = _closure1_slot17;
            var2 = var2.ADD_REACTIONS;
            var1 = var4.bind(var5)(var2, var3);
case 162:
            if(var1) { _fun0023_ip = 181; continue _fun0023 }
case 184:
            var2 = var3.isPrivate;
            var1 = var2.bind(var3)();
case 181:
            return var1;
        }
    };
    var3['canAddNewReactions'] = var4;
    var4 = function loadMoreBefore(arg1, arg2, arg3) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var7 = arg2;
            var3 = arg3;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            var2 = var7.hasMoreBefore;
            if(!var2) { _fun0024_ip = 33; continue _fun0024 }
case 183:
            var3 = var7.loadingMore;
            var2 = !var3;
case 33:
            if(!var2) { _fun0024_ip = 185; continue _fun0024 }
case 61:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 45;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.fetchMessages;
            var2 = {};
            var6 = arg1;
            var2['channelId'] = var6;
            var6 = var7.first;
            var7 = var6.bind(var7)();
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0024_ip = 186; continue _fun0024 }
case 187:
            var6 = var7.id;
case 186:
            var2['before'] = var6;
            var5 = _closure1_slot18;
            var2['limit'] = var5;
            var2 = var3.bind(var4)(var2);
case 185:
            return var1;
        }
    };
    var3['loadMoreBefore'] = var4;
    var4 = function loadMoreAfter(arg1, arg2, arg3) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var7 = arg2;
            var3 = arg3;
            var1 = undefined;
            var2 = true;
            var2 = var3.bind(var1)(var2);
            var2 = var7.hasMoreAfter;
            if(!var2) { _fun0025_ip = 33; continue _fun0025 }
case 183:
            var3 = var7.loadingMore;
            var2 = !var3;
case 33:
            if(!var2) { _fun0025_ip = 185; continue _fun0025 }
case 61:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 45;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.fetchMessages;
            var2 = {};
            var6 = arg1;
            var2['channelId'] = var6;
            var6 = var7.last;
            var7 = var6.bind(var7)();
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0025_ip = 186; continue _fun0025 }
case 187:
            var6 = var7.id;
case 186:
            var2['after'] = var6;
            var5 = _closure1_slot18;
            var2['limit'] = var5;
            var2 = var3.bind(var4)(var2);
case 185:
            return var1;
        }
    };
    var3['loadMoreAfter'] = var4;
    var4 = function clearRows(arg1, arg2, arg3, arg4, arg5) {
        var3 = arg2;
        var4 = {'animated': false, 'hasHandledScroll': false, 'isNearBottom': false, 'isAtBottom': false, 'isNearTop': false, 'decelerating': false, 'dragging': false, 'hasMoreMessagesAfterForLastUpdate': false, 'pendingUpdatesQueue': null, '_loaded': false, 'animatingStickerMessageId': null};
        var6 = false;
        var1 = new Array(0);
        var4['pendingUpdatesQueue'] = var1;
        var2 = arg5;
        var1 = undefined;
        var2 = var2.bind(var1)(var4);
        var2 = var3.clear;
        var2 = var2.bind(var3)();
        var5 = _closure1_slot4;
        var4 = arg3;
        var3 = arg4;
        var3 = var5.bind(var1)(var4, var3, var6);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var2 = 44;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.clearRows;
        var2 = arg1;
        var2 = var2.current;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearRows'] = var4;
    var4 = function handleFirstLayout(arg1, arg2, arg3, arg4, arg5) {
        var3 = {};
        var1 = arg2;
        var3['firstVisibleMessageRowIndex'] = var1;
        var1 = arg3;
        var3['lastVisibleMessageRowIndex'] = var1;
        var1 = arg4;
        var3['firstVisibleMessagePercentVisible'] = var1;
        var1 = arg5;
        var3['lastVisibleMessagePercentVisible'] = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.QuestsVisibleMessagesChangedSource;
        var2 = var2.FIRST_LAYOUT;
        var3['source'] = var2;
        var2 = arg1;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['handleFirstLayout'] = var4;
    var4 = function handleMessageVisibilityChanged(arg1, arg2, arg3, arg4, arg5) {
        var3 = {};
        var1 = arg2;
        var3['firstVisibleMessageRowIndex'] = var1;
        var1 = arg3;
        var3['lastVisibleMessageRowIndex'] = var1;
        var1 = arg4;
        var3['firstVisibleMessagePercentVisible'] = var1;
        var1 = arg5;
        var3['lastVisibleMessagePercentVisible'] = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 46;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.QuestsVisibleMessagesChangedSource;
        var2 = var2.VISIBILITY_CHANGED;
        var3['source'] = var2;
        var2 = arg1;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var3['handleMessageVisibilityChanged'] = var4;
    var4 = function handleLongPressSticker(arg1, arg2, arg3) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var1 = global;
            var5 = var1.Set;
            var1 = new Array(1);
            var1[0] = var3;
            var2 = var5.prototype;
            var2 = Object.create(var2, {constructor: {value: var5}});
            var7 = var2;
            var6 = var1;
            var1 = new var7[var5](var6, var5);
            var2 = var1 instanceof Object ? var1 : var2;
            var1 = null;
            if(!(var1 != var4)) { _fun0026_ip = 7; continue _fun0026 }
case 181:
            var5 = var2.add;
            var5 = var5.bind(var2)(var4);
case 7:
            var1 = null;
            if(!(var4 !== var3)) { _fun0026_ip = 35; continue _fun0026 }
case 30:
            var1 = var3;
case 35:
            var4 = {};
            var3 = true;
            var4['forceRender'] = var3;
            var4['updateMessageIds'] = var2;
            var3 = arg3;
            var2 = undefined;
            var2 = var3.bind(var2)(var4);
            return var1;
        }
    };
    var3['handleLongPressSticker'] = var4;
    var4 = function handleTapNavBar() {
        var1 = undefined;
        var4 = _closure1_slot28;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['handleTapNavBar'] = var4;
    var4 = function jumpToPresent(arg1, arg2, arg3) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var6 = var1.jumpReturnTargetId;
            var2 = null;
            if(!(var2 != var6)) { _fun0027_ip = 164; continue _fun0027 }
case 188:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 45;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.jumpToMessage;
            var2 = {};
            var7 = var5.id;
            var2['channelId'] = var7;
            var2['messageId'] = var6;
            var6 = true;
            var2['flash'] = var6;
            var2 = var3.bind(var4)(var2);
            _fun0027_ip = 189; continue _fun0027;
case 164:
            var2 = var1.loadingMore;
            if(var2) { _fun0027_ip = 189; continue _fun0027 }
case 190:
            var1 = var1.hasMoreAfter;
            if(var1) { _fun0027_ip = 191; continue _fun0027 }
case 11:
            var2 = arg3;
            var1 = undefined;
            var1 = var2.bind(var1)();
            _fun0027_ip = 189; continue _fun0027;
case 191:
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 45;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.fetchMessages;
            var1 = {};
            var5 = var5.id;
            var1['channelId'] = var5;
            var4 = _closure1_slot18;
            var1['limit'] = var4;
            var4 = {};
            var5 = true;
            var4['present'] = var5;
            var1['jump'] = var4;
            var1 = var2.bind(var3)(var1);
case 189:
            var1 = undefined;
            return var1;
        }
    };
    var3['jumpToPresent'] = var4;
    var4 = function scrollToNewMessages(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var1 = arg1;
            var6 = var1.channel;
            var8 = var1.channelId;
            var11 = var1.messages;
            var7 = var1.hasJumpedToOriginalPost;
            var10 = var1.useReducedMotion;
            var9 = var1.oldestUnreadMessageId;
            var14 = var1.chatManagerRows;
            var5 = var1.findMessageIndex;
            var4 = var1.chatRef;
            var3 = var1.loadMoreBefore;
            var13 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 47;
            var12 = var12[var1];
            var1 = undefined;
            var15 = var13.bind(var1)(var12);
            var13 = var15.getCurrentConfig;
            var12 = {};
            var16 = 'Messages';
            var12['location'] = var16;
            var12 = var13.bind(var15)(var12);
            var12 = var12.enabled;
            if(var12) { _fun0028_ip = 192; continue _fun0028 }
case 185:
            var5 = var5.bind(var1)(var9);
            var9 = null;
            if(!(var9 != var5)) { _fun0028_ip = 193; continue _fun0028 }
case 194:
            var15 = var5 + 1;
            var5 = var14.length;
            var9 = var15;
            if(!(var15 < var5)) { _fun0028_ip = 195; continue _fun0028 }
case 196:
            var5 = var14[var15];
            var12 = var5.type;
            var5 = _closure1_slot19;
            var5 = var5.SEPARATOR;
            var9 = var15;
            if(!(var12 === var5)) { _fun0028_ip = 195; continue _fun0028 }
case 189:
            var5 = var14[var15];
            var12 = var5.id;
            var5 = _closure1_slot21;
            var5 = var5.UNREAD;
            var13 = var15;
            var9 = var13;
            if(!(var12 !== var5)) { _fun0028_ip = 195; continue _fun0028 }
case 22:
            var15 = var13 + 1;
            var5 = var14.length;
            var9 = var15;
            if(!(var15 < var5)) { _fun0028_ip = 195; continue _fun0028 }
case 197:
            var5 = var14[var15];
            var12 = var5.type;
            var5 = _closure1_slot19;
            var5 = var5.SEPARATOR;
            var9 = var15;
            if(!(var12 === var5)) { _fun0028_ip = 195; continue _fun0028 }
case 198:
            var5 = var14[var15];
            var12 = var5.id;
            var5 = _closure1_slot21;
            var5 = var5.UNREAD;
            var13 = var15;
            var9 = var13;
            if(var12 !== var5) { _fun0028_ip = 22; continue _fun0028 }
case 195:
            var5 = _closure1_slot25;
            var21 = undefined;
            var20 = var6;
            var19 = var8;
            var18 = var11;
            var17 = var7;
            var5 = var21[var5](var20, var19, var18, var17, var16);
            if(var5) { _fun0028_ip = 199; continue _fun0028 }
case 200:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 44;
            var5 = var8[var5];
            var8 = var7.bind(var1)(var5);
            var7 = var8.scrollTo;
            var5 = var4.current;
            var4 = {};
            if(var10) { _fun0028_ip = 201; continue _fun0028 }
case 202:
            var12 = var11.jumpType;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 48;
            var11 = var14[var11];
            var11 = var13.bind(var1)(var11);
            var11 = var11.JumpTypes;
            var11 = var11.INSTANT;
            var10 = var12 === var11;
case 201:
            var10 = !var10;
            var4['animated'] = var10;
            var4 = var7.bind(var8)(var5, var9, var4);
case 199:
            var3 = var3.bind(var1)();
            _fun0028_ip = 193; continue _fun0028;
case 192:
            var5 = _closure1_slot12;
            var4 = var5.ackMessageId;
            var3 = var6.id;
            var5 = var4.bind(var5)(var3);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 45;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.jumpToMessage;
            var2 = {};
            var7 = var6.id;
            var2['channelId'] = var7;
            var7 = null;
            if(!(var7 == var5)) { _fun0028_ip = 203; continue _fun0028 }
case 204:
            var5 = var6.id;
case 203:
            var2['messageId'] = var5;
            var5 = 1;
            var2['offset'] = var5;
            var5 = 'Mark As Read';
            var2['context'] = var5;
            var2 = var3.bind(var4)(var2);
case 193:
            return var1;
        }
    };
    var3['scrollToNewMessages'] = var4;
    var4 = function syncMessageDisplay(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var5 = arg1;
            var4 = var5.messages;
            var _closure2_slot0 = var4;
            var2 = var5.isMessagesReady;
            var9 = var5.oldestUnreadMessageId;
            var _closure2_slot1 = var9;
            var3 = var5.channelId;
            var10 = var5.updateRows;
            var5 = var5.scrollToMessageId;
            var _closure2_slot2 = var5;
            if(var2) { _fun0029_ip = 205; continue _fun0029 }
case 4:
            var6 = undefined;
            var2 = {};
            var2 = var10.bind(var6)(var2);
            _fun0029_ip = 206; continue _fun0029;
case 205:
            var7 = {};
            var2 = var4.jumpTargetId;
            var7['scrollToMessageId'] = var2;
            var2 = var4.jumpTargetId;
            var7['jumpTargetId'] = var2;
            var12 = _closure1_slot0;
            var2 = _closure1_slot2;
            var8 = 48;
            var11 = var2[var8];
            var2 = undefined;
            var11 = var12.bind(var2)(var11);
            var11 = var11.JumpTypes;
            var11 = var11.INSTANT;
            var7['jumpType'] = var11;
            var11 = var4.focusTargetId;
            var7['focusTargetId'] = var11;
            var7 = var10.bind(var2)(var7);
            var10 = var4.jumpTargetId;
            var7 = null;
            if(!(var7 == var10)) { _fun0029_ip = 207; continue _fun0029 }
case 14:
            if(!(var7 != var9)) { _fun0029_ip = 206; continue _fun0029 }
case 208:
            var7 = global;
            var9 = var7.setTimeout;
            var7 = function() {
                var3 = _closure2_slot2;
                var2 = {};
                var4 = _closure2_slot1;
                var2['scrollToMessageId'] = var4;
                var1 = _closure2_slot0;
                var1 = var1.jumpTargetId;
                var2['jumpTargetId'] = var1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 48;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.JumpTypes;
                var4 = var4.INSTANT;
                var2['jumpType'] = var4;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = 50;
            var1 = var9.bind(var2)(var7, var1);
            _fun0029_ip = 206; continue _fun0029;
case 207:
            var1 = {};
            var7 = var4.jumpTargetId;
            var1['scrollToMessageId'] = var7;
            var7 = var4.jumpTargetId;
            var1['jumpTargetId'] = var7;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var7.bind(var2)(var6);
            var6 = var6.JumpTypes;
            var6 = var6.INSTANT;
            var1['jumpType'] = var6;
            var1 = var5.bind(var2)(var1);
case 206:
            var2 = _closure1_slot26;
            var1 = undefined;
            var2 = var2.bind(var1)(var3, var4);
            return var1;
        }
    };
    var3['syncMessageDisplay'] = var4;
    var4 = function getChatRef(arg1) {
        var1 = arg1;
        return var1;
    };
    var3['getChatRef'] = var4;
    var4 = function maybeRescrollToMessageId(arg1, arg2) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var4 = arg1;
            var3 = arg2;
            var _closure2_slot0 = var4;
            var1 = var3.chatRef;
            var _closure2_slot1 = var1;
            var1 = var3.findMessageIndex;
            var _closure2_slot2 = var1;
            var1 = var3.updateRows;
            var _closure2_slot3 = var1;
            var6 = var3.updateRowsEnabled;
            var1 = undefined;
            var5 = var1 !== var6;
            if(!var5) { _fun0030_ip = 209; continue _fun0030 }
case 75:
            var5 = var6;
case 209:
            var _closure2_slot4 = var5;
            var3 = var3.jumpType;
            if(!(var1 === var3)) { _fun0030_ip = 210; continue _fun0030 }
case 180:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 48;
            var5 = var7[var5];
            var5 = var6.bind(var1)(var5);
            var5 = var5.JumpTypes;
            var3 = var5.INSTANT;
case 210:
            var _closure2_slot5 = var3;
            var3 = null;
            if(!(var3 != var4)) { _fun0030_ip = 211; continue _fun0030 }
case 212:
            var3 = global;
            var4 = var3.setTimeout;
            var3 = function() {
                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var3 = null;
                    if(!(var3 != var6)) { _fun0031_ip = 213; continue _fun0031 }
case 129:
                    var2 = _closure2_slot1;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0031_ip = 213; continue _fun0031 }
case 214:
                    var3 = _closure2_slot4;
                    var2 = false;
                    if(!var3) { _fun0031_ip = 215; continue _fun0031 }
case 216:
                    var5 = _closure2_slot3;
                    var4 = {};
                    var3 = _closure2_slot0;
                    var4['scrollToMessageId'] = var3;
                    var4['jumpTargetId'] = var3;
                    var7 = _closure2_slot5;
                    var4['jumpType'] = var7;
                    var4['focusTargetId'] = var3;
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 48;
                    var3 = var9[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.JumpTypes;
                    var3 = var3.INSTANT;
                    var4['overrideScrollJumpType'] = var3;
                    var3 = true;
                    var4['isRescrolling'] = var3;
                    var4 = var5.bind(var1)(var4);
                    var2 = true;
case 215:
                    if(var2) { _fun0031_ip = 213; continue _fun0031 }
case 211:
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var2 = 44;
                    var2 = var10[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.scrollTo;
                    var2 = _closure2_slot1;
                    var3 = var2.current;
                    var2 = {};
                    var8 = _closure2_slot5;
                    var9 = _closure1_slot0;
                    var7 = 48;
                    var7 = var10[var7];
                    var7 = var9.bind(var1)(var7);
                    var7 = var7.JumpTypes;
                    var7 = var7.ANIMATED;
                    var7 = var8 === var7;
                    var2['animated'] = var7;
                    var2 = var4.bind(var5)(var3, var6, var2);
case 213:
                    return var1;
                }
            };
            var2 = 50;
            var2 = var4.bind(var1)(var3, var2);
case 211:
            return var1;
        }
    };
    var3['maybeRescrollToMessageId'] = var4;
    var2 = function handleVisibleMessagesChange(arg1) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var1 = arg1;
            var14 = var1.firstVisibleMessageRowIndex;
            var10 = var1.firstVisibleMessagePercentVisible;
            var13 = var1.lastVisibleMessageRowIndex;
            var9 = var1.lastVisibleMessagePercentVisible;
            var12 = var1.source;
            var8 = var1.chatManager;
            var11 = var1.shouldTrackAnnouncementMessageViews;
            var6 = var1.shouldTrackRichPresenceInviteEmbedViews;
            var5 = var1.guildId;
            var7 = var1.channelId;
            var4 = var1.channel;
            var1 = null;
            if(!(var1 != var14)) { _fun0032_ip = 217; continue _fun0032 }
case 180:
            if(!(var1 != var13)) { _fun0032_ip = 217; continue _fun0032 }
case 182:
            if(!(var1 != var10)) { _fun0032_ip = 217; continue _fun0032 }
case 218:
            if(!(var1 != var9)) { _fun0032_ip = 217; continue _fun0032 }
case 187:
            var3 = _closure1_slot24;
            var2 = {};
            var2['firstVisibleMessageRowIndex'] = var14;
            var2['lastVisibleMessageRowIndex'] = var13;
            var2['firstVisibleMessagePercentVisible'] = var10;
            var2['lastVisibleMessagePercentVisible'] = var9;
            var2['chatManager'] = var8;
            var2['channelId'] = var7;
            var7 = undefined;
            var3 = var3.bind(var7)(var2);
            var8 = var3.length;
            var2 = 0;
            if(!(!(var8 <= var2))) { _fun0032_ip = 217; continue _fun0032 }
case 43:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 49;
            var1 = var8[var1];
            var10 = var2.bind(var7)(var1);
            var9 = var10.questsVisibleMobileMessagesChanged;
            var1 = {};
            var1['visibleMessages'] = var3;
            var1['source'] = var12;
            var1 = var9.bind(var10)(var1);
            var1 = 50;
            var9 = var8[var1];
            var10 = var2.bind(var7)(var9);
            var9 = var10.handleAnnouncementMessageViewTracking;
            var19 = var10;
            var18 = var3;
            var17 = var11;
            var16 = var5;
            var15 = var4;
            var9 = var19[var9](var18, var17, var16, var15, var14);
            var1 = var8[var1];
            var2 = var2.bind(var7)(var1);
            var1 = var2.handleRichPresenceInviteEmbedViewTracking;
            var19 = var2;
            var18 = var3;
            var17 = var6;
            var16 = var5;
            var15 = var4;
            var1 = var19[var1](var18, var17, var16, var15, var14);
case 217:
            var1 = undefined;
            return var1;
        }
    };
    var3['handleVisibleMessagesChange'] = var2;
    return var1;
})();
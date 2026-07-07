// app/modules/conversations/ConversationsActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _fetchChannelConversations() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var10 = var2.channelId;
                    var13 = var2.guildId;
                    var17 = var2.direction;
                    var15 = var2.anchor;
                    var12 = var2.limit;
                    var3 = undefined;
                    if(!(var12 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var12 = _closure1_slot6;
case 4:
                    var16 = var2.isJump;
                    var2 = var2.throwOnError;
                    if(!(var2 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var2 = false;
case 6:
                    var5 = var2;
                    var9 = undefined;
                    var19 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=84);
case 8:
                    return var3;
case 9:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var4 = 5;
                    var4 = var8[var4];
                    var8 = var7.bind(var3)(var4);
                    var7 = var8.isTopicalNavEnabled;
                    var4 = 'fetch_channel_conversations';
                    var4 = var7.bind(var8)(var13, var4);
                    if(!var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var29 = var17;
                    var27 = var15;
                    var7 = var16;
                    var4 = global;
                    var8 = var4.HermesInternal;
                    var18 = var8.concat;
                    var30 = '';
                    var8 = ':';
                    var14 = true;
                    var23 = var14 === var7;
                    var28 = var8;
                    var26 = var8;
                    var25 = var12;
                    var24 = var8;
                    var18 = var30[var18](var29, var28, var27, var26, var25, var24, var23, var22);
                    var9 = var18;
                    var13 = _closure1_slot4;
                    var8 = var13.isListFetchPending;
                    var7 = var10;
                    var7 = var8.bind(var13)(var7, var18);
                    if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                    var13 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = 6;
                    var7 = var7[var8];
                    var20 = var13.bind(var3)(var7);
                    var13 = var20.dispatch;
                    var7 = {};
                    var18 = 'CONVERSATIONS_FETCH_START';
                    var7['type'] = var18;
                    var18 = var10;
                    var7['channelId'] = var18;
                    var18 = var17;
                    var7['direction'] = var18;
                    var18 = var9;
                    var7['requestKey'] = var18;
                    var21 = var16;
                    var18 = null;
                    var21 = var18 != var21;
                    if(!var21) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var21 = var16;
case 15:
                    var7['isJump'] = var21;
                    var7 = var13.bind(var20)(var7);
                    var7 = {};
                    var7['limit'] = var12;
                    var19 = var7;
                    var7 = var15;
                    if(!(var18 != var7)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var12 = var17;
                    var7 = 'before';
                    if(!(var7 !== var12)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var12 = var17;
                    var7 = 'after';
                    if(!(var7 !== var12)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var12 = var19;
                    var7 = var15;
                    var12['around'] = var7;
                    _fun0001_ip = 17; continue _fun0001;
case 21:
                    var12 = var19;
                    var7 = var15;
                    var12['after'] = var7;
                    _fun0001_ip = 17; continue _fun0001;
case 19:
                    var12 = var19;
                    var7 = var15;
                    var12['before'] = var7;
case 17: // try_start_0
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 7;
                    var7 = var13[var7];
                    var7 = var12.bind(var3)(var7);
                    var13 = var7.HTTP;
                    var12 = var13.get;
                    var7 = {};
                    var22 = _closure1_slot8;
                    var21 = var22.CHANNEL_CONVERSATIONS;
                    var20 = var10;
                    var20 = var21.bind(var22)(var20);
                    var7['url'] = var20;
                    var7['query'] = var19;
                    var7['oldFormErrors'] = var14;
                    var7['rejectWithError'] = var14;
                    var7 = var12.bind(var13)(var7);
                    SaveGenerator(address=462);
case 23:
                    return var7;
case 24:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 25; continue _fun0001 }
case 26:
                    var12 = var7.body;
                    var19 = var12.conversations;
                    var14 = var19.map;
                    var20 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var13 = 8;
                    var13 = var12[var13];
                    var13 = var20.bind(var3)(var13);
                    var13 = var13.mapConversation;
                    var19 = var14.bind(var19)(var13);
                    var14 = var19.filter;
                    var13 = 9;
                    var13 = var12[var13];
                    var13 = var20.bind(var3)(var13);
                    var13 = var13.isNotNullish;
                    var19 = var14.bind(var19)(var13);
                    var11 = var19;
                    var13 = _closure1_slot1;
                    var12 = var12[var8];
                    var14 = var13.bind(var3)(var12);
                    var13 = var14.dispatch;
                    var12 = {};
                    var20 = 'CONVERSATIONS_FETCH_SUCCESS';
                    var12['type'] = var20;
                    var20 = var10;
                    var12['channelId'] = var20;
                    var12['conversations'] = var19;
                    var12['direction'] = var17;
                    var17 = var9;
                    var12['requestKey'] = var17;
                    var12['anchor'] = var15;
                    var17 = var16;
                    var17 = var18 != var17;
                    var15 = var17;
                    if(!var17) { _fun0001_ip = 27; continue _fun0001 }
case 28:
                    var15 = var16;
case 27:
                    var12['isJump'] = var15;
                    var12 = var13.bind(var14)(var12);
case 29: // try_end0
                    return var11;
case 25:
                    return var7;
case 30: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var7 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var6 = var6[var8];
                    var8 = var7.bind(var3)(var6);
                    var7 = var8.dispatch;
                    var6 = {};
                    var11 = 'CONVERSATIONS_FETCH_FAILURE';
                    var6['type'] = var11;
                    var6['channelId'] = var10;
                    var6['requestKey'] = var9;
                    var6 = var7.bind(var8)(var6);
                    if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 31:
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var29 = 'Failed to fetch conversations';
                    var30 = var5;
                    var4 = new var30[var6](var29, var28);
                    var4 = var4 instanceof Object ? var4 : var5;
                    throw var4;
case 12:
                    return var3;
case 10:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot9 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var4 = function fetchConversationMessages() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = function _fetchConversationMessages() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var2 = arguments[3];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 32; continue _fun0002 }
case 3:
                    var9 = arg1;
                    var8 = arg3;
                    var3 = undefined;
                    if(!(var2 === var3)) { _fun0002_ip = 33; continue _fun0002 }
case 34:
                    var2 = {};
case 33:
                    var5 = var2.full;
                    if(!(var5 === var3)) { _fun0002_ip = 35; continue _fun0002 }
case 36:
                    var5 = false;
case 35:
                    var7 = var5;
                    var2 = var2.previewLimit;
                    if(!(var2 === var3)) { _fun0002_ip = 37; continue _fun0002 }
case 38:
                    var2 = _closure1_slot7;
case 37:
                    var13 = var2;
                    SaveGenerator(address=66);
case 39:
                    return var3;
case 40:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 41; continue _fun0002 }
case 42:
                    var6 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var5 = 5;
                    var5 = var10[var5];
                    var11 = var6.bind(var3)(var5);
                    var10 = var11.isTopicalNavEnabled;
                    var6 = arg2;
                    var5 = 'fetch_conversation';
                    var5 = var10.bind(var11)(var6, var5);
                    if(!var5) { _fun0002_ip = 43; continue _fun0002 }
case 44:
                    var11 = _closure1_slot4;
                    var10 = var11.getConversationMetadata;
                    var6 = var9;
                    var5 = var8;
                    var6 = var10.bind(var11)(var6, var5);
                    var5 = var7;
                    var10 = null;
                    var11 = var10 == var6;
                    if(var5) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var5 = undefined;
                    if(var11) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var5 = var6.hydratedMessages;
case 47:
                    var5 = var10 == var5;
                    _fun0002_ip = 49; continue _fun0002;
case 45:
                    var10 = undefined;
                    if(var11) { _fun0002_ip = 50; continue _fun0002 }
case 51:
                    var10 = var6.fullyHydrated;
case 50:
                    var6 = true;
                    var5 = var6 !== var10;
case 49:
                    if(!var5) { _fun0002_ip = 43; continue _fun0002 }
case 52:
                    var11 = _closure1_slot4;
                    var10 = var11.isConversationFetchPending;
                    var6 = var8;
                    var5 = var7;
                    var5 = var10.bind(var11)(var6, var5);
                    if(var5) { _fun0002_ip = 43; continue _fun0002 }
case 53:
                    var10 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var6 = 6;
                    var5 = var5[var6];
                    var11 = var10.bind(var3)(var5);
                    var10 = var11.dispatch;
                    var5 = {};
                    var12 = 'CONVERSATION_FETCH_START';
                    var5['type'] = var12;
                    var12 = var9;
                    var5['channelId'] = var12;
                    var12 = var8;
                    var5['conversationId'] = var12;
                    var12 = var7;
                    var5['full'] = var12;
                    var5 = var10.bind(var11)(var5);
case 54: // try_start_0
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var5 = 7;
                    var5 = var11[var5];
                    var5 = var10.bind(var3)(var5);
                    var11 = var5.HTTP;
                    var10 = var11.get;
                    var5 = {};
                    var16 = _closure1_slot8;
                    var15 = var16.CHANNEL_CONVERSATION_MESSAGES;
                    var14 = var9;
                    var12 = var8;
                    var12 = var15.bind(var16)(var14, var12);
                    var5['url'] = var12;
                    var12 = var7;
                    if(var12) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var12 = {};
                    var12['limit'] = var13;
                    _fun0002_ip = 57; continue _fun0002;
case 55:
                    var12 = {};
case 57:
                    var5['query'] = var12;
                    var12 = true;
                    var5['oldFormErrors'] = var12;
                    var5['rejectWithError'] = var12;
                    var5 = var10.bind(var11)(var5);
                    SaveGenerator(address=391);
case 58:
                    return var5;
case 59:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=9);
                    if(var10) { _fun0002_ip = 60; continue _fun0002 }
case 61:
                    var11 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var10 = var10[var6];
                    var12 = var11.bind(var3)(var10);
                    var11 = var12.dispatch;
                    var10 = {};
                    var13 = 'CONVERSATION_FETCH_SUCCESS';
                    var10['type'] = var13;
                    var13 = var9;
                    var10['channelId'] = var13;
                    var13 = var8;
                    var10['conversationId'] = var13;
                    var13 = var5.body;
                    var13 = var13.messages;
                    var10['messages'] = var13;
                    var13 = var7;
                    var10['fullyHydrated'] = var13;
                    var10 = var11.bind(var12)(var10);
case 62: // try_end0
                    _fun0002_ip = 43; continue _fun0002;
case 60:
                    return var5;
case 63: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var6 = var5.bind(var3)(var4);
                    var5 = var6.dispatch;
                    var4 = {};
                    var10 = 'CONVERSATION_FETCH_FAILURE';
                    var4['type'] = var10;
                    var4['channelId'] = var9;
                    var4['conversationId'] = var8;
                    var4['full'] = var7;
                    var4 = var5.bind(var6)(var4);
case 43:
                    return var3;
case 41:
                    return var2;
case 32:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _fetchConversationPreviews() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var9 = arg1;
                    var8 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 64; continue _fun0003 }
case 3:
                    var3 = _closure1_slot4;
                    var2 = var3.getChannelConversations;
                    var6 = var2.bind(var3)(var9);
                    var2 = null;
                    if(!(var2 != var6)) { _fun0003_ip = 65; continue _fun0003 }
case 36:
                    var3 = var6.length;
                    var2 = 1;
                    var5 = var3 - var2;
                    var4 = 0;
                    if(!(var5 >= var4)) { _fun0003_ip = 65; continue _fun0003 }
case 66:
                    var2 = var6[var5];
                    var11 = _closure1_slot10;
                    var14 = var2.id;
                    var2 = {};
                    var12 = _closure1_slot7;
                    var2['previewLimit'] = var12;
                    var17 = undefined;
                    var16 = var9;
                    var15 = var8;
                    var13 = var2;
                    var2 = var17[var11](var16, var15, var14, var13, var12);
                    SaveGenerator(address=98);
case 67:
                    return var2;
case 68:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(var10) { _fun0003_ip = 69; continue _fun0003 }
case 70:
                    var5 = var5 - 1;
                    if(var5 >= var4) { _fun0003_ip = 66; continue _fun0003 }
case 65:
                    var3 = undefined;
                    return var3;
case 69:
                    return var2;
case 64:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.FETCH_LIMIT;
    var _closure1_slot6 = var8;
    var5 = var5.PREVIEW_MESSAGE_COUNT;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot8 = var5;
    var5 = 14;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/conversations/ConversationsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchChannelConversations() {
        var1 = undefined;
        var4 = _closure1_slot9;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchChannelConversations'] = var5;
    var5 = function toggleConversationHighlighting() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CONVERSATIONS_TOGGLE_HIGHLIGHTING';
        var2['type'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['toggleConversationHighlighting'] = var5;
    var5 = function setSelectedConversation(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var7 = arg3;
            var3 = arguments[3];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0004_ip = 71; continue _fun0004 }
case 72:
            var3 = true;
case 71:
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var4 = 6;
            var4 = var8[var4];
            var8 = var5.bind(var1)(var4);
            var5 = var8.dispatch;
            var4 = {};
            var9 = 'SET_SELECTED_CONVERSATION';
            var4['type'] = var9;
            var4['channelId'] = var6;
            var4['conversationId'] = var7;
            var4 = var5.bind(var8)(var4);
            var8 = _closure1_slot10;
            var5 = {};
            var4 = true;
            var5['full'] = var4;
            var12 = arg2;
            var14 = undefined;
            var13 = var6;
            var11 = var7;
            var10 = var5;
            var4 = var14[var8](var13, var12, var11, var10, var9);
            var5 = _closure1_slot4;
            var4 = var5.getConversationMetadata;
            var5 = var4.bind(var5)(var6, var7);
            if(!var3) { _fun0004_ip = 73; continue _fun0004 }
case 74:
            var7 = null;
            var8 = var7 == var5;
            var4 = undefined;
            if(var8) { _fun0004_ip = 75; continue _fun0004 }
case 76:
            var8 = var5.conversation;
            var4 = var8.startMessageId;
case 75:
            var3 = var7 != var4;
case 73:
            if(!var3) { _fun0004_ip = 77; continue _fun0004 }
case 78:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 10;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.jumpToMessage;
            var2 = {};
            var2['channelId'] = var6;
            var5 = var5.conversation;
            var5 = var5.startMessageId;
            var2['messageId'] = var5;
            var5 = false;
            var2['flash'] = var5;
            var2 = var3.bind(var4)(var2);
case 77:
            return var1;
        }
    };
    var3['setSelectedConversation'] = var5;
    var5 = function clearConversationSelection(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'CLEAR_CONVERSATION_SELECTION';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['conversationId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearConversationSelection'] = var5;
    var5 = function setConversationFeedbackRating(arg1, arg2, arg3) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 6;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SET_CONVERSATION_FEEDBACK_RATING';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['conversationId'] = var5;
        var5 = arg3;
        var2['rating'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setConversationFeedbackRating'] = var5;
    var3['fetchConversationMessages'] = var4;
    var4 = function fetchConversationPreviews() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchConversationPreviews'] = var4;
    var2 = function trackTopicalNavigationEntrypointImpression(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var6 = arg1;
            var5 = arg3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 11;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var7 = var3.ConversationsAnalytics;
            var4 = var7.trackEntrypointImpression;
            var3 = {};
            var3['channel'] = var6;
            var3['conversationCount'] = var5;
            var3 = var4.bind(var7)(var3);
            var4 = _closure1_slot5;
            var3 = var4.shouldTriggerOnNextExposure;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0005_ip = 79; continue _fun0005 }
case 80:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var7 = var4.bind(var1)(var3);
            var4 = var7.fireSurveyAction;
            var8 = _closure1_slot0;
            var3 = 13;
            var3 = var9[var3];
            var3 = var8.bind(var1)(var3);
            var3 = var3.SurveyActionTypes;
            var3 = var3.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS;
            var3 = var4.bind(var7)(var3);
case 79:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION';
            var2['type'] = var7;
            var2['channel'] = var6;
            var6 = arg2;
            var2['guildId'] = var6;
            var2['conversationCount'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['trackTopicalNavigationEntrypointImpression'] = var2;
    return var1;
})();
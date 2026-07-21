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
                    var19 = var2.direction;
                    var15 = var2.anchor;
                    var12 = var2.limit;
                    var3 = undefined;
                    if(!(var12 === var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var12 = _closure1_slot6;
case 4:
                    var18 = var2.isJump;
                    var6 = var2.throwOnError;
                    if(!(var6 === var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var6 = false;
case 6:
                    var5 = var6;
                    var17 = var2.hydrateMessages;
                    var9 = undefined;
                    var20 = undefined;
                    var11 = undefined;
                    SaveGenerator(address=90);
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
                    var30 = var19;
                    var28 = var15;
                    var7 = var18;
                    var4 = global;
                    var8 = var4.HermesInternal;
                    var16 = var8.concat;
                    var31 = '';
                    var8 = ':';
                    var14 = true;
                    var24 = var14 === var7;
                    var29 = var8;
                    var27 = var8;
                    var26 = var12;
                    var25 = var8;
                    var16 = var31[var16](var30, var29, var28, var27, var26, var25, var24, var23);
                    var9 = var16;
                    var13 = _closure1_slot4;
                    var8 = var13.isListFetchPending;
                    var7 = var10;
                    var7 = var8.bind(var13)(var7, var16);
                    if(var7) { _fun0001_ip = 12; continue _fun0001 }
case 14:
                    var13 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var8 = 6;
                    var7 = var7[var8];
                    var21 = var13.bind(var3)(var7);
                    var13 = var21.dispatch;
                    var7 = {};
                    var16 = 'CONVERSATIONS_FETCH_START';
                    var7['type'] = var16;
                    var16 = var10;
                    var7['channelId'] = var16;
                    var16 = var19;
                    var7['direction'] = var16;
                    var16 = var9;
                    var7['requestKey'] = var16;
                    var22 = var18;
                    var16 = null;
                    var22 = var16 != var22;
                    if(!var22) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var22 = var18;
case 15:
                    var7['isJump'] = var22;
                    var7 = var13.bind(var21)(var7);
                    var7 = {};
                    var7['limit'] = var12;
                    var20 = var7;
                    var7 = var15;
                    if(!(var16 != var7)) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var12 = var19;
                    var7 = 'before';
                    if(!(var7 !== var12)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var12 = var19;
                    var7 = 'after';
                    if(!(var7 !== var12)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
                    var12 = var20;
                    var7 = var15;
                    var12['around'] = var7;
                    _fun0001_ip = 17; continue _fun0001;
case 21:
                    var12 = var20;
                    var7 = var15;
                    var12['after'] = var7;
                    _fun0001_ip = 17; continue _fun0001;
case 19:
                    var12 = var20;
                    var7 = var15;
                    var12['before'] = var7;
case 17:
                    var7 = var17;
                    if(!(var16 == var7)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
                    _fun0001_ip = 25; continue _fun0001;
case 23:
                    var12 = var20;
                    var12['include_messages'] = var14;
                    var7 = var17;
                    var13 = var7.limit;
                    var21 = var16 != var13;
                    var7 = undefined;
                    if(!var21) { _fun0001_ip = 26; continue _fun0001 }
case 27:
                    var7 = var13;
case 26:
                    var12['message_limit'] = var7;
case 25: // try_start_0
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 7;
                    var7 = var13[var7];
                    var7 = var12.bind(var3)(var7);
                    var13 = var7.HTTP;
                    var12 = var13.get;
                    var7 = {};
                    var23 = _closure1_slot7;
                    var22 = var23.CHANNEL_CONVERSATIONS;
                    var21 = var10;
                    var21 = var22.bind(var23)(var21);
                    var7['url'] = var21;
                    var7['query'] = var20;
                    var7['oldFormErrors'] = var14;
                    var7['rejectWithError'] = var14;
                    var7 = var12.bind(var13)(var7);
                    SaveGenerator(address=516);
case 28:
                    return var7;
case 29:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=11);
                    if(var12) { _fun0001_ip = 30; continue _fun0001 }
case 31:
                    var12 = var7.body;
                    var20 = var12.conversations;
                    var11 = var20;
                    var13 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var12 = var12[var8];
                    var14 = var13.bind(var3)(var12);
                    var13 = var14.dispatch;
                    var12 = {};
                    var21 = 'CONVERSATIONS_FETCH_SUCCESS';
                    var12['type'] = var21;
                    var21 = var10;
                    var12['channelId'] = var21;
                    var12['rawConversations'] = var20;
                    var12['direction'] = var19;
                    var19 = var9;
                    var12['requestKey'] = var19;
                    var12['anchor'] = var15;
                    var19 = var18;
                    var19 = var16 != var19;
                    var15 = var19;
                    if(!var19) { _fun0001_ip = 32; continue _fun0001 }
case 33:
                    var15 = var18;
case 32:
                    var12['isJump'] = var15;
                    var15 = var17;
                    var18 = var16 == var15;
                    var15 = undefined;
                    if(var18) { _fun0001_ip = 34; continue _fun0001 }
case 35:
                    var15 = var17.limit;
case 34:
                    var15 = var16 == var15;
                    var12['fullyHydrated'] = var15;
                    var12 = var13.bind(var14)(var12);
case 36: // try_end0
                    return var11;
case 30:
                    return var7;
case 37: // catch_target0
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
case 38:
                    var6 = var4.Error;
                    var4 = var6.prototype;
                    var5 = Object.create(var4, {constructor: {value: var6}});
                    var30 = 'Failed to fetch conversations';
                    var31 = var5;
                    var4 = new var31[var6](var30, var29);
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
        _closure1_slot8 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot8 = var1;
    var4 = function fetchConversationMessages() {
        var1 = undefined;
        var4 = _closure1_slot10;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot9 = var4;
    var1 = function _fetchConversationMessages() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3, arg4) {
            var1 = function* anon_0_(arg1, arg2, arg3, arg4) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    var5 = arg4;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 39; continue _fun0002 }
case 3:
                    var8 = arg1;
                    var7 = arg3;
                    var2 = undefined;
                    var14 = undefined;
                    var13 = undefined;
                    var12 = undefined;
                    var6 = undefined;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 5;
                    var4 = var10[var4];
                    var11 = var9.bind(var2)(var4);
                    var10 = var11.isTopicalNavEnabled;
                    var9 = arg2;
                    var4 = 'fetch_conversation';
                    var4 = var10.bind(var11)(var9, var4);
                    if(!var4) { _fun0002_ip = 40; continue _fun0002 }
case 41:
                    var9 = null;
                    if(!(var9 == var5)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
                    var5 = {};
case 42:
                    var4 = var5.previewLimit;
                    var14 = var4;
                    var13 = var5.includeMessageReferences;
                    var12 = var5.includeReactions;
                    var4 = var9 == var4;
                    var6 = var4;
                    var15 = _closure1_slot4;
                    var11 = var15.getConversationMetadata;
                    var10 = var8;
                    var5 = var7;
                    var5 = var11.bind(var15)(var10, var5);
                    var10 = var9 == var5;
                    if(var4) { _fun0002_ip = 44; continue _fun0002 }
case 13:
                    var4 = undefined;
                    if(var10) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var4 = var5.hydratedMessages;
case 45:
                    var4 = var9 == var4;
                    _fun0002_ip = 47; continue _fun0002;
case 44:
                    var9 = undefined;
                    if(var10) { _fun0002_ip = 48; continue _fun0002 }
case 49:
                    var9 = var5.fullyHydrated;
case 48:
                    var5 = true;
                    var4 = var5 !== var9;
case 47:
                    if(!var4) { _fun0002_ip = 40; continue _fun0002 }
case 50:
                    var10 = _closure1_slot4;
                    var9 = var10.isConversationFetchPending;
                    var5 = var7;
                    var4 = var6;
                    var4 = var9.bind(var10)(var5, var4);
                    if(var4) { _fun0002_ip = 40; continue _fun0002 }
case 51:
                    var9 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var5 = 6;
                    var4 = var4[var5];
                    var10 = var9.bind(var2)(var4);
                    var9 = var10.dispatch;
                    var4 = {};
                    var11 = 'CONVERSATION_FETCH_START';
                    var4['type'] = var11;
                    var11 = var8;
                    var4['channelId'] = var11;
                    var11 = var7;
                    var4['conversationId'] = var11;
                    var11 = var6;
                    var4['full'] = var11;
                    var4 = var9.bind(var10)(var4);
case 52: // try_start_0
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var4 = 7;
                    var4 = var10[var4];
                    var4 = var9.bind(var2)(var4);
                    var10 = var4.HTTP;
                    var9 = var10.get;
                    var4 = {};
                    var17 = _closure1_slot7;
                    var16 = var17.CHANNEL_CONVERSATION_MESSAGES;
                    var15 = var8;
                    var11 = var7;
                    var11 = var16.bind(var17)(var15, var11);
                    var4['url'] = var11;
                    var11 = {};
                    var11['limit'] = var14;
                    var11['include_ancestors'] = var13;
                    var11['include_reactions'] = var12;
                    var4['query'] = var11;
                    var11 = true;
                    var4['oldFormErrors'] = var11;
                    var4['rejectWithError'] = var11;
                    var4 = var9.bind(var10)(var4);
                    SaveGenerator(address=382);
case 53:
                    return var4;
case 54:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 55; continue _fun0002 }
case 56:
                    var10 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var9 = var9[var5];
                    var11 = var10.bind(var2)(var9);
                    var10 = var11.dispatch;
                    var9 = {};
                    var12 = 'CONVERSATION_FETCH_SUCCESS';
                    var9['type'] = var12;
                    var12 = var8;
                    var9['channelId'] = var12;
                    var12 = var7;
                    var9['conversationId'] = var12;
                    var12 = var4.body;
                    var12 = var12.messages;
                    var9['messages'] = var12;
                    var12 = var4.body;
                    var12 = var12.ancestors;
                    var9['messageReferences'] = var12;
                    var12 = var6;
                    var9['fullyHydrated'] = var12;
                    var9 = var10.bind(var11)(var9);
case 57: // try_end0
                    _fun0002_ip = 40; continue _fun0002;
case 55:
                    return var4;
case 58: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var9 = 'CONVERSATION_FETCH_FAILURE';
                    var3['type'] = var9;
                    var3['channelId'] = var8;
                    var3['conversationId'] = var7;
                    var3['full'] = var6;
                    var3 = var4.bind(var5)(var3);
case 40:
                    return var2;
case 39:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot10 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
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
    var5 = var5.FETCH_LIMIT;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.Endpoints;
    var _closure1_slot7 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/conversations/ConversationsActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function fetchChannelConversations() {
        var1 = undefined;
        var4 = _closure1_slot8;
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
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var7 = arg3;
            var3 = arguments[3];
            var1 = undefined;
            if(!(var3 === var1)) { _fun0003_ip = 59; continue _fun0003 }
case 60:
            var3 = true;
case 59:
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
            var8 = _closure1_slot9;
            var12 = arg2;
            var10 = {'includeReactions': true, 'includeMessageReferences': true};
            var14 = undefined;
            var13 = var6;
            var11 = var7;
            var4 = var14[var8](var13, var12, var11, var10, var9);
            var5 = _closure1_slot4;
            var4 = var5.getConversationMetadata;
            var5 = var4.bind(var5)(var6, var7);
            if(!var3) { _fun0003_ip = 61; continue _fun0003 }
case 62:
            var7 = null;
            var8 = var7 == var5;
            var4 = undefined;
            if(var8) { _fun0003_ip = 13; continue _fun0003 }
case 63:
            var8 = var5.conversation;
            var4 = var8.startMessageId;
case 13:
            var3 = var7 != var4;
case 61:
            if(!var3) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 8;
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
case 64:
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
    var2 = function trackTopicalNavigationEntrypointImpression(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var3 = var4.bind(var1)(var3);
            var5 = var3.ConversationsAnalytics;
            var4 = var5.trackEntrypointImpression;
            var3 = {};
            var6 = arg1;
            var3['channelId'] = var6;
            var6 = arg2;
            var3['conversationCount'] = var6;
            var3 = var4.bind(var5)(var3);
            var4 = _closure1_slot5;
            var3 = var4.shouldTriggerOnNextExposure;
            var3 = var3.bind(var4)();
            if(!var3) { _fun0004_ip = 66; continue _fun0004 }
case 67:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 10;
            var3 = var7[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.fireSurveyAction;
            var6 = _closure1_slot0;
            var3 = 11;
            var3 = var7[var3];
            var3 = var6.bind(var1)(var3);
            var3 = var3.SurveyActionTypes;
            var3 = var3.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS;
            var3 = var4.bind(var5)(var3);
case 66:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION';
            var2['type'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['trackTopicalNavigationEntrypointImpression'] = var2;
    return var1;
})();
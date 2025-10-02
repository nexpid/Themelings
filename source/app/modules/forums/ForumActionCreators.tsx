// app/modules/forums/ForumActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function withErrorHandling() {
        var1 = undefined;
        var4 = _closure1_slot7;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot6 = var1;
    var1 = function _withErrorHandling() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var9 = arg1;
                    var7 = arg2;
                    var6 = arg3;
                    var2 = undefined;
                    var3 = undefined;
                    var4 = undefined;
                    var5 = undefined;
case 4: // try_start_0
                    var9 = var9.bind(var2)();
                    SaveGenerator(address=35);
case 5:
                    return var9;
case 6:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=9);
                    if(var10) { _fun0001_ip = 7; continue _fun0001 }
case 8: // try_end0
                    return var9;
case 7:
                    return var9;
case 9: // catch_target0
                    CatchBlockStart(arg_register=8);
                    var8 = var9;
                    var10 = var9.body;
                    var3 = var10;
                    var9 = null;
                    var10 = var9 == var10;
                    var11 = undefined;
                    if(var10) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var11 = var3.code;
case 10:
                    var10 = _closure1_slot4;
                    var10 = var10.NON_MODERATED_TAG_REQUIRED;
                    if(!(var11 !== var10)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var10 = var8;
                    var10 = var10.body;
                    var4 = var10;
                    var11 = var9 == var10;
                    var10 = undefined;
                    if(var11) { _fun0001_ip = 14; continue _fun0001 }
case 15:
                    var10 = var4.code;
case 14:
                    var4 = _closure1_slot4;
                    var4 = var4.INVALID_FORM_BODY;
                    if(!(var10 === var4)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
                    var8 = var8.body;
                    var5 = var8;
                    var8 = var9 != var8;
                    var4 = var8;
                    if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
                    var5 = var5.errors;
                    var4 = var5.emoji;
case 18:
                    if(!var4) { _fun0001_ip = 16; continue _fun0001 }
case 20:
                    var5 = _closure1_slot1;
                    var13 = _closure1_slot2;
                    var4 = 2;
                    var4 = var13[var4];
                    var8 = var5.bind(var2)(var4);
                    var5 = var8.show;
                    var4 = {};
                    var12 = _closure1_slot0;
                    var9 = 3;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var14 = var10.intl;
                    var11 = var14.string;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var10 = var10.t;
                    var10 = var10.T8sBLC;
                    var10 = var11.bind(var14)(var10);
                    var4['title'] = var10;
                    var10 = var13[var9];
                    var10 = var12.bind(var2)(var10);
                    var11 = var10.intl;
                    var10 = var11.string;
                    var9 = var13[var9];
                    var9 = var12.bind(var2)(var9);
                    var9 = var9.t;
                    var9 = var9.aHt1BQ;
                    var9 = var10.bind(var11)(var9);
                    var4['body'] = var9;
                    var4 = var5.bind(var8)(var4);
                    _fun0001_ip = 16; continue _fun0001;
case 12:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 2;
                    var3 = var5[var3];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.show;
                    var3 = {};
                    var3['title'] = var7;
                    var3['body'] = var6;
                    var3 = var4.bind(var5)(var3);
case 16:
                    return var2;
case 2:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.AbortCodes;
    var _closure1_slot4 = var7;
    var2 = var2.Endpoints;
    var _closure1_slot5 = var2;
    var2 = {};
    var7 = function resort(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'RESORT_THREADS';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['resort'] = var7;
    var7 = function createForumTag(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var3 = var1.HTTP;
            var2 = var3.post;
            var1 = {};
            var8 = _closure1_slot5;
            var7 = var8.FORUM_TAGS;
            var4 = arg2;
            var4 = var7.bind(var8)(var4);
            var1['url'] = var4;
            var4 = {};
            var7 = var5.name;
            var4['name'] = var7;
            var7 = var5.emojiId;
            var4['emoji_id'] = var7;
            var8 = var5.emojiId;
            var7 = null;
            var7 = var7 != var8;
            if(var7) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var6 = var5.emojiName;
case 21:
            var4['emoji_name'] = var6;
            var5 = var5.moderated;
            var4['moderated'] = var5;
            var1['body'] = var4;
            var4 = false;
            var1['rejectWithError'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var2['createForumTag'] = var7;
    var7 = function updateForumTag(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var8 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 5;
            var4 = var4[var1];
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var6 = var4.HTTP;
            var5 = var6.put;
            var4 = {};
            var11 = _closure1_slot5;
            var10 = var11.FORUM_TAG;
            var9 = var8.id;
            var7 = arg2;
            var7 = var10.bind(var11)(var7, var9);
            var4['url'] = var7;
            var7 = {};
            var9 = var8.name;
            var7['name'] = var9;
            var9 = var8.emojiId;
            var7['emoji_id'] = var9;
            var10 = var8.emojiId;
            var9 = null;
            var10 = var9 == var10;
            var9 = undefined;
            if(!var10) { _fun0003_ip = 15; continue _fun0003 }
case 23:
            var9 = var8.emojiName;
case 15:
            var7['emoji_name'] = var9;
            var8 = var8.moderated;
            var7['moderated'] = var8;
            var4['body'] = var7;
            var7 = false;
            var4['rejectWithError'] = var7;
            var4 = var5.bind(var6)(var4);
            var _closure2_slot0 = var4;
            var5 = _closure1_slot6;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 3;
            var4 = var9[var3];
            var4 = var8.bind(var1)(var4);
            var7 = var4.intl;
            var6 = var7.string;
            var4 = var9[var3];
            var4 = var8.bind(var1)(var4);
            var4 = var4.t;
            var4 = var4.T8sBLC;
            var4 = var6.bind(var7)(var4);
            var6 = var9[var3];
            var6 = var8.bind(var1)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var3 = var9[var3];
            var3 = var8.bind(var1)(var3);
            var3 = var3.t;
            var3 = var3.imcb5u;
            var3 = var6.bind(var7)(var3);
            var2 = function() {
                var1 = _closure2_slot0;
                return var1;
            };
            var2 = var5.bind(var1)(var2, var4, var3);
            return var1;
        }
    };
    var2['updateForumTag'] = var7;
    var7 = function deleteForumTag(arg1, arg2) {
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 5;
        var4 = var9[var1];
        var1 = undefined;
        var4 = var8.bind(var1)(var4);
        var6 = var4.HTTP;
        var5 = var6.del;
        var4 = {};
        var12 = _closure1_slot5;
        var11 = var12.FORUM_TAG;
        var10 = arg1;
        var7 = arg2;
        var7 = var11.bind(var12)(var10, var7);
        var4['url'] = var7;
        var7 = false;
        var4['rejectWithError'] = var7;
        var4 = var5.bind(var6)(var4);
        var _closure2_slot0 = var4;
        var5 = _closure1_slot6;
        var3 = 3;
        var4 = var9[var3];
        var4 = var8.bind(var1)(var4);
        var7 = var4.intl;
        var6 = var7.string;
        var4 = var9[var3];
        var4 = var8.bind(var1)(var4);
        var4 = var4.t;
        var4 = var4.0ZkNDQ;
        var4 = var6.bind(var7)(var4);
        var6 = var9[var3];
        var6 = var8.bind(var1)(var6);
        var7 = var6.intl;
        var6 = var7.string;
        var3 = var9[var3];
        var3 = var8.bind(var1)(var3);
        var3 = var3.t;
        var3 = var3.imcb5u;
        var3 = var6.bind(var7)(var3);
        var2 = function() {
            var1 = _closure2_slot0;
            return var1;
        };
        var2 = var5.bind(var1)(var2, var4, var3);
        return var1;
    };
    var2['deleteForumTag'] = var7;
    var7 = function updateForumPostTags(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 24; continue _fun0004 }
case 3:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var4.unarchiveThreadIfNecessary;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=57);
case 25:
                    return var2;
case 26:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 5;
                    var3 = var8[var3];
                    var3 = var4.bind(var5)(var3);
                    var5 = var3.HTTP;
                    var4 = var5.patch;
                    var3 = {};
                    var9 = _closure1_slot5;
                    var8 = var9.CHANNEL;
                    var6 = _closure2_slot0;
                    var6 = var8.bind(var9)(var6);
                    var3['url'] = var6;
                    var6 = {};
                    var7 = _closure2_slot1;
                    var6['applied_tags'] = var7;
                    var3['body'] = var6;
                    var6 = false;
                    var3['rejectWithError'] = var6;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 27:
                    return var2;
case 24:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['updateForumPostTags'] = var7;
    var7 = function hideAdminOnboarding(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'ADMIN_ONBOARDING_GUIDE_HIDE';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['hide'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['hideAdminOnboarding'] = var7;
    var7 = function markPostAsSeen(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 7;
        var2 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.markAnalyticsFeedItemSeen;
        var2 = 8;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.getForumPostSeenManagerId;
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = arg2;
        var2 = arg3;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var2['markPostAsSeen'] = var7;
    var7 = function markPostAsUnseen(arg1, arg2, arg3) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 7;
        var2 = var4[var1];
        var1 = undefined;
        var6 = var3.bind(var1)(var2);
        var5 = var6.markAnalyticsFeedItemUnseen;
        var2 = 8;
        var2 = var4[var2];
        var4 = var3.bind(var1)(var2);
        var3 = var4.getForumPostSeenManagerId;
        var2 = arg1;
        var4 = var3.bind(var4)(var2);
        var3 = arg2;
        var2 = arg3;
        var2 = var5.bind(var6)(var4, var3, var2);
        return var1;
    };
    var2['markPostAsUnseen'] = var7;
    var7 = function flushSeenItems(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var5 = arguments[1];
            var1 = undefined;
            if(!(var5 === var1)) { _fun0005_ip = 7; continue _fun0005 }
case 29:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 9;
            var2 = var4[var2];
            var2 = var3.bind(var1)(var2);
            var2 = var2.ForceFlushType;
            var5 = var2.IMMEDIATE_WITH_COOLDOWN;
case 7:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 7;
            var2 = var7[var2];
            var4 = var6.bind(var1)(var2);
            var3 = var4.flushAnalyticsFeedItems;
            var2 = 8;
            var2 = var7[var2];
            var7 = var6.bind(var1)(var2);
            var6 = var7.getForumPostSeenManagerId;
            var2 = arg1;
            var2 = var6.bind(var7)(var2);
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        }
    };
    var2['flushSeenItems'] = var7;
    var7 = function searchForumPosts(arg1, arg2, arg3, arg4, arg5) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = arg4;
        var _closure2_slot3 = var2;
        var2 = arg5;
        var _closure2_slot4 = var2;
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 30; continue _fun0006 }
case 3:
                    var6 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var5 = 4;
                    var4 = var2[var5];
                    var2 = undefined;
                    var8 = var6.bind(var2)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var6 = 'FORUM_SEARCH_START';
                    var4['type'] = var6;
                    var9 = _closure2_slot1;
                    var4['channelId'] = var9;
                    var4 = var7.bind(var8)(var4);
case 31: // try_start_0
                    var7 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var4 = 6;
                    var4 = var8[var4];
                    var12 = var7.bind(var2)(var4);
                    var11 = var12.searchThreads;
                    var17 = _closure2_slot0;
                    var16 = _closure2_slot1;
                    var15 = _closure2_slot2;
                    var14 = _closure2_slot3;
                    var13 = _closure2_slot4;
                    var18 = var12;
                    var4 = var18[var11](var17, var16, var15, var14, var13, var12);
                    SaveGenerator(address=125);
case 32:
                    return var4;
case 33:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var8 = 10;
                    var8 = var7[var8];
                    var11 = var9.bind(var2)(var8);
                    var9 = var11.trackForumSearched;
                    var8 = {};
                    var10 = _closure2_slot0;
                    var8['guildId'] = var10;
                    var10 = _closure2_slot1;
                    var8['channelId'] = var10;
                    var12 = var4.length;
                    var8['numSearchResults'] = var12;
                    var8 = var9.bind(var11)(var8);
                    var8 = _closure1_slot1;
                    var7 = var7[var5];
                    var9 = var8.bind(var2)(var7);
                    var8 = var9.dispatch;
                    var7 = {};
                    var11 = 'FORUM_SEARCH_SUCCESS';
                    var7['type'] = var11;
                    var7['channelId'] = var10;
                    var7['threadIds'] = var4;
                    var7 = var8.bind(var9)(var7);
case 36: // try_end0
                    _fun0006_ip = 37; continue _fun0006;
case 34:
                    return var4;
case 38: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var5];
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var7 = 'FORUM_SEARCH_FAILURE';
                    var3['type'] = var7;
                    var6 = _closure2_slot1;
                    var3['channelId'] = var6;
                    var3 = var4.bind(var5)(var3);
case 37:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        var1 = var1.bind(var2)();
        return var1;
    };
    var2['searchForumPosts'] = var7;
    var7 = function updateForumSearchQuery(arg1, arg2) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FORUM_SEARCH_QUERY_UPDATED';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var5 = arg2;
        var2['query'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['updateForumSearchQuery'] = var7;
    var4 = function clearForumSearch(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'FORUM_SEARCH_CLEAR';
        var2['type'] = var5;
        var5 = arg1;
        var2['channelId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['clearForumSearch'] = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/ForumActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
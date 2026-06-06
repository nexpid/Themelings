// app/modules/quests/lib/analytics/AnalyticsTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var8 = function getQuestContentName(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = _closure1_slot2;
            var2 = var3.find;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.QuestContent;
                var1 = arg1;
                var2 = var2[var1];
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var2.bind(var3)(var1);
            var1 = null;
            var3 = var1 != var2;
            var1 = '';
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var6)(var3, var2, var4);
    var5 = var1.Object;
    var4 = var5.keys;
    var1 = 0;
    var2 = var11[var1];
    var1 = undefined;
    var2 = var10.bind(var1)(var2);
    var2 = var2.QuestContent;
    var2 = var4.bind(var5)(var2);
    var _closure1_slot2 = var2;
    var6 = {};
    var9 = 'AUTO';
    var6['AUTO'] = var9;
    var2 = 'MANUAL';
    var6['MANUAL'] = var2;
    var5 = {};
    var4 = 'LEFT';
    var5['LEFT'] = var4;
    var4 = 'RIGHT';
    var5['RIGHT'] = var4;
    var4 = {};
    var12 = 'ARROW';
    var4['ARROW'] = var12;
    var4['AUTO'] = var9;
    var4['MANUAL'] = var2;
    var2 = {};
    var9 = 'LEARN_MORE';
    var2['LEARN_MORE'] = var9;
    var9 = 'SHOW_REWARD';
    var2['SHOW_REWARD'] = var9;
    var9 = 'CLAIM_REWARD';
    var2['CLAIM_REWARD'] = var9;
    var9 = 'GET_REWARD_CODE';
    var2['GET_REWARD_CODE'] = var9;
    var9 = 'COPY_REWARD_CODE';
    var2['COPY_REWARD_CODE'] = var9;
    var9 = 'ACCEPT_QUEST';
    var2['ACCEPT_QUEST'] = var9;
    var9 = 'COPY_QUEST_URL';
    var2['COPY_QUEST_URL'] = var9;
    var9 = 'MOBILE_SHARESHEET';
    var2['MOBILE_SHARESHEET'] = var9;
    var9 = 'TRACK_PROGRESS';
    var2['TRACK_PROGRESS'] = var9;
    var9 = 'CONNECT_CONSOLE';
    var2['CONNECT_CONSOLE'] = var9;
    var9 = 'CONNECT_CONSOLE_LINK';
    var2['CONNECT_CONSOLE_LINK'] = var9;
    var9 = 'VIEW_CONSOLE_CONNECTION';
    var2['VIEW_CONSOLE_CONNECTIONS'] = var9;
    var9 = 'VIEW_CONSOLE_CONNECTIONS_LINK';
    var2['VIEW_CONSOLE_CONNECTIONS_LINK'] = var9;
    var9 = 'VIEW_REQUIREMENTS';
    var2['VIEW_REQUIREMENTS'] = var9;
    var9 = 'SELECT_CONSOLE_PLATFORM';
    var2['SELECT_CONSOLE_PLATFORM'] = var9;
    var9 = 'SELECT_DESKTOP_PLATFORM';
    var2['SELECT_DESKTOP_PLATFORM'] = var9;
    var9 = 'DESELECT_PLATFORM';
    var2['DESELECT_PLATFORM'] = var9;
    var9 = 'OPEN_ACCOUNT_LINK_MODAL';
    var2['OPEN_ACCOUNT_LINK_MODAL'] = var9;
    var9 = 'OPEN_ACCOUNT_LINK_INSTRUCTIONS';
    var2['OPEN_ACCOUNT_LINK_INSTRUCTIONS'] = var9;
    var9 = 'SELECT_IN_GAME_AUTH_METHOD';
    var2['SELECT_IN_GAME_AUTH_METHOD'] = var9;
    var9 = 'SELECT_WEB_AUTH_METHOD';
    var2['SELECT_WEB_AUTH_METHOD'] = var9;
    var9 = 'START_WEB_AUTHORIZATION';
    var2['START_WEB_AUTHORIZATION'] = var9;
    var9 = 'DEFIBRILLATOR';
    var2['DEFIBRILLATOR'] = var9;
    var9 = 'DEFIBRILLATOR_RECONNECT_CONSOLE';
    var2['DEFIBRILLATOR_RECONNECT_CONSOLE'] = var9;
    var9 = 'OPEN_DISCLOSURE';
    var2['OPEN_DISCLOSURE'] = var9;
    var9 = 'WATCH_STREAM';
    var2['WATCH_STREAM'] = var9;
    var9 = 'WATCH_STREAM_CONFIRM';
    var2['WATCH_STREAM_CONFIRM'] = var9;
    var9 = 'REWARD_LEARN_MORE';
    var2['REWARD_LEARN_MORE'] = var9;
    var9 = 'OPEN_GAME_LINK';
    var2['OPEN_GAME_LINK'] = var9;
    var9 = 'OPEN_CONTEXT_MENU';
    var2['OPEN_CONTEXT_MENU'] = var9;
    var9 = 'OPEN_QUEST_HOME';
    var2['OPEN_QUEST_HOME'] = var9;
    var9 = 'OPEN_QUEST_HOME_TO_CLAIM';
    var2['OPEN_QUEST_HOME_TO_CLAIM'] = var9;
    var9 = 'QUEST_BAR.COPY_LINK';
    var2['QUEST_BAR_COPY_LINK'] = var9;
    var9 = 'CONTEXT_MENU.COPY_LINK';
    var2['CONTEXT_MENU_COPY_LINK'] = var9;
    var9 = 'REWARD_MODAL.COPY_LINK';
    var2['REWARD_MODAL_COPY_LINK'] = var9;
    var9 = 'CONTEXT_MENU.HIDE_CONTENT';
    var2['CONTEXT_MENU_HIDE_CONTENT'] = var9;
    var9 = 'CONTEXT_MENU.OPEN_GAME_LINK';
    var2['CONTEXT_MENU_OPEN_GAME_LINK'] = var9;
    var9 = 'CONTEXT_MENU.OPEN_DISCLOSURE';
    var2['CONTEXT_MENU_OPEN_DISCLOSURE'] = var9;
    var9 = 'CONTEXT_MENU.LEARN_MORE';
    var2['CONTEXT_MENU_LEARN_MORE'] = var9;
    var9 = 'HOW_TO_HELP_ARTICLE_XBOX';
    var2['HOW_TO_HELP_ARTICLE_XBOX'] = var9;
    var9 = 'HOW_TO_HELP_ARTICLE_PLAYSTATION';
    var2['HOW_TO_HELP_ARTICLE_PLAYSTATION'] = var9;
    var9 = 'VIEW_QUESTS';
    var2['VIEW_QUESTS'] = var9;
    var9 = 'EXPAND';
    var2['EXPAND'] = var9;
    var9 = 'COLLAPSE';
    var2['COLLAPSE'] = var9;
    var9 = 'START_QUEST';
    var2['START_QUEST'] = var9;
    var9 = 'TRANSCRIPT_ENABLE';
    var2['TRANSCRIPT_ENABLE'] = var9;
    var9 = 'TRANSCRIPT_DISABLE';
    var2['TRANSCRIPT_DISABLE'] = var9;
    var9 = 'CLOSED_CAPTIONING_ENABLE';
    var2['CLOSED_CAPTIONING_ENABLE'] = var9;
    var9 = 'CLOSED_CAPTIONING_DISABLE';
    var2['CLOSED_CAPTIONING_DISABLE'] = var9;
    var9 = 'SEEK_BACKWARD';
    var2['SEEK_BACKWARD'] = var9;
    var9 = 'SEEK_FORWARD';
    var2['SEEK_FORWARD'] = var9;
    var9 = 'WATCH_VIDEO';
    var2['WATCH_VIDEO'] = var9;
    var9 = 'QUEST_BAR_VIDEO_QUEST_PREVIEW';
    var2['QUEST_BAR_VIDEO_QUEST_PREVIEW'] = var9;
    var9 = 'QUEST_HOME_TILE_HEADER_WATCH_VIDEO';
    var2['QUEST_HOME_TILE_HEADER_WATCH_VIDEO'] = var9;
    var9 = 'REDEEM_REWARD';
    var2['REDEEM_REWARD'] = var9;
    var9 = 'VISIT_REDEMPTION_LINK';
    var2['VISIT_REDEMPTION_LINK'] = var9;
    var9 = 'SPONSORED_QUEST_SHEET';
    var2['SPONSORED_QUEST_SHEET'] = var9;
    var9 = 'GAME_PROFILE_OPEN';
    var2['GAME_PROFILE_OPEN'] = var9;
    var9 = 'GAME_STORE_OPEN_GAME_LINK';
    var2['GAME_STORE_OPEN_GAME_LINK'] = var9;
    var9 = 'MOBILE_ORBS_ONBOARDING_DC';
    var2['MOBILE_ORBS_ONBOARDING_DC'] = var9;
    var9 = 'LAUNCH_MOBILE_ACTIVITY';
    var2['LAUNCH_MOBILE_ACTIVITY'] = var9;
    var9 = 'OPEN_NITRO_CHECKOUT';
    var2['OPEN_NITRO_CHECKOUT'] = var9;
    var9 = 'OPEN_NITRO_HOME';
    var2['OPEN_NITRO_HOME'] = var9;
    var9 = 'START_BOUNTY';
    var2['START_BOUNTY'] = var9;
    var9 = 1;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/quests/lib/analytics/AnalyticsTypes.tsx';
    var9 = var10.bind(var11)(var9);
    var3['getQuestContentName'] = var8;
    var8 = function getQuestStatus(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var2 = var5.userStatus;
            var4 = null;
            var6 = var4 == var2;
            var1 = undefined;
            if(var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var1 = var2.claimedAt;
case 4:
            var2 = var4 != var1;
            var1 = 'COMPLETED_CLAIMED';
            if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var5.userStatus;
            var7 = var4 == var6;
            var2 = undefined;
            if(var7) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var6.completedAt;
case 8:
            var6 = var4 != var2;
            var2 = 'COMPLETED';
            if(var6) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var5 = var5.userStatus;
            var6 = var4 == var5;
            var3 = undefined;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var3 = var5.enrolledAt;
case 12:
            var4 = var4 != var3;
            var3 = 'NONE';
            if(!var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var3 = 'ENROLLED';
case 14:
            var2 = var3;
case 10:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var3['getQuestStatus'] = var8;
    var7 = function getContentProperties(arg1, arg2, arg3) {
        var4 = arg1;
        var1 = {};
        var1['content_id'] = var4;
        var3 = _closure1_slot3;
        var2 = undefined;
        var2 = var3.bind(var2)(var4);
        var1['content_name'] = var2;
        var2 = arg2;
        var1['content_position'] = var2;
        var2 = arg3;
        var1['row_index'] = var2;
        return var1;
    };
    var3['getContentProperties'] = var7;
    var3['BountyScrollingType'] = var6;
    var3['HorizontalScrollingDirection'] = var5;
    var3['QuestHomeScrollingType'] = var4;
    var3['QuestContentCTA'] = var2;
    return var1;
})();
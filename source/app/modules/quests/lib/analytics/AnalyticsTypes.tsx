// app/modules/quests/lib/analytics/AnalyticsTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var7 = function getQuestContentName(arg1) {
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
    var _closure1_slot3 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var2 = true;
    var4['value'] = var2;
    var2 = '__esModule';
    var2 = var5.bind(var8)(var3, var2, var4);
    var5 = var1.Object;
    var4 = var5.keys;
    var1 = 0;
    var2 = var10[var1];
    var1 = undefined;
    var2 = var9.bind(var1)(var2);
    var2 = var2.QuestContent;
    var2 = var4.bind(var5)(var2);
    var _closure1_slot2 = var2;
    var5 = {};
    var2 = 'AUTO';
    var5['AUTO'] = var2;
    var2 = 'MANUAL';
    var5['MANUAL'] = var2;
    var4 = {};
    var2 = 'LEFT';
    var4['LEFT'] = var2;
    var2 = 'RIGHT';
    var4['RIGHT'] = var2;
    var2 = {};
    var8 = 'LEARN_MORE';
    var2['LEARN_MORE'] = var8;
    var8 = 'SHOW_REWARD';
    var2['SHOW_REWARD'] = var8;
    var8 = 'CLAIM_REWARD';
    var2['CLAIM_REWARD'] = var8;
    var8 = 'GET_REWARD_CODE';
    var2['GET_REWARD_CODE'] = var8;
    var8 = 'COPY_REWARD_CODE';
    var2['COPY_REWARD_CODE'] = var8;
    var8 = 'ACCEPT_QUEST';
    var2['ACCEPT_QUEST'] = var8;
    var8 = 'COPY_QUEST_URL';
    var2['COPY_QUEST_URL'] = var8;
    var8 = 'MOBILE_SHARESHEET';
    var2['MOBILE_SHARESHEET'] = var8;
    var8 = 'TRACK_PROGRESS';
    var2['TRACK_PROGRESS'] = var8;
    var8 = 'CONNECT_CONSOLE';
    var2['CONNECT_CONSOLE'] = var8;
    var8 = 'CONNECT_CONSOLE_LINK';
    var2['CONNECT_CONSOLE_LINK'] = var8;
    var8 = 'VIEW_CONSOLE_CONNECTION';
    var2['VIEW_CONSOLE_CONNECTIONS'] = var8;
    var8 = 'VIEW_CONSOLE_CONNECTIONS_LINK';
    var2['VIEW_CONSOLE_CONNECTIONS_LINK'] = var8;
    var8 = 'VIEW_REQUIREMENTS';
    var2['VIEW_REQUIREMENTS'] = var8;
    var8 = 'SELECT_CONSOLE_PLATFORM';
    var2['SELECT_CONSOLE_PLATFORM'] = var8;
    var8 = 'SELECT_DESKTOP_PLATFORM';
    var2['SELECT_DESKTOP_PLATFORM'] = var8;
    var8 = 'DESELECT_PLATFORM';
    var2['DESELECT_PLATFORM'] = var8;
    var8 = 'DEFIBRILLATOR';
    var2['DEFIBRILLATOR'] = var8;
    var8 = 'DEFIBRILLATOR_RECONNECT_CONSOLE';
    var2['DEFIBRILLATOR_RECONNECT_CONSOLE'] = var8;
    var8 = 'OPEN_DISCLOSURE';
    var2['OPEN_DISCLOSURE'] = var8;
    var8 = 'WATCH_STREAM';
    var2['WATCH_STREAM'] = var8;
    var8 = 'WATCH_STREAM_CONFIRM';
    var2['WATCH_STREAM_CONFIRM'] = var8;
    var8 = 'REWARD_LEARN_MORE';
    var2['REWARD_LEARN_MORE'] = var8;
    var8 = 'OPEN_GAME_LINK';
    var2['OPEN_GAME_LINK'] = var8;
    var8 = 'OPEN_CONTEXT_MENU';
    var2['OPEN_CONTEXT_MENU'] = var8;
    var8 = 'OPEN_QUEST_HOME';
    var2['OPEN_QUEST_HOME'] = var8;
    var8 = 'QUEST_BAR.COPY_LINK';
    var2['QUEST_BAR_COPY_LINK'] = var8;
    var8 = 'CONTEXT_MENU.COPY_LINK';
    var2['CONTEXT_MENU_COPY_LINK'] = var8;
    var8 = 'REWARD_MODAL.COPY_LINK';
    var2['REWARD_MODAL_COPY_LINK'] = var8;
    var8 = 'CONTEXT_MENU.HIDE_CONTENT';
    var2['CONTEXT_MENU_HIDE_CONTENT'] = var8;
    var8 = 'CONTEXT_MENU.OPEN_GAME_LINK';
    var2['CONTEXT_MENU_OPEN_GAME_LINK'] = var8;
    var8 = 'CONTEXT_MENU.OPEN_DISCLOSURE';
    var2['CONTEXT_MENU_OPEN_DISCLOSURE'] = var8;
    var8 = 'CONTEXT_MENU.LEARN_MORE';
    var2['CONTEXT_MENU_LEARN_MORE'] = var8;
    var8 = 'HOW_TO_HELP_ARTICLE_XBOX';
    var2['HOW_TO_HELP_ARTICLE_XBOX'] = var8;
    var8 = 'HOW_TO_HELP_ARTICLE_PLAYSTATION';
    var2['HOW_TO_HELP_ARTICLE_PLAYSTATION'] = var8;
    var8 = 'VIEW_QUESTS';
    var2['VIEW_QUESTS'] = var8;
    var8 = 'EXPAND';
    var2['EXPAND'] = var8;
    var8 = 'COLLAPSE';
    var2['COLLAPSE'] = var8;
    var8 = 'START_QUEST';
    var2['START_QUEST'] = var8;
    var8 = 'TRANSCRIPT_ENABLE';
    var2['TRANSCRIPT_ENABLE'] = var8;
    var8 = 'TRANSCRIPT_DISABLE';
    var2['TRANSCRIPT_DISABLE'] = var8;
    var8 = 'CLOSED_CAPTIONING_ENABLE';
    var2['CLOSED_CAPTIONING_ENABLE'] = var8;
    var8 = 'CLOSED_CAPTIONING_DISABLE';
    var2['CLOSED_CAPTIONING_DISABLE'] = var8;
    var8 = 'SEEK_BACKWARD';
    var2['SEEK_BACKWARD'] = var8;
    var8 = 'SEEK_FORWARD';
    var2['SEEK_FORWARD'] = var8;
    var8 = 'WATCH_VIDEO';
    var2['WATCH_VIDEO'] = var8;
    var8 = 'QUEST_BAR_VIDEO_QUEST_PREVIEW';
    var2['QUEST_BAR_VIDEO_QUEST_PREVIEW'] = var8;
    var8 = 'QUEST_HOME_TILE_HEADER_WATCH_VIDEO';
    var2['QUEST_HOME_TILE_HEADER_WATCH_VIDEO'] = var8;
    var8 = 'REDEEM_REWARD';
    var2['REDEEM_REWARD'] = var8;
    var8 = 'VISIT_REDEMPTION_LINK';
    var2['VISIT_REDEMPTION_LINK'] = var8;
    var8 = 'SPONSORED_QUEST_SHEET';
    var2['SPONSORED_QUEST_SHEET'] = var8;
    var8 = 'GAME_PROFILE_OPEN';
    var2['GAME_PROFILE_OPEN'] = var8;
    var8 = 'GAME_STORE_OPEN_GAME_LINK';
    var2['GAME_STORE_OPEN_GAME_LINK'] = var8;
    var8 = 'MOBILE_ORBS_ONBOARDING_DC';
    var2['MOBILE_ORBS_ONBOARDING_DC'] = var8;
    var8 = 'LAUNCH_MOBILE_ACTIVITY';
    var2['LAUNCH_MOBILE_ACTIVITY'] = var8;
    var8 = 'OPEN_NITRO_CHECKOUT';
    var2['OPEN_NITRO_CHECKOUT'] = var8;
    var8 = 'OPEN_NITRO_HOME';
    var2['OPEN_NITRO_HOME'] = var8;
    var8 = 'START_BOUNTY';
    var2['START_BOUNTY'] = var8;
    var8 = 1;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/quests/lib/analytics/AnalyticsTypes.tsx';
    var8 = var9.bind(var10)(var8);
    var3['getQuestContentName'] = var7;
    var7 = function getQuestStatus(arg1) {
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
    var3['getQuestStatus'] = var7;
    var6 = function getContentProperties(arg1, arg2, arg3) {
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
    var3['getContentProperties'] = var6;
    var3['BountyScrollingType'] = var5;
    var3['BountyScrollingDirection'] = var4;
    var3['QuestContentCTA'] = var2;
    return var1;
})();
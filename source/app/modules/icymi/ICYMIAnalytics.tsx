// app/modules/icymi/ICYMIAnalytics.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var7 = var2.ChannelTypes;
    var _closure1_slot4 = var7;
    var2 = var2.AnalyticEvents;
    var _closure1_slot5 = var2;
    var2 = function listItemToType(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var1 = var4.data;
            var6 = var1.kind;
            var1 = 'end';
            if(!(var1 !== var6)) { _fun0001_ip = 284; continue _fun0001 }
 24:
            var2 = 'loading';
            if(!(var2 !== var6)) { _fun0001_ip = 282; continue _fun0001 }
 35:
            var3 = 'message';
            if(!(var3 !== var6)) { _fun0001_ip = 253; continue _fun0001 }
 46:
            var5 = 'channelSummary';
            if(!(var5 !== var6)) { _fun0001_ip = 247; continue _fun0001 }
 59:
            var5 = 'guildEvent';
            if(!(var5 !== var6)) { _fun0001_ip = 239; continue _fun0001 }
 70:
            var5 = 'contentInventory';
            if(!(var5 !== var6)) { _fun0001_ip = 168; continue _fun0001 }
 80:
            var5 = 'recommendedGuilds';
            if(!(var5 !== var6)) { _fun0001_ip = 160; continue _fun0001 }
 90:
            var5 = 'forumThread';
            if(!(var5 !== var6)) { _fun0001_ip = 152; continue _fun0001 }
 100:
            var5 = 'generatedCandidate';
            if(!(var5 !== var6)) { _fun0001_ip = 144; continue _fun0001 }
 110:
            var5 = 'icymiHeader';
            if(!(var5 !== var6)) { _fun0001_ip = 136; continue _fun0001 }
 120:
            var5 = 'mentions';
            if(!(var5 !== var6)) { _fun0001_ip = 134; continue _fun0001 }
 128:
            var6 = 'unknown';
            return var6;
 134:
            return var5;
 136:
            var5 = 'icymi_header';
            return var5;
 144:
            var5 = 'generated_candidate';
            return var5;
 152:
            var5 = 'forum_thread';
            return var5;
 160:
            var5 = 'recommended_guilds';
            return var5;
 168:
            var5 = var4.data;
            var5 = var5.content;
            var7 = var5.content_type;
            var8 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 2;
            var6 = var6[var5];
            var5 = undefined;
            var5 = var8.bind(var5)(var6);
            var5 = var5.ContentInventoryEntryType;
            var6 = var5.CUSTOM_STATUS;
            var5 = 'hotwheels_gaming_activity';
            if(!(var7 === var6)) { _fun0001_ip = 237; continue _fun0001 }
 231:
            var5 = 'hotwheels_custom_status';
 237:
            return var5;
 239:
            var5 = 'guild_event';
            return var5;
 247:
            var5 = 'summary';
            return var5;
 253:
            var5 = var4.channelType;
            var4 = _closure1_slot4;
            var4 = var4.GUILD_ANNOUNCEMENT;
            if(!(var5 === var4)) { _fun0001_ip = 280; continue _fun0001 }
 276:
            var3 = 'announcement';
 280:
            return var3;
 282:
            return var2;
 284:
            return var1;
        }
    };
    var _closure1_slot6 = var2;
    var2 = function dehydratedItemToType(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = var2.type;
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var7 = 3;
            var4 = var3[var7];
            var3 = undefined;
            var4 = var6.bind(var3)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.MESSAGE;
            if(!(var4 !== var5)) { _fun0002_ip = 307; continue _fun0002 }
 52:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.SUMMARY;
            if(!(var4 !== var5)) { _fun0002_ip = 301; continue _fun0002 }
 88:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.ACTIVITY;
            if(!(var4 !== var5)) { _fun0002_ip = 293; continue _fun0002 }
 124:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.CUSTOM_STATUS;
            if(!(var4 !== var5)) { _fun0002_ip = 285; continue _fun0002 }
 160:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.GUILD_EVENT;
            if(!(var4 !== var5)) { _fun0002_ip = 277; continue _fun0002 }
 193:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.RECOMMENDED_GUILDS;
            if(!(var4 !== var5)) { _fun0002_ip = 269; continue _fun0002 }
 226:
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var6.bind(var3)(var4);
            var4 = var4.ICYMIItemTypes;
            var4 = var4.GENERATED_CANDIDATE;
            if(!(var4 !== var5)) { _fun0002_ip = 261; continue _fun0002 }
 259:
            return var3;
 261:
            var3 = 'generated_candidate';
            return var3;
 269:
            var3 = 'recommended_guilds';
            return var3;
 277:
            var3 = 'guild_event';
            return var3;
 285:
            var3 = 'hotwheels_custom_status';
            return var3;
 293:
            var3 = 'hotwheels_gaming_activity';
            return var3;
 301:
            var3 = 'summary';
            return var3;
 307:
            var2 = var2.data;
            var3 = var2.channel_type;
            var1 = _closure1_slot4;
            var2 = var1.GUILD_ANNOUNCEMENT;
            var1 = 'message';
            if(!(var3 === var2)) { _fun0002_ip = 340; continue _fun0002 }
 336:
            var1 = 'announcement';
 340:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function trackItemInteraction(arg1, arg2, arg3) {
        var8 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.FEED_ITEM_INTERACTED;
        var2 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var2['load_id'] = var6;
        var6 = arg2;
        var2['feed_item_type'] = var6;
        var2['feed_item_id'] = var8;
        var6 = 'gravity';
        var2['home_session_id'] = var6;
        var6 = arg3;
        var2['action_type'] = var6;
        var6 = var7.getIndexInHydratedFeed;
        var6 = var6.bind(var7)(var8);
        var2['feed_item_index'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackItemInteraction'] = var7;
    var7 = function trackItemShortImpression(arg1, arg2, arg3) {
        var7 = arg1;
        var8 = arg2;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.FEED_ITEM_SEEN_BATCH;
        var2 = {};
        var10 = _closure1_slot3;
        var9 = var10.getLoadId;
        var9 = var9.bind(var10)();
        var2['load_id'] = var9;
        var9 = 'gravity';
        var2['home_session_id'] = var9;
        var10 = var7.map;
        var9 = function(arg1) {
            var1 = arg1;
            var1 = var1.item;
            var1 = var1.id;
            return var1;
        };
        var9 = var10.bind(var7)(var9);
        var2['feed_item_ids'] = var9;
        var10 = var7.map;
        var9 = function(arg1) {
            var3 = _closure1_slot6;
            var1 = arg1;
            var2 = var1.item;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var9 = var10.bind(var7)(var9);
        var2['feed_item_types'] = var9;
        var7 = var7.length;
        var2['num_items'] = var7;
        var9 = var8.map;
        var7 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var7 = var9.bind(var8)(var7);
        var2['all_feed_item_ids'] = var7;
        var9 = var8.map;
        var7 = function(arg1) {
            var1 = arg1;
            var1 = var1.type;
            return var1;
        };
        var7 = var9.bind(var8)(var7);
        var2['all_feed_item_types'] = var7;
        var7 = var8.length;
        var2['num_all_items'] = var7;
        var7 = var8.map;
        var6 = function(arg1, arg2) {
            var1 = arg2;
            return var1;
        };
        var6 = var7.bind(var8)(var6);
        var2['all_feed_item_indices'] = var6;
        var6 = arg3;
        var2['feed_version'] = var6;
        var6 = 3;
        var2['version'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackItemShortImpression'] = var7;
    var7 = function trackItemLongImpression(arg1, arg2, arg3) {
        var7 = arg1;
        var8 = arg2;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.FEED_ITEM_SEEN_LONG;
        var2 = {};
        var10 = _closure1_slot3;
        var9 = var10.getLoadId;
        var9 = var9.bind(var10)();
        var2['load_id'] = var9;
        var9 = 'gravity';
        var2['home_session_id'] = var9;
        var10 = var7.map;
        var9 = function(arg1) {
            var1 = arg1;
            var1 = var1.item;
            var1 = var1.id;
            return var1;
        };
        var9 = var10.bind(var7)(var9);
        var2['feed_item_ids'] = var9;
        var10 = var7.map;
        var9 = function(arg1) {
            var3 = _closure1_slot6;
            var1 = arg1;
            var2 = var1.item;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var9 = var10.bind(var7)(var9);
        var2['feed_item_types'] = var9;
        var7 = var7.length;
        var2['num_items'] = var7;
        var9 = var8.map;
        var7 = function(arg1) {
            var1 = arg1;
            var1 = var1.id;
            return var1;
        };
        var7 = var9.bind(var8)(var7);
        var2['all_feed_item_ids'] = var7;
        var9 = var8.map;
        var7 = function(arg1) {
            var1 = arg1;
            var1 = var1.type;
            return var1;
        };
        var7 = var9.bind(var8)(var7);
        var2['all_feed_item_types'] = var7;
        var7 = var8.length;
        var2['num_all_items'] = var7;
        var7 = var8.map;
        var6 = function(arg1, arg2) {
            var1 = arg2;
            return var1;
        };
        var6 = var7.bind(var8)(var6);
        var2['all_feed_item_indices'] = var6;
        var6 = arg3;
        var2['feed_version'] = var6;
        var6 = 3;
        var2['version'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackItemLongImpression'] = var7;
    var7 = function trackFeedLoaded(arg1) {
        var6 = arg1;
        var10 = new Array(0);
        var _closure2_slot0 = var10;
        var9 = new Array(0);
        var _closure2_slot1 = var9;
        var8 = new Array(0);
        var _closure2_slot2 = var8;
        var7 = new Array(0);
        var _closure2_slot3 = var7;
        var4 = var6.unreadFeedItems;
        var3 = var4.forEach;
        var2 = function(arg1) {
            var5 = arg1;
            var4 = _closure2_slot0;
            var3 = var4.push;
            var2 = var5.id;
            var2 = var3.bind(var4)(var2);
            var4 = _closure2_slot2;
            var3 = var4.push;
            var2 = _closure1_slot7;
            var1 = undefined;
            var2 = var2.bind(var1)(var5);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        var3 = var6.readFeedItems;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var5 = arg1;
            var4 = _closure2_slot1;
            var3 = var4.push;
            var2 = var5.id;
            var2 = var3.bind(var4)(var2);
            var4 = _closure2_slot3;
            var3 = var4.push;
            var2 = _closure1_slot7;
            var1 = undefined;
            var2 = var2.bind(var1)(var5);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.FEED_LOADED;
        var2 = {};
        var13 = var6.newTrackingProps;
        var14 = var2;
        var11 = copyDataProperties(var14, var13);
        var12 = var6.homeSessionId;
        var11 = 'home_session_id';
        var2[var11] = var12;
        var11 = var6.hasNewContent;
        var6 = 'tab_badged';
        var2[var6] = var11;
        var6 = 'unread_feed_item_ids';
        var2[var6] = var10;
        var6 = 'read_feed_item_ids';
        var2[var6] = var9;
        var6 = 'unread_feed_item_types';
        var2[var6] = var8;
        var6 = 'read_feed_item_types';
        var2[var6] = var7;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedLoaded'] = var7;
    var7 = function trackFeedShown(arg1) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.FEED_SHOWN;
        var2 = {};
        var8 = _closure1_slot3;
        var7 = var8.getLoadId;
        var7 = var7.bind(var8)();
        var2['load_id'] = var7;
        var7 = var6.homeSessionId;
        var2['home_session_id'] = var7;
        var6 = var6.variant;
        var2['variant'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedShown'] = var7;
    var7 = function trackFeedFirstScrollStarted() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.HOME_FIRST_SCROLL_STARTED;
        var2 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var2['load_id'] = var6;
        var6 = 'gravity';
        var2['home_session_id'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedFirstScrollStarted'] = var7;
    var7 = function trackFeedFeedbackPromptViewed() {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.track;
        var2 = _closure1_slot5;
        var2 = var2.HOME_FEEDBACK_PROMPT_VIEWED;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var2['trackFeedFeedbackPromptViewed'] = var7;
    var7 = function trackFeedFeedbackSubmitted(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.HOME_FEEDBACK_SUBMITTED;
        var2 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var2['load_id'] = var6;
        var6 = 'gravity';
        var2['home_session_id'] = var6;
        var8 = arg1;
        var9 = var2;
        var6 = copyDataProperties(var9, var8);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedFeedbackSubmitted'] = var7;
    var7 = function trackGeneratedCandidateFeedback(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.FEED_ITEM_CONTENT_GEN_FEEDBACK;
            var2 = {};
            var9 = var6.isPositive;
            var8 = 'thumbs_down';
            if(!var9) { _fun0003_ip = 66; continue _fun0003 }
 60:
            var8 = 'thumbs_up';
 66:
            var2['feedback_type'] = var8;
            var8 = global;
            var10 = var8.parseInt;
            var9 = var6.item;
            var9 = var9.content_id;
            var9 = var10.bind(var1)(var9);
            var2['content_id'] = var9;
            var9 = var8.parseInt;
            var8 = var6.item;
            var8 = var8.channel_id;
            var8 = var9.bind(var1)(var8);
            var2['channel_id'] = var8;
            var8 = var6.item;
            var9 = var8.type;
            var8 = var9.toString;
            var8 = var8.bind(var9)();
            var2['content_type'] = var8;
            var8 = var6.item;
            var8 = var8.guild_id;
            var2['guild_id'] = var8;
            var8 = 'gravity';
            var2['home_session_id'] = var8;
            var8 = _closure1_slot3;
            var7 = var8.getLoadId;
            var7 = var7.bind(var8)();
            var2['load_id'] = var7;
            var7 = 1;
            var2['version'] = var7;
            var7 = var6.item;
            var7 = var7.primary_text;
            var10 = var7.length;
            var9 = null;
            var11 = var9 != var10;
            var8 = 0;
            if(!var11) { _fun0003_ip = 231; continue _fun0003 }
 228:
            var8 = var10;
 231:
            var2['primary_text_length'] = var8;
            var8 = var6.item;
            var8 = var8.secondary_text;
            var10 = var8.length;
            var11 = var9 != var10;
            var8 = 0;
            if(!var11) { _fun0003_ip = 266; continue _fun0003 }
 263:
            var8 = var10;
 266:
            var2['secondary_text_length'] = var8;
            var8 = var6.item;
            var8 = var8.message_ids;
            var10 = var8.length;
            var11 = var9 != var10;
            var8 = 0;
            if(!var11) { _fun0003_ip = 301; continue _fun0003 }
 298:
            var8 = var10;
 301:
            var2['message_count'] = var8;
            var8 = var6.item;
            var8 = var8.user_ids;
            var8 = var8.length;
            var9 = var9 != var8;
            var7 = 0;
            if(!var9) { _fun0003_ip = 334; continue _fun0003 }
 331:
            var7 = var8;
 334:
            var2['user_count'] = var7;
            var6 = var6.generatedItemIndex;
            var2['generated_item_index'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackGeneratedCandidateFeedback'] = var7;
    var7 = function trackFeedOnboardingScreenSkipped(arg1) {
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.ICYMI_ONBOARDING_SCREEN_SKIPPED;
        var2 = {};
        var6 = arg1;
        var6 = var6.location;
        var2['location'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedOnboardingScreenSkipped'] = var7;
    var7 = function trackFeedOnboardingGuildToggled(arg1) {
        var6 = arg1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.ICYMI_ONBOARDING_GUILD_TOGGLED;
        var2 = {};
        var7 = var6.guildId;
        var2['guild_id'] = var7;
        var6 = var6.toggled;
        var2['toggled'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedOnboardingGuildToggled'] = var7;
    var7 = function trackFeedOnboardingCategoryToggled(arg1) {
        var6 = arg1;
        var4 = _closure1_slot1;
        var3 = _closure1_slot2;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var5 = var4.bind(var1)(var3);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.ICYMI_ONBOARDING_CATEGORY_TOGGLED;
        var2 = {};
        var7 = var6.categoryId;
        var2['category_id'] = var7;
        var6 = var6.toggled;
        var2['toggled'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedOnboardingCategoryToggled'] = var7;
    var7 = function trackFeedEmptyLoadingSeen() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.ICYMI_FEED_EMPTY_LOADING_SEEN;
        var2 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var2['load_id'] = var6;
        var6 = var7.getVersion;
        var6 = var6.bind(var7)();
        var2['version'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedEmptyLoadingSeen'] = var7;
    var7 = function trackFeedEmptyLoadingComplete(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.ICYMI_FEED_EMPTY_LOADING_COMPLETE;
        var2 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var2['load_id'] = var6;
        var6 = arg1;
        var6 = var6.dwellTimeMs;
        var2['dwell_time_ms'] = var6;
        var6 = var7.getVersion;
        var6 = var6.bind(var7)();
        var2['version'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedEmptyLoadingComplete'] = var7;
    var7 = function trackFeedEmptyLoadingAbandoned(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.ICYMI_FEED_EMPTY_LOADING_ABANDONED;
        var2 = {};
        var7 = _closure1_slot3;
        var6 = var7.getLoadId;
        var6 = var6.bind(var7)();
        var2['load_id'] = var6;
        var6 = arg1;
        var6 = var6.dwellTimeMs;
        var2['dwell_time_ms'] = var6;
        var6 = var7.getVersion;
        var6 = var6.bind(var7)();
        var2['version'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedEmptyLoadingAbandoned'] = var7;
    var7 = function trackFeedSessionStarted(arg1) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.FEED_SESSION_STARTED;
        var2 = {};
        var8 = _closure1_slot3;
        var7 = var8.getLoadId;
        var7 = var7.bind(var8)();
        var2['load_id'] = var7;
        var7 = var8.getVersion;
        var7 = var7.bind(var8)();
        var2['version'] = var7;
        var7 = var6.sessionStartTimeMs;
        var2['session_start_time_ms'] = var7;
        var7 = var6.icymiSessionId;
        var2['icymi_session_id'] = var7;
        var6 = var6.previousIcymiSessionCount;
        var2['previous_icymi_session_count'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedSessionStarted'] = var7;
    var7 = function trackFeedSessionCompleted(arg1) {
        var6 = arg1;
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.track;
        var2 = _closure1_slot5;
        var3 = var2.FEED_SESSION_COMPLETED;
        var2 = {};
        var8 = _closure1_slot3;
        var7 = var8.getLoadId;
        var7 = var7.bind(var8)();
        var2['load_id'] = var7;
        var7 = var8.getVersion;
        var7 = var7.bind(var8)();
        var2['version'] = var7;
        var7 = var6.sessionDurationMs;
        var2['session_duration_ms'] = var7;
        var7 = var6.sessionStartTimeMs;
        var2['session_start_time_ms'] = var7;
        var7 = var6.sessionEndTimeMs;
        var2['session_end_time_ms'] = var7;
        var7 = var6.impressionCount;
        var2['impression_count'] = var7;
        var7 = var6.uniqueImpressionCount;
        var2['unique_impression_count'] = var7;
        var7 = var6.icymiSessionId;
        var2['icymi_session_id'] = var7;
        var7 = var6.feedReloadCount;
        var2['feed_reload_count'] = var7;
        var7 = var6.feedVisibleItemsChangedCount;
        var2['feed_visible_items_changed_count'] = var7;
        var7 = var6.feedFetchCount;
        var2['feed_fetch_count'] = var7;
        var7 = var6.impressionItemTypes;
        var2['impression_item_types'] = var7;
        var7 = var6.latestDwellStartTimeMs;
        var2['latest_dwell_start_time_ms'] = var7;
        var7 = var6.previousIcyMiSessionCount;
        var2['previous_icymi_session_count'] = var7;
        var6 = var6.uxVariation;
        var2['ux_variation'] = var6;
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var2['trackFeedSessionCompleted'] = var7;
    var7 = function trackFeedItemDwell1s(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.FEED_ITEM_1S_DWELLED;
            var2 = {};
            var8 = _closure1_slot3;
            var7 = var8.getLoadId;
            var7 = var7.bind(var8)();
            var2['load_id'] = var7;
            var7 = var8.getVersion;
            var7 = var7.bind(var8)();
            var2['version'] = var7;
            var7 = var6.impressionId;
            var2['impression_id'] = var7;
            var7 = var6.itemId;
            var2['item_id'] = var7;
            var7 = var6.itemType;
            var2['item_type'] = var7;
            var7 = var6.dwellStartTimeMs;
            var2['dwell_start_time_ms'] = var7;
            var7 = var6.icymiSessionId;
            var2['icymi_session_id'] = var7;
            var7 = var6.triggerType;
            var2['trigger_type'] = var7;
            var7 = var6.itemOccurenceCountInSession;
            var2['item_occurence_count_in_session'] = var7;
            var7 = var6.itemFeedIndex;
            var2['item_feed_index'] = var7;
            var7 = var6.isInitiallyVisible;
            var2['is_initially_visible'] = var7;
            var7 = var6.itemScore;
            var2['item_score'] = var7;
            var8 = var6.itemChannelType;
            var7 = null;
            var9 = var7 != var8;
            if(!var9) { _fun0004_ip = 207; continue _fun0004 }
 204:
            var7 = var8;
 207:
            var2['item_channel_type'] = var7;
            var6 = var6.itemCardHeight;
            var2['item_card_height'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackFeedItemDwell1s'] = var7;
    var4 = function trackFeedItemDwelled(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var6 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot5;
            var3 = var2.FEED_ITEM_DWELLED;
            var2 = {};
            var8 = _closure1_slot3;
            var7 = var8.getLoadId;
            var7 = var7.bind(var8)();
            var2['load_id'] = var7;
            var7 = var8.getVersion;
            var7 = var7.bind(var8)();
            var2['version'] = var7;
            var7 = var6.impressionId;
            var2['impression_id'] = var7;
            var7 = var6.dwellTimeMs;
            var2['dwell_time_ms'] = var7;
            var7 = var6.itemId;
            var2['item_id'] = var7;
            var7 = var6.itemType;
            var2['item_type'] = var7;
            var7 = var6.dwellStartTimeMs;
            var2['dwell_start_time_ms'] = var7;
            var7 = var6.dwellEndTimeMs;
            var2['dwell_end_time_ms'] = var7;
            var7 = var6.icymiSessionId;
            var2['icymi_session_id'] = var7;
            var7 = var6.triggerType;
            var2['trigger_type'] = var7;
            var7 = var6.itemOccurenceCountInSession;
            var2['item_occurence_count_in_session'] = var7;
            var7 = var6.itemFeedIndex;
            var2['item_feed_index'] = var7;
            var7 = var6.isInitiallyVisible;
            var2['is_initially_visible'] = var7;
            var7 = var6.itemScore;
            var2['item_score'] = var7;
            var8 = var6.itemChannelType;
            var7 = null;
            var9 = var7 != var8;
            if(!var9) { _fun0005_ip = 231; continue _fun0005 }
 228:
            var7 = var8;
 231:
            var2['item_channel_type'] = var7;
            var7 = var6.itemCardHeight;
            var2['item_card_height'] = var7;
            var6 = var6.uxVariation;
            var2['ux_variation'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var2['trackFeedItemDwelled'] = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/ICYMIAnalytics.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ICYMIAnalytics'] = var2;
    return var1;
})();
// app/modules/forums/tracking/TrackingUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function getForumChannelSessionId(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getForumChannelSessionId;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot16 = var6;
    var1 = function getForumPostFirstMessage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot12;
            var2 = var3.getMessage;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var3 = var1.loaded;
            var2 = var1.firstMessage;
            var1 = null;
            if(!var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function getForumPostUniqueReactionCount(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = null;
            var3 = var1 == var2;
            var1 = 0;
            if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = var2.reactions;
            var1 = var2.length;
case 4:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function getForumPostReactionCount(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg1;
            var2 = var3.bind(var2)(var1);
            var1 = null;
            var3 = var1 == var2;
            var5 = 0;
            var1 = 0;
            if(var3) { _fun0003_ip = 6; continue _fun0003 }
case 7:
            var4 = var2.reactions;
            var3 = var4.reduce;
            var2 = function(arg1, arg2) {
                var1 = arg2;
                var2 = var1.count;
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var5);
case 6:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function getForumPostAppliedTagIds(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = _closure1_slot7;
            var4 = var5.getChannel;
            var2 = arg1;
            var4 = var4.bind(var5)(var2);
            var2 = null;
            if(!(var2 != var4)) { _fun0004_ip = 8; continue _fun0004 }
case 9:
            var6 = _closure1_slot7;
            var5 = var6.getChannel;
            var1 = var4.parent_id;
            var5 = var5.bind(var6)(var1);
            var6 = var2 == var5;
            var8 = undefined;
            if(var6) { _fun0004_ip = 10; continue _fun0004 }
case 11:
            var8 = var5.availableTags;
case 10:
            if(!(var2 != var5)) { _fun0004_ip = 12; continue _fun0004 }
case 13:
            if(!(var2 != var8)) { _fun0004_ip = 12; continue _fun0004 }
case 14:
            var5 = global;
            var7 = var5.Set;
            var6 = var8.map;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var6.bind(var8)(var5);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var10 = var6;
            var5 = new var10[var7](var9, var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var _closure2_slot0 = var5;
            var5 = var4.appliedTags;
            var4 = var2 == var5;
            var1 = undefined;
            if(var4) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var4 = var5.filter;
            var3 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var4.bind(var5)(var3);
case 15:
            if(!(var2 == var1)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var1 = new Array(0);
case 17:
            return var1;
case 12:
            var1 = new Array(0);
            return var1;
case 8:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var5 = function getForumPostAttachmentMimetypes(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = _closure1_slot17;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            var2 = null;
            if(!(var2 != var1)) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var3 = var1.attachments;
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.content_type;
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 'unknown';
                    if(!var3) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var1 = var2;
case 21:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            _fun0005_ip = 23; continue _fun0005;
case 19:
            var1 = new Array(0);
case 23:
            return var1;
        }
    };
    var _closure1_slot21 = var5;
    var4 = function collectForumAnalyticsMetadata(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var1 = arg1;
            var4 = var1.channelId;
            var5 = var1.sessionId;
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var4 = var1.bind(var2)(var4);
            var8 = null;
            var2 = var8 != var4;
            var1 = null;
            if(!var2) { _fun0007_ip = 24; continue _fun0007 }
case 25:
            var2 = var4.isForumLikeChannel;
            var2 = var2.bind(var4)();
            var1 = null;
            if(!var2) { _fun0007_ip = 24; continue _fun0007 }
case 26:
            var2 = {};
            var6 = var4.topic;
            var6 = var8 != var6;
            if(!var6) { _fun0007_ip = 27; continue _fun0007 }
case 28:
            var9 = var4.topic;
            var7 = var9.trim;
            var7 = var7.bind(var9)();
            var9 = var7.length;
            var7 = 0;
            var6 = var9 > var7;
case 27:
            var2['forum_channel_has_guidelines'] = var6;
            var9 = var4.defaultReactionEmoji;
            var10 = var8 == var9;
            var6 = undefined;
            var7 = undefined;
            if(var10) { _fun0007_ip = 29; continue _fun0007 }
case 30:
            var7 = var9.emojiId;
case 29:
            var2['forum_channel_default_emoji_reaction_id'] = var7;
            var9 = var4.defaultReactionEmoji;
            var10 = var8 == var9;
            var7 = undefined;
            if(var10) { _fun0007_ip = 31; continue _fun0007 }
case 32:
            var7 = var9.emojiName;
case 31:
            var2['forum_channel_default_emoji_reaction_name'] = var7;
            var11 = var4.availableTags;
            var9 = var8 == var11;
            var7 = undefined;
            if(var9) { _fun0007_ip = 33; continue _fun0007 }
case 34:
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var7 = var10.bind(var11)(var9);
case 33:
            if(!(var8 == var7)) { _fun0007_ip = 35; continue _fun0007 }
case 36:
            var7 = new Array(0);
case 35:
            var2['forum_channel_available_tag_ids'] = var7;
            var9 = var4.hasFlag;
            var7 = _closure1_slot14;
            var7 = var7.REQUIRE_TAG;
            var7 = var9.bind(var4)(var7);
            var2['forum_channel_tag_required'] = var7;
            var10 = _closure1_slot10;
            var9 = var10.can;
            var7 = _closure1_slot13;
            var7 = var7.SEND_MESSAGES;
            var7 = var9.bind(var10)(var7, var4);
            var2['forum_channel_can_create_post'] = var7;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var7 = 14;
            var11 = var9[var7];
            var12 = var10.bind(var6)(var11);
            var11 = var12.getFilterTagIdsAnalytics;
            var11 = var11.bind(var12)();
            var2['forum_channel_filter_tag_ids'] = var11;
            var9 = var9[var7];
            var11 = var10.bind(var6)(var9);
            var10 = var11.getSortOrderAnalytics;
            var9 = var4.id;
            var9 = var10.bind(var11)(var9);
            var2['forum_channel_sort_order'] = var9;
            if(!(var8 == var5)) { _fun0007_ip = 37; continue _fun0007 }
case 38:
            var9 = _closure1_slot16;
            var8 = var4.id;
            var5 = var9.bind(var6)(var8);
case 37:
            var2['forum_channel_session_id'] = var5;
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var7];
            var10 = var5.bind(var6)(var8);
            var9 = var10.getLayoutAnalytics;
            var8 = var4.id;
            var8 = var9.bind(var10)(var8);
            var2['forum_channel_layout'] = var8;
            var8 = var4.defaultSortOrder;
            var2['forum_channel_default_sort_order'] = var8;
            var3 = var3[var7];
            var6 = var5.bind(var6)(var3);
            var5 = var6.getTagSettingAnalytics;
            var3 = var4.id;
            var3 = var5.bind(var6)(var3);
            var2['forum_channel_tag_setting'] = var3;
            var3 = var4.defaultForumLayout;
            var2['forum_channel_default_layout'] = var3;
            var3 = var4.isModeratorReportChannel;
            var3 = var3.bind(var4)();
            var2['forum_channel_is_moderator_report_channel'] = var3;
            var1 = var2;
case 24:
            return var1;
        }
    };
    var _closure1_slot22 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var11 = var9[var7];
    var11 = var10.bind(var1)(var11);
    var _closure1_slot8 = var11;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.DraftType;
    var _closure1_slot9 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var9[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.Permissions;
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ChannelFlags;
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.ThreadSortOrderReadableForAnalytics;
    var _closure1_slot15 = var7;
    var7 = 17;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/forums/tracking/TrackingUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var3['getForumChannelSessionId'] = var6;
    var6 = function convertSortOrderToReadableString(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 13;
            var2 = var2[var6];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var2 = var2.ThreadSortOrder;
            var2 = var2.CREATION_DATE;
            if(!(var2 !== var5)) { _fun0008_ip = 39; continue _fun0008 }
case 40:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ThreadSortOrder;
            var2 = var2.LATEST_ACTIVITY;
            if(!(var2 !== var5)) { _fun0008_ip = 30; continue _fun0008 }
case 41:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unexpected sort order ';
            var7 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var8 = var3;
            var2 = new var8[var4](var7, var6);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 30:
            var2 = _closure1_slot15;
            var2 = var2.LATEST_ACTIVITY;
            return var2;
case 39:
            var1 = _closure1_slot15;
            var1 = var1.CREATION_DATE;
            return var1;
        }
    };
    var3['convertSortOrderToReadableString'] = var6;
    var6 = function getForumPostDraftNumAttachments(arg1) {
        var4 = _closure1_slot11;
        var3 = var4.getUploads;
        var1 = _closure1_slot9;
        var2 = var1.FirstThreadMessage;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        var1 = var1.length;
        return var1;
    };
    var3['getForumPostDraftNumAttachments'] = var6;
    var6 = function getForumPostDraftAppliedTagIds(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var6 = arg1;
            var4 = _closure1_slot7;
            var2 = var4.getChannel;
            var4 = var2.bind(var4)(var6);
            var2 = null;
            if(!(var2 != var4)) { _fun0009_ip = 42; continue _fun0009 }
case 9:
            var7 = _closure1_slot7;
            var5 = var7.getChannel;
            var4 = var4.parent_id;
            var5 = var5.bind(var7)(var4);
            var8 = var2 == var5;
            var7 = undefined;
            if(var8) { _fun0009_ip = 10; continue _fun0009 }
case 11:
            var7 = var5.availableTags;
case 10:
            if(!(var2 != var5)) { _fun0009_ip = 43; continue _fun0009 }
case 44:
            if(!(var2 != var7)) { _fun0009_ip = 43; continue _fun0009 }
case 45:
            var5 = _closure1_slot8;
            var3 = var5.getThreadSettings;
            var3 = var3.bind(var5)(var6);
            var5 = var2 == var3;
            var4 = undefined;
            if(var5) { _fun0009_ip = 46; continue _fun0009 }
case 47:
            var4 = var3.appliedTags;
case 46:
            if(!(var2 == var4)) { _fun0009_ip = 48; continue _fun0009 }
case 49:
            var2 = global;
            var2 = var2.Set;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var10 = var3;
            var2 = new var10[var2](var9);
            var4 = var2 instanceof Object ? var2 : var3;
case 48:
            var2 = global;
            var6 = var2.Set;
            var5 = var7.map;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var9 = var5.bind(var7)(var3);
            var5 = var6.prototype;
            var5 = Object.create(var5, {constructor: {value: var6}});
            var10 = var5;
            var3 = new var10[var6](var9, var8);
            var3 = var3 instanceof Object ? var3 : var5;
            var _closure2_slot0 = var3;
            var3 = var2.Array;
            var2 = var3.from;
            var3 = var2.bind(var3)(var4);
            var2 = var3.filter;
            var1 = function(arg1) {
                var3 = _closure2_slot0;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
case 43:
            var1 = new Array(0);
            return var1;
case 42:
            var1 = new Array(0);
            return var1;
        }
    };
    var3['getForumPostDraftAppliedTagIds'] = var6;
    var6 = function getNumActiveThreads(arg1, arg2) {
        var1 = global;
        var3 = var1.Object;
        var2 = var3.keys;
        var6 = _closure1_slot3;
        var5 = var6.getThreadsForParent;
        var4 = arg1;
        var1 = arg2;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2.bind(var3)(var1);
        var1 = var1.length;
        return var1;
    };
    var3['getNumActiveThreads'] = var6;
    var3['getForumPostAttachmentMimetypes'] = var5;
    var3['collectForumAnalyticsMetadata'] = var4;
    var2 = function collectForumPostAnalyticsMetadata(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channelId;
            var6 = var1.sessionId;
            var2 = _closure1_slot7;
            var1 = var2.getChannel;
            var4 = var1.bind(var2)(var12);
            var1 = null;
            if(!(var1 != var4)) { _fun0010_ip = 50; continue _fun0010 }
case 51:
            var2 = var4.isForumPost;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0010_ip = 50; continue _fun0010 }
case 52:
            var7 = _closure1_slot7;
            var3 = var7.getChannel;
            var2 = var4.parent_id;
            var9 = var3.bind(var7)(var2);
            var3 = var1 != var9;
            var2 = null;
            if(!var3) { _fun0010_ip = 53; continue _fun0010 }
case 54:
            var3 = var9.isForumLikeChannel;
            var3 = var3.bind(var9)();
            var2 = null;
            if(!var3) { _fun0010_ip = 53; continue _fun0010 }
case 55:
            var3 = {};
            var8 = _closure1_slot22;
            var7 = {};
            var9 = var9.id;
            var7['channelId'] = var9;
            var7['sessionId'] = var6;
            var6 = undefined;
            var13 = var8.bind(var6)(var7);
            var14 = var3;
            var7 = copyDataProperties(var14, var13);
            var8 = _closure1_slot5;
            var7 = var8.getMemberCount;
            var8 = var7.bind(var8)(var12);
            var7 = 'thread_approximate_member_count';
            var3[var7] = var8;
            var8 = _closure1_slot6;
            var7 = var8.getCount;
            var8 = var7.bind(var8)(var12);
            var7 = 'thread_approximate_message_count';
            var3[var7] = var8;
            var7 = var4.threadMetadata;
            var9 = var1 == var7;
            var8 = undefined;
            if(var9) { _fun0010_ip = 56; continue _fun0010 }
case 57:
            var8 = var7.archived;
case 56:
            var7 = true;
            var8 = var7 === var8;
            var7 = 'thread_archived';
            var3[var7] = var8;
            var8 = var4.threadMetadata;
            var9 = var1 == var8;
            var7 = undefined;
            if(var9) { _fun0010_ip = 58; continue _fun0010 }
case 59:
            var7 = var8.locked;
case 58:
            var8 = var1 != var7;
            if(!var8) { _fun0010_ip = 60; continue _fun0010 }
case 61:
            var8 = var7;
case 60:
            var7 = 'thread_locked';
            var3[var7] = var8;
            var8 = var4.threadMetadata;
            var9 = var1 == var8;
            var7 = undefined;
            if(var9) { _fun0010_ip = 62; continue _fun0010 }
case 63:
            var7 = var8.autoArchiveDuration;
case 62:
            var9 = var1 != var7;
            var8 = 0;
            if(!var9) { _fun0010_ip = 64; continue _fun0010 }
case 65:
            var8 = var7;
case 64:
            var7 = 'thread_auto_archive_duration_minutes';
            var3[var7] = var8;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var9 = 15;
            var10 = var7[var9];
            var11 = var8.bind(var6)(var10);
            var10 = var11.extractTimestamp;
            var11 = var10.bind(var11)(var12);
            var10 = 'thread_approximate_creation_date';
            var3[var10] = var11;
            var11 = var4.id;
            var10 = 'forum_post_id';
            var3[var10] = var11;
            var9 = var7[var9];
            var11 = var8.bind(var6)(var9);
            var10 = var11.castChannelIdAsMessageId;
            var9 = var4.id;
            var10 = var10.bind(var11)(var9);
            var9 = 'forum_post_first_message_id';
            var3[var9] = var10;
            var10 = _closure1_slot19;
            var9 = var4.id;
            var10 = var10.bind(var6)(var9);
            var9 = 'forum_post_num_reactions';
            var3[var9] = var10;
            var10 = _closure1_slot18;
            var9 = var4.id;
            var10 = var10.bind(var6)(var9);
            var9 = 'forum_post_num_unique_reactions';
            var3[var9] = var10;
            var10 = _closure1_slot20;
            var9 = var4.id;
            var10 = var10.bind(var6)(var9);
            var9 = 'forum_post_applied_tag_ids';
            var3[var9] = var10;
            var10 = var4.hasFlag;
            var9 = _closure1_slot14;
            var9 = var9.PINNED;
            var10 = var10.bind(var4)(var9);
            var9 = 'forum_post_is_pinned';
            var3[var9] = var10;
            var9 = 16;
            var7 = var7[var9];
            var10 = var8.bind(var6)(var7);
            var8 = var10.getReadStateSnapshotAnalytics;
            var7 = var4.id;
            var7 = var8.bind(var10)(var7);
            var10 = var1 == var7;
            var8 = undefined;
            if(var10) { _fun0010_ip = 66; continue _fun0010 }
case 67:
            var8 = var7.isNew;
case 66:
            var7 = 'forum_post_is_new';
            var3[var7] = var8;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var9];
            var9 = var8.bind(var6)(var7);
            var8 = var9.getReadStateSnapshotAnalytics;
            var7 = var4.id;
            var7 = var8.bind(var9)(var7);
            var9 = var1 == var7;
            var8 = undefined;
            if(var9) { _fun0010_ip = 68; continue _fun0010 }
case 69:
            var8 = var7.hasUnreads;
case 68:
            var7 = 'forum_post_is_unread';
            var3[var7] = var8;
            var9 = _closure1_slot4;
            var8 = var9.hasJoined;
            var7 = var4.id;
            var8 = var8.bind(var9)(var7);
            var7 = 'forum_post_is_following';
            var3[var7] = var8;
            var5 = _closure1_slot21;
            var4 = var4.id;
            var5 = var5.bind(var6)(var4);
            var4 = 'forum_post_attachment_mimetypes';
            var3[var4] = var5;
            var2 = var3;
case 53:
            return var2;
case 50:
            return var1;
        }
    };
    var3['collectForumPostAnalyticsMetadata'] = var2;
    return var1;
})();
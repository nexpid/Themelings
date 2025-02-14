// app/modules/forums/tracking/TrackingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscar = function(argFoo) { // Original name: getForumChannelSessionId
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.getForumChannelSessionId;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot16 = oscar;
    entity = function(argFoo) { // Original name: getForumPostFirstMessage
        _fun68572: for(var _fun68572_ip = 0; ; ) switch(_fun68572_ip) {
 0:
            zulu = _closure1_slot12;
            mike = zulu.getMessage;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            zulu = entity.loaded;
            mike = entity.firstMessage;
            entity = null;
            if(!zulu) { _fun68572_ip = 41; continue _fun68572 }
 38:
            entity = mike;
 41:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getForumPostUniqueReactionCount
        _fun68573: for(var _fun68573_ip = 0; ; ) switch(_fun68573_ip) {
 0:
            zulu = _closure1_slot17;
            mike = undefined;
            entity = argFoo;
            mike = zulu.bind(mike)(entity);
            entity = null;
            zulu = entity == mike;
            entity = 0;
            if(zulu) { _fun68573_ip = 39; continue _fun68573 }
 28:
            mike = mike.reactions;
            entity = mike.length;
 39:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getForumPostReactionCount
        _fun68574: for(var _fun68574_ip = 0; ; ) switch(_fun68574_ip) {
 0:
            zulu = _closure1_slot17;
            mike = undefined;
            entity = argFoo;
            mike = zulu.bind(mike)(entity);
            entity = null;
            zulu = entity == mike;
            report = 0;
            entity = 0;
            if(zulu) { _fun68574_ip = 57; continue _fun68574 }
 30:
            tango = mike.reactions;
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                entity = argBar;
                mike = entity.count;
                entity = argFoo;
                entity = entity + mike;
                return entity;
            };
            entity = zulu.bind(tango)(mike, report);
 57:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: getForumPostAppliedTagIds
        _fun68576: for(var _fun68576_ip = 0; ; ) switch(_fun68576_ip) {
 0:
            report = _closure1_slot7;
            tango = report.getChannel;
            mike = argFoo;
            tango = tango.bind(report)(mike);
            mike = null;
            if(!(mike != tango)) { _fun68576_ip = 171; continue _fun68576 }
 31:
            oscar = _closure1_slot7;
            report = oscar.getChannel;
            entity = tango.parent_id;
            report = report.bind(oscar)(entity);
            oscar = mike == report;
            options = undefined;
            if(oscar) { _fun68576_ip = 66; continue _fun68576 }
 60:
            options = report.availableTags;
 66:
            if(!(mike != report)) { _fun68576_ip = 165; continue _fun68576 }
 70:
            if(!(mike != options)) { _fun68576_ip = 165; continue _fun68576 }
 74:
            report = global;
            golf = report.Set;
            oscar = options.map;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            verify = oscar.bind(options)(report);
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            offset = oscar;
            report = new offset[golf](verify, options);
            report = report instanceof Object ? report : oscar;
            var _closure2_slot0 = report;
            report = tango.appliedTags;
            tango = mike == report;
            entity = undefined;
            if(tango) { _fun68576_ip = 155; continue _fun68576 }
 138:
            tango = report.filter;
            zulu = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = tango.bind(report)(zulu);
 155:
            if(!(mike == entity)) { _fun68576_ip = 163; continue _fun68576 }
 159:
            entity = new Array(0);
 163:
            return entity;
 165:
            entity = new Array(0);
            return entity;
 171:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    report = function(argFoo) { // Original name: getForumPostAttachmentMimetypes
        _fun68579: for(var _fun68579_ip = 0; ; ) switch(_fun68579_ip) {
 0:
            zulu = _closure1_slot17;
            mike = undefined;
            entity = argFoo;
            entity = zulu.bind(mike)(entity);
            mike = null;
            if(!(mike != entity)) { _fun68579_ip = 50; continue _fun68579 }
 23:
            zulu = entity.attachments;
            mike = zulu.map;
            entity = function(argFoo) {
                _fun68580: for(var _fun68580_ip = 0; ; ) switch(_fun68580_ip) {
 0:
                    entity = argFoo;
                    mike = entity.content_type;
                    entity = null;
                    zulu = entity != mike;
                    entity = 'unknown';
                    if(!zulu) { _fun68580_ip = 25; continue _fun68580 }
 22:
                    entity = mike;
 25:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            _fun68579_ip = 54; continue _fun68579;
 50:
            entity = new Array(0);
 54:
            return entity;
        }
    };
    var _closure1_slot21 = report;
    tango = function(argFoo) { // Original name: collectForumAnalyticsMetadata
        _fun68581: for(var _fun68581_ip = 0; ; ) switch(_fun68581_ip) {
 0:
            entity = argFoo;
            zulu = entity.channelId;
            report = entity.sessionId;
            mike = _closure1_slot7;
            entity = mike.getChannel;
            zulu = entity.bind(mike)(zulu);
            options = null;
            mike = options != zulu;
            entity = null;
            if(!mike) { _fun68581_ip = 443; continue _fun68581 }
 45:
            mike = zulu.isForumLikeChannel;
            mike = mike.bind(zulu)();
            entity = null;
            if(!mike) { _fun68581_ip = 443; continue _fun68581 }
 63:
            mike = {};
            oscar = zulu.topic;
            oscar = options != oscar;
            if(!oscar) { _fun68581_ip = 105; continue _fun68581 }
 78:
            verify = zulu.topic;
            golf = verify.trim;
            golf = golf.bind(verify)();
            verify = golf.length;
            golf = 0;
            oscar = verify > golf;
 105:
            mike['forum_channel_has_guidelines'] = oscar;
            verify = zulu.defaultReactionEmoji;
            offset = options == verify;
            oscar = undefined;
            golf = undefined;
            if(offset) { _fun68581_ip = 135; continue _fun68581 }
 129:
            golf = verify.emojiId;
 135:
            mike['forum_channel_default_emoji_reaction_id'] = golf;
            verify = zulu.defaultReactionEmoji;
            offset = options == verify;
            golf = undefined;
            if(offset) { _fun68581_ip = 163; continue _fun68581 }
 157:
            golf = verify.emojiName;
 163:
            mike['forum_channel_default_emoji_reaction_name'] = golf;
            yankee = zulu.availableTags;
            verify = options == yankee;
            golf = undefined;
            if(verify) { _fun68581_ip = 204; continue _fun68581 }
 185:
            offset = yankee.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            golf = offset.bind(yankee)(verify);
 204:
            if(!(options == golf)) { _fun68581_ip = 212; continue _fun68581 }
 208:
            golf = new Array(0);
 212:
            mike['forum_channel_available_tag_ids'] = golf;
            verify = zulu.hasFlag;
            golf = _closure1_slot14;
            golf = golf.REQUIRE_TAG;
            golf = verify.bind(zulu)(golf);
            mike['forum_channel_tag_required'] = golf;
            offset = _closure1_slot10;
            verify = offset.can;
            golf = _closure1_slot13;
            golf = golf.SEND_MESSAGES;
            golf = verify.bind(offset)(golf, zulu);
            mike['forum_channel_can_create_post'] = golf;
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            golf = 14;
            yankee = verify[golf];
            romeo = offset.bind(oscar)(yankee);
            yankee = romeo.getFilterTagIdsAnalytics;
            yankee = yankee.bind(romeo)();
            mike['forum_channel_filter_tag_ids'] = yankee;
            verify = verify[golf];
            yankee = offset.bind(oscar)(verify);
            offset = yankee.getSortOrderAnalytics;
            verify = zulu.id;
            verify = offset.bind(yankee)(verify);
            mike['forum_channel_sort_order'] = verify;
            if(!(options == report)) { _fun68581_ip = 367; continue _fun68581 }
 353:
            verify = _closure1_slot16;
            options = zulu.id;
            report = verify.bind(oscar)(options);
 367:
            mike['forum_channel_session_id'] = report;
            report = _closure1_slot1;
            tango = _closure1_slot2;
            tango = tango[golf];
            oscar = report.bind(oscar)(tango);
            report = oscar.getLayoutAnalytics;
            tango = zulu.id;
            tango = report.bind(oscar)(tango);
            mike['forum_channel_layout'] = tango;
            tango = zulu.defaultSortOrder;
            mike['forum_channel_default_sort_order'] = tango;
            zulu = zulu.defaultForumLayout;
            mike['forum_channel_default_layout'] = zulu;
            entity = mike;
 443:
            return entity;
        }
    };
    var _closure1_slot22 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, golf);
    entity = 0;
    golf = verify[entity];
    entity = undefined;
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot4 = golf;
    golf = 2;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot5 = golf;
    golf = 3;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 4;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 5;
    yankee = verify[golf];
    yankee = offset.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.DraftType;
    var _closure1_slot9 = golf;
    golf = 6;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot10 = golf;
    golf = 7;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot11 = golf;
    golf = 8;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot12 = golf;
    golf = 9;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.Permissions;
    var _closure1_slot13 = golf;
    golf = 10;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.ChannelFlags;
    var _closure1_slot14 = golf;
    golf = 11;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.ThreadSortOrderReadableForAnalytics;
    var _closure1_slot15 = golf;
    golf = 17;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/forums/tracking/TrackingUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['getForumChannelSessionId'] = oscar;
    oscar = function(argFoo) { // Original name: convertSortOrderToReadableString
        _fun68583: for(var _fun68583_ip = 0; ; ) switch(_fun68583_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            oscar = 13;
            mike = mike[oscar];
            tango = undefined;
            mike = zulu.bind(tango)(mike);
            mike = mike.ThreadSortOrder;
            mike = mike.CREATION_DATE;
            if(!(mike !== report)) { _fun68583_ip = 141; continue _fun68583 }
 44:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            mike = mike[oscar];
            mike = zulu.bind(tango)(mike);
            mike = mike.ThreadSortOrder;
            mike = mike.LATEST_ACTIVITY;
            if(!(mike !== report)) { _fun68583_ip = 129; continue _fun68583 }
 77:
            mike = global;
            tango = mike.Error;
            mike = mike.HermesInternal;
            zulu = mike.concat;
            mike = 'Unexpected sort order ';
            golf = zulu.bind(mike)(report);
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            options = zulu;
            mike = new options[tango](golf, oscar);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 129:
            mike = _closure1_slot15;
            mike = mike.LATEST_ACTIVITY;
            return mike;
 141:
            entity = _closure1_slot15;
            entity = entity.CREATION_DATE;
            return entity;
        }
    };
    zulu['convertSortOrderToReadableString'] = oscar;
    oscar = function(argFoo) { // Original name: getForumPostDraftNumAttachments
        tango = _closure1_slot11;
        zulu = tango.getUploads;
        entity = _closure1_slot9;
        mike = entity.FirstThreadMessage;
        entity = argFoo;
        entity = zulu.bind(tango)(entity, mike);
        entity = entity.length;
        return entity;
    };
    zulu['getForumPostDraftNumAttachments'] = oscar;
    oscar = function(argFoo) { // Original name: getForumPostDraftAppliedTagIds
        _fun68585: for(var _fun68585_ip = 0; ; ) switch(_fun68585_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot7;
            mike = tango.getChannel;
            tango = mike.bind(tango)(oscar);
            mike = null;
            if(!(mike != tango)) { _fun68585_ip = 232; continue _fun68585 }
 31:
            golf = _closure1_slot7;
            report = golf.getChannel;
            tango = tango.parent_id;
            report = report.bind(golf)(tango);
            options = mike == report;
            golf = undefined;
            if(options) { _fun68585_ip = 66; continue _fun68585 }
 60:
            golf = report.availableTags;
 66:
            if(!(mike != report)) { _fun68585_ip = 226; continue _fun68585 }
 73:
            if(!(mike != golf)) { _fun68585_ip = 226; continue _fun68585 }
 80:
            report = _closure1_slot8;
            zulu = report.getThreadSettings;
            zulu = zulu.bind(report)(oscar);
            report = mike == zulu;
            tango = undefined;
            if(report) { _fun68585_ip = 110; continue _fun68585 }
 104:
            tango = zulu.appliedTags;
 110:
            if(!(mike == tango)) { _fun68585_ip = 142; continue _fun68585 }
 114:
            mike = global;
            mike = mike.Set;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            offset = zulu;
            mike = new offset[mike](verify);
            tango = mike instanceof Object ? mike : zulu;
 142:
            mike = global;
            oscar = mike.Set;
            report = golf.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            verify = report.bind(golf)(zulu);
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            offset = report;
            zulu = new offset[oscar](verify, options);
            zulu = zulu instanceof Object ? zulu : report;
            var _closure2_slot0 = zulu;
            zulu = mike.Array;
            mike = zulu.from;
            zulu = mike.bind(zulu)(tango);
            mike = zulu.filter;
            entity = function(argFoo) {
                zulu = _closure2_slot0;
                mike = zulu.has;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
 226:
            entity = new Array(0);
            return entity;
 232:
            entity = new Array(0);
            return entity;
        }
    };
    zulu['getForumPostDraftAppliedTagIds'] = oscar;
    oscar = function(argFoo, argBar) { // Original name: getNumActiveThreads
        entity = global;
        zulu = entity.Object;
        mike = zulu.keys;
        oscar = _closure1_slot3;
        report = oscar.getThreadsForParent;
        tango = argFoo;
        entity = argBar;
        entity = report.bind(oscar)(tango, entity);
        entity = mike.bind(zulu)(entity);
        entity = entity.length;
        return entity;
    };
    zulu['getNumActiveThreads'] = oscar;
    zulu['getForumPostAttachmentMimetypes'] = report;
    zulu['collectForumAnalyticsMetadata'] = tango;
    mike = function(argFoo) { // Original name: collectForumPostAnalyticsMetadata
        _fun68589: for(var _fun68589_ip = 0; ; ) switch(_fun68589_ip) {
 0:
            entity = argFoo;
            romeo = entity.channelId;
            oscar = entity.sessionId;
            mike = _closure1_slot7;
            entity = mike.getChannel;
            tango = entity.bind(mike)(romeo);
            entity = null;
            if(!(entity != tango)) { _fun68589_ip = 693; continue _fun68589 }
 40:
            mike = tango.isForumPost;
            mike = mike.bind(tango)();
            if(!mike) { _fun68589_ip = 693; continue _fun68589 }
 56:
            golf = _closure1_slot7;
            zulu = golf.getChannel;
            mike = tango.parent_id;
            verify = zulu.bind(golf)(mike);
            zulu = entity != verify;
            mike = null;
            if(!zulu) { _fun68589_ip = 691; continue _fun68589 }
 88:
            zulu = verify.isForumLikeChannel;
            zulu = zulu.bind(verify)();
            mike = null;
            if(!zulu) { _fun68589_ip = 691; continue _fun68589 }
 106:
            zulu = {};
            options = _closure1_slot22;
            golf = {};
            verify = verify.id;
            golf['channelId'] = verify;
            golf['sessionId'] = oscar;
            oscar = undefined;
            foxtrot = options.bind(oscar)(golf);
            backup = zulu;
            golf = copyDataProperties(backup, foxtrot);
            options = _closure1_slot5;
            golf = options.getMemberCount;
            options = golf.bind(options)(romeo);
            golf = 'thread_approximate_member_count';
            zulu[golf] = options;
            options = _closure1_slot6;
            golf = options.getCount;
            options = golf.bind(options)(romeo);
            golf = 'thread_approximate_message_count';
            zulu[golf] = options;
            golf = tango.threadMetadata;
            verify = entity == golf;
            options = undefined;
            if(verify) { _fun68589_ip = 215; continue _fun68589 }
 209:
            options = golf.archived;
 215:
            golf = true;
            options = golf === options;
            golf = 'thread_archived';
            zulu[golf] = options;
            options = tango.threadMetadata;
            verify = entity == options;
            golf = undefined;
            if(verify) { _fun68589_ip = 253; continue _fun68589 }
 247:
            golf = options.locked;
 253:
            options = entity != golf;
            if(!options) { _fun68589_ip = 263; continue _fun68589 }
 260:
            options = golf;
 263:
            golf = 'thread_locked';
            zulu[golf] = options;
            options = tango.threadMetadata;
            verify = entity == options;
            golf = undefined;
            if(verify) { _fun68589_ip = 295; continue _fun68589 }
 289:
            golf = options.autoArchiveDuration;
 295:
            verify = entity != golf;
            options = 0;
            if(!verify) { _fun68589_ip = 307; continue _fun68589 }
 304:
            options = golf;
 307:
            golf = 'thread_auto_archive_duration_minutes';
            zulu[golf] = options;
            options = _closure1_slot1;
            golf = _closure1_slot2;
            verify = 15;
            offset = golf[verify];
            yankee = options.bind(oscar)(offset);
            offset = yankee.extractTimestamp;
            yankee = offset.bind(yankee)(romeo);
            offset = 'thread_approximate_creation_date';
            zulu[offset] = yankee;
            yankee = tango.id;
            offset = 'forum_post_id';
            zulu[offset] = yankee;
            verify = golf[verify];
            yankee = options.bind(oscar)(verify);
            offset = yankee.castChannelIdAsMessageId;
            verify = tango.id;
            offset = offset.bind(yankee)(verify);
            verify = 'forum_post_first_message_id';
            zulu[verify] = offset;
            offset = _closure1_slot19;
            verify = tango.id;
            offset = offset.bind(oscar)(verify);
            verify = 'forum_post_num_reactions';
            zulu[verify] = offset;
            offset = _closure1_slot18;
            verify = tango.id;
            offset = offset.bind(oscar)(verify);
            verify = 'forum_post_num_unique_reactions';
            zulu[verify] = offset;
            offset = _closure1_slot20;
            verify = tango.id;
            offset = offset.bind(oscar)(verify);
            verify = 'forum_post_applied_tag_ids';
            zulu[verify] = offset;
            offset = tango.hasFlag;
            verify = _closure1_slot14;
            verify = verify.PINNED;
            offset = offset.bind(tango)(verify);
            verify = 'forum_post_is_pinned';
            zulu[verify] = offset;
            verify = 16;
            golf = golf[verify];
            offset = options.bind(oscar)(golf);
            options = offset.getReadStateSnapshotAnalytics;
            golf = tango.id;
            golf = options.bind(offset)(golf);
            offset = entity == golf;
            options = undefined;
            if(offset) { _fun68589_ip = 562; continue _fun68589 }
 556:
            options = golf.isNew;
 562:
            golf = 'forum_post_is_new';
            zulu[golf] = options;
            options = _closure1_slot1;
            golf = _closure1_slot2;
            golf = golf[verify];
            verify = options.bind(oscar)(golf);
            options = verify.getReadStateSnapshotAnalytics;
            golf = tango.id;
            golf = options.bind(verify)(golf);
            verify = entity == golf;
            options = undefined;
            if(verify) { _fun68589_ip = 621; continue _fun68589 }
 615:
            options = golf.hasUnreads;
 621:
            golf = 'forum_post_is_unread';
            zulu[golf] = options;
            verify = _closure1_slot4;
            options = verify.hasJoined;
            golf = tango.id;
            options = options.bind(verify)(golf);
            golf = 'forum_post_is_following';
            zulu[golf] = options;
            report = _closure1_slot21;
            tango = tango.id;
            report = report.bind(oscar)(tango);
            tango = 'forum_post_attachment_mimetypes';
            zulu[tango] = report;
            mike = zulu;
 691:
            return mike;
 693:
            return entity;
        }
    };
    zulu['collectForumPostAnalyticsMetadata'] = mike;
    return entity;
})();
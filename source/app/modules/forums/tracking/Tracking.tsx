// app/modules/forums/tracking/Tracking.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticEvents;
    var _closure1_slot8 = golf;
    tango = tango.AnalyticsSections;
    var _closure1_slot9 = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/forums/tracking/Tracking.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: trackForumChannelSeenBatch
        entity = argFoo;
        offset = entity.guildId;
        verify = entity.channelId;
        foxtrot = entity.sessionId;
        options = entity.postIds;
        golf = entity.additionalTimes;
        zulu = _closure1_slot1;
        romeo = _closure1_slot2;
        entity = 5;
        mike = romeo[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_SEEN_BATCH;
        mike = {};
        yankee = _closure1_slot0;
        oscar = 6;
        oscar = romeo[oscar];
        romeo = yankee.bind(entity)(oscar);
        yankee = romeo.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = verify;
        oscar['sessionId'] = foxtrot;
        kilo = yankee.bind(romeo)(oscar);
        sizing = mike;
        oscar = copyDataProperties(sizing, kilo);
        oscar = 'guild_id';
        mike[oscar] = offset;
        oscar = 'channel_id';
        mike[oscar] = verify;
        oscar = 'post_ids';
        mike[oscar] = options;
        oscar = 'additional_seen_time_millis';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumChannelSeenBatch'] = tango;
    tango = function(argFoo) { // Original name: trackForumSearched
        entity = argFoo;
        verify = entity.guildId;
        options = entity.channelId;
        golf = entity.numSearchResults;
        zulu = _closure1_slot1;
        yankee = _closure1_slot2;
        entity = 5;
        mike = yankee[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_SEARCHED;
        mike = {};
        offset = _closure1_slot0;
        oscar = 6;
        oscar = yankee[oscar];
        yankee = offset.bind(entity)(oscar);
        offset = yankee.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = options;
        foxtrot = offset.bind(yankee)(oscar);
        backup = mike;
        oscar = copyDataProperties(backup, foxtrot);
        oscar = 'guild_id';
        mike[oscar] = verify;
        oscar = 'channel_id';
        mike[oscar] = options;
        oscar = 'num_search_results';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumSearched'] = tango;
    tango = function(argFoo) { // Original name: trackForumSearchCleared
        entity = argFoo;
        options = entity.guildId;
        golf = entity.channelId;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 5;
        mike = offset[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_SEARCH_CLEARED;
        mike = {};
        verify = _closure1_slot0;
        oscar = 6;
        oscar = offset[oscar];
        offset = verify.bind(entity)(oscar);
        verify = offset.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = golf;
        romeo = verify.bind(offset)(oscar);
        foxtrot = mike;
        oscar = copyDataProperties(foxtrot, romeo);
        oscar = 'guild_id';
        mike[oscar] = options;
        oscar = 'channel_id';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumSearchCleared'] = tango;
    tango = function(argFoo) { // Original name: trackForumTagFilterClicked
        entity = argFoo;
        romeo = entity.guildId;
        yankee = entity.channelId;
        offset = entity.tagId;
        verify = entity.filterTagIds;
        options = entity.added;
        golf = entity.location;
        zulu = _closure1_slot1;
        backup = _closure1_slot2;
        entity = 5;
        mike = backup[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_TAG_FILTER_CLICKED;
        mike = {};
        foxtrot = _closure1_slot0;
        oscar = 6;
        oscar = backup[oscar];
        backup = foxtrot.bind(entity)(oscar);
        foxtrot = backup.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = yankee;
        sizing = foxtrot.bind(backup)(oscar);
        output = mike;
        oscar = copyDataProperties(output, sizing);
        oscar = 'guild_id';
        mike[oscar] = romeo;
        oscar = 'channel_id';
        mike[oscar] = yankee;
        oscar = 'tag_id';
        mike[oscar] = offset;
        oscar = 'filter_tag_ids';
        mike[oscar] = verify;
        oscar = 'added';
        mike[oscar] = options;
        oscar = 'location';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumTagFilterClicked'] = tango;
    tango = function(argFoo) { // Original name: trackForumCreateNewPostClick
        entity = argFoo;
        options = entity.guildId;
        golf = entity.channelId;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 5;
        mike = offset[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_CREATE_NEW_POST_CLICKED;
        mike = {};
        verify = _closure1_slot0;
        oscar = 6;
        oscar = offset[oscar];
        offset = verify.bind(entity)(oscar);
        verify = offset.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = golf;
        romeo = verify.bind(offset)(oscar);
        foxtrot = mike;
        oscar = copyDataProperties(foxtrot, romeo);
        oscar = 'guild_id';
        mike[oscar] = options;
        oscar = 'channel_id';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumCreateNewPostClick'] = tango;
    tango = function(argFoo) { // Original name: trackForumCreateNewPostKeybindUsed
        entity = argFoo;
        options = entity.guildId;
        golf = entity.channelId;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 5;
        mike = offset[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_CREATE_NEW_POST_KEYBIND_USED;
        mike = {};
        verify = _closure1_slot0;
        oscar = 6;
        oscar = offset[oscar];
        offset = verify.bind(entity)(oscar);
        verify = offset.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = golf;
        romeo = verify.bind(offset)(oscar);
        foxtrot = mike;
        oscar = copyDataProperties(foxtrot, romeo);
        oscar = 'guild_id';
        mike[oscar] = options;
        oscar = 'channel_id';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumCreateNewPostKeybindUsed'] = tango;
    tango = function(argFoo) { // Original name: maybeTrackForumNewPostDraftCreated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            yankee = entity.guildId;
            golf = entity.channelId;
            mike = _closure1_slot3;
            entity = mike.getChannel;
            entity = entity.bind(mike)(golf);
            verify = null;
            if(!(verify != entity)) { _fun00002_ip = 462; continue _fun00001 }
 39:
            zulu = _closure1_slot4;
            mike = zulu.getThreadSettings;
            tango = mike.bind(zulu)(golf);
            mike = entity.template;
            entity = verify == mike;
            options = undefined;
            zulu = undefined;
            if(entity) { _fun00002_ip = 81; continue _fun00001 }
 71:
            entity = mike.trim;
            zulu = entity.bind(mike)();
 81:
            oscar = _closure1_slot4;
            mike = oscar.getDraft;
            entity = _closure1_slot5;
            entity = entity.FirstThreadMessage;
            offset = mike.bind(oscar)(golf, entity);
            entity = verify == offset;
            if(entity) { _fun00002_ip = 125; continue _fun00001 }
 114:
            oscar = offset.length;
            mike = 0;
            entity = mike === oscar;
 125:
            if(entity) { _fun00002_ip = 151; continue _fun00001 }
 128:
            oscar = verify == offset;
            mike = undefined;
            if(oscar) { _fun00002_ip = 147; continue _fun00001 }
 137:
            oscar = offset.trim;
            mike = oscar.bind(offset)();
 147:
            entity = mike === zulu;
 151:
            zulu = verify == tango;
            mike = undefined;
            if(zulu) { _fun00002_ip = 166; continue _fun00001 }
 160:
            mike = tango.appliedTags;
 166:
            zulu = verify == mike;
            if(zulu) { _fun00002_ip = 208; continue _fun00001 }
 173:
            mike = verify == tango;
            oscar = undefined;
            if(mike) { _fun00002_ip = 202; continue _fun00001 }
 182:
            mike = tango.appliedTags;
            offset = verify == mike;
            oscar = undefined;
            if(offset) { _fun00002_ip = 202; continue _fun00001 }
 197:
            oscar = mike.size;
 202:
            mike = 0;
            zulu = mike === oscar;
 208:
            oscar = verify == tango;
            mike = undefined;
            if(oscar) { _fun00002_ip = 222; continue _fun00001 }
 217:
            mike = tango.name;
 222:
            mike = verify == mike;
            if(mike) { _fun00002_ip = 282; continue _fun00001 }
 229:
            offset = verify == tango;
            oscar = undefined;
            if(offset) { _fun00002_ip = 276; continue _fun00001 }
 238:
            offset = tango.name;
            tango = verify == offset;
            oscar = undefined;
            if(tango) { _fun00002_ip = 276; continue _fun00001 }
 252:
            tango = offset.trim;
            tango = tango.bind(offset)();
            verify = verify == tango;
            oscar = undefined;
            if(verify) { _fun00002_ip = 276; continue _fun00001 }
 271:
            oscar = tango.length;
 276:
            tango = 0;
            mike = tango === oscar;
 282:
            if(!entity) { _fun00002_ip = 288; continue _fun00001 }
 285:
            entity = zulu;
 288:
            if(!entity) { _fun00002_ip = 294; continue _fun00001 }
 291:
            entity = mike;
 294:
            if(entity) { _fun00002_ip = 462; continue _fun00001 }
 300:
            mike = _closure1_slot1;
            verify = _closure1_slot2;
            entity = 5;
            entity = verify[entity];
            tango = mike.bind(options)(entity);
            zulu = tango.trackWithMetadata;
            entity = _closure1_slot8;
            mike = entity.FORUM_CHANNEL_NEW_POST_DRAFT_CREATED;
            entity = {};
            oscar = _closure1_slot0;
            report = 6;
            offset = verify[report];
            foxtrot = oscar.bind(options)(offset);
            romeo = foxtrot.collectForumAnalyticsMetadata;
            offset = {};
            offset['channelId'] = golf;
            kilo = romeo.bind(foxtrot)(offset);
            sizing = entity;
            offset = copyDataProperties(sizing, kilo);
            offset = 'guild_id';
            entity[offset] = yankee;
            offset = 'channel_id';
            entity[offset] = golf;
            offset = verify[report];
            yankee = oscar.bind(options)(offset);
            offset = yankee.getForumPostDraftAppliedTagIds;
            yankee = offset.bind(yankee)(golf);
            offset = 'applied_tag_ids';
            entity[offset] = yankee;
            report = verify[report];
            oscar = oscar.bind(options)(report);
            report = oscar.getForumPostDraftNumAttachments;
            oscar = report.bind(oscar)(golf);
            report = 'num_attachments';
            entity[report] = oscar;
            entity = zulu.bind(tango)(mike, entity);
 462:
            entity = undefined;
            return entity;
        }
    };
    zulu['maybeTrackForumNewPostDraftCreated'] = tango;
    tango = function(argFoo) { // Original name: trackForumNewPostCleared
        entity = argFoo;
        options = entity.guildId;
        golf = entity.channelId;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 5;
        mike = offset[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_NEW_POST_DRAFT_CLEARED;
        mike = {};
        verify = _closure1_slot0;
        oscar = 6;
        oscar = offset[oscar];
        offset = verify.bind(entity)(oscar);
        verify = offset.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = golf;
        romeo = verify.bind(offset)(oscar);
        foxtrot = mike;
        oscar = copyDataProperties(foxtrot, romeo);
        oscar = 'guild_id';
        mike[oscar] = options;
        oscar = 'channel_id';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumNewPostCleared'] = tango;
    tango = function(argFoo) { // Original name: trackForumPostCreated
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            zulu = mike.guildId;
            var _closure2_slot0 = zulu;
            zulu = mike.channelId;
            var _closure2_slot1 = zulu;
            oscar = mike.postId;
            var _closure2_slot2 = oscar;
            tango = function() { // Original name: _trackForumPostCreated
                zulu = _closure1_slot1;
                options = _closure1_slot2;
                entity = 5;
                mike = options[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.trackWithMetadata;
                mike = _closure1_slot8;
                zulu = mike.FORUM_CHANNEL_POST_CREATED;
                mike = {};
                golf = _closure1_slot0;
                oscar = 6;
                oscar = options[oscar];
                verify = golf.bind(entity)(oscar);
                options = verify.collectForumPostAnalyticsMetadata;
                golf = {};
                offset = _closure2_slot2;
                golf['channelId'] = offset;
                yankee = options.bind(verify)(golf);
                romeo = mike;
                golf = copyDataProperties(romeo, yankee);
                options = _closure2_slot0;
                golf = 'guild_id';
                mike[golf] = options;
                golf = _closure2_slot1;
                oscar = 'channel_id';
                mike[oscar] = golf;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            var _closure2_slot3 = tango;
            report = _closure1_slot6;
            zulu = report.isLoading;
            zulu = zulu.bind(report)(oscar);
            if(zulu) { _fun00004_ip = 73; continue _fun00003 }
 65:
            zulu = undefined;
            zulu = tango.bind(zulu)();
            _fun00004_ip = 95; continue _fun00003;
 73:
            zulu = _closure1_slot6;
            mike = zulu.addConditionalChangeListener;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = _closure1_slot6;
                    zulu = tango.isLoading;
                    entity = _closure2_slot2;
                    entity = zulu.bind(tango)(entity);
                    zulu = !entity;
                    entity = !zulu;
                    if(!zulu) { _fun00006_ip = 46; continue _fun00005 }
 34:
                    zulu = _closure2_slot3;
                    mike = undefined;
                    mike = zulu.bind(mike)();
                    entity = false;
 46:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
 95:
            entity = undefined;
            return entity;
        }
    };
    zulu['trackForumPostCreated'] = tango;
    tango = function(argFoo) { // Original name: trackForumScrolled
        entity = argFoo;
        options = entity.guildId;
        golf = entity.channelId;
        zulu = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 5;
        mike = offset[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_SCROLLED;
        mike = {};
        verify = _closure1_slot0;
        oscar = 6;
        oscar = offset[oscar];
        offset = verify.bind(entity)(oscar);
        verify = offset.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = golf;
        romeo = verify.bind(offset)(oscar);
        foxtrot = mike;
        oscar = copyDataProperties(foxtrot, romeo);
        oscar = 'guild_id';
        mike[oscar] = options;
        oscar = 'channel_id';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumScrolled'] = tango;
    tango = function(argFoo) { // Original name: trackForumMorePostsLoaded
        entity = argFoo;
        romeo = entity.guildId;
        yankee = entity.channelId;
        kilo = entity.numArchivedThreads;
        verify = entity.hasMoreThreads;
        options = entity.filterTagIds;
        golf = entity.sortOrder;
        zulu = _closure1_slot1;
        foxtrot = _closure1_slot2;
        entity = 7;
        mike = foxtrot[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_MORE_POSTS_LOADED;
        mike = {};
        offset = _closure1_slot0;
        backup = 5;
        sizing = foxtrot[backup];
        output = offset.bind(entity)(sizing);
        sizing = output.collectGuildAnalyticsMetadata;
        echo = sizing.bind(output)(romeo);
        update = mike;
        sizing = copyDataProperties(update, echo);
        backup = foxtrot[backup];
        sizing = offset.bind(entity)(backup);
        backup = sizing.collectChannelAnalyticsMetadata;
        output = _closure1_slot3;
        oscar = output.getChannel;
        oscar = oscar.bind(output)(yankee);
        echo = backup.bind(sizing)(oscar);
        update = mike;
        oscar = copyDataProperties(update, echo);
        oscar = 6;
        backup = foxtrot[oscar];
        output = offset.bind(entity)(backup);
        sizing = output.collectForumAnalyticsMetadata;
        backup = {};
        backup['channelId'] = yankee;
        echo = sizing.bind(output)(backup);
        update = mike;
        backup = copyDataProperties(update, echo);
        backup = 'guild_id';
        mike[backup] = romeo;
        backup = 'channel_id';
        mike[backup] = yankee;
        backup = 'num_archived_threads';
        mike[backup] = kilo;
        oscar = foxtrot[oscar];
        offset = offset.bind(entity)(oscar);
        oscar = offset.getNumActiveThreads;
        offset = oscar.bind(offset)(romeo, yankee);
        oscar = 'num_active_threads';
        mike[oscar] = offset;
        oscar = 'has_more_threads';
        mike[oscar] = verify;
        oscar = 'filter_tag_ids';
        mike[oscar] = options;
        oscar = 'sort_order';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumMorePostsLoaded'] = tango;
    tango = function(argFoo) { // Original name: trackForumPostClicked
        entity = argFoo;
        offset = entity.guildId;
        verify = entity.channelId;
        foxtrot = entity.postId;
        golf = entity.location;
        zulu = _closure1_slot1;
        romeo = _closure1_slot2;
        entity = 5;
        mike = romeo[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_POST_CLICKED;
        mike = {};
        yankee = _closure1_slot0;
        options = 6;
        options = romeo[options];
        romeo = yankee.bind(entity)(options);
        yankee = romeo.collectForumPostAnalyticsMetadata;
        options = {};
        options['channelId'] = foxtrot;
        backup = yankee.bind(romeo)(options);
        kilo = mike;
        options = copyDataProperties(kilo, backup);
        options = 'guild_id';
        mike[options] = offset;
        options = 'channel_id';
        mike[options] = verify;
        options = _closure1_slot7;
        oscar = options.getSearchResults;
        options = oscar.bind(options)(verify);
        oscar = null;
        options = oscar != options;
        oscar = 'is_search_result';
        mike[oscar] = options;
        oscar = 'location';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumPostClicked'] = tango;
    tango = function(argFoo) { // Original name: trackForumSortOrderUpdated
        entity = argFoo;
        romeo = entity.guildId;
        yankee = entity.channelId;
        golf = entity.sortOrder;
        zulu = _closure1_slot1;
        verify = _closure1_slot2;
        entity = 5;
        mike = verify[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_POSTS_SORTED;
        mike = {};
        options = _closure1_slot0;
        oscar = 6;
        offset = verify[oscar];
        backup = options.bind(entity)(offset);
        foxtrot = backup.collectForumAnalyticsMetadata;
        offset = {};
        offset['channelId'] = yankee;
        sizing = foxtrot.bind(backup)(offset);
        output = mike;
        offset = copyDataProperties(output, sizing);
        offset = 'guild_id';
        mike[offset] = romeo;
        offset = 'channel_id';
        mike[offset] = yankee;
        oscar = verify[oscar];
        options = options.bind(entity)(oscar);
        oscar = options.convertSortOrderToReadableString;
        options = oscar.bind(options)(golf);
        oscar = 'sort_type';
        mike[oscar] = options;
        oscar = 'sort_order';
        mike[oscar] = golf;
        oscar = 'forum_channel_sort_order';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumSortOrderUpdated'] = tango;
    tango = function(argFoo) { // Original name: trackForumLayoutUpdated
        entity = argFoo;
        verify = entity.guildId;
        options = entity.channelId;
        golf = entity.forumLayout;
        zulu = _closure1_slot1;
        yankee = _closure1_slot2;
        entity = 5;
        mike = yankee[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_LAYOUT_UPDATED;
        mike = {};
        offset = _closure1_slot0;
        oscar = 6;
        oscar = yankee[oscar];
        yankee = offset.bind(entity)(oscar);
        offset = yankee.collectForumAnalyticsMetadata;
        oscar = {};
        oscar['channelId'] = options;
        foxtrot = offset.bind(yankee)(oscar);
        backup = mike;
        oscar = copyDataProperties(backup, foxtrot);
        oscar = 'guild_id';
        mike[oscar] = verify;
        oscar = 'channel_id';
        mike[oscar] = options;
        oscar = 'forum_channel_layout';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumLayoutUpdated'] = tango;
    tango = function(argFoo) { // Original name: trackForumPostLinkCopied
        entity = argFoo;
        golf = entity.postId;
        oscar = entity.location;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_POST_LINK_COPIED;
        mike = {};
        mike['forum_post_id'] = golf;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumPostLinkCopied'] = tango;
    tango = function(argFoo) { // Original name: trackForumOnboardingClicked
        entity = argFoo;
        oscar = entity.onboardingCTA;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_ONBOARDING_CLICKED;
        mike = {};
        mike['onboarding_cta_type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumOnboardingClicked'] = tango;
    tango = function(argFoo) { // Original name: trackForumUpsellModalClicked
        entity = argFoo;
        oscar = entity.forumDemoId;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_UPSELL_MODAL_CLICKED;
        mike = {};
        mike['forum_demo_id'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumUpsellModalClicked'] = tango;
    tango = function(argFoo) { // Original name: trackForumAddMediaToOriginalPostClicked
        entity = argFoo;
        oscar = entity.added;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_ADD_MEDIA_TO_ORIGINAL_POST_CLICKED;
        mike = {};
        mike['added'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumAddMediaToOriginalPostClicked'] = tango;
    tango = function(argFoo) { // Original name: trackForumHelperCardClicked
        entity = argFoo;
        oscar = entity.readGuideCta;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_HELPER_CARD_CLICKED;
        mike = {};
        mike['read_guide_cta'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumHelperCardClicked'] = tango;
    tango = function(argFoo) { // Original name: trackForumChannelMediaUploaderClicked
        entity = argFoo;
        oscar = entity.isMobile;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.FORUM_CHANNEL_MEDIA_UPLOADER_CLICKED;
        mike = {};
        mike['is_mobile'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumChannelMediaUploaderClicked'] = tango;
    tango = function() { // Original name: trackForumEnableAutomodClicked
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot8;
        mike = mike.FORUM_CHANNEL_ENABLE_AUTOMOD_CLICKED;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['trackForumEnableAutomodClicked'] = tango;
    tango = function() { // Original name: trackForumPreviewPostClicked
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.trackWithMetadata;
        mike = _closure1_slot8;
        mike = mike.FORUM_CHANNEL_ENABLE_PREVIEW_CLICKED;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['trackForumPreviewPostClicked'] = tango;
    tango = function(argFoo) { // Original name: trackForumPostSidebarViewed
        oscar = argFoo;
        zulu = _closure1_slot1;
        report = _closure1_slot2;
        offset = 5;
        mike = report[offset];
        entity = undefined;
        verify = zulu.bind(entity)(mike);
        options = verify.trackWithMetadata;
        mike = _closure1_slot8;
        golf = mike.CHANNEL_OPENED;
        zulu = {};
        tango = _closure1_slot0;
        yankee = report[offset];
        foxtrot = tango.bind(entity)(yankee);
        romeo = foxtrot.collectGuildAnalyticsMetadata;
        yankee = oscar.guild_id;
        backup = romeo.bind(foxtrot)(yankee);
        kilo = zulu;
        yankee = copyDataProperties(kilo, backup);
        yankee = report[offset];
        romeo = tango.bind(entity)(yankee);
        yankee = romeo.collectChannelAnalyticsMetadata;
        backup = yankee.bind(romeo)(oscar);
        kilo = zulu;
        yankee = copyDataProperties(kilo, backup);
        yankee = 8;
        yankee = report[yankee];
        foxtrot = tango.bind(entity)(yankee);
        romeo = foxtrot.collectThreadMetadata;
        yankee = true;
        backup = romeo.bind(foxtrot)(oscar, yankee);
        kilo = zulu;
        yankee = copyDataProperties(kilo, backup);
        offset = report[offset];
        romeo = tango.bind(entity)(offset);
        yankee = romeo.getChannelOpenedMetadata;
        offset = oscar.id;
        backup = yankee.bind(romeo)(offset);
        kilo = zulu;
        offset = copyDataProperties(kilo, backup);
        yankee = 'Split View';
        offset = 'channel_view';
        zulu[offset] = yankee;
        offset = 9;
        offset = report[offset];
        yankee = tango.bind(entity)(offset);
        offset = yankee.getPlatform;
        yankee = offset.bind(yankee)();
        offset = 'platform';
        zulu[offset] = yankee;
        zulu = options.bind(verify)(golf, zulu);
        zulu = 10;
        zulu = report[zulu];
        report = tango.bind(entity)(zulu);
        tango = report.trackClickstream;
        zulu = mike.CHANNEL_OPENED_CLICKSTREAM;
        mike = {};
        oscar = oscar.id;
        mike['channelId'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumPostSidebarViewed'] = tango;
    tango = function(argFoo) { // Original name: trackMobileForumComposerOpened
        entity = argFoo;
        options = entity.guildId;
        golf = entity.channelId;
        oscar = entity.location;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot8;
        zulu = mike.OPEN_MODAL;
        mike = {};
        verify = 'Create Forum Post';
        mike['type'] = verify;
        mike['guild_id'] = options;
        mike['channel_id'] = golf;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackMobileForumComposerOpened'] = tango;
    tango = function() { // Original name: trackMobileForumComposerDismissed
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.track;
        mike = _closure1_slot8;
        zulu = mike.MODAL_DISMISSED;
        mike = {};
        oscar = 'Create Forum Post';
        mike['type'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackMobileForumComposerDismissed'] = tango;
    tango = function() { // Original name: trackForumUpsellModalViewed
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.OPEN_MODAL;
        mike = {};
        oscar = 'Forum Channel Upsell Modal';
        mike['type'] = oscar;
        oscar = {};
        golf = _closure1_slot9;
        golf = golf.CHANNEL_WELCOME_CTA;
        oscar['section'] = golf;
        mike['location'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumUpsellModalViewed'] = tango;
    mike = function(argFoo) { // Original name: trackForumCreateNewPostStarted
        entity = argFoo;
        golf = entity.guildId;
        options = entity.channelId;
        zulu = _closure1_slot1;
        yankee = _closure1_slot2;
        entity = 5;
        mike = yankee[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.trackWithMetadata;
        mike = _closure1_slot8;
        zulu = mike.THREAD_CREATION_STARTED;
        mike = {};
        offset = _closure1_slot0;
        verify = 8;
        verify = yankee[verify];
        offset = offset.bind(entity)(verify);
        verify = offset.collectThreadMetadata;
        yankee = _closure1_slot3;
        oscar = yankee.getChannel;
        oscar = oscar.bind(yankee)(options);
        romeo = verify.bind(offset)(oscar);
        foxtrot = mike;
        oscar = copyDataProperties(foxtrot, romeo);
        oscar = 'channel_id';
        mike[oscar] = options;
        oscar = 'guild_id';
        mike[oscar] = golf;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    zulu['trackForumCreateNewPostStarted'] = mike;
    return entity;
})();
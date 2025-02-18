// app/modules/forums/tracking/TrackingUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: getForumChannelSessionId
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 12;
        michal = michal[entity];
        entity = undefined;
        zuuluu = zuuluu.bind(entity)(michal);
        michal = zuuluu.getForumChannelSessionId;
        entity = argFoo;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot16 = oscard;
    entity = function(argFoo) { // Original name: getForumPostFirstMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot12;
            michal = zuuluu.getMessage;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            zuuluu = entity.loaded;
            michal = entity.firstMessage;
            entity = null;
            if(!zuuluu) { _fun00002_ip = 41; continue _fun00001 }
 38:
            entity = michal;
 41:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getForumPostUniqueReactionCount
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot17;
            michal = undefined;
            entity = argFoo;
            michal = zuuluu.bind(michal)(entity);
            entity = null;
            zuuluu = entity == michal;
            entity = 0;
            if(zuuluu) { _fun00004_ip = 39; continue _fun00003 }
 28:
            michal = michal.reactions;
            entity = michal.length;
 39:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: getForumPostReactionCount
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot17;
            michal = undefined;
            entity = argFoo;
            michal = zuuluu.bind(michal)(entity);
            entity = null;
            zuuluu = entity == michal;
            report = 0;
            entity = 0;
            if(zuuluu) { _fun00006_ip = 55; continue _fun00005 }
 30:
            tangon = michal.reactions;
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                entity = argBar;
                michal = entity.count;
                entity = argFoo;
                entity = entity + michal;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal, report);
 55:
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo) { // Original name: getForumPostAppliedTagIds
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            report = _closure1_slot7;
            tangon = report.getChannel;
            michal = argFoo;
            tangon = tangon.bind(report)(michal);
            michal = null;
            if(!(michal != tangon)) { _fun00008_ip = 167; continue _fun00007 }
 31:
            oscard = _closure1_slot7;
            report = oscard.getChannel;
            entity = tangon.parent_id;
            report = report.bind(oscard)(entity);
            oscard = michal == report;
            option = undefined;
            if(oscard) { _fun00008_ip = 66; continue _fun00007 }
 60:
            option = report.availableTags;
 66:
            if(!(michal != report)) { _fun00008_ip = 161; continue _fun00007 }
 70:
            if(!(michal != option)) { _fun00008_ip = 161; continue _fun00007 }
 74:
            report = global;
            golfie = report.Set;
            oscard = option.map;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            verify = oscard.bind(option)(report);
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            offset = oscard;
            report = new offset[golfie](verify, option);
            report = report instanceof Object ? report : oscard;
            var _closure2_slot0 = report;
            report = tangon.appliedTags;
            tangon = michal == report;
            entity = undefined;
            if(tangon) { _fun00008_ip = 151; continue _fun00007 }
 136:
            tangon = report.filter;
            zuuluu = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = tangon.bind(report)(zuuluu);
 151:
            if(!(michal == entity)) { _fun00008_ip = 159; continue _fun00007 }
 155:
            entity = new Array(0);
 159:
            return entity;
 161:
            entity = new Array(0);
            return entity;
 167:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    report = function(argFoo) { // Original name: getForumPostAttachmentMimetypes
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot17;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            michal = null;
            if(!(michal != entity)) { _fun00010_ip = 48; continue _fun00009 }
 23:
            zuuluu = entity.attachments;
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    michal = entity.content_type;
                    entity = null;
                    zuuluu = entity != michal;
                    entity = 'unknown';
                    if(!zuuluu) { _fun00012_ip = 25; continue _fun00011 }
 22:
                    entity = michal;
 25:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            _fun00010_ip = 52; continue _fun00009;
 48:
            entity = new Array(0);
 52:
            return entity;
        }
    };
    var _closure1_slot21 = report;
    tangon = function(argFoo) { // Original name: collectForumAnalyticsMetadata
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.channelId;
            report = entity.sessionId;
            michal = _closure1_slot7;
            entity = michal.getChannel;
            zuuluu = entity.bind(michal)(zuuluu);
            option = null;
            michal = option != zuuluu;
            entity = null;
            if(!michal) { _fun00014_ip = 441; continue _fun00013 }
 45:
            michal = zuuluu.isForumLikeChannel;
            michal = michal.bind(zuuluu)();
            entity = null;
            if(!michal) { _fun00014_ip = 441; continue _fun00013 }
 63:
            michal = {};
            oscard = zuuluu.topic;
            oscard = option != oscard;
            if(!oscard) { _fun00014_ip = 105; continue _fun00013 }
 78:
            verify = zuuluu.topic;
            golfie = verify.trim;
            golfie = golfie.bind(verify)();
            verify = golfie.length;
            golfie = 0;
            oscard = verify > golfie;
 105:
            michal['forum_channel_has_guidelines'] = oscard;
            verify = zuuluu.defaultReactionEmoji;
            offset = option == verify;
            oscard = undefined;
            golfie = undefined;
            if(offset) { _fun00014_ip = 135; continue _fun00013 }
 129:
            golfie = verify.emojiId;
 135:
            michal['forum_channel_default_emoji_reaction_id'] = golfie;
            verify = zuuluu.defaultReactionEmoji;
            offset = option == verify;
            golfie = undefined;
            if(offset) { _fun00014_ip = 163; continue _fun00013 }
 157:
            golfie = verify.emojiName;
 163:
            michal['forum_channel_default_emoji_reaction_name'] = golfie;
            yankee = zuuluu.availableTags;
            verify = option == yankee;
            golfie = undefined;
            if(verify) { _fun00014_ip = 202; continue _fun00013 }
 185:
            offset = yankee.map;
            verify = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            golfie = offset.bind(yankee)(verify);
 202:
            if(!(option == golfie)) { _fun00014_ip = 210; continue _fun00013 }
 206:
            golfie = new Array(0);
 210:
            michal['forum_channel_available_tag_ids'] = golfie;
            verify = zuuluu.hasFlag;
            golfie = _closure1_slot14;
            golfie = golfie.REQUIRE_TAG;
            golfie = verify.bind(zuuluu)(golfie);
            michal['forum_channel_tag_required'] = golfie;
            offset = _closure1_slot10;
            verify = offset.can;
            golfie = _closure1_slot13;
            golfie = golfie.SEND_MESSAGES;
            golfie = verify.bind(offset)(golfie, zuuluu);
            michal['forum_channel_can_create_post'] = golfie;
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            golfie = 14;
            yankee = verify[golfie];
            romeon = offset.bind(oscard)(yankee);
            yankee = romeon.getFilterTagIdsAnalytics;
            yankee = yankee.bind(romeon)();
            michal['forum_channel_filter_tag_ids'] = yankee;
            verify = verify[golfie];
            yankee = offset.bind(oscard)(verify);
            offset = yankee.getSortOrderAnalytics;
            verify = zuuluu.id;
            verify = offset.bind(yankee)(verify);
            michal['forum_channel_sort_order'] = verify;
            if(!(option == report)) { _fun00014_ip = 365; continue _fun00013 }
 351:
            verify = _closure1_slot16;
            option = zuuluu.id;
            report = verify.bind(oscard)(option);
 365:
            michal['forum_channel_session_id'] = report;
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[golfie];
            oscard = report.bind(oscard)(tangon);
            report = oscard.getLayoutAnalytics;
            tangon = zuuluu.id;
            tangon = report.bind(oscard)(tangon);
            michal['forum_channel_layout'] = tangon;
            tangon = zuuluu.defaultSortOrder;
            michal['forum_channel_default_sort_order'] = tangon;
            zuuluu = zuuluu.defaultForumLayout;
            michal['forum_channel_default_layout'] = zuuluu;
            entity = michal;
 441:
            return entity;
        }
    };
    var _closure1_slot22 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 5;
    yankee = verify[golfie];
    yankee = offset.bind(entity)(yankee);
    var _closure1_slot8 = yankee;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.DraftType;
    var _closure1_slot9 = golfie;
    golfie = 6;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    golfie = 7;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot11 = golfie;
    golfie = 8;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot12 = golfie;
    golfie = 9;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.Permissions;
    var _closure1_slot13 = golfie;
    golfie = 10;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ChannelFlags;
    var _closure1_slot14 = golfie;
    golfie = 11;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ThreadSortOrderReadableForAnalytics;
    var _closure1_slot15 = golfie;
    golfie = 17;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/forums/tracking/TrackingUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['getForumChannelSessionId'] = oscard;
    oscard = function(argFoo) { // Original name: convertSortOrderToReadableString
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            oscard = 13;
            michal = michal[oscard];
            tangon = undefined;
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ThreadSortOrder;
            michal = michal.CREATION_DATE;
            if(!(michal !== report)) { _fun00016_ip = 141; continue _fun00015 }
 44:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            michal = michal[oscard];
            michal = zuuluu.bind(tangon)(michal);
            michal = michal.ThreadSortOrder;
            michal = michal.LATEST_ACTIVITY;
            if(!(michal !== report)) { _fun00016_ip = 129; continue _fun00015 }
 77:
            michal = global;
            tangon = michal.Error;
            michal = michal.HermesInternal;
            zuuluu = michal.concat;
            michal = 'Unexpected sort order ';
            golfie = zuuluu.bind(michal)(report);
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            option = zuuluu;
            michal = new option[tangon](golfie, oscard);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 129:
            michal = _closure1_slot15;
            michal = michal.LATEST_ACTIVITY;
            return michal;
 141:
            entity = _closure1_slot15;
            entity = entity.CREATION_DATE;
            return entity;
        }
    };
    zuuluu['convertSortOrderToReadableString'] = oscard;
    oscard = function(argFoo) { // Original name: getForumPostDraftNumAttachments
        tangon = _closure1_slot11;
        zuuluu = tangon.getUploads;
        entity = _closure1_slot9;
        michal = entity.FirstThreadMessage;
        entity = argFoo;
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = entity.length;
        return entity;
    };
    zuuluu['getForumPostDraftNumAttachments'] = oscard;
    oscard = function(argFoo) { // Original name: getForumPostDraftAppliedTagIds
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot7;
            michal = tangon.getChannel;
            tangon = michal.bind(tangon)(oscard);
            michal = null;
            if(!(michal != tangon)) { _fun00018_ip = 228; continue _fun00017 }
 31:
            golfie = _closure1_slot7;
            report = golfie.getChannel;
            tangon = tangon.parent_id;
            report = report.bind(golfie)(tangon);
            option = michal == report;
            golfie = undefined;
            if(option) { _fun00018_ip = 66; continue _fun00017 }
 60:
            golfie = report.availableTags;
 66:
            if(!(michal != report)) { _fun00018_ip = 222; continue _fun00017 }
 73:
            if(!(michal != golfie)) { _fun00018_ip = 222; continue _fun00017 }
 80:
            report = _closure1_slot8;
            zuuluu = report.getThreadSettings;
            zuuluu = zuuluu.bind(report)(oscard);
            report = michal == zuuluu;
            tangon = undefined;
            if(report) { _fun00018_ip = 110; continue _fun00017 }
 104:
            tangon = zuuluu.appliedTags;
 110:
            if(!(michal == tangon)) { _fun00018_ip = 142; continue _fun00017 }
 114:
            michal = global;
            michal = michal.Set;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            offset = zuuluu;
            michal = new offset[michal](verify);
            tangon = michal instanceof Object ? michal : zuuluu;
 142:
            michal = global;
            oscard = michal.Set;
            report = golfie.map;
            zuuluu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            verify = report.bind(golfie)(zuuluu);
            report = oscard.prototype;
            report = Object.create(report, {constructor: {value: oscard}});
            offset = report;
            zuuluu = new offset[oscard](verify, option);
            zuuluu = zuuluu instanceof Object ? zuuluu : report;
            var _closure2_slot0 = zuuluu;
            zuuluu = michal.Array;
            michal = zuuluu.from;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = zuuluu.filter;
            entity = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
 222:
            entity = new Array(0);
            return entity;
 228:
            entity = new Array(0);
            return entity;
        }
    };
    zuuluu['getForumPostDraftAppliedTagIds'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: getNumActiveThreads
        entity = global;
        zuuluu = entity.Object;
        michal = zuuluu.keys;
        oscard = _closure1_slot3;
        report = oscard.getThreadsForParent;
        tangon = argFoo;
        entity = argBar;
        entity = report.bind(oscard)(tangon, entity);
        entity = michal.bind(zuuluu)(entity);
        entity = entity.length;
        return entity;
    };
    zuuluu['getNumActiveThreads'] = oscard;
    zuuluu['getForumPostAttachmentMimetypes'] = report;
    zuuluu['collectForumAnalyticsMetadata'] = tangon;
    michal = function(argFoo) { // Original name: collectForumPostAnalyticsMetadata
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            romeon = entity.channelId;
            oscard = entity.sessionId;
            michal = _closure1_slot7;
            entity = michal.getChannel;
            tangon = entity.bind(michal)(romeon);
            entity = null;
            if(!(entity != tangon)) { _fun00020_ip = 693; continue _fun00019 }
 40:
            michal = tangon.isForumPost;
            michal = michal.bind(tangon)();
            if(!michal) { _fun00020_ip = 693; continue _fun00019 }
 56:
            golfie = _closure1_slot7;
            zuuluu = golfie.getChannel;
            michal = tangon.parent_id;
            verify = zuuluu.bind(golfie)(michal);
            zuuluu = entity != verify;
            michal = null;
            if(!zuuluu) { _fun00020_ip = 691; continue _fun00019 }
 88:
            zuuluu = verify.isForumLikeChannel;
            zuuluu = zuuluu.bind(verify)();
            michal = null;
            if(!zuuluu) { _fun00020_ip = 691; continue _fun00019 }
 106:
            zuuluu = {};
            option = _closure1_slot22;
            golfie = {};
            verify = verify.id;
            golfie['channelId'] = verify;
            golfie['sessionId'] = oscard;
            oscard = undefined;
            foxtra = option.bind(oscard)(golfie);
            backup = zuuluu;
            golfie = copyDataProperties(backup, foxtra);
            option = _closure1_slot5;
            golfie = option.getMemberCount;
            option = golfie.bind(option)(romeon);
            golfie = 'thread_approximate_member_count';
            zuuluu[golfie] = option;
            option = _closure1_slot6;
            golfie = option.getCount;
            option = golfie.bind(option)(romeon);
            golfie = 'thread_approximate_message_count';
            zuuluu[golfie] = option;
            golfie = tangon.threadMetadata;
            verify = entity == golfie;
            option = undefined;
            if(verify) { _fun00020_ip = 215; continue _fun00019 }
 209:
            option = golfie.archived;
 215:
            golfie = true;
            option = golfie === option;
            golfie = 'thread_archived';
            zuuluu[golfie] = option;
            option = tangon.threadMetadata;
            verify = entity == option;
            golfie = undefined;
            if(verify) { _fun00020_ip = 253; continue _fun00019 }
 247:
            golfie = option.locked;
 253:
            option = entity != golfie;
            if(!option) { _fun00020_ip = 263; continue _fun00019 }
 260:
            option = golfie;
 263:
            golfie = 'thread_locked';
            zuuluu[golfie] = option;
            option = tangon.threadMetadata;
            verify = entity == option;
            golfie = undefined;
            if(verify) { _fun00020_ip = 295; continue _fun00019 }
 289:
            golfie = option.autoArchiveDuration;
 295:
            verify = entity != golfie;
            option = 0;
            if(!verify) { _fun00020_ip = 307; continue _fun00019 }
 304:
            option = golfie;
 307:
            golfie = 'thread_auto_archive_duration_minutes';
            zuuluu[golfie] = option;
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            verify = 15;
            offset = golfie[verify];
            yankee = option.bind(oscard)(offset);
            offset = yankee.extractTimestamp;
            yankee = offset.bind(yankee)(romeon);
            offset = 'thread_approximate_creation_date';
            zuuluu[offset] = yankee;
            yankee = tangon.id;
            offset = 'forum_post_id';
            zuuluu[offset] = yankee;
            verify = golfie[verify];
            yankee = option.bind(oscard)(verify);
            offset = yankee.castChannelIdAsMessageId;
            verify = tangon.id;
            offset = offset.bind(yankee)(verify);
            verify = 'forum_post_first_message_id';
            zuuluu[verify] = offset;
            offset = _closure1_slot19;
            verify = tangon.id;
            offset = offset.bind(oscard)(verify);
            verify = 'forum_post_num_reactions';
            zuuluu[verify] = offset;
            offset = _closure1_slot18;
            verify = tangon.id;
            offset = offset.bind(oscard)(verify);
            verify = 'forum_post_num_unique_reactions';
            zuuluu[verify] = offset;
            offset = _closure1_slot20;
            verify = tangon.id;
            offset = offset.bind(oscard)(verify);
            verify = 'forum_post_applied_tag_ids';
            zuuluu[verify] = offset;
            offset = tangon.hasFlag;
            verify = _closure1_slot14;
            verify = verify.PINNED;
            offset = offset.bind(tangon)(verify);
            verify = 'forum_post_is_pinned';
            zuuluu[verify] = offset;
            verify = 16;
            golfie = golfie[verify];
            offset = option.bind(oscard)(golfie);
            option = offset.getReadStateSnapshotAnalytics;
            golfie = tangon.id;
            golfie = option.bind(offset)(golfie);
            offset = entity == golfie;
            option = undefined;
            if(offset) { _fun00020_ip = 562; continue _fun00019 }
 556:
            option = golfie.isNew;
 562:
            golfie = 'forum_post_is_new';
            zuuluu[golfie] = option;
            option = _closure1_slot1;
            golfie = _closure1_slot2;
            golfie = golfie[verify];
            verify = option.bind(oscard)(golfie);
            option = verify.getReadStateSnapshotAnalytics;
            golfie = tangon.id;
            golfie = option.bind(verify)(golfie);
            verify = entity == golfie;
            option = undefined;
            if(verify) { _fun00020_ip = 621; continue _fun00019 }
 615:
            option = golfie.hasUnreads;
 621:
            golfie = 'forum_post_is_unread';
            zuuluu[golfie] = option;
            verify = _closure1_slot4;
            option = verify.hasJoined;
            golfie = tangon.id;
            option = option.bind(verify)(golfie);
            golfie = 'forum_post_is_following';
            zuuluu[golfie] = option;
            report = _closure1_slot21;
            tangon = tangon.id;
            report = report.bind(oscard)(tangon);
            tangon = 'forum_post_attachment_mimetypes';
            zuuluu[tangon] = report;
            michal = zuuluu;
 691:
            return michal;
 693:
            return entity;
        }
    };
    zuuluu['collectForumPostAnalyticsMetadata'] = michal;
    return entity;
})();
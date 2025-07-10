// app/utils/GuildRecordUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar, argBaz) { // Original name: fromGuildPropertiesWithAdditionalFields
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            report = _closure1_slot6;
            tangon = _closure1_slot8;
            zuuluu = {};
            michal = oscard.id;
            zuuluu['id'] = michal;
            michal = entity.joinedAt;
            zuuluu['joinedAt'] = michal;
            entity = entity.premiumSubscriberCount;
            zuuluu['premiumSubscriberCount'] = entity;
            entity = oscard.name;
            zuuluu['name'] = entity;
            golfie = oscard.description;
            entity = null;
            verify = entity != golfie;
            michal = null;
            if(!verify) { _fun00002_ip = 78; continue _fun00001 }
 75:
            michal = golfie;
 78:
            zuuluu['description'] = michal;
            golfie = oscard.icon;
            verify = entity != golfie;
            michal = null;
            if(!verify) { _fun00002_ip = 99; continue _fun00001 }
 96:
            michal = golfie;
 99:
            zuuluu['icon'] = michal;
            golfie = oscard.splash;
            verify = entity != golfie;
            michal = null;
            if(!verify) { _fun00002_ip = 121; continue _fun00001 }
 118:
            michal = golfie;
 121:
            zuuluu['splash'] = michal;
            golfie = oscard.banner;
            verify = entity != golfie;
            michal = null;
            if(!verify) { _fun00002_ip = 144; continue _fun00001 }
 141:
            michal = golfie;
 144:
            zuuluu['banner'] = michal;
            golfie = oscard.home_header;
            verify = entity != golfie;
            michal = null;
            if(!verify) { _fun00002_ip = 167; continue _fun00001 }
 164:
            michal = golfie;
 167:
            zuuluu['homeHeader'] = michal;
            verify = _closure1_slot0;
            golfie = _closure1_slot2;
            michal = 3;
            golfie = golfie[michal];
            michal = undefined;
            offset = verify.bind(michal)(golfie);
            verify = offset.toSetInplace;
            golfie = oscard.features;
            golfie = verify.bind(offset)(golfie);
            zuuluu['features'] = golfie;
            golfie = oscard.preferred_locale;
            if(!(entity == golfie)) { _fun00002_ip = 236; continue _fun00001 }
 226:
            verify = _closure1_slot7;
            golfie = verify.preferredLocale;
 236:
            zuuluu['preferredLocale'] = golfie;
            golfie = oscard.owner_id;
            zuuluu['ownerId'] = golfie;
            verify = oscard.application_id;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 270; continue _fun00001 }
 267:
            golfie = verify;
 270:
            zuuluu['application_id'] = golfie;
            verify = oscard.afk_channel_id;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 293; continue _fun00001 }
 290:
            golfie = verify;
 293:
            zuuluu['afkChannelId'] = golfie;
            golfie = oscard.afk_timeout;
            if(!(entity == golfie)) { _fun00002_ip = 318; continue _fun00001 }
 308:
            verify = _closure1_slot7;
            golfie = verify.afkTimeout;
 318:
            zuuluu['afkTimeout'] = golfie;
            verify = oscard.system_channel_id;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 341; continue _fun00001 }
 338:
            golfie = verify;
 341:
            zuuluu['systemChannelId'] = golfie;
            golfie = oscard.verification_level;
            if(!(entity == golfie)) { _fun00002_ip = 366; continue _fun00001 }
 356:
            verify = _closure1_slot7;
            golfie = verify.verificationLevel;
 366:
            zuuluu['verificationLevel'] = golfie;
            golfie = oscard.explicit_content_filter;
            if(!(entity == golfie)) { _fun00002_ip = 391; continue _fun00001 }
 381:
            verify = _closure1_slot7;
            golfie = verify.explicitContentFilter;
 391:
            zuuluu['explicitContentFilter'] = golfie;
            golfie = oscard.default_message_notifications;
            zuuluu['defaultMessageNotifications'] = golfie;
            golfie = oscard.mfa_level;
            if(!(entity == golfie)) { _fun00002_ip = 427; continue _fun00001 }
 417:
            verify = _closure1_slot7;
            golfie = verify.mfaLevel;
 427:
            zuuluu['mfaLevel'] = golfie;
            verify = oscard.vanity_url_code;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 450; continue _fun00001 }
 447:
            golfie = verify;
 450:
            zuuluu['vanityURLCode'] = golfie;
            golfie = oscard.premium_tier;
            if(!(entity == golfie)) { _fun00002_ip = 475; continue _fun00001 }
 465:
            verify = _closure1_slot7;
            golfie = verify.premiumTier;
 475:
            zuuluu['premiumTier'] = golfie;
            golfie = oscard.premium_progress_bar_enabled;
            if(golfie) { _fun00002_ip = 499; continue _fun00001 }
 489:
            verify = _closure1_slot7;
            golfie = verify.premiumProgressBarEnabled;
 499:
            zuuluu['premiumProgressBarEnabled'] = golfie;
            golfie = oscard.system_channel_flags;
            zuuluu['systemChannelFlags'] = golfie;
            verify = oscard.discovery_splash;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 533; continue _fun00001 }
 530:
            golfie = verify;
 533:
            zuuluu['discoverySplash'] = golfie;
            verify = oscard.rules_channel_id;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 556; continue _fun00001 }
 553:
            golfie = verify;
 556:
            zuuluu['rulesChannelId'] = golfie;
            verify = oscard.safety_alerts_channel_id;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 579; continue _fun00001 }
 576:
            golfie = verify;
 579:
            zuuluu['safetyAlertsChannelId'] = golfie;
            verify = oscard.public_updates_channel_id;
            offset = entity != verify;
            golfie = null;
            if(!offset) { _fun00002_ip = 602; continue _fun00001 }
 599:
            golfie = verify;
 602:
            zuuluu['publicUpdatesChannelId'] = golfie;
            golfie = oscard.max_stage_video_channel_users;
            if(!(entity == golfie)) { _fun00002_ip = 627; continue _fun00001 }
 617:
            verify = _closure1_slot7;
            golfie = verify.maxStageVideoChannelUsers;
 627:
            zuuluu['maxStageVideoChannelUsers'] = golfie;
            golfie = oscard.max_video_channel_users;
            if(!(entity == golfie)) { _fun00002_ip = 652; continue _fun00001 }
 642:
            verify = _closure1_slot7;
            golfie = verify.maxVideoChannelUsers;
 652:
            zuuluu['maxVideoChannelUsers'] = golfie;
            golfie = oscard.max_members;
            if(!(entity == golfie)) { _fun00002_ip = 677; continue _fun00001 }
 667:
            verify = _closure1_slot7;
            golfie = verify.maxMembers;
 677:
            zuuluu['maxMembers'] = golfie;
            golfie = oscard.nsfw_level;
            if(!(entity == golfie)) { _fun00002_ip = 702; continue _fun00001 }
 692:
            option = _closure1_slot7;
            golfie = option.nsfwLevel;
 702:
            zuuluu['nsfwLevel'] = golfie;
            option = oscard.owner_configured_content_level;
            verify = entity != option;
            golfie = null;
            if(!verify) { _fun00002_ip = 725; continue _fun00001 }
 722:
            golfie = option;
 725:
            zuuluu['ownerConfiguredContentLevel'] = golfie;
            option = oscard.hub_type;
            verify = entity != option;
            golfie = null;
            if(!verify) { _fun00002_ip = 748; continue _fun00001 }
 745:
            golfie = option;
 748:
            zuuluu['hubType'] = golfie;
            option = oscard.latest_onboarding_question_id;
            verify = entity != option;
            golfie = null;
            if(!verify) { _fun00002_ip = 771; continue _fun00001 }
 768:
            golfie = option;
 771:
            zuuluu['latestOnboardingQuestionId'] = golfie;
            option = oscard.profile;
            verify = entity != option;
            golfie = null;
            if(!verify) { _fun00002_ip = 794; continue _fun00001 }
 791:
            golfie = option;
 794:
            zuuluu['profile'] = golfie;
            golfie = oscard.premium_features;
            option = entity != golfie;
            golfie = null;
            if(!option) { _fun00002_ip = 869; continue _fun00001 }
 814:
            verify = oscard.premium_features;
            option = {};
            offset = verify.features;
            option['features'] = offset;
            offset = verify.additional_emoji_slots;
            option['additionalEmojiSlots'] = offset;
            offset = verify.additional_sticker_slots;
            option['additionalStickerSlots'] = offset;
            verify = verify.additional_sound_slots;
            option['additionalSoundSlots'] = verify;
            golfie = option;
 869:
            zuuluu['premiumFeatures'] = golfie;
            golfie = oscard.moderator_reporting;
            golfie = entity != golfie;
            entity = null;
            if(!golfie) { _fun00002_ip = 922; continue _fun00001 }
 889:
            golfie = oscard.moderator_reporting;
            oscard = {};
            option = golfie.moderator_reporting_enabled;
            oscard['moderatorReportingEnabled'] = option;
            golfie = golfie.moderator_report_channel_id;
            oscard['moderatorReportChannelId'] = golfie;
            entity = oscard;
 922:
            zuuluu['moderatorReporting'] = entity;
            entity = argBaz;
            entity = report.bind(michal)(tangon, entity, zuuluu);
            return entity;
        }
    };
    var _closure1_slot10 = report;
    michal = function(argFoo) { // Original name: constructFromPartialGuildRecord
        zuuluu = _closure1_slot12;
        michal = {};
        tangon = _closure1_slot7;
        report = michal;
        entity = copyDataProperties(report, tangon);
        tangon = argFoo;
        report = michal;
        entity = copyDataProperties(report, tangon);
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot11 = michal;
    entity = function(argFoo) { // Original name: constructGuildInPlace
        tangon = _closure1_slot3;
        zuuluu = _closure1_slot8;
        michal = undefined;
        entity = argFoo;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.constructInPlace;
    var _closure1_slot3 = verify;
    verify = oscard.merge;
    var _closure1_slot4 = verify;
    verify = oscard.objectIsPlainRecordOfType;
    var _closure1_slot5 = verify;
    oscard = oscard.tryReuseExistingInPlacePlainRecord;
    var _closure1_slot6 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.GUILD_DEFAULT_PROPERTY_VALUES;
    var _closure1_slot7 = verify;
    oscard = oscard.GuildRecordTypeTag;
    var _closure1_slot8 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.GuildNSFWContentLevel;
    var _closure1_slot9 = oscard;
    oscard = 5;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'utils/GuildRecordUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: isGuildRecord
        tangon = _closure1_slot5;
        zuuluu = _closure1_slot8;
        michal = undefined;
        entity = argFoo;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    zuuluu['isGuildRecord'] = oscard;
    zuuluu['fromGuildPropertiesWithAdditionalFields'] = report;
    report = function(argFoo, argBar) { // Original name: fromServer
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            report = argBar;
            michal = entity.joined_at;
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00004_ip = 47; continue _fun00003 }
 18:
            tangon = zuuluu == report;
            michal = undefined;
            if(tangon) { _fun00004_ip = 33; continue _fun00003 }
 27:
            michal = report.joinedAt;
 33:
            tangon = zuuluu != michal;
            golfie = null;
            if(!tangon) { _fun00004_ip = 45; continue _fun00003 }
 42:
            golfie = michal;
 45:
            _fun00004_ip = 81; continue _fun00003;
 47:
            michal = global;
            oscard = michal.Date;
            romeon = entity.joined_at;
            tangon = oscard.prototype;
            tangon = Object.create(tangon, {constructor: {value: oscard}});
            foxtra = tangon;
            michal = new foxtra[oscard](romeon, yankee);
            golfie = michal instanceof Object ? michal : tangon;
 81:
            michal = entity.premium_subscription_count;
            tangon = zuuluu != michal;
            oscard = 0;
            if(!tangon) { _fun00004_ip = 99; continue _fun00003 }
 96:
            oscard = michal;
 99:
            michal = entity.properties;
            if(!(zuuluu != michal)) { _fun00004_ip = 145; continue _fun00003 }
 109:
            option = _closure1_slot10;
            tangon = entity.properties;
            michal = {};
            michal['joinedAt'] = golfie;
            michal['premiumSubscriberCount'] = oscard;
            entity = undefined;
            entity = option.bind(entity)(tangon, michal, report);
            _fun00004_ip = 208; continue _fun00003;
 145:
            verify = _closure1_slot1;
            option = _closure1_slot2;
            tangon = 4;
            option = option[tangon];
            tangon = undefined;
            verify = verify.bind(tangon)(option);
            option = zuuluu != report;
            zuuluu = 'If guild.properties is null, existingGuild must be passed in';
            zuuluu = verify.bind(tangon)(option, zuuluu);
            zuuluu = _closure1_slot4;
            michal = {};
            michal['joinedAt'] = golfie;
            michal['premiumSubscriberCount'] = oscard;
            entity = zuuluu.bind(tangon)(report, michal);
 208:
            return entity;
        }
    };
    zuuluu['fromServer'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: attachSerializedData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = argBaz;
            entity = {};
            verify = entity;
            option = michal;
            zuuluu = copyDataProperties(verify, option);
            report = michal.joinedAt;
            zuuluu = null;
            report = zuuluu != report;
            oscard = null;
            if(!report) { _fun00006_ip = 51; continue _fun00005 }
 35:
            golfie = michal.joinedAt;
            report = golfie.toISOString;
            oscard = report.bind(golfie)();
 51:
            report = 'joinedAt';
            entity[report] = oscard;
            report = global;
            oscard = report.Array;
            report = oscard.from;
            michal = michal.features;
            report = report.bind(oscard)(michal);
            michal = 'features';
            entity[michal] = report;
            report = argBar;
            michal = 'roles';
            entity[michal] = report;
            michal = zuuluu != tangon;
            zuuluu = null;
            if(!michal) { _fun00006_ip = 139; continue _fun00005 }
 114:
            michal = {};
            report = tangon.userId;
            michal['userId'] = report;
            tangon = tangon.roles;
            michal['roles'] = tangon;
            zuuluu = michal;
 139:
            michal = 'member';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    zuuluu['attachSerializedData'] = report;
    report = function(argFoo, argBar) { // Original name: fromBackgroundSync
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            oscard = argBar;
            tangon = michal.properties;
            zuuluu = null;
            entity = oscard;
            if(!(zuuluu != tangon)) { _fun00008_ip = 67; continue _fun00007 }
 21:
            report = _closure1_slot10;
            tangon = michal.properties;
            zuuluu = {};
            michal = oscard.joinedAt;
            zuuluu['joinedAt'] = michal;
            michal = oscard.premiumSubscriberCount;
            zuuluu['premiumSubscriberCount'] = michal;
            michal = undefined;
            entity = report.bind(michal)(tangon, zuuluu, oscard);
 67:
            return entity;
        }
    };
    zuuluu['fromBackgroundSync'] = report;
    report = function(argFoo, argBar) { // Original name: fromGuild
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = _closure1_slot10;
            michal = {};
            oscard = report.joined_at;
            entity = null;
            if(!(entity == oscard)) { _fun00010_ip = 56; continue _fun00009 }
 27:
            golfie = entity == tangon;
            oscard = undefined;
            if(golfie) { _fun00010_ip = 42; continue _fun00009 }
 36:
            oscard = tangon.joinedAt;
 42:
            golfie = entity != oscard;
            entity = null;
            if(!golfie) { _fun00010_ip = 54; continue _fun00009 }
 51:
            entity = oscard;
 54:
            _fun00010_ip = 90; continue _fun00009;
 56:
            oscard = global;
            option = oscard.Date;
            yankee = report.joined_at;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            romeon = golfie;
            oscard = new romeon[option](yankee, offset);
            entity = oscard instanceof Object ? oscard : golfie;
 90:
            michal['joinedAt'] = entity;
            entity = report.premium_subscription_count;
            michal['premiumSubscriberCount'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(report, michal, tangon);
            return entity;
        }
    };
    zuuluu['fromGuild'] = report;
    report = function(argFoo) { // Original name: fromInviteGuild
        tangon = argFoo;
        zuuluu = _closure1_slot11;
        michal = {};
        report = tangon.id;
        michal['id'] = report;
        report = tangon.name;
        michal['name'] = report;
        report = tangon.description;
        michal['description'] = report;
        report = tangon.icon;
        michal['icon'] = report;
        report = tangon.splash;
        michal['splash'] = report;
        report = tangon.banner;
        michal['banner'] = report;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 3;
        report = report[entity];
        entity = undefined;
        golfie = oscard.bind(entity)(report);
        oscard = golfie.toSetInplace;
        report = tangon.features;
        report = oscard.bind(golfie)(report);
        michal['features'] = report;
        report = tangon.verification_level;
        michal['verificationLevel'] = report;
        report = tangon.vanity_url_code;
        michal['vanityURLCode'] = report;
        report = tangon.premium_subscription_count;
        michal['premiumSubscriberCount'] = report;
        report = tangon.nsfw_level;
        michal['nsfwLevel'] = report;
        report = tangon.premium_tier;
        michal['premiumTier'] = report;
        tangon = tangon.home_header;
        michal['homeHeader'] = tangon;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['fromInviteGuild'] = report;
    report = function(argFoo) { // Original name: fromGuildProfile
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot11;
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = tangon.name;
            michal['name'] = report;
            report = tangon.description;
            michal['description'] = report;
            report = tangon.icon;
            michal['icon'] = report;
            report = tangon.premiumSubscriberCount;
            oscard = null;
            if(!(oscard == report)) { _fun00012_ip = 70; continue _fun00011 }
 60:
            golfie = _closure1_slot7;
            report = golfie.premiumSubscriberCount;
 70:
            michal['premiumSubscriberCount'] = report;
            report = tangon.premiumTier;
            if(!(oscard == report)) { _fun00012_ip = 95; continue _fun00011 }
 85:
            oscard = _closure1_slot7;
            report = oscard.premiumTier;
 95:
            michal['premiumTier'] = report;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.toSetInplace;
            tangon = tangon.features;
            tangon = report.bind(oscard)(tangon);
            michal['features'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['fromGuildProfile'] = report;
    report = function(argFoo) { // Original name: fromStoreListingGuild
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = _closure1_slot11;
            michal = {};
            tangon = entity.id;
            michal['id'] = tangon;
            tangon = entity.name;
            michal['name'] = tangon;
            tangon = entity.icon;
            entity = null;
            report = entity != tangon;
            if(!report) { _fun00014_ip = 47; continue _fun00013 }
 44:
            entity = tangon;
 47:
            michal['icon'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['fromStoreListingGuild'] = report;
    report = function(argFoo) { // Original name: fromDirectoryGuild
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot11;
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = tangon.name;
            michal['name'] = report;
            golfie = tangon.icon;
            report = null;
            option = report != golfie;
            oscard = null;
            if(!option) { _fun00016_ip = 49; continue _fun00015 }
 46:
            oscard = golfie;
 49:
            michal['icon'] = oscard;
            golfie = tangon.description;
            option = report != golfie;
            oscard = null;
            if(!option) { _fun00016_ip = 70; continue _fun00015 }
 67:
            oscard = golfie;
 70:
            michal['description'] = oscard;
            oscard = tangon.splash;
            golfie = report != oscard;
            report = null;
            if(!golfie) { _fun00016_ip = 92; continue _fun00015 }
 89:
            report = oscard;
 92:
            michal['splash'] = report;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.toSetInplace;
            tangon = tangon.features;
            tangon = report.bind(oscard)(tangon);
            michal['features'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['fromDirectoryGuild'] = report;
    report = function(argFoo) { // Original name: fromGuildDirectoryEntry
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot11;
            michal = {};
            report = tangon.guildId;
            michal['id'] = report;
            golfie = tangon.name;
            report = null;
            option = report != golfie;
            oscard = '';
            if(!option) { _fun00018_ip = 42; continue _fun00017 }
 39:
            oscard = golfie;
 42:
            michal['name'] = oscard;
            golfie = tangon.icon;
            option = report != golfie;
            oscard = null;
            if(!option) { _fun00018_ip = 63; continue _fun00017 }
 60:
            oscard = golfie;
 63:
            michal['icon'] = oscard;
            golfie = tangon.description;
            option = report != golfie;
            oscard = null;
            if(!option) { _fun00018_ip = 84; continue _fun00017 }
 81:
            oscard = golfie;
 84:
            michal['description'] = oscard;
            oscard = tangon.splash;
            golfie = report != oscard;
            report = null;
            if(!golfie) { _fun00018_ip = 106; continue _fun00017 }
 103:
            report = oscard;
 106:
            michal['splash'] = report;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.toSetInplace;
            tangon = tangon.features;
            tangon = report.bind(oscard)(tangon);
            michal['features'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['fromGuildDirectoryEntry'] = report;
    report = function(argFoo) { // Original name: fromVerificationGateGuild
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot11;
            michal = {};
            entity = tangon.id;
            michal['id'] = entity;
            entity = tangon.name;
            michal['name'] = entity;
            golfie = tangon.icon;
            oscard = null;
            option = oscard != golfie;
            entity = null;
            if(!option) { _fun00020_ip = 49; continue _fun00019 }
 46:
            entity = golfie;
 49:
            michal['icon'] = entity;
            golfie = tangon.description;
            option = oscard != golfie;
            entity = null;
            if(!option) { _fun00020_ip = 70; continue _fun00019 }
 67:
            entity = golfie;
 70:
            michal['description'] = entity;
            golfie = tangon.splash;
            option = oscard != golfie;
            entity = null;
            if(!option) { _fun00020_ip = 92; continue _fun00019 }
 89:
            entity = golfie;
 92:
            michal['splash'] = entity;
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 3;
            golfie = golfie[entity];
            entity = undefined;
            verify = option.bind(entity)(golfie);
            option = verify.toSetInplace;
            golfie = tangon.features;
            golfie = option.bind(verify)(golfie);
            michal['features'] = golfie;
            tangon = tangon.verification_level;
            if(!(oscard == tangon)) { _fun00020_ip = 161; continue _fun00019 }
 151:
            report = _closure1_slot7;
            tangon = report.verificationLevel;
 161:
            michal['verificationLevel'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['fromVerificationGateGuild'] = report;
    report = function(argFoo) { // Original name: fromClientDiscoverableGuild
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot11;
            michal = {};
            entity = report.id;
            michal['id'] = entity;
            entity = report.name;
            michal['name'] = entity;
            oscard = report.description;
            tangon = null;
            option = tangon != oscard;
            entity = null;
            if(!option) { _fun00022_ip = 49; continue _fun00021 }
 46:
            entity = oscard;
 49:
            michal['description'] = entity;
            oscard = report.splash;
            option = tangon != oscard;
            entity = null;
            if(!option) { _fun00022_ip = 71; continue _fun00021 }
 68:
            entity = oscard;
 71:
            michal['splash'] = entity;
            oscard = report.banner;
            option = tangon != oscard;
            entity = null;
            if(!option) { _fun00022_ip = 94; continue _fun00021 }
 91:
            entity = oscard;
 94:
            michal['banner'] = entity;
            entity = report.preferredLocale;
            if(!(tangon == entity)) { _fun00022_ip = 119; continue _fun00021 }
 109:
            oscard = _closure1_slot7;
            entity = oscard.preferredLocale;
 119:
            michal['preferredLocale'] = entity;
            oscard = report.icon;
            option = tangon != oscard;
            entity = null;
            if(!option) { _fun00022_ip = 141; continue _fun00021 }
 138:
            entity = oscard;
 141:
            michal['icon'] = entity;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 3;
            oscard = oscard[entity];
            entity = undefined;
            verify = option.bind(entity)(oscard);
            option = verify.toSetInplace;
            oscard = report.features;
            oscard = option.bind(verify)(oscard);
            michal['features'] = oscard;
            oscard = report.premiumSubscriptionCount;
            if(!(tangon == oscard)) { _fun00022_ip = 209; continue _fun00021 }
 199:
            golfie = _closure1_slot7;
            oscard = golfie.premiumSubscriberCount;
 209:
            michal['premiumSubscriberCount'] = oscard;
            report = report.discoverySplash;
            oscard = tangon != report;
            tangon = null;
            if(!oscard) { _fun00022_ip = 232; continue _fun00021 }
 229:
            tangon = report;
 232:
            michal['discoverySplash'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['fromClientDiscoverableGuild'] = report;
    report = function(argFoo) { // Original name: fromGuildBasic
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot11;
            michal = {};
            report = tangon.id;
            michal['id'] = report;
            report = tangon.name;
            michal['name'] = report;
            golfie = tangon.icon;
            report = null;
            option = report != golfie;
            oscard = null;
            if(!option) { _fun00024_ip = 49; continue _fun00023 }
 46:
            oscard = golfie;
 49:
            michal['icon'] = oscard;
            golfie = tangon.description;
            option = report != golfie;
            oscard = null;
            if(!option) { _fun00024_ip = 70; continue _fun00023 }
 67:
            oscard = golfie;
 70:
            michal['description'] = oscard;
            golfie = tangon.splash;
            option = report != golfie;
            oscard = null;
            if(!option) { _fun00024_ip = 92; continue _fun00023 }
 89:
            oscard = golfie;
 92:
            michal['splash'] = oscard;
            oscard = tangon.discovery_splash;
            golfie = report != oscard;
            report = null;
            if(!golfie) { _fun00024_ip = 115; continue _fun00023 }
 112:
            report = oscard;
 115:
            michal['discoverySplash'] = report;
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            entity = 3;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.toSetInplace;
            tangon = tangon.features;
            tangon = report.bind(oscard)(tangon);
            michal['features'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['fromGuildBasic'] = report;
    report = function(argFoo) { // Original name: dangerouslyConstructGuildRecordFromUntypedObject
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            report = argFoo;
            zuuluu = _closure1_slot12;
            michal = {};
            entity = report.id;
            michal['id'] = entity;
            entity = report.name;
            if(entity) { _fun00026_ip = 33; continue _fun00025 }
 29:
            entity = '';
 33:
            michal['name'] = entity;
            entity = report.description;
            if(entity) { _fun00026_ip = 47; continue _fun00025 }
 45:
            entity = null;
 47:
            michal['description'] = entity;
            entity = report.ownerId;
            if(entity) { _fun00026_ip = 62; continue _fun00025 }
 60:
            entity = null;
 62:
            michal['ownerId'] = entity;
            entity = report.icon;
            if(entity) { _fun00026_ip = 77; continue _fun00025 }
 75:
            entity = null;
 77:
            michal['icon'] = entity;
            entity = report.splash;
            if(entity) { _fun00026_ip = 92; continue _fun00025 }
 90:
            entity = null;
 92:
            michal['splash'] = entity;
            entity = report.banner;
            if(entity) { _fun00026_ip = 108; continue _fun00025 }
 106:
            entity = null;
 108:
            michal['banner'] = entity;
            entity = report.homeHeader;
            if(entity) { _fun00026_ip = 124; continue _fun00025 }
 122:
            entity = null;
 124:
            michal['homeHeader'] = entity;
            oscard = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 3;
            tangon = tangon[entity];
            entity = undefined;
            option = oscard.bind(entity)(tangon);
            oscard = option.toSetInplace;
            tangon = report.features;
            tangon = oscard.bind(option)(tangon);
            michal['features'] = tangon;
            tangon = report.preferredLocale;
            if(tangon) { _fun00026_ip = 192; continue _fun00025 }
 182:
            oscard = _closure1_slot7;
            tangon = oscard.preferredLocale;
 192:
            michal['preferredLocale'] = tangon;
            tangon = report.afkChannelId;
            if(tangon) { _fun00026_ip = 208; continue _fun00025 }
 206:
            tangon = null;
 208:
            michal['afkChannelId'] = tangon;
            tangon = report.afkTimeout;
            michal['afkTimeout'] = tangon;
            tangon = report.systemChannelId;
            if(tangon) { _fun00026_ip = 235; continue _fun00025 }
 233:
            tangon = null;
 235:
            michal['systemChannelId'] = tangon;
            tangon = report.verificationLevel;
            if(tangon) { _fun00026_ip = 259; continue _fun00025 }
 249:
            oscard = _closure1_slot7;
            tangon = oscard.verificationLevel;
 259:
            michal['verificationLevel'] = tangon;
            oscard = report.joinedAt;
            option = global;
            tangon = option.Date;
            tangon = oscard instanceof tangon;
            oscard = report.joinedAt;
            if(tangon) { _fun00026_ip = 339; continue _fun00025 }
 291:
            tangon = null;
            if(!(tangon == oscard)) { _fun00026_ip = 305; continue _fun00025 }
 297:
            tangon = report.joinedAt;
            _fun00026_ip = 337; continue _fun00025;
 305:
            offset = option.Date;
            yankee = report.joinedAt;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            romeon = verify;
            option = new romeon[offset](yankee, offset);
            tangon = option instanceof Object ? option : verify;
 337:
            _fun00026_ip = 342; continue _fun00025;
 339:
            tangon = oscard;
 342:
            michal['joinedAt'] = tangon;
            tangon = report.defaultMessageNotifications;
            if(tangon) { _fun00026_ip = 366; continue _fun00025 }
 356:
            oscard = _closure1_slot7;
            tangon = oscard.defaultMessageNotifications;
 366:
            michal['defaultMessageNotifications'] = tangon;
            tangon = report.mfaLevel;
            if(tangon) { _fun00026_ip = 390; continue _fun00025 }
 380:
            oscard = _closure1_slot7;
            tangon = oscard.mfaLevel;
 390:
            michal['mfaLevel'] = tangon;
            tangon = report.application_id;
            if(tangon) { _fun00026_ip = 406; continue _fun00025 }
 404:
            tangon = null;
 406:
            michal['application_id'] = tangon;
            tangon = report.explicitContentFilter;
            if(tangon) { _fun00026_ip = 430; continue _fun00025 }
 420:
            oscard = _closure1_slot7;
            tangon = oscard.explicitContentFilter;
 430:
            michal['explicitContentFilter'] = tangon;
            tangon = report.vanityURLCode;
            if(tangon) { _fun00026_ip = 446; continue _fun00025 }
 444:
            tangon = null;
 446:
            michal['vanityURLCode'] = tangon;
            tangon = report.premiumTier;
            if(tangon) { _fun00026_ip = 470; continue _fun00025 }
 460:
            oscard = _closure1_slot7;
            tangon = oscard.premiumTier;
 470:
            michal['premiumTier'] = tangon;
            tangon = report.premiumSubscriberCount;
            if(tangon) { _fun00026_ip = 494; continue _fun00025 }
 484:
            oscard = _closure1_slot7;
            tangon = oscard.premiumSubscriberCount;
 494:
            michal['premiumSubscriberCount'] = tangon;
            tangon = report.premiumProgressBarEnabled;
            if(tangon) { _fun00026_ip = 518; continue _fun00025 }
 508:
            oscard = _closure1_slot7;
            tangon = oscard.premiumProgressBarEnabled;
 518:
            michal['premiumProgressBarEnabled'] = tangon;
            tangon = report.systemChannelFlags;
            michal['systemChannelFlags'] = tangon;
            tangon = report.discoverySplash;
            if(tangon) { _fun00026_ip = 545; continue _fun00025 }
 543:
            tangon = null;
 545:
            michal['discoverySplash'] = tangon;
            tangon = report.rulesChannelId;
            if(tangon) { _fun00026_ip = 561; continue _fun00025 }
 559:
            tangon = null;
 561:
            michal['rulesChannelId'] = tangon;
            tangon = report.safetyAlertsChannelId;
            if(tangon) { _fun00026_ip = 577; continue _fun00025 }
 575:
            tangon = null;
 577:
            michal['safetyAlertsChannelId'] = tangon;
            tangon = report.publicUpdatesChannelId;
            if(tangon) { _fun00026_ip = 593; continue _fun00025 }
 591:
            tangon = null;
 593:
            michal['publicUpdatesChannelId'] = tangon;
            tangon = report.maxStageVideoChannelUsers;
            if(tangon) { _fun00026_ip = 617; continue _fun00025 }
 607:
            oscard = _closure1_slot7;
            tangon = oscard.maxStageVideoChannelUsers;
 617:
            michal['maxStageVideoChannelUsers'] = tangon;
            tangon = report.maxVideoChannelUsers;
            if(tangon) { _fun00026_ip = 641; continue _fun00025 }
 631:
            oscard = _closure1_slot7;
            tangon = oscard.maxVideoChannelUsers;
 641:
            michal['maxVideoChannelUsers'] = tangon;
            tangon = report.maxMembers;
            if(tangon) { _fun00026_ip = 665; continue _fun00025 }
 655:
            oscard = _closure1_slot7;
            tangon = oscard.maxMembers;
 665:
            michal['maxMembers'] = tangon;
            oscard = report.nsfwLevel;
            tangon = null;
            if(!(tangon == oscard)) { _fun00026_ip = 692; continue _fun00025 }
 682:
            golfie = _closure1_slot7;
            oscard = golfie.nsfwLevel;
 692:
            michal['nsfwLevel'] = oscard;
            golfie = report.ownerConfiguredContentLevel;
            option = tangon != golfie;
            oscard = null;
            if(!option) { _fun00026_ip = 715; continue _fun00025 }
 712:
            oscard = golfie;
 715:
            michal['ownerConfiguredContentLevel'] = oscard;
            oscard = report.hubType;
            michal['hubType'] = oscard;
            golfie = report.latestOnboardingQuestionId;
            option = tangon != golfie;
            oscard = null;
            if(!option) { _fun00026_ip = 749; continue _fun00025 }
 746:
            oscard = golfie;
 749:
            michal['latestOnboardingQuestionId'] = oscard;
            golfie = report.profile;
            option = tangon != golfie;
            oscard = null;
            if(!option) { _fun00026_ip = 772; continue _fun00025 }
 769:
            oscard = golfie;
 772:
            michal['profile'] = oscard;
            golfie = report.premiumFeatures;
            option = tangon != golfie;
            oscard = null;
            if(!option) { _fun00026_ip = 795; continue _fun00025 }
 792:
            oscard = golfie;
 795:
            michal['premiumFeatures'] = oscard;
            report = report.moderatorReporting;
            oscard = tangon != report;
            tangon = null;
            if(!oscard) { _fun00026_ip = 818; continue _fun00025 }
 815:
            tangon = report;
 818:
            michal['moderatorReporting'] = tangon;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        }
    };
    zuuluu['dangerouslyConstructGuildRecordFromUntypedObject'] = report;
    report = function(argFoo) { // Original name: toGuildProperties
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            entity = {};
            michal = tangon.id;
            entity['id'] = michal;
            michal = tangon.name;
            entity['name'] = michal;
            michal = tangon.description;
            entity['description'] = michal;
            michal = tangon.icon;
            entity['icon'] = michal;
            michal = tangon.splash;
            entity['splash'] = michal;
            michal = tangon.banner;
            entity['banner'] = michal;
            michal = tangon.homeHeader;
            entity['home_header'] = michal;
            michal = global;
            report = michal.Array;
            zuuluu = report.from;
            michal = tangon.features;
            michal = zuuluu.bind(report)(michal);
            entity['features'] = michal;
            michal = tangon.preferredLocale;
            entity['preferred_locale'] = michal;
            michal = tangon.ownerId;
            entity['owner_id'] = michal;
            michal = tangon.application_id;
            entity['application_id'] = michal;
            michal = tangon.afkChannelId;
            entity['afk_channel_id'] = michal;
            michal = tangon.afkTimeout;
            entity['afk_timeout'] = michal;
            michal = tangon.systemChannelId;
            entity['system_channel_id'] = michal;
            michal = tangon.verificationLevel;
            entity['verification_level'] = michal;
            michal = tangon.explicitContentFilter;
            entity['explicit_content_filter'] = michal;
            michal = tangon.defaultMessageNotifications;
            entity['default_message_notifications'] = michal;
            michal = tangon.mfaLevel;
            entity['mfa_level'] = michal;
            report = tangon.vanityURLCode;
            michal = null;
            oscard = michal != report;
            zuuluu = null;
            if(!oscard) { _fun00028_ip = 233; continue _fun00027 }
 230:
            zuuluu = report;
 233:
            entity['vanity_url_code'] = zuuluu;
            zuuluu = tangon.premiumTier;
            entity['premium_tier'] = zuuluu;
            zuuluu = tangon.premiumProgressBarEnabled;
            entity['premium_progress_bar_enabled'] = zuuluu;
            zuuluu = tangon.premiumFeatures;
            report = michal != zuuluu;
            zuuluu = null;
            if(!report) { _fun00028_ip = 330; continue _fun00027 }
 275:
            oscard = tangon.premiumFeatures;
            report = {};
            golfie = oscard.features;
            report['features'] = golfie;
            golfie = oscard.additionalEmojiSlots;
            report['additional_emoji_slots'] = golfie;
            golfie = oscard.additionalStickerSlots;
            report['additional_sticker_slots'] = golfie;
            oscard = oscard.additionalSoundSlots;
            report['additional_sound_slots'] = oscard;
            zuuluu = report;
 330:
            entity['premium_features'] = zuuluu;
            zuuluu = tangon.systemChannelFlags;
            entity['system_channel_flags'] = zuuluu;
            zuuluu = tangon.discoverySplash;
            entity['discovery_splash'] = zuuluu;
            zuuluu = tangon.rulesChannelId;
            entity['rules_channel_id'] = zuuluu;
            zuuluu = tangon.safetyAlertsChannelId;
            entity['safety_alerts_channel_id'] = zuuluu;
            zuuluu = tangon.publicUpdatesChannelId;
            entity['public_updates_channel_id'] = zuuluu;
            zuuluu = tangon.maxStageVideoChannelUsers;
            entity['max_stage_video_channel_users'] = zuuluu;
            zuuluu = tangon.maxVideoChannelUsers;
            entity['max_video_channel_users'] = zuuluu;
            zuuluu = tangon.maxMembers;
            entity['max_members'] = zuuluu;
            zuuluu = tangon.nsfwLevel;
            entity['nsfw_level'] = zuuluu;
            zuuluu = _closure1_slot9;
            report = zuuluu.AGE_RESTRICTED;
            oscard = new Array(2);
            oscard[0] = report;
            zuuluu = zuuluu.EXPLICIT;
            oscard[1] = zuuluu;
            report = oscard.includes;
            zuuluu = tangon.nsfwLevel;
            zuuluu = report.bind(oscard)(zuuluu);
            entity['nsfw'] = zuuluu;
            zuuluu = tangon.ownerConfiguredContentLevel;
            entity['owner_configured_content_level'] = zuuluu;
            zuuluu = tangon.hubType;
            entity['hub_type'] = zuuluu;
            zuuluu = tangon.latestOnboardingQuestionId;
            entity['latest_onboarding_question_id'] = zuuluu;
            zuuluu = tangon.profile;
            entity['profile'] = zuuluu;
            zuuluu = tangon.moderatorReporting;
            report = michal != zuuluu;
            zuuluu = null;
            if(!report) { _fun00028_ip = 578; continue _fun00027 }
 545:
            report = tangon.moderatorReporting;
            tangon = {};
            oscard = report.moderatorReportingEnabled;
            tangon['moderator_reporting_enabled'] = oscard;
            report = report.moderatorReportChannelId;
            tangon['moderator_report_channel_id'] = report;
            zuuluu = tangon;
 578:
            entity['moderator_reporting'] = zuuluu;
            entity['incidents_data'] = michal;
            return entity;
        }
    };
    zuuluu['toGuildProperties'] = report;
    tangon = function(argFoo) { // Original name: fromSerializedGuildRecord
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            tangon = argFoo;
            zuuluu = {};
            verify = zuuluu;
            option = tangon;
            entity = copyDataProperties(verify, option);
            oscard = _closure1_slot0;
            report = _closure1_slot2;
            michal = 3;
            report = report[michal];
            michal = undefined;
            golfie = oscard.bind(michal)(report);
            oscard = golfie.toSetInplace;
            report = tangon.features;
            oscard = oscard.bind(golfie)(report);
            report = 'features';
            zuuluu[report] = oscard;
            oscard = tangon.joinedAt;
            report = null;
            oscard = report != oscard;
            if(!oscard) { _fun00030_ip = 115; continue _fun00029 }
 81:
            oscard = global;
            golfie = oscard.Date;
            verify = tangon.joinedAt;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            offset = oscard;
            tangon = new offset[golfie](verify, option);
            report = tangon instanceof Object ? tangon : oscard;
 115:
            tangon = 'joinedAt';
            zuuluu[tangon] = report;
            tangon = delete zuuluu.roles;
            tangon = delete zuuluu.member;
            entity = _closure1_slot12;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    zuuluu['fromSerializedGuildRecord'] = tangon;
    zuuluu['constructFromPartialGuildRecord'] = michal;
    return entity;
})();
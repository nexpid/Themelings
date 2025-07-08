// app/utils/GuildRecordUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    verify = argBar;
    romeon = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = romeon;
    var _closure1_slot2 = offset;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot12;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot12;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    golfie = function(argFoo) { // Original name: fromPremiumFeatures
        michal = argFoo;
        entity = {};
        zuuluu = michal.features;
        entity['features'] = zuuluu;
        zuuluu = michal.additional_emoji_slots;
        entity['additionalEmojiSlots'] = zuuluu;
        zuuluu = michal.additional_sticker_slots;
        entity['additionalStickerSlots'] = zuuluu;
        michal = michal.additional_sound_slots;
        entity['additionalSoundSlots'] = michal;
        return entity;
    };
    var _closure1_slot13 = golfie;
    oscard = function(argFoo) { // Original name: toPremiumFeatures
        michal = argFoo;
        entity = {};
        zuuluu = michal.features;
        entity['features'] = zuuluu;
        zuuluu = michal.additionalEmojiSlots;
        entity['additional_emoji_slots'] = zuuluu;
        zuuluu = michal.additionalStickerSlots;
        entity['additional_sticker_slots'] = zuuluu;
        michal = michal.additionalSoundSlots;
        entity['additional_sound_slots'] = michal;
        return entity;
    };
    var _closure1_slot14 = oscard;
    report = function(argFoo) { // Original name: fromModeratorReporting
        michal = argFoo;
        entity = {};
        zuuluu = michal.moderator_reporting_enabled;
        entity['moderatorReportingEnabled'] = zuuluu;
        michal = michal.moderator_report_channel_id;
        entity['moderatorReportChannelId'] = michal;
        return entity;
    };
    var _closure1_slot15 = report;
    tangon = function(argFoo) { // Original name: toServer
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
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
            if(!oscard) { _fun00008_ip = 233; continue _fun00007 }
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
            if(!report) { _fun00008_ip = 295; continue _fun00007 }
 275:
            golfie = _closure1_slot14;
            oscard = tangon.premiumFeatures;
            report = undefined;
            zuuluu = golfie.bind(report)(oscard);
 295:
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
            report = _closure1_slot7;
            report = report.AGE_RESTRICTED;
            oscard = new Array(2);
            oscard[0] = report;
            zuuluu = _closure1_slot7;
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
            if(!report) { _fun00008_ip = 547; continue _fun00007 }
 514:
            report = tangon.moderatorReporting;
            tangon = {};
            oscard = report.moderatorReportingEnabled;
            tangon['moderator_reporting_enabled'] = oscard;
            report = report.moderatorReportChannelId;
            tangon['moderator_report_channel_id'] = report;
            zuuluu = tangon;
 547:
            entity['moderator_reporting'] = zuuluu;
            entity['incidents_data'] = michal;
            return entity;
        }
    };
    var _closure1_slot16 = tangon;
    entity = global;
    foxtra = entity.Object;
    yankee = foxtra.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(foxtra)(zuuluu, entity, option);
    option = 0;
    yankee = offset[option];
    entity = undefined;
    yankee = romeon.bind(entity)(yankee);
    var _closure1_slot3 = yankee;
    option = offset[option];
    option = verify.bind(entity)(option);
    option = option.GuildRecordWithRoles;
    var _closure1_slot4 = option;
    option = 1;
    option = offset[option];
    option = verify.bind(entity)(option);
    yankee = option.BoostedGuildTiers;
    var _closure1_slot5 = yankee;
    yankee = option.GuildExplicitContentFilterTypes;
    var _closure1_slot6 = yankee;
    yankee = option.GuildNSFWContentLevel;
    var _closure1_slot7 = yankee;
    yankee = option.MFALevels;
    var _closure1_slot8 = yankee;
    yankee = option.UserNotificationSettings;
    var _closure1_slot9 = yankee;
    option = option.VerificationLevels;
    var _closure1_slot10 = option;
    option = 5;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'utils/GuildRecordUtils.tsx';
    option = verify.bind(offset)(option);
    option = function(argFoo, argBar) { // Original name: fromServer
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            michal = zuuluu.joined_at;
            entity = null;
            if(!(entity == michal)) { _fun00010_ip = 35; continue _fun00009 }
 18:
            michal = entity == tangon;
            oscard = undefined;
            if(michal) { _fun00010_ip = 33; continue _fun00009 }
 27:
            oscard = tangon.joinedAt;
 33:
            _fun00010_ip = 69; continue _fun00009;
 35:
            michal = global;
            golfie = michal.Date;
            romeon = zuuluu.joined_at;
            report = golfie.prototype;
            report = Object.create(report, {constructor: {value: golfie}});
            foxtra = report;
            michal = new foxtra[golfie](romeon, yankee);
            oscard = michal instanceof Object ? michal : report;
 69:
            golfie = zuuluu.premium_subscription_count;
            option = entity != golfie;
            report = 0;
            if(!option) { _fun00010_ip = 87; continue _fun00009 }
 84:
            report = golfie;
 87:
            golfie = zuuluu.properties;
            if(!(entity != golfie)) { _fun00010_ip = 1082; continue _fun00009 }
 100:
            verify = {};
            golfie = zuuluu.id;
            verify['id'] = golfie;
            verify['joinedAt'] = oscard;
            verify['premiumSubscriberCount'] = report;
            golfie = zuuluu.properties;
            option = golfie.name;
            offset = entity != option;
            golfie = '';
            if(!offset) { _fun00010_ip = 146; continue _fun00009 }
 143:
            golfie = option;
 146:
            verify['name'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.description;
            verify['description'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.icon;
            verify['icon'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.splash;
            verify['splash'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.banner;
            verify['banner'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.home_header;
            verify['homeHeader'] = golfie;
            golfie = global;
            offset = golfie.Set;
            golfie = zuuluu.properties;
            golfie = golfie.features;
            if(!(entity == golfie)) { _fun00010_ip = 259; continue _fun00009 }
 255:
            golfie = new Array(0);
 259:
            option = offset.prototype;
            option = Object.create(option, {constructor: {value: offset}});
            foxtra = option;
            romeon = golfie;
            golfie = new foxtra[offset](romeon, yankee);
            golfie = golfie instanceof Object ? golfie : option;
            verify['features'] = golfie;
            golfie = zuuluu.properties;
            option = golfie.preferred_locale;
            offset = entity != option;
            golfie = 'en-us';
            if(!offset) { _fun00010_ip = 315; continue _fun00009 }
 312:
            golfie = option;
 315:
            verify['preferredLocale'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.owner_id;
            verify['ownerId'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.application_id;
            verify['application_id'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.afk_channel_id;
            verify['afkChannelId'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.afk_timeout;
            option = entity != golfie;
            michal = 0;
            if(!option) { _fun00010_ip = 395; continue _fun00009 }
 392:
            michal = golfie;
 395:
            verify['afkTimeout'] = michal;
            michal = zuuluu.properties;
            michal = michal.system_channel_id;
            verify['systemChannelId'] = michal;
            michal = zuuluu.properties;
            michal = michal.verification_level;
            if(!(entity == michal)) { _fun00010_ip = 446; continue _fun00009 }
 433:
            golfie = _closure1_slot10;
            michal = golfie.NONE;
 446:
            verify['verificationLevel'] = michal;
            michal = zuuluu.properties;
            michal = michal.explicit_content_filter;
            if(!(entity == michal)) { _fun00010_ip = 480; continue _fun00009 }
 467:
            golfie = _closure1_slot6;
            michal = golfie.DISABLED;
 480:
            verify['explicitContentFilter'] = michal;
            michal = zuuluu.properties;
            michal = michal.default_message_notifications;
            if(!(entity == michal)) { _fun00010_ip = 514; continue _fun00009 }
 501:
            golfie = _closure1_slot9;
            michal = golfie.ALL_MESSAGES;
 514:
            verify['defaultMessageNotifications'] = michal;
            michal = zuuluu.properties;
            michal = michal.mfa_level;
            if(!(entity == michal)) { _fun00010_ip = 548; continue _fun00009 }
 535:
            golfie = _closure1_slot8;
            michal = golfie.NONE;
 548:
            verify['mfaLevel'] = michal;
            michal = zuuluu.properties;
            michal = michal.vanity_url_code;
            verify['vanityURLCode'] = michal;
            michal = zuuluu.properties;
            michal = michal.premium_tier;
            if(!(entity == michal)) { _fun00010_ip = 599; continue _fun00009 }
 586:
            golfie = _closure1_slot5;
            michal = golfie.NONE;
 599:
            verify['premiumTier'] = michal;
            michal = zuuluu.properties;
            michal = michal.premium_progress_bar_enabled;
            if(michal) { _fun00010_ip = 621; continue _fun00009 }
 619:
            michal = false;
 621:
            verify['premiumProgressBarEnabled'] = michal;
            michal = zuuluu.properties;
            michal = michal.system_channel_flags;
            verify['systemChannelFlags'] = michal;
            michal = zuuluu.properties;
            michal = michal.discovery_splash;
            verify['discoverySplash'] = michal;
            michal = zuuluu.properties;
            michal = michal.rules_channel_id;
            verify['rulesChannelId'] = michal;
            michal = zuuluu.properties;
            michal = michal.safety_alerts_channel_id;
            verify['safetyAlertsChannelId'] = michal;
            michal = zuuluu.properties;
            michal = michal.public_updates_channel_id;
            verify['publicUpdatesChannelId'] = michal;
            michal = zuuluu.properties;
            option = michal.max_stage_video_channel_users;
            offset = entity != option;
            michal = -1;
            golfie = michal;
            if(!offset) { _fun00010_ip = 742; continue _fun00009 }
 739:
            golfie = option;
 742:
            verify['maxStageVideoChannelUsers'] = golfie;
            golfie = zuuluu.properties;
            option = golfie.max_video_channel_users;
            offset = entity != option;
            golfie = michal;
            if(!offset) { _fun00010_ip = 772; continue _fun00009 }
 769:
            golfie = option;
 772:
            verify['maxVideoChannelUsers'] = golfie;
            golfie = zuuluu.properties;
            golfie = golfie.max_members;
            option = entity != golfie;
            if(!option) { _fun00010_ip = 799; continue _fun00009 }
 796:
            michal = golfie;
 799:
            verify['maxMembers'] = michal;
            michal = zuuluu.properties;
            michal = michal.nsfw_level;
            if(!(entity == michal)) { _fun00010_ip = 833; continue _fun00009 }
 820:
            golfie = _closure1_slot7;
            michal = golfie.DEFAULT;
 833:
            verify['nsfwLevel'] = michal;
            michal = zuuluu.properties;
            golfie = michal.owner_configured_content_level;
            option = entity != golfie;
            michal = null;
            if(!option) { _fun00010_ip = 862; continue _fun00009 }
 859:
            michal = golfie;
 862:
            verify['ownerConfiguredContentLevel'] = michal;
            michal = zuuluu.properties;
            michal = michal.hub_type;
            verify['hubType'] = michal;
            michal = zuuluu.properties;
            michal = michal.latest_onboarding_question_id;
            verify['latestOnboardingQuestionId'] = michal;
            michal = zuuluu.properties;
            michal = michal.profile;
            verify['profile'] = michal;
            michal = zuuluu.properties;
            michal = michal.premium_features;
            golfie = entity != michal;
            michal = null;
            if(!golfie) { _fun00010_ip = 965; continue _fun00009 }
 939:
            offset = _closure1_slot13;
            golfie = zuuluu.properties;
            option = golfie.premium_features;
            golfie = undefined;
            michal = offset.bind(golfie)(option);
 965:
            verify['premiumFeatures'] = michal;
            michal = zuuluu.properties;
            michal = michal.moderator_reporting;
            golfie = entity != michal;
            michal = null;
            if(!golfie) { _fun00010_ip = 1017; continue _fun00009 }
 991:
            option = _closure1_slot15;
            zuuluu = zuuluu.properties;
            golfie = zuuluu.moderator_reporting;
            zuuluu = undefined;
            michal = option.bind(zuuluu)(golfie);
 1017:
            verify['moderatorReporting'] = michal;
            if(!(entity != tangon)) { _fun00010_ip = 1039; continue _fun00009 }
 1026:
            michal = tangon.merge;
            michal = michal.bind(tangon)(verify);
            _fun00010_ip = 1080; continue _fun00009;
 1039:
            offset = _closure1_slot0;
            option = _closure1_slot2;
            golfie = 3;
            option = option[golfie];
            golfie = undefined;
            option = offset.bind(golfie)(option);
            golfie = option.dangerouslyCast;
            zuuluu = _closure1_slot3;
            michal = golfie.bind(option)(verify, zuuluu);
 1080:
            return michal;
 1082:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 2;
            michal = golfie[michal];
            golfie = undefined;
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = entity != tangon;
            entity = 'If guild.properties is null, existingGuild must be passed in';
            entity = zuuluu.bind(golfie)(michal, entity);
            zuuluu = tangon.joinedAt;
            entity = global;
            michal = entity.Date;
            michal = zuuluu instanceof michal;
            golfie = tangon.joinedAt;
            if(michal) { _fun00010_ip = 1155; continue _fun00009 }
 1150:
            zuuluu = golfie;
            _fun00010_ip = 1165; continue _fun00009;
 1155:
            michal = golfie.getTime;
            zuuluu = michal.bind(golfie)();
 1165:
            entity = entity.Date;
            entity = oscard instanceof entity;
            michal = oscard;
            if(!entity) { _fun00010_ip = 1191; continue _fun00009 }
 1181:
            entity = oscard.getTime;
            michal = entity.bind(oscard)();
 1191:
            entity = tangon.premiumSubscriberCount;
            if(!(report === entity)) { _fun00010_ip = 1208; continue _fun00009 }
 1201:
            entity = tangon;
            if(!(zuuluu !== michal)) { _fun00010_ip = 1231; continue _fun00009 }
 1208:
            zuuluu = tangon.merge;
            michal = {};
            michal['joinedAt'] = oscard;
            michal['premiumSubscriberCount'] = report;
            entity = zuuluu.bind(tangon)(michal);
 1231:
            return entity;
        }
    };
    zuuluu['fromServer'] = option;
    option = function(argFoo, argBar) { // Original name: attachSerializedData
        zuuluu = _closure1_slot4;
        entity = {};
        tangon = argFoo;
        report = entity;
        michal = copyDataProperties(report, tangon);
        tangon = argBar;
        report = entity;
        michal = copyDataProperties(report, tangon);
        michal = zuuluu.prototype;
        michal = Object.create(michal, {constructor: {value: zuuluu}});
        oscard = michal;
        report = entity;
        entity = new oscard[zuuluu](report, tangon);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['attachSerializedData'] = option;
    option = function(argFoo, argBar) { // Original name: fromBackgroundSync
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            report = argFoo;
            zuuluu = argBar;
            tangon = report.properties;
            entity = null;
            if(!(entity == tangon)) { _fun00012_ip = 32; continue _fun00011 }
 18:
            oscard = _closure1_slot16;
            michal = undefined;
            tangon = oscard.bind(michal)(zuuluu);
 32:
            michal = {};
            report = report.id;
            michal['id'] = report;
            oscard = tangon.name;
            golfie = entity != oscard;
            report = '';
            if(!golfie) { _fun00012_ip = 62; continue _fun00011 }
 59:
            report = oscard;
 62:
            michal['name'] = report;
            report = tangon.description;
            michal['description'] = report;
            report = tangon.icon;
            michal['icon'] = report;
            report = tangon.splash;
            michal['splash'] = report;
            report = tangon.banner;
            michal['banner'] = report;
            report = tangon.home_header;
            michal['homeHeader'] = report;
            report = global;
            golfie = report.Set;
            report = tangon.features;
            if(!(entity == report)) { _fun00012_ip = 139; continue _fun00011 }
 135:
            report = new Array(0);
 139:
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            offset = oscard;
            verify = report;
            report = new offset[golfie](verify, option);
            report = report instanceof Object ? report : oscard;
            michal['features'] = report;
            oscard = tangon.preferred_locale;
            golfie = entity != oscard;
            report = 'en-us';
            if(!golfie) { _fun00012_ip = 189; continue _fun00011 }
 186:
            report = oscard;
 189:
            michal['preferredLocale'] = report;
            report = tangon.owner_id;
            michal['ownerId'] = report;
            report = tangon.application_id;
            michal['application_id'] = report;
            report = tangon.afk_channel_id;
            michal['afkChannelId'] = report;
            report = tangon.afk_timeout;
            michal['afkTimeout'] = report;
            report = tangon.system_channel_id;
            michal['systemChannelId'] = report;
            report = tangon.verification_level;
            if(!(entity == report)) { _fun00012_ip = 272; continue _fun00011 }
 259:
            oscard = _closure1_slot10;
            report = oscard.NONE;
 272:
            michal['verificationLevel'] = report;
            report = tangon.explicit_content_filter;
            if(!(entity == report)) { _fun00012_ip = 300; continue _fun00011 }
 287:
            oscard = _closure1_slot6;
            report = oscard.DISABLED;
 300:
            michal['explicitContentFilter'] = report;
            report = tangon.default_message_notifications;
            if(!(entity == report)) { _fun00012_ip = 328; continue _fun00011 }
 315:
            oscard = _closure1_slot9;
            report = oscard.ALL_MESSAGES;
 328:
            michal['defaultMessageNotifications'] = report;
            report = tangon.mfa_level;
            if(!(entity == report)) { _fun00012_ip = 356; continue _fun00011 }
 343:
            oscard = _closure1_slot8;
            report = oscard.NONE;
 356:
            michal['mfaLevel'] = report;
            report = tangon.vanity_url_code;
            michal['vanityURLCode'] = report;
            report = tangon.premium_tier;
            if(!(entity == report)) { _fun00012_ip = 395; continue _fun00011 }
 382:
            oscard = _closure1_slot5;
            report = oscard.NONE;
 395:
            michal['premiumTier'] = report;
            report = tangon.premium_progress_bar_enabled;
            if(report) { _fun00012_ip = 411; continue _fun00011 }
 409:
            report = false;
 411:
            michal['premiumProgressBarEnabled'] = report;
            report = tangon.system_channel_flags;
            michal['systemChannelFlags'] = report;
            report = tangon.discovery_splash;
            michal['discoverySplash'] = report;
            report = tangon.rules_channel_id;
            michal['rulesChannelId'] = report;
            report = tangon.safety_alerts_channel_id;
            michal['safetyAlertsChannelId'] = report;
            report = tangon.public_updates_channel_id;
            michal['publicUpdatesChannelId'] = report;
            golfie = tangon.max_stage_video_channel_users;
            option = entity != golfie;
            report = -1;
            oscard = report;
            if(!option) { _fun00012_ip = 496; continue _fun00011 }
 493:
            oscard = golfie;
 496:
            michal['maxStageVideoChannelUsers'] = oscard;
            golfie = tangon.max_video_channel_users;
            option = entity != golfie;
            oscard = report;
            if(!option) { _fun00012_ip = 520; continue _fun00011 }
 517:
            oscard = golfie;
 520:
            michal['maxVideoChannelUsers'] = oscard;
            oscard = tangon.max_members;
            golfie = entity != oscard;
            if(!golfie) { _fun00012_ip = 541; continue _fun00011 }
 538:
            report = oscard;
 541:
            michal['maxMembers'] = report;
            report = tangon.nsfw_level;
            if(!(entity == report)) { _fun00012_ip = 569; continue _fun00011 }
 556:
            oscard = _closure1_slot7;
            report = oscard.DEFAULT;
 569:
            michal['nsfwLevel'] = report;
            oscard = tangon.owner_configured_content_level;
            golfie = entity != oscard;
            report = null;
            if(!golfie) { _fun00012_ip = 592; continue _fun00011 }
 589:
            report = oscard;
 592:
            michal['ownerConfiguredContentLevel'] = report;
            report = tangon.hub_type;
            michal['hubType'] = report;
            report = tangon.latest_onboarding_question_id;
            michal['latestOnboardingQuestionId'] = report;
            report = tangon.profile;
            michal['profile'] = report;
            report = tangon.premium_features;
            report = entity != report;
            entity = null;
            if(!report) { _fun00012_ip = 665; continue _fun00011 }
 645:
            oscard = _closure1_slot13;
            report = tangon.premium_features;
            tangon = undefined;
            entity = oscard.bind(tangon)(report);
 665:
            michal['premiumFeatures'] = entity;
            entity = zuuluu.merge;
            entity = entity.bind(zuuluu)(michal);
            return entity;
        }
    };
    zuuluu['fromBackgroundSync'] = option;
    option = function(argFoo, argBar) { // Original name: fromServerUpdate
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            zuuluu = argBar;
            tangon = {};
            entity = oscard.id;
            tangon['id'] = entity;
            entity = oscard.name;
            tangon['name'] = entity;
            entity = oscard.description;
            tangon['description'] = entity;
            entity = oscard.icon;
            tangon['icon'] = entity;
            entity = oscard.splash;
            tangon['splash'] = entity;
            entity = oscard.banner;
            tangon['banner'] = entity;
            entity = oscard.home_header;
            tangon['homeHeader'] = entity;
            entity = oscard.features;
            tangon['features'] = entity;
            entity = oscard.preferred_locale;
            tangon['preferredLocale'] = entity;
            entity = oscard.owner_id;
            tangon['ownerId'] = entity;
            entity = oscard.application_id;
            tangon['application_id'] = entity;
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 4;
            entity = golfie[entity];
            option = undefined;
            verify = report.bind(option)(entity);
            golfie = verify.sortServerRoles;
            report = oscard.id;
            entity = oscard.roles;
            entity = golfie.bind(verify)(report, entity);
            tangon['roles'] = entity;
            entity = oscard.afk_channel_id;
            tangon['afkChannelId'] = entity;
            entity = oscard.afk_timeout;
            tangon['afkTimeout'] = entity;
            entity = oscard.system_channel_id;
            tangon['systemChannelId'] = entity;
            report = oscard.joined_at;
            entity = null;
            if(!(entity == report)) { _fun00014_ip = 236; continue _fun00013 }
 219:
            golfie = entity == zuuluu;
            report = undefined;
            if(golfie) { _fun00014_ip = 234; continue _fun00013 }
 228:
            report = zuuluu.joinedAt;
 234:
            _fun00014_ip = 270; continue _fun00013;
 236:
            golfie = global;
            offset = golfie.Date;
            romeon = oscard.joined_at;
            verify = offset.prototype;
            verify = Object.create(verify, {constructor: {value: offset}});
            foxtra = verify;
            golfie = new foxtra[offset](romeon, yankee);
            report = golfie instanceof Object ? golfie : verify;
 270:
            tangon['joinedAt'] = report;
            report = oscard.verification_level;
            tangon['verificationLevel'] = report;
            report = oscard.explicit_content_filter;
            tangon['explicitContentFilter'] = report;
            report = oscard.default_message_notifications;
            tangon['defaultMessageNotifications'] = report;
            report = oscard.mfa_level;
            tangon['mfaLevel'] = report;
            report = oscard.vanity_url_code;
            tangon['vanityURLCode'] = report;
            report = oscard.premium_tier;
            tangon['premiumTier'] = report;
            report = oscard.premium_subscription_count;
            tangon['premiumSubscriberCount'] = report;
            report = oscard.premium_progress_bar_enabled;
            tangon['premiumProgressBarEnabled'] = report;
            report = oscard.system_channel_flags;
            tangon['systemChannelFlags'] = report;
            report = oscard.discovery_splash;
            tangon['discoverySplash'] = report;
            report = oscard.rules_channel_id;
            tangon['rulesChannelId'] = report;
            report = oscard.safety_alerts_channel_id;
            tangon['safetyAlertsChannelId'] = report;
            report = oscard.public_updates_channel_id;
            tangon['publicUpdatesChannelId'] = report;
            report = oscard.max_stage_video_channel_users;
            tangon['maxStageVideoChannelUsers'] = report;
            report = oscard.max_video_channel_users;
            tangon['maxVideoChannelUsers'] = report;
            report = oscard.max_members;
            tangon['maxMembers'] = report;
            report = oscard.nsfw_level;
            tangon['nsfwLevel'] = report;
            report = oscard.owner_configured_content_level;
            tangon['ownerConfiguredContentLevel'] = report;
            report = oscard.hub_type;
            tangon['hubType'] = report;
            report = oscard.latest_onboarding_question_id;
            tangon['latestOnboardingQuestionId'] = report;
            report = oscard.profile;
            tangon['profile'] = report;
            report = oscard.premium_features;
            golfie = entity != report;
            report = null;
            if(!golfie) { _fun00014_ip = 536; continue _fun00013 }
 521:
            verify = _closure1_slot13;
            golfie = oscard.premium_features;
            report = verify.bind(option)(golfie);
 536:
            tangon['premiumFeatures'] = report;
            report = oscard.moderator_reporting;
            golfie = entity != report;
            report = null;
            if(!golfie) { _fun00014_ip = 571; continue _fun00013 }
 556:
            golfie = _closure1_slot15;
            oscard = oscard.moderator_reporting;
            report = golfie.bind(option)(oscard);
 571:
            tangon['moderatorReporting'] = report;
            if(!(entity != zuuluu)) { _fun00014_ip = 593; continue _fun00013 }
 580:
            entity = zuuluu.merge;
            entity = entity.bind(zuuluu)(tangon);
            _fun00014_ip = 620; continue _fun00013;
 593:
            michal = _closure1_slot3;
            zuuluu = michal.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
            foxtra = zuuluu;
            romeon = tangon;
            michal = new foxtra[michal](romeon, yankee);
            entity = michal instanceof Object ? michal : zuuluu;
 620:
            return entity;
        }
    };
    zuuluu['fromServerUpdate'] = option;
    zuuluu['fromPremiumFeatures'] = golfie;
    zuuluu['toPremiumFeatures'] = oscard;
    zuuluu['fromModeratorReporting'] = report;
    report = function(argFoo) { // Original name: fromInviteGuild
        entity = argFoo;
        zuuluu = {};
        michal = entity.id;
        zuuluu['id'] = michal;
        michal = entity.name;
        zuuluu['name'] = michal;
        michal = entity.description;
        zuuluu['description'] = michal;
        michal = entity.icon;
        zuuluu['icon'] = michal;
        michal = entity.splash;
        zuuluu['splash'] = michal;
        michal = entity.banner;
        zuuluu['banner'] = michal;
        michal = entity.features;
        zuuluu['features'] = michal;
        michal = entity.verification_level;
        zuuluu['verificationLevel'] = michal;
        michal = entity.vanity_url_code;
        zuuluu['vanityURLCode'] = michal;
        michal = entity.premium_subscription_count;
        zuuluu['premiumSubscriberCount'] = michal;
        michal = entity.nsfw_level;
        zuuluu['nsfwLevel'] = michal;
        michal = entity.approximate_member_count;
        zuuluu['memberCount'] = michal;
        entity = entity.premium_tier;
        zuuluu['premiumTier'] = entity;
        entity = _closure1_slot3;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        report = michal;
        tangon = zuuluu;
        entity = new report[entity](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['fromInviteGuild'] = report;
    report = function(argFoo) { // Original name: fromGuildProfile
        entity = argFoo;
        zuuluu = {};
        michal = entity.id;
        zuuluu['id'] = michal;
        michal = entity.name;
        zuuluu['name'] = michal;
        michal = entity.description;
        zuuluu['description'] = michal;
        michal = entity.icon;
        zuuluu['icon'] = michal;
        michal = entity.premiumSubscriberCount;
        zuuluu['premiumSubscriberCount'] = michal;
        michal = entity.premiumTier;
        zuuluu['premiumTier'] = michal;
        entity = entity.features;
        zuuluu['features'] = entity;
        entity = _closure1_slot3;
        michal = entity.prototype;
        michal = Object.create(michal, {constructor: {value: entity}});
        report = michal;
        tangon = zuuluu;
        entity = new report[entity](tangon, zuuluu);
        entity = entity instanceof Object ? entity : michal;
        return entity;
    };
    zuuluu['fromGuildProfile'] = report;
    zuuluu['toServer'] = tangon;
    tangon = function(argFoo) { // Original name: fromSerializedGuildRecord
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            entity = tangon.joinedAt;
            michal = null;
            if(!(michal != entity)) { _fun00016_ip = 55; continue _fun00015 }
 15:
            entity = global;
            report = entity.Date;
            golfie = tangon.joinedAt;
            zuuluu = report.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: report}});
            option = zuuluu;
            entity = new option[report](golfie, oscard);
            entity = entity instanceof Object ? entity : zuuluu;
            tangon['joinedAt'] = entity;
 55:
            entity = global;
            zuuluu = entity.Set;
            entity = tangon.features;
            if(!(michal == entity)) { _fun00016_ip = 77; continue _fun00015 }
 73:
            entity = new Array(0);
 77:
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            option = michal;
            golfie = entity;
            entity = new option[zuuluu](golfie, oscard);
            entity = entity instanceof Object ? entity : michal;
            tangon['features'] = entity;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = report.bind(michal)(zuuluu);
            michal = zuuluu.dangerouslyCast;
            entity = _closure1_slot3;
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    zuuluu['fromSerializedGuildRecord'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: filterRoleDeletes
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            golfie = argBar;
            zuuluu = argBaz;
            report = argCor;
            entity = null;
            michal = entity != report;
            if(!michal) { _fun00018_ip = 29; continue _fun00017 }
 18:
            oscard = report.length;
            tangon = 0;
            michal = oscard > tangon;
 29:
            if(michal) { _fun00018_ip = 53; continue _fun00017 }
 32:
            tangon = entity != zuuluu;
            if(!tangon) { _fun00018_ip = 50; continue _fun00017 }
 39:
            option = zuuluu.length;
            oscard = 0;
            tangon = option > oscard;
 50:
            michal = tangon;
 53:
            oscard = golfie;
            if(!michal) { _fun00018_ip = 74; continue _fun00017 }
 59:
            tangon = {};
            foxtra = tangon;
            romeon = golfie;
            golfie = copyDataProperties(foxtra, romeon);
            oscard = tangon;
 74:
            if(!(entity != report)) { _fun00018_ip = 128; continue _fun00017 }
 78:
            tangon = _closure1_slot11;
            option = undefined;
            golfie = tangon.bind(option)(report);
            report = golfie.bind(option)();
            tangon = report.done;
            if(tangon) { _fun00018_ip = 128; continue _fun00017 }
 104:
            tangon = report.value;
            tangon = delete oscard[tangon];
            verify = golfie.bind(option)();
            tangon = verify.done;
            report = verify;
            if(!tangon) { _fun00018_ip = 104; continue _fun00017 }
 128:
            if(!(entity != zuuluu)) { _fun00018_ip = 229; continue _fun00017 }
 132:
            tangon = zuuluu.length;
            entity = 0;
            if(!(tangon > entity)) { _fun00018_ip = 229; continue _fun00017 }
 143:
            entity = _closure1_slot11;
            golfie = undefined;
            report = entity.bind(golfie)(zuuluu);
            zuuluu = report.bind(golfie)();
            entity = zuuluu.done;
            tangon = 4;
            if(entity) { _fun00018_ip = 229; continue _fun00017 }
 172:
            yankee = zuuluu.value;
            verify = yankee.id;
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[tangon];
            offset = offset.bind(golfie)(entity);
            entity = offset.fromServerRole;
            entity = entity.bind(offset)(yankee);
            oscard[verify] = entity;
            verify = report.bind(golfie)();
            entity = verify.done;
            zuuluu = verify;
            if(!entity) { _fun00018_ip = 172; continue _fun00017 }
 229:
            entity = oscard;
            if(!michal) { _fun00018_ip = 293; continue _fun00017 }
 235:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 4;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = report.sortClientRoles;
            michal = global;
            zuuluu = michal.Object;
            michal = zuuluu.values;
            zuuluu = michal.bind(zuuluu)(oscard);
            michal = argFoo;
            entity = tangon.bind(report)(michal, zuuluu);
 293:
            return entity;
        }
    };
    zuuluu['filterRoleDeletes'] = michal;
    return entity;
})();
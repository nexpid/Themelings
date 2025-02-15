// app/utils/GuildRecordUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun36151: for(var _fun36151_ip = 0; ; ) switch(_fun36151_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun36151_ip = 46; continue _fun36151 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun36151_ip = 55; continue _fun36151 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun36151_ip = 343; continue _fun36151 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun36151_ip = 323; continue _fun36151 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun36151_ip = 283; continue _fun36151 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun36151_ip = 270; continue _fun36151 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun36151_ip = 163; continue _fun36151 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun36151_ip = 179; continue _fun36151 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun36151_ip = 249; continue _fun36151 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun36151_ip = 249; continue _fun36151 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun36151_ip = 234; continue _fun36151 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun36151_ip = 247; continue _fun36151 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun36151_ip = 265; continue _fun36151;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun36151_ip = 283; continue _fun36151;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun36151_ip = 323; continue _fun36151 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun36151_ip = 330; continue _fun36151 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun36152: for(var _fun36152_ip = 0; ; ) switch(_fun36152_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun36152_ip = 56; continue _fun36152 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun36152_ip = 67; continue _fun36152;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun36153: for(var _fun36153_ip = 0; ; ) switch(_fun36153_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun36153_ip = 23; continue _fun36153 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun36153_ip = 33; continue _fun36153 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun36153_ip = 70; continue _fun36153 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun36153_ip = 55; continue _fun36153 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    tango = function(argFoo) { // Original name: toServer
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['id'] = zulu;
        zulu = mike.name;
        entity['name'] = zulu;
        zulu = mike.description;
        entity['description'] = zulu;
        zulu = mike.icon;
        entity['icon'] = zulu;
        zulu = mike.splash;
        entity['splash'] = zulu;
        zulu = mike.banner;
        entity['banner'] = zulu;
        zulu = mike.homeHeader;
        entity['home_header'] = zulu;
        zulu = global;
        report = zulu.Array;
        tango = report.from;
        zulu = mike.features;
        zulu = tango.bind(report)(zulu);
        entity['features'] = zulu;
        zulu = mike.preferredLocale;
        entity['preferred_locale'] = zulu;
        zulu = mike.ownerId;
        entity['owner_id'] = zulu;
        zulu = mike.application_id;
        entity['application_id'] = zulu;
        zulu = mike.afkChannelId;
        entity['afk_channel_id'] = zulu;
        zulu = mike.afkTimeout;
        entity['afk_timeout'] = zulu;
        zulu = mike.systemChannelId;
        entity['system_channel_id'] = zulu;
        zulu = mike.verificationLevel;
        entity['verification_level'] = zulu;
        zulu = mike.explicitContentFilter;
        entity['explicit_content_filter'] = zulu;
        zulu = mike.defaultMessageNotifications;
        entity['default_message_notifications'] = zulu;
        zulu = mike.mfaLevel;
        entity['mfa_level'] = zulu;
        zulu = mike.vanityURLCode;
        entity['vanity_url_code'] = zulu;
        zulu = mike.premiumTier;
        entity['premium_tier'] = zulu;
        zulu = mike.premiumProgressBarEnabled;
        entity['premium_progress_bar_enabled'] = zulu;
        zulu = mike.systemChannelFlags;
        entity['system_channel_flags'] = zulu;
        zulu = mike.discoverySplash;
        entity['discovery_splash'] = zulu;
        zulu = mike.rulesChannelId;
        entity['rules_channel_id'] = zulu;
        zulu = mike.safetyAlertsChannelId;
        entity['safety_alerts_channel_id'] = zulu;
        zulu = mike.publicUpdatesChannelId;
        entity['public_updates_channel_id'] = zulu;
        zulu = mike.maxStageVideoChannelUsers;
        entity['max_stage_video_channel_users'] = zulu;
        zulu = mike.maxVideoChannelUsers;
        entity['max_video_channel_users'] = zulu;
        zulu = false;
        entity['unavailable'] = zulu;
        zulu = mike.maxMembers;
        entity['max_members'] = zulu;
        zulu = mike.nsfwLevel;
        entity['nsfw_level'] = zulu;
        zulu = mike.hubType;
        entity['hub_type'] = zulu;
        zulu = mike.latestOnboardingQuestionId;
        entity['latest_onboarding_question_id'] = zulu;
        mike = mike.profile;
        entity['profile'] = mike;
        return entity;
    };
    var _closure1_slot13 = tango;
    entity = global;
    offset = entity.Object;
    options = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = options.bind(offset)(zulu, entity, report);
    report = 0;
    options = golf[report];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GuildRecordWithRoles;
    var _closure1_slot4 = report;
    report = 1;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.BoostedGuildTiers;
    var _closure1_slot5 = options;
    options = report.GuildExplicitContentFilterTypes;
    var _closure1_slot6 = options;
    options = report.GuildNSFWContentLevel;
    var _closure1_slot7 = options;
    options = report.MFALevels;
    var _closure1_slot8 = options;
    options = report.UserNotificationSettings;
    var _closure1_slot9 = options;
    report = report.VerificationLevels;
    var _closure1_slot10 = report;
    report = 5;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'utils/GuildRecordUtils.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: fromServer
        _fun36155: for(var _fun36155_ip = 0; ; ) switch(_fun36155_ip) {
 0:
            mike = argFoo;
            tango = argBar;
            zulu = mike.joined_at;
            entity = null;
            if(!(entity == zulu)) { _fun36155_ip = 35; continue _fun36155 }
 18:
            zulu = entity == tango;
            oscar = undefined;
            if(zulu) { _fun36155_ip = 33; continue _fun36155 }
 27:
            oscar = tango.joinedAt;
 33:
            _fun36155_ip = 69; continue _fun36155;
 35:
            zulu = global;
            golf = zulu.Date;
            romeo = mike.joined_at;
            report = golf.prototype;
            report = Object.create(report, {constructor: {value: golf}});
            foxtrot = report;
            zulu = new foxtrot[golf](romeo, yankee);
            oscar = zulu instanceof Object ? zulu : report;
 69:
            zulu = mike.premium_subscription_count;
            golf = entity != zulu;
            report = 0;
            if(!golf) { _fun36155_ip = 87; continue _fun36155 }
 84:
            report = zulu;
 87:
            zulu = mike.properties;
            if(!(entity != zulu)) { _fun36155_ip = 937; continue _fun36155 }
 100:
            verify = {};
            zulu = mike.id;
            verify['id'] = zulu;
            verify['joinedAt'] = oscar;
            verify['premiumSubscriberCount'] = report;
            zulu = mike.properties;
            golf = zulu.name;
            options = entity != golf;
            zulu = '';
            if(!options) { _fun36155_ip = 146; continue _fun36155 }
 143:
            zulu = golf;
 146:
            verify['name'] = zulu;
            zulu = mike.properties;
            zulu = zulu.description;
            verify['description'] = zulu;
            zulu = mike.properties;
            zulu = zulu.icon;
            verify['icon'] = zulu;
            zulu = mike.properties;
            zulu = zulu.splash;
            verify['splash'] = zulu;
            zulu = mike.properties;
            zulu = zulu.banner;
            verify['banner'] = zulu;
            zulu = mike.properties;
            zulu = zulu.home_header;
            verify['homeHeader'] = zulu;
            zulu = global;
            options = zulu.Set;
            zulu = mike.properties;
            zulu = zulu.features;
            if(!(entity == zulu)) { _fun36155_ip = 259; continue _fun36155 }
 255:
            zulu = new Array(0);
 259:
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            foxtrot = golf;
            romeo = zulu;
            zulu = new foxtrot[options](romeo, yankee);
            zulu = zulu instanceof Object ? zulu : golf;
            verify['features'] = zulu;
            zulu = mike.properties;
            golf = zulu.preferred_locale;
            options = entity != golf;
            zulu = 'en-us';
            if(!options) { _fun36155_ip = 315; continue _fun36155 }
 312:
            zulu = golf;
 315:
            verify['preferredLocale'] = zulu;
            zulu = mike.properties;
            zulu = zulu.owner_id;
            verify['ownerId'] = zulu;
            zulu = mike.properties;
            zulu = zulu.application_id;
            verify['application_id'] = zulu;
            zulu = mike.properties;
            zulu = zulu.afk_channel_id;
            verify['afkChannelId'] = zulu;
            zulu = mike.properties;
            zulu = zulu.afk_timeout;
            verify['afkTimeout'] = zulu;
            zulu = mike.properties;
            zulu = zulu.system_channel_id;
            verify['systemChannelId'] = zulu;
            zulu = mike.properties;
            zulu = zulu.verification_level;
            if(!(entity == zulu)) { _fun36155_ip = 434; continue _fun36155 }
 421:
            golf = _closure1_slot10;
            zulu = golf.NONE;
 434:
            verify['verificationLevel'] = zulu;
            zulu = mike.properties;
            zulu = zulu.explicit_content_filter;
            if(!(entity == zulu)) { _fun36155_ip = 468; continue _fun36155 }
 455:
            golf = _closure1_slot6;
            zulu = golf.DISABLED;
 468:
            verify['explicitContentFilter'] = zulu;
            zulu = mike.properties;
            zulu = zulu.default_message_notifications;
            if(!(entity == zulu)) { _fun36155_ip = 502; continue _fun36155 }
 489:
            golf = _closure1_slot9;
            zulu = golf.ALL_MESSAGES;
 502:
            verify['defaultMessageNotifications'] = zulu;
            zulu = mike.properties;
            zulu = zulu.mfa_level;
            if(!(entity == zulu)) { _fun36155_ip = 536; continue _fun36155 }
 523:
            golf = _closure1_slot8;
            zulu = golf.NONE;
 536:
            verify['mfaLevel'] = zulu;
            zulu = mike.properties;
            zulu = zulu.vanity_url_code;
            verify['vanityURLCode'] = zulu;
            zulu = mike.properties;
            zulu = zulu.premium_tier;
            if(!(entity == zulu)) { _fun36155_ip = 587; continue _fun36155 }
 574:
            golf = _closure1_slot5;
            zulu = golf.NONE;
 587:
            verify['premiumTier'] = zulu;
            zulu = mike.properties;
            zulu = zulu.premium_progress_bar_enabled;
            if(zulu) { _fun36155_ip = 609; continue _fun36155 }
 607:
            zulu = false;
 609:
            verify['premiumProgressBarEnabled'] = zulu;
            zulu = mike.properties;
            zulu = zulu.system_channel_flags;
            verify['systemChannelFlags'] = zulu;
            zulu = mike.properties;
            zulu = zulu.discovery_splash;
            verify['discoverySplash'] = zulu;
            zulu = mike.properties;
            zulu = zulu.rules_channel_id;
            verify['rulesChannelId'] = zulu;
            zulu = mike.properties;
            zulu = zulu.safety_alerts_channel_id;
            verify['safetyAlertsChannelId'] = zulu;
            zulu = mike.properties;
            zulu = zulu.public_updates_channel_id;
            verify['publicUpdatesChannelId'] = zulu;
            zulu = mike.properties;
            options = zulu.max_stage_video_channel_users;
            offset = entity != options;
            zulu = -1;
            golf = zulu;
            if(!offset) { _fun36155_ip = 730; continue _fun36155 }
 727:
            golf = options;
 730:
            verify['maxStageVideoChannelUsers'] = golf;
            golf = mike.properties;
            options = golf.max_video_channel_users;
            offset = entity != options;
            golf = zulu;
            if(!offset) { _fun36155_ip = 760; continue _fun36155 }
 757:
            golf = options;
 760:
            verify['maxVideoChannelUsers'] = golf;
            golf = mike.properties;
            golf = golf.max_members;
            options = entity != golf;
            if(!options) { _fun36155_ip = 787; continue _fun36155 }
 784:
            zulu = golf;
 787:
            verify['maxMembers'] = zulu;
            zulu = mike.properties;
            zulu = zulu.nsfw_level;
            if(!(entity == zulu)) { _fun36155_ip = 821; continue _fun36155 }
 808:
            golf = _closure1_slot7;
            zulu = golf.DEFAULT;
 821:
            verify['nsfwLevel'] = zulu;
            zulu = mike.properties;
            zulu = zulu.hub_type;
            verify['hubType'] = zulu;
            zulu = mike.properties;
            zulu = zulu.latest_onboarding_question_id;
            verify['latestOnboardingQuestionId'] = zulu;
            mike = mike.properties;
            mike = mike.profile;
            verify['profile'] = mike;
            if(!(entity != tango)) { _fun36155_ip = 894; continue _fun36155 }
 881:
            mike = tango.merge;
            mike = mike.bind(tango)(verify);
            _fun36155_ip = 935; continue _fun36155;
 894:
            offset = _closure1_slot0;
            options = _closure1_slot2;
            golf = 3;
            options = options[golf];
            golf = undefined;
            options = offset.bind(golf)(options);
            golf = options.dangerouslyCast;
            zulu = _closure1_slot3;
            mike = golf.bind(options)(verify, zulu);
 935:
            return mike;
 937:
            zulu = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 2;
            mike = golf[mike];
            golf = undefined;
            zulu = zulu.bind(golf)(mike);
            mike = entity != tango;
            entity = 'If guild.properties is null, existingGuild must be passed in';
            entity = zulu.bind(golf)(mike, entity);
            zulu = tango.joinedAt;
            entity = global;
            mike = entity.Date;
            mike = zulu instanceof mike;
            golf = tango.joinedAt;
            if(mike) { _fun36155_ip = 1010; continue _fun36155 }
 1005:
            zulu = golf;
            _fun36155_ip = 1020; continue _fun36155;
 1010:
            mike = golf.getTime;
            zulu = mike.bind(golf)();
 1020:
            entity = entity.Date;
            entity = oscar instanceof entity;
            mike = oscar;
            if(!entity) { _fun36155_ip = 1046; continue _fun36155 }
 1036:
            entity = oscar.getTime;
            mike = entity.bind(oscar)();
 1046:
            entity = tango.premiumSubscriberCount;
            if(!(report === entity)) { _fun36155_ip = 1063; continue _fun36155 }
 1056:
            entity = tango;
            if(!(zulu !== mike)) { _fun36155_ip = 1086; continue _fun36155 }
 1063:
            zulu = tango.merge;
            mike = {};
            mike['joinedAt'] = oscar;
            mike['premiumSubscriberCount'] = report;
            entity = zulu.bind(tango)(mike);
 1086:
            return entity;
        }
    };
    zulu['fromServer'] = report;
    report = function(argFoo, argBar) { // Original name: attachSerializedData
        zulu = _closure1_slot4;
        entity = {};
        tango = argFoo;
        report = entity;
        mike = copyDataProperties(report, tango);
        tango = argBar;
        report = entity;
        mike = copyDataProperties(report, tango);
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        oscar = mike;
        report = entity;
        entity = new oscar[zulu](report, tango);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['attachSerializedData'] = report;
    report = function(argFoo, argBar) { // Original name: fromBackgroundSync
        _fun36157: for(var _fun36157_ip = 0; ; ) switch(_fun36157_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            entity = tango.properties;
            report = null;
            if(!(report == entity)) { _fun36157_ip = 32; continue _fun36157 }
 18:
            oscar = _closure1_slot13;
            mike = undefined;
            entity = oscar.bind(mike)(zulu);
 32:
            mike = {};
            tango = tango.id;
            mike['id'] = tango;
            oscar = entity.name;
            golf = report != oscar;
            tango = '';
            if(!golf) { _fun36157_ip = 62; continue _fun36157 }
 59:
            tango = oscar;
 62:
            mike['name'] = tango;
            tango = entity.description;
            mike['description'] = tango;
            tango = entity.icon;
            mike['icon'] = tango;
            tango = entity.splash;
            mike['splash'] = tango;
            tango = entity.banner;
            mike['banner'] = tango;
            tango = entity.home_header;
            mike['homeHeader'] = tango;
            tango = global;
            golf = tango.Set;
            tango = entity.features;
            if(!(report == tango)) { _fun36157_ip = 139; continue _fun36157 }
 135:
            tango = new Array(0);
 139:
            oscar = golf.prototype;
            oscar = Object.create(oscar, {constructor: {value: golf}});
            offset = oscar;
            verify = tango;
            tango = new offset[golf](verify, options);
            tango = tango instanceof Object ? tango : oscar;
            mike['features'] = tango;
            oscar = entity.preferred_locale;
            golf = report != oscar;
            tango = 'en-us';
            if(!golf) { _fun36157_ip = 189; continue _fun36157 }
 186:
            tango = oscar;
 189:
            mike['preferredLocale'] = tango;
            tango = entity.owner_id;
            mike['ownerId'] = tango;
            tango = entity.application_id;
            mike['application_id'] = tango;
            tango = entity.afk_channel_id;
            mike['afkChannelId'] = tango;
            tango = entity.afk_timeout;
            mike['afkTimeout'] = tango;
            tango = entity.system_channel_id;
            mike['systemChannelId'] = tango;
            tango = entity.verification_level;
            if(!(report == tango)) { _fun36157_ip = 272; continue _fun36157 }
 259:
            oscar = _closure1_slot10;
            tango = oscar.NONE;
 272:
            mike['verificationLevel'] = tango;
            tango = entity.explicit_content_filter;
            if(!(report == tango)) { _fun36157_ip = 300; continue _fun36157 }
 287:
            oscar = _closure1_slot6;
            tango = oscar.DISABLED;
 300:
            mike['explicitContentFilter'] = tango;
            tango = entity.default_message_notifications;
            if(!(report == tango)) { _fun36157_ip = 328; continue _fun36157 }
 315:
            oscar = _closure1_slot9;
            tango = oscar.ALL_MESSAGES;
 328:
            mike['defaultMessageNotifications'] = tango;
            tango = entity.mfa_level;
            if(!(report == tango)) { _fun36157_ip = 356; continue _fun36157 }
 343:
            oscar = _closure1_slot8;
            tango = oscar.NONE;
 356:
            mike['mfaLevel'] = tango;
            tango = entity.vanity_url_code;
            mike['vanityURLCode'] = tango;
            tango = entity.premium_tier;
            if(!(report == tango)) { _fun36157_ip = 395; continue _fun36157 }
 382:
            oscar = _closure1_slot5;
            tango = oscar.NONE;
 395:
            mike['premiumTier'] = tango;
            tango = entity.premium_progress_bar_enabled;
            if(tango) { _fun36157_ip = 411; continue _fun36157 }
 409:
            tango = false;
 411:
            mike['premiumProgressBarEnabled'] = tango;
            tango = entity.system_channel_flags;
            mike['systemChannelFlags'] = tango;
            tango = entity.discovery_splash;
            mike['discoverySplash'] = tango;
            tango = entity.rules_channel_id;
            mike['rulesChannelId'] = tango;
            tango = entity.safety_alerts_channel_id;
            mike['safetyAlertsChannelId'] = tango;
            tango = entity.public_updates_channel_id;
            mike['publicUpdatesChannelId'] = tango;
            golf = entity.max_stage_video_channel_users;
            options = report != golf;
            tango = -1;
            oscar = tango;
            if(!options) { _fun36157_ip = 496; continue _fun36157 }
 493:
            oscar = golf;
 496:
            mike['maxStageVideoChannelUsers'] = oscar;
            golf = entity.max_video_channel_users;
            options = report != golf;
            oscar = tango;
            if(!options) { _fun36157_ip = 520; continue _fun36157 }
 517:
            oscar = golf;
 520:
            mike['maxVideoChannelUsers'] = oscar;
            oscar = entity.max_members;
            golf = report != oscar;
            if(!golf) { _fun36157_ip = 541; continue _fun36157 }
 538:
            tango = oscar;
 541:
            mike['maxMembers'] = tango;
            tango = entity.nsfw_level;
            if(!(report == tango)) { _fun36157_ip = 569; continue _fun36157 }
 556:
            report = _closure1_slot7;
            tango = report.DEFAULT;
 569:
            mike['nsfwLevel'] = tango;
            tango = entity.hub_type;
            mike['hubType'] = tango;
            tango = entity.latest_onboarding_question_id;
            mike['latestOnboardingQuestionId'] = tango;
            entity = entity.profile;
            mike['profile'] = entity;
            entity = zulu.merge;
            entity = entity.bind(zulu)(mike);
            return entity;
        }
    };
    zulu['fromBackgroundSync'] = report;
    report = function(argFoo, argBar) { // Original name: fromServerUpdate
        _fun36158: for(var _fun36158_ip = 0; ; ) switch(_fun36158_ip) {
 0:
            report = argFoo;
            zulu = argBar;
            tango = {};
            entity = report.id;
            tango['id'] = entity;
            entity = report.name;
            tango['name'] = entity;
            entity = report.description;
            tango['description'] = entity;
            entity = report.icon;
            tango['icon'] = entity;
            entity = report.splash;
            tango['splash'] = entity;
            entity = report.banner;
            tango['banner'] = entity;
            entity = report.home_header;
            tango['homeHeader'] = entity;
            entity = report.features;
            tango['features'] = entity;
            entity = report.preferred_locale;
            tango['preferredLocale'] = entity;
            entity = report.owner_id;
            tango['ownerId'] = entity;
            entity = report.application_id;
            tango['application_id'] = entity;
            golf = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 4;
            entity = oscar[entity];
            oscar = undefined;
            verify = golf.bind(oscar)(entity);
            options = verify.sortServerRoles;
            golf = report.id;
            entity = report.roles;
            entity = options.bind(verify)(golf, entity);
            tango['roles'] = entity;
            entity = report.afk_channel_id;
            tango['afkChannelId'] = entity;
            entity = report.afk_timeout;
            tango['afkTimeout'] = entity;
            entity = report.system_channel_id;
            tango['systemChannelId'] = entity;
            golf = report.joined_at;
            entity = null;
            if(!(entity == golf)) { _fun36158_ip = 236; continue _fun36158 }
 219:
            golf = entity == zulu;
            oscar = undefined;
            if(golf) { _fun36158_ip = 234; continue _fun36158 }
 228:
            oscar = zulu.joinedAt;
 234:
            _fun36158_ip = 270; continue _fun36158;
 236:
            golf = global;
            verify = golf.Date;
            yankee = report.joined_at;
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            romeo = options;
            golf = new romeo[verify](yankee, offset);
            oscar = golf instanceof Object ? golf : options;
 270:
            tango['joinedAt'] = oscar;
            oscar = report.verification_level;
            tango['verificationLevel'] = oscar;
            oscar = report.explicit_content_filter;
            tango['explicitContentFilter'] = oscar;
            oscar = report.default_message_notifications;
            tango['defaultMessageNotifications'] = oscar;
            oscar = report.mfa_level;
            tango['mfaLevel'] = oscar;
            oscar = report.vanity_url_code;
            tango['vanityURLCode'] = oscar;
            oscar = report.premium_tier;
            tango['premiumTier'] = oscar;
            oscar = report.premium_subscription_count;
            tango['premiumSubscriberCount'] = oscar;
            oscar = report.premium_progress_bar_enabled;
            tango['premiumProgressBarEnabled'] = oscar;
            oscar = report.system_channel_flags;
            tango['systemChannelFlags'] = oscar;
            oscar = report.discovery_splash;
            tango['discoverySplash'] = oscar;
            oscar = report.rules_channel_id;
            tango['rulesChannelId'] = oscar;
            oscar = report.safety_alerts_channel_id;
            tango['safetyAlertsChannelId'] = oscar;
            oscar = report.public_updates_channel_id;
            tango['publicUpdatesChannelId'] = oscar;
            oscar = report.max_stage_video_channel_users;
            tango['maxStageVideoChannelUsers'] = oscar;
            oscar = report.max_video_channel_users;
            tango['maxVideoChannelUsers'] = oscar;
            oscar = report.max_members;
            tango['maxMembers'] = oscar;
            oscar = report.nsfw_level;
            tango['nsfwLevel'] = oscar;
            oscar = report.hub_type;
            tango['hubType'] = oscar;
            oscar = report.latest_onboarding_question_id;
            tango['latestOnboardingQuestionId'] = oscar;
            report = report.profile;
            tango['profile'] = report;
            if(!(entity != zulu)) { _fun36158_ip = 512; continue _fun36158 }
 499:
            entity = zulu.merge;
            entity = entity.bind(zulu)(tango);
            _fun36158_ip = 539; continue _fun36158;
 512:
            mike = _closure1_slot3;
            zulu = mike.prototype;
            zulu = Object.create(zulu, {constructor: {value: mike}});
            romeo = zulu;
            yankee = tango;
            mike = new romeo[mike](yankee, offset);
            entity = mike instanceof Object ? mike : zulu;
 539:
            return entity;
        }
    };
    zulu['fromServerUpdate'] = report;
    report = function(argFoo) { // Original name: fromInviteGuild
        entity = argFoo;
        zulu = {};
        mike = entity.id;
        zulu['id'] = mike;
        mike = entity.name;
        zulu['name'] = mike;
        mike = entity.description;
        zulu['description'] = mike;
        mike = entity.icon;
        zulu['icon'] = mike;
        mike = entity.splash;
        zulu['splash'] = mike;
        mike = entity.banner;
        zulu['banner'] = mike;
        mike = entity.features;
        zulu['features'] = mike;
        mike = entity.verification_level;
        zulu['verificationLevel'] = mike;
        mike = entity.vanity_url_code;
        zulu['vanityURLCode'] = mike;
        mike = entity.premium_subscription_count;
        zulu['premiumSubscriberCount'] = mike;
        mike = entity.nsfw_level;
        zulu['nsfwLevel'] = mike;
        entity = entity.approximate_member_count;
        zulu['memberCount'] = entity;
        entity = _closure1_slot3;
        mike = entity.prototype;
        mike = Object.create(mike, {constructor: {value: entity}});
        report = mike;
        tango = zulu;
        entity = new report[entity](tango, zulu);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['fromInviteGuild'] = report;
    zulu['toServer'] = tango;
    tango = function(argFoo) { // Original name: fromSerializedGuildRecord
        _fun36160: for(var _fun36160_ip = 0; ; ) switch(_fun36160_ip) {
 0:
            tango = argFoo;
            entity = tango.joinedAt;
            mike = null;
            if(!(mike != entity)) { _fun36160_ip = 55; continue _fun36160 }
 15:
            entity = global;
            report = entity.Date;
            kilo = tango.joinedAt;
            zulu = report.prototype;
            zulu = Object.create(zulu, {constructor: {value: report}});
            sizing = zulu;
            entity = new sizing[report](kilo, backup);
            entity = entity instanceof Object ? entity : zulu;
            tango['joinedAt'] = entity;
 55:
            entity = global;
            zulu = entity.Set;
            entity = tango.features;
            if(!(mike == entity)) { _fun36160_ip = 77; continue _fun36160 }
 73:
            entity = new Array(0);
 77:
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            sizing = mike;
            kilo = entity;
            entity = new sizing[zulu](kilo, backup);
            entity = entity instanceof Object ? entity : mike;
            tango['features'] = entity;
            options = tango.roles;
            mike = 4;
            report = undefined;
            for(zulu in options)
 128:
            {
 137:
                foxtrot = zulu;
                yankee = _closure1_slot0;
                offset = _closure1_slot2;
                offset = offset[mike];
                romeo = yankee.bind(report)(offset);
                yankee = romeo.fromSerializedGuildRole;
                offset = tango.roles;
                offset = offset[foxtrot];
                offset = yankee.bind(romeo)(offset);
                _fun36160_ip = 128; continue _fun36160;
            }
 180:
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.dangerouslyCast;
            entity = _closure1_slot3;
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    zulu['fromSerializedGuildRecord'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: filterRoleDeletes
        _fun36161: for(var _fun36161_ip = 0; ; ) switch(_fun36161_ip) {
 0:
            golf = argBar;
            zulu = argBaz;
            report = argCorge;
            entity = null;
            mike = entity != report;
            if(!mike) { _fun36161_ip = 29; continue _fun36161 }
 18:
            oscar = report.length;
            tango = 0;
            mike = oscar > tango;
 29:
            if(mike) { _fun36161_ip = 53; continue _fun36161 }
 32:
            tango = entity != zulu;
            if(!tango) { _fun36161_ip = 50; continue _fun36161 }
 39:
            options = zulu.length;
            oscar = 0;
            tango = options > oscar;
 50:
            mike = tango;
 53:
            oscar = golf;
            if(!mike) { _fun36161_ip = 74; continue _fun36161 }
 59:
            tango = {};
            foxtrot = tango;
            romeo = golf;
            golf = copyDataProperties(foxtrot, romeo);
            oscar = tango;
 74:
            if(!(entity != report)) { _fun36161_ip = 128; continue _fun36161 }
 78:
            tango = _closure1_slot11;
            options = undefined;
            golf = tango.bind(options)(report);
            report = golf.bind(options)();
            tango = report.done;
            if(tango) { _fun36161_ip = 128; continue _fun36161 }
 104:
            tango = report.value;
            tango = delete oscar[tango];
            verify = golf.bind(options)();
            tango = verify.done;
            report = verify;
            if(!tango) { _fun36161_ip = 104; continue _fun36161 }
 128:
            if(!(entity != zulu)) { _fun36161_ip = 229; continue _fun36161 }
 132:
            tango = zulu.length;
            entity = 0;
            if(!(tango > entity)) { _fun36161_ip = 229; continue _fun36161 }
 143:
            entity = _closure1_slot11;
            golf = undefined;
            report = entity.bind(golf)(zulu);
            zulu = report.bind(golf)();
            entity = zulu.done;
            tango = 4;
            if(entity) { _fun36161_ip = 229; continue _fun36161 }
 172:
            yankee = zulu.value;
            verify = yankee.id;
            offset = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[tango];
            offset = offset.bind(golf)(entity);
            entity = offset.fromServerRole;
            entity = entity.bind(offset)(yankee);
            oscar[verify] = entity;
            verify = report.bind(golf)();
            entity = verify.done;
            zulu = verify;
            if(!entity) { _fun36161_ip = 172; continue _fun36161 }
 229:
            entity = oscar;
            if(!mike) { _fun36161_ip = 293; continue _fun36161 }
 235:
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 4;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = report.sortClientRoles;
            mike = global;
            zulu = mike.Object;
            mike = zulu.values;
            zulu = mike.bind(zulu)(oscar);
            mike = argFoo;
            entity = tango.bind(report)(mike, zulu);
 293:
            return entity;
        }
    };
    zulu['filterRoleDeletes'] = mike;
    return entity;
})();
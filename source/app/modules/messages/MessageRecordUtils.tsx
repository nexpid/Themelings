// app/modules/messages/MessageRecordUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: createMinimalMessageRecord
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            zulu = _closure1_slot5;
            entity = {};
            romeo = entity;
            yankee = mike;
            report = copyDataProperties(romeo, yankee);
            report = global;
            options = report.Date;
            romeo = mike.timestamp;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            foxtrot = golf;
            oscar = new foxtrot[options](romeo, yankee);
            golf = oscar instanceof Object ? oscar : golf;
            oscar = 'timestamp';
            entity[oscar] = golf;
            golf = mike.edited_timestamp;
            oscar = null;
            options = oscar != golf;
            golf = null;
            if(!options) { _fun00002_ip = 114; continue _fun00001 }
 82:
            verify = report.Date;
            romeo = mike.edited_timestamp;
            options = verify.prototype;
            options = Object.create(options, {constructor: {value: verify}});
            foxtrot = options;
            report = new foxtrot[verify](romeo, yankee);
            golf = report instanceof Object ? report : options;
 114:
            report = 'editedTimestamp';
            entity[report] = golf;
            golf = _closure1_slot17;
            report = undefined;
            options = golf.bind(report)(mike);
            golf = 'attachments';
            entity[golf] = options;
            golf = _closure1_slot19;
            options = golf.bind(report)(mike);
            golf = 'embeds';
            entity[golf] = options;
            options = _closure1_slot0;
            verify = _closure1_slot2;
            golf = 8;
            golf = verify[golf];
            verify = options.bind(report)(golf);
            options = verify.transformComponents;
            golf = mike.components;
            if(!(oscar == golf)) { _fun00002_ip = 201; continue _fun00001 }
 197:
            golf = new Array(0);
 201:
            oscar = {};
            offset = true;
            oscar['includeEmojiSrc'] = offset;
            golf = options.bind(verify)(golf, oscar);
            oscar = 'components';
            entity[oscar] = golf;
            golf = mike.type;
            oscar = _closure1_slot13;
            oscar = oscar.THREAD_CREATED;
            if(!(golf !== oscar)) { _fun00002_ip = 276; continue _fun00001 }
 244:
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            tango = 9;
            tango = golf[tango];
            tango = oscar.bind(report)(tango);
            mike = mike.content;
            tango = tango.bind(report)(mike);
            _fun00002_ip = 280; continue _fun00001;
 276:
            tango = new Array(0);
 280:
            mike = 'codedLinks';
            entity[mike] = tango;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            foxtrot = mike;
            romeo = entity;
            entity = new foxtrot[zulu](romeo, yankee);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    tango = function(argFoo) { // Original name: createMessageRecord
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golf = argFoo;
            entity = arguments[1];
            report = undefined;
            if(!(entity === report)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            entity = {};
 14:
            foxtrot = entity.reactions;
            offset = entity.interactionData;
            entity = _closure1_slot15;
            verify = entity.bind(report)(golf);
            zulu = golf.mentions;
            oscar = null;
            entity = oscar == zulu;
            echo = undefined;
            if(entity) { _fun00004_ip = 72; continue _fun00003 }
 55:
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            echo = mike.bind(zulu)(entity);
 72:
            if(!(oscar == echo)) { _fun00004_ip = 80; continue _fun00003 }
 76:
            echo = new Array(0);
 80:
            result = golf.mention_roles;
            if(!(oscar == result)) { _fun00004_ip = 94; continue _fun00003 }
 90:
            result = new Array(0);
 94:
            output = golf.mention_channels;
            if(!(oscar == output)) { _fun00004_ip = 108; continue _fun00003 }
 104:
            output = new Array(0);
 108:
            sizing = golf.message_reference;
            entity = golf.author;
            if(!(oscar != entity)) { _fun00004_ip = 228; continue _fun00003 }
 124:
            entity = golf.webhook_id;
            if(!(oscar == entity)) { _fun00004_ip = 196; continue _fun00003 }
 134:
            zulu = _closure1_slot10;
            mike = zulu.getUser;
            entity = golf.author;
            entity = entity.id;
            update = mike.bind(zulu)(entity);
            if(!(oscar == update)) { _fun00004_ip = 194; continue _fun00003 }
 164:
            zulu = _closure1_slot7;
            config = golf.author;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            record = mike;
            entity = new record[zulu](config, sequence);
            update = entity instanceof Object ? entity : mike;
 194:
            _fun00004_ip = 226; continue _fun00003;
 196:
            zulu = _closure1_slot7;
            config = golf.author;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            record = mike;
            entity = new record[zulu](config, sequence);
            update = entity instanceof Object ? entity : mike;
 226:
            _fun00004_ip = 232; continue _fun00003;
 228:
            update = _closure1_slot14;
 232:
            mike = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 10;
            entity = zulu[entity];
            zulu = mike.bind(report)(entity);
            mike = zulu.getMessageAuthor;
            entity = {};
            tango = golf.channel_id;
            entity['channel_id'] = tango;
            entity['author'] = update;
            romeo = mike.bind(zulu)(entity);
            entity = oscar == golf;
            mike = undefined;
            if(entity) { _fun00004_ip = 294; continue _fun00003 }
 288:
            mike = golf.gift_info;
 294:
            tango = golf.gifting_prompt;
            entity = golf.interaction;
            entity = oscar != entity;
            yankee = null;
            if(!entity) { _fun00004_ip = 336; continue _fun00003 }
 315:
            backup = _closure1_slot3;
            zulu = backup.createFromServer;
            entity = golf.interaction;
            yankee = zulu.bind(backup)(entity);
 336:
            zulu = golf.type;
            entity = _closure1_slot13;
            entity = entity.THREAD_STARTER_MESSAGE;
            vacuum = undefined;
            if(!(zulu === entity)) { _fun00004_ip = 395; continue _fun00003 }
 357:
            zulu = golf.referenced_message;
            backup = oscar == zulu;
            entity = undefined;
            if(backup) { _fun00004_ip = 392; continue _fun00003 }
 372:
            zulu = zulu.author;
            backup = oscar == zulu;
            entity = undefined;
            if(backup) { _fun00004_ip = 392; continue _fun00003 }
 387:
            entity = zulu.id;
 392:
            vacuum = entity;
 395:
            kilo = golf.content;
            zulu = golf.type;
            entity = _closure1_slot13;
            entity = entity.PREMIUM_REFERRAL;
            backup = undefined;
            if(!(zulu === entity)) { _fun00004_ip = 474; continue _fun00003 }
 421:
            zulu = _closure1_slot1;
            source = _closure1_slot2;
            entity = 11;
            entity = source[entity];
            source = zulu.bind(report)(entity);
            zulu = source.isProbablyAValidSnowflake;
            entity = golf.content;
            entity = zulu.bind(source)(entity);
            zulu = undefined;
            if(!entity) { _fun00004_ip = 467; continue _fun00003 }
 462:
            zulu = golf.content;
 467:
            kilo = '';
            backup = zulu;
 474:
            zulu = _closure1_slot6;
            entity = {};
            config = entity;
            sequence = golf;
            source = copyDataProperties(config, sequence);
            config = entity;
            sequence = romeo;
            romeo = copyDataProperties(config, sequence);
            romeo = verify.toJS;
            sequence = romeo.bind(verify)();
            config = entity;
            romeo = copyDataProperties(config, sequence);
            romeo = 'author';
            entity[romeo] = update;
            update = golf.webhook_id;
            romeo = 'webhookId';
            entity[romeo] = update;
            update = _closure1_slot9;
            romeo = update.isBlockedForMessage;
            update = romeo.bind(update)(golf);
            if(update) { _fun00004_ip = 584; continue _fun00003 }
 559:
            romeo = oscar != vacuum;
            if(!romeo) { _fun00004_ip = 581; continue _fun00003 }
 566:
            control = _closure1_slot9;
            source = control.isBlocked;
            romeo = source.bind(control)(vacuum);
 581:
            update = romeo;
 584:
            romeo = 'blocked';
            entity[romeo] = update;
            update = _closure1_slot9;
            romeo = update.isIgnoredForMessage;
            update = romeo.bind(update)(golf);
            if(update) { _fun00004_ip = 636; continue _fun00003 }
 611:
            romeo = oscar != vacuum;
            if(!romeo) { _fun00004_ip = 633; continue _fun00003 }
 618:
            control = _closure1_slot9;
            source = control.isIgnored;
            romeo = source.bind(control)(vacuum);
 633:
            update = romeo;
 636:
            romeo = 'ignored';
            entity[romeo] = update;
            update = golf.mention_everyone;
            romeo = 'mentionEveryone';
            entity[romeo] = update;
            romeo = 'mentions';
            entity[romeo] = echo;
            romeo = 'mentionRoles';
            entity[romeo] = result;
            romeo = 'mentionChannels';
            entity[romeo] = output;
            romeo = 'messageReference';
            entity[romeo] = sizing;
            sizing = _closure1_slot0;
            output = _closure1_slot2;
            romeo = 12;
            romeo = output[romeo];
            output = sizing.bind(report)(romeo);
            sizing = output.isMentioned;
            romeo = {};
            source = _closure1_slot8;
            update = source.getId;
            update = update.bind(source)();
            romeo['userId'] = update;
            update = golf.channel_id;
            romeo['channelId'] = update;
            source = golf.mention_everyone;
            update = oscar != source;
            if(!update) { _fun00004_ip = 767; continue _fun00003 }
 764:
            update = source;
 767:
            romeo['mentionEveryone'] = update;
            romeo['mentionUsers'] = echo;
            romeo['mentionRoles'] = result;
            sizing = sizing.bind(output)(romeo);
            romeo = 'mentioned';
            entity[romeo] = sizing;
            sizing = _closure1_slot0;
            romeo = _closure1_slot2;
            result = 13;
            romeo = romeo[result];
            sizing = sizing.bind(report)(romeo);
            romeo = sizing.isGiftCodeEmbed;
            romeo = romeo.bind(sizing)(golf);
            output = _closure1_slot0;
            sizing = _closure1_slot2;
            sizing = sizing[result];
            result = output.bind(report)(sizing);
            output = result.findGiftCodes;
            if(romeo) { _fun00004_ip = 865; continue _fun00003 }
 853:
            romeo = golf.content;
            sizing = output.bind(result)(romeo);
            _fun00004_ip = 896; continue _fun00003;
 865:
            echo = oscar == golf;
            romeo = undefined;
            if(echo) { _fun00004_ip = 891; continue _fun00003 }
 874:
            update = golf.embeds;
            echo = 0;
            echo = update[echo];
            romeo = echo.url;
 891:
            sizing = output.bind(result)(romeo);
 896:
            romeo = 'giftCodes';
            entity[romeo] = sizing;
            romeo = 'content';
            entity[romeo] = kilo;
            romeo = 'referralTrialOfferId';
            entity[romeo] = backup;
            backup = _closure1_slot18;
            romeo = golf.call;
            verify = verify.timestamp;
            romeo = backup.bind(report)(romeo, verify);
            verify = 'call';
            entity[verify] = romeo;
            verify = _closure1_slot21;
            romeo = verify.bind(report)(golf);
            verify = 'messageSnapshots';
            entity[verify] = romeo;
            romeo = _closure1_slot20;
            if(!(oscar == foxtrot)) { _fun00004_ip = 985; continue _fun00003 }
 979:
            foxtrot = golf.reactions;
 985:
            verify = golf.poll;
            romeo = romeo.bind(report)(foxtrot, verify);
            verify = 'reactions';
            entity[verify] = romeo;
            verify = 'interaction';
            entity[verify] = yankee;
            if(!(oscar == offset)) { _fun00004_ip = 1025; continue _fun00003 }
 1019:
            offset = golf.interaction_data;
 1025:
            verify = 'interactionData';
            entity[verify] = offset;
            offset = golf.interaction_metadata;
            verify = 'interactionMetadata';
            entity[verify] = offset;
            offset = golf.role_subscription_data;
            verify = 'roleSubscriptionData';
            entity[verify] = offset;
            offset = golf.purchase_notification;
            verify = 'purchaseNotification';
            entity[verify] = offset;
            verify = golf.poll;
            offset = oscar == verify;
            verify = undefined;
            if(offset) { _fun00004_ip = 1125; continue _fun00003 }
 1094:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            options = 14;
            options = yankee[options];
            offset = offset.bind(report)(options);
            options = golf.poll;
            verify = offset.bind(report)(options);
 1125:
            options = 'poll';
            entity[options] = verify;
            options = golf.potions;
            golf = 'potions';
            entity[golf] = options;
            oscar = oscar == mike;
            report = undefined;
            if(oscar) { _fun00004_ip = 1161; continue _fun00003 }
 1158:
            report = mike;
 1161:
            mike = 'giftInfo';
            entity[mike] = report;
            mike = 'giftingPrompt';
            entity[mike] = tango;
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            record = mike;
            config = entity;
            entity = new record[zulu](config, sequence);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot16 = tango;
    entity = function(argFoo) { // Original name: transformAttachments
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zulu = entity.attachments;
            mike = null;
            if(!(mike != zulu)) { _fun00006_ip = 40; continue _fun00005 }
 15:
            zulu = entity.attachments;
            mike = zulu.map;
            entity = function(argFoo) {
                mike = argFoo;
                entity = {};
                oscar = entity;
                report = mike;
                zulu = copyDataProperties(oscar, report);
                tango = mike.filename;
                zulu = tango.startsWith;
                mike = _closure1_slot11;
                zulu = zulu.bind(tango)(mike);
                mike = 'spoiler';
                entity[mike] = zulu;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun00006_ip = 44; continue _fun00005;
 40:
            entity = new Array(0);
 44:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: transformMessageCall
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            mike = null;
            if(!(mike == tango)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            return mike;
 11:
            entity = tango.ended_timestamp;
            entity = mike != entity;
            zulu = null;
            if(!entity) { _fun00008_ip = 90; continue _fun00007 }
 26:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            entity = 15;
            entity = oscar[entity];
            oscar = undefined;
            report = report.bind(oscar)(entity);
            entity = global;
            options = entity.Date;
            verify = tango.ended_timestamp;
            golf = options.prototype;
            golf = Object.create(golf, {constructor: {value: options}});
            offset = golf;
            entity = new offset[options](verify, options);
            entity = entity instanceof Object ? entity : golf;
            zulu = report.bind(oscar)(entity);
 90:
            entity = mike != zulu;
            mike = null;
            if(!entity) { _fun00008_ip = 148; continue _fun00007 }
 99:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            entity = 15;
            report = report[entity];
            entity = undefined;
            oscar = oscar.bind(entity)(report);
            report = oscar.duration;
            golf = zulu.diff;
            entity = argBar;
            entity = golf.bind(zulu)(entity);
            mike = report.bind(oscar)(entity);
 148:
            entity = {};
            tango = tango.participants;
            entity['participants'] = tango;
            entity['endedTimestamp'] = zulu;
            entity['duration'] = mike;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: transformEmbeds
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            var _closure2_slot0 = mike;
            tango = mike.embeds;
            zulu = null;
            if(!(zulu != tango)) { _fun00010_ip = 80; continue _fun00009 }
 21:
            zulu = mike.embeds;
            mike = zulu.map;
            entity = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.sanitizeEmbed;
                entity = _closure2_slot0;
                zulu = entity.channel_id;
                mike = entity.id;
                entity = argFoo;
                entity = tango.bind(report)(zulu, mike, entity);
                return entity;
            };
            zulu = mike.bind(zulu)(entity);
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            entity = mike.mergeEmbedsOnURL;
            entity = entity.bind(mike)(zulu);
            return entity;
 80:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = function(argFoo, argBar) { // Original name: transformReactions
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            oscar = argFoo;
            mike = argBar;
            report = null;
            if(!(report == oscar)) { _fun00012_ip = 33; continue _fun00011 }
 14:
            tango = report == mike;
            zulu = undefined;
            if(tango) { _fun00012_ip = 29; continue _fun00011 }
 23:
            zulu = mike.results;
 29:
            if(!(report != zulu)) { _fun00012_ip = 142; continue _fun00011 }
 33:
            zulu = report == mike;
            tango = undefined;
            if(zulu) { _fun00012_ip = 80; continue _fun00011 }
 42:
            mike = mike.results;
            zulu = report == mike;
            tango = undefined;
            if(zulu) { _fun00012_ip = 80; continue _fun00011 }
 57:
            golf = mike.answer_counts;
            zulu = golf.map;
            mike = function(argFoo) {
                mike = argFoo;
                entity = {};
                zulu = {};
                tango = mike.count;
                zulu['vote'] = tango;
                entity['count_details'] = zulu;
                zulu = mike.me_voted;
                entity['me_vote'] = zulu;
                tango = {'id': null, 'name': '', 'animated': false};
                report = mike.id;
                zulu = report.toString;
                zulu = zulu.bind(report)();
                tango['id'] = zulu;
                zulu = false;
                entity['emoji'] = tango;
                entity['me'] = zulu;
                entity['me_burst'] = zulu;
                mike = mike.count;
                entity['count'] = mike;
                mike = 0;
                entity['burst_count'] = mike;
                return entity;
            };
            tango = zulu.bind(golf)(mike);
 80:
            if(!(report == oscar)) { _fun00012_ip = 88; continue _fun00011 }
 84:
            oscar = new Array(0);
 88:
            zulu = new Array(0);
            options = 0;
            offset = zulu;
            verify = oscar;
            mike = arraySpread(offset, verify, options);
            if(!(report == tango)) { _fun00012_ip = 112; continue _fun00011 }
 108:
            tango = new Array(0);
 112:
            offset = zulu;
            verify = tango;
            options = mike;
            mike = arraySpread(offset, verify, options);
            mike = zulu.map;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    verify = argFoo;
                    offset = entity;
                    mike = copyDataProperties(offset, verify);
                    tango = null;
                    zulu = tango == entity;
                    golf = undefined;
                    mike = undefined;
                    if(zulu) { _fun00014_ip = 31; continue _fun00013 }
 25:
                    mike = entity.count_details;
 31:
                    if(!(tango != mike)) { _fun00014_ip = 95; continue _fun00013 }
 35:
                    mike = entity.count_details;
                    report = mike.burst;
                    oscar = tango != report;
                    zulu = 0;
                    if(!oscar) { _fun00014_ip = 59; continue _fun00013 }
 56:
                    zulu = report;
 59:
                    entity['burst_count'] = zulu;
                    zulu = entity.count_details;
                    zulu = zulu.normal;
                    tango = tango != zulu;
                    mike = 0;
                    if(!tango) { _fun00014_ip = 89; continue _fun00013 }
 86:
                    mike = zulu;
 89:
                    entity['count'] = mike;
 95:
                    mike = entity.count;
                    tango = 0;
                    if(!(mike < tango)) { _fun00014_ip = 112; continue _fun00013 }
 106:
                    entity['count'] = tango;
 112:
                    mike = entity.burst_count;
                    if(!(mike < tango)) { _fun00014_ip = 128; continue _fun00013 }
 122:
                    entity['burst_count'] = tango;
 128:
                    mike = global;
                    report = mike.Array;
                    zulu = report.isArray;
                    mike = entity.burst_colors;
                    mike = zulu.bind(report)(mike);
                    if(!mike) { _fun00014_ip = 170; continue _fun00013 }
 155:
                    zulu = entity.burst_colors;
                    zulu = zulu.length;
                    mike = zulu > tango;
 170:
                    if(!mike) { _fun00014_ip = 252; continue _fun00013 }
 173:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 17;
                    mike = options[mike];
                    tango = oscar.bind(golf)(mike);
                    zulu = tango.buildPlatformedThemedEmojiColorPalette;
                    mike = {};
                    report = entity.burst_colors;
                    mike['colors'] = report;
                    report = 18;
                    report = options[report];
                    oscar = oscar.bind(golf)(report);
                    report = oscar.isIOS;
                    report = report.bind(oscar)();
                    mike['shouldProcessMobileColors'] = report;
                    mike = zulu.bind(tango)(mike);
                    entity['themedBurstColors'] = mike;
 252:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
 142:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: transformMessageSnapshots
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zulu = entity.message_snapshots;
            mike = null;
            if(!(mike != zulu)) { _fun00016_ip = 40; continue _fun00015 }
 15:
            zulu = entity.message_snapshots;
            mike = zulu.map;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.message;
                zulu = _closure1_slot4;
                entity = {};
                tango = _closure1_slot15;
                mike = undefined;
                mike = tango.bind(mike)(report);
                entity['message'] = mike;
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                golf = mike;
                oscar = entity;
                entity = new golf[zulu](oscar, report);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            _fun00016_ip = 44; continue _fun00015;
 40:
            entity = new Array(0);
 44:
            return entity;
        }
    };
    var _closure1_slot21 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golf[report];
    verify = oscar.bind(entity)(verify);
    offset = verify.MessageSnapshotRecord;
    var _closure1_slot4 = offset;
    verify = verify.MinimalMessageRecord;
    var _closure1_slot5 = verify;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 2;
    report = golf[report];
    verify = options.bind(entity)(report);
    var _closure1_slot7 = verify;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 6;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot11 = report;
    report = 7;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.MessageFlags;
    var _closure1_slot12 = options;
    report = report.MessageTypes;
    var _closure1_slot13 = report;
    report = verify.prototype;
    options = Object.create(report, {constructor: {value: verify}});
    foxtrot = {'id': '???', 'username': '???'};
    backup = options;
    report = new backup[verify](foxtrot, romeo);
    report = report instanceof Object ? report : options;
    var _closure1_slot14 = report;
    report = 20;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/messages/MessageRecordUtils.tsx';
    report = oscar.bind(golf)(report);
    zulu['createMessageRecord'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateServerMessage
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zulu = argFoo;
            tango = argBar;
            mike = tango.edited_timestamp;
            entity = null;
            if(!(entity == mike)) { _fun00018_ip = 42; continue _fun00017 }
 18:
            entity = {};
            golf = entity;
            oscar = zulu;
            mike = copyDataProperties(golf, oscar);
            golf = entity;
            oscar = tango;
            mike = copyDataProperties(golf, oscar);
            _fun00018_ip = 87; continue _fun00017;
 42:
            mike = {};
            golf = mike;
            oscar = tango;
            tango = copyDataProperties(golf, oscar);
            report = zulu.reactions;
            tango = 'reactions';
            mike[tango] = report;
            tango = zulu.interaction_data;
            zulu = 'interaction_data';
            mike[zulu] = tango;
            entity = mike;
 87:
            return entity;
        }
    };
    zulu['updateServerMessage'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateMessageRecord
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            mike = tango.edited_timestamp;
            report = null;
            if(!(report == mike)) { _fun00020_ip = 897; continue _fun00019 }
 21:
            mike = tango.call;
            golf = entity;
            if(!(report != mike)) { _fun00020_ip = 74; continue _fun00019 }
 33:
            oscar = entity.set;
            verify = _closure1_slot18;
            options = tango.call;
            zulu = entity.timestamp;
            mike = undefined;
            zulu = verify.bind(mike)(options, zulu);
            mike = 'call';
            golf = oscar.bind(entity)(mike, zulu);
 74:
            mike = tango.attachments;
            options = golf;
            if(!(report != mike)) { _fun00020_ip = 116; continue _fun00019 }
 87:
            oscar = golf.set;
            zulu = _closure1_slot17;
            mike = undefined;
            zulu = zulu.bind(mike)(tango);
            mike = 'attachments';
            options = oscar.bind(golf)(mike, zulu);
 116:
            mike = tango.content;
            mike = report != mike;
            if(!mike) { _fun00020_ip = 141; continue _fun00019 }
 128:
            oscar = tango.content;
            zulu = '';
            mike = zulu !== oscar;
 141:
            golf = options;
            if(!mike) { _fun00020_ip = 167; continue _fun00019 }
 147:
            oscar = options.set;
            zulu = tango.content;
            mike = 'content';
            golf = oscar.bind(options)(mike, zulu);
 167:
            mike = tango.embeds;
            options = golf;
            if(!(report != mike)) { _fun00020_ip = 209; continue _fun00019 }
 180:
            oscar = golf.set;
            zulu = _closure1_slot19;
            mike = undefined;
            zulu = zulu.bind(mike)(tango);
            mike = 'embeds';
            options = oscar.bind(golf)(mike, zulu);
 209:
            mike = tango.message_snapshots;
            golf = options;
            if(!(report != mike)) { _fun00020_ip = 251; continue _fun00019 }
 222:
            oscar = options.set;
            zulu = _closure1_slot21;
            mike = undefined;
            zulu = zulu.bind(mike)(tango);
            mike = 'messageSnapshots';
            golf = oscar.bind(options)(mike, zulu);
 251:
            zulu = tango.pinned;
            mike = golf.pinned;
            options = golf;
            if(!(zulu !== mike)) { _fun00020_ip = 291; continue _fun00019 }
 270:
            oscar = golf.set;
            zulu = tango.pinned;
            mike = 'pinned';
            options = oscar.bind(golf)(mike, zulu);
 291:
            mike = options.webhookId;
            mike = report != mike;
            if(!mike) { _fun00020_ip = 314; continue _fun00019 }
 304:
            zulu = tango.author;
            mike = report != zulu;
 314:
            golf = options;
            if(!mike) { _fun00020_ip = 368; continue _fun00019 }
 320:
            oscar = options.set;
            verify = _closure1_slot7;
            foxtrot = tango.author;
            zulu = verify.prototype;
            zulu = Object.create(zulu, {constructor: {value: verify}});
            backup = zulu;
            mike = new backup[verify](foxtrot, romeo);
            zulu = mike instanceof Object ? mike : zulu;
            mike = 'author';
            golf = oscar.bind(options)(mike, zulu);
 368:
            mike = tango.flags;
            mike = report != mike;
            if(!mike) { _fun00020_ip = 394; continue _fun00019 }
 380:
            oscar = tango.flags;
            zulu = golf.flags;
            mike = oscar !== zulu;
 394:
            options = golf;
            if(!mike) { _fun00020_ip = 420; continue _fun00019 }
 400:
            oscar = golf.set;
            zulu = tango.flags;
            mike = 'flags';
            options = oscar.bind(golf)(mike, zulu);
 420:
            mike = tango.components;
            golf = options;
            if(!(report != mike)) { _fun00020_ip = 500; continue _fun00019 }
 433:
            oscar = options.set;
            verify = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 8;
            zulu = zulu[mike];
            mike = undefined;
            offset = verify.bind(mike)(zulu);
            verify = offset.transformComponents;
            zulu = tango.components;
            mike = {};
            yankee = true;
            mike['includeEmojiSrc'] = yankee;
            zulu = verify.bind(offset)(zulu, mike);
            mike = 'components';
            golf = oscar.bind(options)(mike, zulu);
 500:
            mike = tango.role_subscription_data;
            options = golf;
            if(!(report != mike)) { _fun00020_ip = 534; continue _fun00019 }
 513:
            oscar = golf.set;
            zulu = tango.role_subscription_data;
            mike = 'roleSubscriptionData';
            options = oscar.bind(golf)(mike, zulu);
 534:
            mike = tango.reactions;
            golf = options;
            if(!(report != mike)) { _fun00020_ip = 592; continue _fun00019 }
 547:
            oscar = options.set;
            verify = _closure1_slot20;
            zulu = entity.reactions;
            if(!(report == zulu)) { _fun00020_ip = 575; continue _fun00019 }
 569:
            zulu = tango.reactions;
 575:
            mike = undefined;
            zulu = verify.bind(mike)(zulu);
            mike = 'reactions';
            golf = oscar.bind(options)(mike, zulu);
 592:
            mike = tango.poll;
            verify = golf;
            if(!(report != mike)) { _fun00020_ip = 656; continue _fun00019 }
 605:
            oscar = golf.set;
            zulu = _closure1_slot1;
            options = _closure1_slot2;
            mike = 14;
            mike = options[mike];
            options = undefined;
            zulu = zulu.bind(options)(mike);
            mike = tango.poll;
            zulu = zulu.bind(options)(mike);
            mike = 'poll';
            verify = oscar.bind(golf)(mike, zulu);
 656:
            mike = tango.mentions;
            mike = report != mike;
            options = verify;
            zulu = false;
            if(!mike) { _fun00020_ip = 714; continue _fun00019 }
 674:
            golf = verify.set;
            offset = tango.mentions;
            oscar = offset.map;
            mike = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            oscar = oscar.bind(offset)(mike);
            mike = 'mentions';
            options = golf.bind(verify)(mike, oscar);
            zulu = true;
 714:
            mike = tango.mention_everyone;
            verify = options;
            if(!(report != mike)) { _fun00020_ip = 750; continue _fun00019 }
 727:
            golf = options.set;
            oscar = tango.mention_everyone;
            mike = 'mentionEveryone';
            verify = golf.bind(options)(mike, oscar);
            zulu = true;
 750:
            mike = tango.mention_roles;
            options = verify;
            if(!(report != mike)) { _fun00020_ip = 786; continue _fun00019 }
 763:
            golf = verify.set;
            oscar = tango.mention_roles;
            mike = 'mentionRoles';
            options = golf.bind(verify)(mike, oscar);
            zulu = true;
 786:
            mike = tango.potions;
            golf = options;
            if(!(report != mike)) { _fun00020_ip = 820; continue _fun00019 }
 799:
            oscar = options.set;
            report = tango.potions;
            mike = 'potions';
            golf = oscar.bind(options)(mike, report);
 820:
            mike = golf;
            if(!zulu) { _fun00020_ip = 895; continue _fun00019 }
 826:
            oscar = golf.set;
            report = _closure1_slot1;
            options = _closure1_slot2;
            zulu = 12;
            zulu = options[zulu];
            options = undefined;
            report = report.bind(options)(zulu);
            zulu = {};
            zulu['message'] = golf;
            offset = _closure1_slot8;
            verify = offset.getId;
            verify = verify.bind(offset)();
            zulu['userId'] = verify;
            report = report.bind(options)(zulu);
            zulu = 'mentioned';
            mike = oscar.bind(golf)(zulu, report);
 895:
            return mike;
 897:
            zulu = _closure1_slot16;
            mike = {};
            report = entity.reactions;
            mike['reactions'] = report;
            entity = entity.interactionData;
            mike['interactionData'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(tango, mike);
            return entity;
        }
    };
    zulu['updateMessageRecord'] = tango;
    tango = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            mike = argFoo;
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 19;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            entity = zulu.getMessageStickers;
            entity = entity.bind(zulu)(mike);
            zulu = entity.length;
            entity = 0;
            entity = entity === zulu;
            if(entity) { _fun00022_ip = 66; continue _fun00021 }
 53:
            zulu = mike.content;
            mike = '';
            entity = mike !== zulu;
 66:
            return entity;
        }
    };
    zulu['canEditMessageWithStickers'] = tango;
    mike = function(argFoo) { // Original name: hasEphemeralAppearance
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            zulu = argFoo;
            tango = zulu.hasFlag;
            entity = _closure1_slot12;
            entity = entity.EPHEMERAL;
            entity = tango.bind(zulu)(entity);
            if(!entity) { _fun00024_ip = 49; continue _fun00023 }
 30:
            zulu = zulu.type;
            mike = _closure1_slot13;
            mike = mike.IN_GAME_MESSAGE_NUX;
            entity = zulu !== mike;
 49:
            return entity;
        }
    };
    zulu['hasEphemeralAppearance'] = mike;
    return entity;
})();
// app/records/MessageRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    tango = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = tango;
    var _closure1_slot2 = options;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun44305: for(var _fun44305_ip = 0; ; ) switch(_fun44305_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot13;
            entity = entity.bind(zulu)();
            if(entity) { _fun44305_ip = 51; continue _fun44305 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun44305_ip = 92; continue _fun44305;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun44305_ip = 71; continue _fun44305 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun44306: for(var _fun44306_ip = 0; ; ) switch(_fun44306_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun44306_ip = 74; continue _fun44306;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = global;
    verify = entity.Object;
    oscar = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = options[entity];
    entity = undefined;
    mike = tango.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = options[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = options[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = options[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot6 = mike;
    mike = 4;
    mike = options[mike];
    mike = tango.bind(entity)(mike);
    var _closure1_slot7 = mike;
    mike = 5;
    mike = options[mike];
    oscar = tango.bind(entity)(mike);
    mike = 6;
    mike = options[mike];
    mike = golf.bind(entity)(mike);
    tango = mike.MessageFlags;
    var _closure1_slot8 = tango;
    tango = mike.MessageStates;
    var _closure1_slot9 = tango;
    mike = mike.MessageTypes;
    var _closure1_slot10 = mike;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: MinimalMessageRecord
            _fun44310: for(var _fun44310_ip = 0; ; ) switch(_fun44310_ip) {
 0:
                zulu = argFoo;
                oscar = this;
                entity = _closure1_slot3;
                tango = _closure2_slot0;
                mike = undefined;
                entity = entity.bind(mike)(oscar, tango);
                entity = _closure1_slot12;
                entity = entity.bind(mike)(oscar, tango);
                mike = zulu.type;
                tango = null;
                if(!(tango == mike)) { _fun44310_ip = 59; continue _fun44310 }
 49:
                report = _closure1_slot10;
                mike = report.DEFAULT;
 59:
                entity['type'] = mike;
                report = zulu.content;
                oscar = tango != report;
                mike = '';
                if(!oscar) { _fun44310_ip = 84; continue _fun44310 }
 81:
                mike = report;
 84:
                entity['content'] = mike;
                mike = zulu.attachments;
                if(!(tango == mike)) { _fun44310_ip = 104; continue _fun44310 }
 100:
                mike = new Array(0);
 104:
                entity['attachments'] = mike;
                mike = zulu.embeds;
                if(!(tango == mike)) { _fun44310_ip = 124; continue _fun44310 }
 120:
                mike = new Array(0);
 124:
                entity['embeds'] = mike;
                mike = zulu.timestamp;
                if(!(tango == mike)) { _fun44310_ip = 168; continue _fun44310 }
 140:
                report = global;
                report = report.Date;
                oscar = report.prototype;
                oscar = Object.create(oscar, {constructor: {value: report}});
                verify = oscar;
                report = new verify[report](options);
                mike = report instanceof Object ? report : oscar;
 168:
                entity['timestamp'] = mike;
                report = zulu.editedTimestamp;
                oscar = tango != report;
                mike = null;
                if(!oscar) { _fun44310_ip = 192; continue _fun44310 }
 189:
                mike = report;
 192:
                entity['editedTimestamp'] = mike;
                report = zulu.flags;
                oscar = tango != report;
                mike = 0;
                if(!oscar) { _fun44310_ip = 215; continue _fun44310 }
 212:
                mike = report;
 215:
                entity['flags'] = mike;
                mike = zulu.components;
                if(!(tango == mike)) { _fun44310_ip = 235; continue _fun44310 }
 231:
                mike = new Array(0);
 235:
                entity['components'] = mike;
                mike = zulu.codedLinks;
                if(!(tango == mike)) { _fun44310_ip = 255; continue _fun44310 }
 251:
                mike = new Array(0);
 255:
                entity['codedLinks'] = mike;
                mike = zulu.stickers;
                if(!(tango == mike)) { _fun44310_ip = 275; continue _fun44310 }
 271:
                mike = new Array(0);
 275:
                entity['stickers'] = mike;
                mike = zulu.sticker_items;
                if(!(tango == mike)) { _fun44310_ip = 297; continue _fun44310 }
 291:
                mike = zulu.stickerItems;
 297:
                if(!(tango == mike)) { _fun44310_ip = 305; continue _fun44310 }
 301:
                mike = new Array(0);
 305:
                entity['stickerItems'] = mike;
                mike = zulu.soundboard_sounds;
                if(!(tango == mike)) { _fun44310_ip = 327; continue _fun44310 }
 321:
                mike = zulu.soundboardSounds;
 327:
                entity['soundboardSounds'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        oscar = _closure1_slot7;
        zulu = undefined;
        report = argFoo;
        report = oscar.bind(zulu)(tango, report);
        mike = _closure1_slot4;
        report = {};
        oscar = 'hasFlag';
        report['key'] = oscar;
        entity = function(argFoo) { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.hasFlag;
            entity = this;
            mike = entity.flags;
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    tango = mike.bind(entity)(oscar);
    var _closure1_slot11 = tango;
    mike = function(argFoo) {
        zulu = function(argFoo) { // Original name: MessageSnapshotRecord
            report = this;
            entity = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            entity = entity.bind(zulu)(report, tango);
            entity = _closure1_slot12;
            entity = entity.bind(zulu)(report, tango);
            tango = _closure1_slot11;
            mike = argFoo;
            golf = mike.message;
            zulu = tango.prototype;
            zulu = Object.create(zulu, {constructor: {value: tango}});
            options = zulu;
            mike = new options[tango](golf, oscar);
            mike = mike instanceof Object ? mike : zulu;
            entity['message'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        report = _closure1_slot7;
        mike = undefined;
        tango = argFoo;
        tango = report.bind(mike)(zulu, tango);
        entity = _closure1_slot4;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    mike = mike.bind(entity)(oscar);
    report = function(argFoo) {
        tango = function(argFoo) { // Original name: MessageRecord
            _fun44315: for(var _fun44315_ip = 0; ; ) switch(_fun44315_ip) {
 0:
                zulu = argFoo;
                golf = this;
                entity = _closure1_slot3;
                oscar = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(golf, oscar);
                mike = _closure1_slot12;
                entity = new Array(1);
                entity[0] = zulu;
                entity = mike.bind(report)(golf, oscar, entity);
                mike = zulu.id;
                entity['id'] = mike;
                mike = zulu.channel_id;
                entity['channel_id'] = mike;
                mike = zulu.author;
                entity['author'] = mike;
                mike = zulu.customRenderedContent;
                entity['customRenderedContent'] = mike;
                mike = zulu.mentions;
                if(mike) { _fun44315_ip = 106; continue _fun44315 }
 102:
                mike = new Array(0);
 106:
                entity['mentions'] = mike;
                mike = zulu.mentionRoles;
                if(mike) { _fun44315_ip = 125; continue _fun44315 }
 121:
                mike = new Array(0);
 125:
                entity['mentionRoles'] = mike;
                mike = zulu.mentionChannels;
                if(mike) { _fun44315_ip = 144; continue _fun44315 }
 140:
                mike = new Array(0);
 144:
                entity['mentionChannels'] = mike;
                mike = zulu.mentioned;
                if(mike) { _fun44315_ip = 161; continue _fun44315 }
 159:
                mike = false;
 161:
                entity['mentioned'] = mike;
                mike = zulu.pinned;
                if(mike) { _fun44315_ip = 178; continue _fun44315 }
 176:
                mike = false;
 178:
                entity['pinned'] = mike;
                mike = zulu.mentionEveryone;
                if(mike) { _fun44315_ip = 195; continue _fun44315 }
 193:
                mike = false;
 195:
                entity['mentionEveryone'] = mike;
                mike = zulu.tts;
                if(mike) { _fun44315_ip = 212; continue _fun44315 }
 210:
                mike = false;
 212:
                entity['tts'] = mike;
                mike = zulu.giftCodes;
                if(mike) { _fun44315_ip = 231; continue _fun44315 }
 227:
                mike = new Array(0);
 231:
                entity['giftCodes'] = mike;
                mike = zulu.state;
                if(mike) { _fun44315_ip = 255; continue _fun44315 }
 245:
                tango = _closure1_slot9;
                mike = tango.SENT;
 255:
                entity['state'] = mike;
                mike = zulu.nonce;
                if(mike) { _fun44315_ip = 272; continue _fun44315 }
 270:
                mike = null;
 272:
                entity['nonce'] = mike;
                mike = zulu.blocked;
                if(mike) { _fun44315_ip = 289; continue _fun44315 }
 287:
                mike = false;
 289:
                entity['blocked'] = mike;
                mike = zulu.ignored;
                if(mike) { _fun44315_ip = 306; continue _fun44315 }
 304:
                mike = false;
 306:
                entity['ignored'] = mike;
                mike = zulu.call;
                if(mike) { _fun44315_ip = 322; continue _fun44315 }
 320:
                mike = null;
 322:
                entity['call'] = mike;
                mike = zulu.bot;
                if(mike) { _fun44315_ip = 339; continue _fun44315 }
 337:
                mike = false;
 339:
                entity['bot'] = mike;
                mike = zulu.webhookId;
                if(mike) { _fun44315_ip = 356; continue _fun44315 }
 354:
                mike = null;
 356:
                entity['webhookId'] = mike;
                mike = zulu.reactions;
                if(mike) { _fun44315_ip = 375; continue _fun44315 }
 371:
                mike = new Array(0);
 375:
                entity['reactions'] = mike;
                mike = zulu.application_id;
                if(mike) { _fun44315_ip = 395; continue _fun44315 }
 390:
                mike = zulu.applicationId;
 395:
                if(mike) { _fun44315_ip = 400; continue _fun44315 }
 398:
                mike = null;
 400:
                entity['applicationId'] = mike;
                mike = zulu.application;
                if(mike) { _fun44315_ip = 416; continue _fun44315 }
 414:
                mike = null;
 416:
                entity['application'] = mike;
                mike = zulu.activity;
                if(mike) { _fun44315_ip = 433; continue _fun44315 }
 431:
                mike = null;
 433:
                entity['activity'] = mike;
                mike = zulu.activity_instance;
                if(mike) { _fun44315_ip = 454; continue _fun44315 }
 448:
                mike = zulu.activityInstance;
 454:
                if(mike) { _fun44315_ip = 459; continue _fun44315 }
 457:
                mike = null;
 459:
                entity['activityInstance'] = mike;
                mike = zulu.messageReference;
                if(mike) { _fun44315_ip = 476; continue _fun44315 }
 474:
                mike = null;
 476:
                entity['messageReference'] = mike;
                mike = zulu.hit;
                if(mike) { _fun44315_ip = 499; continue _fun44315 }
 493:
                mike = zulu.isSearchHit;
 499:
                if(mike) { _fun44315_ip = 504; continue _fun44315 }
 502:
                mike = false;
 504:
                entity['isSearchHit'] = mike;
                mike = zulu.loggingName;
                if(mike) { _fun44315_ip = 521; continue _fun44315 }
 519:
                mike = null;
 521:
                entity['loggingName'] = mike;
                mike = zulu.colorString;
                entity['colorString'] = mike;
                mike = zulu.nick;
                entity['nick'] = mike;
                mike = zulu.interaction;
                if(mike) { _fun44315_ip = 562; continue _fun44315 }
 560:
                mike = null;
 562:
                entity['interaction'] = mike;
                mike = zulu.interactionData;
                if(mike) { _fun44315_ip = 579; continue _fun44315 }
 577:
                mike = null;
 579:
                entity['interactionData'] = mike;
                mike = zulu.interactionMetadata;
                if(mike) { _fun44315_ip = 596; continue _fun44315 }
 594:
                mike = null;
 596:
                entity['interactionMetadata'] = mike;
                mike = zulu.interactionError;
                if(mike) { _fun44315_ip = 613; continue _fun44315 }
 611:
                mike = null;
 613:
                entity['interactionError'] = mike;
                mike = zulu.roleSubscriptionData;
                entity['roleSubscriptionData'] = mike;
                mike = zulu.purchaseNotification;
                entity['purchaseNotification'] = mike;
                mike = zulu.poll;
                entity['poll'] = mike;
                mike = zulu.potions;
                entity['potions'] = mike;
                mike = zulu.referralTrialOfferId;
                if(mike) { _fun44315_ip = 678; continue _fun44315 }
 676:
                mike = null;
 678:
                entity['referralTrialOfferId'] = mike;
                mike = zulu.gift_info;
                tango = null;
                if(!(tango == mike)) { _fun44315_ip = 702; continue _fun44315 }
 696:
                mike = zulu.giftInfo;
 702:
                entity['giftInfo'] = mike;
                mike = zulu.giftingPrompt;
                if(mike) { _fun44315_ip = 719; continue _fun44315 }
 717:
                mike = null;
 719:
                entity['giftingPrompt'] = mike;
                mike = zulu.messageSnapshots;
                if(mike) { _fun44315_ip = 738; continue _fun44315 }
 734:
                mike = new Array(0);
 738:
                entity['messageSnapshots'] = mike;
                mike = zulu.isUnsupported;
                if(mike) { _fun44315_ip = 755; continue _fun44315 }
 753:
                mike = false;
 755:
                entity['isUnsupported'] = mike;
                mike = zulu.changelog_id;
                if(!(tango == mike)) { _fun44315_ip = 785; continue _fun44315 }
 771:
                zulu = zulu.changelogId;
                if(zulu) { _fun44315_ip = 782; continue _fun44315 }
 780:
                zulu = null;
 782:
                mike = zulu;
 785:
                entity['changelogId'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'isEdited';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            mike = entity.editedTimestamp;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(18);
        entity[0] = report;
        report = {};
        golf = 'getChannelId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            entity = entity.channel_id;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getReaction';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = this;
            zulu = mike.reactions;
            mike = zulu.find;
            entity = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.emojiEquals;
                entity = argFoo;
                mike = entity.emoji;
                entity = _closure3_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getContentMessage';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun44320: for(var _fun44320_ip = 0; ; ) switch(_fun44320_ip) {
 0:
                zulu = this;
                tango = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 9;
                entity = mike[entity];
                mike = undefined;
                entity = tango.bind(mike)(entity);
                tango = entity.bind(mike)(zulu);
                entity = zulu;
                if(!tango) { _fun44320_ip = 70; continue _fun44320 }
 39:
                tango = zulu.messageSnapshots;
                zulu = 0;
                zulu = tango[zulu];
                tango = null;
                tango = tango == zulu;
                mike = undefined;
                if(tango) { _fun44320_ip = 67; continue _fun44320 }
 62:
                mike = zulu.message;
 67:
                entity = mike;
 70:
                return entity;
            }
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'userHasReactedWithEmoji';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            mike = argFoo;
            var _closure3_slot0 = mike;
            mike = argBar;
            var _closure3_slot1 = mike;
            mike = this;
            zulu = mike.reactions;
            mike = zulu.some;
            entity = function(argFoo) {
                _fun44322: for(var _fun44322_ip = 0; ; ) switch(_fun44322_ip) {
 0:
                    zulu = argFoo;
                    tango = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 8;
                    mike = mike[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(mike);
                    oscar = golf.emojiEquals;
                    report = zulu.emoji;
                    tango = _closure3_slot0;
                    tango = oscar.bind(golf)(report, tango);
                    if(tango) { _fun44322_ip = 58; continue _fun44322 }
 56:
                    return entity;
 58:
                    entity = _closure3_slot1;
                    if(!entity) { _fun44322_ip = 71; continue _fun44322 }
 65:
                    entity = zulu.me;
 71:
                    if(entity) { _fun44322_ip = 93; continue _fun44322 }
 74:
                    mike = _closure3_slot1;
                    mike = !mike;
                    if(!mike) { _fun44322_ip = 90; continue _fun44322 }
 84:
                    mike = zulu.me_burst;
 90:
                    entity = mike;
 93:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'addReaction';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun44323: for(var _fun44323_ip = 0; ; ) switch(_fun44323_ip) {
 0:
                oscar = argFoo;
                report = arguments[1];
                verify = arguments[2];
                mike = arguments[3];
                tango = this;
                var _closure3_slot0 = oscar;
                offset = undefined;
                if(!(report === offset)) { _fun44323_ip = 29; continue _fun44323 }
 27:
                report = false;
 29:
                var _closure3_slot1 = report;
                if(!(verify === offset)) { _fun44323_ip = 41; continue _fun44323 }
 37:
                verify = new Array(0);
 41:
                var _closure3_slot2 = verify;
                if(!(mike === offset)) { _fun44323_ip = 84; continue _fun44323 }
 49:
                golf = _closure1_slot0;
                options = _closure1_slot2;
                zulu = 10;
                zulu = options[zulu];
                zulu = golf.bind(offset)(zulu);
                zulu = zulu.ReactionTypes;
                mike = zulu.NORMAL;
 84:
                var _closure3_slot3 = mike;
                golf = -1;
                var _closure3_slot4 = golf;
                yankee = tango.reactions;
                options = yankee.map;
                zulu = function(argFoo, argBar) {
                    _fun44324: for(var _fun44324_ip = 0; ; ) switch(_fun44324_ip) {
 0:
                        entity = argFoo;
                        zulu = _closure1_slot0;
                        report = _closure1_slot2;
                        mike = 8;
                        mike = report[mike];
                        verify = undefined;
                        golf = zulu.bind(verify)(mike);
                        oscar = golf.emojiEquals;
                        zulu = entity.emoji;
                        mike = _closure3_slot0;
                        zulu = oscar.bind(golf)(zulu, mike);
                        mike = entity;
                        if(!zulu) { _fun44324_ip = 704; continue _fun44324 }
 62:
                        zulu = argBar;
                        _closure3_slot4 = zulu;
                        oscar = _closure3_slot3;
                        golf = _closure1_slot0;
                        zulu = _closure1_slot2;
                        options = 10;
                        zulu = zulu[options];
                        zulu = golf.bind(verify)(zulu);
                        zulu = zulu.ReactionTypes;
                        zulu = zulu.BURST;
                        if(!(oscar !== zulu)) { _fun44324_ip = 440; continue _fun44324 }
 112:
                        oscar = _closure3_slot3;
                        golf = _closure1_slot0;
                        zulu = _closure1_slot2;
                        zulu = zulu[options];
                        zulu = golf.bind(verify)(zulu);
                        zulu = zulu.ReactionTypes;
                        zulu = zulu.VOTE;
                        if(!(oscar !== zulu)) { _fun44324_ip = 298; continue _fun44324 }
 152:
                        zulu = _closure3_slot1;
                        if(!zulu) { _fun44324_ip = 171; continue _fun44324 }
 159:
                        zulu = entity.me_burst;
                        if(zulu) { _fun44324_ip = 296; continue _fun44324 }
 171:
                        zulu = _closure3_slot1;
                        if(!zulu) { _fun44324_ip = 187; continue _fun44324 }
 178:
                        zulu = entity.me;
                        if(zulu) { _fun44324_ip = 201; continue _fun44324 }
 187:
                        oscar = entity.count;
                        zulu = 1;
                        options = oscar + zulu;
                        _fun44324_ip = 206; continue _fun44324;
 201:
                        options = entity.count;
 206:
                        zulu = {};
                        romeo = zulu;
                        yankee = entity;
                        oscar = copyDataProperties(romeo, yankee);
                        oscar = 'count';
                        zulu[oscar] = options;
                        golf = {};
                        yankee = entity.count_details;
                        romeo = golf;
                        oscar = copyDataProperties(romeo, yankee);
                        oscar = 'normal';
                        golf[oscar] = options;
                        oscar = 'count_details';
                        zulu[oscar] = golf;
                        oscar = _closure3_slot1;
                        oscar = !oscar;
                        golf = !oscar;
                        if(!oscar) { _fun44324_ip = 279; continue _fun44324 }
 273:
                        golf = entity.me;
 279:
                        oscar = 'me';
                        zulu[oscar] = golf;
                        mike = zulu;
                        _fun44324_ip = 704; continue _fun44324;
 296:
                        return entity;
 298:
                        golf = entity.count_details;
                        oscar = null;
                        options = oscar == golf;
                        zulu = undefined;
                        if(options) { _fun44324_ip = 321; continue _fun44324 }
 315:
                        zulu = golf.vote;
 321:
                        golf = oscar != zulu;
                        oscar = 0;
                        if(!golf) { _fun44324_ip = 333; continue _fun44324 }
 330:
                        oscar = zulu;
 333:
                        zulu = _closure3_slot1;
                        if(!zulu) { _fun44324_ip = 352; continue _fun44324 }
 340:
                        zulu = entity.me_vote;
                        options = oscar;
                        if(zulu) { _fun44324_ip = 359; continue _fun44324 }
 352:
                        zulu = 1;
                        options = oscar + zulu;
 359:
                        zulu = {};
                        romeo = zulu;
                        yankee = entity;
                        oscar = copyDataProperties(romeo, yankee);
                        golf = {};
                        yankee = entity.count_details;
                        romeo = golf;
                        oscar = copyDataProperties(romeo, yankee);
                        oscar = 'vote';
                        golf[oscar] = options;
                        oscar = 'count_details';
                        zulu[oscar] = golf;
                        oscar = _closure3_slot1;
                        oscar = !oscar;
                        golf = !oscar;
                        if(!oscar) { _fun44324_ip = 423; continue _fun44324 }
 417:
                        golf = entity.me_vote;
 423:
                        oscar = 'me_vote';
                        zulu[oscar] = golf;
                        mike = zulu;
                        _fun44324_ip = 704; continue _fun44324;
 440:
                        zulu = _closure3_slot1;
                        if(!zulu) { _fun44324_ip = 459; continue _fun44324 }
 447:
                        zulu = entity.me;
                        if(zulu) { _fun44324_ip = 706; continue _fun44324 }
 459:
                        zulu = _closure3_slot1;
                        if(!zulu) { _fun44324_ip = 475; continue _fun44324 }
 466:
                        zulu = entity.me_burst;
                        if(zulu) { _fun44324_ip = 490; continue _fun44324 }
 475:
                        oscar = entity.burst_count;
                        zulu = 1;
                        options = oscar + zulu;
                        _fun44324_ip = 496; continue _fun44324;
 490:
                        options = entity.burst_count;
 496:
                        oscar = entity.burst_colors;
                        zulu = null;
                        if(!(zulu != oscar)) { _fun44324_ip = 525; continue _fun44324 }
 508:
                        zulu = entity.burst_colors;
                        oscar = zulu.length;
                        zulu = 0;
                        if(!(!(oscar > zulu))) { _fun44324_ip = 531; continue _fun44324 }
 525:
                        golf = _closure3_slot2;
                        _fun44324_ip = 537; continue _fun44324;
 531:
                        golf = entity.burst_colors;
 537:
                        zulu = {};
                        romeo = zulu;
                        yankee = entity;
                        oscar = copyDataProperties(romeo, yankee);
                        report = _closure3_slot1;
                        report = !report;
                        oscar = !report;
                        if(!report) { _fun44324_ip = 568; continue _fun44324 }
 562:
                        oscar = entity.me_burst;
 568:
                        report = 'me_burst';
                        zulu[report] = oscar;
                        report = 'burst_count';
                        zulu[report] = options;
                        oscar = {};
                        yankee = entity.count_details;
                        romeo = oscar;
                        report = copyDataProperties(romeo, yankee);
                        report = 'burst';
                        oscar[report] = options;
                        report = 'count_details';
                        zulu[report] = oscar;
                        report = 'burst_colors';
                        zulu[report] = golf;
                        options = _closure1_slot0;
                        offset = _closure1_slot2;
                        tango = 11;
                        tango = offset[tango];
                        oscar = options.bind(verify)(tango);
                        report = oscar.buildPlatformedThemedEmojiColorPalette;
                        tango = {};
                        tango['colors'] = golf;
                        golf = 12;
                        golf = offset[golf];
                        options = options.bind(verify)(golf);
                        golf = options.isIOS;
                        golf = golf.bind(options)();
                        tango['shouldProcessMobileColors'] = golf;
                        report = report.bind(oscar)(tango);
                        tango = 'themedBurstColors';
                        zulu[tango] = report;
                        mike = zulu;
 704:
                        return mike;
 706:
                        return entity;
                    }
                };
                zulu = options.bind(yankee)(zulu);
                entity = _closure3_slot4;
                if(!(golf === entity)) { _fun44323_ip = 473; continue _fun44323 }
 130:
                golf = _closure1_slot0;
                entity = _closure1_slot2;
                yankee = 10;
                entity = entity[yankee];
                entity = golf.bind(offset)(entity);
                entity = entity.ReactionTypes;
                entity = entity.BURST;
                if(!(mike !== entity)) { _fun44323_ip = 333; continue _fun44323 }
 172:
                golf = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[yankee];
                entity = golf.bind(offset)(entity);
                entity = entity.ReactionTypes;
                entity = entity.VOTE;
                if(!(mike !== entity)) { _fun44323_ip = 267; continue _fun44323 }
 205:
                mike = zulu.push;
                entity = {'emoji': null, 'me': null, 'me_burst': false, 'count': 1, 'count_details': null, 'burst_count': 0};
                entity['emoji'] = oscar;
                entity['me'] = report;
                golf = {'burst': 0, 'normal': 1};
                entity['count_details'] = golf;
                golf = new Array(0);
                entity['burst_colors'] = golf;
                entity = mike.bind(zulu)(entity);
                _fun44323_ip = 473; continue _fun44323;
 267:
                mike = zulu.push;
                entity = {'emoji': null, 'me': false, 'me_burst': false, 'me_vote': null, 'count': 0, 'count_details': null, 'burst_count': 0};
                entity['emoji'] = oscar;
                entity['me_vote'] = report;
                golf = {'burst': 0, 'normal': 0, 'vote': 1};
                entity['count_details'] = golf;
                golf = new Array(0);
                entity['burst_colors'] = golf;
                entity = mike.bind(zulu)(entity);
                _fun44323_ip = 473; continue _fun44323;
 333:
                mike = zulu.push;
                entity = {'emoji': null, 'me': false, 'me_burst': null, 'count': 0, 'count_details': null, 'burst_count': 1};
                entity['emoji'] = oscar;
                entity['me_burst'] = report;
                report = {'burst': 1, 'normal': 0};
                entity['count_details'] = report;
                entity['burst_colors'] = verify;
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                report = 11;
                report = golf[report];
                golf = oscar.bind(offset)(report);
                oscar = golf.buildPlatformedThemedEmojiColorPalette;
                report = {};
                yankee = null;
                if(!(yankee == verify)) { _fun44323_ip = 419; continue _fun44323 }
 415:
                verify = new Array(0);
 419:
                report['colors'] = verify;
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                options = 12;
                options = yankee[options];
                verify = verify.bind(offset)(options);
                options = verify.isIOS;
                options = options.bind(verify)();
                report['shouldProcessMobileColors'] = options;
                report = oscar.bind(golf)(report);
                entity['themedBurstColors'] = report;
                entity = mike.bind(zulu)(entity);
 473:
                mike = tango.set;
                entity = 'reactions';
                entity = mike.bind(tango)(entity, zulu);
                return entity;
            }
        };
        report['value'] = golf;
        entity[5] = report;
        report = {};
        golf = 'addReactionBatch';
        report['key'] = golf;
        golf = function(argFoo, argBar) { // Original name: value
            tango = argFoo;
            mike = argBar;
            var _closure3_slot0 = mike;
            zulu = tango.reduce;
            mike = function(argFoo, argBar) {
                mike = argBar;
                tango = mike.users;
                mike = mike.emoji;
                var _closure4_slot0 = mike;
                zulu = tango.reduce;
                mike = function(argFoo, argBar) {
                    tango = argFoo;
                    zulu = tango.addReaction;
                    mike = _closure4_slot0;
                    report = _closure3_slot0;
                    entity = argBar;
                    entity = entity === report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                };
                entity = argFoo;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            entity = this;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[6] = report;
        report = {};
        golf = 'removeReaction';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun44328: for(var _fun44328_ip = 0; ; ) switch(_fun44328_ip) {
 0:
                report = arguments[1];
                zulu = arguments[2];
                tango = this;
                mike = argFoo;
                var _closure3_slot0 = mike;
                mike = undefined;
                if(!(report === mike)) { _fun44328_ip = 26; continue _fun44328 }
 24:
                report = false;
 26:
                var _closure3_slot1 = report;
                if(!(zulu === mike)) { _fun44328_ip = 69; continue _fun44328 }
 34:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                report = 10;
                report = golf[report];
                report = oscar.bind(mike)(report);
                report = report.ReactionTypes;
                zulu = report.NORMAL;
 69:
                var _closure3_slot2 = zulu;
                yankee = -1;
                var _closure3_slot3 = yankee;
                oscar = tango.reactions;
                report = oscar.map;
                zulu = function(argFoo, argBar) {
                    _fun44329: for(var _fun44329_ip = 0; ; ) switch(_fun44329_ip) {
 0:
                        report = argFoo;
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 8;
                        entity = zulu[entity];
                        zulu = undefined;
                        options = tango.bind(zulu)(entity);
                        golf = options.emojiEquals;
                        oscar = report.emoji;
                        entity = _closure3_slot0;
                        oscar = golf.bind(options)(oscar, entity);
                        entity = report;
                        if(!oscar) { _fun44329_ip = 526; continue _fun44329 }
 62:
                        golf = _closure3_slot2;
                        verify = _closure1_slot0;
                        oscar = _closure1_slot2;
                        options = 10;
                        oscar = oscar[options];
                        oscar = verify.bind(zulu)(oscar);
                        oscar = oscar.ReactionTypes;
                        oscar = oscar.BURST;
                        if(!(golf !== oscar)) { _fun44329_ip = 397; continue _fun44329 }
 105:
                        oscar = _closure3_slot2;
                        golf = _closure1_slot0;
                        mike = _closure1_slot2;
                        mike = mike[options];
                        mike = golf.bind(zulu)(mike);
                        mike = mike.ReactionTypes;
                        mike = mike.VOTE;
                        if(!(oscar !== mike)) { _fun44329_ip = 261; continue _fun44329 }
 142:
                        mike = _closure3_slot1;
                        if(!mike) { _fun44329_ip = 165; continue _fun44329 }
 149:
                        mike = report.me;
                        if(mike) { _fun44329_ip = 165; continue _fun44329 }
 158:
                        options = report.count;
                        _fun44329_ip = 177; continue _fun44329;
 165:
                        oscar = report.count;
                        mike = 1;
                        options = oscar - mike;
 177:
                        mike = {};
                        yankee = mike;
                        offset = report;
                        oscar = copyDataProperties(yankee, offset);
                        oscar = 'count';
                        mike[oscar] = options;
                        oscar = _closure3_slot1;
                        golf = !oscar;
                        if(!golf) { _fun44329_ip = 214; continue _fun44329 }
 208:
                        golf = report.me;
 214:
                        oscar = 'me';
                        mike[oscar] = golf;
                        golf = {};
                        offset = report.count_details;
                        yankee = golf;
                        oscar = copyDataProperties(yankee, offset);
                        oscar = 'normal';
                        golf[oscar] = options;
                        oscar = 'count_details';
                        mike[oscar] = golf;
                        _fun44329_ip = 516; continue _fun44329;
 261:
                        golf = report.count_details;
                        oscar = null;
                        options = oscar == golf;
                        zulu = undefined;
                        if(options) { _fun44329_ip = 284; continue _fun44329 }
 278:
                        zulu = golf.vote;
 284:
                        golf = oscar != zulu;
                        oscar = 0;
                        if(!golf) { _fun44329_ip = 296; continue _fun44329 }
 293:
                        oscar = zulu;
 296:
                        zulu = _closure3_slot1;
                        if(!zulu) { _fun44329_ip = 315; continue _fun44329 }
 303:
                        zulu = report.me_vote;
                        options = oscar;
                        if(!zulu) { _fun44329_ip = 322; continue _fun44329 }
 315:
                        zulu = 1;
                        options = oscar - zulu;
 322:
                        zulu = {};
                        yankee = zulu;
                        offset = report;
                        oscar = copyDataProperties(yankee, offset);
                        golf = {};
                        offset = report.count_details;
                        yankee = golf;
                        oscar = copyDataProperties(yankee, offset);
                        oscar = 'vote';
                        golf[oscar] = options;
                        oscar = 'count_details';
                        zulu[oscar] = golf;
                        oscar = _closure3_slot1;
                        golf = !oscar;
                        if(!golf) { _fun44329_ip = 383; continue _fun44329 }
 377:
                        golf = report.me_vote;
 383:
                        oscar = 'me_vote';
                        zulu[oscar] = golf;
                        mike = zulu;
                        _fun44329_ip = 516; continue _fun44329;
 397:
                        zulu = _closure3_slot1;
                        if(!zulu) { _fun44329_ip = 421; continue _fun44329 }
 404:
                        zulu = report.me_burst;
                        if(zulu) { _fun44329_ip = 421; continue _fun44329 }
 413:
                        golf = report.burst_count;
                        _fun44329_ip = 434; continue _fun44329;
 421:
                        oscar = report.burst_count;
                        zulu = 1;
                        golf = oscar - zulu;
 434:
                        zulu = {};
                        yankee = zulu;
                        offset = report;
                        oscar = copyDataProperties(yankee, offset);
                        oscar = 'burst_count';
                        zulu[oscar] = golf;
                        oscar = _closure3_slot1;
                        options = !oscar;
                        if(!options) { _fun44329_ip = 471; continue _fun44329 }
 465:
                        options = report.me_burst;
 471:
                        oscar = 'me_burst';
                        zulu[oscar] = options;
                        oscar = {};
                        offset = report.count_details;
                        yankee = oscar;
                        report = copyDataProperties(yankee, offset);
                        report = 'burst';
                        oscar[report] = golf;
                        report = 'count_details';
                        zulu[report] = oscar;
                        mike = zulu;
 516:
                        zulu = argBar;
                        _closure3_slot3 = zulu;
                        entity = mike;
 526:
                        return entity;
                    }
                };
                zulu = report.bind(oscar)(zulu);
                report = _closure3_slot3;
                oscar = zulu[report];
                report = null;
                if(!(report == oscar)) { _fun44328_ip = 120; continue _fun44328 }
 118:
                oscar = {};
 120:
                offset = oscar.count;
                verify = oscar.burst_count;
                romeo = oscar.count_details;
                oscar = report == romeo;
                golf = undefined;
                if(oscar) { _fun44328_ip = 152; continue _fun44328 }
 146:
                golf = romeo.normal;
 152:
                foxtrot = report != golf;
                oscar = 0;
                options = 0;
                if(!foxtrot) { _fun44328_ip = 166; continue _fun44328 }
 163:
                options = golf;
 166:
                golf = report == romeo;
                foxtrot = undefined;
                if(golf) { _fun44328_ip = 181; continue _fun44328 }
 175:
                foxtrot = romeo.burst;
 181:
                backup = report != foxtrot;
                golf = 0;
                if(!backup) { _fun44328_ip = 193; continue _fun44328 }
 190:
                golf = foxtrot;
 193:
                foxtrot = report == romeo;
                mike = undefined;
                if(foxtrot) { _fun44328_ip = 208; continue _fun44328 }
 202:
                mike = romeo.vote;
 208:
                romeo = report != mike;
                report = 0;
                if(!romeo) { _fun44328_ip = 220; continue _fun44328 }
 217:
                report = mike;
 220:
                mike = _closure3_slot3;
                mike = yankee !== mike;
                if(!mike) { _fun44328_ip = 235; continue _fun44328 }
 231:
                mike = offset <= oscar;
 235:
                if(!mike) { _fun44328_ip = 242; continue _fun44328 }
 238:
                mike = verify <= oscar;
 242:
                if(!mike) { _fun44328_ip = 249; continue _fun44328 }
 245:
                mike = options <= oscar;
 249:
                if(!mike) { _fun44328_ip = 256; continue _fun44328 }
 252:
                mike = golf <= oscar;
 256:
                if(!mike) { _fun44328_ip = 263; continue _fun44328 }
 259:
                mike = report <= oscar;
 263:
                if(!mike) { _fun44328_ip = 285; continue _fun44328 }
 266:
                report = zulu.splice;
                mike = _closure3_slot3;
                entity = 1;
                entity = report.bind(zulu)(mike, entity);
 285:
                mike = tango.set;
                entity = 'reactions';
                entity = mike.bind(tango)(entity, zulu);
                return entity;
            }
        };
        report['value'] = golf;
        entity[7] = report;
        report = {};
        golf = 'removeReactionsForEmoji';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            tango = this;
            mike = argFoo;
            var _closure3_slot0 = mike;
            zulu = tango.set;
            report = tango.reactions;
            mike = report.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 8;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.emojiEquals;
                entity = argFoo;
                mike = entity.emoji;
                entity = _closure3_slot0;
                entity = zulu.bind(tango)(mike, entity);
                entity = !entity;
                return entity;
            };
            mike = mike.bind(report)(entity);
            entity = 'reactions';
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        report['value'] = golf;
        entity[8] = report;
        report = {};
        golf = 'isSystemDM';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.author;
            entity = mike.isSystemUser;
            entity = entity.bind(mike)();
            return entity;
        };
        report['value'] = golf;
        entity[9] = report;
        report = {};
        golf = 'isCommandType';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun44333: for(var _fun44333_ip = 0; ; ) switch(_fun44333_ip) {
 0:
                zulu = this;
                tango = zulu.type;
                entity = _closure1_slot10;
                entity = entity.CHAT_INPUT_COMMAND;
                entity = tango === entity;
                if(entity) { _fun44333_ip = 47; continue _fun44333 }
 28:
                zulu = zulu.type;
                mike = _closure1_slot10;
                mike = mike.CONTEXT_MENU_COMMAND;
                entity = zulu === mike;
 47:
                return entity;
            }
        };
        report['value'] = golf;
        entity[10] = report;
        report = {};
        golf = 'isPoll';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = this;
            mike = entity.poll;
            entity = null;
            entity = entity != mike;
            return entity;
        };
        report['value'] = golf;
        entity[11] = report;
        report = {};
        golf = 'hasPotions';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun44335: for(var _fun44335_ip = 0; ; ) switch(_fun44335_ip) {
 0:
                entity = this;
                mike = entity.potions;
                entity = null;
                tango = entity == mike;
                zulu = undefined;
                if(tango) { _fun44335_ip = 25; continue _fun44335 }
 20:
                zulu = mike.length;
 25:
                tango = entity != zulu;
                mike = 0;
                entity = 0;
                if(!tango) { _fun44335_ip = 39; continue _fun44335 }
 36:
                entity = zulu;
 39:
                entity = entity > mike;
                return entity;
            }
        };
        report['value'] = golf;
        entity[12] = report;
        report = {};
        golf = 'isComponentsV2';
        report['key'] = golf;
        golf = function() { // Original name: value
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.hasFlag;
            mike = this;
            mike = mike.flags;
            entity = _closure1_slot8;
            entity = entity.IS_COMPONENTS_V2;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        report['value'] = golf;
        entity[13] = report;
        report = {};
        golf = 'isInteractionPlaceholder';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun44337: for(var _fun44337_ip = 0; ; ) switch(_fun44337_ip) {
 0:
                mike = this;
                zulu = mike.interaction;
                entity = null;
                entity = entity != zulu;
                if(!entity) { _fun44337_ip = 34; continue _fun44337 }
 18:
                zulu = mike.author;
                mike = zulu.isNonUserBot;
                entity = mike.bind(zulu)();
 34:
                return entity;
            }
        };
        report['value'] = golf;
        entity[14] = report;
        report = {};
        golf = 'canDeleteOwnMessage';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun44338: for(var _fun44338_ip = 0; ; ) switch(_fun44338_ip) {
 0:
                mike = argFoo;
                tango = this;
                entity = tango.author;
                entity = entity.id;
                if(!(entity !== mike)) { _fun44338_ip = 161; continue _fun44338 }
 24:
                oscar = tango.interactionMetadata;
                entity = null;
                golf = entity == oscar;
                report = undefined;
                zulu = undefined;
                if(golf) { _fun44338_ip = 49; continue _fun44338 }
 43:
                zulu = oscar.authorizing_integration_owners;
 49:
                if(!(entity == zulu)) { _fun44338_ip = 55; continue _fun44338 }
 53:
                zulu = {};
 55:
                tango = tango.interactionMetadata;
                oscar = entity == tango;
                entity = undefined;
                if(oscar) { _fun44338_ip = 80; continue _fun44338 }
 70:
                tango = tango.user;
                entity = tango.id;
 80:
                entity = entity === mike;
                if(!entity) { _fun44338_ip = 117; continue _fun44338 }
 87:
                mike = global;
                tango = mike.Object;
                mike = tango.keys;
                mike = mike.bind(tango)(zulu);
                tango = mike.length;
                mike = 1;
                entity = mike === tango;
 117:
                if(!entity) { _fun44338_ip = 159; continue _fun44338 }
 120:
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 13;
                mike = oscar[mike];
                mike = tango.bind(report)(mike);
                mike = mike.ApplicationIntegrationType;
                mike = mike.USER_INSTALL;
                entity = mike in zulu;
 159:
                return entity;
 161:
                entity = true;
                return entity;
            }
        };
        report['value'] = golf;
        entity[15] = report;
        report = {};
        golf = 'toJS';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = this;
            entity = {};
            oscar = entity;
            report = mike;
            zulu = copyDataProperties(oscar, report);
            tango = mike.webhookId;
            zulu = 'webkhook_id';
            entity[zulu] = tango;
            tango = mike.editedTimestamp;
            zulu = 'edited_timestamp';
            entity[zulu] = tango;
            zulu = mike.mentionEveryone;
            mike = 'mention_everyone';
            entity[mike] = zulu;
            return entity;
        };
        report['value'] = golf;
        entity[16] = report;
        report = {};
        golf = 'isFirstMessageInForumPost';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun44340: for(var _fun44340_ip = 0; ; ) switch(_fun44340_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity.id;
                entity = entity.channel_id;
                entity = mike === entity;
                if(!entity) { _fun44340_ip = 33; continue _fun44340 }
 23:
                mike = zulu.isForumPost;
                entity = mike.bind(zulu)();
 33:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[17] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    report = report.bind(entity)(tango);
    oscar = 14;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'records/MessageRecord.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['default'] = report;
    zulu['MinimalMessageRecord'] = tango;
    zulu['MessageSnapshotRecord'] = mike;
    return entity;
})();
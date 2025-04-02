// app/records/MessageRecord.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    tangon = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = tangon;
    var _closure1_slot2 = option;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    oscard = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = option[entity];
    entity = undefined;
    michal = tangon.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 4;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 5;
    michal = option[michal];
    oscard = tangon.bind(entity)(michal);
    michal = 6;
    michal = option[michal];
    michal = tangon.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = option[michal];
    michal = golfie.bind(entity)(michal);
    tangon = michal.MessageFlags;
    var _closure1_slot9 = tangon;
    tangon = michal.MessageStates;
    var _closure1_slot10 = tangon;
    michal = michal.MessageTypes;
    var _closure1_slot11 = michal;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: MinimalMessageRecord
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = argFoo;
                oscard = this;
                entity = _closure1_slot3;
                tangon = _closure2_slot0;
                michal = undefined;
                entity = entity.bind(michal)(oscard, tangon);
                entity = _closure1_slot13;
                entity = entity.bind(michal)(oscard, tangon);
                michal = zuuluu.type;
                tangon = null;
                if(!(tangon == michal)) { _fun00006_ip = 59; continue _fun00005 }
 49:
                report = _closure1_slot11;
                michal = report.DEFAULT;
 59:
                entity['type'] = michal;
                report = zuuluu.content;
                oscard = tangon != report;
                michal = '';
                if(!oscard) { _fun00006_ip = 84; continue _fun00005 }
 81:
                michal = report;
 84:
                entity['content'] = michal;
                michal = zuuluu.attachments;
                if(!(tangon == michal)) { _fun00006_ip = 104; continue _fun00005 }
 100:
                michal = new Array(0);
 104:
                entity['attachments'] = michal;
                michal = zuuluu.embeds;
                if(!(tangon == michal)) { _fun00006_ip = 124; continue _fun00005 }
 120:
                michal = new Array(0);
 124:
                entity['embeds'] = michal;
                michal = zuuluu.timestamp;
                if(!(tangon == michal)) { _fun00006_ip = 168; continue _fun00005 }
 140:
                report = global;
                report = report.Date;
                oscard = report.prototype;
                oscard = Object.create(oscard, {constructor: {value: report}});
                verify = oscard;
                report = new verify[report](option);
                michal = report instanceof Object ? report : oscard;
 168:
                entity['timestamp'] = michal;
                report = zuuluu.editedTimestamp;
                oscard = tangon != report;
                michal = null;
                if(!oscard) { _fun00006_ip = 192; continue _fun00005 }
 189:
                michal = report;
 192:
                entity['editedTimestamp'] = michal;
                report = zuuluu.flags;
                oscard = tangon != report;
                michal = 0;
                if(!oscard) { _fun00006_ip = 215; continue _fun00005 }
 212:
                michal = report;
 215:
                entity['flags'] = michal;
                michal = zuuluu.components;
                if(!(tangon == michal)) { _fun00006_ip = 235; continue _fun00005 }
 231:
                michal = new Array(0);
 235:
                entity['components'] = michal;
                michal = zuuluu.codedLinks;
                if(!(tangon == michal)) { _fun00006_ip = 255; continue _fun00005 }
 251:
                michal = new Array(0);
 255:
                entity['codedLinks'] = michal;
                michal = zuuluu.stickers;
                if(!(tangon == michal)) { _fun00006_ip = 275; continue _fun00005 }
 271:
                michal = new Array(0);
 275:
                entity['stickers'] = michal;
                michal = zuuluu.sticker_items;
                if(!(tangon == michal)) { _fun00006_ip = 297; continue _fun00005 }
 291:
                michal = zuuluu.stickerItems;
 297:
                if(!(tangon == michal)) { _fun00006_ip = 305; continue _fun00005 }
 301:
                michal = new Array(0);
 305:
                entity['stickerItems'] = michal;
                michal = zuuluu.soundboard_sounds;
                if(!(tangon == michal)) { _fun00006_ip = 327; continue _fun00005 }
 321:
                michal = zuuluu.soundboardSounds;
 327:
                entity['soundboardSounds'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        oscard = _closure1_slot7;
        zuuluu = undefined;
        report = argFoo;
        report = oscard.bind(zuuluu)(tangon, report);
        michal = _closure1_slot4;
        report = {};
        oscard = 'hasFlag';
        report['key'] = oscard;
        entity = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.hasFlag;
            entity = this;
            michal = entity.flags;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(1);
        entity[0] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    tangon = michal.bind(entity)(oscard);
    var _closure1_slot12 = tangon;
    michal = function(argFoo) {
        zuuluu = function(argFoo) { // Original name: MessageSnapshotRecord
            report = this;
            entity = _closure1_slot3;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            entity = entity.bind(zuuluu)(report, tangon);
            entity = _closure1_slot13;
            entity = entity.bind(zuuluu)(report, tangon);
            tangon = _closure1_slot12;
            michal = argFoo;
            golfie = michal.message;
            zuuluu = tangon.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
            option = zuuluu;
            michal = new option[tangon](golfie, oscard);
            michal = michal instanceof Object ? michal : zuuluu;
            entity['message'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot7;
        michal = undefined;
        tangon = argFoo;
        tangon = report.bind(michal)(zuuluu, tangon);
        entity = _closure1_slot4;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    michal = michal.bind(entity)(oscard);
    report = function(argFoo) {
        tangon = function(argFoo) { // Original name: MessageRecord
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                golfie = this;
                entity = _closure1_slot3;
                oscard = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(golfie, oscard);
                michal = _closure1_slot13;
                entity = new Array(1);
                entity[0] = zuuluu;
                entity = michal.bind(report)(golfie, oscard, entity);
                michal = zuuluu.id;
                entity['id'] = michal;
                michal = zuuluu.channel_id;
                entity['channel_id'] = michal;
                michal = zuuluu.author;
                entity['author'] = michal;
                michal = zuuluu.customRenderedContent;
                entity['customRenderedContent'] = michal;
                michal = zuuluu.mentions;
                if(michal) { _fun00008_ip = 106; continue _fun00007 }
 102:
                michal = new Array(0);
 106:
                entity['mentions'] = michal;
                michal = zuuluu.mentionRoles;
                if(michal) { _fun00008_ip = 125; continue _fun00007 }
 121:
                michal = new Array(0);
 125:
                entity['mentionRoles'] = michal;
                michal = zuuluu.mentionChannels;
                if(michal) { _fun00008_ip = 144; continue _fun00007 }
 140:
                michal = new Array(0);
 144:
                entity['mentionChannels'] = michal;
                michal = zuuluu.mentioned;
                if(michal) { _fun00008_ip = 161; continue _fun00007 }
 159:
                michal = false;
 161:
                entity['mentioned'] = michal;
                michal = zuuluu.pinned;
                if(michal) { _fun00008_ip = 178; continue _fun00007 }
 176:
                michal = false;
 178:
                entity['pinned'] = michal;
                michal = zuuluu.mentionEveryone;
                if(michal) { _fun00008_ip = 195; continue _fun00007 }
 193:
                michal = false;
 195:
                entity['mentionEveryone'] = michal;
                michal = zuuluu.tts;
                if(michal) { _fun00008_ip = 212; continue _fun00007 }
 210:
                michal = false;
 212:
                entity['tts'] = michal;
                michal = zuuluu.giftCodes;
                if(michal) { _fun00008_ip = 231; continue _fun00007 }
 227:
                michal = new Array(0);
 231:
                entity['giftCodes'] = michal;
                michal = zuuluu.state;
                if(michal) { _fun00008_ip = 255; continue _fun00007 }
 245:
                tangon = _closure1_slot10;
                michal = tangon.SENT;
 255:
                entity['state'] = michal;
                michal = zuuluu.nonce;
                if(michal) { _fun00008_ip = 272; continue _fun00007 }
 270:
                michal = null;
 272:
                entity['nonce'] = michal;
                michal = zuuluu.blocked;
                if(michal) { _fun00008_ip = 289; continue _fun00007 }
 287:
                michal = false;
 289:
                entity['blocked'] = michal;
                michal = zuuluu.ignored;
                if(michal) { _fun00008_ip = 306; continue _fun00007 }
 304:
                michal = false;
 306:
                entity['ignored'] = michal;
                michal = zuuluu.call;
                if(michal) { _fun00008_ip = 322; continue _fun00007 }
 320:
                michal = null;
 322:
                entity['call'] = michal;
                michal = zuuluu.bot;
                if(michal) { _fun00008_ip = 339; continue _fun00007 }
 337:
                michal = false;
 339:
                entity['bot'] = michal;
                michal = zuuluu.webhookId;
                if(michal) { _fun00008_ip = 356; continue _fun00007 }
 354:
                michal = null;
 356:
                entity['webhookId'] = michal;
                michal = zuuluu.reactions;
                if(michal) { _fun00008_ip = 375; continue _fun00007 }
 371:
                michal = new Array(0);
 375:
                entity['reactions'] = michal;
                michal = zuuluu.application_id;
                if(michal) { _fun00008_ip = 395; continue _fun00007 }
 390:
                michal = zuuluu.applicationId;
 395:
                if(michal) { _fun00008_ip = 400; continue _fun00007 }
 398:
                michal = null;
 400:
                entity['applicationId'] = michal;
                michal = zuuluu.application;
                if(michal) { _fun00008_ip = 416; continue _fun00007 }
 414:
                michal = null;
 416:
                entity['application'] = michal;
                michal = zuuluu.activity;
                if(michal) { _fun00008_ip = 433; continue _fun00007 }
 431:
                michal = null;
 433:
                entity['activity'] = michal;
                michal = zuuluu.activity_instance;
                if(michal) { _fun00008_ip = 454; continue _fun00007 }
 448:
                michal = zuuluu.activityInstance;
 454:
                if(michal) { _fun00008_ip = 459; continue _fun00007 }
 457:
                michal = null;
 459:
                entity['activityInstance'] = michal;
                michal = zuuluu.messageReference;
                if(michal) { _fun00008_ip = 476; continue _fun00007 }
 474:
                michal = null;
 476:
                entity['messageReference'] = michal;
                michal = zuuluu.hit;
                if(michal) { _fun00008_ip = 499; continue _fun00007 }
 493:
                michal = zuuluu.isSearchHit;
 499:
                if(michal) { _fun00008_ip = 504; continue _fun00007 }
 502:
                michal = false;
 504:
                entity['isSearchHit'] = michal;
                michal = zuuluu.loggingName;
                if(michal) { _fun00008_ip = 521; continue _fun00007 }
 519:
                michal = null;
 521:
                entity['loggingName'] = michal;
                michal = zuuluu.colorString;
                entity['colorString'] = michal;
                michal = zuuluu.nick;
                entity['nick'] = michal;
                michal = zuuluu.interaction;
                if(michal) { _fun00008_ip = 562; continue _fun00007 }
 560:
                michal = null;
 562:
                entity['interaction'] = michal;
                michal = zuuluu.interactionData;
                if(michal) { _fun00008_ip = 579; continue _fun00007 }
 577:
                michal = null;
 579:
                entity['interactionData'] = michal;
                michal = zuuluu.interactionMetadata;
                if(michal) { _fun00008_ip = 596; continue _fun00007 }
 594:
                michal = null;
 596:
                entity['interactionMetadata'] = michal;
                michal = zuuluu.interactionError;
                if(michal) { _fun00008_ip = 613; continue _fun00007 }
 611:
                michal = null;
 613:
                entity['interactionError'] = michal;
                michal = zuuluu.roleSubscriptionData;
                entity['roleSubscriptionData'] = michal;
                michal = zuuluu.purchaseNotification;
                entity['purchaseNotification'] = michal;
                michal = zuuluu.poll;
                entity['poll'] = michal;
                michal = zuuluu.potions;
                entity['potions'] = michal;
                michal = zuuluu.referralTrialOfferId;
                if(michal) { _fun00008_ip = 678; continue _fun00007 }
 676:
                michal = null;
 678:
                entity['referralTrialOfferId'] = michal;
                michal = zuuluu.gift_info;
                tangon = null;
                if(!(tangon == michal)) { _fun00008_ip = 702; continue _fun00007 }
 696:
                michal = zuuluu.giftInfo;
 702:
                entity['giftInfo'] = michal;
                michal = zuuluu.giftingPrompt;
                if(michal) { _fun00008_ip = 719; continue _fun00007 }
 717:
                michal = null;
 719:
                entity['giftingPrompt'] = michal;
                michal = zuuluu.messageSnapshots;
                if(michal) { _fun00008_ip = 738; continue _fun00007 }
 734:
                michal = new Array(0);
 738:
                entity['messageSnapshots'] = michal;
                michal = zuuluu.isUnsupported;
                if(michal) { _fun00008_ip = 755; continue _fun00007 }
 753:
                michal = false;
 755:
                entity['isUnsupported'] = michal;
                michal = zuuluu.changelog_id;
                if(!(tangon == michal)) { _fun00008_ip = 785; continue _fun00007 }
 771:
                zuuluu = zuuluu.changelogId;
                if(zuuluu) { _fun00008_ip = 782; continue _fun00007 }
 780:
                zuuluu = null;
 782:
                michal = zuuluu;
 785:
                entity['changelogId'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'isEdited';
        report['key'] = entity;
        entity = function() { // Original name: value
            entity = this;
            michal = entity.editedTimestamp;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(19);
        entity[0] = report;
        report = {};
        golfie = 'getChannelId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            entity = entity.channel_id;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getGuildId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot8;
                michal = zuuluu.getChannel;
                entity = this;
                entity = entity.channel_id;
                zuuluu = michal.bind(zuuluu)(entity);
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00010_ip = 46; continue _fun00009 }
 36:
                michal = zuuluu.getGuildId;
                entity = michal.bind(zuuluu)();
 46:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getReaction';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = this;
            zuuluu = michal.reactions;
            michal = zuuluu.find;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.emojiEquals;
                entity = argFoo;
                michal = entity.emoji;
                entity = _closure3_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getContentMessage';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = this;
                tangon = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 10;
                entity = michal[entity];
                michal = undefined;
                entity = tangon.bind(michal)(entity);
                tangon = entity.bind(michal)(zuuluu);
                entity = zuuluu;
                if(!tangon) { _fun00012_ip = 70; continue _fun00011 }
 39:
                tangon = zuuluu.messageSnapshots;
                zuuluu = 0;
                zuuluu = tangon[zuuluu];
                tangon = null;
                tangon = tangon == zuuluu;
                michal = undefined;
                if(tangon) { _fun00012_ip = 67; continue _fun00011 }
 62:
                michal = zuuluu.message;
 67:
                entity = michal;
 70:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'userHasReactedWithEmoji';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            michal = argFoo;
            var _closure3_slot0 = michal;
            michal = argBar;
            var _closure3_slot1 = michal;
            michal = this;
            zuuluu = michal.reactions;
            michal = zuuluu.some;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = argFoo;
                    tangon = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 9;
                    michal = michal[entity];
                    entity = undefined;
                    golfie = tangon.bind(entity)(michal);
                    oscard = golfie.emojiEquals;
                    report = zuuluu.emoji;
                    tangon = _closure3_slot0;
                    tangon = oscard.bind(golfie)(report, tangon);
                    if(tangon) { _fun00014_ip = 58; continue _fun00013 }
 56:
                    return entity;
 58:
                    entity = _closure3_slot1;
                    if(!entity) { _fun00014_ip = 71; continue _fun00013 }
 65:
                    entity = zuuluu.me;
 71:
                    if(entity) { _fun00014_ip = 93; continue _fun00013 }
 74:
                    michal = _closure3_slot1;
                    michal = !michal;
                    if(!michal) { _fun00014_ip = 90; continue _fun00013 }
 84:
                    michal = zuuluu.me_burst;
 90:
                    entity = michal;
 93:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'addReaction';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = argFoo;
                report = arguments[1];
                verify = arguments[2];
                michal = arguments[3];
                tangon = this;
                var _closure3_slot0 = oscard;
                offset = undefined;
                if(!(report === offset)) { _fun00016_ip = 29; continue _fun00015 }
 27:
                report = false;
 29:
                var _closure3_slot1 = report;
                if(!(verify === offset)) { _fun00016_ip = 41; continue _fun00015 }
 37:
                verify = new Array(0);
 41:
                var _closure3_slot2 = verify;
                if(!(michal === offset)) { _fun00016_ip = 84; continue _fun00015 }
 49:
                golfie = _closure1_slot0;
                option = _closure1_slot2;
                zuuluu = 11;
                zuuluu = option[zuuluu];
                zuuluu = golfie.bind(offset)(zuuluu);
                zuuluu = zuuluu.ReactionTypes;
                michal = zuuluu.NORMAL;
 84:
                var _closure3_slot3 = michal;
                golfie = -1;
                var _closure3_slot4 = golfie;
                yankee = tangon.reactions;
                option = yankee.map;
                zuuluu = function(argFoo, argBar) {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        entity = argFoo;
                        zuuluu = _closure1_slot0;
                        report = _closure1_slot2;
                        michal = 9;
                        michal = report[michal];
                        verify = undefined;
                        golfie = zuuluu.bind(verify)(michal);
                        oscard = golfie.emojiEquals;
                        zuuluu = entity.emoji;
                        michal = _closure3_slot0;
                        zuuluu = oscard.bind(golfie)(zuuluu, michal);
                        michal = entity;
                        if(!zuuluu) { _fun00018_ip = 704; continue _fun00017 }
 62:
                        zuuluu = argBar;
                        _closure3_slot4 = zuuluu;
                        oscard = _closure3_slot3;
                        golfie = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        option = 11;
                        zuuluu = zuuluu[option];
                        zuuluu = golfie.bind(verify)(zuuluu);
                        zuuluu = zuuluu.ReactionTypes;
                        zuuluu = zuuluu.BURST;
                        if(!(oscard !== zuuluu)) { _fun00018_ip = 440; continue _fun00017 }
 112:
                        oscard = _closure3_slot3;
                        golfie = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        zuuluu = zuuluu[option];
                        zuuluu = golfie.bind(verify)(zuuluu);
                        zuuluu = zuuluu.ReactionTypes;
                        zuuluu = zuuluu.VOTE;
                        if(!(oscard !== zuuluu)) { _fun00018_ip = 298; continue _fun00017 }
 152:
                        zuuluu = _closure3_slot1;
                        if(!zuuluu) { _fun00018_ip = 171; continue _fun00017 }
 159:
                        zuuluu = entity.me_burst;
                        if(zuuluu) { _fun00018_ip = 296; continue _fun00017 }
 171:
                        zuuluu = _closure3_slot1;
                        if(!zuuluu) { _fun00018_ip = 187; continue _fun00017 }
 178:
                        zuuluu = entity.me;
                        if(zuuluu) { _fun00018_ip = 201; continue _fun00017 }
 187:
                        oscard = entity.count;
                        zuuluu = 1;
                        option = oscard + zuuluu;
                        _fun00018_ip = 206; continue _fun00017;
 201:
                        option = entity.count;
 206:
                        zuuluu = {};
                        romeon = zuuluu;
                        yankee = entity;
                        oscard = copyDataProperties(romeon, yankee);
                        oscard = 'count';
                        zuuluu[oscard] = option;
                        golfie = {};
                        yankee = entity.count_details;
                        romeon = golfie;
                        oscard = copyDataProperties(romeon, yankee);
                        oscard = 'normal';
                        golfie[oscard] = option;
                        oscard = 'count_details';
                        zuuluu[oscard] = golfie;
                        oscard = _closure3_slot1;
                        oscard = !oscard;
                        golfie = !oscard;
                        if(!oscard) { _fun00018_ip = 279; continue _fun00017 }
 273:
                        golfie = entity.me;
 279:
                        oscard = 'me';
                        zuuluu[oscard] = golfie;
                        michal = zuuluu;
                        _fun00018_ip = 704; continue _fun00017;
 296:
                        return entity;
 298:
                        golfie = entity.count_details;
                        oscard = null;
                        option = oscard == golfie;
                        zuuluu = undefined;
                        if(option) { _fun00018_ip = 321; continue _fun00017 }
 315:
                        zuuluu = golfie.vote;
 321:
                        golfie = oscard != zuuluu;
                        oscard = 0;
                        if(!golfie) { _fun00018_ip = 333; continue _fun00017 }
 330:
                        oscard = zuuluu;
 333:
                        zuuluu = _closure3_slot1;
                        if(!zuuluu) { _fun00018_ip = 352; continue _fun00017 }
 340:
                        zuuluu = entity.me_vote;
                        option = oscard;
                        if(zuuluu) { _fun00018_ip = 359; continue _fun00017 }
 352:
                        zuuluu = 1;
                        option = oscard + zuuluu;
 359:
                        zuuluu = {};
                        romeon = zuuluu;
                        yankee = entity;
                        oscard = copyDataProperties(romeon, yankee);
                        golfie = {};
                        yankee = entity.count_details;
                        romeon = golfie;
                        oscard = copyDataProperties(romeon, yankee);
                        oscard = 'vote';
                        golfie[oscard] = option;
                        oscard = 'count_details';
                        zuuluu[oscard] = golfie;
                        oscard = _closure3_slot1;
                        oscard = !oscard;
                        golfie = !oscard;
                        if(!oscard) { _fun00018_ip = 423; continue _fun00017 }
 417:
                        golfie = entity.me_vote;
 423:
                        oscard = 'me_vote';
                        zuuluu[oscard] = golfie;
                        michal = zuuluu;
                        _fun00018_ip = 704; continue _fun00017;
 440:
                        zuuluu = _closure3_slot1;
                        if(!zuuluu) { _fun00018_ip = 459; continue _fun00017 }
 447:
                        zuuluu = entity.me;
                        if(zuuluu) { _fun00018_ip = 706; continue _fun00017 }
 459:
                        zuuluu = _closure3_slot1;
                        if(!zuuluu) { _fun00018_ip = 475; continue _fun00017 }
 466:
                        zuuluu = entity.me_burst;
                        if(zuuluu) { _fun00018_ip = 490; continue _fun00017 }
 475:
                        oscard = entity.burst_count;
                        zuuluu = 1;
                        option = oscard + zuuluu;
                        _fun00018_ip = 496; continue _fun00017;
 490:
                        option = entity.burst_count;
 496:
                        oscard = entity.burst_colors;
                        zuuluu = null;
                        if(!(zuuluu != oscard)) { _fun00018_ip = 525; continue _fun00017 }
 508:
                        zuuluu = entity.burst_colors;
                        oscard = zuuluu.length;
                        zuuluu = 0;
                        if(!(!(oscard > zuuluu))) { _fun00018_ip = 531; continue _fun00017 }
 525:
                        golfie = _closure3_slot2;
                        _fun00018_ip = 537; continue _fun00017;
 531:
                        golfie = entity.burst_colors;
 537:
                        zuuluu = {};
                        romeon = zuuluu;
                        yankee = entity;
                        oscard = copyDataProperties(romeon, yankee);
                        report = _closure3_slot1;
                        report = !report;
                        oscard = !report;
                        if(!report) { _fun00018_ip = 568; continue _fun00017 }
 562:
                        oscard = entity.me_burst;
 568:
                        report = 'me_burst';
                        zuuluu[report] = oscard;
                        report = 'burst_count';
                        zuuluu[report] = option;
                        oscard = {};
                        yankee = entity.count_details;
                        romeon = oscard;
                        report = copyDataProperties(romeon, yankee);
                        report = 'burst';
                        oscard[report] = option;
                        report = 'count_details';
                        zuuluu[report] = oscard;
                        report = 'burst_colors';
                        zuuluu[report] = golfie;
                        option = _closure1_slot0;
                        offset = _closure1_slot2;
                        tangon = 12;
                        tangon = offset[tangon];
                        oscard = option.bind(verify)(tangon);
                        report = oscard.buildPlatformedThemedEmojiColorPalette;
                        tangon = {};
                        tangon['colors'] = golfie;
                        golfie = 13;
                        golfie = offset[golfie];
                        option = option.bind(verify)(golfie);
                        golfie = option.isIOS;
                        golfie = golfie.bind(option)();
                        tangon['shouldProcessMobileColors'] = golfie;
                        report = report.bind(oscard)(tangon);
                        tangon = 'themedBurstColors';
                        zuuluu[tangon] = report;
                        michal = zuuluu;
 704:
                        return michal;
 706:
                        return entity;
                    }
                };
                zuuluu = option.bind(yankee)(zuuluu);
                entity = _closure3_slot4;
                if(!(golfie === entity)) { _fun00016_ip = 473; continue _fun00015 }
 130:
                golfie = _closure1_slot0;
                entity = _closure1_slot2;
                yankee = 11;
                entity = entity[yankee];
                entity = golfie.bind(offset)(entity);
                entity = entity.ReactionTypes;
                entity = entity.BURST;
                if(!(michal !== entity)) { _fun00016_ip = 333; continue _fun00015 }
 172:
                golfie = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[yankee];
                entity = golfie.bind(offset)(entity);
                entity = entity.ReactionTypes;
                entity = entity.VOTE;
                if(!(michal !== entity)) { _fun00016_ip = 267; continue _fun00015 }
 205:
                michal = zuuluu.push;
                entity = {'emoji': null, 'me': null, 'me_burst': false, 'count': 1, 'count_details': null, 'burst_count': 0};
                entity['emoji'] = oscard;
                entity['me'] = report;
                golfie = {'burst': 0, 'normal': 1};
                entity['count_details'] = golfie;
                golfie = new Array(0);
                entity['burst_colors'] = golfie;
                entity = michal.bind(zuuluu)(entity);
                _fun00016_ip = 473; continue _fun00015;
 267:
                michal = zuuluu.push;
                entity = {'emoji': null, 'me': false, 'me_burst': false, 'me_vote': null, 'count': 0, 'count_details': null, 'burst_count': 0};
                entity['emoji'] = oscard;
                entity['me_vote'] = report;
                golfie = {'burst': 0, 'normal': 0, 'vote': 1};
                entity['count_details'] = golfie;
                golfie = new Array(0);
                entity['burst_colors'] = golfie;
                entity = michal.bind(zuuluu)(entity);
                _fun00016_ip = 473; continue _fun00015;
 333:
                michal = zuuluu.push;
                entity = {'emoji': null, 'me': false, 'me_burst': null, 'count': 0, 'count_details': null, 'burst_count': 1};
                entity['emoji'] = oscard;
                entity['me_burst'] = report;
                report = {'burst': 1, 'normal': 0};
                entity['count_details'] = report;
                entity['burst_colors'] = verify;
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 12;
                report = golfie[report];
                golfie = oscard.bind(offset)(report);
                oscard = golfie.buildPlatformedThemedEmojiColorPalette;
                report = {};
                yankee = null;
                if(!(yankee == verify)) { _fun00016_ip = 419; continue _fun00015 }
 415:
                verify = new Array(0);
 419:
                report['colors'] = verify;
                verify = _closure1_slot0;
                yankee = _closure1_slot2;
                option = 13;
                option = yankee[option];
                verify = verify.bind(offset)(option);
                option = verify.isIOS;
                option = option.bind(verify)();
                report['shouldProcessMobileColors'] = option;
                report = oscard.bind(golfie)(report);
                entity['themedBurstColors'] = report;
                entity = michal.bind(zuuluu)(entity);
 473:
                michal = tangon.set;
                entity = 'reactions';
                entity = michal.bind(tangon)(entity, zuuluu);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'addReactionBatch';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            tangon = argFoo;
            michal = argBar;
            var _closure3_slot0 = michal;
            zuuluu = tangon.reduce;
            michal = function(argFoo, argBar) {
                michal = argBar;
                tangon = michal.users;
                michal = michal.emoji;
                var _closure4_slot0 = michal;
                zuuluu = tangon.reduce;
                michal = function(argFoo, argBar) {
                    tangon = argFoo;
                    zuuluu = tangon.addReaction;
                    michal = _closure4_slot0;
                    report = _closure3_slot0;
                    entity = argBar;
                    entity = entity === report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                entity = argFoo;
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            };
            entity = this;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'removeReaction';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                report = arguments[1];
                zuuluu = arguments[2];
                tangon = this;
                michal = argFoo;
                var _closure3_slot0 = michal;
                michal = undefined;
                if(!(report === michal)) { _fun00020_ip = 26; continue _fun00019 }
 24:
                report = false;
 26:
                var _closure3_slot1 = report;
                if(!(zuuluu === michal)) { _fun00020_ip = 69; continue _fun00019 }
 34:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 11;
                report = golfie[report];
                report = oscard.bind(michal)(report);
                report = report.ReactionTypes;
                zuuluu = report.NORMAL;
 69:
                var _closure3_slot2 = zuuluu;
                yankee = -1;
                var _closure3_slot3 = yankee;
                oscard = tangon.reactions;
                report = oscard.map;
                zuuluu = function(argFoo, argBar) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        report = argFoo;
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 9;
                        entity = zuuluu[entity];
                        zuuluu = undefined;
                        option = tangon.bind(zuuluu)(entity);
                        golfie = option.emojiEquals;
                        oscard = report.emoji;
                        entity = _closure3_slot0;
                        oscard = golfie.bind(option)(oscard, entity);
                        entity = report;
                        if(!oscard) { _fun00022_ip = 526; continue _fun00021 }
 62:
                        golfie = _closure3_slot2;
                        verify = _closure1_slot0;
                        oscard = _closure1_slot2;
                        option = 11;
                        oscard = oscard[option];
                        oscard = verify.bind(zuuluu)(oscard);
                        oscard = oscard.ReactionTypes;
                        oscard = oscard.BURST;
                        if(!(golfie !== oscard)) { _fun00022_ip = 397; continue _fun00021 }
 105:
                        oscard = _closure3_slot2;
                        golfie = _closure1_slot0;
                        michal = _closure1_slot2;
                        michal = michal[option];
                        michal = golfie.bind(zuuluu)(michal);
                        michal = michal.ReactionTypes;
                        michal = michal.VOTE;
                        if(!(oscard !== michal)) { _fun00022_ip = 261; continue _fun00021 }
 142:
                        michal = _closure3_slot1;
                        if(!michal) { _fun00022_ip = 165; continue _fun00021 }
 149:
                        michal = report.me;
                        if(michal) { _fun00022_ip = 165; continue _fun00021 }
 158:
                        option = report.count;
                        _fun00022_ip = 177; continue _fun00021;
 165:
                        oscard = report.count;
                        michal = 1;
                        option = oscard - michal;
 177:
                        michal = {};
                        yankee = michal;
                        offset = report;
                        oscard = copyDataProperties(yankee, offset);
                        oscard = 'count';
                        michal[oscard] = option;
                        oscard = _closure3_slot1;
                        golfie = !oscard;
                        if(!golfie) { _fun00022_ip = 214; continue _fun00021 }
 208:
                        golfie = report.me;
 214:
                        oscard = 'me';
                        michal[oscard] = golfie;
                        golfie = {};
                        offset = report.count_details;
                        yankee = golfie;
                        oscard = copyDataProperties(yankee, offset);
                        oscard = 'normal';
                        golfie[oscard] = option;
                        oscard = 'count_details';
                        michal[oscard] = golfie;
                        _fun00022_ip = 516; continue _fun00021;
 261:
                        golfie = report.count_details;
                        oscard = null;
                        option = oscard == golfie;
                        zuuluu = undefined;
                        if(option) { _fun00022_ip = 284; continue _fun00021 }
 278:
                        zuuluu = golfie.vote;
 284:
                        golfie = oscard != zuuluu;
                        oscard = 0;
                        if(!golfie) { _fun00022_ip = 296; continue _fun00021 }
 293:
                        oscard = zuuluu;
 296:
                        zuuluu = _closure3_slot1;
                        if(!zuuluu) { _fun00022_ip = 315; continue _fun00021 }
 303:
                        zuuluu = report.me_vote;
                        option = oscard;
                        if(!zuuluu) { _fun00022_ip = 322; continue _fun00021 }
 315:
                        zuuluu = 1;
                        option = oscard - zuuluu;
 322:
                        zuuluu = {};
                        yankee = zuuluu;
                        offset = report;
                        oscard = copyDataProperties(yankee, offset);
                        golfie = {};
                        offset = report.count_details;
                        yankee = golfie;
                        oscard = copyDataProperties(yankee, offset);
                        oscard = 'vote';
                        golfie[oscard] = option;
                        oscard = 'count_details';
                        zuuluu[oscard] = golfie;
                        oscard = _closure3_slot1;
                        golfie = !oscard;
                        if(!golfie) { _fun00022_ip = 383; continue _fun00021 }
 377:
                        golfie = report.me_vote;
 383:
                        oscard = 'me_vote';
                        zuuluu[oscard] = golfie;
                        michal = zuuluu;
                        _fun00022_ip = 516; continue _fun00021;
 397:
                        zuuluu = _closure3_slot1;
                        if(!zuuluu) { _fun00022_ip = 421; continue _fun00021 }
 404:
                        zuuluu = report.me_burst;
                        if(zuuluu) { _fun00022_ip = 421; continue _fun00021 }
 413:
                        golfie = report.burst_count;
                        _fun00022_ip = 434; continue _fun00021;
 421:
                        oscard = report.burst_count;
                        zuuluu = 1;
                        golfie = oscard - zuuluu;
 434:
                        zuuluu = {};
                        yankee = zuuluu;
                        offset = report;
                        oscard = copyDataProperties(yankee, offset);
                        oscard = 'burst_count';
                        zuuluu[oscard] = golfie;
                        oscard = _closure3_slot1;
                        option = !oscard;
                        if(!option) { _fun00022_ip = 471; continue _fun00021 }
 465:
                        option = report.me_burst;
 471:
                        oscard = 'me_burst';
                        zuuluu[oscard] = option;
                        oscard = {};
                        offset = report.count_details;
                        yankee = oscard;
                        report = copyDataProperties(yankee, offset);
                        report = 'burst';
                        oscard[report] = golfie;
                        report = 'count_details';
                        zuuluu[report] = oscard;
                        michal = zuuluu;
 516:
                        zuuluu = argBar;
                        _closure3_slot3 = zuuluu;
                        entity = michal;
 526:
                        return entity;
                    }
                };
                zuuluu = report.bind(oscard)(zuuluu);
                report = _closure3_slot3;
                oscard = zuuluu[report];
                report = null;
                if(!(report == oscard)) { _fun00020_ip = 120; continue _fun00019 }
 118:
                oscard = {};
 120:
                offset = oscard.count;
                verify = oscard.burst_count;
                romeon = oscard.count_details;
                oscard = report == romeon;
                golfie = undefined;
                if(oscard) { _fun00020_ip = 152; continue _fun00019 }
 146:
                golfie = romeon.normal;
 152:
                foxtra = report != golfie;
                oscard = 0;
                option = 0;
                if(!foxtra) { _fun00020_ip = 166; continue _fun00019 }
 163:
                option = golfie;
 166:
                golfie = report == romeon;
                foxtra = undefined;
                if(golfie) { _fun00020_ip = 181; continue _fun00019 }
 175:
                foxtra = romeon.burst;
 181:
                backup = report != foxtra;
                golfie = 0;
                if(!backup) { _fun00020_ip = 193; continue _fun00019 }
 190:
                golfie = foxtra;
 193:
                foxtra = report == romeon;
                michal = undefined;
                if(foxtra) { _fun00020_ip = 208; continue _fun00019 }
 202:
                michal = romeon.vote;
 208:
                romeon = report != michal;
                report = 0;
                if(!romeon) { _fun00020_ip = 220; continue _fun00019 }
 217:
                report = michal;
 220:
                michal = _closure3_slot3;
                michal = yankee !== michal;
                if(!michal) { _fun00020_ip = 235; continue _fun00019 }
 231:
                michal = offset <= oscard;
 235:
                if(!michal) { _fun00020_ip = 242; continue _fun00019 }
 238:
                michal = verify <= oscard;
 242:
                if(!michal) { _fun00020_ip = 249; continue _fun00019 }
 245:
                michal = option <= oscard;
 249:
                if(!michal) { _fun00020_ip = 256; continue _fun00019 }
 252:
                michal = golfie <= oscard;
 256:
                if(!michal) { _fun00020_ip = 263; continue _fun00019 }
 259:
                michal = report <= oscard;
 263:
                if(!michal) { _fun00020_ip = 285; continue _fun00019 }
 266:
                report = zuuluu.splice;
                michal = _closure3_slot3;
                entity = 1;
                entity = report.bind(zuuluu)(michal, entity);
 285:
                michal = tangon.set;
                entity = 'reactions';
                entity = michal.bind(tangon)(entity, zuuluu);
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'removeReactionsForEmoji';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = this;
            michal = argFoo;
            var _closure3_slot0 = michal;
            zuuluu = tangon.set;
            report = tangon.reactions;
            michal = report.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 9;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.emojiEquals;
                entity = argFoo;
                michal = entity.emoji;
                entity = _closure3_slot0;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = !entity;
                return entity;
            };
            michal = michal.bind(report)(entity);
            entity = 'reactions';
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'isSystemDM';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity.author;
            entity = michal.isSystemUser;
            entity = entity.bind(michal)();
            return entity;
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'isCommandType';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                zuuluu = this;
                tangon = zuuluu.type;
                entity = _closure1_slot11;
                entity = entity.CHAT_INPUT_COMMAND;
                entity = tangon === entity;
                if(entity) { _fun00024_ip = 47; continue _fun00023 }
 28:
                zuuluu = zuuluu.type;
                michal = _closure1_slot11;
                michal = michal.CONTEXT_MENU_COMMAND;
                entity = zuuluu === michal;
 47:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'isPoll';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            michal = entity.poll;
            entity = null;
            entity = entity != michal;
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'hasPotions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = this;
                michal = entity.potions;
                entity = null;
                tangon = entity == michal;
                zuuluu = undefined;
                if(tangon) { _fun00026_ip = 25; continue _fun00025 }
 20:
                zuuluu = michal.length;
 25:
                tangon = entity != zuuluu;
                michal = 0;
                entity = 0;
                if(!tangon) { _fun00026_ip = 39; continue _fun00025 }
 36:
                entity = zuuluu;
 39:
                entity = entity > michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'isComponentsV2';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 8;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.hasFlag;
            michal = this;
            michal = michal.flags;
            entity = _closure1_slot9;
            entity = entity.IS_COMPONENTS_V2;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'isInteractionPlaceholder';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                michal = this;
                zuuluu = michal.interaction;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00028_ip = 34; continue _fun00027 }
 18:
                zuuluu = michal.author;
                michal = zuuluu.isNonUserBot;
                entity = michal.bind(zuuluu)();
 34:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'canDeleteOwnMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                michal = argFoo;
                tangon = this;
                entity = tangon.author;
                entity = entity.id;
                if(!(entity !== michal)) { _fun00030_ip = 161; continue _fun00029 }
 24:
                oscard = tangon.interactionMetadata;
                entity = null;
                golfie = entity == oscard;
                report = undefined;
                zuuluu = undefined;
                if(golfie) { _fun00030_ip = 49; continue _fun00029 }
 43:
                zuuluu = oscard.authorizing_integration_owners;
 49:
                if(!(entity == zuuluu)) { _fun00030_ip = 55; continue _fun00029 }
 53:
                zuuluu = {};
 55:
                tangon = tangon.interactionMetadata;
                oscard = entity == tangon;
                entity = undefined;
                if(oscard) { _fun00030_ip = 80; continue _fun00029 }
 70:
                tangon = tangon.user;
                entity = tangon.id;
 80:
                entity = entity === michal;
                if(!entity) { _fun00030_ip = 117; continue _fun00029 }
 87:
                michal = global;
                tangon = michal.Object;
                michal = tangon.keys;
                michal = michal.bind(tangon)(zuuluu);
                tangon = michal.length;
                michal = 1;
                entity = michal === tangon;
 117:
                if(!entity) { _fun00030_ip = 159; continue _fun00029 }
 120:
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 14;
                michal = oscard[michal];
                michal = tangon.bind(report)(michal);
                michal = michal.ApplicationIntegrationType;
                michal = michal.USER_INSTALL;
                entity = michal in zuuluu;
 159:
                return entity;
 161:
                entity = true;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'toJS';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = {};
            oscard = entity;
            report = michal;
            zuuluu = copyDataProperties(oscard, report);
            tangon = michal.webhookId;
            zuuluu = 'webkhook_id';
            entity[zuuluu] = tangon;
            tangon = michal.editedTimestamp;
            zuuluu = 'edited_timestamp';
            entity[zuuluu] = tangon;
            zuuluu = michal.mentionEveryone;
            michal = 'mention_everyone';
            entity[michal] = zuuluu;
            return entity;
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'isFirstMessageInForumPost';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                zuuluu = argFoo;
                entity = this;
                michal = entity.id;
                entity = entity.channel_id;
                entity = michal === entity;
                if(!entity) { _fun00032_ip = 33; continue _fun00031 }
 23:
                michal = zuuluu.isForumPost;
                entity = michal.bind(zuuluu)();
 33:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[18] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    report = report.bind(entity)(tangon);
    oscard = 15;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'records/MessageRecord.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['default'] = report;
    zuuluu['MinimalMessageRecord'] = tangon;
    zuuluu['MessageSnapshotRecord'] = michal;
    return entity;
})();
// app/modules/messages/MessageRecordUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: createMinimalMessageRecord
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            zuuluu = _closure1_slot5;
            entity = {};
            romeon = entity;
            yankee = michal;
            report = copyDataProperties(romeon, yankee);
            report = global;
            option = report.Date;
            romeon = michal.timestamp;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            foxtra = golfie;
            oscard = new foxtra[option](romeon, yankee);
            golfie = oscard instanceof Object ? oscard : golfie;
            oscard = 'timestamp';
            entity[oscard] = golfie;
            golfie = michal.edited_timestamp;
            oscard = null;
            option = oscard != golfie;
            golfie = null;
            if(!option) { _fun00002_ip = 114; continue _fun00001 }
 82:
            verify = report.Date;
            romeon = michal.edited_timestamp;
            option = verify.prototype;
            option = Object.create(option, {constructor: {value: verify}});
            foxtra = option;
            report = new foxtra[verify](romeon, yankee);
            golfie = report instanceof Object ? report : option;
 114:
            report = 'editedTimestamp';
            entity[report] = golfie;
            golfie = _closure1_slot17;
            report = undefined;
            option = golfie.bind(report)(michal);
            golfie = 'attachments';
            entity[golfie] = option;
            golfie = _closure1_slot19;
            option = golfie.bind(report)(michal);
            golfie = 'embeds';
            entity[golfie] = option;
            option = _closure1_slot0;
            verify = _closure1_slot2;
            golfie = 8;
            golfie = verify[golfie];
            verify = option.bind(report)(golfie);
            option = verify.transformComponents;
            golfie = michal.components;
            if(!(oscard == golfie)) { _fun00002_ip = 201; continue _fun00001 }
 197:
            golfie = new Array(0);
 201:
            oscard = {};
            offset = true;
            oscard['includeEmojiSrc'] = offset;
            golfie = option.bind(verify)(golfie, oscard);
            oscard = 'components';
            entity[oscard] = golfie;
            golfie = michal.type;
            oscard = _closure1_slot13;
            oscard = oscard.THREAD_CREATED;
            if(!(golfie !== oscard)) { _fun00002_ip = 276; continue _fun00001 }
 244:
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 9;
            tangon = golfie[tangon];
            tangon = oscard.bind(report)(tangon);
            michal = michal.content;
            tangon = tangon.bind(report)(michal);
            _fun00002_ip = 280; continue _fun00001;
 276:
            tangon = new Array(0);
 280:
            michal = 'codedLinks';
            entity[michal] = tangon;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            foxtra = michal;
            romeon = entity;
            entity = new foxtra[zuuluu](romeon, yankee);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    tangon = function(argFoo) { // Original name: createMessageRecord
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            option = argFoo;
            entity = arguments[1];
            oscard = undefined;
            if(!(entity === oscard)) { _fun00004_ip = 14; continue _fun00003 }
 12:
            entity = {};
 14:
            backup = entity.reactions;
            yankee = entity.interactionData;
            entity = _closure1_slot15;
            offset = entity.bind(oscard)(option);
            zuuluu = option.mentions;
            golfie = null;
            entity = golfie == zuuluu;
            update = undefined;
            if(entity) { _fun00004_ip = 72; continue _fun00003 }
 55:
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            update = michal.bind(zuuluu)(entity);
 72:
            if(!(golfie == update)) { _fun00004_ip = 80; continue _fun00003 }
 76:
            update = new Array(0);
 80:
            echoed = option.mention_roles;
            if(!(golfie == echoed)) { _fun00004_ip = 94; continue _fun00003 }
 90:
            echoed = new Array(0);
 94:
            result = option.mention_channels;
            if(!(golfie == result)) { _fun00004_ip = 108; continue _fun00003 }
 104:
            result = new Array(0);
 108:
            output = option.message_reference;
            entity = option.author;
            if(!(golfie != entity)) { _fun00004_ip = 228; continue _fun00003 }
 124:
            entity = option.webhook_id;
            if(!(golfie == entity)) { _fun00004_ip = 196; continue _fun00003 }
 134:
            zuuluu = _closure1_slot10;
            michal = zuuluu.getUser;
            entity = option.author;
            entity = entity.id;
            source = michal.bind(zuuluu)(entity);
            if(!(golfie == source)) { _fun00004_ip = 194; continue _fun00003 }
 164:
            zuuluu = _closure1_slot7;
            record = option.author;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            cntext = michal;
            entity = new cntext[zuuluu](record, config);
            source = entity instanceof Object ? entity : michal;
 194:
            _fun00004_ip = 226; continue _fun00003;
 196:
            zuuluu = _closure1_slot7;
            record = option.author;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            cntext = michal;
            entity = new cntext[zuuluu](record, config);
            source = entity instanceof Object ? entity : michal;
 226:
            _fun00004_ip = 232; continue _fun00003;
 228:
            source = _closure1_slot14;
 232:
            michal = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            zuuluu = michal.bind(oscard)(entity);
            michal = zuuluu.getMessageAuthor;
            entity = {};
            tangon = option.channel_id;
            entity['channel_id'] = tangon;
            entity['author'] = source;
            foxtra = michal.bind(zuuluu)(entity);
            entity = golfie == option;
            michal = undefined;
            if(entity) { _fun00004_ip = 294; continue _fun00003 }
 288:
            michal = option.gift_info;
 294:
            report = option.gifting_prompt;
            entity = option.interaction;
            entity = golfie != entity;
            romeon = null;
            if(!entity) { _fun00004_ip = 336; continue _fun00003 }
 315:
            tangon = _closure1_slot3;
            zuuluu = tangon.createFromServer;
            entity = option.interaction;
            romeon = zuuluu.bind(tangon)(entity);
 336:
            zuuluu = option.type;
            entity = _closure1_slot13;
            entity = entity.THREAD_STARTER_MESSAGE;
            sequen = undefined;
            if(!(zuuluu === entity)) { _fun00004_ip = 395; continue _fun00003 }
 357:
            zuuluu = option.referenced_message;
            tangon = golfie == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 392; continue _fun00003 }
 372:
            zuuluu = zuuluu.author;
            tangon = golfie == zuuluu;
            entity = undefined;
            if(tangon) { _fun00004_ip = 392; continue _fun00003 }
 387:
            entity = zuuluu.id;
 392:
            sequen = entity;
 395:
            sizing = option.content;
            zuuluu = option.type;
            entity = _closure1_slot13;
            entity = entity.PREMIUM_REFERRAL;
            if(!(zuuluu !== entity)) { _fun00004_ip = 480; continue _fun00003 }
 419:
            zuuluu = option.type;
            entity = _closure1_slot13;
            entity = entity.CHAT_WALLPAPER_SET;
            kiloes = undefined;
            tangon = undefined;
            if(!(zuuluu === entity)) { _fun00004_ip = 535; continue _fun00003 }
 442:
            zuuluu = _closure1_slot1;
            ctrled = _closure1_slot2;
            entity = 12;
            entity = ctrled[entity];
            zuuluu = zuuluu.bind(oscard)(entity);
            entity = option.content;
            tangon = zuuluu.bind(oscard)(entity);
            sizing = '';
            kiloes = undefined;
            _fun00004_ip = 535; continue _fun00003;
 480:
            zuuluu = _closure1_slot1;
            ctrled = _closure1_slot2;
            entity = 11;
            entity = ctrled[entity];
            ctrled = zuuluu.bind(oscard)(entity);
            zuuluu = ctrled.isProbablyAValidSnowflake;
            entity = option.content;
            entity = zuuluu.bind(ctrled)(entity);
            zuuluu = undefined;
            if(!entity) { _fun00004_ip = 526; continue _fun00003 }
 521:
            zuuluu = option.content;
 526:
            sizing = '';
            kiloes = zuuluu;
            tangon = undefined;
 535:
            zuuluu = _closure1_slot6;
            entity = {};
            record = entity;
            config = option;
            ctrled = copyDataProperties(record, config);
            record = entity;
            config = foxtra;
            foxtra = copyDataProperties(record, config);
            foxtra = offset.toJS;
            config = foxtra.bind(offset)();
            record = entity;
            foxtra = copyDataProperties(record, config);
            foxtra = 'author';
            entity[foxtra] = source;
            source = option.webhook_id;
            foxtra = 'webhookId';
            entity[foxtra] = source;
            source = _closure1_slot9;
            foxtra = source.isBlockedForMessage;
            source = foxtra.bind(source)(option);
            if(source) { _fun00004_ip = 645; continue _fun00003 }
 620:
            foxtra = golfie != sequen;
            if(!foxtra) { _fun00004_ip = 642; continue _fun00003 }
 627:
            vacuum = _closure1_slot9;
            ctrled = vacuum.isBlocked;
            foxtra = ctrled.bind(vacuum)(sequen);
 642:
            source = foxtra;
 645:
            foxtra = 'blocked';
            entity[foxtra] = source;
            source = _closure1_slot9;
            foxtra = source.isIgnoredForMessage;
            source = foxtra.bind(source)(option);
            if(source) { _fun00004_ip = 697; continue _fun00003 }
 672:
            foxtra = golfie != sequen;
            if(!foxtra) { _fun00004_ip = 694; continue _fun00003 }
 679:
            vacuum = _closure1_slot9;
            ctrled = vacuum.isIgnored;
            foxtra = ctrled.bind(vacuum)(sequen);
 694:
            source = foxtra;
 697:
            foxtra = 'ignored';
            entity[foxtra] = source;
            source = option.mention_everyone;
            foxtra = 'mentionEveryone';
            entity[foxtra] = source;
            foxtra = 'mentions';
            entity[foxtra] = update;
            foxtra = 'mentionRoles';
            entity[foxtra] = echoed;
            foxtra = 'mentionChannels';
            entity[foxtra] = result;
            foxtra = 'messageReference';
            entity[foxtra] = output;
            output = _closure1_slot0;
            result = _closure1_slot2;
            foxtra = 13;
            foxtra = result[foxtra];
            result = output.bind(oscard)(foxtra);
            output = result.isMentioned;
            foxtra = {};
            ctrled = _closure1_slot8;
            source = ctrled.getId;
            source = source.bind(ctrled)();
            foxtra['userId'] = source;
            source = option.channel_id;
            foxtra['channelId'] = source;
            ctrled = option.mention_everyone;
            source = golfie != ctrled;
            if(!source) { _fun00004_ip = 828; continue _fun00003 }
 825:
            source = ctrled;
 828:
            foxtra['mentionEveryone'] = source;
            foxtra['mentionUsers'] = update;
            foxtra['mentionRoles'] = echoed;
            output = output.bind(result)(foxtra);
            foxtra = 'mentioned';
            entity[foxtra] = output;
            output = _closure1_slot0;
            foxtra = _closure1_slot2;
            echoed = 14;
            foxtra = foxtra[echoed];
            output = output.bind(oscard)(foxtra);
            foxtra = output.isGiftCodeEmbed;
            foxtra = foxtra.bind(output)(option);
            result = _closure1_slot0;
            output = _closure1_slot2;
            output = output[echoed];
            echoed = result.bind(oscard)(output);
            result = echoed.findGiftCodes;
            if(foxtra) { _fun00004_ip = 926; continue _fun00003 }
 914:
            foxtra = option.content;
            output = result.bind(echoed)(foxtra);
            _fun00004_ip = 957; continue _fun00003;
 926:
            update = golfie == option;
            foxtra = undefined;
            if(update) { _fun00004_ip = 952; continue _fun00003 }
 935:
            source = option.embeds;
            update = 0;
            update = source[update];
            foxtra = update.url;
 952:
            output = result.bind(echoed)(foxtra);
 957:
            foxtra = 'giftCodes';
            entity[foxtra] = output;
            foxtra = 'content';
            entity[foxtra] = sizing;
            foxtra = 'referralTrialOfferId';
            entity[foxtra] = kiloes;
            kiloes = _closure1_slot18;
            foxtra = option.call;
            offset = offset.timestamp;
            foxtra = kiloes.bind(oscard)(foxtra, offset);
            offset = 'call';
            entity[offset] = foxtra;
            offset = _closure1_slot21;
            foxtra = offset.bind(oscard)(option);
            offset = 'messageSnapshots';
            entity[offset] = foxtra;
            foxtra = _closure1_slot20;
            if(!(golfie == backup)) { _fun00004_ip = 1046; continue _fun00003 }
 1040:
            backup = option.reactions;
 1046:
            offset = option.poll;
            foxtra = foxtra.bind(oscard)(backup, offset);
            offset = 'reactions';
            entity[offset] = foxtra;
            offset = 'interaction';
            entity[offset] = romeon;
            if(!(golfie == yankee)) { _fun00004_ip = 1086; continue _fun00003 }
 1080:
            yankee = option.interaction_data;
 1086:
            offset = 'interactionData';
            entity[offset] = yankee;
            yankee = option.interaction_metadata;
            offset = 'interactionMetadata';
            entity[offset] = yankee;
            yankee = option.role_subscription_data;
            offset = 'roleSubscriptionData';
            entity[offset] = yankee;
            yankee = option.purchase_notification;
            offset = 'purchaseNotification';
            entity[offset] = yankee;
            offset = option.poll;
            yankee = golfie == offset;
            offset = undefined;
            if(yankee) { _fun00004_ip = 1186; continue _fun00003 }
 1155:
            yankee = _closure1_slot1;
            romeon = _closure1_slot2;
            verify = 15;
            verify = romeon[verify];
            yankee = yankee.bind(oscard)(verify);
            verify = option.poll;
            offset = yankee.bind(oscard)(verify);
 1186:
            verify = 'poll';
            entity[verify] = offset;
            verify = option.potions;
            option = 'potions';
            entity[option] = verify;
            golfie = golfie == michal;
            oscard = undefined;
            if(golfie) { _fun00004_ip = 1222; continue _fun00003 }
 1219:
            oscard = michal;
 1222:
            michal = 'giftInfo';
            entity[michal] = oscard;
            michal = 'giftingPrompt';
            entity[michal] = report;
            michal = 'chatWallpaperInfo';
            entity[michal] = tangon;
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            cntext = michal;
            record = entity;
            entity = new cntext[zuuluu](record, config);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    var _closure1_slot16 = tangon;
    entity = function(argFoo) { // Original name: transformAttachments
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.attachments;
            michal = null;
            if(!(michal != zuuluu)) { _fun00006_ip = 40; continue _fun00005 }
 15:
            zuuluu = entity.attachments;
            michal = zuuluu.map;
            entity = function(argFoo) {
                michal = argFoo;
                entity = {};
                oscard = entity;
                report = michal;
                zuuluu = copyDataProperties(oscard, report);
                tangon = michal.filename;
                zuuluu = tangon.startsWith;
                michal = _closure1_slot11;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = 'spoiler';
                entity[michal] = zuuluu;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
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
            tangon = argFoo;
            michal = null;
            if(!(michal == tangon)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            return michal;
 11:
            entity = tangon.ended_timestamp;
            entity = michal != entity;
            zuuluu = null;
            if(!entity) { _fun00008_ip = 90; continue _fun00007 }
 26:
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 16;
            entity = oscard[entity];
            oscard = undefined;
            report = report.bind(oscard)(entity);
            entity = global;
            option = entity.Date;
            verify = tangon.ended_timestamp;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            offset = golfie;
            entity = new offset[option](verify, option);
            entity = entity instanceof Object ? entity : golfie;
            zuuluu = report.bind(oscard)(entity);
 90:
            entity = michal != zuuluu;
            michal = null;
            if(!entity) { _fun00008_ip = 148; continue _fun00007 }
 99:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            entity = 16;
            report = report[entity];
            entity = undefined;
            oscard = oscard.bind(entity)(report);
            report = oscard.duration;
            golfie = zuuluu.diff;
            entity = argBar;
            entity = golfie.bind(zuuluu)(entity);
            michal = report.bind(oscard)(entity);
 148:
            entity = {};
            tangon = tangon.participants;
            entity['participants'] = tangon;
            entity['endedTimestamp'] = zuuluu;
            entity['duration'] = michal;
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: transformEmbeds
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            var _closure2_slot0 = michal;
            tangon = michal.embeds;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00010_ip = 80; continue _fun00009 }
 21:
            zuuluu = michal.embeds;
            michal = zuuluu.map;
            entity = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.sanitizeEmbed;
                entity = _closure2_slot0;
                zuuluu = entity.channel_id;
                michal = entity.id;
                entity = argFoo;
                entity = tangon.bind(report)(zuuluu, michal, entity);
                return entity;
            };
            zuuluu = michal.bind(zuuluu)(entity);
            tangon = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            michal = tangon.bind(entity)(michal);
            entity = michal.mergeEmbedsOnURL;
            entity = entity.bind(michal)(zuuluu);
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
            oscard = argFoo;
            michal = argBar;
            report = null;
            if(!(report == oscard)) { _fun00012_ip = 33; continue _fun00011 }
 14:
            tangon = report == michal;
            zuuluu = undefined;
            if(tangon) { _fun00012_ip = 29; continue _fun00011 }
 23:
            zuuluu = michal.results;
 29:
            if(!(report != zuuluu)) { _fun00012_ip = 142; continue _fun00011 }
 33:
            zuuluu = report == michal;
            tangon = undefined;
            if(zuuluu) { _fun00012_ip = 80; continue _fun00011 }
 42:
            michal = michal.results;
            zuuluu = report == michal;
            tangon = undefined;
            if(zuuluu) { _fun00012_ip = 80; continue _fun00011 }
 57:
            golfie = michal.answer_counts;
            zuuluu = golfie.map;
            michal = function(argFoo) {
                michal = argFoo;
                entity = {};
                zuuluu = {};
                tangon = michal.count;
                zuuluu['vote'] = tangon;
                entity['count_details'] = zuuluu;
                zuuluu = michal.me_voted;
                entity['me_vote'] = zuuluu;
                tangon = {'id': null, 'name': '', 'animated': false};
                report = michal.id;
                zuuluu = report.toString;
                zuuluu = zuuluu.bind(report)();
                tangon['id'] = zuuluu;
                zuuluu = false;
                entity['emoji'] = tangon;
                entity['me'] = zuuluu;
                entity['me_burst'] = zuuluu;
                michal = michal.count;
                entity['count'] = michal;
                michal = 0;
                entity['burst_count'] = michal;
                return entity;
            };
            tangon = zuuluu.bind(golfie)(michal);
 80:
            if(!(report == oscard)) { _fun00012_ip = 88; continue _fun00011 }
 84:
            oscard = new Array(0);
 88:
            zuuluu = new Array(0);
            option = 0;
            offset = zuuluu;
            verify = oscard;
            michal = arraySpread(offset, verify, option);
            if(!(report == tangon)) { _fun00012_ip = 112; continue _fun00011 }
 108:
            tangon = new Array(0);
 112:
            offset = zuuluu;
            verify = tangon;
            option = michal;
            michal = arraySpread(offset, verify, option);
            michal = zuuluu.map;
            entity = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = {};
                    verify = argFoo;
                    offset = entity;
                    michal = copyDataProperties(offset, verify);
                    tangon = null;
                    zuuluu = tangon == entity;
                    golfie = undefined;
                    michal = undefined;
                    if(zuuluu) { _fun00014_ip = 31; continue _fun00013 }
 25:
                    michal = entity.count_details;
 31:
                    if(!(tangon != michal)) { _fun00014_ip = 95; continue _fun00013 }
 35:
                    michal = entity.count_details;
                    report = michal.burst;
                    oscard = tangon != report;
                    zuuluu = 0;
                    if(!oscard) { _fun00014_ip = 59; continue _fun00013 }
 56:
                    zuuluu = report;
 59:
                    entity['burst_count'] = zuuluu;
                    zuuluu = entity.count_details;
                    zuuluu = zuuluu.normal;
                    tangon = tangon != zuuluu;
                    michal = 0;
                    if(!tangon) { _fun00014_ip = 89; continue _fun00013 }
 86:
                    michal = zuuluu;
 89:
                    entity['count'] = michal;
 95:
                    michal = entity.count;
                    tangon = 0;
                    if(!(michal < tangon)) { _fun00014_ip = 112; continue _fun00013 }
 106:
                    entity['count'] = tangon;
 112:
                    michal = entity.burst_count;
                    if(!(michal < tangon)) { _fun00014_ip = 128; continue _fun00013 }
 122:
                    entity['burst_count'] = tangon;
 128:
                    michal = global;
                    report = michal.Array;
                    zuuluu = report.isArray;
                    michal = entity.burst_colors;
                    michal = zuuluu.bind(report)(michal);
                    if(!michal) { _fun00014_ip = 170; continue _fun00013 }
 155:
                    zuuluu = entity.burst_colors;
                    zuuluu = zuuluu.length;
                    michal = zuuluu > tangon;
 170:
                    if(!michal) { _fun00014_ip = 252; continue _fun00013 }
 173:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 18;
                    michal = option[michal];
                    tangon = oscard.bind(golfie)(michal);
                    zuuluu = tangon.buildPlatformedThemedEmojiColorPalette;
                    michal = {};
                    report = entity.burst_colors;
                    michal['colors'] = report;
                    report = 19;
                    report = option[report];
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.isIOS;
                    report = report.bind(oscard)();
                    michal['shouldProcessMobileColors'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    entity['themedBurstColors'] = michal;
 252:
                    return entity;
                }
            };
            entity = michal.bind(zuuluu)(entity);
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
            zuuluu = entity.message_snapshots;
            michal = null;
            if(!(michal != zuuluu)) { _fun00016_ip = 40; continue _fun00015 }
 15:
            zuuluu = entity.message_snapshots;
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.message;
                zuuluu = _closure1_slot4;
                entity = {};
                tangon = _closure1_slot15;
                michal = undefined;
                michal = tangon.bind(michal)(report);
                entity['message'] = michal;
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                golfie = michal;
                oscard = entity;
                entity = new golfie[zuuluu](oscard, report);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
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
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    verify = golfie[report];
    verify = oscard.bind(entity)(verify);
    offset = verify.MessageSnapshotRecord;
    var _closure1_slot4 = offset;
    verify = verify.MinimalMessageRecord;
    var _closure1_slot5 = verify;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 2;
    report = golfie[report];
    verify = option.bind(entity)(report);
    var _closure1_slot7 = verify;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.SPOILER_ATTACHMENT_PREFIX;
    var _closure1_slot11 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.MessageFlags;
    var _closure1_slot12 = option;
    report = report.MessageTypes;
    var _closure1_slot13 = report;
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    foxtra = {'id': '???', 'username': '???'};
    backup = option;
    report = new backup[verify](foxtra, romeon);
    report = report instanceof Object ? report : option;
    var _closure1_slot14 = report;
    report = 21;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/MessageRecordUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['createMessageRecord'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateServerMessage
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            zuuluu = argFoo;
            tangon = argBar;
            michal = tangon.edited_timestamp;
            entity = null;
            if(!(entity == michal)) { _fun00018_ip = 42; continue _fun00017 }
 18:
            entity = {};
            golfie = entity;
            oscard = zuuluu;
            michal = copyDataProperties(golfie, oscard);
            golfie = entity;
            oscard = tangon;
            michal = copyDataProperties(golfie, oscard);
            _fun00018_ip = 87; continue _fun00017;
 42:
            michal = {};
            golfie = michal;
            oscard = tangon;
            tangon = copyDataProperties(golfie, oscard);
            report = zuuluu.reactions;
            tangon = 'reactions';
            michal[tangon] = report;
            tangon = zuuluu.interaction_data;
            zuuluu = 'interaction_data';
            michal[zuuluu] = tangon;
            entity = michal;
 87:
            return entity;
        }
    };
    zuuluu['updateServerMessage'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateMessageRecord
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            entity = argFoo;
            tangon = argBar;
            michal = tangon.edited_timestamp;
            report = null;
            if(!(report == michal)) { _fun00020_ip = 897; continue _fun00019 }
 21:
            michal = tangon.call;
            golfie = entity;
            if(!(report != michal)) { _fun00020_ip = 74; continue _fun00019 }
 33:
            oscard = entity.set;
            verify = _closure1_slot18;
            option = tangon.call;
            zuuluu = entity.timestamp;
            michal = undefined;
            zuuluu = verify.bind(michal)(option, zuuluu);
            michal = 'call';
            golfie = oscard.bind(entity)(michal, zuuluu);
 74:
            michal = tangon.attachments;
            option = golfie;
            if(!(report != michal)) { _fun00020_ip = 116; continue _fun00019 }
 87:
            oscard = golfie.set;
            zuuluu = _closure1_slot17;
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(tangon);
            michal = 'attachments';
            option = oscard.bind(golfie)(michal, zuuluu);
 116:
            michal = tangon.content;
            michal = report != michal;
            if(!michal) { _fun00020_ip = 141; continue _fun00019 }
 128:
            oscard = tangon.content;
            zuuluu = '';
            michal = zuuluu !== oscard;
 141:
            golfie = option;
            if(!michal) { _fun00020_ip = 167; continue _fun00019 }
 147:
            oscard = option.set;
            zuuluu = tangon.content;
            michal = 'content';
            golfie = oscard.bind(option)(michal, zuuluu);
 167:
            michal = tangon.embeds;
            option = golfie;
            if(!(report != michal)) { _fun00020_ip = 209; continue _fun00019 }
 180:
            oscard = golfie.set;
            zuuluu = _closure1_slot19;
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(tangon);
            michal = 'embeds';
            option = oscard.bind(golfie)(michal, zuuluu);
 209:
            michal = tangon.message_snapshots;
            golfie = option;
            if(!(report != michal)) { _fun00020_ip = 251; continue _fun00019 }
 222:
            oscard = option.set;
            zuuluu = _closure1_slot21;
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(tangon);
            michal = 'messageSnapshots';
            golfie = oscard.bind(option)(michal, zuuluu);
 251:
            zuuluu = tangon.pinned;
            michal = golfie.pinned;
            option = golfie;
            if(!(zuuluu !== michal)) { _fun00020_ip = 291; continue _fun00019 }
 270:
            oscard = golfie.set;
            zuuluu = tangon.pinned;
            michal = 'pinned';
            option = oscard.bind(golfie)(michal, zuuluu);
 291:
            michal = option.webhookId;
            michal = report != michal;
            if(!michal) { _fun00020_ip = 314; continue _fun00019 }
 304:
            zuuluu = tangon.author;
            michal = report != zuuluu;
 314:
            golfie = option;
            if(!michal) { _fun00020_ip = 368; continue _fun00019 }
 320:
            oscard = option.set;
            verify = _closure1_slot7;
            foxtra = tangon.author;
            zuuluu = verify.prototype;
            zuuluu = Object.create(zuuluu, {constructor: {value: verify}});
            backup = zuuluu;
            michal = new backup[verify](foxtra, romeon);
            zuuluu = michal instanceof Object ? michal : zuuluu;
            michal = 'author';
            golfie = oscard.bind(option)(michal, zuuluu);
 368:
            michal = tangon.flags;
            michal = report != michal;
            if(!michal) { _fun00020_ip = 394; continue _fun00019 }
 380:
            oscard = tangon.flags;
            zuuluu = golfie.flags;
            michal = oscard !== zuuluu;
 394:
            option = golfie;
            if(!michal) { _fun00020_ip = 420; continue _fun00019 }
 400:
            oscard = golfie.set;
            zuuluu = tangon.flags;
            michal = 'flags';
            option = oscard.bind(golfie)(michal, zuuluu);
 420:
            michal = tangon.components;
            golfie = option;
            if(!(report != michal)) { _fun00020_ip = 500; continue _fun00019 }
 433:
            oscard = option.set;
            verify = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 8;
            zuuluu = zuuluu[michal];
            michal = undefined;
            offset = verify.bind(michal)(zuuluu);
            verify = offset.transformComponents;
            zuuluu = tangon.components;
            michal = {};
            yankee = true;
            michal['includeEmojiSrc'] = yankee;
            zuuluu = verify.bind(offset)(zuuluu, michal);
            michal = 'components';
            golfie = oscard.bind(option)(michal, zuuluu);
 500:
            michal = tangon.role_subscription_data;
            option = golfie;
            if(!(report != michal)) { _fun00020_ip = 534; continue _fun00019 }
 513:
            oscard = golfie.set;
            zuuluu = tangon.role_subscription_data;
            michal = 'roleSubscriptionData';
            option = oscard.bind(golfie)(michal, zuuluu);
 534:
            michal = tangon.reactions;
            golfie = option;
            if(!(report != michal)) { _fun00020_ip = 592; continue _fun00019 }
 547:
            oscard = option.set;
            verify = _closure1_slot20;
            zuuluu = entity.reactions;
            if(!(report == zuuluu)) { _fun00020_ip = 575; continue _fun00019 }
 569:
            zuuluu = tangon.reactions;
 575:
            michal = undefined;
            zuuluu = verify.bind(michal)(zuuluu);
            michal = 'reactions';
            golfie = oscard.bind(option)(michal, zuuluu);
 592:
            michal = tangon.poll;
            verify = golfie;
            if(!(report != michal)) { _fun00020_ip = 656; continue _fun00019 }
 605:
            oscard = golfie.set;
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 15;
            michal = option[michal];
            option = undefined;
            zuuluu = zuuluu.bind(option)(michal);
            michal = tangon.poll;
            zuuluu = zuuluu.bind(option)(michal);
            michal = 'poll';
            verify = oscard.bind(golfie)(michal, zuuluu);
 656:
            michal = tangon.mentions;
            michal = report != michal;
            option = verify;
            zuuluu = false;
            if(!michal) { _fun00020_ip = 714; continue _fun00019 }
 674:
            golfie = verify.set;
            offset = tangon.mentions;
            oscard = offset.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            oscard = oscard.bind(offset)(michal);
            michal = 'mentions';
            option = golfie.bind(verify)(michal, oscard);
            zuuluu = true;
 714:
            michal = tangon.mention_everyone;
            verify = option;
            if(!(report != michal)) { _fun00020_ip = 750; continue _fun00019 }
 727:
            golfie = option.set;
            oscard = tangon.mention_everyone;
            michal = 'mentionEveryone';
            verify = golfie.bind(option)(michal, oscard);
            zuuluu = true;
 750:
            michal = tangon.mention_roles;
            option = verify;
            if(!(report != michal)) { _fun00020_ip = 786; continue _fun00019 }
 763:
            golfie = verify.set;
            oscard = tangon.mention_roles;
            michal = 'mentionRoles';
            option = golfie.bind(verify)(michal, oscard);
            zuuluu = true;
 786:
            michal = tangon.potions;
            golfie = option;
            if(!(report != michal)) { _fun00020_ip = 820; continue _fun00019 }
 799:
            oscard = option.set;
            report = tangon.potions;
            michal = 'potions';
            golfie = oscard.bind(option)(michal, report);
 820:
            michal = golfie;
            if(!zuuluu) { _fun00020_ip = 895; continue _fun00019 }
 826:
            oscard = golfie.set;
            report = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 13;
            zuuluu = option[zuuluu];
            option = undefined;
            report = report.bind(option)(zuuluu);
            zuuluu = {};
            zuuluu['message'] = golfie;
            offset = _closure1_slot8;
            verify = offset.getId;
            verify = verify.bind(offset)();
            zuuluu['userId'] = verify;
            report = report.bind(option)(zuuluu);
            zuuluu = 'mentioned';
            michal = oscard.bind(golfie)(zuuluu, report);
 895:
            return michal;
 897:
            zuuluu = _closure1_slot16;
            michal = {};
            report = entity.reactions;
            michal['reactions'] = report;
            entity = entity.interactionData;
            michal['interactionData'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(tangon, michal);
            return entity;
        }
    };
    zuuluu['updateMessageRecord'] = tangon;
    tangon = function(argFoo) {
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 20;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            entity = zuuluu.getMessageStickers;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = entity.length;
            entity = 0;
            entity = entity === zuuluu;
            if(entity) { _fun00022_ip = 66; continue _fun00021 }
 53:
            zuuluu = michal.content;
            michal = '';
            entity = michal !== zuuluu;
 66:
            return entity;
        }
    };
    zuuluu['canEditMessageWithStickers'] = tangon;
    michal = function(argFoo) { // Original name: hasEphemeralAppearance
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.hasFlag;
            entity = _closure1_slot12;
            entity = entity.EPHEMERAL;
            entity = tangon.bind(zuuluu)(entity);
            if(!entity) { _fun00024_ip = 49; continue _fun00023 }
 30:
            zuuluu = zuuluu.type;
            michal = _closure1_slot13;
            michal = michal.IN_GAME_MESSAGE_NUX;
            entity = zuuluu !== michal;
 49:
            return entity;
        }
    };
    zuuluu['hasEphemeralAppearance'] = michal;
    return entity;
})();
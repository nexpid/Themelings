// app/modules/messages/native/renderer/row_data/ForumPostActions.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: getForumPostFollowIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            option = argFoo;
            zuuluu = _closure1_slot0;
            verify = _closure1_slot2;
            entity = 7;
            entity = verify[entity];
            oscard = undefined;
            report = zuuluu.bind(oscard)(entity);
            tangon = report.getAssetUriForEmbed;
            golfie = _closure1_slot1;
            if(option) { _fun00002_ip = 60; continue _fun00001 }
 41:
            entity = 9;
            entity = verify[entity];
            entity = golfie.bind(oscard)(entity);
            entity = tangon.bind(report)(entity);
            _fun00002_ip = 77; continue _fun00001;
 60:
            zuuluu = 8;
            zuuluu = verify[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            entity = tangon.bind(report)(zuuluu);
 77:
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00002_ip = 174; continue _fun00001 }
 83:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 10;
            zuuluu = tangon[zuuluu];
            tangon = report.bind(oscard)(zuuluu);
            zuuluu = tangon.captureMessage;
            verify = _closure1_slot2;
            if(option) { _fun00002_ip = 125; continue _fun00001 }
 116:
            michal = 9;
            michal = verify[michal];
            _fun00002_ip = 132; continue _fun00001;
 125:
            golfie = 8;
            michal = verify[golfie];
 132:
            golfie = report.bind(oscard)(michal);
            michal = global;
            michal = michal.HermesInternal;
            oscard = michal.concat;
            report = 'Forum follow is null. isFollowing: ';
            michal = ' icon: ';
            michal = oscard.bind(report)(option, michal, golfie);
            michal = zuuluu.bind(tangon)(michal);
 174:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: getShareIcon
        zuuluu = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 7;
        michal = oscard[michal];
        report = undefined;
        zuuluu = zuuluu.bind(report)(michal);
        michal = zuuluu.getAssetUriForEmbed;
        tangon = _closure1_slot1;
        entity = 11;
        entity = oscard[entity];
        entity = tangon.bind(report)(entity);
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: createMediaPostSharePrompt
        entity = {};
        zuuluu = _closure1_slot0;
        golfie = _closure1_slot2;
        michal = 12;
        tangon = golfie[michal];
        oscard = undefined;
        tangon = zuuluu.bind(oscard)(tangon);
        option = tangon.intl;
        report = option.string;
        tangon = golfie[michal];
        tangon = zuuluu.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.5uAO7e;
        tangon = report.bind(option)(tangon);
        entity['title'] = tangon;
        tangon = golfie[michal];
        tangon = zuuluu.bind(oscard)(tangon);
        offset = tangon.intl;
        verify = offset.formatToParts;
        tangon = golfie[michal];
        tangon = zuuluu.bind(oscard)(tangon);
        tangon = tangon.t;
        option = tangon.YtCu5u;
        tangon = {};
        yankee = {};
        report = _closure1_slot1;
        foxtra = 13;
        foxtra = golfie[foxtra];
        backup = report.bind(oscard)(foxtra);
        foxtra = backup.getCreatorSupportArticleURL;
        romeon = _closure1_slot8;
        romeon = romeon.MEDIA_CHANNEL;
        romeon = foxtra.bind(backup)(romeon);
        yankee['url'] = romeon;
        tangon['helpArticleUrl'] = yankee;
        tangon = verify.bind(offset)(option, tangon);
        entity['subtitle'] = tangon;
        tangon = golfie[michal];
        tangon = zuuluu.bind(oscard)(tangon);
        option = tangon.intl;
        tangon = option.string;
        michal = golfie[michal];
        michal = zuuluu.bind(oscard)(michal);
        michal = michal.t;
        michal = michal.C5UQCw;
        michal = tangon.bind(option)(michal);
        entity['cta'] = michal;
        michal = 7;
        tangon = golfie[michal];
        verify = zuuluu.bind(oscard)(tangon);
        option = verify.getAssetUriForEmbed;
        tangon = 14;
        tangon = golfie[tangon];
        tangon = report.bind(oscard)(tangon);
        tangon = option.bind(verify)(tangon);
        entity['icon'] = tangon;
        michal = golfie[michal];
        tangon = zuuluu.bind(oscard)(michal);
        zuuluu = tangon.getAssetUriForEmbed;
        michal = 15;
        michal = golfie[michal];
        michal = report.bind(oscard)(michal);
        michal = zuuluu.bind(tangon)(michal);
        entity['closeIcon'] = michal;
        return entity;
    };
    var _closure1_slot13 = entity;
    tangon = function(argFoo) { // Original name: createDefaultReaction
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.defaultReactionEmoji;
            report = entity.customGuildEmoji;
            michal = null;
            oscard = michal != tangon;
            entity = undefined;
            zuuluu = undefined;
            if(!oscard) { _fun00004_ip = 330; continue _fun00003 }
 31:
            oscard = tangon.emojiId;
            golfie = tangon.emojiName;
            if(!(michal != oscard)) { _fun00004_ip = 54; continue _fun00003 }
 47:
            if(!(michal == report)) { _fun00004_ip = 180; continue _fun00003 }
 54:
            tangon = michal != golfie;
            zuuluu = undefined;
            if(!tangon) { _fun00004_ip = 330; continue _fun00003 }
 66:
            tangon = {};
            tangon['id'] = entity;
            tangon['name'] = golfie;
            yankee = false;
            tangon['animated'] = yankee;
            romeon = _closure1_slot1;
            offset = _closure1_slot2;
            verify = 18;
            verify = offset[verify];
            romeon = romeon.bind(entity)(verify);
            verify = romeon.getURL;
            verify = verify.bind(romeon)(golfie);
            tangon['src'] = verify;
            verify = _closure1_slot0;
            option = 17;
            option = offset[option];
            offset = verify.bind(entity)(option);
            verify = offset.getAccessibleEmojiDisplayName;
            option = {};
            option['id'] = entity;
            option['name'] = golfie;
            option['animated'] = yankee;
            golfie = 0;
            golfie = verify.bind(offset)(yankee, golfie, option);
            tangon['displayName'] = golfie;
            zuuluu = tangon;
            _fun00004_ip = 330; continue _fun00003;
 180:
            tangon = {};
            tangon['id'] = oscard;
            tangon['name'] = entity;
            golfie = report.animated;
            tangon['animated'] = golfie;
            offset = _closure1_slot1;
            verify = _closure1_slot2;
            option = 16;
            option = verify[option];
            yankee = offset.bind(entity)(option);
            offset = yankee.getEmojiURL;
            option = {};
            option['id'] = oscard;
            romeon = report.animated;
            option['animated'] = romeon;
            romeon = 48;
            option['size'] = romeon;
            option = offset.bind(yankee)(option);
            tangon['src'] = option;
            option = _closure1_slot0;
            golfie = 17;
            golfie = verify[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.getAccessibleEmojiDisplayName;
            golfie = {};
            golfie['id'] = oscard;
            oscard = report.name;
            golfie['name'] = oscard;
            report = report.animated;
            golfie['animated'] = report;
            oscard = false;
            report = 0;
            report = option.bind(verify)(oscard, report, golfie);
            tangon['displayName'] = report;
            zuuluu = tangon;
 330:
            michal = michal != zuuluu;
            entity = undefined;
            if(!michal) { _fun00004_ip = 362; continue _fun00003 }
 339:
            michal = {'emoji': null, 'me': false, 'count': 0};
            michal['emoji'] = zuuluu;
            entity = michal;
 362:
            return entity;
        }
    };
    var _closure1_slot14 = tangon;
    entity = function(argFoo) { // Original name: ForumPostActionsData
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            oscard = michal.channel;
            var _closure2_slot0 = oscard;
            option = michal.hasReactions;
            offset = michal.defaultReaction;
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 20;
            verify = report[michal];
            tangon = undefined;
            foxtra = zuuluu.bind(tangon)(verify);
            romeon = foxtra.useStateFromStores;
            verify = _closure1_slot6;
            yankee = new Array(1);
            yankee[0] = verify;
            oscard = oscard.id;
            verify = new Array(1);
            verify[0] = oscard;
            oscard = function() {
                zuuluu = _closure1_slot6;
                michal = zuuluu.hasJoined;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            oscard = romeon.bind(foxtra)(yankee, oscard, verify);
            michal = report[michal];
            verify = zuuluu.bind(tangon)(michal);
            report = verify.useStateFromStores;
            michal = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = function() {
                zuuluu = _closure1_slot5;
                michal = zuuluu.shouldDisplayPrompt;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = report.bind(verify)(zuuluu, michal);
            var _closure2_slot1 = verify;
            report = _closure1_slot3;
            zuuluu = report.useMemo;
            michal = new Array(1);
            michal[0] = verify;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    zuuluu = undefined;
                    entity = undefined;
                    if(!michal) { _fun00008_ip = 25; continue _fun00007 }
 14:
                    michal = _closure1_slot13;
                    entity = michal.bind(zuuluu)();
 25:
                    return entity;
                }
            };
            report = zuuluu.bind(report)(entity, michal);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot10;
            entity = {};
            verify = 3;
            entity['numDisplayedReactions'] = verify;
            entity['isFollowing'] = oscard;
            verify = _closure1_slot11;
            verify = verify.bind(tangon)(oscard);
            entity['followIcon'] = verify;
            backup = _closure1_slot0;
            verify = _closure1_slot2;
            yankee = 12;
            romeon = verify[yankee];
            romeon = backup.bind(tangon)(romeon);
            foxtra = romeon.intl;
            romeon = foxtra.string;
            verify = verify[yankee];
            verify = backup.bind(tangon)(verify);
            verify = verify.t;
            if(oscard) { _fun00006_ip = 265; continue _fun00005 }
 252:
            oscard = verify.0rQinJ;
            oscard = romeon.bind(foxtra)(oscard);
            _fun00006_ip = 276; continue _fun00005;
 265:
            verify = verify.OtF+lJ;
            oscard = romeon.bind(foxtra)(verify);
 276:
            entity['followLabel'] = oscard;
            oscard = _closure1_slot12;
            oscard = oscard.bind(tangon)();
            entity['shareIcon'] = oscard;
            foxtra = _closure1_slot0;
            oscard = _closure1_slot2;
            verify = oscard[yankee];
            verify = foxtra.bind(tangon)(verify);
            romeon = verify.intl;
            verify = romeon.string;
            oscard = oscard[yankee];
            oscard = foxtra.bind(tangon)(oscard);
            oscard = oscard.t;
            oscard = oscard.Ej3B3d;
            oscard = verify.bind(romeon)(oscard);
            entity['shareLabel'] = oscard;
            entity['defaultReaction'] = offset;
            oscard = undefined;
            if(option) { _fun00006_ip = 439; continue _fun00005 }
 361:
            verify = null;
            romeon = verify == offset;
            option = undefined;
            if(romeon) { _fun00006_ip = 378; continue _fun00005 }
 372:
            option = offset.emoji;
 378:
            option = verify != option;
            oscard = undefined;
            if(option) { _fun00006_ip = 439; continue _fun00005 }
 387:
            offset = _closure1_slot0;
            golfie = _closure1_slot2;
            option = golfie[yankee];
            option = offset.bind(tangon)(option);
            verify = option.intl;
            option = verify.string;
            golfie = golfie[yankee];
            golfie = offset.bind(tangon)(golfie);
            golfie = golfie.t;
            golfie = golfie.xpOyTE;
            oscard = option.bind(verify)(golfie);
 439:
            entity['addReactLabel'] = oscard;
            entity['sharePrompt'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: ForumPostActionsWithDefaultReaction
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            oscard = entity.channel;
            tangon = undefined;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            zuuluu = oscard.parent_id;
            var _closure2_slot0 = zuuluu;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            option = 20;
            report = report[option];
            offset = golfie.bind(tangon)(report);
            verify = offset.useStateFromStores;
            report = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = report;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getChannel;
                    entity = _closure2_slot0;
                    michal = michal.bind(zuuluu)(entity);
                    entity = null;
                    zuuluu = entity == michal;
                    entity = undefined;
                    if(zuuluu) { _fun00012_ip = 41; continue _fun00011 }
 35:
                    entity = michal.defaultReactionEmoji;
 41:
                    return entity;
                }
            };
            verify = verify.bind(offset)(golfie, zuuluu, report);
            var _closure2_slot1 = verify;
            zuuluu = null;
            report = zuuluu == verify;
            zuuluu = undefined;
            if(report) { _fun00010_ip = 113; continue _fun00009 }
 107:
            zuuluu = verify.emojiId;
 113:
            _closure2_slot2 = zuuluu;
            golfie = _closure1_slot0;
            report = _closure1_slot2;
            report = report[option];
            offset = golfie.bind(tangon)(report);
            option = offset.useStateFromStores;
            report = _closure1_slot4;
            golfie = new Array(1);
            golfie[0] = report;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00014_ip = 38; continue _fun00013 }
 16:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getUsableCustomEmojiById;
                    michal = _closure2_slot2;
                    entity = zuuluu.bind(tangon)(michal);
 38:
                    return entity;
                }
            };
            option = option.bind(offset)(golfie, zuuluu, report);
            _closure2_slot3 = option;
            golfie = _closure1_slot3;
            report = golfie.useMemo;
            zuuluu = new Array(2);
            zuuluu[0] = verify;
            zuuluu[1] = option;
            michal = function() {
                zuuluu = _closure1_slot14;
                michal = {};
                tangon = _closure2_slot1;
                michal['defaultReactionEmoji'] = tangon;
                entity = _closure2_slot3;
                michal['customGuildEmoji'] = entity;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                return entity;
            };
            report = report.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot9;
            michal = _closure1_slot15;
            entity = {};
            golfie = false;
            entity['hasReactions'] = golfie;
            entity['channel'] = oscard;
            entity['defaultReaction'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    verify = golfie[entity];
    report = argCor;
    entity = undefined;
    report = report.bind(entity)(verify);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.HelpdeskArticles;
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot9 = report;
    report = 19;
    report = golfie[report];
    verify = oscard.bind(entity)(report);
    option = verify.makeKeyedDataComponent;
    report = 'postActions';
    report = option.bind(verify)(report);
    var _closure1_slot10 = report;
    report = 21;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/row_data/ForumPostActions.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: ForumPostActions
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            michal = argFoo;
            michal = michal.message;
            zuuluu = michal.getChannelId;
            verify = zuuluu.bind(michal)();
            var _closure2_slot0 = verify;
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            tangon = 20;
            tangon = oscard[tangon];
            oscard = undefined;
            option = report.bind(oscard)(tangon);
            golfie = option.useStateFromStores;
            tangon = _closure1_slot7;
            report = new Array(1);
            report[0] = tangon;
            tangon = new Array(1);
            tangon[0] = verify;
            entity = function() {
                zuuluu = _closure1_slot7;
                michal = zuuluu.getChannel;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            golfie = golfie.bind(option)(report, entity, tangon);
            report = null;
            tangon = report != golfie;
            entity = null;
            if(!tangon) { _fun00016_ip = 183; continue _fun00015 }
 99:
            tangon = golfie.isForumPost;
            tangon = tangon.bind(golfie)();
            entity = null;
            if(!tangon) { _fun00016_ip = 183; continue _fun00015 }
 114:
            michal = michal.reactions;
            tangon = michal.length;
            michal = 0;
            if(!(michal === tangon)) { _fun00016_ip = 153; continue _fun00015 }
 131:
            report = _closure1_slot9;
            tangon = _closure1_slot16;
            michal = {};
            michal['channel'] = golfie;
            michal = report.bind(oscard)(tangon, michal);
            _fun00016_ip = 180; continue _fun00015;
 153:
            report = _closure1_slot9;
            tangon = _closure1_slot15;
            zuuluu = {};
            option = true;
            zuuluu['hasReactions'] = option;
            zuuluu['channel'] = golfie;
            michal = report.bind(oscard)(tangon, zuuluu);
 180:
            entity = michal;
 183:
            return entity;
        }
    };
    zuuluu['default'] = report;
    zuuluu['createDefaultReaction'] = tangon;
    michal = function(argFoo) { // Original name: createForumPostActions
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            golfie = entity.isFollowing;
            michal = entity.hasReactions;
            tangon = entity.defaultReaction;
            entity = entity.showMediaPostSharePrompt;
            zuuluu = _closure1_slot11;
            verify = undefined;
            option = zuuluu.bind(verify)(golfie);
            zuuluu = _closure1_slot12;
            oscard = zuuluu.bind(verify)();
            zuuluu = undefined;
            if(michal) { _fun00018_ip = 135; continue _fun00017 }
 54:
            offset = null;
            yankee = offset == tangon;
            michal = undefined;
            if(yankee) { _fun00018_ip = 71; continue _fun00017 }
 65:
            michal = tangon.emoji;
 71:
            michal = offset != michal;
            zuuluu = undefined;
            if(michal) { _fun00018_ip = 135; continue _fun00017 }
 80:
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            michal = 12;
            offset = foxtra[michal];
            offset = romeon.bind(verify)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            michal = foxtra[michal];
            michal = romeon.bind(verify)(michal);
            michal = michal.t;
            michal = michal.xpOyTE;
            zuuluu = offset.bind(yankee)(michal);
 135:
            michal = undefined;
            if(!entity) { _fun00018_ip = 148; continue _fun00017 }
 140:
            entity = _closure1_slot13;
            michal = entity.bind(verify)();
 148:
            entity = {};
            offset = 3;
            entity['numDisplayedReactions'] = offset;
            entity['isFollowing'] = golfie;
            entity['followIcon'] = option;
            foxtra = _closure1_slot0;
            option = _closure1_slot2;
            offset = 12;
            yankee = option[offset];
            yankee = foxtra.bind(verify)(yankee);
            romeon = yankee.intl;
            yankee = romeon.string;
            option = option[offset];
            option = foxtra.bind(verify)(option);
            option = option.t;
            if(golfie) { _fun00018_ip = 228; continue _fun00017 }
 215:
            golfie = option.0rQinJ;
            golfie = yankee.bind(romeon)(golfie);
            _fun00018_ip = 239; continue _fun00017;
 228:
            option = option.OtF+lJ;
            golfie = yankee.bind(romeon)(option);
 239:
            entity['followLabel'] = golfie;
            entity['shareIcon'] = oscard;
            option = _closure1_slot0;
            report = _closure1_slot2;
            oscard = report[offset];
            oscard = option.bind(verify)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            report = report[offset];
            report = option.bind(verify)(report);
            report = report.t;
            report = report.Ej3B3d;
            report = oscard.bind(golfie)(report);
            entity['shareLabel'] = report;
            entity['defaultReaction'] = tangon;
            entity['addReactLabel'] = zuuluu;
            entity['sharePrompt'] = michal;
            return entity;
        }
    };
    zuuluu['createForumPostActions'] = michal;
    return entity;
})();
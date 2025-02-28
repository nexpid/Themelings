// app/modules/messages/renderMessageMarkup.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = option;
    report = function(argFoo, argBar) { // Original name: getInitialParserStateFromMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot7;
            michal = {};
            entity = zuuluu.channel_id;
            michal['channelId'] = entity;
            entity = zuuluu.id;
            michal['messageId'] = entity;
            entity = argBar;
            michal['renderOptions'] = entity;
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            entity = zuuluu.webhookId;
            michal = null;
            report = michal != entity;
            entity = {};
            verify = entity;
            option = tangon;
            oscard = copyDataProperties(verify, option);
            oscard = report;
            if(oscard) { _fun00002_ip = 81; continue _fun00001 }
 75:
            oscard = tangon.allowLinks;
 81:
            tangon = 'allowLinks';
            entity[tangon] = oscard;
            tangon = 'allowEmojiLinks';
            entity[tangon] = report;
            report = zuuluu.mentionChannels;
            tangon = 'mentionChannels';
            entity[tangon] = report;
            zuuluu = zuuluu.soundboardSounds;
            if(!(michal == zuuluu)) { _fun00002_ip = 128; continue _fun00001 }
 124:
            zuuluu = new Array(0);
 128:
            michal = 'soundboardSounds';
            entity[michal] = zuuluu;
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: getInitialParserState
        entity = argFoo;
        tangon = entity.channelId;
        zuuluu = entity.messageId;
        michal = entity.renderOptions;
        entity = {};
        entity['channelId'] = tangon;
        entity['messageId'] = zuuluu;
        zuuluu = global;
        oscard = zuuluu.Boolean;
        report = michal.allowLinks;
        tangon = undefined;
        report = oscard.bind(tangon)(report);
        entity['allowLinks'] = report;
        oscard = zuuluu.Boolean;
        report = michal.allowDevLinks;
        report = oscard.bind(tangon)(report);
        entity['allowDevLinks'] = report;
        oscard = zuuluu.Boolean;
        report = michal.formatInline;
        report = oscard.bind(tangon)(report);
        entity['formatInline'] = report;
        oscard = zuuluu.Boolean;
        report = michal.noStyleAndInteraction;
        report = oscard.bind(tangon)(report);
        entity['noStyleAndInteraction'] = report;
        oscard = zuuluu.Boolean;
        report = michal.allowHeading;
        report = oscard.bind(tangon)(report);
        entity['allowHeading'] = report;
        oscard = zuuluu.Boolean;
        report = michal.allowList;
        report = oscard.bind(tangon)(report);
        entity['allowList'] = report;
        oscard = zuuluu.Boolean;
        report = michal.previewLinkTarget;
        report = oscard.bind(tangon)(report);
        entity['previewLinkTarget'] = report;
        oscard = zuuluu.Boolean;
        report = michal.disableAnimatedEmoji;
        report = oscard.bind(tangon)(report);
        entity['disableAnimatedEmoji'] = report;
        oscard = zuuluu.Boolean;
        report = michal.isInteracting;
        report = oscard.bind(tangon)(report);
        entity['isInteracting'] = report;
        oscard = false;
        entity['allowEmojiLinks'] = oscard;
        report = true;
        entity['disableAutoBlockNewlines'] = report;
        golfie = new Array(0);
        entity['mentionChannels'] = golfie;
        golfie = new Array(0);
        entity['soundboardSounds'] = golfie;
        entity['muted'] = oscard;
        entity['unknownUserMentionPlaceholder'] = report;
        report = michal.viewingChannelId;
        entity['viewingChannelId'] = report;
        zuuluu = zuuluu.Boolean;
        michal = michal.forceWhite;
        michal = zuuluu.bind(tangon)(michal);
        entity['forceWhite'] = michal;
        return entity;
    };
    var _closure1_slot7 = tangon;
    entity = function(argFoo, argBar, argBaz) { // Original name: render
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argBar;
            michal = argBaz;
            var _closure2_slot0 = tangon;
            report = michal.toAST;
            golfie = undefined;
            entity = golfie !== report;
            if(!entity) { _fun00004_ip = 32; continue _fun00003 }
 29:
            entity = report;
 32:
            var _closure2_slot1 = entity;
            report = michal.hideSimpleEmbedContent;
            entity = golfie === report;
            if(entity) { _fun00004_ip = 52; continue _fun00003 }
 49:
            entity = report;
 52:
            var _closure2_slot2 = entity;
            report = michal.formatInline;
            entity = golfie !== report;
            if(!entity) { _fun00004_ip = 72; continue _fun00003 }
 69:
            entity = report;
 72:
            var _closure2_slot3 = entity;
            entity = michal.postProcessor;
            var _closure2_slot4 = entity;
            entity = michal.shouldFilterKeywords;
            oscard = michal.contentMessage;
            var _closure2_slot5 = oscard;
            report = false;
            var _closure2_slot6 = report;
            offset = null;
            report = tangon;
            if(!(offset != oscard)) { _fun00004_ip = 120; continue _fun00003 }
 117:
            report = oscard;
 120:
            verify = report.content;
            oscard = verify;
            if(!entity) { _fun00004_ip = 218; continue _fun00003 }
 131:
            report = _closure1_slot0;
            option = _closure1_slot2;
            entity = 1;
            entity = option[entity];
            option = report.bind(golfie)(entity);
            report = option.getKeywordSubstitutedContent;
            entity = {};
            yankee = true;
            entity['escapeReplacement'] = yankee;
            yankee = tangon.id;
            entity['messageId'] = yankee;
            yankee = tangon.channel_id;
            entity['channelId'] = yankee;
            yankee = tangon.author;
            romeon = offset == yankee;
            offset = undefined;
            if(romeon) { _fun00004_ip = 207; continue _fun00003 }
 202:
            offset = yankee.id;
 207:
            entity['authorId'] = offset;
            oscard = report.bind(option)(verify, entity);
 218:
            entity = _closure1_slot6;
            backup = entity.bind(golfie)(tangon, michal);
            tangon = argFoo;
            kiloes = true;
            foxtra = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    report = argBar;
                    golfie = global;
                    tangon = golfie.Array;
                    michal = tangon.isArray;
                    michal = michal.bind(tangon)(zuuluu);
                    oscard = zuuluu;
                    if(michal) { _fun00006_ip = 43; continue _fun00005 }
 32:
                    michal = new Array(1);
                    michal[0] = zuuluu;
                    oscard = michal;
 43:
                    zuuluu = _closure2_slot2;
                    option = oscard;
                    if(!zuuluu) { _fun00006_ip = 228; continue _fun00005 }
 59:
                    tangon = _closure2_slot5;
                    zuuluu = null;
                    if(!(zuuluu == tangon)) { _fun00006_ip = 75; continue _fun00005 }
 69:
                    zuuluu = _closure2_slot0;
                    _fun00006_ip = 79; continue _fun00005;
 75:
                    zuuluu = _closure2_slot5;
 79:
                    offset = zuuluu.embeds;
                    tangon = oscard.length;
                    verify = 1;
                    zuuluu = oscard;
                    if(!(verify === tangon)) { _fun00006_ip = 225; continue _fun00005 }
 103:
                    tangon = offset.length;
                    zuuluu = oscard;
                    if(!(verify === tangon)) { _fun00006_ip = 225; continue _fun00005 }
 115:
                    verify = 0;
                    tangon = oscard[verify];
                    offset = offset[verify];
                    yankee = tangon.type;
                    verify = 'link';
                    if(!(verify !== yankee)) { _fun00006_ip = 154; continue _fun00005 }
 138:
                    verify = tangon.type;
                    tangon = 'attachmentLink';
                    zuuluu = oscard;
                    if(!(tangon === verify)) { _fun00006_ip = 225; continue _fun00005 }
 154:
                    romeon = _closure1_slot4;
                    yankee = romeon.has;
                    verify = offset.type;
                    verify = yankee.bind(romeon)(verify);
                    zuuluu = oscard;
                    if(!verify) { _fun00006_ip = 225; continue _fun00005 }
 182:
                    yankee = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 4;
                    verify = verify[tangon];
                    tangon = undefined;
                    verify = yankee.bind(tangon)(verify);
                    tangon = verify.isEmbedInline;
                    tangon = tangon.bind(verify)(offset);
                    zuuluu = oscard;
                    if(!tangon) { _fun00006_ip = 225; continue _fun00005 }
 221:
                    zuuluu = new Array(0);
 225:
                    option = zuuluu;
 228:
                    zuuluu = _closure2_slot3;
                    if(zuuluu) { _fun00006_ip = 331; continue _fun00005 }
 235:
                    if(report) { _fun00006_ip = 317; continue _fun00005 }
 238:
                    zuuluu = 0;
                    tangon = option[zuuluu];
                    oscard = tangon.type;
                    tangon = 'paragraph';
                    tangon = tangon === oscard;
                    if(!tangon) { _fun00006_ip = 279; continue _fun00005 }
 260:
                    oscard = option[zuuluu];
                    verify = oscard.content;
                    oscard = golfie.Array;
                    tangon = verify instanceof oscard;
 279:
                    if(!tangon) { _fun00006_ip = 331; continue _fun00005 }
 282:
                    tangon = option[zuuluu];
                    verify = _closure1_slot10;
                    zuuluu = option[zuuluu];
                    zuuluu = zuuluu.content;
                    oscard = undefined;
                    oscard = verify.bind(oscard)(zuuluu);
                    tangon['content'] = zuuluu;
                    _fun00006_ip = 331; continue _fun00005;
 317:
                    tangon = _closure1_slot10;
                    zuuluu = undefined;
                    zuuluu = tangon.bind(zuuluu)(option);
 331:
                    tangon = _closure2_slot1;
                    zuuluu = option;
                    if(!tangon) { _fun00006_ip = 353; continue _fun00005 }
 341:
                    oscard = function(argFoo) { // Original name: removeBuildOverrideLinks
                        zuuluu = argFoo;
                        michal = zuuluu.filter;
                        entity = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                michal = argFoo;
                                zuuluu = michal.type;
                                entity = 'link';
                                entity = entity !== zuuluu;
                                if(entity) { _fun00008_ip = 64; continue _fun00007 }
 19:
                                report = _closure1_slot0;
                                tangon = _closure1_slot2;
                                zuuluu = 5;
                                tangon = tangon[zuuluu];
                                zuuluu = undefined;
                                tangon = report.bind(zuuluu)(tangon);
                                zuuluu = tangon.isBuildOverrideLink;
                                michal = michal.target;
                                michal = zuuluu.bind(tangon)(michal);
                                entity = !michal;
 64:
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = undefined;
                    zuuluu = oscard.bind(tangon)(option);
 353:
                    entity = function(argFoo) { // Original name: removeQuestsEmbedLinks
                        zuuluu = argFoo;
                        tangon = zuuluu.some;
                        michal = function(argFoo) {
                            entity = argFoo;
                            michal = entity.type;
                            entity = 'link';
                            entity = entity !== michal;
                            return entity;
                        };
                        michal = tangon.bind(zuuluu)(michal);
                        var _closure4_slot0 = michal;
                        michal = zuuluu.filter;
                        entity = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                tangon = argFoo;
                                michal = tangon.type;
                                entity = 'link';
                                entity = entity === michal;
                                michal = tangon.target;
                                zuuluu = null;
                                report = zuuluu != michal;
                                michal = null;
                                if(!report) { _fun00010_ip = 75; continue _fun00009 }
 33:
                                golfie = _closure1_slot0;
                                oscard = _closure1_slot2;
                                report = 2;
                                oscard = oscard[report];
                                report = undefined;
                                oscard = golfie.bind(report)(oscard);
                                report = oscard.parseQuestsEmbedCode;
                                tangon = tangon.target;
                                michal = report.bind(oscard)(tangon);
 75:
                                if(!entity) { _fun00010_ip = 82; continue _fun00009 }
 78:
                                entity = zuuluu != michal;
 82:
                                if(!entity) { _fun00010_ip = 95; continue _fun00009 }
 85:
                                michal = _closure4_slot0;
                                entity = !michal;
 95:
                                entity = !entity;
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = undefined;
                    zuuluu = entity.bind(tangon)(zuuluu);
                    entity = _closure2_slot0;
                    entity = entity.embeds;
                    entity = entity.length;
                    oscard = 0;
                    if(!(entity > oscard)) { _fun00006_ip = 471; continue _fun00005 }
 386:
                    if(report) { _fun00006_ip = 455; continue _fun00005 }
 389:
                    entity = zuuluu[oscard];
                    offset = entity.type;
                    verify = 'paragraph';
                    entity = false;
                    if(!(verify === offset)) { _fun00006_ip = 467; continue _fun00005 }
 408:
                    verify = zuuluu[oscard];
                    verify = verify.content;
                    golfie = golfie.Array;
                    golfie = verify instanceof golfie;
                    entity = false;
                    if(!golfie) { _fun00006_ip = 467; continue _fun00005 }
 432:
                    golfie = _closure1_slot12;
                    oscard = zuuluu[oscard];
                    oscard = oscard.content;
                    entity = golfie.bind(tangon)(oscard);
                    _fun00006_ip = 467; continue _fun00005;
 455:
                    oscard = _closure1_slot12;
                    entity = oscard.bind(tangon)(zuuluu);
 467:
                    _closure2_slot6 = entity;
 471:
                    entity = _closure2_slot3;
                    if(!entity) { _fun00006_ip = 490; continue _fun00005 }
 478:
                    entity = _closure1_slot13;
                    entity = entity.bind(tangon)(zuuluu);
 490:
                    golfie = _closure2_slot4;
                    oscard = null;
                    entity = zuuluu;
                    if(!(oscard != golfie)) { _fun00006_ip = 513; continue _fun00005 }
 503:
                    michal = _closure2_slot4;
                    entity = michal.bind(tangon)(zuuluu, report);
 513:
                    return entity;
                }
            };
            output = undefined;
            sizing = oscard;
            michal = output[tangon](sizing, kiloes, backup, foxtra, romeon);
            entity = {};
            zuuluu = _closure2_slot6;
            entity['hasSpoilerEmbeds'] = zuuluu;
            entity['content'] = michal;
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: renderAutomodMessageMarkupWithParser
        oscard = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': false, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'disableAutoBlockNewlines': true, 'highlightWord': null, 'disableAnimatedEmoji': false};
        entity = false;
        michal = new Array(0);
        oscard['mentionChannels'] = michal;
        michal = new Array(0);
        oscard['soundboardSounds'] = michal;
        verify = true;
        michal = argBaz;
        oscard['highlightWord'] = michal;
        michal = argCor;
        oscard['channelId'] = michal;
        oscard['muted'] = entity;
        tangon = argFoo;
        yankee = undefined;
        offset = argBar;
        golfie = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = argFoo;
                entity = global;
                michal = entity.Array;
                entity = michal.isArray;
                michal = entity.bind(michal)(zuuluu);
                entity = zuuluu;
                if(michal) { _fun00012_ip = 38; continue _fun00011 }
 27:
                michal = new Array(1);
                michal[0] = zuuluu;
                entity = michal;
 38:
                return entity;
            }
        };
        option = oscard;
        entity = yankee[tangon](offset, verify, option, golfie, oscard);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo) { // Original name: checkForJumboEmoji
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tangon = entity.some;
            zuuluu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = argFoo;
                    michal = zuuluu.type;
                    entity = 'emoji';
                    entity = entity !== michal;
                    if(!entity) { _fun00016_ip = 32; continue _fun00015 }
 19:
                    tangon = zuuluu.type;
                    michal = 'customEmoji';
                    entity = michal !== tangon;
 32:
                    if(!entity) { _fun00016_ip = 80; continue _fun00015 }
 35:
                    michal = zuuluu.content;
                    tangon = 'string';
                    michal = typeof michal;
                    michal = tangon !== michal;
                    if(michal) { _fun00016_ip = 77; continue _fun00015 }
 54:
                    tangon = zuuluu.content;
                    zuuluu = tangon.trim;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = '';
                    michal = zuuluu !== tangon;
 77:
                    entity = michal;
 80:
                    return entity;
                }
            };
            zuuluu = tangon.bind(entity)(zuuluu);
            if(zuuluu) { _fun00014_ip = 77; continue _fun00013 }
 24:
            zuuluu = 0;
            var _closure2_slot0 = zuuluu;
            tangon = entity.forEach;
            zuuluu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = argFoo;
                    zuuluu = michal.type;
                    entity = 'emoji';
                    entity = entity !== zuuluu;
                    if(!entity) { _fun00018_ip = 32; continue _fun00017 }
 19:
                    zuuluu = michal.type;
                    michal = 'customEmoji';
                    entity = michal !== zuuluu;
 32:
                    if(entity) { _fun00018_ip = 53; continue _fun00017 }
 35:
                    zuuluu = _closure2_slot0;
                    entity = 1;
                    entity = zuuluu + entity;
                    _closure2_slot0 = entity;
 53:
                    michal = _closure2_slot0;
                    entity = _closure1_slot3;
                    if(!(!(michal > entity))) { _fun00018_ip = 75; continue _fun00017 }
 71:
                    entity = undefined;
                    return entity;
 75:
                    entity = false;
                    return entity;
                }
            };
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = _closure2_slot0;
            zuuluu = _closure1_slot3;
            if(!(!(tangon > zuuluu))) { _fun00014_ip = 75; continue _fun00013 }
 60:
            zuuluu = entity.forEach;
            michal = function(argFoo) {
                michal = true;
                entity = argFoo;
                entity['jumboable'] = michal;
                entity = undefined;
                return entity;
            };
            michal = zuuluu.bind(entity)(michal);
 75:
            return entity;
 77:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar) { // Original name: containsMatchingNode
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = argFoo;
            option = argBar;
            var _closure2_slot0 = option;
            tangon = global;
            michal = tangon.Array;
            michal = zuuluu instanceof michal;
            if(michal) { _fun00020_ip = 124; continue _fun00019 }
 27:
            golfie = undefined;
            michal = option.bind(golfie)(zuuluu);
            report = null;
            if(!(report == michal)) { _fun00020_ip = 122; continue _fun00019 }
 40:
            oscard = zuuluu.content;
            report = tangon.Array;
            report = oscard instanceof report;
            if(report) { _fun00020_ip = 101; continue _fun00019 }
 58:
            report = zuuluu.items;
            tangon = tangon.Array;
            tangon = report instanceof tangon;
            if(!tangon) { _fun00020_ip = 99; continue _fun00019 }
 77:
            verify = zuuluu.items;
            oscard = verify.some;
            report = function(argFoo) {
                tangon = _closure1_slot11;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            tangon = oscard.bind(verify)(report);
 99:
            _fun00020_ip = 119; continue _fun00019;
 101:
            oscard = _closure1_slot11;
            report = zuuluu.content;
            tangon = oscard.bind(golfie)(report, option);
 119:
            michal = tangon;
 122:
            return michal;
 124:
            michal = zuuluu.some;
            entity = function(argFoo) {
                tangon = _closure1_slot11;
                zuuluu = _closure2_slot0;
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: hasAnySpoilerEmbeds
        tangon = _closure1_slot11;
        zuuluu = undefined;
        michal = argFoo;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                report = argFoo;
                zuuluu = report.type;
                michal = 'spoiler';
                entity = null;
                if(!(michal === zuuluu)) { _fun00022_ip = 40; continue _fun00021 }
 18:
                tangon = _closure1_slot11;
                zuuluu = undefined;
                michal = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        michal = argFoo;
                        zuuluu = michal.type;
                        entity = 'link';
                        entity = entity === zuuluu;
                        if(entity) { _fun00024_ip = 32; continue _fun00023 }
 19:
                        zuuluu = michal.type;
                        michal = 'attachmentLink';
                        entity = michal === zuuluu;
 32:
                        if(entity) { _fun00024_ip = 37; continue _fun00023 }
 35:
                        entity = null;
 37:
                        return entity;
                    }
                };
                entity = tangon.bind(zuuluu)(report, michal);
 40:
                return entity;
            }
        };
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: convertNewlinesInContent
        entity = argFoo;
        zuuluu = entity.forEach;
        michal = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot5;
                tangon = report.has;
                zuuluu = entity.type;
                zuuluu = tangon.bind(report)(zuuluu);
                if(!zuuluu) { _fun00026_ip = 39; continue _fun00025 }
 28:
                report = entity.content;
                tangon = null;
                zuuluu = tangon != report;
 39:
                if(!zuuluu) { _fun00026_ip = 126; continue _fun00025 }
 42:
                zuuluu = global;
                report = zuuluu.Array;
                tangon = report.isArray;
                zuuluu = entity.content;
                zuuluu = tangon.bind(report)(zuuluu);
                if(zuuluu) { _fun00026_ip = 110; continue _fun00025 }
 68:
                oscard = entity.content;
                report = oscard.replace;
                tangon = /\n/g;
                zuuluu = ' ';
                zuuluu = report.bind(oscard)(tangon, zuuluu);
                entity['content'] = zuuluu;
                _fun00026_ip = 126; continue _fun00025;
 110:
                zuuluu = _closure1_slot13;
                michal = entity.content;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 126:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    oscard = global;
    yankee = oscard.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, verify);
    entity = 0;
    verify = option[entity];
    entity = undefined;
    verify = golfie.bind(entity)(verify);
    offset = verify.MessageEmbedTypes;
    verify = 30;
    var _closure1_slot3 = verify;
    yankee = oscard.Set;
    romeon = offset.IMAGE;
    verify = new Array(2);
    verify[0] = romeon;
    offset = offset.GIFV;
    verify[1] = offset;
    offset = yankee.prototype;
    offset = Object.create(offset, {constructor: {value: yankee}});
    sizing = offset;
    kiloes = verify;
    verify = new sizing[yankee](kiloes, backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot4 = verify;
    offset = oscard.Set;
    oscard = offset.prototype;
    verify = Object.create(oscard, {constructor: {value: offset}});
    kiloes = ['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler'];
    sizing = verify;
    oscard = new sizing[offset](kiloes, backup);
    oscard = oscard instanceof Object ? oscard : verify;
    var _closure1_slot5 = oscard;
    oscard = 6;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/messages/renderMessageMarkup.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: renderMessageMarkup
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            report = arguments[1];
            tangon = undefined;
            if(!(report === tangon)) { _fun00028_ip = 11; continue _fun00027 }
 9:
            report = {};
 11:
            zuuluu = _closure1_slot8;
            michal = report.formatInline;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 3;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            if(michal) { _fun00028_ip = 55; continue _fun00027 }
 47:
            michal = entity.parse;
            _fun00028_ip = 61; continue _fun00027;
 55:
            michal = entity.parseInlineReply;
 61:
            entity = argFoo;
            entity = zuuluu.bind(tangon)(michal, entity, report);
            return entity;
        }
    };
    zuuluu['default'] = oscard;
    zuuluu['getInitialParserStateFromMessage'] = report;
    zuuluu['getInitialParserState'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: renderMessageMarkupWithParser
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            report = arguments[2];
            tangon = undefined;
            if(!(report === tangon)) { _fun00030_ip = 11; continue _fun00029 }
 9:
            report = {};
 11:
            zuuluu = _closure1_slot8;
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity, report);
            return entity;
        }
    };
    zuuluu['renderMessageMarkupWithParser'] = tangon;
    tangon = function(argFoo) { // Original name: renderMessageMarkupToAST
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = arguments[1];
            report = undefined;
            if(!(entity === report)) { _fun00032_ip = 11; continue _fun00031 }
 9:
            entity = {};
 11:
            tangon = _closure1_slot8;
            zuuluu = entity.formatInline;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 3;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            if(zuuluu) { _fun00032_ip = 55; continue _fun00031 }
 47:
            zuuluu = michal.parseToAST;
            _fun00032_ip = 61; continue _fun00031;
 55:
            zuuluu = michal.parseInlineReplyToAST;
 61:
            michal = {};
            offset = michal;
            verify = entity;
            entity = copyDataProperties(offset, verify);
            oscard = true;
            entity = 'toAST';
            michal[entity] = oscard;
            entity = argFoo;
            entity = tangon.bind(report)(zuuluu, entity, michal);
            return entity;
        }
    };
    zuuluu['renderMessageMarkupToAST'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: renderMessageContentMarkup
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            report = arguments[2];
            tangon = undefined;
            if(!(report === tangon)) { _fun00034_ip = 11; continue _fun00033 }
 9:
            report = {};
 11:
            zuuluu = function(argFoo, argBar) { // Original name: renderMessageContentMarkupWithParser
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    zuuluu = argBar;
                    entity = arguments[2];
                    oscard = undefined;
                    if(!(entity === oscard)) { _fun00036_ip = 14; continue _fun00035 }
 12:
                    entity = {};
 14:
                    option = zuuluu.content;
                    golfie = zuuluu.guildId;
                    michal = zuuluu.channelId;
                    verify = zuuluu.messageId;
                    zuuluu = null;
                    report = option;
                    if(!(zuuluu != entity)) { _fun00036_ip = 107; continue _fun00035 }
 43:
                    entity = entity.shouldFilterKeywords;
                    report = option;
                    if(!entity) { _fun00036_ip = 107; continue _fun00035 }
 55:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 1;
                    entity = tangon[entity];
                    tangon = zuuluu.bind(oscard)(entity);
                    zuuluu = tangon.getKeywordSubstitutedContent;
                    entity = {};
                    offset = true;
                    entity['escapeReplacement'] = offset;
                    entity['channelId'] = michal;
                    entity['messageId'] = verify;
                    report = zuuluu.bind(tangon)(option, entity);
 107:
                    tangon = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': true, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'disableAutoBlockNewlines': true, 'previewLinkTarget': false, 'disableAnimatedEmoji': true};
                    entity = false;
                    zuuluu = new Array(0);
                    tangon['mentionChannels'] = zuuluu;
                    zuuluu = new Array(0);
                    tangon['soundboardSounds'] = zuuluu;
                    zuuluu = true;
                    tangon['guildId'] = golfie;
                    tangon['channelId'] = michal;
                    tangon['muted'] = entity;
                    tangon['disablePressableChannelMention'] = zuuluu;
                    michal = argFoo;
                    yankee = function(argFoo) {
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            zuuluu = argFoo;
                            entity = global;
                            michal = entity.Array;
                            entity = michal.isArray;
                            michal = entity.bind(michal)(zuuluu);
                            entity = zuuluu;
                            if(michal) { _fun00038_ip = 38; continue _fun00037 }
 27:
                            michal = new Array(1);
                            michal[0] = zuuluu;
                            entity = michal;
 38:
                            return entity;
                        }
                    };
                    kiloes = undefined;
                    backup = report;
                    foxtra = true;
                    romeon = tangon;
                    entity = kiloes[michal](backup, foxtra, romeon, yankee, offset);
                    return entity;
                }
            };
            michal = argFoo;
            entity = argBar;
            entity = zuuluu.bind(tangon)(michal, entity, report);
            return entity;
        }
    };
    zuuluu['renderMessageContentMarkup'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: renderAutomodMessageMarkup
        oscard = _closure1_slot9;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        entity = zuuluu[entity];
        report = undefined;
        entity = michal.bind(report)(entity);
        offset = entity.parseAutoModerationSystemMessage;
        verify = argFoo;
        option = argBar;
        golfie = argBaz;
        yankee = undefined;
        entity = yankee[oscard](offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['renderAutomodMessageMarkup'] = tangon;
    michal = function(argFoo, argBar, argBaz) { // Original name: renderAutomodMessageMarkupToAST
        oscard = _closure1_slot9;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        entity = zuuluu[entity];
        report = undefined;
        entity = michal.bind(report)(entity);
        offset = entity.parseAutoModerationSystemMessageToAST;
        verify = argFoo;
        option = argBar;
        golfie = argBaz;
        yankee = undefined;
        entity = yankee[oscard](offset, verify, option, golfie, oscard);
        return entity;
    };
    zuuluu['renderAutomodMessageMarkupToAST'] = michal;
    return entity;
})();
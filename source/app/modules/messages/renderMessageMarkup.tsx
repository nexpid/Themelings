// app/modules/messages/renderMessageMarkup.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = options;
    report = function(argFoo, argBar) { // Original name: getInitialParserStateFromMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot8;
            mike = {};
            entity = zulu.channel_id;
            mike['channelId'] = entity;
            entity = zulu.id;
            mike['messageId'] = entity;
            entity = argBar;
            mike['renderOptions'] = entity;
            entity = undefined;
            tango = tango.bind(entity)(mike);
            entity = zulu.webhookId;
            mike = null;
            report = mike != entity;
            entity = {};
            verify = entity;
            options = tango;
            oscar = copyDataProperties(verify, options);
            oscar = report;
            if(oscar) { _fun00002_ip = 81; continue _fun00001 }
 75:
            oscar = tango.allowLinks;
 81:
            tango = 'allowLinks';
            entity[tango] = oscar;
            tango = 'allowEmojiLinks';
            entity[tango] = report;
            report = zulu.mentionChannels;
            tango = 'mentionChannels';
            entity[tango] = report;
            zulu = zulu.soundboardSounds;
            if(!(mike == zulu)) { _fun00002_ip = 128; continue _fun00001 }
 124:
            zulu = new Array(0);
 128:
            mike = 'soundboardSounds';
            entity[mike] = zulu;
            return entity;
        }
    };
    var _closure1_slot7 = report;
    tango = function(argFoo) { // Original name: getInitialParserState
        entity = argFoo;
        tango = entity.channelId;
        zulu = entity.messageId;
        mike = entity.renderOptions;
        entity = {};
        entity['channelId'] = tango;
        entity['messageId'] = zulu;
        zulu = global;
        oscar = zulu.Boolean;
        report = mike.allowLinks;
        tango = undefined;
        report = oscar.bind(tango)(report);
        entity['allowLinks'] = report;
        oscar = zulu.Boolean;
        report = mike.allowDevLinks;
        report = oscar.bind(tango)(report);
        entity['allowDevLinks'] = report;
        oscar = zulu.Boolean;
        report = mike.formatInline;
        report = oscar.bind(tango)(report);
        entity['formatInline'] = report;
        oscar = zulu.Boolean;
        report = mike.noStyleAndInteraction;
        report = oscar.bind(tango)(report);
        entity['noStyleAndInteraction'] = report;
        oscar = zulu.Boolean;
        report = mike.allowHeading;
        report = oscar.bind(tango)(report);
        entity['allowHeading'] = report;
        oscar = zulu.Boolean;
        report = mike.allowList;
        report = oscar.bind(tango)(report);
        entity['allowList'] = report;
        oscar = zulu.Boolean;
        report = mike.previewLinkTarget;
        report = oscar.bind(tango)(report);
        entity['previewLinkTarget'] = report;
        oscar = zulu.Boolean;
        report = mike.disableAnimatedEmoji;
        report = oscar.bind(tango)(report);
        entity['disableAnimatedEmoji'] = report;
        oscar = zulu.Boolean;
        report = mike.isInteracting;
        report = oscar.bind(tango)(report);
        entity['isInteracting'] = report;
        oscar = false;
        entity['allowEmojiLinks'] = oscar;
        report = true;
        entity['disableAutoBlockNewlines'] = report;
        golf = new Array(0);
        entity['mentionChannels'] = golf;
        golf = new Array(0);
        entity['soundboardSounds'] = golf;
        entity['muted'] = oscar;
        entity['unknownUserMentionPlaceholder'] = report;
        report = mike.viewingChannelId;
        entity['viewingChannelId'] = report;
        zulu = zulu.Boolean;
        mike = mike.forceWhite;
        mike = zulu.bind(tango)(mike);
        entity['forceWhite'] = mike;
        return entity;
    };
    var _closure1_slot8 = tango;
    entity = function(argFoo, argBar, argBaz) { // Original name: render
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tango = argBar;
            mike = argBaz;
            var _closure2_slot0 = tango;
            report = mike.toAST;
            golf = undefined;
            entity = golf !== report;
            if(!entity) { _fun00004_ip = 32; continue _fun00003 }
 29:
            entity = report;
 32:
            var _closure2_slot1 = entity;
            report = mike.hideSimpleEmbedContent;
            entity = golf === report;
            if(entity) { _fun00004_ip = 52; continue _fun00003 }
 49:
            entity = report;
 52:
            var _closure2_slot2 = entity;
            report = mike.formatInline;
            entity = golf !== report;
            if(!entity) { _fun00004_ip = 72; continue _fun00003 }
 69:
            entity = report;
 72:
            var _closure2_slot3 = entity;
            entity = mike.postProcessor;
            var _closure2_slot4 = entity;
            entity = mike.shouldFilterKeywords;
            oscar = mike.contentMessage;
            var _closure2_slot5 = oscar;
            report = false;
            var _closure2_slot6 = report;
            offset = null;
            report = tango;
            if(!(offset != oscar)) { _fun00004_ip = 120; continue _fun00003 }
 117:
            report = oscar;
 120:
            verify = report.content;
            oscar = verify;
            if(!entity) { _fun00004_ip = 218; continue _fun00003 }
 131:
            report = _closure1_slot0;
            options = _closure1_slot2;
            entity = 2;
            entity = options[entity];
            options = report.bind(golf)(entity);
            report = options.getKeywordSubstitutedContent;
            entity = {};
            yankee = true;
            entity['escapeReplacement'] = yankee;
            yankee = tango.id;
            entity['messageId'] = yankee;
            yankee = tango.channel_id;
            entity['channelId'] = yankee;
            yankee = tango.author;
            romeo = offset == yankee;
            offset = undefined;
            if(romeo) { _fun00004_ip = 207; continue _fun00003 }
 202:
            offset = yankee.id;
 207:
            entity['authorId'] = offset;
            oscar = report.bind(options)(verify, entity);
 218:
            entity = _closure1_slot7;
            backup = entity.bind(golf)(tango, mike);
            tango = argFoo;
            kilo = true;
            foxtrot = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zulu = argFoo;
                    report = argBar;
                    golf = global;
                    tango = golf.Array;
                    mike = tango.isArray;
                    mike = mike.bind(tango)(zulu);
                    oscar = zulu;
                    if(mike) { _fun00006_ip = 43; continue _fun00005 }
 32:
                    mike = new Array(1);
                    mike[0] = zulu;
                    oscar = mike;
 43:
                    zulu = _closure2_slot2;
                    options = oscar;
                    if(!zulu) { _fun00006_ip = 228; continue _fun00005 }
 59:
                    tango = _closure2_slot5;
                    zulu = null;
                    if(!(zulu == tango)) { _fun00006_ip = 75; continue _fun00005 }
 69:
                    zulu = _closure2_slot0;
                    _fun00006_ip = 79; continue _fun00005;
 75:
                    zulu = _closure2_slot5;
 79:
                    offset = zulu.embeds;
                    tango = oscar.length;
                    verify = 1;
                    zulu = oscar;
                    if(!(verify === tango)) { _fun00006_ip = 225; continue _fun00005 }
 103:
                    tango = offset.length;
                    zulu = oscar;
                    if(!(verify === tango)) { _fun00006_ip = 225; continue _fun00005 }
 115:
                    verify = 0;
                    tango = oscar[verify];
                    offset = offset[verify];
                    yankee = tango.type;
                    verify = 'link';
                    if(!(verify !== yankee)) { _fun00006_ip = 154; continue _fun00005 }
 138:
                    verify = tango.type;
                    tango = 'attachmentLink';
                    zulu = oscar;
                    if(!(tango === verify)) { _fun00006_ip = 225; continue _fun00005 }
 154:
                    romeo = _closure1_slot5;
                    yankee = romeo.has;
                    verify = offset.type;
                    verify = yankee.bind(romeo)(verify);
                    zulu = oscar;
                    if(!verify) { _fun00006_ip = 225; continue _fun00005 }
 182:
                    yankee = _closure1_slot0;
                    verify = _closure1_slot2;
                    tango = 6;
                    verify = verify[tango];
                    tango = undefined;
                    verify = yankee.bind(tango)(verify);
                    tango = verify.isEmbedInline;
                    tango = tango.bind(verify)(offset);
                    zulu = oscar;
                    if(!tango) { _fun00006_ip = 225; continue _fun00005 }
 221:
                    zulu = new Array(0);
 225:
                    options = zulu;
 228:
                    zulu = _closure2_slot3;
                    if(zulu) { _fun00006_ip = 331; continue _fun00005 }
 235:
                    if(report) { _fun00006_ip = 317; continue _fun00005 }
 238:
                    zulu = 0;
                    tango = options[zulu];
                    oscar = tango.type;
                    tango = 'paragraph';
                    tango = tango === oscar;
                    if(!tango) { _fun00006_ip = 279; continue _fun00005 }
 260:
                    oscar = options[zulu];
                    verify = oscar.content;
                    oscar = golf.Array;
                    tango = verify instanceof oscar;
 279:
                    if(!tango) { _fun00006_ip = 331; continue _fun00005 }
 282:
                    tango = options[zulu];
                    verify = _closure1_slot11;
                    zulu = options[zulu];
                    zulu = zulu.content;
                    oscar = undefined;
                    oscar = verify.bind(oscar)(zulu);
                    tango['content'] = zulu;
                    _fun00006_ip = 331; continue _fun00005;
 317:
                    tango = _closure1_slot11;
                    zulu = undefined;
                    zulu = tango.bind(zulu)(options);
 331:
                    tango = _closure2_slot1;
                    zulu = options;
                    if(!tango) { _fun00006_ip = 355; continue _fun00005 }
 341:
                    oscar = function(argFoo) { // Original name: removeBuildOverrideLinks
                        zulu = argFoo;
                        mike = zulu.filter;
                        entity = function(argFoo) {
                            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                mike = argFoo;
                                zulu = mike.type;
                                entity = 'link';
                                entity = entity !== zulu;
                                if(entity) { _fun00008_ip = 64; continue _fun00007 }
 19:
                                report = _closure1_slot0;
                                tango = _closure1_slot2;
                                zulu = 7;
                                tango = tango[zulu];
                                zulu = undefined;
                                tango = report.bind(zulu)(tango);
                                zulu = tango.isBuildOverrideLink;
                                mike = mike.target;
                                mike = zulu.bind(tango)(mike);
                                entity = !mike;
 64:
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = undefined;
                    zulu = oscar.bind(tango)(options);
 355:
                    entity = function(argFoo) { // Original name: removeQuestsEmbedLinks
                        zulu = argFoo;
                        tango = zulu.some;
                        mike = function(argFoo) {
                            entity = argFoo;
                            mike = entity.type;
                            entity = 'link';
                            entity = entity !== mike;
                            return entity;
                        };
                        mike = tango.bind(zulu)(mike);
                        var _closure4_slot0 = mike;
                        mike = zulu.filter;
                        entity = function(argFoo) {
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                tango = argFoo;
                                mike = tango.type;
                                entity = 'link';
                                entity = entity === mike;
                                mike = tango.target;
                                zulu = null;
                                report = zulu != mike;
                                mike = null;
                                if(!report) { _fun00010_ip = 75; continue _fun00009 }
 33:
                                golf = _closure1_slot0;
                                oscar = _closure1_slot2;
                                report = 3;
                                oscar = oscar[report];
                                report = undefined;
                                oscar = golf.bind(report)(oscar);
                                report = oscar.parseQuestsEmbedCode;
                                tango = tango.target;
                                mike = report.bind(oscar)(tango);
 75:
                                if(!entity) { _fun00010_ip = 82; continue _fun00009 }
 78:
                                entity = zulu != mike;
 82:
                                if(!entity) { _fun00010_ip = 95; continue _fun00009 }
 85:
                                mike = _closure4_slot0;
                                entity = !mike;
 95:
                                if(!entity) { _fun00010_ip = 150; continue _fun00009 }
 98:
                                tango = _closure1_slot0;
                                zulu = _closure1_slot2;
                                mike = 4;
                                zulu = zulu[mike];
                                mike = undefined;
                                tango = tango.bind(mike)(zulu);
                                zulu = tango.shouldCalculateMobileMessageVisibilityPercentages;
                                mike = {};
                                report = _closure1_slot3;
                                report = report.EMBED_MOBILE;
                                mike['location'] = report;
                                entity = zulu.bind(tango)(mike);
 150:
                                entity = !entity;
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = undefined;
                    zulu = entity.bind(tango)(zulu);
                    entity = _closure2_slot0;
                    entity = entity.embeds;
                    entity = entity.length;
                    oscar = 0;
                    if(!(entity > oscar)) { _fun00006_ip = 475; continue _fun00005 }
 390:
                    if(report) { _fun00006_ip = 459; continue _fun00005 }
 393:
                    entity = zulu[oscar];
                    offset = entity.type;
                    verify = 'paragraph';
                    entity = false;
                    if(!(verify === offset)) { _fun00006_ip = 471; continue _fun00005 }
 412:
                    verify = zulu[oscar];
                    verify = verify.content;
                    golf = golf.Array;
                    golf = verify instanceof golf;
                    entity = false;
                    if(!golf) { _fun00006_ip = 471; continue _fun00005 }
 436:
                    golf = _closure1_slot13;
                    oscar = zulu[oscar];
                    oscar = oscar.content;
                    entity = golf.bind(tango)(oscar);
                    _fun00006_ip = 471; continue _fun00005;
 459:
                    oscar = _closure1_slot13;
                    entity = oscar.bind(tango)(zulu);
 471:
                    _closure2_slot6 = entity;
 475:
                    entity = _closure2_slot3;
                    if(!entity) { _fun00006_ip = 494; continue _fun00005 }
 482:
                    entity = _closure1_slot14;
                    entity = entity.bind(tango)(zulu);
 494:
                    golf = _closure2_slot4;
                    oscar = null;
                    entity = zulu;
                    if(!(oscar != golf)) { _fun00006_ip = 517; continue _fun00005 }
 507:
                    mike = _closure2_slot4;
                    entity = mike.bind(tango)(zulu, report);
 517:
                    return entity;
                }
            };
            output = undefined;
            sizing = oscar;
            mike = output[tango](sizing, kilo, backup, foxtrot, romeo);
            entity = {};
            zulu = _closure2_slot6;
            entity['hasSpoilerEmbeds'] = zulu;
            entity['content'] = mike;
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: renderAutomodMessageMarkupWithParser
        oscar = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': false, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'disableAutoBlockNewlines': true, 'highlightWord': null, 'disableAnimatedEmoji': false};
        entity = false;
        mike = new Array(0);
        oscar['mentionChannels'] = mike;
        mike = new Array(0);
        oscar['soundboardSounds'] = mike;
        verify = true;
        mike = argBaz;
        oscar['highlightWord'] = mike;
        mike = argCorge;
        oscar['channelId'] = mike;
        oscar['muted'] = entity;
        tango = argFoo;
        yankee = undefined;
        offset = argBar;
        golf = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = argFoo;
                entity = global;
                mike = entity.Array;
                entity = mike.isArray;
                mike = entity.bind(mike)(zulu);
                entity = zulu;
                if(mike) { _fun00012_ip = 38; continue _fun00011 }
 27:
                mike = new Array(1);
                mike[0] = zulu;
                entity = mike;
 38:
                return entity;
            }
        };
        options = oscar;
        entity = yankee[tango](offset, verify, options, golf, oscar);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: checkForJumboEmoji
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            tango = entity.some;
            zulu = function(argFoo) {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.type;
                    entity = 'emoji';
                    entity = entity !== mike;
                    if(!entity) { _fun00016_ip = 32; continue _fun00015 }
 19:
                    tango = zulu.type;
                    mike = 'customEmoji';
                    entity = mike !== tango;
 32:
                    if(!entity) { _fun00016_ip = 80; continue _fun00015 }
 35:
                    mike = zulu.content;
                    tango = 'string';
                    mike = typeof mike;
                    mike = tango !== mike;
                    if(mike) { _fun00016_ip = 77; continue _fun00015 }
 54:
                    tango = zulu.content;
                    zulu = tango.trim;
                    tango = zulu.bind(tango)();
                    zulu = '';
                    mike = zulu !== tango;
 77:
                    entity = mike;
 80:
                    return entity;
                }
            };
            zulu = tango.bind(entity)(zulu);
            if(zulu) { _fun00014_ip = 83; continue _fun00013 }
 26:
            zulu = 0;
            var _closure2_slot0 = zulu;
            tango = entity.forEach;
            zulu = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    mike = argFoo;
                    zulu = mike.type;
                    entity = 'emoji';
                    entity = entity !== zulu;
                    if(!entity) { _fun00018_ip = 32; continue _fun00017 }
 19:
                    zulu = mike.type;
                    mike = 'customEmoji';
                    entity = mike !== zulu;
 32:
                    if(entity) { _fun00018_ip = 53; continue _fun00017 }
 35:
                    zulu = _closure2_slot0;
                    entity = 1;
                    entity = zulu + entity;
                    _closure2_slot0 = entity;
 53:
                    mike = _closure2_slot0;
                    entity = _closure1_slot4;
                    if(!(!(mike > entity))) { _fun00018_ip = 75; continue _fun00017 }
 71:
                    entity = undefined;
                    return entity;
 75:
                    entity = false;
                    return entity;
                }
            };
            zulu = tango.bind(entity)(zulu);
            tango = _closure2_slot0;
            zulu = _closure1_slot4;
            if(!(!(tango > zulu))) { _fun00014_ip = 81; continue _fun00013 }
 64:
            zulu = entity.forEach;
            mike = function(argFoo) {
                mike = true;
                entity = argFoo;
                entity['jumboable'] = mike;
                entity = undefined;
                return entity;
            };
            mike = zulu.bind(entity)(mike);
 81:
            return entity;
 83:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: containsMatchingNode
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zulu = argFoo;
            options = argBar;
            var _closure2_slot0 = options;
            tango = global;
            mike = tango.Array;
            mike = zulu instanceof mike;
            if(mike) { _fun00020_ip = 126; continue _fun00019 }
 27:
            golf = undefined;
            mike = options.bind(golf)(zulu);
            report = null;
            if(!(report == mike)) { _fun00020_ip = 124; continue _fun00019 }
 40:
            oscar = zulu.content;
            report = tango.Array;
            report = oscar instanceof report;
            if(report) { _fun00020_ip = 103; continue _fun00019 }
 58:
            report = zulu.items;
            tango = tango.Array;
            tango = report instanceof tango;
            if(!tango) { _fun00020_ip = 101; continue _fun00019 }
 77:
            verify = zulu.items;
            oscar = verify.some;
            report = function(argFoo) {
                tango = _closure1_slot12;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            tango = oscar.bind(verify)(report);
 101:
            _fun00020_ip = 121; continue _fun00019;
 103:
            oscar = _closure1_slot12;
            report = zulu.content;
            tango = oscar.bind(golf)(report, options);
 121:
            mike = tango;
 124:
            return mike;
 126:
            mike = zulu.some;
            entity = function(argFoo) {
                tango = _closure1_slot12;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo) { // Original name: hasAnySpoilerEmbeds
        tango = _closure1_slot12;
        zulu = undefined;
        mike = argFoo;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                report = argFoo;
                zulu = report.type;
                mike = 'spoiler';
                entity = null;
                if(!(mike === zulu)) { _fun00022_ip = 42; continue _fun00021 }
 18:
                tango = _closure1_slot12;
                zulu = undefined;
                mike = function(argFoo) {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        mike = argFoo;
                        zulu = mike.type;
                        entity = 'link';
                        entity = entity === zulu;
                        if(entity) { _fun00024_ip = 32; continue _fun00023 }
 19:
                        zulu = mike.type;
                        mike = 'attachmentLink';
                        entity = mike === zulu;
 32:
                        if(entity) { _fun00024_ip = 37; continue _fun00023 }
 35:
                        entity = null;
 37:
                        return entity;
                    }
                };
                entity = tango.bind(zulu)(report, mike);
 42:
                return entity;
            }
        };
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo) { // Original name: convertNewlinesInContent
        entity = argFoo;
        zulu = entity.forEach;
        mike = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                entity = argFoo;
                report = _closure1_slot6;
                tango = report.has;
                zulu = entity.type;
                zulu = tango.bind(report)(zulu);
                if(!zulu) { _fun00026_ip = 39; continue _fun00025 }
 28:
                report = entity.content;
                tango = null;
                zulu = tango != report;
 39:
                if(!zulu) { _fun00026_ip = 126; continue _fun00025 }
 42:
                zulu = global;
                report = zulu.Array;
                tango = report.isArray;
                zulu = entity.content;
                zulu = tango.bind(report)(zulu);
                if(zulu) { _fun00026_ip = 110; continue _fun00025 }
 68:
                oscar = entity.content;
                report = oscar.replace;
                tango = /\n/g;
                zulu = ' ';
                zulu = report.bind(oscar)(tango, zulu);
                entity['content'] = zulu;
                _fun00026_ip = 126; continue _fun00025;
 110:
                zulu = _closure1_slot14;
                mike = entity.content;
                entity = undefined;
                entity = zulu.bind(entity)(mike);
 126:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    oscar = global;
    yankee = oscar.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, verify);
    entity = 0;
    verify = options[entity];
    entity = undefined;
    verify = golf.bind(entity)(verify);
    offset = verify.MessageEmbedTypes;
    verify = 1;
    verify = options[verify];
    verify = golf.bind(entity)(verify);
    verify = verify.QuestsExperimentLocations;
    var _closure1_slot3 = verify;
    verify = 30;
    var _closure1_slot4 = verify;
    yankee = oscar.Set;
    romeo = offset.IMAGE;
    verify = new Array(2);
    verify[0] = romeo;
    offset = offset.GIFV;
    verify[1] = offset;
    offset = yankee.prototype;
    offset = Object.create(offset, {constructor: {value: yankee}});
    sizing = offset;
    kilo = verify;
    verify = new sizing[yankee](kilo, backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot5 = verify;
    offset = oscar.Set;
    oscar = offset.prototype;
    verify = Object.create(oscar, {constructor: {value: offset}});
    kilo = ['strong', 'em', 'u', 'text', 'inlineCode', 's', 'spoiler'];
    sizing = verify;
    oscar = new sizing[offset](kilo, backup);
    oscar = oscar instanceof Object ? oscar : verify;
    var _closure1_slot6 = oscar;
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/messages/renderMessageMarkup.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: renderMessageMarkup
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            report = arguments[1];
            tango = undefined;
            if(!(report === tango)) { _fun00028_ip = 11; continue _fun00027 }
 9:
            report = {};
 11:
            zulu = _closure1_slot9;
            mike = report.formatInline;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 5;
            entity = golf[entity];
            entity = oscar.bind(tango)(entity);
            if(mike) { _fun00028_ip = 55; continue _fun00027 }
 47:
            mike = entity.parse;
            _fun00028_ip = 61; continue _fun00027;
 55:
            mike = entity.parseInlineReply;
 61:
            entity = argFoo;
            entity = zulu.bind(tango)(mike, entity, report);
            return entity;
        }
    };
    zulu['default'] = oscar;
    zulu['getInitialParserStateFromMessage'] = report;
    zulu['getInitialParserState'] = tango;
    tango = function(argFoo, argBar) { // Original name: renderMessageMarkupWithParser
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            report = arguments[2];
            tango = undefined;
            if(!(report === tango)) { _fun00030_ip = 11; continue _fun00029 }
 9:
            report = {};
 11:
            zulu = _closure1_slot9;
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity, report);
            return entity;
        }
    };
    zulu['renderMessageMarkupWithParser'] = tango;
    tango = function(argFoo) { // Original name: renderMessageMarkupToAST
        _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
            entity = arguments[1];
            report = undefined;
            if(!(entity === report)) { _fun00032_ip = 11; continue _fun00031 }
 9:
            entity = {};
 11:
            tango = _closure1_slot9;
            zulu = entity.formatInline;
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 5;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            if(zulu) { _fun00032_ip = 55; continue _fun00031 }
 47:
            zulu = mike.parseToAST;
            _fun00032_ip = 61; continue _fun00031;
 55:
            zulu = mike.parseInlineReplyToAST;
 61:
            mike = {};
            offset = mike;
            verify = entity;
            entity = copyDataProperties(offset, verify);
            oscar = true;
            entity = 'toAST';
            mike[entity] = oscar;
            entity = argFoo;
            entity = tango.bind(report)(zulu, entity, mike);
            return entity;
        }
    };
    zulu['renderMessageMarkupToAST'] = tango;
    tango = function(argFoo, argBar) { // Original name: renderMessageContentMarkup
        _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
            report = arguments[2];
            tango = undefined;
            if(!(report === tango)) { _fun00034_ip = 11; continue _fun00033 }
 9:
            report = {};
 11:
            zulu = function(argFoo, argBar) { // Original name: renderMessageContentMarkupWithParser
                _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                    zulu = argBar;
                    entity = arguments[2];
                    oscar = undefined;
                    if(!(entity === oscar)) { _fun00036_ip = 14; continue _fun00035 }
 12:
                    entity = {};
 14:
                    options = zulu.content;
                    golf = zulu.guildId;
                    mike = zulu.channelId;
                    verify = zulu.messageId;
                    zulu = null;
                    report = options;
                    if(!(zulu != entity)) { _fun00036_ip = 107; continue _fun00035 }
 43:
                    entity = entity.shouldFilterKeywords;
                    report = options;
                    if(!entity) { _fun00036_ip = 107; continue _fun00035 }
 55:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 2;
                    entity = tango[entity];
                    tango = zulu.bind(oscar)(entity);
                    zulu = tango.getKeywordSubstitutedContent;
                    entity = {};
                    offset = true;
                    entity['escapeReplacement'] = offset;
                    entity['channelId'] = mike;
                    entity['messageId'] = verify;
                    report = zulu.bind(tango)(options, entity);
 107:
                    tango = {'allowLinks': false, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': true, 'noStyleAndInteraction': false, 'allowHeading': false, 'allowList': false, 'disableAutoBlockNewlines': true, 'previewLinkTarget': false, 'disableAnimatedEmoji': true};
                    entity = false;
                    zulu = new Array(0);
                    tango['mentionChannels'] = zulu;
                    zulu = new Array(0);
                    tango['soundboardSounds'] = zulu;
                    zulu = true;
                    tango['guildId'] = golf;
                    tango['channelId'] = mike;
                    tango['muted'] = entity;
                    tango['disablePressableChannelMention'] = zulu;
                    mike = argFoo;
                    yankee = function(argFoo) {
                        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                            zulu = argFoo;
                            entity = global;
                            mike = entity.Array;
                            entity = mike.isArray;
                            mike = entity.bind(mike)(zulu);
                            entity = zulu;
                            if(mike) { _fun00038_ip = 38; continue _fun00037 }
 27:
                            mike = new Array(1);
                            mike[0] = zulu;
                            entity = mike;
 38:
                            return entity;
                        }
                    };
                    kilo = undefined;
                    backup = report;
                    foxtrot = true;
                    romeo = tango;
                    entity = kilo[mike](backup, foxtrot, romeo, yankee, offset);
                    return entity;
                }
            };
            mike = argFoo;
            entity = argBar;
            entity = zulu.bind(tango)(mike, entity, report);
            return entity;
        }
    };
    zulu['renderMessageContentMarkup'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: renderAutomodMessageMarkup
        oscar = _closure1_slot10;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        report = undefined;
        entity = mike.bind(report)(entity);
        offset = entity.parseAutoModerationSystemMessage;
        verify = argFoo;
        options = argBar;
        golf = argBaz;
        yankee = undefined;
        entity = yankee[oscar](offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['renderAutomodMessageMarkup'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: renderAutomodMessageMarkupToAST
        oscar = _closure1_slot10;
        mike = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 5;
        entity = zulu[entity];
        report = undefined;
        entity = mike.bind(report)(entity);
        offset = entity.parseAutoModerationSystemMessageToAST;
        verify = argFoo;
        options = argBar;
        golf = argBaz;
        yankee = undefined;
        entity = yankee[oscar](offset, verify, options, golf, oscar);
        return entity;
    };
    zulu['renderAutomodMessageMarkupToAST'] = mike;
    return entity;
})();
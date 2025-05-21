// app/modules/message_previews/native/MessagePreviewMarkup.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    option = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    var _closure1_slot2 = offset;
    entity = function(argFoo) { // Original name: getRules
        entity = argFoo;
        option = entity.layout;
        foxtra = entity.color;
        romeon = entity.fontScale;
        yankee = entity.maxFontSizeMultiplier;
        verify = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 0;
        entity = offset[entity];
        zuuluu = undefined;
        michal = verify.bind(zuuluu)(entity);
        entity = 1;
        entity = offset[entity];
        entity = verify.bind(zuuluu)(entity);
        tangon = entity.RULES;
        entity = new Array(2);
        entity[0] = tangon;
        tangon = 2;
        tangon = offset[tangon];
        tangon = verify.bind(zuuluu)(tangon);
        kiloes = undefined;
        backup = option;
        tangon = kiloes[tangon](backup, foxtra, romeon, yankee, offset);
        entity[1] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    golfie = function(argFoo) { // Original name: renderASTToReact
        entity = argFoo;
        tangon = entity.tree;
        zuuluu = entity.initialParserState;
        verify = entity.layout;
        option = entity.color;
        golfie = entity.fontScale;
        michal = entity.maxFontSizeMultiplier;
        oscard = _closure1_slot4;
        report = {};
        report['layout'] = verify;
        report['color'] = option;
        report['fontScale'] = golfie;
        report['maxFontSizeMultiplier'] = michal;
        michal = undefined;
        verify = oscard.bind(michal)(report);
        golfie = _closure1_slot1;
        option = _closure1_slot2;
        entity = 3;
        report = option[entity];
        oscard = golfie.bind(michal)(report);
        report = oscard.reactFor;
        entity = option[entity];
        option = golfie.bind(michal)(entity);
        golfie = option.ruleOutput;
        entity = 'react';
        entity = golfie.bind(option)(verify, entity);
        entity = report.bind(oscard)(entity);
        entity = entity.bind(michal)(tangon, zuuluu);
        return entity;
    };
    var _closure1_slot5 = golfie;
    oscard = function(argFoo) { // Original name: getMessagePreviewASTParser
        entity = argFoo;
        golfie = entity.layout;
        oscard = entity.color;
        report = entity.fontScale;
        tangon = entity.maxFontSizeMultiplier;
        zuuluu = _closure1_slot4;
        michal = {};
        michal['layout'] = golfie;
        michal['color'] = oscard;
        michal['fontScale'] = report;
        michal['maxFontSizeMultiplier'] = tangon;
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot1;
        report = _closure1_slot2;
        entity = 4;
        entity = report[entity];
        michal = michal.bind(tangon)(entity);
        entity = michal.astParserFor;
        entity = entity.bind(michal)(zuuluu);
        return entity;
    };
    var _closure1_slot6 = oscard;
    michal = function(argFoo) { // Original name: getOrParseMessagePreviewMarkupAST
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            report = entity.content;
            yankee = entity.layout;
            offset = entity.color;
            verify = entity.initialParserState;
            option = entity.postProcessor;
            golfie = entity.fontScale;
            oscard = entity.maxFontSizeMultiplier;
            michal = _closure1_slot3;
            entity = michal.get;
            entity = entity.bind(michal)(report);
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 202; continue _fun00001 }
 69:
            tangon = _closure1_slot6;
            michal = {};
            michal['layout'] = yankee;
            michal['color'] = offset;
            michal['fontScale'] = golfie;
            michal['maxFontSizeMultiplier'] = oscard;
            golfie = undefined;
            oscard = tangon.bind(golfie)(michal);
            tangon = report.startsWith;
            michal = '```';
            michal = tangon.bind(report)(michal);
            tangon = undefined;
            if(michal) { _fun00002_ip = 162; continue _fun00001 }
 123:
            yankee = report.split;
            offset = '\n';
            yankee = yankee.bind(report)(offset);
            offset = 0;
            offset = yankee[offset];
            romeon = offset.includes;
            yankee = '||';
            michal = romeon.bind(offset)(yankee);
            tangon = offset;
 162:
            if(!michal) { _fun00002_ip = 168; continue _fun00001 }
 165:
            tangon = report;
 168:
            kiloes = true;
            output = undefined;
            sizing = tangon;
            backup = verify;
            foxtra = option;
            michal = output[oscard](sizing, kiloes, backup, foxtra, romeon);
            tangon = _closure1_slot3;
            zuuluu = tangon.set;
            zuuluu = zuuluu.bind(tangon)(report, michal);
            return michal;
 202:
            return entity;
        }
    };
    var _closure1_slot7 = michal;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, tangon);
    entity = 6;
    tangon = offset[entity];
    entity = undefined;
    yankee = option.bind(entity)(tangon);
    tangon = {};
    option = 2000;
    tangon['max'] = option;
    option = yankee.prototype;
    option = Object.create(option, {constructor: {value: yankee}});
    sizing = option;
    kiloes = tangon;
    tangon = new sizing[yankee](kiloes, backup);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot3 = tangon;
    option = 7;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/message_previews/native/MessagePreviewMarkup.tsx';
    option = verify.bind(offset)(option);
    zuuluu['renderASTToReact'] = golfie;
    zuuluu['getMessagePreviewASTParser'] = oscard;
    report = function(argFoo) { // Original name: renderMessagePreviewMarkup
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            romeon = tangon.content;
            michal = tangon.muted;
            verify = tangon.guildId;
            entity = tangon.channelId;
            golfie = tangon.layout;
            zuuluu = undefined;
            if(!(golfie === zuuluu)) { _fun00004_ip = 71; continue _fun00003 }
 36:
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            report = 5;
            report = option[report];
            report = oscard.bind(zuuluu)(report);
            report = report.ChannelListLayoutTypes;
            golfie = report.COMPACT;
 71:
            oscard = tangon.color;
            yankee = tangon.postProcessor;
            offset = tangon.disableAnimatedEmoji;
            if(!(offset === zuuluu)) { _fun00004_ip = 94; continue _fun00003 }
 92:
            offset = true;
 94:
            report = tangon.fontScale;
            if(!(report === zuuluu)) { _fun00004_ip = 107; continue _fun00003 }
 104:
            report = 1;
 107:
            tangon = tangon.maxFontSizeMultiplier;
            option = '';
            if(!(option !== romeon)) { _fun00004_ip = 278; continue _fun00003 }
 124:
            option = {'allowLinks': true, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': true, 'noStyleAndInteraction': true, 'allowHeading': true, 'allowList': true, 'disableAutoBlockNewlines': true, 'previewLinkTarget': false, 'disableAnimatedEmoji': null, 'unknownUserMentionPlaceholder': true};
            foxtra = new Array(0);
            option['mentionChannels'] = foxtra;
            foxtra = new Array(0);
            option['soundboardSounds'] = foxtra;
            option['disableAnimatedEmoji'] = offset;
            option['guildId'] = verify;
            option['channelId'] = entity;
            entity = null;
            entity = entity != michal;
            if(!entity) { _fun00004_ip = 184; continue _fun00003 }
 181:
            entity = michal;
 184:
            option['muted'] = entity;
            michal = _closure1_slot5;
            entity = {};
            offset = _closure1_slot7;
            verify = {};
            verify['content'] = romeon;
            verify['layout'] = golfie;
            verify['color'] = oscard;
            verify['initialParserState'] = option;
            verify['fontScale'] = report;
            verify['maxFontSizeMultiplier'] = tangon;
            verify['postProcessor'] = yankee;
            verify = offset.bind(zuuluu)(verify);
            entity['tree'] = verify;
            entity['initialParserState'] = option;
            entity['layout'] = golfie;
            entity['color'] = oscard;
            entity['fontScale'] = report;
            entity['maxFontSizeMultiplier'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
 278:
            entity = null;
            return entity;
        }
    };
    zuuluu['renderMessagePreviewMarkup'] = report;
    zuuluu['messagePreviewASTCache'] = tangon;
    zuuluu['getOrParseMessagePreviewMarkupAST'] = michal;
    return entity;
})();
// app/modules/message_previews/native/MessagePreviewMarkup.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    options = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    var _closure1_slot2 = offset;
    entity = function(argFoo) { // Original name: getRules
        entity = argFoo;
        options = entity.layout;
        foxtrot = entity.color;
        romeo = entity.fontScale;
        yankee = entity.maxFontSizeMultiplier;
        verify = _closure1_slot1;
        offset = _closure1_slot2;
        entity = 0;
        entity = offset[entity];
        zulu = undefined;
        mike = verify.bind(zulu)(entity);
        entity = 1;
        entity = offset[entity];
        entity = verify.bind(zulu)(entity);
        tango = entity.RULES;
        entity = new Array(2);
        entity[0] = tango;
        tango = 2;
        tango = offset[tango];
        tango = verify.bind(zulu)(tango);
        kilo = undefined;
        backup = options;
        tango = kilo[tango](backup, foxtrot, romeo, yankee, offset);
        entity[1] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    golf = function(argFoo) { // Original name: renderASTToReact
        entity = argFoo;
        tango = entity.tree;
        zulu = entity.initialParserState;
        verify = entity.layout;
        options = entity.color;
        golf = entity.fontScale;
        mike = entity.maxFontSizeMultiplier;
        oscar = _closure1_slot4;
        report = {};
        report['layout'] = verify;
        report['color'] = options;
        report['fontScale'] = golf;
        report['maxFontSizeMultiplier'] = mike;
        mike = undefined;
        verify = oscar.bind(mike)(report);
        golf = _closure1_slot1;
        options = _closure1_slot2;
        entity = 3;
        report = options[entity];
        oscar = golf.bind(mike)(report);
        report = oscar.reactFor;
        entity = options[entity];
        options = golf.bind(mike)(entity);
        golf = options.ruleOutput;
        entity = 'react';
        entity = golf.bind(options)(verify, entity);
        entity = report.bind(oscar)(entity);
        entity = entity.bind(mike)(tango, zulu);
        return entity;
    };
    var _closure1_slot5 = golf;
    oscar = function(argFoo) { // Original name: getMessagePreviewASTParser
        entity = argFoo;
        golf = entity.layout;
        oscar = entity.color;
        report = entity.fontScale;
        tango = entity.maxFontSizeMultiplier;
        zulu = _closure1_slot4;
        mike = {};
        mike['layout'] = golf;
        mike['color'] = oscar;
        mike['fontScale'] = report;
        mike['maxFontSizeMultiplier'] = tango;
        tango = undefined;
        zulu = zulu.bind(tango)(mike);
        mike = _closure1_slot1;
        report = _closure1_slot2;
        entity = 4;
        entity = report[entity];
        mike = mike.bind(tango)(entity);
        entity = mike.astParserFor;
        entity = entity.bind(mike)(zulu);
        return entity;
    };
    var _closure1_slot6 = oscar;
    mike = function(argFoo) { // Original name: getOrParseMessagePreviewMarkupAST
        _fun86984: for(var _fun86984_ip = 0; ; ) switch(_fun86984_ip) {
 0:
            entity = argFoo;
            report = entity.content;
            yankee = entity.layout;
            offset = entity.color;
            verify = entity.initialParserState;
            options = entity.postProcessor;
            golf = entity.fontScale;
            oscar = entity.maxFontSizeMultiplier;
            mike = _closure1_slot3;
            entity = mike.get;
            entity = entity.bind(mike)(report);
            mike = null;
            if(!(mike == entity)) { _fun86984_ip = 202; continue _fun86984 }
 69:
            tango = _closure1_slot6;
            mike = {};
            mike['layout'] = yankee;
            mike['color'] = offset;
            mike['fontScale'] = golf;
            mike['maxFontSizeMultiplier'] = oscar;
            golf = undefined;
            oscar = tango.bind(golf)(mike);
            tango = report.startsWith;
            mike = '```';
            mike = tango.bind(report)(mike);
            tango = undefined;
            if(mike) { _fun86984_ip = 162; continue _fun86984 }
 123:
            yankee = report.split;
            offset = '\n';
            yankee = yankee.bind(report)(offset);
            offset = 0;
            offset = yankee[offset];
            romeo = offset.includes;
            yankee = '||';
            mike = romeo.bind(offset)(yankee);
            tango = offset;
 162:
            if(!mike) { _fun86984_ip = 168; continue _fun86984 }
 165:
            tango = report;
 168:
            kilo = true;
            output = undefined;
            sizing = tango;
            backup = verify;
            foxtrot = options;
            mike = output[oscar](sizing, kilo, backup, foxtrot, romeo);
            tango = _closure1_slot3;
            zulu = tango.set;
            zulu = zulu.bind(tango)(report, mike);
            return mike;
 202:
            return entity;
        }
    };
    var _closure1_slot7 = mike;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, tango);
    entity = 6;
    tango = offset[entity];
    entity = undefined;
    yankee = options.bind(entity)(tango);
    tango = {};
    options = 2000;
    tango['max'] = options;
    options = yankee.prototype;
    options = Object.create(options, {constructor: {value: yankee}});
    sizing = options;
    kilo = tango;
    tango = new sizing[yankee](kilo, backup);
    tango = tango instanceof Object ? tango : options;
    var _closure1_slot3 = tango;
    options = 7;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/message_previews/native/MessagePreviewMarkup.tsx';
    options = verify.bind(offset)(options);
    zulu['renderASTToReact'] = golf;
    zulu['getMessagePreviewASTParser'] = oscar;
    report = function(argFoo) { // Original name: renderMessagePreviewMarkup
        _fun86985: for(var _fun86985_ip = 0; ; ) switch(_fun86985_ip) {
 0:
            tango = argFoo;
            romeo = tango.content;
            mike = tango.muted;
            verify = tango.guildId;
            entity = tango.channelId;
            golf = tango.layout;
            zulu = undefined;
            if(!(golf === zulu)) { _fun86985_ip = 71; continue _fun86985 }
 36:
            oscar = _closure1_slot0;
            options = _closure1_slot2;
            report = 5;
            report = options[report];
            report = oscar.bind(zulu)(report);
            report = report.ChannelListLayoutTypes;
            golf = report.COMPACT;
 71:
            oscar = tango.color;
            yankee = tango.postProcessor;
            offset = tango.disableAnimatedEmoji;
            if(!(offset === zulu)) { _fun86985_ip = 94; continue _fun86985 }
 92:
            offset = true;
 94:
            report = tango.fontScale;
            if(!(report === zulu)) { _fun86985_ip = 107; continue _fun86985 }
 104:
            report = 1;
 107:
            tango = tango.maxFontSizeMultiplier;
            options = '';
            if(!(options !== romeo)) { _fun86985_ip = 274; continue _fun86985 }
 124:
            options = {'allowLinks': true, 'allowDevLinks': false, 'allowEmojiLinks': false, 'mentionChannels': null, 'soundboardSounds': null, 'isInteracting': false, 'formatInline': true, 'noStyleAndInteraction': true, 'allowHeading': true, 'allowList': true, 'disableAutoBlockNewlines': true, 'previewLinkTarget': false, 'disableAnimatedEmoji': null, 'unknownUserMentionPlaceholder': true};
            foxtrot = new Array(0);
            options['mentionChannels'] = foxtrot;
            foxtrot = new Array(0);
            options['soundboardSounds'] = foxtrot;
            options['disableAnimatedEmoji'] = offset;
            options['guildId'] = verify;
            options['channelId'] = entity;
            entity = null;
            entity = entity != mike;
            if(!entity) { _fun86985_ip = 180; continue _fun86985 }
 177:
            entity = mike;
 180:
            options['muted'] = entity;
            mike = _closure1_slot5;
            entity = {};
            offset = _closure1_slot7;
            verify = {};
            verify['content'] = romeo;
            verify['layout'] = golf;
            verify['color'] = oscar;
            verify['initialParserState'] = options;
            verify['fontScale'] = report;
            verify['maxFontSizeMultiplier'] = tango;
            verify['postProcessor'] = yankee;
            verify = offset.bind(zulu)(verify);
            entity['tree'] = verify;
            entity['initialParserState'] = options;
            entity['layout'] = golf;
            entity['color'] = oscar;
            entity['fontScale'] = report;
            entity['maxFontSizeMultiplier'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
 274:
            entity = null;
            return entity;
        }
    };
    zulu['renderMessagePreviewMarkup'] = report;
    zulu['messagePreviewASTCache'] = tango;
    zulu['getOrParseMessagePreviewMarkupAST'] = mike;
    return entity;
})();
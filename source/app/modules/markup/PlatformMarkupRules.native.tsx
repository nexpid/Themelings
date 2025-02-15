// app/modules/markup/PlatformMarkupRules.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: decorateWithIcon
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = null;
            entity = zulu;
            if(!(mike != zulu)) { _fun00002_ip = 72; continue _fun00001 }
 12:
            tango = 'string';
            mike = typeof zulu;
            entity = zulu;
            if(!(tango !== mike)) { _fun00002_ip = 72; continue _fun00001 }
 26:
            mike = global;
            mike = mike.Array;
            mike = zulu instanceof mike;
            tango = zulu;
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 44:
            mike = new Array(1);
            mike[0] = zulu;
            tango = mike;
 55:
            zulu = tango.map;
            mike = function(argFoo) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zulu = argFoo;
                    tango = zulu.type;
                    mike = 'channel';
                    entity = zulu;
                    if(!(mike === tango)) { _fun00004_ip = 115; continue _fun00003 }
 19:
                    mike = {};
                    offset = mike;
                    verify = zulu;
                    tango = copyDataProperties(offset, verify);
                    oscar = _closure1_slot3;
                    report = oscar.resolveAssetSource;
                    options = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 1;
                    golf = golf[tango];
                    tango = undefined;
                    options = options.bind(tango)(golf);
                    golf = options.getChannelMentionIcon;
                    zulu = zulu.iconType;
                    zulu = golf.bind(options)(zulu);
                    zulu = report.bind(oscar)(zulu);
                    report = null;
                    report = report == zulu;
                    if(report) { _fun00004_ip = 103; continue _fun00003 }
 97:
                    tango = zulu.uri;
 103:
                    zulu = 'icon';
                    mike[zulu] = tango;
                    entity = mike;
 115:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 72:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = global;
    options = entity.Object;
    tango = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = report.bind(entity)(mike);
    mike = mike.Image;
    var _closure1_slot3 = mike;
    mike = /^[\u200B-\u200D\uFEFF\u180E\u061C]/;
    var _closure1_slot4 = mike;
    mike = {};
    tango = {};
    options = ['\\'];
    tango['requiredFirstCharacters'] = options;
    options = function(argFoo, argBar) { // Original name: match
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argBar;
            mike = entity.allowEscape;
            entity = false;
            if(!(entity !== mike)) { _fun00006_ip = 148; continue _fun00005 }
 18:
            zulu = /^\\([^0-9A-Za-z\s])/;
            mike = zulu.exec;
            entity = argFoo;
            mike = mike.bind(zulu)(entity);
            tango = null;
            if(!(tango != mike)) { _fun00006_ip = 143; continue _fun00005 }
 52:
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 2;
            zulu = zulu[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.hasSurrogates;
            zulu = 0;
            entity = mike[zulu];
            report = report.bind(oscar)(entity);
            entity = null;
            if(report) { _fun00006_ip = 146; continue _fun00005 }
 99:
            report = global;
            oscar = report.JSON;
            report = oscar.stringify;
            zulu = mike[zulu];
            oscar = report.bind(oscar)(zulu);
            report = oscar.includes;
            zulu = '\\ud';
            zulu = report.bind(oscar)(zulu);
            entity = null;
            if(zulu) { _fun00006_ip = 146; continue _fun00005 }
 143:
            entity = mike;
 146:
            return entity;
 148:
            entity = null;
            return entity;
        }
    };
    tango['match'] = options;
    mike['escape'] = tango;
    tango = {};
    options = 3;
    options = oscar[options];
    options = verify.bind(entity)(options);
    options = options.defaultRules;
    romeo = options.escape;
    foxtrot = tango;
    options = copyDataProperties(foxtrot, romeo);
    options = 'requiredFirstCharacters';
    tango[options] = entity;
    offset = function(argFoo) { // Original name: match
        zulu = _closure1_slot4;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    options = 'match';
    tango[options] = offset;
    mike['invisibleUnicode'] = tango;
    tango = {};
    options = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            entity = argBaz;
            mike = entity.nested;
            if(mike) { _fun00008_ip = 112; continue _fun00007 }
 15:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            mike = 2;
            mike = report[mike];
            oscar = undefined;
            golf = tango.bind(oscar)(mike);
            report = golf.maybeTranslateSurrogatesToInlineEmoji;
            tango = 0;
            mike = zulu[tango];
            report = report.bind(golf)(mike);
            mike = null;
            if(!(mike != report)) { _fun00008_ip = 97; continue _fun00007 }
 63:
            mike = {};
            verify = mike;
            options = entity;
            entity = copyDataProperties(verify, options);
            golf = true;
            entity = 'nested';
            mike[entity] = golf;
            entity = argBar;
            entity = entity.bind(oscar)(report, mike);
            _fun00008_ip = 110; continue _fun00007;
 97:
            mike = {};
            tango = zulu[tango];
            mike['content'] = tango;
            entity = mike;
 110:
            return entity;
 112:
            entity = {};
            mike = 0;
            mike = zulu[mike];
            entity['content'] = mike;
            return entity;
        }
    };
    tango['parse'] = options;
    mike['text'] = tango;
    tango = {};
    options = function(argFoo) { // Original name: parse
        tango = argFoo;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        zulu = zulu.bind(entity)(mike);
        mike = zulu.convertNameToSurrogate;
        entity = 1;
        entity = tango[entity];
        mike = mike.bind(zulu)(entity);
        entity = {};
        zulu = 'emoji';
        entity['type'] = zulu;
        zulu = 0;
        zulu = tango[zulu];
        entity['content'] = zulu;
        entity['surrogate'] = mike;
        return entity;
    };
    tango['parse'] = options;
    mike['emoji'] = tango;
    tango = {};
    options = 4;
    offset = oscar[options];
    offset = verify.bind(entity)(offset);
    offset = offset.order;
    tango['order'] = offset;
    offset = ['<'];
    tango['requiredFirstCharacters'] = offset;
    offset = function(argFoo) { // Original name: match
        zulu = /^<(a)?:(\w+):(\d+)>/;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['match'] = offset;
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zulu = argFoo;
            entity = zulu[Symbol.iterator];
            zulu = entity().next;
            mike = zulu().value;
            mike = entity;
            golf = undefined;
            mike = mike === golf;
            romeo = undefined;
            if(mike) { _fun00010_ip = 49; continue _fun00009 }
 24:
            report = zulu().value;
            tango = entity;
            tango = tango === golf;
            romeo = undefined;
            mike = tango;
            if(tango) { _fun00010_ip = 49; continue _fun00009 }
 43:
            romeo = report;
            mike = tango;
 49:
            report = undefined;
            if(mike) { _fun00010_ip = 79; continue _fun00009 }
 54:
            oscar = zulu().value;
            tango = entity;
            tango = tango === golf;
            report = undefined;
            mike = tango;
            if(tango) { _fun00010_ip = 79; continue _fun00009 }
 73:
            report = oscar;
            mike = tango;
 79:
            oscar = undefined;
            if(mike) { _fun00010_ip = 109; continue _fun00009 }
 84:
            tango = zulu().value;
            zulu = entity;
            zulu = zulu === golf;
            oscar = undefined;
            mike = zulu;
            if(zulu) { _fun00010_ip = 109; continue _fun00009 }
 103:
            oscar = tango;
            mike = zulu;
 109:
            if(mike) { _fun00010_ip = 115; continue _fun00009 }
 112:
            entity.return();
 115:
            entity = argBaz;
            tango = entity.disableAnimatedEmoji;
            if(!(tango === golf)) { _fun00010_ip = 130; continue _fun00009 }
 128:
            tango = false;
 130:
            mike = _closure1_slot1;
            options = _closure1_slot2;
            entity = 5;
            zulu = options[entity];
            offset = mike.bind(golf)(zulu);
            verify = offset.getEmojiURL;
            zulu = {};
            zulu['id'] = oscar;
            yankee = 'a';
            yankee = yankee === romeo;
            zulu['animated'] = yankee;
            yankee = 48;
            zulu['size'] = yankee;
            zulu = verify.bind(offset)(zulu);
            entity = options[entity];
            golf = mike.bind(golf)(entity);
            mike = golf.getEmojiURL;
            entity = {'id': null, 'animated': false, 'size': 48};
            entity['id'] = oscar;
            mike = mike.bind(golf)(entity);
            entity = {};
            entity['id'] = oscar;
            entity['alt'] = report;
            if(!tango) { _fun00010_ip = 247; continue _fun00009 }
 244:
            zulu = mike;
 247:
            entity['src'] = zulu;
            entity['frozenSrc'] = mike;
            return entity;
        }
    };
    tango['parse'] = offset;
    mike['customEmoji'] = tango;
    tango = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        mike = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 6;
        entity = tango[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        golf = entity.channelMention;
        oscar = golf.parse;
        report = argFoo;
        mike = argBar;
        entity = argBaz;
        mike = oscar.bind(golf)(report, mike, entity);
        entity = {};
        offset = entity;
        verify = mike;
        report = copyDataProperties(offset, verify);
        zulu = _closure1_slot5;
        report = mike.content;
        oscar = zulu.bind(tango)(report);
        report = 'content';
        entity[report] = oscar;
        mike = mike.inContent;
        zulu = zulu.bind(tango)(mike);
        mike = 'inContent';
        entity[mike] = zulu;
        return entity;
    };
    tango['parse'] = offset;
    mike['channelMention'] = tango;
    tango = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        mike = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 6;
        entity = tango[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        golf = entity.channelOrMessageUrl;
        oscar = golf.parse;
        report = argFoo;
        mike = argBar;
        entity = argBaz;
        mike = oscar.bind(golf)(report, mike, entity);
        entity = {};
        offset = entity;
        verify = mike;
        report = copyDataProperties(offset, verify);
        zulu = _closure1_slot5;
        report = mike.content;
        oscar = zulu.bind(tango)(report);
        report = 'content';
        entity[report] = oscar;
        mike = mike.inContent;
        zulu = zulu.bind(tango)(mike);
        mike = 'inContent';
        entity[mike] = zulu;
        return entity;
    };
    tango['parse'] = offset;
    mike['channelOrMessageUrl'] = tango;
    tango = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        mike = _closure1_slot1;
        tango = _closure1_slot2;
        entity = 6;
        entity = tango[entity];
        tango = undefined;
        entity = mike.bind(tango)(entity);
        golf = entity.mediaPostLink;
        oscar = golf.parse;
        report = argFoo;
        mike = argBar;
        entity = argBaz;
        mike = oscar.bind(golf)(report, mike, entity);
        entity = {};
        offset = entity;
        verify = mike;
        report = copyDataProperties(offset, verify);
        zulu = _closure1_slot5;
        report = mike.content;
        oscar = zulu.bind(tango)(report);
        report = 'content';
        entity[report] = oscar;
        mike = mike.inContent;
        zulu = zulu.bind(tango)(mike);
        mike = 'inContent';
        entity[mike] = zulu;
        return entity;
    };
    tango['parse'] = offset;
    mike['mediaPostLink'] = tango;
    tango = {};
    offset = function(argFoo, argBar, argBaz) { // Original name: parse
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        report = entity.attachmentLink;
        tango = report.parse;
        zulu = argFoo;
        mike = argBar;
        entity = argBaz;
        entity = tango.bind(report)(zulu, mike, entity);
        return entity;
    };
    tango['parse'] = offset;
    mike['attachmentLink'] = tango;
    tango = {};
    options = oscar[options];
    options = verify.bind(entity)(options);
    options = options.order;
    tango['order'] = options;
    options = ['@'];
    tango['requiredFirstCharacters'] = options;
    options = function(argFoo) { // Original name: match
        zulu = /^(@silent(?![^\s]))/;
        mike = zulu.exec;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    tango['match'] = options;
    golf = function(argFoo) { // Original name: parse
        entity = {};
        mike = 'text';
        entity['type'] = mike;
        zulu = argFoo;
        mike = 0;
        mike = zulu[mike];
        entity['content'] = mike;
        return entity;
    };
    tango['parse'] = golf;
    mike['silentPrefix'] = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/PlatformMarkupRules.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
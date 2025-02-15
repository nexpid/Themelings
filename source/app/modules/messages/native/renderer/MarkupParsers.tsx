// app/modules/messages/native/renderer/MarkupParsers.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.MessageTypes;
    var _closure1_slot3 = tango;
    options = {'max': inf, 'maxAge': null, 'updateAgeOnGet': true};
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    verify = tango.MINUTE;
    tango = 15;
    tango = tango * verify;
    options['maxAge'] = tango;
    tango = 2;
    verify = oscar[tango];
    verify = golf.bind(entity)(verify);
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    sizing = offset;
    kilo = options;
    verify = new sizing[verify](kilo, backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot4 = verify;
    verify = oscar[tango];
    yankee = golf.bind(entity)(verify);
    verify = {};
    kilo = verify;
    backup = options;
    offset = copyDataProperties(kilo, backup);
    romeo = false;
    offset = 'updateAgeOnGet';
    verify[offset] = romeo;
    offset = yankee.prototype;
    offset = Object.create(offset, {constructor: {value: yankee}});
    sizing = offset;
    kilo = verify;
    verify = new sizing[yankee](kilo, backup);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot5 = verify;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    sizing = golf;
    kilo = options;
    tango = new sizing[tango](kilo, backup);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot6 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/MarkupParsers.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: parseEmbedTitleMarkup
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            options = argFoo;
            mike = argBar;
            entity = global;
            entity = entity.HermesInternal;
            tango = entity.concat;
            zulu = '';
            entity = '-';
            report = tango.bind(zulu)(options, entity, mike);
            tango = _closure1_slot4;
            entity = tango.get;
            entity = entity.bind(tango)(report);
            tango = null;
            if(!(tango == entity)) { _fun00002_ip = 118; continue _fun00001 }
 57:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 3;
            oscar = oscar[tango];
            tango = undefined;
            golf = golf.bind(tango)(oscar);
            oscar = golf.parseEmbedTitleToAST;
            tango = {};
            tango['channelId'] = mike;
            mike = true;
            mike = oscar.bind(golf)(options, mike, tango);
            tango = _closure1_slot4;
            zulu = tango.set;
            zulu = zulu.bind(tango)(report, mike);
            entity = mike;
 118:
            return entity;
        }
    };
    zulu['parseEmbedTitleMarkup'] = tango;
    tango = function(argFoo) { // Original name: parseEmbedDescriptionMarkup
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            golf = mike.description;
            entity = mike.channelId;
            offset = mike.isField;
            report = mike.ignoreCache;
            backup = mike.replaceMap;
            verify = mike.showListsAndHeaders;
            options = mike.showMaskedLinks;
            mike = global;
            mike = mike.HermesInternal;
            tango = mike.concat;
            zulu = '';
            mike = '-';
            tango = tango.bind(zulu)(golf, mike, entity);
            oscar = _closure1_slot5;
            zulu = oscar.get;
            zulu = zulu.bind(oscar)(tango);
            oscar = null;
            if(!(oscar != zulu)) { _fun00004_ip = 99; continue _fun00003 }
 94:
            if(report) { _fun00004_ip = 99; continue _fun00003 }
 97:
            return zulu;
 99:
            romeo = backup;
            zulu = golf;
            golf = zulu;
            for(report in romeo)
 116:
            {
                golf = zulu;
 128:
                output = report;
                sizing = zulu.replaceAll;
                kilo = backup[output];
                zulu = sizing.bind(zulu)(output, kilo);
                _fun00004_ip = 116; continue _fun00003;
            }
 149:
            oscar = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 3;
            report = report[zulu];
            zulu = undefined;
            oscar = oscar.bind(zulu)(report);
            report = oscar.parseToAST;
            zulu = {'channelId': null, 'allowLinks': true, 'allowEmojiLinks': true};
            zulu['channelId'] = entity;
            entity = true;
            offset = !offset;
            if(!offset) { _fun00004_ip = 204; continue _fun00003 }
 201:
            offset = verify;
 204:
            zulu['allowHeading'] = offset;
            zulu['allowList'] = verify;
            zulu['previewLinkTarget'] = options;
            entity = report.bind(oscar)(golf, entity, zulu);
            zulu = _closure1_slot5;
            mike = zulu.set;
            mike = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    zulu['parseEmbedDescriptionMarkup'] = tango;
    mike = function(argFoo, argBar, argBaz) { // Original name: parseMessageMarkup
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscar = argFoo;
            backup = argBaz;
            foxtrot = arguments[3];
            yankee = arguments[4];
            romeo = arguments[5];
            report = arguments[6];
            verify = arguments[7];
            offset = undefined;
            if(!(foxtrot === offset)) { _fun00006_ip = 29; continue _fun00005 }
 27:
            foxtrot = false;
 29:
            if(!(yankee === offset)) { _fun00006_ip = 35; continue _fun00005 }
 33:
            yankee = false;
 35:
            if(!(romeo === offset)) { _fun00006_ip = 41; continue _fun00005 }
 39:
            romeo = false;
 41:
            if(!(report === offset)) { _fun00006_ip = 47; continue _fun00005 }
 45:
            report = false;
 47:
            if(!(verify === offset)) { _fun00006_ip = 53; continue _fun00005 }
 51:
            verify = false;
 53:
            mike = _closure1_slot6;
            entity = mike.get;
            entity = entity.bind(mike)(oscar);
            zulu = null;
            if(!(zulu != entity)) { _fun00006_ip = 89; continue _fun00005 }
 76:
            mike = entity.isInlineReplyPreview;
            if(!(mike !== foxtrot)) { _fun00006_ip = 419; continue _fun00005 }
 89:
            golf = oscar.type;
            mike = _closure1_slot3;
            mike = mike.CHANGELOG;
            if(!(golf === mike)) { _fun00006_ip = 121; continue _fun00005 }
 108:
            mike = oscar.changelogId;
            if(!(zulu == mike)) { _fun00006_ip = 254; continue _fun00005 }
 121:
            mike = {};
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 5;
            zulu = options[zulu];
            options = golf.bind(offset)(zulu);
            golf = options.renderMessageMarkupToAST;
            zulu = {};
            kilo = argBar;
            zulu['contentMessage'] = kilo;
            zulu['hideSimpleEmbedContent'] = backup;
            zulu['formatInline'] = foxtrot;
            kilo = yankee;
            if(yankee) { _fun00006_ip = 178; continue _fun00005 }
 175:
            kilo = romeo;
 178:
            zulu['allowHeading'] = kilo;
            kilo = yankee;
            if(yankee) { _fun00006_ip = 192; continue _fun00005 }
 189:
            kilo = romeo;
 192:
            zulu['allowList'] = kilo;
            zulu['allowLinks'] = report;
            zulu['previewLinkTarget'] = report;
            zulu['shouldFilterKeywords'] = verify;
            echo = golf.bind(options)(oscar, zulu);
            update = mike;
            zulu = copyDataProperties(update, echo);
            zulu = 'isInlineReplyPreview';
            mike[zulu] = foxtrot;
            golf = _closure1_slot6;
            zulu = golf.set;
            zulu = zulu.bind(golf)(oscar, mike);
            _fun00006_ip = 416; continue _fun00005;
 254:
            zulu = {'content': null, 'isInlineReplyPreview': false, 'hasSpoilerEmbeds': false};
            options = _closure1_slot1;
            sizing = _closure1_slot2;
            golf = 3;
            golf = sizing[golf];
            verify = options.bind(offset)(golf);
            options = verify.astParserFor;
            kilo = _closure1_slot0;
            golf = 4;
            golf = sizing[golf];
            output = kilo.bind(offset)(golf);
            sizing = output.changelogRules;
            kilo = oscar.changelogId;
            golf = true;
            golf = sizing.bind(output)(kilo, golf);
            verify = options.bind(verify)(golf);
            options = oscar.content;
            golf = {};
            golf['hideSimpleEmbedContent'] = backup;
            golf['formatInline'] = foxtrot;
            foxtrot = yankee;
            if(yankee) { _fun00006_ip = 357; continue _fun00005 }
 354:
            foxtrot = romeo;
 357:
            golf['allowHeading'] = foxtrot;
            if(yankee) { _fun00006_ip = 368; continue _fun00005 }
 365:
            yankee = romeo;
 368:
            golf['allowList'] = yankee;
            golf['allowLinks'] = report;
            golf['previewLinkTarget'] = report;
            report = false;
            report = verify.bind(offset)(options, report, golf);
            zulu['content'] = report;
            report = _closure1_slot6;
            tango = report.set;
            tango = tango.bind(report)(oscar, zulu);
            mike = zulu;
 416:
            entity = mike;
 419:
            return entity;
        }
    };
    zulu['parseMessageMarkup'] = mike;
    return entity;
})();
// discord_common/js/packages/i18n/parse.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = oscar;
    var _closure1_slot2 = options;
    tango = function(argFoo) { // Original name: setUpdateRules
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        tango = 6;
        golf = oscar[tango];
        entity = undefined;
        golf = report.bind(entity)(golf);
        verify = golf.rules;
        options = function(argFoo, argBar) { // Original name: parserFor
            golf = argFoo;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            mike = 5;
            zulu = options[mike];
            report = undefined;
            verify = oscar.bind(report)(zulu);
            tango = verify.parserFor;
            zulu = argBar;
            zulu = zulu.bind(report)(golf);
            zulu = tango.bind(verify)(zulu);
            var _closure3_slot0 = zulu;
            zulu = options[mike];
            tango = oscar.bind(report)(zulu);
            zulu = tango.reactFor;
            mike = options[mike];
            oscar = oscar.bind(report)(mike);
            report = oscar.ruleOutput;
            mike = 'react';
            mike = report.bind(oscar)(golf, mike);
            mike = zulu.bind(tango)(mike);
            var _closure3_slot1 = mike;
            entity = function(argFoo, argBar, argBaz) {
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    zulu = argFoo;
                    mike = zulu.includes;
                    entity = '\n\n';
                    mike = mike.bind(zulu)(entity);
                    mike = !mike;
                    report = zulu;
                    if(mike) { _fun00002_ip = 32; continue _fun00001 }
 28:
                    report = zulu + entity;
 32:
                    zulu = _closure3_slot1;
                    tango = _closure3_slot0;
                    entity = {};
                    entity['inline'] = mike;
                    mike = argBar;
                    entity['context'] = mike;
                    mike = argBaz;
                    entity['unsafeContext'] = mike;
                    mike = undefined;
                    entity = tango.bind(mike)(report, entity);
                    entity = zulu.bind(mike)(entity);
                    return entity;
                }
            };
            return entity;
        };
        golf = argFoo;
        golf = options.bind(entity)(verify, golf);
        var _closure1_slot3 = golf;
        tango = oscar[tango];
        tango = report.bind(entity)(tango);
        tango = tango.rules;
        mike = function(argFoo) { // Original name: parserForNonReact
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 5;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.parserFor;
            mike = argFoo;
            mike = zulu.bind(tango)(mike);
            var _closure3_slot0 = mike;
            entity = function(argFoo, argBar, argBaz) {
                tango = _closure3_slot0;
                mike = argFoo;
                entity = '\n\n';
                zulu = mike + entity;
                mike = {};
                entity = false;
                mike['inline'] = entity;
                entity = argBar;
                mike['context'] = entity;
                entity = argBaz;
                mike['unsafeContext'] = entity;
                entity = undefined;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            };
            return entity;
        };
        mike = mike.bind(entity)(tango);
        var _closure1_slot4 = mike;
        return entity;
    };
    var _closure1_slot13 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 1;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 2;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 3;
    report = options[report];
    report = golf.bind(entity)(report);
    oscar = report.FORMAT_RE;
    var _closure1_slot8 = oscar;
    oscar = report.MARKDOWN_RE;
    var _closure1_slot9 = oscar;
    oscar = report.UNSAFE_RE;
    var _closure1_slot10 = oscar;
    report = report.UNSAFE_RE_ALL;
    var _closure1_slot11 = report;
    report = function() {
        tango = _closure1_slot7;
        zulu = function(argFoo, argBar, argBaz) { // Original name: FormattedMessage
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                verify = argFoo;
                tango = argBaz;
                zulu = this;
                oscar = _closure1_slot6;
                report = _closure2_slot0;
                entity = undefined;
                report = oscar.bind(entity)(zulu, report);
                report = verify;
                if(tango) { _fun00004_ip = 56; continue _fun00003 }
 37:
                options = verify.replace;
                golf = _closure1_slot11;
                oscar = '';
                report = options.bind(verify)(golf, oscar);
 56:
                zulu['message'] = report;
                zulu['hasMarkdown'] = tango;
                tango = _closure1_slot1;
                report = _closure1_slot2;
                mike = 4;
                mike = report[mike];
                oscar = tango.bind(entity)(mike);
                yankee = zulu.message;
                mike = oscar.prototype;
                tango = Object.create(mike, {constructor: {value: oscar}});
                offset = argBar;
                romeo = tango;
                mike = new romeo[oscar](yankee, offset, verify);
                mike = mike instanceof Object ? mike : tango;
                zulu['intlMessage'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'format';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                entity = this;
                mike = entity.hasMarkdown;
                if(mike) { _fun00006_ip = 33; continue _fun00005 }
 15:
                tango = entity.intlMessage;
                mike = tango.format;
                mike = mike.bind(tango)(zulu);
                return mike;
 33:
                mike = entity.getContext;
                oscar = mike.bind(entity)(zulu);
                tango = _closure1_slot5;
                report = undefined;
                zulu = 2;
                oscar = tango.bind(report)(oscar, zulu);
                zulu = 0;
                tango = oscar[zulu];
                zulu = 1;
                zulu = oscar[zulu];
                mike = _closure1_slot3;
                oscar = entity.intlMessage;
                entity = oscar.format;
                entity = entity.bind(oscar)(tango);
                entity = mike.bind(report)(entity, tango, zulu);
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(4);
        mike[0] = entity;
        entity = {};
        oscar = 'astFormat';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.getContext;
            mike = argFoo;
            oscar = zulu.bind(entity)(mike);
            tango = _closure1_slot5;
            report = undefined;
            zulu = 2;
            oscar = tango.bind(report)(oscar, zulu);
            zulu = 0;
            tango = oscar[zulu];
            zulu = 1;
            zulu = oscar[zulu];
            mike = _closure1_slot4;
            oscar = entity.intlMessage;
            entity = oscar.format;
            entity = entity.bind(oscar)(tango);
            entity = mike.bind(report)(entity, tango, zulu);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'plainFormat';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.intlMessage;
            mike = zulu.format;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getContext';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = argFoo;
                kilo = this;
                mike = {};
                report = _closure1_slot10;
                tango = report.test;
                entity = kilo.message;
                entity = tango.bind(report)(entity);
                if(!entity) { _fun00008_ip = 182; continue _fun00007 }
 36:
                foxtrot = global;
                tango = foxtrot.Object;
                entity = tango.entries;
                romeo = entity.bind(tango)(zulu);
                entity = romeo.length;
                yankee = 0;
                entity = yankee < entity;
                offset = undefined;
                verify = 2;
                options = 1;
                golf = '!!{';
                oscar = '}!!';
                report = 0;
                tango = 0;
                if(!entity) { _fun00008_ip = 182; continue _fun00007 }
 93:
                sizing = romeo[tango];
                entity = _closure1_slot5;
                entity = entity.bind(offset)(sizing, verify);
                output = entity[yankee];
                result = entity[options];
                echo = kilo.message;
                sizing = echo.includes;
                entity = foxtrot.HermesInternal;
                entity = entity.concat;
                entity = entity.bind(golf)(output, oscar);
                entity = sizing.bind(echo)(entity);
                sizing = report;
                if(!entity) { _fun00008_ip = 167; continue _fun00007 }
 153:
                entity = report + 1;
                mike[entity] = result;
                zulu[output] = entity;
                sizing = entity;
 167:
                tango = tango + 1;
                entity = romeo.length;
                report = sizing;
                if(tango < entity) { _fun00008_ip = 93; continue _fun00007 }
 182:
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            }
        };
        entity['value'] = report;
        mike[3] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    report = report.bind(entity)();
    var _closure1_slot12 = report;
    oscar = 8;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = '../discord_common/js/packages/i18n/parse.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['FormattedMessage'] = report;
    zulu['setUpdateRules'] = tango;
    mike = function(argFoo, argBar) { // Original name: getMessage
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            report = argFoo;
            zulu = null;
            if(!(zulu != report)) { _fun00010_ip = 160; continue _fun00009 }
 12:
            entity = _closure1_slot3;
            if(!(zulu == entity)) { _fun00010_ip = 59; continue _fun00009 }
 23:
            tango = _closure1_slot13;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 7;
            entity = zulu[entity];
            zulu = undefined;
            entity = oscar.bind(zulu)(entity);
            entity = entity.default;
            entity = tango.bind(zulu)(entity);
 59:
            tango = report.replace;
            zulu = /^\n+|\n+$/g;
            entity = '';
            oscar = tango.bind(report)(zulu, entity);
            zulu = _closure1_slot8;
            entity = zulu.test;
            entity = entity.bind(zulu)(oscar);
            tango = _closure1_slot9;
            zulu = tango.test;
            report = zulu.bind(tango)(oscar);
            if(entity) { _fun00010_ip = 125; continue _fun00009 }
 119:
            entity = oscar;
            if(!report) { _fun00010_ip = 158; continue _fun00009 }
 125:
            tango = _closure1_slot12;
            mike = tango.prototype;
            zulu = Object.create(mike, {constructor: {value: tango}});
            options = argBar;
            offset = zulu;
            verify = oscar;
            golf = report;
            mike = new offset[tango](verify, options, golf, oscar);
            entity = mike instanceof Object ? mike : zulu;
 158:
            return entity;
 160:
            entity = '';
            return entity;
        }
    };
    zulu['getMessage'] = mike;
    return entity;
})();
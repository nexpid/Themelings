// app/modules/markup/MarkupListRule.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = report;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    oscar = {};
    mike = true;
    oscar['value'] = mike;
    mike = '__esModule';
    mike = options.bind(verify)(zulu, mike, oscar);
    mike = /\n{2,}$/;
    var _closure1_slot2 = mike;
    mike = /(?:^|\n)( *)$/;
    var _closure1_slot3 = mike;
    options = entity.RegExp;
    offset = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +';
    verify = offset.replace;
    oscar = '%INDENT_CAPTURE_PATTERN%';
    mike = ' *';
    oscar = verify.bind(offset)(oscar, mike);
    mike = '^';
    foxtrot = mike + oscar;
    oscar = options.prototype;
    oscar = Object.create(oscar, {constructor: {value: options}});
    backup = oscar;
    mike = new backup[options](foxtrot, romeo);
    mike = mike instanceof Object ? mike : oscar;
    var _closure1_slot4 = mike;
    mike = / *\n$/;
    var _closure1_slot5 = mike;
    oscar = entity.RegExp;
    entity = oscar.prototype;
    mike = Object.create(entity, {constructor: {value: oscar}});
    foxtrot = '^( *)((?:[*-]|\\d+\\.)) [\\s\\S]+?(?:\\n(?! )(?!\\1(?:[*-]|\\d+\\.) )|$)';
    backup = mike;
    entity = new backup[oscar](foxtrot, romeo);
    entity = entity instanceof Object ? entity : mike;
    var _closure1_slot6 = entity;
    entity = /^[ \t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+$/;
    var _closure1_slot7 = entity;
    mike = {};
    entity = 0;
    oscar = report[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.defaultRules;
    romeo = oscar.list;
    foxtrot = mike;
    oscar = copyDataProperties(foxtrot, romeo);
    options = ' *-0123456789';
    golf = options.split;
    oscar = '';
    golf = golf.bind(options)(oscar);
    oscar = 'requiredFirstCharacters';
    mike[oscar] = golf;
    golf = function(argFoo, argBar) { // Original name: match
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            mike = entity.allowList;
            if(mike) { _fun00002_ip = 16; continue _fun00001 }
 12:
            mike = null;
            return mike;
 16:
            zulu = entity._listLevel;
            mike = 11;
            if(!(!(zulu >= mike))) { _fun00002_ip = 132; continue _fun00001 }
 29:
            mike = entity.prevCapture;
            tango = null;
            mike = tango == mike;
            report = '';
            if(mike) { _fun00002_ip = 60; continue _fun00001 }
 48:
            mike = entity.prevCapture;
            entity = 0;
            report = mike[entity];
 60:
            zulu = _closure1_slot3;
            entity = zulu.exec;
            golf = entity.bind(zulu)(report);
            zulu = tango == golf;
            entity = null;
            if(zulu) { _fun00002_ip = 130; continue _fun00001 }
 87:
            oscar = _closure1_slot7;
            report = oscar.test;
            zulu = 0;
            zulu = golf[zulu];
            zulu = report.bind(oscar)(zulu);
            entity = null;
            if(zulu) { _fun00002_ip = 130; continue _fun00001 }
 112:
            tango = _closure1_slot6;
            zulu = tango.exec;
            mike = argFoo;
            entity = zulu.bind(tango)(mike);
 130:
            return entity;
 132:
            entity = null;
            return entity;
        }
    };
    oscar = 'match';
    mike[oscar] = golf;
    oscar = function(argFoo, argBar, argBaz) { // Original name: parse
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zulu = argBar;
            var _closure2_slot0 = zulu;
            zulu = argBaz;
            var _closure2_slot1 = zulu;
            zulu = 2;
            tango = entity[zulu];
            zulu = tango.length;
            verify = 1;
            report = zulu > verify;
            options = undefined;
            zulu = undefined;
            if(!report) { _fun00004_ip = 90; continue _fun00003 }
 45:
            oscar = global;
            offset = oscar.Math;
            golf = offset.min;
            yankee = oscar.Math;
            oscar = yankee.max;
            tango = tango - 0;
            oscar = oscar.bind(yankee)(verify, tango);
            tango = 1000000000;
            zulu = golf.bind(offset)(tango, oscar);
 90:
            result = 0;
            offset = entity[result];
            golf = offset.replace;
            tango = _closure1_slot2;
            entity = '\n';
            offset = golf.bind(offset)(tango, entity);
            tango = _closure1_slot4;
            entity = tango.exec;
            tango = entity.bind(tango)(offset);
            entity = null;
            golf = entity != tango;
            yankee = 0;
            if(!golf) { _fun00004_ip = 153; continue _fun00003 }
 144:
            golf = tango[result];
            yankee = golf.length;
 153:
            golf = entity != tango;
            result = 0;
            if(!golf) { _fun00004_ip = 171; continue _fun00003 }
 162:
            tango = tango[verify];
            result = tango.length;
 171:
            kilo = '(%INDENT_CAPTURE_PATTERN%)((?:[*-]|\\d+\\.)) +[^\\n]*(?:\\n(?!%INDENT_CAPTURE_PATTERN%(?:[*-]|\\d+\\.) )[^\\n]*)*(\n|$)';
            foxtrot = kilo.replaceAll;
            update = result + verify;
            tango = global;
            golf = tango.HermesInternal;
            sizing = golf.concat;
            vacuum = ' {';
            source = ',';
            backup = '}';
            control = result;
            echo = backup;
            romeo = vacuum[sizing](control, source, update, echo, result);
            golf = '%INDENT_CAPTURE_PATTERN%';
            control = foxtrot.bind(kilo)(golf, romeo);
            golf = tango.RegExp;
            romeo = golf.prototype;
            romeo = Object.create(romeo, {constructor: {value: golf}});
            foxtrot = 'gm';
            vacuum = romeo;
            source = foxtrot;
            golf = new vacuum[golf](control, source, update);
            golf = golf instanceof Object ? golf : romeo;
            romeo = tango.RegExp;
            tango = '^ {1,';
            tango = tango + yankee;
            yankee = romeo.prototype;
            yankee = Object.create(yankee, {constructor: {value: romeo}});
            control = tango + backup;
            vacuum = yankee;
            tango = new vacuum[romeo](control, source, update);
            tango = tango instanceof Object ? tango : yankee;
            var _closure2_slot2 = tango;
            tango = offset.match;
            tango = tango.bind(offset)(golf);
            var _closure2_slot3 = tango;
            golf = _closure1_slot0;
            oscar = _closure1_slot1;
            oscar = oscar[verify];
            golf = golf.bind(options)(oscar);
            oscar = entity != tango;
            entity = 'markup list items can not be parsed.';
            entity = golf.bind(options)(oscar, entity);
            entity = false;
            var _closure2_slot4 = entity;
            entity = {};
            entity['ordered'] = report;
            entity['start'] = zulu;
            zulu = tango.map;
            mike = function(argFoo, argBar) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = argFoo;
                    zulu = tango.replace;
                    entity = _closure1_slot4;
                    yankee = '';
                    report = zulu.bind(tango)(entity, yankee);
                    tango = report.replace;
                    zulu = _closure2_slot2;
                    verify = tango.bind(report)(zulu, yankee);
                    zulu = _closure2_slot3;
                    zulu = zulu.length;
                    foxtrot = 1;
                    tango = zulu - foxtrot;
                    zulu = argBar;
                    zulu = zulu === tango;
                    tango = verify.indexOf;
                    golf = '\n\n';
                    report = tango.bind(verify)(golf);
                    tango = -1;
                    options = tango !== report;
                    if(options) { _fun00006_ip = 105; continue _fun00005 }
 95:
                    if(!zulu) { _fun00006_ip = 102; continue _fun00005 }
 98:
                    zulu = _closure2_slot4;
 102:
                    options = zulu;
 105:
                    _closure2_slot4 = options;
                    romeo = _closure2_slot1;
                    report = romeo.inline;
                    tango = romeo._list;
                    zulu = romeo._listLevel;
                    oscar = true;
                    romeo['_list'] = oscar;
                    offset = null;
                    backup = offset != zulu;
                    offset = 0;
                    if(!backup) { _fun00006_ip = 153; continue _fun00005 }
 150:
                    offset = zulu;
 153:
                    offset = offset + foxtrot;
                    romeo['_listLevel'] = offset;
                    offset = _closure2_slot1;
                    if(options) { _fun00006_ip = 193; continue _fun00005 }
 170:
                    offset['inline'] = oscar;
                    options = verify.replace;
                    oscar = _closure1_slot5;
                    options = options.bind(verify)(oscar, yankee);
                    _fun00006_ip = 216; continue _fun00005;
 193:
                    oscar = false;
                    offset['inline'] = oscar;
                    oscar = verify.replace;
                    mike = _closure1_slot5;
                    options = oscar.bind(verify)(mike, golf);
 216:
                    golf = _closure2_slot0;
                    oscar = {};
                    mike = _closure2_slot1;
                    sizing = oscar;
                    kilo = mike;
                    entity = copyDataProperties(sizing, kilo);
                    verify = false;
                    entity = 'allowHeading';
                    oscar[entity] = verify;
                    entity = undefined;
                    golf = golf.bind(entity)(options, oscar);
                    oscar = golf.map;
                    entity = function(argFoo) {
                        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                            entity = argFoo;
                            zulu = entity.type;
                            mike = 'text';
                            mike = mike === zulu;
                            if(!mike) { _fun00008_ip = 30; continue _fun00007 }
 19:
                            tango = entity.content;
                            zulu = null;
                            mike = zulu != tango;
 30:
                            if(!mike) { _fun00008_ip = 73; continue _fun00007 }
 33:
                            report = entity.content;
                            tango = report.replace;
                            zulu = /\n+\s*$/;
                            mike = '';
                            mike = tango.bind(report)(zulu, mike);
                            entity['content'] = mike;
 73:
                            return entity;
                        }
                    };
                    entity = oscar.bind(golf)(entity);
                    mike['inline'] = report;
                    mike['_list'] = tango;
                    mike['_listLevel'] = zulu;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            entity['items'] = mike;
            return entity;
        }
    };
    tango = 'parse';
    mike[tango] = oscar;
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/markup/MarkupListRule.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
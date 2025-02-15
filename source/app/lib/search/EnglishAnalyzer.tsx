// app/lib/search/EnglishAnalyzer.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = options;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: stripPossessive
        tango = argFoo;
        zulu = tango.replace;
        mike = /('|\u2019|\uFF07)(s|S)$/;
        entity = '';
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: lowercase
        mike = argFoo;
        entity = mike.toLowerCase;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function(argFoo) { // Original name: isStopWord
        zulu = _closure1_slot3;
        mike = zulu.has;
        entity = argFoo;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot6 = entity;
    entity = function(argFoo) { // Original name: isBlank
        entity = argFoo;
        mike = entity.length;
        entity = 0;
        entity = entity === mike;
        return entity;
    };
    var _closure1_slot7 = entity;
    oscar = function(argFoo) { // Original name: analyze
        golf = argFoo;
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        mike = 0;
        mike = oscar[mike];
        report = undefined;
        zulu = zulu.bind(report)(mike);
        tango = golf.split;
        mike = /\W+/;
        mike = tango.bind(golf)(mike);
        tango = zulu.bind(report)(mike);
        zulu = tango.map;
        mike = _closure1_slot4;
        tango = zulu.bind(tango)(mike);
        zulu = tango.reject;
        mike = _closure1_slot7;
        tango = zulu.bind(tango)(mike);
        zulu = tango.map;
        mike = _closure1_slot5;
        tango = zulu.bind(tango)(mike);
        zulu = tango.reject;
        mike = _closure1_slot6;
        zulu = zulu.bind(tango)(mike);
        mike = zulu.map;
        tango = _closure1_slot0;
        entity = 1;
        entity = oscar[entity];
        entity = tango.bind(report)(entity);
        entity = entity.stemmer;
        mike = mike.bind(zulu)(entity);
        entity = mike.value;
        entity = entity.bind(mike)();
        return entity;
    };
    var _closure1_slot8 = oscar;
    report = function(argFoo, argBar) { // Original name: shouldHighlight
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argBar;
            entity = _closure1_slot7;
            report = _closure1_slot5;
            oscar = _closure1_slot4;
            golf = undefined;
            zulu = argFoo;
            zulu = oscar.bind(golf)(zulu);
            oscar = report.bind(golf)(zulu);
            zulu = entity.bind(golf)(oscar);
            entity = !zulu;
            if(zulu) { _fun00002_ip = 56; continue _fun00001 }
 44:
            zulu = _closure1_slot6;
            zulu = zulu.bind(golf)(oscar);
            entity = !zulu;
 56:
            if(!entity) { _fun00002_ip = 100; continue _fun00001 }
 59:
            zulu = tango.has;
            report = _closure1_slot0;
            options = _closure1_slot2;
            mike = 1;
            mike = options[mike];
            report = report.bind(golf)(mike);
            mike = report.stemmer;
            mike = mike.bind(report)(oscar);
            entity = zulu.bind(tango)(mike);
 100:
            return entity;
        }
    };
    var _closure1_slot9 = report;
    tango = function(argFoo, argBar) { // Original name: highlightAST
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            oscar = argBar;
            var _closure2_slot0 = oscar;
            zulu = global;
            tango = zulu.Array;
            zulu = tango.isArray;
            zulu = zulu.bind(tango)(entity);
            if(zulu) { _fun00004_ip = 265; continue _fun00003 }
 36:
            zulu = entity.content;
            tango = 'string';
            zulu = typeof zulu;
            if(!(tango === zulu)) { _fun00004_ip = 65; continue _fun00003 }
 52:
            tango = entity.type;
            zulu = 'codeBlock';
            if(!(zulu === tango)) { _fun00004_ip = 104; continue _fun00003 }
 65:
            tango = entity.content;
            zulu = null;
            if(!(zulu != tango)) { _fun00004_ip = 282; continue _fun00003 }
 79:
            report = _closure1_slot10;
            tango = entity.content;
            zulu = undefined;
            zulu = report.bind(zulu)(tango, oscar);
            _fun00004_ip = 282; continue _fun00003;
 104:
            zulu = new Array(0);
            var _closure2_slot1 = zulu;
            tango = '';
            var _closure2_slot2 = tango;
            oscar = entity.content;
            report = oscar.split;
            tango = /(\W+)/g;
            oscar = report.bind(oscar)(tango);
            report = oscar.forEach;
            tango = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    oscar = argFoo;
                    tango = _closure1_slot9;
                    mike = _closure2_slot0;
                    entity = undefined;
                    tango = tango.bind(entity)(oscar, mike);
                    mike = _closure2_slot2;
                    if(tango) { _fun00006_ip = 42; continue _fun00005 }
 32:
                    tango = mike + oscar;
                    _closure2_slot2 = tango;
                    _fun00006_ip = 121; continue _fun00005;
 42:
                    tango = mike.length;
                    mike = 0;
                    if(!(tango > mike)) { _fun00006_ip = 85; continue _fun00005 }
 53:
                    report = _closure2_slot1;
                    tango = report.push;
                    mike = {};
                    golf = 'text';
                    mike['type'] = golf;
                    golf = _closure2_slot2;
                    mike['content'] = golf;
                    mike = tango.bind(report)(mike);
 85:
                    report = _closure2_slot1;
                    tango = report.push;
                    mike = {};
                    golf = 'highlight';
                    mike['type'] = golf;
                    mike['content'] = oscar;
                    mike = tango.bind(report)(mike);
                    mike = '';
                    _closure2_slot2 = mike;
 121:
                    return entity;
                }
            };
            tango = report.bind(oscar)(tango);
            tango = zulu.length;
            report = 0;
            if(!(tango > report)) { _fun00004_ip = 282; continue _fun00003 }
 177:
            tango = _closure2_slot2;
            tango = tango.length;
            if(!(tango > report)) { _fun00004_ip = 218; continue _fun00003 }
 190:
            report = zulu.push;
            tango = {};
            oscar = 'text';
            tango['type'] = oscar;
            oscar = _closure2_slot2;
            tango['content'] = oscar;
            tango = report.bind(zulu)(tango);
 218:
            report = entity.type;
            tango = 'text';
            if(!(tango !== report)) { _fun00004_ip = 257; continue _fun00003 }
 231:
            report = {};
            report['type'] = tango;
            report['content'] = zulu;
            tango = new Array(1);
            tango[0] = report;
            entity['content'] = tango;
            _fun00004_ip = 282; continue _fun00003;
 257:
            entity['content'] = zulu;
            _fun00004_ip = 282; continue _fun00003;
 265:
            zulu = entity.forEach;
            mike = function(argFoo) {
                entity = argFoo;
                tango = _closure1_slot10;
                zulu = _closure2_slot0;
                mike = undefined;
                mike = tango.bind(mike)(entity, zulu);
                return entity;
            };
            mike = zulu.bind(entity)(mike);
 282:
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    offset = {};
    verify = true;
    offset['value'] = verify;
    verify = '__esModule';
    verify = yankee.bind(romeo)(zulu, verify, offset);
    offset = entity.Set;
    entity = offset.prototype;
    verify = Object.create(entity, {constructor: {value: offset}});
    kilo = ['a', 'an', 'and', 'are', 'as', 'at', 'be', 'but', 'by', 'for', 'if', 'in', 'into', 'is', 'it', 'no', 'not', 'of', 'on', 'or', 'such', 'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to', 'was', 'will', 'with'];
    sizing = verify;
    entity = new sizing[offset](kilo, backup);
    entity = entity instanceof Object ? entity : verify;
    var _closure1_slot3 = entity;
    entity = 2;
    golf = golf[entity];
    entity = undefined;
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'lib/search/EnglishAnalyzer.tsx';
    golf = options.bind(verify)(golf);
    zulu['analyze'] = oscar;
    zulu['shouldHighlight'] = report;
    zulu['highlightAST'] = tango;
    mike = function(argFoo) { // Original name: createASTHighlighter
        mike = global;
        tango = mike.Set;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        oscar = report.bind(zulu)(mike);
        zulu = tango.prototype;
        zulu = Object.create(zulu, {constructor: {value: tango}});
        golf = zulu;
        mike = new golf[tango](oscar, report);
        mike = mike instanceof Object ? mike : zulu;
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            entity = argFoo;
            tango = _closure1_slot10;
            zulu = _closure2_slot0;
            mike = undefined;
            mike = tango.bind(mike)(entity, zulu);
            return entity;
        };
        return entity;
    };
    zulu['createASTHighlighter'] = mike;
    return entity;
})();
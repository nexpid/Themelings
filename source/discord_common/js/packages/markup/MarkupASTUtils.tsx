// discord_common/js/packages/markup/MarkupASTUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = function(argFoo) { // Original name: collectAst
        _fun62027: for(var _fun62027_ip = 0; ; ) switch(_fun62027_ip) {
 0:
            tango = argFoo;
            entity = arguments[1];
            oscar = undefined;
            if(!(entity === oscar)) { _fun62027_ip = 18; continue _fun62027 }
 14:
            entity = new Array(0);
 18:
            var _closure2_slot0 = entity;
            zulu = global;
            report = zulu.Array;
            zulu = report.isArray;
            zulu = zulu.bind(report)(tango);
            if(zulu) { _fun62027_ip = 107; continue _fun62027 }
 43:
            zulu = tango.content;
            report = 'string';
            zulu = typeof zulu;
            if(!(report !== zulu)) { _fun62027_ip = 90; continue _fun62027 }
 59:
            report = tango.content;
            zulu = null;
            if(!(zulu != report)) { _fun62027_ip = 122; continue _fun62027 }
 70:
            report = _closure1_slot1;
            zulu = tango.content;
            zulu = report.bind(oscar)(zulu, entity);
            _fun62027_ip = 122; continue _fun62027;
 90:
            report = entity.push;
            zulu = tango.content;
            zulu = report.bind(entity)(zulu);
            _fun62027_ip = 122; continue _fun62027;
 107:
            zulu = tango.forEach;
            mike = function(argFoo) {
                tango = _closure1_slot1;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 122:
            return entity;
        }
    };
    var _closure1_slot1 = entity;
    entity = function(argFoo, argBar) { // Original name: collapseArrays
        _fun62029: for(var _fun62029_ip = 0; ; ) switch(_fun62029_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            entity = global;
            mike = entity.Array;
            entity = mike.isArray;
            entity = entity.bind(mike)(zulu);
            if(entity) { _fun62029_ip = 39; continue _fun62029 }
 27:
            entity = tango.push;
            entity = entity.bind(tango)(zulu);
            _fun62029_ip = 74; continue _fun62029;
 39:
            mike = zulu.length;
            entity = 0;
            report = entity < mike;
            if(!report) { _fun62029_ip = 74; continue _fun62029 }
 53:
            oscar = tango.push;
            report = zulu[entity];
            report = oscar.bind(tango)(report);
            entity = entity + 1;
            if(entity < mike) { _fun62029_ip = 53; continue _fun62029 }
 74:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot2 = entity;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, mike);
    entity = {};
    var _closure1_slot0 = entity;
    mike = argPlugh;
    entity = 0;
    report = mike[entity];
    mike = argBar;
    entity = undefined;
    oscar = mike.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    mike = '../discord_common/js/packages/markup/MarkupASTUtils.tsx';
    mike = report.bind(oscar)(mike);
    mike = function(argFoo) { // Original name: astToString
        zulu = _closure1_slot1;
        mike = undefined;
        entity = argFoo;
        zulu = zulu.bind(mike)(entity);
        mike = zulu.join;
        entity = '';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['astToString'] = mike;
    mike = function(argFoo) { // Original name: flattenAst
        _fun62031: for(var _fun62031_ip = 0; ; ) switch(_fun62031_ip) {
 0:
            golf = argFoo;
            oscar = arguments[1];
            report = undefined;
            if(!(oscar === report)) { _fun62031_ip = 14; continue _fun62031 }
 12:
            oscar = null;
 14:
            entity = global;
            mike = entity.Array;
            entity = mike.isArray;
            entity = entity.bind(mike)(golf);
            if(entity) { _fun62031_ip = 164; continue _fun62031 }
 38:
            entity = golf.content;
            mike = null;
            if(!(mike != entity)) { _fun62031_ip = 73; continue _fun62031 }
 49:
            zulu = _closure1_slot3;
            entity = golf.content;
            entity = zulu.bind(report)(entity, golf);
            golf['content'] = entity;
 73:
            zulu = golf.type;
            entity = 'inlineCode';
            if(!(entity === zulu)) { _fun62031_ip = 91; continue _fun62031 }
 86:
            entity = delete golf.validationChildContent;
 91:
            zulu = golf.type;
            entity = 'list';
            if(!(entity === zulu)) { _fun62031_ip = 133; continue _fun62031 }
 104:
            tango = golf.items;
            zulu = tango.map;
            entity = function(argFoo) {
                _fun62032: for(var _fun62032_ip = 0; ; ) switch(_fun62032_ip) {
 0:
                    report = argFoo;
                    entity = global;
                    mike = entity.Array;
                    entity = mike.isArray;
                    mike = entity.bind(mike)(report);
                    entity = report;
                    if(!mike) { _fun62032_ip = 44; continue _fun62032 }
 27:
                    tango = _closure1_slot3;
                    zulu = undefined;
                    mike = null;
                    entity = tango.bind(zulu)(report, mike);
 44:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity);
            golf['items'] = entity;
 133:
            entity = golf;
            if(!(mike != oscar)) { _fun62031_ip = 162; continue _fun62031 }
 140:
            zulu = golf.type;
            mike = oscar.type;
            entity = golf;
            if(!(zulu === mike)) { _fun62031_ip = 162; continue _fun62031 }
 157:
            entity = golf.content;
 162:
            return entity;
 164:
            tango = golf.length;
            entity = new Array(0);
            zulu = 0;
            options = zulu < tango;
            if(!options) { _fun62031_ip = 216; continue _fun62031 }
 185:
            verify = _closure1_slot2;
            offset = _closure1_slot3;
            options = golf[zulu];
            options = offset.bind(report)(options, oscar);
            options = verify.bind(report)(entity, options);
            zulu = zulu + 1;
            if(zulu < tango) { _fun62031_ip = 185; continue _fun62031 }
 216:
            return entity;
        }
    };
    var _closure1_slot3 = mike;
    zulu['flattenAst'] = mike;
    mike = function(argFoo) { // Original name: constrainAst
        _fun62033: for(var _fun62033_ip = 0; ; ) switch(_fun62033_ip) {
 0:
            entity = argFoo;
            golf = arguments[1];
            oscar = undefined;
            if(!(golf === oscar)) { _fun62033_ip = 27; continue _fun62033 }
 14:
            zulu = {};
            tango = 200;
            zulu['limit'] = tango;
            golf = zulu;
 27:
            var _closure2_slot0 = golf;
            zulu = global;
            report = zulu.Array;
            tango = report.isArray;
            tango = tango.bind(report)(entity);
            if(tango) { _fun62033_ip = 201; continue _fun62033 }
 55:
            report = entity.type;
            tango = 'text';
            if(!(tango !== report)) { _fun62033_ip = 262; continue _fun62033 }
 71:
            report = golf.limit;
            tango = 1;
            tango = report - tango;
            golf['limit'] = tango;
            report = golf.limit;
            tango = 0;
            if(!(!(report <= tango))) { _fun62033_ip = 192; continue _fun62033 }
 102:
            report = zulu.Array;
            tango = report.isArray;
            zulu = entity.content;
            zulu = tango.bind(report)(zulu);
            if(!zulu) { _fun62033_ip = 150; continue _fun62033 }
 126:
            tango = _closure1_slot4;
            zulu = entity.content;
            zulu = tango.bind(oscar)(zulu, golf);
            entity['content'] = zulu;
 150:
            tango = entity.type;
            zulu = 'list';
            if(!(zulu === tango)) { _fun62033_ip = 262; continue _fun62033 }
 163:
            tango = entity.items;
            zulu = tango.map;
            mike = function(argFoo) {
                tango = _closure1_slot4;
                zulu = _closure2_slot0;
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
            entity['items'] = mike;
            _fun62033_ip = 262; continue _fun62033;
 192:
            mike = _closure1_slot0;
            return mike;
 201:
            report = entity.length;
            tango = 0;
            mike = tango < report;
            if(!mike) { _fun62033_ip = 262; continue _fun62033 }
 218:
            options = _closure1_slot4;
            mike = entity[tango];
            options = options.bind(oscar)(mike, golf);
            verify = _closure1_slot0;
            mike = tango;
            if(!(options !== verify)) { _fun62033_ip = 256; continue _fun62033 }
 243:
            entity[mike] = options;
            tango = mike + 1;
            if(tango < report) { _fun62033_ip = 218; continue _fun62033 }
 254:
            _fun62033_ip = 262; continue _fun62033;
 256:
            entity['length'] = mike;
 262:
            return entity;
        }
    };
    var _closure1_slot4 = mike;
    zulu['constrainAst'] = mike;
    mike = function(argFoo, argBar) { // Original name: getIndexedAST
        zulu = argFoo;
        var _closure2_slot0 = zulu;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = 0;
        var _closure2_slot2 = mike;
        mike = zulu.map;
        entity = function(argFoo) {
            _fun62036: for(var _fun62036_ip = 0; ; ) switch(_fun62036_ip) {
 0:
                entity = argFoo;
                tango = _closure2_slot2;
                zulu = 0;
                if(!(zulu !== tango)) { _fun62036_ip = 41; continue _fun62036 }
 16:
                report = _closure2_slot0;
                oscar = _closure2_slot2;
                tango = 1;
                tango = oscar - tango;
                tango = report[tango];
                zulu = tango.endIndex;
 41:
                tango = _closure2_slot2;
                tango = tango + 1;
                _closure2_slot2 = tango;
                report = entity.type;
                tango = 'spoiler';
                if(!(tango !== report)) { _fun62036_ip = 340; continue _fun62036 }
 68:
                tango = 'u';
                if(!(tango !== report)) { _fun62036_ip = 340; continue _fun62036 }
 79:
                tango = 's';
                if(!(tango !== report)) { _fun62036_ip = 340; continue _fun62036 }
 90:
                tango = 'strong';
                if(!(tango !== report)) { _fun62036_ip = 340; continue _fun62036 }
 101:
                tango = 'em';
                if(!(tango !== report)) { _fun62036_ip = 262; continue _fun62036 }
 112:
                tango = 'customEmoji';
                if(!(tango !== report)) { _fun62036_ip = 262; continue _fun62036 }
 123:
                tango = 'emoji';
                if(!(tango !== report)) { _fun62036_ip = 262; continue _fun62036 }
 134:
                tango = 'inlineCode';
                if(!(tango !== report)) { _fun62036_ip = 262; continue _fun62036 }
 142:
                tango = 'text';
                if(!(tango !== report)) { _fun62036_ip = 220; continue _fun62036 }
 150:
                tango = _closure2_slot1;
                tango = tango + zulu;
                entity['startIndex'] = tango;
                golf = _closure1_slot5;
                oscar = entity.content;
                report = entity.startIndex;
                tango = undefined;
                report = golf.bind(tango)(oscar, report);
                oscar = report.length;
                tango = 1;
                tango = oscar - tango;
                tango = report[tango];
                tango = tango.endIndex;
                entity['endIndex'] = tango;
                return entity;
 220:
                tango = _closure2_slot1;
                tango = tango + zulu;
                entity['startIndex'] = tango;
                report = entity.startIndex;
                tango = entity.content;
                tango = tango.length;
                tango = report + tango;
                entity['endIndex'] = tango;
                return entity;
 262:
                tango = _closure2_slot1;
                tango = tango + zulu;
                entity['startIndex'] = tango;
                options = _closure1_slot5;
                golf = entity.content;
                tango = entity.startIndex;
                report = 1;
                oscar = tango + report;
                tango = undefined;
                oscar = options.bind(tango)(golf, oscar);
                tango = oscar.length;
                tango = tango - report;
                tango = oscar[tango];
                tango = tango.endIndex;
                tango = tango + report;
                entity['endIndex'] = tango;
                return entity;
 340:
                mike = _closure2_slot1;
                mike = mike + zulu;
                entity['startIndex'] = mike;
                oscar = _closure1_slot5;
                report = entity.content;
                mike = entity.startIndex;
                zulu = 2;
                tango = mike + zulu;
                mike = undefined;
                tango = oscar.bind(mike)(report, tango);
                report = tango.length;
                mike = 1;
                mike = report - mike;
                mike = tango[mike];
                mike = mike.endIndex;
                mike = mike + zulu;
                entity['endIndex'] = mike;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot5 = mike;
    zulu['getIndexedAST'] = mike;
    return entity;
})();
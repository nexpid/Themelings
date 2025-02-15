// app/modules/devtools/native/useSortedDevToolsScreens.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: getSortedDevToolsScreens
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = arguments[0];
            oscar = undefined;
            if(!(mike === oscar)) { _fun00008_ip = 24; continue _fun00007 }
 11:
            zulu = _closure1_slot3;
            mike = zulu.sortedScreenKeys;
 24:
            var _closure2_slot0 = mike;
            mike = global;
            tango = mike.Object;
            zulu = tango.entries;
            report = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 2;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.DevToolsScreens;
            zulu = zulu.bind(tango)(mike);
            mike = zulu.sort;
            entity = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = argFoo;
                    entity = mike[Symbol.iterator];
                    mike = entity().next;
                    report = mike().value;
                    mike = entity;
                    zulu = undefined;
                    mike = mike === zulu;
                    tango = undefined;
                    if(mike) { _fun00010_ip = 27; continue _fun00009 }
 24:
                    tango = report;
 27:
                    if(mike) { _fun00010_ip = 33; continue _fun00009 }
 30:
                    entity.return();
 33:
                    mike = argBar;
                    entity = mike[Symbol.iterator];
                    mike = entity().next;
                    report = mike().value;
                    mike = entity;
                    mike = mike === zulu;
                    zulu = undefined;
                    if(mike) { _fun00010_ip = 58; continue _fun00009 }
 55:
                    zulu = report;
 58:
                    if(mike) { _fun00010_ip = 64; continue _fun00009 }
 61:
                    entity.return();
 64:
                    mike = _closure2_slot0;
                    entity = mike.indexOf;
                    report = entity.bind(mike)(tango);
                    entity = mike.indexOf;
                    tango = entity.bind(mike)(zulu);
                    oscar = -1;
                    zulu = oscar === report;
                    if(!zulu) { _fun00010_ip = 110; continue _fun00009 }
 104:
                    entity = 0;
                    if(!(oscar !== tango)) { _fun00010_ip = 133; continue _fun00009 }
 110:
                    mike = oscar;
                    if(zulu) { _fun00010_ip = 130; continue _fun00009 }
 116:
                    zulu = 1;
                    if(!(oscar !== tango)) { _fun00010_ip = 127; continue _fun00009 }
 123:
                    zulu = report - tango;
 127:
                    mike = zulu;
 130:
                    entity = mike;
 133:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/devtools/native/useSortedDevToolsScreens.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: useSortedDevToolsScreens
        zulu = _closure1_slot6;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        mike = 4;
        tango = tango[mike];
        mike = undefined;
        oscar = report.bind(mike)(tango);
        report = oscar.useStateFromStores;
        entity = _closure1_slot3;
        tango = new Array(1);
        tango[0] = entity;
        entity = function() {
            entity = _closure1_slot3;
            entity = entity.sortedScreenKeys;
            return entity;
        };
        entity = report.bind(oscar)(tango, entity);
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: updateSortOrder
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            golf = argBar;
            entity = _closure1_slot3;
            romeo = entity.sortedScreenKeys;
            report = new Array(0);
            verify = 0;
            foxtrot = report;
            yankee = 0;
            entity = arraySpread(foxtrot, romeo, yankee);
            tango = _closure1_slot4;
            zulu = _closure1_slot6;
            entity = undefined;
            zulu = zulu.bind(entity)();
            options = tango.bind(entity)(zulu);
            tango = options.bind(entity)();
            zulu = tango.done;
            oscar = 1;
            if(zulu) { _fun00012_ip = 122; continue _fun00011 }
 65:
            offset = tango.value;
            zulu = _closure1_slot2;
            zulu = zulu.bind(entity)(offset, oscar);
            offset = zulu[verify];
            zulu = report.includes;
            zulu = zulu.bind(report)(offset);
            if(zulu) { _fun00012_ip = 107; continue _fun00011 }
 97:
            zulu = report.push;
            zulu = zulu.bind(report)(offset);
 107:
            offset = options.bind(entity)();
            zulu = offset.done;
            tango = offset;
            if(!zulu) { _fun00012_ip = 65; continue _fun00011 }
 122:
            tango = report.indexOf;
            zulu = argFoo;
            zulu = tango.bind(report)(zulu);
            tango = 'up';
            if(!(tango !== golf)) { _fun00012_ip = 177; continue _fun00011 }
 143:
            tango = 'down';
            if(!(tango === golf)) { _fun00012_ip = 201; continue _fun00011 }
 151:
            golf = report[zulu];
            tango = zulu + oscar;
            tango = report[tango];
            report[zulu] = tango;
            tango = zulu + oscar;
            report[tango] = golf;
            _fun00012_ip = 201; continue _fun00011;
 177:
            tango = report[zulu];
            golf = zulu - oscar;
            golf = report[golf];
            report[zulu] = golf;
            zulu = zulu - oscar;
            report[zulu] = tango;
 201:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 3;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.updateDevToolsSettings;
            mike = {};
            mike['sortedScreenKeys'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['updateSortOrder'] = mike;
    return entity;
})();
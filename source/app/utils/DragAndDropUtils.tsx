// app/utils/DragAndDropUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: calculatePositionDeltas
        _fun93634: for(var _fun93634_ip = 0; ; ) switch(_fun93634_ip) {
 0:
            entity = argFoo;
            report = entity.oldOrdering;
            tango = entity.newOrdering;
            foxtrot = entity.idGetter;
            romeo = entity.existingPositionGetter;
            mike = entity.ascending;
            yankee = undefined;
            if(!(mike === yankee)) { _fun93634_ip = 41; continue _fun93634 }
 39:
            mike = true;
 41:
            offset = tango.length;
            entity = report.length;
            if(!(entity === offset)) { _fun93634_ip = 310; continue _fun93634 }
 58:
            entity = report.map;
            zulu = entity.bind(report)(foxtrot);
            entity = zulu.sort;
            zulu = entity.bind(zulu)();
            entity = zulu.join;
            oscar = ':';
            golf = entity.bind(zulu)(oscar);
            entity = tango.map;
            zulu = entity.bind(tango)(foxtrot);
            entity = zulu.sort;
            zulu = entity.bind(zulu)();
            entity = zulu.join;
            oscar = entity.bind(zulu)(oscar);
            if(!(golf === oscar)) { _fun93634_ip = 279; continue _fun93634 }
 129:
            verify = {};
            options = 0;
            zulu = options < offset;
            entity = 0;
            if(!zulu) { _fun93634_ip = 171; continue _fun93634 }
 142:
            zulu = report[entity];
            backup = foxtrot.bind(yankee)(zulu);
            zulu = report[entity];
            zulu = romeo.bind(yankee)(zulu);
            verify[backup] = zulu;
            entity = entity + 1;
            if(entity < offset) { _fun93634_ip = 142; continue _fun93634 }
 171:
            entity = new Array(0);
            backup = options < offset;
            zulu = 1;
            options = 0;
            if(!backup) { _fun93634_ip = 264; continue _fun93634 }
 187:
            backup = tango[options];
            output = foxtrot.bind(yankee)(backup);
            sizing = options;
            if(mike) { _fun93634_ip = 210; continue _fun93634 }
 202:
            backup = offset - zulu;
            sizing = backup - options;
 210:
            backup = verify[output];
            backup = backup === sizing;
            if(!backup) { _fun93634_ip = 234; continue _fun93634 }
 221:
            kilo = tango[options];
            kilo = romeo.bind(yankee)(kilo);
            backup = kilo === sizing;
 234:
            if(backup) { _fun93634_ip = 257; continue _fun93634 }
 237:
            kilo = entity.push;
            backup = {};
            backup['id'] = output;
            backup['position'] = sizing;
            backup = kilo.bind(entity)(backup);
 257:
            options = options + 1;
            if(options < offset) { _fun93634_ip = 187; continue _fun93634 }
 264:
            if(mike) { _fun93634_ip = 277; continue _fun93634 }
 267:
            mike = entity.reverse;
            mike = mike.bind(entity)();
 277:
            return entity;
 279:
            zulu = _closure1_slot2;
            mike = zulu.warn;
            entity = 'Object IDs in the old ordering and the new ordering are not the same.';
            entity = mike.bind(zulu)(entity, golf, oscar);
            entity = new Array(0);
            return entity;
 310:
            zulu = _closure1_slot2;
            mike = zulu.warn;
            entity = 'Arrays are not of the same length!';
            entity = mike.bind(zulu)(entity, report, tango);
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot3 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: moveItemFromTo
        mike = argFoo;
        oscar = argBar;
        report = mike[oscar];
        entity = new Array(0);
        tango = 0;
        verify = entity;
        options = mike;
        golf = 0;
        mike = arraySpread(verify, options, golf);
        zulu = entity.splice;
        mike = 1;
        mike = zulu.bind(entity)(oscar, mike);
        zulu = entity.splice;
        mike = argBaz;
        mike = zulu.bind(entity)(mike, tango, report);
        return entity;
    };
    var _closure1_slot4 = tango;
    mike = function(argFoo) { // Original name: getPositionUpdates
        _fun93636: for(var _fun93636_ip = 0; ; ) switch(_fun93636_ip) {
 0:
            entity = argFoo;
            golf = entity.objectArray;
            offset = entity.fromPosition;
            verify = entity.toPosition;
            oscar = entity.idGetter;
            report = entity.existingPositionGetter;
            tango = entity.ascending;
            zulu = undefined;
            if(!(tango === zulu)) { _fun93636_ip = 53; continue _fun93636 }
 51:
            tango = true;
 53:
            entity = global;
            mike = entity.Array;
            entity = mike.isArray;
            entity = entity.bind(mike)(golf);
            options = golf;
            if(entity) { _fun93636_ip = 110; continue _fun93636 }
 77:
            mike = _closure1_slot0;
            yankee = _closure1_slot1;
            entity = 1;
            entity = yankee[entity];
            mike = mike.bind(zulu)(entity);
            entity = mike.values;
            options = entity.bind(mike)(golf);
 110:
            mike = _closure1_slot3;
            entity = {};
            entity['oldOrdering'] = options;
            golf = _closure1_slot4;
            golf = golf.bind(zulu)(options, offset, verify);
            entity['newOrdering'] = golf;
            entity['idGetter'] = oscar;
            entity['existingPositionGetter'] = report;
            entity['ascending'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    offset = verify.bind(entity)(oscar);
    oscar = offset.prototype;
    verify = Object.create(oscar, {constructor: {value: offset}});
    backup = 'DragAndDropUtils';
    kilo = verify;
    oscar = new kilo[offset](backup, foxtrot);
    oscar = oscar instanceof Object ? oscar : verify;
    var _closure1_slot2 = oscar;
    oscar = {};
    oscar['moveItemFromTo'] = tango;
    oscar['calculatePositionDeltas'] = report;
    oscar['getPositionUpdates'] = mike;
    golf = 2;
    options = options[golf];
    golf = argBar;
    verify = golf.bind(entity)(options);
    options = verify.fileFinishedImporting;
    golf = 'utils/DragAndDropUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['calculatePositionDeltas'] = report;
    zulu['moveItemFromTo'] = tango;
    zulu['getPositionUpdates'] = mike;
    return entity;
})();
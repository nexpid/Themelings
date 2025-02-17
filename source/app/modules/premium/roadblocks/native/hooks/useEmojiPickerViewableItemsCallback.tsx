// app/modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
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
            verify = _closure1_slot6;
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
            golf = _closure1_slot6;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/roadblocks/native/hooks/useEmojiPickerViewableItemsCallback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useEmojiPickerViewableItemsChanged
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        tango = _closure1_slot3;
        report = tango.useRef;
        zulu = 0;
        zulu = report.bind(tango)(zulu);
        var _closure2_slot1 = zulu;
        golf = _closure1_slot0;
        report = _closure1_slot2;
        zulu = 2;
        report = report[zulu];
        zulu = undefined;
        golf = golf.bind(zulu)(report);
        report = golf.useStateFromStores;
        mike = _closure1_slot4;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure1_slot4;
                entity = zulu.getCurrentUser;
                tango = entity.bind(zulu)();
                zulu = _closure1_slot1;
                entity = _closure1_slot2;
                oscar = 3;
                entity = entity[oscar];
                report = undefined;
                zulu = zulu.bind(report)(entity);
                entity = zulu.canUseEmojisEverywhere;
                entity = entity.bind(zulu)(tango);
                entity = !entity;
                if(entity) { _fun00008_ip = 86; continue _fun00007 }
 55:
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                mike = mike[oscar];
                zulu = zulu.bind(report)(mike);
                mike = zulu.canUseAnimatedEmojis;
                mike = mike.bind(zulu)(tango);
                entity = !mike;
 86:
                return entity;
            }
        };
        report = report.bind(golf)(zulu, mike);
        var _closure2_slot2 = report;
        zulu = tango.useMemo;
        mike = new Array(2);
        mike[0] = oscar;
        mike[1] = report;
        entity = function() {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tango = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 4;
                entity = mike[entity];
                mike = undefined;
                oscar = tango.bind(mike)(entity);
                report = oscar.debounce;
                tango = function() {
                    zulu = _closure2_slot0;
                    entity = _closure2_slot1;
                    mike = entity.current;
                    entity = 7;
                    mike = mike > entity;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    return entity;
                };
                entity = 200;
                entity = report.bind(oscar)(tango, entity);
                var _closure3_slot0 = entity;
                entity = {};
                tango = _closure2_slot2;
                if(!tango) { _fun00010_ip = 68; continue _fun00009 }
 63:
                mike = function(argFoo) {
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.changed;
                        mike = _closure1_slot5;
                        entity = undefined;
                        yankee = mike.bind(entity)(zulu);
                        zulu = yankee.bind(entity)();
                        mike = zulu.done;
                        offset = 0;
                        verify = 1;
                        options = -1;
                        golf = true;
                        report = global;
                        tango = null;
                        if(mike) { _fun00012_ip = 155; continue _fun00011 }
 55:
                        sizing = zulu.value;
                        romeo = _closure2_slot1;
                        backup = report.Math;
                        foxtrot = backup.max;
                        kilo = romeo.current;
                        mike = sizing.item;
                        result = tango == mike;
                        output = undefined;
                        if(result) { _fun00012_ip = 100; continue _fun00011 }
 94:
                        output = mike.isSectionNitroLocked;
 100:
                        mike = 0;
                        if(!(golf === output)) { _fun00012_ip = 124; continue _fun00011 }
 106:
                        output = sizing.isViewable;
                        sizing = options;
                        if(!output) { _fun00012_ip = 121; continue _fun00011 }
 118:
                        sizing = verify;
 121:
                        mike = sizing;
 124:
                        mike = kilo + mike;
                        mike = foxtrot.bind(backup)(offset, mike);
                        romeo['current'] = mike;
                        romeo = yankee.bind(entity)();
                        mike = romeo.done;
                        zulu = romeo;
                        if(!mike) { _fun00012_ip = 55; continue _fun00011 }
 155:
                        mike = _closure3_slot0;
                        mike = mike.bind(entity)();
                        return entity;
                    }
                };
 68:
                entity['onViewableItemsChanged'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
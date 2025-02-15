// app/modules/activities/useActivityShelfItems.tsx
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
 345:
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
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/useActivityShelfItems.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useActivityShelfItems
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            offset = mike.guildId;
            golf = mike.enableFilter;
            options = undefined;
            if(!(golf === options)) { _fun00008_ip = 26; continue _fun00007 }
 24:
            golf = false;
 26:
            var _closure2_slot0 = golf;
            var _closure2_slot1 = options;
            var _closure2_slot2 = options;
            var _closure2_slot3 = options;
            tango = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 2;
            zulu = verify[zulu];
            yankee = tango.bind(options)(zulu);
            oscar = yankee.useStateFromStoresObject;
            zulu = _closure1_slot4;
            report = new Array(1);
            report[0] = zulu;
            zulu = function() {
                entity = {};
                zulu = _closure1_slot4;
                mike = zulu.getFilter;
                mike = mike.bind(zulu)();
                entity['filter'] = mike;
                return entity;
            };
            zulu = oscar.bind(yankee)(report, zulu);
            oscar = zulu.filter;
            _closure2_slot1 = oscar;
            zulu = 3;
            zulu = verify[zulu];
            report = tango.bind(options)(zulu);
            zulu = report.useActivityShelfData;
            report = zulu.bind(report)(offset);
            offset = _closure1_slot1;
            zulu = 4;
            zulu = verify[zulu];
            zulu = offset.bind(options)(zulu);
            report = zulu.bind(options)(report);
            _closure2_slot2 = report;
            zulu = 5;
            zulu = verify[zulu];
            tango = tango.bind(options)(zulu);
            zulu = tango.useDeveloperActivityShelfItems;
            options = zulu.bind(tango)();
            _closure2_slot3 = options;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(4);
            mike[0] = options;
            mike[1] = golf;
            mike[2] = oscar;
            mike[3] = report;
            entity = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    golf = function(argFoo) { // Original name: shouldKeepShelfItem
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = _closure2_slot0;
                            entity = !entity;
                            if(entity) { _fun00012_ip = 84; continue _fun00011 }
 13:
                            tango = _closure2_slot1;
                            mike = '';
                            mike = mike === tango;
                            if(mike) { _fun00012_ip = 81; continue _fun00011 }
 28:
                            tango = argFoo;
                            tango = tango.application;
                            report = tango.name;
                            tango = report.toLowerCase;
                            report = tango.bind(report)();
                            tango = report.includes;
                            oscar = _closure2_slot1;
                            zulu = oscar.toLowerCase;
                            zulu = zulu.bind(oscar)();
                            zulu = tango.bind(report)(zulu);
                            zulu = !zulu;
                            mike = !zulu;
 81:
                            entity = mike;
 84:
                            return entity;
                        }
                    };
                    yankee = _closure2_slot3;
                    tango = new Array(0);
                    offset = 0;
                    romeo = tango;
                    entity = arraySpread(romeo, yankee, offset);
                    entity = tango.filter;
                    entity = entity.bind(tango)(golf);
                    tango = global;
                    report = tango.Set;
                    tango = entity.map;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        entity = entity.application;
                        entity = entity.id;
                        return entity;
                    };
                    romeo = tango.bind(entity)(zulu);
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    foxtrot = tango;
                    zulu = new foxtrot[report](romeo, yankee);
                    oscar = zulu instanceof Object ? zulu : tango;
                    zulu = _closure1_slot5;
                    mike = _closure2_slot2;
                    report = undefined;
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun00010_ip = 178; continue _fun00009 }
 114:
                    options = zulu.value;
                    verify = oscar.has;
                    mike = options.application;
                    mike = mike.id;
                    mike = verify.bind(oscar)(mike);
                    mike = !mike;
                    if(!mike) { _fun00010_ip = 150; continue _fun00009 }
 145:
                    mike = golf.bind(report)(options);
 150:
                    if(!mike) { _fun00010_ip = 163; continue _fun00009 }
 153:
                    mike = entity.push;
                    mike = mike.bind(entity)(options);
 163:
                    options = tango.bind(report)();
                    mike = options.done;
                    zulu = options;
                    if(!mike) { _fun00010_ip = 114; continue _fun00009 }
 178:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
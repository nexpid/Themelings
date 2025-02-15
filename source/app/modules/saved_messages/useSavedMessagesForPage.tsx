// app/modules/saved_messages/useSavedMessagesForPage.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun88990: for(var _fun88990_ip = 0; ; ) switch(_fun88990_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun88990_ip = 46; continue _fun88990 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun88990_ip = 55; continue _fun88990 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun88990_ip = 345; continue _fun88990 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun88990_ip = 323; continue _fun88990 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun88990_ip = 283; continue _fun88990 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun88990_ip = 270; continue _fun88990 }
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
            if(!golf) { _fun88990_ip = 163; continue _fun88990 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun88990_ip = 179; continue _fun88990 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun88990_ip = 249; continue _fun88990 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun88990_ip = 249; continue _fun88990 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun88990_ip = 234; continue _fun88990 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun88990_ip = 247; continue _fun88990 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun88990_ip = 265; continue _fun88990;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun88990_ip = 283; continue _fun88990;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun88990_ip = 323; continue _fun88990 }
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
            if(!tango) { _fun88990_ip = 330; continue _fun88990 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun88991: for(var _fun88991_ip = 0; ; ) switch(_fun88991_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun88991_ip = 56; continue _fun88991 }
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
                    _fun88991_ip = 67; continue _fun88991;
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
        _fun88992: for(var _fun88992_ip = 0; ; ) switch(_fun88992_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun88992_ip = 23; continue _fun88992 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun88992_ip = 33; continue _fun88992 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun88992_ip = 70; continue _fun88992 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun88992_ip = 55; continue _fun88992 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = function() { // Original name: getKeys
        mike = _closure1_slot4;
        entity = mike.getSavedMessages;
        zulu = entity.bind(mike)();
        mike = zulu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.saveData;
            return entity;
        };
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    var _closure1_slot7 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    golf = report[tango];
    tango = argCorge;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 4;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/saved_messages/useSavedMessagesForPage.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: useSavedMessagesForPage
        golf = _closure1_slot3;
        zulu = golf.useState;
        entity = _closure1_slot7;
        oscar = zulu.bind(golf)(entity);
        report = _closure1_slot2;
        zulu = undefined;
        entity = 2;
        oscar = report.bind(zulu)(oscar, entity);
        entity = 0;
        entity = oscar[entity];
        report = 1;
        report = oscar[report];
        var _closure2_slot0 = report;
        oscar = golf.useRef;
        options = _closure1_slot4;
        report = options.getIsStale;
        report = report.bind(options)();
        report = oscar.bind(golf)(report);
        var _closure2_slot1 = report;
        oscar = golf.useEffect;
        report = function() {
            tango = function() { // Original name: handleChange
                _fun88997: for(var _fun88997_ip = 0; ; ) switch(_fun88997_ip) {
 0:
                    zulu = _closure1_slot4;
                    entity = zulu.getLastChanged;
                    zulu = entity.bind(zulu)();
                    tango = _closure3_slot0;
                    if(!(tango !== zulu)) { _fun88997_ip = 119; continue _fun88997 }
 28:
                    _closure3_slot0 = zulu;
                    zulu = _closure2_slot1;
                    zulu = zulu.current;
                    if(!zulu) { _fun88997_ip = 99; continue _fun88997 }
 47:
                    tango = _closure1_slot4;
                    zulu = tango.getIsStale;
                    zulu = zulu.bind(tango)();
                    if(zulu) { _fun88997_ip = 99; continue _fun88997 }
 64:
                    tango = _closure2_slot1;
                    zulu = false;
                    tango['current'] = zulu;
                    tango = _closure2_slot0;
                    mike = _closure1_slot7;
                    zulu = undefined;
                    mike = mike.bind(zulu)();
                    mike = tango.bind(zulu)(mike);
                    mike = undefined;
                    return mike;
 99:
                    zulu = _closure2_slot0;
                    mike = undefined;
                    entity = function(argFoo) {
                        _fun88998: for(var _fun88998_ip = 0; ; ) switch(_fun88998_ip) {
 0:
                            oscar = argFoo;
                            entity = new Array(0);
                            yankee = 0;
                            foxtrot = entity;
                            romeo = oscar;
                            mike = arraySpread(foxtrot, romeo, yankee);
                            tango = _closure1_slot4;
                            zulu = tango.getSavedMessages;
                            golf = zulu.bind(tango)();
                            zulu = global;
                            report = zulu.Map;
                            tango = golf.map;
                            zulu = function(argFoo) {
                                mike = argFoo;
                                entity = mike.saveData;
                                zulu = entity.messageId;
                                entity = new Array(2);
                                entity[0] = zulu;
                                entity[1] = mike;
                                return entity;
                            };
                            foxtrot = tango.bind(golf)(zulu);
                            tango = report.prototype;
                            tango = Object.create(tango, {constructor: {value: report}});
                            backup = tango;
                            zulu = new backup[report](foxtrot, romeo);
                            tango = zulu instanceof Object ? zulu : tango;
                            zulu = _closure1_slot5;
                            report = undefined;
                            options = zulu.bind(report)(oscar);
                            oscar = options.bind(report)();
                            zulu = oscar.done;
                            golf = 1;
                            if(zulu) { _fun88998_ip = 186; continue _fun88998 }
 109:
                            zulu = oscar.value;
                            offset = tango.has;
                            verify = zulu.messageId;
                            verify = offset.bind(tango)(verify);
                            if(verify) { _fun88998_ip = 156; continue _fun88998 }
 132:
                            offset = entity.splice;
                            verify = entity.indexOf;
                            verify = verify.bind(entity)(zulu);
                            verify = offset.bind(entity)(verify, golf);
                            _fun88998_ip = 171; continue _fun88998;
 156:
                            verify = tango.delete;
                            zulu = zulu.messageId;
                            zulu = verify.bind(tango)(zulu);
 171:
                            verify = options.bind(report)();
                            zulu = verify.done;
                            oscar = verify;
                            if(!zulu) { _fun88998_ip = 109; continue _fun88998 }
 186:
                            zulu = _closure1_slot5;
                            mike = tango.values;
                            mike = mike.bind(tango)();
                            tango = zulu.bind(report)(mike);
                            zulu = tango.bind(report)();
                            mike = zulu.done;
                            if(mike) { _fun88998_ip = 252; continue _fun88998 }
 216:
                            mike = zulu.value;
                            oscar = entity.push;
                            mike = mike.saveData;
                            mike = oscar.bind(entity)(mike);
                            oscar = tango.bind(report)();
                            mike = oscar.done;
                            zulu = oscar;
                            if(!mike) { _fun88998_ip = 216; continue _fun88998 }
 252:
                            return entity;
                        }
                    };
                    entity = zulu.bind(mike)(entity);
 119:
                    entity = undefined;
                    return entity;
                }
            };
            var _closure3_slot1 = tango;
            report = _closure1_slot4;
            zulu = report.getLastChanged;
            zulu = zulu.bind(report)();
            var _closure3_slot0 = zulu;
            zulu = _closure1_slot4;
            mike = zulu.addChangeListener;
            mike = mike.bind(zulu)(tango);
            entity = function() {
                zulu = _closure1_slot4;
                mike = zulu.removeChangeListener;
                entity = _closure3_slot1;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            return entity;
        };
        tango = new Array(0);
        tango = oscar.bind(golf)(report, tango);
        tango = _closure1_slot0;
        report = _closure1_slot1;
        mike = 3;
        mike = report[mike];
        mike = tango.bind(zulu)(mike);
        mike = mike.bind(zulu)();
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
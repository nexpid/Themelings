// app/modules/app_analytics/clickstream/Clickstream.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
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
    tango = global;
    offset = tango.Object;
    verify = offset.defineProperty;
    golf = {};
    entity = true;
    golf['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, golf);
    entity = 0;
    golf = oscar[entity];
    entity = undefined;
    golf = options.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = tango.Map;
    golf = tango.prototype;
    golf = Object.create(golf, {constructor: {value: tango}});
    backup = golf;
    tango = new backup[tango](foxtrot);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot4 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_analytics/clickstream/Clickstream.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: trackClickstream
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            oscar = argFoo;
            mike = _closure1_slot4;
            entity = mike.has;
            entity = entity.bind(mike)(oscar);
            if(entity) { _fun00008_ip = 42; continue _fun00007 }
 23:
            tango = _closure1_slot4;
            mike = tango.set;
            entity = new Array(0);
            entity = mike.bind(tango)(oscar, entity);
 42:
            tango = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 1;
            mike = mike[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            tango = mike.default;
            mike = argBar;
            tango = tango.bind(entity)(oscar, mike);
            mike = null;
            if(!(mike != tango)) { _fun00008_ip = 112; continue _fun00007 }
 84:
            report = _closure1_slot4;
            zulu = report.get;
            zulu = zulu.bind(report)(oscar);
            if(!(mike != zulu)) { _fun00008_ip = 112; continue _fun00007 }
 102:
            mike = zulu.push;
            mike = mike.bind(zulu)(tango);
 112:
            return entity;
        }
    };
    zulu['trackClickstream'] = tango;
    mike = function() { // Original name: drainClickstream
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = _closure1_slot0;
            entity = _closure1_slot2;
            offset = 2;
            zulu = entity[offset];
            entity = undefined;
            tango = tango.bind(entity)(zulu);
            zulu = tango.clickstreamExperimentEnabled;
            zulu = zulu.bind(tango)();
            if(zulu) { _fun00010_ip = 57; continue _fun00009 }
 38:
            tango = _closure1_slot4;
            zulu = tango.clear;
            zulu = zulu.bind(tango)();
            _fun00010_ip = 201; continue _fun00009;
 57:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 3;
            zulu = report[zulu];
            zulu = tango.bind(entity)(zulu);
            verify = zulu.default;
            tango = _closure1_slot5;
            zulu = _closure1_slot4;
            options = tango.bind(entity)(zulu);
            tango = options.bind(entity)();
            zulu = tango.done;
            golf = 0;
            oscar = 1;
            report = 4;
            if(zulu) { _fun00010_ip = 187; continue _fun00009 }
 115:
            yankee = tango.value;
            zulu = _closure1_slot3;
            zulu = zulu.bind(entity)(yankee, offset);
            foxtrot = zulu[golf];
            zulu = zulu[oscar];
            romeo = _closure1_slot1;
            yankee = _closure1_slot2;
            yankee = yankee[report];
            romeo = romeo.bind(entity)(yankee);
            yankee = romeo.track;
            zulu = verify.bind(entity)(foxtrot, zulu);
            zulu = yankee.bind(romeo)(foxtrot, zulu);
            yankee = options.bind(entity)();
            zulu = yankee.done;
            tango = yankee;
            if(!zulu) { _fun00010_ip = 115; continue _fun00009 }
 187:
            zulu = _closure1_slot4;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
 201:
            return entity;
        }
    };
    zulu['drainClickstream'] = mike;
    return entity;
})();
// app/modules/app_database/util/ExtendedMemoryLru.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argCorge;
    var _closure1_slot1 = entity;
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
            verify = _closure1_slot7;
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
            golf = _closure1_slot7;
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
    var _closure1_slot6 = entity;
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
    var _closure1_slot7 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot5;
        zulu = function(argFoo, argBar) { // Original name: ExtendedMemoryLru
            zulu = this;
            report = _closure1_slot4;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 3;
            oscar = report[mike];
            oscar = tango.bind(entity)(oscar);
            options = oscar.Lru;
            oscar = options.prototype;
            golf = Object.create(oscar, {constructor: {value: options}});
            offset = argFoo;
            yankee = golf;
            oscar = new yankee[options](offset, verify);
            oscar = oscar instanceof Object ? oscar : golf;
            zulu['primary'] = oscar;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            report = mike.Lru;
            mike = report.prototype;
            tango = Object.create(mike, {constructor: {value: report}});
            offset = argBar;
            yankee = tango;
            mike = new yankee[report](offset, verify);
            mike = mike instanceof Object ? mike : tango;
            zulu['extended'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'totalLength';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            mike = entity.primary;
            mike = mike.length;
            entity = entity.extended;
            entity = entity.length;
            entity = mike + entity;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(17);
        mike[0] = entity;
        entity = {};
        oscar = 'primaryCapacity';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity.primary;
            entity = entity.capacity;
            return entity;
        };
        entity['get'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'extendedCapacity';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity.extended;
            entity = entity.capacity;
            return entity;
        };
        entity['get'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            zulu = entity.primary;
            mike = zulu.clear;
            mike = mike.bind(zulu)();
            mike = entity.extended;
            entity = mike.clear;
            entity = entity.bind(mike)();
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'has';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.primary;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'hasExtended';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = argFoo;
                mike = this;
                zulu = mike.primary;
                entity = zulu.has;
                entity = entity.bind(zulu)(tango);
                if(entity) { _fun00008_ip = 41; continue _fun00007 }
 25:
                zulu = mike.extended;
                mike = zulu.has;
                entity = mike.bind(zulu)(tango);
 41:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.primary;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'put';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                report = mike.primary;
                tango = report.put;
                zulu = argFoo;
                entity = argBar;
                oscar = tango.bind(report)(zulu, entity);
                entity = undefined;
                if(!(entity !== oscar)) { _fun00010_ip = 64; continue _fun00009 }
 33:
                report = mike.extended;
                tango = report.put;
                mike = 0;
                zulu = oscar[mike];
                mike = 1;
                mike = oscar[mike];
                mike = tango.bind(report)(zulu, mike);
 64:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = argFoo;
                tango = this;
                mike = tango.primary;
                entity = mike.delete;
                entity = entity.bind(mike)(report);
                zulu = tango.extended;
                mike = zulu.delete;
                mike = mike.bind(zulu)(report);
                zulu = tango.upstreamItems;
                zulu = zulu.bind(tango)();
                if(entity) { _fun00012_ip = 56; continue _fun00011 }
 53:
                entity = mike;
 56:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'upstreamItems';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                verify = this;
                entity = verify.canUpstreamItems;
                entity = entity.bind(verify)();
                if(!entity) { _fun00014_ip = 154; continue _fun00013 }
 19:
                mike = _closure1_slot6;
                zulu = verify.extended;
                entity = zulu.entries;
                entity = entity.bind(zulu)();
                golf = undefined;
                oscar = mike.bind(golf)(entity);
                mike = oscar.bind(golf)();
                entity = mike.done;
                report = 2;
                tango = 0;
                zulu = 1;
                if(entity) { _fun00014_ip = 154; continue _fun00013 }
 69:
                offset = mike.value;
                entity = _closure1_slot3;
                entity = entity.bind(golf)(offset, report);
                yankee = entity[tango];
                romeo = entity[zulu];
                offset = verify.primary;
                entity = offset.put;
                entity = entity.bind(offset)(yankee, romeo);
                offset = verify.extended;
                entity = offset.delete;
                entity = entity.bind(offset)(yankee);
                entity = verify.canUpstreamItems;
                entity = entity.bind(verify)();
                if(!entity) { _fun00014_ip = 154; continue _fun00013 }
 139:
                offset = oscar.bind(golf)();
                entity = offset.done;
                mike = offset;
                if(!entity) { _fun00014_ip = 69; continue _fun00013 }
 154:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'canUpstreamItems';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = this;
                entity = mike.primary;
                zulu = entity.length;
                entity = mike.primary;
                entity = entity.capacity;
                entity = zulu < entity;
                if(!entity) { _fun00016_ip = 50; continue _fun00015 }
 33:
                mike = mike.extended;
                zulu = mike.length;
                mike = 0;
                entity = zulu > mike;
 50:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'entries';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.primary;
            entity = mike.entries;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'keys';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.primary;
            entity = mike.keys;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'values';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            mike = entity.primary;
            entity = mike.values;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'allEntries';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 4;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.chain;
            report = entity.extended;
            mike = report.entries;
            mike = mike.bind(report)();
            report = entity.primary;
            entity = report.entries;
            entity = entity.bind(report)();
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'allKeys';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 4;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.chain;
            report = entity.extended;
            mike = report.keys;
            mike = mike.bind(report)();
            report = entity.primary;
            entity = report.keys;
            entity = entity.bind(report)();
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'allValues';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 4;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.chain;
            report = entity.extended;
            mike = report.values;
            mike = mike.bind(report)();
            report = entity.primary;
            entity = report.values;
            entity = entity.bind(report)();
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['value'] = report;
        mike[16] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_database/util/ExtendedMemoryLru.tsx';
    tango = report.bind(oscar)(tango);
    zulu['ExtendedMemoryLru'] = mike;
    return entity;
})();
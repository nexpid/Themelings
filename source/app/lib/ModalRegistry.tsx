// app/lib/ModalRegistry.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
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
            verify = _closure1_slot3;
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
            golf = _closure1_slot3;
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
    var _closure1_slot2 = entity;
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
    var _closure1_slot3 = entity;
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
    var _closure1_slot0 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot1 = tango;
    mike = function() {
        tango = _closure1_slot1;
        zulu = function(argFoo) { // Original name: ModalRegistry
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscar = argFoo;
                zulu = this;
                tango = _closure1_slot0;
                mike = _closure2_slot0;
                entity = undefined;
                mike = tango.bind(entity)(zulu, mike);
                zulu['modals'] = oscar;
                mike = global;
                tango = mike.Set;
                report = tango.prototype;
                report = Object.create(report, {constructor: {value: tango}});
                backup = report;
                tango = new backup[tango](foxtrot);
                report = tango instanceof Object ? tango : report;
                tango = _closure1_slot2;
                golf = tango.bind(entity)(oscar);
                oscar = golf.bind(entity)();
                tango = oscar.done;
                if(tango) { _fun00008_ip = 160; continue _fun00007 }
 83:
                verify = _closure1_slot2;
                tango = oscar.value;
                tango = tango.stores;
                offset = verify.bind(entity)(tango);
                verify = offset.bind(entity)();
                tango = verify.done;
                if(tango) { _fun00008_ip = 145; continue _fun00007 }
 115:
                yankee = verify.value;
                tango = report.add;
                tango = tango.bind(report)(yankee);
                yankee = offset.bind(entity)();
                tango = yankee.done;
                verify = yankee;
                if(!tango) { _fun00008_ip = 115; continue _fun00007 }
 145:
                verify = golf.bind(entity)();
                tango = verify.done;
                oscar = verify;
                if(!tango) { _fun00008_ip = 83; continue _fun00007 }
 160:
                tango = mike.Array;
                mike = tango.from;
                mike = mike.bind(tango)(report);
                zulu['stores'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'getStores';
        entity['key'] = mike;
        mike = function() { // Original name: value
            entity = this;
            entity = entity.stores;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'getOpenModal';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                tango = entity.modals;
                zulu = tango.findIndex;
                mike = function(argFoo) {
                    mike = argFoo;
                    entity = mike.isOpen;
                    entity = entity.bind(mike)();
                    return entity;
                };
                report = zulu.bind(tango)(mike);
                mike = -1;
                if(!(mike !== report)) { _fun00010_ip = 195; continue _fun00009 }
 42:
                entity = entity.modals;
                zulu = entity[report];
                entity = zulu.getProps;
                tango = null;
                entity = tango == entity;
                mike = undefined;
                if(entity) { _fun00010_ip = 79; continue _fun00009 }
 69:
                entity = zulu.getProps;
                mike = entity.bind(zulu)();
 79:
                if(!(tango == mike)) { _fun00010_ip = 85; continue _fun00009 }
 83:
                mike = {};
 85:
                entity = {};
                entity['key'] = report;
                report = zulu.getComponent;
                report = report.bind(zulu)();
                entity['component'] = report;
                entity['props'] = mike;
                mike = zulu.closable;
                mike = tango == mike;
                if(mike) { _fun00010_ip = 129; continue _fun00009 }
 123:
                mike = zulu.closable;
 129:
                entity['closable'] = mike;
                mike = zulu.backdropInstant;
                mike = tango != mike;
                if(!mike) { _fun00010_ip = 153; continue _fun00009 }
 147:
                mike = zulu.backdropInstant;
 153:
                entity['backdropInstant'] = mike;
                mike = zulu.backdropStyle;
                entity['backdropStyle'] = mike;
                mike = zulu.disableAnimation;
                mike = tango != mike;
                if(!mike) { _fun00010_ip = 188; continue _fun00009 }
 182:
                mike = zulu.disableAnimation;
 188:
                entity['disableAnimation'] = mike;
                return entity;
 195:
                entity = null;
                return entity;
            }
        };
        entity['value'] = report;
        mike[1] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 2;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/ModalRegistry.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
// app/lib/guild/GuildThreadSubscriptions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun68542: for(var _fun68542_ip = 0; ; ) switch(_fun68542_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun68542_ip = 46; continue _fun68542 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun68542_ip = 55; continue _fun68542 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun68542_ip = 345; continue _fun68542 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun68542_ip = 323; continue _fun68542 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun68542_ip = 283; continue _fun68542 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun68542_ip = 270; continue _fun68542 }
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
            if(!golf) { _fun68542_ip = 163; continue _fun68542 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun68542_ip = 179; continue _fun68542 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun68542_ip = 249; continue _fun68542 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun68542_ip = 249; continue _fun68542 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun68542_ip = 234; continue _fun68542 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun68542_ip = 247; continue _fun68542 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun68542_ip = 265; continue _fun68542;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun68542_ip = 283; continue _fun68542;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun68542_ip = 323; continue _fun68542 }
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
            if(!tango) { _fun68542_ip = 330; continue _fun68542 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun68543: for(var _fun68543_ip = 0; ; ) switch(_fun68543_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun68543_ip = 56; continue _fun68543 }
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
                    _fun68543_ip = 67; continue _fun68543;
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
        _fun68544: for(var _fun68544_ip = 0; ; ) switch(_fun68544_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun68544_ip = 23; continue _fun68544 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun68544_ip = 33; continue _fun68544 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun68544_ip = 70; continue _fun68544 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun68544_ip = 55; continue _fun68544 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo) { // Original name: GuildThreadSubscriptions
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            zulu['_subscriptions'] = mike;
            mike = argFoo;
            zulu['_onChange'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'reset';
        entity['key'] = mike;
        mike = function() { // Original name: value
            mike = {};
            entity = this;
            entity['_subscriptions'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(7);
        mike[0] = entity;
        entity = {};
        oscar = 'get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            zulu = this;
            mike = zulu._get;
            entity = argFoo;
            mike = mike.bind(zulu)(entity);
            entity = mike.keys;
            entity = entity.bind(mike)();
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'getSubscribedThreadIds';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun68549: for(var _fun68549_ip = 0; ; ) switch(_fun68549_ip) {
 0:
                romeo = this;
                entity = global;
                entity = entity.Set;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                kilo = mike;
                entity = new kilo[entity](backup);
                entity = entity instanceof Object ? entity : mike;
                offset = romeo._subscriptions;
                report = undefined;
                for(golf in offset)
 50:
                {
 59:
                    tango = golf;
                    zulu = _closure1_slot4;
                    mike = romeo._subscriptions;
                    tango = mike[tango];
                    mike = tango.keys;
                    mike = mike.bind(tango)();
                    tango = zulu.bind(report)(mike);
                    zulu = tango.bind(report)();
                    mike = zulu.done;
                    if(mike) { _fun68549_ip = 50; continue _fun68549 }
 102:
                    foxtrot = zulu.value;
                    mike = entity.add;
                    mike = mike.bind(entity)(foxtrot);
                    foxtrot = tango.bind(report)();
                    mike = foxtrot.done;
                    zulu = foxtrot;
                    if(mike) { _fun68549_ip = 50; continue _fun68549 }
 132:
                    _fun68549_ip = 102; continue _fun68549;
                }
 134:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = '_get';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68550: for(var _fun68550_ip = 0; ; ) switch(_fun68550_ip) {
 0:
                entity = this;
                mike = entity._subscriptions;
                entity = argFoo;
                entity = mike[entity];
                mike = null;
                if(!(mike == entity)) { _fun68550_ip = 77; continue _fun68550 }
 22:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 2;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                mike = tango.prototype;
                zulu = Object.create(mike, {constructor: {value: tango}});
                report = {'max': 3, 'updateAgeOnGet': true};
                oscar = zulu;
                mike = new oscar[tango](report, tango);
                entity = mike instanceof Object ? mike : zulu;
 77:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'clear';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun68551: for(var _fun68551_ip = 0; ; ) switch(_fun68551_ip) {
 0:
                tango = argFoo;
                zulu = this;
                entity = zulu._subscriptions;
                entity = tango in entity;
                if(!entity) { _fun68551_ip = 45; continue _fun68551 }
 19:
                entity = zulu._subscriptions;
                entity = delete entity[tango];
                mike = zulu._onChange;
                entity = new Array(0);
                entity = mike.bind(zulu)(tango, entity);
 45:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'subscribe';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun68552: for(var _fun68552_ip = 0; ; ) switch(_fun68552_ip) {
 0:
                oscar = argFoo;
                report = argBar;
                golf = argBaz;
                zulu = this;
                entity = zulu._get;
                tango = entity.bind(zulu)(oscar);
                entity = tango.has;
                entity = entity.bind(tango)(report);
                if(entity) { _fun68552_ip = 149; continue _fun68552 }
 36:
                entity = null;
                entity = entity != golf;
                if(!entity) { _fun68552_ip = 55; continue _fun68552 }
 45:
                mike = tango.has;
                entity = mike.bind(tango)(golf);
 55:
                if(!entity) { _fun68552_ip = 86; continue _fun68552 }
 58:
                mike = tango.set;
                entity = global;
                options = entity.Date;
                entity = options.now;
                entity = entity.bind(options)();
                entity = mike.bind(tango)(golf, entity);
 86:
                mike = tango.set;
                entity = global;
                golf = entity.Date;
                entity = golf.now;
                entity = entity.bind(golf)();
                entity = mike.bind(tango)(report, entity);
                entity = zulu._subscriptions;
                entity[oscar] = tango;
                mike = zulu._onChange;
                entity = tango.keys;
                entity = entity.bind(tango)();
                entity = mike.bind(zulu)(oscar, entity);
                entity = true;
                _fun68552_ip = 179; continue _fun68552;
 149:
                zulu = tango.set;
                mike = global;
                oscar = mike.Date;
                mike = oscar.now;
                mike = mike.bind(oscar)();
                mike = zulu.bind(tango)(report, mike);
                entity = false;
 179:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'unsubscribe';
        entity['key'] = oscar;
        report = function(argFoo, argBar) { // Original name: value
            _fun68553: for(var _fun68553_ip = 0; ; ) switch(_fun68553_ip) {
 0:
                report = argFoo;
                zulu = argBar;
                tango = this;
                entity = tango._subscriptions;
                entity = report in entity;
                if(entity) { _fun68553_ip = 26; continue _fun68553 }
 22:
                entity = false;
                return entity;
 26:
                entity = tango._subscriptions;
                oscar = entity[report];
                entity = oscar.has;
                entity = entity.bind(oscar)(zulu);
                mike = !entity;
                entity = !mike;
                if(mike) { _fun68553_ip = 89; continue _fun68553 }
 55:
                mike = oscar.del;
                mike = mike.bind(oscar)(zulu);
                zulu = tango._onChange;
                mike = oscar.keys;
                mike = mike.bind(oscar)();
                mike = zulu.bind(tango)(report, mike);
                entity = true;
 89:
                return entity;
            }
        };
        entity['value'] = report;
        mike[6] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 3;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'lib/guild/GuildThreadSubscriptions.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
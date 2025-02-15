// app/modules/debug/LogAggregator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
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
            verify = _closure1_slot2;
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
            golf = _closure1_slot2;
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
    var _closure1_slot1 = entity;
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
    var _closure1_slot2 = entity;
    entity = global;
    golf = entity.Object;
    oscar = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = oscar.bind(golf)(zulu, entity, tango);
    entity = 0;
    oscar = report[entity];
    tango = argBaz;
    entity = undefined;
    golf = tango.bind(entity)(oscar);
    tango = golf.prototype;
    oscar = Object.create(tango, {constructor: {value: golf}});
    offset = 5000;
    yankee = oscar;
    tango = new yankee[golf](offset, verify);
    tango = tango instanceof Object ? tango : oscar;
    var _closure1_slot0 = tango;
    tango = 1;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/debug/LogAggregator.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar) { // Original name: report
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            golf = argFoo;
            result = 1;
            zulu = copyRestArgs(result);
            mike = _closure1_slot1;
            entity = undefined;
            backup = mike.bind(entity)(zulu);
            report = backup.bind(entity)();
            mike = report.done;
            oscar = '';
            foxtrot = ' ';
            romeo = '\n';
            options = global;
            yankee = 'boolean';
            offset = 'number';
            zulu = 'string';
            verify = report;
            report = oscar;
            oscar = report;
            if(mike) { _fun00008_ip = 189; continue _fun00007 }
 71:
            mike = verify.value;
            kilo = typeof mike;
            if(!(zulu !== kilo)) { _fun00008_ip = 160; continue _fun00007 }
 83:
            if(!(offset !== kilo)) { _fun00008_ip = 160; continue _fun00007 }
 87:
            if(!(yankee !== kilo)) { _fun00008_ip = 160; continue _fun00007 }
 91:
            kilo = options.Error;
            kilo = mike instanceof kilo;
            if(kilo) { _fun00008_ip = 131; continue _fun00007 }
 104:
            sizing = options.JSON;
            kilo = sizing.stringify;
            kilo = kilo.bind(sizing)(mike);
            kilo = kilo + foxtrot;
            kilo = report + kilo;
            _fun00008_ip = 168; continue _fun00007;
 131:
            sizing = mike.message;
            output = sizing + romeo;
            sizing = mike.stack;
            sizing = output + sizing;
            sizing = sizing + foxtrot;
            kilo = report + sizing;
            _fun00008_ip = 168; continue _fun00007;
 160:
            mike = mike + foxtrot;
            kilo = report + mike;
 168:
            sizing = backup.bind(entity)();
            mike = sizing.done;
            report = kilo;
            verify = sizing;
            oscar = report;
            if(!mike) { _fun00008_ip = 71; continue _fun00007 }
 189:
            mike = typeof golf;
            if(!(zulu !== mike)) { _fun00008_ip = 258; continue _fun00007 }
 196:
            report = _closure1_slot0;
            zulu = report.push;
            mike = {};
            offset = options.Date;
            verify = offset.now;
            verify = verify.bind(offset)();
            mike['time'] = verify;
            verify = golf.name;
            mike['category'] = verify;
            verify = golf.timing;
            mike['timing'] = verify;
            mike['message'] = oscar;
            mike = zulu.bind(report)(mike);
            _fun00008_ip = 302; continue _fun00007;
 258:
            report = _closure1_slot0;
            zulu = report.push;
            mike = {};
            verify = options.Date;
            options = verify.now;
            options = options.bind(verify)();
            mike['time'] = options;
            mike['category'] = golf;
            mike['message'] = oscar;
            mike = zulu.bind(report)(mike);
 302:
            mike = _closure1_slot0;
            mike = mike.length;
            zulu = 5000;
            if(!(mike > zulu)) { _fun00008_ip = 344; continue _fun00007 }
 321:
            mike = _closure1_slot0;
            report = mike.shift;
            report = report.bind(mike)();
            mike = mike.length;
            if(mike > zulu) { _fun00008_ip = 321; continue _fun00007 }
 344:
            return entity;
        }
    };
    zulu['report'] = tango;
    tango = function() { // Original name: clear
        mike = _closure1_slot0;
        entity = mike.clear;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    zulu['clear'] = tango;
    tango = function(argFoo) { // Original name: stringify
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot0;
        mike = zulu.toArray;
        tango = mike.bind(zulu)();
        zulu = tango.filter;
        mike = function(argFoo) {
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = _closure2_slot0;
                entity = null;
                entity = entity == zulu;
                if(entity) { _fun00010_ip = 38; continue _fun00009 }
 16:
                tango = _closure2_slot0;
                zulu = tango.includes;
                mike = argFoo;
                mike = mike.category;
                entity = zulu.bind(tango)(mike);
 38:
                return entity;
            }
        };
        zulu = zulu.bind(tango)(mike);
        mike = zulu.map;
        entity = function(argFoo) {
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                zulu = new Array(0);
                tango = zulu.push;
                mike = global;
                oscar = mike.Date;
                options = entity.time;
                report = oscar.prototype;
                report = Object.create(report, {constructor: {value: oscar}});
                verify = report;
                mike = new verify[oscar](options, golf);
                report = mike instanceof Object ? mike : report;
                mike = report.toISOString;
                mike = mike.bind(report)();
                mike = tango.bind(zulu)(mike);
                tango = entity.timing;
                mike = null;
                if(!(mike != tango)) { _fun00012_ip = 89; continue _fun00011 }
 73:
                tango = zulu.push;
                mike = entity.timing;
                mike = tango.bind(zulu)(mike);
 89:
                tango = zulu.push;
                mike = entity.category;
                entity = entity.message;
                entity = tango.bind(zulu)(mike, entity);
                mike = zulu.join;
                entity = ' -> ';
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        zulu = mike.bind(zulu)(entity);
        mike = zulu.join;
        entity = '\n';
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['stringify'] = tango;
    mike = function() { // Original name: getAllForDebugPanel
        mike = _closure1_slot0;
        entity = mike.toArray;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['getAllForDebugPanel'] = mike;
    return entity;
})();
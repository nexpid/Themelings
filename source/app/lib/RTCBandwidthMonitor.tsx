// app/lib/RTCBandwidthMonitor.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun53050: for(var _fun53050_ip = 0; ; ) switch(_fun53050_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun53050_ip = 46; continue _fun53050 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun53050_ip = 55; continue _fun53050 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun53050_ip = 343; continue _fun53050 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun53050_ip = 323; continue _fun53050 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun53050_ip = 283; continue _fun53050 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun53050_ip = 270; continue _fun53050 }
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
            if(!golf) { _fun53050_ip = 163; continue _fun53050 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun53050_ip = 179; continue _fun53050 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun53050_ip = 249; continue _fun53050 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun53050_ip = 249; continue _fun53050 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun53050_ip = 234; continue _fun53050 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun53050_ip = 247; continue _fun53050 }
 234:
            verify = _closure1_slot6;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun53050_ip = 265; continue _fun53050;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun53050_ip = 283; continue _fun53050;
 270:
            golf = _closure1_slot6;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun53050_ip = 323; continue _fun53050 }
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
            if(!tango) { _fun53050_ip = 330; continue _fun53050 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun53051: for(var _fun53051_ip = 0; ; ) switch(_fun53051_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun53051_ip = 56; continue _fun53051 }
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
                    _fun53051_ip = 67; continue _fun53051;
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
        _fun53052: for(var _fun53052_ip = 0; ; ) switch(_fun53052_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun53052_ip = 23; continue _fun53052 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun53052_ip = 33; continue _fun53052 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun53052_ip = 70; continue _fun53052 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun53052_ip = 55; continue _fun53052 }
 70:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = new Array(0);
    var _closure1_slot4 = tango;
    tango = function() {
        report = function() { // Original name: RTCBandwidthMonitor
            zulu = this;
            var _closure3_slot0 = zulu;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = {};
            zulu['bytes'] = tango;
            mike = function(argFoo) {
                _fun53055: for(var _fun53055_ip = 0; ; ) switch(_fun53055_ip) {
 0:
                    entity = argFoo;
                    mike = null;
                    if(!(mike != entity)) { _fun53055_ip = 346; continue _fun53055 }
 12:
                    mike = entity.rtp;
                    result = mike.inbound;
                    options = undefined;
                    oscar = 0;
                    report = global;
                    backup = 'inbound-';
                    foxtrot = '-';
                    romeo = undefined;
                    yankee = undefined;
                    for(kilo in result)
 61:
                    {
 73:
                        offset = kilo;
                        tango = _closure1_slot5;
                        zulu = entity.rtp;
                        zulu = zulu.inbound;
                        zulu = zulu[offset];
                        verify = tango.bind(options)(zulu);
                        tango = verify.bind(options)();
                        zulu = tango.done;
                        if(zulu) { _fun53055_ip = 61; continue _fun53055 }
 113:
                        romeo = tango.value;
                        update = romeo.type;
                        zulu = report.HermesInternal;
                        zulu = zulu.concat;
                        source = zulu.bind(backup)(offset, foxtrot, update);
                        zulu = _closure3_slot0;
                        zulu = zulu.bytes;
                        zulu = source in zulu;
                        if(zulu) { _fun53055_ip = 172; continue _fun53055 }
 158:
                        zulu = _closure3_slot0;
                        zulu = zulu.bytes;
                        zulu[source] = oscar;
 172:
                        zulu = _closure3_slot0;
                        update = zulu.bytes;
                        zulu = romeo.bytesReceived;
                        update[source] = zulu;
                        update = verify.bind(options)();
                        zulu = update.done;
                        yankee = source;
                        tango = update;
                        if(zulu) { _fun53055_ip = 61; continue _fun53055 }
 213:
                        _fun53055_ip = 113; continue _fun53055;
                    }
 215:
                    mike = _closure1_slot5;
                    entity = entity.rtp;
                    entity = entity.outbound;
                    tango = mike.bind(options)(entity);
                    mike = tango.bind(options)();
                    entity = mike.done;
                    zulu = 'outbound-';
                    if(entity) { _fun53055_ip = 346; continue _fun53055 }
 254:
                    entity = mike.value;
                    offset = entity.type;
                    verify = report.HermesInternal;
                    verify = verify.concat;
                    offset = verify.bind(zulu)(offset);
                    verify = _closure3_slot0;
                    verify = verify.bytes;
                    verify = offset in verify;
                    if(verify) { _fun53055_ip = 311; continue _fun53055 }
 297:
                    verify = _closure3_slot0;
                    verify = verify.bytes;
                    verify[offset] = oscar;
 311:
                    verify = _closure3_slot0;
                    verify = verify.bytes;
                    entity = entity.bytesSent;
                    verify[offset] = entity;
                    verify = tango.bind(options)();
                    entity = verify.done;
                    mike = verify;
                    if(!entity) { _fun53055_ip = 254; continue _fun53055 }
 346:
                    entity = undefined;
                    return entity;
                }
            };
            zulu['record'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        tango = _closure1_slot3;
        entity = {};
        zulu = 'getTotalBytes';
        entity['key'] = zulu;
        zulu = function() { // Original name: value
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 2;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.sum;
            entity = global;
            report = entity.Object;
            tango = report.values;
            entity = this;
            entity = entity.bytes;
            entity = tango.bind(report)(entity);
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = zulu;
        zulu = new Array(1);
        zulu[0] = entity;
        entity = {};
        oscar = 'create';
        entity['key'] = oscar;
        mike = function() { // Original name: value
            entity = _closure2_slot0;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            report = mike;
            entity = new report[entity](tango);
            entity = entity instanceof Object ? entity : mike;
            zulu = _closure1_slot4;
            mike = zulu.push;
            mike = mike.bind(zulu)(entity);
            entity = entity.record;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = tango.bind(entity)(report, zulu, mike);
        return entity;
    };
    tango = tango.bind(entity)();
    report = 3;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'lib/RTCBandwidthMonitor.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function() { // Original name: getRTCTotalBytes
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 2;
        zulu = zulu[mike];
        mike = undefined;
        zulu = tango.bind(mike)(zulu);
        mike = zulu.sum;
        report = _closure1_slot4;
        tango = report.map;
        entity = function(argFoo) {
            mike = argFoo;
            entity = mike.getTotalBytes;
            entity = entity.bind(mike)();
            return entity;
        };
        entity = tango.bind(report)(entity);
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['getRTCTotalBytes'] = mike;
    return entity;
})();
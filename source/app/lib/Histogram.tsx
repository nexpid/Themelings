// app/lib/Histogram.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
            verify = _closure1_slot5;
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
            golf = _closure1_slot5;
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
    var _closure1_slot4 = entity;
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
    var _closure1_slot5 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: Histogram
            zulu = this;
            report = _closure1_slot2;
            tango = _closure2_slot0;
            entity = undefined;
            tango = report.bind(entity)(zulu, tango);
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 2;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.Digest;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            options = tango;
            mike = new options[mike](golf);
            mike = mike instanceof Object ? mike : tango;
            zulu['digest'] = mike;
            mike = 0;
            zulu['total'] = mike;
            zulu['samples'] = mike;
            zulu['totalWeight'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'addSample';
        entity['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golf = argFoo;
                oscar = arguments[1];
                mike = this;
                entity = undefined;
                if(!(oscar === entity)) { _fun00008_ip = 18; continue _fun00007 }
 15:
                oscar = 1;
 18:
                tango = mike.total;
                zulu = golf * oscar;
                zulu = tango + zulu;
                mike['total'] = zulu;
                zulu = mike.totalWeight;
                zulu = zulu + oscar;
                mike['totalWeight'] = zulu;
                zulu = mike.samples;
                zulu = zulu + 1;
                mike['samples'] = zulu;
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 2;
                zulu = report[zulu];
                zulu = tango.bind(entity)(zulu);
                zulu = zulu.TDigest;
                zulu = zulu.prototype;
                report = zulu.push;
                tango = report.call;
                zulu = mike.digest;
                zulu = tango.bind(report)(zulu, golf, oscar);
                zulu = mike.digest;
                mike = zulu.check_continuous;
                mike = mike.bind(zulu)();
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(2);
        mike[0] = entity;
        entity = {};
        oscar = 'getReport';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = arguments[0];
                mike = this;
                verify = undefined;
                if(!(zulu === verify)) { _fun00010_ip = 22; continue _fun00009 }
 12:
                zulu = [25, 50, 75, 90, 95];
 22:
                tango = {};
                entity = _closure1_slot4;
                options = entity.bind(verify)(zulu);
                oscar = options.bind(verify)();
                entity = oscar.done;
                golf = 100;
                report = null;
                zulu = 0;
                if(entity) { _fun00010_ip = 112; continue _fun00009 }
 55:
                offset = oscar.value;
                romeo = mike.digest;
                yankee = romeo.percentile;
                entity = offset / golf;
                yankee = yankee.bind(romeo)(entity);
                romeo = report != yankee;
                entity = 0;
                if(!romeo) { _fun00010_ip = 93; continue _fun00009 }
 90:
                entity = yankee;
 93:
                tango[offset] = entity;
                offset = options.bind(verify)();
                entity = offset.done;
                oscar = offset;
                if(!entity) { _fun00010_ip = 55; continue _fun00009 }
 112:
                entity = {};
                golf = mike.digest;
                oscar = golf.percentile;
                golf = oscar.bind(golf)(zulu);
                options = report != golf;
                oscar = 0;
                if(!options) { _fun00010_ip = 143; continue _fun00009 }
 140:
                oscar = golf;
 143:
                entity['min'] = oscar;
                options = mike.digest;
                golf = options.percentile;
                oscar = 1;
                golf = golf.bind(options)(oscar);
                options = report != golf;
                oscar = 0;
                if(!options) { _fun00010_ip = 179; continue _fun00009 }
 176:
                oscar = golf;
 179:
                entity['max'] = oscar;
                golf = mike.digest;
                oscar = golf.size;
                oscar = oscar.bind(golf)();
                golf = report != oscar;
                report = 0;
                if(!golf) { _fun00010_ip = 210; continue _fun00009 }
 207:
                report = oscar;
 210:
                entity['count'] = report;
                entity['percentiles'] = tango;
                tango = mike.totalWeight;
                tango = tango > zulu;
                zulu = 0;
                if(!tango) { _fun00010_ip = 250; continue _fun00009 }
 234:
                report = mike.total;
                tango = mike.totalWeight;
                zulu = report / tango;
 250:
                entity['mean'] = zulu;
                mike = mike.samples;
                entity['samples'] = mike;
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
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'lib/Histogram.tsx';
    tango = report.bind(oscar)(tango);
    zulu['Histogram'] = mike;
    return entity;
})();
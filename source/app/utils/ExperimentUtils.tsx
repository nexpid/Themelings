// app/utils/ExperimentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun98414: for(var _fun98414_ip = 0; ; ) switch(_fun98414_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun98414_ip = 46; continue _fun98414 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun98414_ip = 55; continue _fun98414 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun98414_ip = 345; continue _fun98414 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun98414_ip = 323; continue _fun98414 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun98414_ip = 283; continue _fun98414 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun98414_ip = 270; continue _fun98414 }
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
            if(!golf) { _fun98414_ip = 163; continue _fun98414 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun98414_ip = 179; continue _fun98414 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun98414_ip = 249; continue _fun98414 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun98414_ip = 249; continue _fun98414 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun98414_ip = 234; continue _fun98414 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun98414_ip = 247; continue _fun98414 }
 234:
            verify = _closure1_slot8;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun98414_ip = 265; continue _fun98414;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun98414_ip = 283; continue _fun98414;
 270:
            golf = _closure1_slot8;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun98414_ip = 323; continue _fun98414 }
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
            if(!tango) { _fun98414_ip = 330; continue _fun98414 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun98415: for(var _fun98415_ip = 0; ; ) switch(_fun98415_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun98415_ip = 56; continue _fun98415 }
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
                    _fun98415_ip = 67; continue _fun98415;
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
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun98416: for(var _fun98416_ip = 0; ; ) switch(_fun98416_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun98416_ip = 23; continue _fun98416 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun98416_ip = 33; continue _fun98416 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun98416_ip = 70; continue _fun98416 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun98416_ip = 55; continue _fun98416 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    golf = function(argFoo) { // Original name: getFirstEligibleUserExperiment
        _fun98417: for(var _fun98417_ip = 0; ; ) switch(_fun98417_ip) {
 0:
            mike = _closure1_slot7;
            golf = undefined;
            entity = argFoo;
            oscar = mike.bind(golf)(entity);
            zulu = oscar.bind(golf)();
            mike = zulu.done;
            entity = null;
            report = zulu;
            if(mike) { _fun98417_ip = 89; continue _fun98417 }
 34:
            tango = report.value;
            zulu = _closure1_slot4;
            mike = zulu.getUserExperimentDescriptor;
            zulu = mike.bind(zulu)(tango);
            if(!(entity == zulu)) { _fun98417_ip = 75; continue _fun98417 }
 58:
            verify = oscar.bind(golf)();
            mike = verify.done;
            report = verify;
            if(mike) { _fun98417_ip = 89; continue _fun98417 }
 73:
            _fun98417_ip = 34; continue _fun98417;
 75:
            mike = new Array(2);
            mike[0] = tango;
            mike[1] = zulu;
            return mike;
 89:
            return entity;
        }
    };
    var _closure1_slot9 = golf;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = options.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = options.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.ExperimentTypes;
    var _closure1_slot5 = options;
    mike = mike.ExperimentBuckets;
    var _closure1_slot6 = mike;
    mike = {};
    mike['getFirstEligibleUserExperiment'] = golf;
    golf = function(argFoo, argBar) { // Original name: isInExperimentBucket
        zulu = _closure1_slot4;
        mike = zulu.getUserExperimentBucket;
        entity = argFoo;
        mike = mike.bind(zulu)(entity);
        entity = argBar;
        entity = mike === entity;
        return entity;
    };
    mike['isInExperimentBucket'] = golf;
    golf = function(argFoo, argBar) { // Original name: experimentDescriptorEquals
        _fun98419: for(var _fun98419_ip = 0; ; ) switch(_fun98419_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            zulu = null;
            if(!(zulu == mike)) { _fun98419_ip = 19; continue _fun98419 }
 12:
            if(!(zulu != entity)) { _fun98419_ip = 220; continue _fun98419 }
 19:
            if(!(mike !== entity)) { _fun98419_ip = 216; continue _fun98419 }
 26:
            if(!(zulu == mike)) { _fun98419_ip = 37; continue _fun98419 }
 30:
            if(!(zulu == entity)) { _fun98419_ip = 212; continue _fun98419 }
 37:
            if(!(zulu != mike)) { _fun98419_ip = 48; continue _fun98419 }
 41:
            if(!(zulu != entity)) { _fun98419_ip = 208; continue _fun98419 }
 48:
            if(!(zulu != mike)) { _fun98419_ip = 146; continue _fun98419 }
 52:
            if(!(zulu != entity)) { _fun98419_ip = 146; continue _fun98419 }
 56:
            tango = mike.type;
            zulu = entity.type;
            if(!(tango === zulu)) { _fun98419_ip = 204; continue _fun98419 }
 73:
            tango = mike.bucket;
            zulu = entity.bucket;
            if(!(tango === zulu)) { _fun98419_ip = 200; continue _fun98419 }
 89:
            tango = mike.revision;
            zulu = entity.revision;
            if(!(tango === zulu)) { _fun98419_ip = 196; continue _fun98419 }
 105:
            report = mike.type;
            tango = _closure1_slot5;
            tango = tango.USER;
            if(!(report === tango)) { _fun98419_ip = 146; continue _fun98419 }
 127:
            report = entity.type;
            tango = _closure1_slot5;
            tango = tango.USER;
            if(!(report !== tango)) { _fun98419_ip = 150; continue _fun98419 }
 146:
            tango = true;
            return tango;
 150:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            zulu = 4;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.isEqual;
            mike = mike.context;
            entity = entity.context;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
 196:
            entity = false;
            return entity;
 200:
            entity = false;
            return entity;
 204:
            entity = false;
            return entity;
 208:
            entity = false;
            return entity;
 212:
            entity = false;
            return entity;
 216:
            entity = true;
            return entity;
 220:
            entity = true;
            return entity;
        }
    };
    mike['experimentDescriptorEquals'] = golf;
    golf = function(argFoo) { // Original name: trackExposureToFirstEligibleUserExperiment
        _fun98420: for(var _fun98420_ip = 0; ; ) switch(_fun98420_ip) {
 0:
            zulu = _closure1_slot9;
            report = undefined;
            entity = argFoo;
            tango = zulu.bind(report)(entity);
            entity = null;
            if(!(entity == tango)) { _fun98420_ip = 25; continue _fun98420 }
 23:
            return report;
 25:
            zulu = _closure1_slot3;
            entity = 2;
            zulu = zulu.bind(report)(tango, entity);
            entity = 0;
            tango = zulu[entity];
            entity = 1;
            entity = zulu[entity];
            zulu = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 3;
            mike = oscar[mike];
            zulu = zulu.bind(report)(mike);
            mike = zulu.trackExposureToExperiment;
            mike = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    mike['trackExposureToFirstEligibleUserExperiment'] = golf;
    tango = function(argFoo) { // Original name: getExperimentBucketName
        _fun98421: for(var _fun98421_ip = 0; ; ) switch(_fun98421_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot6;
            zulu = entity.CONTROL;
            entity = 'Control';
            if(!(report !== zulu)) { _fun98421_ip = 71; continue _fun98421 }
 24:
            mike = _closure1_slot6;
            zulu = mike.NOT_ELIGIBLE;
            mike = 'Not Eligible';
            if(!(report !== zulu)) { _fun98421_ip = 68; continue _fun98421 }
 44:
            zulu = global;
            zulu = zulu.HermesInternal;
            tango = zulu.concat;
            zulu = 'Treatment ';
            mike = tango.bind(zulu)(report);
 68:
            entity = mike;
 71:
            return entity;
        }
    };
    mike['getExperimentBucketName'] = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'utils/ExperimentUtils.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
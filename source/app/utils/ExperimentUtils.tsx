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
            verify = _closure1_slot8;
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
            golf = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
    var _closure1_slot8 = entity;
    golf = function(argFoo) { // Original name: getFirstEligibleUserExperiment
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = _closure1_slot7;
            golf = undefined;
            entity = argFoo;
            oscar = mike.bind(golf)(entity);
            zulu = oscar.bind(golf)();
            mike = zulu.done;
            entity = null;
            report = zulu;
            if(mike) { _fun00008_ip = 89; continue _fun00007 }
 34:
            tango = report.value;
            zulu = _closure1_slot4;
            mike = zulu.getUserExperimentDescriptor;
            zulu = mike.bind(zulu)(tango);
            if(!(entity == zulu)) { _fun00008_ip = 75; continue _fun00007 }
 58:
            verify = oscar.bind(golf)();
            mike = verify.done;
            report = verify;
            if(mike) { _fun00008_ip = 89; continue _fun00007 }
 73:
            _fun00008_ip = 34; continue _fun00007;
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
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            zulu = null;
            if(!(zulu == mike)) { _fun00010_ip = 19; continue _fun00009 }
 12:
            if(!(zulu != entity)) { _fun00010_ip = 220; continue _fun00009 }
 19:
            if(!(mike !== entity)) { _fun00010_ip = 216; continue _fun00009 }
 26:
            if(!(zulu == mike)) { _fun00010_ip = 37; continue _fun00009 }
 30:
            if(!(zulu == entity)) { _fun00010_ip = 212; continue _fun00009 }
 37:
            if(!(zulu != mike)) { _fun00010_ip = 48; continue _fun00009 }
 41:
            if(!(zulu != entity)) { _fun00010_ip = 208; continue _fun00009 }
 48:
            if(!(zulu != mike)) { _fun00010_ip = 146; continue _fun00009 }
 52:
            if(!(zulu != entity)) { _fun00010_ip = 146; continue _fun00009 }
 56:
            tango = mike.type;
            zulu = entity.type;
            if(!(tango === zulu)) { _fun00010_ip = 204; continue _fun00009 }
 73:
            tango = mike.bucket;
            zulu = entity.bucket;
            if(!(tango === zulu)) { _fun00010_ip = 200; continue _fun00009 }
 89:
            tango = mike.revision;
            zulu = entity.revision;
            if(!(tango === zulu)) { _fun00010_ip = 196; continue _fun00009 }
 105:
            report = mike.type;
            tango = _closure1_slot5;
            tango = tango.USER;
            if(!(report === tango)) { _fun00010_ip = 146; continue _fun00009 }
 127:
            report = entity.type;
            tango = _closure1_slot5;
            tango = tango.USER;
            if(!(report !== tango)) { _fun00010_ip = 150; continue _fun00009 }
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
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = _closure1_slot9;
            report = undefined;
            entity = argFoo;
            tango = zulu.bind(report)(entity);
            entity = null;
            if(!(entity == tango)) { _fun00012_ip = 25; continue _fun00011 }
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
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot6;
            zulu = entity.CONTROL;
            entity = 'Control';
            if(!(report !== zulu)) { _fun00014_ip = 71; continue _fun00013 }
 24:
            mike = _closure1_slot6;
            zulu = mike.NOT_ELIGIBLE;
            mike = 'Not Eligible';
            if(!(report !== zulu)) { _fun00014_ip = 68; continue _fun00013 }
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
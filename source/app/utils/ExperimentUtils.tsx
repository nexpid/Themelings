// app/utils/ExperimentUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00002_ip = 55; continue _fun00001 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 323; continue _fun00001 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot8;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golfie = _closure1_slot8;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot7 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    golfie = function(argFoo) { // Original name: getFirstEligibleUserExperiment
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = _closure1_slot7;
            golfie = undefined;
            entity = argFoo;
            oscard = michal.bind(golfie)(entity);
            zuuluu = oscard.bind(golfie)();
            michal = zuuluu.done;
            entity = null;
            report = zuuluu;
            if(michal) { _fun00008_ip = 89; continue _fun00007 }
 34:
            tangon = report.value;
            zuuluu = _closure1_slot4;
            michal = zuuluu.getUserExperimentDescriptor;
            zuuluu = michal.bind(zuuluu)(tangon);
            if(!(entity == zuuluu)) { _fun00008_ip = 75; continue _fun00007 }
 58:
            verify = oscard.bind(golfie)();
            michal = verify.done;
            report = verify;
            if(michal) { _fun00008_ip = 89; continue _fun00007 }
 73:
            _fun00008_ip = 34; continue _fun00007;
 75:
            michal = new Array(2);
            michal[0] = tangon;
            michal[1] = zuuluu;
            return michal;
 89:
            return entity;
        }
    };
    var _closure1_slot9 = golfie;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = option.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = option.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.ExperimentTypes;
    var _closure1_slot5 = option;
    michal = michal.ExperimentBuckets;
    var _closure1_slot6 = michal;
    michal = {};
    michal['getFirstEligibleUserExperiment'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: isInExperimentBucket
        zuuluu = _closure1_slot4;
        michal = zuuluu.getUserExperimentBucket;
        entity = argFoo;
        michal = michal.bind(zuuluu)(entity);
        entity = argBar;
        entity = michal === entity;
        return entity;
    };
    michal['isInExperimentBucket'] = golfie;
    golfie = function(argFoo, argBar) { // Original name: experimentDescriptorEquals
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            zuuluu = null;
            if(!(zuuluu == michal)) { _fun00010_ip = 19; continue _fun00009 }
 12:
            if(!(zuuluu != entity)) { _fun00010_ip = 220; continue _fun00009 }
 19:
            if(!(michal !== entity)) { _fun00010_ip = 216; continue _fun00009 }
 26:
            if(!(zuuluu == michal)) { _fun00010_ip = 37; continue _fun00009 }
 30:
            if(!(zuuluu == entity)) { _fun00010_ip = 212; continue _fun00009 }
 37:
            if(!(zuuluu != michal)) { _fun00010_ip = 48; continue _fun00009 }
 41:
            if(!(zuuluu != entity)) { _fun00010_ip = 208; continue _fun00009 }
 48:
            if(!(zuuluu != michal)) { _fun00010_ip = 146; continue _fun00009 }
 52:
            if(!(zuuluu != entity)) { _fun00010_ip = 146; continue _fun00009 }
 56:
            tangon = michal.type;
            zuuluu = entity.type;
            if(!(tangon === zuuluu)) { _fun00010_ip = 204; continue _fun00009 }
 73:
            tangon = michal.bucket;
            zuuluu = entity.bucket;
            if(!(tangon === zuuluu)) { _fun00010_ip = 200; continue _fun00009 }
 89:
            tangon = michal.revision;
            zuuluu = entity.revision;
            if(!(tangon === zuuluu)) { _fun00010_ip = 196; continue _fun00009 }
 105:
            report = michal.type;
            tangon = _closure1_slot5;
            tangon = tangon.USER;
            if(!(report === tangon)) { _fun00010_ip = 146; continue _fun00009 }
 127:
            report = entity.type;
            tangon = _closure1_slot5;
            tangon = tangon.USER;
            if(!(report !== tangon)) { _fun00010_ip = 150; continue _fun00009 }
 146:
            tangon = true;
            return tangon;
 150:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            zuuluu = 4;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            tangon = report.bind(zuuluu)(tangon);
            zuuluu = tangon.isEqual;
            michal = michal.context;
            entity = entity.context;
            entity = zuuluu.bind(tangon)(michal, entity);
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
    michal['experimentDescriptorEquals'] = golfie;
    golfie = function(argFoo) { // Original name: trackExposureToFirstEligibleUserExperiment
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot9;
            report = undefined;
            entity = argFoo;
            tangon = zuuluu.bind(report)(entity);
            entity = null;
            if(!(entity == tangon)) { _fun00012_ip = 25; continue _fun00011 }
 23:
            return report;
 25:
            zuuluu = _closure1_slot3;
            entity = 2;
            zuuluu = zuuluu.bind(report)(tangon, entity);
            entity = 0;
            tangon = zuuluu[entity];
            entity = 1;
            entity = zuuluu[entity];
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 3;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.trackExposureToExperiment;
            michal = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    michal['trackExposureToFirstEligibleUserExperiment'] = golfie;
    tangon = function(argFoo) { // Original name: getExperimentBucketName
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            report = argFoo;
            entity = _closure1_slot6;
            zuuluu = entity.CONTROL;
            entity = 'Control';
            if(!(report !== zuuluu)) { _fun00014_ip = 71; continue _fun00013 }
 24:
            michal = _closure1_slot6;
            zuuluu = michal.NOT_ELIGIBLE;
            michal = 'Not Eligible';
            if(!(report !== zuuluu)) { _fun00014_ip = 68; continue _fun00013 }
 44:
            zuuluu = global;
            zuuluu = zuuluu.HermesInternal;
            tangon = zuuluu.concat;
            zuuluu = 'Treatment ';
            michal = tangon.bind(zuuluu)(report);
 68:
            entity = michal;
 71:
            return entity;
        }
    };
    michal['getExperimentBucketName'] = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'utils/ExperimentUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
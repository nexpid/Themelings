// app/modules/experiments/apex/ApexExperimentStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
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
            verify = _closure1_slot16;
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
            golfie = _closure1_slot16;
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
    var _closure1_slot15 = entity;
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
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 72: // try_end0
            _fun00008_ip = 76; continue _fun00007;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo) { // Original name: getHash
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot14;
            entity = entity[tangon];
            michal = null;
            if(!(michal == entity)) { _fun00010_ip = 64; continue _fun00009 }
 20:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            michal = 9;
            report = report[michal];
            michal = undefined;
            report = oscard.bind(michal)(report);
            michal = report.v3;
            michal = michal.bind(report)(tangon);
            zuuluu = _closure1_slot14;
            zuuluu[tangon] = michal;
            entity = michal;
 64:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UnitType;
    option = tangon.User;
    tangon = new Array(1);
    tangon[0] = option;
    var _closure1_slot11 = tangon;
    tangon = {};
    option = {};
    tangon['user'] = option;
    option = {};
    tangon['guild'] = option;
    var _closure1_slot12 = tangon;
    tangon = {};
    var _closure1_slot13 = tangon;
    tangon = {};
    var _closure1_slot14 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: ApexExperimentStore
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscard = this;
                entity = _closure1_slot4;
                tangon = _closure2_slot0;
                report = undefined;
                entity = entity.bind(report)(oscard, tangon);
                verify = _closure1_slot1;
                option = _closure1_slot2;
                entity = 10;
                golfie = option[entity];
                golfie = verify.bind(report)(golfie);
                yankee = new Array(3);
                yankee[0] = golfie;
                golfie = {};
                verify = function(argFoo) { // Original name: CONNECTION_OPEN
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.processExperimentsMessage;
                    entity = argFoo;
                    entity = entity.apexExperiments;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['CONNECTION_OPEN'] = verify;
                verify = function(argFoo) { // Original name: CONNECTION_OPEN_STATE_UPDATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.processExperimentsMessage;
                    entity = argFoo;
                    entity = entity.apexExperiments;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['CONNECTION_OPEN_STATE_UPDATE'] = verify;
                yankee[1] = golfie;
                golfie = _closure1_slot0;
                entity = option[entity];
                entity = golfie.bind(report)(entity);
                entity = entity.DispatchBand;
                entity = entity.Early;
                yankee[2] = entity;
                entity = _closure1_slot7;
                offset = entity.bind(report)(tangon);
                tangon = _closure1_slot6;
                entity = _closure1_slot17;
                entity = entity.bind(report)();
                if(entity) { _fun00012_ip = 151; continue _fun00011 }
 138:
                entity = offset.apply;
                entity = entity.bind(offset)(oscard, yankee);
                _fun00012_ip = 185; continue _fun00011;
 151:
                golfie = global;
                verify = golfie.Reflect;
                option = verify.construct;
                golfie = _closure1_slot7;
                golfie = golfie.bind(report)(oscard);
                golfie = golfie.constructor;
                entity = option.bind(verify)(offset, yankee, golfie);
 185:
                entity = tangon.bind(report)(oscard, entity);
                var _closure3_slot0 = entity;
                michal = _closure1_slot18;
                entity['getHash'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot8;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot5;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = this;
            michal = zuuluu.waitFor;
            entity = _closure1_slot9;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(8);
        entity[0] = report;
        report = {};
        golfie = 'processExperimentsMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                echoed = argFoo;
                result = null;
                if(!(result != echoed)) { _fun00014_ip = 504; continue _fun00013 }
 12:
                sizing = _closure1_slot11;
                entity = sizing.length;
                kiloes = 0;
                michal = kiloes < entity;
                entity = undefined;
                backup = 8;
                foxtra = 3;
                romeon = 1;
                yankee = 2;
                offset = 0;
                verify = undefined;
                option = undefined;
                golfie = undefined;
                oscard = undefined;
                report = undefined;
                tangon = undefined;
                zuuluu = undefined;
                if(!michal) { _fun00014_ip = 502; continue _fun00013 }
 66:
                update = sizing[offset];
                source = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[backup];
                michal = source.bind(entity)(michal);
                michal = michal.UnitTypeToKind;
                cntext = michal[update];
                michal = echoed.assignments;
                variable42 = michal[update];
                record = verify;
                config = option;
                sequen = golfie;
                vacuum = oscard;
                ctrled = report;
                source = tangon;
                update = zuuluu;
                if(!(result != variable42)) { _fun00014_ip = 466; continue _fun00013 }
 135:
                record = verify;
                config = option;
                sequen = golfie;
                vacuum = oscard;
                ctrled = report;
                source = tangon;
                update = zuuluu;
                if(!(result != cntext)) { _fun00014_ip = 466; continue _fun00013 }
 163:
                michal = _closure1_slot12;
                variable41 = michal[cntext];
                variable39 = variable42;
                quebec = option;
                equals = golfie;
                whisks = oscard;
                limora = report;
                sierra = tangon;
                status = zuuluu;
                record = variable41;
                config = quebec;
                sequen = equals;
                vacuum = whisks;
                ctrled = limora;
                source = sierra;
                update = status;
                for(variable36 in variable39)
 224:
                {
                    config = quebec;
                    sequen = equals;
                    vacuum = whisks;
                    record = variable41;
                    ctrled = limora;
                    source = sierra;
                    update = status;
 257:
                    michal = variable36;
                    cntext = variable42[michal];
                    papara = cntext.evaluation_id;
                    cntext = cntext.assignments;
                    target = {};
                    target['evaluationId'] = papara;
                    papara = {};
                    target['assignments'] = papara;
                    variable41[michal] = target;
                    michal = _closure1_slot15;
                    papara = michal.bind(entity)(cntext);
                    cntext = papara.bind(entity)();
                    michal = cntext.done;
                    quebec = target;
                    equals = cntext;
                    whisks = papara;
                    cntext = equals;
                    if(michal) { _fun00014_ip = 224; continue _fun00013 }
 329:
                    variable43 = cntext.value;
                    michal = _closure1_slot3;
                    michal = michal.bind(entity)(variable43, foxtra);
                    limora = michal[kiloes];
                    sierra = michal[romeon];
                    status = michal[yankee];
                    if(!(status == result)) { _fun00014_ip = 362; continue _fun00013 }
 360:
                    status = 0;
 362:
                    variable43 = target.assignments;
                    michal = {};
                    michal['hashedId'] = limora;
                    michal['variantId'] = sierra;
                    variable45 = _closure1_slot0;
                    variable44 = _closure1_slot2;
                    variable44 = variable44[backup];
                    variable44 = variable45.bind(entity)(variable44);
                    variable44 = variable44.ExperimentFlags;
                    variable44 = variable44.IsOverride;
                    variable44 = status & variable44;
                    variable44 = !variable44;
                    variable44 = !variable44;
                    michal['isServerOverride'] = variable44;
                    variable43[limora] = michal;
                    variable43 = papara.bind(entity)();
                    michal = variable43.done;
                    quebec = target;
                    equals = variable43;
                    whisks = papara;
                    cntext = equals;
                    if(michal) { _fun00014_ip = 224; continue _fun00013 }
 461:
                    _fun00014_ip = 329; continue _fun00013;
                }
 466:
                offset = offset + 1;
                michal = sizing.length;
                verify = record;
                option = config;
                golfie = sequen;
                oscard = vacuum;
                report = ctrled;
                tangon = source;
                zuuluu = update;
                if(offset < michal) { _fun00014_ip = 66; continue _fun00013 }
 502:
                return entity;
 504:
                entity = false;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'registerExperiment';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            michal = _closure1_slot13;
            entity = zuuluu.name;
            michal[entity] = zuuluu;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getAssignment';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                tangon = _closure1_slot18;
                zuuluu = undefined;
                michal = argBaz;
                michal = tangon.bind(zuuluu)(michal);
                tangon = _closure1_slot12;
                entity = argFoo;
                tangon = tangon[entity];
                entity = argBar;
                entity = tangon[entity];
                tangon = null;
                if(!(tangon == entity)) { _fun00016_ip = 43; continue _fun00015 }
 41:
                return zuuluu;
 43:
                entity = entity.assignments;
                entity = entity[michal];
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getEvaluation';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = _closure1_slot12;
                entity = argFoo;
                michal = michal[entity];
                entity = argBar;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00018_ip = 38; continue _fun00017 }
 32:
                entity = michal.evaluationId;
 38:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getEvaluationAndAssignment';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = _closure1_slot12;
                entity = argFoo;
                michal = michal[entity];
                entity = argBar;
                michal = michal[entity];
                entity = null;
                if(!(entity != michal)) { _fun00020_ip = 60; continue _fun00019 }
 27:
                zuuluu = michal.evaluationId;
                entity = new Array(2);
                entity[0] = zuuluu;
                zuuluu = michal.assignments;
                michal = argBaz;
                michal = zuuluu[michal];
                entity[1] = michal;
                _fun00020_ip = 77; continue _fun00019;
 60:
                michal = new Array(2);
                zuuluu = undefined;
                michal[0] = zuuluu;
                michal[1] = zuuluu;
                entity = michal;
 77:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'trackEvaluationExposure';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor) { // Original name: value
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 11;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot10;
            zuuluu = michal.EXPERIMENT_USER_EVALUATION_EXPOSED;
            michal = {};
            oscard = argFoo;
            michal['evaluation'] = oscard;
            oscard = argBaz;
            michal['experiment'] = oscard;
            oscard = argCor;
            michal['exposure_location'] = oscard;
            oscard = argBar;
            michal['unit_type'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'resetForTests';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = {};
            entity = {};
            michal['user'] = entity;
            entity = {};
            michal['guild'] = entity;
            _closure1_slot12 = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[7] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = 'ApexExperimentStore';
    michal['displayName'] = tangon;
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 13;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/apex/ApexExperimentStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
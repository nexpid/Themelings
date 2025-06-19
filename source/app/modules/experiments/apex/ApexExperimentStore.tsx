// app/modules/experiments/apex/ApexExperimentStore.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
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
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
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
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot21;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot21;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
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
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot20 = entity;
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
    var _closure1_slot21 = entity;
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
 70: // try_end0
            _fun00008_ip = 74; continue _fun00007;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot22 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot22 = entity;
    entity = function(argFoo) { // Original name: _getHash
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = _closure1_slot19;
            entity = entity[tangon];
            michal = null;
            if(!(michal == entity)) { _fun00010_ip = 64; continue _fun00009 }
 20:
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            michal = 11;
            report = report[michal];
            michal = undefined;
            report = oscard.bind(michal)(report);
            michal = report.v3;
            michal = michal.bind(report)(tangon);
            zuuluu = _closure1_slot19;
            zuuluu[tangon] = michal;
            entity = michal;
 64:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    verify = 7;
    tangon = oscard[verify];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    golfie = option.bind(entity)(tangon);
    tangon = golfie.prototype;
    offset = Object.create(tangon, {constructor: {value: golfie}});
    tangon = 'ApexExperimentStore';
    backup = offset;
    foxtra = tangon;
    golfie = new backup[golfie](foxtra, romeon);
    golfie = golfie instanceof Object ? golfie : offset;
    var _closure1_slot11 = golfie;
    golfie = 9;
    golfie = oscard[golfie];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.UnitType;
    offset = golfie.User;
    golfie = new Array(1);
    golfie[0] = offset;
    var _closure1_slot12 = golfie;
    golfie = {};
    offset = {};
    golfie['user'] = offset;
    offset = {};
    golfie['guild'] = offset;
    var _closure1_slot13 = golfie;
    golfie = {};
    var _closure1_slot14 = golfie;
    golfie = {};
    var _closure1_slot15 = golfie;
    golfie = {};
    var _closure1_slot16 = golfie;
    golfie = 10;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.Millis;
    golfie = golfie.DAY;
    golfie = verify * golfie;
    var _closure1_slot17 = golfie;
    golfie = {};
    var _closure1_slot18 = golfie;
    golfie = {};
    var _closure1_slot19 = golfie;
    golfie = 16;
    golfie = oscard[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: ApexExperimentStore
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                report = this;
                entity = _closure1_slot4;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(report, zuuluu);
                verify = _closure1_slot1;
                option = _closure1_slot2;
                entity = 12;
                golfie = option[entity];
                golfie = verify.bind(tangon)(golfie);
                offset = new Array(3);
                offset[0] = golfie;
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
                verify = function(argFoo) { // Original name: APEX_EXPERIMENT_OVERRIDE_CREATE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleApexExperimentOverrideCreate;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['APEX_EXPERIMENT_OVERRIDE_CREATE'] = verify;
                verify = function(argFoo) { // Original name: APEX_EXPERIMENT_OVERRIDE_DELETE
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleApexExperimentOverrideDelete;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['APEX_EXPERIMENT_OVERRIDE_DELETE'] = verify;
                verify = function() { // Original name: APEX_EXPERIMENT_OVERRIDE_CLEAR
                    michal = _closure3_slot0;
                    entity = michal.clearAllOverrides;
                    entity = entity.bind(michal)();
                    return entity;
                };
                golfie['APEX_EXPERIMENT_OVERRIDE_CLEAR'] = verify;
                verify = function() { // Original name: APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS
                    michal = _closure3_slot0;
                    entity = michal.clearAllServerAssignments;
                    entity = entity.bind(michal)();
                    return entity;
                };
                golfie['APEX_EXPERIMENT_CLEAR_SERVER_ASSIGNMENTS'] = verify;
                verify = function(argFoo) { // Original name: LOGOUT
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.handleLogout;
                    entity = argFoo;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                golfie['LOGOUT'] = verify;
                offset[1] = golfie;
                golfie = _closure1_slot0;
                entity = option[entity];
                entity = golfie.bind(tangon)(entity);
                entity = entity.DispatchBand;
                entity = entity.Early;
                offset[2] = entity;
                entity = _closure1_slot7;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot6;
                entity = _closure1_slot22;
                entity = entity.bind(tangon)();
                if(entity) { _fun00012_ip = 205; continue _fun00011 }
 192:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00012_ip = 239; continue _fun00011;
 205:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot7;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 239:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
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
        entity = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = argFoo;
                tangon = this;
                report = tangon.waitFor;
                michal = _closure1_slot9;
                michal = report.bind(tangon)(michal);
                michal = null;
                michal = michal != entity;
                if(!michal) { _fun00014_ip = 46; continue _fun00013 }
 33:
                oscard = entity.version;
                report = 1;
                michal = report === oscard;
 46:
                if(!michal) { _fun00014_ip = 69; continue _fun00013 }
 49:
                michal = entity.clientOverrides;
                _closure1_slot15 = michal;
                entity = entity.evaluatedExperiments;
                _closure1_slot13 = entity;
 69:
                report = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                report = report.bind(entity)(michal);
                michal = report.getBuildOverrideExperiments;
                offset = michal.bind(report)();
                michal = {};
                _closure1_slot16 = michal;
                option = offset;
                michal = true;
                for(report in option)
 120:
                {
 129:
                    backup = report;
                    yankee = _closure1_slot23;
                    foxtra = yankee.bind(entity)(backup);
                    romeon = _closure1_slot16;
                    yankee = {};
                    yankee['hashedName'] = foxtra;
                    backup = offset[backup];
                    yankee['variantId'] = backup;
                    yankee['isOverride'] = michal;
                    romeon[foxtra] = yankee;
                    _fun00014_ip = 120; continue _fun00013;
                }
 172:
                michal = tangon.loadTrackedExposures;
                michal = michal.bind(tangon)();
                _closure1_slot18 = michal;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(20);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            michal = 1;
            entity['version'] = michal;
            zuuluu = _closure1_slot13;
            entity['evaluatedExperiments'] = zuuluu;
            michal = _closure1_slot15;
            entity['clientOverrides'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'processExperimentsMessage';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                source = argFoo;
                update = null;
                if(!(update != source)) { _fun00016_ip = 530; continue _fun00015 }
 12:
                result = _closure1_slot12;
                entity = result.length;
                output = 0;
                michal = output < entity;
                entity = undefined;
                sizing = 9;
                kiloes = 4;
                backup = 1;
                foxtra = 2;
                romeon = 3;
                yankee = 0;
                offset = undefined;
                verify = undefined;
                option = undefined;
                golfie = undefined;
                oscard = undefined;
                report = undefined;
                tangon = undefined;
                zuuluu = undefined;
                if(!michal) { _fun00016_ip = 528; continue _fun00015 }
 71:
                ctrled = result[yankee];
                vacuum = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[sizing];
                michal = vacuum.bind(entity)(michal);
                michal = michal.UnitTypeToKind;
                status = michal[ctrled];
                michal = source.assignments;
                variable46 = michal[ctrled];
                target = offset;
                papara = verify;
                cntext = option;
                record = golfie;
                config = oscard;
                sequen = report;
                vacuum = tangon;
                ctrled = zuuluu;
                if(!(update != variable46)) { _fun00016_ip = 489; continue _fun00015 }
 143:
                target = offset;
                papara = verify;
                cntext = option;
                record = golfie;
                config = oscard;
                sequen = report;
                vacuum = tangon;
                ctrled = zuuluu;
                if(!(update != status)) { _fun00016_ip = 489; continue _fun00015 }
 174:
                michal = _closure1_slot13;
                variable45 = michal[status];
                variable43 = variable46;
                variable39 = verify;
                variable38 = option;
                variable37 = golfie;
                variable36 = oscard;
                quebec = report;
                equals = tangon;
                whisks = zuuluu;
                target = variable45;
                papara = variable39;
                cntext = variable38;
                record = variable37;
                config = variable36;
                sequen = quebec;
                vacuum = equals;
                ctrled = whisks;
                for(variable40 in variable43)
 241:
                {
                    papara = variable39;
                    cntext = variable38;
                    record = variable37;
                    target = variable45;
                    config = variable36;
                    sequen = quebec;
                    vacuum = equals;
                    ctrled = whisks;
 277:
                    michal = variable40;
                    status = variable46[michal];
                    sierra = status.evaluation_id;
                    status = status.assignments;
                    limora = {};
                    limora['evaluationId'] = sierra;
                    sierra = {};
                    limora['assignments'] = sierra;
                    variable45[michal] = limora;
                    michal = _closure1_slot20;
                    sierra = michal.bind(entity)(status);
                    status = sierra.bind(entity)();
                    michal = status.done;
                    variable39 = limora;
                    variable38 = status;
                    variable37 = sierra;
                    status = variable38;
                    if(michal) { _fun00016_ip = 241; continue _fun00015 }
 349:
                    variable47 = status.value;
                    michal = _closure1_slot3;
                    michal = michal.bind(entity)(variable47, kiloes);
                    variable36 = michal[output];
                    quebec = michal[backup];
                    equals = michal[foxtra];
                    whisks = michal[romeon];
                    if(!(equals == update)) { _fun00016_ip = 386; continue _fun00015 }
 384:
                    equals = 0;
 386:
                    variable47 = limora.assignments;
                    michal = {};
                    michal['hashedName'] = variable36;
                    michal['variantId'] = quebec;
                    variable49 = _closure1_slot0;
                    variable48 = _closure1_slot2;
                    variable48 = variable48[sizing];
                    variable48 = variable49.bind(entity)(variable48);
                    variable48 = variable48.ExperimentFlags;
                    variable48 = variable48.IsOverride;
                    variable48 = equals & variable48;
                    variable48 = !variable48;
                    variable48 = !variable48;
                    michal['isOverride'] = variable48;
                    michal['revision'] = whisks;
                    variable47[variable36] = michal;
                    variable47 = sierra.bind(entity)();
                    michal = variable47.done;
                    variable39 = limora;
                    variable38 = variable47;
                    variable37 = sierra;
                    status = variable38;
                    if(michal) { _fun00016_ip = 241; continue _fun00015 }
 484:
                    _fun00016_ip = 349; continue _fun00015;
                }
 489:
                yankee = yankee + 1;
                michal = result.length;
                offset = target;
                verify = papara;
                option = cntext;
                golfie = record;
                oscard = config;
                report = sequen;
                tangon = vacuum;
                zuuluu = ctrled;
                if(yankee < michal) { _fun00016_ip = 71; continue _fun00015 }
 528:
                return entity;
 530:
                entity = false;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handleApexExperimentOverrideCreate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = argFoo;
            zuuluu = _closure1_slot15;
            michal = tangon.hashedName;
            entity = {};
            report = tangon.hashedName;
            entity['hashedName'] = report;
            tangon = tangon.variantId;
            entity['variantId'] = tangon;
            tangon = true;
            entity['isOverride'] = tangon;
            zuuluu[michal] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleApexExperimentOverrideDelete';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot15;
            entity = argFoo;
            entity = entity.hashedName;
            entity = delete michal[entity];
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'handleLogout';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                zuuluu = this;
                entity = argFoo;
                entity = entity.isSwitchingAccount;
                if(entity) { _fun00018_ip = 25; continue _fun00017 }
 15:
                entity = zuuluu.clearAllServerAssignments;
                entity = entity.bind(zuuluu)();
 25:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                michal = tangon.bind(entity)(michal);
                report = michal.Storage;
                tangon = report.remove;
                michal = 'apexTrackedExposures';
                michal = tangon.bind(report)(michal);
                michal = zuuluu.clearAllTrackedExposures;
                michal = michal.bind(zuuluu)();
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'registerExperiment';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = argFoo;
            michal = _closure1_slot14;
            entity = zuuluu.name;
            michal[entity] = zuuluu;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getAssignment';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tangon = _closure1_slot23;
                michal = undefined;
                entity = argBaz;
                tangon = tangon.bind(michal)(entity);
                entity = _closure1_slot15;
                entity = entity[tangon];
                report = null;
                if(!(report == entity)) { _fun00020_ip = 39; continue _fun00019 }
 31:
                oscard = _closure1_slot16;
                entity = oscard[tangon];
 39:
                if(!(report == entity)) { _fun00020_ip = 82; continue _fun00019 }
 43:
                oscard = _closure1_slot13;
                zuuluu = argFoo;
                oscard = oscard[zuuluu];
                zuuluu = argBar;
                zuuluu = oscard[zuuluu];
                report = report != zuuluu;
                michal = undefined;
                if(!report) { _fun00020_ip = 80; continue _fun00019 }
 70:
                zuuluu = zuuluu.assignments;
                michal = zuuluu[tangon];
 80:
                return michal;
 82:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getEvaluation';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = _closure1_slot13;
                entity = argFoo;
                michal = michal[entity];
                entity = argBar;
                michal = michal[entity];
                entity = null;
                zuuluu = entity == michal;
                entity = undefined;
                if(zuuluu) { _fun00022_ip = 38; continue _fun00021 }
 32:
                entity = michal.evaluationId;
 38:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'getEvaluationAndAssignment';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                tangon = argBaz;
                entity = _closure1_slot15;
                michal = entity[tangon];
                entity = null;
                if(!(entity == michal)) { _fun00024_ip = 28; continue _fun00023 }
 20:
                report = _closure1_slot16;
                michal = report[tangon];
 28:
                if(!(entity == michal)) { _fun00024_ip = 103; continue _fun00023 }
 32:
                report = _closure1_slot13;
                zuuluu = argFoo;
                report = report[zuuluu];
                zuuluu = argBar;
                zuuluu = report[zuuluu];
                if(!(entity != zuuluu)) { _fun00024_ip = 84; continue _fun00023 }
 54:
                report = zuuluu.evaluationId;
                entity = new Array(2);
                entity[0] = report;
                zuuluu = zuuluu.assignments;
                zuuluu = zuuluu[tangon];
                entity[1] = zuuluu;
                _fun00024_ip = 101; continue _fun00023;
 84:
                zuuluu = new Array(2);
                tangon = undefined;
                zuuluu[0] = tangon;
                zuuluu[1] = tangon;
                entity = zuuluu;
 101:
                return entity;
 103:
                entity = new Array(2);
                zuuluu = undefined;
                entity[0] = zuuluu;
                entity[1] = michal;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[9] = report;
        report = {};
        golfie = 'trackExperimentExposure';
        report['key'] = golfie;
        golfie = function(argFoo, argBar, argBaz, argCor, argGra, argFre) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                romeon = argBar;
                yankee = argBaz;
                offset = argCor;
                tangon = this;
                oscard = _closure1_slot23;
                zuuluu = global;
                entity = zuuluu.HermesInternal;
                verify = entity.concat;
                source = '';
                golfie = '|';
                result = argGra;
                sizing = argFre;
                update = romeon;
                echoed = golfie;
                output = golfie;
                kiloes = golfie;
                backup = yankee;
                report = source[verify](update, echoed, result, output, sizing, kiloes, backup, foxtra);
                entity = undefined;
                oscard = oscard.bind(entity)(report);
                report = tangon.shouldTrackExposure;
                report = report.bind(tangon)(oscard);
                if(!report) { _fun00026_ip = 94; continue _fun00025 }
 86:
                golfie = 'user';
                report = golfie === offset;
 94:
                if(!report) { _fun00026_ip = 201; continue _fun00025 }
 97:
                golfie = _closure1_slot1;
                option = _closure1_slot2;
                report = 15;
                report = option[report];
                verify = golfie.bind(entity)(report);
                option = verify.track;
                report = _closure1_slot10;
                golfie = report.EXPERIMENT_USER_EVALUATION_EXPOSED;
                report = {};
                foxtra = argFoo;
                report['evaluation'] = foxtra;
                report['experiment'] = romeon;
                report['exposure_location'] = yankee;
                report['unit_type'] = offset;
                report = option.bind(verify)(golfie, report);
                report = _closure1_slot18;
                golfie = zuuluu.Date;
                zuuluu = golfie.now;
                zuuluu = zuuluu.bind(golfie)();
                report[oscard] = zuuluu;
                zuuluu = tangon.saveTrackedExposures;
                michal = _closure1_slot18;
                michal = zuuluu.bind(tangon)(michal);
 201:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[10] = report;
        report = {};
        golfie = 'trackCommonTriggerPointExposures';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                romeon = argFoo;
                yankee = this;
                zuuluu = _closure1_slot20;
                entity = yankee.evaluationIds;
                verify = 'user';
                michal = entity.bind(yankee)(verify);
                entity = undefined;
                option = zuuluu.bind(entity)(michal);
                zuuluu = option.bind(entity)();
                michal = zuuluu.done;
                golfie = 15;
                oscard = global;
                report = '';
                tangon = '|';
                if(michal) { _fun00028_ip = 222; continue _fun00027 }
 65:
                output = zuuluu.value;
                foxtra = _closure1_slot23;
                michal = oscard.HermesInternal;
                michal = michal.concat;
                michal = michal.bind(report)(output, tangon, romeon);
                backup = foxtra.bind(entity)(michal);
                michal = yankee.shouldTrackExposure;
                michal = michal.bind(yankee)(backup);
                if(!michal) { _fun00028_ip = 204; continue _fun00027 }
 111:
                foxtra = _closure1_slot1;
                michal = _closure1_slot2;
                michal = michal[golfie];
                sizing = foxtra.bind(entity)(michal);
                kiloes = sizing.track;
                michal = _closure1_slot10;
                foxtra = michal.EXPERIMENT_USER_EVALUATION_EXPOSED;
                michal = {};
                michal['evaluation'] = output;
                michal['exposure_location'] = romeon;
                michal['unit_type'] = verify;
                michal = kiloes.bind(sizing)(foxtra, michal);
                foxtra = _closure1_slot18;
                kiloes = oscard.Date;
                michal = kiloes.now;
                michal = michal.bind(kiloes)();
                foxtra[backup] = michal;
                foxtra = yankee.saveTrackedExposures;
                michal = _closure1_slot18;
                michal = foxtra.bind(yankee)(michal);
 204:
                foxtra = option.bind(entity)();
                michal = foxtra.done;
                zuuluu = foxtra;
                if(!michal) { _fun00028_ip = 65; continue _fun00027 }
 222:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[11] = report;
        report = {};
        golfie = 'evaluationIds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            entity = global;
            zuuluu = entity.Object;
            michal = zuuluu.values;
            tangon = _closure1_slot13;
            entity = argFoo;
            entity = tangon[entity];
            zuuluu = michal.bind(zuuluu)(entity);
            michal = zuuluu.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.evaluationId;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[12] = report;
        report = {};
        golfie = 'shouldTrackExposure';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zuuluu = _closure1_slot18;
                entity = argFoo;
                tangon = zuuluu[entity];
                entity = null;
                entity = entity == tangon;
                if(entity) { _fun00030_ip = 52; continue _fun00029 }
 23:
                zuuluu = global;
                report = zuuluu.Date;
                zuuluu = report.now;
                zuuluu = zuuluu.bind(report)();
                zuuluu = zuuluu - tangon;
                michal = _closure1_slot17;
                entity = zuuluu > michal;
 52:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[13] = report;
        report = {};
        golfie = 'loadTrackedExposures';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                zuuluu = this;
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                entity = tangon.bind(entity)(michal);
                tangon = entity.Storage;
                michal = tangon.get;
                entity = 'apexTrackedExposures';
                entity = michal.bind(tangon)(entity);
                michal = null;
                if(!(michal != entity)) { _fun00032_ip = 162; continue _fun00031 }
 56:
                tangon = entity.version;
                michal = 1;
                if(!(michal === tangon)) { _fun00032_ip = 162; continue _fun00031 }
 69:
                entity = entity.exposures;
                michal = global;
                tangon = michal.Date;
                michal = tangon.now;
                yankee = michal.bind(tangon)();
                verify = entity;
                tangon = false;
                michal = false;
                for(oscard in verify)
 107:
                {
                    michal = tangon;
 119:
                    foxtra = oscard;
                    backup = entity[foxtra];
                    kiloes = yankee - backup;
                    backup = _closure1_slot17;
                    if(!(kiloes > backup)) { _fun00032_ip = 107; continue _fun00031 }
 138:
                    foxtra = delete entity[foxtra];
                    tangon = true;
                    _fun00032_ip = 107; continue _fun00031;
                }
 146:
                if(!michal) { _fun00032_ip = 160; continue _fun00031 }
 149:
                michal = zuuluu.saveTrackedExposures;
                michal = michal.bind(zuuluu)(entity);
 160:
                return entity;
 162:
                entity = {};
                return entity;
            }
        };
        report['value'] = golfie;
        entity[14] = report;
        report = {};
        golfie = 'saveTrackedExposures';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = argFoo;
 3: // try_start_0
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 14;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                tangon = michal.Storage;
                zuuluu = tangon.set;
                michal = {};
                report = 1;
                michal['version'] = report;
                michal['exposures'] = entity;
                entity = 'apexTrackedExposures';
                entity = zuuluu.bind(tangon)(entity, michal);
 66: // try_end0
                _fun00034_ip = 151; continue _fun00033;
 68: // catch_target0
                CatchBlockStart(arg_register=4);
                tangon = _closure1_slot11;
                zuuluu = tangon.error;
                michal = 'Error saving tracked exposures';
                michal = zuuluu.bind(tangon)(michal, report);
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 15;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.track;
                entity = _closure1_slot10;
                michal = entity.EXPERIMENT_SAVE_EXPOSURE_FAILED;
                entity = {'module': 'discord_app', 'call': 'ApexExperimentStore.saveTrackedExposures'};
                entity = zuuluu.bind(tangon)(michal, entity);
 151:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[15] = report;
        report = {};
        golfie = 'clearAllServerAssignments';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = {};
            entity = {};
            michal['user'] = entity;
            entity = {};
            michal['guild'] = entity;
            _closure1_slot13 = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[16] = report;
        report = {};
        golfie = 'clearAllOverrides';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            _closure1_slot15 = entity;
            entity = {};
            _closure1_slot16 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[17] = report;
        report = {};
        golfie = 'clearAllTrackedExposures';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            _closure1_slot18 = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[18] = report;
        report = {};
        golfie = 'getHash';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot23;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        report['value'] = oscard;
        entity[19] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(golfie);
    michal['displayName'] = tangon;
    michal['persistKey'] = tangon;
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    backup = tangon;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 17;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/experiments/apex/ApexExperimentStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
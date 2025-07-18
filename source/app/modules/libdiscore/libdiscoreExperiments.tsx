// app/modules/libdiscore/libdiscoreExperiments.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    oscard = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = oscard;
    var _closure1_slot2 = verify;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot4;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot3;
            entity = _closure1_slot11;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot4;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    tangon = global;
    offset = tangon.Object;
    golfie = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = verify[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = verify[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = verify[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = verify[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = verify[report];
    report = oscard.bind(entity)(report);
    var _closure1_slot7 = report;
    oscard = new Array(0);
    var _closure1_slot8 = oscard;
    report = tangon.Symbol;
    tangon = 'unknown';
    tangon = report.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = function() {
        tangon = _closure1_slot7;
        zuuluu = function(argFoo) { // Original name: LibdiscoreCachedExperiment
            tangon = this;
            report = _closure1_slot6;
            zuuluu = _closure2_slot0;
            entity = undefined;
            zuuluu = report.bind(entity)(tangon, zuuluu);
            zuuluu = argFoo;
            tangon['id'] = zuuluu;
            zuuluu = null;
            tangon['inner'] = zuuluu;
            zuuluu = _closure1_slot9;
            tangon['cachedConfig'] = zuuluu;
            zuuluu = _closure1_slot8;
            michal = zuuluu.push;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'getCachedConfig';
        entity['key'] = michal;
        michal = function() { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = this;
                tangon = entity.cachedConfig;
                zuuluu = _closure1_slot9;
                if(!(tangon === zuuluu)) { _fun00006_ip = 112; continue _fun00005 }
 20:
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot2;
                report = 5;
                zuuluu = zuuluu[report];
                tangon = undefined;
                oscard = oscard.bind(tangon)(zuuluu);
                zuuluu = oscard.isLibdiscoreLoaded;
                zuuluu = zuuluu.bind(oscard)();
                if(zuuluu) { _fun00006_ip = 63; continue _fun00005 }
 55:
                entity['cachedConfig'] = tangon;
                _fun00006_ip = 112; continue _fun00005;
 63:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                michal = michal[report];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.getExperimentCacher;
                tangon = michal.bind(zuuluu)();
                zuuluu = tangon.getConfig;
                michal = entity.id;
                michal = zuuluu.bind(tangon)(michal);
                entity['cachedConfig'] = michal;
 112:
                entity = entity.cachedConfig;
                return entity;
            }
        };
        entity['value'] = michal;
        michal = new Array(3);
        michal[0] = entity;
        entity = {};
        oscard = 'setExperiment';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['inner'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'getCurrentConfig';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 6;
            michal = tangon[michal];
            report = undefined;
            tangon = zuuluu.bind(report)(michal);
            zuuluu = entity.inner;
            michal = null;
            zuuluu = michal != zuuluu;
            michal = 'experiment must be set before calling getCurrentConfig';
            michal = tangon.bind(report)(zuuluu, michal);
            zuuluu = entity.inner;
            michal = zuuluu.getCurrentConfig;
            entity = {};
            tangon = 'default';
            entity['location'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity['value'] = report;
        michal[2] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    tangon = tangon.bind(entity)();
    report = function(argFoo) {
        tangon = function(argFoo, argBar) { // Original name: LibdiscoreCachedKvStoreExperiment
            report = this;
            michal = _closure1_slot6;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(report, tangon);
            michal = _closure1_slot10;
            entity = new Array(1);
            oscard = argFoo;
            entity[0] = oscard;
            entity = michal.bind(zuuluu)(report, tangon, entity);
            michal = argBar;
            entity['storeName'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot5;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot7;
        report = {};
        entity = 'getCachedKvStoreMode';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = this;
                entity = michal.getCachedConfig;
                zuuluu = entity.bind(michal)();
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00008_ip = 30; continue _fun00007 }
 24:
                entity = zuuluu.treatmentId;
 30:
                zuuluu = michal != entity;
                michal = -1;
                if(!zuuluu) { _fun00008_ip = 46; continue _fun00007 }
 43:
                michal = entity;
 46:
                entity = 1;
                if(!(entity !== michal)) { _fun00008_ip = 74; continue _fun00007 }
 53:
                entity = 2;
                if(!(entity !== michal)) { _fun00008_ip = 66; continue _fun00007 }
 60:
                entity = 'typescript';
                return entity;
 66:
                entity = 'libdiscore';
                return entity;
 74:
                entity = 'typescript-libdiscore-dual-read';
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'isEnabled';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                entity = michal.getCachedConfig;
                michal = entity.bind(michal)();
                entity = undefined;
                entity = entity !== michal;
                if(!entity) { _fun00010_ip = 34; continue _fun00009 }
 22:
                zuuluu = michal.treatmentId;
                michal = 0;
                entity = zuuluu > michal;
 34:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getLabel';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = this;
            tangon = entity.storeName;
            entity = global;
            entity = entity.HermesInternal;
            zuuluu = entity.concat;
            michal = 'libdiscore KVStore[';
            entity = '] Migration';
            entity = zuuluu.bind(michal)(tangon, entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getTreatments';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = new Array(3);
            michal = {'treatmentId': 0, 'label': 'Use typescript as the source of truth'};
            entity[0] = michal;
            michal = {'treatmentId': 1, 'label': 'Typescript <-> libdiscore Dual Read, Typescript is the source of truth'};
            entity[1] = michal;
            michal = {'treatmentId': 2, 'label': 'Use libdiscore as the source of truth'};
            entity[2] = michal;
            return entity;
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    yankee = report.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: LibdiscoreTelemetryExperiment
            oscard = this;
            michal = 0;
            offset = 0;
            golfie = copyRestArgs(offset);
            zuuluu = _closure1_slot6;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot10;
            entity = new Array(0);
            offset = entity;
            verify = golfie;
            option = 0;
            golfie = arraySpread(offset, verify, option);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            zuuluu = 5;
            entity['MAX_EMISSIONS_PER_APP_LAUNCH'] = zuuluu;
            entity['emissionsCount'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot5;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot7;
        report = {};
        entity = 'isEnabled';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = this;
                entity = michal.getCachedConfig;
                michal = entity.bind(michal)();
                entity = undefined;
                entity = entity !== michal;
                if(!entity) { _fun00012_ip = 34; continue _fun00011 }
 22:
                zuuluu = michal.treatmentId;
                michal = 0;
                entity = zuuluu > michal;
 34:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'getLabel';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = 'libdiscore Telemetry';
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getTreatments';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = new Array(4);
            michal = {'treatmentId': 0, 'label': 'Disabled'};
            entity[0] = michal;
            michal = {'treatmentId': 1, 'label': 'Enabled (1% sample rate)'};
            entity[1] = michal;
            michal = {'treatmentId': 2, 'label': 'Enabled (5% sample rate)'};
            entity[2] = michal;
            michal = {'treatmentId': 3, 'label': 'Enabled (100% sample rate)'};
            entity[3] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getMetricsSampleRate';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = this;
                entity = michal.getCachedConfig;
                entity = entity.bind(michal)();
                michal = null;
                michal = michal == entity;
                zuuluu = undefined;
                if(michal) { _fun00014_ip = 30; continue _fun00013 }
 24:
                zuuluu = entity.treatmentId;
 30:
                entity = 1;
                if(!(entity !== zuuluu)) { _fun00014_ip = 69; continue _fun00013 }
 37:
                michal = 2;
                if(!(michal !== zuuluu)) { _fun00014_ip = 57; continue _fun00013 }
 44:
                michal = 3;
                if(!(michal !== zuuluu)) { _fun00014_ip = 55; continue _fun00013 }
 51:
                michal = 0;
                return michal;
 55:
                return entity;
 57:
                entity = 0.05;
                return entity;
 69:
                entity = 0.01;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'didEmit';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = this;
            entity = michal.emissionsCount;
            entity = entity + 1;
            michal['emissionsCount'] = entity;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'shouldCollectMetrics';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = this;
                entity = zuuluu.getMetricsSampleRate;
                report = entity.bind(zuuluu)();
                entity = 0;
                entity = entity !== report;
                if(!entity) { _fun00016_ip = 84; continue _fun00015 }
 24:
                michal = 1;
                michal = michal === report;
                if(michal) { _fun00016_ip = 81; continue _fun00015 }
 34:
                tangon = zuuluu.emissionsCount;
                zuuluu = zuuluu.MAX_EMISSIONS_PER_APP_LAUNCH;
                tangon = tangon >= zuuluu;
                zuuluu = !tangon;
                if(tangon) { _fun00016_ip = 78; continue _fun00015 }
 56:
                tangon = global;
                oscard = tangon.Math;
                tangon = oscard.random;
                tangon = tangon.bind(oscard)();
                zuuluu = tangon < report;
 78:
                michal = zuuluu;
 81:
                entity = michal;
 84:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    offset = michal.bind(entity)(tangon);
    michal = yankee.prototype;
    tangon = Object.create(michal, {constructor: {value: yankee}});
    backup = '2025-05_libdiscore_notestore_v2';
    foxtra = 'NoteStore';
    kiloes = tangon;
    michal = new kiloes[yankee](backup, foxtra, romeon);
    report = michal instanceof Object ? michal : tangon;
    michal = yankee.prototype;
    tangon = Object.create(michal, {constructor: {value: yankee}});
    backup = '2025-07_libdiscore_guildstore_v2';
    foxtra = 'GuildStore';
    kiloes = tangon;
    michal = new kiloes[yankee](backup, foxtra, romeon);
    tangon = michal instanceof Object ? michal : tangon;
    michal = offset.prototype;
    golfie = Object.create(michal, {constructor: {value: offset}});
    backup = '2025-07_libdiscore_telemetry';
    kiloes = golfie;
    michal = new kiloes[offset](backup, foxtra);
    michal = michal instanceof Object ? michal : golfie;
    golfie = 7;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/libdiscore/libdiscoreExperiments.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['ALL_LIBDISCORE_EXPERIMENTS'] = oscard;
    zuuluu['NoteStoreExperiment'] = report;
    zuuluu['GuildStoreExperiment'] = tangon;
    zuuluu['TelemetryExperiment'] = michal;
    return entity;
})();
// app/modules/app_database/modules/KvCacheVersion.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.HELLO_KEY;
    var _closure1_slot5 = option;
    option = tangon.VERSION_TO_FORCE_RESYNCING_ALL_DATA;
    var _closure1_slot6 = option;
    option = tangon.VERSION_TO_FORCE_RESYNCING_ALL_DATA_KEY;
    var _closure1_slot7 = option;
    option = tangon.VERSION_TO_SKIP_READING_THE_DATABASE;
    var _closure1_slot8 = option;
    tangon = tangon.VERSION_TO_SKIP_READING_THE_DATABASE_KEY;
    var _closure1_slot9 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'KvCacheVersion';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot10 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function() { // Original name: KvCacheVersion
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            report = _closure1_slot3;
            michal = _closure2_slot2;
            entity = undefined;
            michal = report.bind(entity)(zuuluu, michal);
            michal = false;
            zuuluu['hasSuccessfullyConnected'] = michal;
            michal = {};
            report = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleWrite;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['BACKGROUND_SYNC'] = report;
            report = function() { // Original name: CONNECTION_OPEN
                michal = _closure3_slot0;
                entity = michal.handleConnectionOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            michal['CONNECTION_OPEN'] = report;
            tangon = function(argFoo, argBar) { // Original name: WRITE_CACHES
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleWrite;
                entity = argBar;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['WRITE_CACHES'] = tangon;
            zuuluu['actions'] = michal;
            return entity;
        };
        var _closure2_slot2 = zuuluu;
        report = {};
        michal = 'okAsync';
        report['key'] = michal;
        option = _closure1_slot2;
        michal = undefined;
        entity = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 93; continue _fun00001 }
 7:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.cache;
                    michal = argFoo;
                    report = zuuluu.bind(report)(michal);
                    zuuluu = report.get;
                    michal = _closure1_slot9;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=64);
 62:
                    return michal;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 90; continue _fun00001 }
 70:
                    zuuluu = null;
                    report = zuuluu == michal;
                    if(report) { _fun00002_ip = 87; continue _fun00001 }
 79:
                    tangon = _closure1_slot8;
                    zuuluu = michal === tangon;
 87:
                    return zuuluu;
 90:
                    return michal;
 93:
                    return entity;
                }
            };
            return entity;
        };
        entity = option.bind(michal)(entity);
        var _closure2_slot1 = entity;
        entity = function() { // Original name: okAsync
            entity = undefined;
            tangon = _closure2_slot1;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(7);
        entity[0] = report;
        report = {};
        golfie = 'canUseGuildVersions';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = this;
                entity = michal.hasSuccessfullyConnected;
                if(entity) { _fun00004_ip = 24; continue _fun00003 }
 12:
                entity = michal.doesDatabaseVersionMatchJsConstants;
                entity = entity.bind(michal)();
                _fun00004_ip = 45; continue _fun00003;
 24:
                michal = global;
                tangon = michal.Promise;
                zuuluu = tangon.resolve;
                michal = true;
                entity = zuuluu.bind(tangon)(michal);
 45:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'doesDatabaseVersionMatchJsConstants';
        report['key'] = golfie;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 165; continue _fun00005 }
 10:
                    zuuluu = _closure1_slot0;
                    report = _closure1_slot1;
                    michal = 5;
                    michal = report[michal];
                    report = undefined;
                    zuuluu = zuuluu.bind(report)(michal);
                    michal = zuuluu.forceResyncVersion;
                    golfie = michal.bind(zuuluu)();
                    zuuluu = null;
                    if(!(zuuluu != golfie)) { _fun00006_ip = 160; continue _fun00005 }
 51:
                    oscard = golfie.get;
                    michal = _closure1_slot7;
                    michal = oscard.bind(golfie)(michal);
                    SaveGenerator(address=69);
 67:
                    return michal;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00006_ip = 157; continue _fun00005 }
 75:
                    zuuluu = zuuluu == michal;
                    offset = undefined;
                    if(zuuluu) { _fun00006_ip = 90; continue _fun00005 }
 84:
                    offset = michal.version;
 90:
                    zuuluu = _closure1_slot6;
                    zuuluu = offset === zuuluu;
                    if(zuuluu) { _fun00006_ip = 154; continue _fun00005 }
 101:
                    oscard = _closure1_slot10;
                    report = oscard.info;
                    verify = _closure1_slot6;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    option = tangon.concat;
                    golfie = 'KVStore version mismatch: ';
                    tangon = ' vs ';
                    tangon = option.bind(golfie)(offset, tangon, verify);
                    tangon = report.bind(oscard)(tangon);
                    zuuluu = false;
 154:
                    return zuuluu;
 157:
                    return michal;
 160:
                    michal = false;
                    return michal;
 165:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(michal)(golfie);
        var _closure2_slot0 = golfie;
        golfie = function() { // Original name: doesDatabaseVersionMatchJsConstants
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handleClear';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = false;
            entity = this;
            entity['hasSuccessfullyConnected'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'handleConnectionOpen';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = true;
            entity = this;
            entity['hasSuccessfullyConnected'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'handleWrite';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            tangon = argFoo;
            michal = true;
            entity = this;
            entity['hasSuccessfullyConnected'] = michal;
            zuuluu = _closure1_slot0;
            report = _closure1_slot1;
            michal = 5;
            golfie = report[michal];
            entity = undefined;
            option = zuuluu.bind(entity)(golfie);
            golfie = option.cacheTransaction;
            offset = golfie.bind(option)(tangon);
            verify = offset.put;
            option = _closure1_slot5;
            golfie = '👋';
            golfie = verify.bind(offset)(option, golfie);
            golfie = report[michal];
            option = zuuluu.bind(entity)(golfie);
            golfie = option.cacheTransaction;
            offset = golfie.bind(option)(tangon);
            verify = offset.put;
            option = _closure1_slot9;
            golfie = _closure1_slot8;
            golfie = verify.bind(offset)(option, golfie);
            michal = report[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.forceResyncVersionTransaction;
            report = michal.bind(zuuluu)(tangon);
            tangon = report.put;
            zuuluu = _closure1_slot7;
            michal = {};
            oscard = _closure1_slot6;
            michal['version'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'resetInMemoryState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            michal = false;
            entity = this;
            entity['hasSuccessfullyConnected'] = michal;
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[6] = report;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/modules/KvCacheVersion.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
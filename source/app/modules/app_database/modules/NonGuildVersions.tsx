// app/modules/app_database/modules/NonGuildVersions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    var _closure1_slot2 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = golfie[tangon];
    tangon = report.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = golfie[tangon];
    option = report.bind(entity)(tangon);
    tangon = option.prototype;
    report = Object.create(tangon, {constructor: {value: option}});
    romeon = 'NonGuildVersions';
    foxtra = report;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : report;
    var _closure1_slot7 = tangon;
    michal = function() {
        tangon = _closure1_slot5;
        zuuluu = function() { // Original name: NonGuildVersions
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = this;
                var _closure3_slot0 = tangon;
                oscard = _closure1_slot4;
                zuuluu = _closure2_slot1;
                entity = undefined;
                zuuluu = oscard.bind(entity)(tangon, zuuluu);
                zuuluu = {};
                oscard = function(argFoo, argBar) { // Original name: CONNECTION_OPEN
                    tangon = _closure3_slot0;
                    zuuluu = tangon.handleConnectionOpen;
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['CONNECTION_OPEN'] = oscard;
                oscard = function(argFoo, argBar) { // Original name: BACKGROUND_SYNC
                    tangon = _closure3_slot0;
                    zuuluu = tangon.handleConnectionOpen;
                    michal = argFoo;
                    entity = argBar;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                zuuluu['BACKGROUND_SYNC'] = oscard;
                tangon['actions'] = zuuluu;
                tangon = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 5;
                zuuluu = oscard[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.isCacheEnabled;
                zuuluu = zuuluu.bind(tangon)();
                if(!zuuluu) { _fun00002_ip = 181; continue _fun00001 }
 96:
                tangon = _closure1_slot6;
                zuuluu = tangon.addChangeListener;
                option = _closure1_slot1;
                verify = _closure1_slot2;
                report = 6;
                report = verify[report];
                golfie = option.bind(entity)(report);
                oscard = golfie.throttle;
                report = 8;
                report = verify[report];
                report = option.bind(entity)(report);
                report = report.Millis;
                option = report.SECOND;
                report = 10;
                report = report * option;
                michal = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 7;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.database;
                        tangon = michal.bind(zuuluu)();
                        michal = null;
                        if(!(michal != tangon)) { _fun00004_ip = 61; continue _fun00003 }
 41:
                        zuuluu = tangon.transaction;
                        michal = function(argFoo) {
                            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                zuuluu = argFoo;
                                tangon = _closure1_slot6;
                                michal = tangon.getGuildId;
                                oscard = michal.bind(tangon)();
                                michal = null;
                                if(!(michal != oscard)) { _fun00006_ip = 114; continue _fun00005 }
 26:
                                michal = global;
                                tangon = michal.isNaN;
                                michal = michal.Number;
                                report = undefined;
                                michal = michal.bind(report)(oscard);
                                michal = tangon.bind(report)(michal);
                                if(michal) { _fun00006_ip = 114; continue _fun00005 }
 55:
                                tangon = _closure1_slot1;
                                golfie = _closure1_slot2;
                                michal = 7;
                                michal = golfie[michal];
                                tangon = tangon.bind(report)(michal);
                                michal = tangon.nonGuildVersionsTransaction;
                                report = michal.bind(tangon)(zuuluu);
                                tangon = report.put;
                                michal = {};
                                golfie = 'initial_guild_id';
                                michal['id'] = golfie;
                                michal['versionString'] = oscard;
                                michal = tangon.bind(report)(michal);
                                _fun00006_ip = 161; continue _fun00005;
 114:
                                tangon = _closure1_slot1;
                                michal = _closure1_slot2;
                                entity = 7;
                                michal = michal[entity];
                                entity = undefined;
                                michal = tangon.bind(entity)(michal);
                                entity = michal.nonGuildVersionsTransaction;
                                zuuluu = entity.bind(michal)(zuuluu);
                                michal = zuuluu.delete;
                                entity = 'initial_guild_id';
                                entity = michal.bind(zuuluu)(entity);
 161:
                                entity = undefined;
                                return entity;
                            }
                        };
                        michal = zuuluu.bind(tangon)(michal);
 61:
                        return entity;
                    }
                };
                michal = oscard.bind(golfie)(michal, report);
                michal = zuuluu.bind(tangon)(michal);
 181:
                return entity;
            }
        };
        var _closure2_slot1 = zuuluu;
        report = {};
        michal = 'getCommittedVersions';
        report['key'] = michal;
        golfie = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 177; continue _fun00007 }
 10:
                    report = undefined;
                    michal = undefined;
                    oscard = undefined;
 16: // try_start_0
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.nonGuildVersions;
                    zuuluu = zuuluu.bind(tangon)();
                    michal = zuuluu;
                    golfie = null;
                    if(!(golfie != zuuluu)) { _fun00008_ip = 141; continue _fun00007 }
 58:
                    zuuluu = michal;
                    michal = zuuluu.getMany;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=75);
 73:
                    return michal;
 75:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00008_ip = 138; continue _fun00007 }
 81:
                    tangon = michal.map;
                    zuuluu = function(argFoo) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zuuluu = argFoo;
                            michal = zuuluu.id;
                            entity = new Array(2);
                            entity[0] = michal;
                            michal = 'version';
                            michal = michal in zuuluu;
                            if(michal) { _fun00010_ip = 35; continue _fun00009 }
 27:
                            michal = zuuluu.versionString;
                            _fun00010_ip = 41; continue _fun00009;
 35:
                            michal = zuuluu.version;
 41:
                            entity[1] = michal;
                            return entity;
                        }
                    };
                    zuuluu = tangon.bind(michal)(zuuluu);
                    oscard = zuuluu;
                    tangon = global;
                    report = tangon.Object;
                    tangon = report.fromEntries;
                    if(!(golfie == zuuluu)) { _fun00008_ip = 127; continue _fun00007 }
 121:
                    zuuluu = new Array(0);
                    _fun00008_ip = 130; continue _fun00007;
 127:
                    zuuluu = oscard;
 130:
                    zuuluu = tangon.bind(report)(zuuluu);
 135: // try_end0
                    return zuuluu;
 138:
                    return michal;
 141:
                    michal = {};
                    return michal;
 146: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot7;
                    zuuluu = tangon.warn;
                    michal = "couldn't load guild versions";
                    michal = zuuluu.bind(tangon)(michal, report);
                    michal = {};
                    return michal;
 177:
                    return entity;
                }
            };
            return entity;
        };
        entity = golfie.bind(michal)(entity);
        var _closure2_slot0 = entity;
        entity = function() { // Original name: getCommittedVersions
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'handleConnectionOpen';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                tangon = argFoo;
                michal = tangon.apiCodeVersion;
                entity = null;
                if(!(entity != michal)) { _fun00012_ip = 86; continue _fun00011 }
 15:
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 7;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.nonGuildVersionsTransaction;
                entity = argBar;
                zuuluu = michal.bind(zuuluu)(entity);
                michal = zuuluu.put;
                entity = {};
                report = 'api_code_version';
                entity['id'] = report;
                tangon = tangon.apiCodeVersion;
                entity['version'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 86:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'resetInMemoryState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = tangon.bind(michal)(zuuluu, entity);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = michal.prototype;
    report = Object.create(tangon, {constructor: {value: michal}});
    foxtra = report;
    tangon = new foxtra[michal](romeon);
    tangon = tangon instanceof Object ? tangon : report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/app_database/modules/NonGuildVersions.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['NonGuildVersions'] = michal;
    return entity;
})();
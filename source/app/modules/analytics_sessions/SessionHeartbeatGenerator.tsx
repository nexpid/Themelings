// app/modules/analytics_sessions/SessionHeartbeatGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = function() { // Original name: _getLatestClientSession
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 245; continue _fun00001 }
 10:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    option = 2;
                    michal = michal[option];
                    golfie = undefined;
                    michal = zuuluu.bind(golfie)(michal);
                    report = michal.Storage;
                    zuuluu = report.getAfterRefresh;
                    michal = _closure1_slot4;
                    michal = zuuluu.bind(report)(michal);
                    SaveGenerator(address=60);
 58:
                    return michal;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 242; continue _fun00001 }
 69:
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    zuuluu = zuuluu[option];
                    zuuluu = report.bind(golfie)(zuuluu);
                    oscard = zuuluu.Storage;
                    report = oscard.getAfterRefresh;
                    zuuluu = _closure1_slot5;
                    oscard = report.bind(oscard)(zuuluu);
                    report = oscard.then;
                    zuuluu = _closure1_slot10;
                    zuuluu = report.bind(oscard)(zuuluu);
                    SaveGenerator(address=125);
 123:
                    return zuuluu;
 125:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 239; continue _fun00001 }
 131:
                    oscard = _closure1_slot0;
                    report = _closure1_slot1;
                    report = report[option];
                    report = oscard.bind(golfie)(report);
                    golfie = report.Storage;
                    oscard = golfie.getAfterRefresh;
                    report = _closure1_slot3;
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.then;
                    tangon = _closure1_slot10;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=187);
 185:
                    return tangon;
 187:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 236; continue _fun00001 }
 193:
                    golfie = null;
                    oscard = golfie != michal;
                    report = null;
                    if(!oscard) { _fun00002_ip = 233; continue _fun00001 }
 204:
                    oscard = golfie != zuuluu;
                    report = null;
                    if(!oscard) { _fun00002_ip = 233; continue _fun00001 }
 213:
                    oscard = {};
                    oscard['uuid'] = michal;
                    oscard['initialized'] = zuuluu;
                    oscard['lastUsed'] = tangon;
                    report = oscard;
 233:
                    return report;
 236:
                    return tangon;
 239:
                    return zuuluu;
 242:
                    return michal;
 245:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    tangon = function(argFoo) { // Original name: isSessionExpired
        entity = argFoo;
        michal = entity.lastUsed;
        entity = 1800000;
        michal = entity + michal;
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        michal = michal - entity;
        entity = 0;
        entity = michal <= entity;
        return entity;
    };
    var _closure1_slot9 = tangon;
    michal = function(argFoo) { // Original name: timestampOrZero
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            entity = null;
            michal = entity != tangon;
            entity = 0;
            if(!michal) { _fun00004_ip = 29; continue _fun00003 }
 14:
            michal = global;
            zuuluu = michal.Number;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 29:
            return entity;
        }
    };
    var _closure1_slot10 = michal;
    oscard = global;
    yankee = oscard.Object;
    offset = yankee.defineProperty;
    verify = {};
    entity = true;
    verify['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, verify);
    entity = 0;
    offset = option[entity];
    verify = argBaz;
    entity = undefined;
    verify = verify.bind(entity)(offset);
    var _closure1_slot2 = verify;
    verify = 'LATEST_SESSION_TIMESTAMP';
    var _closure1_slot3 = verify;
    verify = 'LATEST_SESSION_UUID';
    var _closure1_slot4 = verify;
    verify = 'LATEST_SESSION_INITIALIZED_TIMESTAMP';
    var _closure1_slot5 = verify;
    verify = oscard.Promise;
    oscard = verify.resolve;
    oscard = oscard.bind(verify)();
    var _closure1_slot6 = oscard;
    oscard = false;
    var _closure1_slot7 = oscard;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/analytics_sessions/SessionHeartbeatGenerator.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = 30;
    zuuluu['SESSION_IDLE_TIMEOUT_MINS'] = oscard;
    oscard = function(argFoo) { // Original name: setSessionExtendingEnabled
        entity = argFoo;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['setSessionExtendingEnabled'] = oscard;
    report = function() { // Original name: getSession
        tangon = _closure1_slot6;
        zuuluu = tangon.then;
        oscard = _closure1_slot2;
        report = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 384; continue _fun00005 }
 10:
                    michal = function() { // Original name: getLatestClientSession
                        entity = undefined;
                        tangon = _closure1_slot8;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    verify = undefined;
                    michal = michal.bind(verify)();
                    SaveGenerator(address=27);
 25:
                    return michal;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 381; continue _fun00005 }
 36:
                    tangon = null;
                    if(!(tangon != michal)) { _fun00006_ip = 145; continue _fun00005 }
 42:
                    zuuluu = _closure1_slot9;
                    zuuluu = zuuluu.bind(verify)(michal);
                    if(zuuluu) { _fun00006_ip = 145; continue _fun00005 }
 57:
                    oscard = _closure1_slot7;
                    zuuluu = michal;
                    if(!oscard) { _fun00006_ip = 378; continue _fun00005 }
 70:
                    golfie = _closure1_slot0;
                    option = _closure1_slot1;
                    oscard = 2;
                    oscard = option[oscard];
                    oscard = golfie.bind(verify)(oscard);
                    option = oscard.Storage;
                    golfie = option.set;
                    oscard = _closure1_slot3;
                    report = global;
                    offset = report.Date;
                    report = offset.now;
                    offset = report.bind(offset)();
                    report = offset.toString;
                    report = report.bind(offset)();
                    report = golfie.bind(option)(oscard, report);
                    zuuluu = michal;
                    _fun00006_ip = 378; continue _fun00005;
 145:
                    report = _closure1_slot7;
                    if(report) { _fun00006_ip = 158; continue _fun00005 }
 155:
                    return tangon;
 158:
                    tangon = {};
                    option = _closure1_slot0;
                    offset = _closure1_slot1;
                    report = 1;
                    report = offset[report];
                    golfie = option.bind(verify)(report);
                    report = golfie.v4;
                    report = report.bind(golfie)();
                    tangon['uuid'] = report;
                    report = global;
                    yankee = report.Date;
                    golfie = yankee.now;
                    golfie = golfie.bind(yankee)();
                    tangon['initialized'] = golfie;
                    yankee = report.Date;
                    golfie = yankee.now;
                    golfie = golfie.bind(yankee)();
                    tangon['lastUsed'] = golfie;
                    golfie = 2;
                    yankee = offset[golfie];
                    yankee = option.bind(verify)(yankee);
                    backup = yankee.Storage;
                    foxtra = backup.set;
                    romeon = _closure1_slot4;
                    yankee = tangon.uuid;
                    yankee = foxtra.bind(backup)(romeon, yankee);
                    yankee = offset[golfie];
                    yankee = option.bind(verify)(yankee);
                    backup = yankee.Storage;
                    foxtra = backup.set;
                    romeon = _closure1_slot5;
                    kiloes = tangon.initialized;
                    yankee = kiloes.toString;
                    yankee = yankee.bind(kiloes)();
                    yankee = foxtra.bind(backup)(romeon, yankee);
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    option = golfie.Storage;
                    golfie = option.set;
                    oscard = _closure1_slot3;
                    verify = report.Date;
                    report = verify.now;
                    verify = report.bind(verify)();
                    report = verify.toString;
                    report = report.bind(verify)();
                    report = golfie.bind(option)(oscard, report);
                    zuuluu = tangon;
 378:
                    return zuuluu;
 381:
                    return michal;
 384:
                    return entity;
                }
            };
            return entity;
        };
        entity = oscard.bind(report)(entity);
        entity = zuuluu.bind(tangon)(entity);
        _closure1_slot6 = entity;
        return entity;
    };
    zuuluu['getSession'] = report;
    zuuluu['isSessionExpired'] = tangon;
    zuuluu['timestampOrZero'] = michal;
    return entity;
})();
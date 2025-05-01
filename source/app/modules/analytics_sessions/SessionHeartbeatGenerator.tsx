// app/modules/analytics_sessions/SessionHeartbeatGenerator.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
                    if(michal) { _fun00002_ip = 270; continue _fun00001 }
 10:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot1;
                    oscard = 3;
                    michal = michal[oscard];
                    option = undefined;
                    michal = zuuluu.bind(option)(michal);
                    tangon = michal.Storage;
                    zuuluu = tangon.getAfterRefresh;
                    michal = _closure1_slot4;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=60);
 58:
                    return michal;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 267; continue _fun00001 }
 69:
                    offset = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    tangon = zuuluu[oscard];
                    tangon = offset.bind(option)(tangon);
                    verify = tangon.Storage;
                    golfie = verify.getAfterRefresh;
                    tangon = _closure1_slot5;
                    golfie = golfie.bind(verify)(tangon);
                    tangon = golfie.then;
                    verify = 1;
                    zuuluu = zuuluu[verify];
                    zuuluu = offset.bind(option)(zuuluu);
                    zuuluu = zuuluu.timestampOrZero;
                    zuuluu = tangon.bind(golfie)(zuuluu);
                    SaveGenerator(address=139);
 137:
                    return zuuluu;
 139:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 264; continue _fun00001 }
 145:
                    golfie = _closure1_slot0;
                    tangon = _closure1_slot1;
                    oscard = tangon[oscard];
                    oscard = golfie.bind(option)(oscard);
                    offset = oscard.Storage;
                    oscard = offset.getAfterRefresh;
                    report = _closure1_slot3;
                    oscard = oscard.bind(offset)(report);
                    report = oscard.then;
                    tangon = tangon[verify];
                    tangon = golfie.bind(option)(tangon);
                    tangon = tangon.timestampOrZero;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=212);
 210:
                    return tangon;
 212:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 261; continue _fun00001 }
 218:
                    golfie = null;
                    oscard = golfie != michal;
                    report = null;
                    if(!oscard) { _fun00002_ip = 258; continue _fun00001 }
 229:
                    oscard = golfie != zuuluu;
                    report = null;
                    if(!oscard) { _fun00002_ip = 258; continue _fun00001 }
 238:
                    oscard = {};
                    oscard['uuid'] = michal;
                    oscard['initialized'] = zuuluu;
                    oscard['lastUsed'] = tangon;
                    report = oscard;
 258:
                    return report;
 261:
                    return tangon;
 264:
                    return zuuluu;
 267:
                    return michal;
 270:
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
    tangon = function() { // Original name: getLatestActiveHeartbeatSessionIdUnsafe
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = _closure1_slot0;
            offset = _closure1_slot1;
            entity = 3;
            michal = offset[entity];
            oscard = undefined;
            michal = report.bind(oscard)(michal);
            golfie = michal.Storage;
            tangon = golfie.get;
            michal = _closure1_slot4;
            verify = tangon.bind(golfie)(michal);
            golfie = 1;
            michal = offset[golfie];
            option = report.bind(oscard)(michal);
            tangon = option.timestampOrZero;
            michal = offset[entity];
            michal = report.bind(oscard)(michal);
            romeon = michal.Storage;
            yankee = romeon.get;
            michal = _closure1_slot5;
            michal = yankee.bind(romeon)(michal);
            option = tangon.bind(option)(michal);
            michal = offset[golfie];
            tangon = report.bind(oscard)(michal);
            michal = tangon.timestampOrZero;
            entity = offset[entity];
            entity = report.bind(oscard)(entity);
            offset = entity.Storage;
            report = offset.get;
            entity = _closure1_slot3;
            entity = report.bind(offset)(entity);
            report = michal.bind(tangon)(entity);
            tangon = null;
            entity = tangon != verify;
            michal = null;
            if(!entity) { _fun00004_ip = 186; continue _fun00003 }
 157:
            entity = tangon != option;
            michal = null;
            if(!entity) { _fun00004_ip = 186; continue _fun00003 }
 166:
            entity = {};
            entity['uuid'] = verify;
            entity['initialized'] = option;
            entity['lastUsed'] = report;
            michal = entity;
 186:
            report = tangon == michal;
            entity = null;
            if(report) { _fun00004_ip = 234; continue _fun00003 }
 195:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            zuuluu = zuuluu[golfie];
            report = report.bind(oscard)(zuuluu);
            zuuluu = report.isSessionExpired;
            zuuluu = zuuluu.bind(report)(michal);
            entity = null;
            if(zuuluu) { _fun00004_ip = 234; continue _fun00003 }
 228:
            entity = michal.uuid;
 234:
            return entity;
        }
    };
    var _closure1_slot9 = tangon;
    report = global;
    offset = report.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    verify = golfie[entity];
    option = argBaz;
    entity = undefined;
    option = option.bind(entity)(verify);
    var _closure1_slot2 = option;
    option = 'LATEST_SESSION_TIMESTAMP';
    var _closure1_slot3 = option;
    option = 'LATEST_SESSION_UUID';
    var _closure1_slot4 = option;
    option = 'LATEST_SESSION_INITIALIZED_TIMESTAMP';
    var _closure1_slot5 = option;
    option = report.Promise;
    report = option.resolve;
    report = report.bind(option)();
    var _closure1_slot6 = report;
    report = false;
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/analytics_sessions/SessionHeartbeatGenerator.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: setSessionExtendingEnabled
        entity = argFoo;
        _closure1_slot7 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['setSessionExtendingEnabled'] = report;
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
                    if(michal) { _fun00006_ip = 409; continue _fun00005 }
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
                    if(zuuluu) { _fun00006_ip = 406; continue _fun00005 }
 36:
                    tangon = null;
                    if(!(tangon != michal)) { _fun00006_ip = 170; continue _fun00005 }
 45:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot1;
                    zuuluu = 1;
                    zuuluu = golfie[zuuluu];
                    oscard = oscard.bind(verify)(zuuluu);
                    zuuluu = oscard.isSessionExpired;
                    zuuluu = zuuluu.bind(oscard)(michal);
                    if(zuuluu) { _fun00006_ip = 170; continue _fun00005 }
 82:
                    oscard = _closure1_slot7;
                    zuuluu = michal;
                    if(!oscard) { _fun00006_ip = 403; continue _fun00005 }
 95:
                    golfie = _closure1_slot0;
                    option = _closure1_slot1;
                    oscard = 3;
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
                    _fun00006_ip = 403; continue _fun00005;
 170:
                    report = _closure1_slot7;
                    if(report) { _fun00006_ip = 183; continue _fun00005 }
 180:
                    return tangon;
 183:
                    tangon = {};
                    option = _closure1_slot0;
                    offset = _closure1_slot1;
                    report = 2;
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
                    golfie = 3;
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
 403:
                    return zuuluu;
 406:
                    return michal;
 409:
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
    zuuluu['getLatestActiveHeartbeatSessionIdUnsafe'] = tangon;
    michal = function() { // Original name: updateSuperPropertiesWithClientSessionId
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot9;
            entity = undefined;
            report = zuuluu.bind(entity)();
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot1;
            tangon = 4;
            zuuluu = zuuluu[tangon];
            oscard = oscard.bind(entity)(zuuluu);
            zuuluu = oscard.getSuperProperties;
            oscard = zuuluu.bind(oscard)();
            zuuluu = null;
            golfie = zuuluu == oscard;
            zuuluu = undefined;
            if(golfie) { _fun00008_ip = 60; continue _fun00007 }
 54:
            zuuluu = oscard.client_heartbeat_session_id;
 60:
            if(!(zuuluu !== report)) { _fun00008_ip = 99; continue _fun00007 }
 64:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[tangon];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.extendSuperProperties;
            michal = {};
            michal['client_heartbeat_session_id'] = report;
            michal = zuuluu.bind(tangon)(michal);
 99:
            return entity;
        }
    };
    zuuluu['updateSuperPropertiesWithClientSessionId'] = michal;
    return entity;
})();
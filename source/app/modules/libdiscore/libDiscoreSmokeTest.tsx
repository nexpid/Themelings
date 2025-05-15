// app/modules/libdiscore/libDiscoreSmokeTest.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = verify;
    oscard = function() { // Original name: libDiscoreSmokeTest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0: // try_start_0
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            oscard = tangon.bind(michal)(zuuluu);
            report = oscard.rustMultiply;
            tangon = 6;
            zuuluu = 7;
            oscard = report.bind(oscard)(tangon, zuuluu);
            report = _closure1_slot4;
            tangon = report.info;
            zuuluu = 'The answer for life the universe and everything is:';
            zuuluu = tangon.bind(report)(zuuluu, oscard);
            entity = _closure1_slot5;
            entity = entity.bind(michal)();
 73: // try_end0
            _fun00002_ip = 91; continue _fun00001;
 75: // catch_target0
            CatchBlockStart(arg_register=2);
            michal = _closure1_slot7;
            entity = undefined;
            entity = michal.bind(entity)(zuuluu);
 91:
            entity = undefined;
            return entity;
        }
    };
    report = function() { // Original name: trackLibdiscoreSuccess
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot3;
        zuuluu = michal.LIBDISCORE_LOADED;
        michal = {};
        oscard = true;
        michal['success'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot5 = report;
    tangon = function(argFoo) { // Original name: formatErrorMessage
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = global;
            zuuluu = michal.Error;
            zuuluu = entity instanceof zuuluu;
            if(zuuluu) { _fun00004_ip = 50; continue _fun00003 }
 18:
            oscard = null;
            zuuluu = oscard != entity;
            golfie = 'Unknown error';
            if(!zuuluu) { _fun00004_ip = 46; continue _fun00003 }
 33:
            tangon = michal.String;
            zuuluu = undefined;
            golfie = tangon.bind(zuuluu)(entity);
 46:
            oscard = null;
            _fun00004_ip = 60; continue _fun00003;
 50:
            golfie = entity.message;
            oscard = entity.name;
 60:
            zuuluu = golfie.length;
            entity = 1000;
            report = golfie;
            if(!(zuuluu > entity)) { _fun00004_ip = 108; continue _fun00003 }
 78:
            tangon = golfie.substring;
            zuuluu = 0;
            entity = 997;
            zuuluu = tangon.bind(golfie)(zuuluu, entity);
            entity = '...';
            report = zuuluu + entity;
 108:
            zuuluu = null;
            entity = report;
            if(!(zuuluu != oscard)) { _fun00004_ip = 145; continue _fun00003 }
 117:
            michal = michal.HermesInternal;
            tangon = michal.concat;
            zuuluu = '';
            michal = ': ';
            entity = tangon.bind(zuuluu)(oscard, michal, report);
 145:
            return entity;
        }
    };
    var _closure1_slot6 = tangon;
    michal = function(argFoo) { // Original name: trackLibdiscoreFailure
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot4;
            zuuluu = report.error;
            entity = 'Failed to execute smoke test:';
            entity = zuuluu.bind(report)(entity, tangon);
            entity = global;
            entity = entity.Error;
            entity = tangon instanceof entity;
            if(!entity) { _fun00006_ip = 75; continue _fun00005 }
 42:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.captureException;
            entity = entity.bind(zuuluu)(tangon);
 75:
            zuuluu = _closure1_slot6;
            entity = undefined;
            oscard = zuuluu.bind(entity)(tangon);
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 3;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot3;
            zuuluu = michal.LIBDISCORE_LOADED;
            michal = {};
            golfie = false;
            michal['success'] = golfie;
            michal['error'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot7 = michal;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = option.bind(entity)(golfie);
    golfie = golfie.AnalyticEvents;
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    romeon = golfie.Logger;
    golfie = romeon.prototype;
    yankee = Object.create(golfie, {constructor: {value: romeon}});
    kiloes = 'libdiscore';
    sizing = yankee;
    golfie = new sizing[romeon](kiloes, backup);
    golfie = golfie instanceof Object ? golfie : yankee;
    var _closure1_slot4 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/libdiscore/libDiscoreSmokeTest.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['libDiscoreSmokeTest'] = oscard;
    zuuluu['trackLibdiscoreSuccess'] = report;
    zuuluu['formatErrorMessage'] = tangon;
    zuuluu['trackLibdiscoreFailure'] = michal;
    return entity;
})();
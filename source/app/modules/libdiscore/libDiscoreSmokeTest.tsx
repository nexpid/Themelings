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
 0:
            entity = _closure1_slot5;
            if(entity) { _fun00002_ip = 101; continue _fun00001 }
 10: // try_start_0
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 2;
            entity = zuuluu[entity];
            zuuluu = undefined;
            oscard = tangon.bind(zuuluu)(entity);
            report = oscard.rustMultiply;
            tangon = 6;
            entity = 7;
            oscard = report.bind(oscard)(tangon, entity);
            report = _closure1_slot4;
            tangon = report.info;
            entity = 'The answer for life the universe and everything is:';
            entity = tangon.bind(report)(entity, oscard);
            entity = _closure1_slot6;
            entity = entity.bind(zuuluu)();
 80: // try_end0
            _fun00002_ip = 95; continue _fun00001;
 82: // catch_target0
            CatchBlockStart(arg_register=3);
            zuuluu = _closure1_slot8;
            entity = undefined;
            entity = zuuluu.bind(entity)(tangon);
 95:
            entity = true;
            _closure1_slot5 = entity;
 101:
            entity = undefined;
            return entity;
        }
    };
    report = function() { // Original name: trackLibdiscoreSuccess
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.libdiscoreNoteStoreEnabled;
            zuuluu = zuuluu.bind(tangon)();
            if(zuuluu) { _fun00004_ip = 44; continue _fun00003 }
 38:
            oscard = new Array(0);
            _fun00004_ip = 54; continue _fun00003;
 44:
            oscard = ['note_store'];
 54:
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot3;
            zuuluu = michal.LIBDISCORE_LOADED;
            michal = {};
            golfie = true;
            michal['success'] = golfie;
            michal['experimental_features'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot6 = report;
    tangon = function(argFoo) { // Original name: formatErrorMessage
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            michal = global;
            zuuluu = michal.Error;
            zuuluu = entity instanceof zuuluu;
            if(zuuluu) { _fun00006_ip = 50; continue _fun00005 }
 18:
            oscard = null;
            zuuluu = oscard != entity;
            golfie = 'Unknown error';
            if(!zuuluu) { _fun00006_ip = 46; continue _fun00005 }
 33:
            tangon = michal.String;
            zuuluu = undefined;
            golfie = tangon.bind(zuuluu)(entity);
 46:
            oscard = null;
            _fun00006_ip = 60; continue _fun00005;
 50:
            golfie = entity.message;
            oscard = entity.name;
 60:
            zuuluu = golfie.length;
            entity = 1000;
            report = golfie;
            if(!(zuuluu > entity)) { _fun00006_ip = 108; continue _fun00005 }
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
            if(!(zuuluu != oscard)) { _fun00006_ip = 145; continue _fun00005 }
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
    var _closure1_slot7 = tangon;
    michal = function(argFoo) { // Original name: trackLibdiscoreFailure
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot4;
            zuuluu = report.error;
            entity = 'Failed to execute smoke test:';
            entity = zuuluu.bind(report)(entity, tangon);
            entity = global;
            entity = entity.Error;
            entity = tangon instanceof entity;
            if(!entity) { _fun00008_ip = 75; continue _fun00007 }
 42:
            report = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.captureException;
            entity = entity.bind(zuuluu)(tangon);
 75:
            zuuluu = _closure1_slot7;
            entity = undefined;
            oscard = zuuluu.bind(entity)(tangon);
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
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
    var _closure1_slot8 = michal;
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
    golfie = false;
    var _closure1_slot5 = golfie;
    golfie = 6;
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
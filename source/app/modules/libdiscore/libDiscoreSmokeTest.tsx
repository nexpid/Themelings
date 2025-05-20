// app/modules/libdiscore/libDiscoreSmokeTest.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = verify;
    oscard = function() { // Original name: libDiscoreSmokeTest
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    entity = function() { // Original name: _libDiscoreSmokeTest
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 162; continue _fun00001 }
 10:
                    michal = _closure1_slot6;
                    if(michal) { _fun00002_ip = 157; continue _fun00001 }
 23: // try_start_0
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 3;
                    michal = report[michal];
                    report = undefined;
                    tangon = tangon.bind(report)(michal);
                    michal = tangon.initLibdiscore;
                    michal = michal.bind(tangon)();
                    SaveGenerator(address=59);
 57:
                    return michal;
 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 135; continue _fun00001 }
 65:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 4;
                    tangon = golfie[tangon];
                    option = oscard.bind(report)(tangon);
                    golfie = option.rustMultiply;
                    oscard = 6;
                    tangon = 7;
                    option = golfie.bind(option)(oscard, tangon);
                    golfie = _closure1_slot5;
                    oscard = golfie.info;
                    tangon = 'The answer for life the universe and everything is:';
                    tangon = oscard.bind(golfie)(tangon, option);
                    tangon = _closure1_slot8;
                    tangon = tangon.bind(report)();
 133: // try_end0
                    _fun00002_ip = 151; continue _fun00001;
 135:
                    return michal;
 138: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = _closure1_slot10;
                    michal = undefined;
                    michal = tangon.bind(michal)(report);
 151:
                    michal = true;
                    _closure1_slot6 = michal;
 157:
                    michal = undefined;
                    return michal;
 162:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    report = function() { // Original name: trackLibdiscoreSuccess
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 5;
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
            zuuluu = 6;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot4;
            zuuluu = michal.LIBDISCORE_LOADED;
            michal = {};
            golfie = true;
            michal['success'] = golfie;
            michal['experimental_features'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot8 = report;
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
    var _closure1_slot9 = tangon;
    michal = function(argFoo) { // Original name: trackLibdiscoreFailure
        tangon = argFoo;
        report = _closure1_slot5;
        zuuluu = report.error;
        entity = 'Failed to execute smoke test:';
        entity = zuuluu.bind(report)(entity, tangon);
        zuuluu = _closure1_slot9;
        entity = undefined;
        oscard = zuuluu.bind(entity)(tangon);
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        zuuluu = 6;
        zuuluu = report[zuuluu];
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.LIBDISCORE_LOADED;
        michal = {};
        golfie = false;
        michal['success'] = golfie;
        michal['error'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot10 = michal;
    entity = global;
    foxtra = entity.Object;
    romeon = foxtra.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = romeon.bind(foxtra)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = yankee.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.AnalyticEvents;
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    romeon = golfie.Logger;
    golfie = romeon.prototype;
    yankee = Object.create(golfie, {constructor: {value: romeon}});
    sizing = 'libdiscore';
    output = yankee;
    golfie = new output[romeon](sizing, kiloes);
    golfie = golfie instanceof Object ? golfie : yankee;
    var _closure1_slot5 = golfie;
    golfie = false;
    var _closure1_slot6 = golfie;
    golfie = 7;
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
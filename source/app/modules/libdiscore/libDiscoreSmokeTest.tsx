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
        tangon = _closure1_slot6;
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
                    if(michal) { _fun00002_ip = 146; continue _fun00001 }
 10: // try_start_0
                    report = _closure1_slot0;
                    michal = _closure1_slot2;
                    golfie = 3;
                    michal = michal[golfie];
                    tangon = undefined;
                    report = report.bind(tangon)(michal);
                    michal = report.initLibdiscore;
                    michal = michal.bind(report)();
                    SaveGenerator(address=49);
 47:
                    return michal;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 122; continue _fun00001 }
 55:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golfie];
                    option = oscard.bind(tangon)(report);
                    golfie = option.rustMultiply;
                    oscard = 6;
                    report = 7;
                    option = golfie.bind(option)(oscard, report);
                    golfie = _closure1_slot5;
                    oscard = golfie.info;
                    report = 'The answer for life the universe and everything is:';
                    report = oscard.bind(golfie)(report, option);
                    zuuluu = _closure1_slot7;
                    zuuluu = zuuluu.bind(tangon)();
 120: // try_end0
                    _fun00002_ip = 141; continue _fun00001;
 122:
                    return michal;
 125: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zuuluu = _closure1_slot9;
                    michal = undefined;
                    michal = zuuluu.bind(michal)(tangon);
 141:
                    michal = undefined;
                    return michal;
 146:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
    report = function() { // Original name: trackLibdiscoreSuccess
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot4;
        zuuluu = michal.LIBDISCORE_LOADED;
        michal = {};
        oscard = true;
        michal['success'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot7 = report;
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
    var _closure1_slot8 = tangon;
    michal = function(argFoo) { // Original name: trackLibdiscoreFailure
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot5;
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
            entity = 5;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.captureException;
            entity = entity.bind(zuuluu)(tangon);
 75:
            zuuluu = _closure1_slot8;
            entity = undefined;
            oscard = zuuluu.bind(entity)(tangon);
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 4;
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
        }
    };
    var _closure1_slot9 = michal;
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
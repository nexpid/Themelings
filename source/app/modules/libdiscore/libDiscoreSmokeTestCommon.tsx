// app/modules/libdiscore/libDiscoreSmokeTestCommon.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: formatErrorMessage
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = global;
            zuuluu = michal.Error;
            zuuluu = entity instanceof zuuluu;
            if(zuuluu) { _fun00002_ip = 48; continue _fun00001 }
 18:
            zuuluu = null;
            zuuluu = zuuluu != entity;
            report = 'Unknown error';
            if(!zuuluu) { _fun00002_ip = 46; continue _fun00001 }
 33:
            zuuluu = michal.String;
            michal = undefined;
            report = zuuluu.bind(michal)(entity);
 46:
            _fun00002_ip = 53; continue _fun00001;
 48:
            report = entity.message;
 53:
            zuuluu = report.length;
            michal = 1000;
            entity = report;
            if(!(zuuluu > michal)) { _fun00002_ip = 101; continue _fun00001 }
 71:
            tangon = report.substring;
            zuuluu = 0;
            michal = 997;
            zuuluu = tangon.bind(report)(zuuluu, michal);
            michal = '...';
            entity = zuuluu + michal;
 101:
            return entity;
        }
    };
    var _closure1_slot4 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = oscard.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    verify = option.bind(entity)(report);
    report = verify.prototype;
    option = Object.create(report, {constructor: {value: verify}});
    foxtra = 'libdiscore';
    backup = option;
    report = new backup[verify](foxtra, romeon);
    report = report instanceof Object ? report : option;
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/libdiscore/libDiscoreSmokeTestCommon.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: trackLibdiscoreSuccess
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 2;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.track;
        michal = _closure1_slot2;
        zuuluu = michal.LIBDISCORE_LOADED;
        michal = {};
        oscard = true;
        michal['success'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['trackLibdiscoreSuccess'] = report;
    zuuluu['formatErrorMessage'] = tangon;
    michal = function(argFoo) { // Original name: trackLibdiscoreFailure
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot3;
            zuuluu = report.error;
            entity = 'Failed to execute smoke test:';
            entity = zuuluu.bind(report)(entity, tangon);
            entity = global;
            entity = entity.Error;
            entity = tangon instanceof entity;
            if(!entity) { _fun00004_ip = 75; continue _fun00003 }
 42:
            report = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 3;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.captureException;
            entity = entity.bind(zuuluu)(tangon);
 75:
            zuuluu = _closure1_slot4;
            entity = undefined;
            oscard = zuuluu.bind(entity)(tangon);
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.LIBDISCORE_LOADED;
            michal = {};
            golfie = false;
            michal['success'] = golfie;
            michal['error'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackLibdiscoreFailure'] = michal;
    return entity;
})();
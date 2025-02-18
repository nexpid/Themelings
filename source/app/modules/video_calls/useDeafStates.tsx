// app/modules/video_calls/useDeafStates.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: getDeafStates
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            option = arguments[1];
            oscard = arguments[2];
            verify = arguments[3];
            zuuluu = undefined;
            if(!(option === zuuluu)) { _fun00002_ip = 25; continue _fun00001 }
 18:
            option = _closure1_slot4;
 25:
            if(!(oscard === zuuluu)) { _fun00002_ip = 36; continue _fun00001 }
 29:
            oscard = _closure1_slot3;
 36:
            if(!(verify === zuuluu)) { _fun00002_ip = 47; continue _fun00001 }
 40:
            verify = _closure1_slot2;
 47:
            michal = null;
            entity = michal != report;
            tangon = null;
            if(!entity) { _fun00002_ip = 90; continue _fun00001 }
 58:
            golfie = option.getVoiceState;
            entity = report.getGuildId;
            report = entity.bind(report)();
            entity = verify.getId;
            entity = entity.bind(verify)();
            tangon = golfie.bind(option)(report, entity);
 90:
            entity = {};
            report = oscard.isSelfDeaf;
            report = report.bind(oscard)();
            entity['selfDeaf'] = report;
            report = michal == tangon;
            zuuluu = undefined;
            if(report) { _fun00002_ip = 122; continue _fun00001 }
 116:
            zuuluu = tangon.deaf;
 122:
            michal = michal != zuuluu;
            if(!michal) { _fun00002_ip = 132; continue _fun00001 }
 129:
            michal = zuuluu;
 132:
            entity['deaf'] = michal;
            return entity;
        }
    };
    var _closure1_slot5 = michal;
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
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/video_calls/useDeafStates.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useDeafStates
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot4;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot3;
        zuuluu[1] = golfie;
        michal = _closure1_slot2;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            oscard = _closure1_slot5;
            offset = _closure2_slot0;
            verify = _closure1_slot4;
            option = _closure1_slot3;
            golfie = _closure1_slot2;
            yankee = undefined;
            entity = yankee[oscard](offset, verify, option, golfie, oscard);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getDeafStates'] = michal;
    return entity;
})();
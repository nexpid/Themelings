// app/modules/auth/experiment/trackAgeGateSubmitted.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot2 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/experiment/trackAgeGateSubmitted.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: trackAgeGateSubmitted
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = argFoo;
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            option = 1;
            zuuluu = offset[option];
            entity = undefined;
            report = verify.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot2;
            zuuluu = michal.AGE_GATE_SUBMITTED;
            michal = {};
            oscard = 2;
            oscard = offset[oscard];
            oscard = verify.bind(entity)(oscard);
            offset = oscard.bind(entity)();
            verify = offset.diff;
            oscard = 'years';
            verify = verify.bind(offset)(golfie, oscard);
            oscard = 18;
            verify = verify < oscard;
            oscard = null;
            if(!verify) { _fun00002_ip = 105; continue _fun00001 }
 89:
            offset = golfie.format;
            verify = 'YYYY-MM-DD';
            oscard = offset.bind(golfie)(verify);
 105:
            michal['dob'] = oscard;
            oscard = golfie.date;
            oscard = oscard.bind(golfie)();
            michal['dob_day'] = oscard;
            oscard = golfie.month;
            oscard = oscard.bind(golfie)();
            oscard = oscard + option;
            michal['dob_month'] = oscard;
            oscard = golfie.year;
            oscard = oscard.bind(golfie)();
            michal['dob_year'] = oscard;
            oscard = {};
            golfie = argBar;
            oscard['section'] = golfie;
            michal['source'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
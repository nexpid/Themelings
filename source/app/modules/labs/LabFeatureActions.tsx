// app/modules/labs/LabFeatureActions.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = {};
    var _closure1_slot3 = tangon;
    tangon = 2;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/labs/LabFeatureActions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: toggleLabFeature
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            michal = arguments[1];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 19; continue _fun00001 }
 12:
            michal = _closure1_slot3;
 19:
            report = michal.enabled;
            if(!(report === entity)) { _fun00002_ip = 48; continue _fun00001 }
 28:
            zuuluu = _closure1_slot2;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)(oscard);
            report = !michal;
 48:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            michal = 1;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            golfie = 'LAB_FEATURE_TOGGLE';
            michal['type'] = golfie;
            michal['labFeature'] = oscard;
            michal['enabled'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    zuuluu['toggleLabFeature'] = michal;
    return entity;
})();
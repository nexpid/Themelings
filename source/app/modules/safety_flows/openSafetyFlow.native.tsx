// app/modules/safety_flows/openSafetyFlow.native.tsx
export default (function(_, argBar, argBaz, __, ___, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.UserRequiredActions;
    var _closure1_slot4 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/safety_flows/openSafetyFlow.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: openSafetyFlow
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00002_ip = 11; continue _fun00001 }
 9:
            michal = {};
 11:
            oscard = michal.requiredAction;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 2;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.isEligibleForSafetyFlowsExperiment;
            zuuluu = {};
            golfie = 'modal-manager-verification';
            zuuluu['location'] = golfie;
            zuuluu = tangon.bind(report)(zuuluu);
            if(!zuuluu) { _fun00002_ip = 227; continue _fun00001 }
 69:
            zuuluu = null;
            if(!(zuuluu == oscard)) { _fun00002_ip = 89; continue _fun00001 }
 75:
            tangon = _closure1_slot3;
            zuuluu = tangon.getAction;
            oscard = zuuluu.bind(tangon)();
 89:
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.REQUIRE_SAFETY_FLOWS;
            zuuluu = oscard === zuuluu;
            if(zuuluu) { _fun00002_ip = 137; continue _fun00001 }
 106:
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            tangon = 3;
            tangon = golfie[tangon];
            report = report.bind(entity)(tangon);
            tangon = report.isFullScreenVerification;
            zuuluu = tangon.bind(report)(oscard);
 137:
            if(!zuuluu) { _fun00002_ip = 227; continue _fun00001 }
 140:
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            zuuluu = 4;
            zuuluu = golfie[zuuluu];
            oscard = tangon.bind(entity)(zuuluu);
            report = oscard.pushLazy;
            zuuluu = _closure1_slot0;
            michal = 6;
            michal = golfie[michal];
            option = zuuluu.bind(entity)(michal);
            michal = 5;
            tangon = golfie[michal];
            michal = golfie.paths;
            tangon = option.bind(entity)(tangon, michal);
            michal = 7;
            michal = golfie[michal];
            michal = zuuluu.bind(entity)(michal);
            zuuluu = michal.SAFETY_FLOWS_MODAL_KEY;
            michal = {};
            michal = report.bind(oscard)(tangon, michal, zuuluu);
 227:
            return entity;
        }
    };
    zuuluu['openSafetyFlow'] = michal;
    return entity;
})();
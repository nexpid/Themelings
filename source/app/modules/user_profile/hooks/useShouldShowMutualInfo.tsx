// app/modules/user_profile/hooks/useShouldShowMutualInfo.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/hooks/useShouldShowMutualInfo.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useShouldShowMutualInfo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 1;
            zuuluu = golfie[zuuluu];
            tangon = undefined;
            verify = oscard.bind(tangon)(zuuluu);
            option = verify.useStateFromStores;
            zuuluu = _closure1_slot3;
            report = new Array(1);
            report[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            report = option.bind(verify)(report, zuuluu);
            zuuluu = _closure1_slot1;
            entity = 2;
            entity = golfie[entity];
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = entity.bind(tangon)(michal);
            entity = 3;
            entity = golfie[entity];
            golfie = oscard.bind(tangon)(entity);
            oscard = golfie.useIsEligibleForUserProfileBlockeeHideMutuals;
            entity = {};
            option = 'useShouldShowMutualInfo';
            entity['location'] = option;
            entity = oscard.bind(golfie)(entity);
            entity = !entity;
            if(entity) { _fun00002_ip = 156; continue _fun00001 }
 122:
            oscard = null;
            oscard = oscard == report;
            tangon = undefined;
            if(oscard) { _fun00002_ip = 138; continue _fun00001 }
 133:
            tangon = report.id;
 138:
            michal = michal.id;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 153; continue _fun00001 }
 150:
            michal = !zuuluu;
 153:
            entity = michal;
 156:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
// app/modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx
export default (function(_, argBar, __, argCor, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
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
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.doesRegistrationHaveIdentityType;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.RegisterTransitionSteps;
    var _closure1_slot4 = golfie;
    tangon = tangon.RegistrationTransitionActionTypes;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/auth/native/components/utils/useIsHCaptchaModalOpenTracking.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useIsHCaptchaModalOpenTracking
        report = _closure1_slot2;
        tangon = report.useContext;
        oscard = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 3;
        zuuluu = zuuluu[entity];
        entity = undefined;
        zuuluu = oscard.bind(entity)(zuuluu);
        zuuluu = zuuluu.TrackRegistrationContext;
        oscard = tangon.bind(report)(zuuluu);
        var _closure2_slot0 = oscard;
        tangon = report.useLayoutEffect;
        zuuluu = new Array(1);
        zuuluu[0] = oscard;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getRootNavigationRef;
                tangon = michal.bind(zuuluu)();
                zuuluu = null;
                report = zuuluu == tangon;
                michal = undefined;
                if(report) { _fun00002_ip = 51; continue _fun00001 }
 46:
                michal = tangon.current;
 51:
                if(!(zuuluu == michal)) { _fun00002_ip = 57; continue _fun00001 }
 55:
                return entity;
 57:
                zuuluu = tangon.addListener;
                michal = 'state';
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot1;
                        entity = 5;
                        michal = michal[entity];
                        entity = undefined;
                        report = zuuluu.bind(entity)(michal);
                        zuuluu = report.isModalOpen;
                        michal = 'hcaptcha';
                        michal = zuuluu.bind(report)(michal);
                        if(!michal) { _fun00004_ip = 53; continue _fun00003 }
 45:
                        zuuluu = _closure1_slot3;
                        michal = zuuluu.bind(entity)();
 53:
                        if(!michal) { _fun00004_ip = 100; continue _fun00003 }
 56:
                        zuuluu = _closure2_slot0;
                        michal = {};
                        report = _closure1_slot4;
                        report = report.CAPTCHA;
                        michal['step'] = report;
                        tangon = _closure1_slot5;
                        tangon = tangon.VIEWED;
                        michal['actionType'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
 100:
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(michal, entity);
                return entity;
            }
        };
        michal = tangon.bind(report)(michal, zuuluu);
        return entity;
    };
    zuuluu['useIsHCaptchaModalOpenTracking'] = michal;
    return entity;
})();
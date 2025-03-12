// app/modules/messages/CtaButtonUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
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
    tangon = {};
    entity = 'mark_as_false_positive';
    tangon['MARK_AS_FALSE_POSITIVE'] = entity;
    entity = 'age_verification_retry';
    tangon['AGE_VERIFICATION_RETRY'] = entity;
    var _closure1_slot2 = tangon;
    entity = 2;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/CtaButtonUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['CtaButtonType'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: getCtaButtonType
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 0;
            zuuluu = zuuluu[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(zuuluu);
            zuuluu = tangon.shouldRenderReportFalsePositiveButton;
            zuuluu = zuuluu.bind(tangon)(oscard);
            if(zuuluu) { _fun00002_ip = 93; continue _fun00001 }
 41:
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            zuuluu = 1;
            zuuluu = report[zuuluu];
            report = tangon.bind(entity)(zuuluu);
            tangon = report.isAgeVerificationMessageWithRetryCta;
            zuuluu = argBar;
            zuuluu = tangon.bind(report)(zuuluu, oscard);
            entity = undefined;
            if(!zuuluu) { _fun00002_ip = 91; continue _fun00001 }
 81:
            zuuluu = _closure1_slot2;
            entity = zuuluu.AGE_VERIFICATION_RETRY;
 91:
            _fun00002_ip = 103; continue _fun00001;
 93:
            michal = _closure1_slot2;
            entity = michal.MARK_AS_FALSE_POSITIVE;
 103:
            return entity;
        }
    };
    zuuluu['getCtaButtonType'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useCtaButtonType
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            golfie = argFoo;
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            entity = 0;
            zuuluu = oscard[entity];
            entity = undefined;
            tangon = report.bind(entity)(zuuluu);
            zuuluu = tangon.useShouldRenderReportFalsePositiveButton;
            tangon = zuuluu.bind(tangon)(golfie);
            zuuluu = 1;
            zuuluu = oscard[zuuluu];
            oscard = report.bind(entity)(zuuluu);
            report = oscard.isAgeVerificationMessageWithRetryCta;
            zuuluu = argBar;
            zuuluu = report.bind(oscard)(zuuluu, golfie);
            if(tangon) { _fun00004_ip = 85; continue _fun00003 }
 68:
            entity = undefined;
            if(!zuuluu) { _fun00004_ip = 83; continue _fun00003 }
 73:
            zuuluu = _closure1_slot2;
            entity = zuuluu.AGE_VERIFICATION_RETRY;
 83:
            _fun00004_ip = 95; continue _fun00003;
 85:
            michal = _closure1_slot2;
            entity = michal.MARK_AS_FALSE_POSITIVE;
 95:
            return entity;
        }
    };
    zuuluu['useCtaButtonType'] = michal;
    return entity;
})();
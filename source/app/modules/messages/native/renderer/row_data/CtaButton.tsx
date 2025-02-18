// app/modules/messages/native/renderer/row_data/CtaButton.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    report = golfie[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(report);
    var _closure1_slot2 = tangon;
    tangon = {};
    report = 'mark_as_false_positive';
    tangon['MARK_AS_FALSE_POSITIVE'] = report;
    var _closure1_slot3 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/messages/native/renderer/row_data/CtaButton.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['CtaButtonCallbackTypes'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: createCtaButton
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = argBar;
            michal = _closure1_slot2;
            entity = michal.getFpMessageInfo;
            michal = entity.bind(michal)(tangon);
            entity = null;
            if(!(entity == michal)) { _fun00002_ip = 34; continue _fun00001 }
 30:
            entity = undefined;
            return entity;
 34:
            michal = _closure1_slot2;
            entity = michal.canSubmitFpReport;
            tangon = entity.bind(michal)(tangon);
            entity = {};
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscard = 1;
            golfie = offset[oscard];
            michal = undefined;
            golfie = verify.bind(michal)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.t;
            oscard = oscard.4q1ElZ;
            oscard = golfie.bind(option)(oscard);
            entity['text'] = oscard;
            oscard = report.reportFpTextColor;
            entity['textColor'] = oscard;
            report = report.reportFpBackgroundColor;
            entity['backgroundColor'] = report;
            if(!tangon) { _fun00002_ip = 146; continue _fun00001 }
 136:
            zuuluu = _closure1_slot3;
            michal = zuuluu.MARK_AS_FALSE_POSITIVE;
 146:
            entity['callback'] = michal;
            return entity;
        }
    };
    zuuluu['createCtaButton'] = tangon;
    michal = function(argFoo, argBar) { // Original name: useCtaButton
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 2;
            entity = michal[entity];
            michal = undefined;
            tangon = tangon.bind(michal)(entity);
            entity = tangon.useShouldRenderReportFalsePositiveButton;
            entity = entity.bind(tangon)(oscard);
            if(entity) { _fun00004_ip = 47; continue _fun00003 }
 45:
            return michal;
 47:
            tangon = _closure1_slot2;
            entity = tangon.canSubmitFpReport;
            tangon = entity.bind(tangon)(oscard);
            entity = {};
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            oscard = 1;
            golfie = offset[oscard];
            golfie = verify.bind(michal)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(michal)(oscard);
            oscard = oscard.t;
            oscard = oscard.4q1ElZ;
            oscard = golfie.bind(option)(oscard);
            entity['text'] = oscard;
            oscard = report.reportFpTextColor;
            entity['textColor'] = oscard;
            report = report.reportFpBackgroundColor;
            entity['backgroundColor'] = report;
            michal = undefined;
            if(!tangon) { _fun00004_ip = 159; continue _fun00003 }
 149:
            zuuluu = _closure1_slot3;
            michal = zuuluu.MARK_AS_FALSE_POSITIVE;
 159:
            entity['callback'] = michal;
            return entity;
        }
    };
    zuuluu['useCtaButton'] = michal;
    return entity;
})();
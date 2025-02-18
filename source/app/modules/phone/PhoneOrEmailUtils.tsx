// app/modules/phone/PhoneOrEmailUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = {};
    entity = 'phone';
    tangon['PHONE'] = entity;
    entity = 'email';
    tangon['EMAIL'] = entity;
    var _closure1_slot0 = tangon;
    entity = /^[-() \d]+$/;
    var _closure1_slot1 = entity;
    report = argPlu;
    entity = 0;
    oscard = report[entity];
    report = argBar;
    entity = undefined;
    golfie = report.bind(entity)(oscard);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/phone/PhoneOrEmailUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['PhoneOrEmailSelectorForceMode'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: shouldShowCountryCodeSelector
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            tangon = argBar;
            entity = _closure1_slot0;
            entity = entity.PHONE;
            if(!(michal !== entity)) { _fun00002_ip = 77; continue _fun00001 }
 23:
            entity = _closure1_slot0;
            entity = entity.EMAIL;
            entity = michal !== entity;
            if(!entity) { _fun00002_ip = 75; continue _fun00001 }
 40:
            report = tangon.length;
            michal = 3;
            report = report < michal;
            michal = !report;
            if(report) { _fun00002_ip = 72; continue _fun00001 }
 58:
            report = _closure1_slot1;
            zuuluu = report.test;
            michal = zuuluu.bind(report)(tangon);
 72:
            entity = michal;
 75:
            _fun00002_ip = 95; continue _fun00001;
 77:
            zuuluu = tangon.startsWith;
            michal = '+';
            michal = zuuluu.bind(tangon)(michal);
            entity = !michal;
 95:
            return entity;
        }
    };
    zuuluu['shouldShowCountryCodeSelector'] = tangon;
    michal = function(argFoo) { // Original name: getPhoneOrEmail
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = /^\+\d/;
            michal = zuuluu.test;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            michal = _closure1_slot0;
            if(entity) { _fun00004_ip = 45; continue _fun00003 }
 37:
            entity = michal.EMAIL;
            _fun00004_ip = 51; continue _fun00003;
 45:
            entity = michal.PHONE;
 51:
            return entity;
        }
    };
    zuuluu['getPhoneOrEmail'] = michal;
    return entity;
})();
// app/modules/premium/referral_program/ReferralProgramUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 2;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/referral_program/ReferralProgramUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getReferralTrialOfferExpirationCopy
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = global;
            michal = golfie.Date;
            entity = michal.now;
            michal = entity.bind(michal)();
            entity = argFoo;
            zuuluu = entity - michal;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            entity = 0;
            entity = report[entity];
            option = undefined;
            entity = tangon.bind(option)(entity);
            entity = entity.Millis;
            entity = entity.HOUR;
            verify = zuuluu / entity;
            oscard = 24;
            if(!(!(verify > oscard))) { _fun00002_ip = 250; continue _fun00001 }
 74:
            yankee = 1;
            if(!(!(verify >= yankee))) { _fun00002_ip = 169; continue _fun00001 }
 81:
            zuuluu = _closure1_slot0;
            entity = _closure1_slot2;
            tangon = entity[yankee];
            tangon = zuuluu.bind(option)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            entity = entity[yankee];
            entity = zuuluu.bind(option)(entity);
            entity = entity.t;
            zuuluu = entity./d0GmZ;
            entity = {};
            foxtra = golfie.Math;
            romeon = foxtra.floor;
            offset = 60;
            offset = offset * verify;
            offset = romeon.bind(foxtra)(offset);
            entity['numMinutes'] = offset;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 248; continue _fun00001;
 169:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            report = zuuluu[yankee];
            report = tangon.bind(option)(report);
            offset = report.intl;
            report = offset.formatToPlainString;
            zuuluu = zuuluu[yankee];
            zuuluu = tangon.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.k9v339;
            zuuluu = {};
            romeon = golfie.Math;
            yankee = romeon.floor;
            yankee = yankee.bind(romeon)(verify);
            zuuluu['numHours'] = yankee;
            entity = report.bind(offset)(tangon, zuuluu);
 248:
            _fun00002_ip = 336; continue _fun00001;
 250:
            zuuluu = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 1;
            tangon = offset[michal];
            tangon = zuuluu.bind(option)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = offset[michal];
            michal = zuuluu.bind(option)(michal);
            michal = michal.t;
            zuuluu = michal.g9s+dH;
            michal = {};
            option = golfie.Math;
            golfie = option.floor;
            oscard = verify / oscard;
            oscard = golfie.bind(option)(oscard);
            michal['numDays'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 336:
            return entity;
        }
    };
    zuuluu['getReferralTrialOfferExpirationCopy'] = michal;
    return entity;
})();
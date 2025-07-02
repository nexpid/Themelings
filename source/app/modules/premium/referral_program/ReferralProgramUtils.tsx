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
    entity = 6;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/referral_program/ReferralProgramUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getReferralTrialOfferExpirationCopy
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
    zuuluu['getReferralTrialOfferExpirationCopy'] = tangon;
    tangon = function() {
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 2;
        entity = oscard[entity];
        tangon = undefined;
        zuuluu = report.bind(tangon)(entity);
        michal = zuuluu.UNSAFE_isDismissibleContentDismissed;
        entity = 3;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.DismissibleContent;
        entity = entity.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['isReferralProgramBadgeAcknowledged'] = tangon;
    tangon = function() {
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 2;
        michal = oscard[entity];
        entity = undefined;
        tangon = report.bind(entity)(michal);
        zuuluu = tangon.UNSAFE_markDismissibleContentAsDismissed;
        michal = 3;
        michal = oscard[michal];
        michal = report.bind(entity)(michal);
        michal = michal.DismissibleContent;
        michal = michal.REFERRAL_PROGRAM_NITRO_TAB_BADGE;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['markReferralProgramBadgeAcknowledged'] = tangon;
    michal = function(argFoo) {
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            tangon = entity.trialOffer;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 4;
            entity = zuuluu[entity];
            offset = undefined;
            zuuluu = michal.bind(offset)(entity);
            michal = zuuluu.useExperiment;
            entity = {};
            report = 'useIsReferralProgramBadgeShowable';
            entity['location'] = report;
            oscard = michal.bind(zuuluu)(entity);
            michal = oscard.enabled;
            entity = false;
            if(!(entity !== michal)) { _fun00004_ip = 238; continue _fun00003 }
 71:
            michal = null;
            if(!(michal != tangon)) { _fun00004_ip = 236; continue _fun00003 }
 80:
            michal = tangon.referrer_id;
            michal = offset !== michal;
            zuuluu = tangon.redeemed_at;
            report = offset === zuuluu;
            zuuluu = global;
            option = zuuluu.Date;
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 5;
            golfie = yankee[golfie];
            verify = verify.bind(offset)(golfie);
            golfie = verify.extractTimestamp;
            tangon = tangon.id;
            romeon = golfie.bind(verify)(tangon);
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            foxtra = golfie;
            tangon = new foxtra[option](romeon, yankee);
            tangon = tangon instanceof Object ? tangon : golfie;
            golfie = tangon.setDate;
            option = tangon.getDate;
            option = option.bind(tangon)();
            oscard = oscard.nDelayDays;
            oscard = option + oscard;
            oscard = golfie.bind(tangon)(oscard);
            zuuluu = zuuluu.Date;
            oscard = zuuluu.prototype;
            oscard = Object.create(oscard, {constructor: {value: zuuluu}});
            foxtra = oscard;
            zuuluu = new foxtra[zuuluu](romeon);
            zuuluu = zuuluu instanceof Object ? zuuluu : oscard;
            if(!michal) { _fun00004_ip = 227; continue _fun00003 }
 224:
            michal = report;
 227:
            if(!michal) { _fun00004_ip = 234; continue _fun00003 }
 230:
            michal = zuuluu >= tangon;
 234:
            return michal;
 236:
            return entity;
 238:
            return entity;
        }
    };
    zuuluu['useIsReferralProgramBadgeShowable'] = michal;
    return entity;
})();
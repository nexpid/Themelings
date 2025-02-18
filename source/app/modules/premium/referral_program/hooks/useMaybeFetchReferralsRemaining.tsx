// app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot5 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = arguments[1];
            entity = undefined;
            if(!(oscard === entity)) { _fun00002_ip = 13; continue _fun00001 }
 11:
            oscard = false;
 13:
            var _closure2_slot0 = oscard;
            var _closure2_slot1 = entity;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            tangon = 4;
            tangon = verify[tangon];
            offset = option.bind(entity)(tangon);
            golfie = offset.useStateFromStores;
            tangon = _closure1_slot3;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            yankee = golfie.bind(offset)(report, tangon);
            tangon = 5;
            tangon = verify[tangon];
            report = option.bind(entity)(tangon);
            tangon = report.useHasDiscountApplied;
            report = tangon.bind(report)();
            tangon = 6;
            tangon = verify[tangon];
            golfie = option.bind(entity)(tangon);
            tangon = golfie.useHasActiveTrial;
            tangon = tangon.bind(golfie)();
            golfie = 7;
            golfie = verify[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.useIsEligibleSenderForReferralProgramExperiment;
            golfie = argFoo;
            golfie = option.bind(verify)(golfie);
            golfie = golfie.eligibleToFetch;
            if(!golfie) { _fun00002_ip = 176; continue _fun00001 }
 153:
            option = null;
            option = option == yankee;
            verify = undefined;
            if(option) { _fun00002_ip = 170; continue _fun00001 }
 164:
            verify = yankee.verified;
 170:
            option = true;
            golfie = option === verify;
 176:
            if(!golfie) { _fun00002_ip = 221; continue _fun00001 }
 179:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            option = 8;
            option = offset[option];
            offset = verify.bind(entity)(option);
            verify = offset.isPremiumExactly;
            option = _closure1_slot5;
            option = option.TIER_2;
            golfie = verify.bind(offset)(yankee, option);
 221:
            if(!golfie) { _fun00002_ip = 227; continue _fun00001 }
 224:
            golfie = !report;
 227:
            if(!golfie) { _fun00002_ip = 233; continue _fun00001 }
 230:
            golfie = !tangon;
 233:
            _closure2_slot1 = golfie;
            report = _closure1_slot2;
            tangon = report.useEffect;
            zuuluu = new Array(2);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00004_ip = 17; continue _fun00003 }
 10:
                    michal = _closure2_slot0;
                    entity = !michal;
 17:
                    if(!entity) { _fun00004_ip = 37; continue _fun00003 }
 20:
                    michal = _closure1_slot4;
                    entity = michal.checkAndFetchReferralsRemaining;
                    entity = entity.bind(michal)();
 37:
                    entity = undefined;
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        }
    };
    zuuluu['useMaybeFetchReferralsRemaining'] = michal;
    return entity;
})();
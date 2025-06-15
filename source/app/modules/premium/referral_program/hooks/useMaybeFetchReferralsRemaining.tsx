// app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.PremiumTypes;
    var _closure1_slot6 = golfie;
    tangon = tangon.FractionalPremiumStates;
    var _closure1_slot7 = tangon;
    tangon = 10;
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
            offset = _closure1_slot2;
            tangon = 4;
            tangon = offset[tangon];
            verify = option.bind(entity)(tangon);
            golfie = verify.useStateFromStores;
            tangon = _closure1_slot4;
            report = new Array(1);
            report[0] = tangon;
            tangon = function() {
                michal = _closure1_slot4;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            romeon = golfie.bind(verify)(report, tangon);
            tangon = 5;
            tangon = offset[tangon];
            report = option.bind(entity)(tangon);
            tangon = report.useHasDiscountApplied;
            report = tangon.bind(report)();
            tangon = 6;
            tangon = offset[tangon];
            golfie = option.bind(entity)(tangon);
            tangon = golfie.useHasActiveTrial;
            tangon = tangon.bind(golfie)();
            golfie = 7;
            golfie = offset[golfie];
            verify = option.bind(entity)(golfie);
            option = verify.useIsEligibleSenderForReferralProgramExperiment;
            golfie = argFoo;
            golfie = option.bind(verify)(golfie);
            golfie = golfie.eligibleToFetch;
            verify = _closure1_slot1;
            option = 8;
            option = offset[option];
            option = verify.bind(entity)(option);
            option = option.bind(entity)();
            if(!golfie) { _fun00002_ip = 194; continue _fun00001 }
 171:
            verify = null;
            verify = verify == romeon;
            offset = undefined;
            if(verify) { _fun00002_ip = 188; continue _fun00001 }
 182:
            offset = romeon.verified;
 188:
            verify = true;
            golfie = verify === offset;
 194:
            if(!golfie) { _fun00002_ip = 239; continue _fun00001 }
 197:
            offset = _closure1_slot0;
            yankee = _closure1_slot2;
            verify = 9;
            verify = yankee[verify];
            yankee = offset.bind(entity)(verify);
            offset = yankee.isPremiumExactly;
            verify = _closure1_slot6;
            verify = verify.TIER_2;
            golfie = offset.bind(yankee)(romeon, verify);
 239:
            if(!golfie) { _fun00002_ip = 248; continue _fun00001 }
 242:
            golfie = option.fetched;
 248:
            if(!golfie) { _fun00002_ip = 271; continue _fun00001 }
 251:
            verify = option.fractionalState;
            option = _closure1_slot7;
            option = option.FP_ONLY;
            golfie = verify !== option;
 271:
            if(!golfie) { _fun00002_ip = 277; continue _fun00001 }
 274:
            golfie = !report;
 277:
            if(!golfie) { _fun00002_ip = 283; continue _fun00001 }
 280:
            golfie = !tangon;
 283:
            _closure2_slot1 = golfie;
            report = _closure1_slot3;
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
                    michal = _closure1_slot5;
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
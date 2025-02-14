// app/modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot5 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/premium/referral_program/hooks/useMaybeFetchReferralsRemaining.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun104957: for(var _fun104957_ip = 0; ; ) switch(_fun104957_ip) {
 0:
            oscar = arguments[1];
            entity = undefined;
            if(!(oscar === entity)) { _fun104957_ip = 13; continue _fun104957 }
 11:
            oscar = false;
 13:
            var _closure2_slot0 = oscar;
            var _closure2_slot1 = entity;
            options = _closure1_slot0;
            verify = _closure1_slot1;
            tango = 4;
            tango = verify[tango];
            offset = options.bind(entity)(tango);
            golf = offset.useStateFromStores;
            tango = _closure1_slot3;
            report = new Array(1);
            report[0] = tango;
            tango = function() {
                mike = _closure1_slot3;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            yankee = golf.bind(offset)(report, tango);
            tango = 5;
            tango = verify[tango];
            report = options.bind(entity)(tango);
            tango = report.useHasDiscountApplied;
            report = tango.bind(report)();
            tango = 6;
            tango = verify[tango];
            golf = options.bind(entity)(tango);
            tango = golf.useHasActiveTrial;
            tango = tango.bind(golf)();
            golf = 7;
            golf = verify[golf];
            verify = options.bind(entity)(golf);
            options = verify.useIsEligibleSenderForReferralProgramExperiment;
            golf = argFoo;
            golf = options.bind(verify)(golf);
            golf = golf.eligibleToFetch;
            if(!golf) { _fun104957_ip = 176; continue _fun104957 }
 153:
            options = null;
            options = options == yankee;
            verify = undefined;
            if(options) { _fun104957_ip = 170; continue _fun104957 }
 164:
            verify = yankee.verified;
 170:
            options = true;
            golf = options === verify;
 176:
            if(!golf) { _fun104957_ip = 221; continue _fun104957 }
 179:
            verify = _closure1_slot0;
            offset = _closure1_slot1;
            options = 8;
            options = offset[options];
            offset = verify.bind(entity)(options);
            verify = offset.isPremiumExactly;
            options = _closure1_slot5;
            options = options.TIER_2;
            golf = verify.bind(offset)(yankee, options);
 221:
            if(!golf) { _fun104957_ip = 227; continue _fun104957 }
 224:
            golf = !report;
 227:
            if(!golf) { _fun104957_ip = 233; continue _fun104957 }
 230:
            golf = !tango;
 233:
            _closure2_slot1 = golf;
            report = _closure1_slot2;
            tango = report.useEffect;
            zulu = new Array(2);
            zulu[0] = golf;
            zulu[1] = oscar;
            mike = function() {
                _fun104959: for(var _fun104959_ip = 0; ; ) switch(_fun104959_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun104959_ip = 17; continue _fun104959 }
 10:
                    mike = _closure2_slot0;
                    entity = !mike;
 17:
                    if(!entity) { _fun104959_ip = 37; continue _fun104959 }
 20:
                    mike = _closure1_slot4;
                    entity = mike.checkAndFetchReferralsRemaining;
                    entity = entity.bind(mike)();
 37:
                    entity = undefined;
                    return entity;
                }
            };
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    zulu['useMaybeFetchReferralsRemaining'] = mike;
    return entity;
})();
// app/modules/premium/ReverseTrialUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _shouldShowReverseTrialFollowUpUpsell
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 401; continue _fun00001 }
 10:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.getCurrentUser;
                    michal = michal.bind(zuuluu)();
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    golfie = undefined;
                    report = report.bind(golfie)(zuuluu);
                    zuuluu = report.isPremium;
                    oscard = zuuluu.bind(report)(michal);
                    report = null;
                    michal = report == michal;
                    if(michal) { _fun00002_ip = 71; continue _fun00001 }
 68:
                    michal = oscard;
 71:
                    if(michal) { _fun00002_ip = 86; continue _fun00001 }
 74:
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.fetchedEndedEntitlements;
 86:
                    if(michal) { _fun00002_ip = 157; continue _fun00001 }
 89:
                    zuuluu = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 8;
                    michal = option[michal];
                    option = zuuluu.bind(golfie)(michal);
                    zuuluu = option.fetchUserEntitlements;
                    michal = {};
                    verify = _closure1_slot10;
                    verify = verify.FRACTIONAL_REDEMPTION;
                    michal['entitlementType'] = verify;
                    verify = false;
                    michal['excludeEnded'] = verify;
                    michal = zuuluu.bind(option)(michal);
                    SaveGenerator(address=148);
 146:
                    return michal;
 148:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(!zuuluu) { _fun00002_ip = 157; continue _fun00001 }
 154:
                    return michal;
 157:
                    option = _closure1_slot7;
                    michal = option.getReverseTrialEntitlementInfo;
                    zuuluu = true;
                    option = michal.bind(option)(zuuluu);
                    verify = report == option;
                    michal = undefined;
                    if(verify) { _fun00002_ip = 189; continue _fun00001 }
 183:
                    michal = option.reverseTrialEntitlement;
 189:
                    if(oscard) { _fun00002_ip = 396; continue _fun00001 }
 195:
                    if(!(report != michal)) { _fun00002_ip = 396; continue _fun00001 }
 202:
                    oscard = michal.endsAt;
                    if(!(report != oscard)) { _fun00002_ip = 396; continue _fun00001 }
 215:
                    option = michal.endsAt;
                    oscard = option.getTime;
                    verify = oscard.bind(option)();
                    oscard = global;
                    offset = oscard.Date;
                    option = offset.now;
                    option = option.bind(offset)();
                    if(!(verify < option)) { _fun00002_ip = 396; continue _fun00001 }
 255:
                    verify = michal.endsAt;
                    option = verify.getTime;
                    option = option.bind(verify)();
                    verify = oscard.Date;
                    oscard = verify.now;
                    verify = oscard.bind(verify)();
                    oscard = 259200000;
                    oscard = verify - oscard;
                    if(!(!(option < oscard))) { _fun00002_ip = 396; continue _fun00001 }
 300:
                    oscard = michal.sourceType;
                    michal = _closure1_slot9;
                    michal = michal.REVERSE_TRIAL;
                    if(!(oscard === michal)) { _fun00002_ip = 396; continue _fun00001 }
 320:
                    michal = argFoo;
                    if(!(report == michal)) { _fun00002_ip = 367; continue _fun00001 }
 327:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 9;
                    michal = option[michal];
                    oscard = oscard.bind(golfie)(michal);
                    michal = oscard.fetchUserOffer;
                    michal = michal.bind(oscard)();
                    SaveGenerator(address=361);
 359:
                    return michal;
 361:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 393; continue _fun00001 }
 367:
                    golfie = _closure1_slot6;
                    oscard = golfie.getUserTrialOffer;
                    tangon = _closure1_slot8;
                    tangon = oscard.bind(golfie)(tangon);
                    if(!(report != tangon)) { _fun00002_ip = 396; continue _fun00001 }
 390:
                    return zuuluu;
 393:
                    return michal;
 396:
                    michal = false;
                    return michal;
 401:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.EntitlementSourceTypes;
    var _closure1_slot9 = golfie;
    tangon = tangon.EntitlementTypes;
    var _closure1_slot10 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/premium/ReverseTrialUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: shouldShowReverseTrialFollowUpUpsell
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['shouldShowReverseTrialFollowUpUpsell'] = tangon;
    michal = function() { // Original name: useIsInReverseTrial
        michal = function() { // Original name: useGetActiveReverseTrialEntitlement
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot0;
                michal = _closure1_slot2;
                option = 10;
                michal = michal[option];
                zuuluu = undefined;
                golfie = tangon.bind(zuuluu)(michal);
                oscard = golfie.useStateFromStores;
                michal = _closure1_slot4;
                tangon = new Array(1);
                tangon[0] = michal;
                michal = function() {
                    michal = _closure1_slot4;
                    entity = michal.getCurrentUser;
                    entity = entity.bind(michal)();
                    return entity;
                };
                michal = oscard.bind(golfie)(tangon, michal);
                var _closure3_slot0 = michal;
                tangon = _closure1_slot5;
                michal = tangon.getPremiumTypeSubscription;
                tangon = michal.bind(tangon)();
                michal = null;
                golfie = michal != tangon;
                if(!golfie) { _fun00004_ip = 93; continue _fun00003 }
 84:
                tangon = tangon.isBoostOnly;
                golfie = !tangon;
 93:
                var _closure3_slot1 = golfie;
                oscard = _closure1_slot0;
                tangon = _closure1_slot2;
                tangon = tangon[option];
                verify = oscard.bind(zuuluu)(tangon);
                option = verify.useStateFromStores;
                tangon = _closure1_slot7;
                oscard = new Array(1);
                oscard[0] = tangon;
                tangon = function() {
                    zuuluu = _closure1_slot7;
                    michal = zuuluu.getReverseTrialEntitlementInfo;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                tangon = option.bind(verify)(oscard, tangon);
                option = michal == tangon;
                oscard = undefined;
                if(option) { _fun00004_ip = 159; continue _fun00003 }
 153:
                oscard = tangon.reverseTrialEntitlement;
 159:
                option = _closure1_slot1;
                verify = _closure1_slot2;
                report = 11;
                report = verify[report];
                report = option.bind(zuuluu)(report);
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        entity = null;
                        entity = entity != zuuluu;
                        if(!entity) { _fun00006_ip = 56; continue _fun00005 }
 16:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 7;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        report = report.bind(zuuluu)(tangon);
                        tangon = report.isPremium;
                        zuuluu = _closure3_slot0;
                        entity = tangon.bind(report)(zuuluu);
 56:
                        if(!entity) { _fun00006_ip = 66; continue _fun00005 }
 59:
                        michal = _closure3_slot1;
                        entity = !michal;
 66:
                        if(!entity) { _fun00006_ip = 148; continue _fun00005 }
 69:
                        entity = _closure1_slot7;
                        entity = entity.fetchedAllEntitlements;
                        if(entity) { _fun00006_ip = 95; continue _fun00005 }
 85:
                        michal = _closure1_slot7;
                        entity = michal.fetchingAllEntitlements;
 95:
                        if(entity) { _fun00006_ip = 148; continue _fun00005 }
 98:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.fetchUserEntitlements;
                        entity = {};
                        tangon = _closure1_slot10;
                        tangon = tangon.FRACTIONAL_REDEMPTION;
                        entity['entitlementType'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
 148:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = report.bind(zuuluu)(entity);
                entity = {};
                report = null;
                if(golfie) { _fun00004_ip = 201; continue _fun00003 }
 198:
                report = oscard;
 201:
                entity['reverseTrialEntitlement'] = report;
                report = michal == tangon;
                zuuluu = undefined;
                if(report) { _fun00004_ip = 221; continue _fun00003 }
 215:
                zuuluu = tangon.hasBankedFractionalNitro;
 221:
                michal = michal != zuuluu;
                if(!michal) { _fun00004_ip = 231; continue _fun00003 }
 228:
                michal = zuuluu;
 231:
                entity['hasBankedFractionalNitro'] = michal;
                return entity;
            }
        };
        entity = undefined;
        michal = michal.bind(entity)();
        entity = {};
        tangon = michal.reverseTrialEntitlement;
        zuuluu = null;
        zuuluu = zuuluu != tangon;
        entity['isInReverseTrial'] = zuuluu;
        michal = michal.hasBankedFractionalNitro;
        entity['hasBankedFractionalNitro'] = michal;
        return entity;
    };
    zuuluu['useIsInReverseTrial'] = michal;
    return entity;
})();
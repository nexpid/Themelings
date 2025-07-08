// app/modules/premium/PremiumBogoPromotionUtilsCommon.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    report = function(argFoo) { // Original name: isUserEligibleBasedOnCurrentOrPreviousSubs
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.experimentEnabled;
            entity = zuuluu.premiumSubscription;
            option = zuuluu.mostRecentSubscription;
            golfie = zuuluu.previousPremiumSubscription;
            if(michal) { _fun00002_ip = 34; continue _fun00001 }
 30:
            michal = false;
            return michal;
 34:
            tangon = null;
            if(!(tangon != option)) { _fun00002_ip = 158; continue _fun00001 }
 40:
            report = option.status;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.ENDED;
            if(!(report === zuuluu)) { _fun00002_ip = 158; continue _fun00001 }
 62:
            report = option.endedAt;
            oscard = option.hasPremiumAtLeast;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.TIER_2;
            zuuluu = oscard.bind(option)(zuuluu);
            if(!(tangon != report)) { _fun00002_ip = 158; continue _fun00001 }
 93:
            if(!zuuluu) { _fun00002_ip = 158; continue _fun00001 }
 96:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 9;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = oscard.bind(zuuluu)(michal);
            option = michal.bind(zuuluu)();
            oscard = option.subtract;
            zuuluu = 10;
            michal = 'days';
            zuuluu = oscard.bind(option)(zuuluu, michal);
            michal = zuuluu.isBefore;
            michal = michal.bind(zuuluu)(report);
            if(michal) { _fun00002_ip = 457; continue _fun00001 }
 158:
            if(!(tangon != golfie)) { _fun00002_ip = 280; continue _fun00001 }
 162:
            report = golfie.status;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.ENDED;
            if(!(report === zuuluu)) { _fun00002_ip = 280; continue _fun00001 }
 184:
            report = golfie.endedAt;
            oscard = golfie.hasPremiumAtLeast;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.TIER_2;
            zuuluu = oscard.bind(golfie)(zuuluu);
            if(!(tangon != report)) { _fun00002_ip = 280; continue _fun00001 }
 215:
            if(!zuuluu) { _fun00002_ip = 280; continue _fun00001 }
 218:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 9;
            michal = zuuluu[michal];
            zuuluu = undefined;
            michal = oscard.bind(zuuluu)(michal);
            golfie = michal.bind(zuuluu)();
            oscard = golfie.subtract;
            zuuluu = 10;
            michal = 'days';
            zuuluu = oscard.bind(golfie)(zuuluu, michal);
            michal = zuuluu.isBefore;
            michal = michal.bind(zuuluu)(report);
            if(michal) { _fun00002_ip = 453; continue _fun00001 }
 280:
            if(!(tangon != entity)) { _fun00002_ip = 393; continue _fun00001 }
 284:
            report = entity.hasPremiumAtLeast;
            michal = _closure1_slot11;
            michal = michal.TIER_2;
            michal = report.bind(entity)(michal);
            oscard = _closure1_slot5;
            report = oscard.getCurrentUser;
            oscard = report.bind(oscard)();
            tangon = tangon == entity;
            if(tangon) { _fun00002_ip = 337; continue _fun00001 }
 328:
            entity = entity.hasActiveTrial;
            tangon = !entity;
 337:
            entity = !tangon;
            if(tangon) { _fun00002_ip = 387; continue _fun00001 }
 343:
            golfie = _closure1_slot1;
            report = _closure1_slot2;
            tangon = 10;
            report = report[tangon];
            tangon = undefined;
            report = golfie.bind(tangon)(report);
            tangon = report.isPremiumExactly;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.TIER_0;
            entity = tangon.bind(report)(oscard, zuuluu);
 387:
            if(michal) { _fun00002_ip = 449; continue _fun00001 }
 390:
            if(entity) { _fun00002_ip = 449; continue _fun00001 }
 393:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 11;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.isMobile;
            entity = !entity;
            if(entity) { _fun00002_ip = 447; continue _fun00001 }
 430:
            zuuluu = _closure1_slot8;
            michal = zuuluu.isFractionalPremiumActive;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 447:
            return entity;
 449:
            entity = false;
            return entity;
 453:
            entity = false;
            return entity;
 457:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot15 = report;
    tangon = function() { // Original name: isEligibleForBOGOPromotion
        entity = undefined;
        tangon = _closure1_slot17;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = tangon;
    entity = function() { // Original name: _isEligibleForBOGOPromotion
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    verify = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 719; continue _fun00003 }
 13:
                    golfie = undefined;
                    if(!(verify === golfie)) { _fun00004_ip = 21; continue _fun00003 }
 19:
                    verify = true;
 21:
                    SaveGenerator(address=25);
 23:
                    return golfie;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 716; continue _fun00003 }
 34:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getCurrentUser;
                    yankee = zuuluu.bind(tangon)();
                    oscard = null;
                    zuuluu = oscard != yankee;
                    if(!zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 59:
                    tangon = yankee.isClaimed;
                    zuuluu = tangon.bind(yankee)();
 69:
                    foxtra = !zuuluu;
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = sizing[zuuluu];
                    backup = report.bind(golfie)(zuuluu);
                    romeon = backup.getCurrentConfig;
                    offset = {};
                    zuuluu = '153d31_3';
                    offset['location'] = zuuluu;
                    tangon = {};
                    zuuluu = false;
                    tangon['autoTrackExposure'] = zuuluu;
                    tangon = romeon.bind(backup)(offset, tangon);
                    romeon = tangon.paymentsBlocked;
                    kiloes = _closure1_slot0;
                    tangon = 15;
                    tangon = sizing[tangon];
                    offset = kiloes.bind(golfie)(tangon);
                    tangon = offset.isBogoPromotionExperimentEnabled;
                    tangon = tangon.bind(offset)();
                    offset = tangon.enabled;
                    tangon = 16;
                    tangon = sizing[tangon];
                    backup = kiloes.bind(golfie)(tangon);
                    tangon = backup.isBogoMobilePromotionExperimentEnabled;
                    tangon = tangon.bind(backup)();
                    backup = tangon.enabled;
                    tangon = 21;
                    tangon = sizing[tangon];
                    result = report.bind(golfie)(tangon);
                    output = result.getCurrentConfig;
                    report = {};
                    tangon = '153d31_4';
                    report['location'] = tangon;
                    tangon = {};
                    tangon['autoTrackExposure'] = zuuluu;
                    tangon = output.bind(result)(report, tangon);
                    report = tangon.enabled;
                    tangon = 11;
                    tangon = sizing[tangon];
                    tangon = kiloes.bind(golfie)(tangon);
                    tangon = tangon.isMobile;
                    tangon = !tangon;
                    if(tangon) { _fun00004_ip = 264; continue _fun00003 }
 261:
                    tangon = backup;
 264:
                    if(foxtra) { _fun00004_ip = 713; continue _fun00003 }
 270:
                    if(romeon) { _fun00004_ip = 713; continue _fun00003 }
 276:
                    if(!offset) { _fun00004_ip = 713; continue _fun00003 }
 282:
                    if(!verify) { _fun00004_ip = 291; continue _fun00003 }
 285:
                    if(!report) { _fun00004_ip = 713; continue _fun00003 }
 291:
                    if(!tangon) { _fun00004_ip = 713; continue _fun00003 }
 297:
                    report = _closure1_slot7;
                    tangon = report.isFetchingOffer;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00004_ip = 345; continue _fun00003 }
 314:
                    verify = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 10;
                    report = romeon[report];
                    verify = verify.bind(golfie)(report);
                    report = verify.isPremium;
                    tangon = report.bind(verify)(yankee);
 345:
                    if(tangon) { _fun00004_ip = 398; continue _fun00003 }
 348:
                    report = _closure1_slot0;
                    verify = _closure1_slot2;
                    tangon = 24;
                    tangon = verify[tangon];
                    verify = report.bind(golfie)(tangon);
                    report = verify.fetchUserOffer;
                    tangon = 'BogoPromotionUtils';
                    tangon = report.bind(verify)(tangon);
                    SaveGenerator(address=389);
 387:
                    return tangon;
 389:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(!report) { _fun00004_ip = 398; continue _fun00003 }
 395:
                    return tangon;
 398:
                    report = _closure1_slot7;
                    tangon = report.hasFetchedOffer;
                    tangon = tangon.bind(report)();
                    if(!tangon) { _fun00004_ip = 457; continue _fun00003 }
 415:
                    report = _closure1_slot7;
                    tangon = report.hasAnyUnexpiredOffer;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00004_ip = 710; continue _fun00003 }
 435:
                    report = _closure1_slot7;
                    tangon = report.hasAnyUnexpiredDiscountOffer;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00004_ip = 710; continue _fun00003 }
 457:
                    report = _closure1_slot6;
                    tangon = report.hasFetchedMostRecentPremiumTypeSubscription;
                    tangon = tangon.bind(report)();
                    tangon = !tangon;
                    verify = undefined;
                    if(!tangon) { _fun00004_ip = 501; continue _fun00003 }
 481:
                    yankee = _closure1_slot5;
                    report = yankee.getCurrentUser;
                    report = report.bind(yankee)();
                    tangon = oscard != report;
                    verify = report;
 501:
                    if(!tangon) { _fun00004_ip = 525; continue _fun00003 }
 504:
                    oscard = verify.hasPurchasedFlag;
                    report = _closure1_slot10;
                    report = report.PREMIUM_TIER_2;
                    tangon = oscard.bind(verify)(report);
 525:
                    if(!tangon) { _fun00004_ip = 571; continue _fun00003 }
 528:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 25;
                    tangon = oscard[tangon];
                    report = report.bind(golfie)(tangon);
                    tangon = report.fetchMostRecentSubscription;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=562);
 560:
                    return tangon;
 562:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 707; continue _fun00003 }
 571:
                    oscard = _closure1_slot6;
                    report = oscard.hasFetchedSubscriptions;
                    report = report.bind(oscard)();
                    if(report) { _fun00004_ip = 631; continue _fun00003 }
 588:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 25;
                    report = verify[report];
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.fetchSubscriptions;
                    report = report.bind(oscard)();
                    SaveGenerator(address=622);
 620:
                    return report;
 622:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscard) { _fun00004_ip = 631; continue _fun00003 }
 628:
                    return report;
 631:
                    oscard = _closure1_slot6;
                    report = oscard.getMostRecentPremiumTypeSubscription;
                    verify = report.bind(oscard)();
                    oscard = _closure1_slot15;
                    report = {};
                    report['experimentEnabled'] = offset;
                    yankee = _closure1_slot6;
                    offset = yankee.getPremiumTypeSubscription;
                    offset = offset.bind(yankee)();
                    report['premiumSubscription'] = offset;
                    report['mostRecentSubscription'] = verify;
                    verify = _closure1_slot6;
                    option = verify.getPreviousPremiumTypeSubscription;
                    option = option.bind(verify)();
                    report['previousPremiumSubscription'] = option;
                    report = oscard.bind(golfie)(report);
                    return report;
 707:
                    return tangon;
 710:
                    return zuuluu;
 713:
                    return zuuluu;
 716:
                    return michal;
 719:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _maybeFetchActiveBogoPromotion
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 172; continue _fun00005 }
 10:
                    report = _closure1_slot16;
                    zuuluu = undefined;
                    michal = false;
                    michal = report.bind(zuuluu)(michal);
                    SaveGenerator(address=30);
 28:
                    return michal;
 30:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 169; continue _fun00005 }
 39:
                    if(!michal) { _fun00006_ip = 160; continue _fun00005 }
 42:
                    report = _closure1_slot9;
                    oscard = report.bogoPromotion;
                    report = null;
                    if(!(report != oscard)) { _fun00006_ip = 120; continue _fun00005 }
 58:
                    report = global;
                    option = report.Date;
                    verify = oscard.endDate;
                    golfie = option.prototype;
                    golfie = Object.create(golfie, {constructor: {value: option}});
                    offset = golfie;
                    oscard = new offset[option](verify, option);
                    golfie = oscard instanceof Object ? oscard : golfie;
                    oscard = golfie.valueOf;
                    oscard = oscard.bind(golfie)();
                    golfie = report.Date;
                    report = golfie.now;
                    report = report.bind(golfie)();
                    if(!(!(oscard >= report))) { _fun00006_ip = 166; continue _fun00005 }
 120:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 26;
                    tangon = oscard[tangon];
                    report = report.bind(zuuluu)(tangon);
                    tangon = report.fetchActiveBogoPromotion;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=154);
 152:
                    return tangon;
 154:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00006_ip = 163; continue _fun00005 }
 160:
                    return zuuluu;
 163:
                    return tangon;
 166:
                    return zuuluu;
 169:
                    return michal;
 172:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = option[entity];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.PurchasedFlags;
    var _closure1_slot10 = verify;
    oscard = oscard.PremiumTypes;
    var _closure1_slot11 = oscard;
    oscard = 8;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.AnalyticEvents;
    var _closure1_slot12 = verify;
    oscard = oscard.SubscriptionStatusTypes;
    var _closure1_slot13 = oscard;
    oscard = function(argFoo) { // Original name: recordEligibilityResult
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            option = entity.result;
            oscard = entity.origin;
            zuuluu = _closure1_slot5;
            entity = zuuluu.getCurrentUser;
            offset = entity.bind(zuuluu)();
            zuuluu = _closure1_slot4;
            entity = zuuluu.getSessionId;
            golfie = entity.bind(zuuluu)();
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 12;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot12;
            zuuluu = michal.BOGO_ELIGIBILITY_RESULT;
            michal = {};
            verify = null;
            yankee = verify == offset;
            verify = undefined;
            if(yankee) { _fun00008_ip = 100; continue _fun00007 }
 95:
            verify = offset.id;
 100:
            michal['user_id'] = verify;
            michal['result'] = option;
            michal['session_id'] = golfie;
            michal['result_origin'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    var _closure1_slot14 = oscard;
    oscard = 27;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/premium/PremiumBogoPromotionUtilsCommon.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['isUserEligibleBasedOnCurrentOrPreviousSubs'] = report;
    report = function() { // Original name: useIsEligibleForBogoPromotion
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = arguments[0];
            golfie = undefined;
            if(!(tangon === golfie)) { _fun00010_ip = 13; continue _fun00009 }
 11:
            tangon = true;
 13:
            option = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 13;
            michal = oscard[michal];
            yankee = option.bind(golfie)(michal);
            offset = yankee.useExperiment;
            zuuluu = {};
            michal = '153d31_1';
            zuuluu['location'] = michal;
            michal = {};
            verify = false;
            michal['autoTrackExposure'] = verify;
            michal = offset.bind(yankee)(zuuluu, michal);
            offset = michal.paymentsBlocked;
            zuuluu = _closure1_slot0;
            michal = 14;
            michal = oscard[michal];
            yankee = zuuluu.bind(golfie)(michal);
            michal = yankee.useBogoPromotion;
            michal = michal.bind(yankee)();
            yankee = michal.promotion;
            michal = 15;
            michal = oscard[michal];
            michal = option.bind(golfie)(michal);
            michal = michal.bind(golfie)();
            result = michal.enabled;
            michal = 16;
            michal = oscard[michal];
            michal = option.bind(golfie)(michal);
            michal = michal.bind(golfie)();
            foxtra = michal.enabled;
            michal = 17;
            michal = oscard[michal];
            backup = zuuluu.bind(golfie)(michal);
            romeon = backup.useStateFromStoresObject;
            michal = _closure1_slot6;
            option = new Array(1);
            option[0] = michal;
            michal = function() {
                entity = {};
                tangon = _closure1_slot6;
                zuuluu = tangon.getMostRecentPremiumTypeSubscription;
                zuuluu = zuuluu.bind(tangon)();
                entity['mostRecentSubscription'] = zuuluu;
                tangon = _closure1_slot6;
                zuuluu = tangon.getPremiumTypeSubscription;
                zuuluu = zuuluu.bind(tangon)();
                entity['premiumSubscription'] = zuuluu;
                zuuluu = _closure1_slot6;
                michal = zuuluu.getPreviousPremiumTypeSubscription;
                michal = michal.bind(zuuluu)();
                entity['previousPremiumSubscription'] = michal;
                return entity;
            };
            michal = romeon.bind(backup)(option, michal);
            sizing = michal.mostRecentSubscription;
            output = michal.premiumSubscription;
            kiloes = michal.previousPremiumSubscription;
            michal = 18;
            michal = oscard[michal];
            option = zuuluu.bind(golfie)(michal);
            michal = option.usePremiumTrialOffer;
            romeon = michal.bind(option)();
            michal = 19;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(golfie)(michal);
            michal = zuuluu.usePremiumDiscountOffer;
            option = michal.bind(zuuluu)();
            michal = global;
            echoed = michal.Date;
            zuuluu = null;
            oscard = zuuluu == yankee;
            backup = undefined;
            if(oscard) { _fun00010_ip = 277; continue _fun00009 }
 271:
            backup = yankee.endDate;
 277:
            update = zuuluu != backup;
            oscard = 0;
            if(!update) { _fun00010_ip = 289; continue _fun00009 }
 286:
            oscard = backup;
 289:
            backup = echoed.prototype;
            backup = Object.create(backup, {constructor: {value: echoed}});
            config = backup;
            sequen = oscard;
            oscard = new config[echoed](sequen, vacuum);
            backup = oscard instanceof Object ? oscard : backup;
            oscard = backup.valueOf;
            source = oscard.bind(backup)();
            oscard = michal.Date;
            michal = oscard.now;
            update = michal.bind(oscard)();
            oscard = update > source;
            backup = _closure1_slot1;
            echoed = _closure1_slot2;
            michal = 20;
            michal = echoed[michal];
            backup = backup.bind(golfie)(michal);
            michal = {};
            echoed = -1;
            if(oscard) { _fun00010_ip = 375; continue _fun00009 }
 371:
            echoed = source - update;
 375:
            michal['delay'] = echoed;
            michal = backup.bind(golfie)(michal);
            backup = _closure1_slot0;
            echoed = _closure1_slot2;
            michal = 11;
            michal = echoed[michal];
            michal = backup.bind(golfie)(michal);
            michal = michal.isMobile;
            michal = !michal;
            if(michal) { _fun00010_ip = 420; continue _fun00009 }
 417:
            michal = foxtra;
 420:
            backup = _closure1_slot15;
            foxtra = {};
            foxtra['experimentEnabled'] = result;
            foxtra['premiumSubscription'] = output;
            foxtra['mostRecentSubscription'] = sizing;
            foxtra['previousPremiumSubscription'] = kiloes;
            foxtra = backup.bind(golfie)(foxtra);
            if(!michal) { _fun00010_ip = 457; continue _fun00009 }
 454:
            michal = foxtra;
 457:
            if(!michal) { _fun00010_ip = 464; continue _fun00009 }
 460:
            michal = zuuluu == romeon;
 464:
            if(!michal) { _fun00010_ip = 471; continue _fun00009 }
 467:
            michal = zuuluu != yankee;
 471:
            if(!michal) { _fun00010_ip = 477; continue _fun00009 }
 474:
            michal = !offset;
 477:
            if(!michal) { _fun00010_ip = 484; continue _fun00009 }
 480:
            michal = zuuluu == option;
 484:
            offset = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 21;
            zuuluu = yankee[zuuluu];
            foxtra = offset.bind(golfie)(zuuluu);
            romeon = foxtra.useExperiment;
            option = {};
            zuuluu = '153d31_2';
            option['location'] = zuuluu;
            zuuluu = {};
            zuuluu['autoTrackExposure'] = michal;
            backup = !michal;
            zuuluu['disable'] = backup;
            zuuluu = romeon.bind(foxtra)(option, zuuluu);
            zuuluu = zuuluu.enabled;
            option = 22;
            option = yankee[option];
            yankee = offset.bind(golfie)(option);
            offset = yankee.useExperiment;
            option = {};
            romeon = 'useIsEligibleForBogoPromotion';
            option['location'] = romeon;
            option = offset.bind(yankee)(option);
            offset = option.getServerResult;
            option = verify === oscard;
            if(!option) { _fun00010_ip = 598; continue _fun00009 }
 594:
            option = verify === zuuluu;
 598:
            if(!option) { _fun00010_ip = 607; continue _fun00009 }
 601:
            verify = true;
            option = verify === offset;
 607:
            if(!option) { _fun00010_ip = 667; continue _fun00009 }
 610:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 23;
            option = offset[option];
            offset = verify.bind(golfie)(option);
            verify = offset.fetchMarketingCampaignEligibility;
            option = {};
            yankee = 'BOGO';
            option['campaignId'] = yankee;
            verify = verify.bind(offset)(option);
            option = verify.then;
            entity = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argFoo;
                    entity = undefined;
                    if(!(entity !== tangon)) { _fun00012_ip = 37; continue _fun00011 }
 9:
                    zuuluu = _closure1_slot14;
                    michal = {};
                    michal['result'] = tangon;
                    tangon = 'server';
                    michal['origin'] = tangon;
                    michal = zuuluu.bind(entity)(michal);
 37:
                    return entity;
                }
            };
            entity = option.bind(verify)(entity);
 667:
            entity = !oscard;
            if(oscard) { _fun00010_ip = 707; continue _fun00009 }
 673:
            oscard = _closure1_slot14;
            report = {};
            report['result'] = michal;
            option = 'client';
            report['origin'] = option;
            report = oscard.bind(golfie)(report);
            if(!tangon) { _fun00010_ip = 704; continue _fun00009 }
 701:
            michal = zuuluu;
 704:
            entity = michal;
 707:
            return entity;
        }
    };
    zuuluu['useIsEligibleForBogoPromotion'] = report;
    zuuluu['isEligibleForBOGOPromotion'] = tangon;
    michal = function() { // Original name: maybeFetchActiveBogoPromotion
        entity = undefined;
        tangon = _closure1_slot18;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['maybeFetchActiveBogoPromotion'] = michal;
    return entity;
})();
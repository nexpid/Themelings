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
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.ENDED;
            if(!(report === zuuluu)) { _fun00002_ip = 158; continue _fun00001 }
 62:
            report = option.endedAt;
            oscard = option.hasPremiumAtLeast;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.TIER_2;
            zuuluu = oscard.bind(option)(zuuluu);
            if(!(tangon != report)) { _fun00002_ip = 158; continue _fun00001 }
 93:
            if(!zuuluu) { _fun00002_ip = 158; continue _fun00001 }
 96:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 8;
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
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.ENDED;
            if(!(report === zuuluu)) { _fun00002_ip = 280; continue _fun00001 }
 184:
            report = golfie.endedAt;
            oscard = golfie.hasPremiumAtLeast;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.TIER_2;
            zuuluu = oscard.bind(golfie)(zuuluu);
            if(!(tangon != report)) { _fun00002_ip = 280; continue _fun00001 }
 215:
            if(!zuuluu) { _fun00002_ip = 280; continue _fun00001 }
 218:
            oscard = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 8;
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
            michal = _closure1_slot10;
            michal = michal.TIER_2;
            michal = report.bind(entity)(michal);
            oscard = _closure1_slot4;
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
            tangon = 9;
            report = report[tangon];
            tangon = undefined;
            report = golfie.bind(tangon)(report);
            tangon = report.isPremiumExactly;
            zuuluu = _closure1_slot10;
            zuuluu = zuuluu.TIER_0;
            entity = tangon.bind(report)(oscard, zuuluu);
 387:
            if(michal) { _fun00002_ip = 449; continue _fun00001 }
 390:
            if(entity) { _fun00002_ip = 449; continue _fun00001 }
 393:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 10;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.isMobile;
            entity = !entity;
            if(entity) { _fun00002_ip = 447; continue _fun00001 }
 430:
            zuuluu = _closure1_slot7;
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
    var _closure1_slot12 = report;
    tangon = function() { // Original name: isEligibleForBOGOPromotion
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = tangon;
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
                    if(michal) { _fun00004_ip = 618; continue _fun00003 }
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
                    if(zuuluu) { _fun00004_ip = 615; continue _fun00003 }
 34:
                    tangon = _closure1_slot4;
                    zuuluu = tangon.getCurrentUser;
                    report = zuuluu.bind(tangon)();
                    oscard = null;
                    zuuluu = oscard != report;
                    if(!zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 59:
                    tangon = report.isClaimed;
                    zuuluu = tangon.bind(report)();
 69:
                    romeon = !zuuluu;
                    report = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    zuuluu = 11;
                    zuuluu = kiloes[zuuluu];
                    foxtra = report.bind(golfie)(zuuluu);
                    yankee = foxtra.getCurrentConfig;
                    offset = {};
                    zuuluu = '153d31_3';
                    offset['location'] = zuuluu;
                    tangon = {};
                    zuuluu = false;
                    tangon['autoTrackExposure'] = zuuluu;
                    tangon = yankee.bind(foxtra)(offset, tangon);
                    yankee = tangon.paymentsBlocked;
                    backup = _closure1_slot0;
                    tangon = 13;
                    tangon = kiloes[tangon];
                    offset = backup.bind(golfie)(tangon);
                    tangon = offset.isBogoPromotionExperimentEnabled;
                    tangon = tangon.bind(offset)();
                    offset = tangon.enabled;
                    tangon = 14;
                    tangon = kiloes[tangon];
                    foxtra = backup.bind(golfie)(tangon);
                    tangon = foxtra.isBogoMobilePromotionExperimentEnabled;
                    tangon = tangon.bind(foxtra)();
                    foxtra = tangon.enabled;
                    tangon = 19;
                    tangon = kiloes[tangon];
                    output = report.bind(golfie)(tangon);
                    sizing = output.getCurrentConfig;
                    report = {};
                    tangon = '153d31_4';
                    report['location'] = tangon;
                    tangon = {};
                    tangon['autoTrackExposure'] = zuuluu;
                    tangon = sizing.bind(output)(report, tangon);
                    report = tangon.enabled;
                    tangon = 10;
                    tangon = kiloes[tangon];
                    tangon = backup.bind(golfie)(tangon);
                    tangon = tangon.isMobile;
                    tangon = !tangon;
                    if(tangon) { _fun00004_ip = 264; continue _fun00003 }
 261:
                    tangon = foxtra;
 264:
                    if(romeon) { _fun00004_ip = 612; continue _fun00003 }
 270:
                    if(yankee) { _fun00004_ip = 612; continue _fun00003 }
 276:
                    if(!offset) { _fun00004_ip = 612; continue _fun00003 }
 282:
                    if(!verify) { _fun00004_ip = 291; continue _fun00003 }
 285:
                    if(!report) { _fun00004_ip = 612; continue _fun00003 }
 291:
                    if(!tangon) { _fun00004_ip = 612; continue _fun00003 }
 297:
                    report = _closure1_slot6;
                    tangon = report.hasFetchedOffer;
                    tangon = tangon.bind(report)();
                    if(!tangon) { _fun00004_ip = 356; continue _fun00003 }
 314:
                    report = _closure1_slot6;
                    tangon = report.hasAnyUnexpiredOffer;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00004_ip = 609; continue _fun00003 }
 334:
                    report = _closure1_slot6;
                    tangon = report.hasAnyUnexpiredDiscountOffer;
                    tangon = tangon.bind(report)();
                    if(tangon) { _fun00004_ip = 609; continue _fun00003 }
 356:
                    report = _closure1_slot5;
                    tangon = report.hasFetchedMostRecentPremiumTypeSubscription;
                    tangon = tangon.bind(report)();
                    tangon = !tangon;
                    verify = undefined;
                    if(!tangon) { _fun00004_ip = 400; continue _fun00003 }
 380:
                    yankee = _closure1_slot4;
                    report = yankee.getCurrentUser;
                    report = report.bind(yankee)();
                    tangon = oscard != report;
                    verify = report;
 400:
                    if(!tangon) { _fun00004_ip = 424; continue _fun00003 }
 403:
                    oscard = verify.hasPurchasedFlag;
                    report = _closure1_slot9;
                    report = report.PREMIUM_TIER_2;
                    tangon = oscard.bind(verify)(report);
 424:
                    if(!tangon) { _fun00004_ip = 470; continue _fun00003 }
 427:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 20;
                    tangon = oscard[tangon];
                    report = report.bind(golfie)(tangon);
                    tangon = report.fetchMostRecentSubscription;
                    tangon = tangon.bind(report)();
                    SaveGenerator(address=461);
 459:
                    return tangon;
 461:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 606; continue _fun00003 }
 470:
                    oscard = _closure1_slot5;
                    report = oscard.hasFetchedSubscriptions;
                    report = report.bind(oscard)();
                    if(report) { _fun00004_ip = 530; continue _fun00003 }
 487:
                    oscard = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 20;
                    report = verify[report];
                    oscard = oscard.bind(golfie)(report);
                    report = oscard.fetchSubscriptions;
                    report = report.bind(oscard)();
                    SaveGenerator(address=521);
 519:
                    return report;
 521:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(!oscard) { _fun00004_ip = 530; continue _fun00003 }
 527:
                    return report;
 530:
                    oscard = _closure1_slot5;
                    report = oscard.getMostRecentPremiumTypeSubscription;
                    verify = report.bind(oscard)();
                    oscard = _closure1_slot12;
                    report = {};
                    report['experimentEnabled'] = offset;
                    yankee = _closure1_slot5;
                    offset = yankee.getPremiumTypeSubscription;
                    offset = offset.bind(yankee)();
                    report['premiumSubscription'] = offset;
                    report['mostRecentSubscription'] = verify;
                    verify = _closure1_slot5;
                    option = verify.getPreviousPremiumTypeSubscription;
                    option = option.bind(verify)();
                    report['previousPremiumSubscription'] = option;
                    report = oscard.bind(golfie)(report);
                    return report;
 606:
                    return tangon;
 609:
                    return zuuluu;
 612:
                    return zuuluu;
 615:
                    return michal;
 618:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
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
                    report = _closure1_slot13;
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
                    report = _closure1_slot8;
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
                    tangon = 21;
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
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
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
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.PurchasedFlags;
    var _closure1_slot9 = verify;
    oscard = oscard.PremiumTypes;
    var _closure1_slot10 = oscard;
    oscard = 7;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.SubscriptionStatusTypes;
    var _closure1_slot11 = oscard;
    oscard = 22;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/premium/PremiumBogoPromotionUtilsCommon.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['isUserEligibleBasedOnCurrentOrPreviousSubs'] = report;
    report = function() { // Original name: useIsEligibleForBogoPromotion
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = arguments[0];
            oscard = undefined;
            if(!(tangon === oscard)) { _fun00008_ip = 11; continue _fun00007 }
 9:
            tangon = true;
 11:
            golfie = _closure1_slot1;
            report = _closure1_slot2;
            michal = 11;
            michal = report[michal];
            verify = golfie.bind(oscard)(michal);
            option = verify.useExperiment;
            zuuluu = {};
            michal = '153d31_1';
            zuuluu['location'] = michal;
            michal = {};
            offset = false;
            michal['autoTrackExposure'] = offset;
            michal = option.bind(verify)(zuuluu, michal);
            option = michal.paymentsBlocked;
            zuuluu = _closure1_slot0;
            michal = 12;
            michal = report[michal];
            verify = zuuluu.bind(oscard)(michal);
            michal = verify.useBogoPromotion;
            michal = michal.bind(verify)();
            verify = michal.promotion;
            michal = 13;
            michal = report[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.bind(oscard)();
            sizing = michal.enabled;
            michal = 14;
            michal = report[michal];
            michal = golfie.bind(oscard)(michal);
            michal = michal.bind(oscard)();
            yankee = michal.enabled;
            michal = 15;
            michal = report[michal];
            romeon = zuuluu.bind(oscard)(michal);
            offset = romeon.useStateFromStoresObject;
            michal = _closure1_slot5;
            golfie = new Array(1);
            golfie[0] = michal;
            michal = function() {
                entity = {};
                tangon = _closure1_slot5;
                zuuluu = tangon.getMostRecentPremiumTypeSubscription;
                zuuluu = zuuluu.bind(tangon)();
                entity['mostRecentSubscription'] = zuuluu;
                tangon = _closure1_slot5;
                zuuluu = tangon.getPremiumTypeSubscription;
                zuuluu = zuuluu.bind(tangon)();
                entity['premiumSubscription'] = zuuluu;
                zuuluu = _closure1_slot5;
                michal = zuuluu.getPreviousPremiumTypeSubscription;
                michal = michal.bind(zuuluu)();
                entity['previousPremiumSubscription'] = michal;
                return entity;
            };
            michal = offset.bind(romeon)(golfie, michal);
            backup = michal.mostRecentSubscription;
            kiloes = michal.premiumSubscription;
            foxtra = michal.previousPremiumSubscription;
            michal = 16;
            michal = report[michal];
            golfie = zuuluu.bind(oscard)(michal);
            michal = golfie.usePremiumTrialOffer;
            offset = michal.bind(golfie)();
            michal = 17;
            michal = report[michal];
            zuuluu = zuuluu.bind(oscard)(michal);
            michal = zuuluu.usePremiumDiscountOffer;
            golfie = michal.bind(zuuluu)();
            michal = global;
            output = michal.Date;
            zuuluu = null;
            report = zuuluu == verify;
            romeon = undefined;
            if(report) { _fun00008_ip = 277; continue _fun00007 }
 271:
            romeon = verify.endDate;
 277:
            result = zuuluu != romeon;
            report = 0;
            if(!result) { _fun00008_ip = 289; continue _fun00007 }
 286:
            report = romeon;
 289:
            romeon = output.prototype;
            romeon = Object.create(romeon, {constructor: {value: output}});
            vacuum = romeon;
            ctrled = report;
            report = new vacuum[output](ctrled, source);
            romeon = report instanceof Object ? report : romeon;
            report = romeon.valueOf;
            echoed = report.bind(romeon)();
            report = michal.Date;
            michal = report.now;
            result = michal.bind(report)();
            report = result > echoed;
            romeon = _closure1_slot1;
            output = _closure1_slot2;
            michal = 18;
            michal = output[michal];
            romeon = romeon.bind(oscard)(michal);
            michal = {};
            output = -1;
            if(report) { _fun00008_ip = 375; continue _fun00007 }
 371:
            output = echoed - result;
 375:
            michal['delay'] = output;
            michal = romeon.bind(oscard)(michal);
            romeon = _closure1_slot0;
            output = _closure1_slot2;
            michal = 10;
            michal = output[michal];
            michal = romeon.bind(oscard)(michal);
            michal = michal.isMobile;
            michal = !michal;
            if(michal) { _fun00008_ip = 420; continue _fun00007 }
 417:
            michal = yankee;
 420:
            romeon = _closure1_slot12;
            yankee = {};
            yankee['experimentEnabled'] = sizing;
            yankee['premiumSubscription'] = kiloes;
            yankee['mostRecentSubscription'] = backup;
            yankee['previousPremiumSubscription'] = foxtra;
            yankee = romeon.bind(oscard)(yankee);
            if(!michal) { _fun00008_ip = 457; continue _fun00007 }
 454:
            michal = yankee;
 457:
            if(!michal) { _fun00008_ip = 464; continue _fun00007 }
 460:
            michal = zuuluu == offset;
 464:
            if(!michal) { _fun00008_ip = 471; continue _fun00007 }
 467:
            michal = zuuluu != verify;
 471:
            if(!michal) { _fun00008_ip = 477; continue _fun00007 }
 474:
            michal = !option;
 477:
            if(!michal) { _fun00008_ip = 484; continue _fun00007 }
 480:
            michal = zuuluu == golfie;
 484:
            zuuluu = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 19;
            entity = golfie[entity];
            golfie = zuuluu.bind(oscard)(entity);
            oscard = golfie.useExperiment;
            zuuluu = {};
            entity = '153d31_2';
            zuuluu['location'] = entity;
            entity = {};
            entity['autoTrackExposure'] = michal;
            option = !michal;
            entity['disable'] = option;
            entity = oscard.bind(golfie)(zuuluu, entity);
            zuuluu = entity.enabled;
            entity = !report;
            if(report) { _fun00008_ip = 563; continue _fun00007 }
 554:
            if(!tangon) { _fun00008_ip = 560; continue _fun00007 }
 557:
            michal = zuuluu;
 560:
            entity = michal;
 563:
            return entity;
        }
    };
    zuuluu['useIsEligibleForBogoPromotion'] = report;
    zuuluu['isEligibleForBOGOPromotion'] = tangon;
    michal = function() { // Original name: maybeFetchActiveBogoPromotion
        entity = undefined;
        tangon = _closure1_slot15;
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
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
            golfie = zuuluu.mostRecentSubscription;
            if(michal) { _fun00002_ip = 28; continue _fun00001 }
 24:
            michal = false;
            return michal;
 28:
            tangon = null;
            if(!(tangon != golfie)) { _fun00002_ip = 154; continue _fun00001 }
 34:
            report = golfie.status;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.ENDED;
            if(!(report === zuuluu)) { _fun00002_ip = 154; continue _fun00001 }
 56:
            report = golfie.endedAt;
            oscard = golfie.hasPremiumAtLeast;
            zuuluu = _closure1_slot11;
            zuuluu = zuuluu.TIER_2;
            zuuluu = oscard.bind(golfie)(zuuluu);
            if(!(tangon != report)) { _fun00002_ip = 154; continue _fun00001 }
 89:
            if(!zuuluu) { _fun00002_ip = 154; continue _fun00001 }
 92:
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
            if(michal) { _fun00002_ip = 327; continue _fun00001 }
 154:
            if(!(tangon != entity)) { _fun00002_ip = 267; continue _fun00001 }
 158:
            report = entity.hasPremiumAtLeast;
            michal = _closure1_slot11;
            michal = michal.TIER_2;
            michal = report.bind(entity)(michal);
            oscard = _closure1_slot5;
            report = oscard.getCurrentUser;
            oscard = report.bind(oscard)();
            tangon = tangon == entity;
            if(tangon) { _fun00002_ip = 211; continue _fun00001 }
 202:
            entity = entity.hasActiveTrial;
            tangon = !entity;
 211:
            entity = !tangon;
            if(tangon) { _fun00002_ip = 261; continue _fun00001 }
 217:
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
 261:
            if(michal) { _fun00002_ip = 323; continue _fun00001 }
 264:
            if(entity) { _fun00002_ip = 323; continue _fun00001 }
 267:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 11;
            zuuluu = zuuluu[entity];
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            entity = entity.isMobile;
            entity = !entity;
            if(entity) { _fun00002_ip = 321; continue _fun00001 }
 304:
            zuuluu = _closure1_slot8;
            michal = zuuluu.isFractionalPremiumActive;
            michal = michal.bind(zuuluu)();
            entity = !michal;
 321:
            return entity;
 323:
            entity = false;
            return entity;
 327:
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
                    oscard = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 703; continue _fun00003 }
 13:
                    option = undefined;
                    if(!(oscard === option)) { _fun00004_ip = 21; continue _fun00003 }
 19:
                    oscard = true;
 21:
                    SaveGenerator(address=25);
 23:
                    return option;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 700; continue _fun00003 }
 34:
                    tangon = _closure1_slot5;
                    zuuluu = tangon.getCurrentUser;
                    verify = zuuluu.bind(tangon)();
                    golfie = null;
                    zuuluu = golfie != verify;
                    if(!zuuluu) { _fun00004_ip = 69; continue _fun00003 }
 59:
                    tangon = verify.isClaimed;
                    zuuluu = tangon.bind(verify)();
 69:
                    foxtra = !zuuluu;
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    zuuluu = 13;
                    zuuluu = sizing[zuuluu];
                    backup = report.bind(option)(zuuluu);
                    romeon = backup.getCurrentConfig;
                    yankee = {};
                    zuuluu = '153d31_3';
                    yankee['location'] = zuuluu;
                    tangon = {};
                    zuuluu = false;
                    tangon['autoTrackExposure'] = zuuluu;
                    tangon = romeon.bind(backup)(yankee, tangon);
                    romeon = tangon.paymentsBlocked;
                    kiloes = _closure1_slot0;
                    tangon = 15;
                    tangon = sizing[tangon];
                    yankee = kiloes.bind(option)(tangon);
                    tangon = yankee.isBogoPromotionExperimentEnabled;
                    tangon = tangon.bind(yankee)();
                    yankee = tangon.enabled;
                    tangon = 16;
                    tangon = sizing[tangon];
                    backup = kiloes.bind(option)(tangon);
                    tangon = backup.isBogoMobilePromotionExperimentEnabled;
                    tangon = tangon.bind(backup)();
                    backup = tangon.enabled;
                    tangon = 21;
                    tangon = sizing[tangon];
                    result = report.bind(option)(tangon);
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
                    tangon = kiloes.bind(option)(tangon);
                    tangon = tangon.isMobile;
                    tangon = !tangon;
                    if(tangon) { _fun00004_ip = 264; continue _fun00003 }
 261:
                    tangon = backup;
 264:
                    if(foxtra) { _fun00004_ip = 697; continue _fun00003 }
 270:
                    if(romeon) { _fun00004_ip = 697; continue _fun00003 }
 276:
                    if(!yankee) { _fun00004_ip = 697; continue _fun00003 }
 282:
                    if(!oscard) { _fun00004_ip = 291; continue _fun00003 }
 285:
                    if(!report) { _fun00004_ip = 697; continue _fun00003 }
 291:
                    if(!tangon) { _fun00004_ip = 697; continue _fun00003 }
 297:
                    report = _closure1_slot7;
                    tangon = report.shouldFetchOffer;
                    tangon = tangon.bind(report)();
                    if(!tangon) { _fun00004_ip = 348; continue _fun00003 }
 314:
                    oscard = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 10;
                    report = romeon[report];
                    oscard = oscard.bind(option)(report);
                    report = oscard.isPremium;
                    report = report.bind(oscard)(verify);
                    tangon = !report;
 348:
                    if(!tangon) { _fun00004_ip = 401; continue _fun00003 }
 351:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 24;
                    tangon = oscard[tangon];
                    oscard = report.bind(option)(tangon);
                    report = oscard.fetchUserOffer;
                    tangon = 'BogoPromotionUtils';
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=392);
 390:
                    return tangon;
 392:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 694; continue _fun00003 }
 401:
                    oscard = _closure1_slot7;
                    report = oscard.hasFetchedOffer;
                    report = report.bind(oscard)();
                    if(!report) { _fun00004_ip = 460; continue _fun00003 }
 418:
                    oscard = _closure1_slot7;
                    report = oscard.hasAnyUnexpiredOffer;
                    report = report.bind(oscard)();
                    if(report) { _fun00004_ip = 691; continue _fun00003 }
 438:
                    oscard = _closure1_slot7;
                    report = oscard.hasAnyUnexpiredDiscountOffer;
                    report = report.bind(oscard)();
                    if(report) { _fun00004_ip = 691; continue _fun00003 }
 460:
                    oscard = _closure1_slot6;
                    report = oscard.hasFetchedMostRecentPremiumTypeSubscription;
                    report = report.bind(oscard)();
                    report = !report;
                    verify = undefined;
                    if(!report) { _fun00004_ip = 504; continue _fun00003 }
 484:
                    romeon = _closure1_slot5;
                    oscard = romeon.getCurrentUser;
                    oscard = oscard.bind(romeon)();
                    report = golfie != oscard;
                    verify = oscard;
 504:
                    if(!report) { _fun00004_ip = 528; continue _fun00003 }
 507:
                    golfie = verify.hasPurchasedFlag;
                    oscard = _closure1_slot10;
                    oscard = oscard.PREMIUM_TIER_2;
                    report = golfie.bind(verify)(oscard);
 528:
                    if(!report) { _fun00004_ip = 571; continue _fun00003 }
 531:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 25;
                    report = golfie[report];
                    oscard = oscard.bind(option)(report);
                    report = oscard.fetchMostRecentSubscription;
                    report = report.bind(oscard)();
                    SaveGenerator(address=565);
 563:
                    return report;
 565:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00004_ip = 688; continue _fun00003 }
 571:
                    golfie = _closure1_slot6;
                    oscard = golfie.hasFetchedSubscriptions;
                    oscard = oscard.bind(golfie)();
                    if(oscard) { _fun00004_ip = 631; continue _fun00003 }
 588:
                    golfie = _closure1_slot0;
                    verify = _closure1_slot2;
                    oscard = 25;
                    oscard = verify[oscard];
                    golfie = golfie.bind(option)(oscard);
                    oscard = golfie.fetchSubscriptions;
                    oscard = oscard.bind(golfie)();
                    SaveGenerator(address=622);
 620:
                    return oscard;
 622:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!golfie) { _fun00004_ip = 631; continue _fun00003 }
 628:
                    return oscard;
 631:
                    golfie = _closure1_slot6;
                    oscard = golfie.getMostRecentPremiumTypeSubscription;
                    verify = oscard.bind(golfie)();
                    golfie = _closure1_slot15;
                    oscard = {};
                    oscard['experimentEnabled'] = yankee;
                    yankee = _closure1_slot6;
                    offset = yankee.getPremiumTypeSubscription;
                    offset = offset.bind(yankee)();
                    oscard['premiumSubscription'] = offset;
                    oscard['mostRecentSubscription'] = verify;
                    oscard = golfie.bind(option)(oscard);
                    return oscard;
 688:
                    return report;
 691:
                    return zuuluu;
 694:
                    return tangon;
 697:
                    return zuuluu;
 700:
                    return michal;
 703:
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
                    oscard = arguments[0];
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 195; continue _fun00005 }
 13:
                    tangon = undefined;
                    if(!(oscard === tangon)) { _fun00006_ip = 21; continue _fun00005 }
 19:
                    oscard = true;
 21:
                    SaveGenerator(address=25);
 23:
                    return tangon;
 25:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 192; continue _fun00005 }
 34:
                    zuuluu = _closure1_slot16;
                    zuuluu = zuuluu.bind(tangon)(oscard);
                    SaveGenerator(address=50);
 48:
                    return zuuluu;
 50:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00006_ip = 189; continue _fun00005 }
 59:
                    if(!zuuluu) { _fun00006_ip = 180; continue _fun00005 }
 62:
                    oscard = _closure1_slot9;
                    golfie = oscard.bogoPromotion;
                    oscard = null;
                    if(!(oscard != golfie)) { _fun00006_ip = 140; continue _fun00005 }
 78:
                    oscard = global;
                    verify = oscard.Date;
                    offset = golfie.endDate;
                    option = verify.prototype;
                    option = Object.create(option, {constructor: {value: verify}});
                    yankee = option;
                    golfie = new yankee[verify](offset, verify);
                    option = golfie instanceof Object ? golfie : option;
                    golfie = option.valueOf;
                    golfie = golfie.bind(option)();
                    option = oscard.Date;
                    oscard = option.now;
                    oscard = oscard.bind(option)();
                    if(!(!(golfie >= oscard))) { _fun00006_ip = 186; continue _fun00005 }
 140:
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    report = 26;
                    report = golfie[report];
                    oscard = oscard.bind(tangon)(report);
                    report = oscard.fetchActiveBogoPromotion;
                    report = report.bind(oscard)();
                    SaveGenerator(address=174);
 172:
                    return report;
 174:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00006_ip = 183; continue _fun00005 }
 180:
                    return tangon;
 183:
                    return report;
 186:
                    return tangon;
 189:
                    return zuuluu;
 192:
                    return michal;
 195:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
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
            output = michal.enabled;
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
                zuuluu = _closure1_slot6;
                michal = zuuluu.getPremiumTypeSubscription;
                michal = michal.bind(zuuluu)();
                entity['premiumSubscription'] = michal;
                return entity;
            };
            michal = romeon.bind(backup)(option, michal);
            kiloes = michal.mostRecentSubscription;
            sizing = michal.premiumSubscription;
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
            result = michal.Date;
            zuuluu = null;
            oscard = zuuluu == yankee;
            backup = undefined;
            if(oscard) { _fun00010_ip = 271; continue _fun00009 }
 265:
            backup = yankee.endDate;
 271:
            echoed = zuuluu != backup;
            oscard = 0;
            if(!echoed) { _fun00010_ip = 283; continue _fun00009 }
 280:
            oscard = backup;
 283:
            backup = result.prototype;
            backup = Object.create(backup, {constructor: {value: result}});
            sequen = backup;
            vacuum = oscard;
            oscard = new sequen[result](vacuum, ctrled);
            backup = oscard instanceof Object ? oscard : backup;
            oscard = backup.valueOf;
            update = oscard.bind(backup)();
            oscard = michal.Date;
            michal = oscard.now;
            echoed = michal.bind(oscard)();
            oscard = echoed > update;
            backup = _closure1_slot1;
            result = _closure1_slot2;
            michal = 20;
            michal = result[michal];
            backup = backup.bind(golfie)(michal);
            michal = {};
            result = -1;
            if(oscard) { _fun00010_ip = 369; continue _fun00009 }
 365:
            result = update - echoed;
 369:
            michal['delay'] = result;
            michal = backup.bind(golfie)(michal);
            backup = _closure1_slot0;
            result = _closure1_slot2;
            michal = 11;
            michal = result[michal];
            michal = backup.bind(golfie)(michal);
            michal = michal.isMobile;
            michal = !michal;
            if(michal) { _fun00010_ip = 414; continue _fun00009 }
 411:
            michal = foxtra;
 414:
            backup = _closure1_slot15;
            foxtra = {};
            foxtra['experimentEnabled'] = output;
            foxtra['premiumSubscription'] = sizing;
            foxtra['mostRecentSubscription'] = kiloes;
            foxtra = backup.bind(golfie)(foxtra);
            if(!michal) { _fun00010_ip = 446; continue _fun00009 }
 443:
            michal = foxtra;
 446:
            if(!michal) { _fun00010_ip = 453; continue _fun00009 }
 449:
            michal = zuuluu == romeon;
 453:
            if(!michal) { _fun00010_ip = 460; continue _fun00009 }
 456:
            michal = zuuluu != yankee;
 460:
            if(!michal) { _fun00010_ip = 466; continue _fun00009 }
 463:
            michal = !offset;
 466:
            if(!michal) { _fun00010_ip = 473; continue _fun00009 }
 469:
            michal = zuuluu == option;
 473:
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
            if(!option) { _fun00010_ip = 587; continue _fun00009 }
 583:
            option = verify === zuuluu;
 587:
            if(!option) { _fun00010_ip = 596; continue _fun00009 }
 590:
            verify = true;
            option = verify === offset;
 596:
            if(!option) { _fun00010_ip = 656; continue _fun00009 }
 599:
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
 656:
            entity = !oscard;
            if(oscard) { _fun00010_ip = 696; continue _fun00009 }
 662:
            oscard = _closure1_slot14;
            report = {};
            report['result'] = michal;
            option = 'client';
            report['origin'] = option;
            report = oscard.bind(golfie)(report);
            if(!tangon) { _fun00010_ip = 693; continue _fun00009 }
 690:
            michal = zuuluu;
 693:
            entity = michal;
 696:
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
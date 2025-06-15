// app/modules/premium/promotions/PromotionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: claimedOutboundPromotionCodeFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.code;
        entity['code'] = zuuluu;
        zuuluu = michal.user_id;
        entity['userId'] = zuuluu;
        zuuluu = michal.claimed_at;
        entity['claimedAt'] = zuuluu;
        tangon = _closure1_slot6;
        zuuluu = tangon.createFromServer;
        michal = michal.promotion;
        michal = zuuluu.bind(tangon)(michal);
        entity['promotion'] = michal;
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _fetchClaimedOutboundPromotionCodes
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 135; continue _fun00001 }
 10:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 10;
                    tangon = tangon[michal];
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {};
                    oscard = _closure1_slot11;
                    oscard = oscard.CLAIMED_OUTBOUND_PROMOTION_CODES;
                    michal['url'] = oscard;
                    oscard = {};
                    golfie = _closure1_slot4;
                    golfie = golfie.locale;
                    oscard['locale'] = golfie;
                    michal['query'] = oscard;
                    oscard = true;
                    michal['oldFormErrors'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=104);
 102:
                    return michal;
 104:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 132; continue _fun00001 }
 110:
                    report = michal.body;
                    tangon = report.map;
                    zuuluu = _closure1_slot12;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 132:
                    return michal;
 135:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _claimOutboundPromotion
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 108; continue _fun00003 }
 7:
                    report = _closure1_slot12;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 10;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    oscard = michal.HTTP;
                    zuuluu = oscard.post;
                    michal = {};
                    verify = _closure1_slot11;
                    option = verify.CLAIM_OUTBOUND_PROMOTION_CODE;
                    golfie = argFoo;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = zuuluu.bind(oscard)(michal);
                    SaveGenerator(address=86);
 84:
                    return michal;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 105; continue _fun00003 }
 92:
                    zuuluu = michal.body;
                    zuuluu = report.bind(tangon)(zuuluu);
                    return zuuluu;
 105:
                    return michal;
 108:
                    return entity;
                }
            };
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
    tangon = function() { // Original name: getNextUnseenOutboundPromotionId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot9;
            report = entity.outboundPromotions;
            entity = _closure1_slot9;
            entity = entity.consumedInboundPromotionId;
            var _closure2_slot0 = entity;
            tangon = report.filter;
            entity = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    michal = entity.id;
                    report = entity.flags;
                    entity = _closure2_slot0;
                    entity = michal !== entity;
                    if(!entity) { _fun00008_ip = 77; continue _fun00007 }
 27:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 11;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = oscard.bind(zuuluu)(tangon);
                    zuuluu = tangon.hasFlag;
                    michal = _closure1_slot10;
                    michal = michal.SUPPRESS_NOTIFICATION;
                    michal = zuuluu.bind(tangon)(report, michal);
                    entity = !michal;
 77:
                    return entity;
                }
            };
            golfie = tangon.bind(report)(entity);
            entity = _closure1_slot5;
            entity = entity.settings;
            report = entity.userContent;
            entity = null;
            oscard = entity == report;
            option = undefined;
            tangon = undefined;
            if(oscard) { _fun00006_ip = 130; continue _fun00005 }
 73:
            oscard = report.recurringDismissibleContentStates;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            report = 12;
            report = offset[report];
            report = verify.bind(option)(report);
            report = report.DismissibleContent;
            report = report.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            report = oscard[report];
            oscard = entity == report;
            tangon = undefined;
            if(oscard) { _fun00006_ip = 130; continue _fun00005 }
 124:
            tangon = report.lastDismissedObjectId;
 130:
            var _closure2_slot1 = tangon;
            oscard = golfie;
            if(!(entity != tangon)) { _fun00006_ip = 156; continue _fun00005 }
 141:
            report = golfie.filter;
            tangon = function(argFoo) {
                entity = argFoo;
                tangon = entity.id;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.compare;
                entity = _closure2_slot1;
                michal = michal.bind(zuuluu)(tangon, entity);
                entity = 1;
                entity = entity === michal;
                return entity;
            };
            oscard = report.bind(golfie)(tangon);
 156:
            report = _closure1_slot7;
            tangon = report.getPremiumTypeSubscription;
            report = tangon.bind(report)();
            tangon = entity == report;
            if(tangon) { _fun00006_ip = 186; continue _fun00005 }
 177:
            report = report.hasActiveTrial;
            tangon = !report;
 186:
            report = _closure1_slot8;
            zuuluu = report.hasAnyUnexpiredOffer;
            zuuluu = zuuluu.bind(report)();
            if(!tangon) { _fun00006_ip = 209; continue _fun00005 }
 203:
            report = oscard;
            if(!zuuluu) { _fun00006_ip = 224; continue _fun00005 }
 209:
            tangon = oscard.filter;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.isRedeemableByTrialUsers;
                entity = entity.bind(michal)();
                return entity;
            };
            report = tangon.bind(oscard)(zuuluu);
 224:
            tangon = report.length;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 262; continue _fun00005 }
 237:
            tangon = report.sort;
            michal = function(argFoo, argBar) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = global;
                    tangon = entity.Date;
                    michal = argFoo;
                    report = michal.startDate;
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    oscard = zuuluu;
                    michal = new oscard[tangon](report, tangon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    tangon = entity.Date;
                    entity = argBar;
                    report = entity.startDate;
                    zuuluu = tangon.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                    oscard = zuuluu;
                    entity = new oscard[tangon](report, tangon);
                    entity = entity instanceof Object ? entity : zuuluu;
                    michal = michal < entity;
                    entity = 1;
                    if(!michal) { _fun00010_ip = 88; continue _fun00009 }
 82:
                    entity = -1;
 88:
                    return entity;
                }
            };
            michal = tangon.bind(report)(michal);
            michal = michal[zuuluu];
            entity = michal.id;
 262:
            return entity;
        }
    };
    var _closure1_slot15 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.PromotionFlags;
    var _closure1_slot10 = report;
    report = 8;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.Endpoints;
    var _closure1_slot11 = report;
    report = 17;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/premium/promotions/PromotionUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: getPromotionImageURL
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            verify = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.isThemeDark;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            option = 'logo-light';
            if(!entity) { _fun00012_ip = 57; continue _fun00011 }
 51:
            option = 'logo-dark';
 57:
            michal = global;
            entity = michal.window;
            entity = entity.GLOBAL_ENV;
            golfie = entity.CDN_HOST;
            entity = null;
            if(!(entity == golfie)) { _fun00012_ip = 156; continue _fun00011 }
 83:
            entity = michal.location;
            result = entity.protocol;
            entity = michal.window;
            entity = entity.GLOBAL_ENV;
            output = entity.API_ENDPOINT;
            entity = michal.HermesInternal;
            oscard = entity.concat;
            echoed = '';
            sizing = '/promotions/';
            backup = '/';
            romeon = '?size=256';
            kiloes = verify;
            foxtra = option;
            entity = echoed[oscard](result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
            _fun00012_ip = 202; continue _fun00011;
 156:
            michal = michal.HermesInternal;
            oscard = michal.concat;
            echoed = 'https://';
            output = '/promotions/';
            kiloes = '/';
            foxtra = '?size=256';
            result = golfie;
            sizing = verify;
            backup = option;
            entity = echoed[oscard](result, output, sizing, kiloes, backup, foxtra, romeon);
 202:
            return entity;
        }
    };
    zuuluu['getPromotionImageURL'] = report;
    report = function() { // Original name: fetchClaimedOutboundPromotionCodes
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchClaimedOutboundPromotionCodes'] = report;
    report = function() { // Original name: claimOutboundPromotion
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['claimOutboundPromotion'] = report;
    report = function(argFoo, argBar) { // Original name: getOutboundPromotionRedemptionUrl
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argBar;
            zuuluu = michal.outboundRedemptionUrlFormat;
            entity = null;
            if(!(entity == zuuluu)) { _fun00014_ip = 37; continue _fun00013 }
 15:
            zuuluu = michal.outboundRedemptionPageLink;
            tangon = entity != zuuluu;
            entity = '';
            if(!tangon) { _fun00014_ip = 35; continue _fun00013 }
 32:
            entity = zuuluu;
 35:
            _fun00014_ip = 78; continue _fun00013;
 37:
            report = michal.outboundRedemptionUrlFormat;
            tangon = report.replace;
            michal = global;
            oscard = michal.encodeURIComponent;
            zuuluu = undefined;
            michal = argFoo;
            zuuluu = oscard.bind(zuuluu)(michal);
            michal = '{code}';
            entity = tangon.bind(report)(michal, zuuluu);
 78:
            return entity;
        }
    };
    zuuluu['getOutboundPromotionRedemptionUrl'] = report;
    zuuluu['getNextUnseenOutboundPromotionId'] = tangon;
    tangon = function() { // Original name: shouldShowOutboundPromotionNotice
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 14;
            entity = report[entity];
            golfie = undefined;
            report = tangon.bind(golfie)(entity);
            tangon = report.getDCF3PIntegrationExperiment;
            entity = 'outbound_promotion_notice';
            entity = tangon.bind(report)(entity);
            if(entity) { _fun00016_ip = 252; continue _fun00015 }
 50:
            entity = _closure1_slot9;
            report = entity.outboundPromotions;
            entity = _closure1_slot9;
            entity = entity.consumedInboundPromotionId;
            var _closure2_slot0 = entity;
            tangon = report.filter;
            entity = function(argFoo) {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    entity = argFoo;
                    michal = entity.id;
                    report = entity.flags;
                    entity = _closure2_slot0;
                    entity = michal !== entity;
                    if(!entity) { _fun00018_ip = 77; continue _fun00017 }
 27:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 11;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = oscard.bind(zuuluu)(tangon);
                    zuuluu = tangon.hasFlag;
                    michal = _closure1_slot10;
                    michal = michal.SUPPRESS_NOTIFICATION;
                    michal = zuuluu.bind(tangon)(report, michal);
                    entity = !michal;
 77:
                    return entity;
                }
            };
            oscard = tangon.bind(report)(entity);
            entity = _closure1_slot9;
            entity = entity.lastSeenOutboundPromotionStartDate;
            var _closure2_slot1 = entity;
            tangon = null;
            option = oscard;
            if(!(tangon != entity)) { _fun00016_ip = 127; continue _fun00015 }
 112:
            report = oscard.filter;
            entity = function(argFoo) {
                entity = argFoo;
                report = entity.startDate;
                entity = global;
                michal = entity.Date;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                oscard = zuuluu;
                michal = new oscard[michal](report, tangon);
                michal = michal instanceof Object ? michal : zuuluu;
                tangon = entity.Date;
                report = _closure2_slot1;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                oscard = zuuluu;
                entity = new oscard[tangon](report, tangon);
                entity = entity instanceof Object ? entity : zuuluu;
                entity = michal > entity;
                return entity;
            };
            option = report.bind(oscard)(entity);
 127:
            report = _closure1_slot7;
            entity = report.getPremiumTypeSubscription;
            report = entity.bind(report)();
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00016_ip = 156; continue _fun00015 }
 150:
            entity = report.trialId;
 156:
            report = tangon != entity;
            oscard = _closure1_slot8;
            entity = oscard.hasAnyUnexpiredOffer;
            entity = entity.bind(oscard)();
            if(report) { _fun00016_ip = 183; continue _fun00015 }
 177:
            report = option;
            if(!entity) { _fun00016_ip = 198; continue _fun00015 }
 183:
            oscard = option.filter;
            entity = function(argFoo) {
                michal = argFoo;
                entity = michal.isRedeemableByTrialUsers;
                entity = entity.bind(michal)();
                return entity;
            };
            report = oscard.bind(option)(entity);
 198:
            oscard = report.length;
            entity = 0;
            if(!(entity !== oscard)) { _fun00016_ip = 248; continue _fun00015 }
 209:
            entity = _closure1_slot9;
            entity = entity.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot2 = entity;
            entity = tangon == entity;
            if(entity) { _fun00016_ip = 246; continue _fun00015 }
 230:
            tangon = report.some;
            zuuluu = function(argFoo) {
                entity = argFoo;
                report = entity.startDate;
                entity = global;
                michal = entity.Date;
                zuuluu = michal.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                oscard = zuuluu;
                michal = new oscard[michal](report, tangon);
                michal = michal instanceof Object ? michal : zuuluu;
                tangon = entity.Date;
                report = _closure2_slot2;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                oscard = zuuluu;
                entity = new oscard[tangon](report, tangon);
                entity = entity instanceof Object ? entity : zuuluu;
                entity = michal > entity;
                return entity;
            };
            entity = tangon.bind(report)(zuuluu);
 246:
            return entity;
 248:
            entity = false;
            return entity;
 252:
            entity = _closure1_slot15;
            oscard = entity.bind(golfie)();
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00016_ip = 342; continue _fun00015 }
 269:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 15;
            michal = option[michal];
            report = zuuluu.bind(golfie)(michal);
            tangon = report.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
            michal = 12;
            michal = option[michal];
            michal = zuuluu.bind(golfie)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            michal = {};
            golfie = 259200000;
            michal['cooldownDurationMs'] = golfie;
            michal = tangon.bind(report)(zuuluu, oscard, michal);
            entity = !michal;
 342:
            return entity;
        }
    };
    zuuluu['shouldShowOutboundPromotionNotice'] = tangon;
    tangon = function(argFoo) { // Original name: shouldShowOutboundPromotionOnPlatform
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            tangon = argFoo;
            report = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 16;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = report.bind(entity)(zuuluu);
            entity = zuuluu.isIOS;
            entity = entity.bind(zuuluu)();
            entity = !entity;
            if(entity) { _fun00020_ip = 68; continue _fun00019 }
 44:
            zuuluu = tangon.hasFlag;
            michal = _closure1_slot10;
            michal = michal.IS_BLOCKED_IOS;
            michal = zuuluu.bind(tangon)(michal);
            entity = !michal;
 68:
            return entity;
        }
    };
    zuuluu['shouldShowOutboundPromotionOnPlatform'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isTrialUserEligibleToSeeOutboundPromotion
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.id;
            entity = argBar;
            michal = entity[michal];
            entity = null;
            entity = entity != michal;
            if(entity) { _fun00022_ip = 34; continue _fun00021 }
 24:
            michal = zuuluu.isRedeemableByTrialUsers;
            entity = michal.bind(zuuluu)();
 34:
            return entity;
        }
    };
    zuuluu['isTrialUserEligibleToSeeOutboundPromotion'] = michal;
    return entity;
})();
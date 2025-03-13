// app/modules/premium/promotions/PromotionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    report = function(argFoo) { // Original name: outboundPromotionFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['id'] = zuuluu;
        zuuluu = michal.start_date;
        entity['startDate'] = zuuluu;
        zuuluu = michal.end_date;
        entity['endDate'] = zuuluu;
        zuuluu = michal.outbound_redemption_end_date;
        entity['outboundRedemptionEndDate'] = zuuluu;
        zuuluu = michal.outbound_title;
        entity['outboundTitle'] = zuuluu;
        zuuluu = michal.outbound_redemption_modal_body;
        entity['outboundRedemptionModalBody'] = zuuluu;
        zuuluu = michal.outbound_redemption_page_link;
        entity['outboundRedemptionPageLink'] = zuuluu;
        zuuluu = michal.outbound_redemption_url_format;
        entity['outboundRedemptionUrlFormat'] = zuuluu;
        zuuluu = michal.outbound_terms_and_conditions;
        entity['outboundTermsAndConditions'] = zuuluu;
        michal = michal.flags;
        entity['flags'] = michal;
        return entity;
    };
    var _closure1_slot9 = report;
    entity = function(argFoo) { // Original name: claimedOutboundPromotionCodeFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.code;
        entity['code'] = zuuluu;
        zuuluu = michal.user_id;
        entity['userId'] = zuuluu;
        zuuluu = michal.claimed_at;
        entity['claimedAt'] = zuuluu;
        tangon = _closure1_slot9;
        zuuluu = michal.promotion;
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
        entity['promotion'] = michal;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchClaimedOutboundPromotionCodes
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 136; continue _fun00001 }
 10:
                    report = _closure1_slot0;
                    tangon = _closure1_slot1;
                    michal = 8;
                    tangon = tangon[michal];
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {};
                    oscard = _closure1_slot8;
                    oscard = oscard.CLAIMED_OUTBOUND_PROMOTION_CODES;
                    michal['url'] = oscard;
                    oscard = {};
                    golfie = _closure1_slot3;
                    golfie = golfie.locale;
                    oscard['locale'] = golfie;
                    michal['query'] = oscard;
                    oscard = true;
                    michal['oldFormErrors'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=105);
 103:
                    return michal;
 105:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 133; continue _fun00001 }
 111:
                    report = michal.body;
                    tangon = report.map;
                    zuuluu = _closure1_slot10;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 133:
                    return michal;
 136:
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
    entity = function() { // Original name: _claimOutboundPromotion
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot2;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 108; continue _fun00003 }
 7:
                    report = _closure1_slot10;
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot1;
                    michal = 8;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    oscard = michal.HTTP;
                    zuuluu = oscard.post;
                    michal = {};
                    verify = _closure1_slot8;
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
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    tangon = function(argFoo) { // Original name: isOutboundPromotionRedeemableByTrialUsers
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 9;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.hasFlag;
        michal = argFoo;
        michal = michal.flags;
        entity = _closure1_slot7;
        entity = entity.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot13 = tangon;
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
    var _closure1_slot2 = oscard;
    oscard = 1;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 2;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 3;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 4;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 5;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.PromotionFlags;
    var _closure1_slot7 = oscard;
    oscard = 6;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.Endpoints;
    var _closure1_slot8 = oscard;
    oscard = 11;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/premium/promotions/PromotionUtils.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo, argBar) { // Original name: getPromotionImageURL
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            yankee = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 7;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.isThemeDark;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            offset = 'logo-light';
            if(!entity) { _fun00006_ip = 57; continue _fun00005 }
 51:
            offset = 'logo-dark';
 57:
            michal = global;
            entity = michal.window;
            entity = entity.GLOBAL_ENV;
            verify = entity.CDN_HOST;
            entity = null;
            if(!(entity == verify)) { _fun00006_ip = 156; continue _fun00005 }
 83:
            entity = michal.location;
            echoed = entity.protocol;
            entity = michal.window;
            entity = entity.GLOBAL_ENV;
            result = entity.API_ENDPOINT;
            entity = michal.HermesInternal;
            oscard = entity.concat;
            update = '';
            output = '/promotions/';
            kiloes = '/';
            foxtra = '?size=256';
            sizing = yankee;
            backup = offset;
            entity = update[oscard](echoed, result, output, sizing, kiloes, backup, foxtra, romeon);
            _fun00006_ip = 218; continue _fun00005;
 156:
            zuuluu = michal.location;
            echoed = zuuluu.protocol;
            michal = michal.HermesInternal;
            golfie = michal.concat;
            update = '';
            result = '//';
            sizing = '/promotions/';
            backup = '/';
            romeon = '?size=256';
            output = verify;
            kiloes = yankee;
            foxtra = offset;
            entity = update[golfie](echoed, result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
 218:
            return entity;
        }
    };
    zuuluu['getPromotionImageURL'] = oscard;
    zuuluu['outboundPromotionFromServer'] = report;
    report = function(argFoo) { // Original name: bogoPromotionFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.id;
        entity['id'] = zuuluu;
        zuuluu = michal.start_date;
        entity['startDate'] = zuuluu;
        michal = michal.end_date;
        entity['endDate'] = michal;
        return entity;
    };
    zuuluu['bogoPromotionFromServer'] = report;
    report = function() { // Original name: fetchClaimedOutboundPromotionCodes
        entity = undefined;
        tangon = _closure1_slot11;
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
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['claimOutboundPromotion'] = report;
    report = function(argFoo, argBar) { // Original name: getOutboundPromotionRedemptionUrl
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argBar;
            zuuluu = michal.outboundRedemptionUrlFormat;
            entity = null;
            if(!(entity == zuuluu)) { _fun00008_ip = 23; continue _fun00007 }
 15:
            entity = michal.outboundRedemptionPageLink;
            _fun00008_ip = 64; continue _fun00007;
 23:
            report = michal.outboundRedemptionUrlFormat;
            tangon = report.replace;
            michal = global;
            oscard = michal.encodeURIComponent;
            zuuluu = undefined;
            michal = argFoo;
            zuuluu = oscard.bind(zuuluu)(michal);
            michal = '{code}';
            entity = tangon.bind(report)(michal, zuuluu);
 64:
            return entity;
        }
    };
    zuuluu['getOutboundPromotionRedemptionUrl'] = report;
    report = function() { // Original name: shouldShowOutboundPromotionNotice
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = _closure1_slot6;
            michal = tangon.lastSeenOutboundPromotionStartDate;
            var _closure2_slot0 = michal;
            oscard = tangon.outboundPromotions;
            tangon = tangon.consumedInboundPromotionId;
            var _closure2_slot1 = tangon;
            report = oscard.filter;
            tangon = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    michal = entity.id;
                    report = entity.flags;
                    entity = _closure2_slot1;
                    entity = michal !== entity;
                    if(!entity) { _fun00012_ip = 77; continue _fun00011 }
 27:
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot1;
                    zuuluu = 9;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = oscard.bind(zuuluu)(tangon);
                    zuuluu = tangon.hasFlag;
                    michal = _closure1_slot7;
                    michal = michal.SUPPRESS_NOTIFICATION;
                    michal = zuuluu.bind(tangon)(report, michal);
                    entity = !michal;
 77:
                    return entity;
                }
            };
            oscard = report.bind(oscard)(tangon);
            tangon = null;
            golfie = oscard;
            if(!(tangon != michal)) { _fun00010_ip = 78; continue _fun00009 }
 61:
            report = oscard.filter;
            michal = function(argFoo) {
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
                report = _closure2_slot0;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                oscard = zuuluu;
                entity = new oscard[tangon](report, tangon);
                entity = entity instanceof Object ? entity : zuuluu;
                entity = michal > entity;
                return entity;
            };
            golfie = report.bind(oscard)(michal);
 78:
            michal = _closure1_slot6;
            michal = michal.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot2 = michal;
            oscard = _closure1_slot4;
            report = oscard.getPremiumTypeSubscription;
            oscard = report.bind(oscard)();
            option = tangon == oscard;
            report = undefined;
            if(option) { _fun00010_ip = 121; continue _fun00009 }
 115:
            report = oscard.trialId;
 121:
            report = tangon != report;
            oscard = _closure1_slot5;
            entity = oscard.hasAnyUnexpiredOffer;
            entity = entity.bind(oscard)();
            if(report) { _fun00010_ip = 148; continue _fun00009 }
 142:
            report = golfie;
            if(!entity) { _fun00010_ip = 165; continue _fun00009 }
 148:
            oscard = golfie.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot13;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report = oscard.bind(golfie)(entity);
 165:
            oscard = report.length;
            entity = 0;
            entity = entity !== oscard;
            if(!entity) { _fun00010_ip = 207; continue _fun00009 }
 179:
            michal = tangon == michal;
            if(michal) { _fun00010_ip = 204; continue _fun00009 }
 186:
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
            michal = tangon.bind(report)(zuuluu);
 204:
            entity = michal;
 207:
            return entity;
        }
    };
    zuuluu['shouldShowOutboundPromotionNotice'] = report;
    report = function(argFoo) { // Original name: shouldShowOutboundPromotionOnPlatform
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 10;
            entity = tangon[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isIOS;
            entity = entity.bind(zuuluu)();
            entity = !entity;
            if(entity) { _fun00014_ip = 94; continue _fun00013 }
 41:
            tangon = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 9;
            zuuluu = oscard[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.hasFlag;
            zuuluu = argFoo;
            zuuluu = zuuluu.flags;
            michal = _closure1_slot7;
            michal = michal.IS_BLOCKED_IOS;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = !michal;
 94:
            return entity;
        }
    };
    zuuluu['shouldShowOutboundPromotionOnPlatform'] = report;
    zuuluu['isOutboundPromotionRedeemableByTrialUsers'] = tangon;
    michal = function(argFoo, argBar) { // Original name: isTrialUserEligibleToSeeOutboundPromotion
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = argFoo;
            michal = tangon.id;
            entity = argBar;
            michal = entity[michal];
            entity = null;
            entity = entity != michal;
            if(entity) { _fun00016_ip = 38; continue _fun00015 }
 24:
            zuuluu = _closure1_slot13;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 38:
            return entity;
        }
    };
    zuuluu['isTrialUserEligibleToSeeOutboundPromotion'] = michal;
    return entity;
})();
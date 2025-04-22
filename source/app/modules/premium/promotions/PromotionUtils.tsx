// app/modules/premium/promotions/PromotionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = function(argFoo) { // Original name: outboundPromotionFromServer
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
    var _closure1_slot11 = oscard;
    entity = function(argFoo) { // Original name: claimedOutboundPromotionCodeFromServer
        michal = argFoo;
        entity = {};
        zuuluu = michal.code;
        entity['code'] = zuuluu;
        zuuluu = michal.user_id;
        entity['userId'] = zuuluu;
        zuuluu = michal.claimed_at;
        entity['claimedAt'] = zuuluu;
        tangon = _closure1_slot11;
        zuuluu = michal.promotion;
        michal = undefined;
        michal = tangon.bind(michal)(zuuluu);
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
                    michal = 9;
                    tangon = tangon[michal];
                    michal = undefined;
                    michal = report.bind(michal)(tangon);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {};
                    oscard = _closure1_slot10;
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
                    michal = 9;
                    michal = tangon[michal];
                    tangon = undefined;
                    michal = zuuluu.bind(tangon)(michal);
                    oscard = michal.HTTP;
                    zuuluu = oscard.post;
                    michal = {};
                    verify = _closure1_slot10;
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
    report = function() { // Original name: getNextUnseenOutboundPromotionId
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = _closure1_slot8;
            report = entity.outboundPromotions;
            entity = _closure1_slot8;
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
                    zuuluu = 10;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = oscard.bind(zuuluu)(tangon);
                    zuuluu = tangon.hasFlag;
                    michal = _closure1_slot9;
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
            if(oscard) { _fun00006_ip = 132; continue _fun00005 }
 75:
            oscard = report.recurringDismissibleContentStates;
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            report = 11;
            report = offset[report];
            report = verify.bind(option)(report);
            report = report.DismissibleContent;
            report = report.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            report = oscard[report];
            oscard = entity == report;
            tangon = undefined;
            if(oscard) { _fun00006_ip = 132; continue _fun00005 }
 126:
            tangon = report.lastDismissedObjectId;
 132:
            var _closure2_slot1 = tangon;
            oscard = golfie;
            if(!(entity != tangon)) { _fun00006_ip = 160; continue _fun00005 }
 143:
            report = golfie.filter;
            tangon = function(argFoo) {
                entity = argFoo;
                tangon = entity.id;
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 12;
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
 160:
            report = _closure1_slot6;
            tangon = report.getPremiumTypeSubscription;
            report = tangon.bind(report)();
            tangon = entity == report;
            if(tangon) { _fun00006_ip = 190; continue _fun00005 }
 181:
            report = report.hasActiveTrial;
            tangon = !report;
 190:
            report = _closure1_slot7;
            zuuluu = report.hasAnyUnexpiredOffer;
            zuuluu = zuuluu.bind(report)();
            if(!tangon) { _fun00006_ip = 213; continue _fun00005 }
 207:
            report = oscard;
            if(!zuuluu) { _fun00006_ip = 230; continue _fun00005 }
 213:
            tangon = oscard.filter;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot16;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report = tangon.bind(oscard)(zuuluu);
 230:
            tangon = report.length;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== tangon)) { _fun00006_ip = 270; continue _fun00005 }
 243:
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
 270:
            return entity;
        }
    };
    var _closure1_slot15 = report;
    tangon = function(argFoo) { // Original name: isOutboundPromotionRedeemableByTrialUsers
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        michal = 10;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.hasFlag;
        michal = argFoo;
        michal = michal.flags;
        entity = _closure1_slot9;
        entity = entity.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot16 = tangon;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, golfie);
    entity = 0;
    golfie = verify[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 3;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = 4;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot7 = golfie;
    golfie = 5;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot8 = golfie;
    golfie = 6;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.PromotionFlags;
    var _closure1_slot9 = golfie;
    golfie = 7;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.Endpoints;
    var _closure1_slot10 = golfie;
    golfie = 16;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/premium/promotions/PromotionUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo, argBar) { // Original name: getPromotionImageURL
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            yankee = argFoo;
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.isThemeDark;
            entity = argBar;
            entity = michal.bind(zuuluu)(entity);
            offset = 'logo-light';
            if(!entity) { _fun00012_ip = 57; continue _fun00011 }
 51:
            offset = 'logo-dark';
 57:
            michal = global;
            entity = michal.window;
            entity = entity.GLOBAL_ENV;
            verify = entity.CDN_HOST;
            entity = null;
            if(!(entity == verify)) { _fun00012_ip = 156; continue _fun00011 }
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
            _fun00012_ip = 218; continue _fun00011;
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
    zuuluu['getPromotionImageURL'] = golfie;
    zuuluu['outboundPromotionFromServer'] = oscard;
    oscard = function(argFoo) { // Original name: bogoPromotionFromServer
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
    zuuluu['bogoPromotionFromServer'] = oscard;
    oscard = function() { // Original name: fetchClaimedOutboundPromotionCodes
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchClaimedOutboundPromotionCodes'] = oscard;
    oscard = function() { // Original name: claimOutboundPromotion
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['claimOutboundPromotion'] = oscard;
    oscard = function(argFoo, argBar) { // Original name: getOutboundPromotionRedemptionUrl
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argBar;
            zuuluu = michal.outboundRedemptionUrlFormat;
            entity = null;
            if(!(entity == zuuluu)) { _fun00014_ip = 23; continue _fun00013 }
 15:
            entity = michal.outboundRedemptionPageLink;
            _fun00014_ip = 64; continue _fun00013;
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
    zuuluu['getOutboundPromotionRedemptionUrl'] = oscard;
    zuuluu['getNextUnseenOutboundPromotionId'] = report;
    report = function() { // Original name: shouldShowOutboundPromotionNotice
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            entity = 13;
            entity = report[entity];
            golfie = undefined;
            report = tangon.bind(golfie)(entity);
            tangon = report.getDCF3PIntegrationExperiment;
            entity = 'outbound_promotion_notice';
            entity = tangon.bind(report)(entity);
            if(entity) { _fun00016_ip = 260; continue _fun00015 }
 50:
            entity = _closure1_slot8;
            report = entity.outboundPromotions;
            entity = _closure1_slot8;
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
                    zuuluu = 10;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = oscard.bind(zuuluu)(tangon);
                    zuuluu = tangon.hasFlag;
                    michal = _closure1_slot9;
                    michal = michal.SUPPRESS_NOTIFICATION;
                    michal = zuuluu.bind(tangon)(report, michal);
                    entity = !michal;
 77:
                    return entity;
                }
            };
            oscard = tangon.bind(report)(entity);
            entity = _closure1_slot8;
            entity = entity.lastSeenOutboundPromotionStartDate;
            var _closure2_slot1 = entity;
            tangon = null;
            option = oscard;
            if(!(tangon != entity)) { _fun00016_ip = 131; continue _fun00015 }
 114:
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
 131:
            report = _closure1_slot6;
            entity = report.getPremiumTypeSubscription;
            report = entity.bind(report)();
            oscard = tangon == report;
            entity = undefined;
            if(oscard) { _fun00016_ip = 160; continue _fun00015 }
 154:
            entity = report.trialId;
 160:
            report = tangon != entity;
            oscard = _closure1_slot7;
            entity = oscard.hasAnyUnexpiredOffer;
            entity = entity.bind(oscard)();
            if(report) { _fun00016_ip = 187; continue _fun00015 }
 181:
            report = option;
            if(!entity) { _fun00016_ip = 204; continue _fun00015 }
 187:
            oscard = option.filter;
            entity = function(argFoo) {
                zuuluu = _closure1_slot16;
                michal = undefined;
                entity = argFoo;
                entity = zuuluu.bind(michal)(entity);
                return entity;
            };
            report = oscard.bind(option)(entity);
 204:
            oscard = report.length;
            entity = 0;
            if(!(entity !== oscard)) { _fun00016_ip = 256; continue _fun00015 }
 215:
            entity = _closure1_slot8;
            entity = entity.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot2 = entity;
            entity = tangon == entity;
            if(entity) { _fun00016_ip = 254; continue _fun00015 }
 236:
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
 254:
            return entity;
 256:
            entity = false;
            return entity;
 260:
            entity = _closure1_slot15;
            oscard = entity.bind(golfie)();
            entity = null;
            entity = entity != oscard;
            if(!entity) { _fun00016_ip = 350; continue _fun00015 }
 277:
            zuuluu = _closure1_slot0;
            option = _closure1_slot2;
            michal = 14;
            michal = option[michal];
            report = zuuluu.bind(golfie)(michal);
            tangon = report.isTimeRecurringSnowflakeBoundDismissibleContentDismissed;
            michal = 11;
            michal = option[michal];
            michal = zuuluu.bind(golfie)(michal);
            michal = michal.DismissibleContent;
            zuuluu = michal.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR;
            michal = {};
            golfie = 259200000;
            michal['cooldownDurationMs'] = golfie;
            michal = tangon.bind(report)(zuuluu, oscard, michal);
            entity = !michal;
 350:
            return entity;
        }
    };
    zuuluu['shouldShowOutboundPromotionNotice'] = report;
    report = function(argFoo) { // Original name: shouldShowOutboundPromotionOnPlatform
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 15;
            entity = tangon[entity];
            report = undefined;
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.isIOS;
            entity = entity.bind(zuuluu)();
            entity = !entity;
            if(entity) { _fun00020_ip = 94; continue _fun00019 }
 41:
            tangon = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = 10;
            zuuluu = oscard[zuuluu];
            report = tangon.bind(report)(zuuluu);
            tangon = report.hasFlag;
            zuuluu = argFoo;
            zuuluu = zuuluu.flags;
            michal = _closure1_slot9;
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
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            tangon = argFoo;
            michal = tangon.id;
            entity = argBar;
            michal = entity[michal];
            entity = null;
            entity = entity != michal;
            if(entity) { _fun00022_ip = 38; continue _fun00021 }
 24:
            zuuluu = _closure1_slot16;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 38:
            return entity;
        }
    };
    zuuluu['isTrialUserEligibleToSeeOutboundPromotion'] = michal;
    return entity;
})();
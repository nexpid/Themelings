// app/modules/premium/promotions/PromotionUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = options;
    report = function(argFoo) { // Original name: outboundPromotionFromServer
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['id'] = zulu;
        zulu = mike.start_date;
        entity['startDate'] = zulu;
        zulu = mike.end_date;
        entity['endDate'] = zulu;
        zulu = mike.outbound_redemption_end_date;
        entity['outboundRedemptionEndDate'] = zulu;
        zulu = mike.outbound_title;
        entity['outboundTitle'] = zulu;
        zulu = mike.outbound_redemption_modal_body;
        entity['outboundRedemptionModalBody'] = zulu;
        zulu = mike.outbound_redemption_page_link;
        entity['outboundRedemptionPageLink'] = zulu;
        zulu = mike.outbound_redemption_url_format;
        entity['outboundRedemptionUrlFormat'] = zulu;
        zulu = mike.outbound_terms_and_conditions;
        entity['outboundTermsAndConditions'] = zulu;
        mike = mike.flags;
        entity['flags'] = mike;
        return entity;
    };
    var _closure1_slot9 = report;
    entity = function(argFoo) { // Original name: claimedOutboundPromotionCodeFromServer
        mike = argFoo;
        entity = {};
        zulu = mike.code;
        entity['code'] = zulu;
        zulu = mike.user_id;
        entity['userId'] = zulu;
        zulu = mike.claimed_at;
        entity['claimedAt'] = zulu;
        tango = _closure1_slot9;
        zulu = mike.promotion;
        mike = undefined;
        mike = tango.bind(mike)(zulu);
        entity['promotion'] = mike;
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _fetchClaimedOutboundPromotionCodes
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun96236: for(var _fun96236_ip = 0; ; ) switch(_fun96236_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun96236_ip = 133; continue _fun96236 }
 10:
                    report = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 8;
                    tango = tango[mike];
                    mike = undefined;
                    mike = report.bind(mike)(tango);
                    report = mike.HTTP;
                    tango = report.get;
                    mike = {};
                    oscar = _closure1_slot8;
                    oscar = oscar.CLAIMED_OUTBOUND_PROMOTION_CODES;
                    mike['url'] = oscar;
                    oscar = {};
                    golf = _closure1_slot3;
                    golf = golf.locale;
                    oscar['locale'] = golf;
                    mike['query'] = oscar;
                    oscar = true;
                    mike['oldFormErrors'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=102);
 100:
                    return mike;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun96236_ip = 130; continue _fun96236 }
 108:
                    report = mike.body;
                    tango = report.map;
                    zulu = _closure1_slot10;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 130:
                    return mike;
 133:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _claimOutboundPromotion
        report = undefined;
        entity = undefined;
        tango = _closure1_slot2;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun96239: for(var _fun96239_ip = 0; ; ) switch(_fun96239_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun96239_ip = 108; continue _fun96239 }
 7:
                    report = _closure1_slot10;
                    zulu = _closure1_slot0;
                    tango = _closure1_slot1;
                    mike = 8;
                    mike = tango[mike];
                    tango = undefined;
                    mike = zulu.bind(tango)(mike);
                    oscar = mike.HTTP;
                    zulu = oscar.post;
                    mike = {};
                    verify = _closure1_slot8;
                    options = verify.CLAIM_OUTBOUND_PROMOTION_CODE;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = zulu.bind(oscar)(mike);
                    SaveGenerator(address=86);
 84:
                    return mike;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun96239_ip = 105; continue _fun96239 }
 92:
                    zulu = mike.body;
                    zulu = report.bind(tango)(zulu);
                    return zulu;
 105:
                    return mike;
 108:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    tango = function(argFoo) { // Original name: isOutboundPromotionRedeemableByTrialUsers
        tango = _closure1_slot0;
        zulu = _closure1_slot1;
        mike = 9;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.hasFlag;
        mike = argFoo;
        mike = mike.flags;
        entity = _closure1_slot7;
        entity = entity.IS_OUTBOUND_REDEEMABLE_BY_TRIAL_USERS;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    var _closure1_slot13 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot2 = oscar;
    oscar = 1;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.PromotionFlags;
    var _closure1_slot7 = oscar;
    oscar = 6;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.Endpoints;
    var _closure1_slot8 = oscar;
    oscar = 11;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/premium/promotions/PromotionUtils.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo, argBar) { // Original name: getPromotionImageURL
        _fun96241: for(var _fun96241_ip = 0; ; ) switch(_fun96241_ip) {
 0:
            yankee = argFoo;
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 7;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.isThemeDark;
            entity = argBar;
            entity = mike.bind(zulu)(entity);
            offset = 'logo-light';
            if(!entity) { _fun96241_ip = 57; continue _fun96241 }
 51:
            offset = 'logo-dark';
 57:
            mike = global;
            entity = mike.window;
            entity = entity.GLOBAL_ENV;
            verify = entity.CDN_HOST;
            entity = null;
            if(!(entity == verify)) { _fun96241_ip = 156; continue _fun96241 }
 83:
            entity = mike.location;
            echo = entity.protocol;
            entity = mike.window;
            entity = entity.GLOBAL_ENV;
            result = entity.API_ENDPOINT;
            entity = mike.HermesInternal;
            oscar = entity.concat;
            update = '';
            output = '/promotions/';
            kilo = '/';
            foxtrot = '?size=256';
            sizing = yankee;
            backup = offset;
            entity = update[oscar](echo, result, output, sizing, kilo, backup, foxtrot, romeo);
            _fun96241_ip = 218; continue _fun96241;
 156:
            zulu = mike.location;
            echo = zulu.protocol;
            mike = mike.HermesInternal;
            golf = mike.concat;
            update = '';
            result = '//';
            sizing = '/promotions/';
            backup = '/';
            romeo = '?size=256';
            output = verify;
            kilo = yankee;
            foxtrot = offset;
            entity = update[golf](echo, result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
 218:
            return entity;
        }
    };
    zulu['getPromotionImageURL'] = oscar;
    zulu['outboundPromotionFromServer'] = report;
    report = function(argFoo) { // Original name: bogoPromotionFromServer
        mike = argFoo;
        entity = {};
        zulu = mike.id;
        entity['id'] = zulu;
        zulu = mike.start_date;
        entity['startDate'] = zulu;
        mike = mike.end_date;
        entity['endDate'] = mike;
        return entity;
    };
    zulu['bogoPromotionFromServer'] = report;
    report = function() { // Original name: fetchClaimedOutboundPromotionCodes
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchClaimedOutboundPromotionCodes'] = report;
    report = function() { // Original name: claimOutboundPromotion
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['claimOutboundPromotion'] = report;
    report = function(argFoo, argBar) { // Original name: getOutboundPromotionRedemptionUrl
        _fun96245: for(var _fun96245_ip = 0; ; ) switch(_fun96245_ip) {
 0:
            mike = argBar;
            zulu = mike.outboundRedemptionUrlFormat;
            entity = null;
            if(!(entity == zulu)) { _fun96245_ip = 23; continue _fun96245 }
 15:
            entity = mike.outboundRedemptionPageLink;
            _fun96245_ip = 64; continue _fun96245;
 23:
            report = mike.outboundRedemptionUrlFormat;
            tango = report.replace;
            mike = global;
            oscar = mike.encodeURIComponent;
            zulu = undefined;
            mike = argFoo;
            zulu = oscar.bind(zulu)(mike);
            mike = '{code}';
            entity = tango.bind(report)(mike, zulu);
 64:
            return entity;
        }
    };
    zulu['getOutboundPromotionRedemptionUrl'] = report;
    report = function() { // Original name: shouldShowOutboundPromotionNotice
        _fun96246: for(var _fun96246_ip = 0; ; ) switch(_fun96246_ip) {
 0:
            tango = _closure1_slot6;
            mike = tango.lastSeenOutboundPromotionStartDate;
            var _closure2_slot0 = mike;
            oscar = tango.outboundPromotions;
            tango = tango.consumedInboundPromotionId;
            var _closure2_slot1 = tango;
            report = oscar.filter;
            tango = function(argFoo) {
                _fun96247: for(var _fun96247_ip = 0; ; ) switch(_fun96247_ip) {
 0:
                    entity = argFoo;
                    mike = entity.id;
                    report = entity.flags;
                    entity = _closure2_slot1;
                    entity = mike !== entity;
                    if(!entity) { _fun96247_ip = 77; continue _fun96247 }
 27:
                    oscar = _closure1_slot0;
                    tango = _closure1_slot1;
                    zulu = 9;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = oscar.bind(zulu)(tango);
                    zulu = tango.hasFlag;
                    mike = _closure1_slot7;
                    mike = mike.SUPPRESS_NOTIFICATION;
                    mike = zulu.bind(tango)(report, mike);
                    entity = !mike;
 77:
                    return entity;
                }
            };
            oscar = report.bind(oscar)(tango);
            tango = null;
            golf = oscar;
            if(!(tango != mike)) { _fun96246_ip = 78; continue _fun96246 }
 61:
            report = oscar.filter;
            mike = function(argFoo) {
                entity = argFoo;
                report = entity.startDate;
                entity = global;
                mike = entity.Date;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                oscar = zulu;
                mike = new oscar[mike](report, tango);
                mike = mike instanceof Object ? mike : zulu;
                tango = entity.Date;
                report = _closure2_slot0;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                oscar = zulu;
                entity = new oscar[tango](report, tango);
                entity = entity instanceof Object ? entity : zulu;
                entity = mike > entity;
                return entity;
            };
            golf = report.bind(oscar)(mike);
 78:
            mike = _closure1_slot6;
            mike = mike.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot2 = mike;
            oscar = _closure1_slot4;
            report = oscar.getPremiumTypeSubscription;
            oscar = report.bind(oscar)();
            options = tango == oscar;
            report = undefined;
            if(options) { _fun96246_ip = 121; continue _fun96246 }
 115:
            report = oscar.trialId;
 121:
            report = tango != report;
            oscar = _closure1_slot5;
            entity = oscar.hasAnyUnexpiredOffer;
            entity = entity.bind(oscar)();
            if(report) { _fun96246_ip = 148; continue _fun96246 }
 142:
            report = golf;
            if(!entity) { _fun96246_ip = 165; continue _fun96246 }
 148:
            oscar = golf.filter;
            entity = function(argFoo) {
                zulu = _closure1_slot13;
                mike = undefined;
                entity = argFoo;
                entity = zulu.bind(mike)(entity);
                return entity;
            };
            report = oscar.bind(golf)(entity);
 165:
            oscar = report.length;
            entity = 0;
            entity = entity !== oscar;
            if(!entity) { _fun96246_ip = 207; continue _fun96246 }
 179:
            mike = tango == mike;
            if(mike) { _fun96246_ip = 204; continue _fun96246 }
 186:
            tango = report.some;
            zulu = function(argFoo) {
                entity = argFoo;
                report = entity.startDate;
                entity = global;
                mike = entity.Date;
                zulu = mike.prototype;
                zulu = Object.create(zulu, {constructor: {value: mike}});
                oscar = zulu;
                mike = new oscar[mike](report, tango);
                mike = mike instanceof Object ? mike : zulu;
                tango = entity.Date;
                report = _closure2_slot2;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                oscar = zulu;
                entity = new oscar[tango](report, tango);
                entity = entity instanceof Object ? entity : zulu;
                entity = mike > entity;
                return entity;
            };
            mike = tango.bind(report)(zulu);
 204:
            entity = mike;
 207:
            return entity;
        }
    };
    zulu['shouldShowOutboundPromotionNotice'] = report;
    report = function(argFoo) { // Original name: shouldShowOutboundPromotionOnPlatform
        _fun96251: for(var _fun96251_ip = 0; ; ) switch(_fun96251_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 10;
            entity = tango[entity];
            report = undefined;
            zulu = zulu.bind(report)(entity);
            entity = zulu.isIOS;
            entity = entity.bind(zulu)();
            entity = !entity;
            if(entity) { _fun96251_ip = 94; continue _fun96251 }
 41:
            tango = _closure1_slot0;
            oscar = _closure1_slot1;
            zulu = 9;
            zulu = oscar[zulu];
            report = tango.bind(report)(zulu);
            tango = report.hasFlag;
            zulu = argFoo;
            zulu = zulu.flags;
            mike = _closure1_slot7;
            mike = mike.IS_BLOCKED_IOS;
            mike = tango.bind(report)(zulu, mike);
            entity = !mike;
 94:
            return entity;
        }
    };
    zulu['shouldShowOutboundPromotionOnPlatform'] = report;
    zulu['isOutboundPromotionRedeemableByTrialUsers'] = tango;
    mike = function(argFoo, argBar) { // Original name: isTrialUserEligibleToSeeOutboundPromotion
        _fun96252: for(var _fun96252_ip = 0; ; ) switch(_fun96252_ip) {
 0:
            tango = argFoo;
            mike = tango.id;
            entity = argBar;
            mike = entity[mike];
            entity = null;
            entity = entity != mike;
            if(entity) { _fun96252_ip = 38; continue _fun96252 }
 24:
            zulu = _closure1_slot13;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 38:
            return entity;
        }
    };
    zulu['isTrialUserEligibleToSeeOutboundPromotion'] = mike;
    return entity;
})();
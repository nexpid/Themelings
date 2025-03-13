// app/modules/premium/promotions/PromotionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    report = function() { // Original name: fetchActiveOutboundPromotions
        entity = undefined;
        tangon = _closure1_slot8;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    entity = function() { // Original name: _fetchActiveOutboundPromotions
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 509; continue _fun00001 }
 12:
                    michal = undefined;
                    offset = undefined;
                    option = undefined;
                    yankee = undefined;
                    foxtra = undefined;
                    tangon = _closure1_slot5;
                    tangon = tangon.isFetchingActiveOutboundPromotions;
                    if(tangon) { _fun00002_ip = 506; continue _fun00001 }
 43: // try_start_0
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    golfie = 5;
                    tangon = oscard[golfie];
                    romeon = report.bind(michal)(tangon);
                    report = romeon.dispatch;
                    tangon = {};
                    backup = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH';
                    tangon['type'] = backup;
                    tangon = report.bind(romeon)(tangon);
                    report = _closure1_slot0;
                    tangon = 6;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    romeon = tangon.PromotionPreviewExperiment;
                    oscard = romeon.getCurrentConfig;
                    report = {};
                    tangon = '5731cc_1';
                    report['location'] = tangon;
                    tangon = {};
                    backup = false;
                    tangon['autoTrackExposure'] = backup;
                    tangon = oscard.bind(romeon)(report, tangon);
                    report = tangon.previewEnabled;
                    tangon = _closure1_slot7;
                    if(report) { _fun00002_ip = 161; continue _fun00001 }
 153:
                    romeon = tangon.OUTBOUND_PROMOTIONS;
                    _fun00002_ip = 167; continue _fun00001;
 161:
                    romeon = tangon.OUTBOUND_PROMOTIONS_PREVIEW;
 167:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 7;
                    tangon = oscard[tangon];
                    tangon = report.bind(michal)(tangon);
                    oscard = tangon.HTTP;
                    report = oscard.get;
                    tangon = {};
                    tangon['url'] = romeon;
                    romeon = {};
                    kiloes = _closure1_slot4;
                    kiloes = kiloes.locale;
                    romeon['locale'] = kiloes;
                    tangon['query'] = romeon;
                    romeon = true;
                    tangon['oldFormErrors'] = romeon;
                    tangon['rejectWithError'] = romeon;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=245);
 243:
                    return tangon;
 245:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 459; continue _fun00001 }
 254:
                    offset = tangon.body;
                    report = _closure1_slot5;
                    option = report.consumedInboundPromotionId;
                    report = _closure1_slot5;
                    report = report.hasFetchedConsumedInboundPromotionId;
                    if(report) { _fun00002_ip = 388; continue _fun00001 }
 282:
                    oscard = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 8;
                    report = romeon[report];
                    romeon = oscard.bind(michal)(report);
                    oscard = romeon.fetchUserEntitlementsForApplication;
                    report = _closure1_slot6;
                    report = oscard.bind(romeon)(report, backup);
                    SaveGenerator(address=322);
 320:
                    return report;
 322:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 385; continue _fun00001 }
 328:
                    romeon = report.find;
                    oscard = function(argFoo) {
                        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                            michal = argFoo;
                            zuuluu = michal.promotion_id;
                            entity = null;
                            entity = entity != zuuluu;
                            if(!entity) { _fun00004_ip = 30; continue _fun00003 }
 18:
                            zuuluu = michal.consumed;
                            michal = true;
                            entity = michal === zuuluu;
 30:
                            return entity;
                        }
                    };
                    romeon = romeon.bind(report)(oscard);
                    foxtra = romeon;
                    oscard = null;
                    backup = oscard == romeon;
                    romeon = undefined;
                    if(backup) { _fun00002_ip = 365; continue _fun00001 }
 359:
                    romeon = foxtra.promotion_id;
 365:
                    yankee = romeon;
                    romeon = oscard != romeon;
                    oscard = null;
                    if(!romeon) { _fun00002_ip = 380; continue _fun00001 }
 377:
                    oscard = yankee;
 380:
                    option = oscard;
                    _fun00002_ip = 388; continue _fun00001;
 385: // try_end0
                    return report;
 388: // try_start_1
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[golfie];
                    golfie = oscard.bind(michal)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    yankee = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS';
                    report['type'] = yankee;
                    yankee = offset;
                    offset = yankee.map;
                    verify = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 9;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.outboundPromotionFromServer;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    verify = offset.bind(yankee)(verify);
                    report['activeOutboundPromotions'] = verify;
                    report['consumedInboundPromotionId'] = option;
                    report = oscard.bind(golfie)(report);
 457: // try_end1
                    _fun00002_ip = 506; continue _fun00001;
 459:
                    return tangon;
 462: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(michal)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL';
                    zuuluu['type'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 506:
                    return michal;
 509:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot8 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    tangon = function() { // Original name: dismissOutboundPromotionNotice
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 5;
            tangon = tangon[entity];
            entity = undefined;
            oscard = report.bind(entity)(tangon);
            report = oscard.dispatch;
            tangon = {};
            golfie = 'OUTBOUND_PROMOTION_NOTICE_DISMISS';
            tangon['type'] = golfie;
            tangon = report.bind(oscard)(tangon);
            tangon = _closure1_slot5;
            report = tangon.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot0 = report;
            tangon = null;
            if(!(tangon != report)) { _fun00006_ip = 140; continue _fun00005 }
 69:
            tangon = _closure1_slot0;
            golfie = _closure1_slot2;
            zuuluu = 10;
            report = golfie[zuuluu];
            report = tangon.bind(entity)(report);
            oscard = report.PreloadedUserSettingsActionCreators;
            report = oscard.updateAsync;
            zuuluu = golfie[zuuluu];
            zuuluu = tangon.bind(entity)(zuuluu);
            zuuluu = zuuluu.UserSettingsDelay;
            tangon = zuuluu.INFREQUENT_USER_ACTION;
            zuuluu = 'userContent';
            michal = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 11;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                tangon = michal.StringValue;
                zuuluu = tangon.create;
                michal = {};
                report = _closure2_slot0;
                michal['value'] = report;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = argFoo;
                michal['lastDismissedOutboundPromotionStartDate'] = zuuluu;
                return entity;
            };
            michal = report.bind(oscard)(zuuluu, michal, tangon);
 140:
            return entity;
        }
    };
    michal = function() { // Original name: fetchActiveBogoPromotion
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    entity = function() { // Original name: _fetchActiveBogoPromotion
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 292; continue _fun00007 }
 10:
                    zuuluu = _closure1_slot5;
                    zuuluu = zuuluu.isFetchingActiveBogoPromotion;
                    if(zuuluu) { _fun00008_ip = 287; continue _fun00007 }
 31: // try_start_0
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 5;
                    zuuluu = oscard[tangon];
                    offset = undefined;
                    golfie = report.bind(offset)(zuuluu);
                    report = golfie.dispatch;
                    zuuluu = {};
                    option = 'ACTIVE_BOGO_PROMOTION_FETCH';
                    zuuluu['type'] = option;
                    zuuluu = report.bind(golfie)(zuuluu);
                    report = _closure1_slot0;
                    zuuluu = 7;
                    zuuluu = oscard[zuuluu];
                    zuuluu = report.bind(offset)(zuuluu);
                    oscard = zuuluu.HTTP;
                    report = oscard.get;
                    zuuluu = {};
                    golfie = _closure1_slot7;
                    golfie = golfie.BOGO_PROMOTIONS;
                    zuuluu['url'] = golfie;
                    golfie = {};
                    option = _closure1_slot4;
                    option = option.locale;
                    golfie['locale'] = option;
                    zuuluu['query'] = golfie;
                    golfie = true;
                    zuuluu['rejectWithError'] = golfie;
                    zuuluu = report.bind(oscard)(zuuluu);
                    SaveGenerator(address=154);
 152:
                    return zuuluu;
 154:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 238; continue _fun00007 }
 160:
                    verify = zuuluu.body;
                    report = _closure1_slot1;
                    yankee = _closure1_slot2;
                    tangon = yankee[tangon];
                    oscard = report.bind(offset)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS';
                    tangon['type'] = golfie;
                    option = _closure1_slot0;
                    golfie = 9;
                    golfie = yankee[golfie];
                    option = option.bind(offset)(golfie);
                    golfie = option.bogoPromotionFromServer;
                    golfie = golfie.bind(option)(verify);
                    tangon['activePromotion'] = golfie;
                    tangon = report.bind(oscard)(tangon);
 236: // try_end0
                    _fun00008_ip = 287; continue _fun00007;
 238:
                    return zuuluu;
 241: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 5;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 287:
                    michal = undefined;
                    return michal;
 292:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    romeon = entity.Object;
    yankee = romeon.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeon)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 2;
    oscard = verify[oscard];
    oscard = offset.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 3;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.Endpoints;
    var _closure1_slot7 = oscard;
    oscard = {};
    oscard['fetchActiveOutboundPromotions'] = report;
    oscard['dismissOutboundPromotionNotice'] = tangon;
    golfie = function() { // Original name: markOutboundPromotionsSeen
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'OUTBOUND_PROMOTIONS_SEEN';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    oscard['markOutboundPromotionsSeen'] = golfie;
    oscard['fetchActiveBogoPromotion'] = michal;
    golfie = 12;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/premium/promotions/PromotionsActionCreators.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['default'] = oscard;
    zuuluu['fetchActiveOutboundPromotions'] = report;
    zuuluu['dismissOutboundPromotionNotice'] = tangon;
    zuuluu['fetchActiveBogoPromotion'] = michal;
    return entity;
})();
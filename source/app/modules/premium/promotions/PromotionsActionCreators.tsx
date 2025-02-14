// app/modules/premium/promotions/PromotionsActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    report = function() { // Original name: fetchActiveOutboundPromotions
        entity = undefined;
        tango = _closure1_slot8;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    entity = function() { // Original name: _fetchActiveOutboundPromotions
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun96258: for(var _fun96258_ip = 0; ; ) switch(_fun96258_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun96258_ip = 508; continue _fun96258 }
 12:
                    mike = undefined;
                    offset = undefined;
                    options = undefined;
                    yankee = undefined;
                    foxtrot = undefined;
                    tango = _closure1_slot5;
                    tango = tango.isFetchingActiveOutboundPromotions;
                    if(tango) { _fun96258_ip = 505; continue _fun96258 }
 43: // try_start_0
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    golf = 5;
                    tango = oscar[golf];
                    romeo = report.bind(mike)(tango);
                    report = romeo.dispatch;
                    tango = {};
                    backup = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH';
                    tango['type'] = backup;
                    tango = report.bind(romeo)(tango);
                    report = _closure1_slot0;
                    tango = 6;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    romeo = tango.PromotionPreviewExperiment;
                    oscar = romeo.getCurrentConfig;
                    report = {};
                    tango = '5731cc_1';
                    report['location'] = tango;
                    tango = {};
                    backup = false;
                    tango['autoTrackExposure'] = backup;
                    tango = oscar.bind(romeo)(report, tango);
                    report = tango.previewEnabled;
                    tango = _closure1_slot7;
                    if(report) { _fun96258_ip = 161; continue _fun96258 }
 153:
                    romeo = tango.OUTBOUND_PROMOTIONS;
                    _fun96258_ip = 167; continue _fun96258;
 161:
                    romeo = tango.OUTBOUND_PROMOTIONS_PREVIEW;
 167:
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 7;
                    tango = oscar[tango];
                    tango = report.bind(mike)(tango);
                    oscar = tango.HTTP;
                    report = oscar.get;
                    tango = {};
                    tango['url'] = romeo;
                    romeo = {};
                    kilo = _closure1_slot4;
                    kilo = kilo.locale;
                    romeo['locale'] = kilo;
                    tango['query'] = romeo;
                    romeo = true;
                    tango['oldFormErrors'] = romeo;
                    tango['rejectWithError'] = romeo;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=244);
 242:
                    return tango;
 244:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun96258_ip = 458; continue _fun96258 }
 253:
                    offset = tango.body;
                    report = _closure1_slot5;
                    options = report.consumedInboundPromotionId;
                    report = _closure1_slot5;
                    report = report.hasFetchedConsumedInboundPromotionId;
                    if(report) { _fun96258_ip = 387; continue _fun96258 }
 281:
                    oscar = _closure1_slot0;
                    romeo = _closure1_slot2;
                    report = 8;
                    report = romeo[report];
                    romeo = oscar.bind(mike)(report);
                    oscar = romeo.fetchUserEntitlementsForApplication;
                    report = _closure1_slot6;
                    report = oscar.bind(romeo)(report, backup);
                    SaveGenerator(address=321);
 319:
                    return report;
 321:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun96258_ip = 384; continue _fun96258 }
 327:
                    romeo = report.find;
                    oscar = function(argFoo) {
                        _fun96259: for(var _fun96259_ip = 0; ; ) switch(_fun96259_ip) {
 0:
                            mike = argFoo;
                            zulu = mike.promotion_id;
                            entity = null;
                            entity = entity != zulu;
                            if(!entity) { _fun96259_ip = 30; continue _fun96259 }
 18:
                            zulu = mike.consumed;
                            mike = true;
                            entity = mike === zulu;
 30:
                            return entity;
                        }
                    };
                    romeo = romeo.bind(report)(oscar);
                    foxtrot = romeo;
                    oscar = null;
                    backup = oscar == romeo;
                    romeo = undefined;
                    if(backup) { _fun96258_ip = 364; continue _fun96258 }
 358:
                    romeo = foxtrot.promotion_id;
 364:
                    yankee = romeo;
                    romeo = oscar != romeo;
                    oscar = null;
                    if(!romeo) { _fun96258_ip = 379; continue _fun96258 }
 376:
                    oscar = yankee;
 379:
                    options = oscar;
                    _fun96258_ip = 387; continue _fun96258;
 384: // try_end0
                    return report;
 387: // try_start_1
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[golf];
                    golf = oscar.bind(mike)(report);
                    oscar = golf.dispatch;
                    report = {};
                    yankee = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_SUCCESS';
                    report['type'] = yankee;
                    yankee = offset;
                    offset = yankee.map;
                    verify = function(argFoo) {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 9;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.outboundPromotionFromServer;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    verify = offset.bind(yankee)(verify);
                    report['activeOutboundPromotions'] = verify;
                    report['consumedInboundPromotionId'] = options;
                    report = oscar.bind(golf)(report);
 456: // try_end1
                    _fun96258_ip = 505; continue _fun96258;
 458:
                    return tango;
 461: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 5;
                    zulu = report[zulu];
                    report = tango.bind(mike)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'ACTIVE_OUTBOUND_PROMOTIONS_FETCH_FAIL';
                    zulu['type'] = oscar;
                    zulu = tango.bind(report)(zulu);
 505:
                    return mike;
 508:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot8 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    tango = function() { // Original name: dismissOutboundPromotionNotice
        _fun96261: for(var _fun96261_ip = 0; ; ) switch(_fun96261_ip) {
 0:
            report = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 5;
            tango = tango[entity];
            entity = undefined;
            oscar = report.bind(entity)(tango);
            report = oscar.dispatch;
            tango = {};
            golf = 'OUTBOUND_PROMOTION_NOTICE_DISMISS';
            tango['type'] = golf;
            tango = report.bind(oscar)(tango);
            tango = _closure1_slot5;
            report = tango.lastDismissedOutboundPromotionStartDate;
            var _closure2_slot0 = report;
            tango = null;
            if(!(tango != report)) { _fun96261_ip = 140; continue _fun96261 }
 69:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 10;
            report = golf[zulu];
            report = tango.bind(entity)(report);
            oscar = report.PreloadedUserSettingsActionCreators;
            report = oscar.updateAsync;
            zulu = golf[zulu];
            zulu = tango.bind(entity)(zulu);
            zulu = zulu.UserSettingsDelay;
            tango = zulu.INFREQUENT_USER_ACTION;
            zulu = 'userContent';
            mike = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 11;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                tango = mike.StringValue;
                zulu = tango.create;
                mike = {};
                report = _closure2_slot0;
                mike['value'] = report;
                zulu = zulu.bind(tango)(mike);
                mike = argFoo;
                mike['lastDismissedOutboundPromotionStartDate'] = zulu;
                return entity;
            };
            mike = report.bind(oscar)(zulu, mike, tango);
 140:
            return entity;
        }
    };
    mike = function() { // Original name: fetchActiveBogoPromotion
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    entity = function() { // Original name: _fetchActiveBogoPromotion
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun96266: for(var _fun96266_ip = 0; ; ) switch(_fun96266_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun96266_ip = 291; continue _fun96266 }
 10:
                    zulu = _closure1_slot5;
                    zulu = zulu.isFetchingActiveBogoPromotion;
                    if(zulu) { _fun96266_ip = 286; continue _fun96266 }
 31: // try_start_0
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 5;
                    zulu = oscar[tango];
                    offset = undefined;
                    golf = report.bind(offset)(zulu);
                    report = golf.dispatch;
                    zulu = {};
                    options = 'ACTIVE_BOGO_PROMOTION_FETCH';
                    zulu['type'] = options;
                    zulu = report.bind(golf)(zulu);
                    report = _closure1_slot0;
                    zulu = 7;
                    zulu = oscar[zulu];
                    zulu = report.bind(offset)(zulu);
                    oscar = zulu.HTTP;
                    report = oscar.get;
                    zulu = {};
                    golf = _closure1_slot7;
                    golf = golf.BOGO_PROMOTIONS;
                    zulu['url'] = golf;
                    golf = {};
                    options = _closure1_slot4;
                    options = options.locale;
                    golf['locale'] = options;
                    zulu['query'] = golf;
                    golf = true;
                    zulu['rejectWithError'] = golf;
                    zulu = report.bind(oscar)(zulu);
                    SaveGenerator(address=153);
 151:
                    return zulu;
 153:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun96266_ip = 237; continue _fun96266 }
 159:
                    verify = zulu.body;
                    report = _closure1_slot1;
                    yankee = _closure1_slot2;
                    tango = yankee[tango];
                    oscar = report.bind(offset)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'ACTIVE_BOGO_PROMOTION_FETCH_SUCCESS';
                    tango['type'] = golf;
                    options = _closure1_slot0;
                    golf = 9;
                    golf = yankee[golf];
                    options = options.bind(offset)(golf);
                    golf = options.bogoPromotionFromServer;
                    golf = golf.bind(options)(verify);
                    tango['activePromotion'] = golf;
                    tango = report.bind(oscar)(tango);
 235: // try_end0
                    _fun96266_ip = 286; continue _fun96266;
 237:
                    return zulu;
 240: // catch_target0
                    CatchBlockStart(arg_register=2);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'ACTIVE_BOGO_PROMOTION_FETCH_FAIL';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
 286:
                    mike = undefined;
                    return mike;
 291:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = global;
    romeo = entity.Object;
    yankee = romeo.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = yankee.bind(romeo)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 2;
    oscar = verify[oscar];
    oscar = offset.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 3;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.Endpoints;
    var _closure1_slot7 = oscar;
    oscar = {};
    oscar['fetchActiveOutboundPromotions'] = report;
    oscar['dismissOutboundPromotionNotice'] = tango;
    golf = function() { // Original name: markOutboundPromotionsSeen
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'OUTBOUND_PROMOTIONS_SEEN';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    oscar['markOutboundPromotionsSeen'] = golf;
    oscar['fetchActiveBogoPromotion'] = mike;
    golf = 12;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/premium/promotions/PromotionsActionCreators.tsx';
    golf = options.bind(verify)(golf);
    zulu['default'] = oscar;
    zulu['fetchActiveOutboundPromotions'] = report;
    zulu['dismissOutboundPromotionNotice'] = tango;
    zulu['fetchActiveBogoPromotion'] = mike;
    return entity;
})();
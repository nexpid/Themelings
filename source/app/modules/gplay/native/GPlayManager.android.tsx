// app/modules/gplay/native/GPlayManager.android.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    verify = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: handleConnectionStateUpdated
        _fun75743: for(var _fun75743_ip = 0; ; ) switch(_fun75743_ip) {
 0:
            entity = argFoo;
            tango = entity.connectionState;
            report = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            oscar = report.bind(entity)(zulu);
            report = oscar.dispatch;
            zulu = {};
            golf = 'GPLAY_UPDATE_CONNECTION_STATE';
            zulu['type'] = golf;
            zulu['connectionState'] = tango;
            zulu = report.bind(oscar)(zulu);
            zulu = _closure1_slot10;
            zulu = zulu.CONNECTED;
            if(!(tango === zulu)) { _fun75743_ip = 105; continue _fun75743 }
 75:
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 13;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.loadSkus;
            mike = mike.bind(zulu)();
 105:
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = function(argFoo) { // Original name: handlePurchaseStateUpdated
        entity = argFoo;
        report = entity.billingResult;
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        oscar = 'GPLAY_UPDATE_PURCHASE_STATE';
        mike['type'] = oscar;
        mike['billingResult'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot24 = entity;
    entity = function() { // Original name: handlePurchaseUpdated
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: _handlePurchaseUpdated
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun75748: for(var _fun75748_ip = 0; ; ) switch(_fun75748_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun75748_ip = 1083; continue _fun75748 }
 10:
                    mike = argFoo;
                    options = mike.purchase;
                    zulu = undefined;
                    romeo = undefined;
                    foxtrot = undefined;
                    SaveGenerator(address=29);
 27:
                    return zulu;
 29:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun75748_ip = 1080; continue _fun75748 }
 38:
                    golf = _closure1_slot8;
                    oscar = golf.isPurchasingProduct;
                    tango = options;
                    tango = tango.productId;
                    tango = oscar.bind(golf)(tango);
                    if(tango) { _fun75748_ip = 1077; continue _fun75748 }
 71:
                    oscar = _closure1_slot9;
                    tango = oscar.getState;
                    tango = tango.bind(oscar)();
                    oscar = tango.analyticsByProductId;
                    tango = options;
                    tango = tango.productId;
                    romeo = oscar[tango];
 104: // try_start_0 // try_start_2
                    golf = _closure1_slot1;
                    tango = _closure1_slot2;
                    verify = 12;
                    oscar = tango[verify];
                    yankee = golf.bind(zulu)(oscar);
                    golf = yankee.dispatch;
                    oscar = {};
                    offset = 'GPLAY_VERIFICATION_START';
                    oscar['type'] = offset;
                    offset = options;
                    backup = offset.productId;
                    oscar['productId'] = backup;
                    oscar = golf.bind(yankee)(oscar);
                    oscar = _closure1_slot0;
                    backup = 13;
                    tango = tango[backup];
                    golf = oscar.bind(zulu)(tango);
                    oscar = golf.verifyPurchase;
                    tango = _closure1_slot18;
                    tango = oscar.bind(golf)(offset, tango);
                    SaveGenerator(address=196);
 194:
                    return tango;
 196:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun75748_ip = 639; continue _fun75748 }
 205:
                    foxtrot = tango;
                    golf = null;
                    if(!(golf != tango)) { _fun75748_ip = 395; continue _fun75748 }
 217:
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    oscar = 14;
                    oscar = yankee[oscar];
                    oscar = offset.bind(zulu)(oscar);
                    yankee = oscar.SubscriptionProductIds;
                    offset = yankee.includes;
                    oscar = options;
                    oscar = oscar.productId;
                    oscar = offset.bind(yankee)(oscar);
                    if(oscar) { _fun75748_ip = 395; continue _fun75748 }
 268:
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscar = offset[verify];
                    sizing = yankee.bind(zulu)(oscar);
                    kilo = sizing.dispatch;
                    yankee = {};
                    oscar = 'GPLAY_PURCHASE_VERIFIED';
                    yankee['type'] = oscar;
                    oscar = options;
                    output = oscar.productId;
                    yankee['productId'] = output;
                    yankee = kilo.bind(sizing)(yankee);
                    yankee = _closure1_slot0;
                    offset = offset[backup];
                    yankee = yankee.bind(zulu)(offset);
                    offset = yankee.sendPaymentCompleteAnalytics;
                    offset = offset.bind(yankee)(oscar);
                    yankee = _closure1_slot15;
                    offset = yankee.info;
                    kilo = oscar.productId;
                    oscar = global;
                    oscar = oscar.HermesInternal;
                    backup = oscar.concat;
                    oscar = '[handlePurchaseUpdated] One Time Purchase verified and consumed: ';
                    oscar = backup.bind(oscar)(kilo);
                    oscar = offset.bind(yankee)(oscar);
                    _fun75748_ip = 578; continue _fun75748;
 395:
                    oscar = foxtrot;
                    if(!(golf != oscar)) { _fun75748_ip = 415; continue _fun75748 }
 402:
                    oscar = foxtrot;
                    oscar = oscar.pendingDowngrade;
                    if(!(golf == oscar)) { _fun75748_ip = 492; continue _fun75748 }
 415:
                    oscar = _closure1_slot31;
                    oscar = oscar.bind(zulu)();
                    SaveGenerator(address=427);
 425:
                    return oscar;
 427:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(!golf) { _fun75748_ip = 578; continue _fun75748 }
 436: // try_end0 // try_end2
                    offset = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[verify];
                    yankee = offset.bind(zulu)(golf);
                    offset = yankee.dispatch;
                    golf = {};
                    backup = 'GPLAY_VERIFICATION_END';
                    golf['type'] = backup;
                    backup = options;
                    backup = backup.productId;
                    golf['productId'] = backup;
                    golf = offset.bind(yankee)(golf);
                    return oscar;
 492: // try_start_1 // try_start_3
                    golf = _closure1_slot1;
                    offset = _closure1_slot2;
                    oscar = offset[verify];
                    yankee = golf.bind(zulu)(oscar);
                    golf = yankee.dispatch;
                    oscar = {};
                    backup = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
                    oscar['type'] = backup;
                    foxtrot = foxtrot.pendingDowngrade;
                    oscar['pendingDowngrade'] = foxtrot;
                    oscar = golf.bind(yankee)(oscar);
                    golf = _closure1_slot0;
                    oscar = 15;
                    oscar = offset[oscar];
                    golf = golf.bind(zulu)(oscar);
                    oscar = golf.fetchSubscriptions;
                    oscar = oscar.bind(golf)();
                    SaveGenerator(address=572);
 570:
                    return oscar;
 572:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=6);
                    if(golf) { _fun75748_ip = 583; continue _fun75748 }
 578: // try_end1
                    _fun75748_ip = 962; continue _fun75748;
 583: // try_end3
                    offset = _closure1_slot1;
                    golf = _closure1_slot2;
                    golf = golf[verify];
                    yankee = offset.bind(zulu)(golf);
                    offset = yankee.dispatch;
                    golf = {};
                    foxtrot = 'GPLAY_VERIFICATION_END';
                    golf['type'] = foxtrot;
                    foxtrot = options;
                    foxtrot = foxtrot.productId;
                    golf['productId'] = foxtrot;
                    golf = offset.bind(yankee)(golf);
                    return oscar;
 639:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[verify];
                    verify = golf.bind(zulu)(oscar);
                    golf = verify.dispatch;
                    oscar = {};
                    offset = 'GPLAY_VERIFICATION_END';
                    oscar['type'] = offset;
                    offset = options;
                    offset = offset.productId;
                    oscar['productId'] = offset;
                    oscar = golf.bind(verify)(oscar);
                    return tango;
 695: // try_start_4 // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=9);
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 16;
                    tango = golf[tango];
                    verify = oscar.bind(zulu)(tango);
                    oscar = verify.captureBillingException;
                    tango = {};
                    foxtrot = {};
                    yankee = options;
                    backup = yankee.productId;
                    foxtrot['productId'] = backup;
                    tango['tags'] = foxtrot;
                    tango = oscar.bind(verify)(offset, tango);
                    verify = _closure1_slot15;
                    oscar = verify.error;
                    sizing = yankee.productId;
                    kilo = offset.message;
                    tango = global;
                    tango = tango.HermesInternal;
                    backup = tango.concat;
                    foxtrot = '[handlePurchaseUpdated] Error verifying purchase ';
                    tango = ': ';
                    tango = backup.bind(foxtrot)(sizing, tango, kilo);
                    tango = oscar.bind(verify)(tango);
                    oscar = _closure1_slot1;
                    tango = 12;
                    tango = golf[tango];
                    foxtrot = oscar.bind(zulu)(tango);
                    verify = foxtrot.dispatch;
                    tango = {};
                    backup = 'GPLAY_PURCHASE_VERIFICATION_FAILED';
                    tango['type'] = backup;
                    backup = yankee.productId;
                    tango['productId'] = backup;
                    tango = verify.bind(foxtrot)(tango);
                    tango = 17;
                    tango = golf[tango];
                    verify = oscar.bind(zulu)(tango);
                    golf = verify.track;
                    tango = _closure1_slot12;
                    oscar = tango.GPLAY_PURCHASE_FAILED;
                    tango = {};
                    echo = romeo;
                    update = tango;
                    romeo = copyDataProperties(update, echo);
                    foxtrot = 'handlePurchaseUpdated';
                    romeo = 'location';
                    tango[romeo] = foxtrot;
                    foxtrot = yankee.productId;
                    romeo = 'product_id';
                    tango[romeo] = foxtrot;
                    romeo = yankee.purchaseToken;
                    yankee = 'purchase_token';
                    tango[yankee] = romeo;
                    yankee = offset.message;
                    offset = 'error';
                    tango[offset] = yankee;
                    tango = golf.bind(verify)(oscar, tango);
 962: // try_end4
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 12;
                    tango = golf[tango];
                    golf = oscar.bind(zulu)(tango);
                    oscar = golf.dispatch;
                    tango = {};
                    verify = 'GPLAY_VERIFICATION_END';
                    tango['type'] = verify;
                    verify = options;
                    verify = verify.productId;
                    tango['productId'] = verify;
                    tango = oscar.bind(golf)(tango);
                    _fun75748_ip = 1077; continue _fun75748;
 1020: // catch_target2 // catch_target3 // catch_target4
                    CatchBlockStart(arg_register=3);
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 12;
                    report = golf[report];
                    golf = oscar.bind(zulu)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'GPLAY_VERIFICATION_END';
                    report['type'] = verify;
                    options = options.productId;
                    report['productId'] = options;
                    report = oscar.bind(golf)(report);
                    throw tango;
 1077:
                    return zulu;
 1080:
                    return mike;
 1083:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: handleDowngradeCommand
        entity = undefined;
        tango = _closure1_slot28;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _handleDowngradeCommand
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun75752: for(var _fun75752_ip = 0; ; ) switch(_fun75752_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun75752_ip = 161; continue _fun75752 }
 10:
                    mike = argFoo;
                    options = mike.downgradeCommand;
                    tango = undefined;
                    SaveGenerator(address=27);
 25:
                    return tango;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun75752_ip = 158; continue _fun75752 }
 36:
                    report = _closure1_slot11;
                    report = report.EXECUTE;
                    if(!(report !== options)) { _fun75752_ip = 129; continue _fun75752 }
 53:
                    report = _closure1_slot11;
                    report = report.CLEAR;
                    if(!(report !== options)) { _fun75752_ip = 119; continue _fun75752 }
 67:
                    report = global;
                    golf = report.Error;
                    report = report.HermesInternal;
                    oscar = report.concat;
                    report = 'Invalid downgrade state ';
                    verify = oscar.bind(report)(options);
                    oscar = golf.prototype;
                    oscar = Object.create(oscar, {constructor: {value: golf}});
                    offset = oscar;
                    report = new offset[golf](verify, options);
                    report = report instanceof Object ? report : oscar;
                    throw report;
 119:
                    zulu = _closure1_slot30;
                    zulu = zulu.bind(tango)();
                    _fun75752_ip = 152; continue _fun75752;
 129:
                    zulu = function() { // Original name: executePendingDowngrade
                        entity = undefined;
                        tango = _closure1_slot29;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    zulu = zulu.bind(tango)();
                    SaveGenerator(address=146);
 144:
                    return zulu;
 146:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(report) { _fun75752_ip = 155; continue _fun75752 }
 152:
                    return tango;
 155:
                    return zulu;
 158:
                    return mike;
 161:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _executePendingDowngrade
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun75756: for(var _fun75756_ip = 0; ; ) switch(_fun75756_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun75756_ip = 610; continue _fun75756 }
 10:
                    report = undefined;
                    offset = undefined;
                    tango = _closure1_slot8;
                    mike = tango.getPendingDowngrade;
                    mike = mike.bind(tango)();
                    offset = mike;
                    yankee = null;
                    if(!(yankee != mike)) { _fun75756_ip = 559; continue _fun75756 }
 45: // try_start_0 // try_start_1
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    golf = 12;
                    mike = oscar[golf];
                    verify = tango.bind(report)(mike);
                    tango = verify.dispatch;
                    mike = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': true};
                    mike = tango.bind(verify)(mike);
                    tango = _closure1_slot0;
                    mike = 13;
                    mike = oscar[mike];
                    oscar = tango.bind(report)(mike);
                    tango = oscar.downgradeSubscription;
                    mike = offset;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=123);
 121:
                    return mike;
 123:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun75756_ip = 204; continue _fun75756 }
 129:
                    tango = _closure1_slot30;
                    tango = tango.bind(report)();
                    tango = _closure1_slot31;
                    tango = tango.bind(report)();
                    SaveGenerator(address=149);
 147:
                    return tango;
 149:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscar) { _fun75756_ip = 160; continue _fun75756 }
 155: // try_end0
                    _fun75756_ip = 515; continue _fun75756;
 160: // try_end1
                    verify = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[golf];
                    romeo = verify.bind(report)(oscar);
                    verify = romeo.dispatch;
                    oscar = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    oscar = verify.bind(romeo)(oscar);
                    return tango;
 204:
                    oscar = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[golf];
                    golf = oscar.bind(report)(tango);
                    oscar = golf.dispatch;
                    tango = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    tango = oscar.bind(golf)(tango);
                    return mike;
 248: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register=6);
                    options = golf;
                    kilo = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 16;
                    mike = oscar[mike];
                    tango = kilo.bind(report)(mike);
                    mike = tango.captureBillingException;
                    mike = mike.bind(tango)(golf);
                    tango = _closure1_slot1;
                    mike = 18;
                    mike = oscar[mike];
                    verify = tango.bind(report)(mike);
                    golf = verify.show;
                    mike = {};
                    romeo = 19;
                    foxtrot = oscar[romeo];
                    foxtrot = kilo.bind(report)(foxtrot);
                    sizing = foxtrot.intl;
                    backup = sizing.string;
                    foxtrot = oscar[romeo];
                    foxtrot = kilo.bind(report)(foxtrot);
                    foxtrot = foxtrot.t;
                    foxtrot = foxtrot.U+H+kZ;
                    foxtrot = backup.bind(sizing)(foxtrot);
                    mike['title'] = foxtrot;
                    foxtrot = oscar[romeo];
                    foxtrot = kilo.bind(report)(foxtrot);
                    backup = foxtrot.intl;
                    foxtrot = backup.string;
                    romeo = oscar[romeo];
                    romeo = kilo.bind(report)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.LFFx5O;
                    romeo = foxtrot.bind(backup)(romeo);
                    mike['body'] = romeo;
                    mike = golf.bind(verify)(mike);
                    mike = 17;
                    mike = oscar[mike];
                    golf = tango.bind(report)(mike);
                    oscar = golf.track;
                    mike = _closure1_slot12;
                    tango = mike.GPLAY_PURCHASE_FAILED;
                    mike = {};
                    verify = 'executePendingDowngrade';
                    mike['location'] = verify;
                    verify = offset;
                    romeo = yankee == verify;
                    verify = undefined;
                    if(romeo) { _fun75756_ip = 472; continue _fun75756 }
 463:
                    romeo = offset;
                    verify = romeo.newSubscriptionSkuId;
 472:
                    mike['product_id'] = verify;
                    verify = offset;
                    yankee = yankee == verify;
                    verify = undefined;
                    if(yankee) { _fun75756_ip = 495; continue _fun75756 }
 489:
                    verify = offset.purchaseToken;
 495:
                    mike['purchase_token'] = verify;
                    options = options.message;
                    mike['error'] = options;
                    mike = oscar.bind(golf)(tango, mike);
 515: // try_end2
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 12;
                    mike = oscar[mike];
                    oscar = tango.bind(report)(mike);
                    tango = oscar.dispatch;
                    mike = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    mike = tango.bind(oscar)(mike);
 559:
                    return report;
 562: // catch_target1 // catch_target2
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 12;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {'type': 'GPLAY_UPDATE_IS_DOWNGRADING', 'isDowngrading': false};
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 610:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot29 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot29 = entity;
    entity = function() { // Original name: clearPendingDowngrade
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 12;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {'type': 'GPLAY_UPDATE_PENDING_DOWNGRADE', 'pendingDowngrade': null};
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: fetchAndAlertActiveSubscription
        entity = undefined;
        tango = _closure1_slot32;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: _fetchAndAlertActiveSubscription
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun75761: for(var _fun75761_ip = 0; ; ) switch(_fun75761_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun75761_ip = 203; continue _fun75761 }
 12:
                    options = undefined;
                    var _closure4_slot0 = options;
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 15;
                    mike = oscar[mike];
                    report = report.bind(options)(mike);
                    mike = report.fetchSubscriptions;
                    mike = mike.bind(report)();
                    SaveGenerator(address=55);
 53:
                    return mike;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun75761_ip = 200; continue _fun75761 }
 64:
                    oscar = _closure1_slot7;
                    report = oscar.getPremiumTypeSubscription;
                    oscar = report.bind(oscar)();
                    _closure4_slot0 = oscar;
                    report = null;
                    if(!(report != oscar)) { _fun75761_ip = 115; continue _fun75761 }
 88:
                    report = _closure1_slot4;
                    report = report.bind(options)();
                    report = _closure1_slot5;
                    tango = function() {
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 18;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.openLazy;
                        mike = {};
                        report = function() { // Original name: importer
                            zulu = _closure1_slot0;
                            entity = _closure1_slot2;
                            mike = 21;
                            mike = entity[mike];
                            tango = undefined;
                            zulu = zulu.bind(tango)(mike);
                            mike = 20;
                            mike = entity[mike];
                            entity = entity.paths;
                            zulu = zulu.bind(tango)(mike, entity);
                            mike = zulu.then;
                            entity = function(argFoo) {
                                mike = argFoo;
                                mike = mike.default;
                                var _closure7_slot0 = mike;
                                entity = function(argFoo) {
                                    tango = _closure1_slot14;
                                    zulu = _closure7_slot0;
                                    mike = {};
                                    oscar = argFoo;
                                    golf = mike;
                                    entity = copyDataProperties(golf, oscar);
                                    report = _closure4_slot0;
                                    entity = 'subscription';
                                    mike[entity] = report;
                                    entity = undefined;
                                    entity = tango.bind(entity)(zulu, mike);
                                    return entity;
                                };
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike['importer'] = report;
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    tango = report.bind(options)(tango);
                    return options;
 115:
                    tango = global;
                    report = tango.Error;
                    golf = _closure1_slot0;
                    verify = _closure1_slot2;
                    zulu = 19;
                    tango = verify[zulu];
                    tango = golf.bind(options)(tango);
                    oscar = tango.intl;
                    tango = oscar.string;
                    zulu = verify[zulu];
                    zulu = golf.bind(options)(zulu);
                    zulu = zulu.t;
                    zulu = zulu.PjfUXV;
                    offset = tango.bind(oscar)(zulu);
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    yankee = tango;
                    zulu = new yankee[report](offset, verify);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 200:
                    return mike;
 203:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot32 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: handleAppStateUpdated
        entity = undefined;
        tango = _closure1_slot34;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _handleAppStateUpdated
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun75769: for(var _fun75769_ip = 0; ; ) switch(_fun75769_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun75769_ip = 134; continue _fun75769 }
 10:
                    mike = argFoo;
                    oscar = mike.state;
                    zulu = undefined;
                    SaveGenerator(address=24);
 22:
                    return zulu;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun75769_ip = 131; continue _fun75769 }
 30:
                    golf = _closure1_slot8;
                    report = golf.isReady;
                    report = report.bind(golf)();
                    if(!report) { _fun75769_ip = 128; continue _fun75769 }
 50:
                    golf = _closure1_slot6;
                    report = golf.isAuthenticated;
                    report = report.bind(golf)();
                    if(!report) { _fun75769_ip = 128; continue _fun75769 }
 67:
                    report = _closure1_slot13;
                    report = report.ACTIVE;
                    if(!(oscar === report)) { _fun75769_ip = 128; continue _fun75769 }
 81: // try_start_0
                    oscar = _closure1_slot16;
                    report = oscar.loadPurchases;
                    report = report.bind(oscar)();
                    SaveGenerator(address=101);
 99:
                    return report;
 101:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun75769_ip = 109; continue _fun75769 }
 107: // try_end0
                    _fun75769_ip = 128; continue _fun75769;
 109:
                    return report;
 112: // catch_target0
                    CatchBlockStart(arg_register=4);
                    report = _closure1_slot16;
                    tango = report.open;
                    tango = tango.bind(report)();
 128:
                    return zulu;
 131:
                    return mike;
 134:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot34 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 1;
    golf = oscar[mike];
    mike = argCorge;
    mike = mike.bind(entity)(golf);
    mike = 2;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.NativeEventEmitter;
    mike = mike.NativeModules;
    golf = 3;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    offset = golf.setPaymentSuccess;
    var _closure1_slot4 = offset;
    golf = golf.showOldPaymentFlowSuccess;
    var _closure1_slot5 = golf;
    golf = 4;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot6 = golf;
    golf = 5;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot7 = golf;
    golf = 6;
    golf = oscar[golf];
    golf = verify.bind(entity)(golf);
    var _closure1_slot8 = golf;
    golf = 7;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.useGPlayAnalyticsStore;
    var _closure1_slot9 = golf;
    golf = 8;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    offset = golf.GPlayConnectionState;
    var _closure1_slot10 = offset;
    golf = golf.GPlayDowngradeCommand;
    var _closure1_slot11 = golf;
    golf = 9;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    offset = golf.AnalyticEvents;
    var _closure1_slot12 = offset;
    golf = golf.AppStates;
    var _closure1_slot13 = golf;
    golf = 10;
    golf = oscar[golf];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot14 = golf;
    golf = 11;
    golf = oscar[golf];
    offset = verify.bind(entity)(golf);
    golf = offset.prototype;
    verify = Object.create(golf, {constructor: {value: offset}});
    foxtrot = 'GPlayManager.android';
    backup = verify;
    golf = new backup[offset](foxtrot, romeo);
    golf = golf instanceof Object ? golf : verify;
    var _closure1_slot15 = golf;
    mike = mike.BillingManager;
    var _closure1_slot16 = mike;
    golf = options.prototype;
    golf = Object.create(golf, {constructor: {value: options}});
    backup = golf;
    foxtrot = mike;
    mike = new backup[options](foxtrot, romeo);
    mike = mike instanceof Object ? mike : golf;
    var _closure1_slot17 = mike;
    golf = {};
    var _closure1_slot18 = golf;
    mike = null;
    var _closure1_slot19 = mike;
    var _closure1_slot20 = mike;
    var _closure1_slot21 = mike;
    var _closure1_slot22 = mike;
    mike = {};
    mike['giftInfoOptionsCache'] = golf;
    golf = function() { // Original name: initialize
        zulu = _closure1_slot16;
        entity = zulu.open;
        entity = entity.bind(zulu)();
        report = _closure1_slot17;
        tango = report.addListener;
        zulu = _closure1_slot23;
        entity = 'billing-manager-connection-state-updated';
        entity = tango.bind(report)(entity, zulu);
        _closure1_slot19 = entity;
        tango = report.addListener;
        zulu = _closure1_slot24;
        entity = 'billing-manager-purchase-state-updated';
        entity = tango.bind(report)(entity, zulu);
        _closure1_slot20 = entity;
        tango = report.addListener;
        zulu = _closure1_slot25;
        entity = 'billing-manager-purchase-updated';
        entity = tango.bind(report)(entity, zulu);
        _closure1_slot21 = entity;
        tango = report.addListener;
        zulu = _closure1_slot27;
        entity = 'billing-manager-downgrade-command';
        entity = tango.bind(report)(entity, zulu);
        _closure1_slot22 = entity;
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 12;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.subscribe;
        zulu = _closure1_slot33;
        mike = 'APP_STATE_UPDATE';
        mike = tango.bind(report)(mike, zulu);
        return entity;
    };
    mike['initialize'] = golf;
    tango = function() { // Original name: terminate
        _fun75771: for(var _fun75771_ip = 0; ; ) switch(_fun75771_ip) {
 0:
            zulu = _closure1_slot16;
            entity = zulu.close;
            entity = entity.bind(zulu)();
            tango = _closure1_slot19;
            entity = null;
            if(!(entity != tango)) { _fun75771_ip = 37; continue _fun75771 }
 27:
            zulu = tango.remove;
            zulu = zulu.bind(tango)();
 37:
            tango = _closure1_slot20;
            if(!(entity != tango)) { _fun75771_ip = 55; continue _fun75771 }
 45:
            zulu = tango.remove;
            zulu = zulu.bind(tango)();
 55:
            tango = _closure1_slot21;
            if(!(entity != tango)) { _fun75771_ip = 73; continue _fun75771 }
 63:
            zulu = tango.remove;
            zulu = zulu.bind(tango)();
 73:
            zulu = _closure1_slot22;
            if(!(entity != zulu)) { _fun75771_ip = 91; continue _fun75771 }
 81:
            entity = zulu.remove;
            entity = entity.bind(zulu)();
 91:
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = _closure1_slot33;
            mike = 'APP_STATE_UPDATE';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        }
    };
    mike['terminate'] = tango;
    tango = 22;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gplay/native/GPlayManager.android.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
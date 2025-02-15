// app/actions/native/GiftCodeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    verify = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    mike = function() { // Original name: redeemGiftCode
        entity = undefined;
        tango = _closure1_slot7;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    entity = function() { // Original name: _redeemGiftCode
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun69718: for(var _fun69718_ip = 0; ; ) switch(_fun69718_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun69718_ip = 650; continue _fun69718 }
 13:
                    backup = mike.code;
                    golf = mike.options;
                    zulu = undefined;
                    if(!(golf === zulu)) { _fun69718_ip = 36; continue _fun69718 }
 29:
                    golf = _closure1_slot6;
 36:
                    offset = mike.onRedeemed;
                    oscar = mike.onError;
                    output = undefined;
                    result = undefined;
                    yankee = undefined;
                    report = undefined;
                    SaveGenerator(address=60);
 58:
                    return zulu;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun69718_ip = 647; continue _fun69718 }
 69:
                    verify = _closure1_slot1;
                    romeo = _closure1_slot2;
                    options = 2;
                    options = romeo[options];
                    foxtrot = verify.bind(zulu)(options);
                    romeo = foxtrot.getCurrentConfig;
                    verify = {};
                    options = 'redeemGiftCode';
                    verify['location'] = options;
                    options = {};
                    kilo = false;
                    options['autoTrackExposure'] = kilo;
                    options = romeo.bind(foxtrot)(verify, options);
                    options = options.paymentsBlocked;
                    if(options) { _fun69718_ip = 620; continue _fun69718 }
 135:
                    romeo = golf.channelId;
                    options = null;
                    verify = null;
                    if(!(zulu !== romeo)) { _fun69718_ip = 151; continue _fun69718 }
 148:
                    verify = romeo;
 151:
                    output = verify;
                    verify = golf.paymentSource;
                    golf = null;
                    if(!(zulu !== verify)) { _fun69718_ip = 169; continue _fun69718 }
 166:
                    golf = verify;
 169:
                    result = golf;
                    romeo = _closure1_slot1;
                    verify = _closure1_slot2;
                    golf = 4;
                    verify = verify[golf];
                    foxtrot = romeo.bind(zulu)(verify);
                    romeo = foxtrot.dispatch;
                    verify = {};
                    sizing = 'GIFT_CODE_REDEEM';
                    verify['type'] = sizing;
                    sizing = backup;
                    verify['code'] = sizing;
                    verify = romeo.bind(foxtrot)(verify);
 219: // try_start_0
                    romeo = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    verify = 5;
                    verify = foxtrot[verify];
                    verify = romeo.bind(zulu)(verify);
                    foxtrot = verify.HTTP;
                    romeo = foxtrot.post;
                    verify = {};
                    update = _closure1_slot4;
                    echo = update.GIFT_CODE_REDEEM;
                    sizing = backup;
                    sizing = echo.bind(update)(sizing);
                    verify['url'] = sizing;
                    sizing = {};
                    sizing['channel_id'] = output;
                    output = result;
                    echo = options == output;
                    output = undefined;
                    if(echo) { _fun69718_ip = 297; continue _fun69718 }
 292:
                    output = result.id;
 297:
                    sizing['payment_source_id'] = output;
                    verify['body'] = sizing;
                    sizing = true;
                    verify['oldFormErrors'] = sizing;
                    verify['rejectWithError'] = kilo;
                    verify = romeo.bind(foxtrot)(verify);
                    SaveGenerator(address=326);
 324:
                    return verify;
 326:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(romeo) { _fun69718_ip = 457; continue _fun69718 }
 335:
                    yankee = verify;
                    foxtrot = _closure1_slot1;
                    kilo = _closure1_slot2;
                    romeo = kilo[golf];
                    output = foxtrot.bind(zulu)(romeo);
                    sizing = output.dispatch;
                    romeo = {};
                    result = 'GIFT_CODE_REDEEM_SUCCESS';
                    romeo['type'] = result;
                    result = backup;
                    romeo['code'] = result;
                    romeo = sizing.bind(output)(romeo);
                    romeo = 6;
                    romeo = kilo[romeo];
                    sizing = foxtrot.bind(zulu)(romeo);
                    kilo = sizing.track;
                    romeo = _closure1_slot5;
                    foxtrot = romeo.OPEN_MODAL;
                    romeo = {};
                    output = 'gift_accept';
                    romeo['type'] = output;
                    romeo = kilo.bind(sizing)(foxtrot, romeo);
                    romeo = offset;
                    if(!(options != romeo)) { _fun69718_ip = 440; continue _fun69718 }
 436:
                    offset = offset.bind(zulu)();
 440:
                    offset = {};
                    romeo = backup;
                    offset['code'] = romeo;
                    offset['entitlement'] = yankee;
 454: // try_end0
                    return offset;
 457:
                    return verify;
 460: // catch_target0
                    CatchBlockStart(arg_register=11);
                    yankee = _closure1_slot0;
                    offset = _closure1_slot2;
                    verify = 7;
                    verify = offset[verify];
                    verify = yankee.bind(zulu)(verify);
                    verify = verify.BillingError;
                    yankee = verify.prototype;
                    yankee = Object.create(yankee, {constructor: {value: verify}});
                    vacuum = yankee;
                    control = romeo;
                    verify = new vacuum[verify](control, source);
                    foxtrot = verify instanceof Object ? verify : yankee;
                    report = foxtrot;
                    verify = _closure1_slot1;
                    golf = offset[golf];
                    romeo = verify.bind(zulu)(golf);
                    yankee = romeo.dispatch;
                    golf = {};
                    kilo = 'GIFT_CODE_REDEEM_FAILURE';
                    golf['type'] = kilo;
                    golf['code'] = backup;
                    golf['error'] = foxtrot;
                    golf = yankee.bind(romeo)(golf);
                    golf = 6;
                    golf = offset[golf];
                    yankee = verify.bind(zulu)(golf);
                    offset = yankee.track;
                    golf = _closure1_slot5;
                    verify = golf.OPEN_MODAL;
                    golf = {'type': 'gift_accept', 'location': null};
                    golf = offset.bind(yankee)(verify, golf);
                    golf = oscar;
                    if(!(options != golf)) { _fun69718_ip = 618; continue _fun69718 }
 607:
                    golf = oscar;
                    oscar = report;
                    oscar = golf.bind(zulu)(oscar);
 618:
                    throw report;
 620:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 3;
                    tango = oscar[tango];
                    tango = report.bind(zulu)(tango);
                    tango = tango.bind(zulu)();
                    return zulu;
 647:
                    return mike;
 650:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot7 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot7 = entity;
    tango = global;
    yankee = tango.Object;
    offset = yankee.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, options);
    entity = 0;
    options = golf[entity];
    entity = undefined;
    options = verify.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = golf[options];
    options = oscar.bind(entity)(options);
    verify = options.Endpoints;
    var _closure1_slot4 = verify;
    options = options.AnalyticEvents;
    var _closure1_slot5 = options;
    verify = tango.Object;
    options = verify.freeze;
    tango = {};
    tango = options.bind(verify)(tango);
    var _closure1_slot6 = tango;
    tango = {};
    tango['redeemGiftCode'] = mike;
    report = 8;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'actions/native/GiftCodeActionCreators.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['redeemGiftCode'] = mike;
    return entity;
})();
// app/actions/native/GiftCodeActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golfie;
    michal = function() { // Original name: redeemGiftCode
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    entity = function() { // Original name: _redeemGiftCode
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 654; continue _fun00001 }
 13:
                    backup = michal.code;
                    golfie = michal.options;
                    zuuluu = undefined;
                    if(!(golfie === zuuluu)) { _fun00002_ip = 36; continue _fun00001 }
 29:
                    golfie = _closure1_slot6;
 36:
                    offset = michal.onRedeemed;
                    oscard = michal.onError;
                    output = undefined;
                    result = undefined;
                    yankee = undefined;
                    report = undefined;
                    SaveGenerator(address=60);
 58:
                    return zuuluu;
 60:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 651; continue _fun00001 }
 69:
                    verify = _closure1_slot1;
                    romeon = _closure1_slot2;
                    option = 2;
                    option = romeon[option];
                    foxtra = verify.bind(zuuluu)(option);
                    romeon = foxtra.getCurrentConfig;
                    verify = {};
                    option = 'redeemGiftCode';
                    verify['location'] = option;
                    option = {};
                    kiloes = false;
                    option['autoTrackExposure'] = kiloes;
                    option = romeon.bind(foxtra)(verify, option);
                    option = option.paymentsBlocked;
                    if(option) { _fun00002_ip = 624; continue _fun00001 }
 135:
                    romeon = golfie.channelId;
                    option = null;
                    verify = null;
                    if(!(zuuluu !== romeon)) { _fun00002_ip = 151; continue _fun00001 }
 148:
                    verify = romeon;
 151:
                    output = verify;
                    verify = golfie.paymentSource;
                    golfie = null;
                    if(!(zuuluu !== verify)) { _fun00002_ip = 169; continue _fun00001 }
 166:
                    golfie = verify;
 169:
                    result = golfie;
                    romeon = _closure1_slot1;
                    verify = _closure1_slot2;
                    golfie = 4;
                    verify = verify[golfie];
                    foxtra = romeon.bind(zuuluu)(verify);
                    romeon = foxtra.dispatch;
                    verify = {};
                    sizing = 'GIFT_CODE_REDEEM';
                    verify['type'] = sizing;
                    sizing = backup;
                    verify['code'] = sizing;
                    verify = romeon.bind(foxtra)(verify);
 219: // try_start_0
                    romeon = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    verify = 5;
                    verify = foxtra[verify];
                    verify = romeon.bind(zuuluu)(verify);
                    foxtra = verify.HTTP;
                    romeon = foxtra.post;
                    verify = {};
                    update = _closure1_slot4;
                    echoed = update.GIFT_CODE_REDEEM;
                    sizing = backup;
                    sizing = echoed.bind(update)(sizing);
                    verify['url'] = sizing;
                    sizing = {};
                    sizing['channel_id'] = output;
                    output = result;
                    echoed = option == output;
                    output = undefined;
                    if(echoed) { _fun00002_ip = 297; continue _fun00001 }
 292:
                    output = result.id;
 297:
                    sizing['payment_source_id'] = output;
                    verify['body'] = sizing;
                    sizing = true;
                    verify['oldFormErrors'] = sizing;
                    verify['rejectWithError'] = kiloes;
                    verify = romeon.bind(foxtra)(verify);
                    SaveGenerator(address=326);
 324:
                    return verify;
 326:
                    ResumeGenerator(result_out_reg=8, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 457; continue _fun00001 }
 335:
                    yankee = verify;
                    foxtra = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    romeon = kiloes[golfie];
                    output = foxtra.bind(zuuluu)(romeon);
                    sizing = output.dispatch;
                    romeon = {};
                    result = 'GIFT_CODE_REDEEM_SUCCESS';
                    romeon['type'] = result;
                    result = backup;
                    romeon['code'] = result;
                    romeon = sizing.bind(output)(romeon);
                    romeon = 6;
                    romeon = kiloes[romeon];
                    sizing = foxtra.bind(zuuluu)(romeon);
                    kiloes = sizing.track;
                    romeon = _closure1_slot5;
                    foxtra = romeon.OPEN_MODAL;
                    romeon = {};
                    output = 'gift_accept';
                    romeon['type'] = output;
                    romeon = kiloes.bind(sizing)(foxtra, romeon);
                    romeon = offset;
                    if(!(option != romeon)) { _fun00002_ip = 440; continue _fun00001 }
 436:
                    offset = offset.bind(zuuluu)();
 440:
                    offset = {};
                    romeon = backup;
                    offset['code'] = romeon;
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
                    verify = yankee.bind(zuuluu)(verify);
                    verify = verify.BillingError;
                    yankee = verify.prototype;
                    yankee = Object.create(yankee, {constructor: {value: verify}});
                    vacuum = yankee;
                    ctrled = romeon;
                    verify = new vacuum[verify](ctrled, source);
                    foxtra = verify instanceof Object ? verify : yankee;
                    report = foxtra;
                    verify = _closure1_slot1;
                    golfie = offset[golfie];
                    romeon = verify.bind(zuuluu)(golfie);
                    yankee = romeon.dispatch;
                    golfie = {};
                    kiloes = 'GIFT_CODE_REDEEM_FAILURE';
                    golfie['type'] = kiloes;
                    golfie['code'] = backup;
                    golfie['error'] = foxtra;
                    golfie = yankee.bind(romeon)(golfie);
                    golfie = 6;
                    golfie = offset[golfie];
                    yankee = verify.bind(zuuluu)(golfie);
                    offset = yankee.track;
                    golfie = _closure1_slot5;
                    verify = golfie.OPEN_MODAL;
                    golfie = {'type': 'gift_accept', 'location': null};
                    golfie = offset.bind(yankee)(verify, golfie);
                    golfie = oscard;
                    if(!(option != golfie)) { _fun00002_ip = 622; continue _fun00001 }
 611:
                    golfie = oscard;
                    oscard = report;
                    oscard = golfie.bind(zuuluu)(oscard);
 622:
                    throw report;
 624:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 3;
                    tangon = oscard[tangon];
                    tangon = report.bind(zuuluu)(tangon);
                    tangon = tangon.bind(zuuluu)();
                    return zuuluu;
 651:
                    return michal;
 654:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
    tangon = global;
    yankee = tangon.Object;
    offset = yankee.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, option);
    entity = 0;
    option = golfie[entity];
    entity = undefined;
    option = verify.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = golfie[option];
    option = oscard.bind(entity)(option);
    verify = option.Endpoints;
    var _closure1_slot4 = verify;
    option = option.AnalyticEvents;
    var _closure1_slot5 = option;
    verify = tangon.Object;
    option = verify.freeze;
    tangon = {};
    tangon = option.bind(verify)(tangon);
    var _closure1_slot6 = tangon;
    tangon = {};
    tangon['redeemGiftCode'] = michal;
    report = 8;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'actions/native/GiftCodeActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['redeemGiftCode'] = michal;
    return entity;
})();
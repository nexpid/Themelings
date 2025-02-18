// app/modules/activate_device/useDeviceCodeAuthorizeCallback.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _createTwoWayLink
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 726; continue _fun00001 }
 10:
                    result = argBar;
                    zuuluu = argBaz;
                    oscard = undefined;
                    option = undefined;
                    romeon = undefined;
                    tangon = undefined;
                    offset = undefined;
                    output = undefined;
                    golfie = undefined;
                    backup = undefined;
                    verify = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    report = 2;
                    report = foxtra[report];
                    foxtra = verify.bind(oscard)(report);
                    verify = foxtra.clientIdToActivateDevicePlatform;
                    report = argFoo;
                    report = verify.bind(foxtra)(report);
                    option = report;
                    verify = null;
                    if(!(verify != report)) { _fun00002_ip = 655; continue _fun00001 }
 81:
                    romeon = null;
 83: // try_start_0
                    foxtra = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    sizing = 3;
                    report = vacuum[sizing];
                    update = foxtra.bind(oscard)(report);
                    echoed = update.authorize;
                    foxtra = option;
                    report = {};
                    ctrled = _closure1_slot0;
                    source = 4;
                    source = vacuum[source];
                    source = ctrled.bind(oscard)(source);
                    source = source.TwoWayLinkType;
                    source = source.DEVICE_CODE;
                    report['twoWayLinkType'] = source;
                    source = zuuluu;
                    report['userCode'] = source;
                    report = echoed.bind(update)(foxtra, report);
                    SaveGenerator(address=165);
 163:
                    return report;
 165:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(foxtra) { _fun00002_ip = 534; continue _fun00001 }
 174:
                    foxtra = report.body;
                    romeon = foxtra.url;
 184: // try_end0
                    output = null;
 186: // try_start_1
                    echoed = _closure1_slot1;
                    update = _closure1_slot2;
                    foxtra = 5;
                    source = update[foxtra];
                    vacuum = echoed.bind(oscard)(source);
                    ctrled = romeon;
                    source = verify != ctrled;
                    romeon = 'No URL in authorize response';
                    romeon = vacuum.bind(oscard)(source, romeon);
                    source = _closure1_slot0;
                    romeon = 6;
                    romeon = update[romeon];
                    source = source.bind(oscard)(romeon);
                    romeon = source.getCallbackParamsFromURL;
                    romeon = romeon.bind(source)(ctrled);
                    romeon = romeon.state;
                    foxtra = update[foxtra];
                    update = echoed.bind(oscard)(foxtra);
                    echoed = verify != romeon;
                    foxtra = 'Authorize URL state query parameter must be present';
                    foxtra = update.bind(oscard)(echoed, foxtra);
                    output = romeon;
 285: // try_start_2 // try_end1
                    foxtra = _closure1_slot1;
                    romeon = _closure1_slot2;
                    romeon = romeon[sizing];
                    sizing = foxtra.bind(oscard)(romeon);
                    foxtra = sizing.callback;
                    romeon = option;
                    option = {};
                    option['code'] = result;
                    option['state'] = output;
                    option = foxtra.bind(sizing)(romeon, option);
                    SaveGenerator(address=331);
 329:
                    return option;
 331:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 340; continue _fun00001 }
 337: // try_end2
                    return oscard;
 340:
                    return option;
 343: // catch_target2
                    CatchBlockStart(arg_register=7);
                    kiloes = option;
                    foxtra = _closure1_slot8;
                    romeon = zuuluu;
                    sizing = verify == option;
                    option = undefined;
                    if(sizing) { _fun00002_ip = 386; continue _fun00001 }
 364:
                    kiloes = kiloes.body;
                    backup = kiloes;
                    kiloes = verify == kiloes;
                    option = undefined;
                    if(kiloes) { _fun00002_ip = 386; continue _fun00001 }
 381:
                    option = backup.code;
 386:
                    golfie = option;
                    backup = verify != option;
                    option = 0;
                    if(!backup) { _fun00002_ip = 401; continue _fun00001 }
 398:
                    option = golfie;
 401:
                    golfie = 'callback';
                    golfie = foxtra.bind(oscard)(romeon, option, golfie);
                    SaveGenerator(address=416);
 414:
                    return golfie;
 416:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 458; continue _fun00001 }
 422:
                    option = global;
                    foxtra = option.Error;
                    option = foxtra.prototype;
                    romeon = Object.create(option, {constructor: {value: foxtra}});
                    record = 'error during two way callback';
                    cntext = romeon;
                    option = new cntext[foxtra](record, config);
                    option = option instanceof Object ? option : romeon;
                    throw option;
 458:
                    return golfie;
 461: // catch_target1
                    CatchBlockStart(arg_register=6);
                    foxtra = _closure1_slot8;
                    romeon = zuuluu;
                    option = _closure1_slot6;
                    golfie = 'authorize';
                    golfie = foxtra.bind(oscard)(romeon, option, golfie);
                    SaveGenerator(address=489);
 487:
                    return golfie;
 489:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 531; continue _fun00001 }
 495:
                    option = global;
                    foxtra = option.Error;
                    option = foxtra.prototype;
                    romeon = Object.create(option, {constructor: {value: foxtra}});
                    record = 'error parsing callback params';
                    cntext = romeon;
                    option = new cntext[foxtra](record, config);
                    option = option instanceof Object ? option : romeon;
                    throw option;
 531:
                    return golfie;
 534:
                    return report;
 537: // catch_target0
                    CatchBlockStart(arg_register=4);
                    yankee = report;
                    option = _closure1_slot8;
                    golfie = zuuluu;
                    romeon = verify == report;
                    report = undefined;
                    if(romeon) { _fun00002_ip = 580; continue _fun00001 }
 558:
                    yankee = yankee.body;
                    offset = yankee;
                    yankee = verify == yankee;
                    report = undefined;
                    if(yankee) { _fun00002_ip = 580; continue _fun00001 }
 575:
                    report = offset.code;
 580:
                    tangon = report;
                    verify = verify != report;
                    report = 0;
                    if(!verify) { _fun00002_ip = 595; continue _fun00001 }
 592:
                    report = tangon;
 595:
                    tangon = 'authorize';
                    tangon = option.bind(oscard)(golfie, report, tangon);
                    SaveGenerator(address=610);
 608:
                    return tangon;
 610:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 652; continue _fun00001 }
 616:
                    report = global;
                    option = report.Error;
                    report = option.prototype;
                    golfie = Object.create(report, {constructor: {value: option}});
                    record = 'error during two way authorize';
                    cntext = golfie;
                    report = new cntext[option](record, config);
                    report = report instanceof Object ? report : golfie;
                    throw report;
 652:
                    return tangon;
 655:
                    report = _closure1_slot8;
                    tangon = zuuluu;
                    zuuluu = _closure1_slot5;
                    michal = 'authorize';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    SaveGenerator(address=681);
 679:
                    return michal;
 681:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 723; continue _fun00001 }
 687:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    record = 'Unsupported client_id for two way link';
                    cntext = tangon;
                    zuuluu = new cntext[report](record, config);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 723:
                    return michal;
 726:
                    return entity;
                }
            };
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
    entity = function() { // Original name: silentlyFinishTwoWayLinkError
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _silentlyFinishTwoWayLinkError
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun00004_ip = 76; continue _fun00003 }
 7:
                    tangon = argFoo;
                    zuuluu = argBar;
                    michal = argBaz;
 16: // try_start_0
                    golfie = _closure1_slot0;
                    oscard = _closure1_slot2;
                    report = 7;
                    oscard = oscard[report];
                    report = undefined;
                    oscard = golfie.bind(report)(oscard);
                    report = oscard.finishUserCodeTwoWayLinkError;
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    SaveGenerator(address=58);
 56:
                    return michal;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 66; continue _fun00003 }
 64: // try_end0
                    _fun00004_ip = 71; continue _fun00003;
 66:
                    return michal;
 69: // catch_target0
                    CatchBlockStart(arg_register=1);
 71:
                    michal = undefined;
                    return michal;
 76:
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
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    golfie = argCor;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot4 = golfie;
    var _closure1_slot5 = tangon;
    tangon = 2;
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activate_device/useDeviceCodeAuthorizeCallback.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: useDeviceCodeAuthorizeCallback
        golfie = argFoo;
        oscard = argBar;
        report = argBaz;
        var _closure2_slot0 = golfie;
        var _closure2_slot1 = oscard;
        var _closure2_slot2 = report;
        tangon = _closure1_slot4;
        zuuluu = tangon.useCallback;
        michal = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00006_ip = 318; continue _fun00005 }
 10:
                        michal = argFoo;
                        zuuluu = argBar;
                        if(zuuluu) { _fun00006_ip = 106; continue _fun00005 }
 19: // try_start_0
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        zuuluu = 7;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        oscard = report.bind(zuuluu)(tangon);
                        report = oscard.finishUserCode;
                        zuuluu = michal;
                        tangon = zuuluu.userCode;
                        zuuluu = 'denied';
                        zuuluu = report.bind(oscard)(tangon, zuuluu);
                        SaveGenerator(address=75);
 73:
                        return zuuluu;
 75:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 83; continue _fun00005 }
 81: // try_end0
                        _fun00006_ip = 88; continue _fun00005;
 83:
                        return zuuluu;
 86: // catch_target0
                        CatchBlockStart(arg_register=2);
 88:
                        tangon = _closure2_slot0;
                        zuuluu = undefined;
                        zuuluu = tangon.bind(zuuluu)();
                        _fun00006_ip = 313; continue _fun00005;
 106:
                        zuuluu = michal;
                        tangon = zuuluu.twoWayLinkCode;
                        zuuluu = null;
                        if(!(zuuluu != tangon)) { _fun00006_ip = 214; continue _fun00005 }
 121: // try_start_1
                        zuuluu = michal;
                        golfie = zuuluu.clientId;
                        report = zuuluu.twoWayLinkCode;
                        tangon = zuuluu.userCode;
                        zuuluu = function() { // Original name: createTwoWayLink
                            entity = undefined;
                            tangon = _closure1_slot7;
                            zuuluu = tangon.apply;
                            entity = arguments;
                            michal = entity;
                            entity = this;
                            entity = zuuluu.bind(tangon)(entity, michal);
                            return entity;
                        };
                        oscard = undefined;
                        zuuluu = zuuluu.bind(oscard)(golfie, report, tangon);
                        SaveGenerator(address=164);
 162:
                        return zuuluu;
 164:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 190; continue _fun00005 }
 170:
                        report = _closure2_slot2;
                        tangon = michal;
                        tangon = report.bind(oscard)(tangon);
 185: // try_end1
                        _fun00006_ip = 313; continue _fun00005;
 190:
                        return zuuluu;
 193: // catch_target1
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot1;
                        tangon = michal;
                        zuuluu = undefined;
                        zuuluu = report.bind(zuuluu)(tangon);
                        _fun00006_ip = 313; continue _fun00005;
 214: // try_start_2
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        zuuluu = 7;
                        zuuluu = report[zuuluu];
                        oscard = undefined;
                        golfie = tangon.bind(oscard)(zuuluu);
                        report = golfie.finishUserCode;
                        zuuluu = michal;
                        tangon = zuuluu.userCode;
                        zuuluu = 'granted';
                        zuuluu = report.bind(golfie)(tangon, zuuluu);
                        SaveGenerator(address=268);
 266:
                        return zuuluu;
 268:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tangon) { _fun00006_ip = 291; continue _fun00005 }
 274:
                        report = _closure2_slot2;
                        tangon = michal;
                        tangon = report.bind(oscard)(tangon);
 289: // try_end2
                        _fun00006_ip = 313; continue _fun00005;
 291:
                        return zuuluu;
 294: // catch_target2
                        CatchBlockStart(arg_register=2);
                        tangon = _closure2_slot1;
                        zuuluu = michal;
                        michal = undefined;
                        michal = tangon.bind(michal)(zuuluu);
 313:
                        michal = undefined;
                        return michal;
 318:
                        return entity;
                    }
                };
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        michal = michal.bind(entity)();
        entity = new Array(3);
        entity[0] = golfie;
        entity[1] = oscard;
        entity[2] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useDeviceCodeAuthorizeCallback'] = michal;
    return entity;
})();
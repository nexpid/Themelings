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
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 721; continue _fun00001 }
 10:
                    echoed = argBar;
                    michal = argBaz;
                    oscard = undefined;
                    option = undefined;
                    romeon = undefined;
                    tangon = undefined;
                    offset = undefined;
                    result = undefined;
                    golfie = undefined;
                    kiloes = undefined;
                    verify = _closure1_slot0;
                    report = _closure1_slot2;
                    foxtra = 2;
                    report = report[foxtra];
                    backup = verify.bind(oscard)(report);
                    verify = backup.clientIdToActivateDevicePlatform;
                    report = argFoo;
                    report = verify.bind(backup)(report);
                    option = report;
                    verify = null;
                    if(!(verify != report)) { _fun00002_ip = 651; continue _fun00001 }
 81:
                    romeon = null;
 83: // try_start_0
                    backup = _closure1_slot1;
                    sequen = _closure1_slot2;
                    output = 3;
                    report = sequen[output];
                    source = backup.bind(oscard)(report);
                    update = source.authorize;
                    backup = option;
                    report = {};
                    vacuum = _closure1_slot0;
                    ctrled = 4;
                    ctrled = sequen[ctrled];
                    ctrled = vacuum.bind(oscard)(ctrled);
                    ctrled = ctrled.TwoWayLinkType;
                    ctrled = ctrled.DEVICE_CODE;
                    report['twoWayLinkType'] = ctrled;
                    ctrled = michal;
                    report['userCode'] = ctrled;
                    report = update.bind(source)(backup, report);
                    SaveGenerator(address=165);
 163:
                    return report;
 165:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(backup) { _fun00002_ip = 530; continue _fun00001 }
 174:
                    backup = report.body;
                    romeon = backup.url;
 184: // try_end0
                    result = null;
 186: // try_start_1
                    update = _closure1_slot1;
                    source = _closure1_slot2;
                    backup = 5;
                    ctrled = source[backup];
                    sequen = update.bind(oscard)(ctrled);
                    vacuum = romeon;
                    ctrled = verify != vacuum;
                    romeon = 'No URL in authorize response';
                    romeon = sequen.bind(oscard)(ctrled, romeon);
                    ctrled = _closure1_slot0;
                    romeon = 6;
                    romeon = source[romeon];
                    ctrled = ctrled.bind(oscard)(romeon);
                    romeon = ctrled.getCallbackParamsFromURL;
                    romeon = romeon.bind(ctrled)(vacuum);
                    romeon = romeon.state;
                    backup = source[backup];
                    source = update.bind(oscard)(backup);
                    update = verify != romeon;
                    backup = 'Authorize URL state query parameter must be present';
                    backup = source.bind(oscard)(update, backup);
                    result = romeon;
 285: // try_start_2 // try_end1
                    backup = _closure1_slot1;
                    romeon = _closure1_slot2;
                    romeon = romeon[output];
                    output = backup.bind(oscard)(romeon);
                    backup = output.callback;
                    romeon = option;
                    option = {};
                    option['code'] = echoed;
                    option['state'] = result;
                    option = backup.bind(output)(romeon, option);
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
                    sizing = option;
                    backup = _closure1_slot6;
                    romeon = michal;
                    output = verify == option;
                    option = undefined;
                    if(output) { _fun00002_ip = 386; continue _fun00001 }
 364:
                    sizing = sizing.body;
                    kiloes = sizing;
                    sizing = verify == sizing;
                    option = undefined;
                    if(sizing) { _fun00002_ip = 386; continue _fun00001 }
 381:
                    option = kiloes.code;
 386:
                    golfie = option;
                    kiloes = verify != option;
                    option = 0;
                    if(!kiloes) { _fun00002_ip = 401; continue _fun00001 }
 398:
                    option = golfie;
 401:
                    golfie = 'callback';
                    golfie = backup.bind(oscard)(romeon, option, golfie);
                    SaveGenerator(address=416);
 414:
                    return golfie;
 416:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 458; continue _fun00001 }
 422:
                    option = global;
                    backup = option.Error;
                    option = backup.prototype;
                    romeon = Object.create(option, {constructor: {value: backup}});
                    cntext = 'error during two way callback';
                    papara = romeon;
                    option = new papara[backup](cntext, record);
                    option = option instanceof Object ? option : romeon;
                    throw option;
 458:
                    return golfie;
 461: // catch_target1
                    CatchBlockStart(arg_register=6);
                    romeon = _closure1_slot6;
                    option = michal;
                    golfie = 'authorize';
                    golfie = romeon.bind(oscard)(option, foxtra, golfie);
                    SaveGenerator(address=485);
 483:
                    return golfie;
 485:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00002_ip = 527; continue _fun00001 }
 491:
                    option = global;
                    foxtra = option.Error;
                    option = foxtra.prototype;
                    romeon = Object.create(option, {constructor: {value: foxtra}});
                    cntext = 'error parsing callback params';
                    papara = romeon;
                    option = new papara[foxtra](cntext, record);
                    option = option instanceof Object ? option : romeon;
                    throw option;
 527:
                    return golfie;
 530:
                    return report;
 533: // catch_target0
                    CatchBlockStart(arg_register=4);
                    yankee = report;
                    option = _closure1_slot6;
                    golfie = michal;
                    romeon = verify == report;
                    report = undefined;
                    if(romeon) { _fun00002_ip = 576; continue _fun00001 }
 554:
                    yankee = yankee.body;
                    offset = yankee;
                    yankee = verify == yankee;
                    report = undefined;
                    if(yankee) { _fun00002_ip = 576; continue _fun00001 }
 571:
                    report = offset.code;
 576:
                    tangon = report;
                    verify = verify != report;
                    report = 0;
                    if(!verify) { _fun00002_ip = 591; continue _fun00001 }
 588:
                    report = tangon;
 591:
                    tangon = 'authorize';
                    tangon = option.bind(oscard)(golfie, report, tangon);
                    SaveGenerator(address=606);
 604:
                    return tangon;
 606:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 648; continue _fun00001 }
 612:
                    report = global;
                    option = report.Error;
                    report = option.prototype;
                    golfie = Object.create(report, {constructor: {value: option}});
                    cntext = 'error during two way authorize';
                    papara = golfie;
                    report = new papara[option](cntext, record);
                    report = report instanceof Object ? report : golfie;
                    throw report;
 648:
                    return tangon;
 651:
                    report = _closure1_slot6;
                    tangon = michal;
                    zuuluu = 1;
                    michal = 'authorize';
                    michal = report.bind(oscard)(tangon, zuuluu, michal);
                    SaveGenerator(address=676);
 674:
                    return michal;
 676:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 718; continue _fun00001 }
 682:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    cntext = 'Unsupported client_id for two way link';
                    papara = tangon;
                    zuuluu = new papara[report](cntext, record);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 718:
                    return michal;
 721:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
    entity = function() { // Original name: silentlyFinishTwoWayLinkError
        entity = undefined;
        tangon = _closure1_slot7;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
        _closure1_slot7 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot7 = entity;
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
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
                            tangon = _closure1_slot5;
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
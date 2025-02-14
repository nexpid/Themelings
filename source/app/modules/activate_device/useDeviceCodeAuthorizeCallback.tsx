// app/modules/activate_device/useDeviceCodeAuthorizeCallback.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _createTwoWayLink
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun107504: for(var _fun107504_ip = 0; ; ) switch(_fun107504_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun107504_ip = 726; continue _fun107504 }
 10:
                    result = argBar;
                    zulu = argBaz;
                    oscar = undefined;
                    options = undefined;
                    romeo = undefined;
                    tango = undefined;
                    offset = undefined;
                    output = undefined;
                    golf = undefined;
                    backup = undefined;
                    verify = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    report = 2;
                    report = foxtrot[report];
                    foxtrot = verify.bind(oscar)(report);
                    verify = foxtrot.clientIdToActivateDevicePlatform;
                    report = argFoo;
                    report = verify.bind(foxtrot)(report);
                    options = report;
                    verify = null;
                    if(!(verify != report)) { _fun107504_ip = 655; continue _fun107504 }
 81:
                    romeo = null;
 83: // try_start_0
                    foxtrot = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    sizing = 3;
                    report = vacuum[sizing];
                    update = foxtrot.bind(oscar)(report);
                    echo = update.authorize;
                    foxtrot = options;
                    report = {};
                    control = _closure1_slot0;
                    source = 4;
                    source = vacuum[source];
                    source = control.bind(oscar)(source);
                    source = source.TwoWayLinkType;
                    source = source.DEVICE_CODE;
                    report['twoWayLinkType'] = source;
                    source = zulu;
                    report['userCode'] = source;
                    report = echo.bind(update)(foxtrot, report);
                    SaveGenerator(address=165);
 163:
                    return report;
 165:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=12);
                    if(foxtrot) { _fun107504_ip = 534; continue _fun107504 }
 174:
                    foxtrot = report.body;
                    romeo = foxtrot.url;
 184: // try_end0
                    output = null;
 186: // try_start_1
                    echo = _closure1_slot1;
                    update = _closure1_slot2;
                    foxtrot = 5;
                    source = update[foxtrot];
                    vacuum = echo.bind(oscar)(source);
                    control = romeo;
                    source = verify != control;
                    romeo = 'No URL in authorize response';
                    romeo = vacuum.bind(oscar)(source, romeo);
                    source = _closure1_slot0;
                    romeo = 6;
                    romeo = update[romeo];
                    source = source.bind(oscar)(romeo);
                    romeo = source.getCallbackParamsFromURL;
                    romeo = romeo.bind(source)(control);
                    romeo = romeo.state;
                    foxtrot = update[foxtrot];
                    update = echo.bind(oscar)(foxtrot);
                    echo = verify != romeo;
                    foxtrot = 'Authorize URL state query parameter must be present';
                    foxtrot = update.bind(oscar)(echo, foxtrot);
                    output = romeo;
 285: // try_start_2 // try_end1
                    foxtrot = _closure1_slot1;
                    romeo = _closure1_slot2;
                    romeo = romeo[sizing];
                    sizing = foxtrot.bind(oscar)(romeo);
                    foxtrot = sizing.callback;
                    romeo = options;
                    options = {};
                    options['code'] = result;
                    options['state'] = output;
                    options = foxtrot.bind(sizing)(romeo, options);
                    SaveGenerator(address=331);
 329:
                    return options;
 331:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=11);
                    if(romeo) { _fun107504_ip = 340; continue _fun107504 }
 337: // try_end2
                    return oscar;
 340:
                    return options;
 343: // catch_target2
                    CatchBlockStart(arg_register=7);
                    kilo = options;
                    foxtrot = _closure1_slot8;
                    romeo = zulu;
                    sizing = verify == options;
                    options = undefined;
                    if(sizing) { _fun107504_ip = 386; continue _fun107504 }
 364:
                    kilo = kilo.body;
                    backup = kilo;
                    kilo = verify == kilo;
                    options = undefined;
                    if(kilo) { _fun107504_ip = 386; continue _fun107504 }
 381:
                    options = backup.code;
 386:
                    golf = options;
                    backup = verify != options;
                    options = 0;
                    if(!backup) { _fun107504_ip = 401; continue _fun107504 }
 398:
                    options = golf;
 401:
                    golf = 'callback';
                    golf = foxtrot.bind(oscar)(romeo, options, golf);
                    SaveGenerator(address=416);
 414:
                    return golf;
 416:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun107504_ip = 458; continue _fun107504 }
 422:
                    options = global;
                    foxtrot = options.Error;
                    options = foxtrot.prototype;
                    romeo = Object.create(options, {constructor: {value: foxtrot}});
                    record = 'error during two way callback';
                    context = romeo;
                    options = new context[foxtrot](record, config);
                    options = options instanceof Object ? options : romeo;
                    throw options;
 458:
                    return golf;
 461: // catch_target1
                    CatchBlockStart(arg_register=6);
                    foxtrot = _closure1_slot8;
                    romeo = zulu;
                    options = _closure1_slot6;
                    golf = 'authorize';
                    golf = foxtrot.bind(oscar)(romeo, options, golf);
                    SaveGenerator(address=489);
 487:
                    return golf;
 489:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun107504_ip = 531; continue _fun107504 }
 495:
                    options = global;
                    foxtrot = options.Error;
                    options = foxtrot.prototype;
                    romeo = Object.create(options, {constructor: {value: foxtrot}});
                    record = 'error parsing callback params';
                    context = romeo;
                    options = new context[foxtrot](record, config);
                    options = options instanceof Object ? options : romeo;
                    throw options;
 531:
                    return golf;
 534:
                    return report;
 537: // catch_target0
                    CatchBlockStart(arg_register=4);
                    yankee = report;
                    options = _closure1_slot8;
                    golf = zulu;
                    romeo = verify == report;
                    report = undefined;
                    if(romeo) { _fun107504_ip = 580; continue _fun107504 }
 558:
                    yankee = yankee.body;
                    offset = yankee;
                    yankee = verify == yankee;
                    report = undefined;
                    if(yankee) { _fun107504_ip = 580; continue _fun107504 }
 575:
                    report = offset.code;
 580:
                    tango = report;
                    verify = verify != report;
                    report = 0;
                    if(!verify) { _fun107504_ip = 595; continue _fun107504 }
 592:
                    report = tango;
 595:
                    tango = 'authorize';
                    tango = options.bind(oscar)(golf, report, tango);
                    SaveGenerator(address=610);
 608:
                    return tango;
 610:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun107504_ip = 652; continue _fun107504 }
 616:
                    report = global;
                    options = report.Error;
                    report = options.prototype;
                    golf = Object.create(report, {constructor: {value: options}});
                    record = 'error during two way authorize';
                    context = golf;
                    report = new context[options](record, config);
                    report = report instanceof Object ? report : golf;
                    throw report;
 652:
                    return tango;
 655:
                    report = _closure1_slot8;
                    tango = zulu;
                    zulu = _closure1_slot5;
                    mike = 'authorize';
                    mike = report.bind(oscar)(tango, zulu, mike);
                    SaveGenerator(address=681);
 679:
                    return mike;
 681:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun107504_ip = 723; continue _fun107504 }
 687:
                    zulu = global;
                    report = zulu.Error;
                    zulu = report.prototype;
                    tango = Object.create(zulu, {constructor: {value: report}});
                    record = 'Unsupported client_id for two way link';
                    context = tango;
                    zulu = new context[report](record, config);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 723:
                    return mike;
 726:
                    return entity;
                }
            };
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
    entity = function() { // Original name: silentlyFinishTwoWayLinkError
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot8 = entity;
    entity = function() { // Original name: _silentlyFinishTwoWayLinkError
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun107508: for(var _fun107508_ip = 0; ; ) switch(_fun107508_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=4);
                    if(report) { _fun107508_ip = 76; continue _fun107508 }
 7:
                    tango = argFoo;
                    zulu = argBar;
                    mike = argBaz;
 16: // try_start_0
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 7;
                    oscar = oscar[report];
                    report = undefined;
                    oscar = golf.bind(report)(oscar);
                    report = oscar.finishUserCodeTwoWayLinkError;
                    mike = report.bind(oscar)(tango, zulu, mike);
                    SaveGenerator(address=58);
 56:
                    return mike;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun107508_ip = 66; continue _fun107508 }
 64: // try_end0
                    _fun107508_ip = 71; continue _fun107508;
 66:
                    return mike;
 69: // catch_target0
                    CatchBlockStart(arg_register=1);
 71:
                    mike = undefined;
                    return mike;
 76:
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
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    golf = argCorge;
    golf = golf.bind(entity)(options);
    var _closure1_slot4 = golf;
    var _closure1_slot5 = tango;
    tango = 2;
    var _closure1_slot6 = tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activate_device/useDeviceCodeAuthorizeCallback.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: useDeviceCodeAuthorizeCallback
        golf = argFoo;
        oscar = argBar;
        report = argBaz;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        var _closure2_slot2 = report;
        tango = _closure1_slot4;
        zulu = tango.useCallback;
        mike = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo, argBar) {
                entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                    _fun107512: for(var _fun107512_ip = 0; ; ) switch(_fun107512_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun107512_ip = 318; continue _fun107512 }
 10:
                        mike = argFoo;
                        zulu = argBar;
                        if(zulu) { _fun107512_ip = 106; continue _fun107512 }
 19: // try_start_0
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        zulu = 7;
                        tango = tango[zulu];
                        zulu = undefined;
                        oscar = report.bind(zulu)(tango);
                        report = oscar.finishUserCode;
                        zulu = mike;
                        tango = zulu.userCode;
                        zulu = 'denied';
                        zulu = report.bind(oscar)(tango, zulu);
                        SaveGenerator(address=75);
 73:
                        return zulu;
 75:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun107512_ip = 83; continue _fun107512 }
 81: // try_end0
                        _fun107512_ip = 88; continue _fun107512;
 83:
                        return zulu;
 86: // catch_target0
                        CatchBlockStart(arg_register=2);
 88:
                        tango = _closure2_slot0;
                        zulu = undefined;
                        zulu = tango.bind(zulu)();
                        _fun107512_ip = 313; continue _fun107512;
 106:
                        zulu = mike;
                        tango = zulu.twoWayLinkCode;
                        zulu = null;
                        if(!(zulu != tango)) { _fun107512_ip = 214; continue _fun107512 }
 121: // try_start_1
                        zulu = mike;
                        golf = zulu.clientId;
                        report = zulu.twoWayLinkCode;
                        tango = zulu.userCode;
                        zulu = function() { // Original name: createTwoWayLink
                            entity = undefined;
                            tango = _closure1_slot7;
                            zulu = tango.apply;
                            entity = arguments;
                            mike = entity;
                            entity = this;
                            entity = zulu.bind(tango)(entity, mike);
                            return entity;
                        };
                        oscar = undefined;
                        zulu = zulu.bind(oscar)(golf, report, tango);
                        SaveGenerator(address=164);
 162:
                        return zulu;
 164:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun107512_ip = 190; continue _fun107512 }
 170:
                        report = _closure2_slot2;
                        tango = mike;
                        tango = report.bind(oscar)(tango);
 185: // try_end1
                        _fun107512_ip = 313; continue _fun107512;
 190:
                        return zulu;
 193: // catch_target1
                        CatchBlockStart(arg_register=2);
                        report = _closure2_slot1;
                        tango = mike;
                        zulu = undefined;
                        zulu = report.bind(zulu)(tango);
                        _fun107512_ip = 313; continue _fun107512;
 214: // try_start_2
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        zulu = 7;
                        zulu = report[zulu];
                        oscar = undefined;
                        golf = tango.bind(oscar)(zulu);
                        report = golf.finishUserCode;
                        zulu = mike;
                        tango = zulu.userCode;
                        zulu = 'granted';
                        zulu = report.bind(golf)(tango, zulu);
                        SaveGenerator(address=268);
 266:
                        return zulu;
 268:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(tango) { _fun107512_ip = 291; continue _fun107512 }
 274:
                        report = _closure2_slot2;
                        tango = mike;
                        tango = report.bind(oscar)(tango);
 289: // try_end2
                        _fun107512_ip = 313; continue _fun107512;
 291:
                        return zulu;
 294: // catch_target2
                        CatchBlockStart(arg_register=2);
                        tango = _closure2_slot1;
                        zulu = mike;
                        mike = undefined;
                        mike = tango.bind(mike)(zulu);
 313:
                        mike = undefined;
                        return mike;
 318:
                        return entity;
                    }
                };
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        entity = undefined;
        mike = mike.bind(entity)();
        entity = new Array(3);
        entity[0] = golf;
        entity[1] = oscar;
        entity[2] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useDeviceCodeAuthorizeCallback'] = mike;
    return entity;
})();
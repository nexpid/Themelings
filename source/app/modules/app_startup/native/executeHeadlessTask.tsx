// app/modules/app_startup/native/executeHeadlessTask.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscard;
    entity = function() { // Original name: _executeHeadlessTask
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    sizing = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 2297; continue _fun00001 }
 13:
                    backup = sizing;
                    romeon = argBar;
                    yankee = argBaz;
                    verify = undefined;
                    zuuluu = undefined;
                    oscard = undefined;
                    foxtra = undefined;
                    tangon = undefined;
                    offset = _closure1_slot1;
                    kiloes = _closure1_slot3;
                    michal = 5;
                    michal = kiloes[michal];
                    output = offset.bind(verify)(michal);
                    report = global;
                    michal = report.HermesInternal;
                    option = michal.concat;
                    michal = 'Task ';
                    target = option.bind(michal)(sizing);
                    option = output.prototype;
                    option = Object.create(option, {constructor: {value: output}});
                    status = option;
                    michal = new status[output](target, papara);
                    zuuluu = michal instanceof Object ? michal : option;
                    option = report.Date;
                    michal = option.now;
                    oscard = michal.bind(option)();
                    option = 6;
                    michal = kiloes[option];
                    result = offset.bind(verify)(michal);
                    output = result.addBreadcrumb;
                    michal = {};
                    echoed = 'Executing headless task.';
                    michal['message'] = echoed;
                    echoed = {};
                    echoed['name'] = sizing;
                    michal['data'] = echoed;
                    michal = output.bind(result)(michal);
                    output = _closure1_slot2;
                    michal = 7;
                    michal = kiloes[michal];
                    output = output.bind(verify)(michal);
                    michal = output.recordStartHeadlessTask;
                    michal = michal.bind(output)();
                    michal = 8;
                    michal = kiloes[michal];
                    offset = offset.bind(verify)(michal);
                    michal = offset.recordStartHeadlessTask;
                    michal = michal.bind(offset)(sizing);
                    offset = _closure1_slot0;
                    michal = 9;
                    michal = kiloes[michal];
                    offset = offset.bind(verify)(michal);
                    michal = offset.closeFastConnectSocket;
                    michal = michal.bind(offset)();
                    kiloes = false;
                    foxtra = false;
 238: // try_start_0
                    offset = _closure1_slot1;
                    michal = _closure1_slot3;
                    sizing = 10;
                    michal = michal[sizing];
                    michal = offset.bind(verify)(michal);
                    michal = michal.wasEverActive;
                    if(michal) { _fun00002_ip = 298; continue _fun00001 }
 267:
                    offset = _closure1_slot1;
                    michal = _closure1_slot3;
                    michal = michal[sizing];
                    michal = offset.bind(verify)(michal);
                    offset = michal.extraProperties;
                    michal = true;
                    offset['headless_task_ran'] = michal;
 298:
                    michal = _closure1_slot5;
                    offset = michal.currentState;
                    michal = 'active';
                    if(!(michal !== offset)) { _fun00002_ip = 368; continue _fun00001 }
 316:
                    sizing = zuuluu;
                    offset = sizing.log;
                    michal = 'Pausing socket in headless task because app state is not active';
                    michal = offset.bind(sizing)(michal);
                    offset = _closure1_slot2;
                    sizing = _closure1_slot3;
                    michal = 11;
                    michal = sizing[michal];
                    sizing = offset.bind(verify)(michal);
                    offset = sizing.setIsPaused;
                    michal = true;
                    michal = offset.bind(sizing)(michal);
 368:
                    offset = _closure1_slot1;
                    michal = _closure1_slot3;
                    sizing = 12;
                    michal = michal[sizing];
                    result = offset.bind(verify)(michal);
                    output = result.track;
                    michal = _closure1_slot9;
                    offset = michal.HEADLESS_TASK_INVOKED;
                    michal = {};
                    echoed = _closure1_slot5;
                    echoed = echoed.currentState;
                    michal['client_app_state'] = echoed;
                    echoed = backup;
                    michal['name'] = echoed;
                    michal = output.bind(result)(offset, michal);
                    michal = _closure1_slot7;
                    michal = michal.bind(verify)();
                    SaveGenerator(address=445);
 443:
                    return michal;
 445:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 1660; continue _fun00001 }
 454:
                    result = zuuluu;
                    output = result.log;
                    offset = 'initHeadlessTask completed';
                    offset = output.bind(result)(offset);
                    offset = _closure1_slot8;
                    offset = offset.promise;
                    SaveGenerator(address=487);
 485:
                    return offset;
 487:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=16);
                    if(output) { _fun00002_ip = 1339; continue _fun00001 }
 496:
                    echoed = zuuluu;
                    result = echoed.log;
                    output = 'Flux Initialized';
                    output = result.bind(echoed)(output);
                    result = _closure1_slot6;
                    output = result.isAuthenticated;
                    output = output.bind(result)();
                    if(output) { _fun00002_ip = 553; continue _fun00001 }
 532:
                    echoed = zuuluu;
                    result = echoed.log;
                    output = 'Analytics Init skipped; not authenticated';
                    output = result.bind(echoed)(output);
                    _fun00002_ip = 654; continue _fun00001;
 553:
                    result = _closure1_slot0;
                    echoed = _closure1_slot3;
                    output = 13;
                    output = echoed[output];
                    output = result.bind(verify)(output);
                    echoed = output.AnalyticsActionHandlers;
                    result = echoed.handleConnectionOpen;
                    output = {};
                    source = _closure1_slot6;
                    update = source.getAnalyticsToken;
                    update = update.bind(source)();
                    output['analyticsToken'] = update;
                    update = {};
                    ctrled = _closure1_slot6;
                    source = ctrled.getId;
                    source = source.bind(ctrled)();
                    update['id'] = source;
                    output['user'] = update;
                    output = result.bind(echoed)(output);
                    echoed = zuuluu;
                    result = echoed.log;
                    output = 'Analytics Initialized';
                    output = result.bind(echoed)(output);
 654:
                    romeon = romeon.bind(verify)();
                    yankee = romeon.bind(verify)(yankee);
                    SaveGenerator(address=667);
 665:
                    return yankee;
 667:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 1018; continue _fun00001 }
 676:
                    source = true;
                    foxtra = true;
                    result = zuuluu;
                    output = result.log;
                    romeon = 'Task completed successfully';
                    romeon = output.bind(result)(romeon);
 699: // try_end0
                    output = report.Date;
                    romeon = output.now;
                    output = romeon.bind(output)();
                    romeon = oscard;
                    romeon = output - romeon;
                    result = _closure1_slot1;
                    output = _closure1_slot3;
                    echoed = output[option];
                    sequen = result.bind(verify)(echoed);
                    update = sequen.addBreadcrumb;
                    echoed = {};
                    ctrled = 'Finished headless task.';
                    echoed['message'] = ctrled;
                    config = {};
                    vacuum = backup;
                    config['name'] = vacuum;
                    ctrled = foxtra;
                    config['success'] = ctrled;
                    record = 'ms';
                    record = romeon + record;
                    config['duration'] = record;
                    echoed['data'] = config;
                    echoed = update.bind(sequen)(echoed);
                    sequen = zuuluu;
                    update = sequen.log;
                    echoed = 'Unpausing socket';
                    echoed = update.bind(sequen)(echoed);
                    update = _closure1_slot2;
                    echoed = 11;
                    echoed = output[echoed];
                    update = update.bind(verify)(echoed);
                    echoed = update.setIsPaused;
                    echoed = echoed.bind(update)(kiloes);
                    output = output[sizing];
                    update = result.bind(verify)(output);
                    echoed = update.track;
                    output = _closure1_slot9;
                    result = output.HEADLESS_TASK_COMPLETED;
                    output = {};
                    sequen = _closure1_slot5;
                    sequen = sequen.currentState;
                    output['client_app_state'] = sequen;
                    output['name'] = vacuum;
                    output['success'] = ctrled;
                    output['duration_ms'] = romeon;
                    romeon = {};
                    romeon['flush'] = source;
                    tangon = echoed.bind(update)(result, output, romeon);
 909: // try_start_1
                    result = report.Promise;
                    output = result.race;
                    echoed = tangon;
                    romeon = new Array(2);
                    romeon[0] = echoed;
                    update = _closure1_slot0;
                    source = _closure1_slot3;
                    echoed = 14;
                    echoed = source[echoed];
                    source = update.bind(verify)(echoed);
                    update = source.timeoutPromise;
                    echoed = 1500;
                    echoed = update.bind(source)(echoed);
                    romeon[1] = echoed;
                    romeon = output.bind(result)(romeon);
                    SaveGenerator(address=982);
 980:
                    return romeon;
 982:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=16);
                    if(output) { _fun00002_ip = 990; continue _fun00001 }
 988: // try_end1
                    _fun00002_ip = 1015; continue _fun00001;
 990:
                    return romeon;
 993: // catch_target1
                    CatchBlockStart(arg_register=18);
                    result = zuuluu;
                    output = result.warn;
                    romeon = 'Failed to submit analytics';
                    romeon = output.bind(result)(romeon, echoed);
 1015:
                    return verify;
 1018:
                    output = report.Date;
                    romeon = output.now;
                    output = romeon.bind(output)();
                    romeon = oscard;
                    romeon = output - romeon;
                    result = _closure1_slot1;
                    output = _closure1_slot3;
                    echoed = output[option];
                    vacuum = result.bind(verify)(echoed);
                    update = vacuum.addBreadcrumb;
                    echoed = {};
                    source = 'Finished headless task.';
                    echoed['message'] = source;
                    sequen = {};
                    ctrled = backup;
                    sequen['name'] = ctrled;
                    source = foxtra;
                    sequen['success'] = source;
                    config = 'ms';
                    config = romeon + config;
                    sequen['duration'] = config;
                    echoed['data'] = sequen;
                    echoed = update.bind(vacuum)(echoed);
                    vacuum = zuuluu;
                    update = vacuum.log;
                    echoed = 'Unpausing socket';
                    echoed = update.bind(vacuum)(echoed);
                    update = _closure1_slot2;
                    echoed = 11;
                    echoed = output[echoed];
                    update = update.bind(verify)(echoed);
                    echoed = update.setIsPaused;
                    echoed = echoed.bind(update)(kiloes);
                    output = output[sizing];
                    update = result.bind(verify)(output);
                    echoed = update.track;
                    output = _closure1_slot9;
                    result = output.HEADLESS_TASK_COMPLETED;
                    output = {};
                    vacuum = _closure1_slot5;
                    vacuum = vacuum.currentState;
                    output['client_app_state'] = vacuum;
                    output['name'] = ctrled;
                    output['success'] = source;
                    output['duration_ms'] = romeon;
                    romeon = {};
                    source = true;
                    romeon['flush'] = source;
                    tangon = echoed.bind(update)(result, output, romeon);
 1230: // try_start_2
                    result = report.Promise;
                    output = result.race;
                    echoed = tangon;
                    romeon = new Array(2);
                    romeon[0] = echoed;
                    update = _closure1_slot0;
                    source = _closure1_slot3;
                    echoed = 14;
                    echoed = source[echoed];
                    source = update.bind(verify)(echoed);
                    update = source.timeoutPromise;
                    echoed = 1500;
                    echoed = update.bind(source)(echoed);
                    romeon[1] = echoed;
                    romeon = output.bind(result)(romeon);
                    SaveGenerator(address=1303);
 1301:
                    return romeon;
 1303:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=16);
                    if(output) { _fun00002_ip = 1311; continue _fun00001 }
 1309: // try_end2
                    _fun00002_ip = 1336; continue _fun00001;
 1311:
                    return romeon;
 1314: // catch_target2
                    CatchBlockStart(arg_register=18);
                    result = zuuluu;
                    output = result.warn;
                    romeon = 'Failed to submit analytics';
                    romeon = output.bind(result)(romeon, echoed);
 1336:
                    return yankee;
 1339:
                    romeon = report.Date;
                    yankee = romeon.now;
                    romeon = yankee.bind(romeon)();
                    yankee = oscard;
                    yankee = romeon - yankee;
                    output = _closure1_slot1;
                    romeon = _closure1_slot3;
                    result = romeon[option];
                    ctrled = output.bind(verify)(result);
                    echoed = ctrled.addBreadcrumb;
                    result = {};
                    update = 'Finished headless task.';
                    result['message'] = update;
                    vacuum = {};
                    source = backup;
                    vacuum['name'] = source;
                    update = foxtra;
                    vacuum['success'] = update;
                    sequen = 'ms';
                    sequen = yankee + sequen;
                    vacuum['duration'] = sequen;
                    result['data'] = vacuum;
                    result = echoed.bind(ctrled)(result);
                    ctrled = zuuluu;
                    echoed = ctrled.log;
                    result = 'Unpausing socket';
                    result = echoed.bind(ctrled)(result);
                    echoed = _closure1_slot2;
                    result = 11;
                    result = romeon[result];
                    echoed = echoed.bind(verify)(result);
                    result = echoed.setIsPaused;
                    result = result.bind(echoed)(kiloes);
                    romeon = romeon[sizing];
                    echoed = output.bind(verify)(romeon);
                    result = echoed.track;
                    romeon = _closure1_slot9;
                    output = romeon.HEADLESS_TASK_COMPLETED;
                    romeon = {};
                    ctrled = _closure1_slot5;
                    ctrled = ctrled.currentState;
                    romeon['client_app_state'] = ctrled;
                    romeon['name'] = source;
                    romeon['success'] = update;
                    romeon['duration_ms'] = yankee;
                    yankee = {};
                    update = true;
                    yankee['flush'] = update;
                    tangon = result.bind(echoed)(output, romeon, yankee);
 1551: // try_start_3
                    output = report.Promise;
                    romeon = output.race;
                    result = tangon;
                    yankee = new Array(2);
                    yankee[0] = result;
                    echoed = _closure1_slot0;
                    update = _closure1_slot3;
                    result = 14;
                    result = update[result];
                    update = echoed.bind(verify)(result);
                    echoed = update.timeoutPromise;
                    result = 1500;
                    result = echoed.bind(update)(result);
                    yankee[1] = result;
                    yankee = romeon.bind(output)(yankee);
                    SaveGenerator(address=1624);
 1622:
                    return yankee;
 1624:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                    if(romeon) { _fun00002_ip = 1632; continue _fun00001 }
 1630: // try_end3
                    _fun00002_ip = 1657; continue _fun00001;
 1632:
                    return yankee;
 1635: // catch_target3
                    CatchBlockStart(arg_register=17);
                    output = zuuluu;
                    romeon = output.warn;
                    yankee = 'Failed to submit analytics';
                    yankee = romeon.bind(output)(yankee, result);
 1657:
                    return offset;
 1660:
                    yankee = report.Date;
                    offset = yankee.now;
                    yankee = offset.bind(yankee)();
                    offset = oscard;
                    offset = yankee - offset;
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot3;
                    output = yankee[option];
                    source = romeon.bind(verify)(output);
                    update = source.addBreadcrumb;
                    output = {};
                    result = 'Finished headless task.';
                    output['message'] = result;
                    ctrled = {};
                    echoed = backup;
                    ctrled['name'] = echoed;
                    result = foxtra;
                    ctrled['success'] = result;
                    vacuum = 'ms';
                    vacuum = offset + vacuum;
                    ctrled['duration'] = vacuum;
                    output['data'] = ctrled;
                    output = update.bind(source)(output);
                    source = zuuluu;
                    update = source.log;
                    output = 'Unpausing socket';
                    output = update.bind(source)(output);
                    update = _closure1_slot2;
                    output = 11;
                    output = yankee[output];
                    update = update.bind(verify)(output);
                    output = update.setIsPaused;
                    output = output.bind(update)(kiloes);
                    yankee = yankee[sizing];
                    output = romeon.bind(verify)(yankee);
                    sizing = output.track;
                    yankee = _closure1_slot9;
                    romeon = yankee.HEADLESS_TASK_COMPLETED;
                    yankee = {};
                    update = _closure1_slot5;
                    update = update.currentState;
                    yankee['client_app_state'] = update;
                    yankee['name'] = echoed;
                    yankee['success'] = result;
                    yankee['duration_ms'] = offset;
                    offset = {};
                    result = true;
                    offset['flush'] = result;
                    tangon = sizing.bind(output)(romeon, yankee, offset);
 1872: // try_start_4
                    romeon = report.Promise;
                    yankee = romeon.race;
                    sizing = tangon;
                    offset = new Array(2);
                    offset[0] = sizing;
                    output = _closure1_slot0;
                    result = _closure1_slot3;
                    sizing = 14;
                    sizing = result[sizing];
                    result = output.bind(verify)(sizing);
                    output = result.timeoutPromise;
                    sizing = 1500;
                    sizing = output.bind(result)(sizing);
                    offset[1] = sizing;
                    offset = yankee.bind(romeon)(offset);
                    SaveGenerator(address=1945);
 1943:
                    return offset;
 1945:
                    ResumeGenerator(result_out_reg=9, return_bool_out_reg=10);
                    if(yankee) { _fun00002_ip = 1953; continue _fun00001 }
 1951: // try_end4
                    _fun00002_ip = 1978; continue _fun00001;
 1953:
                    return offset;
 1956: // catch_target4
                    CatchBlockStart(arg_register=15);
                    romeon = zuuluu;
                    yankee = romeon.warn;
                    offset = 'Failed to submit analytics';
                    offset = yankee.bind(romeon)(offset, sizing);
 1978:
                    return michal;
 1981: // catch_target0
                    CatchBlockStart(arg_register=1);
                    yankee = report.Date;
                    offset = yankee.now;
                    offset = offset.bind(yankee)();
                    oscard = offset - oscard;
                    offset = _closure1_slot1;
                    yankee = _closure1_slot3;
                    option = yankee[option];
                    sizing = offset.bind(verify)(option);
                    romeon = sizing.addBreadcrumb;
                    option = {};
                    output = 'Finished headless task.';
                    option['message'] = output;
                    output = {};
                    output['name'] = backup;
                    output['success'] = foxtra;
                    result = 'ms';
                    result = oscard + result;
                    output['duration'] = result;
                    option['data'] = output;
                    option = romeon.bind(sizing)(option);
                    sizing = zuuluu;
                    romeon = sizing.log;
                    option = 'Unpausing socket';
                    option = romeon.bind(sizing)(option);
                    romeon = _closure1_slot2;
                    option = 11;
                    option = yankee[option];
                    romeon = romeon.bind(verify)(option);
                    option = romeon.setIsPaused;
                    option = option.bind(romeon)(kiloes);
                    option = 12;
                    option = yankee[option];
                    romeon = offset.bind(verify)(option);
                    yankee = romeon.track;
                    option = _closure1_slot9;
                    offset = option.HEADLESS_TASK_COMPLETED;
                    option = {};
                    kiloes = _closure1_slot5;
                    kiloes = kiloes.currentState;
                    option['client_app_state'] = kiloes;
                    option['name'] = backup;
                    option['success'] = foxtra;
                    option['duration_ms'] = oscard;
                    oscard = {};
                    foxtra = true;
                    oscard['flush'] = foxtra;
                    tangon = yankee.bind(romeon)(offset, option, oscard);
 2189: // try_start_5
                    oscard = report.Promise;
                    report = oscard.race;
                    option = tangon;
                    tangon = new Array(2);
                    tangon[0] = option;
                    option = _closure1_slot0;
                    offset = _closure1_slot3;
                    golfie = 14;
                    golfie = offset[golfie];
                    verify = option.bind(verify)(golfie);
                    option = verify.timeoutPromise;
                    golfie = 1500;
                    golfie = option.bind(verify)(golfie);
                    tangon[1] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=2262);
 2260:
                    return tangon;
 2262:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 2270; continue _fun00001 }
 2268: // try_end5
                    _fun00002_ip = 2295; continue _fun00001;
 2270:
                    return tangon;
 2273: // catch_target5
                    CatchBlockStart(arg_register=5);
                    report = zuuluu;
                    tangon = report.warn;
                    zuuluu = 'Failed to submit analytics';
                    zuuluu = tangon.bind(report)(zuuluu, oscard);
 2295:
                    throw michal;
 2297:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AppState;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.initHeadlessTask;
    var _closure1_slot7 = golfie;
    tangon = tangon.applicationReady;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot9 = tangon;
    tangon = 15;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_startup/native/executeHeadlessTask.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: executeHeadlessTask
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();
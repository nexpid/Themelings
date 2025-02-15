// app/modules/threads/ThreadCreationHooks.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = verify;
    report = function(argFoo, argBar) { // Original name: getIsPrivate
        _fun71410: for(var _fun71410_ip = 0; ; ) switch(_fun71410_ip) {
 0:
            entity = _closure1_slot18;
            mike = entity.PrivateOnly;
            entity = argBar;
            entity = entity === mike;
            if(entity) { _fun71410_ip = 47; continue _fun71410 }
 23:
            mike = argFoo;
            zulu = mike.isPrivate;
            mike = null;
            mike = mike != zulu;
            if(!mike) { _fun71410_ip = 44; continue _fun71410 }
 41:
            mike = zulu;
 44:
            entity = mike;
 47:
            return entity;
        }
    };
    var _closure1_slot19 = report;
    entity = function(argFoo, argBar) { // Original name: trimToLength
        _fun71411: for(var _fun71411_ip = 0; ; ) switch(_fun71411_ip) {
 0:
            report = argFoo;
            tango = argBar;
            mike = report.length;
            entity = report;
            if(!(mike > tango)) { _fun71411_ip = 42; continue _fun71411 }
 18:
            zulu = report.substring;
            mike = 0;
            zulu = zulu.bind(report)(mike, tango);
            mike = '...';
            entity = zulu + mike;
 42:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    tango = function(argFoo, argBar) { // Original name: getDefaultThreadName
        _fun71412: for(var _fun71412_ip = 0; ; ) switch(_fun71412_ip) {
 0:
            mike = argFoo;
            report = argBar;
            options = null;
            entity = options == report;
            oscar = null;
            if(entity) { _fun71412_ip = 41; continue _fun71412 }
 17:
            tango = _closure1_slot9;
            zulu = tango.getMessage;
            entity = mike.id;
            oscar = zulu.bind(tango)(entity, report);
 41:
            zulu = options == oscar;
            tango = undefined;
            entity = undefined;
            if(zulu) { _fun71412_ip = 88; continue _fun71412 }
 52:
            report = oscar.embeds;
            zulu = options == report;
            entity = undefined;
            if(zulu) { _fun71412_ip = 88; continue _fun71412 }
 67:
            zulu = 0;
            zulu = report[zulu];
            report = options == zulu;
            entity = undefined;
            if(report) { _fun71412_ip = 88; continue _fun71412 }
 82:
            entity = zulu.rawTitle;
 88:
            report = options != entity;
            offset = '';
            zulu = offset;
            if(!report) { _fun71412_ip = 105; continue _fun71412 }
 102:
            zulu = entity;
 105:
            report = options == oscar;
            entity = undefined;
            if(report) { _fun71412_ip = 149; continue _fun71412 }
 114:
            report = oscar.poll;
            golf = options == report;
            entity = undefined;
            if(golf) { _fun71412_ip = 149; continue _fun71412 }
 129:
            report = report.question;
            golf = options == report;
            entity = undefined;
            if(golf) { _fun71412_ip = 149; continue _fun71412 }
 144:
            entity = report.text;
 149:
            golf = options != entity;
            report = offset;
            if(!golf) { _fun71412_ip = 162; continue _fun71412 }
 159:
            report = entity;
 162:
            if(!(offset === zulu)) { _fun71412_ip = 537; continue _fun71412 }
 169:
            if(!(offset === report)) { _fun71412_ip = 519; continue _fun71412 }
 176:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golf = 11;
            golf = yankee[golf];
            yankee = verify.bind(tango)(golf);
            golf = yankee.unparse;
            romeo = options == oscar;
            verify = undefined;
            if(romeo) { _fun71412_ip = 219; continue _fun71412 }
 214:
            verify = oscar.content;
 219:
            romeo = options != verify;
            oscar = offset;
            if(!romeo) { _fun71412_ip = 232; continue _fun71412 }
 229:
            oscar = verify;
 232:
            mike = mike.id;
            verify = true;
            yankee = golf.bind(yankee)(oscar, mike, verify);
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            mike = 12;
            mike = golf[mike];
            golf = oscar.bind(tango)(mike);
            oscar = yankee.split;
            mike = '\n';
            oscar = oscar.bind(yankee)(mike);
            mike = 0;
            oscar = oscar[mike];
            verify = golf.bind(tango)(oscar, verify);
            golf = verify.replace;
            oscar = /^[ #-]+/;
            oscar = golf.bind(verify)(oscar, offset);
            offset = new Array(0);
 321:
            verify = oscar.match;
            golf = /(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,.\/])+/;
            verify = verify.bind(oscar)(golf);
            golf = oscar;
            if(!(options != verify)) { _fun71412_ip = 434; continue _fun71412 }
 353:
            yankee = verify.index;
            if(!(options != yankee)) { _fun71412_ip = 434; continue _fun71412 }
 362:
            romeo = offset.push;
            foxtrot = golf.substring;
            yankee = verify.index;
            yankee = foxtrot.bind(golf)(mike, yankee);
            yankee = romeo.bind(offset)(yankee);
            romeo = offset.push;
            yankee = verify[mike];
            yankee = romeo.bind(offset)(yankee);
            yankee = golf.substring;
            romeo = verify.index;
            verify = verify[mike];
            verify = verify.length;
            verify = romeo + verify;
            oscar = yankee.bind(golf)(verify);
            _fun71412_ip = 321; continue _fun71412;
 434:
            oscar = offset.push;
            oscar = oscar.bind(offset)(golf);
            options = offset[mike];
            oscar = offset.length;
            verify = 1;
            golf = verify < oscar;
            oscar = 40;
            mike = options;
            if(!golf) { _fun71412_ip = 507; continue _fun71412 }
 469:
            golf = offset[verify];
            yankee = options + golf;
            golf = yankee.length;
            mike = options;
            if(!(!(golf > oscar))) { _fun71412_ip = 507; continue _fun71412 }
 489:
            verify = verify + 1;
            golf = offset.length;
            options = yankee;
            mike = options;
            if(verify < golf) { _fun71412_ip = 469; continue _fun71412 }
 507:
            entity = _closure1_slot20;
            entity = entity.bind(tango)(mike, oscar);
            return entity;
 519:
            mike = _closure1_slot20;
            entity = 80;
            entity = mike.bind(tango)(report, entity);
            return entity;
 537:
            mike = _closure1_slot20;
            entity = 40;
            entity = mike.bind(tango)(zulu, entity);
            return entity;
        }
    };
    var _closure1_slot21 = tango;
    entity = function() { // Original name: createThread_
        entity = undefined;
        tango = _closure1_slot23;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _createThread_
        report = undefined;
        entity = undefined;
        tango = _closure1_slot4;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun71416: for(var _fun71416_ip = 0; ; ) switch(_fun71416_ip) {
 0:
                    StartGenerator();
                    output = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscar) { _fun71416_ip = 1565; continue _fun71416 }
 15:
                    yankee = output;
                    report = argBar;
                    oscar = undefined;
                    echo = undefined;
                    var _closure4_slot0 = oscar;
                    options = undefined;
                    verify = undefined;
                    foxtrot = undefined;
                    romeo = undefined;
                    sizing = undefined;
                    kilo = undefined;
                    golf = undefined;
                    offset = undefined;
                    zulu = undefined;
                    backup = output.isForumLikeChannel;
                    options = backup.bind(output)();
 57: // try_start_0
                    report = report.bind(oscar)();
                    SaveGenerator(address=65);
 63:
                    return report;
 65:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(backup) { _fun71416_ip = 361; continue _fun71416 }
 74:
                    echo = report;
                    _closure4_slot0 = report;
                    output = report.body;
                    backup = null;
                    if(!(backup != output)) { _fun71416_ip = 217; continue _fun71416 }
 95:
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    backup = 24;
                    update = result[backup];
                    control = output.bind(oscar)(update);
                    source = control.dispatch;
                    update = {};
                    sequence = 'SLOWMODE_RESET_COOLDOWN';
                    update['type'] = sequence;
                    vacuum = _closure1_slot10;
                    vacuum = vacuum.CreateThread;
                    update['slowmodeType'] = vacuum;
                    vacuum = yankee;
                    vacuum = vacuum.id;
                    update['channelId'] = vacuum;
                    update = source.bind(control)(update);
                    backup = result[backup];
                    result = output.bind(oscar)(backup);
                    output = result.dispatch;
                    backup = {};
                    update = 'THREAD_CREATE_LOCAL';
                    backup['type'] = update;
                    echo = echo.body;
                    echo = echo.id;
                    backup['channelId'] = echo;
                    backup = output.bind(result)(backup);
                    _fun71416_ip = 356; continue _fun71416;
 217:
                    output = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    backup = 23;
                    backup = vacuum[backup];
                    result = output.bind(oscar)(backup);
                    output = result.show;
                    backup = {};
                    control = _closure1_slot0;
                    echo = 13;
                    update = vacuum[echo];
                    update = control.bind(oscar)(update);
                    sequence = update.intl;
                    source = sequence.string;
                    update = vacuum[echo];
                    update = control.bind(oscar)(update);
                    update = update.t;
                    update = update.j2d6Ki;
                    update = source.bind(sequence)(update);
                    backup['title'] = update;
                    update = vacuum[echo];
                    update = control.bind(oscar)(update);
                    source = update.intl;
                    update = source.string;
                    echo = vacuum[echo];
                    echo = control.bind(oscar)(echo);
                    echo = echo.t;
                    echo = echo.fEptJC;
                    echo = update.bind(source)(echo);
                    backup['body'] = echo;
                    backup = output.bind(result)(backup);
 356: // try_end0
                    _fun71416_ip = 1437; continue _fun71416;
 361:
                    return report;
 364: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tango = report;
                    var _closure4_slot1 = report;
                    backup = report.body;
                    verify = backup;
                    report = null;
                    backup = report == backup;
                    output = undefined;
                    if(backup) { _fun71416_ip = 397; continue _fun71416 }
 392:
                    output = verify.code;
 397:
                    backup = _closure1_slot13;
                    backup = backup.TOO_MANY_THREADS;
                    if(!(output !== backup)) { _fun71416_ip = 1254; continue _fun71416 }
 417:
                    backup = tango;
                    backup = backup.body;
                    foxtrot = backup;
                    output = report == backup;
                    backup = undefined;
                    if(output) { _fun71416_ip = 442; continue _fun71416 }
 437:
                    backup = foxtrot.code;
 442:
                    foxtrot = _closure1_slot13;
                    foxtrot = foxtrot.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(backup !== foxtrot)) { _fun71416_ip = 1113; continue _fun71416 }
 459:
                    foxtrot = tango;
                    foxtrot = foxtrot.body;
                    romeo = foxtrot;
                    backup = report == foxtrot;
                    foxtrot = undefined;
                    if(backup) { _fun71416_ip = 484; continue _fun71416 }
 479:
                    foxtrot = romeo.code;
 484:
                    romeo = _closure1_slot13;
                    romeo = romeo.SLOWMODE_RATE_LIMITED;
                    if(!(foxtrot !== romeo)) { _fun71416_ip = 968; continue _fun71416 }
 501:
                    romeo = tango;
                    foxtrot = romeo.status;
                    romeo = 429;
                    if(!(romeo !== foxtrot)) { _fun71416_ip = 796; continue _fun71416 }
 522:
                    backup = _closure1_slot11;
                    foxtrot = backup.has;
                    romeo = tango;
                    romeo = romeo.body;
                    sizing = romeo;
                    output = report == romeo;
                    romeo = undefined;
                    if(output) { _fun71416_ip = 556; continue _fun71416 }
 551:
                    romeo = sizing.code;
 556:
                    romeo = foxtrot.bind(backup)(romeo);
                    if(romeo) { _fun71416_ip = 791; continue _fun71416 }
 567:
                    backup = _closure1_slot12;
                    foxtrot = backup.has;
                    romeo = tango;
                    romeo = romeo.body;
                    kilo = romeo;
                    sizing = report == romeo;
                    romeo = undefined;
                    if(sizing) { _fun71416_ip = 601; continue _fun71416 }
 596:
                    romeo = kilo.code;
 601:
                    romeo = foxtrot.bind(backup)(romeo);
                    if(romeo) { _fun71416_ip = 753; continue _fun71416 }
 612:
                    foxtrot = _closure1_slot1;
                    echo = _closure1_slot2;
                    romeo = 23;
                    romeo = echo[romeo];
                    backup = foxtrot.bind(oscar)(romeo);
                    foxtrot = backup.show;
                    romeo = {};
                    result = _closure1_slot0;
                    kilo = 13;
                    sizing = echo[kilo];
                    sizing = result.bind(oscar)(sizing);
                    update = sizing.intl;
                    output = update.string;
                    sizing = echo[kilo];
                    sizing = result.bind(oscar)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.j2d6Ki;
                    sizing = output.bind(update)(sizing);
                    romeo['title'] = sizing;
                    sizing = echo[kilo];
                    sizing = result.bind(oscar)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kilo = echo[kilo];
                    kilo = result.bind(oscar)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.fEptJC;
                    kilo = sizing.bind(output)(kilo);
                    romeo['body'] = kilo;
                    romeo = foxtrot.bind(backup)(romeo);
                    _fun71416_ip = 1437; continue _fun71416;
 753:
                    romeo = global;
                    backup = romeo.Promise;
                    romeo = backup.prototype;
                    foxtrot = Object.create(romeo, {constructor: {value: backup}});
                    config = function(argFoo, argBar) {
                        _fun71417: for(var _fun71417_ip = 0; ; ) switch(_fun71417_ip) {
 0:
                            zulu = argBar;
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            var _closure5_slot1 = zulu;
                            mike = _closure4_slot1;
                            tango = mike.body;
                            mike = null;
                            if(!(mike == tango)) { _fun71417_ip = 40; continue _fun71417 }
 34:
                            mike = undefined;
                            mike = zulu.bind(mike)();
 40:
                            zulu = _closure1_slot6;
                            mike = zulu.addConditionalChangeListener;
                            entity = function() {
                                _fun71418: for(var _fun71418_ip = 0; ; ) switch(_fun71418_ip) {
 0:
                                    tango = _closure1_slot6;
                                    zulu = tango.getAndDeleteMostRecentUserCreatedThreadId;
                                    report = zulu.bind(tango)();
                                    zulu = null;
                                    if(!(zulu == report)) { _fun71418_ip = 31; continue _fun71418 }
 27:
                                    zulu = undefined;
                                    return zulu;
 31:
                                    tango = _closure1_slot7;
                                    zulu = tango.getChannel;
                                    zulu = zulu.bind(tango)(report);
                                    var _closure6_slot0 = zulu;
                                    tango = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    mike = 24;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    zulu = tango.bind(mike)(zulu);
                                    mike = zulu.wait;
                                    entity = function() {
                                        _fun71419: for(var _fun71419_ip = 0; ; ) switch(_fun71419_ip) {
 0:
                                            zulu = _closure6_slot0;
                                            mike = null;
                                            if(!(mike != zulu)) { _fun71419_ip = 33; continue _fun71419 }
 13:
                                            zulu = _closure5_slot0;
                                            mike = _closure6_slot0;
                                            entity = undefined;
                                            entity = zulu.bind(entity)(mike);
                                            _fun71419_ip = 46; continue _fun71419;
 33:
                                            mike = _closure5_slot1;
                                            entity = undefined;
                                            entity = mike.bind(entity)();
 46:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    entity = false;
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    record = foxtrot;
                    romeo = new record[backup](config, sequence);
                    romeo = romeo instanceof Object ? romeo : foxtrot;
                    return romeo;
 791:
                    romeo = tango;
                    throw romeo;
 796:
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    romeo = 23;
                    romeo = backup[romeo];
                    backup = foxtrot.bind(oscar)(romeo);
                    foxtrot = backup.show;
                    romeo = {};
                    kilo = options;
                    update = _closure1_slot0;
                    sizing = _closure1_slot2;
                    echo = 13;
                    output = sizing[echo];
                    output = update.bind(oscar)(output);
                    result = output.intl;
                    output = result.string;
                    sizing = sizing[echo];
                    sizing = update.bind(oscar)(sizing);
                    sizing = sizing.t;
                    if(kilo) { _fun71416_ip = 887; continue _fun71416 }
 874:
                    kilo = sizing.1KEdvL;
                    kilo = output.bind(result)(kilo);
                    _fun71416_ip = 898; continue _fun71416;
 887:
                    sizing = sizing.vWNFk5;
                    kilo = output.bind(result)(sizing);
 898:
                    romeo['title'] = kilo;
                    result = _closure1_slot0;
                    kilo = _closure1_slot2;
                    sizing = kilo[echo];
                    sizing = result.bind(oscar)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kilo = kilo[echo];
                    kilo = result.bind(oscar)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.Whhv4+;
                    kilo = sizing.bind(output)(kilo);
                    romeo['body'] = kilo;
                    romeo = foxtrot.bind(backup)(romeo);
                    _fun71416_ip = 1437; continue _fun71416;
 968:
                    tango = tango.body;
                    tango = tango.retry_after;
                    golf = tango;
                    romeo = report != tango;
                    report = 0;
                    tango = 0;
                    if(!romeo) { _fun71416_ip = 996; continue _fun71416 }
 993:
                    tango = golf;
 996:
                    offset = tango;
                    if(!(tango > report)) { _fun71416_ip = 1437; continue _fun71416 }
 1006:
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    tango = 24;
                    tango = foxtrot[tango];
                    golf = romeo.bind(oscar)(tango);
                    report = golf.dispatch;
                    tango = {};
                    backup = 'SLOWMODE_SET_COOLDOWN';
                    tango['type'] = backup;
                    yankee = yankee.id;
                    tango['channelId'] = yankee;
                    yankee = _closure1_slot10;
                    yankee = yankee.CreateThread;
                    tango['slowmodeType'] = yankee;
                    yankee = offset;
                    offset = 25;
                    offset = foxtrot[offset];
                    offset = romeo.bind(oscar)(offset);
                    offset = offset.Millis;
                    offset = offset.SECOND;
                    offset = yankee * offset;
                    tango['cooldownMs'] = offset;
                    tango = report.bind(golf)(tango);
                    _fun71416_ip = 1437; continue _fun71416;
 1113:
                    report = _closure1_slot1;
                    backup = _closure1_slot2;
                    tango = 23;
                    tango = backup[tango];
                    golf = report.bind(oscar)(tango);
                    report = golf.show;
                    tango = {};
                    foxtrot = _closure1_slot0;
                    offset = 13;
                    yankee = backup[offset];
                    yankee = foxtrot.bind(oscar)(yankee);
                    kilo = yankee.intl;
                    romeo = kilo.string;
                    yankee = backup[offset];
                    yankee = foxtrot.bind(oscar)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.1KEdvL;
                    yankee = romeo.bind(kilo)(yankee);
                    tango['title'] = yankee;
                    yankee = backup[offset];
                    yankee = foxtrot.bind(oscar)(yankee);
                    romeo = yankee.intl;
                    yankee = romeo.string;
                    offset = backup[offset];
                    offset = foxtrot.bind(oscar)(offset);
                    offset = offset.t;
                    offset = offset.jDMxz8;
                    offset = yankee.bind(romeo)(offset);
                    tango['body'] = offset;
                    tango = report.bind(golf)(tango);
                    _fun71416_ip = 1437; continue _fun71416;
 1254:
                    report = _closure1_slot1;
                    golf = _closure1_slot2;
                    tango = 23;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = golf.show;
                    tango = {};
                    offset = options;
                    kilo = _closure1_slot0;
                    yankee = _closure1_slot2;
                    foxtrot = 13;
                    romeo = yankee[foxtrot];
                    romeo = kilo.bind(oscar)(romeo);
                    backup = romeo.intl;
                    romeo = backup.string;
                    yankee = yankee[foxtrot];
                    yankee = kilo.bind(oscar)(yankee);
                    yankee = yankee.t;
                    if(offset) { _fun71416_ip = 1345; continue _fun71416 }
 1332:
                    offset = yankee.1KEdvL;
                    offset = romeo.bind(backup)(offset);
                    _fun71416_ip = 1356; continue _fun71416;
 1345:
                    yankee = yankee.vWNFk5;
                    offset = romeo.bind(backup)(yankee);
 1356:
                    tango['title'] = offset;
                    romeo = _closure1_slot0;
                    verify = _closure1_slot2;
                    offset = verify[foxtrot];
                    offset = romeo.bind(oscar)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = verify[foxtrot];
                    verify = romeo.bind(oscar)(verify);
                    verify = verify.t;
                    if(options) { _fun71416_ip = 1417; continue _fun71416 }
 1404:
                    options = verify.P0wT5e;
                    options = offset.bind(yankee)(options);
                    _fun71416_ip = 1428; continue _fun71416;
 1417:
                    verify = verify.KGaiEB;
                    options = offset.bind(yankee)(verify);
 1428:
                    tango['body'] = options;
                    tango = report.bind(golf)(tango);
 1437:
                    tango = global;
                    report = tango.Promise;
                    tango = report.prototype;
                    tango = Object.create(tango, {constructor: {value: report}});
                    config = function(argFoo, argBar) {
                        _fun71420: for(var _fun71420_ip = 0; ; ) switch(_fun71420_ip) {
 0:
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = _closure4_slot0;
                            zulu = mike.body;
                            mike = null;
                            if(!(mike == zulu)) { _fun71420_ip = 36; continue _fun71420 }
 27:
                            zulu = argBar;
                            mike = undefined;
                            mike = zulu.bind(mike)();
 36:
                            zulu = _closure1_slot7;
                            mike = zulu.addConditionalChangeListener;
                            entity = function() {
                                _fun71421: for(var _fun71421_ip = 0; ; ) switch(_fun71421_ip) {
 0:
                                    report = _closure1_slot7;
                                    tango = report.getChannel;
                                    zulu = _closure4_slot0;
                                    zulu = zulu.body;
                                    zulu = zulu.id;
                                    tango = tango.bind(report)(zulu);
                                    var _closure6_slot0 = tango;
                                    zulu = null;
                                    if(!(zulu == tango)) { _fun71421_ip = 50; continue _fun71421 }
 46:
                                    zulu = undefined;
                                    return zulu;
 50:
                                    tango = _closure1_slot1;
                                    zulu = _closure1_slot2;
                                    mike = 24;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    zulu = tango.bind(mike)(zulu);
                                    mike = zulu.wait;
                                    entity = function() {
                                        zulu = _closure5_slot0;
                                        mike = _closure6_slot0;
                                        entity = undefined;
                                        mike = zulu.bind(entity)(mike);
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    entity = false;
                                    return entity;
                                }
                            };
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    record = tango;
                    mike = new record[report](config, sequence);
                    mike = mike instanceof Object ? mike : tango;
                    SaveGenerator(address=1476);
 1474:
                    return mike;
 1476:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun71416_ip = 1562; continue _fun71416 }
 1482:
                    zulu = mike;
 1485: // try_start_1
                    report = _closure1_slot1;
                    options = _closure1_slot2;
                    tango = 22;
                    tango = options[tango];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.fetchMessages;
                    tango = {};
                    options = zulu;
                    options = options.id;
                    tango['channelId'] = options;
                    golf = _closure1_slot16;
                    tango['limit'] = golf;
                    tango = report.bind(oscar)(tango);
                    SaveGenerator(address=1546);
 1544:
                    return tango;
 1546:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun71416_ip = 1554; continue _fun71416 }
 1552: // try_end1
                    _fun71416_ip = 1559; continue _fun71416;
 1554:
                    return tango;
 1557: // catch_target1
                    CatchBlockStart(arg_register=3);
 1559:
                    return zulu;
 1562:
                    return mike;
 1565:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot23 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    romeo = 1;
    oscar = verify[romeo];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    yankee = 2;
    offset = verify[yankee];
    oscar = argCorge;
    oscar = oscar.bind(entity)(offset);
    var _closure1_slot5 = oscar;
    offset = 3;
    oscar = verify[offset];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 4;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 5;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.DraftType;
    var _closure1_slot8 = oscar;
    oscar = 6;
    oscar = verify[oscar];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot9 = oscar;
    oscar = 7;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.SlowmodeType;
    var _closure1_slot10 = oscar;
    oscar = 8;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.FORUM_POST_CREATION_AUTOMOD_ERRORS;
    var _closure1_slot11 = golf;
    oscar = oscar.FORUM_POST_CREATION_UPLOAD_ERRORS;
    var _closure1_slot12 = oscar;
    oscar = 9;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    golf = oscar.AbortCodes;
    var _closure1_slot13 = golf;
    golf = oscar.ChannelTypes;
    var _closure1_slot14 = golf;
    golf = oscar.Endpoints;
    var _closure1_slot15 = golf;
    golf = oscar.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = golf;
    oscar = oscar.MessageFlags;
    var _closure1_slot17 = oscar;
    oscar = {};
    oscar['Disabled'] = romeo;
    golf = 'Disabled';
    oscar[romeo] = golf;
    oscar['Enabled'] = yankee;
    golf = 'Enabled';
    oscar[yankee] = golf;
    oscar['PrivateOnly'] = offset;
    golf = 'PrivateOnly';
    oscar[offset] = golf;
    var _closure1_slot18 = oscar;
    golf = 26;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/threads/ThreadCreationHooks.tsx';
    golf = options.bind(verify)(golf);
    zulu['PrivateThreadMode'] = oscar;
    oscar = function(argFoo) { // Original name: usePrivateThreadMode
        _fun71423: for(var _fun71423_ip = 0; ; ) switch(_fun71423_ip) {
 0:
            report = argFoo;
            oscar = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 10;
            mike = golf[entity];
            tango = undefined;
            options = oscar.bind(tango)(mike);
            mike = options.useCanStartPublicThread;
            mike = mike.bind(options)(report);
            entity = golf[entity];
            tango = oscar.bind(tango)(entity);
            entity = tango.useCanStartPrivateThread;
            entity = entity.bind(tango)(report);
            zulu = _closure1_slot18;
            if(entity) { _fun71423_ip = 74; continue _fun71423 }
 66:
            entity = zulu.Disabled;
            _fun71423_ip = 94; continue _fun71423;
 74:
            if(mike) { _fun71423_ip = 85; continue _fun71423 }
 77:
            mike = zulu.PrivateOnly;
            _fun71423_ip = 91; continue _fun71423;
 85:
            mike = zulu.Enabled;
 91:
            entity = mike;
 94:
            return entity;
        }
    };
    zulu['usePrivateThreadMode'] = oscar;
    zulu['getIsPrivate'] = report;
    zulu['getDefaultThreadName'] = tango;
    tango = function(argFoo) { // Original name: useCreateThreadCommon
        mike = argFoo;
        romeo = mike.parentChannel;
        var _closure2_slot0 = romeo;
        yankee = mike.parentMessageId;
        var _closure2_slot1 = yankee;
        offset = mike.threadSettings;
        var _closure2_slot2 = offset;
        options = mike.privateThreadMode;
        var _closure2_slot3 = options;
        golf = mike.location;
        var _closure2_slot4 = golf;
        verify = mike.onThreadCreated;
        var _closure2_slot5 = verify;
        oscar = mike.useDefaultThreadName;
        var _closure2_slot6 = oscar;
        report = mike.uploadHandler;
        var _closure2_slot7 = report;
        tango = _closure1_slot5;
        zulu = tango.useCallback;
        mike = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun71427: for(var _fun71427_ip = 0; ; ) switch(_fun71427_ip) {
 0:
                        StartGenerator();
                        verify = argFoo;
                        options = argBar;
                        golf = argBaz;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun71427_ip = 620; continue _fun71427 }
 21:
                        zulu = undefined;
                        var _closure5_slot0 = zulu;
                        var _closure5_slot1 = zulu;
                        var _closure5_slot2 = zulu;
                        yankee = _closure1_slot19;
                        oscar = _closure2_slot2;
                        offset = _closure2_slot3;
                        offset = yankee.bind(zulu)(oscar, offset);
                        _closure5_slot0 = offset;
                        romeo = oscar.name;
                        offset = null;
                        foxtrot = offset != romeo;
                        yankee = '';
                        oscar = yankee;
                        if(!foxtrot) { _fun71427_ip = 87; continue _fun71427 }
 84:
                        oscar = romeo;
 87:
                        _closure5_slot1 = oscar;
                        if(!(yankee === oscar)) { _fun71427_ip = 183; continue _fun71427 }
 95:
                        oscar = _closure2_slot6;
                        if(!oscar) { _fun71427_ip = 183; continue _fun71427 }
 102:
                        foxtrot = _closure1_slot21;
                        romeo = _closure2_slot0;
                        oscar = _closure2_slot1;
                        oscar = foxtrot.bind(zulu)(romeo, oscar);
                        if(!(yankee === oscar)) { _fun71427_ip = 179; continue _fun71427 }
 124:
                        backup = _closure1_slot0;
                        kilo = _closure1_slot2;
                        yankee = 13;
                        romeo = kilo[yankee];
                        romeo = backup.bind(zulu)(romeo);
                        foxtrot = romeo.intl;
                        romeo = foxtrot.string;
                        yankee = kilo[yankee];
                        yankee = backup.bind(zulu)(yankee);
                        yankee = yankee.t;
                        yankee = yankee.7Xm5QE;
                        oscar = romeo.bind(foxtrot)(yankee);
 179:
                        _closure5_slot1 = oscar;
 183:
                        yankee = _closure1_slot0;
                        kilo = _closure1_slot2;
                        oscar = 14;
                        oscar = kilo[oscar];
                        yankee = yankee.bind(zulu)(oscar);
                        oscar = yankee.getAutoArchiveDuration;
                        romeo = _closure2_slot0;
                        oscar = oscar.bind(yankee)(romeo);
                        _closure5_slot2 = oscar;
                        foxtrot = _closure1_slot7;
                        yankee = foxtrot.getChannel;
                        backup = _closure1_slot1;
                        oscar = 15;
                        oscar = kilo[oscar];
                        kilo = backup.bind(zulu)(oscar);
                        backup = kilo.castMessageIdAsChannelId;
                        oscar = _closure2_slot1;
                        oscar = backup.bind(kilo)(oscar);
                        oscar = yankee.bind(foxtrot)(oscar);
                        yankee = _closure1_slot22;
                        mike = function() {
                            _fun71428: for(var _fun71428_ip = 0; ; ) switch(_fun71428_ip) {
 0:
                                mike = _closure2_slot1;
                                entity = null;
                                if(!(entity == mike)) { _fun71428_ip = 42; continue _fun71428 }
 13:
                                zulu = _closure1_slot15;
                                mike = zulu.CHANNEL_THREADS;
                                entity = _closure2_slot0;
                                entity = entity.id;
                                tango = mike.bind(zulu)(entity);
                                _fun71428_ip = 74; continue _fun71428;
 42:
                                oscar = _closure1_slot15;
                                zulu = oscar.CHANNEL_MESSAGE_THREADS;
                                entity = _closure2_slot0;
                                mike = entity.id;
                                entity = _closure2_slot1;
                                tango = zulu.bind(oscar)(mike, entity);
 74:
                                zulu = _closure1_slot0;
                                mike = _closure1_slot2;
                                entity = 16;
                                mike = mike[entity];
                                entity = undefined;
                                entity = zulu.bind(entity)(mike);
                                zulu = entity.HTTP;
                                mike = zulu.post;
                                entity = {};
                                entity['url'] = tango;
                                tango = {};
                                golf = _closure5_slot1;
                                tango['name'] = golf;
                                golf = _closure5_slot0;
                                if(golf) { _fun71428_ip = 183; continue _fun71428 }
 136:
                                golf = _closure2_slot0;
                                verify = golf.type;
                                golf = _closure1_slot14;
                                golf = golf.GUILD_ANNOUNCEMENT;
                                if(!(verify !== golf)) { _fun71428_ip = 171; continue _fun71428 }
 159:
                                golf = _closure1_slot14;
                                golf = golf.PUBLIC_THREAD;
                                _fun71428_ip = 181; continue _fun71428;
 171:
                                verify = _closure1_slot14;
                                golf = verify.ANNOUNCEMENT_THREAD;
 181:
                                _fun71428_ip = 193; continue _fun71428;
 183:
                                options = _closure1_slot14;
                                golf = options.PRIVATE_THREAD;
 193:
                                tango['type'] = golf;
                                oscar = _closure5_slot2;
                                tango['auto_archive_duration'] = oscar;
                                report = _closure2_slot4;
                                tango['location'] = report;
                                entity['body'] = tango;
                                tango = false;
                                entity['rejectWithError'] = tango;
                                entity = mike.bind(zulu)(entity);
                                return entity;
                            }
                        };
                        mike = yankee.bind(zulu)(romeo, mike);
                        SaveGenerator(address=288);
 286:
                        return mike;
 288:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                        if(yankee) { _fun71427_ip = 617; continue _fun71427 }
 297:
                        if(!(mike !== oscar)) { _fun71427_ip = 563; continue _fun71427 }
 304:
                        foxtrot = _closure1_slot1;
                        backup = _closure1_slot2;
                        romeo = 17;
                        oscar = backup[romeo];
                        result = foxtrot.bind(zulu)(oscar);
                        output = result.clearDraft;
                        yankee = _closure2_slot0;
                        sizing = yankee.id;
                        oscar = _closure1_slot8;
                        kilo = oscar.ThreadSettings;
                        kilo = output.bind(result)(sizing, kilo);
                        romeo = backup[romeo];
                        foxtrot = foxtrot.bind(zulu)(romeo);
                        romeo = foxtrot.clearDraft;
                        yankee = yankee.id;
                        oscar = oscar.FirstThreadMessage;
                        oscar = romeo.bind(foxtrot)(yankee, oscar);
                        oscar = _closure2_slot5;
                        if(!(offset != oscar)) { _fun71427_ip = 404; continue _fun71427 }
 395:
                        oscar = _closure2_slot5;
                        oscar = oscar.bind(zulu)(mike);
 404:
                        oscar = _closure2_slot7;
                        if(!(offset != oscar)) { _fun71427_ip = 427; continue _fun71427 }
 412:
                        if(!(offset != golf)) { _fun71427_ip = 427; continue _fun71427 }
 416:
                        romeo = golf.length;
                        yankee = 0;
                        if(!(!(romeo > yankee))) { _fun71427_ip = 545; continue _fun71427 }
 427:
                        if(!(offset != options)) { _fun71427_ip = 442; continue _fun71427 }
 431:
                        yankee = options.length;
                        offset = 0;
                        if(!(!(yankee > offset))) { _fun71427_ip = 505; continue _fun71427 }
 442:
                        backup = _closure1_slot1;
                        kilo = _closure1_slot2;
                        offset = 22;
                        offset = kilo[offset];
                        foxtrot = backup.bind(zulu)(offset);
                        romeo = foxtrot.sendMessage;
                        yankee = mike.id;
                        offset = 11;
                        offset = kilo[offset];
                        backup = backup.bind(zulu)(offset);
                        offset = backup.parse;
                        offset = offset.bind(backup)(mike, verify);
                        offset = romeo.bind(foxtrot)(yankee, offset);
                        _fun71427_ip = 563; continue _fun71427;
 505:
                        yankee = _closure1_slot1;
                        romeo = _closure1_slot2;
                        offset = 22;
                        offset = romeo[offset];
                        romeo = yankee.bind(zulu)(offset);
                        yankee = romeo.sendStickers;
                        offset = mike.id;
                        offset = yankee.bind(romeo)(offset, options, verify);
                        _fun71427_ip = 563; continue _fun71427;
 545:
                        vacuum = undefined;
                        control = mike;
                        source = golf;
                        update = verify;
                        echo = options;
                        oscar = vacuum[oscar](control, source, update, echo, result);
 563:
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 18;
                        oscar = options[oscar];
                        golf = golf.bind(zulu)(oscar);
                        oscar = golf.clearAll;
                        report = _closure2_slot0;
                        report = report.id;
                        tango = _closure1_slot8;
                        tango = tango.FirstThreadMessage;
                        tango = oscar.bind(golf)(report, tango);
                        return zulu;
 617:
                        return mike;
 620:
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
        entity = new Array(8);
        entity[0] = romeo;
        entity[1] = yankee;
        entity[2] = offset;
        entity[3] = verify;
        entity[4] = options;
        entity[5] = golf;
        entity[6] = oscar;
        entity[7] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCreateThreadCommon'] = tango;
    tango = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: createThread
        tango = argFoo;
        var _closure2_slot0 = tango;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        mike = argGrault;
        var _closure2_slot4 = mike;
        zulu = _closure1_slot22;
        mike = undefined;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 16;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.HTTP;
            mike = zulu.post;
            entity = {};
            golf = _closure1_slot15;
            oscar = golf.CHANNEL_THREADS;
            tango = _closure2_slot0;
            tango = tango.id;
            tango = oscar.bind(golf)(tango);
            entity['url'] = tango;
            tango = {};
            oscar = _closure2_slot1;
            tango['name'] = oscar;
            oscar = _closure2_slot2;
            tango['type'] = oscar;
            oscar = _closure2_slot3;
            tango['auto_archive_duration'] = oscar;
            report = _closure2_slot4;
            tango['location'] = report;
            entity['body'] = tango;
            tango = false;
            entity['rejectWithError'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(mike)(tango, entity);
        return entity;
    };
    zulu['createThread'] = tango;
    mike = function(argFoo) { // Original name: useCreateForumPostCommon
        mike = argFoo;
        verify = mike.parentChannel;
        var _closure2_slot0 = verify;
        options = mike.name;
        var _closure2_slot1 = options;
        oscar = mike.appliedTags;
        var _closure2_slot2 = oscar;
        golf = mike.onThreadCreated;
        var _closure2_slot3 = golf;
        report = mike.upload;
        var _closure2_slot4 = report;
        tango = _closure1_slot5;
        zulu = tango.useCallback;
        mike = function() {
            tango = _closure1_slot4;
            zulu = undefined;
            mike = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun71435: for(var _fun71435_ip = 0; ; ) switch(_fun71435_ip) {
 0:
                        StartGenerator();
                        golf = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun71435_ip = 505; continue _fun71435 }
 15:
                        zulu = argBaz;
                        var _closure5_slot0 = zulu;
                        tango = undefined;
                        var _closure5_slot1 = tango;
                        var _closure5_slot2 = tango;
                        oscar = _closure1_slot1;
                        options = _closure1_slot2;
                        zulu = 19;
                        zulu = options[zulu];
                        zulu = oscar.bind(tango)(zulu);
                        options = zulu.bind(tango)(golf);
                        oscar = _closure1_slot3;
                        zulu = 2;
                        options = oscar.bind(tango)(options, zulu);
                        yankee = 0;
                        zulu = options[yankee];
                        oscar = 1;
                        oscar = options[oscar];
                        verify = golf;
                        offset = 0;
                        if(!zulu) { _fun71435_ip = 139; continue _fun71435 }
 94:
                        golf = _closure1_slot0;
                        options = _closure1_slot2;
                        zulu = 20;
                        zulu = options[zulu];
                        options = golf.bind(tango)(zulu);
                        golf = options.addFlag;
                        zulu = _closure1_slot17;
                        zulu = zulu.SUPPRESS_NOTIFICATIONS;
                        offset = golf.bind(options)(yankee, zulu);
                        verify = oscar;
 139:
                        oscar = _closure1_slot0;
                        golf = _closure1_slot2;
                        zulu = 14;
                        zulu = golf[zulu];
                        romeo = oscar.bind(tango)(zulu);
                        options = romeo.getAutoArchiveDuration;
                        golf = _closure2_slot0;
                        oscar = null;
                        options = options.bind(romeo)(golf, oscar);
                        foxtrot = _closure1_slot15;
                        romeo = foxtrot.CHANNEL_THREADS;
                        golf = golf.id;
                        romeo = romeo.bind(foxtrot)(golf);
                        golf = '?use_nested_fields=true';
                        golf = romeo + golf;
                        _closure5_slot1 = golf;
                        golf = {};
                        romeo = _closure2_slot1;
                        golf['name'] = romeo;
                        golf['auto_archive_duration'] = options;
                        options = _closure2_slot2;
                        golf['applied_tags'] = options;
                        options = {};
                        options['content'] = verify;
                        verify = argBar;
                        options['sticker_ids'] = verify;
                        verify = undefined;
                        if(!(yankee !== offset)) { _fun71435_ip = 261; continue _fun71435 }
 258:
                        verify = offset;
 261:
                        options['flags'] = verify;
                        golf['message'] = options;
                        _closure5_slot2 = golf;
                        options = _closure1_slot22;
                        golf = _closure2_slot0;
                        mike = function() {
                            _fun71436: for(var _fun71436_ip = 0; ; ) switch(_fun71436_ip) {
 0:
                                zulu = _closure5_slot0;
                                entity = null;
                                if(!(entity != zulu)) { _fun71436_ip = 28; continue _fun71436 }
 13:
                                entity = _closure5_slot0;
                                zulu = entity.length;
                                entity = 0;
                                if(!(!(zulu > entity))) { _fun71436_ip = 95; continue _fun71436 }
 28:
                                tango = _closure1_slot0;
                                zulu = _closure1_slot2;
                                entity = 16;
                                zulu = zulu[entity];
                                entity = undefined;
                                entity = tango.bind(entity)(zulu);
                                tango = entity.HTTP;
                                zulu = tango.post;
                                entity = {};
                                report = _closure5_slot1;
                                entity['url'] = report;
                                report = _closure5_slot2;
                                entity['body'] = report;
                                report = false;
                                entity['rejectWithError'] = report;
                                entity = zulu.bind(tango)(entity);
                                _fun71436_ip = 123; continue _fun71436;
 95:
                                oscar = _closure2_slot4;
                                report = _closure5_slot1;
                                tango = _closure5_slot2;
                                zulu = _closure5_slot0;
                                mike = undefined;
                                entity = oscar.bind(mike)(report, tango, zulu);
 123:
                                return entity;
                            }
                        };
                        mike = options.bind(tango)(golf, mike);
                        SaveGenerator(address=298);
 296:
                        return mike;
 298:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(golf) { _fun71435_ip = 502; continue _fun71435 }
 307:
                        yankee = _closure1_slot1;
                        options = _closure1_slot2;
                        offset = 17;
                        golf = options[offset];
                        kilo = yankee.bind(tango)(golf);
                        backup = kilo.clearDraft;
                        verify = _closure2_slot0;
                        foxtrot = verify.id;
                        golf = _closure1_slot8;
                        romeo = golf.ThreadSettings;
                        romeo = backup.bind(kilo)(foxtrot, romeo);
                        offset = options[offset];
                        backup = yankee.bind(tango)(offset);
                        foxtrot = backup.clearDraft;
                        romeo = verify.id;
                        offset = golf.FirstThreadMessage;
                        offset = foxtrot.bind(backup)(romeo, offset);
                        offset = 18;
                        offset = options[offset];
                        romeo = yankee.bind(tango)(offset);
                        yankee = romeo.clearAll;
                        offset = verify.id;
                        golf = golf.FirstThreadMessage;
                        golf = yankee.bind(romeo)(offset, golf);
                        golf = _closure1_slot0;
                        report = 21;
                        report = options[report];
                        options = golf.bind(tango)(report);
                        golf = options.trackForumPostCreated;
                        report = {};
                        offset = verify.guild_id;
                        report['guildId'] = offset;
                        verify = verify.id;
                        report['channelId'] = verify;
                        verify = mike.id;
                        report['postId'] = verify;
                        report = golf.bind(options)(report);
                        report = _closure2_slot3;
                        if(!(oscar != report)) { _fun71435_ip = 499; continue _fun71435 }
 490:
                        zulu = _closure2_slot3;
                        zulu = zulu.bind(tango)(mike);
 499:
                        return mike;
 502:
                        return mike;
 505:
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
        entity = new Array(5);
        entity[0] = verify;
        entity[1] = options;
        entity[2] = golf;
        entity[3] = oscar;
        entity[4] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useCreateForumPostCommon'] = mike;
    return entity;
})();
// app/modules/threads/ThreadCreationHooks.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    option = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = verify;
    report = function(argFoo, argBar) { // Original name: getIsPrivate
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = _closure1_slot18;
            michal = entity.PrivateOnly;
            entity = argBar;
            entity = entity === michal;
            if(entity) { _fun00002_ip = 47; continue _fun00001 }
 23:
            michal = argFoo;
            zuuluu = michal.isPrivate;
            michal = null;
            michal = michal != zuuluu;
            if(!michal) { _fun00002_ip = 44; continue _fun00001 }
 41:
            michal = zuuluu;
 44:
            entity = michal;
 47:
            return entity;
        }
    };
    var _closure1_slot19 = report;
    entity = function(argFoo, argBar) { // Original name: trimToLength
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            michal = report.length;
            entity = report;
            if(!(michal > tangon)) { _fun00004_ip = 42; continue _fun00003 }
 18:
            zuuluu = report.substring;
            michal = 0;
            zuuluu = zuuluu.bind(report)(michal, tangon);
            michal = '...';
            entity = zuuluu + michal;
 42:
            return entity;
        }
    };
    var _closure1_slot20 = entity;
    tangon = function(argFoo, argBar) { // Original name: getDefaultThreadName
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            report = argBar;
            option = null;
            entity = option == report;
            oscard = null;
            if(entity) { _fun00006_ip = 41; continue _fun00005 }
 17:
            tangon = _closure1_slot9;
            zuuluu = tangon.getMessage;
            entity = michal.id;
            oscard = zuuluu.bind(tangon)(entity, report);
 41:
            zuuluu = option == oscard;
            tangon = undefined;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 88; continue _fun00005 }
 52:
            report = oscard.embeds;
            zuuluu = option == report;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 88; continue _fun00005 }
 67:
            zuuluu = 0;
            zuuluu = report[zuuluu];
            report = option == zuuluu;
            entity = undefined;
            if(report) { _fun00006_ip = 88; continue _fun00005 }
 82:
            entity = zuuluu.rawTitle;
 88:
            report = option != entity;
            offset = '';
            zuuluu = offset;
            if(!report) { _fun00006_ip = 105; continue _fun00005 }
 102:
            zuuluu = entity;
 105:
            report = option == oscard;
            entity = undefined;
            if(report) { _fun00006_ip = 149; continue _fun00005 }
 114:
            report = oscard.poll;
            golfie = option == report;
            entity = undefined;
            if(golfie) { _fun00006_ip = 149; continue _fun00005 }
 129:
            report = report.question;
            golfie = option == report;
            entity = undefined;
            if(golfie) { _fun00006_ip = 149; continue _fun00005 }
 144:
            entity = report.text;
 149:
            golfie = option != entity;
            report = offset;
            if(!golfie) { _fun00006_ip = 162; continue _fun00005 }
 159:
            report = entity;
 162:
            if(!(offset === zuuluu)) { _fun00006_ip = 537; continue _fun00005 }
 169:
            if(!(offset === report)) { _fun00006_ip = 519; continue _fun00005 }
 176:
            verify = _closure1_slot1;
            yankee = _closure1_slot2;
            golfie = 11;
            golfie = yankee[golfie];
            yankee = verify.bind(tangon)(golfie);
            golfie = yankee.unparse;
            romeon = option == oscard;
            verify = undefined;
            if(romeon) { _fun00006_ip = 219; continue _fun00005 }
 214:
            verify = oscard.content;
 219:
            romeon = option != verify;
            oscard = offset;
            if(!romeon) { _fun00006_ip = 232; continue _fun00005 }
 229:
            oscard = verify;
 232:
            michal = michal.id;
            verify = true;
            yankee = golfie.bind(yankee)(oscard, michal, verify);
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 12;
            michal = golfie[michal];
            golfie = oscard.bind(tangon)(michal);
            oscard = yankee.split;
            michal = '\n';
            oscard = oscard.bind(yankee)(michal);
            michal = 0;
            oscard = oscard[michal];
            verify = golfie.bind(tangon)(oscard, verify);
            golfie = verify.replace;
            oscard = /^[ #-]+/;
            oscard = golfie.bind(verify)(oscard, offset);
            offset = new Array(0);
 321:
            verify = oscard.match;
            golfie = /(?:\s|[!@#$%^&*()_\-+={}[\]:";'<>?,.\/])+/;
            verify = verify.bind(oscard)(golfie);
            golfie = oscard;
            if(!(option != verify)) { _fun00006_ip = 434; continue _fun00005 }
 353:
            yankee = verify.index;
            if(!(option != yankee)) { _fun00006_ip = 434; continue _fun00005 }
 362:
            romeon = offset.push;
            foxtra = golfie.substring;
            yankee = verify.index;
            yankee = foxtra.bind(golfie)(michal, yankee);
            yankee = romeon.bind(offset)(yankee);
            romeon = offset.push;
            yankee = verify[michal];
            yankee = romeon.bind(offset)(yankee);
            yankee = golfie.substring;
            romeon = verify.index;
            verify = verify[michal];
            verify = verify.length;
            verify = romeon + verify;
            oscard = yankee.bind(golfie)(verify);
            _fun00006_ip = 321; continue _fun00005;
 434:
            oscard = offset.push;
            oscard = oscard.bind(offset)(golfie);
            option = offset[michal];
            oscard = offset.length;
            verify = 1;
            golfie = verify < oscard;
            oscard = 40;
            michal = option;
            if(!golfie) { _fun00006_ip = 507; continue _fun00005 }
 469:
            golfie = offset[verify];
            yankee = option + golfie;
            golfie = yankee.length;
            michal = option;
            if(!(!(golfie > oscard))) { _fun00006_ip = 507; continue _fun00005 }
 489:
            verify = verify + 1;
            golfie = offset.length;
            option = yankee;
            michal = option;
            if(verify < golfie) { _fun00006_ip = 469; continue _fun00005 }
 507:
            entity = _closure1_slot20;
            entity = entity.bind(tangon)(michal, oscard);
            return entity;
 519:
            michal = _closure1_slot20;
            entity = 80;
            entity = michal.bind(tangon)(report, entity);
            return entity;
 537:
            michal = _closure1_slot20;
            entity = 40;
            entity = michal.bind(tangon)(zuuluu, entity);
            return entity;
        }
    };
    var _closure1_slot21 = tangon;
    entity = function() { // Original name: createThread_
        entity = undefined;
        tangon = _closure1_slot23;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot22 = entity;
    entity = function() { // Original name: _createThread_
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot4;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    output = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscard) { _fun00008_ip = 1561; continue _fun00007 }
 15:
                    yankee = output;
                    report = argBar;
                    oscard = undefined;
                    echoed = undefined;
                    var _closure4_slot0 = oscard;
                    option = undefined;
                    verify = undefined;
                    foxtra = undefined;
                    romeon = undefined;
                    sizing = undefined;
                    kiloes = undefined;
                    golfie = undefined;
                    offset = undefined;
                    zuuluu = undefined;
                    backup = output.isForumLikeChannel;
                    option = backup.bind(output)();
 57: // try_start_0
                    report = report.bind(oscard)();
                    SaveGenerator(address=65);
 63:
                    return report;
 65:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=13);
                    if(backup) { _fun00008_ip = 361; continue _fun00007 }
 74:
                    echoed = report;
                    _closure4_slot0 = report;
                    output = report.body;
                    backup = null;
                    if(!(backup != output)) { _fun00008_ip = 217; continue _fun00007 }
 95:
                    output = _closure1_slot1;
                    result = _closure1_slot2;
                    backup = 24;
                    update = result[backup];
                    ctrled = output.bind(oscard)(update);
                    source = ctrled.dispatch;
                    update = {};
                    sequen = 'SLOWMODE_RESET_COOLDOWN';
                    update['type'] = sequen;
                    vacuum = _closure1_slot10;
                    vacuum = vacuum.CreateThread;
                    update['slowmodeType'] = vacuum;
                    vacuum = yankee;
                    vacuum = vacuum.id;
                    update['channelId'] = vacuum;
                    update = source.bind(ctrled)(update);
                    backup = result[backup];
                    result = output.bind(oscard)(backup);
                    output = result.dispatch;
                    backup = {};
                    update = 'THREAD_CREATE_LOCAL';
                    backup['type'] = update;
                    echoed = echoed.body;
                    echoed = echoed.id;
                    backup['channelId'] = echoed;
                    backup = output.bind(result)(backup);
                    _fun00008_ip = 356; continue _fun00007;
 217:
                    output = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    backup = 23;
                    backup = vacuum[backup];
                    result = output.bind(oscard)(backup);
                    output = result.show;
                    backup = {};
                    ctrled = _closure1_slot0;
                    echoed = 13;
                    update = vacuum[echoed];
                    update = ctrled.bind(oscard)(update);
                    sequen = update.intl;
                    source = sequen.string;
                    update = vacuum[echoed];
                    update = ctrled.bind(oscard)(update);
                    update = update.t;
                    update = update.j2d6Ki;
                    update = source.bind(sequen)(update);
                    backup['title'] = update;
                    update = vacuum[echoed];
                    update = ctrled.bind(oscard)(update);
                    source = update.intl;
                    update = source.string;
                    echoed = vacuum[echoed];
                    echoed = ctrled.bind(oscard)(echoed);
                    echoed = echoed.t;
                    echoed = echoed.fEptJC;
                    echoed = update.bind(source)(echoed);
                    backup['body'] = echoed;
                    backup = output.bind(result)(backup);
 356: // try_end0
                    _fun00008_ip = 1435; continue _fun00007;
 361:
                    return report;
 364: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = report;
                    var _closure4_slot1 = report;
                    backup = report.body;
                    verify = backup;
                    report = null;
                    backup = report == backup;
                    output = undefined;
                    if(backup) { _fun00008_ip = 397; continue _fun00007 }
 392:
                    output = verify.code;
 397:
                    backup = _closure1_slot13;
                    backup = backup.TOO_MANY_THREADS;
                    if(!(output !== backup)) { _fun00008_ip = 1252; continue _fun00007 }
 417:
                    backup = tangon;
                    backup = backup.body;
                    foxtra = backup;
                    output = report == backup;
                    backup = undefined;
                    if(output) { _fun00008_ip = 442; continue _fun00007 }
 437:
                    backup = foxtra.code;
 442:
                    foxtra = _closure1_slot13;
                    foxtra = foxtra.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(backup !== foxtra)) { _fun00008_ip = 1111; continue _fun00007 }
 459:
                    foxtra = tangon;
                    foxtra = foxtra.body;
                    romeon = foxtra;
                    backup = report == foxtra;
                    foxtra = undefined;
                    if(backup) { _fun00008_ip = 484; continue _fun00007 }
 479:
                    foxtra = romeon.code;
 484:
                    romeon = _closure1_slot13;
                    romeon = romeon.SLOWMODE_RATE_LIMITED;
                    if(!(foxtra !== romeon)) { _fun00008_ip = 966; continue _fun00007 }
 501:
                    romeon = tangon;
                    foxtra = romeon.status;
                    romeon = 429;
                    if(!(romeon !== foxtra)) { _fun00008_ip = 794; continue _fun00007 }
 522:
                    backup = _closure1_slot11;
                    foxtra = backup.has;
                    romeon = tangon;
                    romeon = romeon.body;
                    sizing = romeon;
                    output = report == romeon;
                    romeon = undefined;
                    if(output) { _fun00008_ip = 556; continue _fun00007 }
 551:
                    romeon = sizing.code;
 556:
                    romeon = foxtra.bind(backup)(romeon);
                    if(romeon) { _fun00008_ip = 789; continue _fun00007 }
 567:
                    backup = _closure1_slot12;
                    foxtra = backup.has;
                    romeon = tangon;
                    romeon = romeon.body;
                    kiloes = romeon;
                    sizing = report == romeon;
                    romeon = undefined;
                    if(sizing) { _fun00008_ip = 601; continue _fun00007 }
 596:
                    romeon = kiloes.code;
 601:
                    romeon = foxtra.bind(backup)(romeon);
                    if(romeon) { _fun00008_ip = 753; continue _fun00007 }
 612:
                    foxtra = _closure1_slot1;
                    echoed = _closure1_slot2;
                    romeon = 23;
                    romeon = echoed[romeon];
                    backup = foxtra.bind(oscard)(romeon);
                    foxtra = backup.show;
                    romeon = {};
                    result = _closure1_slot0;
                    kiloes = 13;
                    sizing = echoed[kiloes];
                    sizing = result.bind(oscard)(sizing);
                    update = sizing.intl;
                    output = update.string;
                    sizing = echoed[kiloes];
                    sizing = result.bind(oscard)(sizing);
                    sizing = sizing.t;
                    sizing = sizing.j2d6Ki;
                    sizing = output.bind(update)(sizing);
                    romeon['title'] = sizing;
                    sizing = echoed[kiloes];
                    sizing = result.bind(oscard)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = echoed[kiloes];
                    kiloes = result.bind(oscard)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.fEptJC;
                    kiloes = sizing.bind(output)(kiloes);
                    romeon['body'] = kiloes;
                    romeon = foxtra.bind(backup)(romeon);
                    _fun00008_ip = 1435; continue _fun00007;
 753:
                    romeon = global;
                    backup = romeon.Promise;
                    romeon = backup.prototype;
                    foxtra = Object.create(romeon, {constructor: {value: backup}});
                    config = function(argFoo, argBar) {
                        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                            zuuluu = argBar;
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            var _closure5_slot1 = zuuluu;
                            michal = _closure4_slot1;
                            tangon = michal.body;
                            michal = null;
                            if(!(michal == tangon)) { _fun00010_ip = 40; continue _fun00009 }
 34:
                            michal = undefined;
                            michal = zuuluu.bind(michal)();
 40:
                            zuuluu = _closure1_slot6;
                            michal = zuuluu.addConditionalChangeListener;
                            entity = function() {
                                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                                    tangon = _closure1_slot6;
                                    zuuluu = tangon.getAndDeleteMostRecentUserCreatedThreadId;
                                    report = zuuluu.bind(tangon)();
                                    zuuluu = null;
                                    if(!(zuuluu == report)) { _fun00012_ip = 31; continue _fun00011 }
 27:
                                    zuuluu = undefined;
                                    return zuuluu;
 31:
                                    tangon = _closure1_slot7;
                                    zuuluu = tangon.getChannel;
                                    zuuluu = zuuluu.bind(tangon)(report);
                                    var _closure6_slot0 = zuuluu;
                                    tangon = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    michal = 24;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    zuuluu = tangon.bind(michal)(zuuluu);
                                    michal = zuuluu.wait;
                                    entity = function() {
                                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                                            zuuluu = _closure6_slot0;
                                            michal = null;
                                            if(!(michal != zuuluu)) { _fun00014_ip = 33; continue _fun00013 }
 13:
                                            zuuluu = _closure5_slot0;
                                            michal = _closure6_slot0;
                                            entity = undefined;
                                            entity = zuuluu.bind(entity)(michal);
                                            _fun00014_ip = 46; continue _fun00013;
 33:
                                            michal = _closure5_slot1;
                                            entity = undefined;
                                            entity = michal.bind(entity)();
 46:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    entity = michal.bind(zuuluu)(entity);
                                    entity = false;
                                    return entity;
                                }
                            };
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    record = foxtra;
                    romeon = new record[backup](config, sequen);
                    romeon = romeon instanceof Object ? romeon : foxtra;
                    return romeon;
 789:
                    romeon = tangon;
                    throw romeon;
 794:
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    romeon = 23;
                    romeon = backup[romeon];
                    backup = foxtra.bind(oscard)(romeon);
                    foxtra = backup.show;
                    romeon = {};
                    kiloes = option;
                    update = _closure1_slot0;
                    sizing = _closure1_slot2;
                    echoed = 13;
                    output = sizing[echoed];
                    output = update.bind(oscard)(output);
                    result = output.intl;
                    output = result.string;
                    sizing = sizing[echoed];
                    sizing = update.bind(oscard)(sizing);
                    sizing = sizing.t;
                    if(kiloes) { _fun00008_ip = 885; continue _fun00007 }
 872:
                    kiloes = sizing.1KEdvL;
                    kiloes = output.bind(result)(kiloes);
                    _fun00008_ip = 896; continue _fun00007;
 885:
                    sizing = sizing.vWNFk5;
                    kiloes = output.bind(result)(sizing);
 896:
                    romeon['title'] = kiloes;
                    result = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    sizing = kiloes[echoed];
                    sizing = result.bind(oscard)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = kiloes[echoed];
                    kiloes = result.bind(oscard)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.Whhv4+;
                    kiloes = sizing.bind(output)(kiloes);
                    romeon['body'] = kiloes;
                    romeon = foxtra.bind(backup)(romeon);
                    _fun00008_ip = 1435; continue _fun00007;
 966:
                    tangon = tangon.body;
                    tangon = tangon.retry_after;
                    golfie = tangon;
                    romeon = report != tangon;
                    report = 0;
                    tangon = 0;
                    if(!romeon) { _fun00008_ip = 994; continue _fun00007 }
 991:
                    tangon = golfie;
 994:
                    offset = tangon;
                    if(!(tangon > report)) { _fun00008_ip = 1435; continue _fun00007 }
 1004:
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    tangon = 24;
                    tangon = foxtra[tangon];
                    golfie = romeon.bind(oscard)(tangon);
                    report = golfie.dispatch;
                    tangon = {};
                    backup = 'SLOWMODE_SET_COOLDOWN';
                    tangon['type'] = backup;
                    yankee = yankee.id;
                    tangon['channelId'] = yankee;
                    yankee = _closure1_slot10;
                    yankee = yankee.CreateThread;
                    tangon['slowmodeType'] = yankee;
                    yankee = offset;
                    offset = 25;
                    offset = foxtra[offset];
                    offset = romeon.bind(oscard)(offset);
                    offset = offset.Millis;
                    offset = offset.SECOND;
                    offset = yankee * offset;
                    tangon['cooldownMs'] = offset;
                    tangon = report.bind(golfie)(tangon);
                    _fun00008_ip = 1435; continue _fun00007;
 1111:
                    report = _closure1_slot1;
                    backup = _closure1_slot2;
                    tangon = 23;
                    tangon = backup[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = golfie.show;
                    tangon = {};
                    foxtra = _closure1_slot0;
                    offset = 13;
                    yankee = backup[offset];
                    yankee = foxtra.bind(oscard)(yankee);
                    kiloes = yankee.intl;
                    romeon = kiloes.string;
                    yankee = backup[offset];
                    yankee = foxtra.bind(oscard)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.1KEdvL;
                    yankee = romeon.bind(kiloes)(yankee);
                    tangon['title'] = yankee;
                    yankee = backup[offset];
                    yankee = foxtra.bind(oscard)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.string;
                    offset = backup[offset];
                    offset = foxtra.bind(oscard)(offset);
                    offset = offset.t;
                    offset = offset.jDMxz8;
                    offset = yankee.bind(romeon)(offset);
                    tangon['body'] = offset;
                    tangon = report.bind(golfie)(tangon);
                    _fun00008_ip = 1435; continue _fun00007;
 1252:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 23;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = golfie.show;
                    tangon = {};
                    offset = option;
                    kiloes = _closure1_slot0;
                    yankee = _closure1_slot2;
                    foxtra = 13;
                    romeon = yankee[foxtra];
                    romeon = kiloes.bind(oscard)(romeon);
                    backup = romeon.intl;
                    romeon = backup.string;
                    yankee = yankee[foxtra];
                    yankee = kiloes.bind(oscard)(yankee);
                    yankee = yankee.t;
                    if(offset) { _fun00008_ip = 1343; continue _fun00007 }
 1330:
                    offset = yankee.1KEdvL;
                    offset = romeon.bind(backup)(offset);
                    _fun00008_ip = 1354; continue _fun00007;
 1343:
                    yankee = yankee.vWNFk5;
                    offset = romeon.bind(backup)(yankee);
 1354:
                    tangon['title'] = offset;
                    romeon = _closure1_slot0;
                    verify = _closure1_slot2;
                    offset = verify[foxtra];
                    offset = romeon.bind(oscard)(offset);
                    yankee = offset.intl;
                    offset = yankee.string;
                    verify = verify[foxtra];
                    verify = romeon.bind(oscard)(verify);
                    verify = verify.t;
                    if(option) { _fun00008_ip = 1415; continue _fun00007 }
 1402:
                    option = verify.P0wT5e;
                    option = offset.bind(yankee)(option);
                    _fun00008_ip = 1426; continue _fun00007;
 1415:
                    verify = verify.KGaiEB;
                    option = offset.bind(yankee)(verify);
 1426:
                    tangon['body'] = option;
                    tangon = report.bind(golfie)(tangon);
 1435:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    config = function(argFoo, argBar) {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = _closure4_slot0;
                            zuuluu = michal.body;
                            michal = null;
                            if(!(michal == zuuluu)) { _fun00016_ip = 36; continue _fun00015 }
 27:
                            zuuluu = argBar;
                            michal = undefined;
                            michal = zuuluu.bind(michal)();
 36:
                            zuuluu = _closure1_slot7;
                            michal = zuuluu.addConditionalChangeListener;
                            entity = function() {
                                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                                    report = _closure1_slot7;
                                    tangon = report.getChannel;
                                    zuuluu = _closure4_slot0;
                                    zuuluu = zuuluu.body;
                                    zuuluu = zuuluu.id;
                                    tangon = tangon.bind(report)(zuuluu);
                                    var _closure6_slot0 = tangon;
                                    zuuluu = null;
                                    if(!(zuuluu == tangon)) { _fun00018_ip = 50; continue _fun00017 }
 46:
                                    zuuluu = undefined;
                                    return zuuluu;
 50:
                                    tangon = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    michal = 24;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    zuuluu = tangon.bind(michal)(zuuluu);
                                    michal = zuuluu.wait;
                                    entity = function() {
                                        zuuluu = _closure5_slot0;
                                        michal = _closure6_slot0;
                                        entity = undefined;
                                        michal = zuuluu.bind(entity)(michal);
                                        return entity;
                                    };
                                    entity = michal.bind(zuuluu)(entity);
                                    entity = false;
                                    return entity;
                                }
                            };
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    record = tangon;
                    michal = new record[report](config, sequen);
                    michal = michal instanceof Object ? michal : tangon;
                    SaveGenerator(address=1472);
 1470:
                    return michal;
 1472:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 1558; continue _fun00007 }
 1478:
                    zuuluu = michal;
 1481: // try_start_1
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 22;
                    tangon = option[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.fetchMessages;
                    tangon = {};
                    option = zuuluu;
                    option = option.id;
                    tangon['channelId'] = option;
                    golfie = _closure1_slot16;
                    tangon['limit'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    SaveGenerator(address=1542);
 1540:
                    return tangon;
 1542:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 1550; continue _fun00007 }
 1548: // try_end1
                    _fun00008_ip = 1555; continue _fun00007;
 1550:
                    return tangon;
 1553: // catch_target1
                    CatchBlockStart(arg_register=3);
 1555:
                    return zuuluu;
 1558:
                    return michal;
 1561:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot23 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot23 = entity;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    romeon = 1;
    oscard = verify[romeon];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    yankee = 2;
    offset = verify[yankee];
    oscard = argCor;
    oscard = oscard.bind(entity)(offset);
    var _closure1_slot5 = oscard;
    offset = 3;
    oscard = verify[offset];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 4;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 5;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.DraftType;
    var _closure1_slot8 = oscard;
    oscard = 6;
    oscard = verify[oscard];
    oscard = golfie.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    oscard = 7;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.SlowmodeType;
    var _closure1_slot10 = oscard;
    oscard = 8;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.FORUM_POST_CREATION_AUTOMOD_ERRORS;
    var _closure1_slot11 = golfie;
    oscard = oscard.FORUM_POST_CREATION_UPLOAD_ERRORS;
    var _closure1_slot12 = oscard;
    oscard = 9;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    golfie = oscard.AbortCodes;
    var _closure1_slot13 = golfie;
    golfie = oscard.ChannelTypes;
    var _closure1_slot14 = golfie;
    golfie = oscard.Endpoints;
    var _closure1_slot15 = golfie;
    golfie = oscard.MAX_MESSAGES_PER_CHANNEL;
    var _closure1_slot16 = golfie;
    oscard = oscard.MessageFlags;
    var _closure1_slot17 = oscard;
    oscard = {};
    oscard['Disabled'] = romeon;
    golfie = 'Disabled';
    oscard[romeon] = golfie;
    oscard['Enabled'] = yankee;
    golfie = 'Enabled';
    oscard[yankee] = golfie;
    oscard['PrivateOnly'] = offset;
    golfie = 'PrivateOnly';
    oscard[offset] = golfie;
    var _closure1_slot18 = oscard;
    golfie = 26;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/threads/ThreadCreationHooks.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['PrivateThreadMode'] = oscard;
    oscard = function(argFoo) { // Original name: usePrivateThreadMode
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            report = argFoo;
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 10;
            michal = golfie[entity];
            tangon = undefined;
            option = oscard.bind(tangon)(michal);
            michal = option.useCanStartPublicThread;
            michal = michal.bind(option)(report);
            entity = golfie[entity];
            tangon = oscard.bind(tangon)(entity);
            entity = tangon.useCanStartPrivateThread;
            entity = entity.bind(tangon)(report);
            zuuluu = _closure1_slot18;
            if(entity) { _fun00020_ip = 74; continue _fun00019 }
 66:
            entity = zuuluu.Disabled;
            _fun00020_ip = 94; continue _fun00019;
 74:
            if(michal) { _fun00020_ip = 85; continue _fun00019 }
 77:
            michal = zuuluu.PrivateOnly;
            _fun00020_ip = 91; continue _fun00019;
 85:
            michal = zuuluu.Enabled;
 91:
            entity = michal;
 94:
            return entity;
        }
    };
    zuuluu['usePrivateThreadMode'] = oscard;
    zuuluu['getIsPrivate'] = report;
    zuuluu['getDefaultThreadName'] = tangon;
    tangon = function(argFoo) { // Original name: useCreateThreadCommon
        michal = argFoo;
        romeon = michal.parentChannel;
        var _closure2_slot0 = romeon;
        yankee = michal.parentMessageId;
        var _closure2_slot1 = yankee;
        offset = michal.threadSettings;
        var _closure2_slot2 = offset;
        option = michal.privateThreadMode;
        var _closure2_slot3 = option;
        golfie = michal.location;
        var _closure2_slot4 = golfie;
        verify = michal.onThreadCreated;
        var _closure2_slot5 = verify;
        oscard = michal.useDefaultThreadName;
        var _closure2_slot6 = oscard;
        report = michal.uploadHandler;
        var _closure2_slot7 = report;
        tangon = _closure1_slot5;
        zuuluu = tangon.useCallback;
        michal = function() {
            tangon = _closure1_slot4;
            zuuluu = undefined;
            michal = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        StartGenerator();
                        verify = argFoo;
                        option = argBar;
                        golfie = argBaz;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00022_ip = 620; continue _fun00021 }
 21:
                        zuuluu = undefined;
                        var _closure5_slot0 = zuuluu;
                        var _closure5_slot1 = zuuluu;
                        var _closure5_slot2 = zuuluu;
                        yankee = _closure1_slot19;
                        oscard = _closure2_slot2;
                        offset = _closure2_slot3;
                        offset = yankee.bind(zuuluu)(oscard, offset);
                        _closure5_slot0 = offset;
                        romeon = oscard.name;
                        offset = null;
                        foxtra = offset != romeon;
                        yankee = '';
                        oscard = yankee;
                        if(!foxtra) { _fun00022_ip = 87; continue _fun00021 }
 84:
                        oscard = romeon;
 87:
                        _closure5_slot1 = oscard;
                        if(!(yankee === oscard)) { _fun00022_ip = 185; continue _fun00021 }
 95:
                        oscard = _closure2_slot6;
                        if(!oscard) { _fun00022_ip = 185; continue _fun00021 }
 102:
                        foxtra = _closure1_slot21;
                        romeon = _closure2_slot0;
                        oscard = _closure2_slot1;
                        oscard = foxtra.bind(zuuluu)(romeon, oscard);
                        if(!(yankee === oscard)) { _fun00022_ip = 181; continue _fun00021 }
 124:
                        backup = _closure1_slot0;
                        kiloes = _closure1_slot2;
                        yankee = 13;
                        romeon = kiloes[yankee];
                        romeon = backup.bind(zuuluu)(romeon);
                        foxtra = romeon.intl;
                        romeon = foxtra.string;
                        yankee = kiloes[yankee];
                        yankee = backup.bind(zuuluu)(yankee);
                        yankee = yankee.t;
                        yankee = yankee.7Xm5QE;
                        oscard = romeon.bind(foxtra)(yankee);
 181:
                        _closure5_slot1 = oscard;
 185:
                        yankee = _closure1_slot0;
                        kiloes = _closure1_slot2;
                        oscard = 14;
                        oscard = kiloes[oscard];
                        yankee = yankee.bind(zuuluu)(oscard);
                        oscard = yankee.getAutoArchiveDuration;
                        romeon = _closure2_slot0;
                        oscard = oscard.bind(yankee)(romeon);
                        _closure5_slot2 = oscard;
                        foxtra = _closure1_slot7;
                        yankee = foxtra.getChannel;
                        backup = _closure1_slot1;
                        oscard = 15;
                        oscard = kiloes[oscard];
                        kiloes = backup.bind(zuuluu)(oscard);
                        backup = kiloes.castMessageIdAsChannelId;
                        oscard = _closure2_slot1;
                        oscard = backup.bind(kiloes)(oscard);
                        oscard = yankee.bind(foxtra)(oscard);
                        yankee = _closure1_slot22;
                        michal = function() {
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                michal = _closure2_slot1;
                                entity = null;
                                if(!(entity == michal)) { _fun00024_ip = 42; continue _fun00023 }
 13:
                                zuuluu = _closure1_slot15;
                                michal = zuuluu.CHANNEL_THREADS;
                                entity = _closure2_slot0;
                                entity = entity.id;
                                tangon = michal.bind(zuuluu)(entity);
                                _fun00024_ip = 74; continue _fun00023;
 42:
                                oscard = _closure1_slot15;
                                zuuluu = oscard.CHANNEL_MESSAGE_THREADS;
                                entity = _closure2_slot0;
                                michal = entity.id;
                                entity = _closure2_slot1;
                                tangon = zuuluu.bind(oscard)(michal, entity);
 74:
                                zuuluu = _closure1_slot0;
                                michal = _closure1_slot2;
                                entity = 16;
                                michal = michal[entity];
                                entity = undefined;
                                entity = zuuluu.bind(entity)(michal);
                                zuuluu = entity.HTTP;
                                michal = zuuluu.post;
                                entity = {};
                                entity['url'] = tangon;
                                tangon = {};
                                golfie = _closure5_slot1;
                                tangon['name'] = golfie;
                                golfie = _closure5_slot0;
                                if(golfie) { _fun00024_ip = 183; continue _fun00023 }
 136:
                                golfie = _closure2_slot0;
                                verify = golfie.type;
                                golfie = _closure1_slot14;
                                golfie = golfie.GUILD_ANNOUNCEMENT;
                                if(!(verify !== golfie)) { _fun00024_ip = 171; continue _fun00023 }
 159:
                                golfie = _closure1_slot14;
                                golfie = golfie.PUBLIC_THREAD;
                                _fun00024_ip = 181; continue _fun00023;
 171:
                                verify = _closure1_slot14;
                                golfie = verify.ANNOUNCEMENT_THREAD;
 181:
                                _fun00024_ip = 193; continue _fun00023;
 183:
                                option = _closure1_slot14;
                                golfie = option.PRIVATE_THREAD;
 193:
                                tangon['type'] = golfie;
                                oscard = _closure5_slot2;
                                tangon['auto_archive_duration'] = oscard;
                                report = _closure2_slot4;
                                tangon['location'] = report;
                                entity['body'] = tangon;
                                tangon = false;
                                entity['rejectWithError'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                return entity;
                            }
                        };
                        michal = yankee.bind(zuuluu)(romeon, michal);
                        SaveGenerator(address=288);
 286:
                        return michal;
 288:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                        if(yankee) { _fun00022_ip = 617; continue _fun00021 }
 297:
                        if(!(michal !== oscard)) { _fun00022_ip = 563; continue _fun00021 }
 304:
                        foxtra = _closure1_slot1;
                        backup = _closure1_slot2;
                        romeon = 17;
                        oscard = backup[romeon];
                        result = foxtra.bind(zuuluu)(oscard);
                        output = result.clearDraft;
                        yankee = _closure2_slot0;
                        sizing = yankee.id;
                        oscard = _closure1_slot8;
                        kiloes = oscard.ThreadSettings;
                        kiloes = output.bind(result)(sizing, kiloes);
                        romeon = backup[romeon];
                        foxtra = foxtra.bind(zuuluu)(romeon);
                        romeon = foxtra.clearDraft;
                        yankee = yankee.id;
                        oscard = oscard.FirstThreadMessage;
                        oscard = romeon.bind(foxtra)(yankee, oscard);
                        oscard = _closure2_slot5;
                        if(!(offset != oscard)) { _fun00022_ip = 404; continue _fun00021 }
 395:
                        oscard = _closure2_slot5;
                        oscard = oscard.bind(zuuluu)(michal);
 404:
                        oscard = _closure2_slot7;
                        if(!(offset != oscard)) { _fun00022_ip = 427; continue _fun00021 }
 412:
                        if(!(offset != golfie)) { _fun00022_ip = 427; continue _fun00021 }
 416:
                        romeon = golfie.length;
                        yankee = 0;
                        if(!(!(romeon > yankee))) { _fun00022_ip = 545; continue _fun00021 }
 427:
                        if(!(offset != option)) { _fun00022_ip = 442; continue _fun00021 }
 431:
                        yankee = option.length;
                        offset = 0;
                        if(!(!(yankee > offset))) { _fun00022_ip = 505; continue _fun00021 }
 442:
                        backup = _closure1_slot1;
                        kiloes = _closure1_slot2;
                        offset = 22;
                        offset = kiloes[offset];
                        foxtra = backup.bind(zuuluu)(offset);
                        romeon = foxtra.sendMessage;
                        yankee = michal.id;
                        offset = 11;
                        offset = kiloes[offset];
                        backup = backup.bind(zuuluu)(offset);
                        offset = backup.parse;
                        offset = offset.bind(backup)(michal, verify);
                        offset = romeon.bind(foxtra)(yankee, offset);
                        _fun00022_ip = 563; continue _fun00021;
 505:
                        yankee = _closure1_slot1;
                        romeon = _closure1_slot2;
                        offset = 22;
                        offset = romeon[offset];
                        romeon = yankee.bind(zuuluu)(offset);
                        yankee = romeon.sendStickers;
                        offset = michal.id;
                        offset = yankee.bind(romeon)(offset, option, verify);
                        _fun00022_ip = 563; continue _fun00021;
 545:
                        vacuum = undefined;
                        ctrled = michal;
                        source = golfie;
                        update = verify;
                        echoed = option;
                        oscard = vacuum[oscard](ctrled, source, update, echoed, result);
 563:
                        golfie = _closure1_slot1;
                        option = _closure1_slot2;
                        oscard = 18;
                        oscard = option[oscard];
                        golfie = golfie.bind(zuuluu)(oscard);
                        oscard = golfie.clearAll;
                        report = _closure2_slot0;
                        report = report.id;
                        tangon = _closure1_slot8;
                        tangon = tangon.FirstThreadMessage;
                        tangon = oscard.bind(golfie)(report, tangon);
                        return zuuluu;
 617:
                        return michal;
 620:
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
        entity = new Array(8);
        entity[0] = romeon;
        entity[1] = yankee;
        entity[2] = offset;
        entity[3] = verify;
        entity[4] = option;
        entity[5] = golfie;
        entity[6] = oscard;
        entity[7] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCreateThreadCommon'] = tangon;
    tangon = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: createThread
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        michal = argGra;
        var _closure2_slot4 = michal;
        zuuluu = _closure1_slot22;
        michal = undefined;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 16;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            zuuluu = entity.HTTP;
            michal = zuuluu.post;
            entity = {};
            golfie = _closure1_slot15;
            oscard = golfie.CHANNEL_THREADS;
            tangon = _closure2_slot0;
            tangon = tangon.id;
            tangon = oscard.bind(golfie)(tangon);
            entity['url'] = tangon;
            tangon = {};
            oscard = _closure2_slot1;
            tangon['name'] = oscard;
            oscard = _closure2_slot2;
            tangon['type'] = oscard;
            oscard = _closure2_slot3;
            tangon['auto_archive_duration'] = oscard;
            report = _closure2_slot4;
            tangon['location'] = report;
            entity['body'] = tangon;
            tangon = false;
            entity['rejectWithError'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    zuuluu['createThread'] = tangon;
    michal = function(argFoo) { // Original name: useCreateForumPostCommon
        michal = argFoo;
        verify = michal.parentChannel;
        var _closure2_slot0 = verify;
        option = michal.name;
        var _closure2_slot1 = option;
        oscard = michal.appliedTags;
        var _closure2_slot2 = oscard;
        golfie = michal.onThreadCreated;
        var _closure2_slot3 = golfie;
        report = michal.upload;
        var _closure2_slot4 = report;
        tangon = _closure1_slot5;
        zuuluu = tangon.useCallback;
        michal = function() {
            tangon = _closure1_slot4;
            zuuluu = undefined;
            michal = function* (argFoo, argBar, argBaz) {
                entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        StartGenerator();
                        golfie = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00026_ip = 503; continue _fun00025 }
 15:
                        zuuluu = argBaz;
                        var _closure5_slot0 = zuuluu;
                        tangon = undefined;
                        var _closure5_slot1 = tangon;
                        var _closure5_slot2 = tangon;
                        oscard = _closure1_slot1;
                        option = _closure1_slot2;
                        zuuluu = 19;
                        zuuluu = option[zuuluu];
                        zuuluu = oscard.bind(tangon)(zuuluu);
                        option = zuuluu.bind(tangon)(golfie);
                        oscard = _closure1_slot3;
                        zuuluu = 2;
                        option = oscard.bind(tangon)(option, zuuluu);
                        yankee = 0;
                        zuuluu = option[yankee];
                        oscard = 1;
                        oscard = option[oscard];
                        verify = golfie;
                        offset = 0;
                        if(!zuuluu) { _fun00026_ip = 139; continue _fun00025 }
 94:
                        golfie = _closure1_slot0;
                        option = _closure1_slot2;
                        zuuluu = 20;
                        zuuluu = option[zuuluu];
                        option = golfie.bind(tangon)(zuuluu);
                        golfie = option.addFlag;
                        zuuluu = _closure1_slot17;
                        zuuluu = zuuluu.SUPPRESS_NOTIFICATIONS;
                        offset = golfie.bind(option)(yankee, zuuluu);
                        verify = oscard;
 139:
                        oscard = _closure1_slot0;
                        golfie = _closure1_slot2;
                        zuuluu = 14;
                        zuuluu = golfie[zuuluu];
                        romeon = oscard.bind(tangon)(zuuluu);
                        option = romeon.getAutoArchiveDuration;
                        golfie = _closure2_slot0;
                        oscard = null;
                        option = option.bind(romeon)(golfie, oscard);
                        foxtra = _closure1_slot15;
                        romeon = foxtra.CHANNEL_THREADS;
                        golfie = golfie.id;
                        romeon = romeon.bind(foxtra)(golfie);
                        golfie = '?use_nested_fields=true';
                        golfie = romeon + golfie;
                        _closure5_slot1 = golfie;
                        golfie = {};
                        romeon = _closure2_slot1;
                        golfie['name'] = romeon;
                        golfie['auto_archive_duration'] = option;
                        option = _closure2_slot2;
                        golfie['applied_tags'] = option;
                        option = {};
                        option['content'] = verify;
                        verify = argBar;
                        option['sticker_ids'] = verify;
                        verify = undefined;
                        if(!(yankee !== offset)) { _fun00026_ip = 261; continue _fun00025 }
 258:
                        verify = offset;
 261:
                        option['flags'] = verify;
                        golfie['message'] = option;
                        _closure5_slot2 = golfie;
                        option = _closure1_slot22;
                        golfie = _closure2_slot0;
                        michal = function() {
                            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                zuuluu = _closure5_slot0;
                                entity = null;
                                if(!(entity != zuuluu)) { _fun00028_ip = 28; continue _fun00027 }
 13:
                                entity = _closure5_slot0;
                                zuuluu = entity.length;
                                entity = 0;
                                if(!(!(zuuluu > entity))) { _fun00028_ip = 95; continue _fun00027 }
 28:
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot2;
                                entity = 16;
                                zuuluu = zuuluu[entity];
                                entity = undefined;
                                entity = tangon.bind(entity)(zuuluu);
                                tangon = entity.HTTP;
                                zuuluu = tangon.post;
                                entity = {};
                                report = _closure5_slot1;
                                entity['url'] = report;
                                report = _closure5_slot2;
                                entity['body'] = report;
                                report = false;
                                entity['rejectWithError'] = report;
                                entity = zuuluu.bind(tangon)(entity);
                                _fun00028_ip = 123; continue _fun00027;
 95:
                                oscard = _closure2_slot4;
                                report = _closure5_slot1;
                                tangon = _closure5_slot2;
                                zuuluu = _closure5_slot0;
                                michal = undefined;
                                entity = oscard.bind(michal)(report, tangon, zuuluu);
 123:
                                return entity;
                            }
                        };
                        michal = option.bind(tangon)(golfie, michal);
                        SaveGenerator(address=296);
 294:
                        return michal;
 296:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                        if(golfie) { _fun00026_ip = 500; continue _fun00025 }
 305:
                        yankee = _closure1_slot1;
                        option = _closure1_slot2;
                        offset = 17;
                        golfie = option[offset];
                        kiloes = yankee.bind(tangon)(golfie);
                        backup = kiloes.clearDraft;
                        verify = _closure2_slot0;
                        foxtra = verify.id;
                        golfie = _closure1_slot8;
                        romeon = golfie.ThreadSettings;
                        romeon = backup.bind(kiloes)(foxtra, romeon);
                        offset = option[offset];
                        backup = yankee.bind(tangon)(offset);
                        foxtra = backup.clearDraft;
                        romeon = verify.id;
                        offset = golfie.FirstThreadMessage;
                        offset = foxtra.bind(backup)(romeon, offset);
                        offset = 18;
                        offset = option[offset];
                        romeon = yankee.bind(tangon)(offset);
                        yankee = romeon.clearAll;
                        offset = verify.id;
                        golfie = golfie.FirstThreadMessage;
                        golfie = yankee.bind(romeon)(offset, golfie);
                        golfie = _closure1_slot0;
                        report = 21;
                        report = option[report];
                        option = golfie.bind(tangon)(report);
                        golfie = option.trackForumPostCreated;
                        report = {};
                        offset = verify.guild_id;
                        report['guildId'] = offset;
                        verify = verify.id;
                        report['channelId'] = verify;
                        verify = michal.id;
                        report['postId'] = verify;
                        report = golfie.bind(option)(report);
                        report = _closure2_slot3;
                        if(!(oscard != report)) { _fun00026_ip = 497; continue _fun00025 }
 488:
                        zuuluu = _closure2_slot3;
                        zuuluu = zuuluu.bind(tangon)(michal);
 497:
                        return michal;
 500:
                        return michal;
 503:
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
        entity = new Array(5);
        entity[0] = verify;
        entity[1] = option;
        entity[2] = golfie;
        entity[3] = oscard;
        entity[4] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCreateForumPostCommon'] = michal;
    return entity;
})();
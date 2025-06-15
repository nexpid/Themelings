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
        zuuluu = function* (argFoo, argBar, argBaz, argCor) {
            entity = function* (argFoo, argBar, argBaz, argCor) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    vacuum = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscard) { _fun00008_ip = 1957; continue _fun00007 }
 15:
                    yankee = vacuum;
                    echoed = argBar;
                    sizing = argBaz;
                    report = argCor;
                    oscard = undefined;
                    config = undefined;
                    var _closure4_slot0 = oscard;
                    option = undefined;
                    verify = undefined;
                    kiloes = undefined;
                    backup = undefined;
                    ctrled = undefined;
                    source = undefined;
                    golfie = undefined;
                    offset = undefined;
                    foxtra = undefined;
                    romeon = undefined;
                    result = undefined;
                    output = undefined;
                    zuuluu = undefined;
                    update = vacuum.isForumLikeChannel;
                    option = update.bind(vacuum)();
 71: // try_start_0
                    report = report.bind(oscard)();
                    SaveGenerator(address=79);
 77:
                    return report;
 79:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=19);
                    if(update) { _fun00008_ip = 375; continue _fun00007 }
 88:
                    config = report;
                    _closure4_slot0 = report;
                    vacuum = report.body;
                    update = null;
                    if(!(update != vacuum)) { _fun00008_ip = 231; continue _fun00007 }
 109:
                    vacuum = _closure1_slot1;
                    sequen = _closure1_slot2;
                    update = 26;
                    record = sequen[update];
                    papara = vacuum.bind(oscard)(record);
                    cntext = papara.dispatch;
                    record = {};
                    status = 'SLOWMODE_RESET_COOLDOWN';
                    record['type'] = status;
                    target = _closure1_slot10;
                    target = target.CreateThread;
                    record['slowmodeType'] = target;
                    target = yankee;
                    target = target.id;
                    record['channelId'] = target;
                    record = cntext.bind(papara)(record);
                    update = sequen[update];
                    sequen = vacuum.bind(oscard)(update);
                    vacuum = sequen.dispatch;
                    update = {};
                    record = 'THREAD_CREATE_LOCAL';
                    update['type'] = record;
                    config = config.body;
                    config = config.id;
                    update['channelId'] = config;
                    update = vacuum.bind(sequen)(update);
                    _fun00008_ip = 370; continue _fun00007;
 231:
                    vacuum = _closure1_slot1;
                    target = _closure1_slot2;
                    update = 25;
                    update = target[update];
                    sequen = vacuum.bind(oscard)(update);
                    vacuum = sequen.show;
                    update = {};
                    papara = _closure1_slot0;
                    config = 13;
                    record = target[config];
                    record = papara.bind(oscard)(record);
                    status = record.intl;
                    cntext = status.string;
                    record = target[config];
                    record = papara.bind(oscard)(record);
                    record = record.t;
                    record = record.j2d6Ki;
                    record = cntext.bind(status)(record);
                    update['title'] = record;
                    record = target[config];
                    record = papara.bind(oscard)(record);
                    cntext = record.intl;
                    record = cntext.string;
                    config = target[config];
                    config = papara.bind(oscard)(config);
                    config = config.t;
                    config = config.fEptJC;
                    config = record.bind(cntext)(config);
                    update['body'] = config;
                    update = vacuum.bind(sequen)(update);
 370: // try_end0
                    _fun00008_ip = 1829; continue _fun00007;
 375:
                    return report;
 378: // catch_target0
                    CatchBlockStart(arg_register=4);
                    tangon = report;
                    var _closure4_slot1 = report;
                    update = report.body;
                    verify = update;
                    report = null;
                    update = report == update;
                    vacuum = undefined;
                    if(update) { _fun00008_ip = 411; continue _fun00007 }
 406:
                    vacuum = verify.code;
 411:
                    update = _closure1_slot13;
                    update = update.TOO_MANY_THREADS;
                    if(!(vacuum !== update)) { _fun00008_ip = 1646; continue _fun00007 }
 431:
                    update = tangon;
                    update = update.body;
                    kiloes = update;
                    vacuum = report == update;
                    update = undefined;
                    if(vacuum) { _fun00008_ip = 456; continue _fun00007 }
 451:
                    update = kiloes.code;
 456:
                    kiloes = _closure1_slot13;
                    kiloes = kiloes.TOO_MANY_ANNOUNCEMENT_THREADS;
                    if(!(update !== kiloes)) { _fun00008_ip = 1505; continue _fun00007 }
 473:
                    kiloes = tangon;
                    kiloes = kiloes.body;
                    backup = kiloes;
                    update = report == kiloes;
                    kiloes = undefined;
                    if(update) { _fun00008_ip = 498; continue _fun00007 }
 493:
                    kiloes = backup.code;
 498:
                    backup = _closure1_slot13;
                    backup = backup.SLOWMODE_RATE_LIMITED;
                    if(!(kiloes !== backup)) { _fun00008_ip = 1360; continue _fun00007 }
 515:
                    backup = tangon;
                    kiloes = backup.status;
                    backup = 429;
                    if(!(backup !== kiloes)) { _fun00008_ip = 1188; continue _fun00007 }
 536:
                    update = _closure1_slot11;
                    kiloes = update.has;
                    backup = tangon;
                    backup = backup.body;
                    ctrled = backup;
                    vacuum = report == backup;
                    backup = undefined;
                    if(vacuum) { _fun00008_ip = 570; continue _fun00007 }
 565:
                    backup = ctrled.code;
 570:
                    backup = kiloes.bind(update)(backup);
                    if(backup) { _fun00008_ip = 1183; continue _fun00007 }
 581:
                    update = _closure1_slot12;
                    kiloes = update.has;
                    backup = tangon;
                    backup = backup.body;
                    source = backup;
                    ctrled = report == backup;
                    backup = undefined;
                    if(ctrled) { _fun00008_ip = 615; continue _fun00007 }
 610:
                    backup = source.code;
 615:
                    backup = kiloes.bind(update)(backup);
                    if(backup) { _fun00008_ip = 767; continue _fun00007 }
 626:
                    kiloes = _closure1_slot1;
                    config = _closure1_slot2;
                    backup = 25;
                    backup = config[backup];
                    update = kiloes.bind(oscard)(backup);
                    kiloes = update.show;
                    backup = {};
                    sequen = _closure1_slot0;
                    source = 13;
                    ctrled = config[source];
                    ctrled = sequen.bind(oscard)(ctrled);
                    record = ctrled.intl;
                    vacuum = record.string;
                    ctrled = config[source];
                    ctrled = sequen.bind(oscard)(ctrled);
                    ctrled = ctrled.t;
                    ctrled = ctrled.j2d6Ki;
                    ctrled = vacuum.bind(record)(ctrled);
                    backup['title'] = ctrled;
                    ctrled = config[source];
                    ctrled = sequen.bind(oscard)(ctrled);
                    vacuum = ctrled.intl;
                    ctrled = vacuum.string;
                    source = config[source];
                    source = sequen.bind(oscard)(source);
                    source = source.t;
                    source = source.fEptJC;
                    source = ctrled.bind(vacuum)(source);
                    backup['body'] = source;
                    backup = kiloes.bind(update)(backup);
                    _fun00008_ip = 1829; continue _fun00007;
 767:
                    backup = sizing;
                    if(!(report != backup)) { _fun00008_ip = 1145; continue _fun00007 }
 777:
                    backup = tangon;
                    backup = backup.body;
                    foxtra = backup;
                    kiloes = report == backup;
                    backup = undefined;
                    if(kiloes) { _fun00008_ip = 802; continue _fun00007 }
 797:
                    backup = foxtra.code;
 802:
                    foxtra = _closure1_slot13;
                    foxtra = foxtra.EXPLICIT_CONTENT;
                    if(!(backup !== foxtra)) { _fun00008_ip = 960; continue _fun00007 }
 819:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    foxtra = 22;
                    foxtra = kiloes[foxtra];
                    kiloes = backup.bind(oscard)(foxtra);
                    backup = kiloes.handleUploadMessageAttachmentsErrors;
                    foxtra = {};
                    foxtra['file'] = sizing;
                    update = yankee;
                    sizing = update.getGuildId;
                    sizing = sizing.bind(update)();
                    foxtra['guildId'] = sizing;
                    sizing = echoed;
                    if(!(report == sizing)) { _fun00008_ip = 882; continue _fun00007 }
 876:
                    sizing = new Array(0);
                    _fun00008_ip = 885; continue _fun00007;
 882:
                    sizing = echoed;
 885:
                    foxtra['analyticsLocations'] = sizing;
                    sizing = tangon;
                    sizing = sizing.body;
                    result = sizing;
                    echoed = report == sizing;
                    sizing = undefined;
                    if(echoed) { _fun00008_ip = 915; continue _fun00007 }
 910:
                    sizing = result.code;
 915:
                    foxtra['code'] = sizing;
                    sizing = tangon;
                    sizing = sizing.body;
                    output = sizing;
                    result = report == sizing;
                    sizing = undefined;
                    if(result) { _fun00008_ip = 945; continue _fun00007 }
 939:
                    sizing = output.reason;
 945:
                    foxtra['reason'] = sizing;
                    foxtra = backup.bind(kiloes)(foxtra);
                    _fun00008_ip = 1145; continue _fun00007;
 960:
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    foxtra = 28;
                    foxtra = kiloes[foxtra];
                    backup = backup.bind(oscard)(foxtra);
                    foxtra = backup.createNonce;
                    romeon = foxtra.bind(backup)();
                    backup = tangon;
                    backup = backup.body;
                    backup = backup.attachments;
                    backup = report != backup;
                    foxtra = backup;
                    if(!backup) { _fun00008_ip = 1039; continue _fun00007 }
 1014:
                    backup = tangon;
                    backup = backup.body;
                    backup = backup.attachments;
                    kiloes = backup.length;
                    backup = 0;
                    foxtra = kiloes > backup;
 1039:
                    if(!foxtra) { _fun00008_ip = 1145; continue _fun00007 }
 1042:
                    kiloes = _closure1_slot1;
                    sizing = _closure1_slot2;
                    foxtra = 26;
                    foxtra = sizing[foxtra];
                    result = kiloes.bind(oscard)(foxtra);
                    output = result.dispatch;
                    foxtra = {};
                    backup = 'MESSAGE_EXPLICIT_CONTENT_FP_CREATE';
                    foxtra['type'] = backup;
                    backup = romeon;
                    foxtra['messageId'] = backup;
                    romeon = yankee;
                    echoed = romeon.id;
                    foxtra['channelId'] = echoed;
                    echoed = tangon;
                    echoed = echoed.body;
                    echoed = echoed.attachments;
                    foxtra['attachments'] = echoed;
                    foxtra = output.bind(result)(foxtra);
                    foxtra = 29;
                    foxtra = sizing[foxtra];
                    foxtra = kiloes.bind(oscard)(foxtra);
                    romeon = romeon.id;
                    romeon = foxtra.bind(oscard)(romeon, backup);
 1145:
                    romeon = global;
                    backup = romeon.Promise;
                    romeon = backup.prototype;
                    foxtra = Object.create(romeon, {constructor: {value: backup}});
                    limora = function(argFoo, argBar) {
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
                                    michal = 26;
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
                    whisks = foxtra;
                    romeon = new whisks[backup](limora, sierra);
                    romeon = romeon instanceof Object ? romeon : foxtra;
                    return romeon;
 1183:
                    romeon = tangon;
                    throw romeon;
 1188:
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    romeon = 25;
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
                    if(kiloes) { _fun00008_ip = 1279; continue _fun00007 }
 1266:
                    kiloes = sizing.1KEdvL;
                    kiloes = output.bind(result)(kiloes);
                    _fun00008_ip = 1290; continue _fun00007;
 1279:
                    sizing = sizing.vWNFk5;
                    kiloes = output.bind(result)(sizing);
 1290:
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
                    _fun00008_ip = 1829; continue _fun00007;
 1360:
                    tangon = tangon.body;
                    tangon = tangon.retry_after;
                    golfie = tangon;
                    romeon = report != tangon;
                    report = 0;
                    tangon = 0;
                    if(!romeon) { _fun00008_ip = 1388; continue _fun00007 }
 1385:
                    tangon = golfie;
 1388:
                    offset = tangon;
                    if(!(tangon > report)) { _fun00008_ip = 1829; continue _fun00007 }
 1398:
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    tangon = 26;
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
                    offset = 27;
                    offset = foxtra[offset];
                    offset = romeon.bind(oscard)(offset);
                    offset = offset.Millis;
                    offset = offset.SECOND;
                    offset = yankee * offset;
                    tangon['cooldownMs'] = offset;
                    tangon = report.bind(golfie)(tangon);
                    _fun00008_ip = 1829; continue _fun00007;
 1505:
                    report = _closure1_slot1;
                    backup = _closure1_slot2;
                    tangon = 25;
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
                    _fun00008_ip = 1829; continue _fun00007;
 1646:
                    report = _closure1_slot1;
                    golfie = _closure1_slot2;
                    tangon = 25;
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
                    if(offset) { _fun00008_ip = 1737; continue _fun00007 }
 1724:
                    offset = yankee.1KEdvL;
                    offset = romeon.bind(backup)(offset);
                    _fun00008_ip = 1748; continue _fun00007;
 1737:
                    yankee = yankee.vWNFk5;
                    offset = romeon.bind(backup)(yankee);
 1748:
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
                    if(option) { _fun00008_ip = 1809; continue _fun00007 }
 1796:
                    option = verify.P0wT5e;
                    option = offset.bind(yankee)(option);
                    _fun00008_ip = 1820; continue _fun00007;
 1809:
                    verify = verify.KGaiEB;
                    option = offset.bind(yankee)(verify);
 1820:
                    tangon['body'] = option;
                    tangon = report.bind(golfie)(tangon);
 1829:
                    tangon = global;
                    report = tangon.Promise;
                    tangon = report.prototype;
                    tangon = Object.create(tangon, {constructor: {value: report}});
                    limora = function(argFoo, argBar) {
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
                                    michal = 26;
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
                    whisks = tangon;
                    michal = new whisks[report](limora, sierra);
                    michal = michal instanceof Object ? michal : tangon;
                    SaveGenerator(address=1868);
 1866:
                    return michal;
 1868:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 1954; continue _fun00007 }
 1874:
                    zuuluu = michal;
 1877: // try_start_1
                    report = _closure1_slot1;
                    option = _closure1_slot2;
                    tangon = 24;
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
                    SaveGenerator(address=1938);
 1936:
                    return tangon;
 1938:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                    if(report) { _fun00008_ip = 1946; continue _fun00007 }
 1944: // try_end1
                    _fun00008_ip = 1951; continue _fun00007;
 1946:
                    return tangon;
 1949: // catch_target1
                    CatchBlockStart(arg_register=3);
 1951:
                    return zuuluu;
 1954:
                    return michal;
 1957:
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
    golfie = 30;
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
                        if(zuuluu) { _fun00022_ip = 631; continue _fun00021 }
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
                        foxtra = _closure2_slot0;
                        oscard = oscard.bind(yankee)(foxtra);
                        _closure5_slot2 = oscard;
                        romeon = _closure1_slot7;
                        yankee = romeon.getChannel;
                        backup = _closure1_slot1;
                        oscard = 15;
                        oscard = kiloes[oscard];
                        kiloes = backup.bind(zuuluu)(oscard);
                        backup = kiloes.castMessageIdAsChannelId;
                        oscard = _closure2_slot1;
                        oscard = backup.bind(kiloes)(oscard);
                        oscard = yankee.bind(romeon)(oscard);
                        romeon = _closure1_slot22;
                        source = new Array(0);
                        echoed = function() {
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
                        vacuum = undefined;
                        ctrled = foxtra;
                        update = undefined;
                        michal = vacuum[romeon](ctrled, source, update, echoed, result);
                        SaveGenerator(address=299);
 297:
                        return michal;
 299:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=10);
                        if(yankee) { _fun00022_ip = 628; continue _fun00021 }
 308:
                        if(!(michal !== oscard)) { _fun00022_ip = 574; continue _fun00021 }
 315:
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
                        if(!(offset != oscard)) { _fun00022_ip = 415; continue _fun00021 }
 406:
                        oscard = _closure2_slot5;
                        oscard = oscard.bind(zuuluu)(michal);
 415:
                        oscard = _closure2_slot7;
                        if(!(offset != oscard)) { _fun00022_ip = 438; continue _fun00021 }
 423:
                        if(!(offset != golfie)) { _fun00022_ip = 438; continue _fun00021 }
 427:
                        romeon = golfie.length;
                        yankee = 0;
                        if(!(!(romeon > yankee))) { _fun00022_ip = 556; continue _fun00021 }
 438:
                        if(!(offset != option)) { _fun00022_ip = 453; continue _fun00021 }
 442:
                        yankee = option.length;
                        offset = 0;
                        if(!(!(yankee > offset))) { _fun00022_ip = 516; continue _fun00021 }
 453:
                        backup = _closure1_slot1;
                        kiloes = _closure1_slot2;
                        offset = 24;
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
                        _fun00022_ip = 574; continue _fun00021;
 516:
                        yankee = _closure1_slot1;
                        romeon = _closure1_slot2;
                        offset = 24;
                        offset = romeon[offset];
                        romeon = yankee.bind(zuuluu)(offset);
                        yankee = romeon.sendStickers;
                        offset = michal.id;
                        offset = yankee.bind(romeon)(offset, option, verify);
                        _fun00022_ip = 574; continue _fun00021;
 556:
                        vacuum = undefined;
                        ctrled = michal;
                        source = golfie;
                        update = verify;
                        echoed = option;
                        oscard = vacuum[oscard](ctrled, source, update, echoed, result);
 574:
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
 628:
                        return michal;
 631:
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
        report = argFoo;
        var _closure2_slot0 = report;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        michal = argGra;
        var _closure2_slot4 = michal;
        tangon = _closure1_slot22;
        option = new Array(0);
        oscard = function() {
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
        offset = undefined;
        verify = report;
        golfie = undefined;
        entity = offset[tangon](verify, option, golfie, oscard, report);
        return entity;
    };
    zuuluu['createThread'] = tangon;
    michal = function(argFoo) { // Original name: useCreateForumPostCommon
        michal = argFoo;
        offset = michal.parentChannel;
        var _closure2_slot0 = offset;
        verify = michal.name;
        var _closure2_slot1 = verify;
        option = michal.appliedTags;
        var _closure2_slot2 = option;
        oscard = michal.analyticsLocations;
        var _closure2_slot3 = oscard;
        golfie = michal.onThreadCreated;
        var _closure2_slot4 = golfie;
        report = michal.upload;
        var _closure2_slot5 = report;
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
                        foxtra = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00026_ip = 715; continue _fun00025 }
 15:
                        tangon = argBaz;
                        report = undefined;
                        yankee = undefined;
                        var _closure5_slot0 = report;
                        romeon = undefined;
                        var _closure5_slot1 = report;
                        golfie = undefined;
                        oscard = undefined;
                        offset = _closure1_slot1;
                        backup = _closure1_slot2;
                        verify = 19;
                        verify = backup[verify];
                        verify = offset.bind(report)(verify);
                        backup = verify.bind(report)(foxtra);
                        offset = _closure1_slot3;
                        verify = 2;
                        kiloes = offset.bind(report)(backup, verify);
                        backup = 0;
                        verify = kiloes[backup];
                        offset = 1;
                        offset = kiloes[offset];
                        sizing = foxtra;
                        output = 0;
                        if(!verify) { _fun00026_ip = 143; continue _fun00025 }
 98:
                        foxtra = _closure1_slot0;
                        kiloes = _closure1_slot2;
                        verify = 20;
                        verify = kiloes[verify];
                        kiloes = foxtra.bind(report)(verify);
                        foxtra = kiloes.addFlag;
                        verify = _closure1_slot17;
                        verify = verify.SUPPRESS_NOTIFICATIONS;
                        output = foxtra.bind(kiloes)(backup, verify);
                        sizing = offset;
 143:
                        offset = _closure1_slot0;
                        foxtra = _closure1_slot2;
                        verify = 14;
                        verify = foxtra[verify];
                        result = offset.bind(report)(verify);
                        kiloes = result.getAutoArchiveDuration;
                        foxtra = _closure2_slot0;
                        offset = null;
                        kiloes = kiloes.bind(result)(foxtra, offset);
                        echoed = _closure1_slot15;
                        result = echoed.CHANNEL_THREADS;
                        foxtra = foxtra.id;
                        result = result.bind(echoed)(foxtra);
                        foxtra = '?use_nested_fields=true';
                        foxtra = result + foxtra;
                        _closure5_slot0 = foxtra;
                        foxtra = {};
                        result = _closure2_slot1;
                        foxtra['name'] = result;
                        foxtra['auto_archive_duration'] = kiloes;
                        kiloes = _closure2_slot2;
                        foxtra['applied_tags'] = kiloes;
                        kiloes = {};
                        kiloes['content'] = sizing;
                        sizing = argBar;
                        kiloes['sticker_ids'] = sizing;
                        sizing = undefined;
                        if(!(backup !== output)) { _fun00026_ip = 265; continue _fun00025 }
 262:
                        sizing = output;
 265:
                        kiloes['flags'] = sizing;
                        foxtra['message'] = kiloes;
                        romeon = foxtra;
                        _closure5_slot1 = foxtra;
                        foxtra = tangon;
                        if(!(offset != foxtra)) { _fun00026_ip = 361; continue _fun00025 }
 287:
                        foxtra = tangon;
                        foxtra = foxtra.length;
                        if(!(foxtra > backup)) { _fun00026_ip = 361; continue _fun00025 }
 299: // try_start_0
                        foxtra = _closure2_slot5;
                        tangon = foxtra.bind(report)(tangon);
                        SaveGenerator(address=312);
 310:
                        return tangon;
 312:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=12);
                        if(foxtra) { _fun00026_ip = 600; continue _fun00025 }
 321:
                        yankee = tangon.uploaderFile;
                        foxtra = romeon.message;
                        kiloes = tangon.files;
                        backup = kiloes.map;
                        romeon = function(argFoo, argBar) {
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 21;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.getAttachmentPayload;
                            michal = argFoo;
                            entity = argBar;
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        romeon = backup.bind(kiloes)(romeon);
                        foxtra['attachments'] = romeon;
 361: // try_end0
                        backup = _closure1_slot22;
                        vacuum = _closure2_slot0;
                        ctrled = _closure2_slot3;
                        source = yankee;
                        update = function() {
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 16;
                            michal = michal[entity];
                            entity = undefined;
                            entity = zuuluu.bind(entity)(michal);
                            zuuluu = entity.HTTP;
                            michal = zuuluu.post;
                            entity = {};
                            report = _closure5_slot0;
                            entity['url'] = report;
                            tangon = _closure5_slot1;
                            entity['body'] = tangon;
                            tangon = false;
                            entity['rejectWithError'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        sequen = undefined;
                        option = sequen[backup](vacuum, ctrled, source, update, echoed);
                        SaveGenerator(address=393);
 391:
                        return option;
 393:
                        ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                        if(yankee) { _fun00026_ip = 597; continue _fun00025 }
 402:
                        kiloes = _closure1_slot1;
                        foxtra = _closure1_slot2;
                        romeon = 17;
                        yankee = foxtra[romeon];
                        echoed = kiloes.bind(report)(yankee);
                        result = echoed.clearDraft;
                        backup = _closure2_slot0;
                        output = backup.id;
                        yankee = _closure1_slot8;
                        sizing = yankee.ThreadSettings;
                        sizing = result.bind(echoed)(output, sizing);
                        romeon = foxtra[romeon];
                        result = kiloes.bind(report)(romeon);
                        output = result.clearDraft;
                        sizing = backup.id;
                        romeon = yankee.FirstThreadMessage;
                        romeon = output.bind(result)(sizing, romeon);
                        romeon = 18;
                        romeon = foxtra[romeon];
                        sizing = kiloes.bind(report)(romeon);
                        kiloes = sizing.clearAll;
                        romeon = backup.id;
                        yankee = yankee.FirstThreadMessage;
                        yankee = kiloes.bind(sizing)(romeon, yankee);
                        romeon = _closure1_slot0;
                        yankee = 23;
                        yankee = foxtra[yankee];
                        foxtra = romeon.bind(report)(yankee);
                        romeon = foxtra.trackForumPostCreated;
                        yankee = {};
                        kiloes = backup.guild_id;
                        yankee['guildId'] = kiloes;
                        backup = backup.id;
                        yankee['channelId'] = backup;
                        backup = option.id;
                        yankee['postId'] = backup;
                        yankee = romeon.bind(foxtra)(yankee);
                        yankee = _closure2_slot4;
                        if(!(offset != yankee)) { _fun00026_ip = 594; continue _fun00025 }
 585:
                        yankee = _closure2_slot4;
                        yankee = yankee.bind(report)(option);
 594:
                        return option;
 597:
                        return option;
 600:
                        return tangon;
 603: // catch_target0
                        CatchBlockStart(arg_register=3);
                        michal = tangon;
                        option = tangon.file;
                        golfie = tangon.code;
                        oscard = tangon.reason;
                        tangon = _closure1_slot0;
                        yankee = _closure1_slot2;
                        zuuluu = 22;
                        zuuluu = yankee[zuuluu];
                        report = tangon.bind(report)(zuuluu);
                        tangon = report.handleUploadMessageAttachmentsErrors;
                        zuuluu = {};
                        zuuluu['file'] = option;
                        yankee = _closure2_slot0;
                        option = yankee.getGuildId;
                        option = option.bind(yankee)();
                        zuuluu['guildId'] = option;
                        option = _closure2_slot3;
                        if(!(offset == option)) { _fun00026_ip = 690; continue _fun00025 }
 684:
                        option = new Array(0);
                        _fun00026_ip = 694; continue _fun00025;
 690:
                        option = _closure2_slot3;
 694:
                        zuuluu['analyticsLocations'] = option;
                        zuuluu['code'] = golfie;
                        zuuluu['reason'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        throw michal;
 715:
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
        entity = new Array(6);
        entity[0] = offset;
        entity[1] = verify;
        entity[2] = option;
        entity[3] = golfie;
        entity[4] = oscard;
        entity[5] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useCreateForumPostCommon'] = michal;
    return entity;
})();
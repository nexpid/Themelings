// app/modules/activities/EmbeddedActivitiesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _runPrimaryAppCommandOrJoinEmbeddedActivity
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 1637; continue _fun00001 }
 15:
                    romeon = michal.channelId;
                    foxtra = michal.applicationId;
                    verify = michal.isStart;
                    equals = michal.analyticsLocations;
                    whisks = michal.locationObject;
                    papara = michal.embeddedActivitiesManager;
                    variable37 = michal.componentId;
                    source = michal.commandOrigin;
                    update = michal.sectionName;
                    echoed = michal.source;
                    limora = michal.partyId;
                    result = michal.onExecutedCallback;
                    sierra = michal.referrerId;
                    variable38 = michal.customId;
                    cntext = michal.joinUserId;
                    record = michal.joinSessionId;
                    config = michal.secret;
                    status = michal.inviterUserId;
                    ctrled = michal.instanceId;
                    tangon = michal.isContextlessActivity;
                    offset = undefined;
                    kiloes = undefined;
                    zuuluu = undefined;
                    sizing = undefined;
                    backup = undefined;
                    variable36 = undefined;
                    vacuum = undefined;
                    oscard = undefined;
                    SaveGenerator(address=152);
 150:
                    return offset;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 1634; continue _fun00001 }
 161:
                    sequen = _closure1_slot9;
                    output = sequen.getChannel;
                    yankee = romeon;
                    output = output.bind(sequen)(yankee);
                    kiloes = output;
                    yankee = null;
                    output = yankee == output;
                    sequen = undefined;
                    if(output) { _fun00002_ip = 208; continue _fun00001 }
 195:
                    target = kiloes;
                    output = target.getGuildId;
                    sequen = output.bind(target)();
 208:
                    target = yankee != sequen;
                    output = undefined;
                    if(!target) { _fun00002_ip = 220; continue _fun00001 }
 217:
                    output = sequen;
 220:
                    zuuluu = output;
                    sequen = _closure1_slot0;
                    target = _closure1_slot2;
                    output = 17;
                    output = target[output];
                    sequen = sequen.bind(offset)(output);
                    output = sequen.getIsContextlessActivitiesExperimentEnabled;
                    output = output.bind(sequen)();
                    sizing = output;
                    if(output) { _fun00002_ip = 303; continue _fun00001 }
 259:
                    output = zuuluu;
                    if(!(yankee == output)) { _fun00002_ip = 303; continue _fun00001 }
 266:
                    output = kiloes;
                    sequen = yankee == output;
                    output = undefined;
                    if(sequen) { _fun00002_ip = 291; continue _fun00001 }
 278:
                    target = kiloes;
                    sequen = target.isPrivate;
                    output = sequen.bind(target)();
 291:
                    if(!(yankee != output)) { _fun00002_ip = 298; continue _fun00001 }
 295:
                    if(output) { _fun00002_ip = 303; continue _fun00001 }
 298:
                    output = false;
                    return output;
 303:
                    sequen = _closure1_slot0;
                    target = _closure1_slot2;
                    output = 18;
                    output = target[output];
                    sequen = sequen.bind(offset)(output);
                    output = sequen.createNonce;
                    backup = output.bind(sequen)();
 333: // try_start_0
                    target = _closure1_slot1;
                    sequen = _closure1_slot2;
                    output = 19;
                    sequen = sequen[output];
                    quebec = target.bind(offset)(sequen);
                    target = quebec.dispatch;
                    sequen = {};
                    variable39 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
                    sequen['type'] = variable39;
                    variable39 = backup;
                    sequen['nonce'] = variable39;
                    variable39 = foxtra;
                    sequen['applicationId'] = variable39;
                    variable39 = romeon;
                    variable40 = yankee != variable39;
                    variable39 = null;
                    if(!variable40) { _fun00002_ip = 398; continue _fun00001 }
 395:
                    variable39 = romeon;
 398:
                    sequen['channelId'] = variable39;
                    sequen['componentId'] = variable37;
                    variable37 = equals;
                    sequen['analyticsLocations'] = variable37;
                    variable37 = echoed;
                    sequen['source'] = variable37;
                    variable37 = source;
                    sequen['commandOrigin'] = variable37;
                    variable37 = status;
                    sequen['inviterUserId'] = variable37;
                    variable37 = {};
                    variable37['customId'] = variable38;
                    variable38 = sierra;
                    variable37['referrerId'] = variable38;
                    sequen['launchParams'] = variable37;
                    sequen = target.bind(quebec)(sequen);
                    target = _closure1_slot12;
                    sequen = target.getCurrentUser;
                    sequen = sequen.bind(target)();
                    variable36 = sequen;
                    if(!(yankee != sequen)) { _fun00002_ip = 656; continue _fun00001 }
 486:
                    target = _closure1_slot1;
                    quebec = _closure1_slot2;
                    sequen = 20;
                    sequen = quebec[sequen];
                    target = target.bind(offset)(sequen);
                    sequen = {};
                    quebec = verify;
                    variable37 = _closure1_slot18;
                    if(quebec) { _fun00002_ip = 526; continue _fun00001 }
 518:
                    quebec = variable37.JOIN;
                    _fun00002_ip = 532; continue _fun00001;
 526:
                    quebec = variable37.LAUNCH;
 532:
                    sequen['type'] = quebec;
                    quebec = variable36;
                    variable37 = yankee == quebec;
                    quebec = undefined;
                    if(variable37) { _fun00002_ip = 553; continue _fun00001 }
 548:
                    quebec = variable36.id;
 553:
                    sequen['userId'] = quebec;
                    quebec = zuuluu;
                    sequen['guildId'] = quebec;
                    quebec = romeon;
                    sequen['channelId'] = quebec;
                    quebec = kiloes;
                    variable36 = yankee == quebec;
                    quebec = undefined;
                    if(variable36) { _fun00002_ip = 591; continue _fun00001 }
 583:
                    variable36 = kiloes;
                    quebec = variable36.type;
 591:
                    sequen['channelType'] = quebec;
                    quebec = foxtra;
                    sequen['applicationId'] = quebec;
                    sequen['locationObject'] = whisks;
                    whisks = equals;
                    if(!(yankee == whisks)) { _fun00002_ip = 621; continue _fun00001 }
 615:
                    whisks = new Array(0);
                    _fun00002_ip = 624; continue _fun00001;
 621:
                    whisks = equals;
 624:
                    sequen['analyticsLocations'] = whisks;
                    whisks = echoed;
                    sequen['source'] = whisks;
                    sequen['partyId'] = limora;
                    sequen['referrerId'] = sierra;
                    sequen['inviterUserId'] = status;
                    sequen = target.bind(offset)(sequen);
 656:
                    sequen = verify;
                    if(!sequen) { _fun00002_ip = 672; continue _fun00001 }
 662:
                    sequen = romeon;
                    if(!(yankee == sequen)) { _fun00002_ip = 865; continue _fun00001 }
 672:
                    sequen = {};
                    target = foxtra;
                    sequen['applicationId'] = target;
                    target = romeon;
                    sequen['channelId'] = target;
                    sequen['embeddedActivitiesManager'] = papara;
                    papara = verify;
                    sequen['isStart'] = papara;
                    papara = zuuluu;
                    sequen['guildId'] = papara;
                    sequen['joinUserId'] = cntext;
                    sequen['joinSessionId'] = record;
                    sequen['secret'] = config;
                    sequen['instanceId'] = ctrled;
                    ctrled = tangon;
                    sequen['isContextlessActivity'] = ctrled;
                    ctrled = function() { // Original name: joinEmbeddedActivity
                        entity = undefined;
                        tangon = _closure1_slot29;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    ctrled = ctrled.bind(offset)(sequen);
                    SaveGenerator(address=750);
 748:
                    return ctrled;
 750:
                    ResumeGenerator(result_out_reg=21, return_bool_out_reg=23);
                    if(sequen) { _fun00002_ip = 862; continue _fun00001 }
 756:
                    vacuum = ctrled;
                    sequen = result;
                    if(!(yankee != sequen)) { _fun00002_ip = 773; continue _fun00001 }
 766:
                    sequen = result;
                    sequen = sequen.bind(offset)();
 773:
                    sequen = vacuum;
                    config = sequen.result;
                    sequen = 'failure';
                    if(!(sequen === config)) { _fun00002_ip = 1221; continue _fun00001 }
 793:
                    config = _closure1_slot1;
                    cntext = _closure1_slot2;
                    sequen = 21;
                    record = cntext[sequen];
                    record = config.bind(offset)(record);
                    sequen = cntext[sequen];
                    sequen = config.bind(offset)(sequen);
                    sequen = sequen.Reasons;
                    variable42 = sequen.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                    variable41 = vacuum.reason;
                    sequen = record.prototype;
                    sequen = Object.create(sequen, {constructor: {value: record}});
                    variable43 = sequen;
                    vacuum = new variable43[record](variable42, variable41, variable40);
                    vacuum = vacuum instanceof Object ? vacuum : sequen;
                    throw vacuum;
 862: // try_end0
                    return ctrled;
 865: // try_start_1
                    sequen = foxtra;
                    config = kiloes;
                    kiloes = yankee == config;
                    ctrled = undefined;
                    if(kiloes) { _fun00002_ip = 885; continue _fun00001 }
 880:
                    ctrled = config.type;
 885:
                    kiloes = _closure1_slot20;
                    kiloes = kiloes.GUILD_VOICE;
                    kiloes = ctrled === kiloes;
                    vacuum = _closure1_slot5;
                    ctrled = vacuum.getApplication;
                    ctrled = ctrled.bind(vacuum)(sequen);
                    vacuum = yankee != ctrled;
                    if(!vacuum) { _fun00002_ip = 968; continue _fun00001 }
 921:
                    record = _closure1_slot0;
                    cntext = _closure1_slot2;
                    sequen = 25;
                    sequen = cntext[sequen];
                    cntext = record.bind(offset)(sequen);
                    record = cntext.hasFlag;
                    sequen = ctrled.flags;
                    ctrled = _closure1_slot19;
                    ctrled = ctrled.EMBEDDED;
                    vacuum = record.bind(cntext)(sequen, ctrled);
 968:
                    sequen = _closure1_slot0;
                    record = _closure1_slot2;
                    ctrled = 26;
                    ctrled = record[ctrled];
                    sequen = sequen.bind(offset)(ctrled);
                    ctrled = sequen.isActivityInTextSupportedForChannel;
                    ctrled = ctrled.bind(sequen)(config);
                    if(!kiloes) { _fun00002_ip = 1005; continue _fun00001 }
 1002:
                    kiloes = vacuum;
 1005:
                    if(kiloes) { _fun00002_ip = 1011; continue _fun00001 }
 1008:
                    kiloes = ctrled;
 1011:
                    if(kiloes) { _fun00002_ip = 1077; continue _fun00001 }
 1014:
                    ctrled = _closure1_slot1;
                    sequen = _closure1_slot2;
                    kiloes = 21;
                    vacuum = sequen[kiloes];
                    vacuum = ctrled.bind(offset)(vacuum);
                    kiloes = sequen[kiloes];
                    kiloes = ctrled.bind(offset)(kiloes);
                    kiloes = kiloes.Reasons;
                    variable42 = kiloes.INVALID_CHANNEL;
                    ctrled = vacuum.prototype;
                    ctrled = Object.create(ctrled, {constructor: {value: vacuum}});
                    variable43 = ctrled;
                    kiloes = new variable43[vacuum](variable42, variable41);
                    kiloes = kiloes instanceof Object ? kiloes : ctrled;
                    throw kiloes;
 1077:
                    kiloes = {};
                    ctrled = foxtra;
                    kiloes['applicationId'] = ctrled;
                    ctrled = backup;
                    kiloes['nonce'] = ctrled;
                    ctrled = romeon;
                    kiloes['channelId'] = ctrled;
                    ctrled = zuuluu;
                    kiloes['guildId'] = ctrled;
                    kiloes['commandOrigin'] = source;
                    kiloes['sectionName'] = update;
                    kiloes['source'] = echoed;
                    kiloes['onExecutedCallback'] = result;
                    kiloes['clientSupportsContextlessActivityLaunch'] = sizing;
                    report = function() { // Original name: maybeSendPrimaryAppCommand
                        entity = undefined;
                        tangon = _closure1_slot28;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    report = report.bind(offset)(kiloes);
                    SaveGenerator(address=1146);
 1144:
                    return report;
 1146:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=14);
                    if(kiloes) { _fun00002_ip = 1297; continue _fun00001 }
 1155:
                    if(report) { _fun00002_ip = 1221; continue _fun00001 }
 1158:
                    sizing = _closure1_slot1;
                    echoed = _closure1_slot2;
                    kiloes = 21;
                    result = echoed[kiloes];
                    result = sizing.bind(offset)(result);
                    kiloes = echoed[kiloes];
                    kiloes = sizing.bind(offset)(kiloes);
                    kiloes = kiloes.Reasons;
                    variable42 = kiloes.PRIMARY_APP_COMMAND_NOT_FOUND;
                    sizing = result.prototype;
                    sizing = Object.create(sizing, {constructor: {value: result}});
                    variable43 = sizing;
                    kiloes = new variable43[result](variable42, variable41);
                    kiloes = kiloes instanceof Object ? kiloes : sizing;
                    throw kiloes;
 1221:
                    sizing = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    kiloes = kiloes[output];
                    output = sizing.bind(offset)(kiloes);
                    sizing = output.dispatch;
                    kiloes = {};
                    result = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                    kiloes['type'] = result;
                    result = backup;
                    kiloes['nonce'] = result;
                    result = foxtra;
                    kiloes['applicationId'] = result;
                    result = romeon;
                    echoed = yankee != result;
                    result = null;
                    if(!echoed) { _fun00002_ip = 1283; continue _fun00001 }
 1280:
                    result = romeon;
 1283:
                    kiloes['channelId'] = result;
                    kiloes = sizing.bind(output)(kiloes);
 1292: // try_end1
                    kiloes = true;
                    return kiloes;
 1297:
                    return report;
 1300: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=7);
                    if(tangon) { _fun00002_ip = 1377; continue _fun00001 }
 1305:
                    if(!(yankee == zuuluu)) { _fun00002_ip = 1343; continue _fun00001 }
 1309:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 22;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(offset)(zuuluu);
                    zuuluu = zuuluu.EmbeddedActivityLocationKind;
                    zuuluu = zuuluu.PRIVATE_CHANNEL;
                    _fun00002_ip = 1375; continue _fun00001;
 1343:
                    report = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    tangon = 22;
                    tangon = kiloes[tangon];
                    tangon = report.bind(offset)(tangon);
                    tangon = tangon.EmbeddedActivityLocationKind;
                    zuuluu = tangon.GUILD_CHANNEL;
 1375:
                    _fun00002_ip = 1409; continue _fun00001;
 1377:
                    report = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    tangon = 22;
                    tangon = kiloes[tangon];
                    tangon = report.bind(offset)(tangon);
                    tangon = tangon.EmbeddedActivityLocationKind;
                    zuuluu = tangon.CONTEXTLESS;
 1409:
                    oscard = zuuluu;
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 19;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(offset)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    kiloes = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                    zuuluu['type'] = kiloes;
                    zuuluu['nonce'] = backup;
                    zuuluu['applicationId'] = foxtra;
                    foxtra = romeon;
                    foxtra = yankee != foxtra;
                    yankee = null;
                    if(!foxtra) { _fun00002_ip = 1471; continue _fun00001 }
 1468:
                    yankee = romeon;
 1471:
                    zuuluu['channelId'] = yankee;
                    zuuluu['isStart'] = verify;
                    yankee = option;
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    verify = 21;
                    verify = foxtra[verify];
                    verify = romeon.bind(offset)(verify);
                    verify = yankee instanceof verify;
                    if(verify) { _fun00002_ip = 1612; continue _fun00001 }
 1510:
                    romeon = option;
                    foxtra = _closure1_slot1;
                    verify = _closure1_slot2;
                    yankee = 23;
                    verify = verify[yankee];
                    verify = foxtra.bind(offset)(verify);
                    verify = romeon instanceof verify;
                    if(verify) { _fun00002_ip = 1612; continue _fun00001 }
 1540:
                    romeon = option;
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    verify = 24;
                    verify = backup[verify];
                    verify = foxtra.bind(offset)(verify);
                    verify = romeon instanceof verify;
                    if(verify) { _fun00002_ip = 1612; continue _fun00001 }
 1570:
                    verify = _closure1_slot1;
                    golfie = _closure1_slot2;
                    golfie = golfie[yankee];
                    offset = verify.bind(offset)(golfie);
                    variable42 = option;
                    verify = offset.prototype;
                    verify = Object.create(verify, {constructor: {value: offset}});
                    variable43 = verify;
                    golfie = new variable43[offset](variable42, variable41);
                    golfie = golfie instanceof Object ? golfie : verify;
                    _fun00002_ip = 1615; continue _fun00001;
 1612:
                    golfie = option;
 1615:
                    zuuluu['error'] = golfie;
                    zuuluu['locationKind'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = false;
                    return zuuluu;
 1634:
                    return michal;
 1637:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot27 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _maybeSendPrimaryAppCommand
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 614; continue _fun00003 }
 15:
                    golfie = michal.applicationId;
                    echoed = golfie;
                    var _closure4_slot0 = golfie;
                    golfie = michal.nonce;
                    var _closure4_slot1 = golfie;
                    golfie = michal.channelId;
                    oscard = golfie;
                    var _closure4_slot2 = golfie;
                    golfie = michal.guildId;
                    offset = golfie;
                    var _closure4_slot3 = golfie;
                    golfie = michal.commandOrigin;
                    var _closure4_slot4 = golfie;
                    golfie = michal.sectionName;
                    var _closure4_slot5 = golfie;
                    golfie = michal.source;
                    var _closure4_slot6 = golfie;
                    golfie = michal.onExecutedCallback;
                    var _closure4_slot7 = golfie;
                    michal = michal.clientSupportsContextlessActivityLaunch;
                    var _closure4_slot8 = michal;
                    golfie = undefined;
                    output = undefined;
                    var _closure4_slot9 = golfie;
                    option = undefined;
                    var _closure4_slot10 = golfie;
                    var _closure4_slot11 = golfie;
                    SaveGenerator(address=132);
 130:
                    return golfie;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 611; continue _fun00003 }
 141:
                    verify = null;
                    output = null;
                    _closure4_slot9 = verify;
 149: // try_start_0
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    tangon = 27;
                    tangon = foxtra[tangon];
                    foxtra = romeon.bind(golfie)(tangon);
                    romeon = oscard;
                    tangon = echoed;
                    tangon = foxtra.bind(golfie)(romeon, tangon);
                    SaveGenerator(address=188);
 186:
                    return tangon;
 188:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(romeon) { _fun00004_ip = 558; continue _fun00003 }
 197:
                    output = tangon;
                    _closure4_slot9 = tangon;
 204: // try_end0
                    romeon = output;
                    foxtra = romeon.handler;
                    backup = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    romeon = 28;
                    romeon = kiloes[romeon];
                    romeon = backup.bind(golfie)(romeon);
                    romeon = romeon.ApplicationCommandHandler;
                    romeon = romeon.APP_HANDLER;
                    if(!(foxtra === romeon)) { _fun00004_ip = 446; continue _fun00003 }
 252:
                    backup = _closure1_slot23;
                    foxtra = backup.includes;
                    romeon = echoed;
                    romeon = foxtra.bind(backup)(romeon);
                    if(romeon) { _fun00004_ip = 446; continue _fun00003 }
 275:
                    romeon = oscard;
                    if(!(verify != romeon)) { _fun00004_ip = 321; continue _fun00003 }
 282:
                    foxtra = _closure1_slot4;
                    romeon = {};
                    backup = 'channel';
                    romeon['type'] = backup;
                    backup = oscard;
                    romeon['channelId'] = backup;
                    romeon = foxtra.bind(golfie)(romeon);
                    SaveGenerator(address=312);
 310:
                    return romeon;
 312:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(foxtra) { _fun00004_ip = 443; continue _fun00003 }
 321:
                    backup = _closure1_slot4;
                    foxtra = {};
                    kiloes = 'user';
                    foxtra['type'] = kiloes;
                    foxtra = backup.bind(golfie)(foxtra);
                    SaveGenerator(address=344);
 342:
                    return foxtra;
 344:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(backup) { _fun00004_ip = 440; continue _fun00003 }
 350:
                    sizing = _closure1_slot9;
                    kiloes = sizing.getChannel;
                    backup = oscard;
                    result = kiloes.bind(sizing)(backup);
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 29;
                    backup = sizing[backup];
                    sizing = kiloes.bind(golfie)(backup);
                    kiloes = sizing.installApplicationOnDemandIfNeeded;
                    backup = {};
                    backup['applicationId'] = echoed;
                    backup['channel'] = result;
                    output = output.integration_types;
                    backup['commandIntegrationTypes'] = output;
                    backup = kiloes.bind(sizing)(backup);
                    SaveGenerator(address=423);
 421:
                    return backup;
 423:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(kiloes) { _fun00004_ip = 437; continue _fun00003 }
 429:
                    if(backup) { _fun00004_ip = 446; continue _fun00003 }
 432:
                    kiloes = false;
                    return kiloes;
 437:
                    return backup;
 440:
                    return foxtra;
 443:
                    return romeon;
 446:
                    foxtra = _closure1_slot9;
                    romeon = foxtra.getChannel;
                    oscard = romeon.bind(foxtra)(oscard);
                    option = oscard;
                    _closure4_slot10 = oscard;
                    oscard = offset;
                    romeon = verify != oscard;
                    oscard = null;
                    if(!romeon) { _fun00004_ip = 493; continue _fun00003 }
 479:
                    romeon = _closure1_slot10;
                    yankee = romeon.getGuild;
                    oscard = yankee.bind(romeon)(offset);
 493:
                    _closure4_slot11 = oscard;
                    option = verify != option;
                    oscard = option;
                    if(!option) { _fun00004_ip = 552; continue _fun00003 }
 507:
                    option = global;
                    verify = option.Promise;
                    option = verify.prototype;
                    option = Object.create(option, {constructor: {value: verify}});
                    source = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = argBar;
                        var _closure5_slot1 = entity;
                        zuuluu = _closure1_slot1;
                        michal = _closure1_slot2;
                        entity = 30;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = {};
                        oscard = _closure4_slot9;
                        michal['command'] = oscard;
                        oscard = {};
                        michal['optionValues'] = oscard;
                        oscard = {};
                        golfie = _closure4_slot10;
                        oscard['channel'] = golfie;
                        golfie = _closure4_slot11;
                        oscard['guild'] = golfie;
                        michal['context'] = oscard;
                        oscard = _closure4_slot4;
                        michal['commandOrigin'] = oscard;
                        oscard = _closure4_slot5;
                        michal['sectionName'] = oscard;
                        oscard = _closure4_slot6;
                        michal['source'] = oscard;
                        report = _closure4_slot8;
                        michal['clientSupportsContextlessActivityLaunch'] = report;
                        tangon = function() { // Original name: interactionLifecycleOptionsFactory
                            entity = {};
                            zuuluu = _closure4_slot1;
                            entity['nonce'] = zuuluu;
                            zuuluu = function() { // Original name: onSuccess
                                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                    zuuluu = _closure4_slot7;
                                    michal = null;
                                    if(!(michal != zuuluu)) { _fun00006_ip = 23; continue _fun00005 }
 13:
                                    michal = _closure4_slot7;
                                    entity = undefined;
                                    entity = michal.bind(entity)();
 23:
                                    michal = _closure5_slot0;
                                    entity = undefined;
                                    michal = michal.bind(entity)();
                                    return entity;
                                }
                            };
                            entity['onSuccess'] = zuuluu;
                            michal = function(argFoo, argBar, argBaz, argCor) { // Original name: onFailure
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    oscard = argFoo;
                                    golfie = argBar;
                                    tangon = argBaz;
                                    verify = argCor;
                                    entity = _closure4_slot7;
                                    zuuluu = null;
                                    if(!(zuuluu != entity)) { _fun00008_ip = 35; continue _fun00007 }
 25:
                                    michal = _closure4_slot7;
                                    entity = undefined;
                                    entity = michal.bind(entity)();
 35:
                                    option = _closure1_slot1;
                                    report = _closure1_slot2;
                                    entity = 31;
                                    report = report[entity];
                                    entity = undefined;
                                    yankee = option.bind(entity)(report);
                                    offset = yankee.track;
                                    report = _closure1_slot17;
                                    option = report.ACTIVITY_INTERACTION_CALLBACK_ERROR;
                                    report = {};
                                    foxtra = _closure4_slot2;
                                    report['channel_id'] = foxtra;
                                    foxtra = _closure4_slot3;
                                    report['guild_id'] = foxtra;
                                    foxtra = _closure4_slot0;
                                    report['application_id'] = foxtra;
                                    foxtra = _closure4_slot10;
                                    backup = zuuluu == foxtra;
                                    foxtra = undefined;
                                    if(backup) { _fun00008_ip = 124; continue _fun00007 }
 115:
                                    backup = _closure4_slot10;
                                    foxtra = backup.type;
 124:
                                    report['channel_type'] = foxtra;
                                    report['error_code'] = oscard;
                                    report['error_message'] = golfie;
                                    report['error_status'] = tangon;
                                    report['error_reason_code'] = verify;
                                    romeon = _closure4_slot6;
                                    report['source'] = romeon;
                                    report = offset.bind(yankee)(option, report);
                                    if(!(zuuluu != oscard)) { _fun00008_ip = 180; continue _fun00007 }
 169:
                                    if(!(zuuluu != golfie)) { _fun00008_ip = 180; continue _fun00007 }
 173:
                                    if(!(zuuluu == tangon)) { _fun00008_ip = 349; continue _fun00007 }
 180:
                                    if(!(zuuluu != verify)) { _fun00008_ip = 217; continue _fun00007 }
 184:
                                    report = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    offset = 24;
                                    zuuluu = zuuluu[offset];
                                    zuuluu = report.bind(entity)(zuuluu);
                                    zuuluu = zuuluu.ReasonCodes;
                                    zuuluu = verify in zuuluu;
                                    if(zuuluu) { _fun00008_ip = 295; continue _fun00007 }
 217:
                                    report = _closure5_slot1;
                                    option = _closure1_slot1;
                                    romeon = _closure1_slot2;
                                    zuuluu = 24;
                                    yankee = romeon[zuuluu];
                                    yankee = option.bind(entity)(yankee);
                                    zuuluu = romeon[zuuluu];
                                    zuuluu = option.bind(entity)(zuuluu);
                                    zuuluu = zuuluu.ReasonCodes;
                                    sizing = zuuluu.UNKNOWN;
                                    option = yankee.prototype;
                                    option = Object.create(option, {constructor: {value: yankee}});
                                    output = option;
                                    zuuluu = new output[yankee](sizing, kiloes);
                                    zuuluu = zuuluu instanceof Object ? zuuluu : option;
                                    zuuluu = report.bind(entity)(zuuluu);
                                    _fun00008_ip = 424; continue _fun00007;
 295:
                                    report = _closure5_slot1;
                                    option = _closure1_slot1;
                                    zuuluu = _closure1_slot2;
                                    zuuluu = zuuluu[offset];
                                    zuuluu = option.bind(entity)(zuuluu);
                                    option = zuuluu.prototype;
                                    option = Object.create(option, {constructor: {value: zuuluu}});
                                    output = option;
                                    sizing = verify;
                                    zuuluu = new output[zuuluu](sizing, kiloes);
                                    zuuluu = zuuluu instanceof Object ? zuuluu : option;
                                    zuuluu = report.bind(entity)(zuuluu);
                                    _fun00008_ip = 424; continue _fun00007;
 349:
                                    zuuluu = _closure5_slot1;
                                    report = _closure1_slot1;
                                    option = _closure1_slot2;
                                    michal = 23;
                                    michal = option[michal];
                                    report = report.bind(entity)(michal);
                                    michal = {};
                                    michal['status'] = tangon;
                                    tangon = {};
                                    tangon['message'] = golfie;
                                    tangon['code'] = oscard;
                                    michal['body'] = tangon;
                                    tangon = report.prototype;
                                    tangon = Object.create(tangon, {constructor: {value: report}});
                                    output = tangon;
                                    sizing = michal;
                                    michal = new output[report](sizing, kiloes);
                                    michal = michal instanceof Object ? michal : tangon;
                                    michal = zuuluu.bind(entity)(michal);
 424:
                                    return entity;
                                }
                            };
                            entity['onFailure'] = michal;
                            return entity;
                        };
                        michal['interactionLifecycleOptionsFactory'] = tangon;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    ctrled = option;
                    report = new ctrled[verify](source, update);
                    report = report instanceof Object ? report : option;
                    SaveGenerator(address=544);
 542:
                    return report;
 544:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(option) { _fun00004_ip = 555; continue _fun00003 }
 550:
                    oscard = true;
 552:
                    return oscard;
 555:
                    return report;
 558:
                    return tangon;
 561: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zuuluu = tangon;
                    report = tangon.message;
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    tangon = 27;
                    tangon = option[tangon];
                    tangon = oscard.bind(golfie)(tangon);
                    tangon = tangon.NO_PRIMARY_APP_COMMAND_ERROR;
                    if(!(report !== tangon)) { _fun00004_ip = 606; continue _fun00003 }
 604:
                    throw zuuluu;
 606:
                    zuuluu = false;
                    return zuuluu;
 611:
                    return michal;
 614:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot28 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _joinEmbeddedActivity
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 1737; continue _fun00009 }
 13:
                    update = michal.applicationId;
                    config = michal.channelId;
                    source = michal.embeddedActivitiesManager;
                    report = michal.isStart;
                    vacuum = michal.guildId;
                    echoed = michal.joinUserId;
                    result = michal.joinSessionId;
                    kiloes = michal.secret;
                    sequen = michal.instanceId;
                    yankee = michal.isContextlessActivity;
                    verify = undefined;
                    SaveGenerator(address=76);
 74:
                    return verify;
 76:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 1734; continue _fun00009 }
 85:
                    oscard = _closure1_slot8;
                    zuuluu = oscard.getSessionId;
                    sizing = zuuluu.bind(oscard)();
                    oscard = _closure1_slot12;
                    zuuluu = oscard.getCurrentUser;
                    output = zuuluu.bind(oscard)();
                    option = null;
                    if(!(option != update)) { _fun00010_ip = 1705; continue _fun00009 }
 124:
                    oscard = _closure1_slot0;
                    offset = _closure1_slot2;
                    zuuluu = 17;
                    zuuluu = offset[zuuluu];
                    oscard = oscard.bind(verify)(zuuluu);
                    zuuluu = oscard.getIsContextlessActivitiesExperimentEnabled;
                    oscard = zuuluu.bind(oscard)();
                    golfie = _closure1_slot1;
                    zuuluu = 32;
                    zuuluu = offset[zuuluu];
                    zuuluu = golfie.bind(verify)(zuuluu);
                    zuuluu = zuuluu.bind(verify)(update, config);
                    SaveGenerator(address=180);
 178:
                    return zuuluu;
 180:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00010_ip = 1702; continue _fun00009 }
 189:
                    if(!(option != output)) { _fun00010_ip = 1673; continue _fun00009 }
 196:
                    if(!(option != zuuluu)) { _fun00010_ip = 1673; continue _fun00009 }
 203:
                    if(oscard) { _fun00010_ip = 292; continue _fun00009 }
 206:
                    if(!(option == config)) { _fun00010_ip = 292; continue _fun00009 }
 210:
                    offset = _closure1_slot0;
                    romeon = _closure1_slot2;
                    golfie = 33;
                    golfie = romeon[golfie];
                    golfie = offset.bind(verify)(golfie);
                    foxtra = golfie.ComponentDispatch;
                    romeon = foxtra.dispatch;
                    golfie = _closure1_slot21;
                    offset = golfie.SHOW_ACTIVITIES_CHANNEL_SELECTOR;
                    golfie = {};
                    golfie['applicationId'] = update;
                    golfie = romeon.bind(foxtra)(offset, golfie);
                    golfie = {};
                    offset = 'failure';
                    golfie['result'] = offset;
                    offset = _closure1_slot25;
                    offset = offset.INVALID_CHANNEL;
                    golfie['reason'] = offset;
                    return golfie;
 292:
                    offset = _closure1_slot9;
                    golfie = offset.getChannel;
                    backup = golfie.bind(offset)(config);
                    if(oscard) { _fun00010_ip = 342; continue _fun00009 }
 309:
                    if(!(option == backup)) { _fun00010_ip = 342; continue _fun00009 }
 313:
                    oscard = {};
                    golfie = 'failure';
                    oscard['result'] = golfie;
                    golfie = _closure1_slot25;
                    golfie = golfie.INVALID_CHANNEL;
                    oscard['reason'] = golfie;
                    return oscard;
 342:
                    romeon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    offset = 34;
                    golfie = oscard[offset];
                    ctrled = romeon.bind(verify)(golfie);
                    foxtra = ctrled.getEmbeddedActivityLaunchability;
                    golfie = {};
                    golfie['channelId'] = config;
                    record = _closure1_slot9;
                    golfie['ChannelStore'] = record;
                    record = _closure1_slot10;
                    golfie['GuildStore'] = record;
                    record = _closure1_slot11;
                    golfie['PermissionStore'] = record;
                    record = _closure1_slot13;
                    golfie['VoiceStateStore'] = record;
                    golfie = foxtra.bind(ctrled)(golfie);
                    oscard = oscard[offset];
                    oscard = romeon.bind(verify)(oscard);
                    oscard = oscard.EmbeddedActivityLaunchability;
                    oscard = oscard.CAN_LAUNCH;
                    if(!(golfie === oscard)) { _fun00010_ip = 1377; continue _fun00009 }
 443:
                    romeon = _closure1_slot14;
                    oscard = romeon.getCurrentEmbeddedActivity;
                    record = oscard.bind(romeon)();
                    romeon = option == record;
                    oscard = undefined;
                    if(romeon) { _fun00010_ip = 471; continue _fun00009 }
 466:
                    oscard = record.applicationId;
 471:
                    oscard = option != oscard;
                    foxtra = undefined;
                    if(!oscard) { _fun00010_ip = 509; continue _fun00009 }
 480:
                    ctrled = _closure1_slot5;
                    romeon = ctrled.getApplication;
                    cntext = option == record;
                    oscard = undefined;
                    if(cntext) { _fun00010_ip = 504; continue _fun00009 }
 499:
                    oscard = record.applicationId;
 504:
                    foxtra = romeon.bind(ctrled)(oscard);
 509:
                    if(!report) { _fun00010_ip = 631; continue _fun00009 }
 512:
                    oscard = _closure1_slot0;
                    romeon = _closure1_slot2;
                    report = 38;
                    report = romeon[report];
                    romeon = oscard.bind(verify)(report);
                    oscard = romeon.confirmActivityLaunchChecks;
                    report = {};
                    report['applicationId'] = update;
                    report['application'] = zuuluu;
                    report['channel'] = backup;
                    report['currentEmbeddedApplication'] = foxtra;
                    report['embeddedActivitiesManager'] = source;
                    report['user'] = output;
                    output = option != yankee;
                    if(!output) { _fun00010_ip = 576; continue _fun00009 }
 573:
                    output = yankee;
 576:
                    report['isContextless'] = output;
                    report = oscard.bind(romeon)(report);
                    SaveGenerator(address=590);
 588:
                    return report;
 590:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00010_ip = 1374; continue _fun00009 }
 599:
                    if(report) { _fun00010_ip = 631; continue _fun00009 }
 602:
                    oscard = {};
                    romeon = 'failure';
                    oscard['result'] = romeon;
                    romeon = _closure1_slot25;
                    romeon = romeon.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    oscard['reason'] = romeon;
                    return oscard;
 631:
                    if(!(option != backup)) { _fun00010_ip = 846; continue _fun00009 }
 638:
                    romeon = _closure1_slot1;
                    output = _closure1_slot2;
                    oscard = 39;
                    oscard = output[oscard];
                    romeon = romeon.bind(verify)(oscard);
                    oscard = backup.id;
                    romeon = romeon.bind(verify)(oscard);
                    source = _closure1_slot15;
                    output = source.includes;
                    oscard = backup.type;
                    oscard = output.bind(source)(oscard);
                    if(romeon) { _fun00010_ip = 756; continue _fun00009 }
 690:
                    output = _closure1_slot0;
                    source = _closure1_slot2;
                    romeon = 26;
                    romeon = source[romeon];
                    output = output.bind(verify)(romeon);
                    romeon = output.isActivitiesInTextEnabled;
                    romeon = romeon.bind(output)(backup);
                    if(!romeon) { _fun00010_ip = 727; continue _fun00009 }
 724:
                    if(oscard) { _fun00010_ip = 846; continue _fun00009 }
 727:
                    oscard = {};
                    romeon = 'failure';
                    oscard['result'] = romeon;
                    romeon = _closure1_slot25;
                    romeon = romeon.AIT_NOT_ENABLED_FOR_USER;
                    oscard['reason'] = romeon;
                    return oscard;
 756:
                    romeon = _closure1_slot1;
                    output = _closure1_slot2;
                    oscard = 40;
                    oscard = output[oscard];
                    romeon = romeon.bind(verify)(oscard);
                    oscard = {};
                    backup = backup.id;
                    oscard['channelId'] = backup;
                    foxtra = option != foxtra;
                    oscard['bypassChangeModal'] = foxtra;
                    oscard = romeon.bind(verify)(oscard);
                    SaveGenerator(address=805);
 803:
                    return oscard;
 805:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=11);
                    if(romeon) { _fun00010_ip = 1371; continue _fun00009 }
 814:
                    if(oscard) { _fun00010_ip = 846; continue _fun00009 }
 817:
                    romeon = {};
                    foxtra = 'failure';
                    romeon['result'] = foxtra;
                    foxtra = _closure1_slot25;
                    foxtra = foxtra.NOT_CONNECTED_TO_VOICE_CHANNEL;
                    romeon['reason'] = foxtra;
                    return romeon;
 846:
                    foxtra = {'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    romeon = {};
                    output = _closure1_slot0;
                    source = _closure1_slot2;
                    backup = 41;
                    backup = source[backup];
                    backup = output.bind(verify)(backup);
                    backup = backup.NetworkActionNames;
                    backup = backup.EMBEDDED_ACTIVITIES_LAUNCH;
                    romeon['event'] = backup;
                    backup = {};
                    backup['guild_id'] = vacuum;
                    backup['channel_id'] = config;
                    backup['application_id'] = update;
                    backup['session_id'] = sizing;
                    romeon['properties'] = backup;
                    foxtra['trackedActionData'] = romeon;
                    if(!(option != config)) { _fun00010_ip = 1054; continue _fun00009 }
 934:
                    if(yankee) { _fun00010_ip = 1054; continue _fun00009 }
 937:
                    backup = _closure1_slot1;
                    output = _closure1_slot2;
                    romeon = 42;
                    romeon = output[romeon];
                    output = backup.bind(verify)(romeon);
                    backup = output.post;
                    romeon = {};
                    ctrled = _closure1_slot22;
                    source = ctrled.ACTIVITY_CHANNEL_LAUNCH;
                    source = source.bind(ctrled)(config, update);
                    romeon['url'] = source;
                    source = {};
                    source['session_id'] = sizing;
                    config = option != vacuum;
                    ctrled = undefined;
                    if(!config) { _fun00010_ip = 1004; continue _fun00009 }
 1001:
                    ctrled = vacuum;
 1004:
                    source['guild_id'] = ctrled;
                    romeon['body'] = source;
                    status = romeon;
                    target = foxtra;
                    source = copyDataProperties(status, target);
                    romeon = backup.bind(output)(romeon);
                    SaveGenerator(address=1031);
 1029:
                    return romeon;
 1031:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=13);
                    if(backup) { _fun00010_ip = 1051; continue _fun00009 }
 1037:
                    backup = {};
                    output = 'success';
                    backup['result'] = output;
                    return backup;
 1051:
                    return romeon;
 1054:
                    if(!yankee) { _fun00010_ip = 1068; continue _fun00009 }
 1057:
                    if(!(option != echoed)) { _fun00010_ip = 1068; continue _fun00009 }
 1061:
                    if(!(option == result)) { _fun00010_ip = 1229; continue _fun00009 }
 1068:
                    if(!yankee) { _fun00010_ip = 1075; continue _fun00009 }
 1071:
                    if(!(option == sequen)) { _fun00010_ip = 1103; continue _fun00009 }
 1075:
                    yankee = {};
                    option = 'failure';
                    yankee['result'] = option;
                    option = _closure1_slot25;
                    option = option.OTHER;
                    yankee['reason'] = option;
                    _fun00010_ip = 1223; continue _fun00009;
 1103:
                    romeon = {};
                    option = 'success';
                    romeon['result'] = option;
                    backup = {};
                    output = _closure1_slot1;
                    source = _closure1_slot2;
                    option = 42;
                    option = source[option];
                    source = output.bind(verify)(option);
                    output = source.post;
                    option = {};
                    vacuum = _closure1_slot22;
                    ctrled = vacuum.JOIN_CONTEXTLESS_EMBEDDED_ACTIVITY_VIA_INSTANCE;
                    ctrled = ctrled.bind(vacuum)(sequen, update);
                    option['url'] = ctrled;
                    ctrled = {};
                    ctrled['session_id'] = sizing;
                    option['body'] = ctrled;
                    status = option;
                    target = foxtra;
                    ctrled = copyDataProperties(status, target);
                    option = output.bind(source)(option);
                    SaveGenerator(address=1194);
 1192:
                    return option;
 1194:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=16);
                    if(output) { _fun00010_ip = 1226; continue _fun00009 }
 1200:
                    output = option.body;
                    output = output.instance_id;
                    backup['instanceId'] = output;
                    romeon['data'] = backup;
                    yankee = romeon;
 1223:
                    return yankee;
 1226:
                    return option;
 1229:
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    option = 42;
                    option = romeon[option];
                    romeon = yankee.bind(verify)(option);
                    yankee = romeon.post;
                    option = {};
                    output = _closure1_slot22;
                    backup = output.JOIN_CONTEXTLESS_EMBEDDED_ACTIVITY_VIA_PRESENCE;
                    backup = backup.bind(output)(echoed, result, update);
                    option['url'] = backup;
                    backup = {};
                    backup['session_id'] = sizing;
                    backup['secret'] = kiloes;
                    option['body'] = backup;
                    status = option;
                    target = foxtra;
                    foxtra = copyDataProperties(status, target);
                    option = yankee.bind(romeon)(option);
                    SaveGenerator(address=1313);
 1311:
                    return option;
 1313:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(yankee) { _fun00010_ip = 1368; continue _fun00009 }
 1319:
                    foxtra = option.body;
                    yankee = {};
                    romeon = 'success';
                    yankee['result'] = romeon;
                    romeon = {};
                    backup = foxtra.secret;
                    romeon['joinSecret'] = backup;
                    foxtra = foxtra.instance_id;
                    romeon['instanceId'] = foxtra;
                    yankee['data'] = romeon;
                    return yankee;
 1368:
                    return option;
 1371:
                    return oscard;
 1374:
                    return report;
 1377:
                    report = _closure1_slot25;
                    oscard = report.LAUNCHABILITY_CHECK_FAILED_OTHER;
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = option.bind(verify)(report);
                    report = report.EmbeddedActivityLaunchability;
                    report = report.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if(!(golfie !== report)) { _fun00010_ip = 1614; continue _fun00009 }
 1423:
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = option.bind(verify)(report);
                    report = report.EmbeddedActivityLaunchability;
                    report = report.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    if(!(golfie === report)) { _fun00010_ip = 1654; continue _fun00009 }
 1459:
                    report = _closure1_slot25;
                    oscard = report.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    option = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    golfie = 36;
                    golfie = kiloes[golfie];
                    offset = option.bind(verify)(golfie);
                    option = offset.show;
                    golfie = {};
                    backup = _closure1_slot0;
                    yankee = 37;
                    romeon = kiloes[yankee];
                    romeon = backup.bind(verify)(romeon);
                    sizing = romeon.intl;
                    foxtra = sizing.string;
                    romeon = kiloes[yankee];
                    romeon = backup.bind(verify)(romeon);
                    romeon = romeon.t;
                    romeon = romeon.IOy+Iy;
                    romeon = foxtra.bind(sizing)(romeon);
                    golfie['title'] = romeon;
                    romeon = kiloes[yankee];
                    romeon = backup.bind(verify)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.string;
                    yankee = kiloes[yankee];
                    yankee = backup.bind(verify)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.UXoQTk;
                    yankee = romeon.bind(foxtra)(yankee);
                    golfie['body'] = yankee;
                    yankee = false;
                    golfie['hideActionSheet'] = yankee;
                    golfie = option.bind(offset)(golfie);
                    _fun00010_ip = 1654; continue _fun00009;
 1614:
                    report = _closure1_slot25;
                    oscard = report.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    golfie = 35;
                    golfie = offset[golfie];
                    option = option.bind(verify)(golfie);
                    golfie = option.showActivitiesInvalidPermissionsAlert;
                    golfie = golfie.bind(option)();
 1654:
                    report = {};
                    golfie = 'failure';
                    report['result'] = golfie;
                    report['reason'] = oscard;
                    return report;
 1673:
                    report = {};
                    oscard = 'failure';
                    report['result'] = oscard;
                    oscard = _closure1_slot25;
                    oscard = oscard.UNKNOWN_USER_OR_APPLICATION;
                    report['reason'] = oscard;
                    return report;
 1702:
                    return zuuluu;
 1705:
                    zuuluu = {};
                    report = 'failure';
                    zuuluu['result'] = report;
                    tangon = _closure1_slot25;
                    tangon = tangon.NO_APPLICATION_ID;
                    zuuluu['reason'] = tangon;
                    return zuuluu;
 1734:
                    return michal;
 1737:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot29 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot29 = entity;
    report = function(argFoo) { // Original name: stopEmbeddedActivity
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            golfie = entity.location;
            verify = entity.applicationId;
            var _closure2_slot0 = verify;
            offset = entity.showFeedback;
            entity = undefined;
            if(!(offset === entity)) { _fun00012_ip = 33; continue _fun00011 }
 31:
            offset = true;
 33:
            report = _closure1_slot14;
            tangon = report.getSelfEmbeddedActivityForLocation;
            romeon = tangon.bind(report)(golfie);
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            tangon = 19;
            tangon = oscard[tangon];
            option = report.bind(entity)(tangon);
            oscard = option.dispatch;
            tangon = {};
            report = 'EMBEDDED_ACTIVITY_CLOSE';
            tangon['type'] = report;
            tangon['applicationId'] = verify;
            tangon['location'] = golfie;
            report = null;
            foxtra = report == romeon;
            yankee = undefined;
            if(foxtra) { _fun00012_ip = 111; continue _fun00011 }
 105:
            yankee = romeon.launchId;
 111:
            tangon['instanceId'] = yankee;
            tangon['showFeedback'] = offset;
            tangon = oscard.bind(option)(tangon);
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            tangon = 43;
            tangon = option[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getEmbeddedActivityLocationChannelId;
            tangon = tangon.bind(oscard)(golfie);
            if(!(report != tangon)) { _fun00012_ip = 345; continue _fun00011 }
 164:
            golfie = _closure1_slot6;
            oscard = golfie.getSelectedParticipantId;
            oscard = oscard.bind(golfie)(tangon);
            option = _closure1_slot12;
            golfie = option.getCurrentUser;
            option = golfie.bind(option)();
            offset = report == option;
            golfie = undefined;
            if(offset) { _fun00012_ip = 206; continue _fun00011 }
 201:
            golfie = option.id;
 206:
            offset = _closure1_slot14;
            option = offset.getEmbeddedActivitiesForChannel;
            offset = option.bind(offset)(tangon);
            option = offset.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.applicationId;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            offset = option.bind(offset)(zuuluu);
            if(!(report != offset)) { _fun00012_ip = 347; continue _fun00011 }
 240:
            if(!(report != golfie)) { _fun00012_ip = 347; continue _fun00011 }
 244:
            zuuluu = '';
            if(!(zuuluu !== golfie)) { _fun00012_ip = 347; continue _fun00011 }
 252:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 44;
            zuuluu = option[zuuluu];
            option = golfie.bind(entity)(zuuluu);
            golfie = option.getEmbeddedActivityParticipantId;
            zuuluu = {};
            zuuluu['applicationId'] = verify;
            yankee = report == offset;
            verify = undefined;
            if(yankee) { _fun00012_ip = 299; continue _fun00011 }
 293:
            verify = offset.compositeInstanceId;
 299:
            zuuluu['instanceId'] = verify;
            zuuluu = golfie.bind(option)(zuuluu);
            if(!(oscard === zuuluu)) { _fun00012_ip = 345; continue _fun00011 }
 313:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 45;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.selectParticipant;
            michal = michal.bind(zuuluu)(tangon, report);
 345:
            return entity;
 347:
            return entity;
        }
    };
    var _closure1_slot30 = report;
    entity = function() { // Original name: _fetchDeveloperApplications
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 321; continue _fun00013 }
 10: // try_start_0
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    golfie = 19;
                    michal = oscard[golfie];
                    report = undefined;
                    option = tangon.bind(report)(michal);
                    tangon = option.dispatch;
                    michal = {};
                    verify = 'DEVELOPER_ACTIVITY_SHELF_FETCH_START';
                    michal['type'] = verify;
                    michal = tangon.bind(option)(michal);
                    tangon = _closure1_slot0;
                    michal = 46;
                    michal = oscard[michal];
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    option = _closure1_slot22;
                    option = option.APPLICATIONS_WITH_ASSETS;
                    michal['url'] = option;
                    verify = {};
                    option = true;
                    verify['with_team_applications'] = option;
                    michal['query'] = verify;
                    michal['oldFormErrors'] = option;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=133);
 131:
                    return michal;
 133:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 264; continue _fun00013 }
 142:
                    tangon = michal.body;
                    oscard = tangon.applications;
                    option = oscard.map;
                    tangon = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.createFromServer;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    yankee = option.bind(oscard)(tangon);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    option = zuuluu[golfie];
                    offset = tangon.bind(report)(option);
                    verify = offset.dispatch;
                    option = {};
                    romeon = 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS';
                    option['type'] = romeon;
                    option['applications'] = yankee;
                    yankee = michal.body;
                    yankee = yankee.assets;
                    option['assets'] = yankee;
                    option = verify.bind(offset)(option);
                    zuuluu = zuuluu[golfie];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'APPLICATIONS_FETCH_SUCCESS';
                    zuuluu['type'] = golfie;
                    zuuluu['applications'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 262: // try_end0
                    _fun00014_ip = 316; continue _fun00013;
 264:
                    return michal;
 267: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    michal = 19;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.dispatch;
                    michal = {};
                    report = 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL';
                    michal['type'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 316:
                    michal = undefined;
                    return michal;
 321:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot31 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: _uploadImageAttachment
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 333; continue _fun00015 }
 10:
                    verify = argFoo;
                    offset = argBar;
                    option = argBaz;
 19: // try_start_0
                    tangon = _closure1_slot1;
                    golfie = _closure1_slot2;
                    oscard = 19;
                    michal = golfie[oscard];
                    report = undefined;
                    yankee = tangon.bind(report)(michal);
                    tangon = yankee.dispatch;
                    michal = {};
                    romeon = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START';
                    michal['type'] = romeon;
                    michal = tangon.bind(yankee)(michal);
                    tangon = _closure1_slot0;
                    michal = 46;
                    michal = golfie[michal];
                    michal = tangon.bind(report)(michal);
                    golfie = michal.HTTP;
                    tangon = golfie.post;
                    michal = {};
                    romeon = _closure1_slot22;
                    yankee = romeon.APPLICATION_UPLOAD_ATTACHMENT;
                    verify = yankee.bind(romeon)(verify);
                    michal['url'] = verify;
                    verify = {};
                    verify['channel_id'] = offset;
                    michal['query'] = verify;
                    verify = {};
                    offset = 'file';
                    verify['name'] = offset;
                    verify['file'] = option;
                    option = new Array(1);
                    option[0] = verify;
                    michal['attachments'] = option;
                    option = true;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(golfie)(michal);
                    SaveGenerator(address=168);
 166:
                    return michal;
 168:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00016_ip = 243; continue _fun00015 }
 174:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot2;
                    zuuluu = zuuluu[oscard];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS';
                    zuuluu['type'] = oscard;
                    oscard = michal.body;
                    oscard = oscard.attachment;
                    zuuluu['attachment'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = michal.body;
                    zuuluu = zuuluu.attachment;
 240: // try_end0
                    return zuuluu;
 243:
                    return michal;
 246: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    michal = 19;
                    michal = oscard[michal];
                    zuuluu = undefined;
                    option = report.bind(zuuluu)(michal);
                    golfie = option.dispatch;
                    michal = {};
                    verify = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL';
                    michal['type'] = verify;
                    michal = golfie.bind(option)(michal);
                    michal = 23;
                    michal = oscard[michal];
                    michal = report.bind(zuuluu)(michal);
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    backup = zuuluu;
                    foxtra = tangon;
                    michal = new backup[michal](foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    return michal;
 333:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot32 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _fetchShelf
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00018_ip = 992; continue _fun00017 }
 15:
                    oscard = michal.guildId;
                    option = oscard;
                    var _closure4_slot0 = oscard;
                    oscard = michal.force;
                    golfie = undefined;
                    if(!(oscard === golfie)) { _fun00018_ip = 41; continue _fun00017 }
 39:
                    oscard = false;
 41:
                    report = undefined;
                    tangon = undefined;
                    var _closure4_slot1 = golfie;
                    var _closure4_slot2 = golfie;
                    result = undefined;
                    output = undefined;
                    verify = undefined;
                    foxtra = undefined;
                    romeon = undefined;
                    yankee = undefined;
                    SaveGenerator(address=69);
 67:
                    return golfie;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00018_ip = 989; continue _fun00017 }
 78:
                    sizing = _closure1_slot14;
                    kiloes = sizing.getShelfActivities;
                    backup = option;
                    sizing = kiloes.bind(sizing)(backup);
                    report = sizing;
                    kiloes = sizing.map;
                    backup = function(argFoo) {
                        zuuluu = _closure1_slot5;
                        michal = zuuluu.getApplication;
                        entity = argFoo;
                        entity = entity.application_id;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    sizing = kiloes.bind(sizing)(backup);
                    kiloes = sizing.filter;
                    echoed = _closure1_slot0;
                    update = _closure1_slot2;
                    backup = 47;
                    backup = update[backup];
                    backup = echoed.bind(golfie)(backup);
                    backup = backup.isNotNullish;
                    tangon = kiloes.bind(sizing)(backup);
                    if(oscard) { _fun00018_ip = 462; continue _fun00017 }
 159:
                    kiloes = _closure1_slot14;
                    backup = kiloes.shouldFetchShelf;
                    oscard = option;
                    oscard = backup.bind(kiloes)(oscard);
                    if(oscard) { _fun00018_ip = 462; continue _fun00017 }
 185:
                    kiloes = _closure1_slot14;
                    backup = kiloes.getShelfFetchStatus;
                    oscard = option;
                    oscard = backup.bind(kiloes)(oscard);
                    backup = null;
                    if(!(backup != oscard)) { _fun00018_ip = 438; continue _fun00017 }
 214:
                    oscard = oscard.isFetching;
                    if(!oscard) { _fun00018_ip = 438; continue _fun00017 }
 226:
                    oscard = global;
                    echoed = oscard.Promise;
                    kiloes = echoed.prototype;
                    sizing = Object.create(kiloes, {constructor: {value: echoed}});
                    sequen = function(argFoo) {
                        golfie = _closure1_slot26;
                        oscard = golfie.bind;
                        report = _closure4_slot0;
                        tangon = null;
                        zuuluu = argFoo;
                        zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                        _closure4_slot1 = zuuluu;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 19;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.subscribe;
                        zuuluu = _closure4_slot1;
                        michal = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                        michal = tangon.bind(report)(michal, zuuluu);
                        return entity;
                    };
                    config = sizing;
                    kiloes = new config[echoed](sequen, vacuum);
                    update = kiloes instanceof Object ? kiloes : sizing;
                    echoed = oscard.Promise;
                    kiloes = echoed.prototype;
                    sizing = Object.create(kiloes, {constructor: {value: echoed}});
                    sequen = function(argFoo) {
                        golfie = _closure1_slot26;
                        oscard = golfie.bind;
                        report = _closure4_slot0;
                        tangon = null;
                        zuuluu = argFoo;
                        zuuluu = oscard.bind(golfie)(tangon, report, zuuluu);
                        _closure4_slot2 = zuuluu;
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 19;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        report = tangon.bind(entity)(zuuluu);
                        tangon = report.subscribe;
                        zuuluu = _closure4_slot2;
                        michal = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                        michal = tangon.bind(report)(michal, zuuluu);
                        return entity;
                    };
                    config = sizing;
                    kiloes = new config[echoed](sequen, vacuum);
                    echoed = kiloes instanceof Object ? kiloes : sizing;
                    sizing = oscard.Promise;
                    kiloes = sizing.race;
                    oscard = new Array(2);
                    oscard[0] = update;
                    oscard[1] = echoed;
                    oscard = kiloes.bind(sizing)(oscard);
                    SaveGenerator(address=323);
 321:
                    return oscard;
 323:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=14);
                    if(kiloes) { _fun00018_ip = 459; continue _fun00017 }
 332:
                    kiloes = _closure4_slot1;
                    if(!(backup != kiloes)) { _fun00018_ip = 384; continue _fun00017 }
 340:
                    sizing = _closure1_slot1;
                    echoed = _closure1_slot2;
                    kiloes = 19;
                    kiloes = echoed[kiloes];
                    update = sizing.bind(golfie)(kiloes);
                    echoed = update.unsubscribe;
                    sizing = _closure4_slot1;
                    kiloes = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    kiloes = echoed.bind(update)(kiloes, sizing);
                    _closure4_slot1 = backup;
 384:
                    kiloes = _closure4_slot2;
                    if(!(backup != kiloes)) { _fun00018_ip = 438; continue _fun00017 }
 392:
                    sizing = _closure1_slot1;
                    echoed = _closure1_slot2;
                    kiloes = 19;
                    kiloes = echoed[kiloes];
                    update = sizing.bind(golfie)(kiloes);
                    echoed = update.unsubscribe;
                    sizing = _closure4_slot2;
                    kiloes = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    kiloes = echoed.bind(update)(kiloes, sizing);
                    _closure4_slot2 = backup;
 438:
                    backup = {};
                    kiloes = report;
                    backup['activityConfigs'] = kiloes;
                    kiloes = tangon;
                    backup['applications'] = kiloes;
                    return backup;
 459:
                    return oscard;
 462: // try_start_0
                    kiloes = _closure1_slot1;
                    oscard = _closure1_slot2;
                    backup = 19;
                    oscard = oscard[backup];
                    echoed = kiloes.bind(golfie)(oscard);
                    sizing = echoed.dispatch;
                    kiloes = {};
                    oscard = 'EMBEDDED_ACTIVITY_FETCH_SHELF';
                    kiloes['type'] = oscard;
                    oscard = option;
                    kiloes['guildId'] = oscard;
                    kiloes = sizing.bind(echoed)(kiloes);
                    echoed = undefined;
                    if(!(golfie !== oscard)) { _fun00018_ip = 542; continue _fun00017 }
 517:
                    kiloes = option;
                    oscard = '';
                    echoed = undefined;
                    if(!(oscard !== kiloes)) { _fun00018_ip = 542; continue _fun00017 }
 530:
                    oscard = {};
                    kiloes = option;
                    oscard['guild_id'] = kiloes;
                    echoed = oscard;
 542:
                    kiloes = _closure1_slot1;
                    ctrled = _closure1_slot2;
                    oscard = 42;
                    oscard = ctrled[oscard];
                    sizing = kiloes.bind(golfie)(oscard);
                    kiloes = sizing.get;
                    oscard = {'url': null, 'query': null, 'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    update = _closure1_slot22;
                    update = update.ACTIVITY_SHELF;
                    oscard['url'] = update;
                    oscard['query'] = echoed;
                    echoed = {};
                    source = _closure1_slot0;
                    update = 41;
                    update = ctrled[update];
                    update = source.bind(golfie)(update);
                    update = update.NetworkActionNames;
                    update = update.EMBEDDED_ACTIVITIES_FETCH_SHELF;
                    echoed['event'] = update;
                    update = {};
                    source = option;
                    update['guild_id'] = source;
                    echoed['properties'] = update;
                    oscard['trackedActionData'] = echoed;
                    oscard = kiloes.bind(sizing)(oscard);
                    SaveGenerator(address=667);
 665:
                    return oscard;
 667:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=14);
                    if(kiloes) { _fun00018_ip = 923; continue _fun00017 }
 676:
                    foxtra = oscard;
                    kiloes = oscard.body;
                    sizing = kiloes.activities;
                    result = sizing;
                    kiloes = null;
                    if(!(kiloes == sizing)) { _fun00018_ip = 705; continue _fun00017 }
 699:
                    sizing = new Array(0);
                    _fun00018_ip = 708; continue _fun00017;
 705:
                    sizing = result;
 708:
                    romeon = sizing;
                    sizing = foxtra;
                    sizing = sizing.body;
                    sizing = sizing.applications;
                    output = sizing;
                    if(!(kiloes == sizing)) { _fun00018_ip = 738; continue _fun00017 }
 732:
                    sizing = new Array(0);
                    _fun00018_ip = 741; continue _fun00017;
 738:
                    sizing = output;
 741:
                    yankee = sizing;
                    foxtra = foxtra.body;
                    foxtra = foxtra.assets;
                    verify = foxtra;
                    if(!(kiloes == foxtra)) { _fun00018_ip = 766; continue _fun00017 }
 762:
                    output = {};
                    _fun00018_ip = 769; continue _fun00017;
 766:
                    output = verify;
 769:
                    foxtra = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[backup];
                    sizing = foxtra.bind(golfie)(verify);
                    kiloes = sizing.dispatch;
                    foxtra = {};
                    verify = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    foxtra['type'] = verify;
                    verify = option;
                    foxtra['guildId'] = verify;
                    verify = romeon;
                    foxtra['activities'] = verify;
                    verify = yankee;
                    foxtra['applications'] = verify;
                    foxtra['assets'] = output;
                    foxtra = kiloes.bind(sizing)(foxtra);
                    foxtra = verify.length;
                    verify = 0;
                    if(!(foxtra > verify)) { _fun00018_ip = 890; continue _fun00017 }
 845:
                    foxtra = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[backup];
                    backup = foxtra.bind(golfie)(verify);
                    foxtra = backup.dispatch;
                    verify = {};
                    kiloes = 'APPLICATIONS_FETCH_SUCCESS';
                    verify['type'] = kiloes;
                    kiloes = yankee;
                    verify['applications'] = kiloes;
                    verify = foxtra.bind(backup)(verify);
 890:
                    verify = {};
                    verify['activityConfigs'] = romeon;
                    romeon = yankee;
                    yankee = romeon.map;
                    offset = function(argFoo) {
                        zuuluu = _closure1_slot7;
                        michal = zuuluu.createFromServer;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    offset = yankee.bind(romeon)(offset);
                    verify['applications'] = offset;
 920: // try_end0
                    return verify;
 923:
                    return oscard;
 926: // catch_target0
                    CatchBlockStart(arg_register=5);
                    oscard = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = 19;
                    zuuluu = verify[zuuluu];
                    golfie = oscard.bind(golfie)(zuuluu);
                    oscard = golfie.dispatch;
                    zuuluu = {};
                    verify = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    zuuluu['type'] = verify;
                    zuuluu['guildId'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = {};
                    zuuluu['activityConfigs'] = report;
                    zuuluu['applications'] = tangon;
                    return zuuluu;
 989:
                    return michal;
 992:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot33 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _sendEmbeddedActivityInvite
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00020_ip = 195; continue _fun00019 }
 13:
                    option = michal.activityChannelId;
                    offset = michal.invitedChannelId;
                    yankee = michal.applicationId;
                    verify = michal.location;
                    tangon = undefined;
                    SaveGenerator(address=43);
 41:
                    return tangon;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00020_ip = 192; continue _fun00019 }
 52:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    zuuluu = 48;
                    zuuluu = golfie[zuuluu];
                    golfie = oscard.bind(tangon)(zuuluu);
                    oscard = golfie.createInvite;
                    zuuluu = {};
                    romeon = _closure1_slot24;
                    romeon = romeon.EMBEDDED_APPLICATION;
                    zuuluu['target_type'] = romeon;
                    zuuluu['target_application_id'] = yankee;
                    zuuluu = oscard.bind(golfie)(option, zuuluu, verify);
                    SaveGenerator(address=114);
 112:
                    return zuuluu;
 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscard) { _fun00020_ip = 189; continue _fun00019 }
 120:
                    golfie = _closure1_slot9;
                    oscard = golfie.getChannel;
                    oscard = oscard.bind(golfie)(offset);
                    option = null;
                    if(!(option != oscard)) { _fun00020_ip = 186; continue _fun00019 }
 140:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 49;
                    report = golfie[report];
                    golfie = oscard.bind(tangon)(report);
                    oscard = golfie.sendInvite;
                    kiloes = zuuluu.code;
                    output = golfie;
                    sizing = offset;
                    backup = verify;
                    foxtra = null;
                    report = output[oscard](sizing, kiloes, backup, foxtra, romeon);
 186:
                    return tangon;
 189:
                    return zuuluu;
 192:
                    return michal;
 195:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot34 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: _sendEmbeddedActivityInviteUser
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 208; continue _fun00021 }
 15:
                    yankee = michal.channelId;
                    romeon = michal.applicationId;
                    option = michal.userId;
                    offset = michal.location;
                    var _closure4_slot0 = offset;
                    michal = michal.prefixedContent;
                    var _closure4_slot1 = michal;
                    report = undefined;
                    var _closure4_slot2 = report;
                    SaveGenerator(address=59);
 57:
                    return report;
 59:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00022_ip = 205; continue _fun00021 }
 68:
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = 48;
                    zuuluu = verify[zuuluu];
                    verify = golfie.bind(report)(zuuluu);
                    golfie = verify.createInvite;
                    zuuluu = {};
                    foxtra = _closure1_slot24;
                    foxtra = foxtra.EMBEDDED_APPLICATION;
                    zuuluu['target_type'] = foxtra;
                    zuuluu['target_application_id'] = romeon;
                    zuuluu = golfie.bind(verify)(yankee, zuuluu, offset);
                    SaveGenerator(address=130);
 128:
                    return zuuluu;
 130:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00022_ip = 202; continue _fun00021 }
 136:
                    _closure4_slot2 = zuuluu;
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscard = 50;
                    oscard = verify[oscard];
                    golfie = golfie.bind(report)(oscard);
                    oscard = golfie.ensurePrivateChannel;
                    golfie = oscard.bind(golfie)(option);
                    oscard = golfie.then;
                    tangon = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            option = argFoo;
                            michal = _closure1_slot9;
                            entity = michal.getChannel;
                            offset = entity.bind(michal)(option);
                            golfie = null;
                            if(!(golfie != offset)) { _fun00024_ip = 141; continue _fun00023 }
 26:
                            entity = _closure4_slot1;
                            tangon = golfie != entity;
                            entity = undefined;
                            oscard = undefined;
                            if(!tangon) { _fun00024_ip = 85; continue _fun00023 }
 44:
                            report = _closure1_slot1;
                            verify = _closure1_slot2;
                            tangon = 51;
                            tangon = verify[tangon];
                            verify = report.bind(entity)(tangon);
                            report = verify.parse;
                            tangon = _closure4_slot1;
                            tangon = report.bind(verify)(offset, tangon);
                            oscard = tangon.content;
 85:
                            tangon = _closure1_slot1;
                            report = _closure1_slot2;
                            zuuluu = 49;
                            zuuluu = report[zuuluu];
                            report = tangon.bind(entity)(zuuluu);
                            tangon = report.sendInvite;
                            zuuluu = _closure4_slot2;
                            backup = zuuluu.code;
                            foxtra = _closure4_slot0;
                            sizing = report;
                            kiloes = option;
                            romeon = null;
                            yankee = oscard;
                            michal = sizing[tangon](kiloes, backup, foxtra, romeon, yankee, offset);
                            return entity;
 141:
                            entity = global;
                            zuuluu = entity.Error;
                            entity = zuuluu.prototype;
                            michal = Object.create(entity, {constructor: {value: zuuluu}});
                            kiloes = 'Private channel not found';
                            sizing = michal;
                            entity = new sizing[zuuluu](kiloes, backup);
                            entity = entity instanceof Object ? entity : michal;
                            throw entity;
                        }
                    };
                    tangon = oscard.bind(golfie)(tangon);
                    SaveGenerator(address=190);
 188:
                    return tangon;
 190:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=5);
                    if(oscard) { _fun00022_ip = 199; continue _fun00021 }
 196:
                    return report;
 199:
                    return tangon;
 202:
                    return zuuluu;
 205:
                    return michal;
 208:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot35 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function() { // Original name: _validateTestMode
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00026_ip = 108; continue _fun00025 }
 7:
                    report = undefined;
                    zuuluu = undefined;
                    golfie = _closure1_slot22;
                    oscard = golfie.ACTIVITY_TEST_MODE;
                    tangon = argFoo;
                    zuuluu = oscard.bind(golfie)(tangon);
 32: // try_start_0
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 46;
                    michal = oscard[michal];
                    michal = tangon.bind(report)(michal);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    michal['url'] = zuuluu;
                    zuuluu = true;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=89);
 87:
                    return michal;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00026_ip = 98; continue _fun00025 }
 95: // try_end0
                    return zuuluu;
 98:
                    return michal;
 101: // catch_target0
                    CatchBlockStart(arg_register=1);
                    michal = false;
                    return michal;
 108:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot36 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot36 = entity;
    tangon = function(argFoo) { // Original name: updateActivityPanelMode
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EMBEDDED_ACTIVITY_SET_PANEL_MODE';
        michal['type'] = report;
        report = argFoo;
        michal['activityPanelMode'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot37 = tangon;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zuuluu, entity, oscard);
    echoed = 0;
    oscard = option[echoed];
    entity = undefined;
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot3 = oscard;
    result = 1;
    oscard = option[result];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot4 = oscard;
    output = 2;
    oscard = option[output];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    sizing = 3;
    oscard = option[sizing];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    kiloes = 4;
    oscard = option[kiloes];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    backup = 5;
    oscard = option[backup];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    foxtra = 6;
    oscard = option[foxtra];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot9 = oscard;
    romeon = 7;
    oscard = option[romeon];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot10 = oscard;
    yankee = 8;
    oscard = option[yankee];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot11 = oscard;
    offset = 9;
    oscard = option[offset];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot12 = oscard;
    oscard = 10;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot13 = oscard;
    oscard = 11;
    oscard = option[oscard];
    oscard = verify.bind(entity)(oscard);
    var _closure1_slot14 = oscard;
    oscard = 12;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot15 = oscard;
    oscard = 13;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.ActivityPanelModes;
    var _closure1_slot16 = oscard;
    oscard = 14;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    verify = oscard.AnalyticEvents;
    var _closure1_slot17 = verify;
    verify = oscard.AnalyticsGameOpenTypes;
    var _closure1_slot18 = verify;
    verify = oscard.ApplicationFlags;
    var _closure1_slot19 = verify;
    verify = oscard.ChannelTypes;
    var _closure1_slot20 = verify;
    verify = oscard.ComponentActions;
    var _closure1_slot21 = verify;
    oscard = oscard.Endpoints;
    var _closure1_slot22 = oscard;
    oscard = 15;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.INSTALL_LESS_APP_IDS;
    var _closure1_slot23 = oscard;
    oscard = 16;
    oscard = option[oscard];
    oscard = golfie.bind(entity)(oscard);
    oscard = oscard.InviteTargetTypes;
    var _closure1_slot24 = oscard;
    oscard = {};
    oscard['OTHER'] = echoed;
    verify = 'OTHER';
    oscard[echoed] = verify;
    oscard['NO_APPLICATION_ID'] = result;
    verify = 'NO_APPLICATION_ID';
    oscard[result] = verify;
    oscard['UNKNOWN_USER_OR_APPLICATION'] = output;
    verify = 'UNKNOWN_USER_OR_APPLICATION';
    oscard[output] = verify;
    oscard['INVALID_CHANNEL'] = sizing;
    verify = 'INVALID_CHANNEL';
    oscard[sizing] = verify;
    oscard['LAUNCHABILITY_CHECK_FAILED_OTHER'] = kiloes;
    verify = 'LAUNCHABILITY_CHECK_FAILED_OTHER';
    oscard[kiloes] = verify;
    oscard['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = backup;
    verify = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    oscard[backup] = verify;
    oscard['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = foxtra;
    verify = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    oscard[foxtra] = verify;
    oscard['FAILED_ACTIVITY_LAUNCH_CHECKS'] = romeon;
    verify = 'FAILED_ACTIVITY_LAUNCH_CHECKS';
    oscard[romeon] = verify;
    oscard['NOT_CONNECTED_TO_VOICE_CHANNEL'] = yankee;
    verify = 'NOT_CONNECTED_TO_VOICE_CHANNEL';
    oscard[yankee] = verify;
    oscard['AIT_NOT_ENABLED_FOR_USER'] = offset;
    verify = 'AIT_NOT_ENABLED_FOR_USER';
    oscard[offset] = verify;
    var _closure1_slot25 = oscard;
    oscard = function(argFoo, argBar, argBaz) { // Original name: handleFetchDone
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            entity = argBaz;
            michal = entity.guildId;
            entity = michal === tangon;
            if(entity) { _fun00028_ip = 34; continue _fun00027 }
 18:
            zuuluu = null;
            michal = zuuluu == michal;
            if(!michal) { _fun00028_ip = 31; continue _fun00027 }
 27:
            michal = zuuluu == tangon;
 31:
            entity = michal;
 34:
            if(!entity) { _fun00028_ip = 46; continue _fun00027 }
 37:
            michal = argBar;
            entity = undefined;
            entity = michal.bind(entity)();
 46:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot26 = oscard;
    oscard = 52;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/activities/EmbeddedActivitiesActionCreators.tsx';
    oscard = golfie.bind(option)(oscard);
    oscard = function(argFoo) { // Original name: maybeDisconnectFromCurrentActivity
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            tangon = _closure1_slot14;
            zuuluu = tangon.getSelfEmbeddedActivityForLocation;
            entity = argFoo;
            entity = zuuluu.bind(tangon)(entity);
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00030_ip = 65; continue _fun00029 }
 27:
            zuuluu = _closure1_slot30;
            michal = {};
            tangon = entity.location;
            michal['location'] = tangon;
            entity = entity.applicationId;
            michal['applicationId'] = entity;
            entity = false;
            michal['showFeedback'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
 65:
            entity = undefined;
            return entity;
        }
    };
    zuuluu['maybeDisconnectFromCurrentActivity'] = oscard;
    oscard = function() { // Original name: runPrimaryAppCommandOrJoinEmbeddedActivity
        entity = undefined;
        tangon = _closure1_slot27;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['runPrimaryAppCommandOrJoinEmbeddedActivity'] = oscard;
    zuuluu['stopEmbeddedActivity'] = report;
    report = function() { // Original name: requestRespondToSeriousThermalState
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['requestRespondToSeriousThermalState'] = report;
    report = function() { // Original name: consumeRequestToReactToSeriousThermalState
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['consumeRequestToReactToSeriousThermalState'] = report;
    report = function() { // Original name: disregardSeriousThermalState
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['disregardSeriousThermalState'] = report;
    report = function() { // Original name: fetchDeveloperApplications
        entity = undefined;
        tangon = _closure1_slot31;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchDeveloperApplications'] = report;
    report = function() { // Original name: uploadImageAttachment
        entity = undefined;
        tangon = _closure1_slot32;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['uploadImageAttachment'] = report;
    report = function() { // Original name: fetchShelf
        entity = undefined;
        tangon = _closure1_slot33;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchShelf'] = report;
    report = function() { // Original name: sendEmbeddedActivityInvite
        entity = undefined;
        tangon = _closure1_slot34;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['sendEmbeddedActivityInvite'] = report;
    report = function() { // Original name: sendEmbeddedActivityInviteUser
        entity = undefined;
        tangon = _closure1_slot35;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['sendEmbeddedActivityInviteUser'] = report;
    report = function() { // Original name: dismissNewActivityIndicator
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dismissNewActivityIndicator'] = report;
    report = function() { // Original name: validateTestMode
        entity = undefined;
        tangon = _closure1_slot36;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['validateTestMode'] = report;
    zuuluu['updateActivityPanelMode'] = tangon;
    tangon = function(argFoo) { // Original name: updateFocusedActivityLayout
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT';
        michal['type'] = report;
        report = argFoo;
        michal['focusedActivityLayout'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateFocusedActivityLayout'] = tangon;
    tangon = function() { // Original name: openActivityPopoutWindow
        tangon = _closure1_slot37;
        entity = _closure1_slot16;
        zuuluu = entity.ACTIVITY_POPOUT_WINDOW;
        entity = undefined;
        zuuluu = tangon.bind(entity)(zuuluu);
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 19;
        michal = tangon[michal];
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'ACTIVITY_POPOUT_WINDOW_OPEN';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['openActivityPopoutWindow'] = tangon;
    michal = function(argFoo) { // Original name: updateActivityPopoutWindowLayout
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 19;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT';
        michal['type'] = report;
        report = argFoo;
        michal['layout'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateActivityPopoutWindowLayout'] = michal;
    return entity;
})();
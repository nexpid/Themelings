// app/modules/activities/EmbeddedActivitiesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    golfie = argBar;
    verify = argBaz;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = option;
    entity = function() { // Original name: _runPrimaryAppCommandOrLaunchEmbeddedActivity
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 1503; continue _fun00001 }
 15:
                    yankee = michal.channelId;
                    romeon = michal.applicationId;
                    option = michal.isStart;
                    limora = michal.analyticsLocations;
                    sierra = michal.locationObject;
                    record = michal.embeddedActivitiesManager;
                    quebec = michal.componentId;
                    result = michal.commandOrigin;
                    output = michal.sectionName;
                    sizing = michal.source;
                    status = michal.partyId;
                    kiloes = michal.onExecutedCallback;
                    target = michal.referrerId;
                    variable36 = michal.customId;
                    config = michal.joinUserId;
                    sequen = michal.joinSessionId;
                    vacuum = michal.joinSecret;
                    papara = michal.inviterUserId;
                    update = michal.isContextlessActivity;
                    verify = undefined;
                    tangon = undefined;
                    echoed = undefined;
                    report = undefined;
                    foxtra = undefined;
                    equals = undefined;
                    source = undefined;
                    SaveGenerator(address=144);
 142:
                    return verify;
 144:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscard) { _fun00002_ip = 1500; continue _fun00001 }
 153:
                    ctrled = _closure1_slot9;
                    backup = ctrled.getChannel;
                    offset = yankee;
                    backup = backup.bind(ctrled)(offset);
                    tangon = backup;
                    offset = null;
                    backup = offset == backup;
                    ctrled = undefined;
                    if(backup) { _fun00002_ip = 200; continue _fun00001 }
 187:
                    cntext = tangon;
                    backup = cntext.getGuildId;
                    ctrled = backup.bind(cntext)();
 200:
                    cntext = offset != ctrled;
                    backup = undefined;
                    if(!cntext) { _fun00002_ip = 212; continue _fun00001 }
 209:
                    backup = ctrled;
 212:
                    echoed = backup;
                    ctrled = _closure1_slot0;
                    cntext = _closure1_slot2;
                    backup = 17;
                    backup = cntext[backup];
                    ctrled = ctrled.bind(verify)(backup);
                    backup = ctrled.getIsContextlessActivitiesExperimentEnabled;
                    backup = backup.bind(ctrled)();
                    report = backup;
                    if(backup) { _fun00002_ip = 295; continue _fun00001 }
 251:
                    backup = echoed;
                    if(!(offset == backup)) { _fun00002_ip = 295; continue _fun00001 }
 258:
                    backup = tangon;
                    ctrled = offset == backup;
                    backup = undefined;
                    if(ctrled) { _fun00002_ip = 283; continue _fun00001 }
 270:
                    cntext = tangon;
                    ctrled = cntext.isPrivate;
                    backup = ctrled.bind(cntext)();
 283:
                    if(!(offset != backup)) { _fun00002_ip = 290; continue _fun00001 }
 287:
                    if(backup) { _fun00002_ip = 295; continue _fun00001 }
 290:
                    backup = false;
                    return backup;
 295:
                    ctrled = _closure1_slot0;
                    cntext = _closure1_slot2;
                    backup = 18;
                    backup = cntext[backup];
                    ctrled = ctrled.bind(verify)(backup);
                    backup = ctrled.createNonce;
                    foxtra = backup.bind(ctrled)();
 325: // try_start_0
                    cntext = _closure1_slot1;
                    ctrled = _closure1_slot2;
                    backup = 19;
                    ctrled = ctrled[backup];
                    whisks = cntext.bind(verify)(ctrled);
                    cntext = whisks.dispatch;
                    ctrled = {};
                    variable37 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
                    ctrled['type'] = variable37;
                    variable37 = foxtra;
                    ctrled['nonce'] = variable37;
                    variable37 = romeon;
                    ctrled['applicationId'] = variable37;
                    variable37 = yankee;
                    variable38 = offset != variable37;
                    variable37 = null;
                    if(!variable38) { _fun00002_ip = 390; continue _fun00001 }
 387:
                    variable37 = yankee;
 390:
                    ctrled['channelId'] = variable37;
                    ctrled['componentId'] = quebec;
                    quebec = limora;
                    ctrled['analyticsLocations'] = quebec;
                    quebec = sizing;
                    ctrled['source'] = quebec;
                    quebec = result;
                    ctrled['commandOrigin'] = quebec;
                    quebec = papara;
                    ctrled['inviterUserId'] = quebec;
                    quebec = {};
                    quebec['customId'] = variable36;
                    variable36 = target;
                    quebec['referrerId'] = variable36;
                    ctrled['launchParams'] = quebec;
                    ctrled = cntext.bind(whisks)(ctrled);
                    cntext = _closure1_slot12;
                    ctrled = cntext.getCurrentUser;
                    ctrled = ctrled.bind(cntext)();
                    equals = ctrled;
                    if(!(offset != ctrled)) { _fun00002_ip = 648; continue _fun00001 }
 478:
                    cntext = _closure1_slot1;
                    whisks = _closure1_slot2;
                    ctrled = 20;
                    ctrled = whisks[ctrled];
                    cntext = cntext.bind(verify)(ctrled);
                    ctrled = {};
                    whisks = option;
                    quebec = _closure1_slot21;
                    if(whisks) { _fun00002_ip = 518; continue _fun00001 }
 510:
                    whisks = quebec.JOIN;
                    _fun00002_ip = 524; continue _fun00001;
 518:
                    whisks = quebec.LAUNCH;
 524:
                    ctrled['type'] = whisks;
                    whisks = equals;
                    quebec = offset == whisks;
                    whisks = undefined;
                    if(quebec) { _fun00002_ip = 545; continue _fun00001 }
 540:
                    whisks = equals.id;
 545:
                    ctrled['userId'] = whisks;
                    whisks = echoed;
                    ctrled['guildId'] = whisks;
                    whisks = yankee;
                    ctrled['channelId'] = whisks;
                    whisks = tangon;
                    equals = offset == whisks;
                    whisks = undefined;
                    if(equals) { _fun00002_ip = 583; continue _fun00001 }
 575:
                    equals = tangon;
                    whisks = equals.type;
 583:
                    ctrled['channelType'] = whisks;
                    whisks = romeon;
                    ctrled['applicationId'] = whisks;
                    ctrled['locationObject'] = sierra;
                    sierra = limora;
                    if(!(offset == sierra)) { _fun00002_ip = 613; continue _fun00001 }
 607:
                    sierra = new Array(0);
                    _fun00002_ip = 616; continue _fun00001;
 613:
                    sierra = limora;
 616:
                    ctrled['analyticsLocations'] = sierra;
                    sierra = sizing;
                    ctrled['source'] = sierra;
                    ctrled['partyId'] = status;
                    ctrled['referrerId'] = target;
                    ctrled['inviterUserId'] = papara;
                    ctrled = cntext.bind(verify)(ctrled);
 648:
                    ctrled = option;
                    if(!ctrled) { _fun00002_ip = 664; continue _fun00001 }
 654:
                    ctrled = yankee;
                    if(!(offset == ctrled)) { _fun00002_ip = 849; continue _fun00001 }
 664:
                    ctrled = {};
                    cntext = romeon;
                    ctrled['applicationId'] = cntext;
                    cntext = yankee;
                    ctrled['channelId'] = cntext;
                    ctrled['embeddedActivitiesManager'] = record;
                    record = option;
                    ctrled['isStart'] = record;
                    record = echoed;
                    ctrled['guildId'] = record;
                    ctrled['joinUserId'] = config;
                    ctrled['joinSessionId'] = sequen;
                    ctrled['joinSecret'] = vacuum;
                    ctrled['isContextlessActivity'] = update;
                    update = function() { // Original name: legacyLaunchActivity
                        entity = undefined;
                        tangon = _closure1_slot29;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    update = update.bind(verify)(ctrled);
                    SaveGenerator(address=734);
 732:
                    return update;
 734:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=21);
                    if(ctrled) { _fun00002_ip = 846; continue _fun00001 }
 740:
                    source = update;
                    ctrled = kiloes;
                    if(!(offset != ctrled)) { _fun00002_ip = 757; continue _fun00001 }
 750:
                    ctrled = kiloes;
                    ctrled = ctrled.bind(verify)();
 757:
                    ctrled = source;
                    vacuum = ctrled.result;
                    ctrled = 'failure';
                    if(!(ctrled === vacuum)) { _fun00002_ip = 1202; continue _fun00001 }
 777:
                    vacuum = _closure1_slot1;
                    config = _closure1_slot2;
                    ctrled = 21;
                    sequen = config[ctrled];
                    sequen = vacuum.bind(verify)(sequen);
                    ctrled = config[ctrled];
                    ctrled = vacuum.bind(verify)(ctrled);
                    ctrled = ctrled.Reasons;
                    variable40 = ctrled.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                    variable39 = source.reason;
                    ctrled = sequen.prototype;
                    ctrled = Object.create(ctrled, {constructor: {value: sequen}});
                    variable41 = ctrled;
                    source = new variable41[sequen](variable40, variable39, variable38);
                    source = source instanceof Object ? source : ctrled;
                    throw source;
 846: // try_end0
                    return update;
 849: // try_start_1
                    ctrled = romeon;
                    vacuum = tangon;
                    tangon = offset == vacuum;
                    update = undefined;
                    if(tangon) { _fun00002_ip = 869; continue _fun00001 }
 864:
                    update = vacuum.type;
 869:
                    tangon = _closure1_slot19;
                    tangon = tangon.GUILD_VOICE;
                    tangon = update === tangon;
                    source = _closure1_slot5;
                    update = source.getApplication;
                    update = update.bind(source)(ctrled);
                    source = offset != update;
                    if(!source) { _fun00002_ip = 952; continue _fun00001 }
 905:
                    sequen = _closure1_slot0;
                    config = _closure1_slot2;
                    ctrled = 24;
                    ctrled = config[ctrled];
                    config = sequen.bind(verify)(ctrled);
                    sequen = config.hasFlag;
                    ctrled = update.flags;
                    update = _closure1_slot18;
                    update = update.EMBEDDED;
                    source = sequen.bind(config)(ctrled, update);
 952:
                    ctrled = _closure1_slot0;
                    sequen = _closure1_slot2;
                    update = 25;
                    update = sequen[update];
                    ctrled = ctrled.bind(verify)(update);
                    update = ctrled.isActivityInTextSupportedForChannel;
                    update = update.bind(ctrled)(vacuum);
                    if(!tangon) { _fun00002_ip = 989; continue _fun00001 }
 986:
                    tangon = source;
 989:
                    if(tangon) { _fun00002_ip = 995; continue _fun00001 }
 992:
                    tangon = update;
 995:
                    if(tangon) { _fun00002_ip = 1061; continue _fun00001 }
 998:
                    update = _closure1_slot1;
                    ctrled = _closure1_slot2;
                    tangon = 21;
                    source = ctrled[tangon];
                    source = update.bind(verify)(source);
                    tangon = ctrled[tangon];
                    tangon = update.bind(verify)(tangon);
                    tangon = tangon.Reasons;
                    variable40 = tangon.INVALID_CHANNEL;
                    update = source.prototype;
                    update = Object.create(update, {constructor: {value: source}});
                    variable41 = update;
                    tangon = new variable41[source](variable40, variable39);
                    tangon = tangon instanceof Object ? tangon : update;
                    throw tangon;
 1061:
                    tangon = {};
                    update = romeon;
                    tangon['applicationId'] = update;
                    update = foxtra;
                    tangon['nonce'] = update;
                    update = yankee;
                    tangon['channelId'] = update;
                    tangon['guildId'] = echoed;
                    tangon['commandOrigin'] = result;
                    tangon['sectionName'] = output;
                    tangon['source'] = sizing;
                    tangon['onExecutedCallback'] = kiloes;
                    tangon['clientSupportsContextlessActivityLaunch'] = report;
                    zuuluu = function() { // Original name: maybeSendPrimaryAppCommand
                        entity = undefined;
                        tangon = _closure1_slot28;
                        zuuluu = tangon.apply;
                        entity = arguments;
                        michal = entity;
                        entity = this;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    zuuluu = zuuluu.bind(verify)(tangon);
                    SaveGenerator(address=1127);
 1125:
                    return zuuluu;
 1127:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 1278; continue _fun00001 }
 1136:
                    if(zuuluu) { _fun00002_ip = 1202; continue _fun00001 }
 1139:
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tangon = 21;
                    kiloes = sizing[tangon];
                    kiloes = report.bind(verify)(kiloes);
                    tangon = sizing[tangon];
                    tangon = report.bind(verify)(tangon);
                    tangon = tangon.Reasons;
                    variable40 = tangon.PRIMARY_APP_COMMAND_NOT_FOUND;
                    report = kiloes.prototype;
                    report = Object.create(report, {constructor: {value: kiloes}});
                    variable41 = report;
                    tangon = new variable41[kiloes](variable40, variable39);
                    tangon = tangon instanceof Object ? tangon : report;
                    throw tangon;
 1202:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[backup];
                    backup = report.bind(verify)(tangon);
                    report = backup.dispatch;
                    tangon = {};
                    kiloes = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                    tangon['type'] = kiloes;
                    kiloes = foxtra;
                    tangon['nonce'] = kiloes;
                    kiloes = romeon;
                    tangon['applicationId'] = kiloes;
                    kiloes = yankee;
                    sizing = offset != kiloes;
                    kiloes = null;
                    if(!sizing) { _fun00002_ip = 1264; continue _fun00001 }
 1261:
                    kiloes = yankee;
 1264:
                    tangon['channelId'] = kiloes;
                    tangon = report.bind(backup)(tangon);
 1273: // try_end1
                    tangon = true;
                    return tangon;
 1278:
                    return zuuluu;
 1281: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=6);
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 19;
                    zuuluu = report[zuuluu];
                    report = tangon.bind(verify)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    backup = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                    zuuluu['type'] = backup;
                    zuuluu['nonce'] = foxtra;
                    zuuluu['applicationId'] = romeon;
                    romeon = yankee;
                    romeon = offset != romeon;
                    offset = null;
                    if(!romeon) { _fun00002_ip = 1342; continue _fun00001 }
 1339:
                    offset = yankee;
 1342:
                    zuuluu['channelId'] = offset;
                    zuuluu['isStart'] = option;
                    offset = golfie;
                    yankee = _closure1_slot1;
                    romeon = _closure1_slot2;
                    option = 21;
                    option = romeon[option];
                    option = yankee.bind(verify)(option);
                    option = offset instanceof option;
                    if(option) { _fun00002_ip = 1483; continue _fun00001 }
 1381:
                    yankee = golfie;
                    romeon = _closure1_slot1;
                    option = _closure1_slot2;
                    offset = 22;
                    option = option[offset];
                    option = romeon.bind(verify)(option);
                    option = yankee instanceof option;
                    if(option) { _fun00002_ip = 1483; continue _fun00001 }
 1411:
                    yankee = golfie;
                    romeon = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    option = 23;
                    option = foxtra[option];
                    option = romeon.bind(verify)(option);
                    option = yankee instanceof option;
                    if(option) { _fun00002_ip = 1483; continue _fun00001 }
 1441:
                    option = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[offset];
                    verify = option.bind(verify)(oscard);
                    variable40 = golfie;
                    option = verify.prototype;
                    option = Object.create(option, {constructor: {value: verify}});
                    variable41 = option;
                    oscard = new variable41[verify](variable40, variable39);
                    oscard = oscard instanceof Object ? oscard : option;
                    _fun00002_ip = 1486; continue _fun00001;
 1483:
                    oscard = golfie;
 1486:
                    zuuluu['error'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    zuuluu = false;
                    return zuuluu;
 1500:
                    return michal;
 1503:
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
                    tangon = 26;
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
                    romeon = 27;
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
                    backup = 28;
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
                        entity = 29;
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
                                    entity = 30;
                                    report = report[entity];
                                    entity = undefined;
                                    yankee = option.bind(entity)(report);
                                    offset = yankee.track;
                                    report = _closure1_slot22;
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
                                    offset = 23;
                                    zuuluu = zuuluu[offset];
                                    zuuluu = report.bind(entity)(zuuluu);
                                    zuuluu = zuuluu.ReasonCodes;
                                    zuuluu = verify in zuuluu;
                                    if(zuuluu) { _fun00008_ip = 295; continue _fun00007 }
 217:
                                    report = _closure5_slot1;
                                    option = _closure1_slot1;
                                    romeon = _closure1_slot2;
                                    zuuluu = 23;
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
                                    michal = 22;
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
                    tangon = 26;
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
    entity = function() { // Original name: _legacyLaunchActivity
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
                    if(zuuluu) { _fun00010_ip = 1677; continue _fun00009 }
 13:
                    result = michal.applicationId;
                    echoed = michal.channelId;
                    vacuum = michal.embeddedActivitiesManager;
                    report = michal.isStart;
                    update = michal.guildId;
                    foxtra = michal.joinUserId;
                    romeon = michal.joinSessionId;
                    ctrled = michal.joinSecret;
                    backup = michal.isContextlessActivity;
                    verify = undefined;
                    SaveGenerator(address=70);
 68:
                    return verify;
 70:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 1674; continue _fun00009 }
 79:
                    oscard = _closure1_slot8;
                    zuuluu = oscard.getSessionId;
                    output = zuuluu.bind(oscard)();
                    oscard = _closure1_slot12;
                    zuuluu = oscard.getCurrentUser;
                    source = zuuluu.bind(oscard)();
                    sizing = null;
                    if(!(sizing != result)) { _fun00010_ip = 1645; continue _fun00009 }
 118:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    zuuluu = 17;
                    zuuluu = option[zuuluu];
                    oscard = oscard.bind(verify)(zuuluu);
                    zuuluu = oscard.getIsContextlessActivitiesExperimentEnabled;
                    oscard = zuuluu.bind(oscard)();
                    golfie = _closure1_slot1;
                    zuuluu = 31;
                    zuuluu = option[zuuluu];
                    zuuluu = golfie.bind(verify)(zuuluu);
                    zuuluu = zuuluu.bind(verify)(result, echoed);
                    SaveGenerator(address=174);
 172:
                    return zuuluu;
 174:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00010_ip = 1642; continue _fun00009 }
 183:
                    if(!(sizing != source)) { _fun00010_ip = 1613; continue _fun00009 }
 190:
                    if(!(sizing != zuuluu)) { _fun00010_ip = 1613; continue _fun00009 }
 197:
                    if(oscard) { _fun00010_ip = 286; continue _fun00009 }
 200:
                    if(!(sizing == echoed)) { _fun00010_ip = 286; continue _fun00009 }
 204:
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    golfie = 32;
                    golfie = offset[golfie];
                    golfie = option.bind(verify)(golfie);
                    yankee = golfie.ComponentDispatch;
                    offset = yankee.dispatch;
                    golfie = _closure1_slot20;
                    option = golfie.SHOW_ACTIVITIES_CHANNEL_SELECTOR;
                    golfie = {};
                    golfie['applicationId'] = result;
                    golfie = offset.bind(yankee)(option, golfie);
                    golfie = {};
                    option = 'failure';
                    golfie['result'] = option;
                    option = _closure1_slot25;
                    option = option.INVALID_CHANNEL;
                    golfie['reason'] = option;
                    return golfie;
 286:
                    option = _closure1_slot9;
                    golfie = option.getChannel;
                    kiloes = golfie.bind(option)(echoed);
                    if(oscard) { _fun00010_ip = 336; continue _fun00009 }
 303:
                    if(!(sizing == kiloes)) { _fun00010_ip = 336; continue _fun00009 }
 307:
                    oscard = {};
                    golfie = 'failure';
                    oscard['result'] = golfie;
                    golfie = _closure1_slot25;
                    golfie = golfie.INVALID_CHANNEL;
                    oscard['reason'] = golfie;
                    return oscard;
 336:
                    option = _closure1_slot0;
                    oscard = _closure1_slot2;
                    offset = 33;
                    golfie = oscard[offset];
                    sequen = option.bind(verify)(golfie);
                    yankee = sequen.getEmbeddedActivityLaunchability;
                    golfie = {};
                    golfie['channelId'] = echoed;
                    config = _closure1_slot9;
                    golfie['ChannelStore'] = config;
                    config = _closure1_slot10;
                    golfie['GuildStore'] = config;
                    config = _closure1_slot11;
                    golfie['PermissionStore'] = config;
                    config = _closure1_slot13;
                    golfie['VoiceStateStore'] = config;
                    golfie = yankee.bind(sequen)(golfie);
                    oscard = oscard[offset];
                    oscard = option.bind(verify)(oscard);
                    oscard = oscard.EmbeddedActivityLaunchability;
                    oscard = oscard.CAN_LAUNCH;
                    if(!(golfie === oscard)) { _fun00010_ip = 1317; continue _fun00009 }
 437:
                    option = _closure1_slot14;
                    oscard = option.getCurrentEmbeddedActivity;
                    config = oscard.bind(option)();
                    option = sizing == config;
                    oscard = undefined;
                    if(option) { _fun00010_ip = 465; continue _fun00009 }
 460:
                    oscard = config.applicationId;
 465:
                    oscard = sizing != oscard;
                    yankee = undefined;
                    if(!oscard) { _fun00010_ip = 503; continue _fun00009 }
 474:
                    sequen = _closure1_slot5;
                    option = sequen.getApplication;
                    record = sizing == config;
                    oscard = undefined;
                    if(record) { _fun00010_ip = 498; continue _fun00009 }
 493:
                    oscard = config.applicationId;
 498:
                    yankee = option.bind(sequen)(oscard);
 503:
                    if(!report) { _fun00010_ip = 610; continue _fun00009 }
 506:
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    report = 37;
                    report = option[report];
                    option = oscard.bind(verify)(report);
                    oscard = option.confirmActivityLaunchChecks;
                    report = {};
                    report['applicationId'] = result;
                    report['application'] = zuuluu;
                    report['channel'] = kiloes;
                    report['currentEmbeddedApplication'] = yankee;
                    report['embeddedActivitiesManager'] = vacuum;
                    report['user'] = source;
                    report = oscard.bind(option)(report);
                    SaveGenerator(address=569);
 567:
                    return report;
 569:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscard) { _fun00010_ip = 1314; continue _fun00009 }
 578:
                    if(report) { _fun00010_ip = 610; continue _fun00009 }
 581:
                    oscard = {};
                    option = 'failure';
                    oscard['result'] = option;
                    option = _closure1_slot25;
                    option = option.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    oscard['reason'] = option;
                    return oscard;
 610:
                    if(!(sizing != kiloes)) { _fun00010_ip = 825; continue _fun00009 }
 617:
                    option = _closure1_slot1;
                    source = _closure1_slot2;
                    oscard = 38;
                    oscard = source[oscard];
                    option = option.bind(verify)(oscard);
                    oscard = kiloes.id;
                    option = option.bind(verify)(oscard);
                    vacuum = _closure1_slot15;
                    source = vacuum.includes;
                    oscard = kiloes.type;
                    oscard = source.bind(vacuum)(oscard);
                    if(option) { _fun00010_ip = 735; continue _fun00009 }
 669:
                    source = _closure1_slot0;
                    vacuum = _closure1_slot2;
                    option = 25;
                    option = vacuum[option];
                    source = source.bind(verify)(option);
                    option = source.isActivitiesInTextEnabled;
                    option = option.bind(source)(kiloes);
                    if(!option) { _fun00010_ip = 706; continue _fun00009 }
 703:
                    if(oscard) { _fun00010_ip = 825; continue _fun00009 }
 706:
                    oscard = {};
                    option = 'failure';
                    oscard['result'] = option;
                    option = _closure1_slot25;
                    option = option.AIT_NOT_ENABLED_FOR_USER;
                    oscard['reason'] = option;
                    return oscard;
 735:
                    option = _closure1_slot1;
                    source = _closure1_slot2;
                    oscard = 39;
                    oscard = source[oscard];
                    option = option.bind(verify)(oscard);
                    oscard = {};
                    kiloes = kiloes.id;
                    oscard['channelId'] = kiloes;
                    yankee = sizing != yankee;
                    oscard['bypassChangeModal'] = yankee;
                    oscard = option.bind(verify)(oscard);
                    SaveGenerator(address=784);
 782:
                    return oscard;
 784:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(option) { _fun00010_ip = 1311; continue _fun00009 }
 793:
                    if(oscard) { _fun00010_ip = 825; continue _fun00009 }
 796:
                    option = {};
                    yankee = 'failure';
                    option['result'] = yankee;
                    yankee = _closure1_slot25;
                    yankee = yankee.NOT_CONNECTED_TO_VOICE_CHANNEL;
                    option['reason'] = yankee;
                    return option;
 825:
                    option = sizing == ctrled;
                    if(!option) { _fun00010_ip = 836; continue _fun00009 }
 832:
                    option = sizing != foxtra;
 836:
                    if(!option) { _fun00010_ip = 843; continue _fun00009 }
 839:
                    option = sizing != romeon;
 843:
                    if(!option) { _fun00010_ip = 852; continue _fun00009 }
 846:
                    yankee = true;
                    option = yankee === backup;
 852:
                    if(!option) { _fun00010_ip = 904; continue _fun00009 }
 855:
                    yankee = _closure1_slot1;
                    backup = _closure1_slot2;
                    option = 40;
                    option = backup[option];
                    yankee = yankee.bind(verify)(option);
                    option = yankee.getJoinSecret;
                    option = option.bind(yankee)(foxtra, romeon, result);
                    SaveGenerator(address=892);
 890:
                    return option;
 892:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    ctrled = option;
                    if(yankee) { _fun00010_ip = 1308; continue _fun00009 }
 904:
                    if(!(sizing != echoed)) { _fun00010_ip = 915; continue _fun00009 }
 908:
                    if(!(sizing != ctrled)) { _fun00010_ip = 1116; continue _fun00009 }
 915:
                    if(!(sizing == ctrled)) { _fun00010_ip = 950; continue _fun00009 }
 919:
                    romeon = {};
                    yankee = 'failure';
                    romeon['result'] = yankee;
                    yankee = _closure1_slot25;
                    yankee = yankee.OTHER;
                    romeon['reason'] = yankee;
                    _fun00010_ip = 1108; continue _fun00009;
 950:
                    foxtra = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    yankee = 41;
                    yankee = vacuum[yankee];
                    backup = foxtra.bind(verify)(yankee);
                    foxtra = backup.post;
                    yankee = {'url': null, 'body': null, 'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    source = _closure1_slot17;
                    kiloes = source.ACTIVITY_JOIN_INSTANCE;
                    kiloes = kiloes.bind(source)(result, ctrled);
                    yankee['url'] = kiloes;
                    kiloes = {};
                    kiloes['session_id'] = output;
                    yankee['body'] = kiloes;
                    kiloes = {};
                    ctrled = _closure1_slot0;
                    source = 42;
                    source = vacuum[source];
                    source = ctrled.bind(verify)(source);
                    source = source.NetworkActionNames;
                    source = source.EMBEDDED_ACTIVITIES_LAUNCH;
                    kiloes['event'] = source;
                    source = {};
                    source['application_id'] = result;
                    source['session_id'] = output;
                    kiloes['properties'] = source;
                    yankee['trackedActionData'] = kiloes;
                    yankee = foxtra.bind(backup)(yankee);
                    SaveGenerator(address=1088);
 1086:
                    return yankee;
 1088:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(foxtra) { _fun00010_ip = 1113; continue _fun00009 }
 1094:
                    foxtra = {};
                    backup = 'success';
                    foxtra['result'] = backup;
                    romeon = foxtra;
 1108:
                    _fun00010_ip = 1302; continue _fun00009;
 1113:
                    return yankee;
 1116:
                    foxtra = _closure1_slot1;
                    backup = _closure1_slot2;
                    yankee = 41;
                    yankee = backup[yankee];
                    backup = foxtra.bind(verify)(yankee);
                    foxtra = backup.post;
                    yankee = {'url': null, 'body': null, 'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    source = _closure1_slot17;
                    kiloes = source.ACTIVITY_CHANNEL_LAUNCH;
                    kiloes = kiloes.bind(source)(echoed, result);
                    yankee['url'] = kiloes;
                    kiloes = {};
                    kiloes['session_id'] = output;
                    source = sizing != update;
                    sizing = undefined;
                    if(!source) { _fun00010_ip = 1193; continue _fun00009 }
 1190:
                    sizing = update;
 1193:
                    kiloes['guild_id'] = sizing;
                    yankee['body'] = kiloes;
                    kiloes = {};
                    source = _closure1_slot0;
                    ctrled = _closure1_slot2;
                    sizing = 42;
                    sizing = ctrled[sizing];
                    sizing = source.bind(verify)(sizing);
                    sizing = sizing.NetworkActionNames;
                    sizing = sizing.EMBEDDED_ACTIVITIES_LAUNCH;
                    kiloes['event'] = sizing;
                    sizing = {};
                    sizing['guild_id'] = update;
                    sizing['channel_id'] = echoed;
                    sizing['application_id'] = result;
                    sizing['session_id'] = output;
                    kiloes['properties'] = sizing;
                    yankee['trackedActionData'] = kiloes;
                    yankee = foxtra.bind(backup)(yankee);
                    SaveGenerator(address=1282);
 1280:
                    return yankee;
 1282:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(foxtra) { _fun00010_ip = 1305; continue _fun00009 }
 1288:
                    foxtra = {};
                    backup = 'success';
                    foxtra['result'] = backup;
                    romeon = foxtra;
 1302:
                    return romeon;
 1305:
                    return yankee;
 1308:
                    return option;
 1311:
                    return oscard;
 1314:
                    return report;
 1317:
                    report = _closure1_slot25;
                    oscard = report.LAUNCHABILITY_CHECK_FAILED_OTHER;
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = option.bind(verify)(report);
                    report = report.EmbeddedActivityLaunchability;
                    report = report.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if(!(golfie !== report)) { _fun00010_ip = 1554; continue _fun00009 }
 1363:
                    option = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = option.bind(verify)(report);
                    report = report.EmbeddedActivityLaunchability;
                    report = report.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    if(!(golfie === report)) { _fun00010_ip = 1594; continue _fun00009 }
 1399:
                    report = _closure1_slot25;
                    oscard = report.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    option = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    golfie = 35;
                    golfie = kiloes[golfie];
                    offset = option.bind(verify)(golfie);
                    option = offset.show;
                    golfie = {};
                    backup = _closure1_slot0;
                    yankee = 36;
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
                    _fun00010_ip = 1594; continue _fun00009;
 1554:
                    report = _closure1_slot25;
                    oscard = report.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    option = _closure1_slot0;
                    offset = _closure1_slot2;
                    golfie = 34;
                    golfie = offset[golfie];
                    option = option.bind(verify)(golfie);
                    golfie = option.showActivitiesInvalidPermissionsAlert;
                    golfie = golfie.bind(option)();
 1594:
                    report = {};
                    golfie = 'failure';
                    report['result'] = golfie;
                    report['reason'] = oscard;
                    return report;
 1613:
                    report = {};
                    oscard = 'failure';
                    report['result'] = oscard;
                    oscard = _closure1_slot25;
                    oscard = oscard.UNKNOWN_USER_OR_APPLICATION;
                    report['reason'] = oscard;
                    return report;
 1642:
                    return zuuluu;
 1645:
                    zuuluu = {};
                    report = 'failure';
                    zuuluu['result'] = report;
                    tangon = _closure1_slot25;
                    tangon = tangon.NO_APPLICATION_ID;
                    zuuluu['reason'] = tangon;
                    return zuuluu;
 1674:
                    return michal;
 1677:
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
            option = entity.applicationId;
            var _closure2_slot0 = option;
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
            verify = report.bind(entity)(tangon);
            oscard = verify.dispatch;
            tangon = {};
            report = 'EMBEDDED_ACTIVITY_CLOSE';
            tangon['type'] = report;
            tangon['applicationId'] = option;
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
            tangon = oscard.bind(verify)(tangon);
            oscard = _closure1_slot0;
            verify = _closure1_slot2;
            tangon = 43;
            tangon = verify[tangon];
            oscard = oscard.bind(entity)(tangon);
            tangon = oscard.getEmbeddedActivityLocationChannelId;
            tangon = tangon.bind(oscard)(golfie);
            if(!(report != tangon)) { _fun00012_ip = 319; continue _fun00011 }
 164:
            golfie = _closure1_slot6;
            oscard = golfie.getSelectedParticipantId;
            oscard = oscard.bind(golfie)(tangon);
            verify = _closure1_slot12;
            golfie = verify.getCurrentUser;
            verify = golfie.bind(verify)();
            offset = report == verify;
            golfie = undefined;
            if(offset) { _fun00012_ip = 206; continue _fun00011 }
 201:
            golfie = verify.id;
 206:
            offset = _closure1_slot14;
            verify = offset.getEmbeddedActivitiesForChannel;
            offset = verify.bind(offset)(tangon);
            verify = offset.find;
            zuuluu = function(argFoo) {
                entity = argFoo;
                michal = entity.applicationId;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            zuuluu = verify.bind(offset)(zuuluu);
            if(!(report != zuuluu)) { _fun00012_ip = 321; continue _fun00011 }
 240:
            if(!(report != golfie)) { _fun00012_ip = 321; continue _fun00011 }
 244:
            zuuluu = '';
            if(!(zuuluu !== golfie)) { _fun00012_ip = 321; continue _fun00011 }
 252:
            golfie = _closure1_slot0;
            verify = _closure1_slot2;
            zuuluu = 44;
            zuuluu = verify[zuuluu];
            golfie = golfie.bind(entity)(zuuluu);
            zuuluu = golfie.embeddedActivityParticipantId;
            zuuluu = zuuluu.bind(golfie)(option);
            if(!(oscard === zuuluu)) { _fun00012_ip = 319; continue _fun00011 }
 287:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 45;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.selectParticipant;
            michal = michal.bind(zuuluu)(tangon, report);
 319:
            return entity;
 321:
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
                    if(michal) { _fun00014_ip = 320; continue _fun00013 }
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
                    option = _closure1_slot17;
                    option = option.APPLICATIONS_WITH_ASSETS;
                    michal['url'] = option;
                    verify = {};
                    option = true;
                    verify['with_team_applications'] = option;
                    michal['query'] = verify;
                    michal['oldFormErrors'] = option;
                    michal['rejectWithError'] = option;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=132);
 130:
                    return michal;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00014_ip = 263; continue _fun00013 }
 141:
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
 261: // try_end0
                    _fun00014_ip = 315; continue _fun00013;
 263:
                    return michal;
 266: // catch_target0
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
 315:
                    michal = undefined;
                    return michal;
 320:
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
                    if(michal) { _fun00016_ip = 332; continue _fun00015 }
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
                    romeon = _closure1_slot17;
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
                    SaveGenerator(address=167);
 165:
                    return michal;
 167:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00016_ip = 242; continue _fun00015 }
 173:
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
 239: // try_end0
                    return zuuluu;
 242:
                    return michal;
 245: // catch_target0
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
                    michal = 22;
                    michal = oscard[michal];
                    michal = report.bind(zuuluu)(michal);
                    zuuluu = michal.prototype;
                    zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
                    backup = zuuluu;
                    foxtra = tangon;
                    michal = new backup[michal](foxtra, romeon);
                    michal = michal instanceof Object ? michal : zuuluu;
                    return michal;
 332:
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
                    if(zuuluu) { _fun00018_ip = 988; continue _fun00017 }
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
                    if(zuuluu) { _fun00018_ip = 985; continue _fun00017 }
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
                    oscard = 41;
                    oscard = ctrled[oscard];
                    sizing = kiloes.bind(golfie)(oscard);
                    kiloes = sizing.get;
                    oscard = {'url': null, 'query': null, 'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    update = _closure1_slot17;
                    update = update.ACTIVITY_SHELF;
                    oscard['url'] = update;
                    oscard['query'] = echoed;
                    echoed = {};
                    source = _closure1_slot0;
                    update = 42;
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
                    SaveGenerator(address=663);
 661:
                    return oscard;
 663:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=14);
                    if(kiloes) { _fun00018_ip = 919; continue _fun00017 }
 672:
                    foxtra = oscard;
                    kiloes = oscard.body;
                    sizing = kiloes.activities;
                    result = sizing;
                    kiloes = null;
                    if(!(kiloes == sizing)) { _fun00018_ip = 701; continue _fun00017 }
 695:
                    sizing = new Array(0);
                    _fun00018_ip = 704; continue _fun00017;
 701:
                    sizing = result;
 704:
                    romeon = sizing;
                    sizing = foxtra;
                    sizing = sizing.body;
                    sizing = sizing.applications;
                    output = sizing;
                    if(!(kiloes == sizing)) { _fun00018_ip = 734; continue _fun00017 }
 728:
                    sizing = new Array(0);
                    _fun00018_ip = 737; continue _fun00017;
 734:
                    sizing = output;
 737:
                    yankee = sizing;
                    foxtra = foxtra.body;
                    foxtra = foxtra.assets;
                    verify = foxtra;
                    if(!(kiloes == foxtra)) { _fun00018_ip = 762; continue _fun00017 }
 758:
                    output = {};
                    _fun00018_ip = 765; continue _fun00017;
 762:
                    output = verify;
 765:
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
                    if(!(foxtra > verify)) { _fun00018_ip = 886; continue _fun00017 }
 841:
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
 886:
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
 916: // try_end0
                    return verify;
 919:
                    return oscard;
 922: // catch_target0
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
 985:
                    return michal;
 988:
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
                    golfie = _closure1_slot17;
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
    verify = oscard.Endpoints;
    var _closure1_slot17 = verify;
    verify = oscard.ApplicationFlags;
    var _closure1_slot18 = verify;
    verify = oscard.ChannelTypes;
    var _closure1_slot19 = verify;
    verify = oscard.ComponentActions;
    var _closure1_slot20 = verify;
    verify = oscard.AnalyticsGameOpenTypes;
    var _closure1_slot21 = verify;
    oscard = oscard.AnalyticEvents;
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
    oscard = function() { // Original name: runPrimaryAppCommandOrLaunchEmbeddedActivity
        entity = undefined;
        tangon = _closure1_slot27;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['runPrimaryAppCommandOrLaunchEmbeddedActivity'] = oscard;
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
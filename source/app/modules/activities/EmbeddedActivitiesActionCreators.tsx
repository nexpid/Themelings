// app/modules/activities/EmbeddedActivitiesActionCreators.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = options;
    entity = function() { // Original name: _runPrimaryAppCommandOrLaunchEmbeddedActivity
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=5);
                    if(oscar) { _fun00002_ip = 1503; continue _fun00001 }
 15:
                    yankee = mike.channelId;
                    romeo = mike.applicationId;
                    options = mike.isStart;
                    lima = mike.analyticsLocations;
                    sierra = mike.locationObject;
                    record = mike.embeddedActivitiesManager;
                    quebec = mike.componentId;
                    result = mike.commandOrigin;
                    output = mike.sectionName;
                    sizing = mike.source;
                    status = mike.partyId;
                    kilo = mike.onExecutedCallback;
                    target = mike.referrerId;
                    variable36 = mike.customId;
                    config = mike.joinUserId;
                    sequence = mike.joinSessionId;
                    vacuum = mike.joinSecret;
                    papa = mike.inviterUserId;
                    update = mike.isContextlessActivity;
                    verify = undefined;
                    tango = undefined;
                    echo = undefined;
                    report = undefined;
                    foxtrot = undefined;
                    equality = undefined;
                    source = undefined;
                    SaveGenerator(address=144);
 142:
                    return verify;
 144:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=5);
                    if(oscar) { _fun00002_ip = 1500; continue _fun00001 }
 153:
                    control = _closure1_slot9;
                    backup = control.getChannel;
                    offset = yankee;
                    backup = backup.bind(control)(offset);
                    tango = backup;
                    offset = null;
                    backup = offset == backup;
                    control = undefined;
                    if(backup) { _fun00002_ip = 200; continue _fun00001 }
 187:
                    context = tango;
                    backup = context.getGuildId;
                    control = backup.bind(context)();
 200:
                    context = offset != control;
                    backup = undefined;
                    if(!context) { _fun00002_ip = 212; continue _fun00001 }
 209:
                    backup = control;
 212:
                    echo = backup;
                    control = _closure1_slot0;
                    context = _closure1_slot2;
                    backup = 17;
                    backup = context[backup];
                    control = control.bind(verify)(backup);
                    backup = control.getIsContextlessActivitiesExperimentEnabled;
                    backup = backup.bind(control)();
                    report = backup;
                    if(backup) { _fun00002_ip = 295; continue _fun00001 }
 251:
                    backup = echo;
                    if(!(offset == backup)) { _fun00002_ip = 295; continue _fun00001 }
 258:
                    backup = tango;
                    control = offset == backup;
                    backup = undefined;
                    if(control) { _fun00002_ip = 283; continue _fun00001 }
 270:
                    context = tango;
                    control = context.isPrivate;
                    backup = control.bind(context)();
 283:
                    if(!(offset != backup)) { _fun00002_ip = 290; continue _fun00001 }
 287:
                    if(backup) { _fun00002_ip = 295; continue _fun00001 }
 290:
                    backup = false;
                    return backup;
 295:
                    control = _closure1_slot0;
                    context = _closure1_slot2;
                    backup = 18;
                    backup = context[backup];
                    control = control.bind(verify)(backup);
                    backup = control.createNonce;
                    foxtrot = backup.bind(control)();
 325: // try_start_0
                    context = _closure1_slot1;
                    control = _closure1_slot2;
                    backup = 19;
                    control = control[backup];
                    whiskey = context.bind(verify)(control);
                    context = whiskey.dispatch;
                    control = {};
                    variable37 = 'EMBEDDED_ACTIVITY_LAUNCH_START';
                    control['type'] = variable37;
                    variable37 = foxtrot;
                    control['nonce'] = variable37;
                    variable37 = romeo;
                    control['applicationId'] = variable37;
                    variable37 = yankee;
                    variable38 = offset != variable37;
                    variable37 = null;
                    if(!variable38) { _fun00002_ip = 390; continue _fun00001 }
 387:
                    variable37 = yankee;
 390:
                    control['channelId'] = variable37;
                    control['componentId'] = quebec;
                    quebec = lima;
                    control['analyticsLocations'] = quebec;
                    quebec = sizing;
                    control['source'] = quebec;
                    quebec = result;
                    control['commandOrigin'] = quebec;
                    quebec = papa;
                    control['inviterUserId'] = quebec;
                    quebec = {};
                    quebec['customId'] = variable36;
                    variable36 = target;
                    quebec['referrerId'] = variable36;
                    control['launchParams'] = quebec;
                    control = context.bind(whiskey)(control);
                    context = _closure1_slot12;
                    control = context.getCurrentUser;
                    control = control.bind(context)();
                    equality = control;
                    if(!(offset != control)) { _fun00002_ip = 648; continue _fun00001 }
 478:
                    context = _closure1_slot1;
                    whiskey = _closure1_slot2;
                    control = 20;
                    control = whiskey[control];
                    context = context.bind(verify)(control);
                    control = {};
                    whiskey = options;
                    quebec = _closure1_slot21;
                    if(whiskey) { _fun00002_ip = 518; continue _fun00001 }
 510:
                    whiskey = quebec.JOIN;
                    _fun00002_ip = 524; continue _fun00001;
 518:
                    whiskey = quebec.LAUNCH;
 524:
                    control['type'] = whiskey;
                    whiskey = equality;
                    quebec = offset == whiskey;
                    whiskey = undefined;
                    if(quebec) { _fun00002_ip = 545; continue _fun00001 }
 540:
                    whiskey = equality.id;
 545:
                    control['userId'] = whiskey;
                    whiskey = echo;
                    control['guildId'] = whiskey;
                    whiskey = yankee;
                    control['channelId'] = whiskey;
                    whiskey = tango;
                    equality = offset == whiskey;
                    whiskey = undefined;
                    if(equality) { _fun00002_ip = 583; continue _fun00001 }
 575:
                    equality = tango;
                    whiskey = equality.type;
 583:
                    control['channelType'] = whiskey;
                    whiskey = romeo;
                    control['applicationId'] = whiskey;
                    control['locationObject'] = sierra;
                    sierra = lima;
                    if(!(offset == sierra)) { _fun00002_ip = 613; continue _fun00001 }
 607:
                    sierra = new Array(0);
                    _fun00002_ip = 616; continue _fun00001;
 613:
                    sierra = lima;
 616:
                    control['analyticsLocations'] = sierra;
                    sierra = sizing;
                    control['source'] = sierra;
                    control['partyId'] = status;
                    control['referrerId'] = target;
                    control['inviterUserId'] = papa;
                    control = context.bind(verify)(control);
 648:
                    control = options;
                    if(!control) { _fun00002_ip = 664; continue _fun00001 }
 654:
                    control = yankee;
                    if(!(offset == control)) { _fun00002_ip = 849; continue _fun00001 }
 664:
                    control = {};
                    context = romeo;
                    control['applicationId'] = context;
                    context = yankee;
                    control['channelId'] = context;
                    control['embeddedActivitiesManager'] = record;
                    record = options;
                    control['isStart'] = record;
                    record = echo;
                    control['guildId'] = record;
                    control['joinUserId'] = config;
                    control['joinSessionId'] = sequence;
                    control['joinSecret'] = vacuum;
                    control['isContextlessActivity'] = update;
                    update = function() { // Original name: legacyLaunchActivity
                        entity = undefined;
                        tango = _closure1_slot28;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    update = update.bind(verify)(control);
                    SaveGenerator(address=734);
 732:
                    return update;
 734:
                    ResumeGenerator(result_out_reg=19, return_bool_out_reg=21);
                    if(control) { _fun00002_ip = 846; continue _fun00001 }
 740:
                    source = update;
                    control = kilo;
                    if(!(offset != control)) { _fun00002_ip = 757; continue _fun00001 }
 750:
                    control = kilo;
                    control = control.bind(verify)();
 757:
                    control = source;
                    vacuum = control.result;
                    control = 'failure';
                    if(!(control === vacuum)) { _fun00002_ip = 1202; continue _fun00001 }
 777:
                    vacuum = _closure1_slot1;
                    config = _closure1_slot2;
                    control = 21;
                    sequence = config[control];
                    sequence = vacuum.bind(verify)(sequence);
                    control = config[control];
                    control = vacuum.bind(verify)(control);
                    control = control.Reasons;
                    variable40 = control.LEGACY_LAUNCH_CLIENT_VALIDATION_FAILED;
                    variable39 = source.reason;
                    control = sequence.prototype;
                    control = Object.create(control, {constructor: {value: sequence}});
                    variable41 = control;
                    source = new variable41[sequence](variable40, variable39, variable38);
                    source = source instanceof Object ? source : control;
                    throw source;
 846: // try_end0
                    return update;
 849: // try_start_1
                    control = romeo;
                    vacuum = tango;
                    tango = offset == vacuum;
                    update = undefined;
                    if(tango) { _fun00002_ip = 869; continue _fun00001 }
 864:
                    update = vacuum.type;
 869:
                    tango = _closure1_slot19;
                    tango = tango.GUILD_VOICE;
                    tango = update === tango;
                    source = _closure1_slot5;
                    update = source.getApplication;
                    update = update.bind(source)(control);
                    source = offset != update;
                    if(!source) { _fun00002_ip = 952; continue _fun00001 }
 905:
                    sequence = _closure1_slot0;
                    config = _closure1_slot2;
                    control = 24;
                    control = config[control];
                    config = sequence.bind(verify)(control);
                    sequence = config.hasFlag;
                    control = update.flags;
                    update = _closure1_slot18;
                    update = update.EMBEDDED;
                    source = sequence.bind(config)(control, update);
 952:
                    control = _closure1_slot0;
                    sequence = _closure1_slot2;
                    update = 25;
                    update = sequence[update];
                    control = control.bind(verify)(update);
                    update = control.isActivityInTextSupportedForChannel;
                    update = update.bind(control)(vacuum);
                    if(!tango) { _fun00002_ip = 989; continue _fun00001 }
 986:
                    tango = source;
 989:
                    if(tango) { _fun00002_ip = 995; continue _fun00001 }
 992:
                    tango = update;
 995:
                    if(tango) { _fun00002_ip = 1061; continue _fun00001 }
 998:
                    update = _closure1_slot1;
                    control = _closure1_slot2;
                    tango = 21;
                    source = control[tango];
                    source = update.bind(verify)(source);
                    tango = control[tango];
                    tango = update.bind(verify)(tango);
                    tango = tango.Reasons;
                    variable40 = tango.INVALID_CHANNEL;
                    update = source.prototype;
                    update = Object.create(update, {constructor: {value: source}});
                    variable41 = update;
                    tango = new variable41[source](variable40, variable39);
                    tango = tango instanceof Object ? tango : update;
                    throw tango;
 1061:
                    tango = {};
                    update = romeo;
                    tango['applicationId'] = update;
                    update = foxtrot;
                    tango['nonce'] = update;
                    update = yankee;
                    tango['channelId'] = update;
                    tango['guildId'] = echo;
                    tango['commandOrigin'] = result;
                    tango['sectionName'] = output;
                    tango['source'] = sizing;
                    tango['onExecutedCallback'] = kilo;
                    tango['clientSupportsContextlessActivityLaunch'] = report;
                    zulu = function() { // Original name: maybeSendPrimaryAppCommand
                        entity = undefined;
                        tango = _closure1_slot27;
                        zulu = tango.apply;
                        entity = arguments;
                        mike = entity;
                        entity = this;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    zulu = zulu.bind(verify)(tango);
                    SaveGenerator(address=1127);
 1125:
                    return zulu;
 1127:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 1278; continue _fun00001 }
 1136:
                    if(zulu) { _fun00002_ip = 1202; continue _fun00001 }
 1139:
                    report = _closure1_slot1;
                    sizing = _closure1_slot2;
                    tango = 21;
                    kilo = sizing[tango];
                    kilo = report.bind(verify)(kilo);
                    tango = sizing[tango];
                    tango = report.bind(verify)(tango);
                    tango = tango.Reasons;
                    variable40 = tango.PRIMARY_APP_COMMAND_NOT_FOUND;
                    report = kilo.prototype;
                    report = Object.create(report, {constructor: {value: kilo}});
                    variable41 = report;
                    tango = new variable41[kilo](variable40, variable39);
                    tango = tango instanceof Object ? tango : report;
                    throw tango;
 1202:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[backup];
                    backup = report.bind(verify)(tango);
                    report = backup.dispatch;
                    tango = {};
                    kilo = 'EMBEDDED_ACTIVITY_LAUNCH_SUCCESS';
                    tango['type'] = kilo;
                    kilo = foxtrot;
                    tango['nonce'] = kilo;
                    kilo = romeo;
                    tango['applicationId'] = kilo;
                    kilo = yankee;
                    sizing = offset != kilo;
                    kilo = null;
                    if(!sizing) { _fun00002_ip = 1264; continue _fun00001 }
 1261:
                    kilo = yankee;
 1264:
                    tango['channelId'] = kilo;
                    tango = report.bind(backup)(tango);
 1273: // try_end1
                    tango = true;
                    return tango;
 1278:
                    return zulu;
 1281: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=6);
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 19;
                    zulu = report[zulu];
                    report = tango.bind(verify)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    backup = 'EMBEDDED_ACTIVITY_LAUNCH_FAIL';
                    zulu['type'] = backup;
                    zulu['nonce'] = foxtrot;
                    zulu['applicationId'] = romeo;
                    romeo = yankee;
                    romeo = offset != romeo;
                    offset = null;
                    if(!romeo) { _fun00002_ip = 1342; continue _fun00001 }
 1339:
                    offset = yankee;
 1342:
                    zulu['channelId'] = offset;
                    zulu['isStart'] = options;
                    offset = golf;
                    yankee = _closure1_slot1;
                    romeo = _closure1_slot2;
                    options = 21;
                    options = romeo[options];
                    options = yankee.bind(verify)(options);
                    options = offset instanceof options;
                    if(options) { _fun00002_ip = 1483; continue _fun00001 }
 1381:
                    yankee = golf;
                    romeo = _closure1_slot1;
                    options = _closure1_slot2;
                    offset = 22;
                    options = options[offset];
                    options = romeo.bind(verify)(options);
                    options = yankee instanceof options;
                    if(options) { _fun00002_ip = 1483; continue _fun00001 }
 1411:
                    yankee = golf;
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    options = 23;
                    options = foxtrot[options];
                    options = romeo.bind(verify)(options);
                    options = yankee instanceof options;
                    if(options) { _fun00002_ip = 1483; continue _fun00001 }
 1441:
                    options = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[offset];
                    verify = options.bind(verify)(oscar);
                    variable40 = golf;
                    options = verify.prototype;
                    options = Object.create(options, {constructor: {value: verify}});
                    variable41 = options;
                    oscar = new variable41[verify](variable40, variable39);
                    oscar = oscar instanceof Object ? oscar : options;
                    _fun00002_ip = 1486; continue _fun00001;
 1483:
                    oscar = golf;
 1486:
                    zulu['error'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    zulu = false;
                    return zulu;
 1500:
                    return mike;
 1503:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot26 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: _maybeSendPrimaryAppCommand
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 593; continue _fun00003 }
 15:
                    echo = mike.applicationId;
                    golf = mike.nonce;
                    var _closure4_slot0 = golf;
                    oscar = mike.channelId;
                    offset = mike.guildId;
                    golf = mike.commandOrigin;
                    var _closure4_slot1 = golf;
                    golf = mike.sectionName;
                    var _closure4_slot2 = golf;
                    golf = mike.source;
                    var _closure4_slot3 = golf;
                    golf = mike.onExecutedCallback;
                    var _closure4_slot4 = golf;
                    mike = mike.clientSupportsContextlessActivityLaunch;
                    var _closure4_slot5 = mike;
                    golf = undefined;
                    output = undefined;
                    var _closure4_slot6 = golf;
                    options = undefined;
                    var _closure4_slot7 = golf;
                    var _closure4_slot8 = golf;
                    SaveGenerator(address=111);
 109:
                    return golf;
 111:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00004_ip = 590; continue _fun00003 }
 120:
                    verify = null;
                    output = null;
                    _closure4_slot6 = verify;
 128: // try_start_0
                    romeo = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    tango = 26;
                    tango = foxtrot[tango];
                    foxtrot = romeo.bind(golf)(tango);
                    romeo = oscar;
                    tango = echo;
                    tango = foxtrot.bind(golf)(romeo, tango);
                    SaveGenerator(address=167);
 165:
                    return tango;
 167:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=11);
                    if(romeo) { _fun00004_ip = 537; continue _fun00003 }
 176:
                    output = tango;
                    _closure4_slot6 = tango;
 183: // try_end0
                    romeo = output;
                    foxtrot = romeo.handler;
                    backup = _closure1_slot0;
                    kilo = _closure1_slot2;
                    romeo = 27;
                    romeo = kilo[romeo];
                    romeo = backup.bind(golf)(romeo);
                    romeo = romeo.ApplicationCommandHandler;
                    romeo = romeo.APP_HANDLER;
                    if(!(foxtrot === romeo)) { _fun00004_ip = 425; continue _fun00003 }
 231:
                    backup = _closure1_slot22;
                    foxtrot = backup.includes;
                    romeo = echo;
                    romeo = foxtrot.bind(backup)(romeo);
                    if(romeo) { _fun00004_ip = 425; continue _fun00003 }
 254:
                    romeo = oscar;
                    if(!(verify != romeo)) { _fun00004_ip = 300; continue _fun00003 }
 261:
                    foxtrot = _closure1_slot4;
                    romeo = {};
                    backup = 'channel';
                    romeo['type'] = backup;
                    backup = oscar;
                    romeo['channelId'] = backup;
                    romeo = foxtrot.bind(golf)(romeo);
                    SaveGenerator(address=291);
 289:
                    return romeo;
 291:
                    ResumeGenerator(result_out_reg=11, return_bool_out_reg=12);
                    if(foxtrot) { _fun00004_ip = 422; continue _fun00003 }
 300:
                    backup = _closure1_slot4;
                    foxtrot = {};
                    kilo = 'user';
                    foxtrot['type'] = kilo;
                    foxtrot = backup.bind(golf)(foxtrot);
                    SaveGenerator(address=323);
 321:
                    return foxtrot;
 323:
                    ResumeGenerator(result_out_reg=12, return_bool_out_reg=13);
                    if(backup) { _fun00004_ip = 419; continue _fun00003 }
 329:
                    sizing = _closure1_slot9;
                    kilo = sizing.getChannel;
                    backup = oscar;
                    result = kilo.bind(sizing)(backup);
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 28;
                    backup = sizing[backup];
                    sizing = kilo.bind(golf)(backup);
                    kilo = sizing.installApplicationOnDemandIfNeeded;
                    backup = {};
                    backup['applicationId'] = echo;
                    backup['channel'] = result;
                    output = output.integration_types;
                    backup['commandIntegrationTypes'] = output;
                    backup = kilo.bind(sizing)(backup);
                    SaveGenerator(address=402);
 400:
                    return backup;
 402:
                    ResumeGenerator(result_out_reg=13, return_bool_out_reg=14);
                    if(kilo) { _fun00004_ip = 416; continue _fun00003 }
 408:
                    if(backup) { _fun00004_ip = 425; continue _fun00003 }
 411:
                    kilo = false;
                    return kilo;
 416:
                    return backup;
 419:
                    return foxtrot;
 422:
                    return romeo;
 425:
                    foxtrot = _closure1_slot9;
                    romeo = foxtrot.getChannel;
                    oscar = romeo.bind(foxtrot)(oscar);
                    options = oscar;
                    _closure4_slot7 = oscar;
                    oscar = offset;
                    romeo = verify != oscar;
                    oscar = null;
                    if(!romeo) { _fun00004_ip = 472; continue _fun00003 }
 458:
                    romeo = _closure1_slot10;
                    yankee = romeo.getGuild;
                    oscar = yankee.bind(romeo)(offset);
 472:
                    _closure4_slot8 = oscar;
                    options = verify != options;
                    oscar = options;
                    if(!options) { _fun00004_ip = 531; continue _fun00003 }
 486:
                    options = global;
                    verify = options.Promise;
                    options = verify.prototype;
                    options = Object.create(options, {constructor: {value: verify}});
                    source = function(argFoo, argBar) {
                        entity = argFoo;
                        var _closure5_slot0 = entity;
                        entity = argBar;
                        var _closure5_slot1 = entity;
                        zulu = _closure1_slot1;
                        mike = _closure1_slot2;
                        entity = 29;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = {};
                        oscar = _closure4_slot6;
                        mike['command'] = oscar;
                        oscar = {};
                        mike['optionValues'] = oscar;
                        oscar = {};
                        golf = _closure4_slot7;
                        oscar['channel'] = golf;
                        golf = _closure4_slot8;
                        oscar['guild'] = golf;
                        mike['context'] = oscar;
                        oscar = _closure4_slot1;
                        mike['commandOrigin'] = oscar;
                        oscar = _closure4_slot2;
                        mike['sectionName'] = oscar;
                        oscar = _closure4_slot3;
                        mike['source'] = oscar;
                        report = _closure4_slot5;
                        mike['clientSupportsContextlessActivityLaunch'] = report;
                        tango = function() { // Original name: interactionLifecycleOptionsFactory
                            entity = {};
                            zulu = _closure4_slot0;
                            entity['nonce'] = zulu;
                            zulu = function() { // Original name: onSuccess
                                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                                    zulu = _closure4_slot4;
                                    mike = null;
                                    if(!(mike != zulu)) { _fun00006_ip = 23; continue _fun00005 }
 13:
                                    mike = _closure4_slot4;
                                    entity = undefined;
                                    entity = mike.bind(entity)();
 23:
                                    mike = _closure5_slot0;
                                    entity = undefined;
                                    mike = mike.bind(entity)();
                                    return entity;
                                }
                            };
                            entity['onSuccess'] = zulu;
                            mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: onFailure
                                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                                    oscar = argFoo;
                                    golf = argBar;
                                    tango = argBaz;
                                    options = argCorge;
                                    zulu = _closure4_slot4;
                                    entity = null;
                                    if(!(entity != zulu)) { _fun00008_ip = 35; continue _fun00007 }
 25:
                                    zulu = _closure4_slot4;
                                    mike = undefined;
                                    mike = zulu.bind(mike)();
 35:
                                    if(!(entity != oscar)) { _fun00008_ip = 50; continue _fun00007 }
 39:
                                    if(!(entity != golf)) { _fun00008_ip = 50; continue _fun00007 }
 43:
                                    if(!(entity == tango)) { _fun00008_ip = 229; continue _fun00007 }
 50:
                                    if(!(entity != options)) { _fun00008_ip = 92; continue _fun00007 }
 54:
                                    report = _closure1_slot1;
                                    mike = _closure1_slot2;
                                    verify = 23;
                                    mike = mike[verify];
                                    zulu = undefined;
                                    mike = report.bind(zulu)(mike);
                                    mike = mike.ReasonCodes;
                                    mike = options in mike;
                                    if(mike) { _fun00008_ip = 175; continue _fun00007 }
 92:
                                    offset = _closure5_slot1;
                                    yankee = _closure1_slot1;
                                    foxtrot = _closure1_slot2;
                                    mike = 23;
                                    romeo = foxtrot[mike];
                                    report = undefined;
                                    romeo = yankee.bind(report)(romeo);
                                    mike = foxtrot[mike];
                                    mike = yankee.bind(report)(mike);
                                    mike = mike.ReasonCodes;
                                    backup = mike.UNKNOWN;
                                    yankee = romeo.prototype;
                                    yankee = Object.create(yankee, {constructor: {value: romeo}});
                                    kilo = yankee;
                                    mike = new kilo[romeo](backup, foxtrot);
                                    mike = mike instanceof Object ? mike : yankee;
                                    mike = offset.bind(report)(mike);
                                    _fun00008_ip = 309; continue _fun00007;
 175:
                                    mike = _closure5_slot1;
                                    report = _closure1_slot1;
                                    entity = _closure1_slot2;
                                    entity = entity[verify];
                                    entity = report.bind(zulu)(entity);
                                    report = entity.prototype;
                                    report = Object.create(report, {constructor: {value: entity}});
                                    kilo = report;
                                    backup = options;
                                    entity = new kilo[entity](backup, foxtrot);
                                    entity = entity instanceof Object ? entity : report;
                                    entity = mike.bind(zulu)(entity);
                                    _fun00008_ip = 309; continue _fun00007;
 229:
                                    zulu = _closure5_slot1;
                                    report = _closure1_slot1;
                                    mike = _closure1_slot2;
                                    entity = 22;
                                    entity = mike[entity];
                                    mike = undefined;
                                    report = report.bind(mike)(entity);
                                    entity = {};
                                    entity['status'] = tango;
                                    tango = {};
                                    tango['message'] = golf;
                                    tango['code'] = oscar;
                                    entity['body'] = tango;
                                    tango = report.prototype;
                                    tango = Object.create(tango, {constructor: {value: report}});
                                    kilo = tango;
                                    backup = entity;
                                    entity = new kilo[report](backup, foxtrot);
                                    entity = entity instanceof Object ? entity : tango;
                                    entity = zulu.bind(mike)(entity);
 309:
                                    entity = undefined;
                                    return entity;
                                }
                            };
                            entity['onFailure'] = mike;
                            return entity;
                        };
                        mike['interactionLifecycleOptionsFactory'] = tango;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    control = options;
                    report = new control[verify](source, update);
                    report = report instanceof Object ? report : options;
                    SaveGenerator(address=523);
 521:
                    return report;
 523:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=7);
                    if(options) { _fun00004_ip = 534; continue _fun00003 }
 529:
                    oscar = true;
 531:
                    return oscar;
 534:
                    return report;
 537:
                    return tango;
 540: // catch_target0
                    CatchBlockStart(arg_register=3);
                    zulu = tango;
                    report = tango.message;
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    tango = 26;
                    tango = options[tango];
                    tango = oscar.bind(golf)(tango);
                    tango = tango.NO_PRIMARY_APP_COMMAND_ERROR;
                    if(!(report !== tango)) { _fun00004_ip = 585; continue _fun00003 }
 583:
                    throw zulu;
 585:
                    zulu = false;
                    return zulu;
 590:
                    return mike;
 593:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot27 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot27 = entity;
    entity = function() { // Original name: _legacyLaunchActivity
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 1677; continue _fun00009 }
 13:
                    result = mike.applicationId;
                    echo = mike.channelId;
                    vacuum = mike.embeddedActivitiesManager;
                    report = mike.isStart;
                    update = mike.guildId;
                    foxtrot = mike.joinUserId;
                    romeo = mike.joinSessionId;
                    control = mike.joinSecret;
                    backup = mike.isContextlessActivity;
                    verify = undefined;
                    SaveGenerator(address=70);
 68:
                    return verify;
 70:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00010_ip = 1674; continue _fun00009 }
 79:
                    oscar = _closure1_slot8;
                    zulu = oscar.getSessionId;
                    output = zulu.bind(oscar)();
                    oscar = _closure1_slot12;
                    zulu = oscar.getCurrentUser;
                    source = zulu.bind(oscar)();
                    sizing = null;
                    if(!(sizing != result)) { _fun00010_ip = 1645; continue _fun00009 }
 118:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    zulu = 17;
                    zulu = options[zulu];
                    oscar = oscar.bind(verify)(zulu);
                    zulu = oscar.getIsContextlessActivitiesExperimentEnabled;
                    oscar = zulu.bind(oscar)();
                    golf = _closure1_slot1;
                    zulu = 30;
                    zulu = options[zulu];
                    zulu = golf.bind(verify)(zulu);
                    zulu = zulu.bind(verify)(result, echo);
                    SaveGenerator(address=174);
 172:
                    return zulu;
 174:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00010_ip = 1642; continue _fun00009 }
 183:
                    if(!(sizing != source)) { _fun00010_ip = 1613; continue _fun00009 }
 190:
                    if(!(sizing != zulu)) { _fun00010_ip = 1613; continue _fun00009 }
 197:
                    if(oscar) { _fun00010_ip = 286; continue _fun00009 }
 200:
                    if(!(sizing == echo)) { _fun00010_ip = 286; continue _fun00009 }
 204:
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    golf = 31;
                    golf = offset[golf];
                    golf = options.bind(verify)(golf);
                    yankee = golf.ComponentDispatch;
                    offset = yankee.dispatch;
                    golf = _closure1_slot20;
                    options = golf.SHOW_ACTIVITIES_CHANNEL_SELECTOR;
                    golf = {};
                    golf['applicationId'] = result;
                    golf = offset.bind(yankee)(options, golf);
                    golf = {};
                    options = 'failure';
                    golf['result'] = options;
                    options = _closure1_slot24;
                    options = options.INVALID_CHANNEL;
                    golf['reason'] = options;
                    return golf;
 286:
                    options = _closure1_slot9;
                    golf = options.getChannel;
                    kilo = golf.bind(options)(echo);
                    if(oscar) { _fun00010_ip = 336; continue _fun00009 }
 303:
                    if(!(sizing == kilo)) { _fun00010_ip = 336; continue _fun00009 }
 307:
                    oscar = {};
                    golf = 'failure';
                    oscar['result'] = golf;
                    golf = _closure1_slot24;
                    golf = golf.INVALID_CHANNEL;
                    oscar['reason'] = golf;
                    return oscar;
 336:
                    options = _closure1_slot0;
                    oscar = _closure1_slot2;
                    offset = 32;
                    golf = oscar[offset];
                    sequence = options.bind(verify)(golf);
                    yankee = sequence.getEmbeddedActivityLaunchability;
                    golf = {};
                    golf['channelId'] = echo;
                    config = _closure1_slot9;
                    golf['ChannelStore'] = config;
                    config = _closure1_slot10;
                    golf['GuildStore'] = config;
                    config = _closure1_slot11;
                    golf['PermissionStore'] = config;
                    config = _closure1_slot13;
                    golf['VoiceStateStore'] = config;
                    golf = yankee.bind(sequence)(golf);
                    oscar = oscar[offset];
                    oscar = options.bind(verify)(oscar);
                    oscar = oscar.EmbeddedActivityLaunchability;
                    oscar = oscar.CAN_LAUNCH;
                    if(!(golf === oscar)) { _fun00010_ip = 1317; continue _fun00009 }
 437:
                    options = _closure1_slot14;
                    oscar = options.getCurrentEmbeddedActivity;
                    config = oscar.bind(options)();
                    options = sizing == config;
                    oscar = undefined;
                    if(options) { _fun00010_ip = 465; continue _fun00009 }
 460:
                    oscar = config.applicationId;
 465:
                    oscar = sizing != oscar;
                    yankee = undefined;
                    if(!oscar) { _fun00010_ip = 503; continue _fun00009 }
 474:
                    sequence = _closure1_slot5;
                    options = sequence.getApplication;
                    record = sizing == config;
                    oscar = undefined;
                    if(record) { _fun00010_ip = 498; continue _fun00009 }
 493:
                    oscar = config.applicationId;
 498:
                    yankee = options.bind(sequence)(oscar);
 503:
                    if(!report) { _fun00010_ip = 610; continue _fun00009 }
 506:
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    report = 36;
                    report = options[report];
                    options = oscar.bind(verify)(report);
                    oscar = options.confirmActivityLaunchChecks;
                    report = {};
                    report['applicationId'] = result;
                    report['application'] = zulu;
                    report['channel'] = kilo;
                    report['currentEmbeddedApplication'] = yankee;
                    report['embeddedActivitiesManager'] = vacuum;
                    report['user'] = source;
                    report = oscar.bind(options)(report);
                    SaveGenerator(address=569);
 567:
                    return report;
 569:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                    if(oscar) { _fun00010_ip = 1314; continue _fun00009 }
 578:
                    if(report) { _fun00010_ip = 610; continue _fun00009 }
 581:
                    oscar = {};
                    options = 'failure';
                    oscar['result'] = options;
                    options = _closure1_slot24;
                    options = options.FAILED_ACTIVITY_LAUNCH_CHECKS;
                    oscar['reason'] = options;
                    return oscar;
 610:
                    if(!(sizing != kilo)) { _fun00010_ip = 825; continue _fun00009 }
 617:
                    options = _closure1_slot1;
                    source = _closure1_slot2;
                    oscar = 37;
                    oscar = source[oscar];
                    options = options.bind(verify)(oscar);
                    oscar = kilo.id;
                    options = options.bind(verify)(oscar);
                    vacuum = _closure1_slot15;
                    source = vacuum.includes;
                    oscar = kilo.type;
                    oscar = source.bind(vacuum)(oscar);
                    if(options) { _fun00010_ip = 735; continue _fun00009 }
 669:
                    source = _closure1_slot0;
                    vacuum = _closure1_slot2;
                    options = 25;
                    options = vacuum[options];
                    source = source.bind(verify)(options);
                    options = source.isActivitiesInTextEnabled;
                    options = options.bind(source)(kilo);
                    if(!options) { _fun00010_ip = 706; continue _fun00009 }
 703:
                    if(oscar) { _fun00010_ip = 825; continue _fun00009 }
 706:
                    oscar = {};
                    options = 'failure';
                    oscar['result'] = options;
                    options = _closure1_slot24;
                    options = options.AIT_NOT_ENABLED_FOR_USER;
                    oscar['reason'] = options;
                    return oscar;
 735:
                    options = _closure1_slot1;
                    source = _closure1_slot2;
                    oscar = 38;
                    oscar = source[oscar];
                    options = options.bind(verify)(oscar);
                    oscar = {};
                    kilo = kilo.id;
                    oscar['channelId'] = kilo;
                    yankee = sizing != yankee;
                    oscar['bypassChangeModal'] = yankee;
                    oscar = options.bind(verify)(oscar);
                    SaveGenerator(address=784);
 782:
                    return oscar;
 784:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=7);
                    if(options) { _fun00010_ip = 1311; continue _fun00009 }
 793:
                    if(oscar) { _fun00010_ip = 825; continue _fun00009 }
 796:
                    options = {};
                    yankee = 'failure';
                    options['result'] = yankee;
                    yankee = _closure1_slot24;
                    yankee = yankee.NOT_CONNECTED_TO_VOICE_CHANNEL;
                    options['reason'] = yankee;
                    return options;
 825:
                    options = sizing == control;
                    if(!options) { _fun00010_ip = 836; continue _fun00009 }
 832:
                    options = sizing != foxtrot;
 836:
                    if(!options) { _fun00010_ip = 843; continue _fun00009 }
 839:
                    options = sizing != romeo;
 843:
                    if(!options) { _fun00010_ip = 852; continue _fun00009 }
 846:
                    yankee = true;
                    options = yankee === backup;
 852:
                    if(!options) { _fun00010_ip = 904; continue _fun00009 }
 855:
                    yankee = _closure1_slot1;
                    backup = _closure1_slot2;
                    options = 39;
                    options = backup[options];
                    yankee = yankee.bind(verify)(options);
                    options = yankee.getJoinSecret;
                    options = options.bind(yankee)(foxtrot, romeo, result);
                    SaveGenerator(address=892);
 890:
                    return options;
 892:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    control = options;
                    if(yankee) { _fun00010_ip = 1308; continue _fun00009 }
 904:
                    if(!(sizing != echo)) { _fun00010_ip = 915; continue _fun00009 }
 908:
                    if(!(sizing != control)) { _fun00010_ip = 1116; continue _fun00009 }
 915:
                    if(!(sizing == control)) { _fun00010_ip = 950; continue _fun00009 }
 919:
                    romeo = {};
                    yankee = 'failure';
                    romeo['result'] = yankee;
                    yankee = _closure1_slot24;
                    yankee = yankee.OTHER;
                    romeo['reason'] = yankee;
                    _fun00010_ip = 1108; continue _fun00009;
 950:
                    foxtrot = _closure1_slot1;
                    vacuum = _closure1_slot2;
                    yankee = 40;
                    yankee = vacuum[yankee];
                    backup = foxtrot.bind(verify)(yankee);
                    foxtrot = backup.post;
                    yankee = {'url': null, 'body': null, 'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    source = _closure1_slot17;
                    kilo = source.ACTIVITY_JOIN_INSTANCE;
                    kilo = kilo.bind(source)(result, control);
                    yankee['url'] = kilo;
                    kilo = {};
                    kilo['session_id'] = output;
                    yankee['body'] = kilo;
                    kilo = {};
                    control = _closure1_slot0;
                    source = 41;
                    source = vacuum[source];
                    source = control.bind(verify)(source);
                    source = source.NetworkActionNames;
                    source = source.EMBEDDED_ACTIVITIES_LAUNCH;
                    kilo['event'] = source;
                    source = {};
                    source['application_id'] = result;
                    source['session_id'] = output;
                    kilo['properties'] = source;
                    yankee['trackedActionData'] = kilo;
                    yankee = foxtrot.bind(backup)(yankee);
                    SaveGenerator(address=1088);
 1086:
                    return yankee;
 1088:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(foxtrot) { _fun00010_ip = 1113; continue _fun00009 }
 1094:
                    foxtrot = {};
                    backup = 'success';
                    foxtrot['result'] = backup;
                    romeo = foxtrot;
 1108:
                    _fun00010_ip = 1302; continue _fun00009;
 1113:
                    return yankee;
 1116:
                    foxtrot = _closure1_slot1;
                    backup = _closure1_slot2;
                    yankee = 40;
                    yankee = backup[yankee];
                    backup = foxtrot.bind(verify)(yankee);
                    foxtrot = backup.post;
                    yankee = {'url': null, 'body': null, 'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    source = _closure1_slot17;
                    kilo = source.ACTIVITY_CHANNEL_LAUNCH;
                    kilo = kilo.bind(source)(echo, result);
                    yankee['url'] = kilo;
                    kilo = {};
                    kilo['session_id'] = output;
                    source = sizing != update;
                    sizing = undefined;
                    if(!source) { _fun00010_ip = 1193; continue _fun00009 }
 1190:
                    sizing = update;
 1193:
                    kilo['guild_id'] = sizing;
                    yankee['body'] = kilo;
                    kilo = {};
                    source = _closure1_slot0;
                    control = _closure1_slot2;
                    sizing = 41;
                    sizing = control[sizing];
                    sizing = source.bind(verify)(sizing);
                    sizing = sizing.NetworkActionNames;
                    sizing = sizing.EMBEDDED_ACTIVITIES_LAUNCH;
                    kilo['event'] = sizing;
                    sizing = {};
                    sizing['guild_id'] = update;
                    sizing['channel_id'] = echo;
                    sizing['application_id'] = result;
                    sizing['session_id'] = output;
                    kilo['properties'] = sizing;
                    yankee['trackedActionData'] = kilo;
                    yankee = foxtrot.bind(backup)(yankee);
                    SaveGenerator(address=1282);
 1280:
                    return yankee;
 1282:
                    ResumeGenerator(result_out_reg=10, return_bool_out_reg=12);
                    if(foxtrot) { _fun00010_ip = 1305; continue _fun00009 }
 1288:
                    foxtrot = {};
                    backup = 'success';
                    foxtrot['result'] = backup;
                    romeo = foxtrot;
 1302:
                    return romeo;
 1305:
                    return yankee;
 1308:
                    return options;
 1311:
                    return oscar;
 1314:
                    return report;
 1317:
                    report = _closure1_slot24;
                    oscar = report.LAUNCHABILITY_CHECK_FAILED_OTHER;
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = options.bind(verify)(report);
                    report = report.EmbeddedActivityLaunchability;
                    report = report.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    if(!(golf !== report)) { _fun00010_ip = 1554; continue _fun00009 }
 1363:
                    options = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    report = options.bind(verify)(report);
                    report = report.EmbeddedActivityLaunchability;
                    report = report.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    if(!(golf === report)) { _fun00010_ip = 1594; continue _fun00009 }
 1399:
                    report = _closure1_slot24;
                    oscar = report.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS;
                    options = _closure1_slot1;
                    kilo = _closure1_slot2;
                    golf = 34;
                    golf = kilo[golf];
                    offset = options.bind(verify)(golf);
                    options = offset.show;
                    golf = {};
                    backup = _closure1_slot0;
                    yankee = 35;
                    romeo = kilo[yankee];
                    romeo = backup.bind(verify)(romeo);
                    sizing = romeo.intl;
                    foxtrot = sizing.string;
                    romeo = kilo[yankee];
                    romeo = backup.bind(verify)(romeo);
                    romeo = romeo.t;
                    romeo = romeo.IOy+Iy;
                    romeo = foxtrot.bind(sizing)(romeo);
                    golf['title'] = romeo;
                    romeo = kilo[yankee];
                    romeo = backup.bind(verify)(romeo);
                    foxtrot = romeo.intl;
                    romeo = foxtrot.string;
                    yankee = kilo[yankee];
                    yankee = backup.bind(verify)(yankee);
                    yankee = yankee.t;
                    yankee = yankee.UXoQTk;
                    yankee = romeo.bind(foxtrot)(yankee);
                    golf['body'] = yankee;
                    yankee = false;
                    golf['hideActionSheet'] = yankee;
                    golf = options.bind(offset)(golf);
                    _fun00010_ip = 1594; continue _fun00009;
 1554:
                    report = _closure1_slot24;
                    oscar = report.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION;
                    options = _closure1_slot0;
                    offset = _closure1_slot2;
                    golf = 33;
                    golf = offset[golf];
                    options = options.bind(verify)(golf);
                    golf = options.showActivitiesInvalidPermissionsAlert;
                    golf = golf.bind(options)();
 1594:
                    report = {};
                    golf = 'failure';
                    report['result'] = golf;
                    report['reason'] = oscar;
                    return report;
 1613:
                    report = {};
                    oscar = 'failure';
                    report['result'] = oscar;
                    oscar = _closure1_slot24;
                    oscar = oscar.UNKNOWN_USER_OR_APPLICATION;
                    report['reason'] = oscar;
                    return report;
 1642:
                    return zulu;
 1645:
                    zulu = {};
                    report = 'failure';
                    zulu['result'] = report;
                    tango = _closure1_slot24;
                    tango = tango.NO_APPLICATION_ID;
                    zulu['reason'] = tango;
                    return zulu;
 1674:
                    return mike;
 1677:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot28 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot28 = entity;
    report = function(argFoo) { // Original name: stopEmbeddedActivity
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            entity = argFoo;
            golf = entity.location;
            options = entity.applicationId;
            var _closure2_slot0 = options;
            offset = entity.showFeedback;
            entity = undefined;
            if(!(offset === entity)) { _fun00012_ip = 33; continue _fun00011 }
 31:
            offset = true;
 33:
            report = _closure1_slot14;
            tango = report.getSelfEmbeddedActivityForLocation;
            romeo = tango.bind(report)(golf);
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 19;
            tango = oscar[tango];
            verify = report.bind(entity)(tango);
            oscar = verify.dispatch;
            tango = {};
            report = 'EMBEDDED_ACTIVITY_CLOSE';
            tango['type'] = report;
            tango['applicationId'] = options;
            tango['location'] = golf;
            report = null;
            foxtrot = report == romeo;
            yankee = undefined;
            if(foxtrot) { _fun00012_ip = 111; continue _fun00011 }
 105:
            yankee = romeo.launchId;
 111:
            tango['instanceId'] = yankee;
            tango['showFeedback'] = offset;
            tango = oscar.bind(verify)(tango);
            oscar = _closure1_slot0;
            verify = _closure1_slot2;
            tango = 42;
            tango = verify[tango];
            oscar = oscar.bind(entity)(tango);
            tango = oscar.getEmbeddedActivityLocationChannelId;
            tango = tango.bind(oscar)(golf);
            if(!(report != tango)) { _fun00012_ip = 319; continue _fun00011 }
 164:
            golf = _closure1_slot6;
            oscar = golf.getSelectedParticipantId;
            oscar = oscar.bind(golf)(tango);
            verify = _closure1_slot12;
            golf = verify.getCurrentUser;
            verify = golf.bind(verify)();
            offset = report == verify;
            golf = undefined;
            if(offset) { _fun00012_ip = 206; continue _fun00011 }
 201:
            golf = verify.id;
 206:
            offset = _closure1_slot14;
            verify = offset.getEmbeddedActivitiesForChannel;
            offset = verify.bind(offset)(tango);
            verify = offset.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.applicationId;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            zulu = verify.bind(offset)(zulu);
            if(!(report != zulu)) { _fun00012_ip = 321; continue _fun00011 }
 240:
            if(!(report != golf)) { _fun00012_ip = 321; continue _fun00011 }
 244:
            zulu = '';
            if(!(zulu !== golf)) { _fun00012_ip = 321; continue _fun00011 }
 252:
            golf = _closure1_slot0;
            verify = _closure1_slot2;
            zulu = 43;
            zulu = verify[zulu];
            golf = golf.bind(entity)(zulu);
            zulu = golf.embeddedActivityParticipantId;
            zulu = zulu.bind(golf)(options);
            if(!(oscar === zulu)) { _fun00012_ip = 319; continue _fun00011 }
 287:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 44;
            mike = oscar[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.selectParticipant;
            mike = mike.bind(zulu)(tango, report);
 319:
            return entity;
 321:
            return entity;
        }
    };
    var _closure1_slot29 = report;
    entity = function() { // Original name: _fetchDeveloperApplications
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00014_ip = 320; continue _fun00013 }
 10: // try_start_0
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    golf = 19;
                    mike = oscar[golf];
                    report = undefined;
                    options = tango.bind(report)(mike);
                    tango = options.dispatch;
                    mike = {};
                    verify = 'DEVELOPER_ACTIVITY_SHELF_FETCH_START';
                    mike['type'] = verify;
                    mike = tango.bind(options)(mike);
                    tango = _closure1_slot0;
                    mike = 45;
                    mike = oscar[mike];
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    options = _closure1_slot17;
                    options = options.APPLICATIONS_WITH_ASSETS;
                    mike['url'] = options;
                    verify = {};
                    options = true;
                    verify['with_team_applications'] = options;
                    mike['query'] = verify;
                    mike['oldFormErrors'] = options;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=132);
 130:
                    return mike;
 132:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00014_ip = 263; continue _fun00013 }
 141:
                    tango = mike.body;
                    oscar = tango.applications;
                    options = oscar.map;
                    tango = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = zulu.createFromServer;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    yankee = options.bind(oscar)(tango);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    options = zulu[golf];
                    offset = tango.bind(report)(options);
                    verify = offset.dispatch;
                    options = {};
                    romeo = 'DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS';
                    options['type'] = romeo;
                    options['applications'] = yankee;
                    yankee = mike.body;
                    yankee = yankee.assets;
                    options['assets'] = yankee;
                    options = verify.bind(offset)(options);
                    zulu = zulu[golf];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'APPLICATIONS_FETCH_SUCCESS';
                    zulu['type'] = golf;
                    zulu['applications'] = oscar;
                    zulu = tango.bind(report)(zulu);
 261: // try_end0
                    _fun00014_ip = 315; continue _fun00013;
 263:
                    return mike;
 266: // catch_target0
                    CatchBlockStart(arg_register=1);
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 19;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.dispatch;
                    mike = {};
                    report = 'DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL';
                    mike['type'] = report;
                    mike = zulu.bind(tango)(mike);
 315:
                    mike = undefined;
                    return mike;
 320:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot30 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: _uploadImageAttachment
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00016_ip = 332; continue _fun00015 }
 10:
                    verify = argFoo;
                    offset = argBar;
                    options = argBaz;
 19: // try_start_0
                    tango = _closure1_slot1;
                    golf = _closure1_slot2;
                    oscar = 19;
                    mike = golf[oscar];
                    report = undefined;
                    yankee = tango.bind(report)(mike);
                    tango = yankee.dispatch;
                    mike = {};
                    romeo = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_START';
                    mike['type'] = romeo;
                    mike = tango.bind(yankee)(mike);
                    tango = _closure1_slot0;
                    mike = 45;
                    mike = golf[mike];
                    mike = tango.bind(report)(mike);
                    golf = mike.HTTP;
                    tango = golf.post;
                    mike = {};
                    romeo = _closure1_slot17;
                    yankee = romeo.APPLICATION_UPLOAD_ATTACHMENT;
                    verify = yankee.bind(romeo)(verify);
                    mike['url'] = verify;
                    verify = {};
                    verify['channel_id'] = offset;
                    mike['query'] = verify;
                    verify = {};
                    offset = 'file';
                    verify['name'] = offset;
                    verify['file'] = options;
                    options = new Array(1);
                    options[0] = verify;
                    mike['attachments'] = options;
                    options = true;
                    mike['rejectWithError'] = options;
                    mike = tango.bind(golf)(mike);
                    SaveGenerator(address=167);
 165:
                    return mike;
 167:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00016_ip = 242; continue _fun00015 }
 173:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    zulu = zulu[oscar];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_SUCCESS';
                    zulu['type'] = oscar;
                    oscar = mike.body;
                    oscar = oscar.attachment;
                    zulu['attachment'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    zulu = mike.body;
                    zulu = zulu.attachment;
 239: // try_end0
                    return zulu;
 242:
                    return mike;
 245: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    mike = 19;
                    mike = oscar[mike];
                    zulu = undefined;
                    options = report.bind(zulu)(mike);
                    golf = options.dispatch;
                    mike = {};
                    verify = 'UPLOAD_ACTIVITY_IMAGE_ATTACHMENT_FAIL';
                    mike['type'] = verify;
                    mike = golf.bind(options)(mike);
                    mike = 22;
                    mike = oscar[mike];
                    mike = report.bind(zulu)(mike);
                    zulu = mike.prototype;
                    zulu = Object.create(zulu, {constructor: {value: mike}});
                    backup = zulu;
                    foxtrot = tango;
                    mike = new backup[mike](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : zulu;
                    return mike;
 332:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot31 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: _fetchShelf
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00018_ip = 988; continue _fun00017 }
 15:
                    oscar = mike.guildId;
                    options = oscar;
                    var _closure4_slot0 = oscar;
                    oscar = mike.force;
                    golf = undefined;
                    if(!(oscar === golf)) { _fun00018_ip = 41; continue _fun00017 }
 39:
                    oscar = false;
 41:
                    report = undefined;
                    tango = undefined;
                    var _closure4_slot1 = golf;
                    var _closure4_slot2 = golf;
                    result = undefined;
                    output = undefined;
                    verify = undefined;
                    foxtrot = undefined;
                    romeo = undefined;
                    yankee = undefined;
                    SaveGenerator(address=69);
 67:
                    return golf;
 69:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00018_ip = 985; continue _fun00017 }
 78:
                    sizing = _closure1_slot14;
                    kilo = sizing.getShelfActivities;
                    backup = options;
                    sizing = kilo.bind(sizing)(backup);
                    report = sizing;
                    kilo = sizing.map;
                    backup = function(argFoo) {
                        zulu = _closure1_slot5;
                        mike = zulu.getApplication;
                        entity = argFoo;
                        entity = entity.application_id;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    sizing = kilo.bind(sizing)(backup);
                    kilo = sizing.filter;
                    echo = _closure1_slot0;
                    update = _closure1_slot2;
                    backup = 46;
                    backup = update[backup];
                    backup = echo.bind(golf)(backup);
                    backup = backup.isNotNullish;
                    tango = kilo.bind(sizing)(backup);
                    if(oscar) { _fun00018_ip = 462; continue _fun00017 }
 159:
                    kilo = _closure1_slot14;
                    backup = kilo.shouldFetchShelf;
                    oscar = options;
                    oscar = backup.bind(kilo)(oscar);
                    if(oscar) { _fun00018_ip = 462; continue _fun00017 }
 185:
                    kilo = _closure1_slot14;
                    backup = kilo.getShelfFetchStatus;
                    oscar = options;
                    oscar = backup.bind(kilo)(oscar);
                    backup = null;
                    if(!(backup != oscar)) { _fun00018_ip = 438; continue _fun00017 }
 214:
                    oscar = oscar.isFetching;
                    if(!oscar) { _fun00018_ip = 438; continue _fun00017 }
 226:
                    oscar = global;
                    echo = oscar.Promise;
                    kilo = echo.prototype;
                    sizing = Object.create(kilo, {constructor: {value: echo}});
                    sequence = function(argFoo) {
                        golf = _closure1_slot25;
                        oscar = golf.bind;
                        report = _closure4_slot0;
                        tango = null;
                        zulu = argFoo;
                        zulu = oscar.bind(golf)(tango, report, zulu);
                        _closure4_slot1 = zulu;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 19;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.subscribe;
                        zulu = _closure4_slot1;
                        mike = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                        mike = tango.bind(report)(mike, zulu);
                        return entity;
                    };
                    config = sizing;
                    kilo = new config[echo](sequence, vacuum);
                    update = kilo instanceof Object ? kilo : sizing;
                    echo = oscar.Promise;
                    kilo = echo.prototype;
                    sizing = Object.create(kilo, {constructor: {value: echo}});
                    sequence = function(argFoo) {
                        golf = _closure1_slot25;
                        oscar = golf.bind;
                        report = _closure4_slot0;
                        tango = null;
                        zulu = argFoo;
                        zulu = oscar.bind(golf)(tango, report, zulu);
                        _closure4_slot2 = zulu;
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 19;
                        zulu = zulu[entity];
                        entity = undefined;
                        report = tango.bind(entity)(zulu);
                        tango = report.subscribe;
                        zulu = _closure4_slot2;
                        mike = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                        mike = tango.bind(report)(mike, zulu);
                        return entity;
                    };
                    config = sizing;
                    kilo = new config[echo](sequence, vacuum);
                    echo = kilo instanceof Object ? kilo : sizing;
                    sizing = oscar.Promise;
                    kilo = sizing.race;
                    oscar = new Array(2);
                    oscar[0] = update;
                    oscar[1] = echo;
                    oscar = kilo.bind(sizing)(oscar);
                    SaveGenerator(address=323);
 321:
                    return oscar;
 323:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=14);
                    if(kilo) { _fun00018_ip = 459; continue _fun00017 }
 332:
                    kilo = _closure4_slot1;
                    if(!(backup != kilo)) { _fun00018_ip = 384; continue _fun00017 }
 340:
                    sizing = _closure1_slot1;
                    echo = _closure1_slot2;
                    kilo = 19;
                    kilo = echo[kilo];
                    update = sizing.bind(golf)(kilo);
                    echo = update.unsubscribe;
                    sizing = _closure4_slot1;
                    kilo = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    kilo = echo.bind(update)(kilo, sizing);
                    _closure4_slot1 = backup;
 384:
                    kilo = _closure4_slot2;
                    if(!(backup != kilo)) { _fun00018_ip = 438; continue _fun00017 }
 392:
                    sizing = _closure1_slot1;
                    echo = _closure1_slot2;
                    kilo = 19;
                    kilo = echo[kilo];
                    update = sizing.bind(golf)(kilo);
                    echo = update.unsubscribe;
                    sizing = _closure4_slot2;
                    kilo = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    kilo = echo.bind(update)(kilo, sizing);
                    _closure4_slot2 = backup;
 438:
                    backup = {};
                    kilo = report;
                    backup['activityConfigs'] = kilo;
                    kilo = tango;
                    backup['applications'] = kilo;
                    return backup;
 459:
                    return oscar;
 462: // try_start_0
                    kilo = _closure1_slot1;
                    oscar = _closure1_slot2;
                    backup = 19;
                    oscar = oscar[backup];
                    echo = kilo.bind(golf)(oscar);
                    sizing = echo.dispatch;
                    kilo = {};
                    oscar = 'EMBEDDED_ACTIVITY_FETCH_SHELF';
                    kilo['type'] = oscar;
                    oscar = options;
                    kilo['guildId'] = oscar;
                    kilo = sizing.bind(echo)(kilo);
                    echo = undefined;
                    if(!(golf !== oscar)) { _fun00018_ip = 542; continue _fun00017 }
 517:
                    kilo = options;
                    oscar = '';
                    echo = undefined;
                    if(!(oscar !== kilo)) { _fun00018_ip = 542; continue _fun00017 }
 530:
                    oscar = {};
                    kilo = options;
                    oscar['guild_id'] = kilo;
                    echo = oscar;
 542:
                    kilo = _closure1_slot1;
                    control = _closure1_slot2;
                    oscar = 40;
                    oscar = control[oscar];
                    sizing = kilo.bind(golf)(oscar);
                    kilo = sizing.get;
                    oscar = {'url': null, 'query': null, 'trackedActionData': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': true};
                    update = _closure1_slot17;
                    update = update.ACTIVITY_SHELF;
                    oscar['url'] = update;
                    oscar['query'] = echo;
                    echo = {};
                    source = _closure1_slot0;
                    update = 41;
                    update = control[update];
                    update = source.bind(golf)(update);
                    update = update.NetworkActionNames;
                    update = update.EMBEDDED_ACTIVITIES_FETCH_SHELF;
                    echo['event'] = update;
                    update = {};
                    source = options;
                    update['guild_id'] = source;
                    echo['properties'] = update;
                    oscar['trackedActionData'] = echo;
                    oscar = kilo.bind(sizing)(oscar);
                    SaveGenerator(address=663);
 661:
                    return oscar;
 663:
                    ResumeGenerator(result_out_reg=5, return_bool_out_reg=14);
                    if(kilo) { _fun00018_ip = 919; continue _fun00017 }
 672:
                    foxtrot = oscar;
                    kilo = oscar.body;
                    sizing = kilo.activities;
                    result = sizing;
                    kilo = null;
                    if(!(kilo == sizing)) { _fun00018_ip = 701; continue _fun00017 }
 695:
                    sizing = new Array(0);
                    _fun00018_ip = 704; continue _fun00017;
 701:
                    sizing = result;
 704:
                    romeo = sizing;
                    sizing = foxtrot;
                    sizing = sizing.body;
                    sizing = sizing.applications;
                    output = sizing;
                    if(!(kilo == sizing)) { _fun00018_ip = 734; continue _fun00017 }
 728:
                    sizing = new Array(0);
                    _fun00018_ip = 737; continue _fun00017;
 734:
                    sizing = output;
 737:
                    yankee = sizing;
                    foxtrot = foxtrot.body;
                    foxtrot = foxtrot.assets;
                    verify = foxtrot;
                    if(!(kilo == foxtrot)) { _fun00018_ip = 762; continue _fun00017 }
 758:
                    output = {};
                    _fun00018_ip = 765; continue _fun00017;
 762:
                    output = verify;
 765:
                    foxtrot = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[backup];
                    sizing = foxtrot.bind(golf)(verify);
                    kilo = sizing.dispatch;
                    foxtrot = {};
                    verify = 'EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS';
                    foxtrot['type'] = verify;
                    verify = options;
                    foxtrot['guildId'] = verify;
                    verify = romeo;
                    foxtrot['activities'] = verify;
                    verify = yankee;
                    foxtrot['applications'] = verify;
                    foxtrot['assets'] = output;
                    foxtrot = kilo.bind(sizing)(foxtrot);
                    foxtrot = verify.length;
                    verify = 0;
                    if(!(foxtrot > verify)) { _fun00018_ip = 886; continue _fun00017 }
 841:
                    foxtrot = _closure1_slot1;
                    verify = _closure1_slot2;
                    verify = verify[backup];
                    backup = foxtrot.bind(golf)(verify);
                    foxtrot = backup.dispatch;
                    verify = {};
                    kilo = 'APPLICATIONS_FETCH_SUCCESS';
                    verify['type'] = kilo;
                    kilo = yankee;
                    verify['applications'] = kilo;
                    verify = foxtrot.bind(backup)(verify);
 886:
                    verify = {};
                    verify['activityConfigs'] = romeo;
                    romeo = yankee;
                    yankee = romeo.map;
                    offset = function(argFoo) {
                        zulu = _closure1_slot7;
                        mike = zulu.createFromServer;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    offset = yankee.bind(romeo)(offset);
                    verify['applications'] = offset;
 916: // try_end0
                    return verify;
 919:
                    return oscar;
 922: // catch_target0
                    CatchBlockStart(arg_register=5);
                    oscar = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = 19;
                    zulu = verify[zulu];
                    golf = oscar.bind(golf)(zulu);
                    oscar = golf.dispatch;
                    zulu = {};
                    verify = 'EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL';
                    zulu['type'] = verify;
                    zulu['guildId'] = options;
                    zulu = oscar.bind(golf)(zulu);
                    zulu = {};
                    zulu['activityConfigs'] = report;
                    zulu['applications'] = tango;
                    return zulu;
 985:
                    return mike;
 988:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot32 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function() { // Original name: _sendEmbeddedActivityInvite
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 195; continue _fun00019 }
 13:
                    options = mike.activityChannelId;
                    offset = mike.invitedChannelId;
                    yankee = mike.applicationId;
                    verify = mike.location;
                    tango = undefined;
                    SaveGenerator(address=43);
 41:
                    return tango;
 43:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00020_ip = 192; continue _fun00019 }
 52:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    zulu = 47;
                    zulu = golf[zulu];
                    golf = oscar.bind(tango)(zulu);
                    oscar = golf.createInvite;
                    zulu = {};
                    romeo = _closure1_slot23;
                    romeo = romeo.EMBEDDED_APPLICATION;
                    zulu['target_type'] = romeo;
                    zulu['target_application_id'] = yankee;
                    zulu = oscar.bind(golf)(options, zulu, verify);
                    SaveGenerator(address=114);
 112:
                    return zulu;
 114:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(oscar) { _fun00020_ip = 189; continue _fun00019 }
 120:
                    golf = _closure1_slot9;
                    oscar = golf.getChannel;
                    oscar = oscar.bind(golf)(offset);
                    options = null;
                    if(!(options != oscar)) { _fun00020_ip = 186; continue _fun00019 }
 140:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 48;
                    report = golf[report];
                    golf = oscar.bind(tango)(report);
                    oscar = golf.sendInvite;
                    kilo = zulu.code;
                    output = golf;
                    sizing = offset;
                    backup = verify;
                    foxtrot = null;
                    report = output[oscar](sizing, kilo, backup, foxtrot, romeo);
 186:
                    return tango;
 189:
                    return zulu;
 192:
                    return mike;
 195:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot33 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function() { // Original name: _sendEmbeddedActivityInviteUser
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 185; continue _fun00021 }
 15:
                    yankee = mike.channelId;
                    romeo = mike.applicationId;
                    options = mike.userId;
                    offset = mike.location;
                    var _closure4_slot0 = offset;
                    tango = undefined;
                    var _closure4_slot1 = tango;
                    SaveGenerator(address=49);
 47:
                    return tango;
 49:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00022_ip = 182; continue _fun00021 }
 58:
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = 47;
                    zulu = verify[zulu];
                    verify = golf.bind(tango)(zulu);
                    golf = verify.createInvite;
                    zulu = {};
                    foxtrot = _closure1_slot23;
                    foxtrot = foxtrot.EMBEDDED_APPLICATION;
                    zulu['target_type'] = foxtrot;
                    zulu['target_application_id'] = romeo;
                    zulu = golf.bind(verify)(yankee, zulu, offset);
                    SaveGenerator(address=120);
 118:
                    return zulu;
 120:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00022_ip = 179; continue _fun00021 }
 126:
                    _closure4_slot1 = zulu;
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    oscar = 49;
                    oscar = verify[oscar];
                    golf = golf.bind(tango)(oscar);
                    oscar = golf.ensurePrivateChannel;
                    golf = oscar.bind(golf)(options);
                    oscar = golf.then;
                    report = function(argFoo) {
                        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                            oscar = argFoo;
                            zulu = _closure1_slot9;
                            mike = zulu.getChannel;
                            mike = mike.bind(zulu)(oscar);
                            report = null;
                            if(!(report != mike)) { _fun00024_ip = 82; continue _fun00023 }
 26:
                            zulu = _closure1_slot1;
                            mike = _closure1_slot2;
                            entity = 48;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.sendInvite;
                            mike = _closure4_slot1;
                            verify = mike.code;
                            options = _closure4_slot0;
                            yankee = tango;
                            offset = oscar;
                            golf = null;
                            entity = yankee[zulu](offset, verify, options, golf, oscar);
 82:
                            entity = undefined;
                            return entity;
                        }
                    };
                    report = oscar.bind(golf)(report);
                    return tango;
 179:
                    return zulu;
 182:
                    return mike;
 185:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot34 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function() { // Original name: _validateTestMode
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00026_ip = 108; continue _fun00025 }
 7:
                    report = undefined;
                    zulu = undefined;
                    golf = _closure1_slot17;
                    oscar = golf.ACTIVITY_TEST_MODE;
                    tango = argFoo;
                    zulu = oscar.bind(golf)(tango);
 32: // try_start_0
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 45;
                    mike = oscar[mike];
                    mike = tango.bind(report)(mike);
                    report = mike.HTTP;
                    tango = report.get;
                    mike = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
                    mike['url'] = zulu;
                    zulu = true;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=89);
 87:
                    return mike;
 89:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00026_ip = 98; continue _fun00025 }
 95: // try_end0
                    return zulu;
 98:
                    return mike;
 101: // catch_target0
                    CatchBlockStart(arg_register=1);
                    mike = false;
                    return mike;
 108:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot35 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot35 = entity;
    tango = function(argFoo) { // Original name: updateActivityPanelMode
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EMBEDDED_ACTIVITY_SET_PANEL_MODE';
        mike['type'] = report;
        report = argFoo;
        mike['activityPanelMode'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot36 = tango;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    echo = 0;
    oscar = options[echo];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot3 = oscar;
    result = 1;
    oscar = options[result];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.getOrFetchApplicationCommandIndexForTarget;
    var _closure1_slot4 = oscar;
    output = 2;
    oscar = options[output];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    sizing = 3;
    oscar = options[sizing];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    kilo = 4;
    oscar = options[kilo];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    backup = 5;
    oscar = options[backup];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    foxtrot = 6;
    oscar = options[foxtrot];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot9 = oscar;
    romeo = 7;
    oscar = options[romeo];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot10 = oscar;
    yankee = 8;
    oscar = options[yankee];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot11 = oscar;
    offset = 9;
    oscar = options[offset];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot12 = oscar;
    oscar = 10;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot13 = oscar;
    oscar = 11;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot14 = oscar;
    oscar = 12;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.SUPPORTED_ACTIVITY_IN_TEXT_CHANNEL_TYPES;
    var _closure1_slot15 = oscar;
    oscar = 13;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.ActivityPanelModes;
    var _closure1_slot16 = oscar;
    oscar = 14;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.Endpoints;
    var _closure1_slot17 = verify;
    verify = oscar.ApplicationFlags;
    var _closure1_slot18 = verify;
    verify = oscar.ChannelTypes;
    var _closure1_slot19 = verify;
    verify = oscar.ComponentActions;
    var _closure1_slot20 = verify;
    oscar = oscar.AnalyticsGameOpenTypes;
    var _closure1_slot21 = oscar;
    oscar = 15;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.INSTALL_LESS_APP_IDS;
    var _closure1_slot22 = oscar;
    oscar = 16;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.InviteTargetTypes;
    var _closure1_slot23 = oscar;
    oscar = {};
    oscar['OTHER'] = echo;
    verify = 'OTHER';
    oscar[echo] = verify;
    oscar['NO_APPLICATION_ID'] = result;
    verify = 'NO_APPLICATION_ID';
    oscar[result] = verify;
    oscar['UNKNOWN_USER_OR_APPLICATION'] = output;
    verify = 'UNKNOWN_USER_OR_APPLICATION';
    oscar[output] = verify;
    oscar['INVALID_CHANNEL'] = sizing;
    verify = 'INVALID_CHANNEL';
    oscar[sizing] = verify;
    oscar['LAUNCHABILITY_CHECK_FAILED_OTHER'] = kilo;
    verify = 'LAUNCHABILITY_CHECK_FAILED_OTHER';
    oscar[kilo] = verify;
    oscar['NO_USE_EMBEDDED_ACTIVITIES_PERMISSION'] = backup;
    verify = 'NO_USE_EMBEDDED_ACTIVITIES_PERMISSION';
    oscar[backup] = verify;
    oscar['ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS'] = foxtrot;
    verify = 'ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS';
    oscar[foxtrot] = verify;
    oscar['FAILED_ACTIVITY_LAUNCH_CHECKS'] = romeo;
    verify = 'FAILED_ACTIVITY_LAUNCH_CHECKS';
    oscar[romeo] = verify;
    oscar['NOT_CONNECTED_TO_VOICE_CHANNEL'] = yankee;
    verify = 'NOT_CONNECTED_TO_VOICE_CHANNEL';
    oscar[yankee] = verify;
    oscar['AIT_NOT_ENABLED_FOR_USER'] = offset;
    verify = 'AIT_NOT_ENABLED_FOR_USER';
    oscar[offset] = verify;
    var _closure1_slot24 = oscar;
    oscar = function(argFoo, argBar, argBaz) { // Original name: handleFetchDone
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tango = argFoo;
            entity = argBaz;
            mike = entity.guildId;
            entity = mike === tango;
            if(entity) { _fun00028_ip = 34; continue _fun00027 }
 18:
            zulu = null;
            mike = zulu == mike;
            if(!mike) { _fun00028_ip = 31; continue _fun00027 }
 27:
            mike = zulu == tango;
 31:
            entity = mike;
 34:
            if(!entity) { _fun00028_ip = 46; continue _fun00027 }
 37:
            mike = argBar;
            entity = undefined;
            entity = mike.bind(entity)();
 46:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = oscar;
    oscar = 50;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/activities/EmbeddedActivitiesActionCreators.tsx';
    oscar = golf.bind(options)(oscar);
    oscar = function(argFoo) { // Original name: maybeDisconnectFromCurrentActivity
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            tango = _closure1_slot14;
            zulu = tango.getSelfEmbeddedActivityForLocation;
            entity = argFoo;
            entity = zulu.bind(tango)(entity);
            zulu = null;
            if(!(zulu != entity)) { _fun00030_ip = 65; continue _fun00029 }
 27:
            zulu = _closure1_slot29;
            mike = {};
            tango = entity.location;
            mike['location'] = tango;
            entity = entity.applicationId;
            mike['applicationId'] = entity;
            entity = false;
            mike['showFeedback'] = entity;
            entity = undefined;
            entity = zulu.bind(entity)(mike);
 65:
            entity = undefined;
            return entity;
        }
    };
    zulu['maybeDisconnectFromCurrentActivity'] = oscar;
    oscar = function() { // Original name: runPrimaryAppCommandOrLaunchEmbeddedActivity
        entity = undefined;
        tango = _closure1_slot26;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['runPrimaryAppCommandOrLaunchEmbeddedActivity'] = oscar;
    zulu['stopEmbeddedActivity'] = report;
    report = function() { // Original name: requestRespondToSeriousThermalState
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EMBEDDED_ACTIVITY_REQUEST_RESPOND_TO_SERIOUS_THERMAL_STATE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['requestRespondToSeriousThermalState'] = report;
    report = function() { // Original name: consumeRequestToReactToSeriousThermalState
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EMBEDDED_ACTIVITY_CONSUME_RESPOND_TO_SERIOUS_THERMAL_STATE_REQUEST';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['consumeRequestToReactToSeriousThermalState'] = report;
    report = function() { // Original name: disregardSeriousThermalState
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EMBEDDED_ACTIVITY_DISREGARD_SERIOUS_THERMAL_STATE';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['disregardSeriousThermalState'] = report;
    report = function() { // Original name: fetchDeveloperApplications
        entity = undefined;
        tango = _closure1_slot30;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchDeveloperApplications'] = report;
    report = function() { // Original name: uploadImageAttachment
        entity = undefined;
        tango = _closure1_slot31;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['uploadImageAttachment'] = report;
    report = function() { // Original name: fetchShelf
        entity = undefined;
        tango = _closure1_slot32;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchShelf'] = report;
    report = function() { // Original name: sendEmbeddedActivityInvite
        entity = undefined;
        tango = _closure1_slot33;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['sendEmbeddedActivityInvite'] = report;
    report = function() { // Original name: sendEmbeddedActivityInviteUser
        entity = undefined;
        tango = _closure1_slot34;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['sendEmbeddedActivityInviteUser'] = report;
    report = function() { // Original name: dismissNewActivityIndicator
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EMBEDDED_ACTIVITY_DISMISS_NEW_INDICATOR';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['dismissNewActivityIndicator'] = report;
    report = function() { // Original name: validateTestMode
        entity = undefined;
        tango = _closure1_slot35;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['validateTestMode'] = report;
    zulu['updateActivityPanelMode'] = tango;
    tango = function(argFoo) { // Original name: updateFocusedActivityLayout
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EMBEDDED_ACTIVITY_SET_FOCUSED_LAYOUT';
        mike['type'] = report;
        report = argFoo;
        mike['focusedActivityLayout'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateFocusedActivityLayout'] = tango;
    tango = function() { // Original name: openActivityPopoutWindow
        tango = _closure1_slot36;
        entity = _closure1_slot16;
        zulu = entity.ACTIVITY_POPOUT_WINDOW;
        entity = undefined;
        zulu = tango.bind(entity)(zulu);
        zulu = _closure1_slot1;
        tango = _closure1_slot2;
        mike = 19;
        mike = tango[mike];
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'ACTIVITY_POPOUT_WINDOW_OPEN';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['openActivityPopoutWindow'] = tango;
    mike = function(argFoo) { // Original name: updateActivityPopoutWindowLayout
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 19;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'EMBEDDED_ACTIVITY_UPDATE_POPOUT_WINDOW_LAYOUT';
        mike['type'] = report;
        report = argFoo;
        mike['layout'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateActivityPopoutWindowLayout'] = mike;
    return entity;
})();
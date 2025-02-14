// app/modules/rpc/server/commands/AuthCommandsFactory.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: authorizeWithPrompt
        _fun109837: for(var _fun109837_ip = 0; ; ) switch(_fun109837_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            tango = argBaz;
            golf = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 8;
            entity = zulu[entity];
            zulu = undefined;
            golf = golf.bind(zulu)(entity);
            entity = golf.isOptimizedRPCAuthorizeEnabled;
            entity = entity.bind(golf)();
            if(entity) { _fun109837_ip = 65; continue _fun109837 }
 49:
            entity = function() { // Original name: authorizeWithPromptOld
                entity = undefined;
                tango = _closure1_slot18;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity = entity.bind(zulu)(oscar, report, tango);
            _fun109837_ip = 79; continue _fun109837;
 65:
            mike = function() { // Original name: authorizeWithPromptNew
                entity = undefined;
                tango = _closure1_slot17;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            entity = mike.bind(zulu)(oscar, report, tango);
 79:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _authorizeWithPromptNew
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun109842: for(var _fun109842_ip = 0; ; ) switch(_fun109842_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun109842_ip = 1804; continue _fun109842 }
 13:
                    source = mike.client_id;
                    tango = mike.response_type;
                    oscar = undefined;
                    if(!(tango === oscar)) { _fun109842_ip = 35; continue _fun109842 }
 31:
                    tango = 'code';
 35:
                    echo = tango;
                    result = mike.redirect_uri;
                    output = mike.code_challenge;
                    sizing = mike.code_challenge_method;
                    kilo = mike.state;
                    backup = mike.nonce;
                    yankee = mike.scope;
                    whiskey = mike.permissions;
                    context = mike.guild_id;
                    record = mike.channel_id;
                    config = mike.prompt;
                    sequence = mike.disable_guild_select;
                    report = mike.integration_type;
                    control = mike.pid;
                    variable41 = mike.signal;
                    golf = argBar;
                    status = argBaz;
                    romeo = undefined;
                    options = undefined;
                    vacuum = undefined;
                    sierra = undefined;
                    quebec = undefined;
                    update = undefined;
                    verify = undefined;
                    foxtrot = undefined;
                    papa = undefined;
                    target = undefined;
                    SaveGenerator(address=149);
 147:
                    return oscar;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun109842_ip = 1801; continue _fun109842 }
 158:
                    zulu = variable41;
                    offset = null;
                    if(!(offset != zulu)) { _fun109842_ip = 182; continue _fun109842 }
 167:
                    zulu = variable41;
                    zulu = zulu.aborted;
                    if(zulu) { _fun109842_ip = 1730; continue _fun109842 }
 182:
                    zulu = source;
                    if(!(offset != zulu)) { _fun109842_ip = 1659; continue _fun109842 }
 192:
                    zulu = result;
                    if(!(offset == zulu)) { _fun109842_ip = 1588; continue _fun109842 }
 202:
                    update = new Array(0);
                    tango = 'string';
                    zulu = typeof yankee;
                    if(!(tango !== zulu)) { _fun109842_ip = 243; continue _fun109842 }
 217:
                    zulu = global;
                    tango = zulu.Array;
                    zulu = tango.isArray;
                    zulu = zulu.bind(tango)(yankee);
                    if(!zulu) { _fun109842_ip = 276; continue _fun109842 }
 238:
                    update = yankee;
                    _fun109842_ip = 276; continue _fun109842;
 243:
                    tango = yankee.split;
                    zulu = ' ';
                    yankee = tango.bind(yankee)(zulu);
                    tango = yankee.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        mike = entity.length;
                        entity = 0;
                        entity = mike > entity;
                        return entity;
                    };
                    update = tango.bind(yankee)(zulu);
 276:
                    yankee = _closure1_slot8;
                    tango = yankee.getCurrentUser;
                    tango = tango.bind(yankee)();
                    if(!(offset != tango)) { _fun109842_ip = 1520; continue _fun109842 }
 299:
                    if(!(offset != report)) { _fun109842_ip = 316; continue _fun109842 }
 303:
                    tango = global;
                    tango = tango.Number;
                    romeo = tango.bind(oscar)(report);
 316: // try_start_0
                    report = global;
                    equality = report.Promise;
                    lima = equality.all;
                    variable37 = _closure1_slot0;
                    variable39 = _closure1_slot3;
                    yankee = 10;
                    tango = variable39[yankee];
                    variable40 = variable37.bind(oscar)(tango);
                    variable36 = variable40.fetchAuthorization;
                    tango = {};
                    variable38 = source;
                    tango['clientId'] = variable38;
                    variable42 = update;
                    tango['scopes'] = variable42;
                    variable42 = echo;
                    tango['responseType'] = variable42;
                    variable42 = result;
                    tango['redirectUri'] = variable42;
                    variable42 = output;
                    tango['codeChallenge'] = variable42;
                    variable42 = sizing;
                    tango['codeChallengeMethod'] = variable42;
                    variable42 = kilo;
                    tango['state'] = variable42;
                    variable42 = romeo;
                    tango['integrationType'] = variable42;
                    tango['signal'] = variable41;
                    variable36 = variable36.bind(variable40)(tango);
                    tango = new Array(2);
                    tango[0] = variable36;
                    variable36 = 11;
                    variable36 = variable39[variable36];
                    variable37 = variable37.bind(oscar)(variable36);
                    variable36 = variable37.getDisclosures;
                    variable36 = variable36.bind(variable37)(variable38);
                    tango[1] = variable36;
                    tango = lima.bind(equality)(tango);
                    SaveGenerator(address=475);
 473:
                    return tango;
 475:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=31);
                    if(lima) { _fun109842_ip = 1392; continue _fun109842 }
 484:
                    equality = _closure1_slot4;
                    lima = 2;
                    variable36 = equality.bind(oscar)(tango, lima);
                    lima = 0;
                    options = variable36[lima];
                    equality = 1;
                    equality = variable36[equality];
                    vacuum = equality.disclosures;
                    sierra = equality.allAcked;
 522: // try_end0
                    equality = romeo;
                    if(!(offset == equality)) { _fun109842_ip = 748; continue _fun109842 }
 532:
                    equality = options;
                    equality = equality.application;
                    equality = equality.flags;
                    if(!(offset != equality)) { _fun109842_ip = 679; continue _fun109842 }
 552:
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    equality = 12;
                    equality = variable37[equality];
                    variable38 = variable36.bind(oscar)(equality);
                    variable37 = variable38.hasFlag;
                    equality = options;
                    equality = equality.application;
                    variable36 = equality.flags;
                    equality = _closure1_slot11;
                    equality = equality.EMBEDDED;
                    equality = variable37.bind(variable38)(variable36, equality);
                    if(!equality) { _fun109842_ip = 679; continue _fun109842 }
 610:
                    equality = options;
                    equality = equality.application;
                    equality = equality.integration_types_config;
                    quebec = equality;
                    variable36 = offset == equality;
                    equality = undefined;
                    if(variable36) { _fun109842_ip = 675; continue _fun109842 }
 636:
                    variable36 = quebec;
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    quebec = 13;
                    quebec = variable38[quebec];
                    quebec = variable37.bind(oscar)(quebec);
                    quebec = quebec.ApplicationIntegrationType;
                    quebec = quebec.USER_INSTALL;
                    equality = variable36[quebec];
 675:
                    if(!(offset == equality)) { _fun109842_ip = 713; continue _fun109842 }
 679:
                    quebec = _closure1_slot0;
                    variable36 = _closure1_slot3;
                    equality = 13;
                    equality = variable36[equality];
                    equality = quebec.bind(oscar)(equality);
                    equality = equality.ApplicationIntegrationType;
                    equality = equality.GUILD_INSTALL;
                    _fun109842_ip = 745; continue _fun109842;
 713:
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    quebec = 13;
                    quebec = variable37[quebec];
                    quebec = variable36.bind(oscar)(quebec);
                    quebec = quebec.ApplicationIntegrationType;
                    equality = quebec.USER_INSTALL;
 745:
                    romeo = equality;
 748:
                    quebec = config;
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    equality = 14;
                    equality = variable37[equality];
                    equality = variable36.bind(oscar)(equality);
                    equality = equality.OAuth2Prompts;
                    equality = equality.NONE;
                    if(!(quebec === equality)) { _fun109842_ip = 812; continue _fun109842 }
 787:
                    equality = options;
                    if(!(offset != equality)) { _fun109842_ip = 812; continue _fun109842 }
 794:
                    equality = options;
                    equality = equality.authorized;
                    if(!equality) { _fun109842_ip = 812; continue _fun109842 }
 806:
                    if(sierra) { _fun109842_ip = 1167; continue _fun109842 }
 812:
                    sierra = status;
                    if(!(offset != sierra)) { _fun109842_ip = 843; continue _fun109842 }
 819:
                    quebec = status;
                    status = options;
                    equality = status.application;
                    sierra = record;
                    status = control;
                    status = quebec.bind(oscar)(equality, sierra, status);
 843:
                    sierra = _closure1_slot2;
                    equality = _closure1_slot3;
                    status = 15;
                    status = equality[status];
                    status = sierra.bind(oscar)(status);
                    papa = status.NONE;
 869: // try_start_1
                    sierra = _closure1_slot2;
                    equality = _closure1_slot3;
                    status = 16;
                    status = equality[status];
                    sierra = sierra.bind(oscar)(status);
                    status = sierra.deserialize;
                    equality = whiskey;
                    equality = offset != equality;
                    lima = 0;
                    if(!equality) { _fun109842_ip = 910; continue _fun109842 }
 907:
                    lima = whiskey;
 910:
                    papa = status.bind(sierra)(lima);
 915: // try_end1
                    _fun109842_ip = 919; continue _fun109842;
 917: // catch_target1
                    CatchBlockStart(arg_register=29);
 919:
                    target = undefined;
                    sierra = options;
                    sierra = sierra.integration_type;
                    sierra = offset != sierra;
                    status = sierra;
                    if(!sierra) { _fun109842_ip = 1001; continue _fun109842 }
 940:
                    whiskey = report.Object;
                    lima = whiskey.values;
                    equality = _closure1_slot0;
                    quebec = _closure1_slot3;
                    sierra = 13;
                    sierra = quebec[sierra];
                    sierra = equality.bind(oscar)(sierra);
                    sierra = sierra.ApplicationIntegrationType;
                    whiskey = lima.bind(whiskey)(sierra);
                    lima = whiskey.includes;
                    sierra = options;
                    sierra = sierra.integration_type;
                    status = lima.bind(whiskey)(sierra);
 1001:
                    if(!status) { _fun109842_ip = 1053; continue _fun109842 }
 1004:
                    status = report.Map;
                    sierra = status.prototype;
                    sierra = Object.create(sierra, {constructor: {value: status}});
                    variable46 = sierra;
                    status = new variable46[status](variable45);
                    lima = status instanceof Object ? status : sierra;
                    target = lima;
                    sierra = lima.set;
                    status = options;
                    options = status.integration_type;
                    options = sierra.bind(lima)(options, status);
 1053:
                    options = golf;
                    golf = {};
                    status = source;
                    golf['clientId'] = status;
                    golf['authorizations'] = target;
                    target = update;
                    golf['scopes'] = target;
                    golf['parsedPermissions'] = papa;
                    papa = echo;
                    golf['responseType'] = papa;
                    papa = result;
                    golf['redirectUri'] = papa;
                    papa = output;
                    golf['codeChallenge'] = papa;
                    papa = sizing;
                    golf['codeChallengeMethod'] = papa;
                    papa = kilo;
                    golf['state'] = papa;
                    golf['guildId'] = context;
                    golf['channelId'] = record;
                    golf['prompt'] = config;
                    golf['disableGuildSelect'] = sequence;
                    golf['disclosures'] = vacuum;
                    vacuum = romeo;
                    golf['integrationType'] = vacuum;
                    golf['pid'] = control;
                    golf = options.bind(oscar)(golf);
                    return golf;
 1167: // try_start_2
                    options = _closure1_slot0;
                    golf = _closure1_slot3;
                    golf = golf[yankee];
                    yankee = options.bind(oscar)(golf);
                    options = yankee.authorize;
                    golf = {};
                    control = true;
                    golf['authorize'] = control;
                    golf['clientId'] = source;
                    golf['scopes'] = update;
                    golf['responseType'] = echo;
                    golf['redirectUri'] = result;
                    golf['codeChallenge'] = output;
                    golf['codeChallengeMethod'] = sizing;
                    golf['state'] = kilo;
                    golf['nonce'] = backup;
                    golf['integrationType'] = romeo;
                    golf = options.bind(yankee)(golf);
                    SaveGenerator(address=1252);
 1250:
                    return golf;
 1252:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(options) { _fun109842_ip = 1266; continue _fun109842 }
 1258:
                    options = golf.location;
 1263: // try_end2
                    return options;
 1266:
                    return golf;
 1269: // catch_target2
                    CatchBlockStart(arg_register=6);
                    romeo = golf.body;
                    foxtrot = romeo;
                    options = _closure1_slot1;
                    yankee = _closure1_slot3;
                    golf = 9;
                    golf = yankee[golf];
                    yankee = options.bind(oscar)(golf);
                    options = {};
                    golf = _closure1_slot14;
                    golf = golf.OAUTH2_ERROR;
                    options['errorCode'] = golf;
                    backup = offset == romeo;
                    romeo = undefined;
                    if(backup) { _fun109842_ip = 1330; continue _fun109842 }
 1325:
                    romeo = foxtrot.message;
 1330:
                    golf = romeo;
                    if(romeo) { _fun109842_ip = 1342; continue _fun109842 }
 1336:
                    golf = 'Unknown Error';
 1342:
                    romeo = golf;
                    report = report.HermesInternal;
                    golf = report.concat;
                    report = 'OAuth2 Authorize Error: ';
                    variable44 = golf.bind(report)(romeo);
                    golf = yankee.prototype;
                    golf = Object.create(golf, {constructor: {value: yankee}});
                    variable46 = golf;
                    variable45 = options;
                    report = new variable46[yankee](variable45, variable44, variable43);
                    report = report instanceof Object ? report : golf;
                    throw report;
 1392:
                    return tango;
 1395: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = tango.body;
                    verify = report;
                    golf = _closure1_slot1;
                    options = _closure1_slot3;
                    tango = 9;
                    tango = options[tango];
                    options = golf.bind(oscar)(tango);
                    golf = {};
                    tango = _closure1_slot14;
                    tango = tango.OAUTH2_ERROR;
                    golf['errorCode'] = tango;
                    offset = offset == report;
                    report = undefined;
                    if(offset) { _fun109842_ip = 1456; continue _fun109842 }
 1451:
                    report = verify.message;
 1456:
                    tango = report;
                    if(report) { _fun109842_ip = 1468; continue _fun109842 }
 1462:
                    tango = 'Unknown Error';
 1468:
                    verify = tango;
                    tango = global;
                    tango = tango.HermesInternal;
                    report = tango.concat;
                    tango = 'OAuth2 Authorization Error: ';
                    variable44 = report.bind(tango)(verify);
                    report = options.prototype;
                    report = Object.create(report, {constructor: {value: options}});
                    variable46 = report;
                    variable45 = golf;
                    tango = new variable46[options](variable45, variable44, variable43);
                    tango = tango instanceof Object ? tango : report;
                    throw tango;
 1520:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.OAUTH2_ERROR;
                    report['errorCode'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    variable44 = 'Client is not logged in';
                    variable46 = tango;
                    variable45 = report;
                    zulu = new variable46[golf](variable45, variable44, variable43);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 1588:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.OAUTH2_ERROR;
                    report['errorCode'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    variable44 = 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow';
                    variable46 = tango;
                    variable45 = report;
                    zulu = new variable46[golf](variable45, variable44, variable43);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 1659:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.OAUTH2_ERROR;
                    report['errorCode'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    variable44 = 'No Client ID provided';
                    variable46 = tango;
                    variable45 = report;
                    zulu = new variable46[golf](variable45, variable44, variable43);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 1730:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.UNKNOWN_ERROR;
                    report['errorCode'] = zulu;
                    zulu = oscar.prototype;
                    tango = Object.create(zulu, {constructor: {value: oscar}});
                    variable44 = 'Request aborted';
                    variable46 = tango;
                    variable45 = report;
                    zulu = new variable46[oscar](variable45, variable44, variable43);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 1801:
                    return mike;
 1804:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot17 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _authorizeWithPromptOld
        report = undefined;
        entity = undefined;
        tango = _closure1_slot5;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun109846: for(var _fun109846_ip = 0; ; ) switch(_fun109846_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun109846_ip = 2027; continue _fun109846 }
 13:
                    vacuum = mike.client_id;
                    tango = mike.response_type;
                    oscar = undefined;
                    if(!(tango === oscar)) { _fun109846_ip = 35; continue _fun109846 }
 31:
                    tango = 'code';
 35:
                    source = tango;
                    update = mike.redirect_uri;
                    echo = mike.code_challenge;
                    result = mike.code_challenge_method;
                    output = mike.state;
                    sizing = mike.nonce;
                    report = mike.scope;
                    quebec = mike.permissions;
                    target = mike.guild_id;
                    papa = mike.channel_id;
                    context = mike.prompt;
                    record = mike.disable_guild_select;
                    romeo = mike.integration_type;
                    sequence = mike.pid;
                    variable36 = mike.signal;
                    options = argBar;
                    lima = argBaz;
                    backup = undefined;
                    control = undefined;
                    verify = undefined;
                    config = undefined;
                    whiskey = undefined;
                    offset = undefined;
                    foxtrot = undefined;
                    kilo = undefined;
                    status = undefined;
                    sierra = undefined;
                    SaveGenerator(address=149);
 147:
                    return oscar;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun109846_ip = 2024; continue _fun109846 }
 158:
                    zulu = variable36;
                    yankee = null;
                    if(!(yankee != zulu)) { _fun109846_ip = 182; continue _fun109846 }
 167:
                    zulu = variable36;
                    zulu = zulu.aborted;
                    if(zulu) { _fun109846_ip = 1953; continue _fun109846 }
 182:
                    zulu = vacuum;
                    if(!(yankee != zulu)) { _fun109846_ip = 1882; continue _fun109846 }
 192:
                    zulu = update;
                    if(!(yankee == zulu)) { _fun109846_ip = 1811; continue _fun109846 }
 202:
                    control = new Array(0);
                    tango = 'string';
                    zulu = typeof report;
                    if(!(tango !== zulu)) { _fun109846_ip = 243; continue _fun109846 }
 217:
                    zulu = global;
                    tango = zulu.Array;
                    zulu = tango.isArray;
                    zulu = zulu.bind(tango)(report);
                    if(!zulu) { _fun109846_ip = 276; continue _fun109846 }
 238:
                    control = report;
                    _fun109846_ip = 276; continue _fun109846;
 243:
                    tango = report.split;
                    zulu = ' ';
                    report = tango.bind(report)(zulu);
                    tango = report.filter;
                    zulu = function(argFoo) {
                        entity = argFoo;
                        mike = entity.length;
                        entity = 0;
                        entity = mike > entity;
                        return entity;
                    };
                    control = tango.bind(report)(zulu);
 276:
                    report = _closure1_slot8;
                    tango = report.getCurrentUser;
                    tango = tango.bind(report)();
                    if(!(yankee != tango)) { _fun109846_ip = 1743; continue _fun109846 }
 299:
                    golf = _closure1_slot6;
                    report = golf.getApplication;
                    tango = vacuum;
                    tango = report.bind(golf)(tango);
                    golf = yankee != tango;
                    report = null;
                    if(!golf) { _fun109846_ip = 329; continue _fun109846 }
 326:
                    report = tango;
 329:
                    tango = yankee == report;
                    if(tango) { _fun109846_ip = 399; continue _fun109846 }
 336:
                    variable37 = report.id;
                    equality = _closure1_slot6;
                    golf = equality.getApplicationLastUpdated;
                    golf = golf.bind(equality)(variable37);
                    variable37 = yankee != golf;
                    equality = 0;
                    if(!variable37) { _fun109846_ip = 370; continue _fun109846 }
 367:
                    equality = golf;
 370:
                    golf = global;
                    variable37 = golf.Date;
                    golf = variable37.now;
                    variable37 = golf.bind(variable37)();
                    golf = _closure1_slot15;
                    golf = variable37 - golf;
                    tango = equality < golf;
 399:
                    if(!tango) { _fun109846_ip = 468; continue _fun109846 }
 402:
                    equality = _closure1_slot7;
                    golf = equality.createFromServer;
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    tango = 17;
                    tango = variable38[tango];
                    variable39 = variable37.bind(oscar)(tango);
                    variable38 = variable39.fetchApplication;
                    variable37 = vacuum;
                    tango = variable36;
                    tango = variable38.bind(variable39)(variable37, tango);
                    SaveGenerator(address=454);
 452:
                    return tango;
 454:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=36);
                    if(variable37) { _fun109846_ip = 1740; continue _fun109846 }
 463:
                    report = golf.bind(equality)(tango);
 468:
                    golf = yankee != report;
                    if(!golf) { _fun109846_ip = 522; continue _fun109846 }
 475:
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    equality = 12;
                    equality = variable38[equality];
                    variable39 = variable37.bind(oscar)(equality);
                    variable38 = variable39.hasFlag;
                    variable37 = report.flags;
                    equality = _closure1_slot11;
                    equality = equality.EMBEDDED;
                    golf = variable38.bind(variable39)(variable37, equality);
 522:
                    if(!golf) { _fun109846_ip = 580; continue _fun109846 }
 525:
                    variable37 = report.integrationTypesConfig;
                    equality = yankee == variable37;
                    report = undefined;
                    if(equality) { _fun109846_ip = 576; continue _fun109846 }
 540:
                    variable38 = _closure1_slot0;
                    variable39 = _closure1_slot3;
                    equality = 13;
                    equality = variable39[equality];
                    equality = variable38.bind(oscar)(equality);
                    equality = equality.ApplicationIntegrationType;
                    equality = equality.USER_INSTALL;
                    report = variable37[equality];
 576:
                    golf = yankee != report;
 580:
                    if(!(yankee != romeo)) { _fun109846_ip = 599; continue _fun109846 }
 584:
                    report = global;
                    report = report.Number;
                    report = report.bind(oscar)(romeo);
                    _fun109846_ip = 645; continue _fun109846;
 599:
                    equality = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    romeo = 13;
                    romeo = variable37[romeo];
                    romeo = equality.bind(oscar)(romeo);
                    romeo = romeo.ApplicationIntegrationType;
                    if(golf) { _fun109846_ip = 636; continue _fun109846 }
 628:
                    golf = romeo.GUILD_INSTALL;
                    _fun109846_ip = 642; continue _fun109846;
 636:
                    golf = romeo.USER_INSTALL;
 642:
                    report = golf;
 645:
                    backup = report;
 648: // try_start_0
                    golf = _closure1_slot0;
                    report = _closure1_slot3;
                    romeo = 10;
                    report = report[romeo];
                    equality = golf.bind(oscar)(report);
                    golf = equality.fetchAuthorization;
                    report = {};
                    variable37 = vacuum;
                    report['clientId'] = variable37;
                    variable37 = control;
                    report['scopes'] = variable37;
                    variable37 = source;
                    report['responseType'] = variable37;
                    variable37 = update;
                    report['redirectUri'] = variable37;
                    variable37 = echo;
                    report['codeChallenge'] = variable37;
                    variable37 = result;
                    report['codeChallengeMethod'] = variable37;
                    variable37 = output;
                    report['state'] = variable37;
                    variable37 = backup;
                    report['integrationType'] = variable37;
                    report['signal'] = variable36;
                    report = golf.bind(equality)(report);
                    SaveGenerator(address=753);
 751:
                    return report;
 753:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golf) { _fun109846_ip = 1612; continue _fun109846 }
 762:
                    verify = report;
 765: // try_start_1 // try_end0
                    equality = _closure1_slot0;
                    variable36 = _closure1_slot3;
                    golf = 11;
                    golf = variable36[golf];
                    variable36 = equality.bind(oscar)(golf);
                    equality = variable36.getDisclosures;
                    golf = verify;
                    golf = golf.application;
                    golf = golf.id;
                    golf = equality.bind(variable36)(golf);
                    SaveGenerator(address=813);
 811:
                    return golf;
 813:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=33);
                    if(equality) { _fun109846_ip = 1484; continue _fun109846 }
 822:
                    config = golf.disclosures;
                    whiskey = golf.allAcked;
 834: // try_end1
                    variable36 = context;
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    equality = 14;
                    equality = variable38[equality];
                    equality = variable37.bind(oscar)(equality);
                    equality = equality.OAuth2Prompts;
                    equality = equality.NONE;
                    if(!(variable36 === equality)) { _fun109846_ip = 898; continue _fun109846 }
 873:
                    equality = verify;
                    if(!(yankee != equality)) { _fun109846_ip = 898; continue _fun109846 }
 880:
                    equality = verify;
                    equality = equality.authorized;
                    if(!equality) { _fun109846_ip = 898; continue _fun109846 }
 892:
                    if(whiskey) { _fun109846_ip = 1257; continue _fun109846 }
 898:
                    whiskey = lima;
                    if(!(yankee != whiskey)) { _fun109846_ip = 929; continue _fun109846 }
 905:
                    variable36 = lima;
                    lima = verify;
                    equality = lima.application;
                    whiskey = papa;
                    lima = sequence;
                    lima = variable36.bind(oscar)(equality, whiskey, lima);
 929:
                    whiskey = _closure1_slot2;
                    equality = _closure1_slot3;
                    lima = 15;
                    lima = equality[lima];
                    lima = whiskey.bind(oscar)(lima);
                    status = lima.NONE;
 955: // try_start_2
                    whiskey = _closure1_slot2;
                    equality = _closure1_slot3;
                    lima = 16;
                    lima = equality[lima];
                    equality = whiskey.bind(oscar)(lima);
                    whiskey = equality.deserialize;
                    lima = quebec;
                    variable36 = yankee != lima;
                    lima = 0;
                    if(!variable36) { _fun109846_ip = 996; continue _fun109846 }
 993:
                    lima = quebec;
 996:
                    status = whiskey.bind(equality)(lima);
 1001: // try_end2
                    _fun109846_ip = 1005; continue _fun109846;
 1003: // catch_target2
                    CatchBlockStart(arg_register=31);
 1005:
                    sierra = undefined;
                    whiskey = verify;
                    whiskey = whiskey.integration_type;
                    whiskey = yankee != whiskey;
                    lima = whiskey;
                    if(!whiskey) { _fun109846_ip = 1089; continue _fun109846 }
 1026:
                    whiskey = global;
                    quebec = whiskey.Object;
                    equality = quebec.values;
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    whiskey = 13;
                    whiskey = variable37[whiskey];
                    whiskey = variable36.bind(oscar)(whiskey);
                    whiskey = whiskey.ApplicationIntegrationType;
                    quebec = equality.bind(quebec)(whiskey);
                    equality = quebec.includes;
                    whiskey = verify;
                    whiskey = whiskey.integration_type;
                    lima = equality.bind(quebec)(whiskey);
 1089:
                    if(!lima) { _fun109846_ip = 1143; continue _fun109846 }
 1092:
                    lima = global;
                    lima = lima.Map;
                    whiskey = lima.prototype;
                    whiskey = Object.create(whiskey, {constructor: {value: lima}});
                    variable43 = whiskey;
                    lima = new variable43[lima](variable42);
                    equality = lima instanceof Object ? lima : whiskey;
                    sierra = equality;
                    whiskey = equality.set;
                    lima = verify;
                    verify = lima.integration_type;
                    verify = whiskey.bind(equality)(verify, lima);
 1143:
                    verify = options;
                    options = {};
                    lima = vacuum;
                    options['clientId'] = lima;
                    options['authorizations'] = sierra;
                    sierra = control;
                    options['scopes'] = sierra;
                    options['parsedPermissions'] = status;
                    status = source;
                    options['responseType'] = status;
                    status = update;
                    options['redirectUri'] = status;
                    status = echo;
                    options['codeChallenge'] = status;
                    status = result;
                    options['codeChallengeMethod'] = status;
                    status = output;
                    options['state'] = status;
                    options['guildId'] = target;
                    options['channelId'] = papa;
                    options['prompt'] = context;
                    options['disableGuildSelect'] = record;
                    options['disclosures'] = config;
                    config = backup;
                    options['integrationType'] = config;
                    options['pid'] = sequence;
                    options = verify.bind(oscar)(options);
                    return options;
 1257: // try_start_3
                    verify = _closure1_slot0;
                    options = _closure1_slot3;
                    options = options[romeo];
                    romeo = verify.bind(oscar)(options);
                    verify = romeo.authorize;
                    options = {};
                    sequence = true;
                    options['authorize'] = sequence;
                    options['clientId'] = vacuum;
                    options['scopes'] = control;
                    options['responseType'] = source;
                    options['redirectUri'] = update;
                    options['codeChallenge'] = echo;
                    options['codeChallengeMethod'] = result;
                    options['state'] = output;
                    options['nonce'] = sizing;
                    options['integrationType'] = backup;
                    options = verify.bind(romeo)(options);
                    SaveGenerator(address=1342);
 1340:
                    return options;
 1342:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun109846_ip = 1356; continue _fun109846 }
 1348:
                    verify = options.location;
 1353: // try_end3
                    return verify;
 1356:
                    return options;
 1359: // catch_target3
                    CatchBlockStart(arg_register=7);
                    verify = options.body;
                    kilo = verify;
                    romeo = _closure1_slot1;
                    backup = _closure1_slot3;
                    options = 9;
                    options = backup[options];
                    backup = romeo.bind(oscar)(options);
                    romeo = {};
                    options = _closure1_slot14;
                    options = options.OAUTH2_ERROR;
                    romeo['errorCode'] = options;
                    sizing = yankee == verify;
                    verify = undefined;
                    if(sizing) { _fun109846_ip = 1420; continue _fun109846 }
 1415:
                    verify = kilo.message;
 1420:
                    options = verify;
                    if(verify) { _fun109846_ip = 1432; continue _fun109846 }
 1426:
                    options = 'Unknown Error';
 1432:
                    kilo = options;
                    options = global;
                    options = options.HermesInternal;
                    verify = options.concat;
                    options = 'OAuth2 Authorize Error: ';
                    variable41 = verify.bind(options)(kilo);
                    verify = backup.prototype;
                    verify = Object.create(verify, {constructor: {value: backup}});
                    variable43 = verify;
                    variable42 = romeo;
                    options = new variable43[backup](variable42, variable41, variable40);
                    options = options instanceof Object ? options : verify;
                    throw options;
 1484:
                    return golf;
 1487: // catch_target1
                    CatchBlockStart(arg_register=6);
                    options = golf.body;
                    foxtrot = options;
                    verify = _closure1_slot1;
                    romeo = _closure1_slot3;
                    golf = 9;
                    golf = romeo[golf];
                    romeo = verify.bind(oscar)(golf);
                    verify = {};
                    golf = _closure1_slot14;
                    golf = golf.OAUTH2_ERROR;
                    verify['errorCode'] = golf;
                    backup = yankee == options;
                    options = undefined;
                    if(backup) { _fun109846_ip = 1548; continue _fun109846 }
 1543:
                    options = foxtrot.message;
 1548:
                    golf = options;
                    if(options) { _fun109846_ip = 1560; continue _fun109846 }
 1554:
                    golf = 'Unknown Error';
 1560:
                    foxtrot = golf;
                    golf = global;
                    golf = golf.HermesInternal;
                    options = golf.concat;
                    golf = 'OAuth2 Authorization Error: ';
                    variable41 = options.bind(golf)(foxtrot);
                    options = romeo.prototype;
                    options = Object.create(options, {constructor: {value: romeo}});
                    variable43 = options;
                    variable42 = verify;
                    golf = new variable43[romeo](variable42, variable41, variable40);
                    golf = golf instanceof Object ? golf : options;
                    throw golf;
 1612:
                    return report;
 1615: // catch_target0
                    CatchBlockStart(arg_register=4);
                    golf = report.body;
                    offset = golf;
                    options = _closure1_slot1;
                    verify = _closure1_slot3;
                    report = 9;
                    report = verify[report];
                    verify = options.bind(oscar)(report);
                    options = {};
                    report = _closure1_slot14;
                    report = report.OAUTH2_ERROR;
                    options['errorCode'] = report;
                    yankee = yankee == golf;
                    golf = undefined;
                    if(yankee) { _fun109846_ip = 1676; continue _fun109846 }
 1671:
                    golf = offset.message;
 1676:
                    report = golf;
                    if(golf) { _fun109846_ip = 1688; continue _fun109846 }
 1682:
                    report = 'Unknown Error';
 1688:
                    offset = report;
                    report = global;
                    report = report.HermesInternal;
                    golf = report.concat;
                    report = 'OAuth2 Authorization Error: ';
                    variable41 = golf.bind(report)(offset);
                    golf = verify.prototype;
                    golf = Object.create(golf, {constructor: {value: verify}});
                    variable43 = golf;
                    variable42 = options;
                    report = new variable43[verify](variable42, variable41, variable40);
                    report = report instanceof Object ? report : golf;
                    throw report;
 1740:
                    return tango;
 1743:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.OAUTH2_ERROR;
                    report['errorCode'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    variable41 = 'Client is not logged in';
                    variable43 = tango;
                    variable42 = report;
                    zulu = new variable43[golf](variable42, variable41, variable40);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 1811:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.OAUTH2_ERROR;
                    report['errorCode'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    variable41 = 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow';
                    variable43 = tango;
                    variable42 = report;
                    zulu = new variable43[golf](variable42, variable41, variable40);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 1882:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    golf = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.OAUTH2_ERROR;
                    report['errorCode'] = zulu;
                    zulu = golf.prototype;
                    tango = Object.create(zulu, {constructor: {value: golf}});
                    variable41 = 'No Client ID provided';
                    variable43 = tango;
                    variable42 = report;
                    zulu = new variable43[golf](variable42, variable41, variable40);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 1953:
                    report = _closure1_slot1;
                    golf = _closure1_slot3;
                    tango = 9;
                    tango = golf[tango];
                    oscar = report.bind(oscar)(tango);
                    report = {};
                    zulu = _closure1_slot14;
                    zulu = zulu.UNKNOWN_ERROR;
                    report['errorCode'] = zulu;
                    zulu = oscar.prototype;
                    tango = Object.create(zulu, {constructor: {value: oscar}});
                    variable41 = 'Request aborted';
                    variable43 = tango;
                    variable42 = report;
                    zulu = new variable43[oscar](variable42, variable41, variable40);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 2024:
                    return mike;
 2027:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot18 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: authenticate
        _fun109848: for(var _fun109848_ip = 0; ; ) switch(_fun109848_ip) {
 0:
            zulu = argFoo;
            offset = argBar;
            var _closure2_slot0 = zulu;
            var _closure2_slot1 = offset;
            entity = zulu.authorization;
            tango = entity.accessToken;
            if(tango) { _fun109848_ip = 284; continue _fun109848 }
 37:
            tango = zulu.authorization;
            tango = tango.authing;
            if(tango) { _fun109848_ip = 214; continue _fun109848 }
 55:
            zulu = zulu.authorization;
            oscar = true;
            zulu['authing'] = oscar;
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 18;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            report = zulu.HTTP;
            tango = report.get;
            zulu = {};
            golf = _closure1_slot12;
            golf = golf.OAUTH2_CURRENT_AUTH;
            zulu['url'] = golf;
            golf = {};
            options = global;
            options = options.HermesInternal;
            verify = options.concat;
            options = 'Bearer ';
            options = verify.bind(options)(offset);
            golf['Authorization'] = options;
            zulu['headers'] = golf;
            zulu['oldFormErrors'] = oscar;
            oscar = false;
            zulu['rejectWithError'] = oscar;
            oscar = tango.bind(report)(zulu);
            report = oscar.then;
            tango = function(argFoo) {
                _fun109849: for(var _fun109849_ip = 0; ; ) switch(_fun109849_ip) {
 0:
                    zulu = argFoo;
                    report = _closure2_slot0;
                    mike = report.authorization;
                    entity = false;
                    mike['authing'] = entity;
                    oscar = zulu.body;
                    entity = oscar.application;
                    mike = oscar.user;
                    verify = oscar.scopes;
                    options = oscar.expires;
                    report = report.application;
                    report = report.id;
                    entity = entity.id;
                    if(!(report === entity)) { _fun109849_ip = 405; continue _fun109849 }
 73:
                    oscar = _closure1_slot8;
                    report = oscar.getCurrentUser;
                    report = report.bind(oscar)();
                    oscar = null;
                    if(!(oscar != report)) { _fun109849_ip = 335; continue _fun109849 }
 98:
                    if(!mike) { _fun109849_ip = 335; continue _fun109849 }
 104:
                    report = report.id;
                    mike = mike.id;
                    if(!(report === mike)) { _fun109849_ip = 335; continue _fun109849 }
 121:
                    golf = _closure2_slot0;
                    report = golf.authorization;
                    mike = golf.authorization;
                    romeo = mike.scopes;
                    mike = new Array(1);
                    yankee = 0;
                    foxtrot = mike;
                    yankee = arraySpread(foxtrot, romeo, yankee);
                    foxtrot = mike;
                    romeo = verify;
                    verify = arraySpread(foxtrot, romeo, yankee);
                    oscar = _closure1_slot10;
                    mike[verify] = oscar;
                    oscar = 1;
                    oscar = verify + oscar;
                    report['scopes'] = mike;
                    mike = golf.authorization;
                    tango = _closure2_slot1;
                    mike['accessToken'] = tango;
                    report = golf.authorization;
                    mike = global;
                    mike = mike.Date;
                    oscar = mike.prototype;
                    oscar = Object.create(oscar, {constructor: {value: mike}});
                    backup = oscar;
                    foxtrot = options;
                    mike = new backup[mike](foxtrot, romeo);
                    mike = mike instanceof Object ? mike : oscar;
                    report['expires'] = mike;
                    oscar = _closure1_slot1;
                    report = _closure1_slot3;
                    mike = 19;
                    report = report[mike];
                    mike = undefined;
                    oscar = oscar.bind(mike)(report);
                    report = oscar.dispatch;
                    mike = {};
                    options = 'RPC_APP_AUTHENTICATED';
                    mike['type'] = options;
                    options = golf.id;
                    mike['socketId'] = options;
                    golf = golf.application;
                    mike['application'] = golf;
                    mike = report.bind(oscar)(mike);
                    mike = {};
                    romeo = zulu.body;
                    foxtrot = mike;
                    zulu = copyDataProperties(foxtrot, romeo);
                    zulu = 'access_token';
                    mike[zulu] = tango;
                    return mike;
 335:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = {};
                    entity = _closure1_slot14;
                    entity = entity.INVALID_TOKEN;
                    zulu['errorCode'] = entity;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    romeo = 'Token does not match current user';
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[tango](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
 405:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = {};
                    entity = _closure1_slot14;
                    entity = entity.INVALID_CLIENTID;
                    zulu['errorCode'] = entity;
                    entity = tango.prototype;
                    mike = Object.create(entity, {constructor: {value: tango}});
                    romeo = "Application does not match the connection's";
                    backup = mike;
                    foxtrot = zulu;
                    entity = new backup[tango](foxtrot, romeo, yankee);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                }
            };
            zulu = function() {
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_TOKEN;
                zulu['errorCode'] = entity;
                report = _closure2_slot1;
                entity = global;
                entity = entity.HermesInternal;
                mike = entity.concat;
                entity = 'Invalid access token: ';
                oscar = mike.bind(entity)(report);
                mike = tango.prototype;
                mike = Object.create(mike, {constructor: {value: tango}});
                options = mike;
                golf = zulu;
                entity = new options[tango](golf, oscar, report);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            };
            tango = report.bind(oscar)(tango, zulu);
            zulu = tango.catch;
            mike = function(argFoo) {
                entity = _closure2_slot0;
                mike = entity.authorization;
                entity = false;
                mike['authing'] = entity;
                entity = argFoo;
                throw entity;
            };
            mike = zulu.bind(tango)(mike);
            return mike;
 214:
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            report = tango.bind(mike)(zulu);
            tango = {};
            mike = _closure1_slot14;
            mike = mike.INVALID_COMMAND;
            tango['errorCode'] = mike;
            mike = report.prototype;
            zulu = Object.create(mike, {constructor: {value: report}});
            yankee = 'Already authenticating';
            foxtrot = zulu;
            romeo = tango;
            mike = new foxtrot[report](romeo, yankee, offset);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 284:
            tango = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = 9;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = {};
            entity = _closure1_slot14;
            entity = entity.INVALID_COMMAND;
            zulu['errorCode'] = entity;
            entity = tango.prototype;
            mike = Object.create(entity, {constructor: {value: tango}});
            yankee = 'Already authenticated';
            foxtrot = mike;
            romeo = zulu;
            entity = new foxtrot[tango](romeo, yankee, offset);
            entity = entity instanceof Object ? entity : mike;
            throw entity;
        }
    };
    var _closure1_slot19 = entity;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.TransportTypes;
    var _closure1_slot9 = golf;
    tango = tango.RPC_AUTHENTICATED_SCOPE;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ApplicationFlags;
    var _closure1_slot11 = golf;
    golf = tango.Endpoints;
    var _closure1_slot12 = golf;
    golf = tango.RPCCommands;
    var _closure1_slot13 = golf;
    tango = tango.RPCErrors;
    var _closure1_slot14 = tango;
    tango = 5000;
    var _closure1_slot15 = tango;
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/rpc/server/commands/AuthCommandsFactory.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar) { // Original name: createAuthCommandHandlers
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        mike = _closure1_slot13;
        report = mike.AUTHENTICATE;
        golf = _closure1_slot0;
        oscar = _closure1_slot3;
        zulu = 20;
        oscar = oscar[zulu];
        zulu = undefined;
        options = golf.bind(zulu)(oscar);
        golf = options.createRPCCommand;
        oscar = mike.AUTHENTICATE;
        zulu = {};
        verify = function(argFoo) { // Original name: handler
            _fun109853: for(var _fun109853_ip = 0; ; ) switch(_fun109853_ip) {
 0:
                entity = argFoo;
                golf = entity.socket;
                var _closure3_slot0 = golf;
                mike = entity.signal;
                var _closure3_slot1 = mike;
                entity = entity.args;
                oscar = entity.access_token;
                tango = undefined;
                var _closure3_slot2 = tango;
                var _closure3_slot3 = tango;
                var _closure3_slot4 = tango;
                report = null;
                if(!(report == oscar)) { _fun109853_ip = 80; continue _fun109853 }
 57:
                options = golf.transport;
                mike = _closure1_slot9;
                mike = mike.IPC;
                if(!(options !== mike)) { _fun109853_ip = 170; continue _fun109853 }
 80:
                if(!(report != oscar)) { _fun109853_ip = 99; continue _fun109853 }
 84:
                mike = _closure1_slot19;
                mike = mike.bind(tango)(golf, oscar);
                return mike;
 99:
                options = _closure1_slot1;
                verify = _closure1_slot3;
                oscar = 9;
                oscar = verify[oscar];
                verify = options.bind(tango)(oscar);
                options = {};
                mike = _closure1_slot14;
                mike = mike.INVALID_TOKEN;
                options['errorCode'] = mike;
                mike = verify.prototype;
                oscar = Object.create(mike, {constructor: {value: verify}});
                sizing = 'No access token provided';
                result = oscar;
                output = options;
                mike = new result[verify](output, sizing, kilo);
                mike = mike instanceof Object ? mike : oscar;
                throw mike;
 170:
                mike = golf.application;
                options = mike.id;
                _closure3_slot2 = options;
                if(!(report != options)) { _fun109853_ip = 423; continue _fun109853 }
 191:
                verify = _closure1_slot0;
                oscar = _closure1_slot3;
                mike = 21;
                mike = oscar[mike];
                mike = verify.bind(tango)(mike);
                mike = mike.OAuth2Scopes;
                backup = mike.IDENTIFY;
                _closure3_slot3 = backup;
                mike = function() { // Original name: _authorize
                    report = _closure1_slot16;
                    tango = {};
                    mike = _closure3_slot2;
                    tango['client_id'] = mike;
                    mike = _closure3_slot3;
                    tango['scope'] = mike;
                    mike = 'token';
                    tango['response_type'] = mike;
                    entity = _closure3_slot1;
                    tango['signal'] = entity;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    entity = undefined;
                    zulu = report.bind(entity)(tango, zulu, mike);
                    mike = zulu.then;
                    entity = function(argFoo) {
                        _fun109855: for(var _fun109855_ip = 0; ; ) switch(_fun109855_ip) {
 0:
                            tango = argFoo;
                            mike = null;
                            if(!(mike != tango)) { _fun109855_ip = 394; continue _fun109855 }
 12:
                            zulu = tango.split;
                            entity = /#|\?/;
                            golf = zulu.bind(tango)(entity);
                            zulu = _closure1_slot1;
                            tango = _closure1_slot3;
                            entity = 22;
                            entity = tango[entity];
                            oscar = undefined;
                            tango = zulu.bind(oscar)(entity);
                            zulu = tango.parse;
                            options = golf.length;
                            entity = 1;
                            entity = options - entity;
                            entity = golf[entity];
                            entity = zulu.bind(tango)(entity);
                            zulu = entity.error;
                            if(!(mike == zulu)) { _fun109855_ip = 273; continue _fun109855 }
 100:
                            golf = _closure3_slot2;
                            foxtrot = entity.access_token;
                            yankee = entity.scope;
                            romeo = entity.expires_in;
                            options = _closure1_slot0;
                            tango = _closure1_slot3;
                            offset = 7;
                            tango = tango[offset];
                            tango = options.bind(oscar)(tango);
                            options = tango.Storage;
                            tango = options.get;
                            verify = 'CachedTokens';
                            options = tango.bind(options)(verify);
                            if(!(mike == options)) { _fun109855_ip = 175; continue _fun109855 }
 173:
                            options = {};
 175:
                            tango = {};
                            tango['accessToken'] = foxtrot;
                            tango['scope'] = yankee;
                            yankee = global;
                            foxtrot = yankee.Date;
                            yankee = foxtrot.now;
                            yankee = yankee.bind(foxtrot)();
                            yankee = yankee + romeo;
                            tango['expires'] = yankee;
                            options[golf] = tango;
                            golf = _closure1_slot0;
                            tango = _closure1_slot3;
                            tango = tango[offset];
                            tango = golf.bind(oscar)(tango);
                            golf = tango.Storage;
                            tango = golf.set;
                            tango = tango.bind(golf)(verify, options);
                            golf = _closure1_slot19;
                            tango = _closure3_slot0;
                            zulu = entity.access_token;
                            zulu = golf.bind(oscar)(tango, zulu);
                            return zulu;
 273:
                            tango = _closure1_slot1;
                            golf = _closure1_slot3;
                            zulu = 9;
                            zulu = golf[zulu];
                            tango = tango.bind(oscar)(zulu);
                            zulu = {};
                            report = _closure1_slot14;
                            report = report.OAUTH2_ERROR;
                            zulu['errorCode'] = report;
                            golf = entity.error;
                            entity = entity.error_description;
                            mike = mike != entity;
                            oscar = 'unknown error';
                            if(!mike) { _fun109855_ip = 337; continue _fun109855 }
 334:
                            oscar = entity;
 337:
                            entity = global;
                            entity = entity.HermesInternal;
                            report = entity.concat;
                            mike = 'OAuth2 Error: ';
                            entity = ': ';
                            kilo = report.bind(mike)(golf, entity, oscar);
                            mike = tango.prototype;
                            mike = Object.create(mike, {constructor: {value: tango}});
                            output = mike;
                            sizing = zulu;
                            entity = new output[tango](sizing, kilo, backup);
                            entity = entity instanceof Object ? entity : mike;
                            throw entity;
 394:
                            tango = _closure1_slot1;
                            zulu = _closure1_slot3;
                            mike = 9;
                            zulu = zulu[mike];
                            mike = undefined;
                            tango = tango.bind(mike)(zulu);
                            zulu = {};
                            entity = _closure1_slot14;
                            entity = entity.UNKNOWN_ERROR;
                            zulu['errorCode'] = entity;
                            entity = tango.prototype;
                            mike = Object.create(entity, {constructor: {value: tango}});
                            kilo = 'Unknown error occurred';
                            output = mike;
                            sizing = zulu;
                            entity = new output[tango](sizing, kilo, backup);
                            entity = entity instanceof Object ? entity : mike;
                            throw entity;
                        }
                    };
                    entity = mike.bind(zulu)(entity);
                    return entity;
                };
                _closure3_slot4 = mike;
                romeo = 7;
                oscar = oscar[romeo];
                oscar = verify.bind(tango)(oscar);
                verify = oscar.Storage;
                oscar = verify.get;
                yankee = 'CachedTokens';
                offset = oscar.bind(verify)(yankee);
                verify = report != offset;
                oscar = undefined;
                if(!verify) { _fun109853_ip = 383; continue _fun109853 }
 281:
                verify = offset[options];
                verify = report != verify;
                oscar = undefined;
                if(!verify) { _fun109853_ip = 383; continue _fun109853 }
 294:
                verify = offset[options];
                foxtrot = verify.scope;
                if(!(foxtrot === backup)) { _fun109853_ip = 343; continue _fun109853 }
 308:
                backup = verify.expires;
                foxtrot = global;
                kilo = foxtrot.Date;
                foxtrot = kilo.now;
                foxtrot = foxtrot.bind(kilo)();
                if(!(!(backup <= foxtrot))) { _fun109853_ip = 343; continue _fun109853 }
 335:
                oscar = verify.accessToken;
                _fun109853_ip = 383; continue _fun109853;
 343:
                options = delete offset[options];
                verify = _closure1_slot0;
                options = _closure1_slot3;
                options = options[romeo];
                options = verify.bind(tango)(options);
                verify = options.Storage;
                options = verify.set;
                options = options.bind(verify)(yankee, offset);
                oscar = undefined;
 383:
                if(!(report == oscar)) { _fun109853_ip = 393; continue _fun109853 }
 387:
                mike = mike.bind(tango)();
                _fun109853_ip = 421; continue _fun109853;
 393:
                report = _closure1_slot19;
                oscar = report.bind(tango)(golf, oscar);
                report = oscar.catch;
                zulu = function() {
                    _fun109856: for(var _fun109856_ip = 0; ; ) switch(_fun109856_ip) {
 0:
                        tango = _closure3_slot2;
                        oscar = _closure1_slot0;
                        mike = _closure1_slot3;
                        golf = 7;
                        report = mike[golf];
                        mike = undefined;
                        report = oscar.bind(mike)(report);
                        options = report.Storage;
                        report = options.get;
                        oscar = 'CachedTokens';
                        report = report.bind(options)(oscar);
                        options = null;
                        if(!(options == report)) { _fun109856_ip = 62; continue _fun109856 }
 60:
                        report = {};
 62:
                        tango = delete report[tango];
                        tango = _closure1_slot0;
                        zulu = _closure1_slot3;
                        zulu = zulu[golf];
                        zulu = tango.bind(mike)(zulu);
                        tango = zulu.Storage;
                        zulu = tango.set;
                        zulu = zulu.bind(tango)(oscar, report);
                        entity = _closure3_slot4;
                        entity = entity.bind(mike)();
                        return entity;
                    }
                };
                mike = report.bind(oscar)(zulu);
 421:
                return mike;
 423:
                zulu = _closure1_slot1;
                report = _closure1_slot3;
                mike = 9;
                mike = report[mike];
                tango = zulu.bind(tango)(mike);
                zulu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zulu['errorCode'] = entity;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                sizing = 'No application.';
                result = mike;
                output = zulu;
                entity = new result[tango](output, sizing, kilo);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        zulu['handler'] = verify;
        zulu = golf.bind(options)(oscar, zulu);
        entity[report] = zulu;
        zulu = mike.AUTHORIZE;
        mike = {};
        tango = function(argFoo) { // Original name: handler
            _fun109857: for(var _fun109857_ip = 0; ; ) switch(_fun109857_ip) {
 0:
                mike = argFoo;
                zulu = mike.socket;
                var _closure3_slot0 = zulu;
                report = mike.signal;
                var _closure3_slot1 = report;
                mike = mike.args;
                var _closure3_slot2 = mike;
                golf = mike.client_id;
                var _closure3_slot3 = golf;
                if(golf) { _fun109857_ip = 121; continue _fun109857 }
 48:
                verify = _closure1_slot1;
                options = _closure1_slot3;
                oscar = 9;
                options = options[oscar];
                oscar = undefined;
                verify = verify.bind(oscar)(options);
                options = {};
                tango = _closure1_slot14;
                tango = tango.INVALID_CLIENTID;
                options['errorCode'] = tango;
                tango = verify.prototype;
                oscar = Object.create(tango, {constructor: {value: verify}});
                offset = 'No client id provided';
                romeo = oscar;
                yankee = options;
                tango = new romeo[verify](yankee, offset, verify);
                tango = tango instanceof Object ? tango : oscar;
                throw tango;
 121:
                tango = zulu.authorization;
                oscar = tango.accessToken;
                tango = null;
                if(!(tango == oscar)) { _fun109857_ip = 542; continue _fun109857 }
 142:
                tango = zulu.authorization;
                tango = tango.authing;
                if(tango) { _fun109857_ip = 469; continue _fun109857 }
 160:
                zulu = zulu.authorization;
                oscar = true;
                zulu['authing'] = oscar;
                zulu = mike.response_type;
                mike = 'token';
                if(!(mike !== zulu)) { _fun109857_ip = 396; continue _fun109857 }
 191:
                zulu = _closure1_slot0;
                tango = _closure1_slot3;
                mike = 8;
                mike = tango[mike];
                tango = undefined;
                zulu = zulu.bind(tango)(mike);
                mike = zulu.isOptimizedRPCAuthorizeEnabled;
                mike = mike.bind(zulu)();
                if(mike) { _fun109857_ip = 303; continue _fun109857 }
 229:
                zulu = _closure1_slot0;
                verify = _closure1_slot3;
                mike = 18;
                mike = verify[mike];
                mike = zulu.bind(tango)(mike);
                tango = mike.HTTP;
                zulu = tango.get;
                mike = {};
                verify = _closure1_slot12;
                options = verify.APPLICATION_RPC;
                options = options.bind(verify)(golf);
                mike['url'] = options;
                mike['oldFormErrors'] = oscar;
                mike['signal'] = report;
                report = false;
                mike['rejectWithError'] = report;
                report = zulu.bind(tango)(mike);
                _fun109857_ip = 334; continue _fun109857;
 303:
                mike = global;
                tango = mike.Promise;
                zulu = tango.resolve;
                mike = {};
                oscar = {};
                oscar['id'] = golf;
                mike['body'] = oscar;
                report = zulu.bind(tango)(mike);
 334:
                tango = report.then;
                zulu = function(argFoo) {
                    _fun109858: for(var _fun109858_ip = 0; ; ) switch(_fun109858_ip) {
 0:
                        entity = argFoo;
                        mike = entity.body;
                        zulu = _closure3_slot0;
                        zulu = zulu.application;
                        zulu = zulu.id;
                        mike = mike.id;
                        if(!(zulu === mike)) { _fun109858_ip = 129; continue _fun109858 }
 34:
                        mike = _closure3_slot2;
                        zulu = mike.scopes;
                        if(zulu) { _fun109858_ip = 57; continue _fun109858 }
 47:
                        mike = _closure3_slot2;
                        zulu = mike.scope;
 57:
                        mike = _closure3_slot2;
                        tango = delete mike.scopes;
                        report = _closure1_slot16;
                        tango = {};
                        options = tango;
                        golf = mike;
                        mike = copyDataProperties(options, golf);
                        mike = 'scope';
                        tango[mike] = zulu;
                        mike = _closure3_slot1;
                        entity = 'signal';
                        tango[entity] = mike;
                        zulu = _closure2_slot0;
                        mike = _closure2_slot1;
                        entity = undefined;
                        entity = report.bind(entity)(tango, zulu, mike);
                        return entity;
 129:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        mike = 9;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = {};
                        entity = _closure1_slot14;
                        entity = entity.INVALID_CLIENTID;
                        zulu['errorCode'] = entity;
                        entity = tango.prototype;
                        mike = Object.create(entity, {constructor: {value: tango}});
                        golf = "Application does not match the connection's";
                        verify = mike;
                        options = zulu;
                        entity = new verify[tango](options, golf, oscar);
                        entity = entity instanceof Object ? entity : mike;
                        throw entity;
                    }
                };
                mike = function() {
                    tango = _closure1_slot1;
                    zulu = _closure1_slot3;
                    mike = 9;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = {};
                    entity = _closure1_slot14;
                    entity = entity.INVALID_CLIENTID;
                    zulu['errorCode'] = entity;
                    report = _closure3_slot3;
                    entity = global;
                    entity = entity.HermesInternal;
                    mike = entity.concat;
                    entity = 'Invalid client id: ';
                    oscar = mike.bind(entity)(report);
                    mike = tango.prototype;
                    mike = Object.create(mike, {constructor: {value: tango}});
                    options = mike;
                    golf = zulu;
                    entity = new options[tango](golf, oscar, report);
                    entity = entity instanceof Object ? entity : mike;
                    throw entity;
                };
                tango = tango.bind(report)(zulu, mike);
                zulu = tango.then;
                mike = function(argFoo) {
                    _fun109860: for(var _fun109860_ip = 0; ; ) switch(_fun109860_ip) {
 0:
                        report = argFoo;
                        entity = _closure3_slot0;
                        mike = entity.authorization;
                        entity = false;
                        mike['authing'] = entity;
                        zulu = null;
                        if(!(zulu != report)) { _fun109860_ip = 334; continue _fun109860 }
 33:
                        entity = global;
                        mike = entity.URL;
                        tango = mike.prototype;
                        tango = Object.create(tango, {constructor: {value: mike}});
                        romeo = tango;
                        yankee = report;
                        mike = new romeo[mike](yankee, offset);
                        mike = mike instanceof Object ? mike : tango;
                        oscar = mike.searchParams;
                        report = oscar.get;
                        tango = 'error';
                        golf = report.bind(oscar)(tango);
                        if(!(zulu != golf)) { _fun109860_ip = 96; continue _fun109860 }
 88:
                        tango = '';
                        if(!(tango === golf)) { _fun109860_ip = 201; continue _fun109860 }
 96:
                        oscar = mike.searchParams;
                        report = oscar.get;
                        tango = 'code';
                        report = report.bind(oscar)(tango);
                        if(!(zulu != report)) { _fun109860_ip = 128; continue _fun109860 }
 120:
                        tango = {};
                        tango['code'] = report;
                        return tango;
 128:
                        options = _closure1_slot1;
                        oscar = _closure1_slot3;
                        report = 9;
                        oscar = oscar[report];
                        report = undefined;
                        options = options.bind(report)(oscar);
                        oscar = {};
                        tango = _closure1_slot14;
                        tango = tango.OAUTH2_ERROR;
                        oscar['errorCode'] = tango;
                        tango = options.prototype;
                        report = Object.create(tango, {constructor: {value: options}});
                        offset = 'OAuth2 Error: Unable to find auth code';
                        romeo = report;
                        yankee = oscar;
                        tango = new romeo[options](yankee, offset, verify);
                        tango = tango instanceof Object ? tango : report;
                        throw tango;
 201:
                        report = mike.searchParams;
                        tango = report.get;
                        mike = 'error_description';
                        mike = tango.bind(report)(mike);
                        zulu = zulu != mike;
                        oscar = 'unknown error';
                        if(!zulu) { _fun109860_ip = 237; continue _fun109860 }
 234:
                        oscar = mike;
 237:
                        report = _closure1_slot1;
                        tango = _closure1_slot3;
                        zulu = 9;
                        tango = tango[zulu];
                        zulu = undefined;
                        tango = report.bind(zulu)(tango);
                        zulu = {};
                        mike = _closure1_slot14;
                        mike = mike.OAUTH2_ERROR;
                        zulu['errorCode'] = mike;
                        entity = entity.HermesInternal;
                        report = entity.concat;
                        mike = 'OAuth2 Error: ';
                        entity = ': ';
                        offset = report.bind(mike)(golf, entity, oscar);
                        mike = tango.prototype;
                        mike = Object.create(mike, {constructor: {value: tango}});
                        romeo = mike;
                        yankee = zulu;
                        entity = new romeo[tango](yankee, offset, verify);
                        entity = entity instanceof Object ? entity : mike;
                        throw entity;
 334:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot3;
                        mike = 9;
                        zulu = zulu[mike];
                        mike = undefined;
                        tango = tango.bind(mike)(zulu);
                        zulu = {};
                        entity = _closure1_slot14;
                        entity = entity.UNKNOWN_ERROR;
                        zulu['errorCode'] = entity;
                        entity = tango.prototype;
                        mike = Object.create(entity, {constructor: {value: tango}});
                        offset = 'Unknown error occurred';
                        romeo = mike;
                        yankee = zulu;
                        entity = new romeo[tango](yankee, offset, verify);
                        entity = entity instanceof Object ? entity : mike;
                        throw entity;
                    }
                };
                zulu = zulu.bind(tango)(mike);
                mike = zulu.catch;
                entity = function(argFoo) {
                    entity = _closure3_slot0;
                    mike = entity.authorization;
                    entity = false;
                    mike['authing'] = entity;
                    entity = argFoo;
                    throw entity;
                };
                entity = mike.bind(zulu)(entity);
                return entity;
 396:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zulu['errorCode'] = entity;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                offset = 'Authorization response_type "token" is not supported';
                romeo = mike;
                yankee = zulu;
                entity = new romeo[tango](yankee, offset, verify);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 469:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zulu['errorCode'] = entity;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                offset = 'Already authing';
                romeo = mike;
                yankee = zulu;
                entity = new romeo[tango](yankee, offset, verify);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 542:
                tango = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zulu['errorCode'] = entity;
                entity = tango.prototype;
                mike = Object.create(entity, {constructor: {value: tango}});
                offset = 'Already authenticated';
                romeo = mike;
                yankee = zulu;
                entity = new romeo[tango](yankee, offset, verify);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        mike['handler'] = tango;
        entity[zulu] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
// app/modules/rpc/server/commands/AuthCommandsFactory.tsx
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
    entity = function(argFoo, argBar, argBaz) { // Original name: authorizeWithPrompt
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            tangon = argBaz;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot3;
            entity = 8;
            entity = zuuluu[entity];
            zuuluu = undefined;
            golfie = golfie.bind(zuuluu)(entity);
            entity = golfie.isOptimizedRPCAuthorizeEnabled;
            entity = entity.bind(golfie)();
            if(entity) { _fun00002_ip = 65; continue _fun00001 }
 49:
            entity = function() { // Original name: authorizeWithPromptOld
                entity = undefined;
                tangon = _closure1_slot18;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity = entity.bind(zuuluu)(oscard, report, tangon);
            _fun00002_ip = 79; continue _fun00001;
 65:
            michal = function() { // Original name: authorizeWithPromptNew
                entity = undefined;
                tangon = _closure1_slot17;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            entity = michal.bind(zuuluu)(oscard, report, tangon);
 79:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _authorizeWithPromptNew
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 1804; continue _fun00003 }
 13:
                    source = michal.client_id;
                    tangon = michal.response_type;
                    oscard = undefined;
                    if(!(tangon === oscard)) { _fun00004_ip = 35; continue _fun00003 }
 31:
                    tangon = 'code';
 35:
                    echoed = tangon;
                    result = michal.redirect_uri;
                    output = michal.code_challenge;
                    sizing = michal.code_challenge_method;
                    kiloes = michal.state;
                    backup = michal.nonce;
                    yankee = michal.scope;
                    whisks = michal.permissions;
                    cntext = michal.guild_id;
                    record = michal.channel_id;
                    config = michal.prompt;
                    sequen = michal.disable_guild_select;
                    report = michal.integration_type;
                    ctrled = michal.pid;
                    variable41 = michal.signal;
                    golfie = argBar;
                    status = argBaz;
                    romeon = undefined;
                    option = undefined;
                    vacuum = undefined;
                    sierra = undefined;
                    quebec = undefined;
                    update = undefined;
                    verify = undefined;
                    foxtra = undefined;
                    papara = undefined;
                    target = undefined;
                    SaveGenerator(address=149);
 147:
                    return oscard;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 1801; continue _fun00003 }
 158:
                    zuuluu = variable41;
                    offset = null;
                    if(!(offset != zuuluu)) { _fun00004_ip = 182; continue _fun00003 }
 167:
                    zuuluu = variable41;
                    zuuluu = zuuluu.aborted;
                    if(zuuluu) { _fun00004_ip = 1730; continue _fun00003 }
 182:
                    zuuluu = source;
                    if(!(offset != zuuluu)) { _fun00004_ip = 1659; continue _fun00003 }
 192:
                    zuuluu = result;
                    if(!(offset == zuuluu)) { _fun00004_ip = 1588; continue _fun00003 }
 202:
                    update = new Array(0);
                    tangon = 'string';
                    zuuluu = typeof yankee;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 243; continue _fun00003 }
 217:
                    zuuluu = global;
                    tangon = zuuluu.Array;
                    zuuluu = tangon.isArray;
                    zuuluu = zuuluu.bind(tangon)(yankee);
                    if(!zuuluu) { _fun00004_ip = 276; continue _fun00003 }
 238:
                    update = yankee;
                    _fun00004_ip = 276; continue _fun00003;
 243:
                    tangon = yankee.split;
                    zuuluu = ' ';
                    yankee = tangon.bind(yankee)(zuuluu);
                    tangon = yankee.filter;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        michal = entity.length;
                        entity = 0;
                        entity = michal > entity;
                        return entity;
                    };
                    update = tangon.bind(yankee)(zuuluu);
 276:
                    yankee = _closure1_slot8;
                    tangon = yankee.getCurrentUser;
                    tangon = tangon.bind(yankee)();
                    if(!(offset != tangon)) { _fun00004_ip = 1520; continue _fun00003 }
 299:
                    if(!(offset != report)) { _fun00004_ip = 316; continue _fun00003 }
 303:
                    tangon = global;
                    tangon = tangon.Number;
                    romeon = tangon.bind(oscard)(report);
 316: // try_start_0
                    report = global;
                    equals = report.Promise;
                    limora = equals.all;
                    variable37 = _closure1_slot0;
                    variable39 = _closure1_slot3;
                    yankee = 10;
                    tangon = variable39[yankee];
                    variable40 = variable37.bind(oscard)(tangon);
                    variable36 = variable40.fetchAuthorization;
                    tangon = {};
                    variable38 = source;
                    tangon['clientId'] = variable38;
                    variable42 = update;
                    tangon['scopes'] = variable42;
                    variable42 = echoed;
                    tangon['responseType'] = variable42;
                    variable42 = result;
                    tangon['redirectUri'] = variable42;
                    variable42 = output;
                    tangon['codeChallenge'] = variable42;
                    variable42 = sizing;
                    tangon['codeChallengeMethod'] = variable42;
                    variable42 = kiloes;
                    tangon['state'] = variable42;
                    variable42 = romeon;
                    tangon['integrationType'] = variable42;
                    tangon['signal'] = variable41;
                    variable36 = variable36.bind(variable40)(tangon);
                    tangon = new Array(2);
                    tangon[0] = variable36;
                    variable36 = 11;
                    variable36 = variable39[variable36];
                    variable37 = variable37.bind(oscard)(variable36);
                    variable36 = variable37.getDisclosures;
                    variable36 = variable36.bind(variable37)(variable38);
                    tangon[1] = variable36;
                    tangon = limora.bind(equals)(tangon);
                    SaveGenerator(address=475);
 473:
                    return tangon;
 475:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=31);
                    if(limora) { _fun00004_ip = 1392; continue _fun00003 }
 484:
                    equals = _closure1_slot4;
                    limora = 2;
                    variable36 = equals.bind(oscard)(tangon, limora);
                    limora = 0;
                    option = variable36[limora];
                    equals = 1;
                    equals = variable36[equals];
                    vacuum = equals.disclosures;
                    sierra = equals.allAcked;
 522: // try_end0
                    equals = romeon;
                    if(!(offset == equals)) { _fun00004_ip = 748; continue _fun00003 }
 532:
                    equals = option;
                    equals = equals.application;
                    equals = equals.flags;
                    if(!(offset != equals)) { _fun00004_ip = 679; continue _fun00003 }
 552:
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    equals = 12;
                    equals = variable37[equals];
                    variable38 = variable36.bind(oscard)(equals);
                    variable37 = variable38.hasFlag;
                    equals = option;
                    equals = equals.application;
                    variable36 = equals.flags;
                    equals = _closure1_slot11;
                    equals = equals.EMBEDDED;
                    equals = variable37.bind(variable38)(variable36, equals);
                    if(!equals) { _fun00004_ip = 679; continue _fun00003 }
 610:
                    equals = option;
                    equals = equals.application;
                    equals = equals.integration_types_config;
                    quebec = equals;
                    variable36 = offset == equals;
                    equals = undefined;
                    if(variable36) { _fun00004_ip = 675; continue _fun00003 }
 636:
                    variable36 = quebec;
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    quebec = 13;
                    quebec = variable38[quebec];
                    quebec = variable37.bind(oscard)(quebec);
                    quebec = quebec.ApplicationIntegrationType;
                    quebec = quebec.USER_INSTALL;
                    equals = variable36[quebec];
 675:
                    if(!(offset == equals)) { _fun00004_ip = 713; continue _fun00003 }
 679:
                    quebec = _closure1_slot0;
                    variable36 = _closure1_slot3;
                    equals = 13;
                    equals = variable36[equals];
                    equals = quebec.bind(oscard)(equals);
                    equals = equals.ApplicationIntegrationType;
                    equals = equals.GUILD_INSTALL;
                    _fun00004_ip = 745; continue _fun00003;
 713:
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    quebec = 13;
                    quebec = variable37[quebec];
                    quebec = variable36.bind(oscard)(quebec);
                    quebec = quebec.ApplicationIntegrationType;
                    equals = quebec.USER_INSTALL;
 745:
                    romeon = equals;
 748:
                    quebec = config;
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    equals = 14;
                    equals = variable37[equals];
                    equals = variable36.bind(oscard)(equals);
                    equals = equals.OAuth2Prompts;
                    equals = equals.NONE;
                    if(!(quebec === equals)) { _fun00004_ip = 812; continue _fun00003 }
 787:
                    equals = option;
                    if(!(offset != equals)) { _fun00004_ip = 812; continue _fun00003 }
 794:
                    equals = option;
                    equals = equals.authorized;
                    if(!equals) { _fun00004_ip = 812; continue _fun00003 }
 806:
                    if(sierra) { _fun00004_ip = 1167; continue _fun00003 }
 812:
                    sierra = status;
                    if(!(offset != sierra)) { _fun00004_ip = 843; continue _fun00003 }
 819:
                    quebec = status;
                    status = option;
                    equals = status.application;
                    sierra = record;
                    status = ctrled;
                    status = quebec.bind(oscard)(equals, sierra, status);
 843:
                    sierra = _closure1_slot2;
                    equals = _closure1_slot3;
                    status = 15;
                    status = equals[status];
                    status = sierra.bind(oscard)(status);
                    papara = status.NONE;
 869: // try_start_1
                    sierra = _closure1_slot2;
                    equals = _closure1_slot3;
                    status = 16;
                    status = equals[status];
                    sierra = sierra.bind(oscard)(status);
                    status = sierra.deserialize;
                    equals = whisks;
                    equals = offset != equals;
                    limora = 0;
                    if(!equals) { _fun00004_ip = 910; continue _fun00003 }
 907:
                    limora = whisks;
 910:
                    papara = status.bind(sierra)(limora);
 915: // try_end1
                    _fun00004_ip = 919; continue _fun00003;
 917: // catch_target1
                    CatchBlockStart(arg_register=29);
 919:
                    target = undefined;
                    sierra = option;
                    sierra = sierra.integration_type;
                    sierra = offset != sierra;
                    status = sierra;
                    if(!sierra) { _fun00004_ip = 1001; continue _fun00003 }
 940:
                    whisks = report.Object;
                    limora = whisks.values;
                    equals = _closure1_slot0;
                    quebec = _closure1_slot3;
                    sierra = 13;
                    sierra = quebec[sierra];
                    sierra = equals.bind(oscard)(sierra);
                    sierra = sierra.ApplicationIntegrationType;
                    whisks = limora.bind(whisks)(sierra);
                    limora = whisks.includes;
                    sierra = option;
                    sierra = sierra.integration_type;
                    status = limora.bind(whisks)(sierra);
 1001:
                    if(!status) { _fun00004_ip = 1053; continue _fun00003 }
 1004:
                    status = report.Map;
                    sierra = status.prototype;
                    sierra = Object.create(sierra, {constructor: {value: status}});
                    variable46 = sierra;
                    status = new variable46[status](variable45);
                    limora = status instanceof Object ? status : sierra;
                    target = limora;
                    sierra = limora.set;
                    status = option;
                    option = status.integration_type;
                    option = sierra.bind(limora)(option, status);
 1053:
                    option = golfie;
                    golfie = {};
                    status = source;
                    golfie['clientId'] = status;
                    golfie['authorizations'] = target;
                    target = update;
                    golfie['scopes'] = target;
                    golfie['parsedPermissions'] = papara;
                    papara = echoed;
                    golfie['responseType'] = papara;
                    papara = result;
                    golfie['redirectUri'] = papara;
                    papara = output;
                    golfie['codeChallenge'] = papara;
                    papara = sizing;
                    golfie['codeChallengeMethod'] = papara;
                    papara = kiloes;
                    golfie['state'] = papara;
                    golfie['guildId'] = cntext;
                    golfie['channelId'] = record;
                    golfie['prompt'] = config;
                    golfie['disableGuildSelect'] = sequen;
                    golfie['disclosures'] = vacuum;
                    vacuum = romeon;
                    golfie['integrationType'] = vacuum;
                    golfie['pid'] = ctrled;
                    golfie = option.bind(oscard)(golfie);
                    return golfie;
 1167: // try_start_2
                    option = _closure1_slot0;
                    golfie = _closure1_slot3;
                    golfie = golfie[yankee];
                    yankee = option.bind(oscard)(golfie);
                    option = yankee.authorize;
                    golfie = {};
                    ctrled = true;
                    golfie['authorize'] = ctrled;
                    golfie['clientId'] = source;
                    golfie['scopes'] = update;
                    golfie['responseType'] = echoed;
                    golfie['redirectUri'] = result;
                    golfie['codeChallenge'] = output;
                    golfie['codeChallengeMethod'] = sizing;
                    golfie['state'] = kiloes;
                    golfie['nonce'] = backup;
                    golfie['integrationType'] = romeon;
                    golfie = option.bind(yankee)(golfie);
                    SaveGenerator(address=1252);
 1250:
                    return golfie;
 1252:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=7);
                    if(option) { _fun00004_ip = 1266; continue _fun00003 }
 1258:
                    option = golfie.location;
 1263: // try_end2
                    return option;
 1266:
                    return golfie;
 1269: // catch_target2
                    CatchBlockStart(arg_register=6);
                    romeon = golfie.body;
                    foxtra = romeon;
                    option = _closure1_slot1;
                    yankee = _closure1_slot3;
                    golfie = 9;
                    golfie = yankee[golfie];
                    yankee = option.bind(oscard)(golfie);
                    option = {};
                    golfie = _closure1_slot14;
                    golfie = golfie.OAUTH2_ERROR;
                    option['errorCode'] = golfie;
                    backup = offset == romeon;
                    romeon = undefined;
                    if(backup) { _fun00004_ip = 1330; continue _fun00003 }
 1325:
                    romeon = foxtra.message;
 1330:
                    golfie = romeon;
                    if(romeon) { _fun00004_ip = 1342; continue _fun00003 }
 1336:
                    golfie = 'Unknown Error';
 1342:
                    romeon = golfie;
                    report = report.HermesInternal;
                    golfie = report.concat;
                    report = 'OAuth2 Authorize Error: ';
                    variable44 = golfie.bind(report)(romeon);
                    golfie = yankee.prototype;
                    golfie = Object.create(golfie, {constructor: {value: yankee}});
                    variable46 = golfie;
                    variable45 = option;
                    report = new variable46[yankee](variable45, variable44, variable43);
                    report = report instanceof Object ? report : golfie;
                    throw report;
 1392:
                    return tangon;
 1395: // catch_target0
                    CatchBlockStart(arg_register=3);
                    report = tangon.body;
                    verify = report;
                    golfie = _closure1_slot1;
                    option = _closure1_slot3;
                    tangon = 9;
                    tangon = option[tangon];
                    option = golfie.bind(oscard)(tangon);
                    golfie = {};
                    tangon = _closure1_slot14;
                    tangon = tangon.OAUTH2_ERROR;
                    golfie['errorCode'] = tangon;
                    offset = offset == report;
                    report = undefined;
                    if(offset) { _fun00004_ip = 1456; continue _fun00003 }
 1451:
                    report = verify.message;
 1456:
                    tangon = report;
                    if(report) { _fun00004_ip = 1468; continue _fun00003 }
 1462:
                    tangon = 'Unknown Error';
 1468:
                    verify = tangon;
                    tangon = global;
                    tangon = tangon.HermesInternal;
                    report = tangon.concat;
                    tangon = 'OAuth2 Authorization Error: ';
                    variable44 = report.bind(tangon)(verify);
                    report = option.prototype;
                    report = Object.create(report, {constructor: {value: option}});
                    variable46 = report;
                    variable45 = golfie;
                    tangon = new variable46[option](variable45, variable44, variable43);
                    tangon = tangon instanceof Object ? tangon : report;
                    throw tangon;
 1520:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.OAUTH2_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    variable44 = 'Client is not logged in';
                    variable46 = tangon;
                    variable45 = report;
                    zuuluu = new variable46[golfie](variable45, variable44, variable43);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 1588:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.OAUTH2_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    variable44 = 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow';
                    variable46 = tangon;
                    variable45 = report;
                    zuuluu = new variable46[golfie](variable45, variable44, variable43);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 1659:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.OAUTH2_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    variable44 = 'No Client ID provided';
                    variable46 = tangon;
                    variable45 = report;
                    zuuluu = new variable46[golfie](variable45, variable44, variable43);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 1730:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.UNKNOWN_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = oscard.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: oscard}});
                    variable44 = 'Request aborted';
                    variable46 = tangon;
                    variable45 = report;
                    zuuluu = new variable46[oscard](variable45, variable44, variable43);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 1801:
                    return michal;
 1804:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot17 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot17 = entity;
    entity = function() { // Original name: _authorizeWithPromptOld
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 2027; continue _fun00005 }
 13:
                    vacuum = michal.client_id;
                    tangon = michal.response_type;
                    oscard = undefined;
                    if(!(tangon === oscard)) { _fun00006_ip = 35; continue _fun00005 }
 31:
                    tangon = 'code';
 35:
                    source = tangon;
                    update = michal.redirect_uri;
                    echoed = michal.code_challenge;
                    result = michal.code_challenge_method;
                    output = michal.state;
                    sizing = michal.nonce;
                    report = michal.scope;
                    quebec = michal.permissions;
                    target = michal.guild_id;
                    papara = michal.channel_id;
                    cntext = michal.prompt;
                    record = michal.disable_guild_select;
                    romeon = michal.integration_type;
                    sequen = michal.pid;
                    variable36 = michal.signal;
                    option = argBar;
                    limora = argBaz;
                    backup = undefined;
                    ctrled = undefined;
                    verify = undefined;
                    config = undefined;
                    whisks = undefined;
                    offset = undefined;
                    foxtra = undefined;
                    kiloes = undefined;
                    status = undefined;
                    sierra = undefined;
                    SaveGenerator(address=149);
 147:
                    return oscard;
 149:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 2024; continue _fun00005 }
 158:
                    zuuluu = variable36;
                    yankee = null;
                    if(!(yankee != zuuluu)) { _fun00006_ip = 182; continue _fun00005 }
 167:
                    zuuluu = variable36;
                    zuuluu = zuuluu.aborted;
                    if(zuuluu) { _fun00006_ip = 1953; continue _fun00005 }
 182:
                    zuuluu = vacuum;
                    if(!(yankee != zuuluu)) { _fun00006_ip = 1882; continue _fun00005 }
 192:
                    zuuluu = update;
                    if(!(yankee == zuuluu)) { _fun00006_ip = 1811; continue _fun00005 }
 202:
                    ctrled = new Array(0);
                    tangon = 'string';
                    zuuluu = typeof report;
                    if(!(tangon !== zuuluu)) { _fun00006_ip = 243; continue _fun00005 }
 217:
                    zuuluu = global;
                    tangon = zuuluu.Array;
                    zuuluu = tangon.isArray;
                    zuuluu = zuuluu.bind(tangon)(report);
                    if(!zuuluu) { _fun00006_ip = 276; continue _fun00005 }
 238:
                    ctrled = report;
                    _fun00006_ip = 276; continue _fun00005;
 243:
                    tangon = report.split;
                    zuuluu = ' ';
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.filter;
                    zuuluu = function(argFoo) {
                        entity = argFoo;
                        michal = entity.length;
                        entity = 0;
                        entity = michal > entity;
                        return entity;
                    };
                    ctrled = tangon.bind(report)(zuuluu);
 276:
                    report = _closure1_slot8;
                    tangon = report.getCurrentUser;
                    tangon = tangon.bind(report)();
                    if(!(yankee != tangon)) { _fun00006_ip = 1743; continue _fun00005 }
 299:
                    golfie = _closure1_slot6;
                    report = golfie.getApplication;
                    tangon = vacuum;
                    tangon = report.bind(golfie)(tangon);
                    golfie = yankee != tangon;
                    report = null;
                    if(!golfie) { _fun00006_ip = 329; continue _fun00005 }
 326:
                    report = tangon;
 329:
                    tangon = yankee == report;
                    if(tangon) { _fun00006_ip = 399; continue _fun00005 }
 336:
                    variable37 = report.id;
                    equals = _closure1_slot6;
                    golfie = equals.getApplicationLastUpdated;
                    golfie = golfie.bind(equals)(variable37);
                    variable37 = yankee != golfie;
                    equals = 0;
                    if(!variable37) { _fun00006_ip = 370; continue _fun00005 }
 367:
                    equals = golfie;
 370:
                    golfie = global;
                    variable37 = golfie.Date;
                    golfie = variable37.now;
                    variable37 = golfie.bind(variable37)();
                    golfie = _closure1_slot15;
                    golfie = variable37 - golfie;
                    tangon = equals < golfie;
 399:
                    if(!tangon) { _fun00006_ip = 468; continue _fun00005 }
 402:
                    equals = _closure1_slot7;
                    golfie = equals.createFromServer;
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    tangon = 17;
                    tangon = variable38[tangon];
                    variable39 = variable37.bind(oscard)(tangon);
                    variable38 = variable39.fetchApplication;
                    variable37 = vacuum;
                    tangon = variable36;
                    tangon = variable38.bind(variable39)(variable37, tangon);
                    SaveGenerator(address=454);
 452:
                    return tangon;
 454:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=36);
                    if(variable37) { _fun00006_ip = 1740; continue _fun00005 }
 463:
                    report = golfie.bind(equals)(tangon);
 468:
                    golfie = yankee != report;
                    if(!golfie) { _fun00006_ip = 522; continue _fun00005 }
 475:
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    equals = 12;
                    equals = variable38[equals];
                    variable39 = variable37.bind(oscard)(equals);
                    variable38 = variable39.hasFlag;
                    variable37 = report.flags;
                    equals = _closure1_slot11;
                    equals = equals.EMBEDDED;
                    golfie = variable38.bind(variable39)(variable37, equals);
 522:
                    if(!golfie) { _fun00006_ip = 580; continue _fun00005 }
 525:
                    variable37 = report.integrationTypesConfig;
                    equals = yankee == variable37;
                    report = undefined;
                    if(equals) { _fun00006_ip = 576; continue _fun00005 }
 540:
                    variable38 = _closure1_slot0;
                    variable39 = _closure1_slot3;
                    equals = 13;
                    equals = variable39[equals];
                    equals = variable38.bind(oscard)(equals);
                    equals = equals.ApplicationIntegrationType;
                    equals = equals.USER_INSTALL;
                    report = variable37[equals];
 576:
                    golfie = yankee != report;
 580:
                    if(!(yankee != romeon)) { _fun00006_ip = 599; continue _fun00005 }
 584:
                    report = global;
                    report = report.Number;
                    report = report.bind(oscard)(romeon);
                    _fun00006_ip = 645; continue _fun00005;
 599:
                    equals = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    romeon = 13;
                    romeon = variable37[romeon];
                    romeon = equals.bind(oscard)(romeon);
                    romeon = romeon.ApplicationIntegrationType;
                    if(golfie) { _fun00006_ip = 636; continue _fun00005 }
 628:
                    golfie = romeon.GUILD_INSTALL;
                    _fun00006_ip = 642; continue _fun00005;
 636:
                    golfie = romeon.USER_INSTALL;
 642:
                    report = golfie;
 645:
                    backup = report;
 648: // try_start_0
                    golfie = _closure1_slot0;
                    report = _closure1_slot3;
                    romeon = 10;
                    report = report[romeon];
                    equals = golfie.bind(oscard)(report);
                    golfie = equals.fetchAuthorization;
                    report = {};
                    variable37 = vacuum;
                    report['clientId'] = variable37;
                    variable37 = ctrled;
                    report['scopes'] = variable37;
                    variable37 = source;
                    report['responseType'] = variable37;
                    variable37 = update;
                    report['redirectUri'] = variable37;
                    variable37 = echoed;
                    report['codeChallenge'] = variable37;
                    variable37 = result;
                    report['codeChallengeMethod'] = variable37;
                    variable37 = output;
                    report['state'] = variable37;
                    variable37 = backup;
                    report['integrationType'] = variable37;
                    report['signal'] = variable36;
                    report = golfie.bind(equals)(report);
                    SaveGenerator(address=753);
 751:
                    return report;
 753:
                    ResumeGenerator(result_out_reg=4, return_bool_out_reg=6);
                    if(golfie) { _fun00006_ip = 1612; continue _fun00005 }
 762:
                    verify = report;
 765: // try_start_1 // try_end0
                    equals = _closure1_slot0;
                    variable36 = _closure1_slot3;
                    golfie = 11;
                    golfie = variable36[golfie];
                    variable36 = equals.bind(oscard)(golfie);
                    equals = variable36.getDisclosures;
                    golfie = verify;
                    golfie = golfie.application;
                    golfie = golfie.id;
                    golfie = equals.bind(variable36)(golfie);
                    SaveGenerator(address=813);
 811:
                    return golfie;
 813:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=33);
                    if(equals) { _fun00006_ip = 1484; continue _fun00005 }
 822:
                    config = golfie.disclosures;
                    whisks = golfie.allAcked;
 834: // try_end1
                    variable36 = cntext;
                    variable37 = _closure1_slot0;
                    variable38 = _closure1_slot3;
                    equals = 14;
                    equals = variable38[equals];
                    equals = variable37.bind(oscard)(equals);
                    equals = equals.OAuth2Prompts;
                    equals = equals.NONE;
                    if(!(variable36 === equals)) { _fun00006_ip = 898; continue _fun00005 }
 873:
                    equals = verify;
                    if(!(yankee != equals)) { _fun00006_ip = 898; continue _fun00005 }
 880:
                    equals = verify;
                    equals = equals.authorized;
                    if(!equals) { _fun00006_ip = 898; continue _fun00005 }
 892:
                    if(whisks) { _fun00006_ip = 1257; continue _fun00005 }
 898:
                    whisks = limora;
                    if(!(yankee != whisks)) { _fun00006_ip = 929; continue _fun00005 }
 905:
                    variable36 = limora;
                    limora = verify;
                    equals = limora.application;
                    whisks = papara;
                    limora = sequen;
                    limora = variable36.bind(oscard)(equals, whisks, limora);
 929:
                    whisks = _closure1_slot2;
                    equals = _closure1_slot3;
                    limora = 15;
                    limora = equals[limora];
                    limora = whisks.bind(oscard)(limora);
                    status = limora.NONE;
 955: // try_start_2
                    whisks = _closure1_slot2;
                    equals = _closure1_slot3;
                    limora = 16;
                    limora = equals[limora];
                    equals = whisks.bind(oscard)(limora);
                    whisks = equals.deserialize;
                    limora = quebec;
                    variable36 = yankee != limora;
                    limora = 0;
                    if(!variable36) { _fun00006_ip = 996; continue _fun00005 }
 993:
                    limora = quebec;
 996:
                    status = whisks.bind(equals)(limora);
 1001: // try_end2
                    _fun00006_ip = 1005; continue _fun00005;
 1003: // catch_target2
                    CatchBlockStart(arg_register=31);
 1005:
                    sierra = undefined;
                    whisks = verify;
                    whisks = whisks.integration_type;
                    whisks = yankee != whisks;
                    limora = whisks;
                    if(!whisks) { _fun00006_ip = 1089; continue _fun00005 }
 1026:
                    whisks = global;
                    quebec = whisks.Object;
                    equals = quebec.values;
                    variable36 = _closure1_slot0;
                    variable37 = _closure1_slot3;
                    whisks = 13;
                    whisks = variable37[whisks];
                    whisks = variable36.bind(oscard)(whisks);
                    whisks = whisks.ApplicationIntegrationType;
                    quebec = equals.bind(quebec)(whisks);
                    equals = quebec.includes;
                    whisks = verify;
                    whisks = whisks.integration_type;
                    limora = equals.bind(quebec)(whisks);
 1089:
                    if(!limora) { _fun00006_ip = 1143; continue _fun00005 }
 1092:
                    limora = global;
                    limora = limora.Map;
                    whisks = limora.prototype;
                    whisks = Object.create(whisks, {constructor: {value: limora}});
                    variable43 = whisks;
                    limora = new variable43[limora](variable42);
                    equals = limora instanceof Object ? limora : whisks;
                    sierra = equals;
                    whisks = equals.set;
                    limora = verify;
                    verify = limora.integration_type;
                    verify = whisks.bind(equals)(verify, limora);
 1143:
                    verify = option;
                    option = {};
                    limora = vacuum;
                    option['clientId'] = limora;
                    option['authorizations'] = sierra;
                    sierra = ctrled;
                    option['scopes'] = sierra;
                    option['parsedPermissions'] = status;
                    status = source;
                    option['responseType'] = status;
                    status = update;
                    option['redirectUri'] = status;
                    status = echoed;
                    option['codeChallenge'] = status;
                    status = result;
                    option['codeChallengeMethod'] = status;
                    status = output;
                    option['state'] = status;
                    option['guildId'] = target;
                    option['channelId'] = papara;
                    option['prompt'] = cntext;
                    option['disableGuildSelect'] = record;
                    option['disclosures'] = config;
                    config = backup;
                    option['integrationType'] = config;
                    option['pid'] = sequen;
                    option = verify.bind(oscard)(option);
                    return option;
 1257: // try_start_3
                    verify = _closure1_slot0;
                    option = _closure1_slot3;
                    option = option[romeon];
                    romeon = verify.bind(oscard)(option);
                    verify = romeon.authorize;
                    option = {};
                    sequen = true;
                    option['authorize'] = sequen;
                    option['clientId'] = vacuum;
                    option['scopes'] = ctrled;
                    option['responseType'] = source;
                    option['redirectUri'] = update;
                    option['codeChallenge'] = echoed;
                    option['codeChallengeMethod'] = result;
                    option['state'] = output;
                    option['nonce'] = sizing;
                    option['integrationType'] = backup;
                    option = verify.bind(romeon)(option);
                    SaveGenerator(address=1342);
 1340:
                    return option;
 1342:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=8);
                    if(verify) { _fun00006_ip = 1356; continue _fun00005 }
 1348:
                    verify = option.location;
 1353: // try_end3
                    return verify;
 1356:
                    return option;
 1359: // catch_target3
                    CatchBlockStart(arg_register=7);
                    verify = option.body;
                    kiloes = verify;
                    romeon = _closure1_slot1;
                    backup = _closure1_slot3;
                    option = 9;
                    option = backup[option];
                    backup = romeon.bind(oscard)(option);
                    romeon = {};
                    option = _closure1_slot14;
                    option = option.OAUTH2_ERROR;
                    romeon['errorCode'] = option;
                    sizing = yankee == verify;
                    verify = undefined;
                    if(sizing) { _fun00006_ip = 1420; continue _fun00005 }
 1415:
                    verify = kiloes.message;
 1420:
                    option = verify;
                    if(verify) { _fun00006_ip = 1432; continue _fun00005 }
 1426:
                    option = 'Unknown Error';
 1432:
                    kiloes = option;
                    option = global;
                    option = option.HermesInternal;
                    verify = option.concat;
                    option = 'OAuth2 Authorize Error: ';
                    variable41 = verify.bind(option)(kiloes);
                    verify = backup.prototype;
                    verify = Object.create(verify, {constructor: {value: backup}});
                    variable43 = verify;
                    variable42 = romeon;
                    option = new variable43[backup](variable42, variable41, variable40);
                    option = option instanceof Object ? option : verify;
                    throw option;
 1484:
                    return golfie;
 1487: // catch_target1
                    CatchBlockStart(arg_register=6);
                    option = golfie.body;
                    foxtra = option;
                    verify = _closure1_slot1;
                    romeon = _closure1_slot3;
                    golfie = 9;
                    golfie = romeon[golfie];
                    romeon = verify.bind(oscard)(golfie);
                    verify = {};
                    golfie = _closure1_slot14;
                    golfie = golfie.OAUTH2_ERROR;
                    verify['errorCode'] = golfie;
                    backup = yankee == option;
                    option = undefined;
                    if(backup) { _fun00006_ip = 1548; continue _fun00005 }
 1543:
                    option = foxtra.message;
 1548:
                    golfie = option;
                    if(option) { _fun00006_ip = 1560; continue _fun00005 }
 1554:
                    golfie = 'Unknown Error';
 1560:
                    foxtra = golfie;
                    golfie = global;
                    golfie = golfie.HermesInternal;
                    option = golfie.concat;
                    golfie = 'OAuth2 Authorization Error: ';
                    variable41 = option.bind(golfie)(foxtra);
                    option = romeon.prototype;
                    option = Object.create(option, {constructor: {value: romeon}});
                    variable43 = option;
                    variable42 = verify;
                    golfie = new variable43[romeon](variable42, variable41, variable40);
                    golfie = golfie instanceof Object ? golfie : option;
                    throw golfie;
 1612:
                    return report;
 1615: // catch_target0
                    CatchBlockStart(arg_register=4);
                    golfie = report.body;
                    offset = golfie;
                    option = _closure1_slot1;
                    verify = _closure1_slot3;
                    report = 9;
                    report = verify[report];
                    verify = option.bind(oscard)(report);
                    option = {};
                    report = _closure1_slot14;
                    report = report.OAUTH2_ERROR;
                    option['errorCode'] = report;
                    yankee = yankee == golfie;
                    golfie = undefined;
                    if(yankee) { _fun00006_ip = 1676; continue _fun00005 }
 1671:
                    golfie = offset.message;
 1676:
                    report = golfie;
                    if(golfie) { _fun00006_ip = 1688; continue _fun00005 }
 1682:
                    report = 'Unknown Error';
 1688:
                    offset = report;
                    report = global;
                    report = report.HermesInternal;
                    golfie = report.concat;
                    report = 'OAuth2 Authorization Error: ';
                    variable41 = golfie.bind(report)(offset);
                    golfie = verify.prototype;
                    golfie = Object.create(golfie, {constructor: {value: verify}});
                    variable43 = golfie;
                    variable42 = option;
                    report = new variable43[verify](variable42, variable41, variable40);
                    report = report instanceof Object ? report : golfie;
                    throw report;
 1740:
                    return tangon;
 1743:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.OAUTH2_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    variable41 = 'Client is not logged in';
                    variable43 = tangon;
                    variable42 = report;
                    zuuluu = new variable43[golfie](variable42, variable41, variable40);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 1811:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.OAUTH2_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    variable41 = 'Redirect URI cannot be used in the RPC OAuth2 Authorization flow';
                    variable43 = tangon;
                    variable42 = report;
                    zuuluu = new variable43[golfie](variable42, variable41, variable40);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 1882:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    golfie = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.OAUTH2_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = golfie.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: golfie}});
                    variable41 = 'No Client ID provided';
                    variable43 = tangon;
                    variable42 = report;
                    zuuluu = new variable43[golfie](variable42, variable41, variable40);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 1953:
                    report = _closure1_slot1;
                    golfie = _closure1_slot3;
                    tangon = 9;
                    tangon = golfie[tangon];
                    oscard = report.bind(oscard)(tangon);
                    report = {};
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.UNKNOWN_ERROR;
                    report['errorCode'] = zuuluu;
                    zuuluu = oscard.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: oscard}});
                    variable41 = 'Request aborted';
                    variable43 = tangon;
                    variable42 = report;
                    zuuluu = new variable43[oscard](variable42, variable41, variable40);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 2024:
                    return michal;
 2027:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot18 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo, argBar) { // Original name: authenticate
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            offset = argBar;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = offset;
            entity = zuuluu.authorization;
            tangon = entity.accessToken;
            if(tangon) { _fun00008_ip = 284; continue _fun00007 }
 37:
            tangon = zuuluu.authorization;
            tangon = tangon.authing;
            if(tangon) { _fun00008_ip = 214; continue _fun00007 }
 55:
            zuuluu = zuuluu.authorization;
            oscard = true;
            zuuluu['authing'] = oscard;
            report = _closure1_slot0;
            tangon = _closure1_slot3;
            zuuluu = 18;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            zuuluu = report.bind(zuuluu)(tangon);
            report = zuuluu.HTTP;
            tangon = report.get;
            zuuluu = {};
            golfie = _closure1_slot12;
            golfie = golfie.OAUTH2_CURRENT_AUTH;
            zuuluu['url'] = golfie;
            golfie = {};
            option = global;
            option = option.HermesInternal;
            verify = option.concat;
            option = 'Bearer ';
            option = verify.bind(option)(offset);
            golfie['Authorization'] = option;
            zuuluu['headers'] = golfie;
            zuuluu['oldFormErrors'] = oscard;
            oscard = false;
            zuuluu['rejectWithError'] = oscard;
            oscard = tangon.bind(report)(zuuluu);
            report = oscard.then;
            tangon = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    report = _closure2_slot0;
                    michal = report.authorization;
                    entity = false;
                    michal['authing'] = entity;
                    oscard = zuuluu.body;
                    entity = oscard.application;
                    michal = oscard.user;
                    verify = oscard.scopes;
                    option = oscard.expires;
                    report = report.application;
                    report = report.id;
                    entity = entity.id;
                    if(!(report === entity)) { _fun00010_ip = 405; continue _fun00009 }
 73:
                    oscard = _closure1_slot8;
                    report = oscard.getCurrentUser;
                    report = report.bind(oscard)();
                    oscard = null;
                    if(!(oscard != report)) { _fun00010_ip = 335; continue _fun00009 }
 98:
                    if(!michal) { _fun00010_ip = 335; continue _fun00009 }
 104:
                    report = report.id;
                    michal = michal.id;
                    if(!(report === michal)) { _fun00010_ip = 335; continue _fun00009 }
 121:
                    golfie = _closure2_slot0;
                    report = golfie.authorization;
                    michal = golfie.authorization;
                    romeon = michal.scopes;
                    michal = new Array(1);
                    yankee = 0;
                    foxtra = michal;
                    yankee = arraySpread(foxtra, romeon, yankee);
                    foxtra = michal;
                    romeon = verify;
                    verify = arraySpread(foxtra, romeon, yankee);
                    oscard = _closure1_slot10;
                    michal[verify] = oscard;
                    oscard = 1;
                    oscard = verify + oscard;
                    report['scopes'] = michal;
                    michal = golfie.authorization;
                    tangon = _closure2_slot1;
                    michal['accessToken'] = tangon;
                    report = golfie.authorization;
                    michal = global;
                    michal = michal.Date;
                    oscard = michal.prototype;
                    oscard = Object.create(oscard, {constructor: {value: michal}});
                    backup = oscard;
                    foxtra = option;
                    michal = new backup[michal](foxtra, romeon);
                    michal = michal instanceof Object ? michal : oscard;
                    report['expires'] = michal;
                    oscard = _closure1_slot1;
                    report = _closure1_slot3;
                    michal = 19;
                    report = report[michal];
                    michal = undefined;
                    oscard = oscard.bind(michal)(report);
                    report = oscard.dispatch;
                    michal = {};
                    option = 'RPC_APP_AUTHENTICATED';
                    michal['type'] = option;
                    option = golfie.id;
                    michal['socketId'] = option;
                    golfie = golfie.application;
                    michal['application'] = golfie;
                    michal = report.bind(oscard)(michal);
                    michal = {};
                    romeon = zuuluu.body;
                    foxtra = michal;
                    zuuluu = copyDataProperties(foxtra, romeon);
                    zuuluu = 'access_token';
                    michal[zuuluu] = tangon;
                    return michal;
 335:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = {};
                    entity = _closure1_slot14;
                    entity = entity.INVALID_TOKEN;
                    zuuluu['errorCode'] = entity;
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    romeon = 'Token does not match current user';
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[tangon](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
 405:
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = {};
                    entity = _closure1_slot14;
                    entity = entity.INVALID_CLIENTID;
                    zuuluu['errorCode'] = entity;
                    entity = tangon.prototype;
                    michal = Object.create(entity, {constructor: {value: tangon}});
                    romeon = "Application does not match the connection's";
                    backup = michal;
                    foxtra = zuuluu;
                    entity = new backup[tangon](foxtra, romeon, yankee);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                }
            };
            zuuluu = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_TOKEN;
                zuuluu['errorCode'] = entity;
                report = _closure2_slot1;
                entity = global;
                entity = entity.HermesInternal;
                michal = entity.concat;
                entity = 'Invalid access token: ';
                oscard = michal.bind(entity)(report);
                michal = tangon.prototype;
                michal = Object.create(michal, {constructor: {value: tangon}});
                option = michal;
                golfie = zuuluu;
                entity = new option[tangon](golfie, oscard, report);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            };
            tangon = report.bind(oscard)(tangon, zuuluu);
            zuuluu = tangon.catch;
            michal = function(argFoo) {
                entity = _closure2_slot0;
                michal = entity.authorization;
                entity = false;
                michal['authing'] = entity;
                entity = argFoo;
                throw entity;
            };
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 214:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = {};
            michal = _closure1_slot14;
            michal = michal.INVALID_COMMAND;
            tangon['errorCode'] = michal;
            michal = report.prototype;
            zuuluu = Object.create(michal, {constructor: {value: report}});
            yankee = 'Already authenticating';
            foxtra = zuuluu;
            romeon = tangon;
            michal = new foxtra[report](romeon, yankee, offset);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 284:
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot3;
            michal = 9;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = {};
            entity = _closure1_slot14;
            entity = entity.INVALID_COMMAND;
            zuuluu['errorCode'] = entity;
            entity = tangon.prototype;
            michal = Object.create(entity, {constructor: {value: tangon}});
            yankee = 'Already authenticated';
            foxtra = michal;
            romeon = zuuluu;
            entity = new foxtra[tangon](romeon, yankee, offset);
            entity = entity instanceof Object ? entity : michal;
            throw entity;
        }
    };
    var _closure1_slot19 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.TransportTypes;
    var _closure1_slot9 = golfie;
    tangon = tangon.RPC_AUTHENTICATED_SCOPE;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.ApplicationFlags;
    var _closure1_slot11 = golfie;
    golfie = tangon.Endpoints;
    var _closure1_slot12 = golfie;
    golfie = tangon.RPCCommands;
    var _closure1_slot13 = golfie;
    tangon = tangon.RPCErrors;
    var _closure1_slot14 = tangon;
    tangon = 5000;
    var _closure1_slot15 = tangon;
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/rpc/server/commands/AuthCommandsFactory.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: createAuthCommandHandlers
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = {};
        michal = _closure1_slot13;
        report = michal.AUTHENTICATE;
        golfie = _closure1_slot0;
        oscard = _closure1_slot3;
        zuuluu = 20;
        oscard = oscard[zuuluu];
        zuuluu = undefined;
        option = golfie.bind(zuuluu)(oscard);
        golfie = option.createRPCCommand;
        oscard = michal.AUTHENTICATE;
        zuuluu = {};
        verify = function(argFoo) { // Original name: handler
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                golfie = entity.socket;
                var _closure3_slot0 = golfie;
                michal = entity.signal;
                var _closure3_slot1 = michal;
                entity = entity.args;
                oscard = entity.access_token;
                tangon = undefined;
                var _closure3_slot2 = tangon;
                var _closure3_slot3 = tangon;
                var _closure3_slot4 = tangon;
                report = null;
                if(!(report == oscard)) { _fun00012_ip = 80; continue _fun00011 }
 57:
                option = golfie.transport;
                michal = _closure1_slot9;
                michal = michal.IPC;
                if(!(option !== michal)) { _fun00012_ip = 170; continue _fun00011 }
 80:
                if(!(report != oscard)) { _fun00012_ip = 99; continue _fun00011 }
 84:
                michal = _closure1_slot19;
                michal = michal.bind(tangon)(golfie, oscard);
                return michal;
 99:
                option = _closure1_slot1;
                verify = _closure1_slot3;
                oscard = 9;
                oscard = verify[oscard];
                verify = option.bind(tangon)(oscard);
                option = {};
                michal = _closure1_slot14;
                michal = michal.INVALID_TOKEN;
                option['errorCode'] = michal;
                michal = verify.prototype;
                oscard = Object.create(michal, {constructor: {value: verify}});
                sizing = 'No access token provided';
                result = oscard;
                output = option;
                michal = new result[verify](output, sizing, kiloes);
                michal = michal instanceof Object ? michal : oscard;
                throw michal;
 170:
                michal = golfie.application;
                option = michal.id;
                _closure3_slot2 = option;
                if(!(report != option)) { _fun00012_ip = 423; continue _fun00011 }
 191:
                verify = _closure1_slot0;
                oscard = _closure1_slot3;
                michal = 21;
                michal = oscard[michal];
                michal = verify.bind(tangon)(michal);
                michal = michal.OAuth2Scopes;
                backup = michal.IDENTIFY;
                _closure3_slot3 = backup;
                michal = function() { // Original name: _authorize
                    report = _closure1_slot16;
                    tangon = {};
                    michal = _closure3_slot2;
                    tangon['client_id'] = michal;
                    michal = _closure3_slot3;
                    tangon['scope'] = michal;
                    michal = 'token';
                    tangon['response_type'] = michal;
                    entity = _closure3_slot1;
                    tangon['signal'] = entity;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    entity = undefined;
                    zuuluu = report.bind(entity)(tangon, zuuluu, michal);
                    michal = zuuluu.then;
                    entity = function(argFoo) {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            tangon = argFoo;
                            michal = null;
                            if(!(michal != tangon)) { _fun00014_ip = 394; continue _fun00013 }
 12:
                            zuuluu = tangon.split;
                            entity = /#|\?/;
                            golfie = zuuluu.bind(tangon)(entity);
                            zuuluu = _closure1_slot1;
                            tangon = _closure1_slot3;
                            entity = 22;
                            entity = tangon[entity];
                            oscard = undefined;
                            tangon = zuuluu.bind(oscard)(entity);
                            zuuluu = tangon.parse;
                            option = golfie.length;
                            entity = 1;
                            entity = option - entity;
                            entity = golfie[entity];
                            entity = zuuluu.bind(tangon)(entity);
                            zuuluu = entity.error;
                            if(!(michal == zuuluu)) { _fun00014_ip = 273; continue _fun00013 }
 100:
                            golfie = _closure3_slot2;
                            foxtra = entity.access_token;
                            yankee = entity.scope;
                            romeon = entity.expires_in;
                            option = _closure1_slot0;
                            tangon = _closure1_slot3;
                            offset = 7;
                            tangon = tangon[offset];
                            tangon = option.bind(oscard)(tangon);
                            option = tangon.Storage;
                            tangon = option.get;
                            verify = 'CachedTokens';
                            option = tangon.bind(option)(verify);
                            if(!(michal == option)) { _fun00014_ip = 175; continue _fun00013 }
 173:
                            option = {};
 175:
                            tangon = {};
                            tangon['accessToken'] = foxtra;
                            tangon['scope'] = yankee;
                            yankee = global;
                            foxtra = yankee.Date;
                            yankee = foxtra.now;
                            yankee = yankee.bind(foxtra)();
                            yankee = yankee + romeon;
                            tangon['expires'] = yankee;
                            option[golfie] = tangon;
                            golfie = _closure1_slot0;
                            tangon = _closure1_slot3;
                            tangon = tangon[offset];
                            tangon = golfie.bind(oscard)(tangon);
                            golfie = tangon.Storage;
                            tangon = golfie.set;
                            tangon = tangon.bind(golfie)(verify, option);
                            golfie = _closure1_slot19;
                            tangon = _closure3_slot0;
                            zuuluu = entity.access_token;
                            zuuluu = golfie.bind(oscard)(tangon, zuuluu);
                            return zuuluu;
 273:
                            tangon = _closure1_slot1;
                            golfie = _closure1_slot3;
                            zuuluu = 9;
                            zuuluu = golfie[zuuluu];
                            tangon = tangon.bind(oscard)(zuuluu);
                            zuuluu = {};
                            report = _closure1_slot14;
                            report = report.OAUTH2_ERROR;
                            zuuluu['errorCode'] = report;
                            golfie = entity.error;
                            entity = entity.error_description;
                            michal = michal != entity;
                            oscard = 'unknown error';
                            if(!michal) { _fun00014_ip = 337; continue _fun00013 }
 334:
                            oscard = entity;
 337:
                            entity = global;
                            entity = entity.HermesInternal;
                            report = entity.concat;
                            michal = 'OAuth2 Error: ';
                            entity = ': ';
                            kiloes = report.bind(michal)(golfie, entity, oscard);
                            michal = tangon.prototype;
                            michal = Object.create(michal, {constructor: {value: tangon}});
                            output = michal;
                            sizing = zuuluu;
                            entity = new output[tangon](sizing, kiloes, backup);
                            entity = entity instanceof Object ? entity : michal;
                            throw entity;
 394:
                            tangon = _closure1_slot1;
                            zuuluu = _closure1_slot3;
                            michal = 9;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            tangon = tangon.bind(michal)(zuuluu);
                            zuuluu = {};
                            entity = _closure1_slot14;
                            entity = entity.UNKNOWN_ERROR;
                            zuuluu['errorCode'] = entity;
                            entity = tangon.prototype;
                            michal = Object.create(entity, {constructor: {value: tangon}});
                            kiloes = 'Unknown error occurred';
                            output = michal;
                            sizing = zuuluu;
                            entity = new output[tangon](sizing, kiloes, backup);
                            entity = entity instanceof Object ? entity : michal;
                            throw entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                _closure3_slot4 = michal;
                romeon = 7;
                oscard = oscard[romeon];
                oscard = verify.bind(tangon)(oscard);
                verify = oscard.Storage;
                oscard = verify.get;
                yankee = 'CachedTokens';
                offset = oscard.bind(verify)(yankee);
                verify = report != offset;
                oscard = undefined;
                if(!verify) { _fun00012_ip = 383; continue _fun00011 }
 281:
                verify = offset[option];
                verify = report != verify;
                oscard = undefined;
                if(!verify) { _fun00012_ip = 383; continue _fun00011 }
 294:
                verify = offset[option];
                foxtra = verify.scope;
                if(!(foxtra === backup)) { _fun00012_ip = 343; continue _fun00011 }
 308:
                backup = verify.expires;
                foxtra = global;
                kiloes = foxtra.Date;
                foxtra = kiloes.now;
                foxtra = foxtra.bind(kiloes)();
                if(!(!(backup <= foxtra))) { _fun00012_ip = 343; continue _fun00011 }
 335:
                oscard = verify.accessToken;
                _fun00012_ip = 383; continue _fun00011;
 343:
                option = delete offset[option];
                verify = _closure1_slot0;
                option = _closure1_slot3;
                option = option[romeon];
                option = verify.bind(tangon)(option);
                verify = option.Storage;
                option = verify.set;
                option = option.bind(verify)(yankee, offset);
                oscard = undefined;
 383:
                if(!(report == oscard)) { _fun00012_ip = 393; continue _fun00011 }
 387:
                michal = michal.bind(tangon)();
                _fun00012_ip = 421; continue _fun00011;
 393:
                report = _closure1_slot19;
                oscard = report.bind(tangon)(golfie, oscard);
                report = oscard.catch;
                zuuluu = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        tangon = _closure3_slot2;
                        oscard = _closure1_slot0;
                        michal = _closure1_slot3;
                        golfie = 7;
                        report = michal[golfie];
                        michal = undefined;
                        report = oscard.bind(michal)(report);
                        option = report.Storage;
                        report = option.get;
                        oscard = 'CachedTokens';
                        report = report.bind(option)(oscard);
                        option = null;
                        if(!(option == report)) { _fun00016_ip = 62; continue _fun00015 }
 60:
                        report = {};
 62:
                        tangon = delete report[tangon];
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        zuuluu = zuuluu[golfie];
                        zuuluu = tangon.bind(michal)(zuuluu);
                        tangon = zuuluu.Storage;
                        zuuluu = tangon.set;
                        zuuluu = zuuluu.bind(tangon)(oscard, report);
                        entity = _closure3_slot4;
                        entity = entity.bind(michal)();
                        return entity;
                    }
                };
                michal = report.bind(oscard)(zuuluu);
 421:
                return michal;
 423:
                zuuluu = _closure1_slot1;
                report = _closure1_slot3;
                michal = 9;
                michal = report[michal];
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zuuluu['errorCode'] = entity;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                sizing = 'No application.';
                result = michal;
                output = zuuluu;
                entity = new result[tangon](output, sizing, kiloes);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        zuuluu['handler'] = verify;
        zuuluu = golfie.bind(option)(oscard, zuuluu);
        entity[report] = zuuluu;
        zuuluu = michal.AUTHORIZE;
        michal = {};
        tangon = function(argFoo) { // Original name: handler
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = argFoo;
                zuuluu = michal.socket;
                var _closure3_slot0 = zuuluu;
                report = michal.signal;
                var _closure3_slot1 = report;
                michal = michal.args;
                var _closure3_slot2 = michal;
                golfie = michal.client_id;
                var _closure3_slot3 = golfie;
                if(golfie) { _fun00018_ip = 121; continue _fun00017 }
 48:
                verify = _closure1_slot1;
                option = _closure1_slot3;
                oscard = 9;
                option = option[oscard];
                oscard = undefined;
                verify = verify.bind(oscard)(option);
                option = {};
                tangon = _closure1_slot14;
                tangon = tangon.INVALID_CLIENTID;
                option['errorCode'] = tangon;
                tangon = verify.prototype;
                oscard = Object.create(tangon, {constructor: {value: verify}});
                offset = 'No client id provided';
                romeon = oscard;
                yankee = option;
                tangon = new romeon[verify](yankee, offset, verify);
                tangon = tangon instanceof Object ? tangon : oscard;
                throw tangon;
 121:
                tangon = zuuluu.authorization;
                oscard = tangon.accessToken;
                tangon = null;
                if(!(tangon == oscard)) { _fun00018_ip = 542; continue _fun00017 }
 142:
                tangon = zuuluu.authorization;
                tangon = tangon.authing;
                if(tangon) { _fun00018_ip = 469; continue _fun00017 }
 160:
                zuuluu = zuuluu.authorization;
                oscard = true;
                zuuluu['authing'] = oscard;
                zuuluu = michal.response_type;
                michal = 'token';
                if(!(michal !== zuuluu)) { _fun00018_ip = 396; continue _fun00017 }
 191:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot3;
                michal = 8;
                michal = tangon[michal];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.isOptimizedRPCAuthorizeEnabled;
                michal = michal.bind(zuuluu)();
                if(michal) { _fun00018_ip = 303; continue _fun00017 }
 229:
                zuuluu = _closure1_slot0;
                verify = _closure1_slot3;
                michal = 18;
                michal = verify[michal];
                michal = zuuluu.bind(tangon)(michal);
                tangon = michal.HTTP;
                zuuluu = tangon.get;
                michal = {};
                verify = _closure1_slot12;
                option = verify.APPLICATION_RPC;
                option = option.bind(verify)(golfie);
                michal['url'] = option;
                michal['oldFormErrors'] = oscard;
                michal['signal'] = report;
                report = false;
                michal['rejectWithError'] = report;
                report = zuuluu.bind(tangon)(michal);
                _fun00018_ip = 334; continue _fun00017;
 303:
                michal = global;
                tangon = michal.Promise;
                zuuluu = tangon.resolve;
                michal = {};
                oscard = {};
                oscard['id'] = golfie;
                michal['body'] = oscard;
                report = zuuluu.bind(tangon)(michal);
 334:
                tangon = report.then;
                zuuluu = function(argFoo) {
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        entity = argFoo;
                        michal = entity.body;
                        zuuluu = _closure3_slot0;
                        zuuluu = zuuluu.application;
                        zuuluu = zuuluu.id;
                        michal = michal.id;
                        if(!(zuuluu === michal)) { _fun00020_ip = 129; continue _fun00019 }
 34:
                        michal = _closure3_slot2;
                        zuuluu = michal.scopes;
                        if(zuuluu) { _fun00020_ip = 57; continue _fun00019 }
 47:
                        michal = _closure3_slot2;
                        zuuluu = michal.scope;
 57:
                        michal = _closure3_slot2;
                        tangon = delete michal.scopes;
                        report = _closure1_slot16;
                        tangon = {};
                        option = tangon;
                        golfie = michal;
                        michal = copyDataProperties(option, golfie);
                        michal = 'scope';
                        tangon[michal] = zuuluu;
                        michal = _closure3_slot1;
                        entity = 'signal';
                        tangon[entity] = michal;
                        zuuluu = _closure2_slot0;
                        michal = _closure2_slot1;
                        entity = undefined;
                        entity = report.bind(entity)(tangon, zuuluu, michal);
                        return entity;
 129:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        michal = 9;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = {};
                        entity = _closure1_slot14;
                        entity = entity.INVALID_CLIENTID;
                        zuuluu['errorCode'] = entity;
                        entity = tangon.prototype;
                        michal = Object.create(entity, {constructor: {value: tangon}});
                        golfie = "Application does not match the connection's";
                        verify = michal;
                        option = zuuluu;
                        entity = new verify[tangon](option, golfie, oscard);
                        entity = entity instanceof Object ? entity : michal;
                        throw entity;
                    }
                };
                michal = function() {
                    tangon = _closure1_slot1;
                    zuuluu = _closure1_slot3;
                    michal = 9;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = {};
                    entity = _closure1_slot14;
                    entity = entity.INVALID_CLIENTID;
                    zuuluu['errorCode'] = entity;
                    report = _closure3_slot3;
                    entity = global;
                    entity = entity.HermesInternal;
                    michal = entity.concat;
                    entity = 'Invalid client id: ';
                    oscard = michal.bind(entity)(report);
                    michal = tangon.prototype;
                    michal = Object.create(michal, {constructor: {value: tangon}});
                    option = michal;
                    golfie = zuuluu;
                    entity = new option[tangon](golfie, oscard, report);
                    entity = entity instanceof Object ? entity : michal;
                    throw entity;
                };
                tangon = tangon.bind(report)(zuuluu, michal);
                zuuluu = tangon.then;
                michal = function(argFoo) {
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        report = argFoo;
                        entity = _closure3_slot0;
                        michal = entity.authorization;
                        entity = false;
                        michal['authing'] = entity;
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00022_ip = 334; continue _fun00021 }
 33:
                        entity = global;
                        michal = entity.URL;
                        tangon = michal.prototype;
                        tangon = Object.create(tangon, {constructor: {value: michal}});
                        romeon = tangon;
                        yankee = report;
                        michal = new romeon[michal](yankee, offset);
                        michal = michal instanceof Object ? michal : tangon;
                        oscard = michal.searchParams;
                        report = oscard.get;
                        tangon = 'error';
                        golfie = report.bind(oscard)(tangon);
                        if(!(zuuluu != golfie)) { _fun00022_ip = 96; continue _fun00021 }
 88:
                        tangon = '';
                        if(!(tangon === golfie)) { _fun00022_ip = 201; continue _fun00021 }
 96:
                        oscard = michal.searchParams;
                        report = oscard.get;
                        tangon = 'code';
                        report = report.bind(oscard)(tangon);
                        if(!(zuuluu != report)) { _fun00022_ip = 128; continue _fun00021 }
 120:
                        tangon = {};
                        tangon['code'] = report;
                        return tangon;
 128:
                        option = _closure1_slot1;
                        oscard = _closure1_slot3;
                        report = 9;
                        oscard = oscard[report];
                        report = undefined;
                        option = option.bind(report)(oscard);
                        oscard = {};
                        tangon = _closure1_slot14;
                        tangon = tangon.OAUTH2_ERROR;
                        oscard['errorCode'] = tangon;
                        tangon = option.prototype;
                        report = Object.create(tangon, {constructor: {value: option}});
                        offset = 'OAuth2 Error: Unable to find auth code';
                        romeon = report;
                        yankee = oscard;
                        tangon = new romeon[option](yankee, offset, verify);
                        tangon = tangon instanceof Object ? tangon : report;
                        throw tangon;
 201:
                        report = michal.searchParams;
                        tangon = report.get;
                        michal = 'error_description';
                        michal = tangon.bind(report)(michal);
                        zuuluu = zuuluu != michal;
                        oscard = 'unknown error';
                        if(!zuuluu) { _fun00022_ip = 237; continue _fun00021 }
 234:
                        oscard = michal;
 237:
                        report = _closure1_slot1;
                        tangon = _closure1_slot3;
                        zuuluu = 9;
                        tangon = tangon[zuuluu];
                        zuuluu = undefined;
                        tangon = report.bind(zuuluu)(tangon);
                        zuuluu = {};
                        michal = _closure1_slot14;
                        michal = michal.OAUTH2_ERROR;
                        zuuluu['errorCode'] = michal;
                        entity = entity.HermesInternal;
                        report = entity.concat;
                        michal = 'OAuth2 Error: ';
                        entity = ': ';
                        offset = report.bind(michal)(golfie, entity, oscard);
                        michal = tangon.prototype;
                        michal = Object.create(michal, {constructor: {value: tangon}});
                        romeon = michal;
                        yankee = zuuluu;
                        entity = new romeon[tangon](yankee, offset, verify);
                        entity = entity instanceof Object ? entity : michal;
                        throw entity;
 334:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot3;
                        michal = 9;
                        zuuluu = zuuluu[michal];
                        michal = undefined;
                        tangon = tangon.bind(michal)(zuuluu);
                        zuuluu = {};
                        entity = _closure1_slot14;
                        entity = entity.UNKNOWN_ERROR;
                        zuuluu['errorCode'] = entity;
                        entity = tangon.prototype;
                        michal = Object.create(entity, {constructor: {value: tangon}});
                        offset = 'Unknown error occurred';
                        romeon = michal;
                        yankee = zuuluu;
                        entity = new romeon[tangon](yankee, offset, verify);
                        entity = entity instanceof Object ? entity : michal;
                        throw entity;
                    }
                };
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.catch;
                entity = function(argFoo) {
                    entity = _closure3_slot0;
                    michal = entity.authorization;
                    entity = false;
                    michal['authing'] = entity;
                    entity = argFoo;
                    throw entity;
                };
                entity = michal.bind(zuuluu)(entity);
                return entity;
 396:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zuuluu['errorCode'] = entity;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                offset = 'Authorization response_type "token" is not supported';
                romeon = michal;
                yankee = zuuluu;
                entity = new romeon[tangon](yankee, offset, verify);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
 469:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zuuluu['errorCode'] = entity;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                offset = 'Already authing';
                romeon = michal;
                yankee = zuuluu;
                entity = new romeon[tangon](yankee, offset, verify);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
 542:
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot3;
                michal = 9;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = {};
                entity = _closure1_slot14;
                entity = entity.INVALID_COMMAND;
                zuuluu['errorCode'] = entity;
                entity = tangon.prototype;
                michal = Object.create(entity, {constructor: {value: tangon}});
                offset = 'Already authenticated';
                romeon = michal;
                yankee = zuuluu;
                entity = new romeon[tangon](yankee, offset, verify);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        michal['handler'] = tangon;
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();
// app/modules/oauth2/actions.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function() { // Original name: getLocationContextServer
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = _closure1_slot5;
            entity = michal.getChannelId;
            tangon = entity.bind(michal)();
            michal = _closure1_slot4;
            entity = michal.getBasicChannel;
            report = entity.bind(michal)(tangon);
            entity = {};
            tangon = null;
            golfie = tangon == report;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 50; continue _fun00001 }
 45:
            oscard = report.guild_id;
 50:
            if(!(tangon == oscard)) { _fun00002_ip = 58; continue _fun00001 }
 54:
            oscard = _closure1_slot8;
 58:
            entity['guild_id'] = oscard;
            golfie = tangon == report;
            oscard = undefined;
            if(golfie) { _fun00002_ip = 76; continue _fun00001 }
 71:
            oscard = report.id;
 76:
            if(!(tangon == oscard)) { _fun00002_ip = 84; continue _fun00001 }
 80:
            oscard = _closure1_slot9;
 84:
            entity['channel_id'] = oscard;
            oscard = tangon == report;
            michal = undefined;
            if(oscard) { _fun00002_ip = 102; continue _fun00001 }
 97:
            michal = report.type;
 102:
            if(!(tangon == michal)) { _fun00002_ip = 116; continue _fun00001 }
 106:
            zuuluu = _closure1_slot6;
            michal = zuuluu.UNKNOWN;
 116:
            entity['channel_type'] = michal;
            return entity;
        }
    };
    var _closure1_slot10 = tangon;
    entity = function() { // Original name: _authorize
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 348; continue _fun00003 }
 13:
                    offset = michal.authorize;
                    source = michal.clientId;
                    result = michal.scopes;
                    update = michal.responseType;
                    echoed = michal.redirectUri;
                    output = michal.codeChallenge;
                    sizing = michal.codeChallengeMethod;
                    kiloes = michal.state;
                    yankee = michal.permissions;
                    romeon = michal.guildId;
                    foxtra = michal.channelId;
                    verify = michal.integrationType;
                    backup = michal.nonce;
                    option = undefined;
                    SaveGenerator(address=94);
 92:
                    return option;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00004_ip = 345; continue _fun00003 }
 103:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = report[zuuluu];
                    zuuluu = tangon.bind(option)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.post;
                    zuuluu = {};
                    oscard = _closure1_slot7;
                    oscard = oscard.OAUTH2_AUTHORIZE;
                    zuuluu['url'] = oscard;
                    oscard = {};
                    oscard['client_id'] = source;
                    oscard['response_type'] = update;
                    oscard['redirect_uri'] = echoed;
                    oscard['code_challenge'] = output;
                    oscard['code_challenge_method'] = sizing;
                    output = result.join;
                    sizing = ' ';
                    sizing = output.bind(result)(sizing);
                    oscard['scope'] = sizing;
                    oscard['state'] = kiloes;
                    oscard['nonce'] = backup;
                    zuuluu['query'] = oscard;
                    oscard = {};
                    oscard['guild_id'] = romeon;
                    backup = null;
                    sizing = backup != romeon;
                    kiloes = undefined;
                    if(!sizing) { _fun00004_ip = 242; continue _fun00003 }
 230:
                    sizing = backup != foxtra;
                    kiloes = undefined;
                    if(!sizing) { _fun00004_ip = 242; continue _fun00003 }
 239:
                    kiloes = foxtra;
 242:
                    oscard['webhook_channel_id'] = kiloes;
                    kiloes = backup == romeon;
                    romeon = undefined;
                    if(!kiloes) { _fun00004_ip = 268; continue _fun00003 }
 256:
                    backup = backup != foxtra;
                    romeon = undefined;
                    if(!backup) { _fun00004_ip = 268; continue _fun00003 }
 265:
                    romeon = foxtra;
 268:
                    oscard['channel_id'] = romeon;
                    oscard['permissions'] = yankee;
                    oscard['authorize'] = offset;
                    oscard['integration_type'] = verify;
                    golfie = _closure1_slot10;
                    golfie = golfie.bind(option)();
                    oscard['location_context'] = golfie;
                    zuuluu['body'] = oscard;
                    oscard = true;
                    zuuluu['oldFormErrors'] = oscard;
                    oscard = false;
                    zuuluu['rejectWithError'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=328);
 326:
                    return zuuluu;
 328:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 342; continue _fun00003 }
 334:
                    tangon = zuuluu.body;
                    return tangon;
 342:
                    return zuuluu;
 345:
                    return michal;
 348:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot11 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _fetchAuthorization
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    michal = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 251; continue _fun00005 }
 13:
                    sizing = michal.clientId;
                    foxtra = michal.scopes;
                    kiloes = michal.responseType;
                    backup = michal.redirectUri;
                    romeon = michal.codeChallenge;
                    yankee = michal.codeChallengeMethod;
                    offset = michal.state;
                    verify = michal.integrationType;
                    option = michal.nonce;
                    oscard = michal.signal;
                    report = undefined;
                    SaveGenerator(address=78);
 76:
                    return report;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 248; continue _fun00005 }
 87:
                    tangon = _closure1_slot0;
                    output = _closure1_slot2;
                    zuuluu = 4;
                    zuuluu = output[zuuluu];
                    zuuluu = tangon.bind(report)(zuuluu);
                    report = zuuluu.HTTP;
                    tangon = report.get;
                    zuuluu = {'url': null, 'query': null, 'signal': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
                    golfie = _closure1_slot7;
                    golfie = golfie.OAUTH2_AUTHORIZE;
                    zuuluu['url'] = golfie;
                    golfie = {};
                    golfie['client_id'] = sizing;
                    golfie['response_type'] = kiloes;
                    golfie['redirect_uri'] = backup;
                    golfie['code_challenge'] = romeon;
                    golfie['code_challenge_method'] = yankee;
                    romeon = foxtra.join;
                    yankee = ' ';
                    yankee = romeon.bind(foxtra)(yankee);
                    golfie['scope'] = yankee;
                    golfie['state'] = offset;
                    golfie['integration_type'] = verify;
                    golfie['nonce'] = option;
                    zuuluu['query'] = golfie;
                    zuuluu['signal'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    SaveGenerator(address=231);
 229:
                    return zuuluu;
 231:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tangon) { _fun00006_ip = 245; continue _fun00005 }
 237:
                    tangon = zuuluu.body;
                    return tangon;
 245:
                    return zuuluu;
 248:
                    return michal;
 251:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot12 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _startSamsungAuthorization
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz, argCor, argGra) {
            entity = function* (argFoo, argBar, argBaz, argCor, argGra) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 157; continue _fun00007 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {};
                    oscard = _closure1_slot7;
                    oscard = oscard.OAUTH2_AUTHORIZE_SAMSUNG;
                    michal['url'] = oscard;
                    oscard = {};
                    golfie = argFoo;
                    oscard['client_id'] = golfie;
                    golfie = argGra;
                    oscard['state'] = golfie;
                    golfie = argBaz;
                    oscard['response_type'] = golfie;
                    golfie = argCor;
                    oscard['redirect_uri'] = golfie;
                    golfie = 'consent';
                    oscard['prompt'] = golfie;
                    option = verify.join;
                    golfie = ' ';
                    golfie = option.bind(verify)(golfie);
                    oscard['scope'] = golfie;
                    michal['query'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=145);
 143:
                    return michal;
 145:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 154; continue _fun00007 }
 151:
                    return zuuluu;
 154:
                    return michal;
 157:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot13 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _fetchChannels
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 111; continue _fun00009 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.get;
                    michal = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS;
                    michal['url'] = report;
                    report = {};
                    oscard = argFoo;
                    report['guild_id'] = oscard;
                    michal['query'] = report;
                    report = true;
                    michal['oldFormErrors'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=94);
 92:
                    return michal;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00010_ip = 108; continue _fun00009 }
 100:
                    zuuluu = michal.body;
                    return zuuluu;
 108:
                    return michal;
 111:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot14 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _verifyUserCode
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 100; continue _fun00011 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_DEVICE_VERIFY;
                    michal['url'] = report;
                    report = {};
                    oscard = argFoo;
                    report['user_code'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=88);
 86:
                    return michal;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00012_ip = 97; continue _fun00011 }
 94:
                    return michal;
 97:
                    return michal;
 100:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot15 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _finishUserCode
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00014_ip = 108; continue _fun00013 }
 7:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_DEVICE_FINISH;
                    michal['url'] = report;
                    report = {};
                    oscard = argFoo;
                    report['user_code'] = oscard;
                    oscard = argBar;
                    report['result'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=96);
 94:
                    return michal;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00014_ip = 105; continue _fun00013 }
 102:
                    return michal;
 105:
                    return michal;
 108:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot16 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _finishUserCodeTwoWayLinkError
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00016_ip = 132; continue _fun00015 }
 10:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 4;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    tangon = michal.HTTP;
                    zuuluu = tangon.post;
                    michal = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_DEVICE_FINISH;
                    michal['url'] = report;
                    report = {};
                    oscard = argFoo;
                    report['user_code'] = oscard;
                    oscard = 'two_way_link_error';
                    report['result'] = oscard;
                    oscard = argBar;
                    report['error_code'] = oscard;
                    oscard = argBaz;
                    report['error_source'] = oscard;
                    michal['body'] = report;
                    report = false;
                    michal['rejectWithError'] = report;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=120);
 118:
                    return michal;
 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00016_ip = 129; continue _fun00015 }
 126:
                    return michal;
 129:
                    return michal;
 132:
                    return entity;
                }
            };
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
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.ChannelTypes;
    var _closure1_slot6 = option;
    report = report.Endpoints;
    var _closure1_slot7 = report;
    report = '10000';
    var _closure1_slot8 = report;
    var _closure1_slot9 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/oauth2/actions.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['getLocationContextServer'] = tangon;
    tangon = function(argFoo) { // Original name: acceptWhitelist
        zuuluu = _closure1_slot0;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        zuuluu = entity.HTTP;
        michal = zuuluu.post;
        entity = {};
        tangon = _closure1_slot7;
        tangon = tangon.OAUTH2_WHITELIST_ACCEPT;
        entity['url'] = tangon;
        tangon = {};
        report = argFoo;
        tangon['token'] = report;
        entity['query'] = tangon;
        tangon = true;
        entity['oldFormErrors'] = tangon;
        tangon = false;
        entity['rejectWithError'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['acceptWhitelist'] = tangon;
    tangon = function() { // Original name: authorize
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['authorize'] = tangon;
    tangon = function() { // Original name: fetchAuthorization
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchAuthorization'] = tangon;
    tangon = function() { // Original name: startSamsungAuthorization
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['startSamsungAuthorization'] = tangon;
    tangon = function() { // Original name: fetchChannels
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchChannels'] = tangon;
    tangon = function(argFoo) { // Original name: logoutWithRedirect
        michal = argFoo;
        tangon = _closure1_slot1;
        golfie = _closure1_slot2;
        entity = 5;
        zuuluu = golfie[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.logout;
        oscard = _closure1_slot0;
        report = 6;
        report = golfie[report];
        golfie = oscard.bind(entity)(report);
        oscard = golfie.getLoginPath;
        report = michal.pathname;
        michal = michal.search;
        report = report + michal;
        michal = false;
        michal = oscard.bind(golfie)(report, michal);
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['logoutWithRedirect'] = tangon;
    tangon = function() { // Original name: verifyUserCode
        entity = undefined;
        tangon = _closure1_slot15;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['verifyUserCode'] = tangon;
    tangon = function() { // Original name: finishUserCode
        entity = undefined;
        tangon = _closure1_slot16;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['finishUserCode'] = tangon;
    michal = function() { // Original name: finishUserCodeTwoWayLinkError
        entity = undefined;
        tangon = _closure1_slot17;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['finishUserCodeTwoWayLinkError'] = michal;
    return entity;
})();
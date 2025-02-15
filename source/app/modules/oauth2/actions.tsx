// app/modules/oauth2/actions.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    tango = function() { // Original name: getLocationContextServer
        _fun73761: for(var _fun73761_ip = 0; ; ) switch(_fun73761_ip) {
 0:
            mike = _closure1_slot5;
            entity = mike.getChannelId;
            tango = entity.bind(mike)();
            mike = _closure1_slot4;
            entity = mike.getBasicChannel;
            report = entity.bind(mike)(tango);
            entity = {};
            tango = null;
            golf = tango == report;
            oscar = undefined;
            if(golf) { _fun73761_ip = 50; continue _fun73761 }
 45:
            oscar = report.guild_id;
 50:
            if(!(tango == oscar)) { _fun73761_ip = 58; continue _fun73761 }
 54:
            oscar = _closure1_slot8;
 58:
            entity['guild_id'] = oscar;
            golf = tango == report;
            oscar = undefined;
            if(golf) { _fun73761_ip = 76; continue _fun73761 }
 71:
            oscar = report.id;
 76:
            if(!(tango == oscar)) { _fun73761_ip = 84; continue _fun73761 }
 80:
            oscar = _closure1_slot9;
 84:
            entity['channel_id'] = oscar;
            oscar = tango == report;
            mike = undefined;
            if(oscar) { _fun73761_ip = 102; continue _fun73761 }
 97:
            mike = report.type;
 102:
            if(!(tango == mike)) { _fun73761_ip = 116; continue _fun73761 }
 106:
            zulu = _closure1_slot6;
            mike = zulu.UNKNOWN;
 116:
            entity['channel_type'] = mike;
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = function() { // Original name: _authorize
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun73764: for(var _fun73764_ip = 0; ; ) switch(_fun73764_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun73764_ip = 347; continue _fun73764 }
 13:
                    offset = mike.authorize;
                    source = mike.clientId;
                    result = mike.scopes;
                    update = mike.responseType;
                    echo = mike.redirectUri;
                    output = mike.codeChallenge;
                    sizing = mike.codeChallengeMethod;
                    kilo = mike.state;
                    yankee = mike.permissions;
                    romeo = mike.guildId;
                    foxtrot = mike.channelId;
                    verify = mike.integrationType;
                    backup = mike.nonce;
                    options = undefined;
                    SaveGenerator(address=94);
 92:
                    return options;
 94:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73764_ip = 344; continue _fun73764 }
 103:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 4;
                    zulu = report[zulu];
                    zulu = tango.bind(options)(zulu);
                    report = zulu.HTTP;
                    tango = report.post;
                    zulu = {};
                    oscar = _closure1_slot7;
                    oscar = oscar.OAUTH2_AUTHORIZE;
                    zulu['url'] = oscar;
                    oscar = {};
                    oscar['client_id'] = source;
                    oscar['response_type'] = update;
                    oscar['redirect_uri'] = echo;
                    oscar['code_challenge'] = output;
                    oscar['code_challenge_method'] = sizing;
                    output = result.join;
                    sizing = ' ';
                    sizing = output.bind(result)(sizing);
                    oscar['scope'] = sizing;
                    oscar['state'] = kilo;
                    oscar['nonce'] = backup;
                    zulu['query'] = oscar;
                    oscar = {};
                    oscar['guild_id'] = romeo;
                    backup = null;
                    sizing = backup != romeo;
                    kilo = undefined;
                    if(!sizing) { _fun73764_ip = 241; continue _fun73764 }
 229:
                    sizing = backup != foxtrot;
                    kilo = undefined;
                    if(!sizing) { _fun73764_ip = 241; continue _fun73764 }
 238:
                    kilo = foxtrot;
 241:
                    oscar['webhook_channel_id'] = kilo;
                    kilo = backup == romeo;
                    romeo = undefined;
                    if(!kilo) { _fun73764_ip = 267; continue _fun73764 }
 255:
                    backup = backup != foxtrot;
                    romeo = undefined;
                    if(!backup) { _fun73764_ip = 267; continue _fun73764 }
 264:
                    romeo = foxtrot;
 267:
                    oscar['channel_id'] = romeo;
                    oscar['permissions'] = yankee;
                    oscar['authorize'] = offset;
                    oscar['integration_type'] = verify;
                    golf = _closure1_slot10;
                    golf = golf.bind(options)();
                    oscar['location_context'] = golf;
                    zulu['body'] = oscar;
                    oscar = true;
                    zulu['oldFormErrors'] = oscar;
                    oscar = false;
                    zulu['rejectWithError'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=327);
 325:
                    return zulu;
 327:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun73764_ip = 341; continue _fun73764 }
 333:
                    tango = zulu.body;
                    return tango;
 341:
                    return zulu;
 344:
                    return mike;
 347:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot11 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _fetchAuthorization
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun73767: for(var _fun73767_ip = 0; ; ) switch(_fun73767_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun73767_ip = 247; continue _fun73767 }
 13:
                    sizing = mike.clientId;
                    foxtrot = mike.scopes;
                    kilo = mike.responseType;
                    backup = mike.redirectUri;
                    romeo = mike.codeChallenge;
                    yankee = mike.codeChallengeMethod;
                    offset = mike.state;
                    verify = mike.integrationType;
                    options = mike.nonce;
                    oscar = mike.signal;
                    report = undefined;
                    SaveGenerator(address=78);
 76:
                    return report;
 78:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73767_ip = 244; continue _fun73767 }
 87:
                    tango = _closure1_slot0;
                    output = _closure1_slot2;
                    zulu = 4;
                    zulu = output[zulu];
                    zulu = tango.bind(report)(zulu);
                    report = zulu.HTTP;
                    tango = report.get;
                    zulu = {'url': null, 'query': null, 'signal': null, 'retries': 3, 'oldFormErrors': true, 'rejectWithError': false};
                    golf = _closure1_slot7;
                    golf = golf.OAUTH2_AUTHORIZE;
                    zulu['url'] = golf;
                    golf = {};
                    golf['client_id'] = sizing;
                    golf['response_type'] = kilo;
                    golf['redirect_uri'] = backup;
                    golf['code_challenge'] = romeo;
                    golf['code_challenge_method'] = yankee;
                    romeo = foxtrot.join;
                    yankee = ' ';
                    yankee = romeo.bind(foxtrot)(yankee);
                    golf['scope'] = yankee;
                    golf['state'] = offset;
                    golf['integration_type'] = verify;
                    golf['nonce'] = options;
                    zulu['query'] = golf;
                    zulu['signal'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    SaveGenerator(address=227);
 225:
                    return zulu;
 227:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(tango) { _fun73767_ip = 241; continue _fun73767 }
 233:
                    tango = zulu.body;
                    return tango;
 241:
                    return zulu;
 244:
                    return mike;
 247:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot12 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot12 = entity;
    entity = function() { // Original name: _startSamsungAuthorization
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz, argCorge, argGrault) {
            entity = function* (argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: ?anon_0_
                _fun73770: for(var _fun73770_ip = 0; ; ) switch(_fun73770_ip) {
 0:
                    StartGenerator();
                    verify = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73770_ip = 156; continue _fun73770 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.get;
                    mike = {};
                    oscar = _closure1_slot7;
                    oscar = oscar.OAUTH2_AUTHORIZE_SAMSUNG;
                    mike['url'] = oscar;
                    oscar = {};
                    golf = argFoo;
                    oscar['client_id'] = golf;
                    golf = argGrault;
                    oscar['state'] = golf;
                    golf = argBaz;
                    oscar['response_type'] = golf;
                    golf = argCorge;
                    oscar['redirect_uri'] = golf;
                    golf = 'consent';
                    oscar['prompt'] = golf;
                    options = verify.join;
                    golf = ' ';
                    golf = options.bind(verify)(golf);
                    oscar['scope'] = golf;
                    mike['query'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=144);
 142:
                    return mike;
 144:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun73770_ip = 153; continue _fun73770 }
 150:
                    return zulu;
 153:
                    return mike;
 156:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot13 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _fetchChannels
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun73773: for(var _fun73773_ip = 0; ; ) switch(_fun73773_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73773_ip = 110; continue _fun73773 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.get;
                    mike = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_AUTHORIZE_WEBHOOK_CHANNELS;
                    mike['url'] = report;
                    report = {};
                    oscar = argFoo;
                    report['guild_id'] = oscar;
                    mike['query'] = report;
                    report = true;
                    mike['oldFormErrors'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=93);
 91:
                    return mike;
 93:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73773_ip = 107; continue _fun73773 }
 99:
                    zulu = mike.body;
                    return zulu;
 107:
                    return mike;
 110:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot14 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _verifyUserCode
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun73776: for(var _fun73776_ip = 0; ; ) switch(_fun73776_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73776_ip = 100; continue _fun73776 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_DEVICE_VERIFY;
                    mike['url'] = report;
                    report = {};
                    oscar = argFoo;
                    report['user_code'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=88);
 86:
                    return mike;
 88:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73776_ip = 97; continue _fun73776 }
 94:
                    return mike;
 97:
                    return mike;
 100:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot15 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot15 = entity;
    entity = function() { // Original name: _finishUserCode
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun73779: for(var _fun73779_ip = 0; ; ) switch(_fun73779_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73779_ip = 108; continue _fun73779 }
 7:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_DEVICE_FINISH;
                    mike['url'] = report;
                    report = {};
                    oscar = argFoo;
                    report['user_code'] = oscar;
                    oscar = argBar;
                    report['result'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=96);
 94:
                    return mike;
 96:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73779_ip = 105; continue _fun73779 }
 102:
                    return mike;
 105:
                    return mike;
 108:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot16 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _finishUserCodeTwoWayLinkError
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun73782: for(var _fun73782_ip = 0; ; ) switch(_fun73782_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun73782_ip = 132; continue _fun73782 }
 10:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 4;
                    zulu = zulu[mike];
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    tango = mike.HTTP;
                    zulu = tango.post;
                    mike = {};
                    report = _closure1_slot7;
                    report = report.OAUTH2_DEVICE_FINISH;
                    mike['url'] = report;
                    report = {};
                    oscar = argFoo;
                    report['user_code'] = oscar;
                    oscar = 'two_way_link_error';
                    report['result'] = oscar;
                    oscar = argBar;
                    report['error_code'] = oscar;
                    oscar = argBaz;
                    report['error_source'] = oscar;
                    mike['body'] = report;
                    report = false;
                    mike['rejectWithError'] = report;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=120);
 118:
                    return mike;
 120:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun73782_ip = 129; continue _fun73782 }
 126:
                    return mike;
 129:
                    return mike;
 132:
                    return entity;
                }
            };
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
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ChannelTypes;
    var _closure1_slot6 = options;
    report = report.Endpoints;
    var _closure1_slot7 = report;
    report = '10000';
    var _closure1_slot8 = report;
    var _closure1_slot9 = report;
    report = 7;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/oauth2/actions.tsx';
    report = oscar.bind(golf)(report);
    zulu['getLocationContextServer'] = tango;
    tango = function(argFoo) { // Original name: acceptWhitelist
        zulu = _closure1_slot0;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        zulu = entity.HTTP;
        mike = zulu.post;
        entity = {};
        tango = _closure1_slot7;
        tango = tango.OAUTH2_WHITELIST_ACCEPT;
        entity['url'] = tango;
        tango = {};
        report = argFoo;
        tango['token'] = report;
        entity['query'] = tango;
        tango = true;
        entity['oldFormErrors'] = tango;
        tango = false;
        entity['rejectWithError'] = tango;
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['acceptWhitelist'] = tango;
    tango = function() { // Original name: authorize
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['authorize'] = tango;
    tango = function() { // Original name: fetchAuthorization
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchAuthorization'] = tango;
    tango = function() { // Original name: startSamsungAuthorization
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['startSamsungAuthorization'] = tango;
    tango = function() { // Original name: fetchChannels
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchChannels'] = tango;
    tango = function(argFoo) { // Original name: logoutWithRedirect
        mike = argFoo;
        tango = _closure1_slot1;
        golf = _closure1_slot2;
        entity = 5;
        zulu = golf[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.logout;
        oscar = _closure1_slot0;
        report = 6;
        report = golf[report];
        golf = oscar.bind(entity)(report);
        oscar = golf.getLoginPath;
        report = mike.pathname;
        mike = mike.search;
        report = report + mike;
        mike = false;
        mike = oscar.bind(golf)(report, mike);
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['logoutWithRedirect'] = tango;
    tango = function() { // Original name: verifyUserCode
        entity = undefined;
        tango = _closure1_slot15;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['verifyUserCode'] = tango;
    tango = function() { // Original name: finishUserCode
        entity = undefined;
        tango = _closure1_slot16;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['finishUserCode'] = tango;
    mike = function() { // Original name: finishUserCodeTwoWayLinkError
        entity = undefined;
        tango = _closure1_slot17;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['finishUserCodeTwoWayLinkError'] = mike;
    return entity;
})();
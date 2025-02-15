// app/modules/core/native/handleURL.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _handleURL
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 1188; continue _fun00001 }
 13:
                    tango = mike.url;
                    foxtrot = mike.source;
                    oscar = _closure1_slot9;
                    report = oscar.log;
                    mike = global;
                    zulu = mike.HermesInternal;
                    golf = zulu.concat;
                    zulu = 'Opening url: ';
                    zulu = golf.bind(zulu)(tango);
                    zulu = report.bind(oscar)(zulu);
                    report = _closure1_slot4;
                    zulu = report.getState;
                    report = zulu.bind(report)();
                    zulu = _closure1_slot5;
                    zulu = zulu.ACTIVE;
                    if(!(report !== zulu)) { _fun00002_ip = 145; continue _fun00001 }
 93:
                    oscar = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 4;
                    report = report[zulu];
                    zulu = undefined;
                    oscar = oscar.bind(zulu)(report);
                    report = oscar.trackAppOpened;
                    zulu = null;
                    golf = zulu == tango;
                    zulu = 'deeplink';
                    if(!golf) { _fun00002_ip = 140; continue _fun00001 }
 134:
                    zulu = 'launcher';
 140:
                    zulu = report.bind(oscar)(zulu);
 145:
                    romeo = null;
                    if(!(romeo != tango)) { _fun00002_ip = 1173; continue _fun00001 }
 154:
                    report = tango.startsWith;
                    zulu = 'discordwidget:///';
                    zulu = report.bind(tango)(zulu);
                    if(zulu) { _fun00002_ip = 738; continue _fun00001 }
 177:
                    zulu = mike.URL;
                    report = zulu.prototype;
                    report = Object.create(report, {constructor: {value: zulu}});
                    config = report;
                    sequence = tango;
                    zulu = new config[zulu](sequence, vacuum);
                    zulu = zulu instanceof Object ? zulu : report;
                    oscar = zulu.hostname;
                    zulu = _closure1_slot8;
                    report = tango;
                    if(!(oscar === zulu)) { _fun00002_ip = 301; continue _fun00001 }
 223:
                    zulu = mike.fetch;
                    verify = undefined;
                    mike = {'method': 'HEAD', 'redirect': 'follow'};
                    mike = zulu.bind(verify)(tango, mike);
                    SaveGenerator(address=255);
 253:
                    return mike;
 255:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun00002_ip = 735; continue _fun00001 }
 264:
                    report = mike.url;
                    golf = _closure1_slot0;
                    offset = _closure1_slot2;
                    zulu = 6;
                    zulu = offset[zulu];
                    zulu = golf.bind(verify)(zulu);
                    zulu = zulu.DeeplinkSource;
                    foxtrot = zulu.Iterable;
 301:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 7;
                    zulu = oscar[zulu];
                    oscar = undefined;
                    golf = golf.bind(oscar)(zulu);
                    zulu = true;
                    yankee = golf.bind(oscar)(report, zulu);
                    sizing = yankee.fingerprint;
                    backup = yankee.attemptId;
                    golf = yankee.payload;
                    offset = _closure1_slot9;
                    verify = offset.log;
                    zulu = 'Parsed url as: ';
                    zulu = verify.bind(offset)(zulu, yankee);
                    source = golf.inviteCode;
                    kilo = golf.guildTemplateCode;
                    output = golf.authToken;
                    zulu = romeo == sizing;
                    if(!zulu) { _fun00002_ip = 400; continue _fun00001 }
 396:
                    zulu = romeo == backup;
 400:
                    if(!zulu) { _fun00002_ip = 407; continue _fun00001 }
 403:
                    zulu = romeo == source;
 407:
                    if(!zulu) { _fun00002_ip = 414; continue _fun00001 }
 410:
                    zulu = romeo == kilo;
 414:
                    if(!zulu) { _fun00002_ip = 421; continue _fun00001 }
 417:
                    zulu = romeo == output;
 421:
                    if(!zulu) { _fun00002_ip = 428; continue _fun00001 }
 424:
                    zulu = romeo == foxtrot;
 428:
                    if(zulu) { _fun00002_ip = 671; continue _fun00001 }
 434:
                    verify = _closure1_slot1;
                    offset = _closure1_slot2;
                    zulu = 8;
                    zulu = offset[zulu];
                    yankee = verify.bind(oscar)(zulu);
                    offset = yankee.track;
                    zulu = _closure1_slot6;
                    verify = zulu.EXTERNAL_DYNAMIC_LINK_RECEIVED;
                    zulu = {};
                    echo = romeo != source;
                    result = null;
                    if(!echo) { _fun00002_ip = 511; continue _fun00001 }
 480:
                    update = _closure1_slot0;
                    control = _closure1_slot2;
                    echo = 9;
                    echo = control[echo];
                    update = update.bind(oscar)(echo);
                    echo = update.parseInviteCodeFromInviteKey;
                    result = echo.bind(update)(source);
 511:
                    zulu['invite_code'] = result;
                    zulu['guild_template_code'] = kilo;
                    kilo = romeo != output;
                    if(!kilo) { _fun00002_ip = 539; continue _fun00001 }
 528:
                    result = output.length;
                    output = 0;
                    kilo = output === result;
 539:
                    zulu['has_auth_token'] = kilo;
                    output = _closure1_slot4;
                    kilo = output.getState;
                    output = kilo.bind(output)();
                    kilo = _closure1_slot5;
                    kilo = kilo.BACKGROUND;
                    kilo = output === kilo;
                    zulu['is_backgrounded'] = kilo;
                    zulu['attempt_id'] = backup;
                    zulu['deeplink_source'] = foxtrot;
                    foxtrot = golf.type;
                    zulu['link_type'] = foxtrot;
                    foxtrot = romeo != sizing;
                    romeo = null;
                    if(!foxtrot) { _fun00002_ip = 655; continue _fun00001 }
 614:
                    foxtrot = {};
                    kilo = _closure1_slot0;
                    output = _closure1_slot2;
                    backup = 10;
                    backup = output[backup];
                    kilo = kilo.bind(oscar)(backup);
                    backup = kilo.extractId;
                    backup = backup.bind(kilo)(sizing);
                    foxtrot['fingerprint'] = backup;
                    romeo = foxtrot;
 655:
                    sequence = zulu;
                    vacuum = romeo;
                    romeo = copyDataProperties(sequence, vacuum);
                    zulu = offset.bind(yankee)(verify, zulu);
 671:
                    offset = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = 11;
                    zulu = verify[zulu];
                    zulu = offset.bind(oscar)(zulu);
                    zulu = zulu.bind(oscar)(report);
                    report = _closure1_slot0;
                    zulu = 5;
                    zulu = verify[zulu];
                    oscar = report.bind(oscar)(zulu);
                    report = oscar.handleSupportedURL;
                    zulu = {};
                    zulu['payload'] = golf;
                    zulu = report.bind(oscar)(zulu);
                    _fun00002_ip = 1173; continue _fun00001;
 735:
                    return mike;
 738:
                    zulu = tango.split;
                    mike = 'voice/';
                    mike = zulu.bind(tango)(mike);
                    tango = mike.length;
                    zulu = 2;
                    if(!(zulu === tango)) { _fun00002_ip = 1183; continue _fun00001 }
 769:
                    tango = 1;
                    oscar = mike[tango];
                    report = oscar.split;
                    mike = '/';
                    mike = report.bind(oscar)(mike);
                    oscar = mike.length;
                    report = 0;
                    if(!(report !== oscar)) { _fun00002_ip = 1178; continue _fun00001 }
 804:
                    golf = mike[report];
                    oscar = 'user';
                    if(!(oscar !== golf)) { _fun00002_ip = 1173; continue _fun00001 }
 819:
                    golf = mike[report];
                    oscar = 'invite';
                    if(!(oscar !== golf)) { _fun00002_ip = 1101; continue _fun00001 }
 834:
                    golf = mike[report];
                    oscar = 'wave';
                    if(!(oscar !== golf)) { _fun00002_ip = 1027; continue _fun00001 }
 849:
                    golf = mike[report];
                    oscar = 'join';
                    if(!(oscar !== golf)) { _fun00002_ip = 950; continue _fun00001 }
 861:
                    oscar = mike.length;
                    if(!(zulu === oscar)) { _fun00002_ip = 1173; continue _fun00001 }
 873:
                    yankee = mike[report];
                    offset = mike[tango];
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 5;
                    oscar = oscar[report];
                    report = undefined;
                    golf = golf.bind(report)(oscar);
                    oscar = golf.handleSupportedURL;
                    report = {};
                    verify = {};
                    romeo = _closure1_slot7;
                    romeo = romeo.CHANNEL;
                    verify['type'] = romeo;
                    verify['guildId'] = yankee;
                    verify['channelId'] = offset;
                    report['payload'] = verify;
                    report = oscar.bind(golf)(report);
                    report = undefined;
                    return report;
 950:
                    yankee = mike[tango];
                    offset = mike[zulu];
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 5;
                    oscar = oscar[report];
                    report = undefined;
                    golf = golf.bind(report)(oscar);
                    oscar = golf.handleSupportedURL;
                    report = {};
                    verify = {};
                    romeo = _closure1_slot7;
                    romeo = romeo.CHANNEL;
                    verify['type'] = romeo;
                    verify['guildId'] = yankee;
                    verify['channelId'] = offset;
                    report['payload'] = verify;
                    report = oscar.bind(golf)(report);
                    _fun00002_ip = 1173; continue _fun00001;
 1027:
                    yankee = mike[tango];
                    offset = mike[zulu];
                    golf = _closure1_slot0;
                    oscar = _closure1_slot2;
                    report = 5;
                    oscar = oscar[report];
                    report = undefined;
                    golf = golf.bind(report)(oscar);
                    oscar = golf.handleSupportedURL;
                    report = {};
                    verify = {};
                    romeo = _closure1_slot7;
                    romeo = romeo.SEND_VOICE_HANGOUT_WAVE;
                    verify['type'] = romeo;
                    verify['guildId'] = yankee;
                    verify['channelId'] = offset;
                    report['payload'] = verify;
                    report = oscar.bind(golf)(report);
                    _fun00002_ip = 1173; continue _fun00001;
 1101:
                    golf = mike[tango];
                    oscar = mike[zulu];
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 5;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.handleSupportedURL;
                    mike = {};
                    report = {};
                    options = _closure1_slot7;
                    options = options.CREATE_VOICE_INVITE;
                    report['type'] = options;
                    report['guildId'] = golf;
                    report['channelId'] = oscar;
                    mike['payload'] = report;
                    mike = zulu.bind(tango)(mike);
 1173:
                    mike = undefined;
                    return mike;
 1178:
                    mike = undefined;
                    return mike;
 1183:
                    mike = undefined;
                    return mike;
 1188:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot10 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.AppStates;
    var _closure1_slot5 = options;
    options = tango.AnalyticEvents;
    var _closure1_slot6 = options;
    tango = tango.LinkingTypes;
    var _closure1_slot7 = tango;
    tango = 'l.discord.com';
    var _closure1_slot8 = tango;
    tango = 3;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = options.prototype;
    golf = Object.create(tango, {constructor: {value: options}});
    romeo = 'index.native.tsx';
    foxtrot = golf;
    tango = new foxtrot[options](romeo, yankee);
    tango = tango instanceof Object ? tango : golf;
    var _closure1_slot9 = tango;
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/core/native/handleURL.tsx';
    tango = report.bind(oscar)(tango);
    mike = function() { // Original name: handleURL
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
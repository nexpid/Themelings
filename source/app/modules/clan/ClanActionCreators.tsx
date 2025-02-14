// app/modules/clan/ClanActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _convertGuildToClan
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun77654: for(var _fun77654_ip = 0; ; ) switch(_fun77654_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun77654_ip = 599; continue _fun77654 }
 13:
                    oscar = verify;
                    offset = argBar;
                    options = undefined;
                    echo = undefined;
                    output = undefined;
                    foxtrot = undefined;
                    kilo = undefined;
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    zulu = 5;
                    mike = mike[zulu];
                    golf = report.bind(options)(mike);
                    report = golf.dispatch;
                    mike = {};
                    yankee = 'CLAN_SETUP_SUBMIT';
                    mike['type'] = yankee;
                    mike['guildId'] = verify;
                    mike = report.bind(golf)(mike);
 78: // try_start_0
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 6;
                    mike = golf[mike];
                    mike = report.bind(options)(mike);
                    golf = mike.HTTP;
                    report = golf.post;
                    mike = {};
                    romeo = _closure1_slot7;
                    yankee = romeo.GUILD_CONVERT_TO_CLAN;
                    verify = oscar;
                    verify = yankee.bind(romeo)(verify);
                    mike['url'] = verify;
                    verify = {};
                    romeo = offset;
                    yankee = romeo.tag;
                    verify['tag'] = yankee;
                    yankee = romeo.description;
                    verify['description'] = yankee;
                    yankee = romeo.playstyle;
                    verify['play_style'] = yankee;
                    yankee = global;
                    result = yankee.Array;
                    sizing = result.from;
                    romeo = romeo.interests;
                    echo = romeo;
                    backup = null;
                    if(!(backup == romeo)) { _fun77654_ip = 223; continue _fun77654 }
 195:
                    romeo = yankee.Set;
                    update = romeo.prototype;
                    update = Object.create(update, {constructor: {value: romeo}});
                    control = update;
                    romeo = new control[romeo](source);
                    romeo = romeo instanceof Object ? romeo : update;
                    _fun77654_ip = 226; continue _fun77654;
 223:
                    romeo = echo;
 226:
                    romeo = sizing.bind(result)(romeo);
                    verify['search_terms'] = romeo;
                    sizing = yankee.Array;
                    romeo = sizing.from;
                    result = offset;
                    result = result.gameApplicationIds;
                    output = result;
                    if(!(backup == result)) { _fun77654_ip = 291; continue _fun77654 }
 263:
                    yankee = yankee.Set;
                    result = yankee.prototype;
                    result = Object.create(result, {constructor: {value: yankee}});
                    control = result;
                    yankee = new control[yankee](source);
                    yankee = yankee instanceof Object ? yankee : result;
                    _fun77654_ip = 294; continue _fun77654;
 291:
                    yankee = output;
 294:
                    yankee = romeo.bind(sizing)(yankee);
                    verify['game_application_ids'] = yankee;
                    yankee = {};
                    romeo = offset;
                    romeo = romeo.verificationForm;
                    kilo = romeo;
                    sizing = backup == romeo;
                    romeo = undefined;
                    if(sizing) { _fun77654_ip = 333; continue _fun77654 }
 327:
                    romeo = kilo.formFields;
 333:
                    foxtrot = romeo;
                    if(!(backup == romeo)) { _fun77654_ip = 346; continue _fun77654 }
 340:
                    romeo = new Array(0);
                    _fun77654_ip = 349; continue _fun77654;
 346:
                    romeo = foxtrot;
 349:
                    yankee['form_fields'] = romeo;
                    verify['verification_form'] = yankee;
                    yankee = offset.badgeKind;
                    verify['badge'] = yankee;
                    yankee = offset.badgePrimaryColor;
                    verify['badge_color_primary'] = yankee;
                    yankee = offset.badgeSecondaryColor;
                    verify['badge_color_secondary'] = yankee;
                    yankee = offset.banner;
                    verify['banner'] = yankee;
                    yankee = offset.brandPrimaryColor;
                    verify['brand_color_primary'] = yankee;
                    yankee = offset.brandSecondaryColor;
                    verify['brand_color_secondary'] = yankee;
                    offset = offset.wildcardDescriptors;
                    verify['wildcard_descriptors'] = offset;
                    mike['body'] = verify;
                    verify = true;
                    mike['rejectWithError'] = verify;
                    mike = report.bind(golf)(mike);
                    SaveGenerator(address=455);
 453:
                    return mike;
 455:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun77654_ip = 510; continue _fun77654 }
 461:
                    golf = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[zulu];
                    verify = golf.bind(options)(report);
                    golf = verify.dispatch;
                    report = {};
                    offset = 'CLAN_SETUP_SUCCESS';
                    report['type'] = offset;
                    offset = oscar;
                    report['guildId'] = offset;
                    report = golf.bind(verify)(report);
 507: // try_end0
                    return options;
 510:
                    return mike;
 513: // catch_target0
                    CatchBlockStart(arg_register=1);
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = verify[zulu];
                    report = golf.bind(options)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    offset = 'CLAN_SETUP_ERROR';
                    zulu['type'] = offset;
                    zulu['guildId'] = oscar;
                    oscar = 7;
                    oscar = verify[oscar];
                    oscar = golf.bind(options)(oscar);
                    golf = oscar.prototype;
                    golf = Object.create(golf, {constructor: {value: oscar}});
                    control = golf;
                    source = mike;
                    oscar = new control[oscar](source, update);
                    oscar = oscar instanceof Object ? oscar : golf;
                    zulu['error'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 599:
                    return entity;
                }
            };
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot9 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _getClanInfo
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun77657: for(var _fun77657_ip = 0; ; ) switch(_fun77657_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun77657_ip = 107; continue _fun77657 }
 7:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    mike = 6;
                    mike = report[mike];
                    report = undefined;
                    mike = tango.bind(report)(mike);
                    oscar = mike.HTTP;
                    tango = oscar.get;
                    mike = {};
                    verify = _closure1_slot7;
                    options = verify.GUILD_CLAN_DISCOVERY_INFO;
                    golf = argFoo;
                    golf = options.bind(verify)(golf);
                    mike['url'] = golf;
                    golf = false;
                    mike['rejectWithError'] = golf;
                    mike = tango.bind(oscar)(mike);
                    SaveGenerator(address=81);
 79:
                    return mike;
 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun77657_ip = 104; continue _fun77657 }
 87:
                    tango = _closure1_slot6;
                    zulu = mike.body;
                    zulu = tango.bind(report)(zulu);
                    return zulu;
 104:
                    return mike;
 107:
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
    entity = function() { // Original name: _adoptClanIdentity
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun77660: for(var _fun77660_ip = 0; ; ) switch(_fun77660_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun77660_ip = 292; continue _fun77660 }
 10:
                    verify = argFoo;
                    options = argBar;
                    report = argBaz;
 19: // try_start_0
                    tango = verify;
                    zulu = null;
                    zulu = zulu != tango;
                    mike = zulu;
                    if(!zulu) { _fun77660_ip = 43; continue _fun77660 }
 34:
                    tango = options;
                    zulu = true;
                    mike = zulu === tango;
 43:
                    if(!mike) { _fun77660_ip = 113; continue _fun77660 }
 46:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 8;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.trackClanAdoptIdentity;
                    mike = {};
                    golf = verify;
                    mike['guildId'] = golf;
                    golf = _closure1_slot4;
                    oscar = golf.getId;
                    oscar = oscar.bind(golf)();
                    mike['userId'] = oscar;
                    mike['source'] = report;
                    mike = zulu.bind(tango)(mike);
 113:
                    zulu = _closure1_slot0;
                    tango = _closure1_slot2;
                    mike = 6;
                    mike = tango[mike];
                    report = undefined;
                    mike = zulu.bind(report)(mike);
                    tango = mike.HTTP;
                    zulu = tango.put;
                    mike = {};
                    oscar = _closure1_slot7;
                    oscar = oscar.USER_SET_CLAN_IDENTITY;
                    mike['url'] = oscar;
                    oscar = {};
                    oscar['identity_guild_id'] = verify;
                    oscar['identity_enabled'] = options;
                    mike['body'] = oscar;
                    oscar = false;
                    mike['rejectWithError'] = oscar;
                    mike = zulu.bind(tango)(mike);
                    SaveGenerator(address=196);
 194:
                    return mike;
 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun77660_ip = 282; continue _fun77660 }
 202:
                    tango = _closure1_slot1;
                    oscar = _closure1_slot2;
                    zulu = 5;
                    zulu = oscar[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'CURRENT_USER_UPDATE';
                    zulu['type'] = oscar;
                    oscar = {};
                    options = _closure1_slot5;
                    golf = options.getCurrentUser;
                    offset = golf.bind(options)();
                    yankee = oscar;
                    golf = copyDataProperties(yankee, offset);
                    offset = mike.body;
                    yankee = oscar;
                    golf = copyDataProperties(yankee, offset);
                    zulu['user'] = oscar;
                    zulu = tango.bind(report)(zulu);
 280: // try_end0
                    _fun77660_ip = 287; continue _fun77660;
 282:
                    return mike;
 285: // catch_target0
                    CatchBlockStart(arg_register=1);
 287:
                    mike = undefined;
                    return mike;
 292:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _fetchClanSettings
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun77663: for(var _fun77663_ip = 0; ; ) switch(_fun77663_ip) {
 0:
                    StartGenerator();
                    options = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun77663_ip = 196; continue _fun77663 }
 13:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    oscar = 5;
                    mike = report[oscar];
                    zulu = undefined;
                    verify = tango.bind(zulu)(mike);
                    tango = verify.dispatch;
                    mike = {};
                    offset = 'CLAN_SETTINGS_FETCH_START';
                    mike['type'] = offset;
                    mike = tango.bind(verify)(mike);
                    tango = _closure1_slot0;
                    mike = 6;
                    mike = report[mike];
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.get;
                    mike = {};
                    offset = _closure1_slot7;
                    verify = offset.CLAN_SETTINGS;
                    verify = verify.bind(offset)(options);
                    mike['url'] = verify;
                    verify = false;
                    mike['rejectWithError'] = verify;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=122);
 120:
                    return mike;
 122:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun77663_ip = 193; continue _fun77663 }
 128:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[oscar];
                    oscar = report.bind(zulu)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    verify = 'CLAN_SETTINGS_FETCH_SUCCESS';
                    tango['type'] = verify;
                    tango['guildId'] = options;
                    options = _closure1_slot8;
                    golf = mike.body;
                    golf = options.bind(zulu)(golf);
                    tango['settings'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 193:
                    return mike;
 196:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _saveClanSettings
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun77666: for(var _fun77666_ip = 0; ; ) switch(_fun77666_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun77666_ip = 590; continue _fun77666 }
 13:
                    golf = offset;
                    verify = argBar;
                    options = undefined;
                    result = undefined;
                    sizing = undefined;
                    romeo = undefined;
                    backup = undefined;
                    report = _closure1_slot1;
                    mike = _closure1_slot2;
                    zulu = 5;
                    mike = mike[zulu];
                    oscar = report.bind(options)(mike);
                    report = oscar.dispatch;
                    mike = {};
                    yankee = 'CLAN_SETTINGS_SUBMIT';
                    mike['type'] = yankee;
                    mike['guildId'] = offset;
                    mike = report.bind(oscar)(mike);
 78: // try_start_0
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    mike = 6;
                    mike = oscar[mike];
                    mike = report.bind(options)(mike);
                    oscar = mike.HTTP;
                    report = oscar.patch;
                    mike = {};
                    yankee = _closure1_slot7;
                    offset = yankee.CLAN_SETTINGS;
                    golf = offset.bind(yankee)(golf);
                    mike['url'] = golf;
                    golf = {};
                    yankee = verify;
                    offset = yankee.tag;
                    golf['tag'] = offset;
                    offset = yankee.description;
                    golf['description'] = offset;
                    offset = yankee.playstyle;
                    golf['play_style'] = offset;
                    offset = global;
                    output = offset.Array;
                    kilo = output.from;
                    yankee = yankee.interests;
                    result = yankee;
                    foxtrot = null;
                    if(!(foxtrot == yankee)) { _fun77666_ip = 220; continue _fun77666 }
 192:
                    yankee = offset.Set;
                    echo = yankee.prototype;
                    echo = Object.create(echo, {constructor: {value: yankee}});
                    source = echo;
                    yankee = new source[yankee](update);
                    yankee = yankee instanceof Object ? yankee : echo;
                    _fun77666_ip = 223; continue _fun77666;
 220:
                    yankee = result;
 223:
                    yankee = kilo.bind(output)(yankee);
                    golf['search_terms'] = yankee;
                    kilo = offset.Array;
                    yankee = kilo.from;
                    output = verify;
                    output = output.gameApplicationIds;
                    sizing = output;
                    if(!(foxtrot == output)) { _fun77666_ip = 288; continue _fun77666 }
 260:
                    offset = offset.Set;
                    output = offset.prototype;
                    output = Object.create(output, {constructor: {value: offset}});
                    source = output;
                    offset = new source[offset](update);
                    offset = offset instanceof Object ? offset : output;
                    _fun77666_ip = 291; continue _fun77666;
 288:
                    offset = sizing;
 291:
                    offset = yankee.bind(kilo)(offset);
                    golf['game_application_ids'] = offset;
                    offset = {};
                    yankee = verify;
                    yankee = yankee.verificationForm;
                    backup = yankee;
                    kilo = foxtrot == yankee;
                    yankee = undefined;
                    if(kilo) { _fun77666_ip = 330; continue _fun77666 }
 324:
                    yankee = backup.formFields;
 330:
                    romeo = yankee;
                    if(!(foxtrot == yankee)) { _fun77666_ip = 343; continue _fun77666 }
 337:
                    yankee = new Array(0);
                    _fun77666_ip = 346; continue _fun77666;
 343:
                    yankee = romeo;
 346:
                    offset['form_fields'] = yankee;
                    golf['verification_form'] = offset;
                    offset = verify.badgeKind;
                    golf['badge'] = offset;
                    offset = verify.badgePrimaryColor;
                    golf['badge_color_primary'] = offset;
                    offset = verify.badgeSecondaryColor;
                    golf['badge_color_secondary'] = offset;
                    offset = verify.banner;
                    golf['banner'] = offset;
                    offset = verify.brandPrimaryColor;
                    golf['brand_color_primary'] = offset;
                    offset = verify.brandSecondaryColor;
                    golf['brand_color_secondary'] = offset;
                    verify = verify.wildcardDescriptors;
                    golf['wildcard_descriptors'] = verify;
                    mike['body'] = golf;
                    golf = true;
                    mike['rejectWithError'] = golf;
                    mike = report.bind(oscar)(mike);
                    SaveGenerator(address=452);
 450:
                    return mike;
 452:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun77666_ip = 505; continue _fun77666 }
 458:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[zulu];
                    golf = oscar.bind(options)(report);
                    oscar = golf.dispatch;
                    report = {};
                    verify = 'CLAN_SETTINGS_SUBMIT_SUCCESS';
                    report['type'] = verify;
                    report = oscar.bind(golf)(report);
                    report = mike.body;
 502: // try_end0
                    return report;
 505:
                    return mike;
 508: // catch_target0
                    CatchBlockStart(arg_register=1);
                    golf = _closure1_slot1;
                    verify = _closure1_slot2;
                    zulu = verify[zulu];
                    report = golf.bind(options)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    oscar = 'CLAN_SETTINGS_SUBMIT_ERROR';
                    zulu['type'] = oscar;
                    oscar = 7;
                    oscar = verify[oscar];
                    oscar = golf.bind(options)(oscar);
                    golf = oscar.prototype;
                    golf = Object.create(golf, {constructor: {value: oscar}});
                    source = golf;
                    update = mike;
                    oscar = new source[oscar](update, echo);
                    oscar = oscar instanceof Object ? oscar : golf;
                    zulu['error'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    throw mike;
 590:
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
    entity = function() { // Original name: _disableClan
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun77669: for(var _fun77669_ip = 0; ; ) switch(_fun77669_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun77669_ip = 98; continue _fun77669 }
 7:
                    oscar = argFoo;
 10: // try_start_0
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 6;
                    mike = zulu[mike];
                    zulu = undefined;
                    mike = tango.bind(zulu)(mike);
                    report = mike.HTTP;
                    tango = report.post;
                    mike = {};
                    options = _closure1_slot7;
                    golf = options.DISABLE_CLAN;
                    oscar = golf.bind(options)(oscar);
                    mike['url'] = oscar;
                    oscar = true;
                    mike['rejectWithError'] = oscar;
                    mike = tango.bind(report)(mike);
                    SaveGenerator(address=82);
 80:
                    return mike;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun77669_ip = 91; continue _fun77669 }
 88: // try_end0
                    return zulu;
 91:
                    return mike;
 94: // catch_target0
                    CatchBlockStart(arg_register=1);
                    throw mike;
 98:
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
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.buildClanFromServer;
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Endpoints;
    var _closure1_slot7 = tango;
    tango = function(argFoo) { // Original name: _clanSettingsFromServer
        _fun77670: for(var _fun77670_ip = 0; ; ) switch(_fun77670_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.tag;
            entity['tag'] = zulu;
            zulu = global;
            golf = zulu.Set;
            tango = mike.game_application_ids;
            oscar = null;
            if(!(oscar == tango)) { _fun77670_ip = 38; continue _fun77670 }
 34:
            tango = new Array(0);
 38:
            report = golf.prototype;
            report = Object.create(report, {constructor: {value: golf}});
            yankee = report;
            offset = tango;
            tango = new yankee[golf](offset, verify);
            tango = tango instanceof Object ? tango : report;
            entity['gameApplicationIds'] = tango;
            report = zulu.Set;
            zulu = mike.search_terms;
            if(!(oscar == zulu)) { _fun77670_ip = 86; continue _fun77670 }
 82:
            zulu = new Array(0);
 86:
            tango = report.prototype;
            tango = Object.create(tango, {constructor: {value: report}});
            yankee = tango;
            offset = zulu;
            zulu = new yankee[report](offset, verify);
            zulu = zulu instanceof Object ? zulu : tango;
            entity['interests'] = zulu;
            zulu = mike.play_style;
            entity['playstyle'] = zulu;
            zulu = mike.description;
            entity['description'] = zulu;
            zulu = mike.wildcard_descriptors;
            entity['wildcardDescriptors'] = zulu;
            zulu = {};
            tango = mike.verification_form;
            golf = oscar == tango;
            options = undefined;
            if(golf) { _fun77670_ip = 167; continue _fun77670 }
 162:
            options = tango.description;
 167:
            verify = oscar != options;
            tango = '';
            golf = tango;
            if(!verify) { _fun77670_ip = 184; continue _fun77670 }
 181:
            golf = options;
 184:
            zulu['description'] = golf;
            golf = mike.verification_form;
            options = oscar == golf;
            report = undefined;
            if(options) { _fun77670_ip = 209; continue _fun77670 }
 203:
            report = golf.form_fields;
 209:
            if(!(oscar == report)) { _fun77670_ip = 217; continue _fun77670 }
 213:
            report = new Array(0);
 217:
            zulu['formFields'] = report;
            zulu['version'] = tango;
            entity['verificationForm'] = zulu;
            zulu = mike.badge;
            entity['badgeKind'] = zulu;
            zulu = mike.badge_color_primary;
            entity['badgePrimaryColor'] = zulu;
            zulu = mike.badge_color_secondary;
            entity['badgeSecondaryColor'] = zulu;
            zulu = mike.banner;
            entity['banner'] = zulu;
            zulu = mike.brand_color_primary;
            entity['brandPrimaryColor'] = zulu;
            mike = mike.brand_color_secondary;
            entity['brandSecondaryColor'] = mike;
            return entity;
        }
    };
    var _closure1_slot8 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/clan/ClanActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: convertGuildToClan
        entity = undefined;
        tango = _closure1_slot9;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['convertGuildToClan'] = tango;
    tango = function() { // Original name: getClanInfo
        entity = undefined;
        tango = _closure1_slot10;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['getClanInfo'] = tango;
    tango = function() { // Original name: adoptClanIdentity
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['adoptClanIdentity'] = tango;
    tango = function() { // Original name: resetClanSetup
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLAN_SETUP_RESET';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetClanSetup'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateClanSetup
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLAN_SETUP_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['updates'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateClanSetup'] = tango;
    tango = function(argFoo, argBar) { // Original name: updateClanSettings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 5;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'CLAN_SETTINGS_UPDATE';
        mike['type'] = report;
        report = argFoo;
        mike['guildId'] = report;
        report = argBar;
        mike['updates'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['updateClanSettings'] = tango;
    tango = function() { // Original name: fetchClanSettings
        entity = undefined;
        tango = _closure1_slot12;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['fetchClanSettings'] = tango;
    tango = function() { // Original name: saveClanSettings
        entity = undefined;
        tango = _closure1_slot13;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['saveClanSettings'] = tango;
    mike = function() { // Original name: disableClan
        entity = undefined;
        tango = _closure1_slot14;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['disableClan'] = mike;
    return entity;
})();
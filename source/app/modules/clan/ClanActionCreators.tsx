// app/modules/clan/ClanActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _convertGuildToClan
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 599; continue _fun00001 }
 13:
                    oscard = verify;
                    offset = argBar;
                    option = undefined;
                    echoed = undefined;
                    output = undefined;
                    foxtra = undefined;
                    kiloes = undefined;
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    zuuluu = 5;
                    michal = michal[zuuluu];
                    golfie = report.bind(option)(michal);
                    report = golfie.dispatch;
                    michal = {};
                    yankee = 'CLAN_SETUP_SUBMIT';
                    michal['type'] = yankee;
                    michal['guildId'] = verify;
                    michal = report.bind(golfie)(michal);
 78: // try_start_0
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 6;
                    michal = golfie[michal];
                    michal = report.bind(option)(michal);
                    golfie = michal.HTTP;
                    report = golfie.post;
                    michal = {};
                    romeon = _closure1_slot7;
                    yankee = romeon.GUILD_CONVERT_TO_CLAN;
                    verify = oscard;
                    verify = yankee.bind(romeon)(verify);
                    michal['url'] = verify;
                    verify = {};
                    romeon = offset;
                    yankee = romeon.tag;
                    verify['tag'] = yankee;
                    yankee = romeon.description;
                    verify['description'] = yankee;
                    yankee = romeon.playstyle;
                    verify['play_style'] = yankee;
                    yankee = global;
                    result = yankee.Array;
                    sizing = result.from;
                    romeon = romeon.interests;
                    echoed = romeon;
                    backup = null;
                    if(!(backup == romeon)) { _fun00002_ip = 223; continue _fun00001 }
 195:
                    romeon = yankee.Set;
                    update = romeon.prototype;
                    update = Object.create(update, {constructor: {value: romeon}});
                    ctrled = update;
                    romeon = new ctrled[romeon](source);
                    romeon = romeon instanceof Object ? romeon : update;
                    _fun00002_ip = 226; continue _fun00001;
 223:
                    romeon = echoed;
 226:
                    romeon = sizing.bind(result)(romeon);
                    verify['search_terms'] = romeon;
                    sizing = yankee.Array;
                    romeon = sizing.from;
                    result = offset;
                    result = result.gameApplicationIds;
                    output = result;
                    if(!(backup == result)) { _fun00002_ip = 291; continue _fun00001 }
 263:
                    yankee = yankee.Set;
                    result = yankee.prototype;
                    result = Object.create(result, {constructor: {value: yankee}});
                    ctrled = result;
                    yankee = new ctrled[yankee](source);
                    yankee = yankee instanceof Object ? yankee : result;
                    _fun00002_ip = 294; continue _fun00001;
 291:
                    yankee = output;
 294:
                    yankee = romeon.bind(sizing)(yankee);
                    verify['game_application_ids'] = yankee;
                    yankee = {};
                    romeon = offset;
                    romeon = romeon.verificationForm;
                    kiloes = romeon;
                    sizing = backup == romeon;
                    romeon = undefined;
                    if(sizing) { _fun00002_ip = 333; continue _fun00001 }
 327:
                    romeon = kiloes.formFields;
 333:
                    foxtra = romeon;
                    if(!(backup == romeon)) { _fun00002_ip = 346; continue _fun00001 }
 340:
                    romeon = new Array(0);
                    _fun00002_ip = 349; continue _fun00001;
 346:
                    romeon = foxtra;
 349:
                    yankee['form_fields'] = romeon;
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
                    michal['body'] = verify;
                    verify = true;
                    michal['rejectWithError'] = verify;
                    michal = report.bind(golfie)(michal);
                    SaveGenerator(address=455);
 453:
                    return michal;
 455:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00002_ip = 510; continue _fun00001 }
 461:
                    golfie = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[zuuluu];
                    verify = golfie.bind(option)(report);
                    golfie = verify.dispatch;
                    report = {};
                    offset = 'CLAN_SETUP_SUCCESS';
                    report['type'] = offset;
                    offset = oscard;
                    report['guildId'] = offset;
                    report = golfie.bind(verify)(report);
 507: // try_end0
                    return option;
 510:
                    return michal;
 513: // catch_target0
                    CatchBlockStart(arg_register=1);
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = verify[zuuluu];
                    report = golfie.bind(option)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    offset = 'CLAN_SETUP_ERROR';
                    zuuluu['type'] = offset;
                    zuuluu['guildId'] = oscard;
                    oscard = 7;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    golfie = oscard.prototype;
                    golfie = Object.create(golfie, {constructor: {value: oscard}});
                    ctrled = golfie;
                    source = michal;
                    oscard = new ctrled[oscard](source, update);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    zuuluu['error'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 599:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot9 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot9 = entity;
    entity = function() { // Original name: _getClanInfo
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00004_ip = 107; continue _fun00003 }
 7:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    michal = 6;
                    michal = report[michal];
                    report = undefined;
                    michal = tangon.bind(report)(michal);
                    oscard = michal.HTTP;
                    tangon = oscard.get;
                    michal = {};
                    verify = _closure1_slot7;
                    option = verify.GUILD_CLAN_DISCOVERY_INFO;
                    golfie = argFoo;
                    golfie = option.bind(verify)(golfie);
                    michal['url'] = golfie;
                    golfie = false;
                    michal['rejectWithError'] = golfie;
                    michal = tangon.bind(oscard)(michal);
                    SaveGenerator(address=81);
 79:
                    return michal;
 81:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00004_ip = 104; continue _fun00003 }
 87:
                    tangon = _closure1_slot6;
                    zuuluu = michal.body;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return zuuluu;
 104:
                    return michal;
 107:
                    return entity;
                }
            };
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot10 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _adoptClanIdentity
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar, argBaz) {
            entity = function* (argFoo, argBar, argBaz) { // Original name: ?anon_0_
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00006_ip = 292; continue _fun00005 }
 10:
                    verify = argFoo;
                    option = argBar;
                    report = argBaz;
 19: // try_start_0
                    tangon = verify;
                    zuuluu = null;
                    zuuluu = zuuluu != tangon;
                    michal = zuuluu;
                    if(!zuuluu) { _fun00006_ip = 43; continue _fun00005 }
 34:
                    tangon = option;
                    zuuluu = true;
                    michal = zuuluu === tangon;
 43:
                    if(!michal) { _fun00006_ip = 113; continue _fun00005 }
 46:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 8;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.trackClanAdoptIdentity;
                    michal = {};
                    golfie = verify;
                    michal['guildId'] = golfie;
                    golfie = _closure1_slot4;
                    oscard = golfie.getId;
                    oscard = oscard.bind(golfie)();
                    michal['userId'] = oscard;
                    michal['source'] = report;
                    michal = zuuluu.bind(tangon)(michal);
 113:
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 6;
                    michal = tangon[michal];
                    report = undefined;
                    michal = zuuluu.bind(report)(michal);
                    tangon = michal.HTTP;
                    zuuluu = tangon.put;
                    michal = {};
                    oscard = _closure1_slot7;
                    oscard = oscard.USER_SET_CLAN_IDENTITY;
                    michal['url'] = oscard;
                    oscard = {};
                    oscard['identity_guild_id'] = verify;
                    oscard['identity_enabled'] = option;
                    michal['body'] = oscard;
                    oscard = false;
                    michal['rejectWithError'] = oscard;
                    michal = zuuluu.bind(tangon)(michal);
                    SaveGenerator(address=196);
 194:
                    return michal;
 196:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00006_ip = 282; continue _fun00005 }
 202:
                    tangon = _closure1_slot1;
                    oscard = _closure1_slot2;
                    zuuluu = 5;
                    zuuluu = oscard[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'CURRENT_USER_UPDATE';
                    zuuluu['type'] = oscard;
                    oscard = {};
                    option = _closure1_slot5;
                    golfie = option.getCurrentUser;
                    offset = golfie.bind(option)();
                    yankee = oscard;
                    golfie = copyDataProperties(yankee, offset);
                    offset = michal.body;
                    yankee = oscard;
                    golfie = copyDataProperties(yankee, offset);
                    zuuluu['user'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
 280: // try_end0
                    _fun00006_ip = 287; continue _fun00005;
 282:
                    return michal;
 285: // catch_target0
                    CatchBlockStart(arg_register=1);
 287:
                    michal = undefined;
                    return michal;
 292:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _fetchClanSettings
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    option = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 196; continue _fun00007 }
 13:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    oscard = 5;
                    michal = report[oscard];
                    zuuluu = undefined;
                    verify = tangon.bind(zuuluu)(michal);
                    tangon = verify.dispatch;
                    michal = {};
                    offset = 'CLAN_SETTINGS_FETCH_START';
                    michal['type'] = offset;
                    michal = tangon.bind(verify)(michal);
                    tangon = _closure1_slot0;
                    michal = 6;
                    michal = report[michal];
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.get;
                    michal = {};
                    offset = _closure1_slot7;
                    verify = offset.CLAN_SETTINGS;
                    verify = verify.bind(offset)(option);
                    michal['url'] = verify;
                    verify = false;
                    michal['rejectWithError'] = verify;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=122);
 120:
                    return michal;
 122:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 193; continue _fun00007 }
 128:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[oscard];
                    oscard = report.bind(zuuluu)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    verify = 'CLAN_SETTINGS_FETCH_SUCCESS';
                    tangon['type'] = verify;
                    tangon['guildId'] = option;
                    option = _closure1_slot8;
                    golfie = michal.body;
                    golfie = option.bind(zuuluu)(golfie);
                    tangon['settings'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 193:
                    return michal;
 196:
                    return entity;
                }
            };
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
    entity = function() { // Original name: _saveClanSettings
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    StartGenerator();
                    offset = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00010_ip = 590; continue _fun00009 }
 13:
                    golfie = offset;
                    verify = argBar;
                    option = undefined;
                    result = undefined;
                    sizing = undefined;
                    romeon = undefined;
                    backup = undefined;
                    report = _closure1_slot1;
                    michal = _closure1_slot2;
                    zuuluu = 5;
                    michal = michal[zuuluu];
                    oscard = report.bind(option)(michal);
                    report = oscard.dispatch;
                    michal = {};
                    yankee = 'CLAN_SETTINGS_SUBMIT';
                    michal['type'] = yankee;
                    michal['guildId'] = offset;
                    michal = report.bind(oscard)(michal);
 78: // try_start_0
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    michal = 6;
                    michal = oscard[michal];
                    michal = report.bind(option)(michal);
                    oscard = michal.HTTP;
                    report = oscard.patch;
                    michal = {};
                    yankee = _closure1_slot7;
                    offset = yankee.CLAN_SETTINGS;
                    golfie = offset.bind(yankee)(golfie);
                    michal['url'] = golfie;
                    golfie = {};
                    yankee = verify;
                    offset = yankee.tag;
                    golfie['tag'] = offset;
                    offset = yankee.description;
                    golfie['description'] = offset;
                    offset = yankee.playstyle;
                    golfie['play_style'] = offset;
                    offset = global;
                    output = offset.Array;
                    kiloes = output.from;
                    yankee = yankee.interests;
                    result = yankee;
                    foxtra = null;
                    if(!(foxtra == yankee)) { _fun00010_ip = 220; continue _fun00009 }
 192:
                    yankee = offset.Set;
                    echoed = yankee.prototype;
                    echoed = Object.create(echoed, {constructor: {value: yankee}});
                    source = echoed;
                    yankee = new source[yankee](update);
                    yankee = yankee instanceof Object ? yankee : echoed;
                    _fun00010_ip = 223; continue _fun00009;
 220:
                    yankee = result;
 223:
                    yankee = kiloes.bind(output)(yankee);
                    golfie['search_terms'] = yankee;
                    kiloes = offset.Array;
                    yankee = kiloes.from;
                    output = verify;
                    output = output.gameApplicationIds;
                    sizing = output;
                    if(!(foxtra == output)) { _fun00010_ip = 288; continue _fun00009 }
 260:
                    offset = offset.Set;
                    output = offset.prototype;
                    output = Object.create(output, {constructor: {value: offset}});
                    source = output;
                    offset = new source[offset](update);
                    offset = offset instanceof Object ? offset : output;
                    _fun00010_ip = 291; continue _fun00009;
 288:
                    offset = sizing;
 291:
                    offset = yankee.bind(kiloes)(offset);
                    golfie['game_application_ids'] = offset;
                    offset = {};
                    yankee = verify;
                    yankee = yankee.verificationForm;
                    backup = yankee;
                    kiloes = foxtra == yankee;
                    yankee = undefined;
                    if(kiloes) { _fun00010_ip = 330; continue _fun00009 }
 324:
                    yankee = backup.formFields;
 330:
                    romeon = yankee;
                    if(!(foxtra == yankee)) { _fun00010_ip = 343; continue _fun00009 }
 337:
                    yankee = new Array(0);
                    _fun00010_ip = 346; continue _fun00009;
 343:
                    yankee = romeon;
 346:
                    offset['form_fields'] = yankee;
                    golfie['verification_form'] = offset;
                    offset = verify.badgeKind;
                    golfie['badge'] = offset;
                    offset = verify.badgePrimaryColor;
                    golfie['badge_color_primary'] = offset;
                    offset = verify.badgeSecondaryColor;
                    golfie['badge_color_secondary'] = offset;
                    offset = verify.banner;
                    golfie['banner'] = offset;
                    offset = verify.brandPrimaryColor;
                    golfie['brand_color_primary'] = offset;
                    offset = verify.brandSecondaryColor;
                    golfie['brand_color_secondary'] = offset;
                    verify = verify.wildcardDescriptors;
                    golfie['wildcard_descriptors'] = verify;
                    michal['body'] = golfie;
                    golfie = true;
                    michal['rejectWithError'] = golfie;
                    michal = report.bind(oscard)(michal);
                    SaveGenerator(address=452);
 450:
                    return michal;
 452:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(report) { _fun00010_ip = 505; continue _fun00009 }
 458:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    report = report[zuuluu];
                    golfie = oscard.bind(option)(report);
                    oscard = golfie.dispatch;
                    report = {};
                    verify = 'CLAN_SETTINGS_SUBMIT_SUCCESS';
                    report['type'] = verify;
                    report = oscard.bind(golfie)(report);
                    report = michal.body;
 502: // try_end0
                    return report;
 505:
                    return michal;
 508: // catch_target0
                    CatchBlockStart(arg_register=1);
                    golfie = _closure1_slot1;
                    verify = _closure1_slot2;
                    zuuluu = verify[zuuluu];
                    report = golfie.bind(option)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    oscard = 'CLAN_SETTINGS_SUBMIT_ERROR';
                    zuuluu['type'] = oscard;
                    oscard = 7;
                    oscard = verify[oscard];
                    oscard = golfie.bind(option)(oscard);
                    golfie = oscard.prototype;
                    golfie = Object.create(golfie, {constructor: {value: oscard}});
                    source = golfie;
                    update = michal;
                    oscard = new source[oscard](update, echoed);
                    oscard = oscard instanceof Object ? oscard : golfie;
                    zuuluu['error'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    throw michal;
 590:
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
    entity = function() { // Original name: _disableClan
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00012_ip = 98; continue _fun00011 }
 7:
                    oscard = argFoo;
 10: // try_start_0
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 6;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    michal = tangon.bind(zuuluu)(michal);
                    report = michal.HTTP;
                    tangon = report.post;
                    michal = {};
                    option = _closure1_slot7;
                    golfie = option.DISABLE_CLAN;
                    oscard = golfie.bind(option)(oscard);
                    michal['url'] = oscard;
                    oscard = true;
                    michal['rejectWithError'] = oscard;
                    michal = tangon.bind(report)(michal);
                    SaveGenerator(address=82);
 80:
                    return michal;
 82:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00012_ip = 91; continue _fun00011 }
 88: // try_end0
                    return zuuluu;
 91:
                    return michal;
 94: // catch_target0
                    CatchBlockStart(arg_register=1);
                    throw michal;
 98:
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.buildClanFromServer;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Endpoints;
    var _closure1_slot7 = tangon;
    tangon = function(argFoo) { // Original name: _clanSettingsFromServer
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            michal = argFoo;
            entity = {};
            zuuluu = michal.tag;
            entity['tag'] = zuuluu;
            zuuluu = global;
            golfie = zuuluu.Set;
            tangon = michal.game_application_ids;
            oscard = null;
            if(!(oscard == tangon)) { _fun00014_ip = 38; continue _fun00013 }
 34:
            tangon = new Array(0);
 38:
            report = golfie.prototype;
            report = Object.create(report, {constructor: {value: golfie}});
            yankee = report;
            offset = tangon;
            tangon = new yankee[golfie](offset, verify);
            tangon = tangon instanceof Object ? tangon : report;
            entity['gameApplicationIds'] = tangon;
            report = zuuluu.Set;
            zuuluu = michal.search_terms;
            if(!(oscard == zuuluu)) { _fun00014_ip = 86; continue _fun00013 }
 82:
            zuuluu = new Array(0);
 86:
            tangon = report.prototype;
            tangon = Object.create(tangon, {constructor: {value: report}});
            yankee = tangon;
            offset = zuuluu;
            zuuluu = new yankee[report](offset, verify);
            zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
            entity['interests'] = zuuluu;
            zuuluu = michal.play_style;
            entity['playstyle'] = zuuluu;
            zuuluu = michal.description;
            entity['description'] = zuuluu;
            zuuluu = michal.wildcard_descriptors;
            entity['wildcardDescriptors'] = zuuluu;
            zuuluu = {};
            tangon = michal.verification_form;
            golfie = oscard == tangon;
            option = undefined;
            if(golfie) { _fun00014_ip = 167; continue _fun00013 }
 162:
            option = tangon.description;
 167:
            verify = oscard != option;
            tangon = '';
            golfie = tangon;
            if(!verify) { _fun00014_ip = 184; continue _fun00013 }
 181:
            golfie = option;
 184:
            zuuluu['description'] = golfie;
            golfie = michal.verification_form;
            option = oscard == golfie;
            report = undefined;
            if(option) { _fun00014_ip = 209; continue _fun00013 }
 203:
            report = golfie.form_fields;
 209:
            if(!(oscard == report)) { _fun00014_ip = 217; continue _fun00013 }
 213:
            report = new Array(0);
 217:
            zuuluu['formFields'] = report;
            zuuluu['version'] = tangon;
            entity['verificationForm'] = zuuluu;
            zuuluu = michal.badge;
            entity['badgeKind'] = zuuluu;
            zuuluu = michal.badge_color_primary;
            entity['badgePrimaryColor'] = zuuluu;
            zuuluu = michal.badge_color_secondary;
            entity['badgeSecondaryColor'] = zuuluu;
            zuuluu = michal.banner;
            entity['banner'] = zuuluu;
            zuuluu = michal.brand_color_primary;
            entity['brandPrimaryColor'] = zuuluu;
            michal = michal.brand_color_secondary;
            entity['brandSecondaryColor'] = michal;
            return entity;
        }
    };
    var _closure1_slot8 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/clan/ClanActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: convertGuildToClan
        entity = undefined;
        tangon = _closure1_slot9;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['convertGuildToClan'] = tangon;
    tangon = function() { // Original name: getClanInfo
        entity = undefined;
        tangon = _closure1_slot10;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['getClanInfo'] = tangon;
    tangon = function() { // Original name: adoptClanIdentity
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['adoptClanIdentity'] = tangon;
    tangon = function() { // Original name: resetClanSetup
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CLAN_SETUP_RESET';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetClanSetup'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateClanSetup
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CLAN_SETUP_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['updates'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateClanSetup'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: updateClanSettings
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 5;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'CLAN_SETTINGS_UPDATE';
        michal['type'] = report;
        report = argFoo;
        michal['guildId'] = report;
        report = argBar;
        michal['updates'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['updateClanSettings'] = tangon;
    tangon = function() { // Original name: fetchClanSettings
        entity = undefined;
        tangon = _closure1_slot12;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['fetchClanSettings'] = tangon;
    tangon = function() { // Original name: saveClanSettings
        entity = undefined;
        tangon = _closure1_slot13;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['saveClanSettings'] = tangon;
    michal = function() { // Original name: disableClan
        entity = undefined;
        tangon = _closure1_slot14;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['disableClan'] = michal;
    return entity;
})();
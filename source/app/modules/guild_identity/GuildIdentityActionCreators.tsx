// app/modules/guild_identity/GuildIdentityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _saveGuildIdentityChanges
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    michal = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 522; continue _fun00001 }
 13:
                    foxtra = argFoo;
                    sizing = michal.nick;
                    kiloes = michal.avatar;
                    yankee = michal.avatarDescription;
                    offset = michal.avatarId;
                    backup = michal.avatarDecoration;
                    oscard = undefined;
                    romeon = undefined;
                    report = undefined;
                    SaveGenerator(address=56);
 54:
                    return oscard;
 56:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 519; continue _fun00001 }
 65:
                    tangon = foxtra;
                    verify = null;
                    if(!(verify != tangon)) { _fun00002_ip = 483; continue _fun00001 }
 77:
                    output = _closure1_slot1;
                    option = _closure1_slot2;
                    golfie = 2;
                    option = option[golfie];
                    result = output.bind(oscard)(option);
                    output = result.dispatch;
                    option = {};
                    echoed = 'GUILD_IDENTITY_SETTINGS_SUBMIT';
                    option['type'] = echoed;
                    option = output.bind(result)(option);
                    option = {};
                    option['nick'] = sizing;
                    option['avatar'] = kiloes;
                    option['avatar_description'] = yankee;
                    option['avatar_id'] = offset;
                    yankee = verify === backup;
                    offset = null;
                    if(yankee) { _fun00002_ip = 170; continue _fun00001 }
 153:
                    sizing = verify == backup;
                    kiloes = undefined;
                    if(sizing) { _fun00002_ip = 167; continue _fun00001 }
 162:
                    kiloes = backup.id;
 167:
                    offset = kiloes;
 170:
                    option['avatar_decoration_id'] = offset;
                    offset = null;
                    if(yankee) { _fun00002_ip = 198; continue _fun00001 }
 180:
                    kiloes = verify == backup;
                    yankee = undefined;
                    if(kiloes) { _fun00002_ip = 195; continue _fun00001 }
 189:
                    yankee = backup.skuId;
 195:
                    offset = yankee;
 198:
                    option['avatar_decoration_sku_id'] = offset;
                    romeon = option;
 206: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    option = 3;
                    option = yankee[option];
                    option = offset.bind(oscard)(option);
                    yankee = option.HTTP;
                    offset = yankee.patch;
                    option = {};
                    sizing = _closure1_slot4;
                    kiloes = sizing.SET_GUILD_MEMBER;
                    backup = foxtra;
                    backup = kiloes.bind(sizing)(backup);
                    option['url'] = backup;
                    option['body'] = romeon;
                    romeon = true;
                    option['oldFormErrors'] = romeon;
                    romeon = false;
                    option['rejectWithError'] = romeon;
                    option = offset.bind(yankee)(option);
                    SaveGenerator(address=287);
 285:
                    return option;
 287:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 378; continue _fun00001 }
 293:
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    romeon = offset[golfie];
                    kiloes = yankee.bind(oscard)(romeon);
                    backup = kiloes.dispatch;
                    romeon = {};
                    sizing = 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS';
                    romeon['type'] = sizing;
                    romeon = backup.bind(kiloes)(romeon);
                    offset = offset[golfie];
                    romeon = yankee.bind(oscard)(offset);
                    yankee = romeon.dispatch;
                    offset = {};
                    backup = 'GUILD_MEMBER_PROFILE_UPDATE';
                    offset['type'] = backup;
                    backup = option.body;
                    offset['guildMember'] = backup;
                    offset['guildId'] = foxtra;
                    offset = yankee.bind(romeon)(offset);
 375: // try_end0
                    return option;
 378:
                    return option;
 381: // catch_target0
                    CatchBlockStart(arg_register=7);
                    zuuluu = option;
                    option = option.body;
                    report = option;
                    offset = verify == option;
                    option = undefined;
                    if(offset) { _fun00002_ip = 411; continue _fun00001 }
 403:
                    offset = report;
                    option = offset.username;
 411:
                    if(!(verify != option)) { _fun00002_ip = 431; continue _fun00001 }
 415:
                    option = report.username;
                    report['nick'] = option;
                    report = delete report.username;
 431:
                    report = _closure1_slot1;
                    tangon = _closure1_slot2;
                    tangon = tangon[golfie];
                    oscard = report.bind(oscard)(tangon);
                    report = oscard.dispatch;
                    tangon = {};
                    golfie = 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE';
                    tangon['type'] = golfie;
                    golfie = zuuluu.body;
                    tangon['errors'] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 483:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    update = 'Need guildId';
                    source = tangon;
                    zuuluu = new source[report](update, echoed);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 519:
                    return michal;
 522:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot5 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    tangon = report.bind(entity)(tangon);
    golfie = tangon.Endpoints;
    var _closure1_slot4 = golfie;
    tangon = tangon.Layers;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_identity/GuildIdentityActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: saveGuildIdentityChanges
        entity = undefined;
        tangon = _closure1_slot5;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['saveGuildIdentityChanges'] = tangon;
    tangon = function(argFoo) { // Original name: setCurrentGuild
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_GUILD';
        michal['type'] = report;
        report = argFoo;
        michal['guild'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setCurrentGuild'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: initGuildIdentitySettings
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_INIT';
        michal['type'] = report;
        report = argFoo;
        michal['guild'] = report;
        report = argBar;
        michal['analyticsLocations'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['initGuildIdentitySettings'] = tangon;
    tangon = function(argFoo, argBar, argBaz) { // Original name: openGuildIdentitySettings
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_INIT';
        michal['type'] = report;
        report = argFoo;
        michal['guild'] = report;
        report = argBar;
        michal['source'] = report;
        report = argBaz;
        michal['analyticsLocations'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['openGuildIdentitySettings'] = tangon;
    tangon = function() { // Original name: resetAndCloseGuildIdentityForm
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetAndCloseGuildIdentityForm'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingAvatar
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR';
        michal['type'] = report;
        report = argFoo;
        michal['avatar'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingAvatar'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingAvatarV2
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_V2';
        michal['type'] = report;
        report = argFoo;
        michal['avatar'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingAvatarV2'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingAvatarDecoration
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION';
        michal['type'] = report;
        report = argFoo;
        michal['avatarDecoration'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingAvatarDecoration'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingProfileEffectId
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID';
        michal['type'] = report;
        report = argFoo;
        michal['profileEffectId'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingProfileEffectId'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingBanner
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER';
        michal['type'] = report;
        report = argFoo;
        michal['banner'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingBanner'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingBio
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO';
        michal['type'] = report;
        report = argFoo;
        michal['bio'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingBio'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingPronouns
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS';
        michal['type'] = report;
        report = argFoo;
        michal['pronouns'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingPronouns'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingNickname
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME';
        michal['type'] = report;
        report = argFoo;
        michal['nickname'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingNickname'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingThemeColors
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS';
        michal['type'] = report;
        report = argFoo;
        michal['themeColors'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingThemeColors'] = tangon;
    tangon = function() { // Original name: resetPendingMemberChanges
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetPendingMemberChanges'] = tangon;
    tangon = function() { // Original name: resetPendingProfileChanges
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetPendingProfileChanges'] = tangon;
    tangon = function() { // Original name: resetAllPending
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetAllPending'] = tangon;
    michal = function() { // Original name: clearErrors
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 2;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['clearErrors'] = michal;
    return entity;
})();
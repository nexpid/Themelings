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
                    if(tangon) { _fun00002_ip = 744; continue _fun00001 }
 13:
                    sizing = argFoo;
                    backup = michal.nick;
                    foxtra = michal.avatar;
                    yankee = michal.avatarDescription;
                    romeon = michal.avatarId;
                    output = michal.avatarDecoration;
                    oscard = undefined;
                    kiloes = undefined;
                    offset = undefined;
                    report = undefined;
                    SaveGenerator(address=58);
 56:
                    return oscard;
 58:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00002_ip = 741; continue _fun00001 }
 67:
                    tangon = sizing;
                    verify = null;
                    if(!(verify != tangon)) { _fun00002_ip = 705; continue _fun00001 }
 79:
                    result = _closure1_slot1;
                    option = _closure1_slot2;
                    golfie = 2;
                    option = option[golfie];
                    echoed = result.bind(oscard)(option);
                    result = echoed.dispatch;
                    option = {};
                    update = 'GUILD_IDENTITY_SETTINGS_SUBMIT';
                    option['type'] = update;
                    option = result.bind(echoed)(option);
                    option = {};
                    option['nick'] = backup;
                    backup = foxtra;
                    option['avatar'] = backup;
                    option['avatar_description'] = yankee;
                    yankee = romeon;
                    option['avatar_id'] = yankee;
                    backup = verify === output;
                    yankee = null;
                    if(backup) { _fun00002_ip = 178; continue _fun00001 }
 161:
                    echoed = verify == output;
                    result = undefined;
                    if(echoed) { _fun00002_ip = 175; continue _fun00001 }
 170:
                    result = output.id;
 175:
                    yankee = result;
 178:
                    option['avatar_decoration_id'] = yankee;
                    yankee = null;
                    if(backup) { _fun00002_ip = 206; continue _fun00001 }
 188:
                    result = verify == output;
                    backup = undefined;
                    if(result) { _fun00002_ip = 203; continue _fun00001 }
 197:
                    backup = output.skuId;
 203:
                    yankee = backup;
 206:
                    option['avatar_decoration_sku_id'] = yankee;
                    kiloes = option;
 214: // try_start_0
                    yankee = _closure1_slot0;
                    backup = _closure1_slot2;
                    option = 3;
                    option = backup[option];
                    option = yankee.bind(oscard)(option);
                    backup = option.HTTP;
                    yankee = backup.patch;
                    option = {};
                    echoed = _closure1_slot5;
                    result = echoed.SET_GUILD_MEMBER;
                    output = sizing;
                    output = result.bind(echoed)(output);
                    option['url'] = output;
                    option['body'] = kiloes;
                    result = true;
                    option['oldFormErrors'] = result;
                    kiloes = false;
                    option['rejectWithError'] = kiloes;
                    option = yankee.bind(backup)(option);
                    SaveGenerator(address=295);
 293:
                    return option;
 295:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=10);
                    if(yankee) { _fun00002_ip = 600; continue _fun00001 }
 304:
                    offset = option;
                    echoed = option.body;
                    backup = _closure1_slot1;
                    ctrled = _closure1_slot2;
                    yankee = 4;
                    yankee = ctrled[yankee];
                    output = backup.bind(oscard)(yankee);
                    kiloes = output.track;
                    yankee = _closure1_slot4;
                    backup = yankee.USER_AVATAR_UPDATED;
                    yankee = {};
                    source = _closure1_slot0;
                    update = 5;
                    update = ctrled[update];
                    source = source.bind(oscard)(update);
                    update = source.isAnimatedIconHash;
                    echoed = echoed.avatar;
                    echoed = update.bind(source)(echoed);
                    yankee['animated'] = echoed;
                    yankee['is_guild_profile'] = result;
                    result = romeon;
                    echoed = verify != result;
                    result = undefined;
                    if(!echoed) { _fun00002_ip = 420; continue _fun00001 }
 404:
                    echoed = global;
                    update = echoed.Number;
                    echoed = romeon;
                    result = update.bind(oscard)(echoed);
 420:
                    yankee['recent_avatar_id'] = result;
                    echoed = foxtra;
                    echoed = verify != echoed;
                    result = echoed;
                    if(!echoed) { _fun00002_ip = 445; continue _fun00001 }
 438:
                    echoed = romeon;
                    result = verify != echoed;
 445:
                    yankee['is_edited_recent_avatar'] = result;
                    yankee = kiloes.bind(output)(backup, yankee);
                    backup = _closure1_slot1;
                    yankee = _closure1_slot2;
                    kiloes = yankee[golfie];
                    result = backup.bind(oscard)(kiloes);
                    output = result.dispatch;
                    kiloes = {};
                    echoed = 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS';
                    kiloes['type'] = echoed;
                    kiloes = output.bind(result)(kiloes);
                    yankee = yankee[golfie];
                    kiloes = backup.bind(oscard)(yankee);
                    backup = kiloes.dispatch;
                    yankee = {};
                    output = 'GUILD_MEMBER_PROFILE_UPDATE';
                    yankee['type'] = output;
                    output = offset;
                    output = output.body;
                    yankee['guildMember'] = output;
                    yankee['guildId'] = sizing;
                    yankee = backup.bind(kiloes)(yankee);
                    foxtra = verify == foxtra;
                    yankee = foxtra;
                    if(!foxtra) { _fun00002_ip = 555; continue _fun00001 }
 551:
                    yankee = verify == romeon;
 555:
                    if(yankee) { _fun00002_ip = 597; continue _fun00001 }
 558:
                    romeon = _closure1_slot1;
                    yankee = _closure1_slot2;
                    yankee = yankee[golfie];
                    foxtra = romeon.bind(oscard)(yankee);
                    romeon = foxtra.dispatch;
                    yankee = {};
                    backup = 'RECENT_AVATARS_UPDATE';
                    yankee['type'] = backup;
                    yankee = romeon.bind(foxtra)(yankee);
 597: // try_end0
                    return offset;
 600:
                    return option;
 603: // catch_target0
                    CatchBlockStart(arg_register=7);
                    zuuluu = option;
                    option = option.body;
                    report = option;
                    offset = verify == option;
                    option = undefined;
                    if(offset) { _fun00002_ip = 633; continue _fun00001 }
 625:
                    offset = report;
                    option = offset.username;
 633:
                    if(!(verify != option)) { _fun00002_ip = 653; continue _fun00001 }
 637:
                    option = report.username;
                    report['nick'] = option;
                    report = delete report.username;
 653:
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
 705:
                    zuuluu = global;
                    report = zuuluu.Error;
                    zuuluu = report.prototype;
                    tangon = Object.create(zuuluu, {constructor: {value: report}});
                    sequen = 'Need guildId';
                    config = tangon;
                    zuuluu = new config[report](sequen, vacuum);
                    zuuluu = zuuluu instanceof Object ? zuuluu : tangon;
                    throw zuuluu;
 741:
                    return michal;
 744:
                    return entity;
                }
            };
            michal = entity.next;
            michal = michal.bind(entity)();
            return entity;
        };
        tangon = tangon.bind(report)(zuuluu);
        _closure1_slot6 = tangon;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    var _closure1_slot6 = entity;
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
    golfie = tangon.AnalyticEvents;
    var _closure1_slot4 = golfie;
    golfie = tangon.Endpoints;
    var _closure1_slot5 = golfie;
    tangon = tangon.Layers;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/guild_identity/GuildIdentityActionCreators.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: saveGuildIdentityChanges
        entity = undefined;
        tangon = _closure1_slot6;
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
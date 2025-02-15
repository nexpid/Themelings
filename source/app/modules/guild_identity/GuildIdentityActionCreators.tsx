// app/modules/guild_identity/GuildIdentityActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: _saveGuildIdentityChanges
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    mike = argBar;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 500; continue _fun00001 }
 13:
                    foxtrot = argFoo;
                    yankee = mike.nick;
                    offset = mike.avatar;
                    backup = mike.avatarDecoration;
                    oscar = undefined;
                    romeo = undefined;
                    report = undefined;
                    SaveGenerator(address=44);
 42:
                    return oscar;
 44:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00002_ip = 497; continue _fun00001 }
 53:
                    tango = foxtrot;
                    verify = null;
                    if(!(verify != tango)) { _fun00002_ip = 461; continue _fun00001 }
 65:
                    kilo = _closure1_slot1;
                    options = _closure1_slot2;
                    golf = 2;
                    options = options[golf];
                    sizing = kilo.bind(oscar)(options);
                    kilo = sizing.dispatch;
                    options = {};
                    output = 'GUILD_IDENTITY_SETTINGS_SUBMIT';
                    options['type'] = output;
                    options = kilo.bind(sizing)(options);
                    options = {};
                    options['nick'] = yankee;
                    options['avatar'] = offset;
                    yankee = verify === backup;
                    offset = null;
                    if(yankee) { _fun00002_ip = 148; continue _fun00001 }
 131:
                    sizing = verify == backup;
                    kilo = undefined;
                    if(sizing) { _fun00002_ip = 145; continue _fun00001 }
 140:
                    kilo = backup.id;
 145:
                    offset = kilo;
 148:
                    options['avatar_decoration_id'] = offset;
                    offset = null;
                    if(yankee) { _fun00002_ip = 176; continue _fun00001 }
 158:
                    kilo = verify == backup;
                    yankee = undefined;
                    if(kilo) { _fun00002_ip = 173; continue _fun00001 }
 167:
                    yankee = backup.skuId;
 173:
                    offset = yankee;
 176:
                    options['avatar_decoration_sku_id'] = offset;
                    romeo = options;
 184: // try_start_0
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    options = 3;
                    options = yankee[options];
                    options = offset.bind(oscar)(options);
                    yankee = options.HTTP;
                    offset = yankee.patch;
                    options = {};
                    sizing = _closure1_slot4;
                    kilo = sizing.SET_GUILD_MEMBER;
                    backup = foxtrot;
                    backup = kilo.bind(sizing)(backup);
                    options['url'] = backup;
                    options['body'] = romeo;
                    romeo = true;
                    options['oldFormErrors'] = romeo;
                    romeo = false;
                    options['rejectWithError'] = romeo;
                    options = offset.bind(yankee)(options);
                    SaveGenerator(address=265);
 263:
                    return options;
 265:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=9);
                    if(offset) { _fun00002_ip = 356; continue _fun00001 }
 271:
                    yankee = _closure1_slot1;
                    offset = _closure1_slot2;
                    romeo = offset[golf];
                    kilo = yankee.bind(oscar)(romeo);
                    backup = kilo.dispatch;
                    romeo = {};
                    sizing = 'GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS';
                    romeo['type'] = sizing;
                    romeo = backup.bind(kilo)(romeo);
                    offset = offset[golf];
                    romeo = yankee.bind(oscar)(offset);
                    yankee = romeo.dispatch;
                    offset = {};
                    backup = 'GUILD_MEMBER_PROFILE_UPDATE';
                    offset['type'] = backup;
                    backup = options.body;
                    offset['guildMember'] = backup;
                    offset['guildId'] = foxtrot;
                    offset = yankee.bind(romeo)(offset);
 353: // try_end0
                    return options;
 356:
                    return options;
 359: // catch_target0
                    CatchBlockStart(arg_register=7);
                    zulu = options;
                    options = options.body;
                    report = options;
                    offset = verify == options;
                    options = undefined;
                    if(offset) { _fun00002_ip = 389; continue _fun00001 }
 381:
                    offset = report;
                    options = offset.username;
 389:
                    if(!(verify != options)) { _fun00002_ip = 409; continue _fun00001 }
 393:
                    options = report.username;
                    report['nick'] = options;
                    report = delete report.username;
 409:
                    report = _closure1_slot1;
                    tango = _closure1_slot2;
                    tango = tango[golf];
                    oscar = report.bind(oscar)(tango);
                    report = oscar.dispatch;
                    tango = {};
                    golf = 'GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE';
                    tango['type'] = golf;
                    golf = zulu.body;
                    tango['errors'] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 461:
                    zulu = global;
                    report = zulu.Error;
                    zulu = report.prototype;
                    tango = Object.create(zulu, {constructor: {value: report}});
                    result = 'Need guildId';
                    echo = tango;
                    zulu = new echo[report](result, output);
                    zulu = zulu instanceof Object ? zulu : tango;
                    throw zulu;
 497:
                    return mike;
 500:
                    return entity;
                }
            };
            mike = entity.next;
            mike = mike.bind(entity)();
            return entity;
        };
        tango = tango.bind(report)(zulu);
        _closure1_slot5 = tango;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    var _closure1_slot5 = entity;
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
    tango = report.bind(entity)(tango);
    golf = tango.Endpoints;
    var _closure1_slot4 = golf;
    tango = tango.Layers;
    tango = 4;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/guild_identity/GuildIdentityActionCreators.tsx';
    tango = report.bind(oscar)(tango);
    tango = function() { // Original name: saveGuildIdentityChanges
        entity = undefined;
        tango = _closure1_slot5;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['saveGuildIdentityChanges'] = tango;
    tango = function(argFoo) { // Original name: setCurrentGuild
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_GUILD';
        mike['type'] = report;
        report = argFoo;
        mike['guild'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setCurrentGuild'] = tango;
    tango = function(argFoo, argBar) { // Original name: initGuildIdentitySettings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_INIT';
        mike['type'] = report;
        report = argFoo;
        mike['guild'] = report;
        report = argBar;
        mike['analyticsLocations'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['initGuildIdentitySettings'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: openGuildIdentitySettings
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_INIT';
        mike['type'] = report;
        report = argFoo;
        mike['guild'] = report;
        report = argBar;
        mike['source'] = report;
        report = argBaz;
        mike['analyticsLocations'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['openGuildIdentitySettings'] = tango;
    tango = function() { // Original name: resetAndCloseGuildIdentityForm
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetAndCloseGuildIdentityForm'] = tango;
    tango = function(argFoo) { // Original name: setPendingAvatar
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR';
        mike['type'] = report;
        report = argFoo;
        mike['avatar'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingAvatar'] = tango;
    tango = function(argFoo) { // Original name: setPendingAvatarDecoration
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION';
        mike['type'] = report;
        report = argFoo;
        mike['avatarDecoration'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingAvatarDecoration'] = tango;
    tango = function(argFoo) { // Original name: setPendingProfileEffectId
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID';
        mike['type'] = report;
        report = argFoo;
        mike['profileEffectId'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingProfileEffectId'] = tango;
    tango = function(argFoo) { // Original name: setPendingBanner
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER';
        mike['type'] = report;
        report = argFoo;
        mike['banner'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingBanner'] = tango;
    tango = function(argFoo) { // Original name: setPendingBio
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO';
        mike['type'] = report;
        report = argFoo;
        mike['bio'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingBio'] = tango;
    tango = function(argFoo) { // Original name: setPendingPronouns
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS';
        mike['type'] = report;
        report = argFoo;
        mike['pronouns'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingPronouns'] = tango;
    tango = function(argFoo) { // Original name: setPendingNickname
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME';
        mike['type'] = report;
        report = argFoo;
        mike['nickname'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingNickname'] = tango;
    tango = function(argFoo) { // Original name: setPendingThemeColors
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS';
        mike['type'] = report;
        report = argFoo;
        mike['themeColors'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingThemeColors'] = tango;
    tango = function() { // Original name: resetPendingMemberChanges
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetPendingMemberChanges'] = tango;
    tango = function() { // Original name: resetPendingProfileChanges
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetPendingProfileChanges'] = tango;
    tango = function() { // Original name: resetAllPending
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetAllPending'] = tango;
    mike = function() { // Original name: clearErrors
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 2;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['clearErrors'] = mike;
    return entity;
})();
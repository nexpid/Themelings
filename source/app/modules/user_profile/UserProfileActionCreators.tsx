// app/modules/user_profile/UserProfileActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = options;
    var _closure1_slot2 = golf;
    entity = function(argFoo) { // Original name: trackTryOutFeature
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 4;
        mike = mike[entity];
        entity = undefined;
        report = zulu.bind(entity)(mike);
        tango = report.track;
        mike = _closure1_slot5;
        zulu = mike.PREMIUM_FEATURE_TRY_OUT;
        mike = {};
        golf = argFoo;
        mike['feature_name'] = golf;
        oscar = _closure1_slot8;
        oscar = oscar.PREMIUM_STANDARD;
        mike['feature_tier'] = oscar;
        mike = tango.bind(report)(zulu, mike);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _saveProfileChanges
        report = undefined;
        entity = undefined;
        tango = _closure1_slot3;
        zulu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun63439: for(var _fun63439_ip = 0; ; ) switch(_fun63439_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun63439_ip = 700; continue _fun63439 }
 10:
                    backup = argFoo;
                    sizing = argBar;
                    report = undefined;
                    yankee = undefined;
                    tango = undefined;
                    romeo = undefined;
                    oscar = undefined;
                    offset = undefined;
                    golf = _closure1_slot4;
                    mike = golf.getCurrentUser;
                    golf = mike.bind(golf)();
                    verify = null;
                    options = verify == golf;
                    mike = undefined;
                    if(options) { _fun63439_ip = 60; continue _fun63439 }
 55:
                    mike = golf.id;
 60:
                    yankee = mike;
                    if(!(verify == mike)) { _fun63439_ip = 70; continue _fun63439 }
 67:
                    return report;
 70:
                    golf = _closure1_slot0;
                    options = _closure1_slot2;
                    mike = 5;
                    mike = options[mike];
                    mike = golf.bind(report)(mike);
                    golf = mike.UseLegacyChatInput;
                    mike = golf.getSetting;
                    golf = mike.bind(golf)();
                    mike = backup;
                    mike = mike.bio;
                    mike = verify != mike;
                    if(!mike) { _fun63439_ip = 125; continue _fun63439 }
 122:
                    mike = golf;
 125:
                    if(!mike) { _fun63439_ip = 180; continue _fun63439 }
 128:
                    golf = backup;
                    options = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    mike = 6;
                    mike = foxtrot[mike];
                    foxtrot = options.bind(report)(mike);
                    options = foxtrot.parse;
                    mike = golf.bio;
                    mike = options.bind(foxtrot)(report, mike);
                    mike = mike.content;
                    golf['bio'] = mike;
 180: // try_start_0
                    golf = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    options = 7;
                    mike = foxtrot[options];
                    kilo = golf.bind(report)(mike);
                    golf = kilo.dispatch;
                    mike = {};
                    output = 'USER_PROFILE_UPDATE_START';
                    mike['type'] = output;
                    output = yankee;
                    mike['userId'] = output;
                    mike = golf.bind(kilo)(mike);
                    golf = _closure1_slot0;
                    mike = 8;
                    mike = foxtrot[mike];
                    mike = golf.bind(report)(mike);
                    foxtrot = mike.HTTP;
                    golf = foxtrot.patch;
                    mike = {};
                    kilo = sizing;
                    if(!(verify == kilo)) { _fun63439_ip = 286; continue _fun63439 }
 265:
                    result = _closure1_slot6;
                    output = result.USER_PROFILE;
                    kilo = _closure1_slot7;
                    kilo = output.bind(result)(kilo);
                    _fun63439_ip = 309; continue _fun63439;
 286:
                    echo = _closure1_slot6;
                    result = echo.USER_GUILD_PROFILE;
                    output = sizing;
                    sizing = _closure1_slot7;
                    kilo = result.bind(echo)(output, sizing);
 309:
                    mike['url'] = kilo;
                    mike['body'] = backup;
                    backup = false;
                    mike['rejectWithError'] = backup;
                    mike = golf.bind(foxtrot)(mike);
                    SaveGenerator(address=332);
 330:
                    return mike;
 332:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golf) { _fun63439_ip = 595; continue _fun63439 }
 341:
                    tango = mike;
                    golf = mike.ok;
                    if(golf) { _fun63439_ip = 458; continue _fun63439 }
 353:
                    backup = _closure1_slot0;
                    golf = _closure1_slot2;
                    foxtrot = 9;
                    foxtrot = golf[foxtrot];
                    foxtrot = backup.bind(report)(foxtrot);
                    foxtrot = foxtrot.APIError;
                    sizing = tango;
                    backup = foxtrot.prototype;
                    backup = Object.create(backup, {constructor: {value: foxtrot}});
                    control = backup;
                    source = sizing;
                    foxtrot = new control[foxtrot](source, update);
                    kilo = foxtrot instanceof Object ? foxtrot : backup;
                    foxtrot = _closure1_slot1;
                    golf = golf[options];
                    backup = foxtrot.bind(report)(golf);
                    foxtrot = backup.dispatch;
                    golf = {};
                    output = 'USER_PROFILE_UPDATE_FAILURE';
                    golf['type'] = output;
                    sizing = sizing.body;
                    golf['errors'] = sizing;
                    golf['apiError'] = kilo;
                    golf = foxtrot.bind(backup)(golf);
                    _fun63439_ip = 592; continue _fun63439;
 458:
                    golf = tango;
                    golf = golf.body;
                    golf = golf.profile_effect;
                    romeo = golf;
                    foxtrot = verify == golf;
                    golf = undefined;
                    if(foxtrot) { _fun63439_ip = 489; continue _fun63439 }
 484:
                    golf = romeo.id;
 489:
                    offset = golf;
                    golf = tango;
                    golf = golf.body;
                    golf = golf.profile_effect;
                    oscar = golf;
                    golf = verify == golf;
                    verify = undefined;
                    if(golf) { _fun63439_ip = 524; continue _fun63439 }
 518:
                    verify = oscar.expires_at;
 524:
                    golf = _closure1_slot1;
                    oscar = _closure1_slot2;
                    oscar = oscar[options];
                    options = golf.bind(report)(oscar);
                    golf = options.dispatch;
                    oscar = {};
                    romeo = 'USER_PROFILE_UPDATE_SUCCESS';
                    oscar['type'] = romeo;
                    oscar['userId'] = yankee;
                    oscar['profileEffectId'] = offset;
                    oscar['profileEffectExpiresAt'] = verify;
                    verify = tango;
                    update = verify.body;
                    source = oscar;
                    verify = copyDataProperties(source, update);
                    oscar = golf.bind(options)(oscar);
 592: // try_end0
                    return tango;
 595:
                    return mike;
 598: // catch_target0
                    CatchBlockStart(arg_register=1);
                    oscar = _closure1_slot0;
                    golf = _closure1_slot2;
                    tango = 9;
                    tango = golf[tango];
                    tango = oscar.bind(report)(tango);
                    tango = tango.APIError;
                    oscar = tango.prototype;
                    oscar = Object.create(oscar, {constructor: {value: tango}});
                    control = oscar;
                    source = mike;
                    tango = new control[tango](source, update);
                    oscar = tango instanceof Object ? tango : oscar;
                    tango = _closure1_slot1;
                    zulu = 7;
                    zulu = golf[zulu];
                    report = tango.bind(report)(zulu);
                    tango = report.dispatch;
                    zulu = {};
                    golf = 'USER_PROFILE_UPDATE_FAILURE';
                    zulu['type'] = golf;
                    golf = {};
                    zulu['errors'] = golf;
                    zulu['apiError'] = oscar;
                    zulu = tango.bind(report)(zulu);
                    return mike;
 700:
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
    tango = function(argFoo) { // Original name: setPendingBanner
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER';
        mike['type'] = report;
        report = argFoo;
        mike['banner'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot12 = tango;
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
    report = oscar.bind(entity)(report);
    options = report.AnalyticEvents;
    var _closure1_slot5 = options;
    options = report.Endpoints;
    var _closure1_slot6 = options;
    report = report.ME;
    var _closure1_slot7 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.AnalyticsPremiumFeatureTiers;
    var _closure1_slot8 = options;
    report = report.AnalyticsPremiumFeatureNames;
    var _closure1_slot9 = report;
    report = 11;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/user_profile/UserProfileActionCreators.tsx';
    report = oscar.bind(golf)(report);
    report = function() { // Original name: saveProfileChanges
        entity = undefined;
        tango = _closure1_slot11;
        zulu = tango.apply;
        entity = arguments;
        mike = entity;
        entity = this;
        entity = zulu.bind(tango)(entity, mike);
        return entity;
    };
    zulu['saveProfileChanges'] = report;
    report = function() { // Original name: resetPendingProfileChanges
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        mike['type'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['resetPendingProfileChanges'] = report;
    report = function(argFoo) { // Original name: setPendingBannerUrl
        _fun63443: for(var _fun63443_ip = 0; ; ) switch(_fun63443_ip) {
 0:
            tango = argFoo;
            zulu = null;
            report = zulu == tango;
            entity = undefined;
            oscar = undefined;
            if(report) { _fun63443_ip = 33; continue _fun63443 }
 18:
            golf = tango.startsWith;
            report = 'https:';
            oscar = golf.bind(tango)(report);
 33:
            report = true;
            if(!(report !== oscar)) { _fun63443_ip = 57; continue _fun63443 }
 39:
            if(!(zulu != tango)) { _fun63443_ip = 115; continue _fun63443 }
 43:
            zulu = _closure1_slot12;
            zulu = zulu.bind(entity)(tango);
            _fun63443_ip = 115; continue _fun63443;
 57:
            zulu = global;
            zulu = zulu.fetch;
            report = zulu.bind(entity)(tango);
            tango = report.then;
            zulu = function(argFoo) {
                mike = argFoo;
                entity = mike.blob;
                entity = entity.bind(mike)();
                return entity;
            };
            report = tango.bind(report)(zulu);
            tango = report.then;
            zulu = function(argFoo) {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 10;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.readFileAsBase64;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            tango = tango.bind(report)(zulu);
            zulu = tango.then;
            mike = function(argFoo) {
                zulu = _closure1_slot12;
                entity = undefined;
                mike = argFoo;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 115:
            return entity;
        }
    };
    zulu['setPendingBannerUrl'] = report;
    zulu['setPendingBanner'] = tango;
    tango = function(argFoo) { // Original name: setPendingBio
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO';
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
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS';
        mike['type'] = report;
        report = argFoo;
        mike['pronouns'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingPronouns'] = tango;
    tango = function(argFoo) { // Original name: setPendingAccentColor
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR';
        mike['type'] = report;
        report = argFoo;
        mike['color'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingAccentColor'] = tango;
    tango = function(argFoo) { // Original name: setPendingThemeColors
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 7;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.dispatch;
        mike = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS';
        mike['type'] = report;
        report = argFoo;
        mike['themeColors'] = report;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['setPendingThemeColors'] = tango;
    tango = function(argFoo) { // Original name: setTryItOutAvatar
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.dispatch;
        zulu = {};
        oscar = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR';
        zulu['type'] = oscar;
        oscar = argFoo;
        zulu['avatar'] = oscar;
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot10;
        mike = _closure1_slot9;
        mike = mike.ANIMATED_AVATAR;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['setTryItOutAvatar'] = tango;
    tango = function(argFoo) { // Original name: setTryItOutAvatarDecoration
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.dispatch;
        zulu = {};
        oscar = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION';
        zulu['type'] = oscar;
        oscar = argFoo;
        zulu['avatarDecoration'] = oscar;
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot10;
        mike = _closure1_slot9;
        mike = mike.AVATAR_DECORATION;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['setTryItOutAvatarDecoration'] = tango;
    tango = function(argFoo) { // Original name: setTryItOutProfileEffect
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.dispatch;
        zulu = {};
        oscar = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID';
        zulu['type'] = oscar;
        oscar = argFoo;
        zulu['profileEffectId'] = oscar;
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot10;
        mike = _closure1_slot9;
        mike = mike.PROFILE_EFFECT;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['setTryItOutProfileEffect'] = tango;
    tango = function(argFoo) { // Original name: setTryItOutBanner
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.dispatch;
        zulu = {};
        oscar = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER';
        zulu['type'] = oscar;
        oscar = argFoo;
        zulu['banner'] = oscar;
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot10;
        mike = _closure1_slot9;
        mike = mike.PROFILE_BANNER;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['setTryItOutBanner'] = tango;
    tango = function(argFoo) { // Original name: setTryItOutThemeColors
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.dispatch;
        zulu = {};
        oscar = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS';
        zulu['type'] = oscar;
        oscar = argFoo;
        zulu['themeColors'] = oscar;
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot10;
        mike = _closure1_slot9;
        mike = mike.PROFILE_THEME_COLOR;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['setTryItOutThemeColors'] = tango;
    mike = function(argFoo) { // Original name: setTryItOutPreset
        tango = _closure1_slot1;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        report = tango.bind(entity)(zulu);
        tango = report.dispatch;
        zulu = {};
        oscar = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET';
        zulu['type'] = oscar;
        oscar = argFoo;
        zulu['preset'] = oscar;
        zulu = tango.bind(report)(zulu);
        zulu = _closure1_slot10;
        mike = _closure1_slot9;
        mike = mike.PRESET;
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['setTryItOutPreset'] = mike;
    return entity;
})();
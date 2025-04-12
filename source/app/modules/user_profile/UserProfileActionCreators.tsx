// app/modules/user_profile/UserProfileActionCreators.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    entity = function(argFoo) { // Original name: trackTryOutFeature
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 4;
        michal = michal[entity];
        entity = undefined;
        report = zuuluu.bind(entity)(michal);
        tangon = report.track;
        michal = _closure1_slot5;
        zuuluu = michal.PREMIUM_FEATURE_TRY_OUT;
        michal = {};
        golfie = argFoo;
        michal['feature_name'] = golfie;
        oscard = _closure1_slot8;
        oscard = oscard.PREMIUM_STANDARD;
        michal['feature_tier'] = oscard;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _saveProfileChanges
        report = undefined;
        entity = undefined;
        tangon = _closure1_slot3;
        zuuluu = function* (argFoo, argBar) {
            entity = function* (argFoo, argBar) { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 700; continue _fun00001 }
 10:
                    backup = argFoo;
                    sizing = argBar;
                    report = undefined;
                    yankee = undefined;
                    tangon = undefined;
                    romeon = undefined;
                    oscard = undefined;
                    offset = undefined;
                    golfie = _closure1_slot4;
                    michal = golfie.getCurrentUser;
                    golfie = michal.bind(golfie)();
                    verify = null;
                    option = verify == golfie;
                    michal = undefined;
                    if(option) { _fun00002_ip = 60; continue _fun00001 }
 55:
                    michal = golfie.id;
 60:
                    yankee = michal;
                    if(!(verify == michal)) { _fun00002_ip = 70; continue _fun00001 }
 67:
                    return report;
 70:
                    golfie = _closure1_slot0;
                    option = _closure1_slot2;
                    michal = 5;
                    michal = option[michal];
                    michal = golfie.bind(report)(michal);
                    golfie = michal.UseLegacyChatInput;
                    michal = golfie.getSetting;
                    golfie = michal.bind(golfie)();
                    michal = backup;
                    michal = michal.bio;
                    michal = verify != michal;
                    if(!michal) { _fun00002_ip = 125; continue _fun00001 }
 122:
                    michal = golfie;
 125:
                    if(!michal) { _fun00002_ip = 180; continue _fun00001 }
 128:
                    golfie = backup;
                    option = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    michal = 6;
                    michal = foxtra[michal];
                    foxtra = option.bind(report)(michal);
                    option = foxtra.parse;
                    michal = golfie.bio;
                    michal = option.bind(foxtra)(report, michal);
                    michal = michal.content;
                    golfie['bio'] = michal;
 180: // try_start_0
                    golfie = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    option = 7;
                    michal = foxtra[option];
                    kiloes = golfie.bind(report)(michal);
                    golfie = kiloes.dispatch;
                    michal = {};
                    output = 'USER_PROFILE_UPDATE_START';
                    michal['type'] = output;
                    output = yankee;
                    michal['userId'] = output;
                    michal = golfie.bind(kiloes)(michal);
                    golfie = _closure1_slot0;
                    michal = 8;
                    michal = foxtra[michal];
                    michal = golfie.bind(report)(michal);
                    foxtra = michal.HTTP;
                    golfie = foxtra.patch;
                    michal = {};
                    kiloes = sizing;
                    if(!(verify == kiloes)) { _fun00002_ip = 286; continue _fun00001 }
 265:
                    result = _closure1_slot6;
                    output = result.USER_PROFILE;
                    kiloes = _closure1_slot7;
                    kiloes = output.bind(result)(kiloes);
                    _fun00002_ip = 309; continue _fun00001;
 286:
                    echoed = _closure1_slot6;
                    result = echoed.USER_GUILD_PROFILE;
                    output = sizing;
                    sizing = _closure1_slot7;
                    kiloes = result.bind(echoed)(output, sizing);
 309:
                    michal['url'] = kiloes;
                    michal['body'] = backup;
                    backup = false;
                    michal['rejectWithError'] = backup;
                    michal = golfie.bind(foxtra)(michal);
                    SaveGenerator(address=332);
 330:
                    return michal;
 332:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=6);
                    if(golfie) { _fun00002_ip = 595; continue _fun00001 }
 341:
                    tangon = michal;
                    golfie = michal.ok;
                    if(golfie) { _fun00002_ip = 458; continue _fun00001 }
 353:
                    backup = _closure1_slot0;
                    golfie = _closure1_slot2;
                    foxtra = 9;
                    foxtra = golfie[foxtra];
                    foxtra = backup.bind(report)(foxtra);
                    foxtra = foxtra.APIError;
                    sizing = tangon;
                    backup = foxtra.prototype;
                    backup = Object.create(backup, {constructor: {value: foxtra}});
                    ctrled = backup;
                    source = sizing;
                    foxtra = new ctrled[foxtra](source, update);
                    kiloes = foxtra instanceof Object ? foxtra : backup;
                    foxtra = _closure1_slot1;
                    golfie = golfie[option];
                    backup = foxtra.bind(report)(golfie);
                    foxtra = backup.dispatch;
                    golfie = {};
                    output = 'USER_PROFILE_UPDATE_FAILURE';
                    golfie['type'] = output;
                    sizing = sizing.body;
                    golfie['errors'] = sizing;
                    golfie['apiError'] = kiloes;
                    golfie = foxtra.bind(backup)(golfie);
                    _fun00002_ip = 592; continue _fun00001;
 458:
                    golfie = tangon;
                    golfie = golfie.body;
                    golfie = golfie.profile_effect;
                    romeon = golfie;
                    foxtra = verify == golfie;
                    golfie = undefined;
                    if(foxtra) { _fun00002_ip = 489; continue _fun00001 }
 484:
                    golfie = romeon.id;
 489:
                    offset = golfie;
                    golfie = tangon;
                    golfie = golfie.body;
                    golfie = golfie.profile_effect;
                    oscard = golfie;
                    golfie = verify == golfie;
                    verify = undefined;
                    if(golfie) { _fun00002_ip = 524; continue _fun00001 }
 518:
                    verify = oscard.expires_at;
 524:
                    golfie = _closure1_slot1;
                    oscard = _closure1_slot2;
                    oscard = oscard[option];
                    option = golfie.bind(report)(oscard);
                    golfie = option.dispatch;
                    oscard = {};
                    romeon = 'USER_PROFILE_UPDATE_SUCCESS';
                    oscard['type'] = romeon;
                    oscard['userId'] = yankee;
                    oscard['profileEffectId'] = offset;
                    oscard['profileEffectExpiresAt'] = verify;
                    verify = tangon;
                    update = verify.body;
                    source = oscard;
                    verify = copyDataProperties(source, update);
                    oscard = golfie.bind(option)(oscard);
 592: // try_end0
                    return tangon;
 595:
                    return michal;
 598: // catch_target0
                    CatchBlockStart(arg_register=1);
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 9;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(report)(tangon);
                    tangon = tangon.APIError;
                    oscard = tangon.prototype;
                    oscard = Object.create(oscard, {constructor: {value: tangon}});
                    ctrled = oscard;
                    source = michal;
                    tangon = new ctrled[tangon](source, update);
                    oscard = tangon instanceof Object ? tangon : oscard;
                    tangon = _closure1_slot1;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    report = tangon.bind(report)(zuuluu);
                    tangon = report.dispatch;
                    zuuluu = {};
                    golfie = 'USER_PROFILE_UPDATE_FAILURE';
                    zuuluu['type'] = golfie;
                    golfie = {};
                    zuuluu['errors'] = golfie;
                    zuuluu['apiError'] = oscard;
                    zuuluu = tangon.bind(report)(zuuluu);
                    return michal;
 700:
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
    tangon = function(argFoo) { // Original name: setPendingBanner
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER';
        michal['type'] = report;
        report = argFoo;
        michal['banner'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot12 = tangon;
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
    report = oscard.bind(entity)(report);
    option = report.AnalyticEvents;
    var _closure1_slot5 = option;
    option = report.Endpoints;
    var _closure1_slot6 = option;
    report = report.ME;
    var _closure1_slot7 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    option = report.AnalyticsPremiumFeatureTiers;
    var _closure1_slot8 = option;
    report = report.AnalyticsPremiumFeatureNames;
    var _closure1_slot9 = report;
    report = 11;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/user_profile/UserProfileActionCreators.tsx';
    report = oscard.bind(golfie)(report);
    report = function() { // Original name: saveProfileChanges
        entity = undefined;
        tangon = _closure1_slot11;
        zuuluu = tangon.apply;
        entity = arguments;
        michal = entity;
        entity = this;
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['saveProfileChanges'] = report;
    report = function(argFoo, argBar) { // Original name: pinUserProfileBadgesOnClient
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot4;
            entity = zuuluu.getCurrentUser;
            tangon = entity.bind(zuuluu)();
            zuuluu = null;
            oscard = zuuluu == tangon;
            entity = undefined;
            report = undefined;
            if(oscard) { _fun00004_ip = 34; continue _fun00003 }
 29:
            report = tangon.id;
 34:
            if(!(zuuluu != report)) { _fun00004_ip = 100; continue _fun00003 }
 38:
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 7;
            michal = tangon[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            oscard = 'USER_PROFILE_PIN_BADGES_ON_CLIENT';
            michal['type'] = oscard;
            oscard = argFoo;
            michal['badges'] = oscard;
            oscard = argBar;
            michal['ttlInSeconds'] = oscard;
            michal['userId'] = report;
            michal = zuuluu.bind(tangon)(michal);
 100:
            return entity;
        }
    };
    zuuluu['pinUserProfileBadgesOnClient'] = report;
    report = function() { // Original name: resetPendingProfileChanges
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES';
        michal['type'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['resetPendingProfileChanges'] = report;
    report = function(argFoo) { // Original name: setPendingBannerUrl
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            zuuluu = null;
            report = zuuluu == tangon;
            entity = undefined;
            oscard = undefined;
            if(report) { _fun00006_ip = 33; continue _fun00005 }
 18:
            golfie = tangon.startsWith;
            report = 'https:';
            oscard = golfie.bind(tangon)(report);
 33:
            report = true;
            if(!(report !== oscard)) { _fun00006_ip = 57; continue _fun00005 }
 39:
            if(!(zuuluu != tangon)) { _fun00006_ip = 115; continue _fun00005 }
 43:
            zuuluu = _closure1_slot12;
            zuuluu = zuuluu.bind(entity)(tangon);
            _fun00006_ip = 115; continue _fun00005;
 57:
            zuuluu = global;
            zuuluu = zuuluu.fetch;
            report = zuuluu.bind(entity)(tangon);
            tangon = report.then;
            zuuluu = function(argFoo) {
                michal = argFoo;
                entity = michal.blob;
                entity = entity.bind(michal)();
                return entity;
            };
            report = tangon.bind(report)(zuuluu);
            tangon = report.then;
            zuuluu = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.readFileAsBase64;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = tangon.bind(report)(zuuluu);
            zuuluu = tangon.then;
            michal = function(argFoo) {
                zuuluu = _closure1_slot12;
                entity = undefined;
                michal = argFoo;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            michal = zuuluu.bind(tangon)(michal);
 115:
            return entity;
        }
    };
    zuuluu['setPendingBannerUrl'] = report;
    zuuluu['setPendingBanner'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingBio
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_BIO';
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
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS';
        michal['type'] = report;
        report = argFoo;
        michal['pronouns'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingPronouns'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingAccentColor
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR';
        michal['type'] = report;
        report = argFoo;
        michal['color'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingAccentColor'] = tangon;
    tangon = function(argFoo) { // Original name: setPendingThemeColors
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 7;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.dispatch;
        michal = {};
        report = 'USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS';
        michal['type'] = report;
        report = argFoo;
        michal['themeColors'] = report;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['setPendingThemeColors'] = tangon;
    tangon = function(argFoo) { // Original name: setTryItOutAvatar
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.dispatch;
        zuuluu = {};
        oscard = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR';
        zuuluu['type'] = oscard;
        oscard = argFoo;
        zuuluu['avatar'] = oscard;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot9;
        michal = michal.ANIMATED_AVATAR;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['setTryItOutAvatar'] = tangon;
    tangon = function(argFoo) { // Original name: setTryItOutAvatarDecoration
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.dispatch;
        zuuluu = {};
        oscard = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION';
        zuuluu['type'] = oscard;
        oscard = argFoo;
        zuuluu['avatarDecoration'] = oscard;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot9;
        michal = michal.AVATAR_DECORATION;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['setTryItOutAvatarDecoration'] = tangon;
    tangon = function(argFoo) { // Original name: setTryItOutProfileEffect
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.dispatch;
        zuuluu = {};
        oscard = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID';
        zuuluu['type'] = oscard;
        oscard = argFoo;
        zuuluu['profileEffectId'] = oscard;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot9;
        michal = michal.PROFILE_EFFECT;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['setTryItOutProfileEffect'] = tangon;
    tangon = function(argFoo) { // Original name: setTryItOutBanner
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.dispatch;
        zuuluu = {};
        oscard = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER';
        zuuluu['type'] = oscard;
        oscard = argFoo;
        zuuluu['banner'] = oscard;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot9;
        michal = michal.PROFILE_BANNER;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['setTryItOutBanner'] = tangon;
    tangon = function(argFoo) { // Original name: setTryItOutThemeColors
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.dispatch;
        zuuluu = {};
        oscard = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS';
        zuuluu['type'] = oscard;
        oscard = argFoo;
        zuuluu['themeColors'] = oscard;
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot9;
        michal = michal.PROFILE_THEME_COLOR;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['setTryItOutThemeColors'] = tangon;
    michal = function(argFoo) { // Original name: setTryItOutPreset
        tangon = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        report = tangon.bind(entity)(zuuluu);
        tangon = report.dispatch;
        zuuluu = {};
        oscard = 'USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PRESET';
        zuuluu['type'] = oscard;
        golfie = argFoo;
        option = zuuluu;
        oscard = copyDataProperties(option, golfie);
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot10;
        michal = _closure1_slot9;
        michal = michal.PRESET;
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    zuuluu['setTryItOutPreset'] = michal;
    return entity;
})();
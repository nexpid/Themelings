// app/modules/user_profile/native/GuildProfileEditForm.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: EditGuildProfileBanner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            output = entity.user;
            var _closure2_slot0 = output;
            sizing = entity.displayProfile;
            foxtrot = entity.guildMember;
            mike = entity.guildMemberProfile;
            var _closure2_slot1 = mike;
            backup = entity.pendingAvatar;
            kilo = entity.pendingBanner;
            var _closure2_slot2 = kilo;
            romeo = entity.pendingThemeColors;
            options = entity.disabled;
            oscar = _closure1_slot1;
            result = _closure1_slot2;
            entity = 11;
            entity = result[entity];
            tango = undefined;
            mike = oscar.bind(tango)(entity);
            entity = mike.canUsePremiumGuildMemberProfile;
            yankee = entity.bind(mike)(output);
            var _closure2_slot3 = yankee;
            entity = 12;
            mike = result[entity];
            zulu = oscar.bind(tango)(mike);
            mike = 13;
            mike = result[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.EDIT_BANNER;
            mike = zulu.bind(tango)(mike);
            report = mike.analyticsLocations;
            var _closure2_slot4 = report;
            zulu = _closure1_slot19;
            mike = _closure1_slot0;
            entity = result[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golf = _closure1_slot19;
            report = 14;
            report = result[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['user'] = output;
            report['displayProfile'] = sizing;
            report['pendingBanner'] = kilo;
            report['pendingAvatar'] = backup;
            report['pendingThemeColors'] = romeo;
            romeo = false;
            report['showProfilePreviewButton'] = romeo;
            if(!yankee) { _fun00002_ip = 235; continue _fun00001 }
 229:
            romeo = null;
            yankee = romeo != foxtrot;
 235:
            report['showEditButton'] = yankee;
            offset = function() { // Original name: onPressEdit
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot3;
                    zulu = _closure1_slot1;
                    verify = _closure1_slot2;
                    if(mike) { _fun00004_ip = 134; continue _fun00003 }
 21:
                    mike = 21;
                    tango = verify[mike];
                    mike = undefined;
                    report = zulu.bind(mike)(tango);
                    tango = report.handleShowUpsellAlert;
                    mike = {};
                    oscar = _closure1_slot16;
                    oscar = oscar.PREMIUM_GUILD_PROFILE;
                    mike['initialUpsellKey'] = oscar;
                    oscar = {};
                    golf = _closure1_slot12;
                    golf = golf.PREMIUM_GUILD_MEMBER_PROFILE;
                    oscar['section'] = golf;
                    golf = _closure1_slot11;
                    golf = golf.EDIT_GUILD_PROFILE_BANNER;
                    oscar['object'] = golf;
                    mike['analyticsLocation'] = oscar;
                    oscar = _closure2_slot4;
                    mike['analyticsLocations'] = oscar;
                    oscar = {};
                    golf = _closure1_slot17;
                    golf = golf.PREMIUM_GUILD_IDENTITY_MODAL;
                    oscar['type'] = golf;
                    mike['analyticsProperties'] = oscar;
                    mike = tango.bind(report)(mike);
                    _fun00004_ip = 363; continue _fun00003;
 134:
                    mike = 15;
                    mike = verify[mike];
                    golf = undefined;
                    report = zulu.bind(golf)(mike);
                    tango = report.openLazy;
                    options = _closure1_slot0;
                    mike = 17;
                    mike = verify[mike];
                    oscar = options.bind(golf)(mike);
                    mike = 16;
                    zulu = verify[mike];
                    mike = verify.paths;
                    zulu = oscar.bind(golf)(zulu, mike);
                    mike = {};
                    oscar = _closure2_slot0;
                    mike['user'] = oscar;
                    oscar = _closure2_slot4;
                    mike['analyticsLocations'] = oscar;
                    oscar = 18;
                    oscar = verify[oscar];
                    offset = options.bind(golf)(oscar);
                    verify = offset.showRemoveBanner;
                    options = _closure2_slot2;
                    romeo = _closure2_slot1;
                    oscar = null;
                    romeo = oscar == romeo;
                    oscar = undefined;
                    if(romeo) { _fun00004_ip = 254; continue _fun00003 }
 244:
                    yankee = _closure2_slot1;
                    oscar = yankee.banner;
 254:
                    oscar = verify.bind(offset)(options, oscar);
                    mike['showRemoveBanner'] = oscar;
                    oscar = _closure1_slot0;
                    options = _closure1_slot2;
                    entity = 19;
                    verify = options[entity];
                    verify = oscar.bind(golf)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    entity = options[entity];
                    entity = oscar.bind(golf)(entity);
                    entity = entity.t;
                    entity = entity.jHlJNT;
                    entity = verify.bind(offset)(entity);
                    mike['removeText'] = entity;
                    entity = 20;
                    entity = options[entity];
                    entity = oscar.bind(golf)(entity);
                    entity = entity.setPendingBanner;
                    mike['onBannerChange'] = entity;
                    entity = 'Change Banner';
                    entity = tango.bind(report)(zulu, entity, mike);
 363:
                    entity = undefined;
                    return entity;
                }
            };
            report['onPressEdit'] = offset;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 19;
            offset = foxtrot[verify];
            offset = romeo.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(tango)(verify);
            verify = verify.t;
            verify = verify.95hPAQ;
            verify = offset.bind(yankee)(verify);
            report['editButtonAccessibilityLabel'] = verify;
            report['editDisabled'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = ['nick', 'bio'];
    var _closure1_slot3 = entity;
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
    var _closure1_slot4 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.AnalyticsObjects;
    var _closure1_slot11 = golf;
    options = tango.AnalyticsPages;
    golf = tango.AnalyticsSections;
    var _closure1_slot12 = golf;
    verify = tango.BIO_MAX_LENGTH;
    var _closure1_slot13 = verify;
    verify = tango.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot14 = verify;
    verify = tango.PRONOUNS_MAX_LENGTH;
    var _closure1_slot15 = verify;
    tango = tango.UpsellTypes;
    var _closure1_slot16 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumUpsellTypes;
    var _closure1_slot17 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.KEYBOARD_DELAY_MS;
    var _closure1_slot18 = tango;
    tango = 10;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot19 = verify;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.Fragment;
    var _closure1_slot20 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot21 = tango;
    tango = {};
    options = options.USER_SETTINGS;
    tango['page'] = options;
    golf = golf.SETTINGS_CUSTOMIZE_PROFILE;
    tango['section'] = golf;
    var _closure1_slot22 = tango;
    tango = 51;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/GuildProfileEditForm.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: GuildProfileEditForm
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            variable42 = entity.user;
            var _closure2_slot0 = variable42;
            report = undefined;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            entity = 22;
            entity = tango[entity];
            entity = zulu.bind(report)(entity);
            lima = entity.bind(report)();
            entity = 23;
            entity = tango[entity];
            entity = zulu.bind(report)(entity);
            sizing = entity.bind(report)();
            oscar = _closure1_slot0;
            entity = 24;
            entity = tango[entity];
            options = oscar.bind(report)(entity);
            golf = options.useStateFromStoresObject;
            entity = _closure1_slot8;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                entity = {};
                mike = _closure1_slot8;
                zulu = mike.keyboardOpen;
                entity['keyboardOpen'] = zulu;
                mike = mike.keyboardHeight;
                entity['keyboardHeight'] = mike;
                return entity;
            };
            mike = golf.bind(options)(mike, entity);
            entity = mike.keyboardOpen;
            foxtrot = mike.keyboardHeight;
            golf = _closure1_slot5;
            mike = golf.useRef;
            variable49 = null;
            romeo = mike.bind(golf)(variable49);
            var _closure2_slot1 = romeo;
            mike = 25;
            mike = tango[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.bind(report)();
            echo = mike.bottom;
            mike = 26;
            mike = tango[mike];
            options = oscar.bind(report)(mike);
            golf = options.useShouldEnableMobilePerGuildCollectiblesEdit;
            mike = 'GuildProfileEditForm';
            sierra = golf.bind(options)(mike);
            mike = 27;
            mike = tango[mike];
            mike = zulu.bind(report)(mike);
            mike = mike.bind(report)();
            variable41 = mike.guild;
            var _closure2_slot2 = variable41;
            golf = mike.errors;
            variable45 = mike.isDisabled;
            variable57 = mike.pendingNickname;
            variable37 = mike.pendingAvatar;
            sequence = mike.pendingBanner;
            variable36 = mike.pendingThemeColors;
            variable53 = mike.pendingPronouns;
            variable48 = mike.pendingBio;
            variable44 = mike.pendingAvatarDecoration;
            variable40 = mike.pendingProfileEffectId;
            mike = 28;
            options = tango[mike];
            yankee = oscar.bind(report)(options);
            offset = yankee.useStateFromStores;
            options = _closure1_slot7;
            verify = new Array(1);
            verify[0] = options;
            options = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zulu = _closure2_slot2;
                    entity = null;
                    zulu = entity != zulu;
                    if(!zulu) { _fun00008_ip = 53; continue _fun00007 }
 16:
                    report = _closure1_slot7;
                    tango = report.getMember;
                    zulu = _closure2_slot2;
                    zulu = zulu.id;
                    mike = _closure2_slot0;
                    mike = mike.id;
                    entity = tango.bind(report)(zulu, mike);
 53:
                    return entity;
                }
            };
            target = offset.bind(yankee)(verify, options);
            var _closure2_slot3 = target;
            mike = tango[mike];
            verify = oscar.bind(report)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot9;
            oscar = new Array(1);
            oscar[0] = mike;
            mike = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot2;
                    golf = null;
                    mike = golf != entity;
                    entity = null;
                    if(!mike) { _fun00010_ip = 68; continue _fun00009 }
 18:
                    report = _closure1_slot9;
                    tango = report.getGuildMemberProfile;
                    mike = _closure2_slot0;
                    zulu = mike.id;
                    mike = _closure2_slot2;
                    golf = golf == mike;
                    mike = undefined;
                    if(golf) { _fun00010_ip = 62; continue _fun00009 }
 53:
                    oscar = _closure2_slot2;
                    mike = oscar.id;
 62:
                    entity = tango.bind(report)(zulu, mike);
 68:
                    return entity;
                }
            };
            config = options.bind(verify)(oscar, mike);
            var _closure2_slot4 = config;
            mike = 29;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = variable42.id;
            oscar = variable49 == variable41;
            mike = undefined;
            if(oscar) { _fun00006_ip = 405; continue _fun00005 }
 400:
            mike = variable41.id;
 405:
            variable39 = tango.bind(report)(zulu, mike);
            zulu = _closure1_slot0;
            tango = _closure1_slot2;
            mike = 30;
            mike = tango[mike];
            oscar = zulu.bind(report)(mike);
            mike = oscar.useCustomStatusActivity;
            variable50 = mike.bind(oscar)();
            mike = 31;
            mike = tango[mike];
            oscar = zulu.bind(report)(mike);
            mike = oscar.useGuildProfilePermissions;
            mike = mike.bind(oscar)(variable41);
            variable54 = mike.canEditNickname;
            oscar = _closure1_slot1;
            mike = 11;
            mike = tango[mike];
            oscar = oscar.bind(report)(mike);
            mike = oscar.canUsePremiumGuildMemberProfile;
            equality = mike.bind(oscar)(variable42);
            mike = 32;
            mike = tango[mike];
            tango = zulu.bind(report)(mike);
            zulu = tango.canResetThemeColors;
            oscar = variable49 == config;
            mike = undefined;
            if(oscar) { _fun00006_ip = 530; continue _fun00005 }
 524:
            mike = config.themeColors;
 530:
            quebec = zulu.bind(tango)(variable36, mike);
            offset = !equality;
            if(!offset) { _fun00006_ip = 545; continue _fun00005 }
 542:
            offset = !entity;
 545:
            mike = variable49 == target;
            entity = undefined;
            if(mike) { _fun00006_ip = 560; continue _fun00005 }
 554:
            entity = target.nick;
 560:
            mike = variable49 != entity;
            status = '';
            variable56 = status;
            if(!mike) { _fun00006_ip = 577; continue _fun00005 }
 574:
            variable56 = entity;
 577:
            mike = variable49 == variable39;
            entity = undefined;
            if(mike) { _fun00006_ip = 592; continue _fun00005 }
 586:
            entity = variable39.pronouns;
 592:
            mike = variable49 != entity;
            variable52 = status;
            if(!mike) { _fun00006_ip = 605; continue _fun00005 }
 602:
            variable52 = entity;
 605:
            _closure2_slot5 = variable52;
            mike = variable49 == variable39;
            entity = undefined;
            if(mike) { _fun00006_ip = 624; continue _fun00005 }
 618:
            entity = variable39.bio;
 624:
            mike = variable49 != entity;
            variable47 = status;
            if(!mike) { _fun00006_ip = 637; continue _fun00005 }
 634:
            variable47 = entity;
 637:
            _closure2_slot6 = variable47;
            mike = _closure1_slot1;
            zulu = _closure1_slot2;
            entity = 12;
            entity = zulu[entity];
            tango = mike.bind(report)(entity);
            entity = 13;
            entity = zulu[entity];
            entity = mike.bind(report)(entity);
            oscar = entity.USER_SETTINGS;
            entity = new Array(1);
            entity[0] = oscar;
            entity = tango.bind(report)(entity);
            entity = entity.analyticsLocations;
            _closure2_slot7 = entity;
            entity = 33;
            entity = zulu[entity];
            mike = mike.bind(report)(entity);
            entity = {};
            entity['user'] = variable42;
            entity['displayProfile'] = variable39;
            entity['pendingThemeColors'] = variable36;
            entity = mike.bind(report)(entity);
            oscar = entity.theme;
            variable38 = entity.primaryColor;
            source = entity.secondaryColor;
            mike = _closure1_slot0;
            entity = 34;
            entity = zulu[entity];
            zulu = mike.bind(report)(entity);
            mike = zulu.useUserProfileColors;
            entity = {};
            entity['theme'] = oscar;
            entity['primaryColor'] = variable38;
            entity['secondaryColor'] = source;
            entity = mike.bind(zulu)(entity);
            record = entity.gradientFallbackBackground;
            update = entity.gradientSecondaryBackground;
            whiskey = entity.containerBackground;
            entity = entity.avatarBackground;
            variable59 = 0;
            mike = 0;
            if(!offset) { _fun00006_ip = 832; continue _fun00005 }
 828:
            mike = _closure1_slot10;
 832:
            papa = echo + mike;
            variable61 = {};
            variable61['backgroundColor'] = entity;
            mike = golf.nick;
            entity = golf.bio;
            tango = _closure1_slot4;
            zulu = _closure1_slot3;
            tango = tango.bind(report)(golf, zulu);
            zulu = variable49 == mike;
            variable58 = undefined;
            if(zulu) { _fun00006_ip = 881; continue _fun00005 }
 877:
            variable58 = mike[variable59];
 881:
            mike = golf.pronouns;
            zulu = variable49 == mike;
            variable55 = undefined;
            if(zulu) { _fun00006_ip = 900; continue _fun00005 }
 896:
            variable55 = mike[variable59];
 900:
            mike = variable49 == entity;
            variable51 = undefined;
            if(mike) { _fun00006_ip = 913; continue _fun00005 }
 909:
            variable51 = entity[variable59];
 913:
            mike = global;
            zulu = mike.parseInt;
            entity = variable49 == golf;
            options = undefined;
            if(entity) { _fun00006_ip = 935; continue _fun00005 }
 930:
            options = golf.code;
 935:
            verify = variable49 != options;
            entity = status;
            if(!verify) { _fun00006_ip = 948; continue _fun00005 }
 945:
            entity = options;
 948:
            options = zulu.bind(report)(entity);
            zulu = 200005;
            entity = null;
            if(!(zulu === options)) { _fun00006_ip = 982; continue _fun00005 }
 965:
            options = variable49 == golf;
            zulu = undefined;
            if(options) { _fun00006_ip = 979; continue _fun00005 }
 974:
            zulu = golf.message;
 979:
            entity = zulu;
 982:
            zulu = mike.Object;
            mike = zulu.keys;
            mike = mike.bind(zulu)(tango);
            mike = mike.length;
            mike = mike > variable59;
            variable60 = null;
            if(!mike) { _fun00006_ip = 1094; continue _fun00005 }
 1012:
            mike = variable49 == variable51;
            variable60 = null;
            if(!mike) { _fun00006_ip = 1094; continue _fun00005 }
 1021:
            mike = variable49 == variable58;
            variable60 = null;
            if(!mike) { _fun00006_ip = 1094; continue _fun00005 }
 1030:
            if(!(variable49 == entity)) { _fun00006_ip = 1091; continue _fun00005 }
 1034:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 19;
            zulu = options[mike];
            zulu = golf.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = options[mike];
            mike = golf.bind(report)(mike);
            mike = mike.t;
            mike = mike.s35OuL;
            entity = zulu.bind(tango)(mike);
 1091:
            variable60 = entity;
 1094:
            variable43 = function() { // Original name: handleBlur
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot1;
                    tango = entity.current;
                    entity = null;
                    if(!(entity != tango)) { _fun00012_ip = 35; continue _fun00011 }
 18:
                    zulu = tango.scrollToPosition;
                    mike = 0;
                    entity = true;
                    entity = zulu.bind(tango)(mike, mike, entity);
 35:
                    entity = undefined;
                    return entity;
                }
            };
            mike = variable49 == variable41;
            entity = null;
            if(mike) { _fun00006_ip = 2984; continue _fun00005 }
 1113:
            tango = _closure1_slot19;
            yankee = _closure1_slot0;
            variable63 = _closure1_slot2;
            mike = 36;
            mike = variable63[mike];
            mike = yankee.bind(report)(mike);
            zulu = mike.ThemeContextProvider;
            mike = {};
            mike['theme'] = oscar;
            mike['primaryColor'] = variable38;
            mike['secondaryColor'] = source;
            options = _closure1_slot21;
            golf = _closure1_slot6;
            oscar = {};
            output = sizing.container;
            verify = new Array(2);
            verify[0] = output;
            output = {};
            output['backgroundColor'] = update;
            verify[1] = output;
            oscar['style'] = verify;
            verify = 37;
            verify = variable63[verify];
            verify = yankee.bind(report)(verify);
            yankee = verify.KeyboardAwareScrollView;
            verify = {'enableOnAndroid': true, 'enableAutomaticScroll': true, 'extraHeight': null, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable46 = true;
            verify['extraHeight'] = foxtrot;
            foxtrot = _closure1_slot18;
            verify['keyboardOpeningTime'] = foxtrot;
            variable62 = false;
            verify['ref'] = romeo;
            foxtrot = _closure1_slot19;
            romeo = {};
            output = sizing.bounceOffset;
            romeo['style'] = output;
            foxtrot = foxtrot.bind(report)(golf, romeo);
            romeo = new Array(2);
            romeo[0] = foxtrot;
            context = _closure1_slot1;
            vacuum = 38;
            foxtrot = variable63[vacuum];
            output = context.bind(report)(foxtrot);
            foxtrot = {};
            foxtrot['fallbackBackground'] = record;
            foxtrot['primaryColor'] = variable38;
            foxtrot['secondaryColor'] = source;
            result = {};
            result['backgroundColor'] = update;
            foxtrot['containerStyle'] = result;
            control = _closure1_slot19;
            update = _closure1_slot23;
            result = {};
            result['user'] = variable42;
            result['displayProfile'] = variable39;
            result['guildMember'] = target;
            result['guildMemberProfile'] = config;
            result['pendingAvatar'] = variable37;
            result['pendingBanner'] = sequence;
            result['pendingThemeColors'] = variable36;
            result['disabled'] = variable45;
            update = control.bind(report)(update, result);
            result = new Array(2);
            result[0] = update;
            update = {};
            sequence = _closure1_slot19;
            control = {};
            target = lima.avatarBackground;
            config = new Array(4);
            config[0] = target;
            target = lima.avatarPosition;
            config[1] = target;
            target = sizing.avatarContainer;
            config[2] = target;
            config[3] = variable61;
            control['style'] = config;
            target = _closure1_slot19;
            config = 39;
            config = variable63[config];
            context = context.bind(report)(config);
            config = {};
            variable63 = variable45;
            if(variable45) { _fun00006_ip = 1462; continue _fun00005 }
 1459:
            variable63 = !equality;
 1462:
            config['disabled'] = variable63;
            config['disableStatus'] = variable62;
            variable63 = variable49 == variable41;
            variable62 = undefined;
            if(variable63) { _fun00006_ip = 1485; continue _fun00005 }
 1480:
            variable62 = variable41.id;
 1485:
            config['guildId'] = variable62;
            config['statusStyle'] = variable61;
            config = target.bind(report)(context, config);
            control['children'] = config;
            sequence = sequence.bind(report)(golf, control);
            control = new Array(2);
            control[0] = sequence;
            config = _closure1_slot21;
            context = _closure1_slot1;
            target = _closure1_slot2;
            vacuum = target[vacuum];
            sequence = context.bind(report)(vacuum);
            vacuum = {};
            vacuum['fallbackBackground'] = record;
            vacuum['primaryColor'] = variable38;
            vacuum['secondaryColor'] = source;
            record = lima.profileContent;
            source = new Array(2);
            source[0] = record;
            record = {};
            record['paddingTop'] = variable59;
            record['paddingBottom'] = papa;
            source[1] = record;
            vacuum['containerStyle'] = source;
            papa = _closure1_slot19;
            source = 40;
            source = target[source];
            record = context.bind(report)(source);
            source = {};
            source['customStatusActivity'] = variable50;
            variable38 = variable49 != variable38;
            source['hasCustomProfileTheme'] = variable38;
            variable38 = lima.customStatusBubble;
            source['style'] = variable38;
            lima = lima.emojiOnlyCustomStatusBubble;
            source['emojiOnlyStyle'] = lima;
            source['editEnabled'] = variable46;
            source = papa.bind(report)(record, source);
            record = new Array(3);
            record[0] = source;
            papa = _closure1_slot19;
            source = 41;
            source = target[source];
            context = context.bind(report)(source);
            source = {};
            source['user'] = variable42;
            target = variable56;
            if(!(variable49 != variable57)) { _fun00006_ip = 1695; continue _fun00005 }
 1692:
            target = variable57;
 1695:
            source['displayName'] = target;
            target = variable52;
            if(!(variable49 != variable53)) { _fun00006_ip = 1709; continue _fun00005 }
 1706:
            target = variable53;
 1709:
            source['pronouns'] = target;
            source['badgeContainerBackground'] = whiskey;
            source = papa.bind(report)(context, source);
            record[1] = source;
            target = _closure1_slot21;
            papa = _closure1_slot6;
            context = {};
            lima = sizing.formContainer;
            source = new Array(2);
            source[0] = lima;
            lima = {};
            lima['backgroundColor'] = whiskey;
            whiskey = 20;
            lima['paddingBottom'] = whiskey;
            source[1] = lima;
            context['style'] = source;
            lima = variable49 != variable60;
            source = null;
            if(!lima) { _fun00006_ip = 1873; continue _fun00005 }
 1784:
            source = null;
            if(!(status !== variable60)) { _fun00006_ip = 1873; continue _fun00005 }
 1790:
            whiskey = _closure1_slot19;
            lima = _closure1_slot6;
            status = {};
            variable38 = sizing.errorContainer;
            status['style'] = variable38;
            variable59 = _closure1_slot19;
            variable50 = _closure1_slot0;
            variable61 = _closure1_slot2;
            variable38 = 35;
            variable38 = variable61[variable38];
            variable38 = variable50.bind(report)(variable38);
            variable50 = variable38.Text;
            variable38 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable38['children'] = variable60;
            variable38 = variable59.bind(report)(variable50, variable38);
            status['children'] = variable38;
            source = whiskey.bind(report)(lima, status);
 1873:
            status = new Array(6);
            status[0] = source;
            variable50 = _closure1_slot19;
            lima = _closure1_slot1;
            variable59 = _closure1_slot2;
            whiskey = 42;
            source = variable59[whiskey];
            variable38 = lima.bind(report)(source);
            lima = {};
            variable62 = _closure1_slot0;
            source = 19;
            variable60 = variable59[source];
            variable60 = variable62.bind(report)(variable60);
            variable61 = variable60.intl;
            variable60 = variable61.string;
            variable59 = variable59[source];
            variable59 = variable62.bind(report)(variable59);
            variable59 = variable59.t;
            variable59 = variable59.me1lRk;
            variable59 = variable60.bind(variable61)(variable59);
            lima['label'] = variable59;
            lima['errorMessage'] = variable58;
            if(!(variable49 != variable57)) { _fun00006_ip = 1976; continue _fun00005 }
 1973:
            variable56 = variable57;
 1976:
            lima['value'] = variable56;
            variable56 = function(argFoo) { // Original name: onChange
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    mike = '';
                    if(!(mike === entity)) { _fun00014_ip = 48; continue _fun00013 }
 11:
                    mike = _closure2_slot3;
                    zulu = null;
                    oscar = zulu == mike;
                    mike = undefined;
                    if(oscar) { _fun00014_ip = 39; continue _fun00013 }
 29:
                    tango = _closure2_slot3;
                    mike = tango.nick;
 39:
                    mike = zulu == mike;
                    report = undefined;
                    if(mike) { _fun00014_ip = 51; continue _fun00013 }
 48:
                    report = entity;
 51:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 32;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.setNewPendingNickname;
                    golf = _closure2_slot3;
                    mike = null;
                    golf = mike == golf;
                    mike = undefined;
                    if(golf) { _fun00014_ip = 110; continue _fun00013 }
 100:
                    oscar = _closure2_slot3;
                    mike = oscar.nick;
 110:
                    mike = zulu.bind(tango)(report, mike);
                    return entity;
                }
            };
            lima['onChange'] = variable56;
            variable57 = _closure1_slot1;
            variable58 = _closure1_slot2;
            variable56 = 43;
            variable56 = variable58[variable56];
            variable57 = variable57.bind(report)(variable56);
            variable56 = variable57.getName;
            variable56 = variable56.bind(variable57)(variable42);
            lima['placeholder'] = variable56;
            variable56 = _closure1_slot14;
            lima['maxLength'] = variable56;
            variable54 = !variable54;
            if(variable54) { _fun00006_ip = 2046; continue _fun00005 }
 2043:
            variable54 = variable45;
 2046:
            lima['disabled'] = variable54;
            lima['onBlur'] = variable43;
            lima = variable50.bind(report)(variable38, lima);
            status[1] = lima;
            variable50 = _closure1_slot19;
            variable38 = _closure1_slot1;
            variable54 = _closure1_slot2;
            lima = variable54[whiskey];
            variable38 = variable38.bind(report)(lima);
            lima = {};
            variable57 = _closure1_slot0;
            variable56 = variable54[source];
            variable56 = variable57.bind(report)(variable56);
            variable59 = variable56.intl;
            variable58 = variable59.string;
            variable56 = variable54[source];
            variable56 = variable57.bind(report)(variable56);
            variable56 = variable56.t;
            variable56 = variable56.+T3RIy;
            variable56 = variable58.bind(variable59)(variable56);
            lima['label'] = variable56;
            lima['errorMessage'] = variable55;
            variable55 = variable54[source];
            variable55 = variable57.bind(report)(variable55);
            variable56 = variable55.intl;
            variable55 = variable56.string;
            variable54 = variable54[source];
            variable54 = variable57.bind(report)(variable54);
            variable54 = variable54.t;
            variable54 = variable54.NZqtIi;
            variable54 = variable55.bind(variable56)(variable54);
            lima['description'] = variable54;
            if(!(variable49 != variable53)) { _fun00006_ip = 2202; continue _fun00005 }
 2199:
            variable52 = variable53;
 2202:
            lima['value'] = variable52;
            variable52 = function(argFoo) { // Original name: onChange
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 32;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.setNewPendingGuildIdentityPronouns;
                mike = _closure2_slot5;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            lima['onChange'] = variable52;
            variable52 = _closure1_slot15;
            lima['maxLength'] = variable52;
            lima['disabled'] = variable45;
            lima['onBlur'] = variable43;
            lima = variable50.bind(report)(variable38, lima);
            status[2] = lima;
            lima = null;
            if(!equality) { _fun00006_ip = 2444; continue _fun00005 }
 2254:
            variable38 = _closure1_slot19;
            equality = _closure1_slot1;
            variable50 = _closure1_slot2;
            whiskey = variable50[whiskey];
            equality = equality.bind(report)(whiskey);
            whiskey = {};
            variable53 = _closure1_slot0;
            variable52 = variable50[source];
            variable52 = variable53.bind(report)(variable52);
            variable55 = variable52.intl;
            variable54 = variable55.string;
            variable52 = variable50[source];
            variable52 = variable53.bind(report)(variable52);
            variable52 = variable52.t;
            variable52 = variable52.NepzEx;
            variable52 = variable54.bind(variable55)(variable52);
            whiskey['label'] = variable52;
            whiskey['errorMessage'] = variable51;
            variable51 = variable50[source];
            variable51 = variable53.bind(report)(variable51);
            variable52 = variable51.intl;
            variable51 = variable52.string;
            variable50 = variable50[source];
            variable50 = variable53.bind(report)(variable50);
            variable50 = variable50.t;
            variable50 = variable50.gYETnp;
            variable50 = variable51.bind(variable52)(variable50);
            whiskey['description'] = variable50;
            if(!(variable49 != variable48)) { _fun00006_ip = 2391; continue _fun00005 }
 2388:
            variable47 = variable48;
 2391:
            whiskey['value'] = variable47;
            variable47 = function(argFoo) { // Original name: onChange
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 32;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.setNewPendingGuildIdentityBio;
                mike = _closure2_slot6;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            whiskey['onChange'] = variable47;
            variable47 = _closure1_slot13;
            whiskey['maxLength'] = variable47;
            variable47 = 5;
            whiskey['numberOfLines'] = variable47;
            whiskey['multiline'] = variable46;
            whiskey['disabled'] = variable45;
            whiskey['onBlur'] = variable43;
            lima = variable38.bind(report)(equality, whiskey);
 2444:
            status[3] = lima;
            equality = _closure1_slot19;
            whiskey = _closure1_slot1;
            variable38 = _closure1_slot2;
            lima = 44;
            lima = variable38[lima];
            whiskey = whiskey.bind(report)(lima);
            lima = {};
            lima['pendingAvatar'] = variable37;
            lima['pendingThemeColors'] = variable36;
            lima['user'] = variable42;
            variable36 = variable41.id;
            lima['guildId'] = variable36;
            variable36 = function(argFoo) { // Original name: onProfileThemeColorsChanged
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 32;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = report.setNewPendingGuildIdentityThemeColors;
                    oscar = _closure2_slot4;
                    zulu = null;
                    oscar = zulu == oscar;
                    zulu = undefined;
                    if(oscar) { _fun00016_ip = 59; continue _fun00015 }
 49:
                    mike = _closure2_slot4;
                    zulu = mike.themeColors;
 59:
                    mike = argFoo;
                    mike = tango.bind(report)(mike, zulu);
                    return entity;
                }
            };
            lima['onProfileThemeColorsChanged'] = variable36;
            lima['showResetMenu'] = quebec;
            lima = equality.bind(report)(whiskey, lima);
            status[4] = lima;
            if(!sierra) { _fun00006_ip = 2659; continue _fun00005 }
 2530:
            equality = _closure1_slot21;
            whiskey = _closure1_slot20;
            lima = {};
            variable38 = _closure1_slot19;
            variable37 = _closure1_slot1;
            variable43 = _closure1_slot2;
            quebec = 45;
            quebec = variable43[quebec];
            variable36 = variable37.bind(report)(quebec);
            quebec = {};
            quebec['user'] = variable42;
            variable45 = variable41.id;
            quebec['guildId'] = variable45;
            quebec['pendingAvatarDecoration'] = variable44;
            variable36 = variable38.bind(report)(variable36, quebec);
            quebec = new Array(2);
            quebec[0] = variable36;
            variable38 = _closure1_slot19;
            variable36 = 46;
            variable36 = variable43[variable36];
            variable37 = variable37.bind(report)(variable36);
            variable36 = {};
            variable36['user'] = variable42;
            variable41 = variable41.id;
            variable36['guildId'] = variable41;
            variable36['pendingProfileEffectId'] = variable40;
            variable36['displayProfile'] = variable39;
            variable36 = variable38.bind(report)(variable37, variable36);
            quebec[1] = variable36;
            lima['children'] = quebec;
            sierra = equality.bind(report)(whiskey, lima);
 2659:
            status[5] = sierra;
            context['children'] = status;
            context = target.bind(report)(papa, context);
            record[2] = context;
            vacuum['children'] = record;
            vacuum = config.bind(report)(sequence, vacuum);
            control[1] = vacuum;
            update['children'] = control;
            update = options.bind(report)(golf, update);
            result[1] = update;
            foxtrot['children'] = result;
            foxtrot = options.bind(report)(output, foxtrot);
            romeo[1] = foxtrot;
            verify['children'] = romeo;
            yankee = options.bind(report)(yankee, verify);
            verify = new Array(2);
            verify[0] = yankee;
            if(!offset) { _fun00006_ip = 2960; continue _fun00005 }
 2743:
            foxtrot = _closure1_slot19;
            romeo = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 47;
            yankee = output[yankee];
            romeo = romeo.bind(report)(yankee);
            yankee = {};
            result = sizing.floatingUpsell;
            sizing = new Array(2);
            sizing[0] = result;
            result = {};
            result['bottom'] = echo;
            sizing[1] = result;
            yankee['style'] = sizing;
            update = _closure1_slot0;
            sizing = output[source];
            sizing = update.bind(report)(sizing);
            echo = sizing.intl;
            result = echo.string;
            sizing = output[source];
            sizing = update.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.pj0XBA;
            sizing = result.bind(echo)(sizing);
            yankee['ctaText'] = sizing;
            kilo = function() { // Original name: onPress
                zulu = _closure1_slot1;
                options = _closure1_slot2;
                entity = 48;
                mike = options[entity];
                entity = undefined;
                report = zulu.bind(entity)(mike);
                tango = report.pushLazy;
                golf = _closure1_slot0;
                mike = 17;
                mike = options[mike];
                oscar = golf.bind(entity)(mike);
                mike = 49;
                zulu = options[mike];
                mike = options.paths;
                zulu = oscar.bind(entity)(zulu, mike);
                mike = {};
                oscar = {};
                yankee = _closure1_slot22;
                romeo = oscar;
                offset = copyDataProperties(romeo, yankee);
                verify = _closure1_slot11;
                offset = verify.BUTTON_CTA;
                verify = 'object';
                oscar[verify] = offset;
                mike['analyticsLocation'] = oscar;
                oscar = _closure2_slot7;
                mike['analyticsLocations'] = oscar;
                oscar = 50;
                oscar = options[oscar];
                oscar = golf.bind(entity)(oscar);
                oscar = oscar.PremiumFeatureCardOrder;
                oscar = oscar.TIER_2_LEADING;
                mike['premiumFeatureCardOrder'] = oscar;
                mike = tango.bind(report)(zulu, mike);
                return entity;
            };
            yankee['onPress'] = kilo;
            sizing = _closure1_slot19;
            backup = 35;
            backup = output[backup];
            backup = update.bind(report)(backup);
            kilo = backup.Text;
            backup = {};
            result = 'text-sm/normal';
            backup['variant'] = result;
            result = output[source];
            result = update.bind(report)(result);
            echo = result.intl;
            result = echo.string;
            output = output[source];
            output = update.bind(report)(output);
            output = output.t;
            output = output.YIZS5O;
            output = result.bind(echo)(output);
            backup['children'] = output;
            backup = sizing.bind(report)(kilo, backup);
            yankee['children'] = backup;
            offset = foxtrot.bind(report)(romeo, yankee);
 2960:
            verify[1] = offset;
            oscar['children'] = verify;
            oscar = options.bind(report)(golf, oscar);
            mike['children'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 2984:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
// app/modules/user_profile/native/UserProfileEditForm.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: EditUserProfileBanner
        _fun93080: for(var _fun93080_ip = 0; ; ) switch(_fun93080_ip) {
 0:
            zulu = argFoo;
            output = zulu.user;
            var _closure2_slot0 = output;
            backup = zulu.displayProfile;
            var _closure2_slot1 = backup;
            kilo = zulu.pendingAvatar;
            sizing = zulu.pendingBanner;
            romeo = zulu.pendingAccentColor;
            foxtrot = zulu.pendingThemeColors;
            entity = zulu.tryItOutBanner;
            mike = zulu.isTryItOut;
            var _closure2_slot2 = mike;
            options = zulu.disabled;
            tango = undefined;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            if(!mike) { _fun93080_ip = 114; continue _fun93080 }
 82:
            mike = null;
            if(!(mike == entity)) { _fun93080_ip = 111; continue _fun93080 }
 88:
            zulu = _closure1_slot1;
            report = _closure1_slot2;
            mike = 8;
            mike = report[mike];
            entity = zulu.bind(tango)(mike);
 111:
            sizing = entity;
 114:
            _closure2_slot3 = sizing;
            oscar = _closure1_slot1;
            result = _closure1_slot2;
            entity = 9;
            entity = result[entity];
            mike = oscar.bind(tango)(entity);
            entity = mike.canUseCollectibles;
            yankee = entity.bind(mike)(output);
            entity = 10;
            mike = result[entity];
            zulu = oscar.bind(tango)(mike);
            mike = 11;
            mike = result[mike];
            mike = oscar.bind(tango)(mike);
            mike = mike.EDIT_BANNER;
            mike = zulu.bind(tango)(mike);
            report = mike.analyticsLocations;
            _closure2_slot4 = report;
            zulu = _closure1_slot13;
            mike = _closure1_slot0;
            entity = result[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golf = _closure1_slot13;
            report = 12;
            report = result[report];
            oscar = oscar.bind(tango)(report);
            report = {};
            report['user'] = output;
            report['displayProfile'] = backup;
            report['pendingBanner'] = sizing;
            report['pendingAvatar'] = kilo;
            report['pendingThemeColors'] = foxtrot;
            report['pendingAccentColor'] = romeo;
            foxtrot = null;
            kilo = foxtrot == backup;
            romeo = undefined;
            if(kilo) { _fun93080_ip = 290; continue _fun93080 }
 284:
            romeo = backup.banner;
 290:
            foxtrot = foxtrot != romeo;
            romeo = undefined;
            if(foxtrot) { _fun93080_ip = 303; continue _fun93080 }
 299:
            romeo = _closure1_slot15;
 303:
            report['bannerSafeArea'] = romeo;
            report['showProfilePreviewButton'] = yankee;
            offset = function() { // Original name: onPressEdit
                _fun93081: for(var _fun93081_ip = 0; ; ) switch(_fun93081_ip) {
 0:
                    tango = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 13;
                    zulu = mike[entity];
                    entity = undefined;
                    oscar = tango.bind(entity)(zulu);
                    report = oscar.openLazy;
                    tango = _closure1_slot0;
                    zulu = 15;
                    zulu = mike[zulu];
                    tango = tango.bind(entity)(zulu);
                    zulu = 14;
                    zulu = mike[zulu];
                    mike = mike.paths;
                    tango = tango.bind(entity)(zulu, mike);
                    zulu = {};
                    options = _closure2_slot0;
                    zulu['user'] = options;
                    options = _closure2_slot4;
                    zulu['analyticsLocations'] = options;
                    options = _closure2_slot2;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    verify = 16;
                    verify = yankee[verify];
                    verify = offset.bind(entity)(verify);
                    if(options) { _fun93081_ip = 122; continue _fun93081 }
 114:
                    options = verify.setPendingBanner;
                    _fun93081_ip = 128; continue _fun93081;
 122:
                    options = verify.setTryItOutBanner;
 128:
                    zulu['onBannerChange'] = options;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    golf = 17;
                    golf = verify[golf];
                    offset = options.bind(entity)(golf);
                    verify = offset.showRemoveBanner;
                    options = _closure2_slot3;
                    yankee = _closure2_slot1;
                    golf = null;
                    yankee = golf == yankee;
                    golf = undefined;
                    if(yankee) { _fun93081_ip = 188; continue _fun93081 }
 178:
                    yankee = _closure2_slot1;
                    golf = yankee.banner;
 188:
                    golf = verify.bind(offset)(options, golf);
                    zulu['showRemoveBanner'] = golf;
                    mike = _closure2_slot2;
                    zulu['isTryItOut'] = mike;
                    mike = 'Change Banner';
                    mike = report.bind(oscar)(tango, mike, zulu);
                    return entity;
                }
            };
            report['onPressEdit'] = offset;
            romeo = _closure1_slot0;
            foxtrot = _closure1_slot2;
            verify = 18;
            offset = foxtrot[verify];
            offset = romeo.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtrot[verify];
            verify = romeo.bind(tango)(verify);
            verify = verify.t;
            verify = verify.VqsHy8;
            verify = offset.bind(yankee)(verify);
            report['editButtonAccessibilityLabel'] = verify;
            report['editDisabled'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: UserProfileEditForm
        _fun93082: for(var _fun93082_ip = 0; ; ) switch(_fun93082_ip) {
 0:
            entity = argFoo;
            target = entity.user;
            foxtrot = entity.isTryItOut;
            tango = undefined;
            if(!(foxtrot === tango)) { _fun93082_ip = 24; continue _fun93082 }
 22:
            foxtrot = false;
 24:
            var _closure2_slot0 = foxtrot;
            variable47 = entity.autoFocusElement;
            var _closure2_slot1 = variable47;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            var _closure2_slot14 = tango;
            var _closure2_slot15 = tango;
            var _closure2_slot16 = tango;
            var _closure2_slot17 = tango;
            var _closure2_slot18 = tango;
            var _closure2_slot19 = tango;
            var _closure2_slot20 = tango;
            var _closure2_slot21 = tango;
            var _closure2_slot22 = tango;
            var _closure2_slot23 = tango;
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 19;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            variable40 = entity.bind(tango)();
            entity = 20;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            variable44 = entity.bind(tango)();
            _closure2_slot2 = variable44;
            zulu = _closure1_slot0;
            entity = 21;
            entity = report[entity];
            options = zulu.bind(tango)(entity);
            golf = options.useStateFromStoresObject;
            entity = _closure1_slot6;
            oscar = new Array(1);
            oscar[0] = entity;
            entity = function() {
                entity = {};
                zulu = _closure1_slot6;
                zulu = zulu.keyboardOpen;
                entity['keyboardOpen'] = zulu;
                mike = _closure1_slot6;
                mike = mike.keyboardHeight;
                entity['keyboardHeight'] = mike;
                return entity;
            };
            entity = golf.bind(options)(oscar, entity);
            yankee = entity.keyboardOpen;
            sizing = entity.keyboardHeight;
            oscar = _closure1_slot3;
            entity = oscar.useRef;
            variable36 = null;
            kilo = entity.bind(oscar)(variable36);
            _closure2_slot3 = kilo;
            entity = 22;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)();
            golf = entity.bottom;
            entity = 23;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            entity = entity.bind(tango)();
            oscar = entity.errors;
            variable48 = entity.isSubmitting;
            _closure2_slot4 = variable48;
            variable45 = entity.pendingAvatar;
            _closure2_slot5 = variable45;
            options = entity.pendingAvatarDecoration;
            _closure2_slot6 = options;
            record = entity.pendingBanner;
            options = entity.pendingProfileEffectId;
            _closure2_slot7 = options;
            vacuum = entity.pendingThemeColors;
            _closure2_slot8 = vacuum;
            config = entity.pendingAccentColor;
            control = entity.tryItOutBanner;
            options = entity.tryItOutThemeColors;
            _closure2_slot9 = options;
            variable37 = entity.pendingGlobalName;
            _closure2_slot10 = variable37;
            quebec = entity.pendingPronouns;
            _closure2_slot11 = quebec;
            entity = entity.pendingBio;
            _closure2_slot12 = entity;
            entity = 24;
            entity = report[entity];
            verify = mike.bind(tango)(entity);
            entity = 'UserProfileEditForm';
            entity = verify.bind(tango)(entity);
            entity = 25;
            entity = report[entity];
            zulu = zulu.bind(tango)(entity);
            entity = zulu.useGuildAutomodProfileQuarantineErrors;
            zulu = entity.bind(zulu)();
            entity = 26;
            entity = report[entity];
            report = mike.bind(tango)(entity);
            verify = target.id;
            romeo = variable36 != verify;
            entity = '';
            mike = entity;
            if(!romeo) { _fun93082_ip = 482; continue _fun93082 }
 479:
            mike = verify;
 482:
            variable49 = report.bind(tango)(mike);
            _closure2_slot13 = variable49;
            report = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 27;
            mike = verify[mike];
            report = report.bind(tango)(mike);
            mike = report.useCustomStatusActivity;
            variable42 = mike.bind(report)();
            report = _closure1_slot1;
            mike = 9;
            mike = verify[mike];
            report = report.bind(tango)(mike);
            mike = report.canUsePremiumProfileCustomization;
            verify = mike.bind(report)(target);
            report = variable36 == variable49;
            mike = undefined;
            if(report) { _fun93082_ip = 569; continue _fun93082 }
 557:
            report = variable49.getLegacyUsername;
            mike = report.bind(variable49)();
 569:
            _closure2_slot14 = mike;
            report = target.globalName;
            romeo = variable36 != report;
            mike = entity;
            if(!romeo) { _fun93082_ip = 592; continue _fun93082 }
 589:
            mike = report;
 592:
            _closure2_slot15 = mike;
            report = variable36 == variable49;
            mike = undefined;
            if(report) { _fun93082_ip = 611; continue _fun93082 }
 605:
            mike = variable49.pronouns;
 611:
            report = variable36 != mike;
            equality = entity;
            if(!report) { _fun93082_ip = 624; continue _fun93082 }
 621:
            equality = mike;
 624:
            _closure2_slot16 = equality;
            report = variable36 == variable49;
            mike = undefined;
            if(report) { _fun93082_ip = 643; continue _fun93082 }
 637:
            mike = variable49.bio;
 643:
            report = variable36 != mike;
            if(!report) { _fun93082_ip = 653; continue _fun93082 }
 650:
            entity = mike;
 653:
            _closure2_slot17 = entity;
            mike = _closure1_slot1;
            report = _closure1_slot2;
            entity = 28;
            entity = report[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['user'] = target;
            entity['displayProfile'] = variable49;
            report = vacuum;
            if(!foxtrot) { _fun93082_ip = 697; continue _fun93082 }
 694:
            report = options;
 697:
            entity['pendingThemeColors'] = report;
            entity['isPreview'] = foxtrot;
            entity = mike.bind(tango)(entity);
            report = entity.theme;
            variable41 = entity.primaryColor;
            context = entity.secondaryColor;
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 29;
            entity = options[entity];
            options = mike.bind(tango)(entity);
            mike = options.useUserProfileColors;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable41;
            entity['secondaryColor'] = context;
            entity = mike.bind(options)(entity);
            status = entity.gradientFallbackBackground;
            update = entity.gradientSecondaryBackground;
            whiskey = entity.containerBackground;
            _closure2_slot18 = whiskey;
            entity = entity.avatarBackground;
            variable43 = 0;
            mike = 0;
            if(verify) { _fun93082_ip = 817; continue _fun93082 }
 813:
            mike = _closure1_slot7;
 817:
            lima = golf + mike;
            variable46 = {};
            variable46['backgroundColor'] = entity;
            mike = variable36 == oscar;
            entity = undefined;
            if(mike) { _fun93082_ip = 854; continue _fun93082 }
 836:
            mike = oscar.username;
            golf = variable36 == mike;
            entity = undefined;
            if(golf) { _fun93082_ip = 854; continue _fun93082 }
 850:
            entity = mike[variable43];
 854:
            if(!(variable36 == entity)) { _fun93082_ip = 880; continue _fun93082 }
 858:
            golf = oscar.global_name;
            options = variable36 == golf;
            mike = undefined;
            if(options) { _fun93082_ip = 877; continue _fun93082 }
 873:
            mike = golf[variable43];
 877:
            entity = mike;
 880:
            if(!(variable36 == entity)) { _fun93082_ip = 915; continue _fun93082 }
 884:
            golf = variable36 == zulu;
            mike = undefined;
            if(golf) { _fun93082_ip = 912; continue _fun93082 }
 893:
            zulu = zulu.nick;
            golf = variable36 == zulu;
            mike = undefined;
            if(golf) { _fun93082_ip = 912; continue _fun93082 }
 908:
            mike = zulu[variable43];
 912:
            entity = mike;
 915:
            _closure2_slot19 = entity;
            mike = oscar.pronouns;
            zulu = variable36 == mike;
            entity = undefined;
            if(zulu) { _fun93082_ip = 938; continue _fun93082 }
 934:
            entity = mike[variable43];
 938:
            _closure2_slot20 = entity;
            entity = oscar.bio;
            zulu = variable36 == entity;
            mike = undefined;
            if(zulu) { _fun93082_ip = 961; continue _fun93082 }
 957:
            mike = entity[variable43];
 961:
            _closure2_slot21 = mike;
            entity = global;
            zulu = entity.Object;
            entity = zulu.keys;
            entity = entity.bind(zulu)(oscar);
            entity = entity.length;
            zulu = entity > variable43;
            entity = null;
            if(!zulu) { _fun93082_ip = 1061; continue _fun93082 }
 997:
            mike = variable36 == mike;
            entity = null;
            if(!mike) { _fun93082_ip = 1061; continue _fun93082 }
 1006:
            golf = _closure1_slot0;
            options = _closure1_slot2;
            mike = 18;
            zulu = options[mike];
            zulu = golf.bind(tango)(zulu);
            oscar = zulu.intl;
            zulu = oscar.string;
            mike = options[mike];
            mike = golf.bind(tango)(mike);
            mike = mike.t;
            mike = mike.84MExs;
            entity = zulu.bind(oscar)(mike);
 1061:
            _closure2_slot22 = entity;
            entity = function() { // Original name: handleBlur
                _fun93084: for(var _fun93084_ip = 0; ; ) switch(_fun93084_ip) {
 0:
                    entity = _closure2_slot3;
                    tango = entity.current;
                    entity = null;
                    if(!(entity != tango)) { _fun93084_ip = 35; continue _fun93084 }
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
            _closure2_slot23 = entity;
            zulu = _closure1_slot13;
            romeo = _closure1_slot0;
            variable38 = _closure1_slot2;
            entity = 31;
            entity = variable38[entity];
            entity = romeo.bind(tango)(entity);
            mike = entity.ThemeContextProvider;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable41;
            entity['secondaryColor'] = context;
            golf = _closure1_slot14;
            oscar = _closure1_slot4;
            report = {};
            backup = variable44.container;
            options = new Array(2);
            options[0] = backup;
            backup = {};
            backup['backgroundColor'] = update;
            options[1] = backup;
            report['style'] = options;
            backup = _closure1_slot14;
            options = 32;
            options = variable38[options];
            options = romeo.bind(tango)(options);
            romeo = options.KeyboardAwareScrollView;
            options = {'enableOnAndroid': true, 'enableAutomaticScroll': true, 'extraHeight': null, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable39 = true;
            options['extraHeight'] = sizing;
            sizing = _closure1_slot11;
            options['keyboardOpeningTime'] = sizing;
            options['ref'] = kilo;
            output = _closure1_slot13;
            sizing = _closure1_slot4;
            kilo = {};
            result = variable44.bounceOffset;
            kilo['style'] = result;
            sizing = output.bind(tango)(sizing, kilo);
            kilo = new Array(2);
            kilo[0] = sizing;
            result = _closure1_slot14;
            sierra = _closure1_slot1;
            sequence = 33;
            sizing = variable38[sequence];
            output = sierra.bind(tango)(sizing);
            sizing = {};
            sizing['fallbackBackground'] = status;
            sizing['primaryColor'] = variable41;
            sizing['secondaryColor'] = context;
            echo = {};
            echo['backgroundColor'] = update;
            sizing['containerStyle'] = echo;
            source = _closure1_slot13;
            update = _closure1_slot16;
            echo = {};
            echo['user'] = target;
            echo['displayProfile'] = variable49;
            echo['pendingAvatar'] = variable45;
            echo['pendingBanner'] = record;
            echo['pendingAccentColor'] = config;
            echo['pendingThemeColors'] = vacuum;
            echo['tryItOutBanner'] = control;
            echo['isTryItOut'] = foxtrot;
            echo['disabled'] = variable48;
            update = source.bind(tango)(update, echo);
            echo = new Array(2);
            echo[0] = update;
            control = _closure1_slot14;
            source = _closure1_slot4;
            update = {};
            config = _closure1_slot13;
            vacuum = {};
            variable45 = variable40.avatarBackground;
            record = new Array(4);
            record[0] = variable45;
            variable45 = variable40.avatarPosition;
            record[1] = variable45;
            variable44 = variable44.avatarContainer;
            record[2] = variable44;
            record[3] = variable46;
            vacuum['style'] = record;
            variable45 = _closure1_slot13;
            record = 34;
            record = variable38[record];
            variable44 = sierra.bind(tango)(record);
            record = {};
            record['user'] = target;
            record['disabled'] = variable48;
            variable48 = variable36 != foxtrot;
            record['disableStatus'] = variable48;
            record['statusStyle'] = variable46;
            record['isTryItOut'] = foxtrot;
            variable46 = _closure1_slot12;
            variable46 = variable46.AVATAR;
            variable46 = variable47 === variable46;
            record['autoStartEditFlow'] = variable46;
            record = variable45.bind(tango)(variable44, record);
            vacuum['children'] = record;
            config = config.bind(tango)(source, vacuum);
            vacuum = new Array(2);
            vacuum[0] = config;
            record = _closure1_slot14;
            sequence = variable38[sequence];
            config = sierra.bind(tango)(sequence);
            sequence = {};
            sequence['fallbackBackground'] = status;
            sequence['primaryColor'] = variable41;
            sequence['secondaryColor'] = context;
            status = variable40.profileContent;
            context = new Array(2);
            context[0] = status;
            status = {};
            status['paddingTop'] = variable43;
            status['paddingBottom'] = lima;
            context[1] = status;
            sequence['containerStyle'] = context;
            lima = _closure1_slot13;
            context = 35;
            context = variable38[context];
            status = sierra.bind(tango)(context);
            context = {};
            context['customStatusActivity'] = variable42;
            variable41 = variable36 != variable41;
            context['hasCustomProfileTheme'] = variable41;
            variable41 = variable40.customStatusBubble;
            context['style'] = variable41;
            variable40 = variable40.emojiOnlyCustomStatusBubble;
            context['emojiOnlyStyle'] = variable40;
            context['editEnabled'] = variable39;
            status = lima.bind(tango)(status, context);
            context = new Array(3);
            context[0] = status;
            lima = _closure1_slot13;
            status = 36;
            status = variable38[status];
            sierra = sierra.bind(tango)(status);
            status = {};
            status['user'] = target;
            status['displayName'] = variable37;
            if(!(variable36 != quebec)) { _fun93082_ip = 1683; continue _fun93082 }
 1680:
            equality = quebec;
 1683:
            status['pronouns'] = equality;
            status['badgeContainerBackground'] = whiskey;
            status = lima.bind(tango)(sierra, status);
            context[1] = status;
            papa = function(argFoo) {
                _fun93085: for(var _fun93085_ip = 0; ; ) switch(_fun93085_ip) {
 0:
                    romeo = argFoo;
                    var _closure3_slot0 = romeo;
                    tango = _closure1_slot14;
                    zulu = _closure1_slot4;
                    mike = {};
                    entity = _closure2_slot2;
                    report = entity.formContainer;
                    entity = new Array(2);
                    entity[0] = report;
                    report = {};
                    oscar = _closure2_slot18;
                    report['backgroundColor'] = oscar;
                    entity[1] = report;
                    mike['style'] = entity;
                    entity = _closure2_slot22;
                    options = null;
                    report = options != entity;
                    entity = null;
                    if(!report) { _fun93085_ip = 183; continue _fun93085 }
 76:
                    oscar = _closure2_slot22;
                    report = '';
                    entity = null;
                    if(!(report !== oscar)) { _fun93085_ip = 183; continue _fun93085 }
 90:
                    yankee = _closure1_slot13;
                    verify = _closure1_slot4;
                    oscar = {};
                    report = _closure2_slot2;
                    report = report.errorContainer;
                    oscar['style'] = report;
                    sizing = _closure1_slot13;
                    kilo = _closure1_slot0;
                    backup = _closure1_slot2;
                    report = 30;
                    backup = backup[report];
                    report = undefined;
                    backup = kilo.bind(report)(backup);
                    kilo = backup.Text;
                    backup = {'variant': 'text-sm/bold', 'color': 'status-danger'};
                    output = _closure2_slot22;
                    backup['children'] = output;
                    backup = sizing.bind(report)(kilo, backup);
                    oscar['children'] = backup;
                    entity = yankee.bind(report)(verify, oscar);
 183:
                    report = new Array(9);
                    report[0] = entity;
                    backup = _closure1_slot13;
                    yankee = _closure1_slot1;
                    kilo = _closure1_slot2;
                    oscar = 37;
                    verify = kilo[oscar];
                    entity = undefined;
                    yankee = yankee.bind(entity)(verify);
                    verify = {};
                    echo = _closure1_slot0;
                    result = 18;
                    sizing = kilo[result];
                    sizing = echo.bind(entity)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kilo = kilo[result];
                    kilo = echo.bind(entity)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.9AjdkJ;
                    kilo = sizing.bind(output)(kilo);
                    verify['label'] = kilo;
                    kilo = _closure2_slot19;
                    verify['errorMessage'] = kilo;
                    kilo = _closure2_slot10;
                    if(!(options == kilo)) { _fun93085_ip = 297; continue _fun93085 }
 291:
                    kilo = _closure2_slot15;
                    _fun93085_ip = 301; continue _fun93085;
 297:
                    kilo = _closure2_slot10;
 301:
                    verify['value'] = kilo;
                    kilo = function(argFoo) { // Original name: onChange
                        _fun93086: for(var _fun93086_ip = 0; ; ) switch(_fun93086_ip) {
 0:
                            entity = argFoo;
                            mike = '';
                            if(!(mike === entity)) { _fun93086_ip = 35; continue _fun93086 }
 11:
                            mike = _closure3_slot0;
                            zulu = mike.globalName;
                            mike = null;
                            mike = mike == zulu;
                            report = undefined;
                            if(mike) { _fun93086_ip = 38; continue _fun93086 }
 35:
                            report = entity;
 38:
                            zulu = _closure1_slot0;
                            mike = _closure1_slot2;
                            entity = 38;
                            mike = mike[entity];
                            entity = undefined;
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.setPendingGlobalNameName;
                            mike = _closure3_slot0;
                            oscar = mike.globalName;
                            mike = undefined;
                            if(!(report !== oscar)) { _fun93086_ip = 91; continue _fun93086 }
 88:
                            mike = report;
 91:
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    verify['onChange'] = kilo;
                    kilo = romeo.toString;
                    kilo = kilo.bind(romeo)();
                    verify['placeholder'] = kilo;
                    kilo = _closure1_slot9;
                    verify['maxLength'] = kilo;
                    kilo = _closure2_slot4;
                    verify['disabled'] = kilo;
                    kilo = _closure2_slot23;
                    verify['onBlur'] = kilo;
                    verify = backup.bind(entity)(yankee, verify);
                    report[1] = verify;
                    backup = _closure1_slot13;
                    yankee = _closure1_slot1;
                    kilo = _closure1_slot2;
                    verify = kilo[oscar];
                    yankee = yankee.bind(entity)(verify);
                    verify = {};
                    echo = _closure1_slot0;
                    sizing = kilo[result];
                    sizing = echo.bind(entity)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kilo = kilo[result];
                    kilo = echo.bind(entity)(kilo);
                    kilo = kilo.t;
                    kilo = kilo.+T3RIy;
                    kilo = sizing.bind(output)(kilo);
                    verify['label'] = kilo;
                    kilo = _closure2_slot20;
                    verify['errorMessage'] = kilo;
                    kilo = _closure2_slot11;
                    if(!(options == kilo)) { _fun93085_ip = 465; continue _fun93085 }
 459:
                    kilo = _closure2_slot16;
                    _fun93085_ip = 469; continue _fun93085;
 465:
                    kilo = _closure2_slot11;
 469:
                    verify['value'] = kilo;
                    kilo = function(argFoo) { // Original name: onChange
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.setNewPendingUserPronouns;
                        mike = _closure2_slot16;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    verify['onChange'] = kilo;
                    kilo = _closure1_slot10;
                    verify['maxLength'] = kilo;
                    kilo = _closure2_slot4;
                    verify['disabled'] = kilo;
                    kilo = _closure2_slot23;
                    verify['onBlur'] = kilo;
                    verify = backup.bind(entity)(yankee, verify);
                    report[2] = verify;
                    yankee = _closure1_slot13;
                    verify = _closure1_slot1;
                    backup = _closure1_slot2;
                    oscar = backup[oscar];
                    verify = verify.bind(entity)(oscar);
                    oscar = {};
                    output = _closure1_slot0;
                    kilo = backup[result];
                    kilo = output.bind(entity)(kilo);
                    sizing = kilo.intl;
                    kilo = sizing.string;
                    backup = backup[result];
                    backup = output.bind(entity)(backup);
                    backup = backup.t;
                    backup = backup.NepzEx;
                    backup = kilo.bind(sizing)(backup);
                    oscar['label'] = backup;
                    backup = _closure2_slot21;
                    oscar['errorMessage'] = backup;
                    backup = _closure2_slot12;
                    if(!(options == backup)) { _fun93085_ip = 619; continue _fun93085 }
 613:
                    backup = _closure2_slot17;
                    _fun93085_ip = 623; continue _fun93085;
 619:
                    backup = _closure2_slot12;
 623:
                    oscar['value'] = backup;
                    foxtrot = function(argFoo) { // Original name: onChange
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.setNewPendingUserBio;
                        mike = _closure2_slot17;
                        entity = argFoo;
                        entity = zulu.bind(tango)(entity, mike);
                        return entity;
                    };
                    oscar['onChange'] = foxtrot;
                    backup = _closure2_slot1;
                    foxtrot = _closure1_slot12;
                    foxtrot = foxtrot.BIO;
                    foxtrot = backup === foxtrot;
                    oscar['autoFocus'] = foxtrot;
                    foxtrot = _closure1_slot8;
                    oscar['maxLength'] = foxtrot;
                    foxtrot = 5;
                    oscar['numberOfLines'] = foxtrot;
                    foxtrot = true;
                    oscar['multiline'] = foxtrot;
                    foxtrot = _closure2_slot4;
                    oscar['disabled'] = foxtrot;
                    foxtrot = _closure2_slot23;
                    oscar['onBlur'] = foxtrot;
                    oscar = yankee.bind(entity)(verify, oscar);
                    report[3] = oscar;
                    yankee = _closure1_slot13;
                    verify = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    oscar = 39;
                    oscar = foxtrot[oscar];
                    verify = verify.bind(entity)(oscar);
                    oscar = {};
                    oscar['user'] = romeo;
                    foxtrot = _closure2_slot0;
                    kilo = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 16;
                    backup = sizing[backup];
                    backup = kilo.bind(entity)(backup);
                    if(foxtrot) { _fun93085_ip = 778; continue _fun93085 }
 770:
                    foxtrot = backup.setPendingThemeColors;
                    _fun93085_ip = 784; continue _fun93085;
 778:
                    foxtrot = backup.setTryItOutThemeColors;
 784:
                    oscar['onProfileThemeColorsChanged'] = foxtrot;
                    foxtrot = _closure2_slot5;
                    oscar['pendingAvatar'] = foxtrot;
                    foxtrot = _closure2_slot0;
                    if(foxtrot) { _fun93085_ip = 811; continue _fun93085 }
 805:
                    foxtrot = _closure2_slot8;
                    _fun93085_ip = 815; continue _fun93085;
 811:
                    foxtrot = _closure2_slot9;
 815:
                    oscar['pendingThemeColors'] = foxtrot;
                    foxtrot = _closure2_slot0;
                    oscar['isTryItOut'] = foxtrot;
                    oscar = yankee.bind(entity)(verify, oscar);
                    report[4] = oscar;
                    backup = _closure1_slot13;
                    verify = _closure1_slot1;
                    foxtrot = _closure1_slot2;
                    oscar = 40;
                    oscar = foxtrot[oscar];
                    yankee = verify.bind(entity)(oscar);
                    oscar = {};
                    oscar['user'] = romeo;
                    kilo = _closure2_slot6;
                    oscar['pendingAvatarDecoration'] = kilo;
                    oscar = backup.bind(entity)(yankee, oscar);
                    report[5] = oscar;
                    backup = _closure1_slot13;
                    oscar = 41;
                    oscar = foxtrot[oscar];
                    yankee = verify.bind(entity)(oscar);
                    oscar = {};
                    oscar['user'] = romeo;
                    kilo = _closure2_slot7;
                    oscar['pendingProfileEffectId'] = kilo;
                    kilo = _closure2_slot13;
                    oscar['displayProfile'] = kilo;
                    oscar = backup.bind(entity)(yankee, oscar);
                    report[6] = oscar;
                    yankee = _closure1_slot13;
                    oscar = 42;
                    oscar = foxtrot[oscar];
                    verify = verify.bind(entity)(oscar);
                    oscar = {};
                    oscar['user'] = romeo;
                    romeo = _closure2_slot4;
                    oscar['disabled'] = romeo;
                    romeo = {};
                    foxtrot = _closure2_slot18;
                    romeo['backgroundColor'] = foxtrot;
                    oscar['tagStyle'] = romeo;
                    oscar = yankee.bind(entity)(verify, oscar);
                    report[7] = oscar;
                    oscar = _closure2_slot14;
                    oscar = options != oscar;
                    if(!oscar) { _fun93085_ip = 1045; continue _fun93085 }
 1004:
                    verify = _closure1_slot13;
                    options = _closure1_slot1;
                    yankee = _closure1_slot2;
                    golf = 43;
                    golf = yankee[golf];
                    options = options.bind(entity)(golf);
                    golf = {};
                    offset = _closure2_slot14;
                    golf['legacyUsername'] = offset;
                    oscar = verify.bind(entity)(options, golf);
 1045:
                    report[8] = oscar;
                    mike['children'] = report;
                    entity = tango.bind(entity)(zulu, mike);
                    return entity;
                }
            };
            papa = papa.bind(tango)(target);
            context[2] = papa;
            sequence['children'] = context;
            sequence = record.bind(tango)(config, sequence);
            vacuum[1] = sequence;
            update['children'] = vacuum;
            update = control.bind(tango)(source, update);
            echo[1] = update;
            sizing['children'] = echo;
            sizing = result.bind(tango)(output, sizing);
            kilo[1] = sizing;
            options['children'] = kilo;
            romeo = backup.bind(tango)(romeo, options);
            options = new Array(2);
            options[0] = romeo;
            verify = !verify;
            if(!verify) { _fun93082_ip = 1788; continue _fun93082 }
 1785:
            verify = !yankee;
 1788:
            if(!verify) { _fun93082_ip = 1834; continue _fun93082 }
 1791:
            romeo = _closure1_slot13;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 44;
            offset = backup[offset];
            offset = yankee.bind(tango)(offset);
            yankee = offset.UserProfilePremiumUpsellCard;
            offset = {};
            offset['isTryItOut'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 1834:
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    options = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(options);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.View;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.BIO_MAX_LENGTH;
    var _closure1_slot8 = golf;
    golf = tango.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot9 = golf;
    tango = tango.PRONOUNS_MAX_LENGTH;
    var _closure1_slot10 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.KEYBOARD_DELAY_MS;
    var _closure1_slot11 = golf;
    tango = tango.UserProfileEditAutoFocusElement;
    var _closure1_slot12 = tango;
    tango = 7;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot13 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot14 = tango;
    tango = 12;
    var _closure1_slot15 = tango;
    tango = 46;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/native/UserProfileEditForm.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ConnectedUserProfileEditForm
        _fun93089: for(var _fun93089_ip = 0; ; ) switch(_fun93089_ip) {
 0:
            tango = _closure1_slot0;
            report = _closure1_slot2;
            zulu = 21;
            zulu = report[zulu];
            report = undefined;
            golf = tango.bind(report)(zulu);
            oscar = golf.useStateFromStores;
            zulu = _closure1_slot5;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                mike = _closure1_slot5;
                entity = mike.getCurrentUser;
                entity = entity.bind(mike)();
                return entity;
            };
            oscar = oscar.bind(golf)(tango, zulu);
            var _closure2_slot0 = oscar;
            golf = _closure1_slot3;
            tango = golf.useEffect;
            zulu = new Array(1);
            zulu[0] = oscar;
            entity = function() {
                _fun93091: for(var _fun93091_ip = 0; ; ) switch(_fun93091_ip) {
 0:
                    zulu = _closure2_slot0;
                    mike = null;
                    if(!(mike != zulu)) { _fun93091_ip = 58; continue _fun93091 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 45;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.fetchProfile;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tango.bind(golf)(entity, zulu);
            entity = null;
            zulu = entity == oscar;
            if(zulu) { _fun93089_ip = 130; continue _fun93089 }
 100:
            tango = _closure1_slot13;
            zulu = _closure1_slot17;
            mike = {};
            mike['user'] = oscar;
            verify = argFoo;
            offset = mike;
            oscar = copyDataProperties(offset, verify);
            entity = tango.bind(report)(zulu, mike);
 130:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
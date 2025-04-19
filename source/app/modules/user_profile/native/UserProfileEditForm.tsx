// app/modules/user_profile/native/UserProfileEditForm.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: EditUserProfileBanner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            output = zuuluu.user;
            var _closure2_slot0 = output;
            backup = zuuluu.displayProfile;
            var _closure2_slot1 = backup;
            kiloes = zuuluu.pendingAvatarSrc;
            sizing = zuuluu.pendingBanner;
            romeon = zuuluu.pendingAccentColor;
            foxtra = zuuluu.pendingThemeColors;
            entity = zuuluu.tryItOutBanner;
            michal = zuuluu.isTryItOut;
            var _closure2_slot2 = michal;
            option = zuuluu.disabled;
            tangon = undefined;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            if(!michal) { _fun00002_ip = 114; continue _fun00001 }
 82:
            michal = null;
            if(!(michal == entity)) { _fun00002_ip = 111; continue _fun00001 }
 88:
            zuuluu = _closure1_slot1;
            report = _closure1_slot2;
            michal = 7;
            michal = report[michal];
            entity = zuuluu.bind(tangon)(michal);
 111:
            sizing = entity;
 114:
            _closure2_slot3 = sizing;
            oscard = _closure1_slot1;
            result = _closure1_slot2;
            entity = 8;
            entity = result[entity];
            michal = oscard.bind(tangon)(entity);
            entity = michal.canUseCollectibles;
            yankee = entity.bind(michal)(output);
            entity = 9;
            michal = result[entity];
            zuuluu = oscard.bind(tangon)(michal);
            michal = 10;
            michal = result[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.EDIT_BANNER;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            _closure2_slot4 = report;
            zuuluu = _closure1_slot12;
            michal = _closure1_slot0;
            entity = result[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot12;
            report = 11;
            report = result[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['user'] = output;
            report['displayProfile'] = backup;
            report['pendingBanner'] = sizing;
            report['pendingAvatarSrc'] = kiloes;
            report['pendingThemeColors'] = foxtra;
            report['pendingAccentColor'] = romeon;
            foxtra = null;
            kiloes = foxtra == backup;
            romeon = undefined;
            if(kiloes) { _fun00002_ip = 290; continue _fun00001 }
 284:
            romeon = backup.banner;
 290:
            foxtra = foxtra != romeon;
            romeon = 12;
            if(!foxtra) { _fun00002_ip = 302; continue _fun00001 }
 300:
            romeon = undefined;
 302:
            report['bannerSafeArea'] = romeon;
            report['showProfilePreviewButton'] = yankee;
            offset = function() { // Original name: onPressEdit
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 12;
                    zuuluu = michal[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.openLazy;
                    tangon = _closure1_slot0;
                    zuuluu = 14;
                    zuuluu = michal[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = 13;
                    zuuluu = michal[zuuluu];
                    michal = michal.paths;
                    tangon = tangon.bind(entity)(zuuluu, michal);
                    zuuluu = {};
                    option = _closure2_slot0;
                    zuuluu['user'] = option;
                    option = _closure2_slot4;
                    zuuluu['analyticsLocations'] = option;
                    option = _closure2_slot2;
                    offset = _closure1_slot0;
                    yankee = _closure1_slot2;
                    verify = 15;
                    verify = yankee[verify];
                    verify = offset.bind(entity)(verify);
                    if(option) { _fun00004_ip = 122; continue _fun00003 }
 114:
                    option = verify.setPendingBanner;
                    _fun00004_ip = 128; continue _fun00003;
 122:
                    option = verify.setTryItOutBanner;
 128:
                    zuuluu['onBannerChange'] = option;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    golfie = 16;
                    golfie = verify[golfie];
                    offset = option.bind(entity)(golfie);
                    verify = offset.showRemoveBanner;
                    option = _closure2_slot3;
                    yankee = _closure2_slot1;
                    golfie = null;
                    yankee = golfie == yankee;
                    golfie = undefined;
                    if(yankee) { _fun00004_ip = 188; continue _fun00003 }
 178:
                    yankee = _closure2_slot1;
                    golfie = yankee.banner;
 188:
                    golfie = verify.bind(offset)(option, golfie);
                    zuuluu['showRemoveBanner'] = golfie;
                    michal = _closure2_slot2;
                    zuuluu['isTryItOut'] = michal;
                    michal = 'Change Banner';
                    michal = report.bind(oscard)(tangon, michal, zuuluu);
                    return entity;
                }
            };
            report['onPressEdit'] = offset;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 17;
            offset = foxtra[verify];
            offset = romeon.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.VqsHy8;
            verify = offset.bind(yankee)(verify);
            report['editButtonAccessibilityLabel'] = verify;
            report['editDisabled'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
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
    option = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BIO_MAX_LENGTH;
    var _closure1_slot7 = golfie;
    golfie = tangon.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot8 = golfie;
    tangon = tangon.PRONOUNS_MAX_LENGTH;
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.KEYBOARD_DELAY_MS;
    var _closure1_slot10 = golfie;
    tangon = tangon.UserProfileEditAutoFocusElement;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot12 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot13 = tangon;
    tangon = 46;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileEditForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileEditForm
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            equals = entity.currentUser;
            variable44 = entity.autoFocusElement;
            foxtra = entity.isTryItOut;
            tangon = undefined;
            if(!(foxtra === tangon)) { _fun00006_ip = 31; continue _fun00005 }
 29:
            foxtra = false;
 31:
            var _closure2_slot0 = tangon;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 18;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            target = entity.bind(tangon)();
            entity = 19;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            variable48 = entity.bind(tangon)();
            michal = _closure1_slot0;
            entity = 20;
            entity = oscard[entity];
            option = michal.bind(tangon)(entity);
            golfie = option.useStateFromStoresObject;
            entity = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                entity = {};
                michal = _closure1_slot5;
                zuuluu = michal.keyboardOpen;
                entity['keyboardOpen'] = zuuluu;
                michal = michal.keyboardHeight;
                entity['keyboardHeight'] = michal;
                return entity;
            };
            entity = golfie.bind(option)(zuuluu, entity);
            yankee = entity.keyboardOpen;
            kiloes = entity.keyboardHeight;
            zuuluu = _closure1_slot3;
            entity = zuuluu.useRef;
            cntext = null;
            backup = entity.bind(zuuluu)(cntext);
            _closure2_slot0 = backup;
            entity = 21;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            golfie = entity.bottom;
            entity = 22;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.errors;
            limora = entity.isSubmitting;
            verify = entity.pendingAvatar;
            variable39 = entity.pendingAvatarDecoration;
            variable59 = entity.pendingBanner;
            variable38 = entity.pendingProfileEffectId;
            quebec = entity.pendingThemeColors;
            variable58 = entity.pendingAccentColor;
            source = entity.tryItOutBanner;
            variable36 = entity.tryItOutThemeColors;
            variable54 = entity.pendingGlobalName;
            variable50 = entity.pendingPronouns;
            variable46 = entity.pendingBio;
            entity = 23;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            entity = 'UserProfileEditForm';
            entity = option.bind(tangon)(entity);
            entity = 24;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useGuildAutomodProfileQuarantineErrors;
            michal = entity.bind(michal)();
            entity = 25;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            oscard = equals.id;
            option = cntext != oscard;
            record = '';
            entity = record;
            if(!option) { _fun00006_ip = 363; continue _fun00005 }
 360:
            entity = oscard;
 363:
            variable37 = report.bind(tangon)(entity);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 26;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            entity = option.useCustomStatusActivity;
            variable52 = entity.bind(option)();
            entity = 27;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            report = option.getPendingAvatarSrc;
            entity = {};
            romeon = equals.id;
            entity['userId'] = romeon;
            entity['image'] = verify;
            variable40 = report.bind(option)(entity);
            report = _closure1_slot1;
            entity = 8;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = report.canUsePremiumProfileCustomization;
            verify = entity.bind(report)(equals);
            entity = cntext == variable37;
            sierra = undefined;
            if(entity) { _fun00006_ip = 485; continue _fun00005 }
 473:
            entity = variable37.getLegacyUsername;
            sierra = entity.bind(variable37)();
 485:
            entity = equals.globalName;
            report = cntext != entity;
            variable53 = record;
            if(!report) { _fun00006_ip = 504; continue _fun00005 }
 501:
            variable53 = entity;
 504:
            report = cntext == variable37;
            entity = undefined;
            if(report) { _fun00006_ip = 519; continue _fun00005 }
 513:
            entity = variable37.pronouns;
 519:
            report = cntext != entity;
            variable49 = record;
            if(!report) { _fun00006_ip = 532; continue _fun00005 }
 529:
            variable49 = entity;
 532:
            _closure2_slot2 = variable49;
            report = cntext == variable37;
            entity = undefined;
            if(report) { _fun00006_ip = 551; continue _fun00005 }
 545:
            entity = variable37.bio;
 551:
            report = cntext != entity;
            variable45 = record;
            if(!report) { _fun00006_ip = 564; continue _fun00005 }
 561:
            variable45 = entity;
 564:
            _closure2_slot3 = variable45;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 28;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = {};
            entity['user'] = equals;
            entity['displayProfile'] = variable37;
            oscard = quebec;
            if(!foxtra) { _fun00006_ip = 608; continue _fun00005 }
 605:
            oscard = variable36;
 608:
            entity['pendingThemeColors'] = oscard;
            entity['isPreview'] = foxtra;
            entity = report.bind(tangon)(entity);
            report = entity.theme;
            status = entity.primaryColor;
            ctrled = entity.secondaryColor;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 29;
            entity = option[entity];
            option = oscard.bind(tangon)(entity);
            oscard = option.useUserProfileColors;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = status;
            entity['secondaryColor'] = ctrled;
            entity = oscard.bind(option)(entity);
            vacuum = entity.gradientFallbackBackground;
            result = entity.gradientSecondaryBackground;
            whisks = entity.containerBackground;
            entity = entity.avatarBackground;
            variable56 = 0;
            oscard = 0;
            if(verify) { _fun00006_ip = 724; continue _fun00005 }
 720:
            oscard = _closure1_slot6;
 724:
            config = golfie + oscard;
            variable61 = {};
            variable61['backgroundColor'] = entity;
            entity = cntext == zuuluu;
            variable55 = undefined;
            if(entity) { _fun00006_ip = 761; continue _fun00005 }
 743:
            entity = zuuluu.username;
            oscard = cntext == entity;
            variable55 = undefined;
            if(oscard) { _fun00006_ip = 761; continue _fun00005 }
 757:
            variable55 = entity[variable56];
 761:
            if(!(cntext == variable55)) { _fun00006_ip = 787; continue _fun00005 }
 765:
            oscard = zuuluu.global_name;
            golfie = cntext == oscard;
            entity = undefined;
            if(golfie) { _fun00006_ip = 784; continue _fun00005 }
 780:
            entity = oscard[variable56];
 784:
            variable55 = entity;
 787:
            if(!(cntext == variable55)) { _fun00006_ip = 822; continue _fun00005 }
 791:
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 819; continue _fun00005 }
 800:
            michal = michal.nick;
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 819; continue _fun00005 }
 815:
            entity = michal[variable56];
 819:
            variable55 = entity;
 822:
            entity = zuuluu.pronouns;
            michal = cntext == entity;
            variable51 = undefined;
            if(michal) { _fun00006_ip = 841; continue _fun00005 }
 837:
            variable51 = entity[variable56];
 841:
            entity = zuuluu.bio;
            michal = cntext == entity;
            variable47 = undefined;
            if(michal) { _fun00006_ip = 860; continue _fun00005 }
 856:
            variable47 = entity[variable56];
 860:
            entity = global;
            michal = entity.Object;
            entity = michal.keys;
            entity = entity.bind(michal)(zuuluu);
            entity = entity.length;
            entity = entity > variable56;
            variable57 = null;
            if(!entity) { _fun00006_ip = 958; continue _fun00005 }
 892:
            entity = cntext == variable47;
            variable57 = null;
            if(!entity) { _fun00006_ip = 958; continue _fun00005 }
 901:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 17;
            michal = golfie[entity];
            michal = oscard.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.84MExs;
            variable57 = michal.bind(zuuluu)(entity);
 958:
            variable41 = function() { // Original name: handleBlur
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot0;
                    tangon = entity.current;
                    entity = null;
                    if(!(entity != tangon)) { _fun00008_ip = 35; continue _fun00007 }
 18:
                    zuuluu = tangon.scrollToPosition;
                    michal = 0;
                    entity = true;
                    entity = zuuluu.bind(tangon)(michal, michal, entity);
 35:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = _closure1_slot12;
            romeon = _closure1_slot0;
            papara = _closure1_slot2;
            entity = 31;
            entity = papara[entity];
            entity = romeon.bind(tangon)(entity);
            michal = entity.ThemeContextProvider;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = status;
            entity['secondaryColor'] = ctrled;
            golfie = _closure1_slot13;
            oscard = _closure1_slot4;
            report = {};
            sizing = variable48.container;
            option = new Array(2);
            option[0] = sizing;
            sizing = {};
            sizing['backgroundColor'] = result;
            option[1] = sizing;
            report['style'] = option;
            option = 32;
            option = papara[option];
            option = romeon.bind(tangon)(option);
            romeon = option.KeyboardAwareScrollView;
            option = {'enableOnAndroid': true, 'enableAutomaticScroll': true, 'extraHeight': null, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable42 = true;
            option['extraHeight'] = kiloes;
            kiloes = _closure1_slot10;
            option['keyboardOpeningTime'] = kiloes;
            option['ref'] = backup;
            kiloes = _closure1_slot12;
            backup = {};
            sizing = variable48.bounceOffset;
            backup['style'] = sizing;
            kiloes = kiloes.bind(tangon)(oscard, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            sequen = _closure1_slot1;
            update = 33;
            kiloes = papara[update];
            sizing = sequen.bind(tangon)(kiloes);
            kiloes = {};
            kiloes['fallbackBackground'] = vacuum;
            kiloes['primaryColor'] = status;
            kiloes['secondaryColor'] = ctrled;
            output = {};
            output['backgroundColor'] = result;
            kiloes['containerStyle'] = output;
            echoed = _closure1_slot12;
            result = _closure1_slot14;
            output = {};
            output['user'] = equals;
            output['displayProfile'] = variable37;
            output['pendingAvatarSrc'] = variable40;
            output['pendingBanner'] = variable59;
            output['pendingAccentColor'] = variable58;
            output['pendingThemeColors'] = quebec;
            output['tryItOutBanner'] = source;
            output['isTryItOut'] = foxtra;
            output['disabled'] = limora;
            result = echoed.bind(tangon)(result, output);
            output = new Array(2);
            output[0] = result;
            result = {};
            source = _closure1_slot12;
            echoed = {};
            variable59 = target.avatarBackground;
            variable58 = new Array(4);
            variable58[0] = variable59;
            variable59 = target.avatarPosition;
            variable58[1] = variable59;
            variable59 = variable48.avatarContainer;
            variable58[2] = variable59;
            variable58[3] = variable61;
            echoed['style'] = variable58;
            variable60 = _closure1_slot12;
            variable58 = 34;
            variable58 = papara[variable58];
            variable59 = sequen.bind(tangon)(variable58);
            variable58 = {};
            variable58['user'] = equals;
            variable58['disabled'] = limora;
            variable62 = cntext != foxtra;
            variable58['disableStatus'] = variable62;
            variable58['statusStyle'] = variable61;
            variable58['isTryItOut'] = foxtra;
            variable61 = _closure1_slot11;
            variable61 = variable61.AVATAR;
            variable61 = variable44 === variable61;
            variable58['autoStartEditFlow'] = variable61;
            variable58 = variable60.bind(tangon)(variable59, variable58);
            echoed['children'] = variable58;
            source = source.bind(tangon)(oscard, echoed);
            echoed = new Array(2);
            echoed[0] = source;
            update = papara[update];
            source = sequen.bind(tangon)(update);
            update = {};
            update['fallbackBackground'] = vacuum;
            update['primaryColor'] = status;
            update['secondaryColor'] = ctrled;
            vacuum = target.profileContent;
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            vacuum = {};
            vacuum['paddingTop'] = variable56;
            vacuum['paddingBottom'] = config;
            ctrled[1] = vacuum;
            update['containerStyle'] = ctrled;
            config = _closure1_slot12;
            ctrled = 35;
            ctrled = papara[ctrled];
            vacuum = sequen.bind(tangon)(ctrled);
            ctrled = {};
            ctrled['customStatusActivity'] = variable52;
            status = cntext != status;
            ctrled['hasCustomProfileTheme'] = status;
            status = target.customStatusBubble;
            ctrled['style'] = status;
            target = target.emojiOnlyCustomStatusBubble;
            ctrled['emojiOnlyStyle'] = target;
            ctrled['editEnabled'] = variable42;
            vacuum = config.bind(tangon)(vacuum, ctrled);
            ctrled = new Array(3);
            ctrled[0] = vacuum;
            config = _closure1_slot12;
            vacuum = 36;
            vacuum = papara[vacuum];
            sequen = sequen.bind(tangon)(vacuum);
            vacuum = {};
            vacuum['user'] = equals;
            vacuum['displayName'] = variable54;
            papara = variable49;
            if(!(cntext != variable50)) { _fun00006_ip = 1551; continue _fun00005 }
 1548:
            papara = variable50;
 1551:
            vacuum['pronouns'] = papara;
            vacuum['badgeContainerBackground'] = whisks;
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[1] = vacuum;
            _closure2_slot1 = equals;
            config = _closure1_slot13;
            sequen = _closure1_slot4;
            vacuum = {};
            target = variable48.formContainer;
            papara = new Array(2);
            papara[0] = target;
            target = {};
            target['backgroundColor'] = whisks;
            papara[1] = target;
            vacuum['style'] = papara;
            target = cntext != variable57;
            papara = null;
            if(!target) { _fun00006_ip = 1711; continue _fun00005 }
 1622:
            papara = null;
            if(!(record !== variable57)) { _fun00006_ip = 1711; continue _fun00005 }
 1628:
            status = _closure1_slot12;
            target = _closure1_slot4;
            record = {};
            variable48 = variable48.errorContainer;
            record['style'] = variable48;
            variable56 = _closure1_slot12;
            variable52 = _closure1_slot0;
            variable58 = _closure1_slot2;
            variable48 = 30;
            variable48 = variable58[variable48];
            variable48 = variable52.bind(tangon)(variable48);
            variable52 = variable48.Text;
            variable48 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable48['children'] = variable57;
            variable48 = variable56.bind(tangon)(variable52, variable48);
            record['children'] = variable48;
            papara = status.bind(tangon)(target, record);
 1711:
            record = new Array(10);
            record[0] = papara;
            variable48 = _closure1_slot12;
            status = _closure1_slot1;
            variable56 = _closure1_slot2;
            papara = 37;
            target = variable56[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable59 = _closure1_slot0;
            variable52 = 17;
            variable57 = variable56[variable52];
            variable57 = variable59.bind(tangon)(variable57);
            variable58 = variable57.intl;
            variable57 = variable58.string;
            variable56 = variable56[variable52];
            variable56 = variable59.bind(tangon)(variable56);
            variable56 = variable56.t;
            variable56 = variable56.9AjdkJ;
            variable56 = variable57.bind(variable58)(variable56);
            target['label'] = variable56;
            target['errorMessage'] = variable55;
            if(!(cntext != variable54)) { _fun00006_ip = 1812; continue _fun00005 }
 1809:
            variable53 = variable54;
 1812:
            target['value'] = variable53;
            variable53 = function(argFoo) { // Original name: onChange
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    michal = '';
                    if(!(michal === entity)) { _fun00010_ip = 35; continue _fun00009 }
 11:
                    michal = _closure2_slot1;
                    zuuluu = michal.globalName;
                    michal = null;
                    michal = michal == zuuluu;
                    report = undefined;
                    if(michal) { _fun00010_ip = 38; continue _fun00009 }
 35:
                    report = entity;
 38:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 38;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.setPendingGlobalName;
                    michal = _closure2_slot1;
                    oscard = michal.globalName;
                    michal = undefined;
                    if(!(report !== oscard)) { _fun00010_ip = 91; continue _fun00009 }
 88:
                    michal = report;
 91:
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            target['onChange'] = variable53;
            variable53 = equals.toString;
            variable53 = variable53.bind(equals)();
            target['placeholder'] = variable53;
            variable53 = _closure1_slot8;
            target['maxLength'] = variable53;
            target['disabled'] = limora;
            target['onBlur'] = variable41;
            target = variable48.bind(tangon)(status, target);
            record[1] = target;
            variable48 = _closure1_slot12;
            status = _closure1_slot1;
            variable53 = _closure1_slot2;
            target = variable53[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable56 = _closure1_slot0;
            variable54 = variable53[variable52];
            variable54 = variable56.bind(tangon)(variable54);
            variable55 = variable54.intl;
            variable54 = variable55.string;
            variable53 = variable53[variable52];
            variable53 = variable56.bind(tangon)(variable53);
            variable53 = variable53.t;
            variable53 = variable53.+T3RIy;
            variable53 = variable54.bind(variable55)(variable53);
            target['label'] = variable53;
            target['errorMessage'] = variable51;
            if(!(cntext != variable50)) { _fun00006_ip = 1957; continue _fun00005 }
 1954:
            variable49 = variable50;
 1957:
            target['value'] = variable49;
            variable49 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserPronouns;
                michal = _closure2_slot2;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            target['onChange'] = variable49;
            variable49 = _closure1_slot9;
            target['maxLength'] = variable49;
            target['disabled'] = limora;
            target['onBlur'] = variable41;
            target = variable48.bind(tangon)(status, target);
            record[2] = target;
            status = _closure1_slot12;
            target = _closure1_slot1;
            variable48 = _closure1_slot2;
            papara = variable48[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            variable51 = _closure1_slot0;
            variable49 = variable48[variable52];
            variable49 = variable51.bind(tangon)(variable49);
            variable50 = variable49.intl;
            variable49 = variable50.string;
            variable48 = variable48[variable52];
            variable48 = variable51.bind(tangon)(variable48);
            variable48 = variable48.t;
            variable48 = variable48.NepzEx;
            variable48 = variable49.bind(variable50)(variable48);
            papara['label'] = variable48;
            papara['errorMessage'] = variable47;
            if(!(cntext != variable46)) { _fun00006_ip = 2088; continue _fun00005 }
 2085:
            variable45 = variable46;
 2088:
            papara['value'] = variable45;
            variable43 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserBio;
                michal = _closure2_slot3;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            papara['onChange'] = variable43;
            variable43 = _closure1_slot11;
            variable43 = variable43.BIO;
            variable43 = variable44 === variable43;
            papara['autoFocus'] = variable43;
            variable43 = _closure1_slot7;
            papara['maxLength'] = variable43;
            variable43 = 5;
            papara['numberOfLines'] = variable43;
            papara['multiline'] = variable42;
            papara['disabled'] = limora;
            papara['onBlur'] = variable41;
            papara = status.bind(tangon)(target, papara);
            record[3] = papara;
            status = _closure1_slot12;
            target = _closure1_slot1;
            variable41 = _closure1_slot2;
            papara = 39;
            papara = variable41[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = equals;
            variable42 = _closure1_slot0;
            variable43 = _closure1_slot2;
            variable41 = 15;
            variable41 = variable43[variable41];
            variable42 = variable42.bind(tangon)(variable41);
            if(foxtra) { _fun00006_ip = 2225; continue _fun00005 }
 2217:
            variable41 = variable42.setPendingThemeColors;
            _fun00006_ip = 2231; continue _fun00005;
 2225:
            variable41 = variable42.setTryItOutThemeColors;
 2231:
            papara['onProfileThemeColorsChanged'] = variable41;
            papara['pendingAvatarSrc'] = variable40;
            if(!foxtra) { _fun00006_ip = 2247; continue _fun00005 }
 2244:
            quebec = variable36;
 2247:
            papara['pendingThemeColors'] = quebec;
            papara['isTryItOut'] = foxtra;
            papara = status.bind(tangon)(target, papara);
            record[4] = papara;
            variable36 = _closure1_slot12;
            target = _closure1_slot1;
            quebec = _closure1_slot2;
            papara = 40;
            papara = quebec[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = equals;
            papara['pendingAvatarDecoration'] = variable39;
            papara = variable36.bind(tangon)(status, papara);
            record[5] = papara;
            variable36 = _closure1_slot12;
            papara = 41;
            papara = quebec[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = equals;
            papara['pendingProfileEffectId'] = variable38;
            papara['displayProfile'] = variable37;
            papara = variable36.bind(tangon)(status, papara);
            record[6] = papara;
            variable36 = _closure1_slot12;
            papara = 42;
            papara = quebec[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = equals;
            papara = variable36.bind(tangon)(status, papara);
            record[7] = papara;
            status = _closure1_slot12;
            papara = 43;
            papara = quebec[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = equals;
            papara['disabled'] = limora;
            limora = {};
            limora['backgroundColor'] = whisks;
            papara['tagStyle'] = limora;
            papara = status.bind(tangon)(target, papara);
            record[8] = papara;
            cntext = cntext != sierra;
            if(!cntext) { _fun00006_ip = 2477; continue _fun00005 }
 2440:
            status = _closure1_slot12;
            target = _closure1_slot1;
            limora = _closure1_slot2;
            papara = 44;
            papara = limora[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['legacyUsername'] = sierra;
            cntext = status.bind(tangon)(target, papara);
 2477:
            record[9] = cntext;
            vacuum['children'] = record;
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[2] = vacuum;
            update['children'] = ctrled;
            update = golfie.bind(tangon)(source, update);
            echoed[1] = update;
            result['children'] = echoed;
            result = golfie.bind(tangon)(oscard, result);
            output[1] = result;
            kiloes['children'] = output;
            kiloes = golfie.bind(tangon)(sizing, kiloes);
            backup[1] = kiloes;
            option['children'] = backup;
            romeon = golfie.bind(tangon)(romeon, option);
            option = new Array(2);
            option[0] = romeon;
            verify = !verify;
            if(!verify) { _fun00006_ip = 2564; continue _fun00005 }
 2561:
            verify = !yankee;
 2564:
            if(!verify) { _fun00006_ip = 2610; continue _fun00005 }
 2567:
            romeon = _closure1_slot12;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 45;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.UserProfilePremiumUpsellCard;
            offset = {};
            offset['isTryItOut'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 2610:
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
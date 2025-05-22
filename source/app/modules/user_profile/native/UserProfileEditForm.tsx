// app/modules/user_profile/native/UserProfileEditForm.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
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
            michal = 6;
            michal = report[michal];
            entity = zuuluu.bind(tangon)(michal);
 111:
            sizing = entity;
 114:
            _closure2_slot3 = sizing;
            oscard = _closure1_slot1;
            result = _closure1_slot2;
            entity = 7;
            entity = result[entity];
            michal = oscard.bind(tangon)(entity);
            entity = michal.canUseCollectibles;
            yankee = entity.bind(michal)(output);
            entity = 8;
            michal = result[entity];
            zuuluu = oscard.bind(tangon)(michal);
            michal = 9;
            michal = result[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.EDIT_BANNER;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            _closure2_slot4 = report;
            zuuluu = _closure1_slot11;
            michal = _closure1_slot0;
            entity = result[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot11;
            report = 10;
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
                    entity = 11;
                    zuuluu = michal[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.openLazy;
                    tangon = _closure1_slot0;
                    zuuluu = 13;
                    zuuluu = michal[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = 12;
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
                    verify = 14;
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
                    golfie = 15;
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
            verify = 16;
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
    var _closure1_slot13 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BIO_MAX_LENGTH;
    var _closure1_slot6 = golfie;
    golfie = tangon.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot7 = golfie;
    tangon = tangon.PRONOUNS_MAX_LENGTH;
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.KEYBOARD_DELAY_MS;
    var _closure1_slot9 = golfie;
    tangon = tangon.UserProfileEditAutoFocusElement;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot11 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot12 = tangon;
    tangon = 47;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileEditForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileEditForm
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            variable36 = entity.currentUser;
            variable46 = entity.autoFocusElement;
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
            entity = 17;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            status = entity.bind(tangon)();
            entity = 18;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            variable50 = entity.bind(tangon)();
            entity = 19;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            michal = _closure1_slot3;
            entity = michal.useRef;
            cntext = null;
            backup = entity.bind(michal)(cntext);
            _closure2_slot0 = backup;
            entity = 20;
            entity = oscard[entity];
            michal = report.bind(tangon)(entity);
            entity = {};
            zuuluu = false;
            entity['includeKeyboardHeightAndroid'] = zuuluu;
            entity = michal.bind(tangon)(entity);
            entity = entity.insets;
            golfie = entity.bottom;
            entity = 21;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.errors;
            equals = entity.isSubmitting;
            verify = entity.pendingAvatar;
            variable41 = entity.pendingAvatarDecoration;
            variable62 = entity.pendingBanner;
            variable40 = entity.pendingProfileEffectId;
            variable37 = entity.pendingThemeColors;
            variable61 = entity.pendingAccentColor;
            source = entity.tryItOutBanner;
            variable38 = entity.tryItOutThemeColors;
            variable56 = entity.pendingGlobalName;
            variable52 = entity.pendingPronouns;
            variable48 = entity.pendingBio;
            sierra = entity.pendingLegacyUsernameDisabled;
            whisks = entity.pendingPrimaryGuildId;
            entity = 22;
            entity = oscard[entity];
            michal = report.bind(tangon)(entity);
            entity = 'UserProfileEditForm';
            entity = michal.bind(tangon)(entity);
            michal = _closure1_slot0;
            entity = 23;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useGuildAutomodProfileQuarantineErrors;
            michal = entity.bind(michal)();
            entity = 24;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            oscard = variable36.id;
            option = cntext != oscard;
            record = '';
            entity = record;
            if(!option) { _fun00006_ip = 352; continue _fun00005 }
 349:
            entity = oscard;
 352:
            variable39 = report.bind(tangon)(entity);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 25;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            entity = option.useCustomStatusActivity;
            variable58 = entity.bind(option)();
            entity = 26;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            report = option.getPendingAvatarSrc;
            entity = {};
            romeon = variable36.id;
            entity['userId'] = romeon;
            entity['image'] = verify;
            variable42 = report.bind(option)(entity);
            report = _closure1_slot1;
            entity = 27;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            papara = entity.bind(tangon)(variable39, sierra);
            entity = 7;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = report.canUsePremiumProfileCustomization;
            verify = entity.bind(report)(variable36);
            entity = cntext == variable39;
            limora = undefined;
            if(entity) { _fun00006_ip = 492; continue _fun00005 }
 480:
            entity = variable39.getLegacyUsername;
            limora = entity.bind(variable39)();
 492:
            entity = variable36.globalName;
            report = cntext != entity;
            variable55 = record;
            if(!report) { _fun00006_ip = 511; continue _fun00005 }
 508:
            variable55 = entity;
 511:
            report = cntext == variable39;
            entity = undefined;
            if(report) { _fun00006_ip = 526; continue _fun00005 }
 520:
            entity = variable39.pronouns;
 526:
            report = cntext != entity;
            variable51 = record;
            if(!report) { _fun00006_ip = 539; continue _fun00005 }
 536:
            variable51 = entity;
 539:
            _closure2_slot2 = variable51;
            report = cntext == variable39;
            entity = undefined;
            if(report) { _fun00006_ip = 558; continue _fun00005 }
 552:
            entity = variable39.bio;
 558:
            report = cntext != entity;
            variable47 = record;
            if(!report) { _fun00006_ip = 571; continue _fun00005 }
 568:
            variable47 = entity;
 571:
            _closure2_slot3 = variable47;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 28;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = {};
            entity['user'] = variable36;
            entity['displayProfile'] = variable39;
            oscard = variable37;
            if(!foxtra) { _fun00006_ip = 615; continue _fun00005 }
 612:
            oscard = variable38;
 615:
            entity['pendingThemeColors'] = oscard;
            entity['isPreview'] = foxtra;
            entity = report.bind(tangon)(entity);
            report = entity.theme;
            variable54 = entity.primaryColor;
            ctrled = entity.secondaryColor;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 29;
            entity = option[entity];
            option = oscard.bind(tangon)(entity);
            oscard = option.useUserProfileColors;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable54;
            entity['secondaryColor'] = ctrled;
            entity = oscard.bind(option)(entity);
            vacuum = entity.gradientFallbackBackground;
            result = entity.gradientSecondaryBackground;
            quebec = entity.containerBackground;
            entity = entity.avatarBackground;
            variable60 = 0;
            oscard = 0;
            if(verify) { _fun00006_ip = 736; continue _fun00005 }
 727:
            oscard = 0;
            if(yankee) { _fun00006_ip = 736; continue _fun00005 }
 732:
            oscard = _closure1_slot5;
 736:
            golfie = golfie + oscard;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            oscard = 30;
            oscard = romeon[oscard];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.spacing;
            oscard = oscard.PX_16;
            config = golfie + oscard;
            variable64 = {};
            variable64['backgroundColor'] = entity;
            entity = cntext == zuuluu;
            variable57 = undefined;
            if(entity) { _fun00006_ip = 807; continue _fun00005 }
 789:
            entity = zuuluu.username;
            oscard = cntext == entity;
            variable57 = undefined;
            if(oscard) { _fun00006_ip = 807; continue _fun00005 }
 803:
            variable57 = entity[variable60];
 807:
            if(!(cntext == variable57)) { _fun00006_ip = 833; continue _fun00005 }
 811:
            oscard = zuuluu.global_name;
            golfie = cntext == oscard;
            entity = undefined;
            if(golfie) { _fun00006_ip = 830; continue _fun00005 }
 826:
            entity = oscard[variable60];
 830:
            variable57 = entity;
 833:
            if(!(cntext == variable57)) { _fun00006_ip = 868; continue _fun00005 }
 837:
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 865; continue _fun00005 }
 846:
            michal = michal.nick;
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 865; continue _fun00005 }
 861:
            entity = michal[variable60];
 865:
            variable57 = entity;
 868:
            entity = zuuluu.pronouns;
            michal = cntext == entity;
            variable53 = undefined;
            if(michal) { _fun00006_ip = 887; continue _fun00005 }
 883:
            variable53 = entity[variable60];
 887:
            entity = zuuluu.bio;
            michal = cntext == entity;
            variable49 = undefined;
            if(michal) { _fun00006_ip = 906; continue _fun00005 }
 902:
            variable49 = entity[variable60];
 906:
            entity = global;
            michal = entity.Object;
            entity = michal.keys;
            entity = entity.bind(michal)(zuuluu);
            entity = entity.length;
            entity = entity > variable60;
            variable59 = null;
            if(!entity) { _fun00006_ip = 1004; continue _fun00005 }
 938:
            entity = cntext == variable49;
            variable59 = null;
            if(!entity) { _fun00006_ip = 1004; continue _fun00005 }
 947:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 16;
            michal = golfie[entity];
            michal = oscard.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.84MExs;
            variable59 = michal.bind(zuuluu)(entity);
 1004:
            variable43 = function() { // Original name: handleBlur
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
            zuuluu = _closure1_slot11;
            romeon = _closure1_slot0;
            target = _closure1_slot2;
            entity = 32;
            entity = target[entity];
            entity = romeon.bind(tangon)(entity);
            michal = entity.ThemeContextProvider;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable54;
            entity['secondaryColor'] = ctrled;
            golfie = _closure1_slot12;
            oscard = _closure1_slot4;
            report = {};
            kiloes = variable50.container;
            option = new Array(2);
            option[0] = kiloes;
            kiloes = {};
            kiloes['backgroundColor'] = result;
            option[1] = kiloes;
            report['style'] = option;
            option = 33;
            option = target[option];
            option = romeon.bind(tangon)(option);
            romeon = option.KeyboardAwareScrollView;
            option = {'enableAutomaticScroll': true, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable44 = true;
            kiloes = _closure1_slot9;
            option['keyboardOpeningTime'] = kiloes;
            option['ref'] = backup;
            kiloes = _closure1_slot11;
            backup = {};
            sizing = variable50.bounceOffset;
            backup['style'] = sizing;
            kiloes = kiloes.bind(tangon)(oscard, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            sequen = _closure1_slot1;
            update = 34;
            kiloes = target[update];
            sizing = sequen.bind(tangon)(kiloes);
            kiloes = {};
            kiloes['fallbackBackground'] = vacuum;
            kiloes['primaryColor'] = variable54;
            kiloes['secondaryColor'] = ctrled;
            output = {};
            output['backgroundColor'] = result;
            kiloes['containerStyle'] = output;
            echoed = _closure1_slot11;
            result = _closure1_slot13;
            output = {};
            output['user'] = variable36;
            output['displayProfile'] = variable39;
            output['pendingAvatarSrc'] = variable42;
            output['pendingBanner'] = variable62;
            output['pendingAccentColor'] = variable61;
            output['pendingThemeColors'] = variable37;
            output['tryItOutBanner'] = source;
            output['isTryItOut'] = foxtra;
            output['disabled'] = equals;
            result = echoed.bind(tangon)(result, output);
            output = new Array(2);
            output[0] = result;
            result = {};
            source = _closure1_slot11;
            echoed = {};
            variable62 = status.avatarBackground;
            variable61 = new Array(4);
            variable61[0] = variable62;
            variable62 = status.avatarPosition;
            variable61[1] = variable62;
            variable62 = variable50.avatarContainer;
            variable61[2] = variable62;
            variable61[3] = variable64;
            echoed['style'] = variable61;
            variable63 = _closure1_slot11;
            variable61 = 35;
            variable61 = target[variable61];
            variable62 = sequen.bind(tangon)(variable61);
            variable61 = {};
            variable61['user'] = variable36;
            variable61['disabled'] = equals;
            variable65 = cntext != foxtra;
            variable61['disableStatus'] = variable65;
            variable61['statusStyle'] = variable64;
            variable61['isTryItOut'] = foxtra;
            variable64 = _closure1_slot10;
            variable64 = variable64.AVATAR;
            variable64 = variable46 === variable64;
            variable61['autoStartEditFlow'] = variable64;
            variable61 = variable63.bind(tangon)(variable62, variable61);
            echoed['children'] = variable61;
            source = source.bind(tangon)(oscard, echoed);
            echoed = new Array(2);
            echoed[0] = source;
            update = target[update];
            source = sequen.bind(tangon)(update);
            update = {};
            update['fallbackBackground'] = vacuum;
            update['primaryColor'] = variable54;
            update['secondaryColor'] = ctrled;
            vacuum = status.profileContent;
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            vacuum = {};
            vacuum['paddingTop'] = variable60;
            vacuum['paddingBottom'] = config;
            ctrled[1] = vacuum;
            update['containerStyle'] = ctrled;
            config = _closure1_slot11;
            ctrled = 36;
            ctrled = target[ctrled];
            vacuum = sequen.bind(tangon)(ctrled);
            ctrled = {};
            ctrled['customStatusActivity'] = variable58;
            variable54 = cntext != variable54;
            ctrled['hasCustomProfileTheme'] = variable54;
            variable54 = status.customStatusBubble;
            ctrled['style'] = variable54;
            status = status.emojiOnlyCustomStatusBubble;
            ctrled['emojiOnlyStyle'] = status;
            ctrled['editEnabled'] = variable44;
            vacuum = config.bind(tangon)(vacuum, ctrled);
            ctrled = new Array(3);
            ctrled[0] = vacuum;
            config = _closure1_slot11;
            vacuum = 37;
            vacuum = target[vacuum];
            sequen = sequen.bind(tangon)(vacuum);
            vacuum = {};
            vacuum['user'] = variable36;
            vacuum['displayName'] = variable56;
            vacuum['badges'] = papara;
            papara = variable51;
            if(!(cntext != variable52)) { _fun00006_ip = 1596; continue _fun00005 }
 1593:
            papara = variable52;
 1596:
            vacuum['pronouns'] = papara;
            vacuum['badgeContainerBackground'] = quebec;
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[1] = vacuum;
            _closure2_slot1 = variable36;
            config = _closure1_slot12;
            sequen = _closure1_slot4;
            vacuum = {};
            target = variable50.formContainer;
            papara = new Array(2);
            papara[0] = target;
            target = {};
            target['backgroundColor'] = quebec;
            papara[1] = target;
            vacuum['style'] = papara;
            target = cntext != variable59;
            papara = null;
            if(!target) { _fun00006_ip = 1756; continue _fun00005 }
 1667:
            papara = null;
            if(!(record !== variable59)) { _fun00006_ip = 1756; continue _fun00005 }
 1673:
            status = _closure1_slot11;
            target = _closure1_slot4;
            record = {};
            variable50 = variable50.errorContainer;
            record['style'] = variable50;
            variable58 = _closure1_slot11;
            variable54 = _closure1_slot0;
            variable60 = _closure1_slot2;
            variable50 = 31;
            variable50 = variable60[variable50];
            variable50 = variable54.bind(tangon)(variable50);
            variable54 = variable50.Text;
            variable50 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable50['children'] = variable59;
            variable50 = variable58.bind(tangon)(variable54, variable50);
            record['children'] = variable50;
            papara = status.bind(tangon)(target, record);
 1756:
            record = new Array(10);
            record[0] = papara;
            variable50 = _closure1_slot11;
            status = _closure1_slot1;
            variable58 = _closure1_slot2;
            papara = 38;
            target = variable58[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable61 = _closure1_slot0;
            variable54 = 16;
            variable59 = variable58[variable54];
            variable59 = variable61.bind(tangon)(variable59);
            variable60 = variable59.intl;
            variable59 = variable60.string;
            variable58 = variable58[variable54];
            variable58 = variable61.bind(tangon)(variable58);
            variable58 = variable58.t;
            variable58 = variable58.9AjdkJ;
            variable58 = variable59.bind(variable60)(variable58);
            target['label'] = variable58;
            target['errorMessage'] = variable57;
            if(!(cntext != variable56)) { _fun00006_ip = 1857; continue _fun00005 }
 1854:
            variable55 = variable56;
 1857:
            target['value'] = variable55;
            variable55 = function(argFoo) { // Original name: onChange
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
                    entity = 39;
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
            target['onChange'] = variable55;
            variable55 = variable36.toString;
            variable55 = variable55.bind(variable36)();
            target['placeholder'] = variable55;
            variable55 = _closure1_slot7;
            target['maxLength'] = variable55;
            target['disabled'] = equals;
            target['onBlur'] = variable43;
            target = variable50.bind(tangon)(status, target);
            record[1] = target;
            variable50 = _closure1_slot11;
            status = _closure1_slot1;
            variable55 = _closure1_slot2;
            target = variable55[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable58 = _closure1_slot0;
            variable56 = variable55[variable54];
            variable56 = variable58.bind(tangon)(variable56);
            variable57 = variable56.intl;
            variable56 = variable57.string;
            variable55 = variable55[variable54];
            variable55 = variable58.bind(tangon)(variable55);
            variable55 = variable55.t;
            variable55 = variable55.+T3RIy;
            variable55 = variable56.bind(variable57)(variable55);
            target['label'] = variable55;
            target['errorMessage'] = variable53;
            if(!(cntext != variable52)) { _fun00006_ip = 2002; continue _fun00005 }
 1999:
            variable51 = variable52;
 2002:
            target['value'] = variable51;
            variable51 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserPronouns;
                michal = _closure2_slot2;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            target['onChange'] = variable51;
            variable51 = _closure1_slot8;
            target['maxLength'] = variable51;
            target['disabled'] = equals;
            target['onBlur'] = variable43;
            target = variable50.bind(tangon)(status, target);
            record[2] = target;
            status = _closure1_slot11;
            target = _closure1_slot1;
            variable50 = _closure1_slot2;
            papara = variable50[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            variable53 = _closure1_slot0;
            variable51 = variable50[variable54];
            variable51 = variable53.bind(tangon)(variable51);
            variable52 = variable51.intl;
            variable51 = variable52.string;
            variable50 = variable50[variable54];
            variable50 = variable53.bind(tangon)(variable50);
            variable50 = variable50.t;
            variable50 = variable50.NepzEx;
            variable50 = variable51.bind(variable52)(variable50);
            papara['label'] = variable50;
            papara['errorMessage'] = variable49;
            if(!(cntext != variable48)) { _fun00006_ip = 2133; continue _fun00005 }
 2130:
            variable47 = variable48;
 2133:
            papara['value'] = variable47;
            variable45 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 15;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserBio;
                michal = _closure2_slot3;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            papara['onChange'] = variable45;
            variable45 = _closure1_slot10;
            variable45 = variable45.BIO;
            variable45 = variable46 === variable45;
            papara['autoFocus'] = variable45;
            variable45 = _closure1_slot6;
            papara['maxLength'] = variable45;
            variable45 = 5;
            papara['numberOfLines'] = variable45;
            papara['multiline'] = variable44;
            papara['disabled'] = equals;
            papara['onBlur'] = variable43;
            papara = status.bind(tangon)(target, papara);
            record[3] = papara;
            status = _closure1_slot11;
            target = _closure1_slot1;
            variable43 = _closure1_slot2;
            papara = 40;
            papara = variable43[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            variable44 = _closure1_slot0;
            variable45 = _closure1_slot2;
            variable43 = 14;
            variable43 = variable45[variable43];
            variable44 = variable44.bind(tangon)(variable43);
            if(foxtra) { _fun00006_ip = 2270; continue _fun00005 }
 2262:
            variable43 = variable44.setPendingThemeColors;
            _fun00006_ip = 2276; continue _fun00005;
 2270:
            variable43 = variable44.setTryItOutThemeColors;
 2276:
            papara['onProfileThemeColorsChanged'] = variable43;
            papara['pendingAvatarSrc'] = variable42;
            if(!foxtra) { _fun00006_ip = 2292; continue _fun00005 }
 2289:
            variable37 = variable38;
 2292:
            papara['pendingThemeColors'] = variable37;
            papara['isTryItOut'] = foxtra;
            papara = status.bind(tangon)(target, papara);
            record[4] = papara;
            variable38 = _closure1_slot11;
            target = _closure1_slot1;
            variable37 = _closure1_slot2;
            papara = 41;
            papara = variable37[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            papara['pendingAvatarDecoration'] = variable41;
            papara = variable38.bind(tangon)(status, papara);
            record[5] = papara;
            variable38 = _closure1_slot11;
            papara = 42;
            papara = variable37[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            papara['pendingProfileEffectId'] = variable40;
            papara['displayProfile'] = variable39;
            papara = variable38.bind(tangon)(status, papara);
            record[6] = papara;
            variable38 = _closure1_slot11;
            papara = 43;
            papara = variable37[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            papara = variable38.bind(tangon)(status, papara);
            record[7] = papara;
            status = _closure1_slot11;
            papara = 44;
            papara = variable37[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            papara['disabled'] = equals;
            equals = {};
            equals['backgroundColor'] = quebec;
            papara['tagStyle'] = equals;
            papara['pendingPrimaryGuildId'] = whisks;
            papara = status.bind(tangon)(target, papara);
            record[8] = papara;
            cntext = cntext != limora;
            if(!cntext) { _fun00006_ip = 2532; continue _fun00005 }
 2490:
            status = _closure1_slot11;
            target = _closure1_slot1;
            whisks = _closure1_slot2;
            papara = 45;
            papara = whisks[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['legacyUsername'] = limora;
            papara['pendingLegacyUsernameDisabled'] = sierra;
            cntext = status.bind(tangon)(target, papara);
 2532:
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
            if(!verify) { _fun00006_ip = 2619; continue _fun00005 }
 2616:
            verify = !yankee;
 2619:
            if(!verify) { _fun00006_ip = 2665; continue _fun00005 }
 2622:
            romeon = _closure1_slot11;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 46;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.UserProfilePremiumUpsellCard;
            offset = {};
            offset['isTryItOut'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 2665:
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
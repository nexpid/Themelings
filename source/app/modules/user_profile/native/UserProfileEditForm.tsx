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
    tangon = 48;
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
            entity = 18;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            status = entity.bind(tangon)();
            entity = 19;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            variable50 = entity.bind(tangon)();
            michal = _closure1_slot0;
            entity = 20;
            entity = oscard[entity];
            option = michal.bind(tangon)(entity);
            golfie = option.useStateFromStores;
            entity = _closure1_slot5;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                entity = _closure1_slot5;
                entity = entity.keyboardOpen;
                return entity;
            };
            yankee = golfie.bind(option)(zuuluu, entity);
            zuuluu = _closure1_slot3;
            entity = zuuluu.useRef;
            cntext = null;
            backup = entity.bind(zuuluu)(cntext);
            _closure2_slot0 = backup;
            entity = 21;
            entity = oscard[entity];
            zuuluu = report.bind(tangon)(entity);
            entity = {};
            golfie = false;
            entity['includeKeyboardHeightAndroid'] = golfie;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.insets;
            golfie = entity.bottom;
            entity = 22;
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
            oscard = variable36.id;
            option = cntext != oscard;
            record = '';
            entity = record;
            if(!option) { _fun00006_ip = 378; continue _fun00005 }
 375:
            entity = oscard;
 378:
            variable39 = report.bind(tangon)(entity);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 26;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            entity = option.useCustomStatusActivity;
            variable58 = entity.bind(option)();
            entity = 27;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            report = option.getPendingAvatarSrc;
            entity = {};
            romeon = variable36.id;
            entity['userId'] = romeon;
            entity['image'] = verify;
            variable42 = report.bind(option)(entity);
            report = _closure1_slot1;
            entity = 28;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            papara = entity.bind(tangon)(variable39, sierra);
            entity = 8;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = report.canUsePremiumProfileCustomization;
            verify = entity.bind(report)(variable36);
            entity = cntext == variable39;
            limora = undefined;
            if(entity) { _fun00006_ip = 518; continue _fun00005 }
 506:
            entity = variable39.getLegacyUsername;
            limora = entity.bind(variable39)();
 518:
            entity = variable36.globalName;
            report = cntext != entity;
            variable55 = record;
            if(!report) { _fun00006_ip = 537; continue _fun00005 }
 534:
            variable55 = entity;
 537:
            report = cntext == variable39;
            entity = undefined;
            if(report) { _fun00006_ip = 552; continue _fun00005 }
 546:
            entity = variable39.pronouns;
 552:
            report = cntext != entity;
            variable51 = record;
            if(!report) { _fun00006_ip = 565; continue _fun00005 }
 562:
            variable51 = entity;
 565:
            _closure2_slot2 = variable51;
            report = cntext == variable39;
            entity = undefined;
            if(report) { _fun00006_ip = 584; continue _fun00005 }
 578:
            entity = variable39.bio;
 584:
            report = cntext != entity;
            variable47 = record;
            if(!report) { _fun00006_ip = 597; continue _fun00005 }
 594:
            variable47 = entity;
 597:
            _closure2_slot3 = variable47;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 29;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = {};
            entity['user'] = variable36;
            entity['displayProfile'] = variable39;
            oscard = variable37;
            if(!foxtra) { _fun00006_ip = 641; continue _fun00005 }
 638:
            oscard = variable38;
 641:
            entity['pendingThemeColors'] = oscard;
            entity['isPreview'] = foxtra;
            entity = report.bind(tangon)(entity);
            report = entity.theme;
            variable54 = entity.primaryColor;
            ctrled = entity.secondaryColor;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 30;
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
            if(verify) { _fun00006_ip = 760; continue _fun00005 }
 751:
            oscard = 0;
            if(yankee) { _fun00006_ip = 760; continue _fun00005 }
 756:
            oscard = _closure1_slot6;
 760:
            golfie = golfie + oscard;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            oscard = 31;
            oscard = romeon[oscard];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.spacing;
            oscard = oscard.PX_16;
            config = golfie + oscard;
            variable64 = {};
            variable64['backgroundColor'] = entity;
            entity = cntext == zuuluu;
            variable57 = undefined;
            if(entity) { _fun00006_ip = 831; continue _fun00005 }
 813:
            entity = zuuluu.username;
            oscard = cntext == entity;
            variable57 = undefined;
            if(oscard) { _fun00006_ip = 831; continue _fun00005 }
 827:
            variable57 = entity[variable60];
 831:
            if(!(cntext == variable57)) { _fun00006_ip = 857; continue _fun00005 }
 835:
            oscard = zuuluu.global_name;
            golfie = cntext == oscard;
            entity = undefined;
            if(golfie) { _fun00006_ip = 854; continue _fun00005 }
 850:
            entity = oscard[variable60];
 854:
            variable57 = entity;
 857:
            if(!(cntext == variable57)) { _fun00006_ip = 892; continue _fun00005 }
 861:
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 889; continue _fun00005 }
 870:
            michal = michal.nick;
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 889; continue _fun00005 }
 885:
            entity = michal[variable60];
 889:
            variable57 = entity;
 892:
            entity = zuuluu.pronouns;
            michal = cntext == entity;
            variable53 = undefined;
            if(michal) { _fun00006_ip = 911; continue _fun00005 }
 907:
            variable53 = entity[variable60];
 911:
            entity = zuuluu.bio;
            michal = cntext == entity;
            variable49 = undefined;
            if(michal) { _fun00006_ip = 930; continue _fun00005 }
 926:
            variable49 = entity[variable60];
 930:
            entity = global;
            michal = entity.Object;
            entity = michal.keys;
            entity = entity.bind(michal)(zuuluu);
            entity = entity.length;
            entity = entity > variable60;
            variable59 = null;
            if(!entity) { _fun00006_ip = 1028; continue _fun00005 }
 962:
            entity = cntext == variable49;
            variable59 = null;
            if(!entity) { _fun00006_ip = 1028; continue _fun00005 }
 971:
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
            variable59 = michal.bind(zuuluu)(entity);
 1028:
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
            zuuluu = _closure1_slot12;
            romeon = _closure1_slot0;
            target = _closure1_slot2;
            entity = 33;
            entity = target[entity];
            entity = romeon.bind(tangon)(entity);
            michal = entity.ThemeContextProvider;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable54;
            entity['secondaryColor'] = ctrled;
            golfie = _closure1_slot13;
            oscard = _closure1_slot4;
            report = {};
            kiloes = variable50.container;
            option = new Array(2);
            option[0] = kiloes;
            kiloes = {};
            kiloes['backgroundColor'] = result;
            option[1] = kiloes;
            report['style'] = option;
            option = 34;
            option = target[option];
            option = romeon.bind(tangon)(option);
            romeon = option.KeyboardAwareScrollView;
            option = {'enableAutomaticScroll': true, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable44 = true;
            kiloes = _closure1_slot10;
            option['keyboardOpeningTime'] = kiloes;
            option['ref'] = backup;
            kiloes = _closure1_slot12;
            backup = {};
            sizing = variable50.bounceOffset;
            backup['style'] = sizing;
            kiloes = kiloes.bind(tangon)(oscard, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            sequen = _closure1_slot1;
            update = 35;
            kiloes = target[update];
            sizing = sequen.bind(tangon)(kiloes);
            kiloes = {};
            kiloes['fallbackBackground'] = vacuum;
            kiloes['primaryColor'] = variable54;
            kiloes['secondaryColor'] = ctrled;
            output = {};
            output['backgroundColor'] = result;
            kiloes['containerStyle'] = output;
            echoed = _closure1_slot12;
            result = _closure1_slot14;
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
            source = _closure1_slot12;
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
            variable63 = _closure1_slot12;
            variable61 = 36;
            variable61 = target[variable61];
            variable62 = sequen.bind(tangon)(variable61);
            variable61 = {};
            variable61['user'] = variable36;
            variable61['disabled'] = equals;
            variable65 = cntext != foxtra;
            variable61['disableStatus'] = variable65;
            variable61['statusStyle'] = variable64;
            variable61['isTryItOut'] = foxtra;
            variable64 = _closure1_slot11;
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
            config = _closure1_slot12;
            ctrled = 37;
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
            config = _closure1_slot12;
            vacuum = 38;
            vacuum = target[vacuum];
            sequen = sequen.bind(tangon)(vacuum);
            vacuum = {};
            vacuum['user'] = variable36;
            vacuum['displayName'] = variable56;
            vacuum['badges'] = papara;
            papara = variable51;
            if(!(cntext != variable52)) { _fun00006_ip = 1619; continue _fun00005 }
 1616:
            papara = variable52;
 1619:
            vacuum['pronouns'] = papara;
            vacuum['badgeContainerBackground'] = quebec;
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[1] = vacuum;
            _closure2_slot1 = variable36;
            config = _closure1_slot13;
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
            if(!target) { _fun00006_ip = 1779; continue _fun00005 }
 1690:
            papara = null;
            if(!(record !== variable59)) { _fun00006_ip = 1779; continue _fun00005 }
 1696:
            status = _closure1_slot12;
            target = _closure1_slot4;
            record = {};
            variable50 = variable50.errorContainer;
            record['style'] = variable50;
            variable58 = _closure1_slot12;
            variable54 = _closure1_slot0;
            variable60 = _closure1_slot2;
            variable50 = 32;
            variable50 = variable60[variable50];
            variable50 = variable54.bind(tangon)(variable50);
            variable54 = variable50.Text;
            variable50 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable50['children'] = variable59;
            variable50 = variable58.bind(tangon)(variable54, variable50);
            record['children'] = variable50;
            papara = status.bind(tangon)(target, record);
 1779:
            record = new Array(10);
            record[0] = papara;
            variable50 = _closure1_slot12;
            status = _closure1_slot1;
            variable58 = _closure1_slot2;
            papara = 39;
            target = variable58[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable61 = _closure1_slot0;
            variable54 = 17;
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
            if(!(cntext != variable56)) { _fun00006_ip = 1880; continue _fun00005 }
 1877:
            variable55 = variable56;
 1880:
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
                    entity = 40;
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
            variable55 = _closure1_slot8;
            target['maxLength'] = variable55;
            target['disabled'] = equals;
            target['onBlur'] = variable43;
            target = variable50.bind(tangon)(status, target);
            record[1] = target;
            variable50 = _closure1_slot12;
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
            if(!(cntext != variable52)) { _fun00006_ip = 2025; continue _fun00005 }
 2022:
            variable51 = variable52;
 2025:
            target['value'] = variable51;
            variable51 = function(argFoo) { // Original name: onChange
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
            target['onChange'] = variable51;
            variable51 = _closure1_slot9;
            target['maxLength'] = variable51;
            target['disabled'] = equals;
            target['onBlur'] = variable43;
            target = variable50.bind(tangon)(status, target);
            record[2] = target;
            status = _closure1_slot12;
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
            if(!(cntext != variable48)) { _fun00006_ip = 2156; continue _fun00005 }
 2153:
            variable47 = variable48;
 2156:
            papara['value'] = variable47;
            variable45 = function(argFoo) { // Original name: onChange
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
            papara['onChange'] = variable45;
            variable45 = _closure1_slot11;
            variable45 = variable45.BIO;
            variable45 = variable46 === variable45;
            papara['autoFocus'] = variable45;
            variable45 = _closure1_slot7;
            papara['maxLength'] = variable45;
            variable45 = 5;
            papara['numberOfLines'] = variable45;
            papara['multiline'] = variable44;
            papara['disabled'] = equals;
            papara['onBlur'] = variable43;
            papara = status.bind(tangon)(target, papara);
            record[3] = papara;
            status = _closure1_slot12;
            target = _closure1_slot1;
            variable43 = _closure1_slot2;
            papara = 41;
            papara = variable43[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            variable44 = _closure1_slot0;
            variable45 = _closure1_slot2;
            variable43 = 15;
            variable43 = variable45[variable43];
            variable44 = variable44.bind(tangon)(variable43);
            if(foxtra) { _fun00006_ip = 2293; continue _fun00005 }
 2285:
            variable43 = variable44.setPendingThemeColors;
            _fun00006_ip = 2299; continue _fun00005;
 2293:
            variable43 = variable44.setTryItOutThemeColors;
 2299:
            papara['onProfileThemeColorsChanged'] = variable43;
            papara['pendingAvatarSrc'] = variable42;
            if(!foxtra) { _fun00006_ip = 2315; continue _fun00005 }
 2312:
            variable37 = variable38;
 2315:
            papara['pendingThemeColors'] = variable37;
            papara['isTryItOut'] = foxtra;
            papara = status.bind(tangon)(target, papara);
            record[4] = papara;
            variable38 = _closure1_slot12;
            target = _closure1_slot1;
            variable37 = _closure1_slot2;
            papara = 42;
            papara = variable37[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            papara['pendingAvatarDecoration'] = variable41;
            papara = variable38.bind(tangon)(status, papara);
            record[5] = papara;
            variable38 = _closure1_slot12;
            papara = 43;
            papara = variable37[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            papara['pendingProfileEffectId'] = variable40;
            papara['displayProfile'] = variable39;
            papara = variable38.bind(tangon)(status, papara);
            record[6] = papara;
            variable38 = _closure1_slot12;
            papara = 44;
            papara = variable37[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable36;
            papara = variable38.bind(tangon)(status, papara);
            record[7] = papara;
            status = _closure1_slot12;
            papara = 45;
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
            if(!cntext) { _fun00006_ip = 2555; continue _fun00005 }
 2513:
            status = _closure1_slot12;
            target = _closure1_slot1;
            whisks = _closure1_slot2;
            papara = 46;
            papara = whisks[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['legacyUsername'] = limora;
            papara['pendingLegacyUsernameDisabled'] = sierra;
            cntext = status.bind(tangon)(target, papara);
 2555:
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
            if(!verify) { _fun00006_ip = 2642; continue _fun00005 }
 2639:
            verify = !yankee;
 2642:
            if(!verify) { _fun00006_ip = 2688; continue _fun00005 }
 2645:
            romeon = _closure1_slot12;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 47;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.UserProfilePremiumUpsellCard;
            offset = {};
            offset['isTryItOut'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 2688:
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
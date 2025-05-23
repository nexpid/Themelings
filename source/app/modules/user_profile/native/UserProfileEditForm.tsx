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
            result = zuuluu.user;
            var _closure2_slot0 = result;
            kiloes = zuuluu.displayProfile;
            var _closure2_slot1 = kiloes;
            sizing = zuuluu.pendingAvatarSrc;
            output = zuuluu.pendingBanner;
            foxtra = zuuluu.pendingAccentColor;
            backup = zuuluu.pendingThemeColors;
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
            michal = 8;
            michal = report[michal];
            entity = zuuluu.bind(tangon)(michal);
 111:
            output = entity;
 114:
            _closure2_slot3 = output;
            oscard = _closure1_slot1;
            report = _closure1_slot2;
            entity = 9;
            entity = report[entity];
            michal = oscard.bind(tangon)(entity);
            entity = michal.canUseCollectibles;
            yankee = entity.bind(michal)(result);
            entity = 10;
            michal = report[entity];
            zuuluu = oscard.bind(tangon)(michal);
            michal = 11;
            michal = report[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.EDIT_BANNER;
            michal = zuuluu.bind(tangon)(michal);
            golfie = michal.analyticsLocations;
            _closure2_slot4 = golfie;
            zuuluu = _closure1_slot13;
            michal = _closure1_slot0;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = golfie;
            golfie = _closure1_slot13;
            romeon = 12;
            report = report[romeon];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['user'] = result;
            report['displayProfile'] = kiloes;
            report['pendingBanner'] = output;
            report['pendingAvatarSrc'] = sizing;
            report['pendingThemeColors'] = backup;
            report['pendingAccentColor'] = foxtra;
            backup = null;
            sizing = backup == kiloes;
            foxtra = undefined;
            if(sizing) { _fun00002_ip = 290; continue _fun00001 }
 284:
            foxtra = kiloes.banner;
 290:
            foxtra = backup != foxtra;
            if(!foxtra) { _fun00002_ip = 299; continue _fun00001 }
 297:
            romeon = undefined;
 299:
            report['bannerSafeArea'] = romeon;
            report['showProfilePreviewButton'] = yankee;
            offset = function() { // Original name: onPressEdit
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    tangon = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 13;
                    zuuluu = michal[entity];
                    entity = undefined;
                    oscard = tangon.bind(entity)(zuuluu);
                    report = oscard.openLazy;
                    tangon = _closure1_slot0;
                    zuuluu = 15;
                    zuuluu = michal[zuuluu];
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = 14;
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
                    verify = 16;
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
                    golfie = 17;
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
            verify = 18;
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
    var _closure1_slot15 = entity;
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
    tangon = tangon.ProfileCustomizationScrollPositions;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.KEYBOARD_DELAY_MS;
    var _closure1_slot11 = golfie;
    tangon = tangon.UserProfileEditAutoFocusElement;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.jsx;
    var _closure1_slot13 = golfie;
    tangon = tangon.jsxs;
    var _closure1_slot14 = tangon;
    tangon = 51;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileEditForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: UserProfileEditForm
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            variable39 = entity.currentUser;
            variable48 = entity.autoFocusElement;
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
            var _closure2_slot4 = tangon;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 19;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            status = entity.bind(tangon)();
            entity = 20;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            variable51 = entity.bind(tangon)();
            entity = 21;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            michal = _closure1_slot3;
            entity = michal.useRef;
            cntext = null;
            backup = entity.bind(michal)(cntext);
            _closure2_slot0 = backup;
            entity = 22;
            entity = oscard[entity];
            michal = report.bind(tangon)(entity);
            entity = {};
            zuuluu = false;
            entity['includeKeyboardHeightAndroid'] = zuuluu;
            entity = michal.bind(tangon)(entity);
            entity = entity.insets;
            golfie = entity.bottom;
            entity = 23;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.errors;
            variable37 = entity.isSubmitting;
            verify = entity.pendingAvatar;
            variable43 = entity.pendingAvatarDecoration;
            variable63 = entity.pendingBanner;
            variable42 = entity.pendingProfileEffectId;
            quebec = entity.pendingNameplate;
            equals = entity.pendingThemeColors;
            variable62 = entity.pendingAccentColor;
            source = entity.tryItOutBanner;
            variable40 = entity.tryItOutThemeColors;
            variable57 = entity.pendingGlobalName;
            variable53 = entity.pendingPronouns;
            variable49 = entity.pendingBio;
            sierra = entity.pendingLegacyUsernameDisabled;
            variable36 = entity.pendingPrimaryGuildId;
            entity = 24;
            entity = oscard[entity];
            michal = report.bind(tangon)(entity);
            entity = 'UserProfileEditForm';
            entity = michal.bind(tangon)(entity);
            michal = _closure1_slot0;
            entity = 25;
            entity = oscard[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useGuildAutomodProfileQuarantineErrors;
            michal = entity.bind(michal)();
            entity = 26;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            oscard = variable39.id;
            option = cntext != oscard;
            record = '';
            entity = record;
            if(!option) { _fun00006_ip = 362; continue _fun00005 }
 359:
            entity = oscard;
 362:
            variable41 = report.bind(tangon)(entity);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 27;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            entity = option.useCustomStatusActivity;
            variable59 = entity.bind(option)();
            entity = 28;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            report = option.getPendingAvatarSrc;
            entity = {};
            romeon = variable39.id;
            entity['userId'] = romeon;
            entity['image'] = verify;
            variable44 = report.bind(option)(entity);
            report = _closure1_slot1;
            entity = 29;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            papara = entity.bind(tangon)(variable41, sierra);
            entity = 9;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = report.canUsePremiumProfileCustomization;
            verify = entity.bind(report)(variable39);
            entity = cntext == variable41;
            limora = undefined;
            if(entity) { _fun00006_ip = 502; continue _fun00005 }
 490:
            entity = variable41.getLegacyUsername;
            limora = entity.bind(variable41)();
 502:
            entity = variable39.globalName;
            report = cntext != entity;
            variable56 = record;
            if(!report) { _fun00006_ip = 521; continue _fun00005 }
 518:
            variable56 = entity;
 521:
            report = cntext == variable41;
            entity = undefined;
            if(report) { _fun00006_ip = 536; continue _fun00005 }
 530:
            entity = variable41.pronouns;
 536:
            report = cntext != entity;
            variable52 = record;
            if(!report) { _fun00006_ip = 549; continue _fun00005 }
 546:
            variable52 = entity;
 549:
            _closure2_slot2 = variable52;
            report = cntext == variable41;
            entity = undefined;
            if(report) { _fun00006_ip = 568; continue _fun00005 }
 562:
            entity = variable41.bio;
 568:
            report = cntext != entity;
            variable47 = record;
            if(!report) { _fun00006_ip = 581; continue _fun00005 }
 578:
            variable47 = entity;
 581:
            _closure2_slot3 = variable47;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 30;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = {};
            entity['user'] = variable39;
            entity['displayProfile'] = variable41;
            oscard = equals;
            if(!foxtra) { _fun00006_ip = 625; continue _fun00005 }
 622:
            oscard = variable40;
 625:
            entity['pendingThemeColors'] = oscard;
            entity['isPreview'] = foxtra;
            entity = report.bind(tangon)(entity);
            report = entity.theme;
            variable55 = entity.primaryColor;
            ctrled = entity.secondaryColor;
            oscard = _closure1_slot0;
            option = _closure1_slot2;
            entity = 31;
            entity = option[entity];
            option = oscard.bind(tangon)(entity);
            oscard = option.useUserProfileColors;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable55;
            entity['secondaryColor'] = ctrled;
            entity = oscard.bind(option)(entity);
            vacuum = entity.gradientFallbackBackground;
            result = entity.gradientSecondaryBackground;
            variable38 = entity.containerBackground;
            entity = entity.avatarBackground;
            variable61 = 0;
            oscard = 0;
            if(verify) { _fun00006_ip = 744; continue _fun00005 }
 735:
            oscard = 0;
            if(yankee) { _fun00006_ip = 744; continue _fun00005 }
 740:
            oscard = _closure1_slot6;
 744:
            golfie = golfie + oscard;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            oscard = 32;
            oscard = romeon[oscard];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.spacing;
            oscard = oscard.PX_16;
            config = golfie + oscard;
            variable65 = {};
            variable65['backgroundColor'] = entity;
            entity = cntext == zuuluu;
            variable58 = undefined;
            if(entity) { _fun00006_ip = 815; continue _fun00005 }
 797:
            entity = zuuluu.username;
            oscard = cntext == entity;
            variable58 = undefined;
            if(oscard) { _fun00006_ip = 815; continue _fun00005 }
 811:
            variable58 = entity[variable61];
 815:
            if(!(cntext == variable58)) { _fun00006_ip = 841; continue _fun00005 }
 819:
            oscard = zuuluu.global_name;
            golfie = cntext == oscard;
            entity = undefined;
            if(golfie) { _fun00006_ip = 838; continue _fun00005 }
 834:
            entity = oscard[variable61];
 838:
            variable58 = entity;
 841:
            if(!(cntext == variable58)) { _fun00006_ip = 876; continue _fun00005 }
 845:
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 873; continue _fun00005 }
 854:
            michal = michal.nick;
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 873; continue _fun00005 }
 869:
            entity = michal[variable61];
 873:
            variable58 = entity;
 876:
            entity = zuuluu.pronouns;
            michal = cntext == entity;
            variable54 = undefined;
            if(michal) { _fun00006_ip = 895; continue _fun00005 }
 891:
            variable54 = entity[variable61];
 895:
            entity = zuuluu.bio;
            michal = cntext == entity;
            variable50 = undefined;
            if(michal) { _fun00006_ip = 914; continue _fun00005 }
 910:
            variable50 = entity[variable61];
 914:
            entity = global;
            michal = entity.Object;
            entity = michal.keys;
            entity = entity.bind(michal)(zuuluu);
            entity = entity.length;
            entity = entity > variable61;
            variable60 = null;
            if(!entity) { _fun00006_ip = 1012; continue _fun00005 }
 946:
            entity = cntext == variable50;
            variable60 = null;
            if(!entity) { _fun00006_ip = 1012; continue _fun00005 }
 955:
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 18;
            michal = golfie[entity];
            michal = oscard.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = golfie[entity];
            entity = oscard.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.84MExs;
            variable60 = michal.bind(zuuluu)(entity);
 1012:
            romeon = _closure1_slot0;
            target = _closure1_slot2;
            entity = 33;
            entity = target[entity];
            oscard = romeon.bind(tangon)(entity);
            zuuluu = oscard.useStateFromStores;
            entity = _closure1_slot5;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                michal = _closure1_slot5;
                entity = michal.getScrollPosition;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = zuuluu.bind(oscard)(michal, entity);
            sequen = _closure1_slot1;
            entity = 34;
            entity = target[entity];
            entity = sequen.bind(tangon)(entity);
            entity = entity.bind(tangon)(backup, michal);
            _closure2_slot4 = entity;
            variable45 = function() { // Original name: handleBlur
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
            zuuluu = _closure1_slot13;
            entity = 36;
            entity = target[entity];
            entity = romeon.bind(tangon)(entity);
            michal = entity.ThemeContextProvider;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable55;
            entity['secondaryColor'] = ctrled;
            golfie = _closure1_slot14;
            oscard = _closure1_slot4;
            report = {};
            kiloes = variable51.container;
            option = new Array(2);
            option[0] = kiloes;
            kiloes = {};
            kiloes['backgroundColor'] = result;
            option[1] = kiloes;
            report['style'] = option;
            option = 37;
            option = target[option];
            option = romeon.bind(tangon)(option);
            romeon = option.KeyboardAwareScrollView;
            option = {'enableAutomaticScroll': true, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable46 = true;
            kiloes = _closure1_slot11;
            option['keyboardOpeningTime'] = kiloes;
            option['ref'] = backup;
            kiloes = _closure1_slot13;
            backup = {};
            sizing = variable51.bounceOffset;
            backup['style'] = sizing;
            kiloes = kiloes.bind(tangon)(oscard, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            update = 38;
            kiloes = target[update];
            sizing = sequen.bind(tangon)(kiloes);
            kiloes = {};
            kiloes['fallbackBackground'] = vacuum;
            kiloes['primaryColor'] = variable55;
            kiloes['secondaryColor'] = ctrled;
            output = {};
            output['backgroundColor'] = result;
            kiloes['containerStyle'] = output;
            echoed = _closure1_slot13;
            result = _closure1_slot15;
            output = {};
            output['user'] = variable39;
            output['displayProfile'] = variable41;
            output['pendingAvatarSrc'] = variable44;
            output['pendingBanner'] = variable63;
            output['pendingAccentColor'] = variable62;
            output['pendingThemeColors'] = equals;
            output['tryItOutBanner'] = source;
            output['isTryItOut'] = foxtra;
            output['disabled'] = variable37;
            result = echoed.bind(tangon)(result, output);
            output = new Array(2);
            output[0] = result;
            result = {};
            source = _closure1_slot13;
            echoed = {};
            variable63 = status.avatarBackground;
            variable62 = new Array(4);
            variable62[0] = variable63;
            variable63 = status.avatarPosition;
            variable62[1] = variable63;
            variable63 = variable51.avatarContainer;
            variable62[2] = variable63;
            variable62[3] = variable65;
            echoed['style'] = variable62;
            variable64 = _closure1_slot13;
            variable62 = 39;
            variable62 = target[variable62];
            variable63 = sequen.bind(tangon)(variable62);
            variable62 = {};
            variable62['user'] = variable39;
            variable62['disabled'] = variable37;
            variable66 = cntext != foxtra;
            variable62['disableStatus'] = variable66;
            variable62['statusStyle'] = variable65;
            variable62['isTryItOut'] = foxtra;
            variable65 = _closure1_slot12;
            variable65 = variable65.AVATAR;
            variable65 = variable48 === variable65;
            variable62['autoStartEditFlow'] = variable65;
            variable62 = variable64.bind(tangon)(variable63, variable62);
            echoed['children'] = variable62;
            source = source.bind(tangon)(oscard, echoed);
            echoed = new Array(2);
            echoed[0] = source;
            update = target[update];
            source = sequen.bind(tangon)(update);
            update = {};
            update['fallbackBackground'] = vacuum;
            update['primaryColor'] = variable55;
            update['secondaryColor'] = ctrled;
            vacuum = status.profileContent;
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            vacuum = {};
            vacuum['paddingTop'] = variable61;
            vacuum['paddingBottom'] = config;
            ctrled[1] = vacuum;
            update['containerStyle'] = ctrled;
            config = _closure1_slot13;
            ctrled = 40;
            ctrled = target[ctrled];
            vacuum = sequen.bind(tangon)(ctrled);
            ctrled = {};
            ctrled['customStatusActivity'] = variable59;
            variable55 = cntext != variable55;
            ctrled['hasCustomProfileTheme'] = variable55;
            variable55 = status.customStatusBubble;
            ctrled['style'] = variable55;
            status = status.emojiOnlyCustomStatusBubble;
            ctrled['emojiOnlyStyle'] = status;
            ctrled['editEnabled'] = variable46;
            vacuum = config.bind(tangon)(vacuum, ctrled);
            ctrled = new Array(3);
            ctrled[0] = vacuum;
            config = _closure1_slot13;
            vacuum = 41;
            vacuum = target[vacuum];
            sequen = sequen.bind(tangon)(vacuum);
            vacuum = {};
            vacuum['user'] = variable39;
            vacuum['displayName'] = variable57;
            vacuum['badges'] = papara;
            papara = variable52;
            if(!(cntext != variable53)) { _fun00006_ip = 1667; continue _fun00005 }
 1664:
            papara = variable53;
 1667:
            vacuum['pronouns'] = papara;
            vacuum['badgeContainerBackground'] = variable38;
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[1] = vacuum;
            _closure2_slot1 = variable39;
            config = _closure1_slot14;
            sequen = _closure1_slot4;
            vacuum = {};
            target = variable51.formContainer;
            papara = new Array(2);
            papara[0] = target;
            target = {};
            target['backgroundColor'] = variable38;
            papara[1] = target;
            vacuum['style'] = papara;
            target = cntext != variable60;
            papara = null;
            if(!target) { _fun00006_ip = 1827; continue _fun00005 }
 1738:
            papara = null;
            if(!(record !== variable60)) { _fun00006_ip = 1827; continue _fun00005 }
 1744:
            status = _closure1_slot13;
            target = _closure1_slot4;
            record = {};
            variable51 = variable51.errorContainer;
            record['style'] = variable51;
            variable59 = _closure1_slot13;
            variable55 = _closure1_slot0;
            variable61 = _closure1_slot2;
            variable51 = 35;
            variable51 = variable61[variable51];
            variable51 = variable55.bind(tangon)(variable51);
            variable55 = variable51.Text;
            variable51 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable51['children'] = variable60;
            variable51 = variable59.bind(tangon)(variable55, variable51);
            record['children'] = variable51;
            papara = status.bind(tangon)(target, record);
 1827:
            record = new Array(10);
            record[0] = papara;
            variable51 = _closure1_slot13;
            status = _closure1_slot1;
            variable59 = _closure1_slot2;
            papara = 42;
            target = variable59[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable62 = _closure1_slot0;
            variable55 = 18;
            variable60 = variable59[variable55];
            variable60 = variable62.bind(tangon)(variable60);
            variable61 = variable60.intl;
            variable60 = variable61.string;
            variable59 = variable59[variable55];
            variable59 = variable62.bind(tangon)(variable59);
            variable59 = variable59.t;
            variable59 = variable59.9AjdkJ;
            variable59 = variable60.bind(variable61)(variable59);
            target['label'] = variable59;
            target['errorMessage'] = variable58;
            if(!(cntext != variable57)) { _fun00006_ip = 1928; continue _fun00005 }
 1925:
            variable56 = variable57;
 1928:
            target['value'] = variable56;
            variable56 = function(argFoo) { // Original name: onChange
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
                    entity = 43;
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
            target['onChange'] = variable56;
            variable56 = variable39.toString;
            variable56 = variable56.bind(variable39)();
            target['placeholder'] = variable56;
            variable56 = _closure1_slot8;
            target['maxLength'] = variable56;
            target['disabled'] = variable37;
            target['onBlur'] = variable45;
            target = variable51.bind(tangon)(status, target);
            record[1] = target;
            variable51 = _closure1_slot13;
            status = _closure1_slot1;
            variable56 = _closure1_slot2;
            target = variable56[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable59 = _closure1_slot0;
            variable57 = variable56[variable55];
            variable57 = variable59.bind(tangon)(variable57);
            variable58 = variable57.intl;
            variable57 = variable58.string;
            variable56 = variable56[variable55];
            variable56 = variable59.bind(tangon)(variable56);
            variable56 = variable56.t;
            variable56 = variable56.+T3RIy;
            variable56 = variable57.bind(variable58)(variable56);
            target['label'] = variable56;
            target['errorMessage'] = variable54;
            if(!(cntext != variable53)) { _fun00006_ip = 2073; continue _fun00005 }
 2070:
            variable52 = variable53;
 2073:
            target['value'] = variable52;
            variable52 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserPronouns;
                michal = _closure2_slot2;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            target['onChange'] = variable52;
            variable52 = _closure1_slot9;
            target['maxLength'] = variable52;
            target['disabled'] = variable37;
            target['onBlur'] = variable45;
            target = variable51.bind(tangon)(status, target);
            record[2] = target;
            status = _closure1_slot13;
            target = _closure1_slot1;
            variable51 = _closure1_slot2;
            papara = variable51[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            variable54 = _closure1_slot0;
            variable52 = variable51[variable55];
            variable52 = variable54.bind(tangon)(variable52);
            variable53 = variable52.intl;
            variable52 = variable53.string;
            variable51 = variable51[variable55];
            variable51 = variable54.bind(tangon)(variable51);
            variable51 = variable51.t;
            variable51 = variable51.NepzEx;
            variable51 = variable52.bind(variable53)(variable51);
            papara['label'] = variable51;
            papara['errorMessage'] = variable50;
            if(!(cntext != variable49)) { _fun00006_ip = 2204; continue _fun00005 }
 2201:
            variable47 = variable49;
 2204:
            papara['value'] = variable47;
            variable47 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserBio;
                michal = _closure2_slot3;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            papara['onChange'] = variable47;
            variable47 = _closure1_slot12;
            variable47 = variable47.BIO;
            variable47 = variable48 === variable47;
            papara['autoFocus'] = variable47;
            variable47 = _closure1_slot7;
            papara['maxLength'] = variable47;
            variable47 = 5;
            papara['numberOfLines'] = variable47;
            papara['multiline'] = variable46;
            papara['disabled'] = variable37;
            papara['onBlur'] = variable45;
            papara = status.bind(tangon)(target, papara);
            record[3] = papara;
            status = _closure1_slot13;
            target = _closure1_slot1;
            variable45 = _closure1_slot2;
            papara = 44;
            papara = variable45[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable39;
            variable46 = _closure1_slot0;
            variable47 = _closure1_slot2;
            variable45 = 16;
            variable45 = variable47[variable45];
            variable46 = variable46.bind(tangon)(variable45);
            if(foxtra) { _fun00006_ip = 2341; continue _fun00005 }
 2333:
            variable45 = variable46.setPendingThemeColors;
            _fun00006_ip = 2347; continue _fun00005;
 2341:
            variable45 = variable46.setTryItOutThemeColors;
 2347:
            papara['onProfileThemeColorsChanged'] = variable45;
            papara['pendingAvatarSrc'] = variable44;
            if(!foxtra) { _fun00006_ip = 2363; continue _fun00005 }
 2360:
            equals = variable40;
 2363:
            papara['pendingThemeColors'] = equals;
            papara['isTryItOut'] = foxtra;
            papara = status.bind(tangon)(target, papara);
            record[4] = papara;
            status = _closure1_slot13;
            equals = _closure1_slot1;
            variable40 = _closure1_slot2;
            papara = 45;
            papara = variable40[papara];
            target = equals.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable39;
            papara['pendingAvatarDecoration'] = variable43;
            papara = status.bind(tangon)(target, papara);
            record[5] = papara;
            status = _closure1_slot13;
            papara = 46;
            papara = variable40[papara];
            target = equals.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable39;
            papara['pendingProfileEffectId'] = variable42;
            papara['displayProfile'] = variable41;
            papara = status.bind(tangon)(target, papara);
            record[6] = papara;
            status = _closure1_slot13;
            papara = 47;
            papara = variable40[papara];
            target = equals.bind(tangon)(papara);
            papara = {};
            papara['user'] = variable39;
            papara['pendingNameplate'] = quebec;
            papara = status.bind(tangon)(target, papara);
            record[7] = papara;
            status = _closure1_slot13;
            target = _closure1_slot4;
            papara = {};
            whisks = function(argFoo) { // Original name: ref
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00012_ip = 38; continue _fun00011 }
 9:
                    entity = _closure2_slot4;
                    michal = entity.current;
                    entity = _closure1_slot10;
                    entity = entity.GUILD_TAG;
                    michal[entity] = zuuluu;
 38:
                    entity = undefined;
                    return entity;
                }
            };
            papara['ref'] = whisks;
            quebec = _closure1_slot13;
            whisks = 48;
            whisks = variable40[whisks];
            equals = equals.bind(tangon)(whisks);
            whisks = {};
            whisks['user'] = variable39;
            whisks['disabled'] = variable37;
            variable37 = {};
            variable37['backgroundColor'] = variable38;
            whisks['tagStyle'] = variable37;
            whisks['pendingPrimaryGuildId'] = variable36;
            whisks = quebec.bind(tangon)(equals, whisks);
            papara['children'] = whisks;
            papara = status.bind(tangon)(target, papara);
            record[8] = papara;
            cntext = cntext != limora;
            if(!cntext) { _fun00006_ip = 2639; continue _fun00005 }
 2597:
            status = _closure1_slot13;
            target = _closure1_slot1;
            whisks = _closure1_slot2;
            papara = 49;
            papara = whisks[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['legacyUsername'] = limora;
            papara['pendingLegacyUsernameDisabled'] = sierra;
            cntext = status.bind(tangon)(target, papara);
 2639:
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
            if(!verify) { _fun00006_ip = 2726; continue _fun00005 }
 2723:
            verify = !yankee;
 2726:
            if(!verify) { _fun00006_ip = 2772; continue _fun00005 }
 2729:
            romeon = _closure1_slot13;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 50;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.UserProfilePremiumUpsellCard;
            offset = {};
            offset['isTryItOut'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 2772:
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
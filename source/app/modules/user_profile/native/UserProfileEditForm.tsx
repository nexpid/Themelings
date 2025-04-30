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
            quebec = entity.currentUser;
            variable45 = entity.autoFocusElement;
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
            variable49 = entity.bind(tangon)();
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
            whisks = entity.isSubmitting;
            verify = entity.pendingAvatar;
            variable40 = entity.pendingAvatarDecoration;
            variable60 = entity.pendingBanner;
            variable39 = entity.pendingProfileEffectId;
            variable36 = entity.pendingThemeColors;
            variable59 = entity.pendingAccentColor;
            source = entity.tryItOutBanner;
            variable37 = entity.tryItOutThemeColors;
            variable55 = entity.pendingGlobalName;
            variable51 = entity.pendingPronouns;
            variable47 = entity.pendingBio;
            limora = entity.pendingPrimaryGuildId;
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
            oscard = quebec.id;
            option = cntext != oscard;
            record = '';
            entity = record;
            if(!option) { _fun00006_ip = 372; continue _fun00005 }
 369:
            entity = oscard;
 372:
            variable38 = report.bind(tangon)(entity);
            report = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 26;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            entity = option.useCustomStatusActivity;
            variable53 = entity.bind(option)();
            entity = 27;
            entity = oscard[entity];
            option = report.bind(tangon)(entity);
            report = option.getPendingAvatarSrc;
            entity = {};
            romeon = quebec.id;
            entity['userId'] = romeon;
            entity['image'] = verify;
            variable41 = report.bind(option)(entity);
            report = _closure1_slot1;
            entity = 8;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = report.canUsePremiumProfileCustomization;
            verify = entity.bind(report)(quebec);
            entity = cntext == variable38;
            sierra = undefined;
            if(entity) { _fun00006_ip = 494; continue _fun00005 }
 482:
            entity = variable38.getLegacyUsername;
            sierra = entity.bind(variable38)();
 494:
            entity = quebec.globalName;
            report = cntext != entity;
            variable54 = record;
            if(!report) { _fun00006_ip = 513; continue _fun00005 }
 510:
            variable54 = entity;
 513:
            report = cntext == variable38;
            entity = undefined;
            if(report) { _fun00006_ip = 528; continue _fun00005 }
 522:
            entity = variable38.pronouns;
 528:
            report = cntext != entity;
            variable50 = record;
            if(!report) { _fun00006_ip = 541; continue _fun00005 }
 538:
            variable50 = entity;
 541:
            _closure2_slot2 = variable50;
            report = cntext == variable38;
            entity = undefined;
            if(report) { _fun00006_ip = 560; continue _fun00005 }
 554:
            entity = variable38.bio;
 560:
            report = cntext != entity;
            variable46 = record;
            if(!report) { _fun00006_ip = 573; continue _fun00005 }
 570:
            variable46 = entity;
 573:
            _closure2_slot3 = variable46;
            report = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 28;
            entity = oscard[entity];
            report = report.bind(tangon)(entity);
            entity = {};
            entity['user'] = quebec;
            entity['displayProfile'] = variable38;
            oscard = variable36;
            if(!foxtra) { _fun00006_ip = 617; continue _fun00005 }
 614:
            oscard = variable37;
 617:
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
            equals = entity.containerBackground;
            entity = entity.avatarBackground;
            variable57 = 0;
            oscard = 0;
            if(verify) { _fun00006_ip = 738; continue _fun00005 }
 729:
            oscard = 0;
            if(yankee) { _fun00006_ip = 738; continue _fun00005 }
 734:
            oscard = _closure1_slot6;
 738:
            golfie = golfie + oscard;
            option = _closure1_slot1;
            romeon = _closure1_slot2;
            oscard = 30;
            oscard = romeon[oscard];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.spacing;
            oscard = oscard.PX_16;
            config = golfie + oscard;
            variable62 = {};
            variable62['backgroundColor'] = entity;
            entity = cntext == zuuluu;
            variable56 = undefined;
            if(entity) { _fun00006_ip = 809; continue _fun00005 }
 791:
            entity = zuuluu.username;
            oscard = cntext == entity;
            variable56 = undefined;
            if(oscard) { _fun00006_ip = 809; continue _fun00005 }
 805:
            variable56 = entity[variable57];
 809:
            if(!(cntext == variable56)) { _fun00006_ip = 835; continue _fun00005 }
 813:
            oscard = zuuluu.global_name;
            golfie = cntext == oscard;
            entity = undefined;
            if(golfie) { _fun00006_ip = 832; continue _fun00005 }
 828:
            entity = oscard[variable57];
 832:
            variable56 = entity;
 835:
            if(!(cntext == variable56)) { _fun00006_ip = 870; continue _fun00005 }
 839:
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 867; continue _fun00005 }
 848:
            michal = michal.nick;
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 867; continue _fun00005 }
 863:
            entity = michal[variable57];
 867:
            variable56 = entity;
 870:
            entity = zuuluu.pronouns;
            michal = cntext == entity;
            variable52 = undefined;
            if(michal) { _fun00006_ip = 889; continue _fun00005 }
 885:
            variable52 = entity[variable57];
 889:
            entity = zuuluu.bio;
            michal = cntext == entity;
            variable48 = undefined;
            if(michal) { _fun00006_ip = 908; continue _fun00005 }
 904:
            variable48 = entity[variable57];
 908:
            entity = global;
            michal = entity.Object;
            entity = michal.keys;
            entity = entity.bind(michal)(zuuluu);
            entity = entity.length;
            entity = entity > variable57;
            variable58 = null;
            if(!entity) { _fun00006_ip = 1006; continue _fun00005 }
 940:
            entity = cntext == variable48;
            variable58 = null;
            if(!entity) { _fun00006_ip = 1006; continue _fun00005 }
 949:
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
            variable58 = michal.bind(zuuluu)(entity);
 1006:
            variable42 = function() { // Original name: handleBlur
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
            entity = 32;
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
            kiloes = variable49.container;
            option = new Array(2);
            option[0] = kiloes;
            kiloes = {};
            kiloes['backgroundColor'] = result;
            option[1] = kiloes;
            report['style'] = option;
            option = 33;
            option = papara[option];
            option = romeon.bind(tangon)(option);
            romeon = option.KeyboardAwareScrollView;
            option = {'enableAutomaticScroll': true, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable43 = true;
            kiloes = _closure1_slot10;
            option['keyboardOpeningTime'] = kiloes;
            option['ref'] = backup;
            kiloes = _closure1_slot12;
            backup = {};
            sizing = variable49.bounceOffset;
            backup['style'] = sizing;
            kiloes = kiloes.bind(tangon)(oscard, backup);
            backup = new Array(2);
            backup[0] = kiloes;
            sequen = _closure1_slot1;
            update = 34;
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
            output['user'] = quebec;
            output['displayProfile'] = variable38;
            output['pendingAvatarSrc'] = variable41;
            output['pendingBanner'] = variable60;
            output['pendingAccentColor'] = variable59;
            output['pendingThemeColors'] = variable36;
            output['tryItOutBanner'] = source;
            output['isTryItOut'] = foxtra;
            output['disabled'] = whisks;
            result = echoed.bind(tangon)(result, output);
            output = new Array(2);
            output[0] = result;
            result = {};
            source = _closure1_slot12;
            echoed = {};
            variable60 = target.avatarBackground;
            variable59 = new Array(4);
            variable59[0] = variable60;
            variable60 = target.avatarPosition;
            variable59[1] = variable60;
            variable60 = variable49.avatarContainer;
            variable59[2] = variable60;
            variable59[3] = variable62;
            echoed['style'] = variable59;
            variable61 = _closure1_slot12;
            variable59 = 35;
            variable59 = papara[variable59];
            variable60 = sequen.bind(tangon)(variable59);
            variable59 = {};
            variable59['user'] = quebec;
            variable59['disabled'] = whisks;
            variable63 = cntext != foxtra;
            variable59['disableStatus'] = variable63;
            variable59['statusStyle'] = variable62;
            variable59['isTryItOut'] = foxtra;
            variable62 = _closure1_slot11;
            variable62 = variable62.AVATAR;
            variable62 = variable45 === variable62;
            variable59['autoStartEditFlow'] = variable62;
            variable59 = variable61.bind(tangon)(variable60, variable59);
            echoed['children'] = variable59;
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
            vacuum['paddingTop'] = variable57;
            vacuum['paddingBottom'] = config;
            ctrled[1] = vacuum;
            update['containerStyle'] = ctrled;
            config = _closure1_slot12;
            ctrled = 36;
            ctrled = papara[ctrled];
            vacuum = sequen.bind(tangon)(ctrled);
            ctrled = {};
            ctrled['customStatusActivity'] = variable53;
            status = cntext != status;
            ctrled['hasCustomProfileTheme'] = status;
            status = target.customStatusBubble;
            ctrled['style'] = status;
            target = target.emojiOnlyCustomStatusBubble;
            ctrled['emojiOnlyStyle'] = target;
            ctrled['editEnabled'] = variable43;
            vacuum = config.bind(tangon)(vacuum, ctrled);
            ctrled = new Array(3);
            ctrled[0] = vacuum;
            config = _closure1_slot12;
            vacuum = 37;
            vacuum = papara[vacuum];
            sequen = sequen.bind(tangon)(vacuum);
            vacuum = {};
            vacuum['user'] = quebec;
            vacuum['displayName'] = variable55;
            papara = variable50;
            if(!(cntext != variable51)) { _fun00006_ip = 1593; continue _fun00005 }
 1590:
            papara = variable51;
 1593:
            vacuum['pronouns'] = papara;
            vacuum['badgeContainerBackground'] = equals;
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[1] = vacuum;
            _closure2_slot1 = quebec;
            config = _closure1_slot13;
            sequen = _closure1_slot4;
            vacuum = {};
            target = variable49.formContainer;
            papara = new Array(2);
            papara[0] = target;
            target = {};
            target['backgroundColor'] = equals;
            papara[1] = target;
            vacuum['style'] = papara;
            target = cntext != variable58;
            papara = null;
            if(!target) { _fun00006_ip = 1753; continue _fun00005 }
 1664:
            papara = null;
            if(!(record !== variable58)) { _fun00006_ip = 1753; continue _fun00005 }
 1670:
            status = _closure1_slot12;
            target = _closure1_slot4;
            record = {};
            variable49 = variable49.errorContainer;
            record['style'] = variable49;
            variable57 = _closure1_slot12;
            variable53 = _closure1_slot0;
            variable59 = _closure1_slot2;
            variable49 = 31;
            variable49 = variable59[variable49];
            variable49 = variable53.bind(tangon)(variable49);
            variable53 = variable49.Text;
            variable49 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable49['children'] = variable58;
            variable49 = variable57.bind(tangon)(variable53, variable49);
            record['children'] = variable49;
            papara = status.bind(tangon)(target, record);
 1753:
            record = new Array(10);
            record[0] = papara;
            variable49 = _closure1_slot12;
            status = _closure1_slot1;
            variable57 = _closure1_slot2;
            papara = 38;
            target = variable57[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable60 = _closure1_slot0;
            variable53 = 17;
            variable58 = variable57[variable53];
            variable58 = variable60.bind(tangon)(variable58);
            variable59 = variable58.intl;
            variable58 = variable59.string;
            variable57 = variable57[variable53];
            variable57 = variable60.bind(tangon)(variable57);
            variable57 = variable57.t;
            variable57 = variable57.9AjdkJ;
            variable57 = variable58.bind(variable59)(variable57);
            target['label'] = variable57;
            target['errorMessage'] = variable56;
            if(!(cntext != variable55)) { _fun00006_ip = 1854; continue _fun00005 }
 1851:
            variable54 = variable55;
 1854:
            target['value'] = variable54;
            variable54 = function(argFoo) { // Original name: onChange
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
            target['onChange'] = variable54;
            variable54 = quebec.toString;
            variable54 = variable54.bind(quebec)();
            target['placeholder'] = variable54;
            variable54 = _closure1_slot8;
            target['maxLength'] = variable54;
            target['disabled'] = whisks;
            target['onBlur'] = variable42;
            target = variable49.bind(tangon)(status, target);
            record[1] = target;
            variable49 = _closure1_slot12;
            status = _closure1_slot1;
            variable54 = _closure1_slot2;
            target = variable54[papara];
            status = status.bind(tangon)(target);
            target = {};
            variable57 = _closure1_slot0;
            variable55 = variable54[variable53];
            variable55 = variable57.bind(tangon)(variable55);
            variable56 = variable55.intl;
            variable55 = variable56.string;
            variable54 = variable54[variable53];
            variable54 = variable57.bind(tangon)(variable54);
            variable54 = variable54.t;
            variable54 = variable54.+T3RIy;
            variable54 = variable55.bind(variable56)(variable54);
            target['label'] = variable54;
            target['errorMessage'] = variable52;
            if(!(cntext != variable51)) { _fun00006_ip = 1999; continue _fun00005 }
 1996:
            variable50 = variable51;
 1999:
            target['value'] = variable50;
            variable50 = function(argFoo) { // Original name: onChange
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
            target['onChange'] = variable50;
            variable50 = _closure1_slot9;
            target['maxLength'] = variable50;
            target['disabled'] = whisks;
            target['onBlur'] = variable42;
            target = variable49.bind(tangon)(status, target);
            record[2] = target;
            status = _closure1_slot12;
            target = _closure1_slot1;
            variable49 = _closure1_slot2;
            papara = variable49[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            variable52 = _closure1_slot0;
            variable50 = variable49[variable53];
            variable50 = variable52.bind(tangon)(variable50);
            variable51 = variable50.intl;
            variable50 = variable51.string;
            variable49 = variable49[variable53];
            variable49 = variable52.bind(tangon)(variable49);
            variable49 = variable49.t;
            variable49 = variable49.NepzEx;
            variable49 = variable50.bind(variable51)(variable49);
            papara['label'] = variable49;
            papara['errorMessage'] = variable48;
            if(!(cntext != variable47)) { _fun00006_ip = 2130; continue _fun00005 }
 2127:
            variable46 = variable47;
 2130:
            papara['value'] = variable46;
            variable44 = function(argFoo) { // Original name: onChange
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
            papara['onChange'] = variable44;
            variable44 = _closure1_slot11;
            variable44 = variable44.BIO;
            variable44 = variable45 === variable44;
            papara['autoFocus'] = variable44;
            variable44 = _closure1_slot7;
            papara['maxLength'] = variable44;
            variable44 = 5;
            papara['numberOfLines'] = variable44;
            papara['multiline'] = variable43;
            papara['disabled'] = whisks;
            papara['onBlur'] = variable42;
            papara = status.bind(tangon)(target, papara);
            record[3] = papara;
            status = _closure1_slot12;
            target = _closure1_slot1;
            variable42 = _closure1_slot2;
            papara = 40;
            papara = variable42[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = quebec;
            variable43 = _closure1_slot0;
            variable44 = _closure1_slot2;
            variable42 = 15;
            variable42 = variable44[variable42];
            variable43 = variable43.bind(tangon)(variable42);
            if(foxtra) { _fun00006_ip = 2267; continue _fun00005 }
 2259:
            variable42 = variable43.setPendingThemeColors;
            _fun00006_ip = 2273; continue _fun00005;
 2267:
            variable42 = variable43.setTryItOutThemeColors;
 2273:
            papara['onProfileThemeColorsChanged'] = variable42;
            papara['pendingAvatarSrc'] = variable41;
            if(!foxtra) { _fun00006_ip = 2289; continue _fun00005 }
 2286:
            variable36 = variable37;
 2289:
            papara['pendingThemeColors'] = variable36;
            papara['isTryItOut'] = foxtra;
            papara = status.bind(tangon)(target, papara);
            record[4] = papara;
            variable37 = _closure1_slot12;
            target = _closure1_slot1;
            variable36 = _closure1_slot2;
            papara = 41;
            papara = variable36[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = quebec;
            papara['pendingAvatarDecoration'] = variable40;
            papara = variable37.bind(tangon)(status, papara);
            record[5] = papara;
            variable37 = _closure1_slot12;
            papara = 42;
            papara = variable36[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = quebec;
            papara['pendingProfileEffectId'] = variable39;
            papara['displayProfile'] = variable38;
            papara = variable37.bind(tangon)(status, papara);
            record[6] = papara;
            variable37 = _closure1_slot12;
            papara = 43;
            papara = variable36[papara];
            status = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = quebec;
            papara = variable37.bind(tangon)(status, papara);
            record[7] = papara;
            status = _closure1_slot12;
            papara = 44;
            papara = variable36[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['user'] = quebec;
            papara['disabled'] = whisks;
            whisks = {};
            whisks['backgroundColor'] = equals;
            papara['tagStyle'] = whisks;
            papara['pendingPrimaryGuildId'] = limora;
            papara = status.bind(tangon)(target, papara);
            record[8] = papara;
            cntext = cntext != sierra;
            if(!cntext) { _fun00006_ip = 2524; continue _fun00005 }
 2487:
            status = _closure1_slot12;
            target = _closure1_slot1;
            limora = _closure1_slot2;
            papara = 45;
            papara = limora[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['legacyUsername'] = sierra;
            cntext = status.bind(tangon)(target, papara);
 2524:
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
            if(!verify) { _fun00006_ip = 2611; continue _fun00005 }
 2608:
            verify = !yankee;
 2611:
            if(!verify) { _fun00006_ip = 2657; continue _fun00005 }
 2614:
            romeon = _closure1_slot12;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 46;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.UserProfilePremiumUpsellCard;
            offset = {};
            offset['isTryItOut'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 2657:
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
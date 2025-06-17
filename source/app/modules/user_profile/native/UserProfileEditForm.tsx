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
    option = tangon.ScrollView;
    var _closure1_slot4 = option;
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BIO_MAX_LENGTH;
    var _closure1_slot8 = golfie;
    golfie = tangon.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot9 = golfie;
    tangon = tangon.PRONOUNS_MAX_LENGTH;
    var _closure1_slot10 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ProfileCustomizationScrollPositions;
    var _closure1_slot11 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
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
            variable47 = entity.autoFocusElement;
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
            golfie = _closure1_slot2;
            entity = 19;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            status = entity.bind(tangon)();
            entity = 20;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            variable51 = entity.bind(tangon)();
            entity = 21;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            yankee = entity.bind(tangon)();
            michal = _closure1_slot3;
            entity = michal.useRef;
            cntext = null;
            backup = entity.bind(michal)(cntext);
            entity = michal.useRef;
            variable55 = entity.bind(michal)(cntext);
            entity = michal.useRef;
            variable58 = entity.bind(michal)(cntext);
            entity = michal.useRef;
            variable52 = entity.bind(michal)(cntext);
            entity = 22;
            entity = golfie[entity];
            michal = report.bind(tangon)(entity);
            entity = {};
            variable45 = true;
            entity['includeKeyboardHeightIOS'] = variable45;
            entity = michal.bind(tangon)(entity);
            oscard = entity.insets;
            romeon = 23;
            entity = golfie[romeon];
            entity = report.bind(tangon)(entity);
            entity = entity.spacing;
            kiloes = entity.PX_16;
            entity = 24;
            entity = golfie[entity];
            michal = report.bind(tangon)(entity);
            entity = {};
            entity['insets'] = oscard;
            option = {};
            option['ref'] = variable55;
            zuuluu = {};
            sizing = 'toRef';
            zuuluu['type'] = sizing;
            zuuluu['ref'] = variable58;
            zuuluu['extraOffset'] = kiloes;
            option['offset'] = zuuluu;
            zuuluu = new Array(3);
            zuuluu[0] = option;
            option = {};
            option['ref'] = variable58;
            verify = {};
            verify['type'] = sizing;
            verify['ref'] = variable52;
            verify['extraOffset'] = kiloes;
            option['offset'] = verify;
            zuuluu[1] = option;
            option = {};
            option['ref'] = variable52;
            verify = {};
            kiloes = 'toValue';
            verify['type'] = kiloes;
            kiloes = golfie[romeon];
            kiloes = report.bind(tangon)(kiloes);
            kiloes = kiloes.spacing;
            kiloes = kiloes.PX_64;
            verify['value'] = kiloes;
            option['offset'] = verify;
            zuuluu[2] = option;
            entity['inputs'] = zuuluu;
            entity['scrollViewRef'] = backup;
            entity = michal.bind(tangon)(entity);
            variable46 = entity.onFocus;
            entity = 25;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            zuuluu = entity.errors;
            variable37 = entity.isSubmitting;
            verify = entity.pendingAvatar;
            variable43 = entity.pendingAvatarDecoration;
            variable66 = entity.pendingBanner;
            variable42 = entity.pendingProfileEffectId;
            quebec = entity.pendingNameplate;
            equals = entity.pendingThemeColors;
            variable65 = entity.pendingAccentColor;
            source = entity.tryItOutBanner;
            variable40 = entity.tryItOutThemeColors;
            variable59 = entity.pendingGlobalName;
            variable54 = entity.pendingPronouns;
            variable49 = entity.pendingBio;
            sierra = entity.pendingLegacyUsernameDisabled;
            variable36 = entity.pendingPrimaryGuildId;
            entity = 26;
            entity = golfie[entity];
            michal = report.bind(tangon)(entity);
            entity = 'UserProfileEditForm';
            entity = michal.bind(tangon)(entity);
            michal = _closure1_slot0;
            entity = 27;
            entity = golfie[entity];
            michal = michal.bind(tangon)(entity);
            entity = michal.useGuildAutomodProfileQuarantineErrors;
            michal = entity.bind(michal)();
            entity = 28;
            entity = golfie[entity];
            report = report.bind(tangon)(entity);
            golfie = variable39.id;
            option = cntext != golfie;
            record = '';
            entity = record;
            if(!option) { _fun00006_ip = 560; continue _fun00005 }
 557:
            entity = golfie;
 560:
            variable41 = report.bind(tangon)(entity);
            report = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 29;
            entity = golfie[entity];
            option = report.bind(tangon)(entity);
            entity = option.useCustomStatusActivity;
            variable62 = entity.bind(option)();
            entity = 30;
            entity = golfie[entity];
            option = report.bind(tangon)(entity);
            report = option.getPendingAvatarSrc;
            entity = {};
            kiloes = variable39.id;
            entity['userId'] = kiloes;
            entity['image'] = verify;
            variable44 = report.bind(option)(entity);
            report = _closure1_slot1;
            entity = 31;
            entity = golfie[entity];
            entity = report.bind(tangon)(entity);
            papara = entity.bind(tangon)(variable41, sierra);
            entity = 9;
            entity = golfie[entity];
            report = report.bind(tangon)(entity);
            entity = report.canUsePremiumProfileCustomization;
            verify = entity.bind(report)(variable39);
            entity = cntext == variable41;
            limora = undefined;
            if(entity) { _fun00006_ip = 700; continue _fun00005 }
 688:
            entity = variable41.getLegacyUsername;
            limora = entity.bind(variable41)();
 700:
            entity = variable39.globalName;
            report = cntext != entity;
            variable57 = record;
            if(!report) { _fun00006_ip = 719; continue _fun00005 }
 716:
            variable57 = entity;
 719:
            report = cntext == variable41;
            entity = undefined;
            if(report) { _fun00006_ip = 734; continue _fun00005 }
 728:
            entity = variable41.pronouns;
 734:
            report = cntext != entity;
            variable53 = record;
            if(!report) { _fun00006_ip = 747; continue _fun00005 }
 744:
            variable53 = entity;
 747:
            _closure2_slot1 = variable53;
            report = cntext == variable41;
            entity = undefined;
            if(report) { _fun00006_ip = 766; continue _fun00005 }
 760:
            entity = variable41.bio;
 766:
            report = cntext != entity;
            variable48 = record;
            if(!report) { _fun00006_ip = 779; continue _fun00005 }
 776:
            variable48 = entity;
 779:
            _closure2_slot2 = variable48;
            report = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 32;
            entity = golfie[entity];
            report = report.bind(tangon)(entity);
            entity = {};
            entity['user'] = variable39;
            entity['displayProfile'] = variable41;
            golfie = equals;
            if(!foxtra) { _fun00006_ip = 823; continue _fun00005 }
 820:
            golfie = variable40;
 823:
            entity['pendingThemeColors'] = golfie;
            entity['isPreview'] = foxtra;
            entity = report.bind(tangon)(entity);
            report = entity.theme;
            variable61 = entity.primaryColor;
            ctrled = entity.secondaryColor;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            entity = 33;
            entity = option[entity];
            option = golfie.bind(tangon)(entity);
            golfie = option.useUserProfileColors;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable61;
            entity['secondaryColor'] = ctrled;
            entity = golfie.bind(option)(entity);
            vacuum = entity.gradientFallbackBackground;
            result = entity.gradientSecondaryBackground;
            variable38 = entity.containerBackground;
            entity = entity.avatarBackground;
            golfie = oscard.bottom;
            variable64 = 0;
            oscard = 0;
            if(verify) { _fun00006_ip = 947; continue _fun00005 }
 938:
            oscard = 0;
            if(yankee) { _fun00006_ip = 947; continue _fun00005 }
 943:
            oscard = _closure1_slot7;
 947:
            golfie = golfie + oscard;
            option = _closure1_slot1;
            oscard = _closure1_slot2;
            oscard = oscard[romeon];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.spacing;
            oscard = oscard.PX_16;
            config = golfie + oscard;
            variable68 = {};
            variable68['backgroundColor'] = entity;
            entity = cntext == zuuluu;
            variable60 = undefined;
            if(entity) { _fun00006_ip = 1015; continue _fun00005 }
 997:
            entity = zuuluu.username;
            oscard = cntext == entity;
            variable60 = undefined;
            if(oscard) { _fun00006_ip = 1015; continue _fun00005 }
 1011:
            variable60 = entity[variable64];
 1015:
            if(!(cntext == variable60)) { _fun00006_ip = 1041; continue _fun00005 }
 1019:
            oscard = zuuluu.global_name;
            golfie = cntext == oscard;
            entity = undefined;
            if(golfie) { _fun00006_ip = 1038; continue _fun00005 }
 1034:
            entity = oscard[variable64];
 1038:
            variable60 = entity;
 1041:
            if(!(cntext == variable60)) { _fun00006_ip = 1076; continue _fun00005 }
 1045:
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 1073; continue _fun00005 }
 1054:
            michal = michal.nick;
            oscard = cntext == michal;
            entity = undefined;
            if(oscard) { _fun00006_ip = 1073; continue _fun00005 }
 1069:
            entity = michal[variable64];
 1073:
            variable60 = entity;
 1076:
            entity = zuuluu.pronouns;
            michal = cntext == entity;
            variable56 = undefined;
            if(michal) { _fun00006_ip = 1095; continue _fun00005 }
 1091:
            variable56 = entity[variable64];
 1095:
            entity = zuuluu.bio;
            michal = cntext == entity;
            variable50 = undefined;
            if(michal) { _fun00006_ip = 1114; continue _fun00005 }
 1110:
            variable50 = entity[variable64];
 1114:
            entity = global;
            michal = entity.Object;
            entity = michal.keys;
            entity = entity.bind(michal)(zuuluu);
            entity = entity.length;
            entity = entity > variable64;
            variable63 = null;
            if(!entity) { _fun00006_ip = 1212; continue _fun00005 }
 1146:
            entity = cntext == variable50;
            variable63 = null;
            if(!entity) { _fun00006_ip = 1212; continue _fun00005 }
 1155:
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
            variable63 = michal.bind(zuuluu)(entity);
 1212:
            michal = _closure1_slot0;
            target = _closure1_slot2;
            entity = 34;
            entity = target[entity];
            golfie = michal.bind(tangon)(entity);
            oscard = golfie.useStateFromStores;
            entity = _closure1_slot6;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot6;
                entity = michal.getScrollPosition;
                entity = entity.bind(michal)();
                return entity;
            };
            zuuluu = oscard.bind(golfie)(zuuluu, entity);
            sequen = _closure1_slot1;
            entity = 35;
            entity = target[entity];
            entity = sequen.bind(tangon)(entity);
            entity = entity.bind(tangon)(backup, zuuluu);
            _closure2_slot3 = entity;
            zuuluu = _closure1_slot13;
            entity = 37;
            entity = target[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.ThemeContextProvider;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable61;
            entity['secondaryColor'] = ctrled;
            golfie = _closure1_slot14;
            oscard = _closure1_slot5;
            report = {};
            romeon = variable51.container;
            option = new Array(2);
            option[0] = romeon;
            romeon = {};
            romeon['backgroundColor'] = result;
            option[1] = romeon;
            report['style'] = option;
            romeon = _closure1_slot4;
            option = {};
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
            kiloes['primaryColor'] = variable61;
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
            output['pendingBanner'] = variable66;
            output['pendingAccentColor'] = variable65;
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
            variable66 = status.avatarBackground;
            variable65 = new Array(4);
            variable65[0] = variable66;
            variable66 = status.avatarPosition;
            variable65[1] = variable66;
            variable66 = variable51.avatarContainer;
            variable65[2] = variable66;
            variable65[3] = variable68;
            echoed['style'] = variable65;
            variable67 = _closure1_slot13;
            variable65 = 39;
            variable65 = target[variable65];
            variable66 = sequen.bind(tangon)(variable65);
            variable65 = {};
            variable65['user'] = variable39;
            variable65['disabled'] = variable37;
            variable69 = cntext != foxtra;
            variable65['disableStatus'] = variable69;
            variable65['statusStyle'] = variable68;
            variable65['isTryItOut'] = foxtra;
            variable68 = _closure1_slot12;
            variable68 = variable68.AVATAR;
            variable68 = variable47 === variable68;
            variable65['autoStartEditFlow'] = variable68;
            variable65 = variable67.bind(tangon)(variable66, variable65);
            echoed['children'] = variable65;
            source = source.bind(tangon)(oscard, echoed);
            echoed = new Array(2);
            echoed[0] = source;
            update = target[update];
            source = sequen.bind(tangon)(update);
            update = {};
            update['fallbackBackground'] = vacuum;
            update['primaryColor'] = variable61;
            update['secondaryColor'] = ctrled;
            vacuum = status.profileContent;
            ctrled = new Array(2);
            ctrled[0] = vacuum;
            vacuum = {};
            vacuum['paddingTop'] = variable64;
            vacuum['paddingBottom'] = config;
            ctrled[1] = vacuum;
            update['containerStyle'] = ctrled;
            config = _closure1_slot13;
            ctrled = 40;
            ctrled = target[ctrled];
            vacuum = sequen.bind(tangon)(ctrled);
            ctrled = {};
            ctrled['customStatusActivity'] = variable62;
            variable61 = cntext != variable61;
            ctrled['hasCustomProfileTheme'] = variable61;
            variable61 = status.customStatusBubble;
            ctrled['style'] = variable61;
            status = status.emojiOnlyCustomStatusBubble;
            ctrled['emojiOnlyStyle'] = status;
            ctrled['editEnabled'] = variable45;
            vacuum = config.bind(tangon)(vacuum, ctrled);
            ctrled = new Array(3);
            ctrled[0] = vacuum;
            config = _closure1_slot13;
            vacuum = 41;
            vacuum = target[vacuum];
            sequen = sequen.bind(tangon)(vacuum);
            vacuum = {};
            vacuum['user'] = variable39;
            vacuum['displayName'] = variable59;
            vacuum['badges'] = papara;
            papara = variable53;
            if(!(cntext != variable54)) { _fun00006_ip = 1822; continue _fun00005 }
 1819:
            papara = variable54;
 1822:
            vacuum['pronouns'] = papara;
            vacuum['badgeContainerBackground'] = variable38;
            vacuum = config.bind(tangon)(sequen, vacuum);
            ctrled[1] = vacuum;
            _closure2_slot0 = variable39;
            config = _closure1_slot14;
            sequen = _closure1_slot5;
            vacuum = {};
            target = variable51.formContainer;
            papara = new Array(2);
            papara[0] = target;
            target = {};
            target['backgroundColor'] = variable38;
            papara[1] = target;
            vacuum['style'] = papara;
            target = cntext != variable63;
            papara = null;
            if(!target) { _fun00006_ip = 1982; continue _fun00005 }
 1893:
            papara = null;
            if(!(record !== variable63)) { _fun00006_ip = 1982; continue _fun00005 }
 1899:
            status = _closure1_slot13;
            target = _closure1_slot5;
            record = {};
            variable51 = variable51.errorContainer;
            record['style'] = variable51;
            variable62 = _closure1_slot13;
            variable61 = _closure1_slot0;
            variable64 = _closure1_slot2;
            variable51 = 36;
            variable51 = variable64[variable51];
            variable51 = variable61.bind(tangon)(variable51);
            variable61 = variable51.Text;
            variable51 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable51['children'] = variable63;
            variable51 = variable62.bind(tangon)(variable61, variable51);
            record['children'] = variable51;
            papara = status.bind(tangon)(target, record);
 1982:
            record = new Array(10);
            record[0] = papara;
            variable51 = _closure1_slot13;
            status = _closure1_slot1;
            variable61 = _closure1_slot2;
            papara = 42;
            target = variable61[papara];
            status = status.bind(tangon)(target);
            target = {};
            target['scrollTargetRef'] = variable55;
            variable64 = _closure1_slot0;
            variable55 = 18;
            variable62 = variable61[variable55];
            variable62 = variable64.bind(tangon)(variable62);
            variable63 = variable62.intl;
            variable62 = variable63.string;
            variable61 = variable61[variable55];
            variable61 = variable64.bind(tangon)(variable61);
            variable61 = variable61.t;
            variable61 = variable61.9AjdkJ;
            variable61 = variable62.bind(variable63)(variable61);
            target['label'] = variable61;
            target['errorMessage'] = variable60;
            if(!(cntext != variable59)) { _fun00006_ip = 2088; continue _fun00005 }
 2085:
            variable57 = variable59;
 2088:
            target['value'] = variable57;
            target['onFocus'] = variable46;
            variable57 = function(argFoo) { // Original name: onChange
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = argFoo;
                    michal = '';
                    if(!(michal === entity)) { _fun00008_ip = 35; continue _fun00007 }
 11:
                    michal = _closure2_slot0;
                    zuuluu = michal.globalName;
                    michal = null;
                    michal = michal == zuuluu;
                    report = undefined;
                    if(michal) { _fun00008_ip = 38; continue _fun00007 }
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
                    michal = _closure2_slot0;
                    oscard = michal.globalName;
                    michal = undefined;
                    if(!(report !== oscard)) { _fun00008_ip = 91; continue _fun00007 }
 88:
                    michal = report;
 91:
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                }
            };
            target['onChange'] = variable57;
            variable57 = variable39.toString;
            variable57 = variable57.bind(variable39)();
            target['placeholder'] = variable57;
            variable57 = _closure1_slot9;
            target['maxLength'] = variable57;
            target['disabled'] = variable37;
            target = variable51.bind(tangon)(status, target);
            record[1] = target;
            variable51 = _closure1_slot13;
            status = _closure1_slot1;
            variable57 = _closure1_slot2;
            target = variable57[papara];
            status = status.bind(tangon)(target);
            target = {};
            target['scrollTargetRef'] = variable58;
            variable60 = _closure1_slot0;
            variable58 = variable57[variable55];
            variable58 = variable60.bind(tangon)(variable58);
            variable59 = variable58.intl;
            variable58 = variable59.string;
            variable57 = variable57[variable55];
            variable57 = variable60.bind(tangon)(variable57);
            variable57 = variable57.t;
            variable57 = variable57.+T3RIy;
            variable57 = variable58.bind(variable59)(variable57);
            target['label'] = variable57;
            target['errorMessage'] = variable56;
            if(!(cntext != variable54)) { _fun00006_ip = 2238; continue _fun00005 }
 2235:
            variable53 = variable54;
 2238:
            target['value'] = variable53;
            target['onFocus'] = variable46;
            variable53 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserPronouns;
                michal = _closure2_slot1;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            target['onChange'] = variable53;
            variable53 = _closure1_slot10;
            target['maxLength'] = variable53;
            target['disabled'] = variable37;
            target = variable51.bind(tangon)(status, target);
            record[2] = target;
            status = _closure1_slot13;
            target = _closure1_slot1;
            variable51 = _closure1_slot2;
            papara = variable51[papara];
            target = target.bind(tangon)(papara);
            papara = {};
            papara['scrollTargetRef'] = variable52;
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
            if(!(cntext != variable49)) { _fun00006_ip = 2374; continue _fun00005 }
 2371:
            variable48 = variable49;
 2374:
            papara['value'] = variable48;
            papara['onFocus'] = variable46;
            variable46 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingUserBio;
                michal = _closure2_slot2;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            papara['onChange'] = variable46;
            variable46 = _closure1_slot12;
            variable46 = variable46.BIO;
            variable46 = variable47 === variable46;
            papara['autoFocus'] = variable46;
            variable46 = _closure1_slot8;
            papara['maxLength'] = variable46;
            variable46 = 5;
            papara['numberOfLines'] = variable46;
            papara['multiline'] = variable45;
            papara['disabled'] = variable37;
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
            if(foxtra) { _fun00006_ip = 2511; continue _fun00005 }
 2503:
            variable45 = variable46.setPendingThemeColors;
            _fun00006_ip = 2517; continue _fun00005;
 2511:
            variable45 = variable46.setTryItOutThemeColors;
 2517:
            papara['onProfileThemeColorsChanged'] = variable45;
            papara['pendingAvatarSrc'] = variable44;
            if(!foxtra) { _fun00006_ip = 2533; continue _fun00005 }
 2530:
            equals = variable40;
 2533:
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
            target = _closure1_slot5;
            papara = {};
            whisks = function(argFoo) { // Original name: ref
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00010_ip = 38; continue _fun00009 }
 9:
                    entity = _closure2_slot3;
                    michal = entity.current;
                    entity = _closure1_slot11;
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
            if(!cntext) { _fun00006_ip = 2809; continue _fun00005 }
 2767:
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
 2809:
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
            if(!verify) { _fun00006_ip = 2896; continue _fun00005 }
 2893:
            verify = !yankee;
 2896:
            if(!verify) { _fun00006_ip = 2942; continue _fun00005 }
 2899:
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
 2942:
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
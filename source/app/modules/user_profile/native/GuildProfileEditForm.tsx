// app/modules/user_profile/native/GuildProfileEditForm.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: EditGuildProfileBanner
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            output = entity.user;
            var _closure2_slot0 = output;
            sizing = entity.displayProfile;
            foxtra = entity.guildMember;
            michal = entity.guildMemberProfile;
            var _closure2_slot1 = michal;
            backup = entity.pendingAvatarSrc;
            kiloes = entity.pendingBanner;
            var _closure2_slot2 = kiloes;
            romeon = entity.pendingThemeColors;
            option = entity.disabled;
            oscard = _closure1_slot1;
            result = _closure1_slot2;
            entity = 11;
            entity = result[entity];
            tangon = undefined;
            michal = oscard.bind(tangon)(entity);
            entity = michal.canUsePremiumGuildMemberProfile;
            yankee = entity.bind(michal)(output);
            var _closure2_slot3 = yankee;
            entity = 12;
            michal = result[entity];
            zuuluu = oscard.bind(tangon)(michal);
            michal = 13;
            michal = result[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.EDIT_BANNER;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            var _closure2_slot4 = report;
            zuuluu = _closure1_slot19;
            michal = _closure1_slot0;
            entity = result[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot19;
            report = 14;
            report = result[report];
            oscard = oscard.bind(tangon)(report);
            report = {};
            report['user'] = output;
            report['displayProfile'] = sizing;
            report['pendingBanner'] = kiloes;
            report['pendingAvatarSrc'] = backup;
            report['pendingThemeColors'] = romeon;
            romeon = false;
            report['showProfilePreviewButton'] = romeon;
            if(!yankee) { _fun00002_ip = 235; continue _fun00001 }
 229:
            romeon = null;
            yankee = romeon != foxtra;
 235:
            report['showEditButton'] = yankee;
            offset = function() { // Original name: onPressEdit
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot3;
                    zuuluu = _closure1_slot1;
                    verify = _closure1_slot2;
                    if(michal) { _fun00004_ip = 134; continue _fun00003 }
 21:
                    michal = 21;
                    tangon = verify[michal];
                    michal = undefined;
                    report = zuuluu.bind(michal)(tangon);
                    tangon = report.handleShowUpsellAlert;
                    michal = {};
                    oscard = _closure1_slot16;
                    oscard = oscard.PREMIUM_GUILD_PROFILE;
                    michal['initialUpsellKey'] = oscard;
                    oscard = {};
                    golfie = _closure1_slot12;
                    golfie = golfie.PREMIUM_GUILD_MEMBER_PROFILE;
                    oscard['section'] = golfie;
                    golfie = _closure1_slot11;
                    golfie = golfie.EDIT_GUILD_PROFILE_BANNER;
                    oscard['object'] = golfie;
                    michal['analyticsLocation'] = oscard;
                    oscard = _closure2_slot4;
                    michal['analyticsLocations'] = oscard;
                    oscard = {};
                    golfie = _closure1_slot17;
                    golfie = golfie.PREMIUM_GUILD_IDENTITY_MODAL;
                    oscard['type'] = golfie;
                    michal['analyticsProperties'] = oscard;
                    michal = tangon.bind(report)(michal);
                    _fun00004_ip = 363; continue _fun00003;
 134:
                    michal = 15;
                    michal = verify[michal];
                    golfie = undefined;
                    report = zuuluu.bind(golfie)(michal);
                    tangon = report.openLazy;
                    option = _closure1_slot0;
                    michal = 17;
                    michal = verify[michal];
                    oscard = option.bind(golfie)(michal);
                    michal = 16;
                    zuuluu = verify[michal];
                    michal = verify.paths;
                    zuuluu = oscard.bind(golfie)(zuuluu, michal);
                    michal = {};
                    oscard = _closure2_slot0;
                    michal['user'] = oscard;
                    oscard = _closure2_slot4;
                    michal['analyticsLocations'] = oscard;
                    oscard = 18;
                    oscard = verify[oscard];
                    offset = option.bind(golfie)(oscard);
                    verify = offset.showRemoveBanner;
                    option = _closure2_slot2;
                    romeon = _closure2_slot1;
                    oscard = null;
                    romeon = oscard == romeon;
                    oscard = undefined;
                    if(romeon) { _fun00004_ip = 254; continue _fun00003 }
 244:
                    yankee = _closure2_slot1;
                    oscard = yankee.banner;
 254:
                    oscard = verify.bind(offset)(option, oscard);
                    michal['showRemoveBanner'] = oscard;
                    oscard = _closure1_slot0;
                    option = _closure1_slot2;
                    entity = 19;
                    verify = option[entity];
                    verify = oscard.bind(golfie)(verify);
                    offset = verify.intl;
                    verify = offset.string;
                    entity = option[entity];
                    entity = oscard.bind(golfie)(entity);
                    entity = entity.t;
                    entity = entity.jHlJNT;
                    entity = verify.bind(offset)(entity);
                    michal['removeText'] = entity;
                    entity = 20;
                    entity = option[entity];
                    entity = oscard.bind(golfie)(entity);
                    entity = entity.setPendingBanner;
                    michal['onBannerChange'] = entity;
                    entity = 'Change Banner';
                    entity = tangon.bind(report)(zuuluu, entity, michal);
 363:
                    entity = undefined;
                    return entity;
                }
            };
            report['onPressEdit'] = offset;
            romeon = _closure1_slot0;
            foxtra = _closure1_slot2;
            verify = 19;
            offset = foxtra[verify];
            offset = romeon.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = foxtra[verify];
            verify = romeon.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.95hPAQ;
            verify = offset.bind(yankee)(verify);
            report['editButtonAccessibilityLabel'] = verify;
            report['editDisabled'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot23 = entity;
    entity = ['nick', 'bio'];
    var _closure1_slot3 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot10 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsObjects;
    var _closure1_slot11 = golfie;
    option = tangon.AnalyticsPages;
    golfie = tangon.AnalyticsSections;
    var _closure1_slot12 = golfie;
    verify = tangon.BIO_MAX_LENGTH;
    var _closure1_slot13 = verify;
    verify = tangon.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot14 = verify;
    verify = tangon.PRONOUNS_MAX_LENGTH;
    var _closure1_slot15 = verify;
    tangon = tangon.UpsellTypes;
    var _closure1_slot16 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumUpsellTypes;
    var _closure1_slot17 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KEYBOARD_DELAY_MS;
    var _closure1_slot18 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.jsx;
    var _closure1_slot19 = verify;
    verify = tangon.Fragment;
    var _closure1_slot20 = verify;
    tangon = tangon.jsxs;
    var _closure1_slot21 = tangon;
    tangon = {};
    option = option.USER_SETTINGS;
    tangon['page'] = option;
    golfie = golfie.SETTINGS_CUSTOMIZE_PROFILE;
    tangon['section'] = golfie;
    var _closure1_slot22 = tangon;
    tangon = 52;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/GuildProfileEditForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildProfileEditForm
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            variable42 = entity.currentUser;
            var _closure2_slot0 = variable42;
            report = undefined;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            var _closure2_slot7 = report;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 22;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            limora = entity.bind(report)();
            entity = 23;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            sizing = entity.bind(report)();
            oscard = _closure1_slot0;
            entity = 24;
            entity = tangon[entity];
            option = oscard.bind(report)(entity);
            golfie = option.useStateFromStoresObject;
            entity = _closure1_slot8;
            michal = new Array(1);
            michal[0] = entity;
            entity = function() {
                entity = {};
                michal = _closure1_slot8;
                zuuluu = michal.keyboardOpen;
                entity['keyboardOpen'] = zuuluu;
                michal = michal.keyboardHeight;
                entity['keyboardHeight'] = michal;
                return entity;
            };
            michal = golfie.bind(option)(michal, entity);
            entity = michal.keyboardOpen;
            foxtra = michal.keyboardHeight;
            golfie = _closure1_slot5;
            michal = golfie.useRef;
            variable49 = null;
            romeon = michal.bind(golfie)(variable49);
            var _closure2_slot1 = romeon;
            michal = 25;
            michal = tangon[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.bind(report)();
            echoed = michal.bottom;
            michal = 26;
            michal = tangon[michal];
            option = oscard.bind(report)(michal);
            golfie = option.useShouldEnableMobilePerGuildCollectiblesEdit;
            michal = 'GuildProfileEditForm';
            sierra = golfie.bind(option)(michal);
            michal = 27;
            michal = tangon[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.bind(report)();
            variable41 = michal.guild;
            var _closure2_slot2 = variable41;
            golfie = michal.errors;
            variable45 = michal.isDisabled;
            variable57 = michal.pendingNickname;
            verify = michal.pendingAvatar;
            sequen = michal.pendingBanner;
            variable36 = michal.pendingThemeColors;
            variable53 = michal.pendingPronouns;
            variable48 = michal.pendingBio;
            variable44 = michal.pendingAvatarDecoration;
            variable40 = michal.pendingProfileEffectId;
            michal = 28;
            option = tangon[michal];
            output = oscard.bind(report)(option);
            yankee = output.useStateFromStores;
            option = _closure1_slot7;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot2;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00008_ip = 53; continue _fun00007 }
 16:
                    report = _closure1_slot7;
                    tangon = report.getMember;
                    zuuluu = _closure2_slot2;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 53:
                    return entity;
                }
            };
            target = yankee.bind(output)(offset, option);
            var _closure2_slot3 = target;
            michal = tangon[michal];
            offset = oscard.bind(report)(michal);
            option = offset.useStateFromStores;
            michal = _closure1_slot9;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot2;
                    golfie = null;
                    michal = golfie != entity;
                    entity = null;
                    if(!michal) { _fun00010_ip = 68; continue _fun00009 }
 18:
                    report = _closure1_slot9;
                    tangon = report.getGuildMemberProfile;
                    michal = _closure2_slot0;
                    zuuluu = michal.id;
                    michal = _closure2_slot2;
                    golfie = golfie == michal;
                    michal = undefined;
                    if(golfie) { _fun00010_ip = 62; continue _fun00009 }
 53:
                    oscard = _closure2_slot2;
                    michal = oscard.id;
 62:
                    entity = tangon.bind(report)(zuuluu, michal);
 68:
                    return entity;
                }
            };
            config = option.bind(offset)(oscard, michal);
            var _closure2_slot4 = config;
            michal = 29;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = variable42.id;
            oscard = variable49 == variable41;
            michal = undefined;
            if(oscard) { _fun00006_ip = 406; continue _fun00005 }
 401:
            michal = variable41.id;
 406:
            variable39 = tangon.bind(report)(zuuluu, michal);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 30;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            michal = oscard.useCustomStatusActivity;
            variable50 = michal.bind(oscard)();
            michal = 31;
            michal = tangon[michal];
            option = zuuluu.bind(report)(michal);
            oscard = option.getPendingAvatarSrc;
            michal = {};
            offset = variable42.id;
            michal['userId'] = offset;
            michal['image'] = verify;
            variable37 = oscard.bind(option)(michal);
            michal = 32;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            michal = oscard.useGuildProfilePermissions;
            michal = michal.bind(oscard)(variable41);
            variable54 = michal.canEditNickname;
            oscard = _closure1_slot1;
            michal = 11;
            michal = tangon[michal];
            oscard = oscard.bind(report)(michal);
            michal = oscard.canUsePremiumGuildMemberProfile;
            equals = michal.bind(oscard)(variable42);
            michal = 33;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.canResetThemeColors;
            oscard = variable49 == config;
            michal = undefined;
            if(oscard) { _fun00006_ip = 570; continue _fun00005 }
 564:
            michal = config.themeColors;
 570:
            quebec = zuuluu.bind(tangon)(variable36, michal);
            offset = !equals;
            if(!offset) { _fun00006_ip = 585; continue _fun00005 }
 582:
            offset = !entity;
 585:
            michal = variable49 == target;
            entity = undefined;
            if(michal) { _fun00006_ip = 600; continue _fun00005 }
 594:
            entity = target.nick;
 600:
            michal = variable49 != entity;
            status = '';
            variable56 = status;
            if(!michal) { _fun00006_ip = 617; continue _fun00005 }
 614:
            variable56 = entity;
 617:
            michal = variable49 == variable39;
            entity = undefined;
            if(michal) { _fun00006_ip = 632; continue _fun00005 }
 626:
            entity = variable39.pronouns;
 632:
            michal = variable49 != entity;
            variable52 = status;
            if(!michal) { _fun00006_ip = 645; continue _fun00005 }
 642:
            variable52 = entity;
 645:
            _closure2_slot5 = variable52;
            michal = variable49 == variable39;
            entity = undefined;
            if(michal) { _fun00006_ip = 664; continue _fun00005 }
 658:
            entity = variable39.bio;
 664:
            michal = variable49 != entity;
            variable47 = status;
            if(!michal) { _fun00006_ip = 677; continue _fun00005 }
 674:
            variable47 = entity;
 677:
            _closure2_slot6 = variable47;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 12;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            entity = 13;
            entity = zuuluu[entity];
            entity = michal.bind(report)(entity);
            oscard = entity.USER_SETTINGS;
            entity = new Array(1);
            entity[0] = oscard;
            entity = tangon.bind(report)(entity);
            entity = entity.analyticsLocations;
            _closure2_slot7 = entity;
            entity = 34;
            entity = zuuluu[entity];
            michal = michal.bind(report)(entity);
            entity = {};
            entity['user'] = variable42;
            entity['displayProfile'] = variable39;
            entity['pendingThemeColors'] = variable36;
            entity = michal.bind(report)(entity);
            oscard = entity.theme;
            variable38 = entity.primaryColor;
            source = entity.secondaryColor;
            michal = _closure1_slot0;
            entity = 35;
            entity = zuuluu[entity];
            zuuluu = michal.bind(report)(entity);
            michal = zuuluu.useUserProfileColors;
            entity = {};
            entity['theme'] = oscard;
            entity['primaryColor'] = variable38;
            entity['secondaryColor'] = source;
            entity = michal.bind(zuuluu)(entity);
            record = entity.gradientFallbackBackground;
            update = entity.gradientSecondaryBackground;
            whisks = entity.containerBackground;
            entity = entity.avatarBackground;
            variable59 = 0;
            michal = 0;
            if(!offset) { _fun00006_ip = 872; continue _fun00005 }
 868:
            michal = _closure1_slot10;
 872:
            papara = echoed + michal;
            variable61 = {};
            variable61['backgroundColor'] = entity;
            michal = golfie.nick;
            entity = golfie.bio;
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot3;
            tangon = tangon.bind(report)(golfie, zuuluu);
            zuuluu = variable49 == michal;
            variable58 = undefined;
            if(zuuluu) { _fun00006_ip = 921; continue _fun00005 }
 917:
            variable58 = michal[variable59];
 921:
            michal = golfie.pronouns;
            zuuluu = variable49 == michal;
            variable55 = undefined;
            if(zuuluu) { _fun00006_ip = 940; continue _fun00005 }
 936:
            variable55 = michal[variable59];
 940:
            michal = variable49 == entity;
            variable51 = undefined;
            if(michal) { _fun00006_ip = 953; continue _fun00005 }
 949:
            variable51 = entity[variable59];
 953:
            michal = global;
            zuuluu = michal.parseInt;
            entity = variable49 == golfie;
            option = undefined;
            if(entity) { _fun00006_ip = 975; continue _fun00005 }
 970:
            option = golfie.code;
 975:
            verify = variable49 != option;
            entity = status;
            if(!verify) { _fun00006_ip = 988; continue _fun00005 }
 985:
            entity = option;
 988:
            option = zuuluu.bind(report)(entity);
            zuuluu = 200005;
            entity = null;
            if(!(zuuluu === option)) { _fun00006_ip = 1022; continue _fun00005 }
 1005:
            option = variable49 == golfie;
            zuuluu = undefined;
            if(option) { _fun00006_ip = 1019; continue _fun00005 }
 1014:
            zuuluu = golfie.message;
 1019:
            entity = zuuluu;
 1022:
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            michal = michal.bind(zuuluu)(tangon);
            michal = michal.length;
            michal = michal > variable59;
            variable60 = null;
            if(!michal) { _fun00006_ip = 1134; continue _fun00005 }
 1052:
            michal = variable49 == variable51;
            variable60 = null;
            if(!michal) { _fun00006_ip = 1134; continue _fun00005 }
 1061:
            michal = variable49 == variable58;
            variable60 = null;
            if(!michal) { _fun00006_ip = 1134; continue _fun00005 }
 1070:
            if(!(variable49 == entity)) { _fun00006_ip = 1131; continue _fun00005 }
 1074:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 19;
            zuuluu = option[michal];
            zuuluu = golfie.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.t;
            michal = michal.s35OuL;
            entity = zuuluu.bind(tangon)(michal);
 1131:
            variable60 = entity;
 1134:
            variable43 = function() { // Original name: handleBlur
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = _closure2_slot1;
                    tangon = entity.current;
                    entity = null;
                    if(!(entity != tangon)) { _fun00012_ip = 35; continue _fun00011 }
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
            michal = variable49 == variable41;
            entity = null;
            if(michal) { _fun00006_ip = 3037; continue _fun00005 }
 1153:
            tangon = _closure1_slot19;
            yankee = _closure1_slot0;
            variable63 = _closure1_slot2;
            michal = 37;
            michal = variable63[michal];
            michal = yankee.bind(report)(michal);
            zuuluu = michal.ThemeContextProvider;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = variable38;
            michal['secondaryColor'] = source;
            option = _closure1_slot21;
            golfie = _closure1_slot6;
            oscard = {};
            output = sizing.container;
            verify = new Array(2);
            verify[0] = output;
            output = {};
            output['backgroundColor'] = update;
            verify[1] = output;
            oscard['style'] = verify;
            verify = 38;
            verify = variable63[verify];
            verify = yankee.bind(report)(verify);
            yankee = verify.KeyboardAwareScrollView;
            verify = {'enableOnAndroid': true, 'enableAutomaticScroll': true, 'extraHeight': null, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable46 = true;
            verify['extraHeight'] = foxtra;
            foxtra = _closure1_slot18;
            verify['keyboardOpeningTime'] = foxtra;
            variable62 = false;
            verify['ref'] = romeon;
            foxtra = _closure1_slot19;
            romeon = {};
            output = sizing.bounceOffset;
            romeon['style'] = output;
            foxtra = foxtra.bind(report)(golfie, romeon);
            romeon = new Array(2);
            romeon[0] = foxtra;
            cntext = _closure1_slot1;
            vacuum = 39;
            foxtra = variable63[vacuum];
            output = cntext.bind(report)(foxtra);
            foxtra = {};
            foxtra['fallbackBackground'] = record;
            foxtra['primaryColor'] = variable38;
            foxtra['secondaryColor'] = source;
            result = {};
            result['backgroundColor'] = update;
            foxtra['containerStyle'] = result;
            ctrled = _closure1_slot19;
            update = _closure1_slot23;
            result = {};
            result['user'] = variable42;
            result['displayProfile'] = variable39;
            result['guildMember'] = target;
            result['guildMemberProfile'] = config;
            result['pendingAvatarSrc'] = variable37;
            result['pendingBanner'] = sequen;
            result['pendingThemeColors'] = variable36;
            result['disabled'] = variable45;
            update = ctrled.bind(report)(update, result);
            result = new Array(2);
            result[0] = update;
            update = {};
            sequen = _closure1_slot19;
            ctrled = {};
            target = limora.avatarBackground;
            config = new Array(4);
            config[0] = target;
            target = limora.avatarPosition;
            config[1] = target;
            target = sizing.avatarContainer;
            config[2] = target;
            config[3] = variable61;
            ctrled['style'] = config;
            target = _closure1_slot19;
            config = 40;
            config = variable63[config];
            cntext = cntext.bind(report)(config);
            config = {};
            variable63 = variable42.id;
            config['userId'] = variable63;
            variable63 = variable45;
            if(variable45) { _fun00006_ip = 1515; continue _fun00005 }
 1512:
            variable63 = !equals;
 1515:
            config['disabled'] = variable63;
            config['disableStatus'] = variable62;
            variable63 = variable49 == variable41;
            variable62 = undefined;
            if(variable63) { _fun00006_ip = 1538; continue _fun00005 }
 1533:
            variable62 = variable41.id;
 1538:
            config['guildId'] = variable62;
            config['statusStyle'] = variable61;
            config = target.bind(report)(cntext, config);
            ctrled['children'] = config;
            sequen = sequen.bind(report)(golfie, ctrled);
            ctrled = new Array(2);
            ctrled[0] = sequen;
            config = _closure1_slot21;
            cntext = _closure1_slot1;
            target = _closure1_slot2;
            vacuum = target[vacuum];
            sequen = cntext.bind(report)(vacuum);
            vacuum = {};
            vacuum['fallbackBackground'] = record;
            vacuum['primaryColor'] = variable38;
            vacuum['secondaryColor'] = source;
            record = limora.profileContent;
            source = new Array(2);
            source[0] = record;
            record = {};
            record['paddingTop'] = variable59;
            record['paddingBottom'] = papara;
            source[1] = record;
            vacuum['containerStyle'] = source;
            papara = _closure1_slot19;
            source = 41;
            source = target[source];
            record = cntext.bind(report)(source);
            source = {};
            source['customStatusActivity'] = variable50;
            variable38 = variable49 != variable38;
            source['hasCustomProfileTheme'] = variable38;
            variable38 = limora.customStatusBubble;
            source['style'] = variable38;
            limora = limora.emojiOnlyCustomStatusBubble;
            source['emojiOnlyStyle'] = limora;
            source['editEnabled'] = variable46;
            source = papara.bind(report)(record, source);
            record = new Array(3);
            record[0] = source;
            papara = _closure1_slot19;
            source = 42;
            source = target[source];
            cntext = cntext.bind(report)(source);
            source = {};
            source['user'] = variable42;
            target = variable56;
            if(!(variable49 != variable57)) { _fun00006_ip = 1748; continue _fun00005 }
 1745:
            target = variable57;
 1748:
            source['displayName'] = target;
            target = variable52;
            if(!(variable49 != variable53)) { _fun00006_ip = 1762; continue _fun00005 }
 1759:
            target = variable53;
 1762:
            source['pronouns'] = target;
            source['badgeContainerBackground'] = whisks;
            source = papara.bind(report)(cntext, source);
            record[1] = source;
            target = _closure1_slot21;
            papara = _closure1_slot6;
            cntext = {};
            limora = sizing.formContainer;
            source = new Array(2);
            source[0] = limora;
            limora = {};
            limora['backgroundColor'] = whisks;
            whisks = 20;
            limora['paddingBottom'] = whisks;
            source[1] = limora;
            cntext['style'] = source;
            limora = variable49 != variable60;
            source = null;
            if(!limora) { _fun00006_ip = 1926; continue _fun00005 }
 1837:
            source = null;
            if(!(status !== variable60)) { _fun00006_ip = 1926; continue _fun00005 }
 1843:
            whisks = _closure1_slot19;
            limora = _closure1_slot6;
            status = {};
            variable38 = sizing.errorContainer;
            status['style'] = variable38;
            variable59 = _closure1_slot19;
            variable50 = _closure1_slot0;
            variable61 = _closure1_slot2;
            variable38 = 36;
            variable38 = variable61[variable38];
            variable38 = variable50.bind(report)(variable38);
            variable50 = variable38.Text;
            variable38 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable38['children'] = variable60;
            variable38 = variable59.bind(report)(variable50, variable38);
            status['children'] = variable38;
            source = whisks.bind(report)(limora, status);
 1926:
            status = new Array(6);
            status[0] = source;
            variable50 = _closure1_slot19;
            limora = _closure1_slot1;
            variable59 = _closure1_slot2;
            whisks = 43;
            source = variable59[whisks];
            variable38 = limora.bind(report)(source);
            limora = {};
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
            limora['label'] = variable59;
            limora['errorMessage'] = variable58;
            if(!(variable49 != variable57)) { _fun00006_ip = 2029; continue _fun00005 }
 2026:
            variable56 = variable57;
 2029:
            limora['value'] = variable56;
            variable56 = function(argFoo) { // Original name: onChange
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    michal = '';
                    if(!(michal === entity)) { _fun00014_ip = 48; continue _fun00013 }
 11:
                    michal = _closure2_slot3;
                    zuuluu = null;
                    oscard = zuuluu == michal;
                    michal = undefined;
                    if(oscard) { _fun00014_ip = 39; continue _fun00013 }
 29:
                    tangon = _closure2_slot3;
                    michal = tangon.nick;
 39:
                    michal = zuuluu == michal;
                    report = undefined;
                    if(michal) { _fun00014_ip = 51; continue _fun00013 }
 48:
                    report = entity;
 51:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 33;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.setNewPendingNickname;
                    golfie = _closure2_slot3;
                    michal = null;
                    golfie = michal == golfie;
                    michal = undefined;
                    if(golfie) { _fun00014_ip = 110; continue _fun00013 }
 100:
                    oscard = _closure2_slot3;
                    michal = oscard.nick;
 110:
                    michal = zuuluu.bind(tangon)(report, michal);
                    return entity;
                }
            };
            limora['onChange'] = variable56;
            variable57 = _closure1_slot1;
            variable58 = _closure1_slot2;
            variable56 = 44;
            variable56 = variable58[variable56];
            variable57 = variable57.bind(report)(variable56);
            variable56 = variable57.getName;
            variable56 = variable56.bind(variable57)(variable42);
            limora['placeholder'] = variable56;
            variable56 = _closure1_slot14;
            limora['maxLength'] = variable56;
            variable54 = !variable54;
            if(variable54) { _fun00006_ip = 2099; continue _fun00005 }
 2096:
            variable54 = variable45;
 2099:
            limora['disabled'] = variable54;
            limora['onBlur'] = variable43;
            limora = variable50.bind(report)(variable38, limora);
            status[1] = limora;
            variable50 = _closure1_slot19;
            variable38 = _closure1_slot1;
            variable54 = _closure1_slot2;
            limora = variable54[whisks];
            variable38 = variable38.bind(report)(limora);
            limora = {};
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
            limora['label'] = variable56;
            limora['errorMessage'] = variable55;
            variable55 = variable54[source];
            variable55 = variable57.bind(report)(variable55);
            variable56 = variable55.intl;
            variable55 = variable56.string;
            variable54 = variable54[source];
            variable54 = variable57.bind(report)(variable54);
            variable54 = variable54.t;
            variable54 = variable54.NZqtIi;
            variable54 = variable55.bind(variable56)(variable54);
            limora['description'] = variable54;
            if(!(variable49 != variable53)) { _fun00006_ip = 2255; continue _fun00005 }
 2252:
            variable52 = variable53;
 2255:
            limora['value'] = variable52;
            variable52 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 33;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingGuildIdentityPronouns;
                michal = _closure2_slot5;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            limora['onChange'] = variable52;
            variable52 = _closure1_slot15;
            limora['maxLength'] = variable52;
            limora['disabled'] = variable45;
            limora['onBlur'] = variable43;
            limora = variable50.bind(report)(variable38, limora);
            status[2] = limora;
            limora = null;
            if(!equals) { _fun00006_ip = 2497; continue _fun00005 }
 2307:
            variable38 = _closure1_slot19;
            equals = _closure1_slot1;
            variable50 = _closure1_slot2;
            whisks = variable50[whisks];
            equals = equals.bind(report)(whisks);
            whisks = {};
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
            whisks['label'] = variable52;
            whisks['errorMessage'] = variable51;
            variable51 = variable50[source];
            variable51 = variable53.bind(report)(variable51);
            variable52 = variable51.intl;
            variable51 = variable52.string;
            variable50 = variable50[source];
            variable50 = variable53.bind(report)(variable50);
            variable50 = variable50.t;
            variable50 = variable50.gYETnp;
            variable50 = variable51.bind(variable52)(variable50);
            whisks['description'] = variable50;
            if(!(variable49 != variable48)) { _fun00006_ip = 2444; continue _fun00005 }
 2441:
            variable47 = variable48;
 2444:
            whisks['value'] = variable47;
            variable47 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 33;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingGuildIdentityBio;
                michal = _closure2_slot6;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            whisks['onChange'] = variable47;
            variable47 = _closure1_slot13;
            whisks['maxLength'] = variable47;
            variable47 = 5;
            whisks['numberOfLines'] = variable47;
            whisks['multiline'] = variable46;
            whisks['disabled'] = variable45;
            whisks['onBlur'] = variable43;
            limora = variable38.bind(report)(equals, whisks);
 2497:
            status[3] = limora;
            equals = _closure1_slot19;
            whisks = _closure1_slot1;
            variable38 = _closure1_slot2;
            limora = 45;
            limora = variable38[limora];
            whisks = whisks.bind(report)(limora);
            limora = {};
            limora['pendingAvatarSrc'] = variable37;
            limora['pendingThemeColors'] = variable36;
            limora['user'] = variable42;
            variable36 = variable41.id;
            limora['guildId'] = variable36;
            variable36 = function(argFoo) { // Original name: onProfileThemeColorsChanged
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 33;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.setNewPendingGuildIdentityThemeColors;
                    oscard = _closure2_slot4;
                    zuuluu = null;
                    oscard = zuuluu == oscard;
                    zuuluu = undefined;
                    if(oscard) { _fun00016_ip = 59; continue _fun00015 }
 49:
                    michal = _closure2_slot4;
                    zuuluu = michal.themeColors;
 59:
                    michal = argFoo;
                    michal = tangon.bind(report)(michal, zuuluu);
                    return entity;
                }
            };
            limora['onProfileThemeColorsChanged'] = variable36;
            limora['showResetMenu'] = quebec;
            limora = equals.bind(report)(whisks, limora);
            status[4] = limora;
            if(!sierra) { _fun00006_ip = 2712; continue _fun00005 }
 2583:
            equals = _closure1_slot21;
            whisks = _closure1_slot20;
            limora = {};
            variable38 = _closure1_slot19;
            variable37 = _closure1_slot1;
            variable43 = _closure1_slot2;
            quebec = 46;
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
            variable36 = 47;
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
            limora['children'] = quebec;
            sierra = equals.bind(report)(whisks, limora);
 2712:
            status[5] = sierra;
            cntext['children'] = status;
            cntext = target.bind(report)(papara, cntext);
            record[2] = cntext;
            vacuum['children'] = record;
            vacuum = config.bind(report)(sequen, vacuum);
            ctrled[1] = vacuum;
            update['children'] = ctrled;
            update = option.bind(report)(golfie, update);
            result[1] = update;
            foxtra['children'] = result;
            foxtra = option.bind(report)(output, foxtra);
            romeon[1] = foxtra;
            verify['children'] = romeon;
            yankee = option.bind(report)(yankee, verify);
            verify = new Array(2);
            verify[0] = yankee;
            if(!offset) { _fun00006_ip = 3013; continue _fun00005 }
 2796:
            foxtra = _closure1_slot19;
            romeon = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 48;
            yankee = output[yankee];
            romeon = romeon.bind(report)(yankee);
            yankee = {};
            result = sizing.floatingUpsell;
            sizing = new Array(2);
            sizing[0] = result;
            result = {};
            result['bottom'] = echoed;
            sizing[1] = result;
            yankee['style'] = sizing;
            update = _closure1_slot0;
            sizing = output[source];
            sizing = update.bind(report)(sizing);
            echoed = sizing.intl;
            result = echoed.string;
            sizing = output[source];
            sizing = update.bind(report)(sizing);
            sizing = sizing.t;
            sizing = sizing.pj0XBA;
            sizing = result.bind(echoed)(sizing);
            yankee['ctaText'] = sizing;
            kiloes = function() { // Original name: onPress
                zuuluu = _closure1_slot1;
                option = _closure1_slot2;
                entity = 49;
                michal = option[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.pushLazy;
                golfie = _closure1_slot0;
                michal = 17;
                michal = option[michal];
                oscard = golfie.bind(entity)(michal);
                michal = 50;
                zuuluu = option[michal];
                michal = option.paths;
                zuuluu = oscard.bind(entity)(zuuluu, michal);
                michal = {};
                oscard = {};
                yankee = _closure1_slot22;
                romeon = oscard;
                offset = copyDataProperties(romeon, yankee);
                verify = _closure1_slot11;
                offset = verify.BUTTON_CTA;
                verify = 'object';
                oscard[verify] = offset;
                michal['analyticsLocation'] = oscard;
                oscard = _closure2_slot7;
                michal['analyticsLocations'] = oscard;
                oscard = 51;
                oscard = option[oscard];
                oscard = golfie.bind(entity)(oscard);
                oscard = oscard.PremiumFeatureCardOrder;
                oscard = oscard.TIER_2_LEADING;
                michal['premiumFeatureCardOrder'] = oscard;
                michal = tangon.bind(report)(zuuluu, michal);
                return entity;
            };
            yankee['onPress'] = kiloes;
            sizing = _closure1_slot19;
            backup = 36;
            backup = output[backup];
            backup = update.bind(report)(backup);
            kiloes = backup.Text;
            backup = {};
            result = 'text-sm/normal';
            backup['variant'] = result;
            result = output[source];
            result = update.bind(report)(result);
            echoed = result.intl;
            result = echoed.string;
            output = output[source];
            output = update.bind(report)(output);
            output = output.t;
            output = output.YIZS5O;
            output = result.bind(echoed)(output);
            backup['children'] = output;
            backup = sizing.bind(report)(kiloes, backup);
            yankee['children'] = backup;
            offset = foxtra.bind(report)(romeon, yankee);
 3013:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 3037:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
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
            zuuluu = _closure1_slot18;
            michal = _closure1_slot0;
            entity = result[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot18;
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
                    oscard = _closure1_slot15;
                    oscard = oscard.PREMIUM_GUILD_PROFILE;
                    michal['initialUpsellKey'] = oscard;
                    oscard = {};
                    golfie = _closure1_slot11;
                    golfie = golfie.PREMIUM_GUILD_MEMBER_PROFILE;
                    oscard['section'] = golfie;
                    golfie = _closure1_slot10;
                    golfie = golfie.EDIT_GUILD_PROFILE_BANNER;
                    oscard['object'] = golfie;
                    michal['analyticsLocation'] = oscard;
                    oscard = _closure2_slot4;
                    michal['analyticsLocations'] = oscard;
                    oscard = {};
                    golfie = _closure1_slot16;
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
    var _closure1_slot21 = entity;
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
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.View;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.AnalyticsObjects;
    var _closure1_slot10 = golfie;
    option = tangon.AnalyticsPages;
    golfie = tangon.AnalyticsSections;
    var _closure1_slot11 = golfie;
    verify = tangon.BIO_MAX_LENGTH;
    var _closure1_slot12 = verify;
    verify = tangon.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot13 = verify;
    verify = tangon.PRONOUNS_MAX_LENGTH;
    var _closure1_slot14 = verify;
    tangon = tangon.UpsellTypes;
    var _closure1_slot15 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumUpsellTypes;
    var _closure1_slot16 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.KEYBOARD_DELAY_MS;
    var _closure1_slot17 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.jsx;
    var _closure1_slot18 = verify;
    tangon = tangon.jsxs;
    var _closure1_slot19 = tangon;
    tangon = {};
    option = option.USER_SETTINGS;
    tangon['page'] = option;
    golfie = golfie.SETTINGS_CUSTOMIZE_PROFILE;
    tangon['section'] = golfie;
    var _closure1_slot20 = tangon;
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
            variable37 = entity.currentUser;
            var _closure2_slot0 = variable37;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            entity = 22;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            variable38 = entity.bind(report)();
            entity = 23;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            sizing = entity.bind(report)();
            oscard = _closure1_slot0;
            michal = 24;
            entity = tangon[michal];
            verify = oscard.bind(report)(entity);
            option = verify.useStateFromStores;
            entity = _closure1_slot7;
            golfie = new Array(1);
            golfie[0] = entity;
            entity = function() {
                entity = _closure1_slot7;
                entity = entity.keyboardOpen;
                return entity;
            };
            entity = option.bind(verify)(golfie, entity);
            golfie = 25;
            golfie = tangon[golfie];
            golfie = zuuluu.bind(report)(golfie);
            golfie = golfie.bind(report)();
            echoed = golfie.bottom;
            golfie = 26;
            golfie = tangon[golfie];
            golfie = zuuluu.bind(report)(golfie);
            option = golfie.bind(report)();
            variable36 = option.guild;
            var _closure2_slot1 = variable36;
            golfie = option.errors;
            variable39 = option.isDisabled;
            variable55 = option.pendingNickname;
            offset = option.pendingAvatar;
            sequen = option.pendingBanner;
            variable42 = option.pendingThemeColors;
            variable51 = option.pendingPronouns;
            variable46 = option.pendingBio;
            variable40 = option.pendingAvatarDecoration;
            quebec = option.pendingProfileEffectId;
            option = tangon[michal];
            romeon = oscard.bind(report)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot6;
            verify = new Array(1);
            verify[0] = option;
            option = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    entity = null;
                    zuuluu = entity != zuuluu;
                    if(!zuuluu) { _fun00008_ip = 53; continue _fun00007 }
 16:
                    report = _closure1_slot6;
                    tangon = report.getMember;
                    zuuluu = _closure2_slot1;
                    zuuluu = zuuluu.id;
                    michal = _closure2_slot0;
                    michal = michal.id;
                    entity = tangon.bind(report)(zuuluu, michal);
 53:
                    return entity;
                }
            };
            sierra = yankee.bind(romeon)(verify, option);
            var _closure2_slot2 = sierra;
            michal = tangon[michal];
            verify = oscard.bind(report)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot8;
            oscard = new Array(1);
            oscard[0] = michal;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = _closure2_slot1;
                    golfie = null;
                    michal = golfie != entity;
                    entity = null;
                    if(!michal) { _fun00010_ip = 68; continue _fun00009 }
 18:
                    report = _closure1_slot8;
                    tangon = report.getGuildMemberProfile;
                    michal = _closure2_slot0;
                    zuuluu = michal.id;
                    michal = _closure2_slot1;
                    golfie = golfie == michal;
                    michal = undefined;
                    if(golfie) { _fun00010_ip = 62; continue _fun00009 }
 53:
                    oscard = _closure2_slot1;
                    michal = oscard.id;
 62:
                    entity = tangon.bind(report)(zuuluu, michal);
 68:
                    return entity;
                }
            };
            config = option.bind(verify)(oscard, michal);
            var _closure2_slot3 = config;
            michal = 27;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = variable37.id;
            variable47 = null;
            oscard = variable47 == variable36;
            michal = undefined;
            if(oscard) { _fun00006_ip = 343; continue _fun00005 }
 338:
            michal = variable36.id;
 343:
            equals = tangon.bind(report)(zuuluu, michal);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 28;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            michal = oscard.useCustomStatusActivity;
            variable57 = michal.bind(oscard)();
            oscard = _closure1_slot1;
            michal = 29;
            michal = tangon[michal];
            michal = oscard.bind(report)(michal);
            target = michal.bind(report)(equals);
            michal = 30;
            michal = tangon[michal];
            verify = zuuluu.bind(report)(michal);
            option = verify.getPendingAvatarSrc;
            michal = {};
            yankee = variable37.id;
            michal['userId'] = yankee;
            michal['image'] = offset;
            variable43 = option.bind(verify)(michal);
            michal = 31;
            michal = tangon[michal];
            option = zuuluu.bind(report)(michal);
            michal = option.useGuildProfilePermissions;
            michal = michal.bind(option)(variable36);
            variable52 = michal.canEditNickname;
            michal = 11;
            michal = tangon[michal];
            oscard = oscard.bind(report)(michal);
            michal = oscard.canUsePremiumGuildMemberProfile;
            whisks = michal.bind(oscard)(variable37);
            michal = 32;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.canResetThemeColors;
            oscard = variable47 == config;
            michal = undefined;
            if(oscard) { _fun00006_ip = 524; continue _fun00005 }
 518:
            michal = config.themeColors;
 524:
            variable41 = zuuluu.bind(tangon)(variable42, michal);
            offset = !whisks;
            if(!offset) { _fun00006_ip = 539; continue _fun00005 }
 536:
            offset = !entity;
 539:
            michal = variable47 == sierra;
            entity = undefined;
            if(michal) { _fun00006_ip = 554; continue _fun00005 }
 548:
            entity = sierra.nick;
 554:
            michal = variable47 != entity;
            status = '';
            variable54 = status;
            if(!michal) { _fun00006_ip = 571; continue _fun00005 }
 568:
            variable54 = entity;
 571:
            michal = variable47 == equals;
            entity = undefined;
            if(michal) { _fun00006_ip = 586; continue _fun00005 }
 580:
            entity = equals.pronouns;
 586:
            michal = variable47 != entity;
            variable50 = status;
            if(!michal) { _fun00006_ip = 599; continue _fun00005 }
 596:
            variable50 = entity;
 599:
            _closure2_slot4 = variable50;
            michal = variable47 == equals;
            entity = undefined;
            if(michal) { _fun00006_ip = 618; continue _fun00005 }
 612:
            entity = equals.bio;
 618:
            michal = variable47 != entity;
            variable45 = status;
            if(!michal) { _fun00006_ip = 631; continue _fun00005 }
 628:
            variable45 = entity;
 631:
            _closure2_slot5 = variable45;
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
            _closure2_slot6 = entity;
            entity = 33;
            entity = zuuluu[entity];
            michal = michal.bind(report)(entity);
            entity = {};
            entity['user'] = variable37;
            entity['displayProfile'] = equals;
            entity['pendingThemeColors'] = variable42;
            entity = michal.bind(report)(entity);
            oscard = entity.theme;
            variable48 = entity.primaryColor;
            source = entity.secondaryColor;
            michal = _closure1_slot0;
            entity = 34;
            entity = zuuluu[entity];
            zuuluu = michal.bind(report)(entity);
            michal = zuuluu.useUserProfileColors;
            entity = {};
            entity['theme'] = oscard;
            entity['primaryColor'] = variable48;
            entity['secondaryColor'] = source;
            entity = michal.bind(zuuluu)(entity);
            record = entity.gradientFallbackBackground;
            update = entity.gradientSecondaryBackground;
            limora = entity.containerBackground;
            entity = entity.avatarBackground;
            variable59 = 0;
            michal = 0;
            if(!offset) { _fun00006_ip = 826; continue _fun00005 }
 822:
            michal = _closure1_slot9;
 826:
            papara = echoed + michal;
            variable60 = {};
            variable60['backgroundColor'] = entity;
            michal = golfie.nick;
            entity = golfie.bio;
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot3;
            tangon = tangon.bind(report)(golfie, zuuluu);
            zuuluu = variable47 == michal;
            variable56 = undefined;
            if(zuuluu) { _fun00006_ip = 875; continue _fun00005 }
 871:
            variable56 = michal[variable59];
 875:
            michal = golfie.pronouns;
            zuuluu = variable47 == michal;
            variable53 = undefined;
            if(zuuluu) { _fun00006_ip = 894; continue _fun00005 }
 890:
            variable53 = michal[variable59];
 894:
            michal = variable47 == entity;
            variable49 = undefined;
            if(michal) { _fun00006_ip = 907; continue _fun00005 }
 903:
            variable49 = entity[variable59];
 907:
            michal = global;
            zuuluu = michal.parseInt;
            entity = variable47 == golfie;
            option = undefined;
            if(entity) { _fun00006_ip = 929; continue _fun00005 }
 924:
            option = golfie.code;
 929:
            verify = variable47 != option;
            entity = status;
            if(!verify) { _fun00006_ip = 942; continue _fun00005 }
 939:
            entity = option;
 942:
            option = zuuluu.bind(report)(entity);
            zuuluu = 200005;
            entity = null;
            if(!(zuuluu === option)) { _fun00006_ip = 976; continue _fun00005 }
 959:
            option = variable47 == golfie;
            zuuluu = undefined;
            if(option) { _fun00006_ip = 973; continue _fun00005 }
 968:
            zuuluu = golfie.message;
 973:
            entity = zuuluu;
 976:
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            michal = michal.bind(zuuluu)(tangon);
            michal = michal.length;
            michal = michal > variable59;
            variable58 = null;
            if(!michal) { _fun00006_ip = 1088; continue _fun00005 }
 1006:
            michal = variable47 == variable49;
            variable58 = null;
            if(!michal) { _fun00006_ip = 1088; continue _fun00005 }
 1015:
            michal = variable47 == variable56;
            variable58 = null;
            if(!michal) { _fun00006_ip = 1088; continue _fun00005 }
 1024:
            if(!(variable47 == entity)) { _fun00006_ip = 1085; continue _fun00005 }
 1028:
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
 1085:
            variable58 = entity;
 1088:
            michal = variable47 == variable36;
            entity = null;
            if(michal) { _fun00006_ip = 2948; continue _fun00005 }
 1100:
            tangon = _closure1_slot18;
            foxtra = _closure1_slot0;
            variable62 = _closure1_slot2;
            michal = 36;
            michal = variable62[michal];
            michal = foxtra.bind(report)(michal);
            zuuluu = michal.ThemeContextProvider;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = variable48;
            michal['secondaryColor'] = source;
            option = _closure1_slot19;
            golfie = _closure1_slot5;
            oscard = {};
            yankee = sizing.container;
            verify = new Array(2);
            verify[0] = yankee;
            yankee = {};
            yankee['backgroundColor'] = update;
            verify[1] = yankee;
            oscard['style'] = verify;
            verify = 37;
            verify = variable62[verify];
            verify = foxtra.bind(report)(verify);
            yankee = verify.KeyboardAwareScrollView;
            verify = {};
            romeon = 38;
            romeon = variable62[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = foxtra.isAndroid;
            romeon = romeon.bind(foxtra)();
            romeon = !romeon;
            verify['enableOnAndroid'] = romeon;
            variable44 = true;
            verify['enableAutomaticScroll'] = variable44;
            romeon = _closure1_slot17;
            verify['keyboardOpeningTime'] = romeon;
            variable61 = false;
            verify['scrollsToTop'] = variable61;
            foxtra = _closure1_slot18;
            romeon = {};
            output = sizing.bounceOffset;
            romeon['style'] = output;
            foxtra = foxtra.bind(report)(golfie, romeon);
            romeon = new Array(2);
            romeon[0] = foxtra;
            cntext = _closure1_slot1;
            vacuum = 39;
            foxtra = variable62[vacuum];
            output = cntext.bind(report)(foxtra);
            foxtra = {};
            foxtra['fallbackBackground'] = record;
            foxtra['primaryColor'] = variable48;
            foxtra['secondaryColor'] = source;
            result = {};
            result['backgroundColor'] = update;
            foxtra['containerStyle'] = result;
            ctrled = _closure1_slot18;
            update = _closure1_slot21;
            result = {};
            result['user'] = variable37;
            result['displayProfile'] = equals;
            result['guildMember'] = sierra;
            result['guildMemberProfile'] = config;
            result['pendingAvatarSrc'] = variable43;
            result['pendingBanner'] = sequen;
            result['pendingThemeColors'] = variable42;
            result['disabled'] = variable39;
            update = ctrled.bind(report)(update, result);
            result = new Array(2);
            result[0] = update;
            update = {};
            sequen = _closure1_slot18;
            ctrled = {};
            sierra = variable38.avatarBackground;
            config = new Array(4);
            config[0] = sierra;
            sierra = variable38.avatarPosition;
            config[1] = sierra;
            sierra = sizing.avatarContainer;
            config[2] = sierra;
            config[3] = variable60;
            ctrled['style'] = config;
            sierra = _closure1_slot18;
            config = 40;
            config = variable62[config];
            cntext = cntext.bind(report)(config);
            config = {};
            variable62 = variable37.id;
            config['userId'] = variable62;
            variable62 = variable39;
            if(variable39) { _fun00006_ip = 1478; continue _fun00005 }
 1475:
            variable62 = !whisks;
 1478:
            config['disabled'] = variable62;
            config['disableStatus'] = variable61;
            variable62 = variable47 == variable36;
            variable61 = undefined;
            if(variable62) { _fun00006_ip = 1501; continue _fun00005 }
 1496:
            variable61 = variable36.id;
 1501:
            config['guildId'] = variable61;
            config['statusStyle'] = variable60;
            config = sierra.bind(report)(cntext, config);
            ctrled['children'] = config;
            sequen = sequen.bind(report)(golfie, ctrled);
            ctrled = new Array(2);
            ctrled[0] = sequen;
            config = _closure1_slot19;
            cntext = _closure1_slot1;
            sierra = _closure1_slot2;
            vacuum = sierra[vacuum];
            sequen = cntext.bind(report)(vacuum);
            vacuum = {};
            vacuum['fallbackBackground'] = record;
            vacuum['primaryColor'] = variable48;
            vacuum['secondaryColor'] = source;
            record = variable38.profileContent;
            source = new Array(2);
            source[0] = record;
            record = {};
            record['paddingTop'] = variable59;
            record['paddingBottom'] = papara;
            source[1] = record;
            vacuum['containerStyle'] = source;
            papara = _closure1_slot18;
            source = 41;
            source = sierra[source];
            record = cntext.bind(report)(source);
            source = {};
            source['customStatusActivity'] = variable57;
            variable48 = variable47 != variable48;
            source['hasCustomProfileTheme'] = variable48;
            variable48 = variable38.customStatusBubble;
            source['style'] = variable48;
            variable38 = variable38.emojiOnlyCustomStatusBubble;
            source['emojiOnlyStyle'] = variable38;
            source['editEnabled'] = variable44;
            source = papara.bind(report)(record, source);
            record = new Array(3);
            record[0] = source;
            papara = _closure1_slot18;
            source = 42;
            source = sierra[source];
            cntext = cntext.bind(report)(source);
            source = {};
            source['user'] = variable37;
            sierra = variable54;
            if(!(variable47 != variable55)) { _fun00006_ip = 1711; continue _fun00005 }
 1708:
            sierra = variable55;
 1711:
            source['displayName'] = sierra;
            sierra = variable50;
            if(!(variable47 != variable51)) { _fun00006_ip = 1725; continue _fun00005 }
 1722:
            sierra = variable51;
 1725:
            source['pronouns'] = sierra;
            source['badges'] = target;
            source['badgeContainerBackground'] = limora;
            source = papara.bind(report)(cntext, source);
            record[1] = source;
            target = _closure1_slot19;
            papara = _closure1_slot5;
            cntext = {};
            sierra = sizing.formContainer;
            source = new Array(2);
            source[0] = sierra;
            sierra = {};
            sierra['backgroundColor'] = limora;
            limora = 20;
            sierra['paddingBottom'] = limora;
            source[1] = sierra;
            cntext['style'] = source;
            sierra = variable47 != variable58;
            source = null;
            if(!sierra) { _fun00006_ip = 1894; continue _fun00005 }
 1805:
            source = null;
            if(!(status !== variable58)) { _fun00006_ip = 1894; continue _fun00005 }
 1811:
            limora = _closure1_slot18;
            sierra = _closure1_slot5;
            status = {};
            variable38 = sizing.errorContainer;
            status['style'] = variable38;
            variable57 = _closure1_slot18;
            variable48 = _closure1_slot0;
            variable59 = _closure1_slot2;
            variable38 = 35;
            variable38 = variable59[variable38];
            variable38 = variable48.bind(report)(variable38);
            variable48 = variable38.Text;
            variable38 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable38['children'] = variable58;
            variable38 = variable57.bind(report)(variable48, variable38);
            status['children'] = variable38;
            source = limora.bind(report)(sierra, status);
 1894:
            status = new Array(7);
            status[0] = source;
            variable48 = _closure1_slot18;
            sierra = _closure1_slot1;
            variable57 = _closure1_slot2;
            limora = 43;
            source = variable57[limora];
            variable38 = sierra.bind(report)(source);
            sierra = {};
            variable60 = _closure1_slot0;
            source = 19;
            variable58 = variable57[source];
            variable58 = variable60.bind(report)(variable58);
            variable59 = variable58.intl;
            variable58 = variable59.string;
            variable57 = variable57[source];
            variable57 = variable60.bind(report)(variable57);
            variable57 = variable57.t;
            variable57 = variable57.me1lRk;
            variable57 = variable58.bind(variable59)(variable57);
            sierra['label'] = variable57;
            sierra['errorMessage'] = variable56;
            if(!(variable47 != variable55)) { _fun00006_ip = 1997; continue _fun00005 }
 1994:
            variable54 = variable55;
 1997:
            sierra['value'] = variable54;
            variable54 = function(argFoo) { // Original name: onChange
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    michal = '';
                    if(!(michal === entity)) { _fun00012_ip = 48; continue _fun00011 }
 11:
                    michal = _closure2_slot2;
                    zuuluu = null;
                    oscard = zuuluu == michal;
                    michal = undefined;
                    if(oscard) { _fun00012_ip = 39; continue _fun00011 }
 29:
                    tangon = _closure2_slot2;
                    michal = tangon.nick;
 39:
                    michal = zuuluu == michal;
                    report = undefined;
                    if(michal) { _fun00012_ip = 51; continue _fun00011 }
 48:
                    report = entity;
 51:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 32;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.setNewPendingNickname;
                    golfie = _closure2_slot2;
                    michal = null;
                    golfie = michal == golfie;
                    michal = undefined;
                    if(golfie) { _fun00012_ip = 110; continue _fun00011 }
 100:
                    oscard = _closure2_slot2;
                    michal = oscard.nick;
 110:
                    michal = zuuluu.bind(tangon)(report, michal);
                    return entity;
                }
            };
            sierra['onChange'] = variable54;
            variable55 = _closure1_slot1;
            variable56 = _closure1_slot2;
            variable54 = 44;
            variable54 = variable56[variable54];
            variable55 = variable55.bind(report)(variable54);
            variable54 = variable55.getName;
            variable54 = variable54.bind(variable55)(variable37);
            sierra['placeholder'] = variable54;
            variable54 = _closure1_slot13;
            sierra['maxLength'] = variable54;
            variable52 = !variable52;
            if(variable52) { _fun00006_ip = 2067; continue _fun00005 }
 2064:
            variable52 = variable39;
 2067:
            sierra['disabled'] = variable52;
            sierra = variable48.bind(report)(variable38, sierra);
            status[1] = sierra;
            variable48 = _closure1_slot18;
            variable38 = _closure1_slot1;
            variable52 = _closure1_slot2;
            sierra = variable52[limora];
            variable38 = variable38.bind(report)(sierra);
            sierra = {};
            variable55 = _closure1_slot0;
            variable54 = variable52[source];
            variable54 = variable55.bind(report)(variable54);
            variable57 = variable54.intl;
            variable56 = variable57.string;
            variable54 = variable52[source];
            variable54 = variable55.bind(report)(variable54);
            variable54 = variable54.t;
            variable54 = variable54.+T3RIy;
            variable54 = variable56.bind(variable57)(variable54);
            sierra['label'] = variable54;
            sierra['errorMessage'] = variable53;
            variable53 = variable52[source];
            variable53 = variable55.bind(report)(variable53);
            variable54 = variable53.intl;
            variable53 = variable54.string;
            variable52 = variable52[source];
            variable52 = variable55.bind(report)(variable52);
            variable52 = variable52.t;
            variable52 = variable52.NZqtIi;
            variable52 = variable53.bind(variable54)(variable52);
            sierra['description'] = variable52;
            if(!(variable47 != variable51)) { _fun00006_ip = 2218; continue _fun00005 }
 2215:
            variable50 = variable51;
 2218:
            sierra['value'] = variable50;
            variable50 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 32;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingGuildIdentityPronouns;
                michal = _closure2_slot4;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            sierra['onChange'] = variable50;
            variable50 = _closure1_slot14;
            sierra['maxLength'] = variable50;
            sierra['disabled'] = variable39;
            sierra = variable48.bind(report)(variable38, sierra);
            status[2] = sierra;
            sierra = null;
            if(!whisks) { _fun00006_ip = 2450; continue _fun00005 }
 2265:
            variable38 = _closure1_slot18;
            whisks = _closure1_slot1;
            variable48 = _closure1_slot2;
            limora = variable48[limora];
            whisks = whisks.bind(report)(limora);
            limora = {};
            variable51 = _closure1_slot0;
            variable50 = variable48[source];
            variable50 = variable51.bind(report)(variable50);
            variable53 = variable50.intl;
            variable52 = variable53.string;
            variable50 = variable48[source];
            variable50 = variable51.bind(report)(variable50);
            variable50 = variable50.t;
            variable50 = variable50.NepzEx;
            variable50 = variable52.bind(variable53)(variable50);
            limora['label'] = variable50;
            limora['errorMessage'] = variable49;
            variable49 = variable48[source];
            variable49 = variable51.bind(report)(variable49);
            variable50 = variable49.intl;
            variable49 = variable50.string;
            variable48 = variable48[source];
            variable48 = variable51.bind(report)(variable48);
            variable48 = variable48.t;
            variable48 = variable48.gYETnp;
            variable48 = variable49.bind(variable50)(variable48);
            limora['description'] = variable48;
            if(!(variable47 != variable46)) { _fun00006_ip = 2402; continue _fun00005 }
 2399:
            variable45 = variable46;
 2402:
            limora['value'] = variable45;
            variable45 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 32;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingGuildIdentityBio;
                michal = _closure2_slot5;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            limora['onChange'] = variable45;
            variable45 = _closure1_slot12;
            limora['maxLength'] = variable45;
            variable45 = 5;
            limora['numberOfLines'] = variable45;
            limora['multiline'] = variable44;
            limora['disabled'] = variable39;
            sierra = variable38.bind(report)(whisks, limora);
 2450:
            status[3] = sierra;
            variable39 = _closure1_slot18;
            limora = _closure1_slot1;
            variable38 = _closure1_slot2;
            sierra = 45;
            sierra = variable38[sierra];
            whisks = limora.bind(report)(sierra);
            sierra = {};
            sierra['pendingAvatarSrc'] = variable43;
            sierra['pendingThemeColors'] = variable42;
            sierra['user'] = variable37;
            variable42 = variable36.id;
            sierra['guildId'] = variable42;
            variable42 = function(argFoo) { // Original name: onProfileThemeColorsChanged
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 32;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = report.setNewPendingGuildIdentityThemeColors;
                    oscard = _closure2_slot3;
                    zuuluu = null;
                    oscard = zuuluu == oscard;
                    zuuluu = undefined;
                    if(oscard) { _fun00014_ip = 59; continue _fun00013 }
 49:
                    michal = _closure2_slot3;
                    zuuluu = michal.themeColors;
 59:
                    michal = argFoo;
                    michal = tangon.bind(report)(michal, zuuluu);
                    return entity;
                }
            };
            sierra['onProfileThemeColorsChanged'] = variable42;
            sierra['showResetMenu'] = variable41;
            sierra = variable39.bind(report)(whisks, sierra);
            status[4] = sierra;
            variable39 = _closure1_slot18;
            sierra = 46;
            sierra = variable38[sierra];
            whisks = limora.bind(report)(sierra);
            sierra = {};
            sierra['user'] = variable37;
            variable41 = variable36.id;
            sierra['guildId'] = variable41;
            sierra['pendingAvatarDecoration'] = variable40;
            sierra = variable39.bind(report)(whisks, sierra);
            status[5] = sierra;
            whisks = _closure1_slot18;
            sierra = 47;
            sierra = variable38[sierra];
            limora = limora.bind(report)(sierra);
            sierra = {};
            sierra['user'] = variable37;
            variable36 = variable36.id;
            sierra['guildId'] = variable36;
            sierra['pendingProfileEffectId'] = quebec;
            sierra['displayProfile'] = equals;
            sierra = whisks.bind(report)(limora, sierra);
            status[6] = sierra;
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
            if(!offset) { _fun00006_ip = 2924; continue _fun00005 }
 2707:
            foxtra = _closure1_slot18;
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
                yankee = _closure1_slot20;
                romeon = oscard;
                offset = copyDataProperties(romeon, yankee);
                verify = _closure1_slot10;
                offset = verify.BUTTON_CTA;
                verify = 'object';
                oscard[verify] = offset;
                michal['analyticsLocation'] = oscard;
                oscard = _closure2_slot6;
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
            sizing = _closure1_slot18;
            backup = 35;
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
 2924:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 2948:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
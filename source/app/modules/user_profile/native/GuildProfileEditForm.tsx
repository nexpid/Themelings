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
    var _closure1_slot22 = entity;
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
    verify = tangon.Fragment;
    var _closure1_slot19 = verify;
    tangon = tangon.jsxs;
    var _closure1_slot20 = tangon;
    tangon = {};
    option = option.USER_SETTINGS;
    tangon['page'] = option;
    golfie = golfie.SETTINGS_CUSTOMIZE_PROFILE;
    tangon['section'] = golfie;
    var _closure1_slot21 = tangon;
    tangon = 53;
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
            verify = oscard.bind(report)(golfie);
            option = verify.useShouldEnableMobilePerGuildCollectiblesEdit;
            golfie = 'GuildProfileEditForm';
            sierra = option.bind(verify)(golfie);
            golfie = 27;
            golfie = tangon[golfie];
            golfie = zuuluu.bind(report)(golfie);
            option = golfie.bind(report)();
            variable41 = option.guild;
            var _closure2_slot1 = variable41;
            golfie = option.errors;
            variable43 = option.isDisabled;
            variable56 = option.pendingNickname;
            offset = option.pendingAvatar;
            sequen = option.pendingBanner;
            variable36 = option.pendingThemeColors;
            variable52 = option.pendingPronouns;
            variable47 = option.pendingBio;
            variable44 = option.pendingAvatarDecoration;
            variable40 = option.pendingProfileEffectId;
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
            limora = yankee.bind(romeon)(verify, option);
            var _closure2_slot2 = limora;
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
            michal = 28;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = variable42.id;
            variable48 = null;
            oscard = variable48 == variable41;
            michal = undefined;
            if(oscard) { _fun00006_ip = 372; continue _fun00005 }
 367:
            michal = variable41.id;
 372:
            variable39 = tangon.bind(report)(zuuluu, michal);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 29;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            michal = oscard.useCustomStatusActivity;
            variable58 = michal.bind(oscard)();
            oscard = _closure1_slot1;
            michal = 30;
            michal = tangon[michal];
            michal = oscard.bind(report)(michal);
            target = michal.bind(report)(variable39);
            michal = 31;
            michal = tangon[michal];
            verify = zuuluu.bind(report)(michal);
            option = verify.getPendingAvatarSrc;
            michal = {};
            yankee = variable42.id;
            michal['userId'] = yankee;
            michal['image'] = offset;
            variable37 = option.bind(verify)(michal);
            michal = 32;
            michal = tangon[michal];
            option = zuuluu.bind(report)(michal);
            michal = option.useGuildProfilePermissions;
            michal = michal.bind(option)(variable41);
            variable53 = michal.canEditNickname;
            michal = 11;
            michal = tangon[michal];
            oscard = oscard.bind(report)(michal);
            michal = oscard.canUsePremiumGuildMemberProfile;
            equals = michal.bind(oscard)(variable42);
            michal = 33;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.canResetThemeColors;
            oscard = variable48 == config;
            michal = undefined;
            if(oscard) { _fun00006_ip = 553; continue _fun00005 }
 547:
            michal = config.themeColors;
 553:
            quebec = zuuluu.bind(tangon)(variable36, michal);
            offset = !equals;
            if(!offset) { _fun00006_ip = 568; continue _fun00005 }
 565:
            offset = !entity;
 568:
            michal = variable48 == limora;
            entity = undefined;
            if(michal) { _fun00006_ip = 583; continue _fun00005 }
 577:
            entity = limora.nick;
 583:
            michal = variable48 != entity;
            status = '';
            variable55 = status;
            if(!michal) { _fun00006_ip = 600; continue _fun00005 }
 597:
            variable55 = entity;
 600:
            michal = variable48 == variable39;
            entity = undefined;
            if(michal) { _fun00006_ip = 615; continue _fun00005 }
 609:
            entity = variable39.pronouns;
 615:
            michal = variable48 != entity;
            variable51 = status;
            if(!michal) { _fun00006_ip = 628; continue _fun00005 }
 625:
            variable51 = entity;
 628:
            _closure2_slot4 = variable51;
            michal = variable48 == variable39;
            entity = undefined;
            if(michal) { _fun00006_ip = 647; continue _fun00005 }
 641:
            entity = variable39.bio;
 647:
            michal = variable48 != entity;
            variable46 = status;
            if(!michal) { _fun00006_ip = 660; continue _fun00005 }
 657:
            variable46 = entity;
 660:
            _closure2_slot5 = variable46;
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
            entity = 34;
            entity = zuuluu[entity];
            michal = michal.bind(report)(entity);
            entity = {};
            entity['user'] = variable42;
            entity['displayProfile'] = variable39;
            entity['pendingThemeColors'] = variable36;
            entity = michal.bind(report)(entity);
            oscard = entity.theme;
            variable49 = entity.primaryColor;
            source = entity.secondaryColor;
            michal = _closure1_slot0;
            entity = 35;
            entity = zuuluu[entity];
            zuuluu = michal.bind(report)(entity);
            michal = zuuluu.useUserProfileColors;
            entity = {};
            entity['theme'] = oscard;
            entity['primaryColor'] = variable49;
            entity['secondaryColor'] = source;
            entity = michal.bind(zuuluu)(entity);
            record = entity.gradientFallbackBackground;
            update = entity.gradientSecondaryBackground;
            whisks = entity.containerBackground;
            entity = entity.avatarBackground;
            variable60 = 0;
            michal = 0;
            if(!offset) { _fun00006_ip = 853; continue _fun00005 }
 849:
            michal = _closure1_slot9;
 853:
            papara = echoed + michal;
            variable61 = {};
            variable61['backgroundColor'] = entity;
            michal = golfie.nick;
            entity = golfie.bio;
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot3;
            tangon = tangon.bind(report)(golfie, zuuluu);
            zuuluu = variable48 == michal;
            variable57 = undefined;
            if(zuuluu) { _fun00006_ip = 902; continue _fun00005 }
 898:
            variable57 = michal[variable60];
 902:
            michal = golfie.pronouns;
            zuuluu = variable48 == michal;
            variable54 = undefined;
            if(zuuluu) { _fun00006_ip = 921; continue _fun00005 }
 917:
            variable54 = michal[variable60];
 921:
            michal = variable48 == entity;
            variable50 = undefined;
            if(michal) { _fun00006_ip = 934; continue _fun00005 }
 930:
            variable50 = entity[variable60];
 934:
            michal = global;
            zuuluu = michal.parseInt;
            entity = variable48 == golfie;
            option = undefined;
            if(entity) { _fun00006_ip = 956; continue _fun00005 }
 951:
            option = golfie.code;
 956:
            verify = variable48 != option;
            entity = status;
            if(!verify) { _fun00006_ip = 969; continue _fun00005 }
 966:
            entity = option;
 969:
            option = zuuluu.bind(report)(entity);
            zuuluu = 200005;
            entity = null;
            if(!(zuuluu === option)) { _fun00006_ip = 1003; continue _fun00005 }
 986:
            option = variable48 == golfie;
            zuuluu = undefined;
            if(option) { _fun00006_ip = 1000; continue _fun00005 }
 995:
            zuuluu = golfie.message;
 1000:
            entity = zuuluu;
 1003:
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            michal = michal.bind(zuuluu)(tangon);
            michal = michal.length;
            michal = michal > variable60;
            variable59 = null;
            if(!michal) { _fun00006_ip = 1115; continue _fun00005 }
 1033:
            michal = variable48 == variable50;
            variable59 = null;
            if(!michal) { _fun00006_ip = 1115; continue _fun00005 }
 1042:
            michal = variable48 == variable57;
            variable59 = null;
            if(!michal) { _fun00006_ip = 1115; continue _fun00005 }
 1051:
            if(!(variable48 == entity)) { _fun00006_ip = 1112; continue _fun00005 }
 1055:
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
 1112:
            variable59 = entity;
 1115:
            michal = variable48 == variable41;
            entity = null;
            if(michal) { _fun00006_ip = 3016; continue _fun00005 }
 1127:
            tangon = _closure1_slot18;
            foxtra = _closure1_slot0;
            variable63 = _closure1_slot2;
            michal = 37;
            michal = variable63[michal];
            michal = foxtra.bind(report)(michal);
            zuuluu = michal.ThemeContextProvider;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = variable49;
            michal['secondaryColor'] = source;
            option = _closure1_slot20;
            golfie = _closure1_slot5;
            oscard = {};
            yankee = sizing.container;
            verify = new Array(2);
            verify[0] = yankee;
            yankee = {};
            yankee['backgroundColor'] = update;
            verify[1] = yankee;
            oscard['style'] = verify;
            verify = 38;
            verify = variable63[verify];
            verify = foxtra.bind(report)(verify);
            yankee = verify.KeyboardAwareScrollView;
            verify = {};
            romeon = 39;
            romeon = variable63[romeon];
            foxtra = foxtra.bind(report)(romeon);
            romeon = foxtra.isAndroid;
            romeon = romeon.bind(foxtra)();
            romeon = !romeon;
            verify['enableOnAndroid'] = romeon;
            variable45 = true;
            verify['enableAutomaticScroll'] = variable45;
            romeon = _closure1_slot17;
            verify['keyboardOpeningTime'] = romeon;
            variable62 = false;
            verify['scrollsToTop'] = variable62;
            foxtra = _closure1_slot18;
            romeon = {};
            output = sizing.bounceOffset;
            romeon['style'] = output;
            foxtra = foxtra.bind(report)(golfie, romeon);
            romeon = new Array(2);
            romeon[0] = foxtra;
            cntext = _closure1_slot1;
            vacuum = 40;
            foxtra = variable63[vacuum];
            output = cntext.bind(report)(foxtra);
            foxtra = {};
            foxtra['fallbackBackground'] = record;
            foxtra['primaryColor'] = variable49;
            foxtra['secondaryColor'] = source;
            result = {};
            result['backgroundColor'] = update;
            foxtra['containerStyle'] = result;
            ctrled = _closure1_slot18;
            update = _closure1_slot22;
            result = {};
            result['user'] = variable42;
            result['displayProfile'] = variable39;
            result['guildMember'] = limora;
            result['guildMemberProfile'] = config;
            result['pendingAvatarSrc'] = variable37;
            result['pendingBanner'] = sequen;
            result['pendingThemeColors'] = variable36;
            result['disabled'] = variable43;
            update = ctrled.bind(report)(update, result);
            result = new Array(2);
            result[0] = update;
            update = {};
            sequen = _closure1_slot18;
            ctrled = {};
            limora = variable38.avatarBackground;
            config = new Array(4);
            config[0] = limora;
            limora = variable38.avatarPosition;
            config[1] = limora;
            limora = sizing.avatarContainer;
            config[2] = limora;
            config[3] = variable61;
            ctrled['style'] = config;
            limora = _closure1_slot18;
            config = 41;
            config = variable63[config];
            cntext = cntext.bind(report)(config);
            config = {};
            variable63 = variable42.id;
            config['userId'] = variable63;
            variable63 = variable43;
            if(variable43) { _fun00006_ip = 1504; continue _fun00005 }
 1501:
            variable63 = !equals;
 1504:
            config['disabled'] = variable63;
            config['disableStatus'] = variable62;
            variable63 = variable48 == variable41;
            variable62 = undefined;
            if(variable63) { _fun00006_ip = 1527; continue _fun00005 }
 1522:
            variable62 = variable41.id;
 1527:
            config['guildId'] = variable62;
            config['statusStyle'] = variable61;
            config = limora.bind(report)(cntext, config);
            ctrled['children'] = config;
            sequen = sequen.bind(report)(golfie, ctrled);
            ctrled = new Array(2);
            ctrled[0] = sequen;
            config = _closure1_slot20;
            cntext = _closure1_slot1;
            limora = _closure1_slot2;
            vacuum = limora[vacuum];
            sequen = cntext.bind(report)(vacuum);
            vacuum = {};
            vacuum['fallbackBackground'] = record;
            vacuum['primaryColor'] = variable49;
            vacuum['secondaryColor'] = source;
            record = variable38.profileContent;
            source = new Array(2);
            source[0] = record;
            record = {};
            record['paddingTop'] = variable60;
            record['paddingBottom'] = papara;
            source[1] = record;
            vacuum['containerStyle'] = source;
            papara = _closure1_slot18;
            source = 42;
            source = limora[source];
            record = cntext.bind(report)(source);
            source = {};
            source['customStatusActivity'] = variable58;
            variable49 = variable48 != variable49;
            source['hasCustomProfileTheme'] = variable49;
            variable49 = variable38.customStatusBubble;
            source['style'] = variable49;
            variable38 = variable38.emojiOnlyCustomStatusBubble;
            source['emojiOnlyStyle'] = variable38;
            source['editEnabled'] = variable45;
            source = papara.bind(report)(record, source);
            record = new Array(3);
            record[0] = source;
            papara = _closure1_slot18;
            source = 43;
            source = limora[source];
            cntext = cntext.bind(report)(source);
            source = {};
            source['user'] = variable42;
            limora = variable55;
            if(!(variable48 != variable56)) { _fun00006_ip = 1737; continue _fun00005 }
 1734:
            limora = variable56;
 1737:
            source['displayName'] = limora;
            limora = variable51;
            if(!(variable48 != variable52)) { _fun00006_ip = 1751; continue _fun00005 }
 1748:
            limora = variable52;
 1751:
            source['pronouns'] = limora;
            source['badges'] = target;
            source['badgeContainerBackground'] = whisks;
            source = papara.bind(report)(cntext, source);
            record[1] = source;
            target = _closure1_slot20;
            papara = _closure1_slot5;
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
            limora = variable48 != variable59;
            source = null;
            if(!limora) { _fun00006_ip = 1920; continue _fun00005 }
 1831:
            source = null;
            if(!(status !== variable59)) { _fun00006_ip = 1920; continue _fun00005 }
 1837:
            whisks = _closure1_slot18;
            limora = _closure1_slot5;
            status = {};
            variable38 = sizing.errorContainer;
            status['style'] = variable38;
            variable58 = _closure1_slot18;
            variable49 = _closure1_slot0;
            variable60 = _closure1_slot2;
            variable38 = 36;
            variable38 = variable60[variable38];
            variable38 = variable49.bind(report)(variable38);
            variable49 = variable38.Text;
            variable38 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable38['children'] = variable59;
            variable38 = variable58.bind(report)(variable49, variable38);
            status['children'] = variable38;
            source = whisks.bind(report)(limora, status);
 1920:
            status = new Array(6);
            status[0] = source;
            variable49 = _closure1_slot18;
            limora = _closure1_slot1;
            variable58 = _closure1_slot2;
            whisks = 44;
            source = variable58[whisks];
            variable38 = limora.bind(report)(source);
            limora = {};
            variable61 = _closure1_slot0;
            source = 19;
            variable59 = variable58[source];
            variable59 = variable61.bind(report)(variable59);
            variable60 = variable59.intl;
            variable59 = variable60.string;
            variable58 = variable58[source];
            variable58 = variable61.bind(report)(variable58);
            variable58 = variable58.t;
            variable58 = variable58.me1lRk;
            variable58 = variable59.bind(variable60)(variable58);
            limora['label'] = variable58;
            limora['errorMessage'] = variable57;
            if(!(variable48 != variable56)) { _fun00006_ip = 2023; continue _fun00005 }
 2020:
            variable55 = variable56;
 2023:
            limora['value'] = variable55;
            variable55 = function(argFoo) { // Original name: onChange
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
                    entity = 33;
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
            limora['onChange'] = variable55;
            variable56 = _closure1_slot1;
            variable57 = _closure1_slot2;
            variable55 = 45;
            variable55 = variable57[variable55];
            variable56 = variable56.bind(report)(variable55);
            variable55 = variable56.getName;
            variable55 = variable55.bind(variable56)(variable42);
            limora['placeholder'] = variable55;
            variable55 = _closure1_slot13;
            limora['maxLength'] = variable55;
            variable53 = !variable53;
            if(variable53) { _fun00006_ip = 2093; continue _fun00005 }
 2090:
            variable53 = variable43;
 2093:
            limora['disabled'] = variable53;
            limora = variable49.bind(report)(variable38, limora);
            status[1] = limora;
            variable49 = _closure1_slot18;
            variable38 = _closure1_slot1;
            variable53 = _closure1_slot2;
            limora = variable53[whisks];
            variable38 = variable38.bind(report)(limora);
            limora = {};
            variable56 = _closure1_slot0;
            variable55 = variable53[source];
            variable55 = variable56.bind(report)(variable55);
            variable58 = variable55.intl;
            variable57 = variable58.string;
            variable55 = variable53[source];
            variable55 = variable56.bind(report)(variable55);
            variable55 = variable55.t;
            variable55 = variable55.+T3RIy;
            variable55 = variable57.bind(variable58)(variable55);
            limora['label'] = variable55;
            limora['errorMessage'] = variable54;
            variable54 = variable53[source];
            variable54 = variable56.bind(report)(variable54);
            variable55 = variable54.intl;
            variable54 = variable55.string;
            variable53 = variable53[source];
            variable53 = variable56.bind(report)(variable53);
            variable53 = variable53.t;
            variable53 = variable53.NZqtIi;
            variable53 = variable54.bind(variable55)(variable53);
            limora['description'] = variable53;
            if(!(variable48 != variable52)) { _fun00006_ip = 2244; continue _fun00005 }
 2241:
            variable51 = variable52;
 2244:
            limora['value'] = variable51;
            variable51 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 33;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingGuildIdentityPronouns;
                michal = _closure2_slot4;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            limora['onChange'] = variable51;
            variable51 = _closure1_slot14;
            limora['maxLength'] = variable51;
            limora['disabled'] = variable43;
            limora = variable49.bind(report)(variable38, limora);
            status[2] = limora;
            limora = null;
            if(!equals) { _fun00006_ip = 2476; continue _fun00005 }
 2291:
            variable38 = _closure1_slot18;
            equals = _closure1_slot1;
            variable49 = _closure1_slot2;
            whisks = variable49[whisks];
            equals = equals.bind(report)(whisks);
            whisks = {};
            variable52 = _closure1_slot0;
            variable51 = variable49[source];
            variable51 = variable52.bind(report)(variable51);
            variable54 = variable51.intl;
            variable53 = variable54.string;
            variable51 = variable49[source];
            variable51 = variable52.bind(report)(variable51);
            variable51 = variable51.t;
            variable51 = variable51.NepzEx;
            variable51 = variable53.bind(variable54)(variable51);
            whisks['label'] = variable51;
            whisks['errorMessage'] = variable50;
            variable50 = variable49[source];
            variable50 = variable52.bind(report)(variable50);
            variable51 = variable50.intl;
            variable50 = variable51.string;
            variable49 = variable49[source];
            variable49 = variable52.bind(report)(variable49);
            variable49 = variable49.t;
            variable49 = variable49.gYETnp;
            variable49 = variable50.bind(variable51)(variable49);
            whisks['description'] = variable49;
            if(!(variable48 != variable47)) { _fun00006_ip = 2428; continue _fun00005 }
 2425:
            variable46 = variable47;
 2428:
            whisks['value'] = variable46;
            variable46 = function(argFoo) { // Original name: onChange
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 33;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setNewPendingGuildIdentityBio;
                michal = _closure2_slot5;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            whisks['onChange'] = variable46;
            variable46 = _closure1_slot12;
            whisks['maxLength'] = variable46;
            variable46 = 5;
            whisks['numberOfLines'] = variable46;
            whisks['multiline'] = variable45;
            whisks['disabled'] = variable43;
            limora = variable38.bind(report)(equals, whisks);
 2476:
            status[3] = limora;
            equals = _closure1_slot18;
            whisks = _closure1_slot1;
            variable38 = _closure1_slot2;
            limora = 46;
            limora = variable38[limora];
            whisks = whisks.bind(report)(limora);
            limora = {};
            limora['pendingAvatarSrc'] = variable37;
            limora['pendingThemeColors'] = variable36;
            limora['user'] = variable42;
            variable36 = variable41.id;
            limora['guildId'] = variable36;
            variable36 = function(argFoo) { // Original name: onProfileThemeColorsChanged
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 33;
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
            limora['onProfileThemeColorsChanged'] = variable36;
            limora['showResetMenu'] = quebec;
            limora = equals.bind(report)(whisks, limora);
            status[4] = limora;
            if(!sierra) { _fun00006_ip = 2691; continue _fun00005 }
 2562:
            equals = _closure1_slot20;
            whisks = _closure1_slot19;
            limora = {};
            variable38 = _closure1_slot18;
            variable37 = _closure1_slot1;
            variable43 = _closure1_slot2;
            quebec = 47;
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
            variable38 = _closure1_slot18;
            variable36 = 48;
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
 2691:
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
            if(!offset) { _fun00006_ip = 2992; continue _fun00005 }
 2775:
            foxtra = _closure1_slot18;
            romeon = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 49;
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
                entity = 50;
                michal = option[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.pushLazy;
                golfie = _closure1_slot0;
                michal = 17;
                michal = option[michal];
                oscard = golfie.bind(entity)(michal);
                michal = 51;
                zuuluu = option[michal];
                michal = option.paths;
                zuuluu = oscard.bind(entity)(zuuluu, michal);
                michal = {};
                oscard = {};
                yankee = _closure1_slot21;
                romeon = oscard;
                offset = copyDataProperties(romeon, yankee);
                verify = _closure1_slot10;
                offset = verify.BUTTON_CTA;
                verify = 'object';
                oscard[verify] = offset;
                michal['analyticsLocation'] = oscard;
                oscard = _closure2_slot6;
                michal['analyticsLocations'] = oscard;
                oscard = 52;
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
 2992:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 3016:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
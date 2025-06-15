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
            entity = 9;
            entity = result[entity];
            tangon = undefined;
            michal = oscard.bind(tangon)(entity);
            entity = michal.canUsePremiumGuildMemberProfile;
            yankee = entity.bind(michal)(output);
            var _closure2_slot3 = yankee;
            entity = 10;
            michal = result[entity];
            zuuluu = oscard.bind(tangon)(michal);
            michal = 11;
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
            report = 12;
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
                    michal = 19;
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
                    michal = 13;
                    michal = verify[michal];
                    golfie = undefined;
                    report = zuuluu.bind(golfie)(michal);
                    tangon = report.openLazy;
                    option = _closure1_slot0;
                    michal = 15;
                    michal = verify[michal];
                    oscard = option.bind(golfie)(michal);
                    michal = 14;
                    zuuluu = verify[michal];
                    michal = verify.paths;
                    zuuluu = oscard.bind(golfie)(zuuluu, michal);
                    michal = {};
                    oscard = _closure2_slot0;
                    michal['user'] = oscard;
                    oscard = _closure2_slot4;
                    michal['analyticsLocations'] = oscard;
                    oscard = 16;
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
                    entity = 17;
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
                    entity = 18;
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
            verify = 17;
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
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ScrollView;
    var _closure1_slot6 = option;
    tangon = tangon.View;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot10 = tangon;
    tangon = 6;
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
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumUpsellTypes;
    var _closure1_slot17 = tangon;
    tangon = 8;
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
    tangon = 51;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/GuildProfileEditForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: GuildProfileEditForm
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            variable38 = entity.currentUser;
            var _closure2_slot0 = variable38;
            report = undefined;
            var _closure2_slot4 = report;
            var _closure2_slot5 = report;
            var _closure2_slot6 = report;
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            variable39 = 20;
            entity = tangon[variable39];
            entity = zuuluu.bind(report)(entity);
            variable61 = entity.bind(report)();
            entity = 21;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            sizing = entity.bind(report)();
            entity = 22;
            entity = tangon[entity];
            entity = zuuluu.bind(report)(entity);
            entity = entity.bind(report)();
            oscard = _closure1_slot5;
            michal = oscard.useRef;
            variable49 = null;
            romeon = michal.bind(oscard)(variable49);
            michal = oscard.useRef;
            source = michal.bind(oscard)(variable49);
            michal = oscard.useRef;
            variable57 = michal.bind(oscard)(variable49);
            michal = oscard.useRef;
            variable52 = michal.bind(oscard)(variable49);
            michal = 23;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            michal = {};
            variable45 = true;
            michal['includeKeyboardHeightIOS'] = variable45;
            michal = oscard.bind(report)(michal);
            echoed = michal.insets;
            update = 24;
            michal = tangon[update];
            michal = zuuluu.bind(report)(michal);
            michal = michal.spacing;
            offset = michal.PX_16;
            michal = 25;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            michal = {};
            michal['insets'] = echoed;
            option = {};
            option['ref'] = source;
            golfie = {};
            yankee = 'toRef';
            golfie['type'] = yankee;
            golfie['ref'] = variable57;
            golfie['extraOffset'] = offset;
            option['offset'] = golfie;
            golfie = new Array(3);
            golfie[0] = option;
            option = {};
            option['ref'] = variable57;
            verify = {};
            verify['type'] = yankee;
            verify['ref'] = variable52;
            verify['extraOffset'] = offset;
            option['offset'] = verify;
            golfie[1] = option;
            option = {};
            option['ref'] = variable52;
            verify = {};
            offset = 'toValue';
            verify['type'] = offset;
            offset = tangon[update];
            offset = zuuluu.bind(report)(offset);
            offset = offset.spacing;
            offset = offset.PX_64;
            verify['value'] = offset;
            option['offset'] = verify;
            golfie[2] = option;
            michal['inputs'] = golfie;
            michal['scrollViewRef'] = romeon;
            michal = oscard.bind(report)(michal);
            variable46 = michal.onFocus;
            michal = 26;
            michal = tangon[michal];
            michal = zuuluu.bind(report)(michal);
            michal = michal.bind(report)();
            variable37 = michal.guild;
            var _closure2_slot1 = variable37;
            golfie = michal.errors;
            variable40 = michal.isDisabled;
            variable59 = michal.pendingNickname;
            offset = michal.pendingAvatar;
            config = michal.pendingBanner;
            variable43 = michal.pendingThemeColors;
            variable54 = michal.pendingPronouns;
            variable48 = michal.pendingBio;
            variable41 = michal.pendingAvatarDecoration;
            variable36 = michal.pendingProfileEffectId;
            oscard = _closure1_slot0;
            michal = 27;
            option = tangon[michal];
            foxtra = oscard.bind(report)(option);
            yankee = foxtra.useStateFromStores;
            option = _closure1_slot8;
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
                    report = _closure1_slot8;
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
            whisks = yankee.bind(foxtra)(verify, option);
            var _closure2_slot2 = whisks;
            michal = tangon[michal];
            verify = oscard.bind(report)(michal);
            option = verify.useStateFromStores;
            michal = _closure1_slot9;
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
                    report = _closure1_slot9;
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
            record = option.bind(verify)(oscard, michal);
            var _closure2_slot3 = record;
            michal = 28;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = variable38.id;
            oscard = variable49 == variable37;
            michal = undefined;
            if(oscard) { _fun00006_ip = 556; continue _fun00005 }
 551:
            michal = variable37.id;
 556:
            quebec = tangon.bind(report)(zuuluu, michal);
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 29;
            michal = tangon[michal];
            oscard = zuuluu.bind(report)(michal);
            michal = oscard.useCustomStatusActivity;
            variable64 = michal.bind(oscard)();
            oscard = _closure1_slot1;
            michal = 30;
            michal = tangon[michal];
            michal = oscard.bind(report)(michal);
            limora = michal.bind(report)(quebec);
            michal = 31;
            michal = tangon[michal];
            verify = zuuluu.bind(report)(michal);
            option = verify.getPendingAvatarSrc;
            michal = {};
            yankee = variable38.id;
            michal['userId'] = yankee;
            michal['image'] = offset;
            variable44 = option.bind(verify)(michal);
            michal = 32;
            michal = tangon[michal];
            option = zuuluu.bind(report)(michal);
            michal = option.useGuildProfilePermissions;
            michal = michal.bind(option)(variable37);
            variable55 = michal.canEditNickname;
            michal = 9;
            michal = tangon[michal];
            oscard = oscard.bind(report)(michal);
            michal = oscard.canUsePremiumGuildMemberProfile;
            equals = michal.bind(oscard)(variable38);
            michal = 33;
            michal = tangon[michal];
            tangon = zuuluu.bind(report)(michal);
            zuuluu = tangon.canResetThemeColors;
            oscard = variable49 == record;
            michal = undefined;
            if(oscard) { _fun00006_ip = 737; continue _fun00005 }
 731:
            michal = record.themeColors;
 737:
            variable42 = zuuluu.bind(tangon)(variable43, michal);
            offset = !equals;
            if(!offset) { _fun00006_ip = 752; continue _fun00005 }
 749:
            offset = !entity;
 752:
            michal = variable49 == whisks;
            entity = undefined;
            if(michal) { _fun00006_ip = 767; continue _fun00005 }
 761:
            entity = whisks.nick;
 767:
            michal = variable49 != entity;
            sierra = '';
            variable58 = sierra;
            if(!michal) { _fun00006_ip = 784; continue _fun00005 }
 781:
            variable58 = entity;
 784:
            michal = variable49 == quebec;
            entity = undefined;
            if(michal) { _fun00006_ip = 799; continue _fun00005 }
 793:
            entity = quebec.pronouns;
 799:
            michal = variable49 != entity;
            variable53 = sierra;
            if(!michal) { _fun00006_ip = 812; continue _fun00005 }
 809:
            variable53 = entity;
 812:
            _closure2_slot4 = variable53;
            michal = variable49 == quebec;
            entity = undefined;
            if(michal) { _fun00006_ip = 831; continue _fun00005 }
 825:
            entity = quebec.bio;
 831:
            michal = variable49 != entity;
            variable47 = sierra;
            if(!michal) { _fun00006_ip = 844; continue _fun00005 }
 841:
            variable47 = entity;
 844:
            _closure2_slot5 = variable47;
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 10;
            entity = zuuluu[entity];
            tangon = michal.bind(report)(entity);
            entity = 11;
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
            entity['user'] = variable38;
            entity['displayProfile'] = quebec;
            entity['pendingThemeColors'] = variable43;
            entity = michal.bind(report)(entity);
            oscard = entity.theme;
            variable62 = entity.primaryColor;
            cntext = entity.secondaryColor;
            michal = _closure1_slot0;
            entity = 35;
            entity = zuuluu[entity];
            zuuluu = michal.bind(report)(entity);
            michal = zuuluu.useUserProfileColors;
            entity = {};
            entity['theme'] = oscard;
            entity['primaryColor'] = variable62;
            entity['secondaryColor'] = cntext;
            entity = michal.bind(zuuluu)(entity);
            papara = entity.gradientFallbackBackground;
            ctrled = entity.gradientSecondaryBackground;
            variable50 = entity.containerBackground;
            entity = entity.avatarBackground;
            zuuluu = echoed.bottom;
            variable65 = 0;
            michal = 0;
            if(!offset) { _fun00006_ip = 1044; continue _fun00005 }
 1040:
            michal = _closure1_slot10;
 1044:
            zuuluu = zuuluu + michal;
            tangon = _closure1_slot1;
            michal = _closure1_slot2;
            michal = michal[update];
            michal = tangon.bind(report)(michal);
            michal = michal.spacing;
            michal = michal.PX_16;
            status = zuuluu + michal;
            variable66 = {};
            variable66['backgroundColor'] = entity;
            michal = golfie.nick;
            entity = golfie.bio;
            tangon = _closure1_slot4;
            zuuluu = _closure1_slot3;
            tangon = tangon.bind(report)(golfie, zuuluu);
            zuuluu = variable49 == michal;
            variable60 = undefined;
            if(zuuluu) { _fun00006_ip = 1124; continue _fun00005 }
 1120:
            variable60 = michal[variable65];
 1124:
            michal = golfie.pronouns;
            zuuluu = variable49 == michal;
            variable56 = undefined;
            if(zuuluu) { _fun00006_ip = 1143; continue _fun00005 }
 1139:
            variable56 = michal[variable65];
 1143:
            michal = variable49 == entity;
            variable51 = undefined;
            if(michal) { _fun00006_ip = 1156; continue _fun00005 }
 1152:
            variable51 = entity[variable65];
 1156:
            michal = global;
            zuuluu = michal.parseInt;
            entity = variable49 == golfie;
            option = undefined;
            if(entity) { _fun00006_ip = 1178; continue _fun00005 }
 1173:
            option = golfie.code;
 1178:
            verify = variable49 != option;
            entity = sierra;
            if(!verify) { _fun00006_ip = 1191; continue _fun00005 }
 1188:
            entity = option;
 1191:
            option = zuuluu.bind(report)(entity);
            zuuluu = 200005;
            entity = null;
            if(!(zuuluu === option)) { _fun00006_ip = 1225; continue _fun00005 }
 1208:
            option = variable49 == golfie;
            zuuluu = undefined;
            if(option) { _fun00006_ip = 1222; continue _fun00005 }
 1217:
            zuuluu = golfie.message;
 1222:
            entity = zuuluu;
 1225:
            zuuluu = michal.Object;
            michal = zuuluu.keys;
            michal = michal.bind(zuuluu)(tangon);
            michal = michal.length;
            michal = michal > variable65;
            variable63 = null;
            if(!michal) { _fun00006_ip = 1337; continue _fun00005 }
 1255:
            michal = variable49 == variable51;
            variable63 = null;
            if(!michal) { _fun00006_ip = 1337; continue _fun00005 }
 1264:
            michal = variable49 == variable60;
            variable63 = null;
            if(!michal) { _fun00006_ip = 1337; continue _fun00005 }
 1273:
            if(!(variable49 == entity)) { _fun00006_ip = 1334; continue _fun00005 }
 1277:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 17;
            zuuluu = option[michal];
            zuuluu = golfie.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = option[michal];
            michal = golfie.bind(report)(michal);
            michal = michal.t;
            michal = michal.s35OuL;
            entity = zuuluu.bind(tangon)(michal);
 1334:
            variable63 = entity;
 1337:
            michal = variable49 == variable37;
            entity = null;
            if(michal) { _fun00006_ip = 3192; continue _fun00005 }
 1349:
            tangon = _closure1_slot18;
            zuuluu = _closure1_slot0;
            variable67 = _closure1_slot2;
            michal = 37;
            michal = variable67[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.ThemeContextProvider;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = variable62;
            michal['secondaryColor'] = cntext;
            option = _closure1_slot19;
            golfie = _closure1_slot7;
            oscard = {};
            yankee = sizing.container;
            verify = new Array(2);
            verify[0] = yankee;
            yankee = {};
            yankee['backgroundColor'] = ctrled;
            verify[1] = yankee;
            oscard['style'] = verify;
            yankee = _closure1_slot6;
            verify = {};
            verify['ref'] = romeon;
            foxtra = _closure1_slot18;
            romeon = {};
            output = sizing.bounceOffset;
            romeon['style'] = output;
            foxtra = foxtra.bind(report)(golfie, romeon);
            romeon = new Array(2);
            romeon[0] = foxtra;
            target = _closure1_slot1;
            sequen = 38;
            foxtra = variable67[sequen];
            output = target.bind(report)(foxtra);
            foxtra = {};
            foxtra['fallbackBackground'] = papara;
            foxtra['primaryColor'] = variable62;
            foxtra['secondaryColor'] = cntext;
            result = {};
            result['backgroundColor'] = ctrled;
            foxtra['containerStyle'] = result;
            vacuum = _closure1_slot18;
            ctrled = _closure1_slot21;
            result = {};
            result['user'] = variable38;
            result['displayProfile'] = quebec;
            result['guildMember'] = whisks;
            result['guildMemberProfile'] = record;
            result['pendingAvatarSrc'] = variable44;
            result['pendingBanner'] = config;
            result['pendingThemeColors'] = variable43;
            result['disabled'] = variable40;
            ctrled = vacuum.bind(report)(ctrled, result);
            result = new Array(2);
            result[0] = ctrled;
            ctrled = {};
            config = _closure1_slot18;
            vacuum = {};
            whisks = variable61.avatarBackground;
            record = new Array(4);
            record[0] = whisks;
            whisks = variable61.avatarPosition;
            record[1] = whisks;
            whisks = sizing.avatarContainer;
            record[2] = whisks;
            record[3] = variable66;
            vacuum['style'] = record;
            whisks = _closure1_slot18;
            record = 39;
            record = variable67[record];
            target = target.bind(report)(record);
            record = {};
            variable67 = variable38.id;
            record['userId'] = variable67;
            variable67 = variable40;
            if(variable40) { _fun00006_ip = 1665; continue _fun00005 }
 1662:
            variable67 = !equals;
 1665:
            record['disabled'] = variable67;
            variable67 = false;
            record['disableStatus'] = variable67;
            variable68 = variable49 == variable37;
            variable67 = undefined;
            if(variable68) { _fun00006_ip = 1690; continue _fun00005 }
 1685:
            variable67 = variable37.id;
 1690:
            record['guildId'] = variable67;
            record['statusStyle'] = variable66;
            record = whisks.bind(report)(target, record);
            vacuum['children'] = record;
            config = config.bind(report)(golfie, vacuum);
            vacuum = new Array(2);
            vacuum[0] = config;
            record = _closure1_slot19;
            target = _closure1_slot1;
            whisks = _closure1_slot2;
            sequen = whisks[sequen];
            config = target.bind(report)(sequen);
            sequen = {};
            sequen['fallbackBackground'] = papara;
            sequen['primaryColor'] = variable62;
            sequen['secondaryColor'] = cntext;
            papara = variable61.profileContent;
            cntext = new Array(2);
            cntext[0] = papara;
            papara = {};
            papara['paddingTop'] = variable65;
            papara['paddingBottom'] = status;
            cntext[1] = papara;
            sequen['containerStyle'] = cntext;
            status = _closure1_slot18;
            cntext = 40;
            cntext = whisks[cntext];
            papara = target.bind(report)(cntext);
            cntext = {};
            cntext['customStatusActivity'] = variable64;
            variable62 = variable49 != variable62;
            cntext['hasCustomProfileTheme'] = variable62;
            variable62 = variable61.customStatusBubble;
            cntext['style'] = variable62;
            variable61 = variable61.emojiOnlyCustomStatusBubble;
            cntext['emojiOnlyStyle'] = variable61;
            cntext['editEnabled'] = variable45;
            papara = status.bind(report)(papara, cntext);
            cntext = new Array(3);
            cntext[0] = papara;
            status = _closure1_slot18;
            papara = 41;
            papara = whisks[papara];
            target = target.bind(report)(papara);
            papara = {};
            papara['user'] = variable38;
            whisks = variable58;
            if(!(variable49 != variable59)) { _fun00006_ip = 1900; continue _fun00005 }
 1897:
            whisks = variable59;
 1900:
            papara['displayName'] = whisks;
            whisks = variable53;
            if(!(variable49 != variable54)) { _fun00006_ip = 1914; continue _fun00005 }
 1911:
            whisks = variable54;
 1914:
            papara['pronouns'] = whisks;
            papara['badges'] = limora;
            papara['badgeContainerBackground'] = variable50;
            papara = status.bind(report)(target, papara);
            cntext[1] = papara;
            status = _closure1_slot19;
            target = _closure1_slot7;
            papara = {};
            whisks = sizing.formContainer;
            limora = new Array(2);
            limora[0] = whisks;
            whisks = {};
            whisks['backgroundColor'] = variable50;
            whisks['paddingBottom'] = variable39;
            limora[1] = whisks;
            papara['style'] = limora;
            whisks = variable49 != variable63;
            limora = null;
            if(!whisks) { _fun00006_ip = 2080; continue _fun00005 }
 1991:
            limora = null;
            if(!(sierra !== variable63)) { _fun00006_ip = 2080; continue _fun00005 }
 1997:
            variable39 = _closure1_slot18;
            whisks = _closure1_slot7;
            sierra = {};
            variable50 = sizing.errorContainer;
            sierra['style'] = variable50;
            variable62 = _closure1_slot18;
            variable61 = _closure1_slot0;
            variable64 = _closure1_slot2;
            variable50 = 36;
            variable50 = variable64[variable50];
            variable50 = variable61.bind(report)(variable50);
            variable61 = variable50.Text;
            variable50 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable50['children'] = variable63;
            variable50 = variable62.bind(report)(variable61, variable50);
            sierra['children'] = variable50;
            limora = variable39.bind(report)(whisks, sierra);
 2080:
            sierra = new Array(7);
            sierra[0] = limora;
            variable50 = _closure1_slot18;
            variable39 = _closure1_slot1;
            variable61 = _closure1_slot2;
            whisks = 42;
            limora = variable61[whisks];
            variable39 = variable39.bind(report)(limora);
            limora = {};
            limora['scrollTargetRef'] = source;
            variable64 = _closure1_slot0;
            source = 17;
            variable62 = variable61[source];
            variable62 = variable64.bind(report)(variable62);
            variable63 = variable62.intl;
            variable62 = variable63.string;
            variable61 = variable61[source];
            variable61 = variable64.bind(report)(variable61);
            variable61 = variable61.t;
            variable61 = variable61.me1lRk;
            variable61 = variable62.bind(variable63)(variable61);
            limora['label'] = variable61;
            limora['errorMessage'] = variable60;
            if(!(variable49 != variable59)) { _fun00006_ip = 2188; continue _fun00005 }
 2185:
            variable58 = variable59;
 2188:
            limora['value'] = variable58;
            limora['onFocus'] = variable46;
            variable58 = function(argFoo) { // Original name: onChange
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
            limora['onChange'] = variable58;
            variable59 = _closure1_slot1;
            variable60 = _closure1_slot2;
            variable58 = 43;
            variable58 = variable60[variable58];
            variable59 = variable59.bind(report)(variable58);
            variable58 = variable59.getName;
            variable58 = variable58.bind(variable59)(variable38);
            limora['placeholder'] = variable58;
            variable58 = _closure1_slot14;
            limora['maxLength'] = variable58;
            variable55 = !variable55;
            if(variable55) { _fun00006_ip = 2263; continue _fun00005 }
 2260:
            variable55 = variable40;
 2263:
            limora['disabled'] = variable55;
            limora = variable50.bind(report)(variable39, limora);
            sierra[1] = limora;
            variable50 = _closure1_slot18;
            variable39 = _closure1_slot1;
            variable55 = _closure1_slot2;
            limora = variable55[whisks];
            variable39 = variable39.bind(report)(limora);
            limora = {};
            limora['scrollTargetRef'] = variable57;
            variable58 = _closure1_slot0;
            variable57 = variable55[source];
            variable57 = variable58.bind(report)(variable57);
            variable60 = variable57.intl;
            variable59 = variable60.string;
            variable57 = variable55[source];
            variable57 = variable58.bind(report)(variable57);
            variable57 = variable57.t;
            variable57 = variable57.+T3RIy;
            variable57 = variable59.bind(variable60)(variable57);
            limora['label'] = variable57;
            limora['errorMessage'] = variable56;
            variable56 = variable55[source];
            variable56 = variable58.bind(report)(variable56);
            variable57 = variable56.intl;
            variable56 = variable57.string;
            variable55 = variable55[source];
            variable55 = variable58.bind(report)(variable55);
            variable55 = variable55.t;
            variable55 = variable55.NZqtIi;
            variable55 = variable56.bind(variable57)(variable55);
            limora['description'] = variable55;
            if(!(variable49 != variable54)) { _fun00006_ip = 2419; continue _fun00005 }
 2416:
            variable53 = variable54;
 2419:
            limora['value'] = variable53;
            limora['onFocus'] = variable46;
            variable53 = function(argFoo) { // Original name: onChange
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
            limora['onChange'] = variable53;
            variable53 = _closure1_slot15;
            limora['maxLength'] = variable53;
            limora['disabled'] = variable40;
            limora = variable50.bind(report)(variable39, limora);
            sierra[2] = limora;
            limora = null;
            if(!equals) { _fun00006_ip = 2666; continue _fun00005 }
 2471:
            variable39 = _closure1_slot18;
            equals = _closure1_slot1;
            variable50 = _closure1_slot2;
            whisks = variable50[whisks];
            equals = equals.bind(report)(whisks);
            whisks = {};
            whisks['scrollTargetRef'] = variable52;
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
            if(!(variable49 != variable48)) { _fun00006_ip = 2613; continue _fun00005 }
 2610:
            variable47 = variable48;
 2613:
            whisks['value'] = variable47;
            whisks['onFocus'] = variable46;
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
            variable46 = _closure1_slot13;
            whisks['maxLength'] = variable46;
            variable46 = 5;
            whisks['numberOfLines'] = variable46;
            whisks['multiline'] = variable45;
            whisks['disabled'] = variable40;
            limora = variable39.bind(report)(equals, whisks);
 2666:
            sierra[3] = limora;
            variable40 = _closure1_slot18;
            whisks = _closure1_slot1;
            variable39 = _closure1_slot2;
            limora = 44;
            limora = variable39[limora];
            equals = whisks.bind(report)(limora);
            limora = {};
            limora['pendingAvatarSrc'] = variable44;
            limora['pendingThemeColors'] = variable43;
            limora['user'] = variable38;
            variable43 = variable37.id;
            limora['guildId'] = variable43;
            variable43 = function(argFoo) { // Original name: onProfileThemeColorsChanged
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
            limora['onProfileThemeColorsChanged'] = variable43;
            limora['showResetMenu'] = variable42;
            limora = variable40.bind(report)(equals, limora);
            sierra[4] = limora;
            variable40 = _closure1_slot18;
            limora = 45;
            limora = variable39[limora];
            equals = whisks.bind(report)(limora);
            limora = {};
            limora['user'] = variable38;
            variable42 = variable37.id;
            limora['guildId'] = variable42;
            limora['pendingAvatarDecoration'] = variable41;
            limora = variable40.bind(report)(equals, limora);
            sierra[5] = limora;
            equals = _closure1_slot18;
            limora = 46;
            limora = variable39[limora];
            whisks = whisks.bind(report)(limora);
            limora = {};
            limora['user'] = variable38;
            variable37 = variable37.id;
            limora['guildId'] = variable37;
            limora['pendingProfileEffectId'] = variable36;
            limora['displayProfile'] = quebec;
            limora = equals.bind(report)(whisks, limora);
            sierra[6] = limora;
            papara['children'] = sierra;
            papara = status.bind(report)(target, papara);
            cntext[2] = papara;
            sequen['children'] = cntext;
            sequen = record.bind(report)(config, sequen);
            vacuum[1] = sequen;
            ctrled['children'] = vacuum;
            ctrled = option.bind(report)(golfie, ctrled);
            result[1] = ctrled;
            foxtra['children'] = result;
            foxtra = option.bind(report)(output, foxtra);
            romeon[1] = foxtra;
            verify['children'] = romeon;
            yankee = option.bind(report)(yankee, verify);
            verify = new Array(2);
            verify[0] = yankee;
            if(!offset) { _fun00006_ip = 3168; continue _fun00005 }
 2923:
            foxtra = _closure1_slot18;
            ctrled = _closure1_slot1;
            output = _closure1_slot2;
            yankee = 47;
            yankee = output[yankee];
            romeon = ctrled.bind(report)(yankee);
            yankee = {};
            result = sizing.floatingUpsell;
            sizing = new Array(2);
            sizing[0] = result;
            result = {};
            update = output[update];
            update = ctrled.bind(report)(update);
            update = update.spacing;
            update = update.PX_16;
            echoed = echoed.bottom;
            echoed = update + echoed;
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
                entity = 48;
                michal = option[entity];
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                tangon = report.pushLazy;
                golfie = _closure1_slot0;
                michal = 15;
                michal = option[michal];
                oscard = golfie.bind(entity)(michal);
                michal = 49;
                zuuluu = option[michal];
                michal = option.paths;
                zuuluu = oscard.bind(entity)(zuuluu, michal);
                michal = {};
                oscard = {};
                yankee = _closure1_slot20;
                romeon = oscard;
                offset = copyDataProperties(romeon, yankee);
                verify = _closure1_slot11;
                offset = verify.BUTTON_CTA;
                verify = 'object';
                oscard[verify] = offset;
                michal['analyticsLocation'] = oscard;
                oscard = _closure2_slot6;
                michal['analyticsLocations'] = oscard;
                oscard = 50;
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
 3168:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 3192:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
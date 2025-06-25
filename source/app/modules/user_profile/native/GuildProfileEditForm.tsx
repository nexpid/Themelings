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
    entity = ['nick', 'bio', 'guild_tag'];
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
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            variable63 = 20;
            entity = golfie[variable63];
            entity = oscard.bind(report)(entity);
            variable65 = entity.bind(report)();
            entity = 21;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            sizing = entity.bind(report)();
            entity = 22;
            entity = golfie[entity];
            entity = oscard.bind(report)(entity);
            michal = entity.bind(report)();
            tangon = _closure1_slot5;
            zuuluu = tangon.useRef;
            entity = null;
            romeon = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.useRef;
            source = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.useRef;
            variable56 = zuuluu.bind(tangon)(entity);
            zuuluu = tangon.useRef;
            variable51 = zuuluu.bind(tangon)(entity);
            zuuluu = 23;
            zuuluu = golfie[zuuluu];
            tangon = oscard.bind(report)(zuuluu);
            zuuluu = {};
            variable45 = true;
            zuuluu['includeKeyboardHeightIOS'] = variable45;
            zuuluu = tangon.bind(report)(zuuluu);
            echoed = zuuluu.insets;
            update = 24;
            zuuluu = golfie[update];
            zuuluu = oscard.bind(report)(zuuluu);
            zuuluu = zuuluu.spacing;
            yankee = zuuluu.PX_16;
            zuuluu = 25;
            zuuluu = golfie[zuuluu];
            tangon = oscard.bind(report)(zuuluu);
            zuuluu = {};
            zuuluu['insets'] = echoed;
            verify = {};
            verify['ref'] = source;
            option = {};
            foxtra = 'toRef';
            option['type'] = foxtra;
            option['ref'] = variable56;
            option['extraOffset'] = yankee;
            verify['offset'] = option;
            option = new Array(3);
            option[0] = verify;
            verify = {};
            verify['ref'] = variable56;
            offset = {};
            offset['type'] = foxtra;
            offset['ref'] = variable51;
            offset['extraOffset'] = yankee;
            verify['offset'] = offset;
            option[1] = verify;
            verify = {};
            verify['ref'] = variable51;
            offset = {};
            yankee = 'toValue';
            offset['type'] = yankee;
            yankee = golfie[update];
            yankee = oscard.bind(report)(yankee);
            yankee = yankee.spacing;
            yankee = yankee.PX_64;
            offset['value'] = yankee;
            verify['offset'] = offset;
            option[2] = verify;
            zuuluu['inputs'] = option;
            zuuluu['scrollViewRef'] = romeon;
            zuuluu = tangon.bind(report)(zuuluu);
            variable46 = zuuluu.onFocus;
            zuuluu = 26;
            zuuluu = golfie[zuuluu];
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.bind(report)();
            variable37 = tangon.guild;
            var _closure2_slot1 = variable37;
            zuuluu = tangon.errors;
            variable40 = tangon.isDisabled;
            variable58 = tangon.pendingNickname;
            yankee = tangon.pendingAvatar;
            config = tangon.pendingBanner;
            variable43 = tangon.pendingThemeColors;
            variable53 = tangon.pendingPronouns;
            variable48 = tangon.pendingBio;
            variable41 = tangon.pendingAvatarDecoration;
            variable36 = tangon.pendingProfileEffectId;
            option = _closure1_slot0;
            tangon = 27;
            verify = golfie[tangon];
            output = option.bind(report)(verify);
            foxtra = output.useStateFromStores;
            verify = _closure1_slot8;
            offset = new Array(1);
            offset[0] = verify;
            verify = function() {
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
            variable61 = foxtra.bind(output)(offset, verify);
            var _closure2_slot2 = variable61;
            tangon = golfie[tangon];
            offset = option.bind(report)(tangon);
            verify = offset.useStateFromStores;
            tangon = _closure1_slot9;
            option = new Array(1);
            option[0] = tangon;
            tangon = function() {
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
            record = verify.bind(offset)(option, tangon);
            var _closure2_slot3 = record;
            tangon = 28;
            tangon = golfie[tangon];
            golfie = oscard.bind(report)(tangon);
            oscard = variable38.id;
            option = entity == variable37;
            tangon = undefined;
            if(option) { _fun00006_ip = 556; continue _fun00005 }
 551:
            tangon = variable37.id;
 556:
            quebec = golfie.bind(report)(oscard, tangon);
            oscard = _closure1_slot0;
            golfie = _closure1_slot2;
            tangon = 29;
            tangon = golfie[tangon];
            option = oscard.bind(report)(tangon);
            tangon = option.useCustomStatusActivity;
            variable67 = tangon.bind(option)();
            option = _closure1_slot1;
            tangon = 30;
            tangon = golfie[tangon];
            tangon = option.bind(report)(tangon);
            limora = tangon.bind(report)(quebec);
            tangon = 31;
            tangon = golfie[tangon];
            offset = oscard.bind(report)(tangon);
            verify = offset.getPendingAvatarSrc;
            tangon = {};
            foxtra = variable38.id;
            tangon['userId'] = foxtra;
            tangon['image'] = yankee;
            variable44 = verify.bind(offset)(tangon);
            tangon = 32;
            tangon = golfie[tangon];
            verify = oscard.bind(report)(tangon);
            tangon = verify.useGuildProfilePermissions;
            tangon = tangon.bind(verify)(variable37);
            variable54 = tangon.canEditNickname;
            tangon = 9;
            tangon = golfie[tangon];
            option = option.bind(report)(tangon);
            tangon = option.canUsePremiumGuildMemberProfile;
            equals = tangon.bind(option)(variable38);
            tangon = 33;
            tangon = golfie[tangon];
            golfie = oscard.bind(report)(tangon);
            oscard = golfie.canResetThemeColors;
            option = entity == record;
            tangon = undefined;
            if(option) { _fun00006_ip = 737; continue _fun00005 }
 731:
            tangon = record.themeColors;
 737:
            variable42 = oscard.bind(golfie)(variable43, tangon);
            offset = !equals;
            if(!offset) { _fun00006_ip = 752; continue _fun00005 }
 749:
            offset = !michal;
 752:
            tangon = entity == variable61;
            michal = undefined;
            if(tangon) { _fun00006_ip = 767; continue _fun00005 }
 761:
            michal = variable61.nick;
 767:
            tangon = entity != michal;
            whisks = '';
            variable57 = whisks;
            if(!tangon) { _fun00006_ip = 784; continue _fun00005 }
 781:
            variable57 = michal;
 784:
            tangon = entity == quebec;
            michal = undefined;
            if(tangon) { _fun00006_ip = 799; continue _fun00005 }
 793:
            michal = quebec.pronouns;
 799:
            tangon = entity != michal;
            variable52 = whisks;
            if(!tangon) { _fun00006_ip = 812; continue _fun00005 }
 809:
            variable52 = michal;
 812:
            _closure2_slot4 = variable52;
            tangon = entity == quebec;
            michal = undefined;
            if(tangon) { _fun00006_ip = 831; continue _fun00005 }
 825:
            michal = quebec.bio;
 831:
            tangon = entity != michal;
            variable47 = whisks;
            if(!tangon) { _fun00006_ip = 844; continue _fun00005 }
 841:
            variable47 = michal;
 844:
            _closure2_slot5 = variable47;
            tangon = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 10;
            michal = golfie[michal];
            oscard = tangon.bind(report)(michal);
            michal = 11;
            michal = golfie[michal];
            michal = tangon.bind(report)(michal);
            option = michal.USER_SETTINGS;
            michal = new Array(1);
            michal[0] = option;
            michal = oscard.bind(report)(michal);
            michal = michal.analyticsLocations;
            _closure2_slot6 = michal;
            michal = 34;
            michal = golfie[michal];
            tangon = tangon.bind(report)(michal);
            michal = {};
            michal['user'] = variable38;
            michal['displayProfile'] = quebec;
            michal['pendingThemeColors'] = variable43;
            michal = tangon.bind(report)(michal);
            oscard = michal.theme;
            variable66 = michal.primaryColor;
            cntext = michal.secondaryColor;
            tangon = _closure1_slot0;
            michal = 35;
            michal = golfie[michal];
            golfie = tangon.bind(report)(michal);
            tangon = golfie.useUserProfileColors;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = variable66;
            michal['secondaryColor'] = cntext;
            michal = tangon.bind(golfie)(michal);
            papara = michal.gradientFallbackBackground;
            ctrled = michal.gradientSecondaryBackground;
            variable64 = michal.containerBackground;
            michal = michal.avatarBackground;
            golfie = echoed.bottom;
            variable60 = 0;
            tangon = 0;
            if(!offset) { _fun00006_ip = 1042; continue _fun00005 }
 1038:
            tangon = _closure1_slot10;
 1042:
            golfie = golfie + tangon;
            option = _closure1_slot1;
            tangon = _closure1_slot2;
            tangon = tangon[update];
            tangon = option.bind(report)(tangon);
            tangon = tangon.spacing;
            tangon = tangon.PX_16;
            status = golfie + tangon;
            variable68 = {};
            variable68['backgroundColor'] = michal;
            golfie = zuuluu.nick;
            tangon = zuuluu.bio;
            michal = zuuluu.guild_tag;
            verify = _closure1_slot4;
            option = _closure1_slot3;
            variable62 = verify.bind(report)(zuuluu, option);
            option = entity == golfie;
            variable59 = undefined;
            if(option) { _fun00006_ip = 1128; continue _fun00005 }
 1124:
            variable59 = golfie[variable60];
 1128:
            golfie = zuuluu.pronouns;
            option = entity == golfie;
            variable55 = undefined;
            if(option) { _fun00006_ip = 1147; continue _fun00005 }
 1143:
            variable55 = golfie[variable60];
 1147:
            golfie = entity == tangon;
            variable50 = undefined;
            if(golfie) { _fun00006_ip = 1160; continue _fun00005 }
 1156:
            variable50 = tangon[variable60];
 1160:
            tangon = entity == michal;
            sierra = undefined;
            if(tangon) { _fun00006_ip = 1173; continue _fun00005 }
 1169:
            sierra = michal[variable60];
 1173:
            variable39 = global;
            tangon = variable39.parseInt;
            michal = entity == zuuluu;
            golfie = undefined;
            if(michal) { _fun00006_ip = 1195; continue _fun00005 }
 1190:
            golfie = zuuluu.code;
 1195:
            option = entity != golfie;
            michal = whisks;
            if(!option) { _fun00006_ip = 1208; continue _fun00005 }
 1205:
            michal = golfie;
 1208:
            tangon = tangon.bind(report)(michal);
            michal = 200005;
            variable49 = null;
            if(!(michal === tangon)) { _fun00006_ip = 1242; continue _fun00005 }
 1225:
            tangon = entity == zuuluu;
            michal = undefined;
            if(tangon) { _fun00006_ip = 1239; continue _fun00005 }
 1234:
            michal = zuuluu.message;
 1239:
            variable49 = michal;
 1242:
            if(!(entity != variable37)) { _fun00006_ip = 3228; continue _fun00005 }
 1249:
            tangon = _closure1_slot18;
            zuuluu = _closure1_slot0;
            variable69 = _closure1_slot2;
            michal = 37;
            michal = variable69[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.ThemeContextProvider;
            michal = {};
            michal['theme'] = oscard;
            michal['primaryColor'] = variable66;
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
            foxtra = variable69[sequen];
            output = target.bind(report)(foxtra);
            foxtra = {};
            foxtra['fallbackBackground'] = papara;
            foxtra['primaryColor'] = variable66;
            foxtra['secondaryColor'] = cntext;
            result = {};
            result['backgroundColor'] = ctrled;
            foxtra['containerStyle'] = result;
            vacuum = _closure1_slot18;
            ctrled = _closure1_slot21;
            result = {};
            result['user'] = variable38;
            result['displayProfile'] = quebec;
            result['guildMember'] = variable61;
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
            variable61 = variable65.avatarBackground;
            record = new Array(4);
            record[0] = variable61;
            variable61 = variable65.avatarPosition;
            record[1] = variable61;
            variable61 = sizing.avatarContainer;
            record[2] = variable61;
            record[3] = variable68;
            vacuum['style'] = record;
            variable61 = _closure1_slot18;
            record = 39;
            record = variable69[record];
            target = target.bind(report)(record);
            record = {};
            variable69 = variable38.id;
            record['userId'] = variable69;
            variable69 = variable40;
            if(variable40) { _fun00006_ip = 1564; continue _fun00005 }
 1561:
            variable69 = !equals;
 1564:
            record['disabled'] = variable69;
            variable69 = false;
            record['disableStatus'] = variable69;
            variable70 = entity == variable37;
            variable69 = undefined;
            if(variable70) { _fun00006_ip = 1589; continue _fun00005 }
 1584:
            variable69 = variable37.id;
 1589:
            record['guildId'] = variable69;
            record['statusStyle'] = variable68;
            record = variable61.bind(report)(target, record);
            vacuum['children'] = record;
            config = config.bind(report)(golfie, vacuum);
            vacuum = new Array(2);
            vacuum[0] = config;
            record = _closure1_slot19;
            target = _closure1_slot1;
            variable61 = _closure1_slot2;
            sequen = variable61[sequen];
            config = target.bind(report)(sequen);
            sequen = {};
            sequen['fallbackBackground'] = papara;
            sequen['primaryColor'] = variable66;
            sequen['secondaryColor'] = cntext;
            papara = variable65.profileContent;
            cntext = new Array(2);
            cntext[0] = papara;
            papara = {};
            papara['paddingTop'] = variable60;
            papara['paddingBottom'] = status;
            cntext[1] = papara;
            sequen['containerStyle'] = cntext;
            status = _closure1_slot18;
            cntext = 40;
            cntext = variable61[cntext];
            papara = target.bind(report)(cntext);
            cntext = {};
            cntext['customStatusActivity'] = variable67;
            variable66 = entity != variable66;
            cntext['hasCustomProfileTheme'] = variable66;
            variable66 = variable65.customStatusBubble;
            cntext['style'] = variable66;
            variable65 = variable65.emojiOnlyCustomStatusBubble;
            cntext['emojiOnlyStyle'] = variable65;
            cntext['editEnabled'] = variable45;
            papara = status.bind(report)(papara, cntext);
            cntext = new Array(3);
            cntext[0] = papara;
            status = _closure1_slot18;
            papara = 41;
            papara = variable61[papara];
            target = target.bind(report)(papara);
            papara = {};
            papara['user'] = variable38;
            variable61 = variable57;
            if(!(entity != variable58)) { _fun00006_ip = 1799; continue _fun00005 }
 1796:
            variable61 = variable58;
 1799:
            papara['displayName'] = variable61;
            variable61 = variable52;
            if(!(entity != variable53)) { _fun00006_ip = 1813; continue _fun00005 }
 1810:
            variable61 = variable53;
 1813:
            papara['pronouns'] = variable61;
            papara['badges'] = limora;
            papara['badgeContainerBackground'] = variable64;
            papara = status.bind(report)(target, papara);
            cntext[1] = papara;
            status = _closure1_slot19;
            target = _closure1_slot7;
            papara = {};
            variable61 = sizing.formContainer;
            limora = new Array(2);
            limora[0] = variable61;
            variable61 = {};
            variable61['backgroundColor'] = variable64;
            variable61['paddingBottom'] = variable63;
            limora[1] = variable61;
            papara['style'] = limora;
            variable61 = entity != variable50;
            limora = null;
            if(variable61) { _fun00006_ip = 2114; continue _fun00005 }
 1893:
            variable61 = entity != variable59;
            limora = null;
            if(variable61) { _fun00006_ip = 2114; continue _fun00005 }
 1905:
            if(!(entity == sierra)) { _fun00006_ip = 2010; continue _fun00005 }
 1909:
            variable61 = variable39.Object;
            variable39 = variable61.keys;
            variable39 = variable39.bind(variable61)(variable62);
            variable39 = variable39.length;
            variable39 = variable39 > variable60;
            variable63 = null;
            if(!variable39) { _fun00006_ip = 2008; continue _fun00005 }
 1939:
            if(!(entity == variable49)) { _fun00006_ip = 2002; continue _fun00005 }
 1943:
            variable62 = _closure1_slot0;
            variable64 = _closure1_slot2;
            variable39 = 17;
            variable60 = variable64[variable39];
            variable60 = variable62.bind(report)(variable60);
            variable61 = variable60.intl;
            variable60 = variable61.string;
            variable39 = variable64[variable39];
            variable39 = variable62.bind(report)(variable39);
            variable39 = variable39.t;
            variable39 = variable39.s35OuL;
            variable39 = variable60.bind(variable61)(variable39);
            _fun00006_ip = 2005; continue _fun00005;
 2002:
            variable39 = variable49;
 2005:
            variable63 = variable39;
 2008:
            _fun00006_ip = 2013; continue _fun00005;
 2010:
            variable63 = sierra;
 2013:
            variable39 = entity == variable63;
            sierra = null;
            if(variable39) { _fun00006_ip = 2111; continue _fun00005 }
 2022:
            sierra = null;
            if(!(whisks !== variable63)) { _fun00006_ip = 2111; continue _fun00005 }
 2028:
            variable49 = _closure1_slot18;
            variable39 = _closure1_slot7;
            whisks = {};
            variable60 = sizing.errorContainer;
            whisks['style'] = variable60;
            variable62 = _closure1_slot18;
            variable61 = _closure1_slot0;
            variable64 = _closure1_slot2;
            variable60 = 36;
            variable60 = variable64[variable60];
            variable60 = variable61.bind(report)(variable60);
            variable61 = variable60.Text;
            variable60 = {'variant': 'text-sm/bold', 'color': 'status-danger'};
            variable60['children'] = variable63;
            variable60 = variable62.bind(report)(variable61, variable60);
            whisks['children'] = variable60;
            sierra = variable49.bind(report)(variable39, whisks);
 2111:
            limora = sierra;
 2114:
            sierra = new Array(7);
            sierra[0] = limora;
            variable49 = _closure1_slot18;
            variable39 = _closure1_slot1;
            variable60 = _closure1_slot2;
            whisks = 42;
            limora = variable60[whisks];
            variable39 = variable39.bind(report)(limora);
            limora = {};
            limora['scrollTargetRef'] = source;
            variable63 = _closure1_slot0;
            source = 17;
            variable61 = variable60[source];
            variable61 = variable63.bind(report)(variable61);
            variable62 = variable61.intl;
            variable61 = variable62.string;
            variable60 = variable60[source];
            variable60 = variable63.bind(report)(variable60);
            variable60 = variable60.t;
            variable60 = variable60.me1lRk;
            variable60 = variable61.bind(variable62)(variable60);
            limora['label'] = variable60;
            limora['errorMessage'] = variable59;
            if(!(entity != variable58)) { _fun00006_ip = 2222; continue _fun00005 }
 2219:
            variable57 = variable58;
 2222:
            limora['value'] = variable57;
            limora['onFocus'] = variable46;
            variable57 = function(argFoo) { // Original name: onChange
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
            limora['onChange'] = variable57;
            variable58 = _closure1_slot1;
            variable59 = _closure1_slot2;
            variable57 = 43;
            variable57 = variable59[variable57];
            variable58 = variable58.bind(report)(variable57);
            variable57 = variable58.getName;
            variable57 = variable57.bind(variable58)(variable38);
            limora['placeholder'] = variable57;
            variable57 = _closure1_slot14;
            limora['maxLength'] = variable57;
            variable54 = !variable54;
            if(variable54) { _fun00006_ip = 2297; continue _fun00005 }
 2294:
            variable54 = variable40;
 2297:
            limora['disabled'] = variable54;
            limora = variable49.bind(report)(variable39, limora);
            sierra[1] = limora;
            variable49 = _closure1_slot18;
            variable39 = _closure1_slot1;
            variable54 = _closure1_slot2;
            limora = variable54[whisks];
            variable39 = variable39.bind(report)(limora);
            limora = {};
            limora['scrollTargetRef'] = variable56;
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
            if(!(entity != variable53)) { _fun00006_ip = 2453; continue _fun00005 }
 2450:
            variable52 = variable53;
 2453:
            limora['value'] = variable52;
            limora['onFocus'] = variable46;
            variable52 = function(argFoo) { // Original name: onChange
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
            limora['onChange'] = variable52;
            variable52 = _closure1_slot15;
            limora['maxLength'] = variable52;
            limora['disabled'] = variable40;
            limora = variable49.bind(report)(variable39, limora);
            sierra[2] = limora;
            limora = null;
            if(!equals) { _fun00006_ip = 2700; continue _fun00005 }
 2505:
            variable39 = _closure1_slot18;
            equals = _closure1_slot1;
            variable49 = _closure1_slot2;
            whisks = variable49[whisks];
            equals = equals.bind(report)(whisks);
            whisks = {};
            whisks['scrollTargetRef'] = variable51;
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
            if(!(entity != variable48)) { _fun00006_ip = 2647; continue _fun00005 }
 2644:
            variable47 = variable48;
 2647:
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
 2700:
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
            if(!offset) { _fun00006_ip = 3202; continue _fun00005 }
 2957:
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
 3202:
            verify[1] = offset;
            oscard['children'] = verify;
            oscard = option.bind(report)(golfie, oscard);
            michal['children'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return michal;
 3228:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
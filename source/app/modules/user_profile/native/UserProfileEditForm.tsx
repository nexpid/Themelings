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
            michal = 8;
            michal = report[michal];
            entity = zuuluu.bind(tangon)(michal);
 111:
            sizing = entity;
 114:
            _closure2_slot3 = sizing;
            oscard = _closure1_slot1;
            result = _closure1_slot2;
            entity = 9;
            entity = result[entity];
            michal = oscard.bind(tangon)(entity);
            entity = michal.canUseCollectibles;
            yankee = entity.bind(michal)(output);
            entity = 10;
            michal = result[entity];
            zuuluu = oscard.bind(tangon)(michal);
            michal = 11;
            michal = result[michal];
            michal = oscard.bind(tangon)(michal);
            michal = michal.EDIT_BANNER;
            michal = zuuluu.bind(tangon)(michal);
            report = michal.analyticsLocations;
            _closure2_slot4 = report;
            zuuluu = _closure1_slot13;
            michal = _closure1_slot0;
            entity = result[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.AnalyticsLocationProvider;
            entity = {};
            entity['value'] = report;
            golfie = _closure1_slot13;
            report = 12;
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
            romeon = undefined;
            if(foxtra) { _fun00002_ip = 303; continue _fun00001 }
 299:
            romeon = _closure1_slot15;
 303:
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
    var _closure1_slot16 = entity;
    entity = function(argFoo) { // Original name: UserProfileEditForm
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            target = entity.user;
            foxtra = entity.isTryItOut;
            tangon = undefined;
            if(!(foxtra === tangon)) { _fun00006_ip = 24; continue _fun00005 }
 22:
            foxtra = false;
 24:
            var _closure2_slot0 = foxtra;
            variable47 = entity.autoFocusElement;
            var _closure2_slot1 = variable47;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            var _closure2_slot15 = tangon;
            var _closure2_slot16 = tangon;
            var _closure2_slot17 = tangon;
            var _closure2_slot18 = tangon;
            var _closure2_slot19 = tangon;
            var _closure2_slot20 = tangon;
            var _closure2_slot21 = tangon;
            var _closure2_slot22 = tangon;
            var _closure2_slot23 = tangon;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 19;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            variable40 = entity.bind(tangon)();
            entity = 20;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            variable44 = entity.bind(tangon)();
            _closure2_slot2 = variable44;
            zuuluu = _closure1_slot0;
            entity = 21;
            entity = report[entity];
            option = zuuluu.bind(tangon)(entity);
            golfie = option.useStateFromStoresObject;
            entity = _closure1_slot6;
            oscard = new Array(1);
            oscard[0] = entity;
            entity = function() {
                entity = {};
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.keyboardOpen;
                entity['keyboardOpen'] = zuuluu;
                michal = _closure1_slot6;
                michal = michal.keyboardHeight;
                entity['keyboardHeight'] = michal;
                return entity;
            };
            entity = golfie.bind(option)(oscard, entity);
            yankee = entity.keyboardOpen;
            sizing = entity.keyboardHeight;
            oscard = _closure1_slot3;
            entity = oscard.useRef;
            variable36 = null;
            kiloes = entity.bind(oscard)(variable36);
            _closure2_slot3 = kiloes;
            entity = 22;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            golfie = entity.bottom;
            entity = 23;
            entity = report[entity];
            entity = michal.bind(tangon)(entity);
            entity = entity.bind(tangon)();
            oscard = entity.errors;
            variable48 = entity.isSubmitting;
            _closure2_slot4 = variable48;
            backup = entity.pendingAvatarV2;
            option = entity.pendingAvatarDecoration;
            _closure2_slot5 = option;
            record = entity.pendingBanner;
            option = entity.pendingProfileEffectId;
            _closure2_slot6 = option;
            vacuum = entity.pendingThemeColors;
            _closure2_slot7 = vacuum;
            config = entity.pendingAccentColor;
            ctrled = entity.tryItOutBanner;
            option = entity.tryItOutThemeColors;
            _closure2_slot8 = option;
            variable37 = entity.pendingGlobalName;
            _closure2_slot9 = variable37;
            quebec = entity.pendingPronouns;
            _closure2_slot10 = quebec;
            entity = entity.pendingBio;
            _closure2_slot11 = entity;
            entity = 24;
            entity = report[entity];
            verify = michal.bind(tangon)(entity);
            entity = 'UserProfileEditForm';
            entity = verify.bind(tangon)(entity);
            entity = 25;
            entity = report[entity];
            zuuluu = zuuluu.bind(tangon)(entity);
            entity = zuuluu.useGuildAutomodProfileQuarantineErrors;
            zuuluu = entity.bind(zuuluu)();
            entity = 26;
            entity = report[entity];
            report = michal.bind(tangon)(entity);
            verify = target.id;
            romeon = variable36 != verify;
            entity = '';
            michal = entity;
            if(!romeon) { _fun00006_ip = 478; continue _fun00005 }
 475:
            michal = verify;
 478:
            variable49 = report.bind(tangon)(michal);
            _closure2_slot12 = variable49;
            report = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 27;
            michal = verify[michal];
            romeon = report.bind(tangon)(michal);
            michal = romeon.useCustomStatusActivity;
            variable42 = michal.bind(romeon)();
            michal = 28;
            michal = verify[michal];
            romeon = report.bind(tangon)(michal);
            report = romeon.getPendingAvatarSrc;
            michal = {};
            output = target.id;
            michal['userId'] = output;
            michal['image'] = backup;
            variable45 = report.bind(romeon)(michal);
            _closure2_slot13 = variable45;
            report = _closure1_slot1;
            michal = 9;
            michal = verify[michal];
            report = report.bind(tangon)(michal);
            michal = report.canUsePremiumProfileCustomization;
            verify = michal.bind(report)(target);
            report = variable36 == variable49;
            michal = undefined;
            if(report) { _fun00006_ip = 608; continue _fun00005 }
 596:
            report = variable49.getLegacyUsername;
            michal = report.bind(variable49)();
 608:
            _closure2_slot14 = michal;
            report = target.globalName;
            romeon = variable36 != report;
            michal = entity;
            if(!romeon) { _fun00006_ip = 631; continue _fun00005 }
 628:
            michal = report;
 631:
            _closure2_slot15 = michal;
            report = variable36 == variable49;
            michal = undefined;
            if(report) { _fun00006_ip = 650; continue _fun00005 }
 644:
            michal = variable49.pronouns;
 650:
            report = variable36 != michal;
            equals = entity;
            if(!report) { _fun00006_ip = 663; continue _fun00005 }
 660:
            equals = michal;
 663:
            _closure2_slot16 = equals;
            report = variable36 == variable49;
            michal = undefined;
            if(report) { _fun00006_ip = 682; continue _fun00005 }
 676:
            michal = variable49.bio;
 682:
            report = variable36 != michal;
            if(!report) { _fun00006_ip = 692; continue _fun00005 }
 689:
            entity = michal;
 692:
            _closure2_slot17 = entity;
            michal = _closure1_slot1;
            report = _closure1_slot2;
            entity = 29;
            entity = report[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['user'] = target;
            entity['displayProfile'] = variable49;
            report = vacuum;
            if(!foxtra) { _fun00006_ip = 736; continue _fun00005 }
 733:
            report = option;
 736:
            entity['pendingThemeColors'] = report;
            entity['isPreview'] = foxtra;
            entity = michal.bind(tangon)(entity);
            report = entity.theme;
            variable41 = entity.primaryColor;
            cntext = entity.secondaryColor;
            michal = _closure1_slot0;
            option = _closure1_slot2;
            entity = 30;
            entity = option[entity];
            option = michal.bind(tangon)(entity);
            michal = option.useUserProfileColors;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable41;
            entity['secondaryColor'] = cntext;
            entity = michal.bind(option)(entity);
            status = entity.gradientFallbackBackground;
            update = entity.gradientSecondaryBackground;
            whisks = entity.containerBackground;
            _closure2_slot18 = whisks;
            entity = entity.avatarBackground;
            variable43 = 0;
            michal = 0;
            if(verify) { _fun00006_ip = 856; continue _fun00005 }
 852:
            michal = _closure1_slot7;
 856:
            limora = golfie + michal;
            variable46 = {};
            variable46['backgroundColor'] = entity;
            michal = variable36 == oscard;
            entity = undefined;
            if(michal) { _fun00006_ip = 893; continue _fun00005 }
 875:
            michal = oscard.username;
            golfie = variable36 == michal;
            entity = undefined;
            if(golfie) { _fun00006_ip = 893; continue _fun00005 }
 889:
            entity = michal[variable43];
 893:
            if(!(variable36 == entity)) { _fun00006_ip = 919; continue _fun00005 }
 897:
            golfie = oscard.global_name;
            option = variable36 == golfie;
            michal = undefined;
            if(option) { _fun00006_ip = 916; continue _fun00005 }
 912:
            michal = golfie[variable43];
 916:
            entity = michal;
 919:
            if(!(variable36 == entity)) { _fun00006_ip = 954; continue _fun00005 }
 923:
            golfie = variable36 == zuuluu;
            michal = undefined;
            if(golfie) { _fun00006_ip = 951; continue _fun00005 }
 932:
            zuuluu = zuuluu.nick;
            golfie = variable36 == zuuluu;
            michal = undefined;
            if(golfie) { _fun00006_ip = 951; continue _fun00005 }
 947:
            michal = zuuluu[variable43];
 951:
            entity = michal;
 954:
            _closure2_slot19 = entity;
            michal = oscard.pronouns;
            zuuluu = variable36 == michal;
            entity = undefined;
            if(zuuluu) { _fun00006_ip = 977; continue _fun00005 }
 973:
            entity = michal[variable43];
 977:
            _closure2_slot20 = entity;
            entity = oscard.bio;
            zuuluu = variable36 == entity;
            michal = undefined;
            if(zuuluu) { _fun00006_ip = 1000; continue _fun00005 }
 996:
            michal = entity[variable43];
 1000:
            _closure2_slot21 = michal;
            entity = global;
            zuuluu = entity.Object;
            entity = zuuluu.keys;
            entity = entity.bind(zuuluu)(oscard);
            entity = entity.length;
            zuuluu = entity > variable43;
            entity = null;
            if(!zuuluu) { _fun00006_ip = 1102; continue _fun00005 }
 1036:
            michal = variable36 == michal;
            entity = null;
            if(!michal) { _fun00006_ip = 1102; continue _fun00005 }
 1045:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            michal = 18;
            zuuluu = option[michal];
            zuuluu = golfie.bind(tangon)(zuuluu);
            oscard = zuuluu.intl;
            zuuluu = oscard.string;
            michal = option[michal];
            michal = golfie.bind(tangon)(michal);
            michal = michal.t;
            michal = michal.84MExs;
            entity = zuuluu.bind(oscard)(michal);
 1102:
            _closure2_slot22 = entity;
            entity = function() { // Original name: handleBlur
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot3;
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
            _closure2_slot23 = entity;
            zuuluu = _closure1_slot13;
            romeon = _closure1_slot0;
            variable38 = _closure1_slot2;
            entity = 32;
            entity = variable38[entity];
            entity = romeon.bind(tangon)(entity);
            michal = entity.ThemeContextProvider;
            entity = {};
            entity['theme'] = report;
            entity['primaryColor'] = variable41;
            entity['secondaryColor'] = cntext;
            golfie = _closure1_slot14;
            oscard = _closure1_slot4;
            report = {};
            backup = variable44.container;
            option = new Array(2);
            option[0] = backup;
            backup = {};
            backup['backgroundColor'] = update;
            option[1] = backup;
            report['style'] = option;
            backup = _closure1_slot14;
            option = 33;
            option = variable38[option];
            option = romeon.bind(tangon)(option);
            romeon = option.KeyboardAwareScrollView;
            option = {'enableOnAndroid': true, 'enableAutomaticScroll': true, 'extraHeight': null, 'keyboardOpeningTime': null, 'scrollsToTop': false};
            variable39 = true;
            option['extraHeight'] = sizing;
            sizing = _closure1_slot11;
            option['keyboardOpeningTime'] = sizing;
            option['ref'] = kiloes;
            output = _closure1_slot13;
            sizing = _closure1_slot4;
            kiloes = {};
            result = variable44.bounceOffset;
            kiloes['style'] = result;
            sizing = output.bind(tangon)(sizing, kiloes);
            kiloes = new Array(2);
            kiloes[0] = sizing;
            result = _closure1_slot14;
            sierra = _closure1_slot1;
            sequen = 34;
            sizing = variable38[sequen];
            output = sierra.bind(tangon)(sizing);
            sizing = {};
            sizing['fallbackBackground'] = status;
            sizing['primaryColor'] = variable41;
            sizing['secondaryColor'] = cntext;
            echoed = {};
            echoed['backgroundColor'] = update;
            sizing['containerStyle'] = echoed;
            source = _closure1_slot13;
            update = _closure1_slot16;
            echoed = {};
            echoed['user'] = target;
            echoed['displayProfile'] = variable49;
            echoed['pendingAvatarSrc'] = variable45;
            echoed['pendingBanner'] = record;
            echoed['pendingAccentColor'] = config;
            echoed['pendingThemeColors'] = vacuum;
            echoed['tryItOutBanner'] = ctrled;
            echoed['isTryItOut'] = foxtra;
            echoed['disabled'] = variable48;
            update = source.bind(tangon)(update, echoed);
            echoed = new Array(2);
            echoed[0] = update;
            ctrled = _closure1_slot14;
            source = _closure1_slot4;
            update = {};
            config = _closure1_slot13;
            vacuum = {};
            variable45 = variable40.avatarBackground;
            record = new Array(4);
            record[0] = variable45;
            variable45 = variable40.avatarPosition;
            record[1] = variable45;
            variable44 = variable44.avatarContainer;
            record[2] = variable44;
            record[3] = variable46;
            vacuum['style'] = record;
            variable45 = _closure1_slot13;
            record = 35;
            record = variable38[record];
            variable44 = sierra.bind(tangon)(record);
            record = {};
            record['user'] = target;
            record['disabled'] = variable48;
            variable48 = variable36 != foxtra;
            record['disableStatus'] = variable48;
            record['statusStyle'] = variable46;
            record['isTryItOut'] = foxtra;
            variable46 = _closure1_slot12;
            variable46 = variable46.AVATAR;
            variable46 = variable47 === variable46;
            record['autoStartEditFlow'] = variable46;
            record = variable45.bind(tangon)(variable44, record);
            vacuum['children'] = record;
            config = config.bind(tangon)(source, vacuum);
            vacuum = new Array(2);
            vacuum[0] = config;
            record = _closure1_slot14;
            sequen = variable38[sequen];
            config = sierra.bind(tangon)(sequen);
            sequen = {};
            sequen['fallbackBackground'] = status;
            sequen['primaryColor'] = variable41;
            sequen['secondaryColor'] = cntext;
            status = variable40.profileContent;
            cntext = new Array(2);
            cntext[0] = status;
            status = {};
            status['paddingTop'] = variable43;
            status['paddingBottom'] = limora;
            cntext[1] = status;
            sequen['containerStyle'] = cntext;
            limora = _closure1_slot13;
            cntext = 36;
            cntext = variable38[cntext];
            status = sierra.bind(tangon)(cntext);
            cntext = {};
            cntext['customStatusActivity'] = variable42;
            variable41 = variable36 != variable41;
            cntext['hasCustomProfileTheme'] = variable41;
            variable41 = variable40.customStatusBubble;
            cntext['style'] = variable41;
            variable40 = variable40.emojiOnlyCustomStatusBubble;
            cntext['emojiOnlyStyle'] = variable40;
            cntext['editEnabled'] = variable39;
            status = limora.bind(tangon)(status, cntext);
            cntext = new Array(3);
            cntext[0] = status;
            limora = _closure1_slot13;
            status = 37;
            status = variable38[status];
            sierra = sierra.bind(tangon)(status);
            status = {};
            status['user'] = target;
            status['displayName'] = variable37;
            if(!(variable36 != quebec)) { _fun00006_ip = 1724; continue _fun00005 }
 1721:
            equals = quebec;
 1724:
            status['pronouns'] = equals;
            status['badgeContainerBackground'] = whisks;
            status = limora.bind(tangon)(sierra, status);
            cntext[1] = status;
            papara = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    romeon = argFoo;
                    var _closure3_slot0 = romeon;
                    tangon = _closure1_slot14;
                    zuuluu = _closure1_slot4;
                    michal = {};
                    entity = _closure2_slot2;
                    report = entity.formContainer;
                    entity = new Array(2);
                    entity[0] = report;
                    report = {};
                    oscard = _closure2_slot18;
                    report['backgroundColor'] = oscard;
                    entity[1] = report;
                    michal['style'] = entity;
                    entity = _closure2_slot22;
                    option = null;
                    report = option != entity;
                    entity = null;
                    if(!report) { _fun00010_ip = 183; continue _fun00009 }
 76:
                    oscard = _closure2_slot22;
                    report = '';
                    entity = null;
                    if(!(report !== oscard)) { _fun00010_ip = 183; continue _fun00009 }
 90:
                    yankee = _closure1_slot13;
                    verify = _closure1_slot4;
                    oscard = {};
                    report = _closure2_slot2;
                    report = report.errorContainer;
                    oscard['style'] = report;
                    sizing = _closure1_slot13;
                    kiloes = _closure1_slot0;
                    backup = _closure1_slot2;
                    report = 31;
                    backup = backup[report];
                    report = undefined;
                    backup = kiloes.bind(report)(backup);
                    kiloes = backup.Text;
                    backup = {'variant': 'text-sm/bold', 'color': 'status-danger'};
                    output = _closure2_slot22;
                    backup['children'] = output;
                    backup = sizing.bind(report)(kiloes, backup);
                    oscard['children'] = backup;
                    entity = yankee.bind(report)(verify, oscard);
 183:
                    report = new Array(10);
                    report[0] = entity;
                    backup = _closure1_slot13;
                    yankee = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    oscard = 38;
                    verify = kiloes[oscard];
                    entity = undefined;
                    yankee = yankee.bind(entity)(verify);
                    verify = {};
                    echoed = _closure1_slot0;
                    result = 18;
                    sizing = kiloes[result];
                    sizing = echoed.bind(entity)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = kiloes[result];
                    kiloes = echoed.bind(entity)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.9AjdkJ;
                    kiloes = sizing.bind(output)(kiloes);
                    verify['label'] = kiloes;
                    kiloes = _closure2_slot19;
                    verify['errorMessage'] = kiloes;
                    kiloes = _closure2_slot9;
                    if(!(option == kiloes)) { _fun00010_ip = 297; continue _fun00009 }
 291:
                    kiloes = _closure2_slot15;
                    _fun00010_ip = 301; continue _fun00009;
 297:
                    kiloes = _closure2_slot9;
 301:
                    verify['value'] = kiloes;
                    kiloes = function(argFoo) { // Original name: onChange
                        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                            entity = argFoo;
                            michal = '';
                            if(!(michal === entity)) { _fun00012_ip = 35; continue _fun00011 }
 11:
                            michal = _closure3_slot0;
                            zuuluu = michal.globalName;
                            michal = null;
                            michal = michal == zuuluu;
                            report = undefined;
                            if(michal) { _fun00012_ip = 38; continue _fun00011 }
 35:
                            report = entity;
 38:
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 39;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.setPendingGlobalNameName;
                            michal = _closure3_slot0;
                            oscard = michal.globalName;
                            michal = undefined;
                            if(!(report !== oscard)) { _fun00012_ip = 91; continue _fun00011 }
 88:
                            michal = report;
 91:
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    verify['onChange'] = kiloes;
                    kiloes = romeon.toString;
                    kiloes = kiloes.bind(romeon)();
                    verify['placeholder'] = kiloes;
                    kiloes = _closure1_slot9;
                    verify['maxLength'] = kiloes;
                    kiloes = _closure2_slot4;
                    verify['disabled'] = kiloes;
                    kiloes = _closure2_slot23;
                    verify['onBlur'] = kiloes;
                    verify = backup.bind(entity)(yankee, verify);
                    report[1] = verify;
                    backup = _closure1_slot13;
                    yankee = _closure1_slot1;
                    kiloes = _closure1_slot2;
                    verify = kiloes[oscard];
                    yankee = yankee.bind(entity)(verify);
                    verify = {};
                    echoed = _closure1_slot0;
                    sizing = kiloes[result];
                    sizing = echoed.bind(entity)(sizing);
                    output = sizing.intl;
                    sizing = output.string;
                    kiloes = kiloes[result];
                    kiloes = echoed.bind(entity)(kiloes);
                    kiloes = kiloes.t;
                    kiloes = kiloes.+T3RIy;
                    kiloes = sizing.bind(output)(kiloes);
                    verify['label'] = kiloes;
                    kiloes = _closure2_slot20;
                    verify['errorMessage'] = kiloes;
                    kiloes = _closure2_slot10;
                    if(!(option == kiloes)) { _fun00010_ip = 465; continue _fun00009 }
 459:
                    kiloes = _closure2_slot16;
                    _fun00010_ip = 469; continue _fun00009;
 465:
                    kiloes = _closure2_slot10;
 469:
                    verify['value'] = kiloes;
                    kiloes = function(argFoo) { // Original name: onChange
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.setNewPendingUserPronouns;
                        michal = _closure2_slot16;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    verify['onChange'] = kiloes;
                    kiloes = _closure1_slot10;
                    verify['maxLength'] = kiloes;
                    kiloes = _closure2_slot4;
                    verify['disabled'] = kiloes;
                    kiloes = _closure2_slot23;
                    verify['onBlur'] = kiloes;
                    verify = backup.bind(entity)(yankee, verify);
                    report[2] = verify;
                    yankee = _closure1_slot13;
                    verify = _closure1_slot1;
                    backup = _closure1_slot2;
                    oscard = backup[oscard];
                    verify = verify.bind(entity)(oscard);
                    oscard = {};
                    output = _closure1_slot0;
                    kiloes = backup[result];
                    kiloes = output.bind(entity)(kiloes);
                    sizing = kiloes.intl;
                    kiloes = sizing.string;
                    backup = backup[result];
                    backup = output.bind(entity)(backup);
                    backup = backup.t;
                    backup = backup.NepzEx;
                    backup = kiloes.bind(sizing)(backup);
                    oscard['label'] = backup;
                    backup = _closure2_slot21;
                    oscard['errorMessage'] = backup;
                    backup = _closure2_slot11;
                    if(!(option == backup)) { _fun00010_ip = 619; continue _fun00009 }
 613:
                    backup = _closure2_slot17;
                    _fun00010_ip = 623; continue _fun00009;
 619:
                    backup = _closure2_slot11;
 623:
                    oscard['value'] = backup;
                    foxtra = function(argFoo) { // Original name: onChange
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.setNewPendingUserBio;
                        michal = _closure2_slot17;
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(entity, michal);
                        return entity;
                    };
                    oscard['onChange'] = foxtra;
                    backup = _closure2_slot1;
                    foxtra = _closure1_slot12;
                    foxtra = foxtra.BIO;
                    foxtra = backup === foxtra;
                    oscard['autoFocus'] = foxtra;
                    foxtra = _closure1_slot8;
                    oscard['maxLength'] = foxtra;
                    foxtra = 5;
                    oscard['numberOfLines'] = foxtra;
                    foxtra = true;
                    oscard['multiline'] = foxtra;
                    foxtra = _closure2_slot4;
                    oscard['disabled'] = foxtra;
                    foxtra = _closure2_slot23;
                    oscard['onBlur'] = foxtra;
                    oscard = yankee.bind(entity)(verify, oscard);
                    report[3] = oscard;
                    yankee = _closure1_slot13;
                    verify = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    oscard = 40;
                    oscard = foxtra[oscard];
                    verify = verify.bind(entity)(oscard);
                    oscard = {};
                    oscard['user'] = romeon;
                    foxtra = _closure2_slot0;
                    kiloes = _closure1_slot0;
                    sizing = _closure1_slot2;
                    backup = 16;
                    backup = sizing[backup];
                    backup = kiloes.bind(entity)(backup);
                    if(foxtra) { _fun00010_ip = 778; continue _fun00009 }
 770:
                    foxtra = backup.setPendingThemeColors;
                    _fun00010_ip = 784; continue _fun00009;
 778:
                    foxtra = backup.setTryItOutThemeColors;
 784:
                    oscard['onProfileThemeColorsChanged'] = foxtra;
                    foxtra = _closure2_slot13;
                    oscard['pendingAvatarSrc'] = foxtra;
                    foxtra = _closure2_slot0;
                    if(foxtra) { _fun00010_ip = 811; continue _fun00009 }
 805:
                    foxtra = _closure2_slot7;
                    _fun00010_ip = 815; continue _fun00009;
 811:
                    foxtra = _closure2_slot8;
 815:
                    oscard['pendingThemeColors'] = foxtra;
                    foxtra = _closure2_slot0;
                    oscard['isTryItOut'] = foxtra;
                    oscard = yankee.bind(entity)(verify, oscard);
                    report[4] = oscard;
                    backup = _closure1_slot13;
                    verify = _closure1_slot1;
                    foxtra = _closure1_slot2;
                    oscard = 41;
                    oscard = foxtra[oscard];
                    yankee = verify.bind(entity)(oscard);
                    oscard = {};
                    oscard['user'] = romeon;
                    kiloes = _closure2_slot5;
                    oscard['pendingAvatarDecoration'] = kiloes;
                    oscard = backup.bind(entity)(yankee, oscard);
                    report[5] = oscard;
                    backup = _closure1_slot13;
                    oscard = 42;
                    oscard = foxtra[oscard];
                    yankee = verify.bind(entity)(oscard);
                    oscard = {};
                    oscard['user'] = romeon;
                    kiloes = _closure2_slot6;
                    oscard['pendingProfileEffectId'] = kiloes;
                    kiloes = _closure2_slot12;
                    oscard['displayProfile'] = kiloes;
                    oscard = backup.bind(entity)(yankee, oscard);
                    report[6] = oscard;
                    backup = _closure1_slot13;
                    oscard = 43;
                    oscard = foxtra[oscard];
                    yankee = verify.bind(entity)(oscard);
                    oscard = {};
                    oscard['user'] = romeon;
                    oscard = backup.bind(entity)(yankee, oscard);
                    report[7] = oscard;
                    yankee = _closure1_slot13;
                    oscard = 44;
                    oscard = foxtra[oscard];
                    verify = verify.bind(entity)(oscard);
                    oscard = {};
                    oscard['user'] = romeon;
                    romeon = _closure2_slot4;
                    oscard['disabled'] = romeon;
                    romeon = {};
                    foxtra = _closure2_slot18;
                    romeon['backgroundColor'] = foxtra;
                    oscard['tagStyle'] = romeon;
                    oscard = yankee.bind(entity)(verify, oscard);
                    report[8] = oscard;
                    oscard = _closure2_slot14;
                    oscard = option != oscard;
                    if(!oscard) { _fun00010_ip = 1077; continue _fun00009 }
 1036:
                    verify = _closure1_slot13;
                    option = _closure1_slot1;
                    yankee = _closure1_slot2;
                    golfie = 45;
                    golfie = yankee[golfie];
                    option = option.bind(entity)(golfie);
                    golfie = {};
                    offset = _closure2_slot14;
                    golfie['legacyUsername'] = offset;
                    oscard = verify.bind(entity)(option, golfie);
 1077:
                    report[9] = oscard;
                    michal['children'] = report;
                    entity = tangon.bind(entity)(zuuluu, michal);
                    return entity;
                }
            };
            papara = papara.bind(tangon)(target);
            cntext[2] = papara;
            sequen['children'] = cntext;
            sequen = record.bind(tangon)(config, sequen);
            vacuum[1] = sequen;
            update['children'] = vacuum;
            update = ctrled.bind(tangon)(source, update);
            echoed[1] = update;
            sizing['children'] = echoed;
            sizing = result.bind(tangon)(output, sizing);
            kiloes[1] = sizing;
            option['children'] = kiloes;
            romeon = backup.bind(tangon)(romeon, option);
            option = new Array(2);
            option[0] = romeon;
            verify = !verify;
            if(!verify) { _fun00006_ip = 1829; continue _fun00005 }
 1826:
            verify = !yankee;
 1829:
            if(!verify) { _fun00006_ip = 1875; continue _fun00005 }
 1832:
            romeon = _closure1_slot13;
            yankee = _closure1_slot0;
            backup = _closure1_slot2;
            offset = 46;
            offset = backup[offset];
            offset = yankee.bind(tangon)(offset);
            yankee = offset.UserProfilePremiumUpsellCard;
            offset = {};
            offset['isTryItOut'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 1875:
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.FLOATING_UPSELL_HEIGHT;
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.BIO_MAX_LENGTH;
    var _closure1_slot8 = golfie;
    golfie = tangon.DISPLAY_NAME_MAX_LENGTH;
    var _closure1_slot9 = golfie;
    tangon = tangon.PRONOUNS_MAX_LENGTH;
    var _closure1_slot10 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.KEYBOARD_DELAY_MS;
    var _closure1_slot11 = golfie;
    tangon = tangon.UserProfileEditAutoFocusElement;
    var _closure1_slot12 = tangon;
    tangon = 7;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot13 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot14 = tangon;
    tangon = 12;
    var _closure1_slot15 = tangon;
    tangon = 48;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/native/UserProfileEditForm.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ConnectedUserProfileEditForm
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            zuuluu = 21;
            zuuluu = report[zuuluu];
            report = undefined;
            golfie = tangon.bind(report)(zuuluu);
            oscard = golfie.useStateFromStores;
            zuuluu = _closure1_slot5;
            tangon = new Array(1);
            tangon[0] = zuuluu;
            zuuluu = function() {
                michal = _closure1_slot5;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            oscard = oscard.bind(golfie)(tangon, zuuluu);
            var _closure2_slot0 = oscard;
            golfie = _closure1_slot3;
            tangon = golfie.useEffect;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            entity = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00016_ip = 58; continue _fun00015 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 47;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.fetchProfile;
                    entity = _closure2_slot0;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 58:
                    entity = undefined;
                    return entity;
                }
            };
            entity = tangon.bind(golfie)(entity, zuuluu);
            entity = null;
            zuuluu = entity == oscard;
            if(zuuluu) { _fun00014_ip = 130; continue _fun00013 }
 100:
            tangon = _closure1_slot13;
            zuuluu = _closure1_slot17;
            michal = {};
            michal['user'] = oscard;
            verify = argFoo;
            offset = michal;
            oscard = copyDataProperties(offset, verify);
            entity = tangon.bind(report)(zuuluu, michal);
 130:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
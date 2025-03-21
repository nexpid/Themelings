// app/modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: ActivityActionOverlay
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            golfie = entity.action;
            verify = entity.applicationId;
            foxtra = entity.context;
            michal = entity.activityItem;
            option = entity.launchingComponentId;
            report = _closure1_slot1;
            entity = _closure1_slot2;
            zuuluu = 9;
            zuuluu = entity[zuuluu];
            tangon = undefined;
            report = report.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['applicationId'] = verify;
            zuuluu['context'] = foxtra;
            zuuluu['launchingComponentId'] = option;
            zuuluu = report.bind(tangon)(zuuluu);
            verify = zuuluu.submitting;
            zuuluu = _closure1_slot10;
            backup = zuuluu.bind(tangon)();
            michal = michal.application;
            yankee = michal.id;
            offset = michal.name;
            michal = _closure1_slot0;
            romeon = 10;
            entity = entity[romeon];
            entity = michal.bind(tangon)(entity);
            entity = entity.ActivityAction;
            entity = entity.JOIN;
            if(!(entity !== golfie)) { _fun00002_ip = 173; continue _fun00001 }
 136:
            michal = _closure1_slot0;
            entity = _closure1_slot2;
            entity = entity[romeon];
            entity = michal.bind(tangon)(entity);
            entity = entity.ActivityAction;
            entity = entity.LEAVE;
            if(!(entity !== golfie)) { _fun00002_ip = 173; continue _fun00001 }
 169:
            entity = null;
            return entity;
 173:
            zuuluu = _closure1_slot9;
            michal = _closure1_slot8;
            entity = {};
            option = _closure1_slot0;
            report = _closure1_slot2;
            report = report[romeon];
            report = option.bind(tangon)(report);
            report = report.ActivityAction;
            report = report.LEAVE;
            golfie = golfie === report;
            if(!golfie) { _fun00002_ip = 261; continue _fun00001 }
 219:
            romeon = _closure1_slot7;
            option = _closure1_slot1;
            kiloes = _closure1_slot2;
            report = 11;
            report = kiloes[report];
            option = option.bind(tangon)(report);
            report = {};
            backup = backup.ongoingActivityJoinedContainer;
            report['style'] = backup;
            golfie = romeon.bind(tangon)(option, report);
 261:
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot7;
            golfie = _closure1_slot1;
            romeon = _closure1_slot2;
            oscard = 12;
            oscard = romeon[oscard];
            golfie = golfie.bind(tangon)(oscard);
            oscard = {};
            kiloes = foxtra.type;
            backup = 'channel';
            romeon = undefined;
            if(!(backup === kiloes)) { _fun00002_ip = 320; continue _fun00001 }
 310:
            foxtra = foxtra.channel;
            romeon = foxtra.id;
 320:
            oscard['channelId'] = romeon;
            oscard['applicationId'] = yankee;
            oscard['applicationName'] = offset;
            oscard['submitting'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: ParticipantsText
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            romeon = entity.action;
            foxtra = entity.activityItem;
            oscard = entity.channelId;
            report = entity.guildId;
            entity = _closure1_slot10;
            tangon = undefined;
            verify = entity.bind(tangon)();
            michal = _closure1_slot1;
            zuuluu = _closure1_slot2;
            entity = 24;
            entity = zuuluu[entity];
            golfie = michal.bind(tangon)(entity);
            entity = foxtra.application;
            entity = entity.id;
            result = golfie.bind(tangon)(entity, oscard);
            entity = 25;
            entity = zuuluu[entity];
            zuuluu = michal.bind(tangon)(entity);
            michal = zuuluu.getName;
            offset = null;
            golfie = offset == result;
            entity = undefined;
            if(golfie) { _fun00004_ip = 108; continue _fun00003 }
 102:
            golfie = 0;
            entity = result[golfie];
 108:
            output = michal.bind(zuuluu)(report, oscard, entity);
            zuuluu = _closure1_slot9;
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            entity = 11;
            entity = kiloes[entity];
            michal = backup.bind(tangon)(entity);
            entity = {};
            oscard = verify.participantsContainer;
            report = new Array(2);
            report[0] = oscard;
            oscard = verify.overlayBubble;
            report[1] = oscard;
            entity['style'] = report;
            golfie = _closure1_slot7;
            option = 22;
            report = kiloes[option];
            oscard = backup.bind(tangon)(report);
            report = {};
            sizing = 26;
            sizing = kiloes[sizing];
            sizing = backup.bind(tangon)(sizing);
            report['source'] = sizing;
            option = kiloes[option];
            option = backup.bind(tangon)(option);
            option = option.Sizes;
            option = option.EXTRA_SMALL;
            report['size'] = option;
            option = 'white';
            report['color'] = option;
            oscard = golfie.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot7;
            backup = _closure1_slot0;
            oscard = 27;
            oscard = kiloes[oscard];
            oscard = backup.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {'lineClamp': 1, 'style': null, 'variant': 'text-xxs/medium', 'color': 'always-white'};
            echoed = 1;
            verify = verify.participantsText;
            oscard['style'] = verify;
            verify = 10;
            verify = kiloes[verify];
            verify = backup.bind(tangon)(verify);
            verify = verify.ActivityAction;
            verify = verify.START;
            if(!(romeon !== verify)) { _fun00004_ip = 421; continue _fun00003 }
 332:
            romeon = result.length;
            verify = output;
            if(!(!(romeon <= echoed))) { _fun00004_ip = 419; continue _fun00003 }
 344:
            backup = _closure1_slot0;
            update = _closure1_slot2;
            romeon = 29;
            kiloes = update[romeon];
            kiloes = backup.bind(tangon)(kiloes);
            sizing = kiloes.intl;
            kiloes = sizing.formatToPlainString;
            romeon = update[romeon];
            romeon = backup.bind(tangon)(romeon);
            romeon = romeon.t;
            backup = romeon.cpe6CA;
            romeon = {};
            result = result.length;
            result = result - echoed;
            romeon['count'] = result;
            romeon['username'] = output;
            verify = kiloes.bind(sizing)(backup, romeon);
 419:
            _fun00004_ip = 475; continue _fun00003;
 421:
            romeon = _closure1_slot0;
            backup = _closure1_slot2;
            yankee = 28;
            yankee = backup[yankee];
            romeon = romeon.bind(tangon)(yankee);
            yankee = romeon.getItemSubtitleForMaxPlayersShort;
            foxtra = foxtra.application;
            foxtra = foxtra.maxParticipants;
            backup = offset != foxtra;
            offset = 0;
            if(!backup) { _fun00004_ip = 470; continue _fun00003 }
 467:
            offset = foxtra;
 470:
            verify = yankee.bind(romeon)(offset);
 475:
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = yankee.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ANDROID_FOREGROUND_RIPPLE;
    var _closure1_slot6 = tangon;
    tangon = 4;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot7 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot8 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot9 = tangon;
    romeon = 5;
    tangon = oscard[romeon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AvatarSizes;
    foxtra = tangon.SIZE_16;
    tangon = 6;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'borderRadius': null, 'overflow': 'hidden', 'height': 120, 'position': 'relative', 'backgroundColor': 'black', 'justifyContent': 'center'};
    offset = 7;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.md;
    verify['borderRadius'] = backup;
    tangon['container'] = verify;
    verify = {'alignItems': 'center', 'justifyContent': 'center', 'backgroundColor': 'black'};
    tangon['imageInnerContainer'] = verify;
    verify = {'justifyContent': 'center', 'alignItems': 'center'};
    tangon['imageOuterContainer'] = verify;
    verify = {'position': 'absolute', 'width': '100%', 'height': '100%', 'backgroundColor': 'rgba(255,255,255,0.5)', 'zIndex': 1};
    tangon['ongoingActivityJoinedContainer'] = verify;
    verify = {};
    backup = 8;
    backup = oscard[backup];
    output = report.bind(entity)(backup);
    sizing = output.hexWithOpacity;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.unsafe_rawColors;
    kiloes = backup.BLACK_500;
    backup = 0.5;
    backup = sizing.bind(output)(kiloes, backup);
    verify['backgroundColor'] = backup;
    backup = oscard[offset];
    backup = yankee.bind(entity)(backup);
    backup = backup.radii;
    backup = backup.round;
    verify['borderRadius'] = backup;
    tangon['overlayBubble'] = verify;
    backup = 20;
    verify = {'paddingHorizontal': 8, 'position': 'absolute', 'left': 8, 'bottom': 8, 'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'height': 20};
    tangon['participantsContainer'] = verify;
    verify = {'marginLeft': 4, 'lineHeight': 20};
    tangon['participantsText'] = verify;
    verify = {};
    verify['height'] = backup;
    tangon['participants'] = verify;
    verify = {};
    romeon = oscard[romeon];
    romeon = report.bind(entity)(romeon);
    romeon = romeon.AVATAR_SIZE_MAP;
    romeon = romeon[foxtra];
    verify['height'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.BACKGROUND_SECONDARY_ALT;
    verify['backgroundColor'] = romeon;
    tangon['overflow'] = verify;
    verify = {'paddingVertical': 2, 'paddingHorizontal': 4, 'position': 'absolute', 'top': 8, 'right': 8};
    tangon['premiumLockedActivityIndicator'] = verify;
    verify = {'position': 'absolute', 'top': 4, 'right': 4, 'width': 22, 'height': 22, 'borderRadius': null, 'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.md;
    verify['borderRadius'] = romeon;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.colors;
    romeon = romeon.ACTIVITY_CARD_ICON_OVERLAY;
    verify['backgroundColor'] = romeon;
    tangon['developerIconContainer'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.colors;
    offset = offset.WHITE;
    verify['color'] = offset;
    tangon['developerIconColor'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 30;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/controls/activities/ActivityShelfItem.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ActivityShelfItem
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.itemDimensions;
            offset = michal.activityItem;
            var _closure2_slot0 = offset;
            cntext = michal.context;
            sizing = michal.guildId;
            kiloes = michal.locationObject;
            romeon = michal.onActivityItemSelected;
            michal = michal.disableBadges;
            tangon = undefined;
            if(!(michal === tangon)) { _fun00006_ip = 57; continue _fun00005 }
 55:
            michal = false;
 57:
            var _closure2_slot1 = tangon;
            report = _closure1_slot10;
            ctrled = report.bind(tangon)();
            oscard = cntext.type;
            yankee = null;
            report = 'channel';
            backup = null;
            if(!(report === oscard)) { _fun00006_ip = 94; continue _fun00005 }
 89:
            backup = cntext.channel;
 94:
            papara = zuuluu.width;
            config = zuuluu.height;
            oscard = _closure1_slot1;
            foxtra = _closure1_slot2;
            zuuluu = 13;
            zuuluu = foxtra[zuuluu];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.bind(tangon)();
            option = papara * zuuluu;
            report = _closure1_slot3;
            zuuluu = report.useId;
            record = zuuluu.bind(report)();
            verify = 10;
            zuuluu = foxtra[verify];
            report = oscard.bind(tangon)(zuuluu);
            zuuluu = {};
            zuuluu['activityItem'] = offset;
            zuuluu['context'] = cntext;
            zuuluu['guildId'] = sizing;
            zuuluu['locationObject'] = kiloes;
            zuuluu['onActivityItemSelected'] = romeon;
            romeon = 14;
            romeon = foxtra[romeon];
            romeon = oscard.bind(tangon)(romeon);
            zuuluu['embeddedActivitiesManager'] = romeon;
            zuuluu['backgroundResolution'] = option;
            romeon = ['embedded_cover'];
            zuuluu['assetNames'] = romeon;
            zuuluu['launchingComponentId'] = record;
            kiloes = _closure1_slot0;
            romeon = 15;
            romeon = foxtra[romeon];
            romeon = kiloes.bind(tangon)(romeon);
            romeon = romeon.CommandOrigin;
            romeon = romeon.VOICE_UI;
            zuuluu['commandOrigin'] = romeon;
            zuuluu = report.bind(tangon)(zuuluu);
            status = zuuluu.imageBackground;
            romeon = zuuluu.activityAction;
            report = zuuluu.onActivityItemSelected;
            source = zuuluu.labelType;
            zuuluu = 16;
            zuuluu = foxtra[zuuluu];
            oscard = oscard.bind(tangon)(zuuluu);
            zuuluu = {};
            foxtra = offset.application;
            foxtra = foxtra.id;
            zuuluu['applicationId'] = foxtra;
            zuuluu['size'] = option;
            option = ['embedded_background'];
            zuuluu['names'] = option;
            target = oscard.bind(tangon)(zuuluu);
            result = !michal;
            if(!result) { _fun00006_ip = 417; continue _fun00005 }
 342:
            oscard = _closure1_slot0;
            michal = _closure1_slot2;
            zuuluu = michal[verify];
            zuuluu = oscard.bind(tangon)(zuuluu);
            zuuluu = zuuluu.ActivityAction;
            option = zuuluu.LEAVE;
            zuuluu = new Array(2);
            zuuluu[0] = option;
            michal = michal[verify];
            michal = oscard.bind(tangon)(michal);
            michal = michal.ActivityAction;
            michal = michal.JOIN;
            zuuluu[1] = michal;
            michal = zuuluu.includes;
            michal = michal.bind(zuuluu)(romeon);
            result = !michal;
 417:
            _closure2_slot1 = result;
            limora = _closure1_slot0;
            sierra = _closure1_slot2;
            michal = 17;
            michal = sierra[michal];
            option = limora.bind(tangon)(michal);
            oscard = option.useStateFromStores;
            michal = _closure1_slot4;
            zuuluu = new Array(2);
            zuuluu[0] = michal;
            michal = _closure1_slot5;
            zuuluu[1] = michal;
            michal = offset.application;
            foxtra = michal.id;
            michal = new Array(2);
            michal[0] = foxtra;
            michal[1] = result;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    entity = _closure2_slot1;
                    if(!entity) { _fun00008_ip = 77; continue _fun00007 }
 10:
                    oscard = _closure1_slot4;
                    report = oscard.inDevModeForApplication;
                    michal = _closure2_slot0;
                    michal = michal.application;
                    michal = michal.id;
                    michal = report.bind(oscard)(michal);
                    if(michal) { _fun00008_ip = 74; continue _fun00007 }
 45:
                    report = _closure1_slot5;
                    tangon = report.inTestModeForApplication;
                    zuuluu = _closure2_slot0;
                    zuuluu = zuuluu.application;
                    zuuluu = zuuluu.id;
                    michal = tangon.bind(report)(zuuluu);
 74:
                    entity = michal;
 77:
                    return entity;
                }
            };
            output = oscard.bind(option)(zuuluu, entity, michal);
            zuuluu = _closure1_slot9;
            entity = 18;
            entity = sierra[entity];
            entity = limora.bind(tangon)(entity);
            michal = entity.PressableOpacity;
            entity = {};
            oscard = 0.7;
            entity['activeOpacity'] = oscard;
            entity['onPress'] = report;
            report = sierra[verify];
            report = limora.bind(tangon)(report);
            report = report.ActivityAction;
            report = report.LEAVE;
            report = romeon === report;
            entity['disabled'] = report;
            report = _closure1_slot6;
            entity['androidRippleConfig'] = report;
            oscard = ctrled.container;
            report = new Array(2);
            report[0] = oscard;
            oscard = {};
            oscard['width'] = papara;
            oscard['height'] = config;
            report[1] = oscard;
            entity['style'] = report;
            option = _closure1_slot9;
            report = 19;
            report = sierra[report];
            report = limora.bind(tangon)(report);
            oscard = report.ThemeContextProvider;
            report = {};
            foxtra = 'dark';
            report['theme'] = foxtra;
            echoed = _closure1_slot9;
            vacuum = _closure1_slot1;
            sizing = 11;
            foxtra = sierra[sizing];
            kiloes = vacuum.bind(tangon)(foxtra);
            foxtra = {};
            update = ctrled.imageOuterContainer;
            foxtra['style'] = update;
            sequen = _closure1_slot7;
            update = 20;
            update = sierra[update];
            vacuum = vacuum.bind(tangon)(update);
            update = {};
            whisks = offset.application;
            whisks = whisks.name;
            update['accessibilityLabel'] = whisks;
            sierra = sierra[verify];
            sierra = limora.bind(tangon)(sierra);
            sierra = sierra.ActivityAction;
            sierra = sierra.START;
            if(!(romeon === sierra)) { _fun00006_ip = 739; continue _fun00005 }
 736:
            target = status;
 739:
            update['imageBackground'] = target;
            config = papara / config;
            update['aspectRatio'] = config;
            vacuum = sequen.bind(tangon)(vacuum, update);
            update = new Array(2);
            update[0] = vacuum;
            config = _closure1_slot7;
            sequen = _closure1_slot11;
            vacuum = {};
            vacuum['action'] = romeon;
            papara = offset.application;
            papara = papara.id;
            vacuum['applicationId'] = papara;
            vacuum['context'] = cntext;
            vacuum['activityItem'] = offset;
            vacuum['launchingComponentId'] = record;
            vacuum = config.bind(tangon)(sequen, vacuum);
            update[1] = vacuum;
            foxtra['children'] = update;
            kiloes = echoed.bind(tangon)(kiloes, foxtra);
            foxtra = new Array(3);
            foxtra[0] = kiloes;
            kiloes = null;
            if(!result) { _fun00006_ip = 879; continue _fun00005 }
 842:
            update = _closure1_slot7;
            echoed = _closure1_slot1;
            vacuum = _closure1_slot2;
            result = 21;
            result = vacuum[result];
            echoed = echoed.bind(tangon)(result);
            result = {};
            result['labelType'] = source;
            kiloes = update.bind(tangon)(echoed, result);
 879:
            foxtra[1] = kiloes;
            kiloes = null;
            if(!output) { _fun00006_ip = 1014; continue _fun00005 }
 891:
            result = _closure1_slot7;
            sequen = _closure1_slot1;
            config = _closure1_slot2;
            sizing = config[sizing];
            output = sequen.bind(tangon)(sizing);
            sizing = {};
            echoed = ctrled.developerIconContainer;
            sizing['style'] = echoed;
            source = _closure1_slot7;
            vacuum = 22;
            echoed = config[vacuum];
            update = sequen.bind(tangon)(echoed);
            echoed = {};
            vacuum = config[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            vacuum = vacuum.Sizes;
            vacuum = vacuum.REFRESH_SMALL_16;
            echoed['size'] = vacuum;
            vacuum = 23;
            vacuum = config[vacuum];
            vacuum = sequen.bind(tangon)(vacuum);
            echoed['source'] = vacuum;
            ctrled = ctrled.developerIconColor;
            ctrled = ctrled.color;
            echoed['color'] = ctrled;
            echoed = source.bind(tangon)(update, echoed);
            sizing['children'] = echoed;
            kiloes = result.bind(tangon)(output, sizing);
 1014:
            foxtra[2] = kiloes;
            report['children'] = foxtra;
            oscard = option.bind(tangon)(oscard, report);
            report = new Array(2);
            report[0] = oscard;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[verify];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.ActivityAction;
            oscard = oscard.START;
            oscard = romeon === oscard;
            if(!oscard) { _fun00006_ip = 1150; continue _fun00005 }
 1072:
            verify = _closure1_slot7;
            option = _closure1_slot12;
            golfie = {};
            golfie['action'] = romeon;
            foxtra = yankee == backup;
            romeon = undefined;
            if(foxtra) { _fun00006_ip = 1100; continue _fun00005 }
 1095:
            romeon = backup.id;
 1100:
            golfie['channelId'] = romeon;
            foxtra = yankee == backup;
            romeon = undefined;
            if(foxtra) { _fun00006_ip = 1123; continue _fun00005 }
 1113:
            foxtra = backup.getGuildId;
            romeon = foxtra.bind(backup)();
 1123:
            foxtra = yankee != romeon;
            yankee = undefined;
            if(!foxtra) { _fun00006_ip = 1135; continue _fun00005 }
 1132:
            yankee = romeon;
 1135:
            golfie['guildId'] = yankee;
            golfie['activityItem'] = offset;
            oscard = verify.bind(tangon)(option, golfie);
 1150:
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
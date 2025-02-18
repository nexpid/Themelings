// app/modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    yankee = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscard;
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
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot5 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot6 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot7 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '100%'};
    tangon['iconContainer'] = verify;
    verify = {'position': 'absolute', 'zIndex': 1, 'width': 10, 'height': 10, 'borderRadius': null, 'top': 0, 'right': 0};
    offset = 4;
    romeon = oscard[offset];
    romeon = yankee.bind(entity)(romeon);
    romeon = romeon.radii;
    romeon = romeon.round;
    verify['borderRadius'] = romeon;
    tangon['badge'] = verify;
    verify = {};
    offset = oscard[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.unsafe_rawColors;
    offset = offset.RED_400;
    verify['backgroundColor'] = offset;
    tangon['redBG'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ChatButton
        entity = argFoo;
        foxtra = entity.props;
        var _closure2_slot0 = foxtra;
        kiloes = entity.openTab;
        var _closure2_slot1 = kiloes;
        verify = entity.wrapperSpecs;
        option = _closure1_slot3;
        oscard = option.useContext;
        michal = _closure1_slot1;
        output = _closure1_slot2;
        zuuluu = 5;
        zuuluu = output[zuuluu];
        tangon = undefined;
        zuuluu = michal.bind(tangon)(zuuluu);
        zuuluu = oscard.bind(option)(zuuluu);
        oscard = zuuluu.channelId;
        var _closure2_slot2 = oscard;
        zuuluu = zuuluu.connected;
        var _closure2_slot3 = zuuluu;
        oscard = _closure1_slot8;
        yankee = oscard.bind(tangon)();
        var _closure2_slot4 = yankee;
        sizing = _closure1_slot0;
        oscard = 6;
        oscard = output[oscard];
        golfie = sizing.bind(tangon)(oscard);
        oscard = golfie.useVoicePanelButtonStyles;
        offset = oscard.bind(golfie)(verify);
        var _closure2_slot5 = offset;
        oscard = 7;
        oscard = output[oscard];
        romeon = sizing.bind(tangon)(oscard);
        verify = romeon.useStateFromStores;
        oscard = _closure1_slot4;
        golfie = new Array(1);
        golfie[0] = oscard;
        oscard = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot4;
                tangon = report.getMentionCount;
                entity = _closure2_slot2;
                tangon = tangon.bind(report)(entity);
                entity = 0;
                tangon = tangon > entity;
                entity = 'mention';
                if(tangon) { _fun00002_ip = 69; continue _fun00001 }
 38:
                tangon = _closure1_slot4;
                zuuluu = tangon.hasUnread;
                michal = _closure2_slot2;
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = null;
                if(!zuuluu) { _fun00002_ip = 66; continue _fun00001 }
 62:
                michal = 'unread';
 66:
                entity = michal;
 69:
                return entity;
            }
        };
        romeon = verify.bind(romeon)(golfie, oscard);
        var _closure2_slot6 = romeon;
        oscard = offset.iconBg;
        backup = oscard.backgroundColor;
        var _closure2_slot7 = backup;
        verify = option.useMemo;
        golfie = new Array(3);
        golfie[0] = romeon;
        oscard = yankee.redBG;
        golfie[1] = oscard;
        oscard = offset.iconBadgeIndicator;
        golfie[2] = oscard;
        oscard = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot6;
                entity = 'mention';
                if(!(entity !== zuuluu)) { _fun00004_ip = 27; continue _fun00003 }
 15:
                entity = _closure2_slot5;
                entity = entity.iconBadgeIndicator;
                _fun00004_ip = 37; continue _fun00003;
 27:
                michal = _closure2_slot4;
                entity = michal.redBG;
 37:
                return entity;
            }
        };
        verify = verify.bind(option)(oscard, golfie);
        var _closure2_slot8 = verify;
        golfie = option.useCallback;
        oscard = new Array(2);
        oscard[0] = kiloes;
        oscard[1] = zuuluu;
        zuuluu = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure2_slot1;
                michal = {};
                tangon = 'chat';
                michal['tab'] = tangon;
                tangon = _closure2_slot3;
                entity = tangon.get;
                tangon = entity.bind(tangon)();
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                entity = 8;
                report = report[entity];
                entity = undefined;
                report = oscard.bind(entity)(report);
                report = report.VoicePanelTabAnalyticsSources;
                if(tangon) { _fun00006_ip = 73; continue _fun00005 }
 65:
                tangon = report.PREJOIN_BUTTON;
                _fun00006_ip = 79; continue _fun00005;
 73:
                tangon = report.CONNECTED_BUTTON;
 79:
                michal['source'] = tangon;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            }
        };
        oscard = golfie.bind(option)(zuuluu, oscard);
        zuuluu = _closure1_slot5;
        entity = 9;
        entity = output[entity];
        michal = michal.bind(tangon)(entity);
        entity = {};
        entity['onPress'] = oscard;
        entity['props'] = foxtra;
        oscard = 10;
        golfie = output[oscard];
        golfie = sizing.bind(tangon)(golfie);
        kiloes = golfie.intl;
        golfie = kiloes.string;
        oscard = output[oscard];
        oscard = sizing.bind(tangon)(oscard);
        oscard = oscard.t;
        oscard = oscard.5KxXrK;
        oscard = golfie.bind(kiloes)(oscard);
        entity['accessibilityLabel'] = oscard;
        golfie = option.useMemo;
        oscard = new Array(7);
        oscard[0] = backup;
        foxtra = foxtra.width;
        oscard[1] = foxtra;
        oscard[2] = romeon;
        romeon = yankee.iconContainer;
        oscard[3] = romeon;
        yankee = yankee.badge;
        oscard[4] = yankee;
        offset = offset.iconFill;
        offset = offset.color;
        oscard[5] = offset;
        oscard[6] = verify;
        report = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = _closure1_slot7;
                zuuluu = _closure1_slot6;
                michal = {};
                foxtra = _closure1_slot5;
                romeon = _closure1_slot1;
                sizing = _closure1_slot2;
                entity = 11;
                report = sizing[entity];
                entity = undefined;
                verify = romeon.bind(entity)(report);
                report = {'fill': null, 'circleRadius': null, 'cutoutRadius': 8, 'enableCutout': null, 'cutoutPositionInDegrees': 45, 'alignBadgeEdgeWithCircleEdge': true, 'badgeRadius': 5, 'scaleToPixelDensity': true};
                oscard = _closure2_slot7;
                report['fill'] = oscard;
                oscard = _closure2_slot0;
                option = oscard.width;
                oscard = 2;
                oscard = option / oscard;
                report['circleRadius'] = oscard;
                option = _closure2_slot6;
                oscard = null;
                offset = oscard != option;
                report['enableCutout'] = offset;
                verify = foxtra.bind(entity)(verify, report);
                report = new Array(3);
                report[0] = verify;
                offset = 12;
                verify = sizing[offset];
                romeon = romeon.bind(entity)(verify);
                verify = {};
                backup = _closure2_slot4;
                backup = backup.iconContainer;
                verify['style'] = backup;
                kiloes = _closure1_slot0;
                backup = 13;
                backup = sizing[backup];
                backup = kiloes.bind(entity)(backup);
                kiloes = backup.ChatIcon;
                backup = {};
                sizing = _closure2_slot5;
                sizing = sizing.iconFill;
                sizing = sizing.color;
                backup['color'] = sizing;
                backup = foxtra.bind(entity)(kiloes, backup);
                verify['children'] = backup;
                verify = foxtra.bind(entity)(romeon, verify);
                report[1] = verify;
                oscard = oscard != option;
                if(!oscard) { _fun00008_ip = 275; continue _fun00007 }
 216:
                verify = _closure1_slot5;
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                golfie = golfie[offset];
                option = option.bind(entity)(golfie);
                golfie = {};
                offset = _closure2_slot4;
                romeon = offset.badge;
                offset = new Array(2);
                offset[0] = romeon;
                yankee = _closure2_slot8;
                offset[1] = yankee;
                golfie['style'] = offset;
                oscard = verify.bind(entity)(option, golfie);
 275:
                report[2] = oscard;
                michal['children'] = report;
                entity = tangon.bind(entity)(zuuluu, michal);
                return entity;
            }
        };
        report = golfie.bind(option)(report, oscard);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();
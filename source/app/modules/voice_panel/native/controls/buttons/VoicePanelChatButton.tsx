// app/modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    yankee = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = yankee;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = yankee.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot5 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot6 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'position': 'absolute', 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%', 'height': '100%'};
    tango['iconContainer'] = verify;
    verify = {'position': 'absolute', 'zIndex': 1, 'width': 10, 'height': 10, 'borderRadius': null, 'top': 0, 'right': 0};
    offset = 4;
    romeo = oscar[offset];
    romeo = yankee.bind(entity)(romeo);
    romeo = romeo.radii;
    romeo = romeo.round;
    verify['borderRadius'] = romeo;
    tango['badge'] = verify;
    verify = {};
    offset = oscar[offset];
    offset = yankee.bind(entity)(offset);
    offset = offset.unsafe_rawColors;
    offset = offset.RED_400;
    verify['backgroundColor'] = offset;
    tango['redBG'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot8 = tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controls/buttons/VoicePanelChatButton.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ChatButton
        entity = argFoo;
        foxtrot = entity.props;
        var _closure2_slot0 = foxtrot;
        kilo = entity.openTab;
        var _closure2_slot1 = kilo;
        verify = entity.wrapperSpecs;
        options = _closure1_slot3;
        oscar = options.useContext;
        mike = _closure1_slot1;
        output = _closure1_slot2;
        zulu = 5;
        zulu = output[zulu];
        tango = undefined;
        zulu = mike.bind(tango)(zulu);
        zulu = oscar.bind(options)(zulu);
        oscar = zulu.channelId;
        var _closure2_slot2 = oscar;
        zulu = zulu.connected;
        var _closure2_slot3 = zulu;
        oscar = _closure1_slot8;
        yankee = oscar.bind(tango)();
        var _closure2_slot4 = yankee;
        sizing = _closure1_slot0;
        oscar = 6;
        oscar = output[oscar];
        golf = sizing.bind(tango)(oscar);
        oscar = golf.useVoicePanelButtonStyles;
        offset = oscar.bind(golf)(verify);
        var _closure2_slot5 = offset;
        oscar = 7;
        oscar = output[oscar];
        romeo = sizing.bind(tango)(oscar);
        verify = romeo.useStateFromStores;
        oscar = _closure1_slot4;
        golf = new Array(1);
        golf[0] = oscar;
        oscar = function() {
            _fun122389: for(var _fun122389_ip = 0; ; ) switch(_fun122389_ip) {
 0:
                report = _closure1_slot4;
                tango = report.getMentionCount;
                entity = _closure2_slot2;
                tango = tango.bind(report)(entity);
                entity = 0;
                tango = tango > entity;
                entity = 'mention';
                if(tango) { _fun122389_ip = 69; continue _fun122389 }
 38:
                tango = _closure1_slot4;
                zulu = tango.hasUnread;
                mike = _closure2_slot2;
                zulu = zulu.bind(tango)(mike);
                mike = null;
                if(!zulu) { _fun122389_ip = 66; continue _fun122389 }
 62:
                mike = 'unread';
 66:
                entity = mike;
 69:
                return entity;
            }
        };
        romeo = verify.bind(romeo)(golf, oscar);
        var _closure2_slot6 = romeo;
        oscar = offset.iconBg;
        backup = oscar.backgroundColor;
        var _closure2_slot7 = backup;
        verify = options.useMemo;
        golf = new Array(3);
        golf[0] = romeo;
        oscar = yankee.redBG;
        golf[1] = oscar;
        oscar = offset.iconBadgeIndicator;
        golf[2] = oscar;
        oscar = function() {
            _fun122390: for(var _fun122390_ip = 0; ; ) switch(_fun122390_ip) {
 0:
                zulu = _closure2_slot6;
                entity = 'mention';
                if(!(entity !== zulu)) { _fun122390_ip = 27; continue _fun122390 }
 15:
                entity = _closure2_slot5;
                entity = entity.iconBadgeIndicator;
                _fun122390_ip = 37; continue _fun122390;
 27:
                mike = _closure2_slot4;
                entity = mike.redBG;
 37:
                return entity;
            }
        };
        verify = verify.bind(options)(oscar, golf);
        var _closure2_slot8 = verify;
        golf = options.useCallback;
        oscar = new Array(2);
        oscar[0] = kilo;
        oscar[1] = zulu;
        zulu = function() {
            _fun122391: for(var _fun122391_ip = 0; ; ) switch(_fun122391_ip) {
 0:
                zulu = _closure2_slot1;
                mike = {};
                tango = 'chat';
                mike['tab'] = tango;
                tango = _closure2_slot3;
                entity = tango.get;
                tango = entity.bind(tango)();
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                entity = 8;
                report = report[entity];
                entity = undefined;
                report = oscar.bind(entity)(report);
                report = report.VoicePanelTabAnalyticsSources;
                if(tango) { _fun122391_ip = 73; continue _fun122391 }
 65:
                tango = report.PREJOIN_BUTTON;
                _fun122391_ip = 79; continue _fun122391;
 73:
                tango = report.CONNECTED_BUTTON;
 79:
                mike['source'] = tango;
                mike = zulu.bind(entity)(mike);
                return entity;
            }
        };
        oscar = golf.bind(options)(zulu, oscar);
        zulu = _closure1_slot5;
        entity = 9;
        entity = output[entity];
        mike = mike.bind(tango)(entity);
        entity = {};
        entity['onPress'] = oscar;
        entity['props'] = foxtrot;
        oscar = 10;
        golf = output[oscar];
        golf = sizing.bind(tango)(golf);
        kilo = golf.intl;
        golf = kilo.string;
        oscar = output[oscar];
        oscar = sizing.bind(tango)(oscar);
        oscar = oscar.t;
        oscar = oscar.5KxXrK;
        oscar = golf.bind(kilo)(oscar);
        entity['accessibilityLabel'] = oscar;
        golf = options.useMemo;
        oscar = new Array(7);
        oscar[0] = backup;
        foxtrot = foxtrot.width;
        oscar[1] = foxtrot;
        oscar[2] = romeo;
        romeo = yankee.iconContainer;
        oscar[3] = romeo;
        yankee = yankee.badge;
        oscar[4] = yankee;
        offset = offset.iconFill;
        offset = offset.color;
        oscar[5] = offset;
        oscar[6] = verify;
        report = function() {
            _fun122392: for(var _fun122392_ip = 0; ; ) switch(_fun122392_ip) {
 0:
                tango = _closure1_slot7;
                zulu = _closure1_slot6;
                mike = {};
                foxtrot = _closure1_slot5;
                romeo = _closure1_slot1;
                sizing = _closure1_slot2;
                entity = 11;
                report = sizing[entity];
                entity = undefined;
                verify = romeo.bind(entity)(report);
                report = {'fill': null, 'circleRadius': null, 'cutoutRadius': 8, 'enableCutout': null, 'cutoutPositionInDegrees': 45, 'alignBadgeEdgeWithCircleEdge': true, 'badgeRadius': 5, 'scaleToPixelDensity': true};
                oscar = _closure2_slot7;
                report['fill'] = oscar;
                oscar = _closure2_slot0;
                options = oscar.width;
                oscar = 2;
                oscar = options / oscar;
                report['circleRadius'] = oscar;
                options = _closure2_slot6;
                oscar = null;
                offset = oscar != options;
                report['enableCutout'] = offset;
                verify = foxtrot.bind(entity)(verify, report);
                report = new Array(3);
                report[0] = verify;
                offset = 12;
                verify = sizing[offset];
                romeo = romeo.bind(entity)(verify);
                verify = {};
                backup = _closure2_slot4;
                backup = backup.iconContainer;
                verify['style'] = backup;
                kilo = _closure1_slot0;
                backup = 13;
                backup = sizing[backup];
                backup = kilo.bind(entity)(backup);
                kilo = backup.ChatIcon;
                backup = {};
                sizing = _closure2_slot5;
                sizing = sizing.iconFill;
                sizing = sizing.color;
                backup['color'] = sizing;
                backup = foxtrot.bind(entity)(kilo, backup);
                verify['children'] = backup;
                verify = foxtrot.bind(entity)(romeo, verify);
                report[1] = verify;
                oscar = oscar != options;
                if(!oscar) { _fun122392_ip = 275; continue _fun122392 }
 216:
                verify = _closure1_slot5;
                options = _closure1_slot1;
                golf = _closure1_slot2;
                golf = golf[offset];
                options = options.bind(entity)(golf);
                golf = {};
                offset = _closure2_slot4;
                romeo = offset.badge;
                offset = new Array(2);
                offset[0] = romeo;
                yankee = _closure2_slot8;
                offset[1] = yankee;
                golf['style'] = offset;
                oscar = verify.bind(entity)(options, golf);
 275:
                report[2] = oscar;
                mike['children'] = report;
                entity = tango.bind(entity)(zulu, mike);
                return entity;
            }
        };
        report = golf.bind(options)(report, oscar);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
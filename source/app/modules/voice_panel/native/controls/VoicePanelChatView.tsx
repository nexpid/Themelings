// app/modules/voice_panel/native/controls/VoicePanelChatView.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar) { // Original name: updateChatOpen
        _fun101721: for(var _fun101721_ip = 0; ; ) switch(_fun101721_ip) {
 0:
            report = argFoo;
            tango = argBar;
            oscar = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 6;
            zulu = zulu[entity];
            entity = undefined;
            golf = oscar.bind(entity)(zulu);
            if(tango) { _fun101721_ip = 52; continue _fun101721 }
 34:
            oscar = golf.disableAutomaticAck;
            zulu = '';
            zulu = oscar.bind(golf)(report, zulu);
            _fun101721_ip = 68; continue _fun101721;
 52:
            oscar = golf.enableAutomaticAck;
            zulu = '';
            zulu = oscar.bind(golf)(report, zulu);
 68:
            zulu = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 7;
            mike = oscar[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.updateChatOpen;
            mike = mike.bind(zulu)(report, tango);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    options = entity.Object;
    report = options.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = report.bind(options)(zulu, entity, mike);
    yankee = 0;
    report = golf[yankee];
    mike = argCorge;
    entity = undefined;
    options = mike.bind(entity)(report);
    var _closure1_slot3 = options;
    mike = 1;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.Platform;
    mike = 2;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    romeo = mike.CONTROLS_DRAWER_HEADER_SIZE;
    mike = 3;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    report = mike.ComponentActions;
    var _closure1_slot4 = report;
    mike = mike.ME;
    var _closure1_slot5 = mike;
    mike = 4;
    report = golf[mike];
    report = oscar.bind(entity)(report);
    report = report.jsx;
    var _closure1_slot6 = report;
    report = golf[mike];
    report = oscar.bind(entity)(report);
    report = report.jsxs;
    var _closure1_slot7 = report;
    mike = golf[mike];
    mike = oscar.bind(entity)(mike);
    mike = mike.Fragment;
    var _closure1_slot8 = mike;
    mike = 5;
    mike = golf[mike];
    verify = oscar.bind(entity)(mike);
    report = verify.createStyles;
    mike = {};
    offset = {'flex': 1, 'overflow': 'hidden'};
    offset['paddingTop'] = romeo;
    mike['container'] = offset;
    offset = {'position': 'absolute', 'top': null, 'left': 0};
    offset['top'] = romeo;
    mike['gradientWrapper'] = offset;
    offset = {};
    offset['opacity'] = yankee;
    mike['titleBlur'] = offset;
    mike = report.bind(verify)(mike);
    var _closure1_slot9 = mike;
    report = options.memo;
    mike = function() { // Original name: VoicePanelDismissChatButton
        tango = _closure1_slot3;
        zulu = tango.useCallback;
        mike = function() {
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            entity = 8;
            zulu = zulu[entity];
            entity = undefined;
            zulu = tango.bind(entity)(zulu);
            tango = zulu.ComponentDispatch;
            zulu = tango.dispatch;
            mike = _closure1_slot4;
            mike = mike.VOICE_PANEL_TIV_CLOSE;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = new Array(0);
        report = zulu.bind(tango)(mike, entity);
        tango = _closure1_slot6;
        yankee = _closure1_slot0;
        options = _closure1_slot2;
        entity = 9;
        entity = options[entity];
        zulu = undefined;
        entity = yankee.bind(zulu)(entity);
        mike = entity.IconButton;
        entity = {};
        golf = 10;
        verify = options[golf];
        verify = yankee.bind(zulu)(verify);
        offset = verify.intl;
        verify = offset.string;
        golf = options[golf];
        golf = yankee.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.5MstTk;
        golf = verify.bind(offset)(golf);
        entity['accessibilityLabel'] = golf;
        golf = _closure1_slot1;
        oscar = 11;
        oscar = options[oscar];
        oscar = golf.bind(zulu)(oscar);
        entity['icon'] = oscar;
        entity['onPress'] = report;
        report = 'secondary';
        entity['variant'] = report;
        entity = tango.bind(zulu)(mike, entity);
        return entity;
    };
    mike = report.bind(options)(mike);
    report = {};
    verify = 'function VoicePanelChatViewTsx1(){const{windowDimensions}=this.__closure;return{width:windowDimensions.get().width,height:windowDimensions.get().height};}';
    report['code'] = verify;
    var _closure1_slot10 = report;
    verify = options.memo;
    report = function() {
        options = _closure1_slot3;
        report = options.useContext;
        oscar = _closure1_slot1;
        golf = _closure1_slot2;
        zulu = 12;
        zulu = golf[zulu];
        tango = undefined;
        zulu = oscar.bind(tango)(zulu);
        zulu = report.bind(options)(zulu);
        offset = zulu.windowDimensions;
        var _closure2_slot0 = offset;
        zulu = _closure1_slot9;
        report = zulu.bind(tango)();
        options = _closure1_slot0;
        zulu = 13;
        zulu = golf[zulu];
        options = options.bind(tango)(zulu);
        zulu = options.useAnimatedStyle;
        mike = function() { // Original name: n
            entity = {};
            zulu = _closure2_slot0;
            mike = zulu.get;
            mike = mike.bind(zulu)();
            mike = mike.width;
            entity['width'] = mike;
            mike = zulu.get;
            mike = mike.bind(zulu)();
            mike = mike.height;
            entity['height'] = mike;
            return entity;
        };
        verify = {};
        verify['windowDimensions'] = offset;
        mike['__closure'] = verify;
        verify = 16775846409623.0;
        mike['__workletHash'] = verify;
        verify = _closure1_slot10;
        mike['__initData'] = verify;
        options = zulu.bind(options)(mike);
        zulu = _closure1_slot6;
        entity = 14;
        entity = golf[entity];
        mike = oscar.bind(tango)(entity);
        entity = {};
        verify = report.gradientWrapper;
        report = new Array(2);
        report[0] = verify;
        report[1] = options;
        entity['style'] = report;
        report = 15;
        report = golf[report];
        oscar = oscar.bind(tango)(report);
        report = {};
        golf = true;
        report['absolute'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    report = verify.bind(options)(report);
    var _closure1_slot11 = report;
    report = options.memo;
    tango = function(argFoo) { // Original name: VoicePanelChatView
        _fun101726: for(var _fun101726_ip = 0; ; ) switch(_fun101726_ip) {
 0:
            mike = argFoo;
            oscar = mike.shown;
            var _closure2_slot0 = oscar;
            mike = _closure1_slot9;
            tango = undefined;
            verify = mike.bind(tango)();
            report = _closure1_slot3;
            mike = report.useRef;
            output = null;
            backup = mike.bind(report)(output);
            var _closure2_slot1 = backup;
            zulu = report.useContext;
            offset = _closure1_slot1;
            romeo = _closure1_slot2;
            mike = 12;
            mike = romeo[mike];
            mike = offset.bind(tango)(mike);
            mike = zulu.bind(report)(mike);
            sizing = mike.guildId;
            var _closure2_slot2 = sizing;
            kilo = mike.channelId;
            var _closure2_slot3 = kilo;
            zulu = _closure1_slot0;
            mike = 16;
            mike = romeo[mike];
            zulu = zulu.bind(tango)(mike);
            mike = zulu.useGradientTop;
            options = mike.bind(zulu)();
            golf = report.useEffect;
            zulu = new Array(2);
            zulu[0] = sizing;
            zulu[1] = kilo;
            mike = function() {
                _fun101727: for(var _fun101727_ip = 0; ; ) switch(_fun101727_ip) {
 0:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    entity = 17;
                    zulu = zulu[entity];
                    entity = undefined;
                    tango = tango.bind(entity)(zulu);
                    zulu = tango.preload;
                    oscar = _closure2_slot2;
                    report = null;
                    if(!(report == oscar)) { _fun101727_ip = 50; continue _fun101727 }
 44:
                    mike = _closure1_slot5;
                    _fun101727_ip = 54; continue _fun101727;
 50:
                    mike = _closure2_slot2;
 54:
                    entity = _closure2_slot3;
                    entity = zulu.bind(tango)(mike, entity);
                    entity = function() {
                        tango = _closure1_slot12;
                        zulu = _closure2_slot3;
                        entity = undefined;
                        mike = false;
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    };
                    return entity;
                }
            };
            mike = golf.bind(report)(mike, zulu);
            zulu = report.useEffect;
            mike = new Array(2);
            mike[0] = kilo;
            mike[1] = oscar;
            entity = function() {
                _fun101729: for(var _fun101729_ip = 0; ; ) switch(_fun101729_ip) {
 0:
                    zulu = _closure1_slot12;
                    mike = _closure2_slot3;
                    report = _closure2_slot0;
                    entity = undefined;
                    mike = zulu.bind(entity)(mike, report);
                    mike = _closure2_slot1;
                    zulu = mike.current;
                    mike = null;
                    if(report) { _fun101729_ip = 79; continue _fun101729 }
 40:
                    if(!(mike != zulu)) { _fun101729_ip = 54; continue _fun101729 }
 44:
                    report = zulu.chatInputTrackerUnregister;
                    report = report.bind(zulu)();
 54:
                    tango = _closure2_slot1;
                    report = tango.current;
                    if(!(mike != report)) { _fun101729_ip = 93; continue _fun101729 }
 67:
                    tango = report.blur;
                    tango = tango.bind(report)();
                    _fun101729_ip = 93; continue _fun101729;
 79:
                    if(!(mike != zulu)) { _fun101729_ip = 93; continue _fun101729 }
 83:
                    mike = zulu.chatInputTrackerRegister;
                    mike = mike.bind(zulu)();
 93:
                    return entity;
                }
            };
            entity = zulu.bind(report)(entity, mike);
            zulu = _closure1_slot7;
            mike = _closure1_slot8;
            entity = {};
            report = 18;
            report = romeo[report];
            oscar = offset.bind(tango)(report);
            report = {};
            foxtrot = verify.container;
            golf = new Array(2);
            golf[0] = foxtrot;
            golf[1] = options;
            report['style'] = golf;
            foxtrot = _closure1_slot6;
            options = _closure1_slot11;
            golf = {};
            options = foxtrot.bind(tango)(options, golf);
            golf = new Array(2);
            golf[0] = options;
            options = 19;
            options = romeo[options];
            romeo = offset.bind(tango)(options);
            options = {'disableGradient': true, 'alwaysRespectKeyboard': false, 'setNoExtractUI': false};
            offset = true;
            if(!(output == sizing)) { _fun101726_ip = 288; continue _fun101726 }
 284:
            sizing = _closure1_slot5;
 288:
            options['guildId'] = sizing;
            options['channelId'] = kilo;
            options['chatInputRef'] = backup;
            backup = 'voice-panel';
            options['screenIndex'] = backup;
            options = foxtrot.bind(tango)(romeo, options);
            golf[1] = options;
            report['children'] = golf;
            oscar = zulu.bind(tango)(oscar, report);
            report = new Array(2);
            report[0] = oscar;
            options = _closure1_slot6;
            golf = _closure1_slot1;
            kilo = _closure1_slot2;
            oscar = 20;
            oscar = kilo[oscar];
            golf = golf.bind(tango)(oscar);
            oscar = {};
            backup = _closure1_slot0;
            yankee = 10;
            romeo = kilo[yankee];
            romeo = backup.bind(tango)(romeo);
            foxtrot = romeo.intl;
            romeo = foxtrot.string;
            yankee = kilo[yankee];
            yankee = backup.bind(tango)(yankee);
            yankee = yankee.t;
            yankee = yankee./VQax8;
            yankee = romeo.bind(foxtrot)(yankee);
            oscar['title'] = yankee;
            oscar['disablePill'] = offset;
            verify = verify.titleBlur;
            oscar['blurStyle'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    tango = report.bind(options)(tango);
    report = 21;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/voice_panel/native/controls/VoicePanelChatView.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    zulu['MemoedVoicePanelDismissChatButton'] = mike;
    return entity;
})();
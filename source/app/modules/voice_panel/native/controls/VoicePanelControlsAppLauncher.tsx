// app/modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argCorge;
    entity = undefined;
    golf = tango.bind(entity)(golf);
    var _closure1_slot3 = golf;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.VoicePanelControlsModes;
    var _closure1_slot5 = options;
    yankee = tango.CONTROLS_DRAWER_HEADER_SIZE;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ComponentActions;
    var _closure1_slot6 = tango;
    tango = 4;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsx;
    var _closure1_slot7 = options;
    options = oscar[tango];
    options = report.bind(entity)(options);
    options = options.jsxs;
    var _closure1_slot8 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Fragment;
    var _closure1_slot9 = tango;
    tango = 5;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    offset = {};
    romeo = '100%';
    offset['width'] = romeo;
    offset['paddingTop'] = yankee;
    tango['container'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot10 = tango;
    tango = {};
    options = 'function VoicePanelControlsAppLauncherTsx1(){const{gestureSpecs}=this.__closure;return gestureSpecs.get().active;}';
    tango['code'] = options;
    var _closure1_slot11 = tango;
    tango = {};
    options = "function VoicePanelControlsAppLauncherTsx2(){const{isGestureActive,windowDimensions,safeArea}=this.__closure;const height=isGestureActive.get()?windowDimensions.height-safeArea.top:'100%';return{height:height};}";
    tango['code'] = options;
    var _closure1_slot12 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: VoicePanelControlsAppLauncher
        mike = argFoo;
        sequence = mike.gestureSpecs;
        var _closure2_slot0 = sequence;
        mike = _closure1_slot10;
        tango = undefined;
        options = mike.bind(tango)();
        kilo = _closure1_slot0;
        sizing = _closure1_slot2;
        mike = 6;
        mike = sizing[mike];
        zulu = kilo.bind(tango)(mike);
        mike = zulu.useGradientTop;
        source = mike.bind(zulu)();
        zulu = _closure1_slot3;
        report = zulu.useContext;
        offset = _closure1_slot1;
        mike = 7;
        mike = sizing[mike];
        mike = offset.bind(tango)(mike);
        mike = report.bind(zulu)(mike);
        yankee = mike.setControlsMode;
        var _closure2_slot1 = yankee;
        golf = mike.safeArea;
        romeo = mike.windowDimensions;
        report = mike.channelId;
        var _closure2_slot2 = report;
        mike = mike.setFocused;
        var _closure2_slot3 = mike;
        report = 8;
        verify = sizing[report];
        verify = offset.bind(tango)(verify);
        control = verify.bind(tango)(romeo);
        var _closure2_slot4 = control;
        report = sizing[report];
        report = offset.bind(tango)(report);
        verify = report.bind(tango)(golf);
        var _closure2_slot5 = verify;
        report = 9;
        report = sizing[report];
        foxtrot = kilo.bind(tango)(report);
        romeo = foxtrot.useStateFromStores;
        report = _closure1_slot4;
        golf = new Array(1);
        golf[0] = report;
        report = function() {
            zulu = _closure1_slot4;
            mike = zulu.getChannel;
            entity = _closure2_slot2;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        echo = romeo.bind(foxtrot)(golf, report);
        report = 10;
        report = sizing[report];
        romeo = offset.bind(tango)(report);
        report = null;
        golf = report != echo;
        report = 'channel should not be null';
        report = romeo.bind(tango)(golf, report);
        report = 11;
        report = sizing[report];
        backup = kilo.bind(tango)(report);
        foxtrot = backup.getControlsDrawerOpenWidth;
        romeo = control.width;
        golf = verify.left;
        report = verify.right;
        romeo = foxtrot.bind(backup)(romeo, golf, report);
        golf = zulu.useCallback;
        report = new Array(2);
        report[0] = yankee;
        report[1] = mike;
        mike = function(argFoo) {
            entity = argFoo;
            report = entity.applicationId;
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            entity = 12;
            mike = oscar[entity];
            entity = undefined;
            mike = tango.bind(entity)(mike);
            golf = mike.ComponentDispatch;
            zulu = golf.dispatch;
            mike = _closure1_slot6;
            mike = mike.SELECT_ACTIVITY;
            mike = zulu.bind(golf)(mike);
            golf = _closure2_slot1;
            zulu = {};
            options = _closure1_slot5;
            options = options.HIDDEN;
            zulu['mode'] = options;
            zulu = golf.bind(entity)(zulu);
            zulu = _closure2_slot3;
            mike = 13;
            mike = oscar[mike];
            tango = tango.bind(entity)(mike);
            mike = tango.embeddedActivityParticipantId;
            mike = mike.bind(tango)(report);
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        foxtrot = golf.bind(zulu)(mike, report);
        mike = 14;
        report = sizing[mike];
        backup = kilo.bind(tango)(report);
        golf = backup.useAppLauncherChatInputRefDummy;
        report = {};
        yankee = true;
        report['noop'] = yankee;
        result = golf.bind(backup)(report);
        report = 15;
        report = sizing[report];
        report = kilo.bind(tango)(report);
        report = report.AppLauncherEntrypoint;
        output = report.VOICE;
        report = zulu.useRef;
        mike = sizing[mike];
        mike = kilo.bind(tango)(mike);
        mike = mike.AppLauncherKeyboardCloseReason;
        mike = mike.DISMISSED;
        backup = report.bind(zulu)(mike);
        mike = zulu.useRef;
        update = mike.bind(zulu)(tango);
        report = 16;
        mike = sizing[report];
        golf = kilo.bind(tango)(mike);
        zulu = golf.useDerivedValue;
        mike = function() { // Original name: V
            mike = _closure2_slot0;
            entity = mike.get;
            entity = entity.bind(mike)();
            entity = entity.active;
            return entity;
        };
        vacuum = {};
        vacuum['gestureSpecs'] = sequence;
        mike['__closure'] = vacuum;
        vacuum = 1130089519653.0;
        mike['__workletHash'] = vacuum;
        vacuum = _closure1_slot11;
        mike['__initData'] = vacuum;
        vacuum = zulu.bind(golf)(mike);
        var _closure2_slot6 = vacuum;
        mike = sizing[report];
        zulu = kilo.bind(tango)(mike);
        mike = zulu.useAnimatedStyle;
        entity = function() { // Original name: b
            _fun122504: for(var _fun122504_ip = 0; ; ) switch(_fun122504_ip) {
 0:
                entity = {};
                tango = _closure2_slot6;
                mike = tango.get;
                tango = mike.bind(tango)();
                mike = '100%';
                if(!tango) { _fun122504_ip = 49; continue _fun122504 }
 27:
                tango = _closure2_slot4;
                tango = tango.height;
                zulu = _closure2_slot5;
                zulu = zulu.top;
                mike = tango - zulu;
 49:
                entity['height'] = mike;
                return entity;
            }
        };
        golf = {};
        golf['isGestureActive'] = vacuum;
        golf['windowDimensions'] = control;
        golf['safeArea'] = verify;
        entity['__closure'] = golf;
        golf = 14027096386092.0;
        entity['__workletHash'] = golf;
        golf = _closure1_slot12;
        entity['__initData'] = golf;
        verify = mike.bind(zulu)(entity);
        zulu = _closure1_slot7;
        mike = _closure1_slot9;
        entity = {};
        golf = _closure1_slot8;
        report = sizing[report];
        report = offset.bind(tango)(report);
        oscar = report.View;
        report = {};
        control = options.container;
        options = new Array(3);
        options[0] = control;
        options[1] = source;
        options[2] = verify;
        report['style'] = options;
        options = 17;
        options = sizing[options];
        verify = offset.bind(tango)(options);
        options = {};
        options['bottomSheetExpandReasonRef'] = update;
        echo = echo.id;
        options['channelId'] = echo;
        options['chatInputRef'] = result;
        options['entrypoint'] = output;
        options['keyboardCloseReasonRef'] = backup;
        options['onActivityItemSelected'] = foxtrot;
        options['width'] = romeo;
        verify = zulu.bind(tango)(verify, options);
        options = new Array(2);
        options[0] = verify;
        verify = 18;
        verify = sizing[verify];
        offset = offset.bind(tango)(verify);
        verify = {};
        romeo = 19;
        foxtrot = sizing[romeo];
        foxtrot = kilo.bind(tango)(foxtrot);
        backup = foxtrot.intl;
        foxtrot = backup.string;
        romeo = sizing[romeo];
        romeo = kilo.bind(tango)(romeo);
        romeo = romeo.t;
        romeo = romeo.shUONj;
        romeo = foxtrot.bind(backup)(romeo);
        verify['title'] = romeo;
        verify['disablePill'] = yankee;
        verify = zulu.bind(tango)(offset, verify);
        options[1] = verify;
        report['children'] = options;
        report = golf.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 20;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controls/VoicePanelControlsAppLauncher.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
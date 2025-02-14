// app/modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: useMuteHandlers
        oscar = argFoo;
        var _closure2_slot0 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot2;
        zulu = 11;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresObject;
        golf = _closure1_slot8;
        zulu = new Array(7);
        zulu[0] = golf;
        golf = _closure1_slot7;
        zulu[1] = golf;
        golf = _closure1_slot11;
        zulu[2] = golf;
        golf = _closure1_slot9;
        zulu[3] = golf;
        golf = _closure1_slot10;
        zulu[4] = golf;
        golf = _closure1_slot6;
        zulu[5] = golf;
        mike = _closure1_slot5;
        zulu[6] = mike;
        mike = new Array(1);
        mike[0] = oscar;
        entity = function() {
            _fun122328: for(var _fun122328_ip = 0; ; ) switch(_fun122328_ip) {
 0:
                tango = _closure1_slot8;
                zulu = tango.getChannel;
                mike = _closure2_slot0;
                golf = zulu.bind(tango)(mike);
                report = null;
                if(!(report == golf)) { _fun122328_ip = 46; continue _fun122328 }
 30:
                tango = {'selfMute': false, 'suppress': false, 'mute': false};
                _fun122328_ip = 130; continue _fun122328;
 46:
                oscar = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 12;
                zulu = zulu[mike];
                mike = undefined;
                oscar = oscar.bind(mike)(zulu);
                zulu = oscar.getMuteStates;
                mike = {};
                mike['channel'] = golf;
                golf = _closure1_slot7;
                mike['authenticationStore'] = golf;
                golf = _closure1_slot11;
                mike['voiceStateStore'] = golf;
                golf = _closure1_slot9;
                mike['mediaEngineStore'] = golf;
                golf = _closure1_slot10;
                mike['permissionStore'] = golf;
                golf = _closure1_slot6;
                mike['impersonateStore'] = golf;
                tango = zulu.bind(oscar)(mike);
 130:
                oscar = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 13;
                zulu = zulu[mike];
                mike = undefined;
                zulu = oscar.bind(mike)(zulu);
                mike = zulu.createMuteHandler;
                oscar = _closure1_slot5;
                entity = oscar.getAwaitingRemoteSessionInfo;
                entity = entity.bind(oscar)();
                entity = report != entity;
                entity = mike.bind(zulu)(tango, entity);
                return entity;
            }
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: AnimatedMicrophoneIcon
        _fun122329: for(var _fun122329_ip = 0; ; ) switch(_fun122329_ip) {
 0:
            entity = argFoo;
            options = entity.buttonStyles;
            report = entity.isMuted;
            oscar = _closure1_slot4;
            tango = oscar.useRef;
            zulu = null;
            oscar = tango.bind(oscar)(zulu);
            var _closure2_slot0 = oscar;
            golf = _closure1_slot4;
            tango = golf.useRef;
            zulu = true;
            zulu = tango.bind(golf)(zulu);
            var _closure2_slot1 = zulu;
            verify = _closure1_slot4;
            golf = verify.useEffect;
            tango = new Array(2);
            tango[0] = report;
            tango[1] = oscar;
            mike = function() {
                _fun122330: for(var _fun122330_ip = 0; ; ) switch(_fun122330_ip) {
 0:
                    mike = _closure2_slot1;
                    mike = mike.current;
                    if(mike) { _fun122330_ip = 42; continue _fun122330 }
 15:
                    mike = _closure2_slot0;
                    zulu = mike.current;
                    mike = null;
                    if(!(mike != zulu)) { _fun122330_ip = 54; continue _fun122330 }
 30:
                    mike = zulu.play;
                    mike = mike.bind(zulu)();
                    _fun122330_ip = 54; continue _fun122330;
 42:
                    mike = _closure2_slot1;
                    entity = false;
                    mike['current'] = entity;
 54:
                    entity = undefined;
                    return entity;
                }
            };
            mike = golf.bind(verify)(mike, tango);
            golf = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 25;
            mike = verify[mike];
            tango = undefined;
            mike = golf.bind(tango)(mike);
            golf = mike.bind(tango)(zulu);
            zulu = _closure1_slot12;
            mike = _closure1_slot0;
            entity = 26;
            entity = verify[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.MicrophoneLottie;
            entity = {};
            entity['ref'] = oscar;
            if(report) { _fun122329_ip = 169; continue _fun122329 }
 156:
            oscar = options.iconFillSelected;
            oscar = oscar.color;
            _fun122329_ip = 180; continue _fun122329;
 169:
            options = options.iconFill;
            oscar = options.color;
 180:
            entity['color'] = oscar;
            oscar = 'md';
            entity['size'] = oscar;
            oscar = report;
            if(!golf) { _fun122329_ip = 201; continue _fun122329 }
 198:
            oscar = !report;
 201:
            report = 'unmute';
            if(!oscar) { _fun122329_ip = 212; continue _fun122329 }
 208:
            report = 'mute';
 212:
            entity['animation'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot19 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    options = oscar[tango];
    tango = argCorge;
    tango = tango.bind(entity)(options);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.jsx;
    var _closure1_slot12 = golf;
    golf = oscar[tango];
    golf = report.bind(entity)(golf);
    golf = golf.Fragment;
    var _closure1_slot13 = golf;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot14 = tango;
    tango = 10;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.createStyles;
    tango = {};
    verify = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 4, 'textAlign': 'center', 'opacity': 0.5};
    tango['text'] = verify;
    tango = golf.bind(options)(tango);
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function VoicePanelMicButtonTsx1(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = 'function VoicePanelMicButtonTsx2(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}';
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = 28;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: PTTButton
        _fun122331: for(var _fun122331_ip = 0; ; ) switch(_fun122331_ip) {
 0:
            mike = argFoo;
            sizing = mike.props;
            zulu = mike.wrapperSpecs;
            tango = undefined;
            var _closure2_slot1 = tango;
            var _closure2_slot2 = tango;
            var _closure2_slot3 = tango;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            mike = _closure1_slot15;
            offset = mike.bind(tango)();
            golf = _closure1_slot4;
            report = golf.useContext;
            options = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 15;
            mike = verify[mike];
            mike = options.bind(tango)(mike);
            mike = report.bind(golf)(mike);
            report = mike.channelId;
            golf = _closure1_slot4;
            mike = golf.useState;
            options = false;
            verify = mike.bind(golf)(options);
            golf = _closure1_slot3;
            mike = 2;
            golf = golf.bind(tango)(verify, mike);
            mike = 0;
            result = golf[mike];
            mike = 1;
            mike = golf[mike];
            var _closure2_slot0 = mike;
            mike = _closure1_slot18;
            mike = mike.bind(tango)(report);
            verify = mike.mute;
            golf = mike.onPress;
            mike = function(argFoo) { // Original name: useDeafHandlers
                oscar = argFoo;
                var _closure3_slot0 = oscar;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 11;
                tango = tango[zulu];
                zulu = undefined;
                report = report.bind(zulu)(tango);
                tango = report.useStateFromStoresObject;
                golf = _closure1_slot8;
                zulu = new Array(6);
                zulu[0] = golf;
                golf = _closure1_slot7;
                zulu[1] = golf;
                golf = _closure1_slot11;
                zulu[2] = golf;
                golf = _closure1_slot9;
                zulu[3] = golf;
                golf = _closure1_slot10;
                zulu[4] = golf;
                mike = _closure1_slot6;
                zulu[5] = mike;
                mike = new Array(1);
                mike[0] = oscar;
                entity = function() {
                    _fun122333: for(var _fun122333_ip = 0; ; ) switch(_fun122333_ip) {
 0:
                        tango = _closure1_slot8;
                        zulu = tango.getChannel;
                        mike = _closure3_slot0;
                        options = zulu.bind(tango)(mike);
                        mike = null;
                        if(!(mike == options)) { _fun122333_ip = 46; continue _fun122333 }
 30:
                        zulu = {'selfDeaf': false, 'deaf': false};
                        _fun122333_ip = 96; continue _fun122333;
 46:
                        report = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 14;
                        tango = tango[mike];
                        mike = undefined;
                        golf = report.bind(mike)(tango);
                        oscar = golf.getDeafStates;
                        yankee = _closure1_slot11;
                        offset = _closure1_slot9;
                        verify = _closure1_slot7;
                        foxtrot = golf;
                        romeo = options;
                        zulu = foxtrot[oscar](romeo, yankee, offset, verify, options);
 96:
                        tango = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 13;
                        mike = mike[entity];
                        entity = undefined;
                        mike = tango.bind(entity)(mike);
                        entity = mike.createDeafHandler;
                        entity = entity.bind(mike)(zulu);
                        return entity;
                    }
                };
                entity = tango.bind(report)(zulu, entity, mike);
                return entity;
            };
            report = mike.bind(tango)(report);
            mike = report.deaf;
            report = report.onPress;
            if(mike) { _fun122331_ip = 200; continue _fun122331 }
 189:
            mike = undefined;
            if(!verify) { _fun122331_ip = 197; continue _fun122331 }
 194:
            mike = golf;
 197:
            report = mike;
 200:
            _closure2_slot1 = report;
            echo = _closure1_slot0;
            kilo = _closure1_slot2;
            mike = 16;
            mike = kilo[mike];
            golf = echo.bind(tango)(mike);
            mike = golf.useSharedValue;
            foxtrot = mike.bind(golf)(options);
            _closure2_slot2 = foxtrot;
            romeo = _closure1_slot1;
            mike = 17;
            mike = kilo[mike];
            mike = romeo.bind(tango)(mike);
            mike = mike.bind(tango)();
            _closure2_slot3 = mike;
            verify = _closure1_slot4;
            options = verify.useRef;
            golf = {'active': false, 'dragging': false};
            golf = options.bind(verify)(golf);
            _closure2_slot4 = golf;
            verify = _closure1_slot4;
            options = verify.useCallback;
            golf = new Array(3);
            golf[0] = mike;
            golf[1] = foxtrot;
            golf[2] = report;
            report = function() {
                _fun122334: for(var _fun122334_ip = 0; ; ) switch(_fun122334_ip) {
 0:
                    mike = _closure2_slot4;
                    mike = mike.current;
                    mike = mike.active;
                    if(mike) { _fun122334_ip = 189; continue _fun122334 }
 24:
                    zulu = _closure2_slot1;
                    mike = null;
                    if(!(mike != zulu)) { _fun122334_ip = 44; continue _fun122334 }
 34:
                    zulu = _closure2_slot1;
                    mike = undefined;
                    mike = zulu.bind(mike)();
 44:
                    mike = _closure2_slot4;
                    mike = mike.current;
                    zulu = true;
                    mike['active'] = zulu;
                    options = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 18;
                    oscar = verify[report];
                    mike = undefined;
                    golf = options.bind(mike)(oscar);
                    oscar = golf.triggerHapticFeedback;
                    report = verify[report];
                    report = options.bind(mike)(report);
                    report = report.HapticFeedbackTypes;
                    report = report.IMPACT_MEDIUM;
                    report = oscar.bind(golf)(report);
                    report = _closure1_slot9;
                    tango = report.getMediaEngine;
                    oscar = tango.bind(report)();
                    report = oscar.eachConnection;
                    tango = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.setForceAudioInput;
                        entity = true;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    tango = report.bind(oscar)(tango);
                    report = _closure2_slot3;
                    tango = report.lock;
                    tango = tango.bind(report)();
                    report = _closure2_slot2;
                    tango = report.set;
                    tango = tango.bind(report)(zulu);
                    entity = _closure2_slot0;
                    entity = entity.bind(mike)(zulu);
 189:
                    entity = undefined;
                    return entity;
                }
            };
            update = options.bind(verify)(report, golf);
            _closure2_slot5 = update;
            options = _closure1_slot4;
            golf = options.useCallback;
            report = new Array(2);
            report[0] = mike;
            report[1] = foxtrot;
            mike = function() {
                _fun122336: for(var _fun122336_ip = 0; ; ) switch(_fun122336_ip) {
 0:
                    mike = _closure2_slot4;
                    mike = mike.current;
                    mike = mike.active;
                    if(!mike) { _fun122336_ip = 129; continue _fun122336 }
 21:
                    mike = _closure2_slot4;
                    mike = mike.current;
                    zulu = false;
                    mike['active'] = zulu;
                    mike = _closure2_slot4;
                    mike = mike.current;
                    mike['dragging'] = zulu;
                    tango = _closure1_slot9;
                    mike = tango.getMediaEngine;
                    report = mike.bind(tango)();
                    tango = report.eachConnection;
                    mike = function(argFoo) {
                        zulu = argFoo;
                        mike = zulu.setForceAudioInput;
                        entity = false;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = tango.bind(report)(mike);
                    tango = _closure2_slot3;
                    mike = tango.unlock;
                    mike = mike.bind(tango)();
                    tango = _closure2_slot2;
                    mike = tango.set;
                    mike = mike.bind(tango)(zulu);
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = mike.bind(entity)(zulu);
 129:
                    entity = undefined;
                    return entity;
                }
            };
            options = golf.bind(options)(mike, report);
            _closure2_slot6 = options;
            verify = _closure1_slot4;
            golf = verify.useCallback;
            report = new Array(1);
            report[0] = options;
            mike = function() {
                _fun122338: for(var _fun122338_ip = 0; ; ) switch(_fun122338_ip) {
 0:
                    mike = _closure2_slot4;
                    mike = mike.current;
                    mike = mike.dragging;
                    if(mike) { _fun122338_ip = 31; continue _fun122338 }
 21:
                    mike = _closure2_slot6;
                    entity = undefined;
                    entity = mike.bind(entity)();
 31:
                    entity = undefined;
                    return entity;
                }
            };
            output = golf.bind(verify)(mike, report);
            verify = _closure1_slot4;
            golf = verify.useCallback;
            report = new Array(1);
            report[0] = update;
            mike = function() {
                _fun122339: for(var _fun122339_ip = 0; ; ) switch(_fun122339_ip) {
 0:
                    mike = _closure2_slot4;
                    mike = mike.current;
                    mike = mike.dragging;
                    if(mike) { _fun122339_ip = 48; continue _fun122339 }
 21:
                    mike = _closure2_slot4;
                    zulu = mike.current;
                    mike = true;
                    zulu['dragging'] = mike;
                    mike = _closure2_slot5;
                    entity = undefined;
                    entity = mike.bind(entity)();
 48:
                    entity = undefined;
                    return entity;
                }
            };
            mike = golf.bind(verify)(mike, report);
            _closure2_slot7 = mike;
            verify = _closure1_slot4;
            golf = verify.useMemo;
            report = new Array(2);
            report[0] = mike;
            report[1] = options;
            mike = function() {
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                oscar = 19;
                mike = offset[oscar];
                options = undefined;
                mike = verify.bind(options)(mike);
                zulu = mike.Gesture;
                mike = zulu.Pan;
                report = mike.bind(zulu)();
                zulu = report.manualActivation;
                mike = true;
                report = zulu.bind(report)(mike);
                zulu = report.onTouchesMove;
                mike = function(argFoo, argBar) { // Original name: n
                    _fun122341: for(var _fun122341_ip = 0; ; ) switch(_fun122341_ip) {
 0:
                        tango = argBar;
                        entity = argFoo;
                        report = entity.state;
                        oscar = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 19;
                        zulu = zulu[entity];
                        entity = undefined;
                        zulu = oscar.bind(entity)(zulu);
                        zulu = zulu.State;
                        zulu = zulu.BEGAN;
                        if(!(report === zulu)) { _fun122341_ip = 103; continue _fun122341 }
 52:
                        zulu = tango.activate;
                        zulu = zulu.bind(tango)();
                        zulu = _closure1_slot0;
                        tango = _closure1_slot2;
                        mike = 16;
                        mike = tango[mike];
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.runOnJS;
                        mike = _closure2_slot7;
                        mike = zulu.bind(tango)(mike);
                        mike = mike.bind(entity)();
 103:
                        return entity;
                    }
                };
                yankee = {};
                oscar = offset[oscar];
                oscar = verify.bind(options)(oscar);
                oscar = oscar.State;
                yankee['State'] = oscar;
                golf = 16;
                oscar = offset[golf];
                oscar = verify.bind(options)(oscar);
                oscar = oscar.runOnJS;
                yankee['runOnJS'] = oscar;
                romeo = _closure2_slot7;
                yankee['handleDragStart'] = romeo;
                mike['__closure'] = yankee;
                yankee = 4024795195709.0;
                mike['__workletHash'] = yankee;
                yankee = _closure1_slot16;
                mike['__initData'] = yankee;
                zulu = zulu.bind(report)(mike);
                mike = zulu.onFinalize;
                entity = function() { // Original name: t
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 16;
                    mike = mike[entity];
                    entity = undefined;
                    tango = zulu.bind(entity)(mike);
                    zulu = tango.runOnJS;
                    mike = _closure2_slot6;
                    mike = zulu.bind(tango)(mike);
                    mike = mike.bind(entity)();
                    return entity;
                };
                report = {};
                golf = offset[golf];
                golf = verify.bind(options)(golf);
                golf = golf.runOnJS;
                report['runOnJS'] = golf;
                oscar = _closure2_slot6;
                report['handlePTTEnd'] = oscar;
                entity['__closure'] = report;
                report = 9285688010037.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot17;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            verify = golf.bind(verify)(mike, report);
            golf = _closure1_slot4;
            report = golf.useEffect;
            mike = new Array(1);
            mike[0] = options;
            entity = function() {
                entity = function() {
                    mike = _closure2_slot6;
                    entity = undefined;
                    entity = mike.bind(entity)();
                    return entity;
                };
                return entity;
            };
            entity = report.bind(golf)(entity, mike);
            entity = 20;
            entity = kilo[entity];
            mike = echo.bind(tango)(entity);
            entity = mike.useVoicePanelButtonStyles;
            yankee = entity.bind(mike)(zulu);
            zulu = _closure1_slot14;
            mike = _closure1_slot13;
            entity = {};
            options = _closure1_slot12;
            report = 19;
            report = kilo[report];
            report = echo.bind(tango)(report);
            golf = report.GestureDetector;
            report = {};
            report['gesture'] = verify;
            backup = _closure1_slot12;
            verify = 21;
            verify = kilo[verify];
            romeo = romeo.bind(tango)(verify);
            verify = {};
            verify['onPressIn'] = update;
            verify['onPressOut'] = output;
            verify['props'] = sizing;
            verify['pressed'] = foxtrot;
            foxtrot = 22;
            sizing = kilo[foxtrot];
            sizing = echo.bind(tango)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kilo = kilo[foxtrot];
            kilo = echo.bind(tango)(kilo);
            kilo = kilo.t;
            kilo = kilo.Q8gkVF;
            kilo = sizing.bind(output)(kilo);
            verify['accessibilityLabel'] = kilo;
            if(result) { _fun122331_ip = 663; continue _fun122331 }
 655:
            kilo = yankee.iconBg;
            _fun122331_ip = 669; continue _fun122331;
 663:
            kilo = yankee.iconBgSelected;
 669:
            verify['style'] = kilo;
            output = _closure1_slot12;
            sizing = _closure1_slot0;
            echo = _closure1_slot2;
            kilo = 23;
            kilo = echo[kilo];
            kilo = sizing.bind(tango)(kilo);
            sizing = kilo.MicrophoneIcon;
            kilo = {};
            if(result) { _fun122331_ip = 721; continue _fun122331 }
 708:
            result = yankee.iconFill;
            result = result.color;
            _fun122331_ip = 732; continue _fun122331;
 721:
            echo = yankee.iconFillSelected;
            result = echo.color;
 732:
            kilo['color'] = result;
            result = 'lg';
            kilo['size'] = result;
            kilo = output.bind(tango)(sizing, kilo);
            verify['children'] = kilo;
            verify = backup.bind(tango)(romeo, verify);
            report['children'] = verify;
            golf = options.bind(tango)(golf, report);
            report = new Array(2);
            report[0] = golf;
            options = _closure1_slot12;
            romeo = _closure1_slot0;
            verify = _closure1_slot2;
            oscar = 24;
            oscar = verify[oscar];
            oscar = romeo.bind(tango)(oscar);
            golf = oscar.Text;
            oscar = {};
            backup = offset.text;
            offset = new Array(2);
            offset[0] = backup;
            yankee = yankee.iconFill;
            offset[1] = yankee;
            oscar['style'] = offset;
            offset = 'text-xxs/medium';
            oscar['variant'] = offset;
            offset = verify[foxtrot];
            offset = romeo.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = verify[foxtrot];
            verify = romeo.bind(tango)(verify);
            verify = verify.t;
            verify = verify.Q8gkVF;
            verify = offset.bind(yankee)(verify);
            oscar['children'] = verify;
            oscar = options.bind(tango)(golf, oscar);
            report[1] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['PTTButton'] = tango;
    mike = function(argFoo) { // Original name: MicButton
        _fun122345: for(var _fun122345_ip = 0; ; ) switch(_fun122345_ip) {
 0:
            mike = argFoo;
            offset = mike.props;
            golf = mike.wrapperSpecs;
            report = _closure1_slot18;
            verify = _closure1_slot4;
            oscar = verify.useContext;
            mike = _closure1_slot1;
            yankee = _closure1_slot2;
            zulu = 15;
            zulu = yankee[zulu];
            tango = undefined;
            zulu = mike.bind(tango)(zulu);
            zulu = oscar.bind(verify)(zulu);
            zulu = zulu.channelId;
            zulu = report.bind(tango)(zulu);
            oscar = zulu.mute;
            var _closure2_slot0 = oscar;
            verify = zulu.onPress;
            foxtrot = zulu.dominantMuteState;
            var _closure2_slot1 = foxtrot;
            report = _closure1_slot0;
            zulu = 20;
            zulu = yankee[zulu];
            report = report.bind(tango)(zulu);
            zulu = report.useVoicePanelButtonStyles;
            golf = zulu.bind(report)(golf);
            var _closure2_slot2 = golf;
            romeo = _closure1_slot4;
            report = romeo.useMemo;
            zulu = new Array(3);
            zulu[0] = golf;
            zulu[1] = oscar;
            zulu[2] = foxtrot;
            entity = function() {
                _fun122346: for(var _fun122346_ip = 0; ; ) switch(_fun122346_ip) {
 0:
                    zulu = _closure2_slot1;
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 13;
                    entity = report[entity];
                    report = undefined;
                    entity = tango.bind(report)(entity);
                    entity = entity.DominantMuteState;
                    entity = entity.SERVER_MUTE;
                    if(!(zulu !== entity)) { _fun122346_ip = 84; continue _fun122346 }
 48:
                    tango = _closure1_slot12;
                    zulu = _closure1_slot19;
                    entity = {};
                    golf = _closure2_slot2;
                    entity['buttonStyles'] = golf;
                    golf = _closure2_slot0;
                    entity['isMuted'] = golf;
                    entity = tango.bind(report)(zulu, entity);
                    _fun122346_ip = 141; continue _fun122346;
 84:
                    tango = _closure1_slot12;
                    zulu = _closure1_slot0;
                    golf = _closure1_slot2;
                    mike = 27;
                    mike = golf[mike];
                    mike = zulu.bind(report)(mike);
                    zulu = mike.MicrophoneDenyIcon;
                    mike = {};
                    oscar = _closure2_slot2;
                    oscar = oscar.iconFill;
                    oscar = oscar.color;
                    mike['color'] = oscar;
                    entity = tango.bind(report)(zulu, mike);
 141:
                    return entity;
                }
            };
            report = report.bind(romeo)(entity, zulu);
            zulu = _closure1_slot12;
            entity = 21;
            entity = yankee[entity];
            mike = mike.bind(tango)(entity);
            entity = {};
            entity['props'] = offset;
            entity['onPress'] = verify;
            verify = _closure1_slot0;
            romeo = _closure1_slot2;
            options = 22;
            offset = romeo[options];
            offset = verify.bind(tango)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            options = romeo[options];
            options = verify.bind(tango)(options);
            verify = options.t;
            if(oscar) { _fun122345_ip = 250; continue _fun122345 }
 237:
            options = verify.w4m94+;
            options = offset.bind(yankee)(options);
            _fun122345_ip = 261; continue _fun122345;
 250:
            verify = verify.YqAjX1;
            options = offset.bind(yankee)(verify);
 261:
            entity['accessibilityLabel'] = options;
            if(oscar) { _fun122345_ip = 276; continue _fun122345 }
 268:
            oscar = golf.iconBgSelected;
            _fun122345_ip = 282; continue _fun122345;
 276:
            oscar = golf.iconBg;
 282:
            entity['style'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['MicButton'] = mike;
    return entity;
})();
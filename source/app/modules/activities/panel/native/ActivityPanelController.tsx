// app/modules/activities/panel/native/ActivityPanelController.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo) { // Original name: useActivityOrientationState
        entity = argFoo;
        zulu = entity.channelId;
        var _closure2_slot0 = zulu;
        offset = entity.isConnected;
        var _closure2_slot1 = offset;
        verify = entity.selectedMode;
        var _closure2_slot2 = verify;
        tango = entity.isVoicePanelFullscreen;
        var _closure2_slot3 = tango;
        oscar = _closure1_slot0;
        report = _closure1_slot2;
        entity = 16;
        report = report[entity];
        entity = undefined;
        options = oscar.bind(entity)(report);
        golf = options.useStateFromStoresObject;
        report = _closure1_slot10;
        oscar = new Array(1);
        oscar[0] = report;
        report = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                mike = _closure2_slot0;
                zulu = null;
                mike = zulu != mike;
                report = null;
                if(!mike) { _fun00002_ip = 57; continue _fun00001 }
 18:
                tango = _closure1_slot10;
                mike = tango.getSelfEmbeddedActivityForChannel;
                entity = _closure2_slot0;
                mike = mike.bind(tango)(entity);
                tango = zulu == mike;
                entity = undefined;
                if(tango) { _fun00002_ip = 54; continue _fun00001 }
 49:
                entity = mike.applicationId;
 54:
                report = entity;
 57:
                entity = {};
                entity['applicationId'] = report;
                if(!(zulu != report)) { _fun00002_ip = 89; continue _fun00001 }
 67:
                tango = _closure1_slot10;
                mike = tango.getOrientationLockStateForApp;
                mike = mike.bind(tango)(report);
                if(!(zulu == mike)) { _fun00002_ip = 102; continue _fun00001 }
 89:
                zulu = _closure1_slot11;
                mike = zulu.UNLOCKED;
 102:
                entity['activityOrientationLockState'] = mike;
                return entity;
            }
        };
        report = golf.bind(options)(oscar, report);
        yankee = report.applicationId;
        options = report.activityOrientationLockState;
        var _closure2_slot4 = options;
        golf = _closure1_slot4;
        oscar = golf.useLayoutEffect;
        report = new Array(5);
        report[0] = yankee;
        report[1] = offset;
        report[2] = verify;
        report[3] = options;
        report[4] = tango;
        tango = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot3;
                if(entity) { _fun00004_ip = 306; continue _fun00003 }
 13:
                tango = _closure2_slot2;
                zulu = _closure1_slot14;
                zulu = zulu.PANEL;
                if(!(tango !== zulu)) { _fun00004_ip = 55; continue _fun00003 }
 34:
                tango = _closure2_slot2;
                zulu = _closure1_slot14;
                zulu = zulu.LAUNCHING_WITH_ORIENTATION_CHANGE;
                if(!(tango === zulu)) { _fun00004_ip = 274; continue _fun00003 }
 55:
                zulu = _closure2_slot1;
                if(!zulu) { _fun00004_ip = 274; continue _fun00003 }
 65:
                zulu = _closure2_slot4;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 12;
                mike = tango[mike];
                tango = undefined;
                report = report.bind(tango)(mike);
                mike = report.isIpadOS;
                mike = mike.bind(report)();
                if(mike) { _fun00004_ip = 306; continue _fun00003 }
 107:
                mike = _closure1_slot11;
                mike = mike.UNLOCKED;
                if(!(mike !== zulu)) { _fun00004_ip = 232; continue _fun00003 }
 121:
                mike = _closure1_slot11;
                mike = mike.PORTRAIT;
                if(!(mike !== zulu)) { _fun00004_ip = 192; continue _fun00003 }
 135:
                mike = _closure1_slot11;
                mike = mike.LANDSCAPE;
                if(!(mike === zulu)) { _fun00004_ip = 306; continue _fun00003 }
 152:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 13;
                mike = report[mike];
                oscar = zulu.bind(tango)(mike);
                report = oscar.lockOrientation;
                zulu = 'LANDSCAPE';
                mike = true;
                mike = report.bind(oscar)(zulu, mike);
                _fun00004_ip = 306; continue _fun00003;
 192:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 13;
                mike = report[mike];
                oscar = zulu.bind(tango)(mike);
                report = oscar.lockOrientation;
                zulu = 'PORTRAIT';
                mike = true;
                mike = report.bind(oscar)(zulu, mike);
                _fun00004_ip = 306; continue _fun00003;
 232:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 13;
                mike = report[mike];
                tango = zulu.bind(tango)(mike);
                zulu = tango.unlockOrientation;
                mike = {};
                report = true;
                mike['unlockAfterRotatingToPreviousLock'] = report;
                mike = zulu.bind(tango)(mike);
                _fun00004_ip = 306; continue _fun00003;
 274:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.restoreDefaultOrientation;
                entity = entity.bind(mike)();
 306:
                entity = undefined;
                return entity;
            }
        };
        tango = oscar.bind(golf)(tango, report);
        report = _closure1_slot4;
        tango = report.useLayoutEffect;
        zulu = function() {
            entity = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.restoreDefaultOrientation;
                entity = entity.bind(mike)();
                return entity;
            };
            return entity;
        };
        mike = new Array(0);
        mike = tango.bind(report)(zulu, mike);
        return entity;
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
    tango = report.bind(entity)(tango);
    golf = tango.OrientationLockState;
    var _closure1_slot11 = golf;
    golf = tango.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = golf;
    tango = tango.ACTIVITY_LANDSCAPE_ASPECT_RATIO;
    var _closure1_slot13 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.ActivityPanelModes;
    var _closure1_slot14 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot15 = tango;
    tango = 11;
    tango = oscar[tango];
    options = report.bind(entity)(tango);
    golf = options.cachedFunction;
    tango = function(argFoo, argBar, argBaz) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tango = argBar;
            golf = argBaz;
            oscar = entity.width;
            report = entity.height;
            mike = oscar > report;
            entity = _closure1_slot11;
            entity = entity.LANDSCAPE;
            if(!(entity !== golf)) { _fun00006_ip = 254; continue _fun00005 }
 43:
            entity = _closure1_slot11;
            entity = entity.PORTRAIT;
            if(!(entity !== golf)) { _fun00006_ip = 106; continue _fun00005 }
 57:
            entity = _closure1_slot11;
            entity = entity.UNLOCKED;
            entity = {};
            entity['width'] = oscar;
            golf = report;
            if(mike) { _fun00006_ip = 83; continue _fun00005 }
 79:
            golf = report - tango;
 83:
            entity['height'] = golf;
            entity['isLandscape'] = mike;
            golf = false;
            entity['isLetterboxed'] = golf;
            entity['isWindowLandscape'] = mike;
            return entity;
 106:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 12;
            golf = golf[entity];
            entity = undefined;
            golf = options.bind(entity)(golf);
            entity = golf.isIpadOS;
            entity = entity.bind(golf)();
            if(!entity) { _fun00006_ip = 144; continue _fun00005 }
 141:
            if(mike) { _fun00006_ip = 212; continue _fun00005 }
 144:
            entity = {'width': null, 'height': null, 'isLandscape': false, 'isLetterboxed': false, 'isWindowLandscape': false};
            golf = global;
            verify = golf.Math;
            options = verify.min;
            options = options.bind(verify)(oscar, report);
            entity['width'] = options;
            options = golf.Math;
            golf = options.max;
            golf = golf.bind(options)(report, oscar);
            golf = golf - tango;
            entity['height'] = golf;
            _fun00006_ip = 252; continue _fun00005;
 212:
            golf = {};
            options = _closure1_slot12;
            options = report * options;
            golf['width'] = options;
            golf['height'] = report;
            options = false;
            golf['isLandscape'] = options;
            options = true;
            golf['isLetterboxed'] = options;
            golf['isWindowLandscape'] = mike;
            entity = golf;
 252:
            return entity;
 254:
            options = _closure1_slot0;
            golf = _closure1_slot2;
            entity = 12;
            golf = golf[entity];
            entity = undefined;
            golf = options.bind(entity)(golf);
            entity = golf.isIpadOS;
            entity = entity.bind(golf)();
            if(!entity) { _fun00006_ip = 333; continue _fun00005 }
 289:
            if(mike) { _fun00006_ip = 333; continue _fun00005 }
 292:
            entity = {};
            entity['width'] = oscar;
            zulu = _closure1_slot13;
            zulu = oscar * zulu;
            zulu = zulu - tango;
            entity['height'] = zulu;
            zulu = true;
            entity['isLandscape'] = zulu;
            entity['isLetterboxed'] = zulu;
            entity['isWindowLandscape'] = mike;
            _fun00006_ip = 398; continue _fun00005;
 333:
            mike = {'width': null, 'height': null, 'isLetterboxed': false, 'isLandscape': true, 'isWindowLandscape': true};
            zulu = global;
            golf = zulu.Math;
            tango = golf.max;
            tango = tango.bind(golf)(oscar, report);
            mike['width'] = tango;
            tango = zulu.Math;
            zulu = tango.min;
            zulu = zulu.bind(tango)(report, oscar);
            mike['height'] = zulu;
            entity = mike;
 398:
            return entity;
        }
    };
    tango = golf.bind(options)(tango);
    var _closure1_slot16 = tango;
    tango = {};
    golf = 'function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}';
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = {};
    golf = 'function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}';
    tango['code'] = golf;
    var _closure1_slot18 = tango;
    tango = 32;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/panel/native/ActivityPanelController.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: ActivityPanelController
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            tango = undefined;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            backup = _closure1_slot1;
            zulu = _closure1_slot2;
            oscar = 17;
            oscar = zulu[oscar];
            oscar = backup.bind(tango)(oscar);
            verify = oscar.bind(tango)();
            oscar = 18;
            oscar = zulu[oscar];
            oscar = backup.bind(tango)(oscar);
            output = oscar.bind(tango)();
            golf = _closure1_slot0;
            oscar = 16;
            options = zulu[oscar];
            romeo = golf.bind(tango)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot10;
            offset = new Array(1);
            offset[0] = options;
            options = function() {
                mike = _closure1_slot10;
                entity = mike.getActivityPanelMode;
                entity = entity.bind(mike)();
                return entity;
            };
            foxtrot = yankee.bind(romeo)(offset, options);
            var _closure2_slot0 = foxtrot;
            options = 15;
            offset = zulu[options];
            romeo = golf.bind(tango)(offset);
            yankee = romeo.useSharedValue;
            offset = {'x': 4294967295, 'y': 4294967295};
            yankee = yankee.bind(romeo)(offset);
            var _closure2_slot1 = yankee;
            offset = 19;
            offset = zulu[offset];
            offset = backup.bind(tango)(offset);
            romeo = offset.bind(tango)(verify);
            var _closure2_slot2 = romeo;
            options = zulu[options];
            kilo = golf.bind(tango)(options);
            offset = kilo.useSharedValue;
            options = {'x': 0, 'y': 0, 'gestureActive': false};
            options = offset.bind(kilo)(options);
            var _closure2_slot3 = options;
            kilo = _closure1_slot4;
            offset = kilo.useRef;
            offset = offset.bind(kilo)(foxtrot);
            var _closure2_slot4 = offset;
            offset = 20;
            offset = zulu[offset];
            offset = backup.bind(tango)(offset);
            offset = offset.bind(tango)();
            var _closure2_slot5 = offset;
            zulu = zulu[oscar];
            sizing = golf.bind(tango)(zulu);
            kilo = sizing.useStateFromStoresObject;
            zulu = _closure1_slot10;
            backup = new Array(2);
            backup[0] = zulu;
            zulu = _closure1_slot5;
            backup[1] = zulu;
            golf = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = _closure1_slot10;
                    entity = mike.getConnectedActivityChannelId;
                    entity = entity.bind(mike)();
                    tango = null;
                    report = tango == entity;
                    mike = undefined;
                    verify = undefined;
                    if(report) { _fun00010_ip = 63; continue _fun00009 }
 30:
                    oscar = _closure1_slot1;
                    golf = _closure1_slot2;
                    report = 21;
                    report = golf[report];
                    report = oscar.bind(mike)(report);
                    report = report.bind(mike)(entity);
                    verify = undefined;
                    if(report) { _fun00010_ip = 63; continue _fun00009 }
 60:
                    verify = entity;
 63:
                    entity = tango != verify;
                    options = undefined;
                    if(!entity) { _fun00010_ip = 99; continue _fun00009 }
 72:
                    report = _closure1_slot10;
                    entity = report.getSelfEmbeddedActivityForChannel;
                    entity = entity.bind(report)(verify);
                    report = tango != entity;
                    options = undefined;
                    if(!report) { _fun00010_ip = 99; continue _fun00009 }
 96:
                    options = entity;
 99:
                    entity = tango == options;
                    golf = undefined;
                    if(entity) { _fun00010_ip = 113; continue _fun00009 }
 108:
                    golf = options.applicationId;
 113:
                    entity = tango != golf;
                    oscar = undefined;
                    if(!entity) { _fun00010_ip = 137; continue _fun00009 }
 122:
                    report = _closure1_slot5;
                    entity = report.getApplication;
                    oscar = entity.bind(report)(golf);
 137:
                    entity = tango == oscar;
                    report = undefined;
                    if(entity) { _fun00010_ip = 151; continue _fun00009 }
 146:
                    report = oscar.id;
 151:
                    entity = {};
                    entity['connectedActivityInTextChannelId'] = verify;
                    entity['connectedActivity'] = options;
                    entity['connectedActivityAppId'] = golf;
                    entity['currentApp'] = oscar;
                    tango = tango == report;
                    mike = undefined;
                    if(tango) { _fun00010_ip = 197; continue _fun00009 }
 182:
                    tango = _closure1_slot10;
                    zulu = tango.getOrientationLockStateForApp;
                    mike = zulu.bind(tango)(report);
 197:
                    entity['focusedOrientationLockState'] = mike;
                    return entity;
                }
            };
            zulu = new Array(0);
            golf = kilo.bind(sizing)(backup, golf, zulu);
            zulu = golf.connectedActivityInTextChannelId;
            var _closure2_slot6 = zulu;
            kilo = golf.connectedActivity;
            update = golf.connectedActivityAppId;
            var _closure2_slot7 = update;
            echo = golf.currentApp;
            golf = golf.focusedOrientationLockState;
            backup = null;
            if(!(backup == golf)) { _fun00008_ip = 373; continue _fun00007 }
 342:
            result = _closure1_slot0;
            source = _closure1_slot2;
            sizing = 22;
            sizing = source[sizing];
            result = result.bind(tango)(sizing);
            sizing = result.getDefaultOrientationLockState;
            golf = sizing.bind(result)(echo);
 373:
            _closure2_slot8 = golf;
            sizing = _closure1_slot16;
            verify = verify.top;
            verify = sizing.bind(tango)(output, verify, golf);
            _closure2_slot9 = verify;
            output = _closure1_slot4;
            sizing = output.useRef;
            sizing = sizing.bind(output)(update);
            _closure2_slot10 = sizing;
            result = _closure1_slot0;
            echo = _closure1_slot2;
            oscar = echo[oscar];
            source = result.bind(tango)(oscar);
            output = source.useStateFromStores;
            oscar = _closure1_slot9;
            sizing = new Array(1);
            sizing[0] = oscar;
            oscar = function() {
                mike = _closure1_slot9;
                entity = mike.getChannelId;
                entity = entity.bind(mike)();
                return entity;
            };
            output = output.bind(source)(sizing, oscar);
            oscar = 23;
            oscar = echo[oscar];
            sizing = result.bind(tango)(oscar);
            oscar = sizing.useIsVoicePanelFullscreen;
            oscar = oscar.bind(sizing)();
            source = _closure1_slot1;
            sizing = 24;
            sizing = echo[sizing];
            sizing = source.bind(tango)(sizing);
            sizing = sizing.bind(tango)();
            sizing = 25;
            sizing = echo[sizing];
            echo = result.bind(tango)(sizing);
            result = echo.useNavigatorBackPressHandler;
            sizing = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zulu = _closure2_slot0;
                    entity = _closure1_slot14;
                    entity = entity.PANEL;
                    entity = zulu === entity;
                    if(!entity) { _fun00012_ip = 72; continue _fun00011 }
 27:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 26;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.updateActivityPanelMode;
                    mike = _closure1_slot14;
                    mike = mike.PIP;
                    mike = zulu.bind(tango)(mike);
                    entity = true;
 72:
                    return entity;
                }
            };
            sizing = result.bind(echo)(sizing);
            echo = _closure1_slot4;
            result = echo.useEffect;
            sizing = new Array(4);
            sizing[0] = update;
            sizing[1] = golf;
            sizing[2] = foxtrot;
            golf = verify.isWindowLandscape;
            sizing[3] = golf;
            golf = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    mike = _closure2_slot7;
                    zulu = null;
                    if(!(zulu != mike)) { _fun00014_ip = 29; continue _fun00013 }
 13:
                    mike = _closure2_slot10;
                    mike = mike.current;
                    if(!(zulu != mike)) { _fun00014_ip = 221; continue _fun00013 }
 29:
                    mike = _closure2_slot7;
                    if(!(zulu == mike)) { _fun00014_ip = 50; continue _fun00013 }
 37:
                    mike = _closure2_slot10;
                    mike = mike.current;
                    if(!(zulu == mike)) { _fun00014_ip = 170; continue _fun00013 }
 50:
                    tango = _closure2_slot0;
                    zulu = _closure1_slot14;
                    zulu = zulu.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    zulu = tango === zulu;
                    if(!zulu) { _fun00014_ip = 116; continue _fun00013 }
 74:
                    report = _closure1_slot1;
                    oscar = _closure1_slot2;
                    tango = 27;
                    tango = oscar[tango];
                    golf = undefined;
                    oscar = report.bind(golf)(tango);
                    tango = _closure2_slot9;
                    report = tango.isWindowLandscape;
                    tango = _closure2_slot8;
                    zulu = oscar.bind(golf)(report, tango);
 116:
                    if(!zulu) { _fun00014_ip = 386; continue _fun00013 }
 122:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 26;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.updateActivityPanelMode;
                    mike = _closure1_slot14;
                    mike = mike.PANEL;
                    mike = zulu.bind(tango)(mike);
                    _fun00014_ip = 386; continue _fun00013;
 170:
                    report = _closure1_slot0;
                    tango = _closure1_slot2;
                    zulu = 26;
                    tango = tango[zulu];
                    zulu = undefined;
                    tango = report.bind(zulu)(tango);
                    zulu = tango.updateActivityPanelMode;
                    mike = _closure1_slot14;
                    mike = mike.DISCONNECTED;
                    mike = zulu.bind(tango)(mike);
                    _fun00014_ip = 386; continue _fun00013;
 221:
                    tango = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 27;
                    zulu = report[zulu];
                    report = undefined;
                    oscar = tango.bind(report)(zulu);
                    zulu = _closure2_slot9;
                    tango = zulu.isWindowLandscape;
                    zulu = _closure2_slot8;
                    zulu = oscar.bind(report)(tango, zulu);
                    if(zulu) { _fun00014_ip = 345; continue _fun00013 }
 269:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 12;
                    zulu = oscar[zulu];
                    tango = tango.bind(report)(zulu);
                    zulu = tango.isIpadOS;
                    zulu = zulu.bind(tango)();
                    if(zulu) { _fun00014_ip = 345; continue _fun00013 }
 302:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 26;
                    zulu = oscar[zulu];
                    oscar = tango.bind(report)(zulu);
                    tango = oscar.updateActivityPanelMode;
                    zulu = _closure1_slot14;
                    zulu = zulu.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    zulu = tango.bind(oscar)(zulu);
                    _fun00014_ip = 386; continue _fun00013;
 345:
                    tango = _closure1_slot0;
                    oscar = _closure1_slot2;
                    zulu = 26;
                    zulu = oscar[zulu];
                    tango = tango.bind(report)(zulu);
                    zulu = tango.updateActivityPanelMode;
                    mike = _closure1_slot14;
                    mike = mike.PANEL;
                    mike = zulu.bind(tango)(mike);
 386:
                    mike = _closure2_slot10;
                    entity = _closure2_slot7;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            golf = result.bind(echo)(golf, sizing);
            echo = _closure1_slot4;
            result = echo.useEffect;
            sizing = new Array(1);
            sizing[0] = foxtrot;
            golf = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = _closure1_slot14;
                    zulu = zulu.PANEL;
                    zulu = tango === zulu;
                    if(!zulu) { _fun00016_ip = 50; continue _fun00015 }
 27:
                    tango = _closure2_slot4;
                    report = tango.current;
                    tango = _closure1_slot14;
                    tango = tango.PANEL;
                    zulu = report !== tango;
 50:
                    if(!zulu) { _fun00016_ip = 85; continue _fun00015 }
 53:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 28;
                    zulu = zulu[mike];
                    mike = undefined;
                    zulu = tango.bind(mike)(zulu);
                    mike = zulu.dismissKeyboard;
                    mike = mike.bind(zulu)();
 85:
                    mike = _closure2_slot4;
                    entity = _closure2_slot0;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            golf = result.bind(echo)(golf, sizing);
            sizing = _closure1_slot19;
            golf = {};
            golf['channelId'] = output;
            output = backup != kilo;
            golf['isConnected'] = output;
            golf['selectedMode'] = foxtrot;
            golf['isVoicePanelFullscreen'] = oscar;
            golf = sizing.bind(tango)(golf);
            golf = {};
            sizing = backup != kilo;
            golf['isActivityConnected'] = sizing;
            backup = backup != kilo;
            if(!backup) { _fun00008_ip = 678; continue _fun00007 }
 664:
            kilo = _closure1_slot14;
            kilo = kilo.PANEL;
            backup = foxtrot === kilo;
 678:
            golf['isActivityFocused'] = backup;
            golf['isVoicePanelFullscreen'] = oscar;
            oscar = function(argFoo) { // Original name: useSafeAreaLock
                mike = argFoo;
                golf = mike.isActivityConnected;
                var _closure3_slot0 = golf;
                oscar = mike.isActivityFocused;
                var _closure3_slot1 = oscar;
                report = mike.isVoicePanelFullscreen;
                var _closure3_slot2 = report;
                tango = _closure1_slot4;
                zulu = tango.useId;
                options = zulu.bind(tango)();
                var _closure3_slot3 = options;
                tango = _closure1_slot4;
                zulu = tango.useLayoutEffect;
                mike = new Array(4);
                mike[0] = options;
                mike[1] = golf;
                mike[2] = oscar;
                mike[3] = report;
                entity = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        mike = _closure3_slot2;
                        entity = undefined;
                        if(mike) { _fun00018_ip = 79; continue _fun00017 }
 12:
                        zulu = _closure3_slot0;
                        mike = undefined;
                        if(!zulu) { _fun00018_ip = 77; continue _fun00017 }
 21:
                        tango = _closure1_slot7;
                        zulu = tango.getState;
                        report = zulu.bind(tango)();
                        tango = report.requestSafeAreaDisableLock;
                        zulu = {};
                        golf = _closure3_slot3;
                        zulu['key'] = golf;
                        oscar = _closure3_slot1;
                        zulu['lockEnabled'] = oscar;
                        zulu = tango.bind(report)(zulu);
                        mike = function() {
                            mike = _closure1_slot7;
                            entity = mike.getState;
                            zulu = entity.bind(mike)();
                            mike = zulu.requestSafeAreaDisableLock;
                            entity = {};
                            tango = _closure3_slot3;
                            entity['key'] = tango;
                            tango = false;
                            entity['lockEnabled'] = tango;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
 77:
                        return mike;
 79:
                        return entity;
                    }
                };
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            oscar = oscar.bind(tango)(golf);
            backup = _closure1_slot4;
            golf = backup.useEffect;
            oscar = new Array(2);
            oscar[0] = foxtrot;
            oscar[1] = zulu;
            zulu = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = _closure1_slot14;
                    zulu = zulu.PANEL;
                    if(!(tango === zulu)) { _fun00020_ip = 131; continue _fun00019 }
 24:
                    tango = _closure1_slot8;
                    zulu = tango.getChannel;
                    entity = _closure2_slot6;
                    entity = zulu.bind(tango)(entity);
                    tango = undefined;
                    if(!(tango !== entity)) { _fun00020_ip = 131; continue _fun00019 }
 48:
                    oscar = _closure1_slot1;
                    report = _closure1_slot2;
                    zulu = 29;
                    zulu = report[zulu];
                    golf = oscar.bind(tango)(zulu);
                    oscar = golf.selectChannel;
                    zulu = {};
                    options = entity.guild_id;
                    zulu['guildId'] = options;
                    options = entity.id;
                    zulu['channelId'] = options;
                    zulu = oscar.bind(golf)(zulu);
                    zulu = _closure1_slot0;
                    mike = 30;
                    mike = report[mike];
                    zulu = zulu.bind(tango)(mike);
                    mike = zulu.transitionToChannel;
                    entity = entity.id;
                    entity = mike.bind(zulu)(entity);
 131:
                    entity = undefined;
                    return entity;
                }
            };
            zulu = golf.bind(backup)(zulu, oscar);
            zulu = function(argFoo) { // Original name: useAppFreeze
                yankee = argFoo;
                var _closure3_slot0 = yankee;
                backup = _closure1_slot0;
                kilo = _closure1_slot2;
                entity = 14;
                tango = kilo[entity];
                entity = undefined;
                report = backup.bind(entity)(tango);
                tango = report.useIsActivityPanelFullscreen;
                options = tango.bind(report)();
                var _closure3_slot1 = options;
                oscar = _closure1_slot4;
                report = oscar.useState;
                tango = false;
                oscar = report.bind(oscar)(tango);
                report = _closure1_slot3;
                tango = 2;
                report = report.bind(entity)(oscar, tango);
                tango = 0;
                golf = report[tango];
                var _closure3_slot2 = golf;
                tango = 1;
                romeo = report[tango];
                var _closure3_slot3 = romeo;
                report = _closure1_slot4;
                tango = report.useId;
                oscar = tango.bind(report)();
                var _closure3_slot4 = oscar;
                foxtrot = 15;
                tango = kilo[foxtrot];
                offset = backup.bind(entity)(tango);
                verify = offset.useAnimatedReaction;
                report = function() { // Original name: l
                    mike = _closure3_slot0;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    entity = entity.gestureActive;
                    return entity;
                };
                tango = {};
                tango['wrapperOffset'] = yankee;
                report['__closure'] = tango;
                tango = 5299695936442.0;
                report['__workletHash'] = tango;
                tango = _closure1_slot17;
                report['__initData'] = tango;
                tango = function(argFoo, argBar) { // Original name: s
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zulu = argFoo;
                        entity = argBar;
                        if(!(zulu !== entity)) { _fun00022_ip = 57; continue _fun00021 }
 10:
                        tango = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 15;
                        entity = mike[entity];
                        mike = undefined;
                        report = tango.bind(mike)(entity);
                        tango = report.runOnJS;
                        entity = _closure3_slot3;
                        entity = tango.bind(report)(entity);
                        entity = entity.bind(mike)(zulu);
 57:
                        entity = undefined;
                        return entity;
                    }
                };
                yankee = {};
                foxtrot = kilo[foxtrot];
                foxtrot = backup.bind(entity)(foxtrot);
                foxtrot = foxtrot.runOnJS;
                yankee['runOnJS'] = foxtrot;
                yankee['setWrapperGestureInProgress'] = romeo;
                tango['__closure'] = yankee;
                yankee = 5831467313798.0;
                tango['__workletHash'] = yankee;
                yankee = _closure1_slot18;
                tango['__initData'] = yankee;
                tango = verify.bind(offset)(report, tango);
                report = _closure1_slot4;
                tango = report.useEffect;
                zulu = new Array(3);
                zulu[0] = options;
                zulu[1] = golf;
                zulu[2] = oscar;
                mike = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        mike = _closure1_slot6;
                        entity = mike.getState;
                        zulu = entity.bind(mike)();
                        mike = zulu.requestFreezeLock;
                        entity = {};
                        report = _closure3_slot1;
                        if(!report) { _fun00024_ip = 39; continue _fun00023 }
 35:
                        report = _closure3_slot2;
 39:
                        entity['lockEnabled'] = report;
                        tango = _closure3_slot4;
                        entity['key'] = tango;
                        entity = mike.bind(zulu)(entity);
                        entity = function() {
                            mike = _closure1_slot6;
                            entity = mike.getState;
                            zulu = entity.bind(mike)();
                            mike = zulu.requestFreezeLock;
                            entity = {};
                            tango = false;
                            entity['lockEnabled'] = tango;
                            tango = _closure3_slot4;
                            entity['key'] = tango;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        return entity;
                    }
                };
                mike = tango.bind(report)(mike, zulu);
                return entity;
            };
            zulu = zulu.bind(tango)(options);
            golf = _closure1_slot4;
            oscar = golf.useMemo;
            zulu = new Array(6);
            zulu[0] = foxtrot;
            zulu[1] = romeo;
            zulu[2] = yankee;
            zulu[3] = offset;
            zulu[4] = verify;
            zulu[5] = options;
            mike = function() {
                entity = {};
                zulu = _closure2_slot0;
                entity['mode'] = zulu;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                zulu = 26;
                tango = tango[zulu];
                zulu = undefined;
                zulu = report.bind(zulu)(tango);
                zulu = zulu.updateActivityPanelMode;
                entity['setMode'] = zulu;
                zulu = _closure2_slot9;
                entity['wrapperDimensions'] = zulu;
                zulu = _closure2_slot1;
                entity['pipState'] = zulu;
                zulu = _closure2_slot2;
                entity['pipAvoidanceSpecs'] = zulu;
                zulu = _closure2_slot3;
                entity['wrapperOffset'] = zulu;
                mike = _closure2_slot5;
                entity['useActivityWebViewLock'] = mike;
                return entity;
            };
            oscar = oscar.bind(golf)(mike, zulu);
            zulu = _closure1_slot15;
            mike = _closure1_slot1;
            golf = _closure1_slot2;
            entity = 31;
            entity = golf[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.Provider;
            entity = {};
            entity['value'] = oscar;
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();
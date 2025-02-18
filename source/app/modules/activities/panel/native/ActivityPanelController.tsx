// app/modules/activities/panel/native/ActivityPanelController.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: useActivityOrientationState
        entity = argFoo;
        zuuluu = entity.channelId;
        var _closure2_slot0 = zuuluu;
        offset = entity.isConnected;
        var _closure2_slot1 = offset;
        verify = entity.selectedMode;
        var _closure2_slot2 = verify;
        tangon = entity.isVoicePanelFullscreen;
        var _closure2_slot3 = tangon;
        oscard = _closure1_slot0;
        report = _closure1_slot2;
        entity = 16;
        report = report[entity];
        entity = undefined;
        option = oscard.bind(entity)(report);
        golfie = option.useStateFromStoresObject;
        report = _closure1_slot10;
        oscard = new Array(1);
        oscard[0] = report;
        report = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = _closure2_slot0;
                zuuluu = null;
                michal = zuuluu != michal;
                report = null;
                if(!michal) { _fun00002_ip = 57; continue _fun00001 }
 18:
                tangon = _closure1_slot10;
                michal = tangon.getSelfEmbeddedActivityForChannel;
                entity = _closure2_slot0;
                michal = michal.bind(tangon)(entity);
                tangon = zuuluu == michal;
                entity = undefined;
                if(tangon) { _fun00002_ip = 54; continue _fun00001 }
 49:
                entity = michal.applicationId;
 54:
                report = entity;
 57:
                entity = {};
                entity['applicationId'] = report;
                if(!(zuuluu != report)) { _fun00002_ip = 89; continue _fun00001 }
 67:
                tangon = _closure1_slot10;
                michal = tangon.getOrientationLockStateForApp;
                michal = michal.bind(tangon)(report);
                if(!(zuuluu == michal)) { _fun00002_ip = 102; continue _fun00001 }
 89:
                zuuluu = _closure1_slot11;
                michal = zuuluu.UNLOCKED;
 102:
                entity['activityOrientationLockState'] = michal;
                return entity;
            }
        };
        report = golfie.bind(option)(oscard, report);
        yankee = report.applicationId;
        option = report.activityOrientationLockState;
        var _closure2_slot4 = option;
        golfie = _closure1_slot4;
        oscard = golfie.useLayoutEffect;
        report = new Array(5);
        report[0] = yankee;
        report[1] = offset;
        report[2] = verify;
        report[3] = option;
        report[4] = tangon;
        tangon = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = _closure2_slot3;
                if(entity) { _fun00004_ip = 306; continue _fun00003 }
 13:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu.PANEL;
                if(!(tangon !== zuuluu)) { _fun00004_ip = 55; continue _fun00003 }
 34:
                tangon = _closure2_slot2;
                zuuluu = _closure1_slot14;
                zuuluu = zuuluu.LAUNCHING_WITH_ORIENTATION_CHANGE;
                if(!(tangon === zuuluu)) { _fun00004_ip = 274; continue _fun00003 }
 55:
                zuuluu = _closure2_slot1;
                if(!zuuluu) { _fun00004_ip = 274; continue _fun00003 }
 65:
                zuuluu = _closure2_slot4;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 12;
                michal = tangon[michal];
                tangon = undefined;
                report = report.bind(tangon)(michal);
                michal = report.isIpadOS;
                michal = michal.bind(report)();
                if(michal) { _fun00004_ip = 306; continue _fun00003 }
 107:
                michal = _closure1_slot11;
                michal = michal.UNLOCKED;
                if(!(michal !== zuuluu)) { _fun00004_ip = 232; continue _fun00003 }
 121:
                michal = _closure1_slot11;
                michal = michal.PORTRAIT;
                if(!(michal !== zuuluu)) { _fun00004_ip = 192; continue _fun00003 }
 135:
                michal = _closure1_slot11;
                michal = michal.LANDSCAPE;
                if(!(michal === zuuluu)) { _fun00004_ip = 306; continue _fun00003 }
 152:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 13;
                michal = report[michal];
                oscard = zuuluu.bind(tangon)(michal);
                report = oscard.lockOrientation;
                zuuluu = 'LANDSCAPE';
                michal = true;
                michal = report.bind(oscard)(zuuluu, michal);
                _fun00004_ip = 306; continue _fun00003;
 192:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 13;
                michal = report[michal];
                oscard = zuuluu.bind(tangon)(michal);
                report = oscard.lockOrientation;
                zuuluu = 'PORTRAIT';
                michal = true;
                michal = report.bind(oscard)(zuuluu, michal);
                _fun00004_ip = 306; continue _fun00003;
 232:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 13;
                michal = report[michal];
                tangon = zuuluu.bind(tangon)(michal);
                zuuluu = tangon.unlockOrientation;
                michal = {};
                report = true;
                michal['unlockAfterRotatingToPreviousLock'] = report;
                michal = zuuluu.bind(tangon)(michal);
                _fun00004_ip = 306; continue _fun00003;
 274:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.restoreDefaultOrientation;
                entity = entity.bind(michal)();
 306:
                entity = undefined;
                return entity;
            }
        };
        tangon = oscard.bind(golfie)(tangon, report);
        report = _closure1_slot4;
        tangon = report.useLayoutEffect;
        zuuluu = function() {
            entity = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.restoreDefaultOrientation;
                entity = entity.bind(michal)();
                return entity;
            };
            return entity;
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot19 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.OrientationLockState;
    var _closure1_slot11 = golfie;
    golfie = tangon.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot12 = golfie;
    tangon = tangon.ACTIVITY_LANDSCAPE_ASPECT_RATIO;
    var _closure1_slot13 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.ActivityPanelModes;
    var _closure1_slot14 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot15 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.cachedFunction;
    tangon = function(argFoo, argBar, argBaz) {
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = argBar;
            golfie = argBaz;
            oscard = entity.width;
            report = entity.height;
            michal = oscard > report;
            entity = _closure1_slot11;
            entity = entity.LANDSCAPE;
            if(!(entity !== golfie)) { _fun00006_ip = 250; continue _fun00005 }
 43:
            entity = _closure1_slot11;
            entity = entity.PORTRAIT;
            if(!(entity !== golfie)) { _fun00006_ip = 106; continue _fun00005 }
 57:
            entity = _closure1_slot11;
            entity = entity.UNLOCKED;
            entity = {};
            entity['width'] = oscard;
            golfie = report;
            if(michal) { _fun00006_ip = 83; continue _fun00005 }
 79:
            golfie = report - tangon;
 83:
            entity['height'] = golfie;
            entity['isLandscape'] = michal;
            golfie = false;
            entity['isLetterboxed'] = golfie;
            entity['isWindowLandscape'] = michal;
            return entity;
 106:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 12;
            golfie = golfie[entity];
            entity = undefined;
            golfie = option.bind(entity)(golfie);
            entity = golfie.isIpadOS;
            entity = entity.bind(golfie)();
            if(!entity) { _fun00006_ip = 144; continue _fun00005 }
 141:
            if(michal) { _fun00006_ip = 208; continue _fun00005 }
 144:
            entity = {'width': null, 'height': null, 'isLandscape': false, 'isLetterboxed': false, 'isWindowLandscape': false};
            golfie = global;
            verify = golfie.Math;
            option = verify.min;
            option = option.bind(verify)(oscard, report);
            entity['width'] = option;
            option = golfie.Math;
            golfie = option.max;
            golfie = golfie.bind(option)(report, oscard);
            golfie = golfie - tangon;
            entity['height'] = golfie;
            _fun00006_ip = 248; continue _fun00005;
 208:
            golfie = {};
            option = _closure1_slot12;
            option = report * option;
            golfie['width'] = option;
            golfie['height'] = report;
            option = false;
            golfie['isLandscape'] = option;
            option = true;
            golfie['isLetterboxed'] = option;
            golfie['isWindowLandscape'] = michal;
            entity = golfie;
 248:
            return entity;
 250:
            option = _closure1_slot0;
            golfie = _closure1_slot2;
            entity = 12;
            golfie = golfie[entity];
            entity = undefined;
            golfie = option.bind(entity)(golfie);
            entity = golfie.isIpadOS;
            entity = entity.bind(golfie)();
            if(!entity) { _fun00006_ip = 329; continue _fun00005 }
 285:
            if(michal) { _fun00006_ip = 329; continue _fun00005 }
 288:
            entity = {};
            entity['width'] = oscard;
            zuuluu = _closure1_slot13;
            zuuluu = oscard * zuuluu;
            zuuluu = zuuluu - tangon;
            entity['height'] = zuuluu;
            zuuluu = true;
            entity['isLandscape'] = zuuluu;
            entity['isLetterboxed'] = zuuluu;
            entity['isWindowLandscape'] = michal;
            _fun00006_ip = 394; continue _fun00005;
 329:
            michal = {'width': null, 'height': null, 'isLetterboxed': false, 'isLandscape': true, 'isWindowLandscape': true};
            zuuluu = global;
            golfie = zuuluu.Math;
            tangon = golfie.max;
            tangon = tangon.bind(golfie)(oscard, report);
            michal['width'] = tangon;
            tangon = zuuluu.Math;
            zuuluu = tangon.min;
            zuuluu = zuuluu.bind(tangon)(report, oscard);
            michal['height'] = zuuluu;
            entity = michal;
 394:
            return entity;
        }
    };
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = {};
    golfie = 'function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}';
    tangon['code'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = 32;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/panel/native/ActivityPanelController.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: ActivityPanelController
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            report = entity.children;
            tangon = undefined;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            backup = _closure1_slot1;
            zuuluu = _closure1_slot2;
            oscard = 17;
            oscard = zuuluu[oscard];
            oscard = backup.bind(tangon)(oscard);
            verify = oscard.bind(tangon)();
            oscard = 18;
            oscard = zuuluu[oscard];
            oscard = backup.bind(tangon)(oscard);
            output = oscard.bind(tangon)();
            golfie = _closure1_slot0;
            oscard = 16;
            option = zuuluu[oscard];
            romeon = golfie.bind(tangon)(option);
            yankee = romeon.useStateFromStores;
            option = _closure1_slot10;
            offset = new Array(1);
            offset[0] = option;
            option = function() {
                michal = _closure1_slot10;
                entity = michal.getActivityPanelMode;
                entity = entity.bind(michal)();
                return entity;
            };
            foxtra = yankee.bind(romeon)(offset, option);
            var _closure2_slot0 = foxtra;
            option = 15;
            offset = zuuluu[option];
            romeon = golfie.bind(tangon)(offset);
            yankee = romeon.useSharedValue;
            offset = {'x': 4294967295, 'y': 4294967295};
            yankee = yankee.bind(romeon)(offset);
            var _closure2_slot1 = yankee;
            offset = 19;
            offset = zuuluu[offset];
            offset = backup.bind(tangon)(offset);
            romeon = offset.bind(tangon)(verify);
            var _closure2_slot2 = romeon;
            option = zuuluu[option];
            kiloes = golfie.bind(tangon)(option);
            offset = kiloes.useSharedValue;
            option = {'x': 0, 'y': 0, 'gestureActive': false};
            option = offset.bind(kiloes)(option);
            var _closure2_slot3 = option;
            kiloes = _closure1_slot4;
            offset = kiloes.useRef;
            offset = offset.bind(kiloes)(foxtra);
            var _closure2_slot4 = offset;
            offset = 20;
            offset = zuuluu[offset];
            offset = backup.bind(tangon)(offset);
            offset = offset.bind(tangon)();
            var _closure2_slot5 = offset;
            zuuluu = zuuluu[oscard];
            sizing = golfie.bind(tangon)(zuuluu);
            kiloes = sizing.useStateFromStoresObject;
            zuuluu = _closure1_slot10;
            backup = new Array(2);
            backup[0] = zuuluu;
            zuuluu = _closure1_slot5;
            backup[1] = zuuluu;
            golfie = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = _closure1_slot10;
                    entity = michal.getConnectedActivityChannelId;
                    entity = entity.bind(michal)();
                    tangon = null;
                    report = tangon == entity;
                    michal = undefined;
                    verify = undefined;
                    if(report) { _fun00010_ip = 63; continue _fun00009 }
 30:
                    oscard = _closure1_slot1;
                    golfie = _closure1_slot2;
                    report = 21;
                    report = golfie[report];
                    report = oscard.bind(michal)(report);
                    report = report.bind(michal)(entity);
                    verify = undefined;
                    if(report) { _fun00010_ip = 63; continue _fun00009 }
 60:
                    verify = entity;
 63:
                    entity = tangon != verify;
                    option = undefined;
                    if(!entity) { _fun00010_ip = 99; continue _fun00009 }
 72:
                    report = _closure1_slot10;
                    entity = report.getSelfEmbeddedActivityForChannel;
                    entity = entity.bind(report)(verify);
                    report = tangon != entity;
                    option = undefined;
                    if(!report) { _fun00010_ip = 99; continue _fun00009 }
 96:
                    option = entity;
 99:
                    entity = tangon == option;
                    golfie = undefined;
                    if(entity) { _fun00010_ip = 113; continue _fun00009 }
 108:
                    golfie = option.applicationId;
 113:
                    entity = tangon != golfie;
                    oscard = undefined;
                    if(!entity) { _fun00010_ip = 137; continue _fun00009 }
 122:
                    report = _closure1_slot5;
                    entity = report.getApplication;
                    oscard = entity.bind(report)(golfie);
 137:
                    entity = tangon == oscard;
                    report = undefined;
                    if(entity) { _fun00010_ip = 151; continue _fun00009 }
 146:
                    report = oscard.id;
 151:
                    entity = {};
                    entity['connectedActivityInTextChannelId'] = verify;
                    entity['connectedActivity'] = option;
                    entity['connectedActivityAppId'] = golfie;
                    entity['currentApp'] = oscard;
                    tangon = tangon == report;
                    michal = undefined;
                    if(tangon) { _fun00010_ip = 197; continue _fun00009 }
 182:
                    tangon = _closure1_slot10;
                    zuuluu = tangon.getOrientationLockStateForApp;
                    michal = zuuluu.bind(tangon)(report);
 197:
                    entity['focusedOrientationLockState'] = michal;
                    return entity;
                }
            };
            zuuluu = new Array(0);
            golfie = kiloes.bind(sizing)(backup, golfie, zuuluu);
            zuuluu = golfie.connectedActivityInTextChannelId;
            var _closure2_slot6 = zuuluu;
            kiloes = golfie.connectedActivity;
            update = golfie.connectedActivityAppId;
            var _closure2_slot7 = update;
            echoed = golfie.currentApp;
            golfie = golfie.focusedOrientationLockState;
            backup = null;
            if(!(backup == golfie)) { _fun00008_ip = 373; continue _fun00007 }
 342:
            result = _closure1_slot0;
            source = _closure1_slot2;
            sizing = 22;
            sizing = source[sizing];
            result = result.bind(tangon)(sizing);
            sizing = result.getDefaultOrientationLockState;
            golfie = sizing.bind(result)(echoed);
 373:
            _closure2_slot8 = golfie;
            sizing = _closure1_slot16;
            verify = verify.top;
            verify = sizing.bind(tangon)(output, verify, golfie);
            _closure2_slot9 = verify;
            output = _closure1_slot4;
            sizing = output.useRef;
            sizing = sizing.bind(output)(update);
            _closure2_slot10 = sizing;
            result = _closure1_slot0;
            echoed = _closure1_slot2;
            oscard = echoed[oscard];
            source = result.bind(tangon)(oscard);
            output = source.useStateFromStores;
            oscard = _closure1_slot9;
            sizing = new Array(1);
            sizing[0] = oscard;
            oscard = function() {
                michal = _closure1_slot9;
                entity = michal.getChannelId;
                entity = entity.bind(michal)();
                return entity;
            };
            output = output.bind(source)(sizing, oscard);
            oscard = 23;
            oscard = echoed[oscard];
            sizing = result.bind(tangon)(oscard);
            oscard = sizing.useIsVoicePanelFullscreen;
            oscard = oscard.bind(sizing)();
            source = _closure1_slot1;
            sizing = 24;
            sizing = echoed[sizing];
            sizing = source.bind(tangon)(sizing);
            sizing = sizing.bind(tangon)();
            sizing = 25;
            sizing = echoed[sizing];
            echoed = result.bind(tangon)(sizing);
            result = echoed.useNavigatorBackPressHandler;
            sizing = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    entity = _closure1_slot14;
                    entity = entity.PANEL;
                    entity = zuuluu === entity;
                    if(!entity) { _fun00012_ip = 72; continue _fun00011 }
 27:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 26;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.updateActivityPanelMode;
                    michal = _closure1_slot14;
                    michal = michal.PIP;
                    michal = zuuluu.bind(tangon)(michal);
                    entity = true;
 72:
                    return entity;
                }
            };
            sizing = result.bind(echoed)(sizing);
            echoed = _closure1_slot4;
            result = echoed.useEffect;
            sizing = new Array(4);
            sizing[0] = update;
            sizing[1] = golfie;
            sizing[2] = foxtra;
            golfie = verify.isWindowLandscape;
            sizing[3] = golfie;
            golfie = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot7;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00014_ip = 29; continue _fun00013 }
 13:
                    michal = _closure2_slot10;
                    michal = michal.current;
                    if(!(zuuluu != michal)) { _fun00014_ip = 221; continue _fun00013 }
 29:
                    michal = _closure2_slot7;
                    if(!(zuuluu == michal)) { _fun00014_ip = 50; continue _fun00013 }
 37:
                    michal = _closure2_slot10;
                    michal = michal.current;
                    if(!(zuuluu == michal)) { _fun00014_ip = 170; continue _fun00013 }
 50:
                    tangon = _closure2_slot0;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    zuuluu = tangon === zuuluu;
                    if(!zuuluu) { _fun00014_ip = 116; continue _fun00013 }
 74:
                    report = _closure1_slot1;
                    oscard = _closure1_slot2;
                    tangon = 27;
                    tangon = oscard[tangon];
                    golfie = undefined;
                    oscard = report.bind(golfie)(tangon);
                    tangon = _closure2_slot9;
                    report = tangon.isWindowLandscape;
                    tangon = _closure2_slot8;
                    zuuluu = oscard.bind(golfie)(report, tangon);
 116:
                    if(!zuuluu) { _fun00014_ip = 386; continue _fun00013 }
 122:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 26;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.updateActivityPanelMode;
                    michal = _closure1_slot14;
                    michal = michal.PANEL;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00014_ip = 386; continue _fun00013;
 170:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 26;
                    tangon = tangon[zuuluu];
                    zuuluu = undefined;
                    tangon = report.bind(zuuluu)(tangon);
                    zuuluu = tangon.updateActivityPanelMode;
                    michal = _closure1_slot14;
                    michal = michal.DISCONNECTED;
                    michal = zuuluu.bind(tangon)(michal);
                    _fun00014_ip = 386; continue _fun00013;
 221:
                    tangon = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 27;
                    zuuluu = report[zuuluu];
                    report = undefined;
                    oscard = tangon.bind(report)(zuuluu);
                    zuuluu = _closure2_slot9;
                    tangon = zuuluu.isWindowLandscape;
                    zuuluu = _closure2_slot8;
                    zuuluu = oscard.bind(report)(tangon, zuuluu);
                    if(zuuluu) { _fun00014_ip = 345; continue _fun00013 }
 269:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 12;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.isIpadOS;
                    zuuluu = zuuluu.bind(tangon)();
                    if(zuuluu) { _fun00014_ip = 345; continue _fun00013 }
 302:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 26;
                    zuuluu = oscard[zuuluu];
                    oscard = tangon.bind(report)(zuuluu);
                    tangon = oscard.updateActivityPanelMode;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    zuuluu = tangon.bind(oscard)(zuuluu);
                    _fun00014_ip = 386; continue _fun00013;
 345:
                    tangon = _closure1_slot0;
                    oscard = _closure1_slot2;
                    zuuluu = 26;
                    zuuluu = oscard[zuuluu];
                    tangon = tangon.bind(report)(zuuluu);
                    zuuluu = tangon.updateActivityPanelMode;
                    michal = _closure1_slot14;
                    michal = michal.PANEL;
                    michal = zuuluu.bind(tangon)(michal);
 386:
                    michal = _closure2_slot10;
                    entity = _closure2_slot7;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            golfie = result.bind(echoed)(golfie, sizing);
            echoed = _closure1_slot4;
            result = echoed.useEffect;
            sizing = new Array(1);
            sizing[0] = foxtra;
            golfie = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = _closure2_slot0;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.PANEL;
                    zuuluu = tangon === zuuluu;
                    if(!zuuluu) { _fun00016_ip = 50; continue _fun00015 }
 27:
                    tangon = _closure2_slot4;
                    report = tangon.current;
                    tangon = _closure1_slot14;
                    tangon = tangon.PANEL;
                    zuuluu = report !== tangon;
 50:
                    if(!zuuluu) { _fun00016_ip = 85; continue _fun00015 }
 53:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    michal = 28;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    zuuluu = tangon.bind(michal)(zuuluu);
                    michal = zuuluu.dismissKeyboard;
                    michal = michal.bind(zuuluu)();
 85:
                    michal = _closure2_slot4;
                    entity = _closure2_slot0;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            golfie = result.bind(echoed)(golfie, sizing);
            sizing = _closure1_slot19;
            golfie = {};
            golfie['channelId'] = output;
            output = backup != kiloes;
            golfie['isConnected'] = output;
            golfie['selectedMode'] = foxtra;
            golfie['isVoicePanelFullscreen'] = oscard;
            golfie = sizing.bind(tangon)(golfie);
            golfie = {};
            sizing = backup != kiloes;
            golfie['isActivityConnected'] = sizing;
            backup = backup != kiloes;
            if(!backup) { _fun00008_ip = 678; continue _fun00007 }
 664:
            kiloes = _closure1_slot14;
            kiloes = kiloes.PANEL;
            backup = foxtra === kiloes;
 678:
            golfie['isActivityFocused'] = backup;
            golfie['isVoicePanelFullscreen'] = oscard;
            oscard = function(argFoo) { // Original name: useSafeAreaLock
                michal = argFoo;
                golfie = michal.isActivityConnected;
                var _closure3_slot0 = golfie;
                oscard = michal.isActivityFocused;
                var _closure3_slot1 = oscard;
                report = michal.isVoicePanelFullscreen;
                var _closure3_slot2 = report;
                tangon = _closure1_slot4;
                zuuluu = tangon.useId;
                option = zuuluu.bind(tangon)();
                var _closure3_slot3 = option;
                tangon = _closure1_slot4;
                zuuluu = tangon.useLayoutEffect;
                michal = new Array(4);
                michal[0] = option;
                michal[1] = golfie;
                michal[2] = oscard;
                michal[3] = report;
                entity = function() {
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        michal = _closure3_slot2;
                        entity = undefined;
                        if(michal) { _fun00018_ip = 79; continue _fun00017 }
 12:
                        zuuluu = _closure3_slot0;
                        michal = undefined;
                        if(!zuuluu) { _fun00018_ip = 77; continue _fun00017 }
 21:
                        tangon = _closure1_slot7;
                        zuuluu = tangon.getState;
                        report = zuuluu.bind(tangon)();
                        tangon = report.requestSafeAreaDisableLock;
                        zuuluu = {};
                        golfie = _closure3_slot3;
                        zuuluu['key'] = golfie;
                        oscard = _closure3_slot1;
                        zuuluu['lockEnabled'] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        michal = function() {
                            michal = _closure1_slot7;
                            entity = michal.getState;
                            zuuluu = entity.bind(michal)();
                            michal = zuuluu.requestSafeAreaDisableLock;
                            entity = {};
                            tangon = _closure3_slot3;
                            entity['key'] = tangon;
                            tangon = false;
                            entity['lockEnabled'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
 77:
                        return michal;
 79:
                        return entity;
                    }
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = undefined;
                return entity;
            };
            oscard = oscard.bind(tangon)(golfie);
            backup = _closure1_slot4;
            golfie = backup.useEffect;
            oscard = new Array(2);
            oscard[0] = foxtra;
            oscard[1] = zuuluu;
            zuuluu = function() {
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    tangon = _closure2_slot0;
                    zuuluu = _closure1_slot14;
                    zuuluu = zuuluu.PANEL;
                    if(!(tangon === zuuluu)) { _fun00020_ip = 131; continue _fun00019 }
 24:
                    tangon = _closure1_slot8;
                    zuuluu = tangon.getChannel;
                    entity = _closure2_slot6;
                    entity = zuuluu.bind(tangon)(entity);
                    tangon = undefined;
                    if(!(tangon !== entity)) { _fun00020_ip = 131; continue _fun00019 }
 48:
                    oscard = _closure1_slot1;
                    report = _closure1_slot2;
                    zuuluu = 29;
                    zuuluu = report[zuuluu];
                    golfie = oscard.bind(tangon)(zuuluu);
                    oscard = golfie.selectChannel;
                    zuuluu = {};
                    option = entity.guild_id;
                    zuuluu['guildId'] = option;
                    option = entity.id;
                    zuuluu['channelId'] = option;
                    zuuluu = oscard.bind(golfie)(zuuluu);
                    zuuluu = _closure1_slot0;
                    michal = 30;
                    michal = report[michal];
                    zuuluu = zuuluu.bind(tangon)(michal);
                    michal = zuuluu.transitionToChannel;
                    entity = entity.id;
                    entity = michal.bind(zuuluu)(entity);
 131:
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu = golfie.bind(backup)(zuuluu, oscard);
            zuuluu = function(argFoo) { // Original name: useAppFreeze
                yankee = argFoo;
                var _closure3_slot0 = yankee;
                backup = _closure1_slot0;
                kiloes = _closure1_slot2;
                entity = 14;
                tangon = kiloes[entity];
                entity = undefined;
                report = backup.bind(entity)(tangon);
                tangon = report.useIsActivityPanelFullscreen;
                option = tangon.bind(report)();
                var _closure3_slot1 = option;
                oscard = _closure1_slot4;
                report = oscard.useState;
                tangon = false;
                oscard = report.bind(oscard)(tangon);
                report = _closure1_slot3;
                tangon = 2;
                report = report.bind(entity)(oscard, tangon);
                tangon = 0;
                golfie = report[tangon];
                var _closure3_slot2 = golfie;
                tangon = 1;
                romeon = report[tangon];
                var _closure3_slot3 = romeon;
                report = _closure1_slot4;
                tangon = report.useId;
                oscard = tangon.bind(report)();
                var _closure3_slot4 = oscard;
                foxtra = 15;
                tangon = kiloes[foxtra];
                offset = backup.bind(entity)(tangon);
                verify = offset.useAnimatedReaction;
                report = function() { // Original name: l
                    michal = _closure3_slot0;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    entity = entity.gestureActive;
                    return entity;
                };
                tangon = {};
                tangon['wrapperOffset'] = yankee;
                report['__closure'] = tangon;
                tangon = 5299695936442.0;
                report['__workletHash'] = tangon;
                tangon = _closure1_slot17;
                report['__initData'] = tangon;
                tangon = function(argFoo, argBar) { // Original name: s
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zuuluu = argFoo;
                        entity = argBar;
                        if(!(zuuluu !== entity)) { _fun00022_ip = 57; continue _fun00021 }
 10:
                        tangon = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 15;
                        entity = michal[entity];
                        michal = undefined;
                        report = tangon.bind(michal)(entity);
                        tangon = report.runOnJS;
                        entity = _closure3_slot3;
                        entity = tangon.bind(report)(entity);
                        entity = entity.bind(michal)(zuuluu);
 57:
                        entity = undefined;
                        return entity;
                    }
                };
                yankee = {};
                foxtra = kiloes[foxtra];
                foxtra = backup.bind(entity)(foxtra);
                foxtra = foxtra.runOnJS;
                yankee['runOnJS'] = foxtra;
                yankee['setWrapperGestureInProgress'] = romeon;
                tangon['__closure'] = yankee;
                yankee = 5831467313798.0;
                tangon['__workletHash'] = yankee;
                yankee = _closure1_slot18;
                tangon['__initData'] = yankee;
                tangon = verify.bind(offset)(report, tangon);
                report = _closure1_slot4;
                tangon = report.useEffect;
                zuuluu = new Array(3);
                zuuluu[0] = option;
                zuuluu[1] = golfie;
                zuuluu[2] = oscard;
                michal = function() {
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        michal = _closure1_slot6;
                        entity = michal.getState;
                        zuuluu = entity.bind(michal)();
                        michal = zuuluu.requestFreezeLock;
                        entity = {};
                        report = _closure3_slot1;
                        if(!report) { _fun00024_ip = 39; continue _fun00023 }
 35:
                        report = _closure3_slot2;
 39:
                        entity['lockEnabled'] = report;
                        tangon = _closure3_slot4;
                        entity['key'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        entity = function() {
                            michal = _closure1_slot6;
                            entity = michal.getState;
                            zuuluu = entity.bind(michal)();
                            michal = zuuluu.requestFreezeLock;
                            entity = {};
                            tangon = false;
                            entity['lockEnabled'] = tangon;
                            tangon = _closure3_slot4;
                            entity['key'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        return entity;
                    }
                };
                michal = tangon.bind(report)(michal, zuuluu);
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(option);
            golfie = _closure1_slot4;
            oscard = golfie.useMemo;
            zuuluu = new Array(6);
            zuuluu[0] = foxtra;
            zuuluu[1] = romeon;
            zuuluu[2] = yankee;
            zuuluu[3] = offset;
            zuuluu[4] = verify;
            zuuluu[5] = option;
            michal = function() {
                entity = {};
                zuuluu = _closure2_slot0;
                entity['mode'] = zuuluu;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 26;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                zuuluu = report.bind(zuuluu)(tangon);
                zuuluu = zuuluu.updateActivityPanelMode;
                entity['setMode'] = zuuluu;
                zuuluu = _closure2_slot9;
                entity['wrapperDimensions'] = zuuluu;
                zuuluu = _closure2_slot1;
                entity['pipState'] = zuuluu;
                zuuluu = _closure2_slot2;
                entity['pipAvoidanceSpecs'] = zuuluu;
                zuuluu = _closure2_slot3;
                entity['wrapperOffset'] = zuuluu;
                michal = _closure2_slot5;
                entity['useActivityWebViewLock'] = michal;
                return entity;
            };
            oscard = oscard.bind(golfie)(michal, zuuluu);
            zuuluu = _closure1_slot15;
            michal = _closure1_slot1;
            golfie = _closure1_slot2;
            entity = 31;
            entity = golfie[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.Provider;
            entity = {};
            entity['value'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();
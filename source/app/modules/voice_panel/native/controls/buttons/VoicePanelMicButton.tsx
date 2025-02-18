// app/modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: useMuteHandlers
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 11;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot8;
        zuuluu = new Array(7);
        zuuluu[0] = golfie;
        golfie = _closure1_slot7;
        zuuluu[1] = golfie;
        golfie = _closure1_slot11;
        zuuluu[2] = golfie;
        golfie = _closure1_slot9;
        zuuluu[3] = golfie;
        golfie = _closure1_slot10;
        zuuluu[4] = golfie;
        golfie = _closure1_slot6;
        zuuluu[5] = golfie;
        michal = _closure1_slot5;
        zuuluu[6] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot8;
                zuuluu = tangon.getChannel;
                michal = _closure2_slot0;
                golfie = zuuluu.bind(tangon)(michal);
                report = null;
                if(!(report == golfie)) { _fun00002_ip = 42; continue _fun00001 }
 30:
                tangon = {'selfMute': false, 'suppress': false, 'mute': false};
                _fun00002_ip = 126; continue _fun00001;
 42:
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 12;
                zuuluu = zuuluu[michal];
                michal = undefined;
                oscard = oscard.bind(michal)(zuuluu);
                zuuluu = oscard.getMuteStates;
                michal = {};
                michal['channel'] = golfie;
                golfie = _closure1_slot7;
                michal['authenticationStore'] = golfie;
                golfie = _closure1_slot11;
                michal['voiceStateStore'] = golfie;
                golfie = _closure1_slot9;
                michal['mediaEngineStore'] = golfie;
                golfie = _closure1_slot10;
                michal['permissionStore'] = golfie;
                golfie = _closure1_slot6;
                michal['impersonateStore'] = golfie;
                tangon = zuuluu.bind(oscard)(michal);
 126:
                oscard = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 13;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = oscard.bind(michal)(zuuluu);
                michal = zuuluu.createMuteHandler;
                oscard = _closure1_slot5;
                entity = oscard.getAwaitingRemoteSessionInfo;
                entity = entity.bind(oscard)();
                entity = report != entity;
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    var _closure1_slot18 = entity;
    entity = function(argFoo) { // Original name: AnimatedMicrophoneIcon
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            option = entity.buttonStyles;
            report = entity.isMuted;
            oscard = _closure1_slot4;
            tangon = oscard.useRef;
            zuuluu = null;
            oscard = tangon.bind(oscard)(zuuluu);
            var _closure2_slot0 = oscard;
            golfie = _closure1_slot4;
            tangon = golfie.useRef;
            zuuluu = true;
            zuuluu = tangon.bind(golfie)(zuuluu);
            var _closure2_slot1 = zuuluu;
            verify = _closure1_slot4;
            golfie = verify.useEffect;
            tangon = new Array(2);
            tangon[0] = report;
            tangon[1] = oscard;
            michal = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure2_slot1;
                    michal = michal.current;
                    if(michal) { _fun00006_ip = 42; continue _fun00005 }
 15:
                    michal = _closure2_slot0;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00006_ip = 54; continue _fun00005 }
 30:
                    michal = zuuluu.play;
                    michal = michal.bind(zuuluu)();
                    _fun00006_ip = 54; continue _fun00005;
 42:
                    michal = _closure2_slot1;
                    entity = false;
                    michal['current'] = entity;
 54:
                    entity = undefined;
                    return entity;
                }
            };
            michal = golfie.bind(verify)(michal, tangon);
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 25;
            michal = verify[michal];
            tangon = undefined;
            michal = golfie.bind(tangon)(michal);
            golfie = michal.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot12;
            michal = _closure1_slot0;
            entity = 26;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.MicrophoneLottie;
            entity = {};
            entity['ref'] = oscard;
            if(report) { _fun00004_ip = 169; continue _fun00003 }
 156:
            oscard = option.iconFillSelected;
            oscard = oscard.color;
            _fun00004_ip = 180; continue _fun00003;
 169:
            option = option.iconFill;
            oscard = option.color;
 180:
            entity['color'] = oscard;
            oscard = 'md';
            entity['size'] = oscard;
            oscard = report;
            if(!golfie) { _fun00004_ip = 201; continue _fun00003 }
 198:
            oscard = !report;
 201:
            report = 'unmute';
            if(!oscard) { _fun00004_ip = 212; continue _fun00003 }
 208:
            report = 'mute';
 212:
            entity['animation'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot11 = tangon;
    tangon = 9;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.jsx;
    var _closure1_slot12 = golfie;
    golfie = oscard[tangon];
    golfie = report.bind(entity)(golfie);
    golfie = golfie.Fragment;
    var _closure1_slot13 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot14 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 4, 'textAlign': 'center', 'opacity': 0.5};
    tangon['text'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function VoicePanelMicButtonTsx1(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function VoicePanelMicButtonTsx2(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = 28;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: PTTButton
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            sizing = michal.props;
            zuuluu = michal.wrapperSpecs;
            tangon = undefined;
            var _closure2_slot1 = tangon;
            var _closure2_slot2 = tangon;
            var _closure2_slot3 = tangon;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            michal = _closure1_slot15;
            offset = michal.bind(tangon)();
            golfie = _closure1_slot4;
            report = golfie.useContext;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 15;
            michal = verify[michal];
            michal = option.bind(tangon)(michal);
            michal = report.bind(golfie)(michal);
            report = michal.channelId;
            golfie = _closure1_slot4;
            michal = golfie.useState;
            option = false;
            verify = michal.bind(golfie)(option);
            golfie = _closure1_slot3;
            michal = 2;
            golfie = golfie.bind(tangon)(verify, michal);
            michal = 0;
            result = golfie[michal];
            michal = 1;
            michal = golfie[michal];
            var _closure2_slot0 = michal;
            michal = _closure1_slot18;
            michal = michal.bind(tangon)(report);
            verify = michal.mute;
            golfie = michal.onPress;
            michal = function(argFoo) { // Original name: useDeafHandlers
                oscard = argFoo;
                var _closure3_slot0 = oscard;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 11;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.useStateFromStoresObject;
                golfie = _closure1_slot8;
                zuuluu = new Array(6);
                zuuluu[0] = golfie;
                golfie = _closure1_slot7;
                zuuluu[1] = golfie;
                golfie = _closure1_slot11;
                zuuluu[2] = golfie;
                golfie = _closure1_slot9;
                zuuluu[3] = golfie;
                golfie = _closure1_slot10;
                zuuluu[4] = golfie;
                michal = _closure1_slot6;
                zuuluu[5] = michal;
                michal = new Array(1);
                michal[0] = oscard;
                entity = function() {
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        tangon = _closure1_slot8;
                        zuuluu = tangon.getChannel;
                        michal = _closure3_slot0;
                        option = zuuluu.bind(tangon)(michal);
                        michal = null;
                        if(!(michal == option)) { _fun00010_ip = 42; continue _fun00009 }
 30:
                        zuuluu = {'selfDeaf': false, 'deaf': false};
                        _fun00010_ip = 92; continue _fun00009;
 42:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 14;
                        tangon = tangon[michal];
                        michal = undefined;
                        golfie = report.bind(michal)(tangon);
                        oscard = golfie.getDeafStates;
                        yankee = _closure1_slot11;
                        offset = _closure1_slot9;
                        verify = _closure1_slot7;
                        foxtra = golfie;
                        romeon = option;
                        zuuluu = foxtra[oscard](romeon, yankee, offset, verify, option);
 92:
                        tangon = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 13;
                        michal = michal[entity];
                        entity = undefined;
                        michal = tangon.bind(entity)(michal);
                        entity = michal.createDeafHandler;
                        entity = entity.bind(michal)(zuuluu);
                        return entity;
                    }
                };
                entity = tangon.bind(report)(zuuluu, entity, michal);
                return entity;
            };
            report = michal.bind(tangon)(report);
            michal = report.deaf;
            report = report.onPress;
            if(michal) { _fun00008_ip = 200; continue _fun00007 }
 189:
            michal = undefined;
            if(!verify) { _fun00008_ip = 197; continue _fun00007 }
 194:
            michal = golfie;
 197:
            report = michal;
 200:
            _closure2_slot1 = report;
            echoed = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 16;
            michal = kiloes[michal];
            golfie = echoed.bind(tangon)(michal);
            michal = golfie.useSharedValue;
            foxtra = michal.bind(golfie)(option);
            _closure2_slot2 = foxtra;
            romeon = _closure1_slot1;
            michal = 17;
            michal = kiloes[michal];
            michal = romeon.bind(tangon)(michal);
            michal = michal.bind(tangon)();
            _closure2_slot3 = michal;
            verify = _closure1_slot4;
            option = verify.useRef;
            golfie = {'active': false, 'dragging': false};
            golfie = option.bind(verify)(golfie);
            _closure2_slot4 = golfie;
            verify = _closure1_slot4;
            option = verify.useCallback;
            golfie = new Array(3);
            golfie[0] = michal;
            golfie[1] = foxtra;
            golfie[2] = report;
            report = function() {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.active;
                    if(michal) { _fun00012_ip = 189; continue _fun00011 }
 24:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00012_ip = 44; continue _fun00011 }
 34:
                    zuuluu = _closure2_slot1;
                    michal = undefined;
                    michal = zuuluu.bind(michal)();
 44:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    zuuluu = true;
                    michal['active'] = zuuluu;
                    option = _closure1_slot0;
                    verify = _closure1_slot2;
                    report = 18;
                    oscard = verify[report];
                    michal = undefined;
                    golfie = option.bind(michal)(oscard);
                    oscard = golfie.triggerHapticFeedback;
                    report = verify[report];
                    report = option.bind(michal)(report);
                    report = report.HapticFeedbackTypes;
                    report = report.IMPACT_MEDIUM;
                    report = oscard.bind(golfie)(report);
                    report = _closure1_slot9;
                    tangon = report.getMediaEngine;
                    oscard = tangon.bind(report)();
                    report = oscard.eachConnection;
                    tangon = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.setForceAudioInput;
                        entity = true;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    tangon = report.bind(oscard)(tangon);
                    report = _closure2_slot3;
                    tangon = report.lock;
                    tangon = tangon.bind(report)();
                    report = _closure2_slot2;
                    tangon = report.set;
                    tangon = tangon.bind(report)(zuuluu);
                    entity = _closure2_slot0;
                    entity = entity.bind(michal)(zuuluu);
 189:
                    entity = undefined;
                    return entity;
                }
            };
            update = option.bind(verify)(report, golfie);
            _closure2_slot5 = update;
            option = _closure1_slot4;
            golfie = option.useCallback;
            report = new Array(2);
            report[0] = michal;
            report[1] = foxtra;
            michal = function() {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.active;
                    if(!michal) { _fun00014_ip = 129; continue _fun00013 }
 21:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    zuuluu = false;
                    michal['active'] = zuuluu;
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal['dragging'] = zuuluu;
                    tangon = _closure1_slot9;
                    michal = tangon.getMediaEngine;
                    report = michal.bind(tangon)();
                    tangon = report.eachConnection;
                    michal = function(argFoo) {
                        zuuluu = argFoo;
                        michal = zuuluu.setForceAudioInput;
                        entity = false;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = tangon.bind(report)(michal);
                    tangon = _closure2_slot3;
                    michal = tangon.unlock;
                    michal = michal.bind(tangon)();
                    tangon = _closure2_slot2;
                    michal = tangon.set;
                    michal = michal.bind(tangon)(zuuluu);
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = michal.bind(entity)(zuuluu);
 129:
                    entity = undefined;
                    return entity;
                }
            };
            option = golfie.bind(option)(michal, report);
            _closure2_slot6 = option;
            verify = _closure1_slot4;
            golfie = verify.useCallback;
            report = new Array(1);
            report[0] = option;
            michal = function() {
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.dragging;
                    if(michal) { _fun00016_ip = 31; continue _fun00015 }
 21:
                    michal = _closure2_slot6;
                    entity = undefined;
                    entity = michal.bind(entity)();
 31:
                    entity = undefined;
                    return entity;
                }
            };
            output = golfie.bind(verify)(michal, report);
            verify = _closure1_slot4;
            golfie = verify.useCallback;
            report = new Array(1);
            report[0] = update;
            michal = function() {
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.dragging;
                    if(michal) { _fun00018_ip = 48; continue _fun00017 }
 21:
                    michal = _closure2_slot4;
                    zuuluu = michal.current;
                    michal = true;
                    zuuluu['dragging'] = michal;
                    michal = _closure2_slot5;
                    entity = undefined;
                    entity = michal.bind(entity)();
 48:
                    entity = undefined;
                    return entity;
                }
            };
            michal = golfie.bind(verify)(michal, report);
            _closure2_slot7 = michal;
            verify = _closure1_slot4;
            golfie = verify.useMemo;
            report = new Array(2);
            report[0] = michal;
            report[1] = option;
            michal = function() {
                verify = _closure1_slot0;
                offset = _closure1_slot2;
                oscard = 19;
                michal = offset[oscard];
                option = undefined;
                michal = verify.bind(option)(michal);
                zuuluu = michal.Gesture;
                michal = zuuluu.Pan;
                report = michal.bind(zuuluu)();
                zuuluu = report.manualActivation;
                michal = true;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onTouchesMove;
                michal = function(argFoo, argBar) { // Original name: n
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        tangon = argBar;
                        entity = argFoo;
                        report = entity.state;
                        oscard = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 19;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        zuuluu = oscard.bind(entity)(zuuluu);
                        zuuluu = zuuluu.State;
                        zuuluu = zuuluu.BEGAN;
                        if(!(report === zuuluu)) { _fun00020_ip = 103; continue _fun00019 }
 52:
                        zuuluu = tangon.activate;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 16;
                        michal = tangon[michal];
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.runOnJS;
                        michal = _closure2_slot7;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = michal.bind(entity)();
 103:
                        return entity;
                    }
                };
                yankee = {};
                oscard = offset[oscard];
                oscard = verify.bind(option)(oscard);
                oscard = oscard.State;
                yankee['State'] = oscard;
                golfie = 16;
                oscard = offset[golfie];
                oscard = verify.bind(option)(oscard);
                oscard = oscard.runOnJS;
                yankee['runOnJS'] = oscard;
                romeon = _closure2_slot7;
                yankee['handleDragStart'] = romeon;
                michal['__closure'] = yankee;
                yankee = 4024795195709.0;
                michal['__workletHash'] = yankee;
                yankee = _closure1_slot16;
                michal['__initData'] = yankee;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.onFinalize;
                entity = function() { // Original name: t
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 16;
                    michal = michal[entity];
                    entity = undefined;
                    tangon = zuuluu.bind(entity)(michal);
                    zuuluu = tangon.runOnJS;
                    michal = _closure2_slot6;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = michal.bind(entity)();
                    return entity;
                };
                report = {};
                golfie = offset[golfie];
                golfie = verify.bind(option)(golfie);
                golfie = golfie.runOnJS;
                report['runOnJS'] = golfie;
                oscard = _closure2_slot6;
                report['handlePTTEnd'] = oscard;
                entity['__closure'] = report;
                report = 9285688010037.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot17;
                entity['__initData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            verify = golfie.bind(verify)(michal, report);
            golfie = _closure1_slot4;
            report = golfie.useEffect;
            michal = new Array(1);
            michal[0] = option;
            entity = function() {
                entity = function() {
                    michal = _closure2_slot6;
                    entity = undefined;
                    entity = michal.bind(entity)();
                    return entity;
                };
                return entity;
            };
            entity = report.bind(golfie)(entity, michal);
            entity = 20;
            entity = kiloes[entity];
            michal = echoed.bind(tangon)(entity);
            entity = michal.useVoicePanelButtonStyles;
            yankee = entity.bind(michal)(zuuluu);
            zuuluu = _closure1_slot14;
            michal = _closure1_slot13;
            entity = {};
            option = _closure1_slot12;
            report = 19;
            report = kiloes[report];
            report = echoed.bind(tangon)(report);
            golfie = report.GestureDetector;
            report = {};
            report['gesture'] = verify;
            backup = _closure1_slot12;
            verify = 21;
            verify = kiloes[verify];
            romeon = romeon.bind(tangon)(verify);
            verify = {};
            verify['onPressIn'] = update;
            verify['onPressOut'] = output;
            verify['props'] = sizing;
            verify['pressed'] = foxtra;
            foxtra = 22;
            sizing = kiloes[foxtra];
            sizing = echoed.bind(tangon)(sizing);
            output = sizing.intl;
            sizing = output.string;
            kiloes = kiloes[foxtra];
            kiloes = echoed.bind(tangon)(kiloes);
            kiloes = kiloes.t;
            kiloes = kiloes.Q8gkVF;
            kiloes = sizing.bind(output)(kiloes);
            verify['accessibilityLabel'] = kiloes;
            if(result) { _fun00008_ip = 659; continue _fun00007 }
 651:
            kiloes = yankee.iconBg;
            _fun00008_ip = 665; continue _fun00007;
 659:
            kiloes = yankee.iconBgSelected;
 665:
            verify['style'] = kiloes;
            output = _closure1_slot12;
            sizing = _closure1_slot0;
            echoed = _closure1_slot2;
            kiloes = 23;
            kiloes = echoed[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            sizing = kiloes.MicrophoneIcon;
            kiloes = {};
            if(result) { _fun00008_ip = 717; continue _fun00007 }
 704:
            result = yankee.iconFill;
            result = result.color;
            _fun00008_ip = 728; continue _fun00007;
 717:
            echoed = yankee.iconFillSelected;
            result = echoed.color;
 728:
            kiloes['color'] = result;
            result = 'lg';
            kiloes['size'] = result;
            kiloes = output.bind(tangon)(sizing, kiloes);
            verify['children'] = kiloes;
            verify = backup.bind(tangon)(romeon, verify);
            report['children'] = verify;
            golfie = option.bind(tangon)(golfie, report);
            report = new Array(2);
            report[0] = golfie;
            option = _closure1_slot12;
            romeon = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 24;
            oscard = verify[oscard];
            oscard = romeon.bind(tangon)(oscard);
            golfie = oscard.Text;
            oscard = {};
            backup = offset.text;
            offset = new Array(2);
            offset[0] = backup;
            yankee = yankee.iconFill;
            offset[1] = yankee;
            oscard['style'] = offset;
            offset = 'text-xxs/medium';
            oscard['variant'] = offset;
            offset = verify[foxtra];
            offset = romeon.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            verify = verify[foxtra];
            verify = romeon.bind(tangon)(verify);
            verify = verify.t;
            verify = verify.Q8gkVF;
            verify = offset.bind(yankee)(verify);
            oscard['children'] = verify;
            oscard = option.bind(tangon)(golfie, oscard);
            report[1] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['PTTButton'] = tangon;
    michal = function(argFoo) { // Original name: MicButton
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            offset = michal.props;
            golfie = michal.wrapperSpecs;
            report = _closure1_slot18;
            verify = _closure1_slot4;
            oscard = verify.useContext;
            michal = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 15;
            zuuluu = yankee[zuuluu];
            tangon = undefined;
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = oscard.bind(verify)(zuuluu);
            zuuluu = zuuluu.channelId;
            zuuluu = report.bind(tangon)(zuuluu);
            oscard = zuuluu.mute;
            var _closure2_slot0 = oscard;
            verify = zuuluu.onPress;
            foxtra = zuuluu.dominantMuteState;
            var _closure2_slot1 = foxtra;
            report = _closure1_slot0;
            zuuluu = 20;
            zuuluu = yankee[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.useVoicePanelButtonStyles;
            golfie = zuuluu.bind(report)(golfie);
            var _closure2_slot2 = golfie;
            romeon = _closure1_slot4;
            report = romeon.useMemo;
            zuuluu = new Array(3);
            zuuluu[0] = golfie;
            zuuluu[1] = oscard;
            zuuluu[2] = foxtra;
            entity = function() {
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    zuuluu = _closure2_slot1;
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    entity = 13;
                    entity = report[entity];
                    report = undefined;
                    entity = tangon.bind(report)(entity);
                    entity = entity.DominantMuteState;
                    entity = entity.SERVER_MUTE;
                    if(!(zuuluu !== entity)) { _fun00024_ip = 84; continue _fun00023 }
 48:
                    tangon = _closure1_slot12;
                    zuuluu = _closure1_slot19;
                    entity = {};
                    golfie = _closure2_slot2;
                    entity['buttonStyles'] = golfie;
                    golfie = _closure2_slot0;
                    entity['isMuted'] = golfie;
                    entity = tangon.bind(report)(zuuluu, entity);
                    _fun00024_ip = 141; continue _fun00023;
 84:
                    tangon = _closure1_slot12;
                    zuuluu = _closure1_slot0;
                    golfie = _closure1_slot2;
                    michal = 27;
                    michal = golfie[michal];
                    michal = zuuluu.bind(report)(michal);
                    zuuluu = michal.MicrophoneDenyIcon;
                    michal = {};
                    oscard = _closure2_slot2;
                    oscard = oscard.iconFill;
                    oscard = oscard.color;
                    michal['color'] = oscard;
                    entity = tangon.bind(report)(zuuluu, michal);
 141:
                    return entity;
                }
            };
            report = report.bind(romeon)(entity, zuuluu);
            zuuluu = _closure1_slot12;
            entity = 21;
            entity = yankee[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['props'] = offset;
            entity['onPress'] = verify;
            verify = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 22;
            offset = romeon[option];
            offset = verify.bind(tangon)(offset);
            yankee = offset.intl;
            offset = yankee.string;
            option = romeon[option];
            option = verify.bind(tangon)(option);
            verify = option.t;
            if(oscard) { _fun00022_ip = 250; continue _fun00021 }
 237:
            option = verify.w4m94+;
            option = offset.bind(yankee)(option);
            _fun00022_ip = 261; continue _fun00021;
 250:
            verify = verify.YqAjX1;
            option = offset.bind(yankee)(verify);
 261:
            entity['accessibilityLabel'] = option;
            if(oscard) { _fun00022_ip = 276; continue _fun00021 }
 268:
            oscard = golfie.iconBgSelected;
            _fun00022_ip = 282; continue _fun00021;
 276:
            oscard = golfie.iconBg;
 282:
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['MicButton'] = michal;
    return entity;
})();
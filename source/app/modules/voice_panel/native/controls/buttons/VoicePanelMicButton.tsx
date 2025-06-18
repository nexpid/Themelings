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
        report = _closure1_slot4;
        tangon = report.useRef;
        zuuluu = null;
        zuuluu = tangon.bind(report)(zuuluu);
        var _closure2_slot1 = zuuluu;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 13;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot8;
        zuuluu = new Array(7);
        zuuluu[0] = golfie;
        golfie = _closure1_slot7;
        zuuluu[1] = golfie;
        golfie = _closure1_slot12;
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
                report = _closure1_slot8;
                tangon = report.getChannel;
                zuuluu = _closure2_slot0;
                option = tangon.bind(report)(zuuluu);
                report = null;
                if(!(report == option)) { _fun00002_ip = 46; continue _fun00001 }
 30:
                tangon = {'selfMute': false, 'suppress': false, 'mute': false};
                _fun00002_ip = 130; continue _fun00001;
 46:
                golfie = _closure1_slot0;
                oscard = _closure1_slot2;
                zuuluu = 14;
                oscard = oscard[zuuluu];
                zuuluu = undefined;
                golfie = golfie.bind(zuuluu)(oscard);
                oscard = golfie.getMuteStates;
                zuuluu = {};
                zuuluu['channel'] = option;
                option = _closure1_slot7;
                zuuluu['authenticationStore'] = option;
                option = _closure1_slot12;
                zuuluu['voiceStateStore'] = option;
                option = _closure1_slot9;
                zuuluu['mediaEngineStore'] = option;
                option = _closure1_slot10;
                zuuluu['permissionStore'] = option;
                option = _closure1_slot6;
                zuuluu['impersonateStore'] = option;
                tangon = oscard.bind(golfie)(zuuluu);
 130:
                zuuluu = _closure2_slot1;
                zuuluu = zuuluu.current;
                option = report == zuuluu;
                oscard = undefined;
                golfie = undefined;
                if(option) { _fun00002_ip = 156; continue _fun00001 }
 150:
                golfie = zuuluu.selfMute;
 156:
                zuuluu = tangon.selfMute;
                zuuluu = golfie !== zuuluu;
                option = undefined;
                if(!zuuluu) { _fun00002_ip = 191; continue _fun00001 }
 171:
                verify = _closure1_slot11;
                golfie = verify.getCurrentUser;
                golfie = golfie.bind(verify)();
                zuuluu = report != golfie;
                option = golfie;
 191:
                if(!zuuluu) { _fun00002_ip = 204; continue _fun00001 }
 194:
                golfie = option.isStaff;
                zuuluu = golfie.bind(option)();
 204:
                if(!zuuluu) { _fun00002_ip = 267; continue _fun00001 }
 207:
                yankee = _closure1_slot16;
                offset = yankee.info;
                zuuluu = _closure2_slot1;
                zuuluu = zuuluu.current;
                golfie = report == zuuluu;
                verify = undefined;
                if(golfie) { _fun00002_ip = 241; continue _fun00001 }
 235:
                verify = zuuluu.selfMute;
 241:
                romeon = tangon.selfMute;
                kiloes = 'Self mute changed';
                foxtra = '>';
                sizing = yankee;
                backup = verify;
                zuuluu = sizing[offset](kiloes, backup, foxtra, romeon, yankee);
 267:
                michal = _closure2_slot1;
                michal['current'] = tangon;
                zuuluu = _closure1_slot0;
                golfie = _closure1_slot2;
                michal = 15;
                michal = golfie[michal];
                zuuluu = zuuluu.bind(oscard)(michal);
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
    var _closure1_slot20 = entity;
    entity = function(argFoo) { // Original name: AnimatedMicrophoneIcon
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.buttonStyles;
            var _closure2_slot0 = zuuluu;
            report = entity.isMuted;
            var _closure2_slot1 = report;
            golfie = _closure1_slot4;
            oscard = golfie.useRef;
            tangon = null;
            option = oscard.bind(golfie)(tangon);
            var _closure2_slot2 = option;
            golfie = _closure1_slot1;
            verify = _closure1_slot2;
            tangon = 27;
            oscard = verify[tangon];
            tangon = undefined;
            offset = golfie.bind(tangon)(oscard);
            oscard = {};
            yankee = 'VoicePanelMicButton';
            oscard['location'] = yankee;
            oscard = offset.bind(tangon)(oscard);
            romeon = oscard.enabled;
            var _closure2_slot3 = romeon;
            yankee = _closure1_slot4;
            offset = yankee.useMemo;
            oscard = new Array(3);
            oscard[0] = romeon;
            oscard[1] = report;
            oscard[2] = zuuluu;
            zuuluu = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot3;
                    michal = _closure2_slot1;
                    zuuluu = _closure2_slot0;
                    if(entity) { _fun00006_ip = 47; continue _fun00005 }
 18:
                    if(michal) { _fun00006_ip = 34; continue _fun00005 }
 21:
                    entity = zuuluu.iconFillSelected;
                    entity = entity.color;
                    _fun00006_ip = 45; continue _fun00005;
 34:
                    tangon = zuuluu.iconFill;
                    entity = tangon.color;
 45:
                    _fun00006_ip = 77; continue _fun00005;
 47:
                    if(michal) { _fun00006_ip = 63; continue _fun00005 }
 50:
                    michal = zuuluu.iconFill;
                    michal = michal.color;
                    _fun00006_ip = 74; continue _fun00005;
 63:
                    zuuluu = zuuluu.iconFillRed;
                    michal = zuuluu.color;
 74:
                    entity = michal;
 77:
                    return entity;
                }
            };
            oscard = offset.bind(yankee)(zuuluu, oscard);
            yankee = _closure1_slot4;
            offset = yankee.useRef;
            zuuluu = true;
            zuuluu = offset.bind(yankee)(zuuluu);
            var _closure2_slot4 = zuuluu;
            romeon = _closure1_slot4;
            yankee = romeon.useEffect;
            offset = new Array(2);
            offset[0] = report;
            offset[1] = option;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    if(michal) { _fun00008_ip = 42; continue _fun00007 }
 15:
                    michal = _closure2_slot2;
                    zuuluu = michal.current;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00008_ip = 54; continue _fun00007 }
 30:
                    michal = zuuluu.play;
                    michal = michal.bind(zuuluu)();
                    _fun00008_ip = 54; continue _fun00007;
 42:
                    michal = _closure2_slot4;
                    entity = false;
                    michal['current'] = entity;
 54:
                    entity = undefined;
                    return entity;
                }
            };
            michal = yankee.bind(romeon)(michal, offset);
            michal = 28;
            michal = verify[michal];
            michal = golfie.bind(tangon)(michal);
            golfie = michal.bind(tangon)(zuuluu);
            zuuluu = _closure1_slot13;
            michal = _closure1_slot0;
            entity = 29;
            entity = verify[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.MicrophoneLottie;
            entity = {};
            entity['ref'] = option;
            entity['color'] = oscard;
            oscard = 'md';
            entity['size'] = oscard;
            oscard = report;
            if(!golfie) { _fun00004_ip = 258; continue _fun00003 }
 255:
            oscard = !report;
 258:
            report = 'unmute';
            if(!oscard) { _fun00004_ip = 269; continue _fun00003 }
 265:
            report = 'mute';
 269:
            entity['animation'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    var _closure1_slot21 = entity;
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
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot12 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.jsx;
    var _closure1_slot13 = option;
    option = tangon.Fragment;
    var _closure1_slot14 = option;
    tangon = tangon.jsxs;
    var _closure1_slot15 = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    option = golfie.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    romeon = 'VoicePanelMicButton';
    foxtra = golfie;
    tangon = new foxtra[option](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot16 = tangon;
    tangon = 12;
    tangon = oscard[tangon];
    option = report.bind(entity)(tangon);
    golfie = option.createStyles;
    tangon = {};
    verify = {'position': 'absolute', 'left': 0, 'right': 0, 'bottom': 4, 'textAlign': 'center', 'opacity': 0.5};
    tangon['text'] = verify;
    tangon = golfie.bind(option)(tangon);
    var _closure1_slot17 = tangon;
    tangon = {};
    golfie = 'function VoicePanelMicButtonTsx1(){const{runOnJS,handlePTTEnd}=this.__closure;runOnJS(handlePTTEnd)();}';
    tangon['code'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = {};
    golfie = 'function VoicePanelMicButtonTsx2(event,manager){const{State,runOnJS,handleDragStart}=this.__closure;if(event.state!==State.BEGAN)return;manager.activate();runOnJS(handleDragStart)();}';
    tangon['code'] = golfie;
    var _closure1_slot19 = tangon;
    tangon = 31;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/controls/buttons/VoicePanelMicButton.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: PTTButton
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            michal = _closure1_slot17;
            offset = michal.bind(tangon)();
            golfie = _closure1_slot4;
            report = golfie.useContext;
            option = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 17;
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
            michal = _closure1_slot20;
            michal = michal.bind(tangon)(report);
            verify = michal.mute;
            golfie = michal.onPress;
            michal = function(argFoo) { // Original name: useDeafHandlers
                oscard = argFoo;
                var _closure3_slot0 = oscard;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                zuuluu = 13;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.useStateFromStoresObject;
                golfie = _closure1_slot8;
                zuuluu = new Array(6);
                zuuluu[0] = golfie;
                golfie = _closure1_slot7;
                zuuluu[1] = golfie;
                golfie = _closure1_slot12;
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
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        tangon = _closure1_slot8;
                        zuuluu = tangon.getChannel;
                        michal = _closure3_slot0;
                        option = zuuluu.bind(tangon)(michal);
                        michal = null;
                        if(!(michal == option)) { _fun00012_ip = 46; continue _fun00011 }
 30:
                        zuuluu = {'selfDeaf': false, 'deaf': false};
                        _fun00012_ip = 96; continue _fun00011;
 46:
                        report = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 16;
                        tangon = tangon[michal];
                        michal = undefined;
                        golfie = report.bind(michal)(tangon);
                        oscard = golfie.getDeafStates;
                        yankee = _closure1_slot12;
                        offset = _closure1_slot9;
                        verify = _closure1_slot7;
                        foxtra = golfie;
                        romeon = option;
                        zuuluu = foxtra[oscard](romeon, yankee, offset, verify, option);
 96:
                        tangon = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 15;
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
            if(michal) { _fun00010_ip = 200; continue _fun00009 }
 189:
            michal = undefined;
            if(!verify) { _fun00010_ip = 197; continue _fun00009 }
 194:
            michal = golfie;
 197:
            report = michal;
 200:
            _closure2_slot1 = report;
            echoed = _closure1_slot0;
            kiloes = _closure1_slot2;
            michal = 18;
            michal = kiloes[michal];
            golfie = echoed.bind(tangon)(michal);
            michal = golfie.useSharedValue;
            foxtra = michal.bind(golfie)(option);
            _closure2_slot2 = foxtra;
            romeon = _closure1_slot1;
            michal = 19;
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
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.active;
                    if(michal) { _fun00014_ip = 189; continue _fun00013 }
 24:
                    zuuluu = _closure2_slot1;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 44; continue _fun00013 }
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
                    report = 20;
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
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.active;
                    if(!michal) { _fun00016_ip = 129; continue _fun00015 }
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
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.dragging;
                    if(michal) { _fun00018_ip = 31; continue _fun00017 }
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
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    michal = _closure2_slot4;
                    michal = michal.current;
                    michal = michal.dragging;
                    if(michal) { _fun00020_ip = 48; continue _fun00019 }
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
                oscard = 21;
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
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        tangon = argBar;
                        entity = argFoo;
                        report = entity.state;
                        oscard = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 21;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        zuuluu = oscard.bind(entity)(zuuluu);
                        zuuluu = zuuluu.State;
                        zuuluu = zuuluu.BEGAN;
                        if(!(report === zuuluu)) { _fun00022_ip = 103; continue _fun00021 }
 52:
                        zuuluu = tangon.activate;
                        zuuluu = zuuluu.bind(tangon)();
                        zuuluu = _closure1_slot0;
                        tangon = _closure1_slot2;
                        michal = 18;
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
                golfie = 18;
                oscard = offset[golfie];
                oscard = verify.bind(option)(oscard);
                oscard = oscard.runOnJS;
                yankee['runOnJS'] = oscard;
                romeon = _closure2_slot7;
                yankee['handleDragStart'] = romeon;
                michal['__closure'] = yankee;
                yankee = 13866422602014.0;
                michal['__workletHash'] = yankee;
                yankee = _closure1_slot19;
                michal['__initData'] = yankee;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.onFinalize;
                entity = function() { // Original name: t
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 18;
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
                report = 12941114426646.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot18;
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
            entity = 22;
            entity = kiloes[entity];
            michal = echoed.bind(tangon)(entity);
            entity = michal.useVoicePanelButtonStyles;
            yankee = entity.bind(michal)(zuuluu);
            zuuluu = _closure1_slot15;
            michal = _closure1_slot14;
            entity = {};
            option = _closure1_slot13;
            report = 21;
            report = kiloes[report];
            report = echoed.bind(tangon)(report);
            golfie = report.GestureDetector;
            report = {};
            report['gesture'] = verify;
            backup = _closure1_slot13;
            verify = 23;
            verify = kiloes[verify];
            romeon = romeon.bind(tangon)(verify);
            verify = {};
            verify['onPressIn'] = update;
            verify['onPressOut'] = output;
            verify['props'] = sizing;
            verify['pressed'] = foxtra;
            foxtra = 24;
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
            if(result) { _fun00010_ip = 659; continue _fun00009 }
 651:
            kiloes = yankee.iconBg;
            _fun00010_ip = 665; continue _fun00009;
 659:
            kiloes = yankee.iconBgSelected;
 665:
            verify['style'] = kiloes;
            output = _closure1_slot13;
            sizing = _closure1_slot0;
            echoed = _closure1_slot2;
            kiloes = 25;
            kiloes = echoed[kiloes];
            kiloes = sizing.bind(tangon)(kiloes);
            sizing = kiloes.MicrophoneIcon;
            kiloes = {};
            if(result) { _fun00010_ip = 717; continue _fun00009 }
 704:
            result = yankee.iconFill;
            result = result.color;
            _fun00010_ip = 728; continue _fun00009;
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
            option = _closure1_slot13;
            romeon = _closure1_slot0;
            verify = _closure1_slot2;
            oscard = 26;
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
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            michal = argFoo;
            offset = michal.props;
            oscard = michal.wrapperSpecs;
            report = _closure1_slot20;
            verify = _closure1_slot4;
            golfie = verify.useContext;
            michal = _closure1_slot1;
            yankee = _closure1_slot2;
            zuuluu = 17;
            zuuluu = yankee[zuuluu];
            tangon = undefined;
            zuuluu = michal.bind(tangon)(zuuluu);
            zuuluu = golfie.bind(verify)(zuuluu);
            zuuluu = zuuluu.channelId;
            zuuluu = report.bind(tangon)(zuuluu);
            golfie = zuuluu.mute;
            var _closure2_slot0 = golfie;
            verify = zuuluu.onPress;
            backup = zuuluu.dominantMuteState;
            var _closure2_slot1 = backup;
            report = _closure1_slot0;
            zuuluu = 22;
            zuuluu = yankee[zuuluu];
            report = report.bind(tangon)(zuuluu);
            zuuluu = report.useVoicePanelButtonStyles;
            kiloes = zuuluu.bind(report)(oscard);
            var _closure2_slot2 = kiloes;
            zuuluu = 27;
            zuuluu = yankee[zuuluu];
            report = michal.bind(tangon)(zuuluu);
            zuuluu = {};
            oscard = 'VoicePanelMicButton';
            zuuluu['location'] = oscard;
            zuuluu = report.bind(tangon)(zuuluu);
            foxtra = zuuluu.enabled;
            var _closure2_slot3 = foxtra;
            romeon = _closure1_slot4;
            oscard = romeon.useMemo;
            report = new Array(3);
            report[0] = foxtra;
            report[1] = golfie;
            report[2] = kiloes;
            zuuluu = function() {
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = _closure2_slot3;
                    michal = _closure2_slot0;
                    zuuluu = _closure2_slot2;
                    if(entity) { _fun00026_ip = 37; continue _fun00025 }
 18:
                    if(michal) { _fun00026_ip = 29; continue _fun00025 }
 21:
                    entity = zuuluu.iconBgSelected;
                    _fun00026_ip = 35; continue _fun00025;
 29:
                    entity = zuuluu.iconBg;
 35:
                    _fun00026_ip = 57; continue _fun00025;
 37:
                    if(michal) { _fun00026_ip = 48; continue _fun00025 }
 40:
                    michal = zuuluu.iconBg;
                    _fun00026_ip = 54; continue _fun00025;
 48:
                    michal = zuuluu.iconBgSelected;
 54:
                    entity = michal;
 57:
                    return entity;
                }
            };
            oscard = oscard.bind(romeon)(zuuluu, report);
            romeon = _closure1_slot4;
            report = romeon.useMemo;
            zuuluu = new Array(4);
            zuuluu[0] = kiloes;
            zuuluu[1] = golfie;
            zuuluu[2] = backup;
            zuuluu[3] = foxtra;
            entity = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    report = _closure2_slot1;
                    oscard = _closure1_slot0;
                    tangon = _closure1_slot2;
                    zuuluu = 15;
                    zuuluu = tangon[zuuluu];
                    tangon = undefined;
                    zuuluu = oscard.bind(tangon)(zuuluu);
                    zuuluu = zuuluu.DominantMuteState;
                    zuuluu = zuuluu.SERVER_MUTE;
                    if(!(report !== zuuluu)) { _fun00028_ip = 84; continue _fun00027 }
 48:
                    oscard = _closure1_slot13;
                    report = _closure1_slot21;
                    zuuluu = {};
                    golfie = _closure2_slot2;
                    zuuluu['buttonStyles'] = golfie;
                    golfie = _closure2_slot0;
                    zuuluu['isMuted'] = golfie;
                    zuuluu = oscard.bind(tangon)(report, zuuluu);
                    return zuuluu;
 84:
                    zuuluu = _closure2_slot3;
                    michal = _closure2_slot2;
                    if(zuuluu) { _fun00028_ip = 108; continue _fun00027 }
 95:
                    zuuluu = michal.iconFill;
                    report = zuuluu.color;
                    _fun00028_ip = 119; continue _fun00027;
 108:
                    michal = michal.iconFillRed;
                    report = michal.color;
 119:
                    zuuluu = _closure1_slot13;
                    michal = _closure1_slot0;
                    oscard = _closure1_slot2;
                    entity = 30;
                    entity = oscard[entity];
                    entity = michal.bind(tangon)(entity);
                    michal = entity.MicrophoneDenyIcon;
                    entity = {};
                    entity['color'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            report = report.bind(romeon)(entity, zuuluu);
            zuuluu = _closure1_slot13;
            entity = 23;
            entity = yankee[entity];
            michal = michal.bind(tangon)(entity);
            entity = {};
            entity['props'] = offset;
            entity['onPress'] = verify;
            yankee = _closure1_slot0;
            romeon = _closure1_slot2;
            option = 24;
            verify = romeon[option];
            verify = yankee.bind(tangon)(verify);
            offset = verify.intl;
            verify = offset.string;
            option = romeon[option];
            option = yankee.bind(tangon)(option);
            option = option.t;
            if(golfie) { _fun00024_ip = 330; continue _fun00023 }
 317:
            golfie = option.w4m94+;
            golfie = verify.bind(offset)(golfie);
            _fun00024_ip = 341; continue _fun00023;
 330:
            option = option.YqAjX1;
            golfie = verify.bind(offset)(option);
 341:
            entity['accessibilityLabel'] = golfie;
            entity['style'] = oscard;
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['MicButton'] = michal;
    return entity;
})();
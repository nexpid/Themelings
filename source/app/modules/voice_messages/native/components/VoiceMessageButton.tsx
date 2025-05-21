// app/modules/voice_messages/native/components/VoiceMessageButton.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    option = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = option;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: triggerHapticGuarded
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot12;
            michal = zuuluu.getState;
            michal = michal.bind(zuuluu)();
            michal = michal.showRecordingOverlay;
            if(!michal) { _fun00002_ip = 58; continue _fun00001 }
 26:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 12;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.triggerHaptic;
            entity = entity.bind(michal)();
 58:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = global;
    verify = entity.Object;
    golfie = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = option.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.setIsVoiceMessageButtonMounted;
    var _closure1_slot8 = option;
    option = tangon.setIsUsingHoldGesture;
    var _closure1_slot9 = option;
    option = tangon.setVoiceMessageAnimationState;
    var _closure1_slot10 = option;
    option = tangon.showVoiceMessagesTooltip;
    var _closure1_slot11 = option;
    option = tangon.useVoiceMessagesUIStore;
    var _closure1_slot12 = option;
    option = tangon.setShowRecordingOverlay;
    var _closure1_slot13 = option;
    tangon = tangon.hideVoiceMessagesTooltip;
    var _closure1_slot14 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.VoiceMessageAnimationState;
    var _closure1_slot15 = option;
    tangon = tangon.VOICE_RECORDING_MIN_DURATION_MILLIS;
    var _closure1_slot16 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    option = tangon.ComponentActions;
    var _closure1_slot17 = option;
    option = tangon.ComponentActionsKeyed;
    var _closure1_slot18 = option;
    tangon = tangon.MessageFlags;
    var _closure1_slot19 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativePermissionTypes;
    var _closure1_slot20 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot21 = tangon;
    tangon = {};
    option = 'function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}';
    tangon['code'] = option;
    var _closure1_slot22 = tangon;
    tangon = {};
    option = 'function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}';
    tangon['code'] = option;
    var _closure1_slot23 = tangon;
    tangon = {};
    option = 'function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}';
    tangon['code'] = option;
    var _closure1_slot24 = tangon;
    tangon = {};
    option = 'function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}';
    tangon['code'] = option;
    var _closure1_slot25 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) {
        entity = argFoo;
        golfie = entity.disabled;
        var _closure2_slot0 = golfie;
        output = entity.channelId;
        var _closure2_slot1 = output;
        report = _closure1_slot12;
        tangon = undefined;
        zuuluu = function(argFoo) {
            entity = argFoo;
            entity = entity.voiceMessageAnimationState;
            return entity;
        };
        result = report.bind(tangon)(zuuluu);
        var _closure2_slot2 = result;
        foxtra = _closure1_slot0;
        backup = _closure1_slot2;
        source = 13;
        zuuluu = backup[source];
        oscard = foxtra.bind(tangon)(zuuluu);
        report = oscard.useSharedValue;
        zuuluu = 0;
        kiloes = report.bind(oscard)(zuuluu);
        var _closure2_slot3 = kiloes;
        report = function() { // Original name: useIsGestureActive
            oscard = _closure1_slot5;
            zuuluu = oscard.useRef;
            report = false;
            tangon = zuuluu.bind(oscard)(report);
            var _closure3_slot0 = tangon;
            golfie = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 13;
            zuuluu = zuuluu[michal];
            michal = undefined;
            zuuluu = golfie.bind(michal)(zuuluu);
            michal = zuuluu.useSharedValue;
            zuuluu = michal.bind(zuuluu)(report);
            var _closure3_slot1 = zuuluu;
            report = oscard.useCallback;
            michal = new Array(2);
            michal[0] = tangon;
            michal[1] = zuuluu;
            entity = function(argFoo) {
                zuuluu = argFoo;
                michal = _closure3_slot0;
                michal['current'] = zuuluu;
                michal = _closure3_slot1;
                entity = michal.set;
                entity = entity.bind(michal)(zuuluu);
                entity = undefined;
                return entity;
            };
            michal = report.bind(oscard)(entity, michal);
            entity = new Array(3);
            entity[0] = tangon;
            entity[1] = zuuluu;
            entity[2] = michal;
            return entity;
        };
        option = report.bind(tangon)();
        oscard = _closure1_slot4;
        report = 3;
        report = oscard.bind(tangon)(option, report);
        update = report[zuuluu];
        var _closure2_slot4 = update;
        zuuluu = 1;
        echoed = report[zuuluu];
        var _closure2_slot5 = echoed;
        zuuluu = 2;
        report = report[zuuluu];
        var _closure2_slot6 = report;
        yankee = _closure1_slot5;
        oscard = yankee.useRef;
        zuuluu = true;
        zuuluu = oscard.bind(yankee)(zuuluu);
        var _closure2_slot7 = zuuluu;
        oscard = _closure1_slot1;
        zuuluu = 14;
        zuuluu = backup[zuuluu];
        zuuluu = oscard.bind(tangon)(zuuluu);
        sizing = zuuluu.bind(tangon)();
        zuuluu = 15;
        zuuluu = backup[zuuluu];
        zuuluu = oscard.bind(tangon)(zuuluu);
        zuuluu = zuuluu.bind(tangon)();
        zuuluu = zuuluu.width;
        offset = yankee.useCallback;
        option = function() {
            tangon = _closure1_slot3;
            zuuluu = undefined;
            michal = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        michal = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zuuluu) { _fun00004_ip = 666; continue _fun00003 }
 15:
                        yankee = michal.isCancelling;
                        verify = michal.cancelReason;
                        tangon = undefined;
                        if(!(verify === tangon)) { _fun00004_ip = 68; continue _fun00003 }
 33:
                        report = _closure1_slot0;
                        oscard = _closure1_slot2;
                        michal = 16;
                        michal = oscard[michal];
                        michal = report.bind(tangon)(michal);
                        michal = michal.VoiceMessageRecordingResult;
                        verify = michal.CANCELLED_USER_REQUESTED;
 68:
                        var _closure5_slot0 = tangon;
                        SaveGenerator(address=76);
 74:
                        return tangon;
 76:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zuuluu) { _fun00004_ip = 663; continue _fun00003 }
 85:
                        report = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        offset = 12;
                        zuuluu = zuuluu[offset];
                        report = report.bind(tangon)(zuuluu);
                        zuuluu = report.endAudioRecording;
                        zuuluu = zuuluu.bind(report)();
                        SaveGenerator(address=122);
 120:
                        return zuuluu;
 122:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00004_ip = 660; continue _fun00003 }
 131:
                        report = zuuluu.data;
                        option = zuuluu.startTimeMillis;
                        foxtra = _closure2_slot6;
                        romeon = false;
                        romeon = foxtra.bind(tangon)(romeon);
                        if(yankee) { _fun00004_ip = 621; continue _fun00003 }
 162:
                        romeon = report.durationSecs;
                        foxtra = _closure1_slot16;
                        yankee = 1000;
                        yankee = foxtra / yankee;
                        if(!(!(romeon < yankee))) { _fun00004_ip = 548; continue _fun00003 }
 189:
                        romeon = _closure1_slot0;
                        sizing = _closure1_slot2;
                        yankee = sizing[offset];
                        backup = romeon.bind(tangon)(yankee);
                        foxtra = backup.emitVoiceMessageRecorded;
                        yankee = 16;
                        yankee = sizing[yankee];
                        yankee = romeon.bind(tangon)(yankee);
                        yankee = yankee.VoiceMessageRecordingResult;
                        romeon = yankee.SENT;
                        yankee = report.durationSecs;
                        yankee = foxtra.bind(backup)(romeon, yankee, option);
                        romeon = _closure1_slot7;
                        yankee = romeon.getChannel;
                        golfie = _closure2_slot1;
                        golfie = yankee.bind(romeon)(golfie);
                        _closure5_slot0 = golfie;
                        yankee = null;
                        if(!(yankee != golfie)) { _fun00004_ip = 657; continue _fun00003 }
 280:
                        romeon = _closure1_slot0;
                        foxtra = _closure1_slot2;
                        yankee = 17;
                        yankee = foxtra[yankee];
                        yankee = romeon.bind(tangon)(yankee);
                        sizing = yankee.CloudUpload;
                        backup = {};
                        yankee = report.filename;
                        backup['uri'] = yankee;
                        yankee = report.filename;
                        backup['originalUri'] = yankee;
                        yankee = 'audio/ogg';
                        backup['mimeType'] = yankee;
                        yankee = 'voice-message.ogg';
                        backup['filename'] = yankee;
                        yankee = 18;
                        yankee = foxtra[yankee];
                        yankee = romeon.bind(tangon)(yankee);
                        yankee = yankee.UploadPlatform;
                        yankee = yankee.REACT_NATIVE;
                        backup['platform'] = yankee;
                        yankee = report.durationSecs;
                        backup['durationSecs'] = yankee;
                        yankee = report.waveform;
                        backup['waveform'] = yankee;
                        update = golfie.id;
                        romeon = sizing.prototype;
                        romeon = Object.create(romeon, {constructor: {value: sizing}});
                        ctrled = romeon;
                        source = backup;
                        yankee = new ctrled[sizing](source, update, echoed);
                        yankee = yankee instanceof Object ? yankee : romeon;
                        sizing = new Array(1);
                        sizing[0] = yankee;
                        romeon = _closure1_slot1;
                        yankee = 19;
                        yankee = foxtra[yankee];
                        backup = romeon.bind(tangon)(yankee);
                        foxtra = backup.sendMessage;
                        source = golfie.id;
                        yankee = {'content': '', 'tts': false};
                        golfie = new Array(0);
                        yankee['invalidEmojis'] = golfie;
                        golfie = new Array(0);
                        yankee['validNonShortcutEmojis'] = golfie;
                        golfie = {};
                        output = _closure1_slot19;
                        output = output.IS_VOICE_MESSAGE;
                        golfie['flags'] = output;
                        golfie['attachmentsToUpload'] = sizing;
                        kiloes = function(argFoo, argBar, argBaz) { // Original name: onAttachmentUploadError
                            zuuluu = _closure1_slot0;
                            michal = _closure1_slot2;
                            entity = 20;
                            michal = michal[entity];
                            entity = undefined;
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.handleUploadMessageAttachmentsErrors;
                            michal = {};
                            report = argFoo;
                            michal['file'] = report;
                            oscard = _closure5_slot0;
                            report = oscard.getGuildId;
                            report = report.bind(oscard)();
                            michal['guildId'] = report;
                            report = new Array(0);
                            michal['analyticsLocations'] = report;
                            report = argBar;
                            michal['code'] = report;
                            report = argBaz;
                            michal['reason'] = report;
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        };
                        golfie['onAttachmentUploadError'] = kiloes;
                        ctrled = backup;
                        update = yankee;
                        echoed = undefined;
                        result = golfie;
                        golfie = ctrled[foxtra](source, update, echoed, result, output);
                        _fun00004_ip = 657; continue _fun00003;
 548:
                        yankee = _closure1_slot0;
                        backup = _closure1_slot2;
                        golfie = backup[offset];
                        foxtra = yankee.bind(tangon)(golfie);
                        romeon = foxtra.emitVoiceMessageRecorded;
                        golfie = 16;
                        golfie = backup[golfie];
                        golfie = yankee.bind(tangon)(golfie);
                        golfie = golfie.VoiceMessageRecordingResult;
                        yankee = golfie.CANCELLED_DURATION;
                        golfie = report.durationSecs;
                        golfie = romeon.bind(foxtra)(yankee, golfie, option);
                        golfie = _closure1_slot11;
                        golfie = golfie.bind(tangon)();
                        golfie = undefined;
                        return golfie;
 621:
                        golfie = _closure1_slot0;
                        oscard = _closure1_slot2;
                        oscard = oscard[offset];
                        golfie = golfie.bind(tangon)(oscard);
                        oscard = golfie.emitVoiceMessageRecorded;
                        report = report.durationSecs;
                        report = oscard.bind(golfie)(verify, report, option);
 657:
                        return tangon;
 660:
                        return zuuluu;
 663:
                        return michal;
 666:
                        return entity;
                    }
                };
                michal = entity.next;
                michal = michal.bind(entity)();
                return entity;
            };
            michal = tangon.bind(zuuluu)(michal);
            var _closure3_slot0 = michal;
            entity = function() {
                entity = undefined;
                tangon = _closure3_slot0;
                zuuluu = tangon.apply;
                entity = arguments;
                michal = entity;
                entity = this;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            };
            return entity;
        };
        verify = option.bind(tangon)();
        option = new Array(2);
        option[0] = output;
        option[1] = report;
        romeon = offset.bind(yankee)(verify, option);
        var _closure2_slot8 = romeon;
        offset = yankee.useEffect;
        verify = new Array(2);
        verify[0] = output;
        verify[1] = romeon;
        option = function() {
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 21;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            report = michal.ComponentDispatch;
            tangon = report.subscribeKeyed;
            entity = _closure1_slot18;
            zuuluu = entity.VOICE_MESSAGE_SEND;
            michal = _closure2_slot1;
            entity = _closure2_slot8;
            entity = tangon.bind(report)(zuuluu, michal, entity);
            entity = function() {
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 21;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                oscard = zuuluu.ComponentDispatch;
                report = oscard.unsubscribeKeyed;
                michal = _closure1_slot18;
                tangon = michal.VOICE_MESSAGE_SEND;
                zuuluu = _closure2_slot1;
                michal = _closure2_slot8;
                michal = report.bind(oscard)(tangon, zuuluu, michal);
                return entity;
            };
            return entity;
        };
        option = offset.bind(yankee)(option, verify);
        offset = yankee.useEffect;
        verify = function() {
            zuuluu = _closure1_slot8;
            michal = undefined;
            entity = true;
            entity = zuuluu.bind(michal)(entity);
            entity = function() {
                zuuluu = _closure1_slot8;
                entity = undefined;
                michal = false;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            return entity;
        };
        option = new Array(0);
        option = offset.bind(yankee)(verify, option);
        offset = yankee.useEffect;
        verify = new Array(2);
        verify[0] = update;
        verify[1] = report;
        option = function() {
            tangon = _closure2_slot7;
            zuuluu = true;
            tangon['current'] = zuuluu;
            michal = _closure2_slot4;
            michal = michal.current;
            var _closure3_slot0 = michal;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot7;
                    tangon = false;
                    entity['current'] = tangon;
                    report = _closure1_slot12;
                    zuuluu = report.getState;
                    report = zuuluu.bind(report)();
                    zuuluu = report.showRecordingOverlay;
                    if(zuuluu) { _fun00006_ip = 53; continue _fun00005 }
 41:
                    oscard = report.recordingStatus;
                    report = null;
                    zuuluu = report != oscard;
 53:
                    if(zuuluu) { _fun00006_ip = 63; continue _fun00005 }
 56:
                    zuuluu = _closure3_slot0;
 63:
                    if(!zuuluu) { _fun00006_ip = 107; continue _fun00005 }
 66:
                    michal = _closure2_slot6;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)(tangon);
                    michal = _closure1_slot0;
                    tangon = _closure1_slot2;
                    entity = 12;
                    entity = tangon[entity];
                    michal = michal.bind(zuuluu)(entity);
                    entity = michal.endAudioRecording;
                    entity = entity.bind(michal)();
 107:
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        };
        option = offset.bind(yankee)(option, verify);
        option = 10;
        option = backup[option];
        verify = foxtra.bind(tangon)(option);
        option = verify.useIsModalOpen;
        option = option.bind(verify)();
        ctrled = yankee.useEffect;
        offset = new Array(3);
        offset[0] = update;
        offset[1] = report;
        offset[2] = output;
        verify = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                michal = function() { // Original name: cancel
                    entity = undefined;
                    tangon = _closure3_slot1;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                var _closure3_slot0 = michal;
                zuuluu = function() { // Original name: _cancel
                    tangon = undefined;
                    entity = undefined;
                    zuuluu = _closure1_slot3;
                    michal = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(michal) { _fun00010_ip = 201; continue _fun00009 }
 10:
                                zuuluu = _closure1_slot12;
                                michal = zuuluu.getState;
                                michal = michal.bind(zuuluu)();
                                zuuluu = michal.showRecordingOverlay;
                                if(zuuluu) { _fun00010_ip = 66; continue _fun00009 }
 36:
                                zuuluu = michal.recordingStatus;
                                michal = null;
                                if(!(michal == zuuluu)) { _fun00010_ip = 66; continue _fun00009 }
 48:
                                michal = _closure2_slot4;
                                michal = michal.current;
                                if(!michal) { _fun00010_ip = 193; continue _fun00009 }
 66:
                                zuuluu = _closure2_slot6;
                                report = undefined;
                                michal = false;
                                michal = zuuluu.bind(report)(michal);
                                tangon = _closure1_slot0;
                                michal = _closure1_slot2;
                                zuuluu = 12;
                                michal = michal[zuuluu];
                                tangon = tangon.bind(report)(michal);
                                michal = tangon.endAudioRecording;
                                michal = michal.bind(tangon)();
                                SaveGenerator(address=116);
 114:
                                return michal;
 116:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tangon) { _fun00010_ip = 198; continue _fun00009 }
 122:
                                tangon = _closure1_slot0;
                                option = _closure1_slot2;
                                zuuluu = option[zuuluu];
                                golfie = tangon.bind(report)(zuuluu);
                                oscard = golfie.emitVoiceMessageRecorded;
                                zuuluu = 16;
                                zuuluu = option[zuuluu];
                                zuuluu = tangon.bind(report)(zuuluu);
                                zuuluu = zuuluu.VoiceMessageRecordingResult;
                                report = zuuluu.CANCELLED_GESTURE_CONFLICT;
                                zuuluu = michal.data;
                                tangon = zuuluu.durationSecs;
                                zuuluu = michal.startTimeMillis;
                                zuuluu = oscard.bind(golfie)(report, tangon, zuuluu);
 193:
                                zuuluu = undefined;
                                return zuuluu;
 198:
                                return michal;
 201:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    _closure3_slot1 = tangon;
                    zuuluu = tangon.apply;
                    entity = arguments;
                    michal = entity;
                    entity = this;
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                };
                var _closure3_slot1 = zuuluu;
                golfie = function() { // Original name: handleActionSheetChange
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        michal = _closure1_slot6;
                        entity = michal.isOpen;
                        entity = entity.bind(michal)();
                        if(!entity) { _fun00012_ip = 33; continue _fun00011 }
 20:
                        michal = _closure3_slot0;
                        entity = undefined;
                        entity = michal.bind(entity)();
 33:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot2 = golfie;
                report = function() { // Original name: handleNavigationChange
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 22;
                        michal = michal[entity];
                        entity = undefined;
                        zuuluu = zuuluu.bind(entity)(michal);
                        michal = zuuluu.getFocusedChannelId;
                        zuuluu = michal.bind(zuuluu)();
                        michal = null;
                        if(!(michal == zuuluu)) { _fun00014_ip = 54; continue _fun00013 }
 41:
                        michal = _closure3_slot0;
                        michal = michal.bind(entity)();
                        _fun00014_ip = 76; continue _fun00013;
 54:
                        michal = _closure2_slot1;
                        if(!(zuuluu !== michal)) { _fun00014_ip = 76; continue _fun00013 }
 65:
                        michal = _closure3_slot0;
                        michal = michal.bind(entity)();
 76:
                        return entity;
                    }
                };
                var _closure3_slot3 = report;
                tangon = undefined;
                michal = michal.bind(tangon)();
                oscard = _closure1_slot6;
                zuuluu = oscard.addReactChangeListener;
                zuuluu = zuuluu.bind(oscard)(golfie);
                zuuluu = _closure1_slot0;
                oscard = _closure1_slot2;
                michal = 23;
                michal = oscard[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.getRootNavigationRef;
                tangon = michal.bind(zuuluu)();
                michal = null;
                if(!(michal != tangon)) { _fun00008_ip = 122; continue _fun00007 }
 106:
                zuuluu = tangon.addListener;
                michal = 'state';
                michal = zuuluu.bind(tangon)(michal, report);
 122:
                entity = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        report = _closure1_slot6;
                        tangon = report.removeReactChangeListener;
                        zuuluu = _closure3_slot2;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = _closure1_slot0;
                        zuuluu = _closure1_slot2;
                        entity = 23;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = tangon.getRootNavigationRef;
                        report = zuuluu.bind(tangon)();
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00016_ip = 83; continue _fun00015 }
 63:
                        tangon = report.removeListener;
                        zuuluu = _closure3_slot3;
                        michal = 'state';
                        michal = tangon.bind(report)(michal, zuuluu);
 83:
                        return entity;
                    }
                };
                return entity;
            }
        };
        verify = ctrled.bind(yankee)(verify, offset);
        offset = yankee.useEffect;
        verify = new Array(2);
        verify[0] = kiloes;
        verify[1] = option;
        option = function() {
            zuuluu = _closure1_slot10;
            michal = {};
            entity = _closure2_slot3;
            michal['currWaveHeight'] = entity;
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        option = offset.bind(yankee)(option, verify);
        kiloes = yankee.useCallback;
        option = _closure1_slot3;
        verify = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00018_ip = 617; continue _fun00017 }
 10:
                    michal = undefined;
                    option = undefined;
                    romeon = undefined;
                    verify = undefined;
                    report = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    offset = 10;
                    zuuluu = zuuluu[offset];
                    report = report.bind(michal)(zuuluu);
                    zuuluu = report.isModalOpen;
                    report = zuuluu.bind(report)();
                    oscard = false;
                    zuuluu = false;
                    if(!report) { _fun00018_ip = 131; continue _fun00017 }
 58:
                    golfie = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    golfie = golfie.bind(michal)(report);
                    report = golfie.getOpenModalKey;
                    yankee = report.bind(golfie)();
                    report = null;
                    report = report == yankee;
                    if(report) { _fun00018_ip = 128; continue _fun00017 }
 94:
                    offset = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    golfie = 11;
                    golfie = foxtra[golfie];
                    offset = offset.bind(michal)(golfie);
                    golfie = offset.isVoiceChannelModalKey;
                    golfie = golfie.bind(offset)(yankee);
                    report = !golfie;
 128:
                    zuuluu = report;
 131:
                    if(zuuluu) { _fun00018_ip = 614; continue _fun00017 }
 137:
                    zuuluu = _closure2_slot7;
                    zuuluu = zuuluu.current;
                    if(!zuuluu) { _fun00018_ip = 614; continue _fun00017 }
 155:
                    golfie = _closure1_slot6;
                    zuuluu = golfie.isOpen;
                    zuuluu = zuuluu.bind(golfie)();
                    if(zuuluu) { _fun00018_ip = 614; continue _fun00017 }
 175:
                    offset = _closure1_slot7;
                    golfie = offset.getChannel;
                    zuuluu = _closure2_slot1;
                    zuuluu = golfie.bind(offset)(zuuluu);
                    yankee = null;
                    if(!(yankee != zuuluu)) { _fun00018_ip = 614; continue _fun00017 }
 202:
                    zuuluu = _closure2_slot6;
                    offset = true;
                    zuuluu = zuuluu.bind(michal)(offset);
                    golfie = _closure1_slot0;
                    foxtra = _closure1_slot2;
                    zuuluu = 21;
                    zuuluu = foxtra[zuuluu];
                    zuuluu = golfie.bind(michal)(zuuluu);
                    backup = zuuluu.ComponentDispatch;
                    golfie = backup.dispatch;
                    zuuluu = _closure1_slot17;
                    zuuluu = zuuluu.VOICE_MESSAGE_BUTTON_PRESSED;
                    zuuluu = golfie.bind(backup)(zuuluu);
                    golfie = _closure1_slot1;
                    zuuluu = 24;
                    zuuluu = foxtra[zuuluu];
                    foxtra = golfie.bind(michal)(zuuluu);
                    golfie = foxtra.requestPermission;
                    zuuluu = _closure1_slot20;
                    zuuluu = zuuluu.AUDIO;
                    zuuluu = golfie.bind(foxtra)(zuuluu);
                    SaveGenerator(address=300);
 298:
                    return zuuluu;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golfie) { _fun00018_ip = 611; continue _fun00017 }
 309:
                    if(!zuuluu) { _fun00018_ip = 614; continue _fun00017 }
 315:
                    golfie = _closure2_slot4;
                    golfie = golfie.current;
                    if(!golfie) { _fun00018_ip = 614; continue _fun00017 }
 330:
                    golfie = _closure1_slot14;
                    golfie = golfie.bind(michal)();
                    golfie = global;
                    foxtra = golfie.performance;
                    golfie = foxtra.now;
                    romeon = golfie.bind(foxtra)();
                    golfie = _closure1_slot13;
                    golfie = golfie.bind(michal)(offset);
 364: // try_start_0
                    foxtra = _closure1_slot0;
                    golfie = _closure1_slot2;
                    offset = 12;
                    golfie = golfie[offset];
                    backup = foxtra.bind(michal)(golfie);
                    foxtra = backup.startAudioRecording;
                    golfie = romeon;
                    golfie = foxtra.bind(backup)(golfie);
                    SaveGenerator(address=402);
 400:
                    return golfie;
 402:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=12);
                    if(foxtra) { _fun00018_ip = 562; continue _fun00017 }
 411: // try_end0
                    backup = _closure1_slot12;
                    foxtra = backup.getState;
                    foxtra = foxtra.bind(backup)();
                    verify = foxtra;
                    foxtra = foxtra.recordingId;
                    if(!(foxtra === romeon)) { _fun00018_ip = 614; continue _fun00017 }
 441:
                    verify = verify.voiceMessageAnimationState;
                    option = verify;
                    yankee = yankee == verify;
                    verify = undefined;
                    if(yankee) { _fun00018_ip = 478; continue _fun00017 }
 459:
                    yankee = option;
                    option = yankee.get;
                    yankee = option.bind(yankee)();
                    option = 1;
                    verify = yankee[option];
 478:
                    option = _closure1_slot15;
                    option = option.LOCKED;
                    if(!(verify !== option)) { _fun00018_ip = 533; continue _fun00017 }
 492:
                    option = _closure2_slot4;
                    option = option.current;
                    if(option) { _fun00018_ip = 533; continue _fun00017 }
 504:
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[offset];
                    verify = verify.bind(michal)(option);
                    option = verify.endAudioRecording;
                    option = option.bind(verify)();
                    _fun00018_ip = 614; continue _fun00017;
 533:
                    verify = _closure1_slot0;
                    option = _closure1_slot2;
                    option = option[offset];
                    verify = verify.bind(michal)(option);
                    option = verify.triggerHaptic;
                    option = option.bind(verify)();
                    _fun00018_ip = 614; continue _fun00017;
 562:
                    return golfie;
 565: // catch_target0
                    CatchBlockStart(arg_register=6);
                    report = _closure2_slot6;
                    report = report.bind(michal)(oscard);
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 25;
                    tangon = oscard[tangon];
                    report = report.bind(michal)(tangon);
                    tangon = report.showVoiceRecordingFailed;
                    tangon = tangon.bind(report)();
                    tangon = undefined;
                    return tangon;
 611:
                    return zuuluu;
 614:
                    return michal;
 617:
                    return entity;
                }
            };
            return entity;
        };
        offset = option.bind(tangon)(verify);
        verify = new Array(3);
        verify[0] = update;
        verify[1] = report;
        verify[2] = output;
        output = kiloes.bind(yankee)(offset, verify);
        var _closure2_slot9 = output;
        kiloes = yankee.useCallback;
        offset = function(argFoo) { // Original name: x
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure2_slot2;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                michal = 1;
                zuuluu = zuuluu[michal];
                if(!(zuuluu !== tangon)) { _fun00020_ip = 112; continue _fun00019 }
 30:
                zuuluu = _closure2_slot2;
                entity = zuuluu.get;
                entity = entity.bind(zuuluu)();
                report = entity[michal];
                michal = zuuluu.set;
                entity = new Array(2);
                entity[0] = report;
                entity[1] = tangon;
                entity = michal.bind(zuuluu)(entity);
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 13;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.runOnJS;
                entity = _closure1_slot26;
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.bind(michal)();
 112:
                entity = undefined;
                return entity;
            }
        };
        verify = {};
        verify['voiceMessageAnimationState'] = result;
        source = backup[source];
        source = foxtra.bind(tangon)(source);
        source = source.runOnJS;
        verify['runOnJS'] = source;
        source = _closure1_slot26;
        verify['triggerHapticGuarded'] = source;
        offset['__closure'] = verify;
        verify = 9127775028714.0;
        offset['__workletHash'] = verify;
        verify = _closure1_slot22;
        offset['__initData'] = verify;
        verify = new Array(1);
        verify[0] = result;
        kiloes = kiloes.bind(yankee)(offset, verify);
        var _closure2_slot10 = kiloes;
        offset = yankee.useCallback;
        verify = new Array(4);
        verify[0] = result;
        verify[1] = update;
        verify[2] = romeon;
        verify[3] = report;
        report = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = _closure2_slot4;
                michal = michal.current;
                if(michal) { _fun00022_ip = 55; continue _fun00021 }
 15:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 12;
                zuuluu = zuuluu[michal];
                michal = undefined;
                zuuluu = tangon.bind(michal)(zuuluu);
                michal = zuuluu.endAudioRecording;
                michal = michal.bind(zuuluu)();
                _fun00022_ip = 303; continue _fun00021;
 55:
                michal = _closure2_slot6;
                zuuluu = undefined;
                tangon = false;
                michal = michal.bind(zuuluu)(tangon);
                report = _closure2_slot2;
                michal = report.get;
                report = michal.bind(report)();
                michal = 1;
                oscard = report[michal];
                report = _closure1_slot15;
                report = report.SENDING;
                if(!(report !== oscard)) { _fun00022_ip = 287; continue _fun00021 }
 108:
                report = _closure1_slot15;
                report = report.CANCELLING;
                if(!(report !== oscard)) { _fun00022_ip = 267; continue _fun00021 }
 125:
                report = _closure1_slot15;
                report = report.LOCKING;
                if(!(report !== oscard)) { _fun00022_ip = 174; continue _fun00021 }
 139:
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 12;
                report = golfie[report];
                oscard = oscard.bind(zuuluu)(report);
                report = oscard.endAudioRecording;
                report = report.bind(oscard)();
                _fun00022_ip = 303; continue _fun00021;
 174:
                report = _closure1_slot9;
                report = report.bind(zuuluu)(tangon);
                golfie = _closure2_slot2;
                oscard = golfie.set;
                option = _closure1_slot15;
                verify = option.LOCKING;
                report = new Array(2);
                report[0] = verify;
                option = option.LOCKED;
                report[1] = option;
                report = oscard.bind(golfie)(report);
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 13;
                report = golfie[report];
                oscard = oscard.bind(zuuluu)(report);
                report = oscard.runOnJS;
                michal = _closure1_slot26;
                michal = report.bind(oscard)(michal);
                michal = michal.bind(zuuluu)();
                michal = undefined;
                return michal;
 267:
                report = _closure2_slot8;
                michal = {};
                oscard = true;
                michal['isCancelling'] = oscard;
                michal = report.bind(zuuluu)(michal);
                _fun00022_ip = 303; continue _fun00021;
 287:
                michal = _closure2_slot8;
                entity = {};
                entity['isCancelling'] = tangon;
                entity = michal.bind(zuuluu)(entity);
 303:
                entity = undefined;
                return entity;
            }
        };
        romeon = offset.bind(yankee)(report, verify);
        var _closure2_slot11 = romeon;
        report = 26;
        report = backup[report];
        verify = oscard.bind(tangon)(report);
        report = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00024_ip = 92; continue _fun00023 }
 7:
                    michal = _closure2_slot9;
                    zuuluu = undefined;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=24);
 22:
                    return michal;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00024_ip = 89; continue _fun00023 }
 30:
                    golfie = _closure1_slot9;
                    oscard = false;
                    oscard = golfie.bind(zuuluu)(oscard);
                    oscard = _closure2_slot2;
                    report = oscard.set;
                    golfie = _closure1_slot15;
                    option = golfie.LOCKED;
                    tangon = new Array(2);
                    tangon[0] = option;
                    golfie = golfie.LOCKED;
                    tangon[1] = golfie;
                    tangon = report.bind(oscard)(tangon);
                    return zuuluu;
 89:
                    return michal;
 92:
                    return entity;
                }
            };
            return entity;
        };
        option = option.bind(tangon)(report);
        offset = 27;
        report = backup[offset];
        report = foxtra.bind(tangon)(report);
        source = report.intl;
        update = source.string;
        report = backup[offset];
        report = foxtra.bind(tangon)(report);
        report = report.t;
        report = report.lwy6aW;
        report = update.bind(source)(report);
        report = verify.bind(tangon)(option, report);
        verify = report.accessibilityActions;
        option = report.onAccessibilityAction;
        report = 0.5;
        report = report * sizing;
        zuuluu = zuuluu - sizing;
        sizing = report + zuuluu;
        var _closure2_slot12 = sizing;
        report = yankee.useMemo;
        zuuluu = new Array(7);
        zuuluu[0] = golfie;
        zuuluu[1] = echoed;
        zuuluu[2] = result;
        zuuluu[3] = output;
        zuuluu[4] = sizing;
        zuuluu[5] = kiloes;
        zuuluu[6] = romeon;
        michal = function() {
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            michal = 28;
            michal = offset[michal];
            option = undefined;
            michal = verify.bind(option)(michal);
            zuuluu = michal.Gesture;
            michal = zuuluu.Pan;
            report = michal.bind(zuuluu)();
            zuuluu = report.enabled;
            michal = _closure2_slot0;
            michal = !michal;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.minDistance;
            michal = 0;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.onTouchesDown;
            michal = function(argFoo) { // Original name: n
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    michal = entity.numberOfTouches;
                    entity = 1;
                    entity = michal > entity;
                    if(entity) { _fun00026_ip = 35; continue _fun00025 }
 19:
                    zuuluu = _closure2_slot5;
                    michal = zuuluu.get;
                    entity = michal.bind(zuuluu)();
 35:
                    if(entity) { _fun00026_ip = 156; continue _fun00025 }
 38:
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 13;
                    entity = report[zuuluu];
                    michal = undefined;
                    option = tangon.bind(michal)(entity);
                    golfie = option.runOnJS;
                    entity = _closure1_slot9;
                    golfie = golfie.bind(option)(entity);
                    entity = true;
                    entity = golfie.bind(michal)(entity);
                    option = _closure2_slot2;
                    golfie = option.set;
                    verify = _closure1_slot15;
                    offset = verify.SENDING;
                    oscard = new Array(2);
                    oscard[0] = offset;
                    verify = verify.SENDING;
                    oscard[1] = verify;
                    oscard = golfie.bind(option)(oscard);
                    zuuluu = report[zuuluu];
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.runOnJS;
                    entity = _closure2_slot9;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
 156:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            foxtra = _closure2_slot5;
            yankee['isGestureActiveValue'] = foxtra;
            golfie = 13;
            romeon = offset[golfie];
            romeon = verify.bind(option)(romeon);
            romeon = romeon.runOnJS;
            yankee['runOnJS'] = romeon;
            romeon = _closure1_slot9;
            yankee['setIsUsingHoldGesture'] = romeon;
            romeon = _closure2_slot2;
            yankee['voiceMessageAnimationState'] = romeon;
            romeon = _closure1_slot15;
            yankee['VoiceMessageAnimationState'] = romeon;
            backup = _closure2_slot9;
            yankee['startRecording'] = backup;
            michal['__closure'] = yankee;
            yankee = 15771181123252.0;
            michal['__workletHash'] = yankee;
            yankee = _closure1_slot25;
            michal['__initData'] = yankee;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.onUpdate;
            michal = function(argFoo) { // Original name: t
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure2_slot5;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    if(!zuuluu) { _fun00028_ip = 159; continue _fun00027 }
 25:
                    tangon = michal.translationY;
                    zuuluu = -40;
                    if(!(tangon <= zuuluu)) { _fun00028_ip = 55; continue _fun00027 }
 41:
                    tangon = michal.absoluteX;
                    zuuluu = _closure2_slot12;
                    if(!(!(tangon >= zuuluu))) { _fun00028_ip = 135; continue _fun00027 }
 55:
                    tangon = michal.absoluteX;
                    zuuluu = _closure2_slot12;
                    if(!(!(tangon < zuuluu))) { _fun00028_ip = 109; continue _fun00027 }
 69:
                    zuuluu = michal.absoluteX;
                    michal = _closure2_slot12;
                    if(!(zuuluu >= michal)) { _fun00028_ip = 159; continue _fun00027 }
 83:
                    tangon = _closure2_slot10;
                    michal = _closure1_slot15;
                    zuuluu = michal.SENDING;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    _fun00028_ip = 159; continue _fun00027;
 109:
                    tangon = _closure2_slot10;
                    michal = _closure1_slot15;
                    zuuluu = michal.CANCELLING;
                    michal = undefined;
                    michal = tangon.bind(michal)(zuuluu);
                    _fun00028_ip = 159; continue _fun00027;
 135:
                    zuuluu = _closure2_slot10;
                    entity = _closure1_slot15;
                    michal = entity.LOCKING;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 159:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            yankee['isGestureActiveValue'] = foxtra;
            foxtra = 40;
            yankee['LOCK_THRESHOLD'] = foxtra;
            foxtra = _closure2_slot12;
            yankee['cancelThresholdX'] = foxtra;
            foxtra = _closure2_slot10;
            yankee['handleUpdateValue'] = foxtra;
            yankee['VoiceMessageAnimationState'] = romeon;
            michal['__closure'] = yankee;
            yankee = 9262214665783.0;
            michal['__workletHash'] = yankee;
            yankee = _closure1_slot24;
            michal['__initData'] = yankee;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.onFinalize;
            entity = function() { // Original name: e
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 13;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.runOnJS;
                michal = _closure2_slot11;
                michal = zuuluu.bind(tangon)(michal);
                michal = michal.bind(entity)();
                return entity;
            };
            report = {};
            golfie = offset[golfie];
            golfie = verify.bind(option)(golfie);
            golfie = golfie.runOnJS;
            report['runOnJS'] = golfie;
            oscard = _closure2_slot11;
            report['handleFinalize'] = oscard;
            entity['__closure'] = report;
            report = 2411654680943.0;
            entity['__workletHash'] = report;
            tangon = _closure1_slot23;
            entity['__initData'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report = report.bind(yankee)(michal, zuuluu);
        michal = 29;
        michal = backup[michal];
        michal = oscard.bind(tangon)(michal);
        michal = michal.bind(tangon)();
        yankee = michal.tooltipTargetRef;
        zuuluu = _closure1_slot21;
        entity = 28;
        entity = backup[entity];
        entity = foxtra.bind(tangon)(entity);
        michal = entity.GestureDetector;
        entity = {};
        entity['gesture'] = report;
        report = 30;
        report = backup[report];
        oscard = oscard.bind(tangon)(report);
        report = {};
        report['ref'] = yankee;
        yankee = 31;
        yankee = backup[yankee];
        yankee = foxtra.bind(tangon)(yankee);
        yankee = yankee.MicrophoneIcon;
        report['IconComponent'] = yankee;
        yankee = false;
        report['active'] = yankee;
        yankee = backup[offset];
        yankee = foxtra.bind(tangon)(yankee);
        romeon = yankee.intl;
        yankee = romeon.string;
        offset = backup[offset];
        offset = foxtra.bind(tangon)(offset);
        offset = offset.t;
        offset = offset.lwy6aW;
        offset = yankee.bind(romeon)(offset);
        report['accessibilityLabel'] = offset;
        report['accessibilityActions'] = verify;
        report['onAccessibilityAction'] = option;
        report['disabled'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 32;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_messages/native/components/VoiceMessageButton.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
// app/modules/voice_messages/native/components/VoiceMessageButton.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    options = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = options;
    var _closure1_slot2 = oscar;
    entity = function() { // Original name: triggerHapticGuarded
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = _closure1_slot12;
            mike = zulu.getState;
            mike = mike.bind(zulu)();
            mike = mike.showRecordingOverlay;
            if(!mike) { _fun00002_ip = 58; continue _fun00001 }
 26:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.triggerHaptic;
            entity = entity.bind(mike)();
 58:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = global;
    verify = entity.Object;
    golf = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = options.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot5 = golf;
    tango = 3;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.setIsVoiceMessageButtonMounted;
    var _closure1_slot8 = options;
    options = tango.setIsUsingHoldGesture;
    var _closure1_slot9 = options;
    options = tango.setVoiceMessageAnimationState;
    var _closure1_slot10 = options;
    options = tango.showVoiceMessagesTooltip;
    var _closure1_slot11 = options;
    options = tango.useVoiceMessagesUIStore;
    var _closure1_slot12 = options;
    options = tango.setShowRecordingOverlay;
    var _closure1_slot13 = options;
    tango = tango.hideVoiceMessagesTooltip;
    var _closure1_slot14 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.VoiceMessageAnimationState;
    var _closure1_slot15 = options;
    tango = tango.VOICE_RECORDING_MIN_DURATION_MILLIS;
    var _closure1_slot16 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ComponentActions;
    var _closure1_slot17 = options;
    tango = tango.ComponentActionsKeyed;
    var _closure1_slot18 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.NativePermissionTypes;
    var _closure1_slot19 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot20 = tango;
    tango = {};
    options = 'function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}';
    tango['code'] = options;
    var _closure1_slot21 = tango;
    tango = {};
    options = 'function VoiceMessageButtonTsx2(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}';
    tango['code'] = options;
    var _closure1_slot22 = tango;
    tango = {};
    options = 'function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}';
    tango['code'] = options;
    var _closure1_slot23 = tango;
    tango = {};
    options = 'function VoiceMessageButtonTsx4(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}';
    tango['code'] = options;
    var _closure1_slot24 = tango;
    tango = golf.memo;
    mike = function(argFoo) {
        entity = argFoo;
        golf = entity.disabled;
        var _closure2_slot0 = golf;
        output = entity.channelId;
        var _closure2_slot1 = output;
        report = _closure1_slot12;
        tango = undefined;
        zulu = function(argFoo) {
            entity = argFoo;
            entity = entity.voiceMessageAnimationState;
            return entity;
        };
        result = report.bind(tango)(zulu);
        var _closure2_slot2 = result;
        foxtrot = _closure1_slot0;
        backup = _closure1_slot2;
        source = 13;
        zulu = backup[source];
        oscar = foxtrot.bind(tango)(zulu);
        report = oscar.useSharedValue;
        zulu = 0;
        kilo = report.bind(oscar)(zulu);
        var _closure2_slot3 = kilo;
        report = function() { // Original name: useIsGestureActive
            oscar = _closure1_slot5;
            zulu = oscar.useRef;
            report = false;
            tango = zulu.bind(oscar)(report);
            var _closure3_slot0 = tango;
            golf = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 13;
            zulu = zulu[mike];
            mike = undefined;
            zulu = golf.bind(mike)(zulu);
            mike = zulu.useSharedValue;
            zulu = mike.bind(zulu)(report);
            var _closure3_slot1 = zulu;
            report = oscar.useCallback;
            mike = new Array(2);
            mike[0] = tango;
            mike[1] = zulu;
            entity = function(argFoo) {
                zulu = argFoo;
                mike = _closure3_slot0;
                mike['current'] = zulu;
                mike = _closure3_slot1;
                entity = mike.set;
                entity = entity.bind(mike)(zulu);
                entity = undefined;
                return entity;
            };
            mike = report.bind(oscar)(entity, mike);
            entity = new Array(3);
            entity[0] = tango;
            entity[1] = zulu;
            entity[2] = mike;
            return entity;
        };
        options = report.bind(tango)();
        oscar = _closure1_slot4;
        report = 3;
        report = oscar.bind(tango)(options, report);
        update = report[zulu];
        var _closure2_slot4 = update;
        zulu = 1;
        echo = report[zulu];
        var _closure2_slot5 = echo;
        zulu = 2;
        report = report[zulu];
        var _closure2_slot6 = report;
        yankee = _closure1_slot5;
        oscar = yankee.useRef;
        zulu = true;
        zulu = oscar.bind(yankee)(zulu);
        var _closure2_slot7 = zulu;
        oscar = _closure1_slot1;
        zulu = 14;
        zulu = backup[zulu];
        zulu = oscar.bind(tango)(zulu);
        sizing = zulu.bind(tango)();
        zulu = 15;
        zulu = backup[zulu];
        zulu = oscar.bind(tango)(zulu);
        zulu = zulu.bind(tango)();
        zulu = zulu.width;
        offset = yankee.useCallback;
        options = function() {
            tango = _closure1_slot3;
            zulu = undefined;
            mike = function* (argFoo) {
                entity = function* (argFoo) { // Original name: ?anon_0_
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        StartGenerator();
                        mike = argFoo;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(zulu) { _fun00004_ip = 444; continue _fun00003 }
 13:
                        yankee = mike.isCancelling;
                        verify = mike.cancelReason;
                        tango = undefined;
                        if(!(verify === tango)) { _fun00004_ip = 66; continue _fun00003 }
 31:
                        report = _closure1_slot0;
                        oscar = _closure1_slot2;
                        mike = 16;
                        mike = oscar[mike];
                        mike = report.bind(tango)(mike);
                        mike = mike.VoiceMessageRecordingResult;
                        verify = mike.CANCELLED_USER_REQUESTED;
 66:
                        SaveGenerator(address=70);
 68:
                        return tango;
 70:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun00004_ip = 441; continue _fun00003 }
 79:
                        report = _closure1_slot0;
                        zulu = _closure1_slot2;
                        offset = 12;
                        zulu = zulu[offset];
                        report = report.bind(tango)(zulu);
                        zulu = report.endAudioRecording;
                        zulu = zulu.bind(report)();
                        SaveGenerator(address=116);
 114:
                        return zulu;
 116:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(report) { _fun00004_ip = 438; continue _fun00003 }
 125:
                        report = zulu.data;
                        options = zulu.startTimeMillis;
                        foxtrot = _closure2_slot6;
                        romeo = false;
                        romeo = foxtrot.bind(tango)(romeo);
                        if(yankee) { _fun00004_ip = 399; continue _fun00003 }
 156:
                        romeo = report.durationSecs;
                        foxtrot = _closure1_slot16;
                        yankee = 1000;
                        yankee = foxtrot / yankee;
                        if(!(!(romeo < yankee))) { _fun00004_ip = 326; continue _fun00003 }
 183:
                        romeo = _closure1_slot0;
                        kilo = _closure1_slot2;
                        yankee = kilo[offset];
                        backup = romeo.bind(tango)(yankee);
                        foxtrot = backup.emitVoiceMessageRecorded;
                        yankee = 16;
                        yankee = kilo[yankee];
                        yankee = romeo.bind(tango)(yankee);
                        yankee = yankee.VoiceMessageRecordingResult;
                        romeo = yankee.SENT;
                        yankee = report.durationSecs;
                        yankee = foxtrot.bind(backup)(romeo, yankee, options);
                        romeo = _closure1_slot7;
                        yankee = romeo.getChannel;
                        golf = _closure2_slot1;
                        kilo = yankee.bind(romeo)(golf);
                        golf = null;
                        if(!(golf != kilo)) { _fun00004_ip = 435; continue _fun00003 }
 270:
                        yankee = _closure1_slot1;
                        romeo = _closure1_slot2;
                        golf = 17;
                        golf = romeo[golf];
                        backup = yankee.bind(tango)(golf);
                        foxtrot = backup.uploadVoiceMessage;
                        result = report.filename;
                        output = report.durationSecs;
                        sizing = report.waveform;
                        update = backup;
                        echo = kilo;
                        golf = update[foxtrot](echo, result, output, sizing, kilo);
                        _fun00004_ip = 435; continue _fun00003;
 326:
                        yankee = _closure1_slot0;
                        backup = _closure1_slot2;
                        golf = backup[offset];
                        foxtrot = yankee.bind(tango)(golf);
                        romeo = foxtrot.emitVoiceMessageRecorded;
                        golf = 16;
                        golf = backup[golf];
                        golf = yankee.bind(tango)(golf);
                        golf = golf.VoiceMessageRecordingResult;
                        yankee = golf.CANCELLED_DURATION;
                        golf = report.durationSecs;
                        golf = romeo.bind(foxtrot)(yankee, golf, options);
                        golf = _closure1_slot11;
                        golf = golf.bind(tango)();
                        golf = undefined;
                        return golf;
 399:
                        golf = _closure1_slot0;
                        oscar = _closure1_slot2;
                        oscar = oscar[offset];
                        golf = golf.bind(tango)(oscar);
                        oscar = golf.emitVoiceMessageRecorded;
                        report = report.durationSecs;
                        report = oscar.bind(golf)(verify, report, options);
 435:
                        return tango;
 438:
                        return zulu;
 441:
                        return mike;
 444:
                        return entity;
                    }
                };
                mike = entity.next;
                mike = mike.bind(entity)();
                return entity;
            };
            mike = tango.bind(zulu)(mike);
            var _closure3_slot0 = mike;
            entity = function() {
                entity = undefined;
                tango = _closure3_slot0;
                zulu = tango.apply;
                entity = arguments;
                mike = entity;
                entity = this;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            };
            return entity;
        };
        verify = options.bind(tango)();
        options = new Array(2);
        options[0] = output;
        options[1] = report;
        romeo = offset.bind(yankee)(verify, options);
        var _closure2_slot8 = romeo;
        offset = yankee.useEffect;
        verify = new Array(2);
        verify[0] = output;
        verify[1] = romeo;
        options = function() {
            tango = _closure1_slot0;
            zulu = _closure1_slot2;
            mike = 18;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            report = mike.ComponentDispatch;
            tango = report.subscribeKeyed;
            entity = _closure1_slot18;
            zulu = entity.VOICE_MESSAGE_SEND;
            mike = _closure2_slot1;
            entity = _closure2_slot8;
            entity = tango.bind(report)(zulu, mike, entity);
            entity = function() {
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                entity = 18;
                zulu = zulu[entity];
                entity = undefined;
                zulu = tango.bind(entity)(zulu);
                oscar = zulu.ComponentDispatch;
                report = oscar.unsubscribeKeyed;
                mike = _closure1_slot18;
                tango = mike.VOICE_MESSAGE_SEND;
                zulu = _closure2_slot1;
                mike = _closure2_slot8;
                mike = report.bind(oscar)(tango, zulu, mike);
                return entity;
            };
            return entity;
        };
        options = offset.bind(yankee)(options, verify);
        offset = yankee.useEffect;
        verify = function() {
            zulu = _closure1_slot8;
            mike = undefined;
            entity = true;
            entity = zulu.bind(mike)(entity);
            entity = function() {
                zulu = _closure1_slot8;
                entity = undefined;
                mike = false;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
            return entity;
        };
        options = new Array(0);
        options = offset.bind(yankee)(verify, options);
        offset = yankee.useEffect;
        verify = new Array(2);
        verify[0] = update;
        verify[1] = report;
        options = function() {
            tango = _closure2_slot7;
            zulu = true;
            tango['current'] = zulu;
            mike = _closure2_slot4;
            mike = mike.current;
            var _closure3_slot0 = mike;
            entity = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = _closure2_slot7;
                    tango = false;
                    entity['current'] = tango;
                    report = _closure1_slot12;
                    zulu = report.getState;
                    report = zulu.bind(report)();
                    zulu = report.showRecordingOverlay;
                    if(zulu) { _fun00006_ip = 53; continue _fun00005 }
 41:
                    oscar = report.recordingStatus;
                    report = null;
                    zulu = report != oscar;
 53:
                    if(zulu) { _fun00006_ip = 63; continue _fun00005 }
 56:
                    zulu = _closure3_slot0;
 63:
                    if(!zulu) { _fun00006_ip = 107; continue _fun00005 }
 66:
                    mike = _closure2_slot6;
                    zulu = undefined;
                    mike = mike.bind(zulu)(tango);
                    mike = _closure1_slot0;
                    tango = _closure1_slot2;
                    entity = 12;
                    entity = tango[entity];
                    mike = mike.bind(zulu)(entity);
                    entity = mike.endAudioRecording;
                    entity = entity.bind(mike)();
 107:
                    entity = undefined;
                    return entity;
                }
            };
            return entity;
        };
        options = offset.bind(yankee)(options, verify);
        options = 10;
        options = backup[options];
        verify = foxtrot.bind(tango)(options);
        options = verify.useIsModalOpen;
        options = options.bind(verify)();
        control = yankee.useEffect;
        offset = new Array(3);
        offset[0] = update;
        offset[1] = report;
        offset[2] = output;
        verify = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                mike = function() { // Original name: cancel
                    entity = undefined;
                    tango = _closure3_slot1;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                var _closure3_slot0 = mike;
                zulu = function() { // Original name: _cancel
                    tango = undefined;
                    entity = undefined;
                    zulu = _closure1_slot3;
                    mike = function* () {
                        entity = function* () { // Original name: ?anon_0_
                            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(mike) { _fun00010_ip = 201; continue _fun00009 }
 10:
                                zulu = _closure1_slot12;
                                mike = zulu.getState;
                                mike = mike.bind(zulu)();
                                zulu = mike.showRecordingOverlay;
                                if(zulu) { _fun00010_ip = 66; continue _fun00009 }
 36:
                                zulu = mike.recordingStatus;
                                mike = null;
                                if(!(mike == zulu)) { _fun00010_ip = 66; continue _fun00009 }
 48:
                                mike = _closure2_slot4;
                                mike = mike.current;
                                if(!mike) { _fun00010_ip = 193; continue _fun00009 }
 66:
                                zulu = _closure2_slot6;
                                report = undefined;
                                mike = false;
                                mike = zulu.bind(report)(mike);
                                tango = _closure1_slot0;
                                mike = _closure1_slot2;
                                zulu = 12;
                                mike = mike[zulu];
                                tango = tango.bind(report)(mike);
                                mike = tango.endAudioRecording;
                                mike = mike.bind(tango)();
                                SaveGenerator(address=116);
 114:
                                return mike;
 116:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(tango) { _fun00010_ip = 198; continue _fun00009 }
 122:
                                tango = _closure1_slot0;
                                options = _closure1_slot2;
                                zulu = options[zulu];
                                golf = tango.bind(report)(zulu);
                                oscar = golf.emitVoiceMessageRecorded;
                                zulu = 16;
                                zulu = options[zulu];
                                zulu = tango.bind(report)(zulu);
                                zulu = zulu.VoiceMessageRecordingResult;
                                report = zulu.CANCELLED_GESTURE_CONFLICT;
                                zulu = mike.data;
                                tango = zulu.durationSecs;
                                zulu = mike.startTimeMillis;
                                zulu = oscar.bind(golf)(report, tango, zulu);
 193:
                                zulu = undefined;
                                return zulu;
 198:
                                return mike;
 201:
                                return entity;
                            }
                        };
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    _closure3_slot1 = tango;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                var _closure3_slot1 = zulu;
                golf = function() { // Original name: handleActionSheetChange
                    _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                        mike = _closure1_slot6;
                        entity = mike.isOpen;
                        entity = entity.bind(mike)();
                        if(!entity) { _fun00012_ip = 33; continue _fun00011 }
 20:
                        mike = _closure3_slot0;
                        entity = undefined;
                        entity = mike.bind(entity)();
 33:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot2 = golf;
                report = function() { // Original name: handleNavigationChange
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 19;
                        mike = mike[entity];
                        entity = undefined;
                        zulu = zulu.bind(entity)(mike);
                        mike = zulu.getFocusedChannelId;
                        zulu = mike.bind(zulu)();
                        mike = null;
                        if(!(mike == zulu)) { _fun00014_ip = 54; continue _fun00013 }
 41:
                        mike = _closure3_slot0;
                        mike = mike.bind(entity)();
                        _fun00014_ip = 76; continue _fun00013;
 54:
                        mike = _closure2_slot1;
                        if(!(zulu !== mike)) { _fun00014_ip = 76; continue _fun00013 }
 65:
                        mike = _closure3_slot0;
                        mike = mike.bind(entity)();
 76:
                        return entity;
                    }
                };
                var _closure3_slot3 = report;
                tango = undefined;
                mike = mike.bind(tango)();
                oscar = _closure1_slot6;
                zulu = oscar.addReactChangeListener;
                zulu = zulu.bind(oscar)(golf);
                zulu = _closure1_slot0;
                oscar = _closure1_slot2;
                mike = 20;
                mike = oscar[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.getRootNavigationRef;
                tango = mike.bind(zulu)();
                mike = null;
                if(!(mike != tango)) { _fun00008_ip = 122; continue _fun00007 }
 106:
                zulu = tango.addListener;
                mike = 'state';
                mike = zulu.bind(tango)(mike, report);
 122:
                entity = function() {
                    _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                        report = _closure1_slot6;
                        tango = report.removeReactChangeListener;
                        zulu = _closure3_slot2;
                        zulu = tango.bind(report)(zulu);
                        tango = _closure1_slot0;
                        zulu = _closure1_slot2;
                        entity = 20;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = tango.getRootNavigationRef;
                        report = zulu.bind(tango)();
                        zulu = null;
                        if(!(zulu != report)) { _fun00016_ip = 83; continue _fun00015 }
 63:
                        tango = report.removeListener;
                        zulu = _closure3_slot3;
                        mike = 'state';
                        mike = tango.bind(report)(mike, zulu);
 83:
                        return entity;
                    }
                };
                return entity;
            }
        };
        verify = control.bind(yankee)(verify, offset);
        offset = yankee.useEffect;
        verify = new Array(2);
        verify[0] = kilo;
        verify[1] = options;
        options = function() {
            zulu = _closure1_slot10;
            mike = {};
            entity = _closure2_slot3;
            mike['currWaveHeight'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            return entity;
        };
        options = offset.bind(yankee)(options, verify);
        kilo = yankee.useCallback;
        options = _closure1_slot3;
        verify = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00018_ip = 617; continue _fun00017 }
 10:
                    mike = undefined;
                    options = undefined;
                    romeo = undefined;
                    verify = undefined;
                    report = _closure1_slot0;
                    zulu = _closure1_slot2;
                    offset = 10;
                    zulu = zulu[offset];
                    report = report.bind(mike)(zulu);
                    zulu = report.isModalOpen;
                    report = zulu.bind(report)();
                    oscar = false;
                    zulu = false;
                    if(!report) { _fun00018_ip = 131; continue _fun00017 }
 58:
                    golf = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[offset];
                    golf = golf.bind(mike)(report);
                    report = golf.getOpenModalKey;
                    yankee = report.bind(golf)();
                    report = null;
                    report = report == yankee;
                    if(report) { _fun00018_ip = 128; continue _fun00017 }
 94:
                    offset = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    golf = 11;
                    golf = foxtrot[golf];
                    offset = offset.bind(mike)(golf);
                    golf = offset.isVoiceChannelModalKey;
                    golf = golf.bind(offset)(yankee);
                    report = !golf;
 128:
                    zulu = report;
 131:
                    if(zulu) { _fun00018_ip = 614; continue _fun00017 }
 137:
                    zulu = _closure2_slot7;
                    zulu = zulu.current;
                    if(!zulu) { _fun00018_ip = 614; continue _fun00017 }
 155:
                    golf = _closure1_slot6;
                    zulu = golf.isOpen;
                    zulu = zulu.bind(golf)();
                    if(zulu) { _fun00018_ip = 614; continue _fun00017 }
 175:
                    offset = _closure1_slot7;
                    golf = offset.getChannel;
                    zulu = _closure2_slot1;
                    zulu = golf.bind(offset)(zulu);
                    yankee = null;
                    if(!(yankee != zulu)) { _fun00018_ip = 614; continue _fun00017 }
 202:
                    zulu = _closure2_slot6;
                    offset = true;
                    zulu = zulu.bind(mike)(offset);
                    golf = _closure1_slot0;
                    foxtrot = _closure1_slot2;
                    zulu = 18;
                    zulu = foxtrot[zulu];
                    zulu = golf.bind(mike)(zulu);
                    backup = zulu.ComponentDispatch;
                    golf = backup.dispatch;
                    zulu = _closure1_slot17;
                    zulu = zulu.VOICE_MESSAGE_BUTTON_PRESSED;
                    zulu = golf.bind(backup)(zulu);
                    golf = _closure1_slot1;
                    zulu = 21;
                    zulu = foxtrot[zulu];
                    foxtrot = golf.bind(mike)(zulu);
                    golf = foxtrot.requestPermission;
                    zulu = _closure1_slot19;
                    zulu = zulu.AUDIO;
                    zulu = golf.bind(foxtrot)(zulu);
                    SaveGenerator(address=300);
 298:
                    return zulu;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(golf) { _fun00018_ip = 611; continue _fun00017 }
 309:
                    if(!zulu) { _fun00018_ip = 614; continue _fun00017 }
 315:
                    golf = _closure2_slot4;
                    golf = golf.current;
                    if(!golf) { _fun00018_ip = 614; continue _fun00017 }
 330:
                    golf = _closure1_slot14;
                    golf = golf.bind(mike)();
                    golf = global;
                    foxtrot = golf.performance;
                    golf = foxtrot.now;
                    romeo = golf.bind(foxtrot)();
                    golf = _closure1_slot13;
                    golf = golf.bind(mike)(offset);
 364: // try_start_0
                    foxtrot = _closure1_slot0;
                    golf = _closure1_slot2;
                    offset = 12;
                    golf = golf[offset];
                    backup = foxtrot.bind(mike)(golf);
                    foxtrot = backup.startAudioRecording;
                    golf = romeo;
                    golf = foxtrot.bind(backup)(golf);
                    SaveGenerator(address=402);
 400:
                    return golf;
 402:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=12);
                    if(foxtrot) { _fun00018_ip = 562; continue _fun00017 }
 411: // try_end0
                    backup = _closure1_slot12;
                    foxtrot = backup.getState;
                    foxtrot = foxtrot.bind(backup)();
                    verify = foxtrot;
                    foxtrot = foxtrot.recordingId;
                    if(!(foxtrot === romeo)) { _fun00018_ip = 614; continue _fun00017 }
 441:
                    verify = verify.voiceMessageAnimationState;
                    options = verify;
                    yankee = yankee == verify;
                    verify = undefined;
                    if(yankee) { _fun00018_ip = 478; continue _fun00017 }
 459:
                    yankee = options;
                    options = yankee.get;
                    yankee = options.bind(yankee)();
                    options = 1;
                    verify = yankee[options];
 478:
                    options = _closure1_slot15;
                    options = options.LOCKED;
                    if(!(verify !== options)) { _fun00018_ip = 533; continue _fun00017 }
 492:
                    options = _closure2_slot4;
                    options = options.current;
                    if(options) { _fun00018_ip = 533; continue _fun00017 }
 504:
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[offset];
                    verify = verify.bind(mike)(options);
                    options = verify.endAudioRecording;
                    options = options.bind(verify)();
                    _fun00018_ip = 614; continue _fun00017;
 533:
                    verify = _closure1_slot0;
                    options = _closure1_slot2;
                    options = options[offset];
                    verify = verify.bind(mike)(options);
                    options = verify.triggerHaptic;
                    options = options.bind(verify)();
                    _fun00018_ip = 614; continue _fun00017;
 562:
                    return golf;
 565: // catch_target0
                    CatchBlockStart(arg_register=6);
                    report = _closure2_slot6;
                    report = report.bind(mike)(oscar);
                    report = _closure1_slot0;
                    oscar = _closure1_slot2;
                    tango = 22;
                    tango = oscar[tango];
                    report = report.bind(mike)(tango);
                    tango = report.showVoiceRecordingFailed;
                    tango = tango.bind(report)();
                    tango = undefined;
                    return tango;
 611:
                    return zulu;
 614:
                    return mike;
 617:
                    return entity;
                }
            };
            return entity;
        };
        offset = options.bind(tango)(verify);
        verify = new Array(3);
        verify[0] = update;
        verify[1] = report;
        verify[2] = output;
        output = kilo.bind(yankee)(offset, verify);
        var _closure2_slot9 = output;
        kilo = yankee.useCallback;
        offset = function(argFoo) { // Original name: F
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                tango = argFoo;
                zulu = _closure2_slot2;
                mike = zulu.get;
                zulu = mike.bind(zulu)();
                mike = 1;
                zulu = zulu[mike];
                if(!(zulu !== tango)) { _fun00020_ip = 112; continue _fun00019 }
 30:
                zulu = _closure2_slot2;
                entity = zulu.get;
                entity = entity.bind(zulu)();
                report = entity[mike];
                mike = zulu.set;
                entity = new Array(2);
                entity[0] = report;
                entity[1] = tango;
                entity = mike.bind(zulu)(entity);
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 13;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.runOnJS;
                entity = _closure1_slot25;
                entity = zulu.bind(tango)(entity);
                entity = entity.bind(mike)();
 112:
                entity = undefined;
                return entity;
            }
        };
        verify = {};
        verify['voiceMessageAnimationState'] = result;
        source = backup[source];
        source = foxtrot.bind(tango)(source);
        source = source.runOnJS;
        verify['runOnJS'] = source;
        source = _closure1_slot25;
        verify['triggerHapticGuarded'] = source;
        offset['__closure'] = verify;
        verify = 9127775028714.0;
        offset['__workletHash'] = verify;
        verify = _closure1_slot21;
        offset['__initData'] = verify;
        verify = new Array(1);
        verify[0] = result;
        kilo = kilo.bind(yankee)(offset, verify);
        var _closure2_slot10 = kilo;
        offset = yankee.useCallback;
        verify = new Array(4);
        verify[0] = result;
        verify[1] = update;
        verify[2] = romeo;
        verify[3] = report;
        report = function() {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                mike = _closure2_slot4;
                mike = mike.current;
                if(mike) { _fun00022_ip = 55; continue _fun00021 }
 15:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 12;
                zulu = zulu[mike];
                mike = undefined;
                zulu = tango.bind(mike)(zulu);
                mike = zulu.endAudioRecording;
                mike = mike.bind(zulu)();
                _fun00022_ip = 303; continue _fun00021;
 55:
                mike = _closure2_slot6;
                zulu = undefined;
                tango = false;
                mike = mike.bind(zulu)(tango);
                report = _closure2_slot2;
                mike = report.get;
                report = mike.bind(report)();
                mike = 1;
                oscar = report[mike];
                report = _closure1_slot15;
                report = report.SENDING;
                if(!(report !== oscar)) { _fun00022_ip = 287; continue _fun00021 }
 108:
                report = _closure1_slot15;
                report = report.CANCELLING;
                if(!(report !== oscar)) { _fun00022_ip = 267; continue _fun00021 }
 125:
                report = _closure1_slot15;
                report = report.LOCKING;
                if(!(report !== oscar)) { _fun00022_ip = 174; continue _fun00021 }
 139:
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                report = 12;
                report = golf[report];
                oscar = oscar.bind(zulu)(report);
                report = oscar.endAudioRecording;
                report = report.bind(oscar)();
                _fun00022_ip = 303; continue _fun00021;
 174:
                report = _closure1_slot9;
                report = report.bind(zulu)(tango);
                golf = _closure2_slot2;
                oscar = golf.set;
                options = _closure1_slot15;
                verify = options.LOCKING;
                report = new Array(2);
                report[0] = verify;
                options = options.LOCKED;
                report[1] = options;
                report = oscar.bind(golf)(report);
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                report = 13;
                report = golf[report];
                oscar = oscar.bind(zulu)(report);
                report = oscar.runOnJS;
                mike = _closure1_slot25;
                mike = report.bind(oscar)(mike);
                mike = mike.bind(zulu)();
                mike = undefined;
                return mike;
 267:
                report = _closure2_slot8;
                mike = {};
                oscar = true;
                mike['isCancelling'] = oscar;
                mike = report.bind(zulu)(mike);
                _fun00022_ip = 303; continue _fun00021;
 287:
                mike = _closure2_slot8;
                entity = {};
                entity['isCancelling'] = tango;
                entity = mike.bind(zulu)(entity);
 303:
                entity = undefined;
                return entity;
            }
        };
        romeo = offset.bind(yankee)(report, verify);
        var _closure2_slot11 = romeo;
        report = 23;
        report = backup[report];
        verify = oscar.bind(tango)(report);
        report = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun00024_ip = 92; continue _fun00023 }
 7:
                    mike = _closure2_slot9;
                    zulu = undefined;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=24);
 22:
                    return mike;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun00024_ip = 89; continue _fun00023 }
 30:
                    golf = _closure1_slot9;
                    oscar = false;
                    oscar = golf.bind(zulu)(oscar);
                    oscar = _closure2_slot2;
                    report = oscar.set;
                    golf = _closure1_slot15;
                    options = golf.LOCKED;
                    tango = new Array(2);
                    tango[0] = options;
                    golf = golf.LOCKED;
                    tango[1] = golf;
                    tango = report.bind(oscar)(tango);
                    return zulu;
 89:
                    return mike;
 92:
                    return entity;
                }
            };
            return entity;
        };
        options = options.bind(tango)(report);
        offset = 24;
        report = backup[offset];
        report = foxtrot.bind(tango)(report);
        source = report.intl;
        update = source.string;
        report = backup[offset];
        report = foxtrot.bind(tango)(report);
        report = report.t;
        report = report.lwy6aW;
        report = update.bind(source)(report);
        report = verify.bind(tango)(options, report);
        verify = report.accessibilityActions;
        options = report.onAccessibilityAction;
        report = 0.5;
        report = report * sizing;
        zulu = zulu - sizing;
        sizing = report + zulu;
        var _closure2_slot12 = sizing;
        report = yankee.useMemo;
        zulu = new Array(7);
        zulu[0] = golf;
        zulu[1] = echo;
        zulu[2] = result;
        zulu[3] = output;
        zulu[4] = sizing;
        zulu[5] = kilo;
        zulu[6] = romeo;
        mike = function() {
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            mike = 25;
            mike = offset[mike];
            options = undefined;
            mike = verify.bind(options)(mike);
            zulu = mike.Gesture;
            mike = zulu.Pan;
            report = mike.bind(zulu)();
            zulu = report.enabled;
            mike = _closure2_slot0;
            mike = !mike;
            report = zulu.bind(report)(mike);
            zulu = report.minDistance;
            mike = 0;
            report = zulu.bind(report)(mike);
            zulu = report.onTouchesDown;
            mike = function(argFoo) { // Original name: n
                _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                    entity = argFoo;
                    mike = entity.numberOfTouches;
                    entity = 1;
                    entity = mike > entity;
                    if(entity) { _fun00026_ip = 35; continue _fun00025 }
 19:
                    zulu = _closure2_slot5;
                    mike = zulu.get;
                    entity = mike.bind(zulu)();
 35:
                    if(entity) { _fun00026_ip = 156; continue _fun00025 }
 38:
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 13;
                    entity = report[zulu];
                    mike = undefined;
                    options = tango.bind(mike)(entity);
                    golf = options.runOnJS;
                    entity = _closure1_slot9;
                    golf = golf.bind(options)(entity);
                    entity = true;
                    entity = golf.bind(mike)(entity);
                    options = _closure2_slot2;
                    golf = options.set;
                    verify = _closure1_slot15;
                    offset = verify.SENDING;
                    oscar = new Array(2);
                    oscar[0] = offset;
                    verify = verify.SENDING;
                    oscar[1] = verify;
                    oscar = golf.bind(options)(oscar);
                    zulu = report[zulu];
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.runOnJS;
                    entity = _closure2_slot9;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
 156:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            foxtrot = _closure2_slot5;
            yankee['isGestureActiveValue'] = foxtrot;
            golf = 13;
            romeo = offset[golf];
            romeo = verify.bind(options)(romeo);
            romeo = romeo.runOnJS;
            yankee['runOnJS'] = romeo;
            romeo = _closure1_slot9;
            yankee['setIsUsingHoldGesture'] = romeo;
            romeo = _closure2_slot2;
            yankee['voiceMessageAnimationState'] = romeo;
            romeo = _closure1_slot15;
            yankee['VoiceMessageAnimationState'] = romeo;
            backup = _closure2_slot9;
            yankee['startRecording'] = backup;
            mike['__closure'] = yankee;
            yankee = 8059675263026.0;
            mike['__workletHash'] = yankee;
            yankee = _closure1_slot22;
            mike['__initData'] = yankee;
            report = zulu.bind(report)(mike);
            zulu = report.onUpdate;
            mike = function(argFoo) { // Original name: t
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    mike = argFoo;
                    tango = _closure2_slot5;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun00028_ip = 159; continue _fun00027 }
 25:
                    tango = mike.translationY;
                    zulu = -40;
                    if(!(tango <= zulu)) { _fun00028_ip = 55; continue _fun00027 }
 41:
                    tango = mike.absoluteX;
                    zulu = _closure2_slot12;
                    if(!(!(tango >= zulu))) { _fun00028_ip = 135; continue _fun00027 }
 55:
                    tango = mike.absoluteX;
                    zulu = _closure2_slot12;
                    if(!(!(tango < zulu))) { _fun00028_ip = 109; continue _fun00027 }
 69:
                    zulu = mike.absoluteX;
                    mike = _closure2_slot12;
                    if(!(zulu >= mike)) { _fun00028_ip = 159; continue _fun00027 }
 83:
                    tango = _closure2_slot10;
                    mike = _closure1_slot15;
                    zulu = mike.SENDING;
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    _fun00028_ip = 159; continue _fun00027;
 109:
                    tango = _closure2_slot10;
                    mike = _closure1_slot15;
                    zulu = mike.CANCELLING;
                    mike = undefined;
                    mike = tango.bind(mike)(zulu);
                    _fun00028_ip = 159; continue _fun00027;
 135:
                    zulu = _closure2_slot10;
                    entity = _closure1_slot15;
                    mike = entity.LOCKING;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 159:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            yankee['isGestureActiveValue'] = foxtrot;
            foxtrot = 40;
            yankee['LOCK_THRESHOLD'] = foxtrot;
            foxtrot = _closure2_slot12;
            yankee['cancelThresholdX'] = foxtrot;
            foxtrot = _closure2_slot10;
            yankee['handleUpdateValue'] = foxtrot;
            yankee['VoiceMessageAnimationState'] = romeo;
            mike['__closure'] = yankee;
            yankee = 9262214665783.0;
            mike['__workletHash'] = yankee;
            yankee = _closure1_slot23;
            mike['__initData'] = yankee;
            zulu = zulu.bind(report)(mike);
            mike = zulu.onFinalize;
            entity = function() { // Original name: e
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 13;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.runOnJS;
                mike = _closure2_slot11;
                mike = zulu.bind(tango)(mike);
                mike = mike.bind(entity)();
                return entity;
            };
            report = {};
            golf = offset[golf];
            golf = verify.bind(options)(golf);
            golf = golf.runOnJS;
            report['runOnJS'] = golf;
            oscar = _closure2_slot11;
            report['handleFinalize'] = oscar;
            entity['__closure'] = report;
            report = 13827777100777.0;
            entity['__workletHash'] = report;
            tango = _closure1_slot24;
            entity['__initData'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        report = report.bind(yankee)(mike, zulu);
        mike = 26;
        mike = backup[mike];
        mike = oscar.bind(tango)(mike);
        mike = mike.bind(tango)();
        yankee = mike.tooltipTargetRef;
        zulu = _closure1_slot20;
        entity = 25;
        entity = backup[entity];
        entity = foxtrot.bind(tango)(entity);
        mike = entity.GestureDetector;
        entity = {};
        entity['gesture'] = report;
        report = 27;
        report = backup[report];
        oscar = oscar.bind(tango)(report);
        report = {};
        report['ref'] = yankee;
        yankee = 28;
        yankee = backup[yankee];
        yankee = foxtrot.bind(tango)(yankee);
        yankee = yankee.MicrophoneIcon;
        report['IconComponent'] = yankee;
        yankee = false;
        report['active'] = yankee;
        yankee = backup[offset];
        yankee = foxtrot.bind(tango)(yankee);
        romeo = yankee.intl;
        yankee = romeo.string;
        offset = backup[offset];
        offset = foxtrot.bind(tango)(offset);
        offset = offset.t;
        offset = offset.lwy6aW;
        offset = yankee.bind(romeo)(offset);
        report['accessibilityLabel'] = offset;
        report['accessibilityActions'] = verify;
        report['onAccessibilityAction'] = options;
        report['disabled'] = golf;
        report = zulu.bind(tango)(oscar, report);
        entity['children'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    mike = tango.bind(golf)(mike);
    tango = 29;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_messages/native/components/VoiceMessageButton.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
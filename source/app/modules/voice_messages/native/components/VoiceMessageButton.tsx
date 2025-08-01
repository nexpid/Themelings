// app/modules/voice_messages/native/components/VoiceMessageButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function triggerHapticGuarded() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot13;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.showRecordingOverlay;
            if(!var2) { _fun0001_ip = 58; continue _fun0001 }
 26:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 13;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.triggerHaptic;
            var1 = var1.bind(var2)();
 58:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.setIsVoiceMessageButtonMounted;
    var _closure1_slot9 = var8;
    var8 = var4.setIsUsingHoldGesture;
    var _closure1_slot10 = var8;
    var8 = var4.setVoiceMessageAnimationState;
    var _closure1_slot11 = var8;
    var8 = var4.showVoiceMessagesTooltip;
    var _closure1_slot12 = var8;
    var8 = var4.useVoiceMessagesUIStore;
    var _closure1_slot13 = var8;
    var8 = var4.setShowRecordingOverlay;
    var _closure1_slot14 = var8;
    var4 = var4.hideVoiceMessagesTooltip;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.VoiceMessageAnimationState;
    var _closure1_slot16 = var8;
    var4 = var4.VOICE_RECORDING_MIN_DURATION_MILLIS;
    var _closure1_slot17 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ComponentActions;
    var _closure1_slot18 = var8;
    var8 = var4.ComponentActionsKeyed;
    var _closure1_slot19 = var8;
    var4 = var4.MessageFlags;
    var _closure1_slot20 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot21 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}';
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        var1 = arg1;
        var7 = var1.disabled;
        var _closure2_slot0 = var7;
        var17 = var1.channelId;
        var _closure2_slot1 = var17;
        var5 = _closure1_slot13;
        var4 = undefined;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.voiceMessageAnimationState;
            return var1;
        };
        var18 = var5.bind(var4)(var3);
        var _closure2_slot2 = var18;
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var21 = 14;
        var3 = var14[var21];
        var6 = var13.bind(var4)(var3);
        var5 = var6.useSharedValue;
        var3 = 0;
        var15 = var5.bind(var6)(var3);
        var _closure2_slot3 = var15;
        var5 = function useIsGestureActive() {
            var6 = _closure1_slot5;
            var3 = var6.useRef;
            var5 = false;
            var4 = var3.bind(var6)(var5);
            var _closure3_slot0 = var4;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 14;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var7.bind(var2)(var3);
            var2 = var3.useSharedValue;
            var3 = var2.bind(var3)(var5);
            var _closure3_slot1 = var3;
            var5 = var6.useCallback;
            var2 = new Array(2);
            var2[0] = var4;
            var2[1] = var3;
            var1 = function(arg1) {
                var3 = arg1;
                var2 = _closure3_slot0;
                var2['current'] = var3;
                var2 = _closure3_slot1;
                var1 = var2.set;
                var1 = var1.bind(var2)(var3);
                var1 = undefined;
                return var1;
            };
            var2 = var5.bind(var6)(var1, var2);
            var1 = new Array(3);
            var1[0] = var4;
            var1[1] = var3;
            var1[2] = var2;
            return var1;
        };
        var8 = var5.bind(var4)();
        var6 = _closure1_slot4;
        var5 = 3;
        var5 = var6.bind(var4)(var8, var5);
        var20 = var5[var3];
        var _closure2_slot4 = var20;
        var3 = 1;
        var19 = var5[var3];
        var _closure2_slot5 = var19;
        var3 = 2;
        var5 = var5[var3];
        var _closure2_slot6 = var5;
        var11 = _closure1_slot5;
        var6 = var11.useRef;
        var3 = true;
        var3 = var6.bind(var11)(var3);
        var _closure2_slot7 = var3;
        var6 = _closure1_slot1;
        var3 = 15;
        var3 = var14[var3];
        var3 = var6.bind(var4)(var3);
        var16 = var3.bind(var4)();
        var3 = 16;
        var3 = var14[var3];
        var3 = var6.bind(var4)(var3);
        var3 = var3.bind(var4)();
        var3 = var3.width;
        var10 = var11.useCallback;
        var8 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 738; continue _fun0002 }
 15:
                        var7 = var2.isCancelling;
                        var9 = var2.cancelReason;
                        var4 = undefined;
                        if(!(var9 === var4)) { _fun0002_ip = 68; continue _fun0002 }
 33:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 17;
                        var2 = var6[var2];
                        var2 = var5.bind(var4)(var2);
                        var2 = var2.VoiceMessageRecordingResult;
                        var9 = var2.CANCELLED_USER_REQUESTED;
 68:
                        var _closure5_slot0 = var4;
                        SaveGenerator(address=76);
 74:
                        return var4;
 76:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 735; continue _fun0002 }
 85:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var10 = 13;
                        var3 = var3[var10];
                        var5 = var5.bind(var4)(var3);
                        var3 = var5.endAudioRecording;
                        var3 = var3.bind(var5)();
                        SaveGenerator(address=122);
 120:
                        return var3;
 122:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                        if(var5) { _fun0002_ip = 732; continue _fun0002 }
 131:
                        var5 = var3.data;
                        var8 = var3.startTimeMillis;
                        var13 = _closure2_slot6;
                        var11 = false;
                        var11 = var13.bind(var4)(var11);
                        if(var7) { _fun0002_ip = 693; continue _fun0002 }
 162:
                        var11 = var5.durationSecs;
                        var13 = _closure1_slot17;
                        var7 = 1000;
                        var7 = var13 / var7;
                        if(!(!(var11 < var7))) { _fun0002_ip = 620; continue _fun0002 }
 189:
                        var11 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var7 = var15[var10];
                        var14 = var11.bind(var4)(var7);
                        var13 = var14.emitVoiceMessageRecorded;
                        var7 = 17;
                        var7 = var15[var7];
                        var7 = var11.bind(var4)(var7);
                        var7 = var7.VoiceMessageRecordingResult;
                        var11 = var7.SENT;
                        var7 = var5.durationSecs;
                        var7 = var13.bind(var14)(var11, var7, var8);
                        var13 = _closure1_slot8;
                        var11 = var13.getChannel;
                        var7 = _closure2_slot1;
                        var7 = var11.bind(var13)(var7);
                        _closure5_slot0 = var7;
                        var11 = null;
                        if(!(var11 != var7)) { _fun0002_ip = 729; continue _fun0002 }
 280:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var14 = 18;
                        var14 = var13[var14];
                        var14 = var11.bind(var4)(var14);
                        var17 = var14.CloudUpload;
                        var16 = {};
                        var14 = var5.filename;
                        var16['uri'] = var14;
                        var14 = var5.filename;
                        var16['originalUri'] = var14;
                        var14 = 'audio/ogg';
                        var16['mimeType'] = var14;
                        var14 = 'voice-message.ogg';
                        var16['filename'] = var14;
                        var14 = 19;
                        var14 = var13[var14];
                        var14 = var11.bind(var4)(var14);
                        var14 = var14.UploadPlatform;
                        var14 = var14.REACT_NATIVE;
                        var16['platform'] = var14;
                        var14 = var5.durationSecs;
                        var16['durationSecs'] = var14;
                        var14 = var5.waveform;
                        var16['waveform'] = var14;
                        var24 = var7.id;
                        var15 = var17.prototype;
                        var15 = Object.create(var15, {constructor: {value: var17}});
                        var26 = var15;
                        var25 = var16;
                        var14 = new var26[var17](var25, var24, var23);
                        var14 = var14 instanceof Object ? var14 : var15;
                        var20 = new Array(1);
                        var20[0] = var14;
                        var15 = _closure1_slot7;
                        var14 = var15.getPendingReply;
                        var12 = _closure2_slot1;
                        var18 = var14.bind(var15)(var12);
                        var15 = _closure1_slot1;
                        var14 = 20;
                        var16 = var13[var14];
                        var17 = var15.bind(var4)(var16);
                        var16 = var17.getSendMessageOptionsForReply;
                        var24 = var16.bind(var17)(var18);
                        var14 = var13[var14];
                        var17 = var15.bind(var4)(var14);
                        var16 = var17.sendMessage;
                        var15 = var7.id;
                        var14 = {'content': '', 'tts': false};
                        var7 = new Array(0);
                        var14['invalidEmojis'] = var7;
                        var7 = new Array(0);
                        var14['validNonShortcutEmojis'] = var7;
                        var7 = {};
                        var21 = _closure1_slot20;
                        var21 = var21.IS_VOICE_MESSAGE;
                        var7['flags'] = var21;
                        var7['attachmentsToUpload'] = var20;
                        var19 = function onAttachmentUploadError(arg1, arg2, arg3) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.handleUploadMessageAttachmentsErrors;
                            var2 = {};
                            var5 = arg1;
                            var2['file'] = var5;
                            var6 = _closure5_slot0;
                            var5 = var6.getGuildId;
                            var5 = var5.bind(var6)();
                            var2['guildId'] = var5;
                            var5 = new Array(0);
                            var2['analyticsLocations'] = var5;
                            var5 = arg2;
                            var2['code'] = var5;
                            var5 = arg3;
                            var2['reason'] = var5;
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var7['onAttachmentUploadError'] = var19;
                        var25 = var7;
                        var18 = copyDataProperties(var25, var24);
                        var26 = var17;
                        var25 = var15;
                        var24 = var14;
                        var23 = undefined;
                        var22 = var7;
                        var7 = var26[var16](var25, var24, var23, var22, var21);
                        var7 = 22;
                        var7 = var13[var7];
                        var11 = var11.bind(var4)(var7);
                        var7 = var11.deletePendingReply;
                        var7 = var7.bind(var11)(var12);
                        _fun0002_ip = 729; continue _fun0002;
 620:
                        var11 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var7 = var14[var10];
                        var13 = var11.bind(var4)(var7);
                        var12 = var13.emitVoiceMessageRecorded;
                        var7 = 17;
                        var7 = var14[var7];
                        var7 = var11.bind(var4)(var7);
                        var7 = var7.VoiceMessageRecordingResult;
                        var11 = var7.CANCELLED_DURATION;
                        var7 = var5.durationSecs;
                        var7 = var12.bind(var13)(var11, var7, var8);
                        var7 = _closure1_slot12;
                        var7 = var7.bind(var4)();
                        var7 = undefined;
                        return var7;
 693:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var10];
                        var7 = var7.bind(var4)(var6);
                        var6 = var7.emitVoiceMessageRecorded;
                        var5 = var5.durationSecs;
                        var5 = var6.bind(var7)(var9, var5, var8);
 729:
                        return var4;
 732:
                        return var3;
 735:
                        return var2;
 738:
                        return var1;
                    }
                };
                var2 = var1.next;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var9 = var8.bind(var4)();
        var8 = new Array(2);
        var8[0] = var17;
        var8[1] = var5;
        var12 = var10.bind(var11)(var9, var8);
        var _closure2_slot8 = var12;
        var10 = var11.useEffect;
        var9 = new Array(2);
        var9[0] = var17;
        var9[1] = var12;
        var8 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 23;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.ComponentDispatch;
            var4 = var5.subscribeKeyed;
            var1 = _closure1_slot19;
            var3 = var1.VOICE_MESSAGE_SEND;
            var2 = _closure2_slot1;
            var1 = _closure2_slot8;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 23;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = var3.ComponentDispatch;
                var5 = var6.unsubscribeKeyed;
                var2 = _closure1_slot19;
                var4 = var2.VOICE_MESSAGE_SEND;
                var3 = _closure2_slot1;
                var2 = _closure2_slot8;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            return var1;
        };
        var8 = var10.bind(var11)(var8, var9);
        var10 = var11.useEffect;
        var9 = function() {
            var3 = _closure1_slot9;
            var2 = undefined;
            var1 = true;
            var1 = var3.bind(var2)(var1);
            var1 = function() {
                var3 = _closure1_slot9;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var8 = new Array(0);
        var8 = var10.bind(var11)(var9, var8);
        var10 = var11.useEffect;
        var9 = new Array(2);
        var9[0] = var20;
        var9[1] = var5;
        var8 = function() {
            var4 = _closure2_slot7;
            var3 = true;
            var4['current'] = var3;
            var2 = _closure2_slot4;
            var2 = var2.current;
            var _closure3_slot0 = var2;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot7;
                    var4 = false;
                    var1['current'] = var4;
                    var5 = _closure1_slot13;
                    var3 = var5.getState;
                    var5 = var3.bind(var5)();
                    var3 = var5.showRecordingOverlay;
                    if(var3) { _fun0003_ip = 53; continue _fun0003 }
 41:
                    var6 = var5.recordingStatus;
                    var5 = null;
                    var3 = var5 != var6;
 53:
                    if(var3) { _fun0003_ip = 63; continue _fun0003 }
 56:
                    var3 = _closure3_slot0;
 63:
                    if(!var3) { _fun0003_ip = 107; continue _fun0003 }
 66:
                    var2 = _closure2_slot6;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 13;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.endAudioRecording;
                    var1 = var1.bind(var2)();
 107:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var8 = var10.bind(var11)(var8, var9);
        var8 = 11;
        var8 = var14[var8];
        var9 = var13.bind(var4)(var8);
        var8 = var9.useIsModalOpen;
        var8 = var8.bind(var9)();
        var22 = var11.useEffect;
        var10 = new Array(3);
        var10[0] = var20;
        var10[1] = var5;
        var10[2] = var17;
        var9 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = function cancel() {
                    var1 = undefined;
                    var4 = _closure3_slot1;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot0 = var2;
                var3 = function _cancel() {
                    var4 = undefined;
                    var1 = undefined;
                    var3 = _closure1_slot3;
                    var2 = function* () {
                        var1 = function* anon_0_() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0005_ip = 201; continue _fun0005 }
 10:
                                var3 = _closure1_slot13;
                                var2 = var3.getState;
                                var2 = var2.bind(var3)();
                                var3 = var2.showRecordingOverlay;
                                if(var3) { _fun0005_ip = 66; continue _fun0005 }
 36:
                                var3 = var2.recordingStatus;
                                var2 = null;
                                if(!(var2 == var3)) { _fun0005_ip = 66; continue _fun0005 }
 48:
                                var2 = _closure2_slot4;
                                var2 = var2.current;
                                if(!var2) { _fun0005_ip = 193; continue _fun0005 }
 66:
                                var3 = _closure2_slot6;
                                var5 = undefined;
                                var2 = false;
                                var2 = var3.bind(var5)(var2);
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var3 = 13;
                                var2 = var2[var3];
                                var4 = var4.bind(var5)(var2);
                                var2 = var4.endAudioRecording;
                                var2 = var2.bind(var4)();
                                SaveGenerator(address=116);
 114:
                                return var2;
 116:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0005_ip = 198; continue _fun0005 }
 122:
                                var4 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = var8[var3];
                                var7 = var4.bind(var5)(var3);
                                var6 = var7.emitVoiceMessageRecorded;
                                var3 = 17;
                                var3 = var8[var3];
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.VoiceMessageRecordingResult;
                                var5 = var3.CANCELLED_GESTURE_CONFLICT;
                                var3 = var2.data;
                                var4 = var3.durationSecs;
                                var3 = var2.startTimeMillis;
                                var3 = var6.bind(var7)(var5, var4, var3);
 193:
                                var3 = undefined;
                                return var3;
 198:
                                return var2;
 201:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    _closure3_slot1 = var4;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                var _closure3_slot1 = var3;
                var7 = function handleActionSheetChange() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var2 = _closure1_slot6;
                        var1 = var2.isOpen;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0006_ip = 33; continue _fun0006 }
 20:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 33:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot2 = var7;
                var5 = function handleNavigationChange() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getFocusedChannelId;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        if(!(var2 == var3)) { _fun0007_ip = 54; continue _fun0007 }
 41:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
                        _fun0007_ip = 76; continue _fun0007;
 54:
                        var2 = _closure2_slot1;
                        if(!(var3 !== var2)) { _fun0007_ip = 76; continue _fun0007 }
 65:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
 76:
                        return var1;
                    }
                };
                var _closure3_slot3 = var5;
                var4 = undefined;
                var2 = var2.bind(var4)();
                var6 = _closure1_slot6;
                var3 = var6.addReactChangeListener;
                var3 = var3.bind(var6)(var7);
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 25;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0004_ip = 122; continue _fun0004 }
 106:
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
 122:
                var1 = function() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var5 = _closure1_slot6;
                        var4 = var5.removeReactChangeListener;
                        var3 = _closure3_slot2;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 25;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getRootNavigationRef;
                        var5 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var5)) { _fun0008_ip = 83; continue _fun0008 }
 63:
                        var4 = var5.removeListener;
                        var3 = _closure3_slot3;
                        var2 = 'state';
                        var2 = var4.bind(var5)(var2, var3);
 83:
                        return var1;
                    }
                };
                return var1;
            }
        };
        var9 = var22.bind(var11)(var9, var10);
        var10 = var11.useEffect;
        var9 = new Array(2);
        var9[0] = var15;
        var9[1] = var8;
        var8 = function() {
            var3 = _closure1_slot11;
            var2 = {};
            var1 = _closure2_slot3;
            var2['currWaveHeight'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var8 = var10.bind(var11)(var8, var9);
        var15 = var11.useCallback;
        var8 = _closure1_slot3;
        var9 = function* () {
            var1 = function* anon_0_() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0009_ip = 617; continue _fun0009 }
 10:
                    var2 = undefined;
                    var8 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 11;
                    var3 = var3[var10];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.isModalOpen;
                    var5 = var3.bind(var5)();
                    var6 = false;
                    var3 = false;
                    if(!var5) { _fun0009_ip = 131; continue _fun0009 }
 58:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.getOpenModalKey;
                    var11 = var5.bind(var7)();
                    var5 = null;
                    var5 = var5 == var11;
                    if(var5) { _fun0009_ip = 128; continue _fun0009 }
 94:
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 12;
                    var7 = var13[var7];
                    var10 = var10.bind(var2)(var7);
                    var7 = var10.isVoiceChannelModalKey;
                    var7 = var7.bind(var10)(var11);
                    var5 = !var7;
 128:
                    var3 = var5;
 131:
                    if(var3) { _fun0009_ip = 614; continue _fun0009 }
 137:
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    if(!var3) { _fun0009_ip = 614; continue _fun0009 }
 155:
                    var7 = _closure1_slot6;
                    var3 = var7.isOpen;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0009_ip = 614; continue _fun0009 }
 175:
                    var10 = _closure1_slot8;
                    var7 = var10.getChannel;
                    var3 = _closure2_slot1;
                    var3 = var7.bind(var10)(var3);
                    var11 = null;
                    if(!(var11 != var3)) { _fun0009_ip = 614; continue _fun0009 }
 202:
                    var3 = _closure2_slot6;
                    var10 = true;
                    var3 = var3.bind(var2)(var10);
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 23;
                    var3 = var13[var3];
                    var3 = var7.bind(var2)(var3);
                    var14 = var3.ComponentDispatch;
                    var7 = var14.dispatch;
                    var3 = _closure1_slot18;
                    var3 = var3.VOICE_MESSAGE_BUTTON_PRESSED;
                    var3 = var7.bind(var14)(var3);
                    var7 = _closure1_slot1;
                    var3 = 26;
                    var3 = var13[var3];
                    var13 = var7.bind(var2)(var3);
                    var7 = var13.requestPermission;
                    var3 = _closure1_slot21;
                    var3 = var3.AUDIO;
                    var3 = var7.bind(var13)(var3);
                    SaveGenerator(address=300);
 298:
                    return var3;
 300:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0009_ip = 611; continue _fun0009 }
 309:
                    if(!var3) { _fun0009_ip = 614; continue _fun0009 }
 315:
                    var7 = _closure2_slot4;
                    var7 = var7.current;
                    if(!var7) { _fun0009_ip = 614; continue _fun0009 }
 330:
                    var7 = _closure1_slot15;
                    var7 = var7.bind(var2)();
                    var7 = global;
                    var13 = var7.performance;
                    var7 = var13.now;
                    var12 = var7.bind(var13)();
                    var7 = _closure1_slot14;
                    var7 = var7.bind(var2)(var10);
 364: // try_start_0
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var10 = 13;
                    var7 = var7[var10];
                    var14 = var13.bind(var2)(var7);
                    var13 = var14.startAudioRecording;
                    var7 = var12;
                    var7 = var13.bind(var14)(var7);
                    SaveGenerator(address=402);
 400:
                    return var7;
 402:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=12);
                    if(var13) { _fun0009_ip = 562; continue _fun0009 }
 411: // try_end0
                    var14 = _closure1_slot13;
                    var13 = var14.getState;
                    var13 = var13.bind(var14)();
                    var9 = var13;
                    var13 = var13.recordingId;
                    if(!(var13 === var12)) { _fun0009_ip = 614; continue _fun0009 }
 441:
                    var9 = var9.voiceMessageAnimationState;
                    var8 = var9;
                    var11 = var11 == var9;
                    var9 = undefined;
                    if(var11) { _fun0009_ip = 478; continue _fun0009 }
 459:
                    var11 = var8;
                    var8 = var11.get;
                    var11 = var8.bind(var11)();
                    var8 = 1;
                    var9 = var11[var8];
 478:
                    var8 = _closure1_slot16;
                    var8 = var8.LOCKED;
                    if(!(var9 !== var8)) { _fun0009_ip = 533; continue _fun0009 }
 492:
                    var8 = _closure2_slot4;
                    var8 = var8.current;
                    if(var8) { _fun0009_ip = 533; continue _fun0009 }
 504:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.endAudioRecording;
                    var8 = var8.bind(var9)();
                    _fun0009_ip = 614; continue _fun0009;
 533:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.triggerHaptic;
                    var8 = var8.bind(var9)();
                    _fun0009_ip = 614; continue _fun0009;
 562:
                    return var7;
 565: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var5 = _closure2_slot6;
                    var5 = var5.bind(var2)(var6);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 27;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.showVoiceRecordingFailed;
                    var4 = var4.bind(var5)();
                    var4 = undefined;
                    return var4;
 611:
                    return var3;
 614:
                    return var2;
 617:
                    return var1;
                }
            };
            return var1;
        };
        var10 = var8.bind(var4)(var9);
        var9 = new Array(3);
        var9[0] = var20;
        var9[1] = var5;
        var9[2] = var17;
        var17 = var15.bind(var11)(var10, var9);
        var _closure2_slot9 = var17;
        var15 = var11.useCallback;
        var10 = function x(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var4 = arg1;
                var3 = _closure2_slot2;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 1;
                var3 = var3[var2];
                if(!(var3 !== var4)) { _fun0010_ip = 112; continue _fun0010 }
 30:
                var3 = _closure2_slot2;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var5 = var1[var2];
                var2 = var3.set;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var1 = var2.bind(var3)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.runOnJS;
                var1 = _closure1_slot27;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
 112:
                var1 = undefined;
                return var1;
            }
        };
        var9 = {};
        var9['voiceMessageAnimationState'] = var18;
        var21 = var14[var21];
        var21 = var13.bind(var4)(var21);
        var21 = var21.runOnJS;
        var9['runOnJS'] = var21;
        var21 = _closure1_slot27;
        var9['triggerHapticGuarded'] = var21;
        var10['__closure'] = var9;
        var9 = 9127775028714.0;
        var10['__workletHash'] = var9;
        var9 = _closure1_slot23;
        var10['__initData'] = var9;
        var9 = new Array(1);
        var9[0] = var18;
        var15 = var15.bind(var11)(var10, var9);
        var _closure2_slot10 = var15;
        var10 = var11.useCallback;
        var9 = new Array(4);
        var9[0] = var18;
        var9[1] = var20;
        var9[2] = var12;
        var9[3] = var5;
        var5 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = _closure2_slot4;
                var2 = var2.current;
                if(var2) { _fun0011_ip = 55; continue _fun0011 }
 15:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 13;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.endAudioRecording;
                var2 = var2.bind(var3)();
                _fun0011_ip = 303; continue _fun0011;
 55:
                var2 = _closure2_slot6;
                var3 = undefined;
                var4 = false;
                var2 = var2.bind(var3)(var4);
                var5 = _closure2_slot2;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var2 = 1;
                var6 = var5[var2];
                var5 = _closure1_slot16;
                var5 = var5.SENDING;
                if(!(var5 !== var6)) { _fun0011_ip = 287; continue _fun0011 }
 108:
                var5 = _closure1_slot16;
                var5 = var5.CANCELLING;
                if(!(var5 !== var6)) { _fun0011_ip = 267; continue _fun0011 }
 125:
                var5 = _closure1_slot16;
                var5 = var5.LOCKING;
                if(!(var5 !== var6)) { _fun0011_ip = 174; continue _fun0011 }
 139:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 13;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.endAudioRecording;
                var5 = var5.bind(var6)();
                _fun0011_ip = 303; continue _fun0011;
 174:
                var5 = _closure1_slot10;
                var5 = var5.bind(var3)(var4);
                var7 = _closure2_slot2;
                var6 = var7.set;
                var8 = _closure1_slot16;
                var9 = var8.LOCKING;
                var5 = new Array(2);
                var5[0] = var9;
                var8 = var8.LOCKED;
                var5[1] = var8;
                var5 = var6.bind(var7)(var5);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 14;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.runOnJS;
                var2 = _closure1_slot27;
                var2 = var5.bind(var6)(var2);
                var2 = var2.bind(var3)();
                var2 = undefined;
                return var2;
 267:
                var5 = _closure2_slot8;
                var2 = {};
                var6 = true;
                var2['isCancelling'] = var6;
                var2 = var5.bind(var3)(var2);
                _fun0011_ip = 303; continue _fun0011;
 287:
                var2 = _closure2_slot8;
                var1 = {};
                var1['isCancelling'] = var4;
                var1 = var2.bind(var3)(var1);
 303:
                var1 = undefined;
                return var1;
            }
        };
        var12 = var10.bind(var11)(var5, var9);
        var _closure2_slot11 = var12;
        var5 = 28;
        var5 = var14[var5];
        var9 = var6.bind(var4)(var5);
        var5 = function* () {
            var1 = function* anon_0_() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0012_ip = 92; continue _fun0012 }
 7:
                    var2 = _closure2_slot9;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=24);
 22:
                    return var2;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0012_ip = 89; continue _fun0012 }
 30:
                    var7 = _closure1_slot10;
                    var6 = false;
                    var6 = var7.bind(var3)(var6);
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var7 = _closure1_slot16;
                    var8 = var7.LOCKED;
                    var4 = new Array(2);
                    var4[0] = var8;
                    var7 = var7.LOCKED;
                    var4[1] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
 89:
                    return var2;
 92:
                    return var1;
                }
            };
            return var1;
        };
        var8 = var8.bind(var4)(var5);
        var10 = 29;
        var5 = var14[var10];
        var5 = var13.bind(var4)(var5);
        var21 = var5.intl;
        var20 = var21.string;
        var5 = var14[var10];
        var5 = var13.bind(var4)(var5);
        var5 = var5.t;
        var5 = var5.lwy6aW;
        var5 = var20.bind(var21)(var5);
        var5 = var9.bind(var4)(var8, var5);
        var9 = var5.accessibilityActions;
        var8 = var5.onAccessibilityAction;
        var5 = 0.5;
        var5 = var5 * var16;
        var3 = var3 - var16;
        var16 = var5 + var3;
        var _closure2_slot12 = var16;
        var5 = var11.useMemo;
        var3 = new Array(7);
        var3[0] = var7;
        var3[1] = var19;
        var3[2] = var18;
        var3[3] = var17;
        var3[4] = var16;
        var3[5] = var15;
        var3[6] = var12;
        var2 = function() {
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 30;
            var2 = var10[var2];
            var8 = undefined;
            var2 = var9.bind(var8)(var2);
            var3 = var2.Gesture;
            var2 = var3.Pan;
            var5 = var2.bind(var3)();
            var3 = var5.enabled;
            var2 = _closure2_slot0;
            var2 = !var2;
            var5 = var3.bind(var5)(var2);
            var3 = var5.minDistance;
            var2 = 0;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onTouchesDown;
            var2 = function n(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var1 = arg1;
                    var2 = var1.numberOfTouches;
                    var1 = 1;
                    var1 = var2 > var1;
                    if(var1) { _fun0013_ip = 35; continue _fun0013 }
 19:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
 35:
                    if(var1) { _fun0013_ip = 156; continue _fun0013 }
 38:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 14;
                    var1 = var5[var3];
                    var2 = undefined;
                    var8 = var4.bind(var2)(var1);
                    var7 = var8.runOnJS;
                    var1 = _closure1_slot10;
                    var7 = var7.bind(var8)(var1);
                    var1 = true;
                    var1 = var7.bind(var2)(var1);
                    var8 = _closure2_slot2;
                    var7 = var8.set;
                    var9 = _closure1_slot16;
                    var10 = var9.SENDING;
                    var6 = new Array(2);
                    var6[0] = var10;
                    var9 = var9.SENDING;
                    var6[1] = var9;
                    var6 = var7.bind(var8)(var6);
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot9;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
 156:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = {};
            var13 = _closure2_slot5;
            var11['isGestureActiveValue'] = var13;
            var7 = 14;
            var12 = var10[var7];
            var12 = var9.bind(var8)(var12);
            var12 = var12.runOnJS;
            var11['runOnJS'] = var12;
            var12 = _closure1_slot10;
            var11['setIsUsingHoldGesture'] = var12;
            var12 = _closure2_slot2;
            var11['voiceMessageAnimationState'] = var12;
            var12 = _closure1_slot16;
            var11['VoiceMessageAnimationState'] = var12;
            var14 = _closure2_slot9;
            var11['startRecording'] = var14;
            var2['__closure'] = var11;
            var11 = 15771181123252.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot26;
            var2['__initData'] = var11;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onUpdate;
            var2 = function t(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = arg1;
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0014_ip = 159; continue _fun0014 }
 25:
                    var4 = var2.translationY;
                    var3 = -40;
                    if(!(var4 <= var3)) { _fun0014_ip = 55; continue _fun0014 }
 41:
                    var4 = var2.absoluteX;
                    var3 = _closure2_slot12;
                    if(!(!(var4 >= var3))) { _fun0014_ip = 135; continue _fun0014 }
 55:
                    var4 = var2.absoluteX;
                    var3 = _closure2_slot12;
                    if(!(!(var4 < var3))) { _fun0014_ip = 109; continue _fun0014 }
 69:
                    var3 = var2.absoluteX;
                    var2 = _closure2_slot12;
                    if(!(var3 >= var2)) { _fun0014_ip = 159; continue _fun0014 }
 83:
                    var4 = _closure2_slot10;
                    var2 = _closure1_slot16;
                    var3 = var2.SENDING;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0014_ip = 159; continue _fun0014;
 109:
                    var4 = _closure2_slot10;
                    var2 = _closure1_slot16;
                    var3 = var2.CANCELLING;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0014_ip = 159; continue _fun0014;
 135:
                    var3 = _closure2_slot10;
                    var1 = _closure1_slot16;
                    var2 = var1.LOCKING;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 159:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = {};
            var11['isGestureActiveValue'] = var13;
            var13 = 40;
            var11['LOCK_THRESHOLD'] = var13;
            var13 = _closure2_slot12;
            var11['cancelThresholdX'] = var13;
            var13 = _closure2_slot10;
            var11['handleUpdateValue'] = var13;
            var11['VoiceMessageAnimationState'] = var12;
            var2['__closure'] = var11;
            var11 = 9262214665783.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot25;
            var2['__initData'] = var11;
            var3 = var3.bind(var5)(var2);
            var2 = var3.onFinalize;
            var1 = function e() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot11;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = {};
            var7 = var10[var7];
            var7 = var9.bind(var8)(var7);
            var7 = var7.runOnJS;
            var5['runOnJS'] = var7;
            var6 = _closure2_slot11;
            var5['handleFinalize'] = var6;
            var1['__closure'] = var5;
            var5 = 2411654680943.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot24;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5 = var5.bind(var11)(var2, var3);
        var2 = 31;
        var2 = var14[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var11 = var2.tooltipTargetRef;
        var3 = _closure1_slot22;
        var1 = 30;
        var1 = var14[var1];
        var1 = var13.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var5;
        var5 = 32;
        var5 = var14[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['ref'] = var11;
        var11 = 33;
        var11 = var14[var11];
        var11 = var13.bind(var4)(var11);
        var11 = var11.MicrophoneIcon;
        var5['IconComponent'] = var11;
        var11 = false;
        var5['active'] = var11;
        var11 = var14[var10];
        var11 = var13.bind(var4)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var4)(var10);
        var10 = var10.t;
        var10 = var10.lwy6aW;
        var10 = var11.bind(var12)(var10);
        var5['accessibilityLabel'] = var10;
        var5['accessibilityActions'] = var9;
        var5['onAccessibilityAction'] = var8;
        var5['disabled'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 34;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_messages/native/components/VoiceMessageButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
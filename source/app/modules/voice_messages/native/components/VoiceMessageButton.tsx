// app/modules/voice_messages/native/components/VoiceMessageButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function triggerHapticGuarded() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = _closure1_slot15;
            var2 = var3.getState;
            var2 = var2.bind(var3)();
            var2 = var2.showRecordingOverlay;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 18;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.triggerHaptic;
            var1 = var1.bind(var2)();
case 2:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.AppState;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.setIsVoiceMessageButtonMounted;
    var _closure1_slot11 = var8;
    var8 = var4.setIsUsingHoldGesture;
    var _closure1_slot12 = var8;
    var8 = var4.setVoiceMessageAnimationState;
    var _closure1_slot13 = var8;
    var8 = var4.showVoiceMessagesTooltip;
    var _closure1_slot14 = var8;
    var8 = var4.useVoiceMessagesUIStore;
    var _closure1_slot15 = var8;
    var8 = var4.setShowRecordingOverlay;
    var _closure1_slot16 = var8;
    var4 = var4.hideVoiceMessagesTooltip;
    var _closure1_slot17 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.VoiceMessageAnimationState;
    var _closure1_slot18 = var8;
    var4 = var4.VOICE_RECORDING_MIN_DURATION_MILLIS;
    var _closure1_slot19 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ComponentActions;
    var _closure1_slot20 = var8;
    var8 = var4.ComponentActionsKeyed;
    var _closure1_slot21 = var8;
    var4 = var4.MessageFlags;
    var _closure1_slot22 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot23 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativePermissionTypes;
    var _closure1_slot24 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot25 = var9;
    var4 = 13;
    var8 = var6[var4];
    var11 = var5.bind(var1)(var8);
    var10 = var11.createStyles;
    var8 = {};
    var14 = {};
    var12 = 14;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FEEDBACK_CRITICAL;
    var14['backgroundColor'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var14['borderRadius'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var14['padding'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var14['marginLeft'] = var15;
    var8['icon'] = var14;
    var8 = var10.bind(var11)(var8);
    var _closure1_slot26 = var8;
    var4 = var6[var4];
    var10 = var5.bind(var1)(var4);
    var8 = var10.createStyles;
    var4 = {};
    var11 = {};
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.CARD_SECONDARY_BG;
    var11['backgroundColor'] = var12;
    var4['themedChatInput'] = var11;
    var4 = var8.bind(var10)(var4);
    var _closure1_slot27 = var4;
    var8 = function VoiceMessageRecordingCancelledToastIcon() {
        var1 = _closure1_slot26;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot25;
        var2 = _closure1_slot6;
        var1 = {};
        var5 = var5.icon;
        var1['style'] = var5;
        var5 = true;
        var1['aria-hidden'] = var5;
        var7 = _closure1_slot25;
        var6 = _closure1_slot0;
        var10 = _closure1_slot2;
        var5 = 15;
        var5 = var10[var5];
        var5 = var6.bind(var4)(var5);
        var6 = var5.XSmallBoldIcon;
        var5 = {};
        var9 = _closure1_slot1;
        var8 = 14;
        var8 = var10[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.WHITE;
        var5['color'] = var8;
        var8 = 'xs';
        var5['size'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = {};
    var4 = var9.bind(var1)(var8, var4);
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}';
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        var2 = arg1;
        var9 = var2.disabled;
        var _closure2_slot0 = var9;
        var18 = var2.channelId;
        var _closure2_slot1 = var18;
        var2 = _closure1_slot27;
        var4 = undefined;
        var2 = var2.bind(var4)();
        var15 = _closure1_slot0;
        var16 = _closure1_slot2;
        var3 = 20;
        var3 = var16[var3];
        var6 = var15.bind(var4)(var3);
        var3 = var6.useClientThemesOverride;
        var2 = var2.themedChatInput;
        var8 = var3.bind(var6)(var2);
        var3 = _closure1_slot15;
        var2 = function(arg1) {
            var1 = arg1;
            var1 = var1.voiceMessageAnimationState;
            return var1;
        };
        var19 = var3.bind(var4)(var2);
        var _closure2_slot2 = var19;
        var22 = 19;
        var2 = var16[var22];
        var6 = var15.bind(var4)(var2);
        var3 = var6.useSharedValue;
        var2 = 0;
        var14 = var3.bind(var6)(var2);
        var _closure2_slot3 = var14;
        var3 = function useIsGestureActive() {
            var6 = _closure1_slot5;
            var3 = var6.useRef;
            var5 = false;
            var4 = var3.bind(var6)(var5);
            var _closure3_slot0 = var4;
            var7 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 19;
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
        var7 = var3.bind(var4)();
        var6 = _closure1_slot4;
        var3 = 3;
        var3 = var6.bind(var4)(var7, var3);
        var21 = var3[var2];
        var _closure2_slot4 = var21;
        var2 = 1;
        var20 = var3[var2];
        var _closure2_slot5 = var20;
        var2 = 2;
        var3 = var3[var2];
        var _closure2_slot6 = var3;
        var7 = _closure1_slot5;
        var6 = var7.useRef;
        var2 = true;
        var2 = var6.bind(var7)(var2);
        var _closure2_slot7 = var2;
        var6 = var7.useRef;
        var2 = _closure1_slot7;
        var2 = var2.currentState;
        var2 = var6.bind(var7)(var2);
        var _closure2_slot8 = var2;
        var6 = var7.useRef;
        var2 = null;
        var2 = var6.bind(var7)(var2);
        var _closure2_slot9 = var2;
        var6 = _closure1_slot1;
        var2 = 21;
        var2 = var16[var2];
        var2 = var6.bind(var4)(var2);
        var17 = var2.bind(var4)();
        var2 = 22;
        var2 = var16[var2];
        var2 = var6.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var2 = var2.width;
        var12 = var7.useCallback;
        var10 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1) {
                var1 = function* anon_0_(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var11 = var2.isCancelling;
                        var8 = var2.cancelReason;
                        var9 = undefined;
                        if(!(var8 === var9)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 23;
                        var2 = var5[var2];
                        var2 = var4.bind(var9)(var2);
                        var2 = var2.VoiceMessageRecordingResult;
                        var8 = var2.CANCELLED_USER_REQUESTED;
case 6:
                        var _closure5_slot0 = var9;
                        SaveGenerator(address=76);
case 8:
                        return var9;
case 9:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var10 = 18;
                        var3 = var3[var10];
                        var4 = var4.bind(var9)(var3);
                        var3 = var4.endAudioRecording;
                        var3 = var3.bind(var4)();
                        SaveGenerator(address=122);
case 12:
                        return var3;
case 13:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                        var4 = var3.data;
                        var7 = var3.startTimeMillis;
                        var13 = _closure2_slot6;
                        var12 = false;
                        var12 = var13.bind(var9)(var12);
                        if(var11) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                        var12 = var4.durationSecs;
                        var13 = _closure1_slot19;
                        var11 = 1000;
                        var11 = var13 / var11;
                        if(!(!(var12 < var11))) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                        var12 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var11 = var15[var10];
                        var14 = var12.bind(var9)(var11);
                        var13 = var14.emitVoiceMessageRecorded;
                        var11 = 23;
                        var11 = var15[var11];
                        var11 = var12.bind(var9)(var11);
                        var11 = var11.VoiceMessageRecordingResult;
                        var12 = var11.SENT;
                        var11 = var4.durationSecs;
                        var11 = var13.bind(var14)(var12, var11, var7);
                        var13 = _closure1_slot10;
                        var12 = var13.getChannel;
                        var11 = _closure2_slot1;
                        var11 = var12.bind(var13)(var11);
                        _closure5_slot0 = var11;
                        var12 = null;
                        if(!(var12 != var11)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var13 = 24;
                        var13 = var14[var13];
                        var13 = var12.bind(var9)(var13);
                        var17 = var13.CloudUpload;
                        var16 = {};
                        var13 = var4.filename;
                        var16['uri'] = var13;
                        var13 = var4.filename;
                        var16['originalUri'] = var13;
                        var13 = 'audio/ogg';
                        var16['mimeType'] = var13;
                        var13 = 'voice-message.ogg';
                        var16['filename'] = var13;
                        var13 = 25;
                        var13 = var14[var13];
                        var13 = var12.bind(var9)(var13);
                        var13 = var13.UploadPlatform;
                        var13 = var13.REACT_NATIVE;
                        var16['platform'] = var13;
                        var13 = var4.durationSecs;
                        var16['durationSecs'] = var13;
                        var13 = var4.waveform;
                        var16['waveform'] = var13;
                        var25 = var11.id;
                        var15 = var17.prototype;
                        var15 = Object.create(var15, {constructor: {value: var17}});
                        var27 = var15;
                        var26 = var16;
                        var13 = new var27[var17](var26, var25, var24);
                        var13 = var13 instanceof Object ? var13 : var15;
                        var21 = new Array(1);
                        var21[0] = var13;
                        var16 = _closure1_slot9;
                        var15 = var16.getPendingReply;
                        var13 = _closure2_slot1;
                        var19 = var15.bind(var16)(var13);
                        var16 = _closure1_slot1;
                        var15 = 26;
                        var17 = var14[var15];
                        var18 = var16.bind(var9)(var17);
                        var17 = var18.getSendMessageOptionsForReply;
                        var25 = var17.bind(var18)(var19);
                        var15 = var14[var15];
                        var18 = var16.bind(var9)(var15);
                        var17 = var18.sendMessage;
                        var16 = var11.id;
                        var15 = {'content': '', 'tts': false};
                        var11 = new Array(0);
                        var15['invalidEmojis'] = var11;
                        var11 = new Array(0);
                        var15['validNonShortcutEmojis'] = var11;
                        var11 = {};
                        var22 = _closure1_slot22;
                        var22 = var22.IS_VOICE_MESSAGE;
                        var11['flags'] = var22;
                        var22 = _closure1_slot23;
                        var22 = var22.VOICE_MESSAGE;
                        var11['location'] = var22;
                        var11['attachmentsToUpload'] = var21;
                        var20 = function onAttachmentUploadError(arg1, arg2, arg3) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 27;
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
                        var11['onAttachmentUploadError'] = var20;
                        var26 = var11;
                        var19 = copyDataProperties(var26, var25);
                        var27 = var18;
                        var26 = var16;
                        var25 = var15;
                        var24 = undefined;
                        var23 = var11;
                        var11 = var27[var17](var26, var25, var24, var23, var22);
                        var11 = 28;
                        var11 = var14[var11];
                        var12 = var12.bind(var9)(var11);
                        var11 = var12.deletePendingReply;
                        var11 = var11.bind(var12)(var13);
case 20:
                        return var9;
case 18:
                        var12 = _closure1_slot0;
                        var15 = _closure1_slot2;
                        var11 = var15[var10];
                        var14 = var12.bind(var9)(var11);
                        var13 = var14.emitVoiceMessageRecorded;
                        var11 = 23;
                        var11 = var15[var11];
                        var11 = var12.bind(var9)(var11);
                        var11 = var11.VoiceMessageRecordingResult;
                        var12 = var11.CANCELLED_DURATION;
                        var11 = var4.durationSecs;
                        var11 = var13.bind(var14)(var12, var11, var7);
                        var11 = _closure1_slot14;
                        var11 = var11.bind(var9)();
                        var11 = undefined;
                        return var11;
case 16:
                        var6 = _closure2_slot9;
                        var6['current'] = var8;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var10];
                        var6 = var6.bind(var9)(var5);
                        var5 = var6.emitVoiceMessageRecorded;
                        var4 = var4.durationSecs;
                        var4 = var5.bind(var6)(var8, var4, var7);
                        var4 = undefined;
                        return var4;
case 14:
                        return var3;
case 10:
                        return var2;
case 4:
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
        var11 = var10.bind(var4)();
        var10 = new Array(2);
        var10[0] = var18;
        var10[1] = var3;
        var13 = var12.bind(var7)(var11, var10);
        var _closure2_slot10 = var13;
        var12 = var7.useEffect;
        var11 = new Array(2);
        var11[0] = var18;
        var11[1] = var13;
        var10 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 29;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var5 = var2.ComponentDispatch;
            var4 = var5.subscribeKeyed;
            var1 = _closure1_slot21;
            var3 = var1.VOICE_MESSAGE_SEND;
            var2 = _closure2_slot1;
            var1 = _closure2_slot10;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = var3.ComponentDispatch;
                var5 = var6.unsubscribeKeyed;
                var2 = _closure1_slot21;
                var4 = var2.VOICE_MESSAGE_SEND;
                var3 = _closure2_slot1;
                var2 = _closure2_slot10;
                var2 = var5.bind(var6)(var4, var3, var2);
                return var1;
            };
            return var1;
        };
        var10 = var12.bind(var7)(var10, var11);
        var12 = var7.useEffect;
        var11 = function() {
            var3 = _closure1_slot11;
            var2 = undefined;
            var1 = true;
            var1 = var3.bind(var2)(var1);
            var1 = function() {
                var3 = _closure1_slot11;
                var1 = undefined;
                var2 = false;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            return var1;
        };
        var10 = new Array(0);
        var10 = var12.bind(var7)(var11, var10);
        var12 = var7.useEffect;
        var11 = function() {
            var5 = _closure1_slot7;
            var4 = var5.addEventListener;
            var3 = 'change';
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot8;
                    var10 = var1.current;
                    var1 = _closure2_slot9;
                    var6 = var1.current;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 23;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var4 = var4.VoiceMessageRecordingResult;
                    var5 = var4.CANCELLED_ON_BACKGROUND;
                    var4 = 'active';
                    var4 = var4 !== var3;
                    if(var4) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var8 = 'inactive';
                    var8 = var8 !== var10;
                    if(!var8) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var9 = 'background';
                    var8 = var9 !== var10;
case 24:
                    var4 = var8;
case 22:
                    if(var4) { _fun0003_ip = 26; continue _fun0003 }
case 27:
                    var5 = var6 === var5;
                    var4 = !var5;
case 26:
                    if(var4) { _fun0003_ip = 28; continue _fun0003 }
case 29:
                    var5 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var4 = 30;
                    var4 = var11[var4];
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.open;
                    var4 = {};
                    var8 = 'VOICE_MESSAGE_CANCELLED_ON_BACKGROUND';
                    var4['key'] = var8;
                    var10 = _closure1_slot0;
                    var7 = 31;
                    var8 = var11[var7];
                    var8 = var10.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.JM7Y2D;
                    var7 = var8.bind(var9)(var7);
                    var4['content'] = var7;
                    var7 = function icon() {
                        var1 = _closure1_slot28;
                        return var1;
                    };
                    var4['icon'] = var7;
                    var7 = 'bottom';
                    var4['position'] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot9;
                    var4 = null;
                    var5['current'] = var4;
case 28:
                    var2 = _closure2_slot8;
                    var2['current'] = var3;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var2 = _closure3_slot0;
                var1 = var2.remove;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            return var1;
        };
        var10 = new Array(0);
        var10 = var12.bind(var7)(var11, var10);
        var12 = var7.useEffect;
        var11 = new Array(2);
        var11[0] = var21;
        var11[1] = var3;
        var10 = function() {
            var4 = _closure2_slot7;
            var3 = true;
            var4['current'] = var3;
            var2 = _closure2_slot4;
            var2 = var2.current;
            var _closure3_slot0 = var2;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var4 = false;
                    var1['current'] = var4;
                    var5 = _closure1_slot15;
                    var3 = var5.getState;
                    var5 = var3.bind(var5)();
                    var3 = var5.showRecordingOverlay;
                    if(var3) { _fun0004_ip = 30; continue _fun0004 }
case 31:
                    var6 = var5.recordingStatus;
                    var5 = null;
                    var3 = var5 != var6;
case 30:
                    if(var3) { _fun0004_ip = 32; continue _fun0004 }
case 33:
                    var3 = _closure3_slot0;
case 32:
                    if(!var3) { _fun0004_ip = 34; continue _fun0004 }
case 35:
                    var2 = _closure2_slot6;
                    var3 = undefined;
                    var2 = var2.bind(var3)(var4);
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.endAudioRecording;
                    var1 = var1.bind(var2)();
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            return var1;
        };
        var10 = var12.bind(var7)(var10, var11);
        var10 = 16;
        var10 = var16[var10];
        var11 = var15.bind(var4)(var10);
        var10 = var11.useIsModalOpen;
        var10 = var10.bind(var11)();
        var23 = var7.useEffect;
        var12 = new Array(3);
        var12[0] = var21;
        var12[1] = var3;
        var12[2] = var18;
        var11 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
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
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0006_ip = 36; continue _fun0006 }
case 37:
                                var3 = _closure1_slot15;
                                var2 = var3.getState;
                                var2 = var2.bind(var3)();
                                var3 = var2.showRecordingOverlay;
                                if(var3) { _fun0006_ip = 35; continue _fun0006 }
case 38:
                                var3 = var2.recordingStatus;
                                var2 = null;
                                if(!(var2 == var3)) { _fun0006_ip = 35; continue _fun0006 }
case 39:
                                var2 = _closure2_slot4;
                                var2 = var2.current;
                                if(!var2) { _fun0006_ip = 40; continue _fun0006 }
case 35:
                                var3 = _closure2_slot6;
                                var5 = undefined;
                                var2 = false;
                                var2 = var3.bind(var5)(var2);
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var3 = 18;
                                var2 = var2[var3];
                                var4 = var4.bind(var5)(var2);
                                var2 = var4.endAudioRecording;
                                var2 = var2.bind(var4)();
                                SaveGenerator(address=116);
case 41:
                                return var2;
case 42:
                                ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                                if(var4) { _fun0006_ip = 43; continue _fun0006 }
case 13:
                                var4 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = var8[var3];
                                var7 = var4.bind(var5)(var3);
                                var6 = var7.emitVoiceMessageRecorded;
                                var3 = 23;
                                var3 = var8[var3];
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.VoiceMessageRecordingResult;
                                var5 = var3.CANCELLED_GESTURE_CONFLICT;
                                var3 = var2.data;
                                var4 = var3.durationSecs;
                                var3 = var2.startTimeMillis;
                                var3 = var6.bind(var7)(var5, var4, var3);
case 40:
                                var3 = undefined;
                                return var3;
case 43:
                                return var2;
case 36:
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
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var2 = _closure1_slot8;
                        var1 = var2.isOpen;
                        var1 = var1.bind(var2)();
                        if(!var1) { _fun0007_ip = 7; continue _fun0007 }
case 44:
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
case 7:
                        var1 = undefined;
                        return var1;
                    }
                };
                var _closure3_slot2 = var7;
                var5 = function handleNavigationChange() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 32;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getFocusedChannelId;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        if(!(var2 == var3)) { _fun0008_ip = 45; continue _fun0008 }
case 31:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
                        _fun0008_ip = 9; continue _fun0008;
case 45:
                        var2 = _closure2_slot1;
                        if(!(var3 !== var2)) { _fun0008_ip = 9; continue _fun0008 }
case 46:
                        var2 = _closure3_slot0;
                        var2 = var2.bind(var1)();
case 9:
                        return var1;
                    }
                };
                var _closure3_slot3 = var5;
                var4 = undefined;
                var2 = var2.bind(var4)();
                var6 = _closure1_slot8;
                var3 = var6.addReactChangeListener;
                var3 = var3.bind(var6)(var7);
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 33;
                var2 = var6[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.getRootNavigationRef;
                var4 = var2.bind(var3)();
                var2 = null;
                if(!(var2 != var4)) { _fun0005_ip = 13; continue _fun0005 }
case 47:
                var3 = var4.addListener;
                var2 = 'state';
                var2 = var3.bind(var4)(var2, var5);
case 13:
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var5 = _closure1_slot8;
                        var4 = var5.removeReactChangeListener;
                        var3 = _closure3_slot2;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 33;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getRootNavigationRef;
                        var5 = var3.bind(var4)();
                        var3 = null;
                        if(!(var3 != var5)) { _fun0009_ip = 25; continue _fun0009 }
case 32:
                        var4 = var5.removeListener;
                        var3 = _closure3_slot3;
                        var2 = 'state';
                        var2 = var4.bind(var5)(var2, var3);
case 25:
                        return var1;
                    }
                };
                return var1;
            }
        };
        var11 = var23.bind(var7)(var11, var12);
        var12 = var7.useEffect;
        var11 = new Array(2);
        var11[0] = var14;
        var11[1] = var10;
        var10 = function() {
            var3 = _closure1_slot13;
            var2 = {};
            var1 = _closure2_slot3;
            var2['currWaveHeight'] = var1;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var10 = var12.bind(var7)(var10, var11);
        var14 = var7.useCallback;
        var10 = _closure1_slot3;
        var11 = function* () {
            var1 = function* anon_0_() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0010_ip = 48; continue _fun0010 }
case 37:
                    var2 = undefined;
                    var8 = undefined;
                    var12 = undefined;
                    var9 = undefined;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var10 = 16;
                    var3 = var3[var10];
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.isModalOpen;
                    var5 = var3.bind(var5)();
                    var6 = false;
                    var3 = false;
                    if(!var5) { _fun0010_ip = 15; continue _fun0010 }
case 2:
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var5 = var5[var10];
                    var7 = var7.bind(var2)(var5);
                    var5 = var7.getOpenModalKey;
                    var11 = var5.bind(var7)();
                    var5 = null;
                    var5 = var5 == var11;
                    if(var5) { _fun0010_ip = 49; continue _fun0010 }
case 22:
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 17;
                    var7 = var13[var7];
                    var10 = var10.bind(var2)(var7);
                    var7 = var10.isVoiceChannelModalKey;
                    var7 = var7.bind(var10)(var11);
                    var5 = !var7;
case 49:
                    var3 = var5;
case 15:
                    if(var3) { _fun0010_ip = 50; continue _fun0010 }
case 51:
                    var3 = _closure2_slot7;
                    var3 = var3.current;
                    if(!var3) { _fun0010_ip = 50; continue _fun0010 }
case 52:
                    var7 = _closure1_slot8;
                    var3 = var7.isOpen;
                    var3 = var3.bind(var7)();
                    if(var3) { _fun0010_ip = 50; continue _fun0010 }
case 53:
                    var10 = _closure1_slot10;
                    var7 = var10.getChannel;
                    var3 = _closure2_slot1;
                    var3 = var7.bind(var10)(var3);
                    var11 = null;
                    if(!(var11 != var3)) { _fun0010_ip = 50; continue _fun0010 }
case 54:
                    var3 = _closure2_slot6;
                    var10 = true;
                    var3 = var3.bind(var2)(var10);
                    var7 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 29;
                    var3 = var13[var3];
                    var3 = var7.bind(var2)(var3);
                    var14 = var3.ComponentDispatch;
                    var7 = var14.dispatch;
                    var3 = _closure1_slot20;
                    var3 = var3.VOICE_MESSAGE_BUTTON_PRESSED;
                    var3 = var7.bind(var14)(var3);
                    var7 = _closure1_slot1;
                    var3 = 34;
                    var3 = var13[var3];
                    var13 = var7.bind(var2)(var3);
                    var7 = var13.requestPermission;
                    var3 = _closure1_slot24;
                    var3 = var3.AUDIO;
                    var3 = var7.bind(var13)(var3);
                    SaveGenerator(address=300);
case 55:
                    return var3;
case 56:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                    if(!var3) { _fun0010_ip = 50; continue _fun0010 }
case 59:
                    var7 = _closure2_slot4;
                    var7 = var7.current;
                    if(!var7) { _fun0010_ip = 50; continue _fun0010 }
case 60:
                    var7 = _closure1_slot17;
                    var7 = var7.bind(var2)();
                    var7 = global;
                    var13 = var7.performance;
                    var7 = var13.now;
                    var12 = var7.bind(var13)();
                    var7 = _closure1_slot16;
                    var7 = var7.bind(var2)(var10);
case 61: // try_start_0
                    var13 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var10 = 18;
                    var7 = var7[var10];
                    var14 = var13.bind(var2)(var7);
                    var13 = var14.startAudioRecording;
                    var7 = var12;
                    var7 = var13.bind(var14)(var7);
                    SaveGenerator(address=402);
case 62:
                    return var7;
case 63:
                    ResumeGenerator(result_out_reg=6, return_bool_out_reg=12);
                    if(var13) { _fun0010_ip = 64; continue _fun0010 }
case 65: // try_end0
                    var14 = _closure1_slot15;
                    var13 = var14.getState;
                    var13 = var13.bind(var14)();
                    var9 = var13;
                    var13 = var13.recordingId;
                    if(!(var13 === var12)) { _fun0010_ip = 50; continue _fun0010 }
case 66:
                    var9 = var9.voiceMessageAnimationState;
                    var8 = var9;
                    var11 = var11 == var9;
                    var9 = undefined;
                    if(var11) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                    var11 = var8;
                    var8 = var11.get;
                    var11 = var8.bind(var11)();
                    var8 = 1;
                    var9 = var11[var8];
case 67:
                    var8 = _closure1_slot18;
                    var8 = var8.LOCKED;
                    if(!(var9 !== var8)) { _fun0010_ip = 69; continue _fun0010 }
case 70:
                    var8 = _closure2_slot4;
                    var8 = var8.current;
                    if(var8) { _fun0010_ip = 69; continue _fun0010 }
case 71:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.endAudioRecording;
                    var8 = var8.bind(var9)();
                    _fun0010_ip = 50; continue _fun0010;
case 69:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var8 = var8[var10];
                    var9 = var9.bind(var2)(var8);
                    var8 = var9.triggerHaptic;
                    var8 = var8.bind(var9)();
                    _fun0010_ip = 50; continue _fun0010;
case 64:
                    return var7;
case 72: // catch_target0
                    CatchBlockStart(arg_register=6);
                    var5 = _closure2_slot6;
                    var5 = var5.bind(var2)(var6);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 35;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.showVoiceRecordingFailed;
                    var4 = var4.bind(var5)();
                    var4 = undefined;
                    return var4;
case 57:
                    return var3;
case 50:
                    return var2;
case 48:
                    return var1;
                }
            };
            return var1;
        };
        var12 = var10.bind(var4)(var11);
        var11 = new Array(3);
        var11[0] = var21;
        var11[1] = var3;
        var11[2] = var18;
        var18 = var14.bind(var7)(var12, var11);
        var _closure2_slot11 = var18;
        var14 = var7.useCallback;
        var12 = function Z(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var3 = _closure2_slot2;
                var2 = var3.get;
                var3 = var2.bind(var3)();
                var2 = 1;
                var3 = var3[var2];
                if(!(var3 !== var4)) { _fun0011_ip = 73; continue _fun0011 }
case 74:
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
                var2 = 19;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.runOnJS;
                var1 = _closure1_slot33;
                var1 = var3.bind(var4)(var1);
                var1 = var1.bind(var2)();
case 73:
                var1 = undefined;
                return var1;
            }
        };
        var11 = {};
        var11['voiceMessageAnimationState'] = var19;
        var22 = var16[var22];
        var22 = var15.bind(var4)(var22);
        var22 = var22.runOnJS;
        var11['runOnJS'] = var22;
        var22 = _closure1_slot33;
        var11['triggerHapticGuarded'] = var22;
        var12['__closure'] = var11;
        var11 = 9127775028714.0;
        var12['__workletHash'] = var11;
        var11 = _closure1_slot29;
        var12['__initData'] = var11;
        var11 = new Array(1);
        var11[0] = var19;
        var14 = var14.bind(var7)(var12, var11);
        var _closure2_slot12 = var14;
        var12 = var7.useCallback;
        var11 = new Array(4);
        var11[0] = var19;
        var11[1] = var21;
        var11[2] = var13;
        var11[3] = var3;
        var3 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure2_slot4;
                var2 = var2.current;
                if(var2) { _fun0012_ip = 75; continue _fun0012 }
case 5:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 18;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.endAudioRecording;
                var2 = var2.bind(var3)();
                _fun0012_ip = 76; continue _fun0012;
case 75:
                var2 = _closure2_slot6;
                var3 = undefined;
                var4 = false;
                var2 = var2.bind(var3)(var4);
                var5 = _closure2_slot2;
                var2 = var5.get;
                var5 = var2.bind(var5)();
                var2 = 1;
                var6 = var5[var2];
                var5 = _closure1_slot18;
                var5 = var5.SENDING;
                if(!(var5 !== var6)) { _fun0012_ip = 77; continue _fun0012 }
case 78:
                var5 = _closure1_slot18;
                var5 = var5.CANCELLING;
                if(!(var5 !== var6)) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                var5 = _closure1_slot18;
                var5 = var5.LOCKING;
                if(!(var5 !== var6)) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 18;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.endAudioRecording;
                var5 = var5.bind(var6)();
                _fun0012_ip = 76; continue _fun0012;
case 81:
                var5 = _closure1_slot12;
                var5 = var5.bind(var3)(var4);
                var7 = _closure2_slot2;
                var6 = var7.set;
                var8 = _closure1_slot18;
                var9 = var8.LOCKING;
                var5 = new Array(2);
                var5[0] = var9;
                var8 = var8.LOCKED;
                var5[1] = var8;
                var5 = var6.bind(var7)(var5);
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 19;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.runOnJS;
                var2 = _closure1_slot33;
                var2 = var5.bind(var6)(var2);
                var2 = var2.bind(var3)();
                var2 = undefined;
                return var2;
case 79:
                var5 = _closure2_slot10;
                var2 = {};
                var6 = true;
                var2['isCancelling'] = var6;
                var2 = var5.bind(var3)(var2);
                _fun0012_ip = 76; continue _fun0012;
case 77:
                var2 = _closure2_slot10;
                var1 = {};
                var1['isCancelling'] = var4;
                var1 = var2.bind(var3)(var1);
case 76:
                var1 = undefined;
                return var1;
            }
        };
        var13 = var12.bind(var7)(var3, var11);
        var _closure2_slot13 = var13;
        var3 = 36;
        var3 = var16[var3];
        var11 = var6.bind(var4)(var3);
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 83; continue _fun0013 }
case 84:
                    var2 = _closure2_slot11;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=24);
case 85:
                    return var2;
case 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 87; continue _fun0013 }
case 74:
                    var7 = _closure1_slot12;
                    var6 = false;
                    var6 = var7.bind(var3)(var6);
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var7 = _closure1_slot18;
                    var8 = var7.LOCKED;
                    var4 = new Array(2);
                    var4[0] = var8;
                    var7 = var7.LOCKED;
                    var4[1] = var7;
                    var4 = var5.bind(var6)(var4);
                    return var3;
case 87:
                    return var2;
case 83:
                    return var1;
                }
            };
            return var1;
        };
        var10 = var10.bind(var4)(var3);
        var12 = 31;
        var3 = var16[var12];
        var3 = var15.bind(var4)(var3);
        var22 = var3.intl;
        var21 = var22.string;
        var3 = var16[var12];
        var3 = var15.bind(var4)(var3);
        var3 = var3.t;
        var3 = var3.lwy6aX;
        var3 = var21.bind(var22)(var3);
        var3 = var11.bind(var4)(var10, var3);
        var11 = var3.accessibilityActions;
        var10 = var3.onAccessibilityAction;
        var3 = 0.5;
        var3 = var3 * var17;
        var2 = var2 - var17;
        var17 = var3 + var2;
        var _closure2_slot14 = var17;
        var3 = var7.useMemo;
        var2 = new Array(7);
        var2[0] = var9;
        var2[1] = var20;
        var2[2] = var19;
        var2[3] = var18;
        var2[4] = var17;
        var2[5] = var14;
        var2[6] = var13;
        var1 = function() {
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 37;
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
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.numberOfTouches;
                    var1 = 1;
                    var1 = var2 > var1;
                    if(var1) { _fun0014_ip = 88; continue _fun0014 }
case 89:
                    var3 = _closure2_slot5;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
case 88:
                    if(var1) { _fun0014_ip = 90; continue _fun0014 }
case 91:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 19;
                    var1 = var5[var3];
                    var2 = undefined;
                    var8 = var4.bind(var2)(var1);
                    var7 = var8.runOnJS;
                    var1 = _closure1_slot12;
                    var7 = var7.bind(var8)(var1);
                    var1 = true;
                    var1 = var7.bind(var2)(var1);
                    var8 = _closure2_slot2;
                    var7 = var8.set;
                    var9 = _closure1_slot18;
                    var10 = var9.SENDING;
                    var6 = new Array(2);
                    var6[0] = var10;
                    var9 = var9.SENDING;
                    var6[1] = var9;
                    var6 = var7.bind(var8)(var6);
                    var3 = var5[var3];
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.runOnJS;
                    var1 = _closure2_slot11;
                    var1 = var3.bind(var4)(var1);
                    var1 = var1.bind(var2)();
case 90:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = {};
            var13 = _closure2_slot5;
            var11['isGestureActiveValue'] = var13;
            var7 = 19;
            var12 = var10[var7];
            var12 = var9.bind(var8)(var12);
            var12 = var12.runOnJS;
            var11['runOnJS'] = var12;
            var12 = _closure1_slot12;
            var11['setIsUsingHoldGesture'] = var12;
            var12 = _closure2_slot2;
            var11['voiceMessageAnimationState'] = var12;
            var12 = _closure1_slot18;
            var11['VoiceMessageAnimationState'] = var12;
            var14 = _closure2_slot11;
            var11['startRecording'] = var14;
            var2['__closure'] = var11;
            var11 = 15771181123252.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot32;
            var2['__initData'] = var11;
            var5 = var3.bind(var5)(var2);
            var3 = var5.onUpdate;
            var2 = function t(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    if(!var3) { _fun0015_ip = 92; continue _fun0015 }
case 93:
                    var4 = var2.translationY;
                    var3 = -40;
                    if(!(var4 <= var3)) { _fun0015_ip = 75; continue _fun0015 }
case 31:
                    var4 = var2.absoluteX;
                    var3 = _closure2_slot14;
                    if(!(!(var4 >= var3))) { _fun0015_ip = 94; continue _fun0015 }
case 75:
                    var4 = var2.absoluteX;
                    var3 = _closure2_slot14;
                    if(!(!(var4 < var3))) { _fun0015_ip = 95; continue _fun0015 }
case 96:
                    var3 = var2.absoluteX;
                    var2 = _closure2_slot14;
                    if(!(var3 >= var2)) { _fun0015_ip = 92; continue _fun0015 }
case 25:
                    var4 = _closure2_slot12;
                    var2 = _closure1_slot18;
                    var3 = var2.SENDING;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0015_ip = 92; continue _fun0015;
case 95:
                    var4 = _closure2_slot12;
                    var2 = _closure1_slot18;
                    var3 = var2.CANCELLING;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0015_ip = 92; continue _fun0015;
case 94:
                    var3 = _closure2_slot12;
                    var1 = _closure1_slot18;
                    var2 = var1.LOCKING;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 92:
                    var1 = undefined;
                    return var1;
                }
            };
            var11 = {};
            var11['isGestureActiveValue'] = var13;
            var13 = 40;
            var11['LOCK_THRESHOLD'] = var13;
            var13 = _closure2_slot14;
            var11['cancelThresholdX'] = var13;
            var13 = _closure2_slot12;
            var11['handleUpdateValue'] = var13;
            var11['VoiceMessageAnimationState'] = var12;
            var2['__closure'] = var11;
            var11 = 9262214665783.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot31;
            var2['__initData'] = var11;
            var3 = var3.bind(var5)(var2);
            var2 = var3.onFinalize;
            var1 = function e() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.runOnJS;
                var2 = _closure2_slot13;
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var1)();
                return var1;
            };
            var5 = {};
            var7 = var10[var7];
            var7 = var9.bind(var8)(var7);
            var7 = var7.runOnJS;
            var5['runOnJS'] = var7;
            var6 = _closure2_slot13;
            var5['handleFinalize'] = var6;
            var1['__closure'] = var5;
            var5 = 2411654680943.0;
            var1['__workletHash'] = var5;
            var4 = _closure1_slot30;
            var1['__initData'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var7 = var3.bind(var7)(var1, var2);
        var1 = 38;
        var1 = var16[var1];
        var1 = var6.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var13 = var1.tooltipTargetRef;
        var3 = _closure1_slot25;
        var1 = 37;
        var1 = var16[var1];
        var1 = var15.bind(var4)(var1);
        var2 = var1.GestureDetector;
        var1 = {};
        var1['gesture'] = var7;
        var7 = _closure1_slot25;
        var5 = 39;
        var5 = var16[var5];
        var6 = var6.bind(var4)(var5);
        var5 = {};
        var5['ref'] = var13;
        var13 = 40;
        var13 = var16[var13];
        var13 = var15.bind(var4)(var13);
        var13 = var13.MicrophoneIcon;
        var5['IconComponent'] = var13;
        var13 = false;
        var5['active'] = var13;
        var13 = var16[var12];
        var13 = var15.bind(var4)(var13);
        var14 = var13.intl;
        var13 = var14.string;
        var12 = var16[var12];
        var12 = var15.bind(var4)(var12);
        var12 = var12.t;
        var12 = var12.lwy6aX;
        var12 = var13.bind(var14)(var12);
        var5['accessibilityLabel'] = var12;
        var5['accessibilityActions'] = var11;
        var5['onAccessibilityAction'] = var10;
        var5['disabled'] = var9;
        var5['style'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 41;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_messages/native/components/VoiceMessageButton.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
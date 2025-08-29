// app/modules/video_calls/native/components/ChannelCallModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var4 = function ChannelCallCameraPreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.channel;
            var1 = _closure1_slot11;
            var5 = undefined;
            var10 = var1.bind(var5)();
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 9;
            var1 = var8[var1];
            var2 = var4.bind(var5)(var1);
            var1 = var2.useIsConnectedToVoiceChannel;
            var3 = var1.bind(var2)(var11);
            var2 = _closure1_slot9;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.focus;
                return var1;
            };
            var9 = var2.bind(var5)(var1);
            var2 = 10;
            var1 = var8[var2];
            var7 = var4.bind(var5)(var1);
            var1 = var7.useRevealProviderValue;
            var7 = var1.bind(var7)(var9, var11);
            var1 = 11;
            var1 = var8[var1];
            var8 = var4.bind(var5)(var1);
            var4 = var8.isModalOpen;
            var1 = _closure1_slot30;
            var9 = var4.bind(var8)(var1);
            var1 = null;
            if(!var3) { _fun0001_ip = 218; continue _fun0001 }
 124:
            var4 = _closure1_slot14;
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = var12[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.RevealContext;
            var3 = var2.Provider;
            var2 = {};
            var2['value'] = var7;
            var8 = _closure1_slot14;
            var7 = _closure1_slot1;
            var6 = 12;
            var6 = var12[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['channel'] = var11;
            var10 = !var10;
            var6['participantScreenIsFocused'] = var10;
            var6['isChannelCallModalOpen'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 218:
            return var1;
        }
    };
    var _closure1_slot29 = var4;
    var2 = function ChannelCallModal(arg1) {
        var1 = arg1;
        var1 = var1.channel;
        var4 = _closure1_slot14;
        var3 = _closure1_slot28;
        var2 = {};
        var5 = var1.id;
        var2['channelId'] = var5;
        var1 = var1.guild_id;
        var2['guildId'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot30 = var2;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var5 = {};
    var8 = true;
    var5['value'] = var8;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var11 = var7[var5];
    var5 = metroImportAll;
    var12 = var5.bind(var1)(var11);
    var _closure1_slot4 = var12;
    var5 = 2;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.useChannelCallOrientationHandlers;
    var _closure1_slot7 = var9;
    var9 = var5.resetChannelCallStore;
    var _closure1_slot8 = var9;
    var9 = var5.useChannelCallStore;
    var _closure1_slot9 = var9;
    var9 = var5.setVoiceChatDrawerState;
    var _closure1_slot10 = var9;
    var5 = var5.useIsVoiceChatFocused;
    var _closure1_slot11 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.VoiceChatDrawerState;
    var _closure1_slot12 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.SWIPE_TO_CHAT_ACTIVE_OFFSET;
    var _closure1_slot13 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.ModalAnimation;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var11 = var5.jsx;
    var _closure1_slot14 = var11;
    var5 = var5.jsxs;
    var _closure1_slot15 = var5;
    var11 = var12.memo;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var6 = var2.channelId;
            var7 = _closure1_slot4;
            var4 = var7.useState;
            var5 = _closure1_slot6;
            var3 = var5.getChannel;
            var3 = var3.bind(var5)(var6);
            var6 = var4.bind(var7)(var3);
            var4 = _closure1_slot3;
            var5 = undefined;
            var3 = 1;
            var4 = var4.bind(var5)(var6, var3);
            var3 = 0;
            var6 = var4[var3];
            var _closure2_slot0 = var6;
            var3 = _closure1_slot7;
            var3 = var3.bind(var5)(var6);
            var4 = var7.useEffect;
            var3 = new Array(1);
            var3[0] = var6;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 17; continue _fun0003 }
 13:
                    var2 = undefined;
                    return var2;
 17:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.initialize;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                            var4 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var1 = 13;
                            var3 = var5[var1];
                            var1 = undefined;
                            var6 = var4.bind(var1)(var3);
                            var3 = var6.terminate;
                            var3 = var3.bind(var6)();
                            var3 = 14;
                            var3 = var5[var3];
                            var6 = var4.bind(var1)(var3);
                            var4 = var6.setHidden;
                            var3 = false;
                            var3 = var4.bind(var6)(var3);
                            var4 = _closure1_slot0;
                            var3 = 11;
                            var3 = var5[var3];
                            var5 = var4.bind(var1)(var3);
                            var4 = var5.isModalOpen;
                            var3 = _closure1_slot30;
                            var3 = var4.bind(var5)(var3);
                            if(var3) { _fun0004_ip = 102; continue _fun0004 }
 94:
                            var2 = _closure1_slot8;
                            var2 = var2.bind(var1)();
 102:
                            return var1;
                        }
                    };
                    return var1;
                }
            };
            var1 = var4.bind(var7)(var1, var3);
            var1 = null;
            var3 = var1 == var6;
            if(var3) { _fun0002_ip = 144; continue _fun0002 }
 108:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 15;
            var2 = var7[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var2['channel'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 144:
            return var1;
        }
    };
    var5 = var11.bind(var12)(var5);
    var _closure1_slot16 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx1(){const{width}=this.__closure;return[0,-width];}';
    var5['code'] = var11;
    var _closure1_slot17 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx2(){const{runOnJS,dismissKeyboard}=this.__closure;runOnJS(dismissKeyboard)();}';
    var5['code'] = var11;
    var _closure1_slot18 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx3(){const{voiceChatDrawerStoreState}=this.__closure;return voiceChatDrawerStoreState;}';
    var5['code'] = var11;
    var _closure1_slot19 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx4(){const{translateX,width}=this.__closure;translateX.set(-width);}';
    var5['code'] = var11;
    var _closure1_slot20 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx5(){const{isSwipeToChatInProgress,translateX,width,voiceChatDrawerState,VoiceChatDrawerState}=this.__closure;const chatGestureFinished=!isSwipeToChatInProgress.get();const drawerIsInSettledPosition=translateX.get()===-width||translateX.get()===0;const chatOpen=voiceChatDrawerState.get()===VoiceChatDrawerState.OPEN;const chatClosed=voiceChatDrawerState.get()===VoiceChatDrawerState.CLOSED;if(chatGestureFinished&&drawerIsInSettledPosition){return translateX.get()===-width?VoiceChatDrawerState.OPEN:VoiceChatDrawerState.CLOSED;}else if(chatOpen&&translateX.get()>-width){return VoiceChatDrawerState.CLOSING;}else if(chatClosed&&translateX.get()<0){return VoiceChatDrawerState.OPENING;}else{return null;}}';
    var5['code'] = var11;
    var _closure1_slot21 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx6(state,previousState){const{runOnJS,setVoiceChatDrawerState,channelId,VoiceChatDrawerState,transitionToVoiceRoute,guildId}=this.__closure;if(state===previousState)return;if(state!=null&&state!==previousState){runOnJS(setVoiceChatDrawerState)(channelId,state);if(state===VoiceChatDrawerState.OPEN){runOnJS(transitionToVoiceRoute)(guildId,channelId);}}}';
    var5['code'] = var11;
    var _closure1_slot22 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx7(){const{voiceChatDrawerState}=this.__closure;return voiceChatDrawerState.get();}';
    var5['code'] = var11;
    var _closure1_slot23 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx8(drawerState,drawerStatePrev){const{VoiceChatDrawerState,translateX,withPanGestureTiming}=this.__closure;if(drawerState===VoiceChatDrawerState.CLOSED&&drawerStatePrev===VoiceChatDrawerState.OPEN){translateX.set(withPanGestureTiming(0));}}';
    var5['code'] = var11;
    var _closure1_slot24 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx9(){const{interpolate,translateY,maxVerticalTranslate}=this.__closure;return{flex:1,transform:[{translateY:interpolate(translateY.get(),[0,maxVerticalTranslate],[0,maxVerticalTranslate])}]};}';
    var5['code'] = var11;
    var _closure1_slot25 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx10(){const{immediate,translateX,width,withPanGestureTiming}=this.__closure;if(immediate===true){translateX.set(-width);}else{translateX.set(withPanGestureTiming(-width));}}';
    var5['code'] = var11;
    var _closure1_slot26 = var5;
    var5 = {};
    var11 = 'function ChannelCallModalTsx11(){const{translateX,withPanGestureTiming}=this.__closure;translateX.set(withPanGestureTiming(0));}';
    var5['code'] = var11;
    var _closure1_slot27 = var5;
    var11 = var12.memo;
    var5 = function(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var2 = arg1;
            var20 = var2.channelId;
            var _closure2_slot0 = var20;
            var31 = var2.guildId;
            var _closure2_slot1 = var31;
            var5 = undefined;
            var _closure2_slot14 = var5;
            var _closure2_slot15 = var5;
            var4 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 19;
            var2 = var14[var2];
            var8 = var4.bind(var5)(var2);
            var7 = var8.useStateFromStores;
            var2 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var2;
            var3 = new Array(1);
            var3[0] = var20;
            var2 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var19 = var7.bind(var8)(var6, var2, var3);
            var6 = _closure1_slot4;
            var2 = var6.useRef;
            var13 = var2.bind(var6)(var5);
            var _closure2_slot2 = var13;
            var2 = var6.useRef;
            var11 = var2.bind(var6)(var5);
            var _closure2_slot3 = var11;
            var2 = var6.useRef;
            var17 = var2.bind(var6)(var5);
            var _closure2_slot4 = var17;
            var2 = var6.useRef;
            var15 = var2.bind(var6)(var5);
            var _closure2_slot5 = var15;
            var9 = 16;
            var2 = var14[var9];
            var7 = var4.bind(var5)(var2);
            var3 = var7.useSharedValue;
            var2 = 0;
            var10 = var3.bind(var7)(var2);
            var _closure2_slot6 = var10;
            var3 = var14[var9];
            var7 = var4.bind(var5)(var3);
            var3 = var7.useSharedValue;
            var23 = var3.bind(var7)(var2);
            var _closure2_slot7 = var23;
            var3 = _closure1_slot9;
            var3 = var3.bind(var5)();
            var18 = var3.voiceChatDrawerState;
            var _closure2_slot8 = var18;
            var3 = var14[var9];
            var8 = var4.bind(var5)(var3);
            var7 = var8.useDerivedValue;
            var3 = function c() {
                var1 = _closure2_slot8;
                return var1;
            };
            var12 = {};
            var12['voiceChatDrawerStoreState'] = var18;
            var3['__closure'] = var12;
            var12 = 4903837231689.0;
            var3['__workletHash'] = var12;
            var12 = _closure1_slot19;
            var3['__initData'] = var12;
            var26 = var7.bind(var8)(var3);
            var _closure2_slot9 = var26;
            var7 = _closure1_slot1;
            var3 = 20;
            var3 = var14[var3];
            var3 = var7.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var8 = var3.width;
            var _closure2_slot10 = var8;
            var12 = var3.height;
            var3 = var14[var9];
            var18 = var4.bind(var5)(var3);
            var3 = var18.useSharedValue;
            var4 = false;
            var18 = var3.bind(var18)(var4);
            var _closure2_slot11 = var18;
            var3 = 0.8;
            var22 = var3 * var12;
            var _closure2_slot12 = var22;
            var3 = 21;
            var3 = var14[var3];
            var3 = var7.bind(var5)(var3);
            var14 = var3.bind(var5)(var20);
            var3 = var6.useState;
            var6 = var3.bind(var6)(var4);
            var4 = _closure1_slot3;
            var3 = 2;
            var4 = var4.bind(var5)(var6, var3);
            var3 = var4[var2];
            var2 = 1;
            var2 = var4[var2];
            var _closure2_slot13 = var2;
            var2 = var14;
            if(var2) { _fun0005_ip = 455; continue _fun0005 }
 433:
            var4 = null;
            var4 = var4 != var19;
            if(!var4) { _fun0005_ip = 452; continue _fun0005 }
 442:
            var6 = var19.isGuildStageVoice;
            var4 = var6.bind(var19)();
 452:
            var2 = var4;
 455:
            var7 = !var2;
            var4 = {};
            var4['channelId'] = var20;
            var4['guildId'] = var31;
            _closure2_slot14 = var4;
            var21 = _closure1_slot4;
            var2 = var21.useRef;
            var2 = var2.bind(var21)(var4);
            _closure2_slot15 = var2;
            var4 = var21.useEffect;
            var2 = function() {
                var2 = _closure2_slot15;
                var1 = _closure2_slot14;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var21)(var2);
            var6 = var21.useEffect;
            var4 = new Array(2);
            var4[0] = var8;
            var4[1] = var10;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot15;
                    var1 = var1.current;
                    var4 = var1.channelId;
                    var3 = var1.guildId;
                    var2 = _closure1_slot9;
                    var1 = var2.getState;
                    var1 = var1.bind(var2)();
                    var2 = var1.voiceChatDrawerState;
                    var1 = _closure1_slot12;
                    var1 = var1.OPEN;
                    var1 = var2 === var1;
                    if(var1) { _fun0006_ip = 77; continue _fun0006 }
 62:
                    var5 = _closure1_slot5;
                    var2 = var5.getChatOpen;
                    var1 = var2.bind(var5)(var4);
 77:
                    if(!var1) { _fun0006_ip = 221; continue _fun0006 }
 83:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var1 = 16;
                    var5 = var8[var1];
                    var2 = undefined;
                    var9 = var7.bind(var2)(var5);
                    var6 = var9.runOnUI;
                    var5 = function t() {
                        var3 = _closure2_slot6;
                        var2 = var3.set;
                        var1 = _closure2_slot10;
                        var1 = -var1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var11 = {};
                    var13 = _closure2_slot6;
                    var11['translateX'] = var13;
                    var12 = _closure2_slot10;
                    var11['width'] = var12;
                    var5['__closure'] = var11;
                    var11 = 15726690166344.0;
                    var5['__workletHash'] = var11;
                    var10 = _closure1_slot20;
                    var5['__initData'] = var10;
                    var5 = var6.bind(var9)(var5);
                    var5 = var5.bind(var2)();
                    var1 = var8[var1];
                    var6 = var7.bind(var2)(var1);
                    var5 = var6.runOnJS;
                    var1 = 22;
                    var1 = var8[var1];
                    var1 = var7.bind(var2)(var1);
                    var1 = var1.transitionToVoiceRoute;
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.bind(var2)(var3, var4);
 221:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var6.bind(var21)(var2, var4);
            var21 = _closure1_slot1;
            var29 = _closure1_slot2;
            var2 = 23;
            var4 = var29[var2];
            var6 = var21.bind(var5)(var4);
            var4 = 24;
            var4 = var29[var4];
            var4 = var21.bind(var5)(var4);
            var4 = var4.CHANNEL_CALL;
            var4 = var6.bind(var5)(var4);
            var6 = var4.analyticsLocations;
            var28 = _closure1_slot0;
            var4 = var29[var9];
            var25 = var28.bind(var5)(var4);
            var24 = var25.useAnimatedReaction;
            var21 = function te() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot11;
                    var1 = var3.get;
                    var1 = var1.bind(var3)();
                    var8 = !var1;
                    var3 = _closure2_slot6;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = _closure2_slot10;
                    var1 = -var1;
                    var7 = var3 === var1;
                    if(var7) { _fun0007_ip = 65; continue _fun0007 }
 46:
                    var3 = _closure2_slot6;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = 0;
                    var7 = var1 === var3;
 65:
                    var9 = _closure2_slot9;
                    var1 = var9.get;
                    var5 = var1.bind(var9)();
                    var4 = _closure1_slot12;
                    var1 = var4.OPEN;
                    var6 = var9.get;
                    var6 = var6.bind(var9)();
                    var4 = var4.CLOSED;
                    if(!var8) { _fun0007_ip = 112; continue _fun0007 }
 109:
                    if(var7) { _fun0007_ip = 194; continue _fun0007 }
 112:
                    if(!(var5 === var1)) { _fun0007_ip = 140; continue _fun0007 }
 116:
                    var5 = _closure2_slot6;
                    var1 = var5.get;
                    var5 = var1.bind(var5)();
                    var1 = _closure2_slot10;
                    var1 = -var1;
                    if(!(!(var5 > var1))) { _fun0007_ip = 182; continue _fun0007 }
 140:
                    var1 = null;
                    if(!(var6 === var4)) { _fun0007_ip = 180; continue _fun0007 }
 146:
                    var6 = _closure2_slot6;
                    var4 = var6.get;
                    var6 = var4.bind(var6)();
                    var4 = 0;
                    var4 = var6 < var4;
                    var1 = null;
                    if(!var4) { _fun0007_ip = 180; continue _fun0007 }
 170:
                    var4 = _closure1_slot12;
                    var1 = var4.OPENING;
 180:
                    _fun0007_ip = 192; continue _fun0007;
 182:
                    var4 = _closure1_slot12;
                    var1 = var4.CLOSING;
 192:
                    _fun0007_ip = 243; continue _fun0007;
 194:
                    var5 = _closure2_slot6;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var2 = _closure2_slot10;
                    var2 = -var2;
                    if(!(var4 !== var2)) { _fun0007_ip = 230; continue _fun0007 }
 218:
                    var2 = _closure1_slot12;
                    var2 = var2.CLOSED;
                    _fun0007_ip = 240; continue _fun0007;
 230:
                    var3 = _closure1_slot12;
                    var2 = var3.OPEN;
 240:
                    var1 = var2;
 243:
                    return var1;
                }
            };
            var4 = {};
            var4['isSwipeToChatInProgress'] = var18;
            var4['translateX'] = var10;
            var4['width'] = var8;
            var4['voiceChatDrawerState'] = var26;
            var27 = _closure1_slot12;
            var4['VoiceChatDrawerState'] = var27;
            var21['__closure'] = var4;
            var4 = 16786813095205.0;
            var21['__workletHash'] = var4;
            var4 = _closure1_slot21;
            var21['__initData'] = var4;
            var4 = function ee(arg1, arg2) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var6 = arg1;
                    var1 = arg2;
                    var2 = var6 !== var1;
                    var1 = var2;
                    if(!var2) { _fun0008_ip = 22; continue _fun0008 }
 16:
                    var3 = null;
                    var1 = var3 != var6;
 22:
                    if(!var1) { _fun0008_ip = 28; continue _fun0008 }
 25:
                    var1 = var2;
 28:
                    if(!var1) { _fun0008_ip = 159; continue _fun0008 }
 34:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var2 = 16;
                    var1 = var1[var2];
                    var4 = undefined;
                    var7 = var5.bind(var4)(var1);
                    var5 = var7.runOnJS;
                    var1 = _closure1_slot10;
                    var7 = var5.bind(var7)(var1);
                    var5 = _closure2_slot0;
                    var5 = var7.bind(var4)(var5, var6);
                    var5 = _closure1_slot12;
                    var5 = var5.OPEN;
                    if(!(var6 === var5)) { _fun0008_ip = 159; continue _fun0008 }
 100:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = var7[var2];
                    var5 = var6.bind(var4)(var2);
                    var3 = var5.runOnJS;
                    var2 = 22;
                    var2 = var7[var2];
                    var2 = var6.bind(var4)(var2);
                    var2 = var2.transitionToVoiceRoute;
                    var3 = var3.bind(var5)(var2);
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2, var1);
 159:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var32 = var29[var9];
            var32 = var28.bind(var5)(var32);
            var32 = var32.runOnJS;
            var30['runOnJS'] = var32;
            var32 = _closure1_slot10;
            var30['setVoiceChatDrawerState'] = var32;
            var30['channelId'] = var20;
            var30['VoiceChatDrawerState'] = var27;
            var32 = 22;
            var32 = var29[var32];
            var32 = var28.bind(var5)(var32);
            var32 = var32.transitionToVoiceRoute;
            var30['transitionToVoiceRoute'] = var32;
            var30['guildId'] = var31;
            var4['__closure'] = var30;
            var30 = 14188334620807.0;
            var4['__workletHash'] = var30;
            var30 = _closure1_slot22;
            var4['__initData'] = var30;
            var4 = var24.bind(var25)(var21, var4);
            var4 = var29[var9];
            var25 = var28.bind(var5)(var4);
            var24 = var25.useAnimatedReaction;
            var21 = function ne() {
                var2 = _closure2_slot9;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = {};
            var4['voiceChatDrawerState'] = var26;
            var21['__closure'] = var4;
            var4 = 14044794538420.0;
            var21['__workletHash'] = var4;
            var4 = _closure1_slot23;
            var21['__initData'] = var4;
            var4 = function ae(arg1, arg2) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var2 = _closure1_slot12;
                    var3 = var2.CLOSED;
                    var2 = arg1;
                    var2 = var2 === var3;
                    if(!var2) { _fun0009_ip = 40; continue _fun0009 }
 23:
                    var3 = _closure1_slot12;
                    var4 = var3.OPEN;
                    var3 = arg2;
                    var2 = var3 === var4;
 40:
                    if(!var2) { _fun0009_ip = 95; continue _fun0009 }
 43:
                    var3 = _closure2_slot6;
                    var2 = var3.set;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 18;
                    var4 = var4[var1];
                    var1 = undefined;
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.withPanGestureTiming;
                    var1 = 0;
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
 95:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = {};
            var26['VoiceChatDrawerState'] = var27;
            var26['translateX'] = var10;
            var27 = 18;
            var27 = var29[var27];
            var27 = var28.bind(var5)(var27);
            var27 = var27.withPanGestureTiming;
            var26['withPanGestureTiming'] = var27;
            var4['__closure'] = var26;
            var26 = 260500087614.0;
            var4['__workletHash'] = var26;
            var26 = _closure1_slot24;
            var4['__initData'] = var26;
            var4 = var24.bind(var25)(var21, var4);
            var4 = {};
            var4['isGestureInProgress'] = var18;
            var4['channelId'] = var20;
            var4['width'] = var8;
            var4['translateX'] = var10;
            var3 = !var3;
            if(!var3) { _fun0005_ip = 944; continue _fun0005 }
 941:
            var3 = !var14;
 944:
            var4['enabled'] = var3;
            var3 = function useSwipeToChatGesture(arg1) {
                var1 = arg1;
                var9 = var1.translateX;
                var10 = var1.width;
                var _closure3_slot0 = var10;
                var4 = var1.enabled;
                var6 = var1.isGestureInProgress;
                var14 = _closure1_slot0;
                var11 = _closure1_slot2;
                var13 = 16;
                var3 = var11[var13];
                var5 = undefined;
                var8 = var14.bind(var5)(var3);
                var7 = var8.useDerivedValue;
                var3 = function u() {
                    var1 = _closure3_slot0;
                    var2 = -var1;
                    var1 = [0];
                    var1[1] = var2;
                    return var1;
                };
                var12 = {};
                var12['width'] = var10;
                var3['__closure'] = var12;
                var12 = 15383459308604.0;
                var3['__workletHash'] = var12;
                var12 = _closure1_slot17;
                var3['__initData'] = var12;
                var8 = var7.bind(var8)(var3);
                var12 = _closure1_slot4;
                var7 = var12.useCallback;
                var3 = function c() {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 16;
                    var2 = var6[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var2);
                    var3 = var4.runOnJS;
                    var2 = 17;
                    var2 = var6[var2];
                    var2 = var5.bind(var1)(var2);
                    var2 = var2.dismissKeyboard;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = {};
                var13 = var11[var13];
                var13 = var14.bind(var5)(var13);
                var13 = var13.runOnJS;
                var2['runOnJS'] = var13;
                var13 = 17;
                var13 = var11[var13];
                var13 = var14.bind(var5)(var13);
                var13 = var13.dismissKeyboard;
                var2['dismissKeyboard'] = var13;
                var3['__closure'] = var2;
                var2 = 4086900686382.0;
                var3['__workletHash'] = var2;
                var2 = _closure1_slot18;
                var3['__initData'] = var2;
                var2 = new Array(0);
                var7 = var7.bind(var12)(var3, var2);
                var3 = _closure1_slot1;
                var2 = 18;
                var2 = var11[var2];
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var10 = -var10;
                var2['lowerBounds'] = var10;
                var10 = 0;
                var2['upperBounds'] = var10;
                var2['translate'] = var9;
                var9 = false;
                var2['vertical'] = var9;
                var2['snapPositions'] = var8;
                var2['onStart'] = var7;
                var2['isGestureInProgress'] = var6;
                var3 = var3.bind(var5)(var2);
                var2 = var3.enabled;
                var4 = var2.bind(var3)(var4);
                var3 = var4.failOffsetY;
                var2 = new Array(2);
                var5 = -5;
                var2[0] = var5;
                var5 = 5;
                var2[1] = var5;
                var3 = var3.bind(var4)(var2);
                var2 = var3.activeOffsetX;
                var4 = _closure1_slot13;
                var5 = -var4;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var3.bind(var5)(var4);
            var3 = var4.withRef;
            var18 = var3.bind(var4)(var13);
            var4 = _closure1_slot1;
            var24 = _closure1_slot2;
            var3 = 25;
            var3 = var24[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var3['gestureEnabled'] = var7;
            var3['height'] = var12;
            var3['maxTranslate'] = var22;
            var7 = 0.5;
            var7 = var7 * var12;
            var3['thresholdTranslate'] = var7;
            var3['translateY'] = var23;
            var4 = var4.bind(var5)(var3);
            var3 = var4.withRef;
            var4 = var3.bind(var4)(var15);
            var3 = var4.requireExternalGestureToFail;
            var14 = var3.bind(var4)(var17, var11);
            var7 = _closure1_slot4;
            var12 = var7.useLayoutEffect;
            var4 = new Array(1);
            var4[0] = var20;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.maybeShowAgeGateModal;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var3 = var12.bind(var7)(var3, var4);
            var25 = _closure1_slot0;
            var3 = var24[var9];
            var12 = var25.bind(var5)(var3);
            var4 = var12.useAnimatedStyle;
            var3 = function le() {
                var1 = {};
                var2 = 1;
                var1['flex'] = var2;
                var3 = {};
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 16;
                var4 = var4[var2];
                var2 = undefined;
                var7 = var5.bind(var2)(var4);
                var6 = var7.interpolate;
                var5 = _closure2_slot7;
                var4 = var5.get;
                var5 = var4.bind(var5)();
                var8 = _closure2_slot12;
                var4 = [0];
                var4[1] = var8;
                var2 = [0];
                var2[1] = var8;
                var2 = var6.bind(var7)(var5, var4, var2);
                var3['translateY'] = var2;
                var2 = new Array(1);
                var2[0] = var3;
                var1['transform'] = var2;
                return var1;
            };
            var21 = {};
            var24 = var24[var9];
            var24 = var25.bind(var5)(var24);
            var24 = var24.interpolate;
            var21['interpolate'] = var24;
            var21['translateY'] = var23;
            var21['maxVerticalTranslate'] = var22;
            var3['__closure'] = var21;
            var21 = 8643926178558.0;
            var3['__workletHash'] = var21;
            var21 = _closure1_slot25;
            var3['__initData'] = var21;
            var12 = var4.bind(var12)(var3);
            var4 = var7.useMemo;
            var3 = new Array(7);
            var3[0] = var17;
            var3[1] = var15;
            var3[2] = var13;
            var3[3] = var11;
            var3[4] = var10;
            var3[5] = var8;
            var3[6] = var20;
            var1 = function() {
                var1 = {};
                var4 = _closure2_slot4;
                var1['memberListRef'] = var4;
                var4 = _closure2_slot6;
                var1['translateX'] = var4;
                var4 = _closure2_slot5;
                var1['swipeDismissRef'] = var4;
                var4 = _closure2_slot2;
                var1['swipeToChatRef'] = var4;
                var4 = _closure2_slot3;
                var1['videoGridRef'] = var4;
                var4 = function openChat(arg1) {
                    var10 = arg1;
                    var _closure4_slot0 = var10;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 17;
                    var3 = var9[var1];
                    var1 = undefined;
                    var4 = var8.bind(var1)(var3);
                    var3 = var4.dismissKeyboard;
                    var3 = var3.bind(var4)();
                    var3 = 16;
                    var4 = var9[var3];
                    var7 = var8.bind(var1)(var4);
                    var6 = var7.runOnJS;
                    var4 = _closure1_slot10;
                    var11 = var6.bind(var7)(var4);
                    var6 = _closure2_slot0;
                    var4 = _closure1_slot12;
                    var4 = var4.OPENING;
                    var4 = var11.bind(var1)(var6, var4);
                    var3 = var9[var3];
                    var4 = var8.bind(var1)(var3);
                    var3 = var4.runOnUI;
                    var2 = function n() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = _closure4_slot0;
                            var1 = true;
                            if(!(var1 !== var2)) { _fun0010_ip = 75; continue _fun0010 }
 13:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var4 = 18;
                            var5 = var5[var4];
                            var4 = undefined;
                            var5 = var6.bind(var4)(var5);
                            var4 = var5.withPanGestureTiming;
                            var1 = _closure2_slot10;
                            var1 = -var1;
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            _fun0010_ip = 99; continue _fun0010;
 75:
                            var3 = _closure2_slot6;
                            var2 = var3.set;
                            var1 = _closure2_slot10;
                            var1 = -var1;
                            var1 = var2.bind(var3)(var1);
 99:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = {};
                    var6['immediate'] = var10;
                    var10 = _closure2_slot6;
                    var6['translateX'] = var10;
                    var7 = _closure2_slot10;
                    var6['width'] = var7;
                    var7 = 18;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.withPanGestureTiming;
                    var6['withPanGestureTiming'] = var7;
                    var2['__closure'] = var6;
                    var6 = 16904415853957.0;
                    var2['__workletHash'] = var6;
                    var5 = _closure1_slot26;
                    var2['__initData'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1['openChat'] = var4;
                var3 = function openVoice() {
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 16;
                    var3 = var9[var2];
                    var1 = undefined;
                    var6 = var8.bind(var1)(var3);
                    var4 = var6.runOnJS;
                    var3 = _closure1_slot10;
                    var6 = var4.bind(var6)(var3);
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot12;
                    var3 = var3.CLOSING;
                    var3 = var6.bind(var1)(var4, var3);
                    var3 = 17;
                    var3 = var9[var3];
                    var4 = var8.bind(var1)(var3);
                    var3 = var4.dismissKeyboard;
                    var3 = var3.bind(var4)();
                    var2 = var9[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.runOnUI;
                    var2 = function t() {
                        var4 = _closure2_slot6;
                        var3 = var4.set;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 18;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var2);
                        var5 = var6.withPanGestureTiming;
                        var2 = 0;
                        var2 = var5.bind(var6)(var2);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var6 = {};
                    var7 = _closure2_slot6;
                    var6['translateX'] = var7;
                    var7 = 18;
                    var7 = var9[var7];
                    var7 = var8.bind(var1)(var7);
                    var7 = var7.withPanGestureTiming;
                    var6['withPanGestureTiming'] = var7;
                    var2['__closure'] = var6;
                    var6 = 15753790715008.0;
                    var2['__workletHash'] = var6;
                    var5 = _closure1_slot27;
                    var2['__initData'] = var5;
                    var2 = var3.bind(var4)(var2);
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var1['openVoice'] = var3;
                var2 = _closure2_slot13;
                var1['setIsSwipeToChatDisabled'] = var2;
                return var1;
            };
            var15 = var4.bind(var7)(var1, var3);
            var1 = null;
            var3 = var1 == var19;
            if(var3) { _fun0005_ip = 1484; continue _fun0005 }
 1241:
            var4 = _closure1_slot14;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var2 = var17[var2];
            var2 = var13.bind(var5)(var2);
            var3 = var2.AnalyticsLocationProvider;
            var2 = {};
            var2['value'] = var6;
            var8 = _closure1_slot14;
            var10 = 27;
            var6 = var17[var10];
            var6 = var13.bind(var5)(var6);
            var7 = var6.GestureDetector;
            var6 = {};
            var10 = var17[var10];
            var10 = var13.bind(var5)(var10);
            var11 = var10.Gesture;
            var10 = var11.Exclusive;
            var10 = var10.bind(var11)(var18, var14);
            var6['gesture'] = var10;
            var11 = _closure1_slot14;
            var10 = _closure1_slot1;
            var9 = var17[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.View;
            var9 = {};
            var9['style'] = var12;
            var14 = _closure1_slot15;
            var12 = 28;
            var12 = var17[var12];
            var12 = var13.bind(var5)(var12);
            var12 = var12.VoiceChatNavigationContext;
            var13 = var12.Provider;
            var12 = {};
            var12['value'] = var15;
            var18 = _closure1_slot14;
            var17 = _closure1_slot16;
            var15 = {};
            var15['channelId'] = var20;
            var17 = var18.bind(var5)(var17, var15);
            var15 = new Array(2);
            var15[0] = var17;
            var18 = _closure1_slot14;
            var17 = _closure1_slot29;
            var16 = {};
            var16['channel'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var15[1] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var5)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 1484:
            return var1;
        }
    };
    var5 = var11.bind(var12)(var5);
    var _closure1_slot28 = var5;
    var5 = {};
    var9 = var9.SLIDE_UP;
    var5['animation'] = var9;
    var5['shouldPersistUnderModals'] = var8;
    var2['modalConfig'] = var5;
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/components/ChannelCallModal.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var2;
    var3['ChannelCallCameraPreview'] = var4;
    var3['ChannelCallModal'] = var2;
    return var1;
})();
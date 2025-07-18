// app/modules/media_panel/native/MediaPlaybackPanelUI.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useContext;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS;
    var _closure1_slot7 = var7;
    var4 = var4.MediaPlaybackPanelModes;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.IS_IOS;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.BORDER_RADIUS_PHYSICS;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['opacity'] = var10;
    var4['wrapperAnimationPresets'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'zIndex': 1};
    var4['wrapper'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'overflow': 'hidden', 'borderWidth': 1};
    var10 = 8;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.xl;
    var9['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.CHAT_BORDER;
    var9['borderColor'] = var13;
    var4['mask'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.shadows;
    var15 = var13.SHADOW_LOW_HOVER;
    var16 = var9;
    var13 = copyDataProperties(var16, var15);
    var4['maskElevation'] = var9;
    var9 = {'xOffset': 0, 'yOffset': 0, 'shadowColorIos': '#000000', 'shadowOpacity': 0, 'shadowRadius': 0, 'elevation': 0, 'shadowColorAndroid': '#000000'};
    var4['maskEmptyElevation'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_FLOATING;
    var9['backgroundColor'] = var10;
    var4['content'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function MediaPlaybackPanelUITsx1(){const{mode,windowDimensions,canShowPIP}=this.__closure;return{mode:mode.get(),windowDimensions:windowDimensions,canShowPIP:canShowPIP.get()};}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function MediaPlaybackPanelUITsx2(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:modeToSet,windowDimensions:windowDimensions,canShowPIP:canShowPIP}=props;if(modeToSet===MediaPlaybackPanelModes.PIP){const{width:width,height:height}=canShowPIP?{width:120,height:120}:{width:0,height:0};updateSharedValueIfChanged(wrapperDimensions,{width:width,height:height});}else if(modeToSet===MediaPlaybackPanelModes.DISMISSED){updateSharedValueIfChanged(wrapperOffset,{y:windowDimensions.height});}}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function MediaPlaybackPanelUITsx3(){const{mode,wrapperDimensions,pipAvoidanceSpecs,wrapperOffset,windowDimensions,safeArea,pipState}=this.__closure;return{mode:mode.get(),wrapperDimensions:wrapperDimensions.get(),pipAvoidanceSpecs:pipAvoidanceSpecs.get(),wrapperOffset:wrapperOffset.get(),windowDimensions:windowDimensions,safeArea:safeArea,pipState:pipState.get()};}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function MediaPlaybackPanelUITsx4(props,previous){const{cheapWorkletShallowEqual,MediaPlaybackPanelModes,getClampedPIPPosition,safeArea,disableHorizontalSafeAreas,wrapperOpacity,animateWrapperTranslation,wrapperTranslationX,wrapperTranslationY}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{mode:mode,wrapperDimensions:wrapperDimensions,pipAvoidanceSpecs:pipAvoidanceSpecs,wrapperOffset:wrapperOffset,windowDimensions:windowDimensions,pipState:pipState}=props;let x=0;let y=0;const{gestureActive:gestureActive}=wrapperOffset;const{x:pipX,y:pipY}=pipState;switch(mode){case MediaPlaybackPanelModes.PIP:{const clampedPosition=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:120,height:120,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.bottom,topAvoidanceRegion:pipAvoidanceSpecs.top,positionOffset:gestureActive?wrapperOffset:undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});x=clampedPosition.x;y=clampedPosition.y;wrapperOpacity.set(1);break;}case MediaPlaybackPanelModes.DISMISSED:{y=wrapperDimensions.height;wrapperOpacity.set(0);break;}}const previousPIPState=previous===null||previous===void 0?void 0:previous.pipState;const pipPositionChanged=pipX!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.x)||pipY!==(previousPIPState===null||previousPIPState===void 0?void 0:previousPIPState.y);const shouldAnimateForPIP=mode===MediaPlaybackPanelModes.PIP&&pipPositionChanged&&!wrapperOffset.gestureActive;animateWrapperTranslation.set(shouldAnimateForPIP||mode!==MediaPlaybackPanelModes.PIP);wrapperTranslationX.set(x);wrapperTranslationY.set(y);}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function MediaPlaybackPanelUITsx5(){const{withTiming,wrapperOpacity,timingFast,animateWrapperTranslation,withSpring,wrapperTranslationX,MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,wrapperTranslationY,wrapperDimensions,wrapperElevationStyles}=this.__closure;const opacity=withTiming(wrapperOpacity.get(),timingFast,'respect-motion-settings');return{transform:[{translateX:animateWrapperTranslation.get()?withSpring(wrapperTranslationX.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,'animate-always'):wrapperTranslationX.get()},{translateY:animateWrapperTranslation.get()?withSpring(wrapperTranslationY.get(),MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS,animateWrapperTranslation.get()?'respect-motion-settings':'animate-never'):wrapperTranslationY.get()}],opacity:opacity,width:wrapperDimensions.get().width,height:wrapperDimensions.get().height,...wrapperElevationStyles};}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = "function MediaPlaybackPanelUITsx6(){const{withSpring,borderRadius,BORDER_RADIUS_PHYSICS,maskElevationStyles}=this.__closure;return{borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS,'animate-always'),...maskElevationStyles};}";
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = "function MediaPlaybackPanelUITsx7(){const{windowDimensions}=this.__closure;const{height:height,width:width}=windowDimensions;return{position:'absolute',top:0,left:0,width:width,height:height,overflow:'hidden'};}";
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = "function MediaPlaybackPanelUITsx8(){const{styles}=this.__closure;const topBorderRadius=0;const top=0;return{flexDirection:'column',backgroundColor:styles.content.backgroundColor,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius,top:top,overflow:'hidden'};}";
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_panel/native/MediaPlaybackPanelUI.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaPlaybackPanelUI() {
        var2 = _closure1_slot12;
        var4 = undefined;
        var15 = var2.bind(var4)();
        var _closure2_slot0 = var15;
        var16 = _closure1_slot1;
        var17 = _closure1_slot2;
        var2 = 10;
        var2 = var17[var2];
        var2 = var16.bind(var4)(var2);
        var11 = var2.bind(var4)();
        var _closure2_slot1 = var11;
        var6 = _closure1_slot5;
        var2 = 11;
        var5 = var17[var2];
        var5 = var16.bind(var4)(var5);
        var5 = var6.bind(var4)(var5);
        var8 = var5.wrapperDimensions;
        var6 = var5.wrapperOffset;
        var12 = _closure1_slot0;
        var13 = 12;
        var5 = var17[var13];
        var9 = var12.bind(var4)(var5);
        var7 = var9.useAnimatedStyle;
        var5 = function p() {
            var3 = _closure2_slot1;
            var2 = var3.height;
            var1 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': null, 'height': null, 'overflow': 'hidden'};
            var3 = var3.width;
            var1['width'] = var3;
            var1['height'] = var2;
            return var1;
        };
        var10 = {};
        var10['windowDimensions'] = var11;
        var5['__closure'] = var10;
        var10 = 5768037716653.0;
        var5['__workletHash'] = var10;
        var10 = _closure1_slot19;
        var5['__initData'] = var10;
        var7 = var7.bind(var9)(var5);
        var5 = function useWrapperStyles(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var15 = arg1;
                var24 = arg2;
                var _closure3_slot0 = var15;
                var _closure3_slot1 = var24;
                var1 = _closure1_slot12;
                var13 = undefined;
                var6 = var1.bind(var13)();
                var _closure3_slot2 = var6;
                var16 = _closure1_slot1;
                var22 = _closure1_slot2;
                var1 = 9;
                var1 = var22[var1];
                var1 = var16.bind(var13)(var1);
                var19 = var1.bind(var13)();
                var _closure3_slot3 = var19;
                var1 = 10;
                var1 = var22[var1];
                var1 = var16.bind(var13)(var1);
                var23 = var1.bind(var13)();
                var _closure3_slot4 = var23;
                var5 = _closure1_slot4;
                var4 = var5.useContext;
                var1 = 11;
                var1 = var22[var1];
                var1 = var16.bind(var13)(var1);
                var1 = var4.bind(var5)(var1);
                var5 = var1.mode;
                var _closure3_slot5 = var5;
                var12 = var1.pipState;
                var _closure3_slot6 = var12;
                var25 = var1.pipAvoidanceSpecs;
                var _closure3_slot7 = var25;
                var7 = var1.canShowPIP;
                var _closure3_slot8 = var7;
                var21 = _closure1_slot0;
                var4 = 12;
                var1 = var22[var4];
                var10 = var21.bind(var13)(var1);
                var9 = var10.useAnimatedReaction;
                var8 = function u() {
                    var1 = {};
                    var4 = _closure3_slot5;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['mode'] = var3;
                    var3 = _closure3_slot4;
                    var1['windowDimensions'] = var3;
                    var3 = _closure3_slot8;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['canShowPIP'] = var2;
                    return var1;
                };
                var1 = {};
                var1['mode'] = var5;
                var1['windowDimensions'] = var23;
                var1['canShowPIP'] = var7;
                var8['__closure'] = var1;
                var1 = 4412661953046.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot13;
                var8['__initData'] = var1;
                var7 = function p(arg1, arg2) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var3 = arg1;
                        var7 = arg2;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 13;
                        var4 = var4[var1];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.cheapWorkletShallowEqual;
                        var4 = null;
                        var8 = var4 != var7;
                        var4 = undefined;
                        if(!var8) { _fun0002_ip = 51; continue _fun0002 }
 48:
                        var4 = var7;
 51:
                        var4 = var5.bind(var6)(var3, var4);
                        if(var4) { _fun0002_ip = 239; continue _fun0002 }
 63:
                        var5 = var3.mode;
                        var7 = var3.windowDimensions;
                        var3 = var3.canShowPIP;
                        var4 = _closure1_slot8;
                        var4 = var4.PIP;
                        if(!(var5 !== var4)) { _fun0002_ip = 157; continue _fun0002 }
 94:
                        var4 = _closure1_slot8;
                        var4 = var4.DISMISSED;
                        if(!(var5 === var4)) { _fun0002_ip = 239; continue _fun0002 }
 111:
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 14;
                        var4 = var6[var4];
                        var6 = var5.bind(var1)(var4);
                        var5 = _closure3_slot1;
                        var4 = {};
                        var7 = var7.height;
                        var4['y'] = var7;
                        var4 = var6.bind(var1)(var5, var4);
                        _fun0002_ip = 239; continue _fun0002;
 157:
                        if(var3) { _fun0002_ip = 172; continue _fun0002 }
 160:
                        var3 = {'width': 0, 'height': 0};
                        _fun0002_ip = 186; continue _fun0002;
 172:
                        var3 = {'width': 120, 'height': 120};
 186:
                        var6 = var3.width;
                        var5 = var3.height;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 14;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = _closure3_slot0;
                        var2 = {};
                        var2['width'] = var6;
                        var2['height'] = var5;
                        var2 = var4.bind(var1)(var3, var2);
 239:
                        return var1;
                    }
                };
                var11 = {};
                var20 = 13;
                var1 = var22[var20];
                var1 = var21.bind(var13)(var1);
                var1 = var1.cheapWorkletShallowEqual;
                var11['cheapWorkletShallowEqual'] = var1;
                var1 = _closure1_slot8;
                var11['MediaPlaybackPanelModes'] = var1;
                var14 = 14;
                var14 = var22[var14];
                var14 = var16.bind(var13)(var14);
                var11['updateSharedValueIfChanged'] = var14;
                var11['wrapperDimensions'] = var15;
                var11['wrapperOffset'] = var24;
                var7['__closure'] = var11;
                var11 = 8412437178561.0;
                var7['__workletHash'] = var11;
                var11 = _closure1_slot14;
                var7['__initData'] = var11;
                var7 = var9.bind(var10)(var8, var7);
                var7 = var22[var4];
                var8 = var21.bind(var13)(var7);
                var7 = var8.useSharedValue;
                var9 = 0;
                var17 = var7.bind(var8)(var9);
                var _closure3_slot9 = var17;
                var7 = var22[var4];
                var8 = var21.bind(var13)(var7);
                var7 = var8.useSharedValue;
                var16 = var7.bind(var8)(var9);
                var _closure3_slot10 = var16;
                var7 = var22[var4];
                var8 = var21.bind(var13)(var7);
                var7 = var8.useSharedValue;
                var18 = var7.bind(var8)(var9);
                var _closure3_slot11 = var18;
                var7 = var22[var4];
                var9 = var21.bind(var13)(var7);
                var8 = var9.useSharedValue;
                var7 = false;
                var11 = var8.bind(var9)(var7);
                var _closure3_slot12 = var11;
                var8 = _closure1_slot6;
                var7 = function(arg1) {
                    var2 = arg1;
                    var1 = var2.shouldDisableSafeAreas;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var14 = var8.bind(var13)(var7);
                var _closure3_slot13 = var14;
                var7 = var22[var4];
                var10 = var21.bind(var13)(var7);
                var9 = var10.useAnimatedReaction;
                var8 = function R() {
                    var1 = {};
                    var4 = _closure3_slot5;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['mode'] = var3;
                    var4 = _closure3_slot0;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['wrapperDimensions'] = var3;
                    var4 = _closure3_slot7;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['pipAvoidanceSpecs'] = var3;
                    var4 = _closure3_slot1;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1['wrapperOffset'] = var3;
                    var3 = _closure3_slot4;
                    var1['windowDimensions'] = var3;
                    var3 = _closure3_slot3;
                    var1['safeArea'] = var3;
                    var3 = _closure3_slot6;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1['pipState'] = var2;
                    return var1;
                };
                var7 = {};
                var7['mode'] = var5;
                var7['wrapperDimensions'] = var15;
                var7['pipAvoidanceSpecs'] = var25;
                var7['wrapperOffset'] = var24;
                var7['windowDimensions'] = var23;
                var7['safeArea'] = var19;
                var7['pipState'] = var12;
                var8['__closure'] = var7;
                var7 = 4950432193502.0;
                var8['__workletHash'] = var7;
                var7 = _closure1_slot15;
                var8['__initData'] = var7;
                var7 = function C(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var4 = arg1;
                        var3 = arg2;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 13;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var5.bind(var1)(var2);
                        var6 = var7.cheapWorkletShallowEqual;
                        var5 = null;
                        var9 = var5 != var3;
                        var2 = undefined;
                        if(!var9) { _fun0003_ip = 51; continue _fun0003 }
 48:
                        var2 = var3;
 51:
                        var2 = var6.bind(var7)(var4, var2);
                        if(var2) { _fun0003_ip = 468; continue _fun0003 }
 63:
                        var9 = var4.mode;
                        var10 = var4.wrapperDimensions;
                        var15 = var4.pipAvoidanceSpecs;
                        var2 = var4.wrapperOffset;
                        var13 = var4.windowDimensions;
                        var4 = var4.pipState;
                        var16 = var2.gestureActive;
                        var11 = var4.x;
                        var7 = var4.y;
                        var4 = _closure1_slot8;
                        var4 = var4.PIP;
                        if(!(var4 !== var9)) { _fun0003_ip = 180; continue _fun0003 }
 128:
                        var4 = _closure1_slot8;
                        var14 = var4.DISMISSED;
                        var12 = 0;
                        var6 = 0;
                        var4 = 0;
                        if(!(var14 === var9)) { _fun0003_ip = 320; continue _fun0003 }
 151:
                        var4 = var10.height;
                        var17 = _closure3_slot11;
                        var14 = var17.set;
                        var14 = var14.bind(var17)(var12);
                        var6 = 0;
                        _fun0003_ip = 320; continue _fun0003;
 180:
                        var12 = _closure1_slot0;
                        var14 = _closure1_slot2;
                        var10 = 15;
                        var10 = var14[var10];
                        var14 = var12.bind(var1)(var10);
                        var12 = var14.getClampedPIPPosition;
                        var10 = {};
                        var10['pipX'] = var11;
                        var10['pipY'] = var7;
                        var17 = 120;
                        var10['width'] = var17;
                        var10['height'] = var17;
                        var10['windowDimensions'] = var13;
                        var17 = _closure3_slot3;
                        var10['safeArea'] = var17;
                        var17 = var15.bottom;
                        var10['bottomAvoidanceRegion'] = var17;
                        var15 = var15.top;
                        var10['topAvoidanceRegion'] = var15;
                        var15 = undefined;
                        if(!var16) { _fun0003_ip = 274; continue _fun0003 }
 271:
                        var15 = var2;
 274:
                        var10['positionOffset'] = var15;
                        var15 = _closure3_slot13;
                        var10['disableHorizontalSafeAreas'] = var15;
                        var10 = var12.bind(var14)(var10);
                        var6 = var10.x;
                        var4 = var10.y;
                        var15 = _closure3_slot11;
                        var14 = var15.set;
                        var13 = 1;
                        var13 = var14.bind(var15)(var13);
 320:
                        var12 = var5 == var3;
                        var10 = undefined;
                        if(var12) { _fun0003_ip = 335; continue _fun0003 }
 329:
                        var10 = var3.pipState;
 335:
                        var12 = var5 == var10;
                        var3 = undefined;
                        if(var12) { _fun0003_ip = 349; continue _fun0003 }
 344:
                        var3 = var10.x;
 349:
                        var3 = var11 !== var3;
                        if(var3) { _fun0003_ip = 374; continue _fun0003 }
 356:
                        var11 = var5 == var10;
                        var5 = undefined;
                        if(var11) { _fun0003_ip = 370; continue _fun0003 }
 365:
                        var5 = var10.y;
 370:
                        var3 = var7 !== var5;
 374:
                        var5 = _closure1_slot8;
                        var5 = var5.PIP;
                        var7 = var9 === var5;
                        if(!var7) { _fun0003_ip = 394; continue _fun0003 }
 391:
                        var7 = var3;
 394:
                        if(!var7) { _fun0003_ip = 406; continue _fun0003 }
 397:
                        var2 = var2.gestureActive;
                        var7 = !var2;
 406:
                        var5 = _closure3_slot12;
                        var3 = var5.set;
                        if(var7) { _fun0003_ip = 435; continue _fun0003 }
 421:
                        var8 = _closure1_slot8;
                        var8 = var8.PIP;
                        var7 = var9 !== var8;
 435:
                        var3 = var3.bind(var5)(var7);
                        var5 = _closure3_slot9;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var6);
                        var3 = _closure3_slot10;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
 468:
                        return var1;
                    }
                };
                var12 = {};
                var20 = var22[var20];
                var20 = var21.bind(var13)(var20);
                var20 = var20.cheapWorkletShallowEqual;
                var12['cheapWorkletShallowEqual'] = var20;
                var12['MediaPlaybackPanelModes'] = var1;
                var20 = 15;
                var20 = var22[var20];
                var20 = var21.bind(var13)(var20);
                var20 = var20.getClampedPIPPosition;
                var12['getClampedPIPPosition'] = var20;
                var12['safeArea'] = var19;
                var12['disableHorizontalSafeAreas'] = var14;
                var12['wrapperOpacity'] = var18;
                var12['animateWrapperTranslation'] = var11;
                var12['wrapperTranslationX'] = var17;
                var12['wrapperTranslationY'] = var16;
                var7['__closure'] = var12;
                var12 = 10793489581273.0;
                var7['__workletHash'] = var12;
                var12 = _closure1_slot16;
                var7['__initData'] = var12;
                var7 = var9.bind(var10)(var8, var7);
                var7 = var5.get;
                var7 = var7.bind(var5)();
                var1 = var1.PIP;
                if(!(var7 === var1)) { _fun0001_ip = 687; continue _fun0001 }
 680:
                var1 = _closure1_slot9;
                if(var1) { _fun0001_ip = 695; continue _fun0001 }
 687:
                var10 = var6.maskEmptyElevation;
                _fun0001_ip = 701; continue _fun0001;
 695:
                var10 = var6.maskElevation;
 701:
                var _closure3_slot14 = var10;
                var1 = var5.get;
                var5 = var1.bind(var5)();
                var1 = _closure1_slot8;
                var1 = var1.PIP;
                if(!(var5 === var1)) { _fun0001_ip = 743; continue _fun0001 }
 728:
                var1 = _closure1_slot9;
                if(var1) { _fun0001_ip = 743; continue _fun0001 }
 735:
                var9 = var6.maskElevation;
                _fun0001_ip = 749; continue _fun0001;
 743:
                var9 = var6.maskEmptyElevation;
 749:
                var _closure3_slot15 = var9;
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = var14[var4];
                var7 = var12.bind(var13)(var1);
                var5 = var7.useAnimatedStyle;
                var1 = function L() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var1 = 16;
                        var1 = var8[var1];
                        var10 = undefined;
                        var5 = var6.bind(var10)(var1);
                        var4 = var5.withTiming;
                        var3 = _closure3_slot11;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = 17;
                        var1 = var8[var1];
                        var1 = var6.bind(var10)(var1);
                        var1 = var1.timingFast;
                        var12 = 'respect-motion-settings';
                        var3 = var4.bind(var5)(var3, var1, var12);
                        var1 = {};
                        var5 = {};
                        var6 = _closure3_slot12;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        if(var4) { _fun0004_ip = 112; continue _fun0004 }
 97:
                        var6 = _closure3_slot9;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        _fun0004_ip = 167; continue _fun0004;
 112:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 18;
                        var6 = var9[var6];
                        var13 = var8.bind(var10)(var6);
                        var11 = var13.withSpring;
                        var8 = _closure3_slot9;
                        var6 = var8.get;
                        var9 = var6.bind(var8)();
                        var8 = _closure1_slot7;
                        var6 = 'animate-always';
                        var4 = var11.bind(var13)(var9, var8, var6);
 167:
                        var5['translateX'] = var4;
                        var4 = new Array(2);
                        var4[0] = var5;
                        var5 = {};
                        var8 = _closure3_slot12;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        if(var6) { _fun0004_ip = 213; continue _fun0004 }
 198:
                        var8 = _closure3_slot10;
                        var6 = var8.get;
                        var6 = var6.bind(var8)();
                        _fun0004_ip = 287; continue _fun0004;
 213:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var8 = 18;
                        var8 = var11[var8];
                        var11 = var9.bind(var10)(var8);
                        var10 = var11.withSpring;
                        var9 = _closure3_slot10;
                        var8 = var9.get;
                        var9 = var8.bind(var9)();
                        var8 = _closure1_slot7;
                        var13 = _closure3_slot12;
                        var7 = var13.get;
                        var13 = var7.bind(var13)();
                        var7 = 'animate-never';
                        if(!var13) { _fun0004_ip = 280; continue _fun0004 }
 277:
                        var7 = var12;
 280:
                        var6 = var10.bind(var11)(var9, var8, var7);
 287:
                        var5['translateY'] = var6;
                        var4[1] = var5;
                        var1['transform'] = var4;
                        var1['opacity'] = var3;
                        var4 = _closure3_slot0;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.width;
                        var1['width'] = var3;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.height;
                        var1['height'] = var3;
                        var15 = _closure3_slot14;
                        var16 = var1;
                        var2 = copyDataProperties(var16, var15);
                        return var1;
                    }
                };
                var8 = {};
                var19 = 16;
                var19 = var14[var19];
                var19 = var12.bind(var13)(var19);
                var19 = var19.withTiming;
                var8['withTiming'] = var19;
                var8['wrapperOpacity'] = var18;
                var18 = 17;
                var18 = var14[var18];
                var18 = var12.bind(var13)(var18);
                var18 = var18.timingFast;
                var8['timingFast'] = var18;
                var8['animateWrapperTranslation'] = var11;
                var11 = 18;
                var18 = var14[var11];
                var18 = var12.bind(var13)(var18);
                var18 = var18.withSpring;
                var8['withSpring'] = var18;
                var8['wrapperTranslationX'] = var17;
                var17 = _closure1_slot7;
                var8['MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS'] = var17;
                var8['wrapperTranslationY'] = var16;
                var8['wrapperDimensions'] = var15;
                var8['wrapperElevationStyles'] = var10;
                var1['__closure'] = var8;
                var8 = 11049335639852.0;
                var1['__workletHash'] = var8;
                var8 = _closure1_slot17;
                var1['__initData'] = var8;
                var1 = var5.bind(var7)(var1);
                var _closure3_slot16 = var1;
                var7 = _closure1_slot1;
                var5 = 8;
                var5 = var14[var5];
                var5 = var7.bind(var13)(var5);
                var5 = var5.radii;
                var10 = var5.xl;
                var _closure3_slot17 = var10;
                var4 = var14[var4];
                var7 = var12.bind(var13)(var4);
                var5 = var7.useAnimatedStyle;
                var4 = function B() {
                    var1 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 18;
                    var4 = var4[var2];
                    var2 = undefined;
                    var7 = var5.bind(var2)(var4);
                    var6 = var7.withSpring;
                    var5 = _closure3_slot17;
                    var4 = _closure1_slot10;
                    var3 = 'animate-always';
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var1['borderRadius'] = var3;
                    var9 = _closure3_slot15;
                    var10 = var1;
                    var2 = copyDataProperties(var10, var9);
                    return var1;
                };
                var8 = {};
                var11 = var14[var11];
                var11 = var12.bind(var13)(var11);
                var11 = var11.withSpring;
                var8['withSpring'] = var11;
                var8['borderRadius'] = var10;
                var10 = _closure1_slot10;
                var8['BORDER_RADIUS_PHYSICS'] = var10;
                var8['maskElevationStyles'] = var9;
                var4['__closure'] = var8;
                var8 = 7035830192327.0;
                var4['__workletHash'] = var8;
                var8 = _closure1_slot18;
                var4['__initData'] = var8;
                var7 = var5.bind(var7)(var4);
                var _closure3_slot18 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useMemo;
                var3 = new Array(3);
                var3[0] = var1;
                var1 = var6.wrapper;
                var3[1] = var1;
                var1 = var6.wrapperAnimationPresets;
                var3[2] = var1;
                var1 = function() {
                    var3 = _closure3_slot16;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var2 = _closure3_slot2;
                    var3 = var2.wrapper;
                    var1[1] = var3;
                    var2 = var2.wrapperAnimationPresets;
                    var1[2] = var2;
                    return var1;
                };
                var3 = var4.bind(var5)(var1, var3);
                var1 = new Array(2);
                var1[0] = var3;
                var4 = var5.useMemo;
                var3 = new Array(2);
                var3[0] = var7;
                var6 = var6.mask;
                var3[1] = var6;
                var2 = function() {
                    var3 = _closure3_slot18;
                    var1 = new Array(2);
                    var1[0] = var3;
                    var2 = _closure3_slot2;
                    var2 = var2.mask;
                    var1[1] = var2;
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                var1[1] = var2;
                return var1;
            }
        };
        var8 = var5.bind(var4)(var8, var6);
        var6 = _closure1_slot3;
        var5 = 2;
        var6 = var6.bind(var4)(var8, var5);
        var5 = 0;
        var9 = var6[var5];
        var5 = 1;
        var11 = var6[var5];
        var5 = var17[var13];
        var6 = var12.bind(var4)(var5);
        var5 = var6.useAnimatedStyle;
        var3 = function b() {
            var1 = {'flexDirection': 'column', 'backgroundColor': null, 'borderTopStartRadius': 0, 'borderTopEndRadius': 0, 'top': 0, 'overflow': 'hidden'};
            var2 = _closure2_slot0;
            var2 = var2.content;
            var2 = var2.backgroundColor;
            var1['backgroundColor'] = var2;
            return var1;
        };
        var8 = {};
        var8['styles'] = var15;
        var3['__closure'] = var8;
        var8 = 8557652955267.0;
        var3['__workletHash'] = var8;
        var8 = _closure1_slot20;
        var3['__initData'] = var8;
        var18 = var5.bind(var6)(var3);
        var5 = _closure1_slot4;
        var3 = var5.useContext;
        var2 = var17[var2];
        var2 = var16.bind(var4)(var2);
        var2 = var3.bind(var5)(var2);
        var5 = var2.wrapperOffset;
        var6 = var2.pipState;
        var8 = 19;
        var2 = var17[var8];
        var3 = var16.bind(var4)(var2);
        var2 = {};
        var10 = true;
        var2['panGestureEnabled'] = var10;
        var8 = var17[var8];
        var8 = var12.bind(var4)(var8);
        var8 = var8.MorphablePanelModes;
        var8 = var8.PIP;
        var2['mode'] = var8;
        var2['pipState'] = var6;
        var2['wrapperOffset'] = var5;
        var14 = var3.bind(var4)(var2);
        var3 = _closure1_slot11;
        var1 = 20;
        var1 = var17[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.LayerScope;
        var1 = {};
        var5 = var17[var13];
        var5 = var16.bind(var4)(var5);
        var6 = var5.View;
        var5 = {};
        var5['style'] = var7;
        var7 = 'box-none';
        var5['pointerEvents'] = var7;
        var7 = var17[var13];
        var7 = var16.bind(var4)(var7);
        var8 = var7.View;
        var7 = {};
        var7['style'] = var9;
        var9 = var17[var13];
        var9 = var16.bind(var4)(var9);
        var10 = var9.View;
        var9 = {};
        var9['style'] = var11;
        var11 = 21;
        var11 = var17[var11];
        var11 = var12.bind(var4)(var11);
        var12 = var11.GestureDetector;
        var11 = {};
        var11['gesture'] = var14;
        var13 = var17[var13];
        var13 = var16.bind(var4)(var13);
        var14 = var13.View;
        var13 = {};
        var19 = var15.content;
        var15 = new Array(2);
        var15[0] = var19;
        var15[1] = var18;
        var13['style'] = var15;
        var15 = 22;
        var15 = var17[var15];
        var16 = var16.bind(var4)(var15);
        var15 = {};
        var15 = var3.bind(var4)(var16, var15);
        var13['children'] = var15;
        var13 = var3.bind(var4)(var14, var13);
        var11['children'] = var13;
        var11 = var3.bind(var4)(var12, var11);
        var9['children'] = var11;
        var9 = var3.bind(var4)(var10, var9);
        var7['children'] = var9;
        var7 = var3.bind(var4)(var8, var7);
        var5['children'] = var7;
        var5 = var3.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
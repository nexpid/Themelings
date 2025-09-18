// app/modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var8 = 0;
    var4 = var6[var8];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.VoicePanelModes;
    var _closure1_slot5 = var9;
    var4 = var4.MODE_CHANGE_PHYSICS;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VoicePanelPIPModes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SCALE_PHYSICS;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var9 = var4.jsx;
    var _closure1_slot10 = var9;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = {};
    var4['duration'] = var8;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var10.bind(var1)(var4);
    var8 = var9.createAnimatedComponent;
    var4 = 8;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var4 = var8.bind(var9)(var4);
    var _closure1_slot13 = var4;
    var4 = {};
    var8 = 'function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){const{MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR}=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;}';
    var4['code'] = var8;
    var _closure1_slot14 = var4;
    var4 = function() {
        var1 = function getScaleChangeWithOverscroll(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg1;
                var1 = arg2;
                var3 = arg3;
                if(!(!(var2 >= var3))) { _fun0001_ip = 78; continue _fun0001 }
 13:
                var3 = 1;
                var2 = var3 - var2;
                var4 = var1 - var3;
                var5 = global;
                var7 = var5.Math;
                var6 = var7.max;
                var5 = 0.1;
                var8 = var2 * var2;
                var2 = 5;
                var2 = var8 * var2;
                var2 = var3 - var2;
                var2 = var6.bind(var7)(var5, var2);
                var2 = var4 * var2;
                var2 = var3 + var2;
                return var2;
 78:
                return var1;
            }
        };
        var2 = {'MIN_OVERSCROLL': 0.1, 'OVERSCOLL_INTENSITY_FACTOR': 5};
        var1['__closure'] = var2;
        var2 = 8727721301304.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot14;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var11 = 'absolute';
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['wrapper'] = var10;
    var10 = {};
    var10['position'] = var11;
    var4['animatedWrapperStyles'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'height': '100%'};
    var4['videoRenderer'] = var10;
    var10 = {'width': '100%', 'height': '100%'};
    var4['video'] = var10;
    var10 = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967280, 'marginLeft': 4294967280, 'height': 32, 'width': 32};
    var4['spinner'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    var4['code'] = var8;
    var _closure1_slot17 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    var4['code'] = var8;
    var _closure1_slot18 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}';
    var4['code'] = var8;
    var _closure1_slot19 = var4;
    var4 = {};
    var8 = "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}";
    var4['code'] = var8;
    var _closure1_slot20 = var4;
    var4 = {};
    var8 = "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}";
    var4['code'] = var8;
    var _closure1_slot21 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}';
    var4['code'] = var8;
    var _closure1_slot22 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}';
    var4['code'] = var8;
    var _closure1_slot23 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}';
    var4['code'] = var8;
    var _closure1_slot24 = var4;
    var4 = {};
    var8 = "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}";
    var4['code'] = var8;
    var _closure1_slot25 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}';
    var4['code'] = var8;
    var _closure1_slot26 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}';
    var4['code'] = var8;
    var _closure1_slot27 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}';
    var4['code'] = var8;
    var _closure1_slot28 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}';
    var4['code'] = var8;
    var _closure1_slot29 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}';
    var4['code'] = var8;
    var _closure1_slot30 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}';
    var4['code'] = var8;
    var _closure1_slot31 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}';
    var4['code'] = var8;
    var _closure1_slot32 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}';
    var4['code'] = var8;
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}';
    var4['code'] = var8;
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}";
    var4['code'] = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}';
    var4['code'] = var8;
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}';
    var4['code'] = var8;
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx23(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}';
    var4['code'] = var8;
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx24(e,manager){return manager.fail();}';
    var4['code'] = var8;
    var _closure1_slot39 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx25(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}';
    var4['code'] = var8;
    var _closure1_slot40 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx26(e,manager){return manager.fail();}';
    var4['code'] = var8;
    var _closure1_slot41 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx27(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}';
    var4['code'] = var8;
    var _closure1_slot42 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx28(event){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}';
    var4['code'] = var8;
    var _closure1_slot43 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx29(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}';
    var4['code'] = var8;
    var _closure1_slot44 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx30(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}}';
    var4['code'] = var8;
    var _closure1_slot45 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx31(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}';
    var4['code'] = var8;
    var _closure1_slot46 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx32(event){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}';
    var4['code'] = var8;
    var _closure1_slot47 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx33(event){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());}';
    var4['code'] = var8;
    var _closure1_slot48 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx34(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}';
    var4['code'] = var8;
    var _closure1_slot49 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx35(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}';
    var4['code'] = var8;
    var _closure1_slot50 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx36(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}}';
    var4['code'] = var8;
    var _closure1_slot51 = var4;
    var4 = {};
    var8 = 'function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}';
    var4['code'] = var8;
    var _closure1_slot52 = var4;
    var4 = function() {
        var1 = function shouldMakeActive(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var5 = var1.mode;
                var4 = var1.focusedId;
                var3 = var1.selfId;
                var1 = var1.isScrollVisible;
                var2 = _closure1_slot5;
                var2 = var2.PIP;
                var2 = var5 === var2;
                var1 = !var1;
                if(var1) { _fun0002_ip = 52; continue _fun0002 }
 49:
                var1 = var2;
 52:
                if(var1) { _fun0002_ip = 71; continue _fun0002 }
 55:
                var2 = null;
                var2 = var2 != var4;
                if(!var2) { _fun0002_ip = 68; continue _fun0002 }
 64:
                var2 = var4 !== var3;
 68:
                var1 = var2;
 71:
                var1 = !var1;
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot5;
        var3['VoicePanelModes'] = var4;
        var1['__closure'] = var3;
        var3 = 14556501664557.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot52;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot53 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}';
    var4['code'] = var8;
    var _closure1_slot54 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}';
    var4['code'] = var8;
    var _closure1_slot55 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}';
    var4['code'] = var8;
    var _closure1_slot56 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx41(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){if(width>height){width=width*(pipState.height/height)/scale.get();height=pipState.height/scale.get();}else{height=height*(pipState.width/width)/scale.get();width=pipState.width/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}';
    var4['code'] = var8;
    var _closure1_slot57 = var4;
    var4 = {};
    var8 = "function VoicePanelVideoRendererTsx42(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,withDelay,focused,id,withTiming,OPACITY_TIMING}=this.__closure;var _focused$get,_focused$get2;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:24+2,overflow:'hidden',borderColor:'white',opacity:withDelay(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id?300:0,withTiming(((_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id)===id?0:0.3,OPACITY_TIMING,'animate-never'))};}";
    var4['code'] = var8;
    var _closure1_slot58 = var4;
    var4 = {};
    var8 = 'function VoicePanelVideoRendererTsx43(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}';
    var4['code'] = var8;
    var _closure1_slot59 = var4;
    var4 = var7.memo;
    var2 = function VideoRenderer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = arg1;
            var23 = var2.id;
            var _closure2_slot0 = var23;
            var21 = var2.streamId;
            var _closure2_slot1 = var21;
            var26 = var2.userId;
            var32 = var2.videoSpinnerContext;
            var27 = var2.sharedCoords;
            var _closure2_slot2 = var27;
            var29 = var2.isScrollVisible;
            var _closure2_slot3 = var29;
            var14 = var2.isCamera;
            var20 = var2.streamKey;
            var18 = var2.mirror;
            var4 = undefined;
            if(!(var18 === var4)) { _fun0003_ip = 81; continue _fun0003 }
 79:
            var18 = false;
 81:
            var _closure2_slot4 = var18;
            var3 = var2.focusOnReady;
            if(!(var3 === var4)) { _fun0003_ip = 97; continue _fun0003 }
 95:
            var3 = false;
 97:
            var _closure2_slot5 = var3;
            var33 = var2.paused;
            if(!(var33 === var4)) { _fun0003_ip = 113; continue _fun0003 }
 111:
            var33 = false;
 113:
            var22 = var2.style;
            var11 = var2.layout;
            var _closure2_slot6 = var11;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var _closure2_slot15 = var4;
            var _closure2_slot16 = var4;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var _closure2_slot20 = var4;
            var _closure2_slot21 = var4;
            var _closure2_slot22 = var4;
            var2 = _closure1_slot16;
            var13 = var2.bind(var4)();
            var7 = _closure1_slot4;
            var3 = var7.useContext;
            var12 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 10;
            var2 = var8[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var3.bind(var7)(var2);
            var6 = var2.mode;
            _closure2_slot7 = var6;
            var24 = var2.focused;
            _closure2_slot8 = var24;
            var3 = var2.setFocused;
            _closure2_slot9 = var3;
            var3 = var2.layoutManager;
            _closure2_slot10 = var3;
            var28 = var2.windowDimensions;
            _closure2_slot11 = var28;
            var19 = var2.streamOutputSinkStack;
            var2 = _closure1_slot0;
            var25 = 7;
            var5 = var8[var25];
            var9 = var2.bind(var4)(var5);
            var5 = var9.useSharedValue;
            var16 = true;
            var9 = var5.bind(var9)(var16);
            _closure2_slot12 = var9;
            var5 = var8[var25];
            var17 = var2.bind(var4)(var5);
            var10 = var17.useSharedValue;
            var5 = {};
            var30 = var3.getTargetDimensions;
            var35 = var30.bind(var3)(var23);
            var36 = var5;
            var30 = copyDataProperties(var36, var35);
            var31 = var10.bind(var17)(var5);
            _closure2_slot13 = var31;
            var5 = 15;
            var5 = var8[var5];
            var10 = var2.bind(var4)(var5);
            var5 = var10.usePIPState;
            var30 = var5.bind(var10)();
            _closure2_slot14 = var30;
            var5 = var7.useState;
            var17 = var5.bind(var7)(var16);
            var10 = _closure1_slot3;
            var5 = 2;
            var17 = var10.bind(var4)(var17, var5);
            var5 = 0;
            var10 = var17[var5];
            var5 = 1;
            var5 = var17[var5];
            _closure2_slot15 = var5;
            var17 = var7.useRef;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0004_ip = 25; continue _fun0004 }
 10:
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 25:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var17.bind(var7)(var5);
            _closure2_slot16 = var5;
            var5 = 16;
            var5 = var8[var5];
            var17 = var12.bind(var4)(var5);
            var5 = {};
            var5['streamId'] = var21;
            var5['userId'] = var26;
            var5['loading'] = var10;
            var5['videoSpinnerContext'] = var32;
            var5['paused'] = var33;
            var5['streamKey'] = var20;
            var5 = var17.bind(var4)(var5);
            var5 = var5.onReady;
            _closure2_slot17 = var5;
            var17 = 17;
            var17 = var8[var17];
            var20 = var12.bind(var4)(var17);
            var17 = {};
            var33 = 'VideoRenderer';
            var17['location'] = var33;
            var17['videoSpinnerContext'] = var32;
            var17['userId'] = var26;
            var17['streamId'] = var21;
            var17['loading'] = var10;
            var17 = var20.bind(var4)(var17);
            var20 = var7.useCallback;
            var17 = new Array(1);
            var17[0] = var5;
            var5 = function() {
                var4 = _closure2_slot15;
                var1 = undefined;
                var3 = false;
                var3 = var4.bind(var1)(var3);
                var4 = _closure2_slot16;
                var3 = var4.current;
                var3 = var3.bind(var4)();
                var2 = _closure2_slot17;
                var2 = var2.bind(var1)();
                return var1;
            };
            var20 = var20.bind(var7)(var5, var17);
            var5 = 18;
            var5 = var8[var5];
            var17 = var2.bind(var4)(var5);
            var5 = var17.useSetHasActiveVideoOutputSink;
            var32 = var5.bind(var17)(var19);
            _closure2_slot18 = var32;
            var5 = var8[var25];
            var26 = var2.bind(var4)(var5);
            var19 = var26.useAnimatedReaction;
            var17 = function Xe() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = new Array(4);
                    var1[0] = var3;
                    var4 = _closure2_slot8;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = null;
                    var5 = var3 == var4;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 53; continue _fun0005 }
 48:
                    var3 = var4.id;
 53:
                    var1[1] = var3;
                    var4 = _closure2_slot3;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1[2] = var3;
                    var2 = _closure2_slot1;
                    var1[3] = var2;
                    return var1;
                }
            };
            var5 = {};
            var5['mode'] = var6;
            var5['focused'] = var24;
            var5['isScrollVisible'] = var29;
            var5['streamId'] = var21;
            var17['__closure'] = var5;
            var5 = 3558943323767.0;
            var17['__workletHash'] = var5;
            var5 = _closure1_slot54;
            var17['__initData'] = var5;
            var5 = function Ge(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var6 = arg1;
                    var8 = arg2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 12;
                    var3 = var3[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var3);
                    var5 = var7.cheapWorkletArrayShallowEqual;
                    var3 = null;
                    var9 = var3 != var8;
                    var4 = undefined;
                    if(!var9) { _fun0006_ip = 51; continue _fun0006 }
 48:
                    var4 = var8;
 51:
                    var4 = var5.bind(var7)(var6, var4);
                    if(var4) { _fun0006_ip = 181; continue _fun0006 }
 60:
                    var5 = _closure1_slot3;
                    var4 = 4;
                    var5 = var5.bind(var1)(var6, var4);
                    var4 = 0;
                    var9 = var5[var4];
                    var4 = 1;
                    var8 = var5[var4];
                    var4 = 2;
                    var6 = var5[var4];
                    var4 = 3;
                    var4 = var5[var4];
                    if(!(var3 != var4)) { _fun0006_ip = 181; continue _fun0006 }
 104:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 7;
                    var3 = var7[var3];
                    var10 = var5.bind(var1)(var3);
                    var5 = var10.runOnJS;
                    var3 = _closure2_slot18;
                    var3 = var5.bind(var10)(var3);
                    var5 = _closure1_slot53;
                    var2 = {};
                    var2['mode'] = var9;
                    var2['focusedId'] = var8;
                    var7 = _closure2_slot0;
                    var2['selfId'] = var7;
                    var2['isScrollVisible'] = var6;
                    var2 = var5.bind(var1)(var2);
                    var2 = var3.bind(var1)(var4, var2);
 181:
                    return var1;
                }
            };
            var29 = {};
            var33 = 12;
            var33 = var8[var33];
            var33 = var2.bind(var4)(var33);
            var33 = var33.cheapWorkletArrayShallowEqual;
            var29['cheapWorkletArrayShallowEqual'] = var33;
            var33 = var8[var25];
            var33 = var2.bind(var4)(var33);
            var33 = var33.runOnJS;
            var29['runOnJS'] = var33;
            var29['setHasActiveVideoOutputSink'] = var32;
            var32 = _closure1_slot53;
            var29['shouldMakeActive'] = var32;
            var29['id'] = var23;
            var5['__closure'] = var29;
            var29 = 12089612803324.0;
            var5['__workletHash'] = var29;
            var29 = _closure1_slot55;
            var5['__initData'] = var29;
            var5 = var19.bind(var26)(var17, var5);
            var17 = var7.useCallback;
            var5 = new Array(4);
            var5[0] = var31;
            var5[1] = var3;
            var5[2] = var23;
            var5[3] = var9;
            var3 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var7 = var1.width;
                    var6 = var1.height;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var4 = _closure2_slot13;
                    var3 = {};
                    var3['width'] = var7;
                    var3['height'] = var6;
                    var3 = var5.bind(var1)(var4, var3);
                    var5 = _closure2_slot10;
                    var4 = var5.setTargetDimensions;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3, var7, var6);
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    if(!var2) { _fun0007_ip = 130; continue _fun0007 }
 104:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        var3 = _closure2_slot12;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = 34;
                    var2 = var4.bind(var1)(var3, var2);
 130:
                    return var1;
                }
            };
            var19 = var17.bind(var7)(var3, var5);
            var3 = var8[var25];
            var17 = var2.bind(var4)(var3);
            var5 = var17.useDerivedValue;
            var3 = function Ze() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var2 = _closure2_slot8;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var2 = null;
                    var4 = var2 == var1;
                    var2 = undefined;
                    if(var4) { _fun0008_ip = 32; continue _fun0008 }
 27:
                    var2 = var1.id;
 32:
                    var1 = _closure2_slot0;
                    if(!(var2 !== var1)) { _fun0008_ip = 84; continue _fun0008 }
 40:
                    var1 = {};
                    var4 = _closure2_slot2;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.width;
                    var1['width'] = var2;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.height;
                    var1['height'] = var2;
                    _fun0008_ip = 133; continue _fun0008;
 84:
                    var2 = {};
                    var5 = _closure2_slot11;
                    var4 = var5.get;
                    var4 = var4.bind(var5)();
                    var4 = var4.width;
                    var2['width'] = var4;
                    var4 = _closure2_slot11;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var3 = var3.height;
                    var2['height'] = var3;
                    var1 = var2;
 133:
                    return var1;
                }
            };
            var26 = {};
            var26['focused'] = var24;
            var26['id'] = var23;
            var26['windowDimensions'] = var28;
            var26['sharedCoords'] = var27;
            var3['__closure'] = var26;
            var26 = 9631392718391.0;
            var3['__workletHash'] = var26;
            var26 = _closure1_slot56;
            var3['__initData'] = var26;
            var3 = var5.bind(var17)(var3);
            var5 = {};
            var5['id'] = var23;
            var5['isCamera'] = var14;
            var5['focused'] = var24;
            var5['mode'] = var6;
            var5['loading'] = var10;
            var5['containerLayout'] = var3;
            var5['videoDimensions'] = var31;
            var5['disableAnimations'] = var9;
            var3 = function useGestures(arg1) {
                var1 = arg1;
                var24 = var1.id;
                var _closure3_slot0 = var24;
                var23 = var1.isCamera;
                var _closure3_slot1 = var23;
                var25 = var1.focused;
                var _closure3_slot2 = var25;
                var37 = var1.mode;
                var _closure3_slot3 = var37;
                var27 = var1.loading;
                var _closure3_slot4 = var27;
                var21 = var1.containerLayout;
                var _closure3_slot5 = var21;
                var36 = var1.videoDimensions;
                var _closure3_slot6 = var36;
                var35 = var1.disableAnimations;
                var _closure3_slot7 = var35;
                var10 = _closure1_slot4;
                var2 = var10.useContext;
                var3 = _closure1_slot1;
                var34 = _closure1_slot2;
                var1 = 10;
                var1 = var34[var1];
                var33 = undefined;
                var1 = var3.bind(var33)(var1);
                var1 = var2.bind(var10)(var1);
                var39 = var1.setIsFocusedVideoZoomed;
                var _closure3_slot8 = var39;
                var20 = var1.windowDimensions;
                var _closure3_slot9 = var20;
                var26 = var1.dismissToPIPGestureRef;
                var _closure3_slot10 = var26;
                var15 = var1.setFocused;
                var _closure3_slot11 = var15;
                var14 = var1.hideControls;
                var _closure3_slot12 = var14;
                var13 = var1.controlsSpecs;
                var _closure3_slot13 = var13;
                var12 = var1.showControls;
                var _closure3_slot14 = var12;
                var32 = _closure1_slot0;
                var31 = 7;
                var1 = var34[var31];
                var3 = var32.bind(var33)(var1);
                var2 = var3.useSharedValue;
                var1 = 1;
                var6 = var2.bind(var3)(var1);
                var _closure3_slot15 = var6;
                var1 = var34[var31];
                var2 = var32.bind(var33)(var1);
                var1 = var2.useSharedValue;
                var11 = 0;
                var5 = var1.bind(var2)(var11);
                var _closure3_slot16 = var5;
                var1 = var34[var31];
                var2 = var32.bind(var33)(var1);
                var1 = var2.useSharedValue;
                var4 = var1.bind(var2)(var11);
                var _closure3_slot17 = var4;
                var1 = var34[var31];
                var2 = var32.bind(var33)(var1);
                var1 = var2.useSharedValue;
                var3 = var1.bind(var2)(var11);
                var _closure3_slot18 = var3;
                var1 = var34[var31];
                var2 = var32.bind(var33)(var1);
                var1 = var2.useSharedValue;
                var9 = false;
                var2 = var1.bind(var2)(var9);
                var _closure3_slot19 = var2;
                var1 = var34[var31];
                var8 = var32.bind(var33)(var1);
                var1 = var8.useSharedValue;
                var18 = var1.bind(var8)(var11);
                var _closure3_slot20 = var18;
                var1 = var34[var31];
                var8 = var32.bind(var33)(var1);
                var1 = var8.useSharedValue;
                var17 = var1.bind(var8)(var9);
                var _closure3_slot21 = var17;
                var1 = var34[var31];
                var9 = var32.bind(var33)(var1);
                var8 = var9.useSharedValue;
                var1 = null;
                var22 = var8.bind(var9)(var1);
                var _closure3_slot22 = var22;
                var1 = var34[var31];
                var9 = var32.bind(var33)(var1);
                var8 = var9.useDerivedValue;
                var1 = function w() {
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.max;
                    var5 = _closure3_slot5;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var2.width;
                    var6 = _closure3_slot6;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var1.width;
                    var2 = var2 / var1;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var5 = var1.height;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var1.height;
                    var1 = var5 / var1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var11 = {};
                var11['containerLayout'] = var21;
                var11['videoDimensions'] = var36;
                var1['__closure'] = var11;
                var11 = 4177496646282.0;
                var1['__workletHash'] = var11;
                var11 = _closure1_slot17;
                var1['__initData'] = var11;
                var30 = var8.bind(var9)(var1);
                var _closure3_slot23 = var30;
                var1 = var34[var31];
                var9 = var32.bind(var33)(var1);
                var8 = var9.useDerivedValue;
                var1 = function I() {
                    var1 = global;
                    var4 = var1.Math;
                    var3 = var4.min;
                    var5 = _closure3_slot5;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var2 = var2.width;
                    var6 = _closure3_slot6;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var1.width;
                    var2 = var2 / var1;
                    var1 = var5.get;
                    var1 = var1.bind(var5)();
                    var5 = var1.height;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var1.height;
                    var1 = var5 / var1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var11 = {};
                var11['containerLayout'] = var21;
                var11['videoDimensions'] = var36;
                var1['__closure'] = var11;
                var11 = 5260375952053.0;
                var1['__workletHash'] = var11;
                var11 = _closure1_slot18;
                var1['__initData'] = var11;
                var11 = var8.bind(var9)(var1);
                var _closure3_slot24 = var11;
                var1 = var34[var31];
                var9 = var32.bind(var33)(var1);
                var8 = var9.useDerivedValue;
                var1 = function D() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        var2 = _closure3_slot16;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var4 = 0;
                        var1 = var4 === var1;
                        if(!var1) { _fun0009_ip = 42; continue _fun0009 }
 25:
                        var5 = _closure3_slot17;
                        var2 = var5.get;
                        var2 = var2.bind(var5)();
                        var1 = var4 === var2;
 42:
                        if(!var1) { _fun0009_ip = 111; continue _fun0009 }
 45:
                        var4 = _closure3_slot15;
                        var2 = var4.get;
                        var4 = var2.bind(var4)();
                        var5 = _closure3_slot24;
                        var2 = var5.get;
                        var2 = var2.bind(var5)();
                        var2 = var4 === var2;
                        if(var2) { _fun0009_ip = 108; continue _fun0009 }
 78:
                        var5 = _closure3_slot15;
                        var4 = var5.get;
                        var4 = var4.bind(var5)();
                        var5 = _closure3_slot23;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var2 = var4 === var3;
 108:
                        var1 = var2;
 111:
                        return var1;
                    }
                };
                var16 = {};
                var16['translateX'] = var5;
                var16['translateY'] = var4;
                var16['scale'] = var6;
                var16['fitScale'] = var11;
                var16['coverScale'] = var30;
                var1['__closure'] = var16;
                var16 = 15099362638406.0;
                var1['__workletHash'] = var16;
                var16 = _closure1_slot19;
                var1['__initData'] = var16;
                var16 = var8.bind(var9)(var1);
                var _closure3_slot25 = var16;
                var9 = var10.useCallback;
                var8 = function ae(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var4 = arg1;
                        var1 = 'fit';
                        if(!(var1 !== var4)) { _fun0010_ip = 112; continue _fun0010 }
 11:
                        var3 = _closure3_slot15;
                        var2 = var3.set;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 11;
                        var7 = var7[var6];
                        var6 = undefined;
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.withSpring;
                        var9 = _closure3_slot23;
                        var6 = var9.get;
                        var6 = var6.bind(var9)();
                        var5 = _closure1_slot6;
                        var9 = _closure3_slot7;
                        var1 = var9.get;
                        var9 = var1.bind(var9)();
                        var1 = 'respect-motion-settings';
                        if(!var9) { _fun0010_ip = 98; continue _fun0010 }
 92:
                        var1 = 'animate-never';
 98:
                        var1 = var7.bind(var8)(var6, var5, var1);
                        var1 = var2.bind(var3)(var1);
                        _fun0010_ip = 211; continue _fun0010;
 112:
                        var3 = _closure3_slot15;
                        var2 = var3.set;
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var6 = 11;
                        var7 = var7[var6];
                        var6 = undefined;
                        var8 = var8.bind(var6)(var7);
                        var7 = var8.withSpring;
                        var9 = _closure3_slot24;
                        var6 = var9.get;
                        var6 = var6.bind(var9)();
                        var5 = _closure1_slot6;
                        var9 = _closure3_slot7;
                        var1 = var9.get;
                        var9 = var1.bind(var9)();
                        var1 = 'respect-motion-settings';
                        if(!var9) { _fun0010_ip = 199; continue _fun0010 }
 193:
                        var1 = 'animate-never';
 199:
                        var1 = var7.bind(var8)(var6, var5, var1);
                        var1 = var2.bind(var3)(var1);
 211:
                        var11 = _closure3_slot16;
                        var6 = var11.set;
                        var7 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 11;
                        var5 = var10[var3];
                        var1 = undefined;
                        var12 = var7.bind(var1)(var5);
                        var5 = var12.withSpring;
                        var9 = _closure1_slot9;
                        var8 = 0;
                        var5 = var5.bind(var12)(var8, var9);
                        var5 = var6.bind(var11)(var5);
                        var6 = _closure3_slot17;
                        var5 = var6.set;
                        var3 = var10[var3];
                        var7 = var7.bind(var1)(var3);
                        var3 = var7.withSpring;
                        var3 = var3.bind(var7)(var8, var9);
                        var3 = var5.bind(var6)(var3);
                        var3 = _closure3_slot22;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    }
                };
                var1 = {};
                var1['scale'] = var6;
                var28 = 11;
                var19 = var34[var28];
                var19 = var32.bind(var33)(var19);
                var19 = var19.withSpring;
                var1['withSpring'] = var19;
                var1['fitScale'] = var11;
                var19 = _closure1_slot6;
                var1['MODE_CHANGE_PHYSICS'] = var19;
                var1['disableAnimations'] = var35;
                var1['coverScale'] = var30;
                var1['translateX'] = var5;
                var19 = _closure1_slot9;
                var1['SCALE_PHYSICS'] = var19;
                var1['translateY'] = var4;
                var1['currentSizeThreshold'] = var22;
                var8['__closure'] = var1;
                var1 = 16610861286231.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot20;
                var8['__initData'] = var1;
                var1 = new Array(7);
                var1[0] = var6;
                var1[1] = var5;
                var1[2] = var4;
                var1[3] = var30;
                var1[4] = var22;
                var1[5] = var11;
                var1[6] = var35;
                var35 = var9.bind(var10)(var8, var1);
                var _closure3_slot26 = var35;
                var9 = var10.useCallback;
                var8 = function re() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var3 = _closure3_slot2;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = null;
                        var4 = var1 == var3;
                        var1 = undefined;
                        var6 = undefined;
                        if(var4) { _fun0011_ip = 34; continue _fun0011 }
 29:
                        var6 = var3.id;
 34:
                        var5 = _closure3_slot0;
                        var4 = 'cover';
                        var3 = var4;
                        if(!(var6 === var5)) { _fun0011_ip = 53; continue _fun0011 }
 49:
                        var3 = 'fit';
 53:
                        var7 = _closure3_slot6;
                        var5 = var7.get;
                        var5 = var5.bind(var7)();
                        var6 = var5.width;
                        var5 = var7.get;
                        var5 = var5.bind(var7)();
                        var5 = var5.height;
                        var7 = var6 >= var5;
                        var8 = _closure3_slot9;
                        var5 = var8.get;
                        var5 = var5.bind(var8)();
                        var6 = var5.width;
                        var5 = var8.get;
                        var5 = var5.bind(var8)();
                        var5 = var5.height;
                        var6 = var6 >= var5;
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0011_ip = 140; continue _fun0011 }
 132:
                        var8 = 'fit';
                        var5 = var8 === var3;
 140:
                        if(!var5) { _fun0011_ip = 147; continue _fun0011 }
 143:
                        var5 = var7 === var6;
 147:
                        if(!var5) { _fun0011_ip = 153; continue _fun0011 }
 150:
                        var3 = var4;
 153:
                        var2 = _closure3_slot26;
                        var2 = var2.bind(var1)(var3);
                        return var1;
                    }
                };
                var1 = {};
                var1['focused'] = var25;
                var1['id'] = var24;
                var1['videoDimensions'] = var36;
                var1['windowDimensions'] = var20;
                var1['isCamera'] = var23;
                var1['resetToDefaultSize'] = var35;
                var8['__closure'] = var1;
                var1 = 15643035811761.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot21;
                var8['__initData'] = var1;
                var1 = new Array(6);
                var1[0] = var25;
                var1[1] = var24;
                var1[2] = var23;
                var1[3] = var36;
                var1[4] = var20;
                var1[5] = var35;
                var23 = var9.bind(var10)(var8, var1);
                var _closure3_slot27 = var23;
                var1 = var34[var31];
                var20 = var32.bind(var33)(var1);
                var9 = var20.useAnimatedReaction;
                var8 = function le() {
                    var2 = _closure3_slot5;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = {};
                var1['containerLayout'] = var21;
                var8['__closure'] = var1;
                var1 = 9695573702258.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot22;
                var8['__initData'] = var1;
                var1 = function ce(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                        var6 = arg1;
                        var5 = arg2;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var2);
                        var3 = var7.cheapWorkletShallowEqual;
                        var4 = null;
                        var8 = var4 != var5;
                        var2 = undefined;
                        if(!var8) { _fun0012_ip = 51; continue _fun0012 }
 48:
                        var2 = var5;
 51:
                        var2 = var3.bind(var7)(var6, var2);
                        if(var2) { _fun0012_ip = 123; continue _fun0012 }
 60:
                        var7 = _closure3_slot2;
                        var3 = var7.get;
                        var3 = var3.bind(var7)();
                        var8 = var4 == var3;
                        var7 = undefined;
                        if(var8) { _fun0012_ip = 90; continue _fun0012 }
 85:
                        var7 = var3.id;
 90:
                        var3 = _closure3_slot0;
                        var3 = var7 === var3;
                        if(!var3) { _fun0012_ip = 105; continue _fun0012 }
 101:
                        var3 = var6 !== var5;
 105:
                        if(!var3) { _fun0012_ip = 112; continue _fun0012 }
 108:
                        var3 = var4 != var5;
 112:
                        if(!var3) { _fun0012_ip = 123; continue _fun0012 }
 115:
                        var2 = _closure3_slot27;
                        var2 = var2.bind(var1)();
 123:
                        return var1;
                    }
                };
                var38 = {};
                var40 = 12;
                var40 = var34[var40];
                var40 = var32.bind(var33)(var40);
                var40 = var40.cheapWorkletShallowEqual;
                var38['cheapWorkletShallowEqual'] = var40;
                var38['focused'] = var25;
                var38['id'] = var24;
                var38['resetOnLayoutChange'] = var23;
                var1['__closure'] = var38;
                var38 = 13816224514199.0;
                var1['__workletHash'] = var38;
                var38 = _closure1_slot23;
                var1['__initData'] = var38;
                var1 = var9.bind(var20)(var8, var1);
                var9 = var10.useCallback;
                var8 = function Le() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var2 = _closure3_slot23;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var4 = _closure3_slot24;
                        var1 = var4.get;
                        var4 = var1.bind(var4)();
                        var1 = 0.05;
                        var1 = var4 + var1;
                        if(!(!(var2 < var1))) { _fun0013_ip = 542; continue _fun0013 }
 50:
                        var2 = _closure3_slot16;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var5 = _closure3_slot15;
                        var1 = var5.get;
                        var1 = var1.bind(var5)();
                        var2 = var2 * var1;
                        var4 = _closure3_slot17;
                        var1 = var4.get;
                        var4 = var1.bind(var4)();
                        var1 = var5.get;
                        var1 = var1.bind(var5)();
                        var6 = var4 * var1;
                        var7 = -50;
                        if(!(!(var2 < var7))) { _fun0013_ip = 538; continue _fun0013 }
 119:
                        var5 = 50;
                        if(!(!(var2 > var5))) { _fun0013_ip = 538; continue _fun0013 }
 129:
                        if(!(!(var6 < var7))) { _fun0013_ip = 538; continue _fun0013 }
 136:
                        if(!(!(var6 > var5))) { _fun0013_ip = 538; continue _fun0013 }
 143:
                        var9 = _closure3_slot5;
                        var1 = var9.get;
                        var1 = var1.bind(var9)();
                        var8 = var1.width;
                        var4 = _closure3_slot6;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var11 = var1.width;
                        var10 = _closure3_slot15;
                        var1 = var10.get;
                        var1 = var1.bind(var10)();
                        var1 = var11 * var1;
                        var1 = var8 - var1;
                        var8 = 2;
                        var1 = var1 / var8;
                        var2 = var2 + var1;
                        var1 = var9.get;
                        var1 = var1.bind(var9)();
                        var11 = var1.height;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var12 = var1.height;
                        var1 = var10.get;
                        var1 = var1.bind(var10)();
                        var1 = var12 * var1;
                        var1 = var11 - var1;
                        var1 = var1 / var8;
                        var6 = var6 + var1;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var8 = var1.width;
                        var1 = var10.get;
                        var1 = var1.bind(var10)();
                        var8 = var8 * var1;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        var4 = var1.height;
                        var1 = var10.get;
                        var1 = var1.bind(var10)();
                        var4 = var4 * var1;
                        var1 = var9.get;
                        var1 = var1.bind(var9)();
                        var1 = var1.height;
                        var1 = var4 >= var1;
                        if(!var1) { _fun0013_ip = 343; continue _fun0013 }
 339:
                        var1 = var2 >= var7;
 343:
                        if(!var1) { _fun0013_ip = 353; continue _fun0013 }
 346:
                        var9 = 25;
                        var1 = var2 <= var9;
 353:
                        if(!var1) { _fun0013_ip = 389; continue _fun0013 }
 356:
                        var10 = var2 + var8;
                        var11 = _closure3_slot5;
                        var9 = var11.get;
                        var9 = var9.bind(var11)();
                        var11 = var9.width;
                        var9 = 25;
                        var9 = var11 - var9;
                        var1 = var10 >= var9;
 389:
                        if(!var1) { _fun0013_ip = 422; continue _fun0013 }
 392:
                        var9 = var2 + var8;
                        var10 = _closure3_slot5;
                        var2 = var10.get;
                        var2 = var2.bind(var10)();
                        var2 = var2.width;
                        var2 = var2 + var5;
                        var1 = var9 <= var2;
 422:
                        if(var1) { _fun0013_ip = 536; continue _fun0013 }
 425:
                        var9 = _closure3_slot5;
                        var2 = var9.get;
                        var2 = var2.bind(var9)();
                        var2 = var2.width;
                        var2 = var8 >= var2;
                        if(!var2) { _fun0013_ip = 454; continue _fun0013 }
 450:
                        var2 = var6 >= var7;
 454:
                        if(!var2) { _fun0013_ip = 464; continue _fun0013 }
 457:
                        var7 = 25;
                        var2 = var6 <= var7;
 464:
                        if(!var2) { _fun0013_ip = 500; continue _fun0013 }
 467:
                        var8 = var6 + var4;
                        var9 = _closure3_slot5;
                        var7 = var9.get;
                        var7 = var7.bind(var9)();
                        var9 = var7.height;
                        var7 = 25;
                        var7 = var9 - var7;
                        var2 = var8 >= var7;
 500:
                        if(!var2) { _fun0013_ip = 533; continue _fun0013 }
 503:
                        var4 = var6 + var4;
                        var6 = _closure3_slot5;
                        var3 = var6.get;
                        var3 = var3.bind(var6)();
                        var3 = var3.height;
                        var3 = var3 + var5;
                        var2 = var4 <= var3;
 533:
                        var1 = var2;
 536:
                        return var1;
 538:
                        var1 = false;
                        return var1;
 542:
                        var1 = false;
                        return var1;
                    }
                };
                var1 = {};
                var1['coverScale'] = var30;
                var1['fitScale'] = var11;
                var20 = 0.05;
                var1['MIN_ZOOM_FOR_COVER_SNAP_OFFSET'] = var20;
                var1['translateX'] = var5;
                var1['scale'] = var6;
                var1['translateY'] = var4;
                var20 = 50;
                var1['SNAP_CENTER_THRESHOLD'] = var20;
                var1['containerLayout'] = var21;
                var1['videoDimensions'] = var36;
                var1['SNAP_EDGE_OUTER_THRESHOLD'] = var20;
                var20 = 25;
                var1['SNAP_EDGE_INNER_THRESHOLD'] = var20;
                var8['__closure'] = var1;
                var1 = 3902544453390.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot24;
                var8['__initData'] = var1;
                var1 = new Array(7);
                var1[0] = var30;
                var1[1] = var6;
                var1[2] = var5;
                var1[3] = var4;
                var1[4] = var21;
                var1[5] = var36;
                var1[6] = var11;
                var20 = var9.bind(var10)(var8, var1);
                var _closure3_slot28 = var20;
                var9 = var10.useCallback;
                var8 = function ye() {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var3 = _closure3_slot18;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var6 = 0;
                        if(!(!(var2 > var6))) { _fun0014_ip = 460; continue _fun0014 }
 25:
                        var3 = _closure3_slot19;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        if(var2) { _fun0014_ip = 425; continue _fun0014 }
 44:
                        var3 = _closure3_slot15;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var4 = _closure3_slot24;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        if(!(!(var3 < var2))) { _fun0014_ip = 408; continue _fun0014 }
 77:
                        var2 = global;
                        var5 = var2.Math;
                        var4 = var5.max;
                        var8 = _closure3_slot6;
                        var3 = var8.get;
                        var3 = var3.bind(var8)();
                        var7 = var3.height;
                        var9 = _closure3_slot5;
                        var3 = var9.get;
                        var3 = var3.bind(var9)();
                        var10 = var3.height;
                        var11 = _closure3_slot15;
                        var3 = var11.get;
                        var3 = var3.bind(var11)();
                        var3 = var10 / var3;
                        var3 = var7 - var3;
                        var7 = 2;
                        var3 = var3 / var7;
                        var10 = var4.bind(var5)(var6, var3);
                        var5 = var2.Math;
                        var4 = var5.max;
                        var3 = var8.get;
                        var3 = var3.bind(var8)();
                        var8 = var3.width;
                        var3 = var9.get;
                        var3 = var3.bind(var9)();
                        var9 = var3.width;
                        var3 = var11.get;
                        var3 = var3.bind(var11)();
                        var3 = var9 / var3;
                        var3 = var8 - var3;
                        var3 = var3 / var7;
                        var16 = var4.bind(var5)(var6, var3);
                        var11 = _closure3_slot16;
                        var4 = var11.set;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 11;
                        var3 = var9[var5];
                        var6 = undefined;
                        var13 = var8.bind(var6)(var3);
                        var12 = var13.withSpring;
                        var15 = var2.Math;
                        var14 = var15.min;
                        var19 = var2.Math;
                        var18 = var19.max;
                        var17 = -var16;
                        var3 = var11.get;
                        var3 = var3.bind(var11)();
                        var3 = var18.bind(var19)(var17, var3);
                        var3 = var14.bind(var15)(var16, var3);
                        var7 = _closure1_slot9;
                        var3 = var12.bind(var13)(var3, var7);
                        var3 = var4.bind(var11)(var3);
                        var4 = _closure3_slot17;
                        var3 = var4.set;
                        var5 = var9[var5];
                        var6 = var8.bind(var6)(var5);
                        var5 = var6.withSpring;
                        var9 = var2.Math;
                        var8 = var9.min;
                        var13 = var2.Math;
                        var12 = var13.max;
                        var11 = -var10;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = var12.bind(var13)(var11, var2);
                        var2 = var8.bind(var9)(var10, var2);
                        var2 = var5.bind(var6)(var2, var7);
                        var2 = var3.bind(var4)(var2);
                        _fun0014_ip = 460; continue _fun0014;
 408:
                        var4 = _closure3_slot26;
                        var3 = undefined;
                        var2 = 'fit';
                        var2 = var4.bind(var3)(var2);
                        _fun0014_ip = 460; continue _fun0014;
 425:
                        var4 = _closure3_slot19;
                        var3 = var4.set;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot26;
                        var2 = undefined;
                        var1 = 'cover';
                        var1 = var3.bind(var2)(var1);
                        var1 = undefined;
                        return var1;
 460:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = {};
                var1['numGesturesActive'] = var3;
                var1['isInSnap'] = var2;
                var1['resetToDefaultSize'] = var35;
                var1['scale'] = var6;
                var1['fitScale'] = var11;
                var1['videoDimensions'] = var36;
                var1['containerLayout'] = var21;
                var1['translateX'] = var5;
                var28 = var34[var28];
                var28 = var32.bind(var33)(var28);
                var28 = var28.withSpring;
                var1['withSpring'] = var28;
                var1['SCALE_PHYSICS'] = var19;
                var1['translateY'] = var4;
                var8['__closure'] = var1;
                var1 = 3493652911835.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot25;
                var8['__initData'] = var1;
                var1 = new Array(9);
                var1[0] = var11;
                var1[1] = var3;
                var1[2] = var2;
                var1[3] = var6;
                var1[4] = var36;
                var1[5] = var21;
                var1[6] = var5;
                var1[7] = var4;
                var1[8] = var35;
                var19 = var9.bind(var10)(var8, var1);
                var _closure3_slot29 = var19;
                var1 = var34[var31];
                var28 = var32.bind(var33)(var1);
                var9 = var28.useAnimatedReaction;
                var8 = function be() {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var2 = _closure3_slot2;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var2 = null;
                        var4 = var2 == var1;
                        var2 = undefined;
                        if(var4) { _fun0015_ip = 32; continue _fun0015 }
 27:
                        var2 = var1.id;
 32:
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        if(!var1) { _fun0015_ip = 78; continue _fun0015 }
 43:
                        var4 = _closure3_slot25;
                        var2 = var4.get;
                        var2 = var2.bind(var4)();
                        var2 = !var2;
                        if(var2) { _fun0015_ip = 75; continue _fun0015 }
 62:
                        var4 = _closure3_slot21;
                        var3 = var4.get;
                        var2 = var3.bind(var4)();
 75:
                        var1 = var2;
 78:
                        return var1;
                    }
                };
                var1 = {};
                var1['focused'] = var25;
                var1['id'] = var24;
                var1['isInDefaultZoom'] = var16;
                var1['isInPanToZoom'] = var17;
                var8['__closure'] = var1;
                var1 = 5209373786986.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot26;
                var8['__initData'] = var1;
                var1 = function xe(arg1, arg2) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                        var3 = arg1;
                        var1 = arg2;
                        if(!(var3 !== var1)) { _fun0016_ip = 24; continue _fun0016 }
 10:
                        var2 = _closure3_slot8;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 24:
                        var1 = undefined;
                        return var1;
                    }
                };
                var38 = {};
                var38['setIsFocusedVideoZoomed'] = var39;
                var1['__closure'] = var38;
                var38 = 10707557639101.0;
                var1['__workletHash'] = var38;
                var38 = _closure1_slot27;
                var1['__initData'] = var38;
                var1 = var9.bind(var28)(var8, var1);
                var1 = var34[var31];
                var28 = var32.bind(var33)(var1);
                var9 = var28.useAnimatedReaction;
                var8 = function Ye() {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                        var3 = _closure3_slot2;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        var4 = var2 == var3;
                        var2 = undefined;
                        if(var4) { _fun0017_ip = 32; continue _fun0017 }
 27:
                        var2 = var3.id;
 32:
                        var1 = _closure3_slot0;
                        var1 = var2 === var1;
                        return var1;
                    }
                };
                var1 = {};
                var1['focused'] = var25;
                var1['id'] = var24;
                var8['__closure'] = var1;
                var1 = 619124678280.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot28;
                var8['__initData'] = var1;
                var1 = function Ne(arg1, arg2) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var2 = arg1;
                        var1 = arg2;
                        if(!(var2 !== var1)) { _fun0018_ip = 23; continue _fun0018 }
 10:
                        var2 = _closure3_slot27;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var38 = {};
                var38['resetOnLayoutChange'] = var23;
                var1['__closure'] = var38;
                var38 = 8458824233146.0;
                var1['__workletHash'] = var38;
                var38 = _closure1_slot29;
                var1['__initData'] = var38;
                var1 = var9.bind(var28)(var8, var1);
                var1 = var34[var31];
                var28 = var32.bind(var33)(var1);
                var9 = var28.useAnimatedReaction;
                var8 = function ke() {
                    var2 = _closure3_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = {};
                var1['mode'] = var37;
                var8['__closure'] = var1;
                var1 = 7040117988961.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot30;
                var8['__initData'] = var1;
                var1 = function Me(arg1, arg2) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                        var2 = arg1;
                        var1 = arg2;
                        if(!(var2 !== var1)) { _fun0019_ip = 23; continue _fun0019 }
 10:
                        var2 = _closure3_slot27;
                        var1 = undefined;
                        var1 = var2.bind(var1)();
 23:
                        var1 = undefined;
                        return var1;
                    }
                };
                var37 = {};
                var37['resetOnLayoutChange'] = var23;
                var1['__closure'] = var37;
                var37 = 9279120690968.0;
                var1['__workletHash'] = var37;
                var37 = _closure1_slot31;
                var1['__initData'] = var37;
                var1 = var9.bind(var28)(var8, var1);
                var1 = var34[var31];
                var28 = var32.bind(var33)(var1);
                var9 = var28.useAnimatedReaction;
                var8 = function Xe() {
                    var2 = _closure3_slot6;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = {};
                var1['videoDimensions'] = var36;
                var8['__closure'] = var1;
                var1 = 8748184223523.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot32;
                var8['__initData'] = var1;
                var1 = function Ge(arg1, arg2) {
                    _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                        var5 = arg1;
                        var6 = arg2;
                        var2 = _closure3_slot22;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0020_ip = 81; continue _fun0020 }
 19:
                        var7 = var5.width;
                        var8 = var4 == var6;
                        var2 = undefined;
                        var3 = undefined;
                        if(var8) { _fun0020_ip = 40; continue _fun0020 }
 35:
                        var3 = var6.width;
 40:
                        var3 = var7 === var3;
                        if(!var3) { _fun0020_ip = 70; continue _fun0020 }
 47:
                        var5 = var5.height;
                        var7 = var4 == var6;
                        var4 = undefined;
                        if(var7) { _fun0020_ip = 66; continue _fun0020 }
 61:
                        var4 = var6.height;
 66:
                        var3 = var5 === var4;
 70:
                        if(var3) { _fun0020_ip = 81; continue _fun0020 }
 73:
                        var1 = _closure3_slot27;
                        var1 = var1.bind(var2)();
 81:
                        var1 = undefined;
                        return var1;
                    }
                };
                var36 = {};
                var36['currentSizeThreshold'] = var22;
                var36['resetOnLayoutChange'] = var23;
                var1['__closure'] = var36;
                var36 = 8464422969486.0;
                var1['__workletHash'] = var36;
                var36 = _closure1_slot33;
                var1['__initData'] = var36;
                var1 = var9.bind(var28)(var8, var1);
                var1 = var34[var31];
                var28 = var32.bind(var33)(var1);
                var9 = var28.useAnimatedReaction;
                var8 = function $e() {
                    var2 = _closure3_slot23;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = {};
                var1['coverScale'] = var30;
                var8['__closure'] = var1;
                var1 = 5444376625069.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot34;
                var8['__initData'] = var1;
                var1 = function Fe(arg1, arg2) {
                    _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                        var3 = _closure3_slot22;
                        var2 = var3.get;
                        var3 = var2.bind(var3)();
                        var2 = 'cover';
                        var2 = var2 === var3;
                        if(!var2) { _fun0021_ip = 37; continue _fun0021 }
 27:
                        var5 = arg1;
                        var4 = arg2;
                        var2 = var5 !== var4;
 37:
                        if(!var2) { _fun0021_ip = 51; continue _fun0021 }
 40:
                        var2 = _closure3_slot26;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
 51:
                        var1 = undefined;
                        return var1;
                    }
                };
                var30 = {};
                var30['currentSizeThreshold'] = var22;
                var30['resetToDefaultSize'] = var35;
                var1['__closure'] = var30;
                var30 = 10764193588506.0;
                var1['__workletHash'] = var30;
                var30 = _closure1_slot35;
                var1['__initData'] = var30;
                var1 = var9.bind(var28)(var8, var1);
                var1 = var34[var31];
                var28 = var32.bind(var33)(var1);
                var9 = var28.useAnimatedReaction;
                var8 = function ze() {
                    var2 = _closure3_slot19;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var1 = {};
                var1['isInSnap'] = var2;
                var8['__closure'] = var1;
                var1 = 2178206594630.0;
                var8['__workletHash'] = var1;
                var1 = _closure1_slot36;
                var8['__initData'] = var1;
                var1 = function Ze(arg1, arg2) {
                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                        var2 = arg1;
                        var1 = arg2;
                        var1 = var2 !== var1;
                        if(!var1) { _fun0022_ip = 16; continue _fun0022 }
 13:
                        var1 = var2;
 16:
                        if(!var1) { _fun0022_ip = 98; continue _fun0022 }
 19:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 7;
                        var1 = var5[var1];
                        var3 = undefined;
                        var7 = var4.bind(var3)(var1);
                        var6 = var7.runOnJS;
                        var1 = 13;
                        var2 = var5[var1];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.triggerHapticFeedback;
                        var2 = var6.bind(var7)(var2);
                        var1 = var5[var1];
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var2.bind(var3)(var1);
 98:
                        var1 = undefined;
                        return var1;
                    }
                };
                var30 = {};
                var31 = var34[var31];
                var31 = var32.bind(var33)(var31);
                var31 = var31.runOnJS;
                var30['runOnJS'] = var31;
                var31 = 13;
                var35 = var34[var31];
                var35 = var32.bind(var33)(var35);
                var35 = var35.triggerHapticFeedback;
                var30['triggerHapticFeedback'] = var35;
                var31 = var34[var31];
                var31 = var32.bind(var33)(var31);
                var31 = var31.HapticFeedbackTypes;
                var30['HapticFeedbackTypes'] = var31;
                var1['__closure'] = var30;
                var30 = 11115846398818.0;
                var1['__workletHash'] = var30;
                var29 = _closure1_slot37;
                var1['__initData'] = var29;
                var1 = var9.bind(var28)(var8, var1);
                var1 = {};
                var9 = var10.useMemo;
                var8 = new Array(22);
                var8[0] = var27;
                var8[1] = var26;
                var8[2] = var25;
                var8[3] = var24;
                var8[4] = var6;
                var8[5] = var5;
                var8[6] = var4;
                var8[7] = var23;
                var8[8] = var3;
                var8[9] = var22;
                var8[10] = var21;
                var8[11] = var2;
                var8[12] = var20;
                var8[13] = var19;
                var8[14] = var18;
                var8[15] = var17;
                var8[16] = var16;
                var8[17] = var15;
                var8[18] = var14;
                var8[19] = var13;
                var8[20] = var12;
                var8[21] = var11;
                var7 = function() {
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var7 = 14;
                    var2 = var18[var7];
                    var16 = undefined;
                    var2 = var17.bind(var16)(var2);
                    var5 = var2.Gesture;
                    var4 = var5.Simultaneous;
                    var2 = var18[var7];
                    var2 = var17.bind(var16)(var2);
                    var9 = var2.Gesture;
                    var6 = var9.Exclusive;
                    var2 = var18[var7];
                    var2 = var17.bind(var16)(var2);
                    var3 = var2.Gesture;
                    var2 = var3.Tap;
                    var10 = var2.bind(var3)();
                    var3 = var10.numberOfTaps;
                    var2 = 2;
                    var10 = var3.bind(var10)(var2);
                    var3 = var10.onTouchesMove;
                    var2 = function V(arg1, arg2) {
                        var2 = arg2;
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var11 = {};
                    var2['__closure'] = var11;
                    var11 = 17368742583362.0;
                    var2['__workletHash'] = var11;
                    var11 = _closure1_slot39;
                    var2['__initData'] = var11;
                    var10 = var3.bind(var10)(var2);
                    var3 = var10.onStart;
                    var2 = function O() {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                            var3 = _closure3_slot25;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0023_ip = 34; continue _fun0023 }
 19:
                            var3 = _closure3_slot27;
                            var2 = undefined;
                            var2 = var3.bind(var2)();
                            _fun0023_ip = 163; continue _fun0023;
 34:
                            var3 = _closure3_slot2;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var4 = null;
                            var6 = var4 == var2;
                            var3 = undefined;
                            var5 = undefined;
                            if(var6) { _fun0023_ip = 65; continue _fun0023 }
 60:
                            var5 = var2.id;
 65:
                            var2 = _closure3_slot0;
                            if(!(var5 === var2)) { _fun0023_ip = 117; continue _fun0023 }
 73:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var2 = 7;
                            var2 = var6[var2];
                            var6 = var5.bind(var3)(var2);
                            var5 = var6.runOnJS;
                            var2 = _closure3_slot11;
                            var2 = var5.bind(var6)(var2);
                            var2 = var2.bind(var3)(var4);
                            _fun0023_ip = 163; continue _fun0023;
 117:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 7;
                            var2 = var5[var2];
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.runOnJS;
                            var2 = _closure3_slot11;
                            var2 = var4.bind(var5)(var2);
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
 163:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = {};
                    var12 = _closure3_slot25;
                    var11['isInDefaultZoom'] = var12;
                    var12 = _closure3_slot27;
                    var11['resetOnLayoutChange'] = var12;
                    var29 = _closure3_slot2;
                    var11['focused'] = var29;
                    var28 = _closure3_slot0;
                    var11['id'] = var28;
                    var26 = 7;
                    var12 = var18[var26];
                    var12 = var17.bind(var16)(var12);
                    var12 = var12.runOnJS;
                    var11['runOnJS'] = var12;
                    var12 = _closure3_slot11;
                    var11['setFocused'] = var12;
                    var2['__closure'] = var11;
                    var11 = 10743965328356.0;
                    var2['__workletHash'] = var11;
                    var11 = _closure1_slot38;
                    var2['__initData'] = var11;
                    var3 = var3.bind(var10)(var2);
                    var2 = var18[var7];
                    var2 = var17.bind(var16)(var2);
                    var10 = var2.Gesture;
                    var2 = var10.Tap;
                    var11 = var2.bind(var10)();
                    var10 = var11.onTouchesMove;
                    var2 = function E(arg1, arg2) {
                        var2 = arg2;
                        var1 = var2.fail;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var12 = {};
                    var2['__closure'] = var12;
                    var12 = 8766053850176.0;
                    var2['__workletHash'] = var12;
                    var12 = _closure1_slot41;
                    var2['__initData'] = var12;
                    var11 = var10.bind(var11)(var2);
                    var10 = var11.onStart;
                    var2 = function P() {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                            var3 = _closure3_slot13;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            var4 = var2.mode;
                            var3 = _closure1_slot7;
                            var3 = var3.HIDDEN;
                            if(!(var4 !== var3)) { _fun0024_ip = 90; continue _fun0024 }
 38:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 7;
                            var3 = var5[var3];
                            var5 = undefined;
                            var6 = var4.bind(var5)(var3);
                            var4 = var6.runOnJS;
                            var3 = _closure3_slot12;
                            var4 = var4.bind(var6)(var3);
                            var3 = {};
                            var6 = true;
                            var3['debounce'] = var6;
                            var3 = var4.bind(var5)(var3);
                            _fun0024_ip = 140; continue _fun0024;
 90:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var2 = var3[var2];
                            var3 = undefined;
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.runOnJS;
                            var1 = _closure3_slot14;
                            var2 = var2.bind(var4)(var1);
                            var1 = {};
                            var4 = true;
                            var1['debounce'] = var4;
                            var1 = var2.bind(var3)(var1);
 140:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var12 = {};
                    var13 = _closure3_slot13;
                    var12['controlsSpecs'] = var13;
                    var13 = _closure1_slot7;
                    var12['VoicePanelControlsModes'] = var13;
                    var13 = var18[var26];
                    var13 = var17.bind(var16)(var13);
                    var13 = var13.runOnJS;
                    var12['runOnJS'] = var13;
                    var13 = _closure3_slot14;
                    var12['showControls'] = var13;
                    var25 = _closure3_slot12;
                    var12['hideControls'] = var25;
                    var2['__closure'] = var12;
                    var12 = 11260765819879.0;
                    var2['__workletHash'] = var12;
                    var12 = _closure1_slot40;
                    var2['__initData'] = var12;
                    var2 = var10.bind(var11)(var2);
                    var3 = var6.bind(var9)(var3, var2);
                    var2 = var18[var7];
                    var2 = var17.bind(var16)(var2);
                    var6 = var2.Gesture;
                    var2 = var6.Pinch;
                    var10 = var2.bind(var6)();
                    var9 = var10.enabled;
                    var6 = _closure3_slot4;
                    var2 = !var6;
                    var10 = var9.bind(var10)(var2);
                    var9 = var10.onTouchesDown;
                    var2 = function D(arg1, arg2) {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                            var3 = arg2;
                            var4 = _closure3_slot2;
                            var1 = var4.get;
                            var5 = var1.bind(var4)();
                            var1 = null;
                            var6 = var1 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0025_ip = 37; continue _fun0025 }
 32:
                            var4 = var5.id;
 37:
                            var2 = _closure3_slot0;
                            if(!(var4 !== var2)) { _fun0025_ip = 55; continue _fun0025 }
 45:
                            var2 = var3.fail;
                            var2 = var2.bind(var3)();
 55:
                            return var1;
                        }
                    };
                    var11 = {};
                    var11['focused'] = var29;
                    var11['id'] = var28;
                    var2['__closure'] = var11;
                    var11 = 8765017804058.0;
                    var2['__workletHash'] = var11;
                    var11 = _closure1_slot45;
                    var2['__initData'] = var11;
                    var11 = var9.bind(var10)(var2);
                    var9 = var11.onStart;
                    var2 = function I() {
                        var4 = _closure3_slot18;
                        var3 = var4.set;
                        var2 = var4.get;
                        var5 = var2.bind(var4)();
                        var2 = 1;
                        var2 = var5 + var2;
                        var2 = var3.bind(var4)(var2);
                        var4 = _closure3_slot21;
                        var3 = var4.set;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot22;
                        var2 = var3.set;
                        var1 = null;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var12 = {};
                    var19 = _closure3_slot18;
                    var12['numGesturesActive'] = var19;
                    var10 = _closure3_slot21;
                    var12['isInPanToZoom'] = var10;
                    var24 = _closure3_slot22;
                    var12['currentSizeThreshold'] = var24;
                    var2['__closure'] = var12;
                    var12 = 3449238089307.0;
                    var2['__workletHash'] = var12;
                    var12 = _closure1_slot44;
                    var2['__initData'] = var12;
                    var11 = var9.bind(var11)(var2);
                    var9 = var11.onChange;
                    var2 = function w(arg1) {
                        var4 = arg1;
                        var8 = _closure3_slot15;
                        var5 = var8.set;
                        var1 = var8.get;
                        var6 = var1.bind(var8)();
                        var10 = _closure1_slot15;
                        var1 = var8.get;
                        var9 = var1.bind(var8)();
                        var7 = var4.scaleChange;
                        var3 = _closure3_slot24;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = undefined;
                        var3 = var10.bind(var1)(var9, var7, var3);
                        var3 = var6 * var3;
                        var3 = var5.bind(var8)(var3);
                        var5 = var4.focalX;
                        var9 = _closure3_slot5;
                        var3 = var9.get;
                        var3 = var3.bind(var9)();
                        var3 = var3.width;
                        var6 = 2;
                        var3 = var3 / var6;
                        var7 = var5 - var3;
                        var5 = var4.focalY;
                        var3 = var9.get;
                        var3 = var3.bind(var9)();
                        var3 = var3.height;
                        var3 = var3 / var6;
                        var6 = var5 - var3;
                        var3 = var4.scaleChange;
                        var5 = 1;
                        var10 = var3 - var5;
                        var3 = var8.get;
                        var9 = var3.bind(var8)();
                        var3 = -1;
                        var7 = var3 * var7;
                        var7 = var7 * var10;
                        var7 = var7 / var9;
                        var4 = var4.scaleChange;
                        var5 = var4 - var5;
                        var4 = var8.get;
                        var4 = var4.bind(var8)();
                        var3 = var3 * var6;
                        var3 = var3 * var5;
                        var6 = var3 / var4;
                        var5 = _closure3_slot16;
                        var4 = var5.set;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var3 + var7;
                        var3 = var4.bind(var5)(var3);
                        var5 = _closure3_slot17;
                        var4 = var5.set;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        var3 = var3 + var6;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure3_slot19;
                        var3 = var4.set;
                        var2 = _closure3_slot28;
                        var2 = var2.bind(var1)();
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var12 = {};
                    var14 = _closure3_slot15;
                    var12['scale'] = var14;
                    var23 = _closure1_slot15;
                    var12['getScaleChangeWithOverscroll'] = var23;
                    var22 = _closure3_slot24;
                    var12['fitScale'] = var22;
                    var13 = _closure3_slot5;
                    var12['containerLayout'] = var13;
                    var15 = _closure3_slot16;
                    var12['translateX'] = var15;
                    var13 = _closure3_slot17;
                    var12['translateY'] = var13;
                    var21 = _closure3_slot19;
                    var12['isInSnap'] = var21;
                    var20 = _closure3_slot28;
                    var12['isInCoverSnap'] = var20;
                    var2['__closure'] = var12;
                    var12 = 2077670235308.0;
                    var2['__workletHash'] = var12;
                    var12 = _closure1_slot43;
                    var2['__initData'] = var12;
                    var11 = var9.bind(var11)(var2);
                    var9 = var11.onEnd;
                    var2 = function p() {
                        var4 = _closure3_slot18;
                        var3 = var4.set;
                        var2 = var4.get;
                        var5 = var2.bind(var4)();
                        var2 = 1;
                        var2 = var5 - var2;
                        var2 = var3.bind(var4)(var2);
                        var2 = _closure3_slot29;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var30 = {};
                    var30['numGesturesActive'] = var19;
                    var12 = _closure3_slot29;
                    var30['handleMovementEnd'] = var12;
                    var2['__closure'] = var30;
                    var30 = 5853458336611.0;
                    var2['__workletHash'] = var30;
                    var30 = _closure1_slot42;
                    var2['__initData'] = var30;
                    var2 = var9.bind(var11)(var2);
                    var7 = var18[var7];
                    var7 = var17.bind(var16)(var7);
                    var9 = var7.Gesture;
                    var7 = var9.Pan;
                    var9 = var7.bind(var9)();
                    var7 = var9.enabled;
                    var6 = !var6;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.requireExternalGestureToFail;
                    var6 = _closure3_slot10;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.averageTouches;
                    var6 = true;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.onTouchesDown;
                    var6 = function f(arg1, arg2) {
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                            var3 = arg2;
                            var4 = _closure3_slot2;
                            var1 = var4.get;
                            var5 = var1.bind(var4)();
                            var1 = null;
                            var6 = var1 == var5;
                            var1 = undefined;
                            var4 = undefined;
                            if(var6) { _fun0026_ip = 37; continue _fun0026 }
 32:
                            var4 = var5.id;
 37:
                            var2 = _closure3_slot0;
                            if(!(var4 !== var2)) { _fun0026_ip = 55; continue _fun0026 }
 45:
                            var2 = var3.fail;
                            var2 = var2.bind(var3)();
 55:
                            return var1;
                        }
                    };
                    var11 = {};
                    var11['focused'] = var29;
                    var11['id'] = var28;
                    var6['__closure'] = var11;
                    var11 = 2184905113389.0;
                    var6['__workletHash'] = var11;
                    var11 = _closure1_slot51;
                    var6['__initData'] = var11;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.onBegin;
                    var6 = function S() {
                        var1 = global;
                        var3 = var1.Date;
                        var2 = var3.now;
                        var5 = var2.bind(var3)();
                        var3 = _closure3_slot20;
                        var4 = var3.get;
                        var4 = var4.bind(var3)();
                        var6 = var5 - var4;
                        var5 = _closure3_slot21;
                        var4 = var5.set;
                        var2 = 250;
                        var2 = var6 <= var2;
                        var2 = var4.bind(var5)(var2);
                        var2 = var3.set;
                        var4 = var1.Date;
                        var1 = var4.now;
                        var1 = var1.bind(var4)();
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var11 = {};
                    var27 = _closure3_slot20;
                    var11['lastTapTimestamp'] = var27;
                    var27 = 250;
                    var11['PAN_TO_ZOOM_TAP_TIME_MILLIS'] = var27;
                    var11['isInPanToZoom'] = var10;
                    var6['__closure'] = var11;
                    var11 = 7713579688732.0;
                    var6['__workletHash'] = var11;
                    var11 = _closure1_slot50;
                    var6['__initData'] = var11;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.onStart;
                    var6 = function l() {
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                            var3 = _closure3_slot21;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(!var2) { _fun0027_ip = 62; continue _fun0027 }
 19:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 7;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.runOnJS;
                            var2 = _closure3_slot12;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.bind(var3)();
 62:
                            var4 = _closure3_slot18;
                            var3 = var4.set;
                            var2 = var4.get;
                            var5 = var2.bind(var4)();
                            var2 = 1;
                            var2 = var5 + var2;
                            var2 = var3.bind(var4)(var2);
                            var3 = _closure3_slot22;
                            var2 = var3.set;
                            var1 = null;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = {};
                    var11['isInPanToZoom'] = var10;
                    var26 = var18[var26];
                    var26 = var17.bind(var16)(var26);
                    var26 = var26.runOnJS;
                    var11['runOnJS'] = var26;
                    var11['hideControls'] = var25;
                    var11['numGesturesActive'] = var19;
                    var11['currentSizeThreshold'] = var24;
                    var6['__closure'] = var11;
                    var11 = 16349993539830.0;
                    var6['__workletHash'] = var11;
                    var11 = _closure1_slot49;
                    var6['__initData'] = var11;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.onChange;
                    var6 = function s(arg1) {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                            var2 = arg1;
                            var4 = _closure3_slot21;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            if(var3) { _fun0028_ip = 120; continue _fun0028 }
 22:
                            var5 = _closure3_slot16;
                            var4 = var5.set;
                            var3 = var5.get;
                            var6 = var3.bind(var5)();
                            var7 = var2.changeX;
                            var8 = _closure3_slot15;
                            var3 = var8.get;
                            var3 = var3.bind(var8)();
                            var3 = var7 / var3;
                            var3 = var6 + var3;
                            var3 = var4.bind(var5)(var3);
                            var5 = _closure3_slot17;
                            var4 = var5.set;
                            var3 = var5.get;
                            var6 = var3.bind(var5)();
                            var7 = var2.changeY;
                            var3 = var8.get;
                            var3 = var3.bind(var8)();
                            var3 = var7 / var3;
                            var3 = var6 + var3;
                            var3 = var4.bind(var5)(var3);
                            _fun0028_ip = 212; continue _fun0028;
 120:
                            var3 = var2.changeY;
                            var2 = 0.0075;
                            var10 = var3 * var2;
                            var4 = _closure3_slot15;
                            var3 = var4.set;
                            var2 = var4.get;
                            var5 = var2.bind(var4)();
                            var9 = _closure1_slot15;
                            var2 = var4.get;
                            var8 = var2.bind(var4)();
                            var6 = _closure3_slot24;
                            var2 = var6.get;
                            var7 = var2.bind(var6)();
                            var6 = undefined;
                            var2 = 1;
                            var2 = var2 + var10;
                            var2 = var9.bind(var6)(var8, var2, var7);
                            var2 = var5 * var2;
                            var2 = var3.bind(var4)(var2);
 212:
                            var4 = _closure3_slot19;
                            var3 = var4.set;
                            var2 = _closure3_slot28;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        }
                    };
                    var11 = {};
                    var11['isInPanToZoom'] = var10;
                    var24 = 0.0075;
                    var11['PAN_TO_ZOOM_SCALE_FACTOR'] = var24;
                    var11['scale'] = var14;
                    var11['getScaleChangeWithOverscroll'] = var23;
                    var11['fitScale'] = var22;
                    var11['translateX'] = var15;
                    var11['translateY'] = var13;
                    var11['isInSnap'] = var21;
                    var11['isInCoverSnap'] = var20;
                    var6['__closure'] = var11;
                    var11 = 17282206686388.0;
                    var6['__workletHash'] = var11;
                    var11 = _closure1_slot48;
                    var6['__initData'] = var11;
                    var9 = var7.bind(var9)(var6);
                    var7 = var9.onEnd;
                    var6 = function n(arg1) {
                        var3 = arg1;
                        var5 = _closure3_slot18;
                        var4 = var5.set;
                        var1 = var5.get;
                        var6 = var1.bind(var5)();
                        var1 = 1;
                        var1 = var6 - var1;
                        var1 = var4.bind(var5)(var1);
                        var12 = _closure3_slot16;
                        var5 = var12.set;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var6 = 11;
                        var4 = var9[var6];
                        var1 = undefined;
                        var14 = var7.bind(var1)(var4);
                        var13 = var14.withSpring;
                        var4 = var12.get;
                        var15 = var4.bind(var12)();
                        var4 = var3.velocityX;
                        var10 = 0.05;
                        var16 = var4 * var10;
                        var11 = _closure3_slot15;
                        var4 = var11.get;
                        var4 = var4.bind(var11)();
                        var4 = var16 / var4;
                        var4 = var15 + var4;
                        var8 = _closure1_slot9;
                        var4 = var13.bind(var14)(var4, var8);
                        var4 = var5.bind(var12)(var4);
                        var5 = _closure3_slot17;
                        var4 = var5.set;
                        var6 = var9[var6];
                        var7 = var7.bind(var1)(var6);
                        var6 = var7.withSpring;
                        var9 = var5.get;
                        var9 = var9.bind(var5)();
                        var3 = var3.velocityY;
                        var10 = var3 * var10;
                        var3 = var11.get;
                        var3 = var3.bind(var11)();
                        var3 = var10 / var3;
                        var3 = var9 + var3;
                        var3 = var6.bind(var7)(var3, var8);
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure3_slot29;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var11 = {};
                    var11['numGesturesActive'] = var19;
                    var11['translateX'] = var15;
                    var15 = 11;
                    var15 = var18[var15];
                    var15 = var17.bind(var16)(var15);
                    var15 = var15.withSpring;
                    var11['withSpring'] = var15;
                    var15 = 0.05;
                    var11['FLING_VELOCITY_SCALING'] = var15;
                    var11['scale'] = var14;
                    var14 = _closure1_slot9;
                    var11['SCALE_PHYSICS'] = var14;
                    var11['translateY'] = var13;
                    var11['handleMovementEnd'] = var12;
                    var6['__closure'] = var11;
                    var11 = 10045783163820.0;
                    var6['__workletHash'] = var11;
                    var11 = _closure1_slot47;
                    var6['__initData'] = var11;
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.onFinalize;
                    var1 = function t() {
                        var3 = _closure3_slot21;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var9 = {};
                    var9['isInPanToZoom'] = var10;
                    var1['__closure'] = var9;
                    var9 = 2318423816868.0;
                    var1['__workletHash'] = var9;
                    var8 = _closure1_slot46;
                    var1['__initData'] = var8;
                    var1 = var6.bind(var7)(var1);
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var7 = var9.bind(var10)(var7, var8);
                var1['gesture'] = var7;
                var1['scale'] = var6;
                var1['translateX'] = var5;
                var1['translateY'] = var4;
                var1['numGesturesActive'] = var3;
                var1['isInSnap'] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var5);
            var5 = var3.gesture;
            var29 = var3.scale;
            _closure2_slot19 = var29;
            var28 = var3.translateX;
            _closure2_slot20 = var28;
            var27 = var3.translateY;
            _closure2_slot21 = var27;
            var26 = var3.isInSnap;
            _closure2_slot22 = var26;
            var3 = var8[var25];
            var14 = var2.bind(var4)(var3);
            var6 = var14.useAnimatedStyle;
            var3 = function ze() {
                _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                    var2 = _closure2_slot13;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var7 = var1.width;
                    var8 = var1.height;
                    var1 = _closure2_slot14;
                    var4 = var1.mode;
                    var1 = _closure1_slot8;
                    var1 = var1.IN_APP;
                    var3 = var7;
                    var2 = var8;
                    if(!(var4 === var1)) { _fun0029_ip = 193; continue _fun0029 }
 61:
                    if(!(!(var7 > var8))) { _fun0029_ip = 127; continue _fun0029 }
 65:
                    var1 = _closure2_slot14;
                    var1 = var1.width;
                    var1 = var1 / var7;
                    var4 = var8 * var1;
                    var6 = _closure2_slot19;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var4 / var1;
                    var4 = _closure2_slot14;
                    var6 = var4.width;
                    var9 = _closure2_slot19;
                    var4 = var9.get;
                    var4 = var4.bind(var9)();
                    var4 = var6 / var4;
                    _fun0029_ip = 187; continue _fun0029;
 127:
                    var6 = _closure2_slot14;
                    var6 = var6.height;
                    var6 = var6 / var8;
                    var7 = var7 * var6;
                    var8 = _closure2_slot19;
                    var6 = var8.get;
                    var6 = var6.bind(var8)();
                    var4 = var7 / var6;
                    var6 = _closure2_slot14;
                    var8 = var6.height;
                    var9 = _closure2_slot19;
                    var6 = var9.get;
                    var6 = var6.bind(var9)();
                    var1 = var8 / var6;
 187:
                    var3 = var4;
                    var2 = var1;
 193:
                    var1 = {};
                    var1['width'] = var3;
                    var1['height'] = var2;
                    var3 = _closure2_slot12;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var4 = 1;
                    var2 = var4;
                    if(!var3) { _fun0029_ip = 227; continue _fun0029 }
 225:
                    var2 = 0;
 227:
                    var1['opacity'] = var2;
                    var3 = {};
                    var6 = _closure2_slot19;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    var3['scale'] = var2;
                    var2 = new Array(4);
                    var2[0] = var3;
                    var3 = {};
                    var7 = _closure2_slot20;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var3['translateX'] = var6;
                    var2[1] = var3;
                    var3 = {};
                    var7 = _closure2_slot21;
                    var6 = var7.get;
                    var6 = var6.bind(var7)();
                    var3['translateY'] = var6;
                    var2[2] = var3;
                    var3 = {};
                    var5 = _closure2_slot4;
                    if(!var5) { _fun0029_ip = 322; continue _fun0029 }
 316:
                    var4 = -1;
 322:
                    var3['scaleX'] = var4;
                    var2[3] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var17['videoDimensions'] = var31;
            var17['pipState'] = var30;
            var30 = _closure1_slot8;
            var17['VoicePanelPIPModes'] = var30;
            var17['scale'] = var29;
            var17['disableAnimations'] = var9;
            var17['translateX'] = var28;
            var17['translateY'] = var27;
            var17['mirror'] = var18;
            var3['__closure'] = var17;
            var17 = 15210768014660.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot57;
            var3['__initData'] = var17;
            var18 = var6.bind(var14)(var3);
            var3 = var8[var25];
            var14 = var2.bind(var4)(var3);
            var6 = var14.useAnimatedStyle;
            var3 = function Je() {
                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                    var2 = _closure2_slot22;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    if(var1) { _fun0030_ip = 213; continue _fun0030 }
 22:
                    var1 = {'position': 'absolute', 'top': 4294967295, 'left': 4294967295, 'bottom': 4294967295, 'right': 4294967295, 'borderWidth': 2, 'borderRadius': 26, 'overflow': 'hidden', 'borderColor': 'white'};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var3 = var5[var3];
                    var11 = undefined;
                    var5 = var4.bind(var11)(var3);
                    var4 = var5.withDelay;
                    var6 = _closure2_slot8;
                    var3 = var6.get;
                    var3 = var3.bind(var6)();
                    var12 = null;
                    var6 = var12 == var3;
                    var9 = undefined;
                    if(var6) { _fun0030_ip = 96; continue _fun0030 }
 91:
                    var9 = var3.id;
 96:
                    var8 = _closure2_slot0;
                    var3 = 0;
                    if(!(var9 !== var8)) { _fun0030_ip = 112; continue _fun0030 }
 106:
                    var3 = 300;
 112:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var8 = 20;
                    var8 = var10[var8];
                    var9 = var9.bind(var11)(var8);
                    var8 = var9.withTiming;
                    var13 = _closure2_slot8;
                    var10 = var13.get;
                    var10 = var10.bind(var13)();
                    var12 = var12 == var10;
                    var11 = undefined;
                    if(var12) { _fun0030_ip = 164; continue _fun0030 }
 159:
                    var11 = var10.id;
 164:
                    var10 = _closure2_slot0;
                    var7 = 0.3;
                    if(!(var11 === var10)) { _fun0030_ip = 184; continue _fun0030 }
 182:
                    var7 = 0;
 184:
                    var6 = _closure1_slot12;
                    var2 = 'animate-never';
                    var2 = var8.bind(var9)(var7, var6, var2);
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    _fun0030_ip = 227; continue _fun0030;
 213:
                    var1 = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0, 'right': 0, 'borderWidth': 25, 'overflow': 'hidden', 'borderColor': 'white', 'opacity': 0.5};
 227:
                    return var1;
                }
            };
            var17 = {};
            var17['isInSnap'] = var26;
            var26 = 25;
            var17['SNAP_EDGE_INNER_THRESHOLD'] = var26;
            var25 = var8[var25];
            var25 = var2.bind(var4)(var25);
            var25 = var25.withDelay;
            var17['withDelay'] = var25;
            var17['focused'] = var24;
            var17['id'] = var23;
            var23 = 20;
            var23 = var8[var23];
            var23 = var2.bind(var4)(var23);
            var23 = var23.withTiming;
            var17['withTiming'] = var23;
            var23 = _closure1_slot12;
            var17['OPACITY_TIMING'] = var23;
            var3['__closure'] = var17;
            var17 = 12201189117918.0;
            var3['__workletHash'] = var17;
            var17 = _closure1_slot58;
            var3['__initData'] = var17;
            var17 = var6.bind(var14)(var3);
            var6 = var7.useCallback;
            var3 = function We(arg1) {
                var4 = _closure2_slot6;
                var2 = _closure2_slot12;
                var1 = var2.get;
                var3 = var1.bind(var2)();
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = {};
            var1['layout'] = var11;
            var1['disableAnimations'] = var9;
            var3['__closure'] = var1;
            var1 = 7201226784035.0;
            var3['__workletHash'] = var1;
            var1 = _closure1_slot59;
            var3['__initData'] = var1;
            var1 = new Array(2);
            var1[0] = var11;
            var1[1] = var9;
            var11 = var6.bind(var7)(var3, var1);
            var3 = _closure1_slot10;
            var1 = 14;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var5;
            var7 = _closure1_slot11;
            var9 = 21;
            var5 = var8[var9];
            var6 = var12.bind(var4)(var5);
            var5 = {};
            var23 = var13.wrapper;
            var14 = new Array(2);
            var14[0] = var23;
            var14[1] = var22;
            var5['style'] = var14;
            var5['layout'] = var11;
            var8 = var8[var9];
            var12 = var12.bind(var4)(var8);
            var8 = {};
            var22 = var13.animatedWrapperStyles;
            var14 = new Array(2);
            var14[0] = var22;
            var14[1] = var18;
            var8['style'] = var14;
            var8['layout'] = var11;
            var18 = _closure1_slot13;
            var14 = {};
            var14['streamId'] = var21;
            var14['onReady'] = var20;
            var14['onSize'] = var19;
            var19 = var13.video;
            var14['style'] = var19;
            var14['layout'] = var11;
            var14 = var3.bind(var4)(var18, var14);
            var8['children'] = var14;
            var12 = var3.bind(var4)(var12, var8);
            var8 = new Array(2);
            var8[0] = var12;
            var12 = _closure1_slot10;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            if(var10) { _fun0003_ip = 1549; continue _fun0003 }
 1512:
            var9 = var15[var9];
            var10 = var14.bind(var4)(var9);
            var9 = {};
            var9['style'] = var17;
            var9['layout'] = var11;
            var11 = 'none';
            var9['pointerEvents'] = var11;
            var9 = var12.bind(var4)(var10, var9);
            _fun0003_ip = 1611; continue _fun0003;
 1549:
            var10 = 22;
            var10 = var15[var10];
            var11 = var14.bind(var4)(var10);
            var10 = {};
            var10['animate'] = var16;
            var13 = var13.spinner;
            var10['style'] = var13;
            var13 = 23;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.BRAND_500;
            var10['color'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1611:
            var8[1] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
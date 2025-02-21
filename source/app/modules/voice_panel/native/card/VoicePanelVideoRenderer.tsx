// app/modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    option = 0;
    tangon = oscard[option];
    entity = undefined;
    tangon = offset.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    golfie = oscard[tangon];
    tangon = argCor;
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    verify = tangon.VoicePanelModes;
    var _closure1_slot5 = verify;
    tangon = tangon.MODE_CHANGE_PHYSICS;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelControlsModes;
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.VoicePanelPIPModes;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.SCALE_PHYSICS;
    var _closure1_slot9 = tangon;
    tangon = 6;
    verify = oscard[tangon];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot10 = verify;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsxs;
    var _closure1_slot11 = tangon;
    tangon = {};
    tangon['duration'] = option;
    var _closure1_slot12 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    verify = offset.bind(entity)(tangon);
    option = verify.createAnimatedComponent;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = offset.bind(entity)(tangon);
    tangon = option.bind(verify)(tangon);
    var _closure1_slot13 = tangon;
    tangon = {};
    option = 'function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){const{MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR}=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;}';
    tangon['code'] = option;
    var _closure1_slot14 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getScaleChangeWithOverscroll
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                entity = argBar;
                zuuluu = argBaz;
                if(!(!(michal >= zuuluu))) { _fun00002_ip = 78; continue _fun00001 }
 13:
                zuuluu = 1;
                michal = zuuluu - michal;
                tangon = entity - zuuluu;
                report = global;
                golfie = report.Math;
                oscard = golfie.max;
                report = 0.1;
                option = michal * michal;
                michal = 5;
                michal = option * michal;
                michal = zuuluu - michal;
                michal = oscard.bind(golfie)(report, michal);
                michal = tangon * michal;
                michal = zuuluu + michal;
                return michal;
 78:
                return entity;
            }
        };
        michal = {'MIN_OVERSCROLL': 0.1, 'OVERSCOLL_INTENSITY_FACTOR': 5};
        entity['__closure'] = michal;
        michal = 8727721301304.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot14;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot15 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    verify = report.bind(entity)(tangon);
    option = verify.createStyles;
    tangon = {};
    yankee = 'absolute';
    offset = {'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    tangon['wrapper'] = offset;
    offset = {};
    offset['position'] = yankee;
    tangon['animatedWrapperStyles'] = offset;
    offset = {'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'height': '100%'};
    tangon['videoRenderer'] = offset;
    offset = {'width': '100%', 'height': '100%'};
    tangon['video'] = offset;
    offset = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967280, 'marginLeft': 4294967280, 'height': 32, 'width': 32};
    tangon['spinner'] = offset;
    tangon = option.bind(verify)(tangon);
    var _closure1_slot16 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    tangon['code'] = option;
    var _closure1_slot17 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    tangon['code'] = option;
    var _closure1_slot18 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}';
    tangon['code'] = option;
    var _closure1_slot19 = tangon;
    tangon = {};
    option = "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}";
    tangon['code'] = option;
    var _closure1_slot20 = tangon;
    tangon = {};
    option = "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}";
    tangon['code'] = option;
    var _closure1_slot21 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}';
    tangon['code'] = option;
    var _closure1_slot22 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}';
    tangon['code'] = option;
    var _closure1_slot23 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}';
    tangon['code'] = option;
    var _closure1_slot24 = tangon;
    tangon = {};
    option = "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}";
    tangon['code'] = option;
    var _closure1_slot25 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}';
    tangon['code'] = option;
    var _closure1_slot26 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}';
    tangon['code'] = option;
    var _closure1_slot27 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}';
    tangon['code'] = option;
    var _closure1_slot28 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}';
    tangon['code'] = option;
    var _closure1_slot29 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}';
    tangon['code'] = option;
    var _closure1_slot30 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}';
    tangon['code'] = option;
    var _closure1_slot31 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}';
    tangon['code'] = option;
    var _closure1_slot32 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}';
    tangon['code'] = option;
    var _closure1_slot33 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}';
    tangon['code'] = option;
    var _closure1_slot34 = tangon;
    tangon = {};
    option = "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}";
    tangon['code'] = option;
    var _closure1_slot35 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}';
    tangon['code'] = option;
    var _closure1_slot36 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}';
    tangon['code'] = option;
    var _closure1_slot37 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx23(e,manager){return manager.fail();}';
    tangon['code'] = option;
    var _closure1_slot38 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx24(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}';
    tangon['code'] = option;
    var _closure1_slot39 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx25(e,manager){return manager.fail();}';
    tangon['code'] = option;
    var _closure1_slot40 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx26(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}';
    tangon['code'] = option;
    var _closure1_slot41 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx27(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}}';
    tangon['code'] = option;
    var _closure1_slot42 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx28(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}';
    tangon['code'] = option;
    var _closure1_slot43 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx29(event){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}';
    tangon['code'] = option;
    var _closure1_slot44 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx30(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}';
    tangon['code'] = option;
    var _closure1_slot45 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx31(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}}';
    tangon['code'] = option;
    var _closure1_slot46 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx32(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}';
    tangon['code'] = option;
    var _closure1_slot47 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx33(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}';
    tangon['code'] = option;
    var _closure1_slot48 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx34(event){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());}';
    tangon['code'] = option;
    var _closure1_slot49 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx35(event){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}';
    tangon['code'] = option;
    var _closure1_slot50 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx36(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}';
    tangon['code'] = option;
    var _closure1_slot51 = tangon;
    tangon = {};
    option = 'function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}';
    tangon['code'] = option;
    var _closure1_slot52 = tangon;
    tangon = function() {
        entity = function(argFoo) { // Original name: shouldMakeActive
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                report = entity.mode;
                tangon = entity.focusedId;
                zuuluu = entity.selfId;
                entity = entity.isScrollVisible;
                michal = _closure1_slot5;
                michal = michal.PIP;
                michal = report === michal;
                entity = !entity;
                if(entity) { _fun00004_ip = 52; continue _fun00003 }
 49:
                entity = michal;
 52:
                if(entity) { _fun00004_ip = 71; continue _fun00003 }
 55:
                michal = null;
                michal = michal != tangon;
                if(!michal) { _fun00004_ip = 68; continue _fun00003 }
 64:
                michal = tangon !== zuuluu;
 68:
                entity = michal;
 71:
                entity = !entity;
                return entity;
            }
        };
        zuuluu = {};
        tangon = _closure1_slot5;
        zuuluu['VoicePanelModes'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 14556501664557.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot52;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot53 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}';
    tangon['code'] = option;
    var _closure1_slot54 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}';
    tangon['code'] = option;
    var _closure1_slot55 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}';
    tangon['code'] = option;
    var _closure1_slot56 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx41(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){if(width>height){width=width*(pipState.height/height)/scale.get();height=pipState.height/scale.get();}else{height=height*(pipState.width/width)/scale.get();width=pipState.width/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}';
    tangon['code'] = option;
    var _closure1_slot57 = tangon;
    tangon = {};
    option = "function VoicePanelVideoRendererTsx42(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,withDelay,focused,id,withTiming,OPACITY_TIMING}=this.__closure;var _focused$get,_focused$get2;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:24+2,overflow:'hidden',borderColor:'white',opacity:withDelay(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id?300:0,withTiming(((_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id)===id?0:0.3,OPACITY_TIMING,'animate-never'))};}";
    tangon['code'] = option;
    var _closure1_slot58 = tangon;
    tangon = {};
    option = 'function VoicePanelVideoRendererTsx43(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}';
    tangon['code'] = option;
    var _closure1_slot59 = tangon;
    tangon = golfie.memo;
    michal = function(argFoo) { // Original name: VideoRenderer
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            vacuum = michal.id;
            var _closure2_slot0 = vacuum;
            source = michal.streamId;
            var _closure2_slot1 = source;
            cntext = michal.sharedCoords;
            var _closure2_slot2 = cntext;
            target = michal.isScrollVisible;
            var _closure2_slot3 = target;
            backup = michal.isCamera;
            result = michal.mirror;
            tangon = undefined;
            if(!(result === tangon)) { _fun00006_ip = 64; continue _fun00005 }
 62:
            result = false;
 64:
            var _closure2_slot4 = result;
            zuuluu = michal.focusOnReady;
            if(!(zuuluu === tangon)) { _fun00006_ip = 80; continue _fun00005 }
 78:
            zuuluu = false;
 80:
            var _closure2_slot5 = zuuluu;
            ctrled = michal.style;
            yankee = michal.layout;
            var _closure2_slot6 = yankee;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            var _closure2_slot15 = tangon;
            var _closure2_slot16 = tangon;
            var _closure2_slot17 = tangon;
            var _closure2_slot18 = tangon;
            var _closure2_slot19 = tangon;
            var _closure2_slot20 = tangon;
            var _closure2_slot21 = tangon;
            michal = _closure1_slot16;
            foxtra = michal.bind(tangon)();
            golfie = _closure1_slot4;
            zuuluu = golfie.useContext;
            romeon = _closure1_slot1;
            option = _closure1_slot2;
            michal = 10;
            michal = option[michal];
            michal = romeon.bind(tangon)(michal);
            michal = zuuluu.bind(golfie)(michal);
            oscard = michal.mode;
            _closure2_slot7 = oscard;
            sequen = michal.focused;
            _closure2_slot8 = sequen;
            zuuluu = michal.setFocused;
            _closure2_slot9 = zuuluu;
            zuuluu = michal.layoutManager;
            _closure2_slot10 = zuuluu;
            papara = michal.windowDimensions;
            _closure2_slot11 = papara;
            echoed = michal.streamOutputSinkStack;
            michal = _closure1_slot0;
            config = 7;
            report = option[config];
            verify = michal.bind(tangon)(report);
            report = verify.useSharedValue;
            sizing = true;
            verify = report.bind(verify)(sizing);
            _closure2_slot12 = verify;
            report = option[config];
            output = michal.bind(tangon)(report);
            offset = output.useSharedValue;
            report = {};
            update = zuuluu.getTargetDimensions;
            equals = update.bind(zuuluu)(vacuum);
            quebec = report;
            update = copyDataProperties(quebec, equals);
            sierra = offset.bind(output)(report);
            _closure2_slot13 = sierra;
            report = 15;
            report = option[report];
            offset = michal.bind(tangon)(report);
            report = offset.usePIPState;
            status = report.bind(offset)();
            _closure2_slot14 = status;
            report = golfie.useState;
            output = report.bind(golfie)(sizing);
            offset = _closure1_slot3;
            report = 2;
            output = offset.bind(tangon)(output, report);
            report = 0;
            offset = output[report];
            report = 1;
            report = output[report];
            _closure2_slot15 = report;
            output = golfie.useState;
            report = function() {
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                zuuluu = entity.VideoSpinnerTimer;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                tangon = 'VideoRenderer';
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                return entity;
            };
            report = output.bind(golfie)(report);
            output = golfie.useRef;
            report = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot5;
                    if(!michal) { _fun00008_ip = 25; continue _fun00007 }
 10:
                    zuuluu = _closure2_slot9;
                    michal = _closure2_slot0;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(michal);
 25:
                    entity = undefined;
                    return entity;
                }
            };
            report = output.bind(golfie)(report);
            _closure2_slot16 = report;
            update = golfie.useCallback;
            output = function() {
                tangon = _closure2_slot15;
                entity = undefined;
                zuuluu = false;
                zuuluu = tangon.bind(entity)(zuuluu);
                zuuluu = _closure2_slot16;
                michal = zuuluu.current;
                michal = michal.bind(zuuluu)();
                return entity;
            };
            report = new Array(0);
            update = update.bind(golfie)(output, report);
            report = 17;
            report = option[report];
            output = michal.bind(tangon)(report);
            report = output.useSetHasActiveVideoOutputSink;
            limora = report.bind(output)(echoed);
            _closure2_slot17 = limora;
            report = option[config];
            record = michal.bind(tangon)(report);
            echoed = record.useAnimatedReaction;
            output = function() { // Original name: ke
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure2_slot7;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = new Array(4);
                    entity[0] = zuuluu;
                    tangon = _closure2_slot8;
                    zuuluu = tangon.get;
                    tangon = zuuluu.bind(tangon)();
                    zuuluu = null;
                    report = zuuluu == tangon;
                    zuuluu = undefined;
                    if(report) { _fun00010_ip = 53; continue _fun00009 }
 48:
                    zuuluu = tangon.id;
 53:
                    entity[1] = zuuluu;
                    tangon = _closure2_slot3;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    entity[2] = zuuluu;
                    michal = _closure2_slot1;
                    entity[3] = michal;
                    return entity;
                }
            };
            report = {};
            report['mode'] = oscard;
            report['focused'] = sequen;
            report['isScrollVisible'] = target;
            report['streamId'] = source;
            output['__closure'] = report;
            report = 3558943323767.0;
            output['__workletHash'] = report;
            report = _closure1_slot54;
            output['__initData'] = report;
            report = function(argFoo, argBar) { // Original name: Me
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    oscard = argFoo;
                    option = argBar;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 12;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    golfie = tangon.bind(entity)(zuuluu);
                    report = golfie.cheapWorkletArrayShallowEqual;
                    zuuluu = null;
                    verify = zuuluu != option;
                    tangon = undefined;
                    if(!verify) { _fun00012_ip = 51; continue _fun00011 }
 48:
                    tangon = option;
 51:
                    tangon = report.bind(golfie)(oscard, tangon);
                    if(tangon) { _fun00012_ip = 181; continue _fun00011 }
 60:
                    report = _closure1_slot3;
                    tangon = 4;
                    report = report.bind(entity)(oscard, tangon);
                    tangon = 0;
                    verify = report[tangon];
                    tangon = 1;
                    option = report[tangon];
                    tangon = 2;
                    oscard = report[tangon];
                    tangon = 3;
                    tangon = report[tangon];
                    if(!(zuuluu != tangon)) { _fun00012_ip = 181; continue _fun00011 }
 104:
                    report = _closure1_slot0;
                    golfie = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = golfie[zuuluu];
                    offset = report.bind(entity)(zuuluu);
                    report = offset.runOnJS;
                    zuuluu = _closure2_slot17;
                    zuuluu = report.bind(offset)(zuuluu);
                    report = _closure1_slot53;
                    michal = {};
                    michal['mode'] = verify;
                    michal['focusedId'] = option;
                    golfie = _closure2_slot0;
                    michal['selfId'] = golfie;
                    michal['isScrollVisible'] = oscard;
                    michal = report.bind(entity)(michal);
                    michal = zuuluu.bind(entity)(tangon, michal);
 181:
                    return entity;
                }
            };
            target = {};
            whisks = 12;
            whisks = option[whisks];
            whisks = michal.bind(tangon)(whisks);
            whisks = whisks.cheapWorkletArrayShallowEqual;
            target['cheapWorkletArrayShallowEqual'] = whisks;
            whisks = option[config];
            whisks = michal.bind(tangon)(whisks);
            whisks = whisks.runOnJS;
            target['runOnJS'] = whisks;
            target['setHasActiveVideoOutputSink'] = limora;
            limora = _closure1_slot53;
            target['shouldMakeActive'] = limora;
            target['id'] = vacuum;
            report['__closure'] = target;
            target = 12089612803324.0;
            report['__workletHash'] = target;
            target = _closure1_slot55;
            report['__initData'] = target;
            report = echoed.bind(record)(output, report);
            output = golfie.useCallback;
            report = new Array(4);
            report[0] = sierra;
            report[1] = zuuluu;
            report[2] = vacuum;
            report[3] = verify;
            zuuluu = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    golfie = entity.width;
                    oscard = entity.height;
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 18;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = _closure2_slot13;
                    zuuluu = {};
                    zuuluu['width'] = golfie;
                    zuuluu['height'] = oscard;
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    report = _closure2_slot10;
                    tangon = report.setTargetDimensions;
                    zuuluu = _closure2_slot0;
                    zuuluu = tangon.bind(report)(zuuluu, golfie, oscard);
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(!michal) { _fun00014_ip = 129; continue _fun00013 }
 103:
                    michal = global;
                    tangon = michal.setTimeout;
                    zuuluu = function() {
                        zuuluu = _closure2_slot12;
                        michal = zuuluu.set;
                        entity = false;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    michal = 34;
                    michal = tangon.bind(entity)(zuuluu, michal);
 129:
                    return entity;
                }
            };
            echoed = output.bind(golfie)(zuuluu, report);
            zuuluu = option[config];
            output = michal.bind(tangon)(zuuluu);
            report = output.useDerivedValue;
            zuuluu = function() { // Original name: $e
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    michal = _closure2_slot8;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    michal = null;
                    tangon = michal == entity;
                    michal = undefined;
                    if(tangon) { _fun00016_ip = 32; continue _fun00015 }
 27:
                    michal = entity.id;
 32:
                    entity = _closure2_slot0;
                    if(!(michal !== entity)) { _fun00016_ip = 84; continue _fun00015 }
 40:
                    entity = {};
                    tangon = _closure2_slot2;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    michal = michal.width;
                    entity['width'] = michal;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    michal = michal.height;
                    entity['height'] = michal;
                    _fun00016_ip = 133; continue _fun00015;
 84:
                    michal = {};
                    report = _closure2_slot11;
                    tangon = report.get;
                    tangon = tangon.bind(report)();
                    tangon = tangon.width;
                    michal['width'] = tangon;
                    tangon = _closure2_slot11;
                    zuuluu = tangon.get;
                    zuuluu = zuuluu.bind(tangon)();
                    zuuluu = zuuluu.height;
                    michal['height'] = zuuluu;
                    entity = michal;
 133:
                    return entity;
                }
            };
            record = {};
            record['focused'] = sequen;
            record['id'] = vacuum;
            record['windowDimensions'] = papara;
            record['sharedCoords'] = cntext;
            zuuluu['__closure'] = record;
            record = 9631392718391.0;
            zuuluu['__workletHash'] = record;
            record = _closure1_slot56;
            zuuluu['__initData'] = record;
            zuuluu = report.bind(output)(zuuluu);
            report = {};
            report['id'] = vacuum;
            report['isCamera'] = backup;
            report['focused'] = sequen;
            report['mode'] = oscard;
            report['loading'] = offset;
            report['containerLayout'] = zuuluu;
            report['videoDimensions'] = sierra;
            report['disableAnimations'] = verify;
            zuuluu = function(argFoo) { // Original name: useGestures
                entity = argFoo;
                sequen = entity.id;
                var _closure3_slot0 = sequen;
                vacuum = entity.isCamera;
                var _closure3_slot1 = vacuum;
                config = entity.focused;
                var _closure3_slot2 = config;
                variable37 = entity.mode;
                var _closure3_slot3 = variable37;
                cntext = entity.loading;
                var _closure3_slot4 = cntext;
                source = entity.containerLayout;
                var _closure3_slot5 = source;
                variable36 = entity.videoDimensions;
                var _closure3_slot6 = variable36;
                quebec = entity.disableAnimations;
                var _closure3_slot7 = quebec;
                offset = _closure1_slot4;
                michal = offset.useContext;
                zuuluu = _closure1_slot1;
                equals = _closure1_slot2;
                entity = 10;
                entity = equals[entity];
                whisks = undefined;
                entity = zuuluu.bind(whisks)(entity);
                entity = michal.bind(offset)(entity);
                variable39 = entity.setIsFocusedVideoZoomed;
                var _closure3_slot8 = variable39;
                update = entity.windowDimensions;
                var _closure3_slot9 = update;
                record = entity.dismissToPIPGestureRef;
                var _closure3_slot10 = record;
                kiloes = entity.setFocused;
                var _closure3_slot11 = kiloes;
                backup = entity.hideControls;
                var _closure3_slot12 = backup;
                foxtra = entity.controlsSpecs;
                var _closure3_slot13 = foxtra;
                romeon = entity.showControls;
                var _closure3_slot14 = romeon;
                limora = _closure1_slot0;
                sierra = 7;
                entity = equals[sierra];
                zuuluu = limora.bind(whisks)(entity);
                michal = zuuluu.useSharedValue;
                entity = 1;
                oscard = michal.bind(zuuluu)(entity);
                var _closure3_slot15 = oscard;
                entity = equals[sierra];
                michal = limora.bind(whisks)(entity);
                entity = michal.useSharedValue;
                yankee = 0;
                report = entity.bind(michal)(yankee);
                var _closure3_slot16 = report;
                entity = equals[sierra];
                michal = limora.bind(whisks)(entity);
                entity = michal.useSharedValue;
                tangon = entity.bind(michal)(yankee);
                var _closure3_slot17 = tangon;
                entity = equals[sierra];
                michal = limora.bind(whisks)(entity);
                entity = michal.useSharedValue;
                zuuluu = entity.bind(michal)(yankee);
                var _closure3_slot18 = zuuluu;
                entity = equals[sierra];
                michal = limora.bind(whisks)(entity);
                entity = michal.useSharedValue;
                verify = false;
                michal = entity.bind(michal)(verify);
                var _closure3_slot19 = michal;
                entity = equals[sierra];
                option = limora.bind(whisks)(entity);
                entity = option.useSharedValue;
                result = entity.bind(option)(yankee);
                var _closure3_slot20 = result;
                entity = equals[sierra];
                option = limora.bind(whisks)(entity);
                entity = option.useSharedValue;
                output = entity.bind(option)(verify);
                var _closure3_slot21 = output;
                entity = equals[sierra];
                verify = limora.bind(whisks)(entity);
                option = verify.useSharedValue;
                entity = null;
                ctrled = option.bind(verify)(entity);
                var _closure3_slot22 = ctrled;
                entity = equals[sierra];
                verify = limora.bind(whisks)(entity);
                option = verify.useDerivedValue;
                entity = function() { // Original name: P
                    entity = global;
                    tangon = entity.Math;
                    zuuluu = tangon.max;
                    report = _closure3_slot5;
                    michal = report.get;
                    michal = michal.bind(report)();
                    michal = michal.width;
                    oscard = _closure3_slot6;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = entity.width;
                    michal = michal / entity;
                    entity = report.get;
                    entity = entity.bind(report)();
                    report = entity.height;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = entity.height;
                    entity = report / entity;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                yankee = {};
                yankee['containerLayout'] = source;
                yankee['videoDimensions'] = variable36;
                entity['__closure'] = yankee;
                yankee = 4177496646282.0;
                entity['__workletHash'] = yankee;
                yankee = _closure1_slot17;
                entity['__initData'] = yankee;
                status = option.bind(verify)(entity);
                var _closure3_slot23 = status;
                entity = equals[sierra];
                verify = limora.bind(whisks)(entity);
                option = verify.useDerivedValue;
                entity = function() { // Original name: V
                    entity = global;
                    tangon = entity.Math;
                    zuuluu = tangon.min;
                    report = _closure3_slot5;
                    michal = report.get;
                    michal = michal.bind(report)();
                    michal = michal.width;
                    oscard = _closure3_slot6;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = entity.width;
                    michal = michal / entity;
                    entity = report.get;
                    entity = entity.bind(report)();
                    report = entity.height;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = entity.height;
                    entity = report / entity;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                };
                yankee = {};
                yankee['containerLayout'] = source;
                yankee['videoDimensions'] = variable36;
                entity['__closure'] = yankee;
                yankee = 5260375952053.0;
                entity['__workletHash'] = yankee;
                yankee = _closure1_slot18;
                entity['__initData'] = yankee;
                yankee = option.bind(verify)(entity);
                var _closure3_slot24 = yankee;
                entity = equals[sierra];
                verify = limora.bind(whisks)(entity);
                option = verify.useDerivedValue;
                entity = function() { // Original name: le
                    _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                        michal = _closure3_slot16;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        tangon = 0;
                        entity = tangon === entity;
                        if(!entity) { _fun00018_ip = 42; continue _fun00017 }
 25:
                        report = _closure3_slot17;
                        michal = report.get;
                        michal = michal.bind(report)();
                        entity = tangon === michal;
 42:
                        if(!entity) { _fun00018_ip = 111; continue _fun00017 }
 45:
                        tangon = _closure3_slot15;
                        michal = tangon.get;
                        tangon = michal.bind(tangon)();
                        report = _closure3_slot24;
                        michal = report.get;
                        michal = michal.bind(report)();
                        michal = tangon === michal;
                        if(michal) { _fun00018_ip = 108; continue _fun00017 }
 78:
                        report = _closure3_slot15;
                        tangon = report.get;
                        tangon = tangon.bind(report)();
                        report = _closure3_slot23;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        michal = tangon === zuuluu;
 108:
                        entity = michal;
 111:
                        return entity;
                    }
                };
                sizing = {};
                sizing['translateX'] = report;
                sizing['translateY'] = tangon;
                sizing['scale'] = oscard;
                sizing['fitScale'] = yankee;
                sizing['coverScale'] = status;
                entity['__closure'] = sizing;
                sizing = 15099362638406.0;
                entity['__workletHash'] = sizing;
                sizing = _closure1_slot19;
                entity['__initData'] = sizing;
                sizing = option.bind(verify)(entity);
                var _closure3_slot25 = sizing;
                verify = offset.useCallback;
                option = function(argFoo) { // Original name: de
                    _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                        tangon = argFoo;
                        entity = 'fit';
                        if(!(entity !== tangon)) { _fun00020_ip = 112; continue _fun00019 }
 11:
                        zuuluu = _closure3_slot15;
                        michal = zuuluu.set;
                        option = _closure1_slot0;
                        golfie = _closure1_slot2;
                        oscard = 11;
                        golfie = golfie[oscard];
                        oscard = undefined;
                        option = option.bind(oscard)(golfie);
                        golfie = option.withSpring;
                        verify = _closure3_slot23;
                        oscard = verify.get;
                        oscard = oscard.bind(verify)();
                        report = _closure1_slot6;
                        verify = _closure3_slot7;
                        entity = verify.get;
                        verify = entity.bind(verify)();
                        entity = 'respect-motion-settings';
                        if(!verify) { _fun00020_ip = 98; continue _fun00019 }
 92:
                        entity = 'animate-never';
 98:
                        entity = golfie.bind(option)(oscard, report, entity);
                        entity = michal.bind(zuuluu)(entity);
                        _fun00020_ip = 211; continue _fun00019;
 112:
                        zuuluu = _closure3_slot15;
                        michal = zuuluu.set;
                        option = _closure1_slot0;
                        golfie = _closure1_slot2;
                        oscard = 11;
                        golfie = golfie[oscard];
                        oscard = undefined;
                        option = option.bind(oscard)(golfie);
                        golfie = option.withSpring;
                        verify = _closure3_slot24;
                        oscard = verify.get;
                        oscard = oscard.bind(verify)();
                        report = _closure1_slot6;
                        verify = _closure3_slot7;
                        entity = verify.get;
                        verify = entity.bind(verify)();
                        entity = 'respect-motion-settings';
                        if(!verify) { _fun00020_ip = 199; continue _fun00019 }
 193:
                        entity = 'animate-never';
 199:
                        entity = golfie.bind(option)(oscard, report, entity);
                        entity = michal.bind(zuuluu)(entity);
 211:
                        yankee = _closure3_slot16;
                        oscard = yankee.set;
                        golfie = _closure1_slot0;
                        offset = _closure1_slot2;
                        zuuluu = 11;
                        report = offset[zuuluu];
                        entity = undefined;
                        romeon = golfie.bind(entity)(report);
                        report = romeon.withSpring;
                        verify = _closure1_slot9;
                        option = 0;
                        report = report.bind(romeon)(option, verify);
                        report = oscard.bind(yankee)(report);
                        oscard = _closure3_slot17;
                        report = oscard.set;
                        zuuluu = offset[zuuluu];
                        golfie = golfie.bind(entity)(zuuluu);
                        zuuluu = golfie.withSpring;
                        zuuluu = zuuluu.bind(golfie)(option, verify);
                        zuuluu = report.bind(oscard)(zuuluu);
                        zuuluu = _closure3_slot22;
                        michal = zuuluu.set;
                        michal = michal.bind(zuuluu)(tangon);
                        return entity;
                    }
                };
                entity = {};
                entity['scale'] = oscard;
                papara = 11;
                echoed = equals[papara];
                echoed = limora.bind(whisks)(echoed);
                echoed = echoed.withSpring;
                entity['withSpring'] = echoed;
                entity['fitScale'] = yankee;
                echoed = _closure1_slot6;
                entity['MODE_CHANGE_PHYSICS'] = echoed;
                entity['disableAnimations'] = quebec;
                entity['coverScale'] = status;
                entity['translateX'] = report;
                echoed = _closure1_slot9;
                entity['SCALE_PHYSICS'] = echoed;
                entity['translateY'] = tangon;
                entity['currentSizeThreshold'] = ctrled;
                option['__closure'] = entity;
                entity = 16610861286231.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot20;
                option['__initData'] = entity;
                entity = new Array(7);
                entity[0] = oscard;
                entity[1] = report;
                entity[2] = tangon;
                entity[3] = status;
                entity[4] = ctrled;
                entity[5] = yankee;
                entity[6] = quebec;
                quebec = verify.bind(offset)(option, entity);
                var _closure3_slot26 = quebec;
                verify = offset.useCallback;
                option = function() { // Original name: ue
                    _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                        zuuluu = _closure3_slot2;
                        entity = zuuluu.get;
                        zuuluu = entity.bind(zuuluu)();
                        entity = null;
                        tangon = entity == zuuluu;
                        entity = undefined;
                        oscard = undefined;
                        if(tangon) { _fun00022_ip = 34; continue _fun00021 }
 29:
                        oscard = zuuluu.id;
 34:
                        report = _closure3_slot0;
                        tangon = 'cover';
                        zuuluu = tangon;
                        if(!(oscard === report)) { _fun00022_ip = 53; continue _fun00021 }
 49:
                        zuuluu = 'fit';
 53:
                        golfie = _closure3_slot6;
                        report = golfie.get;
                        report = report.bind(golfie)();
                        oscard = report.width;
                        report = golfie.get;
                        report = report.bind(golfie)();
                        report = report.height;
                        golfie = oscard >= report;
                        option = _closure3_slot9;
                        report = option.get;
                        report = report.bind(option)();
                        oscard = report.width;
                        report = option.get;
                        report = report.bind(option)();
                        report = report.height;
                        oscard = oscard >= report;
                        report = _closure3_slot1;
                        if(!report) { _fun00022_ip = 140; continue _fun00021 }
 132:
                        option = 'fit';
                        report = option === zuuluu;
 140:
                        if(!report) { _fun00022_ip = 147; continue _fun00021 }
 143:
                        report = golfie === oscard;
 147:
                        if(!report) { _fun00022_ip = 153; continue _fun00021 }
 150:
                        zuuluu = tangon;
 153:
                        michal = _closure3_slot26;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    }
                };
                entity = {};
                entity['focused'] = config;
                entity['id'] = sequen;
                entity['videoDimensions'] = variable36;
                entity['windowDimensions'] = update;
                entity['isCamera'] = vacuum;
                entity['resetToDefaultSize'] = quebec;
                option['__closure'] = entity;
                entity = 15643035811761.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot21;
                option['__initData'] = entity;
                entity = new Array(6);
                entity[0] = config;
                entity[1] = sequen;
                entity[2] = vacuum;
                entity[3] = variable36;
                entity[4] = update;
                entity[5] = quebec;
                vacuum = verify.bind(offset)(option, entity);
                var _closure3_slot27 = vacuum;
                entity = equals[sierra];
                update = limora.bind(whisks)(entity);
                verify = update.useAnimatedReaction;
                option = function() { // Original name: ge
                    michal = _closure3_slot5;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = {};
                entity['containerLayout'] = source;
                option['__closure'] = entity;
                entity = 9695573702258.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot22;
                option['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: he
                    _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                        oscard = argFoo;
                        report = argBar;
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot2;
                        entity = 12;
                        michal = michal[entity];
                        entity = undefined;
                        golfie = zuuluu.bind(entity)(michal);
                        zuuluu = golfie.cheapWorkletShallowEqual;
                        tangon = null;
                        option = tangon != report;
                        michal = undefined;
                        if(!option) { _fun00024_ip = 51; continue _fun00023 }
 48:
                        michal = report;
 51:
                        michal = zuuluu.bind(golfie)(oscard, michal);
                        if(michal) { _fun00024_ip = 123; continue _fun00023 }
 60:
                        golfie = _closure3_slot2;
                        zuuluu = golfie.get;
                        zuuluu = zuuluu.bind(golfie)();
                        option = tangon == zuuluu;
                        golfie = undefined;
                        if(option) { _fun00024_ip = 90; continue _fun00023 }
 85:
                        golfie = zuuluu.id;
 90:
                        zuuluu = _closure3_slot0;
                        zuuluu = golfie === zuuluu;
                        if(!zuuluu) { _fun00024_ip = 105; continue _fun00023 }
 101:
                        zuuluu = oscard !== report;
 105:
                        if(!zuuluu) { _fun00024_ip = 112; continue _fun00023 }
 108:
                        zuuluu = tangon != report;
 112:
                        if(!zuuluu) { _fun00024_ip = 123; continue _fun00023 }
 115:
                        michal = _closure3_slot27;
                        michal = michal.bind(entity)();
 123:
                        return entity;
                    }
                };
                variable38 = {};
                variable40 = 12;
                variable40 = equals[variable40];
                variable40 = limora.bind(whisks)(variable40);
                variable40 = variable40.cheapWorkletShallowEqual;
                variable38['cheapWorkletShallowEqual'] = variable40;
                variable38['focused'] = config;
                variable38['id'] = sequen;
                variable38['resetOnLayoutChange'] = vacuum;
                entity['__closure'] = variable38;
                variable38 = 13816224514199.0;
                entity['__workletHash'] = variable38;
                variable38 = _closure1_slot23;
                entity['__initData'] = variable38;
                entity = verify.bind(update)(option, entity);
                verify = offset.useCallback;
                option = function() { // Original name: Ye
                    _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                        michal = _closure3_slot23;
                        entity = michal.get;
                        michal = entity.bind(michal)();
                        tangon = _closure3_slot24;
                        entity = tangon.get;
                        tangon = entity.bind(tangon)();
                        entity = 0.05;
                        entity = tangon + entity;
                        if(!(!(michal < entity))) { _fun00026_ip = 542; continue _fun00025 }
 50:
                        michal = _closure3_slot16;
                        entity = michal.get;
                        michal = entity.bind(michal)();
                        report = _closure3_slot15;
                        entity = report.get;
                        entity = entity.bind(report)();
                        michal = michal * entity;
                        tangon = _closure3_slot17;
                        entity = tangon.get;
                        tangon = entity.bind(tangon)();
                        entity = report.get;
                        entity = entity.bind(report)();
                        oscard = tangon * entity;
                        golfie = -50;
                        if(!(!(michal < golfie))) { _fun00026_ip = 538; continue _fun00025 }
 119:
                        report = 50;
                        if(!(!(michal > report))) { _fun00026_ip = 538; continue _fun00025 }
 129:
                        if(!(!(oscard < golfie))) { _fun00026_ip = 538; continue _fun00025 }
 136:
                        if(!(!(oscard > report))) { _fun00026_ip = 538; continue _fun00025 }
 143:
                        verify = _closure3_slot5;
                        entity = verify.get;
                        entity = entity.bind(verify)();
                        option = entity.width;
                        tangon = _closure3_slot6;
                        entity = tangon.get;
                        entity = entity.bind(tangon)();
                        yankee = entity.width;
                        offset = _closure3_slot15;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        entity = yankee * entity;
                        entity = option - entity;
                        option = 2;
                        entity = entity / option;
                        michal = michal + entity;
                        entity = verify.get;
                        entity = entity.bind(verify)();
                        yankee = entity.height;
                        entity = tangon.get;
                        entity = entity.bind(tangon)();
                        romeon = entity.height;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        entity = romeon * entity;
                        entity = yankee - entity;
                        entity = entity / option;
                        oscard = oscard + entity;
                        entity = tangon.get;
                        entity = entity.bind(tangon)();
                        option = entity.width;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        option = option * entity;
                        entity = tangon.get;
                        entity = entity.bind(tangon)();
                        tangon = entity.height;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        tangon = tangon * entity;
                        entity = verify.get;
                        entity = entity.bind(verify)();
                        entity = entity.height;
                        entity = tangon >= entity;
                        if(!entity) { _fun00026_ip = 343; continue _fun00025 }
 339:
                        entity = michal >= golfie;
 343:
                        if(!entity) { _fun00026_ip = 353; continue _fun00025 }
 346:
                        verify = 25;
                        entity = michal <= verify;
 353:
                        if(!entity) { _fun00026_ip = 389; continue _fun00025 }
 356:
                        offset = michal + option;
                        yankee = _closure3_slot5;
                        verify = yankee.get;
                        verify = verify.bind(yankee)();
                        yankee = verify.width;
                        verify = 25;
                        verify = yankee - verify;
                        entity = offset >= verify;
 389:
                        if(!entity) { _fun00026_ip = 422; continue _fun00025 }
 392:
                        verify = michal + option;
                        offset = _closure3_slot5;
                        michal = offset.get;
                        michal = michal.bind(offset)();
                        michal = michal.width;
                        michal = michal + report;
                        entity = verify <= michal;
 422:
                        if(entity) { _fun00026_ip = 536; continue _fun00025 }
 425:
                        verify = _closure3_slot5;
                        michal = verify.get;
                        michal = michal.bind(verify)();
                        michal = michal.width;
                        michal = option >= michal;
                        if(!michal) { _fun00026_ip = 454; continue _fun00025 }
 450:
                        michal = oscard >= golfie;
 454:
                        if(!michal) { _fun00026_ip = 464; continue _fun00025 }
 457:
                        golfie = 25;
                        michal = oscard <= golfie;
 464:
                        if(!michal) { _fun00026_ip = 500; continue _fun00025 }
 467:
                        option = oscard + tangon;
                        verify = _closure3_slot5;
                        golfie = verify.get;
                        golfie = golfie.bind(verify)();
                        verify = golfie.height;
                        golfie = 25;
                        golfie = verify - golfie;
                        michal = option >= golfie;
 500:
                        if(!michal) { _fun00026_ip = 533; continue _fun00025 }
 503:
                        tangon = oscard + tangon;
                        oscard = _closure3_slot5;
                        zuuluu = oscard.get;
                        zuuluu = zuuluu.bind(oscard)();
                        zuuluu = zuuluu.height;
                        zuuluu = zuuluu + report;
                        michal = tangon <= zuuluu;
 533:
                        entity = michal;
 536:
                        return entity;
 538:
                        entity = false;
                        return entity;
 542:
                        entity = false;
                        return entity;
                    }
                };
                entity = {};
                entity['coverScale'] = status;
                entity['fitScale'] = yankee;
                update = 0.05;
                entity['MIN_ZOOM_FOR_COVER_SNAP_OFFSET'] = update;
                entity['translateX'] = report;
                entity['scale'] = oscard;
                entity['translateY'] = tangon;
                update = 50;
                entity['SNAP_CENTER_THRESHOLD'] = update;
                entity['containerLayout'] = source;
                entity['videoDimensions'] = variable36;
                entity['SNAP_EDGE_OUTER_THRESHOLD'] = update;
                update = 25;
                entity['SNAP_EDGE_INNER_THRESHOLD'] = update;
                option['__closure'] = entity;
                entity = 3902544453390.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot24;
                option['__initData'] = entity;
                entity = new Array(7);
                entity[0] = status;
                entity[1] = oscard;
                entity[2] = report;
                entity[3] = tangon;
                entity[4] = source;
                entity[5] = variable36;
                entity[6] = yankee;
                update = verify.bind(offset)(option, entity);
                var _closure3_slot28 = update;
                verify = offset.useCallback;
                option = function() { // Original name: xe
                    _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                        zuuluu = _closure3_slot18;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        oscard = 0;
                        if(!(!(michal > oscard))) { _fun00028_ip = 460; continue _fun00027 }
 25:
                        zuuluu = _closure3_slot19;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        if(michal) { _fun00028_ip = 425; continue _fun00027 }
 44:
                        zuuluu = _closure3_slot15;
                        michal = zuuluu.get;
                        zuuluu = michal.bind(zuuluu)();
                        tangon = _closure3_slot24;
                        michal = tangon.get;
                        michal = michal.bind(tangon)();
                        if(!(!(zuuluu < michal))) { _fun00028_ip = 408; continue _fun00027 }
 77:
                        michal = global;
                        report = michal.Math;
                        tangon = report.max;
                        option = _closure3_slot6;
                        zuuluu = option.get;
                        zuuluu = zuuluu.bind(option)();
                        golfie = zuuluu.height;
                        verify = _closure3_slot5;
                        zuuluu = verify.get;
                        zuuluu = zuuluu.bind(verify)();
                        offset = zuuluu.height;
                        yankee = _closure3_slot15;
                        zuuluu = yankee.get;
                        zuuluu = zuuluu.bind(yankee)();
                        zuuluu = offset / zuuluu;
                        zuuluu = golfie - zuuluu;
                        golfie = 2;
                        zuuluu = zuuluu / golfie;
                        offset = tangon.bind(report)(oscard, zuuluu);
                        report = michal.Math;
                        tangon = report.max;
                        zuuluu = option.get;
                        zuuluu = zuuluu.bind(option)();
                        option = zuuluu.width;
                        zuuluu = verify.get;
                        zuuluu = zuuluu.bind(verify)();
                        verify = zuuluu.width;
                        zuuluu = yankee.get;
                        zuuluu = zuuluu.bind(yankee)();
                        zuuluu = verify / zuuluu;
                        zuuluu = option - zuuluu;
                        zuuluu = zuuluu / golfie;
                        sizing = tangon.bind(report)(oscard, zuuluu);
                        yankee = _closure3_slot16;
                        tangon = yankee.set;
                        option = _closure1_slot0;
                        verify = _closure1_slot2;
                        report = 11;
                        zuuluu = verify[report];
                        oscard = undefined;
                        foxtra = option.bind(oscard)(zuuluu);
                        romeon = foxtra.withSpring;
                        kiloes = michal.Math;
                        backup = kiloes.min;
                        echoed = michal.Math;
                        result = echoed.max;
                        output = -sizing;
                        zuuluu = yankee.get;
                        zuuluu = zuuluu.bind(yankee)();
                        zuuluu = result.bind(echoed)(output, zuuluu);
                        zuuluu = backup.bind(kiloes)(sizing, zuuluu);
                        golfie = _closure1_slot9;
                        zuuluu = romeon.bind(foxtra)(zuuluu, golfie);
                        zuuluu = tangon.bind(yankee)(zuuluu);
                        tangon = _closure3_slot17;
                        zuuluu = tangon.set;
                        report = verify[report];
                        oscard = option.bind(oscard)(report);
                        report = oscard.withSpring;
                        verify = michal.Math;
                        option = verify.min;
                        foxtra = michal.Math;
                        romeon = foxtra.max;
                        yankee = -offset;
                        michal = tangon.get;
                        michal = michal.bind(tangon)();
                        michal = romeon.bind(foxtra)(yankee, michal);
                        michal = option.bind(verify)(offset, michal);
                        michal = report.bind(oscard)(michal, golfie);
                        michal = zuuluu.bind(tangon)(michal);
                        _fun00028_ip = 460; continue _fun00027;
 408:
                        tangon = _closure3_slot26;
                        zuuluu = undefined;
                        michal = 'fit';
                        michal = tangon.bind(zuuluu)(michal);
                        _fun00028_ip = 460; continue _fun00027;
 425:
                        tangon = _closure3_slot19;
                        zuuluu = tangon.set;
                        michal = false;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure3_slot26;
                        michal = undefined;
                        entity = 'cover';
                        entity = zuuluu.bind(michal)(entity);
                        entity = undefined;
                        return entity;
 460:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = {};
                entity['numGesturesActive'] = zuuluu;
                entity['isInSnap'] = michal;
                entity['resetToDefaultSize'] = quebec;
                entity['scale'] = oscard;
                entity['fitScale'] = yankee;
                entity['videoDimensions'] = variable36;
                entity['containerLayout'] = source;
                entity['translateX'] = report;
                papara = equals[papara];
                papara = limora.bind(whisks)(papara);
                papara = papara.withSpring;
                entity['withSpring'] = papara;
                entity['SCALE_PHYSICS'] = echoed;
                entity['translateY'] = tangon;
                option['__closure'] = entity;
                entity = 3493652911835.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot25;
                option['__initData'] = entity;
                entity = new Array(9);
                entity[0] = yankee;
                entity[1] = zuuluu;
                entity[2] = michal;
                entity[3] = oscard;
                entity[4] = variable36;
                entity[5] = source;
                entity[6] = report;
                entity[7] = tangon;
                entity[8] = quebec;
                echoed = verify.bind(offset)(option, entity);
                var _closure3_slot29 = echoed;
                entity = equals[sierra];
                papara = limora.bind(whisks)(entity);
                verify = papara.useAnimatedReaction;
                option = function() { // Original name: ke
                    _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                        michal = _closure3_slot2;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        michal = null;
                        tangon = michal == entity;
                        michal = undefined;
                        if(tangon) { _fun00030_ip = 32; continue _fun00029 }
 27:
                        michal = entity.id;
 32:
                        entity = _closure3_slot0;
                        entity = michal === entity;
                        if(!entity) { _fun00030_ip = 78; continue _fun00029 }
 43:
                        tangon = _closure3_slot25;
                        michal = tangon.get;
                        michal = michal.bind(tangon)();
                        michal = !michal;
                        if(michal) { _fun00030_ip = 75; continue _fun00029 }
 62:
                        tangon = _closure3_slot21;
                        zuuluu = tangon.get;
                        michal = zuuluu.bind(tangon)();
 75:
                        entity = michal;
 78:
                        return entity;
                    }
                };
                entity = {};
                entity['focused'] = config;
                entity['id'] = sequen;
                entity['isInDefaultZoom'] = sizing;
                entity['isInPanToZoom'] = output;
                option['__closure'] = entity;
                entity = 5209373786986.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot26;
                option['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Me
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zuuluu = argFoo;
                        entity = argBar;
                        if(!(zuuluu !== entity)) { _fun00032_ip = 24; continue _fun00031 }
 10:
                        michal = _closure3_slot8;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
 24:
                        entity = undefined;
                        return entity;
                    }
                };
                variable38 = {};
                variable38['setIsFocusedVideoZoomed'] = variable39;
                entity['__closure'] = variable38;
                variable38 = 10707557639101.0;
                entity['__workletHash'] = variable38;
                variable38 = _closure1_slot27;
                entity['__initData'] = variable38;
                entity = verify.bind(papara)(option, entity);
                entity = equals[sierra];
                papara = limora.bind(whisks)(entity);
                verify = papara.useAnimatedReaction;
                option = function() { // Original name: Xe
                    _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                        zuuluu = _closure3_slot2;
                        michal = zuuluu.get;
                        zuuluu = michal.bind(zuuluu)();
                        michal = null;
                        tangon = michal == zuuluu;
                        michal = undefined;
                        if(tangon) { _fun00034_ip = 32; continue _fun00033 }
 27:
                        michal = zuuluu.id;
 32:
                        entity = _closure3_slot0;
                        entity = michal === entity;
                        return entity;
                    }
                };
                entity = {};
                entity['focused'] = config;
                entity['id'] = sequen;
                option['__closure'] = entity;
                entity = 619124678280.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot28;
                option['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Ge
                    _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                        michal = argFoo;
                        entity = argBar;
                        if(!(michal !== entity)) { _fun00036_ip = 23; continue _fun00035 }
 10:
                        michal = _closure3_slot27;
                        entity = undefined;
                        entity = michal.bind(entity)();
 23:
                        entity = undefined;
                        return entity;
                    }
                };
                variable38 = {};
                variable38['resetOnLayoutChange'] = vacuum;
                entity['__closure'] = variable38;
                variable38 = 8458824233146.0;
                entity['__workletHash'] = variable38;
                variable38 = _closure1_slot29;
                entity['__initData'] = variable38;
                entity = verify.bind(papara)(option, entity);
                entity = equals[sierra];
                papara = limora.bind(whisks)(entity);
                verify = papara.useAnimatedReaction;
                option = function() { // Original name: $e
                    michal = _closure3_slot3;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = {};
                entity['mode'] = variable37;
                option['__closure'] = entity;
                entity = 7040117988961.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot30;
                option['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Fe
                    _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                        michal = argFoo;
                        entity = argBar;
                        if(!(michal !== entity)) { _fun00038_ip = 23; continue _fun00037 }
 10:
                        michal = _closure3_slot27;
                        entity = undefined;
                        entity = michal.bind(entity)();
 23:
                        entity = undefined;
                        return entity;
                    }
                };
                variable37 = {};
                variable37['resetOnLayoutChange'] = vacuum;
                entity['__closure'] = variable37;
                variable37 = 9279120690968.0;
                entity['__workletHash'] = variable37;
                variable37 = _closure1_slot31;
                entity['__initData'] = variable37;
                entity = verify.bind(papara)(option, entity);
                entity = equals[sierra];
                papara = limora.bind(whisks)(entity);
                verify = papara.useAnimatedReaction;
                option = function() { // Original name: ze
                    michal = _closure3_slot6;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = {};
                entity['videoDimensions'] = variable36;
                option['__closure'] = entity;
                entity = 8748184223523.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot32;
                option['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Ze
                    _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                        report = argFoo;
                        oscard = argBar;
                        michal = _closure3_slot22;
                        tangon = null;
                        if(!(tangon != michal)) { _fun00040_ip = 81; continue _fun00039 }
 19:
                        golfie = report.width;
                        option = tangon == oscard;
                        michal = undefined;
                        zuuluu = undefined;
                        if(option) { _fun00040_ip = 40; continue _fun00039 }
 35:
                        zuuluu = oscard.width;
 40:
                        zuuluu = golfie === zuuluu;
                        if(!zuuluu) { _fun00040_ip = 70; continue _fun00039 }
 47:
                        report = report.height;
                        golfie = tangon == oscard;
                        tangon = undefined;
                        if(golfie) { _fun00040_ip = 66; continue _fun00039 }
 61:
                        tangon = oscard.height;
 66:
                        zuuluu = report === tangon;
 70:
                        if(zuuluu) { _fun00040_ip = 81; continue _fun00039 }
 73:
                        entity = _closure3_slot27;
                        entity = entity.bind(michal)();
 81:
                        entity = undefined;
                        return entity;
                    }
                };
                variable36 = {};
                variable36['currentSizeThreshold'] = ctrled;
                variable36['resetOnLayoutChange'] = vacuum;
                entity['__closure'] = variable36;
                variable36 = 8464422969486.0;
                entity['__workletHash'] = variable36;
                variable36 = _closure1_slot33;
                entity['__initData'] = variable36;
                entity = verify.bind(papara)(option, entity);
                entity = equals[sierra];
                papara = limora.bind(whisks)(entity);
                verify = papara.useAnimatedReaction;
                option = function() { // Original name: We
                    michal = _closure3_slot23;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = {};
                entity['coverScale'] = status;
                option['__closure'] = entity;
                entity = 5444376625069.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot34;
                option['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Je
                    _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
                        zuuluu = _closure3_slot22;
                        michal = zuuluu.get;
                        zuuluu = michal.bind(zuuluu)();
                        michal = 'cover';
                        michal = michal === zuuluu;
                        if(!michal) { _fun00042_ip = 37; continue _fun00041 }
 27:
                        report = argFoo;
                        tangon = argBar;
                        michal = report !== tangon;
 37:
                        if(!michal) { _fun00042_ip = 51; continue _fun00041 }
 40:
                        michal = _closure3_slot26;
                        entity = undefined;
                        entity = michal.bind(entity)(zuuluu);
 51:
                        entity = undefined;
                        return entity;
                    }
                };
                status = {};
                status['currentSizeThreshold'] = ctrled;
                status['resetToDefaultSize'] = quebec;
                entity['__closure'] = status;
                status = 10764193588506.0;
                entity['__workletHash'] = status;
                status = _closure1_slot35;
                entity['__initData'] = status;
                entity = verify.bind(papara)(option, entity);
                entity = equals[sierra];
                papara = limora.bind(whisks)(entity);
                verify = papara.useAnimatedReaction;
                option = function() { // Original name: qe
                    michal = _closure3_slot19;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity = {};
                entity['isInSnap'] = michal;
                option['__closure'] = entity;
                entity = 2178206594630.0;
                option['__workletHash'] = entity;
                entity = _closure1_slot36;
                option['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: je
                    _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
                        michal = argFoo;
                        entity = argBar;
                        entity = michal !== entity;
                        if(!entity) { _fun00044_ip = 16; continue _fun00043 }
 13:
                        entity = michal;
 16:
                        if(!entity) { _fun00044_ip = 98; continue _fun00043 }
 19:
                        tangon = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 7;
                        entity = report[entity];
                        zuuluu = undefined;
                        golfie = tangon.bind(zuuluu)(entity);
                        oscard = golfie.runOnJS;
                        entity = 13;
                        michal = report[entity];
                        michal = tangon.bind(zuuluu)(michal);
                        michal = michal.triggerHapticFeedback;
                        michal = oscard.bind(golfie)(michal);
                        entity = report[entity];
                        entity = tangon.bind(zuuluu)(entity);
                        entity = entity.HapticFeedbackTypes;
                        entity = entity.IMPACT_LIGHT;
                        entity = michal.bind(zuuluu)(entity);
 98:
                        entity = undefined;
                        return entity;
                    }
                };
                status = {};
                sierra = equals[sierra];
                sierra = limora.bind(whisks)(sierra);
                sierra = sierra.runOnJS;
                status['runOnJS'] = sierra;
                sierra = 13;
                quebec = equals[sierra];
                quebec = limora.bind(whisks)(quebec);
                quebec = quebec.triggerHapticFeedback;
                status['triggerHapticFeedback'] = quebec;
                sierra = equals[sierra];
                sierra = limora.bind(whisks)(sierra);
                sierra = sierra.HapticFeedbackTypes;
                status['HapticFeedbackTypes'] = sierra;
                entity['__closure'] = status;
                status = 11115846398818.0;
                entity['__workletHash'] = status;
                target = _closure1_slot37;
                entity['__initData'] = target;
                entity = verify.bind(papara)(option, entity);
                entity = {};
                verify = offset.useMemo;
                option = new Array(22);
                option[0] = cntext;
                option[1] = record;
                option[2] = config;
                option[3] = sequen;
                option[4] = oscard;
                option[5] = report;
                option[6] = tangon;
                option[7] = vacuum;
                option[8] = zuuluu;
                option[9] = ctrled;
                option[10] = source;
                option[11] = michal;
                option[12] = update;
                option[13] = echoed;
                option[14] = result;
                option[15] = output;
                option[16] = sizing;
                option[17] = kiloes;
                option[18] = backup;
                option[19] = foxtra;
                option[20] = romeon;
                option[21] = yankee;
                golfie = function() {
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    golfie = 14;
                    michal = result[golfie];
                    sizing = undefined;
                    michal = output.bind(sizing)(michal);
                    report = michal.Gesture;
                    tangon = report.Simultaneous;
                    michal = result[golfie];
                    michal = output.bind(sizing)(michal);
                    verify = michal.Gesture;
                    oscard = verify.Exclusive;
                    michal = result[golfie];
                    michal = output.bind(sizing)(michal);
                    zuuluu = michal.Gesture;
                    michal = zuuluu.Tap;
                    offset = michal.bind(zuuluu)();
                    zuuluu = offset.numberOfTaps;
                    michal = 2;
                    offset = zuuluu.bind(offset)(michal);
                    zuuluu = offset.onTouchesMove;
                    michal = function(argFoo, argBar) { // Original name: A
                        michal = argBar;
                        entity = michal.fail;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    yankee = {};
                    michal['__closure'] = yankee;
                    yankee = 15386663643077.0;
                    michal['__workletHash'] = yankee;
                    yankee = _closure1_slot38;
                    michal['__initData'] = yankee;
                    offset = zuuluu.bind(offset)(michal);
                    zuuluu = offset.onStart;
                    michal = function() { // Original name: O
                        _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                            zuuluu = _closure3_slot25;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            if(michal) { _fun00046_ip = 34; continue _fun00045 }
 19:
                            zuuluu = _closure3_slot27;
                            michal = undefined;
                            michal = zuuluu.bind(michal)();
                            _fun00046_ip = 163; continue _fun00045;
 34:
                            zuuluu = _closure3_slot2;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            tangon = null;
                            oscard = tangon == michal;
                            zuuluu = undefined;
                            report = undefined;
                            if(oscard) { _fun00046_ip = 65; continue _fun00045 }
 60:
                            report = michal.id;
 65:
                            michal = _closure3_slot0;
                            if(!(report === michal)) { _fun00046_ip = 117; continue _fun00045 }
 73:
                            report = _closure1_slot0;
                            oscard = _closure1_slot2;
                            michal = 7;
                            michal = oscard[michal];
                            oscard = report.bind(zuuluu)(michal);
                            report = oscard.runOnJS;
                            michal = _closure3_slot11;
                            michal = report.bind(oscard)(michal);
                            michal = michal.bind(zuuluu)(tangon);
                            _fun00046_ip = 163; continue _fun00045;
 117:
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            michal = 7;
                            michal = report[michal];
                            report = tangon.bind(zuuluu)(michal);
                            tangon = report.runOnJS;
                            michal = _closure3_slot11;
                            michal = tangon.bind(report)(michal);
                            entity = _closure3_slot0;
                            entity = michal.bind(zuuluu)(entity);
 163:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = {};
                    romeon = _closure3_slot25;
                    yankee['isInDefaultZoom'] = romeon;
                    romeon = _closure3_slot27;
                    yankee['resetOnLayoutChange'] = romeon;
                    target = _closure3_slot2;
                    yankee['focused'] = target;
                    papara = _closure3_slot0;
                    yankee['id'] = papara;
                    record = 7;
                    romeon = result[record];
                    romeon = output.bind(sizing)(romeon);
                    romeon = romeon.runOnJS;
                    yankee['runOnJS'] = romeon;
                    romeon = _closure3_slot11;
                    yankee['setFocused'] = romeon;
                    michal['__closure'] = yankee;
                    yankee = 3907231315939.0;
                    michal['__workletHash'] = yankee;
                    yankee = _closure1_slot39;
                    michal['__initData'] = yankee;
                    zuuluu = zuuluu.bind(offset)(michal);
                    michal = result[golfie];
                    michal = output.bind(sizing)(michal);
                    offset = michal.Gesture;
                    michal = offset.Tap;
                    yankee = michal.bind(offset)();
                    offset = yankee.onTouchesMove;
                    michal = function(argFoo, argBar) { // Original name: V
                        michal = argBar;
                        entity = michal.fail;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    romeon = {};
                    michal['__closure'] = romeon;
                    romeon = 6816022636483.0;
                    michal['__workletHash'] = romeon;
                    romeon = _closure1_slot40;
                    michal['__initData'] = romeon;
                    yankee = offset.bind(yankee)(michal);
                    offset = yankee.onStart;
                    michal = function() { // Original name: P
                        _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                            zuuluu = _closure3_slot13;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            tangon = michal.mode;
                            zuuluu = _closure1_slot7;
                            zuuluu = zuuluu.HIDDEN;
                            if(!(tangon !== zuuluu)) { _fun00048_ip = 90; continue _fun00047 }
 38:
                            tangon = _closure1_slot0;
                            report = _closure1_slot2;
                            zuuluu = 7;
                            zuuluu = report[zuuluu];
                            report = undefined;
                            oscard = tangon.bind(report)(zuuluu);
                            tangon = oscard.runOnJS;
                            zuuluu = _closure3_slot12;
                            tangon = tangon.bind(oscard)(zuuluu);
                            zuuluu = {};
                            oscard = true;
                            zuuluu['debounce'] = oscard;
                            zuuluu = tangon.bind(report)(zuuluu);
                            _fun00048_ip = 140; continue _fun00047;
 90:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 7;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            tangon = tangon.bind(zuuluu)(michal);
                            michal = tangon.runOnJS;
                            entity = _closure3_slot14;
                            michal = michal.bind(tangon)(entity);
                            entity = {};
                            tangon = true;
                            entity['debounce'] = tangon;
                            entity = michal.bind(zuuluu)(entity);
 140:
                            entity = undefined;
                            return entity;
                        }
                    };
                    romeon = {};
                    foxtra = _closure3_slot13;
                    romeon['controlsSpecs'] = foxtra;
                    foxtra = _closure1_slot7;
                    romeon['VoicePanelControlsModes'] = foxtra;
                    foxtra = result[record];
                    foxtra = output.bind(sizing)(foxtra);
                    foxtra = foxtra.runOnJS;
                    romeon['runOnJS'] = foxtra;
                    foxtra = _closure3_slot14;
                    romeon['showControls'] = foxtra;
                    config = _closure3_slot12;
                    romeon['hideControls'] = config;
                    michal['__closure'] = romeon;
                    romeon = 4657945279972.0;
                    michal['__workletHash'] = romeon;
                    romeon = _closure1_slot41;
                    michal['__initData'] = romeon;
                    michal = offset.bind(yankee)(michal);
                    zuuluu = oscard.bind(verify)(zuuluu, michal);
                    michal = result[golfie];
                    michal = output.bind(sizing)(michal);
                    oscard = michal.Gesture;
                    michal = oscard.Pinch;
                    offset = michal.bind(oscard)();
                    verify = offset.enabled;
                    oscard = _closure3_slot4;
                    michal = !oscard;
                    offset = verify.bind(offset)(michal);
                    verify = offset.onTouchesDown;
                    michal = function(argFoo, argBar) { // Original name: D
                        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
                            zuuluu = argBar;
                            tangon = _closure3_slot2;
                            entity = tangon.get;
                            report = entity.bind(tangon)();
                            entity = null;
                            oscard = entity == report;
                            entity = undefined;
                            tangon = undefined;
                            if(oscard) { _fun00050_ip = 37; continue _fun00049 }
 32:
                            tangon = report.id;
 37:
                            michal = _closure3_slot0;
                            if(!(tangon !== michal)) { _fun00050_ip = 55; continue _fun00049 }
 45:
                            michal = zuuluu.fail;
                            michal = michal.bind(zuuluu)();
 55:
                            return entity;
                        }
                    };
                    yankee = {};
                    yankee['focused'] = target;
                    yankee['id'] = papara;
                    michal['__closure'] = yankee;
                    yankee = 8731754699388.0;
                    michal['__workletHash'] = yankee;
                    yankee = _closure1_slot42;
                    michal['__initData'] = yankee;
                    yankee = verify.bind(offset)(michal);
                    verify = yankee.onStart;
                    michal = function() { // Original name: I
                        tangon = _closure3_slot18;
                        zuuluu = tangon.set;
                        michal = tangon.get;
                        report = michal.bind(tangon)();
                        michal = 1;
                        michal = report + michal;
                        michal = zuuluu.bind(tangon)(michal);
                        tangon = _closure3_slot21;
                        zuuluu = tangon.set;
                        michal = false;
                        michal = zuuluu.bind(tangon)(michal);
                        zuuluu = _closure3_slot22;
                        michal = zuuluu.set;
                        entity = null;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    romeon = {};
                    echoed = _closure3_slot18;
                    romeon['numGesturesActive'] = echoed;
                    offset = _closure3_slot21;
                    romeon['isInPanToZoom'] = offset;
                    sequen = _closure3_slot22;
                    romeon['currentSizeThreshold'] = sequen;
                    michal['__closure'] = romeon;
                    romeon = 14001958036186.0;
                    michal['__workletHash'] = romeon;
                    romeon = _closure1_slot43;
                    michal['__initData'] = romeon;
                    yankee = verify.bind(yankee)(michal);
                    verify = yankee.onChange;
                    michal = function(argFoo) { // Original name: T
                        tangon = argFoo;
                        option = _closure3_slot15;
                        report = option.set;
                        entity = option.get;
                        oscard = entity.bind(option)();
                        offset = _closure1_slot15;
                        entity = option.get;
                        verify = entity.bind(option)();
                        golfie = tangon.scaleChange;
                        zuuluu = _closure3_slot24;
                        entity = zuuluu.get;
                        zuuluu = entity.bind(zuuluu)();
                        entity = undefined;
                        zuuluu = offset.bind(entity)(verify, golfie, zuuluu);
                        zuuluu = oscard * zuuluu;
                        zuuluu = report.bind(option)(zuuluu);
                        report = tangon.focalX;
                        verify = _closure3_slot5;
                        zuuluu = verify.get;
                        zuuluu = zuuluu.bind(verify)();
                        zuuluu = zuuluu.width;
                        oscard = 2;
                        zuuluu = zuuluu / oscard;
                        golfie = report - zuuluu;
                        report = tangon.focalY;
                        zuuluu = verify.get;
                        zuuluu = zuuluu.bind(verify)();
                        zuuluu = zuuluu.height;
                        zuuluu = zuuluu / oscard;
                        oscard = report - zuuluu;
                        zuuluu = tangon.scaleChange;
                        report = 1;
                        offset = zuuluu - report;
                        zuuluu = option.get;
                        verify = zuuluu.bind(option)();
                        zuuluu = -1;
                        golfie = zuuluu * golfie;
                        golfie = golfie * offset;
                        golfie = golfie / verify;
                        tangon = tangon.scaleChange;
                        report = tangon - report;
                        tangon = option.get;
                        tangon = tangon.bind(option)();
                        zuuluu = zuuluu * oscard;
                        zuuluu = zuuluu * report;
                        oscard = zuuluu / tangon;
                        report = _closure3_slot16;
                        tangon = report.set;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        zuuluu = zuuluu + golfie;
                        zuuluu = tangon.bind(report)(zuuluu);
                        report = _closure3_slot17;
                        tangon = report.set;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        zuuluu = zuuluu + oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
                        tangon = _closure3_slot19;
                        zuuluu = tangon.set;
                        michal = _closure3_slot28;
                        michal = michal.bind(entity)();
                        michal = zuuluu.bind(tangon)(michal);
                        return entity;
                    };
                    romeon = {};
                    backup = _closure3_slot15;
                    romeon['scale'] = backup;
                    vacuum = _closure1_slot15;
                    romeon['getScaleChangeWithOverscroll'] = vacuum;
                    ctrled = _closure3_slot24;
                    romeon['fitScale'] = ctrled;
                    foxtra = _closure3_slot5;
                    romeon['containerLayout'] = foxtra;
                    kiloes = _closure3_slot16;
                    romeon['translateX'] = kiloes;
                    foxtra = _closure3_slot17;
                    romeon['translateY'] = foxtra;
                    source = _closure3_slot19;
                    romeon['isInSnap'] = source;
                    update = _closure3_slot28;
                    romeon['isInCoverSnap'] = update;
                    michal['__closure'] = romeon;
                    romeon = 363806676909.0;
                    michal['__workletHash'] = romeon;
                    romeon = _closure1_slot44;
                    michal['__initData'] = romeon;
                    yankee = verify.bind(yankee)(michal);
                    verify = yankee.onEnd;
                    michal = function() { // Original name: v
                        tangon = _closure3_slot18;
                        zuuluu = tangon.set;
                        michal = tangon.get;
                        report = michal.bind(tangon)();
                        michal = 1;
                        michal = report - michal;
                        michal = zuuluu.bind(tangon)(michal);
                        michal = _closure3_slot29;
                        entity = undefined;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    status = {};
                    status['numGesturesActive'] = echoed;
                    romeon = _closure3_slot29;
                    status['handleMovementEnd'] = romeon;
                    michal['__closure'] = status;
                    status = 6177804811205.0;
                    michal['__workletHash'] = status;
                    status = _closure1_slot45;
                    michal['__initData'] = status;
                    michal = verify.bind(yankee)(michal);
                    golfie = result[golfie];
                    golfie = output.bind(sizing)(golfie);
                    verify = golfie.Gesture;
                    golfie = verify.Pan;
                    verify = golfie.bind(verify)();
                    golfie = verify.enabled;
                    oscard = !oscard;
                    verify = golfie.bind(verify)(oscard);
                    golfie = verify.requireExternalGestureToFail;
                    oscard = _closure3_slot10;
                    verify = golfie.bind(verify)(oscard);
                    golfie = verify.averageTouches;
                    oscard = true;
                    verify = golfie.bind(verify)(oscard);
                    golfie = verify.onTouchesDown;
                    oscard = function(argFoo, argBar) { // Original name: f
                        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
                            zuuluu = argBar;
                            tangon = _closure3_slot2;
                            entity = tangon.get;
                            report = entity.bind(tangon)();
                            entity = null;
                            oscard = entity == report;
                            entity = undefined;
                            tangon = undefined;
                            if(oscard) { _fun00052_ip = 37; continue _fun00051 }
 32:
                            tangon = report.id;
 37:
                            michal = _closure3_slot0;
                            if(!(tangon !== michal)) { _fun00052_ip = 55; continue _fun00051 }
 45:
                            michal = zuuluu.fail;
                            michal = michal.bind(zuuluu)();
 55:
                            return entity;
                        }
                    };
                    yankee = {};
                    yankee['focused'] = target;
                    yankee['id'] = papara;
                    oscard['__closure'] = yankee;
                    yankee = 14522165508586.0;
                    oscard['__workletHash'] = yankee;
                    yankee = _closure1_slot46;
                    oscard['__initData'] = yankee;
                    verify = golfie.bind(verify)(oscard);
                    golfie = verify.onBegin;
                    oscard = function() { // Original name: S
                        entity = global;
                        zuuluu = entity.Date;
                        michal = zuuluu.now;
                        report = michal.bind(zuuluu)();
                        zuuluu = _closure3_slot20;
                        tangon = zuuluu.get;
                        tangon = tangon.bind(zuuluu)();
                        oscard = report - tangon;
                        report = _closure3_slot21;
                        tangon = report.set;
                        michal = 250;
                        michal = oscard <= michal;
                        michal = tangon.bind(report)(michal);
                        michal = zuuluu.set;
                        tangon = entity.Date;
                        entity = tangon.now;
                        entity = entity.bind(tangon)();
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    yankee = {};
                    cntext = _closure3_slot20;
                    yankee['lastTapTimestamp'] = cntext;
                    cntext = 250;
                    yankee['PAN_TO_ZOOM_TAP_TIME_MILLIS'] = cntext;
                    yankee['isInPanToZoom'] = offset;
                    oscard['__closure'] = yankee;
                    yankee = 174997918171.0;
                    oscard['__workletHash'] = yankee;
                    yankee = _closure1_slot47;
                    oscard['__initData'] = yankee;
                    verify = golfie.bind(verify)(oscard);
                    golfie = verify.onStart;
                    oscard = function() { // Original name: l
                        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
                            zuuluu = _closure3_slot21;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            if(!michal) { _fun00054_ip = 62; continue _fun00053 }
 19:
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot2;
                            michal = 7;
                            michal = zuuluu[michal];
                            zuuluu = undefined;
                            report = tangon.bind(zuuluu)(michal);
                            tangon = report.runOnJS;
                            michal = _closure3_slot12;
                            michal = tangon.bind(report)(michal);
                            michal = michal.bind(zuuluu)();
 62:
                            tangon = _closure3_slot18;
                            zuuluu = tangon.set;
                            michal = tangon.get;
                            report = michal.bind(tangon)();
                            michal = 1;
                            michal = report + michal;
                            michal = zuuluu.bind(tangon)(michal);
                            zuuluu = _closure3_slot22;
                            michal = zuuluu.set;
                            entity = null;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = {};
                    yankee['isInPanToZoom'] = offset;
                    record = result[record];
                    record = output.bind(sizing)(record);
                    record = record.runOnJS;
                    yankee['runOnJS'] = record;
                    yankee['hideControls'] = config;
                    yankee['numGesturesActive'] = echoed;
                    yankee['currentSizeThreshold'] = sequen;
                    oscard['__closure'] = yankee;
                    yankee = 468649024049.0;
                    oscard['__workletHash'] = yankee;
                    yankee = _closure1_slot48;
                    oscard['__initData'] = yankee;
                    verify = golfie.bind(verify)(oscard);
                    golfie = verify.onChange;
                    oscard = function(argFoo) { // Original name: s
                        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
                            michal = argFoo;
                            tangon = _closure3_slot21;
                            zuuluu = tangon.get;
                            zuuluu = zuuluu.bind(tangon)();
                            if(zuuluu) { _fun00056_ip = 120; continue _fun00055 }
 22:
                            report = _closure3_slot16;
                            tangon = report.set;
                            zuuluu = report.get;
                            oscard = zuuluu.bind(report)();
                            golfie = michal.changeX;
                            option = _closure3_slot15;
                            zuuluu = option.get;
                            zuuluu = zuuluu.bind(option)();
                            zuuluu = golfie / zuuluu;
                            zuuluu = oscard + zuuluu;
                            zuuluu = tangon.bind(report)(zuuluu);
                            report = _closure3_slot17;
                            tangon = report.set;
                            zuuluu = report.get;
                            oscard = zuuluu.bind(report)();
                            golfie = michal.changeY;
                            zuuluu = option.get;
                            zuuluu = zuuluu.bind(option)();
                            zuuluu = golfie / zuuluu;
                            zuuluu = oscard + zuuluu;
                            zuuluu = tangon.bind(report)(zuuluu);
                            _fun00056_ip = 212; continue _fun00055;
 120:
                            zuuluu = michal.changeY;
                            michal = 0.0075;
                            offset = zuuluu * michal;
                            tangon = _closure3_slot15;
                            zuuluu = tangon.set;
                            michal = tangon.get;
                            report = michal.bind(tangon)();
                            verify = _closure1_slot15;
                            michal = tangon.get;
                            option = michal.bind(tangon)();
                            oscard = _closure3_slot24;
                            michal = oscard.get;
                            golfie = michal.bind(oscard)();
                            oscard = undefined;
                            michal = 1;
                            michal = michal + offset;
                            michal = verify.bind(oscard)(option, michal, golfie);
                            michal = report * michal;
                            michal = zuuluu.bind(tangon)(michal);
 212:
                            tangon = _closure3_slot19;
                            zuuluu = tangon.set;
                            michal = _closure3_slot28;
                            entity = undefined;
                            michal = michal.bind(entity)();
                            michal = zuuluu.bind(tangon)(michal);
                            return entity;
                        }
                    };
                    yankee = {};
                    yankee['isInPanToZoom'] = offset;
                    sequen = 0.0075;
                    yankee['PAN_TO_ZOOM_SCALE_FACTOR'] = sequen;
                    yankee['scale'] = backup;
                    yankee['getScaleChangeWithOverscroll'] = vacuum;
                    yankee['fitScale'] = ctrled;
                    yankee['translateX'] = kiloes;
                    yankee['translateY'] = foxtra;
                    yankee['isInSnap'] = source;
                    yankee['isInCoverSnap'] = update;
                    oscard['__closure'] = yankee;
                    yankee = 495574530547.0;
                    oscard['__workletHash'] = yankee;
                    yankee = _closure1_slot49;
                    oscard['__initData'] = yankee;
                    verify = golfie.bind(verify)(oscard);
                    golfie = verify.onEnd;
                    oscard = function(argFoo) { // Original name: n
                        zuuluu = argFoo;
                        report = _closure3_slot18;
                        tangon = report.set;
                        entity = report.get;
                        oscard = entity.bind(report)();
                        entity = 1;
                        entity = oscard - entity;
                        entity = tangon.bind(report)(entity);
                        romeon = _closure3_slot16;
                        report = romeon.set;
                        golfie = _closure1_slot0;
                        verify = _closure1_slot2;
                        oscard = 11;
                        tangon = verify[oscard];
                        entity = undefined;
                        backup = golfie.bind(entity)(tangon);
                        foxtra = backup.withSpring;
                        tangon = romeon.get;
                        kiloes = tangon.bind(romeon)();
                        tangon = zuuluu.velocityX;
                        offset = 0.05;
                        sizing = tangon * offset;
                        yankee = _closure3_slot15;
                        tangon = yankee.get;
                        tangon = tangon.bind(yankee)();
                        tangon = sizing / tangon;
                        tangon = kiloes + tangon;
                        option = _closure1_slot9;
                        tangon = foxtra.bind(backup)(tangon, option);
                        tangon = report.bind(romeon)(tangon);
                        report = _closure3_slot17;
                        tangon = report.set;
                        oscard = verify[oscard];
                        golfie = golfie.bind(entity)(oscard);
                        oscard = golfie.withSpring;
                        verify = report.get;
                        verify = verify.bind(report)();
                        zuuluu = zuuluu.velocityY;
                        offset = zuuluu * offset;
                        zuuluu = yankee.get;
                        zuuluu = zuuluu.bind(yankee)();
                        zuuluu = offset / zuuluu;
                        zuuluu = verify + zuuluu;
                        zuuluu = oscard.bind(golfie)(zuuluu, option);
                        zuuluu = tangon.bind(report)(zuuluu);
                        michal = _closure3_slot29;
                        michal = michal.bind(entity)();
                        return entity;
                    };
                    yankee = {};
                    yankee['numGesturesActive'] = echoed;
                    yankee['translateX'] = kiloes;
                    kiloes = 11;
                    kiloes = result[kiloes];
                    kiloes = output.bind(sizing)(kiloes);
                    kiloes = kiloes.withSpring;
                    yankee['withSpring'] = kiloes;
                    kiloes = 0.05;
                    yankee['FLING_VELOCITY_SCALING'] = kiloes;
                    yankee['scale'] = backup;
                    backup = _closure1_slot9;
                    yankee['SCALE_PHYSICS'] = backup;
                    yankee['translateY'] = foxtra;
                    yankee['handleMovementEnd'] = romeon;
                    oscard['__closure'] = yankee;
                    yankee = 10044685361387.0;
                    oscard['__workletHash'] = yankee;
                    yankee = _closure1_slot50;
                    oscard['__initData'] = yankee;
                    golfie = golfie.bind(verify)(oscard);
                    oscard = golfie.onFinalize;
                    entity = function() { // Original name: t
                        zuuluu = _closure3_slot21;
                        michal = zuuluu.set;
                        entity = false;
                        entity = michal.bind(zuuluu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    verify = {};
                    verify['isInPanToZoom'] = offset;
                    entity['__closure'] = verify;
                    verify = 2317326014435.0;
                    entity['__workletHash'] = verify;
                    option = _closure1_slot51;
                    entity['__initData'] = option;
                    entity = oscard.bind(golfie)(entity);
                    entity = tangon.bind(report)(zuuluu, michal, entity);
                    return entity;
                };
                golfie = verify.bind(offset)(golfie, option);
                entity['gesture'] = golfie;
                entity['scale'] = oscard;
                entity['translateX'] = report;
                entity['translateY'] = tangon;
                entity['numGesturesActive'] = zuuluu;
                entity['isInSnap'] = michal;
                return entity;
            };
            zuuluu = zuuluu.bind(tangon)(report);
            report = zuuluu.gesture;
            target = zuuluu.scale;
            _closure2_slot18 = target;
            papara = zuuluu.translateX;
            _closure2_slot19 = papara;
            cntext = zuuluu.translateY;
            _closure2_slot20 = cntext;
            record = zuuluu.isInSnap;
            _closure2_slot21 = record;
            zuuluu = option[config];
            backup = michal.bind(tangon)(zuuluu);
            oscard = backup.useAnimatedStyle;
            zuuluu = function() { // Original name: Ze
                _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                    michal = _closure2_slot13;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    golfie = entity.width;
                    option = entity.height;
                    entity = _closure2_slot14;
                    tangon = entity.mode;
                    entity = _closure1_slot8;
                    entity = entity.IN_APP;
                    zuuluu = golfie;
                    michal = option;
                    if(!(tangon === entity)) { _fun00058_ip = 193; continue _fun00057 }
 61:
                    if(!(!(golfie > option))) { _fun00058_ip = 127; continue _fun00057 }
 65:
                    entity = _closure2_slot14;
                    entity = entity.width;
                    entity = entity / golfie;
                    tangon = option * entity;
                    oscard = _closure2_slot18;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = tangon / entity;
                    tangon = _closure2_slot14;
                    oscard = tangon.width;
                    verify = _closure2_slot18;
                    tangon = verify.get;
                    tangon = tangon.bind(verify)();
                    tangon = oscard / tangon;
                    _fun00058_ip = 187; continue _fun00057;
 127:
                    oscard = _closure2_slot14;
                    oscard = oscard.height;
                    oscard = oscard / option;
                    golfie = golfie * oscard;
                    option = _closure2_slot18;
                    oscard = option.get;
                    oscard = oscard.bind(option)();
                    tangon = golfie / oscard;
                    oscard = _closure2_slot14;
                    option = oscard.height;
                    verify = _closure2_slot18;
                    oscard = verify.get;
                    oscard = oscard.bind(verify)();
                    entity = option / oscard;
 187:
                    zuuluu = tangon;
                    michal = entity;
 193:
                    entity = {};
                    entity['width'] = zuuluu;
                    entity['height'] = michal;
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.get;
                    zuuluu = michal.bind(zuuluu)();
                    tangon = 1;
                    michal = tangon;
                    if(!zuuluu) { _fun00058_ip = 227; continue _fun00057 }
 225:
                    michal = 0;
 227:
                    entity['opacity'] = michal;
                    zuuluu = {};
                    oscard = _closure2_slot18;
                    michal = oscard.get;
                    michal = michal.bind(oscard)();
                    zuuluu['scale'] = michal;
                    michal = new Array(4);
                    michal[0] = zuuluu;
                    zuuluu = {};
                    golfie = _closure2_slot19;
                    oscard = golfie.get;
                    oscard = oscard.bind(golfie)();
                    zuuluu['translateX'] = oscard;
                    michal[1] = zuuluu;
                    zuuluu = {};
                    golfie = _closure2_slot20;
                    oscard = golfie.get;
                    oscard = oscard.bind(golfie)();
                    zuuluu['translateY'] = oscard;
                    michal[2] = zuuluu;
                    zuuluu = {};
                    report = _closure2_slot4;
                    if(!report) { _fun00058_ip = 322; continue _fun00057 }
 316:
                    tangon = -1;
 322:
                    zuuluu['scaleX'] = tangon;
                    michal[3] = zuuluu;
                    entity['transform'] = michal;
                    return entity;
                }
            };
            output = {};
            output['videoDimensions'] = sierra;
            output['pipState'] = status;
            status = _closure1_slot8;
            output['VoicePanelPIPModes'] = status;
            output['scale'] = target;
            output['disableAnimations'] = verify;
            output['translateX'] = papara;
            output['translateY'] = cntext;
            output['mirror'] = result;
            zuuluu['__closure'] = output;
            output = 15210768014660.0;
            zuuluu['__workletHash'] = output;
            output = _closure1_slot57;
            zuuluu['__initData'] = output;
            result = oscard.bind(backup)(zuuluu);
            zuuluu = option[config];
            backup = michal.bind(tangon)(zuuluu);
            oscard = backup.useAnimatedStyle;
            zuuluu = function() { // Original name: ze
                _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                    michal = _closure2_slot21;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    if(entity) { _fun00060_ip = 209; continue _fun00059 }
 22:
                    entity = {'position': 'absolute', 'top': 4294967295, 'left': 4294967295, 'bottom': 4294967295, 'right': 4294967295, 'borderWidth': 2, 'borderRadius': 26, 'overflow': 'hidden', 'borderColor': 'white'};
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 7;
                    zuuluu = report[zuuluu];
                    yankee = undefined;
                    report = tangon.bind(yankee)(zuuluu);
                    tangon = report.withDelay;
                    oscard = _closure2_slot8;
                    zuuluu = oscard.get;
                    zuuluu = zuuluu.bind(oscard)();
                    romeon = null;
                    oscard = romeon == zuuluu;
                    verify = undefined;
                    if(oscard) { _fun00060_ip = 92; continue _fun00059 }
 87:
                    verify = zuuluu.id;
 92:
                    option = _closure2_slot0;
                    zuuluu = 0;
                    if(!(verify !== option)) { _fun00060_ip = 108; continue _fun00059 }
 102:
                    zuuluu = 300;
 108:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    option = 19;
                    option = offset[option];
                    verify = verify.bind(yankee)(option);
                    option = verify.withTiming;
                    foxtra = _closure2_slot8;
                    offset = foxtra.get;
                    offset = offset.bind(foxtra)();
                    romeon = romeon == offset;
                    yankee = undefined;
                    if(romeon) { _fun00060_ip = 160; continue _fun00059 }
 155:
                    yankee = offset.id;
 160:
                    offset = _closure2_slot0;
                    golfie = 0.3;
                    if(!(yankee === offset)) { _fun00060_ip = 180; continue _fun00059 }
 178:
                    golfie = 0;
 180:
                    oscard = _closure1_slot12;
                    michal = 'animate-never';
                    michal = option.bind(verify)(golfie, oscard, michal);
                    michal = tangon.bind(report)(zuuluu, michal);
                    entity['opacity'] = michal;
                    _fun00060_ip = 223; continue _fun00059;
 209:
                    entity = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0, 'right': 0, 'borderWidth': 25, 'overflow': 'hidden', 'borderColor': 'white', 'opacity': 0.5};
 223:
                    return entity;
                }
            };
            output = {};
            output['isInSnap'] = record;
            record = 25;
            output['SNAP_EDGE_INNER_THRESHOLD'] = record;
            config = option[config];
            config = michal.bind(tangon)(config);
            config = config.withDelay;
            output['withDelay'] = config;
            output['focused'] = sequen;
            output['id'] = vacuum;
            vacuum = 19;
            vacuum = option[vacuum];
            vacuum = michal.bind(tangon)(vacuum);
            vacuum = vacuum.withTiming;
            output['withTiming'] = vacuum;
            vacuum = _closure1_slot12;
            output['OPACITY_TIMING'] = vacuum;
            zuuluu['__closure'] = output;
            output = 12201189117918.0;
            zuuluu['__workletHash'] = output;
            output = _closure1_slot58;
            zuuluu['__initData'] = output;
            output = oscard.bind(backup)(zuuluu);
            oscard = golfie.useCallback;
            zuuluu = function(argFoo) { // Original name: Je
                tangon = _closure2_slot6;
                michal = _closure2_slot12;
                entity = michal.get;
                zuuluu = entity.bind(michal)();
                michal = undefined;
                entity = argFoo;
                entity = tangon.bind(michal)(entity, zuuluu);
                return entity;
            };
            entity = {};
            entity['layout'] = yankee;
            entity['disableAnimations'] = verify;
            zuuluu['__closure'] = entity;
            entity = 7201226784035.0;
            zuuluu['__workletHash'] = entity;
            entity = _closure1_slot59;
            zuuluu['__initData'] = entity;
            entity = new Array(2);
            entity[0] = yankee;
            entity[1] = verify;
            yankee = oscard.bind(golfie)(zuuluu, entity);
            zuuluu = _closure1_slot10;
            entity = 14;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.GestureDetector;
            entity = {};
            entity['gesture'] = report;
            golfie = _closure1_slot11;
            verify = 20;
            report = option[verify];
            oscard = romeon.bind(tangon)(report);
            report = {};
            vacuum = foxtra.wrapper;
            backup = new Array(2);
            backup[0] = vacuum;
            backup[1] = ctrled;
            report['style'] = backup;
            report['layout'] = yankee;
            option = option[verify];
            romeon = romeon.bind(tangon)(option);
            option = {};
            ctrled = foxtra.animatedWrapperStyles;
            backup = new Array(2);
            backup[0] = ctrled;
            backup[1] = result;
            option['style'] = backup;
            option['layout'] = yankee;
            result = _closure1_slot13;
            backup = {};
            backup['streamId'] = source;
            backup['onReady'] = update;
            backup['onSize'] = echoed;
            echoed = foxtra.video;
            backup['style'] = echoed;
            backup['layout'] = yankee;
            backup = zuuluu.bind(tangon)(result, backup);
            option['children'] = backup;
            romeon = zuuluu.bind(tangon)(romeon, option);
            option = new Array(2);
            option[0] = romeon;
            romeon = _closure1_slot10;
            backup = _closure1_slot1;
            kiloes = _closure1_slot2;
            if(offset) { _fun00006_ip = 1423; continue _fun00005 }
 1386:
            verify = kiloes[verify];
            offset = backup.bind(tangon)(verify);
            verify = {};
            verify['style'] = output;
            verify['layout'] = yankee;
            yankee = 'none';
            verify['pointerEvents'] = yankee;
            verify = romeon.bind(tangon)(offset, verify);
            _fun00006_ip = 1485; continue _fun00005;
 1423:
            offset = 21;
            offset = kiloes[offset];
            yankee = backup.bind(tangon)(offset);
            offset = {};
            offset['animate'] = sizing;
            foxtra = foxtra.spinner;
            offset['style'] = foxtra;
            foxtra = 22;
            foxtra = kiloes[foxtra];
            foxtra = backup.bind(tangon)(foxtra);
            foxtra = foxtra.unsafe_rawColors;
            foxtra = foxtra.BRAND_500;
            offset['color'] = foxtra;
            verify = romeon.bind(tangon)(yankee, offset);
 1485:
            option[1] = verify;
            report['children'] = option;
            report = golfie.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    michal = tangon.bind(golfie)(michal);
    tangon = 23;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();
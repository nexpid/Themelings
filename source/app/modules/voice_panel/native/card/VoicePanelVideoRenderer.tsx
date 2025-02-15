// app/modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    offset = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    options = 0;
    tango = oscar[options];
    entity = undefined;
    tango = offset.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    golf = oscar[tango];
    tango = argCorge;
    golf = tango.bind(entity)(golf);
    var _closure1_slot4 = golf;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    verify = tango.VoicePanelModes;
    var _closure1_slot5 = verify;
    tango = tango.MODE_CHANGE_PHYSICS;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelControlsModes;
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.VoicePanelPIPModes;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.SCALE_PHYSICS;
    var _closure1_slot9 = tango;
    tango = 6;
    verify = oscar[tango];
    verify = report.bind(entity)(verify);
    verify = verify.jsx;
    var _closure1_slot10 = verify;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsxs;
    var _closure1_slot11 = tango;
    tango = {};
    tango['duration'] = options;
    var _closure1_slot12 = tango;
    tango = 7;
    tango = oscar[tango];
    verify = offset.bind(entity)(tango);
    options = verify.createAnimatedComponent;
    tango = 8;
    tango = oscar[tango];
    tango = offset.bind(entity)(tango);
    tango = options.bind(verify)(tango);
    var _closure1_slot13 = tango;
    tango = {};
    options = 'function getScaleChangeWithOverscroll_VoicePanelVideoRendererTsx1(currentScale,scaleChange,fitScale){const{MIN_OVERSCROLL,OVERSCOLL_INTENSITY_FACTOR}=this.__closure;if(currentScale>=fitScale){return scaleChange;}const underScale=1-currentScale;const factor=Math.max(MIN_OVERSCROLL,1-underScale*underScale*OVERSCOLL_INTENSITY_FACTOR);return 1+(scaleChange-1)*factor;}';
    tango['code'] = options;
    var _closure1_slot14 = tango;
    tango = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getScaleChangeWithOverscroll
            _fun122019: for(var _fun122019_ip = 0; ; ) switch(_fun122019_ip) {
 0:
                mike = argFoo;
                entity = argBar;
                zulu = argBaz;
                if(!(!(mike >= zulu))) { _fun122019_ip = 78; continue _fun122019 }
 13:
                zulu = 1;
                mike = zulu - mike;
                tango = entity - zulu;
                report = global;
                golf = report.Math;
                oscar = golf.max;
                report = 0.1;
                options = mike * mike;
                mike = 5;
                mike = options * mike;
                mike = zulu - mike;
                mike = oscar.bind(golf)(report, mike);
                mike = tango * mike;
                mike = zulu + mike;
                return mike;
 78:
                return entity;
            }
        };
        mike = {'MIN_OVERSCROLL': 0.1, 'OVERSCOLL_INTENSITY_FACTOR': 5};
        entity['__closure'] = mike;
        mike = 8727721301304.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot14;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot15 = tango;
    tango = 9;
    tango = oscar[tango];
    verify = report.bind(entity)(tango);
    options = verify.createStyles;
    tango = {};
    yankee = 'absolute';
    offset = {'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'height': '100%', 'alignItems': 'center', 'justifyContent': 'center'};
    tango['wrapper'] = offset;
    offset = {};
    offset['position'] = yankee;
    tango['animatedWrapperStyles'] = offset;
    offset = {'position': 'absolute', 'top': 0, 'left': 0, 'width': '100%', 'height': '100%'};
    tango['videoRenderer'] = offset;
    offset = {'width': '100%', 'height': '100%'};
    tango['video'] = offset;
    offset = {'position': 'absolute', 'top': '50%', 'left': '50%', 'marginTop': 4294967280, 'marginLeft': 4294967280, 'height': 32, 'width': 32};
    tango['spinner'] = offset;
    tango = options.bind(verify)(tango);
    var _closure1_slot16 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx2(){const{containerLayout,videoDimensions}=this.__closure;return Math.max(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    tango['code'] = options;
    var _closure1_slot17 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx3(){const{containerLayout,videoDimensions}=this.__closure;return Math.min(containerLayout.get().width/videoDimensions.get().width,containerLayout.get().height/videoDimensions.get().height);}';
    tango['code'] = options;
    var _closure1_slot18 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx4(){const{translateX,translateY,scale,fitScale,coverScale}=this.__closure;if(translateX.get()!==0||translateY.get()!==0){return false;}if(scale.get()===fitScale.get()||scale.get()===coverScale.get()){return true;}return false;}';
    tango['code'] = options;
    var _closure1_slot19 = tango;
    tango = {};
    options = "function VoicePanelVideoRendererTsx5(forcedMode){const{scale,withSpring,fitScale,MODE_CHANGE_PHYSICS,disableAnimations,coverScale,translateX,SCALE_PHYSICS,translateY,currentSizeThreshold}=this.__closure;if(forcedMode==='fit'){scale.set(withSpring(fitScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}else{scale.set(withSpring(coverScale.get(),MODE_CHANGE_PHYSICS,!disableAnimations.get()?'respect-motion-settings':'animate-never'));}translateX.set(withSpring(0,SCALE_PHYSICS));translateY.set(withSpring(0,SCALE_PHYSICS));currentSizeThreshold.set(forcedMode);}";
    tango['code'] = options;
    var _closure1_slot20 = tango;
    tango = {};
    options = "function VoicePanelVideoRendererTsx6(){const{focused,id,videoDimensions,windowDimensions,isCamera,resetToDefaultSize}=this.__closure;var _focused$get;let resizeMode=((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id?'fit':'cover';const videoLandscape=videoDimensions.get().width>=videoDimensions.get().height;const parentLandscape=windowDimensions.get().width>=windowDimensions.get().height;const matchingAspect=videoLandscape===parentLandscape;if(isCamera&&resizeMode==='fit'){if(matchingAspect){resizeMode='cover';}}resetToDefaultSize(resizeMode);}";
    tango['code'] = options;
    var _closure1_slot21 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx7(){const{containerLayout}=this.__closure;return containerLayout.get();}';
    tango['code'] = options;
    var _closure1_slot22 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx8(containerLayout,previous){const{cheapWorkletShallowEqual,focused,id,resetOnLayoutChange}=this.__closure;var _focused$get;if(cheapWorkletShallowEqual(containerLayout,previous!==null&&previous!==void 0?previous:undefined))return;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id)return;if(containerLayout!==previous&&previous!=null){resetOnLayoutChange();}}';
    tango['code'] = options;
    var _closure1_slot23 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx9(){const{coverScale,fitScale,MIN_ZOOM_FOR_COVER_SNAP_OFFSET,translateX,scale,translateY,SNAP_CENTER_THRESHOLD,containerLayout,videoDimensions,SNAP_EDGE_OUTER_THRESHOLD,SNAP_EDGE_INNER_THRESHOLD}=this.__closure;if(coverScale.get()<fitScale.get()+MIN_ZOOM_FOR_COVER_SNAP_OFFSET){return false;}const screenTranslateX=translateX.get()*scale.get();const screenTranslateY=translateY.get()*scale.get();if(screenTranslateX<-SNAP_CENTER_THRESHOLD||screenTranslateX>SNAP_CENTER_THRESHOLD||screenTranslateY<-SNAP_CENTER_THRESHOLD||screenTranslateY>SNAP_CENTER_THRESHOLD){return false;}const adjustedScreenTranslateX=screenTranslateX+(containerLayout.get().width-videoDimensions.get().width*scale.get())/2;const adjustedScreenTranslateY=screenTranslateY+(containerLayout.get().height-videoDimensions.get().height*scale.get())/2;const videoWidth=videoDimensions.get().width*scale.get();const videoHeight=videoDimensions.get().height*scale.get();if(videoHeight>=containerLayout.get().height&&adjustedScreenTranslateX>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateX<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth>=containerLayout.get().width-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateX+videoWidth<=containerLayout.get().width+SNAP_EDGE_OUTER_THRESHOLD){return true;}if(videoWidth>=containerLayout.get().width&&adjustedScreenTranslateY>=-SNAP_EDGE_OUTER_THRESHOLD&&adjustedScreenTranslateY<=SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight>=containerLayout.get().height-SNAP_EDGE_INNER_THRESHOLD&&adjustedScreenTranslateY+videoHeight<=containerLayout.get().height+SNAP_EDGE_OUTER_THRESHOLD){return true;}return false;}';
    tango['code'] = options;
    var _closure1_slot24 = tango;
    tango = {};
    options = "function VoicePanelVideoRendererTsx10(){const{numGesturesActive,isInSnap,resetToDefaultSize,scale,fitScale,videoDimensions,containerLayout,translateX,withSpring,SCALE_PHYSICS,translateY}=this.__closure;if(numGesturesActive.get()>0){return;}if(isInSnap.get()){isInSnap.set(false);resetToDefaultSize('cover');return;}if(scale.get()<fitScale.get()){resetToDefaultSize('fit');return;}const maxTranslateY=Math.max(0,(videoDimensions.get().height-containerLayout.get().height/scale.get())/2);const maxTranslateX=Math.max(0,(videoDimensions.get().width-containerLayout.get().width/scale.get())/2);translateX.set(withSpring(Math.min(maxTranslateX,Math.max(-maxTranslateX,translateX.get())),SCALE_PHYSICS));translateY.set(withSpring(Math.min(maxTranslateY,Math.max(-maxTranslateY,translateY.get())),SCALE_PHYSICS));}";
    tango['code'] = options;
    var _closure1_slot25 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx11(){const{focused,id,isInDefaultZoom,isInPanToZoom}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id&&(!isInDefaultZoom.get()||isInPanToZoom.get());}';
    tango['code'] = options;
    var _closure1_slot26 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx12(isFocusedZoomed,previous){const{setIsFocusedVideoZoomed}=this.__closure;if(isFocusedZoomed===previous){return;}setIsFocusedVideoZoomed(isFocusedZoomed);}';
    tango['code'] = options;
    var _closure1_slot27 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx13(){const{focused,id}=this.__closure;var _focused$get;return((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id;}';
    tango['code'] = options;
    var _closure1_slot28 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx14(isFocused,previous){const{resetOnLayoutChange}=this.__closure;if(isFocused===previous){return;}resetOnLayoutChange();}';
    tango['code'] = options;
    var _closure1_slot29 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx15(){const{mode}=this.__closure;return mode.get();}';
    tango['code'] = options;
    var _closure1_slot30 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx16(mode,previous){const{resetOnLayoutChange}=this.__closure;if(mode===previous){return;}resetOnLayoutChange();}';
    tango['code'] = options;
    var _closure1_slot31 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx17(){const{videoDimensions}=this.__closure;return videoDimensions.get();}';
    tango['code'] = options;
    var _closure1_slot32 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx18(layout,previous){const{currentSizeThreshold,resetOnLayoutChange}=this.__closure;if(currentSizeThreshold==null){return;}if(layout.width===(previous===null||previous===void 0?void 0:previous.width)&&layout.height===(previous===null||previous===void 0?void 0:previous.height)){return;}resetOnLayoutChange();}';
    tango['code'] = options;
    var _closure1_slot33 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx19(){const{coverScale}=this.__closure;return coverScale.get();}';
    tango['code'] = options;
    var _closure1_slot34 = tango;
    tango = {};
    options = "function VoicePanelVideoRendererTsx20(current,previous){const{currentSizeThreshold,resetToDefaultSize}=this.__closure;const _currentSizeThreshold=currentSizeThreshold.get();if(_currentSizeThreshold!=='cover'){return;}if(current===previous){return;}resetToDefaultSize(_currentSizeThreshold);}";
    tango['code'] = options;
    var _closure1_slot35 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx21(){const{isInSnap}=this.__closure;return isInSnap.get();}';
    tango['code'] = options;
    var _closure1_slot36 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx22(current,previous){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(current===previous){return;}if(!current){return;}runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}';
    tango['code'] = options;
    var _closure1_slot37 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx23(e,manager){return manager.fail();}';
    tango['code'] = options;
    var _closure1_slot38 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx24(){const{isInDefaultZoom,resetOnLayoutChange,focused,id,runOnJS,setFocused}=this.__closure;var _focused$get;if(!isInDefaultZoom.get()){resetOnLayoutChange();return;}if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){runOnJS(setFocused)(id);}else{runOnJS(setFocused)(null);}}';
    tango['code'] = options;
    var _closure1_slot39 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx25(e,manager){return manager.fail();}';
    tango['code'] = options;
    var _closure1_slot40 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx26(){const{controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}';
    tango['code'] = options;
    var _closure1_slot41 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx27(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();}}';
    tango['code'] = options;
    var _closure1_slot42 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx28(){const{numGesturesActive,isInPanToZoom,currentSizeThreshold}=this.__closure;numGesturesActive.set(numGesturesActive.get()+1);isInPanToZoom.set(false);currentSizeThreshold.set(null);}';
    tango['code'] = options;
    var _closure1_slot43 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx29(event){const{scale,getScaleChangeWithOverscroll,fitScale,containerLayout,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),event.scaleChange,fitScale.get()));const startingFocalFromCenterX=event.focalX-containerLayout.get().width/2;const startingFocalFromCenterY=event.focalY-containerLayout.get().height/2;const zoomCenteringX=-1*startingFocalFromCenterX*(event.scaleChange-1)/scale.get();const zoomCenteringY=-1*startingFocalFromCenterY*(event.scaleChange-1)/scale.get();translateX.set(translateX.get()+zoomCenteringX);translateY.set(translateY.get()+zoomCenteringY);isInSnap.set(isInCoverSnap());}';
    tango['code'] = options;
    var _closure1_slot44 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx30(){const{numGesturesActive,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);handleMovementEnd();}';
    tango['code'] = options;
    var _closure1_slot45 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx31(event,manager){const{focused,id}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id){manager.fail();return;}}';
    tango['code'] = options;
    var _closure1_slot46 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx32(){const{lastTapTimestamp,PAN_TO_ZOOM_TAP_TIME_MILLIS,isInPanToZoom}=this.__closure;const hasRecentTap=Date.now()-lastTapTimestamp.get()<=PAN_TO_ZOOM_TAP_TIME_MILLIS;isInPanToZoom.set(hasRecentTap);lastTapTimestamp.set(Date.now());}';
    tango['code'] = options;
    var _closure1_slot47 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx33(){const{isInPanToZoom,runOnJS,hideControls,numGesturesActive,currentSizeThreshold}=this.__closure;if(isInPanToZoom.get()){runOnJS(hideControls)();}numGesturesActive.set(numGesturesActive.get()+1);currentSizeThreshold.set(null);}';
    tango['code'] = options;
    var _closure1_slot48 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx34(event){const{isInPanToZoom,PAN_TO_ZOOM_SCALE_FACTOR,scale,getScaleChangeWithOverscroll,fitScale,translateX,translateY,isInSnap,isInCoverSnap}=this.__closure;if(isInPanToZoom.get()){const scaleChange=1+event.changeY*PAN_TO_ZOOM_SCALE_FACTOR;scale.set(scale.get()*getScaleChangeWithOverscroll(scale.get(),scaleChange,fitScale.get()));}else{translateX.set(translateX.get()+event.changeX/scale.get());translateY.set(translateY.get()+event.changeY/scale.get());}isInSnap.set(isInCoverSnap());}';
    tango['code'] = options;
    var _closure1_slot49 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx35(event){const{numGesturesActive,translateX,withSpring,FLING_VELOCITY_SCALING,scale,SCALE_PHYSICS,translateY,handleMovementEnd}=this.__closure;numGesturesActive.set(numGesturesActive.get()-1);translateX.set(withSpring(translateX.get()+event.velocityX*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));translateY.set(withSpring(translateY.get()+event.velocityY*FLING_VELOCITY_SCALING/scale.get(),SCALE_PHYSICS));handleMovementEnd();}';
    tango['code'] = options;
    var _closure1_slot50 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx36(){const{isInPanToZoom}=this.__closure;isInPanToZoom.set(false);}';
    tango['code'] = options;
    var _closure1_slot51 = tango;
    tango = {};
    options = 'function shouldMakeActive_VoicePanelVideoRendererTsx37({mode:mode,focusedId:focusedId,selfId:selfId,isScrollVisible:isScrollVisible}){const{VoicePanelModes}=this.__closure;const isPIP=mode===VoicePanelModes.PIP;if(!isScrollVisible||isPIP||focusedId!=null&&focusedId!==selfId){return false;}return true;}';
    tango['code'] = options;
    var _closure1_slot52 = tango;
    tango = function() {
        entity = function(argFoo) { // Original name: shouldMakeActive
            _fun122021: for(var _fun122021_ip = 0; ; ) switch(_fun122021_ip) {
 0:
                entity = argFoo;
                report = entity.mode;
                tango = entity.focusedId;
                zulu = entity.selfId;
                entity = entity.isScrollVisible;
                mike = _closure1_slot5;
                mike = mike.PIP;
                mike = report === mike;
                entity = !entity;
                if(entity) { _fun122021_ip = 52; continue _fun122021 }
 49:
                entity = mike;
 52:
                if(entity) { _fun122021_ip = 71; continue _fun122021 }
 55:
                mike = null;
                mike = mike != tango;
                if(!mike) { _fun122021_ip = 68; continue _fun122021 }
 64:
                mike = tango !== zulu;
 68:
                entity = mike;
 71:
                entity = !entity;
                return entity;
            }
        };
        zulu = {};
        tango = _closure1_slot5;
        zulu['VoicePanelModes'] = tango;
        entity['__closure'] = zulu;
        zulu = 14556501664557.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot52;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot53 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx38(){const{mode,focused,isScrollVisible,streamId}=this.__closure;var _focused$get;return[mode.get(),(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,isScrollVisible.get(),streamId];}';
    tango['code'] = options;
    var _closure1_slot54 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx39(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,setHasActiveVideoOutputSink,shouldMakeActive,id}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[mode,focusedId,isScrollVisible,streamId]=props;if(streamId==null)return;runOnJS(setHasActiveVideoOutputSink)(streamId,shouldMakeActive({mode:mode,focusedId:focusedId,selfId:id,isScrollVisible:isScrollVisible}));}';
    tango['code'] = options;
    var _closure1_slot55 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx40(){const{focused,id,windowDimensions,sharedCoords}=this.__closure;var _focused$get;if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)===id){return{width:windowDimensions.get().width,height:windowDimensions.get().height};}return{width:sharedCoords.get().width,height:sharedCoords.get().height};}';
    tango['code'] = options;
    var _closure1_slot56 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx41(){const{videoDimensions,pipState,VoicePanelPIPModes,scale,disableAnimations,translateX,translateY,mirror}=this.__closure;let{width:width,height:height}=videoDimensions.get();if(pipState.mode===VoicePanelPIPModes.IN_APP){if(width>height){width=width*(pipState.height/height)/scale.get();height=pipState.height/scale.get();}else{height=height*(pipState.width/width)/scale.get();width=pipState.width/scale.get();}}return{width:width,height:height,opacity:disableAnimations.get()?0:1,transform:[{scale:scale.get()},{translateX:translateX.get()},{translateY:translateY.get()},{scaleX:mirror?-1:1}]};}';
    tango['code'] = options;
    var _closure1_slot57 = tango;
    tango = {};
    options = "function VoicePanelVideoRendererTsx42(){const{isInSnap,SNAP_EDGE_INNER_THRESHOLD,withDelay,focused,id,withTiming,OPACITY_TIMING}=this.__closure;var _focused$get,_focused$get2;if(isInSnap.get()){return{position:'absolute',top:0,left:0,bottom:0,right:0,borderWidth:SNAP_EDGE_INNER_THRESHOLD,overflow:'hidden',borderColor:'white',opacity:0.5};}return{position:'absolute',top:-1,left:-1,bottom:-1,right:-1,borderWidth:2,borderRadius:24+2,overflow:'hidden',borderColor:'white',opacity:withDelay(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!==id?300:0,withTiming(((_focused$get2=focused.get())===null||_focused$get2===void 0?void 0:_focused$get2.id)===id?0:0.3,OPACITY_TIMING,'animate-never'))};}";
    tango['code'] = options;
    var _closure1_slot58 = tango;
    tango = {};
    options = 'function VoicePanelVideoRendererTsx43(values){const{layout,disableAnimations}=this.__closure;return layout(values,disableAnimations.get());}';
    tango['code'] = options;
    var _closure1_slot59 = tango;
    tango = golf.memo;
    mike = function(argFoo) { // Original name: VideoRenderer
        _fun122022: for(var _fun122022_ip = 0; ; ) switch(_fun122022_ip) {
 0:
            mike = argFoo;
            vacuum = mike.id;
            var _closure2_slot0 = vacuum;
            source = mike.streamId;
            var _closure2_slot1 = source;
            context = mike.sharedCoords;
            var _closure2_slot2 = context;
            target = mike.isScrollVisible;
            var _closure2_slot3 = target;
            backup = mike.isCamera;
            result = mike.mirror;
            tango = undefined;
            if(!(result === tango)) { _fun122022_ip = 64; continue _fun122022 }
 62:
            result = false;
 64:
            var _closure2_slot4 = result;
            zulu = mike.focusOnReady;
            if(!(zulu === tango)) { _fun122022_ip = 80; continue _fun122022 }
 78:
            zulu = false;
 80:
            var _closure2_slot5 = zulu;
            control = mike.style;
            yankee = mike.layout;
            var _closure2_slot6 = yankee;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            var _closure2_slot14 = tango;
            var _closure2_slot15 = tango;
            var _closure2_slot16 = tango;
            var _closure2_slot17 = tango;
            var _closure2_slot18 = tango;
            var _closure2_slot19 = tango;
            var _closure2_slot20 = tango;
            var _closure2_slot21 = tango;
            mike = _closure1_slot16;
            foxtrot = mike.bind(tango)();
            golf = _closure1_slot4;
            zulu = golf.useContext;
            romeo = _closure1_slot1;
            options = _closure1_slot2;
            mike = 10;
            mike = options[mike];
            mike = romeo.bind(tango)(mike);
            mike = zulu.bind(golf)(mike);
            oscar = mike.mode;
            _closure2_slot7 = oscar;
            sequence = mike.focused;
            _closure2_slot8 = sequence;
            zulu = mike.setFocused;
            _closure2_slot9 = zulu;
            zulu = mike.layoutManager;
            _closure2_slot10 = zulu;
            papa = mike.windowDimensions;
            _closure2_slot11 = papa;
            echo = mike.streamOutputSinkStack;
            mike = _closure1_slot0;
            config = 7;
            report = options[config];
            verify = mike.bind(tango)(report);
            report = verify.useSharedValue;
            sizing = true;
            verify = report.bind(verify)(sizing);
            _closure2_slot12 = verify;
            report = options[config];
            output = mike.bind(tango)(report);
            offset = output.useSharedValue;
            report = {};
            update = zulu.getTargetDimensions;
            equality = update.bind(zulu)(vacuum);
            quebec = report;
            update = copyDataProperties(quebec, equality);
            sierra = offset.bind(output)(report);
            _closure2_slot13 = sierra;
            report = 15;
            report = options[report];
            offset = mike.bind(tango)(report);
            report = offset.usePIPState;
            status = report.bind(offset)();
            _closure2_slot14 = status;
            report = golf.useState;
            output = report.bind(golf)(sizing);
            offset = _closure1_slot3;
            report = 2;
            output = offset.bind(tango)(output, report);
            report = 0;
            offset = output[report];
            report = 1;
            report = output[report];
            _closure2_slot15 = report;
            output = golf.useState;
            report = function() {
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 16;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                zulu = entity.VideoSpinnerTimer;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                tango = 'VideoRenderer';
                report = mike;
                entity = new report[zulu](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                return entity;
            };
            report = output.bind(golf)(report);
            output = golf.useRef;
            report = function() {
                _fun122024: for(var _fun122024_ip = 0; ; ) switch(_fun122024_ip) {
 0:
                    mike = _closure2_slot5;
                    if(!mike) { _fun122024_ip = 25; continue _fun122024 }
 10:
                    zulu = _closure2_slot9;
                    mike = _closure2_slot0;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 25:
                    entity = undefined;
                    return entity;
                }
            };
            report = output.bind(golf)(report);
            _closure2_slot16 = report;
            update = golf.useCallback;
            output = function() {
                tango = _closure2_slot15;
                entity = undefined;
                zulu = false;
                zulu = tango.bind(entity)(zulu);
                zulu = _closure2_slot16;
                mike = zulu.current;
                mike = mike.bind(zulu)();
                return entity;
            };
            report = new Array(0);
            update = update.bind(golf)(output, report);
            report = 17;
            report = options[report];
            output = mike.bind(tango)(report);
            report = output.useSetHasActiveVideoOutputSink;
            lima = report.bind(output)(echo);
            _closure2_slot17 = lima;
            report = options[config];
            record = mike.bind(tango)(report);
            echo = record.useAnimatedReaction;
            output = function() { // Original name: ke
                _fun122026: for(var _fun122026_ip = 0; ; ) switch(_fun122026_ip) {
 0:
                    zulu = _closure2_slot7;
                    entity = zulu.get;
                    zulu = entity.bind(zulu)();
                    entity = new Array(4);
                    entity[0] = zulu;
                    tango = _closure2_slot8;
                    zulu = tango.get;
                    tango = zulu.bind(tango)();
                    zulu = null;
                    report = zulu == tango;
                    zulu = undefined;
                    if(report) { _fun122026_ip = 53; continue _fun122026 }
 48:
                    zulu = tango.id;
 53:
                    entity[1] = zulu;
                    tango = _closure2_slot3;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    entity[2] = zulu;
                    mike = _closure2_slot1;
                    entity[3] = mike;
                    return entity;
                }
            };
            report = {};
            report['mode'] = oscar;
            report['focused'] = sequence;
            report['isScrollVisible'] = target;
            report['streamId'] = source;
            output['__closure'] = report;
            report = 3558943323767.0;
            output['__workletHash'] = report;
            report = _closure1_slot54;
            output['__initData'] = report;
            report = function(argFoo, argBar) { // Original name: Me
                _fun122027: for(var _fun122027_ip = 0; ; ) switch(_fun122027_ip) {
 0:
                    oscar = argFoo;
                    options = argBar;
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    entity = 12;
                    zulu = zulu[entity];
                    entity = undefined;
                    golf = tango.bind(entity)(zulu);
                    report = golf.cheapWorkletArrayShallowEqual;
                    zulu = null;
                    verify = zulu != options;
                    tango = undefined;
                    if(!verify) { _fun122027_ip = 51; continue _fun122027 }
 48:
                    tango = options;
 51:
                    tango = report.bind(golf)(oscar, tango);
                    if(tango) { _fun122027_ip = 181; continue _fun122027 }
 60:
                    report = _closure1_slot3;
                    tango = 4;
                    report = report.bind(entity)(oscar, tango);
                    tango = 0;
                    verify = report[tango];
                    tango = 1;
                    options = report[tango];
                    tango = 2;
                    oscar = report[tango];
                    tango = 3;
                    tango = report[tango];
                    if(!(zulu != tango)) { _fun122027_ip = 181; continue _fun122027 }
 104:
                    report = _closure1_slot0;
                    golf = _closure1_slot2;
                    zulu = 7;
                    zulu = golf[zulu];
                    offset = report.bind(entity)(zulu);
                    report = offset.runOnJS;
                    zulu = _closure2_slot17;
                    zulu = report.bind(offset)(zulu);
                    report = _closure1_slot53;
                    mike = {};
                    mike['mode'] = verify;
                    mike['focusedId'] = options;
                    golf = _closure2_slot0;
                    mike['selfId'] = golf;
                    mike['isScrollVisible'] = oscar;
                    mike = report.bind(entity)(mike);
                    mike = zulu.bind(entity)(tango, mike);
 181:
                    return entity;
                }
            };
            target = {};
            whiskey = 12;
            whiskey = options[whiskey];
            whiskey = mike.bind(tango)(whiskey);
            whiskey = whiskey.cheapWorkletArrayShallowEqual;
            target['cheapWorkletArrayShallowEqual'] = whiskey;
            whiskey = options[config];
            whiskey = mike.bind(tango)(whiskey);
            whiskey = whiskey.runOnJS;
            target['runOnJS'] = whiskey;
            target['setHasActiveVideoOutputSink'] = lima;
            lima = _closure1_slot53;
            target['shouldMakeActive'] = lima;
            target['id'] = vacuum;
            report['__closure'] = target;
            target = 12089612803324.0;
            report['__workletHash'] = target;
            target = _closure1_slot55;
            report['__initData'] = target;
            report = echo.bind(record)(output, report);
            output = golf.useCallback;
            report = new Array(4);
            report[0] = sierra;
            report[1] = zulu;
            report[2] = vacuum;
            report[3] = verify;
            zulu = function(argFoo) {
                _fun122028: for(var _fun122028_ip = 0; ; ) switch(_fun122028_ip) {
 0:
                    entity = argFoo;
                    entity = entity.nativeEvent;
                    golf = entity.width;
                    oscar = entity.height;
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 18;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = _closure2_slot13;
                    zulu = {};
                    zulu['width'] = golf;
                    zulu['height'] = oscar;
                    zulu = report.bind(entity)(tango, zulu);
                    report = _closure2_slot10;
                    tango = report.setTargetDimensions;
                    zulu = _closure2_slot0;
                    zulu = tango.bind(report)(zulu, golf, oscar);
                    zulu = _closure2_slot12;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    if(!mike) { _fun122028_ip = 129; continue _fun122028 }
 103:
                    mike = global;
                    tango = mike.setTimeout;
                    zulu = function() {
                        zulu = _closure2_slot12;
                        mike = zulu.set;
                        entity = false;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    mike = 34;
                    mike = tango.bind(entity)(zulu, mike);
 129:
                    return entity;
                }
            };
            echo = output.bind(golf)(zulu, report);
            zulu = options[config];
            output = mike.bind(tango)(zulu);
            report = output.useDerivedValue;
            zulu = function() { // Original name: $e
                _fun122030: for(var _fun122030_ip = 0; ; ) switch(_fun122030_ip) {
 0:
                    mike = _closure2_slot8;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    mike = null;
                    tango = mike == entity;
                    mike = undefined;
                    if(tango) { _fun122030_ip = 32; continue _fun122030 }
 27:
                    mike = entity.id;
 32:
                    entity = _closure2_slot0;
                    if(!(mike !== entity)) { _fun122030_ip = 84; continue _fun122030 }
 40:
                    entity = {};
                    tango = _closure2_slot2;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.width;
                    entity['width'] = mike;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.height;
                    entity['height'] = mike;
                    _fun122030_ip = 133; continue _fun122030;
 84:
                    mike = {};
                    report = _closure2_slot11;
                    tango = report.get;
                    tango = tango.bind(report)();
                    tango = tango.width;
                    mike['width'] = tango;
                    tango = _closure2_slot11;
                    zulu = tango.get;
                    zulu = zulu.bind(tango)();
                    zulu = zulu.height;
                    mike['height'] = zulu;
                    entity = mike;
 133:
                    return entity;
                }
            };
            record = {};
            record['focused'] = sequence;
            record['id'] = vacuum;
            record['windowDimensions'] = papa;
            record['sharedCoords'] = context;
            zulu['__closure'] = record;
            record = 9631392718391.0;
            zulu['__workletHash'] = record;
            record = _closure1_slot56;
            zulu['__initData'] = record;
            zulu = report.bind(output)(zulu);
            report = {};
            report['id'] = vacuum;
            report['isCamera'] = backup;
            report['focused'] = sequence;
            report['mode'] = oscar;
            report['loading'] = offset;
            report['containerLayout'] = zulu;
            report['videoDimensions'] = sierra;
            report['disableAnimations'] = verify;
            zulu = function(argFoo) { // Original name: useGestures
                entity = argFoo;
                sequence = entity.id;
                var _closure3_slot0 = sequence;
                vacuum = entity.isCamera;
                var _closure3_slot1 = vacuum;
                config = entity.focused;
                var _closure3_slot2 = config;
                variable37 = entity.mode;
                var _closure3_slot3 = variable37;
                context = entity.loading;
                var _closure3_slot4 = context;
                source = entity.containerLayout;
                var _closure3_slot5 = source;
                variable36 = entity.videoDimensions;
                var _closure3_slot6 = variable36;
                quebec = entity.disableAnimations;
                var _closure3_slot7 = quebec;
                offset = _closure1_slot4;
                mike = offset.useContext;
                zulu = _closure1_slot1;
                equality = _closure1_slot2;
                entity = 10;
                entity = equality[entity];
                whiskey = undefined;
                entity = zulu.bind(whiskey)(entity);
                entity = mike.bind(offset)(entity);
                variable39 = entity.setIsFocusedVideoZoomed;
                var _closure3_slot8 = variable39;
                update = entity.windowDimensions;
                var _closure3_slot9 = update;
                record = entity.dismissToPIPGestureRef;
                var _closure3_slot10 = record;
                kilo = entity.setFocused;
                var _closure3_slot11 = kilo;
                backup = entity.hideControls;
                var _closure3_slot12 = backup;
                foxtrot = entity.controlsSpecs;
                var _closure3_slot13 = foxtrot;
                romeo = entity.showControls;
                var _closure3_slot14 = romeo;
                lima = _closure1_slot0;
                sierra = 7;
                entity = equality[sierra];
                zulu = lima.bind(whiskey)(entity);
                mike = zulu.useSharedValue;
                entity = 1;
                oscar = mike.bind(zulu)(entity);
                var _closure3_slot15 = oscar;
                entity = equality[sierra];
                mike = lima.bind(whiskey)(entity);
                entity = mike.useSharedValue;
                yankee = 0;
                report = entity.bind(mike)(yankee);
                var _closure3_slot16 = report;
                entity = equality[sierra];
                mike = lima.bind(whiskey)(entity);
                entity = mike.useSharedValue;
                tango = entity.bind(mike)(yankee);
                var _closure3_slot17 = tango;
                entity = equality[sierra];
                mike = lima.bind(whiskey)(entity);
                entity = mike.useSharedValue;
                zulu = entity.bind(mike)(yankee);
                var _closure3_slot18 = zulu;
                entity = equality[sierra];
                mike = lima.bind(whiskey)(entity);
                entity = mike.useSharedValue;
                verify = false;
                mike = entity.bind(mike)(verify);
                var _closure3_slot19 = mike;
                entity = equality[sierra];
                options = lima.bind(whiskey)(entity);
                entity = options.useSharedValue;
                result = entity.bind(options)(yankee);
                var _closure3_slot20 = result;
                entity = equality[sierra];
                options = lima.bind(whiskey)(entity);
                entity = options.useSharedValue;
                output = entity.bind(options)(verify);
                var _closure3_slot21 = output;
                entity = equality[sierra];
                verify = lima.bind(whiskey)(entity);
                options = verify.useSharedValue;
                entity = null;
                control = options.bind(verify)(entity);
                var _closure3_slot22 = control;
                entity = equality[sierra];
                verify = lima.bind(whiskey)(entity);
                options = verify.useDerivedValue;
                entity = function() { // Original name: P
                    entity = global;
                    tango = entity.Math;
                    zulu = tango.max;
                    report = _closure3_slot5;
                    mike = report.get;
                    mike = mike.bind(report)();
                    mike = mike.width;
                    oscar = _closure3_slot6;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.width;
                    mike = mike / entity;
                    entity = report.get;
                    entity = entity.bind(report)();
                    report = entity.height;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.height;
                    entity = report / entity;
                    entity = zulu.bind(tango)(mike, entity);
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
                status = options.bind(verify)(entity);
                var _closure3_slot23 = status;
                entity = equality[sierra];
                verify = lima.bind(whiskey)(entity);
                options = verify.useDerivedValue;
                entity = function() { // Original name: V
                    entity = global;
                    tango = entity.Math;
                    zulu = tango.min;
                    report = _closure3_slot5;
                    mike = report.get;
                    mike = mike.bind(report)();
                    mike = mike.width;
                    oscar = _closure3_slot6;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.width;
                    mike = mike / entity;
                    entity = report.get;
                    entity = entity.bind(report)();
                    report = entity.height;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = entity.height;
                    entity = report / entity;
                    entity = zulu.bind(tango)(mike, entity);
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
                yankee = options.bind(verify)(entity);
                var _closure3_slot24 = yankee;
                entity = equality[sierra];
                verify = lima.bind(whiskey)(entity);
                options = verify.useDerivedValue;
                entity = function() { // Original name: le
                    _fun122034: for(var _fun122034_ip = 0; ; ) switch(_fun122034_ip) {
 0:
                        mike = _closure3_slot16;
                        entity = mike.get;
                        entity = entity.bind(mike)();
                        tango = 0;
                        entity = tango === entity;
                        if(!entity) { _fun122034_ip = 42; continue _fun122034 }
 25:
                        report = _closure3_slot17;
                        mike = report.get;
                        mike = mike.bind(report)();
                        entity = tango === mike;
 42:
                        if(!entity) { _fun122034_ip = 111; continue _fun122034 }
 45:
                        tango = _closure3_slot15;
                        mike = tango.get;
                        tango = mike.bind(tango)();
                        report = _closure3_slot24;
                        mike = report.get;
                        mike = mike.bind(report)();
                        mike = tango === mike;
                        if(mike) { _fun122034_ip = 108; continue _fun122034 }
 78:
                        report = _closure3_slot15;
                        tango = report.get;
                        tango = tango.bind(report)();
                        report = _closure3_slot23;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        mike = tango === zulu;
 108:
                        entity = mike;
 111:
                        return entity;
                    }
                };
                sizing = {};
                sizing['translateX'] = report;
                sizing['translateY'] = tango;
                sizing['scale'] = oscar;
                sizing['fitScale'] = yankee;
                sizing['coverScale'] = status;
                entity['__closure'] = sizing;
                sizing = 15099362638406.0;
                entity['__workletHash'] = sizing;
                sizing = _closure1_slot19;
                entity['__initData'] = sizing;
                sizing = options.bind(verify)(entity);
                var _closure3_slot25 = sizing;
                verify = offset.useCallback;
                options = function(argFoo) { // Original name: de
                    _fun122035: for(var _fun122035_ip = 0; ; ) switch(_fun122035_ip) {
 0:
                        tango = argFoo;
                        entity = 'fit';
                        if(!(entity !== tango)) { _fun122035_ip = 112; continue _fun122035 }
 11:
                        zulu = _closure3_slot15;
                        mike = zulu.set;
                        options = _closure1_slot0;
                        golf = _closure1_slot2;
                        oscar = 11;
                        golf = golf[oscar];
                        oscar = undefined;
                        options = options.bind(oscar)(golf);
                        golf = options.withSpring;
                        verify = _closure3_slot23;
                        oscar = verify.get;
                        oscar = oscar.bind(verify)();
                        report = _closure1_slot6;
                        verify = _closure3_slot7;
                        entity = verify.get;
                        verify = entity.bind(verify)();
                        entity = 'respect-motion-settings';
                        if(!verify) { _fun122035_ip = 98; continue _fun122035 }
 92:
                        entity = 'animate-never';
 98:
                        entity = golf.bind(options)(oscar, report, entity);
                        entity = mike.bind(zulu)(entity);
                        _fun122035_ip = 211; continue _fun122035;
 112:
                        zulu = _closure3_slot15;
                        mike = zulu.set;
                        options = _closure1_slot0;
                        golf = _closure1_slot2;
                        oscar = 11;
                        golf = golf[oscar];
                        oscar = undefined;
                        options = options.bind(oscar)(golf);
                        golf = options.withSpring;
                        verify = _closure3_slot24;
                        oscar = verify.get;
                        oscar = oscar.bind(verify)();
                        report = _closure1_slot6;
                        verify = _closure3_slot7;
                        entity = verify.get;
                        verify = entity.bind(verify)();
                        entity = 'respect-motion-settings';
                        if(!verify) { _fun122035_ip = 199; continue _fun122035 }
 193:
                        entity = 'animate-never';
 199:
                        entity = golf.bind(options)(oscar, report, entity);
                        entity = mike.bind(zulu)(entity);
 211:
                        yankee = _closure3_slot16;
                        oscar = yankee.set;
                        golf = _closure1_slot0;
                        offset = _closure1_slot2;
                        zulu = 11;
                        report = offset[zulu];
                        entity = undefined;
                        romeo = golf.bind(entity)(report);
                        report = romeo.withSpring;
                        verify = _closure1_slot9;
                        options = 0;
                        report = report.bind(romeo)(options, verify);
                        report = oscar.bind(yankee)(report);
                        oscar = _closure3_slot17;
                        report = oscar.set;
                        zulu = offset[zulu];
                        golf = golf.bind(entity)(zulu);
                        zulu = golf.withSpring;
                        zulu = zulu.bind(golf)(options, verify);
                        zulu = report.bind(oscar)(zulu);
                        zulu = _closure3_slot22;
                        mike = zulu.set;
                        mike = mike.bind(zulu)(tango);
                        return entity;
                    }
                };
                entity = {};
                entity['scale'] = oscar;
                papa = 11;
                echo = equality[papa];
                echo = lima.bind(whiskey)(echo);
                echo = echo.withSpring;
                entity['withSpring'] = echo;
                entity['fitScale'] = yankee;
                echo = _closure1_slot6;
                entity['MODE_CHANGE_PHYSICS'] = echo;
                entity['disableAnimations'] = quebec;
                entity['coverScale'] = status;
                entity['translateX'] = report;
                echo = _closure1_slot9;
                entity['SCALE_PHYSICS'] = echo;
                entity['translateY'] = tango;
                entity['currentSizeThreshold'] = control;
                options['__closure'] = entity;
                entity = 16610861286231.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot20;
                options['__initData'] = entity;
                entity = new Array(7);
                entity[0] = oscar;
                entity[1] = report;
                entity[2] = tango;
                entity[3] = status;
                entity[4] = control;
                entity[5] = yankee;
                entity[6] = quebec;
                quebec = verify.bind(offset)(options, entity);
                var _closure3_slot26 = quebec;
                verify = offset.useCallback;
                options = function() { // Original name: ue
                    _fun122036: for(var _fun122036_ip = 0; ; ) switch(_fun122036_ip) {
 0:
                        zulu = _closure3_slot2;
                        entity = zulu.get;
                        zulu = entity.bind(zulu)();
                        entity = null;
                        tango = entity == zulu;
                        entity = undefined;
                        oscar = undefined;
                        if(tango) { _fun122036_ip = 34; continue _fun122036 }
 29:
                        oscar = zulu.id;
 34:
                        report = _closure3_slot0;
                        tango = 'cover';
                        zulu = tango;
                        if(!(oscar === report)) { _fun122036_ip = 53; continue _fun122036 }
 49:
                        zulu = 'fit';
 53:
                        golf = _closure3_slot6;
                        report = golf.get;
                        report = report.bind(golf)();
                        oscar = report.width;
                        report = golf.get;
                        report = report.bind(golf)();
                        report = report.height;
                        golf = oscar >= report;
                        options = _closure3_slot9;
                        report = options.get;
                        report = report.bind(options)();
                        oscar = report.width;
                        report = options.get;
                        report = report.bind(options)();
                        report = report.height;
                        oscar = oscar >= report;
                        report = _closure3_slot1;
                        if(!report) { _fun122036_ip = 140; continue _fun122036 }
 132:
                        options = 'fit';
                        report = options === zulu;
 140:
                        if(!report) { _fun122036_ip = 147; continue _fun122036 }
 143:
                        report = golf === oscar;
 147:
                        if(!report) { _fun122036_ip = 153; continue _fun122036 }
 150:
                        zulu = tango;
 153:
                        mike = _closure3_slot26;
                        mike = mike.bind(entity)(zulu);
                        return entity;
                    }
                };
                entity = {};
                entity['focused'] = config;
                entity['id'] = sequence;
                entity['videoDimensions'] = variable36;
                entity['windowDimensions'] = update;
                entity['isCamera'] = vacuum;
                entity['resetToDefaultSize'] = quebec;
                options['__closure'] = entity;
                entity = 15643035811761.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot21;
                options['__initData'] = entity;
                entity = new Array(6);
                entity[0] = config;
                entity[1] = sequence;
                entity[2] = vacuum;
                entity[3] = variable36;
                entity[4] = update;
                entity[5] = quebec;
                vacuum = verify.bind(offset)(options, entity);
                var _closure3_slot27 = vacuum;
                entity = equality[sierra];
                update = lima.bind(whiskey)(entity);
                verify = update.useAnimatedReaction;
                options = function() { // Original name: ge
                    mike = _closure3_slot5;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = {};
                entity['containerLayout'] = source;
                options['__closure'] = entity;
                entity = 9695573702258.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot22;
                options['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: he
                    _fun122038: for(var _fun122038_ip = 0; ; ) switch(_fun122038_ip) {
 0:
                        oscar = argFoo;
                        report = argBar;
                        zulu = _closure1_slot0;
                        mike = _closure1_slot2;
                        entity = 12;
                        mike = mike[entity];
                        entity = undefined;
                        golf = zulu.bind(entity)(mike);
                        zulu = golf.cheapWorkletShallowEqual;
                        tango = null;
                        options = tango != report;
                        mike = undefined;
                        if(!options) { _fun122038_ip = 51; continue _fun122038 }
 48:
                        mike = report;
 51:
                        mike = zulu.bind(golf)(oscar, mike);
                        if(mike) { _fun122038_ip = 123; continue _fun122038 }
 60:
                        golf = _closure3_slot2;
                        zulu = golf.get;
                        zulu = zulu.bind(golf)();
                        options = tango == zulu;
                        golf = undefined;
                        if(options) { _fun122038_ip = 90; continue _fun122038 }
 85:
                        golf = zulu.id;
 90:
                        zulu = _closure3_slot0;
                        zulu = golf === zulu;
                        if(!zulu) { _fun122038_ip = 105; continue _fun122038 }
 101:
                        zulu = oscar !== report;
 105:
                        if(!zulu) { _fun122038_ip = 112; continue _fun122038 }
 108:
                        zulu = tango != report;
 112:
                        if(!zulu) { _fun122038_ip = 123; continue _fun122038 }
 115:
                        mike = _closure3_slot27;
                        mike = mike.bind(entity)();
 123:
                        return entity;
                    }
                };
                variable38 = {};
                variable40 = 12;
                variable40 = equality[variable40];
                variable40 = lima.bind(whiskey)(variable40);
                variable40 = variable40.cheapWorkletShallowEqual;
                variable38['cheapWorkletShallowEqual'] = variable40;
                variable38['focused'] = config;
                variable38['id'] = sequence;
                variable38['resetOnLayoutChange'] = vacuum;
                entity['__closure'] = variable38;
                variable38 = 13816224514199.0;
                entity['__workletHash'] = variable38;
                variable38 = _closure1_slot23;
                entity['__initData'] = variable38;
                entity = verify.bind(update)(options, entity);
                verify = offset.useCallback;
                options = function() { // Original name: Ye
                    _fun122039: for(var _fun122039_ip = 0; ; ) switch(_fun122039_ip) {
 0:
                        mike = _closure3_slot23;
                        entity = mike.get;
                        mike = entity.bind(mike)();
                        tango = _closure3_slot24;
                        entity = tango.get;
                        tango = entity.bind(tango)();
                        entity = 0.05;
                        entity = tango + entity;
                        if(!(!(mike < entity))) { _fun122039_ip = 542; continue _fun122039 }
 50:
                        mike = _closure3_slot16;
                        entity = mike.get;
                        mike = entity.bind(mike)();
                        report = _closure3_slot15;
                        entity = report.get;
                        entity = entity.bind(report)();
                        mike = mike * entity;
                        tango = _closure3_slot17;
                        entity = tango.get;
                        tango = entity.bind(tango)();
                        entity = report.get;
                        entity = entity.bind(report)();
                        oscar = tango * entity;
                        golf = -50;
                        if(!(!(mike < golf))) { _fun122039_ip = 538; continue _fun122039 }
 119:
                        report = 50;
                        if(!(!(mike > report))) { _fun122039_ip = 538; continue _fun122039 }
 129:
                        if(!(!(oscar < golf))) { _fun122039_ip = 538; continue _fun122039 }
 136:
                        if(!(!(oscar > report))) { _fun122039_ip = 538; continue _fun122039 }
 143:
                        verify = _closure3_slot5;
                        entity = verify.get;
                        entity = entity.bind(verify)();
                        options = entity.width;
                        tango = _closure3_slot6;
                        entity = tango.get;
                        entity = entity.bind(tango)();
                        yankee = entity.width;
                        offset = _closure3_slot15;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        entity = yankee * entity;
                        entity = options - entity;
                        options = 2;
                        entity = entity / options;
                        mike = mike + entity;
                        entity = verify.get;
                        entity = entity.bind(verify)();
                        yankee = entity.height;
                        entity = tango.get;
                        entity = entity.bind(tango)();
                        romeo = entity.height;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        entity = romeo * entity;
                        entity = yankee - entity;
                        entity = entity / options;
                        oscar = oscar + entity;
                        entity = tango.get;
                        entity = entity.bind(tango)();
                        options = entity.width;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        options = options * entity;
                        entity = tango.get;
                        entity = entity.bind(tango)();
                        tango = entity.height;
                        entity = offset.get;
                        entity = entity.bind(offset)();
                        tango = tango * entity;
                        entity = verify.get;
                        entity = entity.bind(verify)();
                        entity = entity.height;
                        entity = tango >= entity;
                        if(!entity) { _fun122039_ip = 343; continue _fun122039 }
 339:
                        entity = mike >= golf;
 343:
                        if(!entity) { _fun122039_ip = 353; continue _fun122039 }
 346:
                        verify = 25;
                        entity = mike <= verify;
 353:
                        if(!entity) { _fun122039_ip = 389; continue _fun122039 }
 356:
                        offset = mike + options;
                        yankee = _closure3_slot5;
                        verify = yankee.get;
                        verify = verify.bind(yankee)();
                        yankee = verify.width;
                        verify = 25;
                        verify = yankee - verify;
                        entity = offset >= verify;
 389:
                        if(!entity) { _fun122039_ip = 422; continue _fun122039 }
 392:
                        verify = mike + options;
                        offset = _closure3_slot5;
                        mike = offset.get;
                        mike = mike.bind(offset)();
                        mike = mike.width;
                        mike = mike + report;
                        entity = verify <= mike;
 422:
                        if(entity) { _fun122039_ip = 536; continue _fun122039 }
 425:
                        verify = _closure3_slot5;
                        mike = verify.get;
                        mike = mike.bind(verify)();
                        mike = mike.width;
                        mike = options >= mike;
                        if(!mike) { _fun122039_ip = 454; continue _fun122039 }
 450:
                        mike = oscar >= golf;
 454:
                        if(!mike) { _fun122039_ip = 464; continue _fun122039 }
 457:
                        golf = 25;
                        mike = oscar <= golf;
 464:
                        if(!mike) { _fun122039_ip = 500; continue _fun122039 }
 467:
                        options = oscar + tango;
                        verify = _closure3_slot5;
                        golf = verify.get;
                        golf = golf.bind(verify)();
                        verify = golf.height;
                        golf = 25;
                        golf = verify - golf;
                        mike = options >= golf;
 500:
                        if(!mike) { _fun122039_ip = 533; continue _fun122039 }
 503:
                        tango = oscar + tango;
                        oscar = _closure3_slot5;
                        zulu = oscar.get;
                        zulu = zulu.bind(oscar)();
                        zulu = zulu.height;
                        zulu = zulu + report;
                        mike = tango <= zulu;
 533:
                        entity = mike;
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
                entity['scale'] = oscar;
                entity['translateY'] = tango;
                update = 50;
                entity['SNAP_CENTER_THRESHOLD'] = update;
                entity['containerLayout'] = source;
                entity['videoDimensions'] = variable36;
                entity['SNAP_EDGE_OUTER_THRESHOLD'] = update;
                update = 25;
                entity['SNAP_EDGE_INNER_THRESHOLD'] = update;
                options['__closure'] = entity;
                entity = 3902544453390.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot24;
                options['__initData'] = entity;
                entity = new Array(7);
                entity[0] = status;
                entity[1] = oscar;
                entity[2] = report;
                entity[3] = tango;
                entity[4] = source;
                entity[5] = variable36;
                entity[6] = yankee;
                update = verify.bind(offset)(options, entity);
                var _closure3_slot28 = update;
                verify = offset.useCallback;
                options = function() { // Original name: xe
                    _fun122040: for(var _fun122040_ip = 0; ; ) switch(_fun122040_ip) {
 0:
                        zulu = _closure3_slot18;
                        mike = zulu.get;
                        mike = mike.bind(zulu)();
                        oscar = 0;
                        if(!(!(mike > oscar))) { _fun122040_ip = 460; continue _fun122040 }
 25:
                        zulu = _closure3_slot19;
                        mike = zulu.get;
                        mike = mike.bind(zulu)();
                        if(mike) { _fun122040_ip = 425; continue _fun122040 }
 44:
                        zulu = _closure3_slot15;
                        mike = zulu.get;
                        zulu = mike.bind(zulu)();
                        tango = _closure3_slot24;
                        mike = tango.get;
                        mike = mike.bind(tango)();
                        if(!(!(zulu < mike))) { _fun122040_ip = 408; continue _fun122040 }
 77:
                        mike = global;
                        report = mike.Math;
                        tango = report.max;
                        options = _closure3_slot6;
                        zulu = options.get;
                        zulu = zulu.bind(options)();
                        golf = zulu.height;
                        verify = _closure3_slot5;
                        zulu = verify.get;
                        zulu = zulu.bind(verify)();
                        offset = zulu.height;
                        yankee = _closure3_slot15;
                        zulu = yankee.get;
                        zulu = zulu.bind(yankee)();
                        zulu = offset / zulu;
                        zulu = golf - zulu;
                        golf = 2;
                        zulu = zulu / golf;
                        offset = tango.bind(report)(oscar, zulu);
                        report = mike.Math;
                        tango = report.max;
                        zulu = options.get;
                        zulu = zulu.bind(options)();
                        options = zulu.width;
                        zulu = verify.get;
                        zulu = zulu.bind(verify)();
                        verify = zulu.width;
                        zulu = yankee.get;
                        zulu = zulu.bind(yankee)();
                        zulu = verify / zulu;
                        zulu = options - zulu;
                        zulu = zulu / golf;
                        sizing = tango.bind(report)(oscar, zulu);
                        yankee = _closure3_slot16;
                        tango = yankee.set;
                        options = _closure1_slot0;
                        verify = _closure1_slot2;
                        report = 11;
                        zulu = verify[report];
                        oscar = undefined;
                        foxtrot = options.bind(oscar)(zulu);
                        romeo = foxtrot.withSpring;
                        kilo = mike.Math;
                        backup = kilo.min;
                        echo = mike.Math;
                        result = echo.max;
                        output = -sizing;
                        zulu = yankee.get;
                        zulu = zulu.bind(yankee)();
                        zulu = result.bind(echo)(output, zulu);
                        zulu = backup.bind(kilo)(sizing, zulu);
                        golf = _closure1_slot9;
                        zulu = romeo.bind(foxtrot)(zulu, golf);
                        zulu = tango.bind(yankee)(zulu);
                        tango = _closure3_slot17;
                        zulu = tango.set;
                        report = verify[report];
                        oscar = options.bind(oscar)(report);
                        report = oscar.withSpring;
                        verify = mike.Math;
                        options = verify.min;
                        foxtrot = mike.Math;
                        romeo = foxtrot.max;
                        yankee = -offset;
                        mike = tango.get;
                        mike = mike.bind(tango)();
                        mike = romeo.bind(foxtrot)(yankee, mike);
                        mike = options.bind(verify)(offset, mike);
                        mike = report.bind(oscar)(mike, golf);
                        mike = zulu.bind(tango)(mike);
                        _fun122040_ip = 460; continue _fun122040;
 408:
                        tango = _closure3_slot26;
                        zulu = undefined;
                        mike = 'fit';
                        mike = tango.bind(zulu)(mike);
                        _fun122040_ip = 460; continue _fun122040;
 425:
                        tango = _closure3_slot19;
                        zulu = tango.set;
                        mike = false;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure3_slot26;
                        mike = undefined;
                        entity = 'cover';
                        entity = zulu.bind(mike)(entity);
                        entity = undefined;
                        return entity;
 460:
                        entity = undefined;
                        return entity;
                    }
                };
                entity = {};
                entity['numGesturesActive'] = zulu;
                entity['isInSnap'] = mike;
                entity['resetToDefaultSize'] = quebec;
                entity['scale'] = oscar;
                entity['fitScale'] = yankee;
                entity['videoDimensions'] = variable36;
                entity['containerLayout'] = source;
                entity['translateX'] = report;
                papa = equality[papa];
                papa = lima.bind(whiskey)(papa);
                papa = papa.withSpring;
                entity['withSpring'] = papa;
                entity['SCALE_PHYSICS'] = echo;
                entity['translateY'] = tango;
                options['__closure'] = entity;
                entity = 3493652911835.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot25;
                options['__initData'] = entity;
                entity = new Array(9);
                entity[0] = yankee;
                entity[1] = zulu;
                entity[2] = mike;
                entity[3] = oscar;
                entity[4] = variable36;
                entity[5] = source;
                entity[6] = report;
                entity[7] = tango;
                entity[8] = quebec;
                echo = verify.bind(offset)(options, entity);
                var _closure3_slot29 = echo;
                entity = equality[sierra];
                papa = lima.bind(whiskey)(entity);
                verify = papa.useAnimatedReaction;
                options = function() { // Original name: ke
                    _fun122041: for(var _fun122041_ip = 0; ; ) switch(_fun122041_ip) {
 0:
                        mike = _closure3_slot2;
                        entity = mike.get;
                        entity = entity.bind(mike)();
                        mike = null;
                        tango = mike == entity;
                        mike = undefined;
                        if(tango) { _fun122041_ip = 32; continue _fun122041 }
 27:
                        mike = entity.id;
 32:
                        entity = _closure3_slot0;
                        entity = mike === entity;
                        if(!entity) { _fun122041_ip = 78; continue _fun122041 }
 43:
                        tango = _closure3_slot25;
                        mike = tango.get;
                        mike = mike.bind(tango)();
                        mike = !mike;
                        if(mike) { _fun122041_ip = 75; continue _fun122041 }
 62:
                        tango = _closure3_slot21;
                        zulu = tango.get;
                        mike = zulu.bind(tango)();
 75:
                        entity = mike;
 78:
                        return entity;
                    }
                };
                entity = {};
                entity['focused'] = config;
                entity['id'] = sequence;
                entity['isInDefaultZoom'] = sizing;
                entity['isInPanToZoom'] = output;
                options['__closure'] = entity;
                entity = 5209373786986.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot26;
                options['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Me
                    _fun122042: for(var _fun122042_ip = 0; ; ) switch(_fun122042_ip) {
 0:
                        zulu = argFoo;
                        entity = argBar;
                        if(!(zulu !== entity)) { _fun122042_ip = 24; continue _fun122042 }
 10:
                        mike = _closure3_slot8;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
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
                entity = verify.bind(papa)(options, entity);
                entity = equality[sierra];
                papa = lima.bind(whiskey)(entity);
                verify = papa.useAnimatedReaction;
                options = function() { // Original name: Xe
                    _fun122043: for(var _fun122043_ip = 0; ; ) switch(_fun122043_ip) {
 0:
                        zulu = _closure3_slot2;
                        mike = zulu.get;
                        zulu = mike.bind(zulu)();
                        mike = null;
                        tango = mike == zulu;
                        mike = undefined;
                        if(tango) { _fun122043_ip = 32; continue _fun122043 }
 27:
                        mike = zulu.id;
 32:
                        entity = _closure3_slot0;
                        entity = mike === entity;
                        return entity;
                    }
                };
                entity = {};
                entity['focused'] = config;
                entity['id'] = sequence;
                options['__closure'] = entity;
                entity = 619124678280.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot28;
                options['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Ge
                    _fun122044: for(var _fun122044_ip = 0; ; ) switch(_fun122044_ip) {
 0:
                        mike = argFoo;
                        entity = argBar;
                        if(!(mike !== entity)) { _fun122044_ip = 23; continue _fun122044 }
 10:
                        mike = _closure3_slot27;
                        entity = undefined;
                        entity = mike.bind(entity)();
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
                entity = verify.bind(papa)(options, entity);
                entity = equality[sierra];
                papa = lima.bind(whiskey)(entity);
                verify = papa.useAnimatedReaction;
                options = function() { // Original name: $e
                    mike = _closure3_slot3;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = {};
                entity['mode'] = variable37;
                options['__closure'] = entity;
                entity = 7040117988961.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot30;
                options['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Fe
                    _fun122046: for(var _fun122046_ip = 0; ; ) switch(_fun122046_ip) {
 0:
                        mike = argFoo;
                        entity = argBar;
                        if(!(mike !== entity)) { _fun122046_ip = 23; continue _fun122046 }
 10:
                        mike = _closure3_slot27;
                        entity = undefined;
                        entity = mike.bind(entity)();
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
                entity = verify.bind(papa)(options, entity);
                entity = equality[sierra];
                papa = lima.bind(whiskey)(entity);
                verify = papa.useAnimatedReaction;
                options = function() { // Original name: ze
                    mike = _closure3_slot6;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = {};
                entity['videoDimensions'] = variable36;
                options['__closure'] = entity;
                entity = 8748184223523.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot32;
                options['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Ze
                    _fun122048: for(var _fun122048_ip = 0; ; ) switch(_fun122048_ip) {
 0:
                        report = argFoo;
                        oscar = argBar;
                        mike = _closure3_slot22;
                        tango = null;
                        if(!(tango != mike)) { _fun122048_ip = 81; continue _fun122048 }
 19:
                        golf = report.width;
                        options = tango == oscar;
                        mike = undefined;
                        zulu = undefined;
                        if(options) { _fun122048_ip = 40; continue _fun122048 }
 35:
                        zulu = oscar.width;
 40:
                        zulu = golf === zulu;
                        if(!zulu) { _fun122048_ip = 70; continue _fun122048 }
 47:
                        report = report.height;
                        golf = tango == oscar;
                        tango = undefined;
                        if(golf) { _fun122048_ip = 66; continue _fun122048 }
 61:
                        tango = oscar.height;
 66:
                        zulu = report === tango;
 70:
                        if(zulu) { _fun122048_ip = 81; continue _fun122048 }
 73:
                        entity = _closure3_slot27;
                        entity = entity.bind(mike)();
 81:
                        entity = undefined;
                        return entity;
                    }
                };
                variable36 = {};
                variable36['currentSizeThreshold'] = control;
                variable36['resetOnLayoutChange'] = vacuum;
                entity['__closure'] = variable36;
                variable36 = 8464422969486.0;
                entity['__workletHash'] = variable36;
                variable36 = _closure1_slot33;
                entity['__initData'] = variable36;
                entity = verify.bind(papa)(options, entity);
                entity = equality[sierra];
                papa = lima.bind(whiskey)(entity);
                verify = papa.useAnimatedReaction;
                options = function() { // Original name: We
                    mike = _closure3_slot23;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = {};
                entity['coverScale'] = status;
                options['__closure'] = entity;
                entity = 5444376625069.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot34;
                options['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: Je
                    _fun122050: for(var _fun122050_ip = 0; ; ) switch(_fun122050_ip) {
 0:
                        zulu = _closure3_slot22;
                        mike = zulu.get;
                        zulu = mike.bind(zulu)();
                        mike = 'cover';
                        mike = mike === zulu;
                        if(!mike) { _fun122050_ip = 37; continue _fun122050 }
 27:
                        report = argFoo;
                        tango = argBar;
                        mike = report !== tango;
 37:
                        if(!mike) { _fun122050_ip = 51; continue _fun122050 }
 40:
                        mike = _closure3_slot26;
                        entity = undefined;
                        entity = mike.bind(entity)(zulu);
 51:
                        entity = undefined;
                        return entity;
                    }
                };
                status = {};
                status['currentSizeThreshold'] = control;
                status['resetToDefaultSize'] = quebec;
                entity['__closure'] = status;
                status = 10764193588506.0;
                entity['__workletHash'] = status;
                status = _closure1_slot35;
                entity['__initData'] = status;
                entity = verify.bind(papa)(options, entity);
                entity = equality[sierra];
                papa = lima.bind(whiskey)(entity);
                verify = papa.useAnimatedReaction;
                options = function() { // Original name: qe
                    mike = _closure3_slot19;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    return entity;
                };
                entity = {};
                entity['isInSnap'] = mike;
                options['__closure'] = entity;
                entity = 2178206594630.0;
                options['__workletHash'] = entity;
                entity = _closure1_slot36;
                options['__initData'] = entity;
                entity = function(argFoo, argBar) { // Original name: je
                    _fun122052: for(var _fun122052_ip = 0; ; ) switch(_fun122052_ip) {
 0:
                        mike = argFoo;
                        entity = argBar;
                        entity = mike !== entity;
                        if(!entity) { _fun122052_ip = 16; continue _fun122052 }
 13:
                        entity = mike;
 16:
                        if(!entity) { _fun122052_ip = 98; continue _fun122052 }
 19:
                        tango = _closure1_slot0;
                        report = _closure1_slot2;
                        entity = 7;
                        entity = report[entity];
                        zulu = undefined;
                        golf = tango.bind(zulu)(entity);
                        oscar = golf.runOnJS;
                        entity = 13;
                        mike = report[entity];
                        mike = tango.bind(zulu)(mike);
                        mike = mike.triggerHapticFeedback;
                        mike = oscar.bind(golf)(mike);
                        entity = report[entity];
                        entity = tango.bind(zulu)(entity);
                        entity = entity.HapticFeedbackTypes;
                        entity = entity.IMPACT_LIGHT;
                        entity = mike.bind(zulu)(entity);
 98:
                        entity = undefined;
                        return entity;
                    }
                };
                status = {};
                sierra = equality[sierra];
                sierra = lima.bind(whiskey)(sierra);
                sierra = sierra.runOnJS;
                status['runOnJS'] = sierra;
                sierra = 13;
                quebec = equality[sierra];
                quebec = lima.bind(whiskey)(quebec);
                quebec = quebec.triggerHapticFeedback;
                status['triggerHapticFeedback'] = quebec;
                sierra = equality[sierra];
                sierra = lima.bind(whiskey)(sierra);
                sierra = sierra.HapticFeedbackTypes;
                status['HapticFeedbackTypes'] = sierra;
                entity['__closure'] = status;
                status = 11115846398818.0;
                entity['__workletHash'] = status;
                target = _closure1_slot37;
                entity['__initData'] = target;
                entity = verify.bind(papa)(options, entity);
                entity = {};
                verify = offset.useMemo;
                options = new Array(22);
                options[0] = context;
                options[1] = record;
                options[2] = config;
                options[3] = sequence;
                options[4] = oscar;
                options[5] = report;
                options[6] = tango;
                options[7] = vacuum;
                options[8] = zulu;
                options[9] = control;
                options[10] = source;
                options[11] = mike;
                options[12] = update;
                options[13] = echo;
                options[14] = result;
                options[15] = output;
                options[16] = sizing;
                options[17] = kilo;
                options[18] = backup;
                options[19] = foxtrot;
                options[20] = romeo;
                options[21] = yankee;
                golf = function() {
                    output = _closure1_slot0;
                    result = _closure1_slot2;
                    golf = 14;
                    mike = result[golf];
                    sizing = undefined;
                    mike = output.bind(sizing)(mike);
                    report = mike.Gesture;
                    tango = report.Simultaneous;
                    mike = result[golf];
                    mike = output.bind(sizing)(mike);
                    verify = mike.Gesture;
                    oscar = verify.Exclusive;
                    mike = result[golf];
                    mike = output.bind(sizing)(mike);
                    zulu = mike.Gesture;
                    mike = zulu.Tap;
                    offset = mike.bind(zulu)();
                    zulu = offset.numberOfTaps;
                    mike = 2;
                    offset = zulu.bind(offset)(mike);
                    zulu = offset.onTouchesMove;
                    mike = function(argFoo, argBar) { // Original name: A
                        mike = argBar;
                        entity = mike.fail;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    yankee = {};
                    mike['__closure'] = yankee;
                    yankee = 15386663643077.0;
                    mike['__workletHash'] = yankee;
                    yankee = _closure1_slot38;
                    mike['__initData'] = yankee;
                    offset = zulu.bind(offset)(mike);
                    zulu = offset.onStart;
                    mike = function() { // Original name: O
                        _fun122055: for(var _fun122055_ip = 0; ; ) switch(_fun122055_ip) {
 0:
                            zulu = _closure3_slot25;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            if(mike) { _fun122055_ip = 34; continue _fun122055 }
 19:
                            zulu = _closure3_slot27;
                            mike = undefined;
                            mike = zulu.bind(mike)();
                            _fun122055_ip = 163; continue _fun122055;
 34:
                            zulu = _closure3_slot2;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            tango = null;
                            oscar = tango == mike;
                            zulu = undefined;
                            report = undefined;
                            if(oscar) { _fun122055_ip = 65; continue _fun122055 }
 60:
                            report = mike.id;
 65:
                            mike = _closure3_slot0;
                            if(!(report === mike)) { _fun122055_ip = 117; continue _fun122055 }
 73:
                            report = _closure1_slot0;
                            oscar = _closure1_slot2;
                            mike = 7;
                            mike = oscar[mike];
                            oscar = report.bind(zulu)(mike);
                            report = oscar.runOnJS;
                            mike = _closure3_slot11;
                            mike = report.bind(oscar)(mike);
                            mike = mike.bind(zulu)(tango);
                            _fun122055_ip = 163; continue _fun122055;
 117:
                            tango = _closure1_slot0;
                            report = _closure1_slot2;
                            mike = 7;
                            mike = report[mike];
                            report = tango.bind(zulu)(mike);
                            tango = report.runOnJS;
                            mike = _closure3_slot11;
                            mike = tango.bind(report)(mike);
                            entity = _closure3_slot0;
                            entity = mike.bind(zulu)(entity);
 163:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = {};
                    romeo = _closure3_slot25;
                    yankee['isInDefaultZoom'] = romeo;
                    romeo = _closure3_slot27;
                    yankee['resetOnLayoutChange'] = romeo;
                    target = _closure3_slot2;
                    yankee['focused'] = target;
                    papa = _closure3_slot0;
                    yankee['id'] = papa;
                    record = 7;
                    romeo = result[record];
                    romeo = output.bind(sizing)(romeo);
                    romeo = romeo.runOnJS;
                    yankee['runOnJS'] = romeo;
                    romeo = _closure3_slot11;
                    yankee['setFocused'] = romeo;
                    mike['__closure'] = yankee;
                    yankee = 3907231315939.0;
                    mike['__workletHash'] = yankee;
                    yankee = _closure1_slot39;
                    mike['__initData'] = yankee;
                    zulu = zulu.bind(offset)(mike);
                    mike = result[golf];
                    mike = output.bind(sizing)(mike);
                    offset = mike.Gesture;
                    mike = offset.Tap;
                    yankee = mike.bind(offset)();
                    offset = yankee.onTouchesMove;
                    mike = function(argFoo, argBar) { // Original name: V
                        mike = argBar;
                        entity = mike.fail;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    romeo = {};
                    mike['__closure'] = romeo;
                    romeo = 6816022636483.0;
                    mike['__workletHash'] = romeo;
                    romeo = _closure1_slot40;
                    mike['__initData'] = romeo;
                    yankee = offset.bind(yankee)(mike);
                    offset = yankee.onStart;
                    mike = function() { // Original name: P
                        _fun122057: for(var _fun122057_ip = 0; ; ) switch(_fun122057_ip) {
 0:
                            zulu = _closure3_slot13;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            tango = mike.mode;
                            zulu = _closure1_slot7;
                            zulu = zulu.HIDDEN;
                            if(!(tango !== zulu)) { _fun122057_ip = 90; continue _fun122057 }
 38:
                            tango = _closure1_slot0;
                            report = _closure1_slot2;
                            zulu = 7;
                            zulu = report[zulu];
                            report = undefined;
                            oscar = tango.bind(report)(zulu);
                            tango = oscar.runOnJS;
                            zulu = _closure3_slot12;
                            tango = tango.bind(oscar)(zulu);
                            zulu = {};
                            oscar = true;
                            zulu['debounce'] = oscar;
                            zulu = tango.bind(report)(zulu);
                            _fun122057_ip = 140; continue _fun122057;
 90:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 7;
                            mike = zulu[mike];
                            zulu = undefined;
                            tango = tango.bind(zulu)(mike);
                            mike = tango.runOnJS;
                            entity = _closure3_slot14;
                            mike = mike.bind(tango)(entity);
                            entity = {};
                            tango = true;
                            entity['debounce'] = tango;
                            entity = mike.bind(zulu)(entity);
 140:
                            entity = undefined;
                            return entity;
                        }
                    };
                    romeo = {};
                    foxtrot = _closure3_slot13;
                    romeo['controlsSpecs'] = foxtrot;
                    foxtrot = _closure1_slot7;
                    romeo['VoicePanelControlsModes'] = foxtrot;
                    foxtrot = result[record];
                    foxtrot = output.bind(sizing)(foxtrot);
                    foxtrot = foxtrot.runOnJS;
                    romeo['runOnJS'] = foxtrot;
                    foxtrot = _closure3_slot14;
                    romeo['showControls'] = foxtrot;
                    config = _closure3_slot12;
                    romeo['hideControls'] = config;
                    mike['__closure'] = romeo;
                    romeo = 4657945279972.0;
                    mike['__workletHash'] = romeo;
                    romeo = _closure1_slot41;
                    mike['__initData'] = romeo;
                    mike = offset.bind(yankee)(mike);
                    zulu = oscar.bind(verify)(zulu, mike);
                    mike = result[golf];
                    mike = output.bind(sizing)(mike);
                    oscar = mike.Gesture;
                    mike = oscar.Pinch;
                    offset = mike.bind(oscar)();
                    verify = offset.enabled;
                    oscar = _closure3_slot4;
                    mike = !oscar;
                    offset = verify.bind(offset)(mike);
                    verify = offset.onTouchesDown;
                    mike = function(argFoo, argBar) { // Original name: D
                        _fun122058: for(var _fun122058_ip = 0; ; ) switch(_fun122058_ip) {
 0:
                            zulu = argBar;
                            tango = _closure3_slot2;
                            entity = tango.get;
                            report = entity.bind(tango)();
                            entity = null;
                            oscar = entity == report;
                            entity = undefined;
                            tango = undefined;
                            if(oscar) { _fun122058_ip = 37; continue _fun122058 }
 32:
                            tango = report.id;
 37:
                            mike = _closure3_slot0;
                            if(!(tango !== mike)) { _fun122058_ip = 55; continue _fun122058 }
 45:
                            mike = zulu.fail;
                            mike = mike.bind(zulu)();
 55:
                            return entity;
                        }
                    };
                    yankee = {};
                    yankee['focused'] = target;
                    yankee['id'] = papa;
                    mike['__closure'] = yankee;
                    yankee = 8731754699388.0;
                    mike['__workletHash'] = yankee;
                    yankee = _closure1_slot42;
                    mike['__initData'] = yankee;
                    yankee = verify.bind(offset)(mike);
                    verify = yankee.onStart;
                    mike = function() { // Original name: I
                        tango = _closure3_slot18;
                        zulu = tango.set;
                        mike = tango.get;
                        report = mike.bind(tango)();
                        mike = 1;
                        mike = report + mike;
                        mike = zulu.bind(tango)(mike);
                        tango = _closure3_slot21;
                        zulu = tango.set;
                        mike = false;
                        mike = zulu.bind(tango)(mike);
                        zulu = _closure3_slot22;
                        mike = zulu.set;
                        entity = null;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    romeo = {};
                    echo = _closure3_slot18;
                    romeo['numGesturesActive'] = echo;
                    offset = _closure3_slot21;
                    romeo['isInPanToZoom'] = offset;
                    sequence = _closure3_slot22;
                    romeo['currentSizeThreshold'] = sequence;
                    mike['__closure'] = romeo;
                    romeo = 14001958036186.0;
                    mike['__workletHash'] = romeo;
                    romeo = _closure1_slot43;
                    mike['__initData'] = romeo;
                    yankee = verify.bind(yankee)(mike);
                    verify = yankee.onChange;
                    mike = function(argFoo) { // Original name: T
                        tango = argFoo;
                        options = _closure3_slot15;
                        report = options.set;
                        entity = options.get;
                        oscar = entity.bind(options)();
                        offset = _closure1_slot15;
                        entity = options.get;
                        verify = entity.bind(options)();
                        golf = tango.scaleChange;
                        zulu = _closure3_slot24;
                        entity = zulu.get;
                        zulu = entity.bind(zulu)();
                        entity = undefined;
                        zulu = offset.bind(entity)(verify, golf, zulu);
                        zulu = oscar * zulu;
                        zulu = report.bind(options)(zulu);
                        report = tango.focalX;
                        verify = _closure3_slot5;
                        zulu = verify.get;
                        zulu = zulu.bind(verify)();
                        zulu = zulu.width;
                        oscar = 2;
                        zulu = zulu / oscar;
                        golf = report - zulu;
                        report = tango.focalY;
                        zulu = verify.get;
                        zulu = zulu.bind(verify)();
                        zulu = zulu.height;
                        zulu = zulu / oscar;
                        oscar = report - zulu;
                        zulu = tango.scaleChange;
                        report = 1;
                        offset = zulu - report;
                        zulu = options.get;
                        verify = zulu.bind(options)();
                        zulu = -1;
                        golf = zulu * golf;
                        golf = golf * offset;
                        golf = golf / verify;
                        tango = tango.scaleChange;
                        report = tango - report;
                        tango = options.get;
                        tango = tango.bind(options)();
                        zulu = zulu * oscar;
                        zulu = zulu * report;
                        oscar = zulu / tango;
                        report = _closure3_slot16;
                        tango = report.set;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        zulu = zulu + golf;
                        zulu = tango.bind(report)(zulu);
                        report = _closure3_slot17;
                        tango = report.set;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        zulu = zulu + oscar;
                        zulu = tango.bind(report)(zulu);
                        tango = _closure3_slot19;
                        zulu = tango.set;
                        mike = _closure3_slot28;
                        mike = mike.bind(entity)();
                        mike = zulu.bind(tango)(mike);
                        return entity;
                    };
                    romeo = {};
                    backup = _closure3_slot15;
                    romeo['scale'] = backup;
                    vacuum = _closure1_slot15;
                    romeo['getScaleChangeWithOverscroll'] = vacuum;
                    control = _closure3_slot24;
                    romeo['fitScale'] = control;
                    foxtrot = _closure3_slot5;
                    romeo['containerLayout'] = foxtrot;
                    kilo = _closure3_slot16;
                    romeo['translateX'] = kilo;
                    foxtrot = _closure3_slot17;
                    romeo['translateY'] = foxtrot;
                    source = _closure3_slot19;
                    romeo['isInSnap'] = source;
                    update = _closure3_slot28;
                    romeo['isInCoverSnap'] = update;
                    mike['__closure'] = romeo;
                    romeo = 363806676909.0;
                    mike['__workletHash'] = romeo;
                    romeo = _closure1_slot44;
                    mike['__initData'] = romeo;
                    yankee = verify.bind(yankee)(mike);
                    verify = yankee.onEnd;
                    mike = function() { // Original name: v
                        tango = _closure3_slot18;
                        zulu = tango.set;
                        mike = tango.get;
                        report = mike.bind(tango)();
                        mike = 1;
                        mike = report - mike;
                        mike = zulu.bind(tango)(mike);
                        mike = _closure3_slot29;
                        entity = undefined;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    status = {};
                    status['numGesturesActive'] = echo;
                    romeo = _closure3_slot29;
                    status['handleMovementEnd'] = romeo;
                    mike['__closure'] = status;
                    status = 6177804811205.0;
                    mike['__workletHash'] = status;
                    status = _closure1_slot45;
                    mike['__initData'] = status;
                    mike = verify.bind(yankee)(mike);
                    golf = result[golf];
                    golf = output.bind(sizing)(golf);
                    verify = golf.Gesture;
                    golf = verify.Pan;
                    verify = golf.bind(verify)();
                    golf = verify.enabled;
                    oscar = !oscar;
                    verify = golf.bind(verify)(oscar);
                    golf = verify.requireExternalGestureToFail;
                    oscar = _closure3_slot10;
                    verify = golf.bind(verify)(oscar);
                    golf = verify.averageTouches;
                    oscar = true;
                    verify = golf.bind(verify)(oscar);
                    golf = verify.onTouchesDown;
                    oscar = function(argFoo, argBar) { // Original name: f
                        _fun122062: for(var _fun122062_ip = 0; ; ) switch(_fun122062_ip) {
 0:
                            zulu = argBar;
                            tango = _closure3_slot2;
                            entity = tango.get;
                            report = entity.bind(tango)();
                            entity = null;
                            oscar = entity == report;
                            entity = undefined;
                            tango = undefined;
                            if(oscar) { _fun122062_ip = 37; continue _fun122062 }
 32:
                            tango = report.id;
 37:
                            mike = _closure3_slot0;
                            if(!(tango !== mike)) { _fun122062_ip = 55; continue _fun122062 }
 45:
                            mike = zulu.fail;
                            mike = mike.bind(zulu)();
 55:
                            return entity;
                        }
                    };
                    yankee = {};
                    yankee['focused'] = target;
                    yankee['id'] = papa;
                    oscar['__closure'] = yankee;
                    yankee = 14522165508586.0;
                    oscar['__workletHash'] = yankee;
                    yankee = _closure1_slot46;
                    oscar['__initData'] = yankee;
                    verify = golf.bind(verify)(oscar);
                    golf = verify.onBegin;
                    oscar = function() { // Original name: S
                        entity = global;
                        zulu = entity.Date;
                        mike = zulu.now;
                        report = mike.bind(zulu)();
                        zulu = _closure3_slot20;
                        tango = zulu.get;
                        tango = tango.bind(zulu)();
                        oscar = report - tango;
                        report = _closure3_slot21;
                        tango = report.set;
                        mike = 250;
                        mike = oscar <= mike;
                        mike = tango.bind(report)(mike);
                        mike = zulu.set;
                        tango = entity.Date;
                        entity = tango.now;
                        entity = entity.bind(tango)();
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    yankee = {};
                    context = _closure3_slot20;
                    yankee['lastTapTimestamp'] = context;
                    context = 250;
                    yankee['PAN_TO_ZOOM_TAP_TIME_MILLIS'] = context;
                    yankee['isInPanToZoom'] = offset;
                    oscar['__closure'] = yankee;
                    yankee = 174997918171.0;
                    oscar['__workletHash'] = yankee;
                    yankee = _closure1_slot47;
                    oscar['__initData'] = yankee;
                    verify = golf.bind(verify)(oscar);
                    golf = verify.onStart;
                    oscar = function() { // Original name: l
                        _fun122064: for(var _fun122064_ip = 0; ; ) switch(_fun122064_ip) {
 0:
                            zulu = _closure3_slot21;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            if(!mike) { _fun122064_ip = 62; continue _fun122064 }
 19:
                            tango = _closure1_slot0;
                            zulu = _closure1_slot2;
                            mike = 7;
                            mike = zulu[mike];
                            zulu = undefined;
                            report = tango.bind(zulu)(mike);
                            tango = report.runOnJS;
                            mike = _closure3_slot12;
                            mike = tango.bind(report)(mike);
                            mike = mike.bind(zulu)();
 62:
                            tango = _closure3_slot18;
                            zulu = tango.set;
                            mike = tango.get;
                            report = mike.bind(tango)();
                            mike = 1;
                            mike = report + mike;
                            mike = zulu.bind(tango)(mike);
                            zulu = _closure3_slot22;
                            mike = zulu.set;
                            entity = null;
                            entity = mike.bind(zulu)(entity);
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
                    yankee['numGesturesActive'] = echo;
                    yankee['currentSizeThreshold'] = sequence;
                    oscar['__closure'] = yankee;
                    yankee = 468649024049.0;
                    oscar['__workletHash'] = yankee;
                    yankee = _closure1_slot48;
                    oscar['__initData'] = yankee;
                    verify = golf.bind(verify)(oscar);
                    golf = verify.onChange;
                    oscar = function(argFoo) { // Original name: s
                        _fun122065: for(var _fun122065_ip = 0; ; ) switch(_fun122065_ip) {
 0:
                            mike = argFoo;
                            tango = _closure3_slot21;
                            zulu = tango.get;
                            zulu = zulu.bind(tango)();
                            if(zulu) { _fun122065_ip = 120; continue _fun122065 }
 22:
                            report = _closure3_slot16;
                            tango = report.set;
                            zulu = report.get;
                            oscar = zulu.bind(report)();
                            golf = mike.changeX;
                            options = _closure3_slot15;
                            zulu = options.get;
                            zulu = zulu.bind(options)();
                            zulu = golf / zulu;
                            zulu = oscar + zulu;
                            zulu = tango.bind(report)(zulu);
                            report = _closure3_slot17;
                            tango = report.set;
                            zulu = report.get;
                            oscar = zulu.bind(report)();
                            golf = mike.changeY;
                            zulu = options.get;
                            zulu = zulu.bind(options)();
                            zulu = golf / zulu;
                            zulu = oscar + zulu;
                            zulu = tango.bind(report)(zulu);
                            _fun122065_ip = 212; continue _fun122065;
 120:
                            zulu = mike.changeY;
                            mike = 0.0075;
                            offset = zulu * mike;
                            tango = _closure3_slot15;
                            zulu = tango.set;
                            mike = tango.get;
                            report = mike.bind(tango)();
                            verify = _closure1_slot15;
                            mike = tango.get;
                            options = mike.bind(tango)();
                            oscar = _closure3_slot24;
                            mike = oscar.get;
                            golf = mike.bind(oscar)();
                            oscar = undefined;
                            mike = 1;
                            mike = mike + offset;
                            mike = verify.bind(oscar)(options, mike, golf);
                            mike = report * mike;
                            mike = zulu.bind(tango)(mike);
 212:
                            tango = _closure3_slot19;
                            zulu = tango.set;
                            mike = _closure3_slot28;
                            entity = undefined;
                            mike = mike.bind(entity)();
                            mike = zulu.bind(tango)(mike);
                            return entity;
                        }
                    };
                    yankee = {};
                    yankee['isInPanToZoom'] = offset;
                    sequence = 0.0075;
                    yankee['PAN_TO_ZOOM_SCALE_FACTOR'] = sequence;
                    yankee['scale'] = backup;
                    yankee['getScaleChangeWithOverscroll'] = vacuum;
                    yankee['fitScale'] = control;
                    yankee['translateX'] = kilo;
                    yankee['translateY'] = foxtrot;
                    yankee['isInSnap'] = source;
                    yankee['isInCoverSnap'] = update;
                    oscar['__closure'] = yankee;
                    yankee = 495574530547.0;
                    oscar['__workletHash'] = yankee;
                    yankee = _closure1_slot49;
                    oscar['__initData'] = yankee;
                    verify = golf.bind(verify)(oscar);
                    golf = verify.onEnd;
                    oscar = function(argFoo) { // Original name: n
                        zulu = argFoo;
                        report = _closure3_slot18;
                        tango = report.set;
                        entity = report.get;
                        oscar = entity.bind(report)();
                        entity = 1;
                        entity = oscar - entity;
                        entity = tango.bind(report)(entity);
                        romeo = _closure3_slot16;
                        report = romeo.set;
                        golf = _closure1_slot0;
                        verify = _closure1_slot2;
                        oscar = 11;
                        tango = verify[oscar];
                        entity = undefined;
                        backup = golf.bind(entity)(tango);
                        foxtrot = backup.withSpring;
                        tango = romeo.get;
                        kilo = tango.bind(romeo)();
                        tango = zulu.velocityX;
                        offset = 0.05;
                        sizing = tango * offset;
                        yankee = _closure3_slot15;
                        tango = yankee.get;
                        tango = tango.bind(yankee)();
                        tango = sizing / tango;
                        tango = kilo + tango;
                        options = _closure1_slot9;
                        tango = foxtrot.bind(backup)(tango, options);
                        tango = report.bind(romeo)(tango);
                        report = _closure3_slot17;
                        tango = report.set;
                        oscar = verify[oscar];
                        golf = golf.bind(entity)(oscar);
                        oscar = golf.withSpring;
                        verify = report.get;
                        verify = verify.bind(report)();
                        zulu = zulu.velocityY;
                        offset = zulu * offset;
                        zulu = yankee.get;
                        zulu = zulu.bind(yankee)();
                        zulu = offset / zulu;
                        zulu = verify + zulu;
                        zulu = oscar.bind(golf)(zulu, options);
                        zulu = tango.bind(report)(zulu);
                        mike = _closure3_slot29;
                        mike = mike.bind(entity)();
                        return entity;
                    };
                    yankee = {};
                    yankee['numGesturesActive'] = echo;
                    yankee['translateX'] = kilo;
                    kilo = 11;
                    kilo = result[kilo];
                    kilo = output.bind(sizing)(kilo);
                    kilo = kilo.withSpring;
                    yankee['withSpring'] = kilo;
                    kilo = 0.05;
                    yankee['FLING_VELOCITY_SCALING'] = kilo;
                    yankee['scale'] = backup;
                    backup = _closure1_slot9;
                    yankee['SCALE_PHYSICS'] = backup;
                    yankee['translateY'] = foxtrot;
                    yankee['handleMovementEnd'] = romeo;
                    oscar['__closure'] = yankee;
                    yankee = 10044685361387.0;
                    oscar['__workletHash'] = yankee;
                    yankee = _closure1_slot50;
                    oscar['__initData'] = yankee;
                    golf = golf.bind(verify)(oscar);
                    oscar = golf.onFinalize;
                    entity = function() { // Original name: t
                        zulu = _closure3_slot21;
                        mike = zulu.set;
                        entity = false;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    verify = {};
                    verify['isInPanToZoom'] = offset;
                    entity['__closure'] = verify;
                    verify = 2317326014435.0;
                    entity['__workletHash'] = verify;
                    options = _closure1_slot51;
                    entity['__initData'] = options;
                    entity = oscar.bind(golf)(entity);
                    entity = tango.bind(report)(zulu, mike, entity);
                    return entity;
                };
                golf = verify.bind(offset)(golf, options);
                entity['gesture'] = golf;
                entity['scale'] = oscar;
                entity['translateX'] = report;
                entity['translateY'] = tango;
                entity['numGesturesActive'] = zulu;
                entity['isInSnap'] = mike;
                return entity;
            };
            zulu = zulu.bind(tango)(report);
            report = zulu.gesture;
            target = zulu.scale;
            _closure2_slot18 = target;
            papa = zulu.translateX;
            _closure2_slot19 = papa;
            context = zulu.translateY;
            _closure2_slot20 = context;
            record = zulu.isInSnap;
            _closure2_slot21 = record;
            zulu = options[config];
            backup = mike.bind(tango)(zulu);
            oscar = backup.useAnimatedStyle;
            zulu = function() { // Original name: Ze
                _fun122068: for(var _fun122068_ip = 0; ; ) switch(_fun122068_ip) {
 0:
                    mike = _closure2_slot13;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    golf = entity.width;
                    options = entity.height;
                    entity = _closure2_slot14;
                    tango = entity.mode;
                    entity = _closure1_slot8;
                    entity = entity.IN_APP;
                    zulu = golf;
                    mike = options;
                    if(!(tango === entity)) { _fun122068_ip = 193; continue _fun122068 }
 61:
                    if(!(!(golf > options))) { _fun122068_ip = 127; continue _fun122068 }
 65:
                    entity = _closure2_slot14;
                    entity = entity.width;
                    entity = entity / golf;
                    tango = options * entity;
                    oscar = _closure2_slot18;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = tango / entity;
                    tango = _closure2_slot14;
                    oscar = tango.width;
                    verify = _closure2_slot18;
                    tango = verify.get;
                    tango = tango.bind(verify)();
                    tango = oscar / tango;
                    _fun122068_ip = 187; continue _fun122068;
 127:
                    oscar = _closure2_slot14;
                    oscar = oscar.height;
                    oscar = oscar / options;
                    golf = golf * oscar;
                    options = _closure2_slot18;
                    oscar = options.get;
                    oscar = oscar.bind(options)();
                    tango = golf / oscar;
                    oscar = _closure2_slot14;
                    options = oscar.height;
                    verify = _closure2_slot18;
                    oscar = verify.get;
                    oscar = oscar.bind(verify)();
                    entity = options / oscar;
 187:
                    zulu = tango;
                    mike = entity;
 193:
                    entity = {};
                    entity['width'] = zulu;
                    entity['height'] = mike;
                    zulu = _closure2_slot12;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    tango = 1;
                    mike = tango;
                    if(!zulu) { _fun122068_ip = 227; continue _fun122068 }
 225:
                    mike = 0;
 227:
                    entity['opacity'] = mike;
                    zulu = {};
                    oscar = _closure2_slot18;
                    mike = oscar.get;
                    mike = mike.bind(oscar)();
                    zulu['scale'] = mike;
                    mike = new Array(4);
                    mike[0] = zulu;
                    zulu = {};
                    golf = _closure2_slot19;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    zulu['translateX'] = oscar;
                    mike[1] = zulu;
                    zulu = {};
                    golf = _closure2_slot20;
                    oscar = golf.get;
                    oscar = oscar.bind(golf)();
                    zulu['translateY'] = oscar;
                    mike[2] = zulu;
                    zulu = {};
                    report = _closure2_slot4;
                    if(!report) { _fun122068_ip = 322; continue _fun122068 }
 316:
                    tango = -1;
 322:
                    zulu['scaleX'] = tango;
                    mike[3] = zulu;
                    entity['transform'] = mike;
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
            output['translateX'] = papa;
            output['translateY'] = context;
            output['mirror'] = result;
            zulu['__closure'] = output;
            output = 15210768014660.0;
            zulu['__workletHash'] = output;
            output = _closure1_slot57;
            zulu['__initData'] = output;
            result = oscar.bind(backup)(zulu);
            zulu = options[config];
            backup = mike.bind(tango)(zulu);
            oscar = backup.useAnimatedStyle;
            zulu = function() { // Original name: ze
                _fun122069: for(var _fun122069_ip = 0; ; ) switch(_fun122069_ip) {
 0:
                    mike = _closure2_slot21;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    if(entity) { _fun122069_ip = 213; continue _fun122069 }
 22:
                    entity = {'position': 'absolute', 'top': 4294967295, 'left': 4294967295, 'bottom': 4294967295, 'right': 4294967295, 'borderWidth': 2, 'borderRadius': 26, 'overflow': 'hidden', 'borderColor': 'white'};
                    tango = _closure1_slot0;
                    report = _closure1_slot2;
                    zulu = 7;
                    zulu = report[zulu];
                    yankee = undefined;
                    report = tango.bind(yankee)(zulu);
                    tango = report.withDelay;
                    oscar = _closure2_slot8;
                    zulu = oscar.get;
                    zulu = zulu.bind(oscar)();
                    romeo = null;
                    oscar = romeo == zulu;
                    verify = undefined;
                    if(oscar) { _fun122069_ip = 96; continue _fun122069 }
 91:
                    verify = zulu.id;
 96:
                    options = _closure2_slot0;
                    zulu = 0;
                    if(!(verify !== options)) { _fun122069_ip = 112; continue _fun122069 }
 106:
                    zulu = 300;
 112:
                    verify = _closure1_slot0;
                    offset = _closure1_slot2;
                    options = 19;
                    options = offset[options];
                    verify = verify.bind(yankee)(options);
                    options = verify.withTiming;
                    foxtrot = _closure2_slot8;
                    offset = foxtrot.get;
                    offset = offset.bind(foxtrot)();
                    romeo = romeo == offset;
                    yankee = undefined;
                    if(romeo) { _fun122069_ip = 164; continue _fun122069 }
 159:
                    yankee = offset.id;
 164:
                    offset = _closure2_slot0;
                    golf = 0.3;
                    if(!(yankee === offset)) { _fun122069_ip = 184; continue _fun122069 }
 182:
                    golf = 0;
 184:
                    oscar = _closure1_slot12;
                    mike = 'animate-never';
                    mike = options.bind(verify)(golf, oscar, mike);
                    mike = tango.bind(report)(zulu, mike);
                    entity['opacity'] = mike;
                    _fun122069_ip = 227; continue _fun122069;
 213:
                    entity = {'position': 'absolute', 'top': 0, 'left': 0, 'bottom': 0, 'right': 0, 'borderWidth': 25, 'overflow': 'hidden', 'borderColor': 'white', 'opacity': 0.5};
 227:
                    return entity;
                }
            };
            output = {};
            output['isInSnap'] = record;
            record = 25;
            output['SNAP_EDGE_INNER_THRESHOLD'] = record;
            config = options[config];
            config = mike.bind(tango)(config);
            config = config.withDelay;
            output['withDelay'] = config;
            output['focused'] = sequence;
            output['id'] = vacuum;
            vacuum = 19;
            vacuum = options[vacuum];
            vacuum = mike.bind(tango)(vacuum);
            vacuum = vacuum.withTiming;
            output['withTiming'] = vacuum;
            vacuum = _closure1_slot12;
            output['OPACITY_TIMING'] = vacuum;
            zulu['__closure'] = output;
            output = 12201189117918.0;
            zulu['__workletHash'] = output;
            output = _closure1_slot58;
            zulu['__initData'] = output;
            output = oscar.bind(backup)(zulu);
            oscar = golf.useCallback;
            zulu = function(argFoo) { // Original name: Je
                tango = _closure2_slot6;
                mike = _closure2_slot12;
                entity = mike.get;
                zulu = entity.bind(mike)();
                mike = undefined;
                entity = argFoo;
                entity = tango.bind(mike)(entity, zulu);
                return entity;
            };
            entity = {};
            entity['layout'] = yankee;
            entity['disableAnimations'] = verify;
            zulu['__closure'] = entity;
            entity = 7201226784035.0;
            zulu['__workletHash'] = entity;
            entity = _closure1_slot59;
            zulu['__initData'] = entity;
            entity = new Array(2);
            entity[0] = yankee;
            entity[1] = verify;
            yankee = oscar.bind(golf)(zulu, entity);
            zulu = _closure1_slot10;
            entity = 14;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.GestureDetector;
            entity = {};
            entity['gesture'] = report;
            golf = _closure1_slot11;
            verify = 20;
            report = options[verify];
            oscar = romeo.bind(tango)(report);
            report = {};
            vacuum = foxtrot.wrapper;
            backup = new Array(2);
            backup[0] = vacuum;
            backup[1] = control;
            report['style'] = backup;
            report['layout'] = yankee;
            options = options[verify];
            romeo = romeo.bind(tango)(options);
            options = {};
            control = foxtrot.animatedWrapperStyles;
            backup = new Array(2);
            backup[0] = control;
            backup[1] = result;
            options['style'] = backup;
            options['layout'] = yankee;
            result = _closure1_slot13;
            backup = {};
            backup['streamId'] = source;
            backup['onReady'] = update;
            backup['onSize'] = echo;
            echo = foxtrot.video;
            backup['style'] = echo;
            backup['layout'] = yankee;
            backup = zulu.bind(tango)(result, backup);
            options['children'] = backup;
            romeo = zulu.bind(tango)(romeo, options);
            options = new Array(2);
            options[0] = romeo;
            romeo = _closure1_slot10;
            backup = _closure1_slot1;
            kilo = _closure1_slot2;
            if(offset) { _fun122022_ip = 1423; continue _fun122022 }
 1386:
            verify = kilo[verify];
            offset = backup.bind(tango)(verify);
            verify = {};
            verify['style'] = output;
            verify['layout'] = yankee;
            yankee = 'none';
            verify['pointerEvents'] = yankee;
            verify = romeo.bind(tango)(offset, verify);
            _fun122022_ip = 1485; continue _fun122022;
 1423:
            offset = 21;
            offset = kilo[offset];
            yankee = backup.bind(tango)(offset);
            offset = {};
            offset['animate'] = sizing;
            foxtrot = foxtrot.spinner;
            offset['style'] = foxtrot;
            foxtrot = 22;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(tango)(foxtrot);
            foxtrot = foxtrot.unsafe_rawColors;
            foxtrot = foxtrot.BRAND_500;
            offset['color'] = foxtrot;
            verify = romeo.bind(tango)(yankee, offset);
 1485:
            options[1] = verify;
            report['children'] = options;
            report = golf.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    mike = tango.bind(golf)(mike);
    tango = 23;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/voice_panel/native/card/VoicePanelVideoRenderer.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();
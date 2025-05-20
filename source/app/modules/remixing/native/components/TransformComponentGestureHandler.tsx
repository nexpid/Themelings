// app/modules/remixing/native/components/TransformComponentGestureHandler.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    option = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = option;
    var _closure1_slot3 = oscard;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = option.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Dimensions;
    var _closure1_slot6 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useRemixingEditorStore;
    var _closure1_slot8 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx1(){const{shouldTriggerHapticFeedback}=this.__closure;return shouldTriggerHapticFeedback.get();}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx2(current){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldTriggerHapticFeedback}=this.__closure;if(current){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);shouldTriggerHapticFeedback.set(false);}}';
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx3(){const{xAxisOpacity}=this.__closure;return xAxisOpacity.get();}';
    tangon['code'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx4(current){const{runOnJS,setXAxisOpacity}=this.__closure;runOnJS(setXAxisOpacity)(current);}';
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx5(){const{yAxisOpacity}=this.__closure;return yAxisOpacity.get();}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx6(current){const{runOnJS,setYAxisOpacity}=this.__closure;runOnJS(setYAxisOpacity)(current);}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx7(){const{shouldDeleteId}=this.__closure;return shouldDeleteId.get();}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = {};
    golfie = "function TransformComponentGestureHandlerTsx8(current){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,removeComponent,shouldDeleteId}=this.__closure;if(current!==''){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);runOnJS(removeComponent)(current);shouldDeleteId.set('');}}";
    tangon['code'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = {};
    golfie = "function TransformComponentGestureHandlerTsx9(){const{activeId,id,hoveringOverTrash,shouldDeleteId,runOnJS,setXAxisOpacity,setYAxisOpacity}=this.__closure;if(activeId.get()===id&&hoveringOverTrash.get()){shouldDeleteId.set(id);hoveringOverTrash.set(false);}activeId.set('');runOnJS(setXAxisOpacity)(0);runOnJS(setYAxisOpacity)(0);}";
    tangon['code'] = golfie;
    var _closure1_slot19 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx10(event){const{isPanGestureActive,MIN_MOVE_DISTANCE,shouldUpdateStore,yAxisStickEnabled,xAxisStickEnabled,stickToVerticalCenter,stickToHorizontalCenter,dragPointToSnapPointDeltaX,dragPointToSnapPointDeltaY,runOnJS,maybeUpdateStore,maybeDeleteAndClearActive}=this.__closure;isPanGestureActive.set(false);const hasMoved=Math.abs(event.translationX)>MIN_MOVE_DISTANCE||Math.abs(event.translationY)>MIN_MOVE_DISTANCE;shouldUpdateStore.set(shouldUpdateStore.get()||hasMoved);yAxisStickEnabled.set(false);xAxisStickEnabled.set(false);stickToVerticalCenter.set(false);stickToHorizontalCenter.set(false);dragPointToSnapPointDeltaX.set(0);dragPointToSnapPointDeltaY.set(0);runOnJS(maybeUpdateStore)();maybeDeleteAndClearActive();}';
    tangon['code'] = golfie;
    var _closure1_slot20 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx11(e,manager){const{minPointers,maybeDeleteAndClearActive}=this.__closure;if(e.numberOfTouches<minPointers){manager.end();maybeDeleteAndClearActive();}}';
    tangon['code'] = golfie;
    var _closure1_slot21 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx12(e){const{position,offsetX,size,canvasCenterX,stickToHorizontalCenter,STICKY_DISTANCE_THRESHOLD,STICKY_VELOCITY_THRESHOLD,yAxisStickEnabled,dragPointToSnapPointDeltaX,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,offsetY,canvasCenterY,stickToVerticalCenter,xAxisStickEnabled,dragPointToSnapPointDeltaY,yAxisOpacity,xAxisOpacity,trashCanArea,TRASH_TAP_TARGET_SIZE,hoveringOverTrash,shouldTriggerHapticFeedback}=this.__closure;const centerXBeforeDragUpdate=position.x+offsetX.get()+size.width/2;const centerXAfterDragUpdate=position.x+e.translationX+size.width/2;const centeredComponentOffsetX=canvasCenterX-(position.x+size.width/2);if(stickToHorizontalCenter.get()){if(Math.abs(centerXAfterDragUpdate-canvasCenterX)>STICKY_DISTANCE_THRESHOLD||Math.abs(e.velocityX)>STICKY_VELOCITY_THRESHOLD){stickToHorizontalCenter.set(false);yAxisStickEnabled.set(true);offsetX.set(e.translationX-dragPointToSnapPointDeltaX.get());}else{dragPointToSnapPointDeltaX.set(centerXAfterDragUpdate-canvasCenterX);offsetX.set(centeredComponentOffsetX);}}else{const crossedYAxisFromLeftToRight=centerXBeforeDragUpdate<=canvasCenterX&&centerXAfterDragUpdate>canvasCenterX;const crossedYAxisFromRightToLeft=centerXBeforeDragUpdate>=canvasCenterX&&centerXAfterDragUpdate<canvasCenterX;if(yAxisStickEnabled.get()&&Math.abs(e.velocityY)<STICKY_VELOCITY_THRESHOLD&&(crossedYAxisFromLeftToRight||crossedYAxisFromRightToLeft)){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);offsetX.set(centeredComponentOffsetX);dragPointToSnapPointDeltaX.set(centerXAfterDragUpdate-canvasCenterX);stickToHorizontalCenter.set(true);yAxisStickEnabled.set(false);}else{yAxisStickEnabled.set(true);offsetX.set(e.translationX-dragPointToSnapPointDeltaX.get());}}const centerYBeforeDragUpdate=position.y+offsetY.get()+size.height/2;const centerYAfterDragUpdate=position.y+e.translationY+size.height/2;const centeredComponentOffsetY=canvasCenterY-(position.y+size.height/2);if(stickToVerticalCenter.get()){if(Math.abs(centerYAfterDragUpdate-canvasCenterY)>STICKY_DISTANCE_THRESHOLD||Math.abs(e.velocityY)>STICKY_VELOCITY_THRESHOLD){stickToVerticalCenter.set(false);xAxisStickEnabled.set(true);offsetY.set(e.translationY-dragPointToSnapPointDeltaY.get());}else{dragPointToSnapPointDeltaY.set(centerYAfterDragUpdate-canvasCenterY);offsetY.set(centeredComponentOffsetY);}}else{const crossedXAxisFromTopToBottom=centerYBeforeDragUpdate>=canvasCenterY&&centerYAfterDragUpdate<canvasCenterY;const crossedXAxisFromBottomToTop=centerYBeforeDragUpdate<=canvasCenterY&&centerYAfterDragUpdate>canvasCenterY;if(xAxisStickEnabled.get()&&Math.abs(e.velocityY)<STICKY_VELOCITY_THRESHOLD&&(crossedXAxisFromTopToBottom||crossedXAxisFromBottomToTop)){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);offsetY.set(centeredComponentOffsetY);dragPointToSnapPointDeltaY.set(centerYAfterDragUpdate-canvasCenterY);stickToVerticalCenter.set(true);xAxisStickEnabled.set(false);}else{xAxisStickEnabled.set(true);offsetY.set(e.translationY-dragPointToSnapPointDeltaY.get());}}const xDistance=Math.abs(position.x+offsetX.get()+size.width/2-canvasCenterX);yAxisOpacity.set(xDistance<50?1-xDistance/50:0);const yDistance=Math.abs(position.y+offsetY.get()+size.height/2-canvasCenterY);xAxisOpacity.set(yDistance<50?1-yDistance/50:0);if(e.absoluteX>=trashCanArea.get().x&&e.absoluteX<=trashCanArea.get().x+TRASH_TAP_TARGET_SIZE&&e.absoluteY>=trashCanArea.get().y&&e.absoluteY<=trashCanArea.get().y+TRASH_TAP_TARGET_SIZE){if(!hoveringOverTrash.get()){hoveringOverTrash.set(true);shouldTriggerHapticFeedback.set(true);}}else{if(hoveringOverTrash.get()){hoveringOverTrash.set(false);shouldTriggerHapticFeedback.set(true);}}}';
    tangon['code'] = golfie;
    var _closure1_slot22 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx13(){const{isPanGestureActive}=this.__closure;isPanGestureActive.set(true);}';
    tangon['code'] = golfie;
    var _closure1_slot23 = tangon;
    tangon = {};
    golfie = "function TransformComponentGestureHandlerTsx14(e){const{minPointers,activeId,id,runOnJS,maybeBringToFront,onStart}=this.__closure;if(e.numberOfTouches<minPointers)return;if(activeId.get()===''){activeId.set(id);runOnJS(maybeBringToFront)();}if(onStart!=null){runOnJS(onStart)();}}";
    tangon['code'] = golfie;
    var _closure1_slot24 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx15(){const{onTap,runOnJS}=this.__closure;if(onTap!=null){runOnJS(onTap)();}}';
    tangon['code'] = golfie;
    var _closure1_slot25 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx16(event){const{isPinchGestureActive,MIN_ZOOM,shouldUpdateStore,runOnJS,maybeUpdateStore}=this.__closure;isPinchGestureActive.set(false);const hasZoomed=Math.abs(event.scale-1)>MIN_ZOOM;shouldUpdateStore.set(shouldUpdateStore.get()||hasZoomed);runOnJS(maybeUpdateStore)();}';
    tangon['code'] = golfie;
    var _closure1_slot26 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx17(event){const{scale,originScale}=this.__closure;scale.set(originScale*event.scale);}';
    tangon['code'] = golfie;
    var _closure1_slot27 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx18(){const{isPinchGestureActive}=this.__closure;isPinchGestureActive.set(true);}';
    tangon['code'] = golfie;
    var _closure1_slot28 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx19(event){const{isRotateGestureActive,MIN_ROTATION,shouldUpdateStore,runOnJS,maybeUpdateStore}=this.__closure;isRotateGestureActive.set(false);const hasRotation=event.rotation>MIN_ROTATION;shouldUpdateStore.set(shouldUpdateStore.get()||hasRotation);runOnJS(maybeUpdateStore)();}';
    tangon['code'] = golfie;
    var _closure1_slot29 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx20(event){const{rotation,originRotate}=this.__closure;rotation.set(originRotate+event.rotation);}';
    tangon['code'] = golfie;
    var _closure1_slot30 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx21(){const{isRotateGestureActive}=this.__closure;isRotateGestureActive.set(true);}';
    tangon['code'] = golfie;
    var _closure1_slot31 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx22(){const{offsetX,offsetY,scale,rotation}=this.__closure;return[offsetX.get(),offsetY.get(),scale.get(),rotation.get()];}';
    tangon['code'] = golfie;
    var _closure1_slot32 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx23(current,previous){const{cheapWorkletArrayShallowEqual,transformMap,id}=this.__closure;if(cheapWorkletArrayShallowEqual(current,previous!==null&&previous!==void 0?previous:undefined))return;if(transformMap[id]!=null){transformMap[id].set([{translateX:current[0]},{translateY:current[1]},{scale:current[2]},{rotate:current[3]}]);}}';
    tangon['code'] = golfie;
    var _closure1_slot33 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx24(){const{activeId}=this.__closure;return activeId.get();}';
    tangon['code'] = golfie;
    var _closure1_slot34 = tangon;
    tangon = {};
    golfie = "function TransformComponentGestureHandlerTsx25(current){const{gestureDetectorDimensions,getTouchableMinimalRect,dimensionCopy,id}=this.__closure;if(current===''){gestureDetectorDimensions.set(getTouchableMinimalRect(dimensionCopy.get()));}else if(current!==id){gestureDetectorDimensions.set({x:0,y:0,width:0,height:0});}}";
    tangon['code'] = golfie;
    var _closure1_slot35 = tangon;
    tangon = {};
    golfie = 'function TransformComponentGestureHandlerTsx26(){const{activeId,id,screenDimensions,debug,gestureDetectorDimensions,offsetX,offsetY,scale,rotation}=this.__closure;if(activeId.get()===id){return{position:\'absolute\',left:0,top:0,width:screenDimensions.x,height:screenDimensions.y,backgroundColor:debug?\'rgba(100, 200, 300, 0.4)\':\'transparent\',transform:[]};}return{position:\'absolute\',left:gestureDetectorDimensions.get().x,top:gestureDetectorDimensions.get().y,width:gestureDetectorDimensions.get().width,height:gestureDetectorDimensions.get().height,backgroundColor:debug?\'rgba(100, 200, 300, 0.4)\':\'transparent\',transform:[{translateX:offsetX.get()},{translateY:offsetY.get()},{scale:scale.get()},{rotateZ:rotation.get()+"rad"}]};}';
    tangon['code'] = golfie;
    var _closure1_slot36 = tangon;
    tangon = 16;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/components/TransformComponentGestureHandler.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            result = michal.id;
            var _closure2_slot0 = result;
            config = michal.size;
            offset = michal.position;
            output = michal.transform;
            sizing = michal.debug;
            var _closure2_slot1 = sizing;
            variable36 = michal.transformMap;
            var _closure2_slot2 = variable36;
            source = michal.multiTouchPan;
            tangon = undefined;
            if(!(source === tangon)) { _fun00002_ip = 63; continue _fun00001 }
 61:
            source = false;
 63:
            echoed = michal.activeId;
            var _closure2_slot3 = echoed;
            vacuum = michal.hoveringOverTrash;
            sequen = michal.trashCanAreaRef;
            verify = michal.onTap;
            zuuluu = michal.onStart;
            var _closure2_slot4 = tangon;
            var _closure2_slot5 = tangon;
            var _closure2_slot6 = tangon;
            var _closure2_slot7 = tangon;
            var _closure2_slot8 = tangon;
            var _closure2_slot9 = tangon;
            var _closure2_slot10 = tangon;
            var _closure2_slot11 = tangon;
            var _closure2_slot12 = tangon;
            var _closure2_slot13 = tangon;
            var _closure2_slot14 = tangon;
            equals = offset.x;
            _closure2_slot4 = equals;
            whisks = offset.y;
            _closure2_slot5 = whisks;
            status = config.width;
            _closure2_slot6 = status;
            golfie = config.height;
            _closure2_slot7 = golfie;
            michal = _closure1_slot0;
            option = _closure1_slot3;
            report = 8;
            yankee = option[report];
            romeon = michal.bind(tangon)(yankee);
            yankee = romeon.useSharedValue;
            foxtra = 0;
            backup = yankee.bind(romeon)(foxtra);
            _closure2_slot8 = backup;
            yankee = option[report];
            romeon = michal.bind(tangon)(yankee);
            yankee = romeon.useSharedValue;
            foxtra = yankee.bind(romeon)(foxtra);
            _closure2_slot9 = foxtra;
            limora = 14;
            yankee = option[limora];
            romeon = michal.bind(tangon)(yankee);
            yankee = romeon.getScaleFromTransforms2d;
            update = yankee.bind(romeon)(output);
            yankee = option[report];
            romeon = michal.bind(tangon)(yankee);
            yankee = romeon.useSharedValue;
            romeon = yankee.bind(romeon)(update);
            _closure2_slot10 = romeon;
            yankee = option[limora];
            kiloes = michal.bind(tangon)(yankee);
            yankee = kiloes.getRotateFromTransforms2d;
            output = yankee.bind(kiloes)(output);
            yankee = option[report];
            kiloes = michal.bind(tangon)(yankee);
            yankee = kiloes.useSharedValue;
            yankee = yankee.bind(kiloes)(output);
            _closure2_slot11 = yankee;
            kiloes = option[report];
            record = michal.bind(tangon)(kiloes);
            ctrled = record.useSharedValue;
            kiloes = false;
            record = ctrled.bind(record)(kiloes);
            kiloes = option[report];
            cntext = michal.bind(tangon)(kiloes);
            ctrled = cntext.useSharedValue;
            kiloes = 7;
            kiloes = option[kiloes];
            papara = michal.bind(tangon)(kiloes);
            kiloes = papara.rect;
            variable42 = papara;
            variable41 = equals;
            variable40 = whisks;
            variable39 = status;
            variable38 = golfie;
            kiloes = variable42[kiloes](variable41, variable40, variable39, variable38, variable37);
            kiloes = ctrled.bind(cntext)(kiloes);
            _closure2_slot12 = kiloes;
            ctrled = function() {
                offset = _closure1_slot0;
                yankee = _closure1_slot3;
                option = 8;
                michal = yankee[option];
                verify = undefined;
                tangon = offset.bind(verify)(michal);
                zuuluu = tangon.useSharedValue;
                michal = false;
                michal = zuuluu.bind(tangon)(michal);
                var _closure3_slot0 = michal;
                zuuluu = yankee[option];
                report = offset.bind(verify)(zuuluu);
                tangon = report.useAnimatedReaction;
                zuuluu = function() { // Original name: t
                    michal = _closure3_slot0;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    return entity;
                };
                golfie = {};
                golfie['shouldTriggerHapticFeedback'] = michal;
                zuuluu['__closure'] = golfie;
                golfie = 7579777414180.0;
                zuuluu['__workletHash'] = golfie;
                golfie = _closure1_slot11;
                zuuluu['__initData'] = golfie;
                entity = function(argFoo) { // Original name: e
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun00004_ip = 104; continue _fun00003 }
 6:
                        tangon = _closure1_slot0;
                        report = _closure1_slot3;
                        entity = 8;
                        entity = report[entity];
                        zuuluu = undefined;
                        golfie = tangon.bind(zuuluu)(entity);
                        oscard = golfie.runOnJS;
                        entity = 9;
                        michal = report[entity];
                        michal = tangon.bind(zuuluu)(michal);
                        michal = michal.triggerHapticFeedback;
                        michal = oscard.bind(golfie)(michal);
                        entity = report[entity];
                        entity = tangon.bind(zuuluu)(entity);
                        entity = entity.HapticFeedbackTypes;
                        entity = entity.IMPACT_LIGHT;
                        entity = michal.bind(zuuluu)(entity);
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.set;
                        entity = false;
                        entity = michal.bind(zuuluu)(entity);
 104:
                        entity = undefined;
                        return entity;
                    }
                };
                golfie = {};
                option = yankee[option];
                option = offset.bind(verify)(option);
                option = option.runOnJS;
                golfie['runOnJS'] = option;
                option = 9;
                romeon = yankee[option];
                romeon = offset.bind(verify)(romeon);
                romeon = romeon.triggerHapticFeedback;
                golfie['triggerHapticFeedback'] = romeon;
                option = yankee[option];
                option = offset.bind(verify)(option);
                option = option.HapticFeedbackTypes;
                golfie['HapticFeedbackTypes'] = option;
                golfie['shouldTriggerHapticFeedback'] = michal;
                entity['__closure'] = golfie;
                golfie = 14676215034390.0;
                entity['__workletHash'] = golfie;
                oscard = _closure1_slot12;
                entity['__initData'] = oscard;
                entity = tangon.bind(report)(zuuluu, entity);
                entity = {};
                entity['shouldTriggerHapticFeedback'] = michal;
                return entity;
            };
            ctrled = ctrled.bind(tangon)();
            ctrled = ctrled.shouldTriggerHapticFeedback;
            papara = {};
            papara['position'] = offset;
            papara['size'] = config;
            papara['gestureDetectorDimensions'] = kiloes;
            papara['transformMap'] = variable36;
            papara['id'] = result;
            papara['scale'] = romeon;
            papara['rotation'] = yankee;
            papara['offsetX'] = backup;
            papara['offsetY'] = foxtra;
            papara['originScale'] = update;
            papara['originRotate'] = output;
            papara['shouldUpdateStore'] = record;
            cntext = function(argFoo) {
                tangon = argFoo;
                yankee = tangon.position;
                var _closure3_slot0 = yankee;
                backup = tangon.size;
                var _closure3_slot1 = backup;
                zuuluu = tangon.gestureDetectorDimensions;
                var _closure3_slot2 = zuuluu;
                verify = tangon.transformMap;
                var _closure3_slot3 = verify;
                kiloes = tangon.id;
                var _closure3_slot4 = kiloes;
                michal = tangon.scale;
                var _closure3_slot5 = michal;
                report = tangon.rotation;
                var _closure3_slot6 = report;
                foxtra = tangon.offsetX;
                var _closure3_slot7 = foxtra;
                romeon = tangon.offsetY;
                var _closure3_slot8 = romeon;
                option = tangon.originScale;
                var _closure3_slot9 = option;
                oscard = tangon.originRotate;
                var _closure3_slot10 = oscard;
                offset = tangon.shouldUpdateStore;
                var _closure3_slot11 = offset;
                tangon = _closure1_slot5;
                golfie = tangon.useRef;
                golfie = golfie.bind(tangon)(verify);
                var _closure3_slot12 = golfie;
                verify = tangon.useEffect;
                golfie = function() {
                    michal = _closure3_slot12;
                    entity = _closure3_slot3;
                    michal['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                golfie = verify.bind(tangon)(golfie);
                verify = tangon.useEffect;
                golfie = new Array(11);
                golfie[0] = kiloes;
                kiloes = yankee.x;
                golfie[1] = kiloes;
                kiloes = yankee.y;
                golfie[2] = kiloes;
                golfie[3] = backup;
                golfie[4] = foxtra;
                golfie[5] = romeon;
                golfie[6] = yankee;
                golfie[7] = report;
                golfie[8] = michal;
                golfie[9] = offset;
                golfie[10] = zuuluu;
                zuuluu = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = _closure3_slot0;
                        yankee = entity.x;
                        backup = entity.y;
                        entity = _closure3_slot1;
                        foxtra = entity.width;
                        romeon = entity.height;
                        entity = _closure3_slot12;
                        tangon = entity.current;
                        oscard = _closure3_slot2;
                        report = oscard.set;
                        golfie = _closure1_slot0;
                        zuuluu = _closure1_slot3;
                        entity = 7;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        golfie = golfie.bind(entity)(zuuluu);
                        zuuluu = golfie.rect;
                        sizing = golfie;
                        kiloes = yankee;
                        zuuluu = sizing[zuuluu](kiloes, backup, foxtra, romeon, yankee);
                        zuuluu = report.bind(oscard)(zuuluu);
                        report = _closure3_slot11;
                        zuuluu = report.get;
                        zuuluu = zuuluu.bind(report)();
                        if(zuuluu) { _fun00006_ip = 252; continue _fun00005 }
 114:
                        zuuluu = _closure3_slot4;
                        report = tangon[zuuluu];
                        zuuluu = null;
                        if(!(zuuluu != report)) { _fun00006_ip = 222; continue _fun00005 }
 128:
                        zuuluu = _closure3_slot4;
                        report = tangon[zuuluu];
                        tangon = report.set;
                        oscard = {};
                        golfie = 0;
                        oscard['translateX'] = golfie;
                        zuuluu = new Array(4);
                        zuuluu[0] = oscard;
                        oscard = {};
                        oscard['translateY'] = golfie;
                        zuuluu[1] = oscard;
                        oscard = {};
                        option = _closure3_slot5;
                        golfie = option.get;
                        golfie = golfie.bind(option)();
                        oscard['scale'] = golfie;
                        zuuluu[2] = oscard;
                        oscard = {};
                        option = _closure3_slot6;
                        golfie = option.get;
                        golfie = golfie.bind(option)();
                        oscard['rotate'] = golfie;
                        zuuluu[3] = oscard;
                        zuuluu = tangon.bind(report)(zuuluu);
 222:
                        report = _closure3_slot7;
                        zuuluu = report.set;
                        tangon = 0;
                        zuuluu = zuuluu.bind(report)(tangon);
                        zuuluu = _closure3_slot8;
                        michal = zuuluu.set;
                        michal = michal.bind(zuuluu)(tangon);
 252:
                        return entity;
                    }
                };
                zuuluu = verify.bind(tangon)(zuuluu, golfie);
                golfie = tangon.useEffect;
                zuuluu = new Array(2);
                zuuluu[0] = option;
                zuuluu[1] = michal;
                michal = function() {
                    zuuluu = _closure3_slot5;
                    michal = zuuluu.set;
                    entity = _closure3_slot9;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                michal = golfie.bind(tangon)(michal, zuuluu);
                zuuluu = tangon.useEffect;
                michal = new Array(2);
                michal[0] = oscard;
                michal[1] = report;
                entity = function() {
                    zuuluu = _closure3_slot6;
                    michal = zuuluu.set;
                    entity = _closure3_slot10;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(entity, michal);
                entity = undefined;
                return entity;
            };
            cntext = cntext.bind(tangon)(papara);
            cntext = option[report];
            sierra = michal.bind(tangon)(cntext);
            target = sierra.useAnimatedReaction;
            papara = function() { // Original name: Q
                zuuluu = _closure2_slot8;
                entity = zuuluu.get;
                zuuluu = entity.bind(zuuluu)();
                entity = new Array(4);
                entity[0] = zuuluu;
                tangon = _closure2_slot9;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity[1] = zuuluu;
                tangon = _closure2_slot10;
                zuuluu = tangon.get;
                zuuluu = zuuluu.bind(tangon)();
                entity[2] = zuuluu;
                zuuluu = _closure2_slot11;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity[3] = michal;
                return entity;
            };
            cntext = {};
            cntext['offsetX'] = backup;
            cntext['offsetY'] = foxtra;
            cntext['scale'] = romeon;
            cntext['rotation'] = yankee;
            papara['__closure'] = cntext;
            cntext = 9069472429642.0;
            papara['__workletHash'] = cntext;
            cntext = _closure1_slot32;
            papara['__initData'] = cntext;
            cntext = function(argFoo, argBar) { // Original name: $
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    golfie = argFoo;
                    oscard = argBar;
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot3;
                    entity = 15;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    zuuluu = report.cheapWorkletArrayShallowEqual;
                    tangon = null;
                    option = tangon != oscard;
                    michal = undefined;
                    if(!option) { _fun00008_ip = 51; continue _fun00007 }
 48:
                    michal = oscard;
 51:
                    michal = zuuluu.bind(report)(golfie, michal);
                    if(michal) { _fun00008_ip = 176; continue _fun00007 }
 60:
                    report = _closure2_slot2;
                    zuuluu = _closure2_slot0;
                    zuuluu = report[zuuluu];
                    if(!(tangon != zuuluu)) { _fun00008_ip = 176; continue _fun00007 }
 79:
                    zuuluu = _closure2_slot2;
                    michal = _closure2_slot0;
                    tangon = zuuluu[michal];
                    zuuluu = tangon.set;
                    report = {};
                    michal = 0;
                    michal = golfie[michal];
                    report['translateX'] = michal;
                    michal = new Array(4);
                    michal[0] = report;
                    report = {};
                    oscard = 1;
                    oscard = golfie[oscard];
                    report['translateY'] = oscard;
                    michal[1] = report;
                    report = {};
                    oscard = 2;
                    oscard = golfie[oscard];
                    report['scale'] = oscard;
                    michal[2] = report;
                    report = {};
                    oscard = 3;
                    oscard = golfie[oscard];
                    report['rotate'] = oscard;
                    michal[3] = report;
                    michal = zuuluu.bind(tangon)(michal);
 176:
                    return entity;
                }
            };
            quebec = {};
            variable37 = 15;
            variable37 = option[variable37];
            variable37 = michal.bind(tangon)(variable37);
            variable37 = variable37.cheapWorkletArrayShallowEqual;
            quebec['cheapWorkletArrayShallowEqual'] = variable37;
            quebec['transformMap'] = variable36;
            quebec['id'] = result;
            cntext['__closure'] = quebec;
            quebec = 9524238745484.0;
            cntext['__workletHash'] = quebec;
            quebec = _closure1_slot33;
            cntext['__initData'] = quebec;
            cntext = target.bind(sierra)(papara, cntext);
            cntext = option[report];
            target = michal.bind(tangon)(cntext);
            papara = target.useSharedValue;
            cntext = {};
            cntext['x'] = equals;
            cntext['y'] = whisks;
            cntext['width'] = status;
            cntext['height'] = golfie;
            sierra = papara.bind(target)(cntext);
            _closure2_slot13 = sierra;
            target = _closure1_slot5;
            papara = target.useEffect;
            cntext = new Array(5);
            cntext[0] = equals;
            cntext[1] = whisks;
            cntext[2] = status;
            cntext[3] = golfie;
            cntext[4] = sierra;
            golfie = function() {
                zuuluu = _closure2_slot13;
                michal = zuuluu.set;
                entity = {};
                report = _closure2_slot4;
                entity['x'] = report;
                report = _closure2_slot5;
                entity['y'] = report;
                report = _closure2_slot6;
                entity['width'] = report;
                tangon = _closure2_slot7;
                entity['height'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            };
            golfie = papara.bind(target)(golfie, cntext);
            golfie = option[report];
            target = michal.bind(tangon)(golfie);
            papara = target.useAnimatedReaction;
            cntext = function() { // Original name: pe
                michal = _closure2_slot3;
                entity = michal.get;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie = {};
            golfie['activeId'] = echoed;
            cntext['__closure'] = golfie;
            golfie = 15236705266931.0;
            cntext['__workletHash'] = golfie;
            golfie = _closure1_slot34;
            cntext['__initData'] = golfie;
            golfie = function(argFoo) { // Original name: fe
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = argFoo;
                    entity = '';
                    if(!(entity !== zuuluu)) { _fun00010_ip = 52; continue _fun00009 }
 11:
                    michal = _closure2_slot0;
                    if(!(zuuluu !== michal)) { _fun00010_ip = 118; continue _fun00009 }
 22:
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.set;
                    entity = {'x': 0, 'y': 0, 'width': 0, 'height': 0};
                    entity = michal.bind(zuuluu)(entity);
                    _fun00010_ip = 118; continue _fun00009;
 52:
                    zuuluu = _closure2_slot12;
                    michal = zuuluu.set;
                    oscard = _closure1_slot0;
                    report = _closure1_slot3;
                    tangon = 14;
                    report = report[tangon];
                    tangon = undefined;
                    report = oscard.bind(tangon)(report);
                    tangon = report.getTouchableMinimalRect;
                    oscard = _closure2_slot13;
                    entity = oscard.get;
                    entity = entity.bind(oscard)();
                    entity = tangon.bind(report)(entity);
                    entity = michal.bind(zuuluu)(entity);
 118:
                    entity = undefined;
                    return entity;
                }
            };
            status = {};
            status['gestureDetectorDimensions'] = kiloes;
            limora = option[limora];
            limora = michal.bind(tangon)(limora);
            limora = limora.getTouchableMinimalRect;
            status['getTouchableMinimalRect'] = limora;
            status['dimensionCopy'] = sierra;
            status['id'] = result;
            golfie['__closure'] = status;
            status = 10589703698344.0;
            golfie['__workletHash'] = status;
            status = _closure1_slot35;
            golfie['__initData'] = status;
            golfie = papara.bind(target)(cntext, golfie);
            golfie = {};
            golfie['shouldUpdateStore'] = record;
            golfie['activeId'] = echoed;
            golfie['id'] = result;
            golfie['size'] = config;
            golfie['offsetX'] = backup;
            golfie['offsetY'] = foxtra;
            golfie['trashCanAreaRef'] = sequen;
            golfie['hoveringOverTrash'] = vacuum;
            golfie['shouldTriggerHapticFeedback'] = ctrled;
            golfie['multiTouchPan'] = source;
            golfie['scale'] = romeon;
            golfie['originScale'] = update;
            golfie['rotation'] = yankee;
            golfie['originRotate'] = output;
            golfie['position'] = offset;
            golfie['onTap'] = verify;
            golfie['onStart'] = zuuluu;
            zuuluu = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    tangon = argFoo;
                    michal = tangon.shouldUpdateStore;
                    var _closure3_slot0 = michal;
                    sequen = tangon.activeId;
                    var _closure3_slot1 = sequen;
                    output = tangon.id;
                    var _closure3_slot2 = output;
                    zuuluu = tangon.size;
                    var _closure3_slot3 = zuuluu;
                    status = tangon.offsetX;
                    var _closure3_slot4 = status;
                    yankee = tangon.offsetY;
                    var _closure3_slot5 = yankee;
                    vacuum = tangon.hoveringOverTrash;
                    var _closure3_slot6 = vacuum;
                    zuuluu = tangon.shouldTriggerHapticFeedback;
                    var _closure3_slot7 = zuuluu;
                    option = tangon.multiTouchPan;
                    zuuluu = tangon.scale;
                    var _closure3_slot8 = zuuluu;
                    backup = tangon.originScale;
                    var _closure3_slot9 = backup;
                    verify = tangon.rotation;
                    var _closure3_slot10 = verify;
                    romeon = tangon.originRotate;
                    var _closure3_slot11 = romeon;
                    oscard = tangon.trashCanAreaRef;
                    var _closure3_slot12 = oscard;
                    limora = tangon.position;
                    var _closure3_slot13 = limora;
                    report = tangon.onTap;
                    var _closure3_slot14 = report;
                    tangon = tangon.onStart;
                    var _closure3_slot15 = tangon;
                    cntext = undefined;
                    var _closure3_slot36 = cntext;
                    var _closure3_slot37 = cntext;
                    var _closure3_slot38 = cntext;
                    var _closure3_slot39 = cntext;
                    var _closure3_slot40 = cntext;
                    record = _closure1_slot0;
                    papara = _closure1_slot3;
                    config = 8;
                    golfie = papara[config];
                    foxtra = record.bind(cntext)(golfie);
                    offset = foxtra.useSharedValue;
                    golfie = '';
                    echoed = offset.bind(foxtra)(golfie);
                    var _closure3_slot16 = echoed;
                    golfie = papara[config];
                    foxtra = record.bind(cntext)(golfie);
                    offset = foxtra.useSharedValue;
                    sizing = 0;
                    golfie = {'x': 0, 'y': 0};
                    target = offset.bind(foxtra)(golfie);
                    var _closure3_slot17 = target;
                    golfie = papara[config];
                    offset = record.bind(cntext)(golfie);
                    golfie = offset.useSharedValue;
                    result = false;
                    sierra = golfie.bind(offset)(result);
                    var _closure3_slot18 = sierra;
                    golfie = papara[config];
                    offset = record.bind(cntext)(golfie);
                    golfie = offset.useSharedValue;
                    foxtra = golfie.bind(offset)(result);
                    var _closure3_slot19 = foxtra;
                    golfie = papara[config];
                    offset = record.bind(cntext)(golfie);
                    golfie = offset.useSharedValue;
                    offset = golfie.bind(offset)(result);
                    var _closure3_slot20 = offset;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    golfie = golfie.bind(kiloes)(sizing);
                    var _closure3_slot21 = golfie;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    golfie = golfie.bind(kiloes)(sizing);
                    var _closure3_slot22 = golfie;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    golfie = golfie.bind(kiloes)(result);
                    var _closure3_slot23 = golfie;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    golfie = golfie.bind(kiloes)(result);
                    var _closure3_slot24 = golfie;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    quebec = golfie.bind(kiloes)(sizing);
                    var _closure3_slot25 = quebec;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    equals = golfie.bind(kiloes)(sizing);
                    var _closure3_slot26 = equals;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    golfie = golfie.bind(kiloes)(result);
                    var _closure3_slot27 = golfie;
                    golfie = papara[config];
                    kiloes = record.bind(cntext)(golfie);
                    golfie = kiloes.useSharedValue;
                    golfie = golfie.bind(kiloes)(result);
                    var _closure3_slot28 = golfie;
                    result = _closure1_slot8;
                    golfie = 10;
                    golfie = papara[golfie];
                    golfie = record.bind(cntext)(golfie);
                    kiloes = golfie.shallow;
                    golfie = function(argFoo) {
                        michal = argFoo;
                        zuuluu = michal.setXAxisOpacity;
                        entity = new Array(2);
                        entity[0] = zuuluu;
                        michal = michal.setYAxisOpacity;
                        entity[1] = michal;
                        return entity;
                    };
                    result = result.bind(cntext)(golfie, kiloes);
                    kiloes = _closure1_slot4;
                    golfie = 2;
                    kiloes = kiloes.bind(cntext)(result, golfie);
                    source = kiloes[sizing];
                    var _closure3_slot29 = source;
                    sizing = 1;
                    ctrled = kiloes[sizing];
                    var _closure3_slot30 = ctrled;
                    kiloes = papara[config];
                    whisks = record.bind(cntext)(kiloes);
                    update = whisks.useAnimatedReaction;
                    result = function() { // Original name: W
                        michal = _closure3_slot25;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    kiloes = {};
                    kiloes['xAxisOpacity'] = quebec;
                    result['__closure'] = kiloes;
                    kiloes = 14228702998022.0;
                    result['__workletHash'] = kiloes;
                    kiloes = _closure1_slot13;
                    result['__initData'] = kiloes;
                    kiloes = function(argFoo) { // Original name: K
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.runOnJS;
                        michal = _closure3_slot29;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    quebec = {};
                    variable36 = papara[config];
                    variable36 = record.bind(cntext)(variable36);
                    variable36 = variable36.runOnJS;
                    quebec['runOnJS'] = variable36;
                    quebec['setXAxisOpacity'] = source;
                    kiloes['__closure'] = quebec;
                    quebec = 4709153678654.0;
                    kiloes['__workletHash'] = quebec;
                    quebec = _closure1_slot14;
                    kiloes['__initData'] = quebec;
                    kiloes = update.bind(whisks)(result, kiloes);
                    kiloes = papara[config];
                    whisks = record.bind(cntext)(kiloes);
                    update = whisks.useAnimatedReaction;
                    result = function() { // Original name: j
                        michal = _closure3_slot26;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    kiloes = {};
                    kiloes['yAxisOpacity'] = equals;
                    result['__closure'] = kiloes;
                    kiloes = 13221376372096.0;
                    result['__workletHash'] = kiloes;
                    kiloes = _closure1_slot15;
                    result['__initData'] = kiloes;
                    kiloes = function(argFoo) { // Original name: q
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 8;
                        michal = michal[entity];
                        entity = undefined;
                        tangon = zuuluu.bind(entity)(michal);
                        zuuluu = tangon.runOnJS;
                        michal = _closure3_slot30;
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = argFoo;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    equals = {};
                    quebec = papara[config];
                    quebec = record.bind(cntext)(quebec);
                    quebec = quebec.runOnJS;
                    equals['runOnJS'] = quebec;
                    equals['setYAxisOpacity'] = ctrled;
                    kiloes['__closure'] = equals;
                    equals = 1066618534652.0;
                    kiloes['__workletHash'] = equals;
                    equals = _closure1_slot16;
                    kiloes['__initData'] = equals;
                    kiloes = update.bind(whisks)(result, kiloes);
                    update = _closure1_slot6;
                    result = update.get;
                    kiloes = 'screen';
                    kiloes = result.bind(update)(kiloes);
                    result = kiloes.width;
                    kiloes = kiloes.height;
                    result = result / golfie;
                    var _closure3_slot31 = result;
                    kiloes = kiloes / golfie;
                    var _closure3_slot32 = kiloes;
                    update = _closure1_slot5;
                    result = update.useCallback;
                    kiloes = new Array(11);
                    kiloes[0] = output;
                    whisks = limora.x;
                    kiloes[1] = whisks;
                    limora = limora.y;
                    kiloes[2] = limora;
                    kiloes[3] = sierra;
                    kiloes[4] = foxtra;
                    kiloes[5] = offset;
                    kiloes[6] = status;
                    kiloes[7] = yankee;
                    kiloes[8] = verify;
                    kiloes[9] = zuuluu;
                    kiloes[10] = michal;
                    yankee = function() {
                        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            if(!michal) { _fun00014_ip = 281; continue _fun00013 }
 22:
                            zuuluu = _closure3_slot18;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            if(michal) { _fun00014_ip = 281; continue _fun00013 }
 41:
                            zuuluu = _closure3_slot19;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            if(michal) { _fun00014_ip = 281; continue _fun00013 }
 60:
                            zuuluu = _closure3_slot20;
                            michal = zuuluu.get;
                            michal = michal.bind(zuuluu)();
                            if(michal) { _fun00014_ip = 281; continue _fun00013 }
 79:
                            oscard = {};
                            michal = {};
                            zuuluu = _closure3_slot13;
                            golfie = zuuluu.x;
                            report = _closure3_slot4;
                            tangon = report.get;
                            tangon = tangon.bind(report)();
                            tangon = golfie + tangon;
                            michal['x'] = tangon;
                            golfie = zuuluu.y;
                            tangon = _closure3_slot5;
                            zuuluu = tangon.get;
                            zuuluu = zuuluu.bind(tangon)();
                            zuuluu = golfie + zuuluu;
                            michal['y'] = zuuluu;
                            oscard['position'] = michal;
                            zuuluu = {};
                            golfie = _closure3_slot10;
                            michal = golfie.get;
                            michal = michal.bind(golfie)();
                            zuuluu['rotate'] = michal;
                            michal = new Array(2);
                            michal[0] = zuuluu;
                            zuuluu = {};
                            option = _closure3_slot8;
                            golfie = option.get;
                            golfie = golfie.bind(option)();
                            zuuluu['scale'] = golfie;
                            michal[1] = zuuluu;
                            oscard['transform'] = michal;
                            michal = report.set;
                            zuuluu = 0;
                            michal = michal.bind(report)(zuuluu);
                            michal = tangon.set;
                            michal = michal.bind(tangon)(zuuluu);
                            tangon = _closure1_slot2;
                            zuuluu = _closure1_slot3;
                            michal = 11;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            report = tangon.bind(michal)(zuuluu);
                            tangon = report.updateComponent;
                            zuuluu = _closure3_slot2;
                            michal = true;
                            michal = tangon.bind(report)(zuuluu, oscard, michal);
                            zuuluu = _closure3_slot0;
                            michal = zuuluu.set;
                            entity = false;
                            entity = michal.bind(zuuluu)(entity);
 281:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = result.bind(update)(yankee, kiloes);
                    var _closure3_slot33 = yankee;
                    result = update.useEffect;
                    kiloes = new Array(2);
                    kiloes[0] = target;
                    kiloes[1] = oscard;
                    oscard = function() {
                        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                            entity = _closure3_slot12;
                            zuuluu = entity.current;
                            entity = null;
                            if(!(entity != zuuluu)) { _fun00016_ip = 36; continue _fun00015 }
 18:
                            michal = zuuluu.measureInWindow;
                            entity = function(argFoo, argBar) {
                                zuuluu = _closure3_slot17;
                                michal = zuuluu.set;
                                entity = {};
                                tangon = argFoo;
                                entity['x'] = tangon;
                                tangon = argBar;
                                entity['y'] = tangon;
                                entity = michal.bind(zuuluu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
 36:
                            entity = undefined;
                            return entity;
                        }
                    };
                    oscard = result.bind(update)(oscard, kiloes);
                    oscard = papara[config];
                    target = record.bind(cntext)(oscard);
                    result = target.useAnimatedReaction;
                    kiloes = function() { // Original name: Te
                        michal = _closure3_slot16;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        return entity;
                    };
                    oscard = {};
                    oscard['shouldDeleteId'] = echoed;
                    kiloes['__closure'] = oscard;
                    oscard = 11240701250690.0;
                    kiloes['__workletHash'] = oscard;
                    oscard = _closure1_slot17;
                    kiloes['__initData'] = oscard;
                    oscard = function(argFoo) { // Original name: pe
                        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                            tangon = argFoo;
                            zuuluu = '';
                            if(!(zuuluu !== tangon)) { _fun00018_ip = 152; continue _fun00017 }
 14:
                            golfie = _closure1_slot0;
                            option = _closure1_slot3;
                            entity = 8;
                            report = option[entity];
                            michal = undefined;
                            offset = golfie.bind(michal)(report);
                            verify = offset.runOnJS;
                            report = 9;
                            oscard = option[report];
                            oscard = golfie.bind(michal)(oscard);
                            oscard = oscard.triggerHapticFeedback;
                            oscard = verify.bind(offset)(oscard);
                            report = option[report];
                            report = golfie.bind(michal)(report);
                            report = report.HapticFeedbackTypes;
                            report = report.IMPACT_LIGHT;
                            report = oscard.bind(michal)(report);
                            entity = option[entity];
                            oscard = golfie.bind(michal)(entity);
                            report = oscard.runOnJS;
                            entity = 11;
                            entity = option[entity];
                            entity = golfie.bind(michal)(entity);
                            entity = entity.removeComponent;
                            entity = report.bind(oscard)(entity);
                            entity = entity.bind(michal)(tangon);
                            michal = _closure3_slot16;
                            entity = michal.set;
                            entity = entity.bind(michal)(zuuluu);
 152:
                            entity = undefined;
                            return entity;
                        }
                    };
                    status = {};
                    sierra = papara[config];
                    sierra = record.bind(cntext)(sierra);
                    sierra = sierra.runOnJS;
                    status['runOnJS'] = sierra;
                    sierra = 9;
                    limora = papara[sierra];
                    limora = record.bind(cntext)(limora);
                    limora = limora.triggerHapticFeedback;
                    status['triggerHapticFeedback'] = limora;
                    sierra = papara[sierra];
                    sierra = record.bind(cntext)(sierra);
                    sierra = sierra.HapticFeedbackTypes;
                    status['HapticFeedbackTypes'] = sierra;
                    sierra = 11;
                    sierra = papara[sierra];
                    sierra = record.bind(cntext)(sierra);
                    sierra = sierra.removeComponent;
                    status['removeComponent'] = sierra;
                    status['shouldDeleteId'] = echoed;
                    oscard['__closure'] = status;
                    status = 3179081026543.0;
                    oscard['__workletHash'] = status;
                    status = _closure1_slot18;
                    oscard['__initData'] = status;
                    oscard = result.bind(target)(kiloes, oscard);
                    result = update.useCallback;
                    kiloes = function() { // Original name: Oe
                        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                            zuuluu = _closure3_slot1;
                            entity = zuuluu.get;
                            zuuluu = entity.bind(zuuluu)();
                            entity = _closure3_slot2;
                            entity = zuuluu === entity;
                            if(!entity) { _fun00020_ip = 40; continue _fun00019 }
 27:
                            tangon = _closure3_slot6;
                            zuuluu = tangon.get;
                            entity = zuuluu.bind(tangon)();
 40:
                            if(!entity) { _fun00020_ip = 77; continue _fun00019 }
 43:
                            tangon = _closure3_slot16;
                            zuuluu = tangon.set;
                            entity = _closure3_slot2;
                            entity = zuuluu.bind(tangon)(entity);
                            tangon = _closure3_slot6;
                            zuuluu = tangon.set;
                            entity = false;
                            entity = zuuluu.bind(tangon)(entity);
 77:
                            tangon = _closure3_slot1;
                            zuuluu = tangon.set;
                            entity = '';
                            entity = zuuluu.bind(tangon)(entity);
                            report = _closure1_slot0;
                            oscard = _closure1_slot3;
                            tangon = 8;
                            zuuluu = oscard[tangon];
                            entity = undefined;
                            option = report.bind(entity)(zuuluu);
                            golfie = option.runOnJS;
                            zuuluu = _closure3_slot29;
                            golfie = golfie.bind(option)(zuuluu);
                            zuuluu = 0;
                            golfie = golfie.bind(entity)(zuuluu);
                            tangon = oscard[tangon];
                            report = report.bind(entity)(tangon);
                            tangon = report.runOnJS;
                            michal = _closure3_slot30;
                            michal = tangon.bind(report)(michal);
                            michal = michal.bind(entity)(zuuluu);
                            return entity;
                        }
                    };
                    oscard = {};
                    oscard['activeId'] = sequen;
                    oscard['id'] = output;
                    oscard['hoveringOverTrash'] = vacuum;
                    oscard['shouldDeleteId'] = echoed;
                    config = papara[config];
                    config = record.bind(cntext)(config);
                    config = config.runOnJS;
                    oscard['runOnJS'] = config;
                    oscard['setXAxisOpacity'] = source;
                    oscard['setYAxisOpacity'] = ctrled;
                    kiloes['__closure'] = oscard;
                    oscard = 8122530590483.0;
                    kiloes['__workletHash'] = oscard;
                    oscard = _closure1_slot19;
                    kiloes['__initData'] = oscard;
                    oscard = new Array(6);
                    oscard[0] = output;
                    oscard[1] = sequen;
                    oscard[2] = vacuum;
                    oscard[3] = ctrled;
                    oscard[4] = source;
                    oscard[5] = echoed;
                    oscard = result.bind(update)(kiloes, oscard);
                    var _closure3_slot34 = oscard;
                    echoed = update.useCallback;
                    result = new Array(1);
                    result[0] = output;
                    kiloes = function() {
                        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                            tangon = _closure1_slot9;
                            zuuluu = tangon.getComponentById;
                            entity = _closure3_slot2;
                            entity = zuuluu.bind(tangon)(entity);
                            tangon = entity.type;
                            oscard = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            entity = 12;
                            zuuluu = zuuluu[entity];
                            entity = undefined;
                            zuuluu = oscard.bind(entity)(zuuluu);
                            zuuluu = zuuluu.RemixElement;
                            zuuluu = zuuluu.BACKDROP;
                            if(!(tangon !== zuuluu)) { _fun00022_ip = 111; continue _fun00021 }
 70:
                            zuuluu = _closure1_slot2;
                            tangon = _closure1_slot3;
                            michal = 11;
                            michal = tangon[michal];
                            tangon = zuuluu.bind(entity)(michal);
                            zuuluu = tangon.bringToFront;
                            michal = {};
                            report = _closure3_slot2;
                            michal['id'] = report;
                            michal = zuuluu.bind(tangon)(michal);
 111:
                            return entity;
                        }
                    };
                    kiloes = echoed.bind(update)(kiloes, result);
                    var _closure3_slot35 = kiloes;
                    if(!option) { _fun00012_ip = 1350; continue _fun00011 }
 1347:
                    sizing = golfie;
 1350:
                    _closure3_slot36 = sizing;
                    tangon = _closure1_slot5;
                    option = tangon.useMemo;
                    golfie = new Array(5);
                    golfie[0] = output;
                    golfie[1] = sizing;
                    golfie[2] = kiloes;
                    golfie[3] = oscard;
                    golfie[4] = yankee;
                    oscard = function() {
                        offset = _closure1_slot0;
                        yankee = _closure1_slot3;
                        michal = 13;
                        michal = yankee[michal];
                        verify = undefined;
                        michal = offset.bind(verify)(michal);
                        zuuluu = michal.Gesture;
                        michal = zuuluu.Pan;
                        report = michal.bind(zuuluu)();
                        zuuluu = report.minPointers;
                        michal = _closure3_slot36;
                        report = zuuluu.bind(report)(michal);
                        zuuluu = report.averageTouches;
                        michal = true;
                        report = zuuluu.bind(report)(michal);
                        zuuluu = report.onTouchesDown;
                        michal = function(argFoo) { // Original name: c
                            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                                entity = argFoo;
                                zuuluu = entity.numberOfTouches;
                                michal = _closure3_slot36;
                                if(!(!(zuuluu < michal))) { _fun00024_ip = 158; continue _fun00023 }
 23:
                                zuuluu = _closure3_slot1;
                                michal = zuuluu.get;
                                zuuluu = michal.bind(zuuluu)();
                                michal = '';
                                if(!(michal === zuuluu)) { _fun00024_ip = 105; continue _fun00023 }
 44:
                                tangon = _closure3_slot1;
                                zuuluu = tangon.set;
                                michal = _closure3_slot2;
                                michal = zuuluu.bind(tangon)(michal);
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot3;
                                michal = 8;
                                michal = zuuluu[michal];
                                zuuluu = undefined;
                                report = tangon.bind(zuuluu)(michal);
                                tangon = report.runOnJS;
                                michal = _closure3_slot35;
                                michal = tangon.bind(report)(michal);
                                michal = michal.bind(zuuluu)();
 105:
                                zuuluu = _closure3_slot15;
                                michal = null;
                                if(!(michal != zuuluu)) { _fun00024_ip = 158; continue _fun00023 }
 115:
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot3;
                                michal = 8;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                tangon = tangon.bind(michal)(zuuluu);
                                zuuluu = tangon.runOnJS;
                                entity = _closure3_slot15;
                                entity = zuuluu.bind(tangon)(entity);
                                entity = entity.bind(michal)();
 158:
                                entity = undefined;
                                return entity;
                            }
                        };
                        oscard = {};
                        option = _closure3_slot36;
                        oscard['minPointers'] = option;
                        option = _closure3_slot1;
                        oscard['activeId'] = option;
                        option = _closure3_slot2;
                        oscard['id'] = option;
                        option = 8;
                        romeon = yankee[option];
                        romeon = offset.bind(verify)(romeon);
                        romeon = romeon.runOnJS;
                        oscard['runOnJS'] = romeon;
                        romeon = _closure3_slot35;
                        oscard['maybeBringToFront'] = romeon;
                        romeon = _closure3_slot15;
                        oscard['onStart'] = romeon;
                        michal['__closure'] = oscard;
                        oscard = 8322040599556.0;
                        michal['__workletHash'] = oscard;
                        oscard = _closure1_slot24;
                        michal['__initData'] = oscard;
                        report = zuuluu.bind(report)(michal);
                        zuuluu = report.onStart;
                        michal = function() { // Original name: o
                            zuuluu = _closure3_slot18;
                            michal = zuuluu.set;
                            entity = true;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        oscard = {};
                        result = _closure3_slot18;
                        oscard['isPanGestureActive'] = result;
                        michal['__closure'] = oscard;
                        oscard = 16397754167519.0;
                        michal['__workletHash'] = oscard;
                        oscard = _closure1_slot23;
                        michal['__initData'] = oscard;
                        report = zuuluu.bind(report)(michal);
                        zuuluu = report.onUpdate;
                        michal = function(argFoo) { // Original name: n
                            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                                zuuluu = argFoo;
                                oscard = _closure3_slot13;
                                tangon = oscard.x;
                                report = _closure3_slot4;
                                michal = report.get;
                                michal = michal.bind(report)();
                                report = tangon + michal;
                                michal = _closure3_slot3;
                                tangon = michal.width;
                                verify = 2;
                                tangon = tangon / verify;
                                tangon = report + tangon;
                                golfie = oscard.x;
                                report = zuuluu.translationX;
                                golfie = golfie + report;
                                report = michal.width;
                                report = report / verify;
                                golfie = golfie + report;
                                report = _closure3_slot31;
                                oscard = oscard.x;
                                michal = michal.width;
                                michal = michal / verify;
                                michal = oscard + michal;
                                report = report - michal;
                                oscard = _closure3_slot24;
                                michal = oscard.get;
                                michal = michal.bind(oscard)();
                                if(michal) { _fun00026_ip = 418; continue _fun00025 }
 125:
                                oscard = _closure3_slot27;
                                michal = oscard.get;
                                michal = michal.bind(oscard)();
                                if(!michal) { _fun00026_ip = 208; continue _fun00025 }
 141:
                                michal = global;
                                option = michal.Math;
                                oscard = option.abs;
                                michal = zuuluu.velocityY;
                                oscard = oscard.bind(option)(michal);
                                michal = 300;
                                if(!(oscard < michal)) { _fun00026_ip = 208; continue _fun00025 }
 176:
                                michal = _closure3_slot31;
                                if(!(tangon <= michal)) { _fun00026_ip = 192; continue _fun00025 }
 184:
                                michal = _closure3_slot31;
                                if(!(!(golfie > michal))) { _fun00026_ip = 266; continue _fun00025 }
 192:
                                michal = _closure3_slot31;
                                if(!(tangon >= michal)) { _fun00026_ip = 208; continue _fun00025 }
 200:
                                michal = _closure3_slot31;
                                if(!(!(golfie < michal))) { _fun00026_ip = 266; continue _fun00025 }
 208:
                                oscard = _closure3_slot27;
                                tangon = oscard.set;
                                michal = true;
                                michal = tangon.bind(oscard)(michal);
                                oscard = _closure3_slot4;
                                tangon = oscard.set;
                                option = zuuluu.translationX;
                                offset = _closure3_slot21;
                                michal = offset.get;
                                michal = michal.bind(offset)();
                                michal = option - michal;
                                michal = tangon.bind(oscard)(michal);
                                _fun00026_ip = 592; continue _fun00025;
 266:
                                option = _closure1_slot0;
                                offset = _closure1_slot3;
                                michal = 8;
                                michal = offset[michal];
                                oscard = undefined;
                                romeon = option.bind(oscard)(michal);
                                yankee = romeon.runOnJS;
                                michal = 9;
                                tangon = offset[michal];
                                tangon = option.bind(oscard)(tangon);
                                tangon = tangon.triggerHapticFeedback;
                                tangon = yankee.bind(romeon)(tangon);
                                michal = offset[michal];
                                michal = option.bind(oscard)(michal);
                                michal = michal.HapticFeedbackTypes;
                                michal = michal.IMPACT_LIGHT;
                                michal = tangon.bind(oscard)(michal);
                                tangon = _closure3_slot4;
                                michal = tangon.set;
                                michal = michal.bind(tangon)(report);
                                oscard = _closure3_slot21;
                                tangon = oscard.set;
                                michal = _closure3_slot31;
                                michal = golfie - michal;
                                michal = tangon.bind(oscard)(michal);
                                oscard = _closure3_slot24;
                                tangon = oscard.set;
                                michal = true;
                                michal = tangon.bind(oscard)(michal);
                                oscard = _closure3_slot27;
                                tangon = oscard.set;
                                michal = false;
                                michal = tangon.bind(oscard)(michal);
                                _fun00026_ip = 592; continue _fun00025;
 418:
                                michal = global;
                                option = michal.Math;
                                oscard = option.abs;
                                tangon = _closure3_slot31;
                                tangon = golfie - tangon;
                                oscard = oscard.bind(option)(tangon);
                                tangon = 15;
                                if(!(!(oscard > tangon))) { _fun00026_ip = 523; continue _fun00025 }
 452:
                                oscard = michal.Math;
                                tangon = oscard.abs;
                                michal = zuuluu.velocityX;
                                tangon = tangon.bind(oscard)(michal);
                                michal = 300;
                                if(!(!(tangon > michal))) { _fun00026_ip = 523; continue _fun00025 }
 485:
                                oscard = _closure3_slot21;
                                tangon = oscard.set;
                                michal = _closure3_slot31;
                                michal = golfie - michal;
                                michal = tangon.bind(oscard)(michal);
                                tangon = _closure3_slot4;
                                michal = tangon.set;
                                michal = michal.bind(tangon)(report);
                                _fun00026_ip = 592; continue _fun00025;
 523:
                                report = _closure3_slot24;
                                tangon = report.set;
                                michal = false;
                                michal = tangon.bind(report)(michal);
                                report = _closure3_slot27;
                                tangon = report.set;
                                michal = true;
                                michal = tangon.bind(report)(michal);
                                report = _closure3_slot4;
                                tangon = report.set;
                                oscard = zuuluu.translationX;
                                golfie = _closure3_slot21;
                                michal = golfie.get;
                                michal = michal.bind(golfie)();
                                michal = oscard - michal;
                                michal = tangon.bind(report)(michal);
 592:
                                oscard = _closure3_slot13;
                                tangon = oscard.y;
                                report = _closure3_slot5;
                                michal = report.get;
                                michal = michal.bind(report)();
                                report = tangon + michal;
                                michal = _closure3_slot3;
                                tangon = michal.height;
                                tangon = tangon / verify;
                                tangon = report + tangon;
                                golfie = oscard.y;
                                report = zuuluu.translationY;
                                golfie = golfie + report;
                                report = michal.height;
                                report = report / verify;
                                golfie = golfie + report;
                                report = _closure3_slot32;
                                oscard = oscard.y;
                                michal = michal.height;
                                michal = michal / verify;
                                michal = oscard + michal;
                                report = report - michal;
                                oscard = _closure3_slot23;
                                michal = oscard.get;
                                michal = michal.bind(oscard)();
                                if(michal) { _fun00026_ip = 1001; continue _fun00025 }
 708:
                                oscard = _closure3_slot28;
                                michal = oscard.get;
                                michal = michal.bind(oscard)();
                                if(!michal) { _fun00026_ip = 791; continue _fun00025 }
 724:
                                michal = global;
                                option = michal.Math;
                                oscard = option.abs;
                                michal = zuuluu.velocityY;
                                oscard = oscard.bind(option)(michal);
                                michal = 300;
                                if(!(oscard < michal)) { _fun00026_ip = 791; continue _fun00025 }
 759:
                                michal = _closure3_slot32;
                                if(!(tangon >= michal)) { _fun00026_ip = 775; continue _fun00025 }
 767:
                                michal = _closure3_slot32;
                                if(!(!(golfie < michal))) { _fun00026_ip = 849; continue _fun00025 }
 775:
                                michal = _closure3_slot32;
                                if(!(tangon <= michal)) { _fun00026_ip = 791; continue _fun00025 }
 783:
                                michal = _closure3_slot32;
                                if(!(!(golfie > michal))) { _fun00026_ip = 849; continue _fun00025 }
 791:
                                oscard = _closure3_slot28;
                                tangon = oscard.set;
                                michal = true;
                                michal = tangon.bind(oscard)(michal);
                                oscard = _closure3_slot5;
                                tangon = oscard.set;
                                option = zuuluu.translationY;
                                offset = _closure3_slot22;
                                michal = offset.get;
                                michal = michal.bind(offset)();
                                michal = option - michal;
                                michal = tangon.bind(oscard)(michal);
                                _fun00026_ip = 1175; continue _fun00025;
 849:
                                option = _closure1_slot0;
                                offset = _closure1_slot3;
                                michal = 8;
                                michal = offset[michal];
                                oscard = undefined;
                                romeon = option.bind(oscard)(michal);
                                yankee = romeon.runOnJS;
                                michal = 9;
                                tangon = offset[michal];
                                tangon = option.bind(oscard)(tangon);
                                tangon = tangon.triggerHapticFeedback;
                                tangon = yankee.bind(romeon)(tangon);
                                michal = offset[michal];
                                michal = option.bind(oscard)(michal);
                                michal = michal.HapticFeedbackTypes;
                                michal = michal.IMPACT_LIGHT;
                                michal = tangon.bind(oscard)(michal);
                                tangon = _closure3_slot5;
                                michal = tangon.set;
                                michal = michal.bind(tangon)(report);
                                oscard = _closure3_slot22;
                                tangon = oscard.set;
                                michal = _closure3_slot32;
                                michal = golfie - michal;
                                michal = tangon.bind(oscard)(michal);
                                oscard = _closure3_slot23;
                                tangon = oscard.set;
                                michal = true;
                                michal = tangon.bind(oscard)(michal);
                                oscard = _closure3_slot28;
                                tangon = oscard.set;
                                michal = false;
                                michal = tangon.bind(oscard)(michal);
                                _fun00026_ip = 1175; continue _fun00025;
 1001:
                                michal = global;
                                option = michal.Math;
                                oscard = option.abs;
                                tangon = _closure3_slot32;
                                tangon = golfie - tangon;
                                oscard = oscard.bind(option)(tangon);
                                tangon = 15;
                                if(!(!(oscard > tangon))) { _fun00026_ip = 1106; continue _fun00025 }
 1035:
                                oscard = michal.Math;
                                tangon = oscard.abs;
                                michal = zuuluu.velocityY;
                                tangon = tangon.bind(oscard)(michal);
                                michal = 300;
                                if(!(!(tangon > michal))) { _fun00026_ip = 1106; continue _fun00025 }
 1068:
                                oscard = _closure3_slot22;
                                tangon = oscard.set;
                                michal = _closure3_slot32;
                                michal = golfie - michal;
                                michal = tangon.bind(oscard)(michal);
                                tangon = _closure3_slot5;
                                michal = tangon.set;
                                michal = michal.bind(tangon)(report);
                                _fun00026_ip = 1175; continue _fun00025;
 1106:
                                report = _closure3_slot23;
                                tangon = report.set;
                                michal = false;
                                michal = tangon.bind(report)(michal);
                                report = _closure3_slot28;
                                tangon = report.set;
                                michal = true;
                                michal = tangon.bind(report)(michal);
                                report = _closure3_slot5;
                                tangon = report.set;
                                oscard = zuuluu.translationY;
                                golfie = _closure3_slot22;
                                michal = golfie.get;
                                michal = michal.bind(golfie)();
                                michal = oscard - michal;
                                michal = tangon.bind(report)(michal);
 1175:
                                michal = global;
                                oscard = michal.Math;
                                report = oscard.abs;
                                tangon = _closure3_slot13;
                                golfie = tangon.x;
                                option = _closure3_slot4;
                                tangon = option.get;
                                tangon = tangon.bind(option)();
                                golfie = golfie + tangon;
                                tangon = _closure3_slot3;
                                tangon = tangon.width;
                                tangon = tangon / verify;
                                golfie = golfie + tangon;
                                tangon = _closure3_slot31;
                                tangon = golfie - tangon;
                                offset = report.bind(oscard)(tangon);
                                option = _closure3_slot26;
                                oscard = option.set;
                                golfie = 50;
                                yankee = offset < golfie;
                                tangon = 0;
                                if(!yankee) { _fun00026_ip = 1277; continue _fun00025 }
 1266:
                                yankee = offset / golfie;
                                offset = 1;
                                tangon = offset - yankee;
 1277:
                                tangon = oscard.bind(option)(tangon);
                                oscard = michal.Math;
                                tangon = oscard.abs;
                                michal = _closure3_slot13;
                                option = michal.y;
                                offset = _closure3_slot5;
                                michal = offset.get;
                                michal = michal.bind(offset)();
                                option = option + michal;
                                michal = _closure3_slot3;
                                michal = michal.height;
                                michal = michal / verify;
                                option = option + michal;
                                michal = _closure3_slot32;
                                michal = option - michal;
                                oscard = tangon.bind(oscard)(michal);
                                tangon = _closure3_slot25;
                                michal = tangon.set;
                                option = oscard < golfie;
                                report = 0;
                                if(!option) { _fun00026_ip = 1379; continue _fun00025 }
 1368:
                                golfie = oscard / golfie;
                                oscard = 1;
                                report = oscard - golfie;
 1379:
                                michal = michal.bind(tangon)(report);
                                tangon = zuuluu.absoluteX;
                                report = _closure3_slot17;
                                michal = report.get;
                                michal = michal.bind(report)();
                                michal = michal.x;
                                if(!(tangon >= michal)) { _fun00026_ip = 1561; continue _fun00025 }
 1415:
                                report = zuuluu.absoluteX;
                                tangon = _closure3_slot17;
                                michal = tangon.get;
                                michal = michal.bind(tangon)();
                                option = michal.x;
                                verify = _closure1_slot0;
                                tangon = _closure1_slot3;
                                golfie = 14;
                                tangon = tangon[golfie];
                                oscard = undefined;
                                tangon = verify.bind(oscard)(tangon);
                                tangon = tangon.TRASH_TAP_TARGET_SIZE;
                                tangon = option + tangon;
                                if(!(report <= tangon)) { _fun00026_ip = 1561; continue _fun00025 }
 1478:
                                report = zuuluu.absoluteY;
                                option = _closure3_slot17;
                                tangon = option.get;
                                tangon = tangon.bind(option)();
                                tangon = tangon.y;
                                if(!(report >= tangon)) { _fun00026_ip = 1561; continue _fun00025 }
 1506:
                                zuuluu = zuuluu.absoluteY;
                                report = _closure3_slot17;
                                tangon = report.get;
                                tangon = tangon.bind(report)();
                                tangon = tangon.y;
                                report = _closure1_slot0;
                                michal = _closure1_slot3;
                                michal = michal[golfie];
                                michal = report.bind(oscard)(michal);
                                michal = michal.TRASH_TAP_TARGET_SIZE;
                                michal = tangon + michal;
                                if(!(!(zuuluu <= michal))) { _fun00026_ip = 1611; continue _fun00025 }
 1561:
                                zuuluu = _closure3_slot6;
                                michal = zuuluu.get;
                                michal = michal.bind(zuuluu)();
                                if(!michal) { _fun00026_ip = 1657; continue _fun00025 }
 1577:
                                tangon = _closure3_slot6;
                                zuuluu = tangon.set;
                                michal = false;
                                michal = zuuluu.bind(tangon)(michal);
                                tangon = _closure3_slot7;
                                zuuluu = tangon.set;
                                michal = true;
                                michal = zuuluu.bind(tangon)(michal);
                                _fun00026_ip = 1657; continue _fun00025;
 1611:
                                zuuluu = _closure3_slot6;
                                michal = zuuluu.get;
                                michal = michal.bind(zuuluu)();
                                if(michal) { _fun00026_ip = 1657; continue _fun00025 }
 1627:
                                tangon = _closure3_slot6;
                                michal = tangon.set;
                                zuuluu = true;
                                michal = michal.bind(tangon)(zuuluu);
                                michal = _closure3_slot7;
                                entity = michal.set;
                                entity = entity.bind(michal)(zuuluu);
 1657:
                                entity = undefined;
                                return entity;
                            }
                        };
                        oscard = {};
                        romeon = _closure3_slot13;
                        oscard['position'] = romeon;
                        romeon = _closure3_slot4;
                        oscard['offsetX'] = romeon;
                        romeon = _closure3_slot3;
                        oscard['size'] = romeon;
                        romeon = _closure3_slot31;
                        oscard['canvasCenterX'] = romeon;
                        backup = _closure3_slot24;
                        oscard['stickToHorizontalCenter'] = backup;
                        romeon = 15;
                        oscard['STICKY_DISTANCE_THRESHOLD'] = romeon;
                        romeon = 300;
                        oscard['STICKY_VELOCITY_THRESHOLD'] = romeon;
                        output = _closure3_slot27;
                        oscard['yAxisStickEnabled'] = output;
                        foxtra = _closure3_slot21;
                        oscard['dragPointToSnapPointDeltaX'] = foxtra;
                        romeon = yankee[option];
                        romeon = offset.bind(verify)(romeon);
                        romeon = romeon.runOnJS;
                        oscard['runOnJS'] = romeon;
                        romeon = 9;
                        kiloes = yankee[romeon];
                        kiloes = offset.bind(verify)(kiloes);
                        kiloes = kiloes.triggerHapticFeedback;
                        oscard['triggerHapticFeedback'] = kiloes;
                        romeon = yankee[romeon];
                        romeon = offset.bind(verify)(romeon);
                        romeon = romeon.HapticFeedbackTypes;
                        oscard['HapticFeedbackTypes'] = romeon;
                        romeon = _closure3_slot5;
                        oscard['offsetY'] = romeon;
                        romeon = _closure3_slot32;
                        oscard['canvasCenterY'] = romeon;
                        kiloes = _closure3_slot23;
                        oscard['stickToVerticalCenter'] = kiloes;
                        sizing = _closure3_slot28;
                        oscard['xAxisStickEnabled'] = sizing;
                        romeon = _closure3_slot22;
                        oscard['dragPointToSnapPointDeltaY'] = romeon;
                        echoed = _closure3_slot26;
                        oscard['yAxisOpacity'] = echoed;
                        echoed = _closure3_slot25;
                        oscard['xAxisOpacity'] = echoed;
                        echoed = _closure3_slot17;
                        oscard['trashCanArea'] = echoed;
                        echoed = 14;
                        echoed = yankee[echoed];
                        echoed = offset.bind(verify)(echoed);
                        echoed = echoed.TRASH_TAP_TARGET_SIZE;
                        oscard['TRASH_TAP_TARGET_SIZE'] = echoed;
                        echoed = _closure3_slot6;
                        oscard['hoveringOverTrash'] = echoed;
                        echoed = _closure3_slot7;
                        oscard['shouldTriggerHapticFeedback'] = echoed;
                        michal['__closure'] = oscard;
                        oscard = 3701668814868.0;
                        michal['__workletHash'] = oscard;
                        oscard = _closure1_slot22;
                        michal['__initData'] = oscard;
                        report = zuuluu.bind(report)(michal);
                        zuuluu = report.onTouchesUp;
                        michal = function(argFoo, argBar) { // Original name: t
                            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                                zuuluu = argBar;
                                entity = argFoo;
                                tangon = entity.numberOfTouches;
                                michal = _closure3_slot36;
                                if(!(tangon < michal)) { _fun00028_ip = 42; continue _fun00027 }
 23:
                                michal = zuuluu.end;
                                michal = michal.bind(zuuluu)();
                                michal = _closure3_slot34;
                                entity = undefined;
                                entity = michal.bind(entity)();
 42:
                                entity = undefined;
                                return entity;
                            }
                        };
                        echoed = {};
                        oscard = _closure3_slot36;
                        echoed['minPointers'] = oscard;
                        oscard = _closure3_slot34;
                        echoed['maybeDeleteAndClearActive'] = oscard;
                        michal['__closure'] = echoed;
                        echoed = 3135590291679.0;
                        michal['__workletHash'] = echoed;
                        echoed = _closure1_slot21;
                        michal['__initData'] = echoed;
                        zuuluu = zuuluu.bind(report)(michal);
                        michal = zuuluu.onFinalize;
                        entity = function(argFoo) { // Original name: e
                            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                                entity = argFoo;
                                report = _closure3_slot18;
                                zuuluu = report.set;
                                tangon = false;
                                zuuluu = zuuluu.bind(report)(tangon);
                                report = global;
                                golfie = report.Math;
                                oscard = golfie.abs;
                                zuuluu = entity.translationX;
                                oscard = oscard.bind(golfie)(zuuluu);
                                zuuluu = 2;
                                oscard = oscard > zuuluu;
                                if(oscard) { _fun00030_ip = 84; continue _fun00029 }
 57:
                                golfie = report.Math;
                                report = golfie.abs;
                                entity = entity.translationY;
                                entity = report.bind(golfie)(entity);
                                oscard = entity > zuuluu;
 84:
                                report = _closure3_slot0;
                                zuuluu = report.set;
                                entity = report.get;
                                entity = entity.bind(report)();
                                if(entity) { _fun00030_ip = 108; continue _fun00029 }
 105:
                                entity = oscard;
 108:
                                entity = zuuluu.bind(report)(entity);
                                zuuluu = _closure3_slot27;
                                entity = zuuluu.set;
                                entity = entity.bind(zuuluu)(tangon);
                                zuuluu = _closure3_slot28;
                                entity = zuuluu.set;
                                entity = entity.bind(zuuluu)(tangon);
                                zuuluu = _closure3_slot23;
                                entity = zuuluu.set;
                                entity = entity.bind(zuuluu)(tangon);
                                zuuluu = _closure3_slot24;
                                entity = zuuluu.set;
                                entity = entity.bind(zuuluu)(tangon);
                                zuuluu = _closure3_slot21;
                                entity = zuuluu.set;
                                tangon = 0;
                                entity = entity.bind(zuuluu)(tangon);
                                zuuluu = _closure3_slot22;
                                entity = zuuluu.set;
                                entity = entity.bind(zuuluu)(tangon);
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot3;
                                entity = 8;
                                zuuluu = zuuluu[entity];
                                entity = undefined;
                                report = tangon.bind(entity)(zuuluu);
                                tangon = report.runOnJS;
                                zuuluu = _closure3_slot33;
                                zuuluu = tangon.bind(report)(zuuluu);
                                zuuluu = zuuluu.bind(entity)();
                                michal = _closure3_slot34;
                                michal = michal.bind(entity)();
                                return entity;
                            }
                        };
                        report = {};
                        report['isPanGestureActive'] = result;
                        result = 2;
                        report['MIN_MOVE_DISTANCE'] = result;
                        result = _closure3_slot0;
                        report['shouldUpdateStore'] = result;
                        report['yAxisStickEnabled'] = output;
                        report['xAxisStickEnabled'] = sizing;
                        report['stickToVerticalCenter'] = kiloes;
                        report['stickToHorizontalCenter'] = backup;
                        report['dragPointToSnapPointDeltaX'] = foxtra;
                        report['dragPointToSnapPointDeltaY'] = romeon;
                        option = yankee[option];
                        option = offset.bind(verify)(option);
                        option = option.runOnJS;
                        report['runOnJS'] = option;
                        golfie = _closure3_slot33;
                        report['maybeUpdateStore'] = golfie;
                        report['maybeDeleteAndClearActive'] = oscard;
                        entity['__closure'] = report;
                        report = 13435279792036.0;
                        entity['__workletHash'] = report;
                        tangon = _closure1_slot20;
                        entity['__initData'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    golfie = option.bind(tangon)(oscard, golfie);
                    _closure3_slot37 = golfie;
                    option = tangon.useMemo;
                    oscard = new Array(1);
                    oscard[0] = report;
                    report = function() {
                        option = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 13;
                        entity = verify[entity];
                        golfie = undefined;
                        entity = option.bind(golfie)(entity);
                        michal = entity.Gesture;
                        entity = michal.Tap;
                        zuuluu = entity.bind(michal)();
                        michal = zuuluu.enabled;
                        oscard = _closure3_slot14;
                        entity = null;
                        entity = entity != oscard;
                        zuuluu = michal.bind(zuuluu)(entity);
                        michal = zuuluu.onStart;
                        entity = function() { // Original name: e
                            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                                zuuluu = _closure3_slot14;
                                michal = null;
                                if(!(michal != zuuluu)) { _fun00032_ip = 56; continue _fun00031 }
 13:
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot3;
                                michal = 8;
                                zuuluu = zuuluu[michal];
                                michal = undefined;
                                tangon = tangon.bind(michal)(zuuluu);
                                zuuluu = tangon.runOnJS;
                                entity = _closure3_slot14;
                                entity = zuuluu.bind(tangon)(entity);
                                entity = entity.bind(michal)();
 56:
                                entity = undefined;
                                return entity;
                            }
                        };
                        report = {};
                        report['onTap'] = oscard;
                        oscard = 8;
                        oscard = verify[oscard];
                        oscard = option.bind(golfie)(oscard);
                        oscard = oscard.runOnJS;
                        report['runOnJS'] = oscard;
                        entity['__closure'] = report;
                        report = 6622214151589.0;
                        entity['__workletHash'] = report;
                        tangon = _closure1_slot25;
                        entity['__initData'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    option = option.bind(tangon)(report, oscard);
                    _closure3_slot38 = option;
                    oscard = tangon.useMemo;
                    report = new Array(5);
                    report[0] = backup;
                    report[1] = yankee;
                    report[2] = foxtra;
                    report[3] = zuuluu;
                    report[4] = michal;
                    zuuluu = function() {
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        michal = 13;
                        michal = offset[michal];
                        option = undefined;
                        michal = verify.bind(option)(michal);
                        zuuluu = michal.Gesture;
                        michal = zuuluu.Pinch;
                        report = michal.bind(zuuluu)();
                        zuuluu = report.onStart;
                        michal = function() { // Original name: n
                            zuuluu = _closure3_slot19;
                            michal = zuuluu.set;
                            entity = true;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        golfie = _closure3_slot19;
                        yankee['isPinchGestureActive'] = golfie;
                        michal['__closure'] = yankee;
                        yankee = 12307014870036.0;
                        michal['__workletHash'] = yankee;
                        yankee = _closure1_slot28;
                        michal['__initData'] = yankee;
                        report = zuuluu.bind(report)(michal);
                        zuuluu = report.onUpdate;
                        michal = function(argFoo) { // Original name: t
                            zuuluu = _closure3_slot8;
                            michal = zuuluu.set;
                            tangon = _closure3_slot9;
                            entity = argFoo;
                            entity = entity.scale;
                            entity = tangon * entity;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        romeon = _closure3_slot8;
                        yankee['scale'] = romeon;
                        romeon = _closure3_slot9;
                        yankee['originScale'] = romeon;
                        michal['__closure'] = yankee;
                        yankee = 5712333645725.0;
                        michal['__workletHash'] = yankee;
                        yankee = _closure1_slot27;
                        michal['__initData'] = yankee;
                        zuuluu = zuuluu.bind(report)(michal);
                        michal = zuuluu.onFinalize;
                        entity = function(argFoo) { // Original name: e
                            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                                tangon = _closure3_slot19;
                                zuuluu = tangon.set;
                                entity = false;
                                entity = zuuluu.bind(tangon)(entity);
                                entity = global;
                                tangon = entity.Math;
                                zuuluu = tangon.abs;
                                entity = argFoo;
                                report = entity.scale;
                                entity = 1;
                                entity = report - entity;
                                zuuluu = zuuluu.bind(tangon)(entity);
                                entity = 0.01;
                                report = zuuluu > entity;
                                tangon = _closure3_slot0;
                                zuuluu = tangon.set;
                                entity = tangon.get;
                                entity = entity.bind(tangon)();
                                if(entity) { _fun00034_ip = 92; continue _fun00033 }
 89:
                                entity = report;
 92:
                                entity = zuuluu.bind(tangon)(entity);
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot3;
                                entity = 8;
                                zuuluu = zuuluu[entity];
                                entity = undefined;
                                tangon = tangon.bind(entity)(zuuluu);
                                zuuluu = tangon.runOnJS;
                                michal = _closure3_slot33;
                                michal = zuuluu.bind(tangon)(michal);
                                michal = michal.bind(entity)();
                                return entity;
                            }
                        };
                        report = {};
                        report['isPinchGestureActive'] = golfie;
                        golfie = 0.01;
                        report['MIN_ZOOM'] = golfie;
                        golfie = _closure3_slot0;
                        report['shouldUpdateStore'] = golfie;
                        golfie = 8;
                        golfie = offset[golfie];
                        golfie = verify.bind(option)(golfie);
                        golfie = golfie.runOnJS;
                        report['runOnJS'] = golfie;
                        oscard = _closure3_slot33;
                        report['maybeUpdateStore'] = oscard;
                        entity['__closure'] = report;
                        report = 10264760621082.0;
                        entity['__workletHash'] = report;
                        tangon = _closure1_slot26;
                        entity['__initData'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    oscard = oscard.bind(tangon)(zuuluu, report);
                    _closure3_slot39 = oscard;
                    report = tangon.useMemo;
                    zuuluu = new Array(5);
                    zuuluu[0] = romeon;
                    zuuluu[1] = yankee;
                    zuuluu[2] = offset;
                    zuuluu[3] = verify;
                    zuuluu[4] = michal;
                    michal = function() {
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        michal = 13;
                        michal = offset[michal];
                        option = undefined;
                        michal = verify.bind(option)(michal);
                        zuuluu = michal.Gesture;
                        michal = zuuluu.Rotation;
                        report = michal.bind(zuuluu)();
                        zuuluu = report.onStart;
                        michal = function() { // Original name: n
                            zuuluu = _closure3_slot20;
                            michal = zuuluu.set;
                            entity = true;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        golfie = _closure3_slot20;
                        yankee['isRotateGestureActive'] = golfie;
                        michal['__closure'] = yankee;
                        yankee = 10053271408222.0;
                        michal['__workletHash'] = yankee;
                        yankee = _closure1_slot31;
                        michal['__initData'] = yankee;
                        report = zuuluu.bind(report)(michal);
                        zuuluu = report.onUpdate;
                        michal = function(argFoo) { // Original name: t
                            zuuluu = _closure3_slot10;
                            michal = zuuluu.set;
                            tangon = _closure3_slot11;
                            entity = argFoo;
                            entity = entity.rotation;
                            entity = tangon + entity;
                            entity = michal.bind(zuuluu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        romeon = _closure3_slot10;
                        yankee['rotation'] = romeon;
                        romeon = _closure3_slot11;
                        yankee['originRotate'] = romeon;
                        michal['__closure'] = yankee;
                        yankee = 8387586134388.0;
                        michal['__workletHash'] = yankee;
                        yankee = _closure1_slot30;
                        michal['__initData'] = yankee;
                        zuuluu = zuuluu.bind(report)(michal);
                        michal = zuuluu.onFinalize;
                        entity = function(argFoo) { // Original name: e
                            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                                tangon = _closure3_slot20;
                                zuuluu = tangon.set;
                                entity = false;
                                entity = zuuluu.bind(tangon)(entity);
                                entity = argFoo;
                                zuuluu = entity.rotation;
                                entity = 0.01;
                                report = zuuluu > entity;
                                tangon = _closure3_slot0;
                                zuuluu = tangon.set;
                                entity = tangon.get;
                                entity = entity.bind(tangon)();
                                if(entity) { _fun00036_ip = 66; continue _fun00035 }
 63:
                                entity = report;
 66:
                                entity = zuuluu.bind(tangon)(entity);
                                tangon = _closure1_slot0;
                                zuuluu = _closure1_slot3;
                                entity = 8;
                                zuuluu = zuuluu[entity];
                                entity = undefined;
                                tangon = tangon.bind(entity)(zuuluu);
                                zuuluu = tangon.runOnJS;
                                michal = _closure3_slot33;
                                michal = zuuluu.bind(tangon)(michal);
                                michal = michal.bind(entity)();
                                return entity;
                            }
                        };
                        report = {};
                        report['isRotateGestureActive'] = golfie;
                        golfie = 0.01;
                        report['MIN_ROTATION'] = golfie;
                        golfie = _closure3_slot0;
                        report['shouldUpdateStore'] = golfie;
                        golfie = 8;
                        golfie = offset[golfie];
                        golfie = verify.bind(option)(golfie);
                        golfie = golfie.runOnJS;
                        report['runOnJS'] = golfie;
                        oscard = _closure3_slot33;
                        report['maybeUpdateStore'] = oscard;
                        entity['__closure'] = report;
                        report = 3627528950890.0;
                        entity['__workletHash'] = report;
                        tangon = _closure1_slot29;
                        entity['__initData'] = tangon;
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    report = report.bind(tangon)(michal, zuuluu);
                    _closure3_slot40 = report;
                    zuuluu = tangon.useMemo;
                    michal = new Array(4);
                    michal[0] = option;
                    michal[1] = golfie;
                    michal[2] = oscard;
                    michal[3] = report;
                    entity = function() {
                        golfie = _closure1_slot0;
                        option = _closure1_slot3;
                        report = 13;
                        entity = option[report];
                        oscard = undefined;
                        entity = golfie.bind(oscard)(entity);
                        tangon = entity.Gesture;
                        zuuluu = tangon.Race;
                        michal = _closure3_slot38;
                        report = option[report];
                        report = golfie.bind(oscard)(report);
                        option = report.Gesture;
                        golfie = option.Simultaneous;
                        oscard = _closure3_slot37;
                        report = _closure3_slot39;
                        entity = _closure3_slot40;
                        entity = golfie.bind(option)(oscard, report, entity);
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity, michal);
                    return entity;
                }
            };
            verify = zuuluu.bind(tangon)(golfie);
            output = {};
            golfie = _closure1_slot7;
            zuuluu = golfie.getWidth;
            zuuluu = zuuluu.bind(golfie)();
            output['x'] = zuuluu;
            zuuluu = golfie.getHeight;
            zuuluu = zuuluu.bind(golfie)();
            output['y'] = zuuluu;
            _closure2_slot14 = output;
            zuuluu = option[report];
            golfie = michal.bind(tangon)(zuuluu);
            zuuluu = golfie.useAnimatedStyle;
            entity = function() { // Original name: Se
                _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                    michal = _closure2_slot3;
                    entity = michal.get;
                    michal = entity.bind(michal)();
                    entity = _closure2_slot0;
                    if(!(michal !== entity)) { _fun00038_ip = 281; continue _fun00037 }
 27:
                    entity = {};
                    michal = 'absolute';
                    entity['position'] = michal;
                    tangon = _closure2_slot12;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    michal = michal.x;
                    entity['left'] = michal;
                    tangon = _closure2_slot12;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    michal = michal.y;
                    entity['top'] = michal;
                    tangon = _closure2_slot12;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    michal = michal.width;
                    entity['width'] = michal;
                    tangon = _closure2_slot12;
                    michal = tangon.get;
                    michal = michal.bind(tangon)();
                    michal = michal.height;
                    entity['height'] = michal;
                    tangon = _closure2_slot1;
                    michal = 'transparent';
                    if(!tangon) { _fun00038_ip = 142; continue _fun00037 }
 136:
                    michal = 'rgba(100, 200, 300, 0.4)';
 142:
                    entity['backgroundColor'] = michal;
                    tangon = {};
                    report = _closure2_slot8;
                    michal = report.get;
                    michal = michal.bind(report)();
                    tangon['translateX'] = michal;
                    michal = new Array(4);
                    michal[0] = tangon;
                    tangon = {};
                    oscard = _closure2_slot9;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    tangon['translateY'] = report;
                    michal[1] = tangon;
                    tangon = {};
                    oscard = _closure2_slot10;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    tangon['scale'] = report;
                    michal[2] = tangon;
                    tangon = {};
                    oscard = _closure2_slot11;
                    report = oscard.get;
                    option = report.bind(oscard)();
                    report = global;
                    report = report.HermesInternal;
                    golfie = report.concat;
                    oscard = '';
                    report = 'rad';
                    report = golfie.bind(oscard)(option, report);
                    tangon['rotateZ'] = report;
                    michal[3] = tangon;
                    entity['transform'] = michal;
                    _fun00038_ip = 353; continue _fun00037;
 281:
                    michal = {'position': 'absolute', 'left': 0, 'top': 0};
                    tangon = _closure2_slot14;
                    tangon = tangon.x;
                    michal['width'] = tangon;
                    tangon = _closure2_slot14;
                    tangon = tangon.y;
                    michal['height'] = tangon;
                    tangon = _closure2_slot1;
                    zuuluu = 'transparent';
                    if(!tangon) { _fun00038_ip = 338; continue _fun00037 }
 332:
                    zuuluu = 'rgba(100, 200, 300, 0.4)';
 338:
                    michal['backgroundColor'] = zuuluu;
                    zuuluu = new Array(0);
                    michal['transform'] = zuuluu;
                    entity = michal;
 353:
                    return entity;
                }
            };
            offset = {};
            offset['activeId'] = echoed;
            offset['id'] = result;
            offset['screenDimensions'] = output;
            offset['debug'] = sizing;
            offset['gestureDetectorDimensions'] = kiloes;
            offset['offsetX'] = backup;
            offset['offsetY'] = foxtra;
            offset['scale'] = romeon;
            offset['rotation'] = yankee;
            entity['__closure'] = offset;
            offset = 16448928617958.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot36;
            entity['__initData'] = offset;
            golfie = zuuluu.bind(golfie)(entity);
            zuuluu = _closure1_slot10;
            entity = 13;
            entity = option[entity];
            entity = michal.bind(tangon)(entity);
            michal = entity.GestureDetector;
            entity = {};
            entity['gesture'] = verify;
            oscard = _closure1_slot1;
            report = option[report];
            report = oscard.bind(tangon)(report);
            oscard = report.View;
            report = {};
            report['style'] = golfie;
            report = zuuluu.bind(tangon)(oscard, report);
            entity['children'] = report;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['TransformComponentGestureHandler'] = michal;
    return entity;
})();
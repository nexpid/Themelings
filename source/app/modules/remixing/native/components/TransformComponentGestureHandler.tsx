// app/modules/remixing/native/components/TransformComponentGestureHandler.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    options = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = options;
    var _closure1_slot3 = oscar;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = options.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Dimensions;
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useRemixingEditorStore;
    var _closure1_slot8 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx1(){const{shouldTriggerHapticFeedback}=this.__closure;return shouldTriggerHapticFeedback.get();}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx2(current){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldTriggerHapticFeedback}=this.__closure;if(current){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);shouldTriggerHapticFeedback.set(false);}}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx3(){const{xAxisOpacity}=this.__closure;return xAxisOpacity.get();}';
    tango['code'] = golf;
    var _closure1_slot13 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx4(current){const{runOnJS,setXAxisOpacity}=this.__closure;runOnJS(setXAxisOpacity)(current);}';
    tango['code'] = golf;
    var _closure1_slot14 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx5(){const{yAxisOpacity}=this.__closure;return yAxisOpacity.get();}';
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx6(current){const{runOnJS,setYAxisOpacity}=this.__closure;runOnJS(setYAxisOpacity)(current);}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx7(){const{shouldDeleteId}=this.__closure;return shouldDeleteId.get();}';
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = {};
    golf = "function TransformComponentGestureHandlerTsx8(current){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,removeComponent,shouldDeleteId}=this.__closure;if(current!==''){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);runOnJS(removeComponent)(current);shouldDeleteId.set('');}}";
    tango['code'] = golf;
    var _closure1_slot18 = tango;
    tango = {};
    golf = "function TransformComponentGestureHandlerTsx9(){const{activeId,id,hoveringOverTrash,shouldDeleteId,runOnJS,setXAxisOpacity,setYAxisOpacity}=this.__closure;if(activeId.get()===id&&hoveringOverTrash.get()){shouldDeleteId.set(id);hoveringOverTrash.set(false);}activeId.set('');runOnJS(setXAxisOpacity)(0);runOnJS(setYAxisOpacity)(0);}";
    tango['code'] = golf;
    var _closure1_slot19 = tango;
    tango = {};
    golf = "function TransformComponentGestureHandlerTsx10(e){const{minPointers,activeId,id,runOnJS,maybeBringToFront,onStart}=this.__closure;if(e.numberOfTouches<minPointers)return;if(activeId.get()===''){activeId.set(id);runOnJS(maybeBringToFront)();}if(onStart!=null){runOnJS(onStart)();}}";
    tango['code'] = golf;
    var _closure1_slot20 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx11(){const{isPanGestureActive}=this.__closure;isPanGestureActive.set(true);}';
    tango['code'] = golf;
    var _closure1_slot21 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx12(e){const{position,offsetX,size,canvasCenterX,stickToHorizontalCenter,STICKY_DISTANCE_THRESHOLD,STICKY_VELOCITY_THRESHOLD,yAxisStickEnabled,dragPointToSnapPointDeltaX,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,offsetY,canvasCenterY,stickToVerticalCenter,xAxisStickEnabled,dragPointToSnapPointDeltaY,yAxisOpacity,xAxisOpacity,trashCanArea,TRASH_TAP_TARGET_SIZE,hoveringOverTrash,shouldTriggerHapticFeedback}=this.__closure;const centerXBeforeDragUpdate=position.x+offsetX.get()+size.width/2;const centerXAfterDragUpdate=position.x+e.translationX+size.width/2;const centeredComponentOffsetX=canvasCenterX-(position.x+size.width/2);if(stickToHorizontalCenter.get()){if(Math.abs(centerXAfterDragUpdate-canvasCenterX)>STICKY_DISTANCE_THRESHOLD||Math.abs(e.velocityX)>STICKY_VELOCITY_THRESHOLD){stickToHorizontalCenter.set(false);yAxisStickEnabled.set(true);offsetX.set(e.translationX-dragPointToSnapPointDeltaX.get());}else{dragPointToSnapPointDeltaX.set(centerXAfterDragUpdate-canvasCenterX);offsetX.set(centeredComponentOffsetX);}}else{const crossedYAxisFromLeftToRight=centerXBeforeDragUpdate<=canvasCenterX&&centerXAfterDragUpdate>canvasCenterX;const crossedYAxisFromRightToLeft=centerXBeforeDragUpdate>=canvasCenterX&&centerXAfterDragUpdate<canvasCenterX;if(yAxisStickEnabled.get()&&Math.abs(e.velocityY)<STICKY_VELOCITY_THRESHOLD&&(crossedYAxisFromLeftToRight||crossedYAxisFromRightToLeft)){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);offsetX.set(centeredComponentOffsetX);dragPointToSnapPointDeltaX.set(centerXAfterDragUpdate-canvasCenterX);stickToHorizontalCenter.set(true);yAxisStickEnabled.set(false);}else{yAxisStickEnabled.set(true);offsetX.set(e.translationX-dragPointToSnapPointDeltaX.get());}}const centerYBeforeDragUpdate=position.y+offsetY.get()+size.height/2;const centerYAfterDragUpdate=position.y+e.translationY+size.height/2;const centeredComponentOffsetY=canvasCenterY-(position.y+size.height/2);if(stickToVerticalCenter.get()){if(Math.abs(centerYAfterDragUpdate-canvasCenterY)>STICKY_DISTANCE_THRESHOLD||Math.abs(e.velocityY)>STICKY_VELOCITY_THRESHOLD){stickToVerticalCenter.set(false);xAxisStickEnabled.set(true);offsetY.set(e.translationY-dragPointToSnapPointDeltaY.get());}else{dragPointToSnapPointDeltaY.set(centerYAfterDragUpdate-canvasCenterY);offsetY.set(centeredComponentOffsetY);}}else{const crossedXAxisFromTopToBottom=centerYBeforeDragUpdate>=canvasCenterY&&centerYAfterDragUpdate<canvasCenterY;const crossedXAxisFromBottomToTop=centerYBeforeDragUpdate<=canvasCenterY&&centerYAfterDragUpdate>canvasCenterY;if(xAxisStickEnabled.get()&&Math.abs(e.velocityY)<STICKY_VELOCITY_THRESHOLD&&(crossedXAxisFromTopToBottom||crossedXAxisFromBottomToTop)){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);offsetY.set(centeredComponentOffsetY);dragPointToSnapPointDeltaY.set(centerYAfterDragUpdate-canvasCenterY);stickToVerticalCenter.set(true);xAxisStickEnabled.set(false);}else{xAxisStickEnabled.set(true);offsetY.set(e.translationY-dragPointToSnapPointDeltaY.get());}}const xDistance=Math.abs(position.x+offsetX.get()+size.width/2-canvasCenterX);yAxisOpacity.set(xDistance<50?1-xDistance/50:0);const yDistance=Math.abs(position.y+offsetY.get()+size.height/2-canvasCenterY);xAxisOpacity.set(yDistance<50?1-yDistance/50:0);if(e.absoluteX>=trashCanArea.get().x&&e.absoluteX<=trashCanArea.get().x+TRASH_TAP_TARGET_SIZE&&e.absoluteY>=trashCanArea.get().y&&e.absoluteY<=trashCanArea.get().y+TRASH_TAP_TARGET_SIZE){if(!hoveringOverTrash.get()){hoveringOverTrash.set(true);shouldTriggerHapticFeedback.set(true);}}else{if(hoveringOverTrash.get()){hoveringOverTrash.set(false);shouldTriggerHapticFeedback.set(true);}}}';
    tango['code'] = golf;
    var _closure1_slot22 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx13(e,manager){const{minPointers,maybeDeleteAndClearActive}=this.__closure;if(e.numberOfTouches<minPointers){manager.end();maybeDeleteAndClearActive();}}';
    tango['code'] = golf;
    var _closure1_slot23 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx14(event){const{isPanGestureActive,MIN_MOVE_DISTANCE,shouldUpdateStore,yAxisStickEnabled,xAxisStickEnabled,stickToVerticalCenter,stickToHorizontalCenter,dragPointToSnapPointDeltaX,dragPointToSnapPointDeltaY,runOnJS,maybeUpdateStore,maybeDeleteAndClearActive}=this.__closure;isPanGestureActive.set(false);const hasMoved=Math.abs(event.translationX)>MIN_MOVE_DISTANCE||Math.abs(event.translationY)>MIN_MOVE_DISTANCE;shouldUpdateStore.set(shouldUpdateStore.get()||hasMoved);yAxisStickEnabled.set(false);xAxisStickEnabled.set(false);stickToVerticalCenter.set(false);stickToHorizontalCenter.set(false);dragPointToSnapPointDeltaX.set(0);dragPointToSnapPointDeltaY.set(0);runOnJS(maybeUpdateStore)();maybeDeleteAndClearActive();}';
    tango['code'] = golf;
    var _closure1_slot24 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx15(){const{onTap,runOnJS}=this.__closure;if(onTap!=null){runOnJS(onTap)();}}';
    tango['code'] = golf;
    var _closure1_slot25 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx16(){const{isPinchGestureActive}=this.__closure;isPinchGestureActive.set(true);}';
    tango['code'] = golf;
    var _closure1_slot26 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx17(event){const{scale,originScale}=this.__closure;scale.set(originScale*event.scale);}';
    tango['code'] = golf;
    var _closure1_slot27 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx18(event){const{isPinchGestureActive,MIN_ZOOM,shouldUpdateStore,runOnJS,maybeUpdateStore}=this.__closure;isPinchGestureActive.set(false);const hasZoomed=Math.abs(event.scale-1)>MIN_ZOOM;shouldUpdateStore.set(shouldUpdateStore.get()||hasZoomed);runOnJS(maybeUpdateStore)();}';
    tango['code'] = golf;
    var _closure1_slot28 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx19(){const{isRotateGestureActive}=this.__closure;isRotateGestureActive.set(true);}';
    tango['code'] = golf;
    var _closure1_slot29 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx20(event){const{rotation,originRotate}=this.__closure;rotation.set(originRotate+event.rotation);}';
    tango['code'] = golf;
    var _closure1_slot30 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx21(event){const{isRotateGestureActive,MIN_ROTATION,shouldUpdateStore,runOnJS,maybeUpdateStore}=this.__closure;isRotateGestureActive.set(false);const hasRotation=event.rotation>MIN_ROTATION;shouldUpdateStore.set(shouldUpdateStore.get()||hasRotation);runOnJS(maybeUpdateStore)();}';
    tango['code'] = golf;
    var _closure1_slot31 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx22(){const{offsetX,offsetY,scale,rotation}=this.__closure;return[offsetX.get(),offsetY.get(),scale.get(),rotation.get()];}';
    tango['code'] = golf;
    var _closure1_slot32 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx23(current,previous){const{cheapWorkletArrayShallowEqual,transformMap,id}=this.__closure;if(cheapWorkletArrayShallowEqual(current,previous!==null&&previous!==void 0?previous:undefined))return;if(transformMap[id]!=null){transformMap[id].set([{translateX:current[0]},{translateY:current[1]},{scale:current[2]},{rotate:current[3]}]);}}';
    tango['code'] = golf;
    var _closure1_slot33 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx24(){const{activeId}=this.__closure;return activeId.get();}';
    tango['code'] = golf;
    var _closure1_slot34 = tango;
    tango = {};
    golf = "function TransformComponentGestureHandlerTsx25(current){const{gestureDetectorDimensions,getTouchableMinimalRect,dimensionCopy,id}=this.__closure;if(current===''){gestureDetectorDimensions.set(getTouchableMinimalRect(dimensionCopy.get()));}else if(current!==id){gestureDetectorDimensions.set({x:0,y:0,width:0,height:0});}}";
    tango['code'] = golf;
    var _closure1_slot35 = tango;
    tango = {};
    golf = 'function TransformComponentGestureHandlerTsx26(){const{activeId,id,screenDimensions,debug,gestureDetectorDimensions,offsetX,offsetY,scale,rotation}=this.__closure;if(activeId.get()===id){return{position:\'absolute\',left:0,top:0,width:screenDimensions.x,height:screenDimensions.y,backgroundColor:debug?\'rgba(100, 200, 300, 0.4)\':\'transparent\',transform:[]};}return{position:\'absolute\',left:gestureDetectorDimensions.get().x,top:gestureDetectorDimensions.get().y,width:gestureDetectorDimensions.get().width,height:gestureDetectorDimensions.get().height,backgroundColor:debug?\'rgba(100, 200, 300, 0.4)\':\'transparent\',transform:[{translateX:offsetX.get()},{translateY:offsetY.get()},{scale:scale.get()},{rotateZ:rotation.get()+"rad"}]};}';
    tango['code'] = golf;
    var _closure1_slot36 = tango;
    tango = 16;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/components/TransformComponentGestureHandler.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        _fun84239: for(var _fun84239_ip = 0; ; ) switch(_fun84239_ip) {
 0:
            mike = argFoo;
            result = mike.id;
            var _closure2_slot0 = result;
            config = mike.size;
            offset = mike.position;
            output = mike.transform;
            sizing = mike.debug;
            var _closure2_slot1 = sizing;
            variable36 = mike.transformMap;
            var _closure2_slot2 = variable36;
            source = mike.multiTouchPan;
            tango = undefined;
            if(!(source === tango)) { _fun84239_ip = 63; continue _fun84239 }
 61:
            source = false;
 63:
            echo = mike.activeId;
            var _closure2_slot3 = echo;
            vacuum = mike.hoveringOverTrash;
            sequence = mike.trashCanAreaRef;
            verify = mike.onTap;
            zulu = mike.onStart;
            var _closure2_slot4 = tango;
            var _closure2_slot5 = tango;
            var _closure2_slot6 = tango;
            var _closure2_slot7 = tango;
            var _closure2_slot8 = tango;
            var _closure2_slot9 = tango;
            var _closure2_slot10 = tango;
            var _closure2_slot11 = tango;
            var _closure2_slot12 = tango;
            var _closure2_slot13 = tango;
            var _closure2_slot14 = tango;
            equality = offset.x;
            _closure2_slot4 = equality;
            whiskey = offset.y;
            _closure2_slot5 = whiskey;
            status = config.width;
            _closure2_slot6 = status;
            golf = config.height;
            _closure2_slot7 = golf;
            mike = _closure1_slot0;
            options = _closure1_slot3;
            report = 8;
            yankee = options[report];
            romeo = mike.bind(tango)(yankee);
            yankee = romeo.useSharedValue;
            foxtrot = 0;
            backup = yankee.bind(romeo)(foxtrot);
            _closure2_slot8 = backup;
            yankee = options[report];
            romeo = mike.bind(tango)(yankee);
            yankee = romeo.useSharedValue;
            foxtrot = yankee.bind(romeo)(foxtrot);
            _closure2_slot9 = foxtrot;
            lima = 14;
            yankee = options[lima];
            romeo = mike.bind(tango)(yankee);
            yankee = romeo.getScaleFromTransforms2d;
            update = yankee.bind(romeo)(output);
            yankee = options[report];
            romeo = mike.bind(tango)(yankee);
            yankee = romeo.useSharedValue;
            romeo = yankee.bind(romeo)(update);
            _closure2_slot10 = romeo;
            yankee = options[lima];
            kilo = mike.bind(tango)(yankee);
            yankee = kilo.getRotateFromTransforms2d;
            output = yankee.bind(kilo)(output);
            yankee = options[report];
            kilo = mike.bind(tango)(yankee);
            yankee = kilo.useSharedValue;
            yankee = yankee.bind(kilo)(output);
            _closure2_slot11 = yankee;
            kilo = options[report];
            record = mike.bind(tango)(kilo);
            control = record.useSharedValue;
            kilo = false;
            record = control.bind(record)(kilo);
            kilo = options[report];
            context = mike.bind(tango)(kilo);
            control = context.useSharedValue;
            kilo = 7;
            kilo = options[kilo];
            papa = mike.bind(tango)(kilo);
            kilo = papa.rect;
            variable42 = papa;
            variable41 = equality;
            variable40 = whiskey;
            variable39 = status;
            variable38 = golf;
            kilo = variable42[kilo](variable41, variable40, variable39, variable38, variable37);
            kilo = control.bind(context)(kilo);
            _closure2_slot12 = kilo;
            control = function() {
                offset = _closure1_slot0;
                yankee = _closure1_slot3;
                options = 8;
                mike = yankee[options];
                verify = undefined;
                tango = offset.bind(verify)(mike);
                zulu = tango.useSharedValue;
                mike = false;
                mike = zulu.bind(tango)(mike);
                var _closure3_slot0 = mike;
                zulu = yankee[options];
                report = offset.bind(verify)(zulu);
                tango = report.useAnimatedReaction;
                zulu = function() { // Original name: t
                    mike = _closure3_slot0;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    return entity;
                };
                golf = {};
                golf['shouldTriggerHapticFeedback'] = mike;
                zulu['__closure'] = golf;
                golf = 7579777414180.0;
                zulu['__workletHash'] = golf;
                golf = _closure1_slot11;
                zulu['__initData'] = golf;
                entity = function(argFoo) { // Original name: e
                    _fun84242: for(var _fun84242_ip = 0; ; ) switch(_fun84242_ip) {
 0:
                        entity = argFoo;
                        if(!entity) { _fun84242_ip = 104; continue _fun84242 }
 6:
                        tango = _closure1_slot0;
                        report = _closure1_slot3;
                        entity = 8;
                        entity = report[entity];
                        zulu = undefined;
                        golf = tango.bind(zulu)(entity);
                        oscar = golf.runOnJS;
                        entity = 9;
                        mike = report[entity];
                        mike = tango.bind(zulu)(mike);
                        mike = mike.triggerHapticFeedback;
                        mike = oscar.bind(golf)(mike);
                        entity = report[entity];
                        entity = tango.bind(zulu)(entity);
                        entity = entity.HapticFeedbackTypes;
                        entity = entity.IMPACT_LIGHT;
                        entity = mike.bind(zulu)(entity);
                        zulu = _closure3_slot0;
                        mike = zulu.set;
                        entity = false;
                        entity = mike.bind(zulu)(entity);
 104:
                        entity = undefined;
                        return entity;
                    }
                };
                golf = {};
                options = yankee[options];
                options = offset.bind(verify)(options);
                options = options.runOnJS;
                golf['runOnJS'] = options;
                options = 9;
                romeo = yankee[options];
                romeo = offset.bind(verify)(romeo);
                romeo = romeo.triggerHapticFeedback;
                golf['triggerHapticFeedback'] = romeo;
                options = yankee[options];
                options = offset.bind(verify)(options);
                options = options.HapticFeedbackTypes;
                golf['HapticFeedbackTypes'] = options;
                golf['shouldTriggerHapticFeedback'] = mike;
                entity['__closure'] = golf;
                golf = 14676215034390.0;
                entity['__workletHash'] = golf;
                oscar = _closure1_slot12;
                entity['__initData'] = oscar;
                entity = tango.bind(report)(zulu, entity);
                entity = {};
                entity['shouldTriggerHapticFeedback'] = mike;
                return entity;
            };
            control = control.bind(tango)();
            control = control.shouldTriggerHapticFeedback;
            papa = {};
            papa['position'] = offset;
            papa['size'] = config;
            papa['gestureDetectorDimensions'] = kilo;
            papa['transformMap'] = variable36;
            papa['id'] = result;
            papa['scale'] = romeo;
            papa['rotation'] = yankee;
            papa['offsetX'] = backup;
            papa['offsetY'] = foxtrot;
            papa['originScale'] = update;
            papa['originRotate'] = output;
            papa['shouldUpdateStore'] = record;
            context = function(argFoo) {
                tango = argFoo;
                yankee = tango.position;
                var _closure3_slot0 = yankee;
                backup = tango.size;
                var _closure3_slot1 = backup;
                zulu = tango.gestureDetectorDimensions;
                var _closure3_slot2 = zulu;
                verify = tango.transformMap;
                var _closure3_slot3 = verify;
                kilo = tango.id;
                var _closure3_slot4 = kilo;
                mike = tango.scale;
                var _closure3_slot5 = mike;
                report = tango.rotation;
                var _closure3_slot6 = report;
                foxtrot = tango.offsetX;
                var _closure3_slot7 = foxtrot;
                romeo = tango.offsetY;
                var _closure3_slot8 = romeo;
                options = tango.originScale;
                var _closure3_slot9 = options;
                oscar = tango.originRotate;
                var _closure3_slot10 = oscar;
                offset = tango.shouldUpdateStore;
                var _closure3_slot11 = offset;
                tango = _closure1_slot5;
                golf = tango.useRef;
                golf = golf.bind(tango)(verify);
                var _closure3_slot12 = golf;
                verify = tango.useEffect;
                golf = function() {
                    mike = _closure3_slot12;
                    entity = _closure3_slot3;
                    mike['current'] = entity;
                    entity = undefined;
                    return entity;
                };
                golf = verify.bind(tango)(golf);
                verify = tango.useEffect;
                golf = new Array(11);
                golf[0] = kilo;
                kilo = yankee.x;
                golf[1] = kilo;
                kilo = yankee.y;
                golf[2] = kilo;
                golf[3] = backup;
                golf[4] = foxtrot;
                golf[5] = romeo;
                golf[6] = yankee;
                golf[7] = report;
                golf[8] = mike;
                golf[9] = offset;
                golf[10] = zulu;
                zulu = function() {
                    _fun84245: for(var _fun84245_ip = 0; ; ) switch(_fun84245_ip) {
 0:
                        entity = _closure3_slot0;
                        yankee = entity.x;
                        backup = entity.y;
                        entity = _closure3_slot1;
                        foxtrot = entity.width;
                        romeo = entity.height;
                        entity = _closure3_slot12;
                        tango = entity.current;
                        oscar = _closure3_slot2;
                        report = oscar.set;
                        golf = _closure1_slot0;
                        zulu = _closure1_slot3;
                        entity = 7;
                        zulu = zulu[entity];
                        entity = undefined;
                        golf = golf.bind(entity)(zulu);
                        zulu = golf.rect;
                        sizing = golf;
                        kilo = yankee;
                        zulu = sizing[zulu](kilo, backup, foxtrot, romeo, yankee);
                        zulu = report.bind(oscar)(zulu);
                        report = _closure3_slot11;
                        zulu = report.get;
                        zulu = zulu.bind(report)();
                        if(zulu) { _fun84245_ip = 252; continue _fun84245 }
 114:
                        zulu = _closure3_slot4;
                        report = tango[zulu];
                        zulu = null;
                        if(!(zulu != report)) { _fun84245_ip = 222; continue _fun84245 }
 128:
                        zulu = _closure3_slot4;
                        report = tango[zulu];
                        tango = report.set;
                        oscar = {};
                        golf = 0;
                        oscar['translateX'] = golf;
                        zulu = new Array(4);
                        zulu[0] = oscar;
                        oscar = {};
                        oscar['translateY'] = golf;
                        zulu[1] = oscar;
                        oscar = {};
                        options = _closure3_slot5;
                        golf = options.get;
                        golf = golf.bind(options)();
                        oscar['scale'] = golf;
                        zulu[2] = oscar;
                        oscar = {};
                        options = _closure3_slot6;
                        golf = options.get;
                        golf = golf.bind(options)();
                        oscar['rotate'] = golf;
                        zulu[3] = oscar;
                        zulu = tango.bind(report)(zulu);
 222:
                        report = _closure3_slot7;
                        zulu = report.set;
                        tango = 0;
                        zulu = zulu.bind(report)(tango);
                        zulu = _closure3_slot8;
                        mike = zulu.set;
                        mike = mike.bind(zulu)(tango);
 252:
                        return entity;
                    }
                };
                zulu = verify.bind(tango)(zulu, golf);
                golf = tango.useEffect;
                zulu = new Array(2);
                zulu[0] = options;
                zulu[1] = mike;
                mike = function() {
                    zulu = _closure3_slot5;
                    mike = zulu.set;
                    entity = _closure3_slot9;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                mike = golf.bind(tango)(mike, zulu);
                zulu = tango.useEffect;
                mike = new Array(2);
                mike[0] = oscar;
                mike[1] = report;
                entity = function() {
                    zulu = _closure3_slot6;
                    mike = zulu.set;
                    entity = _closure3_slot10;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                entity = zulu.bind(tango)(entity, mike);
                entity = undefined;
                return entity;
            };
            context = context.bind(tango)(papa);
            context = options[report];
            sierra = mike.bind(tango)(context);
            target = sierra.useAnimatedReaction;
            papa = function() { // Original name: Q
                zulu = _closure2_slot8;
                entity = zulu.get;
                zulu = entity.bind(zulu)();
                entity = new Array(4);
                entity[0] = zulu;
                tango = _closure2_slot9;
                zulu = tango.get;
                zulu = zulu.bind(tango)();
                entity[1] = zulu;
                tango = _closure2_slot10;
                zulu = tango.get;
                zulu = zulu.bind(tango)();
                entity[2] = zulu;
                zulu = _closure2_slot11;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity[3] = mike;
                return entity;
            };
            context = {};
            context['offsetX'] = backup;
            context['offsetY'] = foxtrot;
            context['scale'] = romeo;
            context['rotation'] = yankee;
            papa['__closure'] = context;
            context = 9069472429642.0;
            papa['__workletHash'] = context;
            context = _closure1_slot32;
            papa['__initData'] = context;
            context = function(argFoo, argBar) { // Original name: $
                _fun84249: for(var _fun84249_ip = 0; ; ) switch(_fun84249_ip) {
 0:
                    golf = argFoo;
                    oscar = argBar;
                    zulu = _closure1_slot0;
                    mike = _closure1_slot3;
                    entity = 15;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    zulu = report.cheapWorkletArrayShallowEqual;
                    tango = null;
                    options = tango != oscar;
                    mike = undefined;
                    if(!options) { _fun84249_ip = 51; continue _fun84249 }
 48:
                    mike = oscar;
 51:
                    mike = zulu.bind(report)(golf, mike);
                    if(mike) { _fun84249_ip = 176; continue _fun84249 }
 60:
                    report = _closure2_slot2;
                    zulu = _closure2_slot0;
                    zulu = report[zulu];
                    if(!(tango != zulu)) { _fun84249_ip = 176; continue _fun84249 }
 79:
                    zulu = _closure2_slot2;
                    mike = _closure2_slot0;
                    tango = zulu[mike];
                    zulu = tango.set;
                    report = {};
                    mike = 0;
                    mike = golf[mike];
                    report['translateX'] = mike;
                    mike = new Array(4);
                    mike[0] = report;
                    report = {};
                    oscar = 1;
                    oscar = golf[oscar];
                    report['translateY'] = oscar;
                    mike[1] = report;
                    report = {};
                    oscar = 2;
                    oscar = golf[oscar];
                    report['scale'] = oscar;
                    mike[2] = report;
                    report = {};
                    oscar = 3;
                    oscar = golf[oscar];
                    report['rotate'] = oscar;
                    mike[3] = report;
                    mike = zulu.bind(tango)(mike);
 176:
                    return entity;
                }
            };
            quebec = {};
            variable37 = 15;
            variable37 = options[variable37];
            variable37 = mike.bind(tango)(variable37);
            variable37 = variable37.cheapWorkletArrayShallowEqual;
            quebec['cheapWorkletArrayShallowEqual'] = variable37;
            quebec['transformMap'] = variable36;
            quebec['id'] = result;
            context['__closure'] = quebec;
            quebec = 9524238745484.0;
            context['__workletHash'] = quebec;
            quebec = _closure1_slot33;
            context['__initData'] = quebec;
            context = target.bind(sierra)(papa, context);
            context = options[report];
            target = mike.bind(tango)(context);
            papa = target.useSharedValue;
            context = {};
            context['x'] = equality;
            context['y'] = whiskey;
            context['width'] = status;
            context['height'] = golf;
            sierra = papa.bind(target)(context);
            _closure2_slot13 = sierra;
            target = _closure1_slot5;
            papa = target.useEffect;
            context = new Array(5);
            context[0] = equality;
            context[1] = whiskey;
            context[2] = status;
            context[3] = golf;
            context[4] = sierra;
            golf = function() {
                zulu = _closure2_slot13;
                mike = zulu.set;
                entity = {};
                report = _closure2_slot4;
                entity['x'] = report;
                report = _closure2_slot5;
                entity['y'] = report;
                report = _closure2_slot6;
                entity['width'] = report;
                tango = _closure2_slot7;
                entity['height'] = tango;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            golf = papa.bind(target)(golf, context);
            golf = options[report];
            target = mike.bind(tango)(golf);
            papa = target.useAnimatedReaction;
            context = function() { // Original name: pe
                mike = _closure2_slot3;
                entity = mike.get;
                entity = entity.bind(mike)();
                return entity;
            };
            golf = {};
            golf['activeId'] = echo;
            context['__closure'] = golf;
            golf = 15236705266931.0;
            context['__workletHash'] = golf;
            golf = _closure1_slot34;
            context['__initData'] = golf;
            golf = function(argFoo) { // Original name: fe
                _fun84252: for(var _fun84252_ip = 0; ; ) switch(_fun84252_ip) {
 0:
                    zulu = argFoo;
                    entity = '';
                    if(!(entity !== zulu)) { _fun84252_ip = 48; continue _fun84252 }
 11:
                    mike = _closure2_slot0;
                    if(!(zulu !== mike)) { _fun84252_ip = 114; continue _fun84252 }
 22:
                    zulu = _closure2_slot12;
                    mike = zulu.set;
                    entity = {'x': 0, 'y': 0, 'width': 0, 'height': 0};
                    entity = mike.bind(zulu)(entity);
                    _fun84252_ip = 114; continue _fun84252;
 48:
                    zulu = _closure2_slot12;
                    mike = zulu.set;
                    oscar = _closure1_slot0;
                    report = _closure1_slot3;
                    tango = 14;
                    report = report[tango];
                    tango = undefined;
                    report = oscar.bind(tango)(report);
                    tango = report.getTouchableMinimalRect;
                    oscar = _closure2_slot13;
                    entity = oscar.get;
                    entity = entity.bind(oscar)();
                    entity = tango.bind(report)(entity);
                    entity = mike.bind(zulu)(entity);
 114:
                    entity = undefined;
                    return entity;
                }
            };
            status = {};
            status['gestureDetectorDimensions'] = kilo;
            lima = options[lima];
            lima = mike.bind(tango)(lima);
            lima = lima.getTouchableMinimalRect;
            status['getTouchableMinimalRect'] = lima;
            status['dimensionCopy'] = sierra;
            status['id'] = result;
            golf['__closure'] = status;
            status = 10589703698344.0;
            golf['__workletHash'] = status;
            status = _closure1_slot35;
            golf['__initData'] = status;
            golf = papa.bind(target)(context, golf);
            golf = {};
            golf['shouldUpdateStore'] = record;
            golf['activeId'] = echo;
            golf['id'] = result;
            golf['size'] = config;
            golf['offsetX'] = backup;
            golf['offsetY'] = foxtrot;
            golf['trashCanAreaRef'] = sequence;
            golf['hoveringOverTrash'] = vacuum;
            golf['shouldTriggerHapticFeedback'] = control;
            golf['multiTouchPan'] = source;
            golf['scale'] = romeo;
            golf['originScale'] = update;
            golf['rotation'] = yankee;
            golf['originRotate'] = output;
            golf['position'] = offset;
            golf['onTap'] = verify;
            golf['onStart'] = zulu;
            zulu = function(argFoo) {
                _fun84253: for(var _fun84253_ip = 0; ; ) switch(_fun84253_ip) {
 0:
                    tango = argFoo;
                    mike = tango.shouldUpdateStore;
                    var _closure3_slot0 = mike;
                    sequence = tango.activeId;
                    var _closure3_slot1 = sequence;
                    output = tango.id;
                    var _closure3_slot2 = output;
                    zulu = tango.size;
                    var _closure3_slot3 = zulu;
                    status = tango.offsetX;
                    var _closure3_slot4 = status;
                    yankee = tango.offsetY;
                    var _closure3_slot5 = yankee;
                    vacuum = tango.hoveringOverTrash;
                    var _closure3_slot6 = vacuum;
                    zulu = tango.shouldTriggerHapticFeedback;
                    var _closure3_slot7 = zulu;
                    options = tango.multiTouchPan;
                    zulu = tango.scale;
                    var _closure3_slot8 = zulu;
                    backup = tango.originScale;
                    var _closure3_slot9 = backup;
                    verify = tango.rotation;
                    var _closure3_slot10 = verify;
                    romeo = tango.originRotate;
                    var _closure3_slot11 = romeo;
                    oscar = tango.trashCanAreaRef;
                    var _closure3_slot12 = oscar;
                    lima = tango.position;
                    var _closure3_slot13 = lima;
                    report = tango.onTap;
                    var _closure3_slot14 = report;
                    tango = tango.onStart;
                    var _closure3_slot15 = tango;
                    context = undefined;
                    var _closure3_slot36 = context;
                    var _closure3_slot37 = context;
                    var _closure3_slot38 = context;
                    var _closure3_slot39 = context;
                    var _closure3_slot40 = context;
                    record = _closure1_slot0;
                    papa = _closure1_slot3;
                    config = 8;
                    golf = papa[config];
                    foxtrot = record.bind(context)(golf);
                    offset = foxtrot.useSharedValue;
                    golf = '';
                    echo = offset.bind(foxtrot)(golf);
                    var _closure3_slot16 = echo;
                    golf = papa[config];
                    foxtrot = record.bind(context)(golf);
                    offset = foxtrot.useSharedValue;
                    sizing = 0;
                    golf = {'x': 0, 'y': 0};
                    target = offset.bind(foxtrot)(golf);
                    var _closure3_slot17 = target;
                    golf = papa[config];
                    offset = record.bind(context)(golf);
                    golf = offset.useSharedValue;
                    result = false;
                    sierra = golf.bind(offset)(result);
                    var _closure3_slot18 = sierra;
                    golf = papa[config];
                    offset = record.bind(context)(golf);
                    golf = offset.useSharedValue;
                    foxtrot = golf.bind(offset)(result);
                    var _closure3_slot19 = foxtrot;
                    golf = papa[config];
                    offset = record.bind(context)(golf);
                    golf = offset.useSharedValue;
                    offset = golf.bind(offset)(result);
                    var _closure3_slot20 = offset;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    golf = golf.bind(kilo)(sizing);
                    var _closure3_slot21 = golf;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    golf = golf.bind(kilo)(sizing);
                    var _closure3_slot22 = golf;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    golf = golf.bind(kilo)(result);
                    var _closure3_slot23 = golf;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    golf = golf.bind(kilo)(result);
                    var _closure3_slot24 = golf;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    quebec = golf.bind(kilo)(sizing);
                    var _closure3_slot25 = quebec;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    equality = golf.bind(kilo)(sizing);
                    var _closure3_slot26 = equality;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    golf = golf.bind(kilo)(result);
                    var _closure3_slot27 = golf;
                    golf = papa[config];
                    kilo = record.bind(context)(golf);
                    golf = kilo.useSharedValue;
                    golf = golf.bind(kilo)(result);
                    var _closure3_slot28 = golf;
                    result = _closure1_slot8;
                    golf = 10;
                    golf = papa[golf];
                    golf = record.bind(context)(golf);
                    kilo = golf.shallow;
                    golf = function(argFoo) {
                        mike = argFoo;
                        zulu = mike.setXAxisOpacity;
                        entity = new Array(2);
                        entity[0] = zulu;
                        mike = mike.setYAxisOpacity;
                        entity[1] = mike;
                        return entity;
                    };
                    result = result.bind(context)(golf, kilo);
                    kilo = _closure1_slot4;
                    golf = 2;
                    kilo = kilo.bind(context)(result, golf);
                    source = kilo[sizing];
                    var _closure3_slot29 = source;
                    sizing = 1;
                    control = kilo[sizing];
                    var _closure3_slot30 = control;
                    kilo = papa[config];
                    whiskey = record.bind(context)(kilo);
                    update = whiskey.useAnimatedReaction;
                    result = function() { // Original name: W
                        mike = _closure3_slot25;
                        entity = mike.get;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    kilo = {};
                    kilo['xAxisOpacity'] = quebec;
                    result['__closure'] = kilo;
                    kilo = 14228702998022.0;
                    result['__workletHash'] = kilo;
                    kilo = _closure1_slot13;
                    result['__initData'] = kilo;
                    kilo = function(argFoo) { // Original name: K
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.runOnJS;
                        mike = _closure3_slot29;
                        zulu = zulu.bind(tango)(mike);
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    quebec = {};
                    variable36 = papa[config];
                    variable36 = record.bind(context)(variable36);
                    variable36 = variable36.runOnJS;
                    quebec['runOnJS'] = variable36;
                    quebec['setXAxisOpacity'] = source;
                    kilo['__closure'] = quebec;
                    quebec = 4709153678654.0;
                    kilo['__workletHash'] = quebec;
                    quebec = _closure1_slot14;
                    kilo['__initData'] = quebec;
                    kilo = update.bind(whiskey)(result, kilo);
                    kilo = papa[config];
                    whiskey = record.bind(context)(kilo);
                    update = whiskey.useAnimatedReaction;
                    result = function() { // Original name: j
                        mike = _closure3_slot26;
                        entity = mike.get;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    kilo = {};
                    kilo['yAxisOpacity'] = equality;
                    result['__closure'] = kilo;
                    kilo = 13221376372096.0;
                    result['__workletHash'] = kilo;
                    kilo = _closure1_slot15;
                    result['__initData'] = kilo;
                    kilo = function(argFoo) { // Original name: q
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 8;
                        mike = mike[entity];
                        entity = undefined;
                        tango = zulu.bind(entity)(mike);
                        zulu = tango.runOnJS;
                        mike = _closure3_slot30;
                        zulu = zulu.bind(tango)(mike);
                        mike = argFoo;
                        mike = zulu.bind(entity)(mike);
                        return entity;
                    };
                    equality = {};
                    quebec = papa[config];
                    quebec = record.bind(context)(quebec);
                    quebec = quebec.runOnJS;
                    equality['runOnJS'] = quebec;
                    equality['setYAxisOpacity'] = control;
                    kilo['__closure'] = equality;
                    equality = 1066618534652.0;
                    kilo['__workletHash'] = equality;
                    equality = _closure1_slot16;
                    kilo['__initData'] = equality;
                    kilo = update.bind(whiskey)(result, kilo);
                    update = _closure1_slot6;
                    result = update.get;
                    kilo = 'screen';
                    kilo = result.bind(update)(kilo);
                    result = kilo.width;
                    kilo = kilo.height;
                    result = result / golf;
                    var _closure3_slot31 = result;
                    kilo = kilo / golf;
                    var _closure3_slot32 = kilo;
                    update = _closure1_slot5;
                    result = update.useCallback;
                    kilo = new Array(11);
                    kilo[0] = output;
                    whiskey = lima.x;
                    kilo[1] = whiskey;
                    lima = lima.y;
                    kilo[2] = lima;
                    kilo[3] = sierra;
                    kilo[4] = foxtrot;
                    kilo[5] = offset;
                    kilo[6] = status;
                    kilo[7] = yankee;
                    kilo[8] = verify;
                    kilo[9] = zulu;
                    kilo[10] = mike;
                    yankee = function() {
                        _fun84259: for(var _fun84259_ip = 0; ; ) switch(_fun84259_ip) {
 0:
                            zulu = _closure3_slot0;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            if(!mike) { _fun84259_ip = 281; continue _fun84259 }
 22:
                            zulu = _closure3_slot18;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            if(mike) { _fun84259_ip = 281; continue _fun84259 }
 41:
                            zulu = _closure3_slot19;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            if(mike) { _fun84259_ip = 281; continue _fun84259 }
 60:
                            zulu = _closure3_slot20;
                            mike = zulu.get;
                            mike = mike.bind(zulu)();
                            if(mike) { _fun84259_ip = 281; continue _fun84259 }
 79:
                            oscar = {};
                            mike = {};
                            zulu = _closure3_slot13;
                            golf = zulu.x;
                            report = _closure3_slot4;
                            tango = report.get;
                            tango = tango.bind(report)();
                            tango = golf + tango;
                            mike['x'] = tango;
                            golf = zulu.y;
                            tango = _closure3_slot5;
                            zulu = tango.get;
                            zulu = zulu.bind(tango)();
                            zulu = golf + zulu;
                            mike['y'] = zulu;
                            oscar['position'] = mike;
                            zulu = {};
                            golf = _closure3_slot10;
                            mike = golf.get;
                            mike = mike.bind(golf)();
                            zulu['rotate'] = mike;
                            mike = new Array(2);
                            mike[0] = zulu;
                            zulu = {};
                            options = _closure3_slot8;
                            golf = options.get;
                            golf = golf.bind(options)();
                            zulu['scale'] = golf;
                            mike[1] = zulu;
                            oscar['transform'] = mike;
                            mike = report.set;
                            zulu = 0;
                            mike = mike.bind(report)(zulu);
                            mike = tango.set;
                            mike = mike.bind(tango)(zulu);
                            tango = _closure1_slot2;
                            zulu = _closure1_slot3;
                            mike = 11;
                            zulu = zulu[mike];
                            mike = undefined;
                            report = tango.bind(mike)(zulu);
                            tango = report.updateComponent;
                            zulu = _closure3_slot2;
                            mike = true;
                            mike = tango.bind(report)(zulu, oscar, mike);
                            zulu = _closure3_slot0;
                            mike = zulu.set;
                            entity = false;
                            entity = mike.bind(zulu)(entity);
 281:
                            entity = undefined;
                            return entity;
                        }
                    };
                    yankee = result.bind(update)(yankee, kilo);
                    var _closure3_slot33 = yankee;
                    result = update.useEffect;
                    kilo = new Array(2);
                    kilo[0] = target;
                    kilo[1] = oscar;
                    oscar = function() {
                        _fun84260: for(var _fun84260_ip = 0; ; ) switch(_fun84260_ip) {
 0:
                            entity = _closure3_slot12;
                            zulu = entity.current;
                            entity = null;
                            if(!(entity != zulu)) { _fun84260_ip = 38; continue _fun84260 }
 18:
                            mike = zulu.measureInWindow;
                            entity = function(argFoo, argBar) {
                                zulu = _closure3_slot17;
                                mike = zulu.set;
                                entity = {};
                                tango = argFoo;
                                entity['x'] = tango;
                                tango = argBar;
                                entity['y'] = tango;
                                entity = mike.bind(zulu)(entity);
                                entity = undefined;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
 38:
                            entity = undefined;
                            return entity;
                        }
                    };
                    oscar = result.bind(update)(oscar, kilo);
                    oscar = papa[config];
                    target = record.bind(context)(oscar);
                    result = target.useAnimatedReaction;
                    kilo = function() { // Original name: Te
                        mike = _closure3_slot16;
                        entity = mike.get;
                        entity = entity.bind(mike)();
                        return entity;
                    };
                    oscar = {};
                    oscar['shouldDeleteId'] = echo;
                    kilo['__closure'] = oscar;
                    oscar = 11240701250690.0;
                    kilo['__workletHash'] = oscar;
                    oscar = _closure1_slot17;
                    kilo['__initData'] = oscar;
                    oscar = function(argFoo) { // Original name: pe
                        _fun84263: for(var _fun84263_ip = 0; ; ) switch(_fun84263_ip) {
 0:
                            tango = argFoo;
                            zulu = '';
                            if(!(zulu !== tango)) { _fun84263_ip = 152; continue _fun84263 }
 14:
                            golf = _closure1_slot0;
                            options = _closure1_slot3;
                            entity = 8;
                            report = options[entity];
                            mike = undefined;
                            offset = golf.bind(mike)(report);
                            verify = offset.runOnJS;
                            report = 9;
                            oscar = options[report];
                            oscar = golf.bind(mike)(oscar);
                            oscar = oscar.triggerHapticFeedback;
                            oscar = verify.bind(offset)(oscar);
                            report = options[report];
                            report = golf.bind(mike)(report);
                            report = report.HapticFeedbackTypes;
                            report = report.IMPACT_LIGHT;
                            report = oscar.bind(mike)(report);
                            entity = options[entity];
                            oscar = golf.bind(mike)(entity);
                            report = oscar.runOnJS;
                            entity = 11;
                            entity = options[entity];
                            entity = golf.bind(mike)(entity);
                            entity = entity.removeComponent;
                            entity = report.bind(oscar)(entity);
                            entity = entity.bind(mike)(tango);
                            mike = _closure3_slot16;
                            entity = mike.set;
                            entity = entity.bind(mike)(zulu);
 152:
                            entity = undefined;
                            return entity;
                        }
                    };
                    status = {};
                    sierra = papa[config];
                    sierra = record.bind(context)(sierra);
                    sierra = sierra.runOnJS;
                    status['runOnJS'] = sierra;
                    sierra = 9;
                    lima = papa[sierra];
                    lima = record.bind(context)(lima);
                    lima = lima.triggerHapticFeedback;
                    status['triggerHapticFeedback'] = lima;
                    sierra = papa[sierra];
                    sierra = record.bind(context)(sierra);
                    sierra = sierra.HapticFeedbackTypes;
                    status['HapticFeedbackTypes'] = sierra;
                    sierra = 11;
                    sierra = papa[sierra];
                    sierra = record.bind(context)(sierra);
                    sierra = sierra.removeComponent;
                    status['removeComponent'] = sierra;
                    status['shouldDeleteId'] = echo;
                    oscar['__closure'] = status;
                    status = 3179081026543.0;
                    oscar['__workletHash'] = status;
                    status = _closure1_slot18;
                    oscar['__initData'] = status;
                    oscar = result.bind(target)(kilo, oscar);
                    result = update.useCallback;
                    kilo = function() { // Original name: Oe
                        _fun84264: for(var _fun84264_ip = 0; ; ) switch(_fun84264_ip) {
 0:
                            zulu = _closure3_slot1;
                            entity = zulu.get;
                            zulu = entity.bind(zulu)();
                            entity = _closure3_slot2;
                            entity = zulu === entity;
                            if(!entity) { _fun84264_ip = 40; continue _fun84264 }
 27:
                            tango = _closure3_slot6;
                            zulu = tango.get;
                            entity = zulu.bind(tango)();
 40:
                            if(!entity) { _fun84264_ip = 77; continue _fun84264 }
 43:
                            tango = _closure3_slot16;
                            zulu = tango.set;
                            entity = _closure3_slot2;
                            entity = zulu.bind(tango)(entity);
                            tango = _closure3_slot6;
                            zulu = tango.set;
                            entity = false;
                            entity = zulu.bind(tango)(entity);
 77:
                            tango = _closure3_slot1;
                            zulu = tango.set;
                            entity = '';
                            entity = zulu.bind(tango)(entity);
                            report = _closure1_slot0;
                            oscar = _closure1_slot3;
                            tango = 8;
                            zulu = oscar[tango];
                            entity = undefined;
                            options = report.bind(entity)(zulu);
                            golf = options.runOnJS;
                            zulu = _closure3_slot29;
                            golf = golf.bind(options)(zulu);
                            zulu = 0;
                            golf = golf.bind(entity)(zulu);
                            tango = oscar[tango];
                            report = report.bind(entity)(tango);
                            tango = report.runOnJS;
                            mike = _closure3_slot30;
                            mike = tango.bind(report)(mike);
                            mike = mike.bind(entity)(zulu);
                            return entity;
                        }
                    };
                    oscar = {};
                    oscar['activeId'] = sequence;
                    oscar['id'] = output;
                    oscar['hoveringOverTrash'] = vacuum;
                    oscar['shouldDeleteId'] = echo;
                    config = papa[config];
                    config = record.bind(context)(config);
                    config = config.runOnJS;
                    oscar['runOnJS'] = config;
                    oscar['setXAxisOpacity'] = source;
                    oscar['setYAxisOpacity'] = control;
                    kilo['__closure'] = oscar;
                    oscar = 8122530590483.0;
                    kilo['__workletHash'] = oscar;
                    oscar = _closure1_slot19;
                    kilo['__initData'] = oscar;
                    oscar = new Array(6);
                    oscar[0] = output;
                    oscar[1] = sequence;
                    oscar[2] = vacuum;
                    oscar[3] = control;
                    oscar[4] = source;
                    oscar[5] = echo;
                    oscar = result.bind(update)(kilo, oscar);
                    var _closure3_slot34 = oscar;
                    echo = update.useCallback;
                    result = new Array(1);
                    result[0] = output;
                    kilo = function() {
                        _fun84265: for(var _fun84265_ip = 0; ; ) switch(_fun84265_ip) {
 0:
                            tango = _closure1_slot9;
                            zulu = tango.getComponentById;
                            entity = _closure3_slot2;
                            entity = zulu.bind(tango)(entity);
                            tango = entity.type;
                            oscar = _closure1_slot0;
                            zulu = _closure1_slot3;
                            entity = 12;
                            zulu = zulu[entity];
                            entity = undefined;
                            zulu = oscar.bind(entity)(zulu);
                            zulu = zulu.RemixElement;
                            zulu = zulu.BACKDROP;
                            if(!(tango !== zulu)) { _fun84265_ip = 111; continue _fun84265 }
 70:
                            zulu = _closure1_slot2;
                            tango = _closure1_slot3;
                            mike = 11;
                            mike = tango[mike];
                            tango = zulu.bind(entity)(mike);
                            zulu = tango.bringToFront;
                            mike = {};
                            report = _closure3_slot2;
                            mike['id'] = report;
                            mike = zulu.bind(tango)(mike);
 111:
                            return entity;
                        }
                    };
                    kilo = echo.bind(update)(kilo, result);
                    var _closure3_slot35 = kilo;
                    if(!options) { _fun84253_ip = 1372; continue _fun84253 }
 1369:
                    sizing = golf;
 1372:
                    _closure3_slot36 = sizing;
                    tango = _closure1_slot5;
                    options = tango.useMemo;
                    golf = new Array(5);
                    golf[0] = output;
                    golf[1] = sizing;
                    golf[2] = kilo;
                    golf[3] = oscar;
                    golf[4] = yankee;
                    oscar = function() {
                        offset = _closure1_slot0;
                        yankee = _closure1_slot3;
                        mike = 13;
                        mike = yankee[mike];
                        verify = undefined;
                        mike = offset.bind(verify)(mike);
                        zulu = mike.Gesture;
                        mike = zulu.Pan;
                        report = mike.bind(zulu)();
                        zulu = report.minPointers;
                        mike = _closure3_slot36;
                        report = zulu.bind(report)(mike);
                        zulu = report.averageTouches;
                        mike = true;
                        report = zulu.bind(report)(mike);
                        zulu = report.onTouchesDown;
                        mike = function(argFoo) { // Original name: c
                            _fun84267: for(var _fun84267_ip = 0; ; ) switch(_fun84267_ip) {
 0:
                                entity = argFoo;
                                zulu = entity.numberOfTouches;
                                mike = _closure3_slot36;
                                if(!(!(zulu < mike))) { _fun84267_ip = 158; continue _fun84267 }
 23:
                                zulu = _closure3_slot1;
                                mike = zulu.get;
                                zulu = mike.bind(zulu)();
                                mike = '';
                                if(!(mike === zulu)) { _fun84267_ip = 105; continue _fun84267 }
 44:
                                tango = _closure3_slot1;
                                zulu = tango.set;
                                mike = _closure3_slot2;
                                mike = zulu.bind(tango)(mike);
                                tango = _closure1_slot0;
                                zulu = _closure1_slot3;
                                mike = 8;
                                mike = zulu[mike];
                                zulu = undefined;
                                report = tango.bind(zulu)(mike);
                                tango = report.runOnJS;
                                mike = _closure3_slot35;
                                mike = tango.bind(report)(mike);
                                mike = mike.bind(zulu)();
 105:
                                zulu = _closure3_slot15;
                                mike = null;
                                if(!(mike != zulu)) { _fun84267_ip = 158; continue _fun84267 }
 115:
                                tango = _closure1_slot0;
                                zulu = _closure1_slot3;
                                mike = 8;
                                zulu = zulu[mike];
                                mike = undefined;
                                tango = tango.bind(mike)(zulu);
                                zulu = tango.runOnJS;
                                entity = _closure3_slot15;
                                entity = zulu.bind(tango)(entity);
                                entity = entity.bind(mike)();
 158:
                                entity = undefined;
                                return entity;
                            }
                        };
                        oscar = {};
                        options = _closure3_slot36;
                        oscar['minPointers'] = options;
                        options = _closure3_slot1;
                        oscar['activeId'] = options;
                        options = _closure3_slot2;
                        oscar['id'] = options;
                        options = 8;
                        romeo = yankee[options];
                        romeo = offset.bind(verify)(romeo);
                        romeo = romeo.runOnJS;
                        oscar['runOnJS'] = romeo;
                        romeo = _closure3_slot35;
                        oscar['maybeBringToFront'] = romeo;
                        romeo = _closure3_slot15;
                        oscar['onStart'] = romeo;
                        mike['__closure'] = oscar;
                        oscar = 14603587203968.0;
                        mike['__workletHash'] = oscar;
                        oscar = _closure1_slot20;
                        mike['__initData'] = oscar;
                        report = zulu.bind(report)(mike);
                        zulu = report.onStart;
                        mike = function() { // Original name: o
                            zulu = _closure3_slot18;
                            mike = zulu.set;
                            entity = true;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        oscar = {};
                        result = _closure3_slot18;
                        oscar['isPanGestureActive'] = result;
                        mike['__closure'] = oscar;
                        oscar = 2177726615453.0;
                        mike['__workletHash'] = oscar;
                        oscar = _closure1_slot21;
                        mike['__initData'] = oscar;
                        report = zulu.bind(report)(mike);
                        zulu = report.onUpdate;
                        mike = function(argFoo) { // Original name: n
                            _fun84269: for(var _fun84269_ip = 0; ; ) switch(_fun84269_ip) {
 0:
                                zulu = argFoo;
                                oscar = _closure3_slot13;
                                tango = oscar.x;
                                report = _closure3_slot4;
                                mike = report.get;
                                mike = mike.bind(report)();
                                report = tango + mike;
                                mike = _closure3_slot3;
                                tango = mike.width;
                                verify = 2;
                                tango = tango / verify;
                                tango = report + tango;
                                golf = oscar.x;
                                report = zulu.translationX;
                                golf = golf + report;
                                report = mike.width;
                                report = report / verify;
                                golf = golf + report;
                                report = _closure3_slot31;
                                oscar = oscar.x;
                                mike = mike.width;
                                mike = mike / verify;
                                mike = oscar + mike;
                                report = report - mike;
                                oscar = _closure3_slot24;
                                mike = oscar.get;
                                mike = mike.bind(oscar)();
                                if(mike) { _fun84269_ip = 418; continue _fun84269 }
 125:
                                oscar = _closure3_slot27;
                                mike = oscar.get;
                                mike = mike.bind(oscar)();
                                if(!mike) { _fun84269_ip = 208; continue _fun84269 }
 141:
                                mike = global;
                                options = mike.Math;
                                oscar = options.abs;
                                mike = zulu.velocityY;
                                oscar = oscar.bind(options)(mike);
                                mike = 300;
                                if(!(oscar < mike)) { _fun84269_ip = 208; continue _fun84269 }
 176:
                                mike = _closure3_slot31;
                                if(!(tango <= mike)) { _fun84269_ip = 192; continue _fun84269 }
 184:
                                mike = _closure3_slot31;
                                if(!(!(golf > mike))) { _fun84269_ip = 266; continue _fun84269 }
 192:
                                mike = _closure3_slot31;
                                if(!(tango >= mike)) { _fun84269_ip = 208; continue _fun84269 }
 200:
                                mike = _closure3_slot31;
                                if(!(!(golf < mike))) { _fun84269_ip = 266; continue _fun84269 }
 208:
                                oscar = _closure3_slot27;
                                tango = oscar.set;
                                mike = true;
                                mike = tango.bind(oscar)(mike);
                                oscar = _closure3_slot4;
                                tango = oscar.set;
                                options = zulu.translationX;
                                offset = _closure3_slot21;
                                mike = offset.get;
                                mike = mike.bind(offset)();
                                mike = options - mike;
                                mike = tango.bind(oscar)(mike);
                                _fun84269_ip = 592; continue _fun84269;
 266:
                                options = _closure1_slot0;
                                offset = _closure1_slot3;
                                mike = 8;
                                mike = offset[mike];
                                oscar = undefined;
                                romeo = options.bind(oscar)(mike);
                                yankee = romeo.runOnJS;
                                mike = 9;
                                tango = offset[mike];
                                tango = options.bind(oscar)(tango);
                                tango = tango.triggerHapticFeedback;
                                tango = yankee.bind(romeo)(tango);
                                mike = offset[mike];
                                mike = options.bind(oscar)(mike);
                                mike = mike.HapticFeedbackTypes;
                                mike = mike.IMPACT_LIGHT;
                                mike = tango.bind(oscar)(mike);
                                tango = _closure3_slot4;
                                mike = tango.set;
                                mike = mike.bind(tango)(report);
                                oscar = _closure3_slot21;
                                tango = oscar.set;
                                mike = _closure3_slot31;
                                mike = golf - mike;
                                mike = tango.bind(oscar)(mike);
                                oscar = _closure3_slot24;
                                tango = oscar.set;
                                mike = true;
                                mike = tango.bind(oscar)(mike);
                                oscar = _closure3_slot27;
                                tango = oscar.set;
                                mike = false;
                                mike = tango.bind(oscar)(mike);
                                _fun84269_ip = 592; continue _fun84269;
 418:
                                mike = global;
                                options = mike.Math;
                                oscar = options.abs;
                                tango = _closure3_slot31;
                                tango = golf - tango;
                                oscar = oscar.bind(options)(tango);
                                tango = 15;
                                if(!(!(oscar > tango))) { _fun84269_ip = 523; continue _fun84269 }
 452:
                                oscar = mike.Math;
                                tango = oscar.abs;
                                mike = zulu.velocityX;
                                tango = tango.bind(oscar)(mike);
                                mike = 300;
                                if(!(!(tango > mike))) { _fun84269_ip = 523; continue _fun84269 }
 485:
                                oscar = _closure3_slot21;
                                tango = oscar.set;
                                mike = _closure3_slot31;
                                mike = golf - mike;
                                mike = tango.bind(oscar)(mike);
                                tango = _closure3_slot4;
                                mike = tango.set;
                                mike = mike.bind(tango)(report);
                                _fun84269_ip = 592; continue _fun84269;
 523:
                                report = _closure3_slot24;
                                tango = report.set;
                                mike = false;
                                mike = tango.bind(report)(mike);
                                report = _closure3_slot27;
                                tango = report.set;
                                mike = true;
                                mike = tango.bind(report)(mike);
                                report = _closure3_slot4;
                                tango = report.set;
                                oscar = zulu.translationX;
                                golf = _closure3_slot21;
                                mike = golf.get;
                                mike = mike.bind(golf)();
                                mike = oscar - mike;
                                mike = tango.bind(report)(mike);
 592:
                                oscar = _closure3_slot13;
                                tango = oscar.y;
                                report = _closure3_slot5;
                                mike = report.get;
                                mike = mike.bind(report)();
                                report = tango + mike;
                                mike = _closure3_slot3;
                                tango = mike.height;
                                tango = tango / verify;
                                tango = report + tango;
                                golf = oscar.y;
                                report = zulu.translationY;
                                golf = golf + report;
                                report = mike.height;
                                report = report / verify;
                                golf = golf + report;
                                report = _closure3_slot32;
                                oscar = oscar.y;
                                mike = mike.height;
                                mike = mike / verify;
                                mike = oscar + mike;
                                report = report - mike;
                                oscar = _closure3_slot23;
                                mike = oscar.get;
                                mike = mike.bind(oscar)();
                                if(mike) { _fun84269_ip = 1001; continue _fun84269 }
 708:
                                oscar = _closure3_slot28;
                                mike = oscar.get;
                                mike = mike.bind(oscar)();
                                if(!mike) { _fun84269_ip = 791; continue _fun84269 }
 724:
                                mike = global;
                                options = mike.Math;
                                oscar = options.abs;
                                mike = zulu.velocityY;
                                oscar = oscar.bind(options)(mike);
                                mike = 300;
                                if(!(oscar < mike)) { _fun84269_ip = 791; continue _fun84269 }
 759:
                                mike = _closure3_slot32;
                                if(!(tango >= mike)) { _fun84269_ip = 775; continue _fun84269 }
 767:
                                mike = _closure3_slot32;
                                if(!(!(golf < mike))) { _fun84269_ip = 849; continue _fun84269 }
 775:
                                mike = _closure3_slot32;
                                if(!(tango <= mike)) { _fun84269_ip = 791; continue _fun84269 }
 783:
                                mike = _closure3_slot32;
                                if(!(!(golf > mike))) { _fun84269_ip = 849; continue _fun84269 }
 791:
                                oscar = _closure3_slot28;
                                tango = oscar.set;
                                mike = true;
                                mike = tango.bind(oscar)(mike);
                                oscar = _closure3_slot5;
                                tango = oscar.set;
                                options = zulu.translationY;
                                offset = _closure3_slot22;
                                mike = offset.get;
                                mike = mike.bind(offset)();
                                mike = options - mike;
                                mike = tango.bind(oscar)(mike);
                                _fun84269_ip = 1175; continue _fun84269;
 849:
                                options = _closure1_slot0;
                                offset = _closure1_slot3;
                                mike = 8;
                                mike = offset[mike];
                                oscar = undefined;
                                romeo = options.bind(oscar)(mike);
                                yankee = romeo.runOnJS;
                                mike = 9;
                                tango = offset[mike];
                                tango = options.bind(oscar)(tango);
                                tango = tango.triggerHapticFeedback;
                                tango = yankee.bind(romeo)(tango);
                                mike = offset[mike];
                                mike = options.bind(oscar)(mike);
                                mike = mike.HapticFeedbackTypes;
                                mike = mike.IMPACT_LIGHT;
                                mike = tango.bind(oscar)(mike);
                                tango = _closure3_slot5;
                                mike = tango.set;
                                mike = mike.bind(tango)(report);
                                oscar = _closure3_slot22;
                                tango = oscar.set;
                                mike = _closure3_slot32;
                                mike = golf - mike;
                                mike = tango.bind(oscar)(mike);
                                oscar = _closure3_slot23;
                                tango = oscar.set;
                                mike = true;
                                mike = tango.bind(oscar)(mike);
                                oscar = _closure3_slot28;
                                tango = oscar.set;
                                mike = false;
                                mike = tango.bind(oscar)(mike);
                                _fun84269_ip = 1175; continue _fun84269;
 1001:
                                mike = global;
                                options = mike.Math;
                                oscar = options.abs;
                                tango = _closure3_slot32;
                                tango = golf - tango;
                                oscar = oscar.bind(options)(tango);
                                tango = 15;
                                if(!(!(oscar > tango))) { _fun84269_ip = 1106; continue _fun84269 }
 1035:
                                oscar = mike.Math;
                                tango = oscar.abs;
                                mike = zulu.velocityY;
                                tango = tango.bind(oscar)(mike);
                                mike = 300;
                                if(!(!(tango > mike))) { _fun84269_ip = 1106; continue _fun84269 }
 1068:
                                oscar = _closure3_slot22;
                                tango = oscar.set;
                                mike = _closure3_slot32;
                                mike = golf - mike;
                                mike = tango.bind(oscar)(mike);
                                tango = _closure3_slot5;
                                mike = tango.set;
                                mike = mike.bind(tango)(report);
                                _fun84269_ip = 1175; continue _fun84269;
 1106:
                                report = _closure3_slot23;
                                tango = report.set;
                                mike = false;
                                mike = tango.bind(report)(mike);
                                report = _closure3_slot28;
                                tango = report.set;
                                mike = true;
                                mike = tango.bind(report)(mike);
                                report = _closure3_slot5;
                                tango = report.set;
                                oscar = zulu.translationY;
                                golf = _closure3_slot22;
                                mike = golf.get;
                                mike = mike.bind(golf)();
                                mike = oscar - mike;
                                mike = tango.bind(report)(mike);
 1175:
                                mike = global;
                                oscar = mike.Math;
                                report = oscar.abs;
                                tango = _closure3_slot13;
                                golf = tango.x;
                                options = _closure3_slot4;
                                tango = options.get;
                                tango = tango.bind(options)();
                                golf = golf + tango;
                                tango = _closure3_slot3;
                                tango = tango.width;
                                tango = tango / verify;
                                golf = golf + tango;
                                tango = _closure3_slot31;
                                tango = golf - tango;
                                offset = report.bind(oscar)(tango);
                                options = _closure3_slot26;
                                oscar = options.set;
                                golf = 50;
                                yankee = offset < golf;
                                tango = 0;
                                if(!yankee) { _fun84269_ip = 1277; continue _fun84269 }
 1266:
                                yankee = offset / golf;
                                offset = 1;
                                tango = offset - yankee;
 1277:
                                tango = oscar.bind(options)(tango);
                                oscar = mike.Math;
                                tango = oscar.abs;
                                mike = _closure3_slot13;
                                options = mike.y;
                                offset = _closure3_slot5;
                                mike = offset.get;
                                mike = mike.bind(offset)();
                                options = options + mike;
                                mike = _closure3_slot3;
                                mike = mike.height;
                                mike = mike / verify;
                                options = options + mike;
                                mike = _closure3_slot32;
                                mike = options - mike;
                                oscar = tango.bind(oscar)(mike);
                                tango = _closure3_slot25;
                                mike = tango.set;
                                options = oscar < golf;
                                report = 0;
                                if(!options) { _fun84269_ip = 1379; continue _fun84269 }
 1368:
                                golf = oscar / golf;
                                oscar = 1;
                                report = oscar - golf;
 1379:
                                mike = mike.bind(tango)(report);
                                tango = zulu.absoluteX;
                                report = _closure3_slot17;
                                mike = report.get;
                                mike = mike.bind(report)();
                                mike = mike.x;
                                if(!(tango >= mike)) { _fun84269_ip = 1561; continue _fun84269 }
 1415:
                                report = zulu.absoluteX;
                                tango = _closure3_slot17;
                                mike = tango.get;
                                mike = mike.bind(tango)();
                                options = mike.x;
                                verify = _closure1_slot0;
                                tango = _closure1_slot3;
                                golf = 14;
                                tango = tango[golf];
                                oscar = undefined;
                                tango = verify.bind(oscar)(tango);
                                tango = tango.TRASH_TAP_TARGET_SIZE;
                                tango = options + tango;
                                if(!(report <= tango)) { _fun84269_ip = 1561; continue _fun84269 }
 1478:
                                report = zulu.absoluteY;
                                options = _closure3_slot17;
                                tango = options.get;
                                tango = tango.bind(options)();
                                tango = tango.y;
                                if(!(report >= tango)) { _fun84269_ip = 1561; continue _fun84269 }
 1506:
                                zulu = zulu.absoluteY;
                                report = _closure3_slot17;
                                tango = report.get;
                                tango = tango.bind(report)();
                                tango = tango.y;
                                report = _closure1_slot0;
                                mike = _closure1_slot3;
                                mike = mike[golf];
                                mike = report.bind(oscar)(mike);
                                mike = mike.TRASH_TAP_TARGET_SIZE;
                                mike = tango + mike;
                                if(!(!(zulu <= mike))) { _fun84269_ip = 1611; continue _fun84269 }
 1561:
                                zulu = _closure3_slot6;
                                mike = zulu.get;
                                mike = mike.bind(zulu)();
                                if(!mike) { _fun84269_ip = 1657; continue _fun84269 }
 1577:
                                tango = _closure3_slot6;
                                zulu = tango.set;
                                mike = false;
                                mike = zulu.bind(tango)(mike);
                                tango = _closure3_slot7;
                                zulu = tango.set;
                                mike = true;
                                mike = zulu.bind(tango)(mike);
                                _fun84269_ip = 1657; continue _fun84269;
 1611:
                                zulu = _closure3_slot6;
                                mike = zulu.get;
                                mike = mike.bind(zulu)();
                                if(mike) { _fun84269_ip = 1657; continue _fun84269 }
 1627:
                                tango = _closure3_slot6;
                                mike = tango.set;
                                zulu = true;
                                mike = mike.bind(tango)(zulu);
                                mike = _closure3_slot7;
                                entity = mike.set;
                                entity = entity.bind(mike)(zulu);
 1657:
                                entity = undefined;
                                return entity;
                            }
                        };
                        oscar = {};
                        romeo = _closure3_slot13;
                        oscar['position'] = romeo;
                        romeo = _closure3_slot4;
                        oscar['offsetX'] = romeo;
                        romeo = _closure3_slot3;
                        oscar['size'] = romeo;
                        romeo = _closure3_slot31;
                        oscar['canvasCenterX'] = romeo;
                        backup = _closure3_slot24;
                        oscar['stickToHorizontalCenter'] = backup;
                        romeo = 15;
                        oscar['STICKY_DISTANCE_THRESHOLD'] = romeo;
                        romeo = 300;
                        oscar['STICKY_VELOCITY_THRESHOLD'] = romeo;
                        output = _closure3_slot27;
                        oscar['yAxisStickEnabled'] = output;
                        foxtrot = _closure3_slot21;
                        oscar['dragPointToSnapPointDeltaX'] = foxtrot;
                        romeo = yankee[options];
                        romeo = offset.bind(verify)(romeo);
                        romeo = romeo.runOnJS;
                        oscar['runOnJS'] = romeo;
                        romeo = 9;
                        kilo = yankee[romeo];
                        kilo = offset.bind(verify)(kilo);
                        kilo = kilo.triggerHapticFeedback;
                        oscar['triggerHapticFeedback'] = kilo;
                        romeo = yankee[romeo];
                        romeo = offset.bind(verify)(romeo);
                        romeo = romeo.HapticFeedbackTypes;
                        oscar['HapticFeedbackTypes'] = romeo;
                        romeo = _closure3_slot5;
                        oscar['offsetY'] = romeo;
                        romeo = _closure3_slot32;
                        oscar['canvasCenterY'] = romeo;
                        kilo = _closure3_slot23;
                        oscar['stickToVerticalCenter'] = kilo;
                        sizing = _closure3_slot28;
                        oscar['xAxisStickEnabled'] = sizing;
                        romeo = _closure3_slot22;
                        oscar['dragPointToSnapPointDeltaY'] = romeo;
                        echo = _closure3_slot26;
                        oscar['yAxisOpacity'] = echo;
                        echo = _closure3_slot25;
                        oscar['xAxisOpacity'] = echo;
                        echo = _closure3_slot17;
                        oscar['trashCanArea'] = echo;
                        echo = 14;
                        echo = yankee[echo];
                        echo = offset.bind(verify)(echo);
                        echo = echo.TRASH_TAP_TARGET_SIZE;
                        oscar['TRASH_TAP_TARGET_SIZE'] = echo;
                        echo = _closure3_slot6;
                        oscar['hoveringOverTrash'] = echo;
                        echo = _closure3_slot7;
                        oscar['shouldTriggerHapticFeedback'] = echo;
                        mike['__closure'] = oscar;
                        oscar = 3701668814868.0;
                        mike['__workletHash'] = oscar;
                        oscar = _closure1_slot22;
                        mike['__initData'] = oscar;
                        report = zulu.bind(report)(mike);
                        zulu = report.onTouchesUp;
                        mike = function(argFoo, argBar) { // Original name: t
                            _fun84270: for(var _fun84270_ip = 0; ; ) switch(_fun84270_ip) {
 0:
                                zulu = argBar;
                                entity = argFoo;
                                tango = entity.numberOfTouches;
                                mike = _closure3_slot36;
                                if(!(tango < mike)) { _fun84270_ip = 42; continue _fun84270 }
 23:
                                mike = zulu.end;
                                mike = mike.bind(zulu)();
                                mike = _closure3_slot34;
                                entity = undefined;
                                entity = mike.bind(entity)();
 42:
                                entity = undefined;
                                return entity;
                            }
                        };
                        echo = {};
                        oscar = _closure3_slot36;
                        echo['minPointers'] = oscar;
                        oscar = _closure3_slot34;
                        echo['maybeDeleteAndClearActive'] = oscar;
                        mike['__closure'] = echo;
                        echo = 6512043751325.0;
                        mike['__workletHash'] = echo;
                        echo = _closure1_slot23;
                        mike['__initData'] = echo;
                        zulu = zulu.bind(report)(mike);
                        mike = zulu.onFinalize;
                        entity = function(argFoo) { // Original name: e
                            _fun84271: for(var _fun84271_ip = 0; ; ) switch(_fun84271_ip) {
 0:
                                entity = argFoo;
                                report = _closure3_slot18;
                                zulu = report.set;
                                tango = false;
                                zulu = zulu.bind(report)(tango);
                                report = global;
                                golf = report.Math;
                                oscar = golf.abs;
                                zulu = entity.translationX;
                                oscar = oscar.bind(golf)(zulu);
                                zulu = 2;
                                oscar = oscar > zulu;
                                if(oscar) { _fun84271_ip = 84; continue _fun84271 }
 57:
                                golf = report.Math;
                                report = golf.abs;
                                entity = entity.translationY;
                                entity = report.bind(golf)(entity);
                                oscar = entity > zulu;
 84:
                                report = _closure3_slot0;
                                zulu = report.set;
                                entity = report.get;
                                entity = entity.bind(report)();
                                if(entity) { _fun84271_ip = 108; continue _fun84271 }
 105:
                                entity = oscar;
 108:
                                entity = zulu.bind(report)(entity);
                                zulu = _closure3_slot27;
                                entity = zulu.set;
                                entity = entity.bind(zulu)(tango);
                                zulu = _closure3_slot28;
                                entity = zulu.set;
                                entity = entity.bind(zulu)(tango);
                                zulu = _closure3_slot23;
                                entity = zulu.set;
                                entity = entity.bind(zulu)(tango);
                                zulu = _closure3_slot24;
                                entity = zulu.set;
                                entity = entity.bind(zulu)(tango);
                                zulu = _closure3_slot21;
                                entity = zulu.set;
                                tango = 0;
                                entity = entity.bind(zulu)(tango);
                                zulu = _closure3_slot22;
                                entity = zulu.set;
                                entity = entity.bind(zulu)(tango);
                                tango = _closure1_slot0;
                                zulu = _closure1_slot3;
                                entity = 8;
                                zulu = zulu[entity];
                                entity = undefined;
                                report = tango.bind(entity)(zulu);
                                tango = report.runOnJS;
                                zulu = _closure3_slot33;
                                zulu = tango.bind(report)(zulu);
                                zulu = zulu.bind(entity)();
                                mike = _closure3_slot34;
                                mike = mike.bind(entity)();
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
                        report['stickToVerticalCenter'] = kilo;
                        report['stickToHorizontalCenter'] = backup;
                        report['dragPointToSnapPointDeltaX'] = foxtrot;
                        report['dragPointToSnapPointDeltaY'] = romeo;
                        options = yankee[options];
                        options = offset.bind(verify)(options);
                        options = options.runOnJS;
                        report['runOnJS'] = options;
                        golf = _closure3_slot33;
                        report['maybeUpdateStore'] = golf;
                        report['maybeDeleteAndClearActive'] = oscar;
                        entity['__closure'] = report;
                        report = 2120345384736.0;
                        entity['__workletHash'] = report;
                        tango = _closure1_slot24;
                        entity['__initData'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    golf = options.bind(tango)(oscar, golf);
                    _closure3_slot37 = golf;
                    options = tango.useMemo;
                    oscar = new Array(1);
                    oscar[0] = report;
                    report = function() {
                        options = _closure1_slot0;
                        verify = _closure1_slot3;
                        entity = 13;
                        entity = verify[entity];
                        golf = undefined;
                        entity = options.bind(golf)(entity);
                        mike = entity.Gesture;
                        entity = mike.Tap;
                        zulu = entity.bind(mike)();
                        mike = zulu.enabled;
                        oscar = _closure3_slot14;
                        entity = null;
                        entity = entity != oscar;
                        zulu = mike.bind(zulu)(entity);
                        mike = zulu.onStart;
                        entity = function() { // Original name: e
                            _fun84273: for(var _fun84273_ip = 0; ; ) switch(_fun84273_ip) {
 0:
                                zulu = _closure3_slot14;
                                mike = null;
                                if(!(mike != zulu)) { _fun84273_ip = 56; continue _fun84273 }
 13:
                                tango = _closure1_slot0;
                                zulu = _closure1_slot3;
                                mike = 8;
                                zulu = zulu[mike];
                                mike = undefined;
                                tango = tango.bind(mike)(zulu);
                                zulu = tango.runOnJS;
                                entity = _closure3_slot14;
                                entity = zulu.bind(tango)(entity);
                                entity = entity.bind(mike)();
 56:
                                entity = undefined;
                                return entity;
                            }
                        };
                        report = {};
                        report['onTap'] = oscar;
                        oscar = 8;
                        oscar = verify[oscar];
                        oscar = options.bind(golf)(oscar);
                        oscar = oscar.runOnJS;
                        report['runOnJS'] = oscar;
                        entity['__closure'] = report;
                        report = 6622214151589.0;
                        entity['__workletHash'] = report;
                        tango = _closure1_slot25;
                        entity['__initData'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    options = options.bind(tango)(report, oscar);
                    _closure3_slot38 = options;
                    oscar = tango.useMemo;
                    report = new Array(5);
                    report[0] = backup;
                    report[1] = yankee;
                    report[2] = foxtrot;
                    report[3] = zulu;
                    report[4] = mike;
                    zulu = function() {
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        mike = 13;
                        mike = offset[mike];
                        options = undefined;
                        mike = verify.bind(options)(mike);
                        zulu = mike.Gesture;
                        mike = zulu.Pinch;
                        report = mike.bind(zulu)();
                        zulu = report.onStart;
                        mike = function() { // Original name: n
                            zulu = _closure3_slot19;
                            mike = zulu.set;
                            entity = true;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        golf = _closure3_slot19;
                        yankee['isPinchGestureActive'] = golf;
                        mike['__closure'] = yankee;
                        yankee = 3683009374426.0;
                        mike['__workletHash'] = yankee;
                        yankee = _closure1_slot26;
                        mike['__initData'] = yankee;
                        report = zulu.bind(report)(mike);
                        zulu = report.onUpdate;
                        mike = function(argFoo) { // Original name: t
                            zulu = _closure3_slot8;
                            mike = zulu.set;
                            tango = _closure3_slot9;
                            entity = argFoo;
                            entity = entity.scale;
                            entity = tango * entity;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        romeo = _closure3_slot8;
                        yankee['scale'] = romeo;
                        romeo = _closure3_slot9;
                        yankee['originScale'] = romeo;
                        mike['__closure'] = yankee;
                        yankee = 5712333645725.0;
                        mike['__workletHash'] = yankee;
                        yankee = _closure1_slot27;
                        mike['__initData'] = yankee;
                        zulu = zulu.bind(report)(mike);
                        mike = zulu.onFinalize;
                        entity = function(argFoo) { // Original name: e
                            _fun84277: for(var _fun84277_ip = 0; ; ) switch(_fun84277_ip) {
 0:
                                tango = _closure3_slot19;
                                zulu = tango.set;
                                entity = false;
                                entity = zulu.bind(tango)(entity);
                                entity = global;
                                tango = entity.Math;
                                zulu = tango.abs;
                                entity = argFoo;
                                report = entity.scale;
                                entity = 1;
                                entity = report - entity;
                                zulu = zulu.bind(tango)(entity);
                                entity = 0.01;
                                report = zulu > entity;
                                tango = _closure3_slot0;
                                zulu = tango.set;
                                entity = tango.get;
                                entity = entity.bind(tango)();
                                if(entity) { _fun84277_ip = 92; continue _fun84277 }
 89:
                                entity = report;
 92:
                                entity = zulu.bind(tango)(entity);
                                tango = _closure1_slot0;
                                zulu = _closure1_slot3;
                                entity = 8;
                                zulu = zulu[entity];
                                entity = undefined;
                                tango = tango.bind(entity)(zulu);
                                zulu = tango.runOnJS;
                                mike = _closure3_slot33;
                                mike = zulu.bind(tango)(mike);
                                mike = mike.bind(entity)();
                                return entity;
                            }
                        };
                        report = {};
                        report['isPinchGestureActive'] = golf;
                        golf = 0.01;
                        report['MIN_ZOOM'] = golf;
                        golf = _closure3_slot0;
                        report['shouldUpdateStore'] = golf;
                        golf = 8;
                        golf = offset[golf];
                        golf = verify.bind(options)(golf);
                        golf = golf.runOnJS;
                        report['runOnJS'] = golf;
                        oscar = _closure3_slot33;
                        report['maybeUpdateStore'] = oscar;
                        entity['__closure'] = report;
                        report = 1297326741076.0;
                        entity['__workletHash'] = report;
                        tango = _closure1_slot28;
                        entity['__initData'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    oscar = oscar.bind(tango)(zulu, report);
                    _closure3_slot39 = oscar;
                    report = tango.useMemo;
                    zulu = new Array(5);
                    zulu[0] = romeo;
                    zulu[1] = yankee;
                    zulu[2] = offset;
                    zulu[3] = verify;
                    zulu[4] = mike;
                    mike = function() {
                        verify = _closure1_slot0;
                        offset = _closure1_slot3;
                        mike = 13;
                        mike = offset[mike];
                        options = undefined;
                        mike = verify.bind(options)(mike);
                        zulu = mike.Gesture;
                        mike = zulu.Rotation;
                        report = mike.bind(zulu)();
                        zulu = report.onStart;
                        mike = function() { // Original name: n
                            zulu = _closure3_slot20;
                            mike = zulu.set;
                            entity = true;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        golf = _closure3_slot20;
                        yankee['isRotateGestureActive'] = golf;
                        mike['__closure'] = yankee;
                        yankee = 3856185767445.0;
                        mike['__workletHash'] = yankee;
                        yankee = _closure1_slot29;
                        mike['__initData'] = yankee;
                        report = zulu.bind(report)(mike);
                        zulu = report.onUpdate;
                        mike = function(argFoo) { // Original name: t
                            zulu = _closure3_slot10;
                            mike = zulu.set;
                            tango = _closure3_slot11;
                            entity = argFoo;
                            entity = entity.rotation;
                            entity = tango + entity;
                            entity = mike.bind(zulu)(entity);
                            entity = undefined;
                            return entity;
                        };
                        yankee = {};
                        romeo = _closure3_slot10;
                        yankee['rotation'] = romeo;
                        romeo = _closure3_slot11;
                        yankee['originRotate'] = romeo;
                        mike['__closure'] = yankee;
                        yankee = 8387586134388.0;
                        mike['__workletHash'] = yankee;
                        yankee = _closure1_slot30;
                        mike['__initData'] = yankee;
                        zulu = zulu.bind(report)(mike);
                        mike = zulu.onFinalize;
                        entity = function(argFoo) { // Original name: e
                            _fun84281: for(var _fun84281_ip = 0; ; ) switch(_fun84281_ip) {
 0:
                                tango = _closure3_slot20;
                                zulu = tango.set;
                                entity = false;
                                entity = zulu.bind(tango)(entity);
                                entity = argFoo;
                                zulu = entity.rotation;
                                entity = 0.01;
                                report = zulu > entity;
                                tango = _closure3_slot0;
                                zulu = tango.set;
                                entity = tango.get;
                                entity = entity.bind(tango)();
                                if(entity) { _fun84281_ip = 66; continue _fun84281 }
 63:
                                entity = report;
 66:
                                entity = zulu.bind(tango)(entity);
                                tango = _closure1_slot0;
                                zulu = _closure1_slot3;
                                entity = 8;
                                zulu = zulu[entity];
                                entity = undefined;
                                tango = tango.bind(entity)(zulu);
                                zulu = tango.runOnJS;
                                mike = _closure3_slot33;
                                mike = zulu.bind(tango)(mike);
                                mike = mike.bind(entity)();
                                return entity;
                            }
                        };
                        report = {};
                        report['isRotateGestureActive'] = golf;
                        golf = 0.01;
                        report['MIN_ROTATION'] = golf;
                        golf = _closure3_slot0;
                        report['shouldUpdateStore'] = golf;
                        golf = 8;
                        golf = offset[golf];
                        golf = verify.bind(options)(golf);
                        golf = golf.runOnJS;
                        report['runOnJS'] = golf;
                        oscar = _closure3_slot33;
                        report['maybeUpdateStore'] = oscar;
                        entity['__closure'] = report;
                        report = 6873898012833.0;
                        entity['__workletHash'] = report;
                        tango = _closure1_slot31;
                        entity['__initData'] = tango;
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    report = report.bind(tango)(mike, zulu);
                    _closure3_slot40 = report;
                    zulu = tango.useMemo;
                    mike = new Array(4);
                    mike[0] = options;
                    mike[1] = golf;
                    mike[2] = oscar;
                    mike[3] = report;
                    entity = function() {
                        golf = _closure1_slot0;
                        options = _closure1_slot3;
                        report = 13;
                        entity = options[report];
                        oscar = undefined;
                        entity = golf.bind(oscar)(entity);
                        tango = entity.Gesture;
                        zulu = tango.Race;
                        mike = _closure3_slot38;
                        report = options[report];
                        report = golf.bind(oscar)(report);
                        options = report.Gesture;
                        golf = options.Simultaneous;
                        oscar = _closure3_slot37;
                        report = _closure3_slot39;
                        entity = _closure3_slot40;
                        entity = golf.bind(options)(oscar, report, entity);
                        entity = zulu.bind(tango)(mike, entity);
                        return entity;
                    };
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                }
            };
            verify = zulu.bind(tango)(golf);
            output = {};
            golf = _closure1_slot7;
            zulu = golf.getWidth;
            zulu = zulu.bind(golf)();
            output['x'] = zulu;
            zulu = golf.getHeight;
            zulu = zulu.bind(golf)();
            output['y'] = zulu;
            _closure2_slot14 = output;
            zulu = options[report];
            golf = mike.bind(tango)(zulu);
            zulu = golf.useAnimatedStyle;
            entity = function() { // Original name: Se
                _fun84283: for(var _fun84283_ip = 0; ; ) switch(_fun84283_ip) {
 0:
                    mike = _closure2_slot3;
                    entity = mike.get;
                    mike = entity.bind(mike)();
                    entity = _closure2_slot0;
                    if(!(mike !== entity)) { _fun84283_ip = 281; continue _fun84283 }
 27:
                    entity = {};
                    mike = 'absolute';
                    entity['position'] = mike;
                    tango = _closure2_slot12;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.x;
                    entity['left'] = mike;
                    tango = _closure2_slot12;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.y;
                    entity['top'] = mike;
                    tango = _closure2_slot12;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.width;
                    entity['width'] = mike;
                    tango = _closure2_slot12;
                    mike = tango.get;
                    mike = mike.bind(tango)();
                    mike = mike.height;
                    entity['height'] = mike;
                    tango = _closure2_slot1;
                    mike = 'transparent';
                    if(!tango) { _fun84283_ip = 142; continue _fun84283 }
 136:
                    mike = 'rgba(100, 200, 300, 0.4)';
 142:
                    entity['backgroundColor'] = mike;
                    tango = {};
                    report = _closure2_slot8;
                    mike = report.get;
                    mike = mike.bind(report)();
                    tango['translateX'] = mike;
                    mike = new Array(4);
                    mike[0] = tango;
                    tango = {};
                    oscar = _closure2_slot9;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    tango['translateY'] = report;
                    mike[1] = tango;
                    tango = {};
                    oscar = _closure2_slot10;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    tango['scale'] = report;
                    mike[2] = tango;
                    tango = {};
                    oscar = _closure2_slot11;
                    report = oscar.get;
                    options = report.bind(oscar)();
                    report = global;
                    report = report.HermesInternal;
                    golf = report.concat;
                    oscar = '';
                    report = 'rad';
                    report = golf.bind(oscar)(options, report);
                    tango['rotateZ'] = report;
                    mike[3] = tango;
                    entity['transform'] = mike;
                    _fun84283_ip = 349; continue _fun84283;
 281:
                    mike = {'position': 'absolute', 'left': 0, 'top': 0};
                    tango = _closure2_slot14;
                    tango = tango.x;
                    mike['width'] = tango;
                    tango = _closure2_slot14;
                    tango = tango.y;
                    mike['height'] = tango;
                    tango = _closure2_slot1;
                    zulu = 'transparent';
                    if(!tango) { _fun84283_ip = 334; continue _fun84283 }
 328:
                    zulu = 'rgba(100, 200, 300, 0.4)';
 334:
                    mike['backgroundColor'] = zulu;
                    zulu = new Array(0);
                    mike['transform'] = zulu;
                    entity = mike;
 349:
                    return entity;
                }
            };
            offset = {};
            offset['activeId'] = echo;
            offset['id'] = result;
            offset['screenDimensions'] = output;
            offset['debug'] = sizing;
            offset['gestureDetectorDimensions'] = kilo;
            offset['offsetX'] = backup;
            offset['offsetY'] = foxtrot;
            offset['scale'] = romeo;
            offset['rotation'] = yankee;
            entity['__closure'] = offset;
            offset = 16448928617958.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot36;
            entity['__initData'] = offset;
            golf = zulu.bind(golf)(entity);
            zulu = _closure1_slot10;
            entity = 13;
            entity = options[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.GestureDetector;
            entity = {};
            entity['gesture'] = verify;
            oscar = _closure1_slot1;
            report = options[report];
            report = oscar.bind(tango)(report);
            oscar = report.View;
            report = {};
            report['style'] = golf;
            report = zulu.bind(tango)(oscar, report);
            entity['children'] = report;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    zulu['TransformComponentGestureHandler'] = mike;
    return entity;
})();
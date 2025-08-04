// app/modules/remixing/native/components/TransformComponentGestureHandler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var6;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Dimensions;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useRemixingEditorStore;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot9 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx1(){const{shouldTriggerHapticFeedback}=this.__closure;return shouldTriggerHapticFeedback.get();}';
    var4['code'] = var7;
    var _closure1_slot10 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx2(current){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,shouldTriggerHapticFeedback}=this.__closure;if(current){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);shouldTriggerHapticFeedback.set(false);}}';
    var4['code'] = var7;
    var _closure1_slot11 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx3(){const{xAxisOpacity}=this.__closure;return xAxisOpacity.get();}';
    var4['code'] = var7;
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx4(current){const{runOnJS,setXAxisOpacity}=this.__closure;runOnJS(setXAxisOpacity)(current);}';
    var4['code'] = var7;
    var _closure1_slot13 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx5(){const{yAxisOpacity}=this.__closure;return yAxisOpacity.get();}';
    var4['code'] = var7;
    var _closure1_slot14 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx6(current){const{runOnJS,setYAxisOpacity}=this.__closure;runOnJS(setYAxisOpacity)(current);}';
    var4['code'] = var7;
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx7(){const{shouldDeleteId}=this.__closure;return shouldDeleteId.get();}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = "function TransformComponentGestureHandlerTsx8(current){const{runOnJS,triggerHapticFeedback,HapticFeedbackTypes,removeComponent,shouldDeleteId}=this.__closure;if(current!==''){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);runOnJS(removeComponent)(current);shouldDeleteId.set('');}}";
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = "function TransformComponentGestureHandlerTsx9(){const{activeId,id,hoveringOverTrash,shouldDeleteId,runOnJS,setXAxisOpacity,setYAxisOpacity}=this.__closure;if(activeId.get()===id&&hoveringOverTrash.get()){shouldDeleteId.set(id);hoveringOverTrash.set(false);}activeId.set('');runOnJS(setXAxisOpacity)(0);runOnJS(setYAxisOpacity)(0);}";
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx10(event){const{isPanGestureActive,MIN_MOVE_DISTANCE,shouldUpdateStore,yAxisStickEnabled,xAxisStickEnabled,stickToVerticalCenter,stickToHorizontalCenter,dragPointToSnapPointDeltaX,dragPointToSnapPointDeltaY,runOnJS,maybeUpdateStore,maybeDeleteAndClearActive}=this.__closure;isPanGestureActive.set(false);const hasMoved=Math.abs(event.translationX)>MIN_MOVE_DISTANCE||Math.abs(event.translationY)>MIN_MOVE_DISTANCE;shouldUpdateStore.set(shouldUpdateStore.get()||hasMoved);yAxisStickEnabled.set(false);xAxisStickEnabled.set(false);stickToVerticalCenter.set(false);stickToHorizontalCenter.set(false);dragPointToSnapPointDeltaX.set(0);dragPointToSnapPointDeltaY.set(0);runOnJS(maybeUpdateStore)();maybeDeleteAndClearActive();}';
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx11(e,manager){const{minPointers,maybeDeleteAndClearActive}=this.__closure;if(e.numberOfTouches<minPointers){manager.end();maybeDeleteAndClearActive();}}';
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx12(e){const{position,offsetX,size,canvasCenterX,stickToHorizontalCenter,STICKY_DISTANCE_THRESHOLD,STICKY_VELOCITY_THRESHOLD,yAxisStickEnabled,dragPointToSnapPointDeltaX,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,offsetY,canvasCenterY,stickToVerticalCenter,xAxisStickEnabled,dragPointToSnapPointDeltaY,yAxisOpacity,xAxisOpacity,trashCanArea,TRASH_TAP_TARGET_SIZE,hoveringOverTrash,shouldTriggerHapticFeedback}=this.__closure;const centerXBeforeDragUpdate=position.x+offsetX.get()+size.width/2;const centerXAfterDragUpdate=position.x+e.translationX+size.width/2;const centeredComponentOffsetX=canvasCenterX-(position.x+size.width/2);if(stickToHorizontalCenter.get()){if(Math.abs(centerXAfterDragUpdate-canvasCenterX)>STICKY_DISTANCE_THRESHOLD||Math.abs(e.velocityX)>STICKY_VELOCITY_THRESHOLD){stickToHorizontalCenter.set(false);yAxisStickEnabled.set(true);offsetX.set(e.translationX-dragPointToSnapPointDeltaX.get());}else{dragPointToSnapPointDeltaX.set(centerXAfterDragUpdate-canvasCenterX);offsetX.set(centeredComponentOffsetX);}}else{const crossedYAxisFromLeftToRight=centerXBeforeDragUpdate<=canvasCenterX&&centerXAfterDragUpdate>canvasCenterX;const crossedYAxisFromRightToLeft=centerXBeforeDragUpdate>=canvasCenterX&&centerXAfterDragUpdate<canvasCenterX;if(yAxisStickEnabled.get()&&Math.abs(e.velocityY)<STICKY_VELOCITY_THRESHOLD&&(crossedYAxisFromLeftToRight||crossedYAxisFromRightToLeft)){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);offsetX.set(centeredComponentOffsetX);dragPointToSnapPointDeltaX.set(centerXAfterDragUpdate-canvasCenterX);stickToHorizontalCenter.set(true);yAxisStickEnabled.set(false);}else{yAxisStickEnabled.set(true);offsetX.set(e.translationX-dragPointToSnapPointDeltaX.get());}}const centerYBeforeDragUpdate=position.y+offsetY.get()+size.height/2;const centerYAfterDragUpdate=position.y+e.translationY+size.height/2;const centeredComponentOffsetY=canvasCenterY-(position.y+size.height/2);if(stickToVerticalCenter.get()){if(Math.abs(centerYAfterDragUpdate-canvasCenterY)>STICKY_DISTANCE_THRESHOLD||Math.abs(e.velocityY)>STICKY_VELOCITY_THRESHOLD){stickToVerticalCenter.set(false);xAxisStickEnabled.set(true);offsetY.set(e.translationY-dragPointToSnapPointDeltaY.get());}else{dragPointToSnapPointDeltaY.set(centerYAfterDragUpdate-canvasCenterY);offsetY.set(centeredComponentOffsetY);}}else{const crossedXAxisFromTopToBottom=centerYBeforeDragUpdate>=canvasCenterY&&centerYAfterDragUpdate<canvasCenterY;const crossedXAxisFromBottomToTop=centerYBeforeDragUpdate<=canvasCenterY&&centerYAfterDragUpdate>canvasCenterY;if(xAxisStickEnabled.get()&&Math.abs(e.velocityY)<STICKY_VELOCITY_THRESHOLD&&(crossedXAxisFromTopToBottom||crossedXAxisFromBottomToTop)){runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);offsetY.set(centeredComponentOffsetY);dragPointToSnapPointDeltaY.set(centerYAfterDragUpdate-canvasCenterY);stickToVerticalCenter.set(true);xAxisStickEnabled.set(false);}else{xAxisStickEnabled.set(true);offsetY.set(e.translationY-dragPointToSnapPointDeltaY.get());}}const xDistance=Math.abs(position.x+offsetX.get()+size.width/2-canvasCenterX);yAxisOpacity.set(xDistance<50?1-xDistance/50:0);const yDistance=Math.abs(position.y+offsetY.get()+size.height/2-canvasCenterY);xAxisOpacity.set(yDistance<50?1-yDistance/50:0);if(e.absoluteX>=trashCanArea.get().x&&e.absoluteX<=trashCanArea.get().x+TRASH_TAP_TARGET_SIZE&&e.absoluteY>=trashCanArea.get().y&&e.absoluteY<=trashCanArea.get().y+TRASH_TAP_TARGET_SIZE){if(!hoveringOverTrash.get()){hoveringOverTrash.set(true);shouldTriggerHapticFeedback.set(true);}}else{if(hoveringOverTrash.get()){hoveringOverTrash.set(false);shouldTriggerHapticFeedback.set(true);}}}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx13(){const{isPanGestureActive}=this.__closure;isPanGestureActive.set(true);}';
    var4['code'] = var7;
    var _closure1_slot22 = var4;
    var4 = {};
    var7 = "function TransformComponentGestureHandlerTsx14(e){const{minPointers,activeId,id,runOnJS,maybeBringToFront,onStart}=this.__closure;if(e.numberOfTouches<minPointers)return;if(activeId.get()===''){activeId.set(id);runOnJS(maybeBringToFront)();}if(onStart!=null){runOnJS(onStart)();}}";
    var4['code'] = var7;
    var _closure1_slot23 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx15(){const{onTap,runOnJS}=this.__closure;if(onTap!=null){runOnJS(onTap)();}}';
    var4['code'] = var7;
    var _closure1_slot24 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx16(event){const{isPinchGestureActive,MIN_ZOOM,shouldUpdateStore,runOnJS,maybeUpdateStore}=this.__closure;isPinchGestureActive.set(false);const hasZoomed=Math.abs(event.scale-1)>MIN_ZOOM;shouldUpdateStore.set(shouldUpdateStore.get()||hasZoomed);runOnJS(maybeUpdateStore)();}';
    var4['code'] = var7;
    var _closure1_slot25 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx17(event){const{scale,originScale}=this.__closure;scale.set(originScale*event.scale);}';
    var4['code'] = var7;
    var _closure1_slot26 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx18(){const{isPinchGestureActive}=this.__closure;isPinchGestureActive.set(true);}';
    var4['code'] = var7;
    var _closure1_slot27 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx19(event){const{isRotateGestureActive,MIN_ROTATION,shouldUpdateStore,runOnJS,maybeUpdateStore}=this.__closure;isRotateGestureActive.set(false);const hasRotation=event.rotation>MIN_ROTATION;shouldUpdateStore.set(shouldUpdateStore.get()||hasRotation);runOnJS(maybeUpdateStore)();}';
    var4['code'] = var7;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx20(event){const{rotation,originRotate}=this.__closure;rotation.set(originRotate+event.rotation);}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx21(){const{isRotateGestureActive}=this.__closure;isRotateGestureActive.set(true);}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx22(){const{offsetX,offsetY,scale,rotation}=this.__closure;return[offsetX.get(),offsetY.get(),scale.get(),rotation.get()];}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx23(current,previous){const{cheapWorkletArrayShallowEqual,transformMap,id}=this.__closure;if(cheapWorkletArrayShallowEqual(current,previous!==null&&previous!==void 0?previous:undefined))return;if(transformMap[id]!=null){transformMap[id].set([{translateX:current[0]},{translateY:current[1]},{scale:current[2]},{rotate:current[3]}]);}}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx24(){const{activeId}=this.__closure;return activeId.get();}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = "function TransformComponentGestureHandlerTsx25(current){const{gestureDetectorDimensions,getTouchableMinimalRect,dimensionCopy,id}=this.__closure;if(current===''){gestureDetectorDimensions.set(getTouchableMinimalRect(dimensionCopy.get()));}else if(current!==id){gestureDetectorDimensions.set({x:0,y:0,width:0,height:0});}}";
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function TransformComponentGestureHandlerTsx26(){const{activeId,id,windowDimensions,debug,gestureDetectorDimensions,offsetX,offsetY,scale,rotation}=this.__closure;if(activeId.get()===id){return{position:\'absolute\',left:0,top:0,width:windowDimensions.width,height:windowDimensions.height,backgroundColor:debug?\'rgba(100, 200, 300, 0.4)\':\'transparent\',transform:[]};}return{position:\'absolute\',left:gestureDetectorDimensions.get().x,top:gestureDetectorDimensions.get().y,width:gestureDetectorDimensions.get().width,height:gestureDetectorDimensions.get().height,backgroundColor:debug?\'rgba(100, 200, 300, 0.4)\':\'transparent\',transform:[{translateX:offsetX.get()},{translateY:offsetY.get()},{scale:scale.get()},{rotateZ:rotation.get()+"rad"}]};}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/TransformComponentGestureHandler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var19 = var1.id;
            var _closure2_slot0 = var19;
            var25 = var1.size;
            var10 = var1.position;
            var16 = var1.transform;
            var17 = var1.debug;
            var _closure2_slot1 = var17;
            var36 = var1.transformMap;
            var _closure2_slot2 = var36;
            var21 = var1.multiTouchPan;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0001_ip = 63; continue _fun0001 }
 61:
            var21 = false;
 63:
            var20 = var1.activeId;
            var _closure2_slot3 = var20;
            var23 = var1.hoveringOverTrash;
            var24 = var1.trashCanAreaRef;
            var9 = var1.onTap;
            var6 = var1.onStart;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var _closure2_slot14 = var4;
            var34 = var10.x;
            _closure2_slot4 = var34;
            var33 = var10.y;
            _closure2_slot5 = var33;
            var30 = var25.width;
            _closure2_slot6 = var30;
            var7 = var25.height;
            _closure2_slot7 = var7;
            var2 = _closure1_slot0;
            var8 = _closure1_slot3;
            var5 = 7;
            var11 = var8[var5];
            var12 = var2.bind(var4)(var11);
            var11 = var12.useSharedValue;
            var13 = 0;
            var15 = var11.bind(var12)(var13);
            _closure2_slot8 = var15;
            var11 = var8[var5];
            var12 = var2.bind(var4)(var11);
            var11 = var12.useSharedValue;
            var14 = var11.bind(var12)(var13);
            _closure2_slot9 = var14;
            var32 = 13;
            var11 = var8[var32];
            var12 = var2.bind(var4)(var11);
            var11 = var12.getScaleFromTransforms2d;
            var18 = var11.bind(var12)(var16);
            var11 = var8[var5];
            var12 = var2.bind(var4)(var11);
            var11 = var12.useSharedValue;
            var13 = var11.bind(var12)(var18);
            _closure2_slot10 = var13;
            var11 = var8[var32];
            var12 = var2.bind(var4)(var11);
            var11 = var12.getRotateFromTransforms2d;
            var11 = var11.bind(var12)(var16);
            var12 = var8[var5];
            var16 = var2.bind(var4)(var12);
            var12 = var16.useSharedValue;
            var12 = var12.bind(var16)(var11);
            _closure2_slot11 = var12;
            var16 = var8[var5];
            var26 = var2.bind(var4)(var16);
            var22 = var26.useSharedValue;
            var16 = false;
            var26 = var22.bind(var26)(var16);
            var16 = var8[var5];
            var27 = var2.bind(var4)(var16);
            var22 = var27.useSharedValue;
            var16 = 6;
            var16 = var8[var16];
            var28 = var2.bind(var4)(var16);
            var16 = var28.rect;
            var42 = var28;
            var41 = var34;
            var40 = var33;
            var39 = var30;
            var38 = var7;
            var16 = var42[var16](var41, var40, var39, var38, var37);
            var16 = var22.bind(var27)(var16);
            _closure2_slot12 = var16;
            var22 = function() {
                var10 = _closure1_slot0;
                var11 = _closure1_slot3;
                var8 = 7;
                var2 = var11[var8];
                var9 = undefined;
                var4 = var10.bind(var9)(var2);
                var3 = var4.useSharedValue;
                var2 = false;
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var3 = var11[var8];
                var5 = var10.bind(var9)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function t() {
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7 = {};
                var7['shouldTriggerHapticFeedback'] = var2;
                var3['__closure'] = var7;
                var7 = 7579777414180.0;
                var3['__workletHash'] = var7;
                var7 = _closure1_slot10;
                var3['__initData'] = var7;
                var1 = function e(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = arg1;
                        if(!var1) { _fun0002_ip = 104; continue _fun0002 }
 6:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 7;
                        var1 = var5[var1];
                        var3 = undefined;
                        var7 = var4.bind(var3)(var1);
                        var6 = var7.runOnJS;
                        var1 = 8;
                        var2 = var5[var1];
                        var2 = var4.bind(var3)(var2);
                        var2 = var2.triggerHapticFeedback;
                        var2 = var6.bind(var7)(var2);
                        var1 = var5[var1];
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.HapticFeedbackTypes;
                        var1 = var1.IMPACT_LIGHT;
                        var1 = var2.bind(var3)(var1);
                        var3 = _closure3_slot0;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
 104:
                        var1 = undefined;
                        return var1;
                    }
                };
                var7 = {};
                var8 = var11[var8];
                var8 = var10.bind(var9)(var8);
                var8 = var8.runOnJS;
                var7['runOnJS'] = var8;
                var8 = 8;
                var12 = var11[var8];
                var12 = var10.bind(var9)(var12);
                var12 = var12.triggerHapticFeedback;
                var7['triggerHapticFeedback'] = var12;
                var8 = var11[var8];
                var8 = var10.bind(var9)(var8);
                var8 = var8.HapticFeedbackTypes;
                var7['HapticFeedbackTypes'] = var8;
                var7['shouldTriggerHapticFeedback'] = var2;
                var1['__closure'] = var7;
                var7 = 14676215034390.0;
                var1['__workletHash'] = var7;
                var6 = _closure1_slot11;
                var1['__initData'] = var6;
                var1 = var4.bind(var5)(var3, var1);
                var1 = {};
                var1['shouldTriggerHapticFeedback'] = var2;
                return var1;
            };
            var22 = var22.bind(var4)();
            var22 = var22.shouldTriggerHapticFeedback;
            var28 = {};
            var28['position'] = var10;
            var28['size'] = var25;
            var28['gestureDetectorDimensions'] = var16;
            var28['transformMap'] = var36;
            var28['id'] = var19;
            var28['scale'] = var13;
            var28['rotation'] = var12;
            var28['offsetX'] = var15;
            var28['offsetY'] = var14;
            var28['originScale'] = var18;
            var28['originRotate'] = var11;
            var28['shouldUpdateStore'] = var26;
            var27 = function(arg1) {
                var4 = arg1;
                var11 = var4.position;
                var _closure3_slot0 = var11;
                var14 = var4.size;
                var _closure3_slot1 = var14;
                var3 = var4.gestureDetectorDimensions;
                var _closure3_slot2 = var3;
                var9 = var4.transformMap;
                var _closure3_slot3 = var9;
                var15 = var4.id;
                var _closure3_slot4 = var15;
                var2 = var4.scale;
                var _closure3_slot5 = var2;
                var5 = var4.rotation;
                var _closure3_slot6 = var5;
                var13 = var4.offsetX;
                var _closure3_slot7 = var13;
                var12 = var4.offsetY;
                var _closure3_slot8 = var12;
                var8 = var4.originScale;
                var _closure3_slot9 = var8;
                var6 = var4.originRotate;
                var _closure3_slot10 = var6;
                var10 = var4.shouldUpdateStore;
                var _closure3_slot11 = var10;
                var4 = _closure1_slot5;
                var7 = var4.useRef;
                var7 = var7.bind(var4)(var9);
                var _closure3_slot12 = var7;
                var9 = var4.useEffect;
                var7 = function() {
                    var2 = _closure3_slot12;
                    var1 = _closure3_slot3;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var7 = var9.bind(var4)(var7);
                var9 = var4.useEffect;
                var7 = new Array(11);
                var7[0] = var15;
                var15 = var11.x;
                var7[1] = var15;
                var15 = var11.y;
                var7[2] = var15;
                var7[3] = var14;
                var7[4] = var13;
                var7[5] = var12;
                var7[6] = var11;
                var7[7] = var5;
                var7[8] = var2;
                var7[9] = var10;
                var7[10] = var3;
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var1 = _closure3_slot0;
                        var11 = var1.x;
                        var14 = var1.y;
                        var1 = _closure3_slot1;
                        var13 = var1.width;
                        var12 = var1.height;
                        var1 = _closure3_slot12;
                        var4 = var1.current;
                        var6 = _closure3_slot2;
                        var5 = var6.set;
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 6;
                        var3 = var3[var1];
                        var1 = undefined;
                        var7 = var7.bind(var1)(var3);
                        var3 = var7.rect;
                        var16 = var7;
                        var15 = var11;
                        var3 = var16[var3](var15, var14, var13, var12, var11);
                        var3 = var5.bind(var6)(var3);
                        var5 = _closure3_slot11;
                        var3 = var5.get;
                        var3 = var3.bind(var5)();
                        if(var3) { _fun0003_ip = 252; continue _fun0003 }
 114:
                        var3 = _closure3_slot4;
                        var5 = var4[var3];
                        var3 = null;
                        if(!(var3 != var5)) { _fun0003_ip = 222; continue _fun0003 }
 128:
                        var3 = _closure3_slot4;
                        var5 = var4[var3];
                        var4 = var5.set;
                        var6 = {};
                        var7 = 0;
                        var6['translateX'] = var7;
                        var3 = new Array(4);
                        var3[0] = var6;
                        var6 = {};
                        var6['translateY'] = var7;
                        var3[1] = var6;
                        var6 = {};
                        var8 = _closure3_slot5;
                        var7 = var8.get;
                        var7 = var7.bind(var8)();
                        var6['scale'] = var7;
                        var3[2] = var6;
                        var6 = {};
                        var8 = _closure3_slot6;
                        var7 = var8.get;
                        var7 = var7.bind(var8)();
                        var6['rotate'] = var7;
                        var3[3] = var6;
                        var3 = var4.bind(var5)(var3);
 222:
                        var5 = _closure3_slot7;
                        var3 = var5.set;
                        var4 = 0;
                        var3 = var3.bind(var5)(var4);
                        var3 = _closure3_slot8;
                        var2 = var3.set;
                        var2 = var2.bind(var3)(var4);
 252:
                        return var1;
                    }
                };
                var3 = var9.bind(var4)(var3, var7);
                var7 = var4.useEffect;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var2;
                var2 = function() {
                    var3 = _closure3_slot5;
                    var2 = var3.set;
                    var1 = _closure3_slot9;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var2 = var7.bind(var4)(var2, var3);
                var3 = var4.useEffect;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() {
                    var3 = _closure3_slot6;
                    var2 = var3.set;
                    var1 = _closure3_slot10;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var27 = var27.bind(var4)(var28);
            var27 = var8[var5];
            var31 = var2.bind(var4)(var27);
            var29 = var31.useAnimatedReaction;
            var28 = function $() {
                var3 = _closure2_slot8;
                var1 = var3.get;
                var3 = var1.bind(var3)();
                var1 = new Array(4);
                var1[0] = var3;
                var4 = _closure2_slot9;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1[1] = var3;
                var4 = _closure2_slot10;
                var3 = var4.get;
                var3 = var3.bind(var4)();
                var1[2] = var3;
                var3 = _closure2_slot11;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1[3] = var2;
                return var1;
            };
            var27 = {};
            var27['offsetX'] = var15;
            var27['offsetY'] = var14;
            var27['scale'] = var13;
            var27['rotation'] = var12;
            var28['__closure'] = var27;
            var27 = 9069472429642.0;
            var28['__workletHash'] = var27;
            var27 = _closure1_slot31;
            var28['__initData'] = var27;
            var27 = function j(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var7 = arg1;
                    var6 = arg2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var5 = var3.bind(var1)(var2);
                    var3 = var5.cheapWorkletArrayShallowEqual;
                    var4 = null;
                    var8 = var4 != var6;
                    var2 = undefined;
                    if(!var8) { _fun0004_ip = 51; continue _fun0004 }
 48:
                    var2 = var6;
 51:
                    var2 = var3.bind(var5)(var7, var2);
                    if(var2) { _fun0004_ip = 176; continue _fun0004 }
 60:
                    var5 = _closure2_slot2;
                    var3 = _closure2_slot0;
                    var3 = var5[var3];
                    if(!(var4 != var3)) { _fun0004_ip = 176; continue _fun0004 }
 79:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var4 = var3[var2];
                    var3 = var4.set;
                    var5 = {};
                    var2 = 0;
                    var2 = var7[var2];
                    var5['translateX'] = var2;
                    var2 = new Array(4);
                    var2[0] = var5;
                    var5 = {};
                    var6 = 1;
                    var6 = var7[var6];
                    var5['translateY'] = var6;
                    var2[1] = var5;
                    var5 = {};
                    var6 = 2;
                    var6 = var7[var6];
                    var5['scale'] = var6;
                    var2[2] = var5;
                    var5 = {};
                    var6 = 3;
                    var6 = var7[var6];
                    var5['rotate'] = var6;
                    var2[3] = var5;
                    var2 = var3.bind(var4)(var2);
 176:
                    return var1;
                }
            };
            var35 = {};
            var37 = 14;
            var37 = var8[var37];
            var37 = var2.bind(var4)(var37);
            var37 = var37.cheapWorkletArrayShallowEqual;
            var35['cheapWorkletArrayShallowEqual'] = var37;
            var35['transformMap'] = var36;
            var35['id'] = var19;
            var27['__closure'] = var35;
            var35 = 9524238745484.0;
            var27['__workletHash'] = var35;
            var35 = _closure1_slot32;
            var27['__initData'] = var35;
            var27 = var29.bind(var31)(var28, var27);
            var27 = var8[var5];
            var29 = var2.bind(var4)(var27);
            var28 = var29.useSharedValue;
            var27 = {};
            var27['x'] = var34;
            var27['y'] = var33;
            var27['width'] = var30;
            var27['height'] = var7;
            var31 = var28.bind(var29)(var27);
            _closure2_slot13 = var31;
            var29 = _closure1_slot5;
            var28 = var29.useEffect;
            var27 = new Array(5);
            var27[0] = var34;
            var27[1] = var33;
            var27[2] = var30;
            var27[3] = var7;
            var27[4] = var31;
            var7 = function() {
                var3 = _closure2_slot13;
                var2 = var3.set;
                var1 = {};
                var5 = _closure2_slot4;
                var1['x'] = var5;
                var5 = _closure2_slot5;
                var1['y'] = var5;
                var5 = _closure2_slot6;
                var1['width'] = var5;
                var4 = _closure2_slot7;
                var1['height'] = var4;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var7 = var28.bind(var29)(var7, var27);
            var7 = var8[var5];
            var29 = var2.bind(var4)(var7);
            var28 = var29.useAnimatedReaction;
            var27 = function fe() {
                var2 = _closure2_slot3;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                return var1;
            };
            var7 = {};
            var7['activeId'] = var20;
            var27['__closure'] = var7;
            var7 = 15236705266931.0;
            var27['__workletHash'] = var7;
            var7 = _closure1_slot33;
            var27['__initData'] = var7;
            var7 = function he(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var1 = '';
                    if(!(var1 !== var3)) { _fun0005_ip = 52; continue _fun0005 }
 11:
                    var2 = _closure2_slot0;
                    if(!(var3 !== var2)) { _fun0005_ip = 118; continue _fun0005 }
 22:
                    var3 = _closure2_slot12;
                    var2 = var3.set;
                    var1 = {'x': 0, 'y': 0, 'width': 0, 'height': 0};
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 118; continue _fun0005;
 52:
                    var3 = _closure2_slot12;
                    var2 = var3.set;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.getTouchableMinimalRect;
                    var6 = _closure2_slot13;
                    var1 = var6.get;
                    var1 = var1.bind(var6)();
                    var1 = var4.bind(var5)(var1);
                    var1 = var2.bind(var3)(var1);
 118:
                    var1 = undefined;
                    return var1;
                }
            };
            var30 = {};
            var30['gestureDetectorDimensions'] = var16;
            var32 = var8[var32];
            var32 = var2.bind(var4)(var32);
            var32 = var32.getTouchableMinimalRect;
            var30['getTouchableMinimalRect'] = var32;
            var30['dimensionCopy'] = var31;
            var30['id'] = var19;
            var7['__closure'] = var30;
            var30 = 10589703698344.0;
            var7['__workletHash'] = var30;
            var30 = _closure1_slot34;
            var7['__initData'] = var30;
            var7 = var28.bind(var29)(var27, var7);
            var7 = {};
            var7['shouldUpdateStore'] = var26;
            var7['activeId'] = var20;
            var7['id'] = var19;
            var7['size'] = var25;
            var7['offsetX'] = var15;
            var7['offsetY'] = var14;
            var7['trashCanAreaRef'] = var24;
            var7['hoveringOverTrash'] = var23;
            var7['shouldTriggerHapticFeedback'] = var22;
            var7['multiTouchPan'] = var21;
            var7['scale'] = var13;
            var7['originScale'] = var18;
            var7['rotation'] = var12;
            var7['originRotate'] = var11;
            var7['position'] = var10;
            var7['onTap'] = var9;
            var7['onStart'] = var6;
            var6 = function(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var4 = arg1;
                    var2 = var4.shouldUpdateStore;
                    var _closure3_slot0 = var2;
                    var24 = var4.activeId;
                    var _closure3_slot1 = var24;
                    var17 = var4.id;
                    var _closure3_slot2 = var17;
                    var3 = var4.size;
                    var _closure3_slot3 = var3;
                    var30 = var4.offsetX;
                    var _closure3_slot4 = var30;
                    var11 = var4.offsetY;
                    var _closure3_slot5 = var11;
                    var23 = var4.hoveringOverTrash;
                    var _closure3_slot6 = var23;
                    var3 = var4.shouldTriggerHapticFeedback;
                    var _closure3_slot7 = var3;
                    var8 = var4.multiTouchPan;
                    var3 = var4.scale;
                    var _closure3_slot8 = var3;
                    var14 = var4.originScale;
                    var _closure3_slot9 = var14;
                    var9 = var4.rotation;
                    var _closure3_slot10 = var9;
                    var12 = var4.originRotate;
                    var _closure3_slot11 = var12;
                    var6 = var4.trashCanAreaRef;
                    var _closure3_slot12 = var6;
                    var32 = var4.position;
                    var _closure3_slot13 = var32;
                    var5 = var4.onTap;
                    var _closure3_slot14 = var5;
                    var4 = var4.onStart;
                    var _closure3_slot15 = var4;
                    var27 = undefined;
                    var _closure3_slot36 = var27;
                    var _closure3_slot37 = var27;
                    var _closure3_slot38 = var27;
                    var _closure3_slot39 = var27;
                    var _closure3_slot40 = var27;
                    var26 = _closure1_slot0;
                    var28 = _closure1_slot3;
                    var25 = 7;
                    var7 = var28[var25];
                    var13 = var26.bind(var27)(var7);
                    var10 = var13.useSharedValue;
                    var7 = '';
                    var19 = var10.bind(var13)(var7);
                    var _closure3_slot16 = var19;
                    var7 = var28[var25];
                    var13 = var26.bind(var27)(var7);
                    var10 = var13.useSharedValue;
                    var16 = 0;
                    var7 = {'x': 0, 'y': 0};
                    var29 = var10.bind(var13)(var7);
                    var _closure3_slot17 = var29;
                    var7 = var28[var25];
                    var10 = var26.bind(var27)(var7);
                    var7 = var10.useSharedValue;
                    var18 = false;
                    var31 = var7.bind(var10)(var18);
                    var _closure3_slot18 = var31;
                    var7 = var28[var25];
                    var10 = var26.bind(var27)(var7);
                    var7 = var10.useSharedValue;
                    var13 = var7.bind(var10)(var18);
                    var _closure3_slot19 = var13;
                    var7 = var28[var25];
                    var10 = var26.bind(var27)(var7);
                    var7 = var10.useSharedValue;
                    var10 = var7.bind(var10)(var18);
                    var _closure3_slot20 = var10;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var7 = var7.bind(var15)(var16);
                    var _closure3_slot21 = var7;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var7 = var7.bind(var15)(var16);
                    var _closure3_slot22 = var7;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var7 = var7.bind(var15)(var18);
                    var _closure3_slot23 = var7;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var7 = var7.bind(var15)(var18);
                    var _closure3_slot24 = var7;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var35 = var7.bind(var15)(var16);
                    var _closure3_slot25 = var35;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var34 = var7.bind(var15)(var16);
                    var _closure3_slot26 = var34;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var7 = var7.bind(var15)(var18);
                    var _closure3_slot27 = var7;
                    var7 = var28[var25];
                    var15 = var26.bind(var27)(var7);
                    var7 = var15.useSharedValue;
                    var7 = var7.bind(var15)(var18);
                    var _closure3_slot28 = var7;
                    var18 = _closure1_slot7;
                    var7 = 9;
                    var7 = var28[var7];
                    var7 = var26.bind(var27)(var7);
                    var15 = var7.shallow;
                    var7 = function(arg1) {
                        var2 = arg1;
                        var3 = var2.setXAxisOpacity;
                        var1 = new Array(2);
                        var1[0] = var3;
                        var2 = var2.setYAxisOpacity;
                        var1[1] = var2;
                        return var1;
                    };
                    var18 = var18.bind(var27)(var7, var15);
                    var15 = _closure1_slot4;
                    var7 = 2;
                    var15 = var15.bind(var27)(var18, var7);
                    var21 = var15[var16];
                    var _closure3_slot29 = var21;
                    var16 = 1;
                    var22 = var15[var16];
                    var _closure3_slot30 = var22;
                    var15 = var28[var25];
                    var33 = var26.bind(var27)(var15);
                    var20 = var33.useAnimatedReaction;
                    var18 = function W() {
                        var2 = _closure3_slot25;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var15 = {};
                    var15['xAxisOpacity'] = var35;
                    var18['__closure'] = var15;
                    var15 = 14228702998022.0;
                    var18['__workletHash'] = var15;
                    var15 = _closure1_slot12;
                    var18['__initData'] = var15;
                    var15 = function K(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure3_slot29;
                        var3 = var3.bind(var4)(var2);
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var35 = {};
                    var36 = var28[var25];
                    var36 = var26.bind(var27)(var36);
                    var36 = var36.runOnJS;
                    var35['runOnJS'] = var36;
                    var35['setXAxisOpacity'] = var21;
                    var15['__closure'] = var35;
                    var35 = 4709153678654.0;
                    var15['__workletHash'] = var35;
                    var35 = _closure1_slot13;
                    var15['__initData'] = var35;
                    var15 = var20.bind(var33)(var18, var15);
                    var15 = var28[var25];
                    var33 = var26.bind(var27)(var15);
                    var20 = var33.useAnimatedReaction;
                    var18 = function j() {
                        var2 = _closure3_slot26;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var15 = {};
                    var15['yAxisOpacity'] = var34;
                    var18['__closure'] = var15;
                    var15 = 13221376372096.0;
                    var18['__workletHash'] = var15;
                    var15 = _closure1_slot14;
                    var18['__initData'] = var15;
                    var15 = function q(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure3_slot30;
                        var3 = var3.bind(var4)(var2);
                        var2 = arg1;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var34 = {};
                    var35 = var28[var25];
                    var35 = var26.bind(var27)(var35);
                    var35 = var35.runOnJS;
                    var34['runOnJS'] = var35;
                    var34['setYAxisOpacity'] = var22;
                    var15['__closure'] = var34;
                    var34 = 1066618534652.0;
                    var15['__workletHash'] = var34;
                    var34 = _closure1_slot15;
                    var15['__initData'] = var34;
                    var15 = var20.bind(var33)(var18, var15);
                    var20 = _closure1_slot6;
                    var18 = var20.get;
                    var15 = 'screen';
                    var15 = var18.bind(var20)(var15);
                    var18 = var15.width;
                    var15 = var15.height;
                    var18 = var18 / var7;
                    var _closure3_slot31 = var18;
                    var15 = var15 / var7;
                    var _closure3_slot32 = var15;
                    var20 = _closure1_slot5;
                    var18 = var20.useCallback;
                    var15 = new Array(11);
                    var15[0] = var17;
                    var33 = var32.x;
                    var15[1] = var33;
                    var32 = var32.y;
                    var15[2] = var32;
                    var15[3] = var31;
                    var15[4] = var13;
                    var15[5] = var10;
                    var15[6] = var30;
                    var15[7] = var11;
                    var15[8] = var9;
                    var15[9] = var3;
                    var15[10] = var2;
                    var11 = function() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var3 = _closure3_slot0;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(!var2) { _fun0007_ip = 281; continue _fun0007 }
 22:
                            var3 = _closure3_slot18;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0007_ip = 281; continue _fun0007 }
 41:
                            var3 = _closure3_slot19;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0007_ip = 281; continue _fun0007 }
 60:
                            var3 = _closure3_slot20;
                            var2 = var3.get;
                            var2 = var2.bind(var3)();
                            if(var2) { _fun0007_ip = 281; continue _fun0007 }
 79:
                            var6 = {};
                            var2 = {};
                            var3 = _closure3_slot13;
                            var7 = var3.x;
                            var5 = _closure3_slot4;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var4 = var7 + var4;
                            var2['x'] = var4;
                            var7 = var3.y;
                            var4 = _closure3_slot5;
                            var3 = var4.get;
                            var3 = var3.bind(var4)();
                            var3 = var7 + var3;
                            var2['y'] = var3;
                            var6['position'] = var2;
                            var3 = {};
                            var7 = _closure3_slot10;
                            var2 = var7.get;
                            var2 = var2.bind(var7)();
                            var3['rotate'] = var2;
                            var2 = new Array(2);
                            var2[0] = var3;
                            var3 = {};
                            var8 = _closure3_slot8;
                            var7 = var8.get;
                            var7 = var7.bind(var8)();
                            var3['scale'] = var7;
                            var2[1] = var3;
                            var6['transform'] = var2;
                            var2 = var5.set;
                            var3 = 0;
                            var2 = var2.bind(var5)(var3);
                            var2 = var4.set;
                            var2 = var2.bind(var4)(var3);
                            var4 = _closure1_slot2;
                            var3 = _closure1_slot3;
                            var2 = 10;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.updateComponent;
                            var3 = _closure3_slot2;
                            var2 = true;
                            var2 = var4.bind(var5)(var3, var6, var2);
                            var3 = _closure3_slot0;
                            var2 = var3.set;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
 281:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = var18.bind(var20)(var11, var15);
                    var _closure3_slot33 = var11;
                    var18 = var20.useEffect;
                    var15 = new Array(2);
                    var15[0] = var29;
                    var15[1] = var6;
                    var6 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                            var1 = _closure3_slot12;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0008_ip = 36; continue _fun0008 }
 18:
                            var2 = var3.measureInWindow;
                            var1 = function(arg1, arg2) {
                                var3 = _closure3_slot17;
                                var2 = var3.set;
                                var1 = {};
                                var4 = arg1;
                                var1['x'] = var4;
                                var4 = arg2;
                                var1['y'] = var4;
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var1 = var2.bind(var3)(var1);
 36:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var6 = var18.bind(var20)(var6, var15);
                    var6 = var28[var25];
                    var29 = var26.bind(var27)(var6);
                    var18 = var29.useAnimatedReaction;
                    var15 = function Te() {
                        var2 = _closure3_slot16;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var6 = {};
                    var6['shouldDeleteId'] = var19;
                    var15['__closure'] = var6;
                    var6 = 11240701250690.0;
                    var15['__workletHash'] = var6;
                    var6 = _closure1_slot16;
                    var15['__initData'] = var6;
                    var6 = function pe(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var4 = arg1;
                            var3 = '';
                            if(!(var3 !== var4)) { _fun0009_ip = 152; continue _fun0009 }
 14:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot3;
                            var1 = 7;
                            var5 = var8[var1];
                            var2 = undefined;
                            var10 = var7.bind(var2)(var5);
                            var9 = var10.runOnJS;
                            var5 = 8;
                            var6 = var8[var5];
                            var6 = var7.bind(var2)(var6);
                            var6 = var6.triggerHapticFeedback;
                            var6 = var9.bind(var10)(var6);
                            var5 = var8[var5];
                            var5 = var7.bind(var2)(var5);
                            var5 = var5.HapticFeedbackTypes;
                            var5 = var5.IMPACT_LIGHT;
                            var5 = var6.bind(var2)(var5);
                            var1 = var8[var1];
                            var6 = var7.bind(var2)(var1);
                            var5 = var6.runOnJS;
                            var1 = 10;
                            var1 = var8[var1];
                            var1 = var7.bind(var2)(var1);
                            var1 = var1.removeComponent;
                            var1 = var5.bind(var6)(var1);
                            var1 = var1.bind(var2)(var4);
                            var2 = _closure3_slot16;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
 152:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var30 = {};
                    var31 = var28[var25];
                    var31 = var26.bind(var27)(var31);
                    var31 = var31.runOnJS;
                    var30['runOnJS'] = var31;
                    var31 = 8;
                    var32 = var28[var31];
                    var32 = var26.bind(var27)(var32);
                    var32 = var32.triggerHapticFeedback;
                    var30['triggerHapticFeedback'] = var32;
                    var31 = var28[var31];
                    var31 = var26.bind(var27)(var31);
                    var31 = var31.HapticFeedbackTypes;
                    var30['HapticFeedbackTypes'] = var31;
                    var31 = 10;
                    var31 = var28[var31];
                    var31 = var26.bind(var27)(var31);
                    var31 = var31.removeComponent;
                    var30['removeComponent'] = var31;
                    var30['shouldDeleteId'] = var19;
                    var6['__closure'] = var30;
                    var30 = 3179081026543.0;
                    var6['__workletHash'] = var30;
                    var30 = _closure1_slot17;
                    var6['__initData'] = var30;
                    var6 = var18.bind(var29)(var15, var6);
                    var18 = var20.useCallback;
                    var15 = function He() {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var3 = _closure3_slot1;
                            var1 = var3.get;
                            var3 = var1.bind(var3)();
                            var1 = _closure3_slot2;
                            var1 = var3 === var1;
                            if(!var1) { _fun0010_ip = 40; continue _fun0010 }
 27:
                            var4 = _closure3_slot6;
                            var3 = var4.get;
                            var1 = var3.bind(var4)();
 40:
                            if(!var1) { _fun0010_ip = 77; continue _fun0010 }
 43:
                            var4 = _closure3_slot16;
                            var3 = var4.set;
                            var1 = _closure3_slot2;
                            var1 = var3.bind(var4)(var1);
                            var4 = _closure3_slot6;
                            var3 = var4.set;
                            var1 = false;
                            var1 = var3.bind(var4)(var1);
 77:
                            var4 = _closure3_slot1;
                            var3 = var4.set;
                            var1 = '';
                            var1 = var3.bind(var4)(var1);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var4 = 7;
                            var3 = var6[var4];
                            var1 = undefined;
                            var8 = var5.bind(var1)(var3);
                            var7 = var8.runOnJS;
                            var3 = _closure3_slot29;
                            var7 = var7.bind(var8)(var3);
                            var3 = 0;
                            var7 = var7.bind(var1)(var3);
                            var4 = var6[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.runOnJS;
                            var2 = _closure3_slot30;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.bind(var1)(var3);
                            return var1;
                        }
                    };
                    var6 = {};
                    var6['activeId'] = var24;
                    var6['id'] = var17;
                    var6['hoveringOverTrash'] = var23;
                    var6['shouldDeleteId'] = var19;
                    var25 = var28[var25];
                    var25 = var26.bind(var27)(var25);
                    var25 = var25.runOnJS;
                    var6['runOnJS'] = var25;
                    var6['setXAxisOpacity'] = var21;
                    var6['setYAxisOpacity'] = var22;
                    var15['__closure'] = var6;
                    var6 = 8122530590483.0;
                    var15['__workletHash'] = var6;
                    var6 = _closure1_slot18;
                    var15['__initData'] = var6;
                    var6 = new Array(6);
                    var6[0] = var17;
                    var6[1] = var24;
                    var6[2] = var23;
                    var6[3] = var22;
                    var6[4] = var21;
                    var6[5] = var19;
                    var6 = var18.bind(var20)(var15, var6);
                    var _closure3_slot34 = var6;
                    var19 = var20.useCallback;
                    var18 = new Array(1);
                    var18[0] = var17;
                    var15 = function() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var4 = _closure1_slot8;
                            var3 = var4.getComponentById;
                            var1 = _closure3_slot2;
                            var1 = var3.bind(var4)(var1);
                            var4 = var1.type;
                            var6 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 11;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.RemixElement;
                            var3 = var3.BACKDROP;
                            if(!(var4 !== var3)) { _fun0011_ip = 111; continue _fun0011 }
 70:
                            var3 = _closure1_slot2;
                            var4 = _closure1_slot3;
                            var2 = 10;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.bringToFront;
                            var2 = {};
                            var5 = _closure3_slot2;
                            var2['id'] = var5;
                            var2 = var3.bind(var4)(var2);
 111:
                            return var1;
                        }
                    };
                    var15 = var19.bind(var20)(var15, var18);
                    var _closure3_slot35 = var15;
                    if(!var8) { _fun0006_ip = 1350; continue _fun0006 }
 1347:
                    var16 = var7;
 1350:
                    _closure3_slot36 = var16;
                    var4 = _closure1_slot5;
                    var8 = var4.useMemo;
                    var7 = new Array(5);
                    var7[0] = var17;
                    var7[1] = var16;
                    var7[2] = var15;
                    var7[3] = var6;
                    var7[4] = var11;
                    var6 = function() {
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var2 = 12;
                        var2 = var11[var2];
                        var9 = undefined;
                        var2 = var10.bind(var9)(var2);
                        var3 = var2.Gesture;
                        var2 = var3.Pan;
                        var5 = var2.bind(var3)();
                        var3 = var5.minPointers;
                        var2 = _closure3_slot36;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.averageTouches;
                        var2 = true;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onTouchesDown;
                        var2 = function o(arg1) {
                            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                                var1 = arg1;
                                var3 = var1.numberOfTouches;
                                var2 = _closure3_slot36;
                                if(!(!(var3 < var2))) { _fun0012_ip = 158; continue _fun0012 }
 23:
                                var3 = _closure3_slot1;
                                var2 = var3.get;
                                var3 = var2.bind(var3)();
                                var2 = '';
                                if(!(var2 === var3)) { _fun0012_ip = 105; continue _fun0012 }
 44:
                                var4 = _closure3_slot1;
                                var3 = var4.set;
                                var2 = _closure3_slot2;
                                var2 = var3.bind(var4)(var2);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 7;
                                var2 = var3[var2];
                                var3 = undefined;
                                var5 = var4.bind(var3)(var2);
                                var4 = var5.runOnJS;
                                var2 = _closure3_slot35;
                                var2 = var4.bind(var5)(var2);
                                var2 = var2.bind(var3)();
 105:
                                var3 = _closure3_slot15;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0012_ip = 158; continue _fun0012 }
 115:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 7;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.runOnJS;
                                var1 = _closure3_slot15;
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.bind(var2)();
 158:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var6 = {};
                        var8 = _closure3_slot36;
                        var6['minPointers'] = var8;
                        var8 = _closure3_slot1;
                        var6['activeId'] = var8;
                        var8 = _closure3_slot2;
                        var6['id'] = var8;
                        var8 = 7;
                        var12 = var11[var8];
                        var12 = var10.bind(var9)(var12);
                        var12 = var12.runOnJS;
                        var6['runOnJS'] = var12;
                        var12 = _closure3_slot35;
                        var6['maybeBringToFront'] = var12;
                        var12 = _closure3_slot15;
                        var6['onStart'] = var12;
                        var2['__closure'] = var6;
                        var6 = 8322040599556.0;
                        var2['__workletHash'] = var6;
                        var6 = _closure1_slot23;
                        var2['__initData'] = var6;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onStart;
                        var2 = function s() {
                            var3 = _closure3_slot18;
                            var2 = var3.set;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var6 = {};
                        var18 = _closure3_slot18;
                        var6['isPanGestureActive'] = var18;
                        var2['__closure'] = var6;
                        var6 = 16397754167519.0;
                        var2['__workletHash'] = var6;
                        var6 = _closure1_slot22;
                        var2['__initData'] = var6;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onUpdate;
                        var2 = function n(arg1) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                                var3 = arg1;
                                var6 = _closure3_slot13;
                                var4 = var6.x;
                                var5 = _closure3_slot4;
                                var2 = var5.get;
                                var2 = var2.bind(var5)();
                                var5 = var4 + var2;
                                var2 = _closure3_slot3;
                                var4 = var2.width;
                                var9 = 2;
                                var4 = var4 / var9;
                                var4 = var5 + var4;
                                var7 = var6.x;
                                var5 = var3.translationX;
                                var7 = var7 + var5;
                                var5 = var2.width;
                                var5 = var5 / var9;
                                var7 = var7 + var5;
                                var5 = _closure3_slot31;
                                var6 = var6.x;
                                var2 = var2.width;
                                var2 = var2 / var9;
                                var2 = var6 + var2;
                                var5 = var5 - var2;
                                var6 = _closure3_slot24;
                                var2 = var6.get;
                                var2 = var2.bind(var6)();
                                if(var2) { _fun0013_ip = 418; continue _fun0013 }
 125:
                                var6 = _closure3_slot27;
                                var2 = var6.get;
                                var2 = var2.bind(var6)();
                                if(!var2) { _fun0013_ip = 208; continue _fun0013 }
 141:
                                var2 = global;
                                var8 = var2.Math;
                                var6 = var8.abs;
                                var2 = var3.velocityY;
                                var6 = var6.bind(var8)(var2);
                                var2 = 300;
                                if(!(var6 < var2)) { _fun0013_ip = 208; continue _fun0013 }
 176:
                                var2 = _closure3_slot31;
                                if(!(var4 <= var2)) { _fun0013_ip = 192; continue _fun0013 }
 184:
                                var2 = _closure3_slot31;
                                if(!(!(var7 > var2))) { _fun0013_ip = 266; continue _fun0013 }
 192:
                                var2 = _closure3_slot31;
                                if(!(var4 >= var2)) { _fun0013_ip = 208; continue _fun0013 }
 200:
                                var2 = _closure3_slot31;
                                if(!(!(var7 < var2))) { _fun0013_ip = 266; continue _fun0013 }
 208:
                                var6 = _closure3_slot27;
                                var4 = var6.set;
                                var2 = true;
                                var2 = var4.bind(var6)(var2);
                                var6 = _closure3_slot4;
                                var4 = var6.set;
                                var8 = var3.translationX;
                                var10 = _closure3_slot21;
                                var2 = var10.get;
                                var2 = var2.bind(var10)();
                                var2 = var8 - var2;
                                var2 = var4.bind(var6)(var2);
                                _fun0013_ip = 592; continue _fun0013;
 266:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var2 = 7;
                                var2 = var10[var2];
                                var6 = undefined;
                                var12 = var8.bind(var6)(var2);
                                var11 = var12.runOnJS;
                                var2 = 8;
                                var4 = var10[var2];
                                var4 = var8.bind(var6)(var4);
                                var4 = var4.triggerHapticFeedback;
                                var4 = var11.bind(var12)(var4);
                                var2 = var10[var2];
                                var2 = var8.bind(var6)(var2);
                                var2 = var2.HapticFeedbackTypes;
                                var2 = var2.IMPACT_LIGHT;
                                var2 = var4.bind(var6)(var2);
                                var4 = _closure3_slot4;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var5);
                                var6 = _closure3_slot21;
                                var4 = var6.set;
                                var2 = _closure3_slot31;
                                var2 = var7 - var2;
                                var2 = var4.bind(var6)(var2);
                                var6 = _closure3_slot24;
                                var4 = var6.set;
                                var2 = true;
                                var2 = var4.bind(var6)(var2);
                                var6 = _closure3_slot27;
                                var4 = var6.set;
                                var2 = false;
                                var2 = var4.bind(var6)(var2);
                                _fun0013_ip = 592; continue _fun0013;
 418:
                                var2 = global;
                                var8 = var2.Math;
                                var6 = var8.abs;
                                var4 = _closure3_slot31;
                                var4 = var7 - var4;
                                var6 = var6.bind(var8)(var4);
                                var4 = 15;
                                if(!(!(var6 > var4))) { _fun0013_ip = 523; continue _fun0013 }
 452:
                                var6 = var2.Math;
                                var4 = var6.abs;
                                var2 = var3.velocityX;
                                var4 = var4.bind(var6)(var2);
                                var2 = 300;
                                if(!(!(var4 > var2))) { _fun0013_ip = 523; continue _fun0013 }
 485:
                                var6 = _closure3_slot21;
                                var4 = var6.set;
                                var2 = _closure3_slot31;
                                var2 = var7 - var2;
                                var2 = var4.bind(var6)(var2);
                                var4 = _closure3_slot4;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var5);
                                _fun0013_ip = 592; continue _fun0013;
 523:
                                var5 = _closure3_slot24;
                                var4 = var5.set;
                                var2 = false;
                                var2 = var4.bind(var5)(var2);
                                var5 = _closure3_slot27;
                                var4 = var5.set;
                                var2 = true;
                                var2 = var4.bind(var5)(var2);
                                var5 = _closure3_slot4;
                                var4 = var5.set;
                                var6 = var3.translationX;
                                var7 = _closure3_slot21;
                                var2 = var7.get;
                                var2 = var2.bind(var7)();
                                var2 = var6 - var2;
                                var2 = var4.bind(var5)(var2);
 592:
                                var6 = _closure3_slot13;
                                var4 = var6.y;
                                var5 = _closure3_slot5;
                                var2 = var5.get;
                                var2 = var2.bind(var5)();
                                var5 = var4 + var2;
                                var2 = _closure3_slot3;
                                var4 = var2.height;
                                var4 = var4 / var9;
                                var4 = var5 + var4;
                                var7 = var6.y;
                                var5 = var3.translationY;
                                var7 = var7 + var5;
                                var5 = var2.height;
                                var5 = var5 / var9;
                                var7 = var7 + var5;
                                var5 = _closure3_slot32;
                                var6 = var6.y;
                                var2 = var2.height;
                                var2 = var2 / var9;
                                var2 = var6 + var2;
                                var5 = var5 - var2;
                                var6 = _closure3_slot23;
                                var2 = var6.get;
                                var2 = var2.bind(var6)();
                                if(var2) { _fun0013_ip = 1001; continue _fun0013 }
 708:
                                var6 = _closure3_slot28;
                                var2 = var6.get;
                                var2 = var2.bind(var6)();
                                if(!var2) { _fun0013_ip = 791; continue _fun0013 }
 724:
                                var2 = global;
                                var8 = var2.Math;
                                var6 = var8.abs;
                                var2 = var3.velocityY;
                                var6 = var6.bind(var8)(var2);
                                var2 = 300;
                                if(!(var6 < var2)) { _fun0013_ip = 791; continue _fun0013 }
 759:
                                var2 = _closure3_slot32;
                                if(!(var4 >= var2)) { _fun0013_ip = 775; continue _fun0013 }
 767:
                                var2 = _closure3_slot32;
                                if(!(!(var7 < var2))) { _fun0013_ip = 849; continue _fun0013 }
 775:
                                var2 = _closure3_slot32;
                                if(!(var4 <= var2)) { _fun0013_ip = 791; continue _fun0013 }
 783:
                                var2 = _closure3_slot32;
                                if(!(!(var7 > var2))) { _fun0013_ip = 849; continue _fun0013 }
 791:
                                var6 = _closure3_slot28;
                                var4 = var6.set;
                                var2 = true;
                                var2 = var4.bind(var6)(var2);
                                var6 = _closure3_slot5;
                                var4 = var6.set;
                                var8 = var3.translationY;
                                var10 = _closure3_slot22;
                                var2 = var10.get;
                                var2 = var2.bind(var10)();
                                var2 = var8 - var2;
                                var2 = var4.bind(var6)(var2);
                                _fun0013_ip = 1175; continue _fun0013;
 849:
                                var8 = _closure1_slot0;
                                var10 = _closure1_slot3;
                                var2 = 7;
                                var2 = var10[var2];
                                var6 = undefined;
                                var12 = var8.bind(var6)(var2);
                                var11 = var12.runOnJS;
                                var2 = 8;
                                var4 = var10[var2];
                                var4 = var8.bind(var6)(var4);
                                var4 = var4.triggerHapticFeedback;
                                var4 = var11.bind(var12)(var4);
                                var2 = var10[var2];
                                var2 = var8.bind(var6)(var2);
                                var2 = var2.HapticFeedbackTypes;
                                var2 = var2.IMPACT_LIGHT;
                                var2 = var4.bind(var6)(var2);
                                var4 = _closure3_slot5;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var5);
                                var6 = _closure3_slot22;
                                var4 = var6.set;
                                var2 = _closure3_slot32;
                                var2 = var7 - var2;
                                var2 = var4.bind(var6)(var2);
                                var6 = _closure3_slot23;
                                var4 = var6.set;
                                var2 = true;
                                var2 = var4.bind(var6)(var2);
                                var6 = _closure3_slot28;
                                var4 = var6.set;
                                var2 = false;
                                var2 = var4.bind(var6)(var2);
                                _fun0013_ip = 1175; continue _fun0013;
 1001:
                                var2 = global;
                                var8 = var2.Math;
                                var6 = var8.abs;
                                var4 = _closure3_slot32;
                                var4 = var7 - var4;
                                var6 = var6.bind(var8)(var4);
                                var4 = 15;
                                if(!(!(var6 > var4))) { _fun0013_ip = 1106; continue _fun0013 }
 1035:
                                var6 = var2.Math;
                                var4 = var6.abs;
                                var2 = var3.velocityY;
                                var4 = var4.bind(var6)(var2);
                                var2 = 300;
                                if(!(!(var4 > var2))) { _fun0013_ip = 1106; continue _fun0013 }
 1068:
                                var6 = _closure3_slot22;
                                var4 = var6.set;
                                var2 = _closure3_slot32;
                                var2 = var7 - var2;
                                var2 = var4.bind(var6)(var2);
                                var4 = _closure3_slot5;
                                var2 = var4.set;
                                var2 = var2.bind(var4)(var5);
                                _fun0013_ip = 1175; continue _fun0013;
 1106:
                                var5 = _closure3_slot23;
                                var4 = var5.set;
                                var2 = false;
                                var2 = var4.bind(var5)(var2);
                                var5 = _closure3_slot28;
                                var4 = var5.set;
                                var2 = true;
                                var2 = var4.bind(var5)(var2);
                                var5 = _closure3_slot5;
                                var4 = var5.set;
                                var6 = var3.translationY;
                                var7 = _closure3_slot22;
                                var2 = var7.get;
                                var2 = var2.bind(var7)();
                                var2 = var6 - var2;
                                var2 = var4.bind(var5)(var2);
 1175:
                                var2 = global;
                                var6 = var2.Math;
                                var5 = var6.abs;
                                var4 = _closure3_slot13;
                                var7 = var4.x;
                                var8 = _closure3_slot4;
                                var4 = var8.get;
                                var4 = var4.bind(var8)();
                                var7 = var7 + var4;
                                var4 = _closure3_slot3;
                                var4 = var4.width;
                                var4 = var4 / var9;
                                var7 = var7 + var4;
                                var4 = _closure3_slot31;
                                var4 = var7 - var4;
                                var10 = var5.bind(var6)(var4);
                                var8 = _closure3_slot26;
                                var6 = var8.set;
                                var7 = 50;
                                var11 = var10 < var7;
                                var4 = 0;
                                if(!var11) { _fun0013_ip = 1277; continue _fun0013 }
 1266:
                                var11 = var10 / var7;
                                var10 = 1;
                                var4 = var10 - var11;
 1277:
                                var4 = var6.bind(var8)(var4);
                                var6 = var2.Math;
                                var4 = var6.abs;
                                var2 = _closure3_slot13;
                                var8 = var2.y;
                                var10 = _closure3_slot5;
                                var2 = var10.get;
                                var2 = var2.bind(var10)();
                                var8 = var8 + var2;
                                var2 = _closure3_slot3;
                                var2 = var2.height;
                                var2 = var2 / var9;
                                var8 = var8 + var2;
                                var2 = _closure3_slot32;
                                var2 = var8 - var2;
                                var6 = var4.bind(var6)(var2);
                                var4 = _closure3_slot25;
                                var2 = var4.set;
                                var8 = var6 < var7;
                                var5 = 0;
                                if(!var8) { _fun0013_ip = 1379; continue _fun0013 }
 1368:
                                var7 = var6 / var7;
                                var6 = 1;
                                var5 = var6 - var7;
 1379:
                                var2 = var2.bind(var4)(var5);
                                var4 = var3.absoluteX;
                                var5 = _closure3_slot17;
                                var2 = var5.get;
                                var2 = var2.bind(var5)();
                                var2 = var2.x;
                                if(!(var4 >= var2)) { _fun0013_ip = 1561; continue _fun0013 }
 1415:
                                var5 = var3.absoluteX;
                                var4 = _closure3_slot17;
                                var2 = var4.get;
                                var2 = var2.bind(var4)();
                                var8 = var2.x;
                                var9 = _closure1_slot0;
                                var4 = _closure1_slot3;
                                var7 = 13;
                                var4 = var4[var7];
                                var6 = undefined;
                                var4 = var9.bind(var6)(var4);
                                var4 = var4.TRASH_TAP_TARGET_SIZE;
                                var4 = var8 + var4;
                                if(!(var5 <= var4)) { _fun0013_ip = 1561; continue _fun0013 }
 1478:
                                var5 = var3.absoluteY;
                                var8 = _closure3_slot17;
                                var4 = var8.get;
                                var4 = var4.bind(var8)();
                                var4 = var4.y;
                                if(!(var5 >= var4)) { _fun0013_ip = 1561; continue _fun0013 }
 1506:
                                var3 = var3.absoluteY;
                                var5 = _closure3_slot17;
                                var4 = var5.get;
                                var4 = var4.bind(var5)();
                                var4 = var4.y;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var2 = var2[var7];
                                var2 = var5.bind(var6)(var2);
                                var2 = var2.TRASH_TAP_TARGET_SIZE;
                                var2 = var4 + var2;
                                if(!(!(var3 <= var2))) { _fun0013_ip = 1611; continue _fun0013 }
 1561:
                                var3 = _closure3_slot6;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                if(!var2) { _fun0013_ip = 1657; continue _fun0013 }
 1577:
                                var4 = _closure3_slot6;
                                var3 = var4.set;
                                var2 = false;
                                var2 = var3.bind(var4)(var2);
                                var4 = _closure3_slot7;
                                var3 = var4.set;
                                var2 = true;
                                var2 = var3.bind(var4)(var2);
                                _fun0013_ip = 1657; continue _fun0013;
 1611:
                                var3 = _closure3_slot6;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                if(var2) { _fun0013_ip = 1657; continue _fun0013 }
 1627:
                                var4 = _closure3_slot6;
                                var2 = var4.set;
                                var3 = true;
                                var2 = var2.bind(var4)(var3);
                                var2 = _closure3_slot7;
                                var1 = var2.set;
                                var1 = var1.bind(var2)(var3);
 1657:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var6 = {};
                        var12 = _closure3_slot13;
                        var6['position'] = var12;
                        var12 = _closure3_slot4;
                        var6['offsetX'] = var12;
                        var12 = _closure3_slot3;
                        var6['size'] = var12;
                        var12 = _closure3_slot31;
                        var6['canvasCenterX'] = var12;
                        var14 = _closure3_slot24;
                        var6['stickToHorizontalCenter'] = var14;
                        var12 = 15;
                        var6['STICKY_DISTANCE_THRESHOLD'] = var12;
                        var12 = 300;
                        var6['STICKY_VELOCITY_THRESHOLD'] = var12;
                        var17 = _closure3_slot27;
                        var6['yAxisStickEnabled'] = var17;
                        var13 = _closure3_slot21;
                        var6['dragPointToSnapPointDeltaX'] = var13;
                        var12 = var11[var8];
                        var12 = var10.bind(var9)(var12);
                        var12 = var12.runOnJS;
                        var6['runOnJS'] = var12;
                        var12 = 8;
                        var15 = var11[var12];
                        var15 = var10.bind(var9)(var15);
                        var15 = var15.triggerHapticFeedback;
                        var6['triggerHapticFeedback'] = var15;
                        var12 = var11[var12];
                        var12 = var10.bind(var9)(var12);
                        var12 = var12.HapticFeedbackTypes;
                        var6['HapticFeedbackTypes'] = var12;
                        var12 = _closure3_slot5;
                        var6['offsetY'] = var12;
                        var12 = _closure3_slot32;
                        var6['canvasCenterY'] = var12;
                        var15 = _closure3_slot23;
                        var6['stickToVerticalCenter'] = var15;
                        var16 = _closure3_slot28;
                        var6['xAxisStickEnabled'] = var16;
                        var12 = _closure3_slot22;
                        var6['dragPointToSnapPointDeltaY'] = var12;
                        var19 = _closure3_slot26;
                        var6['yAxisOpacity'] = var19;
                        var19 = _closure3_slot25;
                        var6['xAxisOpacity'] = var19;
                        var19 = _closure3_slot17;
                        var6['trashCanArea'] = var19;
                        var19 = 13;
                        var19 = var11[var19];
                        var19 = var10.bind(var9)(var19);
                        var19 = var19.TRASH_TAP_TARGET_SIZE;
                        var6['TRASH_TAP_TARGET_SIZE'] = var19;
                        var19 = _closure3_slot6;
                        var6['hoveringOverTrash'] = var19;
                        var19 = _closure3_slot7;
                        var6['shouldTriggerHapticFeedback'] = var19;
                        var2['__closure'] = var6;
                        var6 = 3701668814868.0;
                        var2['__workletHash'] = var6;
                        var6 = _closure1_slot21;
                        var2['__initData'] = var6;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onTouchesUp;
                        var2 = function t(arg1, arg2) {
                            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                                var3 = arg2;
                                var1 = arg1;
                                var4 = var1.numberOfTouches;
                                var2 = _closure3_slot36;
                                if(!(var4 < var2)) { _fun0014_ip = 42; continue _fun0014 }
 23:
                                var2 = var3.end;
                                var2 = var2.bind(var3)();
                                var2 = _closure3_slot34;
                                var1 = undefined;
                                var1 = var2.bind(var1)();
 42:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var19 = {};
                        var6 = _closure3_slot36;
                        var19['minPointers'] = var6;
                        var6 = _closure3_slot34;
                        var19['maybeDeleteAndClearActive'] = var6;
                        var2['__closure'] = var19;
                        var19 = 3135590291679.0;
                        var2['__workletHash'] = var19;
                        var19 = _closure1_slot20;
                        var2['__initData'] = var19;
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.onFinalize;
                        var1 = function e(arg1) {
                            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                                var1 = arg1;
                                var5 = _closure3_slot18;
                                var3 = var5.set;
                                var4 = false;
                                var3 = var3.bind(var5)(var4);
                                var5 = global;
                                var7 = var5.Math;
                                var6 = var7.abs;
                                var3 = var1.translationX;
                                var6 = var6.bind(var7)(var3);
                                var3 = 2;
                                var6 = var6 > var3;
                                if(var6) { _fun0015_ip = 84; continue _fun0015 }
 57:
                                var7 = var5.Math;
                                var5 = var7.abs;
                                var1 = var1.translationY;
                                var1 = var5.bind(var7)(var1);
                                var6 = var1 > var3;
 84:
                                var5 = _closure3_slot0;
                                var3 = var5.set;
                                var1 = var5.get;
                                var1 = var1.bind(var5)();
                                if(var1) { _fun0015_ip = 108; continue _fun0015 }
 105:
                                var1 = var6;
 108:
                                var1 = var3.bind(var5)(var1);
                                var3 = _closure3_slot27;
                                var1 = var3.set;
                                var1 = var1.bind(var3)(var4);
                                var3 = _closure3_slot28;
                                var1 = var3.set;
                                var1 = var1.bind(var3)(var4);
                                var3 = _closure3_slot23;
                                var1 = var3.set;
                                var1 = var1.bind(var3)(var4);
                                var3 = _closure3_slot24;
                                var1 = var3.set;
                                var1 = var1.bind(var3)(var4);
                                var3 = _closure3_slot21;
                                var1 = var3.set;
                                var4 = 0;
                                var1 = var1.bind(var3)(var4);
                                var3 = _closure3_slot22;
                                var1 = var3.set;
                                var1 = var1.bind(var3)(var4);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 7;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var4.bind(var1)(var3);
                                var4 = var5.runOnJS;
                                var3 = _closure3_slot33;
                                var3 = var4.bind(var5)(var3);
                                var3 = var3.bind(var1)();
                                var2 = _closure3_slot34;
                                var2 = var2.bind(var1)();
                                return var1;
                            }
                        };
                        var5 = {};
                        var5['isPanGestureActive'] = var18;
                        var18 = 2;
                        var5['MIN_MOVE_DISTANCE'] = var18;
                        var18 = _closure3_slot0;
                        var5['shouldUpdateStore'] = var18;
                        var5['yAxisStickEnabled'] = var17;
                        var5['xAxisStickEnabled'] = var16;
                        var5['stickToVerticalCenter'] = var15;
                        var5['stickToHorizontalCenter'] = var14;
                        var5['dragPointToSnapPointDeltaX'] = var13;
                        var5['dragPointToSnapPointDeltaY'] = var12;
                        var8 = var11[var8];
                        var8 = var10.bind(var9)(var8);
                        var8 = var8.runOnJS;
                        var5['runOnJS'] = var8;
                        var7 = _closure3_slot33;
                        var5['maybeUpdateStore'] = var7;
                        var5['maybeDeleteAndClearActive'] = var6;
                        var1['__closure'] = var5;
                        var5 = 13435279792036.0;
                        var1['__workletHash'] = var5;
                        var4 = _closure1_slot19;
                        var1['__initData'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var7 = var8.bind(var4)(var6, var7);
                    _closure3_slot37 = var7;
                    var8 = var4.useMemo;
                    var6 = new Array(1);
                    var6[0] = var5;
                    var5 = function() {
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var1 = 12;
                        var1 = var9[var1];
                        var7 = undefined;
                        var1 = var8.bind(var7)(var1);
                        var2 = var1.Gesture;
                        var1 = var2.Tap;
                        var3 = var1.bind(var2)();
                        var2 = var3.enabled;
                        var6 = _closure3_slot14;
                        var1 = null;
                        var1 = var1 != var6;
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.onStart;
                        var1 = function e() {
                            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                                var3 = _closure3_slot14;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0016_ip = 56; continue _fun0016 }
 13:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var2 = 7;
                                var3 = var3[var2];
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.runOnJS;
                                var1 = _closure3_slot14;
                                var1 = var3.bind(var4)(var1);
                                var1 = var1.bind(var2)();
 56:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = {};
                        var5['onTap'] = var6;
                        var6 = 7;
                        var6 = var9[var6];
                        var6 = var8.bind(var7)(var6);
                        var6 = var6.runOnJS;
                        var5['runOnJS'] = var6;
                        var1['__closure'] = var5;
                        var5 = 6622214151589.0;
                        var1['__workletHash'] = var5;
                        var4 = _closure1_slot24;
                        var1['__initData'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var8 = var8.bind(var4)(var5, var6);
                    _closure3_slot38 = var8;
                    var6 = var4.useMemo;
                    var5 = new Array(5);
                    var5[0] = var14;
                    var5[1] = var11;
                    var5[2] = var13;
                    var5[3] = var3;
                    var5[4] = var2;
                    var3 = function() {
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var2 = 12;
                        var2 = var10[var2];
                        var8 = undefined;
                        var2 = var9.bind(var8)(var2);
                        var3 = var2.Gesture;
                        var2 = var3.Pinch;
                        var5 = var2.bind(var3)();
                        var3 = var5.onStart;
                        var2 = function n() {
                            var3 = _closure3_slot19;
                            var2 = var3.set;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var11 = {};
                        var7 = _closure3_slot19;
                        var11['isPinchGestureActive'] = var7;
                        var2['__closure'] = var11;
                        var11 = 12307014870036.0;
                        var2['__workletHash'] = var11;
                        var11 = _closure1_slot27;
                        var2['__initData'] = var11;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onUpdate;
                        var2 = function t(arg1) {
                            var3 = _closure3_slot8;
                            var2 = var3.set;
                            var4 = _closure3_slot9;
                            var1 = arg1;
                            var1 = var1.scale;
                            var1 = var4 * var1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var11 = {};
                        var12 = _closure3_slot8;
                        var11['scale'] = var12;
                        var12 = _closure3_slot9;
                        var11['originScale'] = var12;
                        var2['__closure'] = var11;
                        var11 = 5712333645725.0;
                        var2['__workletHash'] = var11;
                        var11 = _closure1_slot26;
                        var2['__initData'] = var11;
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.onFinalize;
                        var1 = function e(arg1) {
                            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                var4 = _closure3_slot19;
                                var3 = var4.set;
                                var1 = false;
                                var1 = var3.bind(var4)(var1);
                                var1 = global;
                                var4 = var1.Math;
                                var3 = var4.abs;
                                var1 = arg1;
                                var5 = var1.scale;
                                var1 = 1;
                                var1 = var5 - var1;
                                var3 = var3.bind(var4)(var1);
                                var1 = 0.01;
                                var5 = var3 > var1;
                                var4 = _closure3_slot0;
                                var3 = var4.set;
                                var1 = var4.get;
                                var1 = var1.bind(var4)();
                                if(var1) { _fun0017_ip = 92; continue _fun0017 }
 89:
                                var1 = var5;
 92:
                                var1 = var3.bind(var4)(var1);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 7;
                                var3 = var3[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.runOnJS;
                                var2 = _closure3_slot33;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.bind(var1)();
                                return var1;
                            }
                        };
                        var5 = {};
                        var5['isPinchGestureActive'] = var7;
                        var7 = 0.01;
                        var5['MIN_ZOOM'] = var7;
                        var7 = _closure3_slot0;
                        var5['shouldUpdateStore'] = var7;
                        var7 = 7;
                        var7 = var10[var7];
                        var7 = var9.bind(var8)(var7);
                        var7 = var7.runOnJS;
                        var5['runOnJS'] = var7;
                        var6 = _closure3_slot33;
                        var5['maybeUpdateStore'] = var6;
                        var1['__closure'] = var5;
                        var5 = 10264760621082.0;
                        var1['__workletHash'] = var5;
                        var4 = _closure1_slot25;
                        var1['__initData'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var6 = var6.bind(var4)(var3, var5);
                    _closure3_slot39 = var6;
                    var5 = var4.useMemo;
                    var3 = new Array(5);
                    var3[0] = var12;
                    var3[1] = var11;
                    var3[2] = var10;
                    var3[3] = var9;
                    var3[4] = var2;
                    var2 = function() {
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var2 = 12;
                        var2 = var10[var2];
                        var8 = undefined;
                        var2 = var9.bind(var8)(var2);
                        var3 = var2.Gesture;
                        var2 = var3.Rotation;
                        var5 = var2.bind(var3)();
                        var3 = var5.onStart;
                        var2 = function n() {
                            var3 = _closure3_slot20;
                            var2 = var3.set;
                            var1 = true;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var11 = {};
                        var7 = _closure3_slot20;
                        var11['isRotateGestureActive'] = var7;
                        var2['__closure'] = var11;
                        var11 = 10053271408222.0;
                        var2['__workletHash'] = var11;
                        var11 = _closure1_slot30;
                        var2['__initData'] = var11;
                        var5 = var3.bind(var5)(var2);
                        var3 = var5.onUpdate;
                        var2 = function t(arg1) {
                            var3 = _closure3_slot10;
                            var2 = var3.set;
                            var4 = _closure3_slot11;
                            var1 = arg1;
                            var1 = var1.rotation;
                            var1 = var4 + var1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var11 = {};
                        var12 = _closure3_slot10;
                        var11['rotation'] = var12;
                        var12 = _closure3_slot11;
                        var11['originRotate'] = var12;
                        var2['__closure'] = var11;
                        var11 = 8387586134388.0;
                        var2['__workletHash'] = var11;
                        var11 = _closure1_slot29;
                        var2['__initData'] = var11;
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.onFinalize;
                        var1 = function e(arg1) {
                            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                                var4 = _closure3_slot20;
                                var3 = var4.set;
                                var1 = false;
                                var1 = var3.bind(var4)(var1);
                                var1 = arg1;
                                var3 = var1.rotation;
                                var1 = 0.01;
                                var5 = var3 > var1;
                                var4 = _closure3_slot0;
                                var3 = var4.set;
                                var1 = var4.get;
                                var1 = var1.bind(var4)();
                                if(var1) { _fun0018_ip = 66; continue _fun0018 }
 63:
                                var1 = var5;
 66:
                                var1 = var3.bind(var4)(var1);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 7;
                                var3 = var3[var1];
                                var1 = undefined;
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.runOnJS;
                                var2 = _closure3_slot33;
                                var2 = var3.bind(var4)(var2);
                                var2 = var2.bind(var1)();
                                return var1;
                            }
                        };
                        var5 = {};
                        var5['isRotateGestureActive'] = var7;
                        var7 = 0.01;
                        var5['MIN_ROTATION'] = var7;
                        var7 = _closure3_slot0;
                        var5['shouldUpdateStore'] = var7;
                        var7 = 7;
                        var7 = var10[var7];
                        var7 = var9.bind(var8)(var7);
                        var7 = var7.runOnJS;
                        var5['runOnJS'] = var7;
                        var6 = _closure3_slot33;
                        var5['maybeUpdateStore'] = var6;
                        var1['__closure'] = var5;
                        var5 = 3627528950890.0;
                        var1['__workletHash'] = var5;
                        var4 = _closure1_slot28;
                        var1['__initData'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var5.bind(var4)(var2, var3);
                    _closure3_slot40 = var5;
                    var3 = var4.useMemo;
                    var2 = new Array(4);
                    var2[0] = var8;
                    var2[1] = var7;
                    var2[2] = var6;
                    var2[3] = var5;
                    var1 = function() {
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var5 = 12;
                        var1 = var8[var5];
                        var6 = undefined;
                        var1 = var7.bind(var6)(var1);
                        var4 = var1.Gesture;
                        var3 = var4.Race;
                        var2 = _closure3_slot38;
                        var5 = var8[var5];
                        var5 = var7.bind(var6)(var5);
                        var8 = var5.Gesture;
                        var7 = var8.Simultaneous;
                        var6 = _closure3_slot37;
                        var5 = _closure3_slot39;
                        var1 = _closure3_slot40;
                        var1 = var7.bind(var8)(var6, var5, var1);
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                }
            };
            var9 = var6.bind(var4)(var7);
            var6 = _closure1_slot1;
            var7 = 15;
            var7 = var8[var7];
            var7 = var6.bind(var4)(var7);
            var18 = var7.bind(var4)();
            _closure2_slot14 = var18;
            var7 = var8[var5];
            var10 = var2.bind(var4)(var7);
            var7 = var10.useAnimatedStyle;
            var3 = function Te() {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = _closure2_slot0;
                    if(!(var2 !== var1)) { _fun0019_ip = 281; continue _fun0019 }
 27:
                    var1 = {};
                    var2 = 'absolute';
                    var1['position'] = var2;
                    var4 = _closure2_slot12;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.x;
                    var1['left'] = var2;
                    var4 = _closure2_slot12;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.y;
                    var1['top'] = var2;
                    var4 = _closure2_slot12;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.width;
                    var1['width'] = var2;
                    var4 = _closure2_slot12;
                    var2 = var4.get;
                    var2 = var2.bind(var4)();
                    var2 = var2.height;
                    var1['height'] = var2;
                    var4 = _closure2_slot1;
                    var2 = 'transparent';
                    if(!var4) { _fun0019_ip = 142; continue _fun0019 }
 136:
                    var2 = 'rgba(100, 200, 300, 0.4)';
 142:
                    var1['backgroundColor'] = var2;
                    var4 = {};
                    var5 = _closure2_slot8;
                    var2 = var5.get;
                    var2 = var2.bind(var5)();
                    var4['translateX'] = var2;
                    var2 = new Array(4);
                    var2[0] = var4;
                    var4 = {};
                    var6 = _closure2_slot9;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var4['translateY'] = var5;
                    var2[1] = var4;
                    var4 = {};
                    var6 = _closure2_slot10;
                    var5 = var6.get;
                    var5 = var5.bind(var6)();
                    var4['scale'] = var5;
                    var2[2] = var4;
                    var4 = {};
                    var6 = _closure2_slot11;
                    var5 = var6.get;
                    var8 = var5.bind(var6)();
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var7 = var5.concat;
                    var6 = '';
                    var5 = 'rad';
                    var5 = var7.bind(var6)(var8, var5);
                    var4['rotateZ'] = var5;
                    var2[3] = var4;
                    var1['transform'] = var2;
                    _fun0019_ip = 353; continue _fun0019;
 281:
                    var2 = {'position': 'absolute', 'left': 0, 'top': 0};
                    var4 = _closure2_slot14;
                    var4 = var4.width;
                    var2['width'] = var4;
                    var4 = _closure2_slot14;
                    var4 = var4.height;
                    var2['height'] = var4;
                    var4 = _closure2_slot1;
                    var3 = 'transparent';
                    if(!var4) { _fun0019_ip = 338; continue _fun0019 }
 332:
                    var3 = 'rgba(100, 200, 300, 0.4)';
 338:
                    var2['backgroundColor'] = var3;
                    var3 = new Array(0);
                    var2['transform'] = var3;
                    var1 = var2;
 353:
                    return var1;
                }
            };
            var11 = {};
            var11['activeId'] = var20;
            var11['id'] = var19;
            var11['windowDimensions'] = var18;
            var11['debug'] = var17;
            var11['gestureDetectorDimensions'] = var16;
            var11['offsetX'] = var15;
            var11['offsetY'] = var14;
            var11['scale'] = var13;
            var11['rotation'] = var12;
            var3['__closure'] = var11;
            var11 = 3128973404990.0;
            var3['__workletHash'] = var11;
            var11 = _closure1_slot35;
            var3['__initData'] = var11;
            var7 = var7.bind(var10)(var3);
            var3 = _closure1_slot9;
            var1 = 12;
            var1 = var8[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.GestureDetector;
            var1 = {};
            var1['gesture'] = var9;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.View;
            var5 = {};
            var5['style'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TransformComponentGestureHandler'] = var2;
    return var1;
})();
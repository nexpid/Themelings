// app/modules/video_calls/native/useDraggablePip.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.useChannelCallStore;
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PIP_FOCUS_SCALE;
    var _closure1_slot4 = tangon;
    tangon = {'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001, 'damping': 20};
    var _closure1_slot5 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx1(){const{withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING}=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});}';
    tangon['code'] = golfie;
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx2(){const{width}=this.__closure;return width;}';
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx3(){const{height}=this.__closure;return height;}';
    tangon['code'] = golfie;
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx4(){const{pipScale,width}=this.__closure;return pipScale.get()*width;}';
    tangon['code'] = golfie;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx5(){const{pipScale,height}=this.__closure;return pipScale.get()*height;}';
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx6(){const{containerWidth}=this.__closure;return containerWidth;}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx7(){const{containerHeight}=this.__closure;return containerHeight;}';
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx8(){const{containerWidth,scaledWidthDv,xPosition}=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];}';
    tangon['code'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx9(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}';
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx10(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx11(result,previous){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}';
    tangon['code'] = golfie;
    var _closure1_slot16 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx12(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}';
    tangon['code'] = golfie;
    var _closure1_slot17 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx13(event){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);}';
    tangon['code'] = golfie;
    var _closure1_slot18 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}';
    tangon['code'] = golfie;
    var _closure1_slot19 = tangon;
    tangon = {};
    golfie = 'function useDraggablePipTsx15(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}';
    tangon['code'] = golfie;
    var _closure1_slot20 = tangon;
    tangon = {};
    golfie = 'function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);}';
    tangon['code'] = golfie;
    var _closure1_slot21 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: clamp
            entity = global;
            tangon = entity.Math;
            zuuluu = tangon.min;
            oscard = entity.Math;
            report = oscard.max;
            michal = argFoo;
            entity = argBar;
            michal = report.bind(oscard)(michal, entity);
            entity = argBaz;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 1988116204206.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot21;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot22 = tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/video_calls/native/useDraggablePip.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useDraggablePip
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeon = entity.width;
            var _closure2_slot0 = romeon;
            foxtra = entity.height;
            var _closure2_slot1 = foxtra;
            record = entity.containerWidth;
            var _closure2_slot2 = record;
            result = entity.containerHeight;
            var _closure2_slot3 = result;
            update = entity.onPress;
            var _closure2_slot4 = update;
            papara = entity.onMoved;
            var _closure2_slot5 = papara;
            ctrled = entity.snapToCorners;
            var _closure2_slot6 = ctrled;
            sizing = entity.activeOffsetX;
            zuuluu = entity.activeOffsetY;
            tangon = _closure1_slot3;
            oscard = undefined;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.pipFocus;
                return entity;
            };
            verify = tangon.bind(oscard)(entity);
            var _closure2_slot7 = verify;
            vacuum = _closure1_slot0;
            sequen = _closure1_slot1;
            backup = 3;
            entity = sequen[backup];
            golfie = vacuum.bind(oscard)(entity);
            tangon = golfie.useDerivedValue;
            entity = function() { // Original name: N
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    entity = 4;
                    entity = zuuluu[entity];
                    golfie = undefined;
                    tangon = michal.bind(golfie)(entity);
                    zuuluu = tangon.withTiming;
                    entity = _closure2_slot7;
                    michal = 1;
                    if(!entity) { _fun00004_ip = 47; continue _fun00003 }
 43:
                    michal = _closure1_slot4;
 47:
                    entity = {};
                    oscard = _closure1_slot0;
                    option = _closure1_slot1;
                    report = 5;
                    report = option[report];
                    report = oscard.bind(golfie)(report);
                    report = report.STANDARD_EASING;
                    entity['easing'] = report;
                    report = 250;
                    entity['duration'] = report;
                    entity = zuuluu.bind(tangon)(michal, entity);
                    return entity;
                }
            };
            option = {};
            offset = 4;
            offset = sequen[offset];
            offset = vacuum.bind(oscard)(offset);
            offset = offset.withTiming;
            option['withTiming'] = offset;
            option['pipFocus'] = verify;
            verify = _closure1_slot4;
            option['PIP_FOCUS_SCALE'] = verify;
            verify = 5;
            verify = sequen[verify];
            verify = vacuum.bind(oscard)(verify);
            verify = verify.STANDARD_EASING;
            option['STANDARD_EASING'] = verify;
            entity['__closure'] = option;
            option = 7848271415351.0;
            entity['__workletHash'] = option;
            option = _closure1_slot6;
            entity['__initData'] = option;
            golfie = tangon.bind(golfie)(entity);
            var _closure2_slot8 = golfie;
            entity = sequen[backup];
            option = vacuum.bind(oscard)(entity);
            tangon = option.useDerivedValue;
            entity = function() { // Original name: E
                entity = _closure2_slot0;
                return entity;
            };
            verify = {};
            verify['width'] = romeon;
            entity['__closure'] = verify;
            verify = 14810909441301.0;
            entity['__workletHash'] = verify;
            verify = _closure1_slot7;
            entity['__initData'] = verify;
            yankee = tangon.bind(option)(entity);
            var _closure2_slot9 = yankee;
            entity = sequen[backup];
            option = vacuum.bind(oscard)(entity);
            tangon = option.useDerivedValue;
            entity = function() { // Original name: V
                entity = _closure2_slot1;
                return entity;
            };
            verify = {};
            verify['height'] = foxtra;
            entity['__closure'] = verify;
            verify = 15343935194036.0;
            entity['__workletHash'] = verify;
            verify = _closure1_slot8;
            entity['__initData'] = verify;
            option = tangon.bind(option)(entity);
            var _closure2_slot10 = option;
            entity = sequen[backup];
            verify = vacuum.bind(oscard)(entity);
            tangon = verify.useDerivedValue;
            entity = function() { // Original name: F
                zuuluu = _closure2_slot8;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity = _closure2_slot0;
                entity = michal * entity;
                return entity;
            };
            offset = {};
            offset['pipScale'] = golfie;
            offset['width'] = romeon;
            entity['__closure'] = offset;
            offset = 3468337829868.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot9;
            entity['__initData'] = offset;
            romeon = tangon.bind(verify)(entity);
            var _closure2_slot11 = romeon;
            entity = sequen[backup];
            verify = vacuum.bind(oscard)(entity);
            tangon = verify.useDerivedValue;
            entity = function() { // Original name: G
                zuuluu = _closure2_slot8;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity = _closure2_slot1;
                entity = michal * entity;
                return entity;
            };
            offset = {};
            offset['pipScale'] = golfie;
            offset['height'] = foxtra;
            entity['__closure'] = offset;
            offset = 7163944260205.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot10;
            entity['__initData'] = offset;
            verify = tangon.bind(verify)(entity);
            var _closure2_slot12 = verify;
            entity = sequen[backup];
            offset = vacuum.bind(oscard)(entity);
            tangon = offset.useDerivedValue;
            entity = function() { // Original name: I
                entity = _closure2_slot2;
                return entity;
            };
            foxtra = {};
            foxtra['containerWidth'] = record;
            entity['__closure'] = foxtra;
            foxtra = 13449836478609.0;
            entity['__workletHash'] = foxtra;
            foxtra = _closure1_slot11;
            entity['__initData'] = foxtra;
            cntext = tangon.bind(offset)(entity);
            var _closure2_slot13 = cntext;
            entity = sequen[backup];
            offset = vacuum.bind(oscard)(entity);
            tangon = offset.useDerivedValue;
            entity = function() { // Original name: q
                entity = _closure2_slot3;
                return entity;
            };
            foxtra = {};
            foxtra['containerHeight'] = result;
            entity['__closure'] = foxtra;
            foxtra = 4105281399152.0;
            entity['__workletHash'] = foxtra;
            foxtra = _closure1_slot12;
            entity['__initData'] = foxtra;
            config = tangon.bind(offset)(entity);
            var _closure2_slot14 = config;
            entity = sequen[backup];
            tangon = vacuum.bind(oscard)(entity);
            entity = tangon.useSharedValue;
            offset = 0;
            source = entity.bind(tangon)(offset);
            var _closure2_slot15 = source;
            entity = sequen[backup];
            foxtra = vacuum.bind(oscard)(entity);
            tangon = foxtra.useSharedValue;
            entity = source.get;
            entity = entity.bind(source)();
            foxtra = tangon.bind(foxtra)(entity);
            var _closure2_slot16 = foxtra;
            entity = sequen[backup];
            tangon = vacuum.bind(oscard)(entity);
            entity = tangon.useSharedValue;
            echoed = entity.bind(tangon)(offset);
            var _closure2_slot17 = echoed;
            entity = sequen[backup];
            offset = vacuum.bind(oscard)(entity);
            tangon = offset.useSharedValue;
            entity = echoed.get;
            entity = entity.bind(echoed)();
            offset = tangon.bind(offset)(entity);
            var _closure2_slot18 = offset;
            entity = sequen[backup];
            kiloes = vacuum.bind(oscard)(entity);
            tangon = kiloes.useSharedValue;
            entity = false;
            target = tangon.bind(kiloes)(entity);
            var _closure2_slot19 = target;
            entity = sequen[backup];
            output = vacuum.bind(oscard)(entity);
            kiloes = output.useAnimatedReaction;
            tangon = function() { // Original name: R
                zuuluu = _closure2_slot2;
                tangon = _closure2_slot11;
                entity = tangon.get;
                entity = entity.bind(tangon)();
                zuuluu = zuuluu - entity;
                entity = new Array(2);
                entity[0] = zuuluu;
                zuuluu = _closure2_slot16;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity[1] = michal;
                return entity;
            };
            entity = {};
            entity['containerWidth'] = record;
            entity['scaledWidthDv'] = romeon;
            entity['xPosition'] = foxtra;
            tangon['__closure'] = entity;
            entity = 2741340788440.0;
            tangon['__workletHash'] = entity;
            entity = _closure1_slot13;
            tangon['__initData'] = entity;
            entity = function(argFoo, argBar) { // Original name: J
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tangon = argFoo;
                    option = argBar;
                    report = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = report.bind(entity)(michal);
                    report = oscard.cheapWorkletArrayShallowEqual;
                    golfie = null;
                    verify = golfie != option;
                    michal = undefined;
                    if(!verify) { _fun00006_ip = 51; continue _fun00005 }
 48:
                    michal = option;
 51:
                    michal = report.bind(oscard)(tangon, michal);
                    if(michal) { _fun00006_ip = 171; continue _fun00005 }
 60:
                    offset = _closure1_slot2;
                    michal = 2;
                    michal = offset.bind(entity)(tangon, michal);
                    report = 0;
                    tangon = michal[report];
                    verify = 1;
                    oscard = michal[verify];
                    michal = option;
                    if(!(golfie == michal)) { _fun00006_ip = 103; continue _fun00005 }
 93:
                    michal = [0, 0];
 103:
                    michal = offset.bind(entity)(michal, verify);
                    michal = michal[report];
                    if(!(golfie != option)) { _fun00006_ip = 171; continue _fun00005 }
 117:
                    if(!(tangon !== michal)) { _fun00006_ip = 171; continue _fun00005 }
 121:
                    zuuluu = _closure1_slot22;
                    michal = tangon / michal;
                    michal = oscard * michal;
                    tangon = zuuluu.bind(entity)(michal, report, tangon);
                    report = _closure2_slot16;
                    zuuluu = report.set;
                    zuuluu = zuuluu.bind(report)(tangon);
                    zuuluu = _closure2_slot15;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(tangon);
 171:
                    return entity;
                }
            };
            sierra = {};
            status = 6;
            record = sequen[status];
            record = vacuum.bind(oscard)(record);
            record = record.cheapWorkletArrayShallowEqual;
            sierra['cheapWorkletArrayShallowEqual'] = record;
            record = _closure1_slot22;
            sierra['clamp'] = record;
            sierra['xPosition'] = foxtra;
            sierra['xDestination'] = source;
            entity['__closure'] = sierra;
            sierra = 15748808822770.0;
            entity['__workletHash'] = sierra;
            sierra = _closure1_slot14;
            entity['__initData'] = sierra;
            entity = kiloes.bind(output)(tangon, entity);
            entity = sequen[backup];
            output = vacuum.bind(oscard)(entity);
            kiloes = output.useAnimatedReaction;
            tangon = function() { // Original name: L
                zuuluu = _closure2_slot3;
                tangon = _closure2_slot12;
                entity = tangon.get;
                entity = entity.bind(tangon)();
                zuuluu = zuuluu - entity;
                entity = new Array(2);
                entity[0] = zuuluu;
                zuuluu = _closure2_slot18;
                michal = zuuluu.get;
                michal = michal.bind(zuuluu)();
                entity[1] = michal;
                return entity;
            };
            entity = {};
            entity['containerHeight'] = result;
            entity['scaledHeightDv'] = verify;
            entity['yPosition'] = offset;
            tangon['__closure'] = entity;
            entity = 11475249153313.0;
            tangon['__workletHash'] = entity;
            entity = _closure1_slot15;
            tangon['__initData'] = entity;
            entity = function(argFoo, argBar) { // Original name: U
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tangon = argFoo;
                    option = argBar;
                    report = _closure1_slot0;
                    michal = _closure1_slot1;
                    entity = 6;
                    michal = michal[entity];
                    entity = undefined;
                    oscard = report.bind(entity)(michal);
                    report = oscard.cheapWorkletArrayShallowEqual;
                    golfie = null;
                    verify = golfie != option;
                    michal = undefined;
                    if(!verify) { _fun00008_ip = 51; continue _fun00007 }
 48:
                    michal = option;
 51:
                    michal = report.bind(oscard)(tangon, michal);
                    if(michal) { _fun00008_ip = 171; continue _fun00007 }
 60:
                    offset = _closure1_slot2;
                    michal = 2;
                    michal = offset.bind(entity)(tangon, michal);
                    report = 0;
                    tangon = michal[report];
                    verify = 1;
                    oscard = michal[verify];
                    michal = option;
                    if(!(golfie == michal)) { _fun00008_ip = 103; continue _fun00007 }
 93:
                    michal = [0, 0];
 103:
                    michal = offset.bind(entity)(michal, verify);
                    michal = michal[report];
                    if(!(golfie != option)) { _fun00008_ip = 171; continue _fun00007 }
 117:
                    if(!(tangon !== michal)) { _fun00008_ip = 171; continue _fun00007 }
 121:
                    zuuluu = _closure1_slot22;
                    michal = tangon / michal;
                    michal = oscard * michal;
                    tangon = zuuluu.bind(entity)(michal, report, tangon);
                    report = _closure2_slot18;
                    zuuluu = report.set;
                    zuuluu = zuuluu.bind(report)(tangon);
                    zuuluu = _closure2_slot17;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(tangon);
 171:
                    return entity;
                }
            };
            result = {};
            status = sequen[status];
            status = vacuum.bind(oscard)(status);
            status = status.cheapWorkletArrayShallowEqual;
            result['cheapWorkletArrayShallowEqual'] = status;
            result['clamp'] = record;
            result['yPosition'] = offset;
            result['yDestination'] = echoed;
            entity['__closure'] = result;
            result = 7685377389843.0;
            entity['__workletHash'] = result;
            result = _closure1_slot16;
            entity['__initData'] = result;
            entity = kiloes.bind(output)(tangon, entity);
            kiloes = 7;
            entity = sequen[kiloes];
            entity = vacuum.bind(oscard)(entity);
            tangon = entity.Gesture;
            entity = tangon.Pan;
            output = entity.bind(tangon)();
            tangon = output.onUpdate;
            entity = function(argFoo) { // Original name: re
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    michal = argFoo;
                    report = _closure2_slot16;
                    tangon = report.set;
                    oscard = _closure2_slot15;
                    zuuluu = oscard.get;
                    oscard = zuuluu.bind(oscard)();
                    zuuluu = michal.translationX;
                    zuuluu = oscard + zuuluu;
                    zuuluu = tangon.bind(report)(zuuluu);
                    tangon = _closure2_slot18;
                    zuuluu = tangon.set;
                    oscard = _closure2_slot17;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    michal = michal.translationY;
                    michal = report + michal;
                    michal = zuuluu.bind(tangon)(michal);
                    zuuluu = _closure2_slot19;
                    michal = zuuluu.get;
                    michal = michal.bind(zuuluu)();
                    if(michal) { _fun00010_ip = 165; continue _fun00009 }
 96:
                    zuuluu = _closure2_slot5;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00010_ip = 149; continue _fun00009 }
 106:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 3;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    report = tangon.bind(zuuluu)(michal);
                    tangon = report.runOnJS;
                    michal = _closure2_slot5;
                    michal = tangon.bind(report)(michal);
                    michal = michal.bind(zuuluu)();
 149:
                    zuuluu = _closure2_slot19;
                    michal = zuuluu.set;
                    entity = true;
                    entity = michal.bind(zuuluu)(entity);
 165:
                    entity = undefined;
                    return entity;
                }
            };
            result = {};
            result['xPosition'] = foxtra;
            result['xDestination'] = source;
            result['yPosition'] = offset;
            result['yDestination'] = echoed;
            result['trackedVoiceControlsToggleMovedForGestureSv'] = target;
            result['onMoved'] = papara;
            papara = sequen[backup];
            papara = vacuum.bind(oscard)(papara);
            papara = papara.runOnJS;
            result['runOnJS'] = papara;
            entity['__closure'] = result;
            result = 5244027769178.0;
            entity['__workletHash'] = result;
            result = _closure1_slot17;
            entity['__initData'] = result;
            output = tangon.bind(output)(entity);
            tangon = output.onEnd;
            entity = function(argFoo) { // Original name: ae
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    verify = argFoo;
                    zuuluu = _closure2_slot16;
                    entity = zuuluu.get;
                    zuuluu = entity.bind(zuuluu)();
                    entity = verify.velocityX;
                    yankee = 0.0875;
                    entity = yankee * entity;
                    tangon = zuuluu + entity;
                    report = _closure2_slot13;
                    entity = report.get;
                    zuuluu = entity.bind(report)();
                    romeon = _closure2_slot11;
                    entity = romeon.get;
                    entity = entity.bind(romeon)();
                    oscard = zuuluu - entity;
                    foxtra = _closure1_slot22;
                    entity = undefined;
                    zuuluu = 0;
                    golfie = foxtra.bind(entity)(tangon, zuuluu, oscard);
                    option = _closure2_slot18;
                    tangon = option.get;
                    option = tangon.bind(option)();
                    tangon = verify.velocityY;
                    tangon = yankee * tangon;
                    tangon = option + tangon;
                    yankee = _closure2_slot14;
                    option = yankee.get;
                    kiloes = option.bind(yankee)();
                    backup = _closure2_slot12;
                    option = backup.get;
                    option = option.bind(backup)();
                    option = kiloes - option;
                    foxtra = foxtra.bind(entity)(tangon, zuuluu, option);
                    tangon = yankee.get;
                    yankee = tangon.bind(yankee)();
                    tangon = backup.get;
                    tangon = tangon.bind(backup)();
                    tangon = yankee - tangon;
                    yankee = tangon - foxtra;
                    tangon = report.get;
                    report = tangon.bind(report)();
                    tangon = romeon.get;
                    tangon = tangon.bind(romeon)();
                    tangon = report - tangon;
                    report = tangon - golfie;
                    tangon = global;
                    romeon = tangon.Math;
                    tangon = romeon.min;
                    source = romeon;
                    update = foxtra;
                    echoed = yankee;
                    result = golfie;
                    output = report;
                    backup = source[tangon](update, echoed, result, output, sizing);
                    if(!(foxtra !== backup)) { _fun00012_ip = 361; continue _fun00011 }
 243:
                    if(!(yankee !== backup)) { _fun00012_ip = 328; continue _fun00011 }
 247:
                    if(!(golfie !== backup)) { _fun00012_ip = 297; continue _fun00011 }
 251:
                    romeon = golfie;
                    tangon = foxtra;
                    if(!(report === backup)) { _fun00012_ip = 390; continue _fun00011 }
 264:
                    backup = _closure2_slot6;
                    romeon = oscard;
                    tangon = foxtra;
                    if(!backup) { _fun00012_ip = 390; continue _fun00011 }
 277:
                    kiloes = foxtra < yankee;
                    backup = 0;
                    if(kiloes) { _fun00012_ip = 289; continue _fun00011 }
 286:
                    backup = option;
 289:
                    tangon = backup;
                    romeon = oscard;
                    _fun00012_ip = 390; continue _fun00011;
 297:
                    backup = _closure2_slot6;
                    romeon = 0;
                    tangon = foxtra;
                    if(!backup) { _fun00012_ip = 390; continue _fun00011 }
 309:
                    foxtra = foxtra < yankee;
                    yankee = 0;
                    if(foxtra) { _fun00012_ip = 321; continue _fun00011 }
 318:
                    yankee = option;
 321:
                    tangon = yankee;
                    romeon = 0;
                    _fun00012_ip = 390; continue _fun00011;
 328:
                    yankee = _closure2_slot6;
                    romeon = golfie;
                    tangon = option;
                    if(!yankee) { _fun00012_ip = 390; continue _fun00011 }
 341:
                    foxtra = golfie < report;
                    yankee = 0;
                    if(foxtra) { _fun00012_ip = 353; continue _fun00011 }
 350:
                    yankee = oscard;
 353:
                    romeon = yankee;
                    tangon = option;
                    _fun00012_ip = 390; continue _fun00011;
 361:
                    option = _closure2_slot6;
                    romeon = golfie;
                    tangon = 0;
                    if(!option) { _fun00012_ip = 390; continue _fun00011 }
 373:
                    golfie = golfie < report;
                    report = 0;
                    if(golfie) { _fun00012_ip = 385; continue _fun00011 }
 382:
                    report = oscard;
 385:
                    romeon = report;
                    tangon = 0;
 390:
                    foxtra = _closure2_slot16;
                    oscard = foxtra.set;
                    golfie = _closure1_slot0;
                    option = _closure1_slot1;
                    zuuluu = 8;
                    report = option[zuuluu];
                    kiloes = golfie.bind(entity)(report);
                    backup = kiloes.withSpring;
                    report = {};
                    yankee = _closure1_slot5;
                    update = report;
                    echoed = yankee;
                    offset = copyDataProperties(update, echoed);
                    sizing = verify.velocityX;
                    offset = 'velocity';
                    report[offset] = sizing;
                    report = backup.bind(kiloes)(romeon, report);
                    report = oscard.bind(foxtra)(report);
                    oscard = _closure2_slot15;
                    report = oscard.set;
                    report = report.bind(oscard)(romeon);
                    oscard = _closure2_slot18;
                    report = oscard.set;
                    zuuluu = option[zuuluu];
                    option = golfie.bind(entity)(zuuluu);
                    golfie = option.withSpring;
                    zuuluu = {};
                    update = zuuluu;
                    echoed = yankee;
                    yankee = copyDataProperties(update, echoed);
                    verify = verify.velocityY;
                    zuuluu[offset] = verify;
                    zuuluu = golfie.bind(option)(tangon, zuuluu);
                    zuuluu = report.bind(oscard)(zuuluu);
                    zuuluu = _closure2_slot17;
                    michal = zuuluu.set;
                    michal = michal.bind(zuuluu)(tangon);
                    return entity;
                }
            };
            result = {};
            result['xPosition'] = foxtra;
            result['containerWidthDv'] = cntext;
            result['scaledWidthDv'] = romeon;
            result['clamp'] = record;
            result['yPosition'] = offset;
            result['containerHeightDv'] = config;
            result['scaledHeightDv'] = verify;
            result['snapToCorners'] = ctrled;
            ctrled = 8;
            ctrled = sequen[ctrled];
            ctrled = vacuum.bind(oscard)(ctrled);
            ctrled = ctrled.withSpring;
            result['withSpring'] = ctrled;
            ctrled = _closure1_slot5;
            result['spring'] = ctrled;
            result['xDestination'] = source;
            result['yDestination'] = echoed;
            entity['__closure'] = result;
            result = 345946204570.0;
            entity['__workletHash'] = result;
            result = _closure1_slot18;
            entity['__initData'] = result;
            result = tangon.bind(output)(entity);
            entity = null;
            if(!(entity != sizing)) { _fun00002_ip = 1374; continue _fun00001 }
 1363:
            tangon = result.activeOffsetX;
            tangon = tangon.bind(result)(sizing);
 1374:
            if(!(entity != zuuluu)) { _fun00002_ip = 1389; continue _fun00001 }
 1378:
            entity = result.activeOffsetY;
            entity = entity.bind(result)(zuuluu);
 1389:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = zuuluu[kiloes];
            entity = tangon.bind(oscard)(entity);
            sizing = entity.Gesture;
            entity = sizing.Tap;
            output = entity.bind(sizing)();
            sizing = output.onStart;
            entity = function() { // Original name: ce
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zuuluu = _closure2_slot4;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00014_ip = 56; continue _fun00013 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 3;
                    zuuluu = zuuluu[michal];
                    michal = undefined;
                    tangon = tangon.bind(michal)(zuuluu);
                    zuuluu = tangon.runOnJS;
                    entity = _closure2_slot4;
                    entity = zuuluu.bind(tangon)(entity);
                    entity = entity.bind(michal)();
 56:
                    entity = undefined;
                    return entity;
                }
            };
            echoed = {};
            echoed['onPress'] = update;
            update = zuuluu[backup];
            update = tangon.bind(oscard)(update);
            update = update.runOnJS;
            echoed['runOnJS'] = update;
            entity['__closure'] = echoed;
            echoed = 4692146362189.0;
            entity['__workletHash'] = echoed;
            echoed = _closure1_slot19;
            entity['__initData'] = echoed;
            output = sizing.bind(output)(entity);
            entity = {};
            kiloes = zuuluu[kiloes];
            kiloes = tangon.bind(oscard)(kiloes);
            sizing = kiloes.Gesture;
            kiloes = sizing.Race;
            kiloes = kiloes.bind(sizing)(result, output);
            entity['gesture'] = kiloes;
            zuuluu = zuuluu[backup];
            tangon = tangon.bind(oscard)(zuuluu);
            zuuluu = tangon.useAnimatedStyle;
            michal = function() { // Original name: ue
                entity = {};
                zuuluu = {};
                report = _closure2_slot16;
                michal = report.get;
                report = michal.bind(report)();
                oscard = _closure2_slot11;
                michal = oscard.get;
                oscard = michal.bind(oscard)();
                golfie = _closure2_slot9;
                michal = golfie.get;
                michal = michal.bind(golfie)();
                michal = oscard - michal;
                golfie = 2;
                michal = michal / golfie;
                michal = report + michal;
                zuuluu['translateX'] = michal;
                michal = new Array(3);
                michal[0] = zuuluu;
                zuuluu = {};
                oscard = _closure2_slot18;
                report = oscard.get;
                oscard = report.bind(oscard)();
                option = _closure2_slot12;
                report = option.get;
                option = report.bind(option)();
                verify = _closure2_slot10;
                report = verify.get;
                report = report.bind(verify)();
                report = option - report;
                report = report / golfie;
                report = oscard + report;
                zuuluu['translateY'] = report;
                michal[1] = zuuluu;
                zuuluu = {};
                report = _closure2_slot8;
                tangon = report.get;
                tangon = tangon.bind(report)();
                zuuluu['scale'] = tangon;
                michal[2] = zuuluu;
                entity['transform'] = michal;
                return entity;
            };
            oscard = {};
            oscard['xPosition'] = foxtra;
            oscard['scaledWidthDv'] = romeon;
            oscard['widthDv'] = yankee;
            oscard['yPosition'] = offset;
            oscard['scaledHeightDv'] = verify;
            oscard['heightDv'] = option;
            oscard['pipScale'] = golfie;
            michal['__closure'] = oscard;
            oscard = 12534173786665.0;
            michal['__workletHash'] = oscard;
            report = _closure1_slot20;
            michal['__initData'] = report;
            michal = zuuluu.bind(tangon)(michal);
            entity['draggableGridItemStyles'] = michal;
            return entity;
        }
    };
    zuuluu['useDraggablePip'] = michal;
    return entity;
})();
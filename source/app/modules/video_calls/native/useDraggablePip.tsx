// app/modules/video_calls/native/useDraggablePip.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    golf = oscar[entity];
    tango = argBaz;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.useChannelCallStore;
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PIP_FOCUS_SCALE;
    var _closure1_slot4 = tango;
    tango = {'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001, 'damping': 20};
    var _closure1_slot5 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx1(){const{withTiming,pipFocus,PIP_FOCUS_SCALE,STANDARD_EASING}=this.__closure;return withTiming(pipFocus?PIP_FOCUS_SCALE:1,{easing:STANDARD_EASING,duration:250});}';
    tango['code'] = golf;
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx2(){const{width}=this.__closure;return width;}';
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx3(){const{height}=this.__closure;return height;}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx4(){const{pipScale,width}=this.__closure;return pipScale.get()*width;}';
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx5(){const{pipScale,height}=this.__closure;return pipScale.get()*height;}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx6(){const{containerWidth}=this.__closure;return containerWidth;}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx7(){const{containerHeight}=this.__closure;return containerHeight;}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx8(){const{containerWidth,scaledWidthDv,xPosition}=this.__closure;return[containerWidth-scaledWidthDv.get(),xPosition.get()];}';
    tango['code'] = golf;
    var _closure1_slot13 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx9(result,previous){const{cheapWorkletArrayShallowEqual,clamp,xPosition,xDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerWidthNew,xPositionNew]=result;const[containerWidthOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerWidthNew!==containerWidthOld){const newX=clamp(xPositionNew*(containerWidthNew/containerWidthOld),0,containerWidthNew);xPosition.set(newX);xDestination.set(newX);}}';
    tango['code'] = golf;
    var _closure1_slot14 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx10(){const{containerHeight,scaledHeightDv,yPosition}=this.__closure;return[containerHeight-scaledHeightDv.get(),yPosition.get()];}';
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx11(result,previous){const{cheapWorkletArrayShallowEqual,clamp,yPosition,yDestination}=this.__closure;if(cheapWorkletArrayShallowEqual(result,previous!==null&&previous!==void 0?previous:undefined))return;const[containerHeightNew,yPositionNew]=result;const[containerHeightOld]=previous!==null&&previous!==void 0?previous:[0,0];if(previous!=null&&containerHeightNew!==containerHeightOld){const newY=clamp(yPositionNew*(containerHeightNew/containerHeightOld),0,containerHeightNew);yPosition.set(newY);yDestination.set(newY);}}';
    tango['code'] = golf;
    var _closure1_slot16 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx12(event){const{xPosition,xDestination,yPosition,yDestination,trackedVoiceControlsToggleMovedForGestureSv,onMoved,runOnJS}=this.__closure;xPosition.set(xDestination.get()+event.translationX);yPosition.set(yDestination.get()+event.translationY);if(!trackedVoiceControlsToggleMovedForGestureSv.get()){if(onMoved!=null){runOnJS(onMoved)();}trackedVoiceControlsToggleMovedForGestureSv.set(true);}}';
    tango['code'] = golf;
    var _closure1_slot17 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx13(event){const{xPosition,containerWidthDv,scaledWidthDv,clamp,yPosition,containerHeightDv,scaledHeightDv,snapToCorners,withSpring,spring,xDestination,yDestination}=this.__closure;const toss=0.0875;const xToss=xPosition.get()+toss*event.velocityX;const xMin=0;const xMax=containerWidthDv.get()-scaledWidthDv.get();const targetX=clamp(xToss,xMin,xMax);const yToss=yPosition.get()+toss*event.velocityY;const yMin=0;const yMax=containerHeightDv.get()-scaledHeightDv.get();const targetY=clamp(yToss,yMin,yMax);const top=targetY;const bottom=containerHeightDv.get()-scaledHeightDv.get()-targetY;const left=targetX;const right=containerWidthDv.get()-scaledWidthDv.get()-targetX;const minDistance=Math.min(top,bottom,left,right);let snapX=targetX;let snapY=targetY;switch(minDistance){case top:snapY=yMin;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case bottom:snapY=yMax;if(snapToCorners){snapX=left<right?xMin:xMax;}break;case left:snapX=xMin;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;case right:snapX=xMax;if(snapToCorners){snapY=top<bottom?yMin:yMax;}break;}xPosition.set(withSpring(snapX,{...spring,velocity:event.velocityX}));xDestination.set(snapX);yPosition.set(withSpring(snapY,{...spring,velocity:event.velocityY}));yDestination.set(snapY);}';
    tango['code'] = golf;
    var _closure1_slot18 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx14(){const{onPress,runOnJS}=this.__closure;if(onPress!=null){runOnJS(onPress)();}}';
    tango['code'] = golf;
    var _closure1_slot19 = tango;
    tango = {};
    golf = 'function useDraggablePipTsx15(){const{xPosition,scaledWidthDv,widthDv,yPosition,scaledHeightDv,heightDv,pipScale}=this.__closure;return{transform:[{translateX:xPosition.get()+(scaledWidthDv.get()-widthDv.get())/2},{translateY:yPosition.get()+(scaledHeightDv.get()-heightDv.get())/2},{scale:pipScale.get()}]};}';
    tango['code'] = golf;
    var _closure1_slot20 = tango;
    tango = {};
    golf = 'function clamp_useDraggablePipTsx16(value,min,max){return Math.min(Math.max(value,min),max);}';
    tango['code'] = golf;
    var _closure1_slot21 = tango;
    tango = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: clamp
            entity = global;
            tango = entity.Math;
            zulu = tango.min;
            oscar = entity.Math;
            report = oscar.max;
            mike = argFoo;
            entity = argBar;
            mike = report.bind(oscar)(mike, entity);
            entity = argBaz;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 1988116204206.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot21;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot22 = tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/video_calls/native/useDraggablePip.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useDraggablePip
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            romeo = entity.width;
            var _closure2_slot0 = romeo;
            foxtrot = entity.height;
            var _closure2_slot1 = foxtrot;
            record = entity.containerWidth;
            var _closure2_slot2 = record;
            result = entity.containerHeight;
            var _closure2_slot3 = result;
            update = entity.onPress;
            var _closure2_slot4 = update;
            papa = entity.onMoved;
            var _closure2_slot5 = papa;
            control = entity.snapToCorners;
            var _closure2_slot6 = control;
            sizing = entity.activeOffsetX;
            zulu = entity.activeOffsetY;
            tango = _closure1_slot3;
            oscar = undefined;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.pipFocus;
                return entity;
            };
            verify = tango.bind(oscar)(entity);
            var _closure2_slot7 = verify;
            vacuum = _closure1_slot0;
            sequence = _closure1_slot1;
            backup = 3;
            entity = sequence[backup];
            golf = vacuum.bind(oscar)(entity);
            tango = golf.useDerivedValue;
            entity = function() { // Original name: N
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure1_slot0;
                    zulu = _closure1_slot1;
                    entity = 4;
                    entity = zulu[entity];
                    golf = undefined;
                    tango = mike.bind(golf)(entity);
                    zulu = tango.withTiming;
                    entity = _closure2_slot7;
                    mike = 1;
                    if(!entity) { _fun00004_ip = 47; continue _fun00003 }
 43:
                    mike = _closure1_slot4;
 47:
                    entity = {};
                    oscar = _closure1_slot0;
                    options = _closure1_slot1;
                    report = 5;
                    report = options[report];
                    report = oscar.bind(golf)(report);
                    report = report.STANDARD_EASING;
                    entity['easing'] = report;
                    report = 250;
                    entity['duration'] = report;
                    entity = zulu.bind(tango)(mike, entity);
                    return entity;
                }
            };
            options = {};
            offset = 4;
            offset = sequence[offset];
            offset = vacuum.bind(oscar)(offset);
            offset = offset.withTiming;
            options['withTiming'] = offset;
            options['pipFocus'] = verify;
            verify = _closure1_slot4;
            options['PIP_FOCUS_SCALE'] = verify;
            verify = 5;
            verify = sequence[verify];
            verify = vacuum.bind(oscar)(verify);
            verify = verify.STANDARD_EASING;
            options['STANDARD_EASING'] = verify;
            entity['__closure'] = options;
            options = 7848271415351.0;
            entity['__workletHash'] = options;
            options = _closure1_slot6;
            entity['__initData'] = options;
            golf = tango.bind(golf)(entity);
            var _closure2_slot8 = golf;
            entity = sequence[backup];
            options = vacuum.bind(oscar)(entity);
            tango = options.useDerivedValue;
            entity = function() { // Original name: E
                entity = _closure2_slot0;
                return entity;
            };
            verify = {};
            verify['width'] = romeo;
            entity['__closure'] = verify;
            verify = 14810909441301.0;
            entity['__workletHash'] = verify;
            verify = _closure1_slot7;
            entity['__initData'] = verify;
            yankee = tango.bind(options)(entity);
            var _closure2_slot9 = yankee;
            entity = sequence[backup];
            options = vacuum.bind(oscar)(entity);
            tango = options.useDerivedValue;
            entity = function() { // Original name: V
                entity = _closure2_slot1;
                return entity;
            };
            verify = {};
            verify['height'] = foxtrot;
            entity['__closure'] = verify;
            verify = 15343935194036.0;
            entity['__workletHash'] = verify;
            verify = _closure1_slot8;
            entity['__initData'] = verify;
            options = tango.bind(options)(entity);
            var _closure2_slot10 = options;
            entity = sequence[backup];
            verify = vacuum.bind(oscar)(entity);
            tango = verify.useDerivedValue;
            entity = function() { // Original name: F
                zulu = _closure2_slot8;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity = _closure2_slot0;
                entity = mike * entity;
                return entity;
            };
            offset = {};
            offset['pipScale'] = golf;
            offset['width'] = romeo;
            entity['__closure'] = offset;
            offset = 3468337829868.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot9;
            entity['__initData'] = offset;
            romeo = tango.bind(verify)(entity);
            var _closure2_slot11 = romeo;
            entity = sequence[backup];
            verify = vacuum.bind(oscar)(entity);
            tango = verify.useDerivedValue;
            entity = function() { // Original name: G
                zulu = _closure2_slot8;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity = _closure2_slot1;
                entity = mike * entity;
                return entity;
            };
            offset = {};
            offset['pipScale'] = golf;
            offset['height'] = foxtrot;
            entity['__closure'] = offset;
            offset = 7163944260205.0;
            entity['__workletHash'] = offset;
            offset = _closure1_slot10;
            entity['__initData'] = offset;
            verify = tango.bind(verify)(entity);
            var _closure2_slot12 = verify;
            entity = sequence[backup];
            offset = vacuum.bind(oscar)(entity);
            tango = offset.useDerivedValue;
            entity = function() { // Original name: I
                entity = _closure2_slot2;
                return entity;
            };
            foxtrot = {};
            foxtrot['containerWidth'] = record;
            entity['__closure'] = foxtrot;
            foxtrot = 13449836478609.0;
            entity['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot11;
            entity['__initData'] = foxtrot;
            context = tango.bind(offset)(entity);
            var _closure2_slot13 = context;
            entity = sequence[backup];
            offset = vacuum.bind(oscar)(entity);
            tango = offset.useDerivedValue;
            entity = function() { // Original name: q
                entity = _closure2_slot3;
                return entity;
            };
            foxtrot = {};
            foxtrot['containerHeight'] = result;
            entity['__closure'] = foxtrot;
            foxtrot = 4105281399152.0;
            entity['__workletHash'] = foxtrot;
            foxtrot = _closure1_slot12;
            entity['__initData'] = foxtrot;
            config = tango.bind(offset)(entity);
            var _closure2_slot14 = config;
            entity = sequence[backup];
            tango = vacuum.bind(oscar)(entity);
            entity = tango.useSharedValue;
            offset = 0;
            source = entity.bind(tango)(offset);
            var _closure2_slot15 = source;
            entity = sequence[backup];
            foxtrot = vacuum.bind(oscar)(entity);
            tango = foxtrot.useSharedValue;
            entity = source.get;
            entity = entity.bind(source)();
            foxtrot = tango.bind(foxtrot)(entity);
            var _closure2_slot16 = foxtrot;
            entity = sequence[backup];
            tango = vacuum.bind(oscar)(entity);
            entity = tango.useSharedValue;
            echo = entity.bind(tango)(offset);
            var _closure2_slot17 = echo;
            entity = sequence[backup];
            offset = vacuum.bind(oscar)(entity);
            tango = offset.useSharedValue;
            entity = echo.get;
            entity = entity.bind(echo)();
            offset = tango.bind(offset)(entity);
            var _closure2_slot18 = offset;
            entity = sequence[backup];
            kilo = vacuum.bind(oscar)(entity);
            tango = kilo.useSharedValue;
            entity = false;
            target = tango.bind(kilo)(entity);
            var _closure2_slot19 = target;
            entity = sequence[backup];
            output = vacuum.bind(oscar)(entity);
            kilo = output.useAnimatedReaction;
            tango = function() { // Original name: R
                zulu = _closure2_slot2;
                tango = _closure2_slot11;
                entity = tango.get;
                entity = entity.bind(tango)();
                zulu = zulu - entity;
                entity = new Array(2);
                entity[0] = zulu;
                zulu = _closure2_slot16;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            entity = {};
            entity['containerWidth'] = record;
            entity['scaledWidthDv'] = romeo;
            entity['xPosition'] = foxtrot;
            tango['__closure'] = entity;
            entity = 2741340788440.0;
            tango['__workletHash'] = entity;
            entity = _closure1_slot13;
            tango['__initData'] = entity;
            entity = function(argFoo, argBar) { // Original name: J
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    tango = argFoo;
                    options = argBar;
                    report = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = report.bind(entity)(mike);
                    report = oscar.cheapWorkletArrayShallowEqual;
                    golf = null;
                    verify = golf != options;
                    mike = undefined;
                    if(!verify) { _fun00006_ip = 51; continue _fun00005 }
 48:
                    mike = options;
 51:
                    mike = report.bind(oscar)(tango, mike);
                    if(mike) { _fun00006_ip = 171; continue _fun00005 }
 60:
                    offset = _closure1_slot2;
                    mike = 2;
                    mike = offset.bind(entity)(tango, mike);
                    report = 0;
                    tango = mike[report];
                    verify = 1;
                    oscar = mike[verify];
                    mike = options;
                    if(!(golf == mike)) { _fun00006_ip = 103; continue _fun00005 }
 93:
                    mike = [0, 0];
 103:
                    mike = offset.bind(entity)(mike, verify);
                    mike = mike[report];
                    if(!(golf != options)) { _fun00006_ip = 171; continue _fun00005 }
 117:
                    if(!(tango !== mike)) { _fun00006_ip = 171; continue _fun00005 }
 121:
                    zulu = _closure1_slot22;
                    mike = tango / mike;
                    mike = oscar * mike;
                    tango = zulu.bind(entity)(mike, report, tango);
                    report = _closure2_slot16;
                    zulu = report.set;
                    zulu = zulu.bind(report)(tango);
                    zulu = _closure2_slot15;
                    mike = zulu.set;
                    mike = mike.bind(zulu)(tango);
 171:
                    return entity;
                }
            };
            sierra = {};
            status = 6;
            record = sequence[status];
            record = vacuum.bind(oscar)(record);
            record = record.cheapWorkletArrayShallowEqual;
            sierra['cheapWorkletArrayShallowEqual'] = record;
            record = _closure1_slot22;
            sierra['clamp'] = record;
            sierra['xPosition'] = foxtrot;
            sierra['xDestination'] = source;
            entity['__closure'] = sierra;
            sierra = 15748808822770.0;
            entity['__workletHash'] = sierra;
            sierra = _closure1_slot14;
            entity['__initData'] = sierra;
            entity = kilo.bind(output)(tango, entity);
            entity = sequence[backup];
            output = vacuum.bind(oscar)(entity);
            kilo = output.useAnimatedReaction;
            tango = function() { // Original name: L
                zulu = _closure2_slot3;
                tango = _closure2_slot12;
                entity = tango.get;
                entity = entity.bind(tango)();
                zulu = zulu - entity;
                entity = new Array(2);
                entity[0] = zulu;
                zulu = _closure2_slot18;
                mike = zulu.get;
                mike = mike.bind(zulu)();
                entity[1] = mike;
                return entity;
            };
            entity = {};
            entity['containerHeight'] = result;
            entity['scaledHeightDv'] = verify;
            entity['yPosition'] = offset;
            tango['__closure'] = entity;
            entity = 11475249153313.0;
            tango['__workletHash'] = entity;
            entity = _closure1_slot15;
            tango['__initData'] = entity;
            entity = function(argFoo, argBar) { // Original name: U
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    tango = argFoo;
                    options = argBar;
                    report = _closure1_slot0;
                    mike = _closure1_slot1;
                    entity = 6;
                    mike = mike[entity];
                    entity = undefined;
                    oscar = report.bind(entity)(mike);
                    report = oscar.cheapWorkletArrayShallowEqual;
                    golf = null;
                    verify = golf != options;
                    mike = undefined;
                    if(!verify) { _fun00008_ip = 51; continue _fun00007 }
 48:
                    mike = options;
 51:
                    mike = report.bind(oscar)(tango, mike);
                    if(mike) { _fun00008_ip = 171; continue _fun00007 }
 60:
                    offset = _closure1_slot2;
                    mike = 2;
                    mike = offset.bind(entity)(tango, mike);
                    report = 0;
                    tango = mike[report];
                    verify = 1;
                    oscar = mike[verify];
                    mike = options;
                    if(!(golf == mike)) { _fun00008_ip = 103; continue _fun00007 }
 93:
                    mike = [0, 0];
 103:
                    mike = offset.bind(entity)(mike, verify);
                    mike = mike[report];
                    if(!(golf != options)) { _fun00008_ip = 171; continue _fun00007 }
 117:
                    if(!(tango !== mike)) { _fun00008_ip = 171; continue _fun00007 }
 121:
                    zulu = _closure1_slot22;
                    mike = tango / mike;
                    mike = oscar * mike;
                    tango = zulu.bind(entity)(mike, report, tango);
                    report = _closure2_slot18;
                    zulu = report.set;
                    zulu = zulu.bind(report)(tango);
                    zulu = _closure2_slot17;
                    mike = zulu.set;
                    mike = mike.bind(zulu)(tango);
 171:
                    return entity;
                }
            };
            result = {};
            status = sequence[status];
            status = vacuum.bind(oscar)(status);
            status = status.cheapWorkletArrayShallowEqual;
            result['cheapWorkletArrayShallowEqual'] = status;
            result['clamp'] = record;
            result['yPosition'] = offset;
            result['yDestination'] = echo;
            entity['__closure'] = result;
            result = 7685377389843.0;
            entity['__workletHash'] = result;
            result = _closure1_slot16;
            entity['__initData'] = result;
            entity = kilo.bind(output)(tango, entity);
            kilo = 7;
            entity = sequence[kilo];
            entity = vacuum.bind(oscar)(entity);
            tango = entity.Gesture;
            entity = tango.Pan;
            output = entity.bind(tango)();
            tango = output.onUpdate;
            entity = function(argFoo) { // Original name: re
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    mike = argFoo;
                    report = _closure2_slot16;
                    tango = report.set;
                    oscar = _closure2_slot15;
                    zulu = oscar.get;
                    oscar = zulu.bind(oscar)();
                    zulu = mike.translationX;
                    zulu = oscar + zulu;
                    zulu = tango.bind(report)(zulu);
                    tango = _closure2_slot18;
                    zulu = tango.set;
                    oscar = _closure2_slot17;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    mike = mike.translationY;
                    mike = report + mike;
                    mike = zulu.bind(tango)(mike);
                    zulu = _closure2_slot19;
                    mike = zulu.get;
                    mike = mike.bind(zulu)();
                    if(mike) { _fun00010_ip = 165; continue _fun00009 }
 96:
                    zulu = _closure2_slot5;
                    mike = null;
                    if(!(mike != zulu)) { _fun00010_ip = 149; continue _fun00009 }
 106:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.runOnJS;
                    mike = _closure2_slot5;
                    mike = tango.bind(report)(mike);
                    mike = mike.bind(zulu)();
 149:
                    zulu = _closure2_slot19;
                    mike = zulu.set;
                    entity = true;
                    entity = mike.bind(zulu)(entity);
 165:
                    entity = undefined;
                    return entity;
                }
            };
            result = {};
            result['xPosition'] = foxtrot;
            result['xDestination'] = source;
            result['yPosition'] = offset;
            result['yDestination'] = echo;
            result['trackedVoiceControlsToggleMovedForGestureSv'] = target;
            result['onMoved'] = papa;
            papa = sequence[backup];
            papa = vacuum.bind(oscar)(papa);
            papa = papa.runOnJS;
            result['runOnJS'] = papa;
            entity['__closure'] = result;
            result = 5244027769178.0;
            entity['__workletHash'] = result;
            result = _closure1_slot17;
            entity['__initData'] = result;
            output = tango.bind(output)(entity);
            tango = output.onEnd;
            entity = function(argFoo) { // Original name: ae
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    verify = argFoo;
                    zulu = _closure2_slot16;
                    entity = zulu.get;
                    zulu = entity.bind(zulu)();
                    entity = verify.velocityX;
                    yankee = 0.0875;
                    entity = yankee * entity;
                    tango = zulu + entity;
                    report = _closure2_slot13;
                    entity = report.get;
                    zulu = entity.bind(report)();
                    romeo = _closure2_slot11;
                    entity = romeo.get;
                    entity = entity.bind(romeo)();
                    oscar = zulu - entity;
                    foxtrot = _closure1_slot22;
                    entity = undefined;
                    zulu = 0;
                    golf = foxtrot.bind(entity)(tango, zulu, oscar);
                    options = _closure2_slot18;
                    tango = options.get;
                    options = tango.bind(options)();
                    tango = verify.velocityY;
                    tango = yankee * tango;
                    tango = options + tango;
                    yankee = _closure2_slot14;
                    options = yankee.get;
                    kilo = options.bind(yankee)();
                    backup = _closure2_slot12;
                    options = backup.get;
                    options = options.bind(backup)();
                    options = kilo - options;
                    foxtrot = foxtrot.bind(entity)(tango, zulu, options);
                    tango = yankee.get;
                    yankee = tango.bind(yankee)();
                    tango = backup.get;
                    tango = tango.bind(backup)();
                    tango = yankee - tango;
                    yankee = tango - foxtrot;
                    tango = report.get;
                    report = tango.bind(report)();
                    tango = romeo.get;
                    tango = tango.bind(romeo)();
                    tango = report - tango;
                    report = tango - golf;
                    tango = global;
                    romeo = tango.Math;
                    tango = romeo.min;
                    source = romeo;
                    update = foxtrot;
                    echo = yankee;
                    result = golf;
                    output = report;
                    backup = source[tango](update, echo, result, output, sizing);
                    if(!(foxtrot !== backup)) { _fun00012_ip = 361; continue _fun00011 }
 243:
                    if(!(yankee !== backup)) { _fun00012_ip = 328; continue _fun00011 }
 247:
                    if(!(golf !== backup)) { _fun00012_ip = 297; continue _fun00011 }
 251:
                    romeo = golf;
                    tango = foxtrot;
                    if(!(report === backup)) { _fun00012_ip = 390; continue _fun00011 }
 264:
                    backup = _closure2_slot6;
                    romeo = oscar;
                    tango = foxtrot;
                    if(!backup) { _fun00012_ip = 390; continue _fun00011 }
 277:
                    kilo = foxtrot < yankee;
                    backup = 0;
                    if(kilo) { _fun00012_ip = 289; continue _fun00011 }
 286:
                    backup = options;
 289:
                    tango = backup;
                    romeo = oscar;
                    _fun00012_ip = 390; continue _fun00011;
 297:
                    backup = _closure2_slot6;
                    romeo = 0;
                    tango = foxtrot;
                    if(!backup) { _fun00012_ip = 390; continue _fun00011 }
 309:
                    foxtrot = foxtrot < yankee;
                    yankee = 0;
                    if(foxtrot) { _fun00012_ip = 321; continue _fun00011 }
 318:
                    yankee = options;
 321:
                    tango = yankee;
                    romeo = 0;
                    _fun00012_ip = 390; continue _fun00011;
 328:
                    yankee = _closure2_slot6;
                    romeo = golf;
                    tango = options;
                    if(!yankee) { _fun00012_ip = 390; continue _fun00011 }
 341:
                    foxtrot = golf < report;
                    yankee = 0;
                    if(foxtrot) { _fun00012_ip = 353; continue _fun00011 }
 350:
                    yankee = oscar;
 353:
                    romeo = yankee;
                    tango = options;
                    _fun00012_ip = 390; continue _fun00011;
 361:
                    options = _closure2_slot6;
                    romeo = golf;
                    tango = 0;
                    if(!options) { _fun00012_ip = 390; continue _fun00011 }
 373:
                    golf = golf < report;
                    report = 0;
                    if(golf) { _fun00012_ip = 385; continue _fun00011 }
 382:
                    report = oscar;
 385:
                    romeo = report;
                    tango = 0;
 390:
                    foxtrot = _closure2_slot16;
                    oscar = foxtrot.set;
                    golf = _closure1_slot0;
                    options = _closure1_slot1;
                    zulu = 8;
                    report = options[zulu];
                    kilo = golf.bind(entity)(report);
                    backup = kilo.withSpring;
                    report = {};
                    yankee = _closure1_slot5;
                    update = report;
                    echo = yankee;
                    offset = copyDataProperties(update, echo);
                    sizing = verify.velocityX;
                    offset = 'velocity';
                    report[offset] = sizing;
                    report = backup.bind(kilo)(romeo, report);
                    report = oscar.bind(foxtrot)(report);
                    oscar = _closure2_slot15;
                    report = oscar.set;
                    report = report.bind(oscar)(romeo);
                    oscar = _closure2_slot18;
                    report = oscar.set;
                    zulu = options[zulu];
                    options = golf.bind(entity)(zulu);
                    golf = options.withSpring;
                    zulu = {};
                    update = zulu;
                    echo = yankee;
                    yankee = copyDataProperties(update, echo);
                    verify = verify.velocityY;
                    zulu[offset] = verify;
                    zulu = golf.bind(options)(tango, zulu);
                    zulu = report.bind(oscar)(zulu);
                    zulu = _closure2_slot17;
                    mike = zulu.set;
                    mike = mike.bind(zulu)(tango);
                    return entity;
                }
            };
            result = {};
            result['xPosition'] = foxtrot;
            result['containerWidthDv'] = context;
            result['scaledWidthDv'] = romeo;
            result['clamp'] = record;
            result['yPosition'] = offset;
            result['containerHeightDv'] = config;
            result['scaledHeightDv'] = verify;
            result['snapToCorners'] = control;
            control = 8;
            control = sequence[control];
            control = vacuum.bind(oscar)(control);
            control = control.withSpring;
            result['withSpring'] = control;
            control = _closure1_slot5;
            result['spring'] = control;
            result['xDestination'] = source;
            result['yDestination'] = echo;
            entity['__closure'] = result;
            result = 345946204570.0;
            entity['__workletHash'] = result;
            result = _closure1_slot18;
            entity['__initData'] = result;
            result = tango.bind(output)(entity);
            entity = null;
            if(!(entity != sizing)) { _fun00002_ip = 1374; continue _fun00001 }
 1363:
            tango = result.activeOffsetX;
            tango = tango.bind(result)(sizing);
 1374:
            if(!(entity != zulu)) { _fun00002_ip = 1389; continue _fun00001 }
 1378:
            entity = result.activeOffsetY;
            entity = entity.bind(result)(zulu);
 1389:
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = zulu[kilo];
            entity = tango.bind(oscar)(entity);
            sizing = entity.Gesture;
            entity = sizing.Tap;
            output = entity.bind(sizing)();
            sizing = output.onStart;
            entity = function() { // Original name: ce
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot4;
                    mike = null;
                    if(!(mike != zulu)) { _fun00014_ip = 56; continue _fun00013 }
 13:
                    tango = _closure1_slot0;
                    zulu = _closure1_slot1;
                    mike = 3;
                    zulu = zulu[mike];
                    mike = undefined;
                    tango = tango.bind(mike)(zulu);
                    zulu = tango.runOnJS;
                    entity = _closure2_slot4;
                    entity = zulu.bind(tango)(entity);
                    entity = entity.bind(mike)();
 56:
                    entity = undefined;
                    return entity;
                }
            };
            echo = {};
            echo['onPress'] = update;
            update = zulu[backup];
            update = tango.bind(oscar)(update);
            update = update.runOnJS;
            echo['runOnJS'] = update;
            entity['__closure'] = echo;
            echo = 4692146362189.0;
            entity['__workletHash'] = echo;
            echo = _closure1_slot19;
            entity['__initData'] = echo;
            output = sizing.bind(output)(entity);
            entity = {};
            kilo = zulu[kilo];
            kilo = tango.bind(oscar)(kilo);
            sizing = kilo.Gesture;
            kilo = sizing.Race;
            kilo = kilo.bind(sizing)(result, output);
            entity['gesture'] = kilo;
            zulu = zulu[backup];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.useAnimatedStyle;
            mike = function() { // Original name: ue
                entity = {};
                zulu = {};
                report = _closure2_slot16;
                mike = report.get;
                report = mike.bind(report)();
                oscar = _closure2_slot11;
                mike = oscar.get;
                oscar = mike.bind(oscar)();
                golf = _closure2_slot9;
                mike = golf.get;
                mike = mike.bind(golf)();
                mike = oscar - mike;
                golf = 2;
                mike = mike / golf;
                mike = report + mike;
                zulu['translateX'] = mike;
                mike = new Array(3);
                mike[0] = zulu;
                zulu = {};
                oscar = _closure2_slot18;
                report = oscar.get;
                oscar = report.bind(oscar)();
                options = _closure2_slot12;
                report = options.get;
                options = report.bind(options)();
                verify = _closure2_slot10;
                report = verify.get;
                report = report.bind(verify)();
                report = options - report;
                report = report / golf;
                report = oscar + report;
                zulu['translateY'] = report;
                mike[1] = zulu;
                zulu = {};
                report = _closure2_slot8;
                tango = report.get;
                tango = tango.bind(report)();
                zulu['scale'] = tango;
                mike[2] = zulu;
                entity['transform'] = mike;
                return entity;
            };
            oscar = {};
            oscar['xPosition'] = foxtrot;
            oscar['scaledWidthDv'] = romeo;
            oscar['widthDv'] = yankee;
            oscar['yPosition'] = offset;
            oscar['scaledHeightDv'] = verify;
            oscar['heightDv'] = options;
            oscar['pipScale'] = golf;
            mike['__closure'] = oscar;
            oscar = 12534173786665.0;
            mike['__workletHash'] = oscar;
            report = _closure1_slot20;
            mike['__initData'] = report;
            mike = zulu.bind(tango)(mike);
            entity['draggableGridItemStyles'] = mike;
            return entity;
        }
    };
    zulu['useDraggablePip'] = mike;
    return entity;
})();
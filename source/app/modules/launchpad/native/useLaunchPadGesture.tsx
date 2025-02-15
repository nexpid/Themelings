// app/modules/launchpad/native/useLaunchPadGesture.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    tango = argCorge;
    entity = undefined;
    tango = tango.bind(entity)(golf);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE;
    var _closure1_slot4 = golf;
    golf = tango.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot5 = golf;
    golf = tango.LAUNCH_PAD_PULL_TAB_HIT_SLOP;
    var _closure1_slot6 = golf;
    golf = tango.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR;
    var _closure1_slot7 = golf;
    golf = tango.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot8 = golf;
    tango = tango.LaunchPadTypes;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function useLaunchPadGestureTsx1(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function useLaunchPadGestureTsx2(event,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();if(currentTouch==null||launchPadType===LaunchPadTypes.GESTURE_EDGE&&initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE||launchPadType===LaunchPadTypes.DISABLED){manager.fail();return;}if(launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition===0){const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(inPullTabX&&inPullTabY){gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}}if(launchPadType!==LaunchPadTypes.PULL_TAB||launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition>0){const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}}manager.fail();}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function useLaunchPadGestureTsx3({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = {};
    golf = 'function useLaunchPadGestureTsx4({velocityX:velocityX}){const{gestureState,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<100){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}';
    tango['code'] = golf;
    var _closure1_slot13 = tango;
    tango = {};
    golf = 'function useLaunchPadGestureTsx5(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}';
    tango['code'] = golf;
    var _closure1_slot14 = tango;
    tango = {};
    golf = 'function useLaunchPadGestureTsx6(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}';
    tango['code'] = golf;
    var _closure1_slot15 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/launchpad/native/useLaunchPadGesture.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: useLaunchPadGesture
        entity = argFoo;
        options = entity.launchPadType;
        var _closure2_slot0 = options;
        verify = entity.launchPadSharedState;
        var _closure2_slot1 = verify;
        offset = entity.launchPadPullTabState;
        var _closure2_slot2 = offset;
        foxtrot = entity.gestureState;
        var _closure2_slot3 = foxtrot;
        golf = entity.updaters;
        var _closure2_slot4 = golf;
        report = _closure1_slot0;
        oscar = _closure1_slot2;
        mike = 2;
        mike = oscar[mike];
        tango = undefined;
        report = report.bind(tango)(mike);
        mike = report.useIsModalOpen;
        yankee = mike.bind(report)();
        var _closure2_slot5 = yankee;
        report = _closure1_slot1;
        mike = 3;
        mike = oscar[mike];
        mike = report.bind(tango)(mike);
        romeo = mike.bind(tango)();
        var _closure2_slot6 = romeo;
        oscar = _closure1_slot3;
        entity = oscar.useRef;
        mike = entity.bind(oscar)();
        var _closure2_slot7 = mike;
        entity = {};
        report = oscar.useMemo;
        tango = new Array(7);
        tango[0] = foxtrot;
        tango[1] = romeo;
        tango[2] = yankee;
        tango[3] = offset;
        tango[4] = verify;
        tango[5] = options;
        tango[6] = golf;
        zulu = function() {
            _fun120840: for(var _fun120840_ip = 0; ; ) switch(_fun120840_ip) {
 0:
                zulu = _closure2_slot0;
                mike = _closure1_slot9;
                mike = mike.GESTURE_FULL;
                foxtrot = 0;
                golf = 0;
                if(!(zulu === mike)) { _fun120840_ip = 44; continue _fun120840 }
 30:
                zulu = _closure1_slot4;
                mike = -1;
                golf = mike * zulu;
 44:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                options = 4;
                mike = mike[options];
                offset = undefined;
                mike = zulu.bind(offset)(mike);
                zulu = mike.Gesture;
                mike = zulu.Pan;
                report = mike.bind(zulu)();
                zulu = report.enabled;
                mike = _closure2_slot5;
                mike = !mike;
                if(!mike) { _fun120840_ip = 115; continue _fun120840 }
 97:
                yankee = _closure2_slot0;
                verify = _closure1_slot9;
                verify = verify.DISABLED;
                mike = yankee !== verify;
 115:
                report = zulu.bind(report)(mike);
                zulu = report.withRef;
                mike = _closure2_slot7;
                zulu = zulu.bind(report)(mike);
                mike = zulu.minDistance;
                report = mike.bind(zulu)(foxtrot);
                zulu = report.maxPointers;
                mike = 1;
                report = zulu.bind(report)(mike);
                zulu = report.manualActivation;
                kilo = _closure1_slot0;
                yankee = _closure1_slot2;
                mike = 5;
                mike = yankee[mike];
                verify = kilo.bind(offset)(mike);
                mike = verify.isAndroid;
                mike = mike.bind(verify)();
                report = zulu.bind(report)(mike);
                zulu = report.hitSlop;
                mike = {};
                verify = _closure2_slot6;
                backup = verify.top;
                romeo = -1;
                backup = romeo * backup;
                mike['top'] = backup;
                mike['left'] = foxtrot;
                verify = verify.bottom;
                verify = romeo * verify;
                mike['bottom'] = verify;
                mike['right'] = golf;
                report = zulu.bind(report)(mike);
                zulu = report.onTouchesDown;
                mike = function(argFoo) { // Original name: w
                    entity = argFoo;
                    entity = entity.changedTouches;
                    report = 0;
                    entity = entity[report];
                    golf = entity.x;
                    tango = entity.y;
                    zulu = _closure2_slot3;
                    mike = zulu.set;
                    entity = {'active': false, 'initialLaunchPadPosition': null, 'initialPullTabPosition': 0, 'initialTouchX': null, 'initialTouchY': null, 'positionOffsetX': 0, 'positionOffsetY': 0};
                    oscar = _closure2_slot1;
                    options = oscar.get;
                    options = options.bind(oscar)();
                    entity['initialLaunchPadPosition'] = options;
                    entity['initialTouchX'] = golf;
                    entity['initialTouchY'] = tango;
                    tango = global;
                    golf = tango.Date;
                    tango = golf.now;
                    tango = tango.bind(golf)();
                    entity['startTime'] = tango;
                    tango = oscar.get;
                    tango = tango.bind(oscar)();
                    tango = report === tango;
                    entity['requiresPop'] = tango;
                    tango = oscar.get;
                    tango = tango.bind(oscar)();
                    tango = report === tango;
                    tango = !tango;
                    entity['startShown'] = tango;
                    entity = mike.bind(zulu)(entity);
                    entity = undefined;
                    return entity;
                };
                verify = {};
                golf = _closure2_slot3;
                verify['gestureState'] = golf;
                foxtrot = _closure2_slot1;
                verify['launchPadSharedState'] = foxtrot;
                mike['__closure'] = verify;
                verify = 4127776842763.0;
                mike['__workletHash'] = verify;
                verify = _closure1_slot10;
                mike['__initData'] = verify;
                report = zulu.bind(report)(mike);
                zulu = report.onTouchesMove;
                mike = function(argFoo, argBar) { // Original name: b
                    _fun120842: for(var _fun120842_ip = 0; ; ) switch(_fun120842_ip) {
 0:
                        report = argFoo;
                        zulu = argBar;
                        mike = _closure2_slot3;
                        entity = mike.get;
                        entity = entity.bind(mike)();
                        oscar = entity.active;
                        verify = entity.initialLaunchPadPosition;
                        options = entity.initialTouchX;
                        yankee = entity.initialTouchY;
                        offset = report.state;
                        romeo = _closure1_slot0;
                        golf = _closure1_slot2;
                        entity = 4;
                        golf = golf[entity];
                        entity = undefined;
                        golf = romeo.bind(entity)(golf);
                        golf = golf.State;
                        golf = golf.BEGAN;
                        if(!(offset === golf)) { _fun120842_ip = 689; continue _fun120842 }
 95:
                        if(oscar) { _fun120842_ip = 689; continue _fun120842 }
 101:
                        report = report.changedTouches;
                        golf = 0;
                        foxtrot = report[golf];
                        report = foxtrot.x;
                        oscar = foxtrot.y;
                        romeo = _closure1_slot0;
                        backup = _closure1_slot2;
                        offset = 6;
                        offset = backup[offset];
                        romeo = romeo.bind(entity)(offset);
                        offset = romeo.getWindowDimensionsWorklet;
                        offset = offset.bind(romeo)();
                        romeo = offset.width;
                        offset = null;
                        if(!(offset != foxtrot)) { _fun120842_ip = 679; continue _fun120842 }
 167:
                        foxtrot = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.GESTURE_EDGE;
                        if(!(foxtrot === offset)) { _fun120842_ip = 204; continue _fun120842 }
 185:
                        if(!(golf === verify)) { _fun120842_ip = 204; continue _fun120842 }
 189:
                        offset = _closure1_slot4;
                        offset = romeo - offset;
                        if(!(!(options < offset))) { _fun120842_ip = 679; continue _fun120842 }
 204:
                        foxtrot = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.DISABLED;
                        if(!(foxtrot !== offset)) { _fun120842_ip = 679; continue _fun120842 }
 225:
                        foxtrot = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.PULL_TAB;
                        if(!(foxtrot === offset)) { _fun120842_ip = 348; continue _fun120842 }
 243:
                        if(!(golf === verify)) { _fun120842_ip = 348; continue _fun120842 }
 247:
                        foxtrot = _closure2_slot2;
                        offset = foxtrot.get;
                        offset = offset.bind(foxtrot)();
                        foxtrot = offset.position;
                        offset = _closure1_slot6;
                        offset = foxtrot - offset;
                        offset = oscar > offset;
                        if(!offset) { _fun120842_ip = 318; continue _fun120842 }
 280:
                        backup = _closure2_slot2;
                        foxtrot = backup.get;
                        foxtrot = foxtrot.bind(backup)();
                        backup = foxtrot.position;
                        foxtrot = _closure1_slot5;
                        backup = backup + foxtrot;
                        foxtrot = _closure1_slot6;
                        foxtrot = backup + foxtrot;
                        offset = oscar < foxtrot;
 318:
                        foxtrot = _closure1_slot8;
                        backup = romeo - foxtrot;
                        foxtrot = _closure1_slot6;
                        foxtrot = backup - foxtrot;
                        if(!(report > foxtrot)) { _fun120842_ip = 348; continue _fun120842 }
 338:
                        if(!(report < romeo)) { _fun120842_ip = 348; continue _fun120842 }
 342:
                        if(offset) { _fun120842_ip = 565; continue _fun120842 }
 348:
                        romeo = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.PULL_TAB;
                        if(!(romeo === offset)) { _fun120842_ip = 388; continue _fun120842 }
 366:
                        romeo = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.PULL_TAB;
                        if(!(romeo === offset)) { _fun120842_ip = 478; continue _fun120842 }
 384:
                        if(!(verify > golf)) { _fun120842_ip = 478; continue _fun120842 }
 388:
                        options = report - options;
                        report = global;
                        offset = report.Math;
                        verify = offset.abs;
                        oscar = oscar - yankee;
                        oscar = verify.bind(offset)(oscar);
                        offset = _closure2_slot1;
                        verify = offset.get;
                        verify = verify.bind(offset)();
                        if(!(verify > golf)) { _fun120842_ip = 436; continue _fun120842 }
 432:
                        if(!(!(options > golf))) { _fun120842_ip = 457; continue _fun120842 }
 436:
                        offset = _closure2_slot1;
                        verify = offset.get;
                        verify = verify.bind(offset)();
                        if(!(verify <= golf)) { _fun120842_ip = 478; continue _fun120842 }
 453:
                        if(!(options < golf)) { _fun120842_ip = 478; continue _fun120842 }
 457:
                        golf = report.Math;
                        report = golf.abs;
                        report = report.bind(golf)(options);
                        if(!(!(report > oscar))) { _fun120842_ip = 493; continue _fun120842 }
 478:
                        report = zulu.fail;
                        report = report.bind(zulu)();
                        _fun120842_ip = 689; continue _fun120842;
 493:
                        options = _closure2_slot3;
                        oscar = options.set;
                        report = {};
                        golf = options.get;
                        kilo = golf.bind(options)();
                        sizing = report;
                        golf = copyDataProperties(sizing, kilo);
                        golf = true;
                        verify = 'active';
                        report[verify] = golf;
                        report = oscar.bind(options)(report);
                        oscar = _closure2_slot4;
                        report = oscar.setLaunchPadShown;
                        report = report.bind(oscar)(golf);
                        report = zulu.activate;
                        report = report.bind(zulu)();
                        report = undefined;
                        return report;
 565:
                        options = _closure2_slot3;
                        golf = options.set;
                        oscar = {};
                        report = options.get;
                        kilo = report.bind(options)();
                        sizing = oscar;
                        report = copyDataProperties(sizing, kilo);
                        verify = _closure2_slot2;
                        report = verify.get;
                        report = report.bind(verify)();
                        verify = report.position;
                        report = 'initialPullTabPosition';
                        oscar[report] = verify;
                        report = true;
                        verify = 'active';
                        oscar[verify] = report;
                        oscar = golf.bind(options)(oscar);
                        tango = _closure2_slot4;
                        oscar = tango.setLaunchPadPullTabScale;
                        mike = _closure1_slot7;
                        mike = oscar.bind(tango)(mike);
                        mike = tango.setLaunchPadShown;
                        mike = mike.bind(tango)(report);
                        mike = zulu.activate;
                        mike = mike.bind(zulu)();
                        mike = undefined;
                        return mike;
 679:
                        mike = zulu.fail;
                        mike = mike.bind(zulu)();
 689:
                        return entity;
                    }
                };
                romeo = {};
                romeo['gestureState'] = golf;
                options = yankee[options];
                options = kilo.bind(offset)(options);
                options = options.State;
                romeo['State'] = options;
                backup = 6;
                options = yankee[backup];
                options = kilo.bind(offset)(options);
                options = options.getWindowDimensionsWorklet;
                romeo['getWindowDimensionsWorklet'] = options;
                verify = _closure2_slot0;
                romeo['launchPadType'] = verify;
                options = _closure1_slot9;
                romeo['LaunchPadTypes'] = options;
                sizing = _closure1_slot4;
                romeo['LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE'] = sizing;
                sizing = _closure1_slot8;
                romeo['LAUNCH_PAD_PULL_TAB_WIDTH'] = sizing;
                sizing = _closure1_slot6;
                romeo['LAUNCH_PAD_PULL_TAB_HIT_SLOP'] = sizing;
                sizing = _closure2_slot2;
                romeo['launchPadPullTabState'] = sizing;
                sizing = _closure1_slot5;
                romeo['LAUNCH_PAD_PULL_TAB_HEIGHT'] = sizing;
                oscar = _closure2_slot4;
                romeo['updaters'] = oscar;
                sizing = _closure1_slot7;
                romeo['LAUNCH_PAD_PULL_TAB_SCALE_FACTOR'] = sizing;
                romeo['launchPadSharedState'] = foxtrot;
                mike['__closure'] = romeo;
                romeo = 9461076312347.0;
                mike['__workletHash'] = romeo;
                romeo = _closure1_slot11;
                mike['__initData'] = romeo;
                report = zulu.bind(report)(mike);
                zulu = report.onChange;
                mike = function(argFoo) { // Original name: O
                    _fun120843: for(var _fun120843_ip = 0; ; ) switch(_fun120843_ip) {
 0:
                        entity = argFoo;
                        yankee = entity.translationX;
                        golf = entity.translationY;
                        offset = entity.absoluteX;
                        zulu = _closure2_slot3;
                        mike = zulu.get;
                        mike = mike.bind(zulu)();
                        mike = mike.active;
                        if(!mike) { _fun120843_ip = 494; continue _fun120843 }
 49:
                        romeo = _closure2_slot3;
                        mike = romeo.get;
                        mike = mike.bind(romeo)();
                        report = mike.initialTouchX;
                        zulu = mike.requiresPop;
                        options = _closure1_slot0;
                        oscar = _closure1_slot2;
                        tango = 6;
                        oscar = oscar[tango];
                        tango = undefined;
                        options = options.bind(tango)(oscar);
                        oscar = options.getWindowDimensionsWorklet;
                        oscar = oscar.bind(options)();
                        options = oscar.width;
                        oscar = global;
                        foxtrot = oscar.Math;
                        verify = foxtrot.max;
                        oscar = offset - report;
                        report = -1;
                        report = report * oscar;
                        oscar = 0;
                        verify = verify.bind(foxtrot)(report, oscar);
                        report = romeo.get;
                        report = report.bind(romeo)();
                        report = report.initialTouchX;
                        report = offset - report;
                        offset = romeo.get;
                        offset = offset.bind(romeo)();
                        offset = offset.initialTouchX;
                        offset = offset + yankee;
                        romeo = _closure2_slot0;
                        yankee = _closure1_slot9;
                        yankee = yankee.PULL_TAB;
                        if(!(romeo !== yankee)) { _fun120843_ip = 208; continue _fun120843 }
 205:
                        oscar = 40;
 208:
                        oscar = offset - oscar;
                        yankee = oscar / options;
                        if(!zulu) { _fun120843_ip = 229; continue _fun120843 }
 219:
                        oscar = 70;
                        if(!(!(verify <= oscar))) { _fun120843_ip = 385; continue _fun120843 }
 229:
                        offset = _closure1_slot1;
                        romeo = _closure1_slot2;
                        oscar = 7;
                        oscar = romeo[oscar];
                        offset = offset.bind(tango)(oscar);
                        oscar = _closure2_slot3;
                        if(zulu) { _fun120843_ip = 271; continue _fun120843 }
 256:
                        zulu = {};
                        zulu['positionOffsetX'] = report;
                        zulu = offset.bind(tango)(oscar, zulu);
                        _fun120843_ip = 361; continue _fun120843;
 271:
                        zulu = {};
                        foxtrot = false;
                        zulu['requiresPop'] = foxtrot;
                        zulu['positionOffsetX'] = report;
                        zulu = offset.bind(tango)(oscar, zulu);
                        offset = _closure1_slot0;
                        zulu = 8;
                        zulu = romeo[zulu];
                        backup = offset.bind(tango)(zulu);
                        foxtrot = backup.runOnJS;
                        zulu = 9;
                        oscar = romeo[zulu];
                        oscar = offset.bind(tango)(oscar);
                        oscar = oscar.triggerHapticFeedback;
                        oscar = foxtrot.bind(backup)(oscar);
                        zulu = romeo[zulu];
                        zulu = offset.bind(tango)(zulu);
                        zulu = zulu.HapticFeedbackTypes;
                        zulu = zulu.IMPACT_MEDIUM;
                        zulu = oscar.bind(tango)(zulu);
 361:
                        offset = _closure2_slot4;
                        oscar = offset.setLaunchPadPosition;
                        zulu = 1;
                        zulu = zulu - yankee;
                        zulu = oscar.bind(offset)(zulu);
                        _fun120843_ip = 494; continue _fun120843;
 385:
                        oscar = _closure2_slot0;
                        zulu = _closure1_slot9;
                        zulu = zulu.PULL_TAB;
                        if(!(oscar === zulu)) { _fun120843_ip = 420; continue _fun120843 }
 403:
                        oscar = _closure2_slot4;
                        zulu = oscar.setLaunchPadPullTabTranslation;
                        zulu = zulu.bind(oscar)(golf);
                        _fun120843_ip = 457; continue _fun120843;
 420:
                        golf = _closure2_slot4;
                        oscar = golf.setLaunchPadPosition;
                        zulu = 0.5;
                        zulu = zulu * verify;
                        zulu = verify - zulu;
                        zulu = zulu / options;
                        zulu = oscar.bind(golf)(zulu);
 457:
                        zulu = _closure1_slot1;
                        oscar = _closure1_slot2;
                        mike = 7;
                        mike = oscar[mike];
                        zulu = zulu.bind(tango)(mike);
                        mike = _closure2_slot3;
                        entity = {};
                        entity['positionOffsetX'] = report;
                        entity = zulu.bind(tango)(mike, entity);
 494:
                        entity = undefined;
                        return entity;
                    }
                };
                romeo = {};
                romeo['gestureState'] = golf;
                backup = yankee[backup];
                backup = kilo.bind(offset)(backup);
                backup = backup.getWindowDimensionsWorklet;
                romeo['getWindowDimensionsWorklet'] = backup;
                backup = 0.5;
                romeo['POP_RESISTANCE'] = backup;
                romeo['launchPadType'] = verify;
                romeo['LaunchPadTypes'] = options;
                options = 70;
                romeo['PIP_POP_DISTANCE'] = options;
                romeo['updaters'] = oscar;
                verify = _closure1_slot1;
                options = 7;
                backup = yankee[options];
                backup = verify.bind(offset)(backup);
                romeo['updateSharedValueIfChanged'] = backup;
                backup = 8;
                backup = yankee[backup];
                backup = kilo.bind(offset)(backup);
                backup = backup.runOnJS;
                romeo['runOnJS'] = backup;
                backup = 9;
                sizing = yankee[backup];
                sizing = kilo.bind(offset)(sizing);
                sizing = sizing.triggerHapticFeedback;
                romeo['triggerHapticFeedback'] = sizing;
                backup = yankee[backup];
                backup = kilo.bind(offset)(backup);
                backup = backup.HapticFeedbackTypes;
                romeo['HapticFeedbackTypes'] = backup;
                mike['__closure'] = romeo;
                romeo = 13087571947206.0;
                mike['__workletHash'] = romeo;
                romeo = _closure1_slot12;
                mike['__initData'] = romeo;
                report = zulu.bind(report)(mike);
                zulu = report.onEnd;
                mike = function(argFoo) { // Original name: X
                    _fun120844: for(var _fun120844_ip = 0; ; ) switch(_fun120844_ip) {
 0:
                        entity = argFoo;
                        zulu = entity.velocityX;
                        tango = _closure2_slot3;
                        entity = tango.get;
                        entity = entity.bind(tango)();
                        tango = entity.requiresPop;
                        entity = entity.startShown;
                        if(tango) { _fun120844_ip = 178; continue _fun120844 }
 43:
                        tango = global;
                        report = tango.Math;
                        tango = report.abs;
                        report = tango.bind(report)(zulu);
                        tango = 100;
                        if(!(!(report < tango))) { _fun120844_ip = 112; continue _fun120844 }
 69:
                        report = 0;
                        if(!(!(zulu > report))) { _fun120844_ip = 95; continue _fun120844 }
 75:
                        oscar = _closure2_slot4;
                        tango = oscar.setLaunchPadPosition;
                        zulu = 1;
                        zulu = tango.bind(oscar)(zulu);
                        _fun120844_ip = 208; continue _fun120844;
 95:
                        tango = _closure2_slot4;
                        zulu = tango.setLaunchPadPosition;
                        zulu = zulu.bind(tango)(report);
                        _fun120844_ip = 208; continue _fun120844;
 112:
                        tango = _closure2_slot1;
                        zulu = tango.get;
                        tango = zulu.bind(tango)();
                        zulu = 0.5;
                        if(!(!(tango >= zulu))) { _fun120844_ip = 158; continue _fun120844 }
 139:
                        report = _closure2_slot4;
                        tango = report.setLaunchPadPosition;
                        zulu = 0;
                        zulu = tango.bind(report)(zulu);
                        _fun120844_ip = 208; continue _fun120844;
 158:
                        report = _closure2_slot4;
                        tango = report.setLaunchPadPosition;
                        zulu = 1;
                        zulu = tango.bind(report)(zulu);
                        _fun120844_ip = 208; continue _fun120844;
 178:
                        zulu = _closure2_slot4;
                        mike = zulu.setLaunchPadPosition;
                        if(entity) { _fun120844_ip = 200; continue _fun120844 }
 191:
                        entity = 0;
                        entity = mike.bind(zulu)(entity);
                        _fun120844_ip = 208; continue _fun120844;
 200:
                        entity = 1;
                        entity = mike.bind(zulu)(entity);
 208:
                        entity = undefined;
                        return entity;
                    }
                };
                romeo = {};
                romeo['gestureState'] = golf;
                romeo['updaters'] = oscar;
                romeo['launchPadSharedState'] = foxtrot;
                mike['__closure'] = romeo;
                romeo = 1090977335573.0;
                mike['__workletHash'] = romeo;
                romeo = _closure1_slot13;
                mike['__initData'] = romeo;
                report = zulu.bind(report)(mike);
                zulu = report.onTouchesCancelled;
                mike = function() { // Original name: E
                    _fun120845: for(var _fun120845_ip = 0; ; ) switch(_fun120845_ip) {
 0:
                        zulu = _closure2_slot3;
                        entity = zulu.get;
                        zulu = entity.bind(zulu)();
                        entity = zulu.initialLaunchPadPosition;
                        zulu = zulu.active;
                        if(!zulu) { _fun120845_ip = 72; continue _fun120845 }
 31:
                        tango = 1;
                        if(!(tango !== entity)) { _fun120845_ip = 57; continue _fun120845 }
 38:
                        report = _closure2_slot4;
                        zulu = report.setLaunchPadPosition;
                        entity = 0;
                        entity = zulu.bind(report)(entity);
                        _fun120845_ip = 72; continue _fun120845;
 57:
                        zulu = _closure2_slot4;
                        entity = zulu.setLaunchPadPosition;
                        entity = entity.bind(zulu)(tango);
 72:
                        tango = _closure1_slot1;
                        zulu = _closure1_slot2;
                        entity = 7;
                        zulu = zulu[entity];
                        entity = undefined;
                        tango = tango.bind(entity)(zulu);
                        zulu = _closure2_slot3;
                        mike = {'active': false, 'initialLaunchPadPosition': 0, 'initialPullTabPosition': 0, 'initialTouchX': 0, 'initialTouchY': 0, 'positionOffsetX': 0, 'positionOffsetY': 0, 'startTime': 4294967295};
                        mike = tango.bind(entity)(zulu, mike);
                        return entity;
                    }
                };
                romeo = {};
                romeo['gestureState'] = golf;
                romeo['updaters'] = oscar;
                foxtrot = yankee[options];
                foxtrot = verify.bind(offset)(foxtrot);
                romeo['updateSharedValueIfChanged'] = foxtrot;
                mike['__closure'] = romeo;
                romeo = 14211765338113.0;
                mike['__workletHash'] = romeo;
                romeo = _closure1_slot14;
                mike['__initData'] = romeo;
                zulu = zulu.bind(report)(mike);
                mike = zulu.onFinalize;
                entity = function() { // Original name: t
                    zulu = _closure1_slot1;
                    mike = _closure1_slot2;
                    entity = 7;
                    mike = mike[entity];
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    tango = _closure2_slot3;
                    zulu = {'active': false, 'initialLaunchPadPosition': 0, 'initialPullTabPosition': 0, 'initialTouchX': 0, 'initialTouchY': 0, 'positionOffsetX': 0, 'positionOffsetY': 0, 'startTime': 4294967295};
                    zulu = report.bind(entity)(tango, zulu);
                    tango = _closure2_slot4;
                    zulu = tango.setLaunchPadPullTabScale;
                    mike = 1;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                report = {};
                options = yankee[options];
                options = verify.bind(offset)(options);
                report['updateSharedValueIfChanged'] = options;
                report['gestureState'] = golf;
                report['updaters'] = oscar;
                entity['__closure'] = report;
                report = 8147854846718.0;
                entity['__workletHash'] = report;
                tango = _closure1_slot15;
                entity['__initData'] = tango;
                entity = mike.bind(zulu)(entity);
                return entity;
            }
        };
        zulu = report.bind(oscar)(zulu, tango);
        entity['gesture'] = zulu;
        entity['gestureRef'] = mike;
        return entity;
    };
    zulu['default'] = mike;
    return entity;
})();
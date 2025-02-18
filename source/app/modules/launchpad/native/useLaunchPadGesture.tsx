// app/modules/launchpad/native/useLaunchPadGesture.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE;
    var _closure1_slot4 = golfie;
    golfie = tangon.LAUNCH_PAD_PULL_TAB_HEIGHT;
    var _closure1_slot5 = golfie;
    golfie = tangon.LAUNCH_PAD_PULL_TAB_HIT_SLOP;
    var _closure1_slot6 = golfie;
    golfie = tangon.LAUNCH_PAD_PULL_TAB_SCALE_FACTOR;
    var _closure1_slot7 = golfie;
    golfie = tangon.LAUNCH_PAD_PULL_TAB_WIDTH;
    var _closure1_slot8 = golfie;
    tangon = tangon.LaunchPadTypes;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = 'function useLaunchPadGestureTsx1(event){const{gestureState,launchPadSharedState}=this.__closure;const{x:x,y:y}=event.changedTouches[0];gestureState.set({active:false,initialLaunchPadPosition:launchPadSharedState.get(),initialPullTabPosition:0,initialTouchX:x,initialTouchY:y,positionOffsetX:0,positionOffsetY:0,startTime:Date.now(),requiresPop:launchPadSharedState.get()===0,startShown:!(launchPadSharedState.get()===0)});}';
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function useLaunchPadGestureTsx2(event,manager){const{gestureState,State,getWindowDimensionsWorklet,launchPadType,LaunchPadTypes,LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE,LAUNCH_PAD_PULL_TAB_WIDTH,LAUNCH_PAD_PULL_TAB_HIT_SLOP,launchPadPullTabState,LAUNCH_PAD_PULL_TAB_HEIGHT,updaters,LAUNCH_PAD_PULL_TAB_SCALE_FACTOR,launchPadSharedState}=this.__closure;const{active:active,initialLaunchPadPosition:initialLaunchPadPosition,initialTouchX:initialTouchX,initialTouchY:initialTouchY}=gestureState.get();if(event.state!==State.BEGAN||active)return;const currentTouch=event.changedTouches[0];const{x:x,y:y}=currentTouch;const{width:windowWidth}=getWindowDimensionsWorklet();if(currentTouch==null||launchPadType===LaunchPadTypes.GESTURE_EDGE&&initialLaunchPadPosition===0&&initialTouchX<windowWidth-LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE||launchPadType===LaunchPadTypes.DISABLED){manager.fail();return;}if(launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition===0){const inPullTabX=x>windowWidth-LAUNCH_PAD_PULL_TAB_WIDTH-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&x<windowWidth;const inPullTabY=y>launchPadPullTabState.get().position-LAUNCH_PAD_PULL_TAB_HIT_SLOP&&y<launchPadPullTabState.get().position+LAUNCH_PAD_PULL_TAB_HEIGHT+LAUNCH_PAD_PULL_TAB_HIT_SLOP;if(inPullTabX&&inPullTabY){gestureState.set({...gestureState.get(),initialPullTabPosition:launchPadPullTabState.get().position,active:true});updaters.setLaunchPadPullTabScale(LAUNCH_PAD_PULL_TAB_SCALE_FACTOR);updaters.setLaunchPadShown(true);manager.activate();return;}}if(launchPadType!==LaunchPadTypes.PULL_TAB||launchPadType===LaunchPadTypes.PULL_TAB&&initialLaunchPadPosition>0){const horizontalDistance=x-initialTouchX;const verticalDistance=Math.abs(y-initialTouchY);const hasMovedCorrectDirection=launchPadSharedState.get()>0&&horizontalDistance>0||launchPadSharedState.get()<=0&&horizontalDistance<0;if(hasMovedCorrectDirection&&Math.abs(horizontalDistance)>verticalDistance){gestureState.set({...gestureState.get(),active:true});updaters.setLaunchPadShown(true);manager.activate();return;}}manager.fail();}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = 'function useLaunchPadGestureTsx3({translationX:translationX,translationY:translationY,absoluteX:absoluteX}){const{gestureState,getWindowDimensionsWorklet,POP_RESISTANCE,launchPadType,LaunchPadTypes,PIP_POP_DISTANCE,updaters,updateSharedValueIfChanged,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;if(!gestureState.get().active)return;const{initialTouchX:initialTouchX,requiresPop:requiresPop}=gestureState.get();const{width:windowWidth}=getWindowDimensionsWorklet();const newXOffset=absoluteX-initialTouchX;const distance=Math.max(newXOffset*-1,0);const resistance=distance*POP_RESISTANCE;const positionOffsetX=absoluteX-gestureState.get().initialTouchX;const launchPadPosition=1-(gestureState.get().initialTouchX+translationX-(launchPadType!==LaunchPadTypes.PULL_TAB?40:0))/windowWidth;if(requiresPop&&distance<=PIP_POP_DISTANCE){if(launchPadType!==LaunchPadTypes.PULL_TAB){const a=(distance-resistance)/windowWidth;updaters.setLaunchPadPosition(a);}else{updaters.setLaunchPadPullTabTranslation(translationY);}updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}else{if(requiresPop){updateSharedValueIfChanged(gestureState,{requiresPop:false,positionOffsetX:positionOffsetX});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}else{updateSharedValueIfChanged(gestureState,{positionOffsetX:positionOffsetX});}updaters.setLaunchPadPosition(launchPadPosition);}}';
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = {};
    golfie = 'function useLaunchPadGestureTsx4({velocityX:velocityX}){const{gestureState,updaters,launchPadSharedState}=this.__closure;const{requiresPop:requiresPop,startShown:startShown}=gestureState.get();if(requiresPop){if(!startShown){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}else if(Math.abs(velocityX)<100){if(launchPadSharedState.get()>=0.5){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}else if(velocityX>0){updaters.setLaunchPadPosition(0);}else{updaters.setLaunchPadPosition(1);}}';
    tangon['code'] = golfie;
    var _closure1_slot13 = tangon;
    tangon = {};
    golfie = 'function useLaunchPadGestureTsx5(){const{gestureState,updaters,updateSharedValueIfChanged}=this.__closure;const{initialLaunchPadPosition:initialLaunchPadPosition,active:active}=gestureState.get();if(active){if(initialLaunchPadPosition===1){updaters.setLaunchPadPosition(1);}else{updaters.setLaunchPadPosition(0);}}updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});}';
    tangon['code'] = golfie;
    var _closure1_slot14 = tangon;
    tangon = {};
    golfie = 'function useLaunchPadGestureTsx6(){const{updateSharedValueIfChanged,gestureState,updaters}=this.__closure;updateSharedValueIfChanged(gestureState,{active:false,initialLaunchPadPosition:0,initialPullTabPosition:0,initialTouchX:0,initialTouchY:0,positionOffsetX:0,positionOffsetY:0,startTime:-1});updaters.setLaunchPadPullTabScale(1.0);}';
    tangon['code'] = golfie;
    var _closure1_slot15 = tangon;
    tangon = 10;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/launchpad/native/useLaunchPadGesture.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useLaunchPadGesture
        entity = argFoo;
        option = entity.launchPadType;
        var _closure2_slot0 = option;
        verify = entity.launchPadSharedState;
        var _closure2_slot1 = verify;
        offset = entity.launchPadPullTabState;
        var _closure2_slot2 = offset;
        foxtra = entity.gestureState;
        var _closure2_slot3 = foxtra;
        golfie = entity.updaters;
        var _closure2_slot4 = golfie;
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        michal = 2;
        michal = oscard[michal];
        tangon = undefined;
        report = report.bind(tangon)(michal);
        michal = report.useIsModalOpen;
        yankee = michal.bind(report)();
        var _closure2_slot5 = yankee;
        report = _closure1_slot1;
        michal = 3;
        michal = oscard[michal];
        michal = report.bind(tangon)(michal);
        romeon = michal.bind(tangon)();
        var _closure2_slot6 = romeon;
        oscard = _closure1_slot3;
        entity = oscard.useRef;
        michal = entity.bind(oscard)();
        var _closure2_slot7 = michal;
        entity = {};
        report = oscard.useMemo;
        tangon = new Array(7);
        tangon[0] = foxtra;
        tangon[1] = romeon;
        tangon[2] = yankee;
        tangon[3] = offset;
        tangon[4] = verify;
        tangon[5] = option;
        tangon[6] = golfie;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                michal = _closure1_slot9;
                michal = michal.GESTURE_FULL;
                foxtra = 0;
                golfie = 0;
                if(!(zuuluu === michal)) { _fun00002_ip = 44; continue _fun00001 }
 30:
                zuuluu = _closure1_slot4;
                michal = -1;
                golfie = michal * zuuluu;
 44:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                option = 4;
                michal = michal[option];
                offset = undefined;
                michal = zuuluu.bind(offset)(michal);
                zuuluu = michal.Gesture;
                michal = zuuluu.Pan;
                report = michal.bind(zuuluu)();
                zuuluu = report.enabled;
                michal = _closure2_slot5;
                michal = !michal;
                if(!michal) { _fun00002_ip = 115; continue _fun00001 }
 97:
                yankee = _closure2_slot0;
                verify = _closure1_slot9;
                verify = verify.DISABLED;
                michal = yankee !== verify;
 115:
                report = zuuluu.bind(report)(michal);
                zuuluu = report.withRef;
                michal = _closure2_slot7;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.minDistance;
                report = michal.bind(zuuluu)(foxtra);
                zuuluu = report.maxPointers;
                michal = 1;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.manualActivation;
                kiloes = _closure1_slot0;
                yankee = _closure1_slot2;
                michal = 5;
                michal = yankee[michal];
                verify = kiloes.bind(offset)(michal);
                michal = verify.isAndroid;
                michal = michal.bind(verify)();
                report = zuuluu.bind(report)(michal);
                zuuluu = report.hitSlop;
                michal = {};
                verify = _closure2_slot6;
                backup = verify.top;
                romeon = -1;
                backup = romeon * backup;
                michal['top'] = backup;
                michal['left'] = foxtra;
                verify = verify.bottom;
                verify = romeon * verify;
                michal['bottom'] = verify;
                michal['right'] = golfie;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onTouchesDown;
                michal = function(argFoo) { // Original name: w
                    entity = argFoo;
                    entity = entity.changedTouches;
                    report = 0;
                    entity = entity[report];
                    golfie = entity.x;
                    tangon = entity.y;
                    zuuluu = _closure2_slot3;
                    michal = zuuluu.set;
                    entity = {'active': false, 'initialLaunchPadPosition': null, 'initialPullTabPosition': 0, 'initialTouchX': null, 'initialTouchY': null, 'positionOffsetX': 0, 'positionOffsetY': 0};
                    oscard = _closure2_slot1;
                    option = oscard.get;
                    option = option.bind(oscard)();
                    entity['initialLaunchPadPosition'] = option;
                    entity['initialTouchX'] = golfie;
                    entity['initialTouchY'] = tangon;
                    tangon = global;
                    golfie = tangon.Date;
                    tangon = golfie.now;
                    tangon = tangon.bind(golfie)();
                    entity['startTime'] = tangon;
                    tangon = oscard.get;
                    tangon = tangon.bind(oscard)();
                    tangon = report === tangon;
                    entity['requiresPop'] = tangon;
                    tangon = oscard.get;
                    tangon = tangon.bind(oscard)();
                    tangon = report === tangon;
                    tangon = !tangon;
                    entity['startShown'] = tangon;
                    entity = michal.bind(zuuluu)(entity);
                    entity = undefined;
                    return entity;
                };
                verify = {};
                golfie = _closure2_slot3;
                verify['gestureState'] = golfie;
                foxtra = _closure2_slot1;
                verify['launchPadSharedState'] = foxtra;
                michal['__closure'] = verify;
                verify = 4127776842763.0;
                michal['__workletHash'] = verify;
                verify = _closure1_slot10;
                michal['__initData'] = verify;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onTouchesMove;
                michal = function(argFoo, argBar) { // Original name: b
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        report = argFoo;
                        zuuluu = argBar;
                        michal = _closure2_slot3;
                        entity = michal.get;
                        entity = entity.bind(michal)();
                        oscard = entity.active;
                        verify = entity.initialLaunchPadPosition;
                        option = entity.initialTouchX;
                        yankee = entity.initialTouchY;
                        offset = report.state;
                        romeon = _closure1_slot0;
                        golfie = _closure1_slot2;
                        entity = 4;
                        golfie = golfie[entity];
                        entity = undefined;
                        golfie = romeon.bind(entity)(golfie);
                        golfie = golfie.State;
                        golfie = golfie.BEGAN;
                        if(!(offset === golfie)) { _fun00004_ip = 689; continue _fun00003 }
 95:
                        if(oscard) { _fun00004_ip = 689; continue _fun00003 }
 101:
                        report = report.changedTouches;
                        golfie = 0;
                        foxtra = report[golfie];
                        report = foxtra.x;
                        oscard = foxtra.y;
                        romeon = _closure1_slot0;
                        backup = _closure1_slot2;
                        offset = 6;
                        offset = backup[offset];
                        romeon = romeon.bind(entity)(offset);
                        offset = romeon.getWindowDimensionsWorklet;
                        offset = offset.bind(romeon)();
                        romeon = offset.width;
                        offset = null;
                        if(!(offset != foxtra)) { _fun00004_ip = 679; continue _fun00003 }
 167:
                        foxtra = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.GESTURE_EDGE;
                        if(!(foxtra === offset)) { _fun00004_ip = 204; continue _fun00003 }
 185:
                        if(!(golfie === verify)) { _fun00004_ip = 204; continue _fun00003 }
 189:
                        offset = _closure1_slot4;
                        offset = romeon - offset;
                        if(!(!(option < offset))) { _fun00004_ip = 679; continue _fun00003 }
 204:
                        foxtra = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.DISABLED;
                        if(!(foxtra !== offset)) { _fun00004_ip = 679; continue _fun00003 }
 225:
                        foxtra = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.PULL_TAB;
                        if(!(foxtra === offset)) { _fun00004_ip = 348; continue _fun00003 }
 243:
                        if(!(golfie === verify)) { _fun00004_ip = 348; continue _fun00003 }
 247:
                        foxtra = _closure2_slot2;
                        offset = foxtra.get;
                        offset = offset.bind(foxtra)();
                        foxtra = offset.position;
                        offset = _closure1_slot6;
                        offset = foxtra - offset;
                        offset = oscard > offset;
                        if(!offset) { _fun00004_ip = 318; continue _fun00003 }
 280:
                        backup = _closure2_slot2;
                        foxtra = backup.get;
                        foxtra = foxtra.bind(backup)();
                        backup = foxtra.position;
                        foxtra = _closure1_slot5;
                        backup = backup + foxtra;
                        foxtra = _closure1_slot6;
                        foxtra = backup + foxtra;
                        offset = oscard < foxtra;
 318:
                        foxtra = _closure1_slot8;
                        backup = romeon - foxtra;
                        foxtra = _closure1_slot6;
                        foxtra = backup - foxtra;
                        if(!(report > foxtra)) { _fun00004_ip = 348; continue _fun00003 }
 338:
                        if(!(report < romeon)) { _fun00004_ip = 348; continue _fun00003 }
 342:
                        if(offset) { _fun00004_ip = 565; continue _fun00003 }
 348:
                        romeon = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.PULL_TAB;
                        if(!(romeon === offset)) { _fun00004_ip = 388; continue _fun00003 }
 366:
                        romeon = _closure2_slot0;
                        offset = _closure1_slot9;
                        offset = offset.PULL_TAB;
                        if(!(romeon === offset)) { _fun00004_ip = 478; continue _fun00003 }
 384:
                        if(!(verify > golfie)) { _fun00004_ip = 478; continue _fun00003 }
 388:
                        option = report - option;
                        report = global;
                        offset = report.Math;
                        verify = offset.abs;
                        oscard = oscard - yankee;
                        oscard = verify.bind(offset)(oscard);
                        offset = _closure2_slot1;
                        verify = offset.get;
                        verify = verify.bind(offset)();
                        if(!(verify > golfie)) { _fun00004_ip = 436; continue _fun00003 }
 432:
                        if(!(!(option > golfie))) { _fun00004_ip = 457; continue _fun00003 }
 436:
                        offset = _closure2_slot1;
                        verify = offset.get;
                        verify = verify.bind(offset)();
                        if(!(verify <= golfie)) { _fun00004_ip = 478; continue _fun00003 }
 453:
                        if(!(option < golfie)) { _fun00004_ip = 478; continue _fun00003 }
 457:
                        golfie = report.Math;
                        report = golfie.abs;
                        report = report.bind(golfie)(option);
                        if(!(!(report > oscard))) { _fun00004_ip = 493; continue _fun00003 }
 478:
                        report = zuuluu.fail;
                        report = report.bind(zuuluu)();
                        _fun00004_ip = 689; continue _fun00003;
 493:
                        option = _closure2_slot3;
                        oscard = option.set;
                        report = {};
                        golfie = option.get;
                        kiloes = golfie.bind(option)();
                        sizing = report;
                        golfie = copyDataProperties(sizing, kiloes);
                        golfie = true;
                        verify = 'active';
                        report[verify] = golfie;
                        report = oscard.bind(option)(report);
                        oscard = _closure2_slot4;
                        report = oscard.setLaunchPadShown;
                        report = report.bind(oscard)(golfie);
                        report = zuuluu.activate;
                        report = report.bind(zuuluu)();
                        report = undefined;
                        return report;
 565:
                        option = _closure2_slot3;
                        golfie = option.set;
                        oscard = {};
                        report = option.get;
                        kiloes = report.bind(option)();
                        sizing = oscard;
                        report = copyDataProperties(sizing, kiloes);
                        verify = _closure2_slot2;
                        report = verify.get;
                        report = report.bind(verify)();
                        verify = report.position;
                        report = 'initialPullTabPosition';
                        oscard[report] = verify;
                        report = true;
                        verify = 'active';
                        oscard[verify] = report;
                        oscard = golfie.bind(option)(oscard);
                        tangon = _closure2_slot4;
                        oscard = tangon.setLaunchPadPullTabScale;
                        michal = _closure1_slot7;
                        michal = oscard.bind(tangon)(michal);
                        michal = tangon.setLaunchPadShown;
                        michal = michal.bind(tangon)(report);
                        michal = zuuluu.activate;
                        michal = michal.bind(zuuluu)();
                        michal = undefined;
                        return michal;
 679:
                        michal = zuuluu.fail;
                        michal = michal.bind(zuuluu)();
 689:
                        return entity;
                    }
                };
                romeon = {};
                romeon['gestureState'] = golfie;
                option = yankee[option];
                option = kiloes.bind(offset)(option);
                option = option.State;
                romeon['State'] = option;
                backup = 6;
                option = yankee[backup];
                option = kiloes.bind(offset)(option);
                option = option.getWindowDimensionsWorklet;
                romeon['getWindowDimensionsWorklet'] = option;
                verify = _closure2_slot0;
                romeon['launchPadType'] = verify;
                option = _closure1_slot9;
                romeon['LaunchPadTypes'] = option;
                sizing = _closure1_slot4;
                romeon['LAUNCH_PAD_EDGE_GESTURE_AFFORDANCE'] = sizing;
                sizing = _closure1_slot8;
                romeon['LAUNCH_PAD_PULL_TAB_WIDTH'] = sizing;
                sizing = _closure1_slot6;
                romeon['LAUNCH_PAD_PULL_TAB_HIT_SLOP'] = sizing;
                sizing = _closure2_slot2;
                romeon['launchPadPullTabState'] = sizing;
                sizing = _closure1_slot5;
                romeon['LAUNCH_PAD_PULL_TAB_HEIGHT'] = sizing;
                oscard = _closure2_slot4;
                romeon['updaters'] = oscard;
                sizing = _closure1_slot7;
                romeon['LAUNCH_PAD_PULL_TAB_SCALE_FACTOR'] = sizing;
                romeon['launchPadSharedState'] = foxtra;
                michal['__closure'] = romeon;
                romeon = 9461076312347.0;
                michal['__workletHash'] = romeon;
                romeon = _closure1_slot11;
                michal['__initData'] = romeon;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onChange;
                michal = function(argFoo) { // Original name: O
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        entity = argFoo;
                        yankee = entity.translationX;
                        golfie = entity.translationY;
                        offset = entity.absoluteX;
                        zuuluu = _closure2_slot3;
                        michal = zuuluu.get;
                        michal = michal.bind(zuuluu)();
                        michal = michal.active;
                        if(!michal) { _fun00006_ip = 494; continue _fun00005 }
 49:
                        romeon = _closure2_slot3;
                        michal = romeon.get;
                        michal = michal.bind(romeon)();
                        report = michal.initialTouchX;
                        zuuluu = michal.requiresPop;
                        option = _closure1_slot0;
                        oscard = _closure1_slot2;
                        tangon = 6;
                        oscard = oscard[tangon];
                        tangon = undefined;
                        option = option.bind(tangon)(oscard);
                        oscard = option.getWindowDimensionsWorklet;
                        oscard = oscard.bind(option)();
                        option = oscard.width;
                        oscard = global;
                        foxtra = oscard.Math;
                        verify = foxtra.max;
                        oscard = offset - report;
                        report = -1;
                        report = report * oscard;
                        oscard = 0;
                        verify = verify.bind(foxtra)(report, oscard);
                        report = romeon.get;
                        report = report.bind(romeon)();
                        report = report.initialTouchX;
                        report = offset - report;
                        offset = romeon.get;
                        offset = offset.bind(romeon)();
                        offset = offset.initialTouchX;
                        offset = offset + yankee;
                        romeon = _closure2_slot0;
                        yankee = _closure1_slot9;
                        yankee = yankee.PULL_TAB;
                        if(!(romeon !== yankee)) { _fun00006_ip = 208; continue _fun00005 }
 205:
                        oscard = 40;
 208:
                        oscard = offset - oscard;
                        yankee = oscard / option;
                        if(!zuuluu) { _fun00006_ip = 229; continue _fun00005 }
 219:
                        oscard = 70;
                        if(!(!(verify <= oscard))) { _fun00006_ip = 385; continue _fun00005 }
 229:
                        offset = _closure1_slot1;
                        romeon = _closure1_slot2;
                        oscard = 7;
                        oscard = romeon[oscard];
                        offset = offset.bind(tangon)(oscard);
                        oscard = _closure2_slot3;
                        if(zuuluu) { _fun00006_ip = 271; continue _fun00005 }
 256:
                        zuuluu = {};
                        zuuluu['positionOffsetX'] = report;
                        zuuluu = offset.bind(tangon)(oscard, zuuluu);
                        _fun00006_ip = 361; continue _fun00005;
 271:
                        zuuluu = {};
                        foxtra = false;
                        zuuluu['requiresPop'] = foxtra;
                        zuuluu['positionOffsetX'] = report;
                        zuuluu = offset.bind(tangon)(oscard, zuuluu);
                        offset = _closure1_slot0;
                        zuuluu = 8;
                        zuuluu = romeon[zuuluu];
                        backup = offset.bind(tangon)(zuuluu);
                        foxtra = backup.runOnJS;
                        zuuluu = 9;
                        oscard = romeon[zuuluu];
                        oscard = offset.bind(tangon)(oscard);
                        oscard = oscard.triggerHapticFeedback;
                        oscard = foxtra.bind(backup)(oscard);
                        zuuluu = romeon[zuuluu];
                        zuuluu = offset.bind(tangon)(zuuluu);
                        zuuluu = zuuluu.HapticFeedbackTypes;
                        zuuluu = zuuluu.IMPACT_MEDIUM;
                        zuuluu = oscard.bind(tangon)(zuuluu);
 361:
                        offset = _closure2_slot4;
                        oscard = offset.setLaunchPadPosition;
                        zuuluu = 1;
                        zuuluu = zuuluu - yankee;
                        zuuluu = oscard.bind(offset)(zuuluu);
                        _fun00006_ip = 494; continue _fun00005;
 385:
                        oscard = _closure2_slot0;
                        zuuluu = _closure1_slot9;
                        zuuluu = zuuluu.PULL_TAB;
                        if(!(oscard === zuuluu)) { _fun00006_ip = 420; continue _fun00005 }
 403:
                        oscard = _closure2_slot4;
                        zuuluu = oscard.setLaunchPadPullTabTranslation;
                        zuuluu = zuuluu.bind(oscard)(golfie);
                        _fun00006_ip = 457; continue _fun00005;
 420:
                        golfie = _closure2_slot4;
                        oscard = golfie.setLaunchPadPosition;
                        zuuluu = 0.5;
                        zuuluu = zuuluu * verify;
                        zuuluu = verify - zuuluu;
                        zuuluu = zuuluu / option;
                        zuuluu = oscard.bind(golfie)(zuuluu);
 457:
                        zuuluu = _closure1_slot1;
                        oscard = _closure1_slot2;
                        michal = 7;
                        michal = oscard[michal];
                        zuuluu = zuuluu.bind(tangon)(michal);
                        michal = _closure2_slot3;
                        entity = {};
                        entity['positionOffsetX'] = report;
                        entity = zuuluu.bind(tangon)(michal, entity);
 494:
                        entity = undefined;
                        return entity;
                    }
                };
                romeon = {};
                romeon['gestureState'] = golfie;
                backup = yankee[backup];
                backup = kiloes.bind(offset)(backup);
                backup = backup.getWindowDimensionsWorklet;
                romeon['getWindowDimensionsWorklet'] = backup;
                backup = 0.5;
                romeon['POP_RESISTANCE'] = backup;
                romeon['launchPadType'] = verify;
                romeon['LaunchPadTypes'] = option;
                option = 70;
                romeon['PIP_POP_DISTANCE'] = option;
                romeon['updaters'] = oscard;
                verify = _closure1_slot1;
                option = 7;
                backup = yankee[option];
                backup = verify.bind(offset)(backup);
                romeon['updateSharedValueIfChanged'] = backup;
                backup = 8;
                backup = yankee[backup];
                backup = kiloes.bind(offset)(backup);
                backup = backup.runOnJS;
                romeon['runOnJS'] = backup;
                backup = 9;
                sizing = yankee[backup];
                sizing = kiloes.bind(offset)(sizing);
                sizing = sizing.triggerHapticFeedback;
                romeon['triggerHapticFeedback'] = sizing;
                backup = yankee[backup];
                backup = kiloes.bind(offset)(backup);
                backup = backup.HapticFeedbackTypes;
                romeon['HapticFeedbackTypes'] = backup;
                michal['__closure'] = romeon;
                romeon = 13087571947206.0;
                michal['__workletHash'] = romeon;
                romeon = _closure1_slot12;
                michal['__initData'] = romeon;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onEnd;
                michal = function(argFoo) { // Original name: X
                    _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                        entity = argFoo;
                        zuuluu = entity.velocityX;
                        tangon = _closure2_slot3;
                        entity = tangon.get;
                        entity = entity.bind(tangon)();
                        tangon = entity.requiresPop;
                        entity = entity.startShown;
                        if(tangon) { _fun00008_ip = 178; continue _fun00007 }
 43:
                        tangon = global;
                        report = tangon.Math;
                        tangon = report.abs;
                        report = tangon.bind(report)(zuuluu);
                        tangon = 100;
                        if(!(!(report < tangon))) { _fun00008_ip = 112; continue _fun00007 }
 69:
                        report = 0;
                        if(!(!(zuuluu > report))) { _fun00008_ip = 95; continue _fun00007 }
 75:
                        oscard = _closure2_slot4;
                        tangon = oscard.setLaunchPadPosition;
                        zuuluu = 1;
                        zuuluu = tangon.bind(oscard)(zuuluu);
                        _fun00008_ip = 208; continue _fun00007;
 95:
                        tangon = _closure2_slot4;
                        zuuluu = tangon.setLaunchPadPosition;
                        zuuluu = zuuluu.bind(tangon)(report);
                        _fun00008_ip = 208; continue _fun00007;
 112:
                        tangon = _closure2_slot1;
                        zuuluu = tangon.get;
                        tangon = zuuluu.bind(tangon)();
                        zuuluu = 0.5;
                        if(!(!(tangon >= zuuluu))) { _fun00008_ip = 158; continue _fun00007 }
 139:
                        report = _closure2_slot4;
                        tangon = report.setLaunchPadPosition;
                        zuuluu = 0;
                        zuuluu = tangon.bind(report)(zuuluu);
                        _fun00008_ip = 208; continue _fun00007;
 158:
                        report = _closure2_slot4;
                        tangon = report.setLaunchPadPosition;
                        zuuluu = 1;
                        zuuluu = tangon.bind(report)(zuuluu);
                        _fun00008_ip = 208; continue _fun00007;
 178:
                        zuuluu = _closure2_slot4;
                        michal = zuuluu.setLaunchPadPosition;
                        if(entity) { _fun00008_ip = 200; continue _fun00007 }
 191:
                        entity = 0;
                        entity = michal.bind(zuuluu)(entity);
                        _fun00008_ip = 208; continue _fun00007;
 200:
                        entity = 1;
                        entity = michal.bind(zuuluu)(entity);
 208:
                        entity = undefined;
                        return entity;
                    }
                };
                romeon = {};
                romeon['gestureState'] = golfie;
                romeon['updaters'] = oscard;
                romeon['launchPadSharedState'] = foxtra;
                michal['__closure'] = romeon;
                romeon = 1090977335573.0;
                michal['__workletHash'] = romeon;
                romeon = _closure1_slot13;
                michal['__initData'] = romeon;
                report = zuuluu.bind(report)(michal);
                zuuluu = report.onTouchesCancelled;
                michal = function() { // Original name: E
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        zuuluu = _closure2_slot3;
                        entity = zuuluu.get;
                        zuuluu = entity.bind(zuuluu)();
                        entity = zuuluu.initialLaunchPadPosition;
                        zuuluu = zuuluu.active;
                        if(!zuuluu) { _fun00010_ip = 72; continue _fun00009 }
 31:
                        tangon = 1;
                        if(!(tangon !== entity)) { _fun00010_ip = 57; continue _fun00009 }
 38:
                        report = _closure2_slot4;
                        zuuluu = report.setLaunchPadPosition;
                        entity = 0;
                        entity = zuuluu.bind(report)(entity);
                        _fun00010_ip = 72; continue _fun00009;
 57:
                        zuuluu = _closure2_slot4;
                        entity = zuuluu.setLaunchPadPosition;
                        entity = entity.bind(zuuluu)(tangon);
 72:
                        tangon = _closure1_slot1;
                        zuuluu = _closure1_slot2;
                        entity = 7;
                        zuuluu = zuuluu[entity];
                        entity = undefined;
                        tangon = tangon.bind(entity)(zuuluu);
                        zuuluu = _closure2_slot3;
                        michal = {'active': false, 'initialLaunchPadPosition': 0, 'initialPullTabPosition': 0, 'initialTouchX': 0, 'initialTouchY': 0, 'positionOffsetX': 0, 'positionOffsetY': 0, 'startTime': 4294967295};
                        michal = tangon.bind(entity)(zuuluu, michal);
                        return entity;
                    }
                };
                romeon = {};
                romeon['gestureState'] = golfie;
                romeon['updaters'] = oscard;
                foxtra = yankee[option];
                foxtra = verify.bind(offset)(foxtra);
                romeon['updateSharedValueIfChanged'] = foxtra;
                michal['__closure'] = romeon;
                romeon = 14211765338113.0;
                michal['__workletHash'] = romeon;
                romeon = _closure1_slot14;
                michal['__initData'] = romeon;
                zuuluu = zuuluu.bind(report)(michal);
                michal = zuuluu.onFinalize;
                entity = function() { // Original name: t
                    zuuluu = _closure1_slot1;
                    michal = _closure1_slot2;
                    entity = 7;
                    michal = michal[entity];
                    entity = undefined;
                    report = zuuluu.bind(entity)(michal);
                    tangon = _closure2_slot3;
                    zuuluu = {'active': false, 'initialLaunchPadPosition': 0, 'initialPullTabPosition': 0, 'initialTouchX': 0, 'initialTouchY': 0, 'positionOffsetX': 0, 'positionOffsetY': 0, 'startTime': 4294967295};
                    zuuluu = report.bind(entity)(tangon, zuuluu);
                    tangon = _closure2_slot4;
                    zuuluu = tangon.setLaunchPadPullTabScale;
                    michal = 1;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                report = {};
                option = yankee[option];
                option = verify.bind(offset)(option);
                report['updateSharedValueIfChanged'] = option;
                report['gestureState'] = golfie;
                report['updaters'] = oscard;
                entity['__closure'] = report;
                report = 8147854846718.0;
                entity['__workletHash'] = report;
                tangon = _closure1_slot15;
                entity['__initData'] = tangon;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        zuuluu = report.bind(oscard)(zuuluu, tangon);
        entity['gesture'] = zuuluu;
        entity['gestureRef'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();
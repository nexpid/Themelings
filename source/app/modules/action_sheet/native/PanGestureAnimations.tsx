// app/modules/action_sheet/native/PanGestureAnimations.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    oscard = {'damping': 30, 'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot2 = oscard;
    report = {};
    entity = 500;
    report['duration'] = entity;
    entity = 0;
    michal = offset[entity];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    michal = michal.STANDARD_EASING;
    report['easing'] = michal;
    var _closure1_slot3 = report;
    michal = {};
    tangon = "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}";
    michal['code'] = tangon;
    var _closure1_slot4 = michal;
    michal = {};
    tangon = 'function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}';
    michal['code'] = tangon;
    var _closure1_slot5 = michal;
    michal = function() {
        entity = function(argFoo, argBar) { // Original name: getNearestValue
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                golfie = argFoo;
                entity = argBar;
                zuuluu = arguments[2];
                var _closure3_slot0 = entity;
                oscard = undefined;
                if(!(zuuluu === oscard)) { _fun00002_ip = 23; continue _fun00001 }
 21:
                zuuluu = 0;
 23:
                var _closure3_slot1 = oscard;
                tangon = 0;
                option = zuuluu < tangon;
                report = -1;
                if(option) { _fun00002_ip = 57; continue _fun00001 }
 42:
                option = zuuluu > tangon;
                zuuluu = 0;
                if(!option) { _fun00002_ip = 54; continue _fun00001 }
 51:
                zuuluu = 1;
 54:
                report = zuuluu;
 57:
                _closure3_slot1 = report;
                zuuluu = function() {
                    entity = function(argFoo, argBar) { // Original name: getSortedByMeasure
                        michal = argBar;
                        var _closure5_slot0 = michal;
                        michal = global;
                        zuuluu = michal.Array;
                        michal = new Array(0);
                        golfie = argFoo;
                        oscard = 0;
                        option = michal;
                        tangon = arraySpread(option, golfie, oscard);
                        option = zuuluu;
                        golfie = michal;
                        zuuluu = apply(option, golfie);
                        michal = zuuluu.sort;
                        entity = function(argFoo, argBar) {
                            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                                entity = global;
                                tangon = entity.Math;
                                zuuluu = tangon.abs;
                                report = _closure5_slot0;
                                michal = argFoo;
                                michal = michal - report;
                                zuuluu = zuuluu.bind(tangon)(michal);
                                tangon = entity.Math;
                                michal = tangon.abs;
                                entity = argBar;
                                entity = entity - report;
                                michal = michal.bind(tangon)(entity);
                                tangon = zuuluu < michal;
                                entity = -1;
                                if(tangon) { _fun00004_ip = 85; continue _fun00003 }
 70:
                                zuuluu = zuuluu > michal;
                                michal = 0;
                                if(!zuuluu) { _fun00004_ip = 82; continue _fun00003 }
 79:
                                michal = 1;
 82:
                                entity = michal;
 85:
                                return entity;
                            }
                        };
                        entity = michal.bind(zuuluu)(entity);
                        return entity;
                    };
                    michal = {};
                    entity['__closure'] = michal;
                    michal = 9192847351523.0;
                    entity['__workletHash'] = michal;
                    michal = _closure1_slot5;
                    entity['__initData'] = michal;
                    return entity;
                };
                zuuluu = zuuluu.bind(oscard)();
                option = golfie.length;
                if(!(tangon !== option)) { _fun00002_ip = 120; continue _fun00001 }
 81:
                zuuluu = zuuluu.bind(oscard)(golfie, entity);
                if(!(tangon !== report)) { _fun00002_ip = 114; continue _fun00001 }
 91:
                report = zuuluu.find;
                michal = function(argFoo) {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = argFoo;
                        tangon = _closure3_slot1;
                        entity = 0;
                        if(!(!(tangon < entity))) { _fun00006_ip = 26; continue _fun00005 }
 16:
                        entity = _closure3_slot0;
                        entity = entity < zuuluu;
                        _fun00006_ip = 34; continue _fun00005;
 26:
                        michal = _closure3_slot0;
                        entity = michal > zuuluu;
 34:
                        return entity;
                    }
                };
                michal = report.bind(zuuluu)(michal);
                report = null;
                if(!(report == michal)) { _fun00002_ip = 118; continue _fun00001 }
 114:
                michal = zuuluu[tangon];
 118:
                return michal;
 120:
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 4186929947751.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot4;
        entity['__initData'] = michal;
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot6 = michal;
    michal = {};
    tangon = 'function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}';
    michal['code'] = tangon;
    var _closure1_slot7 = michal;
    michal = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: withPanGestureSpring
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argBaz;
                michal = null;
                if(!(michal == entity)) { _fun00008_ip = 16; continue _fun00007 }
 9:
                entity = _closure1_slot2;
 16:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot1;
                michal = 1;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.withSpring;
                michal = {};
                golfie = michal;
                oscard = entity;
                entity = copyDataProperties(golfie, oscard);
                report = argBar;
                entity = 'velocity';
                michal[entity] = report;
                entity = argFoo;
                entity = zuuluu.bind(tangon)(entity, michal);
                return entity;
            }
        };
        zuuluu = {};
        tangon = _closure1_slot2;
        zuuluu['SPRING_CONFIG'] = tangon;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        tangon = 1;
        report = report[tangon];
        tangon = undefined;
        tangon = oscard.bind(tangon)(report);
        tangon = tangon.withSpring;
        zuuluu['withSpring'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 12189464558811.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot7;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = michal.bind(entity)();
    var _closure1_slot8 = tangon;
    michal = {};
    option = 'function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}';
    michal['code'] = option;
    var _closure1_slot9 = michal;
    michal = function() {
        entity = function(argFoo, argBar) { // Original name: withPanGestureTiming
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                tangon = argBar;
                entity = null;
                if(!(entity == tangon)) { _fun00010_ip = 16; continue _fun00009 }
 9:
                tangon = _closure1_slot3;
 16:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 2;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.withTiming;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity, tangon);
                return entity;
            }
        };
        zuuluu = {};
        tangon = _closure1_slot3;
        zuuluu['TIMING_CONFIG'] = tangon;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        tangon = 2;
        report = report[tangon];
        tangon = undefined;
        tangon = oscard.bind(tangon)(report);
        tangon = tangon.withTiming;
        zuuluu['withTiming'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 7636074551896.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot9;
        entity['__initData'] = michal;
        return entity;
    };
    michal = michal.bind(entity)();
    var _closure1_slot10 = michal;
    option = {};
    yankee = 'function PanGestureAnimationsTsx5(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}';
    option['code'] = yankee;
    var _closure1_slot11 = option;
    option = {};
    yankee = 'function PanGestureAnimationsTsx6(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}';
    option['code'] = yankee;
    var _closure1_slot12 = option;
    option = {};
    yankee = 'function PanGestureAnimationsTsx7(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}';
    option['code'] = yankee;
    var _closure1_slot13 = option;
    option = {};
    yankee = 'function PanGestureAnimationsTsx8(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}';
    option['code'] = yankee;
    var _closure1_slot14 = option;
    option = 5;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/action_sheet/native/PanGestureAnimations.tsx';
    option = verify.bind(offset)(option);
    golfie = function(argFoo) { // Original name: usePanGesture
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            sizing = michal.lowerBounds;
            var _closure2_slot0 = sizing;
            kiloes = michal.upperBounds;
            var _closure2_slot1 = kiloes;
            yankee = michal.snapPositions;
            var _closure2_slot2 = yankee;
            verify = michal.swipeVelocityThreshold;
            report = undefined;
            if(!(verify === report)) { _fun00012_ip = 53; continue _fun00011 }
 47:
            verify = 300;
 53:
            var _closure2_slot3 = verify;
            romeon = michal.translate;
            var _closure2_slot4 = romeon;
            result = michal.onStart;
            var _closure2_slot5 = result;
            backup = michal.onChange;
            var _closure2_slot6 = backup;
            option = michal.onEnd;
            var _closure2_slot7 = option;
            output = michal.vertical;
            if(!(output === report)) { _fun00012_ip = 109; continue _fun00011 }
 107:
            output = true;
 109:
            var _closure2_slot8 = output;
            oscard = michal.isGestureInProgress;
            var _closure2_slot9 = oscard;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot1;
            michal = 3;
            offset = golfie[michal];
            foxtra = zuuluu.bind(report)(offset);
            offset = foxtra.useSharedValue;
            echoed = 0;
            foxtra = offset.bind(foxtra)(echoed);
            _closure2_slot10 = foxtra;
            michal = golfie[michal];
            offset = zuuluu.bind(report)(michal);
            michal = offset.useSharedValue;
            offset = michal.bind(offset)(echoed);
            _closure2_slot11 = offset;
            michal = 4;
            michal = golfie[michal];
            michal = zuuluu.bind(report)(michal);
            zuuluu = michal.Gesture;
            michal = zuuluu.Pan;
            report = michal.bind(zuuluu)();
            zuuluu = report.onStart;
            michal = function(argFoo) { // Original name: N
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.set;
                    report = _closure2_slot4;
                    michal = report.get;
                    michal = michal.bind(report)();
                    michal = zuuluu.bind(tangon)(michal);
                    tangon = _closure2_slot11;
                    zuuluu = tangon.set;
                    michal = 0;
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure2_slot9;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00014_ip = 72; continue _fun00013 }
 56:
                    report = _closure2_slot9;
                    tangon = report.set;
                    michal = true;
                    michal = tangon.bind(report)(michal);
 72:
                    michal = _closure2_slot5;
                    if(!(zuuluu != michal)) { _fun00014_ip = 133; continue _fun00013 }
 80:
                    tangon = _closure2_slot5;
                    zuuluu = {};
                    report = _closure2_slot10;
                    michal = report.get;
                    michal = michal.bind(report)();
                    zuuluu['destination'] = michal;
                    michal = _closure2_slot10;
                    entity = michal.get;
                    entity = entity.bind(michal)();
                    zuuluu['startPosition'] = entity;
                    michal = undefined;
                    entity = argFoo;
                    entity = tangon.bind(michal)(entity, zuuluu);
 133:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = {};
            golfie['start'] = foxtra;
            golfie['translate'] = romeon;
            golfie['velocity'] = offset;
            golfie['isGestureInProgress'] = oscard;
            golfie['onStart'] = result;
            michal['__closure'] = golfie;
            golfie = 7008504704609.0;
            michal['__workletHash'] = golfie;
            golfie = _closure1_slot14;
            michal['__initData'] = golfie;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.onChange;
            michal = function(argFoo) { // Original name: C
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    tangon = argFoo;
                    option = tangon.velocityY;
                    report = tangon.translationY;
                    golfie = tangon.velocityX;
                    zuuluu = tangon.translationX;
                    oscard = _closure2_slot10;
                    michal = oscard.get;
                    michal = michal.bind(oscard)();
                    oscard = _closure2_slot8;
                    if(!oscard) { _fun00016_ip = 53; continue _fun00015 }
 50:
                    zuuluu = report;
 53:
                    oscard = michal + zuuluu;
                    michal = _closure2_slot0;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00016_ip = 75; continue _fun00015 }
 67:
                    michal = _closure2_slot0;
                    if(!(!(oscard < michal))) { _fun00016_ip = 103; continue _fun00015 }
 75:
                    michal = _closure2_slot1;
                    michal = zuuluu != michal;
                    if(!michal) { _fun00016_ip = 94; continue _fun00015 }
 86:
                    report = _closure2_slot1;
                    michal = oscard > report;
 94:
                    if(!michal) { _fun00016_ip = 107; continue _fun00015 }
 97:
                    oscard = _closure2_slot1;
                    _fun00016_ip = 107; continue _fun00015;
 103:
                    oscard = _closure2_slot0;
 107:
                    report = _closure2_slot11;
                    michal = report.set;
                    verify = _closure2_slot8;
                    if(!verify) { _fun00016_ip = 126; continue _fun00015 }
 123:
                    golfie = option;
 126:
                    michal = michal.bind(report)(golfie);
                    report = _closure2_slot4;
                    michal = report.set;
                    michal = michal.bind(report)(oscard);
                    michal = _closure2_slot6;
                    if(!(zuuluu != michal)) { _fun00016_ip = 203; continue _fun00015 }
 153:
                    zuuluu = _closure2_slot6;
                    michal = {};
                    oscard = _closure2_slot4;
                    report = oscard.get;
                    report = report.bind(oscard)();
                    michal['destination'] = report;
                    report = _closure2_slot10;
                    entity = report.get;
                    entity = entity.bind(report)();
                    michal['startPosition'] = entity;
                    entity = undefined;
                    entity = zuuluu.bind(entity)(tangon, michal);
 203:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = {};
            golfie['start'] = foxtra;
            golfie['vertical'] = output;
            golfie['lowerBounds'] = sizing;
            golfie['upperBounds'] = kiloes;
            golfie['velocity'] = offset;
            golfie['translate'] = romeon;
            golfie['onChange'] = backup;
            michal['__closure'] = golfie;
            golfie = 15962975179371.0;
            michal['__workletHash'] = golfie;
            golfie = _closure1_slot13;
            michal['__initData'] = golfie;
            report = zuuluu.bind(report)(michal);
            zuuluu = report.onEnd;
            michal = function(argFoo, argBar) { // Original name: T
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    tangon = _closure2_slot10;
                    zuuluu = tangon.set;
                    report = _closure2_slot4;
                    michal = report.get;
                    michal = michal.bind(report)();
                    michal = zuuluu.bind(tangon)(michal);
                    michal = _closure2_slot2;
                    zuuluu = null;
                    if(!(zuuluu != michal)) { _fun00018_ip = 265; continue _fun00017 }
 43:
                    michal = global;
                    report = michal.Math;
                    tangon = report.abs;
                    oscard = _closure2_slot11;
                    michal = oscard.get;
                    michal = michal.bind(oscard)();
                    tangon = tangon.bind(report)(michal);
                    michal = _closure2_slot3;
                    michal = tangon > michal;
                    golfie = 0;
                    oscard = 0;
                    if(!michal) { _fun00018_ip = 103; continue _fun00017 }
 90:
                    tangon = _closure2_slot11;
                    michal = tangon.get;
                    oscard = michal.bind(tangon)();
 103:
                    verify = _closure1_slot6;
                    report = _closure2_slot2;
                    tangon = report.get;
                    option = tangon.bind(report)();
                    report = _closure2_slot4;
                    tangon = report.get;
                    report = tangon.bind(report)();
                    tangon = undefined;
                    report = verify.bind(tangon)(option, report, oscard);
                    if(!(golfie === oscard)) { _fun00018_ip = 174; continue _fun00017 }
 149:
                    option = _closure2_slot4;
                    golfie = option.set;
                    oscard = _closure1_slot10;
                    oscard = oscard.bind(tangon)(report);
                    oscard = golfie.bind(option)(oscard);
                    _fun00018_ip = 211; continue _fun00017;
 174:
                    golfie = _closure2_slot4;
                    oscard = golfie.set;
                    option = _closure1_slot8;
                    verify = _closure2_slot11;
                    michal = verify.get;
                    michal = michal.bind(verify)();
                    michal = option.bind(tangon)(report, michal);
                    michal = oscard.bind(golfie)(michal);
 211:
                    michal = _closure2_slot7;
                    if(!(zuuluu != michal)) { _fun00018_ip = 265; continue _fun00017 }
 219:
                    zuuluu = _closure2_slot7;
                    michal = {};
                    oscard = argBar;
                    michal['success'] = oscard;
                    michal['destination'] = report;
                    report = _closure2_slot10;
                    entity = report.get;
                    entity = entity.bind(report)();
                    michal['startPosition'] = entity;
                    entity = argFoo;
                    entity = zuuluu.bind(tangon)(entity, michal);
 265:
                    entity = undefined;
                    return entity;
                }
            };
            golfie = {};
            golfie['start'] = foxtra;
            golfie['translate'] = romeon;
            golfie['snapPositions'] = yankee;
            golfie['velocity'] = offset;
            golfie['swipeVelocityThreshold'] = verify;
            verify = _closure1_slot6;
            golfie['getNearestValue'] = verify;
            verify = _closure1_slot8;
            golfie['withPanGestureSpring'] = verify;
            verify = _closure1_slot10;
            golfie['withPanGestureTiming'] = verify;
            golfie['onEnd'] = option;
            michal['__closure'] = golfie;
            golfie = 15665959414289.0;
            michal['__workletHash'] = golfie;
            golfie = _closure1_slot12;
            michal['__initData'] = golfie;
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.onFinalize;
            entity = function() { // Original name: S
                _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                    zuuluu = _closure2_slot9;
                    michal = null;
                    if(!(michal != zuuluu)) { _fun00020_ip = 29; continue _fun00019 }
 13:
                    zuuluu = _closure2_slot9;
                    michal = zuuluu.set;
                    entity = false;
                    entity = michal.bind(zuuluu)(entity);
 29:
                    entity = undefined;
                    return entity;
                }
            };
            report = {};
            report['isGestureInProgress'] = oscard;
            entity['__closure'] = report;
            report = 11128244755178.0;
            entity['__workletHash'] = report;
            tangon = _closure1_slot11;
            entity['__initData'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['default'] = golfie;
    zuuluu['SPRING_CONFIG'] = oscard;
    zuuluu['TIMING_CONFIG'] = report;
    zuuluu['withPanGestureSpring'] = tangon;
    zuuluu['withPanGestureTiming'] = michal;
    return entity;
})();
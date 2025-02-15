// app/modules/action_sheet/native/PanGestureAnimations.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = offset;
    entity = global;
    report = entity.Object;
    tango = report.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = tango.bind(report)(zulu, entity, mike);
    oscar = {'damping': 30, 'mass': 1, 'stiffness': 250, 'overshootClamping': true, 'restSpeedThreshold': 0.001, 'restDisplacementThreshold': 0.001};
    var _closure1_slot2 = oscar;
    report = {};
    entity = 500;
    report['duration'] = entity;
    entity = 0;
    mike = offset[entity];
    entity = undefined;
    mike = verify.bind(entity)(mike);
    mike = mike.STANDARD_EASING;
    report['easing'] = mike;
    var _closure1_slot3 = report;
    mike = {};
    tango = "function getNearestValue_PanGestureAnimationsTsx1(array,measure,velocity=0){const unitVector=velocity<0?-1:velocity>0?1:0;function getSortedByMeasure(array,measure){'worklet';const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}if(array.length===0){return measure;}const sorted=getSortedByMeasure(array,measure);if(unitVector!==0){var _sorted$find;return(_sorted$find=sorted.find(function(value){const result=unitVector<0?measure>value:measure<value;return result;}))!==null&&_sorted$find!==void 0?_sorted$find:sorted[0];}return sorted[0];}";
    mike['code'] = tango;
    var _closure1_slot4 = mike;
    mike = {};
    tango = 'function getSortedByMeasure_PanGestureAnimationsTsx2(array,measure){const sorted=new Array(...array).sort(function(left,right){const al=Math.abs(left-measure);const ar=Math.abs(right-measure);return al<ar?-1:al>ar?1:0;});return sorted;}';
    mike['code'] = tango;
    var _closure1_slot5 = mike;
    mike = function() {
        entity = function(argFoo, argBar) { // Original name: getNearestValue
            _fun104343: for(var _fun104343_ip = 0; ; ) switch(_fun104343_ip) {
 0:
                golf = argFoo;
                entity = argBar;
                zulu = arguments[2];
                var _closure3_slot0 = entity;
                oscar = undefined;
                if(!(zulu === oscar)) { _fun104343_ip = 23; continue _fun104343 }
 21:
                zulu = 0;
 23:
                var _closure3_slot1 = oscar;
                tango = 0;
                options = zulu < tango;
                report = -1;
                if(options) { _fun104343_ip = 57; continue _fun104343 }
 42:
                options = zulu > tango;
                zulu = 0;
                if(!options) { _fun104343_ip = 54; continue _fun104343 }
 51:
                zulu = 1;
 54:
                report = zulu;
 57:
                _closure3_slot1 = report;
                zulu = function() {
                    entity = function(argFoo, argBar) { // Original name: getSortedByMeasure
                        mike = argBar;
                        var _closure5_slot0 = mike;
                        mike = global;
                        zulu = mike.Array;
                        mike = new Array(0);
                        golf = argFoo;
                        oscar = 0;
                        options = mike;
                        tango = arraySpread(options, golf, oscar);
                        options = zulu;
                        golf = mike;
                        zulu = apply(options, golf);
                        mike = zulu.sort;
                        entity = function(argFoo, argBar) {
                            _fun104346: for(var _fun104346_ip = 0; ; ) switch(_fun104346_ip) {
 0:
                                entity = global;
                                tango = entity.Math;
                                zulu = tango.abs;
                                report = _closure5_slot0;
                                mike = argFoo;
                                mike = mike - report;
                                zulu = zulu.bind(tango)(mike);
                                tango = entity.Math;
                                mike = tango.abs;
                                entity = argBar;
                                entity = entity - report;
                                mike = mike.bind(tango)(entity);
                                tango = zulu < mike;
                                entity = -1;
                                if(tango) { _fun104346_ip = 85; continue _fun104346 }
 70:
                                zulu = zulu > mike;
                                mike = 0;
                                if(!zulu) { _fun104346_ip = 82; continue _fun104346 }
 79:
                                mike = 1;
 82:
                                entity = mike;
 85:
                                return entity;
                            }
                        };
                        entity = mike.bind(zulu)(entity);
                        return entity;
                    };
                    mike = {};
                    entity['__closure'] = mike;
                    mike = 9192847351523.0;
                    entity['__workletHash'] = mike;
                    mike = _closure1_slot5;
                    entity['__initData'] = mike;
                    return entity;
                };
                zulu = zulu.bind(oscar)();
                options = golf.length;
                if(!(tango !== options)) { _fun104343_ip = 120; continue _fun104343 }
 81:
                zulu = zulu.bind(oscar)(golf, entity);
                if(!(tango !== report)) { _fun104343_ip = 114; continue _fun104343 }
 91:
                report = zulu.find;
                mike = function(argFoo) {
                    _fun104347: for(var _fun104347_ip = 0; ; ) switch(_fun104347_ip) {
 0:
                        zulu = argFoo;
                        tango = _closure3_slot1;
                        entity = 0;
                        if(!(!(tango < entity))) { _fun104347_ip = 26; continue _fun104347 }
 16:
                        entity = _closure3_slot0;
                        entity = entity < zulu;
                        _fun104347_ip = 34; continue _fun104347;
 26:
                        mike = _closure3_slot0;
                        entity = mike > zulu;
 34:
                        return entity;
                    }
                };
                mike = report.bind(zulu)(mike);
                report = null;
                if(!(report == mike)) { _fun104343_ip = 118; continue _fun104343 }
 114:
                mike = zulu[tango];
 118:
                return mike;
 120:
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 4186929947751.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot4;
        entity['__initData'] = mike;
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot6 = mike;
    mike = {};
    tango = 'function withPanGestureSpring_PanGestureAnimationsTsx3(destination,velocity,config){const{SPRING_CONFIG,withSpring}=this.__closure;const springConfig=config!==null&&config!==void 0?config:SPRING_CONFIG;return withSpring(destination,{...springConfig,velocity:velocity});}';
    mike['code'] = tango;
    var _closure1_slot7 = mike;
    mike = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: withPanGestureSpring
            _fun104349: for(var _fun104349_ip = 0; ; ) switch(_fun104349_ip) {
 0:
                entity = argBaz;
                mike = null;
                if(!(mike == entity)) { _fun104349_ip = 16; continue _fun104349 }
 9:
                entity = _closure1_slot2;
 16:
                tango = _closure1_slot0;
                zulu = _closure1_slot1;
                mike = 1;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.withSpring;
                mike = {};
                golf = mike;
                oscar = entity;
                entity = copyDataProperties(golf, oscar);
                report = argBar;
                entity = 'velocity';
                mike[entity] = report;
                entity = argFoo;
                entity = zulu.bind(tango)(entity, mike);
                return entity;
            }
        };
        zulu = {};
        tango = _closure1_slot2;
        zulu['SPRING_CONFIG'] = tango;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        tango = 1;
        report = report[tango];
        tango = undefined;
        tango = oscar.bind(tango)(report);
        tango = tango.withSpring;
        zulu['withSpring'] = tango;
        entity['__closure'] = zulu;
        zulu = 12189464558811.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot7;
        entity['__initData'] = mike;
        return entity;
    };
    tango = mike.bind(entity)();
    var _closure1_slot8 = tango;
    mike = {};
    options = 'function withPanGestureTiming_PanGestureAnimationsTsx4(destination,config){const{TIMING_CONFIG,withTiming}=this.__closure;const timingConfig=config!==null&&config!==void 0?config:TIMING_CONFIG;return withTiming(destination,timingConfig);}';
    mike['code'] = options;
    var _closure1_slot9 = mike;
    mike = function() {
        entity = function(argFoo, argBar) { // Original name: withPanGestureTiming
            _fun104351: for(var _fun104351_ip = 0; ; ) switch(_fun104351_ip) {
 0:
                tango = argBar;
                entity = null;
                if(!(entity == tango)) { _fun104351_ip = 16; continue _fun104351 }
 9:
                tango = _closure1_slot3;
 16:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.withTiming;
                entity = argFoo;
                entity = mike.bind(zulu)(entity, tango);
                return entity;
            }
        };
        zulu = {};
        tango = _closure1_slot3;
        zulu['TIMING_CONFIG'] = tango;
        oscar = _closure1_slot0;
        report = _closure1_slot1;
        tango = 2;
        report = report[tango];
        tango = undefined;
        tango = oscar.bind(tango)(report);
        tango = tango.withTiming;
        zulu['withTiming'] = tango;
        entity['__closure'] = zulu;
        zulu = 7636074551896.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot9;
        entity['__initData'] = mike;
        return entity;
    };
    mike = mike.bind(entity)();
    var _closure1_slot10 = mike;
    options = {};
    yankee = 'function PanGestureAnimationsTsx5(event){const{start,translate,velocity,isGestureInProgress,onStart}=this.__closure;var _onStart;start.set(translate.get());velocity.set(0);if(isGestureInProgress!=null){isGestureInProgress.set(true);}(_onStart=onStart)===null||_onStart===void 0||_onStart(event,{destination:start.get(),startPosition:start.get()});}';
    options['code'] = yankee;
    var _closure1_slot11 = options;
    options = {};
    yankee = 'function PanGestureAnimationsTsx6(event){const{start,vertical,lowerBounds,upperBounds,velocity,translate,onChange}=this.__closure;var _onChange;const{velocityY:velocityY,translationY:translationY,velocityX:velocityX,translationX:translationX}=event;let next=start.get()+(vertical?translationY:translationX);if(lowerBounds!=null&&next<lowerBounds){next=lowerBounds;}else if(upperBounds!=null&&next>upperBounds){next=upperBounds;}velocity.set(vertical?velocityY:velocityX);translate.set(next);(_onChange=onChange)===null||_onChange===void 0||_onChange(event,{destination:translate.get(),startPosition:start.get()});}';
    options['code'] = yankee;
    var _closure1_slot12 = options;
    options = {};
    yankee = 'function PanGestureAnimationsTsx7(event,success){const{start,translate,snapPositions,velocity,swipeVelocityThreshold,getNearestValue,withPanGestureSpring,withPanGestureTiming,onEnd}=this.__closure;start.set(translate.get());if(snapPositions!=null){var _onEnd;const swipeVelocity=Math.abs(velocity.get())>swipeVelocityThreshold?velocity.get():0;const snapPoint=getNearestValue(snapPositions.get(),translate.get(),swipeVelocity);if(swipeVelocity!==0){translate.set(withPanGestureSpring(snapPoint,velocity.get()));}else{translate.set(withPanGestureTiming(snapPoint));}(_onEnd=onEnd)===null||_onEnd===void 0||_onEnd(event,{success:success,destination:snapPoint,startPosition:start.get()});}}';
    options['code'] = yankee;
    var _closure1_slot13 = options;
    options = {};
    yankee = 'function PanGestureAnimationsTsx8(){const{isGestureInProgress}=this.__closure;if(isGestureInProgress!=null){isGestureInProgress.set(false);}}';
    options['code'] = yankee;
    var _closure1_slot14 = options;
    options = 5;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/action_sheet/native/PanGestureAnimations.tsx';
    options = verify.bind(offset)(options);
    golf = function(argFoo) { // Original name: usePanGesture
        _fun104352: for(var _fun104352_ip = 0; ; ) switch(_fun104352_ip) {
 0:
            mike = argFoo;
            sizing = mike.lowerBounds;
            var _closure2_slot0 = sizing;
            kilo = mike.upperBounds;
            var _closure2_slot1 = kilo;
            yankee = mike.snapPositions;
            var _closure2_slot2 = yankee;
            verify = mike.swipeVelocityThreshold;
            report = undefined;
            if(!(verify === report)) { _fun104352_ip = 53; continue _fun104352 }
 47:
            verify = 300;
 53:
            var _closure2_slot3 = verify;
            romeo = mike.translate;
            var _closure2_slot4 = romeo;
            result = mike.onStart;
            var _closure2_slot5 = result;
            backup = mike.onChange;
            var _closure2_slot6 = backup;
            options = mike.onEnd;
            var _closure2_slot7 = options;
            output = mike.vertical;
            if(!(output === report)) { _fun104352_ip = 109; continue _fun104352 }
 107:
            output = true;
 109:
            var _closure2_slot8 = output;
            oscar = mike.isGestureInProgress;
            var _closure2_slot9 = oscar;
            var _closure2_slot10 = report;
            var _closure2_slot11 = report;
            zulu = _closure1_slot0;
            golf = _closure1_slot1;
            mike = 3;
            offset = golf[mike];
            foxtrot = zulu.bind(report)(offset);
            offset = foxtrot.useSharedValue;
            echo = 0;
            foxtrot = offset.bind(foxtrot)(echo);
            _closure2_slot10 = foxtrot;
            mike = golf[mike];
            offset = zulu.bind(report)(mike);
            mike = offset.useSharedValue;
            offset = mike.bind(offset)(echo);
            _closure2_slot11 = offset;
            mike = 4;
            mike = golf[mike];
            mike = zulu.bind(report)(mike);
            zulu = mike.Gesture;
            mike = zulu.Pan;
            report = mike.bind(zulu)();
            zulu = report.onStart;
            mike = function(argFoo) { // Original name: N
                _fun104353: for(var _fun104353_ip = 0; ; ) switch(_fun104353_ip) {
 0:
                    tango = _closure2_slot10;
                    zulu = tango.set;
                    report = _closure2_slot4;
                    mike = report.get;
                    mike = mike.bind(report)();
                    mike = zulu.bind(tango)(mike);
                    tango = _closure2_slot11;
                    zulu = tango.set;
                    mike = 0;
                    mike = zulu.bind(tango)(mike);
                    mike = _closure2_slot9;
                    zulu = null;
                    if(!(zulu != mike)) { _fun104353_ip = 72; continue _fun104353 }
 56:
                    report = _closure2_slot9;
                    tango = report.set;
                    mike = true;
                    mike = tango.bind(report)(mike);
 72:
                    mike = _closure2_slot5;
                    if(!(zulu != mike)) { _fun104353_ip = 133; continue _fun104353 }
 80:
                    tango = _closure2_slot5;
                    zulu = {};
                    report = _closure2_slot10;
                    mike = report.get;
                    mike = mike.bind(report)();
                    zulu['destination'] = mike;
                    mike = _closure2_slot10;
                    entity = mike.get;
                    entity = entity.bind(mike)();
                    zulu['startPosition'] = entity;
                    mike = undefined;
                    entity = argFoo;
                    entity = tango.bind(mike)(entity, zulu);
 133:
                    entity = undefined;
                    return entity;
                }
            };
            golf = {};
            golf['start'] = foxtrot;
            golf['translate'] = romeo;
            golf['velocity'] = offset;
            golf['isGestureInProgress'] = oscar;
            golf['onStart'] = result;
            mike['__closure'] = golf;
            golf = 9211133358380.0;
            mike['__workletHash'] = golf;
            golf = _closure1_slot11;
            mike['__initData'] = golf;
            report = zulu.bind(report)(mike);
            zulu = report.onChange;
            mike = function(argFoo) { // Original name: C
                _fun104354: for(var _fun104354_ip = 0; ; ) switch(_fun104354_ip) {
 0:
                    tango = argFoo;
                    options = tango.velocityY;
                    report = tango.translationY;
                    golf = tango.velocityX;
                    zulu = tango.translationX;
                    oscar = _closure2_slot10;
                    mike = oscar.get;
                    mike = mike.bind(oscar)();
                    oscar = _closure2_slot8;
                    if(!oscar) { _fun104354_ip = 53; continue _fun104354 }
 50:
                    zulu = report;
 53:
                    oscar = mike + zulu;
                    mike = _closure2_slot0;
                    zulu = null;
                    if(!(zulu != mike)) { _fun104354_ip = 75; continue _fun104354 }
 67:
                    mike = _closure2_slot0;
                    if(!(!(oscar < mike))) { _fun104354_ip = 103; continue _fun104354 }
 75:
                    mike = _closure2_slot1;
                    mike = zulu != mike;
                    if(!mike) { _fun104354_ip = 94; continue _fun104354 }
 86:
                    report = _closure2_slot1;
                    mike = oscar > report;
 94:
                    if(!mike) { _fun104354_ip = 107; continue _fun104354 }
 97:
                    oscar = _closure2_slot1;
                    _fun104354_ip = 107; continue _fun104354;
 103:
                    oscar = _closure2_slot0;
 107:
                    report = _closure2_slot11;
                    mike = report.set;
                    verify = _closure2_slot8;
                    if(!verify) { _fun104354_ip = 126; continue _fun104354 }
 123:
                    golf = options;
 126:
                    mike = mike.bind(report)(golf);
                    report = _closure2_slot4;
                    mike = report.set;
                    mike = mike.bind(report)(oscar);
                    mike = _closure2_slot6;
                    if(!(zulu != mike)) { _fun104354_ip = 203; continue _fun104354 }
 153:
                    zulu = _closure2_slot6;
                    mike = {};
                    oscar = _closure2_slot4;
                    report = oscar.get;
                    report = report.bind(oscar)();
                    mike['destination'] = report;
                    report = _closure2_slot10;
                    entity = report.get;
                    entity = entity.bind(report)();
                    mike['startPosition'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
 203:
                    entity = undefined;
                    return entity;
                }
            };
            golf = {};
            golf['start'] = foxtrot;
            golf['vertical'] = output;
            golf['lowerBounds'] = sizing;
            golf['upperBounds'] = kilo;
            golf['velocity'] = offset;
            golf['translate'] = romeo;
            golf['onChange'] = backup;
            mike['__closure'] = golf;
            golf = 12296750118954.0;
            mike['__workletHash'] = golf;
            golf = _closure1_slot12;
            mike['__initData'] = golf;
            report = zulu.bind(report)(mike);
            zulu = report.onEnd;
            mike = function(argFoo, argBar) { // Original name: T
                _fun104355: for(var _fun104355_ip = 0; ; ) switch(_fun104355_ip) {
 0:
                    tango = _closure2_slot10;
                    zulu = tango.set;
                    report = _closure2_slot4;
                    mike = report.get;
                    mike = mike.bind(report)();
                    mike = zulu.bind(tango)(mike);
                    mike = _closure2_slot2;
                    zulu = null;
                    if(!(zulu != mike)) { _fun104355_ip = 265; continue _fun104355 }
 43:
                    mike = global;
                    report = mike.Math;
                    tango = report.abs;
                    oscar = _closure2_slot11;
                    mike = oscar.get;
                    mike = mike.bind(oscar)();
                    tango = tango.bind(report)(mike);
                    mike = _closure2_slot3;
                    mike = tango > mike;
                    golf = 0;
                    oscar = 0;
                    if(!mike) { _fun104355_ip = 103; continue _fun104355 }
 90:
                    tango = _closure2_slot11;
                    mike = tango.get;
                    oscar = mike.bind(tango)();
 103:
                    verify = _closure1_slot6;
                    report = _closure2_slot2;
                    tango = report.get;
                    options = tango.bind(report)();
                    report = _closure2_slot4;
                    tango = report.get;
                    report = tango.bind(report)();
                    tango = undefined;
                    report = verify.bind(tango)(options, report, oscar);
                    if(!(golf === oscar)) { _fun104355_ip = 174; continue _fun104355 }
 149:
                    options = _closure2_slot4;
                    golf = options.set;
                    oscar = _closure1_slot10;
                    oscar = oscar.bind(tango)(report);
                    oscar = golf.bind(options)(oscar);
                    _fun104355_ip = 211; continue _fun104355;
 174:
                    golf = _closure2_slot4;
                    oscar = golf.set;
                    options = _closure1_slot8;
                    verify = _closure2_slot11;
                    mike = verify.get;
                    mike = mike.bind(verify)();
                    mike = options.bind(tango)(report, mike);
                    mike = oscar.bind(golf)(mike);
 211:
                    mike = _closure2_slot7;
                    if(!(zulu != mike)) { _fun104355_ip = 265; continue _fun104355 }
 219:
                    zulu = _closure2_slot7;
                    mike = {};
                    oscar = argBar;
                    mike['success'] = oscar;
                    mike['destination'] = report;
                    report = _closure2_slot10;
                    entity = report.get;
                    entity = entity.bind(report)();
                    mike['startPosition'] = entity;
                    entity = argFoo;
                    entity = zulu.bind(tango)(entity, mike);
 265:
                    entity = undefined;
                    return entity;
                }
            };
            golf = {};
            golf['start'] = foxtrot;
            golf['translate'] = romeo;
            golf['snapPositions'] = yankee;
            golf['velocity'] = offset;
            golf['swipeVelocityThreshold'] = verify;
            verify = _closure1_slot6;
            golf['getNearestValue'] = verify;
            verify = _closure1_slot8;
            golf['withPanGestureSpring'] = verify;
            verify = _closure1_slot10;
            golf['withPanGestureTiming'] = verify;
            golf['onEnd'] = options;
            mike['__closure'] = golf;
            golf = 1698574934608.0;
            mike['__workletHash'] = golf;
            golf = _closure1_slot13;
            mike['__initData'] = golf;
            zulu = zulu.bind(report)(mike);
            mike = zulu.onFinalize;
            entity = function() { // Original name: S
                _fun104356: for(var _fun104356_ip = 0; ; ) switch(_fun104356_ip) {
 0:
                    zulu = _closure2_slot9;
                    mike = null;
                    if(!(mike != zulu)) { _fun104356_ip = 29; continue _fun104356 }
 13:
                    zulu = _closure2_slot9;
                    mike = zulu.set;
                    entity = false;
                    entity = mike.bind(zulu)(entity);
 29:
                    entity = undefined;
                    return entity;
                }
            };
            report = {};
            report['isGestureInProgress'] = oscar;
            entity['__closure'] = report;
            report = 8873719945511.0;
            entity['__workletHash'] = report;
            tango = _closure1_slot14;
            entity['__initData'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['default'] = golf;
    zulu['SPRING_CONFIG'] = oscar;
    zulu['TIMING_CONFIG'] = report;
    zulu['withPanGestureSpring'] = tango;
    zulu['withPanGestureTiming'] = mike;
    return entity;
})();
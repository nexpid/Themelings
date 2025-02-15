// app/modules/remixing/native/components/SizeSliderGestureHandler.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot16;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot16;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot16 = entity;
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
    golf = tango.maxStrokeWidth;
    var _closure1_slot4 = golf;
    tango = tango.minStrokeWidth;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    golf = {};
    tango = 'function SizeSliderGestureHandlerTsx1(current,lowerBound,upperBound){if(current>upperBound){return upperBound;}else if(current<lowerBound){return lowerBound;}else{return current;}}';
    golf['code'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: s
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            zulu = argBar;
            entity = argBaz;
            if(!(!(mike > entity))) { _fun00008_ip = 23; continue _fun00007 }
 13:
            if(!(mike < zulu)) { _fun00008_ip = 20; continue _fun00007 }
 17:
            mike = zulu;
 20:
            entity = mike;
 23:
            return entity;
        }
    };
    options = {};
    tango['__closure'] = options;
    options = 11500419360295.0;
    tango['__workletHash'] = options;
    tango['__initData'] = golf;
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function SizeSliderGestureHandlerTsx2(newPos){const{sliderCirclePosition,MIN_POSITION_DELTA,sliderMinPositionY,sliderMaxPositionY,clamp,minStrokeWidth,maxStrokeWidth,size}=this.__closure;if(Math.abs(sliderCirclePosition.get()-newPos)<MIN_POSITION_DELTA){return;}sliderCirclePosition.set(newPos);const sliderPercentage=(newPos-sliderMinPositionY)/(sliderMaxPositionY-sliderMinPositionY);const newValue=clamp(minStrokeWidth+(1-sliderPercentage)*(maxStrokeWidth-minStrokeWidth),minStrokeWidth,maxStrokeWidth);size.set(newValue);}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = {};
    golf = 'function SizeSliderGestureHandlerTsx3(){const{isPanGestureActive}=this.__closure;isPanGestureActive.set(true);}';
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function SizeSliderGestureHandlerTsx4(touchEvent){const{touchInputId,runOnJS,handleGrabbed}=this.__closure;if(touchInputId.get()===-1){const touchData=touchEvent.allTouches[0];touchInputId.set(touchData.id);runOnJS(handleGrabbed)(true);}}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function SizeSliderGestureHandlerTsx5(touchEvent){const{touchInputId,adjustSliderPosition,clamp,sliderMinPositionY,sliderMaxPositionY}=this.__closure;for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){adjustSliderPosition(clamp(touch.y,sliderMinPositionY,sliderMaxPositionY));}}}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = 'function SizeSliderGestureHandlerTsx6(touchEvent){const{touchInputId,adjustSliderPosition,clamp,sliderMinPositionY,sliderMaxPositionY,runOnJS,handleGrabbed}=this.__closure;for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){touchInputId.set(-1);adjustSliderPosition(clamp(touch.y,sliderMinPositionY,sliderMaxPositionY));runOnJS(handleGrabbed)(false);}}}';
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = {};
    golf = 'function SizeSliderGestureHandlerTsx7(){const{isPanGestureActive}=this.__closure;isPanGestureActive.set(false);}';
    tango['code'] = golf;
    var _closure1_slot13 = tango;
    tango = {};
    golf = "function SizeSliderGestureHandlerTsx8(){const{top,gestureHandlerWidth,gestureHandlerHeight}=this.__closure;return{position:'absolute',left:0,top:top,width:gestureHandlerWidth,height:gestureHandlerHeight};}";
    tango['code'] = golf;
    var _closure1_slot14 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/components/SizeSliderGestureHandler.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: _default
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            verify = entity.sliderCirclePosition;
            var _closure2_slot0 = verify;
            kilo = entity.handleGrabbed;
            var _closure2_slot1 = kilo;
            offset = entity.size;
            var _closure2_slot2 = offset;
            foxtrot = entity.top;
            var _closure2_slot3 = foxtrot;
            romeo = entity.height;
            entity = entity.controlCircleRadius;
            tango = undefined;
            var _closure2_slot9 = tango;
            var _closure2_slot4 = romeo;
            mike = 2;
            output = mike * entity;
            var _closure2_slot5 = output;
            sizing = romeo - entity;
            var _closure2_slot6 = sizing;
            mike = _closure1_slot0;
            entity = _closure1_slot2;
            options = 3;
            report = entity[options];
            yankee = mike.bind(tango)(report);
            golf = yankee.useSharedValue;
            report = -1;
            update = golf.bind(yankee)(report);
            var _closure2_slot7 = update;
            entity = entity[options];
            report = mike.bind(tango)(entity);
            mike = report.useSharedValue;
            entity = false;
            backup = mike.bind(report)(entity);
            var _closure2_slot8 = backup;
            mike = sizing - output;
            entity = offset.get;
            entity = entity.bind(offset)();
            golf = _closure1_slot5;
            report = entity - golf;
            entity = _closure1_slot4;
            entity = entity - golf;
            report = report / entity;
            entity = 1;
            entity = entity - report;
            entity = mike * entity;
            mike = output + entity;
            entity = backup.get;
            entity = entity.bind(backup)();
            entity = !entity;
            if(!entity) { _fun00010_ip = 260; continue _fun00009 }
 214:
            report = global;
            yankee = report.Math;
            golf = yankee.abs;
            report = verify.get;
            report = report.bind(verify)();
            report = report - mike;
            golf = golf.bind(yankee)(report);
            report = 0.2;
            entity = golf > report;
 260:
            if(!entity) { _fun00010_ip = 273; continue _fun00009 }
 263:
            entity = verify.set;
            entity = entity.bind(verify)(mike);
 273:
            golf = _closure1_slot3;
            report = golf.useCallback;
            mike = function(argFoo) { // Original name: G
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    mike = argFoo;
                    entity = global;
                    report = entity.Math;
                    tango = report.abs;
                    oscar = _closure2_slot0;
                    zulu = oscar.get;
                    zulu = zulu.bind(oscar)();
                    zulu = zulu - mike;
                    tango = tango.bind(report)(zulu);
                    zulu = 0.2;
                    if(!(!(tango < zulu))) { _fun00012_ip = 147; continue _fun00011 }
 56:
                    tango = _closure2_slot0;
                    zulu = tango.set;
                    zulu = zulu.bind(tango)(mike);
                    oscar = _closure1_slot7;
                    report = _closure1_slot5;
                    tango = _closure2_slot5;
                    options = mike - tango;
                    mike = _closure2_slot6;
                    mike = mike - tango;
                    tango = _closure1_slot4;
                    zulu = tango - report;
                    golf = 1;
                    mike = options / mike;
                    mike = golf - mike;
                    mike = mike * zulu;
                    zulu = report + mike;
                    mike = undefined;
                    zulu = oscar.bind(mike)(zulu, report, tango);
                    mike = _closure2_slot2;
                    entity = mike.set;
                    entity = entity.bind(mike)(zulu);
 147:
                    entity = undefined;
                    return entity;
                }
            };
            entity = {};
            entity['sliderCirclePosition'] = verify;
            yankee = 0.2;
            entity['MIN_POSITION_DELTA'] = yankee;
            entity['sliderMinPositionY'] = output;
            entity['sliderMaxPositionY'] = sizing;
            result = _closure1_slot7;
            entity['clamp'] = result;
            yankee = _closure1_slot5;
            entity['minStrokeWidth'] = yankee;
            yankee = _closure1_slot4;
            entity['maxStrokeWidth'] = yankee;
            entity['size'] = offset;
            mike['__closure'] = entity;
            entity = 605266269799.0;
            mike['__workletHash'] = entity;
            entity = _closure1_slot8;
            mike['__initData'] = entity;
            entity = new Array(4);
            entity[0] = offset;
            entity[1] = verify;
            entity[2] = output;
            entity[3] = sizing;
            echo = report.bind(golf)(mike, entity);
            _closure2_slot9 = echo;
            mike = _closure1_slot0;
            report = _closure1_slot2;
            entity = 4;
            golf = report[entity];
            golf = mike.bind(tango)(golf);
            verify = golf.Gesture;
            golf = verify.Pan;
            offset = golf.bind(verify)();
            verify = offset.onStart;
            golf = function() { // Original name: Y
                zulu = _closure2_slot8;
                mike = zulu.set;
                entity = true;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            yankee = {};
            yankee['isPanGestureActive'] = backup;
            golf['__closure'] = yankee;
            yankee = 16564442447085.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot9;
            golf['__initData'] = yankee;
            offset = verify.bind(offset)(golf);
            verify = offset.onTouchesDown;
            golf = function(argFoo) { // Original name: A
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = _closure2_slot7;
                    mike = zulu.get;
                    zulu = mike.bind(zulu)();
                    mike = -1;
                    if(!(mike === zulu)) { _fun00014_ip = 106; continue _fun00013 }
 26:
                    mike = argFoo;
                    zulu = mike.allTouches;
                    mike = 0;
                    mike = zulu[mike];
                    tango = _closure2_slot7;
                    zulu = tango.set;
                    mike = mike.id;
                    mike = zulu.bind(tango)(mike);
                    tango = _closure1_slot0;
                    zulu = _closure1_slot2;
                    mike = 3;
                    mike = zulu[mike];
                    zulu = undefined;
                    tango = tango.bind(zulu)(mike);
                    mike = tango.runOnJS;
                    entity = _closure2_slot1;
                    mike = mike.bind(tango)(entity);
                    entity = true;
                    entity = mike.bind(zulu)(entity);
 106:
                    entity = undefined;
                    return entity;
                }
            };
            yankee = {};
            yankee['touchInputId'] = update;
            source = report[options];
            source = mike.bind(tango)(source);
            source = source.runOnJS;
            yankee['runOnJS'] = source;
            yankee['handleGrabbed'] = kilo;
            golf['__closure'] = yankee;
            yankee = 9104871692725.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot10;
            golf['__initData'] = yankee;
            offset = verify.bind(offset)(golf);
            verify = offset.onTouchesMove;
            golf = function(argFoo) { // Original name: O
                _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                    zulu = _closure1_slot15;
                    entity = argFoo;
                    mike = entity.allTouches;
                    entity = undefined;
                    report = zulu.bind(entity)(mike);
                    zulu = report.bind(entity)();
                    mike = zulu.done;
                    if(mike) { _fun00016_ip = 113; continue _fun00015 }
 38:
                    mike = zulu.value;
                    options = _closure2_slot7;
                    golf = options.get;
                    options = golf.bind(options)();
                    golf = mike.id;
                    if(!(options === golf)) { _fun00016_ip = 98; continue _fun00015 }
 65:
                    golf = _closure2_slot9;
                    offset = _closure1_slot7;
                    verify = mike.y;
                    options = _closure2_slot5;
                    mike = _closure2_slot6;
                    mike = offset.bind(entity)(verify, options, mike);
                    mike = golf.bind(entity)(mike);
 98:
                    golf = report.bind(entity)();
                    mike = golf.done;
                    zulu = golf;
                    if(!mike) { _fun00016_ip = 38; continue _fun00015 }
 113:
                    return entity;
                }
            };
            yankee = {};
            yankee['touchInputId'] = update;
            yankee['adjustSliderPosition'] = echo;
            yankee['clamp'] = result;
            yankee['sliderMinPositionY'] = output;
            yankee['sliderMaxPositionY'] = sizing;
            golf['__closure'] = yankee;
            yankee = 11277026904481.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot11;
            golf['__initData'] = yankee;
            offset = verify.bind(offset)(golf);
            verify = offset.onTouchesUp;
            golf = function(argFoo) { // Original name: w
                _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                    zulu = _closure1_slot15;
                    entity = argFoo;
                    mike = entity.allTouches;
                    entity = undefined;
                    options = zulu.bind(entity)(mike);
                    zulu = options.bind(entity)();
                    mike = zulu.done;
                    oscar = -1;
                    report = 3;
                    tango = false;
                    if(mike) { _fun00018_ip = 177; continue _fun00017 }
 52:
                    mike = zulu.value;
                    yankee = _closure2_slot7;
                    offset = yankee.get;
                    yankee = offset.bind(yankee)();
                    offset = mike.id;
                    if(!(yankee === offset)) { _fun00018_ip = 162; continue _fun00017 }
 79:
                    yankee = _closure2_slot7;
                    offset = yankee.set;
                    offset = offset.bind(yankee)(oscar);
                    offset = _closure2_slot9;
                    foxtrot = _closure1_slot7;
                    romeo = mike.y;
                    yankee = _closure2_slot5;
                    mike = _closure2_slot6;
                    mike = foxtrot.bind(entity)(romeo, yankee, mike);
                    mike = offset.bind(entity)(mike);
                    offset = _closure1_slot0;
                    mike = _closure1_slot2;
                    mike = mike[report];
                    yankee = offset.bind(entity)(mike);
                    offset = yankee.runOnJS;
                    mike = _closure2_slot1;
                    mike = offset.bind(yankee)(mike);
                    mike = mike.bind(entity)(tango);
 162:
                    offset = options.bind(entity)();
                    mike = offset.done;
                    zulu = offset;
                    if(!mike) { _fun00018_ip = 52; continue _fun00017 }
 177:
                    return entity;
                }
            };
            yankee = {};
            yankee['touchInputId'] = update;
            yankee['adjustSliderPosition'] = echo;
            yankee['clamp'] = result;
            yankee['sliderMinPositionY'] = output;
            yankee['sliderMaxPositionY'] = sizing;
            sizing = report[options];
            sizing = mike.bind(tango)(sizing);
            sizing = sizing.runOnJS;
            yankee['runOnJS'] = sizing;
            yankee['handleGrabbed'] = kilo;
            golf['__closure'] = yankee;
            yankee = 6655802360400.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot12;
            golf['__initData'] = yankee;
            offset = verify.bind(offset)(golf);
            verify = offset.onFinalize;
            golf = function() { // Original name: k
                zulu = _closure2_slot8;
                mike = zulu.set;
                entity = false;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
            };
            yankee = {};
            yankee['isPanGestureActive'] = backup;
            golf['__closure'] = yankee;
            yankee = 17178402176290.0;
            golf['__workletHash'] = yankee;
            yankee = _closure1_slot13;
            golf['__initData'] = yankee;
            verify = verify.bind(offset)(golf);
            golf = report[options];
            offset = mike.bind(tango)(golf);
            golf = offset.useAnimatedStyle;
            zulu = function() { // Original name: D
                entity = {'position': 'absolute', 'left': 0, 'top': null, 'width': 30};
                zulu = _closure2_slot3;
                entity['top'] = zulu;
                mike = _closure2_slot4;
                entity['height'] = mike;
                return entity;
            };
            yankee = {};
            yankee['top'] = foxtrot;
            foxtrot = 30;
            yankee['gestureHandlerWidth'] = foxtrot;
            yankee['gestureHandlerHeight'] = romeo;
            zulu['__closure'] = yankee;
            yankee = 13597685263452.0;
            zulu['__workletHash'] = yankee;
            yankee = _closure1_slot14;
            zulu['__initData'] = yankee;
            golf = golf.bind(offset)(zulu);
            zulu = _closure1_slot6;
            entity = report[entity];
            entity = mike.bind(tango)(entity);
            mike = entity.GestureDetector;
            entity = {};
            entity['gesture'] = verify;
            oscar = _closure1_slot1;
            report = report[options];
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
    zulu['default'] = mike;
    return entity;
})();
// app/modules/remixing/native/components/DrawingGestureHandler.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argCorge;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golf;
    var _closure1_slot3 = oscar;
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
            verify = _closure1_slot14;
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
            golf = _closure1_slot14;
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
    var _closure1_slot13 = entity;
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
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.isInDrawMode;
    var _closure1_slot4 = golf;
    tango = tango.useRemixingEditorStore;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.jsx;
    var _closure1_slot6 = tango;
    tango = {};
    golf = 'function DrawingGestureHandlerTsx1(p1,p2){return{x:p1.x+(p2.x-p1.x)/2,y:p1.y+(p2.y-p1.y)/2};}';
    tango['code'] = golf;
    var _closure1_slot7 = tango;
    tango = {};
    golf = 'function DrawingGestureHandlerTsx2(newPoint){const{previousTouch,getMidPoint,drawingPath}=this.__closure;const prevTouch=previousTouch.get();const midPoint=getMidPoint(prevTouch,newPoint);previousTouch.set(newPoint);drawingPath.set(drawingPath.get()+(" Q "+prevTouch.x+" "+prevTouch.y+" "+midPoint.x+" "+midPoint.y));}';
    tango['code'] = golf;
    var _closure1_slot8 = tango;
    tango = {};
    golf = 'function DrawingGestureHandlerTsx3(touchEvent){const{touchInputId,previousTouch,drawingPath,runOnJS,setIsActivelyDrawing}=this.__closure;if(touchInputId.get()===-1){const touchData=touchEvent.allTouches[0];touchInputId.set(touchData.id);previousTouch.set({x:touchData.x,y:touchData.y});drawingPath.set("M "+touchData.x+" "+touchData.y);runOnJS(setIsActivelyDrawing)(true);}}';
    tango['code'] = golf;
    var _closure1_slot9 = tango;
    tango = {};
    golf = 'function DrawingGestureHandlerTsx4(touchEvent){const{touchInputId,updateDrawingPath}=this.__closure;for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){updateDrawingPath({x:touch.x,y:touch.y});}}}';
    tango['code'] = golf;
    var _closure1_slot10 = tango;
    tango = {};
    golf = 'function DrawingGestureHandlerTsx5(touchEvent){const{touchInputId,drawingPath,previousTouch,runOnJS,RemixingActionCreators,color,strokeWidth,resetDrawing}=this.__closure;if(touchInputId.get()!=null){for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){drawingPath.set(drawingPath.get()+(" L "+touch.x+" "+touch.y));previousTouch.set({x:0,y:0});touchInputId.set(-1);runOnJS(RemixingActionCreators.addDrawing)(color,drawingPath.get(),strokeWidth.get());runOnJS(resetDrawing)();return;}}}}';
    tango['code'] = golf;
    var _closure1_slot11 = tango;
    tango = {};
    golf = "function DrawingGestureHandlerTsx6(){const{inDrawMode,canvasSize}=this.__closure;return{position:'absolute',left:0,top:0,width:inDrawMode?canvasSize.width:0,height:inDrawMode?canvasSize.height:0};}";
    tango['code'] = golf;
    var _closure1_slot12 = tango;
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/remixing/native/components/DrawingGestureHandler.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) {
        entity = argFoo;
        sizing = entity.color;
        var _closure2_slot0 = sizing;
        kilo = entity.strokeWidth;
        var _closure2_slot1 = kilo;
        result = entity.drawingPath;
        var _closure2_slot2 = result;
        romeo = entity.canvasSize;
        var _closure2_slot3 = romeo;
        source = entity.setIsActivelyDrawing;
        var _closure2_slot4 = source;
        backup = function() { // Original name: resetDrawing
            tango = _closure2_slot4;
            entity = undefined;
            zulu = false;
            zulu = tango.bind(entity)(zulu);
            tango = _closure2_slot2;
            zulu = tango.set;
            mike = '';
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        var _closure2_slot10 = backup;
        mike = _closure1_slot5;
        tango = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.currentMode;
            return entity;
        };
        golf = mike.bind(tango)(entity);
        mike = _closure1_slot0;
        options = _closure1_slot3;
        report = 3;
        entity = options[report];
        offset = mike.bind(tango)(entity);
        verify = offset.useSharedValue;
        entity = -1;
        echo = verify.bind(offset)(entity);
        var _closure2_slot5 = echo;
        entity = options[report];
        offset = mike.bind(tango)(entity);
        verify = offset.useSharedValue;
        entity = {'x': 0, 'y': 0};
        output = verify.bind(offset)(entity);
        var _closure2_slot6 = output;
        entity = _closure1_slot4;
        foxtrot = entity.bind(tango)(golf);
        var _closure2_slot7 = foxtrot;
        golf = function(argFoo, argBar) { // Original name: y
            mike = argFoo;
            report = argBar;
            entity = {};
            oscar = mike.x;
            tango = report.x;
            zulu = mike.x;
            zulu = tango - zulu;
            tango = 2;
            zulu = zulu / tango;
            zulu = oscar + zulu;
            entity['x'] = zulu;
            zulu = mike.y;
            report = report.y;
            mike = mike.y;
            mike = report - mike;
            mike = mike / tango;
            mike = zulu + mike;
            entity['y'] = mike;
            return entity;
        };
        entity = {};
        golf['__closure'] = entity;
        entity = 5693786585095.0;
        golf['__workletHash'] = entity;
        entity = _closure1_slot7;
        golf['__initData'] = entity;
        var _closure2_slot8 = golf;
        update = function(argFoo) { // Original name: v
            golf = argFoo;
            report = _closure2_slot6;
            entity = report.get;
            oscar = entity.bind(report)();
            mike = _closure2_slot8;
            entity = undefined;
            mike = mike.bind(entity)(oscar, golf);
            tango = report.set;
            tango = tango.bind(report)(golf);
            tango = _closure2_slot2;
            zulu = tango.set;
            report = tango.get;
            report = report.bind(tango)();
            result = oscar.x;
            sizing = oscar.y;
            backup = mike.x;
            romeo = mike.y;
            mike = global;
            mike = mike.HermesInternal;
            golf = mike.concat;
            echo = ' Q ';
            mike = ' ';
            output = mike;
            kilo = mike;
            foxtrot = mike;
            mike = echo[golf](result, output, sizing, kilo, backup, foxtrot, romeo, yankee);
            mike = report + mike;
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        entity = {};
        entity['previousTouch'] = output;
        entity['getMidPoint'] = golf;
        entity['drawingPath'] = result;
        update['__closure'] = entity;
        entity = 207712562804.0;
        update['__workletHash'] = entity;
        entity = _closure1_slot8;
        update['__initData'] = entity;
        var _closure2_slot9 = update;
        entity = 4;
        golf = options[entity];
        golf = mike.bind(tango)(golf);
        verify = golf.Gesture;
        golf = verify.Pan;
        verify = golf.bind(verify)();
        golf = verify.enabled;
        offset = golf.bind(verify)(foxtrot);
        verify = offset.onTouchesDown;
        golf = function(argFoo) { // Original name: H
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = _closure2_slot5;
                mike = zulu.get;
                zulu = mike.bind(zulu)();
                mike = -1;
                if(!(mike === zulu)) { _fun00008_ip = 197; continue _fun00007 }
 29:
                mike = argFoo;
                zulu = mike.allTouches;
                mike = 0;
                mike = zulu[mike];
                report = _closure2_slot5;
                tango = report.set;
                zulu = mike.id;
                zulu = tango.bind(report)(zulu);
                report = _closure2_slot6;
                tango = report.set;
                zulu = {};
                oscar = mike.x;
                zulu['x'] = oscar;
                oscar = mike.y;
                zulu['y'] = oscar;
                zulu = tango.bind(report)(zulu);
                tango = _closure2_slot2;
                zulu = tango.set;
                options = mike.x;
                golf = mike.y;
                mike = global;
                mike = mike.HermesInternal;
                oscar = mike.concat;
                report = 'M ';
                mike = ' ';
                mike = oscar.bind(report)(options, mike, golf);
                mike = zulu.bind(tango)(mike);
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                mike = 3;
                mike = zulu[mike];
                zulu = undefined;
                tango = tango.bind(zulu)(mike);
                mike = tango.runOnJS;
                entity = _closure2_slot4;
                mike = mike.bind(tango)(entity);
                entity = true;
                entity = mike.bind(zulu)(entity);
 197:
                entity = undefined;
                return entity;
            }
        };
        yankee = {};
        yankee['touchInputId'] = echo;
        yankee['previousTouch'] = output;
        yankee['drawingPath'] = result;
        control = options[report];
        control = mike.bind(tango)(control);
        control = control.runOnJS;
        yankee['runOnJS'] = control;
        yankee['setIsActivelyDrawing'] = source;
        golf['__closure'] = yankee;
        yankee = 15473425672607.0;
        golf['__workletHash'] = yankee;
        yankee = _closure1_slot9;
        golf['__initData'] = yankee;
        offset = verify.bind(offset)(golf);
        verify = offset.onTouchesMove;
        golf = function(argFoo) { // Original name: A
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = _closure1_slot13;
                entity = argFoo;
                mike = entity.allTouches;
                entity = undefined;
                report = zulu.bind(entity)(mike);
                zulu = report.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00010_ip = 109; continue _fun00009 }
 38:
                golf = zulu.value;
                oscar = _closure2_slot5;
                mike = oscar.get;
                oscar = mike.bind(oscar)();
                mike = golf.id;
                if(!(oscar === mike)) { _fun00010_ip = 94; continue _fun00009 }
 65:
                oscar = _closure2_slot9;
                mike = {};
                options = golf.x;
                mike['x'] = options;
                golf = golf.y;
                mike['y'] = golf;
                mike = oscar.bind(entity)(mike);
 94:
                oscar = report.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun00010_ip = 38; continue _fun00009 }
 109:
                return entity;
            }
        };
        yankee = {};
        yankee['touchInputId'] = echo;
        yankee['updateDrawingPath'] = update;
        golf['__closure'] = yankee;
        yankee = 1958663319637.0;
        golf['__workletHash'] = yankee;
        yankee = _closure1_slot10;
        golf['__initData'] = yankee;
        offset = verify.bind(offset)(golf);
        verify = offset.onTouchesUp;
        golf = function(argFoo) { // Original name: S
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = _closure2_slot5;
                mike = zulu.get;
                zulu = mike.bind(zulu)();
                mike = null;
                if(!(mike != zulu)) { _fun00012_ip = 340; continue _fun00011 }
 25:
                tango = _closure1_slot13;
                mike = argFoo;
                zulu = mike.allTouches;
                mike = undefined;
                golf = tango.bind(mike)(zulu);
                tango = golf.bind(mike)();
                zulu = tango.done;
                report = tango;
                if(zulu) { _fun00012_ip = 340; continue _fun00011 }
 66:
                zulu = report.value;
                options = _closure2_slot5;
                tango = options.get;
                options = tango.bind(options)();
                tango = zulu.id;
                if(!(options !== tango)) { _fun00012_ip = 113; continue _fun00011 }
 93:
                options = golf.bind(mike)();
                tango = options.done;
                report = options;
                if(tango) { _fun00012_ip = 340; continue _fun00011 }
 111:
                _fun00012_ip = 66; continue _fun00011;
 113:
                golf = _closure2_slot2;
                tango = golf.set;
                report = golf.get;
                report = report.bind(golf)();
                yankee = zulu.x;
                offset = zulu.y;
                zulu = global;
                zulu = zulu.HermesInternal;
                verify = zulu.concat;
                options = ' L ';
                zulu = ' ';
                zulu = verify.bind(options)(yankee, zulu, offset);
                zulu = report + zulu;
                zulu = tango.bind(golf)(zulu);
                report = _closure2_slot6;
                tango = report.set;
                zulu = {'x': 0, 'y': 0};
                zulu = tango.bind(report)(zulu);
                report = _closure2_slot5;
                tango = report.set;
                zulu = -1;
                zulu = tango.bind(report)(zulu);
                tango = _closure1_slot0;
                report = _closure1_slot3;
                zulu = 3;
                options = report[zulu];
                verify = tango.bind(mike)(options);
                options = verify.runOnJS;
                offset = _closure1_slot2;
                oscar = 5;
                oscar = report[oscar];
                oscar = offset.bind(mike)(oscar);
                oscar = oscar.addDrawing;
                verify = options.bind(verify)(oscar);
                options = _closure2_slot0;
                oscar = golf.get;
                golf = oscar.bind(golf)();
                offset = _closure2_slot1;
                oscar = offset.get;
                oscar = oscar.bind(offset)();
                oscar = verify.bind(mike)(options, golf, oscar);
                zulu = report[zulu];
                tango = tango.bind(mike)(zulu);
                zulu = tango.runOnJS;
                entity = _closure2_slot10;
                entity = zulu.bind(tango)(entity);
                entity = entity.bind(mike)();
                entity = undefined;
                return entity;
 340:
                entity = undefined;
                return entity;
            }
        };
        yankee = {};
        yankee['touchInputId'] = echo;
        yankee['drawingPath'] = result;
        yankee['previousTouch'] = output;
        output = options[report];
        output = mike.bind(tango)(output);
        output = output.runOnJS;
        yankee['runOnJS'] = output;
        result = _closure1_slot2;
        output = 5;
        output = options[output];
        output = result.bind(tango)(output);
        yankee['RemixingActionCreators'] = output;
        yankee['color'] = sizing;
        yankee['strokeWidth'] = kilo;
        yankee['resetDrawing'] = backup;
        golf['__closure'] = yankee;
        yankee = 11902539716329.0;
        golf['__workletHash'] = yankee;
        yankee = _closure1_slot11;
        golf['__initData'] = yankee;
        verify = verify.bind(offset)(golf);
        golf = options[report];
        offset = mike.bind(tango)(golf);
        golf = offset.useAnimatedStyle;
        zulu = function() { // Original name: O
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = {'position': 'absolute', 'left': 0, 'top': 0};
                report = _closure2_slot7;
                tango = 0;
                if(!report) { _fun00014_ip = 31; continue _fun00013 }
 22:
                report = _closure2_slot3;
                tango = report.width;
 31:
                entity['width'] = tango;
                tango = _closure2_slot7;
                mike = 0;
                if(!tango) { _fun00014_ip = 53; continue _fun00013 }
 44:
                zulu = _closure2_slot3;
                mike = zulu.height;
 53:
                entity['height'] = mike;
                return entity;
            }
        };
        yankee = {};
        yankee['inDrawMode'] = foxtrot;
        yankee['canvasSize'] = romeo;
        zulu['__closure'] = yankee;
        yankee = 354522880830.0;
        zulu['__workletHash'] = yankee;
        yankee = _closure1_slot12;
        zulu['__initData'] = yankee;
        golf = golf.bind(offset)(zulu);
        zulu = _closure1_slot6;
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
    };
    zulu['DrawingGestureHandler'] = mike;
    return entity;
})();
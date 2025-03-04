// app/modules/remixing/native/components/DrawingGestureHandler.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    var _closure1_slot3 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot14;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot14;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    golfie = tangon.isInDrawMode;
    var _closure1_slot4 = golfie;
    tangon = tangon.useRemixingEditorStore;
    var _closure1_slot5 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = {};
    golfie = 'function DrawingGestureHandlerTsx1(p1,p2){return{x:p1.x+(p2.x-p1.x)/2,y:p1.y+(p2.y-p1.y)/2};}';
    tangon['code'] = golfie;
    var _closure1_slot7 = tangon;
    tangon = {};
    golfie = 'function DrawingGestureHandlerTsx2(newPoint){const{previousTouch,getMidPoint,drawingPath}=this.__closure;const prevTouch=previousTouch.get();const midPoint=getMidPoint(prevTouch,newPoint);previousTouch.set(newPoint);drawingPath.set(drawingPath.get()+(" Q "+prevTouch.x+" "+prevTouch.y+" "+midPoint.x+" "+midPoint.y));}';
    tangon['code'] = golfie;
    var _closure1_slot8 = tangon;
    tangon = {};
    golfie = 'function DrawingGestureHandlerTsx3(touchEvent){const{touchInputId,previousTouch,drawingPath,runOnJS,setIsActivelyDrawing}=this.__closure;if(touchInputId.get()===-1){const touchData=touchEvent.allTouches[0];touchInputId.set(touchData.id);previousTouch.set({x:touchData.x,y:touchData.y});drawingPath.set("M "+touchData.x+" "+touchData.y);runOnJS(setIsActivelyDrawing)(true);}}';
    tangon['code'] = golfie;
    var _closure1_slot9 = tangon;
    tangon = {};
    golfie = 'function DrawingGestureHandlerTsx4(touchEvent){const{touchInputId,updateDrawingPath}=this.__closure;for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){updateDrawingPath({x:touch.x,y:touch.y});}}}';
    tangon['code'] = golfie;
    var _closure1_slot10 = tangon;
    tangon = {};
    golfie = 'function DrawingGestureHandlerTsx5(touchEvent){const{touchInputId,drawingPath,previousTouch,runOnJS,RemixingActionCreators,color,strokeWidth,resetDrawing}=this.__closure;if(touchInputId.get()!=null){for(const touch of touchEvent.allTouches){if(touchInputId.get()===touch.id){drawingPath.set(drawingPath.get()+(" L "+touch.x+" "+touch.y));previousTouch.set({x:0,y:0});touchInputId.set(-1);runOnJS(RemixingActionCreators.addDrawing)(color,drawingPath.get(),strokeWidth.get());runOnJS(resetDrawing)();return;}}}}';
    tangon['code'] = golfie;
    var _closure1_slot11 = tangon;
    tangon = {};
    golfie = "function DrawingGestureHandlerTsx6(){const{inDrawMode,canvasSize}=this.__closure;return{position:'absolute',left:0,top:0,width:inDrawMode?canvasSize.width:0,height:inDrawMode?canvasSize.height:0};}";
    tangon['code'] = golfie;
    var _closure1_slot12 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/remixing/native/components/DrawingGestureHandler.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) {
        entity = argFoo;
        sizing = entity.color;
        var _closure2_slot0 = sizing;
        kiloes = entity.strokeWidth;
        var _closure2_slot1 = kiloes;
        result = entity.drawingPath;
        var _closure2_slot2 = result;
        romeon = entity.canvasSize;
        var _closure2_slot3 = romeon;
        source = entity.setIsActivelyDrawing;
        var _closure2_slot4 = source;
        backup = function() { // Original name: resetDrawing
            tangon = _closure2_slot4;
            entity = undefined;
            zuuluu = false;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = _closure2_slot2;
            zuuluu = tangon.set;
            michal = '';
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        var _closure2_slot10 = backup;
        michal = _closure1_slot5;
        tangon = undefined;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.currentMode;
            return entity;
        };
        golfie = michal.bind(tangon)(entity);
        michal = _closure1_slot0;
        option = _closure1_slot3;
        report = 3;
        entity = option[report];
        offset = michal.bind(tangon)(entity);
        verify = offset.useSharedValue;
        entity = -1;
        echoed = verify.bind(offset)(entity);
        var _closure2_slot5 = echoed;
        entity = option[report];
        offset = michal.bind(tangon)(entity);
        verify = offset.useSharedValue;
        entity = {'x': 0, 'y': 0};
        output = verify.bind(offset)(entity);
        var _closure2_slot6 = output;
        entity = _closure1_slot4;
        foxtra = entity.bind(tangon)(golfie);
        var _closure2_slot7 = foxtra;
        golfie = function(argFoo, argBar) { // Original name: y
            michal = argFoo;
            report = argBar;
            entity = {};
            oscard = michal.x;
            tangon = report.x;
            zuuluu = michal.x;
            zuuluu = tangon - zuuluu;
            tangon = 2;
            zuuluu = zuuluu / tangon;
            zuuluu = oscard + zuuluu;
            entity['x'] = zuuluu;
            zuuluu = michal.y;
            report = report.y;
            michal = michal.y;
            michal = report - michal;
            michal = michal / tangon;
            michal = zuuluu + michal;
            entity['y'] = michal;
            return entity;
        };
        entity = {};
        golfie['__closure'] = entity;
        entity = 5693786585095.0;
        golfie['__workletHash'] = entity;
        entity = _closure1_slot7;
        golfie['__initData'] = entity;
        var _closure2_slot8 = golfie;
        update = function(argFoo) { // Original name: v
            golfie = argFoo;
            report = _closure2_slot6;
            entity = report.get;
            oscard = entity.bind(report)();
            michal = _closure2_slot8;
            entity = undefined;
            michal = michal.bind(entity)(oscard, golfie);
            tangon = report.set;
            tangon = tangon.bind(report)(golfie);
            tangon = _closure2_slot2;
            zuuluu = tangon.set;
            report = tangon.get;
            report = report.bind(tangon)();
            result = oscard.x;
            sizing = oscard.y;
            backup = michal.x;
            romeon = michal.y;
            michal = global;
            michal = michal.HermesInternal;
            golfie = michal.concat;
            echoed = ' Q ';
            michal = ' ';
            output = michal;
            kiloes = michal;
            foxtra = michal;
            michal = echoed[golfie](result, output, sizing, kiloes, backup, foxtra, romeon, yankee);
            michal = report + michal;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        entity = {};
        entity['previousTouch'] = output;
        entity['getMidPoint'] = golfie;
        entity['drawingPath'] = result;
        update['__closure'] = entity;
        entity = 207712562804.0;
        update['__workletHash'] = entity;
        entity = _closure1_slot8;
        update['__initData'] = entity;
        var _closure2_slot9 = update;
        entity = 4;
        golfie = option[entity];
        golfie = michal.bind(tangon)(golfie);
        verify = golfie.Gesture;
        golfie = verify.Pan;
        verify = golfie.bind(verify)();
        golfie = verify.enabled;
        offset = golfie.bind(verify)(foxtra);
        verify = offset.onTouchesDown;
        golfie = function(argFoo) { // Original name: H
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = _closure2_slot5;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                michal = -1;
                if(!(michal === zuuluu)) { _fun00008_ip = 197; continue _fun00007 }
 29:
                michal = argFoo;
                zuuluu = michal.allTouches;
                michal = 0;
                michal = zuuluu[michal];
                report = _closure2_slot5;
                tangon = report.set;
                zuuluu = michal.id;
                zuuluu = tangon.bind(report)(zuuluu);
                report = _closure2_slot6;
                tangon = report.set;
                zuuluu = {};
                oscard = michal.x;
                zuuluu['x'] = oscard;
                oscard = michal.y;
                zuuluu['y'] = oscard;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure2_slot2;
                zuuluu = tangon.set;
                option = michal.x;
                golfie = michal.y;
                michal = global;
                michal = michal.HermesInternal;
                oscard = michal.concat;
                report = 'M ';
                michal = ' ';
                michal = oscard.bind(report)(option, michal, golfie);
                michal = zuuluu.bind(tangon)(michal);
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 3;
                michal = zuuluu[michal];
                zuuluu = undefined;
                tangon = tangon.bind(zuuluu)(michal);
                michal = tangon.runOnJS;
                entity = _closure2_slot4;
                michal = michal.bind(tangon)(entity);
                entity = true;
                entity = michal.bind(zuuluu)(entity);
 197:
                entity = undefined;
                return entity;
            }
        };
        yankee = {};
        yankee['touchInputId'] = echoed;
        yankee['previousTouch'] = output;
        yankee['drawingPath'] = result;
        ctrled = option[report];
        ctrled = michal.bind(tangon)(ctrled);
        ctrled = ctrled.runOnJS;
        yankee['runOnJS'] = ctrled;
        yankee['setIsActivelyDrawing'] = source;
        golfie['__closure'] = yankee;
        yankee = 15473425672607.0;
        golfie['__workletHash'] = yankee;
        yankee = _closure1_slot9;
        golfie['__initData'] = yankee;
        offset = verify.bind(offset)(golfie);
        verify = offset.onTouchesMove;
        golfie = function(argFoo) { // Original name: A
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = _closure1_slot13;
                entity = argFoo;
                michal = entity.allTouches;
                entity = undefined;
                report = zuuluu.bind(entity)(michal);
                zuuluu = report.bind(entity)();
                michal = zuuluu.done;
                if(michal) { _fun00010_ip = 109; continue _fun00009 }
 38:
                golfie = zuuluu.value;
                oscard = _closure2_slot5;
                michal = oscard.get;
                oscard = michal.bind(oscard)();
                michal = golfie.id;
                if(!(oscard === michal)) { _fun00010_ip = 94; continue _fun00009 }
 65:
                oscard = _closure2_slot9;
                michal = {};
                option = golfie.x;
                michal['x'] = option;
                golfie = golfie.y;
                michal['y'] = golfie;
                michal = oscard.bind(entity)(michal);
 94:
                oscard = report.bind(entity)();
                michal = oscard.done;
                zuuluu = oscard;
                if(!michal) { _fun00010_ip = 38; continue _fun00009 }
 109:
                return entity;
            }
        };
        yankee = {};
        yankee['touchInputId'] = echoed;
        yankee['updateDrawingPath'] = update;
        golfie['__closure'] = yankee;
        yankee = 1958663319637.0;
        golfie['__workletHash'] = yankee;
        yankee = _closure1_slot10;
        golfie['__initData'] = yankee;
        offset = verify.bind(offset)(golfie);
        verify = offset.onTouchesUp;
        golfie = function(argFoo) { // Original name: S
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = _closure2_slot5;
                michal = zuuluu.get;
                zuuluu = michal.bind(zuuluu)();
                michal = null;
                if(!(michal != zuuluu)) { _fun00012_ip = 340; continue _fun00011 }
 25:
                tangon = _closure1_slot13;
                michal = argFoo;
                zuuluu = michal.allTouches;
                michal = undefined;
                golfie = tangon.bind(michal)(zuuluu);
                tangon = golfie.bind(michal)();
                zuuluu = tangon.done;
                report = tangon;
                if(zuuluu) { _fun00012_ip = 340; continue _fun00011 }
 66:
                zuuluu = report.value;
                option = _closure2_slot5;
                tangon = option.get;
                option = tangon.bind(option)();
                tangon = zuuluu.id;
                if(!(option !== tangon)) { _fun00012_ip = 113; continue _fun00011 }
 93:
                option = golfie.bind(michal)();
                tangon = option.done;
                report = option;
                if(tangon) { _fun00012_ip = 340; continue _fun00011 }
 111:
                _fun00012_ip = 66; continue _fun00011;
 113:
                golfie = _closure2_slot2;
                tangon = golfie.set;
                report = golfie.get;
                report = report.bind(golfie)();
                yankee = zuuluu.x;
                offset = zuuluu.y;
                zuuluu = global;
                zuuluu = zuuluu.HermesInternal;
                verify = zuuluu.concat;
                option = ' L ';
                zuuluu = ' ';
                zuuluu = verify.bind(option)(yankee, zuuluu, offset);
                zuuluu = report + zuuluu;
                zuuluu = tangon.bind(golfie)(zuuluu);
                report = _closure2_slot6;
                tangon = report.set;
                zuuluu = {'x': 0, 'y': 0};
                zuuluu = tangon.bind(report)(zuuluu);
                report = _closure2_slot5;
                tangon = report.set;
                zuuluu = -1;
                zuuluu = tangon.bind(report)(zuuluu);
                tangon = _closure1_slot0;
                report = _closure1_slot3;
                zuuluu = 3;
                option = report[zuuluu];
                verify = tangon.bind(michal)(option);
                option = verify.runOnJS;
                offset = _closure1_slot2;
                oscard = 5;
                oscard = report[oscard];
                oscard = offset.bind(michal)(oscard);
                oscard = oscard.addDrawing;
                verify = option.bind(verify)(oscard);
                option = _closure2_slot0;
                oscard = golfie.get;
                golfie = oscard.bind(golfie)();
                offset = _closure2_slot1;
                oscard = offset.get;
                oscard = oscard.bind(offset)();
                oscard = verify.bind(michal)(option, golfie, oscard);
                zuuluu = report[zuuluu];
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.runOnJS;
                entity = _closure2_slot10;
                entity = zuuluu.bind(tangon)(entity);
                entity = entity.bind(michal)();
                entity = undefined;
                return entity;
 340:
                entity = undefined;
                return entity;
            }
        };
        yankee = {};
        yankee['touchInputId'] = echoed;
        yankee['drawingPath'] = result;
        yankee['previousTouch'] = output;
        output = option[report];
        output = michal.bind(tangon)(output);
        output = output.runOnJS;
        yankee['runOnJS'] = output;
        result = _closure1_slot2;
        output = 5;
        output = option[output];
        output = result.bind(tangon)(output);
        yankee['RemixingActionCreators'] = output;
        yankee['color'] = sizing;
        yankee['strokeWidth'] = kiloes;
        yankee['resetDrawing'] = backup;
        golfie['__closure'] = yankee;
        yankee = 11902539716329.0;
        golfie['__workletHash'] = yankee;
        yankee = _closure1_slot11;
        golfie['__initData'] = yankee;
        verify = verify.bind(offset)(golfie);
        golfie = option[report];
        offset = michal.bind(tangon)(golfie);
        golfie = offset.useAnimatedStyle;
        zuuluu = function() { // Original name: O
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = {'position': 'absolute', 'left': 0, 'top': 0};
                report = _closure2_slot7;
                tangon = 0;
                if(!report) { _fun00014_ip = 35; continue _fun00013 }
 26:
                report = _closure2_slot3;
                tangon = report.width;
 35:
                entity['width'] = tangon;
                tangon = _closure2_slot7;
                michal = 0;
                if(!tangon) { _fun00014_ip = 57; continue _fun00013 }
 48:
                zuuluu = _closure2_slot3;
                michal = zuuluu.height;
 57:
                entity['height'] = michal;
                return entity;
            }
        };
        yankee = {};
        yankee['inDrawMode'] = foxtra;
        yankee['canvasSize'] = romeon;
        zuuluu['__closure'] = yankee;
        yankee = 354522880830.0;
        zuuluu['__workletHash'] = yankee;
        yankee = _closure1_slot12;
        zuuluu['__initData'] = yankee;
        golfie = golfie.bind(offset)(zuuluu);
        zuuluu = _closure1_slot6;
        entity = option[entity];
        entity = michal.bind(tangon)(entity);
        michal = entity.GestureDetector;
        entity = {};
        entity['gesture'] = verify;
        oscard = _closure1_slot1;
        report = option[report];
        report = oscard.bind(tangon)(report);
        oscard = report.View;
        report = {};
        report['style'] = golfie;
        report = zuuluu.bind(tangon)(oscard, report);
        entity['children'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['DrawingGestureHandler'] = michal;
    return entity;
})();
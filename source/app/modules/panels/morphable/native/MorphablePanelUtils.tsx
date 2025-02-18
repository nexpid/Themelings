// app/modules/panels/morphable/native/MorphablePanelUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    verify = argBar;
    zuuluu = argFre;
    offset = argPlu;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = offset[entity];
    entity = undefined;
    tangon = verify.bind(entity)(tangon);
    report = tangon.MIN_PIP_TOSS_VELOCITY;
    var _closure1_slot0 = report;
    tangon = tangon.PIP_WINDOW_OFFSET;
    var _closure1_slot1 = tangon;
    tangon = {};
    report = 'function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}';
    tangon['code'] = report;
    var _closure1_slot2 = tangon;
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
        michal = 1391695493868.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot2;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot3 = tangon;
    tangon = {};
    report = 'function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};}';
    tangon['code'] = report;
    var _closure1_slot4 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar) { // Original name: calculateXYDiff
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argBar;
                entity = argFoo;
                entity = entity.changedTouches;
                report = 0;
                entity = entity[report];
                oscard = entity.absoluteY;
                golfie = entity.absoluteX;
                entity = michal.get;
                entity = entity.bind(michal)();
                entity = entity.absoluteYStart;
                tangon = entity - oscard;
                entity = michal.get;
                entity = entity.bind(michal)();
                entity = entity.absoluteXStart;
                option = entity - golfie;
                zuuluu = global;
                offset = zuuluu.Math;
                verify = offset.max;
                michal = zuuluu.Math;
                entity = michal.abs;
                michal = entity.bind(michal)(tangon);
                yankee = zuuluu.Math;
                entity = yankee.abs;
                entity = entity.bind(yankee)(option);
                michal = verify.bind(offset)(michal, entity);
                entity = {};
                entity['absoluteX'] = golfie;
                entity['absoluteY'] = oscard;
                entity['xDiff'] = option;
                entity['yDiff'] = tangon;
                golfie = zuuluu.Math;
                oscard = golfie.abs;
                oscard = oscard.bind(golfie)(option);
                golfie = zuuluu.Math;
                zuuluu = golfie.abs;
                zuuluu = zuuluu.bind(golfie)(tangon);
                zuuluu = oscard >= zuuluu;
                if(zuuluu) { _fun00002_ip = 190; continue _fun00001 }
 186:
                zuuluu = tangon > report;
 190:
                entity['isNotPullDownGesture'] = zuuluu;
                entity['absoluteMovement'] = michal;
                return entity;
            }
        };
        michal = {};
        entity['__closure'] = michal;
        michal = 9827767064556.0;
        entity['__workletHash'] = michal;
        michal = _closure1_slot4;
        entity['__initData'] = michal;
        return entity;
    };
    golfie = tangon.bind(entity)();
    tangon = {};
    report = 'function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}';
    tangon['code'] = report;
    var _closure1_slot5 = tangon;
    tangon = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getPIPWindowDimensions
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = argFoo;
                michal = argBar;
                report = argBaz;
                if(report) { _fun00004_ip = 21; continue _fun00003 }
 15:
                option = _closure1_slot1;
                _fun00004_ip = 49; continue _fun00003;
 21:
                entity = global;
                verify = entity.Math;
                golfie = verify.max;
                tangon = michal.left;
                entity = _closure1_slot1;
                option = golfie.bind(verify)(tangon, entity);
 49:
                entity = zuuluu.width;
                golfie = entity - option;
                tangon = global;
                yankee = tangon.Math;
                verify = yankee.max;
                entity = michal.right;
                offset = _closure1_slot1;
                entity = verify.bind(yankee)(entity, offset);
                entity = golfie - entity;
                verify = zuuluu.width;
                golfie = michal.left;
                verify = verify - golfie;
                golfie = michal.right;
                verify = verify - golfie;
                golfie = 2;
                golfie = golfie * offset;
                golfie = verify - golfie;
                if(!report) { _fun00004_ip = 130; continue _fun00003 }
 127:
                golfie = entity;
 130:
                verify = tangon.Math;
                report = verify.max;
                entity = michal.top;
                oscard = _closure1_slot1;
                report = report.bind(verify)(entity, oscard);
                entity = {};
                entity['xOffset'] = option;
                entity['yOffset'] = report;
                entity['xRange'] = golfie;
                zuuluu = zuuluu.height;
                zuuluu = zuuluu - report;
                report = tangon.Math;
                tangon = report.max;
                michal = michal.bottom;
                michal = tangon.bind(report)(michal, oscard);
                michal = zuuluu - michal;
                entity['yRange'] = michal;
                return entity;
            }
        };
        zuuluu = {};
        tangon = _closure1_slot1;
        zuuluu['PIP_WINDOW_OFFSET'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 4008246762710.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot5;
        entity['__initData'] = michal;
        return entity;
    };
    oscard = tangon.bind(entity)();
    var _closure1_slot6 = oscard;
    tangon = {};
    report = "function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}";
    tangon['code'] = report;
    var _closure1_slot7 = tangon;
    tangon = function() {
        entity = function(argFoo) { // Original name: calculatePIPPositionFromVelocity
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.velocityX;
                golfie = entity.velocityY;
                offset = entity.absoluteX;
                report = entity.absoluteY;
                verify = entity.windowDimensions;
                option = entity.safeArea;
                tangon = entity.disableHorizontalSafeAreas;
                entity = _closure1_slot6;
                oscard = undefined;
                entity = entity.bind(oscard)(verify, option, tangon);
                verify = entity.xRange;
                tangon = entity.yRange;
                option = entity.xOffset;
                option = offset - option;
                entity = entity.yOffset;
                entity = report - entity;
                offset = global;
                foxtra = offset.Math;
                romeon = foxtra.max;
                yankee = offset.Math;
                report = yankee.abs;
                yankee = report.bind(yankee)(golfie);
                backup = offset.Math;
                report = backup.abs;
                report = report.bind(backup)(zuuluu);
                yankee = romeon.bind(foxtra)(yankee, report);
                report = _closure1_slot0;
                if(!(!(yankee < report))) { _fun00006_ip = 249; continue _fun00005 }
 154:
                foxtra = golfie / zuuluu;
                report = 0;
                zuuluu = zuuluu > report;
                yankee = 0;
                if(!zuuluu) { _fun00006_ip = 172; continue _fun00005 }
 169:
                yankee = verify;
 172:
                zuuluu = yankee - option;
                zuuluu = foxtra * zuuluu;
                zuuluu = entity + zuuluu;
                if(!(zuuluu >= report)) { _fun00006_ip = 192; continue _fun00005 }
 188:
                if(!(!(zuuluu <= tangon))) { _fun00006_ip = 236; continue _fun00005 }
 192:
                romeon = 1;
                romeon = romeon / foxtra;
                golfie = golfie > report;
                report = 0;
                if(!golfie) { _fun00006_ip = 211; continue _fun00005 }
 208:
                report = tangon;
 211:
                golfie = report - entity;
                golfie = romeon * golfie;
                golfie = option + golfie;
                golfie = golfie / verify;
                report = report / tangon;
                _fun00006_ip = 478; continue _fun00005;
 236:
                golfie = yankee / verify;
                report = zuuluu / tangon;
                _fun00006_ip = 478; continue _fun00005;
 249:
                foxtra = {};
                romeon = _closure1_slot3;
                zuuluu = 0;
                yankee = romeon.bind(oscard)(option, zuuluu, verify);
                foxtra['left'] = yankee;
                yankee = verify - option;
                yankee = romeon.bind(oscard)(yankee, zuuluu, verify);
                foxtra['right'] = yankee;
                yankee = romeon.bind(oscard)(entity, zuuluu, tangon);
                foxtra['top'] = yankee;
                yankee = tangon - entity;
                yankee = romeon.bind(oscard)(yankee, zuuluu, tangon);
                foxtra['bottom'] = yankee;
                romeon = offset.Math;
                yankee = romeon.min;
                backup = offset.Object;
                offset = backup.values;
                output = offset.bind(backup)(foxtra);
                offset = new Array(0);
                result = offset;
                sizing = 0;
                backup = arraySpread(result, output, sizing);
                result = yankee;
                output = offset;
                sizing = romeon;
                kiloes = apply(result, output, sizing);
                romeon = foxtra.left;
                offset = 'left';
                yankee = offset;
                if(!(romeon !== kiloes)) { _fun00006_ip = 414; continue _fun00005 }
 378:
                backup = foxtra.top;
                romeon = 'top';
                if(!(backup !== kiloes)) { _fun00006_ip = 411; continue _fun00005 }
 391:
                backup = foxtra.right;
                foxtra = 'bottom';
                if(!(backup === kiloes)) { _fun00006_ip = 408; continue _fun00005 }
 404:
                foxtra = 'right';
 408:
                romeon = foxtra;
 411:
                yankee = romeon;
 414:
                if(!(offset !== yankee)) { _fun00006_ip = 472; continue _fun00005 }
 418:
                offset = 'right';
                if(!(offset !== yankee)) { _fun00006_ip = 463; continue _fun00005 }
 426:
                offset = 'top';
                if(!(offset !== yankee)) { _fun00006_ip = 455; continue _fun00005 }
 434:
                offset = 'bottom';
                golfie = 0;
                report = 0;
                if(!(offset === yankee)) { _fun00006_ip = 478; continue _fun00005 }
 446:
                golfie = option / verify;
                report = 1;
                _fun00006_ip = 478; continue _fun00005;
 455:
                golfie = option / verify;
                report = 0;
                _fun00006_ip = 478; continue _fun00005;
 463:
                report = entity / tangon;
                golfie = 1;
                _fun00006_ip = 478; continue _fun00005;
 472:
                report = entity / tangon;
                golfie = 0;
 478:
                entity = {};
                tangon = _closure1_slot3;
                zuuluu = 0;
                michal = 1;
                golfie = tangon.bind(oscard)(golfie, zuuluu, michal);
                entity['pipX'] = golfie;
                michal = tangon.bind(oscard)(report, zuuluu, michal);
                entity['pipY'] = michal;
                return entity;
            }
        };
        zuuluu = {};
        tangon = _closure1_slot6;
        zuuluu['getPIPWindowDimensions'] = tangon;
        tangon = _closure1_slot0;
        zuuluu['MIN_PIP_TOSS_VELOCITY'] = tangon;
        tangon = _closure1_slot3;
        zuuluu['clamp'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 3215524498124.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot7;
        entity['__initData'] = michal;
        return entity;
    };
    report = tangon.bind(entity)();
    tangon = {};
    option = 'function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}';
    tangon['code'] = option;
    var _closure1_slot8 = tangon;
    tangon = function() {
        entity = function(argFoo) { // Original name: pipXYtoAbsoluteXY
            entity = argFoo;
            golfie = entity.pipX;
            tangon = entity.pipY;
            oscard = entity.windowDimensions;
            report = entity.safeArea;
            zuuluu = entity.disableHorizontalSafeAreas;
            michal = _closure1_slot6;
            entity = undefined;
            michal = michal.bind(entity)(oscard, report, zuuluu);
            oscard = michal.xOffset;
            zuuluu = michal.yOffset;
            entity = {};
            report = michal.xRange;
            report = golfie * report;
            report = oscard + report;
            entity['x'] = report;
            michal = michal.yRange;
            michal = tangon * michal;
            michal = zuuluu + michal;
            entity['y'] = michal;
            return entity;
        };
        zuuluu = {};
        tangon = _closure1_slot6;
        zuuluu['getPIPWindowDimensions'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 1981621867924.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot8;
        entity['__initData'] = michal;
        return entity;
    };
    tangon = tangon.bind(entity)();
    var _closure1_slot9 = tangon;
    option = {};
    yankee = 'function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-safeArea.imeInsetsBottom-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}';
    option['code'] = yankee;
    var _closure1_slot10 = option;
    michal = function() {
        entity = function(argFoo) { // Original name: getClampedPIPPosition
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                sizing = zuuluu.pipX;
                kiloes = zuuluu.pipY;
                foxtra = zuuluu.width;
                option = zuuluu.height;
                offset = zuuluu.windowDimensions;
                entity = zuuluu.safeArea;
                verify = zuuluu.bottomAvoidanceRegion;
                golfie = undefined;
                if(!(verify === golfie)) { _fun00008_ip = 51; continue _fun00007 }
 49:
                verify = 0;
 51:
                yankee = zuuluu.topAvoidanceRegion;
                if(!(yankee === golfie)) { _fun00008_ip = 63; continue _fun00007 }
 61:
                yankee = 0;
 63:
                michal = zuuluu.positionOffset;
                if(!(michal === golfie)) { _fun00008_ip = 83; continue _fun00007 }
 73:
                michal = {'x': 0, 'y': 0};
 83:
                report = zuuluu.disableHorizontalSafeAreas;
                romeon = _closure1_slot9;
                tangon = {};
                backup = 1;
                oscard = -1;
                if(!(oscard !== sizing)) { _fun00008_ip = 114; continue _fun00007 }
 111:
                backup = sizing;
 114:
                tangon['pipX'] = backup;
                oscard = oscard === kiloes;
                backup = 0;
                if(oscard) { _fun00008_ip = 131; continue _fun00007 }
 128:
                backup = kiloes;
 131:
                tangon['pipY'] = backup;
                tangon['windowDimensions'] = offset;
                tangon['safeArea'] = entity;
                tangon['disableHorizontalSafeAreas'] = report;
                tangon = romeon.bind(golfie)(tangon);
                kiloes = tangon.x;
                backup = tangon.y;
                tangon = 2;
                romeon = foxtra / tangon;
                romeon = kiloes - romeon;
                if(oscard) { _fun00008_ip = 190; continue _fun00007 }
 180:
                tangon = option / tangon;
                oscard = backup - tangon;
                _fun00008_ip = 197; continue _fun00007;
 190:
                tangon = 72;
                oscard = backup + tangon;
 197:
                tangon = _closure1_slot6;
                offset = tangon.bind(golfie)(offset, entity, report);
                tangon = _closure1_slot3;
                report = offset.xOffset;
                backup = offset.xOffset;
                zuuluu = offset.xRange;
                zuuluu = backup + zuuluu;
                zuuluu = zuuluu - foxtra;
                report = tangon.bind(golfie)(romeon, report, zuuluu);
                zuuluu = offset.yOffset;
                zuuluu = zuuluu + yankee;
                yankee = offset.yOffset;
                offset = offset.yRange;
                offset = yankee + offset;
                entity = entity.imeInsetsBottom;
                entity = offset - entity;
                entity = entity - verify;
                entity = entity - option;
                zuuluu = tangon.bind(golfie)(oscard, zuuluu, entity);
                entity = {};
                tangon = michal.x;
                tangon = report + tangon;
                entity['x'] = tangon;
                michal = michal.y;
                michal = zuuluu + michal;
                entity['y'] = michal;
                return entity;
            }
        };
        zuuluu = {};
        tangon = _closure1_slot9;
        zuuluu['pipXYtoAbsoluteXY'] = tangon;
        tangon = _closure1_slot6;
        zuuluu['getPIPWindowDimensions'] = tangon;
        tangon = _closure1_slot3;
        zuuluu['clamp'] = tangon;
        entity['__closure'] = zuuluu;
        zuuluu = 11264229121702.0;
        entity['__workletHash'] = zuuluu;
        michal = _closure1_slot10;
        entity['__initData'] = michal;
        return entity;
    };
    michal = michal.bind(entity)();
    option = 1;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/panels/morphable/native/MorphablePanelUtils.tsx';
    option = verify.bind(offset)(option);
    zuuluu['calculateXYDiff'] = golfie;
    zuuluu['getPIPWindowDimensions'] = oscard;
    zuuluu['calculatePIPPositionFromVelocity'] = report;
    zuuluu['pipXYtoAbsoluteXY'] = tangon;
    zuuluu['getClampedPIPPosition'] = michal;
    return entity;
})();
// app/modules/panels/morphable/native/MorphablePanelUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    verify = argBar;
    zulu = argFred;
    offset = argPlugh;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    entity = 0;
    tango = offset[entity];
    entity = undefined;
    tango = verify.bind(entity)(tango);
    report = tango.MIN_PIP_TOSS_VELOCITY;
    var _closure1_slot0 = report;
    tango = tango.PIP_WINDOW_OFFSET;
    var _closure1_slot1 = tango;
    tango = {};
    report = 'function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}';
    tango['code'] = report;
    var _closure1_slot2 = tango;
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
        mike = 1391695493868.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot2;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot3 = tango;
    tango = {};
    report = 'function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};}';
    tango['code'] = report;
    var _closure1_slot4 = tango;
    tango = function() {
        entity = function(argFoo, argBar) { // Original name: calculateXYDiff
            _fun121347: for(var _fun121347_ip = 0; ; ) switch(_fun121347_ip) {
 0:
                mike = argBar;
                entity = argFoo;
                entity = entity.changedTouches;
                report = 0;
                entity = entity[report];
                oscar = entity.absoluteY;
                golf = entity.absoluteX;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.absoluteYStart;
                tango = entity - oscar;
                entity = mike.get;
                entity = entity.bind(mike)();
                entity = entity.absoluteXStart;
                options = entity - golf;
                zulu = global;
                offset = zulu.Math;
                verify = offset.max;
                mike = zulu.Math;
                entity = mike.abs;
                mike = entity.bind(mike)(tango);
                yankee = zulu.Math;
                entity = yankee.abs;
                entity = entity.bind(yankee)(options);
                mike = verify.bind(offset)(mike, entity);
                entity = {};
                entity['absoluteX'] = golf;
                entity['absoluteY'] = oscar;
                entity['xDiff'] = options;
                entity['yDiff'] = tango;
                golf = zulu.Math;
                oscar = golf.abs;
                oscar = oscar.bind(golf)(options);
                golf = zulu.Math;
                zulu = golf.abs;
                zulu = zulu.bind(golf)(tango);
                zulu = oscar >= zulu;
                if(zulu) { _fun121347_ip = 190; continue _fun121347 }
 186:
                zulu = tango > report;
 190:
                entity['isNotPullDownGesture'] = zulu;
                entity['absoluteMovement'] = mike;
                return entity;
            }
        };
        mike = {};
        entity['__closure'] = mike;
        mike = 9827767064556.0;
        entity['__workletHash'] = mike;
        mike = _closure1_slot4;
        entity['__initData'] = mike;
        return entity;
    };
    golf = tango.bind(entity)();
    tango = {};
    report = 'function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}';
    tango['code'] = report;
    var _closure1_slot5 = tango;
    tango = function() {
        entity = function(argFoo, argBar, argBaz) { // Original name: getPIPWindowDimensions
            _fun121349: for(var _fun121349_ip = 0; ; ) switch(_fun121349_ip) {
 0:
                zulu = argFoo;
                mike = argBar;
                report = argBaz;
                if(report) { _fun121349_ip = 21; continue _fun121349 }
 15:
                options = _closure1_slot1;
                _fun121349_ip = 49; continue _fun121349;
 21:
                entity = global;
                verify = entity.Math;
                golf = verify.max;
                tango = mike.left;
                entity = _closure1_slot1;
                options = golf.bind(verify)(tango, entity);
 49:
                entity = zulu.width;
                golf = entity - options;
                tango = global;
                yankee = tango.Math;
                verify = yankee.max;
                entity = mike.right;
                offset = _closure1_slot1;
                entity = verify.bind(yankee)(entity, offset);
                entity = golf - entity;
                verify = zulu.width;
                golf = mike.left;
                verify = verify - golf;
                golf = mike.right;
                verify = verify - golf;
                golf = 2;
                golf = golf * offset;
                golf = verify - golf;
                if(!report) { _fun121349_ip = 130; continue _fun121349 }
 127:
                golf = entity;
 130:
                verify = tango.Math;
                report = verify.max;
                entity = mike.top;
                oscar = _closure1_slot1;
                report = report.bind(verify)(entity, oscar);
                entity = {};
                entity['xOffset'] = options;
                entity['yOffset'] = report;
                entity['xRange'] = golf;
                zulu = zulu.height;
                zulu = zulu - report;
                report = tango.Math;
                tango = report.max;
                mike = mike.bottom;
                mike = tango.bind(report)(mike, oscar);
                mike = zulu - mike;
                entity['yRange'] = mike;
                return entity;
            }
        };
        zulu = {};
        tango = _closure1_slot1;
        zulu['PIP_WINDOW_OFFSET'] = tango;
        entity['__closure'] = zulu;
        zulu = 4008246762710.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot5;
        entity['__initData'] = mike;
        return entity;
    };
    oscar = tango.bind(entity)();
    var _closure1_slot6 = oscar;
    tango = {};
    report = "function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}";
    tango['code'] = report;
    var _closure1_slot7 = tango;
    tango = function() {
        entity = function(argFoo) { // Original name: calculatePIPPositionFromVelocity
            _fun121351: for(var _fun121351_ip = 0; ; ) switch(_fun121351_ip) {
 0:
                entity = argFoo;
                zulu = entity.velocityX;
                golf = entity.velocityY;
                offset = entity.absoluteX;
                report = entity.absoluteY;
                verify = entity.windowDimensions;
                options = entity.safeArea;
                tango = entity.disableHorizontalSafeAreas;
                entity = _closure1_slot6;
                oscar = undefined;
                entity = entity.bind(oscar)(verify, options, tango);
                verify = entity.xRange;
                tango = entity.yRange;
                options = entity.xOffset;
                options = offset - options;
                entity = entity.yOffset;
                entity = report - entity;
                offset = global;
                foxtrot = offset.Math;
                romeo = foxtrot.max;
                yankee = offset.Math;
                report = yankee.abs;
                yankee = report.bind(yankee)(golf);
                backup = offset.Math;
                report = backup.abs;
                report = report.bind(backup)(zulu);
                yankee = romeo.bind(foxtrot)(yankee, report);
                report = _closure1_slot0;
                if(!(!(yankee < report))) { _fun121351_ip = 249; continue _fun121351 }
 154:
                foxtrot = golf / zulu;
                report = 0;
                zulu = zulu > report;
                yankee = 0;
                if(!zulu) { _fun121351_ip = 172; continue _fun121351 }
 169:
                yankee = verify;
 172:
                zulu = yankee - options;
                zulu = foxtrot * zulu;
                zulu = entity + zulu;
                if(!(zulu >= report)) { _fun121351_ip = 192; continue _fun121351 }
 188:
                if(!(!(zulu <= tango))) { _fun121351_ip = 236; continue _fun121351 }
 192:
                romeo = 1;
                romeo = romeo / foxtrot;
                golf = golf > report;
                report = 0;
                if(!golf) { _fun121351_ip = 211; continue _fun121351 }
 208:
                report = tango;
 211:
                golf = report - entity;
                golf = romeo * golf;
                golf = options + golf;
                golf = golf / verify;
                report = report / tango;
                _fun121351_ip = 478; continue _fun121351;
 236:
                golf = yankee / verify;
                report = zulu / tango;
                _fun121351_ip = 478; continue _fun121351;
 249:
                foxtrot = {};
                romeo = _closure1_slot3;
                zulu = 0;
                yankee = romeo.bind(oscar)(options, zulu, verify);
                foxtrot['left'] = yankee;
                yankee = verify - options;
                yankee = romeo.bind(oscar)(yankee, zulu, verify);
                foxtrot['right'] = yankee;
                yankee = romeo.bind(oscar)(entity, zulu, tango);
                foxtrot['top'] = yankee;
                yankee = tango - entity;
                yankee = romeo.bind(oscar)(yankee, zulu, tango);
                foxtrot['bottom'] = yankee;
                romeo = offset.Math;
                yankee = romeo.min;
                backup = offset.Object;
                offset = backup.values;
                output = offset.bind(backup)(foxtrot);
                offset = new Array(0);
                result = offset;
                sizing = 0;
                backup = arraySpread(result, output, sizing);
                result = yankee;
                output = offset;
                sizing = romeo;
                kilo = apply(result, output, sizing);
                romeo = foxtrot.left;
                offset = 'left';
                yankee = offset;
                if(!(romeo !== kilo)) { _fun121351_ip = 414; continue _fun121351 }
 378:
                backup = foxtrot.top;
                romeo = 'top';
                if(!(backup !== kilo)) { _fun121351_ip = 411; continue _fun121351 }
 391:
                backup = foxtrot.right;
                foxtrot = 'bottom';
                if(!(backup === kilo)) { _fun121351_ip = 408; continue _fun121351 }
 404:
                foxtrot = 'right';
 408:
                romeo = foxtrot;
 411:
                yankee = romeo;
 414:
                if(!(offset !== yankee)) { _fun121351_ip = 472; continue _fun121351 }
 418:
                offset = 'right';
                if(!(offset !== yankee)) { _fun121351_ip = 463; continue _fun121351 }
 426:
                offset = 'top';
                if(!(offset !== yankee)) { _fun121351_ip = 455; continue _fun121351 }
 434:
                offset = 'bottom';
                golf = 0;
                report = 0;
                if(!(offset === yankee)) { _fun121351_ip = 478; continue _fun121351 }
 446:
                golf = options / verify;
                report = 1;
                _fun121351_ip = 478; continue _fun121351;
 455:
                golf = options / verify;
                report = 0;
                _fun121351_ip = 478; continue _fun121351;
 463:
                report = entity / tango;
                golf = 1;
                _fun121351_ip = 478; continue _fun121351;
 472:
                report = entity / tango;
                golf = 0;
 478:
                entity = {};
                tango = _closure1_slot3;
                zulu = 0;
                mike = 1;
                golf = tango.bind(oscar)(golf, zulu, mike);
                entity['pipX'] = golf;
                mike = tango.bind(oscar)(report, zulu, mike);
                entity['pipY'] = mike;
                return entity;
            }
        };
        zulu = {};
        tango = _closure1_slot6;
        zulu['getPIPWindowDimensions'] = tango;
        tango = _closure1_slot0;
        zulu['MIN_PIP_TOSS_VELOCITY'] = tango;
        tango = _closure1_slot3;
        zulu['clamp'] = tango;
        entity['__closure'] = zulu;
        zulu = 3215524498124.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot7;
        entity['__initData'] = mike;
        return entity;
    };
    report = tango.bind(entity)();
    tango = {};
    options = 'function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}';
    tango['code'] = options;
    var _closure1_slot8 = tango;
    tango = function() {
        entity = function(argFoo) { // Original name: pipXYtoAbsoluteXY
            entity = argFoo;
            golf = entity.pipX;
            tango = entity.pipY;
            oscar = entity.windowDimensions;
            report = entity.safeArea;
            zulu = entity.disableHorizontalSafeAreas;
            mike = _closure1_slot6;
            entity = undefined;
            mike = mike.bind(entity)(oscar, report, zulu);
            oscar = mike.xOffset;
            zulu = mike.yOffset;
            entity = {};
            report = mike.xRange;
            report = golf * report;
            report = oscar + report;
            entity['x'] = report;
            mike = mike.yRange;
            mike = tango * mike;
            mike = zulu + mike;
            entity['y'] = mike;
            return entity;
        };
        zulu = {};
        tango = _closure1_slot6;
        zulu['getPIPWindowDimensions'] = tango;
        entity['__closure'] = zulu;
        zulu = 1981621867924.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot8;
        entity['__initData'] = mike;
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot9 = tango;
    options = {};
    yankee = 'function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-safeArea.imeInsetsBottom-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}';
    options['code'] = yankee;
    var _closure1_slot10 = options;
    mike = function() {
        entity = function(argFoo) { // Original name: getClampedPIPPosition
            _fun121355: for(var _fun121355_ip = 0; ; ) switch(_fun121355_ip) {
 0:
                zulu = argFoo;
                sizing = zulu.pipX;
                kilo = zulu.pipY;
                foxtrot = zulu.width;
                options = zulu.height;
                offset = zulu.windowDimensions;
                entity = zulu.safeArea;
                verify = zulu.bottomAvoidanceRegion;
                golf = undefined;
                if(!(verify === golf)) { _fun121355_ip = 51; continue _fun121355 }
 49:
                verify = 0;
 51:
                yankee = zulu.topAvoidanceRegion;
                if(!(yankee === golf)) { _fun121355_ip = 63; continue _fun121355 }
 61:
                yankee = 0;
 63:
                mike = zulu.positionOffset;
                if(!(mike === golf)) { _fun121355_ip = 83; continue _fun121355 }
 73:
                mike = {'x': 0, 'y': 0};
 83:
                report = zulu.disableHorizontalSafeAreas;
                romeo = _closure1_slot9;
                tango = {};
                backup = 1;
                oscar = -1;
                if(!(oscar !== sizing)) { _fun121355_ip = 114; continue _fun121355 }
 111:
                backup = sizing;
 114:
                tango['pipX'] = backup;
                oscar = oscar === kilo;
                backup = 0;
                if(oscar) { _fun121355_ip = 131; continue _fun121355 }
 128:
                backup = kilo;
 131:
                tango['pipY'] = backup;
                tango['windowDimensions'] = offset;
                tango['safeArea'] = entity;
                tango['disableHorizontalSafeAreas'] = report;
                tango = romeo.bind(golf)(tango);
                kilo = tango.x;
                backup = tango.y;
                tango = 2;
                romeo = foxtrot / tango;
                romeo = kilo - romeo;
                if(oscar) { _fun121355_ip = 190; continue _fun121355 }
 180:
                tango = options / tango;
                oscar = backup - tango;
                _fun121355_ip = 197; continue _fun121355;
 190:
                tango = 72;
                oscar = backup + tango;
 197:
                tango = _closure1_slot6;
                offset = tango.bind(golf)(offset, entity, report);
                tango = _closure1_slot3;
                report = offset.xOffset;
                backup = offset.xOffset;
                zulu = offset.xRange;
                zulu = backup + zulu;
                zulu = zulu - foxtrot;
                report = tango.bind(golf)(romeo, report, zulu);
                zulu = offset.yOffset;
                zulu = zulu + yankee;
                yankee = offset.yOffset;
                offset = offset.yRange;
                offset = yankee + offset;
                entity = entity.imeInsetsBottom;
                entity = offset - entity;
                entity = entity - verify;
                entity = entity - options;
                zulu = tango.bind(golf)(oscar, zulu, entity);
                entity = {};
                tango = mike.x;
                tango = report + tango;
                entity['x'] = tango;
                mike = mike.y;
                mike = zulu + mike;
                entity['y'] = mike;
                return entity;
            }
        };
        zulu = {};
        tango = _closure1_slot9;
        zulu['pipXYtoAbsoluteXY'] = tango;
        tango = _closure1_slot6;
        zulu['getPIPWindowDimensions'] = tango;
        tango = _closure1_slot3;
        zulu['clamp'] = tango;
        entity['__closure'] = zulu;
        zulu = 11264229121702.0;
        entity['__workletHash'] = zulu;
        mike = _closure1_slot10;
        entity['__initData'] = mike;
        return entity;
    };
    mike = mike.bind(entity)();
    options = 1;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/panels/morphable/native/MorphablePanelUtils.tsx';
    options = verify.bind(offset)(options);
    zulu['calculateXYDiff'] = golf;
    zulu['getPIPWindowDimensions'] = oscar;
    zulu['calculatePIPPositionFromVelocity'] = report;
    zulu['pipXYtoAbsoluteXY'] = tango;
    zulu['getClampedPIPPosition'] = mike;
    return entity;
})();
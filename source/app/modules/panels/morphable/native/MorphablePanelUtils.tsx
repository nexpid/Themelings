// app/modules/panels/morphable/native/MorphablePanelUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var10[var1];
    var1 = undefined;
    var4 = var9.bind(var1)(var4);
    var5 = var4.MIN_PIP_TOSS_VELOCITY;
    var _closure1_slot0 = var5;
    var4 = var4.PIP_WINDOW_OFFSET;
    var _closure1_slot1 = var4;
    var4 = {};
    var5 = 'function clamp_MorphablePanelUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}';
    var4['code'] = var5;
    var _closure1_slot2 = var4;
    var4 = function() {
        var1 = function clamp(arg1, arg2, arg3) {
            var1 = global;
            var4 = var1.Math;
            var3 = var4.min;
            var6 = var1.Math;
            var5 = var6.max;
            var2 = arg1;
            var1 = arg2;
            var2 = var5.bind(var6)(var2, var1);
            var1 = arg3;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 1391695493868.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot2;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot3 = var4;
    var4 = {};
    var5 = 'function calculateXYDiff_MorphablePanelUtilsTsx2(event,initialGestureOffset){const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=initialGestureOffset.get().absoluteYStart-absoluteY;const xDiff=initialGestureOffset.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;return{absoluteX:absoluteX,absoluteY:absoluteY,xDiff:xDiff,yDiff:yDiff,isNotPullDownGesture:isNotPullDownGesture,absoluteMovement:absoluteMovement};}';
    var4['code'] = var5;
    var _closure1_slot4 = var4;
    var4 = function() {
        var1 = function calculateXYDiff(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = arg2;
                var1 = arg1;
                var1 = var1.changedTouches;
                var5 = 0;
                var1 = var1[var5];
                var6 = var1.absoluteY;
                var7 = var1.absoluteX;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var1 = var1.absoluteYStart;
                var4 = var1 - var6;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var1 = var1.absoluteXStart;
                var8 = var1 - var7;
                var3 = global;
                var10 = var3.Math;
                var9 = var10.max;
                var2 = var3.Math;
                var1 = var2.abs;
                var2 = var1.bind(var2)(var4);
                var11 = var3.Math;
                var1 = var11.abs;
                var1 = var1.bind(var11)(var8);
                var2 = var9.bind(var10)(var2, var1);
                var1 = {};
                var1['absoluteX'] = var7;
                var1['absoluteY'] = var6;
                var1['xDiff'] = var8;
                var1['yDiff'] = var4;
                var7 = var3.Math;
                var6 = var7.abs;
                var6 = var6.bind(var7)(var8);
                var7 = var3.Math;
                var3 = var7.abs;
                var3 = var3.bind(var7)(var4);
                var3 = var6 >= var3;
                if(var3) { _fun0001_ip = 190; continue _fun0001 }
 186:
                var3 = var4 > var5;
 190:
                var1['isNotPullDownGesture'] = var3;
                var1['absoluteMovement'] = var2;
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 9827767064556.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot4;
        var1['__initData'] = var2;
        return var1;
    };
    var7 = var4.bind(var1)();
    var4 = {};
    var5 = 'function getPIPWindowDimensions_MorphablePanelUtilsTsx3(windowDimensions,safeArea,disableHorizontalSafeAreas){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=disableHorizontalSafeAreas?Math.max(safeArea.left,PIP_WINDOW_OFFSET):PIP_WINDOW_OFFSET;const disabledHorizontalSafeAreasRange=windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET);const enabledHorizontalSafeAreasRange=windowDimensions.width-safeArea.left-safeArea.right-PIP_WINDOW_OFFSET*2;const xRange=disableHorizontalSafeAreas?disabledHorizontalSafeAreasRange:enabledHorizontalSafeAreasRange;const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}';
    var4['code'] = var5;
    var _closure1_slot5 = var4;
    var4 = function() {
        var1 = function getPIPWindowDimensions(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var2 = arg2;
                var5 = arg3;
                if(var5) { _fun0002_ip = 21; continue _fun0002 }
 15:
                var8 = _closure1_slot1;
                _fun0002_ip = 49; continue _fun0002;
 21:
                var1 = global;
                var9 = var1.Math;
                var7 = var9.max;
                var4 = var2.left;
                var1 = _closure1_slot1;
                var8 = var7.bind(var9)(var4, var1);
 49:
                var1 = var3.width;
                var7 = var1 - var8;
                var4 = global;
                var11 = var4.Math;
                var9 = var11.max;
                var1 = var2.right;
                var10 = _closure1_slot1;
                var1 = var9.bind(var11)(var1, var10);
                var1 = var7 - var1;
                var9 = var3.width;
                var7 = var2.left;
                var9 = var9 - var7;
                var7 = var2.right;
                var9 = var9 - var7;
                var7 = 2;
                var7 = var7 * var10;
                var7 = var9 - var7;
                if(!var5) { _fun0002_ip = 130; continue _fun0002 }
 127:
                var7 = var1;
 130:
                var9 = var4.Math;
                var5 = var9.max;
                var1 = var2.top;
                var6 = _closure1_slot1;
                var5 = var5.bind(var9)(var1, var6);
                var1 = {};
                var1['xOffset'] = var8;
                var1['yOffset'] = var5;
                var1['xRange'] = var7;
                var3 = var3.height;
                var3 = var3 - var5;
                var5 = var4.Math;
                var4 = var5.max;
                var2 = var2.bottom;
                var2 = var4.bind(var5)(var2, var6);
                var2 = var3 - var2;
                var1['yRange'] = var2;
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot1;
        var3['PIP_WINDOW_OFFSET'] = var4;
        var1['__closure'] = var3;
        var3 = 4008246762710.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot5;
        var1['__initData'] = var2;
        return var1;
    };
    var6 = var4.bind(var1)();
    var _closure1_slot6 = var6;
    var4 = {};
    var5 = "function calculatePIPPositionFromVelocity_MorphablePanelUtilsTsx4({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}";
    var4['code'] = var5;
    var _closure1_slot7 = var4;
    var4 = function() {
        var1 = function calculatePIPPositionFromVelocity(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = arg1;
                var3 = var1.velocityX;
                var7 = var1.velocityY;
                var10 = var1.absoluteX;
                var5 = var1.absoluteY;
                var9 = var1.windowDimensions;
                var8 = var1.safeArea;
                var4 = var1.disableHorizontalSafeAreas;
                var1 = _closure1_slot6;
                var6 = undefined;
                var1 = var1.bind(var6)(var9, var8, var4);
                var9 = var1.xRange;
                var4 = var1.yRange;
                var8 = var1.xOffset;
                var8 = var10 - var8;
                var1 = var1.yOffset;
                var1 = var5 - var1;
                var10 = global;
                var13 = var10.Math;
                var12 = var13.max;
                var11 = var10.Math;
                var5 = var11.abs;
                var11 = var5.bind(var11)(var7);
                var14 = var10.Math;
                var5 = var14.abs;
                var5 = var5.bind(var14)(var3);
                var11 = var12.bind(var13)(var11, var5);
                var5 = _closure1_slot0;
                if(!(!(var11 < var5))) { _fun0003_ip = 249; continue _fun0003 }
 154:
                var13 = var7 / var3;
                var5 = 0;
                var3 = var3 > var5;
                var11 = 0;
                if(!var3) { _fun0003_ip = 172; continue _fun0003 }
 169:
                var11 = var9;
 172:
                var3 = var11 - var8;
                var3 = var13 * var3;
                var3 = var1 + var3;
                if(!(var3 >= var5)) { _fun0003_ip = 192; continue _fun0003 }
 188:
                if(!(!(var3 <= var4))) { _fun0003_ip = 236; continue _fun0003 }
 192:
                var12 = 1;
                var12 = var12 / var13;
                var7 = var7 > var5;
                var5 = 0;
                if(!var7) { _fun0003_ip = 211; continue _fun0003 }
 208:
                var5 = var4;
 211:
                var7 = var5 - var1;
                var7 = var12 * var7;
                var7 = var8 + var7;
                var7 = var7 / var9;
                var5 = var5 / var4;
                _fun0003_ip = 478; continue _fun0003;
 236:
                var7 = var11 / var9;
                var5 = var3 / var4;
                _fun0003_ip = 478; continue _fun0003;
 249:
                var13 = {};
                var12 = _closure1_slot3;
                var3 = 0;
                var11 = var12.bind(var6)(var8, var3, var9);
                var13['left'] = var11;
                var11 = var9 - var8;
                var11 = var12.bind(var6)(var11, var3, var9);
                var13['right'] = var11;
                var11 = var12.bind(var6)(var1, var3, var4);
                var13['top'] = var11;
                var11 = var4 - var1;
                var11 = var12.bind(var6)(var11, var3, var4);
                var13['bottom'] = var11;
                var12 = var10.Math;
                var11 = var12.min;
                var14 = var10.Object;
                var10 = var14.values;
                var17 = var10.bind(var14)(var13);
                var10 = new Array(0);
                var18 = var10;
                var16 = 0;
                var14 = arraySpread(var18, var17, var16);
                var18 = var11;
                var17 = var10;
                var16 = var12;
                var15 = apply(var18, var17, var16);
                var12 = var13.left;
                var10 = 'left';
                var11 = var10;
                if(!(var12 !== var15)) { _fun0003_ip = 414; continue _fun0003 }
 378:
                var14 = var13.top;
                var12 = 'top';
                if(!(var14 !== var15)) { _fun0003_ip = 411; continue _fun0003 }
 391:
                var14 = var13.right;
                var13 = 'bottom';
                if(!(var14 === var15)) { _fun0003_ip = 408; continue _fun0003 }
 404:
                var13 = 'right';
 408:
                var12 = var13;
 411:
                var11 = var12;
 414:
                if(!(var10 !== var11)) { _fun0003_ip = 472; continue _fun0003 }
 418:
                var10 = 'right';
                if(!(var10 !== var11)) { _fun0003_ip = 463; continue _fun0003 }
 426:
                var10 = 'top';
                if(!(var10 !== var11)) { _fun0003_ip = 455; continue _fun0003 }
 434:
                var10 = 'bottom';
                var7 = 0;
                var5 = 0;
                if(!(var10 === var11)) { _fun0003_ip = 478; continue _fun0003 }
 446:
                var7 = var8 / var9;
                var5 = 1;
                _fun0003_ip = 478; continue _fun0003;
 455:
                var7 = var8 / var9;
                var5 = 0;
                _fun0003_ip = 478; continue _fun0003;
 463:
                var5 = var1 / var4;
                var7 = 1;
                _fun0003_ip = 478; continue _fun0003;
 472:
                var5 = var1 / var4;
                var7 = 0;
 478:
                var1 = {};
                var4 = _closure1_slot3;
                var3 = 0;
                var2 = 1;
                var7 = var4.bind(var6)(var7, var3, var2);
                var1['pipX'] = var7;
                var2 = var4.bind(var6)(var5, var3, var2);
                var1['pipY'] = var2;
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot6;
        var3['getPIPWindowDimensions'] = var4;
        var4 = _closure1_slot0;
        var3['MIN_PIP_TOSS_VELOCITY'] = var4;
        var4 = _closure1_slot3;
        var3['clamp'] = var4;
        var1['__closure'] = var3;
        var3 = 3215524498124.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot7;
        var1['__initData'] = var2;
        return var1;
    };
    var5 = var4.bind(var1)();
    var4 = {};
    var8 = 'function pipXYtoAbsoluteXY_MorphablePanelUtilsTsx5({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}';
    var4['code'] = var8;
    var _closure1_slot8 = var4;
    var4 = function() {
        var1 = function pipXYtoAbsoluteXY(arg1) {
            var1 = arg1;
            var7 = var1.pipX;
            var4 = var1.pipY;
            var6 = var1.windowDimensions;
            var5 = var1.safeArea;
            var3 = var1.disableHorizontalSafeAreas;
            var2 = _closure1_slot6;
            var1 = undefined;
            var2 = var2.bind(var1)(var6, var5, var3);
            var6 = var2.xOffset;
            var3 = var2.yOffset;
            var1 = {};
            var5 = var2.xRange;
            var5 = var7 * var5;
            var5 = var6 + var5;
            var1['x'] = var5;
            var2 = var2.yRange;
            var2 = var4 * var2;
            var2 = var3 + var2;
            var1['y'] = var2;
            return var1;
        };
        var3 = {};
        var4 = _closure1_slot6;
        var3['getPIPWindowDimensions'] = var4;
        var1['__closure'] = var3;
        var3 = 1981621867924.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot8;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot9 = var4;
    var8 = {};
    var11 = 'function getClampedPIPPosition_MorphablePanelUtilsTsx6({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0},disableHorizontalSafeAreas:disableHorizontalSafeAreas}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea,disableHorizontalSafeAreas:disableHorizontalSafeAreas});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea,disableHorizontalSafeAreas);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}';
    var8['code'] = var11;
    var _closure1_slot10 = var8;
    var2 = function() {
        var1 = function getClampedPIPPosition(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var16 = var1.pipX;
                var15 = var1.pipY;
                var12 = var1.width;
                var8 = var1.height;
                var13 = var1.windowDimensions;
                var5 = var1.safeArea;
                var9 = var1.bottomAvoidanceRegion;
                var7 = undefined;
                if(!(var9 === var7)) { _fun0004_ip = 51; continue _fun0004 }
 49:
                var9 = 0;
 51:
                var10 = var1.topAvoidanceRegion;
                if(!(var10 === var7)) { _fun0004_ip = 63; continue _fun0004 }
 61:
                var10 = 0;
 63:
                var2 = var1.positionOffset;
                if(!(var2 === var7)) { _fun0004_ip = 83; continue _fun0004 }
 73:
                var2 = {'x': 0, 'y': 0};
 83:
                var4 = var1.disableHorizontalSafeAreas;
                var11 = _closure1_slot9;
                var1 = {};
                var14 = 1;
                var6 = -1;
                if(!(var6 !== var16)) { _fun0004_ip = 114; continue _fun0004 }
 111:
                var14 = var16;
 114:
                var1['pipX'] = var14;
                var6 = var6 === var15;
                var14 = 0;
                if(var6) { _fun0004_ip = 131; continue _fun0004 }
 128:
                var14 = var15;
 131:
                var1['pipY'] = var14;
                var1['windowDimensions'] = var13;
                var1['safeArea'] = var5;
                var1['disableHorizontalSafeAreas'] = var4;
                var1 = var11.bind(var7)(var1);
                var15 = var1.x;
                var14 = var1.y;
                var1 = 2;
                var11 = var12 / var1;
                var11 = var15 - var11;
                if(var6) { _fun0004_ip = 190; continue _fun0004 }
 180:
                var1 = var8 / var1;
                var6 = var14 - var1;
                _fun0004_ip = 197; continue _fun0004;
 190:
                var1 = 72;
                var6 = var14 + var1;
 197:
                var1 = _closure1_slot6;
                var1 = var1.bind(var7)(var13, var5, var4);
                var4 = _closure1_slot3;
                var5 = var1.xOffset;
                var13 = var1.xOffset;
                var3 = var1.xRange;
                var3 = var13 + var3;
                var3 = var3 - var12;
                var5 = var4.bind(var7)(var11, var5, var3);
                var3 = var1.yOffset;
                var3 = var3 + var10;
                var10 = var1.yOffset;
                var1 = var1.yRange;
                var1 = var10 + var1;
                var1 = var1 - var9;
                var1 = var1 - var8;
                var3 = var4.bind(var7)(var6, var3, var1);
                var1 = {};
                var4 = var2.x;
                var4 = var5 + var4;
                var1['x'] = var4;
                var2 = var2.y;
                var2 = var3 + var2;
                var1['y'] = var2;
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot9;
        var3['pipXYtoAbsoluteXY'] = var4;
        var4 = _closure1_slot6;
        var3['getPIPWindowDimensions'] = var4;
        var4 = _closure1_slot3;
        var3['clamp'] = var4;
        var1['__closure'] = var3;
        var3 = 7754262947803.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot10;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var8 = 1;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/panels/morphable/native/MorphablePanelUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['calculateXYDiff'] = var7;
    var3['getPIPWindowDimensions'] = var6;
    var3['calculatePIPPositionFromVelocity'] = var5;
    var3['pipXYtoAbsoluteXY'] = var4;
    var3['getClampedPIPPosition'] = var2;
    return var1;
})();
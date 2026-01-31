// app/modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var14;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot27;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot27;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var14[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var14[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var14[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var5 = var4.SECONDARY_PIP_TOP_MARGIN;
    var _closure1_slot5 = var5;
    var4 = var4.VoicePanelModes;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var5 = var4.VoicePanelPIPModes;
    var _closure1_slot7 = var5;
    var11 = var4.PIPReferenceDimensions;
    var _closure1_slot8 = var11;
    var10 = var4.SquarePIPReferenceDimensions;
    var _closure1_slot9 = var10;
    var9 = var4.SquareActivityPIPReferenceDimensions;
    var _closure1_slot10 = var9;
    var4 = 5;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var4 = var4.ParticipantTypes;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var14[var4];
    var4 = var13.bind(var1)(var4);
    var5 = var4.MIN_PIP_TOSS_VELOCITY;
    var _closure1_slot12 = var5;
    var4 = var4.PIP_WINDOW_OFFSET;
    var _closure1_slot13 = var4;
    var2 = var2.Set;
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var19 = var4;
    var2 = new var19[var2](var18);
    var2 = var2 instanceof Object ? var2 : var4;
    var _closure1_slot14 = var2;
    var2 = {};
    var4 = 'function clamp_VoicePanelPIPUtilsTsx1(value,min,max){return Math.min(Math.max(value,min),max);}';
    var2['code'] = var4;
    var _closure1_slot15 = var2;
    var2 = function() {
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
        var2 = 10301627783217.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot15;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot16 = var2;
    var2 = {};
    var4 = 'function getPIPWindowDimensions_VoicePanelPIPUtilsTsx2(windowDimensions,safeArea){const{PIP_WINDOW_OFFSET}=this.__closure;const xOffset=Math.max(safeArea.left,PIP_WINDOW_OFFSET);const yOffset=Math.max(safeArea.top,PIP_WINDOW_OFFSET);return{xOffset:xOffset,yOffset:yOffset,xRange:windowDimensions.width-xOffset-Math.max(safeArea.right,PIP_WINDOW_OFFSET),yRange:windowDimensions.height-yOffset-Math.max(safeArea.bottom,PIP_WINDOW_OFFSET)};}';
    var2['code'] = var4;
    var _closure1_slot17 = var2;
    var2 = function() {
        var1 = function getPIPWindowDimensions(arg1, arg2) {
            var3 = arg1;
            var2 = arg2;
            var4 = global;
            var7 = var4.Math;
            var5 = var7.max;
            var1 = var2.left;
            var6 = _closure1_slot13;
            var8 = var5.bind(var7)(var1, var6);
            var7 = var4.Math;
            var5 = var7.max;
            var1 = var2.top;
            var5 = var5.bind(var7)(var1, var6);
            var1 = {};
            var1['xOffset'] = var8;
            var1['yOffset'] = var5;
            var7 = var3.width;
            var8 = var7 - var8;
            var10 = var4.Math;
            var9 = var10.max;
            var7 = var2.right;
            var7 = var9.bind(var10)(var7, var6);
            var7 = var8 - var7;
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
        };
        var3 = {};
        var4 = _closure1_slot13;
        var3['PIP_WINDOW_OFFSET'] = var4;
        var1['__closure'] = var3;
        var3 = 10369369214675.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot17;
        var1['__initData'] = var2;
        return var1;
    };
    var7 = var2.bind(var1)();
    var _closure1_slot18 = var7;
    var2 = {};
    var4 = 'function pipXYtoAbsoluteXY_VoicePanelPIPUtilsTsx3({pipX:pipX,pipY:pipY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions}=this.__closure;const{xOffset:xOffset,yOffset:yOffset,xRange:xRange,yRange:yRange}=getPIPWindowDimensions(windowDimensions,safeArea);return{x:xOffset+pipX*xRange,y:yOffset+pipY*yRange};}';
    var2['code'] = var4;
    var _closure1_slot19 = var2;
    var2 = function() {
        var1 = function pipXYtoAbsoluteXY(arg1) {
            var1 = arg1;
            var7 = var1.pipX;
            var4 = var1.pipY;
            var5 = var1.windowDimensions;
            var3 = var1.safeArea;
            var2 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)(var5, var3);
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
        var4 = _closure1_slot18;
        var3['getPIPWindowDimensions'] = var4;
        var1['__closure'] = var3;
        var3 = 13405407399530.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot19;
        var1['__initData'] = var2;
        return var1;
    };
    var6 = var2.bind(var1)();
    var _closure1_slot20 = var6;
    var2 = {};
    var4 = 'function getClampedPIPPosition_VoicePanelPIPUtilsTsx4({pipX:pipX,pipY:pipY,width:width,height:height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion=0,topAvoidanceRegion=0,positionOffset={x:0,y:0}}){const{pipXYtoAbsoluteXY,getPIPWindowDimensions,clamp}=this.__closure;let{x:x,y:y}=pipXYtoAbsoluteXY({pipX:pipX===-1?1:pipX,pipY:pipY===-1?0:pipY,windowDimensions:windowDimensions,safeArea:safeArea});const halfWidth=width/2;const halfHeight=height/2;x-=halfWidth;if(pipY===-1){y+=72;}else{y-=halfHeight;}const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);x=clamp(x,pipRegion.xOffset,pipRegion.xOffset+pipRegion.xRange-width);y=clamp(y,pipRegion.yOffset+topAvoidanceRegion,pipRegion.yOffset+pipRegion.yRange-bottomAvoidanceRegion-height);x+=positionOffset.x;y+=positionOffset.y;return{x:x,y:y};}';
    var2['code'] = var4;
    var _closure1_slot21 = var2;
    var2 = function() {
        var1 = function getClampedPIPPosition(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var15 = var1.pipX;
                var14 = var1.pipY;
                var12 = var1.width;
                var8 = var1.height;
                var5 = var1.windowDimensions;
                var4 = var1.safeArea;
                var9 = var1.bottomAvoidanceRegion;
                var7 = undefined;
                if(!(var9 === var7)) { _fun0004_ip = 36; continue _fun0004 }
case 5:
                var9 = 0;
case 36:
                var10 = var1.topAvoidanceRegion;
                if(!(var10 === var7)) { _fun0004_ip = 37; continue _fun0004 }
case 7:
                var10 = 0;
case 37:
                var2 = var1.positionOffset;
                if(!(var2 === var7)) { _fun0004_ip = 38; continue _fun0004 }
case 39:
                var2 = {'x': 0, 'y': 0};
case 38:
                var11 = _closure1_slot20;
                var1 = {};
                var13 = 1;
                var6 = -1;
                if(!(var6 !== var15)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
                var13 = var15;
case 40:
                var1['pipX'] = var13;
                var6 = var6 === var14;
                var13 = 0;
                if(var6) { _fun0004_ip = 42; continue _fun0004 }
case 43:
                var13 = var14;
case 42:
                var1['pipY'] = var13;
                var1['windowDimensions'] = var5;
                var1['safeArea'] = var4;
                var1 = var11.bind(var7)(var1);
                var14 = var1.x;
                var13 = var1.y;
                var1 = 2;
                var11 = var12 / var1;
                var11 = var14 - var11;
                if(var6) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var1 = var8 / var1;
                var6 = var13 - var1;
                _fun0004_ip = 44; continue _fun0004;
case 16:
                var1 = 72;
                var6 = var13 + var1;
case 44:
                var1 = _closure1_slot18;
                var1 = var1.bind(var7)(var5, var4);
                var4 = _closure1_slot16;
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
        var4 = _closure1_slot20;
        var3['pipXYtoAbsoluteXY'] = var4;
        var4 = _closure1_slot18;
        var3['getPIPWindowDimensions'] = var4;
        var4 = _closure1_slot16;
        var3['clamp'] = var4;
        var1['__closure'] = var3;
        var3 = 10462021389431.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot21;
        var1['__initData'] = var2;
        return var1;
    };
    var5 = var2.bind(var1)();
    var2 = {};
    var4 = "function calculatePIPPositionFromVelocity_VoicePanelPIPUtilsTsx5({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions,safeArea:safeArea}){const{getPIPWindowDimensions,MIN_PIP_TOSS_VELOCITY,clamp}=this.__closure;const pipRegion=getPIPWindowDimensions(windowDimensions,safeArea);const{xRange:xRange,yRange:yRange}=pipRegion;const x=absoluteX-pipRegion.xOffset;const y=absoluteY-pipRegion.yOffset;let pipX=0;let pipY=0;if(Math.max(Math.abs(velocityY),Math.abs(velocityX))<MIN_PIP_TOSS_VELOCITY){const closestEdge=function(specs){const minValue=Math.min(...Object.values(specs));if(specs.left===minValue){return'left';}if(specs.top===minValue){return'top';}if(specs.right===minValue){return'right';}return'bottom';}({left:clamp(x,0,xRange),right:clamp(xRange-x,0,xRange),top:clamp(y,0,yRange),bottom:clamp(yRange-y,0,yRange)});switch(closestEdge){case'left':pipX=0;pipY=y/yRange;break;case'right':pipX=1;pipY=y/yRange;break;case'top':pipY=0;pipX=x/xRange;break;case'bottom':pipY=1;pipX=x/xRange;break;}}else{const slope=velocityY/velocityX;let intersectionY=0;let intersectionX=0;intersectionX=velocityX>0?xRange:0;intersectionY=y+slope*(intersectionX-x);if(intersectionY>=0&&intersectionY<=yRange){pipX=intersectionX/xRange;pipY=intersectionY/yRange;}else{intersectionY=velocityY>0?yRange:0;intersectionX=x+1/slope*(intersectionY-y);pipX=intersectionX/xRange;pipY=intersectionY/yRange;}}return{pipX:clamp(pipX,0,1),pipY:clamp(pipY,0,1)};}";
    var2['code'] = var4;
    var _closure1_slot22 = var2;
    var2 = function() {
        var1 = function calculatePIPPositionFromVelocity(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arg1;
                var3 = var1.velocityX;
                var7 = var1.velocityY;
                var10 = var1.absoluteX;
                var5 = var1.absoluteY;
                var8 = var1.windowDimensions;
                var4 = var1.safeArea;
                var1 = _closure1_slot18;
                var6 = undefined;
                var1 = var1.bind(var6)(var8, var4);
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
                var5 = _closure1_slot12;
                if(!(!(var11 < var5))) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var13 = var7 / var3;
                var5 = 0;
                var3 = var3 > var5;
                var11 = 0;
                if(!var3) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var11 = var9;
case 47:
                var3 = var11 - var8;
                var3 = var13 * var3;
                var3 = var1 + var3;
                if(!(var3 >= var5)) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                if(!(!(var3 <= var4))) { _fun0005_ip = 51; continue _fun0005 }
case 49:
                var12 = 1;
                var12 = var12 / var13;
                var7 = var7 > var5;
                var5 = 0;
                if(!var7) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var5 = var4;
case 52:
                var7 = var5 - var1;
                var7 = var12 * var7;
                var7 = var8 + var7;
                var7 = var7 / var9;
                var5 = var5 / var4;
                _fun0005_ip = 54; continue _fun0005;
case 51:
                var7 = var11 / var9;
                var5 = var3 / var4;
                _fun0005_ip = 54; continue _fun0005;
case 45:
                var13 = {};
                var12 = _closure1_slot16;
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
                if(!(var12 !== var15)) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var14 = var13.top;
                var12 = 'top';
                if(!(var14 !== var15)) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                var14 = var13.right;
                var13 = 'bottom';
                if(!(var14 === var15)) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                var13 = 'right';
case 59:
                var12 = var13;
case 57:
                var11 = var12;
case 55:
                if(!(var10 !== var11)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
                var10 = 'right';
                if(!(var10 !== var11)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
                var10 = 'top';
                if(!(var10 !== var11)) { _fun0005_ip = 65; continue _fun0005 }
case 66:
                var10 = 'bottom';
                var7 = 0;
                var5 = 0;
                if(!(var10 === var11)) { _fun0005_ip = 54; continue _fun0005 }
case 67:
                var7 = var8 / var9;
                var5 = 1;
                _fun0005_ip = 54; continue _fun0005;
case 65:
                var7 = var8 / var9;
                var5 = 0;
                _fun0005_ip = 54; continue _fun0005;
case 63:
                var5 = var1 / var4;
                var7 = 1;
                _fun0005_ip = 54; continue _fun0005;
case 61:
                var5 = var1 / var4;
                var7 = 0;
case 54:
                var1 = {};
                var4 = _closure1_slot16;
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
        var4 = _closure1_slot18;
        var3['getPIPWindowDimensions'] = var4;
        var4 = _closure1_slot12;
        var3['MIN_PIP_TOSS_VELOCITY'] = var4;
        var4 = _closure1_slot16;
        var3['clamp'] = var4;
        var1['__closure'] = var3;
        var3 = 14615762848981.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot22;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = 9;
    var15 = var14[var2];
    var15 = var12.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.xl;
    var _closure1_slot23 = var15;
    var2 = var14[var2];
    var2 = var12.bind(var1)(var2);
    var2 = var2.radii;
    var2 = var2.lg;
    var _closure1_slot24 = var2;
    var2 = {};
    var12 = 'function getVoicePanelPIPBorderRadius_VoicePanelPIPUtilsTsx6(width,height){const{SquareActivityPIPReferenceDimensions,lg,xl}=this.__closure;if(width<=SquareActivityPIPReferenceDimensions.width&&height<=SquareActivityPIPReferenceDimensions.height){return lg;}return xl;}';
    var2['code'] = var12;
    var _closure1_slot25 = var2;
    var2 = function() {
        var1 = function getVoicePanelPIPBorderRadius(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = _closure1_slot10;
                var3 = var1.width;
                var1 = arg1;
                if(!(var1 <= var3)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                var1 = _closure1_slot10;
                var3 = var1.height;
                var1 = arg2;
                if(!(!(var1 <= var3))) { _fun0006_ip = 70; continue _fun0006 }
case 68:
                var1 = _closure1_slot23;
                _fun0006_ip = 71; continue _fun0006;
case 70:
                var1 = _closure1_slot24;
case 71:
                return var1;
            }
        };
        var3 = {};
        var4 = _closure1_slot10;
        var3['SquareActivityPIPReferenceDimensions'] = var4;
        var4 = _closure1_slot24;
        var3['lg'] = var4;
        var4 = _closure1_slot23;
        var3['xl'] = var4;
        var1['__closure'] = var3;
        var3 = 16698745361037.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot25;
        var1['__initData'] = var2;
        return var1;
    };
    var2 = var2.bind(var1)();
    var12 = 10;
    var12 = var14[var12];
    var14 = var13.bind(var1)(var12);
    var13 = var14.fileFinishedImporting;
    var12 = 'modules/voice_panel/native/pip/VoicePanelPIPUtils.tsx';
    var12 = var13.bind(var14)(var12);
    var3['PIPReferenceDimensions'] = var11;
    var3['SquarePIPReferenceDimensions'] = var10;
    var3['SquareActivityPIPReferenceDimensions'] = var9;
    var9 = function computePIPSize(arg1, arg2, arg3, arg4) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = arg1;
            var1 = arg3;
            var4 = var3.width;
            var2 = var3.height;
            var5 = arg2;
            if(var5) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            if(!(var4 !== var2)) { _fun0007_ip = 72; continue _fun0007 }
case 74:
            if(!(!(var4 >= var2))) { _fun0007_ip = 75; continue _fun0007 }
case 76:
            if(var1) { _fun0007_ip = 77; continue _fun0007 }
case 78:
            var4 = _closure1_slot8;
            var4 = var4.height;
            _fun0007_ip = 79; continue _fun0007;
case 77:
            var2 = _closure1_slot10;
            var4 = var2.height;
case 79:
            var2 = global;
            var7 = var2.Math;
            var6 = var7.max;
            var5 = var3.width;
            var2 = var3.height;
            var5 = var5 / var2;
            var2 = 0.5;
            var2 = var6.bind(var7)(var2, var5);
            var2 = var4 * var2;
            _fun0007_ip = 80; continue _fun0007;
case 75:
            if(var1) { _fun0007_ip = 81; continue _fun0007 }
case 82:
            var5 = _closure1_slot8;
            var5 = var5.width;
            _fun0007_ip = 83; continue _fun0007;
case 81:
            var6 = _closure1_slot10;
            var5 = var6.width;
case 83:
            var6 = global;
            var8 = var6.Math;
            var7 = var8.max;
            var6 = var3.height;
            var3 = var3.width;
            var6 = var6 / var3;
            var3 = 0.5;
            var3 = var7.bind(var8)(var3, var6);
            var4 = var5 * var3;
            var2 = var5;
            _fun0007_ip = 80; continue _fun0007;
case 72:
            if(var1) { _fun0007_ip = 53; continue _fun0007 }
case 20:
            var1 = _closure1_slot9;
            _fun0007_ip = 22; continue _fun0007;
case 53:
            var1 = _closure1_slot10;
case 22:
            var2 = var1.width;
            var4 = var1.height;
case 80:
            var1 = {};
            var1['width'] = var2;
            var1['height'] = var4;
            var3 = arg4;
            var2 = var4;
            if(!var3) { _fun0007_ip = 84; continue _fun0007 }
case 21:
            var3 = 2;
            var4 = var3 * var4;
            var3 = _closure1_slot5;
            var2 = var4 + var3;
case 84:
            var1['containerHeight'] = var2;
            return var1;
        }
    };
    var3['computePIPSize'] = var9;
    var9 = function computePIPParticipantToShow(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var12 = var3.channelId;
            var8 = var3.panelMode;
            var13 = var3.lastParticipantId;
            var10 = var3.speakingUserId;
            var14 = var3.focusedParticipantId;
            var9 = var3.blockList;
            var1 = undefined;
            if(!(var9 === var1)) { _fun0008_ip = 77; continue _fun0008 }
case 2:
            var9 = _closure1_slot14;
case 77:
            var7 = var3.showSecondaryPIP;
            var5 = _closure1_slot4;
            var3 = var5.getId;
            var5 = var3.bind(var5)();
            var6 = null;
            var11 = var6 != var14;
            var3 = undefined;
            if(!var11) { _fun0008_ip = 85; continue _fun0008 }
case 86:
            var15 = _closure1_slot2;
            var11 = var15.getParticipant;
            var3 = var11.bind(var15)(var12, var14);
case 85:
            var11 = _closure1_slot6;
            var11 = var11.PANEL;
            if(!(var8 === var11)) { _fun0008_ip = 87; continue _fun0008 }
case 82:
            if(!(var6 != var3)) { _fun0008_ip = 88; continue _fun0008 }
case 87:
            var11 = _closure1_slot6;
            var11 = var11.PANEL;
            if(!(var8 === var11)) { _fun0008_ip = 89; continue _fun0008 }
case 90:
            if(!(var6 != var14)) { _fun0008_ip = 89; continue _fun0008 }
case 91:
            var11 = var6 == var3;
            var15 = undefined;
            if(var11) { _fun0008_ip = 48; continue _fun0008 }
case 92:
            var15 = var3.type;
case 48:
            var11 = _closure1_slot11;
            var11 = var11.STREAM;
            if(!(var15 === var11)) { _fun0008_ip = 89; continue _fun0008 }
case 16:
            var11 = var6 == var3;
            var15 = undefined;
            if(var11) { _fun0008_ip = 93; continue _fun0008 }
case 94:
            var15 = var3.userVideo;
case 93:
            var11 = true;
            if(!(var11 === var15)) { _fun0008_ip = 89; continue _fun0008 }
case 95:
            var15 = var9.has;
            var11 = var3.user;
            var11 = var11.id;
            var11 = var15.bind(var9)(var11);
            if(var11) { _fun0008_ip = 89; continue _fun0008 }
case 96:
            var16 = _closure1_slot2;
            var15 = var16.getParticipant;
            var11 = var3.user;
            var11 = var11.id;
            var15 = var15.bind(var16)(var12, var11);
            if(!(var6 != var15)) { _fun0008_ip = 89; continue _fun0008 }
case 97:
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var11 = 7;
            var11 = var17[var11];
            var16 = var16.bind(var1)(var11);
            var11 = var16.canRenderParticipantVideo;
            var11 = var11.bind(var16)(var15);
            if(!var11) { _fun0008_ip = 89; continue _fun0008 }
case 98:
            var11 = {};
            var15 = var15.id;
            var11['id'] = var15;
            var15 = _closure1_slot11;
            var15 = var15.USER;
            var11['type'] = var15;
            return var11;
case 89:
            if(!(var6 != var14)) { _fun0008_ip = 99; continue _fun0008 }
case 100:
            if(!(var6 != var3)) { _fun0008_ip = 99; continue _fun0008 }
case 101:
            var11 = var9.has;
            var11 = var11.bind(var9)(var14);
            if(var11) { _fun0008_ip = 99; continue _fun0008 }
case 102:
            var11 = {};
            var11['id'] = var14;
            var14 = var3.type;
            var11['type'] = var14;
            return var11;
case 99:
            var11 = var6 == var3;
            var14 = undefined;
            if(var11) { _fun0008_ip = 103; continue _fun0008 }
case 104:
            var14 = var3.type;
case 103:
            var11 = _closure1_slot11;
            var11 = var11.ACTIVITY;
            if(!(var14 !== var11)) { _fun0008_ip = 105; continue _fun0008 }
case 106:
            if(var7) { _fun0008_ip = 105; continue _fun0008 }
case 107:
            var11 = _closure1_slot26;
            var14 = _closure1_slot2;
            var7 = var14.getActivityParticipants;
            var7 = var7.bind(var14)(var12);
            var14 = var11.bind(var1)(var7);
            var11 = var14.bind(var1)();
            var7 = var11.done;
            if(var7) { _fun0008_ip = 105; continue _fun0008 }
case 66:
            var15 = var11.value;
            var17 = var15.participants;
            var16 = var17.some;
            var7 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isActivityParticipantCurrentUserCurrentSession;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var16.bind(var17)(var7);
            if(!var7) { _fun0008_ip = 108; continue _fun0008 }
case 109:
            var16 = var9.has;
            var7 = var15.id;
            var7 = var16.bind(var9)(var7);
            if(var7) { _fun0008_ip = 108; continue _fun0008 }
case 110:
            var7 = {};
            var16 = var15.id;
            var7['id'] = var16;
            var15 = var15.type;
            var7['type'] = var15;
            return var7;
case 108:
            var15 = var14.bind(var1)();
            var7 = var15.done;
            var11 = var15;
            if(!var7) { _fun0008_ip = 66; continue _fun0008 }
case 105:
            var11 = _closure1_slot26;
            var14 = _closure1_slot2;
            var7 = var14.getStreamParticipants;
            var7 = var7.bind(var14)(var12);
            var14 = var11.bind(var1)(var7);
            var11 = var14.bind(var1)();
            var7 = var11.done;
            if(var7) { _fun0008_ip = 111; continue _fun0008 }
case 112:
            var15 = var11.value;
            var16 = var9.has;
            var7 = var15.id;
            var7 = var16.bind(var9)(var7);
            if(var7) { _fun0008_ip = 113; continue _fun0008 }
case 114:
            var18 = _closure1_slot3;
            var17 = var18.getActiveStreamForUser;
            var7 = var15.user;
            var16 = var7.id;
            var7 = var15.stream;
            var7 = var7.guildId;
            var7 = var17.bind(var18)(var16, var7);
            if(!(var6 != var7)) { _fun0008_ip = 113; continue _fun0008 }
case 115:
            var7 = {};
            var16 = var15.id;
            var7['id'] = var16;
            var15 = var15.type;
            var7['type'] = var15;
            return var7;
case 113:
            var15 = var14.bind(var1)();
            var7 = var15.done;
            var11 = var15;
            if(!var7) { _fun0008_ip = 112; continue _fun0008 }
case 111:
            if(!(var6 != var10)) { _fun0008_ip = 116; continue _fun0008 }
case 117:
            var7 = var9.has;
            var7 = var7.bind(var9)(var10);
            if(var7) { _fun0008_ip = 116; continue _fun0008 }
case 118:
            var11 = _closure1_slot2;
            var7 = var11.getParticipant;
            var7 = var7.bind(var11)(var12, var10);
            if(!(var6 != var7)) { _fun0008_ip = 116; continue _fun0008 }
case 119:
            var7 = {};
            var7['id'] = var10;
            var10 = _closure1_slot11;
            var10 = var10.USER;
            var7['type'] = var10;
            return var7;
case 116:
            var10 = var6 != var13;
            var7 = undefined;
            if(!var10) { _fun0008_ip = 120; continue _fun0008 }
case 121:
            var11 = _closure1_slot2;
            var10 = var11.getParticipant;
            var7 = var10.bind(var11)(var12, var13);
case 120:
            if(!(var6 != var7)) { _fun0008_ip = 122; continue _fun0008 }
case 123:
            var11 = var9.has;
            var10 = var7.id;
            var10 = var11.bind(var9)(var10);
            if(var10) { _fun0008_ip = 122; continue _fun0008 }
case 124:
            var11 = var7.type;
            var10 = _closure1_slot11;
            var10 = var10.STREAM;
            if(!(var10 !== var11)) { _fun0008_ip = 125; continue _fun0008 }
case 126:
            var10 = _closure1_slot11;
            var10 = var10.ACTIVITY;
            if(!(var10 !== var11)) { _fun0008_ip = 127; continue _fun0008 }
case 128:
            var10 = _closure1_slot11;
            var10 = var10.USER;
            if(!(var10 === var11)) { _fun0008_ip = 122; continue _fun0008 }
case 129:
            var10 = {};
            var11 = var7.id;
            var10['id'] = var11;
            var11 = var7.type;
            var10['type'] = var11;
            return var10;
case 127:
            var11 = var7.participants;
            var10 = var11.some;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isActivityParticipantCurrentUserCurrentSession;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var10.bind(var11)(var2);
            if(!var2) { _fun0008_ip = 122; continue _fun0008 }
case 130:
            var2 = {};
            var10 = var7.id;
            var2['id'] = var10;
            var10 = var7.type;
            var2['type'] = var10;
            return var2;
case 125:
            var13 = _closure1_slot3;
            var11 = var13.getActiveStreamForUser;
            var2 = var7.user;
            var10 = var2.id;
            var2 = var7.stream;
            var2 = var2.guildId;
            var2 = var11.bind(var13)(var10, var2);
            if(!(var6 != var2)) { _fun0008_ip = 122; continue _fun0008 }
case 131:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var2 = 7;
            var2 = var11[var2];
            var10 = var10.bind(var1)(var2);
            var2 = var10.canRenderParticipantVideo;
            var2 = var2.bind(var10)(var7);
            if(!var2) { _fun0008_ip = 122; continue _fun0008 }
case 132:
            var2 = {};
            var10 = var7.id;
            var2['id'] = var10;
            var7 = var7.type;
            var2['type'] = var7;
            return var2;
case 122:
            var7 = _closure1_slot2;
            var2 = var7.getParticipant;
            var7 = var2.bind(var7)(var12, var5);
            var2 = var9.has;
            var2 = var2.bind(var9)(var5);
            if(var2) { _fun0008_ip = 133; continue _fun0008 }
case 134:
            if(!(var6 != var7)) { _fun0008_ip = 133; continue _fun0008 }
case 135:
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var2 = 7;
            var2 = var11[var2];
            var10 = var10.bind(var1)(var2);
            var2 = var10.canRenderParticipantVideo;
            var2 = var2.bind(var10)(var7);
            if(!var2) { _fun0008_ip = 133; continue _fun0008 }
case 136:
            var2 = {};
            var2['id'] = var5;
            var10 = _closure1_slot11;
            var10 = var10.USER;
            var2['type'] = var10;
            return var2;
case 133:
            var10 = _closure1_slot26;
            var11 = _closure1_slot2;
            var2 = var11.getVideoParticipants;
            var2 = var2.bind(var11)(var12);
            var12 = var10.bind(var1)(var2);
            var10 = var12.bind(var1)();
            var2 = var10.done;
            var11 = 7;
            if(var2) { _fun0008_ip = 137; continue _fun0008 }
case 138:
            var13 = var10.value;
            var14 = var9.has;
            var2 = var13.id;
            var2 = var14.bind(var9)(var2);
            if(var2) { _fun0008_ip = 139; continue _fun0008 }
case 140:
            var14 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var11];
            var14 = var14.bind(var1)(var2);
            var2 = var14.canRenderParticipantVideo;
            var2 = var2.bind(var14)(var13);
            if(!var2) { _fun0008_ip = 139; continue _fun0008 }
case 141:
            var2 = {};
            var14 = var13.id;
            var2['id'] = var14;
            var13 = var13.type;
            var2['type'] = var13;
            return var2;
case 139:
            var13 = var12.bind(var1)();
            var2 = var13.done;
            var10 = var13;
            if(!var2) { _fun0008_ip = 138; continue _fun0008 }
case 137:
            var2 = var9.has;
            var9 = var2.bind(var9)(var5);
            var2 = undefined;
            if(var9) { _fun0008_ip = 142; continue _fun0008 }
case 143:
            var7 = var6 == var7;
            var2 = undefined;
            if(var7) { _fun0008_ip = 142; continue _fun0008 }
case 144:
            var7 = _closure1_slot6;
            var7 = var7.PANEL;
            if(!(var8 === var7)) { _fun0008_ip = 145; continue _fun0008 }
case 146:
            var7 = var6 == var3;
            var6 = undefined;
            if(var7) { _fun0008_ip = 147; continue _fun0008 }
case 148:
            var6 = var3.type;
case 147:
            var3 = _closure1_slot11;
            var3 = var3.ACTIVITY;
            var2 = undefined;
            if(!(var6 === var3)) { _fun0008_ip = 142; continue _fun0008 }
case 145:
            var3 = {};
            var3['id'] = var5;
            var4 = _closure1_slot11;
            var4 = var4.USER;
            var3['type'] = var4;
            var2 = var3;
case 142:
            return var2;
case 88:
            return var1;
        }
    };
    var3['computePIPParticipantToShow'] = var9;
    var8 = function getPIPMode(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var2 = arg1;
            var9 = var2.channelId;
            var1 = var2.connected;
            var8 = var2.manuallyFocusedId;
            var4 = var2.mode;
            var5 = var2.selfHasVideo;
            var2 = undefined;
            if(var1) { _fun0009_ip = 149; continue _fun0009 }
case 76:
            return var2;
case 149:
            var6 = null;
            var1 = var6 != var8;
            var3 = undefined;
            if(!var1) { _fun0009_ip = 150; continue _fun0009 }
case 5:
            var7 = _closure1_slot2;
            var1 = var7.getParticipant;
            var3 = var1.bind(var7)(var9, var8);
case 150:
            var7 = _closure1_slot6;
            var7 = var7.PANEL;
            if(!(var4 === var7)) { _fun0009_ip = 57; continue _fun0009 }
case 151:
            if(!(var6 != var3)) { _fun0009_ip = 57; continue _fun0009 }
case 152:
            var8 = var3.type;
            var7 = _closure1_slot11;
            var7 = var7.ACTIVITY;
            if(!(var8 !== var7)) { _fun0009_ip = 153; continue _fun0009 }
case 82:
            var8 = var3.type;
            var7 = _closure1_slot11;
            var7 = var7.STREAM;
            if(!(var8 === var7)) { _fun0009_ip = 154; continue _fun0009 }
case 155:
            var7 = var3.userVideo;
            if(!var7) { _fun0009_ip = 154; continue _fun0009 }
case 156:
            var8 = _closure1_slot0;
            var10 = _closure1_slot1;
            var7 = 7;
            var7 = var10[var7];
            var8 = var8.bind(var2)(var7);
            var7 = var8.canRenderParticipantVideo;
            var12 = _closure1_slot2;
            var11 = var12.getParticipant;
            var10 = var3.user;
            var10 = var10.id;
            var10 = var11.bind(var12)(var9, var10);
            var11 = var6 != var10;
            var6 = undefined;
            if(!var11) { _fun0009_ip = 157; continue _fun0009 }
case 158:
            var6 = var10;
case 157:
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0009_ip = 63; continue _fun0009 }
case 154:
            if(var5) { _fun0009_ip = 159; continue _fun0009 }
case 96:
            return var2;
case 159:
            var7 = var3.id;
            var8 = _closure1_slot4;
            var6 = var8.getId;
            var6 = var6.bind(var8)();
            if(!(var7 === var6)) { _fun0009_ip = 160; continue _fun0009 }
case 161:
            var7 = _closure1_slot26;
            var8 = _closure1_slot2;
            var6 = var8.getVideoParticipants;
            var6 = var6.bind(var8)(var9);
            var9 = var7.bind(var2)(var6);
            var7 = var9.bind(var2)();
            var6 = var7.done;
            var8 = 7;
            if(var6) { _fun0009_ip = 162; continue _fun0009 }
case 163:
            var11 = var7.value;
            var10 = var11.id;
            var12 = _closure1_slot4;
            var6 = var12.getId;
            var6 = var6.bind(var12)();
            if(!(var10 !== var6)) { _fun0009_ip = 164; continue _fun0009 }
case 100:
            var10 = _closure1_slot0;
            var6 = _closure1_slot1;
            var6 = var6[var8];
            var10 = var10.bind(var2)(var6);
            var6 = var10.canRenderParticipantVideo;
            var6 = var6.bind(var10)(var11);
            if(var6) { _fun0009_ip = 103; continue _fun0009 }
case 164:
            var10 = var9.bind(var2)();
            var6 = var10.done;
            var7 = var10;
            if(var6) { _fun0009_ip = 162; continue _fun0009 }
case 165:
            _fun0009_ip = 163; continue _fun0009;
case 103:
            var6 = _closure1_slot7;
            var6 = var6.IN_PANEL;
            return var6;
case 162:
            if(!var5) { _fun0009_ip = 57; continue _fun0009 }
case 166:
            var5 = var3.id;
            var6 = _closure1_slot4;
            var3 = var6.getId;
            var3 = var3.bind(var6)();
            if(!(var5 === var3)) { _fun0009_ip = 167; continue _fun0009 }
case 57:
            var3 = _closure1_slot6;
            var3 = var3.PIP;
            var2 = undefined;
            if(!(var4 === var3)) { _fun0009_ip = 168; continue _fun0009 }
case 169:
            var3 = _closure1_slot7;
            var2 = var3.IN_APP;
case 168:
            return var2;
case 167:
            var2 = _closure1_slot7;
            var2 = var2.IN_PANEL;
            return var2;
case 160:
            var2 = _closure1_slot7;
            var2 = var2.IN_PANEL;
            return var2;
case 63:
            var2 = _closure1_slot7;
            var2 = var2.IN_PANEL;
            return var2;
case 153:
            var1 = _closure1_slot7;
            var1 = var1.IN_PANEL;
            return var1;
        }
    };
    var3['getPIPMode'] = var8;
    var3['getPIPWindowDimensions'] = var7;
    var3['pipXYtoAbsoluteXY'] = var6;
    var3['getClampedPIPPosition'] = var5;
    var3['calculatePIPPositionFromVelocity'] = var4;
    var3['getVoicePanelPIPBorderRadius'] = var2;
    return var1;
})();
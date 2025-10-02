// app/modules/user_settings/native/appearance/hooks/getGradientStartPont.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = {};
    var4 = 'function getHorizontalOrVerticalStartPoint_getGradientStartPontTsx1(angle,width,height){switch(angle){case 0:return[-width/2,0];case 90:return[0,-height/2];case 180:return[width/2,0];default:return[0,height/2];}}';
    var1['code'] = var4;
    var _closure1_slot0 = var1;
    var4 = function() {
        var1 = function getHorizontalOrVerticalStartPoint(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = 0;
                if(!(var2 !== var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var4 = 90;
                if(!(var4 !== var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var4 = 180;
                if(!(var4 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var4 = 2;
                var5 = var3 / var4;
                var4 = [0];
                var4[1] = var5;
                return var4;
case 6:
                var4 = 2;
                var5 = var1 / var4;
                var4 = new Array(2);
                var4[0] = var5;
                var4[1] = var2;
                return var4;
case 4:
                var4 = -var3;
                var3 = 2;
                var4 = var4 / var3;
                var3 = [0];
                var3[1] = var4;
                return var3;
case 2:
                var3 = -var1;
                var1 = 2;
                var3 = var3 / var1;
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 16439230263550.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot0;
        var1['__initData'] = var2;
        return var1;
    };
    var1 = undefined;
    var7 = var4.bind(var1)();
    var _closure1_slot1 = var7;
    var4 = {};
    var5 = 'function getStartCornerToIntersect_getGradientStartPontTsx2(angle,width,height){const w=width/2;const h=height/2;if(angle<90){return[-w,-h];}else if(angle<180){return[w,-h];}else if(angle<270){return[w,h];}else{return[-w,h];}}';
    var4['code'] = var5;
    var _closure1_slot2 = var4;
    var4 = function() {
        var1 = function getStartCornerToIntersect(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                var3 = 2;
                var4 = var1 / var3;
                var1 = arg3;
                var3 = var1 / var3;
                var1 = 90;
                if(!(!(var2 < var1))) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = 180;
                if(!(!(var2 < var1))) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var1 = 270;
                if(!(!(var2 < var1))) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                var1 = new Array(2);
                var2 = -var4;
                var1[0] = var2;
                var1[1] = var3;
                _fun0002_ip = 14; continue _fun0002;
case 12:
                var2 = new Array(2);
                var2[0] = var4;
                var2[1] = var3;
                var1 = var2;
case 14:
                _fun0002_ip = 15; continue _fun0002;
case 10:
                var2 = new Array(2);
                var2[0] = var4;
                var5 = -var3;
                var2[1] = var5;
                var1 = var2;
case 15:
                _fun0002_ip = 16; continue _fun0002;
case 8:
                var2 = new Array(2);
                var4 = -var4;
                var2[0] = var4;
                var3 = -var3;
                var2[1] = var3;
                var1 = var2;
case 16:
                return var1;
            }
        };
        var2 = {};
        var1['__closure'] = var2;
        var2 = 2348332324573.0;
        var1['__workletHash'] = var2;
        var2 = _closure1_slot2;
        var1['__initData'] = var2;
        return var1;
    };
    var6 = var4.bind(var1)();
    var _closure1_slot3 = var6;
    var4 = {};
    var5 = 'function getGradientStartPoint_getGradientStartPontTsx3(angle,width,height){const{getHorizontalOrVerticalStartPoint,getStartCornerToIntersect}=this.__closure;angle=angle%360;if(angle<0){angle+=360;}if(angle%90===0){return getHorizontalOrVerticalStartPoint(angle,width,height);}const slope=Math.tan(angle*Math.PI/180);const perpendicularSlope=-1/slope;const startCorner=getStartCornerToIntersect(angle,width,height);const b=startCorner[1]-perpendicularSlope*startCorner[0];const startX=b/(slope-perpendicularSlope);const startY=slope*startX;return[startX,startY];}';
    var4['code'] = var5;
    var2 = function t(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg2;
            var4 = arg3;
            var1 = arg1;
            var2 = 360;
            var1 = var1 % var2;
            var8 = 0;
            var3 = var1;
            if(!(var3 < var8)) { _fun0003_ip = 17; continue _fun0003 }
case 18:
            var3 = var1 + var2;
case 17:
            var1 = 90;
            var1 = var3 % var1;
            if(!(var1 !== var8)) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var1 = global;
            var6 = var1.Math;
            var2 = var6.tan;
            var1 = var1.Math;
            var1 = var1.PI;
            var7 = var3 * var1;
            var1 = 180;
            var1 = var7 / var1;
            var6 = var2.bind(var6)(var1);
            var1 = -1;
            var1 = var1 / var6;
            var7 = _closure1_slot3;
            var2 = undefined;
            var2 = var7.bind(var2)(var3, var5, var4);
            var7 = 1;
            var7 = var2[var7];
            var2 = var2[var8];
            var2 = var1 * var2;
            var2 = var7 - var2;
            var1 = var6 - var1;
            var2 = var2 / var1;
            var1 = new Array(2);
            var1[0] = var2;
            var2 = var6 * var2;
            var1[1] = var2;
            return var1;
case 19:
            var2 = _closure1_slot1;
            var1 = undefined;
            var1 = var2.bind(var1)(var3, var5, var4);
            return var1;
        }
    };
    var5 = {};
    var5['getHorizontalOrVerticalStartPoint'] = var7;
    var5['getStartCornerToIntersect'] = var6;
    var2['__closure'] = var5;
    var5 = 11244204401624.0;
    var2['__workletHash'] = var5;
    var2['__initData'] = var4;
    var5 = dependencyMap;
    var4 = 0;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/appearance/hooks/getGradientStartPont.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
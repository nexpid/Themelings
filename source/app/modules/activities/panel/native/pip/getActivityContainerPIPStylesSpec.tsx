// app/modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var10 = var4.OrientationLockState;
    var _closure1_slot2 = var10;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.LANDSCAPE_ACTIVITY_ASPECT_RATIO;
    var _closure1_slot3 = var8;
    var4 = {};
    var7 = 'function getActivityContainerPipStylesSpec_getActivityContainerPIPStylesSpecTsx1({pipWidth:pipWidth,pipHeight:pipHeight,pipOrientationLockState:pipOrientationLockState,isLandscape:isLandscape}){const{OrientationLockState,LANDSCAPE_ACTIVITY_ASPECT_RATIO,roundToNearestPixel}=this.__closure;const nonNullPipOrientationLockState=pipOrientationLockState!==null&&pipOrientationLockState!==void 0?pipOrientationLockState:OrientationLockState.UNLOCKED;const shouldUsePortraitAspectRatio=nonNullPipOrientationLockState===OrientationLockState.PORTRAIT||nonNullPipOrientationLockState===OrientationLockState.UNLOCKED&&!isLandscape;let width=pipWidth;let height=pipHeight;let shouldHorizontallyCenter=false;let shouldVerticallyCenter=false;let marginLeft=0;let marginTop=0;if(shouldUsePortraitAspectRatio){width=pipWidth;height=width*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldVerticallyCenter=true;marginTop=roundToNearestPixel(height/2)*-1;}else{height=pipHeight;width=height*LANDSCAPE_ACTIVITY_ASPECT_RATIO;shouldHorizontallyCenter=true;marginLeft=roundToNearestPixel(width/2)*-1;}return{width:width,height:height,shouldHorizontallyCenter:shouldHorizontallyCenter,shouldVerticallyCenter:shouldVerticallyCenter,marginLeft:marginLeft,marginTop:marginTop};}';
    var4['code'] = var7;
    var2 = function t(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.pipWidth;
            var6 = var1.pipHeight;
            var4 = var1.pipOrientationLockState;
            var2 = var1.isLandscape;
            var1 = null;
            if(!(var1 == var4)) { _fun0001_ip = 46; continue _fun0001 }
 33:
            var1 = _closure1_slot2;
            var4 = var1.UNLOCKED;
 46:
            var3 = _closure1_slot2;
            var3 = var3.PORTRAIT;
            if(!(var4 !== var3)) { _fun0001_ip = 137; continue _fun0001 }
 63:
            var3 = _closure1_slot2;
            var3 = var3.UNLOCKED;
            if(!(var4 === var3)) { _fun0001_ip = 80; continue _fun0001 }
 77:
            if(!var2) { _fun0001_ip = 137; continue _fun0001 }
 80:
            var2 = _closure1_slot3;
            var7 = var6 * var2;
            var5 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var4 = undefined;
            var3 = var5.bind(var4)(var3);
            var2 = var7 / var2;
            var3 = var3.bind(var4)(var2);
            var2 = -1;
            var3 = var2 * var3;
            var5 = true;
            var4 = false;
            var2 = 0;
            _fun0001_ip = 198; continue _fun0001;
 137:
            var8 = _closure1_slot3;
            var11 = var12 * var8;
            var10 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var8 = var8[var1];
            var9 = undefined;
            var8 = var10.bind(var9)(var8);
            var1 = var11 / var1;
            var8 = var8.bind(var9)(var1);
            var1 = -1;
            var2 = var1 * var8;
            var5 = false;
            var4 = true;
            var3 = 0;
            var7 = var12;
            var6 = var11;
 198:
            var1 = {};
            var1['width'] = var7;
            var1['height'] = var6;
            var1['shouldHorizontallyCenter'] = var5;
            var1['shouldVerticallyCenter'] = var4;
            var1['marginLeft'] = var3;
            var1['marginTop'] = var2;
            return var1;
        }
    };
    var7 = {};
    var7['OrientationLockState'] = var10;
    var7['LANDSCAPE_ACTIVITY_ASPECT_RATIO'] = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var7['roundToNearestPixel'] = var8;
    var2['__closure'] = var7;
    var7 = 7141745103186.0;
    var2['__workletHash'] = var7;
    var2['__initData'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/pip/getActivityContainerPIPStylesSpec.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
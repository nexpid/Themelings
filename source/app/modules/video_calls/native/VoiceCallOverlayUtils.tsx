// app/modules/video_calls/native/VoiceCallOverlayUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var3 = exports;
    var7 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var9 = var4.MIN_MARGIN_BETWEEN_OVERLAYS;
    var _closure1_slot2 = var9;
    var11 = var4.VoiceCallOverlayType;
    var _closure1_slot3 = var11;
    var4 = {};
    var5 = 'function VoiceCallOverlayUtilsTsx1(rectA,rectB,minMarginBetweenOverlays){if(rectA==null||rectA.x==null||rectA.y==null||rectA.width==null||rectA.height==null||rectB==null||rectB.x==null||rectB.y==null||rectB.width==null||rectB.height==null){return false;}const minAx=rectA.x-minMarginBetweenOverlays;const maxAx=rectA.x+rectA.width+minMarginBetweenOverlays;const minAy=rectA.y-minMarginBetweenOverlays;const maxAy=rectA.y+rectA.height+minMarginBetweenOverlays;const minBx=rectB.x;const maxBx=rectB.x+rectB.width;const minBy=rectB.y;const maxBy=rectB.y+rectB.height;const aLeftOfB=maxAx<minBx;const aRightOfB=minAx>maxBx;const aBelowB=minAy>maxBy;const aAboveB=maxAy<minBy;return!(aLeftOfB||aRightOfB||aAboveB||aBelowB);}';
    var4['code'] = var5;
    var10 = function t(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var4 = arg3;
            var5 = null;
            if(!(var5 != var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.x;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var3 = var1.y;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 5:
            var3 = var1.width;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var3 = var1.height;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 7:
            if(!(var5 != var2)) { _fun0001_ip = 2; continue _fun0001 }
case 8:
            var3 = var2.x;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 9:
            var3 = var2.y;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 10:
            var3 = var2.width;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 11:
            var3 = var2.height;
            if(!(var5 != var3)) { _fun0001_ip = 2; continue _fun0001 }
case 12:
            var3 = var1.x;
            var7 = var3 - var4;
            var5 = var1.x;
            var3 = var1.width;
            var3 = var5 + var3;
            var8 = var3 + var4;
            var3 = var1.y;
            var3 = var3 - var4;
            var5 = var1.y;
            var1 = var1.height;
            var1 = var5 + var1;
            var5 = var1 + var4;
            var1 = var2.x;
            var6 = var2.x;
            var4 = var2.width;
            var6 = var6 + var4;
            var4 = var2.y;
            var9 = var2.y;
            var2 = var2.height;
            var2 = var9 + var2;
            var1 = var8 < var1;
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var1 = var7 > var6;
case 13:
            if(var1) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var1 = var5 < var4;
case 15:
            if(var1) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var1 = var3 > var2;
case 17:
            var1 = !var1;
            return var1;
case 2:
            var1 = false;
            return var1;
        }
    };
    var5 = {};
    var10['__closure'] = var5;
    var5 = 16149528537623.0;
    var10['__workletHash'] = var5;
    var10['__initData'] = var4;
    var _closure1_slot4 = var10;
    var5 = {};
    var4 = 'function VoiceCallOverlayUtilsTsx2(voiceCallOverlayLayoutStates,voiceCallOverlayType,targetRectangle){const{VoiceCallOverlayType,doRectanglesIntersectWorklet,MIN_MARGIN_BETWEEN_OVERLAYS}=this.__closure;switch(voiceCallOverlayType){case VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}case VoiceCallOverlayType.CAMERA_PREVIEW_PICTURE_IN_PICTURE:{if(!voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON].isVisible){return false;}const doRectanglesIntersect=doRectanglesIntersectWorklet(targetRectangle,voiceCallOverlayLayoutStates[VoiceCallOverlayType.VOICE_CONTROLS_TOGGLE_BUTTON],MIN_MARGIN_BETWEEN_OVERLAYS);if(doRectanglesIntersect){return true;}break;}}return false;}';
    var5['code'] = var4;
    var4 = function l(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = arg2;
            var5 = arg3;
            var2 = _closure1_slot3;
            var2 = var2.VOICE_CONTROLS_TOGGLE_BUTTON;
            if(!(var2 !== var4)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var2 = _closure1_slot3;
            var2 = var2.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            if(!(var2 === var4)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = _closure1_slot3;
            var2 = var2.VOICE_CONTROLS_TOGGLE_BUTTON;
            var2 = var3[var2];
            var2 = var2.isVisible;
            if(var2) { _fun0002_ip = 23; continue _fun0002 }
case 7:
            var2 = false;
            return var2;
case 23:
            var7 = _closure1_slot4;
            var2 = _closure1_slot3;
            var2 = var2.VOICE_CONTROLS_TOGGLE_BUTTON;
            var6 = var3[var2];
            var4 = _closure1_slot2;
            var2 = undefined;
            var2 = var7.bind(var2)(var5, var6, var4);
            if(!var2) { _fun0002_ip = 21; continue _fun0002 }
case 24:
            var2 = true;
            return var2;
case 19:
            var2 = _closure1_slot3;
            var2 = var2.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            var2 = var3[var2];
            var2 = var2.isVisible;
            if(var2) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var2 = false;
            return var2;
case 25:
            var4 = _closure1_slot4;
            var2 = _closure1_slot3;
            var2 = var2.CAMERA_PREVIEW_PICTURE_IN_PICTURE;
            var3 = var3[var2];
            var2 = _closure1_slot2;
            var1 = undefined;
            var1 = var4.bind(var1)(var5, var3, var2);
            if(var1) { _fun0002_ip = 27; continue _fun0002 }
case 21:
            var1 = false;
            return var1;
case 27:
            var1 = true;
            return var1;
        }
    };
    var8 = {};
    var8['VoiceCallOverlayType'] = var11;
    var8['doRectanglesIntersectWorklet'] = var10;
    var8['MIN_MARGIN_BETWEEN_OVERLAYS'] = var9;
    var4['__closure'] = var8;
    var8 = 10902657864288.0;
    var4['__workletHash'] = var8;
    var4['__initData'] = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/video_calls/native/VoiceCallOverlayUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['doesTargetPositionIntersectOtherOverlaysWorklet'] = var4;
    var4 = function updateVoiceCallOverlayLayoutState(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'VOICE_CALL_OVERLAY_LAYOUT_STATE_UPDATE';
        var2['type'] = var5;
        var5 = arg1;
        var2['voiceCallOverlayType'] = var5;
        var5 = arg2;
        var2['voiceCallOverlayLayoutState'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['updateVoiceCallOverlayLayoutState'] = var4;
    var2 = function setPipEnabledWhileFocusedOnActivityOrStream(arg1) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'VOICE_CALL_SET_PIP_ENABLED_FOR_ACTIVITY_OR_STREAM';
        var2['type'] = var5;
        var5 = arg1;
        var2['pipEnabledWhileFocusedOnActivityOrStream'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['setPipEnabledWhileFocusedOnActivityOrStream'] = var2;
    return var1;
})();
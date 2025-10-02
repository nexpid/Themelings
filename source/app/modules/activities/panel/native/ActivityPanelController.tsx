// app/modules/activities/panel/native/ActivityPanelController.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function useActivityOrientationState(arg1) {
        var1 = arg1;
        var10 = var1.isConnected;
        var _closure2_slot0 = var10;
        var9 = var1.selectedMode;
        var _closure2_slot1 = var9;
        var4 = var1.isVoicePanelFullscreen;
        var _closure2_slot2 = var4;
        var6 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 15;
        var5 = var5[var1];
        var1 = undefined;
        var8 = var6.bind(var1)(var5);
        var7 = var8.useStateFromStoresObject;
        var5 = _closure1_slot9;
        var6 = new Array(1);
        var6[0] = var5;
        var5 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = _closure1_slot9;
                var1 = var2.getCurrentEmbeddedActivity;
                var1 = var1.bind(var2)();
                var4 = null;
                var2 = var4 == var1;
                var6 = undefined;
                if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = var1.applicationId;
case 2:
                var1 = {};
                var1['applicationId'] = var6;
                if(!(var4 != var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var5 = _closure1_slot9;
                var2 = var5.getOrientationLockStateForApp;
                var2 = var2.bind(var5)(var6);
                if(!(var4 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 4:
                var3 = _closure1_slot10;
                var2 = var3.UNLOCKED;
case 6:
                var1['activityOrientationLockState'] = var2;
                return var1;
            }
        };
        var5 = var7.bind(var8)(var6, var5);
        var11 = var5.applicationId;
        var8 = var5.activityOrientationLockState;
        var _closure2_slot3 = var8;
        var7 = _closure1_slot4;
        var6 = var7.useLayoutEffect;
        var5 = new Array(5);
        var5[0] = var11;
        var5[1] = var10;
        var5[2] = var9;
        var5[3] = var8;
        var5[4] = var4;
        var4 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = _closure2_slot2;
                if(var1) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var4 = _closure2_slot1;
                var3 = _closure1_slot13;
                var3 = var3.PANEL;
                if(!(var4 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = _closure2_slot1;
                var3 = _closure1_slot13;
                var3 = var3.LAUNCHING_WITH_ORIENTATION_CHANGE;
                if(!(var4 === var3)) { _fun0002_ip = 11; continue _fun0002 }
case 9:
                var3 = _closure2_slot0;
                if(!var3) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var3 = _closure2_slot3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = undefined;
                var5 = var5.bind(var4)(var2);
                var2 = var5.isIpadOS;
                var2 = var2.bind(var5)();
                if(var2) { _fun0002_ip = 7; continue _fun0002 }
case 13:
                var2 = _closure1_slot10;
                var2 = var2.UNLOCKED;
                if(!(var2 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var2 = _closure1_slot10;
                var2 = var2.PORTRAIT;
                if(!(var2 !== var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var2 = _closure1_slot10;
                var2 = var2.LANDSCAPE;
                if(!(var2 === var3)) { _fun0002_ip = 7; continue _fun0002 }
case 18:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.lockOrientation;
                var3 = 'LANDSCAPE';
                var2 = true;
                var2 = var5.bind(var6)(var3, var2);
                _fun0002_ip = 7; continue _fun0002;
case 16:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.lockOrientation;
                var3 = 'PORTRAIT';
                var2 = true;
                var2 = var5.bind(var6)(var3, var2);
                _fun0002_ip = 7; continue _fun0002;
case 14:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 12;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.unlockOrientation;
                var2 = {};
                var5 = true;
                var2['unlockAfterRotatingToPreviousLock'] = var5;
                var2 = var3.bind(var4)(var2);
                _fun0002_ip = 7; continue _fun0002;
case 11:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.restoreDefaultOrientation;
                var1 = var1.bind(var2)();
case 7:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var5 = _closure1_slot4;
        var4 = var5.useLayoutEffect;
        var3 = function() {
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.restoreDefaultOrientation;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.OrientationLockState;
    var _closure1_slot10 = var7;
    var7 = var4.ACTIVITY_PORTRAIT_ASPECT_RATIO;
    var _closure1_slot11 = var7;
    var4 = var4.ACTIVITY_LANDSCAPE_ASPECT_RATIO;
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot14 = var4;
    var4 = 10;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.cachedFunction;
    var4 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = arg2;
            var7 = arg3;
            var6 = var1.width;
            var5 = var1.height;
            var2 = var6 > var5;
            var1 = _closure1_slot10;
            var1 = var1.LANDSCAPE;
            if(!(var1 !== var7)) { _fun0003_ip = 19; continue _fun0003 }
case 5:
            var1 = _closure1_slot10;
            var1 = var1.PORTRAIT;
            if(!(var1 !== var7)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var1 = _closure1_slot10;
            var1 = var1.UNLOCKED;
            var1 = {};
            var1['width'] = var6;
            var7 = var5;
            if(var2) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var7 = var5 - var4;
case 22:
            var1['height'] = var7;
            var1['isLandscape'] = var2;
            var7 = false;
            var1['isLetterboxed'] = var7;
            var1['isWindowLandscape'] = var2;
            return var1;
case 20:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var7 = var7[var1];
            var1 = undefined;
            var7 = var8.bind(var1)(var7);
            var1 = var7.isIpadOS;
            var1 = var1.bind(var7)();
            if(!var1) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            if(var2) { _fun0003_ip = 26; continue _fun0003 }
case 24:
            var1 = {'width': null, 'height': null, 'isLandscape': false, 'isLetterboxed': false, 'isWindowLandscape': false};
            var7 = global;
            var9 = var7.Math;
            var8 = var9.min;
            var8 = var8.bind(var9)(var6, var5);
            var1['width'] = var8;
            var8 = var7.Math;
            var7 = var8.max;
            var7 = var7.bind(var8)(var5, var6);
            var7 = var7 - var4;
            var1['height'] = var7;
            _fun0003_ip = 27; continue _fun0003;
case 26:
            var7 = {};
            var8 = _closure1_slot11;
            var8 = var5 * var8;
            var7['width'] = var8;
            var7['height'] = var5;
            var8 = false;
            var7['isLandscape'] = var8;
            var8 = true;
            var7['isLetterboxed'] = var8;
            var7['isWindowLandscape'] = var2;
            var1 = var7;
case 27:
            return var1;
case 19:
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 11;
            var7 = var7[var1];
            var1 = undefined;
            var7 = var8.bind(var1)(var7);
            var1 = var7.isIpadOS;
            var1 = var1.bind(var7)();
            if(!var1) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            if(var2) { _fun0003_ip = 28; continue _fun0003 }
case 30:
            var1 = {};
            var1['width'] = var6;
            var3 = _closure1_slot12;
            var3 = var6 * var3;
            var3 = var3 - var4;
            var1['height'] = var3;
            var3 = true;
            var1['isLandscape'] = var3;
            var1['isLetterboxed'] = var3;
            var1['isWindowLandscape'] = var2;
            _fun0003_ip = 31; continue _fun0003;
case 28:
            var2 = {'width': null, 'height': null, 'isLetterboxed': false, 'isLandscape': true, 'isWindowLandscape': true};
            var3 = global;
            var7 = var3.Math;
            var4 = var7.max;
            var4 = var4.bind(var7)(var6, var5);
            var2['width'] = var4;
            var4 = var3.Math;
            var3 = var4.min;
            var3 = var3.bind(var4)(var5, var6);
            var2['height'] = var3;
            var1 = var2;
case 31:
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = {};
    var7 = 'function ActivityPanelControllerTsx1(){const{wrapperOffset}=this.__closure;return wrapperOffset.get().gestureActive;}';
    var4['code'] = var7;
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function ActivityPanelControllerTsx2(gestureActive,previous){const{runOnJS,setWrapperGestureInProgress}=this.__closure;if(gestureActive===previous)return;runOnJS(setWrapperGestureInProgress)(gestureActive);}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 32;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ActivityPanelController(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.children;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var14 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 16;
            var3 = var9[var3];
            var3 = var14.bind(var4)(var3);
            var6 = var3.bind(var4)();
            var3 = 17;
            var3 = var9[var3];
            var3 = var14.bind(var4)(var3);
            var16 = var3.bind(var4)();
            var7 = _closure1_slot0;
            var3 = 15;
            var8 = var9[var3];
            var12 = var7.bind(var4)(var8);
            var11 = var12.useStateFromStores;
            var8 = _closure1_slot9;
            var10 = new Array(1);
            var10[0] = var8;
            var8 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getActivityPanelMode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var13 = var11.bind(var12)(var10, var8);
            var _closure2_slot0 = var13;
            var8 = 14;
            var10 = var9[var8];
            var12 = var7.bind(var4)(var10);
            var11 = var12.useSharedValue;
            var10 = {'x': 4294967295, 'y': 4294967295};
            var11 = var11.bind(var12)(var10);
            var _closure2_slot1 = var11;
            var10 = 18;
            var10 = var9[var10];
            var10 = var14.bind(var4)(var10);
            var12 = var10.bind(var4)(var6);
            var _closure2_slot2 = var12;
            var8 = var9[var8];
            var15 = var7.bind(var4)(var8);
            var10 = var15.useSharedValue;
            var8 = {'x': 0, 'y': 0, 'gestureActive': false};
            var8 = var10.bind(var15)(var8);
            var _closure2_slot3 = var8;
            var15 = _closure1_slot4;
            var10 = var15.useRef;
            var10 = var10.bind(var15)(var13);
            var _closure2_slot4 = var10;
            var10 = 19;
            var10 = var9[var10];
            var10 = var14.bind(var4)(var10);
            var10 = var10.bind(var4)();
            var _closure2_slot5 = var10;
            var3 = var9[var3];
            var15 = var7.bind(var4)(var3);
            var14 = var15.useStateFromStoresObject;
            var3 = _closure1_slot9;
            var9 = new Array(2);
            var9[0] = var3;
            var3 = _closure1_slot5;
            var9[1] = var3;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot9;
                    var1 = var2.getConnectedActivityLocation;
                    var9 = var1.bind(var2)();
                    var2 = _closure1_slot9;
                    var1 = var2.getSelfEmbeddedActivityForLocation;
                    var8 = var1.bind(var2)(var9);
                    var4 = null;
                    var1 = var4 == var8;
                    var2 = undefined;
                    var7 = undefined;
                    if(var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                    var7 = var8.applicationId;
case 32:
                    var1 = var4 != var7;
                    var6 = undefined;
                    if(!var1) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                    var5 = _closure1_slot5;
                    var1 = var5.getApplication;
                    var6 = var1.bind(var5)(var7);
case 34:
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 20;
                    var1 = var10[var1];
                    var5 = var5.bind(var2)(var1);
                    var1 = var5.getEmbeddedActivityLocationChannelId;
                    var1 = var1.bind(var5)(var9);
                    var5 = var4 == var1;
                    var9 = undefined;
                    if(var5) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 21;
                    var5 = var11[var5];
                    var5 = var10.bind(var2)(var5);
                    var5 = var5.bind(var2)(var1);
                    var9 = undefined;
                    if(var5) { _fun0005_ip = 36; continue _fun0005 }
case 24:
                    var9 = var1;
case 36:
                    var1 = var4 == var6;
                    var5 = undefined;
                    if(var1) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var5 = var6.id;
case 38:
                    var1 = {};
                    var1['connectedActivityInTextChannelId'] = var9;
                    var1['connectedActivity'] = var8;
                    var1['connectedActivityAppId'] = var7;
                    var1['currentApp'] = var6;
                    var4 = var4 == var5;
                    var2 = undefined;
                    if(var4) { _fun0005_ip = 40; continue _fun0005 }
case 16:
                    var4 = _closure1_slot9;
                    var3 = var4.getOrientationLockStateForApp;
                    var2 = var3.bind(var4)(var5);
case 40:
                    var1['focusedOrientationLockState'] = var2;
                    return var1;
                }
            };
            var3 = new Array(0);
            var7 = var14.bind(var15)(var9, var7, var3);
            var3 = var7.connectedActivityInTextChannelId;
            var _closure2_slot6 = var3;
            var15 = var7.connectedActivity;
            var19 = var7.connectedActivityAppId;
            var _closure2_slot7 = var19;
            var18 = var7.currentApp;
            var7 = var7.focusedOrientationLockState;
            var14 = null;
            if(!(var14 == var7)) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 22;
            var9 = var20[var9];
            var17 = var17.bind(var4)(var9);
            var9 = var17.getDefaultOrientationLockState;
            var7 = var9.bind(var17)(var18);
case 41:
            _closure2_slot8 = var7;
            var9 = _closure1_slot15;
            var6 = var6.top;
            var9 = var9.bind(var4)(var16, var6, var7);
            _closure2_slot9 = var9;
            var16 = _closure1_slot4;
            var6 = var16.useRef;
            var6 = var6.bind(var16)(var19);
            _closure2_slot10 = var6;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var6 = 23;
            var6 = var18[var6];
            var16 = var17.bind(var4)(var6);
            var6 = var16.useIsVoicePanelFullscreen;
            var6 = var6.bind(var16)();
            var20 = _closure1_slot1;
            var16 = 24;
            var16 = var18[var16];
            var16 = var20.bind(var4)(var16);
            var16 = var16.bind(var4)();
            var16 = 25;
            var16 = var18[var16];
            var18 = var17.bind(var4)(var16);
            var17 = var18.useNavigatorBackPressHandler;
            var16 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = _closure1_slot13;
                    var1 = var1.PANEL;
                    var1 = var3 === var1;
                    if(!var1) { _fun0006_ip = 6; continue _fun0006 }
case 43:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.updateActivityPanelMode;
                    var2 = _closure1_slot13;
                    var2 = var2.PIP;
                    var2 = var3.bind(var4)(var2);
                    var1 = true;
case 6:
                    return var1;
                }
            };
            var16 = var17.bind(var18)(var16);
            var18 = _closure1_slot4;
            var17 = var18.useEffect;
            var16 = new Array(4);
            var16[0] = var19;
            var16[1] = var7;
            var16[2] = var13;
            var7 = var9.isWindowLandscape;
            var16[3] = var7;
            var7 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0007_ip = 44; continue _fun0007 }
case 8:
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    if(!(var3 != var2)) { _fun0007_ip = 45; continue _fun0007 }
case 44:
                    var2 = _closure2_slot7;
                    if(!(var3 == var2)) { _fun0007_ip = 32; continue _fun0007 }
case 46:
                    var2 = _closure2_slot10;
                    var2 = var2.current;
                    if(!(var3 == var2)) { _fun0007_ip = 47; continue _fun0007 }
case 32:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot13;
                    var3 = var3.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    var3 = var4 === var3;
                    if(!var3) { _fun0007_ip = 48; continue _fun0007 }
case 34:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 27;
                    var4 = var6[var4];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var4);
                    var4 = _closure2_slot9;
                    var5 = var4.isWindowLandscape;
                    var4 = _closure2_slot8;
                    var3 = var6.bind(var7)(var5, var4);
case 48:
                    if(!var3) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.updateActivityPanelMode;
                    var2 = _closure1_slot13;
                    var2 = var2.PANEL;
                    var2 = var3.bind(var4)(var2);
                    _fun0007_ip = 49; continue _fun0007;
case 47:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 26;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.updateActivityPanelMode;
                    var2 = _closure1_slot13;
                    var2 = var2.DISCONNECTED;
                    var2 = var3.bind(var4)(var2);
                    _fun0007_ip = 49; continue _fun0007;
case 45:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 27;
                    var3 = var5[var3];
                    var5 = undefined;
                    var6 = var4.bind(var5)(var3);
                    var3 = _closure2_slot9;
                    var4 = var3.isWindowLandscape;
                    var3 = _closure2_slot8;
                    var3 = var6.bind(var5)(var4, var3);
                    if(var3) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 11;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isIpadOS;
                    var3 = var3.bind(var4)();
                    if(var3) { _fun0007_ip = 51; continue _fun0007 }
case 53:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 26;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var4 = var6.updateActivityPanelMode;
                    var3 = _closure1_slot13;
                    var3 = var3.LAUNCHING_WITH_ORIENTATION_CHANGE;
                    var3 = var4.bind(var6)(var3);
                    _fun0007_ip = 49; continue _fun0007;
case 51:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 26;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.updateActivityPanelMode;
                    var2 = _closure1_slot13;
                    var2 = var2.PANEL;
                    var2 = var3.bind(var4)(var2);
case 49:
                    var2 = _closure2_slot10;
                    var1 = _closure2_slot7;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var18)(var7, var16);
            var18 = _closure1_slot4;
            var17 = var18.useEffect;
            var16 = new Array(1);
            var16[0] = var13;
            var7 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot13;
                    var3 = var3.PANEL;
                    var3 = var4 === var3;
                    if(!var3) { _fun0008_ip = 32; continue _fun0008 }
case 43:
                    var4 = _closure2_slot4;
                    var5 = var4.current;
                    var4 = _closure1_slot13;
                    var4 = var4.PANEL;
                    var3 = var5 !== var4;
case 32:
                    if(!var3) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.dismissKeyboard;
                    var2 = var2.bind(var3)();
case 54:
                    var2 = _closure2_slot4;
                    var1 = _closure2_slot0;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var17.bind(var18)(var7, var16);
            var16 = _closure1_slot18;
            var7 = {};
            var17 = var14 != var15;
            var7['isConnected'] = var17;
            var7['selectedMode'] = var13;
            var7['isVoicePanelFullscreen'] = var6;
            var7 = var16.bind(var4)(var7);
            var7 = {};
            var16 = var14 != var15;
            var7['isActivityConnected'] = var16;
            var14 = var14 != var15;
            if(!var14) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var15 = _closure1_slot13;
            var15 = var15.PANEL;
            var14 = var13 === var15;
case 56:
            var7['isActivityFocused'] = var14;
            var7['isVoicePanelFullscreen'] = var6;
            var6 = function useSafeAreaLock(arg1) {
                var2 = arg1;
                var7 = var2.isActivityConnected;
                var _closure3_slot0 = var7;
                var6 = var2.isActivityFocused;
                var _closure3_slot1 = var6;
                var5 = var2.isVoicePanelFullscreen;
                var _closure3_slot2 = var5;
                var4 = _closure1_slot4;
                var3 = var4.useId;
                var8 = var3.bind(var4)();
                var _closure3_slot3 = var8;
                var4 = _closure1_slot4;
                var3 = var4.useLayoutEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var2 = _closure3_slot2;
                        var1 = undefined;
                        if(var2) { _fun0009_ip = 23; continue _fun0009 }
case 58:
                        var3 = _closure3_slot0;
                        var2 = undefined;
                        if(!var3) { _fun0009_ip = 59; continue _fun0009 }
case 60:
                        var4 = _closure1_slot7;
                        var3 = var4.getState;
                        var5 = var3.bind(var4)();
                        var4 = var5.requestSafeAreaDisableLock;
                        var3 = {};
                        var7 = _closure3_slot3;
                        var3['key'] = var7;
                        var6 = _closure3_slot1;
                        var3['lockEnabled'] = var6;
                        var3 = var4.bind(var5)(var3);
                        var2 = function() {
                            var2 = _closure1_slot7;
                            var1 = var2.getState;
                            var3 = var1.bind(var2)();
                            var2 = var3.requestSafeAreaDisableLock;
                            var1 = {};
                            var4 = _closure3_slot3;
                            var1['key'] = var4;
                            var4 = false;
                            var1['lockEnabled'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
case 59:
                        return var2;
case 23:
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var6 = var6.bind(var4)(var7);
            var14 = _closure1_slot4;
            var7 = var14.useEffect;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot13;
                    var3 = var3.PANEL;
                    if(!(var4 === var3)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                    var4 = _closure1_slot8;
                    var3 = var4.getChannel;
                    var1 = _closure2_slot6;
                    var1 = var3.bind(var4)(var1);
                    var4 = undefined;
                    if(!(var4 !== var1)) { _fun0010_ip = 61; continue _fun0010 }
case 63:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 29;
                    var3 = var5[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.selectChannel;
                    var3 = {};
                    var8 = var1.guild_id;
                    var3['guildId'] = var8;
                    var8 = var1.id;
                    var3['channelId'] = var8;
                    var3 = var6.bind(var7)(var3);
                    var3 = _closure1_slot0;
                    var2 = 30;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.transitionToChannel;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
case 61:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var14)(var3, var6);
            var3 = function useAppFreeze(arg1) {
                var11 = arg1;
                var _closure3_slot0 = var11;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 13;
                var4 = var15[var1];
                var1 = undefined;
                var5 = var14.bind(var1)(var4);
                var4 = var5.useIsActivityPanelFullscreen;
                var8 = var4.bind(var5)();
                var _closure3_slot1 = var8;
                var6 = _closure1_slot4;
                var5 = var6.useState;
                var4 = false;
                var6 = var5.bind(var6)(var4);
                var5 = _closure1_slot3;
                var4 = 2;
                var5 = var5.bind(var1)(var6, var4);
                var4 = 0;
                var7 = var5[var4];
                var _closure3_slot2 = var7;
                var4 = 1;
                var12 = var5[var4];
                var _closure3_slot3 = var12;
                var5 = _closure1_slot4;
                var4 = var5.useId;
                var6 = var4.bind(var5)();
                var _closure3_slot4 = var6;
                var13 = 14;
                var4 = var15[var13];
                var10 = var14.bind(var1)(var4);
                var9 = var10.useAnimatedReaction;
                var5 = function u() {
                    var2 = _closure3_slot0;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var1 = var1.gestureActive;
                    return var1;
                };
                var4 = {};
                var4['wrapperOffset'] = var11;
                var5['__closure'] = var4;
                var4 = 5299695936442.0;
                var5['__workletHash'] = var4;
                var4 = _closure1_slot16;
                var5['__initData'] = var4;
                var4 = function s(arg1, arg2) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var1 = arg2;
                        if(!(var3 !== var1)) { _fun0011_ip = 21; continue _fun0011 }
case 64:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var1 = var2[var1];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var1);
                        var4 = var5.runOnJS;
                        var1 = _closure3_slot3;
                        var1 = var4.bind(var5)(var1);
                        var1 = var1.bind(var2)(var3);
case 21:
                        var1 = undefined;
                        return var1;
                    }
                };
                var11 = {};
                var13 = var15[var13];
                var13 = var14.bind(var1)(var13);
                var13 = var13.runOnJS;
                var11['runOnJS'] = var13;
                var11['setWrapperGestureInProgress'] = var12;
                var4['__closure'] = var11;
                var11 = 5831467313798.0;
                var4['__workletHash'] = var11;
                var11 = _closure1_slot17;
                var4['__initData'] = var11;
                var4 = var9.bind(var10)(var5, var4);
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var7;
                var3[2] = var6;
                var2 = function() {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var2 = _closure1_slot6;
                        var1 = var2.getState;
                        var3 = var1.bind(var2)();
                        var2 = var3.requestFreezeLock;
                        var1 = {};
                        var5 = _closure3_slot1;
                        if(!var5) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                        var5 = _closure3_slot2;
case 65:
                        var1['lockEnabled'] = var5;
                        var4 = _closure3_slot4;
                        var1['key'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = function() {
                            var2 = _closure1_slot6;
                            var1 = var2.getState;
                            var3 = var1.bind(var2)();
                            var2 = var3.requestFreezeLock;
                            var1 = {};
                            var4 = false;
                            var1['lockEnabled'] = var4;
                            var4 = _closure3_slot4;
                            var1['key'] = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var3 = var3.bind(var4)(var8);
            var7 = _closure1_slot4;
            var6 = var7.useMemo;
            var3 = new Array(6);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var11;
            var3[3] = var10;
            var3[4] = var9;
            var3[5] = var8;
            var2 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['mode'] = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 26;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.updateActivityPanelMode;
                var1['setMode'] = var3;
                var3 = _closure2_slot9;
                var1['wrapperDimensions'] = var3;
                var3 = _closure2_slot1;
                var1['pipState'] = var3;
                var3 = _closure2_slot2;
                var1['pipAvoidanceSpecs'] = var3;
                var3 = _closure2_slot3;
                var1['wrapperOffset'] = var3;
                var2 = _closure2_slot5;
                var1['useActivityWebViewLock'] = var2;
                return var1;
            };
            var6 = var6.bind(var7)(var2, var3);
            var3 = _closure1_slot14;
            var2 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 31;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
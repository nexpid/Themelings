// app/modules/haptics/HapticUtils.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var1 = function getAndroidLightImpactEffect() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = global;
            var3 = var1.parseInt;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 3;
            var1 = var2[var1];
            var2 = undefined;
            var4 = var4.bind(var2)(var1);
            var1 = var4.getSystemVersion;
            var1 = var1.bind(var4)();
            var2 = var3.bind(var2)(var1);
            var1 = 29;
            var2 = var2 < var1;
            var1 = 'effectTick';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = 'impactLight';
case 2:
            return var1;
        }
    };
    var _closure1_slot3 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 4;
    var4 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var4);
    var7 = var8.fileFinishedImporting;
    var4 = 'modules/haptics/HapticUtils.native.tsx';
    var4 = var7.bind(var8)(var4);
    var4 = 0;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var3['HapticFeedbackTypes'] = var4;
    var2 = function triggerHapticFeedback(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 0;
            var2 = var1[var6];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            if(!(var2 !== var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.IMPACT_MEDIUM;
            if(!(var2 !== var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.IMPACT_HEAVY;
            if(!(var2 !== var3)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.NOTIFICATION_ERROR;
            if(!(var2 !== var3)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_START;
            if(!(var2 !== var3)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_END;
            if(!(var2 !== var3)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_MOVE;
            if(!(var2 !== var3)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.SOFT;
            if(!(var2 !== var3)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.SELECTION;
            if(!(var2 !== var3)) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.RIGID;
            if(!(var2 !== var3)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.NOTIFICATION_SUCCESS;
            if(!(var2 !== var3)) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.NOTIFICATION_WARNING;
            if(!(var2 !== var3)) { _fun0002_ip = 26; continue _fun0002 }
case 27:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.CONFIRM;
            if(!(var2 !== var3)) { _fun0002_ip = 28; continue _fun0002 }
case 29:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.REJECT;
            if(!(var2 !== var3)) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.GESTURE_START;
            if(!(var2 !== var3)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.GESTURE_END;
            if(!(var2 !== var3)) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.SEGMENT_TICK;
            if(!(var2 !== var3)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.SEGMENT_FREQUENT_TICK;
            if(!(var2 !== var3)) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.TOGGLE_ON;
            if(!(var2 !== var3)) { _fun0002_ip = 40; continue _fun0002 }
case 41:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.TOGGLE_OFF;
            if(!(var2 !== var3)) { _fun0002_ip = 42; continue _fun0002 }
case 43:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.CLOCK_TICK;
            if(!(var2 !== var3)) { _fun0002_ip = 44; continue _fun0002 }
case 45:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.CONTEXT_CLICK;
            if(!(var2 !== var3)) { _fun0002_ip = 46; continue _fun0002 }
case 47:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.KEYBOARD_PRESS;
            if(!(var2 !== var3)) { _fun0002_ip = 48; continue _fun0002 }
case 49:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.KEYBOARD_RELEASE;
            if(!(var2 !== var3)) { _fun0002_ip = 50; continue _fun0002 }
case 51:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.KEYBOARD_TAP;
            if(!(var2 !== var3)) { _fun0002_ip = 52; continue _fun0002 }
case 53:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.LONG_PRESS;
            if(!(var2 !== var3)) { _fun0002_ip = 54; continue _fun0002 }
case 55:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.TEXT_HANDLE_MOVE;
            if(!(var2 !== var3)) { _fun0002_ip = 56; continue _fun0002 }
case 57:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.VIRTUAL_KEY;
            if(!(var2 !== var3)) { _fun0002_ip = 58; continue _fun0002 }
case 59:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.VIRTUAL_KEY_RELEASE;
            if(!(var2 !== var3)) { _fun0002_ip = 60; continue _fun0002 }
case 61:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.EFFECT_CLICK;
            if(!(var2 !== var3)) { _fun0002_ip = 62; continue _fun0002 }
case 63:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.EFFECT_DOUBLE_CLICK;
            if(!(var2 !== var3)) { _fun0002_ip = 64; continue _fun0002 }
case 65:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.EFFECT_HEAVY_CLICK;
            if(!(var2 !== var3)) { _fun0002_ip = 66; continue _fun0002 }
case 67:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.EFFECT_TICK;
            if(!(var2 === var3)) { _fun0002_ip = 68; continue _fun0002 }
case 69:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'effectTick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 66:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'effectHeavyClick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 64:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'effectDoubleClick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 62:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'effectClick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 60:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'virtualKeyRelease';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 58:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'virtualKey';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 56:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'textHandleMove';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 54:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'longPress';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 52:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'keyboardTap';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 50:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'keyboardRelease';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 48:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'keyboardPress';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 46:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'contextClick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 44:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'clockTick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 42:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'toggleOff';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 40:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'toggleOn';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 38:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'segmentFrequentTick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 36:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'segmentTick';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 34:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'gestureEnd';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 32:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'gestureStart';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 30:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'reject';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 28:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'confirm';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 26:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'notificationWarning';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 24:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'notificationSuccess';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 22:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'rigid';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 20:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var6.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'selection';
            if(!var6) { _fun0002_ip = 70; continue _fun0002 }
case 71:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
case 70:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 18:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'soft';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var6.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'impactMedium';
            if(!var6) { _fun0002_ip = 72; continue _fun0002 }
case 73:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
case 72:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 14:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var6.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'notificationSuccess';
            if(!var6) { _fun0002_ip = 74; continue _fun0002 }
case 75:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
case 74:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var6.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'impactHeavy';
            if(!var6) { _fun0002_ip = 76; continue _fun0002 }
case 77:
            var2 = 'impactMedium';
case 76:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 10:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'notificationError';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 8:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'impactHeavy';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var6.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'impactMedium';
            if(!var6) { _fun0002_ip = 78; continue _fun0002 }
case 79:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
case 78:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 68; continue _fun0002;
case 4:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var6.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'selection';
            if(!var6) { _fun0002_ip = 80; continue _fun0002 }
case 81:
            var5 = _closure1_slot3;
            var2 = var5.bind(var1)();
case 80:
            var2 = var3.bind(var4)(var2);
case 68:
            return var1;
        }
    };
    var3['triggerHapticFeedback'] = var2;
    return var1;
})();
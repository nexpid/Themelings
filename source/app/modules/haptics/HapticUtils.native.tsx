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
case 2:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.IMPACT_HEAVY;
            if(!(var2 !== var3)) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.NOTIFICATION_ERROR;
            if(!(var2 !== var3)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_START;
            if(!(var2 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_END;
            if(!(var2 !== var3)) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_MOVE;
            if(!(var2 === var3)) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var6 = _closure1_slot0;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'impactMedium';
            if(!var6) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
case 17:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 15; continue _fun0002;
case 13:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var6 = _closure1_slot0;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'notificationSuccess';
            if(!var6) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
case 19:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 15; continue _fun0002;
case 11:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var6 = _closure1_slot0;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'impactHeavy';
            if(!var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var2 = 'impactMedium';
case 21:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 15; continue _fun0002;
case 9:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'notificationError';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 15; continue _fun0002;
case 7:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'impactHeavy';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 15; continue _fun0002;
case 6:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var6 = _closure1_slot0;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'impactMedium';
            if(!var6) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
case 23:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 15; continue _fun0002;
case 4:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 1;
            var2 = var7[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var6 = _closure1_slot0;
            var2 = 2;
            var2 = var7[var2];
            var6 = var6.bind(var1)(var2);
            var2 = var6.isAndroid;
            var6 = var2.bind(var6)();
            var2 = 'selection';
            if(!var6) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var5 = _closure1_slot3;
            var2 = var5.bind(var1)();
case 25:
            var2 = var3.bind(var4)(var2);
case 15:
            return var1;
        }
    };
    var3['triggerHapticFeedback'] = var2;
    return var1;
})();
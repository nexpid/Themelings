// app/modules/haptics/HapticUtils.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var5 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var1 = function getAndroidLightImpactEffect() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!var2) { _fun0001_ip = 70; continue _fun0001 }
 64:
            var1 = 'impactLight';
 70:
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
 0:
            var3 = arg1;
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var6 = 0;
            var2 = var1[var6];
            var1 = undefined;
            var2 = var4.bind(var1)(var2);
            var2 = var2.IMPACT_LIGHT;
            if(!(var2 !== var3)) { _fun0002_ip = 608; continue _fun0002 }
 40:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.IMPACT_MEDIUM;
            if(!(var2 !== var3)) { _fun0002_ip = 533; continue _fun0002 }
 70:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.IMPACT_HEAVY;
            if(!(var2 !== var3)) { _fun0002_ip = 491; continue _fun0002 }
 100:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.NOTIFICATION_ERROR;
            if(!(var2 !== var3)) { _fun0002_ip = 449; continue _fun0002 }
 130:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_START;
            if(!(var2 !== var3)) { _fun0002_ip = 373; continue _fun0002 }
 160:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_END;
            if(!(var2 !== var3)) { _fun0002_ip = 295; continue _fun0002 }
 187:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var1)(var2);
            var2 = var2.DRAG_AND_DROP_MOVE;
            if(!(var2 === var3)) { _fun0002_ip = 679; continue _fun0002 }
 217:
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
            if(!var6) { _fun0002_ip = 285; continue _fun0002 }
 277:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
 285:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 679; continue _fun0002;
 295:
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
            if(!var6) { _fun0002_ip = 363; continue _fun0002 }
 355:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
 363:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 679; continue _fun0002;
 373:
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
            if(!var6) { _fun0002_ip = 439; continue _fun0002 }
 433:
            var2 = 'impactMedium';
 439:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 679; continue _fun0002;
 449:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'notificationError';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 679; continue _fun0002;
 491:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.trigger;
            var2 = 'impactHeavy';
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 679; continue _fun0002;
 533:
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
            if(!var6) { _fun0002_ip = 601; continue _fun0002 }
 593:
            var6 = _closure1_slot3;
            var2 = var6.bind(var1)();
 601:
            var2 = var3.bind(var4)(var2);
            _fun0002_ip = 679; continue _fun0002;
 608:
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
            if(!var6) { _fun0002_ip = 674; continue _fun0002 }
 666:
            var5 = _closure1_slot3;
            var2 = var5.bind(var1)();
 674:
            var2 = var3.bind(var4)(var2);
 679:
            return var1;
        }
    };
    var3['triggerHapticFeedback'] = var2;
    return var1;
})();
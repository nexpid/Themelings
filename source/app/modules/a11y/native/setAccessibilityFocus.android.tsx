// app/modules/a11y/native/setAccessibilityFocus.android.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.AccessibilityInfo;
    var _closure1_slot3 = var8;
    var4 = var4.findNodeHandle;
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var7.bind(var1)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var12 = 'setAccessibilityFocus';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/setAccessibilityFocus.android.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function setAccessibilityFocus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var3 = var1.ref;
            var4 = var1.delay;
            var1 = undefined;
            if(!(var4 === var1)) { _fun0001_ip = 24; continue _fun0001 }
 22:
            var4 = 0;
 24:
            var _closure2_slot0 = var1;
            var5 = null;
            if(!(var5 != var3)) { _fun0001_ip = 78; continue _fun0001 }
 34:
            var6 = _closure1_slot4;
            var3 = var3.current;
            var3 = var6.bind(var1)(var3);
            _closure2_slot0 = var3;
            if(!(var5 != var3)) { _fun0001_ip = 78; continue _fun0001 }
 59:
            var3 = global;
            var3 = var3.setTimeout;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 3;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var2);
                    var2 = var4.isFabric;
                    var4 = var2.bind(var4)();
                    if(var4) { _fun0002_ip = 96; continue _fun0002 }
 41:
                    var6 = _closure2_slot0;
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 2;
                    var4 = var7[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.setAccessibilityFocus;
                    var6 = var4.bind(var5)(var6);
                    var5 = var6.catch;
                    var4 = function(arg1) {
                        var4 = _closure1_slot5;
                        var3 = var4.warn;
                        var2 = 'Failed with reason:';
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var4 = var5.bind(var6)(var4);
                    _fun0002_ip = 115; continue _fun0002;
 96:
                    var4 = _closure1_slot3;
                    var3 = var4.setAccessibilityFocus;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
 115:
                    return var1;
                }
            };
            var2 = var3.bind(var1)(var2, var4);
 78:
            return var1;
        }
    };
    var3['setAccessibilityFocus'] = var2;
    return var1;
})();
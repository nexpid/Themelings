// app/modules/labs/LabFeatureActions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = {};
    var _closure1_slot3 = var4;
    var4 = 2;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/labs/LabFeatureActions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function toggleLabFeature(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var2 = arguments[1];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 19; continue _fun0001 }
 12:
            var2 = _closure1_slot3;
 19:
            var5 = var2.enabled;
            if(!(var5 === var1)) { _fun0001_ip = 48; continue _fun0001 }
 28:
            var3 = _closure1_slot2;
            var2 = var3.get;
            var2 = var2.bind(var3)(var6);
            var5 = !var2;
 48:
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'LAB_FEATURE_TOGGLE';
            var2['type'] = var7;
            var2['labFeature'] = var6;
            var2['enabled'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var3['toggleLabFeature'] = var2;
    return var1;
})();
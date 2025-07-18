// app/modules/frames/canLaunchFrame.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
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
    var4 = var4.ApplicationFlags;
    var _closure1_slot2 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/frames/canLaunchFrame.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function canLaunchFrame(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var3 = var4[var3];
            var4 = undefined;
            var5 = var5.bind(var4)(var3);
            var3 = var5.isRealApplication;
            var3 = var3.bind(var5)(var1);
            if(var3) { _fun0001_ip = 46; continue _fun0001 }
 42:
            var3 = false;
            return var3;
 46:
            var1 = var1.flags;
            var3 = null;
            var3 = var3 != var1;
            var7 = 0;
            if(!var3) { _fun0001_ip = 65; continue _fun0001 }
 62:
            var7 = var1;
 65:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var5 = 2;
            var1 = var8[var5];
            var10 = var6.bind(var4)(var1);
            var9 = var10.hasFlag;
            var1 = _closure1_slot2;
            var3 = var1.EMBEDDED;
            var3 = var9.bind(var10)(var7, var3);
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = var6.hasFlag;
            var1 = var1.CONTEXTLESS_ACTIVITY;
            var1 = var5.bind(var6)(var7, var1);
            var3 = !var3;
            if(var3) { _fun0001_ip = 143; continue _fun0001 }
 140:
            var3 = !var1;
 143:
            var1 = !var3;
            if(var3) { _fun0001_ip = 189; continue _fun0001 }
 149:
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.getContextlessFramesExperiment;
            var2 = 'canLaunchFrame';
            var2 = var3.bind(var4)(var2);
            var1 = var2.enabled;
 189:
            return var1;
        }
    };
    var3['canLaunchFrame'] = var2;
    return var1;
})();
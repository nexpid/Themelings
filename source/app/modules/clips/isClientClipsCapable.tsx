// app/modules/clips/isClientClipsCapable.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var4 = var4.Features;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/clips/isClientClipsCapable.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isClientClipsCapable(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arg1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var2.bind(var6)(var1);
            var7 = var1.ClipsExperiment;
            var4 = var7.getCurrentConfig;
            var2 = {};
            var1 = 'isClipsClientCapable';
            var2['location'] = var1;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var4.bind(var7)(var2, var1);
            var1 = var1.ignorePlatformRestriction;
            if(var1) { _fun0001_ip = 143; continue _fun0001 }
 76:
            var4 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.isDesktop;
            var2 = var2.bind(var4)();
            if(!var2) { _fun0001_ip = 140; continue _fun0001 }
 109:
            var4 = var5.getMediaEngine;
            var5 = var4.bind(var5)();
            var4 = var5.supports;
            var3 = _closure1_slot3;
            var3 = var3.CLIPS;
            var2 = var4.bind(var5)(var3);
 140:
            var1 = var2;
 143:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/video_backgrounds/isVideoBackgroundSupported.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Features;
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video_backgrounds/isVideoBackgroundSupported.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function isVideoBackgroundSupported() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arguments[0];
            var1 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 16; continue _fun0001 }
 9:
            var2 = _closure1_slot0;
 16:
            var3 = var2.supports;
            var1 = _closure1_slot1;
            var1 = var1.MEDIAPIPE;
            var1 = var3.bind(var2)(var1);
            var5 = var2;
            if(!var1) { _fun0001_ip = 85; continue _fun0001 }
 46:
            var2 = global;
            var4 = var2.Object;
            var3 = var4.values;
            var2 = var5.getVideoDevices;
            var2 = var2.bind(var5)();
            var2 = var3.bind(var4)(var2);
            var3 = var2.length;
            var2 = 0;
            var1 = var3 > var2;
 85:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
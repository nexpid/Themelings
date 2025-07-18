// discord_common/js/packages/media-engine/native/ui/Camera.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var2 = function Camera(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.disabled;
            var7 = var1.deviceId;
            var6 = var1.width;
            var3 = var1.height;
            var5 = _closure1_slot2;
            if(var2) { _fun0001_ip = 85; continue _fun0001 }
 34:
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 2;
            var1 = var4[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['streamId'] = var7;
            var7 = {};
            var7['width'] = var6;
            var7['height'] = var3;
            var1['style'] = var7;
            var1 = var5.bind(var4)(var2, var1);
            _fun0001_ip = 124; continue _fun0001;
 85:
            var4 = {};
            var2 = 'media-engine-video';
            var4['className'] = var2;
            var2 = {};
            var2['width'] = var6;
            var2['height'] = var3;
            var4['style'] = var2;
            var3 = undefined;
            var2 = 'div';
            var1 = var5.bind(var3)(var2, var4);
 124:
            return var1;
        }
    };
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot2 = var4;
    var4 = {'disabled': false, 'width': 320, 'height': 180};
    var2['defaultProps'] = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/media-engine/native/ui/Camera.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
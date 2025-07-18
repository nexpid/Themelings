// app/modules/main_tabs_v2/native/settings/definitions/SyncReducedMotionWithDeviceSetting.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var7 = var6[var1];
    var2 = native3;
    var1 = undefined;
    var2 = var2.bind(var1)(var7);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.MobileSetting;
    var2 = {};
    var8 = 2;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.RendererType;
    var8 = var8.TOGGLE;
    var2['type'] = var8;
    var8 = function title() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot1;
        var1 = 5;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.St+DJC;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['title'] = var8;
    var7 = var7.ACCESSIBILITY;
    var2['parent'] = var7;
    var7 = function useReducedMotionSyncSettingValue() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var1 = _closure1_slot2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var1 = _closure1_slot2;
            var2 = var1.rawPrefersReducedMotion;
            var1 = 'auto';
            var1 = var1 === var2;
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var2['useValue'] = var7;
    var4 = function onReducedMotionSyncSettingValueChange(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = _closure1_slot2;
            var5 = var2.systemPrefersReducedMotion;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.setPrefersReducedMotion;
            var2 = 'auto';
            var6 = arg1;
            if(var6) { _fun0001_ip = 54; continue _fun0001 }
 51:
            var2 = var5;
 54:
            var2 = var3.bind(var4)(var2);
            return var1;
        }
    };
    var2['onValueChange'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/definitions/SyncReducedMotionWithDeviceSetting.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/profile_effects/native/ProfileEffectPreloadGate.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
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
    var7 = var6[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/native/ProfileEffectPreloadGate.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var1 = arg1;
        var6 = var1.profileEffectConfig;
        var8 = var1.onReady;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 3;
        var2 = var7[var2];
        var4 = undefined;
        var3 = var3.bind(var4)(var2);
        var2 = var6.effects;
        var2 = var3.bind(var4)(var2, var8);
        var3 = var2.pendingRef;
        var _closure2_slot0 = var3;
        var2 = var2.setPending;
        var _closure2_slot1 = var2;
        var3 = _closure1_slot0;
        var2 = 4;
        var2 = var7[var2];
        var2 = var3.bind(var4)(var2);
        var2 = var2.default;
        var _closure2_slot2 = var2;
        var3 = _closure1_slot5;
        var2 = _closure1_slot4;
        var1 = {};
        var7 = var6.effects;
        var6 = var7.map;
        var5 = function(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var5 = _closure1_slot6;
                var2 = _closure1_slot3;
                var4 = var2.Fragment;
                var3 = {};
                var9 = _closure1_slot5;
                var7 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 5;
                var6 = var10[var2];
                var2 = undefined;
                var7 = var7.bind(var2)(var6);
                var6 = {};
                var11 = {};
                var12 = var1.src;
                var11['uri'] = var12;
                var6['source'] = var11;
                var11 = {'opacity': 0, 'position': 'absolute'};
                var6['style'] = var11;
                var11 = function onLoad() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 6;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isAndroid;
                        var2 = var2.bind(var3)();
                        var3 = 0;
                        if(!var2) { _fun0002_ip = 53; continue _fun0002 }
 47:
                        var3 = 500;
 53:
                        var2 = function() {
                            var5 = _closure2_slot1;
                            var3 = _closure2_slot0;
                            var1 = var3.current;
                            var4 = 1;
                            var2 = var1 - var4;
                            var1 = undefined;
                            var2 = var5.bind(var1)(var2);
                            var2 = var3.current;
                            var2 = var2 - var4;
                            var3['current'] = var2;
                            return var1;
                        };
                        var2 = var4.bind(var1)(var2, var3);
                        return var1;
                    }
                };
                var6['onLoad'] = var11;
                var7 = var9.bind(var2)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var9 = _closure1_slot0;
                var7 = 6;
                var7 = var10[var7];
                var9 = var9.bind(var2)(var7);
                var7 = var9.isAndroid;
                var7 = var7.bind(var9)();
                if(!var7) { _fun0001_ip = 196; continue _fun0001 }
 139:
                var10 = _closure1_slot5;
                var9 = _closure2_slot2;
                var8 = {};
                var11 = var1.src;
                var8['name'] = var11;
                var11 = var1.src;
                var8['url'] = var11;
                var11 = {'opacity': 0, 'height': 0, 'width': 0};
                var8['style'] = var11;
                var7 = var10.bind(var2)(var9, var8);
 196:
                var6[1] = var7;
                var3['children'] = var6;
                var9 = var1.src;
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var7 = '';
                var6 = '-';
                var1 = arg2;
                var1 = var8.bind(var7)(var9, var6, var1);
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
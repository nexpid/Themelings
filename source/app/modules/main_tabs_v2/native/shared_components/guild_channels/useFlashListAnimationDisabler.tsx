// app/modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = {};
    var7 = 'function useFlashListAnimationDisablerTsx1(){const{lastId}=this.__closure;return lastId.get();}';
    var4['code'] = var7;
    var _closure1_slot3 = var4;
    var4 = {};
    var7 = 'function useFlashListAnimationDisablerTsx2(current,prev){const{enableAnimation}=this.__closure;if(current!==prev){enableAnimation.set(false);}}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'function useFlashListAnimationDisablerTsx3(finished){const{enableAnimation}=this.__closure;if(finished&&!enableAnimation.get()){enableAnimation.set(true);}}';
    var4['code'] = var7;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/useFlashListAnimationDisabler.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useFlashListAnimationDisabler(arg1) {
        var10 = arg1;
        var _closure2_slot0 = var10;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var4 = 1;
        var3 = var8[var4];
        var6 = undefined;
        var9 = var7.bind(var6)(var3);
        var5 = var9.useSharedValue;
        var3 = false;
        var3 = var5.bind(var9)(var3);
        var _closure2_slot1 = var3;
        var5 = var8[var4];
        var9 = var7.bind(var6)(var5);
        var5 = var9.useSharedValue;
        var9 = var5.bind(var9)(var10);
        var _closure2_slot2 = var9;
        var5 = _closure1_slot2;
        var12 = var5.useEffect;
        var11 = new Array(2);
        var11[0] = var9;
        var11[1] = var10;
        var10 = function() {
            var3 = _closure2_slot2;
            var2 = var3.set;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var10 = var12.bind(var5)(var10, var11);
        var4 = var8[var4];
        var8 = var7.bind(var6)(var4);
        var7 = var8.useAnimatedReaction;
        var6 = function _() {
            var2 = _closure2_slot2;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = {};
        var4['lastId'] = var9;
        var6['__closure'] = var4;
        var4 = 9889142626009.0;
        var6['__workletHash'] = var4;
        var4 = _closure1_slot3;
        var6['__initData'] = var4;
        var4 = function u(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var1 = arg2;
                if(!(var2 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = false;
                var1 = var2.bind(var3)(var1);
case 2:
                var1 = undefined;
                return var1;
            }
        };
        var9 = {};
        var9['enableAnimation'] = var3;
        var4['__closure'] = var9;
        var9 = 6114249067388.0;
        var4['__workletHash'] = var9;
        var9 = _closure1_slot4;
        var4['__initData'] = var9;
        var4 = var7.bind(var8)(var6, var4);
        var4 = var5.useCallback;
        var2 = function b(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = _closure2_slot1;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var1 = !var2;
case 4:
                if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var3 = _closure2_slot1;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
case 6:
                var1 = undefined;
                return var1;
            }
        };
        var6 = {};
        var6['enableAnimation'] = var3;
        var2['__closure'] = var6;
        var6 = 5697261629076.0;
        var2['__workletHash'] = var6;
        var1 = _closure1_slot5;
        var2['__initData'] = var1;
        var1 = new Array(1);
        var1[0] = var3;
        var2 = var4.bind(var5)(var2, var1);
        var1 = new Array(2);
        var1[0] = var3;
        var1[1] = var2;
        return var1;
    };
    var3['useFlashListAnimationDisabler'] = var2;
    return var1;
})();
// app/modules/user_settings/native/two_way_link/useAccountLinkStepTracking.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var6;
    var1 = function _handleStateChange(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var2 = arg2;
            var10 = null;
            if(!(var10 != var7)) { _fun0001_ip = 137; continue _fun0001 }
 15:
            var1 = var7.index;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 2;
            var4 = var6[var4];
            var8 = undefined;
            var6 = var5.bind(var8)(var4);
            var5 = var6.track;
            var3 = _closure1_slot3;
            var4 = var3.ACCOUNT_LINK_STEP;
            var3 = {};
            var9 = arg4;
            var3['location_stack'] = var9;
            var9 = var2.current;
            var9 = var10 != var9;
            if(!var9) { _fun0001_ip = 97; continue _fun0001 }
 82:
            var10 = var7.routeNames;
            var9 = var2.current;
            var8 = var10[var9];
 97:
            var3['previous_step'] = var8;
            var7 = var7.routeNames;
            var7 = var7[var1];
            var3['current_step'] = var7;
            var7 = arg3;
            var3['platform_type'] = var7;
            var3 = var5.bind(var6)(var4, var3);
            var2['current'] = var1;
 137:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/two_way_link/useAccountLinkStepTracking.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAccountLinkStepTracking(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot2;
        var3 = var5.useRef;
        var1 = null;
        var1 = var3.bind(var5)(var1);
        var _closure2_slot2 = var1;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var1 = function(arg1) {
            var6 = _closure1_slot4;
            var9 = _closure2_slot2;
            var8 = _closure2_slot0;
            var7 = _closure2_slot1;
            var1 = undefined;
            var10 = arg1;
            var11 = undefined;
            var2 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var1 = var4.bind(var5)(var1, var3);
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var2 = function() {
            var6 = _closure1_slot4;
            var5 = {};
            var1 = 0;
            var5['index'] = var1;
            var1 = ['landing'];
            var5['routeNames'] = var1;
            var9 = _closure2_slot2;
            var8 = _closure2_slot0;
            var7 = _closure2_slot1;
            var1 = undefined;
            var11 = undefined;
            var10 = var5;
            var2 = var11[var6](var10, var9, var8, var7, var6);
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useAccountLinkStepTracking'] = var2;
    return var1;
})();
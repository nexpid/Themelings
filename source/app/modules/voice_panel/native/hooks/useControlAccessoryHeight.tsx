// app/modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx
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
    var4 = {};
    var7 = 'function useControlAccessoryHeightTsx1(){const{consoleStatusHeight,floatingCTAHeight}=this.__closure;return consoleStatusHeight.get()+floatingCTAHeight.get();}';
    var4['code'] = var7;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/hooks/useControlAccessoryHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useControlAccessoryHeight() {
        var12 = _closure1_slot3;
        var6 = var12.useContext;
        var3 = _closure1_slot1;
        var8 = _closure1_slot2;
        var2 = 1;
        var2 = var8[var2];
        var5 = undefined;
        var2 = var3.bind(var5)(var2);
        var2 = var6.bind(var12)(var2);
        var10 = var2.channelId;
        var2 = 2;
        var2 = var8[var2];
        var2 = var3.bind(var5)(var2);
        var2 = var2.bind(var5)(var10);
        var6 = var2.isConnectingOrConnectedToConsole;
        var _closure2_slot0 = var6;
        var3 = _closure1_slot0;
        var2 = 3;
        var7 = var8[var2];
        var9 = var3.bind(var5)(var7);
        var7 = var9.useSharedValue;
        var11 = 0;
        var7 = var7.bind(var9)(var11);
        var _closure2_slot1 = var7;
        var13 = var12.useEffect;
        var9 = new Array(2);
        var9[0] = var7;
        var9[1] = var6;
        var6 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = _closure2_slot1;
                var2 = var3.set;
                var4 = _closure2_slot0;
                var1 = 0;
                if(!var4) { _fun0001_ip = 52; continue _fun0001 }
 21:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 4;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var1 = var4.CONSOLE_STATUS_HEIGHT;
 52:
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var6 = var13.bind(var12)(var6, var9);
        var6 = 5;
        var6 = var8[var6];
        var9 = var3.bind(var5)(var6);
        var6 = var9.useShouldShowFloatingCTA;
        var9 = var6.bind(var9)(var10);
        var _closure2_slot2 = var9;
        var6 = var8[var2];
        var10 = var3.bind(var5)(var6);
        var6 = var10.useSharedValue;
        var6 = var6.bind(var10)(var11);
        var _closure2_slot3 = var6;
        var11 = var12.useEffect;
        var10 = new Array(2);
        var10[0] = var6;
        var10[1] = var9;
        var9 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot3;
                var2 = var3.set;
                var4 = _closure2_slot2;
                var1 = 0;
                if(!var4) { _fun0002_ip = 52; continue _fun0002 }
 21:
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var4 = 6;
                var5 = var5[var4];
                var4 = undefined;
                var4 = var6.bind(var4)(var5);
                var1 = var4.FLOATING_CTA_TOTAL_VIEW_HEIGHT;
 52:
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var9 = var11.bind(var12)(var9, var10);
        var2 = var8[var2];
        var3 = var3.bind(var5)(var2);
        var2 = var3.useDerivedValue;
        var1 = function l() {
            var3 = _closure2_slot1;
            var2 = var3.get;
            var2 = var2.bind(var3)();
            var3 = _closure2_slot3;
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var1 = var2 + var1;
            return var1;
        };
        var5 = {};
        var5['consoleStatusHeight'] = var7;
        var5['floatingCTAHeight'] = var6;
        var1['__closure'] = var5;
        var5 = 7974849446653.0;
        var1['__workletHash'] = var5;
        var4 = _closure1_slot4;
        var1['__initData'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
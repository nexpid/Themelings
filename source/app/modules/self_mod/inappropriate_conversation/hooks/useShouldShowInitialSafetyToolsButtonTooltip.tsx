// app/modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx
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
    var7 = var6[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/self_mod/inappropriate_conversation/hooks/useShouldShowInitialSafetyToolsButtonTooltip.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useShouldShowInitialSafetyToolsButtonTooltip(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var8 = arg1;
            var _closure2_slot0 = var8;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 1;
            var3 = var7[var3];
            var5 = undefined;
            var4 = var6.bind(var5)(var3);
            var3 = var4.useInappropriateConversationSafetyToolsWarningForChannel;
            var3 = var3.bind(var4)(var8);
            var4 = 2;
            var4 = var7[var4];
            var5 = var6.bind(var5)(var4);
            var4 = var5.useStateFromStores;
            var6 = _closure1_slot2;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                var3 = _closure1_slot2;
                var2 = var3.hasShownInitialTooltipForChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var4.bind(var5)(var2, var1);
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0001_ip = 97; continue _fun0001 }
 94:
            var1 = !var2;
 97:
            return var1;
        }
    };
    var3['useShouldShowInitialSafetyToolsButtonTooltip'] = var2;
    return var1;
})();
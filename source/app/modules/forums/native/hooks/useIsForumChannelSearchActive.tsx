// app/modules/forums/native/hooks/useIsForumChannelSearchActive.tsx
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
    var4 = 'modules/forums/native/hooks/useIsForumChannelSearchActive.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsForumChannelSearchActive(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 1;
            var1 = var8[var1];
            var5 = undefined;
            var4 = var6.bind(var5)(var1);
            var1 = var4.useCanSearchForumPostsByChannelId;
            var1 = var1.bind(var4)(var7);
            var4 = 2;
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.useStateFromStores;
            var3 = _closure1_slot2;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = new Array(1);
            var3[0] = var7;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 38; continue _fun0002 }
 16:
                    var4 = _closure1_slot2;
                    var3 = var4.getSearchQuery;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 38:
                    return var1;
                }
            };
            var3 = var5.bind(var6)(var4, var2, var3);
            if(!var1) { _fun0001_ip = 103; continue _fun0001 }
 97:
            var2 = null;
            var1 = var2 != var3;
 103:
            return var1;
        }
    };
    var3['useIsForumChannelSearchActive'] = var2;
    return var1;
})();
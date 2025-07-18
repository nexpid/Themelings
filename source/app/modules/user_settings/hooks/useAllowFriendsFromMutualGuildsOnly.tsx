// app/modules/user_settings/hooks/useAllowFriendsFromMutualGuildsOnly.tsx
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/hooks/useAllowFriendsFromMutualGuildsOnly.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useAllowFriendsFromMutualGuildsOnly() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 1;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var4 = var3.FriendSourceFlagsSetting;
            var3 = var4.useSetting;
            var5 = var3.bind(var4)();
            var _closure2_slot0 = var5;
            var4 = _closure1_slot2;
            var3 = var4.useMemo;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.computeFlags;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var1, var2);
            var1 = var2.mutualGuilds;
            if(!var1) { _fun0001_ip = 95; continue _fun0001 }
 86:
            var2 = var2.all;
            var1 = !var2;
 95:
            return var1;
        }
    };
    var3['useAllowFriendsFromMutualGuildsOnly'] = var2;
    return var1;
})();
// app/modules/reactions/canAddNewReactions.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.Permissions;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reactions/canAddNewReactions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var1 = var3.getGuildId;
            var5 = var1.bind(var3)();
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0001_ip = 40; continue _fun0001 }
 22:
            var4 = _closure1_slot0;
            var2 = var4.canChatInGuild;
            var1 = var2.bind(var4)(var5);
 40:
            if(!var1) { _fun0001_ip = 72; continue _fun0001 }
 43:
            var5 = _closure1_slot1;
            var4 = var5.can;
            var2 = _closure1_slot2;
            var2 = var2.ADD_REACTIONS;
            var1 = var4.bind(var5)(var2, var3);
 72:
            if(var1) { _fun0001_ip = 85; continue _fun0001 }
 75:
            var2 = var3.isPrivate;
            var1 = var2.bind(var3)();
 85:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
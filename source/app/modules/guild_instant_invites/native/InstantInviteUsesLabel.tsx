// app/modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsxs;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_instant_invites/native/InstantInviteUsesLabel.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InstantInviteUsesLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var7 = var1.uses;
            var4 = var1.maxUses;
            var5 = var1.style;
            var1 = 0;
            var6 = var7;
            if(!(var1 !== var4)) { _fun0001_ip = 57; continue _fun0001 }
 29:
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '/';
            var6 = var3.bind(var2)(var7, var1, var4);
 57:
            var4 = _closure1_slot2;
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 2;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/semibold', 'color': 'header-secondary'};
            var1['style'] = var5;
            var5 = ['Uses: '];
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
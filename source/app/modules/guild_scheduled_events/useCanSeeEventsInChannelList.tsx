// app/modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var4 = native7;
    var1 = native3;
    var _closure1_slot0 = var1;
    var _closure1_slot1 = var4;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 3;
    var5 = var4[var1];
    var4 = native2;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_scheduled_events/useCanSeeEventsInChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCanSeeEventsInChannelList(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var7 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 0;
            var1 = var8[var4];
            var5 = undefined;
            var1 = var7.bind(var5)(var1);
            var2 = var1.bind(var5)(var6);
            var1 = 1;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var3 = var1.bind(var5)(var6);
            var1 = 2;
            var1 = var8[var1];
            var1 = var7.bind(var5)(var1);
            var1 = var1.bind(var5)(var6);
            var1 = !var1;
            if(!var1) { _fun0001_ip = 87; continue _fun0001 }
 72:
            if(var2) { _fun0001_ip = 84; continue _fun0001 }
 75:
            var3 = var3.length;
            var2 = var3 > var4;
 84:
            var1 = var2;
 87:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
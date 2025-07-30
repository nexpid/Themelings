// app/modules/routing/KeybindRouterStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function getMatchData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var8 = 1;
            var1 = var1[var8];
            var12 = undefined;
            var9 = var2.bind(var12)(var1);
            var6 = var9.matchPath;
            var2 = null;
            var1 = var2 != var3;
            var7 = '';
            var5 = var7;
            if(!var1) { _fun0001_ip = 53; continue _fun0001 }
 50:
            var5 = var3;
 53:
            var1 = {};
            var16 = _closure1_slot2;
            var15 = var16.CHANNEL;
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var13 = 2;
            var14 = var10[var13];
            var14 = var11.bind(var12)(var14);
            var17 = var14.RouteParam;
            var14 = var17.guildId;
            var14 = var14.bind(var17)();
            var10 = var10[var13];
            var10 = var11.bind(var12)(var10);
            var17 = var10.RouteParam;
            var11 = var17.channelId;
            var10 = {};
            var18 = true;
            var10['optional'] = var18;
            var11 = var11.bind(var17)(var10);
            var10 = ':messageId?';
            var10 = var15.bind(var16)(var14, var11, var10);
            var1['path'] = var10;
            var1 = var6.bind(var9)(var5, var1);
            if(!(var2 == var1)) { _fun0001_ip = 300; continue _fun0001 }
 165:
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var5 = var5[var8];
            var6 = var6.bind(var12)(var5);
            var5 = var6.matchPath;
            var8 = var2 != var3;
            if(!var8) { _fun0001_ip = 198; continue _fun0001 }
 195:
            var7 = var3;
 198:
            var3 = {};
            var10 = _closure1_slot2;
            var9 = var10.GUILD_BOOSTING_MARKETING;
            var11 = _closure1_slot0;
            var8 = _closure1_slot1;
            var8 = var8[var13];
            var8 = var11.bind(var12)(var8);
            var11 = var8.RouteParam;
            var8 = var11.guildId;
            var8 = var8.bind(var11)();
            var8 = var9.bind(var10)(var8);
            var3['path'] = var8;
            var6 = var5.bind(var6)(var7, var3);
            if(!(var2 == var6)) { _fun0001_ip = 274; continue _fun0001 }
 262:
            var3 = {'guildId': null, 'channelId': null};
            _fun0001_ip = 298; continue _fun0001;
 274:
            var5 = {};
            var6 = var6.params;
            var6 = var6.guildId;
            var5['guildId'] = var6;
            var5['channelId'] = var2;
            var3 = var5;
 298:
            return var3;
 300:
            var1 = var1.params;
            var5 = var1.guildId;
            var3 = var1.channelId;
            var1 = {};
            var6 = _closure1_slot3;
            var4 = null;
            if(!(var5 !== var6)) { _fun0001_ip = 331; continue _fun0001 }
 328:
            var4 = var5;
 331:
            var1['guildId'] = var4;
            var4 = var2 != var3;
            var2 = null;
            if(!var4) { _fun0001_ip = 347; continue _fun0001 }
 344:
            var2 = var3;
 347:
            var1['channelId'] = var2;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.Routes;
    var _closure1_slot2 = var7;
    var4 = var4.ME;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var7 = var5.bind(var1)(var4);
    var4 = var7.createWithEqualityFn;
    var2 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {'path': null, 'basePath': '/', 'guildId': null, 'channelId': null};
        var3 = function updatePath(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var4 = _closure1_slot4;
            var1 = undefined;
            var4 = var4.bind(var1)(var5);
            var5 = var4.guildId;
            var _closure3_slot1 = var5;
            var4 = var4.channelId;
            var _closure3_slot2 = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var4 = _closure3_slot0;
                var2['path'] = var4;
                var4 = _closure3_slot1;
                var2['guildId'] = var4;
                var1 = _closure3_slot2;
                var2['channelId'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['updatePath'] = var3;
        var2 = function resetPath(arg1) {
            var5 = arg1;
            var _closure3_slot0 = var5;
            var4 = _closure1_slot4;
            var1 = undefined;
            var4 = var4.bind(var1)(var5);
            var5 = var4.guildId;
            var _closure3_slot1 = var5;
            var4 = var4.channelId;
            var _closure3_slot2 = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var3 = 4;
            var3 = var5[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.batchUpdates;
            var2 = function() {
                var3 = _closure2_slot0;
                var2 = {};
                var1 = null;
                var2['path'] = var1;
                var4 = _closure3_slot1;
                var2['guildId'] = var4;
                var4 = _closure3_slot2;
                var2['channelId'] = var4;
                var1 = _closure3_slot0;
                var2['basePath'] = var1;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['resetPath'] = var2;
        return var1;
    };
    var2 = var4.bind(var7)(var2);
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/routing/KeybindRouterStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
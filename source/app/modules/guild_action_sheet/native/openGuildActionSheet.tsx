// app/modules/guild_action_sheet/native/openGuildActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot3 = var7;
    var4 = var4.GuildFeatures;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_action_sheet/native/openGuildActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function openGuildActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var9 = arguments[1];
            var1 = undefined;
            if(!(var9 === var1)) { _fun0001_ip = 14; continue _fun0001 }
 12:
            var9 = true;
 14:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var8 = var5.bind(var1)(var3);
            var7 = var8.track;
            var3 = _closure1_slot3;
            var5 = var3.OPEN_POPOUT;
            var3 = {};
            var10 = 'Guild Profile';
            var3['type'] = var10;
            var10 = var2.id;
            var3['guild_id'] = var10;
            var3 = var7.bind(var8)(var5, var3);
            var5 = _closure1_slot0;
            var3 = 2;
            var3 = var6[var3];
            var6 = var5.bind(var1)(var3);
            var5 = var6.shouldNSFWGateGuild;
            var3 = var2.id;
            var3 = var5.bind(var6)(var3);
            if(var3) { _fun0001_ip = 325; continue _fun0001 }
 117:
            var6 = var2.features;
            var5 = var6.has;
            var3 = _closure1_slot4;
            var3 = var3.HUB;
            var5 = var5.bind(var6)(var3);
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var6 = 3;
            var6 = var3[var6];
            var8 = var7.bind(var1)(var6);
            var7 = var8.openLazy;
            var10 = _closure1_slot0;
            var6 = 5;
            var6 = var3[var6];
            var6 = var10.bind(var1)(var6);
            if(var5) { _fun0001_ip = 258; continue _fun0001 }
 188:
            var5 = 7;
            var10 = var3[var5];
            var5 = var3.paths;
            var11 = var6.bind(var1)(var10, var5);
            var12 = var2.id;
            var5 = global;
            var5 = var5.HermesInternal;
            var10 = var5.concat;
            var5 = 'GuildActionSheet:';
            var10 = var10.bind(var5)(var12);
            var5 = {};
            var5['guild'] = var2;
            var5['expanded'] = var9;
            var5 = var7.bind(var8)(var11, var10, var5);
            _fun0001_ip = 404; continue _fun0001;
 258:
            var5 = 6;
            var5 = var3[var5];
            var3 = var3.paths;
            var6 = var6.bind(var1)(var5, var3);
            var10 = var2.id;
            var3 = global;
            var3 = var3.HermesInternal;
            var5 = var3.concat;
            var3 = 'GuildActionSheet:';
            var5 = var5.bind(var3)(var10);
            var3 = {};
            var3['guild'] = var2;
            var3['expanded'] = var9;
            var3 = var7.bind(var8)(var6, var5, var3);
            _fun0001_ip = 404; continue _fun0001;
 325:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 3;
            var5 = var3[var5];
            var6 = var6.bind(var1)(var5);
            var5 = var6.openLazy;
            var7 = _closure1_slot0;
            var4 = 5;
            var4 = var3[var4];
            var7 = var7.bind(var1)(var4);
            var4 = 4;
            var4 = var3[var4];
            var3 = var3.paths;
            var4 = var7.bind(var1)(var4, var3);
            var3 = {};
            var3['guild'] = var2;
            var2 = 'NsfwGateGuildSettingsActionSheet';
            var2 = var5.bind(var6)(var4, var2, var3);
 404:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
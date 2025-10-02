// app/modules/guild_templates/useTrackCreateGuildViewed.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var1 = metroImportDefault;
    var _closure1_slot0 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTemplateStates;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_templates/useTrackCreateGuildViewed.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackCreateGuildViewed(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot2;
        var4 = var3.useRef;
        var2 = new Array(0);
        var2 = var4.bind(var3)(var2);
        var _closure2_slot1 = var2;
        var2 = var3.useEffect;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = null;
                var2 = var2 != var3;
                if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = _closure2_slot0;
                var4 = var3.state;
                var3 = _closure1_slot3;
                var3 = var3.RESOLVING;
                var2 = var4 !== var3;
case 2:
                if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = _closure2_slot1;
                var4 = var2.current;
                var3 = var4.includes;
                var2 = _closure2_slot0;
                var2 = var2.code;
                var2 = var3.bind(var4)(var2);
                if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                var2 = _closure2_slot1;
                var3 = var2.current;
                var2 = var3.push;
                var5 = _closure2_slot0;
                var1 = var5.code;
                var1 = var2.bind(var3)(var1);
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.CREATE_GUILD_VIEWED;
                var1 = {};
                var6 = var5.code;
                var1['guild_template_code'] = var6;
                var6 = var5.name;
                var1['guild_template_name'] = var6;
                var6 = var5.description;
                var1['guild_template_description'] = var6;
                var5 = var5.sourceGuildId;
                var1['guild_template_guild_id'] = var5;
                var1 = var3.bind(var4)(var2, var1);
case 4:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
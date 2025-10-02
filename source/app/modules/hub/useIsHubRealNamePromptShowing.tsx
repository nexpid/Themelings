// app/modules/hub/useIsHubRealNamePromptShowing.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildPrompts;
    var _closure1_slot9 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/hub/useIsHubRealNamePromptShowing.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useIsHubRealNamePromptShowing(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 7;
        var4 = var4[var2];
        var2 = undefined;
        var7 = var5.bind(var2)(var4);
        var5 = var7.useStateFromStores;
        var2 = _closure1_slot6;
        var4 = new Array(4);
        var4[0] = var2;
        var2 = _closure1_slot4;
        var4[1] = var2;
        var2 = _closure1_slot7;
        var4[2] = var2;
        var2 = _closure1_slot5;
        var4[3] = var2;
        var2 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var6 = var1 == var3;
                var5 = undefined;
                if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = var3.features;
                var7 = var8.has;
                var6 = _closure1_slot8;
                var6 = var6.HUB;
                var5 = var7.bind(var8)(var6);
case 2:
                var6 = true;
                if(!(var6 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var9 = _closure1_slot4;
                var8 = var9.hasViewedPrompt;
                var5 = _closure1_slot9;
                var7 = var5.REAL_NAME_PROMPT;
                var5 = var3.id;
                var5 = var8.bind(var9)(var7, var5);
                if(!(var6 !== var5)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var6 = _closure1_slot7;
                var5 = var6.getCurrentUser;
                var7 = var5.bind(var6)();
                if(!(var1 != var7)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var6 = _closure1_slot5;
                var5 = var6.getMember;
                var4 = var3.id;
                var8 = var1 == var7;
                var3 = undefined;
                if(var8) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                var3 = var7.id;
case 10:
                var3 = var5.bind(var6)(var4, var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                var2 = var3.nick;
case 12:
                var2 = var1 == var2;
                return var2;
case 8:
                return var1;
case 6:
                return var1;
case 4:
                return var1;
            }
        };
        var2 = var5.bind(var7)(var4, var2);
        var _closure2_slot1 = var2;
        var5 = _closure1_slot3;
        var4 = var5.useEffect;
        var3 = new Array(2);
        var3[0] = var2;
        var3[1] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = _closure2_slot0;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var3 = _closure2_slot1;
                var2 = var4 != var3;
case 14:
                if(!var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 18:
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 8;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.viewPrompt;
                var2 = _closure1_slot9;
                var2 = var2.REAL_NAME_PROMPT;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
case 16:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1, var3);
        var1 = true;
        var1 = var1 === var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
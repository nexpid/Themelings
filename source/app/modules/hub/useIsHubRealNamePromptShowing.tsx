// app/modules/hub/useIsHubRealNamePromptShowing.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
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
 0:
                var3 = _closure1_slot6;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                var6 = var1 == var3;
                var5 = undefined;
                if(var6) { _fun0001_ip = 61; continue _fun0001 }
 35:
                var8 = var3.features;
                var7 = var8.has;
                var6 = _closure1_slot8;
                var6 = var6.HUB;
                var5 = var7.bind(var8)(var6);
 61:
                var6 = true;
                if(!(var6 === var5)) { _fun0001_ip = 181; continue _fun0001 }
 67:
                var9 = _closure1_slot4;
                var8 = var9.hasViewedPrompt;
                var5 = _closure1_slot9;
                var7 = var5.REAL_NAME_PROMPT;
                var5 = var3.id;
                var5 = var8.bind(var9)(var7, var5);
                if(!(var6 !== var5)) { _fun0001_ip = 179; continue _fun0001 }
 104:
                var6 = _closure1_slot7;
                var5 = var6.getCurrentUser;
                var7 = var5.bind(var6)();
                if(!(var1 != var7)) { _fun0001_ip = 177; continue _fun0001 }
 121:
                var6 = _closure1_slot5;
                var5 = var6.getMember;
                var4 = var3.id;
                var8 = var1 == var7;
                var3 = undefined;
                if(var8) { _fun0001_ip = 150; continue _fun0001 }
 145:
                var3 = var7.id;
 150:
                var3 = var5.bind(var6)(var4, var3);
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 171; continue _fun0001 }
 165:
                var2 = var3.nick;
 171:
                var2 = var1 == var2;
                return var2;
 177:
                return var1;
 179:
                return var1;
 181:
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
 0:
                var2 = _closure2_slot0;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0002_ip = 24; continue _fun0002 }
 16:
                var3 = _closure2_slot1;
                var2 = var4 != var3;
 24:
                if(!var2) { _fun0002_ip = 85; continue _fun0002 }
 27:
                var2 = _closure2_slot1;
                if(var2) { _fun0002_ip = 85; continue _fun0002 }
 34:
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
 85:
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
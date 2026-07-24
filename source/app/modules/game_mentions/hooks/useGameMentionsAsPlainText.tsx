// app/modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.extractGameMentionIds;
    var _closure1_slot5 = var7;
    var4 = var4.GAME_MENTION_RAW_RE_GLOBAL;
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_mentions/hooks/useGameMentionsAsPlainText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useGameMentionsAsPlainText(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var6 = _closure1_slot2;
        var5 = var6.useMemo;
        var4 = new Array(1);
        var4[0] = var7;
        var3 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure1_slot5;
                var4 = _closure2_slot0;
                var2 = null;
                var4 = var2 != var4;
                var2 = '';
                if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var2 = _closure2_slot0;
case 2:
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            }
        };
        var6 = var5.bind(var6)(var3, var4);
        var _closure2_slot1 = var6;
        var5 = _closure1_slot0;
        var8 = _closure1_slot1;
        var3 = 4;
        var3 = var8[var3];
        var4 = undefined;
        var9 = var5.bind(var4)(var3);
        var3 = var9.useGames;
        var3 = var3.bind(var9)(var6);
        var3 = 5;
        var3 = var8[var3];
        var5 = var5.bind(var4)(var3);
        var4 = var5.useStateFromStores;
        var8 = _closure1_slot3;
        var3 = new Array(2);
        var3[0] = var8;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = new Array(2);
        var2[0] = var7;
        var2[1] = var6;
        var1 = function() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 6;
                var1 = var4[var1];
                var4 = undefined;
                var7 = var5.bind(var4)(var1);
                var6 = var7.isNullOrEmpty;
                var5 = _closure2_slot0;
                var5 = var6.bind(var7)(var5);
                if(var5) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = _closure2_slot1;
                var6 = var5.length;
                var5 = 0;
                if(!(var5 !== var6)) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                var6 = _closure1_slot4;
                var5 = var6.getCurrentUser;
                var5 = var5.bind(var6)();
                var6 = null;
                var6 = var6 == var5;
                var4 = undefined;
                if(var6) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var4 = var5.nsfwAllowed;
case 7:
                var _closure3_slot0 = var4;
                var5 = _closure2_slot0;
                var4 = var5.replace;
                var3 = _closure1_slot6;
                var2 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = _closure1_slot3;
                        var3 = var4.getGame;
                        var1 = arg2;
                        var4 = var3.bind(var4)(var1);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 7;
                        var1 = var5[var1];
                        var6 = undefined;
                        var5 = var3.bind(var6)(var1);
                        var3 = var5.isGameProfileObscured;
                        var1 = _closure3_slot0;
                        var1 = var3.bind(var5)(var4, var1);
                        if(var1) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var3 = null;
                        var5 = var3 == var4;
                        var1 = undefined;
                        if(var5) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var1 = var4.name;
case 11:
                        if(!(var3 == var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var3 = 8;
                        var4 = var8[var3];
                        var4 = var7.bind(var6)(var4);
                        var5 = var4.intl;
                        var4 = var5.string;
                        var3 = var8[var3];
                        var3 = var7.bind(var6)(var3);
                        var3 = var3.t;
                        var3 = var3["11pdXZ"];
                        var1 = var4.bind(var5)(var3);
case 13:
                        _fun0003_ip = 15; continue _fun0003;
case 9:
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var2 = 8;
                        var3 = var7[var2];
                        var3 = var5.bind(var6)(var3);
                        var4 = var3.intl;
                        var3 = var4.string;
                        var2 = var7[var2];
                        var2 = var5.bind(var6)(var2);
                        var2 = var2.t;
                        var2 = var2["11pdXZ"];
                        var1 = var3.bind(var4)(var2);
case 15:
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var3, var2);
                return var2;
case 4:
                var1 = _closure2_slot0;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var3, var1, var2);
        return var1;
    };
    var3['useGameMentionsAsPlainText'] = var2;
    return var1;
})();
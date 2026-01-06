// app/keybinds/actions/jumpToGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var8 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var7;
        var12 = global;
        var10 = var12.Object;
        var9 = var10.defineProperty;
        var2 = {};
        var5 = true;
        var2['value'] = var5;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var2);
        var1 = 0;
        var2 = var7[var1];
        var1 = undefined;
        var2 = var8.bind(var1)(var2);
        var _closure1_slot2 = var2;
        var11 = 1;
        var2 = var7[var11];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 2;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 3;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 4;
        var2 = var7[var2];
        var2 = var8.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 5;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var8 = var2.ME;
        var _closure1_slot7 = var8;
        var8 = var2.FAVORITES;
        var _closure1_slot8 = var8;
        var2 = var2.Routes;
        var _closure1_slot9 = var2;
        var2 = {};
        var8 = new Array(0);
        var10 = 'mod+';
        var9 = 10;
case 2:
        var14 = var8.push;
        var13 = var12.HermesInternal;
        var13 = var13.concat;
        var13 = var13.bind(var10)(var11);
        var13 = var14.bind(var8)(var13);
        var11 = var11 + 1;
        if(var11 < var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2['binds'] = var8;
        var2['comboKeysBindGlobal'] = var5;
        var4 = function action(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg2;
                var4 = global;
                var5 = var4.parseInt;
                var2 = var3.split;
                var1 = '+';
                var1 = var2.bind(var3)(var1);
                var2 = 1;
                var3 = var1[var2];
                var1 = undefined;
                var6 = 10;
                var5 = var5.bind(var1)(var3, var6);
                var3 = 0;
                if(!(var3 === var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = var6;
case 4:
                var4 = var4.isNaN;
                var4 = var4.bind(var1)(var5);
                if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                if(!(var3 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                if(!(var2 !== var5)) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 6;
                var2 = var6[var2];
                var8 = var4.bind(var1)(var2);
                var7 = var8.isFavoritesGuildVisible;
                var6 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = _closure1_slot4;
                var4 = var7.bind(var8)(var6, var4, var2);
                var2 = 2;
                if(var4) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                var6 = _closure1_slot6;
                var4 = var6.getFlattenedGuildIds;
                var6 = var4.bind(var6)();
                var4 = var5 - var2;
                var6 = var6[var4];
                _fun0002_ip = 13; continue _fun0002;
case 11:
                if(!(var2 !== var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var4 = _closure1_slot6;
                var2 = var4.getFlattenedGuildIds;
                var4 = var2.bind(var4)();
                var2 = 3;
                var2 = var5 - var2;
                var2 = var4[var2];
                _fun0002_ip = 16; continue _fun0002;
case 14:
                var2 = _closure1_slot8;
case 16:
                var6 = var2;
case 13:
                _fun0002_ip = 17; continue _fun0002;
case 9:
                var6 = _closure1_slot7;
case 17:
                var4 = null;
                if(!(var4 != var6)) { _fun0002_ip = 6; continue _fun0002 }
case 18:
                var3 = _closure1_slot7;
                if(!(var6 === var3)) { _fun0002_ip = 19; continue _fun0002 }
case 20:
                var5 = _closure1_slot5;
                var3 = var5.getGuildId;
                var3 = var3.bind(var5)();
                if(!(var4 != var3)) { _fun0002_ip = 21; continue _fun0002 }
case 19:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 8;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionToGuild;
                var3 = var3.bind(var4)(var6);
                _fun0002_ip = 22; continue _fun0002;
case 21:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 7;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionTo;
                var5 = _closure1_slot9;
                var2 = var5.CHANNEL;
                var2 = var2.bind(var5)(var6);
                var2 = var3.bind(var4)(var2);
case 22:
                var2 = false;
                return var2;
case 6:
                return var1;
            }
        };
        var2['action'] = var4;
        var4 = {};
        var4['JUMP_TO_GUILD'] = var2;
        var5 = 9;
        var5 = var7[var5];
        var7 = var6.bind(var1)(var5);
        var6 = var7.fileFinishedImporting;
        var5 = 'keybinds/actions/jumpToGuild.tsx';
        var5 = var6.bind(var7)(var5);
        var3['default'] = var4;
        var3['JUMP_TO_GUILD'] = var2;
        return var1;
    }
})();
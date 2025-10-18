// app/keybinds/actions/jumpToGuild.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var6 = require;
        var5 = metroImportDefault;
        var3 = exports;
        var7 = dependencyMap;
        var _closure1_slot0 = var6;
        var _closure1_slot1 = var7;
        var12 = global;
        var10 = var12.Object;
        var9 = var10.defineProperty;
        var2 = {};
        var8 = true;
        var2['value'] = var8;
        var1 = '__esModule';
        var1 = var9.bind(var10)(var3, var1, var2);
        var1 = 0;
        var2 = var7[var1];
        var1 = undefined;
        var2 = var5.bind(var1)(var2);
        var _closure1_slot2 = var2;
        var11 = 1;
        var2 = var7[var11];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot3 = var2;
        var2 = 2;
        var2 = var7[var2];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot4 = var2;
        var2 = 3;
        var2 = var7[var2];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot5 = var2;
        var2 = 4;
        var2 = var7[var2];
        var2 = var5.bind(var1)(var2);
        var _closure1_slot6 = var2;
        var2 = 5;
        var2 = var7[var2];
        var2 = var6.bind(var1)(var2);
        var5 = var2.ME;
        var _closure1_slot7 = var5;
        var5 = var2.FAVORITES;
        var _closure1_slot8 = var5;
        var2 = var2.Routes;
        var _closure1_slot9 = var2;
        var2 = {};
        var9 = new Array(0);
        var10 = 'mod+';
        var5 = 10;
case 2:
        var14 = var9.push;
        var13 = var12.HermesInternal;
        var13 = var13.concat;
        var13 = var13.bind(var10)(var11);
        var13 = var14.bind(var9)(var13);
        var11 = var11 + 1;
        if(var11 < var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var2['binds'] = var9;
        var2['comboKeysBindGlobal'] = var8;
        var4 = function action(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = arg2;
                var2 = global;
                var6 = var2.parseInt;
                var3 = var4.split;
                var1 = '+';
                var1 = var3.bind(var4)(var1);
                var4 = 1;
                var3 = var1[var4];
                var1 = undefined;
                var5 = 10;
                var3 = var6.bind(var1)(var3, var5);
                var8 = 0;
                if(!(var8 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var3 = var5;
case 4:
                var2 = var2.isNaN;
                var2 = var2.bind(var1)(var3);
                var5 = var3;
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                if(!(var8 !== var5)) { _fun0002_ip = 6; continue _fun0002 }
case 8:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 6;
                var3 = var7[var3];
                var3 = var6.bind(var1)(var3);
                var7 = var3.DesktopLandingExperiment;
                var6 = var7.getConfig;
                var3 = {};
                var9 = 'jumptoguild';
                var3['location'] = var9;
                var3 = var6.bind(var7)(var3);
                var3 = var3.dmsTab;
                var8 = 0;
                if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
                var8 = var4;
case 9:
                if(!(var4 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                if(!var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var4 = 2;
                if(!(var4 !== var5)) { _fun0002_ip = 11; continue _fun0002 }
case 13:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var4 = var7[var4];
                var10 = var6.bind(var1)(var4);
                var9 = var10.isFavoritesGuildVisible;
                var7 = _closure1_slot2;
                var6 = _closure1_slot3;
                var4 = _closure1_slot4;
                var6 = var9.bind(var10)(var7, var6, var4);
                var4 = 2;
                if(var6) { _fun0002_ip = 15; continue _fun0002 }
case 16:
                var7 = _closure1_slot6;
                var6 = var7.getFlattenedGuildIds;
                var7 = var6.bind(var7)();
                var6 = var5 - var4;
                var6 = var6 - var8;
                var7 = var7[var6];
                _fun0002_ip = 17; continue _fun0002;
case 15:
                var4 = var4 + var8;
                if(!(var5 !== var4)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var6 = _closure1_slot6;
                var4 = var6.getFlattenedGuildIds;
                var6 = var4.bind(var6)();
                var4 = 3;
                var4 = var5 - var4;
                var4 = var4 - var8;
                var4 = var6[var4];
                _fun0002_ip = 20; continue _fun0002;
case 18:
                var4 = _closure1_slot8;
case 20:
                var7 = var4;
case 17:
                _fun0002_ip = 21; continue _fun0002;
case 11:
                var7 = _closure1_slot7;
case 21:
                var4 = null;
                if(!(var4 != var7)) { _fun0002_ip = 6; continue _fun0002 }
case 22:
                var6 = _closure1_slot7;
                if(!(var7 === var6)) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                if(!var3) { _fun0002_ip = 23; continue _fun0002 }
case 25:
                var3 = 2;
                if(!(var3 !== var5)) { _fun0002_ip = 26; continue _fun0002 }
case 23:
                var3 = _closure1_slot7;
                if(!(var7 === var3)) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                var5 = _closure1_slot5;
                var3 = var5.getGuildId;
                var3 = var3.bind(var5)();
                if(!(var4 != var3)) { _fun0002_ip = 29; continue _fun0002 }
case 27:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionToGuild;
                var3 = var3.bind(var4)(var7);
                _fun0002_ip = 30; continue _fun0002;
case 29:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 8;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.transitionTo;
                var6 = _closure1_slot9;
                var3 = var6.CHANNEL;
                var3 = var3.bind(var6)(var7);
                var3 = var4.bind(var5)(var3);
                _fun0002_ip = 30; continue _fun0002;
case 26:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 8;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.transitionTo;
                var2 = _closure1_slot9;
                var2 = var2.ME_DMS;
                var2 = var3.bind(var4)(var2);
case 30:
                var2 = false;
                return var2;
case 6:
                return var1;
            }
        };
        var2['action'] = var4;
        var4 = {};
        var4['JUMP_TO_GUILD'] = var2;
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
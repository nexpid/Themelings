// app/modules/checkpoint/useCheckpointStepsToRender.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FetchStates;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.CheckpointSteps;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/checkpoint/useCheckpointStepsToRender.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useCheckpointStepsToRender() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var3 = 2;
            var6 = var7[var3];
            var5 = undefined;
            var11 = var4.bind(var5)(var6);
            var10 = var11.useStateFromStores;
            var8 = _closure1_slot2;
            var9 = new Array(1);
            var9[0] = var8;
            var6 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCheckpointData;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var10.bind(var11)(var9, var6);
            var3 = var7[var3];
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getFetchState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4 = var4.bind(var7)(var3, var1);
            var1 = _closure1_slot4;
            var3 = var1.WELCOME;
            var1 = new Array(1);
            var1[0] = var3;
            var3 = _closure1_slot3;
            var3 = var3.SUCCESS;
            var3 = var4 !== var3;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var6.messages;
            var4 = null;
            var3 = var4 == var7;
case 2:
            if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = var1.push;
            var3 = _closure1_slot4;
            var4 = var3.MESSAGES;
            var4 = var7.bind(var1)(var4);
            var7 = var1.push;
            var4 = var3.EMOJIS;
            var4 = var7.bind(var1)(var4);
            var4 = var1.push;
            var3 = var3.VOICE;
            var3 = var4.bind(var1)(var3);
            var4 = var6.guilds;
            var3 = null;
            var7 = var3 == var4;
            var8 = undefined;
            if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = var4.guilds;
            var8 = var4.length;
case 6:
            var9 = var3 != var8;
            var4 = 0;
            var7 = 0;
            if(!var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = var8;
case 8:
            if(!(var7 > var4)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = var1.push;
            var7 = _closure1_slot4;
            var7 = var7.GUILDS;
            var7 = var8.bind(var1)(var7);
case 10:
            var7 = var6.users;
            var9 = var3 == var7;
            var8 = undefined;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var8 = var7.length;
case 12:
            var9 = var3 != var8;
            var7 = 0;
            if(!var9) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var8;
case 14:
            var7 = var7 > var4;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var8 = var6.sidekick;
            var7 = var3 != var8;
case 16:
            if(!var7) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var6.sidekick;
            var8 = var8.user;
            var7 = var3 != var8;
case 18:
            if(!var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var6.users;
            var10 = var3 == var8;
            var9 = undefined;
            if(var10) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var8 = var8[var4];
            var9 = var8.id;
case 22:
            var8 = var6.sidekick;
            var8 = var8.user;
            var8 = var8.id;
            var7 = var9 !== var8;
case 20:
            if(!var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var9 = var1.push;
            var7 = _closure1_slot4;
            var8 = var7.FRIENDS_INTRO;
            var8 = var9.bind(var1)(var8);
            var8 = var1.push;
            var7 = var7.FRIENDS_TRANSITION;
            var7 = var8.bind(var1)(var7);
case 24:
            var7 = var6.sidekick;
            var7 = var3 != var7;
            if(!var7) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var8 = var6.sidekick;
            var8 = var8.user;
            var7 = var3 != var8;
case 26:
            if(!var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var9 = var1.push;
            var7 = _closure1_slot4;
            var8 = var7.FRIENDS_BEST;
            var8 = var9.bind(var1)(var8);
            var8 = var1.push;
            var7 = var7.FRIENDS_LEAVE;
            var7 = var8.bind(var1)(var7);
case 28:
            var6 = var6.applications;
            var7 = var3 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var6 = var6.applications;
            var5 = var6.length;
case 30:
            var6 = var3 != var5;
            var3 = 0;
            if(!var6) { _fun0001_ip = 32; continue _fun0001 }
case 33:
            var3 = var5;
case 32:
            if(!(var3 > var4)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var4 = var1.push;
            var3 = _closure1_slot4;
            var3 = var3.GAMING;
            var3 = var4.bind(var1)(var3);
case 34:
            var4 = var1.push;
            var2 = _closure1_slot4;
            var3 = var2.QUESTS;
            var3 = var4.bind(var1)(var3);
            var4 = var1.push;
            var3 = var2.END_REWARD;
            var3 = var4.bind(var1)(var3);
            var4 = var1.push;
            var3 = var2.END_CLAIM;
            var3 = var4.bind(var1)(var3);
            var3 = var1.push;
            var2 = var2.END_SUMMARY;
            var2 = var3.bind(var1)(var2);
case 4:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
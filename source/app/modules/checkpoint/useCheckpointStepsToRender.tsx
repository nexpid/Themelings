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
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var4 = 2;
            var3 = var8[var4];
            var5 = undefined;
            var11 = var6.bind(var5)(var3);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot2;
            var9 = new Array(1);
            var9[0] = var7;
            var3 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getCheckpointData;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var10.bind(var11)(var9, var3);
            var4 = var8[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.useStateFromStores;
            var4 = new Array(1);
            var4[0] = var7;
            var1 = function() {
                var2 = _closure1_slot2;
                var1 = var2.getFetchState;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var5.bind(var6)(var4, var1);
            var1 = _closure1_slot4;
            var4 = var1.WELCOME;
            var1 = new Array(1);
            var1[0] = var4;
            var4 = _closure1_slot3;
            var4 = var4.SUCCESS;
            if(!(var5 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1.push;
            var4 = _closure1_slot4;
            var5 = var4.MESSAGES;
            var5 = var6.bind(var1)(var5);
            var6 = var1.push;
            var5 = var4.EMOJIS;
            var5 = var6.bind(var1)(var5);
            var5 = var1.push;
            var4 = var4.VOICE;
            var4 = var5.bind(var1)(var4);
            var4 = var3.guilds;
            var4 = var4.guilds;
            var5 = var4.length;
            var4 = 0;
            if(!(var5 > var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1.push;
            var5 = _closure1_slot4;
            var5 = var5.GUILDS;
            var5 = var6.bind(var1)(var5);
case 4:
            var5 = var3.users;
            var5 = var5.length;
            var5 = var5 > var4;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = var3.sidekick;
            var6 = null;
            var5 = var6 != var7;
case 6:
            if(!var5) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var3.sidekick;
            var7 = var6.user;
            var6 = null;
            var5 = var6 != var7;
case 8:
            if(!var5) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var6 = var3.users;
            var6 = var6[var4];
            var7 = var6.id;
            var6 = var3.sidekick;
            var6 = var6.user;
            var6 = var6.id;
            var5 = var7 !== var6;
case 10:
            if(!var5) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = var1.push;
            var5 = _closure1_slot4;
            var6 = var5.FRIENDS_INTRO;
            var6 = var7.bind(var1)(var6);
            var6 = var1.push;
            var5 = var5.FRIENDS_TRANSITION;
            var5 = var6.bind(var1)(var5);
case 12:
            var5 = var3.sidekick;
            var7 = null;
            var5 = var7 != var5;
            if(!var5) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var6 = var3.sidekick;
            var6 = var6.user;
            var5 = var7 != var6;
case 14:
            if(!var5) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var1.push;
            var5 = _closure1_slot4;
            var6 = var5.FRIENDS_BEST;
            var6 = var7.bind(var1)(var6);
            var6 = var1.push;
            var5 = var5.FRIENDS_LEAVE;
            var5 = var6.bind(var1)(var5);
case 16:
            var3 = var3.applications;
            var3 = var3.applications;
            var3 = var3.length;
            if(!(var3 > var4)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var4 = var1.push;
            var3 = _closure1_slot4;
            var3 = var3.GAMING;
            var3 = var4.bind(var1)(var3);
case 18:
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
case 2:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
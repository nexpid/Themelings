// app/modules/quests/experiments/QuestsLoggingExperiment.tsx
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
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.NOOP;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'id': '2024-04_quests_logging', 'kind': 'user', 'label': 'Quests Logging'};
    var9 = {};
    var11 = false;
    var9['enabled'] = var11;
    var4['defaultConfig'] = var9;
    var10 = {'id': 0, 'label': 'Control'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {'id': 1, 'label': 'Quest logging enabled'};
    var11 = {};
    var11['enabled'] = var12;
    var10['config'] = var11;
    var9[1] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/experiments/QuestsLoggingExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getQuestLogger() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = {};
case 2:
            var3 = var1.quest;
            var10 = var1.location;
            var7 = _closure1_slot3;
            var6 = var7.getCurrentConfig;
            var4 = {};
            var1 = 'quests_logging';
            var4['location'] = var1;
            var1 = {};
            var8 = false;
            var1['autoTrackExposure'] = var8;
            var1 = var6.bind(var7)(var4, var1);
            var4 = var1.enabled;
            var1 = null;
            var6 = var1 == var3;
            var9 = undefined;
            if(var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = var3.config;
            var3 = var3.messages;
            var9 = var3.questName;
case 4:
            var3 = var1 != var10;
            var7 = '';
            var6 = var7;
            if(!var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = global;
            var3 = var3.HermesInternal;
            var8 = var3.concat;
            var3 = '-';
            var6 = var8.bind(var3)(var10);
case 6:
            var1 = var1 != var9;
            if(!var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var1 = global;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var3 = '-';
            var1 = ')';
            var7 = var8.bind(var3)(var9, var1);
case 8:
            var3 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 2;
            var1 = var8[var1];
            var5 = var3.bind(var5)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = 'QuestLogger';
            var12 = var3.bind(var1)(var6, var7);
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var13 = var3;
            var1 = new var13[var5](var12, var11);
            var3 = var1 instanceof Object ? var1 : var3;
            var1 = {};
            if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5 = _closure1_slot2;
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var5 = var3.log;
case 12:
            var1['log'] = var5;
            if(var4) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var5 = _closure1_slot2;
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var5 = var3.warn;
case 15:
            var1['warn'] = var5;
            if(var4) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = _closure1_slot2;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var5 = var3.error;
case 18:
            var1['error'] = var5;
            if(var4) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var5 = _closure1_slot2;
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var5 = var3.info;
case 21:
            var1['info'] = var5;
            if(var4) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var5 = _closure1_slot2;
            _fun0001_ip = 24; continue _fun0001;
case 22:
            var5 = var3.verbose;
case 24:
            var1['verbose'] = var5;
            if(var4) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var2 = _closure1_slot2;
            _fun0001_ip = 27; continue _fun0001;
case 25:
            var2 = var3.trace;
case 27:
            var1['trace'] = var2;
            return var1;
        }
    };
    var3['getQuestLogger'] = var2;
    return var1;
})();
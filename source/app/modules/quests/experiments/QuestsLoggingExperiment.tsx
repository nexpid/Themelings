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
 0:
            var1 = arguments[0];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var1 = {};
 11:
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
            if(var6) { _fun0001_ip = 95; continue _fun0001 }
 78:
            var3 = var3.config;
            var3 = var3.messages;
            var9 = var3.questName;
 95:
            var3 = var1 != var10;
            var7 = '';
            var6 = var7;
            if(!var3) { _fun0001_ip = 131; continue _fun0001 }
 109:
            var3 = global;
            var3 = var3.HermesInternal;
            var8 = var3.concat;
            var3 = '-';
            var6 = var8.bind(var3)(var10);
 131:
            var1 = var1 != var9;
            if(!var1) { _fun0001_ip = 165; continue _fun0001 }
 138:
            var1 = global;
            var1 = var1.HermesInternal;
            var8 = var1.concat;
            var3 = '-';
            var1 = ')';
            var7 = var8.bind(var3)(var9, var1);
 165:
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
            if(var4) { _fun0001_ip = 241; continue _fun0001 }
 235:
            var5 = _closure1_slot2;
            _fun0001_ip = 247; continue _fun0001;
 241:
            var5 = var3.log;
 247:
            var1['log'] = var5;
            if(var4) { _fun0001_ip = 261; continue _fun0001 }
 255:
            var5 = _closure1_slot2;
            _fun0001_ip = 266; continue _fun0001;
 261:
            var5 = var3.warn;
 266:
            var1['warn'] = var5;
            if(var4) { _fun0001_ip = 279; continue _fun0001 }
 273:
            var5 = _closure1_slot2;
            _fun0001_ip = 284; continue _fun0001;
 279:
            var5 = var3.error;
 284:
            var1['error'] = var5;
            if(var4) { _fun0001_ip = 297; continue _fun0001 }
 291:
            var5 = _closure1_slot2;
            _fun0001_ip = 303; continue _fun0001;
 297:
            var5 = var3.info;
 303:
            var1['info'] = var5;
            if(var4) { _fun0001_ip = 317; continue _fun0001 }
 311:
            var5 = _closure1_slot2;
            _fun0001_ip = 323; continue _fun0001;
 317:
            var5 = var3.verbose;
 323:
            var1['verbose'] = var5;
            if(var4) { _fun0001_ip = 337; continue _fun0001 }
 331:
            var2 = _closure1_slot2;
            _fun0001_ip = 343; continue _fun0001;
 337:
            var2 = var3.trace;
 343:
            var1['trace'] = var2;
            return var1;
        }
    };
    var3['getQuestLogger'] = var2;
    return var1;
})();
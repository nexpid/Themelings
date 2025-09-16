// app/modules/quests/experiments/BrandColorRemovalExperimentPhase2.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var11 = true;
    var7['value'] = var11;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot0 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot1 = var7;
    var8 = var4.Date;
    var12 = var4.Date;
    var10 = var12.UTC;
    var9 = 2025;
    var7 = 8;
    var4 = 6;
    var15 = var10.bind(var12)(var9, var7, var4);
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var16 = var7;
    var4 = new var16[var8](var15, var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createApexExperiment;
    var4 = {'name': '2025-09-quest-brand-color-removal-phase-2', 'kind': 'user'};
    var9 = {};
    var12 = false;
    var9['enabled'] = var12;
    var9['status'] = var1;
    var4['defaultConfig'] = var9;
    var9 = {};
    var10 = {};
    var10['enabled'] = var12;
    var10['status'] = var1;
    var9[0] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var12 = {'progressBlur': true, 'label1': false, 'label2': false, 'shineWipe': true};
    var10['status'] = var12;
    var9[1] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var12 = {'progressBlur': false, 'label1': true, 'label2': false, 'shineWipe': false};
    var10['status'] = var12;
    var9[2] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var12 = {'progressBlur': false, 'label1': false, 'label2': true, 'shineWipe': false};
    var10['status'] = var12;
    var9[3] = var10;
    var10 = {};
    var10['enabled'] = var11;
    var11 = {'progressBlur': false, 'label1': false, 'label2': false, 'shineWipe': true};
    var10['status'] = var11;
    var9[4] = var10;
    var4['variations'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = function getSidebarWidth() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = global;
            var1 = var2.document;
            var1 = var1.body;
            var4 = var1.style;
            var3 = var4.getPropertyValue;
            var1 = '--custom-guild-sidebar-width';
            var5 = var3.bind(var4)(var1);
            var4 = var5.slice;
            var3 = 0;
            var1 = -2;
            var1 = var4.bind(var5)(var3, var1);
            var3 = var2.parseInt;
            var2 = '375';
            var4 = '';
            if(!(var4 !== var1)) { _fun0001_ip = 77; continue _fun0001 }
 74:
            var2 = var1;
 77:
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/experiments/BrandColorRemovalExperimentPhase2.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useQuestBrandColorRemovalPhase2ExperimentConfig(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var2 = var3.questConfig;
            var _closure2_slot0 = var2;
            var8 = var3.location;
            var9 = undefined;
            var _closure2_slot2 = var9;
            var _closure2_slot3 = var9;
            var _closure2_slot4 = var9;
            var _closure2_slot5 = var9;
            var6 = _closure1_slot1;
            var5 = var6.useMemo;
            var2 = var2.startsAt;
            var4 = new Array(1);
            var4[0] = var2;
            var2 = function() {
                var1 = global;
                var3 = var1.Date;
                var1 = _closure2_slot0;
                var4 = var1.startsAt;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var5 = var2;
                var1 = new var5[var3](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var4 = var5.bind(var6)(var2, var4);
            var2 = _closure1_slot2;
            var6 = var4 >= var2;
            var _closure2_slot1 = var6;
            var5 = _closure1_slot3;
            var4 = var5.useConfig;
            var2 = {};
            var7 = 'NONE';
            if(!var6) { _fun0002_ip = 111; continue _fun0002 }
 108:
            var7 = var8;
 111:
            var2['location'] = var7;
            var7 = var4.bind(var5)(var2);
            _closure2_slot2 = var7;
            var4 = var7.status;
            var2 = null;
            var8 = var2 != var4;
            var5 = 270;
            var2 = var5;
            if(!var8) { _fun0002_ip = 165; continue _fun0002 }
 147:
            var4 = var4.label1;
            var2 = var5;
            if(!var4) { _fun0002_ip = 165; continue _fun0002 }
 159:
            var2 = 300;
 165:
            _closure2_slot3 = var2;
            var4 = _closure1_slot1;
            var8 = var4.useState;
            var5 = function() {
                var2 = _closure1_slot4;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var1 = _closure2_slot3;
                var1 = var2 < var1;
                return var1;
            };
            var8 = var8.bind(var4)(var5);
            var5 = _closure1_slot0;
            var3 = 2;
            var8 = var5.bind(var9)(var8, var3);
            var3 = 0;
            var5 = var8[var3];
            _closure2_slot4 = var5;
            var3 = 1;
            var3 = var8[var3];
            _closure2_slot5 = var3;
            var8 = var4.useEffect;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = global;
                var5 = var2.MutationObserver;
                var3 = var5.prototype;
                var4 = Object.create(var3, {constructor: {value: var5}});
                var8 = function() {
                    var3 = _closure2_slot5;
                    var4 = _closure1_slot4;
                    var1 = undefined;
                    var4 = var4.bind(var1)();
                    var2 = _closure2_slot3;
                    var2 = var4 < var2;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var9 = var4;
                var3 = new var9[var5](var8, var7);
                var5 = var3 instanceof Object ? var3 : var4;
                var _closure3_slot0 = var5;
                var4 = var5.observe;
                var2 = var2.document;
                var3 = var2.body;
                var2 = {};
                var6 = true;
                var2['attributes'] = var6;
                var6 = ['style'];
                var2['attributeFilter'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.disconnect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var2 = var8.bind(var4)(var2, var3);
            var3 = var4.useMemo;
            var2 = new Array(3);
            var2[0] = var7;
            var2[1] = var6;
            var2[2] = var5;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    var1 = var1.enabled;
                    if(!var1) { _fun0003_ip = 22; continue _fun0003 }
 15:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0003_ip = 41; continue _fun0003 }
 22:
                    var1 = {};
                    var2 = false;
                    var1['enabled'] = var2;
                    var2 = undefined;
                    var1['status'] = var2;
                    _fun0003_ip = 212; continue _fun0003;
 41:
                    var2 = {};
                    var10 = _closure2_slot2;
                    var11 = var2;
                    var4 = copyDataProperties(var11, var10);
                    var4 = {};
                    var5 = _closure2_slot2;
                    var10 = var5.status;
                    var11 = var4;
                    var5 = copyDataProperties(var11, var10);
                    var5 = _closure2_slot2;
                    var6 = var5.status;
                    var7 = null;
                    var9 = var7 == var6;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 98; continue _fun0003 }
 92:
                    var8 = var6.label1;
 98:
                    if(!var8) { _fun0003_ip = 108; continue _fun0003 }
 101:
                    var6 = _closure2_slot4;
                    var8 = !var6;
 108:
                    var6 = 'label1';
                    var4[var6] = var8;
                    var6 = _closure2_slot2;
                    var6 = var6.status;
                    var9 = var7 == var6;
                    var8 = undefined;
                    if(var9) { _fun0003_ip = 141; continue _fun0003 }
 135:
                    var8 = var6.label2;
 141:
                    if(!var8) { _fun0003_ip = 151; continue _fun0003 }
 144:
                    var6 = _closure2_slot4;
                    var8 = !var6;
 151:
                    var6 = 'label2';
                    var4[var6] = var8;
                    var6 = _closure2_slot2;
                    var6 = var6.status;
                    var7 = var7 == var6;
                    var5 = undefined;
                    if(var7) { _fun0003_ip = 184; continue _fun0003 }
 178:
                    var5 = var6.shineWipe;
 184:
                    if(var5) { _fun0003_ip = 191; continue _fun0003 }
 187:
                    var5 = _closure2_slot4;
 191:
                    var3 = 'shineWipe';
                    var4[var3] = var5;
                    var3 = 'status';
                    var2[var3] = var4;
                    var1 = var2;
 212:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        }
    };
    var3['useQuestBrandColorRemovalPhase2ExperimentConfig'] = var4;
    var2 = function getIsQuestBrandColorRemovalPhase2ExperimentEnabled(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var1 = var2.questConfig;
            var6 = var2.location;
            var2 = global;
            var3 = var2.Date;
            var8 = var1.startsAt;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var9 = var2;
            var1 = new var9[var3](var8, var7);
            var3 = var1 instanceof Object ? var1 : var2;
            var2 = _closure1_slot2;
            var2 = var3 >= var2;
            var4 = _closure1_slot3;
            var3 = var4.getConfig;
            var1 = {};
            var5 = 'NONE';
            if(!var2) { _fun0004_ip = 81; continue _fun0004 }
 78:
            var5 = var6;
 81:
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var1 = var1.enabled;
            if(!var1) { _fun0004_ip = 101; continue _fun0004 }
 98:
            var1 = var2;
 101:
            return var1;
        }
    };
    var3['getIsQuestBrandColorRemovalPhase2ExperimentEnabled'] = var2;
    return var1;
})();
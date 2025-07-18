// app/modules/quests/experiments/BrandColorRemovalExperiment.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var7 = native4;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot0 = var7;
    var8 = var4.Date;
    var12 = var4.Date;
    var10 = var12.UTC;
    var9 = 2025;
    var7 = 5;
    var4 = 16;
    var15 = var10.bind(var12)(var9, var7, var4);
    var7 = var8.prototype;
    var7 = Object.create(var7, {constructor: {value: var8}});
    var16 = var7;
    var4 = new var16[var8](var15, var14);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot1 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createExperiment;
    var4 = {'id': '2025-06_quest_brand_color_removal', 'kind': 'user', 'label': 'Quest Brand Color Removal'};
    var9 = {};
    var10 = false;
    var9['enabled'] = var10;
    var4['defaultConfig'] = var9;
    var10 = {'id': 1, 'label': 'Enabled'};
    var9 = {};
    var9['enabled'] = var11;
    var10['config'] = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var4['treatments'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/quests/experiments/BrandColorRemovalExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useIsQuestBrandColorRemovalExperimentEnabled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = var1.questConfig;
            var _closure2_slot0 = var4;
            var1 = var1.location;
            var6 = _closure1_slot0;
            var5 = var6.useMemo;
            var7 = var4.startsAt;
            var4 = new Array(1);
            var4[0] = var7;
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
            var2 = _closure1_slot1;
            var2 = var4 >= var2;
            var5 = _closure1_slot2;
            var4 = var5.useExperiment;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var2;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 107; continue _fun0001 }
 104:
            var1 = var2;
 107:
            return var1;
        }
    };
    var3['useIsQuestBrandColorRemovalExperimentEnabled'] = var4;
    var2 = function getIsQuestBrandColorRemovalExperimentEnabled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var2 = var1.questConfig;
            var1 = var1.location;
            var3 = global;
            var4 = var3.Date;
            var8 = var2.startsAt;
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var4 = var2 instanceof Object ? var2 : var3;
            var2 = _closure1_slot1;
            var2 = var4 >= var2;
            var5 = _closure1_slot2;
            var4 = var5.getCurrentConfig;
            var3 = {};
            var3['location'] = var1;
            var1 = {};
            var1['autoTrackExposure'] = var2;
            var1 = var4.bind(var5)(var3, var1);
            var1 = var1.enabled;
            if(!var1) { _fun0002_ip = 99; continue _fun0002 }
 96:
            var1 = var2;
 99:
            return var1;
        }
    };
    var3['getIsQuestBrandColorRemovalExperimentEnabled'] = var2;
    return var1;
})();
// app/modules/quests/experiments/VideoQuestStartCtaExperiment.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var12 = true;
    var4['value'] = var12;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var6 = 0;
    var4 = var8[var6];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.QuestsExperimentLocations;
    var _closure1_slot2 = var4;
    var5 = {};
    var5['WATCH'] = var6;
    var4 = 'WATCH';
    var5[var6] = var4;
    var4 = 1;
    var5['WATCH_WITH_TIME'] = var4;
    var6 = 'WATCH_WITH_TIME';
    var5[var4] = var6;
    var _closure1_slot3 = var5;
    var4 = var8[var4];
    var9 = var7.bind(var1)(var4);
    var6 = var9.createApexExperiment;
    var4 = {'name': '2026-01-video-quest-start-cta', 'kind': 'user'};
    var10 = {'enabled': false, 'variant': null};
    var4['defaultConfig'] = var10;
    var10 = {};
    var11 = {'enabled': false, 'variant': null};
    var10[0] = var11;
    var11 = {};
    var11['enabled'] = var12;
    var13 = var5.WATCH;
    var11['variant'] = var13;
    var10[1] = var11;
    var11 = {};
    var11['enabled'] = var12;
    var12 = var5.WATCH_WITH_TIME;
    var11['variant'] = var12;
    var10[2] = var11;
    var4['variations'] = var10;
    var4 = var6.bind(var9)(var4);
    var _closure1_slot4 = var4;
    var6 = 4;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/quests/experiments/VideoQuestStartCtaExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var3['VideoQuestStartCtaExperimentVariant'] = var5;
    var3['VideoQuestStartCtaExperiment'] = var4;
    var2 = function getVideoQuestStartCtaExperimentText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = _closure1_slot4;
            var3 = var4.getConfig;
            var1 = {};
            var5 = _closure1_slot2;
            var5 = var5.QUEST_PRIMARY_CTA;
            var1['location'] = var5;
            var1 = var3.bind(var4)(var1);
            var5 = var1.enabled;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = 3;
            var6 = var3[var5];
            var8 = undefined;
            var6 = var4.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var3[var5];
            var5 = var4.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.umdNin;
            var5 = var6.bind(var7)(var5);
            return var5;
case 2:
            var10 = 2;
            var3 = var3[var10];
            var9 = undefined;
            var5 = var4.bind(var9)(var3);
            var4 = var5.getQuestTaskDetails;
            var3 = arg1;
            var8 = var4.bind(var5)(var3);
            var3 = var1.variant;
            var1 = _closure1_slot3;
            var1 = var1.WATCH_WITH_TIME;
            if(!(var3 !== var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 3;
            var3 = var6[var1];
            var3 = var5.bind(var9)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var6[var1];
            var1 = var5.bind(var9)(var1);
            var1 = var1.t;
            var1 = var1.6fpk4L;
            var1 = var3.bind(var4)(var1);
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var3 = var6[var2];
            var3 = var7.bind(var9)(var3);
            var5 = var3.intl;
            var4 = var5.formatToPlainString;
            var2 = var6[var2];
            var2 = var7.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.GNsKiW;
            var2 = {};
            var6 = var6[var10];
            var7 = var7.bind(var9)(var6);
            var6 = var7.formatWatchTaskRemainingTime;
            var6 = var6.bind(var7)(var8);
            var2['remainTime'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['getVideoQuestStartCtaExperimentText'] = var2;
    return var1;
})();
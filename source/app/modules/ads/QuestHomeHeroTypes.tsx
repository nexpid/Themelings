// app/modules/ads/QuestHomeHeroTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 1;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/QuestHomeHeroTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function questHomeHeroFromServer(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.label_title;
            var1['labelTitle'] = var3;
            var3 = var2.label_subtitle;
            var1['labelSubtitle'] = var3;
            var3 = var2.hero_image;
            var1['heroImage'] = var3;
            var3 = var2.hero_video;
            var1['heroVideo'] = var3;
            var3 = var2.sponsor_image;
            var1['sponsorImage'] = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 0;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.questHomeHeroCtaFromServer;
            var4 = var2.cta;
            var4 = var5.bind(var6)(var4);
            var1['cta'] = var4;
            var4 = var2.quest_ids;
            var1['questIds'] = var4;
            var5 = var2.quest_home_entrypoint;
            var4 = null;
            var4 = var4 != var5;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.quest_home_entrypoint;
            var4 = {};
            var6 = var5.linear_gradient;
            var4['linearGradient'] = var6;
            var6 = var5.radial_gradient;
            var4['radialGradient'] = var6;
            var6 = var5.image;
            var4['image'] = var6;
            var6 = var5.tooltip_image;
            var4['tooltipImage'] = var6;
            var6 = var5.tooltip_title;
            var4['tooltipTitle'] = var6;
            var5 = var5.tooltip_subtitle;
            var4['tooltipSubtitle'] = var5;
            var3 = var4;
case 2:
            var1['questHomeEntrypoint'] = var3;
            var3 = var2.shelf_image;
            var1['shelfImage'] = var3;
            var2 = var2.shelf_video;
            var1['shelfVideo'] = var2;
            return var1;
        }
    };
    var3['questHomeHeroFromServer'] = var2;
    return var1;
})();
// app/modules/ads/QuestHomeHeroTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var1 = function resolveOptionalCdnUrl(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var2 = var1 != var4;
            var5 = undefined;
            var1 = undefined;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 0;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = var3.resolveAdCreativeCdnUrl;
            var1 = var2.bind(var3)(var4);
case 2:
            return var1;
        }
    };
    var _closure1_slot2 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var6);
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/ads/QuestHomeHeroTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function questHomeHeroFromServer(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var3 = var2.id;
            var1['id'] = var3;
            var3 = var2.label_title;
            var1['labelTitle'] = var3;
            var3 = var2.label_subtitle;
            var1['labelSubtitle'] = var3;
            var6 = _closure1_slot2;
            var5 = var2.hero_image;
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var1['heroImage'] = var5;
            var5 = var2.hero_video;
            var5 = var6.bind(var4)(var5);
            var1['heroVideo'] = var5;
            var5 = var2.sponsor_image;
            var5 = var6.bind(var4)(var5);
            var1['sponsorImage'] = var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var5 = 1;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.questHomeHeroCtaFromServer;
            var5 = var2.cta;
            var5 = var6.bind(var7)(var5);
            var1['cta'] = var5;
            var5 = var2.quest_ids;
            var1['questIds'] = var5;
            var6 = var2.quest_home_entrypoint;
            var5 = null;
            var6 = var5 != var6;
            var5 = undefined;
            if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var7 = var2.quest_home_entrypoint;
            var6 = {};
            var8 = var7.linear_gradient;
            var6['linearGradient'] = var8;
            var8 = var7.radial_gradient;
            var6['radialGradient'] = var8;
            var9 = _closure1_slot2;
            var8 = var7.image;
            var8 = var9.bind(var4)(var8);
            var6['image'] = var8;
            var8 = var7.tooltip_image;
            var8 = var9.bind(var4)(var8);
            var6['tooltipImage'] = var8;
            var8 = var7.tooltip_title;
            var6['tooltipTitle'] = var8;
            var7 = var7.tooltip_subtitle;
            var6['tooltipSubtitle'] = var7;
            var5 = var6;
case 4:
            var1['questHomeEntrypoint'] = var5;
            var3 = _closure1_slot2;
            var5 = var2.shelf_image;
            var5 = var3.bind(var4)(var5);
            var1['shelfImage'] = var5;
            var2 = var2.shelf_video;
            var2 = var3.bind(var4)(var2);
            var1['shelfVideo'] = var2;
            return var1;
        }
    };
    var3['questHomeHeroFromServer'] = var2;
    return var1;
})();
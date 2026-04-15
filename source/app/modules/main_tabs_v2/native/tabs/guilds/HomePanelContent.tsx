// app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var11 = 1;
    var4 = var6[var11];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DM_WIDTH;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['guildsListContainerGestured'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['guildLisetContainerDefault'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot6;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var8 = var1.MobileHomeDrawerExperiment;
            var5 = var8.useConfig;
            var1 = {};
            var9 = 'guilds';
            var1['location'] = var9;
            var1 = var5.bind(var8)(var1);
            var9 = var1.enableHome;
            var1 = 6;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useDrawerOpen;
            var8 = var1.bind(var2)(var9);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var7.container;
            var1['style'] = var5;
            var5 = {};
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var8) { _fun0001_ip = 4; continue _fun0001 }
case 2:
            var8 = var7.guildLisetContainerDefault;
            _fun0001_ip = 5; continue _fun0001;
case 4:
            var8 = var7.guildsListContainerGestured;
case 5:
            var7 = new Array(2);
            var7[0] = var8;
            var8 = null;
            if(var9) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var10 = {};
            var11 = _closure1_slot4;
            var10['width'] = var11;
            var8 = var10;
case 6:
            var7[1] = var8;
            var5['style'] = var7;
            var8 = _closure1_slot5;
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var6 = 7;
            var6 = var10[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['enableHome'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var5 = var3.bind(var4)(var2, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['HomePanelContent'] = var2;
    return var1;
})();
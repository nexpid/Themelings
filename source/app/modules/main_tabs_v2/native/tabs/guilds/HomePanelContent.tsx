// app/modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var7 = var6[var12];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.DM_WIDTH;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot7 = var8;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var12;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var12;
    var4['guildsListContainerGestured'] = var10;
    var10 = {};
    var10['flex'] = var12;
    var10['width'] = var11;
    var4['guildLisetContainerDefault'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot9 = var4;
    var4 = var7.memo;
    var2 = function() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = _closure1_slot9;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var8 = var2.MobileHomeDrawerExperiment;
            var6 = var8.useConfig;
            var2 = {};
            var9 = 'guilds';
            var2['location'] = var9;
            var2 = var6.bind(var8)(var2);
            var8 = var2.enableHome;
            var _closure2_slot0 = var8;
            var2 = _closure1_slot6;
            var9 = var2.bind(var4)();
            var2 = 8;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var2 = var6.useMobileQuestDockHeight;
            var6 = var2.bind(var6)();
            var10 = _closure1_slot1;
            var2 = 9;
            var2 = var5[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.spacing;
            var2 = var2.PX_16;
            var2 = var9 + var2;
            var10 = var2 + var6;
            var2 = 10;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useNavigation;
            var6 = var2.bind(var3)();
            var _closure2_slot1 = var6;
            var5 = _closure1_slot4;
            var3 = var5.useState;
            var2 = false;
            var9 = var3.bind(var5)(var2);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var9, var2);
            var2 = 0;
            var9 = var3[var2];
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot2 = var2;
            var3 = var5.useEffect;
            var2 = new Array(2);
            var2[0] = var6;
            var2[1] = var8;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = function handleStateChange(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var1 = arg1;
                            var1 = var1.data;
                            var6 = var1.state;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 11;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = var5.coerceGuildsRoute;
                            var3 = null;
                            var7 = var3 == var6;
                            var2 = undefined;
                            if(var7) { _fun0003_ip = 2; continue _fun0003 }
case 3:
                            var7 = var6.routes;
                            var8 = var3 == var7;
                            var2 = undefined;
                            if(var8) { _fun0003_ip = 2; continue _fun0003 }
case 4:
                            var9 = var3 == var6;
                            var8 = undefined;
                            if(var9) { _fun0003_ip = 5; continue _fun0003 }
case 6:
                            var8 = var6.index;
case 5:
                            var9 = var3 != var8;
                            var6 = 0;
                            if(!var9) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                            var6 = var8;
case 7:
                            var2 = var7[var6];
case 2:
                            var2 = var4.bind(var5)(var2);
                            if(!(var3 != var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                            var2 = var2.params;
                            var3 = var3 == var2;
                            var4 = undefined;
                            if(var3) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                            var4 = var2.drawerOpen;
case 11:
                            var3 = _closure2_slot2;
                            var2 = true;
                            var2 = var2 === var4;
                            var2 = var3.bind(var1)(var2);
case 9:
                            return var1;
                        }
                    };
                    var _closure3_slot0 = var5;
                    var3 = _closure2_slot0;
                    if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = undefined;
                    return var3;
case 13:
                    var4 = _closure2_slot1;
                    var3 = var4.addListener;
                    var2 = 'state';
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = function() {
                        var4 = _closure2_slot1;
                        var3 = var4.removeListener;
                        var2 = _closure3_slot0;
                        var1 = 'state';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var1 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var6 = _closure1_slot7;
            var5 = {};
            if(var9) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = var11.guildLisetContainerDefault;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var9 = var11.guildsListContainerGestured;
case 17:
            var5['style'] = var9;
            var12 = _closure1_slot7;
            var11 = _closure1_slot1;
            var13 = _closure1_slot2;
            var9 = 12;
            var9 = var13[var9];
            var11 = var11.bind(var4)(var9);
            var9 = {};
            var9['enableHome'] = var8;
            var9 = var12.bind(var4)(var11, var9);
            var5['children'] = var9;
            var6 = var6.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            if(!var8) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = _closure1_slot7;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 13;
            var7 = var13[var7];
            var7 = var12.bind(var4)(var7);
            var8 = var7.FloatingActionButton;
            var7 = {};
            var11 = 14;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var14 = var11.PlusLargeIcon;
            var11 = {};
            var15 = 'md';
            var11['size'] = var15;
            var11 = var9.bind(var4)(var14, var11);
            var7['icon'] = var11;
            var11 = 15;
            var14 = var13[var11];
            var14 = var12.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.l5WIbf;
            var11 = var14.bind(var15)(var11);
            var7['accessibilityLabel'] = var11;
            var11 = 16;
            var11 = var13[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.handleCreateJoinGuildPress;
            var7['onPress'] = var11;
            var7['positionBottom'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 18:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/tabs/guilds/HomePanelContent.tsx';
    var4 = var5.bind(var6)(var4);
    var3['HomePanelContent'] = var2;
    return var1;
})();
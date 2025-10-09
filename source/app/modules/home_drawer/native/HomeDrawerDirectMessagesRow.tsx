// app/modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function HomeDrawerDMsRow() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = _closure1_slot7;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var8 = var6.bind(var4)(var1);
            var3 = var8.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot4;
                var1 = var2.getUnreadPrivateChannelIds;
                var1 = var1.bind(var2)();
                var1 = var1.length;
                return var1;
            };
            var14 = var3.bind(var8)(var2, var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            var7 = _closure1_slot5;
            var13 = 6;
            var5 = var5[var13];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {};
            var8 = 'redesign/heading-18/bold';
            var5['variant'] = var8;
            var12 = 0;
            var9 = var14 > var12;
            var11 = 'interactive-normal';
            var8 = var11;
            if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = 'interactive-active';
case 2:
            var5['color'] = var8;
            var17 = _closure1_slot0;
            var8 = _closure1_slot2;
            var15 = 7;
            var9 = var8[var15];
            var9 = var17.bind(var4)(var9);
            var16 = var9.intl;
            var9 = var16.string;
            var8 = var8[var15];
            var8 = var17.bind(var4)(var8);
            var8 = var8.t;
            var8 = var8.YUU0RE;
            var8 = var9.bind(var16)(var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = var14 > var12;
            var6 = null;
            if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var7 = var7[var13];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {};
            var13 = 'text-xs/medium';
            var7['variant'] = var13;
            var12 = var14 > var12;
            if(!var12) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var11 = 'interactive-active';
case 6:
            var7['color'] = var11;
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var12 = var10[var15];
            var12 = var11.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var10 = var10[var15];
            var10 = var11.bind(var4)(var10);
            var10 = var10.t;
            var11 = var10.WCMsy8;
            var10 = {};
            var10['numPeople'] = var14;
            var10 = var12.bind(var13)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 4:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'relative';
    var9['position'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function HomeDrawerDMsRowWrapper() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var5 = undefined;
            var1 = var3.bind(var5)(var1);
            var6 = var1.MobileHomeDrawerExperiment;
            var3 = var6.useConfig;
            var1 = {};
            var7 = 'dm-expanded-children';
            var1['location'] = var7;
            var1 = var3.bind(var6)(var1);
            var6 = var1.enableHome;
            var3 = _closure1_slot1;
            var1 = 9;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var1 = null;
            if(!var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = null;
            if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 10:
            var4 = _closure1_slot5;
            var3 = _closure1_slot8;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
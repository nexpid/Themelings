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
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 3;
            var1 = var3[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getUnreadPrivateChannelIds;
                var1 = var1.bind(var2)();
                var1 = var1.length;
                return var1;
            };
            var11 = var3.bind(var5)(var2, var1);
            var10 = 0;
            var1 = var11 > var10;
            var5 = null;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot4;
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 4;
            var1 = var13[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-xs/medium', 'color': 'mobile-text-heading-primary'};
            var6 = 5;
            var8 = var13[var6];
            var8 = var7.bind(var4)(var8);
            var12 = var8.intl;
            var8 = var12.format;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.WCMsy8;
            var6 = {};
            var6['numPeople'] = var11;
            var6 = var8.bind(var12)(var7, var6);
            var1['children'] = var6;
            var5 = var3.bind(var4)(var2, var1);
case 2:
            var3 = _closure1_slot4;
            var7 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 6;
            var1 = var12[var1];
            var1 = var7.bind(var4)(var1);
            var2 = var1.HomeDrawerSharedItem;
            var1 = {};
            var8 = _closure1_slot4;
            var6 = 4;
            var6 = var12[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var12 = 'text-md/semibold';
            var6['variant'] = var12;
            var11 = var11 > var10;
            var10 = 'text-muted';
            if(!var11) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var10 = 'mobile-text-heading-primary';
case 4:
            var6['color'] = var10;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var9 = 5;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9.YUU0RF;
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var1['title'] = var6;
            var1['subtitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 9;
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
            var1 = 7;
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
            var1 = 8;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var3 = var1.isChatBesideChannelList;
            var1 = null;
            if(!var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = null;
            if(var3) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var4 = _closure1_slot4;
            var3 = _closure1_slot5;
            var2 = {};
            var1 = var4.bind(var5)(var3, var2);
case 6:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx
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
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var10 = 16;
    var9 = {'alignItems': 'center', 'justifyContent': 'center', 'gap': 16, 'marginTop': 20};
    var4['container'] = var9;
    var9 = {'textAlign': 'center', 'paddingHorizontal': 32};
    var4['text'] = var9;
    var9 = {};
    var9['marginHorizontal'] = var10;
    var4['warningBox'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = function WarningBox(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.canStartAuthorization;
            var3 = var1.hasAccountLinked;
            var13 = var1.sku;
            var12 = var1.application;
            var1 = _closure1_slot6;
            var5 = undefined;
            var7 = var1.bind(var5)();
            var11 = null;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot4;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var9 = 7;
            var3 = var3[var9];
            var3 = var6.bind(var5)(var3);
            var6 = {};
            var8 = _closure1_slot0;
            var14 = _closure1_slot2;
            var9 = var14[var9];
            var9 = var8.bind(var5)(var9);
            var9 = var9.InfoBoxLooks;
            var9 = var9.WARNING;
            var6['look'] = var9;
            var7 = var7.warningBox;
            var6['style'] = var7;
            var7 = 6;
            var9 = var14[var7];
            var9 = var8.bind(var5)(var9);
            var10 = var9.intl;
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var15 = var10.format;
            var2 = var14[var7];
            var2 = var8.bind(var5)(var2);
            var2 = var2.t;
            var9 = var2.3T0cpx;
            var2 = {};
            var2 = var15.bind(var10)(var9, var2);
            var6['children'] = var2;
            var2 = var6;
            _fun0001_ip = 6; continue _fun0001;
case 4:
            var9 = var10.formatToPlainString;
            var7 = var14[var7];
            var7 = var8.bind(var5)(var7);
            var7 = var7.t;
            var8 = var7.EgCl+Q;
            var7 = {};
            var13 = var13.name;
            var7['skuName'] = var13;
            var13 = var11 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var11 = var12.name;
case 7:
            var7['applicationName'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var6['children'] = var7;
            var2 = var6;
case 6:
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SlayerStorefrontGiftPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var11 = var1.sku;
            var10 = var1.application;
            var20 = var1.sender;
            var12 = var1.hasAccountLinked;
            var13 = var1.canStartAuthorization;
            var1 = _closure1_slot6;
            var5 = undefined;
            var15 = var1.bind(var5)();
            var19 = null;
            var2 = var19 == var11;
            var1 = null;
            if(var2) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var15.container;
            var2['style'] = var6;
            var14 = _closure1_slot4;
            var8 = _closure1_slot1;
            var21 = _closure1_slot2;
            var6 = 4;
            var6 = var21[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['sku'] = var11;
            var8 = var14.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var16 = _closure1_slot0;
            var8 = 5;
            var8 = var21[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'heading-md/normal', 'color': 'header-primary'};
            var15 = var15.text;
            var8['style'] = var15;
            var15 = 6;
            var17 = var21[var15];
            var17 = var16.bind(var5)(var17);
            var18 = var17.intl;
            var17 = var18.formatToPlainString;
            var15 = var21[var15];
            var15 = var16.bind(var5)(var15);
            var15 = var15.t;
            var16 = var15.2tBYtA;
            var15 = {};
            var15['sender'] = var20;
            var20 = var11.name;
            var15['skuName'] = var20;
            var20 = var19 == var10;
            var19 = undefined;
            if(var20) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var19 = var10.name;
case 11:
            var15['applicationName'] = var19;
            var15 = var17.bind(var18)(var16, var15);
            var8['children'] = var15;
            var8 = var14.bind(var5)(var9, var8);
            var6[1] = var8;
            var9 = _closure1_slot4;
            var8 = _closure1_slot7;
            var7 = {};
            var7['canStartAuthorization'] = var13;
            var7['hasAccountLinked'] = var12;
            var7['sku'] = var11;
            var7['application'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 9:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
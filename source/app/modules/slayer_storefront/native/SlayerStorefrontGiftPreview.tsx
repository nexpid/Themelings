// app/modules/slayer_storefront/native/SlayerStorefrontGiftPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function WarningBox(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.canStartAuthorization;
            var3 = var1.hasAccountLinked;
            var14 = var1.mobileAccountLinkingDisabled;
            var15 = var1.sku;
            var12 = var1.application;
            var1 = _closure1_slot6;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var11 = null;
            var1 = null;
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot4;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var10 = 7;
            var3 = var3[var10];
            var3 = var6.bind(var5)(var3);
            var6 = {};
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = var13[var10];
            var10 = var9.bind(var5)(var10);
            var10 = var10.InfoBoxLooks;
            var10 = var10.WARNING;
            var6['look'] = var10;
            var8 = var8.warningBox;
            var6['style'] = var8;
            var8 = 6;
            var10 = var13[var8];
            var10 = var9.bind(var5)(var10);
            var10 = var10.intl;
            if(var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var16 = var10.format;
            var2 = var13[var8];
            var2 = var9.bind(var5)(var2);
            var2 = var2.t;
            var14 = var2["3T0cpx"];
            var2 = {};
            var2 = var16.bind(var10)(var14, var2);
            var6['children'] = var2;
            var2 = var6;
            _fun0001_ip = 8; continue _fun0001;
case 6:
            var14 = var10.formatToPlainString;
            var8 = var13[var8];
            var8 = var9.bind(var5)(var8);
            var8 = var8.t;
            var9 = var8.EgCl+Q;
            var8 = {};
            var15 = var15.name;
            var8['skuName'] = var15;
            var16 = var11 == var12;
            var15 = undefined;
            if(var16) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var15 = var12.name;
case 9:
            var8['applicationName'] = var15;
            var8 = var14.bind(var10)(var9, var8);
            var6['children'] = var8;
            var2 = var6;
case 8:
            _fun0001_ip = 11; continue _fun0001;
case 4:
            var9 = var10.formatToPlainString;
            var8 = _closure1_slot1;
            var7 = 8;
            var7 = var13[var7];
            var7 = var8.bind(var5)(var7);
            var8 = var7.BMMo2K;
            var7 = {};
            var13 = var11 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var12.name;
case 12:
            var7['applicationName'] = var11;
            var7 = var9.bind(var10)(var8, var7);
            var6['children'] = var7;
            var2 = var6;
case 11:
            var1 = var4.bind(var5)(var3, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = 9;
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
            var21 = var1.sender;
            var13 = var1.hasAccountLinked;
            var14 = var1.canStartAuthorization;
            var12 = var1.mobileAccountLinkingDisabled;
            var5 = undefined;
            if(!(var12 === var5)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var12 = false;
case 14:
            var1 = _closure1_slot6;
            var16 = var1.bind(var5)();
            var20 = null;
            var2 = var20 == var11;
            var1 = null;
            if(var2) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var16.container;
            var2['style'] = var6;
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var22 = _closure1_slot2;
            var6 = 4;
            var6 = var22[var6];
            var8 = var8.bind(var5)(var6);
            var6 = {};
            var6['sku'] = var11;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(3);
            var6[0] = var8;
            var15 = _closure1_slot4;
            var17 = _closure1_slot0;
            var8 = 5;
            var8 = var22[var8];
            var8 = var17.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'heading-md/normal', 'color': 'mobile-text-heading-primary'};
            var16 = var16.text;
            var8['style'] = var16;
            var16 = 6;
            var18 = var22[var16];
            var18 = var17.bind(var5)(var18);
            var19 = var18.intl;
            var18 = var19.formatToPlainString;
            var16 = var22[var16];
            var16 = var17.bind(var5)(var16);
            var16 = var16.t;
            var17 = var16["2tBYtA"];
            var16 = {};
            var16['sender'] = var21;
            var21 = var11.name;
            var16['skuName'] = var21;
            var21 = var20 == var10;
            var20 = undefined;
            if(var21) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var20 = var10.name;
case 18:
            var16['applicationName'] = var20;
            var16 = var18.bind(var19)(var17, var16);
            var8['children'] = var16;
            var8 = var15.bind(var5)(var9, var8);
            var6[1] = var8;
            var9 = _closure1_slot4;
            var8 = _closure1_slot7;
            var7 = {};
            var7['canStartAuthorization'] = var14;
            var7['hasAccountLinked'] = var13;
            var7['mobileAccountLinkingDisabled'] = var12;
            var7['sku'] = var11;
            var7['application'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[2] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 16:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
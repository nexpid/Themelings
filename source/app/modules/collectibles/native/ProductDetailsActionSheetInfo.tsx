// app/modules/collectibles/native/ProductDetailsActionSheetInfo.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ProductNameAndDescription(arg1) {
        var1 = arg1;
        var13 = var1.product;
        var1 = _closure1_slot6;
        var4 = undefined;
        var14 = var1.bind(var4)();
        var7 = _closure1_slot0;
        var10 = _closure1_slot2;
        var1 = 4;
        var1 = var10[var1];
        var2 = var7.bind(var4)(var1);
        var1 = var2.useProductDescription;
        var9 = var1.bind(var2)(var13);
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = var14.description;
        var1['style'] = var5;
        var12 = _closure1_slot4;
        var6 = 5;
        var5 = var10[var6];
        var5 = var7.bind(var4)(var5);
        var11 = var5.Text;
        var5 = {'variant': 'heading-xl/bold', 'color': 'mobile-text-heading-primary', 'style': null, 'accessibilityRole': 'header'};
        var14 = var14.title;
        var5['style'] = var14;
        var13 = var13.name;
        var5['children'] = var13;
        var11 = var12.bind(var4)(var11, var5);
        var5 = new Array(2);
        var5[0] = var11;
        var8 = _closure1_slot4;
        var6 = var10[var6];
        var6 = var7.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-md/medium', 'color': 'text-default'};
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function ProductPurchaseStatus(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var11 = var1.product;
            var10 = var1.onTrackPress;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var4 = undefined;
            var5 = var2.bind(var4)(var1);
            var1 = var5.isPremiumCollectiblesProduct;
            var5 = var1.bind(var5)(var11);
            var1 = 7;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.useProductPurchaseState;
            var1 = var1.bind(var2)(var11);
            var8 = var1.isPurchased;
            var7 = var1.isPartiallyOwnedBundle;
            var3 = _closure1_slot4;
            var2 = _closure1_slot3;
            var1 = {};
            if(var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = !var5;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var12 = _closure1_slot2;
            var7 = 9;
            var7 = var12[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['product'] = var11;
            var7['onTrackPress'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 6:
            _fun0001_ip = 8; continue _fun0001;
case 4:
            var9 = _closure1_slot4;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 5;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
            var10 = 8;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.BEjTij;
            var10 = var11.bind(var12)(var10);
            var7['children'] = var10;
            var5 = var9.bind(var4)(var8, var7);
case 8:
            _fun0001_ip = 9; continue _fun0001;
case 2:
            var8 = _closure1_slot4;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 5;
            var6 = var13[var6];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/semibold', 'color': 'interactive-text-active'};
            var9 = 8;
            var10 = var13[var9];
            var10 = var12.bind(var4)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.t;
            var9 = var9["6cfuDj"];
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 9:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function BundleProductDetailsActionSheetInfo(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.product;
            var9 = var1.onTrackPress;
            var1 = _closure1_slot6;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useCollectiblesMobileFlexibleBundlesExperiment;
            var1 = 'BundleProductDetailsActionSheetInfo';
            var1 = var2.bind(var3)(var1);
            var5 = var1.enabled;
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var8 = var11.body;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var5;
            if(!var8) { _fun0002_ip = 5; continue _fun0002 }
case 10:
            var8 = var11.bundleBody;
case 5:
            var7[1] = var8;
            var1['style'] = var7;
            var7 = !var5;
            if(!var7) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var11 = _closure1_slot4;
            var8 = _closure1_slot7;
            var5 = {};
            var5['product'] = var10;
            var7 = var11.bind(var4)(var8, var5);
case 11:
            var5 = new Array(2);
            var5[0] = var7;
            var8 = _closure1_slot4;
            var7 = _closure1_slot8;
            var6 = {};
            var6['product'] = var10;
            var6['onTrackPress'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var11 = 2;
    var4 = var6[var11];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['marginBottom'] = var11;
    var4['title'] = var9;
    var9 = {};
    var11 = 3;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_24;
    var9['marginTop'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.space;
    var11 = var11.PX_16;
    var9['marginHorizontal'] = var11;
    var11 = 'column';
    var9['flexDirection'] = var11;
    var11 = 20;
    var9['gap'] = var11;
    var4['body'] = var9;
    var9 = {};
    var9['marginTop'] = var10;
    var4['bundleBody'] = var9;
    var9 = {'flexDirection': 'column', 'gap': 6};
    var4['description'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/ProductDetailsActionSheetInfo.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ProductDetailsActionSheetInfo(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var7 = var1.product;
            var6 = var1.onTrackPress;
            var1 = _closure1_slot6;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var3 = var7.type;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 11;
            var1 = var9[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.CollectiblesItemType;
            var1 = var1.BUNDLE;
            if(!(var3 !== var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var1 = {};
            var8 = var8.body;
            var1['style'] = var8;
            var10 = _closure1_slot4;
            var9 = _closure1_slot7;
            var8 = {};
            var8['product'] = var7;
            var9 = var10.bind(var5)(var9, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot4;
            var10 = _closure1_slot8;
            var9 = {};
            var9['product'] = var7;
            var9['onTrackPress'] = var6;
            var9 = var11.bind(var5)(var10, var9);
            var8[1] = var9;
            var1['children'] = var8;
            var1 = var4.bind(var5)(var3, var1);
            _fun0003_ip = 15; continue _fun0003;
case 13:
            var4 = _closure1_slot4;
            var3 = _closure1_slot9;
            var2 = {};
            var2['product'] = var7;
            var2['onTrackPress'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 15:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.VerticalGradient;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var1 = {};
            var2 = {'minHeight': 60, 'justifyContent': 'center', 'gap': 2};
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var3 = 4;
            var8 = var7[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['paddingTop'] = var8;
            var8 = var7[var3];
            var8 = var5.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['paddingBottom'] = var8;
            var3 = var7[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.spacing;
            var3 = var3.PX_24;
            var2['paddingStart'] = var3;
            var1['promotionalGradient'] = var2;
            var2 = {};
            var5 = 3;
            var7 = var6 < var5;
            var4 = '50%';
            var3 = var4;
            if(!var7) { _fun0001_ip = 142; continue _fun0001 }
 136:
            var3 = '60%';
 142:
            var2['width'] = var3;
            var3 = 'visible';
            var2['overflow'] = var3;
            var1['promotionalHeader'] = var2;
            var2 = {};
            var5 = var6 < var5;
            if(!var5) { _fun0001_ip = 175; continue _fun0001 }
 169:
            var4 = '60%';
 175:
            var2['width'] = var4;
            var2['overflow'] = var3;
            var1['promotionalSubheader'] = var2;
            return var1;
        }
    };
    var4 = var8.bind(var9)(var4);
    var _closure1_slot6 = var4;
    var4 = var7.memo;
    var2 = function PremiumGiftPlanSelectPromotionalBanner(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var1 = var1.claimableRewards;
            var10 = var1.length;
            var1 = _closure1_slot6;
            var5 = undefined;
            var12 = var1.bind(var5)(var10);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var9 = null;
            var2 = var9 == var1;
            var7 = undefined;
            if(var2) { _fun0002_ip = 99; continue _fun0002 }
 63:
            var2 = var1.planSelection;
            var3 = var9 == var2;
            var7 = undefined;
            if(var3) { _fun0002_ip = 99; continue _fun0002 }
 78:
            var2 = var2.gradientConfig;
            var3 = var9 == var2;
            var7 = undefined;
            if(var3) { _fun0002_ip = 99; continue _fun0002 }
 93:
            var7 = var2.gradient;
 99:
            var2 = var9 == var1;
            var15 = undefined;
            if(var2) { _fun0002_ip = 133; continue _fun0002 }
 108:
            var3 = var1.planSelection;
            var2 = var9 == var3;
            var15 = undefined;
            if(var2) { _fun0002_ip = 133; continue _fun0002 }
 123:
            var2 = var3.heading;
            var15 = var2.bind(var3)();
 133:
            var3 = var9 == var1;
            var2 = undefined;
            if(var3) { _fun0002_ip = 163; continue _fun0002 }
 142:
            var3 = var1.planSelection;
            var4 = var9 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 163; continue _fun0002 }
 157:
            var2 = var3.subheading;
 163:
            var2 = var9 != var2;
            var11 = undefined;
            if(!var2) { _fun0002_ip = 189; continue _fun0002 }
 172:
            var2 = var1.planSelection;
            var1 = var2.subheading;
            var11 = var1.bind(var2)(var10);
 189:
            var2 = var9 != var7;
            var1 = null;
            if(!var2) { _fun0002_ip = 447; continue _fun0002 }
 201:
            var2 = var9 != var15;
            var1 = null;
            if(!var2) { _fun0002_ip = 447; continue _fun0002 }
 213:
            var4 = _closure1_slot5;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 6;
            var2 = var6[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var13 = var12.promotionalGradient;
            var2['style'] = var13;
            var13 = _closure1_slot3;
            var14 = var13.START;
            var2['start'] = var14;
            var13 = var13.END;
            var2['end'] = var13;
            var2['colors'] = var7;
            var14 = _closure1_slot4;
            var7 = _closure1_slot0;
            var13 = 7;
            var6 = var6[var13];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-sm/semibold', 'color': 'white'};
            var17 = var12.promotionalHeader;
            var16 = new Array(1);
            var16[0] = var17;
            var6['style'] = var16;
            var6['children'] = var15;
            var7 = var14.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = 1;
            var7 = var10 > var7;
            if(!var7) { _fun0002_ip = 368; continue _fun0002 }
 364:
            var7 = var9 != var11;
 368:
            if(!var7) { _fun0002_ip = 433; continue _fun0002 }
 371:
            var10 = _closure1_slot4;
            var9 = _closure1_slot0;
            var8 = _closure1_slot2;
            var8 = var8[var13];
            var8 = var9.bind(var5)(var8);
            var9 = var8.Text;
            var8 = {'style': null, 'variant': 'text-sm/normal', 'color': 'white'};
            var12 = var12.promotionalSubheader;
            var8['style'] = var12;
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 433:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 447:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/gifting/PremiumGiftPlanSelectPromotionalBanner.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
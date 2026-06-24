// app/modules/user_profile/native/EditCollectiblesPreviewDetails.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function EditCollectiblesPreviewDescription(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var7 = var1.user;
            var10 = var1.product;
            var21 = var1.purchase;
            var2 = var1.nitroJoinCTA;
            var8 = var1.nitroUpgradeCTA;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var4 = 5;
            var4 = var1[var4];
            var6 = undefined;
            var12 = var5.bind(var6)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var1 = var1.locale;
                return var1;
            };
            var24 = var11.bind(var12)(var9, var4);
            var11 = _closure1_slot1;
            var9 = 6;
            var4 = var1[var9];
            var11 = var11.bind(var6)(var4);
            var4 = var11.canUseCollectibles;
            var4 = var4.bind(var11)(var7);
            var12 = 7;
            var1 = var1[var12];
            var5 = var5.bind(var6)(var1);
            var1 = var5.isPremiumCollectiblesProduct;
            var1 = var1.bind(var5)(var10);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var10 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var12];
            var10 = var10.bind(var6)(var5);
            var5 = var10.isPremiumCollectiblesPurchase;
            var1 = var5.bind(var10)(var21);
case 2:
            var5 = !var4;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var11 = _closure1_slot0;
            var10 = _closure1_slot2;
            var10 = var10[var12];
            var11 = var11.bind(var6)(var10);
            var10 = var11.isPremiumCollectiblesPurchase;
            var5 = var10.bind(var11)(var21);
case 4:
            var15 = null;
            if(!(var15 != var21)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 8:
            var10 = var15 == var21;
            var5 = undefined;
            if(var10) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = var21.expiresAt;
case 9:
            var5 = var15 != var5;
            var22 = null;
            if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 8;
            var5 = var11[var5];
            var12 = var10.bind(var6)(var5);
            var11 = var12.diffAsUnits;
            var5 = global;
            var5 = var5.Date;
            var10 = var5.prototype;
            var10 = Object.create(var10, {constructor: {value: var5}});
            var31 = var10;
            var5 = new var31[var5](var30);
            var10 = var5 instanceof Object ? var5 : var10;
            var5 = var21.expiresAt;
            var22 = var11.bind(var12)(var10, var5);
case 11:
            var11 = _closure1_slot7;
            var10 = _closure1_slot6;
            var5 = {};
            var13 = var15 != var22;
            if(!var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var16 = _closure1_slot5;
            var18 = _closure1_slot0;
            var23 = _closure1_slot2;
            var12 = 9;
            var12 = var23[var12];
            var12 = var18.bind(var6)(var12);
            var14 = var12.Text;
            var12 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var17 = 10;
            var19 = var23[var17];
            var19 = var18.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.format;
            var17 = var23[var17];
            var17 = var18.bind(var6)(var17);
            var17 = var17.t;
            var18 = var17.Io7ozn;
            var17 = {};
            var23 = var22.days;
            var22 = var23.toString;
            var22 = var22.bind(var23)();
            var17['days'] = var22;
            var17 = var19.bind(var20)(var18, var17);
            var12['children'] = var17;
            var13 = var16.bind(var6)(var14, var12);
case 13:
            var12 = new Array(3);
            var12[0] = var13;
            var17 = _closure1_slot5;
            var19 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 9;
            var13 = var18[var14];
            var13 = var19.bind(var6)(var13);
            var16 = var13.Text;
            var13 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var22 = 10;
            var20 = var18[var22];
            var20 = var19.bind(var6)(var20);
            var23 = var20.intl;
            var20 = var23.format;
            var18 = var18[var22];
            var18 = var19.bind(var6)(var18);
            var18 = var18.t;
            var19 = var18.gW9R4B;
            var18 = {};
            var26 = var15 == var21;
            var25 = undefined;
            if(var26) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var28 = var21.purchasedAt;
            var27 = var28.toLocaleDateString;
            var26 = {'month': 'long', 'year': 'numeric'};
            var25 = var27.bind(var28)(var24, var26);
case 15:
            var18['date'] = var25;
            var18 = var20.bind(var23)(var19, var18);
            var13['children'] = var18;
            var13 = var17.bind(var6)(var16, var13);
            var12[1] = var13;
            var16 = var15 == var21;
            var13 = undefined;
            if(var16) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var13 = var21.expiresAt;
case 17:
            var13 = var15 != var13;
            if(!var13) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var16 = _closure1_slot5;
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var14 = var17[var14];
            var14 = var18.bind(var6)(var14);
            var15 = var14.Text;
            var14 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var19 = var17[var22];
            var19 = var18.bind(var6)(var19);
            var20 = var19.intl;
            var19 = var20.format;
            var17 = var17[var22];
            var17 = var18.bind(var6)(var17);
            var17 = var17.t;
            var18 = var17.eZSTa5;
            var17 = {};
            var23 = var21.expiresAt;
            var22 = var23.toLocaleDateString;
            var21 = {'minute': 'numeric', 'hour': 'numeric', 'day': 'numeric', 'month': 'long', 'year': 'numeric'};
            var21 = var22.bind(var23)(var24, var21);
            var17['date'] = var21;
            var17 = var19.bind(var20)(var18, var17);
            var14['children'] = var17;
            var13 = var16.bind(var6)(var15, var14);
case 19:
            var12[2] = var13;
            var5['children'] = var12;
            var5 = var11.bind(var6)(var10, var5);
            return var5;
case 6:
            if(var1) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = _closure1_slot5;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 9;
            var1 = var15[var1];
            var1 = var14.bind(var6)(var1);
            var5 = var1.Text;
            var1 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var11 = 10;
            var12 = var15[var11];
            var12 = var14.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var6)(var11);
            var11 = var11.t;
            var11 = var11.fEGjVQ;
            var11 = var12.bind(var13)(var11);
            var1['children'] = var11;
            var1 = var10.bind(var6)(var5, var1);
            _fun0001_ip = 23; continue _fun0001;
case 21:
            if(var4) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isPremium;
            var9 = var4.bind(var5)(var7);
            var7 = _closure1_slot5;
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 9;
            var4 = var10[var4];
            var4 = var5.bind(var6)(var4);
            var5 = var4.Text;
            var4 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            if(var9) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var4['children'] = var2;
            var2 = var7.bind(var6)(var5, var4);
            _fun0001_ip = 28; continue _fun0001;
case 26:
            var4['children'] = var8;
            var2 = var7.bind(var6)(var5, var4);
case 28:
            _fun0001_ip = 29; continue _fun0001;
case 24:
            var5 = _closure1_slot5;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 9;
            var3 = var11[var3];
            var3 = var10.bind(var6)(var3);
            var4 = var3.Text;
            var3 = {'variant': 'text-sm/medium', 'color': 'text-default'};
            var7 = 10;
            var8 = var11[var7];
            var8 = var10.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var7 = var11[var7];
            var7 = var10.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.hmyYK8;
            var7 = var8.bind(var9)(var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 29:
            var1 = var2;
case 23:
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var7 = var4.Fragment;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'width': '100%', 'marginTop': 16, 'alignItems': 'center', 'gap': 2};
    var4['productDetailsContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/EditCollectiblesPreviewDetails.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function EditCollectiblesPreviewDetails(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var14 = var2.user;
            var1 = var2.previewSkuId;
            var11 = var2.nitroJoinCTA;
            var10 = var2.nitroUpgradeCTA;
            var2 = _closure1_slot8;
            var5 = undefined;
            var6 = var2.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 11;
            var2 = var4[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.bind(var5)(var1);
            var13 = var2.product;
            var12 = var2.purchase;
            var16 = null;
            var2 = var16 == var1;
            var1 = null;
            if(var2) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            if(!(var16 == var13)) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var2 = var16 == var12;
            var1 = null;
            if(var2) { _fun0002_ip = 30; continue _fun0002 }
case 32:
            var4 = _closure1_slot7;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var6.productDetailsContainer;
            var2['style'] = var6;
            var9 = _closure1_slot5;
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var6 = 9;
            var6 = var15[var6];
            var6 = var8.bind(var5)(var6);
            var8 = var6.Text;
            var6 = {'variant': 'text-md/bold', 'color': 'text-default'};
            var17 = var16 == var13;
            var15 = undefined;
            if(var17) { _fun0002_ip = 34; continue _fun0002 }
case 35:
            var15 = var13.name;
case 34:
            if(!(var16 == var15)) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var17 = var16 == var12;
            var16 = undefined;
            if(var17) { _fun0002_ip = 38; continue _fun0002 }
case 39:
            var16 = var12.name;
case 38:
            var15 = var16;
case 36:
            var6['children'] = var15;
            var8 = var9.bind(var5)(var8, var6);
            var6 = new Array(2);
            var6[0] = var8;
            var9 = _closure1_slot5;
            var8 = _closure1_slot9;
            var7 = {};
            var7['user'] = var14;
            var7['product'] = var13;
            var7['purchase'] = var12;
            var7['nitroJoinCTA'] = var11;
            var7['nitroUpgradeCTA'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 30:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
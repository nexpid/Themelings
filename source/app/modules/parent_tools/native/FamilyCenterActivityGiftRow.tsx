// app/modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'borderBottomColor': null, 'borderBottomWidth': 1, 'paddingVertical': 12};
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var4 = var4.colors;
    var4 = var4.BORDER_SUBTLE;
    var10['borderBottomColor'] = var4;
    var4 = 12;
    var7['container'] = var10;
    var10 = {'display': 'flex', 'flexDirection': 'column', 'flexShrink': 1};
    var7['textContainer'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FamilyCenterActivityGiftRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.skuId;
            var9 = var1.subscriptionPlanId;
            var14 = var1.price;
            var12 = var1.gifterUserId;
            var16 = var1.claimed;
            var8 = var1.offeredAt;
            var7 = var1.claimedAt;
            var1 = _closure1_slot6;
            var5 = undefined;
            var11 = var1.bind(var5)();
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
            var1 = var4[var1];
            var1 = var3.bind(var5)(var1);
            var1 = var1.bind(var5)(var2);
            var15 = var1.product;
            var3 = _closure1_slot0;
            var1 = 6;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var1 = var6.useTeenUserForId;
            var18 = var1.bind(var6)(var12);
            var1 = 7;
            var1 = var4[var1];
            var6 = var3.bind(var5)(var1);
            var4 = var6.getPurchaseDisplayInfo;
            var1 = null;
            var12 = var1 != var15;
            var3 = null;
            if(!var12) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var15;
case 2:
            var3 = var4.bind(var6)(var3, var9);
            var13 = var3.displayName;
            var6 = var3.typeName;
            var12 = var3.isSubscription;
            if(!(var1 != var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var12) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            if(!(var1 == var15)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
            return var1;
case 4:
            if(!(var1 != var13)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 8;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.getGiftSubtext;
            var2 = {};
            var2['claimed'] = var16;
            var2['price'] = var14;
            var16 = var1 != var18;
            var14 = null;
            if(!var16) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var17 = _closure1_slot1;
            var19 = _closure1_slot2;
            var16 = 9;
            var16 = var19[var16];
            var17 = var17.bind(var5)(var16);
            var16 = var17.getName;
            var14 = var16.bind(var17)(var18);
case 10:
            var2['gifterName'] = var14;
            var2['offeredAt'] = var8;
            var2['claimedAt'] = var7;
            var14 = var3.bind(var4)(var2);
            var17 = var13;
            if(!(var1 != var6)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = ' • ';
            var17 = var4.bind(var3)(var13, var2, var6);
case 12:
            var4 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = var11.container;
            var2['style'] = var6;
            var8 = _closure1_slot4;
            var7 = _closure1_slot1;
            var16 = _closure1_slot2;
            var6 = 10;
            var6 = var16[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['displayName'] = var13;
            var16 = var1 != var15;
            var13 = null;
            if(!var16) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var13 = var15;
case 14:
            var6['product'] = var13;
            var6['isSubscription'] = var12;
            var6['subscriptionPlanId'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot5;
            var8 = _closure1_slot3;
            var7 = {};
            var11 = var11.textContainer;
            var7['style'] = var11;
            var13 = _closure1_slot4;
            var12 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 11;
            var10 = var15[var11];
            var10 = var12.bind(var5)(var10);
            var16 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'interactive-text-active', 'ellipsizeMode': 'tail', 'lineClamp': 1};
            var10['children'] = var17;
            var16 = var13.bind(var5)(var16, var10);
            var10 = new Array(2);
            var10[0] = var16;
            var11 = var15[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 8:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
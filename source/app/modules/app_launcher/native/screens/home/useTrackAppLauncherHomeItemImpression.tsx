// app/modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportAll;
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
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackAppLauncherHomeItemImpression() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var1 = var4.useTrackAppLauncherItemImpressionOnFirstView;
        var1 = var1.bind(var4)();
        var6 = var1.trackAppLauncherItemImpressionOnFirstView;
        var _closure2_slot0 = var6;
        var1 = {};
        var5 = _closure1_slot3;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1) {
            var1 = arg1;
            var3 = var1.viewableItems;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    var1 = arg1;
                    var10 = var1.item;
                    var3 = var10.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 2;
                    var2 = var1[var6];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.RECOMMENDATION_APP;
                    if(!(var3 !== var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = var10.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.RECOMMENDATION_BANNER_CARD;
                    if(!(var3 !== var2)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var3 = var10.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.SHELF_ITEM;
                    if(!(var3 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var10.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.SHELF_ITEM_TUPLE;
                    if(!(var3 === var2)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var9 = var10.shelfItem1SectionPosition;
                    var11 = var10.shelfItem2SectionPosition;
                    var2 = var10.shelfItem1;
                    var2 = var2.application;
                    var7 = var2.id;
                    var2 = var10.shelfItem2;
                    var3 = null;
                    var4 = var3 == var2;
                    var6 = undefined;
                    if(var4) { _fun0001_ip = 10; continue _fun0001 }
case 11:
                    var2 = var2.application;
                    var6 = var2.id;
case 10:
                    var2 = var10.shelfItem1;
                    var2 = var2.application;
                    var17 = var2.flags;
                    var2 = var10.shelfItem2;
                    var3 = var3 == var2;
                    var8 = undefined;
                    if(var3) { _fun0001_ip = 12; continue _fun0001 }
case 13:
                    var2 = var2.application;
                    var8 = var2.flags;
case 12:
                    _fun0001_ip = 14; continue _fun0001;
case 8:
                    return var1;
case 6:
                    var9 = var10.sectionPosition;
                    var7 = var10.applicationId;
                    var2 = var10.section;
                    var2 = var2.application;
                    var17 = var2.flags;
                    var6 = undefined;
                    var11 = undefined;
                    var8 = undefined;
                    _fun0001_ip = 14; continue _fun0001;
case 4:
                    var9 = var10.sectionPosition;
                    var2 = var10.item;
                    var2 = var2.application;
                    var7 = var2.id;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 3;
                    var2 = var13[var2];
                    var13 = var12.bind(var1)(var2);
                    var12 = var13.getApplicationFlags;
                    var2 = var10.item;
                    var2 = var2.application;
                    var17 = var12.bind(var13)(var2);
                    var6 = undefined;
                    var11 = undefined;
                    var8 = undefined;
                    _fun0001_ip = 14; continue _fun0001;
case 2:
                    var9 = var10.sectionPosition;
                    var2 = var10.application;
                    var7 = var2.id;
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var2 = 3;
                    var2 = var13[var2];
                    var13 = var12.bind(var1)(var2);
                    var12 = var13.getApplicationFlags;
                    var2 = var10.application;
                    var17 = var12.bind(var13)(var2);
                    var6 = undefined;
                    var11 = undefined;
                    var8 = undefined;
case 14:
                    var4 = _closure2_slot0;
                    var3 = {};
                    var16 = var10.sectionName;
                    var12 = global;
                    var13 = var12.HermesInternal;
                    var13 = var13.concat;
                    var15 = 'sectionName:';
                    var14 = ' applicationId:';
                    var13 = var13.bind(var15)(var16, var14, var7);
                    var3['itemKey'] = var13;
                    var13 = var10.sectionName;
                    var3['sectionName'] = var13;
                    var3['sectionPosition'] = var9;
                    var9 = var10.sectionOverallPosition;
                    var3['sectionOverallPosition'] = var9;
                    var3['applicationId'] = var7;
                    var13 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var9 = 4;
                    var7 = var7[var9];
                    var16 = var13.bind(var1)(var7);
                    var13 = var16.asUintN;
                    var7 = 32;
                    var13 = var13.bind(var16)(var7, var17);
                    var3['applicationFlags'] = var13;
                    var3 = var4.bind(var1)(var3);
                    var4 = null;
                    var3 = var4 != var6;
                    if(!var3) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var3 = var4 != var11;
case 15:
                    if(!var3) { _fun0001_ip = 17; continue _fun0001 }
case 18:
                    var3 = _closure2_slot0;
                    var2 = {};
                    var13 = var10.sectionName;
                    var12 = var12.HermesInternal;
                    var12 = var12.concat;
                    var12 = var12.bind(var15)(var13, var14, var6);
                    var2['itemKey'] = var12;
                    var12 = var10.sectionName;
                    var2['sectionName'] = var12;
                    var2['sectionPosition'] = var11;
                    var10 = var10.sectionOverallPosition;
                    var2['sectionOverallPosition'] = var10;
                    var2['applicationId'] = var6;
                    var6 = var4 != var8;
                    var4 = undefined;
                    if(!var6) { _fun0001_ip = 19; continue _fun0001 }
case 20:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var5 = var5[var9];
                    var6 = var6.bind(var1)(var5);
                    var5 = var6.asUintN;
                    var4 = var5.bind(var6)(var7, var8);
case 19:
                    var2['applicationFlags'] = var4;
                    var2 = var3.bind(var1)(var2);
case 17:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['trackAppLauncherHomeItemImpression'] = var2;
        return var1;
    };
    var3['useTrackAppLauncherHomeItemImpression'] = var2;
    return var1;
})();
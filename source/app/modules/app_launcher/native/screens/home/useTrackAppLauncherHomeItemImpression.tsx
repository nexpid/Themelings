// app/modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/useTrackAppLauncherHomeItemImpression.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackAppLauncherHomeItemImpression() {
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 1;
        var4 = var4[var1];
        var1 = undefined;
        var4 = var5.bind(var1)(var4);
        var1 = var4.useTrackAppLauncherItemImpressionOnFirstView;
        var1 = var1.bind(var4)();
        var6 = var1.trackAppLauncherItemImpressionOnFirstView;
        var _closure2_slot0 = var6;
        var1 = {};
        var5 = _closure1_slot2;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var6;
        var2 = function(arg1) {
            var1 = arg1;
            var3 = var1.viewableItems;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var4 = var6.type;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var5 = 2;
                    var3 = var1[var5];
                    var1 = undefined;
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.RECOMMENDATION_APP;
                    if(!(var4 !== var3)) { _fun0001_ip = 355; continue _fun0001 }
 57:
                    var4 = var6.type;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var5];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.RECOMMENDATION_BANNER_CARD;
                    if(!(var4 !== var3)) { _fun0001_ip = 311; continue _fun0001 }
 98:
                    var4 = var6.type;
                    var7 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var5];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.SHELF_ITEM;
                    if(!(var4 !== var3)) { _fun0001_ip = 277; continue _fun0001 }
 139:
                    var3 = var6.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.SHELF_ITEM_TUPLE;
                    if(!(var3 === var2)) { _fun0001_ip = 275; continue _fun0001 }
 177:
                    var14 = var6.shelfItem1SectionPosition;
                    var7 = var6.shelfItem2SectionPosition;
                    var2 = var6.shelfItem1;
                    var2 = var2.application;
                    var13 = var2.id;
                    var2 = var6.shelfItem2;
                    var3 = null;
                    var4 = var3 == var2;
                    var5 = undefined;
                    if(var4) { _fun0001_ip = 232; continue _fun0001 }
 222:
                    var2 = var2.application;
                    var5 = var2.id;
 232:
                    var2 = var6.shelfItem1;
                    var2 = var2.application;
                    var12 = var2.flags;
                    var2 = var6.shelfItem2;
                    var3 = var3 == var2;
                    var4 = undefined;
                    if(var3) { _fun0001_ip = 273; continue _fun0001 }
 263:
                    var2 = var2.application;
                    var4 = var2.flags;
 273:
                    _fun0001_ip = 387; continue _fun0001;
 275:
                    return var1;
 277:
                    var14 = var6.sectionPosition;
                    var13 = var6.applicationId;
                    var2 = var6.section;
                    var2 = var2.application;
                    var12 = var2.flags;
                    var5 = undefined;
                    var7 = undefined;
                    var4 = undefined;
                    _fun0001_ip = 387; continue _fun0001;
 311:
                    var14 = var6.sectionPosition;
                    var2 = var6.item;
                    var2 = var2.application;
                    var13 = var2.id;
                    var2 = var6.item;
                    var2 = var2.application;
                    var12 = var2.flags;
                    var5 = undefined;
                    var7 = undefined;
                    var4 = undefined;
                    _fun0001_ip = 387; continue _fun0001;
 355:
                    var14 = var6.sectionPosition;
                    var2 = var6.application;
                    var13 = var2.id;
                    var2 = var6.application;
                    var12 = var2.flags;
                    var5 = undefined;
                    var7 = undefined;
                    var4 = undefined;
 387:
                    var9 = _closure2_slot0;
                    var3 = {};
                    var16 = var6.sectionName;
                    var8 = global;
                    var10 = var8.HermesInternal;
                    var15 = var10.concat;
                    var11 = 'sectionName:';
                    var10 = ' applicationId:';
                    var15 = var15.bind(var11)(var16, var10, var13);
                    var3['itemKey'] = var15;
                    var15 = var6.sectionName;
                    var3['sectionName'] = var15;
                    var3['sectionPosition'] = var14;
                    var14 = var6.sectionOverallPosition;
                    var3['sectionOverallPosition'] = var14;
                    var3['applicationId'] = var13;
                    var3['applicationFlags'] = var12;
                    var3 = var9.bind(var1)(var3);
                    var9 = null;
                    var3 = var9 != var5;
                    if(!var3) { _fun0001_ip = 493; continue _fun0001 }
 489:
                    var3 = var9 != var7;
 493:
                    if(!var3) { _fun0001_ip = 572; continue _fun0001 }
 496:
                    var3 = _closure2_slot0;
                    var2 = {};
                    var9 = var6.sectionName;
                    var8 = var8.HermesInternal;
                    var8 = var8.concat;
                    var8 = var8.bind(var11)(var9, var10, var5);
                    var2['itemKey'] = var8;
                    var8 = var6.sectionName;
                    var2['sectionName'] = var8;
                    var2['sectionPosition'] = var7;
                    var6 = var6.sectionOverallPosition;
                    var2['sectionOverallPosition'] = var6;
                    var2['applicationId'] = var5;
                    var2['applicationFlags'] = var4;
                    var2 = var3.bind(var1)(var2);
 572:
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
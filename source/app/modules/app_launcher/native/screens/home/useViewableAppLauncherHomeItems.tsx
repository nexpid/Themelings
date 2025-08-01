// app/modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx
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
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/home/useViewableAppLauncherHomeItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useViewableAppLauncherHomeItems() {
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var2 = 2;
        var3 = var8[var2];
        var5 = undefined;
        var9 = var7.bind(var5)(var3);
        var3 = var9.useSharedValue;
        var6 = false;
        var3 = var3.bind(var9)(var6);
        var _closure2_slot0 = var3;
        var2 = var8[var2];
        var5 = var7.bind(var5)(var2);
        var2 = var5.useSharedValue;
        var2 = var2.bind(var5)(var6);
        var _closure2_slot1 = var2;
        var7 = _closure1_slot2;
        var5 = var7.useRef;
        var1 = {};
        var8 = var5.bind(var7)(var1);
        var _closure2_slot2 = var8;
        var1 = {};
        var6 = var7.useCallback;
        var5 = new Array(3);
        var5[0] = var3;
        var5[1] = var2;
        var5[2] = var8;
        var4 = function(arg1) {
            var1 = arg1;
            var3 = var1.viewableItems;
            var2 = var3.forEach;
            var1 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var7 = var1.item;
                    var3 = var7.type;
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var8 = 3;
                    var2 = var1[var8];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.SHELF_ITEM;
                    var2 = var3 !== var2;
                    if(var2) { _fun0001_ip = 73; continue _fun0001 }
 57:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var2 = var3.bind(var4)();
 73:
                    if(var2) { _fun0001_ip = 95; continue _fun0001 }
 76:
                    var4 = _closure2_slot0;
                    var3 = var4.set;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
 95:
                    var3 = var7.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var8];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.LEARN_MORE;
                    var2 = var3 !== var2;
                    if(var2) { _fun0001_ip = 152; continue _fun0001 }
 136:
                    var4 = _closure2_slot1;
                    var3 = var4.get;
                    var2 = var3.bind(var4)();
 152:
                    if(var2) { _fun0001_ip = 174; continue _fun0001 }
 155:
                    var4 = _closure2_slot1;
                    var3 = var4.set;
                    var2 = true;
                    var2 = var3.bind(var4)(var2);
 174:
                    var3 = var7.type;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var8];
                    var2 = var4.bind(var1)(var2);
                    var2 = var2.AppLauncherHomeListItemType;
                    var2 = var2.RECOMMENDATION_SECTION_HEADER;
                    var2 = var3 !== var2;
                    if(!var2) { _fun0001_ip = 253; continue _fun0001 }
 215:
                    var4 = var7.type;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var8];
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.SECTION_HEADER;
                    var2 = var4 !== var3;
 253:
                    if(var2) { _fun0001_ip = 284; continue _fun0001 }
 256:
                    var3 = _closure2_slot2;
                    var4 = var3.current;
                    var3 = var7.sectionName;
                    var4 = var4[var3];
                    var3 = null;
                    var2 = var3 != var4;
 284:
                    if(var2) { _fun0001_ip = 458; continue _fun0001 }
 290:
                    var2 = _closure2_slot2;
                    var4 = var2.current;
                    var3 = var7.sectionName;
                    var2 = true;
                    var4[var3] = var2;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var2 = 4;
                    var2 = var9[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.trackImpression;
                    var2 = {};
                    var5 = 5;
                    var10 = var9[var5];
                    var10 = var8.bind(var1)(var10);
                    var10 = var10.ImpressionTypes;
                    var10 = var10.VIEW;
                    var2['type'] = var10;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.ImpressionNames;
                    var5 = var5.APP_LAUNCHER_SECTION;
                    var2['name'] = var5;
                    var5 = {};
                    var8 = var7.sectionName;
                    var5['section_name'] = var8;
                    var8 = var7.numItems;
                    var5['num_items'] = var8;
                    var7 = var7.numVisibleItems;
                    var5['num_visible_items'] = var7;
                    var7 = _closure1_slot3;
                    var6 = var7.entrypoint;
                    var6 = var6.bind(var7)();
                    var5['source'] = var6;
                    var2['properties'] = var5;
                    var2 = var3.bind(var4)(var2);
 458:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var4 = var6.bind(var7)(var4, var5);
        var1['handleViewableItemsChanged'] = var4;
        var1['hasViewedActivityItem'] = var3;
        var1['hasViewedLearnMoreItem'] = var2;
        return var1;
    };
    var3['useViewableAppLauncherHomeItems'] = var2;
    return var1;
})();
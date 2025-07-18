// app/modules/app_launcher/native/screens/search/useTrackSearchItems.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_launcher/native/screens/search/useTrackSearchItems.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useTrackSearchItems(arg1, arg2, arg3) {
        var8 = arg1;
        var7 = arg2;
        var6 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 1;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useAppLauncherContext;
        var3 = var3.bind(var4)();
        var9 = var3.entrypoint;
        var _closure2_slot3 = var9;
        var5 = _closure1_slot2;
        var3 = var5.useRef;
        var1 = {};
        var1 = var3.bind(var5)(var1);
        var _closure2_slot4 = var1;
        var1 = var5.useRef;
        var1 = var1.bind(var5)(var6);
        var _closure2_slot5 = var1;
        var1 = {};
        var4 = var5.useCallback;
        var3 = new Array(4);
        var3[0] = var9;
        var3[1] = var8;
        var3[2] = var7;
        var3[3] = var6;
        var2 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = arg1;
                var3 = var1.viewableItems;
                var2 = _closure2_slot5;
                var4 = var2.current;
                var2 = _closure2_slot2;
                if(!(var4 !== var2)) { _fun0001_ip = 55; continue _fun0001 }
 29:
                var4 = _closure2_slot5;
                var2 = _closure2_slot2;
                var4['current'] = var2;
                var2 = _closure2_slot4;
                var1 = {};
                var2['current'] = var1;
 55:
                var2 = var3.forEach;
                var1 = function(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var6 = arg1;
                        var1 = var6.isViewable;
                        if(!var1) { _fun0002_ip = 266; continue _fun0002 }
 15:
                        var2 = _closure2_slot0;
                        var1 = var6.item;
                        var11 = undefined;
                        var3 = var2.bind(var11)(var1);
                        var2 = null;
                        if(!(var2 != var3)) { _fun0002_ip = 266; continue _fun0002 }
 43:
                        var1 = _closure2_slot4;
                        var1 = var1.current;
                        var1 = var1[var3];
                        if(!(var2 == var1)) { _fun0002_ip = 266; continue _fun0002 }
 63:
                        var1 = _closure2_slot4;
                        var2 = var1.current;
                        var1 = true;
                        var2[var3] = var1;
                        var2 = _closure2_slot1;
                        var1 = var6.item;
                        var1 = var2.bind(var11)(var1);
                        var8 = var1.applicationId;
                        var7 = var1.commandId;
                        var10 = _closure1_slot0;
                        var12 = _closure1_slot1;
                        var1 = 2;
                        var1 = var12[var1];
                        var4 = var10.bind(var11)(var1);
                        var3 = var4.trackImpression;
                        var2 = {};
                        var1 = 3;
                        var9 = var12[var1];
                        var9 = var10.bind(var11)(var9);
                        var9 = var9.ImpressionTypes;
                        var9 = var9.VIEW;
                        var2['type'] = var9;
                        var1 = var12[var1];
                        var1 = var10.bind(var11)(var1);
                        var1 = var1.ImpressionNames;
                        var1 = var1.APP_LAUNCHER_SEARCH_RESULTS_ITEM;
                        var2['name'] = var1;
                        var1 = {};
                        var9 = 4;
                        var9 = var12[var9];
                        var9 = var10.bind(var11)(var9);
                        var9 = var9.ApplicationCommandTriggerLocations;
                        var9 = var9.APP_LAUNCHER_HOME_SEARCH;
                        var1['location'] = var9;
                        var1['application_id'] = var8;
                        var1['command_id'] = var7;
                        var6 = var6.index;
                        var1['search_results_position'] = var6;
                        var6 = _closure2_slot2;
                        var1['query'] = var6;
                        var5 = _closure2_slot3;
                        var1['source'] = var5;
                        var2['properties'] = var1;
                        var1 = false;
                        var1 = var3.bind(var4)(var2, var1);
 266:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var1['handleViewableItemsChanged'] = var2;
        return var1;
    };
    var3['useTrackSearchItems'] = var2;
    return var1;
})();
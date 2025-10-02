// app/design/components/ContextMenu/native/ContextMenuState.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var10;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var7 = 0;
    var5 = var10[var7];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot2 = var4;
    var6 = 1;
    var4 = var10[var6];
    var8 = var9.bind(var1)(var4);
    var5 = var8.create;
    var4 = function() {
        var1 = {};
        var2 = null;
        var1['menu'] = var2;
        return var1;
    };
    var5 = var5.bind(var8)(var4);
    var _closure1_slot3 = var5;
    var4 = {};
    var8 = 'function updateContextMenuState_ContextMenuStateNativeTsx1(absoluteX,absoluteY,state){const{INDEX_BOUNDS_WIDTH_OFFSET,INDEX_BOUNDS_HEIGHT_OFFSET,INDEX_BOUNDS_PAGE_Y_OFFSET,INDEX_BOUNDS_PAGE_X_OFFSET,INDEX_BOUNDS_OFFSET,runOnJS,triggerHapticFeedback,HapticFeedbackTypes}=this.__closure;const{pan:pan,itemMeasurements:itemMeasurements,activeIndex:activeIndex}=state;pan.set(absoluteY);const bounds=itemMeasurements.get();let offset=0;while(offset<bounds.length){const width=bounds[offset+INDEX_BOUNDS_WIDTH_OFFSET];const height=bounds[offset+INDEX_BOUNDS_HEIGHT_OFFSET];const pageY=bounds[offset+INDEX_BOUNDS_PAGE_Y_OFFSET];const pageX=bounds[offset+INDEX_BOUNDS_PAGE_X_OFFSET];const lowerY=pageY;const upperY=pageY+height;const lowerX=pageX;const upperX=pageX+width;if(absoluteY>=lowerY&&absoluteY<=upperY&&absoluteX>=lowerX&&absoluteX<=upperX){const index=offset/INDEX_BOUNDS_OFFSET;if(activeIndex.get()!==index){activeIndex.set(index);runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_LIGHT);}return;}offset+=INDEX_BOUNDS_OFFSET;}activeIndex.set(-1);}';
    var4['code'] = var8;
    var _closure1_slot4 = var4;
    var4 = function() {
        var1 = function updateContextMenuState(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var12 = arg1;
                var11 = arg2;
                var1 = arg3;
                var3 = var1.pan;
                var2 = var1.itemMeasurements;
                var5 = var1.activeIndex;
                var1 = var3.set;
                var1 = var1.bind(var3)(var11);
                var1 = var2.get;
                var10 = var1.bind(var2)();
                var1 = var10.length;
                var9 = 0;
                var1 = var9 < var1;
                var6 = 4;
                var8 = 2;
                var3 = 3;
                var7 = 1;
                var4 = 0;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var1 = var4 + var8;
                var13 = var10[var1];
                var1 = var4 + var3;
                var15 = var10[var1];
                var1 = var4 + var7;
                var14 = var10[var1];
                var1 = var4 + var9;
                var2 = var10[var1];
                var1 = var4;
                if(!(var11 >= var14)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var14 = var14 + var15;
                if(!(var11 <= var14)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
                if(!(var12 >= var2)) { _fun0001_ip = 4; continue _fun0001 }
case 7:
                var2 = var2 + var13;
                if(!(!(var12 <= var2))) { _fun0001_ip = 8; continue _fun0001 }
case 4:
                var4 = var1 + var6;
                var2 = var10.length;
                if(var4 < var2) { _fun0001_ip = 3; continue _fun0001 }
case 2:
                var4 = var5.set;
                var2 = -1;
                var2 = var4.bind(var5)(var2);
                var2 = undefined;
                return var2;
case 8:
                var4 = var1 / var6;
                var1 = var5.get;
                var1 = var1.bind(var5)();
                var1 = var1 !== var4;
                if(!var1) { _fun0001_ip = 9; continue _fun0001 }
case 10:
                var2 = var5.set;
                var2 = var2.bind(var5)(var4);
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var3 = var2[var3];
                var4 = undefined;
                var8 = var5.bind(var4)(var3);
                var7 = var8.runOnJS;
                var3 = var2[var6];
                var3 = var5.bind(var4)(var3);
                var3 = var3.triggerHapticFeedback;
                var3 = var7.bind(var8)(var3);
                var2 = var2[var6];
                var2 = var5.bind(var4)(var2);
                var2 = var2.HapticFeedbackTypes;
                var2 = var2.IMPACT_LIGHT;
                var1 = var3.bind(var4)(var2);
case 9:
                var1 = undefined;
                return var1;
            }
        };
        var3 = {'INDEX_BOUNDS_WIDTH_OFFSET': 2, 'INDEX_BOUNDS_HEIGHT_OFFSET': 3, 'INDEX_BOUNDS_PAGE_Y_OFFSET': 1, 'INDEX_BOUNDS_PAGE_X_OFFSET': 0, 'INDEX_BOUNDS_OFFSET': 4};
        var5 = 3;
        var7 = 4;
        var6 = _closure1_slot0;
        var4 = _closure1_slot1;
        var8 = var4[var5];
        var5 = undefined;
        var8 = var6.bind(var5)(var8);
        var8 = var8.runOnJS;
        var3['runOnJS'] = var8;
        var8 = var4[var7];
        var8 = var6.bind(var5)(var8);
        var8 = var8.triggerHapticFeedback;
        var3['triggerHapticFeedback'] = var8;
        var4 = var4[var7];
        var4 = var6.bind(var5)(var4);
        var4 = var4.HapticFeedbackTypes;
        var3['HapticFeedbackTypes'] = var4;
        var1['__closure'] = var3;
        var3 = 10158111154044.0;
        var1['__workletHash'] = var3;
        var2 = _closure1_slot4;
        var1['__initData'] = var2;
        return var1;
    };
    var4 = var4.bind(var1)();
    var8 = 5;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'design/components/ContextMenu/native/ContextMenuState.native.tsx';
    var8 = var9.bind(var10)(var8);
    var8 = 4;
    var3['INDEX_BOUNDS_OFFSET'] = var8;
    var3['INDEX_BOUNDS_PAGE_X_OFFSET'] = var7;
    var3['INDEX_BOUNDS_PAGE_Y_OFFSET'] = var6;
    var6 = 2;
    var3['INDEX_BOUNDS_WIDTH_OFFSET'] = var6;
    var6 = 3;
    var3['INDEX_BOUNDS_HEIGHT_OFFSET'] = var6;
    var3['ContextMenuStore'] = var5;
    var5 = function showContextMenu(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = {};
            var4 = _closure2_slot0;
            var1['menu'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['showContextMenu'] = var5;
    var5 = function hideContextMenu() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.batchUpdates;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = var3.setState;
            var1 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.menu;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
                    var2 = {};
                    var2['menu'] = var3;
                    var1 = var2;
case 11:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['hideContextMenu'] = var5;
    var5 = function useActiveContextMenu() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.menu;
            return var1;
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useActiveContextMenu'] = var5;
    var3['updateContextMenuState'] = var4;
    var4 = function useContextMenuState() {
        var8 = _closure1_slot0;
        var9 = _closure1_slot1;
        var3 = 3;
        var5 = var9[var3];
        var4 = undefined;
        var7 = var8.bind(var4)(var5);
        var6 = var7.useSharedValue;
        var5 = -1;
        var7 = var6.bind(var7)(var5);
        var _closure2_slot0 = var7;
        var6 = var9[var3];
        var11 = var8.bind(var4)(var6);
        var10 = var11.useSharedValue;
        var6 = new Array(0);
        var6 = var10.bind(var11)(var6);
        var _closure2_slot1 = var6;
        var3 = var9[var3];
        var4 = var8.bind(var4)(var3);
        var3 = var4.useSharedValue;
        var5 = var3.bind(var4)(var5);
        var _closure2_slot2 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() {
            var1 = {};
            var3 = _closure2_slot0;
            var1['pan'] = var3;
            var3 = _closure2_slot1;
            var1['itemMeasurements'] = var3;
            var2 = _closure2_slot2;
            var1['activeIndex'] = var2;
            return var1;
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useContextMenuState'] = var4;
    var2 = function resetContextMenuState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = var1.activeIndex;
            var4 = var1.pan;
            var3 = var1.itemMeasurements;
            var1 = var5.set;
            var2 = -1;
            var1 = var1.bind(var5)(var2);
            var1 = var4.set;
            var1 = var1.bind(var4)(var2);
            var1 = var3.get;
            var1 = var1.bind(var3)();
            var2 = var1.length;
            var1 = 0;
            if(!(var2 > var1)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var2 = var3.set;
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
case 13:
            var1 = undefined;
            return var1;
        }
    };
    var3['resetContextMenuState'] = var2;
    return var1;
})();
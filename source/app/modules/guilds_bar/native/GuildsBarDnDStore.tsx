// app/modules/guilds_bar/native/GuildsBarDnDStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var4 = var4.GuildsNodeType;
    var _closure1_slot2 = var4;
    var4 = {'mode': null, 'initialX': 0, 'initialY': 0, 'absoluteX': 0, 'absoluteY': 0};
    var _closure1_slot3 = var4;
    var5 = -1;
    var _closure1_slot4 = var5;
    var5 = 1;
    var5 = var8[var5];
    var9 = var7.bind(var1)(var5);
    var6 = var9.createWithEqualityFn;
    var5 = function(arg1, arg2) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = {};
        var6 = undefined;
        var1['dragSpecs'] = var6;
        var1['overSpecs'] = var6;
        var1['dropSpecs'] = var6;
        var5 = _closure1_slot0;
        var7 = _closure1_slot1;
        var4 = 2;
        var3 = var7[var4];
        var11 = var5.bind(var6)(var3);
        var10 = var11.makeMutable;
        var3 = 0;
        var9 = {'min': 0, 'max': 0};
        var9 = var10.bind(var11)(var9);
        var1['dragRegion'] = var9;
        var9 = var7[var4];
        var10 = var5.bind(var6)(var9);
        var9 = var10.makeMutable;
        var8 = _closure1_slot3;
        var8 = var9.bind(var10)(var8);
        var1['gestureState'] = var8;
        var8 = var7[var4];
        var10 = var5.bind(var6)(var8);
        var9 = var10.makeMutable;
        var8 = false;
        var8 = var9.bind(var10)(var8);
        var1['dragDropInProgress'] = var8;
        var8 = var7[var4];
        var10 = var5.bind(var6)(var8);
        var9 = var10.makeMutable;
        var8 = {'start': 0, 'end': 0};
        var8 = var9.bind(var10)(var8);
        var1['listInsets'] = var8;
        var4 = var7[var4];
        var5 = var5.bind(var6)(var4);
        var4 = var5.makeMutable;
        var4 = var4.bind(var5)(var3);
        var1['scrollPosition'] = var4;
        var1['windowSize'] = var3;
        var3 = function setStateShallow(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var11 = arg1;
                var _closure3_slot0 = var11;
                var3 = _closure2_slot1;
                var1 = undefined;
                var10 = var3.bind(var1)();
                var _closure3_slot1 = var10;
                var8 = var11;
                for(var5 in var8)
 37:
                {
 46:
                    var3 = var5;
                    var4 = var10[var3];
                    var3 = var11[var3];
                    if(var4 === var3) { _fun0001_ip = 37; continue _fun0001 }
 61:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        var3 = _closure2_slot0;
                        var2 = {};
                        var5 = _closure3_slot1;
                        var6 = var2;
                        var4 = copyDataProperties(var6, var5);
                        var5 = _closure3_slot0;
                        var6 = var2;
                        var1 = copyDataProperties(var6, var5);
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
                }
 106:
                return var1;
            }
        };
        var1['setStateShallow'] = var3;
        var3 = function dropStart(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = var3.dropSpecs;
                var3 = var3.gestureState;
                var _closure3_slot1 = var3;
                var3 = null;
                if(!(var3 == var4)) { _fun0002_ip = 129; continue _fun0002 }
 44:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 3;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.batchUpdates;
                var4 = function() {
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = _closure3_slot0;
                    var2['dropSpecs'] = var1;
                    var1 = undefined;
                    var2['dragSpecs'] = var1;
                    var2['overSpecs'] = var1;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var5.bind(var6)(var4);
                var4 = global;
                var6 = var4.clearTimeout;
                var5 = _closure1_slot4;
                var5 = var6.bind(var1)(var5);
                var5 = var4.setTimeout;
                var4 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure3_slot1;
                        var2 = var3.get;
                        var4 = var2.bind(var3)();
                        var3 = var4.mode;
                        var2 = 'drag';
                        if(!(var2 === var3)) { _fun0003_ip = 66; continue _fun0003 }
 29:
                        var3 = _closure3_slot1;
                        var2 = var3.set;
                        var1 = {};
                        var7 = var1;
                        var6 = var4;
                        var4 = copyDataProperties(var7, var6);
                        var5 = null;
                        var4 = 'mode';
                        var1[var4] = var5;
                        var1 = var2.bind(var3)(var1);
 66:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 0;
                var2 = var5.bind(var1)(var4, var2);
                _closure1_slot4 = var2;
                return var1;
 129:
                var1 = global;
                var3 = var1.Error;
                var1 = var3.prototype;
                var2 = Object.create(var1, {constructor: {value: var3}});
                var8 = 'GuildsBarDnDStore.dropStart: you cannot start a drop while an existing drop is in progress';
                var9 = var2;
                var1 = new var9[var3](var8, var7);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['dropStart'] = var3;
        var2 = function dropComplete() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var4 = var2.gestureState;
                var5 = var2.dragDropInProgress;
                var3 = var2.dropSpecs;
                var2 = var2.dragSpecs;
                var6 = null;
                if(!(var6 != var3)) { _fun0004_ip = 175; continue _fun0004 }
 46:
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 3;
                var7 = var9[var7];
                var9 = var8.bind(var1)(var7);
                var8 = var9.batchUpdates;
                var7 = function() {
                    var3 = _closure2_slot0;
                    var2 = {};
                    var1 = undefined;
                    var2['dropSpecs'] = var1;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var7 = var8.bind(var9)(var7);
                var7 = global;
                var7 = var7.clearTimeout;
                var3 = _closure1_slot4;
                var3 = var7.bind(var1)(var3);
                if(!(var6 == var2)) { _fun0004_ip = 122; continue _fun0004 }
 110:
                var3 = var5.set;
                var2 = false;
                var2 = var3.bind(var5)(var2);
 122:
                var2 = var4.get;
                var5 = var2.bind(var4)();
                var3 = var5.mode;
                var2 = 'drag';
                if(!(var2 === var3)) { _fun0004_ip = 175; continue _fun0004 }
 144:
                var3 = var4.set;
                var2 = {};
                var11 = var2;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'mode';
                var2[var5] = var6;
                var2 = var3.bind(var4)(var2);
 175:
                return var1;
            }
        };
        var1['dropComplete'] = var2;
        return var1;
    };
    var5 = var6.bind(var9)(var5);
    var _closure1_slot5 = var5;
    var6 = 5;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/guilds_bar/native/GuildsBarDnDStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['INITIAL_GESTURE_STATE'] = var4;
    var4 = function useItemDragState(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot5;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 4;
        var2 = var3[var2];
        var3 = undefined;
        var2 = var5.bind(var3)(var2);
        var2 = var2.shallow;
        var1 = function(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg1;
                var8 = var1.dragSpecs;
                var11 = var1.overSpecs;
                var9 = var1.dropSpecs;
                var2 = var1.dragDropInProgress;
                var5 = null;
                if(!(var5 == var8)) { _fun0005_ip = 40; continue _fun0005 }
 33:
                if(!(var5 != var9)) { _fun0005_ip = 364; continue _fun0005 }
 40:
                var1 = _closure2_slot1;
                var3 = !var1;
                if(!var3) { _fun0005_ip = 137; continue _fun0005 }
 53:
                var1 = var5 == var8;
                var4 = undefined;
                if(var1) { _fun0005_ip = 73; continue _fun0005 }
 62:
                var1 = var8.node;
                var4 = var1.id;
 73:
                var1 = _closure2_slot0;
                var1 = var4 === var1;
                if(!var1) { _fun0005_ip = 103; continue _fun0005 }
 84:
                var10 = var5 == var11;
                var4 = undefined;
                if(var10) { _fun0005_ip = 99; continue _fun0005 }
 93:
                var4 = var11.node;
 99:
                var1 = var5 != var4;
 103:
                if(var1) { _fun0005_ip = 134; continue _fun0005 }
 106:
                var4 = var5 == var9;
                var7 = undefined;
                if(var4) { _fun0005_ip = 126; continue _fun0005 }
 115:
                var4 = var9.dragNode;
                var7 = var4.id;
 126:
                var4 = _closure2_slot0;
                var1 = var7 === var4;
 134:
                var3 = var1;
 137:
                var1 = _closure2_slot1;
                var4 = !var1;
                if(!var4) { _fun0005_ip = 209; continue _fun0005 }
 147:
                var1 = var5 == var11;
                var10 = undefined;
                if(var1) { _fun0005_ip = 167; continue _fun0005 }
 156:
                var1 = var11.node;
                var10 = var1.id;
 167:
                var1 = _closure2_slot0;
                var1 = var10 === var1;
                if(var1) { _fun0005_ip = 206; continue _fun0005 }
 178:
                var10 = var5 == var9;
                var7 = undefined;
                if(var10) { _fun0005_ip = 198; continue _fun0005 }
 187:
                var10 = var9.overNode;
                var7 = var10.id;
 198:
                var6 = _closure2_slot0;
                var1 = var7 === var6;
 206:
                var4 = var1;
 209:
                var1 = {};
                var1['isDragTarget'] = var3;
                if(var3) { _fun0005_ip = 224; continue _fun0005 }
 219:
                var3 = undefined;
                if(!var4) { _fun0005_ip = 244; continue _fun0005 }
 224:
                var7 = var5 == var9;
                var6 = 'dropping';
                if(!var7) { _fun0005_ip = 241; continue _fun0005 }
 237:
                var6 = 'dragging';
 241:
                var3 = var6;
 244:
                var1['dragState'] = var3;
                var3 = undefined;
                if(!var4) { _fun0005_ip = 293; continue _fun0005 }
 254:
                var10 = var5 == var9;
                var6 = undefined;
                if(var10) { _fun0005_ip = 269; continue _fun0005 }
 263:
                var6 = var9.overState;
 269:
                if(!(var5 == var6)) { _fun0005_ip = 290; continue _fun0005 }
 273:
                var12 = var5 == var11;
                var10 = undefined;
                if(var12) { _fun0005_ip = 287; continue _fun0005 }
 282:
                var10 = var11.state;
 287:
                var6 = var10;
 290:
                var3 = var6;
 293:
                var1['overState'] = var3;
                var3 = 0;
                if(!var4) { _fun0005_ip = 352; continue _fun0005 }
 303:
                var10 = var5 == var9;
                var4 = undefined;
                if(var10) { _fun0005_ip = 318; continue _fun0005 }
 312:
                var4 = var9.itemSize;
 318:
                if(!(var5 == var4)) { _fun0005_ip = 340; continue _fun0005 }
 322:
                var9 = var5 == var8;
                var7 = undefined;
                if(var9) { _fun0005_ip = 337; continue _fun0005 }
 331:
                var7 = var8.itemSize;
 337:
                var4 = var7;
 340:
                var5 = var5 != var4;
                var3 = 0;
                if(!var5) { _fun0005_ip = 352; continue _fun0005 }
 349:
                var3 = var4;
 352:
                var1['itemSize'] = var3;
                var1['dragDropInProgress'] = var2;
                return var1;
 364:
                var1 = {};
                var3 = false;
                var1['isDragTarget'] = var3;
                var3 = undefined;
                var1['dragState'] = var3;
                var1['overState'] = var3;
                var3 = 0;
                var1['itemSize'] = var3;
                var1['dragDropInProgress'] = var2;
                return var1;
            }
        };
        var1 = var4.bind(var3)(var1, var2);
        return var1;
    };
    var3['useItemDragState'] = var4;
    var2 = function useFolderBGHeightOffset(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var3 = _closure1_slot5;
        var2 = undefined;
        var1 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = arg1;
                var4 = var1.dragSpecs;
                var5 = var1.overSpecs;
                var1 = var1.dropSpecs;
                var2 = null;
                var3 = var2 != var1;
                var1 = 0;
                if(var3) { _fun0006_ip = 275; continue _fun0006 }
 35:
                var3 = var2 == var5;
                var1 = 0;
                if(var3) { _fun0006_ip = 275; continue _fun0006 }
 47:
                var2 = var2 == var4;
                var1 = 0;
                if(var2) { _fun0006_ip = 275; continue _fun0006 }
 59:
                var3 = var5.state;
                var2 = 'self';
                var1 = 0;
                if(!(var2 !== var3)) { _fun0006_ip = 275; continue _fun0006 }
 77:
                var2 = var4.node;
                var3 = var2.type;
                var2 = _closure1_slot2;
                var2 = var2.GUILD;
                var1 = 0;
                if(!(var3 === var2)) { _fun0006_ip = 275; continue _fun0006 }
 110:
                var2 = var4.node;
                var3 = var2.parentId;
                var2 = _closure2_slot0;
                if(!(var3 !== var2)) { _fun0006_ip = 197; continue _fun0006 }
 133:
                var2 = var5.node;
                var3 = var2.parentId;
                var2 = _closure2_slot0;
                if(!(var3 !== var2)) { _fun0006_ip = 189; continue _fun0006 }
 153:
                var2 = var5.node;
                var8 = var2.id;
                var3 = _closure2_slot0;
                var2 = 0;
                if(!(var8 === var3)) { _fun0006_ip = 195; continue _fun0006 }
 174:
                var8 = var5.state;
                var3 = 'after';
                var2 = 0;
                if(!(var3 === var8)) { _fun0006_ip = 195; continue _fun0006 }
 189:
                var2 = var4.itemSize;
 195:
                _fun0006_ip = 272; continue _fun0006;
 197:
                var3 = var5.node;
                var9 = var3.parentId;
                var8 = _closure2_slot0;
                var3 = 0;
                if(!(var9 !== var8)) { _fun0006_ip = 269; continue _fun0006 }
 219:
                var8 = var5.node;
                var8 = var8.id;
                var6 = _closure2_slot0;
                if(!(var8 === var6)) { _fun0006_ip = 253; continue _fun0006 }
 238:
                var6 = var5.state;
                var5 = 'after';
                var3 = 0;
                if(!(var5 !== var6)) { _fun0006_ip = 269; continue _fun0006 }
 253:
                var5 = var4.itemSize;
                var4 = -1;
                var3 = var4 * var5;
 269:
                var2 = var3;
 272:
                var1 = var2;
 275:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useFolderBGHeightOffset'] = var2;
    return var1;
})();
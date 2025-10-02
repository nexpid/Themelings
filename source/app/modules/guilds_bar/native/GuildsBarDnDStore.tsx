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
case 0:
                var11 = arg1;
                var _closure3_slot0 = var11;
                var3 = _closure2_slot1;
                var1 = undefined;
                var10 = var3.bind(var1)();
                var _closure3_slot1 = var10;
                var8 = var11;
                for(var5 in var8)
case 2:
                {
case 3:
                    var3 = var5;
                    var4 = var10[var3];
                    var3 = var11[var3];
                    if(var4 === var3) { _fun0001_ip = 2; continue _fun0001 }
case 4:
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
case 5:
                return var1;
            }
        };
        var1['setStateShallow'] = var3;
        var3 = function dropStart(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var4 = var3.dropSpecs;
                var3 = var3.gestureState;
                var _closure3_slot1 = var3;
                var3 = null;
                if(!(var3 == var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
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
case 0:
                        var3 = _closure3_slot1;
                        var2 = var3.get;
                        var4 = var2.bind(var3)();
                        var3 = var4.mode;
                        var2 = 'drag';
                        if(!(var2 === var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
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
case 8:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = 0;
                var2 = var5.bind(var1)(var4, var2);
                _closure1_slot4 = var2;
                return var1;
case 6:
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
case 0:
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var4 = var2.gestureState;
                var5 = var2.dragDropInProgress;
                var3 = var2.dropSpecs;
                var2 = var2.dragSpecs;
                var6 = null;
                if(!(var6 != var3)) { _fun0004_ip = 10; continue _fun0004 }
case 3:
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
                if(!(var6 == var2)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var3 = var5.set;
                var2 = false;
                var2 = var3.bind(var5)(var2);
case 11:
                var2 = var4.get;
                var5 = var2.bind(var4)();
                var3 = var5.mode;
                var2 = 'drag';
                if(!(var2 === var3)) { _fun0004_ip = 10; continue _fun0004 }
case 13:
                var3 = var4.set;
                var2 = {};
                var11 = var2;
                var10 = var5;
                var5 = copyDataProperties(var11, var10);
                var5 = 'mode';
                var2[var5] = var6;
                var2 = var3.bind(var4)(var2);
case 10:
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
case 0:
                var1 = arg1;
                var8 = var1.dragSpecs;
                var11 = var1.overSpecs;
                var9 = var1.dropSpecs;
                var2 = var1.dragDropInProgress;
                var5 = null;
                if(!(var5 == var8)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                if(!(var5 != var9)) { _fun0005_ip = 16; continue _fun0005 }
case 14:
                var1 = _closure2_slot1;
                var3 = !var1;
                if(!var3) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var1 = var5 == var8;
                var4 = undefined;
                if(var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                var1 = var8.node;
                var4 = var1.id;
case 19:
                var1 = _closure2_slot0;
                var1 = var4 === var1;
                if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var10 = var5 == var11;
                var4 = undefined;
                if(var10) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var4 = var11.node;
case 23:
                var1 = var5 != var4;
case 21:
                if(var1) { _fun0005_ip = 25; continue _fun0005 }
case 5:
                var4 = var5 == var9;
                var7 = undefined;
                if(var4) { _fun0005_ip = 26; continue _fun0005 }
case 27:
                var4 = var9.dragNode;
                var7 = var4.id;
case 26:
                var4 = _closure2_slot0;
                var1 = var7 === var4;
case 25:
                var3 = var1;
case 17:
                var1 = _closure2_slot1;
                var4 = !var1;
                if(!var4) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                var1 = var5 == var11;
                var10 = undefined;
                if(var1) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                var1 = var11.node;
                var10 = var1.id;
case 30:
                var1 = _closure2_slot0;
                var1 = var10 === var1;
                if(var1) { _fun0005_ip = 32; continue _fun0005 }
case 33:
                var10 = var5 == var9;
                var7 = undefined;
                if(var10) { _fun0005_ip = 34; continue _fun0005 }
case 35:
                var10 = var9.overNode;
                var7 = var10.id;
case 34:
                var6 = _closure2_slot0;
                var1 = var7 === var6;
case 32:
                var4 = var1;
case 28:
                var1 = {};
                var1['isDragTarget'] = var3;
                if(var3) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var3 = undefined;
                if(!var4) { _fun0005_ip = 38; continue _fun0005 }
case 36:
                var7 = var5 == var9;
                var6 = 'dropping';
                if(!var7) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                var6 = 'dragging';
case 39:
                var3 = var6;
case 38:
                var1['dragState'] = var3;
                var3 = undefined;
                if(!var4) { _fun0005_ip = 41; continue _fun0005 }
case 42:
                var10 = var5 == var9;
                var6 = undefined;
                if(var10) { _fun0005_ip = 43; continue _fun0005 }
case 44:
                var6 = var9.overState;
case 43:
                if(!(var5 == var6)) { _fun0005_ip = 45; continue _fun0005 }
case 46:
                var12 = var5 == var11;
                var10 = undefined;
                if(var12) { _fun0005_ip = 47; continue _fun0005 }
case 48:
                var10 = var11.state;
case 47:
                var6 = var10;
case 45:
                var3 = var6;
case 41:
                var1['overState'] = var3;
                var3 = 0;
                if(!var4) { _fun0005_ip = 49; continue _fun0005 }
case 50:
                var10 = var5 == var9;
                var4 = undefined;
                if(var10) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                var4 = var9.itemSize;
case 51:
                if(!(var5 == var4)) { _fun0005_ip = 53; continue _fun0005 }
case 54:
                var9 = var5 == var8;
                var7 = undefined;
                if(var9) { _fun0005_ip = 55; continue _fun0005 }
case 56:
                var7 = var8.itemSize;
case 55:
                var4 = var7;
case 53:
                var5 = var5 != var4;
                var3 = 0;
                if(!var5) { _fun0005_ip = 49; continue _fun0005 }
case 57:
                var3 = var4;
case 49:
                var1['itemSize'] = var3;
                var1['dragDropInProgress'] = var2;
                return var1;
case 16:
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
case 0:
                var1 = arg1;
                var4 = var1.dragSpecs;
                var5 = var1.overSpecs;
                var1 = var1.dropSpecs;
                var2 = null;
                var3 = var2 != var1;
                var1 = 0;
                if(var3) { _fun0006_ip = 58; continue _fun0006 }
case 59:
                var3 = var2 == var5;
                var1 = 0;
                if(var3) { _fun0006_ip = 58; continue _fun0006 }
case 60:
                var2 = var2 == var4;
                var1 = 0;
                if(var2) { _fun0006_ip = 58; continue _fun0006 }
case 61:
                var3 = var5.state;
                var2 = 'self';
                var1 = 0;
                if(!(var2 !== var3)) { _fun0006_ip = 58; continue _fun0006 }
case 62:
                var2 = var4.node;
                var3 = var2.type;
                var2 = _closure1_slot2;
                var2 = var2.GUILD;
                var1 = 0;
                if(!(var3 === var2)) { _fun0006_ip = 58; continue _fun0006 }
case 12:
                var2 = var4.node;
                var3 = var2.parentId;
                var2 = _closure2_slot0;
                if(!(var3 !== var2)) { _fun0006_ip = 63; continue _fun0006 }
case 64:
                var2 = var5.node;
                var3 = var2.parentId;
                var2 = _closure2_slot0;
                if(!(var3 !== var2)) { _fun0006_ip = 65; continue _fun0006 }
case 66:
                var2 = var5.node;
                var8 = var2.id;
                var3 = _closure2_slot0;
                var2 = 0;
                if(!(var8 === var3)) { _fun0006_ip = 67; continue _fun0006 }
case 68:
                var8 = var5.state;
                var3 = 'after';
                var2 = 0;
                if(!(var3 === var8)) { _fun0006_ip = 67; continue _fun0006 }
case 65:
                var2 = var4.itemSize;
case 67:
                _fun0006_ip = 69; continue _fun0006;
case 63:
                var3 = var5.node;
                var9 = var3.parentId;
                var8 = _closure2_slot0;
                var3 = 0;
                if(!(var9 !== var8)) { _fun0006_ip = 43; continue _fun0006 }
case 37:
                var8 = var5.node;
                var8 = var8.id;
                var6 = _closure2_slot0;
                if(!(var8 === var6)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
                var6 = var5.state;
                var5 = 'after';
                var3 = 0;
                if(!(var5 !== var6)) { _fun0006_ip = 43; continue _fun0006 }
case 70:
                var5 = var4.itemSize;
                var4 = -1;
                var3 = var4 * var5;
case 43:
                var2 = var3;
case 69:
                var1 = var2;
case 58:
                return var1;
            }
        };
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var3['useFolderBGHeightOffset'] = var2;
    return var1;
})();
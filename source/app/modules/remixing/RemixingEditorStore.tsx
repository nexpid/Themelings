// app/modules/remixing/RemixingEditorStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var1 = 0;
    var4 = var11[var1];
    var1 = undefined;
    var4 = var10.bind(var1)(var4);
    var5 = var4.RemixMode;
    var _closure1_slot2 = var5;
    var4 = {'currentMode': null, 'showRainbowColor': false, 'editingComponent': null, 'headerMeasurements': null, 'xAxisOpacity': 0, 'yAxisOpacity': 0};
    var5 = var5.DEFAULT_MODE;
    var4['currentMode'] = var5;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var11[var4];
    var6 = var10.bind(var1)(var4);
    var5 = var6.createWithEqualityFn;
    var4 = function(arg1) {
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = {};
        var5 = _closure1_slot3;
        var6 = var1;
        var3 = copyDataProperties(var6, var5);
        var4 = function setCurrentMode(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = 'currentMode';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = 'setCurrentMode';
        var1[var3] = var4;
        var4 = function setEditingComponent(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = 'editingComponent';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = 'setEditingComponent';
        var1[var3] = var4;
        var4 = function setHeaderMeasurements(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = 'headerMeasurements';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = 'setHeaderMeasurements';
        var1[var3] = var4;
        var4 = function setShowRainbowColor(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = 'showRainbowColor';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = 'setShowRainbowColor';
        var1[var3] = var4;
        var4 = function setXAxisOpacity(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = 'xAxisOpacity';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = 'setXAxisOpacity';
        var1[var3] = var4;
        var4 = function setYAxisOpacity(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 2;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = arg1;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure3_slot0;
                    var2 = 'yAxisOpacity';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var3 = 'setYAxisOpacity';
        var1[var3] = var4;
        var3 = function reset() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.batchUpdates;
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = function(arg1) {
                    var1 = {};
                    var4 = _closure1_slot3;
                    var5 = var1;
                    var2 = copyDataProperties(var5, var4);
                    var2 = arg1;
                    var3 = var2.showRainbowColor;
                    var2 = 'showRainbowColor';
                    var1[var2] = var3;
                    return var1;
                };
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var2 = 'reset';
        var1[var2] = var3;
        return var1;
    };
    var8 = var5.bind(var6)(var4);
    var7 = function isInDrawMode(arg1) {
        var1 = _closure1_slot2;
        var2 = var1.DRAW_MODE;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot4 = var7;
    var6 = function isInTextMode(arg1) {
        var1 = _closure1_slot2;
        var2 = var1.TEXT_MODE;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot5 = var6;
    var5 = function isInCropMode(arg1) {
        var1 = _closure1_slot2;
        var2 = var1.CROP_MODE;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot6 = var5;
    var4 = function isInMentionsMode(arg1) {
        var1 = _closure1_slot2;
        var2 = var1.MENTIONS_MODE;
        var1 = arg1;
        var1 = var1 === var2;
        return var1;
    };
    var _closure1_slot7 = var4;
    var9 = 3;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/remixing/RemixingEditorStore.tsx';
    var9 = var10.bind(var11)(var9);
    var3['useRemixingEditorStore'] = var8;
    var3['isInDrawMode'] = var7;
    var3['isInTextMode'] = var6;
    var3['isInCropMode'] = var5;
    var3['isInMentionsMode'] = var4;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot4;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot5;
            var1 = var5.bind(var3)(var4);
case 2:
            if(var1) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot6;
            var1 = var5.bind(var3)(var4);
case 4:
            if(var1) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot7;
            var1 = var2.bind(var3)(var4);
case 6:
            return var1;
        }
    };
    var3['isUsingTool'] = var2;
    return var1;
})();
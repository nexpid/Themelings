// app/modules/remixing/native/components/RemixingGestureHandlers.tsx
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
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportAll;
    var1 = undefined;
    var9 = var7.bind(var1)(var8);
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportDefault;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.REMIX_MENTIONS_TOOLTIP_STORAGE_KEY;
    var _closure1_slot3 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot4 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.createElement;
    var _closure1_slot5 = var4;
    var8 = var9.memo;
    var7 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var4 = var6.components;
            var1 = null;
            var5 = Object.create(var1);
            var3 = 0;
            var5['components'] = var3;
            var9 = {};
            var8 = var6;
            var7 = var5;
            var3 = copyDataProperties(var9, var8, var7);
            var _closure2_slot0 = var3;
            var3 = var1 == var4;
            var1 = undefined;
            if(var3) { _fun0001_ip = 63; continue _fun0001 }
 48:
            var3 = var4.map;
            var2 = function(arg1) {
                var3 = {};
                var1 = arg1;
                var3['component'] = var1;
                var4 = _closure2_slot0;
                var5 = var3;
                var1 = copyDataProperties(var5, var4);
                var2 = function renderGestureHandler(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                        var5 = arg1;
                        var6 = var5.component;
                        var _closure4_slot0 = var6;
                        var4 = var5.transformMap;
                        var3 = var5.activeId;
                        var2 = var5.hoveringOverTrash;
                        var1 = var5.trashCanAreaRef;
                        var5 = var5.editText;
                        var _closure4_slot1 = var5;
                        var5 = {};
                        var9 = var6.id;
                        var7 = 'gh';
                        var7 = var7 + var9;
                        var5['key'] = var7;
                        var5['transformMap'] = var4;
                        var5['activeId'] = var3;
                        var5['hoveringOverTrash'] = var2;
                        var5['trashCanAreaRef'] = var1;
                        var3 = var6.type;
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var9 = 4;
                        var2 = var2[var9];
                        var4 = undefined;
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.BACKDROP;
                        if(!(var2 !== var3)) { _fun0002_ip = 656; continue _fun0002 }
 139:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.RECTANGLE;
                        if(!(var2 !== var3)) { _fun0002_ip = 582; continue _fun0002 }
 175:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.IMAGE;
                        if(!(var2 !== var3)) { _fun0002_ip = 582; continue _fun0002 }
 211:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.SVG;
                        if(!(var2 !== var3)) { _fun0002_ip = 582; continue _fun0002 }
 247:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.MENTION_GLOBAL;
                        if(!(var2 !== var3)) { _fun0002_ip = 582; continue _fun0002 }
 283:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.MENTION_ROLE;
                        if(!(var2 !== var3)) { _fun0002_ip = 582; continue _fun0002 }
 319:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.MENTION_USER;
                        if(!(var2 !== var3)) { _fun0002_ip = 480; continue _fun0002 }
 355:
                        var7 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var9];
                        var2 = var7.bind(var4)(var2);
                        var2 = var2.RemixElement;
                        var2 = var2.TEXT;
                        if(!(var2 !== var3)) { _fun0002_ip = 392; continue _fun0002 }
 388:
                        var2 = null;
                        return var2;
 392:
                        var7 = _closure1_slot5;
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var2 = 6;
                        var2 = var9[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.TransformComponentGestureHandler;
                        var2 = {};
                        var12 = var2;
                        var11 = var5;
                        var9 = copyDataProperties(var12, var11);
                        var12 = var2;
                        var11 = var6;
                        var9 = copyDataProperties(var12, var11);
                        var10 = function onTap() {
                            var3 = _closure4_slot1;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var9 = 'onTap';
                        var2[var9] = var10;
                        var10 = var5.key;
                        var9 = 'key';
                        var2[var9] = var10;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 480:
                        var7 = _closure1_slot5;
                        var3 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var2 = 6;
                        var2 = var9[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.TransformComponentGestureHandler;
                        var2 = {};
                        var12 = var2;
                        var11 = var5;
                        var9 = copyDataProperties(var12, var11);
                        var12 = var2;
                        var11 = var6;
                        var9 = copyDataProperties(var12, var11);
                        var10 = function onTap() {
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 7;
                            var5 = var4[var2];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var5);
                            var5 = var6.triggerHapticFeedback;
                            var2 = var4[var2];
                            var2 = var3.bind(var1)(var2);
                            var2 = var2.HapticFeedbackTypes;
                            var2 = var2.IMPACT_LIGHT;
                            var2 = var5.bind(var6)(var2);
                            var2 = 8;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.updateMentionStyle;
                            var2 = {};
                            var7 = _closure4_slot0;
                            var8 = var2;
                            var5 = copyDataProperties(var8, var7);
                            var2 = var3.bind(var4)(var2);
                            return var1;
                        };
                        var9 = 'onTap';
                        var2[var9] = var10;
                        var9 = function onStart() {
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 9;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var5 = var3.Storage;
                            var4 = var5.set;
                            var3 = _closure1_slot3;
                            var2 = true;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        };
                        var8 = 'onStart';
                        var2[var8] = var9;
                        var9 = var5.key;
                        var8 = 'key';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 582:
                        var7 = _closure1_slot5;
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var2 = 6;
                        var2 = var8[var2];
                        var2 = var3.bind(var4)(var2);
                        var3 = var2.TransformComponentGestureHandler;
                        var2 = {};
                        var12 = var2;
                        var11 = var5;
                        var8 = copyDataProperties(var12, var11);
                        var12 = var2;
                        var11 = var6;
                        var8 = copyDataProperties(var12, var11);
                        var9 = var5.key;
                        var8 = 'key';
                        var2[var8] = var9;
                        var2 = var7.bind(var4)(var3, var2);
                        return var2;
 656:
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var1 = 6;
                        var1 = var7[var1];
                        var1 = var2.bind(var4)(var1);
                        var2 = var1.TransformComponentGestureHandler;
                        var1 = {};
                        var12 = var1;
                        var11 = var5;
                        var7 = copyDataProperties(var12, var11);
                        var12 = var1;
                        var11 = var6;
                        var6 = copyDataProperties(var12, var11);
                        var7 = true;
                        var6 = 'multiTouchPan';
                        var1[var6] = var7;
                        var6 = var5.key;
                        var5 = 'key';
                        var1[var5] = var6;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
 63:
            return var1;
        }
    };
    var4 = function(arg1, arg2) {
        var1 = arg2;
        var1 = var1.currentCanvas;
        var2 = var1.updateReason;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 4;
        var3 = var3[var1];
        var1 = undefined;
        var1 = var4.bind(var1)(var3);
        var1 = var1.UpdateReason;
        var1 = var1.BRING_TO_FRONT;
        var1 = var2 !== var1;
        var1 = !var1;
        return var1;
    };
    var4 = var8.bind(var9)(var7, var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/remixing/native/components/RemixingGestureHandlers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var2 = 5;
        var2 = var4[var2];
        var4 = undefined;
        var6 = var3.bind(var4)(var2);
        var5 = var6.useStateFromStores;
        var2 = _closure1_slot2;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            var1 = _closure1_slot2;
            var1 = var1.currentRenderedCanvas;
            return var1;
        };
        var6 = var5.bind(var6)(var3, var2);
        var3 = _closure1_slot4;
        var2 = _closure1_slot6;
        var1 = {};
        var7 = arg1;
        var8 = var1;
        var5 = copyDataProperties(var8, var7);
        var5 = 'currentCanvas';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
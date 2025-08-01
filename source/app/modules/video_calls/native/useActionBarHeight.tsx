// app/modules/video_calls/native/useActionBarHeight.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var8;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var8[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.InputModes;
    var _closure1_slot4 = var2;
    var4 = 2;
    var2 = var8[var4];
    var2 = var7.bind(var1)(var2);
    var2 = var2.ACTION_SHEET_HANDLE_SPACING;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.SMALL_ACTION_BUTTON_DIMENSIONS;
    var2 = var2.buttonRadius;
    var2 = var4 * var2;
    var4 = 16;
    var2 = var2 + var4;
    var2 = var2 + var4;
    var _closure1_slot6 = var2;
    var6 = 7;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/video_calls/native/useActionBarHeight.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 4;
            var2 = var7[var2];
            var5 = undefined;
            var4 = var6.bind(var5)(var2);
            var2 = var4.useIsFiveButtonLayout;
            var4 = var2.bind(var4)(var3);
            var8 = _closure1_slot1;
            var2 = 5;
            var2 = var7[var2];
            var2 = var8.bind(var5)(var2);
            var3 = var2.bind(var5)(var3);
            var2 = 6;
            var2 = var7[var2];
            var7 = var6.bind(var5)(var2);
            var6 = var7.useStateFromStores;
            var2 = _closure1_slot3;
            var5 = new Array(1);
            var5[0] = var2;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getMode;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot4;
                var1 = var1.PUSH_TO_TALK;
                var1 = var2 === var1;
                return var1;
            };
            var5 = var6.bind(var7)(var5, var2);
            var2 = 88;
            if(!var4) { _fun0001_ip = 112; continue _fun0001 }
 108:
            var2 = _closure1_slot6;
 112:
            var1 = _closure1_slot5;
            var2 = var2 + var1;
            var1 = 0;
            if(!var5) { _fun0001_ip = 133; continue _fun0001 }
 125:
            var1 = 0;
            if(!var3) { _fun0001_ip = 133; continue _fun0001 }
 130:
            var1 = 56;
 133:
            var1 = var2 + var1;
            return var1;
        }
    };
    var3['default'] = var5;
    var5 = 88;
    var3['CALL_ACTION_BAR_HEIGHT'] = var5;
    var3['FIVE_BUTTON_CONTAINER_PADDING_TOP'] = var4;
    var3['FIVE_BUTTON_CONTAINER_PADDING_BOTTOM'] = var4;
    var3['FIVE_BUTTON_LAYOUT_ACTION_BAR_HEIGHT'] = var2;
    return var1;
})();
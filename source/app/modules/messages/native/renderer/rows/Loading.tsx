// app/modules/messages/native/renderer/rows/Loading.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.LoadingType;
    var _closure1_slot0 = var7;
    var7 = var4.RowType;
    var _closure1_slot1 = var7;
    var4 = var4.SeparatorAction;
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 2;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_ACCENT;
    var4['loadButtonBackgroundColor'] = var11;
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.WHITE_500;
    var4['loadButtonColor'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_ACCENT;
    var4['loadingColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/rows/Loading.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function generateLoadingRowData(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.rowType;
            var3 = var1.changeType;
            var6 = var1.text;
            var2 = var1.isLoading;
            var8 = _closure1_slot3;
            var5 = undefined;
            var1 = arg2;
            var5 = var8.bind(var5)(var1);
            var1 = _closure1_slot0;
            var1 = var1.LOAD_BEFORE;
            if(!(var4 !== var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = _closure1_slot2;
            var8 = var1.LOAD_MORE_AFTER;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var1 = _closure1_slot2;
            var8 = var1.LOAD_MORE_BEFORE;
case 4:
            var1 = {};
            var7 = _closure1_slot1;
            var7 = var7.LOADING;
            var1['type'] = var7;
            var1['id'] = var4;
            var4 = {};
            var7 = {};
            var7['type'] = var8;
            var4['action'] = var7;
            var7 = var5.loadButtonBackgroundColor;
            var4['backgroundColor'] = var7;
            var7 = 4;
            var4['cornerRadius'] = var7;
            var4['text'] = var6;
            var1['button'] = var4;
            if(var2) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var4 = var5.loadButtonColor;
            _fun0001_ip = 7; continue _fun0001;
case 5:
            var4 = var5.loadingColor;
case 7:
            var1['color'] = var4;
            var1['changeType'] = var3;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['generateLoadingRowData'] = var2;
    return var1;
})();
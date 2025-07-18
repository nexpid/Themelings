// app/modules/messages/native/renderer/rows/Loading.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var10 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var4);
    var1 = 0;
    var5 = var7[var1];
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.LoadingType;
    var _closure1_slot4 = var5;
    var5 = var4.RowType;
    var _closure1_slot5 = var5;
    var4 = var4.SeparatorAction;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var7[var4];
    var8 = var6.bind(var1)(var4);
    var5 = var8.createNativeStyleProperties;
    var4 = {};
    var9 = 4;
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_ACCENT;
    var4['loadButtonBackgroundColor'] = var11;
    var11 = var7[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.WHITE_500;
    var4['loadButtonColor'] = var11;
    var9 = var7[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_ACCENT;
    var4['loadingColor'] = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/native/renderer/rows/Loading.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function Loading(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var1 = var1.row;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var8 = var1.rowType;
            var10 = var1.text;
            var _closure2_slot0 = var10;
            var5 = var1.isLoading;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 5;
            var3 = var7[var3];
            var6 = var6.bind(var4)(var3);
            var3 = var6.useMessageRendererTheme;
            var6 = var3.bind(var6)();
            var3 = _closure1_slot8;
            var7 = var3.bind(var4)(var6);
            var _closure2_slot1 = var7;
            var3 = _closure1_slot4;
            var3 = var3.LOAD_BEFORE;
            if(!(var8 !== var3)) { _fun0001_ip = 110; continue _fun0001 }
 98:
            var3 = _closure1_slot6;
            var11 = var3.LOAD_MORE_AFTER;
            _fun0001_ip = 120; continue _fun0001;
 110:
            var3 = _closure1_slot6;
            var11 = var3.LOAD_MORE_BEFORE;
 120:
            _closure2_slot2 = var11;
            var9 = _closure1_slot3;
            var6 = var9.useMemo;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var7;
            var3[2] = var10;
            var2 = function() {
                var1 = {};
                var3 = {};
                var4 = _closure2_slot2;
                var3['type'] = var4;
                var1['action'] = var3;
                var3 = _closure2_slot1;
                var3 = var3.loadButtonBackgroundColor;
                var1['backgroundColor'] = var3;
                var3 = 4;
                var1['cornerRadius'] = var3;
                var2 = _closure2_slot0;
                var1['text'] = var2;
                return var1;
            };
            var6 = var6.bind(var9)(var2, var3);
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 6;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Loading;
            var1 = {};
            var1['id'] = var8;
            var1['button'] = var6;
            if(var5) { _fun0001_ip = 214; continue _fun0001 }
 206:
            var6 = var7.loadButtonColor;
            _fun0001_ip = 220; continue _fun0001;
 214:
            var6 = var7.loadingColor;
 220:
            var1['color'] = var6;
            var1['isLoading'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['resolveBaseColors'] = var4;
    var2 = function generateLoadingRowData(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var4 = var1.rowType;
            var3 = var1.changeType;
            var6 = var1.text;
            var2 = var1.isLoading;
            var8 = _closure1_slot8;
            var5 = undefined;
            var1 = arg2;
            var5 = var8.bind(var5)(var1);
            var1 = _closure1_slot4;
            var1 = var1.LOAD_BEFORE;
            if(!(var4 !== var1)) { _fun0002_ip = 69; continue _fun0002 }
 57:
            var1 = _closure1_slot6;
            var8 = var1.LOAD_MORE_AFTER;
            _fun0002_ip = 79; continue _fun0002;
 69:
            var1 = _closure1_slot6;
            var8 = var1.LOAD_MORE_BEFORE;
 79:
            var1 = {};
            var7 = _closure1_slot5;
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
            if(var2) { _fun0002_ip = 149; continue _fun0002 }
 141:
            var4 = var5.loadButtonColor;
            _fun0002_ip = 155; continue _fun0002;
 149:
            var4 = var5.loadingColor;
 155:
            var1['color'] = var4;
            var1['changeType'] = var3;
            var1['isLoading'] = var2;
            return var1;
        }
    };
    var3['generateLoadingRowData'] = var2;
    return var1;
})();
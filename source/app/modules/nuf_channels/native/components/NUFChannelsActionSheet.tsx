// app/modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ContentDismissActionType;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/nuf_channels/native/components/NUFChannelsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function NUFChannelsActionSheet(arg1) {
        var1 = arg1;
        var1 = var1.markAsDismissed;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot3;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 3;
                var3 = var3[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var3 = var3.bind(var4)();
                var5 = _closure2_slot0;
                var4 = null;
                if(!(var4 != var5)) { _fun0001_ip = 67; continue _fun0001 }
 48:
                var3 = _closure2_slot0;
                var2 = _closure1_slot4;
                var2 = var2.UNKNOWN;
                var2 = var3.bind(var1)(var2);
 67:
                return var1;
            }
        };
        var7 = var3.bind(var4)(var1, var2);
        var4 = _closure1_slot5;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 4;
        var1 = var12[var1];
        var3 = undefined;
        var1 = var11.bind(var3)(var1);
        var2 = var1.BottomSheet;
        var1 = {};
        var6 = function onDismiss() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var3 = var1 == var3;
                var4 = undefined;
                var1 = undefined;
                if(var3) { _fun0002_ip = 42; continue _fun0002 }
 20:
                var3 = _closure2_slot0;
                var2 = _closure1_slot4;
                var2 = var2.UNKNOWN;
                var1 = var3.bind(var4)(var2);
 42:
                return var1;
            }
        };
        var1['onDismiss'] = var6;
        var6 = true;
        var1['startExpanded'] = var6;
        var9 = _closure1_slot1;
        var5 = 5;
        var5 = var12[var5];
        var6 = var9.bind(var3)(var5);
        var5 = {};
        var8 = 6;
        var8 = var12[var8];
        var9 = var9.bind(var3)(var8);
        var8 = {};
        var8 = var4.bind(var3)(var9, var8);
        var5['illustration'] = var8;
        var8 = 7;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var13 = var9.intl;
        var10 = var13.string;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.Ay9429;
        var9 = var10.bind(var13)(var9);
        var5['title'] = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var13 = var9.intl;
        var10 = var13.string;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var9 = var9.t;
        var9 = var9.mufH2N;
        var9 = var10.bind(var13)(var9);
        var5['description'] = var9;
        var9 = var12[var8];
        var9 = var11.bind(var3)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var3)(var8);
        var8 = var8.t;
        var8 = var8.BddRzc;
        var8 = var9.bind(var10)(var8);
        var5['CTALabel'] = var8;
        var5['onCTAPress'] = var7;
        var5 = var4.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
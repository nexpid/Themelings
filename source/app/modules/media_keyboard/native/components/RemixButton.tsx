// app/modules/media_keyboard/native/components/RemixButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
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
    var4 = var4.Pressable;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'width': 34, 'height': 34, 'left': 4, 'bottom': 4, 'borderRadius': null, 'backgroundColor': null, 'justifyContent': 'center'};
    var11 = 4;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var10 = 5;
    var13 = var6[var10];
    var14 = var5.bind(var1)(var13);
    var13 = var14.hexWithOpacity;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.unsafe_rawColors;
    var12 = var11.BLACK_500;
    var11 = 0.6;
    var11 = var13.bind(var14)(var12, var11);
    var9['backgroundColor'] = var11;
    var4['remixButton'] = var9;
    var9 = {};
    var9['marginStart'] = var10;
    var4['remixIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/RemixButton.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.channelId;
            var _closure2_slot0 = var9;
            var2 = var1.upload;
            var1 = _closure1_slot6;
            var5 = undefined;
            var8 = var1.bind(var5)();
            var1 = null;
            var4 = var1 == var2;
            var7 = undefined;
            if(var4) { _fun0001_ip = 49; continue _fun0001 }
 44:
            var7 = var2.item;
 49:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 6;
            var2 = var11[var2];
            var2 = var10.bind(var5)(var2);
            var2 = var2.bind(var5)(var9, var7);
            var13 = _closure1_slot3;
            var12 = var13.useCallback;
            var4 = new Array(1);
            var4[0] = var9;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getBestActiveInputForChannelId;
                    var2 = _closure2_slot0;
                    var3 = var3.bind(var4)(var2);
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 59; continue _fun0002 }
 49:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
 59:
                    return var1;
                }
            };
            var4 = var12.bind(var13)(var3, var4);
            var3 = 8;
            var3 = var11[var3];
            var3 = var10.bind(var5)(var3);
            var7 = var3.bind(var5)(var9, var7, var4);
            var1 = null;
            if(!var2) { _fun0001_ip = 285; continue _fun0001 }
 132:
            var4 = _closure1_slot5;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = 'imagebutton';
            var2['accessibilityRole'] = var9;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var9 = 9;
            var10 = var11[var9];
            var10 = var13.bind(var5)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var9 = var11[var9];
            var9 = var13.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.Gp2rPj;
            var9 = var10.bind(var12)(var9);
            var2['accessibilityLabel'] = var9;
            var2['onPress'] = var7;
            var7 = var8.remixButton;
            var2['style'] = var7;
            var10 = _closure1_slot1;
            var6 = 10;
            var6 = var11[var6];
            var7 = var10.bind(var5)(var6);
            var6 = {};
            var9 = 11;
            var9 = var11[var9];
            var9 = var10.bind(var5)(var9);
            var6['source'] = var9;
            var8 = var8.remixIcon;
            var6['style'] = var8;
            var6 = var4.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 285:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
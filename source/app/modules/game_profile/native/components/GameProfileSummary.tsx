// app/modules/game_profile/native/components/GameProfileSummary.tsx
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
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Pressable;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'column';
    var9['flexDirection'] = var10;
    var4['container'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_profile/native/components/GameProfileSummary.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameProfileSummary(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.game;
            var10 = var1.trackAction;
            var _closure2_slot0 = var10;
            var1 = _closure1_slot8;
            var5 = undefined;
            var6 = var1.bind(var5)();
            var9 = _closure1_slot3;
            var4 = var9.useState;
            var1 = false;
            var1 = var4.bind(var9)(var1);
            var13 = _closure1_slot2;
            var12 = 2;
            var1 = var13.bind(var5)(var1, var12);
            var8 = 0;
            var16 = var1[var8];
            var _closure2_slot1 = var16;
            var7 = 1;
            var1 = var1[var7];
            var _closure2_slot2 = var1;
            var4 = var9.useState;
            var1 = null;
            var4 = var4.bind(var9)(var1);
            var4 = var13.bind(var5)(var4, var12);
            var8 = var4[var8];
            var _closure2_slot3 = var8;
            var4 = var4[var7];
            var _closure2_slot4 = var4;
            var12 = var9.useCallback;
            var7 = new Array(1);
            var7[0] = var8;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var3 = _closure2_slot4;
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var1 = var1.lines;
                    var2 = var1.length;
                    var1 = 3;
                    var2 = var2 > var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var12.bind(var9)(var4, var7);
            var7 = var9.useCallback;
            var4 = new Array(2);
            var4[0] = var16;
            var4[1] = var10;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var3 = !var1;
                    var5 = _closure2_slot0;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 5;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var6.bind(var1)(var4);
                    var6 = var4.GameProfileTrackActionActions;
                    if(var3) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = var6.ShowLess;
                    _fun0003_ip = 6; continue _fun0003;
case 4:
                    var4 = var6.ShowMore;
case 6:
                    var4 = var5.bind(var1)(var4);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var12 = var7.bind(var9)(var2, var4);
            var2 = var1 == var3;
            var10 = undefined;
            if(var2) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var10 = var3.summaryLocalized;
case 7:
            if(!(var1 == var10)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var2 = var3.description;
case 11:
            var10 = var2;
case 9:
            if(!(var1 != var10)) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var9 = 6;
            var2 = var2[var9];
            var2 = var3.bind(var5)(var2);
            var4 = var2.intl;
            var3 = var4.string;
            var7 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var9];
            var2 = var7.bind(var5)(var2);
            var7 = var2.t;
            if(var16) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var2 = var7.lBeKY2;
            _fun0001_ip = 17; continue _fun0001;
case 15:
            var2 = var7["6MwJo/"];
case 17:
            var13 = var3.bind(var4)(var2);
            var4 = _closure1_slot7;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var6.container;
            var2['style'] = var6;
            var9 = _closure1_slot6;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var14 = 7;
            var6 = var6[var14];
            var6 = var7.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-md/normal', 'color': 'interactive-text-active'};
            if(var16) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var17 = var1 == var8;
            var16 = 3;
            if(!var17) { _fun0001_ip = 20; continue _fun0001 }
case 18:
            var16 = undefined;
case 20:
            var6['lineClamp'] = var16;
            var6['onTextLayout'] = var15;
            var6['children'] = var10;
            var7 = var9.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var7 = null;
            if(!var8) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var10 = _closure1_slot6;
            var9 = _closure1_slot5;
            var8 = {};
            var8['onPress'] = var12;
            var12 = 'button';
            var8['accessibilityRole'] = var12;
            var8['accessibilityLabel'] = var13;
            var12 = _closure1_slot0;
            var11 = _closure1_slot1;
            var11 = var11[var14];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-md/medium', 'color': 'text-brand'};
            var11['children'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 21:
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 13:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
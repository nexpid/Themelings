// app/modules/game_update/native/TruncatedText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var11.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.TouchableOpacity;
    var _closure1_slot4 = var7;
    var4 = var4.View;
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
    var9 = {'alignSelf': 'flex-start', 'borderBottomWidth': 0.8, 'borderColor': null, 'marginTop': 20};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_LINK;
    var9['borderColor'] = var10;
    var4['toggleTruncateButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/game_update/native/TruncatedText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TruncatedText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = var3.onToggle;
            var _closure2_slot0 = var1;
            var11 = var3.lineClamp;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = 8;
case 2:
            var _closure2_slot1 = var11;
            var1 = null;
            var2 = Object.create(var1);
            var6 = 0;
            var2['onToggle'] = var6;
            var2['lineClamp'] = var6;
            var20 = {};
            var19 = var3;
            var18 = var2;
            var15 = copyDataProperties(var20, var19, var18);
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot8;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot3;
            var1 = var3.useState;
            var2 = false;
            var1 = var1.bind(var3)(var2);
            var8 = _closure1_slot2;
            var7 = 2;
            var1 = var8.bind(var4)(var1, var7);
            var12 = var1[var6];
            _closure2_slot2 = var12;
            var5 = 1;
            var1 = var1[var5];
            _closure2_slot3 = var1;
            var1 = var3.useState;
            var1 = var1.bind(var3)(var2);
            var1 = var8.bind(var4)(var1, var7);
            var6 = var1[var6];
            _closure2_slot4 = var6;
            var1 = var1[var5];
            _closure2_slot5 = var1;
            var1 = var3.useRef;
            var1 = var1.bind(var3)(var2);
            _closure2_slot6 = var1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
case 4:
                    var2 = _closure2_slot4;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot3;
                    var2 = undefined;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = !var1;
                        return var1;
                    };
                    var1 = var3.bind(var2)(var1);
case 6:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onPress'] = var7;
            var7 = 'togglebutton';
            var1['accessibilityRole'] = var7;
            if(!var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = 0.8;
case 8:
            var1['activeOpacity'] = var5;
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var5 = _closure1_slot1;
            var14 = 6;
            var5 = var5[var14];
            var5 = var7.bind(var4)(var5);
            var7 = var5.Text;
            var5 = {};
            var20 = var5;
            var19 = var15;
            var15 = copyDataProperties(var20, var19);
            var15 = undefined;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var15 = undefined;
            if(var12) { _fun0001_ip = 10; continue _fun0001 }
case 12:
            var15 = var11;
case 10:
            var11 = 'lineClamp';
            var5[var11] = var15;
            var11 = function onTextLayout(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot6;
                    var2 = var2.current;
                    if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure2_slot6;
                    var2 = true;
                    var3['current'] = var2;
                    var3 = _closure2_slot5;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.lines;
                    var2 = var2.length;
                    var1 = _closure2_slot1;
                    var2 = var2 > var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 13:
                    var1 = undefined;
                    return var1;
                }
            };
            var9 = 'onTextLayout';
            var5[var9] = var11;
            var7 = var8.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var9 = _closure1_slot6;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var10.toggleTruncateButton;
            var7['style'] = var10;
            var11 = _closure1_slot0;
            var10 = _closure1_slot1;
            var10 = var10[var14];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-sm/medium', 'color': 'text-link'};
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var13 = 7;
            var14 = var17[var13];
            var14 = var16.bind(var4)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.t;
            if(var12) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var12 = var13.Fbrd8J;
            var12 = var14.bind(var15)(var12);
            _fun0001_ip = 19; continue _fun0001;
case 17:
            var13 = var13.JQX/Pb;
            var12 = var14.bind(var15)(var13);
case 19:
            var10['children'] = var12;
            var10 = var9.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 15:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['TruncatedText'] = var2;
    return var1;
})();
// app/modules/guild_progress/native/components/GuildProgressOverview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var2 = function GuildProgressOverviewView(arg1) {
        var1 = arg1;
        var22 = var1.titleStyle;
        var7 = var1.onPress;
        var5 = var1.onLongPress;
        var20 = var1.title;
        var19 = var1.subtitle;
        var9 = var1.percentComplete;
        var1 = _closure1_slot7;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var17 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 10;
        var1 = var11[var1];
        var1 = var17.bind(var4)(var1);
        var2 = var1.PressableOpacity;
        var1 = {'accessibilityRole': 'button', 'activeOpacity': 0.4};
        var8 = var10.container;
        var1['style'] = var8;
        var1['onPress'] = var7;
        var1['onLongPress'] = var5;
        var12 = _closure1_slot6;
        var8 = _closure1_slot4;
        var5 = {};
        var7 = var10.horizontal;
        var5['style'] = var7;
        var14 = _closure1_slot6;
        var13 = _closure1_slot4;
        var7 = {};
        var18 = _closure1_slot5;
        var15 = 11;
        var15 = var11[var15];
        var15 = var17.bind(var4)(var15);
        var16 = var15.LegacyText;
        var15 = {};
        var23 = var10.title;
        var21 = new Array(2);
        var21[0] = var23;
        var21[1] = var22;
        var15['style'] = var21;
        var15['children'] = var20;
        var16 = var18.bind(var4)(var16, var15);
        var15 = new Array(2);
        var15[0] = var16;
        var18 = _closure1_slot5;
        var16 = 12;
        var16 = var11[var16];
        var16 = var17.bind(var4)(var16);
        var17 = var16.Text;
        var16 = {'style': null, 'variant': 'text-xs/medium', 'color': 'header-secondary'};
        var20 = var10.step;
        var16['style'] = var20;
        var16['children'] = var19;
        var16 = var18.bind(var4)(var17, var16);
        var15[1] = var16;
        var7['children'] = var15;
        var7 = var14.bind(var4)(var13, var7);
        var13 = new Array(2);
        var13[0] = var7;
        var16 = _closure1_slot5;
        var7 = _closure1_slot1;
        var14 = 13;
        var14 = var11[var14];
        var15 = var7.bind(var4)(var14);
        var14 = {};
        var17 = 14;
        var17 = var11[var17];
        var17 = var7.bind(var4)(var17);
        var14['source'] = var17;
        var14 = var16.bind(var4)(var15, var14);
        var13[1] = var14;
        var5['children'] = var13;
        var8 = var12.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot5;
        var6 = 15;
        var6 = var11[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var10 = var10.progressBar;
        var6['style'] = var10;
        var6['percent'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot8 = var2;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var5);
    var1 = 0;
    var8 = var7[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var5 = var5.bind(var1)(var8);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var12 = var5.Fonts;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot5 = var8;
    var5 = var5.jsxs;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var8 = {};
    var11 = {};
    var5 = 16;
    var11['padding'] = var5;
    var8['container'] = var11;
    var11 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var8['horizontal'] = var11;
    var11 = {'fontSize': 16, 'lineHeight': 20, 'fontFamily': null, 'color': null, 'marginBottom': 2};
    var12 = var12.PRIMARY_SEMIBOLD;
    var11['fontFamily'] = var12;
    var12 = 5;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.HEADER_PRIMARY;
    var11['color'] = var12;
    var8['title'] = var11;
    var11 = {};
    var11['lineHeight'] = var5;
    var8['step'] = var11;
    var11 = {};
    var12 = 8;
    var11['marginTop'] = var12;
    var8['progressBar'] = var11;
    var8 = var9.bind(var10)(var8);
    var _closure1_slot7 = var8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_progress/native/components/GuildProgressOverview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildProgressOverview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var1 = var2.guild;
            var _closure2_slot0 = var1;
            var10 = var2.titleStyle;
            var3 = var2.longPressDisabled;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var3 = false;
 34:
            var _closure2_slot1 = var3;
            var7 = var2.resume;
            if(!(var7 === var4)) { _fun0001_ip = 50; continue _fun0001 }
 48:
            var7 = false;
 50:
            var _closure2_slot2 = var4;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 6;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useGuildProgressStep;
            var2 = var2.bind(var3)(var1);
            var5 = var2.percentComplete;
            var6 = var2.subtitle;
            var12 = var2.completed;
            _closure2_slot2 = var12;
            var11 = _closure1_slot3;
            var3 = var11.useEffect;
            var2 = new Array(2);
            var2[0] = var12;
            var1 = var1.id;
            var2[1] = var1;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 55; continue _fun0002 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.markCompletedProgressSeen;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
 55:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var11)(var1, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot8;
            var1 = {};
            var1['titleStyle'] = var10;
            var10 = function onPress() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0003_ip = 55; continue _fun0003 }
 10:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 7;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.createProgress;
                    var1 = _closure2_slot0;
                    var1 = var1.id;
                    var1 = var3.bind(var4)(var1);
 55:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.openActionSheet;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1['onPress'] = var10;
            var9 = function onLongPress() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0004_ip = 141; continue _fun0004 }
 13:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 8;
                    var1 = var10[var1];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var1);
                    var2 = var3.showSimpleActionSheet;
                    var1 = {};
                    var4 = 'GuildProgressOverviewLongPress';
                    var1['key'] = var4;
                    var5 = {};
                    var4 = 9;
                    var6 = var10[var4];
                    var6 = var9.bind(var8)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var4 = var10[var4];
                    var4 = var9.bind(var8)(var4);
                    var4 = var4.t;
                    var4 = var4.PbNxaW;
                    var4 = var6.bind(var7)(var4);
                    var5['label'] = var4;
                    var4 = function onPress() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dismissProgress;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var5['onPress'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['options'] = var4;
                    var1 = var2.bind(var3)(var1);
 141:
                    var1 = undefined;
                    return var1;
                }
            };
            var1['onLongPress'] = var9;
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var8 = 9;
            var9 = var12[var8];
            var9 = var11.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var8 = var12[var8];
            var8 = var11.bind(var4)(var8);
            var8 = var8.t;
            if(var7) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var7 = var8.o3HK3d;
            var7 = var9.bind(var10)(var7);
            _fun0001_ip = 260; continue _fun0001;
 247:
            var8 = var8.NzxWjY;
            var7 = var9.bind(var10)(var8);
 260:
            var1['title'] = var7;
            var1['subtitle'] = var6;
            var1['percentComplete'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['GuildProgressOverviewView'] = var2;
    return var1;
})();
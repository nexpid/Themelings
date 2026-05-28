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
        var23 = var1.titleStyle;
        var7 = var1.onPress;
        var5 = var1.onLongPress;
        var20 = var1.title;
        var21 = var1.subtitle;
        var9 = var1.percentComplete;
        var1 = _closure1_slot7;
        var4 = undefined;
        var10 = var1.bind(var4)();
        var3 = _closure1_slot6;
        var14 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 10;
        var1 = var11[var1];
        var1 = var14.bind(var4)(var1);
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
        var16 = _closure1_slot6;
        var15 = _closure1_slot4;
        var13 = {};
        var19 = _closure1_slot5;
        var7 = 11;
        var17 = var11[var7];
        var17 = var14.bind(var4)(var17);
        var18 = var17.LegacyText;
        var17 = {};
        var24 = var10.title;
        var22 = new Array(2);
        var22[0] = var24;
        var22[1] = var23;
        var17['style'] = var22;
        var17['children'] = var20;
        var18 = var19.bind(var4)(var18, var17);
        var17 = new Array(2);
        var17[0] = var18;
        var20 = _closure1_slot5;
        var18 = 12;
        var18 = var11[var18];
        var18 = var14.bind(var4)(var18);
        var19 = var18.Text;
        var18 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-default'};
        var22 = var10.step;
        var18['style'] = var22;
        var18['children'] = var21;
        var18 = var20.bind(var4)(var19, var18);
        var17[1] = var18;
        var13['children'] = var17;
        var15 = var16.bind(var4)(var15, var13);
        var13 = new Array(2);
        var13[0] = var15;
        var16 = _closure1_slot5;
        var7 = var11[var7];
        var7 = var14.bind(var4)(var7);
        var15 = var7.Icon;
        var14 = {};
        var7 = _closure1_slot1;
        var17 = 13;
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
        var6 = 14;
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
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var11 = 16;
    var10['padding'] = var11;
    var5['container'] = var10;
    var10 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var5['horizontal'] = var10;
    var10 = {'fontSize': 16, 'lineHeight': 20, 'fontFamily': null, 'color': null, 'marginBottom': 2};
    var12 = var12.PRIMARY_SEMIBOLD;
    var10['fontFamily'] = var12;
    var12 = 5;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.MOBILE_TEXT_HEADING_PRIMARY;
    var10['color'] = var12;
    var5['title'] = var10;
    var10 = {};
    var10['lineHeight'] = var11;
    var5['step'] = var10;
    var10 = {};
    var11 = 8;
    var10['marginTop'] = var11;
    var5['progressBar'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot7 = var5;
    var5 = 15;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guild_progress/native/components/GuildProgressOverview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function GuildProgressOverview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.guild;
            var _closure2_slot0 = var1;
            var10 = var2.titleStyle;
            var3 = var2.longPressDisabled;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = false;
case 2:
            var _closure2_slot1 = var3;
            var7 = var2.resume;
            if(!(var7 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var7 = false;
case 4:
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
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
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
case 6:
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
case 0:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0003_ip = 6; continue _fun0003 }
case 7:
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
case 6:
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
case 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 8;
                    var1 = var10[var1];
                    var8 = undefined;
                    var3 = var9.bind(var8)(var1);
                    var2 = var3.showSimpleActionSheet;
                    var1 = {'key': 'GuildProgressOverviewLongPress', 'options': null, 'hasIcons': false};
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
case 8:
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
            if(var7) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var8.o3HK3d;
            var7 = var9.bind(var10)(var7);
            _fun0001_ip = 12; continue _fun0001;
case 10:
            var8 = var8.NzxWjb;
            var7 = var9.bind(var10)(var8);
case 12:
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
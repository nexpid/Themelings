// app/modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var12 = 1;
    var8 = var6[var12];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.ScrollView;
    var _closure1_slot4 = var8;
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.GUILD_TAG_BADGE_NUM_CUSTOMIZABLE_COLORS;
    var _closure1_slot6 = var8;
    var9 = var7.GUILD_TAG_BADGE_PALETTE_PRESETS;
    var8 = var7.GuildTagBadgeKind;
    var7 = 4;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var10 = var7.jsxs;
    var _closure1_slot7 = var10;
    var7 = var7.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Object;
    var4 = var7.entries;
    var8 = var4.bind(var7)(var8);
    var7 = var8.filter;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var5 = var2().value;
            var2 = var1;
            var3 = undefined;
            var2 = var2 === var3;
            var4 = undefined;
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5;
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var1.return();
case 4:
            var1 = global;
            var2 = var1.isNaN;
            var1 = var1.Number;
            var1 = var1.bind(var3)(var4);
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var8 = var7.bind(var8)(var4);
    var7 = var8.map;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var2 = var5().value;
            var3 = var1;
            var7 = undefined;
            var4 = var3 === var7;
            var3 = undefined;
            if(var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
            var3 = var2;
case 2:
            var2 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var2 = undefined;
            var4 = var5;
            if(var5) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = var6;
            var4 = var5;
case 6:
            if(var4) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1.return();
case 9:
            var1 = {};
            var1['name'] = var3;
            var1['value'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var7 = {};
    var4 = 'Untinted';
    var7['label'] = var4;
    var7['primary'] = var1;
    var7['secondary'] = var1;
    var4 = new Array(1);
    var4[0] = var7;
    var8 = var9.map;
    var7 = function(arg1, arg2) {
        var2 = arg1;
        var1 = {};
        var4 = arg2;
        var3 = 1;
        var5 = var4 + var3;
        var3 = global;
        var3 = var3.HermesInternal;
        var4 = var3.concat;
        var3 = 'P';
        var3 = var4.bind(var3)(var5);
        var1['label'] = var3;
        var3 = var2.primary;
        var1['primary'] = var3;
        var2 = var2.secondary;
        var1['secondary'] = var2;
        return var1;
    };
    var15 = var8.bind(var9)(var7);
    var16 = var4;
    var14 = var12;
    var7 = arraySpread(var16, var15, var14);
    var _closure1_slot10 = var4;
    var4 = [24, 48, 72];
    var _closure1_slot11 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var9['flex'] = var12;
    var4['wrap'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['padding'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_32;
    var9['paddingBottom'] = var12;
    var4['contentContainer'] = var9;
    var9 = {};
    var12 = 'row';
    var9['flexDirection'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['controlRow'] = var9;
    var9 = {'flexDirection': 'row', 'flexWrap': 'wrap'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['grid'] = var9;
    var9 = {'alignItems': 'center', 'justifyContent': 'flex-start', 'gap': null, 'width': 96, 'padding': null, 'backgroundColor': '#ffffff', 'borderRadius': 8};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var9['padding'] = var10;
    var4['tile'] = var9;
    var9 = {'height': 72, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['badgeBox'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/devtools/native/components/screens/DevToolsGuildTagBadgesScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DevToolsGuildTagBadgesScreen() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var12 = var1.bind(var4)();
        var _closure2_slot0 = var12;
        var8 = _closure1_slot3;
        var1 = var8.useState;
        var5 = 1;
        var1 = var1.bind(var8)(var5);
        var7 = _closure1_slot2;
        var6 = 2;
        var3 = var7.bind(var4)(var1, var6);
        var2 = 0;
        var1 = var3[var2];
        var _closure2_slot1 = var1;
        var3 = var3[var5];
        var _closure2_slot2 = var3;
        var3 = var8.useState;
        var3 = var3.bind(var8)(var5);
        var3 = var7.bind(var4)(var3, var6);
        var2 = var3[var2];
        var3 = var3[var5];
        var _closure2_slot3 = var3;
        var20 = _closure1_slot10;
        var17 = var20[var1];
        var _closure2_slot4 = var17;
        var1 = _closure1_slot11;
        var18 = var1[var2];
        var _closure2_slot5 = var18;
        var3 = _closure1_slot8;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = var12.wrap;
        var1['style'] = var5;
        var5 = var12.contentContainer;
        var1['contentContainerStyle'] = var5;
        var7 = _closure1_slot7;
        var14 = _closure1_slot0;
        var15 = _closure1_slot1;
        var5 = 7;
        var5 = var15[var5];
        var5 = var14.bind(var4)(var5);
        var6 = var5.Stack;
        var5 = {};
        var8 = 16;
        var5['spacing'] = var8;
        var8 = 8;
        var8 = var15[var8];
        var8 = var14.bind(var4)(var8);
        var9 = var8.Text;
        var8 = {};
        var13 = 'text-md/normal';
        var8['variant'] = var13;
        var13 = _closure1_slot9;
        var19 = var13.length;
        var16 = ['All '];
        var16[1] = var19;
        var19 = ' badge kinds. Tint: ';
        var16[2] = var19;
        var17 = var17.label;
        var16[3] = var17;
        var17 = ' · Size: ';
        var16[4] = var17;
        var16[5] = var18;
        var17 = 'px. 2c = two-color badge.';
        var16[6] = var17;
        var8['children'] = var16;
        var9 = var7.bind(var4)(var9, var8);
        var8 = new Array(4);
        var8[0] = var9;
        var9 = {'horizontal': true, 'showsHorizontalScrollIndicator': false};
        var10 = _closure1_slot5;
        var16 = {};
        var17 = var12.controlRow;
        var16['style'] = var17;
        var19 = var20.map;
        var17 = function(arg1, arg2) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var1 = arg1;
                var9 = arg2;
                var _closure3_slot0 = var9;
                var5 = _closure1_slot8;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 9;
                var2 = var4[var2];
                var4 = undefined;
                var2 = var3.bind(var4)(var2);
                var3 = var2.Button;
                var2 = {};
                var7 = var1.label;
                var2['text'] = var7;
                var7 = 'sm';
                var2['size'] = var7;
                var8 = _closure2_slot1;
                var7 = 'secondary';
                if(!(var9 === var8)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var7 = 'primary';
case 11:
                var2['variant'] = var7;
                var6 = function onPress() {
                    var3 = _closure2_slot2;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var2['onPress'] = var6;
                var1 = var1.label;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            }
        };
        var17 = var19.bind(var20)(var17);
        var16['children'] = var17;
        var16 = var3.bind(var4)(var10, var16);
        var9['children'] = var16;
        var9 = var3.bind(var4)(var2, var9);
        var8[1] = var9;
        var9 = 9;
        var9 = var15[var9];
        var9 = var14.bind(var4)(var9);
        var14 = var9.Button;
        var9 = {};
        var15 = global;
        var15 = var15.HermesInternal;
        var17 = var15.concat;
        var16 = 'Size: ';
        var15 = 'px (tap to cycle)';
        var15 = var17.bind(var16)(var18, var15);
        var9['text'] = var15;
        var15 = 'sm';
        var9['size'] = var15;
        var15 = function onPress() {
            var3 = _closure2_slot3;
            var2 = undefined;
            var1 = function(arg1) {
                var2 = arg1;
                var1 = 1;
                var2 = var2 + var1;
                var1 = _closure1_slot11;
                var1 = var1.length;
                var1 = var2 % var1;
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var9['onPress'] = var15;
        var9 = var3.bind(var4)(var14, var9);
        var8[2] = var9;
        var9 = {};
        var12 = var12.grid;
        var9['style'] = var12;
        var12 = var13.map;
        var11 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var10 = var1.name;
                var5 = var1.value;
                var2 = _closure1_slot6;
                var12 = var2[var5];
                var4 = _closure1_slot7;
                var3 = _closure1_slot5;
                var2 = {};
                var8 = _closure2_slot0;
                var6 = var8.tile;
                var2['style'] = var6;
                var7 = _closure1_slot8;
                var6 = {};
                var8 = var8.badgeBox;
                var6['style'] = var8;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var1 = 10;
                var11 = var9[var1];
                var1 = undefined;
                var11 = var8.bind(var1)(var11);
                var13 = var11.GuildBadge;
                var11 = {};
                var11['badge'] = var5;
                var15 = _closure2_slot4;
                var16 = var15.primary;
                var11['primaryTintColor'] = var16;
                var15 = var15.secondary;
                var11['secondaryTintColor'] = var15;
                var14 = _closure2_slot5;
                var11['width'] = var14;
                var11['height'] = var14;
                var11 = var7.bind(var1)(var13, var11);
                var6['children'] = var11;
                var7 = var7.bind(var1)(var3, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var7 = 8;
                var7 = var9[var7];
                var7 = var8.bind(var1)(var7);
                var8 = var7.Text;
                var7 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
                var9 = {};
                var11 = 'center';
                var9['textAlign'] = var11;
                var7['style'] = var9;
                var9 = new Array(2);
                var9[0] = var10;
                var10 = '';
                var11 = 2;
                if(!(var11 === var12)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var10 = ' · 2c';
case 13:
                var9[1] = var10;
                var7['children'] = var9;
                var7 = var4.bind(var1)(var8, var7);
                var6[1] = var7;
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            }
        };
        var11 = var12.bind(var13)(var11);
        var9['children'] = var11;
        var9 = var3.bind(var4)(var10, var9);
        var8[3] = var9;
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
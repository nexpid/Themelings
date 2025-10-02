// app/modules/user_settings/native/UserPrimaryGuildListBottomSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
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
        var9 = var4.bind(var1)(var7);
        var _closure1_slot3 = var9;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var11 = 2;
        var4 = var6[var11];
        var4 = var5.bind(var1)(var4);
        var4 = var4.GuildTagBadgeSize;
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot6 = var7;
        var4 = var4.jsxs;
        var _closure1_slot7 = var4;
        var14 = 4;
        var4 = var6[var14];
        var10 = var5.bind(var1)(var4);
        var8 = var10.createStyles;
        var7 = {};
        var4 = {};
        var12 = 64;
        var4['height'] = var12;
        var7['container'] = var4;
        var4 = {};
        var4['height'] = var12;
        var12 = 5;
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_MODIFIER_ACTIVE;
        var4['backgroundColor'] = var15;
        var7['containerPressed'] = var4;
        var4 = {};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_PRIMARY;
        var4['backgroundColor'] = var15;
        var7['bottomSheetStyles'] = var4;
        var4 = {};
        var15 = var6[var12];
        var15 = var13.bind(var1)(var15);
        var15 = var15.colors;
        var15 = var15.BACKGROUND_SECONDARY;
        var4['backgroundColor'] = var15;
        var7['bottomSheetListContainer'] = var4;
        var15 = 16;
        var4 = {'paddingHorizontal': 16, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
        var7['titleContainer'] = var4;
        var4 = {};
        var4['marginLeft'] = var14;
        var7['guildIcon'] = var4;
        var4 = {};
        var4['paddingVertical'] = var11;
        var11 = var6[var12];
        var11 = var13.bind(var1)(var11);
        var11 = var11.colors;
        var11 = var11.BACKGROUND_FLOATING;
        var4['backgroundColor'] = var11;
        var7['tag'] = var4;
        var11 = {};
        var4 = 6;
        var4 = var6[var4];
        var14 = var5.bind(var1)(var4);
        var4 = var14.isAndroid;
        var16 = var4.bind(var14)();
        var4 = 18;
        var14 = var4;
        if(!var16) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var14 = var15;
case 2:
        var11['lineHeight'] = var14;
        var7['tagStyles'] = var11;
        var11 = {};
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.colors;
        var12 = var12.BACKGROUND_MODIFIER_ACCENT;
        var11['backgroundColor'] = var12;
        var7['divider'] = var11;
        var11 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 8, 'height': 20};
        var7['itemTrailingStyle'] = var11;
        var7 = var8.bind(var10)(var7);
        var _closure1_slot8 = var7;
        var8 = var9.memo;
        var7 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = arg1;
                var8 = var1.item;
                var _closure2_slot0 = var8;
                var12 = var1.selected;
                var _closure2_slot1 = var12;
                var1 = var1.onSelectGuild;
                var _closure2_slot2 = var1;
                var1 = _closure1_slot8;
                var4 = undefined;
                var18 = var1.bind(var4)();
                var16 = null;
                var1 = var16 == var8;
                var17 = undefined;
                if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var17 = var8.profile;
case 4:
                var15 = var16 != var8;
                if(!var15) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var7 = var2.bind(var4)(var1);
                var6 = var7.getGuildTagBadgeUrl;
                var3 = var8.id;
                var2 = var16 == var17;
                var1 = undefined;
                if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var1 = var17.badge;
case 8:
                var10 = var16 != var1;
                var2 = undefined;
                if(!var10) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var2 = var1;
case 10:
                var1 = _closure1_slot5;
                var1 = var1.SIZE_24;
                var15 = var6.bind(var7)(var3, var2, var1);
case 6:
                var3 = _closure1_slot6;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var13 = 8;
                var1 = var1[var13];
                var1 = var2.bind(var4)(var1);
                var2 = var1.FormRow;
                var1 = {};
                var5 = function onPress() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var4 = _closure2_slot1;
                        var1 = null;
                        var2 = null;
                        if(var4) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                        var4 = _closure2_slot0;
                        var6 = var1 == var4;
                        var4 = undefined;
                        if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                        var5 = _closure2_slot0;
                        var4 = var5.id;
case 14:
                        var5 = var1 != var4;
                        var1 = null;
                        if(!var5) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                        var1 = var4;
case 16:
                        var2 = var1;
case 12:
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 9;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.hideActionSheet;
                        var2 = var2.bind(var3)();
                        return var1;
                    }
                };
                var1['onPress'] = var5;
                if(!(var16 == var8)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 10;
                var6 = var11[var5];
                var6 = var10.bind(var4)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var11[var5];
                var5 = var10.bind(var4)(var5);
                var5 = var5.t;
                var5 = var5.PoWNfX;
                var5 = var6.bind(var7)(var5);
                _fun0002_ip = 20; continue _fun0002;
case 18:
                var5 = var8.name;
case 20:
                var1['label'] = var5;
                var6 = var16 != var8;
                var5 = null;
                if(!var6) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var10 = _closure1_slot6;
                var7 = _closure1_slot1;
                var19 = _closure1_slot2;
                var11 = 11;
                var6 = var19[var11];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var14 = var18.guildIcon;
                var6['style'] = var14;
                var6['guild'] = var8;
                var14 = _closure1_slot0;
                var11 = var19[var11];
                var11 = var14.bind(var4)(var11);
                var11 = var11.GuildIconSizes;
                var11 = var11.SMALL_32;
                var6['size'] = var11;
                var5 = var10.bind(var4)(var7, var6);
case 21:
                var1['leading'] = var5;
                if(var12) { _fun0002_ip = 23; continue _fun0002 }
case 24:
                var5 = var18.container;
                _fun0002_ip = 25; continue _fun0002;
case 23:
                var5 = var18.containerPressed;
case 25:
                var1['DEPRECATED_style'] = var5;
                var7 = _closure1_slot7;
                var6 = _closure1_slot4;
                var5 = {};
                var10 = var18.itemTrailingStyle;
                var5['style'] = var10;
                var10 = var16 != var8;
                if(!var10) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                var10 = var16 != var17;
case 26:
                if(!var10) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                var14 = _closure1_slot6;
                var11 = _closure1_slot0;
                var19 = _closure1_slot2;
                var8 = 12;
                var8 = var19[var8];
                var8 = var11.bind(var4)(var8);
                var11 = var8.BaseGuildTagChiplet;
                var8 = {};
                var19 = var18.tag;
                var8['containerStyles'] = var19;
                var18 = var18.tagStyles;
                var8['textStyle'] = var18;
                var17 = var17.tag;
                var18 = var16 != var17;
                var16 = undefined;
                if(!var18) { _fun0002_ip = 30; continue _fun0002 }
case 31:
                var16 = var17;
case 30:
                var8['guildTag'] = var16;
                var8['guildBadge'] = var15;
                var15 = _closure1_slot5;
                var15 = var15.SIZE_16;
                var8['badgeSize'] = var15;
                var15 = 'heading-md/semibold';
                var8['textVariant'] = var15;
                var15 = 'text-primary';
                var8['textColor'] = var15;
                var10 = var14.bind(var4)(var11, var8);
case 28:
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot6;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var9 = var9[var13];
                var9 = var10.bind(var4)(var9);
                var9 = var9.FormRow;
                var10 = var9.Radio;
                var9 = {};
                var9['selected'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['trailing'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var7 = var8.bind(var9)(var7);
        var _closure1_slot9 = var7;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/user_settings/native/UserPrimaryGuildListBottomSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function UserPrimaryGuildListBottomSheet(arg1) {
            var2 = arg1;
            var1 = var2.availableGuilds;
            var _closure2_slot0 = var1;
            var3 = var2.userPrimaryGuild;
            var _closure2_slot1 = var3;
            var2 = var2.onSelectGuild;
            var _closure2_slot2 = var2;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var7 = function renderSeparator() {
                var4 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.FormDivider;
                var1 = {};
                var5 = true;
                var1['iconPush'] = var5;
                var5 = _closure2_slot3;
                var5 = var5.divider;
                var1['style'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var2 = _closure1_slot8;
            var13 = var2.bind(var4)();
            _closure2_slot3 = var13;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 13;
            var2 = var11[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.bind(var4)();
            var6 = _closure1_slot3;
            var3 = var6.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 14;
                var2 = var8[var2];
                var7 = undefined;
                var5 = var3.bind(var7)(var2);
                var4 = var5.sortBy;
                var3 = _closure2_slot0;
                var2 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.name;
                    var1 = var2.toLowerCase;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var10 = var4.bind(var5)(var3, var2);
                var2 = {};
                var6 = _closure1_slot0;
                var1 = 10;
                var3 = var8[var1];
                var3 = var6.bind(var7)(var3);
                var5 = var3.intl;
                var3 = var5.string;
                var1 = var8[var1];
                var1 = var6.bind(var7)(var1);
                var1 = var1.t;
                var1 = var1.YtZ+vL;
                var1 = var3.bind(var5)(var1);
                var2['title'] = var1;
                var1 = [null];
                var9 = 1;
                var11 = var1;
                var3 = arraySpread(var11, var10, var9);
                var2['data'] = var1;
                var1 = new Array(1);
                var1[0] = var2;
                return var1;
            };
            var9 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot6;
            var6 = _closure1_slot0;
            var1 = 15;
            var1 = var11[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'scrollable': true, 'startExpanded': true};
            var12 = var13.bottomSheetStyles;
            var1['backgroundStyles'] = var12;
            var12 = _closure1_slot4;
            var5 = {};
            var13 = var13.titleContainer;
            var5['style'] = var13;
            var13 = 16;
            var13 = var11[var13];
            var13 = var6.bind(var4)(var13);
            var14 = var13.Text;
            var13 = {'variant': 'heading-lg/bold', 'color': 'header-primary', 'accessibilityRole': 'header'};
            var15 = 10;
            var16 = var11[var15];
            var16 = var6.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var11[var15];
            var15 = var6.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.YtZ+vL;
            var15 = var16.bind(var17)(var15);
            var13['children'] = var15;
            var13 = var3.bind(var4)(var14, var13);
            var5['children'] = var13;
            var5 = var3.bind(var4)(var12, var5);
            var1['header'] = var5;
            var5 = 17;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.BottomSheetSectionList;
            var5 = {};
            var5['sections'] = var9;
            var5['SectionSeparatorComponent'] = var7;
            var9 = {};
            var11 = var10.top;
            var9['paddingTop'] = var11;
            var10 = var10.bottom;
            var9['paddingBottom'] = var10;
            var5['contentContainerStyle'] = var9;
            var9 = function keyExtractor(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    var3 = var1 != var2;
                    var1 = 'none-guild-type';
                    if(!var3) { _fun0004_ip = 32; continue _fun0004 }
case 13:
                    var1 = var2.id;
case 32:
                    return var1;
                }
            };
            var5['keyExtractor'] = var9;
            var8 = function renderItem(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var8 = var1.item;
                    var4 = _closure1_slot6;
                    var3 = _closure1_slot9;
                    var2 = {};
                    var2['item'] = var8;
                    var1 = _closure2_slot1;
                    var6 = null;
                    var9 = var6 == var1;
                    var1 = undefined;
                    var7 = undefined;
                    if(var9) { _fun0005_ip = 33; continue _fun0005 }
case 34:
                    var9 = _closure2_slot1;
                    var7 = var9.id;
case 33:
                    var9 = var6 == var8;
                    var6 = undefined;
                    if(var9) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                    var6 = var8.id;
case 35:
                    var6 = var7 === var6;
                    var2['selected'] = var6;
                    var5 = _closure2_slot2;
                    var2['onSelectGuild'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var5['renderItem'] = var8;
            var5['ItemSeparatorComponent'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3['default'] = var2;
        return var1;
    }
})();
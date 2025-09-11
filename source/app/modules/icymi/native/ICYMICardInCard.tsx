// app/modules/icymi/native/ICYMICardInCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ICYMI_MARGIN;
    var _closure1_slot7 = var7;
    var4 = var4.TITLE_AVATAR_SPACING;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function() {
        var1 = {};
        var2 = {};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 7;
        var8 = var6[var3];
        var4 = undefined;
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['marginTop'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_8;
        var2['marginBottom'] = var8;
        var1['container'] = var2;
        var2 = {'flex': 1, 'overflow': 'hidden'};
        var9 = 1;
        var10 = 'hidden';
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.spacing;
        var8 = var8.PX_4;
        var2['paddingTop'] = var8;
        var1['content'] = var2;
        var2 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
        var8 = _closure1_slot7;
        var2['paddingBottom'] = var8;
        var2['marginHorizontal'] = var8;
        var1['channelNameAndAccessory'] = var2;
        var2 = {};
        var11 = 'column';
        var2['flexDirection'] = var11;
        var2['paddingBottom'] = var8;
        var2['marginHorizontal'] = var8;
        var1['channelNameAndAccessoryLarge'] = var2;
        var2 = {'flexDirection': 'row', 'flexGrow': 1};
        var1['header'] = var2;
        var2 = {'flexGrow': 1, 'flexShrink': 1};
        var7 = _closure1_slot8;
        var2['marginLeft'] = var7;
        var1['headerInfo'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginBottom': 2};
        var1['title'] = var2;
        var7 = 0;
        var2 = {'flexShrink': 1, 'flexGrow': 0, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
        var1['titleLeft'] = var2;
        var2 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.radii;
        var11 = var11.sm;
        var2['borderRadius'] = var11;
        var1['subTitleContainer'] = var2;
        var2 = {'flexShrink': 1, 'flexGrow': 0, 'width': '100%'};
        var1['subtitle'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 2};
        var1['genContentSubtitle'] = var2;
        var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 2, 'flex': 1};
        var1['genContentSubtitleChannel'] = var2;
        var2 = {};
        var2['paddingVertical'] = var9;
        var1['subtitleTrailing'] = var2;
        var2 = {'height': 1, 'width': '100%'};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.colors;
        var11 = var11.BORDER_SUBTLE;
        var2['backgroundColor'] = var11;
        var1['separator'] = var2;
        var2 = {};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.radii;
        var11 = var11.xl;
        var2['borderRadius'] = var11;
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.colors;
        var11 = var11.CARD_PRIMARY_BG;
        var2['backgroundColor'] = var11;
        var2['overflow'] = var10;
        var2['borderWidth'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.colors;
        var9 = var9.BORDER_FAINT;
        var2['borderColor'] = var9;
        var2['marginHorizontal'] = var8;
        var2['marginBottom'] = var8;
        var2['flexShrink'] = var7;
        var1['cardContent'] = var2;
        var2 = {'borderBottomWidth': 1, 'borderBottomColor': null, 'flexShrink': 0};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.colors;
        var3 = var3.BORDER_STRONG;
        var2['borderBottomColor'] = var3;
        var1['normalContent'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMICardInCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMICardInCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var4 = arg1;
            var9 = var4.children;
            var15 = var4.conversationProps;
            var3 = var4.actionLabel;
            var _closure2_slot0 = var3;
            var31 = var4.timestamp;
            var19 = var4.id;
            var _closure2_slot1 = var19;
            var2 = var4.type;
            var _closure2_slot2 = var2;
            var17 = var4.onHeaderPress;
            var _closure2_slot3 = var17;
            var16 = var4.onHeaderLongPress;
            var5 = var4.channelId;
            var _closure2_slot4 = var5;
            var7 = var4.guildId;
            var22 = var4.hideTimestamp;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0001_ip = 94; continue _fun0001 }
 92:
            var22 = false;
 94:
            var _closure2_slot5 = var4;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var24 = 8;
            var8 = var6[var24];
            var12 = var10.bind(var4)(var8);
            var11 = var12.useDestinationICYMIExperiment;
            var8 = {};
            var13 = 'ICYMICardInCard';
            var8['location'] = var13;
            var8 = var11.bind(var12)(var8);
            var11 = var8.isNewCardDesign;
            var8 = _closure1_slot12;
            var12 = var8.bind(var4)();
            _closure2_slot5 = var12;
            var8 = 9;
            var8 = var6[var8];
            var13 = var10.bind(var4)(var8);
            var8 = var13.useFontScale;
            var13 = var8.bind(var13)();
            _closure2_slot6 = var13;
            var8 = 10;
            var6 = var6[var8];
            var20 = var10.bind(var4)(var6);
            var18 = var20.useStateFromStores;
            var6 = _closure1_slot5;
            var10 = new Array(1);
            var10[0] = var6;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var18.bind(var20)(var10, var5, var6);
            _closure2_slot7 = var20;
            var10 = null;
            var6 = var10 == var20;
            var5 = undefined;
            if(var6) { _fun0001_ip = 275; continue _fun0001 }
 270:
            var5 = var20.guild_id;
 275:
            if(!(var10 != var5)) { _fun0001_ip = 282; continue _fun0001 }
 279:
            var7 = var5;
 282:
            _closure2_slot8 = var7;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = var5[var8];
            var23 = var6.bind(var4)(var8);
            var21 = var23.useStateFromStores;
            var8 = _closure1_slot6;
            var18 = new Array(1);
            var18[0] = var8;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0002_ip = 37; continue _fun0002 }
 16:
                    var4 = _closure1_slot6;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot8;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var21 = var21.bind(var23)(var18, var7, var8);
            _closure2_slot9 = var21;
            var8 = _closure1_slot3;
            var23 = var8.useMemo;
            var18 = new Array(1);
            var18[0] = var21;
            var7 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot9;
                    var1 = null;
                    var2 = var1 != var2;
                    if(!var2) { _fun0003_ip = 90; continue _fun0003 }
 16:
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var6 = 11;
                    var2 = var8[var6];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var9 = _closure2_slot9;
                    var2['guild'] = var9;
                    var7 = _closure1_slot0;
                    var6 = var8[var6];
                    var6 = var7.bind(var4)(var6);
                    var6 = var6.GuildIconSizes;
                    var6 = var6.NORMAL;
                    var2['size'] = var6;
                    var1 = var5.bind(var4)(var3, var2);
 90:
                    return var1;
                }
            };
            var7 = var23.bind(var8)(var7, var18);
            var25 = var8.useMemo;
            var23 = new Array(1);
            var23[0] = var21;
            var18 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 109; continue _fun0004 }
 16:
                    var6 = _closure1_slot9;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {'style': null, 'lineClamp': 1, 'variant': 'text-sm/bold', 'color': 'header-primary'};
                    var7 = {};
                    var8 = 225;
                    var7['maxWidth'] = var8;
                    var3['style'] = var7;
                    var7 = _closure2_slot9;
                    var7 = var7.name;
                    var3['children'] = var7;
                    var2 = _closure2_slot9;
                    var2 = var2.id;
                    var1 = var6.bind(var5)(var4, var3, var2);
 109:
                    return var1;
                }
            };
            var25 = var25.bind(var8)(var18, var23);
            var23 = var8.useMemo;
            var26 = var12.genContentSubtitle;
            var18 = new Array(5);
            var18[0] = var26;
            var26 = var12.genContentSubtitleChannel;
            var18[1] = var26;
            var18[2] = var17;
            var18[3] = var20;
            var18[4] = var3;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot7;
                    var6 = null;
                    if(!(var6 == var1)) { _fun0005_ip = 46; continue _fun0005 }
 13:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var19 = var1.TextIcon;
                    _fun0005_ip = 86; continue _fun0005;
 46:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.getIconForChannel;
                    var1 = _closure2_slot7;
                    var19 = var2.bind(var3)(var1);
 86:
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot4;
                    var2 = {};
                    var1 = _closure2_slot5;
                    var1 = var1.genContentSubtitle;
                    var2['style'] = var1;
                    var8 = _closure1_slot9;
                    var7 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var18 = 12;
                    var5 = var1[var18];
                    var1 = undefined;
                    var5 = var7.bind(var1)(var5);
                    var7 = var5.Text;
                    var5 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var9 = _closure2_slot0;
                    var5['children'] = var9;
                    var7 = var8.bind(var1)(var7, var5);
                    var5 = new Array(2);
                    var5[0] = var7;
                    var7 = _closure2_slot7;
                    var7 = var6 != var7;
                    var6 = null;
                    if(!var7) { _fun0005_ip = 459; continue _fun0005 }
 196:
                    var9 = _closure1_slot10;
                    var8 = _closure1_slot11;
                    var7 = {};
                    var16 = _closure1_slot9;
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = var14[var18];
                    var10 = var15.bind(var1)(var10);
                    var12 = var10.Text;
                    var10 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var13 = 15;
                    var20 = var14[var13];
                    var20 = var15.bind(var1)(var20);
                    var21 = var20.intl;
                    var20 = var21.string;
                    var13 = var14[var13];
                    var13 = var15.bind(var1)(var13);
                    var13 = var13.t;
                    var13 = var13.CHUAYm;
                    var13 = var20.bind(var21)(var13);
                    var10['children'] = var13;
                    var12 = var16.bind(var1)(var12, var10);
                    var10 = new Array(2);
                    var10[0] = var12;
                    var12 = _closure1_slot4;
                    var11 = {};
                    var13 = _closure2_slot5;
                    var13 = var13.genContentSubtitleChannel;
                    var11['style'] = var13;
                    var13 = {'size': 'xs', 'color': 'header-secondary'};
                    var19 = var16.bind(var1)(var19, var13);
                    var13 = new Array(2);
                    var13[0] = var19;
                    var14 = var14[var18];
                    var14 = var15.bind(var1)(var14);
                    var15 = var14.Text;
                    var14 = {'variant': 'text-sm/medium', 'color': 'header-secondary', 'onPress': null, 'style': null, 'lineClamp': 1, 'ellipsizeMode': 'tail'};
                    var18 = _closure2_slot3;
                    var14['onPress'] = var18;
                    var18 = {};
                    var19 = 1;
                    var18['flex'] = var19;
                    var14['style'] = var18;
                    var17 = _closure2_slot7;
                    var17 = var17.name;
                    var14['children'] = var17;
                    var14 = var16.bind(var1)(var15, var14);
                    var13[1] = var14;
                    var11['children'] = var13;
                    var11 = var9.bind(var1)(var12, var11);
                    var10[1] = var11;
                    var7['children'] = var10;
                    var6 = var9.bind(var1)(var8, var7);
 459:
                    var5[1] = var6;
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var23 = var23.bind(var8)(var3, var18);
            var18 = var8.useCallback;
            var3 = new Array(4);
            var3[0] = var21;
            var3[1] = var20;
            var3[2] = var19;
            var3[3] = var2;
            var2 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot9;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0006_ip = 24; continue _fun0006 }
 16:
                    var2 = _closure2_slot7;
                    var1 = var3 != var2;
 24:
                    if(!var1) { _fun0006_ip = 107; continue _fun0006 }
 27:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openDetailsActionSheet;
                    var1 = {};
                    var5 = _closure2_slot9;
                    var5 = var5.id;
                    var1['guildId'] = var5;
                    var5 = _closure2_slot7;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var5 = _closure2_slot1;
                    var1['id'] = var5;
                    var4 = _closure2_slot2;
                    var1['type'] = var4;
                    var1 = var2.bind(var3)(var1);
 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var26 = var18.bind(var8)(var2, var3);
            var3 = var8.useMemo;
            var2 = new Array(3);
            var2[0] = var13;
            var13 = var12.channelNameAndAccessoryLarge;
            var2[1] = var13;
            var13 = var12.channelNameAndAccessory;
            var2[2] = var13;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot6;
                    var1 = 1.8;
                    if(!(!(var3 > var1))) { _fun0007_ip = 33; continue _fun0007 }
 21:
                    var1 = _closure2_slot5;
                    var1 = var1.channelNameAndAccessory;
                    _fun0007_ip = 43; continue _fun0007;
 33:
                    var2 = _closure2_slot5;
                    var1 = var2.channelNameAndAccessoryLarge;
 43:
                    return var1;
                }
            };
            var8 = var3.bind(var8)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var13 = var12.container;
            var1['style'] = var13;
            var13 = _closure1_slot9;
            var21 = 17;
            var5 = var5[var21];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var17;
            var5['onLongPress'] = var16;
            var16 = var12.content;
            var5['style'] = var16;
            var16 = {};
            var16['style'] = var8;
            var17 = {};
            var8 = var12.header;
            var17['style'] = var8;
            var18 = new Array(2);
            var18[0] = var7;
            var19 = {};
            var7 = var12.headerInfo;
            var19['style'] = var7;
            var7 = {};
            var8 = var12.title;
            var7['style'] = var8;
            var8 = {};
            var20 = var12.titleLeft;
            var8['style'] = var20;
            var20 = new Array(2);
            var20[0] = var25;
            var22 = !var22;
            if(!var22) { _fun0001_ip = 751; continue _fun0001 }
 675:
            var28 = _closure1_slot9;
            var30 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = 12;
            var25 = var32[var25];
            var25 = var30.bind(var4)(var25);
            var27 = var25.Text;
            var25 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            var29 = 18;
            var29 = var32[var29];
            var30 = var30.bind(var4)(var29);
            var29 = var30.getRelativeTimestamp;
            var29 = var29.bind(var30)(var31);
            var25['children'] = var29;
            var22 = var28.bind(var4)(var27, var25);
 751:
            var20[1] = var22;
            var8['children'] = var20;
            var8 = var3.bind(var4)(var2, var8);
            var20 = new Array(2);
            var20[0] = var8;
            var8 = _closure1_slot9;
            var25 = _closure1_slot0;
            var28 = _closure1_slot2;
            var21 = var28[var21];
            var21 = var25.bind(var4)(var21);
            var22 = var21.PressableOpacity;
            var21 = {};
            var21['onPress'] = var26;
            var26 = var12.subtitleTrailing;
            var21['style'] = var26;
            var21['hitSlop'] = var24;
            var24 = 19;
            var24 = var28[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.MoreHorizontalIcon;
            var24 = {};
            var27 = _closure1_slot1;
            var26 = 7;
            var26 = var28[var26];
            var26 = var27.bind(var4)(var26);
            var26 = var26.colors;
            var26 = var26.INTERACTIVE_MUTED;
            var24['color'] = var26;
            var26 = 'sm';
            var24['size'] = var26;
            var24 = var8.bind(var4)(var25, var24);
            var21['children'] = var24;
            var21 = var8.bind(var4)(var22, var21);
            var20[1] = var21;
            var7['children'] = var20;
            var7 = var3.bind(var4)(var2, var7);
            var20 = new Array(2);
            var20[0] = var7;
            var7 = _closure1_slot4;
            var21 = {};
            var22 = var12.subTitleContainer;
            var21['style'] = var22;
            var22 = {};
            var24 = var12.subtitle;
            var22['style'] = var24;
            var22['children'] = var23;
            var22 = var8.bind(var4)(var7, var22);
            var21['children'] = var22;
            var21 = var8.bind(var4)(var7, var21);
            var20[1] = var21;
            var19['children'] = var20;
            var19 = var3.bind(var4)(var2, var19);
            var18[1] = var19;
            var17['children'] = var18;
            var17 = var3.bind(var4)(var2, var17);
            var16['children'] = var17;
            var16 = var13.bind(var4)(var2, var16);
            var5['children'] = var16;
            var6 = var13.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            if(var11) { _fun0001_ip = 1035; continue _fun0001 }
 1027:
            var11 = var12.normalContent;
            _fun0001_ip = 1041; continue _fun0001;
 1035:
            var11 = var12.cardContent;
 1041:
            var6['style'] = var11;
            if(!(var10 == var9)) { _fun0001_ip = 1125; continue _fun0001 }
 1049:
            var11 = var10 != var15;
            var10 = null;
            if(!var11) { _fun0001_ip = 1122; continue _fun0001 }
 1058:
            var13 = _closure1_slot9;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 20;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ConversationPreview;
            var11 = {};
            var11['conversationProps'] = var15;
            var15 = _closure1_slot1;
            var14 = 21;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var11['MediaComponent'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 1122:
            var9 = var10;
 1125:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
// app/modules/icymi/native/ICYMICardInCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function truncateUsername(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var5 = arg1;
            var3 = var5.length;
            var2 = 20;
            var1 = var5;
            if(!(var3 > var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.slice;
            var3 = 0;
            var2 = 17;
            var5 = var4.bind(var5)(var3, var2);
            var2 = global;
            var2 = var2.HermesInternal;
            var4 = var2.concat;
            var3 = '';
            var2 = '...';
            var1 = var4.bind(var3)(var5, var2);
case 2:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function CutoutGuildIconWithUserCustom(arg1) {
        var1 = arg1;
        var13 = var1.guild;
        var12 = var1.author;
        var10 = _closure1_slot0;
        var11 = _closure1_slot2;
        var1 = 9;
        var1 = var11[var1];
        var4 = undefined;
        var3 = var10.bind(var4)(var1);
        var2 = var3.useDestinationICYMIExperiment;
        var1 = {};
        var5 = 'ICYMICardInCard';
        var1['location'] = var5;
        var1 = var2.bind(var3)(var1);
        var2 = var1.isNewCardDesign;
        var1 = _closure1_slot12;
        var14 = var1.bind(var4)(var2);
        var3 = _closure1_slot10;
        var2 = _closure1_slot4;
        var1 = {};
        var5 = {'width': 40, 'height': 40};
        var1['style'] = var5;
        var9 = _closure1_slot9;
        var7 = _closure1_slot1;
        var15 = 10;
        var5 = var11[var15];
        var8 = var7.bind(var4)(var5);
        var5 = {};
        var16 = {'shape': null, 'x': 18, 'y': 18, 'size': 24};
        var15 = var11[var15];
        var15 = var10.bind(var4)(var15);
        var15 = var15.CutoutShape;
        var15 = var15.Circle;
        var16['shape'] = var15;
        var15 = new Array(1);
        var15[0] = var16;
        var5['cutouts'] = var15;
        var17 = _closure1_slot9;
        var18 = 11;
        var15 = var11[var18];
        var16 = var7.bind(var4)(var15);
        var15 = {};
        var15['guild'] = var13;
        var18 = var11[var18];
        var18 = var10.bind(var4)(var18);
        var18 = var18.GuildIconSizes;
        var18 = var18.SMALL_32;
        var15['size'] = var18;
        var15 = var17.bind(var4)(var16, var15);
        var5['children'] = var15;
        var8 = var9.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot9;
        var9 = 12;
        var6 = var11[var9];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var15 = true;
        var6['animate'] = var15;
        var14 = var14.authorAvatar;
        var6['style'] = var14;
        var13 = var13.id;
        var6['guildId'] = var13;
        var6['user'] = var12;
        var9 = var11[var9];
        var9 = var10.bind(var4)(var9);
        var9 = var9.AvatarSizes;
        var9 = var9.XSMALL_20;
        var6['size'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.DEFAULT_ROLE_COLOR_HEX;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var7 = var4.jsxs;
    var _closure1_slot10 = var7;
    var4 = var4.Fragment;
    var _closure1_slot11 = var4;
    var4 = 7;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createICYMIStyles;
    var7 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var8 = arg2;
            var1 = {};
            var2 = {};
            var3 = var4.margin;
            var2['marginTop'] = var3;
            var1['container'] = var2;
            var7 = 1;
            var2 = {'flex': 1, 'overflow': 'hidden'};
            var1['content'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
            var10 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 8;
            var9 = var5[var6];
            var5 = undefined;
            var9 = var10.bind(var5)(var9);
            var10 = var9.spacing;
            if(var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var9 = var10.PX_4;
            _fun0002_ip = 6; continue _fun0002;
case 4:
            var9 = var10.PX_16;
case 6:
            var2['paddingBottom'] = var9;
            var9 = var4.margin;
            var2['marginHorizontal'] = var9;
            var1['channelNameAndAccessory'] = var2;
            var2 = {};
            var9 = 'column';
            var2['flexDirection'] = var9;
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var9 = var9[var6];
            var9 = var10.bind(var5)(var9);
            var9 = var9.spacing;
            if(var8) { _fun0002_ip = 7; continue _fun0002 }
case 8:
            var8 = var9.PX_4;
            _fun0002_ip = 9; continue _fun0002;
case 7:
            var8 = var9.PX_16;
case 9:
            var2['paddingBottom'] = var8;
            var4 = var4.margin;
            var2['marginHorizontal'] = var4;
            var1['channelNameAndAccessoryLarge'] = var2;
            var2 = {'flexDirection': 'row', 'flexGrow': 1};
            var1['header'] = var2;
            var2 = {'flexGrow': 1, 'flexShrink': 1};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var2['marginLeft'] = var8;
            var1['headerInfo'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginBottom': 2};
            var1['title'] = var2;
            var2 = {'flexShrink': 1, 'flexGrow': 0, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
            var1['titleLeft'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
            var8 = var3[var6];
            var8 = var4.bind(var5)(var8);
            var8 = var8.radii;
            var8 = var8.sm;
            var2['borderRadius'] = var8;
            var1['subTitleContainer'] = var2;
            var2 = {'flexShrink': 1, 'flexGrow': 0, 'width': '100%'};
            var1['subtitle'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 2};
            var1['genContentSubtitle'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 2, 'flex': 1};
            var1['genContentSubtitleChannel'] = var2;
            var2 = {};
            var2['paddingVertical'] = var7;
            var1['subtitleTrailing'] = var2;
            var2 = {'height': 1, 'width': '100%'};
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.colors;
            var7 = var7.BORDER_SUBTLE;
            var2['backgroundColor'] = var7;
            var1['separator'] = var2;
            var2 = {'borderBottomWidth': 1, 'borderBottomColor': null, 'flexShrink': 0};
            var3 = var3[var6];
            var3 = var4.bind(var5)(var3);
            var3 = var3.colors;
            var3 = var3.BORDER_STRONG;
            var2['borderBottomColor'] = var3;
            var1['normalContent'] = var2;
            var2 = {'position': 'absolute', 'right': 0, 'bottom': 0};
            var1['authorAvatar'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot12 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createICYMIStyles;
    var4 = function(arg1, arg2) {
        var3 = arg1;
        var1 = {};
        var2 = {};
        var6 = _closure1_slot1;
        var7 = _closure1_slot2;
        var4 = 8;
        var8 = var7[var4];
        var5 = undefined;
        var8 = var6.bind(var5)(var8);
        var8 = var8.radii;
        var8 = var8.xl;
        var2['borderRadius'] = var8;
        var8 = arg2;
        var2['backgroundColor'] = var8;
        var8 = 'hidden';
        var2['overflow'] = var8;
        var8 = 1;
        var2['borderWidth'] = var8;
        var4 = var7[var4];
        var4 = var6.bind(var5)(var4);
        var4 = var4.colors;
        var4 = var4.BORDER_FAINT;
        var2['borderColor'] = var4;
        var4 = var3.margin;
        var2['marginHorizontal'] = var4;
        var3 = var3.margin;
        var2['marginBottom'] = var3;
        var3 = 0;
        var2['flexShrink'] = var3;
        var1['cardContent'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot13 = var4;
    var4 = 29;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMICardInCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMICardInCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var5 = arg1;
            var9 = var5.children;
            var15 = var5.conversationProps;
            var3 = var5.actionLabel;
            var _closure2_slot0 = var3;
            var41 = var5.timestamp;
            var17 = var5.id;
            var _closure2_slot1 = var17;
            var2 = var5.type;
            var _closure2_slot2 = var2;
            var16 = var5.onHeaderPress;
            var _closure2_slot3 = var16;
            var8 = var5.onHeaderLongPress;
            var7 = var5.channelId;
            var _closure2_slot4 = var7;
            var24 = var5.guildId;
            var35 = var5.hideTimestamp;
            var4 = undefined;
            if(!(var35 === var4)) { _fun0003_ip = 10; continue _fun0003 }
case 5:
            var35 = false;
case 10:
            var25 = var5.shouldFeatureUser;
            if(!(var25 === var4)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var25 = false;
case 11:
            var _closure2_slot5 = var25;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var18 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 9;
            var5 = var10[var5];
            var11 = var18.bind(var4)(var5);
            var6 = var11.useDestinationICYMIExperiment;
            var5 = {};
            var12 = 'ICYMICardInCard';
            var5['location'] = var12;
            var5 = var6.bind(var11)(var5);
            var13 = var5.isNewCardDesign;
            var5 = _closure1_slot12;
            var11 = var5.bind(var4)(var13);
            _closure2_slot6 = var11;
            var5 = 13;
            var5 = var10[var5];
            var6 = var18.bind(var4)(var5);
            var5 = var6.useConversationBackgroundColors;
            var5 = var5.bind(var6)();
            var6 = var5.primaryBackground;
            var5 = _closure1_slot13;
            var12 = var5.bind(var4)(var6);
            var5 = 14;
            var5 = var10[var5];
            var6 = var18.bind(var4)(var5);
            var5 = var6.useFontScale;
            var6 = var5.bind(var6)();
            _closure2_slot7 = var6;
            var5 = 15;
            var10 = var10[var5];
            var20 = var18.bind(var4)(var10);
            var19 = var20.useStateFromStores;
            var10 = _closure1_slot5;
            var18 = new Array(1);
            var18[0] = var10;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var19.bind(var20)(var18, var7, var10);
            _closure2_slot8 = var18;
            var10 = null;
            var19 = var10 == var18;
            var7 = undefined;
            if(var19) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var7 = var18.guild_id;
case 13:
            if(!(var10 != var7)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var24 = var7;
case 15:
            _closure2_slot9 = var24;
            var7 = _closure1_slot0;
            var20 = _closure1_slot2;
            var19 = var20[var5];
            var26 = var7.bind(var4)(var19);
            var23 = var26.useStateFromStores;
            var19 = _closure1_slot7;
            var22 = new Array(1);
            var22[0] = var19;
            var21 = new Array(1);
            var21[0] = var24;
            var19 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2);
case 17:
                    return var1;
                }
            };
            var19 = var23.bind(var26)(var22, var19, var21);
            _closure2_slot10 = var19;
            var21 = 16;
            var21 = var20[var21];
            var22 = var7.bind(var4)(var21);
            var21 = var22.useKeyMessage;
            var26 = var21.bind(var22)(var15);
            _closure2_slot11 = var26;
            var5 = var20[var5];
            var27 = var7.bind(var4)(var5);
            var23 = var27.useStateFromStores;
            var5 = _closure1_slot6;
            var22 = new Array(1);
            var22[0] = var5;
            var21 = new Array(3);
            var21[0] = var25;
            var21[1] = var24;
            var21[2] = var26;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot5;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                    var3 = _closure2_slot9;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 21:
                    var3 = _closure2_slot11;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                    var5 = _closure2_slot11;
                    var5 = var5.author;
                    var3 = var5.id;
case 22:
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 19; continue _fun0005 }
case 24:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot11;
                    var2 = var2.author;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
case 19:
                    return var1;
                }
            };
            var21 = var23.bind(var27)(var22, var5, var21);
            _closure2_slot12 = var21;
            var5 = 17;
            var5 = var20[var5];
            var22 = var7.bind(var4)(var5);
            var20 = var22.useName;
            var5 = var10 == var18;
            var7 = undefined;
            if(var5) { _fun0003_ip = 25; continue _fun0003 }
case 26:
            var7 = var18.id;
case 25:
            var23 = var10 == var26;
            var5 = undefined;
            if(var23) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var5 = var26.author;
case 27:
            var5 = var20.bind(var22)(var24, var7, var5);
            var23 = null;
            if(!var25) { _fun0003_ip = 29; continue _fun0003 }
case 30:
            var20 = var10 == var26;
            var7 = undefined;
            if(var20) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var7 = var26.author;
case 31:
            var7 = var10 != var7;
            var23 = null;
            if(!var7) { _fun0003_ip = 29; continue _fun0003 }
case 33:
            var7 = var10 != var24;
            var23 = null;
            if(!var7) { _fun0003_ip = 29; continue _fun0003 }
case 34:
            var7 = var10 != var18;
            var23 = null;
            if(!var7) { _fun0003_ip = 29; continue _fun0003 }
case 35:
            var23 = var5;
case 29:
            _closure2_slot13 = var23;
            var22 = _closure1_slot3;
            var20 = var22.useMemo;
            var7 = new Array(3);
            var7[0] = var19;
            var7[1] = var25;
            var27 = var10 == var26;
            var5 = undefined;
            if(var27) { _fun0003_ip = 36; continue _fun0003 }
case 37:
            var5 = var26.author;
case 36:
            var7[2] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var2 = var3 == var1;
                    var1 = null;
                    if(var2) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var2 = _closure2_slot11;
                    var4 = var3 == var2;
                    var6 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var4 = _closure2_slot11;
                    var2 = var4.author;
case 42:
                    if(!(var3 == var2)) { _fun0006_ip = 44; continue _fun0006 }
case 40:
                    var5 = _closure1_slot9;
                    var3 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var8 = 11;
                    var2 = var10[var8];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var11 = _closure2_slot10;
                    var2['guild'] = var11;
                    var9 = _closure1_slot0;
                    var8 = var10[var8];
                    var8 = var9.bind(var4)(var8);
                    var8 = var8.GuildIconSizes;
                    var8 = var8.NORMAL;
                    var2['size'] = var8;
                    var2 = var5.bind(var4)(var3, var2);
                    _fun0006_ip = 45; continue _fun0006;
case 44:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot15;
                    var3 = {};
                    var8 = _closure2_slot10;
                    var3['guild'] = var8;
                    var7 = _closure2_slot11;
                    var7 = var7.author;
                    var3['author'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
case 45:
                    var1 = var2;
case 38:
                    return var1;
                }
            };
            var22 = var20.bind(var22)(var5, var7);
            var20 = _closure1_slot3;
            var27 = var20.useMemo;
            var7 = new Array(1);
            var7[0] = var19;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 46; continue _fun0007 }
case 18:
                    var6 = _closure1_slot9;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 18;
                    var3 = var5[var3];
                    var5 = undefined;
                    var3 = var4.bind(var5)(var3);
                    var4 = var3.Text;
                    var3 = {'style': null, 'lineClamp': 1, 'variant': 'text-md/semibold', 'color': 'header-primary'};
                    var7 = {};
                    var8 = 225;
                    var7['maxWidth'] = var8;
                    var3['style'] = var7;
                    var7 = _closure2_slot10;
                    var7 = var7.name;
                    var3['children'] = var7;
                    var2 = _closure2_slot10;
                    var2 = var2.id;
                    var1 = var6.bind(var5)(var4, var3, var2);
case 46:
                    return var1;
                }
            };
            var36 = var27.bind(var20)(var5, var7);
            var7 = var20.useMemo;
            var5 = new Array(10);
            var5[0] = var25;
            var27 = var10 == var26;
            var25 = undefined;
            if(var27) { _fun0003_ip = 47; continue _fun0003 }
case 48:
            var25 = var26.author;
case 47:
            var5[1] = var25;
            var5[2] = var24;
            var5[3] = var18;
            var5[4] = var23;
            var5[5] = var21;
            var21 = var11.genContentSubtitle;
            var5[6] = var21;
            var21 = var11.genContentSubtitleChannel;
            var5[7] = var21;
            var5[8] = var16;
            var5[9] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                    var2 = _closure2_slot11;
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0008_ip = 17; continue _fun0008 }
case 21:
                    var3 = _closure2_slot11;
                    var2 = var3.author;
case 17:
                    if(!(var1 != var2)) { _fun0008_ip = 49; continue _fun0008 }
case 51:
                    var2 = _closure2_slot9;
                    if(!(var1 != var2)) { _fun0008_ip = 49; continue _fun0008 }
case 52:
                    var2 = _closure2_slot8;
                    if(!(var1 != var2)) { _fun0008_ip = 49; continue _fun0008 }
case 40:
                    var2 = _closure2_slot13;
                    if(!(var1 == var2)) { _fun0008_ip = 53; continue _fun0008 }
case 49:
                    var2 = _closure2_slot8;
                    var8 = null;
                    if(!(var8 == var2)) { _fun0008_ip = 54; continue _fun0008 }
case 55:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 21;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var23 = var2.TextIcon;
                    _fun0008_ip = 56; continue _fun0008;
case 54:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 19;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.getIconForChannel;
                    var2 = _closure2_slot8;
                    var23 = var3.bind(var5)(var2);
case 56:
                    var6 = _closure1_slot10;
                    var5 = _closure1_slot4;
                    var3 = {};
                    var2 = _closure2_slot6;
                    var2 = var2.genContentSubtitle;
                    var3['style'] = var2;
                    var10 = _closure1_slot9;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var21 = 18;
                    var7 = var2[var21];
                    var2 = undefined;
                    var7 = var9.bind(var2)(var7);
                    var9 = var7.Text;
                    var7 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var11 = _closure2_slot0;
                    var7['children'] = var11;
                    var9 = var10.bind(var2)(var9, var7);
                    var7 = new Array(2);
                    var7[0] = var9;
                    var9 = _closure2_slot8;
                    var9 = var8 != var9;
                    var8 = null;
                    if(!var9) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var11 = _closure1_slot10;
                    var10 = _closure1_slot11;
                    var9 = {};
                    var15 = _closure1_slot9;
                    var19 = _closure1_slot0;
                    var18 = _closure1_slot2;
                    var12 = var18[var21];
                    var12 = var19.bind(var2)(var12);
                    var14 = var12.Text;
                    var12 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var16 = 20;
                    var17 = var18[var16];
                    var17 = var19.bind(var2)(var17);
                    var22 = var17.intl;
                    var17 = var22.string;
                    var16 = var18[var16];
                    var16 = var19.bind(var2)(var16);
                    var16 = var16.t;
                    var16 = var16.CHUAYm;
                    var16 = var17.bind(var22)(var16);
                    var12['children'] = var16;
                    var14 = var15.bind(var2)(var14, var12);
                    var12 = new Array(2);
                    var12[0] = var14;
                    var16 = _closure1_slot10;
                    var15 = _closure1_slot4;
                    var14 = {};
                    var17 = _closure2_slot6;
                    var17 = var17.genContentSubtitleChannel;
                    var14['style'] = var17;
                    var22 = _closure1_slot9;
                    var17 = {'size': 'xs', 'color': 'header-secondary'};
                    var22 = var22.bind(var2)(var23, var17);
                    var17 = new Array(2);
                    var17[0] = var22;
                    var20 = _closure1_slot9;
                    var18 = var18[var21];
                    var18 = var19.bind(var2)(var18);
                    var19 = var18.Text;
                    var18 = {'variant': 'text-sm/medium', 'color': 'header-secondary', 'onPress': null, 'style': null, 'lineClamp': 1, 'ellipsizeMode': 'tail'};
                    var21 = _closure2_slot3;
                    var18['onPress'] = var21;
                    var21 = {};
                    var22 = 1;
                    var21['flex'] = var22;
                    var18['style'] = var21;
                    var21 = _closure2_slot8;
                    var21 = var21.name;
                    var18['children'] = var21;
                    var18 = var20.bind(var2)(var19, var18);
                    var17[1] = var18;
                    var14['children'] = var17;
                    var14 = var16.bind(var2)(var15, var14);
                    var12[1] = var14;
                    var9['children'] = var12;
                    var8 = var11.bind(var2)(var10, var9);
case 57:
                    var7[1] = var8;
                    var3['children'] = var7;
                    var2 = var6.bind(var2)(var5, var3);
                    return var2;
case 53:
                    var2 = _closure2_slot12;
                    var2 = var1 == var2;
                    var9 = undefined;
                    if(var2) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                    var2 = _closure2_slot12;
                    var9 = var2.colorString;
case 59:
                    if(!(var1 == var9)) { _fun0008_ip = 61; continue _fun0008 }
case 62:
                    var9 = _closure1_slot8;
case 61:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 19;
                    var1 = var14[var1];
                    var3 = var11.bind(var4)(var1);
                    var2 = var3.getIconForChannel;
                    var1 = _closure2_slot8;
                    var16 = var2.bind(var3)(var1);
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot4;
                    var1 = {};
                    var5 = _closure2_slot6;
                    var5 = var5.genContentSubtitle;
                    var1['style'] = var5;
                    var7 = _closure1_slot9;
                    var10 = 18;
                    var5 = var14[var10];
                    var5 = var11.bind(var4)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var8 = 'text-sm/semibold';
                    var5['variant'] = var8;
                    var8 = {};
                    var8['color'] = var9;
                    var5['style'] = var8;
                    var9 = _closure1_slot14;
                    var8 = _closure2_slot13;
                    var8 = var9.bind(var4)(var8);
                    var5['children'] = var8;
                    var6 = var7.bind(var4)(var6, var5);
                    var5 = new Array(3);
                    var5[0] = var6;
                    var8 = _closure1_slot9;
                    var6 = var14[var10];
                    var6 = var11.bind(var4)(var6);
                    var7 = var6.Text;
                    var6 = {'variant': 'text-sm/medium', 'color': 'header-secondary'};
                    var9 = 20;
                    var15 = var14[var9];
                    var15 = var11.bind(var4)(var15);
                    var17 = var15.intl;
                    var15 = var17.string;
                    var9 = var14[var9];
                    var9 = var11.bind(var4)(var9);
                    var9 = var9.t;
                    var9 = var9.CHUAYm;
                    var9 = var15.bind(var17)(var9);
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[1] = var6;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot4;
                    var6 = {};
                    var9 = _closure2_slot6;
                    var9 = var9.genContentSubtitleChannel;
                    var6['style'] = var9;
                    var15 = _closure1_slot9;
                    var9 = {'size': 'xs', 'color': 'header-secondary'};
                    var15 = var15.bind(var4)(var16, var9);
                    var9 = new Array(2);
                    var9[0] = var15;
                    var12 = _closure1_slot9;
                    var10 = var14[var10];
                    var10 = var11.bind(var4)(var10);
                    var11 = var10.Text;
                    var10 = {'variant': 'text-sm/medium', 'color': 'header-secondary', 'onPress': null, 'style': null, 'lineClamp': 1, 'ellipsizeMode': 'tail'};
                    var14 = _closure2_slot3;
                    var10['onPress'] = var14;
                    var14 = {};
                    var15 = 1;
                    var14['flex'] = var15;
                    var10['style'] = var14;
                    var13 = _closure2_slot8;
                    var13 = var13.name;
                    var10['children'] = var13;
                    var10 = var12.bind(var4)(var11, var10);
                    var9[1] = var10;
                    var6['children'] = var9;
                    var6 = var8.bind(var4)(var7, var6);
                    var5[2] = var6;
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var32 = var7.bind(var20)(var3, var5);
            var5 = _closure1_slot3;
            var7 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var19;
            var3[1] = var18;
            var3[2] = var17;
            var3[3] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0009_ip = 63; continue _fun0009 }
case 18:
                    var2 = _closure2_slot8;
                    var1 = var3 != var2;
case 63:
                    if(!var1) { _fun0009_ip = 64; continue _fun0009 }
case 21:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openDetailsActionSheet;
                    var1 = {};
                    var5 = _closure2_slot10;
                    var5 = var5.id;
                    var1['guildId'] = var5;
                    var5 = _closure2_slot8;
                    var5 = var5.id;
                    var1['channelId'] = var5;
                    var5 = _closure2_slot1;
                    var1['id'] = var5;
                    var4 = _closure2_slot2;
                    var1['type'] = var4;
                    var1 = var2.bind(var3)(var1);
case 64:
                    var1 = undefined;
                    return var1;
                }
            };
            var33 = var7.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var6;
            var6 = var11.channelNameAndAccessoryLarge;
            var2[1] = var6;
            var6 = var11.channelNameAndAccessory;
            var2[2] = var6;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot7;
                    var1 = 1.8;
                    if(!(!(var3 > var1))) { _fun0010_ip = 65; continue _fun0010 }
case 39:
                    var1 = _closure2_slot6;
                    var1 = var1.channelNameAndAccessory;
                    _fun0010_ip = 43; continue _fun0010;
case 65:
                    var2 = _closure2_slot6;
                    var1 = var2.channelNameAndAccessoryLarge;
case 43:
                    return var1;
                }
            };
            var18 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var11.container;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var29 = 23;
            var5 = var5[var29];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var16;
            var5['onLongPress'] = var8;
            var8 = var11.content;
            var5['style'] = var8;
            var17 = _closure1_slot9;
            var16 = _closure1_slot4;
            var8 = {};
            var8['style'] = var18;
            var20 = _closure1_slot10;
            var19 = _closure1_slot4;
            var18 = {};
            var21 = var11.header;
            var18['style'] = var21;
            var21 = new Array(2);
            var21[0] = var22;
            var24 = _closure1_slot10;
            var23 = _closure1_slot4;
            var22 = {};
            var25 = var11.headerInfo;
            var22['style'] = var25;
            var27 = _closure1_slot10;
            var26 = _closure1_slot4;
            var25 = {};
            var28 = var11.title;
            var25['style'] = var28;
            var31 = _closure1_slot10;
            var30 = _closure1_slot4;
            var28 = {};
            var34 = var11.titleLeft;
            var28['style'] = var34;
            var34 = new Array(2);
            var34[0] = var36;
            var35 = !var35;
            if(!var35) { _fun0003_ip = 66; continue _fun0003 }
case 67:
            var38 = _closure1_slot9;
            var40 = _closure1_slot0;
            var42 = _closure1_slot2;
            var36 = 18;
            var36 = var42[var36];
            var36 = var40.bind(var4)(var36);
            var37 = var36.Text;
            var36 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            var39 = 24;
            var39 = var42[var39];
            var40 = var40.bind(var4)(var39);
            var39 = var40.getRelativeTimestamp;
            var39 = var39.bind(var40)(var41);
            var36['children'] = var39;
            var35 = var38.bind(var4)(var37, var36);
case 66:
            var34[1] = var35;
            var28['children'] = var34;
            var30 = var31.bind(var4)(var30, var28);
            var28 = new Array(2);
            var28[0] = var30;
            var31 = _closure1_slot9;
            var34 = _closure1_slot0;
            var38 = _closure1_slot2;
            var29 = var38[var29];
            var29 = var34.bind(var4)(var29);
            var30 = var29.PressableOpacity;
            var29 = {};
            var29['onPress'] = var33;
            var33 = var11.subtitleTrailing;
            var29['style'] = var33;
            var36 = 8;
            var29['hitSlop'] = var36;
            var35 = _closure1_slot9;
            var33 = 25;
            var33 = var38[var33];
            var33 = var34.bind(var4)(var33);
            var34 = var33.MoreHorizontalIcon;
            var33 = {};
            var37 = _closure1_slot1;
            var36 = var38[var36];
            var36 = var37.bind(var4)(var36);
            var36 = var36.colors;
            var36 = var36.INTERACTIVE_MUTED;
            var33['color'] = var36;
            var36 = 'sm';
            var33['size'] = var36;
            var33 = var35.bind(var4)(var34, var33);
            var29['children'] = var33;
            var29 = var31.bind(var4)(var30, var29);
            var28[1] = var29;
            var25['children'] = var28;
            var26 = var27.bind(var4)(var26, var25);
            var25 = new Array(2);
            var25[0] = var26;
            var28 = _closure1_slot9;
            var27 = _closure1_slot4;
            var26 = {};
            var29 = var11.subTitleContainer;
            var26['style'] = var29;
            var31 = _closure1_slot9;
            var30 = _closure1_slot4;
            var29 = {};
            var33 = var11.subtitle;
            var29['style'] = var33;
            var29['children'] = var32;
            var29 = var31.bind(var4)(var30, var29);
            var26['children'] = var29;
            var26 = var28.bind(var4)(var27, var26);
            var25[1] = var26;
            var22['children'] = var25;
            var22 = var24.bind(var4)(var23, var22);
            var21[1] = var22;
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var8['children'] = var18;
            var8 = var17.bind(var4)(var16, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            if(var13) { _fun0003_ip = 68; continue _fun0003 }
case 69:
            var11 = var11.normalContent;
            _fun0003_ip = 70; continue _fun0003;
case 68:
            var11 = var12.cardContent;
case 70:
            var6['style'] = var11;
            if(!(var10 == var9)) { _fun0003_ip = 71; continue _fun0003 }
case 72:
            var11 = var10 != var15;
            var10 = null;
            if(!var11) { _fun0003_ip = 73; continue _fun0003 }
case 74:
            var13 = _closure1_slot9;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 26;
            var11 = var16[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.ConversationPreview;
            var11 = {};
            var11['conversationProps'] = var15;
            var15 = _closure1_slot1;
            var14 = 27;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var11['MediaComponent'] = var14;
            var14 = 28;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.itemInteracted;
            var11['trackItemInteraction'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 73:
            var9 = var10;
case 71:
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
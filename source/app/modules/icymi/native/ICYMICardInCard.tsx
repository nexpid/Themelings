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
 0:
            var5 = arg1;
            var3 = var5.length;
            var2 = 20;
            var1 = var5;
            if(!(var3 > var2)) { _fun0001_ip = 63; continue _fun0001 }
 18:
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
 63:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
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
    var _closure1_slot14 = var1;
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
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createICYMIStyles;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var8 = arg1;
            var4 = arg2;
            var1 = {};
            var2 = {};
            var3 = var8.margin;
            var2['marginTop'] = var3;
            var1['container'] = var2;
            var9 = 1;
            var10 = 'hidden';
            var2 = {'flex': 1, 'overflow': 'hidden'};
            var1['content'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
            var11 = _closure1_slot1;
            var5 = _closure1_slot2;
            var6 = 8;
            var7 = var5[var6];
            var5 = undefined;
            var7 = var11.bind(var5)(var7);
            var11 = var7.spacing;
            if(var4) { _fun0002_ip = 104; continue _fun0002 }
 96:
            var7 = var11.PX_4;
            _fun0002_ip = 109; continue _fun0002;
 104:
            var7 = var11.PX_16;
 109:
            var2['paddingBottom'] = var7;
            var7 = var8.margin;
            var2['marginHorizontal'] = var7;
            var1['channelNameAndAccessory'] = var2;
            var2 = {};
            var7 = 'column';
            var2['flexDirection'] = var7;
            var11 = _closure1_slot1;
            var7 = _closure1_slot2;
            var7 = var7[var6];
            var7 = var11.bind(var5)(var7);
            var7 = var7.spacing;
            if(var4) { _fun0002_ip = 173; continue _fun0002 }
 165:
            var4 = var7.PX_4;
            _fun0002_ip = 178; continue _fun0002;
 173:
            var4 = var7.PX_16;
 178:
            var2['paddingBottom'] = var4;
            var4 = var8.margin;
            var2['marginHorizontal'] = var4;
            var1['channelNameAndAccessoryLarge'] = var2;
            var2 = {'flexDirection': 'row', 'flexGrow': 1};
            var1['header'] = var2;
            var2 = {'flexGrow': 1, 'flexShrink': 1};
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = var3[var6];
            var7 = var4.bind(var5)(var7);
            var7 = var7.spacing;
            var7 = var7.PX_12;
            var2['marginLeft'] = var7;
            var1['headerInfo'] = var2;
            var2 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'marginBottom': 2};
            var1['title'] = var2;
            var7 = 0;
            var2 = {'flexShrink': 1, 'flexGrow': 0, 'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
            var1['titleLeft'] = var2;
            var2 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
            var11 = var3[var6];
            var11 = var4.bind(var5)(var11);
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
            var11 = var3[var6];
            var11 = var4.bind(var5)(var11);
            var11 = var11.colors;
            var11 = var11.BORDER_SUBTLE;
            var2['backgroundColor'] = var11;
            var1['separator'] = var2;
            var2 = {};
            var11 = var3[var6];
            var11 = var4.bind(var5)(var11);
            var11 = var11.radii;
            var11 = var11.xl;
            var2['borderRadius'] = var11;
            var11 = var3[var6];
            var11 = var4.bind(var5)(var11);
            var11 = var11.colors;
            var11 = var11.CARD_PRIMARY_BG;
            var2['backgroundColor'] = var11;
            var2['overflow'] = var10;
            var2['borderWidth'] = var9;
            var9 = var3[var6];
            var9 = var4.bind(var5)(var9);
            var9 = var9.colors;
            var9 = var9.BORDER_FAINT;
            var2['borderColor'] = var9;
            var9 = var8.margin;
            var2['marginHorizontal'] = var9;
            var8 = var8.margin;
            var2['marginBottom'] = var8;
            var2['flexShrink'] = var7;
            var1['cardContent'] = var2;
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
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/ICYMICardInCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMICardInCard(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arg1;
            var9 = var5.children;
            var17 = var5.conversationProps;
            var3 = var5.actionLabel;
            var _closure2_slot0 = var3;
            var40 = var5.timestamp;
            var15 = var5.id;
            var _closure2_slot1 = var15;
            var2 = var5.type;
            var _closure2_slot2 = var2;
            var13 = var5.onHeaderPress;
            var _closure2_slot3 = var13;
            var8 = var5.onHeaderLongPress;
            var7 = var5.channelId;
            var _closure2_slot4 = var7;
            var23 = var5.guildId;
            var34 = var5.hideTimestamp;
            var4 = undefined;
            if(!(var34 === var4)) { _fun0003_ip = 94; continue _fun0003 }
 92:
            var34 = false;
 94:
            var24 = var5.shouldFeatureUser;
            if(!(var24 === var4)) { _fun0003_ip = 106; continue _fun0003 }
 104:
            var24 = false;
 106:
            var _closure2_slot5 = var24;
            var _closure2_slot6 = var4;
            var _closure2_slot7 = var4;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var _closure2_slot11 = var4;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var16 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 9;
            var5 = var10[var5];
            var11 = var16.bind(var4)(var5);
            var6 = var11.useDestinationICYMIExperiment;
            var5 = {};
            var12 = 'ICYMICardInCard';
            var5['location'] = var12;
            var5 = var6.bind(var11)(var5);
            var11 = var5.isNewCardDesign;
            var5 = _closure1_slot12;
            var12 = var5.bind(var4)(var11);
            _closure2_slot6 = var12;
            var5 = 13;
            var5 = var10[var5];
            var6 = var16.bind(var4)(var5);
            var5 = var6.useFontScale;
            var6 = var5.bind(var6)();
            _closure2_slot7 = var6;
            var5 = 14;
            var10 = var10[var5];
            var19 = var16.bind(var4)(var10);
            var18 = var19.useStateFromStores;
            var10 = _closure1_slot5;
            var16 = new Array(1);
            var16[0] = var10;
            var10 = new Array(1);
            var10[0] = var7;
            var7 = function() {
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var1 = _closure2_slot4;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var18.bind(var19)(var16, var7, var10);
            _closure2_slot8 = var16;
            var10 = null;
            var18 = var10 == var16;
            var7 = undefined;
            if(var18) { _fun0003_ip = 304; continue _fun0003 }
 299:
            var7 = var16.guild_id;
 304:
            if(!(var10 != var7)) { _fun0003_ip = 311; continue _fun0003 }
 308:
            var23 = var7;
 311:
            _closure2_slot9 = var23;
            var7 = _closure1_slot0;
            var19 = _closure1_slot2;
            var18 = var19[var5];
            var25 = var7.bind(var4)(var18);
            var22 = var25.useStateFromStores;
            var18 = _closure1_slot7;
            var21 = new Array(1);
            var21[0] = var18;
            var20 = new Array(1);
            var20[0] = var23;
            var18 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure2_slot9;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0004_ip = 37; continue _fun0004 }
 16:
                    var4 = _closure1_slot7;
                    var3 = var4.getGuild;
                    var2 = _closure2_slot9;
                    var1 = var3.bind(var4)(var2);
 37:
                    return var1;
                }
            };
            var18 = var22.bind(var25)(var21, var18, var20);
            _closure2_slot10 = var18;
            var20 = 15;
            var20 = var19[var20];
            var21 = var7.bind(var4)(var20);
            var20 = var21.useKeyMessage;
            var25 = var20.bind(var21)(var17);
            _closure2_slot11 = var25;
            var5 = var19[var5];
            var26 = var7.bind(var4)(var5);
            var22 = var26.useStateFromStores;
            var5 = _closure1_slot6;
            var21 = new Array(1);
            var21[0] = var5;
            var20 = new Array(3);
            var20[0] = var24;
            var20[1] = var23;
            var20[2] = var25;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot5;
                    var4 = null;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 102; continue _fun0005 }
 14:
                    var3 = _closure2_slot9;
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 102; continue _fun0005 }
 27:
                    var3 = _closure2_slot11;
                    var5 = var4 == var3;
                    var3 = undefined;
                    if(var5) { _fun0005_ip = 55; continue _fun0005 }
 40:
                    var5 = _closure2_slot11;
                    var5 = var5.author;
                    var3 = var5.id;
 55:
                    var3 = var4 != var3;
                    var1 = null;
                    if(!var3) { _fun0005_ip = 102; continue _fun0005 }
 64:
                    var5 = _closure1_slot6;
                    var4 = var5.getMember;
                    var3 = _closure2_slot9;
                    var2 = _closure2_slot11;
                    var2 = var2.author;
                    var2 = var2.id;
                    var1 = var4.bind(var5)(var3, var2);
 102:
                    return var1;
                }
            };
            var20 = var22.bind(var26)(var21, var5, var20);
            _closure2_slot12 = var20;
            var5 = 16;
            var5 = var19[var5];
            var21 = var7.bind(var4)(var5);
            var19 = var21.useName;
            var5 = var10 == var16;
            var7 = undefined;
            if(var5) { _fun0003_ip = 494; continue _fun0003 }
 489:
            var7 = var16.id;
 494:
            var22 = var10 == var25;
            var5 = undefined;
            if(var22) { _fun0003_ip = 509; continue _fun0003 }
 503:
            var5 = var25.author;
 509:
            var5 = var19.bind(var21)(var23, var7, var5);
            var22 = null;
            if(!var24) { _fun0003_ip = 566; continue _fun0003 }
 521:
            var19 = var10 == var25;
            var7 = undefined;
            if(var19) { _fun0003_ip = 536; continue _fun0003 }
 530:
            var7 = var25.author;
 536:
            var7 = var10 != var7;
            var22 = null;
            if(!var7) { _fun0003_ip = 566; continue _fun0003 }
 545:
            var7 = var10 != var23;
            var22 = null;
            if(!var7) { _fun0003_ip = 566; continue _fun0003 }
 554:
            var7 = var10 != var16;
            var22 = null;
            if(!var7) { _fun0003_ip = 566; continue _fun0003 }
 563:
            var22 = var5;
 566:
            _closure2_slot13 = var22;
            var21 = _closure1_slot3;
            var19 = var21.useMemo;
            var7 = new Array(3);
            var7[0] = var18;
            var7[1] = var24;
            var26 = var10 == var25;
            var5 = undefined;
            if(var26) { _fun0003_ip = 606; continue _fun0003 }
 600:
            var5 = var25.author;
 606:
            var7[2] = var5;
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var2 = var3 == var1;
                    var1 = null;
                    if(var2) { _fun0006_ip = 178; continue _fun0006 }
 21:
                    var2 = _closure2_slot5;
                    if(!var2) { _fun0006_ip = 57; continue _fun0006 }
 28:
                    var2 = _closure2_slot11;
                    var4 = var3 == var2;
                    var6 = undefined;
                    var2 = undefined;
                    if(var4) { _fun0006_ip = 53; continue _fun0006 }
 43:
                    var4 = _closure2_slot11;
                    var2 = var4.author;
 53:
                    if(!(var3 == var2)) { _fun0006_ip = 133; continue _fun0006 }
 57:
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
                    _fun0006_ip = 175; continue _fun0006;
 133:
                    var5 = _closure1_slot9;
                    var4 = _closure1_slot14;
                    var3 = {};
                    var8 = _closure2_slot10;
                    var3['guild'] = var8;
                    var7 = _closure2_slot11;
                    var7 = var7.author;
                    var3['author'] = var7;
                    var2 = var5.bind(var6)(var4, var3);
 175:
                    var1 = var2;
 178:
                    return var1;
                }
            };
            var21 = var19.bind(var21)(var5, var7);
            var19 = _closure1_slot3;
            var26 = var19.useMemo;
            var7 = new Array(1);
            var7[0] = var18;
            var5 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0007_ip = 109; continue _fun0007 }
 16:
                    var6 = _closure1_slot9;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 17;
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
 109:
                    return var1;
                }
            };
            var35 = var26.bind(var19)(var5, var7);
            var7 = var19.useMemo;
            var5 = new Array(10);
            var5[0] = var24;
            var26 = var10 == var25;
            var24 = undefined;
            if(var26) { _fun0003_ip = 681; continue _fun0003 }
 675:
            var24 = var25.author;
 681:
            var5[1] = var24;
            var5[2] = var23;
            var5[3] = var16;
            var5[4] = var22;
            var5[5] = var20;
            var20 = var12.genContentSubtitle;
            var5[6] = var20;
            var20 = var12.genContentSubtitleChannel;
            var5[7] = var20;
            var5[8] = var13;
            var5[9] = var3;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0008_ip = 68; continue _fun0008 }
 10:
                    var2 = _closure2_slot11;
                    var1 = null;
                    var3 = var1 == var2;
                    var4 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0008_ip = 37; continue _fun0008 }
 27:
                    var3 = _closure2_slot11;
                    var2 = var3.author;
 37:
                    if(!(var1 != var2)) { _fun0008_ip = 68; continue _fun0008 }
 41:
                    var2 = _closure2_slot9;
                    if(!(var1 != var2)) { _fun0008_ip = 68; continue _fun0008 }
 49:
                    var2 = _closure2_slot8;
                    if(!(var1 != var2)) { _fun0008_ip = 68; continue _fun0008 }
 57:
                    var2 = _closure2_slot13;
                    if(!(var1 == var2)) { _fun0008_ip = 552; continue _fun0008 }
 68:
                    var2 = _closure2_slot8;
                    var8 = null;
                    if(!(var8 == var2)) { _fun0008_ip = 111; continue _fun0008 }
 78:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var23 = var2.TextIcon;
                    _fun0008_ip = 151; continue _fun0008;
 111:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 18;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3);
                    var3 = var5.getIconForChannel;
                    var2 = _closure2_slot8;
                    var23 = var3.bind(var5)(var2);
 151:
                    var6 = _closure1_slot10;
                    var5 = _closure1_slot4;
                    var3 = {};
                    var2 = _closure2_slot6;
                    var2 = var2.genContentSubtitle;
                    var3['style'] = var2;
                    var10 = _closure1_slot9;
                    var9 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var21 = 17;
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
                    if(!var9) { _fun0008_ip = 536; continue _fun0008 }
 261:
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
                    var16 = 19;
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
 536:
                    var7[1] = var8;
                    var3['children'] = var7;
                    var2 = var6.bind(var2)(var5, var3);
                    return var2;
 552:
                    var2 = _closure2_slot12;
                    var2 = var1 == var2;
                    var9 = undefined;
                    if(var2) { _fun0008_ip = 575; continue _fun0008 }
 565:
                    var2 = _closure2_slot12;
                    var9 = var2.colorString;
 575:
                    if(!(var1 == var9)) { _fun0008_ip = 586; continue _fun0008 }
 579:
                    var9 = _closure1_slot8;
 586:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var1 = 18;
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
                    var10 = 17;
                    var5 = var14[var10];
                    var5 = var11.bind(var4)(var5);
                    var6 = var5.Text;
                    var5 = {};
                    var8 = 'text-sm/semibold';
                    var5['variant'] = var8;
                    var8 = {};
                    var8['color'] = var9;
                    var5['style'] = var8;
                    var9 = _closure1_slot13;
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
                    var9 = 19;
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
            var31 = var7.bind(var19)(var3, var5);
            var5 = _closure1_slot3;
            var7 = var5.useCallback;
            var3 = new Array(4);
            var3[0] = var18;
            var3[1] = var16;
            var3[2] = var15;
            var3[3] = var2;
            var2 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                    var1 = _closure2_slot10;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0009_ip = 24; continue _fun0009 }
 16:
                    var2 = _closure2_slot8;
                    var1 = var3 != var2;
 24:
                    if(!var1) { _fun0009_ip = 107; continue _fun0009 }
 27:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 21;
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
 107:
                    var1 = undefined;
                    return var1;
                }
            };
            var32 = var7.bind(var5)(var2, var3);
            var3 = var5.useMemo;
            var2 = new Array(3);
            var2[0] = var6;
            var6 = var12.channelNameAndAccessoryLarge;
            var2[1] = var6;
            var6 = var12.channelNameAndAccessory;
            var2[2] = var6;
            var1 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure2_slot7;
                    var1 = 1.8;
                    if(!(!(var3 > var1))) { _fun0010_ip = 33; continue _fun0010 }
 21:
                    var1 = _closure2_slot6;
                    var1 = var1.channelNameAndAccessory;
                    _fun0010_ip = 43; continue _fun0010;
 33:
                    var2 = _closure2_slot6;
                    var1 = var2.channelNameAndAccessoryLarge;
 43:
                    return var1;
                }
            };
            var16 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var12.container;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var28 = 22;
            var5 = var5[var28];
            var5 = var6.bind(var4)(var5);
            var6 = var5.PressableHighlight;
            var5 = {};
            var5['onPress'] = var13;
            var5['onLongPress'] = var8;
            var8 = var12.content;
            var5['style'] = var8;
            var15 = _closure1_slot9;
            var13 = _closure1_slot4;
            var8 = {};
            var8['style'] = var16;
            var19 = _closure1_slot10;
            var18 = _closure1_slot4;
            var16 = {};
            var20 = var12.header;
            var16['style'] = var20;
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot10;
            var22 = _closure1_slot4;
            var21 = {};
            var24 = var12.headerInfo;
            var21['style'] = var24;
            var26 = _closure1_slot10;
            var25 = _closure1_slot4;
            var24 = {};
            var27 = var12.title;
            var24['style'] = var27;
            var30 = _closure1_slot10;
            var29 = _closure1_slot4;
            var27 = {};
            var33 = var12.titleLeft;
            var27['style'] = var33;
            var33 = new Array(2);
            var33[0] = var35;
            var34 = !var34;
            if(!var34) { _fun0003_ip = 1089; continue _fun0003 }
 1013:
            var37 = _closure1_slot9;
            var39 = _closure1_slot0;
            var41 = _closure1_slot2;
            var35 = 17;
            var35 = var41[var35];
            var35 = var39.bind(var4)(var35);
            var36 = var35.Text;
            var35 = {'lineClamp': 1, 'variant': 'text-xs/normal', 'color': 'header-muted'};
            var38 = 23;
            var38 = var41[var38];
            var39 = var39.bind(var4)(var38);
            var38 = var39.getRelativeTimestamp;
            var38 = var38.bind(var39)(var40);
            var35['children'] = var38;
            var34 = var37.bind(var4)(var36, var35);
 1089:
            var33[1] = var34;
            var27['children'] = var33;
            var29 = var30.bind(var4)(var29, var27);
            var27 = new Array(2);
            var27[0] = var29;
            var30 = _closure1_slot9;
            var33 = _closure1_slot0;
            var37 = _closure1_slot2;
            var28 = var37[var28];
            var28 = var33.bind(var4)(var28);
            var29 = var28.PressableOpacity;
            var28 = {};
            var28['onPress'] = var32;
            var32 = var12.subtitleTrailing;
            var28['style'] = var32;
            var35 = 8;
            var28['hitSlop'] = var35;
            var34 = _closure1_slot9;
            var32 = 24;
            var32 = var37[var32];
            var32 = var33.bind(var4)(var32);
            var33 = var32.MoreHorizontalIcon;
            var32 = {};
            var36 = _closure1_slot1;
            var35 = var37[var35];
            var35 = var36.bind(var4)(var35);
            var35 = var35.colors;
            var35 = var35.INTERACTIVE_MUTED;
            var32['color'] = var35;
            var35 = 'sm';
            var32['size'] = var35;
            var32 = var34.bind(var4)(var33, var32);
            var28['children'] = var32;
            var28 = var30.bind(var4)(var29, var28);
            var27[1] = var28;
            var24['children'] = var27;
            var25 = var26.bind(var4)(var25, var24);
            var24 = new Array(2);
            var24[0] = var25;
            var27 = _closure1_slot9;
            var26 = _closure1_slot4;
            var25 = {};
            var28 = var12.subTitleContainer;
            var25['style'] = var28;
            var30 = _closure1_slot9;
            var29 = _closure1_slot4;
            var28 = {};
            var32 = var12.subtitle;
            var28['style'] = var32;
            var28['children'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var25['children'] = var28;
            var25 = var27.bind(var4)(var26, var25);
            var24[1] = var25;
            var21['children'] = var24;
            var21 = var23.bind(var4)(var22, var21);
            var20[1] = var21;
            var16['children'] = var20;
            var16 = var19.bind(var4)(var18, var16);
            var8['children'] = var16;
            var8 = var15.bind(var4)(var13, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            if(var11) { _fun0003_ip = 1397; continue _fun0003 }
 1389:
            var11 = var12.normalContent;
            _fun0003_ip = 1403; continue _fun0003;
 1397:
            var11 = var12.cardContent;
 1403:
            var6['style'] = var11;
            if(!(var10 == var9)) { _fun0003_ip = 1516; continue _fun0003 }
 1411:
            var11 = var10 != var17;
            var10 = null;
            if(!var11) { _fun0003_ip = 1513; continue _fun0003 }
 1420:
            var13 = _closure1_slot9;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 25;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var12 = var11.ConversationPreview;
            var11 = {};
            var11['conversationProps'] = var17;
            var17 = _closure1_slot1;
            var14 = 26;
            var14 = var16[var14];
            var14 = var17.bind(var4)(var14);
            var11['MediaComponent'] = var14;
            var14 = 27;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.ICYMIAnalytics;
            var14 = var14.trackItemInteraction;
            var11['trackItemInteraction'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 1513:
            var9 = var10;
 1516:
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
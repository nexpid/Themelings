// app/modules/search/native/components/list/rows/LinkGridItem.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function getLinkNodeAtIndex(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = arg2;
            var4 = arg3;
            var _closure2_slot0 = var5;
            var _closure2_slot1 = var4;
            var3 = global;
            var6 = var3.Array;
            var3 = var6.isArray;
            var3 = var3.bind(var6)(var1);
            if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var6 = var1.type;
            var3 = 'link';
            if(!(var3 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var6 = var1.type;
            var3 = 'channelMention';
            if(!(var3 !== var6)) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var6 = var1.content;
            var3 = null;
            if(!(var3 != var6)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var7 = _closure1_slot13;
            var6 = var1.content;
            var3 = undefined;
            var3 = var7.bind(var3)(var6, var5, var4);
            _fun0001_ip = 7; continue _fun0001;
case 4:
            var3 = 0;
            if(!(var3 !== var5)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var6 = _closure1_slot13;
            var3 = 1;
            var5 = var5 - var3;
            var3 = undefined;
            var3 = var6.bind(var3)(var1, var5, var4);
            _fun0001_ip = 7; continue _fun0001;
case 9:
            var3 = undefined;
            var3 = var4.bind(var3)(var1);
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var3 = var1.forEach;
            var2 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot13;
                var4 = _closure2_slot0;
                var3 = _closure2_slot1;
                var2 = undefined;
                var2 = var5.bind(var2)(var1, var4, var3);
                return var1;
            };
            var2 = var3.bind(var1)(var2);
case 7:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function LinkParsedGridItem(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var14 = var2.author;
            var _closure2_slot0 = var14;
            var7 = var2.mediaIndex;
            var _closure2_slot1 = var7;
            var10 = var2.channelId;
            var _closure2_slot2 = var10;
            var9 = var2.messageId;
            var _closure2_slot3 = var9;
            var3 = var2.onPressSearchLink;
            var _closure2_slot4 = var3;
            var8 = var2.onPress;
            var _closure2_slot5 = var8;
            var23 = var2.imageStyle;
            var6 = var2.containerStyle;
            var2 = _closure1_slot12;
            var4 = undefined;
            var22 = var2.bind(var4)();
            var _closure2_slot6 = var22;
            var5 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 9;
            var12 = var13[var2];
            var17 = var5.bind(var4)(var12);
            var16 = var17.useStateFromStores;
            var12 = _closure1_slot8;
            var15 = new Array(1);
            var15[0] = var12;
            var12 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessage;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var18 = var16.bind(var17)(var15, var12);
            var _closure2_slot7 = var18;
            var2 = var13[var2];
            var16 = var5.bind(var4)(var2);
            var15 = var16.useStateFromStores;
            var2 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var15.bind(var16)(var12, var2);
            var _closure2_slot8 = var12;
            var2 = 10;
            var2 = var13[var2];
            var5 = var5.bind(var4)(var2);
            var2 = var5.useShouldFilterKeywords;
            var5 = var2.bind(var5)();
            var _closure2_slot9 = var5;
            var15 = _closure1_slot4;
            var13 = var15.useState;
            var2 = null;
            var16 = var13.bind(var15)(var2);
            var15 = _closure1_slot3;
            var13 = 2;
            var16 = var15.bind(var4)(var16, var13);
            var13 = 0;
            var15 = var16[var13];
            var _closure2_slot10 = var15;
            var13 = 1;
            var13 = var16[var13];
            var _closure2_slot11 = var13;
            var17 = _closure1_slot4;
            var16 = var17.useCallback;
            var13 = new Array(1);
            var13[0] = var7;
            var7 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot13;
                var4 = _closure2_slot1;
                var3 = _closure2_slot11;
                var2 = undefined;
                var2 = var5.bind(var2)(var1, var4, var3);
                return var1;
            };
            var17 = var16.bind(var17)(var7, var13);
            var _closure2_slot12 = var17;
            var16 = _closure1_slot4;
            var13 = var16.useMemo;
            var7 = new Array(3);
            var7[0] = var18;
            var7[1] = var17;
            var7[2] = var5;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot7;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var6 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var1 = 12;
                    var1 = var9[var1];
                    var4 = undefined;
                    var8 = var6.bind(var4)(var1);
                    var7 = var8.renderMessageMarkupWithParser;
                    var1 = 13;
                    var1 = var9[var1];
                    var1 = var6.bind(var4)(var1);
                    var3 = var1.NativeSearchResultLinkPreviewParser;
                    var2 = _closure2_slot7;
                    var1 = {};
                    var11 = _closure2_slot12;
                    var1['postProcessor'] = var11;
                    var10 = _closure2_slot9;
                    var1['shouldFilterKeywords'] = var10;
                    var1 = var7.bind(var8)(var3, var2, var1);
                    var8 = var1.content;
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot5;
                    var1 = {};
                    var7 = 'none';
                    var1['pointerEvents'] = var7;
                    var7 = _closure1_slot10;
                    var5 = 14;
                    var5 = var9[var5];
                    var5 = var6.bind(var4)(var5);
                    var6 = var5.Text;
                    var5 = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
                    var5['children'] = var8;
                    var5 = var7.bind(var4)(var6, var5);
                    var1['children'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
case 11:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 11;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.mE3KJC;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var18 = var13.bind(var16)(var5, var7);
            var16 = _closure1_slot4;
            var13 = var16.useMemo;
            var7 = new Array(2);
            var7[0] = var15;
            var5 = var22.tapToSee;
            var7[1] = var5;
            var5 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot10;
                    var3 = null;
                    if(!(var3 != var2)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                    var2 = _closure2_slot10;
                    var4 = var2.type;
                    var2 = 'link';
                    if(!(var2 === var4)) { _fun0004_ip = 13; continue _fun0004 }
case 15:
                    var2 = _closure2_slot10;
                    var2 = var2.target;
                    if(!(var3 != var2)) { _fun0004_ip = 13; continue _fun0004 }
case 16:
                    var2 = _closure2_slot10;
                    var4 = var2.target;
                    var2 = '';
                    if(!(var2 === var4)) { _fun0004_ip = 17; continue _fun0004 }
case 13:
                    var2 = _closure2_slot10;
                    if(!(var3 != var2)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var2 = _closure2_slot10;
                    var2 = var3 == var2;
                    var5 = undefined;
                    var3 = undefined;
                    if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var2 = _closure2_slot10;
                    var3 = var2.type;
case 20:
                    var2 = 'channelMention';
                    if(!(var2 !== var3)) { _fun0004_ip = 22; continue _fun0004 }
case 18:
                    var6 = _closure1_slot10;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var2 = 14;
                    var2 = var11[var2];
                    var4 = undefined;
                    var2 = var10.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-xs/normal', 'color': 'interactive-normal', 'lineClamp': 1};
                    var7 = _closure2_slot6;
                    var7 = var7.tapToSee;
                    var2['style'] = var7;
                    var7 = 11;
                    var8 = var11[var7];
                    var8 = var10.bind(var4)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var4)(var7);
                    var7 = var7.t;
                    var7 = var7.q2IIoK;
                    var7 = var8.bind(var9)(var7);
                    var2['children'] = var7;
                    var2 = var6.bind(var4)(var3, var2);
                    return var2;
case 22:
                    var2 = _closure2_slot10;
                    var6 = var2.originalLink;
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var2 = 14;
                    var2 = var7[var2];
                    var2 = var3.bind(var5)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
                    var2['children'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var2;
case 17:
                    var1 = _closure2_slot10;
                    var5 = var1.target;
                    var4 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = undefined;
                    var1 = var2.bind(var3)(var1);
                    var2 = var1.Text;
                    var1 = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
                    var1['children'] = var5;
                    var1 = var4.bind(var3)(var2, var1);
                    return var1;
                }
            };
            var17 = var13.bind(var16)(var5, var7);
            var16 = _closure1_slot4;
            var13 = var16.useMemo;
            var7 = var2 == var15;
            var5 = undefined;
            if(var7) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var5 = var15.target;
case 23:
            var7 = new Array(2);
            var7[0] = var5;
            var19 = var2 == var15;
            var5 = undefined;
            if(var19) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var5 = var15.type;
case 25:
            var7[1] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var1 = null;
                    var1 = var1 == var3;
                    var4 = undefined;
                    var3 = undefined;
                    if(var1) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                    var1 = _closure2_slot10;
                    var3 = var1.type;
case 27:
                    var1 = 'channelMention';
                    if(!(var1 !== var3)) { _fun0005_ip = 29; continue _fun0005 }
case 3:
                    var1 = 'link';
                    if(!(var1 !== var3)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
                    var5 = _closure1_slot10;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 17;
                    var1 = var6[var1];
                    var1 = var3.bind(var4)(var1);
                    var3 = var1.LinkIcon;
                    var1 = {};
                    var6 = 'lg';
                    var1['size'] = var6;
                    var1 = var5.bind(var4)(var3, var1);
                    return var1;
case 30:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 16;
                    var3 = var6[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = var5.getUrlIcon;
                    var2 = _closure2_slot10;
                    var2 = var2.target;
                    var3 = var3.bind(var5)(var2);
                    var2 = _closure1_slot10;
                    var1 = {};
                    var5 = 'lg';
                    var1['size'] = var5;
                    var1 = var2.bind(var4)(var3, var1);
                    return var1;
case 29:
                    var3 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 15;
                    var1 = var5[var1];
                    var1 = var2.bind(var4)(var1);
                    var2 = var1.ChatIcon;
                    var1 = {};
                    var5 = 'lg';
                    var1['size'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var21 = var13.bind(var16)(var5, var7);
            var13 = _closure1_slot4;
            var7 = var13.useCallback;
            var5 = new Array(5);
            var5[0] = var10;
            var5[1] = var9;
            var5[2] = var15;
            var5[3] = var8;
            var5[4] = var3;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot10;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0006_ip = 32; continue _fun0006 }
case 12:
                    var2 = _closure2_slot10;
                    var3 = var2.type;
                    var2 = 'link';
                    if(!(var2 !== var3)) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var2 = _closure2_slot10;
                    var3 = var2.type;
                    var2 = 'channelMention';
                    if(!(var2 === var3)) { _fun0006_ip = 35; continue _fun0006 }
case 5:
                    var4 = _closure2_slot4;
                    var3 = {};
                    var2 = _closure2_slot10;
                    var2 = var2.originalLink;
                    var3['url'] = var2;
                    var2 = true;
                    var3['trusted'] = var2;
                    var2 = _closure2_slot3;
                    var3['messageId'] = var2;
                    var2 = _closure2_slot2;
                    var3['channelId'] = var2;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0006_ip = 35; continue _fun0006;
case 33:
                    var4 = _closure2_slot4;
                    var3 = {};
                    var7 = _closure2_slot10;
                    var2 = var7.target;
                    var3['url'] = var2;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 18;
                    var5 = var5[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.isLinkTrusted;
                    var5 = var5.bind(var6)(var7);
                    var3['trusted'] = var5;
                    var5 = _closure2_slot3;
                    var3['messageId'] = var5;
                    var5 = _closure2_slot2;
                    var3['channelId'] = var5;
                    var2 = var4.bind(var2)(var3);
                    _fun0006_ip = 35; continue _fun0006;
case 32:
                    var3 = _closure2_slot5;
                    var2 = {};
                    var4 = _closure2_slot2;
                    var2['channelId'] = var4;
                    var1 = _closure2_slot3;
                    var2['messageId'] = var1;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var7.bind(var13)(var3, var5);
            var13 = _closure1_slot4;
            var7 = var13.useMemo;
            var3 = new Array(2);
            var3[0] = var14;
            var15 = var2 == var12;
            var2 = undefined;
            if(var15) { _fun0002_ip = 36; continue _fun0002 }
case 37:
            var2 = var12.guild_id;
case 36:
            var3[1] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = var3.getAvatarSource;
                    var5 = _closure2_slot8;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var4 = _closure2_slot8;
                    var1 = var4.guild_id;
case 38:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var13 = var7.bind(var13)(var2, var3);
            var7 = _closure1_slot4;
            var3 = var7.useCallback;
            var2 = new Array(3);
            var2[0] = var10;
            var2[1] = var9;
            var2[2] = var8;
            var1 = function() {
                var3 = _closure2_slot5;
                var2 = {};
                var4 = _closure2_slot2;
                var2['channelId'] = var4;
                var1 = _closure2_slot3;
                var2['messageId'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot11;
            var10 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 19;
            var1 = var15[var9];
            var1 = var10.bind(var4)(var1);
            var2 = var1.SearchListCardContainer;
            var1 = {};
            var1['containerStyle'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot10;
            var5 = var15[var9];
            var5 = var10.bind(var4)(var5);
            var6 = var5.SearchListCardThumbnail;
            var5 = {};
            var20 = _closure1_slot10;
            var19 = _closure1_slot5;
            var8 = {};
            var24 = var22.iconContainer;
            var22 = new Array(2);
            var22[0] = var24;
            var22[1] = var23;
            var8['style'] = var22;
            var8['children'] = var21;
            var8 = var20.bind(var4)(var19, var8);
            var5['thumbnail'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var6 = var15[var9];
            var6 = var10.bind(var4)(var6);
            var7 = var6.SearchListCardContent;
            var6 = {};
            var6['label'] = var18;
            var6['subLabel'] = var17;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot10;
            var6 = 20;
            var6 = var15[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.PressableHighlight;
            var6 = {};
            var6['onPress'] = var16;
            var11 = _closure1_slot10;
            var9 = var15[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.SearchListCardFooter;
            var9 = {};
            var9['author'] = var14;
            var9['avatarSource'] = var13;
            var9['channel'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function LinkEmbedGridItem(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var3 = arg1;
            var22 = var3.embed;
            var _closure2_slot0 = var22;
            var14 = var3.author;
            var _closure2_slot1 = var14;
            var16 = var3.channelId;
            var _closure2_slot2 = var16;
            var15 = var3.messageId;
            var _closure2_slot3 = var15;
            var2 = var3.onPressSearchLink;
            var _closure2_slot4 = var2;
            var7 = var3.onPress;
            var _closure2_slot5 = var7;
            var20 = var3.imageStyle;
            var _closure2_slot6 = var20;
            var8 = var3.containerStyle;
            var4 = undefined;
            var _closure2_slot12 = var4;
            var _closure2_slot13 = var4;
            var3 = _closure1_slot12;
            var3 = var3.bind(var4)();
            var _closure2_slot7 = var3;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 9;
            var10 = var9[var5];
            var17 = var6.bind(var4)(var10);
            var13 = var17.useStateFromStores;
            var10 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getMessage;
                var1 = _closure2_slot3;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var13.bind(var17)(var12, var10);
            var _closure2_slot8 = var10;
            var5 = var9[var5];
            var12 = var6.bind(var4)(var5);
            var9 = var12.useStateFromStores;
            var5 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot2;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var9.bind(var12)(var6, var5);
            var _closure2_slot9 = var12;
            var5 = _closure1_slot6;
            var5 = var5.bind(var4)();
            var17 = var5.scale;
            var _closure2_slot10 = var17;
            var18 = var22.url;
            var _closure2_slot11 = var18;
            var9 = var22.rawTitle;
            var19 = null;
            if(!(var19 == var9)) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var6 = var22.author;
            var13 = var19 == var6;
            var5 = undefined;
            if(var13) { _fun0008_ip = 42; continue _fun0008 }
case 43:
            var5 = var6.name;
case 42:
            var9 = var5;
case 40:
            if(!(var19 == var9)) { _fun0008_ip = 44; continue _fun0008 }
case 45:
            var9 = var22.url;
case 44:
            _closure2_slot12 = var9;
            var21 = _closure1_slot4;
            var13 = var21.useMemo;
            var6 = new Array(1);
            var6[0] = var10;
            var5 = function() {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0009_ip = 46; continue _fun0009 }
case 12:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var3 = var4[var3];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var2 = _closure2_slot8;
                    var2 = var3.bind(var4)(var2);
                    var1 = var2.hasSpoilerEmbeds;
case 46:
                    return var1;
                }
            };
            var21 = var13.bind(var21)(var5, var6);
            _closure2_slot13 = var21;
            var13 = _closure1_slot4;
            var6 = var13.useMemo;
            var23 = var14.id;
            var5 = new Array(8);
            var5[0] = var23;
            var5[1] = var16;
            var5[2] = var22;
            var5[3] = var21;
            var5[4] = var20;
            var5[5] = var15;
            var5[6] = var17;
            var3 = var3.iconContainer;
            var5[7] = var3;
            var3 = function() {
                var4 = _closure1_slot10;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 21;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.SearchEmbedMediaImage;
                var1 = {};
                var7 = _closure2_slot3;
                var1['messageId'] = var7;
                var7 = _closure2_slot2;
                var1['channelId'] = var7;
                var7 = _closure2_slot1;
                var7 = var7.id;
                var1['authorId'] = var7;
                var7 = _closure2_slot0;
                var1['embed'] = var7;
                var7 = _closure2_slot6;
                var1['containerStyle'] = var7;
                var8 = function renderFallback() {
                    var4 = _closure1_slot10;
                    var3 = _closure1_slot5;
                    var2 = {};
                    var5 = _closure2_slot7;
                    var7 = var5.iconContainer;
                    var5 = new Array(2);
                    var5[0] = var7;
                    var6 = _closure2_slot6;
                    var5[1] = var6;
                    var2['style'] = var5;
                    var7 = _closure1_slot10;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 17;
                    var5 = var5[var1];
                    var1 = undefined;
                    var5 = var6.bind(var1)(var5);
                    var6 = var5.LinkIcon;
                    var5 = {};
                    var8 = 'md';
                    var5['size'] = var8;
                    var5 = var7.bind(var1)(var6, var5);
                    var2['children'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var1['renderFallback'] = var8;
                var8 = _closure2_slot10;
                var1['scale'] = var8;
                var9 = var7.height;
                var8 = _closure1_slot9;
                var8 = var9 + var8;
                var1['imageHeight'] = var8;
                var7 = var7.width;
                var6 = _closure1_slot9;
                var6 = var7 + var6;
                var1['imageWidth'] = var6;
                var5 = _closure2_slot13;
                var1['hasSpoilerEmbeds'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var20 = var6.bind(var13)(var3, var5);
            var13 = _closure1_slot4;
            var6 = var13.useMemo;
            var5 = new Array(2);
            var5[0] = var14;
            var17 = var19 == var12;
            var3 = undefined;
            if(var17) { _fun0008_ip = 47; continue _fun0008 }
case 48:
            var3 = var12.guild_id;
case 47:
            var5[1] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = var3.getAvatarSource;
                    var5 = _closure2_slot9;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0010_ip = 38; continue _fun0010 }
case 39:
                    var4 = _closure2_slot9;
                    var1 = var4.guild_id;
case 38:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var13 = var6.bind(var13)(var3, var5);
            var6 = _closure1_slot4;
            var5 = var6.useCallback;
            var3 = new Array(5);
            var3[0] = var18;
            var3[1] = var2;
            var3[2] = var9;
            var3[3] = var16;
            var3[4] = var15;
            var2 = function() {
                var3 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 22;
                var2 = var7[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var8 = _closure2_slot11;
                var2 = null;
                var3 = var2 != var8;
                var2 = '[LinkGridItem] Embed url cannot be null';
                var2 = var6.bind(var1)(var3, var2);
                var3 = _closure2_slot4;
                var2 = {};
                var2['url'] = var8;
                var6 = _closure1_slot0;
                var5 = 23;
                var5 = var7[var5];
                var7 = var6.bind(var1)(var5);
                var6 = var7.isLinkTrusted;
                var5 = _closure2_slot12;
                var5 = var6.bind(var7)(var8, var5);
                var2['trusted'] = var5;
                var5 = _closure2_slot3;
                var2['messageId'] = var5;
                var4 = _closure2_slot2;
                var2['channelId'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot4;
            var3 = var6.useCallback;
            var2 = new Array(3);
            var2[0] = var16;
            var2[1] = var15;
            var2[2] = var7;
            var1 = function() {
                var3 = _closure2_slot5;
                var2 = {};
                var4 = _closure2_slot2;
                var2['channelId'] = var4;
                var1 = _closure2_slot3;
                var2['messageId'] = var1;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = var3.bind(var6)(var1, var2);
            var3 = _closure1_slot11;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var15 = 19;
            var1 = var6[var15];
            var1 = var7.bind(var4)(var1);
            var2 = var1.SearchListCardContainer;
            var1 = {};
            var1['containerStyle'] = var8;
            var1['onPress'] = var5;
            var17 = _closure1_slot10;
            var5 = var6[var15];
            var5 = var7.bind(var4)(var5);
            var8 = var5.SearchListCardThumbnail;
            var5 = {};
            var5['thumbnail'] = var20;
            var8 = var17.bind(var4)(var8, var5);
            var5 = new Array(3);
            var5[0] = var8;
            var8 = _closure1_slot10;
            var6 = var6[var15];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SearchListCardContent;
            var6 = {};
            if(!(var19 == var10)) { _fun0008_ip = 49; continue _fun0008 }
case 50:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var10 = 11;
            var17 = var22[var10];
            var17 = var21.bind(var4)(var17);
            var20 = var17.intl;
            var17 = var20.string;
            var10 = var22[var10];
            var10 = var21.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.mE3KJC;
            var9 = var17.bind(var20)(var10);
case 49:
            var6['label'] = var9;
            var17 = _closure1_slot10;
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 14;
            var9 = var20[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-xs/normal', 'color': 'text-link', 'lineClamp': 1};
            if(!(var19 == var18)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var19 = 11;
            var20 = var23[var19];
            var20 = var22.bind(var4)(var20);
            var21 = var20.intl;
            var20 = var21.string;
            var19 = var23[var19];
            var19 = var22.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.q2IIoK;
            var18 = var20.bind(var21)(var19);
case 51:
            var9['children'] = var18;
            var9 = var17.bind(var4)(var10, var9);
            var6['subLabel'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot10;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 20;
            var6 = var9[var6];
            var6 = var10.bind(var4)(var6);
            var7 = var6.PressableHighlight;
            var6 = {};
            var6['onPress'] = var16;
            var11 = _closure1_slot10;
            var9 = var9[var15];
            var9 = var10.bind(var4)(var9);
            var10 = var9.SearchListCardFooter;
            var9 = {};
            var9['author'] = var14;
            var9['avatarSource'] = var13;
            var9['channel'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot5 = var8;
    var4 = var4.useWindowDimensions;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FILE_OR_LINK_IMAGE_BUFFER;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {};
    var10['flex'] = var11;
    var4['container'] = var10;
    var10 = {};
    var11 = 8;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var10['borderTopLeftRadius'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var10['borderTopRightRadius'] = var11;
    var4['imageContainer'] = var10;
    var10 = {'alignItems': 'center', 'justifyContent': 'center'};
    var4['iconContainer'] = var10;
    var10 = {};
    var11 = 'italic';
    var10['fontStyle'] = var11;
    var4['tapToSee'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = var7.memo;
    var2 = function LinkGridItem(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var9 = var1.data;
            var8 = var1.onPressSearchLink;
            var7 = var1.onPress;
            var6 = var1.imageStyle;
            var2 = var1.containerStyle;
            var3 = var9.embed;
            var1 = null;
            if(!(var1 == var3)) { _fun0011_ip = 53; continue _fun0011 }
case 54:
            var5 = _closure1_slot10;
            var4 = _closure1_slot14;
            var3 = {};
            var1 = var9.messageId;
            var3['messageId'] = var1;
            var1 = var9.channelId;
            var3['channelId'] = var1;
            var1 = var9.author;
            var3['author'] = var1;
            var1 = var9.mediaIndex;
            var3['mediaIndex'] = var1;
            var3['onPressSearchLink'] = var8;
            var3['onPress'] = var7;
            var3['imageStyle'] = var6;
            var3['containerStyle'] = var2;
            var1 = undefined;
            var1 = var5.bind(var1)(var4, var3);
            _fun0011_ip = 55; continue _fun0011;
case 53:
            var5 = _closure1_slot10;
            var4 = _closure1_slot15;
            var3 = {};
            var10 = var9.embed;
            var3['embed'] = var10;
            var10 = var9.messageId;
            var3['messageId'] = var10;
            var10 = var9.channelId;
            var3['channelId'] = var10;
            var10 = var9.author;
            var3['author'] = var10;
            var9 = var9.mediaIndex;
            var3['mediaIndex'] = var9;
            var3['onPressSearchLink'] = var8;
            var3['onPress'] = var7;
            var3['imageStyle'] = var6;
            var3['containerStyle'] = var2;
            var2 = undefined;
            var1 = var5.bind(var2)(var4, var3);
case 55:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 24;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/search/native/components/list/rows/LinkGridItem.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
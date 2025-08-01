// app/modules/expression_picker/native/ExpressionPicker.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var16;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var11 = 0;
    var7 = var6[var11];
    var4 = metroImportAll;
    var1 = undefined;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var14 = 1;
    var4 = var6[var14];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var13 = 2;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var8 = var4.ExpressionPickerViewType;
    var _closure1_slot5 = var8;
    var8 = var4.ExpressionPickerOrder;
    var _closure1_slot6 = var8;
    var12 = var4.PADDING_HORIZONTAL;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EmojiIntention;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot9 = var8;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'overflow': 'hidden', 'backgroundColor': null, 'position': 'relative'};
    var15 = 7;
    var15 = var6[var15];
    var15 = var16.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.EXPRESSION_PICKER_BG;
    var10['backgroundColor'] = var15;
    var10['paddingHorizontal'] = var12;
    var4['expressionPickerContainer'] = var10;
    var10 = {};
    var10['flex'] = var14;
    var4['expressionPickerContent'] = var10;
    var10 = {};
    var12 = var13 * var12;
    var10['paddingTop'] = var12;
    var10['paddingHorizontal'] = var11;
    var4['segmentedControl'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var11;
    var4['segmentedControlUnpadded'] = var10;
    var4 = var8.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var18 = var2.channel;
            var _closure2_slot0 = var18;
            var12 = var2.expressionType;
            var21 = var2.hideGifFavorites;
            var4 = undefined;
            if(!(var21 === var4)) { _fun0001_ip = 34; continue _fun0001 }
 32:
            var21 = false;
 34:
            var17 = var2.onPressEmoji;
            var23 = var2.onPressSticker;
            var20 = var2.onPressGIF;
            var16 = var2.onBackspace;
            var9 = var2.visibleTabs;
            if(!(var9 === var4)) { _fun0001_ip = 75; continue _fun0001 }
 68:
            var9 = _closure1_slot6;
 75:
            var22 = var2.stickerFormats;
            var15 = var2.disableLongPress;
            var8 = var2.height;
            var14 = var2.inActionSheet;
            var13 = var2.inPortalKeyboard;
            var _closure2_slot1 = var4;
            var _closure2_slot2 = var4;
            var _closure2_slot3 = var4;
            var2 = _closure1_slot11;
            var11 = var2.bind(var4)();
            var7 = _closure1_slot3;
            var3 = var7.useRef;
            var2 = false;
            var2 = var3.bind(var7)(var2);
            _closure2_slot1 = var2;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var5 = 8;
            var5 = var3[var5];
            var6 = var2.bind(var4)(var5);
            var5 = {};
            var5['expressionType'] = var12;
            var5['expressionPickerTabs'] = var9;
            var5 = var6.bind(var4)(var5);
            var19 = var5.expressionPickerSelectedIndex;
            var12 = var5.expressionPickerViewType;
            _closure2_slot2 = var12;
            var25 = var5.expressionPickerTabStrings;
            var9 = var7.useMemo;
            var6 = new Array(1);
            var6[0] = var18;
            var5 = function() {
                var2 = _closure2_slot0;
                var1 = var2.getGuildId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var9.bind(var7)(var5, var6);
            _closure2_slot3 = var5;
            var9 = var7.useEffect;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.maybeFetchTopEmojisByGuild;
                var2 = _closure2_slot3;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5 = var9.bind(var7)(var5, var6);
            var6 = _closure1_slot0;
            var5 = 10;
            var5 = var3[var5];
            var9 = var6.bind(var4)(var5);
            var6 = var9.useSegmentedControlState;
            var5 = {};
            var24 = 0;
            var5['pageWidth'] = var24;
            var5['defaultIndex'] = var19;
            var19 = function onSetActiveIndex(arg1) {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 11;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.setKeyboardType;
                var2 = {};
                var6 = 12;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.KeyboardTypes;
                var6 = var6.EXPRESSION;
                var2['type'] = var6;
                var6 = _closure1_slot6;
                var5 = arg1;
                var5 = var6[var5];
                var2['context'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var5['onSetActiveIndex'] = var19;
            var24 = var25.map;
            var19 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var19 = var24.bind(var25)(var19);
            var5['items'] = var19;
            var26 = var6.bind(var9)(var5);
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var12;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    if(var2) { _fun0002_ip = 173; continue _fun0002 }
 21:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot5;
                    var2 = var2.EMOJI;
                    if(!(var3 !== var2)) { _fun0002_ip = 115; continue _fun0002 }
 39:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var4.bind(var2)(var3);
                    var4 = var6.trackWithMetadata;
                    var2 = _closure1_slot7;
                    var3 = var2.EXPRESSION_PICKER_OPENED;
                    var2 = {};
                    var7 = _closure2_slot2;
                    var2['tab'] = var7;
                    var7 = false;
                    var2['badged'] = var7;
                    var2 = var4.bind(var6)(var3, var2);
                    var3 = _closure2_slot1;
                    var2 = true;
                    var3['current'] = var2;
                    _fun0002_ip = 235; continue _fun0002;
 115:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 14;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = {};
                    var6 = _closure1_slot8;
                    var6 = var6.CHAT;
                    var2['intention'] = var6;
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure2_slot1;
                    var2 = true;
                    var3['current'] = var2;
                    _fun0002_ip = 235; continue _fun0002;
 173:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.trackWithMetadata;
                    var1 = _closure1_slot7;
                    var2 = var1.EXPRESSION_PICKER_TAB_CLICKED;
                    var1 = {};
                    var5 = _closure2_slot2;
                    var1['tab'] = var5;
                    var5 = false;
                    var1['badged'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 235:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var5);
            var1 = 15;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var3 = _closure1_slot5;
            var3 = var3.EMOJI;
            var3 = var12 === var3;
            if(var3) { _fun0001_ip = 398; continue _fun0001 }
 384:
            var5 = _closure1_slot5;
            var5 = var5.STICKER;
            var3 = var12 === var5;
 398:
            var1['hasCategories'] = var3;
            var2 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenReaderEnabled;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 445; continue _fun0001 }
 441:
            var19 = {};
            _fun0001_ip = 460; continue _fun0001;
 445:
            var1 = {};
            var2 = var2.safeAreaBottomKeyboardAware;
            var1['marginBottom'] = var2;
            var19 = var1;
 460:
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var11.expressionPickerContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var9 = null;
            var6 = var9 != var8;
            if(!var6) { _fun0001_ip = 502; continue _fun0001 }
 493:
            var7 = {};
            var7['height'] = var8;
            var6 = var7;
 502:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot4;
            var5 = {};
            if(!var14) { _fun0001_ip = 534; continue _fun0001 }
 523:
            if(var13) { _fun0001_ip = 534; continue _fun0001 }
 526:
            var8 = var11.segmentedControlUnpadded;
            _fun0001_ip = 540; continue _fun0001;
 534:
            var8 = var11.segmentedControl;
 540:
            var5['style'] = var8;
            var8 = _closure1_slot9;
            var25 = _closure1_slot0;
            var27 = _closure1_slot2;
            var24 = 17;
            var24 = var27[var24];
            var24 = var25.bind(var4)(var24);
            var25 = var24.SegmentedControl;
            var24 = {};
            var24['state'] = var26;
            var24 = var8.bind(var4)(var25, var24);
            var5['children'] = var24;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var24 = var11.expressionPickerContent;
            var11 = new Array(2);
            var11[0] = var24;
            var11[1] = var19;
            var6['style'] = var11;
            var11 = _closure1_slot5;
            var11 = var11.EMOJI;
            if(!(var12 !== var11)) { _fun0001_ip = 804; continue _fun0001 }
 649:
            var11 = _closure1_slot5;
            var11 = var11.GIF;
            if(!(var12 !== var11)) { _fun0001_ip = 737; continue _fun0001 }
 663:
            var11 = _closure1_slot5;
            var11 = var11.STICKER;
            var9 = null;
            if(!(var12 === var11)) { _fun0001_ip = 735; continue _fun0001 }
 679:
            var19 = _closure1_slot9;
            var12 = _closure1_slot1;
            var24 = _closure1_slot2;
            var11 = 20;
            var11 = var24[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['channel'] = var18;
            var11['onPressSticker'] = var23;
            var11['stickerFormats'] = var22;
            var11['inActionSheet'] = var14;
            var11['inPortalKeyboard'] = var13;
            var9 = var19.bind(var4)(var12, var11);
 735:
            _fun0001_ip = 802; continue _fun0001;
 737:
            var19 = _closure1_slot9;
            var12 = _closure1_slot1;
            var22 = _closure1_slot2;
            var11 = 19;
            var11 = var22[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var22 = var18.id;
            var11['channelId'] = var22;
            var22 = var18.guild_id;
            var11['guildId'] = var22;
            var11['hideFavorites'] = var21;
            var11['onPressGIF'] = var20;
            var11['inActionSheet'] = var14;
            var9 = var19.bind(var4)(var12, var11);
 802:
            _fun0001_ip = 865; continue _fun0001;
 804:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 18;
            var10 = var19[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['channel'] = var18;
            var10['onPressEmoji'] = var17;
            var10['onBackspace'] = var16;
            var10['disableLongPress'] = var15;
            var10['inActionSheet'] = var14;
            var10['inPortalKeyboard'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 865:
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/expression_picker/native/ExpressionPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
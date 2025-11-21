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
case 0:
            var2 = arg1;
            var18 = var2.bottomSheetRef;
            var19 = var2.bottomSheetIndex;
            var17 = var2.channel;
            var _closure2_slot0 = var17;
            var12 = var2.expressionType;
            var22 = var2.hideGifFavorites;
            var4 = undefined;
            if(!(var22 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var22 = false;
case 2:
            var16 = var2.onPressEmoji;
            var24 = var2.onPressSticker;
            var21 = var2.onPressGIF;
            var15 = var2.onBackspace;
            var9 = var2.visibleTabs;
            if(!(var9 === var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var9 = _closure1_slot6;
case 4:
            var23 = var2.stickerFormats;
            var14 = var2.disableLongPress;
            var8 = var2.height;
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
            var20 = var5.expressionPickerSelectedIndex;
            var12 = var5.expressionPickerViewType;
            _closure2_slot2 = var12;
            var26 = var5.expressionPickerTabStrings;
            var9 = var7.useMemo;
            var6 = new Array(1);
            var6[0] = var17;
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
            var25 = 0;
            var5['pageWidth'] = var25;
            var5['defaultIndex'] = var20;
            var20 = function onSetActiveIndex(arg1) {
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
            var5['onSetActiveIndex'] = var20;
            var25 = var26.map;
            var20 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var1['id'] = var2;
                var1['label'] = var2;
                var2 = null;
                var1['page'] = var2;
                return var1;
            };
            var20 = var25.bind(var26)(var20);
            var5['items'] = var20;
            var27 = var6.bind(var9)(var5);
            var6 = var7.useEffect;
            var5 = new Array(1);
            var5[0] = var12;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot1;
                    var2 = var1.current;
                    if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var3 = _closure2_slot2;
                    var2 = _closure1_slot5;
                    var2 = var2.EMOJI;
                    if(!(var3 !== var2)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
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
                    _fun0002_ip = 10; continue _fun0002;
case 8:
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
                    _fun0002_ip = 10; continue _fun0002;
case 6:
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
case 10:
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
            if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = _closure1_slot5;
            var5 = var5.STICKER;
            var3 = var12 === var5;
case 11:
            var1['hasCategories'] = var3;
            var2 = var2.bind(var4)(var1);
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useIsScreenReaderEnabled;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var20 = {};
            _fun0001_ip = 15; continue _fun0001;
case 13:
            var1 = {};
            var2 = var2.safeAreaBottomKeyboardAware;
            var1['marginBottom'] = var2;
            var20 = var1;
case 15:
            var3 = _closure1_slot10;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var11.expressionPickerContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var9 = null;
            var6 = var9 != var8;
            if(!var6) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = {};
            var7['height'] = var8;
            var6 = var7;
case 16:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot4;
            var5 = {};
            if(var13) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var11.segmentedControlUnpadded;
            _fun0001_ip = 20; continue _fun0001;
case 18:
            var8 = var11.segmentedControl;
case 20:
            var5['style'] = var8;
            var8 = _closure1_slot9;
            var26 = _closure1_slot0;
            var28 = _closure1_slot2;
            var25 = 17;
            var25 = var28[var25];
            var25 = var26.bind(var4)(var25);
            var26 = var25.SegmentedControl;
            var25 = {};
            var25['state'] = var27;
            var25 = var8.bind(var4)(var26, var25);
            var5['children'] = var25;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var25 = var11.expressionPickerContent;
            var11 = new Array(2);
            var11[0] = var25;
            var11[1] = var20;
            var6['style'] = var11;
            var11 = _closure1_slot5;
            var11 = var11.EMOJI;
            if(!(var12 !== var11)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var11 = _closure1_slot5;
            var11 = var11.GIF;
            if(!(var12 !== var11)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var11 = _closure1_slot5;
            var11 = var11.STICKER;
            var9 = null;
            if(!(var12 === var11)) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var20 = _closure1_slot9;
            var12 = _closure1_slot1;
            var25 = _closure1_slot2;
            var11 = 20;
            var11 = var25[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['bottomSheetRef'] = var18;
            var11['bottomSheetIndex'] = var19;
            var11['channel'] = var17;
            var11['onPressSticker'] = var24;
            var11['stickerFormats'] = var23;
            var11['inPortalKeyboard'] = var13;
            var9 = var20.bind(var4)(var12, var11);
case 25:
            _fun0001_ip = 27; continue _fun0001;
case 23:
            var20 = _closure1_slot9;
            var12 = _closure1_slot1;
            var23 = _closure1_slot2;
            var11 = 19;
            var11 = var23[var11];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['bottomSheetRef'] = var18;
            var23 = var17.id;
            var11['channelId'] = var23;
            var23 = var17.guild_id;
            var11['guildId'] = var23;
            var11['hideFavorites'] = var22;
            var11['onPressGIF'] = var21;
            var9 = var20.bind(var4)(var12, var11);
case 27:
            _fun0001_ip = 28; continue _fun0001;
case 21:
            var12 = _closure1_slot9;
            var11 = _closure1_slot1;
            var20 = _closure1_slot2;
            var10 = 18;
            var10 = var20[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {};
            var10['bottomSheetIndex'] = var19;
            var10['bottomSheetRef'] = var18;
            var10['channel'] = var17;
            var10['onPressEmoji'] = var16;
            var10['onBackspace'] = var15;
            var10['disableLongPress'] = var14;
            var10['inPortalKeyboard'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 28:
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
// app/modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function DropdownOptionRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.option;
            var _closure2_slot0 = var14;
            var7 = var1.responses;
            var9 = var1.onSelect;
            var _closure2_slot1 = var9;
            var2 = var1.canBeNew;
            var5 = _closure1_slot10;
            var4 = undefined;
            var10 = var5.bind(var4)();
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 7;
            var5 = var8[var5];
            var11 = var6.bind(var4)(var5);
            var8 = var11.useStateFromStores;
            var5 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var2 = var1.emoji;
                    var6 = null;
                    var3 = var6 == var2;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var1 = var2.id;
case 2:
                    var2 = var6 != var1;
                    var1 = null;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure1_slot5;
                    var2 = var3.getUsableCustomEmojiById;
                    var5 = _closure2_slot0;
                    var5 = var5.emoji;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var4 = var5.id;
case 6:
                    var1 = var2.bind(var3)(var4);
case 4:
                    return var1;
                }
            };
            var20 = var8.bind(var11)(var6, var5);
            var6 = var7.includes;
            var5 = var14.id;
            var8 = var6.bind(var7)(var5);
            var _closure2_slot2 = var8;
            var7 = _closure1_slot3;
            var6 = var7.useCallback;
            var5 = new Array(3);
            var5[0] = var9;
            var5[1] = var14;
            var5[2] = var8;
            var3 = function() {
                var4 = _closure2_slot1;
                var3 = _closure2_slot0;
                var1 = _closure2_slot2;
                var2 = !var1;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var6.bind(var7)(var3, var5);
            var7 = var14.emoji;
            var3 = null;
            var9 = var3 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = var7.id;
case 8:
            if(!(var3 == var6)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var14.emoji;
            var9 = var3 == var7;
            var6 = undefined;
            if(var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var6 = var7.name;
case 12:
            var6 = var3 != var6;
            var7 = null;
            if(!var6) { _fun0001_ip = 14; continue _fun0001 }
case 10:
            var11 = _closure1_slot8;
            var9 = _closure1_slot4;
            var6 = {};
            var12 = {'display': 'flex', 'alignItems': 'center'};
            var6['style'] = var12;
            var15 = _closure1_slot8;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 8;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var16 = var10.optionTextEmoji;
            var12['textEmojiStyle'] = var16;
            var16 = var10.optionImageEmoji;
            var12['fastImageStyle'] = var16;
            var17 = var3 != var20;
            var16 = undefined;
            if(!var17) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var17 = 9;
            var17 = var19[var17];
            var19 = var18.bind(var4)(var17);
            var18 = var19.getEmojiURL;
            var17 = {};
            var21 = var20.id;
            var17['id'] = var21;
            var20 = var20.animated;
            var17['animated'] = var20;
            var20 = _closure1_slot7;
            var17['size'] = var20;
            var16 = var18.bind(var19)(var17);
case 15:
            var12['src'] = var16;
            var16 = var14.emoji;
            var18 = var3 == var16;
            var17 = undefined;
            if(var18) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var17 = var16.name;
case 17:
            var18 = var3 != var17;
            var16 = '';
            if(!var18) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var16 = var17;
case 19:
            var12['name'] = var16;
            var12 = var15.bind(var4)(var13, var12);
            var6['children'] = var12;
            var7 = var11.bind(var4)(var9, var6);
case 14:
            var6 = null;
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var2 = var14.isUnseen;
            var6 = null;
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var9 = _closure1_slot8;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 10;
            var2 = var16[var11];
            var2 = var15.bind(var4)(var2);
            var3 = var2.TextBadge;
            var2 = {};
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.BadgeColors;
            var11 = var11.BRAND;
            var2['color'] = var11;
            var11 = 11;
            var12 = var16[var11];
            var12 = var15.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var16[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.y2b7CA;
            var11 = var12.bind(var13)(var11);
            var2['text'] = var11;
            var11 = var10.newBadge;
            var2['textStyle'] = var11;
            var6 = var9.bind(var4)(var3, var2);
case 21:
            var9 = _closure1_slot9;
            var3 = _closure1_slot4;
            var2 = {};
            var10 = var10.labelRow;
            var2['style'] = var10;
            var13 = _closure1_slot8;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var11 = 12;
            var11 = var10[var11];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var15 = 'text-md/normal';
            var11['variant'] = var15;
            var14 = var14.title;
            var11['children'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var11[1] = var6;
            var2['children'] = var11;
            var9 = var9.bind(var4)(var3, var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var1 = 13;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1['label'] = var9;
            var1['selected'] = var8;
            var1['leading'] = var7;
            var1['trailing'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
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
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'fontSize': 24, 'lineHeight': 24, 'paddingTop': 5};
    var4['optionTextEmoji'] = var9;
    var9 = {'height': 24, 'width': 24};
    var4['optionImageEmoji'] = var9;
    var9 = {};
    var10 = 'bold';
    var9['fontWeight'] = var10;
    var4['newBadge'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'space-between', 'alignItems': 'center'};
    var4['labelRow'] = var9;
    var9 = {'marginTop': 16, 'marginHorizontal': 16};
    var4['closeButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/DropdownOptionsActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function DropdownOptionsActionSheet(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var2 = var1.promptId;
            var _closure2_slot1 = var2;
            var2 = var1.canBeNew;
            var _closure2_slot2 = var2;
            var1 = var1.onSelect;
            var _closure2_slot3 = var1;
            var1 = _closure1_slot10;
            var5 = undefined;
            var13 = var1.bind(var5)();
            var2 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.bind(var5)();
            var11 = var1.bottom;
            var3 = _closure1_slot0;
            var2 = 7;
            var1 = var4[var2];
            var9 = var3.bind(var5)(var1);
            var8 = var9.useStateFromStores;
            var1 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var1;
            var6 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getOnboardingPrompt;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var20 = var8.bind(var9)(var7, var6);
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useStateFromStoresArray;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var4 = _closure1_slot6;
                var3 = var4.getOnboardingResponsesForPrompt;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var _closure2_slot4 = var1;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.hideActionSheet;
                var2 = var2.bind(var3)();
                return var1;
            };
            var1 = new Array(0);
            var15 = var3.bind(var4)(var2, var1);
            var1 = null;
            if(!(var1 != var20)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var4 = _closure1_slot8;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var2 = 16;
            var2 = var18[var2];
            var2 = var17.bind(var5)(var2);
            var3 = var2.BottomSheetTitleHeader;
            var2 = {};
            var14 = 11;
            var6 = var18[var14];
            var6 = var17.bind(var5)(var6);
            var8 = var6.intl;
            var7 = var8.string;
            var6 = var18[var14];
            var6 = var17.bind(var5)(var6);
            var6 = var6.t;
            var6 = var6.E2ICbG;
            var6 = var7.bind(var8)(var6);
            var2['title'] = var6;
            var6 = var4.bind(var5)(var3, var2);
            var4 = _closure1_slot8;
            var2 = 17;
            var2 = var18[var2];
            var2 = var17.bind(var5)(var2);
            var3 = var2.BottomSheet;
            var2 = {};
            var7 = true;
            var2['scrollable'] = var7;
            var2['header'] = var6;
            var8 = _closure1_slot9;
            var6 = 18;
            var6 = var18[var6];
            var6 = var17.bind(var5)(var6);
            var7 = var6.BottomSheetScrollView;
            var6 = {};
            var9 = {};
            var9['paddingBottom'] = var11;
            var6['contentContainerStyle'] = var9;
            var16 = _closure1_slot8;
            var11 = _closure1_slot1;
            var9 = 19;
            var9 = var18[var9];
            var12 = var11.bind(var5)(var9);
            var9 = {};
            var21 = 'radiogroup';
            var9['accessibilityRole'] = var21;
            var21 = var18[var14];
            var21 = var17.bind(var5)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var18[var14];
            var21 = var17.bind(var5)(var21);
            var21 = var21.t;
            var21 = var21.E2ICbG;
            var21 = var22.bind(var23)(var21);
            var9['accessibilityLabel'] = var21;
            var21 = var20.options;
            var20 = var21.map;
            var19 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot8;
                var4 = _closure1_slot11;
                var3 = {};
                var3['option'] = var1;
                var6 = _closure2_slot4;
                var3['responses'] = var6;
                var6 = _closure2_slot3;
                var3['onSelect'] = var6;
                var6 = global;
                var7 = var6.Boolean;
                var6 = _closure2_slot2;
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var3['canBeNew'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var19 = var20.bind(var21)(var19);
            var9['children'] = var19;
            var12 = var16.bind(var5)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot8;
            var10 = 20;
            var10 = var18[var10];
            var11 = var11.bind(var5)(var10);
            var10 = {};
            var10['onPress'] = var15;
            var15 = var18[var14];
            var15 = var17.bind(var5)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var5)(var14);
            var14 = var14.t;
            var14 = var14.cpT0Cg;
            var14 = var15.bind(var16)(var14);
            var10['text'] = var14;
            var13 = var13.closeButton;
            var10['style'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 24:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
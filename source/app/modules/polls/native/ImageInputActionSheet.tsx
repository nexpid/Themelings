// app/modules/polls/native/ImageInputActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.POLL_CREATION_IMAGE_INPUT_ACTION_SHEET_KEY;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'marginHorizontal': 24};
    var4['emojiContainer'] = var9;
    var9 = {};
    var10 = 12;
    var9['marginRight'] = var10;
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['emojiIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/ImageInputActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ImageInputAnswerActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var6 = var1.channelId;
            var _closure2_slot0 = var6;
            var2 = var1.index;
            var _closure2_slot1 = var2;
            var18 = var1.answer;
            var _closure2_slot2 = var18;
            var2 = var1.onSaveAltText;
            var _closure2_slot3 = var2;
            var2 = var1.onRemoveAnswerImage;
            var _closure2_slot4 = var2;
            var1 = var1.openExpressionPicker;
            var _closure2_slot5 = var1;
            var4 = undefined;
            var _closure2_slot6 = var4;
            var1 = _closure1_slot8;
            var16 = var1.bind(var4)();
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var27 = var18.localCreationAnswerId;
            var26 = var18.image;
            var1 = 40;
            var29 = undefined;
            var28 = var6;
            var25 = var1;
            var24 = var1;
            var1 = var29[var5](var28, var27, var26, var25, var24, var23);
            var11 = var1.renderImage;
            var15 = var1.upload;
            var10 = null;
            var13 = var10 != var15;
            if(var13) { _fun0001_ip = 176; continue _fun0001 }
 151:
            var2 = var18.image;
            var3 = var10 == var2;
            var1 = undefined;
            if(var3) { _fun0001_ip = 172; continue _fun0001 }
 166:
            var1 = var2.emoji;
 172:
            var13 = var10 != var1;
 176:
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var3 = var5[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var3);
                var3 = var4.dismissKeyboard;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 8;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.hideActionSheet;
                var2 = _closure1_slot5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            _closure2_slot6 = var1;
            var3 = _closure1_slot7;
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 9;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.ActionSheet;
            var1 = {};
            var5 = true;
            var1['startExpanded'] = var5;
            var6 = var13;
            if(!var6) { _fun0001_ip = 429; continue _fun0001 }
 254:
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var5 = {};
            var9 = var16.emojiContainer;
            var5['style'] = var9;
            var17 = _closure1_slot6;
            var9 = {};
            var16 = var16.emojiIcon;
            var9['style'] = var16;
            var9['children'] = var11;
            var11 = var17.bind(var4)(var7, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 10;
            var11 = var19[var11];
            var11 = var16.bind(var4)(var11);
            var16 = var11.Text;
            var11 = {'variant': 'text-md/bold', 'color': 'header-primary'};
            var18 = var18.image;
            var19 = var10 == var18;
            var20 = undefined;
            if(var19) { _fun0001_ip = 382; continue _fun0001 }
 362:
            var18 = var18.emoji;
            var19 = var10 == var18;
            var20 = undefined;
            if(var19) { _fun0001_ip = 382; continue _fun0001 }
 377:
            var20 = var18.name;
 382:
            var18 = global;
            var18 = var18.HermesInternal;
            var19 = var18.concat;
            var18 = ':';
            var18 = var19.bind(var18)(var20, var18);
            var11['children'] = var18;
            var11 = var17.bind(var4)(var16, var11);
            var9[1] = var11;
            var5['children'] = var9;
            var6 = var8.bind(var4)(var7, var5);
 429:
            var5 = new Array(3);
            var5[0] = var6;
            var17 = _closure1_slot6;
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var6 = 11;
            var6 = var9[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var8 = 21;
            var6['size'] = var8;
            var6 = var17.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot7;
            var16 = _closure1_slot0;
            var11 = 12;
            var6 = var9[var11];
            var6 = var16.bind(var4)(var6);
            var6 = var6.ActionSheetRow;
            var7 = var6.Group;
            var6 = {};
            var18 = false;
            var6['hasIcons'] = var18;
            var9 = var9[var11];
            var9 = var16.bind(var4)(var9);
            var16 = var9.ActionSheetRow;
            var9 = {};
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var19 = 13;
            var21 = var18[var19];
            var21 = var20.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var18 = var18[var19];
            var18 = var20.bind(var4)(var18);
            var20 = var18.t;
            if(var13) { _fun0001_ip = 600; continue _fun0001 }
 585:
            var18 = var20.dzcU1d;
            var18 = var21.bind(var22)(var18);
            _fun0001_ip = 613; continue _fun0001;
 600:
            var20 = var20.CZeRhY;
            var18 = var21.bind(var22)(var20);
 613:
            var9['label'] = var18;
            var18 = function onPress() {
                var3 = _closure2_slot6;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var2 = _closure2_slot5;
                var2 = var2.bind(var1)();
                return var1;
            };
            var9['onPress'] = var18;
            var16 = var17.bind(var4)(var16, var9);
            var9 = new Array(3);
            var9[0] = var16;
            var16 = var10 != var15;
            var15 = null;
            if(!var16) { _fun0001_ip = 747; continue _fun0001 }
 651:
            var18 = _closure1_slot6;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = var20[var11];
            var16 = var23.bind(var4)(var16);
            var17 = var16.ActionSheetRow;
            var16 = {};
            var21 = var20[var19];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var20[var19];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.w7x2t7;
            var20 = var21.bind(var22)(var20);
            var16['label'] = var20;
            var20 = function onPress() {
                var2 = _closure2_slot6;
                var1 = undefined;
                var2 = var2.bind(var1)();
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 14;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.openEditPollCreationImageAltTextModal;
                var2 = {};
                var6 = _closure2_slot0;
                var2['channelId'] = var6;
                var6 = _closure2_slot2;
                var2['answer'] = var6;
                var6 = _closure2_slot1;
                var2['index'] = var6;
                var5 = _closure2_slot3;
                var2['onSave'] = var5;
                var5 = 40;
                var2['imageSize'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var16['onPress'] = var20;
            var15 = var18.bind(var4)(var17, var16);
 747:
            var9[1] = var15;
            var10 = null;
            if(!var13) { _fun0001_ip = 852; continue _fun0001 }
 756:
            var13 = _closure1_slot6;
            var18 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = var15[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.ActionSheetRow;
            var11 = {};
            var16 = var15[var19];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var15[var19];
            var15 = var18.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.IhMxgo;
            var15 = var16.bind(var17)(var15);
            var11['label'] = var15;
            var14 = function onPress() {
                var4 = _closure2_slot4;
                var3 = _closure2_slot1;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var2 = _closure2_slot6;
                var2 = var2.bind(var1)();
                return var1;
            };
            var11['onPress'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 852:
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
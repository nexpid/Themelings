// app/modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
        var5 = require;
        var11 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
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
        var4 = var6[var1];
        var1 = undefined;
        var4 = var11.bind(var1)(var4);
        var _closure1_slot3 = var4;
        var4 = 1;
        var4 = var6[var4];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot4 = var4;
        var4 = 2;
        var7 = var6[var4];
        var4 = metroImportAll;
        var4 = var4.bind(var1)(var7);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot6 = var4;
        var13 = 4;
        var4 = var6[var13];
        var4 = var11.bind(var1)(var4);
        var _closure1_slot7 = var4;
        var4 = 5;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.AnalyticEvents;
        var _closure1_slot8 = var4;
        var4 = 6;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.ContentDismissActionType;
        var _closure1_slot9 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.EMOJI_URL_BASE_SIZE;
        var _closure1_slot10 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var7 = var4.jsx;
        var _closure1_slot11 = var7;
        var4 = var4.jsxs;
        var _closure1_slot12 = var4;
        var4 = 9;
        var4 = var6[var4];
        var8 = var5.bind(var1)(var4);
        var7 = var8.createStyles;
        var4 = {};
        var12 = 48;
        var9 = {'width': 48, 'height': 48};
        var4['emoji'] = var9;
        var9 = {'width': 48, 'height': 48};
        var4['selectedCustomEmoji'] = var9;
        var9 = {};
        var14 = 10;
        var10 = var6[var14];
        var15 = var5.bind(var1)(var10);
        var10 = var15.isIOS;
        var15 = var10.bind(var15)();
        var10 = 36;
        if(!var15) { _fun0001_ip = 335; continue _fun0001 }
 332:
        var10 = var12;
 335:
        var9['fontSize'] = var10;
        var10 = var6[var14];
        var12 = var5.bind(var1)(var10);
        var10 = var12.isIOS;
        var12 = var10.bind(var12)();
        var10 = undefined;
        if(!var12) { _fun0001_ip = 367; continue _fun0001 }
 364:
        var10 = 56;
 367:
        var9['lineHeight'] = var10;
        var12 = 'center';
        var9['textAlign'] = var12;
        var4['selectedTextEmoji'] = var9;
        var9 = {};
        var10 = 11;
        var15 = var6[var10];
        var15 = var11.bind(var1)(var15);
        var15 = var15.spacing;
        var15 = var15.PX_16;
        var9['marginLeft'] = var15;
        var15 = 40;
        var9['fontSize'] = var15;
        var14 = var6[var14];
        var15 = var5.bind(var1)(var14);
        var14 = var15.isIOS;
        var15 = var14.bind(var15)();
        var14 = undefined;
        if(!var15) { _fun0001_ip = 449; continue _fun0001 }
 446:
        var14 = 56;
 449:
        var9['lineHeight'] = var14;
        var4['selectedEmojiText'] = var9;
        var9 = {'flexDirection': 'column', 'alignItems': 'center'};
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_4;
        var9['paddingHorizontal'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_32;
        var9['paddingTop'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.spacing;
        var14 = var14.PX_12;
        var9['paddingBottom'] = var14;
        var4['content'] = var9;
        var9 = {};
        var14 = 'row';
        var9['flexDirection'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.CARD_PRIMARY_BG;
        var9['backgroundColor'] = var14;
        var14 = var6[var10];
        var14 = var11.bind(var1)(var14);
        var14 = var14.colors;
        var14 = var14.BORDER_STRONG;
        var9['borderColor'] = var14;
        var9['borderWidth'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_8;
        var9['paddingVertical'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_16;
        var9['paddingHorizontal'] = var13;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.radii;
        var13 = var13.xl;
        var9['borderRadius'] = var13;
        var9['justifyContent'] = var12;
        var9['alignItems'] = var12;
        var13 = var6[var10];
        var13 = var11.bind(var1)(var13);
        var13 = var13.spacing;
        var13 = var13.PX_24;
        var9['marginBottom'] = var13;
        var4['emojiContainer'] = var9;
        var9 = {};
        var9['textAlign'] = var12;
        var4['alignCenter'] = var9;
        var9 = {};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_24;
        var9['marginVertical'] = var12;
        var4['emojiSelectRow'] = var9;
        var9 = {'marginBottom': null, 'flexDirection': 'row', 'alignItems': 'center'};
        var12 = var6[var10];
        var12 = var11.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_8;
        var9['marginBottom'] = var12;
        var10 = var6[var10];
        var10 = var11.bind(var1)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var9['gap'] = var10;
        var4['header'] = var9;
        var4 = var7.bind(var8)(var4);
        var _closure1_slot13 = var4;
        var4 = 27;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/double_tap_to_react/native/DoubleTapToReactActionSheet.tsx';
        var4 = var5.bind(var6)(var4);
        var2 = function DoubleTapToReactActionSheet(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var17 = var2.emoji;
                var7 = var2.markAsDismissed;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot13;
                var4 = undefined;
                var20 = var2.bind(var4)();
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var6 = var2.bind(var5)(var17);
                var3 = _closure1_slot4;
                var2 = 2;
                var3 = var3.bind(var4)(var6, var2);
                var2 = 0;
                var16 = var3[var2];
                var _closure2_slot1 = var16;
                var2 = 1;
                var2 = var3[var2];
                var _closure2_slot2 = var2;
                var3 = var5.useRef;
                var2 = true;
                var2 = var3.bind(var5)(var2);
                var _closure2_slot3 = var2;
                var6 = var5.useCallback;
                var3 = function(arg1, arg2) {
                    var4 = _closure2_slot2;
                    var1 = undefined;
                    var3 = arg1;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot3;
                    var2 = arg2;
                    var3['current'] = var2;
                    return var1;
                };
                var2 = new Array(0);
                var13 = var6.bind(var5)(var3, var2);
                var6 = var5.useMemo;
                var3 = new Array(1);
                var3[0] = var16;
                var2 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 12;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var3 = var1.DoubleTapReactionEmoji;
                        var1 = var3.getSetting;
                        var1 = var1.bind(var3)();
                        var7 = var1.emojiId;
                        var8 = var1.emojiName;
                        var1 = null;
                        if(!(var1 == var7)) { _fun0003_ip = 101; continue _fun0003 }
 59:
                        var3 = var1 != var8;
                        var5 = null;
                        if(!var3) { _fun0003_ip = 99; continue _fun0003 }
 68:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 13;
                        var3 = var9[var3];
                        var6 = var6.bind(var4)(var3);
                        var3 = var6.getByName;
                        var5 = var3.bind(var6)(var8);
 99:
                        _fun0003_ip = 116; continue _fun0003;
 101:
                        var6 = _closure1_slot7;
                        var3 = var6.getCustomEmojiById;
                        var5 = var3.bind(var6)(var7);
 116:
                        var1 = var1 == var5;
                        if(var1) { _fun0003_ip = 165; continue _fun0003 }
 123:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 14;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.areEmojisEqual;
                        var2 = _closure2_slot1;
                        var2 = var3.bind(var4)(var5, var2);
                        var1 = !var2;
 165:
                        return var1;
                    }
                };
                var8 = var6.bind(var5)(var2, var3);
                var _closure2_slot4 = var8;
                var6 = var5.useMemo;
                var3 = new Array(1);
                var3[0] = var16;
                var2 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        var1 = _closure2_slot1;
                        var2 = var1.id;
                        var1 = null;
                        var2 = var1 != var2;
                        var1 = '';
                        if(!var2) { _fun0004_ip = 95; continue _fun0004 }
 25:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var2 = 15;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.getEmojiURL;
                        var2 = {};
                        var6 = _closure2_slot1;
                        var7 = var6.id;
                        var2['id'] = var7;
                        var6 = var6.animated;
                        var2['animated'] = var6;
                        var5 = _closure1_slot10;
                        var2['size'] = var5;
                        var1 = var3.bind(var4)(var2);
 95:
                        return var1;
                    }
                };
                var11 = var6.bind(var5)(var2, var3);
                var6 = var5.useCallback;
                var3 = _closure1_slot3;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0005_ip = 271; continue _fun0005 }
 10:
                            var2 = _closure2_slot4;
                            if(!var2) { _fun0005_ip = 112; continue _fun0005 }
 20:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 12;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var4.bind(var2)(var3);
                            var4 = var2.DoubleTapReactionEmoji;
                            var3 = var4.updateSetting;
                            var2 = {};
                            var5 = _closure2_slot1;
                            var6 = var5.id;
                            var2['emojiId'] = var6;
                            var6 = var5.name;
                            var2['emojiName'] = var6;
                            var5 = var5.animated;
                            var2['animated'] = var5;
                            var2 = var3.bind(var4)(var2);
                            SaveGenerator(address=103);
 101:
                            return var2;
 103:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                            if(var3) { _fun0005_ip = 268; continue _fun0005 }
 112:
                            var12 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 16;
                            var5 = var6[var3];
                            var3 = undefined;
                            var10 = var12.bind(var3)(var5);
                            var9 = var10.track;
                            var5 = _closure1_slot8;
                            var8 = var5.DOUBLE_TAP_REACT_EMOJI_UPDATED;
                            var5 = {};
                            var7 = _closure2_slot1;
                            var13 = var7.id;
                            var5['emoji_id'] = var13;
                            var13 = var7.name;
                            var5['emoji_name'] = var13;
                            var13 = var7.animated;
                            var5['emoji_animated'] = var13;
                            var11 = _closure2_slot3;
                            var11 = var11.current;
                            var5['recommended'] = var11;
                            var11 = 17;
                            var11 = var6[var11];
                            var11 = var12.bind(var3)(var11);
                            var11 = var11.DOUBLE_TAP_TO_REACT_ACTION_SHEET;
                            var5['location'] = var11;
                            var5 = var9.bind(var10)(var8, var5);
                            var5 = _closure1_slot0;
                            var4 = 18;
                            var4 = var6[var4];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.showDoubleTapEmojiUpdatedToast;
                            var4 = {};
                            var4['emoji'] = var7;
                            var4 = var5.bind(var6)(var4);
                            return var3;
 268:
                            return var2;
 271:
                            return var1;
                        }
                    };
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = new Array(2);
                var2[0] = var8;
                var2[1] = var16;
                var6 = var6.bind(var5)(var3, var2);
                var _closure2_slot5 = var6;
                var8 = var5.useCallback;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var4 = _closure2_slot0;
                    var3 = _closure1_slot9;
                    var3 = var3.TAKE_ACTION;
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 19;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.hideActionSheet;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                var12 = var8.bind(var5)(var2, var3);
                var3 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var6;
                var1 = function() {
                    var3 = _closure2_slot5;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot9;
                    var2 = var2.USER_DISMISS;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var5 = var3.bind(var5)(var1, var2);
                var3 = _closure1_slot11;
                var2 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 20;
                var1 = var15[var1];
                var1 = var2.bind(var4)(var1);
                var2 = var1.ActionSheet;
                var1 = {};
                var1['onDismiss'] = var5;
                var7 = _closure1_slot12;
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var20.content;
                var5['style'] = var8;
                var8 = {};
                var9 = var20.emojiContainer;
                var8['style'] = var9;
                var10 = _closure1_slot1;
                var9 = 21;
                var9 = var15[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var15 = var20.emoji;
                var9['style'] = var15;
                var15 = var20.selectedCustomEmoji;
                var9['fastImageStyle'] = var15;
                var15 = var20.selectedTextEmoji;
                var9['textEmojiStyle'] = var15;
                var18 = var16.id;
                var15 = null;
                var18 = var15 == var18;
                var15 = '';
                if(!var18) { _fun0002_ip = 420; continue _fun0002 }
 415:
                var15 = var16.surrogates;
 420:
                var9['name'] = var15;
                var9['src'] = var11;
                var9 = var3.bind(var4)(var10, var9);
                var10 = new Array(2);
                var10[0] = var9;
                var11 = _closure1_slot11;
                var15 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = 22;
                var18 = var19[var9];
                var18 = var15.bind(var4)(var18);
                var21 = var18.Text;
                var18 = {'variant': 'text-lg/semibold', 'style': null, 'color': 'interactive-normal', 'children': '1'};
                var22 = var20.selectedEmojiText;
                var18['style'] = var22;
                var18 = var11.bind(var4)(var21, var18);
                var10[1] = var18;
                var8['children'] = var10;
                var10 = var7.bind(var4)(var6, var8);
                var8 = new Array(5);
                var8[0] = var10;
                var22 = _closure1_slot12;
                var21 = _closure1_slot6;
                var10 = {};
                var18 = var20.header;
                var10['style'] = var18;
                var18 = var19[var9];
                var18 = var15.bind(var4)(var18);
                var24 = var18.Text;
                var23 = {'style': null, 'variant': 'text-lg/bold', 'color': 'header-primary'};
                var18 = var20.alignCenter;
                var23['style'] = var18;
                var18 = 23;
                var25 = var19[var18];
                var25 = var15.bind(var4)(var25);
                var27 = var25.intl;
                var26 = var27.string;
                var25 = var19[var18];
                var25 = var15.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25.F6lRAA;
                var25 = var26.bind(var27)(var25);
                var23['children'] = var25;
                var24 = var11.bind(var4)(var24, var23);
                var23 = new Array(2);
                var23[0] = var24;
                var24 = 24;
                var24 = var19[var24];
                var24 = var15.bind(var4)(var24);
                var25 = var24.NewBadge;
                var24 = {};
                var24 = var11.bind(var4)(var25, var24);
                var23[1] = var24;
                var10['children'] = var23;
                var10 = var22.bind(var4)(var21, var10);
                var8[1] = var10;
                var9 = var19[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {'style': null, 'variant': 'text-md/medium', 'color': 'text-normal'};
                var21 = var20.alignCenter;
                var9['style'] = var21;
                var21 = var19[var18];
                var21 = var15.bind(var4)(var21);
                var24 = var21.intl;
                var23 = var24.format;
                var21 = var19[var18];
                var21 = var15.bind(var4)(var21);
                var21 = var21.t;
                var22 = var21.bp8vRE;
                var21 = {};
                var25 = var16.name;
                var21['emojiName'] = var25;
                var21 = var23.bind(var24)(var22, var21);
                var9['children'] = var21;
                var9 = var11.bind(var4)(var10, var9);
                var8[2] = var9;
                var10 = _closure1_slot1;
                var9 = 25;
                var9 = var19[var9];
                var10 = var10.bind(var4)(var9);
                var9 = {};
                var20 = var20.emojiSelectRow;
                var9['style'] = var20;
                var9['selectedEmoji'] = var16;
                var9['onPressEmoji'] = var13;
                var9 = var11.bind(var4)(var10, var9);
                var8[3] = var9;
                var9 = 26;
                var9 = var19[var9];
                var9 = var15.bind(var4)(var9);
                var10 = var9.Button;
                var9 = {'grow': true, 'size': 'lg', 'text': null, 'variant': 'primary'};
                var13 = 14;
                var13 = var19[var13];
                var15 = var15.bind(var4)(var13);
                var13 = var15.areEmojisEqual;
                var13 = var13.bind(var15)(var16, var17);
                var17 = _closure1_slot0;
                var14 = _closure1_slot2;
                var15 = var14[var18];
                var15 = var17.bind(var4)(var15);
                var16 = var15.intl;
                var15 = var16.string;
                var14 = var14[var18];
                var14 = var17.bind(var4)(var14);
                var14 = var14.t;
                if(var13) { _fun0002_ip = 972; continue _fun0002 }
 957:
                var13 = var14.tdsiOz;
                var13 = var15.bind(var16)(var13);
                _fun0002_ip = 983; continue _fun0002;
 972:
                var14 = var14.NX+WJC;
                var13 = var15.bind(var16)(var14);
 983:
                var9['text'] = var13;
                var9['onPress'] = var12;
                var9 = var11.bind(var4)(var10, var9);
                var8[4] = var9;
                var5['children'] = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var3['default'] = var2;
        return var1;
    }
})();
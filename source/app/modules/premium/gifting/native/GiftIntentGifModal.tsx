// app/modules/premium/gifting/native/GiftIntentGifModal.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _sendGiftIntentGif() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    var2 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var14 = var2.channel;
                    var13 = var2.giftIntentType;
                    var12 = var2.text;
                    var4 = var2.gif;
                    var5 = undefined;
                    SaveGenerator(address=41);
case 4:
                    return var5;
case 5:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                    var3 = var12.trim;
                    var3 = var3.bind(var12)();
                    var6 = var3.length;
                    var3 = 0;
                    var10 = var6 > var3;
                    if(!var10) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                    var7 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var6 = 10;
                    var6 = var15[var6];
                    var11 = var7.bind(var5)(var6);
                    var9 = var11.sendMessage;
                    var8 = var14.id;
                    var6 = 11;
                    var6 = var15[var6];
                    var7 = var7.bind(var5)(var6);
                    var6 = var7.parse;
                    var18 = var6.bind(var7)(var14, var12);
                    var6 = {};
                    var3 = _closure1_slot9;
                    var3 = var3.GIFTING;
                    var6['location'] = var3;
                    var17 = true;
                    var20 = var11;
                    var19 = var8;
                    var16 = var6;
                    var3 = var20[var9](var19, var18, var17, var16, var15);
                    SaveGenerator(address=167);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                    if(var6) { _fun0001_ip = 12; continue _fun0001 }
case 8:
                    var8 = _closure1_slot1;
                    var15 = _closure1_slot2;
                    var7 = 10;
                    var7 = var15[var7];
                    var12 = var8.bind(var5)(var7);
                    var11 = var12.sendMessage;
                    var9 = var14.id;
                    var7 = 11;
                    var7 = var15[var7];
                    var8 = var8.bind(var5)(var7);
                    var7 = var8.parse;
                    var4 = var4.url;
                    var18 = var7.bind(var8)(var14, var4);
                    var7 = {};
                    var4 = _closure1_slot9;
                    var4 = var4.GIFTING;
                    var7['location'] = var4;
                    var17 = true;
                    var20 = var12;
                    var19 = var9;
                    var16 = var7;
                    var4 = var20[var11](var19, var18, var17, var16, var15);
                    SaveGenerator(address=274);
case 13:
                    return var4;
case 14:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
                    var11 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var7 = 12;
                    var7 = var12[var7];
                    var9 = var11.bind(var5)(var7);
                    var8 = var9.track;
                    var6 = _closure1_slot8;
                    var7 = var6.GIFT_INTENT_MESSAGE_SENT;
                    var6 = {};
                    var6['gift_intent_type'] = var13;
                    var6['is_custom_message'] = var10;
                    var10 = 13;
                    var10 = var12[var10];
                    var10 = var11.bind(var5)(var10);
                    var11 = var10.PREMIUM_GIFT_INTENT_CARD;
                    var10 = new Array(1);
                    var10[0] = var11;
                    var6['location_stack'] = var10;
                    var6 = var8.bind(var9)(var7, var6);
                    return var5;
case 15:
                    return var4;
case 12:
                    return var3;
case 6:
                    return var2;
case 2:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function GiftIntentGifModalBody(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var21 = var2.channelId;
            var _closure2_slot0 = var21;
            var6 = var2.giftIntentType;
            var _closure2_slot1 = var6;
            var13 = var2.onClose;
            var _closure2_slot2 = var13;
            var2 = _closure1_slot12;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var12 = _closure1_slot1;
            var23 = _closure1_slot2;
            var2 = 14;
            var2 = var23[var2];
            var2 = var12.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.insets;
            var25 = _closure1_slot0;
            var2 = 15;
            var2 = var23[var2];
            var8 = var25.bind(var4)(var2);
            var5 = var8.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var17 = var5.bind(var8)(var3, var2);
            var _closure2_slot3 = var17;
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var19 = null;
            var18 = var2.bind(var3)(var19);
            var _closure2_slot4 = var18;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var5 = var2.bind(var3)(var19);
            var3 = _closure1_slot3;
            var2 = 2;
            var3 = var3.bind(var4)(var5, var2);
            var2 = 0;
            var16 = var3[var2];
            var _closure2_slot5 = var16;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot6 = var2;
            var3 = _closure1_slot5;
            var2 = var3.useRef;
            var22 = var2.bind(var3)(var19);
            var8 = _closure1_slot5;
            var5 = var8.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var _closure3_slot0 = var1;
                var3 = _closure2_slot6;
                var1 = undefined;
                var2 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = arg1;
                        var1 = null;
                        var3 = var1 == var2;
                        var4 = undefined;
                        if(var3) { _fun0003_ip = 17; continue _fun0003 }
case 18:
                        var4 = var2.src;
case 17:
                        var3 = _closure3_slot0;
                        var3 = var3.src;
                        var1 = null;
                        if(!(var4 !== var3)) { _fun0003_ip = 19; continue _fun0003 }
case 4:
                        var1 = _closure3_slot0;
case 19:
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var15 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(4);
            var2[0] = var17;
            var2[1] = var6;
            var2[2] = var16;
            var2[3] = var13;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot3;
                    var3 = null;
                    var2 = var3 != var2;
                    if(!var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var4 = _closure2_slot5;
                    var2 = var3 != var4;
case 20:
                    if(!var2) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var4 = _closure2_slot5;
                    var4 = var4.url;
                    var5 = var4.length;
                    var4 = 0;
                    var2 = var4 !== var5;
case 22:
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
case 7:
                    var4 = {};
                    var2 = _closure2_slot3;
                    var4['channel'] = var2;
                    var2 = _closure2_slot1;
                    var4['giftIntentType'] = var2;
                    var2 = _closure2_slot4;
                    var7 = var2.current;
                    var6 = var3 == var7;
                    var2 = undefined;
                    var5 = undefined;
                    if(var6) { _fun0004_ip = 25; continue _fun0004 }
case 26:
                    var6 = var7.getText;
                    var5 = var6.bind(var7)();
case 25:
                    var6 = var3 != var5;
                    var3 = '';
                    if(!var6) { _fun0004_ip = 27; continue _fun0004 }
case 28:
                    var3 = var5;
case 27:
                    var4['text'] = var3;
                    var3 = _closure2_slot5;
                    var4['gif'] = var3;
                    var3 = function sendGiftIntentGif() {
                        var1 = undefined;
                        var4 = _closure1_slot14;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var3 = var3.bind(var2)(var4);
                    var3 = !var3;
                    var1 = _closure2_slot2;
                    var1 = var1.bind(var2)();
case 24:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot11;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var9.container;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = var7.bottom;
            var6['paddingBottom'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var9.messageContainer;
            var5['style'] = var8;
            var14 = _closure1_slot10;
            var8 = 16;
            var8 = var23[var8];
            var8 = var25.bind(var4)(var8);
            var10 = var8.TextArea;
            var8 = {};
            var8['ref'] = var18;
            var18 = 17;
            var24 = var23[var18];
            var24 = var25.bind(var4)(var24);
            var27 = var24.intl;
            var26 = var27.string;
            var24 = var23[var18];
            var24 = var25.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.ZV02cV;
            var24 = var26.bind(var27)(var24);
            var8['accessibilityLabel'] = var24;
            var24 = 18;
            var24 = var23[var24];
            var25 = var25.bind(var4)(var24);
            var24 = var25.getGiftIntentCustomMessagePlaceholder;
            var24 = var24.bind(var25)();
            var8['placeholder'] = var24;
            var8 = var14.bind(var4)(var10, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot10;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var9.pickerContainer;
            var6['style'] = var10;
            var14 = _closure1_slot10;
            var10 = 19;
            var10 = var23[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var10['bottomSheetRef'] = var22;
            var10['channelId'] = var21;
            var22 = var19 == var17;
            var21 = undefined;
            if(var22) { _fun0002_ip = 29; continue _fun0002 }
case 30:
            var21 = var17.guild_id;
case 29:
            var22 = var19 != var21;
            var17 = undefined;
            if(!var22) { _fun0002_ip = 31; continue _fun0002 }
case 32:
            var17 = var21;
case 31:
            var10['guildId'] = var17;
            var24 = _closure1_slot0;
            var22 = _closure1_slot2;
            var17 = var22[var18];
            var17 = var24.bind(var4)(var17);
            var23 = var17.intl;
            var21 = var23.string;
            var17 = var22[var18];
            var17 = var24.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.jrtJi4;
            var17 = var21.bind(var23)(var17);
            var10['initialQuery'] = var17;
            var17 = false;
            var10['inActionSheet'] = var17;
            var21 = _closure1_slot1;
            var17 = 9;
            var17 = var22[var17];
            var17 = var21.bind(var4)(var17);
            var17 = var17.space;
            var17 = var17.PX_16;
            var10['contentHorizontalPadding'] = var17;
            var21 = var19 == var16;
            var17 = undefined;
            if(var21) { _fun0002_ip = 33; continue _fun0002 }
case 34:
            var17 = var16.src;
case 33:
            var10['selectedGifSrc'] = var17;
            var17 = 'on-drag';
            var10['keyboardDismissMode'] = var17;
            var10['onPressGIF'] = var15;
            var10 = var14.bind(var4)(var12, var10);
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot11;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.footer;
            var6['style'] = var9;
            var15 = _closure1_slot10;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 20;
            var9 = var14[var10];
            var9 = var17.bind(var4)(var9);
            var12 = var9.Button;
            var9 = {'grow': true, 'variant': 'primary'};
            var21 = var14[var18];
            var21 = var17.bind(var4)(var21);
            var23 = var21.intl;
            var22 = var23.string;
            var21 = var14[var18];
            var21 = var17.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.TXNS7S;
            var21 = var22.bind(var23)(var21);
            var9['text'] = var21;
            var9['onPress'] = var20;
            var16 = var19 == var16;
            var9['disabled'] = var16;
            var12 = var15.bind(var4)(var12, var9);
            var9 = new Array(2);
            var9[0] = var12;
            var12 = _closure1_slot10;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {'grow': true, 'variant': 'secondary'};
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.ETE/oC;
            var14 = var15.bind(var16)(var14);
            var10['text'] = var14;
            var10['onPress'] = var13;
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var12 = 1;
    var4 = var6[var12];
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
    var4 = 4;
    var4 = var6[var4];
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
    var4 = var4.MessageSendLocation;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var12;
    var10 = 9;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9['backgroundColor'] = var13;
    var4['container'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.space;
    var13 = var13.PX_8;
    var9['paddingBottom'] = var13;
    var4['messageContainer'] = var9;
    var9 = {};
    var9['flex'] = var12;
    var4['pickerContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_8;
    var9['paddingTop'] = var10;
    var4['footer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var7 = 'GIFT_INTENT_GIF';
    var4['GIFT_INTENT_GIF'] = var7;
    var _closure1_slot13 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/GiftIntentGifModal.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftIntentGifModal(arg1) {
        var2 = arg1;
        var3 = var2.channelId;
        var _closure2_slot0 = var3;
        var3 = var2.giftIntentType;
        var _closure2_slot1 = var3;
        var2 = var2.onDismiss;
        var _closure2_slot2 = var2;
        var5 = _closure1_slot5;
        var4 = var5.useCallback;
        var3 = new Array(1);
        var3[0] = var2;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.pop;
                var2 = var2.bind(var3)();
                var4 = _closure2_slot2;
                var3 = null;
                if(!(var3 != var4)) { _fun0005_ip = 35; continue _fun0005 }
case 36:
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
case 35:
                return var1;
            }
        };
        var2 = var4.bind(var5)(var2, var3);
        var _closure2_slot3 = var2;
        var3 = _closure1_slot1;
        var7 = _closure1_slot2;
        var2 = 22;
        var2 = var7[var2];
        var4 = undefined;
        var2 = var3.bind(var4)(var2);
        var1 = function() {
            var1 = {};
            var2 = _closure1_slot13;
            var3 = var2.GIFT_INTENT_GIF;
            var2 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 17;
            var8 = var7[var4];
            var5 = undefined;
            var8 = var6.bind(var5)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var4 = var7[var4];
            var4 = var6.bind(var5)(var4);
            var4 = var4.t;
            var4 = var4.PQRuGc;
            var4 = var8.bind(var9)(var4);
            var2['title'] = var4;
            var4 = 23;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.getHeaderCloseButton;
            var4 = _closure2_slot3;
            var4 = var5.bind(var6)(var4);
            var2['headerLeft'] = var4;
            var4 = function render() {
                var4 = _closure1_slot10;
                var3 = _closure1_slot15;
                var2 = {};
                var5 = _closure2_slot0;
                var2['channelId'] = var5;
                var5 = _closure2_slot1;
                var2['giftIntentType'] = var5;
                var1 = _closure2_slot3;
                var2['onClose'] = var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var2['render'] = var4;
            var1[2] = var2;
            return var1;
        };
        var5 = var2.bind(var4)(var1);
        var3 = _closure1_slot10;
        var2 = _closure1_slot0;
        var1 = 24;
        var1 = var7[var1];
        var1 = var2.bind(var4)(var1);
        var2 = var1.Navigator;
        var1 = {};
        var6 = _closure1_slot13;
        var6 = var6.GIFT_INTENT_GIF;
        var1['initialRouteName'] = var6;
        var1['screens'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();
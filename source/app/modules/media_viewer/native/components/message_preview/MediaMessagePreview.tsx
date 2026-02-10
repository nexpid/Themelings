// app/modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function MeasureMessage(arg1) {
        var2 = arg1;
        var12 = var2.message;
        var _closure2_slot0 = var12;
        var9 = var2.onMeasure;
        var _closure2_slot1 = var9;
        var11 = var2.onMeasureTruncated;
        var _closure2_slot2 = var11;
        var14 = var2.disableReactionCreates;
        var _closure2_slot3 = var14;
        var6 = var2.showReplyButton;
        var _closure2_slot4 = var6;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 12;
        var2 = var10[var2];
        var4 = undefined;
        var2 = var7.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var3 = var2.height;
        var2 = 0.5;
        var13 = var2 * var3;
        var _closure2_slot5 = var13;
        var5 = _closure1_slot4;
        var3 = var5.useMemo;
        var2 = new Array(6);
        var2[0] = var14;
        var2[1] = var13;
        var2[2] = var12;
        var2[3] = var11;
        var2[4] = var9;
        var2[5] = var6;
        var1 = function() {
            var4 = function generateChatItemProps(arg1) {
                var1 = arg1;
                var _closure4_slot0 = var1;
                var1 = {};
                var3 = function onLayout(arg1) {
                    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                        var1 = global;
                        var5 = var1.Math;
                        var4 = var5.min;
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var1 = var1.layout;
                        var3 = var1.height;
                        var2 = _closure2_slot5;
                        var3 = var4.bind(var5)(var3, var2);
                        var2 = 0;
                        if(!(var2 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                        var2 = _closure4_slot0;
                        if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                        var4 = _closure2_slot1;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        _fun0001_ip = 2; continue _fun0001;
case 4:
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var1 = var2.bind(var1)(var3);
case 2:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['onLayout'] = var3;
                var2 = function modifyRow(arg1) {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        var3 = arg1;
                        var5 = _closure1_slot17;
                        var4 = _closure2_slot3;
                        var2 = _closure2_slot4;
                        var1 = undefined;
                        var2 = var5.bind(var1)(var3, var4, var2);
                        var2 = _closure4_slot0;
                        if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                        var2 = {'numberOfLines': 3, 'expandable': false, 'seeMoreLabel': ''};
                        var3['truncation'] = var2;
case 6:
                        return var1;
                    }
                };
                var1['modifyRow'] = var2;
                var3 = _closure1_slot16;
                var1['rowGenerator'] = var3;
                var3 = _closure2_slot0;
                var1['message'] = var3;
                var2 = _closure1_slot18;
                var2 = var2.dummyLayout;
                var1['style'] = var2;
                return var1;
            };
            var1 = {};
            var3 = undefined;
            var2 = false;
            var2 = var4.bind(var3)(var2);
            var1['full'] = var2;
            var2 = true;
            var2 = var4.bind(var3)(var2);
            var1['truncated'] = var2;
            return var1;
        };
        var9 = var3.bind(var5)(var1, var2);
        var3 = _closure1_slot15;
        var2 = _closure1_slot14;
        var1 = {};
        var12 = _closure1_slot13;
        var6 = 13;
        var5 = var10[var6];
        var11 = var7.bind(var4)(var5);
        var5 = {};
        var15 = var9.full;
        var16 = var5;
        var13 = copyDataProperties(var16, var15);
        var11 = var12.bind(var4)(var11, var5);
        var5 = new Array(2);
        var5[0] = var11;
        var8 = _closure1_slot13;
        var6 = var10[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var15 = var9.truncated;
        var16 = var6;
        var9 = copyDataProperties(var16, var15);
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot21 = var1;
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
    var4 = var10.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.findNodeHandle;
    var _closure1_slot5 = var7;
    var8 = var4.StyleSheet;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var11 = var4.ThemeTypes;
    var _closure1_slot12 = var11;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot13 = var7;
    var7 = var4.Fragment;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var16 = var7;
    var4 = new var16[var4](var15);
    var9 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot16 = var9;
    var4 = function rowModifierShared(arg1, arg2, arg3) {
        var3 = arg1;
        var1 = arg2;
        var1 = !var1;
        var3['canAddNewReactions'] = var1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = var2.MessageContextType;
        var2 = var2.MEDIA_VIEWER;
        var3['contextType'] = var2;
        var2 = arg3;
        var3['showReplyButton'] = var2;
        return var1;
    };
    var _closure1_slot17 = var4;
    var7 = var9.setOptions;
    var4 = {'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInstanceEmbed': false, 'renderActivityInviteEmbed': false, 'renderComponents': false, 'renderEmbeds': false, 'ignoreMentioned': true, 'inlineAttachmentMedia': false, 'inlineEmbedMedia': false, 'renderReactions': true, 'renderAttachments': false, 'renderReplies': false, 'renderThreadEmbeds': false, 'renderPolls': false, 'renderForumPostActions': false, 'forcedTheme': null, 'forceHideSimpleEmbedContent': true};
    var11 = var11.DARK;
    var4['forcedTheme'] = var11;
    var4 = var7.bind(var9)(var4);
    var7 = var8.create;
    var4 = {};
    var9 = {'position': 'absolute', 'top': 0, 'left': 4294957297, 'bottom': 0, 'width': '100%', 'opacity': 0};
    var4['dummyLayout'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var4 = 14;
    var7 = var6[var4];
    var11 = var5.bind(var1)(var7);
    var8 = var11.createNativeStyleProperties;
    var7 = {};
    var9 = 15;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_SUBTLE;
    var7['reactionBackgroundColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var7['reactionBorderColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_TEXT_DEFAULT;
    var7['reactionTextColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_MUTED;
    var7['activeReactionBackgroundColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_500;
    var7['activeReactionBorderColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.BRAND_500;
    var7['activeReactionTextColor'] = var12;
    var7 = var8.bind(var11)(var7);
    var _closure1_slot19 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createNativeStyleProperties;
    var4 = {};
    var11 = var6[var9];
    var11 = var10.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.TEXT_MUTED;
    var4['editedColor'] = var11;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var4['seeMoreLabelColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot20 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/message_preview/MediaMessagePreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaMessagePreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var17 = var2.channelId;
            var _closure2_slot0 = var17;
            var4 = var2.messageId;
            var _closure2_slot1 = var4;
            var3 = var2.onClose;
            var _closure2_slot2 = var3;
            var30 = var2.onTapMessage;
            var _closure2_slot3 = var30;
            var13 = var2.onMeasureFullHeight;
            var12 = var2.onMeasureCollapsedHeight;
            var21 = var2.full;
            var _closure2_slot4 = var21;
            var1 = var2.canExpand;
            var _closure2_slot5 = var1;
            var1 = var2.setScrollViewIsAtTop;
            var _closure2_slot6 = var1;
            var1 = var2.flingUpRef;
            var _closure2_slot7 = var1;
            var10 = var2.flingDownRef;
            var _closure2_slot8 = var10;
            var23 = var2.animationDriver;
            var _closure2_slot9 = var23;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var35 = 16;
            var2 = var14[var35];
            var5 = undefined;
            var9 = var16.bind(var5)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var1 = undefined;
                    if(!var3) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var4 = _closure1_slot9;
                    var3 = var4.getChannel;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
case 8:
                    return var1;
                }
            };
            var2 = var7.bind(var9)(var6, var2);
            var _closure2_slot10 = var2;
            var7 = _closure1_slot1;
            var6 = 17;
            var6 = var14[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.bind(var5)(var2);
            var15 = var6.disableReactionCreates;
            var _closure2_slot11 = var15;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var26 = false;
            var6 = var6.bind(var7)(var26);
            var22 = _closure1_slot3;
            var19 = 2;
            var7 = var22.bind(var5)(var6, var19);
            var6 = 0;
            var20 = var7[var6];
            var18 = 1;
            var7 = var7[var18];
            var _closure2_slot12 = var7;
            var9 = _closure1_slot4;
            var7 = var9.useState;
            var7 = var7.bind(var9)(var26);
            var7 = var22.bind(var5)(var7, var19);
            var9 = var7[var6];
            var7 = var7[var18];
            var _closure2_slot13 = var7;
            var24 = _closure1_slot4;
            var11 = var24.useRef;
            var7 = null;
            var34 = var11.bind(var24)(var7);
            var _closure2_slot14 = var34;
            var24 = _closure1_slot4;
            var11 = var24.useState;
            var11 = var11.bind(var24)(var7);
            var11 = var22.bind(var5)(var11, var19);
            var33 = var11[var6];
            var _closure2_slot15 = var33;
            var11 = var11[var18];
            var _closure2_slot16 = var11;
            var11 = 18;
            var11 = var14[var11];
            var24 = var16.bind(var5)(var11);
            var11 = var24.useIsMediaViewerReplyActionEnabled;
            var11 = var11.bind(var24)();
            var _closure2_slot17 = var11;
            var29 = _closure1_slot4;
            var27 = var29.useEffect;
            var25 = function() {
                var3 = _closure2_slot16;
                var4 = _closure1_slot5;
                var1 = _closure2_slot14;
                var2 = var1.current;
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var24 = new Array(0);
            var24 = var27.bind(var29)(var25, var24);
            var27 = _closure1_slot19;
            var24 = _closure1_slot12;
            var25 = var24.MIDNIGHT;
            var29 = var27.bind(var5)(var25);
            var _closure2_slot18 = var29;
            var25 = _closure1_slot20;
            var24 = var24.MIDNIGHT;
            var24 = var25.bind(var5)(var24);
            var32 = var24.editedColor;
            var _closure2_slot19 = var32;
            var31 = var24.seeMoreLabelColor;
            var _closure2_slot20 = var31;
            var27 = _closure1_slot4;
            var25 = var27.useCallback;
            var24 = new Array(8);
            var24[0] = var33;
            var24[1] = var15;
            var24[2] = var32;
            var24[3] = var31;
            var24[4] = var29;
            var24[5] = var21;
            var24[6] = var23;
            var24[7] = var11;
            var23 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var7 = _closure1_slot17;
                    var2 = _closure2_slot11;
                    var6 = _closure2_slot17;
                    var1 = undefined;
                    var6 = var7.bind(var1)(var3, var2, var6);
                    var6 = _closure2_slot15;
                    var3['reactTag'] = var6;
                    var2 = !var2;
                    var3['canAddNewReactions'] = var2;
                    var2 = var3.message;
                    var2['feedbackColor'] = var1;
                    var6 = var3.message;
                    var2 = _closure2_slot19;
                    var6['editedColor'] = var2;
                    var2 = _closure2_slot18;
                    var3['reactionsTheme'] = var2;
                    var2 = _closure2_slot4;
                    if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var2 = {'numberOfLines': 3, 'expandable': true};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 19;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.7qbp3B;
                    var8 = var6.bind(var7)(var5);
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var7 = var6.concat;
                    var6 = ' ';
                    var6 = var7.bind(var6)(var8);
                    var2['seeMoreLabel'] = var6;
                    var6 = _closure2_slot20;
                    var2['seeMoreLabelColor'] = var6;
                    var7 = var5.Math;
                    var6 = var7.min;
                    var5 = _closure2_slot9;
                    var4 = var5.get;
                    var5 = var4.bind(var5)();
                    var4 = 0.25;
                    var5 = var4 * var5;
                    var4 = 0.1;
                    var4 = var6.bind(var7)(var5, var4);
                    var2['outAnimationDuration'] = var4;
                    var4 = 'fade';
                    var2['outAnimation'] = var4;
                    var3['truncation'] = var2;
case 10:
                    return var1;
                }
            };
            var24 = var25.bind(var27)(var23, var24);
            var14 = var14[var35];
            var27 = var16.bind(var5)(var14);
            var25 = var27.useStateFromStores;
            var14 = _closure1_slot8;
            var23 = new Array(4);
            var23[0] = var14;
            var14 = _closure1_slot10;
            var23[1] = var14;
            var14 = _closure1_slot11;
            var23[2] = var14;
            var14 = _closure1_slot7;
            var23[3] = var14;
            var16 = new Array(2);
            var16[0] = var17;
            var16[1] = var4;
            var14 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 != var1)) { _fun0006_ip = 12; continue _fun0006 }
case 13:
                    var1 = _closure2_slot1;
                    if(!(var4 == var1)) { _fun0006_ip = 14; continue _fun0006 }
case 12:
                    var1 = undefined;
                    return var1;
case 14:
                    var7 = _closure1_slot10;
                    var6 = var7.getMessage;
                    var5 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var6.bind(var7)(var5, var1);
                    if(!(var4 == var1)) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var7 = _closure1_slot11;
                    var6 = var7.getMessage;
                    var5 = _closure2_slot1;
                    var1 = var6.bind(var7)(var5);
case 15:
                    if(!(var4 == var1)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var8 = _closure1_slot7;
                    var7 = var8.getMessage;
                    var9 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var5 = 20;
                    var6 = var6[var5];
                    var5 = undefined;
                    var10 = var9.bind(var5)(var6);
                    var9 = var10.castMessageIdAsChannelId;
                    var6 = _closure2_slot1;
                    var6 = var9.bind(var10)(var6);
                    var6 = var7.bind(var8)(var6);
                    var7 = var4 == var6;
                    if(var7) { _fun0006_ip = 19; continue _fun0006 }
case 20:
                    var5 = var6.firstMessage;
case 19:
                    var1 = var5;
case 17:
                    if(!(var4 == var1)) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                    var4 = _closure1_slot8;
                    var3 = var4.getMessage;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 21:
                    return var1;
                }
            };
            var14 = var25.bind(var27)(var23, var14, var16);
            var _closure2_slot21 = var14;
            var23 = _closure1_slot4;
            var16 = var23.useState;
            var16 = var16.bind(var23)(var6);
            var16 = var22.bind(var5)(var16, var19);
            var6 = var16[var6];
            var _closure2_slot22 = var6;
            var16 = var16[var18];
            var _closure2_slot23 = var16;
            var22 = _closure1_slot4;
            var19 = var22.useCallback;
            var18 = function(arg1, arg2) {
                var3 = _closure2_slot23;
                var1 = undefined;
                var2 = arg2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var16 = new Array(0);
            var22 = var19.bind(var22)(var18, var16);
            var19 = _closure1_slot4;
            var18 = var19.useCallback;
            var16 = new Array(2);
            var16[0] = var21;
            var16[1] = var6;
            var6 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot12;
                    var5 = _closure2_slot22;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.height;
                    var2 = var5 > var2;
                    if(!var2) { _fun0007_ip = 23; continue _fun0007 }
case 24:
                    var2 = _closure2_slot4;
case 23:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var23 = var18.bind(var19)(var6, var16);
            var19 = _closure1_slot4;
            var18 = var19.useCallback;
            var16 = new Array(2);
            var16[0] = var14;
            var16[1] = var3;
            var6 = function(arg1) {
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var1 = 21;
                var2 = var6[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var5 = _closure1_slot0;
                var4 = 22;
                var4 = var6[var4];
                var6 = var5.bind(var1)(var4);
                var5 = var6.getNativeSyntheticEventData;
                var4 = arg1;
                var4 = var5.bind(var6)(var4);
                var4 = var4.channelId;
                var2['channelId'] = var4;
                var5 = _closure2_slot21;
                var2['message'] = var5;
                var4 = _closure2_slot2;
                var2['closeMediaModal'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var32 = var18.bind(var19)(var6, var16);
            var19 = _closure1_slot4;
            var18 = var19.useCallback;
            var16 = new Array(1);
            var16[0] = var14;
            var6 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var2 = arg1;
                    var1 = null;
                    if(!(var2 != var1)) { _fun0008_ip = 13; continue _fun0008 }
case 25:
                    var1 = undefined;
                    return var1;
case 13:
                    var3 = "Cannot destructure 'undefined' or 'null'.";
                    var4 = var2;
                    var1 = throwTypeError(var4, var3);
                    var1 = undefined;
                    throw var1;
                }
            };
            var29 = var18.bind(var19)(var6, var16);
            var18 = _closure1_slot4;
            var16 = var18.useCallback;
            var6 = new Array(3);
            var6[0] = var17;
            var6[1] = var14;
            var6[2] = var4;
            var4 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var10 = var1.reaction;
                    var7 = var1.isBurst;
                    var1 = _closure2_slot21;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var5 = _closure1_slot9;
                    var4 = var5.getChannel;
                    var3 = _closure2_slot0;
                    var5 = var4.bind(var5)(var3);
                    var3 = var6 != var5;
                    if(!var3) { _fun0009_ip = 28; continue _fun0009 }
case 29:
                    var4 = _closure2_slot1;
                    var3 = var6 != var4;
case 28:
                    if(!var3) { _fun0009_ip = 26; continue _fun0009 }
case 30:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 23;
                    var3 = var8[var3];
                    var9 = undefined;
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.handleAddOrRemoveReaction;
                    var2 = _closure2_slot1;
                    var8 = var6 != var10;
                    var6 = null;
                    if(!var8) { _fun0009_ip = 31; continue _fun0009 }
case 32:
                    var8 = {};
                    var16 = var8;
                    var15 = var10;
                    var11 = copyDataProperties(var16, var15);
                    var11 = var10.emoji;
                    var10 = 'emoji';
                    var8[var10] = var11;
                    var6 = var8;
case 31:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 24;
                    var1 = var10[var1];
                    var1 = var8.bind(var9)(var1);
                    var1 = var1.ReactionLocations;
                    var12 = var1.MOBILE_MEDIA_VIEWER;
                    var17 = var4;
                    var16 = var2;
                    var15 = var5;
                    var14 = var6;
                    var13 = var7;
                    var1 = var17[var3](var16, var15, var14, var13, var12, var11);
case 26:
                    var1 = undefined;
                    return var1;
                }
            };
            var31 = var16.bind(var18)(var4, var6);
            var18 = _closure1_slot4;
            var16 = var18.useCallback;
            var6 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = var1.url;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0010_ip = 33; continue _fun0010 }
case 34:
                    var2 = '';
                    var1 = var2 !== var4;
case 33:
                    if(!var1) { _fun0010_ip = 35; continue _fun0010 }
case 36:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 25;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['urlString'] = var4;
                    var1 = var2.bind(var3)(var1);
case 35:
                    var1 = undefined;
                    return var1;
                }
            };
            var4 = new Array(0);
            var33 = var16.bind(var18)(var6, var4);
            var16 = _closure1_slot4;
            var6 = var16.useCallback;
            var4 = new Array(3);
            var4[0] = var17;
            var4[1] = var14;
            var4[2] = var3;
            var3 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var2 = _closure2_slot2;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 26;
                    var4 = var8[var3];
                    var6 = var7.bind(var1)(var4);
                    var4 = var6.triggerHapticFeedback;
                    var3 = var8[var3];
                    var3 = var7.bind(var1)(var3);
                    var3 = var3.HapticFeedbackTypes;
                    var3 = var3.IMPACT_LIGHT;
                    var3 = var4.bind(var6)(var3);
                    var4 = _closure2_slot21;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 37; continue _fun0011 }
case 30:
                    var7 = _closure1_slot9;
                    var6 = var7.getChannel;
                    var4 = _closure2_slot0;
                    var4 = var6.bind(var7)(var4);
                    if(!(var3 != var4)) { _fun0011_ip = 37; continue _fun0011 }
case 38:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var2 = 27;
                    var2 = var6[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = {'message': null, 'channel': null, 'chatInputRef': null, 'actionSource': 'message_shortcut', 'invertible': true, 'scrollToMessage': true};
                    var5 = _closure2_slot21;
                    var2['message'] = var5;
                    var2['channel'] = var4;
                    var2['chatInputRef'] = var1;
                    var2 = var3.bind(var1)(var2);
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = function() {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 28;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.getBestActiveInputForChannelId;
                            var2 = _closure2_slot0;
                            var3 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var3)) { _fun0012_ip = 39; continue _fun0012 }
case 40:
                            var2 = var3.openSystemKeyboard;
                            var2 = var2.bind(var3)();
case 39:
                            return var1;
                        }
                    };
                    var2 = 300;
                    var2 = var4.bind(var1)(var3, var2);
case 37:
                    return var1;
                }
            };
            var27 = var6.bind(var16)(var3, var4);
            var6 = _closure1_slot4;
            var4 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var1;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.Gesture;
                var1 = var2.Native;
                var4 = var1.bind(var2)();
                var3 = var4.requireExternalGestureToFail;
                var2 = _closure2_slot7;
                var1 = _closure2_slot8;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var17 = var4.bind(var6)(var1, var3);
            var3 = var7 == var14;
            var1 = null;
            if(var3) { _fun0003_ip = 41; continue _fun0003 }
case 42:
            var2 = var7 == var2;
            var1 = null;
            if(var2) { _fun0003_ip = 41; continue _fun0003 }
case 43:
            var4 = _closure1_slot15;
            var3 = _closure1_slot14;
            var2 = {};
            var16 = _closure1_slot13;
            var10 = _closure1_slot0;
            var25 = _closure1_slot2;
            var6 = 29;
            var6 = var25[var6];
            var6 = var10.bind(var5)(var6);
            var10 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var17;
            var19 = _closure1_slot15;
            var18 = _closure1_slot6;
            var17 = {};
            var17['scrollEventThrottle'] = var35;
            var35 = function onScroll(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var1 = var2.contentOffset;
                    var6 = var2.velocity;
                    var3 = _closure2_slot6;
                    var1 = var1.y;
                    var4 = 0;
                    var2 = var4 === var1;
                    if(!var2) { _fun0013_ip = 44; continue _fun0013 }
case 45:
                    var1 = null;
                    var7 = var1 == var6;
                    var5 = undefined;
                    if(var7) { _fun0013_ip = 46; continue _fun0013 }
case 47:
                    var5 = var6.y;
case 46:
                    var6 = var1 != var5;
                    var1 = 0;
                    if(!var6) { _fun0013_ip = 48; continue _fun0013 }
case 49:
                    var1 = var5;
case 48:
                    var2 = var4 === var1;
case 44:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var17['onScroll'] = var35;
            var17['onLayout'] = var23;
            var17['onContentSizeChange'] = var22;
            var17['showsVerticalScrollIndicator'] = var21;
            var17['bounces'] = var20;
            var23 = _closure1_slot13;
            var22 = _closure1_slot1;
            var20 = 30;
            var20 = var25[var20];
            var21 = var22.bind(var5)(var20);
            var20 = {};
            var20['ref'] = var34;
            var20['onLongPressLink'] = var33;
            var20['onLongPressMessage'] = var32;
            var20['onTapMessage'] = var30;
            var20['onTapReaction'] = var31;
            var20['onTapSeeMore'] = var30;
            var20['onTapTag'] = var29;
            var28 = function onTapLink(arg1) {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0014_ip = 50; continue _fun0014 }
case 51:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0014_ip = 50; continue _fun0014 }
case 52:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0014_ip = 53; continue _fun0014;
case 50:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 31;
                    var1 = var3[var1];
                    var5 = undefined;
                    var3 = var2.bind(var5)(var1);
                    var2 = var3.handleMessagesTapLink;
                    var1 = {};
                    var6 = true;
                    var1['allowWithinModal'] = var6;
                    var1['chatInputRef'] = var5;
                    var5 = function handleTransitionToThread(arg1, arg2, arg3) {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                            var4 = _closure1_slot9;
                            var3 = var4.getChannel;
                            var2 = arg2;
                            var4 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var4)) { _fun0015_ip = 54; continue _fun0015 }
case 55:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 32;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.transitionToThread;
                            var1 = {};
                            var5 = arg3;
                            var1['source'] = var5;
                            var5 = false;
                            var1['navigationReplace'] = var5;
                            var1 = var2.bind(var3)(var4, var1);
case 54:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['handleTransitionToThread'] = var5;
                    var5 = _closure2_slot21;
                    var1['message'] = var5;
                    var5 = _closure2_slot10;
                    var1['messageChannel'] = var5;
                    var4 = _closure2_slot0;
                    var1['selectedChannelId'] = var4;
                    var4 = arg1;
                    var4 = var4.nativeEvent;
                    var1['tapLinkData'] = var4;
                    var1 = var2.bind(var3)(var1);
case 53:
                    var1 = undefined;
                    return var1;
                }
            };
            var20['onTapLink'] = var28;
            var20['onInitiateReply'] = var27;
            var20['inverted'] = var26;
            var21 = var23.bind(var5)(var21, var20);
            var20 = new Array(2);
            var20[0] = var21;
            var23 = _closure1_slot13;
            var21 = 13;
            var21 = var25[var21];
            var22 = var22.bind(var5)(var21);
            var21 = {};
            var25 = _closure1_slot16;
            var21['rowGenerator'] = var25;
            var21['modifyRow'] = var24;
            var21['message'] = var14;
            var21 = var23.bind(var5)(var22, var21);
            var20[1] = var21;
            var17['children'] = var20;
            var17 = var19.bind(var5)(var18, var17);
            var6['children'] = var17;
            var10 = var16.bind(var5)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            var7 = null;
            if(!var9) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var10 = _closure1_slot13;
            var9 = _closure1_slot21;
            var8 = {};
            var8['disableReactionCreates'] = var15;
            var8['message'] = var14;
            var8['onMeasure'] = var13;
            var8['onMeasureTruncated'] = var12;
            var8['showReplyButton'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 56:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 41:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
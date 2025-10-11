// app/modules/media_viewer/native/components/MediaMessagePreview.tsx
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
        var11 = var2.message;
        var _closure2_slot0 = var11;
        var6 = var2.onMeasure;
        var _closure2_slot1 = var6;
        var9 = var2.onMeasureTruncated;
        var _closure2_slot2 = var9;
        var13 = var2.disableReactionCreates;
        var _closure2_slot3 = var13;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var2 = 14;
        var2 = var10[var2];
        var4 = undefined;
        var2 = var7.bind(var4)(var2);
        var2 = var2.bind(var4)();
        var3 = var2.height;
        var2 = 0.5;
        var12 = var2 * var3;
        var _closure2_slot4 = var12;
        var5 = _closure1_slot4;
        var3 = var5.useMemo;
        var2 = new Array(5);
        var2[0] = var13;
        var2[1] = var12;
        var2[2] = var11;
        var2[3] = var9;
        var2[4] = var6;
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
                        var2 = _closure2_slot4;
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
                        var4 = _closure1_slot19;
                        var2 = _closure2_slot3;
                        var1 = undefined;
                        var2 = var4.bind(var1)(var3, var2);
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
                var3 = _closure1_slot18;
                var1['rowGenerator'] = var3;
                var3 = _closure2_slot0;
                var1['message'] = var3;
                var2 = _closure1_slot20;
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
        var3 = _closure1_slot17;
        var2 = _closure1_slot16;
        var1 = {};
        var12 = _closure1_slot15;
        var6 = 15;
        var5 = var10[var6];
        var11 = var7.bind(var4)(var5);
        var5 = {};
        var14 = var9.full;
        var15 = var5;
        var13 = copyDataProperties(var15, var14);
        var11 = var12.bind(var4)(var11, var5);
        var5 = new Array(2);
        var5[0] = var11;
        var8 = _closure1_slot15;
        var6 = var10[var6];
        var7 = var7.bind(var4)(var6);
        var6 = {};
        var14 = var9.truncated;
        var15 = var6;
        var9 = copyDataProperties(var15, var14);
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot23 = var1;
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
    var4 = var4.MessageTagTypes;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageFrameTypes;
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot15 = var7;
    var7 = var4.Fragment;
    var _closure1_slot16 = var7;
    var4 = var4.jsxs;
    var _closure1_slot17 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var10.bind(var1)(var4);
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var16 = var7;
    var4 = new var16[var4](var15);
    var9 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot18 = var9;
    var4 = function rowModifierShared(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var1 = arg2;
            var1 = !var1;
            var2['canAddNewReactions'] = var1;
            var1 = var2.message;
            var1 = var1.reactions;
            var3 = var1.length;
            var1 = 0;
            if(!(var1 === var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var3 = var7[var1];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ujGN9f;
            var1 = var3.bind(var4)(var1);
            var2['addReactionLabel'] = var1;
case 8:
            var1 = {};
            var3 = _closure1_slot14;
            var3 = var3.MEDIA_VIEWER_MESSAGE_FRAME;
            var1['type'] = var3;
            var2['messageFrame'] = var1;
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var4;
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
    var _closure1_slot20 = var4;
    var4 = 16;
    var7 = var6[var4];
    var11 = var5.bind(var1)(var7);
    var8 = var11.createNativeStyleProperties;
    var7 = {};
    var9 = 17;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_MOD_SUBTLE;
    var7['reactionBackgroundColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var7['reactionBorderColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.INTERACTIVE_NORMAL;
    var7['reactionTextColor'] = var12;
    var12 = var6[var9];
    var12 = var10.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BG_MOD_FAINT;
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
    var _closure1_slot21 = var7;
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
    var9 = var9.TEXT_NORMAL;
    var4['seeMoreLabelColor'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_viewer/native/components/MediaMessagePreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaMessagePreview(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var16 = var2.channelId;
            var _closure2_slot0 = var16;
            var3 = var2.messageId;
            var _closure2_slot1 = var3;
            var4 = var2.onClose;
            var _closure2_slot2 = var4;
            var28 = var2.onTapMessage;
            var _closure2_slot3 = var28;
            var12 = var2.onMeasureFullHeight;
            var11 = var2.onMeasureCollapsedHeight;
            var20 = var2.full;
            var _closure2_slot4 = var20;
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
            var15 = _closure1_slot0;
            var22 = _closure1_slot2;
            var13 = 18;
            var2 = var22[var13];
            var5 = undefined;
            var9 = var15.bind(var5)(var2);
            var7 = var9.useStateFromStores;
            var2 = _closure1_slot9;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var7.bind(var9)(var6, var2);
            var _closure2_slot10 = var2;
            var7 = _closure1_slot1;
            var6 = 19;
            var6 = var22[var6];
            var6 = var7.bind(var5)(var6);
            var6 = var6.bind(var5)(var2);
            var14 = var6.disableReactionCreates;
            var _closure2_slot11 = var14;
            var7 = _closure1_slot4;
            var6 = var7.useState;
            var25 = false;
            var6 = var6.bind(var7)(var25);
            var21 = _closure1_slot3;
            var18 = 2;
            var7 = var21.bind(var5)(var6, var18);
            var6 = 0;
            var19 = var7[var6];
            var17 = 1;
            var7 = var7[var17];
            var _closure2_slot12 = var7;
            var9 = _closure1_slot4;
            var7 = var9.useState;
            var7 = var7.bind(var9)(var25);
            var7 = var21.bind(var5)(var7, var18);
            var9 = var7[var6];
            var7 = var7[var17];
            var _closure2_slot13 = var7;
            var27 = _closure1_slot4;
            var24 = var27.useRef;
            var7 = null;
            var32 = var24.bind(var27)(var7);
            var _closure2_slot14 = var32;
            var27 = _closure1_slot4;
            var24 = var27.useState;
            var24 = var24.bind(var27)(var7);
            var24 = var21.bind(var5)(var24, var18);
            var34 = var24[var6];
            var _closure2_slot15 = var34;
            var24 = var24[var17];
            var _closure2_slot16 = var24;
            var30 = _closure1_slot4;
            var29 = var30.useEffect;
            var27 = function() {
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
            var24 = var29.bind(var30)(var27, var24);
            var29 = _closure1_slot21;
            var24 = _closure1_slot12;
            var27 = var24.MIDNIGHT;
            var30 = var29.bind(var5)(var27);
            var _closure2_slot17 = var30;
            var27 = _closure1_slot22;
            var24 = var24.MIDNIGHT;
            var24 = var27.bind(var5)(var24);
            var33 = var24.editedColor;
            var _closure2_slot18 = var33;
            var31 = var24.seeMoreLabelColor;
            var _closure2_slot19 = var31;
            var29 = _closure1_slot4;
            var27 = var29.useCallback;
            var24 = new Array(7);
            var24[0] = var34;
            var24[1] = var14;
            var24[2] = var33;
            var24[3] = var31;
            var24[4] = var30;
            var24[5] = var20;
            var24[6] = var23;
            var23 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = arg1;
                    var6 = _closure1_slot19;
                    var2 = _closure2_slot11;
                    var1 = undefined;
                    var6 = var6.bind(var1)(var3, var2);
                    var6 = _closure2_slot15;
                    var3['reactTag'] = var6;
                    var2 = !var2;
                    var3['canAddNewReactions'] = var2;
                    var2 = var3.message;
                    var2['feedbackColor'] = var1;
                    var6 = var3.message;
                    var2 = _closure2_slot18;
                    var6['editedColor'] = var2;
                    var2 = _closure2_slot17;
                    var3['reactionsTheme'] = var2;
                    var2 = _closure2_slot4;
                    if(var2) { _fun0005_ip = 10; continue _fun0005 }
case 11:
                    var2 = {'numberOfLines': 3, 'expandable': true};
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 13;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.7qbp3N;
                    var8 = var6.bind(var7)(var5);
                    var5 = global;
                    var6 = var5.HermesInternal;
                    var7 = var6.concat;
                    var6 = ' ';
                    var6 = var7.bind(var6)(var8);
                    var2['seeMoreLabel'] = var6;
                    var6 = _closure2_slot19;
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
            var23 = var27.bind(var29)(var23, var24);
            var13 = var22[var13];
            var27 = var15.bind(var5)(var13);
            var24 = var27.useStateFromStores;
            var13 = _closure1_slot8;
            var22 = new Array(4);
            var22[0] = var13;
            var13 = _closure1_slot10;
            var22[1] = var13;
            var13 = _closure1_slot11;
            var22[2] = var13;
            var13 = _closure1_slot7;
            var22[3] = var13;
            var15 = new Array(2);
            var15[0] = var16;
            var15[1] = var3;
            var13 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var6 = _closure1_slot10;
                    var5 = var6.getMessage;
                    var4 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var1 = var5.bind(var6)(var4, var1);
                    var4 = null;
                    if(!(var4 == var1)) { _fun0006_ip = 6; continue _fun0006 }
case 12:
                    var7 = _closure1_slot11;
                    var6 = var7.getMessage;
                    var5 = _closure2_slot1;
                    var1 = var6.bind(var7)(var5);
case 6:
                    if(!(var4 == var1)) { _fun0006_ip = 13; continue _fun0006 }
case 14:
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
                    if(var7) { _fun0006_ip = 15; continue _fun0006 }
case 16:
                    var5 = var6.firstMessage;
case 15:
                    var1 = var5;
case 13:
                    if(!(var4 == var1)) { _fun0006_ip = 17; continue _fun0006 }
case 18:
                    var4 = _closure1_slot8;
                    var3 = var4.getMessage;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 17:
                    return var1;
                }
            };
            var13 = var24.bind(var27)(var22, var13, var15);
            var _closure2_slot20 = var13;
            var22 = _closure1_slot4;
            var15 = var22.useState;
            var15 = var15.bind(var22)(var6);
            var15 = var21.bind(var5)(var15, var18);
            var6 = var15[var6];
            var _closure2_slot21 = var6;
            var15 = var15[var17];
            var _closure2_slot22 = var15;
            var21 = _closure1_slot4;
            var18 = var21.useCallback;
            var17 = function(arg1, arg2) {
                var3 = _closure2_slot22;
                var1 = undefined;
                var2 = arg2;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var15 = new Array(0);
            var21 = var18.bind(var21)(var17, var15);
            var18 = _closure1_slot4;
            var17 = var18.useCallback;
            var15 = new Array(2);
            var15[0] = var20;
            var15[1] = var6;
            var6 = function(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot13;
                    var1 = undefined;
                    var2 = true;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure2_slot12;
                    var5 = _closure2_slot21;
                    var2 = arg1;
                    var2 = var2.nativeEvent;
                    var2 = var2.layout;
                    var2 = var2.height;
                    var2 = var5 > var2;
                    if(!var2) { _fun0007_ip = 19; continue _fun0007 }
case 20:
                    var2 = _closure2_slot4;
case 19:
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var22 = var17.bind(var18)(var6, var15);
            var17 = _closure1_slot4;
            var15 = var17.useCallback;
            var6 = new Array(2);
            var6[0] = var13;
            var6[1] = var4;
            var4 = function(arg1) {
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
                var5 = _closure2_slot20;
                var2['message'] = var5;
                var4 = _closure2_slot2;
                var2['closeMediaModal'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var30 = var15.bind(var17)(var4, var6);
            var17 = _closure1_slot4;
            var15 = var17.useCallback;
            var6 = new Array(1);
            var6[0] = var13;
            var4 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = var1.tagType;
                    var3 = _closure2_slot20;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0008_ip = 21; continue _fun0008 }
case 22:
                    var3 = _closure1_slot13;
                    var3 = var3.REMIXING_TYPE;
                    var3 = var4 === var3;
                    if(!var3) { _fun0008_ip = 23; continue _fun0008 }
case 24:
                    var6 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var4 = 23;
                    var4 = var5[var4];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var4);
                    var3 = var4.bind(var5)();
case 23:
                    if(!var3) { _fun0008_ip = 21; continue _fun0008 }
case 25:
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 24;
                    var3 = var7[var3];
                    var6 = undefined;
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.showRemixActionSheet;
                    var2 = _closure2_slot20;
                    var5 = _closure1_slot1;
                    var1 = 25;
                    var1 = var7[var1];
                    var1 = var5.bind(var6)(var1);
                    var1 = var1.MESSAGE_REMIX_TAG;
                    var1 = var3.bind(var4)(var2, var1);
case 21:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var15.bind(var17)(var4, var6);
            var15 = _closure1_slot4;
            var6 = var15.useCallback;
            var4 = new Array(3);
            var4[0] = var16;
            var4[1] = var13;
            var4[2] = var3;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var10 = var1.reaction;
                    var7 = var1.isBurst;
                    var1 = _closure2_slot20;
                    var6 = null;
                    if(!(var6 != var1)) { _fun0009_ip = 26; continue _fun0009 }
case 12:
                    var5 = _closure1_slot9;
                    var4 = var5.getChannel;
                    var3 = _closure2_slot0;
                    var5 = var4.bind(var5)(var3);
                    if(!(var6 != var5)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                    var4 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 26;
                    var3 = var8[var3];
                    var9 = undefined;
                    var4 = var4.bind(var9)(var3);
                    var3 = var4.handleAddOrRemoveReaction;
                    var2 = _closure2_slot1;
                    var8 = var6 != var10;
                    var6 = null;
                    if(!var8) { _fun0009_ip = 28; continue _fun0009 }
case 8:
                    var8 = {};
                    var16 = var8;
                    var15 = var10;
                    var11 = copyDataProperties(var16, var15);
                    var11 = var10.emoji;
                    var10 = 'emoji';
                    var8[var10] = var11;
                    var6 = var8;
case 28:
                    var8 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 27;
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
            var29 = var6.bind(var15)(var3, var4);
            var15 = _closure1_slot4;
            var6 = var15.useCallback;
            var4 = function(arg1) {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var4 = var1.url;
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0010_ip = 29; continue _fun0010 }
case 30:
                    var2 = '';
                    var1 = var2 !== var4;
case 29:
                    if(!var1) { _fun0010_ip = 31; continue _fun0010 }
case 32:
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 28;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1['urlString'] = var4;
                    var1 = var2.bind(var3)(var1);
case 31:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = new Array(0);
            var31 = var6.bind(var15)(var4, var3);
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
            var16 = var4.bind(var6)(var1, var3);
            var3 = var7 == var13;
            var1 = null;
            if(var3) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var2 = var7 == var2;
            var1 = null;
            if(var2) { _fun0004_ip = 33; continue _fun0004 }
case 35:
            var4 = _closure1_slot17;
            var3 = _closure1_slot16;
            var2 = {};
            var15 = _closure1_slot15;
            var10 = _closure1_slot0;
            var24 = _closure1_slot2;
            var6 = 29;
            var6 = var24[var6];
            var6 = var10.bind(var5)(var6);
            var10 = var6.GestureDetector;
            var6 = {};
            var6['gesture'] = var16;
            var18 = _closure1_slot17;
            var17 = _closure1_slot6;
            var16 = {};
            var33 = 16;
            var16['scrollEventThrottle'] = var33;
            var33 = function onScroll(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = arg1;
                    var2 = var1.nativeEvent;
                    var1 = var2.contentOffset;
                    var6 = var2.velocity;
                    var3 = _closure2_slot6;
                    var1 = var1.y;
                    var4 = 0;
                    var2 = var4 === var1;
                    if(!var2) { _fun0011_ip = 23; continue _fun0011 }
case 36:
                    var1 = null;
                    var7 = var1 == var6;
                    var5 = undefined;
                    if(var7) { _fun0011_ip = 37; continue _fun0011 }
case 38:
                    var5 = var6.y;
case 37:
                    var6 = var1 != var5;
                    var1 = 0;
                    if(!var6) { _fun0011_ip = 39; continue _fun0011 }
case 40:
                    var1 = var5;
case 39:
                    var2 = var4 === var1;
case 23:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var16['onScroll'] = var33;
            var16['onLayout'] = var22;
            var16['onContentSizeChange'] = var21;
            var16['showsVerticalScrollIndicator'] = var20;
            var16['bounces'] = var19;
            var22 = _closure1_slot15;
            var21 = _closure1_slot1;
            var19 = 30;
            var19 = var24[var19];
            var20 = var21.bind(var5)(var19);
            var19 = {};
            var19['ref'] = var32;
            var19['onLongPressLink'] = var31;
            var19['onLongPressMessage'] = var30;
            var19['onTapMessage'] = var28;
            var19['onTapReaction'] = var29;
            var19['onTapSeeMore'] = var28;
            var19['onTapTag'] = var27;
            var26 = function onTapLink(arg1) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var1 = _closure2_slot5;
                    if(!var1) { _fun0012_ip = 41; continue _fun0012 }
case 42:
                    var1 = _closure2_slot4;
                    if(var1) { _fun0012_ip = 41; continue _fun0012 }
case 43:
                    var2 = _closure2_slot3;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0012_ip = 44; continue _fun0012;
case 41:
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
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                            var4 = _closure1_slot9;
                            var3 = var4.getChannel;
                            var2 = arg2;
                            var4 = var3.bind(var4)(var2);
                            var2 = null;
                            if(!(var2 != var4)) { _fun0013_ip = 25; continue _fun0013 }
case 45:
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
case 25:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var1['handleTransitionToThread'] = var5;
                    var5 = _closure2_slot20;
                    var1['message'] = var5;
                    var5 = _closure2_slot10;
                    var1['messageChannel'] = var5;
                    var4 = _closure2_slot0;
                    var1['selectedChannelId'] = var4;
                    var4 = arg1;
                    var4 = var4.nativeEvent;
                    var1['tapLinkData'] = var4;
                    var1 = var2.bind(var3)(var1);
case 44:
                    var1 = undefined;
                    return var1;
                }
            };
            var19['onTapLink'] = var26;
            var19['inverted'] = var25;
            var20 = var22.bind(var5)(var20, var19);
            var19 = new Array(2);
            var19[0] = var20;
            var22 = _closure1_slot15;
            var20 = 15;
            var20 = var24[var20];
            var21 = var21.bind(var5)(var20);
            var20 = {};
            var24 = _closure1_slot18;
            var20['rowGenerator'] = var24;
            var20['modifyRow'] = var23;
            var20['message'] = var13;
            var20 = var22.bind(var5)(var21, var20);
            var19[1] = var20;
            var16['children'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var6['children'] = var16;
            var10 = var15.bind(var5)(var10, var6);
            var6 = new Array(2);
            var6[0] = var10;
            var7 = null;
            if(!var9) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var10 = _closure1_slot15;
            var9 = _closure1_slot23;
            var8 = {};
            var8['disableReactionCreates'] = var14;
            var8['message'] = var13;
            var8['onMeasure'] = var12;
            var8['onMeasureTruncated'] = var11;
            var7 = var10.bind(var5)(var9, var8);
case 46:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 33:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
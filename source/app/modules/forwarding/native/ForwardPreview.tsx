// app/modules/forwarding/native/ForwardPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function MessagePreview(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var8 = var1.message;
            var9 = var1.contentMessage;
            var3 = var1.attachmentCount;
            var _closure2_slot0 = var3;
            var4 = undefined;
            var _closure2_slot1 = var4;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.bind(var4)();
            var5 = 0;
            if(!(!(var3 > var5))) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.colors;
            var12 = var5.TEXT_SUBTLE;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.colors;
            var12 = var5.TEXT_DEFAULT;
case 4:
            var10 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 3;
            var5 = var7[var5];
            var11 = var10.bind(var4)(var5);
            var10 = var11.createNativeStyleProperties;
            var5 = {};
            var5['seeMoreLabelColor'] = var12;
            var5 = var10.bind(var11)(var5);
            var5 = var5.bind(var4)(var6);
            _closure2_slot1 = var5;
            var10 = _closure1_slot3;
            var6 = var10.useCallback;
            var11 = var5.seeMoreLabelColor;
            var5 = new Array(2);
            var5[0] = var11;
            var5[1] = var3;
            var3 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = arg1;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3);
                    var3 = var3.MessageContextType;
                    var3 = var3.SEARCH;
                    var2['contextType'] = var3;
                    var3 = {'numberOfLines': null, 'expandable': false, 'seeMoreLabel': '...'};
                    var6 = _closure2_slot0;
                    var5 = 0;
                    var6 = var6 > var5;
                    var5 = 2;
                    if(!var6) { _fun0002_ip = 5; continue _fun0002 }
case 6:
                    var5 = 1;
case 5:
                    var3['numberOfLines'] = var5;
                    var4 = _closure2_slot1;
                    var4 = var4.seeMoreLabelColor;
                    var3['seeMoreLabelColor'] = var4;
                    var2['truncation'] = var3;
                    var3 = var2.message;
                    var2 = '';
                    var3['edited'] = var2;
                    return var1;
                }
            };
            var6 = var6.bind(var10)(var3, var5);
            var10 = _closure1_slot3;
            var5 = var10.useMemo;
            var3 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var5 = var2;
                var1 = new var5[var1](var4);
                var1 = var1 instanceof Object ? var1 : var2;
                var3 = var1.setOptions;
                var2 = {'renderEmbeds': false, 'renderReactions': false, 'inlineEmbedMedia': false, 'inlineAttachmentMedia': false, 'animateEmoji': true, 'gifAutoPlay': false, 'timestampHourCycle': 0, 'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInstanceEmbed': false, 'renderActivityInviteEmbed': false, 'renderComponents': false, 'renderThreadEmbeds': false, 'renderReplies': false, 'renderCommunicationDisabled': false, 'renderAttachments': false, 'renderExecutedCommands': false, 'renderPolls': false, 'renderSharedClientTheme': false, 'renderForumPostActions': false, 'ignoreMentioned': false, 'ignoreEmbedDescriptionCache': false, 'forceHideSimpleEmbedContent': false, 'enableSwipeActions': false, 'useAlternateEmbedColors': false};
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = new Array(0);
            var5 = var5.bind(var10)(var3, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var1 = 8;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {'pointerEvents': 'none', 'horizontalOffset': 0};
            var1['modifyRow'] = var6;
            var7 = var8.merge;
            var6 = {};
            var10 = new Array(0);
            var6['messageSnapshots'] = var10;
            var9 = var9.content;
            var6['content'] = var9;
            var6 = var7.bind(var8)(var6);
            var1['message'] = var6;
            var1['rowGenerator'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = metroImportAll;
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
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'gap': null, 'alignItems': 'center'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_12;
    var9['gap'] = var12;
    var4['forwardPreview'] = var9;
    var9 = {'width': 4, 'height': '100%', 'backgroundColor': null, 'borderRadius': 2};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9['backgroundColor'] = var12;
    var4['quote'] = var9;
    var9 = {'flexDirection': 'column', 'flex': 1, 'paddingVertical': 4, 'gap': 6};
    var4['contentWrapper'] = var9;
    var9 = {'position': 'relative', 'width': 56, 'height': 56, 'borderRadius': null, 'overflow': 'hidden'};
    var12 = 'relative';
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var9['borderRadius'] = var13;
    var4['attachmentPreview'] = var9;
    var9 = {};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BLACK;
    var9['backgroundColor'] = var13;
    var4['attachmentPreviewVideo'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'opacity': 0.6};
    var4['videoThumbnail'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'margin': 16, 'zIndex': 100};
    var4['playIcon'] = var9;
    var9 = {};
    var9['position'] = var12;
    var4['attachmentPreviewOverflow'] = var9;
    var9 = {'position': 'absolute', 'bottom': 0, 'right': 0, 'alignItems': 'center', 'justifyContent': 'center', 'textAlign': 'center', 'width': 24, 'height': 24, 'lineHeight': 24, 'backgroundColor': null, 'borderRadius': null, 'overflow': 'hidden'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_STRONG;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.sm;
    var9['borderRadius'] = var10;
    var4['overflowCount'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 6};
    var4['attachmentRow'] = var9;
    var9 = {'width': 20, 'height': 20};
    var4['largeIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/native/ForwardPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForwardPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var21 = var1.message;
            var6 = var1.channel;
            var5 = var1.forwardOptions;
            var1 = _closure1_slot7;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useForwardPreviewContent;
            var1 = {};
            var1['message'] = var21;
            var1['channel'] = var6;
            var1['forwardOptions'] = var5;
            var1 = var2.bind(var3)(var1);
            var12 = var1.attachments;
            var23 = var1.embeds;
            var26 = var1.hasContent;
            var20 = var1.contentMessage;
            var1 = var20.components;
            var1 = var1.length;
            var16 = 0;
            var1 = var1 > var16;
            var18 = null;
            var17 = null;
            if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = var20.components;
            var1 = var1[var16];
            var2 = var1.type;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.ComponentType;
            var1 = var1.CHECKPOINT_CARD;
            var17 = null;
            if(!(var2 === var1)) { _fun0003_ip = 7; continue _fun0003 }
case 9:
            var1 = var20.components;
            var1 = var1[var16];
            var17 = var1.checkpointData;
case 7:
            var2 = var18 != var17;
            var1 = null;
            if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var3 = var2.CHECKPOINT_PERSONA_COLORS;
            var5 = var17.cardId;
            var6 = var18 != var5;
            var2 = 0;
            if(!var6) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var2 = var5;
case 12:
            var1 = var3[var2];
case 10:
            var2 = var18 == var1;
            var15 = undefined;
            if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var15 = var1.primaryColor;
case 14:
            var9 = var12.length;
            if(!(!(var9 > var16))) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var1 = var23.length;
            var1 = var1 > var16;
            var24 = null;
            var22 = null;
            var19 = null;
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 16:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 12;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.countBy;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getMosaicMediaTypeForAttachment;
                var2 = arg1;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var12, var1);
            var2 = var1.IMAGE;
            var3 = var18 != var2;
            var25 = 0;
            if(!var3) { _fun0003_ip = 19; continue _fun0003 }
case 20:
            var25 = var2;
case 19:
            var2 = var1.VIDEO;
            var3 = var18 != var2;
            var1 = 0;
            if(!var3) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var1 = var2;
case 21:
            if(!(var25 > var16)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            if(!(!(var1 > var16))) { _fun0003_ip = 25; continue _fun0003 }
case 23:
            if(!(!(var1 > var16))) { _fun0003_ip = 26; continue _fun0003 }
case 27:
            if(!(!(var25 > var16))) { _fun0003_ip = 28; continue _fun0003 }
case 29:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 14;
            var3 = var6[var2];
            var3 = var5.bind(var4)(var3);
            var8 = var3.intl;
            var7 = var8.formatToPlainString;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["89ihS8"];
            var2 = {};
            var2['count'] = var9;
            var3 = var7.bind(var8)(var3, var2);
            var2 = 18;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.AttachmentIcon;
            _fun0003_ip = 30; continue _fun0003;
case 28:
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 14;
            var7 = var11[var5];
            var7 = var6.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.formatToPlainString;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5.h4pFfU;
            var5 = {};
            var5['count'] = var25;
            var6 = var7.bind(var8)(var6, var5);
            var5 = 1;
            if(!(var5 !== var25)) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 15;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.ImagesIcon;
            _fun0003_ip = 33; continue _fun0003;
case 31:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var7 = 17;
            var7 = var11[var7];
            var7 = var8.bind(var4)(var7);
            var5 = var7.ImageIcon;
case 33:
            var2 = var5;
            var3 = var6;
            _fun0003_ip = 30; continue _fun0003;
case 26:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 14;
            var6 = var8[var5];
            var6 = var7.bind(var4)(var6);
            var13 = var6.intl;
            var11 = var13.formatToPlainString;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5.SJ6pPX;
            var5 = {};
            var5['count'] = var1;
            var3 = var11.bind(var13)(var6, var5);
            var5 = 16;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var2 = var5.CirclePlayIcon;
            _fun0003_ip = 30; continue _fun0003;
case 25:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 14;
            var6 = var8[var5];
            var6 = var7.bind(var4)(var6);
            var13 = var6.intl;
            var11 = var13.formatToPlainString;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.t;
            var6 = var5.Lr0Top;
            var5 = {};
            var5['image_count'] = var25;
            var5['video_count'] = var1;
            var3 = var11.bind(var13)(var6, var5);
            var5 = 15;
            var5 = var8[var5];
            var5 = var7.bind(var4)(var5);
            var2 = var5.ImagesIcon;
case 30:
            if(!(var1 > var16)) { _fun0003_ip = 34; continue _fun0003 }
case 35:
            if(!(var9 !== var1)) { _fun0003_ip = 36; continue _fun0003 }
case 34:
            if(!(!(var9 > var16))) { _fun0003_ip = 37; continue _fun0003 }
case 38:
            var5 = var23[var16];
            var6 = var18 == var5;
            var1 = undefined;
            if(var6) { _fun0003_ip = 39; continue _fun0003 }
case 40:
            var5 = var5.thumbnail;
            var6 = var18 == var5;
            var1 = undefined;
            if(var6) { _fun0003_ip = 39; continue _fun0003 }
case 41:
            var1 = var5.proxyURL;
case 39:
            var1 = var18 != var1;
            var24 = var3;
            var22 = var2;
            var19 = null;
            if(!var1) { _fun0003_ip = 18; continue _fun0003 }
case 42:
            var6 = _closure1_slot5;
            var5 = _closure1_slot4;
            var1 = {};
            var7 = var10.attachmentPreview;
            var1['style'] = var7;
            var11 = _closure1_slot5;
            var27 = _closure1_slot1;
            var28 = _closure1_slot2;
            var7 = 19;
            var7 = var28[var7];
            var8 = var27.bind(var4)(var7);
            var7 = {'source': null, 'width': 56, 'height': 56};
            var13 = {};
            var25 = 20;
            var25 = var28[var25];
            var28 = var27.bind(var4)(var25);
            var27 = var28.getMobileOptimizedSrc;
            var23 = var23[var16];
            var23 = var23.thumbnail;
            var25 = var23.proxyURL;
            var23 = 56;
            var23 = var27.bind(var28)(var25, var23, var23);
            var13['uri'] = var23;
            var7['source'] = var13;
            var7 = var11.bind(var4)(var8, var7);
            var1['children'] = var7;
            var19 = var6.bind(var4)(var5, var1);
            var24 = var3;
            var22 = var2;
            _fun0003_ip = 18; continue _fun0003;
case 37:
            var6 = _closure1_slot5;
            var5 = _closure1_slot4;
            var1 = {};
            var7 = var10.attachmentPreview;
            var1['style'] = var7;
            var11 = _closure1_slot5;
            var25 = _closure1_slot1;
            var27 = _closure1_slot2;
            var7 = 19;
            var7 = var27[var7];
            var8 = var25.bind(var4)(var7);
            var7 = {'source': null, 'width': 56, 'height': 56};
            var13 = {};
            var23 = 20;
            var23 = var27[var23];
            var28 = var25.bind(var4)(var23);
            var27 = var28.getMobileOptimizedSrc;
            var23 = var12[var16];
            var25 = var23.proxy_url;
            var23 = 56;
            var23 = var27.bind(var28)(var25, var23, var23);
            var13['uri'] = var23;
            var7['source'] = var13;
            var7 = var11.bind(var4)(var8, var7);
            var1['children'] = var7;
            var19 = var6.bind(var4)(var5, var1);
            var24 = var3;
            var22 = var2;
            _fun0003_ip = 18; continue _fun0003;
case 36:
            var6 = _closure1_slot6;
            var5 = _closure1_slot4;
            var1 = {};
            var8 = var10.attachmentPreview;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var10.attachmentPreviewVideo;
            var7[1] = var8;
            var1['style'] = var7;
            var11 = _closure1_slot5;
            var27 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 19;
            var7 = var13[var7];
            var8 = var27.bind(var4)(var7);
            var7 = {};
            var23 = var10.videoThumbnail;
            var7['style'] = var23;
            var23 = {};
            var25 = 20;
            var25 = var13[var25];
            var29 = var27.bind(var4)(var25);
            var28 = var29.getMobileOptimizedSrc;
            var12 = var12[var16];
            var33 = var12.proxy_url;
            var12 = 56;
            var30 = 'png';
            var34 = var29;
            var32 = var12;
            var31 = var12;
            var25 = var34[var28](var33, var32, var31, var30, var29);
            var23['uri'] = var25;
            var7['source'] = var23;
            var7['width'] = var12;
            var7['height'] = var12;
            var8 = var11.bind(var4)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var8 = 16;
            var8 = var13[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.CirclePlayIcon;
            var8 = {'style': null, 'size': 'md', 'color': 'white'};
            var13 = var10.playIcon;
            var8['style'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var19 = var6.bind(var4)(var5, var1);
            var24 = var3;
            var22 = var2;
case 18:
            var11 = 1;
            var6 = var19;
            if(!(var9 > var11)) { _fun0003_ip = 43; continue _fun0003 }
case 44:
            var6 = var19;
            if(!(var18 != var6)) { _fun0003_ip = 43; continue _fun0003 }
case 45:
            var25 = {'shape': null, 'x': 28, 'y': 28, 'width': 32, 'height': 32, 'cornerRadius': 12};
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 21;
            var1 = var12[var5];
            var1 = var8.bind(var4)(var1);
            var1 = var1.CutoutShape;
            var1 = var1.RoundedRect;
            var25['shape'] = var1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var10.attachmentPreviewOverflow;
            var1['style'] = var7;
            var13 = _closure1_slot5;
            var7 = _closure1_slot1;
            var5 = var12[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var23 = new Array(1);
            var23[0] = var25;
            var5['cutouts'] = var23;
            var5['children'] = var19;
            var7 = var13.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = 22;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'text-default'};
            var12 = var10.overflowCount;
            var7['style'] = var12;
            var12 = var9 - var11;
            var11 = ['+'];
            var11[1] = var12;
            var7['children'] = var11;
            var7 = var3.bind(var4)(var8, var7);
            var5[1] = var7;
            var1['children'] = var5;
            var6 = var3.bind(var4)(var2, var1);
case 43:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.forwardPreview;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var5 = {};
            var8 = var10.quote;
            var5['style'] = var8;
            var7 = var7.bind(var4)(var2, var5);
            var5 = new Array(4);
            var5[0] = var7;
            var7 = {};
            var8 = var10.contentWrapper;
            var7['style'] = var8;
            var11 = var18 != var17;
            if(!var11) { _fun0003_ip = 46; continue _fun0003 }
case 47:
            var13 = _closure1_slot5;
            var23 = _closure1_slot0;
            var28 = _closure1_slot2;
            var8 = 22;
            var8 = var28[var8];
            var8 = var23.bind(var4)(var8);
            var12 = var8.Text;
            var8 = {};
            var19 = 'text-md/medium';
            var8['variant'] = var19;
            var19 = 14;
            var19 = var28[var19];
            var19 = var23.bind(var4)(var19);
            var25 = var19.intl;
            var23 = var25.string;
            var27 = _closure1_slot1;
            var19 = 23;
            var19 = var28[var19];
            var19 = var27.bind(var4)(var19);
            var19 = var19.goiR2u;
            var19 = var23.bind(var25)(var19);
            var8['children'] = var19;
            var11 = var13.bind(var4)(var12, var8);
case 46:
            var8 = new Array(3);
            var8[0] = var11;
            var11 = var26;
            if(!var11) { _fun0003_ip = 48; continue _fun0003 }
case 49:
            var19 = _closure1_slot5;
            var13 = _closure1_slot8;
            var12 = {};
            var12['message'] = var21;
            var12['contentMessage'] = var20;
            var12['attachmentCount'] = var9;
            var11 = var19.bind(var4)(var13, var12);
case 48:
            var8[1] = var11;
            var9 = var9 > var16;
            if(!var9) { _fun0003_ip = 50; continue _fun0003 }
case 51:
            var13 = _closure1_slot6;
            var12 = _closure1_slot4;
            var11 = {};
            var19 = var10.attachmentRow;
            var11['style'] = var19;
            var20 = var18 != var22;
            if(!var20) { _fun0003_ip = 52; continue _fun0003 }
case 53:
            var21 = _closure1_slot5;
            var19 = {};
            var23 = 'custom';
            if(!var26) { _fun0003_ip = 54; continue _fun0003 }
case 55:
            var23 = 'sm';
case 54:
            var19['size'] = var23;
            var23 = !var26;
            if(!var23) { _fun0003_ip = 56; continue _fun0003 }
case 57:
            var23 = var10.largeIcon;
case 56:
            var19['style'] = var23;
            var23 = 'text-muted';
            var19['color'] = var23;
            var20 = var21.bind(var4)(var22, var19);
case 52:
            var19 = new Array(2);
            var19[0] = var20;
            var20 = var18 != var24;
            if(!var20) { _fun0003_ip = 58; continue _fun0003 }
case 59:
            var23 = _closure1_slot5;
            var22 = _closure1_slot0;
            var25 = _closure1_slot2;
            var21 = 22;
            var21 = var25[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.Text;
            var21 = {};
            var25 = 'text-md/medium';
            if(!var26) { _fun0003_ip = 60; continue _fun0003 }
case 61:
            var25 = 'text-sm/medium';
case 60:
            var21['variant'] = var25;
            var25 = 'text-muted';
            var21['color'] = var25;
            var21['children'] = var24;
            var20 = var23.bind(var4)(var22, var21);
case 58:
            var19[1] = var20;
            var11['children'] = var19;
            var9 = var13.bind(var4)(var12, var11);
case 50:
            var8[2] = var9;
            var7['children'] = var8;
            var7 = var3.bind(var4)(var2, var7);
            var5[1] = var7;
            var5[2] = var6;
            var6 = var18 != var17;
            if(!var6) { _fun0003_ip = 62; continue _fun0003 }
case 63:
            var9 = _closure1_slot5;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.attachmentPreview;
            var7['style'] = var10;
            var12 = _closure1_slot5;
            var11 = _closure1_slot1;
            var19 = _closure1_slot2;
            var10 = 19;
            var10 = var19[var10];
            var11 = var11.bind(var4)(var10);
            var10 = {'style': null, 'width': 56, 'height': 56};
            var13 = {};
            var13['backgroundColor'] = var15;
            var10['style'] = var13;
            var13 = {};
            var15 = _closure1_slot0;
            var14 = 24;
            var14 = var19[var14];
            var15 = var15.bind(var4)(var14);
            var14 = var15.getCardAssetUrl;
            var17 = var17.cardId;
            var18 = var18 != var17;
            var16 = 0;
            if(!var18) { _fun0003_ip = 64; continue _fun0003 }
case 65:
            var16 = var17;
case 64:
            var14 = var14.bind(var15)(var16);
            var13['uri'] = var14;
            var10['source'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 62:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForwardPreview'] = var2;
    return var1;
})();
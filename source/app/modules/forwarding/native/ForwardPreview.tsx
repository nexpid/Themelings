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
 0:
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
            if(!(!(var3 > var5))) { _fun0001_ip = 98; continue _fun0001 }
 65:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.colors;
            var12 = var5.TEXT_SECONDARY;
            _fun0001_ip = 129; continue _fun0001;
 98:
            var7 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.colors;
            var12 = var5.TEXT_NORMAL;
 129:
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
 0:
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
                    if(!var6) { _fun0002_ip = 82; continue _fun0002 }
 79:
                    var5 = 1;
 82:
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
                var2 = {'renderEmbeds': false, 'renderReactions': false, 'inlineEmbedMedia': false, 'inlineAttachmentMedia': false, 'animateEmoji': true, 'gifAutoPlay': false, 'renderCodedLinks': false, 'renderGiftCode': false, 'renderActivityInstanceEmbed': false, 'renderActivityInviteEmbed': false, 'renderComponents': false, 'renderThreadEmbeds': false, 'renderReplies': false, 'renderCommunicationDisabled': false, 'renderAttachments': false, 'renderExecutedCommands': false, 'renderPolls': false, 'renderForumPostActions': false, 'ignoreMentioned': false, 'ignoreEmbedDescriptionCache': false, 'forceHideSimpleEmbedContent': false, 'enableSwipeActions': false, 'useAlternateEmbedColors': false};
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
    var12 = var12.BG_MOD_STRONG;
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
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forwarding/native/ForwardPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ForwardPreview(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var16 = var1.message;
            var6 = var1.channel;
            var5 = var1.forwardOptions;
            var1 = _closure1_slot7;
            var4 = undefined;
            var22 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useForwardPreviewContent;
            var1 = {};
            var1['message'] = var16;
            var1['channel'] = var6;
            var1['forwardOptions'] = var5;
            var1 = var2.bind(var3)(var1);
            var12 = var1.attachments;
            var21 = var1.embeds;
            var20 = var1.hasContent;
            var14 = var1.contentMessage;
            var10 = var12.length;
            var9 = 0;
            if(!(!(var10 > var9))) { _fun0003_ip = 134; continue _fun0003 }
 113:
            var1 = var21.length;
            var1 = var1 > var9;
            var18 = null;
            var19 = null;
            var17 = null;
            if(!var1) { _fun0003_ip = 1211; continue _fun0003 }
 134:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 10;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.countBy;
            var1 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 11;
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
            var5 = null;
            var3 = var5 != var2;
            var24 = 0;
            if(!var3) { _fun0003_ip = 195; continue _fun0003 }
 192:
            var24 = var2;
 195:
            var2 = var1.VIDEO;
            var3 = var5 != var2;
            var1 = 0;
            if(!var3) { _fun0003_ip = 213; continue _fun0003 }
 210:
            var1 = var2;
 213:
            if(!(var24 > var9)) { _fun0003_ip = 224; continue _fun0003 }
 217:
            if(!(!(var1 > var9))) { _fun0003_ip = 536; continue _fun0003 }
 224:
            if(!(!(var1 > var9))) { _fun0003_ip = 454; continue _fun0003 }
 231:
            if(!(!(var24 > var9))) { _fun0003_ip = 320; continue _fun0003 }
 235:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 12;
            var3 = var7[var2];
            var3 = var6.bind(var4)(var3);
            var11 = var3.intl;
            var8 = var11.formatToPlainString;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2.89ihS0;
            var2 = {};
            var2['count'] = var10;
            var3 = var8.bind(var11)(var3, var2);
            var2 = 16;
            var2 = var7[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.AttachmentIcon;
            _fun0003_ip = 628; continue _fun0003;
 320:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 12;
            var8 = var13[var6];
            var8 = var7.bind(var4)(var8);
            var11 = var8.intl;
            var8 = var11.formatToPlainString;
            var6 = var13[var6];
            var6 = var7.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.h4pFfX;
            var6 = {};
            var6['count'] = var24;
            var7 = var8.bind(var11)(var7, var6);
            var6 = 1;
            if(!(var6 !== var24)) { _fun0003_ip = 417; continue _fun0003 }
 389:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 13;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.ImagesIcon;
            _fun0003_ip = 443; continue _fun0003;
 417:
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var8 = 15;
            var8 = var13[var8];
            var8 = var11.bind(var4)(var8);
            var6 = var8.ImageIcon;
 443:
            var2 = var6;
            var3 = var7;
            _fun0003_ip = 628; continue _fun0003;
 454:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 12;
            var7 = var11[var6];
            var7 = var8.bind(var4)(var7);
            var23 = var7.intl;
            var13 = var23.formatToPlainString;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.SJ6pPT;
            var6 = {};
            var6['count'] = var1;
            var3 = var13.bind(var23)(var7, var6);
            var6 = 14;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var2 = var6.CirclePlayIcon;
            _fun0003_ip = 628; continue _fun0003;
 536:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 12;
            var7 = var11[var6];
            var7 = var8.bind(var4)(var7);
            var23 = var7.intl;
            var13 = var23.formatToPlainString;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var6 = var6.t;
            var7 = var6.Lr0Toq;
            var6 = {};
            var6['image_count'] = var24;
            var6['video_count'] = var1;
            var3 = var13.bind(var23)(var7, var6);
            var6 = 13;
            var6 = var11[var6];
            var6 = var8.bind(var4)(var6);
            var2 = var6.ImagesIcon;
 628:
            if(!(var1 > var9)) { _fun0003_ip = 639; continue _fun0003 }
 632:
            if(!(var10 !== var1)) { _fun0003_ip = 976; continue _fun0003 }
 639:
            if(!(!(var10 > var9))) { _fun0003_ip = 840; continue _fun0003 }
 646:
            var6 = var21[var9];
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0003_ip = 680; continue _fun0003 }
 659:
            var6 = var6.thumbnail;
            var7 = var5 == var6;
            var1 = undefined;
            if(var7) { _fun0003_ip = 680; continue _fun0003 }
 674:
            var1 = var6.proxyURL;
 680:
            var1 = var5 != var1;
            var18 = var3;
            var19 = var2;
            var17 = null;
            if(!var1) { _fun0003_ip = 1211; continue _fun0003 }
 698:
            var6 = _closure1_slot5;
            var5 = _closure1_slot4;
            var1 = {};
            var7 = var22.attachmentPreview;
            var1['style'] = var7;
            var11 = _closure1_slot5;
            var24 = _closure1_slot1;
            var25 = _closure1_slot2;
            var7 = 17;
            var7 = var25[var7];
            var8 = var24.bind(var4)(var7);
            var7 = {'source': null, 'width': 56, 'height': 56};
            var13 = {};
            var23 = 18;
            var23 = var25[var23];
            var25 = var24.bind(var4)(var23);
            var24 = var25.getMobileOptimizedSrc;
            var21 = var21[var9];
            var21 = var21.thumbnail;
            var23 = var21.proxyURL;
            var21 = 56;
            var21 = var24.bind(var25)(var23, var21, var21);
            var13['uri'] = var21;
            var7['source'] = var13;
            var7 = var11.bind(var4)(var8, var7);
            var1['children'] = var7;
            var17 = var6.bind(var4)(var5, var1);
            var18 = var3;
            var19 = var2;
            _fun0003_ip = 1211; continue _fun0003;
 840:
            var6 = _closure1_slot5;
            var5 = _closure1_slot4;
            var1 = {};
            var7 = var22.attachmentPreview;
            var1['style'] = var7;
            var11 = _closure1_slot5;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var7 = 17;
            var7 = var24[var7];
            var8 = var23.bind(var4)(var7);
            var7 = {'source': null, 'width': 56, 'height': 56};
            var13 = {};
            var21 = 18;
            var21 = var24[var21];
            var25 = var23.bind(var4)(var21);
            var24 = var25.getMobileOptimizedSrc;
            var21 = var12[var9];
            var23 = var21.proxy_url;
            var21 = 56;
            var21 = var24.bind(var25)(var23, var21, var21);
            var13['uri'] = var21;
            var7['source'] = var13;
            var7 = var11.bind(var4)(var8, var7);
            var1['children'] = var7;
            var17 = var6.bind(var4)(var5, var1);
            var18 = var3;
            var19 = var2;
            _fun0003_ip = 1211; continue _fun0003;
 976:
            var6 = _closure1_slot6;
            var5 = _closure1_slot4;
            var1 = {};
            var8 = var22.attachmentPreview;
            var7 = new Array(2);
            var7[0] = var8;
            var8 = var22.attachmentPreviewVideo;
            var7[1] = var8;
            var1['style'] = var7;
            var11 = _closure1_slot5;
            var24 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 17;
            var7 = var13[var7];
            var8 = var24.bind(var4)(var7);
            var7 = {};
            var21 = var22.videoThumbnail;
            var7['style'] = var21;
            var21 = {};
            var23 = 18;
            var23 = var13[var23];
            var26 = var24.bind(var4)(var23);
            var25 = var26.getMobileOptimizedSrc;
            var12 = var12[var9];
            var30 = var12.proxy_url;
            var12 = 56;
            var27 = 'png';
            var31 = var26;
            var29 = var12;
            var28 = var12;
            var23 = var31[var25](var30, var29, var28, var27, var26);
            var21['uri'] = var23;
            var7['source'] = var21;
            var7['width'] = var12;
            var7['height'] = var12;
            var8 = var11.bind(var4)(var8, var7);
            var7 = new Array(2);
            var7[0] = var8;
            var12 = _closure1_slot5;
            var11 = _closure1_slot0;
            var8 = 14;
            var8 = var13[var8];
            var8 = var11.bind(var4)(var8);
            var11 = var8.CirclePlayIcon;
            var8 = {'style': null, 'size': 'md', 'color': 'white'};
            var13 = var22.playIcon;
            var8['style'] = var13;
            var8 = var12.bind(var4)(var11, var8);
            var7[1] = var8;
            var1['children'] = var7;
            var17 = var6.bind(var4)(var5, var1);
            var18 = var3;
            var19 = var2;
 1211:
            var11 = 1;
            var6 = var17;
            if(!(var10 > var11)) { _fun0003_ip = 1443; continue _fun0003 }
 1224:
            var1 = null;
            var6 = var17;
            if(!(var1 != var6)) { _fun0003_ip = 1443; continue _fun0003 }
 1236:
            var23 = {'shape': null, 'x': 28, 'y': 28, 'width': 32, 'height': 32, 'cornerRadius': 12};
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var5 = 19;
            var1 = var12[var5];
            var1 = var8.bind(var4)(var1);
            var1 = var1.CutoutShape;
            var1 = var1.RoundedRect;
            var23['shape'] = var1;
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = var22.attachmentPreviewOverflow;
            var1['style'] = var7;
            var13 = _closure1_slot5;
            var7 = _closure1_slot1;
            var5 = var12[var5];
            var7 = var7.bind(var4)(var5);
            var5 = {};
            var21 = new Array(1);
            var21[0] = var23;
            var5['cutouts'] = var21;
            var5['children'] = var17;
            var7 = var13.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var7 = 20;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.Text;
            var7 = {'style': null, 'variant': 'text-xs/semibold', 'color': 'text-normal'};
            var12 = var22.overflowCount;
            var7['style'] = var12;
            var12 = var10 - var11;
            var11 = ['+'];
            var11[1] = var12;
            var7['children'] = var11;
            var7 = var3.bind(var4)(var8, var7);
            var5[1] = var7;
            var1['children'] = var5;
            var6 = var3.bind(var4)(var2, var1);
 1443:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var22.forwardPreview;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var5 = {};
            var8 = var22.quote;
            var5['style'] = var8;
            var7 = var7.bind(var4)(var2, var5);
            var5 = new Array(3);
            var5[0] = var7;
            var7 = {};
            var8 = var22.contentWrapper;
            var7['style'] = var8;
            var11 = var20;
            if(!var11) { _fun0003_ip = 1541; continue _fun0003 }
 1511:
            var13 = _closure1_slot5;
            var12 = _closure1_slot8;
            var8 = {};
            var8['message'] = var16;
            var8['contentMessage'] = var14;
            var8['attachmentCount'] = var10;
            var11 = var13.bind(var4)(var12, var8);
 1541:
            var8 = new Array(2);
            var8[0] = var11;
            var9 = var10 > var9;
            if(!var9) { _fun0003_ip = 1736; continue _fun0003 }
 1559:
            var12 = _closure1_slot6;
            var11 = _closure1_slot4;
            var10 = {};
            var13 = var22.attachmentRow;
            var10['style'] = var13;
            var14 = null;
            var16 = var14 != var19;
            if(!var16) { _fun0003_ip = 1641; continue _fun0003 }
 1588:
            var17 = _closure1_slot5;
            var13 = {};
            var21 = 'custom';
            if(!var20) { _fun0003_ip = 1605; continue _fun0003 }
 1601:
            var21 = 'sm';
 1605:
            var13['size'] = var21;
            var21 = !var20;
            if(!var21) { _fun0003_ip = 1621; continue _fun0003 }
 1615:
            var21 = var22.largeIcon;
 1621:
            var13['style'] = var21;
            var21 = 'text-low-contrast';
            var13['color'] = var21;
            var16 = var17.bind(var4)(var19, var13);
 1641:
            var13 = new Array(2);
            var13[0] = var16;
            var14 = var14 != var18;
            if(!var14) { _fun0003_ip = 1722; continue _fun0003 }
 1656:
            var17 = _closure1_slot5;
            var16 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 20;
            var15 = var19[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.Text;
            var15 = {};
            var19 = 'text-md/medium';
            if(!var20) { _fun0003_ip = 1698; continue _fun0003 }
 1694:
            var19 = 'text-sm/medium';
 1698:
            var15['variant'] = var19;
            var19 = 'header-muted';
            var15['color'] = var19;
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
 1722:
            var13[1] = var14;
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
 1736:
            var8[1] = var9;
            var7['children'] = var8;
            var7 = var3.bind(var4)(var2, var7);
            var5[1] = var7;
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForwardPreview'] = var2;
    return var1;
})();
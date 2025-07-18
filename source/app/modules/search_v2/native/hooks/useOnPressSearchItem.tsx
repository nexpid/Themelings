// app/modules/search_v2/native/hooks/useOnPressSearchItem.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var9 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function addSearchHistoryItem(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var _closure2_slot0 = var2;
            var3 = arg2;
            var _closure2_slot1 = var3;
            var4 = var2.type;
            var3 = _closure1_slot15;
            var3 = var3.DMS;
            if(!(var3 !== var4)) { _fun0001_ip = 52; continue _fun0001 }
 38:
            var3 = _closure1_slot15;
            var3 = var3.GUILD;
            if(!(var3 === var4)) { _fun0001_ip = 92; continue _fun0001 }
 52:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.delayUntilNavigationComplete;
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.addSearchHistoryItem;
                var2 = _closure2_slot0;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
 92:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function addCurrentSearchQueryToSearchHistory(arg1) {
        var4 = arg1;
        var3 = _closure1_slot6;
        var2 = var3.getState;
        var1 = function(arg1) {
            var3 = arg1;
            var1 = {};
            var2 = var3.getTextInputValue;
            var2 = var2.bind(var3)();
            var1['text'] = var2;
            var2 = var3.getTags;
            var2 = var2.bind(var3)();
            var1['tags'] = var2;
            return var1;
        };
        var2 = var2.bind(var3)(var4, var1);
        var1 = var2.tags;
        var5 = var2.text;
        var3 = _closure1_slot17;
        var2 = {};
        var6 = _closure1_slot8;
        var6 = var6.TEXT;
        var2['type'] = var6;
        var2['text'] = var5;
        var2['tags'] = var1;
        var1 = undefined;
        var2 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = function navigateToSearchPreview(arg1, arg2, arg3, arg4) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var4 = arg1;
            var3 = arg2;
            var2 = arg4;
            var _closure2_slot0 = var3;
            var _closure2_slot1 = var2;
            var6 = {};
            var1 = var3.id;
            var6['channelId'] = var1;
            var1 = var3.getGuildId;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!(var1 == var3)) { _fun0002_ip = 53; continue _fun0002 }
 46:
            var3 = _closure1_slot14;
 53:
            var6['guildId'] = var3;
            var3 = arg3;
            var6['searchContext'] = var3;
            if(!(var1 == var2)) { _fun0002_ip = 96; continue _fun0002 }
 69:
            var2 = var4.navigate;
            var1 = _closure1_slot10;
            var1 = var1.SEARCH_CHAT_PREVIEW;
            var1 = var2.bind(var4)(var1, var6);
            _fun0002_ip = 167; continue _fun0002;
 96:
            var3 = var4.navigate;
            var2 = {};
            var1 = _closure1_slot10;
            var1 = var1.SEARCH_CHAT_PREVIEW;
            var2['screen'] = var1;
            var1 = {};
            var9 = var1;
            var8 = var6;
            var6 = copyDataProperties(var9, var8);
            var6 = function onBeforeJumpToMessage() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 19;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var5 = var3.ComponentDispatch;
                var4 = var5.dispatch;
                var2 = _closure1_slot13;
                var3 = var2.HIDE_CHANNEL_DETAILS;
                var2 = {};
                var7 = _closure2_slot0;
                var7 = var7.id;
                var2['channelId'] = var7;
                var6 = _closure2_slot1;
                var6 = var6.screenIndex;
                var2['screenIndex'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var5 = 'onBeforeJumpToMessage';
            var1[var5] = var6;
            var2['params'] = var1;
            var1 = 'sidebar';
            var1 = var3.bind(var4)(var1, var2);
 167:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var5 = function getMediaViewerSources(arg1, arg2) {
        var5 = arg1;
        var1 = arg2;
        var _closure2_slot0 = var1;
        var3 = new Array(0);
        var _closure2_slot1 = var3;
        var1 = 0;
        var _closure2_slot2 = var1;
        var _closure2_slot3 = var1;
        var4 = var5.forEach;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var4 = arg1;
                var3 = var4.type;
                var2 = _closure1_slot7;
                var2 = var2.ATTACHMENT;
                var2 = var3 === var2;
                if(var2) { _fun0003_ip = 47; continue _fun0003 }
 28:
                var5 = var4.type;
                var3 = _closure1_slot7;
                var3 = var3.EMBED;
                var2 = var5 === var3;
 47:
                if(!var2) { _fun0003_ip = 793; continue _fun0003 }
 53:
                var3 = var4.type;
                var2 = _closure1_slot7;
                var2 = var2.EMBED;
                if(!(var3 !== var2)) { _fun0003_ip = 264; continue _fun0003 }
 75:
                var3 = var4.attachment;
                var6 = var3.proxy_url;
                var9 = null;
                if(!(var9 == var6)) { _fun0003_ip = 98; continue _fun0003 }
 93:
                var6 = var3.url;
 98:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 21;
                var2 = var5[var2];
                var5 = undefined;
                var8 = var7.bind(var5)(var2);
                var2 = var3.width;
                var7 = var9 != var2;
                if(!var7) { _fun0003_ip = 141; continue _fun0003 }
 132:
                var2 = var3.height;
                var7 = var9 != var2;
 141:
                var2 = '[useOnPressSearchItem] Attachment dimensions should not be null.';
                var2 = var8.bind(var5)(var7, var2);
                var2 = {};
                var2['uri'] = var6;
                var2['sourceURI'] = var6;
                var7 = var3.width;
                var2['width'] = var7;
                var7 = var3.height;
                var2['height'] = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 22;
                var7 = var9[var7];
                var9 = var8.bind(var5)(var7);
                var8 = var9.isVideoFile;
                var7 = var3.filename;
                var7 = var8.bind(var9)(var7);
                var5 = undefined;
                if(!var7) { _fun0003_ip = 228; continue _fun0003 }
 225:
                var5 = var6;
 228:
                var2['videoURI'] = var5;
                var5 = false;
                var2['isGIFV'] = var5;
                var5 = 'attachment';
                var2['accessoryType'] = var5;
                var3 = var3.id;
                var2['attachmentId'] = var3;
                _fun0003_ip = 473; continue _fun0003;
 264:
                var3 = var4.embed;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 20;
                var6 = var8[var5];
                var5 = undefined;
                var7 = var7.bind(var5)(var6);
                var6 = var7.getEmbedImage;
                var9 = var6.bind(var7)(var3);
                var7 = _closure1_slot1;
                var6 = 21;
                var6 = var8[var6];
                var10 = var7.bind(var5)(var6);
                var8 = null;
                var7 = var8 != var9;
                var6 = '[useOnPressSearchItem] Embed image should not be null.';
                var6 = var10.bind(var5)(var7, var6);
                var11 = var3.video;
                var6 = var3.type;
                var10 = var9.proxyURL;
                if(!(var8 == var10)) { _fun0003_ip = 363; continue _fun0003 }
 358:
                var10 = var9.url;
 363:
                var3 = var8 == var11;
                var7 = undefined;
                if(var3) { _fun0003_ip = 378; continue _fun0003 }
 372:
                var7 = var11.proxyURL;
 378:
                if(!(var8 == var7)) { _fun0003_ip = 399; continue _fun0003 }
 382:
                var12 = var8 == var11;
                var3 = undefined;
                if(var12) { _fun0003_ip = 396; continue _fun0003 }
 391:
                var3 = var11.url;
 396:
                var7 = var3;
 399:
                var3 = {};
                var3['uri'] = var10;
                var3['sourceURI'] = var7;
                var10 = var9.width;
                var3['width'] = var10;
                var9 = var9.height;
                var3['height'] = var9;
                var8 = var8 != var7;
                var5 = undefined;
                if(!var8) { _fun0003_ip = 441; continue _fun0003 }
 438:
                var5 = var7;
 441:
                var3['videoURI'] = var5;
                var5 = 'gifv';
                var5 = var5 === var6;
                var3['isGIFV'] = var5;
                var5 = 'embed';
                var3['accessoryType'] = var5;
                var2 = var3;
 473:
                var16 = var2.uri;
                var12 = var2.sourceURI;
                var11 = var2.width;
                var10 = var2.height;
                var15 = var2.videoURI;
                var13 = var2.isGIFV;
                var9 = var2.accessoryType;
                var8 = var2.attachmentId;
                var6 = _closure2_slot1;
                var5 = var6.push;
                var7 = {};
                var3 = _closure1_slot0;
                var14 = _closure1_slot2;
                var1 = 23;
                var1 = var14[var1];
                var14 = undefined;
                var18 = var3.bind(var14)(var1);
                var17 = var18.getMobileOptimizedSrc;
                var3 = null;
                var19 = var3 != var15;
                var1 = undefined;
                if(!var19) { _fun0003_ip = 578; continue _fun0003 }
 572:
                var1 = 'png';
 578:
                var24 = var18;
                var23 = var16;
                var22 = var11;
                var21 = var10;
                var20 = var1;
                var1 = var24[var17](var23, var22, var21, var20, var19);
                var7['uri'] = var1;
                var1 = var4.messageId;
                var7['messageId'] = var1;
                var1 = var4.channelId;
                var7['channelId'] = var1;
                var1 = var4.mediaIndex;
                var7['mediaIndex'] = var1;
                var7['sourceURI'] = var12;
                var7['width'] = var11;
                var7['height'] = var10;
                var7['accessoryType'] = var9;
                var7['attachmentId'] = var8;
                var1 = new Array(2);
                var1[0] = var7;
                var7 = {};
                var7['uri'] = var16;
                var16 = var4.messageId;
                var7['messageId'] = var16;
                var16 = var4.channelId;
                var7['channelId'] = var16;
                var16 = var4.mediaIndex;
                var7['mediaIndex'] = var16;
                var16 = var3 != var15;
                var14 = undefined;
                if(!var16) { _fun0003_ip = 710; continue _fun0003 }
 707:
                var14 = var15;
 710:
                var7['videoURI'] = var14;
                var7['isGIFV'] = var13;
                var7['sourceURI'] = var12;
                var7['width'] = var11;
                var7['height'] = var10;
                var7['accessoryType'] = var9;
                var7['attachmentId'] = var8;
                var1[1] = var7;
                var1 = var5.bind(var6)(var1);
                var1 = _closure2_slot0;
                var1 = var3 != var1;
                if(!var1) { _fun0003_ip = 771; continue _fun0003 }
 763:
                var3 = _closure2_slot0;
                var1 = var4 === var3;
 771:
                if(!var1) { _fun0003_ip = 782; continue _fun0003 }
 774:
                var1 = _closure2_slot2;
                _closure2_slot3 = var1;
 782:
                var1 = _closure2_slot2;
                var1 = var1 + 1;
                _closure2_slot2 = var1;
 793:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = {};
        var1['sources'] = var3;
        var2 = _closure2_slot3;
        var1['initialIndex'] = var2;
        return var1;
    };
    var _closure1_slot20 = var5;
    var4 = function handleVoiceOrStageChannelConnectPress() {
        var1 = undefined;
        var4 = _closure1_slot22;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var4;
    var1 = function _handleVoiceOrStageChannelConnectPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    StartGenerator();
                    var5 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 147; continue _fun0004 }
 13:
                    var2 = var5.isGuildStageVoice;
                    var4 = var2.bind(var5)();
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 25;
                    var6 = var2[var3];
                    var3 = undefined;
                    var6 = var7.bind(var3)(var6);
                    if(var4) { _fun0004_ip = 102; continue _fun0004 }
 51:
                    var4 = 29;
                    var7 = var2[var4];
                    var4 = var2.paths;
                    var4 = var6.bind(var3)(var7, var4);
                    SaveGenerator(address=73);
 71:
                    return var4;
 73:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                    if(var7) { _fun0004_ip = 99; continue _fun0004 }
 79:
                    var8 = var4.openGuildVoiceModal;
                    var7 = 'Channel List';
                    var7 = var8.bind(var3)(var5, var7);
                    _fun0004_ip = 141; continue _fun0004;
 99:
                    return var4;
 102:
                    var4 = 28;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var6.bind(var3)(var4, var2);
                    SaveGenerator(address=124);
 122:
                    return var2;
 124:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0004_ip = 144; continue _fun0004 }
 130:
                    var4 = var2.connectAndOpen;
                    var4 = var4.bind(var3)(var5);
 141:
                    return var3;
 144:
                    return var2;
 147:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot22 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot22 = var1;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var1 = true;
    var6['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var6);
    var1 = 0;
    var6 = var8[var1];
    var1 = undefined;
    var6 = var9.bind(var1)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = native4;
    var6 = var6.bind(var1)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.SearchMediaTypes;
    var _closure1_slot7 = var9;
    var9 = var6.SearchHistoryItemTypes;
    var _closure1_slot8 = var9;
    var6 = var6.SearchQueryTagTypes;
    var _closure1_slot9 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.SearchNavigatorScreens;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.SearchFilterAddLocations;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var9 = var6.Routes;
    var _closure1_slot12 = var9;
    var9 = var6.ComponentActions;
    var _closure1_slot13 = var9;
    var9 = var6.ME;
    var _closure1_slot14 = var9;
    var6 = var6.SearchTypes;
    var _closure1_slot15 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.StaticChannelRoute;
    var _closure1_slot16 = var6;
    var6 = 35;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/search_v2/native/hooks/useOnPressSearchItem.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = function useOnPressSearchLink(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var1 = arg2;
                var _closure3_slot0 = var1;
                var4 = _closure1_slot18;
                var3 = _closure2_slot0;
                var1 = undefined;
                var3 = var4.bind(var1)(var3);
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var7 = var6.bind(var1)(var4);
                var6 = var7.safeParseWithQuery;
                var4 = arg1;
                var7 = var6.bind(var7)(var4);
                var6 = null;
                if(!(var6 != var7)) { _fun0005_ip = 90; continue _fun0005 }
 70:
                var4 = var7.protocol;
                if(!(var6 != var4)) { _fun0005_ip = 90; continue _fun0005 }
 80:
                var4 = var7.hostname;
                if(!(var6 == var4)) { _fun0005_ip = 170; continue _fun0005 }
 90:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var4 = 12;
                var4 = var12[var4];
                var8 = var11.bind(var1)(var4);
                var6 = var8.presentFailedToast;
                var4 = 13;
                var9 = var12[var4];
                var9 = var11.bind(var1)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var4 = var12[var4];
                var4 = var11.bind(var1)(var4);
                var4 = var4.t;
                var4 = var4.XiqzAg;
                var4 = var9.bind(var10)(var4);
                var4 = var6.bind(var8)(var4);
                _fun0005_ip = 259; continue _fun0005;
 170:
                var6 = _closure1_slot1;
                var4 = _closure1_slot2;
                var3 = var4[var3];
                var6 = var6.bind(var1)(var3);
                var3 = var6.format;
                var6 = var3.bind(var6)(var7);
                var _closure3_slot1 = var6;
                var3 = _closure1_slot0;
                var2 = 14;
                var2 = var4[var2];
                var4 = var3.bind(var1)(var2);
                var3 = var4.handleClick;
                var2 = {};
                var2['href'] = var6;
                var6 = function onConfirm() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.openURL;
                    var1 = _closure3_slot1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2['onConfirm'] = var6;
                var5 = function trusted() {
                    var1 = _closure3_slot0;
                    return var1;
                };
                var2['trusted'] = var5;
                var2 = var3.bind(var4)(var2);
 259:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressSearchLink'] = var6;
    var6 = function useOnPressMessageItem(arg1) {
        var2 = arg1;
        var6 = var2.searchContext;
        var _closure2_slot0 = var6;
        var8 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 16;
        var3 = var9[var3];
        var5 = undefined;
        var4 = var8.bind(var5)(var3);
        var3 = var4.useNavigation;
        var7 = var3.bind(var4)();
        var _closure2_slot1 = var7;
        var4 = _closure1_slot4;
        var3 = var4.useContext;
        var2 = 17;
        var2 = var9[var2];
        var2 = var8.bind(var5)(var2);
        var2 = var2.SwipeForMemberListContext;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot2 = var5;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var8 = arg1;
                var4 = _closure1_slot5;
                var3 = var4.getChannel;
                var4 = var3.bind(var4)(var8);
                var _closure3_slot0 = var4;
                var3 = null;
                if(!(var3 != var4)) { _fun0006_ip = 119; continue _fun0006 }
 32:
                var5 = _closure1_slot18;
                var3 = _closure2_slot0;
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 18;
                var3 = var5[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.fetchMessages;
                var3 = arg2;
                var3 = var6.bind(var7)(var8, var3);
                var3 = _closure1_slot0;
                var2 = 9;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.performKeyboardAwareNavigation;
                var1 = function() {
                    var6 = _closure1_slot19;
                    var10 = _closure2_slot1;
                    var9 = _closure3_slot0;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot2;
                    var1 = undefined;
                    var11 = undefined;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
 119:
                var1 = undefined;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressMessageItem'] = var6;
    var3['getMediaViewerSources'] = var5;
    var5 = function useOnPressMediaItem(arg1) {
        var2 = arg1;
        var10 = var2.searchContext;
        var _closure2_slot0 = var10;
        var7 = var2.mediaResults;
        var _closure2_slot1 = var7;
        var6 = var2.onEndReached;
        var _closure2_slot2 = var6;
        var5 = var2.onEndReachedThreshold;
        var _closure2_slot3 = var5;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var3 = 16;
        var3 = var12[var3];
        var8 = undefined;
        var4 = var11.bind(var8)(var3);
        var3 = var4.useNavigation;
        var9 = var3.bind(var4)();
        var _closure2_slot4 = var9;
        var4 = _closure1_slot4;
        var3 = var4.useContext;
        var2 = 17;
        var2 = var12[var2];
        var2 = var11.bind(var8)(var2);
        var2 = var2.SwipeForMemberListContext;
        var8 = var3.bind(var4)(var2);
        var _closure2_slot5 = var8;
        var3 = var4.useCallback;
        var2 = new Array(6);
        var2[0] = var10;
        var2[1] = var9;
        var2[2] = var8;
        var2[3] = var7;
        var2[4] = var6;
        var2[5] = var5;
        var1 = function(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg1;
                var _closure3_slot0 = var4;
                var1 = arg2;
                var _closure3_slot1 = var1;
                var6 = _closure1_slot18;
                var5 = _closure2_slot0;
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var6 = var4.type;
                var5 = _closure1_slot7;
                var5 = var5.SOUND;
                if(!(var5 !== var6)) { _fun0007_ip = 141; continue _fun0007 }
 56:
                var5 = _closure1_slot7;
                var5 = var5.ATTACHMENT;
                if(!(var5 !== var6)) { _fun0007_ip = 84; continue _fun0007 }
 70:
                var5 = _closure1_slot7;
                var5 = var5.EMBED;
                if(!(var5 === var6)) { _fun0007_ip = 139; continue _fun0007 }
 84:
                var7 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 25;
                var6 = var5[var6];
                var7 = var7.bind(var1)(var6);
                var6 = 24;
                var6 = var5[var6];
                var5 = var5.paths;
                var7 = var7.bind(var1)(var6, var5);
                var6 = var7.then;
                var5 = function(arg1) {
                    var1 = arg1;
                    var4 = var1.openMediaModal;
                    var7 = _closure1_slot20;
                    var6 = _closure2_slot1;
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var6 = var7.bind(var1)(var6, var3);
                    var3 = {};
                    var7 = var6.sources;
                    var3['initialSources'] = var7;
                    var6 = var6.initialIndex;
                    var3['initialIndex'] = var6;
                    var6 = 'Search';
                    var3['analyticsSource'] = var6;
                    var6 = true;
                    var3['disableRemix'] = var6;
                    var6 = _closure2_slot2;
                    var3['onEndReached'] = var6;
                    var5 = _closure2_slot3;
                    var3['onEndReachedThreshold'] = var5;
                    var2 = _closure3_slot1;
                    var2 = var4.bind(var1)(var3, var2);
                    return var1;
                };
                var5 = var6.bind(var7)(var5);
 139:
                return var1;
 141:
                var7 = _closure1_slot5;
                var6 = var7.getChannel;
                var5 = var4.channelId;
                var6 = var6.bind(var7)(var5);
                var _closure3_slot2 = var6;
                var5 = null;
                if(!(var5 != var6)) { _fun0007_ip = 250; continue _fun0007 }
 170:
                var7 = _closure1_slot1;
                var5 = _closure1_slot2;
                var6 = 18;
                var6 = var5[var6];
                var8 = var7.bind(var1)(var6);
                var7 = var8.fetchMessages;
                var6 = var4.channelId;
                var4 = var4.messageId;
                var4 = var7.bind(var8)(var6, var4);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.performKeyboardAwareNavigation;
                var2 = function() {
                    var6 = _closure1_slot19;
                    var10 = _closure2_slot4;
                    var9 = _closure3_slot2;
                    var8 = _closure2_slot0;
                    var7 = _closure2_slot5;
                    var1 = undefined;
                    var11 = undefined;
                    var2 = var11[var6](var10, var9, var8, var7, var6);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var2 = undefined;
                return var2;
 250:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressMediaItem'] = var5;
    var5 = function useOnPressGroupDMItem(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 16;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.useNavigation;
        var6 = var3.bind(var4)();
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var8 = arg1;
                var _closure3_slot0 = var8;
                var7 = _closure1_slot17;
                var6 = _closure2_slot0;
                var5 = {};
                var1 = _closure1_slot8;
                var1 = var1.GROUP_DM;
                var5['type'] = var1;
                var5['channelId'] = var8;
                var1 = undefined;
                var5 = var7.bind(var1)(var6, var5);
                var5 = _closure2_slot1;
                var4 = var5.getParent;
                var5 = var4.bind(var5)();
                var4 = null;
                if(!(var4 != var5)) { _fun0008_ip = 81; continue _fun0008 }
 71:
                var4 = var5.goBack;
                var4 = var4.bind(var5)();
 81:
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var4 = 26;
                var4 = var5[var4];
                var7 = var6.bind(var1)(var4);
                var6 = var7.preload;
                var4 = _closure1_slot14;
                var4 = var6.bind(var7)(var4, var8);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var5[var3];
                var4 = var4.bind(var1)(var3);
                var3 = var4.performKeyboardAwareNavigation;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.transitionToChannel;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressGroupDMItem'] = var5;
    var5 = function useOnPressDMItem(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 16;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var6.bind(var3)(var4);
        var3 = var4.useNavigation;
        var6 = var3.bind(var4)();
        var _closure2_slot1 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var1 = arg2;
                var _closure3_slot0 = var1;
                var8 = _closure1_slot17;
                var7 = _closure2_slot0;
                var6 = {};
                var5 = _closure1_slot8;
                var5 = var5.DM;
                var6['type'] = var5;
                var5 = arg1;
                var6['userId'] = var5;
                var5 = undefined;
                var6 = var8.bind(var5)(var7, var6);
                var6 = _closure2_slot1;
                var4 = var6.getParent;
                var6 = var4.bind(var6)();
                var4 = null;
                if(!(var4 != var6)) { _fun0009_ip = 84; continue _fun0009 }
 74:
                var4 = var6.goBack;
                var4 = var4.bind(var6)();
 84:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 26;
                var4 = var6[var4];
                var8 = var7.bind(var5)(var4);
                var7 = var8.preload;
                var4 = _closure1_slot14;
                var4 = var7.bind(var8)(var4, var1);
                var4 = _closure1_slot0;
                var3 = 9;
                var3 = var6[var3];
                var4 = var4.bind(var5)(var3);
                var3 = var4.performKeyboardAwareNavigation;
                var2 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.transitionToChannel;
                    var2 = _closure3_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressDMItem'] = var5;
    var5 = function useOnPressGuildTextChannel(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = _closure1_slot5;
                var2 = var5.getChannel;
                var1 = arg1;
                var5 = var2.bind(var5)(var1);
                var _closure3_slot0 = var5;
                var1 = null;
                if(!(var1 != var5)) { _fun0010_ip = 157; continue _fun0010 }
 35:
                var8 = _closure1_slot17;
                var7 = _closure2_slot0;
                var6 = {};
                var2 = _closure1_slot8;
                var2 = var2.GUILD_TEXT_CHANNEL;
                var6['type'] = var2;
                var2 = var5.id;
                var6['channelId'] = var2;
                var2 = undefined;
                var6 = var8.bind(var2)(var7, var6);
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var7 = 26;
                var7 = var6[var7];
                var9 = var8.bind(var2)(var7);
                var8 = var9.preload;
                var7 = var5.guild_id;
                var5 = var5.id;
                var5 = var8.bind(var9)(var7, var5);
                var5 = _closure1_slot0;
                var4 = 9;
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.performKeyboardAwareNavigation;
                var3 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 27;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.transitionToChannel;
                    var1 = _closure3_slot0;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                return var2;
 157:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressGuildTextChannel'] = var5;
    var3['handleVoiceOrStageChannelConnectPress'] = var4;
    var4 = function useOnPressGuildVoiceChannel(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 16;
        var3 = var4[var3];
        var4 = undefined;
        var6 = var6.bind(var4)(var3);
        var3 = var6.useNavigation;
        var7 = var3.bind(var6)();
        var _closure2_slot1 = var7;
        var3 = function useVoiceChannelOnPressHandler() {
            var4 = _closure1_slot4;
            var3 = var4.useCallback;
            var2 = function() {
                var4 = _closure1_slot3;
                var3 = undefined;
                var2 = function* (arg1) {
                    var1 = function* anon_0_(arg1) {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            StartGenerator();
                            var5 = arg1;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0011_ip = 269; continue _fun0011 }
 15:
                            var _closure6_slot0 = var5;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 30;
                            var3 = var7[var3];
                            var7 = undefined;
                            var8 = var6.bind(var7)(var3);
                            var6 = var8.getChannelRoleSubscriptionStatus;
                            var3 = var5.id;
                            var3 = var6.bind(var8)(var3);
                            var3 = var3.needSubscriptionToAccess;
                            var6 = var5.getGuildId;
                            var6 = var6.bind(var5)();
                            var8 = null;
                            if(!(var8 != var6)) { _fun0011_ip = 116; continue _fun0011 }
 82:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 31;
                            var8 = var10[var8];
                            var9 = var9.bind(var7)(var8);
                            var8 = var9.shouldShowMembershipVerificationGate;
                            var8 = var8.bind(var9)(var6);
                            if(var8) { _fun0011_ip = 196; continue _fun0011 }
 116:
                            if(var3) { _fun0011_ip = 132; continue _fun0011 }
 119:
                            var3 = _closure1_slot21;
                            var3 = var3.bind(var7)(var5);
                            var3 = undefined;
                            _fun0011_ip = 194; continue _fun0011;
 132:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var8 = 33;
                            var8 = var10[var8];
                            var9 = var9.bind(var7)(var8);
                            var8 = var9.transitionTo;
                            var12 = _closure1_slot12;
                            var11 = var12.CHANNEL;
                            var10 = var5.guild_id;
                            var5 = _closure1_slot16;
                            var5 = var5.ROLE_SUBSCRIPTIONS;
                            var5 = var11.bind(var12)(var10, var5);
                            var3 = var8.bind(var9)(var5);
 194:
                            _fun0011_ip = 263; continue _fun0011;
 196:
                            var8 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var5 = 25;
                            var5 = var2[var5];
                            var8 = var8.bind(var7)(var5);
                            var5 = 32;
                            var5 = var2[var5];
                            var2 = var2.paths;
                            var2 = var8.bind(var7)(var5, var2);
                            SaveGenerator(address=238);
 236:
                            return var2;
 238:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0011_ip = 266; continue _fun0011 }
 244:
                            var5 = var2.openMemberVerificationModal;
                            var4 = function() {
                                var3 = _closure1_slot21;
                                var2 = _closure6_slot0;
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var3 = var5.bind(var7)(var6, var4);
 263:
                            return var3;
 266:
                            return var2;
 269:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure4_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure4_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var1 = undefined;
            var2 = var2.bind(var1)();
            var1 = new Array(0);
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var6 = var3.bind(var4)();
        var _closure2_slot2 = var6;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var5 = _closure1_slot5;
                var2 = var5.getChannel;
                var1 = arg1;
                var2 = var2.bind(var5)(var1);
                var _closure3_slot0 = var2;
                var1 = null;
                if(!(var1 != var2)) { _fun0012_ip = 144; continue _fun0012 }
 32:
                var8 = _closure1_slot17;
                var7 = _closure2_slot0;
                var6 = {};
                var9 = _closure1_slot8;
                var9 = var9.GUILD_VOICE_CHANNEL;
                var6['type'] = var9;
                var2 = var2.id;
                var6['channelId'] = var2;
                var2 = undefined;
                var6 = var8.bind(var2)(var7, var6);
                var6 = _closure2_slot1;
                var5 = var6.getParent;
                var6 = var5.bind(var6)();
                if(!(var1 != var6)) { _fun0012_ip = 104; continue _fun0012 }
 94:
                var5 = var6.goBack;
                var5 = var5.bind(var6)();
 104:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 9;
                var4 = var6[var4];
                var5 = var5.bind(var2)(var4);
                var4 = var5.performKeyboardAwareNavigation;
                var3 = function() {
                    var3 = _closure2_slot2;
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var4.bind(var5)(var3);
                return var2;
 144:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressGuildVoiceChannel'] = var4;
    var2 = function useOnPressSearchHistoryText(arg1) {
        var2 = arg1;
        var5 = var2.searchContext;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useCallback;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function(arg1, arg2) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                var1 = arg1;
                var4 = arg2;
                var _closure3_slot0 = var1;
                var _closure3_slot1 = var4;
                var7 = _closure1_slot17;
                var6 = _closure2_slot0;
                var5 = {};
                var8 = _closure1_slot8;
                var8 = var8.TEXT;
                var5['type'] = var8;
                var5['text'] = var1;
                var5['tags'] = var4;
                var1 = undefined;
                var5 = var7.bind(var1)(var6, var5);
                var8 = _closure1_slot6;
                var7 = var8.setState;
                var5 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var3 = arg1;
                        var4 = _closure3_slot1;
                        var2 = null;
                        if(!(var2 != var4)) { _fun0014_ip = 31; continue _fun0014 }
 16:
                        var4 = var3.setTags;
                        var2 = _closure3_slot1;
                        var2 = var4.bind(var3)(var2);
 31:
                        var2 = var3.setTextInputValue;
                        var1 = _closure3_slot0;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var5 = var7.bind(var8)(var6, var5);
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var3 = 9;
                var3 = var7[var3];
                var5 = var5.bind(var1)(var3);
                var3 = var5.fetchInitialMessages;
                var3 = var3.bind(var5)(var6);
                var3 = null;
                if(!(var3 != var4)) { _fun0013_ip = 140; continue _fun0013 }
 123:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var5 = arg1;
                        var2 = var5.type;
                        var1 = _closure1_slot9;
                        var1 = var1.COMPLETE;
                        if(!(var2 === var1)) { _fun0015_ip = 97; continue _fun0015 }
 25:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 34;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.trackSearchFilterAdd;
                        var1 = {};
                        var6 = _closure2_slot0;
                        var1['searchContext'] = var6;
                        var5 = var5.searchTokenType;
                        var1['searchTokenType'] = var5;
                        var4 = _closure1_slot11;
                        var4 = var4.SEARCH_HISTORY;
                        var1['location'] = var4;
                        var1 = var2.bind(var3)(var1);
 97:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
 140:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['useOnPressSearchHistoryText'] = var2;
    return var1;
})();
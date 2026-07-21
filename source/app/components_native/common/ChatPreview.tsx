// app/components_native/common/ChatPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var8 = metroImportAll;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot25 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var2 = function ChatPreview(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var8 = arg1;
            var1 = var8.channelId;
            var _closure2_slot0 = var1;
            var6 = _closure1_slot0;
            var15 = _closure1_slot3;
            var3 = 47;
            var5 = var15[var3];
            var4 = undefined;
            var5 = var6.bind(var4)(var5);
            var7 = var5.InlineAttachmentMedia;
            var5 = var7.useSetting;
            var14 = var5.bind(var7)();
            var5 = var15[var3];
            var5 = var6.bind(var4)(var5);
            var7 = var5.InlineEmbedMedia;
            var5 = var7.useSetting;
            var13 = var5.bind(var7)();
            var3 = var15[var3];
            var3 = var6.bind(var4)(var3);
            var5 = var3.RenderEmbeds;
            var3 = var5.useSetting;
            var12 = var3.bind(var5)();
            var3 = 48;
            var5 = var15[var3];
            var10 = var6.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot11;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var1 = _closure1_slot11;
                var1 = var1.roleStyle;
                return var1;
            };
            var11 = var9.bind(var10)(var7, var5);
            var5 = var15[var3];
            var10 = var6.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot13;
            var7 = new Array(1);
            var7[0] = var5;
            var5 = function() {
                var3 = _closure1_slot13;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var9.bind(var10)(var7, var5);
            var7 = _closure1_slot1;
            var5 = 49;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var5 = var5.bind(var4)();
            var9 = var5.width;
            var5 = 50;
            var5 = var15[var5];
            var7 = var6.bind(var4)(var5);
            var5 = var7.useIsChannelSpoilerGated;
            var7 = var5.bind(var7)(var10);
            var5 = 51;
            var5 = var15[var5];
            var16 = var6.bind(var4)(var5);
            var5 = var16.useIsChannelContentGated;
            var5 = var5.bind(var16)(var10);
            var3 = var15[var3];
            var15 = var6.bind(var4)(var3);
            var6 = var15.useStateFromStores;
            var16 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var16;
            var2 = function() {
                var2 = _closure1_slot12;
                var1 = var2.getContent;
                var2 = var1.bind(var2)();
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var6 = var6.bind(var15)(var3, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot24;
            var1 = {};
            var18 = var1;
            var17 = var8;
            var8 = copyDataProperties(var18, var17);
            var8 = 'inlineAttachmentMedia';
            var1[7] = var14;
            var8 = 'inlineEmbedMedia';
            var1[7] = var13;
            var8 = 'renderEmbeds';
            var1[7] = var12;
            var8 = 'roleStyle';
            var1[7] = var11;
            var8 = 'channel';
            var1[7] = var10;
            var8 = 'width';
            var1[7] = var9;
            var8 = 'isSpoilerHidden';
            var1[7] = var7;
            var8 = 'isNSFWHidden';
            var1[7] = var5;
            var7 = !var7;
            if(!var7) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = !var5;
case 6:
            var5 = 'canAccessChannel';
            var1[4] = var7;
            var5 = 'hasActionSheetOpen';
            var1[4] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var2;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var5 = {};
    var9 = true;
    var5['value'] = var9;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var5);
    var16 = 0;
    var5 = var7[var16];
    var1 = undefined;
    var5 = var14.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var13 = 1;
    var5 = var7[var13];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot9 = var5;
    var8 = 6;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var15 = var8.StyleSheet;
    var8 = var8.View;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot11 = var8;
    var8 = 8;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 10;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = 11;
    var8 = var7[var8];
    var8 = var14.bind(var1)(var8);
    var _closure1_slot15 = var8;
    var8 = 12;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.AnalyticsObjects;
    var _closure1_slot16 = var10;
    var8 = var8.AnalyticsSections;
    var _closure1_slot17 = var8;
    var8 = 13;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.Changeset;
    var _closure1_slot18 = var10;
    var10 = var8.RowType;
    var _closure1_slot19 = var10;
    var8 = var8.SeparatorType;
    var _closure1_slot20 = var8;
    var8 = 14;
    var8 = var7[var8];
    var8 = var6.bind(var1)(var8);
    var10 = var8.jsx;
    var _closure1_slot21 = var10;
    var8 = var8.jsxs;
    var _closure1_slot22 = var8;
    var8 = 15;
    var8 = var7[var8];
    var11 = var6.bind(var1)(var8);
    var10 = var11.createLegacyClassComponentStyles;
    var8 = {};
    var12 = {'flex': 1, 'overflow': 'hidden'};
    var8['chat'] = var12;
    var12 = {};
    var12['flex'] = var13;
    var13 = 16;
    var17 = var7[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_BASE_LOW;
    var12['backgroundColor'] = var17;
    var8['containerInner'] = var12;
    var12 = {};
    var12['flexShrink'] = var16;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_SURFACE_HIGH;
    var12['backgroundColor'] = var16;
    var8['jumpToChatButtonContainer'] = var12;
    var12 = {};
    var16 = 44;
    var12['height'] = var16;
    var15 = var15.hairlineWidth;
    var12['borderTopWidth'] = var15;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12['borderTopColor'] = var13;
    var8['jumpToChatButton'] = var12;
    var12 = {'textAlign': 'center', 'flex': 1, 'lineHeight': 44};
    var8['jumpToChatText'] = var12;
    var8 = var10.bind(var11)(var8);
    var _closure1_slot23 = var8;
    var8 = var5.PureComponent;
    var5 = function(arg1) {
        var4 = function ChatPreviewBase(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = this;
                var14 = 0;
                var1 = copyRestArgs(var14);
                var8 = _closure1_slot4;
                var4 = _closure2_slot0;
                var6 = undefined;
                var8 = var8.bind(var6)(var5, var4);
                var11 = new Array(0);
                var14 = var11;
                var13 = var1;
                var12 = 0;
                var1 = arraySpread(var14, var13, var12);
                var1 = _closure1_slot7;
                var10 = var1.bind(var6)(var4);
                var4 = _closure1_slot6;
                var1 = _closure1_slot25;
                var1 = var1.bind(var6)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var6)(var5);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 10:
                var1 = var4.bind(var6)(var5, var1);
                var _closure3_slot0 = var1;
                var5 = _closure1_slot1;
                var7 = _closure1_slot3;
                var4 = 17;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var8 = var4.prototype;
                var8 = Object.create(var8, {constructor: {value: var4}});
                var15 = var8;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var8;
                var1['chatManager'] = var4;
                var4 = 18;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var5 = var4.prototype;
                var5 = Object.create(var5, {constructor: {value: var4}});
                var15 = var5;
                var4 = new var15[var4](var14);
                var4 = var4 instanceof Object ? var4 : var5;
                var1['rowGenerator'] = var4;
                var4 = _closure1_slot9;
                var3 = var4.createRef;
                var3 = var3.bind(var4)();
                var1['chatRef'] = var3;
                var3 = false;
                var1['didPositionInitialScroll'] = var3;
                var3 = function() {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var2 = var2.initialScrollToTop;
                        if(!var2) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                        var3 = _closure3_slot0;
                        var3 = var3.didPositionInitialScroll;
                        var2 = !var3;
case 11:
                        if(!var2) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                        var1 = _closure3_slot0;
                        var2 = true;
                        var1['didPositionInitialScroll'] = var2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 19;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.scrollToTopMessage;
                        var2 = var1.chatRef;
                        var1 = var1.chatManager;
                        var1 = var3.bind(var4)(var2, var1);
case 13:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleCompleteFirstLayout'] = var3;
                var3 = function() {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                        var5 = false;
case 15:
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var _closure4_slot4 = var1;
                        var _closure4_slot5 = var1;
                        var _closure4_slot6 = var1;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var6 = var3.channel;
                        _closure4_slot0 = var6;
                        var11 = var3.messages;
                        _closure4_slot1 = var11;
                        var6 = var3.roleStyle;
                        _closure4_slot2 = var6;
                        var8 = var3.jumpTargetId;
                        var13 = var3.inlineAttachmentMedia;
                        var14 = var3.inlineEmbedMedia;
                        var15 = var3.renderEmbeds;
                        var6 = var3.initialScrollToTop;
                        var7 = null;
                        if(!(var7 != var11)) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                        var3 = _closure3_slot0;
                        var12 = var3.rowGenerator;
                        var10 = var12.setOptions;
                        var9 = {};
                        var9['renderEmbeds'] = var15;
                        var9['inlineEmbedMedia'] = var14;
                        var9['inlineAttachmentMedia'] = var13;
                        var13 = var3.props;
                        var13 = var13.width;
                        var9['constrainedWidth'] = var13;
                        var9 = var10.bind(var12)(var9);
                        var9 = var3.chatManager;
                        var3 = var9.setup;
                        var3 = var3.bind(var9)(var11);
                        var9 = _closure1_slot18;
                        if(var5) { _fun0005_ip = 19; continue _fun0005 }
case 20:
                        var5 = var9.NOOP;
                        _fun0005_ip = 21; continue _fun0005;
case 19:
                        var5 = var9.UPDATE;
case 21:
                        _closure4_slot3 = var5;
                        var5 = _closure3_slot0;
                        var9 = var5.chatManager;
                        var5 = var9.getPreviousMessages;
                        var13 = var5.bind(var9)();
                        var9 = global;
                        var10 = var9.Array;
                        var5 = var10.isArray;
                        var10 = var5.bind(var10)(var13);
                        var5 = null;
                        if(!var10) { _fun0005_ip = 22; continue _fun0005 }
case 23:
                        var12 = var9.Map;
                        var10 = var13.map;
                        var9 = function(arg1) {
                            var2 = arg1;
                            var3 = var2.id;
                            var1 = new Array(2);
                            var1[0] = var3;
                            var1[1] = var2;
                            return var1;
                        };
                        var17 = var10.bind(var13)(var9);
                        var10 = var12.prototype;
                        var10 = Object.create(var10, {constructor: {value: var12}});
                        var18 = var10;
                        var9 = new var18[var12](var17, var16);
                        var5 = var9 instanceof Object ? var9 : var10;
case 22:
                        _closure4_slot4 = var5;
                        var10 = new Array(0);
                        _closure4_slot5 = var10;
                        var9 = var11.forEach;
                        var5 = function(arg1) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                var4 = arg1;
                                var3 = _closure4_slot5;
                                var2 = 0;
                                var3 = var3[var2];
                                var2 = null;
                                if(!(var2 == var3)) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                                var6 = _closure4_slot5;
                                var5 = var6.unshift;
                                var2 = new Array(1);
                                var2[0] = var4;
                                var2 = var5.bind(var6)(var2);
                                _fun0006_ip = 26; continue _fun0006;
case 24:
                                var5 = var3.length;
                                var2 = 1;
                                var2 = var5 - var2;
                                var7 = var3[var2];
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var2 = 20;
                                var2 = var6[var2];
                                var6 = undefined;
                                var5 = var5.bind(var6)(var2);
                                var2 = _closure4_slot0;
                                var2 = var5.bind(var6)(var2, var7, var4);
                                if(var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                                var2 = var3.unshift;
                                var2 = var2.bind(var3)(var4);
                                _fun0006_ip = 26; continue _fun0006;
case 27:
                                var3 = _closure4_slot5;
                                var2 = var3.unshift;
                                var1 = new Array(1);
                                var1[0] = var4;
                                var1 = var2.bind(var3)(var1);
case 26:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = var9.bind(var11)(var5);
                        var9 = new Array(0);
                        _closure4_slot6 = var9;
                        var5 = var10.forEach;
                        var4 = function(arg1, arg2) {
                            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                                var11 = arg1;
                                var _closure5_slot0 = var11;
                                var1 = var11.length;
                                var8 = 1;
                                var1 = var1 - var8;
                                var4 = var11[var1];
                                var _closure5_slot1 = var4;
                                var2 = _closure4_slot5;
                                var1 = var2.length;
                                var1 = var1 - var8;
                                var1 = var2[var1];
                                var2 = var1 === var11;
                                var10 = false;
                                var _closure5_slot2 = var10;
                                var7 = null;
                                var12 = null;
                                if(var2) { _fun0007_ip = 29; continue _fun0007 }
case 30:
                                var3 = _closure4_slot5;
                                var1 = arg2;
                                var1 = var1 + var8;
                                var3 = var3[var1];
                                var1 = 0;
                                var1 = var3[var1];
                                var12 = var1.timestamp;
case 29:
                                if(var2) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                                var2 = var7 == var12;
case 31:
                                if(var2) { _fun0007_ip = 33; continue _fun0007 }
case 34:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 21;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var3);
                                var3 = var5.isSameDay;
                                var1 = var4.timestamp;
                                var2 = var3.bind(var5)(var1, var12);
case 33:
                                var1 = false;
                                if(var2) { _fun0007_ip = 35; continue _fun0007 }
case 36:
                                var2 = true;
                                _closure5_slot2 = var2;
                                var1 = true;
case 35:
                                var2 = function processHiddenMessageRow(arg1) {
                                    var1 = arg1;
                                    var _closure6_slot0 = var1;
                                    var5 = _closure5_slot0;
                                    var4 = var5.forEach;
                                    var3 = function(arg1) {
                                        var5 = arg1;
                                        var1 = _closure6_slot0;
                                        var3 = var1.content;
                                        var2 = var3.unshift;
                                        var1 = {};
                                        var6 = _closure1_slot19;
                                        var6 = var6.MESSAGE;
                                        var1['rowType'] = var6;
                                        var4 = _closure1_slot18;
                                        var4 = var4.NOOP;
                                        var1['changeType'] = var4;
                                        var4 = _closure4_slot2;
                                        var1['roleStyle'] = var4;
                                        var1['message'] = var5;
                                        var4 = _closure5_slot1;
                                        var4 = var5 === var4;
                                        var1['isFirst'] = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        return var1;
                                    };
                                    var3 = var4.bind(var5)(var3);
                                    var2 = _closure5_slot1;
                                    var4 = var2.id;
                                    var3 = _closure4_slot1;
                                    var3 = var3.revealedMessageId;
                                    var3 = var4 === var3;
                                    var1['revealed'] = var3;
                                    var2 = var2.id;
                                    var1['context'] = var2;
                                    return var1;
                                };
                                var5 = _closure4_slot6;
                                var3 = var5.length;
                                var3 = var3 - var8;
                                var3 = var5[var3];
                                var8 = {};
                                var5 = _closure4_slot2;
                                var8['roleStyle'] = var5;
                                var12 = _closure1_slot19;
                                var12 = var12.BLOCKED_GROUP;
                                var8['rowType'] = var12;
                                var12 = _closure4_slot3;
                                var8['changeType'] = var12;
                                var8['message'] = var4;
                                var12 = true;
                                var8['isFirst'] = var12;
                                var12 = new Array(0);
                                var8['content'] = var12;
                                var12 = '';
                                var8['text'] = var12;
                                var8['revealed'] = var10;
                                var10 = var4.blocked;
                                if(var10) { _fun0007_ip = 37; continue _fun0007 }
case 38:
                                var10 = var4.ignored;
                                if(var10) { _fun0007_ip = 39; continue _fun0007 }
case 40:
                                var10 = var11.forEach;
                                var9 = function(arg1) {
                                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                        var6 = arg1;
                                        var2 = _closure4_slot4;
                                        var1 = null;
                                        if(!(var1 != var2)) { _fun0008_ip = 41; continue _fun0008 }
case 42:
                                        var3 = _closure4_slot4;
                                        var2 = var3.get;
                                        var1 = var6.id;
                                        var1 = var2.bind(var3)(var1);
                                        if(!(var1 === var6)) { _fun0008_ip = 43; continue _fun0008 }
case 41:
                                        var4 = _closure4_slot3;
                                        _fun0008_ip = 44; continue _fun0008;
case 43:
                                        var1 = _closure1_slot18;
                                        var4 = var1.UPDATE;
case 44:
                                        var3 = _closure4_slot6;
                                        var2 = var3.push;
                                        var1 = {};
                                        var5 = _closure4_slot2;
                                        var1['roleStyle'] = var5;
                                        var5 = _closure1_slot19;
                                        var5 = var5.MESSAGE;
                                        var1['rowType'] = var5;
                                        var1['changeType'] = var4;
                                        var1['message'] = var6;
                                        var4 = _closure5_slot1;
                                        var7 = var6 === var4;
                                        var1['isFirst'] = var7;
                                        var7 = false;
                                        var1['isEditing'] = var7;
                                        var6 = var6 !== var4;
                                        var4 = !var6;
                                        if(var6) { _fun0008_ip = 45; continue _fun0008 }
case 26:
                                        var4 = _closure5_slot2;
case 45:
                                        var1['separatorBefore'] = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var9 = var10.bind(var11)(var9);
                                _fun0007_ip = 46; continue _fun0007;
case 39:
                                var9 = var7 != var3;
                                if(!var9) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                                var11 = var3.rowType;
                                var10 = _closure1_slot19;
                                var10 = var10.IGNORED_GROUP;
                                var9 = var11 === var10;
case 47:
                                var10 = var3;
                                if(var9) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                                var9 = {};
                                var17 = var9;
                                var16 = var8;
                                var11 = copyDataProperties(var17, var16);
                                var11 = _closure1_slot19;
                                var12 = var11.IGNORED_GROUP;
                                var11 = 'rowType';
                                var9[10] = var12;
                                var12 = _closure4_slot6;
                                var11 = var12.push;
                                var11 = var11.bind(var12)(var9);
                                var10 = var9;
case 49:
                                var14 = undefined;
                                var9 = var2.bind(var14)(var10);
                                var11 = _closure1_slot0;
                                var15 = _closure1_slot3;
                                var9 = 22;
                                var12 = var15[var9];
                                var12 = var11.bind(var14)(var12);
                                var13 = var12.intl;
                                var12 = var13.formatToPlainString;
                                var9 = var15[var9];
                                var9 = var11.bind(var14)(var9);
                                var9 = var9.t;
                                var11 = var9.VFWjc+;
                                var9 = {};
                                var14 = var10.content;
                                var14 = var14.length;
                                var9['count'] = var14;
                                var9 = var12.bind(var13)(var11, var9);
                                var10['text'] = var9;
                                _fun0007_ip = 46; continue _fun0007;
case 37:
                                var7 = var7 != var3;
                                if(!var7) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                                var10 = var3.rowType;
                                var9 = _closure1_slot19;
                                var9 = var9.BLOCKED_GROUP;
                                var7 = var10 === var9;
case 51:
                                if(var7) { _fun0007_ip = 53; continue _fun0007 }
case 54:
                                var7 = {};
                                var17 = var7;
                                var16 = var8;
                                var8 = copyDataProperties(var17, var16);
                                var8 = _closure1_slot19;
                                var9 = var8.BLOCKED_GROUP;
                                var8 = 'rowType';
                                var7[7] = var9;
                                var9 = _closure4_slot6;
                                var8 = var9.push;
                                var8 = var8.bind(var9)(var7);
                                var3 = var7;
case 53:
                                var10 = undefined;
                                var2 = var2.bind(var10)(var3);
                                var7 = _closure1_slot0;
                                var11 = _closure1_slot3;
                                var2 = 22;
                                var8 = var11[var2];
                                var8 = var7.bind(var10)(var8);
                                var9 = var8.intl;
                                var8 = var9.formatToPlainString;
                                var2 = var11[var2];
                                var2 = var7.bind(var10)(var2);
                                var2 = var2.t;
                                var7 = var2["+FcYM/"];
                                var2 = {};
                                var10 = var3.content;
                                var10 = var10.length;
                                var2['count'] = var10;
                                var2 = var8.bind(var9)(var7, var2);
                                var3['text'] = var2;
case 46:
                                if(!var1) { _fun0007_ip = 55; continue _fun0007 }
case 56:
                                var3 = _closure4_slot6;
                                var2 = var3.push;
                                var1 = {};
                                var7 = _closure4_slot2;
                                var1['roleStyle'] = var7;
                                var7 = _closure1_slot20;
                                var7 = var7.DAY;
                                var1['rowType'] = var7;
                                var6 = _closure4_slot3;
                                var1['changeType'] = var6;
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot3;
                                var5 = 21;
                                var6 = var6[var5];
                                var5 = undefined;
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.dateFormat;
                                var5 = var4.timestamp;
                                var4 = 'LL';
                                var4 = var6.bind(var7)(var5, var4);
                                var1['text'] = var4;
                                var1 = var2.bind(var3)(var1);
case 55:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = var5.bind(var10)(var4);
                        var4 = var9.length;
                        var5 = 0;
                        var4 = var5 < var4;
                        if(!var4) { _fun0005_ip = 57; continue _fun0005 }
case 58:
                        var13 = var9[var5];
                        var4 = _closure3_slot0;
                        var11 = var4.chatManager;
                        var10 = var11.createRow;
                        var12 = var4.rowGenerator;
                        var4 = var12.generate;
                        var4 = var4.bind(var12)(var13);
                        var4 = var10.bind(var11)(var4);
                        var5 = var5 + 1;
                        var4 = var9.length;
                        if(var5 < var4) { _fun0005_ip = 58; continue _fun0005 }
case 57:
                        var4 = _closure3_slot0;
                        var9 = var4.chatManager;
                        var5 = var9.createChangeset;
                        var5 = var5.bind(var9)();
                        var9 = var4.chatManager;
                        var4 = var9.getPreviousRows;
                        var9 = var4.bind(var9)();
                        var4 = undefined;
                        if(var6) { _fun0005_ip = 59; continue _fun0005 }
case 60:
                        var6 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var3 = 23;
                        var3 = var10[var3];
                        var6 = var6.bind(var1)(var3);
                        var3 = {};
                        var3['rows'] = var9;
                        var3['scrollToMessageId'] = var8;
                        var3['jumpTargetId'] = var8;
                        var3['jumpType'] = var1;
                        var8 = false;
                        var3['shouldInitialScroll'] = var8;
                        var3['animated'] = var8;
                        var3['scrollPosition'] = var1;
                        var3['focusTargetId'] = var7;
                        var4 = var6.bind(var1)(var3);
case 59:
                        var3 = _closure3_slot0;
                        var2 = var3.updateContent;
                        var2 = var2.bind(var3)(var5, var4);
case 17:
                        return var1;
                    }
                };
                var1['setup'] = var3;
                var3 = function(arg1, arg2) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.chatRef;
                        var4 = var1.current;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0009_ip = 8; continue _fun0009 }
case 61:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 24;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.updateRows;
                        var1 = {};
                        var5 = arg1;
                        var1['rows'] = var5;
                        var5 = false;
                        var1['isLoadingAtTop'] = var5;
                        var5 = arg2;
                        var1['scrollData'] = var5;
                        var1 = var2.bind(var3)(var4, var1);
case 8:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['updateContent'] = var3;
                var3 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot3;
                    var2 = 25;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.find;
                    var2 = _closure3_slot0;
                    var2 = var2.props;
                    var2 = var2.messages;
                    var1 = function(arg1) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.id;
                            var3 = var1.nonce;
                            var1 = _closure4_slot0;
                            var1 = var4 === var1;
                            if(var1) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
case 62:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['getMessage'] = var3;
                var3 = function() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.onBeforeJumpToMessage;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0011_ip = 43; continue _fun0011 }
case 64:
                        var4 = _closure3_slot0;
                        var5 = var4.props;
                        var4 = var5.onBeforeJumpToMessage;
                        var4 = var4.bind(var5)();
case 43:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var4 = var2.channelId;
                        var _closure4_slot0 = var4;
                        var2 = var2.jumpTargetId;
                        var _closure4_slot1 = var2;
                        if(!(var3 != var2)) { _fun0011_ip = 65; continue _fun0011 }
case 66:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var3 = var2.bind(var3)();
                        var2 = var3.then;
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 26;
                            var2 = var2[var1];
                            var1 = undefined;
                            var6 = var3.bind(var1)(var2);
                            var5 = var6.transitionToMessage;
                            var4 = _closure4_slot0;
                            var3 = _closure4_slot1;
                            var2 = {};
                            var7 = true;
                            var2['navigationReplace'] = var7;
                            var2 = var5.bind(var6)(var4, var3, var2);
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
case 65:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleJumpToChat'] = var3;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var1 = arg1;
                        var7 = var1.nativeEvent;
                        var1 = var7.data;
                        var3 = var1.action;
                        var2 = 'bindJumpToMessage';
                        if(!(var2 === var3)) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                        var2 = var1.targetChannelId;
                        var4 = null;
                        if(!(var4 != var2)) { _fun0012_ip = 67; continue _fun0012 }
case 69:
                        var2 = var1.targetMessageId;
                        if(!(var4 == var2)) { _fun0012_ip = 70; continue _fun0012 }
case 67:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 27;
                        var3 = var3[var2];
                        var2 = undefined;
                        var6 = var5.bind(var2)(var3);
                        var5 = var6.handleMessagesTapLink;
                        var3 = {};
                        var8 = true;
                        var3['allowWithinModal'] = var8;
                        var3['chatInputRef'] = var2;
                        var8 = function handleTransitionToThread(arg1, arg2, arg3) {
                            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.onBeforeJumpToMessage;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0013_ip = 71; continue _fun0013 }
case 61:
                                var1 = _closure3_slot0;
                                var3 = var1.props;
                                var1 = var3.onBeforeJumpToMessage;
                                var1 = var1.bind(var3)();
case 71:
                                var5 = _closure1_slot13;
                                var4 = var5.getChannel;
                                var3 = arg2;
                                var4 = var4.bind(var5)(var3);
                                if(!(var2 != var4)) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 26;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.transitionToThread;
                                var1 = {};
                                var5 = arg3;
                                var1['source'] = var5;
                                var5 = true;
                                var1['navigationReplace'] = var5;
                                var1 = var2.bind(var3)(var4, var1);
case 72:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var3['handleTransitionToThread'] = var8;
                        var8 = _closure3_slot0;
                        var10 = var8.getMessage;
                        var9 = var1.messageId;
                        var9 = var10.bind(var8)(var9);
                        var3['message'] = var9;
                        var8 = var8.props;
                        var9 = var8.channel;
                        var8 = null;
                        var10 = var8 != var9;
                        var8 = undefined;
                        if(!var10) { _fun0012_ip = 74; continue _fun0012 }
case 75:
                        var8 = var9;
case 74:
                        var3['messageChannel'] = var8;
                        var3['selectedChannelId'] = var2;
                        var3['tapLinkData'] = var7;
                        var3 = var5.bind(var6)(var3);
                        return var2;
case 70:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.onBeforeJumpToMessage;
                        if(!(var4 != var3)) { _fun0012_ip = 76; continue _fun0012 }
case 19:
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var2 = var3.onBeforeJumpToMessage;
                        var2 = var2.bind(var3)();
case 76:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 26;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.transitionToMessage;
                        var3 = var1.targetChannelId;
                        var2 = var1.targetMessageId;
                        var1 = {};
                        var6 = true;
                        var1['navigationReplace'] = var6;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapLink'] = var3;
                var3 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var4 = var1.url;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var1 = var1.hasActionSheetOpen;
                        if(var1) { _fun0014_ip = 77; continue _fun0014 }
case 78:
                        var2 = null;
                        var1 = var2 == var4;
case 77:
                        if(var1) { _fun0014_ip = 79; continue _fun0014 }
case 80:
                        var2 = '';
                        var1 = var2 === var4;
case 79:
                        if(var1) { _fun0014_ip = 81; continue _fun0014 }
case 67:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 28;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1['urlString'] = var4;
                        var1 = var2.bind(var3)(var1);
case 81:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLongPressLink'] = var3;
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 29;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.messageId;
                        var15 = var2.mediaIndex;
                        var14 = var2.mediaType;
                        var17 = var2.componentId;
                        var13 = var2.componentMediaIndex;
                        var3 = _closure3_slot0;
                        var5 = var3.props;
                        var9 = var5.channel;
                        var3 = var5.hasActionSheetOpen;
                        var12 = var5.allowReactions;
                        if(var3) { _fun0015_ip = 82; continue _fun0015 }
case 34:
                        var3 = _closure3_slot0;
                        var2 = var3.getMessage;
                        var8 = var2.bind(var3)(var4);
                        var6 = null;
                        if(!(var6 != var8)) { _fun0015_ip = 82; continue _fun0015 }
case 83:
                        var4 = _closure1_slot14;
                        var3 = var4.getUser;
                        var2 = var8.author;
                        var2 = var2.id;
                        var5 = var3.bind(var4)(var2);
                        if(!(var6 != var5)) { _fun0015_ip = 82; continue _fun0015 }
case 84:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 19;
                        var2 = var4[var2];
                        var10 = var3.bind(var1)(var2);
                        var7 = var10.getLongPressSelectedMedia;
                        var2 = 30;
                        var2 = var4[var2];
                        var16 = var3.bind(var1)(var2);
                        var2 = var16.asComponentId;
                        var19 = var2.bind(var16)(var17);
                        var23 = var10;
                        var22 = var8;
                        var21 = var15;
                        var20 = var14;
                        var18 = var13;
                        var7 = var23[var7](var22, var21, var20, var19, var18, var17);
                        var10 = _closure1_slot2;
                        var2 = 31;
                        var2 = var4[var2];
                        var10 = var10.bind(var1)(var2);
                        var2 = var10.dismissGlobalKeyboard;
                        var2 = var2.bind(var10)();
                        var2 = 32;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.showLongPressMessageActionSheet;
                        var2 = {};
                        var10 = 'Preview';
                        var2['actionSheetSource'] = var10;
                        var10 = {};
                        var13 = _closure1_slot17;
                        var13 = var13.CHANNEL_SEARCH;
                        var10['section'] = var13;
                        var13 = _closure1_slot16;
                        var13 = var13.CHANNEL_SEARCH;
                        var10['object'] = var13;
                        var2['analyticsLocation'] = var10;
                        var10 = true;
                        var10 = var10 === var12;
                        if(!var10) { _fun0015_ip = 85; continue _fun0015 }
case 50:
                        var10 = var6 != var9;
case 85:
                        if(!var10) { _fun0015_ip = 86; continue _fun0015 }
case 87:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var11 = 33;
                        var11 = var13[var11];
                        var11 = var12.bind(var1)(var11);
                        var10 = var11.bind(var1)(var9);
case 86:
                        var2['canAddNewReactions'] = var10;
                        var2['channel'] = var9;
                        var2['message'] = var8;
                        var8 = var6 != var7;
                        var6 = undefined;
                        if(!var8) { _fun0015_ip = 88; continue _fun0015 }
case 89:
                        var6 = var7;
case 88:
                        var2['selectedMedia'] = var6;
                        var2['user'] = var5;
                        var2 = var3.bind(var4)(var2);
case 82:
                        return var1;
                    }
                };
                var1['handleLongPressMessage'] = var3;
                var3 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 29;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.getNativeSyntheticEventData;
                        var3 = arg1;
                        var3 = var4.bind(var5)(var3);
                        var7 = var3.reaction;
                        var6 = var3.messageId;
                        var5 = var3.channelId;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.hasActionSheetOpen;
                        if(var3) { _fun0016_ip = 90; continue _fun0016 }
case 4:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 34;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleViewPreviewReactions;
                        var2 = null;
                        var8 = var2 != var7;
                        var2 = undefined;
                        if(!var8) { _fun0016_ip = 91; continue _fun0016 }
case 92:
                        var2 = var7.emoji;
case 91:
                        var2 = var3.bind(var4)(var6, var5, var2);
case 90:
                        return var1;
                    }
                };
                var1['handleLongPressReaction'] = var3;
                var3 = function(arg1) {
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var1 = arg1;
                        var2 = _closure3_slot0;
                        var3 = var2.props;
                        var7 = var3.channel;
                        var2 = var3.hasActionSheetOpen;
                        var3 = var3.allowReactions;
                        if(var2) { _fun0017_ip = 93; continue _fun0017 }
case 94:
                        var2 = true;
                        if(!(var2 === var3)) { _fun0017_ip = 93; continue _fun0017 }
case 24:
                        var9 = null;
                        if(!(var9 != var7)) { _fun0017_ip = 93; continue _fun0017 }
case 95:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 29;
                        var2 = var4[var2];
                        var10 = undefined;
                        var5 = var3.bind(var10)(var2);
                        var2 = var5.getNativeSyntheticEventData;
                        var2 = var2.bind(var5)(var1);
                        var12 = var2.reaction;
                        var6 = var2.messageId;
                        var5 = var2.isBurst;
                        var2 = 19;
                        var2 = var4[var2];
                        var4 = var3.bind(var10)(var2);
                        var3 = var4.handleAddOrRemoveReaction;
                        var11 = var9 != var12;
                        var2 = null;
                        if(!var11) { _fun0017_ip = 96; continue _fun0017 }
case 97:
                        var11 = {};
                        var18 = var11;
                        var17 = var12;
                        var13 = copyDataProperties(var18, var17);
                        var13 = var12.emoji;
                        var12 = 'emoji';
                        var11[11] = var13;
                        var2 = var11;
case 96:
                        var1 = var1.nativeEvent;
                        var1 = var1.location;
                        if(!(var9 == var1)) { _fun0017_ip = 98; continue _fun0017 }
case 99:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var8 = 35;
                        var8 = var11[var8];
                        var8 = var9.bind(var10)(var8);
                        var8 = var8.ReactionLocations;
                        var1 = var8.MESSAGE;
case 98:
                        var19 = var4;
                        var18 = var6;
                        var17 = var7;
                        var16 = var2;
                        var15 = var5;
                        var14 = var1;
                        var1 = var19[var3](var18, var17, var16, var15, var14, var13);
case 93:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapReaction'] = var3;
                var3 = function(arg1) {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.nativeEvent;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessage;
                        var1 = var4.id;
                        var7 = var2.bind(var3)(var1);
                        var2 = null;
                        if(!(var2 != var7)) { _fun0018_ip = 100; continue _fun0018 }
case 94:
                        var6 = _closure1_slot13;
                        var5 = var6.getChannel;
                        var3 = var7.getChannelId;
                        var3 = var3.bind(var7)();
                        var6 = var5.bind(var6)(var3);
                        if(!(var2 != var6)) { _fun0018_ip = 100; continue _fun0018 }
case 101:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 36;
                        var1 = var3[var1];
                        var5 = undefined;
                        var3 = var2.bind(var5)(var1);
                        var2 = var3.handleMessagesTapImage;
                        var1 = {};
                        var1['tapImageData'] = var4;
                        var4 = true;
                        var1['allowWithinModal'] = var4;
                        var1['message'] = var7;
                        var1['messageChannel'] = var6;
                        var1['selectedChannelId'] = var5;
                        var1['showContextName'] = var4;
                        var1 = var2.bind(var3)(var1);
case 100:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapImage'] = var3;
                var3 = function(arg1) {
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 29;
                    var2 = var4[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.getNativeSyntheticEventData;
                    var2 = arg1;
                    var2 = var5.bind(var6)(var2);
                    var5 = var2.data;
                    var2 = 37;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.handleMessagesTapChannel;
                    var2 = {};
                    var2['data'] = var5;
                    var5 = true;
                    var2['navigationReplace'] = var5;
                    var5 = _closure3_slot0;
                    var5 = var5.props;
                    var5 = var5.onBeforeJumpToMessage;
                    var2['onBeforeNavigate'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var1['handleTapChannel'] = var3;
                var2 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 29;
                        var3 = var3[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.getNativeSyntheticEventData;
                        var3 = arg1;
                        var3 = var4.bind(var5)(var3);
                        var5 = var3.data;
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var3 = var3.hasActionSheetOpen;
                        if(var3) { _fun0019_ip = 28; continue _fun0019 }
case 102:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 38;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleMessagesLongPressChannel;
                        var2 = {};
                        var2['data'] = var5;
                        var2 = var3.bind(var4)(var2);
case 28:
                        return var1;
                    }
                };
                var1['handleLongPressChannel'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot8;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot5;
        var5 = {};
        var1 = 'componentDidMount';
        var5['key'] = var1;
        var1 = function value() {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var2 = this;
                var1 = var2.props;
                var3 = var1.messages;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0020_ip = 103; continue _fun0020 }
case 104:
                var3 = var2.props;
                var4 = var3.canAccessChannel;
                var3 = false;
                var1 = var3 !== var4;
case 103:
                if(!var1) { _fun0020_ip = 105; continue _fun0020 }
case 71:
                var1 = var2.setup;
                var1 = var1.bind(var2)();
case 105:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'componentWillUnmount';
        var5['key'] = var7;
        var7 = function value() {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var1 = this;
                var2 = var1.chatRef;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0021_ip = 62; continue _fun0021 }
case 106:
                var2 = var1.chatManager;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
case 62:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'componentDidUpdate';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var4 = var1.messages;
                var2 = var3.props;
                var2 = var2.messages;
                var2 = var4 === var2;
                if(!var2) { _fun0022_ip = 107; continue _fun0022 }
case 68:
                var5 = var1.width;
                var4 = var3.props;
                var4 = var4.width;
                var2 = var5 === var4;
case 107:
                if(var2) { _fun0022_ip = 108; continue _fun0022 }
case 79:
                var4 = var3.setup;
                var5 = var1.width;
                var2 = var3.props;
                var2 = var2.width;
                var2 = var5 !== var2;
                var2 = var4.bind(var3)(var2);
case 108:
                var2 = var1.canAccessChannel;
                var1 = var3.props;
                var1 = var1.canAccessChannel;
                var1 = var2 !== var1;
                if(!var1) { _fun0022_ip = 109; continue _fun0022 }
case 110:
                var2 = var3.props;
                var4 = var2.messages;
                var2 = null;
                var1 = var2 != var4;
case 109:
                if(!var1) { _fun0022_ip = 111; continue _fun0022 }
case 90:
                var2 = var3.setup;
                var1 = var3.props;
                var1 = var1.canAccessChannel;
                var1 = !var1;
                var1 = !var1;
                var1 = var2.bind(var3)(var1);
case 111:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'render';
        var5['key'] = var7;
        var6 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var12 = this;
                var3 = _closure1_slot23;
                var2 = var12.context;
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var2 = var12.props;
                var9 = var2.channel;
                var3 = var2.isNSFWHidden;
                var2 = var2.isSpoilerHidden;
                if(!var3) { _fun0023_ip = 5; continue _fun0023 }
case 112:
                var6 = null;
                var7 = var6 == var9;
                var3 = undefined;
                if(var7) { _fun0023_ip = 73; continue _fun0023 }
case 113:
                var3 = var9.guild_id;
case 73:
                if(!(var6 == var3)) { _fun0023_ip = 114; continue _fun0023 }
case 5:
                if(!var2) { _fun0023_ip = 31; continue _fun0023 }
case 66:
                var3 = null;
                var6 = var3 == var9;
                var2 = undefined;
                if(var6) { _fun0023_ip = 29; continue _fun0023 }
case 115:
                var2 = var9.guild_id;
case 29:
                if(!(var3 == var2)) { _fun0023_ip = 116; continue _fun0023 }
case 31:
                var6 = _closure1_slot21;
                var3 = _closure1_slot1;
                var7 = _closure1_slot3;
                var2 = 41;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var8 = var12.chatRef;
                var2['ref'] = var8;
                var8 = var5.chat;
                var2['style'] = var8;
                var8 = true;
                var2['inverted'] = var8;
                var10 = var12.handleTapLink;
                var2['onTapLink'] = var10;
                var10 = var12.handleTapChannel;
                var2['onTapChannel'] = var10;
                var10 = var12.handleLongPressChannel;
                var2['onLongPressChannel'] = var10;
                var10 = var12.handleLongPressLink;
                var2['onLongPressLink'] = var10;
                var10 = var12.handleLongPressMessage;
                var2['onLongPressMessage'] = var10;
                var10 = var12.handleLongPressReaction;
                var2['onLongPressReaction'] = var10;
                var10 = var12.handleTapReaction;
                var2['onTapReaction'] = var10;
                var10 = var12.handleTapImage;
                var2['onTapImage'] = var10;
                var10 = _closure1_slot0;
                var11 = 42;
                var7 = var7[var11];
                var10 = var10.bind(var4)(var7);
                var7 = var10.isIOS;
                var10 = var7.bind(var10)();
                var7 = undefined;
                if(!var10) { _fun0023_ip = 117; continue _fun0023 }
case 118:
                var7 = var12.handleCompleteFirstLayout;
case 117:
                var2['onCompleteFirstLayout'] = var7;
                var10 = _closure1_slot0;
                var7 = _closure1_slot3;
                var7 = var7[var11];
                var10 = var10.bind(var4)(var7);
                var7 = var10.isIOS;
                var10 = var7.bind(var10)();
                var7 = undefined;
                if(var10) { _fun0023_ip = 119; continue _fun0023 }
case 120:
                var7 = var12.handleCompleteFirstLayout;
case 119:
                var2['onFirstLayout'] = var7;
                var3 = var6.bind(var4)(var3, var2);
                var7 = _closure1_slot21;
                var18 = _closure1_slot0;
                var19 = _closure1_slot3;
                var2 = 43;
                var2 = var19[var2];
                var2 = var18.bind(var4)(var2);
                var6 = var2.SafeAreaPaddingView;
                var2 = {};
                var2['bottom'] = var8;
                var8 = var5.jumpToChatButtonContainer;
                var2['style'] = var8;
                var11 = _closure1_slot21;
                var8 = 44;
                var8 = var19[var8];
                var8 = var18.bind(var4)(var8);
                var10 = var8.PressableOpacity;
                var8 = {};
                var13 = 'button';
                var8['accessibilityRole'] = var13;
                var13 = var5.jumpToChatButton;
                var8['style'] = var13;
                var12 = var12.handleJumpToChat;
                var8['onPress'] = var12;
                var14 = _closure1_slot21;
                var12 = 45;
                var12 = var19[var12];
                var12 = var18.bind(var4)(var12);
                var13 = var12.Text;
                var12 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-text-default'};
                var15 = var5.jumpToChatText;
                var12['style'] = var15;
                var15 = 22;
                var16 = var19[var15];
                var16 = var18.bind(var4)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var4)(var15);
                var15 = var15.t;
                var15 = var15["+TSRGD"];
                var15 = var16.bind(var17)(var15);
                var12['children'] = var15;
                var12 = var14.bind(var4)(var13, var12);
                var8['children'] = var12;
                var8 = var11.bind(var4)(var10, var8);
                var2['children'] = var8;
                var6 = var7.bind(var4)(var6, var2);
                var7 = var3;
                _fun0023_ip = 121; continue _fun0023;
case 116:
                var8 = _closure1_slot21;
                var3 = _closure1_slot1;
                var10 = _closure1_slot3;
                var2 = 40;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var10 = var9.guild_id;
                var2['guildId'] = var10;
                var10 = var9.id;
                var2['channelId'] = var10;
                var7 = var8.bind(var4)(var3, var2);
                var6 = undefined;
                _fun0023_ip = 121; continue _fun0023;
case 114:
                var8 = _closure1_slot21;
                var3 = _closure1_slot1;
                var10 = _closure1_slot3;
                var2 = 39;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var10 = var9.guild_id;
                var2['guildId'] = var10;
                var9 = var9.id;
                var2['channelId'] = var9;
                var7 = var8.bind(var4)(var3, var2);
                var6 = undefined;
case 121:
                var3 = _closure1_slot22;
                var2 = _closure1_slot10;
                var1 = {};
                var5 = var5.containerInner;
                var1['style'] = var5;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var5.bind(var1)(var8);
    var _closure1_slot24 = var8;
    var5 = 46;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ThemeContext;
    var8['contextType'] = var5;
    var5 = {};
    var5['withSafeArea'] = var9;
    var8['defaultProps'] = var5;
    var5 = 53;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'components_native/common/ChatPreview.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function ChatPreviewConnected(arg1) {
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 48;
        var3 = var4[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var3);
        var6 = var7.useStateFromStoresObject;
        var3 = _closure1_slot15;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() {
            var1 = {};
            var2 = _closure1_slot15;
            var3 = var2.messages;
            var1['messages'] = var3;
            var2 = var2.jumpTargetId;
            var1['jumpTargetId'] = var2;
            return var1;
        };
        var3 = var6.bind(var7)(var5, var3);
        var7 = var3.messages;
        var6 = var3.jumpTargetId;
        var8 = _closure1_slot9;
        var5 = var8.useEffect;
        var3 = function() {
            var1 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 52;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.clearMessages;
                var2 = var2.bind(var3)();
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var5.bind(var8)(var3, var2);
        var3 = _closure1_slot21;
        var2 = _closure1_slot26;
        var1 = {};
        var9 = arg1;
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var5 = 'messages';
        var1[4] = var7;
        var5 = 'jumpTargetId';
        var1[4] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var3['ChatPreview'] = var2;
    return var1;
})();
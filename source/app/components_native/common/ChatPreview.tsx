// app/components_native/common/ChatPreview.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var7 = metroImportAll;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var _closure1_slot3 = var6;
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
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var8 = true;
    var4['value'] = var8;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var15 = 0;
    var4 = var6[var15];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var12 = 1;
    var4 = var6[var12];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var7 = 6;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var14 = var7.StyleSheet;
    var7 = var7.View;
    var _closure1_slot10 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot11 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot12 = var7;
    var7 = 9;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot13 = var7;
    var7 = 10;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot14 = var7;
    var7 = 11;
    var7 = var6[var7];
    var7 = var13.bind(var1)(var7);
    var _closure1_slot15 = var7;
    var7 = 12;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.AnalyticsObjects;
    var _closure1_slot16 = var9;
    var7 = var7.AnalyticsSections;
    var _closure1_slot17 = var7;
    var7 = 13;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.Changeset;
    var _closure1_slot18 = var9;
    var9 = var7.RowType;
    var _closure1_slot19 = var9;
    var7 = var7.SeparatorType;
    var _closure1_slot20 = var7;
    var7 = 14;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var9 = var7.jsx;
    var _closure1_slot21 = var9;
    var7 = var7.jsxs;
    var _closure1_slot22 = var7;
    var7 = 15;
    var7 = var6[var7];
    var10 = var5.bind(var1)(var7);
    var9 = var10.createLegacyClassComponentStyles;
    var7 = {};
    var11 = {'flex': 1, 'overflow': 'hidden'};
    var7['chat'] = var11;
    var11 = {};
    var11['flex'] = var12;
    var12 = 16;
    var16 = var6[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BACKGROUND_PRIMARY;
    var11['backgroundColor'] = var16;
    var7['containerInner'] = var11;
    var11 = {};
    var11['flexShrink'] = var15;
    var15 = var6[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_FLOATING;
    var11['backgroundColor'] = var15;
    var7['jumpToChatButtonContainer'] = var11;
    var11 = {};
    var15 = 44;
    var11['height'] = var15;
    var14 = var14.hairlineWidth;
    var11['borderTopWidth'] = var14;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MODIFIER_ACCENT;
    var11['borderTopColor'] = var12;
    var7['jumpToChatButton'] = var11;
    var11 = {'textAlign': 'center', 'flex': 1, 'lineHeight': 44};
    var7['jumpToChatText'] = var11;
    var7 = var9.bind(var10)(var7);
    var _closure1_slot23 = var7;
    var7 = var4.PureComponent;
    var4 = function(arg1) {
        var4 = function ChatPreview(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var11);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var7 = _closure1_slot7;
                var7 = var7.bind(var6)(var5);
                var7 = var7.constructor;
                var1 = var8.bind(var9)(var10, var11, var7);
case 8:
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
                var3 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var5 = arguments[0];
                        var1 = undefined;
                        if(!(var5 === var1)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                        var5 = false;
case 9:
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var1;
                        var _closure4_slot2 = var1;
                        var _closure4_slot3 = var1;
                        var _closure4_slot4 = var1;
                        var _closure4_slot5 = var1;
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var6 = var2.channel;
                        _closure4_slot0 = var6;
                        var10 = var2.messages;
                        _closure4_slot1 = var10;
                        var6 = var2.roleStyle;
                        _closure4_slot2 = var6;
                        var7 = var2.jumpTargetId;
                        var13 = var2.inlineAttachmentMedia;
                        var14 = var2.inlineEmbedMedia;
                        var15 = var2.renderEmbeds;
                        var12 = var2.shouldFilterKeywords;
                        var6 = null;
                        if(!(var6 != var10)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                        var2 = _closure3_slot0;
                        var11 = var2.rowGenerator;
                        var9 = var11.setOptions;
                        var8 = {};
                        var8['renderEmbeds'] = var15;
                        var8['inlineEmbedMedia'] = var14;
                        var8['inlineAttachmentMedia'] = var13;
                        var13 = var2.props;
                        var13 = var13.width;
                        var8['constrainedWidth'] = var13;
                        var8['shouldFilterKeywords'] = var12;
                        var8 = var9.bind(var11)(var8);
                        var8 = var2.chatManager;
                        var2 = var8.setup;
                        var2 = var2.bind(var8)(var10);
                        var8 = _closure1_slot18;
                        if(var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                        var5 = var8.NOOP;
                        _fun0003_ip = 15; continue _fun0003;
case 13:
                        var5 = var8.UPDATE;
case 15:
                        _closure4_slot3 = var5;
                        var9 = new Array(0);
                        _closure4_slot4 = var9;
                        var8 = var10.forEach;
                        var5 = function(arg1) {
                            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                                var4 = arg1;
                                var3 = _closure4_slot4;
                                var2 = 0;
                                var3 = var3[var2];
                                var2 = null;
                                if(!(var2 == var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                                var6 = _closure4_slot4;
                                var5 = var6.unshift;
                                var2 = new Array(1);
                                var2[0] = var4;
                                var2 = var5.bind(var6)(var2);
                                _fun0004_ip = 18; continue _fun0004;
case 16:
                                var5 = var3.length;
                                var2 = 1;
                                var2 = var5 - var2;
                                var7 = var3[var2];
                                var5 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var2 = 19;
                                var2 = var6[var2];
                                var6 = undefined;
                                var5 = var5.bind(var6)(var2);
                                var2 = _closure4_slot0;
                                var2 = var5.bind(var6)(var2, var7, var4);
                                if(var2) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                                var2 = var3.unshift;
                                var2 = var2.bind(var3)(var4);
                                _fun0004_ip = 18; continue _fun0004;
case 19:
                                var3 = _closure4_slot4;
                                var2 = var3.unshift;
                                var1 = new Array(1);
                                var1[0] = var4;
                                var1 = var2.bind(var3)(var1);
case 18:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var5 = var8.bind(var10)(var5);
                        var8 = new Array(0);
                        _closure4_slot5 = var8;
                        var5 = var9.forEach;
                        var4 = function(arg1, arg2) {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                                var11 = arg1;
                                var _closure5_slot0 = var11;
                                var1 = var11.length;
                                var8 = 1;
                                var1 = var1 - var8;
                                var4 = var11[var1];
                                var _closure5_slot1 = var4;
                                var2 = _closure4_slot4;
                                var1 = var2.length;
                                var1 = var1 - var8;
                                var1 = var2[var1];
                                var2 = var1 === var11;
                                var10 = false;
                                var _closure5_slot2 = var10;
                                var7 = null;
                                var12 = null;
                                if(var2) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                                var3 = _closure4_slot4;
                                var1 = arg2;
                                var1 = var1 + var8;
                                var3 = var3[var1];
                                var1 = 0;
                                var1 = var3[var1];
                                var12 = var1.timestamp;
case 21:
                                if(var2) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                                var2 = var7 == var12;
case 23:
                                if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot3;
                                var1 = 20;
                                var3 = var3[var1];
                                var1 = undefined;
                                var5 = var5.bind(var1)(var3);
                                var3 = var5.isSameDay;
                                var1 = var4.timestamp;
                                var2 = var3.bind(var5)(var1, var12);
case 25:
                                var1 = false;
                                if(var2) { _fun0005_ip = 27; continue _fun0005 }
case 28:
                                var2 = true;
                                _closure5_slot2 = var2;
                                var1 = true;
case 27:
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
                                var5 = _closure4_slot5;
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
                                if(var10) { _fun0005_ip = 29; continue _fun0005 }
case 30:
                                var10 = var4.ignored;
                                if(var10) { _fun0005_ip = 31; continue _fun0005 }
case 32:
                                var10 = var11.forEach;
                                var9 = function(arg1) {
                                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                                        var6 = arg1;
                                        var3 = _closure4_slot5;
                                        var2 = var3.push;
                                        var1 = {};
                                        var5 = _closure4_slot2;
                                        var1['roleStyle'] = var5;
                                        var5 = _closure1_slot19;
                                        var5 = var5.MESSAGE;
                                        var1['rowType'] = var5;
                                        var4 = _closure4_slot3;
                                        var1['changeType'] = var4;
                                        var1['message'] = var6;
                                        var4 = _closure5_slot1;
                                        var7 = var6 === var4;
                                        var1['isFirst'] = var7;
                                        var7 = false;
                                        var1['isEditing'] = var7;
                                        var6 = var6 !== var4;
                                        var4 = !var6;
                                        if(var6) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                                        var4 = _closure5_slot2;
case 33:
                                        var1['separatorBefore'] = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var9 = var10.bind(var11)(var9);
                                _fun0005_ip = 35; continue _fun0005;
case 31:
                                var9 = var7 != var3;
                                if(!var9) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                                var11 = var3.rowType;
                                var10 = _closure1_slot19;
                                var10 = var10.IGNORED_GROUP;
                                var9 = var11 === var10;
case 36:
                                var10 = var3;
                                if(var9) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                                var9 = {};
                                var17 = var9;
                                var16 = var8;
                                var11 = copyDataProperties(var17, var16);
                                var11 = _closure1_slot19;
                                var12 = var11.IGNORED_GROUP;
                                var11 = 'rowType';
                                var9[var11] = var12;
                                var12 = _closure4_slot5;
                                var11 = var12.push;
                                var11 = var11.bind(var12)(var9);
                                var10 = var9;
case 38:
                                var14 = undefined;
                                var9 = var2.bind(var14)(var10);
                                var11 = _closure1_slot0;
                                var15 = _closure1_slot3;
                                var9 = 21;
                                var12 = var15[var9];
                                var12 = var11.bind(var14)(var12);
                                var13 = var12.intl;
                                var12 = var13.formatToPlainString;
                                var9 = var15[var9];
                                var9 = var11.bind(var14)(var9);
                                var9 = var9.t;
                                var11 = var9.VFWjc3;
                                var9 = {};
                                var14 = var10.content;
                                var14 = var14.length;
                                var9['count'] = var14;
                                var9 = var12.bind(var13)(var11, var9);
                                var10['text'] = var9;
                                _fun0005_ip = 35; continue _fun0005;
case 29:
                                var7 = var7 != var3;
                                if(!var7) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                                var10 = var3.rowType;
                                var9 = _closure1_slot19;
                                var9 = var9.BLOCKED_GROUP;
                                var7 = var10 === var9;
case 40:
                                if(var7) { _fun0005_ip = 42; continue _fun0005 }
case 43:
                                var7 = {};
                                var17 = var7;
                                var16 = var8;
                                var8 = copyDataProperties(var17, var16);
                                var8 = _closure1_slot19;
                                var9 = var8.BLOCKED_GROUP;
                                var8 = 'rowType';
                                var7[var8] = var9;
                                var9 = _closure4_slot5;
                                var8 = var9.push;
                                var8 = var8.bind(var9)(var7);
                                var3 = var7;
case 42:
                                var10 = undefined;
                                var2 = var2.bind(var10)(var3);
                                var7 = _closure1_slot0;
                                var11 = _closure1_slot3;
                                var2 = 21;
                                var8 = var11[var2];
                                var8 = var7.bind(var10)(var8);
                                var9 = var8.intl;
                                var8 = var9.formatToPlainString;
                                var2 = var11[var2];
                                var2 = var7.bind(var10)(var2);
                                var2 = var2.t;
                                var7 = var2.+FcYMz;
                                var2 = {};
                                var10 = var3.content;
                                var10 = var10.length;
                                var2['count'] = var10;
                                var2 = var8.bind(var9)(var7, var2);
                                var3['text'] = var2;
case 35:
                                if(!var1) { _fun0005_ip = 44; continue _fun0005 }
case 45:
                                var3 = _closure4_slot5;
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
                                var5 = 20;
                                var6 = var6[var5];
                                var5 = undefined;
                                var7 = var7.bind(var5)(var6);
                                var6 = var7.dateFormat;
                                var5 = var4.timestamp;
                                var4 = 'LL';
                                var4 = var6.bind(var7)(var5, var4);
                                var1['text'] = var4;
                                var1 = var2.bind(var3)(var1);
case 44:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var4 = var5.bind(var9)(var4);
                        var4 = var8.length;
                        var5 = 0;
                        var4 = var5 < var4;
                        if(!var4) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                        var12 = var8[var5];
                        var4 = _closure3_slot0;
                        var10 = var4.chatManager;
                        var9 = var10.createRow;
                        var11 = var4.rowGenerator;
                        var4 = var11.generate;
                        var4 = var4.bind(var11)(var12);
                        var4 = var9.bind(var10)(var4);
                        var5 = var5 + 1;
                        var4 = var8.length;
                        if(var5 < var4) { _fun0003_ip = 47; continue _fun0003 }
case 46:
                        var5 = _closure3_slot0;
                        var4 = var5.chatManager;
                        var3 = var4.createChangeset;
                        var4 = var3.bind(var4)();
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var2 = 22;
                        var2 = var8[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = {};
                        var9 = var5.chatManager;
                        var8 = var9.getPreviousRows;
                        var8 = var8.bind(var9)();
                        var2['rows'] = var8;
                        var2['scrollToMessageId'] = var7;
                        var2['jumpTargetId'] = var7;
                        var2['jumpType'] = var1;
                        var7 = false;
                        var2['shouldInitialScroll'] = var7;
                        var2['animated'] = var7;
                        var2['scrollPosition'] = var1;
                        var2['focusTargetId'] = var6;
                        var3 = var3.bind(var1)(var2);
                        var2 = var5.updateContent;
                        var2 = var2.bind(var5)(var4, var3);
case 11:
                        return var1;
                    }
                };
                var1['setup'] = var3;
                var3 = function(arg1, arg2) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure3_slot0;
                        var1 = var1.chatRef;
                        var4 = var1.current;
                        var1 = null;
                        if(!(var1 != var4)) { _fun0007_ip = 6; continue _fun0007 }
case 48:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 23;
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
case 6:
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
                    var2 = 24;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.find;
                    var2 = _closure3_slot0;
                    var2 = var2.props;
                    var2 = var2.messages;
                    var1 = function(arg1) {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var1 = arg1;
                            var4 = var1.id;
                            var3 = var1.nonce;
                            var1 = _closure4_slot0;
                            var1 = var4 === var1;
                            if(var1) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                            var2 = _closure4_slot0;
                            var1 = var3 === var2;
case 49:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1['getMessage'] = var3;
                var3 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure3_slot0;
                        var3 = var3.props;
                        var4 = var3.onBeforeJumpToMessage;
                        var3 = null;
                        if(!(var3 != var4)) { _fun0009_ip = 51; continue _fun0009 }
case 52:
                        var4 = _closure3_slot0;
                        var5 = var4.props;
                        var4 = var5.onBeforeJumpToMessage;
                        var4 = var4.bind(var5)();
case 51:
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var4 = var2.channelId;
                        var _closure4_slot0 = var4;
                        var2 = var2.jumpTargetId;
                        var _closure4_slot1 = var2;
                        if(!(var3 != var2)) { _fun0009_ip = 53; continue _fun0009 }
case 54:
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.resolve;
                        var3 = var2.bind(var3)();
                        var2 = var3.then;
                        var1 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 25;
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
case 53:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleJumpToChat'] = var3;
                var3 = function(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var4 = var1.data;
                        var2 = var4.url;
                        var1 = null;
                        var1 = var1 != var2;
                        if(!var1) { _fun0010_ip = 55; continue _fun0010 }
case 56:
                        var3 = var4.url;
                        var2 = '';
                        var1 = var2 !== var3;
case 55:
                        if(!var1) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 26;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.handleClick;
                        var1 = {};
                        var4 = var4.url;
                        var1['href'] = var4;
                        var1 = var2.bind(var3)(var1);
case 57:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapLink'] = var3;
                var3 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var1 = arg1;
                        var1 = var1.nativeEvent;
                        var4 = var1.url;
                        var1 = _closure3_slot0;
                        var1 = var1.props;
                        var1 = var1.hasActionSheetOpen;
                        if(var1) { _fun0011_ip = 55; continue _fun0011 }
case 59:
                        var2 = null;
                        var1 = var2 == var4;
case 55:
                        if(var1) { _fun0011_ip = 60; continue _fun0011 }
case 58:
                        var2 = '';
                        var1 = var2 === var4;
case 60:
                        if(var1) { _fun0011_ip = 57; continue _fun0011 }
case 61:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var1 = 27;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = {};
                        var1['urlString'] = var4;
                        var1 = var2.bind(var3)(var1);
case 57:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleLongPressLink'] = var3;
                var3 = function(arg1) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 28;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.getNativeSyntheticEventData;
                        var2 = arg1;
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.messageId;
                        var14 = var2.mediaIndex;
                        var13 = var2.mediaType;
                        var16 = var2.componentId;
                        var12 = var2.componentMediaIndex;
                        var2 = _closure3_slot0;
                        var2 = var2.props;
                        var9 = var2.channel;
                        var2 = var2.hasActionSheetOpen;
                        if(var2) { _fun0012_ip = 62; continue _fun0012 }
case 63:
                        var3 = _closure1_slot15;
                        var2 = var3.getMessage;
                        var8 = var2.bind(var3)(var4);
                        var6 = null;
                        if(!(var6 != var8)) { _fun0012_ip = 62; continue _fun0012 }
case 64:
                        var4 = _closure1_slot14;
                        var3 = var4.getUser;
                        var2 = var8.author;
                        var2 = var2.id;
                        var5 = var3.bind(var4)(var2);
                        if(!(var6 != var5)) { _fun0012_ip = 62; continue _fun0012 }
case 65:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 29;
                        var2 = var4[var2];
                        var10 = var3.bind(var1)(var2);
                        var7 = var10.getLongPressSelectedMedia;
                        var2 = 30;
                        var2 = var4[var2];
                        var15 = var3.bind(var1)(var2);
                        var2 = var15.asComponentId;
                        var18 = var2.bind(var15)(var16);
                        var22 = var10;
                        var21 = var8;
                        var20 = var14;
                        var19 = var13;
                        var17 = var12;
                        var7 = var22[var7](var21, var20, var19, var18, var17, var16);
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
                        var2 = {'actionSheetSource': 'Preview', 'analyticsLocation': null, 'canAddNewReactions': false};
                        var10 = {};
                        var12 = _closure1_slot17;
                        var12 = var12.CHANNEL_SEARCH;
                        var10['section'] = var12;
                        var11 = _closure1_slot16;
                        var11 = var11.CHANNEL_SEARCH;
                        var10['object'] = var11;
                        var2['analyticsLocation'] = var10;
                        var2['channel'] = var9;
                        var2['message'] = var8;
                        var8 = var6 != var7;
                        var6 = undefined;
                        if(!var8) { _fun0012_ip = 66; continue _fun0012 }
case 67:
                        var6 = var7;
case 66:
                        var2['selectedMedia'] = var6;
                        var2['user'] = var5;
                        var2 = var3.bind(var4)(var2);
case 62:
                        return var1;
                    }
                };
                var1['handleLongPressMessage'] = var3;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 28;
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
                        if(var3) { _fun0013_ip = 68; continue _fun0013 }
case 4:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 33;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.handleViewPreviewReactions;
                        var2 = null;
                        var8 = var2 != var7;
                        var2 = undefined;
                        if(!var8) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                        var2 = var7.emoji;
case 69:
                        var2 = var3.bind(var4)(var6, var5, var2);
case 68:
                        return var1;
                    }
                };
                var1['handleLongPressReaction'] = var3;
                var2 = function(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        var1 = arg1;
                        var4 = var1.nativeEvent;
                        var3 = _closure3_slot0;
                        var2 = var3.getMessage;
                        var1 = var4.id;
                        var7 = var2.bind(var3)(var1);
                        var2 = null;
                        if(!(var2 != var7)) { _fun0014_ip = 71; continue _fun0014 }
case 72:
                        var6 = _closure1_slot13;
                        var5 = var6.getChannel;
                        var3 = var7.getChannelId;
                        var3 = var3.bind(var7)();
                        var6 = var5.bind(var6)(var3);
                        if(!(var2 != var6)) { _fun0014_ip = 71; continue _fun0014 }
case 73:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 34;
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
case 71:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1['handleTapImage'] = var2;
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = this;
                var1 = var2.props;
                var3 = var1.messages;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0015_ip = 55; continue _fun0015 }
case 74:
                var3 = var2.props;
                var4 = var3.canAccessChannel;
                var3 = false;
                var1 = var3 !== var4;
case 55:
                if(!var1) { _fun0015_ip = 75; continue _fun0015 }
case 58:
                var1 = var2.setup;
                var1 = var1.bind(var2)();
case 75:
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var1 = this;
                var2 = var1.chatRef;
                var3 = var2.current;
                var2 = null;
                if(!(var2 != var3)) { _fun0016_ip = 76; continue _fun0016 }
case 77:
                var2 = var1.chatManager;
                var1 = var2.clear;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 35;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.clearMessages;
                var1 = var1.bind(var2)();
case 76:
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
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var4 = var1.messages;
                var2 = var3.props;
                var2 = var2.messages;
                var2 = var4 === var2;
                if(!var2) { _fun0017_ip = 78; continue _fun0017 }
case 79:
                var5 = var1.width;
                var4 = var3.props;
                var4 = var4.width;
                var2 = var5 === var4;
case 78:
                if(var2) { _fun0017_ip = 80; continue _fun0017 }
case 81:
                var4 = var3.setup;
                var5 = var1.width;
                var2 = var3.props;
                var2 = var2.width;
                var2 = var5 !== var2;
                var2 = var4.bind(var3)(var2);
case 80:
                var2 = var1.canAccessChannel;
                var1 = var3.props;
                var1 = var1.canAccessChannel;
                var1 = var2 !== var1;
                if(!var1) { _fun0017_ip = 82; continue _fun0017 }
case 83:
                var2 = var3.props;
                var4 = var2.messages;
                var2 = null;
                var1 = var2 != var4;
case 82:
                if(!var1) { _fun0017_ip = 65; continue _fun0017 }
case 84:
                var2 = var3.setup;
                var1 = var3.props;
                var1 = var1.canAccessChannel;
                var1 = !var1;
                var1 = !var1;
                var1 = var2.bind(var3)(var1);
case 65:
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
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var11 = this;
                var3 = _closure1_slot23;
                var2 = var11.context;
                var4 = undefined;
                var5 = var3.bind(var4)(var2);
                var2 = var11.props;
                var3 = var2.canAccessChannel;
                var9 = var2.channel;
                var2 = null;
                if(!(var2 != var3)) { _fun0018_ip = 75; continue _fun0018 }
case 85:
                var2 = false;
                if(!(var2 !== var3)) { _fun0018_ip = 86; continue _fun0018 }
case 75:
                var7 = _closure1_slot21;
                var3 = _closure1_slot1;
                var17 = _closure1_slot3;
                var2 = 37;
                var2 = var17[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var6 = var11.chatRef;
                var2['ref'] = var6;
                var6 = var5.chat;
                var2['style'] = var6;
                var8 = true;
                var2['inverted'] = var8;
                var6 = var11.handleTapLink;
                var2['onTapLink'] = var6;
                var6 = var11.handleLongPressLink;
                var2['onLongPressLink'] = var6;
                var6 = var11.handleLongPressMessage;
                var2['onLongPressMessage'] = var6;
                var6 = var11.handleLongPressReaction;
                var2['onLongPressReaction'] = var6;
                var6 = var11.handleTapImage;
                var2['onTapImage'] = var6;
                var3 = var7.bind(var4)(var3, var2);
                var16 = _closure1_slot0;
                var2 = 38;
                var2 = var17[var2];
                var2 = var16.bind(var4)(var2);
                var6 = var2.SafeAreaPaddingView;
                var2 = {};
                var2['bottom'] = var8;
                var8 = var5.jumpToChatButtonContainer;
                var2['style'] = var8;
                var8 = 39;
                var8 = var17[var8];
                var8 = var16.bind(var4)(var8);
                var10 = var8.PressableOpacity;
                var8 = {};
                var12 = 'button';
                var8['accessibilityRole'] = var12;
                var12 = var5.jumpToChatButton;
                var8['style'] = var12;
                var11 = var11.handleJumpToChat;
                var8['onPress'] = var11;
                var11 = 40;
                var11 = var17[var11];
                var11 = var16.bind(var4)(var11);
                var12 = var11.Text;
                var11 = {'style': null, 'variant': 'text-md/medium', 'color': 'interactive-normal'};
                var13 = var5.jumpToChatText;
                var11['style'] = var13;
                var13 = 21;
                var14 = var17[var13];
                var14 = var16.bind(var4)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var17[var13];
                var13 = var16.bind(var4)(var13);
                var13 = var13.t;
                var13 = var13.+TSRGB;
                var13 = var14.bind(var15)(var13);
                var11['children'] = var13;
                var11 = var7.bind(var4)(var12, var11);
                var8['children'] = var11;
                var8 = var7.bind(var4)(var10, var8);
                var2['children'] = var8;
                var6 = var7.bind(var4)(var6, var2);
                var7 = var3;
                _fun0018_ip = 87; continue _fun0018;
case 86:
                var8 = _closure1_slot21;
                var3 = _closure1_slot1;
                var10 = _closure1_slot3;
                var2 = 36;
                var2 = var10[var2];
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var10 = var9.getGuildId;
                var10 = var10.bind(var9)();
                var2['guildId'] = var10;
                var9 = var9.id;
                var2['channelId'] = var9;
                var7 = var8.bind(var4)(var3, var2);
                var6 = undefined;
case 87:
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
    var7 = var4.bind(var1)(var7);
    var _closure1_slot24 = var7;
    var4 = 41;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ThemeContext;
    var7['contextType'] = var4;
    var4 = {};
    var4['withSafeArea'] = var8;
    var7['defaultProps'] = var4;
    var4 = 47;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'components_native/common/ChatPreview.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChatPreviewConnected(arg1) {
        var5 = arg1;
        var1 = var5.channelId;
        var _closure2_slot0 = var1;
        var3 = _closure1_slot0;
        var6 = _closure1_slot3;
        var7 = 42;
        var8 = var6[var7];
        var4 = undefined;
        var8 = var3.bind(var4)(var8);
        var9 = var8.InlineAttachmentMedia;
        var8 = var9.useSetting;
        var16 = var8.bind(var9)();
        var8 = var6[var7];
        var8 = var3.bind(var4)(var8);
        var9 = var8.InlineEmbedMedia;
        var8 = var9.useSetting;
        var15 = var8.bind(var9)();
        var7 = var6[var7];
        var7 = var3.bind(var4)(var7);
        var8 = var7.RenderEmbeds;
        var7 = var8.useSetting;
        var14 = var7.bind(var8)();
        var7 = 43;
        var8 = var6[var7];
        var11 = var3.bind(var4)(var8);
        var10 = var11.useStateFromStoresObject;
        var8 = _closure1_slot15;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            var1 = {};
            var2 = _closure1_slot15;
            var3 = var2.messages;
            var1['messages'] = var3;
            var2 = var2.jumpTargetId;
            var1['jumpTargetId'] = var2;
            return var1;
        };
        var8 = var10.bind(var11)(var9, var8);
        var12 = var8.messages;
        var11 = var8.jumpTargetId;
        var8 = var6[var7];
        var13 = var3.bind(var4)(var8);
        var10 = var13.useStateFromStores;
        var8 = _closure1_slot11;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            var1 = _closure1_slot11;
            var1 = var1.roleStyle;
            return var1;
        };
        var13 = var10.bind(var13)(var9, var8);
        var8 = var6[var7];
        var17 = var3.bind(var4)(var8);
        var10 = var17.useStateFromStores;
        var8 = _closure1_slot13;
        var9 = new Array(1);
        var9[0] = var8;
        var8 = function() {
            var3 = _closure1_slot13;
            var2 = var3.getChannel;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var10 = var10.bind(var17)(var9, var8);
        var9 = _closure1_slot1;
        var8 = 44;
        var8 = var6[var8];
        var8 = var9.bind(var4)(var8);
        var8 = var8.bind(var4)();
        var9 = var8.width;
        var8 = 45;
        var8 = var6[var8];
        var17 = var3.bind(var4)(var8);
        var8 = var17.useIsChannelContentGated;
        var8 = var8.bind(var17)(var10);
        var8 = !var8;
        var7 = var6[var7];
        var18 = var3.bind(var4)(var7);
        var17 = var18.useStateFromStores;
        var19 = _closure1_slot12;
        var7 = new Array(1);
        var7[0] = var19;
        var2 = function() {
            var2 = _closure1_slot12;
            var1 = var2.getContent;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            return var1;
        };
        var7 = var17.bind(var18)(var7, var2);
        var2 = 46;
        var2 = var6[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useShouldFilterKeywords;
        var6 = var2.bind(var3)();
        var3 = _closure1_slot21;
        var2 = _closure1_slot24;
        var1 = {};
        var21 = var1;
        var20 = var5;
        var5 = copyDataProperties(var21, var20);
        var5 = 'inlineAttachmentMedia';
        var1[var5] = var16;
        var5 = 'inlineEmbedMedia';
        var1[var5] = var15;
        var5 = 'renderEmbeds';
        var1[var5] = var14;
        var5 = 'roleStyle';
        var1[var5] = var13;
        var5 = 'messages';
        var1[var5] = var12;
        var5 = 'jumpTargetId';
        var1[var5] = var11;
        var5 = 'channel';
        var1[var5] = var10;
        var5 = 'width';
        var1[var5] = var9;
        var5 = 'canAccessChannel';
        var1[var5] = var8;
        var5 = 'hasActionSheetOpen';
        var1[var5] = var7;
        var5 = 'shouldFilterKeywords';
        var1[var5] = var6;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();